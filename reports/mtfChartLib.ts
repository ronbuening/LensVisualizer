/**
 * Helpers of the MTF chart regression report (`mtfChartRegression.report.ts`), kept beside it so `npm test` checks
 * them between regenerations, as `glassScanLib.ts` is for the glass scans.
 */
import type { RuntimeLens } from "../src/types/optics.js";
import type { PreparedOpticalState } from "../src/optics/types.js";
import type { MtfOptions, MtfResult } from "../src/types/mtf.js";
import { createAnalysisRequest } from "../src/optics/analysis.js";
import { fNumberAtStopdown, stopSemiDiameterForFNumber } from "../src/optics/optics.js";
import {
  assessMtfSupport,
  combineOtfs,
  computeMtfSteps,
  findMtfFieldFootprint,
  mtfWaveLattice,
  otfMagnitude,
  prepareMtfFieldLaunch,
  shearedOtf,
  traceMtfLaunchPlaneBundle,
  traceMtfStopBundle,
  waveLatticeOtf,
  waveLatticePhaseStep,
} from "../src/optics/mtf.js";
import type { ComplexOtf, MtfSpot } from "../src/optics/mtf.js";

/** Sagittal and tangential (meridional) MTF at one field and frequency. */
export interface Curves {
  sagittal: number;
  tangential: number;
}

/** One digitized chart envelope and the frozen audit result at the same field and frequency. */
export interface Anchor {
  key: string;
  zoomT: number;
  fieldFraction: number;
  frequency: number;
  pairMin: number;
  pairMax: number;
  apertureLabel: number;
  methodPrinted: string;
  sourceUrl: string;
  allowance: number;
  recorded: Curves;
  assigned?: Partial<Curves>;
  assignmentConfidence?: "high" | "medium" | "low";
  statedAperture?: string;
}

/** Simulation minus chart in MTF units; unassigned directions have no delta. */
export interface ChartDeltas {
  midpoint: number;
  separation: number;
  sagittal: number | null;
  tangential: number | null;
}

/**
 * Compare pair level and splitting independently so opposite S/T errors remain visible.
 *
 * @param curves - simulated S/T magnitudes at the anchor's field and frequency
 * @param anchor - chart envelope and any explicitly assigned directional values
 * @returns signed midpoint, assignment-free separation and available directional deltas
 */
export function chartDeltas(curves: Curves, anchor: Pick<Anchor, "pairMin" | "pairMax" | "assigned">): ChartDeltas {
  return {
    midpoint: (curves.sagittal + curves.tangential) / 2 - (anchor.pairMin + anchor.pairMax) / 2,
    separation: Math.abs(curves.sagittal - curves.tangential) - (anchor.pairMax - anchor.pairMin),
    sagittal: anchor.assigned?.sagittal === undefined ? null : curves.sagittal - anchor.assigned.sagittal,
    tangential: anchor.assigned?.tangential === undefined ? null : curves.tangential - anchor.assigned.tangential,
  };
}

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

/**
 * Read chart anchors without requiring directional assignments for envelope digitizations.
 *
 * Required CSV columns: key, zoomT, field_fraction, frequency_lp_mm,
 * manufacturer_pair_min/max (unassigned stroke envelope), chart_aperture_label
 * (numeric f-number), chart_method_printed, source_url, digitization_allowance_mtf,
 * audit_sagittal/tangential (frozen simulation, never chart assignments).
 * height_mm and source_sha256 are retained in the CSV as provenance, not parsed here.
 * Optional columns for new digitizations: manufacturer_sagittal and
 * manufacturer_meridional (independently assigned MTF magnitudes), assignment_confidence
 * (high/medium/low, descriptive only), chart_stated_aperture (verbatim printed aperture).
 * Missing or blank optional cells stay absent; confidence never gates a comparison.
 *
 * @param csv - header and single-line records, with standard CSV quoting
 * @returns anchors with unchanged frozen audit values and optional assignment provenance
 */
