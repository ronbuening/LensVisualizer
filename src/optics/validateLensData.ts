/**
 * Lens data schema validation.
 *
 * Checks a LENS_DATA object (after defaults merging) for structural
 * correctness.  Returns an array of human-readable error strings.
 * An empty array means the data is valid.
 *
 * Called at the top of buildLens() to surface ALL issues at once
 * rather than throwing on the first problem.
 */

import type { AsphericCoefficients, ImagePlaneData, PerspectiveControlConfig, SurfaceData } from "../types/optics.js";
import { isImageFormatId, isLensMountId } from "../utils/catalog/lensTaxonomy.js";
import { buildAsphereIndex, buildLabelIndex, firstInfinityThickness } from "./internal/lensState.js";
import { conicPolySag, FLAT_R_THRESHOLD, MAX_RIM_SLOPE_TAN, sagSlopeRaw } from "./internal/surfaceMath.js";

/* Validation operates on untrusted data — use a permissive record type
 * so dynamic-key checks compile without casts on every property access. */
type UntrustedLensData = Record<string, any>;

const REQUIRED_ASPHERIC_COEFFICIENTS = ["K", "A4", "A6", "A8", "A10", "A12", "A14"] as const;
const OPTIONAL_ASPHERIC_COEFFICIENTS = ["A16", "A18", "A20"] as const;

function validateNumberRange(
  config: PerspectiveControlConfig,
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
  if (min > 0 || max < 0 || min >= max) {
    errors.push(`"perspectiveControl.${field}" must be an ascending range that includes 0`);
  }
}

function validatePerspectiveControl(value: unknown, errors: string[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`"perspectiveControl" must be an object when provided`);
    return;
  }
  const config = value as PerspectiveControlConfig;
  validateNumberRange(config, "shiftRangeMm", errors);
  validateNumberRange(config, "tiltRangeDeg", errors);
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

