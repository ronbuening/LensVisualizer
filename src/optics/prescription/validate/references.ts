/** Authored identity references, source errata, aspheres and explicit element spans. */
import type { UntrustedLensData, ExplicitElementSpan } from "./context.js";
import type { SurfaceData } from "../../../types/optics.js";
import { TELECONVERTER_LABEL_PREFIX } from "../teleconverterCompatibility.js";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../../types/asphericSchema.js";
import { surfaceFitsInsideCentralOpening } from "../../geometry/apertureBands.js";
import { annularNestedOpeningForSpan, isEmbeddedStop, isAllowedFoldedSpanInternalSurface } from "./aperture.js";

const REQUIRED_ASPHERIC_COEFFICIENTS = ASPHERIC_COEFFICIENT_SCHEMA.filter((descriptor) => descriptor.required).map(
  (descriptor) => descriptor.key,
);
const OPTIONAL_ASPHERIC_COEFFICIENTS = ASPHERIC_COEFFICIENT_SCHEMA.filter((descriptor) => !descriptor.required).map(
  (descriptor) => descriptor.key,
);
const KNOWN_ASPHERIC_COEFFICIENTS = new Set<string>(ASPHERIC_COEFFICIENT_SCHEMA.map((descriptor) => descriptor.key));

const SOURCE_ERRATUM_EVIDENCE = new Set([
  "source-summary",
  "sibling-example",
  "aberration-figure",
  "claims",
  "family-publication",
]);
const SOURCE_ERRATUM_SURFACE_FIELDS = new Set(["R", "d", "nd"]);
/** A correction needs this many independent kinds of source-internal evidence. */
const SOURCE_ERRATUM_MIN_EVIDENCE = 2;

/**
 * Check `sourceErrata`: a corrected entry must name a real value, carry the applied value in this file, and cite
 * enough source-internal evidence; an unresolved entry only needs its note.
 *
 * @param value - authored `sourceErrata`
 * @param data - lens data the entries refer to
 * @param surfaceLabels - labels of the authored surfaces
 * @param errors - collected validation messages
 */
export function validateSourceErrata(
  value: unknown,
  data: UntrustedLensData,
  surfaceLabels: Set<string>,
  errors: string[],
): void {
  if (!Array.isArray(value)) {
    errors.push(`"sourceErrata" must be an array when provided`);
    return;
  }
  value.forEach((entry: UntrustedLensData, index: number) => {
    const at = `"sourceErrata[${index}]"`;
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      errors.push(`${at} must be an object`);
      return;
    }
    if (typeof entry.note !== "string" || !entry.note.trim()) errors.push(`${at} needs a non-empty note`);
    if (entry.status === "unresolved") return;
    if (entry.status !== "corrected") {
      errors.push(`${at}.status must be "corrected" or "unresolved"`);
      return;
    }
    const isCoefficient = KNOWN_ASPHERIC_COEFFICIENTS.has(entry.field);
    if (!isCoefficient && !SOURCE_ERRATUM_SURFACE_FIELDS.has(entry.field))
      errors.push(`${at}.field must be an asph coefficient key or one of R, d, nd`);
    for (const key of ["printed", "applied"])
      if (typeof entry[key] !== "number" || !isFinite(entry[key])) errors.push(`${at}.${key} must be a finite number`);
    if (entry.printed === entry.applied) errors.push(`${at} must apply a value that differs from the printed one`);
    const kinds = new Set(Array.isArray(entry.evidence) ? entry.evidence : []);
    if ([...kinds].some((kind) => !SOURCE_ERRATUM_EVIDENCE.has(kind as string)))
      errors.push(`${at}.evidence may only cite source-internal kinds`);
    if (kinds.size < SOURCE_ERRATUM_MIN_EVIDENCE)
      errors.push(`${at} needs at least ${SOURCE_ERRATUM_MIN_EVIDENCE} kinds of source-internal evidence`);
    if (typeof entry.surface !== "string" || !surfaceLabels.has(entry.surface)) {
      errors.push(`${at}.surface must match a surface label`);
      return;
    }
    /* An asphere term left out is zero, as ingest reads it, so an erratum may apply 0 to a term the file omits. */
    const carried = isCoefficient
      ? (data.asph?.[entry.surface]?.[entry.field] ?? 0)
      : data.surfaces.find((surface: UntrustedLensData) => surface?.label === entry.surface)?.[entry.field];
    // A mounted converter replaces the host's last gap with the junction gap; the bare host still checks that value.
    const converterFirst = data.attachedTeleconverter?.firstSurfaceLabel;
    const junction =
      converterFirst === undefined
        ? undefined
        : data.surfaces[data.surfaces.findIndex((surface: UntrustedLensData) => surface?.label === converterFirst) - 1];
    if (entry.field === "d" && junction?.label === entry.surface) return;
    if (carried !== entry.applied)
      errors.push(`${at}: surface "${entry.surface}" ${entry.field} must carry the applied value ${entry.applied}`);
  });
}

