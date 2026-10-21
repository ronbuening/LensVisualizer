/**
 * Cardinal element solver — first-order focal, principal, nodal, and distance calculations.
 *
 * Uses the prepared system matrix and current image-plane geometry to feed the diagram's axial first-order overlays.
 */

import { traceParaxialSurfaces, transferParaxialRay } from "../math/paraxial.js";
import type { ParaxialState } from "../math/paraxial.js";
import { createTraceGeometry } from "../trace/geometry.js";
import type { PreparedOpticalState } from "../types.js";
import { prepareEngineTrace } from "../trace/rayAdapters.js";
import { computeSystemMatrix } from "./systemMatrix.js";

const CARDINAL_EPSILON = 1e-12;
const FOLDED_PARAXIAL_SAMPLE_FRACTIONS = [0.04, 0.08, 0.16, 0.32, 0.5, 0.7, 0.9] as const;

/** One axial cardinal point in optical coordinates, measured in mm along z. */
export interface CardinalPoint {
  id: "F" | "F'" | "H" | "H'" | "N" | "N'";
  z: number;
}

/** One signed axial distance annotation between two cardinal/vertex/image points. */
export interface CardinalDistance {
  id: "EFL" | "BFD" | "FFD" | "Hiatus" | "Total track";
  fromZ: number;
  toZ: number;
  valueMm: number;
}

/**
 * Complete first-order cardinal-element result for the current optical state.
 *
 * Points and spans share the diagram's z coordinate convention: z increases from
 * object side toward the nominal image side, with folded axial reflective fixtures
 * reported only when their final image plane can be represented on that same axis.
 */
export interface CardinalElements {
  points: {
    frontFocal: CardinalPoint;
    rearFocal: CardinalPoint;
    frontPrincipal: CardinalPoint;
    rearPrincipal: CardinalPoint;
    frontNodal: CardinalPoint;
    rearNodal: CardinalPoint;
  };
  distances: {
    efl: CardinalDistance;
    bfd: CardinalDistance;
    ffd: CardinalDistance;
    hiatus: CardinalDistance;
    totalTrack: CardinalDistance;
  };
  frontVertexZ: number;
  /** Rear vertex of the traced system (matrix reference; includes synthetic rear plates). */
  rearVertexZ: number;
  /** Rear lens vertex used for BFD; differs from `rearVertexZ` only when rear plates are modeled. */
  rearLensVertexZ: number;
  imagePlaneZ: number;
  objectIndex: number;
  imageIndex: number;
  nodalPrincipalCoincident: boolean;
}

/**
 * Compute cardinal elements from a prepared state.
 *
 * Ordinary lenses use the paraxial ABCD system matrix. Folded reflective systems
 * use a restricted axial path that supports untilted refractive/reflective surfaces
 * and returns null when a stable first-order reporting convention is unavailable.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @returns cardinal points/distances in mm, or null when the matrix is degenerate
 */
export function computeCardinalElementsFromState(state: PreparedOpticalState): CardinalElements | null {
  if (state.lens.flags.isFoldedOptics) return computeFoldedReflectiveCardinals(state);
  if (state.z.length < state.surfaces.length) return null;

  const matrix = computeSystemMatrix(state);
  return buildCardinalElementsFromMatrix({
    ...matrix,
    frontVertexZ: state.z[0],
    rearVertexZ: state.z[state.surfaces.length - 1],
    /* BFD starts at the last drawn lens vertex, before any hidden rear plates. */
    rearLensVertexZ: state.z[state.lens.lastLensSurfaceIndex ?? state.surfaces.length - 1],
    imagePlaneZ: state.imgZ,
  });
}

/**
 * Convert an ABCD matrix into axial cardinal points and distances.
 *
 * Uses the standard reduced-angle matrix convention where `C` is optical power.
 * A near-zero `C` means afocal behavior, so focal/principal points are undefined.
 *
 * @param matrix - ABCD coefficients, vertex positions, image plane, and end media indices
 * @returns cardinal-element result in millimeters, or null for afocal/degenerate systems
 */
