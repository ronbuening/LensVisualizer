/**
 * Manufacturer-chart regression report.
 *
 * An audit digitized the makers' published MTF charts of a set of lens configurations into "anchors": one chart
 * value per field position at 10 and 30 lp/mm (reports/data/mtfChartAnchors.csv). This report recomputes the
 * simulated MTF at every anchor and tabulates how far it sits from the chart, with diffraction for every maker and
 * under each maker's chart convention (reports/data/mtfChartConventions.ts). It also holds the diffraction estimate
 * against an optical-path autocorrelation of the same rays, and keeps the audit's own values as a frozen reference:
 * the audit ran a method that no longer exists.
 *
 * Tracing every configuration at a 256 pupil-grid cap requires MTF_CHART_REPORT=1; a plain run only refreshes the
 * report's freshness status from input hashes. Chart agreement is reported and never asserted.
 *
 * Regenerate: `MTF_CHART_REPORT=1 npm run generate:reports -- mtfChartRegression`
 */
import type { LensDataV2Input } from "../src/types/lensDataV2.js";
import { createAnalysisRequest } from "../src/optics/analysis.js";
import { describe, expect, it } from "vitest";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { cwd, env } from "node:process";
import { fNumberAtStopdown, wideOpenStopAtZoom } from "../src/optics/optics.js";
import { buildLens } from "../src/optics/buildLens.js";
import { prepareRuntimeState } from "../src/optics/optics.js";
import { computeMtf } from "../src/optics/mtf.js";
import { computeAnalysisFieldGeometryAtState, entrancePupilAtState } from "../src/optics/fieldGeometry.js";
import type { MtfMethod, MtfOptions, MtfResult } from "../src/types/mtf.js";
import { mtfChartConvention, type MtfChartConvention, type MtfChartMethod } from "./data/mtfChartConventions.js";
import {
  chartDeltas,
  parseChartAnchors,
  correctedSinceAudit,
  crossCheckConfiguration,
  stoppedDownCrossCheck,
  renderCrossCheckPass,
  CROSS_CHECK_GRID,
  CROSS_CHECK_FREQUENCIES,
  CROSS_CHECK_PHASE_STEP_WAVES,
} from "./mtfChartLib.js";
import type { Anchor, ChartDeltas, Curves, CrossCheckPass } from "./mtfChartLib.js";
import {
  createMtfChartProvenance,
  hashMtfChartInputs,
  MTF_CHART_ANCHORS_PATH as ANCHORS_PATH,
  mtfChartStatus,
  parseMtfChartProvenance,
  updateMtfChartStatus,
} from "./mtfChartProvenance.js";
import type { MtfChartProvenance } from "./mtfChartProvenance.js";

// Lazy imports keep the freshness-only run independent of the catalog's module loading cost.
const modules = import.meta.glob<{ default: LensDataV2Input }>("../src/lens-data/**/*.data.ts");
const REPORT_DIR = "agent_docs/generated";
const REPORT_PATH = `${REPORT_DIR}/mtf-chart-regression.generated.md`;
const ENABLED = env.MTF_CHART_REPORT === "1";
/** The inherited 30 s test timeout covers only a few configurations. */
const TIMEOUT_MS = 30 * 60 * 1000;

/** Constants of the anchor file: its row count and the mean deltas of the values the audit recorded. */
const ANCHOR_COUNT = 392;
const RECORDED_MEAN_SIGNED = -0.0631;
const RECORDED_MEAN_ABSOLUTE = 0.0731;

/** Method of the one-method comparison; pupil, stop and fields are sized per configuration. */
const DIFFRACTION_METHOD: MtfMethod = "diffraction";
const FREQUENCIES = [0, 10, 20, 30, 40, 50];
/** Engine method that stands in for each chart method. Only a geometric chart leaves diffraction out. */
const ENGINE_METHOD: Record<MtfChartMethod, MtfMethod> = {
  geometric: "geometric",
  diffraction: "diffraction",
  measured: "diffraction",
  unknown: "diffraction",
};
/**
 * The audit recorded its own S and T with the diffraction-corrected product, geometric OTF times the diffraction
 * limit, which the engine no longer has. The last run of this report that still had it reproduced those values as
 * below, over the configurations whose prescription was unchanged since the audit.
 */
