/**
 * Teleconverter data validation.
 *
 * Checks a teleconverter data object and returns human-readable error strings; an empty array means valid.
 *
 * A converter has no stop and cannot be built alone, so its surface, element and asphere rules are not duplicated
 * here: the converter is merged behind a powerless reference host (one air stop) and the result goes through
 * `validateLensData()` under the project default thresholds. That also covers a converter with no compatible host
 * in the catalog yet, and keeps a host's relaxed `gapSagFrac` / `maxRimAngleDeg` from hiding a converter error.
 */

import LENS_DEFAULTS from "../lens-data/defaults.js";
import type { LensData } from "../types/optics.js";
import type { TeleconverterData } from "../types/teleconverter.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";
import { mergeTeleconverterPrescription } from "./prescription/teleconverter.js";
import { rearPlateAirEquivalentMm, teleconverterGeometry } from "./prescription/teleconverterCompatibility.js";
import validateLensData, { LENS_KEY_PATTERN, validateLensMounts, validateRearPlates } from "./validateLensData.js";

/* Validation operates on untrusted data — a permissive record keeps dynamic-key checks free of casts. */
type UntrustedTeleconverterData = Record<string, any>;

/**
 * Allowed master-side defocus between the authored back focus and the paraxial image of the converter's virtual
 * object. A published master is rarely at exact paraxial focus, and the converter magnifies that residual
 * longitudinally by its magnification squared, so the image-side tolerance scales the same way: about 0.1 mm for a
 * 1.4× converter and 0.2 mm for a 2×. A physical distance used where an air-equivalent one is required is off by
 * several times that.
 */
const MASTER_FOCUS_TOLERANCE_MM = 0.05;

/** Allowed relative difference between the computed lateral magnification and the nominal `magnification`. */
const MAGNIFICATION_TOLERANCE = 0.05;

/** Junction gap given to the reference host; any positive value works because the host ends on its stop. */
const REFERENCE_JUNCTION_GAP_MM = 5;

/** Lens-only fields that have no meaning on a converter and would be silently ignored by the composer. */
const LENS_ONLY_FIELDS = [
  "var",
  "varLabels",
  "zoomPositions",
  "focusPositions",
  "publishedStations",
  "aberrationControl",
  "opticalPath",
  "perspectiveControl",
  "projection",
  "nominalFno",
  "acceptsTeleconverters",
];

/**
 * Powerless reference host: a single air stop placed so the converter sits a fixed gap behind it.
 *
 * @param tc - teleconverter data with well-formed surfaces
 * @returns host lens data suitable only for structural validation of the merged prescription
 */
function referenceHost(tc: TeleconverterData): LensData {
  return {
    ...LENS_DEFAULTS,
    key: "teleconverter-reference-host",
    name: "Teleconverter reference host",
    lensMounts: tc.lensMounts,
    closeFocusM: 1,
    yScFill: 0.5,
    nominalFno: 8,
    fstopSeries: [8],
    elements: [],
    surfaces: [
      {
        label: "STO",
        R: 1e15,
        d: tc.masterImageDistanceMm + REFERENCE_JUNCTION_GAP_MM,
        nd: 1,
        elemId: 0,
        sd: Math.max(...tc.surfaces.map((surface) => surface.sd)),
      },
    ],
  } as LensData;
}

/**
 * Validate a teleconverter data object.
 *
 * @param data - teleconverter data as authored in a `*.teleconverter.ts` file
 * @returns array of human-readable error messages (empty = valid)
 */
