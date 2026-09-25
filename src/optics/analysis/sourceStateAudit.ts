/** Offline evidence for a finite source at fixed authored geometry; never certifies a prescription. */
import type { PreparedOpticalState, Ray3 } from "../types.js";
import type { FiniteConjugate } from "../../types/optics.js";
import { traceParaxialSurfaces2, transferParaxialRay2 } from "../math/paraxial.js";
import { solveScalarRoot } from "../math/rootSolve.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import { sourceObjectPoint } from "../field/sourceLaunch.js";

export interface SourceDerivationEvidence {
  publishedDistance?: Pick<FiniteConjugate, "objectDistanceMm" | "distanceReference">;
  /** Negative values are signed; positive published reproduction ratios are compared by magnitude. */
  publishedMagnification?: number;
  /** Source rounding allowance, separate from the exact-ray consistency tolerance. */
  publishedRelativeTolerance?: number;
}

export interface SourceDerivationSample {
  heightMm: number;
  exactDistanceMm: number | null;
  axialResidualMm: number | null;
  exactMagnification: number | null;
}

export interface SourceDerivationReport {
  status: "consistent" | "inconsistent" | "unavailable";
  blockers: string[];
  /** All distances in mm, all coordinates at the neutral aberration setting. */
  coordinates: { focusT: number; zoomT: number; imagePlaneZ: number };
  matrix?: { A: number; B: number; C: number; D: number };
  derived?: { firstSurfaceDistanceMm: number; imagePlaneDistanceMm: number; magnification: number };
  exactSamples: SourceDerivationSample[];
  publishedChecks: {
    quantity: "distance" | "magnification";
    published: number;
    calculated: number;
    relativeError: number;
  }[];
  qualification: string;
}

const EXACT_RELATIVE_TOLERANCE = 5e-4;
const QUALIFICATION =
  "Fixed-geometry optical evidence only. Source tables, distance convention, prescription scale and authored positions still require review; this report does not certify or rewrite source states.";

/**
 * Derive s = -B/A at the fixed image plane, then independently solve small-height exact rays.
 * The matrix maps first-vertex (y,u) to the authored image plane. Object-plane transfer gives
 * B_total = A*s+B, and its zero fixes the physical object distance; lateral magnification is A.
 * @param state - prepared fixed geometry, including physical rear plates exactly once
 * @param evidence - optional published distance/magnification and its rounding allowance
 * @returns evidence with explicit optical/evidence blockers, never a selectable state declaration
 */
