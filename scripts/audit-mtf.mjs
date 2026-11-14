/**
 * Read-only MTF census. Run with the project's TS specifier hook.
 *
 * Default: support reasons per lens. `--fields` reports structural eligibility, modeled-field inclusion,
 * curve production and convergence at center, half-height, modeled edge and corner (fraction 1).
 * `--grid=32|64|128|256` sets the census cap (default 32); the product tab refines to 256.
 * `--cdf` / `--photopic` select the spectrum; `--list` retains each lens's field stages and diagnostics,
 * and names the lenses behind every unavailable field.
 * `--limit=N` audits the first N lenses only. `--focus` instead lists lenses whose authored image plane is
 * inconsistent with their own paraxial focus (`mtfImagePlaneOffset`), largest offset first.
 * `--blockers` instead inventories every blocking glass, class totals and upgrade leverage, and counts
 * estimated elements in eligible lenses. It defaults to photopic; `--list` adds fallback and estimate rows.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createAnalysisRequest } from "../src/optics/analysis.js";
import { buildLens } from "../src/optics/buildLens.js";
import { prepareRuntimeState } from "../src/optics/optics.js";
import { entrancePupilAtState } from "../src/optics/fieldGeometry.js";
import {
  assessMtfDataLimitations,
  assessMtfSpectralData,
  assessMtfSupport,
  collectMtfSpectralBlockers,
  computeMtf,
  resolveMtfGeometry,
} from "../src/optics/mtf.js";
import { mtfImagePlaneOffset } from "../src/optics/mtf.js";

const blockerCensus = process.argv.includes("--blockers");
const spectrum = process.argv.includes("--cdf")
  ? "cdf"
  : process.argv.includes("--photopic") || blockerCensus
    ? "photopic"
    : "reference";
const perField = process.argv.includes("--fields");
const list = process.argv.includes("--list");
const limit = Number(process.argv.find((arg) => arg.startsWith("--limit="))?.slice(8) ?? Infinity);
const focusCensus = process.argv.includes("--focus");
/** The authored plane keeps the field census tied to the lens data as written. */
const FIELD_FOCUS = "design";
const requestedGrid = Number(process.argv.find((arg) => arg.startsWith("--grid="))?.slice(7) ?? 32);
const gridCap = [32, 64, 128, 256].includes(requestedGrid) ? requestedGrid : 32;
if (perField && !focusCensus && gridCap !== requestedGrid) console.warn("--grid must be 32, 64, 128 or 256; using 32.");
const inconsistent = [];
const tally = (counts, key) => (counts[key] = (counts[key] ?? 0) + 1);
const support = {};
const positions = ["center", "half", "edge", "corner"];
const fields = Object.fromEntries(
  positions.map((position) => [
    position,
    { structurallyEligible: 0, insideModeledField: 0, curveProduced: 0, converged: 0 },
  ]),
);
const unavailable = {};
const lenses = [];
const classes = Object.fromEntries(
  ["high-vd-no-partial", "e-line-no-catalog", "no-abbe", "unusable-measured-span"].map((kind) => [
    kind,
    {
      lenses: 0,
      elements: 0,
      surfaces: 0,
      shareOfGlassSurfaces: 0,
      unlockedLenses: 0,
      singleBlockingElementLenses: [],
    },
  ]),
);
const estimatedDispersion = { lenses: 0, singleElementLenses: 0, elementCountDistribution: {} };
const estimatedDispersionWarning = { lenses: 0, singleElementLenses: 0, elementCountDistribution: {} };
const countEstimated = (totals, count) => {
  totals.lenses++;
  if (count === 1) totals.singleElementLenses++;
  tally(totals.elementCountDistribution, count);
};
const estimatedLenses = [];
let glassSurfaces = 0;
let eligible = 0;
let referenceFallback = 0;
let unsupported = 0;
const files = readdirSync("src/lens-data", { recursive: true })
  .filter((f) => f.endsWith(".data.ts"))
  .sort();
