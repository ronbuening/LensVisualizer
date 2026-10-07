/**
 * Manufacturer-chart regression report.
 *
 * An audit digitized the makers' published MTF charts of a set of lens configurations into "anchors": one chart
 * value per field position at 10 and 30 lp/mm (reports/data/mtfChartAnchors.csv). This report recomputes the
 * simulated MTF at every anchor and tabulates how far it sits from the chart, under the audit's own settings and
 * under each maker's chart convention (reports/data/mtfChartConventions.ts), and how closely the engine still
 * reproduces the values the audit recorded.
 *
 * It traces every configuration at a 256 pupil-grid cap, so it runs only with MTF_CHART_REPORT=1 and is skipped by a
 * plain `npm run generate:reports`. Chart agreement is reported and never asserted, here or in any test.
 *
 * Regenerate: `MTF_CHART_REPORT=1 npm run generate:reports -- mtfChartRegression`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { env } from "node:process";
import { MTF_CONVERGENCE_TOLERANCE } from "../src/optics/analysis/mtfConstants.js";
import { wideOpenStopAtZoom } from "../src/optics/apertureStop.js";
import buildLens from "../src/optics/buildLens.js";
import { prepareRuntimeState } from "../src/optics/compat.js";
import { computeMtf } from "../src/optics/mtf.js";
import { computeAnalysisFieldGeometryAtState, entrancePupilAtState } from "../src/optics/optics.js";
import type { MtfMethod, MtfOptions, MtfResult } from "../src/types/mtf.js";
import type { LensData } from "../src/types/optics.js";
import { mtfChartConvention, type MtfChartConvention, type MtfChartMethod } from "./data/mtfChartConventions.js";

const modules = import.meta.glob<{ default: LensData }>("../src/lens-data/**/*.data.ts", { eager: true });
const ANCHORS_PATH = "reports/data/mtfChartAnchors.csv";
const REPORT_DIR = "agent_docs/generated";
const REPORT_PATH = `${REPORT_DIR}/mtf-chart-regression.generated.md`;
const ENABLED = env.MTF_CHART_REPORT === "1";
/** The inherited 30 s test timeout covers only a few configurations. */
const TIMEOUT_MS = 30 * 60 * 1000;

/** Constants of the anchor file: its row count and the mean deltas of the values the audit recorded. */
const ANCHOR_COUNT = 392;
const RECORDED_MEAN_SIGNED = -0.0631;
const RECORDED_MEAN_ABSOLUTE = 0.0731;

/** The audit's request; pupil, stop and fields are sized per configuration. */
const AUDIT_METHOD: MtfMethod = "geometric-dl";
const FREQUENCIES = [0, 10, 20, 30, 40, 50];
/** Engine method that stands in for each chart method. Only a geometric chart leaves diffraction out. */
const ENGINE_METHOD: Record<MtfChartMethod, MtfMethod> = {
  geometric: "geometric",
  diffraction: "geometric-dl",
  measured: "geometric-dl",
  unknown: "geometric-dl",
};
/** Field bands by upper bound, set between the tenths of the field the anchors sit on. */
const FIELD_BANDS = [
  { label: "0-0.3", upTo: 0.35 },
  { label: "0.4-0.7", upTo: 0.75 },
  { label: "0.8-1.0", upTo: Infinity },
];
const fieldBand = (fraction: number) => FIELD_BANDS.find((band) => fraction <= band.upTo);

/** One digitized chart value and the audit's own result at the same field and frequency. */
interface Anchor {
  key: string;
  zoomT: number;
  fieldFraction: number;
  frequency: number;
  /** Envelope of the chart's sagittal and meridional strokes, which the digitization does not tell apart. */
  pairMin: number;
  pairMax: number;
  apertureLabel: number;
  methodPrinted: string;
  sourceUrl: string;
  allowance: number;
  recorded: Curves;
}

interface Curves {
  sagittal: number;
  tangential: number;
}

interface Sample {
  anchor: Anchor;
  maker: string;
  /** Recomputed under the audit's settings and under the maker's convention; null where the field has no curve. */
  audit: Curves | null;
  convention: Curves | null;
}

/** One lens at one zoom position: a single published chart. */
interface Configuration {
  key: string;
  zoomT: number;
  maker: string;
  convention: MtfChartConvention;
  /** True when a source erratum was corrected in the lens file, which the audit predates. */
  corrected: boolean;
  /** Result under the audit's settings; focus and aperture do not depend on the method. */
  result: MtfResult;
  samples: Sample[];
}

