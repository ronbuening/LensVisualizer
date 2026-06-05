/**
 * Mount-spec cross-field validation.
 *
 * `satisfies MountSpecInput` already guarantees shape and token spelling at compile time. This
 * validator enforces the relational rules a structural type cannot express, mirroring the
 * collected-errors style of `validateLensData.ts`: profile-id discipline, the base/variant model,
 * source-reference resolution and the "every live URL has an archived snapshot + ISO date" rule
 * (package Section 3), and numeric ranges. It returns an array of human-readable errors; empty means
 * valid. Callers may pass an authoring `MountSpecInput`; it is normalized internally.
 */

import type {
  AngleListValue,
  DirectionValue,
  MountSpec,
  MountSpecInput,
  ValueEnvelope,
  ValueStatus,
} from "../../types/mount.js";
import { isLensMountId } from "../../utils/catalog/lensTaxonomy.js";
import { normalizeMountSpec } from "./defaults.js";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const PROVENANCE_STATUSES = new Set<ValueStatus>([
  "official",
  "patent",
  "service_manual",
  "measured",
  "photo_scaled",
  "secondary",
  "conflicting",
]);

type NumericKind = "angle" | "length" | "coordinate" | "count";

function checkEnv(
  env: ValueEnvelope<number>,
  path: string,
  kind: NumericKind,
  knownRefs: Set<string>,
  errors: string[],
): void {
  for (const ref of env.sourceRefs) {
    if (!knownRefs.has(ref)) errors.push(`${path}: sourceRef "${ref}" does not resolve to any sourceRefs entry`);
  }
  if (typeof env.value === "number") {
    if (!isFinite(env.value)) errors.push(`${path}: value must be finite`);
    if (kind === "angle" && (env.value < 0 || env.value > 360)) errors.push(`${path}: angle must be within [0, 360]`);
    if ((kind === "length" || kind === "count") && env.value < 0) errors.push(`${path}: value must be >= 0`);
    if (kind === "count" && !Number.isInteger(env.value)) errors.push(`${path}: count must be an integer`);
    if (PROVENANCE_STATUSES.has(env.status) && env.sourceRefs.length === 0)
      errors.push(`${path}: a "${env.status}" value must cite at least one sourceRef`);
  }
}

function checkDirection(env: DirectionValue, path: string, knownRefs: Set<string>, errors: string[]): void {
  for (const ref of env.sourceRefs) {
    if (!knownRefs.has(ref)) errors.push(`${path}: sourceRef "${ref}" does not resolve to any sourceRefs entry`);
  }
}

function checkAngleList(env: AngleListValue, path: string, knownRefs: Set<string>, errors: string[]): void {
  for (const ref of env.sourceRefs) {
    if (!knownRefs.has(ref)) errors.push(`${path}: sourceRef "${ref}" does not resolve to any sourceRefs entry`);
  }
  if (Array.isArray(env.value)) {
    env.value.forEach((a, i) => {
      if (typeof a !== "number" || !isFinite(a) || a < 0 || a > 360)
        errors.push(`${path}[${i}]: angle must be within [0, 360]`);
    });
  }
}

/**
 * Validate a mount spec for relational correctness.
 *
 * @param input — authoring or normalized mount spec
 * @returns array of human-readable errors (empty = valid)
 */
