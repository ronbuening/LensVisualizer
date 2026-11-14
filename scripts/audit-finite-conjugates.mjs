/**
 * Read-only consistency audit of every source-certified finite conjugate.
 *
 * Run through audit:finite-conjugates for the TS specifier hook. --lens=<key> or
 * --files=<comma-separated data files> narrows the catalog. --json preserves full
 * precision; --strict fails on inconsistent/other-reference rows or loading errors.
 * An ambiguous reference is informational: the source defines the convention. Ordinary audits exit 0.
 * A conjugate with sourceMagnification also reports the distance its print solves to: author it with a
 * provisional positive objectDistanceMm, then write the "Solved distance" column to 0.01 mm.
 */

import { readdirSync } from "node:fs";
import { relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createAnalysisRequest } from "../src/optics/analysis.js";
import { buildLens } from "../src/optics/buildLens.js";
import { entrancePupilAtState } from "../src/optics/fieldGeometry.js";
import { assessMtfConjugateConsistency, MTF_FINITE_CONJUGATE_DEPTHS } from "../src/optics/mtf.js";
import { fopenAtZoom, prepareRuntimeState, stopSemiDiameterForFNumber } from "../src/optics/optics.js";

const args = process.argv.slice(2);
const lensKey = args.find((arg) => arg.startsWith("--lens="))?.slice(7);
const selectedFiles = args.find((arg) => arg.startsWith("--files="))?.slice(8);
const report = {
  thresholdDepths: MTF_FINITE_CONJUGATE_DEPTHS,
  lenses: 0,
  conjugates: 0,
  verdicts: { consistent: 0, inconsistent: 0, "other-reference": 0, "ambiguous-reference": 0 },
  errors: [],
  rows: [],
};

try {
  const files = selectedFiles
    ? selectedFiles.split(",").map((file) => resolve(file.trim()))
    : readdirSync("src/lens-data", { recursive: true })
        .filter((file) => file.endsWith(".data.ts"))
        .map((file) => resolve("src/lens-data", file));
  let matched = false;
  for (const file of [...new Set(files)].sort()) {
    try {
      const data = (await import(pathToFileURL(file))).default;
      if (lensKey && data.key !== lensKey) continue;
      matched = true;
      if (!data.focus?.conjugates?.length) continue;
      const lens = buildLens(data, { path: file });
      const source = prepareRuntimeState(lens, 0, 0).lens.source;
      report.lenses++;
      for (const conjugate of source.focus.conjugates) {
        const zoomT =
          (source.zoom?.stations.length ?? 1) > 1 ? conjugate.zoomStation / (source.zoom.stations.length - 1) : 0;
        const focusT = source.focus.keyframes[conjugate.keyframe];
        const state = prepareRuntimeState(lens, focusT, zoomT);
        // Match the aperture control's wide-open stop rule, including variable-aperture zooms.
        const stop = stopSemiDiameterForFNumber(fopenAtZoom(zoomT, lens), zoomT, lens);
        const request = createAnalysisRequest({
          preparedState: state,
          dynamicEFL: 0,
          currentPhysStopSD: stop,
          currentEPSD: entrancePupilAtState(stop, 0, zoomT, lens).epSD,
        });
        const diagnostics = assessMtfConjugateConsistency(request);
        if (!diagnostics) throw new Error(`No certified conjugate at ${conjugate.zoomStation}/${conjugate.keyframe}.`);
        report.rows.push({
          lens: source.key,
          file: relative(process.cwd(), file),
          zoomStation: conjugate.zoomStation,
          keyframe: conjugate.keyframe,
          objectDistanceMm: conjugate.objectDistanceMm,
          source: conjugate.source,
          ...diagnostics,
        });
        report.verdicts[diagnostics.verdict]++;
      }
    } catch (error) {
      report.errors.push({ file: relative(process.cwd(), file), message: error.message });
    }
  }
  if (lensKey && !matched) report.errors.push({ file: null, message: `No lens matches ${lensKey}.` });
} catch (error) {
  report.errors.push({ file: null, message: error.message });
}
report.conjugates = report.rows.length;

if (args.includes("--json")) console.log(JSON.stringify(report, null, 2));
else {
  console.log(
    `${report.lenses} lenses · ${report.conjugates} conjugates · ${report.thresholdDepths} quarter-wave defocus threshold`,
  );
  console.log("Offsets are image minus authored plane (mm); positive is away from the lens. — means unavailable.");
  console.log(
    "Depths are signed defocus wavefront error at the authored plane in quarter waves; mm depths use its cone.",
  );
  console.log("Printed m is sourceMagnification; a solved distance is consistent when m at it rounds to the print.");
  console.log(
    "| Lens | Zoom/keyframe | Reference | Object z | Authored z | Paraxial z | Offset mm | Best axial mm | λ nm | Paraxial Nw | Authored-plane Nw | Real-ray Nw | 2λn′Na² mm | Offset depths | Limit mm | m | Other offset mm | Other depths | Reference discriminated | Printed m | In-focus m | Solved distance | Verdict | Reason | Paraxial-image reason | Real-ray reason |",
  );
  console.log(`|${Array(26).fill("---").join("|")}|`);
  const number = (value) => (value === null ? "—" : Number(value.toPrecision(7)).toString());
  for (const row of report.rows) {
    console.log(
      `| ${[
        row.lens,
        `${row.zoomStation}/${row.keyframe}`,
        row.distanceReference,
        row.objectZMm,
        row.imagePlaneZMm,
        row.paraxialImageZMm,
        row.paraxialOffsetMm,
        row.realRayBestFocusOffsetMm,
        row.referenceWavelengthNm,
        row.paraxialWorkingFNumber,
        row.authoredPlaneWorkingFNumber,
        row.realRayWorkingFNumber,
        row.diffractionDepthMm,
        row.offsetDepths,
        row.limitMm,
        row.paraxialMagnification,
        row.otherReference.paraxialOffsetMm,
        row.otherReference.offsetDepths,
        row.referenceDiscriminated,
        row.magnification?.printed ?? "—",
        row.magnification ? row.magnification.inFocusMagnification : "—",
        row.magnification ? row.magnification.solvedObjectDistanceMm : "—",
        row.verdict,
        row.unavailableReason ?? "—",
        row.paraxialImageUnavailableReason ?? "—",
        row.realRayUnavailableReason ?? "—",
      ]
        .map((value) => (typeof value === "number" || value === null ? number(value) : value))
        .join(" | ")} |`,
    );
  }
  for (const error of report.errors) console.log(`Error${error.file ? ` in ${error.file}` : ""}: ${error.message}`);
}
process.exitCode =
  args.includes("--strict") &&
  (report.rows.some((row) => row.verdict === "inconsistent" || row.verdict === "other-reference") ||
    report.errors.length)
    ? 1
    : 0;