const RETIRED_AUDIT_METHOD = "geometric-dl";
const LAST_REPRODUCTION = {
  configurations: 18,
  values: 744,
  maxAbsolute: 0.0127,
  meanAbsolute: 0.0047,
  meanSigned: -0.0047,
};
/** Field bands by upper bound, set between the tenths of the field the anchors sit on. */
const FIELD_BANDS = [
  { label: "0-0.3", upTo: 0.35 },
  { label: "0.4-0.7", upTo: 0.75 },
  { label: "0.8-1.0", upTo: Infinity },
];
const fieldBand = (fraction: number) => FIELD_BANDS.find((band) => fraction <= band.upTo);

interface Sample {
  anchor: Anchor;
  maker: string;
  /** Recomputed with diffraction and under the maker's convention; null where the field has no curve. */
  diffraction: Curves | null;
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
  /** Result of the diffraction method; focus and aperture do not depend on the method. */
  result: MtfResult;
  samples: Sample[];
  crossChecks: { wideOpen: CrossCheckPass; stoppedDown: CrossCheckPass };
  settings: { diffraction: MtfOptions; makerConvention: MtfOptions };
}

/** Delta of one sample under one comparison; null when the comparison has no curve there. */
type Comparison = (sample: Sample) => ChartDeltas | null;

const delta = chartDeltas;
const DIFFRACTION: Comparison = (sample) => sample.diffraction && delta(sample.diffraction, sample.anchor);
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

const readAnchors = () => parseChartAnchors(readFileSync(ANCHORS_PATH, "utf8"));

/** Sagittal and tangential values of one field at one frequency; null when the field returned no curve. */
function curvesAt(result: MtfResult, fieldIndex: number, frequency: number): Curves | null {
  const field = result.fields[fieldIndex];
  const index = result.frequenciesPerMm.indexOf(frequency);
  // An unsupported request returns no fields at all; its samples are then listed as missing, not thrown on.
  if (!field || index < 0 || (field.status !== "converged" && field.status !== "unconverged")) return null;
  return { sagittal: field.sagittal[index], tangential: field.tangential[index] };
}

/** Trace one chart's configuration with diffraction and, when it differs, under the maker's convention. */
function runConfiguration(lens: LensDataV2Input, zoomT: number, anchors: Anchor[]): Configuration {
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
  const result = computeMtf(
    createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: options(DIFFRACTION_METHOD).pupilSemiDiameterMm,
      currentPhysStopSD: options(DIFFRACTION_METHOD).stopSemiDiameterMm,
    }),
    options(DIFFRACTION_METHOD),
  );
  const conventionResult =
    conventionMethod === DIFFRACTION_METHOD
      ? result
      : computeMtf(
          createAnalysisRequest({
            preparedState: state,
            dynamicEFL: 0,
            currentEPSD: options(conventionMethod).pupilSemiDiameterMm,
            currentPhysStopSD: options(conventionMethod).stopSemiDiameterMm,
          }),
          options(conventionMethod),
        );
  return {
    key: lens.key,
    zoomT,
    maker,
    convention,
    corrected: correctedSinceAudit(L),
    result,
    settings: { diffraction: options(DIFFRACTION_METHOD), makerConvention: options(conventionMethod) },
    samples: anchors.map((anchor) => {
      const fieldIndex = fieldFractions.indexOf(anchor.fieldFraction);
      return {
        anchor,
        maker,
        diffraction: curvesAt(result, fieldIndex, anchor.frequency),
        convention: curvesAt(conventionResult, fieldIndex, anchor.frequency),
      };
    }),
    crossChecks: {
      wideOpen: {
        fNumber: fNumberAtStopdown(0, zoomT, L),
        focusShiftMm: result.focus?.appliedShiftMm ?? null,
        check: crossCheckConfiguration(state, options(DIFFRACTION_METHOD), result),
      },
      stoppedDown: stoppedDownCrossCheck(L, zoomT, state, options(DIFFRACTION_METHOD)),
    },
  };
}

/** Mean signed delta, mean absolute delta and share of negative deltas, as table cells. */
function deltaCells(samples: Sample[], comparison: Comparison, metric: keyof ChartDeltas = "midpoint"): string[] {
  const deltas = samples.map((sample) => comparison(sample)?.[metric] ?? null).filter((value) => value !== null);
  if (!deltas.length) return ["n/a", "n/a", "n/a"];
  const negative = deltas.filter((value) => value < 0).length;
  return [signed(mean(deltas)), fixed(mean(deltas.map(Math.abs))), `${fixed((100 * negative) / deltas.length, 1)}%`];
}