/** Delta of one sample under one comparison; null when the comparison has no curve there. */
type Comparison = (sample: Sample) => number | null;

const delta = (curves: Curves, anchor: Anchor) =>
  (curves.sagittal + curves.tangential) / 2 - (anchor.pairMin + anchor.pairMax) / 2;
const AUDIT_SETTINGS: Comparison = (sample) => sample.audit && delta(sample.audit, sample.anchor);
const MAKER_CONVENTION: Comparison = (sample) => sample.convention && delta(sample.convention, sample.anchor);
const RECORDED: Comparison = (sample) => delta(sample.anchor.recorded, sample.anchor);

const mean = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length;
const fixed = (value: number, digits = 4) => value.toFixed(digits);
/** Fixed decimals with an explicit sign; a value that rounds to zero prints unsigned. */
function signed(value: number): string {
  const text = fixed(Math.abs(value));
  return Number(text) === 0 ? text : `${value < 0 ? "-" : "+"}${text}`;
}
const row = (cells: (string | number)[]) => `| ${cells.join(" | ")} |`;
/** Code-unit order, so the report sorts the same under every locale. */
const byText = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);

/** Split one CSV record on commas outside double quotes. Fields here never hold a line break. */
function splitCsvRecord(record: string): string[] {
  const cells: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < record.length; i++) {
    const char = record[i];
    if (quoted && char === '"' && record[i + 1] === '"') {
      cell += '"';
      i++;
    } else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) {
      cells.push(cell);
      cell = "";
    } else cell += char;
  }
  return [...cells, cell];
}

function readAnchors(): Anchor[] {
  const [header, ...records] = readFileSync(ANCHORS_PATH, "utf8").trim().split("\n").map(splitCsvRecord);
  return records.map((cells) => {
    const text = (column: string) => {
      const index = header.indexOf(column);
      if (index < 0) throw new Error(`${ANCHORS_PATH} has no "${column}" column`);
      return cells[index];
    };
    const number = (column: string) => {
      const value = Number(text(column));
      if (!Number.isFinite(value)) throw new Error(`${ANCHORS_PATH}: "${column}" of ${cells[0]} is not a number`);
      return value;
    };
    return {
      key: text("key"),
      zoomT: number("zoomT"),
      fieldFraction: number("field_fraction"),
      frequency: number("frequency_lp_mm"),
      pairMin: number("manufacturer_pair_min"),
      pairMax: number("manufacturer_pair_max"),
      apertureLabel: number("chart_aperture_label"),
      methodPrinted: text("chart_method_printed"),
      sourceUrl: text("source_url"),
      allowance: number("digitization_allowance_mtf"),
      recorded: { sagittal: number("audit_sagittal"), tangential: number("audit_tangential") },
    };
  });
}

/** Sagittal and tangential values of one field at one frequency; null when the field returned no curve. */
function curvesAt(result: MtfResult, fieldIndex: number, frequency: number): Curves | null {
  const field = result.fields[fieldIndex];
  const index = result.frequenciesPerMm.indexOf(frequency);
  if (index < 0 || (field.status !== "converged" && field.status !== "unconverged")) return null;
  return { sagittal: field.sagittal[index], tangential: field.tangential[index] };
}

/** Trace one chart's configuration under the audit's settings and, when it differs, the maker's convention. */
function runConfiguration(lens: LensData, zoomT: number, anchors: Anchor[]): Configuration {
  const L = buildLens(lens);
  const state = prepareRuntimeState(L, 0, zoomT);
  // Sized as the audit sized it: the wide-open iris of this zoom position and the entrance pupil it projects.
  const stop = wideOpenStopAtZoom(zoomT, L);
  const pupil = entrancePupilAtState(stop, 0, zoomT, L, computeAnalysisFieldGeometryAtState(0, zoomT, L, 0), 0).epSD;
  const fieldFractions = [...new Set(anchors.map((anchor) => anchor.fieldFraction))].sort((a, b) => a - b);
  const options = (method: MtfMethod): MtfOptions => ({
    method,
    spectrum: "photopic",
    focus: "best-axial",
    maxGridSize: 256,
    frequenciesPerMm: FREQUENCIES,
    fieldFractions,
    pupilSemiDiameterMm: pupil,
    stopSemiDiameterMm: stop,
  });
  const maker = lens.maker ?? "Unknown";
  const convention = mtfChartConvention(lens.maker);
  const conventionMethod = ENGINE_METHOD[convention.method];
  const result = computeMtf(state, options(AUDIT_METHOD));
  const conventionResult = conventionMethod === AUDIT_METHOD ? result : computeMtf(state, options(conventionMethod));
  return {
    key: lens.key,
    zoomT,
    maker,
    convention,
    corrected: (lens.sourceErrata ?? []).some((erratum) => erratum.status === "corrected"),
    result,
    samples: anchors.map((anchor) => {
      const fieldIndex = fieldFractions.indexOf(anchor.fieldFraction);
      return {
        anchor,
        maker,
        audit: curvesAt(result, fieldIndex, anchor.frequency),
        convention: curvesAt(conventionResult, fieldIndex, anchor.frequency),
      };
    }),
  };
}

