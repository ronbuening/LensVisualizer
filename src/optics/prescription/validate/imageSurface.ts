/** Curved image surfaces: the shape, its single-valued domain, image-circle coverage and clearance behind the lens. */
import { ASPHERIC_COEFFICIENT_SCHEMA, expandAsphericCoefficients } from "../../../types/asphericSchema.js";
import { imageFormatMetadata } from "../../../utils/catalog/lensTaxonomy.js";
import { FLAT_R_THRESHOLD, conicFiniteRadiusLimit, conicPolySag, sag } from "../../geometry/surfaceProfile.js";
import type { UntrustedLensData } from "./context.js";

const IMAGE_SURFACE_FIELDS = new Set(["R", "asphere", "cylindrical", "curvedAlong", "sd", "source", "section"]);
const ASPHERIC_KEYS = new Set<string>(ASPHERIC_COEFFICIENT_SCHEMA.map((descriptor) => descriptor.key));

/** Radial samples when checking the surface against the face in front of it. */
const CLEARANCE_SAMPLES = 32;

const finite = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);

/**
 * Validate `imageSurface`, when present.
 *
 * The surface must be single-valued out to `sd`, cover the declared image circle, and stay behind the face in front of
 * it (the last lens surface, or the last rear plate) at every authored state of the last gap. A folded path's
 * reachability probes cover its plane, so the clearance check is for sequential lenses only.
 *
 * @param data - untrusted numeric-column lens data
 * @param labelToIdx - surface label to index
 * @param errors - error accumulator (mutated)
 */
export function validateImageSurface(
  data: UntrustedLensData,
  labelToIdx: Record<string, number>,
  errors: string[],
): void {
  const surface = data.imageSurface;
  if (surface === undefined) return;
  if (!surface || typeof surface !== "object" || Array.isArray(surface)) {
    errors.push(`"imageSurface" must be an object when provided`);
    return;
  }
  for (const field of Object.keys(surface)) {
    if (!IMAGE_SURFACE_FIELDS.has(field)) errors.push(`imageSurface.${field} is not an image-surface field`);
  }
  const { R, sd, cylindrical, asphere } = surface;
  if (!finite(R) || R === 0 || Math.abs(R) > FLAT_R_THRESHOLD) {
    errors.push(`imageSurface.R must be a finite nonzero radius in mm; leave "imageSurface" out for a flat image`);
  }
  if (!finite(sd) || sd <= 0) errors.push(`imageSurface.sd must be a finite semi-diameter > 0`);
  if (cylindrical !== undefined && cylindrical !== true) errors.push(`imageSurface.cylindrical must be true when set`);
  if (surface.curvedAlong !== undefined && surface.curvedAlong !== "long" && surface.curvedAlong !== "short") {
    errors.push(`imageSurface.curvedAlong must be "long" or "short"`);
  }
  if (surface.curvedAlong !== undefined && !cylindrical) {
    errors.push(`imageSurface.curvedAlong applies only to a cylindrical surface`);
  }
  if (cylindrical && data.imageFormat === undefined) {
    errors.push(`a cylindrical imageSurface needs "imageFormat": its sections follow the frame's sides`);
  }
  if (surface.section !== undefined && !["long", "short", "corner"].includes(surface.section)) {
    errors.push(`imageSurface.section must be "long", "short" or "corner"`);
  }
  if (surface.source !== undefined && (typeof surface.source !== "string" || !surface.source)) {
    errors.push(`imageSurface.source must be a non-empty string when provided`);
  }
  if (asphere !== undefined) {
    if (cylindrical) errors.push(`imageSurface.asphere cannot be combined with a cylindrical surface`);
    if (!asphere || typeof asphere !== "object" || Array.isArray(asphere)) {
      errors.push(`imageSurface.asphere must be an object of aspheric coefficients`);
      return;
    }
    for (const [key, value] of Object.entries(asphere)) {
      if (!ASPHERIC_KEYS.has(key)) errors.push(`imageSurface.asphere.${key} is not an aspheric coefficient`);
      else if (!finite(value)) errors.push(`imageSurface.asphere.${key} must be finite`);
    }
  }
  if (data.perspectiveControl !== undefined) {
    errors.push(`"imageSurface" cannot be combined with "perspectiveControl" (the sensor would move with the lens)`);
  }
  if (!finite(R) || R === 0 || Math.abs(R) > FLAT_R_THRESHOLD || !finite(sd) || sd <= 0) return;

  const coefficients = asphere && !cylindrical ? expandAsphericCoefficients(asphere) : undefined;
  const domain = cylindrical ? Math.abs(R) : conicFiniteRadiusLimit(R, coefficients?.K ?? 0);
  if (domain !== null && sd >= domain) {
    errors.push(`imageSurface.sd ${sd} mm reaches the edge of the surface (${domain.toFixed(3)} mm)`);
    return;
  }
  /* A cylinder's curved meridian has the sag of a sphere of the same radius; its straight one has none. */
  const imageSag = (h: number): number => (coefficients ? conicPolySag(h, R, coefficients) : sag(h, R));
  if (!finite(imageSag(sd))) {
    errors.push(`imageSurface: sag is not finite at sd ${sd} mm`);
    return;
  }

  /* A cylinder's curved coordinate spans only the frame side it curves along; elsewhere sd covers the image circle. */
  const format = imageFormatMetadata(data.imageFormat);
  const curvedSide =
    cylindrical && format
      ? (surface.curvedAlong === "short" ? Math.min : Math.max)(format.widthMm, format.heightMm) / 2
      : null;
  const imageCircleRadius = finite(data.imageCircleMm) ? data.imageCircleMm / 2 : (format?.diagonalMm ?? NaN) / 2;
  if (curvedSide !== null && sd < curvedSide - 1e-9) {
    errors.push(
      `imageSurface.sd ${sd} mm does not cover the ${curvedSide.toFixed(2)} mm half-side the cylinder curves along`,
    );
  } else if (curvedSide === null && finite(imageCircleRadius) && sd < imageCircleRadius - 1e-9) {
    errors.push(`imageSurface.sd ${sd} mm does not cover the ${imageCircleRadius.toFixed(2)} mm image-circle radius`);
  }

  if (data.opticalPath !== undefined || !Array.isArray(data.surfaces) || data.surfaces.length === 0) return;
  validateImageSurfaceClearance(data, labelToIdx, imageSag, sd, errors);
}

