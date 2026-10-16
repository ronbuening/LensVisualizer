/** Authored shape checks. Ingest must not erase refused declarations. */
import type { UntrustedLensData } from "./context.js";
import type { SurfaceData } from "../../../types/optics.js";
import { isImageFormatId, isLensMountId } from "../../../utils/catalog/lensTaxonomy.js";
import { lensDataStopRadiusAuthority } from "../canonical.js";
import { LENS_SCHEMA_DEFAULTS } from "../defaults.js";
import { REAR_PLATE_LABEL_PATTERN } from "../rearPlates.js";
import { TELECONVERTER_LABEL_PREFIX } from "../teleconverterCompatibility.js";
import { validateDiffractivePhase } from "./diffractive.js";
import { validateYzNormal, validateOpticalPath } from "./folded.js";
import { validateAttachedTeleconverter } from "./references.js";

export function validateNumberRange(
  config: Record<string, unknown>,
  field: "shiftRangeMm" | "tiltRangeDeg",
  errors: string[],
): void {
  const range = config[field];
  if (!Array.isArray(range) || range.length !== 2) {
    errors.push(`"perspectiveControl.${field}" must be a [min, max] array`);
    return;
  }
  const [min, max] = range;
  if (typeof min !== "number" || typeof max !== "number" || !isFinite(min) || !isFinite(max)) {
    errors.push(`"perspectiveControl.${field}" must contain finite numbers`);
    return;
  }
  if (min > 0 || max < 0 || min > max) {
    errors.push(`"perspectiveControl.${field}" must be an ordered range that includes 0`);
  }
}

export function isEnabledMovementRange(value: unknown): boolean {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    value.every((entry) => typeof entry === "number" && isFinite(entry)) &&
    value[1] > value[0]
  );
}

export function validatePerspectiveControlTiltPivot(value: unknown, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"perspectiveControl.tiltPivot" must be an object when tilt is enabled`);
    return;
  }

  const pivot = value as Record<string, unknown>;
  if (pivot.frame !== "camera") {
    errors.push(`"perspectiveControl.tiltPivot.frame" must be "camera"`);
  }
  if (
    pivot.basis !== "mechanical-axis" &&
    pivot.basis !== "patent-principal-point-guidance" &&
    pivot.basis !== "rear-vertex-fallback"
  ) {
    errors.push(
      `"perspectiveControl.tiltPivot.basis" must be "mechanical-axis", ` +
        `"patent-principal-point-guidance", or "rear-vertex-fallback"`,
    );
  }
  if (
    typeof pivot.zOffsetFromImagePlaneMm !== "number" ||
    !isFinite(pivot.zOffsetFromImagePlaneMm) ||
    pivot.zOffsetFromImagePlaneMm >= 0
  ) {
    errors.push(`"perspectiveControl.tiltPivot.zOffsetFromImagePlaneMm" must be a finite negative number`);
  }
}

export function validatePerspectiveControl(value: unknown, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"perspectiveControl" must be an object when provided`);
    return;
  }
  const config = value as Record<string, unknown>;
  validateNumberRange(config, "shiftRangeMm", errors);
  validateNumberRange(config, "tiltRangeDeg", errors);
  if (isEnabledMovementRange(config.tiltRangeDeg)) {
    validatePerspectiveControlTiltPivot(config.tiltPivot, errors);
  } else if (config.tiltPivot !== undefined) {
    validatePerspectiveControlTiltPivot(config.tiltPivot, errors);
    if (
      Array.isArray(config.tiltRangeDeg) &&
      config.tiltRangeDeg.length === 2 &&
      config.tiltRangeDeg[0] === 0 &&
      config.tiltRangeDeg[1] === 0
    ) {
      errors.push(`"perspectiveControl.tiltPivot" must be omitted when tilt is disabled`);
    }
  }
  if (
    Array.isArray(config.shiftRangeMm) &&
    config.shiftRangeMm.length === 2 &&
    Array.isArray(config.tiltRangeDeg) &&
    config.tiltRangeDeg.length === 2 &&
    config.shiftRangeMm[0] === config.shiftRangeMm[1] &&
    config.tiltRangeDeg[0] === config.tiltRangeDeg[1]
  ) {
    errors.push(`"perspectiveControl" must enable shift, tilt, or both`);
  }
  if (
    config.shiftStepMm !== undefined &&
    (typeof config.shiftStepMm !== "number" || !isFinite(config.shiftStepMm) || config.shiftStepMm <= 0)
  ) {
    errors.push(`"perspectiveControl.shiftStepMm" must be a finite positive number when provided`);
  }
  if (
    config.tiltStepDeg !== undefined &&
    (typeof config.tiltStepDeg !== "number" || !isFinite(config.tiltStepDeg) || config.tiltStepDeg <= 0)
  ) {
    errors.push(`"perspectiveControl.tiltStepDeg" must be a finite positive number when provided`);
  }
}