export function validateAttachedTeleconverter(data: UntrustedLensData, errors: string[]): void {
  const info = data.attachedTeleconverter;
  if (!info || typeof info !== "object" || Array.isArray(info)) {
    errors.push(`"attachedTeleconverter" must be an object when provided`);
    return;
  }
  for (const field of ["key", "name", "hostKey", "hostName", "firstSurfaceLabel", "lastSurfaceLabel"]) {
    if (typeof info[field] !== "string" || !info[field]) {
      errors.push(`"attachedTeleconverter.${field}" must be a non-empty string`);
    }
  }
  if (typeof info.magnification !== "number" || !Number.isFinite(info.magnification) || info.magnification <= 1) {
    errors.push(`"attachedTeleconverter.magnification" must be a finite number > 1`);
  }
  if (!Number.isInteger(info.firstElementId) || info.firstElementId <= 0) {
    errors.push(`"attachedTeleconverter.firstElementId" must be a positive integer`);
  }
  if (info.platesAhead !== undefined) {
    const plateCount = Array.isArray(data.rearPlates) ? data.rearPlates.length : 0;
    if (!Number.isInteger(info.platesAhead) || info.platesAhead < 1 || info.platesAhead > plateCount) {
      errors.push(`"attachedTeleconverter.platesAhead" must count leading "rearPlates" (1..${plateCount})`);
    }
  }
  if (data.acceptsTeleconverters !== undefined) {
    errors.push(`A composed teleconverter system cannot declare "acceptsTeleconverters" (converters do not stack)`);
  }
  if (!Array.isArray(data.surfaces)) return;

  const labels: unknown[] = data.surfaces.map((surface: UntrustedLensData) => surface?.label);
  const first = labels.indexOf(info.firstSurfaceLabel);
  const last = labels.indexOf(info.lastSurfaceLabel);
  if (first < 1 || last !== labels.length - 1) {
    errors.push(`"attachedTeleconverter" must name the trailing block of surfaces, behind at least one host surface`);
    return;
  }
  const misplaced = labels.findIndex(
    (label, i) => (typeof label === "string" && label.startsWith(TELECONVERTER_LABEL_PREFIX)) !== i >= first,
  );
  if (misplaced >= 0) {
    errors.push(
      `surfaces[${misplaced}] ("${String(labels[misplaced])}"): the "${TELECONVERTER_LABEL_PREFIX}" label prefix must mark exactly the attached teleconverter's surfaces`,
    );
  }
}

/** True for a strictly increasing list of integers within `[min, max]`; an empty list passes. */
export function validateReferences(
  data: UntrustedLensData,
  surfaceLabels: Set<string>,
  elemIds: Set<number>,
  errors: string[],
): void {
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
      for (const field of Object.keys(coeffs)) {
        if (!KNOWN_ASPHERIC_COEFFICIENTS.has(field)) {
          errors.push(`asph key "${label}" has unknown coefficient ${field}`);
        }
      }
    }
  }

  /* ── Source errata name real values and carry the corrected ones ── */
  if (data.sourceErrata !== undefined) validateSourceErrata(data.sourceErrata, data, surfaceLabels, errors);
}
export function validateSpans(
  data: UntrustedLensData,
  surfaceLabels: Set<string>,
  labelToIdx: Record<string, number>,
  errors: string[],
): Map<number, ExplicitElementSpan> {
  const S = data.surfaces;
  const foldedMirrorLens =
    data.opticalPath !== undefined && S.some((surface: SurfaceData) => surface.interaction?.type === "reflect");

  const explicitSpans = new Map<number, ExplicitElementSpan>();
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
    const nestedOpeningSd = annularNestedOpeningForSpan(data, S, from, to);
    const explicitSpan: ExplicitElementSpan = {
      from,
      to,
      element: elem,
      nestedOpeningSd,
      foldedMirrorLens,
      frontSurface: S[from],
      rearSurface: S[to],
    };
    explicitSpans.set(elem.id, explicitSpan);

    if (S[from]?.elemId !== elem.id) {
      errors.push(
        `Element ${elem.id} ("${elem.name}"): fromSurface "${elem.fromSurface}" must reference elemId ${elem.id}`,
      );
    }

    for (let i = from + 1; i < to; i++) {
      const surface = S[i];
      if (isEmbeddedStop(surface)) continue;
      if (isAllowedFoldedSpanInternalSurface(explicitSpan, surface)) continue;
      if (nestedOpeningSd !== null && !surfaceFitsInsideCentralOpening(surface, nestedOpeningSd)) {
        errors.push(
          `Element ${elem.id} ("${elem.name}"): internal surface "${surface.label}" must fit inside annular central opening sd=${nestedOpeningSd}`,
        );
      } else {
        errors.push(
          `Element ${elem.id} ("${elem.name}"): internal surface "${surface.label}" requires stopPlacement: "inside-element"`,
        );
      }
    }

    if (typeof elem.nd === "number" && isFinite(elem.nd)) {
      for (let i = from; i < to; i++) {
        if (typeof S[i].nd !== "number") continue;
        if (i > from && isAllowedFoldedSpanInternalSurface(explicitSpan, S[i])) continue;
        if (Math.abs(S[i].nd - elem.nd) > 1e-6) {
          errors.push(
            `Element ${elem.id} ("${elem.name}"): medium after surface "${S[i].label}" must match element nd=${elem.nd} within explicit span`,
          );
        }
      }
    }
  }

  return explicitSpans;
}
export function validateAnnotations(data: UntrustedLensData, surfaceLabels: Set<string>, errors: string[]): void {
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
}