/** Mean signed delta, mean absolute delta and share of negative deltas, as table cells. */
function deltaCells(samples: Sample[], comparison: Comparison): string[] {
  const deltas = samples.map(comparison).filter((value) => value !== null);
  if (!deltas.length) return ["n/a", "n/a", "n/a"];
  const negative = deltas.filter((value) => value < 0).length;
  return [signed(mean(deltas)), fixed(mean(deltas.map(Math.abs))), `${fixed((100 * negative) / deltas.length, 1)}%`];
}

/** recomputed - recorded for the sagittal and tangential value of every sample, under the audit's settings. */
const reproductionGaps = (samples: Sample[]) =>
  samples.flatMap(({ audit, anchor }) =>
    audit ? [audit.sagittal - anchor.recorded.sagittal, audit.tangential - anchor.recorded.tangential] : [],
  );

/** Largest and mean absolute gap, mean signed gap, and the count beyond the convergence tolerance. */
function gapCells(gaps: number[]): (string | number)[] {
  if (!gaps.length) return ["n/a", "n/a", "n/a", 0];
  const sizes = gaps.map(Math.abs);
  return [
    fixed(Math.max(...sizes)),
    fixed(mean(sizes)),
    signed(mean(gaps)),
    sizes.filter((size) => size > MTF_CONVERGENCE_TOLERANCE).length,
  ];
}

function reproductionTable(configurations: Configuration[]): string[] {
  const lines = [
    `| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Above ${MTF_CONVERGENCE_TOLERANCE} | Fields converged | Final grids |`,
    "|---|---:|---:|---:|---:|---:|---:|---:|---:|",
  ];
  for (const { key, zoomT, result, samples } of configurations) {
    const gaps = reproductionGaps(samples);
    const grids = result.fields.map((field) => field.gridSize);
    const [coarsest, finest] = [Math.min(...grids), Math.max(...grids)];
    const converged = result.fields.filter((field) => field.status === "converged").length;
    lines.push(
      row([
        `\`${key}\``,
        zoomT,
        gaps.length,
        ...gapCells(gaps),
        `${converged}/${result.fields.length}`,
        coarsest === finest ? coarsest : `${coarsest}-${finest}`,
      ]),
    );
  }
  return lines;
}