export function buildCardinalElementsFromMatrix({
  A,
  B,
  C,
  D,
  frontVertexZ,
  rearVertexZ,
  rearLensVertexZ = rearVertexZ,
  imagePlaneZ,
  objectIndex,
  imageIndex,
}: {
  A: number;
  B: number;
  C: number;
  D: number;
  frontVertexZ: number;
  rearVertexZ: number;
  /** Last authored lens vertex; BFD is measured from here so modeled rear plates count as back focus. */
  rearLensVertexZ?: number;
  imagePlaneZ: number;
  objectIndex: number;
  imageIndex: number;
}): CardinalElements | null {
  if (!Number.isFinite(C) || Math.abs(C) < CARDINAL_EPSILON) return null;
  const frontFocalZ = frontVertexZ + (objectIndex * D) / C;
  const rearFocalZ = rearVertexZ - (imageIndex * A) / C;
  const frontPrincipalZ = frontVertexZ + (objectIndex * (D - 1)) / C;
  const rearPrincipalZ = rearVertexZ + (imageIndex * (1 - A)) / C;

  const nodalDistanceToFrontVertex = (imageIndex - objectIndex * D) / C;
  const frontNodalZ = frontVertexZ - nodalDistanceToFrontVertex;
  const rearNodalZ = rearVertexZ - A * nodalDistanceToFrontVertex - objectIndex * B;

  const efl = rearFocalZ - rearPrincipalZ;
  const bfd = rearFocalZ - rearLensVertexZ;
  const ffd = frontVertexZ - frontFocalZ;
  const hiatus = frontPrincipalZ - rearPrincipalZ;
  const nodalPrincipalCoincident =
    Math.abs(frontNodalZ - frontPrincipalZ) < 1e-8 && Math.abs(rearNodalZ - rearPrincipalZ) < 1e-8;

  return {
    points: {
      frontFocal: { id: "F", z: frontFocalZ },
      rearFocal: { id: "F'", z: rearFocalZ },
      frontPrincipal: { id: "H", z: frontPrincipalZ },
      rearPrincipal: { id: "H'", z: rearPrincipalZ },
      frontNodal: { id: "N", z: frontNodalZ },
      rearNodal: { id: "N'", z: rearNodalZ },
    },
    distances: {
      efl: { id: "EFL", fromZ: rearPrincipalZ, toZ: rearFocalZ, valueMm: efl },
      bfd: { id: "BFD", fromZ: rearLensVertexZ, toZ: rearFocalZ, valueMm: bfd },
      ffd: { id: "FFD", fromZ: frontVertexZ, toZ: frontFocalZ, valueMm: ffd },
      hiatus: { id: "Hiatus", fromZ: rearPrincipalZ, toZ: frontPrincipalZ, valueMm: hiatus },
      totalTrack: { id: "Total track", fromZ: frontVertexZ, toZ: imagePlaneZ, valueMm: imagePlaneZ - frontVertexZ },
    },
    frontVertexZ,
    rearVertexZ,
    rearLensVertexZ,
    imagePlaneZ,
    objectIndex,
    imageIndex,
    nodalPrincipalCoincident,
  };
}

/**
 * Compute cardinal elements with camera/display coordinate overrides.
 *
 * @param state - prepared optical state for current controls
 * @param zPos - current surface vertex positions in mm
 * @param imagePlaneZ - current image-plane z coordinate in mm
 * @returns cardinal-element result in millimeters, or null when unsupported
 */
export function computeCardinalElementsWithLayout(
  state: PreparedOpticalState,
  zPos: readonly number[],
  imagePlaneZ: number,
): CardinalElements | null {
  const z = Object.freeze([...zPos]);
  const surfaces = Object.freeze(
    state.surfaces.map((surface, index) => Object.freeze({ ...surface, z: zPos[index] ?? surface.z })),
  );
  const stateWithZ = {
    ...state,
    z,
    imgZ: imagePlaneZ,
    surfaces,
    traceGeometry: createTraceGeometry({
      surfaces,
      z,
      imagePlane: state.imagePlane,
      stopSurfaceIndex: state.lens.stop.surfaceIndex,
      pathPlan: state.lens.opticalPath,
      isFoldedOptics: state.lens.flags.isFoldedOptics,
    }),
  } as PreparedOpticalState;
  return computeCardinalElementsFromState(stateWithZ);
}