export default function validateTeleconverterData(data: UntrustedTeleconverterData): string[] {
  const errors: string[] = [];
  const finite = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);

  /* ── Identity and fit ── */
  for (const field of ["key", "name"]) {
    if (typeof data[field] !== "string" || !data[field])
      errors.push(`Missing or empty required string field: "${field}"`);
  }
  if (typeof data.key === "string" && data.key && !LENS_KEY_PATTERN.test(data.key)) {
    errors.push(
      `"key" must be lowercase a-z/0-9 words separated by single hyphens (it becomes the /teleconverters/ URL and tc query value), got "${data.key}"`,
    );
  }
  if (!finite(data.magnification) || data.magnification <= 1) {
    errors.push(`"magnification" must be a finite number > 1`);
  }
  validateLensMounts(data.lensMounts, errors);
  if (data.visible !== undefined && typeof data.visible !== "boolean") {
    errors.push(`"visible" must be a boolean (got ${typeof data.visible})`);
  }
  if (data.universal !== undefined && typeof data.universal !== "boolean") {
    errors.push(`"universal" must be a boolean (got ${typeof data.universal})`);
  }
  if (data.minHostFno !== undefined && (!finite(data.minHostFno) || data.minHostFno <= 0)) {
    errors.push(`"minHostFno" must be a finite positive f-number when provided`);
  }
  if (data.incompatibleLensKeys !== undefined) {
    if (
      !Array.isArray(data.incompatibleLensKeys) ||
      data.incompatibleLensKeys.some((key: unknown) => typeof key !== "string" || !LENS_KEY_PATTERN.test(key))
    ) {
      errors.push(`"incompatibleLensKeys" must be an array of lens keys when provided`);
    }
  }
  if (!finite(data.masterImageDistanceMm) || data.masterImageDistanceMm <= 0) {
    errors.push(`"masterImageDistanceMm" must be a finite positive distance in millimetres`);
  }
  for (const field of LENS_ONLY_FIELDS) {
    if (data[field] !== undefined) errors.push(`"${field}" is a lens field and is not valid on a teleconverter`);
  }
  if (data.rearPlates !== undefined) validateRearPlates(data, errors);

  /* ── Prescription shape ── */
  for (const field of ["elements", "surfaces"]) {
    if (!Array.isArray(data[field]) || data[field].length === 0) {
      errors.push(`Missing or empty required array field: "${field}"`);
    }
  }
  if (!Array.isArray(data.surfaces) || !Array.isArray(data.elements) || errors.length > 0) return errors;

  data.surfaces.forEach((surface: UntrustedTeleconverterData, i: number) => {
    const at = `surfaces[${i}] ("${surface?.label}")`;
    if (surface?.label === "STO") errors.push(`${at}: a teleconverter has no aperture stop; the host's stop is used`);
    if (surface?.interaction !== undefined && surface.interaction?.type !== "refract") {
      errors.push(`${at}: teleconverter surfaces must be refracting`);
    }
    if (surface?.stopPlacement !== undefined) errors.push(`${at}: stopPlacement is not valid on a teleconverter`);
    if (!finite(surface?.d) || !finite(surface?.sd)) errors.push(`${at}: d and sd must be finite numbers`);
  });
  data.elements.forEach((element: UntrustedTeleconverterData, i: number) => {
    if (!Number.isInteger(element?.id) || element.id <= 0) errors.push(`elements[${i}]: id must be a positive integer`);
    if (element?.fromSurface !== undefined || element?.toSurface !== undefined) {
      errors.push(`elements[${i}]: explicit fromSurface/toSurface spans are not supported on a teleconverter`);
    }
  });
  const first = data.surfaces[0];
  const last = data.surfaces[data.surfaces.length - 1];
  if (first?.elemId === 0) errors.push(`The first teleconverter surface must be the front of a glass element`);
  if (last?.nd !== 1 || last?.elemId !== 0) errors.push(`The last teleconverter surface must exit into air`);
  if (finite(last?.d) && last.d <= 0) errors.push(`The last teleconverter surface needs a positive back-focus gap`);
  if (errors.length > 0) return errors;

  /* ── Surface, element and asphere rules, reused from the lens validator ── */
  const tc = data as TeleconverterData;
  const host = referenceHost(tc);
  const merged = mergeTeleconverterPrescription(host, tc, teleconverterGeometry(host, tc));
  errors.push(...validateLensData(merged));
  if (errors.length > 0) return errors;

  /* ── First-order self-consistency ──
   * Launch a paraxial ray converging on the virtual object: unit height at the first vertex, slope u = −1/s.
   * Its exit slope u' and height y' give the image distance −y'/u' and the lateral magnification m = u/u' (both
   * spaces are air). A mismatch means `masterImageDistanceMm` or the last gap was transcribed wrongly — most often
   * a physical distance used where an air-equivalent one is required. */
  const launchSlope = -1 / tc.masterImageDistanceMm;
  const exit = traceSurfacesParaxial(tc.surfaces, 1, launchSlope, { skipLastTransfer: true });
  if (!Number.isFinite(exit.u) || exit.u >= 0) {
    errors.push(
      `The converter does not form a real image of an object "masterImageDistanceMm" behind its first vertex`,
    );
    return errors;
  }
  const imageDistance = -exit.y / exit.u;
  const authoredBackFocus = last.d + rearPlateAirEquivalentMm(tc.rearPlates ?? []);
  const backFocusTolerance = MASTER_FOCUS_TOLERANCE_MM * tc.magnification ** 2;
  if (Math.abs(imageDistance - authoredBackFocus) > backFocusTolerance) {
    errors.push(
      `Back focus mismatch: the paraxial image forms ${imageDistance.toFixed(3)} mm behind the last vertex, but the authored air-equivalent back focus is ${authoredBackFocus.toFixed(3)} mm`,
    );
  }
  const computedMagnification = launchSlope / exit.u;
  if (Math.abs(computedMagnification / tc.magnification - 1) > MAGNIFICATION_TOLERANCE) {
    errors.push(
      `Magnification mismatch: the prescription gives ${computedMagnification.toFixed(3)}× but "magnification" is ${tc.magnification}×`,
    );
  }

  return errors;
}