let audited = 0;
for (const file of files) {
  if (audited >= limit) break;
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  if (data.visible === false) continue;
  audited++;
  const L = buildLens(data, { path: `src/lens-data/${file}` });
  const state = prepareRuntimeState(L, 0, 0);
  const options = {
    method: "geometric",
    spectrum,
    focus: FIELD_FOCUS,
    maxGridSize: gridCap,
    // The wide-open stop and the paraxial entrance pupil it gives in this state.
    pupilSemiDiameterMm: entrancePupilAtState(L.stopPhysSD, 0, 0, L).epSD,
    stopSemiDiameterMm: L.stopPhysSD,
  };
  const request = createAnalysisRequest({
    preparedState: state,
    dynamicEFL: 0,
    currentEPSD: options.pupilSemiDiameterMm,
    currentPhysStopSD: options.stopSemiDiameterMm,
  });
  const assessed = assessMtfSupport(request, options);
  const reason = assessed.reason ?? "candidate";
  tally(support, reason);
  if (blockerCensus) {
    glassSurfaces += state.lens.dispersion.filter((d) => d.quality !== "air").length;
    if (assessed.available) {
      eligible++;
      const spectral = assessMtfSpectralData(state);
      if (spectral.estimatedGlasses > 0) countEstimated(estimatedDispersion, spectral.estimatedGlasses);
      const warning = assessMtfDataLimitations(state, {
        preferredSpectrum: spectrum,
        spectrum,
        referenceWavelengthNm: assessed.referenceWavelengthNm,
        result: null,
      }).some((gap) => gap.kind === "estimated-dispersion");
      // The warning names authored elements; the spectral gate also estimates hidden rear plates.
      const warningElementIds = spectral.estimatedElementIds.filter((id) =>
        state.lens.source.elements.some((e) => e.id === id),
      );
      if (warning) {
        countEstimated(estimatedDispersionWarning, warningElementIds.length);
      }
      if (list && spectral.estimatedGlasses > 0)
        estimatedLenses.push({
          key: data.key,
          file,
          estimatedElementCount: spectral.estimatedGlasses,
          elementIds: spectral.estimatedElementIds,
          warningElementCount: warning ? warningElementIds.length : 0,
        });
    } else {
      const blockers = collectMtfSpectralBlockers(state);
      const reference = assessMtfSupport(request, { ...options, spectrum: "reference" });
      if (blockers.length && reference.available) {
        referenceFallback++;
        const kinds = new Set(blockers.map((b) => b.class));
        for (const kind of kinds) {
          const totals = classes[kind];
          const matching = blockers.filter((b) => b.class === kind);
          totals.lenses++;
          totals.elements += matching.length;
          totals.surfaces += matching.reduce((sum, b) => sum + b.surfaceIndices.length, 0);
          if (kinds.size === 1) totals.unlockedLenses++;
          if (blockers.length === 1) totals.singleBlockingElementLenses.push(data.key);
        }
        if (list)
          lenses.push({
            key: data.key,
            file,
            blockers: blockers.map((blocker) => {
              const element = state.lens.elements.find((e) => e.id === blocker.elementId)?.source;
              return {
                elementId: blocker.elementId,
                label: element?.label ?? null,
                nd: element?.nd ?? state.surfaces[blocker.surfaceIndices[0]].nd,
                vd: element?.vd ?? null,
                indexReference: element?.indexReference ?? "d",
                glass: element?.glass ?? null,
                class: blocker.class,
                surfaces: blocker.surfaceIndices.length,
              };
            }),
          });
      } else unsupported++;
    }
    continue;
  }
  if (focusCensus) {
    const offset = reason === "candidate" ? mtfImagePlaneOffset(state, assessed) : null;
    if (offset?.inconsistent)
      inconsistent.push({
        key: data.key,
        file,
        offsetMm: Number(offset.offsetMm.toFixed(3)),
        depths: Number(((10 * Math.abs(offset.offsetMm)) / offset.limitMm).toFixed(1)),
      });
    continue;
  }
  if (!perField) continue;
  const geometry = assessed.available ? resolveMtfGeometry(request, options) : null;
  const edge = geometry ? geometry.modeledEdgeHeightMm / geometry.referenceHeightMm : null;
  const fractions = [0, 0.5, edge, 1];
  const result = geometry ? computeMtf(request, { ...options, fieldFractions: fractions }) : null;
  const lensFields = {};
  positions.forEach((position, i) => {
    const field = result?.fields[i];
    const fieldReason = field ? field.reason : (assessed.reason ?? "chief-ray-failed");
    const stages = {
      structurallyEligible: assessed.available,
      insideModeledField: geometry !== null && fieldReason !== "outside-modeled-field",
      curveProduced: field?.status === "converged" || field?.status === "unconverged",
      converged: field?.status === "converged",
    };
    for (const [stage, passed] of Object.entries(stages)) if (passed) fields[position][stage]++;
    lensFields[position] = {
      ...stages,
      fieldFraction: fractions[i],
      status: field?.status ?? "unavailable",
      reason: fieldReason,
      gridSize: field?.gridSize ?? 0,
      convergedThroughLpMm: field?.convergedThroughLpMm ?? null,
    };
    if (assessed.available && !stages.curveProduced) (unavailable[`${position}:${fieldReason}`] ??= []).push(data.key);
  });
  if (list) lenses.push({ key: data.key, file, fields: lensFields });
}
inconsistent.sort((a, b) => Math.abs(b.offsetMm) - Math.abs(a.offsetMm));
for (const totals of Object.values(classes))
  totals.shareOfGlassSurfaces = glassSurfaces ? totals.surfaces / glassSurfaces : 0;
const report = blockerCensus
  ? {
      spectrum,
      audited,
      glassSurfaces,
      surfaceCountNote:
        "Glass-bearing surfaces (following medium is non-air), including embedded stops and hidden rear plates, across all audited visible lenses. Shares are fractions of this denominator.",
      eligibilityNote:
        "Infinity, wide zoom, wide open. Leverage counts reference-supported lenses whose spectral blockers all belong to one class; eligibility does not establish curve production or convergence.",
      eligible,
      referenceFallback,
      unsupported,
      classes,
      estimatedElementCountNote:
        "Estimates include hidden rear plates. The warning counts only authored visible elements, matching estimated-dispersion in the chart.",
      estimatedDispersion: { ...estimatedDispersion, ...(list ? { rows: estimatedLenses } : {}) },
      estimatedDispersionWarning,
      ...(list ? { lenses } : {}),
    }
  : focusCensus
    ? { audited, candidates: support.candidate ?? 0, inconsistent: inconsistent.length, lenses: inconsistent }
    : perField
      ? {
          spectrum,
          focus: FIELD_FOCUS,
          maxGridSize: gridCap,
          convergenceNote:
            "Curve production is not convergence. Convergence is assessed at this census cap; the product tab refines to 256 cells with its selected focus mode.",
          audited,
          support,
          fields,
          ...(list ? { unavailable, lenses } : {}),
        }
      : support;
console.log(JSON.stringify(report, null, 2));