export function validateOpticalConfiguration(value: unknown, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"opticalConfiguration" must be an object when provided`);
    return;
  }

  const config = value as Record<string, unknown>;
  for (const field of ["groupKey", "label"] as const) {
    if (typeof config[field] !== "string" || config[field].trim().length === 0) {
      errors.push(`"opticalConfiguration.${field}" must be a non-empty string`);
    }
  }
  if (
    typeof config.order !== "number" ||
    !isFinite(config.order) ||
    config.order < 0 ||
    Math.round(config.order) !== config.order
  ) {
    errors.push(`"opticalConfiguration.order" must be a non-negative integer`);
  }
}

export function validateProjection(value: unknown, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"projection" must be an object when provided`);
    return;
  }

  const config = value as Record<string, unknown>;
  const validateProjectionNumber = (
    field: "focalLengthMm" | "fullFieldDeg" | "imageCircleMm" | "maxTraceFieldDeg",
    candidate: unknown,
    required: boolean,
    check: (n: number) => boolean,
    message: string,
  ): void => {
    if (candidate === undefined) {
      if (required) errors.push(`"projection.${field}" ${message}`);
      return;
    }
    const values = Array.isArray(candidate) ? candidate : [candidate];
    if (Array.isArray(candidate) && candidate.length === 0) {
      errors.push(`"projection.${field}" array must not be empty`);
      return;
    }
    for (let i = 0; i < values.length; i++) {
      const n = values[i];
      if (typeof n !== "number" || !isFinite(n) || !check(n)) {
        errors.push(`"projection.${field}${Array.isArray(candidate) ? `[${i}]` : ""}" ${message}`);
      }
    }
  };

  if (config.kind === "rectilinear") {
    if (Array.isArray(config.fullFieldDeg)) {
      errors.push(`"projection.fullFieldDeg" must be a finite number for rectilinear projections`);
    }
    if (Array.isArray(config.maxTraceFieldDeg)) {
      errors.push(`"projection.maxTraceFieldDeg" must be a finite number for rectilinear projections`);
    }
    validateProjectionNumber(
      "fullFieldDeg",
      config.fullFieldDeg,
      false,
      (n) => n > 0 && n < 180,
      `must be finite and between 0 and 180 degrees when provided for rectilinear projections`,
    );
    validateProjectionNumber(
      "maxTraceFieldDeg",
      config.maxTraceFieldDeg,
      false,
      (n) => n > 0 && n < 89,
      `must be finite and between 0 and 89 degrees when provided for rectilinear projections`,
    );
    if (
      typeof config.fullFieldDeg === "number" &&
      typeof config.maxTraceFieldDeg === "number" &&
      isFinite(config.fullFieldDeg) &&
      isFinite(config.maxTraceFieldDeg) &&
      config.maxTraceFieldDeg > config.fullFieldDeg / 2 + 1e-9
    ) {
      errors.push(`"projection.maxTraceFieldDeg" must not exceed half of "projection.fullFieldDeg"`);
    }
    return;
  }

  if (config.kind !== "fisheye-equidistant" && config.kind !== "fisheye-equisolid") {
    errors.push(`"projection.kind" must be "rectilinear", "fisheye-equidistant", or "fisheye-equisolid"`);
    return;
  }

  validateProjectionNumber(
    "focalLengthMm",
    config.focalLengthMm,
    true,
    (n) => n > 0,
    `must be a finite positive number for fisheye projections`,
  );
  validateProjectionNumber(
    "fullFieldDeg",
    config.fullFieldDeg,
    true,
    (n) => n > 0 && n <= 360,
    `must be finite and between 0 and 360 degrees for fisheye projections`,
  );
  validateProjectionNumber(
    "imageCircleMm",
    config.imageCircleMm,
    false,
    (n) => n > 0,
    `must be a finite positive number when provided`,
  );
  validateProjectionNumber(
    "maxTraceFieldDeg",
    config.maxTraceFieldDeg,
    false,
    (n) => n > 0 && n < 180,
    `must be finite and between 0 and 180 degrees when provided`,
  );
}