function validateProjection(value: unknown, errors: string[]): void {
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

function validateImagePlane(value: unknown, errors: string[]): void {
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
  if (imagePlane.normal !== undefined) {
    const normal = imagePlane.normal;
    if (
      !normal ||
      typeof normal !== "object" ||
      Array.isArray(normal) ||
      typeof normal.z !== "number" ||
      typeof normal.y !== "number" ||
      !isFinite(normal.z) ||
      !isFinite(normal.y)
    ) {
      errors.push(`"opticalPath.imagePlane.normal" must contain finite z and y numbers`);
      return;
    }
    if (Math.hypot(normal.z, normal.y) <= 1e-12) {
      errors.push(`"opticalPath.imagePlane.normal" must not be the zero vector`);
    }
  }
}

function validateOpticalPath(value: unknown, surfaceLabels: Set<string>, errors: string[]): void {
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
}

function validateLensMounts(value: unknown, errors: string[]): void {
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

function validateImageFormat(value: unknown, errors: string[]): void {
  if (!isImageFormatId(value)) {
    errors.push(`"imageFormat" must be a known canonical format id when provided`);
  }
}

/**
 * Validate a LENS_DATA object for structural correctness.
 *
 * Checks are ordered from fast/cheap (missing fields) to slow/expensive
 * (geometry: edge thickness, sag overlap).  All errors are collected
 * before returning so the user sees every issue at once.
 *
 * @param data  — LENS_DATA object (after defaults merging)
 * @returns       array of human-readable error messages (empty = valid)
 */
export default function validateLensData(data: UntrustedLensData): string[] {
  const errors: string[] = [];

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
    "clipMargin",
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
  for (const f of requiredNumbers) {
    if (typeof data[f] !== "number" || !isFinite(data[f]))
      errors.push(`Missing or non-finite required number field: "${f}"`);
  }
  if (typeof data.gapSagFrac === "number" && isFinite(data.gapSagFrac)) {
    if (data.gapSagFrac <= 0 || data.gapSagFrac > 1) {
      errors.push(`"gapSagFrac" must be > 0 and <= 1 so validation and rendering cannot allow overlap`);
    }
  }
  for (const f of requiredArrays) {
    if (!Array.isArray(data[f]) || data[f].length === 0) errors.push(`Missing or empty required array field: "${f}"`);
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
  if (data.perspectiveControl !== undefined) validatePerspectiveControl(data.perspectiveControl, errors);
  if (data.projection !== undefined) validateProjection(data.projection, errors);
  if (data.lensMounts !== undefined) validateLensMounts(data.lensMounts, errors);
  if (data.imageFormat !== undefined) validateImageFormat(data.imageFormat, errors);

  /* ── Early exit if surfaces/elements are missing — rest of checks depend on them ── */
  if (!Array.isArray(data.surfaces) || !Array.isArray(data.elements)) return errors;

  /* ── Surface labels: unique, exactly one STO ── */
  const surfaceLabels = new Set<string>();
  let stoCount = 0;
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (typeof s.label !== "string" || !s.label) {
      errors.push(`surfaces[${i}]: missing or empty label`);
      continue;
    }
    if (surfaceLabels.has(s.label)) errors.push(`Duplicate surface label: "${s.label}"`);
    surfaceLabels.add(s.label);
    if (s.label === "STO") stoCount++;

    if (typeof s.R !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid R`);
    if (typeof s.d !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid d`);
    if (typeof s.nd !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid nd`);
    if (typeof s.sd !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid sd`);
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

  /* ── Element IDs: unique ── */
  const elemIds = new Set<number>();
  for (let i = 0; i < data.elements.length; i++) {
    const e = data.elements[i];
    if (e.id === undefined || e.id === null) {
      errors.push(`elements[${i}]: missing id`);
      continue;
    }
    if (elemIds.has(e.id)) errors.push(`Duplicate element id: ${e.id}`);
    elemIds.add(e.id);
  }

  /* ── Surface elemId values reference valid element IDs or 0 (air) ── */
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (s.elemId !== 0 && s.elemId !== undefined && !elemIds.has(s.elemId))
      errors.push(`surfaces[${i}] ("${s.label}"): elemId ${s.elemId} does not match any element`);
  }

  /* ── Each element has at least one surface referencing it ── */
  const referencedElems = new Set(data.surfaces.map((s: SurfaceData) => s.elemId).filter((id: number) => id !== 0));
  for (const e of data.elements) {
    if (!referencedElems.has(e.id)) errors.push(`Element ${e.id} ("${e.name}") has no surfaces referencing it`);
  }

  /* ── asph keys reference real surface labels ── */
  if (data.asph && typeof data.asph === "object") {
    for (const label of Object.keys(data.asph)) {
      if (!surfaceLabels.has(label)) errors.push(`asph key "${label}" does not match any surface label`);
      const coeffs = data.asph[label];
      if (!coeffs || typeof coeffs !== "object" || Array.isArray(coeffs)) {
        errors.push(`asph key "${label}" must be an object of numeric coefficients`);
        continue;
      }
      for (const field of REQUIRED_ASPHERIC_COEFFICIENTS) {
        const value = coeffs[field];
        if (typeof value !== "number" || !isFinite(value)) {
          errors.push(`asph key "${label}" is missing finite numeric coefficient ${field}`);
        }
      }
      for (const field of OPTIONAL_ASPHERIC_COEFFICIENTS) {
        const value = coeffs[field];
        if (value !== undefined && (typeof value !== "number" || !isFinite(value))) {
          errors.push(`asph key "${label}" has non-finite optional coefficient ${field}`);
        }
      }
    }
  }

  /* ── Zoom lens fields ── */
  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  if (data.zoomPositions !== undefined) {
    if (!Array.isArray(data.zoomPositions) || data.zoomPositions.length < 2)
      errors.push(`"zoomPositions" must be an array of at least 2 focal lengths`);
    else {
      if (!data.zoomPositions.every((n: number) => typeof n === "number" && isFinite(n)))
        errors.push(`"zoomPositions" must contain only finite numbers`);
      for (let i = 1; i < data.zoomPositions.length; i++) {
        if (data.zoomPositions[i] <= data.zoomPositions[i - 1]) {
          errors.push(`"zoomPositions" must be monotonically increasing`);
          break;
        }
      }
    }
  }

  /* ── Optional zoom fields ── */
  if (data.zoomStep !== undefined) {
    if (typeof data.zoomStep !== "number" || !isFinite(data.zoomStep) || data.zoomStep <= 0)
      errors.push(`"zoomStep" must be a finite positive number (got ${data.zoomStep})`);
  }
  if (data.zoomLabels !== undefined) {
    if (!Array.isArray(data.zoomLabels) || !data.zoomLabels.every((s: string) => typeof s === "string"))
      errors.push(`"zoomLabels" must be an array of strings`);
  }

  /* ── Build label→index map for var/geometry checks below ── */
  const labelToIdx = buildLabelIndex(
    data.surfaces.filter((surface: SurfaceData) => typeof surface.label === "string") as Pick<SurfaceData, "label">[],
  );
  const S = data.surfaces;
  const nz = isZoom ? data.zoomPositions.length : 0;

  const explicitSpans = new Map<number, { from: number; to: number; element: UntrustedLensData }>();
  for (const elem of data.elements) {
    const hasFrom = elem.fromSurface !== undefined;
    const hasTo = elem.toSurface !== undefined;
    if (hasFrom !== hasTo) {
      errors.push(`Element ${elem.id} ("${elem.name}"): fromSurface and toSurface must be provided together`);
      continue;
    }
    if (!hasFrom) continue;
    if (typeof elem.fromSurface !== "string" || typeof elem.toSurface !== "string") {
      errors.push(`Element ${elem.id} ("${elem.name}"): fromSurface and toSurface must be surface labels`);
      continue;
    }
    if (!surfaceLabels.has(elem.fromSurface)) {
      errors.push(`Element ${elem.id} ("${elem.name}"): fromSurface "${elem.fromSurface}" not found`);
      continue;
    }
    if (!surfaceLabels.has(elem.toSurface)) {
      errors.push(`Element ${elem.id} ("${elem.name}"): toSurface "${elem.toSurface}" not found`);
      continue;
    }

    const from = labelToIdx[elem.fromSurface];
    const to = labelToIdx[elem.toSurface];
    if (from >= to) {
      errors.push(
        `Element ${elem.id} ("${elem.name}"): fromSurface "${elem.fromSurface}" must come before toSurface "${elem.toSurface}"`,
      );
      continue;
    }
    explicitSpans.set(elem.id, { from, to, element: elem });

    if (S[from]?.elemId !== elem.id) {
      errors.push(
        `Element ${elem.id} ("${elem.name}"): fromSurface "${elem.fromSurface}" must reference elemId ${elem.id}`,
      );
    }

    for (let i = from + 1; i < to; i++) {
      const surface = S[i];
      if (surface.label !== "STO" || surface.stopPlacement !== "inside-element") {
        errors.push(
          `Element ${elem.id} ("${elem.name}"): internal surface "${surface.label}" requires stopPlacement: "inside-element"`,
        );
      }
    }

    if (typeof elem.nd === "number" && isFinite(elem.nd)) {
      for (let i = from; i < to; i++) {
        if (typeof S[i].nd !== "number") continue;
        if (Math.abs(S[i].nd - elem.nd) > 1e-6) {
          errors.push(
            `Element ${elem.id} ("${elem.name}"): medium after surface "${S[i].label}" must match element nd=${elem.nd} within explicit span`,
          );
        }
      }
    }
  }

  const stopIdx = typeof labelToIdx.STO === "number" ? labelToIdx.STO : -1;
  if (stopIdx >= 0) {
    const stop = S[stopIdx];
    if (stop.stopPlacement === "inside-element") {
      if (Math.abs(stop.R) <= FLAT_R_THRESHOLD) {
        errors.push(`Surface "STO": stopPlacement "inside-element" requires a flat stop surface`);
      }
      const containers = [...explicitSpans.values()].filter(({ from, to }) => from < stopIdx && stopIdx < to);
      if (containers.length !== 1) {
        errors.push(
          `Surface "STO": stopPlacement "inside-element" requires exactly one explicit containing element span`,
        );
      } else {
        const [{ from, element }] = containers;
        if (stop.elemId !== element.id) {
          errors.push(`Surface "STO": internal stop elemId must match containing element id ${element.id}`);
        }
        if (
          typeof element.nd === "number" &&
          typeof stop.nd === "number" &&
          isFinite(element.nd) &&
          isFinite(stop.nd) &&
          Math.abs(stop.nd - element.nd) > 1e-6
        ) {
          errors.push(`Surface "STO": internal stop nd must match containing element nd=${element.nd}`);
        }
        if (from <= stopIdx - 1 && Math.abs(S[stopIdx - 1].nd - stop.nd) > 1e-6) {
          errors.push(`Surface "STO": internal stop nd must match the glass medium before the stop`);
        }
      }
    } else if (typeof stop.nd === "number" && stop.nd !== 1.0) {
      errors.push(`Surface "STO": glass-side stop surfaces require stopPlacement: "inside-element"`);
    }
  }

  /* ── var keys reference real surface labels ── */
  if (data.var && typeof data.var === "object") {
    for (const [label, range] of Object.entries(data.var)) {
      if (!surfaceLabels.has(label)) errors.push(`var key "${label}" does not match any surface label`);
      if (isZoom) {
        if (!Array.isArray(range) || range.length !== nz)
          errors.push(`var["${label}"]: expected array of ${nz} [d_inf, d_close] pairs (one per zoom position)`);
        else {
          for (let zi = 0; zi < nz; zi++) {
            if (!Array.isArray(range[zi]) || range[zi].length !== 2)
              errors.push(`var["${label}"][${zi}]: expected [d_infinity, d_close] array of length 2`);
            else {
              /* Non-negative thickness — negative gaps are physically impossible */
              if (range[zi][0] < 0) errors.push(`var["${label}"][${zi}]: d_infinity=${range[zi][0]} is negative`);
              if (range[zi][1] < 0) errors.push(`var["${label}"][${zi}]: d_close=${range[zi][1]} is negative`);
            }
          }
        }
      } else {
        if (!Array.isArray(range) || range.length !== 2)
          errors.push(`var["${label}"]: expected [d_infinity, d_close] array of length 2`);
        else {
          if (range[0] < 0) errors.push(`var["${label}"]: d_infinity=${range[0]} is negative`);
          if (range[1] < 0) errors.push(`var["${label}"]: d_close=${range[1]} is negative`);
        }
      }
      /* Surface d should match the var infinity value at the first zoom position */
      if (surfaceLabels.has(label)) {
        const surfD = data.surfaces[labelToIdx[label]].d;
        const varInf = firstInfinityThickness(range, isZoom);
        if (typeof surfD === "number" && typeof varInf === "number" && Math.abs(surfD - varInf) > 1e-6)
          errors.push(`var["${label}"]: surface d=${surfD} does not match var infinity value ${varInf}`);
      }
    }
  }

  /* ── varLabels reference real surface labels ── */
  if (Array.isArray(data.varLabels)) {
    for (const entry of data.varLabels) {
      if (!Array.isArray(entry) || entry.length < 2)
        errors.push(`varLabels entry is not a [label, text] pair: ${JSON.stringify(entry)}`);
      else if (!surfaceLabels.has(entry[0]))
        errors.push(`varLabels label "${entry[0]}" does not match any surface label`);
    }
  }

  if (data.aberrationControl !== undefined) {
    const control = data.aberrationControl as Record<string, unknown>;
    if (typeof control !== "object" || control === null) {
      errors.push("aberrationControl must be an object");
    } else {
      if (typeof control.label !== "string" || control.label.trim() === "")
        errors.push("aberrationControl.label must be a non-empty string");
      if (control.step !== undefined && (typeof control.step !== "number" || control.step <= 0))
        errors.push("aberrationControl.step must be a positive number");
      const ranges = control.var;
      if (typeof ranges !== "object" || ranges === null || Array.isArray(ranges)) {
        errors.push("aberrationControl.var must be an object keyed by surface label");
      } else {
        for (const [label, range] of Object.entries(ranges as Record<string, unknown>)) {
          if (!surfaceLabels.has(label)) {
            errors.push(`aberrationControl.var["${label}"]: surface label not found`);
            continue;
          }
          if (isZoom) {
            if (!Array.isArray(range) || range.length !== nz)
              errors.push(
                `aberrationControl.var["${label}"]: expected array of ${nz} [normal, maximum] pairs (one per zoom position)`,
              );
            else {
              for (let zi = 0; zi < nz; zi++) {
                if (!Array.isArray(range[zi]) || range[zi].length !== 2) {
                  errors.push(`aberrationControl.var["${label}"][${zi}]: expected [normal, maximum] array of length 2`);
                } else {
                  if (range[zi][0] < 0)
                    errors.push(`aberrationControl.var["${label}"][${zi}]: normal=${range[zi][0]} is negative`);
                  if (range[zi][1] < 0)
                    errors.push(`aberrationControl.var["${label}"][${zi}]: maximum=${range[zi][1]} is negative`);
                }
              }
            }
          } else if (!Array.isArray(range) || range.length !== 2) {
            errors.push(`aberrationControl.var["${label}"]: expected [normal, maximum] array of length 2`);
          } else {
            if (range[0] < 0) errors.push(`aberrationControl.var["${label}"]: normal=${range[0]} is negative`);
            if (range[1] < 0) errors.push(`aberrationControl.var["${label}"]: maximum=${range[1]} is negative`);
          }
          const surfD = data.surfaces[labelToIdx[label]].d;
          const normal = firstInfinityThickness(range, isZoom);
          if (typeof surfD === "number" && typeof normal === "number" && Math.abs(surfD - normal) > 1e-6)
            errors.push(`aberrationControl.var["${label}"]: surface d=${surfD} does not match normal value ${normal}`);
        }
      }
      if (Array.isArray(control.varLabels)) {
        for (const entry of control.varLabels) {
          if (!Array.isArray(entry) || entry.length < 2)
            errors.push(`aberrationControl.varLabels entry is not a [label, text] pair: ${JSON.stringify(entry)}`);
          else if (!surfaceLabels.has(entry[0]))
            errors.push(`aberrationControl.varLabels label "${entry[0]}" does not match any surface label`);
        }
      }
    }
  }

  /* ── groups and doublets reference real surface labels ── */
  for (const kind of ["groups", "doublets"] as const) {
    if (!Array.isArray(data[kind])) continue;
    for (let i = 0; i < data[kind].length; i++) {
      const g = data[kind][i];
      if (!surfaceLabels.has(g.fromSurface))
        errors.push(`${kind}[${i}] ("${g.text}"): fromSurface "${g.fromSurface}" not found`);
      if (!surfaceLabels.has(g.toSurface))
        errors.push(`${kind}[${i}] ("${g.text}"): toSurface "${g.toSurface}" not found`);
    }
  }

  /* ── Element geometry: edge thickness and SD consistency ──
   *  For each element, find its front/rear surface pair (same logic as buildLens ES)
   *  and check that (a) the element has positive edge thickness at the rendering SD,
   *  and (b) the front/rear SDs are consistent.
   */
  const asphByIdx = buildAsphereIndex(data.asph as Record<string, AsphericCoefficients> | undefined, labelToIdx);

  for (const elem of data.elements) {
    const explicitSpan = explicitSpans.get(elem.id);
    let s1 = explicitSpan?.from ?? -1;
    let s2 = explicitSpan?.to ?? -1;
    if (!explicitSpan) {
      for (let i = 0; i < S.length; i++) {
        if (S[i].elemId === elem.id) {
          s1 = i;
          break;
        }
      }
      s2 = s1 + 1;
    }
    if (s1 < 0 || s2 <= s1 || s2 >= S.length) continue;
    const front = S[s1],
      rear = S[s2];
    if (typeof front.sd !== "number" || typeof rear.sd !== "number") continue;
    if (typeof front.R !== "number" || typeof rear.R !== "number") continue;

    const sd = Math.min(front.sd, rear.sd);

    /* Edge thickness check (uses aspherical sag when available) */
    const sagFront = conicPolySag(sd, front.R, asphByIdx[s1]);
    const sagRear = conicPolySag(sd, rear.R, asphByIdx[s2]);
    let centerThickness = 0;
    for (let i = s1; i < s2; i++) centerThickness += typeof S[i].d === "number" ? S[i].d : 0;
    const edgeThickness = centerThickness + sagRear - sagFront;
    if (edgeThickness <= 0)
      errors.push(
        `Element ${elem.id} ("${elem.name}"): negative edge thickness (${edgeThickness.toFixed(3)} mm) at sd=${sd} — surfaces "${front.label}" / "${rear.label}" cross at the rim`,
      );

    /* SD consistency check — slope-aware.
     * The per-surface rim slope check (below) independently validates each
     * surface.  We keep a lenient ratio sanity check to catch obvious data
     * entry errors, but allow ratios up to 3.0 so that deep meniscus
     * elements in retrofocus designs (e.g. Canon RF 15-35 L1, ratio 1.45)
     * can use patent-accurate SDs. */
    const sdMax = Math.max(front.sd, rear.sd);
    const sdMin = Math.min(front.sd, rear.sd);
    if (sdMin > 0 && sdMax / sdMin > 3.0)
      errors.push(
        `Element ${elem.id} ("${elem.name}"): front/rear SD ratio ${(sdMax / sdMin).toFixed(2)} exceeds 3.0 — surfaces "${front.label}" (sd=${front.sd}) / "${rear.label}" (sd=${rear.sd}) may indicate a data entry error`,
      );
  }

  /* ── Surface rim slope check ──
   *  When the actual sag slope at the rim becomes extreme, rays near the edge
   *  risk total internal reflection (TIR) at glass/air boundaries and cause
   *  numerical instability in the ray tracer.
   *
   *  Previous versions used a spherical proxy (sd/|R| ≤ 0.9).  We now
   *  compute the true aspherical slope via sagSlopeRaw(), which accounts for
   *  conic constant K and polynomial terms.  For spherical surfaces this
   *  gives identical results; for aspherics (especially K ≈ −1, near-
   *  paraboloids common on wide-angle meniscus elements) the actual slope is
   *  much gentler, allowing larger SDs without TIR risk.
   *
   *  MAX_RIM_SLOPE_TAN corresponds to a 64.2° slope angle, matching the
   *  old sd/|R| = 0.9 threshold for spheres exactly.
   */
  const maxRimAngleDeg = typeof data.maxRimAngleDeg === "number" ? data.maxRimAngleDeg : undefined;
  const maxRimSlopeTan =
    maxRimAngleDeg !== undefined && isFinite(maxRimAngleDeg)
      ? Math.tan((maxRimAngleDeg * Math.PI) / 180)
      : MAX_RIM_SLOPE_TAN;

  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (typeof s.sd !== "number" || typeof s.R !== "number") continue;
    const absR = Math.abs(s.R);
    if (absR > 1e10 || absR < 1e-10) continue;

    /* Conic h_max check: when K > 0, surface slope → ∞ at h = |R|/√(1+K) */
    const asph = asphByIdx[i];
    if (asph && asph.K > 0 && absR < 1e10) {
      const hMax = absR / Math.sqrt(1 + asph.K);
      if (s.sd > hMax * 0.98)
        errors.push(
          `Surface "${s.label}": sd=${s.sd} exceeds conic h_max=${hMax.toFixed(2)} mm (K=${asph.K}) — sag curve will have a discontinuity at the rim`,
        );
    }

    const slope = Math.abs(sagSlopeRaw(s.sd, s.R, asph));
    if (slope > maxRimSlopeTan) {
      const angleDeg = (Math.atan(slope) * 180) / Math.PI;
      const maxAngleDeg = (Math.atan(maxRimSlopeTan) * 180) / Math.PI;
      errors.push(
        `Surface "${s.label}": rim slope ${slope.toFixed(2)} (${angleDeg.toFixed(1)}°) at sd=${s.sd} exceeds threshold ${maxRimSlopeTan.toFixed(2)} (${maxAngleDeg.toFixed(1)}°) — risk of TIR and rendering artifacts`,
      );
    }
  }

  /* ── Cross-gap surface overlap check ──
   *  For each air gap between elements, verify that the combined sag intrusion
   *  from the two boundary surfaces that face each other does not exceed the
   *  configured fraction of the gap thickness.
   */
  _checkCrossGapOverlap(S, asphByIdx, null, errors, "", data.gapSagFrac);

  /* For zoom lenses, also check at each zoom position's variable thickness.
   * Air gaps can change dramatically across zoom positions. */
  if (isZoom && data.var) {
    const nz = data.zoomPositions.length;
    /* Build a var lookup keyed by surface index for efficient gap-d overrides */
    const varByIdx: Record<number, unknown> = {};
    for (const [label, range] of Object.entries(data.var)) {
      if (labelToIdx[label] !== undefined) varByIdx[labelToIdx[label]] = range;
    }
    for (let zi = 0; zi < nz; zi++) {
      const gapOverrides: Record<number, number> = {};
      for (const [idx, range] of Object.entries(varByIdx)) {
        const r = range as number[][];
        if (Array.isArray(r[zi])) gapOverrides[Number(idx)] = r[zi][0]; // infinity-focus thickness
      }
      _checkCrossGapOverlap(
        S,
        asphByIdx,
        gapOverrides,
        errors,
        ` at zoom position ${zi} (${data.zoomPositions[zi]} mm)`,
        data.gapSagFrac,
      );
    }
  }

  return errors;
}

/**
 * Check cross-gap surface overlap for a set of air gaps.
 *
 * Verifies that the combined sag intrusion from adjacent boundary surfaces
 * does not exceed the configured air-gap fraction. Called once with fixed d
 * values, then again per zoom position with overridden gap thicknesses.
 *
 * @param S             — surface array
 * @param asphByIdx     — aspheric coefficients by surface index
 * @param gapOverrides  — { surfIdx: overrideD } for variable gaps, or null
 * @param errors        — error accumulator (mutated)
 * @param context       — suffix for error messages (e.g. " at zoom position 0")
 * @param gapSagFrac    — maximum allowed intrusion fraction of the air gap
 */
function _checkCrossGapOverlap(
  S: UntrustedLensData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  gapOverrides: Record<number, number> | null,
  errors: string[],
  context: string,
  gapSagFrac: number,
): void {
  for (let i = 0; i < S.length - 1; i++) {
    const curr = S[i],
      next = S[i + 1];
    if (typeof curr.nd !== "number" || curr.nd !== 1.0) continue;
    if (curr.elemId !== 0) continue;
    const gapD = gapOverrides ? (gapOverrides[i] ?? curr.d) : curr.d;
    if (typeof gapD !== "number" || gapD <= 0) continue;
    if (typeof next.elemId !== "number" || next.elemId === 0) continue;
    if (i === 0 || S[i - 1].elemId === 0) continue;
    const sdCheck = Math.min(curr.sd || Infinity, next.sd || Infinity);
    if (!isFinite(sdCheck) || sdCheck <= 0) continue;
    const sagFwd = conicPolySag(sdCheck, curr.R, asphByIdx[i]);
    const sagBack = conicPolySag(sdCheck, next.R, asphByIdx[i + 1]);
    const intrusion = sagFwd - sagBack;
    const maxIntrusion = gapD * Math.min(gapSagFrac, 1);
    if (intrusion > maxIntrusion)
      errors.push(
        `Air gap "${curr.label}"→"${next.label}": combined surface sag (${intrusion.toFixed(2)} mm) exceeds allowed gap intrusion (${maxIntrusion.toFixed(3)} mm of ${gapD.toFixed(3)} mm) at sd=${sdCheck.toFixed(1)}${context} — elements will overlap in rendering`,
      );
  }
}