export function parseChartAnchors(csv: string): Anchor[] {
  const [header, ...records] = csv.trim().split("\n").map(splitCsvRecord);
  return records.map((cells) => {
    const text = (column: string) => {
      const index = header.indexOf(column);
      if (index < 0) throw new Error(`MTF chart anchors have no "${column}" column`);
      return cells[index];
    };
    const number = (column: string) => {
      const value = Number(text(column));
      if (!Number.isFinite(value)) throw new Error(`MTF chart anchors: "${column}" of ${cells[0]} is not a number`);
      return value;
    };
    const optionalText = (column: string) => cells[header.indexOf(column)]?.trim() || undefined;
    const optionalNumber = (column: string) => (optionalText(column) === undefined ? undefined : number(column));
    const sagittal = optionalNumber("manufacturer_sagittal");
    const tangential = optionalNumber("manufacturer_meridional");
    const confidence = optionalText("assignment_confidence");
    if (confidence !== undefined && confidence !== "high" && confidence !== "medium" && confidence !== "low")
      throw new Error(`MTF chart anchors: invalid assignment_confidence of ${cells[0]}`);
    const statedAperture = optionalText("chart_stated_aperture");
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
      ...(sagittal !== undefined || tangential !== undefined
        ? {
            assigned: {
              ...(sagittal !== undefined ? { sagittal } : {}),
              ...(tangential !== undefined ? { tangential } : {}),
            },
          }
        : {}),
      ...(confidence !== undefined ? { assignmentConfidence: confidence } : {}),
      ...(statedAperture !== undefined ? { statedAperture } : {}),
    };
  });
}

/** Fixed sampling and validity gate of the two-route consistency report. */
export const CROSS_CHECK_GRID = 128;
export const CROSS_CHECK_FREQUENCIES = [10, 30, 50];
export const CROSS_CHECK_PHASE_STEP_WAVES = 0.25;
/** A report bin, never an assertion on agreement. */
const CROSS_CHECK_TOLERANCE = 0.004;

/** Coverage and differences over a configuration's requested fields, with disjoint exclusions. */
export interface CrossCheck {
  compared: number;
  undersampled: number;
  nonInvertible: number;
  untraced: number;
  gaps: number[];
  complexGaps: number[];
  /** Maxima in waves per cell; zero is printed only when that category has fields. */
  largestStep: number;
  largestExcludedStep: number;
  largestUndersampledStep: number;
}

/** Aperture and focus are separate for each pass; chart residuals remain wide open. */
export interface CrossCheckPass {
  fNumber: number;
  focusShiftMm: number | null;
  check: CrossCheck;
}

interface Weighted {
  otf: ComplexOtf;
  weight: number;
}

const emptyCrossCheck = (): CrossCheck => ({
  compared: 0,
  undersampled: 0,
  nonInvertible: 0,
  untraced: 0,
  gaps: [],
  complexGaps: [],
  largestStep: 0,
  largestExcludedStep: 0,
  largestUndersampledStep: 0,
});

/**
 * Compare ray-landing and optical-path OTFs only where the entire spectrum passes the reference gate.
 *
 * @param state - prepared geometry at the chart's focus and zoom station
 * @param options - spectrum and physical aperture; cross-check sampling is fixed independently
 * @param result - field targets and common image plane, including pending targets from computeMtfSteps
 * @returns magnitude and complex gaps with every requested field compared or excluded
 */
