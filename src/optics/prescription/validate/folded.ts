/** Path declarations, mirror normals and conservative compiled-geometry probes. */
import type { UntrustedLensData, ExplicitElementSpan } from "./context.js";
import type { AsphericCoefficients, ImagePlaneData, SurfaceData } from "../../../types/optics.js";
import { FLAT_R_THRESHOLD } from "../../geometry/surfaceProfile.js";
import { buildAsphereIndex } from "../compileAspheres.js";
import { compileSurfaces } from "../surfaces.js";
import { createTraceGeometry } from "../../trace/geometry.js";
import { resolvedImagePlaneToPlane3 } from "../interactions.js";

export function validateImagePlane(value: unknown, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"opticalPath.imagePlane" must be an object when provided`);
    return;
  }

  const imagePlane = value as ImagePlaneData;
  if (typeof imagePlane.z !== "number" || !isFinite(imagePlane.z)) {
    errors.push(`"opticalPath.imagePlane.z" must be a finite number`);
  }
  if (imagePlane.y !== undefined && (typeof imagePlane.y !== "number" || !isFinite(imagePlane.y))) {
    errors.push(`"opticalPath.imagePlane.y" must be a finite number when provided`);
  }
  if (imagePlane.label !== undefined && typeof imagePlane.label !== "string") {
    errors.push(`"opticalPath.imagePlane.label" must be a string when provided`);
  }
  validateYzNormal(imagePlane.normal, `"opticalPath.imagePlane.normal"`, errors);
}

export function validateOpticalPath(value: unknown, surfaceLabels: Set<string>, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"opticalPath" must be an object when provided`);
    return;
  }

  const path = value as Record<string, unknown>;
  if (path.mode !== undefined && path.mode !== "sequential" && path.mode !== "auto") {
    errors.push(`"opticalPath.mode" must be "sequential" or "auto" when provided`);
  }

  if (path.surfaceOrder !== undefined) {
    if (!Array.isArray(path.surfaceOrder) || path.surfaceOrder.length === 0) {
      errors.push(`"opticalPath.surfaceOrder" must be a non-empty array of surface labels when provided`);
    } else {
      path.surfaceOrder.forEach((label, index) => {
        if (typeof label !== "string" || !surfaceLabels.has(label)) {
          errors.push(`"opticalPath.surfaceOrder[${index}]" must match a surface label`);
        }
      });
    }
  }

  if (path.imagePlane !== undefined) validateImagePlane(path.imagePlane, errors);

  if (
    path.maxInteractions !== undefined &&
    (typeof path.maxInteractions !== "number" ||
      !isFinite(path.maxInteractions) ||
      path.maxInteractions < 1 ||
      Math.round(path.maxInteractions) !== path.maxInteractions)
  ) {
    errors.push(`"opticalPath.maxInteractions" must be a positive integer when provided`);
  }

  if (
    Array.isArray(path.surfaceOrder) &&
    typeof path.maxInteractions === "number" &&
    isFinite(path.maxInteractions) &&
    Math.round(path.maxInteractions) === path.maxInteractions
  ) {
    const requiredInteractions = path.surfaceOrder.length + (path.imagePlane !== undefined ? 1 : 0);
    if (path.maxInteractions < requiredInteractions) {
      errors.push(
        `"opticalPath.maxInteractions" must be at least surfaceOrder length plus image-plane termination (${requiredInteractions})`,
      );
    }
  }
}

export function validateYzNormal(value: unknown, label: string, errors: string[]): void {
  if (value === undefined) return;
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    typeof (value as Record<string, unknown>).z !== "number" ||
    typeof (value as Record<string, unknown>).y !== "number" ||
    !isFinite((value as { z: number }).z) ||
    !isFinite((value as { y: number }).y)
  ) {
    errors.push(`${label} must contain finite z and y numbers`);
    return;
  }
  const normal = value as { z: number; y: number };
  if (Math.hypot(normal.z, normal.y) <= 1e-12) {
    errors.push(`${label} must not be the zero vector`);
  }
}

export function normalizedNormal(value: unknown): { z: number; y: number } | null {
  if (
    !value ||
    typeof value !== "object" ||
    typeof (value as Record<string, unknown>).z !== "number" ||
    typeof (value as Record<string, unknown>).y !== "number"
  ) {
    return null;
  }
  const normal = value as { z: number; y: number };
  const len = Math.hypot(normal.z, normal.y);
  if (!isFinite(len) || len <= 1e-12) return null;
  return { z: normal.z / len, y: normal.y / len };
}

export function samePlaneNormal(a: unknown, b: unknown): boolean {
  const na = normalizedNormal(a);
  const nb = normalizedNormal(b);
  if (!na || !nb) return false;
  return Math.abs(Math.abs(na.z * nb.z + na.y * nb.y) - 1) < 1e-6;
}

