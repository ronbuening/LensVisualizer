import type { RuntimeLens } from "../types/optics.js";
import { buildStateSurfaces } from "./internal/lensState.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";

const CARDINAL_EPSILON = 1e-12;

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
): CardinalElements | null {
  if (zPos.length < L.N) return null;

  const S = buildStateSurfaces(L.S, L.varByIdx, Boolean(L.isZoom), focusT, zoomT);
  const marginal = traceSurfacesParaxial(S, 1, 0, { skipLastTransfer: true });
  const chief = traceSurfacesParaxial(S, 0, 1, { skipLastTransfer: true });
  const objectIndex = 1;
  const imageIndex = marginal.n;

  const A = marginal.y;
  const B = chief.y;
  const C = imageIndex * marginal.u;
  const D = imageIndex * chief.u;

  if (!isFinite(C) || Math.abs(C) < CARDINAL_EPSILON) return null;

  const frontVertexZ = zPos[0];
  const rearVertexZ = zPos[L.N - 1];
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