export function crossCheckConfiguration(
  state: PreparedOpticalState,
  options: MtfOptions,
  result: MtfResult,
): CrossCheck {
  const check = emptyCrossCheck();
  check.untraced = Math.max(result.fields.length, options.fieldFractions?.length ?? 0);
  const support = assessMtfSupport(
    createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: options.pupilSemiDiameterMm,
      currentPhysStopSD: options.stopSemiDiameterMm,
    }),
    options,
  );
  if (!support.available || !result.focus) return check;
  const planeZ = state.imgZ + result.focus.appliedShiftMm;
  for (const field of result.fields) {
    if (field.fieldAngleDeg === null || field.reason === "outside-modeled-field") continue;
    const launch = prepareMtfFieldLaunch(state, options, support, field.fieldAngleDeg);
    // A bounding-sphere field keeps the product's launch-plane footprint sampling.
    const footprint = launch && !launch.aim ? findMtfFieldFootprint(state, options, support, launch) : null;
    if (!launch || (!launch.aim && !footprint)) continue;
    const spectra: {
      bundle: NonNullable<ReturnType<typeof traceMtfStopBundle>>;
      lattice: NonNullable<ReturnType<typeof mtfWaveLattice>>;
      wavelengthMm: number;
      weight: number;
    }[] = [];
    let common: MtfSpot | undefined;
    let step = 0;
    for (const line of support.spectralLines) {
      const extras = { reference: common, opticalPath: true };
      const bundle = footprint
        ? traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, CROSS_CHECK_GRID, line, planeZ, extras)
        : traceMtfStopBundle(state, options, support, launch, CROSS_CHECK_GRID, line, planeZ, extras);
      const lattice = bundle && mtfWaveLattice(bundle, (common ??= bundle.chief), planeZ);
      if (!bundle || !lattice || !common) break;
      const wavelengthMm = line.wavelengthNm * 1e-6;
      step = Math.max(step, waveLatticePhaseStep(lattice, wavelengthMm));
      spectra.push({
        bundle,
        lattice,
        wavelengthMm,
        weight: line.weight * bundle.rays.reduce((sum, ray) => sum + ray.weight, 0),
      });
    }
    // Incomplete spectra cannot establish either a comparison or a full-spectrum gate maximum.
    if (!common || spectra.length !== support.spectralLines.length) continue;
    check.untraced--;
    if (!(step < CROSS_CHECK_PHASE_STEP_WAVES)) {
      check.largestExcludedStep = Math.max(check.largestExcludedStep, step);
      if (step === Infinity) check.nonInvertible++;
      else {
        check.undersampled++;
        check.largestUndersampledStep = Math.max(check.largestUndersampledStep, step);
      }
      continue;
    }
    // Do not evaluate the optical-path OTF on a rejected map: its inverse does not exist.
    const estimate = { sagittal: [] as Weighted[], tangential: [] as Weighted[] };
    const reference = { sagittal: [] as Weighted[], tangential: [] as Weighted[] };
    for (const { bundle, lattice, wavelengthMm, weight } of spectra) {
      const sheared = shearedOtf(bundle, common, wavelengthMm, CROSS_CHECK_FREQUENCIES);
      const wave = waveLatticeOtf(lattice, wavelengthMm, CROSS_CHECK_FREQUENCIES);
      for (const cut of ["sagittal", "tangential"] as const) {
        estimate[cut].push({ otf: sheared[cut], weight });
        reference[cut].push({ otf: wave[cut], weight });
      }
    }
    check.compared++;
    check.largestStep = Math.max(check.largestStep, step);
    for (const cut of ["sagittal", "tangential"] as const) {
      const ours = combineOtfs(estimate[cut]);
      const theirs = combineOtfs(reference[cut]);
      const ourMagnitude = otfMagnitude(ours);
      const theirMagnitude = otfMagnitude(theirs);
      ourMagnitude.forEach((value, i) => {
        check.gaps.push(Math.abs(value - theirMagnitude[i]));
        check.complexGaps.push(Math.hypot(ours.real[i] - theirs.real[i], ours.imaginary[i] - theirs.imaginary[i]));
      });
    }
  }
  return check;
}

/**
 * Prepare the stopped-down pass without running an extra adaptive field-curve sweep.
 *
 * @param L - built lens, supplying the stop rule and attainable aperture range
 * @param zoomT - chart's zoom station
 * @param state - same prepared optical station as the wide-open pass
 * @param options - wide-open aperture, chart field fractions and best-axial focus settings
 * @returns cross-check at f/8 or the nearest attainable marked aperture, on its own axial best focus
 */