export default function validateMountSpec(input: MountSpecInput): string[] {
  const errors: string[] = [];
  const spec: MountSpec = normalizeMountSpec(input);

  /* ── identity ── */
  if (spec.schemaVersion !== "1.3") errors.push(`schemaVersion must be "1.3"`);
  if (!isLensMountId(spec.mountId)) errors.push(`mountId "${spec.mountId}" is not a canonical LensVisualizer mount id`);

  /* ── profile model ── */
  const prefix = `${spec.mountId}/`;
  const { baseProfileId, selectedMvpProfileId, variantProfiles, variantStrategy } = spec.mvp.profileModel;
  if (!baseProfileId.startsWith(prefix)) errors.push(`baseProfileId "${baseProfileId}" must start with "${prefix}"`);

  const baseRows = variantProfiles.filter((p) => p.profileType === "base");
  if (baseRows.length !== 1)
    errors.push(`profileModel must declare exactly one base profile (found ${baseRows.length})`);
  if (baseRows.length === 1 && baseRows[0].profileId !== baseProfileId)
    errors.push(`the base profile row "${baseRows[0].profileId}" must equal baseProfileId "${baseProfileId}"`);

  const knownProfiles = new Set<string>([baseProfileId]);
  for (const p of variantProfiles) {
    knownProfiles.add(p.profileId);
    if (!p.profileId.startsWith(prefix)) errors.push(`profile "${p.profileId}" must start with "${prefix}"`);
    if (p.profileType === "variant" && p.profileId === baseProfileId)
      errors.push(`variant profile must not reuse the base profile id "${baseProfileId}"`);
  }
  if (!knownProfiles.has(selectedMvpProfileId))
    errors.push(`selectedMvpProfileId "${selectedMvpProfileId}" is not a defined profile`);
  if (variantStrategy === "base_only" && selectedMvpProfileId !== baseProfileId)
    errors.push(`a base_only mount must select the base profile (got "${selectedMvpProfileId}")`);

  /* ── feature/contact/coupling profile references ── */
  const checkProfileId = (profileId: string, where: string): void => {
    if (!knownProfiles.has(profileId)) errors.push(`${where}: profileId "${profileId}" is not a defined profile`);
  };
  spec.cameraSideFeatures.forEach((f) => checkProfileId(f.profileId, `cameraSideFeatures "${f.featureId}"`));
  spec.lensSideFeatures.forEach((f) => checkProfileId(f.profileId, `lensSideFeatures "${f.featureId}"`));
  spec.contacts.forEach((c) => checkProfileId(c.profileId, `contacts ${c.side}-${c.contactNo}`));
  spec.mechanicalCouplings.forEach((c) => checkProfileId(c.profileId, `mechanicalCouplings "${c.featureId}"`));

  /* ── sources: unique refs, archived live URLs, ISO dates ── */
  const knownRefs = new Set<string>();
  for (const src of spec.sourceRefs) {
    if (knownRefs.has(src.ref)) errors.push(`duplicate sourceRef id "${src.ref}"`);
    knownRefs.add(src.ref);
    if (!ISO_DATE.test(src.archiveDate) && src.archiveDate !== "unknown")
      errors.push(`sourceRef "${src.ref}": archiveDate must be ISO-8601 or "unknown"`);
    const hasLiveUrl = /^https?:\/\//.test(src.liveUrl);
    if (hasLiveUrl) {
      if (!/^https?:\/\//.test(src.archiveUrl))
        errors.push(`sourceRef "${src.ref}": a live URL requires an archived snapshot URL (package Section 3)`);
      if (!ISO_DATE.test(src.archiveDate))
        errors.push(`sourceRef "${src.ref}": a live URL requires an ISO-8601 archive capture date`);
    }
  }

  /* ── numeric envelopes: ranges + resolvable refs ── */
  const cd = spec.coreDimensions;
  checkEnv(cd.flangeFocalDistanceMm, "coreDimensions.flangeFocalDistanceMm", "length", knownRefs, errors);
  checkEnv(cd.nominalThroatDiameterMm, "coreDimensions.nominalThroatDiameterMm", "length", knownRefs, errors);
  checkEnv(cd.effectiveClearApertureMm, "coreDimensions.effectiveClearApertureMm", "length", knownRefs, errors);
  checkEnv(cd.cameraMountOuterDiameterMm, "coreDimensions.cameraMountOuterDiameterMm", "length", knownRefs, errors);
  checkEnv(cd.lensMountOuterDiameterMm, "coreDimensions.lensMountOuterDiameterMm", "length", knownRefs, errors);
  checkEnv(cd.contactCount, "coreDimensions.contactCount", "count", knownRefs, errors);

  const lg = spec.lockGeometry;
  checkEnv(lg.insertionAngleDeg, "lockGeometry.insertionAngleDeg", "angle", knownRefs, errors);
  checkEnv(lg.lockAngleDeg, "lockGeometry.lockAngleDeg", "angle", knownRefs, errors);
  checkEnv(lg.lockRotationDeg, "lockGeometry.lockRotationDeg", "angle", knownRefs, errors);
  checkDirection(lg.lockRotationDirection, "lockGeometry.lockRotationDirection", knownRefs, errors);

  const checkFeatureEnvs = (
    f: {
      featureId: string;
      centerAngleDeg: ValueEnvelope<number>;
      startAngleDeg: ValueEnvelope<number>;
      endAngleDeg: ValueEnvelope<number>;
      innerRadiusMm: ValueEnvelope<number>;
      outerRadiusMm: ValueEnvelope<number>;
    },
    where: string,
  ): void => {
    checkEnv(f.centerAngleDeg, `${where}.centerAngleDeg`, "angle", knownRefs, errors);
    checkEnv(f.startAngleDeg, `${where}.startAngleDeg`, "angle", knownRefs, errors);
    checkEnv(f.endAngleDeg, `${where}.endAngleDeg`, "angle", knownRefs, errors);
    checkEnv(f.innerRadiusMm, `${where}.innerRadiusMm`, "length", knownRefs, errors);
    checkEnv(f.outerRadiusMm, `${where}.outerRadiusMm`, "length", knownRefs, errors);
  };
  spec.cameraSideFeatures.forEach((f) => checkFeatureEnvs(f, `cameraSideFeatures "${f.featureId}"`));
  spec.lensSideFeatures.forEach((f) => checkFeatureEnvs(f, `lensSideFeatures "${f.featureId}"`));

  spec.contacts.forEach((c) => {
    const where = `contacts ${c.side}-${c.contactNo}`;
    if (c.contactNo < 1) errors.push(`${where}: contactNo must be >= 1`);
    checkEnv(c.centerAngleDeg, `${where}.centerAngleDeg`, "angle", knownRefs, errors);
    checkEnv(c.centerRadiusMm, `${where}.centerRadiusMm`, "length", knownRefs, errors);
    checkEnv(c.widthMm, `${where}.widthMm`, "length", knownRefs, errors);
    checkEnv(c.heightMm, `${where}.heightMm`, "length", knownRefs, errors);
  });

  spec.axialStack.forEach((p) => {
    const where = `axialStack "${p.planeId}"`;
    checkEnv(p.zPositionMm, `${where}.zPositionMm`, "coordinate", knownRefs, errors);
    checkEnv(p.diameterMm, `${where}.diameterMm`, "length", knownRefs, errors);
  });

  spec.screwsGasketsBaffles.forEach((sg) =>
    checkAngleList(sg.centerAnglesDeg, `screwsGasketsBaffles "${sg.featureId}".centerAnglesDeg`, knownRefs, errors),
  );

  return errors;
}
