import Ajv2020 from "ajv/dist/2020.js";
import schema from "./lens-mount.schema.json";
import type {
  AngleListValue,
  AxialPlane,
  CameraSideFeature,
  Contact,
  LensMountSpec,
  LensSideFeature,
  MechanicalCoupling,
  MountSvgView,
  ScrewGasketBaffle,
  ValueEnvelope,
} from "./types.js";
import { isLensMountId } from "../utils/catalog/lensTaxonomy.js";

const REQUIRED_VIEWS: MountSvgView[] = ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"];

const MVP_REQUIRED_CORE_FIELDS = [
  "flangeFocalDistanceMm",
  "nominalThroatDiameterMm",
  "cameraMountOuterDiameterMm",
  "lensMountOuterDiameterMm",
] as const;

const ajv = new Ajv2020({ allErrors: true, strict: false });
const validateSchema = ajv.compile(schema);

type EnvelopePath = {
  path: string;
  envelope: ValueEnvelope<unknown>;
};

function isValueEnvelope(value: unknown): value is ValueEnvelope<unknown> {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ValueEnvelope<unknown>>;
  return "value" in candidate && "status" in candidate && Array.isArray(candidate.sourceRefs);
}

function pushFeatureEnvelopes(prefix: string, feature: CameraSideFeature | LensSideFeature, envelopes: EnvelopePath[]) {
  envelopes.push(
    { path: `${prefix}.centerAngleDeg`, envelope: feature.centerAngleDeg },
    { path: `${prefix}.startAngleDeg`, envelope: feature.startAngleDeg },
    { path: `${prefix}.endAngleDeg`, envelope: feature.endAngleDeg },
    { path: `${prefix}.innerRadiusMm`, envelope: feature.innerRadiusMm },
    { path: `${prefix}.outerRadiusMm`, envelope: feature.outerRadiusMm },
  );
  if ("depthMm" in feature) envelopes.push({ path: `${prefix}.depthMm`, envelope: feature.depthMm });
  if ("thicknessMm" in feature) envelopes.push({ path: `${prefix}.thicknessMm`, envelope: feature.thicknessMm });
}

function collectEnvelopes(spec: LensMountSpec): EnvelopePath[] {
  const envelopes: EnvelopePath[] = [];
  Object.entries(spec.coreDimensions).forEach(([key, envelope]) => {
    if (isValueEnvelope(envelope)) envelopes.push({ path: `coreDimensions.${key}`, envelope });
  });
  Object.entries(spec.lockGeometry).forEach(([key, envelope]) => {
    if (isValueEnvelope(envelope)) envelopes.push({ path: `lockGeometry.${key}`, envelope });
  });
  spec.cameraSideFeatures.forEach((feature, index) => {
    pushFeatureEnvelopes(`cameraSideFeatures[${index}].${feature.featureId}`, feature, envelopes);
  });
  spec.lensSideFeatures.forEach((feature, index) => {
    pushFeatureEnvelopes(`lensSideFeatures[${index}].${feature.featureId}`, feature, envelopes);
  });
  spec.axialStack.forEach((plane: AxialPlane, index) => {
    envelopes.push(
      { path: `axialStack[${index}].${plane.planeId}.zPositionMm`, envelope: plane.zPositionMm },
      { path: `axialStack[${index}].${plane.planeId}.thicknessMm`, envelope: plane.thicknessMm },
      { path: `axialStack[${index}].${plane.planeId}.diameterMm`, envelope: plane.diameterMm },
    );
  });
  spec.contacts.forEach((contact: Contact, index) => {
    envelopes.push(
      { path: `contacts[${index}].centerAngleDeg`, envelope: contact.centerAngleDeg },
      { path: `contacts[${index}].centerRadiusMm`, envelope: contact.centerRadiusMm },
      { path: `contacts[${index}].widthMm`, envelope: contact.widthMm },
      { path: `contacts[${index}].heightMm`, envelope: contact.heightMm },
      { path: `contacts[${index}].protrusionMm`, envelope: contact.protrusionMm },
    );
  });
  spec.mechanicalCouplings.forEach((coupling: MechanicalCoupling, index) => {
    envelopes.push(
      { path: `mechanicalCouplings[${index}].${coupling.featureId}.centerAngleDeg`, envelope: coupling.centerAngleDeg },
      { path: `mechanicalCouplings[${index}].${coupling.featureId}.radiusMm`, envelope: coupling.radiusMm },
    );
  });
  spec.screwsGasketsBaffles.forEach((feature: ScrewGasketBaffle, index) => {
    envelopes.push(
      { path: `screwsGasketsBaffles[${index}].${feature.featureId}.count`, envelope: feature.count },
      { path: `screwsGasketsBaffles[${index}].${feature.featureId}.pcdMm`, envelope: feature.pcdMm },
      { path: `screwsGasketsBaffles[${index}].${feature.featureId}.diameterMm`, envelope: feature.diameterMm },
      {
        path: `screwsGasketsBaffles[${index}].${feature.featureId}.centerAnglesDeg`,
        envelope: feature.centerAnglesDeg as AngleListValue,
      },
    );
  });
  return envelopes;
}