export function stoppedDownCrossCheck(
  L: RuntimeLens,
  zoomT: number,
  state: PreparedOpticalState,
  options: MtfOptions,
): CrossCheckPass {
  const fNumber = Math.max(fNumberAtStopdown(0, zoomT, L), Math.min(8, L.maxFstop));
  const stop = stopSemiDiameterForFNumber(fNumber, zoomT, L);
  const stoppedOptions: MtfOptions = {
    ...options,
    stopSemiDiameterMm: stop,
    pupilSemiDiameterMm: (options.pupilSemiDiameterMm * stop) / options.stopSemiDiameterMm,
  };
  const steps = computeMtfSteps(
    createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: stoppedOptions.pupilSemiDiameterMm,
      currentPhysStopSD: stop,
    }),
    stoppedOptions,
  );
  // The first yield resolves field targets and best focus before any adaptive field tracing.
  const result = steps.next().value;
  steps.return(result);
  return {
    fNumber,
    focusShiftMm: result.focus?.appliedShiftMm ?? null,
    check: crossCheckConfiguration(state, stoppedOptions, result),
  };
}

/**
 * Render one aperture pass and its total with exclusions beside the differences they qualify.
 *
 * @param label - aperture-pass heading
 * @param configurations - one result per chart configuration
 * @returns Markdown lines, including a total even if no field passes the gate
 */
export function renderCrossCheckPass(
  label: string,
  configurations: { key: string; zoomT: number; pass: CrossCheckPass }[],
): string[] {
  const fixed = (value: number, digits = 4) => (value === Infinity ? "infinity" : value.toFixed(digits));
  const maximum = (values: number[]) => (values.length ? fixed(Math.max(...values)) : "n/a");
  const cells = (check: CrossCheck): (number | string)[] => [
    check.compared,
    check.undersampled + check.nonInvertible + check.untraced,
    check.undersampled,
    check.undersampled ? fixed(check.largestUndersampledStep, 3) : "n/a",
    check.nonInvertible,
    check.untraced,
    check.undersampled + check.nonInvertible ? fixed(check.largestExcludedStep, 3) : "n/a",
    check.compared ? fixed(check.largestStep, 3) : "n/a",
    check.gaps.length,
    maximum(check.gaps),
    check.gaps.length ? fixed(check.gaps.reduce((sum, gap) => sum + gap, 0) / check.gaps.length) : "n/a",
    maximum(check.complexGaps),
    check.gaps.filter((gap) => gap > CROSS_CHECK_TOLERANCE).length,
  ];
  const row = (values: (number | string)[]) => `| ${values.join(" | ")} |`;
  const total = emptyCrossCheck();
  const lines = [
    `### ${label}`,
    "",
    `| Lens | zoomT | Marked f/ | Focus shift (mm) | Fields compared | Fields excluded (not checked) | Phase step ≥ gate | Largest phase exclusion (waves/cell) | Non-invertible map | Unavailable field/bundle | Largest excluded step (waves/cell) | Largest compared step (waves/cell) | Values | Max magnitude gap | Mean magnitude gap | Max complex gap | Magnitude gaps above ${CROSS_CHECK_TOLERANCE} |`,
    "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
  ];
  for (const { key, zoomT, pass } of configurations) {
    const check = pass.check;
    for (const count of ["compared", "undersampled", "nonInvertible", "untraced"] as const)
      total[count] += check[count];
    for (const step of ["largestStep", "largestExcludedStep", "largestUndersampledStep"] as const)
      total[step] = Math.max(total[step], check[step]);
    total.gaps.push(...check.gaps);
    total.complexGaps.push(...check.complexGaps);
    lines.push(
      row([
        `\`${key}\``,
        zoomT,
        fixed(pass.fNumber, 2),
        pass.focusShiftMm === null ? "n/a" : fixed(pass.focusShiftMm),
        ...cells(check),
      ]),
    );
  }
  lines.push(row(["**Total**", "—", "—", "—", ...cells(total)]), "");
  return lines;
}

/**
 * Whether a source erratum was corrected in the lens file, which the chart audit predates. Read from the built
 * lens's V2 data through canonical ingest (`source.errata`).
 *
 * @param L - the built lens
 * @returns true when any erratum has status `corrected`
 */
export function correctedSinceAudit(L: RuntimeLens): boolean {
  return (L.source.source.errata ?? []).some((erratum) => erratum.status === "corrected");
}