export function validateTiltedMirrorBackingNormals(
  S: UntrustedLensData[],
  explicitSpans: Map<number, ExplicitElementSpan>,
  errors: string[],
): void {
  const spanForElement = (elemId: number): { from: number; to: number } | null => {
    const explicit = explicitSpans.get(elemId);
    if (explicit) return explicit;
    const from = S.findIndex((surface) => surface.elemId === elemId);
    if (from < 0 || from + 1 >= S.length) return null;
    return { from, to: from + 1 };
  };

  for (let i = 0; i < S.length; i++) {
    const surface = S[i];
    if (surface.elemId === 0 || surface.interaction?.type !== "reflect" || !surface.interaction.normal) continue;
    if (typeof surface.R !== "number" || Math.abs(surface.R) <= FLAT_R_THRESHOLD) continue;

    const span = spanForElement(surface.elemId);
    if (!span || i < span.from || i > span.to) continue;
    const backingIdx = i === span.from ? span.to : span.from;
    if (backingIdx === i || backingIdx < 0 || backingIdx >= S.length) continue;
    const backing = S[backingIdx];
    if (typeof backing.R !== "number" || Math.abs(backing.R) <= FLAT_R_THRESHOLD) continue;
    if (samePlaneNormal(surface.interaction.normal, backing.interaction?.normal)) continue;

    errors.push(
      `surfaces[${backingIdx}] ("${backing.label}"): tilted mirror backing plane should repeat interaction.normal from reflective surface "${surface.label}"`,
    );
  }
}

export function validateFoldedImagePlaneReachability(
  data: UntrustedLensData,
  S: UntrustedLensData[],
  labelToIdx: Record<string, number>,
  errors: string[],
): void {
  const pathData = data.opticalPath as Record<string, unknown> | undefined;
  const imagePlaneData = pathData?.imagePlane as ImagePlaneData | undefined;
  if (!pathData || !imagePlaneData || typeof imagePlaneData.z !== "number" || !isFinite(imagePlaneData.z)) return;
  if (pathData.mode === "auto") return;
  if (typeof labelToIdx.STO !== "number") return;

  const surfaceLabels = Array.isArray(pathData.surfaceOrder) ? pathData.surfaceOrder : null;
  if (surfaceLabels && new Set(surfaceLabels).size !== surfaceLabels.length) return;
  const surfaceOrder =
    surfaceLabels && surfaceLabels.every((label) => typeof label === "string" && typeof labelToIdx[label] === "number")
      ? surfaceLabels.map((label) => labelToIdx[label])
      : null;
  const normal = normalizedNormal(imagePlaneData.normal) ?? { z: 1, y: 0 };
  const maxInteractions =
    typeof pathData.maxInteractions === "number" && isFinite(pathData.maxInteractions)
      ? pathData.maxInteractions
      : Math.max(S.length + 1, 1);

  /* Validation precedes runtime construction; compile only the authored probe geometry. */
  const z = [0];
  for (let i = 0; i < S.length - 1; i++) z.push(z[i] + S[i].d);
  let surfaces: ReturnType<typeof compileSurfaces>;
  let asphByIdx: Record<number, AsphericCoefficients>;
  try {
    asphByIdx = buildAsphereIndex(data.asph, labelToIdx);
  } catch (cause) {
    errors.push(
      `"opticalPath.imagePlane" reachability could not be validated: malformed "asph" data (${
        cause instanceof Error ? cause.message : String(cause)
      })`,
    );
    return;
  }
  try {
    surfaces = compileSurfaces(S as SurfaceData[], S as SurfaceData[], asphByIdx);
  } catch (cause) {
    /* Malformed phase records already have schema errors; compilation must not turn them into a throw. */
    errors.push(
      `"opticalPath.imagePlane" reachability could not be validated: malformed surface data (${
        cause instanceof Error ? cause.message : String(cause)
      })`,
    );
    return;
  }
  const geometry = createTraceGeometry({
    surfaces: Object.freeze(surfaces.map((surface, i) => Object.freeze({ ...surface, base: surface, z: z[i] }))),
    z: Object.freeze(z),
    stopSurfaceIndex: labelToIdx.STO,
    pathPlan: {
      mode: pathData.mode === "auto" ? "auto" : "sequential",
      surfaceOrder,
      surfaceLabels: surfaceLabels as string[] | null,
      maxInteractions,
    },
    imagePlane: resolvedImagePlaneToPlane3({
      z: imagePlaneData.z,
      y: typeof imagePlaneData.y === "number" && isFinite(imagePlaneData.y) ? imagePlaneData.y : 0,
      normal,
      label: typeof imagePlaneData.label === "string" ? imagePlaneData.label : "IMG",
    }),
    isFoldedOptics: true,
  });

  const stopSd = typeof S[labelToIdx.STO]?.sd === "number" && isFinite(S[labelToIdx.STO].sd) ? S[labelToIdx.STO].sd : 1;
  const probeHeights = [...new Set([0, 0.2 * stopSd, -0.2 * stopSd, 0.4 * stopSd, -0.4 * stopSd])];
  const reachesImagePlane = probeHeights.some((y0) => {
    const result = geometry.traversal.full(
      geometry,
      { origin: [0, y0, z[0]], direction: [0, 0, 1] },
      { checkSemiDiameter: true },
    );
    return result.reachedImagePlane && result.failureReason === null && result.status === "ok";
  });

  if (!reachesImagePlane) {
    errors.push(`"opticalPath.imagePlane" is not reached by any conservative folded-path probe ray`);
  }
}