function computeFoldedReflectiveCardinals(state: PreparedOpticalState): CardinalElements | null {
  if (state.z.length < state.surfaces.length) return null;
  if (Math.abs(state.imagePlane.normal[1]) > 1e-9) return null;

  const order = resolveFoldedParaxialSurfaceOrder(state);
  if (order.length === 0) return null;
  if (!order.every((surfaceIndex) => isFoldedParaxialSurfaceSupported(state, surfaceIndex))) return null;

  const marginal = traceFoldedReflectiveParaxialPath(state, order, 1, 0);
  const chief = traceFoldedReflectiveParaxialPath(state, order, 0, 1);
  if (marginal === null || chief === null) return null;

  const objectIndex = 1;
  const imageIndex = marginal.n;
  return buildCardinalElementsFromMatrix({
    A: marginal.y,
    B: chief.y,
    C: imageIndex * marginal.u,
    D: imageIndex * chief.u,
    frontVertexZ: state.z[0],
    rearVertexZ: state.z[order[order.length - 1]],
    imagePlaneZ: state.imgZ,
    objectIndex,
    imageIndex,
  });
}

function resolveFoldedParaxialSurfaceOrder(state: PreparedOpticalState): number[] {
  if (state.lens.opticalPath.surfaceOrder?.length) return [...state.lens.opticalPath.surfaceOrder];

  /* Auto folded fixtures need a real trace to discover the actual reflective hit order. */
  const constants = state.lens.constants;
  const candidateFractions = new Set<number>([
    0,
    ...state.lens.authoredRayFans.rayFractions.map((fraction) => Math.abs(fraction)),
  ]);
  for (const fraction of FOLDED_PARAXIAL_SAMPLE_FRACTIONS) candidateFractions.add(fraction);

  const candidateHeights = [...candidateFractions]
    .filter((fraction) => Number.isFinite(fraction) && fraction >= 0)
    .sort((a, b) => a - b)
    .map((fraction) => fraction * constants.EP.epSD);

  const trace = prepareEngineTrace(state, {
    checkSemiDiameter: true,
    stopSemiDiameter: constants.stopPhysSD,
    stopOnClip: true,
  });
  for (const y0 of candidateHeights) {
    const result = trace({ origin: [0, y0, state.z[0] ?? 0], direction: [0, 0, 1] });
    if (!result.reachedImagePlane || result.status !== "ok") continue;
    const opticalHits = result.hits
      .map((hit) => hit.surfaceIndex)
      .filter((surfaceIndex) => {
        const interaction = state.surfaces[surfaceIndex]?.interaction;
        return interaction?.type === "reflect" || (interaction?.type ?? "refract") === "refract";
      });
    if (opticalHits.some((surfaceIndex) => state.surfaces[surfaceIndex]?.interaction.type === "reflect")) {
      return opticalHits;
    }
  }

  return [];
}

function isFoldedParaxialSurfaceSupported(state: PreparedOpticalState, surfaceIndex: number): boolean {
  const surface = state.surfaces[surfaceIndex];
  if (!surface) return false;
  if (surface.interaction.normal) return false;
  if (surface.interaction.type === "block") return false;
  if (surface.interaction.type === "reflect") return true;

  /* The folded paraxial approximation currently accepts only same-index refractive passes. */
  const nextIndex = surface.nd === 1 ? 1 : surface.nd;
  return Math.abs(nextIndex - 1) <= 1e-12;
}

function traceFoldedReflectiveParaxialPath(
  state: PreparedOpticalState,
  order: readonly number[],
  y0: number,
  u0: number,
): ParaxialState | null {
  let rayState: ParaxialState = { y: y0, u: u0, n: 1 };
  let currentZ = state.z[0];

  for (const surfaceIndex of order) {
    const surface = state.surfaces[surfaceIndex];
    const targetZ = state.z[surfaceIndex];
    if (!surface || !Number.isFinite(targetZ)) return null;

    rayState = transferParaxialRay(rayState, targetZ - currentZ);
    currentZ = targetZ;

    const nextState = traceParaxialSurfaces([surface], rayState.y, rayState.u, {
      allowReflect: true,
      requireSameIndexRefraction: true,
      skipLastTransfer: true,
    });
    rayState = { y: nextState.y, u: nextState.u, n: nextState.n };
  }

  return rayState;
}