/**
 * Check that the image surface stays behind the face in front of it at every authored state of the last gap.
 *
 * @param data - untrusted numeric-column lens data
 * @param labelToIdx - surface label to index
 * @param imageSag - image-surface sag along its curved meridian
 * @param sd - image-surface semi-diameter in mm
 * @param errors - error accumulator (mutated)
 */
function validateImageSurfaceClearance(
  data: UntrustedLensData,
  labelToIdx: Record<string, number>,
  imageSag: (h: number) => number,
  sd: number,
  errors: string[],
): void {
  const plates = Array.isArray(data.rearPlates) ? data.rearPlates : [];
  const lastPlate = plates[plates.length - 1];
  let faceSag: (h: number) => number;
  let faceSd: number;
  let gaps: number[];
  let faceLabel: string;
  if (lastPlate) {
    if (!finite(lastPlate.gapAfterMm)) return;
    faceSag = () => 0;
    faceSd = finite(lastPlate.sd) ? lastPlate.sd : sd;
    gaps = [lastPlate.gapAfterMm];
    faceLabel = `rear plate ${plates.length}`;
  } else {
    const last = data.surfaces[data.surfaces.length - 1];
    if (!last || !finite(last.R) || !finite(last.sd)) return;
    const coefficients = data.asph?.[last.label];
    faceSag = (h) => conicPolySag(h, last.R, coefficients);
    faceSd = last.sd;
    const range = labelToIdx[last.label] !== undefined ? data.var?.[last.label] : undefined;
    gaps = [last.d, ...(Array.isArray(range) ? range.flat() : [])].filter(finite);
    faceLabel = `"${last.label}"`;
  }
  const reach = Math.min(sd, faceSd);
  for (const gap of gaps) {
    for (let k = 0; k <= CLEARANCE_SAMPLES; k++) {
      const h = (reach * k) / CLEARANCE_SAMPLES;
      const clearance = gap + imageSag(h) - faceSag(h);
      if (!(clearance > 0)) {
        errors.push(
          `imageSurface: at h=${h.toFixed(2)} mm the surface meets ${faceLabel} across a ${gap.toFixed(3)} mm gap ` +
            `(clearance ${clearance.toFixed(3)} mm)`,
        );
        return;
      }
    }
  }
}