/** Keep the pair's level and separation beside each other in every chart-comparison group. */
function pairDeltaCells(samples: Sample[], comparison: Comparison, includeNegative = true): string[] {
  const midpoint = deltaCells(samples, comparison);
  return [
    ...(includeNegative ? midpoint : midpoint.slice(0, 2)),
    ...deltaCells(samples, comparison, "separation").slice(0, 2),
  ];
}

/** diffraction estimate - recorded product for the sagittal and tangential value of every sample. */
const recordedGaps = (samples: Sample[]) =>
  samples.flatMap(({ diffraction, anchor }) =>
    diffraction
      ? [diffraction.sagittal - anchor.recorded.sagittal, diffraction.tangential - anchor.recorded.tangential]
      : [],
  );

/** Largest and mean absolute gap and the mean signed gap. */
function gapCells(gaps: number[]): (string | number)[] {
  if (!gaps.length) return ["n/a", "n/a", "n/a"];
  const sizes = gaps.map(Math.abs);
  return [fixed(Math.max(...sizes)), fixed(mean(sizes)), signed(mean(gaps))];
}

function recordedTable(configurations: Configuration[]): string[] {
  const lines = [
    "| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Fields converged | Final grids |",
    "|---|---:|---:|---:|---:|---:|---:|---:|",
  ];
  for (const { key, zoomT, result, samples } of configurations) {
    const gaps = recordedGaps(samples);
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
        !grids.length ? "n/a" : coarsest === finest ? coarsest : `${coarsest}-${finest}`,
      ]),
    );
  }
  return lines;
}