export function deriveSourceDistance(
  state: PreparedOpticalState,
  evidence: SourceDerivationEvidence = {},
): SourceDerivationReport {
  const report: SourceDerivationReport = {
    status: "unavailable",
    blockers: [],
    coordinates: { focusT: state.focusT, zoomT: state.zoomT, imagePlaneZ: state.imgZ },
    exactSamples: [],
    publishedChecks: [],
    qualification: QUALIFICATION,
  };
  const reject = (reason: string) => {
    report.blockers.push(reason);
    return report;
  };
  const surfaces = state.surfaces;
  const first = surfaces[0],
    last = surfaces.at(-1);
  if (
    !first ||
    !last ||
    state.aberrationT !== 0 ||
    state.lens.flags.isFoldedOptics ||
    state.lens.source.projection?.kind?.startsWith("fisheye") ||
    surfaces.some(
      (s) =>
        s.interaction.type !== "refract" ||
        s.diffractive ||
        (s.innerSd ?? 0) > 0 ||
        !["flat", "spherical", "aspheric"].includes(s.profile.kind),
    ) ||
    Math.abs(state.imagePlane.normal[0]) > 1e-10 ||
    Math.abs(state.imagePlane.normal[1]) > 1e-10 ||
    state.imagePlane.normal[2] <= 0
  )
    return reject("Unsupported optical path or non-neutral aberration setting.");
  const references = new Set(state.lens.source.elements.map((e) => e.indexReference ?? "d"));
  if (references.size > 1)
    return reject("Mixed index-reference wavelengths require a common spectral prescription before derivation.");
  if (!Number.isFinite(state.imgZ) || state.imgZ < last.z)
    return reject("The authored image plane is not behind the last optical surface.");
  const tolerance = evidence.publishedRelativeTolerance ?? 0.01;
  if (
    !Number.isFinite(tolerance) ||
    tolerance < 0 ||
    tolerance > 0.1 ||
    (evidence.publishedMagnification !== undefined &&
      (!Number.isFinite(evidence.publishedMagnification) || evidence.publishedMagnification === 0)) ||
    (evidence.publishedDistance &&
      (!(evidence.publishedDistance.objectDistanceMm > 0) ||
        !Number.isFinite(evidence.publishedDistance.objectDistanceMm)))
  )
    return reject("Invalid published evidence or rounding tolerance.");
  const imageRay = (y: number, u: number) =>
    transferParaxialRay2(traceParaxialSurfaces2(surfaces, y, u), state.imgZ - last.z);
  const colA = imageRay(1, 0),
    colB = imageRay(0, 1);
  const matrix = { A: colA.y, B: colB.y, C: colA.u, D: colB.u };
  report.matrix = matrix;
  const distance = -matrix.B / matrix.A;
  if (
    !Object.values(matrix).every(Number.isFinite) ||
    Math.abs(matrix.A) < 1e-10 ||
    !(distance > 0) ||
    !Number.isFinite(distance)
  )
    return reject("No finite real object before the first surface is established at this image plane.");
  const conjugate: FiniteConjugate = {
    focusT: state.focusT,
    zoomT: state.zoomT,
    objectDistanceMm: distance,
    distanceReference: "first-surface",
    source: "Uncertified offline derivation",
  };
  if (!sourceObjectPoint(state, conjugate, 0))
    return reject("Derived object is inside the first optical rim or outside the launch domain.");
  report.derived = {
    firstSurfaceDistanceMm: distance,
    imagePlaneDistanceMm: distance + state.imgZ - first.z,
    magnification: matrix.A,
  };
  // A fixed launch plane ahead of the complete front rim, but after the physical source.
  const lead = Math.max(first.z + Math.min(0, first.profile.sag(first.sd)) - 1, first.z - distance / 2);
  const imageHeight = (height: number, slope: number): number | null => {
    const norm = Math.hypot(1, slope);
    const ray: Ray3 = { origin: [0, height + (lead - first.z) * slope, lead], direction: [0, slope / norm, 1 / norm] };
    const trace = traceEngineRay2(state, ray, { checkSemiDiameter: true, directionNormalized: true });
    if (trace.status !== "ok" || trace.terminalDirection[2] <= 0) return null;
    const travel = (state.imgZ - trace.terminalPoint[2]) / trace.terminalDirection[2];
    return travel >= -1e-9 ? trace.terminalPoint[1] + travel * trace.terminalDirection[1] : null;
  };
  for (const height of [0.01, 0.005, 0.0025]) {
    // Start independently at zero slope; the first-order estimate only bounds the search interval.
    const exact = solveScalarRoot((u) => imageHeight(height, u), {
      initialGuess: 0,
      initialHalfWidth: Math.max(1e-6, (4 * height) / distance),
      scanSamples: 16,
      residualTolerance: 1e-13,
      intervalTolerance: 1e-15,
      maxIterations: 60,
    });
    report.exactSamples.push({
      heightMm: height,
      exactDistanceMm:
        exact.status === "converged" && exact.root !== null && exact.root > 0 ? height / exact.root : null,
      axialResidualMm: imageHeight(height, height / distance),
      exactMagnification: ((positive, negative) =>
        positive === null || negative === null ? null : (positive - negative) / (2 * height))(
        imageHeight(0, -height / distance),
        imageHeight(0, height / distance),
      ),
    });
  }
  for (const sample of report.exactSamples) {
    if (
      sample.exactDistanceMm === null ||
      sample.exactMagnification === null ||
      sample.axialResidualMm === null ||
      Math.abs(sample.exactDistanceMm / distance - 1) > EXACT_RELATIVE_TOLERANCE ||
      Math.abs(sample.exactMagnification / matrix.A - 1) > EXACT_RELATIVE_TOLERANCE ||
      Math.abs(sample.axialResidualMm) > 1e-7
    )
      report.blockers.push(`Small-height exact rays do not confirm the derivation at ${sample.heightMm} mm.`);
  }
  const compare = (quantity: "distance" | "magnification", published: number, calculated: number) => {
    const relativeError = Math.abs(calculated - published) / Math.abs(published);
    report.publishedChecks.push({ quantity, published, calculated, relativeError });
    if (relativeError > tolerance)
      report.blockers.push(
        `Published ${quantity} differs by more than the ${(tolerance * 100).toFixed(2)}% rounding allowance.`,
      );
  };
  if (evidence.publishedDistance)
    compare(
      "distance",
      evidence.publishedDistance.objectDistanceMm,
      evidence.publishedDistance.distanceReference === "image-plane" ? report.derived.imagePlaneDistanceMm : distance,
    );
  if (evidence.publishedMagnification !== undefined)
    compare(
      "magnification",
      evidence.publishedMagnification,
      evidence.publishedMagnification < 0 ? matrix.A : Math.abs(matrix.A),
    );
  report.status = report.blockers.length ? "inconsistent" : "consistent";
  return report;
}
