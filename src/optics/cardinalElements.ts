import type { RuntimeLens } from "../types/optics.js";
import { traceExactSurfaceStack } from "./internal/exactSurfaceTrace.js";
import { buildStateSurfaces } from "./internal/lensState.js";
import { FLAT_R_THRESHOLD } from "./internal/surfaceMath.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";

const CARDINAL_EPSILON = 1e-12;
const FOLDED_PARAXIAL_SAMPLE_FRACTIONS = [0.04, 0.08, 0.16, 0.32, 0.5, 0.7, 0.9] as const;

export interface CardinalPoint {
  id: "F" | "F'" | "H" | "H'" | "N" | "N'";
  z: number;
}

export interface CardinalDistance {
  id: "EFL" | "BFD" | "FFD" | "Hiatus" | "Total track";
  fromZ: number;
  toZ: number;
  valueMm: number;
}

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
  rearVertexZ: number;
  imagePlaneZ: number;
  objectIndex: number;
  imageIndex: number;
  nodalPrincipalCoincident: boolean;
}

export function computeCardinalElementsAtState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  zPos: number[],
  imagePlaneZ: number,
  aberrationT = 0,
): CardinalElements | null {
  if (L.isFoldedOptics) {
    return computeFoldedReflectiveCardinalElementsAtState(L, zPos, imagePlaneZ);
  }

  if (zPos.length < L.N) return null;

  const S = buildStateSurfaces(
    L.S,
    L.varByIdx,
    Boolean(L.isZoom),
    focusT,
    zoomT,
    L.aberrationControl?.varByIdx,
    aberrationT,
  );
  const marginal = traceSurfacesParaxial(S, 1, 0, { skipLastTransfer: true });
  const chief = traceSurfacesParaxial(S, 0, 1, { skipLastTransfer: true });
  const objectIndex = 1;
  const imageIndex = marginal.n;

  return buildCardinalElementsFromMatrix({
    A: marginal.y,
    B: chief.y,
    C: imageIndex * marginal.u,
    D: imageIndex * chief.u,
    frontVertexZ: zPos[0],
    rearVertexZ: zPos[L.N - 1],
    imagePlaneZ,
    objectIndex,
    imageIndex,
  });
}

function buildCardinalElementsFromMatrix({
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
}): CardinalElements | null {
  if (!isFinite(C) || Math.abs(C) < CARDINAL_EPSILON) return null;
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

function computeFoldedReflectiveCardinalElementsAtState(
  L: RuntimeLens,
  zPos: number[],
  imagePlaneZ: number,
): CardinalElements | null {
  if (zPos.length < L.N) return null;
  if (Math.abs(L.imagePlane.normal.y) > 1e-9) return null;

  const order = resolveFoldedParaxialSurfaceOrder(L, zPos);
  if (order.length === 0) return null;
  if (!order.every((surfaceIdx) => isFoldedParaxialSurfaceSupported(L, surfaceIdx))) return null;

  const marginal = traceFoldedReflectiveParaxialPath(L, zPos, order, 1, 0);
  const chief = traceFoldedReflectiveParaxialPath(L, zPos, order, 0, 1);
  if (marginal === null || chief === null) return null;

  const objectIndex = 1;
  const imageIndex = marginal.n;

  return buildCardinalElementsFromMatrix({
    A: marginal.y,
    B: chief.y,
    C: imageIndex * marginal.u,
    D: imageIndex * chief.u,
    frontVertexZ: zPos[0],
    rearVertexZ: zPos[order[order.length - 1]],
    imagePlaneZ,
    objectIndex,
    imageIndex,
  });
}

function resolveFoldedParaxialSurfaceOrder(L: RuntimeLens, zPos: number[]): number[] {
  if (L.opticalPath.surfaceOrder?.length) return L.opticalPath.surfaceOrder;

  const candidateFractions = new Set<number>([0, ...L.rayFractions.map((fraction) => Math.abs(fraction))]);
  for (const fraction of FOLDED_PARAXIAL_SAMPLE_FRACTIONS) candidateFractions.add(fraction);

  const candidateHeights = [...candidateFractions]
    .filter((fraction) => isFinite(fraction) && fraction >= 0)
    .sort((a, b) => a - b)
    .map((fraction) => fraction * L.EP.epSD);

  for (const y0 of candidateHeights) {
    const result = traceExactSurfaceStack(
      L,
      { y0, uy0: 0 },
      {
        zPos,
        checkSemiDiameter: true,
        stopSemiDiameter: L.stopPhysSD,
        leadDistance: 0,
        stopOnClip: true,
      },
    );
    if (!result.reachedImagePlane || result.clipped) continue;
    const opticalHits = result.hits
      .map((hit) => hit.surfaceIdx)
      .filter((surfaceIdx) => {
        const interaction = L.S[surfaceIdx]?.interaction;
        return interaction?.type === "reflect" || (interaction?.type ?? "refract") === "refract";
      });
    if (opticalHits.some((surfaceIdx) => L.S[surfaceIdx]?.interaction?.type === "reflect")) return opticalHits;
  }

  return [];
}

function isFoldedParaxialSurfaceSupported(L: RuntimeLens, surfaceIdx: number): boolean {
  const surface = L.S[surfaceIdx];
  if (!surface) return false;
  if (surface.interaction?.normal) return false;
  if (surface.interaction?.type === "block") return false;
  if (surface.interaction?.type === "reflect") return true;

  const nextIndex = surface.nd === 1.0 ? 1.0 : surface.nd;
  return Math.abs(nextIndex - 1) <= 1e-12;
}

function traceFoldedReflectiveParaxialPath(
  L: RuntimeLens,
  zPos: number[],
  order: readonly number[],
  y0: number,
  u0: number,
): { y: number; u: number; n: number } | null {
  let y = y0;
  let u = u0;
  let n = 1;
  let currentZ = zPos[0];

  for (const surfaceIdx of order) {
    const surface = L.S[surfaceIdx];
    const targetZ = zPos[surfaceIdx];
    if (!surface || !isFinite(targetZ)) return null;

    y += (targetZ - currentZ) * u;
    currentZ = targetZ;

    if (surface.interaction?.type === "reflect") {
      u = Math.abs(surface.R) < FLAT_R_THRESHOLD ? -u - (2 * y) / surface.R : -u;
      continue;
    }

    const nextIndex = surface.nd === 1.0 ? 1.0 : surface.nd;
    if (Math.abs(nextIndex - n) > 1e-12) return null;
    n = nextIndex;
  }

  return { y, u, n };
}