export function validateRearPlates(data: UntrustedLensData, errors: string[]): void {
  const plates = data.rearPlates;
  if (!Array.isArray(plates) || plates.length === 0) {
    errors.push(`"rearPlates" must be a non-empty array when provided`);
    return;
  }
  const finite = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);
  plates.forEach((plate: UntrustedLensData, i: number) => {
    const at = `rearPlates[${i}]`;
    if (!plate || typeof plate !== "object") {
      errors.push(`${at}: must be an object`);
      return;
    }
    if (!finite(plate.thicknessMm) || plate.thicknessMm <= 0) errors.push(`${at}: thicknessMm must be > 0`);
    if (!finite(plate.nd) || plate.nd <= 1) errors.push(`${at}: nd must be a finite index > 1`);
    if (!finite(plate.vd) || plate.vd <= 0) errors.push(`${at}: vd must be a finite Abbe number > 0`);
    if (!finite(plate.gapAfterMm) || plate.gapAfterMm < 0) errors.push(`${at}: gapAfterMm must be >= 0`);
    if (plate.sd !== undefined && (!finite(plate.sd) || plate.sd <= 0)) errors.push(`${at}: sd must be > 0`);
    if (plate.indexReference !== undefined && plate.indexReference !== "d" && plate.indexReference !== "e") {
      errors.push(`${at}: indexReference must be "d" or "e" when provided`);
    }
    for (const field of ["nC", "nF", "ng", "dPgF"]) {
      if (plate[field] !== undefined && !finite(plate[field])) errors.push(`${at}: ${field} must be finite`);
    }
    for (const field of ["label", "glass", "source"]) {
      if (plate[field] !== undefined && (typeof plate[field] !== "string" || !plate[field])) {
        errors.push(`${at}: ${field} must be a non-empty string when provided`);
      }
    }
  });
  const folded =
    data.opticalPath !== undefined ||
    (Array.isArray(data.surfaces) &&
      data.surfaces.some(
        (surface: UntrustedLensData) => surface?.interaction && surface.interaction.type !== "refract",
      ));
  if (folded) errors.push(`"rearPlates" is not supported for folded or generalized optical paths`);
  if (data.perspectiveControl !== undefined) {
    errors.push(`"rearPlates" cannot be combined with "perspectiveControl" (plates would move with the lens)`);
  }
}

export function validateLensMounts(value: unknown, errors: string[]): void {
  if (!Array.isArray(value)) {
    errors.push(`"lensMounts" must be a non-empty array of canonical mount ids when provided`);
    return;
  }
  if (value.length === 0) {
    errors.push(`"lensMounts" must not be empty when provided`);
    return;
  }

  const seen = new Set<string>();
  for (let i = 0; i < value.length; i++) {
    const mount = value[i];
    if (!isLensMountId(mount)) {
      errors.push(`"lensMounts[${i}]" must be a known canonical mount id`);
      continue;
    }
    if (seen.has(mount)) {
      errors.push(`"lensMounts" must not contain duplicate mount id "${mount}"`);
    }
    seen.add(mount);
  }
}

export function validateImageFormat(value: unknown, errors: string[]): void {
  if (!isImageFormatId(value)) {
    errors.push(`"imageFormat" must be a known canonical format id when provided`);
  }
}

