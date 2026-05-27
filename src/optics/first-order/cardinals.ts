/**
 * Cardinal element solver — first-order focal, principal, nodal, and distance calculations.
 *
 * Uses the prepared system matrix and current image-plane geometry to feed the diagram's axial first-order overlays.
 */

import type { RuntimeLens } from "../../types/optics.js";
import { traceParaxialSurfaces2, transferParaxialRay2, type ParaxialState } from "../math/paraxial.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import type { PreparedOpticalState } from "../types.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import { computeSystemMatrix2 } from "./systemMatrix.js";

const CARDINAL_EPSILON = 1e-12;
const FOLDED_PARAXIAL_SAMPLE_FRACTIONS = [0.04, 0.08, 0.16, 0.32, 0.5, 0.7, 0.9] as const;

export interface CardinalPoint2 {
  id: "F" | "F'" | "H" | "H'" | "N" | "N'";
  z: number;
}

export interface CardinalDistance2 {
  id: "EFL" | "BFD" | "FFD" | "Hiatus" | "Total track";
  fromZ: number;
  toZ: number;
  valueMm: number;
}

export interface CardinalElements2 {
  points: {
    frontFocal: CardinalPoint2;
    rearFocal: CardinalPoint2;
    frontPrincipal: CardinalPoint2;
    rearPrincipal: CardinalPoint2;
    frontNodal: CardinalPoint2;
    rearNodal: CardinalPoint2;
  };
  distances: {
    efl: CardinalDistance2;
    bfd: CardinalDistance2;
    ffd: CardinalDistance2;
    hiatus: CardinalDistance2;
    totalTrack: CardinalDistance2;
  };
  frontVertexZ: number;
  rearVertexZ: number;
  imagePlaneZ: number;
  objectIndex: number;
  imageIndex: number;
  nodalPrincipalCoincident: boolean;
}

export function computeCardinalElements2(state: PreparedOpticalState): CardinalElements2 | null {
  if (state.lens.flags.isFoldedOptics) return computeFoldedReflectiveCardinals2(state);
  if (state.z.length < state.surfaces.length) return null;

  const matrix = computeSystemMatrix2(state);
  return buildCardinalElementsFromMatrix2({
    ...matrix,
    frontVertexZ: state.z[0],
    rearVertexZ: state.z[state.surfaces.length - 1],
    imagePlaneZ: state.imgZ,
  });
}

export function buildCardinalElementsFromMatrix2({
  A,
  B,
  C,
  D,
  frontVertexZ,
  rearVertexZ,
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
  imagePlaneZ: number;
  objectIndex: number;
  imageIndex: number;
}): CardinalElements2 | null {
  if (!Number.isFinite(C) || Math.abs(C) < CARDINAL_EPSILON) return null;
  const frontFocalZ = frontVertexZ + (objectIndex * D) / C;
  const rearFocalZ = rearVertexZ - (imageIndex * A) / C;
  const frontPrincipalZ = frontVertexZ + (objectIndex * (D - 1)) / C;
  const rearPrincipalZ = rearVertexZ + (imageIndex * (1 - A)) / C;

  const nodalDistanceToFrontVertex = (imageIndex - objectIndex * D) / C;
  const frontNodalZ = frontVertexZ - nodalDistanceToFrontVertex;
  const rearNodalZ = rearVertexZ - A * nodalDistanceToFrontVertex - objectIndex * B;

  const efl = rearFocalZ - rearPrincipalZ;
  const bfd = rearFocalZ - rearVertexZ;
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
      bfd: { id: "BFD", fromZ: rearVertexZ, toZ: rearFocalZ, valueMm: bfd },
      ffd: { id: "FFD", fromZ: frontVertexZ, toZ: frontFocalZ, valueMm: ffd },
      hiatus: { id: "Hiatus", fromZ: rearPrincipalZ, toZ: frontPrincipalZ, valueMm: hiatus },
      totalTrack: { id: "Total track", fromZ: frontVertexZ, toZ: imagePlaneZ, valueMm: imagePlaneZ - frontVertexZ },
    },
    frontVertexZ,
    rearVertexZ,
    imagePlaneZ,
    objectIndex,
    imageIndex,
    nodalPrincipalCoincident,
  };
}

export function computeCardinalElementsAtState2(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  zPos: number[],
  imagePlaneZ: number,
  aberrationT = 0,
): CardinalElements2 | null {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const stateWithZ = {
    ...state,
    z: Object.freeze([...zPos]),
    imgZ: imagePlaneZ,
    surfaces: Object.freeze(
      state.surfaces.map((surface, index) => Object.freeze({ ...surface, z: zPos[index] ?? surface.z })),
    ),
  } as PreparedOpticalState;
  return computeCardinalElements2(stateWithZ);
}

function computeFoldedReflectiveCardinals2(state: PreparedOpticalState): CardinalElements2 | null {
  if (state.z.length < state.surfaces.length) return null;
  if (Math.abs(state.imagePlane.normal[1]) > 1e-9) return null;

  const order = resolveFoldedParaxialSurfaceOrder2(state);
  if (order.length === 0) return null;
  if (!order.every((surfaceIndex) => isFoldedParaxialSurfaceSupported2(state, surfaceIndex))) return null;

  const marginal = traceFoldedReflectiveParaxialPath2(state, order, 1, 0);
  const chief = traceFoldedReflectiveParaxialPath2(state, order, 0, 1);
  if (marginal === null || chief === null) return null;

  const objectIndex = 1;
  const imageIndex = marginal.n;
  return buildCardinalElementsFromMatrix2({
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

function resolveFoldedParaxialSurfaceOrder2(state: PreparedOpticalState): number[] {
  if (state.lens.opticalPath.surfaceOrder?.length) return [...state.lens.opticalPath.surfaceOrder];

  const runtime = state.lens.runtime;
  const candidateFractions = new Set<number>([
    0,
    ...state.lens.authoredRayFans.rayFractions.map((fraction) => Math.abs(fraction)),
  ]);
  for (const fraction of FOLDED_PARAXIAL_SAMPLE_FRACTIONS) candidateFractions.add(fraction);

  const candidateHeights = [...candidateFractions]
    .filter((fraction) => Number.isFinite(fraction) && fraction >= 0)
    .sort((a, b) => a - b)
    .map((fraction) => fraction * runtime.EP.epSD);

  for (const y0 of candidateHeights) {
    const result = traceEngineRay2(
      state,
      { origin: [0, y0, state.z[0] ?? 0], direction: [0, 0, 1] },
      {
        checkSemiDiameter: true,
        stopSemiDiameter: runtime.stopPhysSD,
        stopOnClip: true,
      },
    );
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

function isFoldedParaxialSurfaceSupported2(state: PreparedOpticalState, surfaceIndex: number): boolean {
  const surface = state.surfaces[surfaceIndex];
  if (!surface) return false;
  if (surface.interaction.normal) return false;
  if (surface.interaction.type === "block") return false;
  if (surface.interaction.type === "reflect") return true;

  const nextIndex = surface.nd === 1 ? 1 : surface.nd;
  return Math.abs(nextIndex - 1) <= 1e-12;
}

function traceFoldedReflectiveParaxialPath2(
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

    rayState = transferParaxialRay2(rayState, targetZ - currentZ);
    currentZ = targetZ;

    const nextState = traceParaxialSurfaces2([surface], rayState.y, rayState.u, {
      allowReflect: true,
      requireSameIndexRefraction: true,
      skipLastTransfer: true,
    });
    rayState = { y: nextState.y, u: nextState.u, n: nextState.n };
  }

  return rayState;
}