function renderReport(configurations: Configuration[]): string {
  const samples = configurations.flatMap((configuration) => configuration.samples);
  const makers = [...new Set(configurations.map((configuration) => configuration.maker))];
  const groups: [string, Sample[]][] = [
    ["All", samples],
    ...makers.map((maker): [string, Sample[]] => [maker, samples.filter((sample) => sample.maker === maker)]),
  ];
  const lensCount = new Set(configurations.map((configuration) => configuration.key)).size;
  const allowances = [...new Set(samples.map((sample) => sample.anchor.allowance))].sort((a, b) => a - b);
  const frequencies = [...new Set(samples.map((sample) => sample.anchor.frequency))].sort((a, b) => a - b);
  const lines: string[] = [];

  lines.push(
    "# MTF Chart Regression (auto-generated)",
    "",
    `Simulated MTF of ${configurations.length} lens configurations against values digitized from the makers' published`,
    `MTF charts: ${samples.length} samples in \`${ANCHORS_PATH}\`, one per charted field position at`,
    `${frequencies.join(" and ")} lp/mm.`,
    "",
    "**Regenerate this file** by running `MTF_CHART_REPORT=1 npm run generate:reports -- mtfChartRegression`.",
    "Without the variable the run is skipped, because it traces every configuration at a 256 pupil-grid cap.",
    "",
    "## Reading the Numbers",
    "",
    "- **Delta** is simulation minus chart, `(S + T) / 2 - (pair_min + pair_max) / 2`, in MTF units on the 0-1",
    "  scale. A negative delta means the simulation reads below the chart.",
    "- **Only pair midpoints are compared.** The digitization records the envelope of a chart's two strokes at each",
    "  image height without assigning them to sagittal and meridional, so a midpoint can hide opposite errors in S",
    "  and T.",
    `- **Samples are correlated, not independent measurements.** The ${samples.length} samples come from`,
    `  ${configurations.length} charts of ${lensCount} lenses; neighbors on a curve share a prescription, an image plane`,
    "  and a digitization. The means describe this set and carry no confidence interval.",
    `- **Digitization allowance: ±${allowances.join(", ±")} MTF.** A heuristic for reading a value off a published`,
    "  raster, not an error bound; it does not cover differences between the charted lens and the model.",
    "- **Agreement is reported, never a test threshold.** No test asserts on these numbers, and a published chart is",
    "  not evidence for changing a prescription.",
    "- The simulation is the authored prescription at infinity, wide open, in the photopic spectrum, on the best",
    "  axial focus plane. The chart is the production lens under conditions the maker mostly leaves unstated.",
    "",
    "Two comparisons are tabulated:",
    "",
    `- **Audit settings**: method \`${AUDIT_METHOD}\` for every maker, as the audit that digitized the charts ran it.`,
    "- **Maker convention**: the method the maker's charts are computed with, from",
    "  `reports/data/mtfChartConventions.ts`. A geometric chart is simulated as `geometric`, every other as",
    `  \`${AUDIT_METHOD}\`. The basis of a convention is part of the claim.`,
    "",
    "| Maker | Chart method | Basis | Simulated as | Evidence |",
    "|---|---|---|---|---|",
  );
  for (const maker of makers) {
    const { method, basis, citation } = mtfChartConvention(maker);
    lines.push(row([maker, method, basis, `\`${ENGINE_METHOD[method]}\``, citation]));
  }
  lines.push("");

  const missing = samples.filter((sample) => !sample.audit || !sample.convention);
  if (missing.length) {
    lines.push(`**${missing.length} samples have no simulated curve** and are left out of every mean below:`, "");
    for (const { anchor } of missing)
      lines.push(`- \`${anchor.key}\` zoomT ${anchor.zoomT}, field ${anchor.fieldFraction}, ${anchor.frequency} lp/mm`);
    lines.push("");
  }

  lines.push(
    "## Summary",
    "",
    "`Recorded by the audit` is the audit's own S and T from the anchor file, not a recomputation.",
    "",
    "| Maker | Comparison | Samples | Mean signed | Mean absolute | Negative |",
    "|---|---|---:|---:|---:|---:|",
  );
  const comparisons: [string, Comparison][] = [
    ["Audit settings", AUDIT_SETTINGS],
    ["Maker convention", MAKER_CONVENTION],
    ["Recorded by the audit", RECORDED],
  ];
  for (const [group, members] of groups)
    for (const [label, comparison] of comparisons) {
      const count = members.filter((sample) => comparison(sample) !== null).length;
      lines.push(row([group, label, count, ...deltaCells(members, comparison)]));
    }
  lines.push("");

  lines.push(
    "## By Frequency and Field Band",
    "",
    "Field is the fraction of the reference image height. Each comparison lists mean signed delta, mean absolute",
    "delta and the share of negative samples.",
    "",
    "| Maker | lp/mm | Field | Samples | Audit: signed | absolute | negative | Convention: signed | absolute | negative |",
    "|---|---:|---|---:|---:|---:|---:|---:|---:|---:|",
  );
  for (const [group, members] of groups)
    for (const frequency of frequencies)
      for (const band of FIELD_BANDS) {
        const inBand = members.filter(
          ({ anchor }) => anchor.frequency === frequency && fieldBand(anchor.fieldFraction) === band,
        );
        lines.push(
          row([
            group,
            frequency,
            band.label,
            inBand.length,
            ...deltaCells(inBand, AUDIT_SETTINGS),
            ...deltaCells(inBand, MAKER_CONVENTION),
          ]),
        );
      }
  lines.push("");

  lines.push(
    "## Per Configuration",
    "",
    "`Label f/` is the aperture printed on the chart; `Traced f/` is the working f-number of the simulated axial",
    "beam, and `Limited by` the surface that bounds it. Focus shift is the best axial focus plane relative to the",
    "authored image plane, in mm. Each comparison lists mean signed and mean absolute delta.",
    "",
    "| Lens | zoomT | Maker | Chart convention | Label f/ | Traced f/ | Limited by | Focus shift | Audit: signed | absolute | Convention: signed | absolute |",
    "|---|---:|---|---|---:|---:|---|---:|---:|---:|---:|---:|",
  );
  for (const { key, zoomT, maker, convention, result, samples: own } of configurations)
    lines.push(
      row([
        `\`${key}\``,
        zoomT,
        maker,
        `${convention.method} (${convention.basis})`,
        fixed(own[0].anchor.apertureLabel, 2),
        result.aperture ? fixed(result.aperture.tracedFNumber, 2) : "n/a",
        result.aperture ? (result.aperture.limitingSurfaceLabel ?? "iris") : "n/a",
        result.focus ? signed(result.focus.appliedShiftMm) : "n/a",
        ...deltaCells(own, AUDIT_SETTINGS).slice(0, 2),
        ...deltaCells(own, MAKER_CONVENTION).slice(0, 2),
      ]),
    );
  lines.push("");

  const unchanged = configurations.filter((configuration) => !configuration.corrected);
  const corrected = configurations.filter((configuration) => configuration.corrected);
  const gaps = reproductionGaps(unchanged.flatMap((configuration) => configuration.samples));
  const [largest, meanSize, meanGap, above] = gapCells(gaps);
  lines.push(
    "## Reproduction of the Audit",
    "",
    "The anchor file keeps the S and T the audit itself computed at every sample, with the settings of the",
    "`Audit settings` comparison and a pupil grid forced through 128 and 256. This report refines up to the same",
    `cap but stops once successive grids agree within ${MTF_CONVERGENCE_TOLERANCE}, usually on a coarser grid. Gaps of about that size`,
    "therefore come from sampling alone, and they carry into the `Audit settings` rows above; larger ones mean the",
    "engine or the lens data changed. Each row summarizes `recomputed - recorded` over the S and T of every sample.",
    "",
    ...reproductionTable(unchanged),
    "",
    `Over these ${unchanged.length} configurations (${gaps.length} values): max absolute ${largest}, mean absolute`,
    `${meanSize}, mean signed ${meanGap}, ${above} above ${MTF_CONVERGENCE_TOLERANCE}.`,
    "",
    "### Prescription corrected since the audit",
    "",
    "Lenses with a `sourceErrata` entry of status `corrected` no longer carry the prescription the audit traced, so",
    "they are left out of the aggregate above.",
    "",
    ...(corrected.length ? reproductionTable(corrected) : ["None."]),
    "",
    "## Chart Sources",
    "",
    "| Lens | zoomT | Method printed on the chart | Chart |",
    "|---|---:|---|---|",
  );
  for (const { key, zoomT, samples: own } of configurations)
    lines.push(row([`\`${key}\``, zoomT, own[0].anchor.methodPrinted, own[0].anchor.sourceUrl]));
  return lines.join("\n") + "\n";
}