function renderReport(configurations: Configuration[], provenance: MtfChartProvenance): string {
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
    "Status: current",
    "",
    `Simulated MTF of ${configurations.length} lens configurations against values digitized from the makers' published`,
    `MTF charts: ${samples.length} samples in \`${ANCHORS_PATH}\`, one per charted field position at`,
    `${frequencies.join(" and ")} lp/mm.`,
    "",
    "**Regenerate this file** by running `MTF_CHART_REPORT=1 npm run generate:reports -- mtfChartRegression`.",
    "The provenance stamp records the UTC date, checkout, resolved MTF settings and input hashes of this run.",
    "Without the variable, only the status line is refreshed by comparing input hashes; no lenses are traced.",
    "",
    "## Provenance",
    "",
    "```json",
    JSON.stringify(provenance, null, 2),
    "```",
    "",
    "## Reading the Numbers",
    "",
    "**Midpoint delta** is simulation minus chart, `(S + T) / 2 - (pair_min + pair_max) / 2`, in MTF units;",
    "negative means the simulation reads below the chart. **Separation delta** is `|S - T| - (pair_max - pair_min)`:",
    "positive means more simulated S/T splitting (astigmatism/lateral blur asymmetry), negative less, without",
    "assigning the chart's strokes to sagittal and meridional. Both have mean signed and mean absolute values;",
    "neither is a test threshold, and nothing is fitted to the charts.",
    "",
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
    `- **Diffraction**: method \`${DIFFRACTION_METHOD}\` for every maker, the tab's default. The audit that digitized the`,
    `  charts also ran one method for every maker, the diffraction-corrected product \`${RETIRED_AUDIT_METHOD}\`, which`,
    "  the engine no longer has; its values are kept under The Audit's Recorded Values.",
    "- **Maker convention**: the method the maker's charts are computed with, from",
    "  `reports/data/mtfChartConventions.ts`. A geometric chart is simulated as `geometric`, every other as",
    `  \`${DIFFRACTION_METHOD}\`. The basis of a convention is part of the claim.`,
    "",
    "| Maker | Chart method | Basis | Simulated as | Evidence |",
    "|---|---|---|---|---|",
  );
  for (const maker of makers) {
    const { method, basis, citation } = mtfChartConvention(maker);
    lines.push(row([maker, method, basis, `\`${ENGINE_METHOD[method]}\``, citation]));
  }
  lines.push("");

  const missing = samples.filter((sample) => !sample.diffraction || !sample.convention);
  if (missing.length) {
    lines.push(`**${missing.length} samples have no simulated curve** and are left out of every mean below:`, "");
    for (const { anchor } of missing)
      lines.push(`- \`${anchor.key}\` zoomT ${anchor.zoomT}, field ${anchor.fieldFraction}, ${anchor.frequency} lp/mm`);
    lines.push("");
  }

  // The audit's recorded curves predate any correction, so its rows keep describing the printed table.
  const correctedSamples = configurations
    .filter((configuration) => configuration.corrected)
    .reduce((count, configuration) => count + configuration.samples.length, 0);
  lines.push(
    "## Summary",
    "",
    `\`Recorded by the audit\` is the audit's own S and T from the anchor file, computed with \`${RETIRED_AUDIT_METHOD}\`; it` +
      " is a frozen reference, not a recomputation." +
      (correctedSamples
        ? ` ${correctedSamples} of its samples belong to prescriptions corrected since the audit (listed under` +
          " The Audit's Recorded Values), so those rows still include the printed, uncorrected tables."
        : ""),
    "",
    "| Maker | Comparison | Samples | Midpoint: signed | absolute | negative | Separation: signed | absolute |",
    "|---|---|---:|---:|---:|---:|---:|---:|",
  );
  const comparisons: [string, Comparison][] = [
    ["Diffraction", DIFFRACTION],
    ["Maker convention", MAKER_CONVENTION],
    ["Recorded by the audit", RECORDED],
  ];
  for (const [group, members] of groups)
    for (const [label, comparison] of comparisons) {
      const count = members.filter((sample) => comparison(sample) !== null).length;
      lines.push(row([group, label, count, ...pairDeltaCells(members, comparison)]));
    }
  lines.push("");

  lines.push(
    "## By Frequency and Field Band",
    "",
    "Field is the fraction of the reference image height. Each comparison lists mean signed and mean absolute",
    "midpoint and separation deltas, with the share of negative midpoint samples.",
    "",
    "| Maker | lp/mm | Field | Samples | Diffraction midpoint: signed | absolute | negative | separation: signed | absolute | Convention midpoint: signed | absolute | negative | separation: signed | absolute |",
    "|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
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
            ...pairDeltaCells(inBand, DIFFRACTION),
            ...pairDeltaCells(inBand, MAKER_CONVENTION),
          ]),
        );
      }
  lines.push("");

  lines.push(
    "## Per Configuration",
    "",
    "`Label f/` is the aperture printed on the chart, which the stop rule sizes the iris for; `Vignetted by` names the",
    "surface that clips the axial marginal ray, as the Summary's working f-number reports it. Focus shift is the best",
    "axial focus plane relative to the authored image plane, in mm. Each comparison lists mean signed and mean",
    "absolute midpoint and separation deltas.",
    "",
    "| Lens | zoomT | Maker | Chart convention | Label f/ | Vignetted by | Focus shift | Diffraction midpoint: signed | absolute | separation: signed | absolute | Convention midpoint: signed | absolute | separation: signed | absolute |",
    "|---|---:|---|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
  );
  for (const { key, zoomT, maker, convention, result, samples: own } of configurations)
    lines.push(
      row([
        `\`${key}\``,
        zoomT,
        maker,
        `${convention.method} (${convention.basis})`,
        fixed(own[0].anchor.apertureLabel, 2),
        result.axialVignetting
          ? `${result.axialVignetting.surfaceLabel}${result.axialVignetting.beforeStop ? " (before stop)" : ""}`
          : "—",
        result.focus ? signed(result.focus.appliedShiftMm) : "n/a",
        ...pairDeltaCells(own, DIFFRACTION, false),
        ...pairDeltaCells(own, MAKER_CONVENTION, false),
      ]),
    );
  lines.push("");

  const assigned = samples.filter((sample) => sample.anchor.assigned);
  if (assigned.length) {
    lines.push(
      "## Assigned Directions",
      "",
      "Rows with explicitly assigned chart strokes also list simulation minus chart per direction (T is meridional).",
      "Assignment confidence and the verbatim chart aperture are provenance only; missing assignments or curves",
      "print n/a. Low-confidence assignments are included and labelled, never used as test thresholds or fitted.",
      "",
      "| Lens | zoomT | Field | lp/mm | Assignment confidence | Chart stated aperture | Label f/ | Comparison | S delta | T delta |",
      "|---|---:|---:|---:|---|---|---:|---|---:|---:|",
    );
    for (const sample of assigned) {
      const { anchor } = sample;
      for (const [label, comparison] of comparisons) {
        const deltas = comparison(sample);
        lines.push(
          row([
            `\`${anchor.key}\``,
            anchor.zoomT,
            anchor.fieldFraction,
            anchor.frequency,
            anchor.assignmentConfidence ?? "unspecified",
            (anchor.statedAperture ?? "unspecified").replace(/\|/g, "\\|"),
            fixed(anchor.apertureLabel, 2),
            label,
            deltas?.sagittal == null ? "n/a" : signed(deltas.sagittal),
            deltas?.tangential == null ? "n/a" : signed(deltas.tangential),
          ]),
        );
      }
    }
    lines.push("");
  }

  lines.push(
    "## Estimator Cross-Check",
    "",
    "The diffraction estimate reads ray landings; the optical-path route (`waveLatticeOtf`) autocorrelates the",
    "complex pupil in direction space. The routes share the ray trace, so agreement is not proof against an outside",
    "reference. Both are summed over the photopic lines on each aperture's own best axial focus plane, at a",
    `${CROSS_CHECK_GRID}-cell pupil grid and ${CROSS_CHECK_FREQUENCIES.join(", ")} lp/mm on both cuts. The two passes use the same chart field fractions.`,
    "The stopped-down pass uses f/8, capped at the lens's maximum marked f-number (minimum aperture), and never opens",
    "past wide open. The actual marked f-number and focus shift from the authored image plane (mm) appear below.",
    "",
    `A field is compared only when every wavelength has an invertible direction map and a phase step strictly below`,
    `${CROSS_CHECK_PHASE_STEP_WAVES} wave per cell. Excluded fields are **not checked**: phase-step exclusions, non-invertible maps`,
    "(whose gate returns infinity), and unavailable fields or bundles are counted separately. Each field has one",
    "exclusion reason; an incomplete spectral bundle is unavailable. Largest excluded step is n/a where no complete",
    "bundle exists, and infinity for a non-invertible map. Magnitude gaps are |abs(estimate) - abs(reference)|; complex",
    "gaps are abs(estimate - reference), after spectral combination. All gaps describe only compared fields.",
    "These are report diagnostics, never test thresholds.",
    "",
    ...renderCrossCheckPass(
      "Wide open",
      configurations.map(({ key, zoomT, crossChecks }) => ({
        key,
        zoomT,
        pass: crossChecks.wideOpen,
      })),
    ),
    ...renderCrossCheckPass(
      "Stopped down",
      configurations.map(({ key, zoomT, crossChecks }) => ({
        key,
        zoomT,
        pass: crossChecks.stoppedDown,
      })),
    ),
  );

  const unchanged = configurations.filter((configuration) => !configuration.corrected);
  const corrected = configurations.filter((configuration) => configuration.corrected);
  const gaps = recordedGaps(unchanged.flatMap((configuration) => configuration.samples));
  const [largest, meanSize, meanGap] = gapCells(gaps);
  lines.push(
    "## The Audit's Recorded Values",
    "",
    "The anchor file keeps the S and T the audit itself computed at every sample. It computed them with",
    `\`${RETIRED_AUDIT_METHOD}\`, the geometric OTF multiplied by the diffraction limit of the traced pupil, on a pupil grid`,
    "forced through 128 and 256. The engine no longer has that method: the product double-counts blur at the pupil",
    "rim and read low, and it was replaced by the diffraction estimate tabulated above. The recorded columns are",
    "therefore a frozen reference and cannot be recomputed.",
    "",
    `The last run of this report that still had the product reproduced them over ${LAST_REPRODUCTION.configurations} configurations`,
    `(${LAST_REPRODUCTION.values} values) within max absolute ${fixed(LAST_REPRODUCTION.maxAbsolute)}, mean absolute ${fixed(LAST_REPRODUCTION.meanAbsolute)}, mean signed`,
    `${signed(LAST_REPRODUCTION.meanSigned)}: sampling differences only.`,
    "",
    "Each row below is `diffraction estimate - recorded product` over the S and T of every sample. It measures the",
    "change of method on the same prescription, not agreement with a chart.",
    "",
    ...recordedTable(unchanged),
    "",
    `Over these ${unchanged.length} configurations (${gaps.length} values): max absolute ${largest}, mean absolute`,
    `${meanSize}, mean signed ${meanGap}.`,
    "",
    "### Prescription corrected since the audit",
    "",
    "Lenses with a `sourceErrata` entry of status `corrected` no longer carry the prescription the audit traced, so",
    "their rows also include the correction and are left out of the aggregate above.",
    "",
    ...(corrected.length ? recordedTable(corrected) : ["None."]),
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

describe("MTF chart regression report", () => {
  it.skipIf(ENABLED)("refreshes input freshness without tracing", () => {
    const existing = readFileSync(REPORT_PATH, "utf8");
    const provenance = parseMtfChartProvenance(existing);
    const hashes = hashMtfChartInputs(cwd(), Object.keys(provenance?.hashes.lensFiles ?? {}));
    const updated = updateMtfChartStatus(existing, mtfChartStatus(provenance, hashes));
    if (updated !== existing) writeFileSync(REPORT_PATH, updated);
  });
  it.skipIf(!ENABLED)(
    "emits simulated MTF against the digitized manufacturer charts",
    async () => {
      const anchors = readAnchors();
      expect(anchors).toHaveLength(ANCHOR_COUNT);
      const recordedDeltas = anchors.map((anchor) => delta(anchor.recorded, anchor).midpoint);
      expect(Math.abs(mean(recordedDeltas) - RECORDED_MEAN_SIGNED)).toBeLessThan(0.0005);
      expect(Math.abs(mean(recordedDeltas.map(Math.abs)) - RECORDED_MEAN_ABSOLUTE)).toBeLessThan(0.0005);

      const loaded = await Promise.all(
        Object.entries(modules).map(async ([path, load]) => ({
          path: path.replace(/^\.\.\//, ""),
          lens: (await load()).default,
        })),
      );
      const lensByKey = new Map(loaded.map(({ lens }) => [lens.key, lens]));
      expect([...new Set(anchors.map((anchor) => anchor.key))].filter((key) => !lensByKey.has(key))).toEqual([]);
      const keys = new Set(anchors.map((anchor) => anchor.key));
      const hashes = hashMtfChartInputs(
        cwd(),
        loaded.filter(({ lens }) => keys.has(lens.key)).map(({ path }) => path),
      );
      const provenance = createMtfChartProvenance(cwd(), hashes, {
        focusT: 0,
        dynamicEFL: 0,
        crossCheck: {
          gridSize: CROSS_CHECK_GRID,
          frequenciesPerMm: CROSS_CHECK_FREQUENCIES,
          phaseStepWaves: CROSS_CHECK_PHASE_STEP_WAVES,
          focus: "best-axial",
        },
      });

      // One chart per lens and zoom position.
      const charts = new Map<string, Anchor[]>();
      for (const anchor of anchors) {
        const id = `${anchor.key}|${anchor.zoomT}`;
        charts.set(id, [...(charts.get(id) ?? []), anchor]);
      }
      const configurations = [...charts.values()]
        .map((group) => runConfiguration(lensByKey.get(group[0].key)!, group[0].zoomT, group))
        .sort((a, b) => byText(a.maker, b.maker) || byText(a.key, b.key) || a.zoomT - b.zoomT);
      provenance.settings.configurations = configurations.map(({ key, zoomT, settings, result, crossChecks }) => ({
        key,
        zoomT,
        ...settings,
        spectralLines: result.support.spectralLines,
        crossChecks: Object.fromEntries(
          Object.entries(crossChecks).map(([pass, { fNumber, focusShiftMm }]) => [pass, { fNumber, focusShiftMm }]),
        ),
      }));

      mkdirSync(REPORT_DIR, { recursive: true });
      writeFileSync(REPORT_PATH, renderReport(configurations, provenance));
      // Structural only: every requested field must return curves. How close they sit to a chart is never asserted.
      const withoutCurves = configurations
        .flatMap((configuration) => configuration.samples)
        .filter((sample) => !sample.diffraction || !sample.convention)
        .map(({ anchor }) => `${anchor.key}|${anchor.zoomT}|${anchor.fieldFraction}`);
      expect(withoutCurves).toEqual([]);
    },
    TIMEOUT_MS,
  );
});