function viewBoxIsDeterministic(viewBox: string): boolean {
  if (viewBox === "unknown") return false;
  const values = viewBox.split(/\s+/).map(Number);
  return values.length === 4 && values.every(Number.isFinite) && values[2] > 0 && values[3] > 0;
}

function hasOpenQuestionFor(spec: LensMountSpec, field: string): boolean {
  return spec.openQuestions.some((question) =>
    question.affectedFields.some((affectedField) => affectedField === field || affectedField.endsWith(`.${field}`)),
  );
}

function pushProjectChecks(spec: LensMountSpec, errors: string[]) {
  if (spec.schemaVersion !== "1.3") errors.push(`schemaVersion must be "1.3"`);
  if (!isLensMountId(spec.mountId))
    errors.push(`mountId "${String(spec.mountId)}" is not a canonical LensVisualizer id`);

  REQUIRED_VIEWS.forEach((view) => {
    if (!spec.mvp.requiredViews.includes(view)) errors.push(`mvp.requiredViews must include ${view}`);
  });

  [
    ["render.views.cameraSideFront.viewBox", spec.render.views.cameraSideFront.viewBox],
    ["render.views.lensSideRear.viewBox", spec.render.views.lensSideRear.viewBox],
    ["render.views.axialSection.viewBox", spec.render.views.axialSection.viewBox],
  ].forEach(([path, viewBox]) => {
    if (!viewBoxIsDeterministic(viewBox)) errors.push(`${path} must be a deterministic numeric viewBox`);
  });

  const profileIds = new Set(spec.mvp.profileModel.variantProfiles.map((profile) => profile.profileId));
  profileIds.add(spec.mvp.profileModel.baseProfileId);
  if (!profileIds.has(spec.mvp.profileModel.selectedMvpProfileId)) {
    errors.push(`selectedMvpProfileId "${spec.mvp.profileModel.selectedMvpProfileId}" must exist in variantProfiles`);
  }
  profileIds.forEach((profileId) => {
    if (!profileId.startsWith(`${spec.mountId}/`))
      errors.push(`profileId "${profileId}" must start with ${spec.mountId}/`);
  });

  const sourceRefs = new Set(spec.sourceRefs.map((source) => source.ref));
  spec.sourceRefs.forEach((source) => {
    if (source.liveUrl !== "unknown" && (source.archiveUrl === "unknown" || source.archiveDate === "unknown")) {
      errors.push(`sourceRefs.${source.ref} must include archiveUrl and archiveDate for liveUrl`);
    }
  });

  spec.mvp.profileModel.variantProfiles.forEach((profile) => {
    profile.sourceRefs.forEach((ref) => {
      if (!sourceRefs.has(ref)) errors.push(`profile ${profile.profileId} references missing source "${ref}"`);
    });
  });

  collectEnvelopes(spec).forEach(({ path, envelope }) => {
    envelope.sourceRefs.forEach((ref) => {
      if (!sourceRefs.has(ref)) errors.push(`${path} references missing source "${ref}"`);
    });
    if (typeof envelope.value === "number" && envelope.status !== "unknown" && envelope.status !== "not_applicable") {
      if (envelope.sourceRefs.length === 0) errors.push(`${path} numeric value must carry at least one sourceRef`);
    }
  });

  MVP_REQUIRED_CORE_FIELDS.forEach((field) => {
    if (spec.coreDimensions[field].value === "unknown" && !hasOpenQuestionFor(spec, field)) {
      errors.push(`coreDimensions.${field} is unknown and must be listed in openQuestions`);
    }
  });
}

export function validateMountSpec(spec: LensMountSpec): string[] {
  const errors: string[] = [];
  if (!validateSchema(spec)) {
    validateSchema.errors?.forEach((error) => {
      errors.push(`${error.instancePath || "/"} ${error.message ?? "failed schema validation"}`);
    });
  }
  pushProjectChecks(spec, errors);
  return errors;
}

export function validateMountSpecs(specs: readonly LensMountSpec[]): string[] {
  return specs.flatMap((spec) => validateMountSpec(spec).map((error) => `${spec.mountId}: ${error}`));
}