describe.skipIf(!ENABLED)("MTF chart regression report", () => {
  it(
    "emits simulated MTF against the digitized manufacturer charts",
    () => {
      const anchors = readAnchors();
      expect(anchors).toHaveLength(ANCHOR_COUNT);
      const recordedDeltas = anchors.map((anchor) => delta(anchor.recorded, anchor));
      expect(Math.abs(mean(recordedDeltas) - RECORDED_MEAN_SIGNED)).toBeLessThan(0.0005);
      expect(Math.abs(mean(recordedDeltas.map(Math.abs)) - RECORDED_MEAN_ABSOLUTE)).toBeLessThan(0.0005);

      const lensByKey = new Map(Object.values(modules).map((module) => [module.default.key, module.default]));
      expect([...new Set(anchors.map((anchor) => anchor.key))].filter((key) => !lensByKey.has(key))).toEqual([]);

      // One chart per lens and zoom position.
      const charts = new Map<string, Anchor[]>();
      for (const anchor of anchors) {
        const id = `${anchor.key}|${anchor.zoomT}`;
        charts.set(id, [...(charts.get(id) ?? []), anchor]);
      }
      const configurations = [...charts.values()]
        .map((group) => runConfiguration(lensByKey.get(group[0].key)!, group[0].zoomT, group))
        .sort((a, b) => byText(a.maker, b.maker) || byText(a.key, b.key) || a.zoomT - b.zoomT);

      mkdirSync(REPORT_DIR, { recursive: true });
      writeFileSync(REPORT_PATH, renderReport(configurations));
      // Structural only: every requested field must return curves. How close they sit to a chart is never asserted.
      const withoutCurves = configurations
        .flatMap((configuration) => configuration.samples)
        .filter((sample) => !sample.audit || !sample.convention)
        .map(({ anchor }) => `${anchor.key}|${anchor.zoomT}|${anchor.fieldFraction}`);
      expect(withoutCurves).toEqual([]);
    },
    TIMEOUT_MS,
  );
});