export const LENS_KEY_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Read only the requested catalog default; an explicit undefined is still an authored invalid value. */
export function catalogField(data: UntrustedLensData, field: string, catalogDefaults: boolean): any {
  if (catalogDefaults && !Object.hasOwn(data, field)) {
    const row = LENS_SCHEMA_DEFAULTS.find((row) => row.v1Applied === "catalog" && row.v1Field === field);
    if (row) return row.value;
  }
  return data[field];
}
export function validateTopLevel(data: UntrustedLensData, errors: string[], catalogDefaults: boolean): void {
  /* ── Required top-level scalars ── */
  const requiredStrings = ["key", "name"];
  const requiredNumbers = [
    "closeFocusM",
    "focusStep",
    "maxFstop",
    "apertureStep",
    "svgW",
    "svgH",
    "scFill",
    "yScFill",
    "maxRimAngleDeg",
    "gapSagFrac",
    "rayLeadFrac",
    "offAxisFieldFrac",
    "maxAspectRatio",
  ];
  const requiredArrays = ["elements", "surfaces", "fstopSeries", "rayFractions", "offAxisFractions"];

  for (const f of requiredStrings) {
    if (typeof data[f] !== "string" || !data[f]) errors.push(`Missing or empty required string field: "${f}"`);
  }
  if (typeof data.key === "string" && data.key && !LENS_KEY_PATTERN.test(data.key)) {
    errors.push(
      `"key" must be lowercase a-z/0-9 words separated by single hyphens (it becomes the /lens/ URL and cfg query value), got "${data.key}"`,
    );
  }
  for (const f of requiredNumbers) {
    if (typeof catalogField(data, f, catalogDefaults) !== "number" || !isFinite(catalogField(data, f, catalogDefaults)))
      errors.push(`Missing or non-finite required number field: "${f}"`);
  }
  if (
    typeof catalogField(data, "gapSagFrac", catalogDefaults) === "number" &&
    isFinite(catalogField(data, "gapSagFrac", catalogDefaults))
  ) {
    if (
      catalogField(data, "gapSagFrac", catalogDefaults) <= 0 ||
      catalogField(data, "gapSagFrac", catalogDefaults) > 1
    ) {
      errors.push(`"gapSagFrac" must be > 0 and <= 1 so validation and rendering cannot allow overlap`);
    }
  }
  for (const f of requiredArrays) {
    if (!Array.isArray(catalogField(data, f, catalogDefaults)) || catalogField(data, f, catalogDefaults).length === 0)
      errors.push(`Missing or empty required array field: "${f}"`);
  }

  if (
    data.zoomApertureModel !== undefined &&
    ((data.zoomApertureModel !== "from-nominal-fno" && data.zoomApertureModel !== "fixed-iris") ||
      !Array.isArray(data.zoomPositions) ||
      data.zoomPositions.length < 2)
  ) {
    errors.push('"zoomApertureModel" must be "from-nominal-fno" or "fixed-iris" on a zoom lens');
  }
  if (data.zoomStopSemiDiameters !== undefined) {
    if (
      !Array.isArray(data.zoomStopSemiDiameters) ||
      !Array.isArray(data.zoomPositions) ||
      data.zoomPositions.length < 2 ||
      data.zoomStopSemiDiameters.length !== data.zoomPositions.length ||
      data.zoomStopSemiDiameters.some((radius) => !Number.isFinite(radius) || radius <= 0) ||
      data.zoomApertureModel !== undefined
    ) {
      errors.push(
        "zoomStopSemiDiameters requires one positive finite radius per zoom station and no inferred aperture model",
      );
    }
  }
  if (data.zoomCloseFocusM !== undefined) {
    if (
      !Array.isArray(data.zoomCloseFocusM) ||
      !Array.isArray(data.zoomPositions) ||
      data.zoomPositions.length < 2 ||
      data.zoomCloseFocusM.length !== data.zoomPositions.length
    ) {
      errors.push('"zoomCloseFocusM" must match the authored zoom stations');
    } else if (data.zoomCloseFocusM.some((value: number) => !Number.isFinite(value) || value <= 0)) {
      errors.push('"zoomCloseFocusM" values must be positive finite distances');
    }
  }

  /* ── nominalFno: required, number or number[] (for variable-aperture zooms) ── */
  if (typeof data.nominalFno === "number") {
    if (!isFinite(data.nominalFno)) errors.push(`"nominalFno" must be a finite number`);
  } else if (Array.isArray(data.nominalFno)) {
    if (data.nominalFno.length === 0) errors.push(`"nominalFno" array must not be empty`);
    for (let i = 0; i < data.nominalFno.length; i++) {
      if (typeof data.nominalFno[i] !== "number" || !isFinite(data.nominalFno[i]))
        errors.push(`"nominalFno[${i}]" must be a finite number`);
    }
    if (Array.isArray(data.zoomPositions) && data.nominalFno.length !== data.zoomPositions.length)
      errors.push(
        `"nominalFno" array length (${data.nominalFno.length}) must match "zoomPositions" length (${data.zoomPositions.length})`,
      );
    if (!Array.isArray(data.zoomPositions) || data.zoomPositions.length === 0)
      errors.push(
        `"nominalFno" is an array but lens has no "zoomPositions" — only zoom lenses support variable aperture`,
      );
  } else {
    errors.push(`Missing or invalid required field: "nominalFno" (must be number or number[])`);
  }

  /* ── Optional boolean fields ── */
  if (data.visible !== undefined && typeof data.visible !== "boolean")
    errors.push(`"visible" must be a boolean (got ${typeof data.visible})`);
  if (data.opticalConfiguration !== undefined) validateOpticalConfiguration(data.opticalConfiguration, errors);
  if (data.acceptsTeleconverters !== undefined && typeof data.acceptsTeleconverters !== "boolean")
    errors.push(`"acceptsTeleconverters" must be a boolean (got ${typeof data.acceptsTeleconverters})`);
  if (data.attachedTeleconverter !== undefined) validateAttachedTeleconverter(data, errors);
  if (data.perspectiveControl !== undefined) {
    validatePerspectiveControl(data.perspectiveControl, errors);
    if (data.imageFormat === undefined) {
      errors.push(`"imageFormat" is required when "perspectiveControl" is provided`);
    }
    if (data.opticalPath !== undefined) {
      errors.push(`"perspectiveControl" cannot be combined with generalized "opticalPath" metadata`);
    }
  }
  if (data.rearPlates !== undefined) validateRearPlates(data, errors);
  if (data.projection !== undefined) validateProjection(data.projection, errors);
  if (data.lensMounts !== undefined) validateLensMounts(data.lensMounts, errors);
  if (data.imageFormat !== undefined) validateImageFormat(data.imageFormat, errors);

  if (
    data.imageCircleMm !== undefined &&
    (typeof data.imageCircleMm !== "number" || !Number.isFinite(data.imageCircleMm) || data.imageCircleMm <= 0)
  ) {
    errors.push('"imageCircleMm" must be a finite positive diameter in millimetres');
  }
}
export function validateSurfaces(data: UntrustedLensData, errors: string[]): Set<string> {
  /* ── Surface labels: unique, exactly one STO ── */
  const surfaceLabels = new Set<string>();
  let stoCount = 0;
  /* A stop whose radius the engine derives from the f-number or takes from a station schedule never reads its own
   * `sd`, so the file may leave it out. */
  const stopSdIsRead =
    lensDataStopRadiusAuthority(data as Parameters<typeof lensDataStopRadiusAuthority>[0]) === "authored";
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (typeof s.label !== "string" || !s.label) {
      errors.push(`surfaces[${i}]: missing or empty label`);
      continue;
    }
    if (surfaceLabels.has(s.label)) errors.push(`Duplicate surface label: "${s.label}"`);
    if (REAR_PLATE_LABEL_PATTERN.test(s.label)) {
      errors.push(`surfaces[${i}] ("${s.label}"): labels RP<n>a/RP<n>b are reserved for generated rear plates`);
    }
    if (s.synthetic !== undefined) {
      errors.push(`surfaces[${i}] ("${s.label}"): "synthetic" is engine-generated; declare plates in "rearPlates"`);
    }
    if (s.clips !== undefined) {
      errors.push(`surfaces[${i}] ("${s.label}"): "clips" is engine-generated for rear plates without a published sd`);
    }
    if (data.attachedTeleconverter === undefined && s.label.startsWith(TELECONVERTER_LABEL_PREFIX)) {
      errors.push(
        `surfaces[${i}] ("${s.label}"): labels starting with "${TELECONVERTER_LABEL_PREFIX}" are reserved for attached teleconverter surfaces`,
      );
    }
    surfaceLabels.add(s.label);
    if (s.label === "STO") stoCount++;

    if (typeof s.R !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid R`);
    if (typeof s.d !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid d`);
    if (typeof s.nd !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid nd`);
    if (typeof s.sd !== "number") {
      if (s.sd !== undefined || s.label !== "STO" || stopSdIsRead) {
        errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid sd`);
      }
    } else if (!isFinite(s.sd) || s.sd <= 0)
      errors.push(`surfaces[${i}] ("${s.label}"): sd must be a positive finite number`);
    if (s.innerSd !== undefined) {
      if (typeof s.innerSd !== "number" || !isFinite(s.innerSd) || s.innerSd < 0) {
        errors.push(`surfaces[${i}] ("${s.label}"): innerSd must be a finite non-negative number when provided`);
      } else if (typeof s.sd === "number" && isFinite(s.sd) && s.innerSd >= s.sd) {
        errors.push(`surfaces[${i}] ("${s.label}"): innerSd must be smaller than sd`);
      }
    }
    if (s.interaction !== undefined) {
      if (!s.interaction || typeof s.interaction !== "object" || Array.isArray(s.interaction)) {
        errors.push(`surfaces[${i}] ("${s.label}"): interaction must be an object when provided`);
      } else {
        const interaction = s.interaction as Record<string, unknown>;
        if (interaction.type !== "refract" && interaction.type !== "reflect" && interaction.type !== "block") {
          errors.push(`surfaces[${i}] ("${s.label}"): interaction.type must be "refract", "reflect", or "block"`);
        }
        if (
          interaction.incidentSide !== undefined &&
          interaction.incidentSide !== "front" &&
          interaction.incidentSide !== "rear" &&
          interaction.incidentSide !== "both"
        ) {
          errors.push(`surfaces[${i}] ("${s.label}"): interaction.incidentSide must be "front", "rear", or "both"`);
        }
        if (
          interaction.inactiveSide !== undefined &&
          interaction.inactiveSide !== "ignore" &&
          interaction.inactiveSide !== "block"
        ) {
          errors.push(`surfaces[${i}] ("${s.label}"): interaction.inactiveSide must be "ignore" or "block"`);
        }
        if (
          interaction.mirrorKind !== undefined &&
          interaction.mirrorKind !== "first-surface" &&
          interaction.mirrorKind !== "second-surface"
        ) {
          errors.push(
            `surfaces[${i}] ("${s.label}"): interaction.mirrorKind must be "first-surface" or "second-surface"`,
          );
        }
        validateYzNormal(interaction.normal, `surfaces[${i}] ("${s.label}"): interaction.normal`, errors);
      }
    }
    if (s.diffractive !== undefined) {
      validateDiffractivePhase(s.diffractive, i, s.label, errors);
      if (s.interaction?.type === "reflect" || s.interaction?.type === "block") {
        errors.push(`surfaces[${i}] ("${s.label}"): diffractive is only valid on refracting surfaces`);
      }
    }
    if (s.stopPlacement !== undefined && s.stopPlacement !== "inside-element") {
      errors.push(`surfaces[${i}] ("${s.label}"): stopPlacement must be "inside-element" when provided`);
    }
    if (s.stopPlacement !== undefined && s.label !== "STO") {
      errors.push(`surfaces[${i}] ("${s.label}"): stopPlacement is only valid on the "STO" surface`);
    }
  }
  if (stoCount === 0) errors.push('No surface with label "STO" found');
  if (stoCount > 1) errors.push(`Multiple surfaces with label "STO" found (${stoCount})`);
  if (data.opticalPath !== undefined) validateOpticalPath(data.opticalPath, surfaceLabels, errors);

  return surfaceLabels;
}
export function validateElements(data: UntrustedLensData, errors: string[]): Set<number> {
  /* ── Element IDs: unique ── */
  const elemIds = new Set<number>();
  const usesGeneralizedOpticalPath = Boolean(
    data.opticalPath ||
    data.surfaces.some(
      (surface: SurfaceData) => surface.interaction !== undefined && surface.interaction.type !== "refract",
    ),
  );
  for (let i = 0; i < data.elements.length; i++) {
    const e = data.elements[i];
    if (e.id === undefined || e.id === null) {
      errors.push(`elements[${i}]: missing id`);
      continue;
    }
    if (elemIds.has(e.id)) errors.push(`Duplicate element id: ${e.id}`);
    if (e.synthetic !== undefined) {
      errors.push(`elements[${i}]: "synthetic" is engine-generated; declare plates in "rearPlates"`);
    }
    elemIds.add(e.id);
    if (
      e.maxSdRatio !== undefined &&
      (typeof e.maxSdRatio !== "number" || !isFinite(e.maxSdRatio) || e.maxSdRatio < 1)
    ) {
      errors.push(`elements[${i}]: maxSdRatio must be a finite number >= 1 when provided`);
    }
    if (e.indexReference !== undefined && e.indexReference !== "d" && e.indexReference !== "e") {
      errors.push(`elements[${i}]: indexReference must be "d" or "e" when provided`);
    }
    if (e.apd !== undefined && e.apd !== false && e.apd !== "patent" && e.apd !== "inferred") {
      errors.push(`elements[${i}]: apd must be "patent", "inferred", or false when provided`);
    }
    if (
      e.absorptionCoefficientPerMm !== undefined &&
      (typeof e.absorptionCoefficientPerMm !== "number" ||
        !isFinite(e.absorptionCoefficientPerMm) ||
        e.absorptionCoefficientPerMm < 0)
    ) {
      errors.push(`elements[${i}]: absorptionCoefficientPerMm must be a finite non-negative number when provided`);
    }
    if (e.absorptionCoefficientPerMm !== undefined && usesGeneralizedOpticalPath) {
      errors.push(
        `elements[${i}]: absorptionCoefficientPerMm is not supported for folded or generalized optical paths`,
      );
    }
  }

  return elemIds;
}
