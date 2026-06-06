/**
 * Cross-mount conformance suite for every authored mount specification.
 *
 * Validates all three POC mounts at once: cross-field validation, mount-id membership against the
 * canonical taxonomy, render determinism and layer order across all views, and structural
 * conformance of the emitted JSON machine block. The JSON check is hand-written (no ajv): because
 * the block is emitted from the typed object, asserting the required keys, enum tokens, and the
 * value-envelope shape is enough to catch drift between the types and the schema.
 */
import { describe, expect, it } from "vitest";
import { MOUNT_SPECS } from "../../../../src/mounts/index.js";
import type { MountSpec, MountSpecInput, ValueStatus } from "../../../../src/types/mount.js";
import validateMountSpec from "../../../../src/optics/mount/validateMountSpec.js";
import { buildMountSvgDoc } from "../../../../src/optics/mount/renderMount.js";
import { mountSvgDocToString } from "../../../../src/optics/mount/toSvgString.js";
import { emitMountJson } from "../../../../src/optics/mount/emitMountJson.js";
import { MOUNT_LAYER_ORDER } from "../../../../src/optics/mount/layers.js";
import { isLensMountId } from "../../../../src/utils/catalog/lensTaxonomy.js";

const ENTRIES = Object.entries(MOUNT_SPECS) as [string, MountSpec][];
const INPUT_MODULES = import.meta.glob<{ default: MountSpecInput }>("../../../../src/mounts/*.mount.ts", {
  eager: true,
});
const INPUT_ENTRIES = Object.entries(INPUT_MODULES).map(([path, module]) => [path, module.default] as const);
const VIEWS = ["camera_side_front", "lens_side_rear", "axial_section"] as const;
type AngledMountFeature = Pick<
  MountSpec["cameraSideFeatures"][number] | MountSpec["lensSideFeatures"][number],
  "startAngleDeg" | "endAngleDeg" | "centerAngleDeg"
>;
const STATUS_TOKENS = new Set<ValueStatus>([
  "unknown",
  "not_applicable",
  "official",
  "patent",
  "service_manual",
  "measured",
  "photo_scaled",
  "secondary",
  "conflicting",
]);

it("registers at least the three POC mounts", () => {
  expect(ENTRIES.length).toBeGreaterThanOrEqual(3);
  expect(MOUNT_SPECS["nikon-f"]).toBeDefined();
  expect(MOUNT_SPECS["pentax-k"]).toBeDefined();
  expect(MOUNT_SPECS["canon-ef"]).toBeDefined();
});

it("authored mount inputs do not leave patent-cited photo-scaled values", () => {
  const offenders: string[] = [];
  const visit = (node: unknown, path: string, patentRefs: ReadonlySet<string>): void => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach((child, index) => visit(child, `${path}[${index}]`, patentRefs));
      return;
    }
    const obj = node as Record<string, unknown>;
    if ("value" in obj && "status" in obj && "sourceRefs" in obj) {
      const sourceRefs = Array.isArray(obj.sourceRefs) ? (obj.sourceRefs as string[]) : [];
      if (obj.status === "photo_scaled" && sourceRefs.some((ref) => patentRefs.has(ref))) offenders.push(path);
    }
    Object.entries(obj).forEach(([key, value]) => visit(value, `${path}.${key}`, patentRefs));
  };

  for (const [path, spec] of INPUT_ENTRIES) {
    const patentRefs = new Set(
      spec.sourceRefs.filter((source) => source.sourceType === "patent").map((source) => source.ref),
    );
    if (patentRefs.size === 0) continue;
    visit(spec, path, patentRefs);
  }

  expect(offenders).toEqual([]);
});

it("keeps Nikon Z contacts on the patent upper arc in both rendered viewpoints", () => {
  const spec = MOUNT_SPECS["nikon-z"];
  if (!spec) throw new Error("Expected Nikon Z mount spec to be registered");
  const expectedStoredAngles = [30, 24, 18, 12, 6, 0, 354, 348, 342, 336, 330];
  const contactAngle = (contact: MountSpec["contacts"][number]): number => {
    const { value } = contact.centerAngleDeg;
    if (typeof value !== "number") throw new Error(`Expected numeric Nikon Z contact angle for ${contact.side}`);
    return value;
  };

  for (const side of ["body", "lens"] as const) {
    const sideContacts = spec.contacts
      .filter((contact) => contact.side === side)
      .sort((a, b) => a.contactNo - b.contactNo);
    expect(sideContacts.map(contactAngle)).toEqual(expectedStoredAngles);
  }

  const selectedProfile = spec.mvp.profileModel.selectedMvpProfileId;
  const cameraFront = buildMountSvgDoc(spec, selectedProfile, "camera_side_front");
  const lensRear = buildMountSvgDoc(spec, selectedProfile, "lens_side_rear");
  const renderedAngles = (doc: ReturnType<typeof buildMountSvgDoc>): Map<string, number> =>
    new Map(
      doc.layers.flatMap((layer) => layer.elements.map((element) => [element.sortKey, element.sortAngle] as const)),
    );

  const cameraAngles = renderedAngles(cameraFront);
  expect(cameraAngles.get("contact-body-1")).toBe(30);
  expect(cameraAngles.get("contact-body-11")).toBe(330);

  const lensAngles = renderedAngles(lensRear);
  expect(lensAngles.get("contact-lens-1")).toBe(330);
  expect(lensAngles.get("contact-lens-11")).toBe(30);
});

it("keeps Nikon Z claws in the patent unequal-length rotation", () => {
  const spec = MOUNT_SPECS["nikon-z"];
  if (!spec) throw new Error("Expected Nikon Z mount spec to be registered");
  const bodyFeatureById = new Map<string, AngledMountFeature>(
    spec.cameraSideFeatures.map((feature) => [feature.featureId, feature]),
  );
  const lensFeatureById = new Map<string, AngledMountFeature>(
    spec.lensSideFeatures.map((feature) => [feature.featureId, feature]),
  );
  const angleValue = (
    features: ReadonlyMap<string, AngledMountFeature>,
    featureId: string,
    key: "startAngleDeg" | "endAngleDeg" | "centerAngleDeg",
  ): number => {
    const feature = features.get(featureId);
    if (!feature) throw new Error(`Expected Nikon Z feature ${featureId}`);
    const { value } = feature[key];
    if (typeof value !== "number") throw new Error(`Expected numeric angle for ${featureId}.${key}`);
    return value;
  };
  const span = (features: ReadonlyMap<string, AngledMountFeature>, featureId: string): number =>
    (angleValue(features, featureId, "endAngleDeg") - angleValue(features, featureId, "startAngleDeg") + 360) % 360;
  const mirroredStart = (featureId: string): number =>
    (360 - angleValue(lensFeatureById, featureId, "endAngleDeg")) % 360;
  const mirroredEnd = (featureId: string): number =>
    (360 - angleValue(lensFeatureById, featureId, "startAngleDeg")) % 360;

  expect(angleValue(bodyFeatureById, "body-claw-29a", "centerAngleDeg")).toBe(49);
  expect(angleValue(bodyFeatureById, "body-claw-29a", "startAngleDeg")).toBe(24);
  expect(angleValue(bodyFeatureById, "body-claw-29b", "endAngleDeg")).toBe(320);
  expect(span(bodyFeatureById, "body-claw-29a")).toBeGreaterThan(span(bodyFeatureById, "body-claw-29c"));
  expect(span(bodyFeatureById, "body-claw-29c")).toBeGreaterThan(span(bodyFeatureById, "body-claw-29d"));
  expect(span(bodyFeatureById, "body-claw-29d")).toBeGreaterThan(span(bodyFeatureById, "body-claw-29b"));

  expect(mirroredEnd("lens-lug-39a")).toBe(346);
  expect(mirroredStart("lens-lug-39b")).toBe(46);
  expect(mirroredEnd("lens-lug-39b")).toBe(82);
  expect(mirroredStart("lens-lug-39c")).toBe(118);
  expect(mirroredEnd("lens-lug-39c")).toBe(166);
  expect(mirroredStart("lens-lug-39d")).toBe(210);
  expect(mirroredEnd("lens-lug-39d")).toBe(252);
  expect(span(lensFeatureById, "lens-lug-39a")).toBeGreaterThan(span(lensFeatureById, "lens-lug-39c"));
  expect(span(lensFeatureById, "lens-lug-39d")).toBeGreaterThan(span(lensFeatureById, "lens-lug-39b"));
});

describe.each(ENTRIES)("%s", (mountId, spec) => {
  it("has a canonical mount id", () => {
    expect(isLensMountId(mountId)).toBe(true);
    expect(spec.mountId).toBe(mountId);
  });

  it("passes cross-field validation", () => {
    expect(validateMountSpec(spec)).toEqual([]);
  });

  it("renders deterministically with ordered layers", () => {
    for (const view of VIEWS) {
      const doc = buildMountSvgDoc(spec, spec.mvp.profileModel.selectedMvpProfileId, view);
      expect(doc.viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
      const a = mountSvgDocToString(doc);
      const b = mountSvgDocToString(buildMountSvgDoc(spec, spec.mvp.profileModel.selectedMvpProfileId, view));
      expect(a).toBe(b);
      const layerIdx = doc.layers.map((l) => MOUNT_LAYER_ORDER.indexOf(l.name));
      expect(layerIdx).toEqual([...layerIdx].sort((x, y) => x - y));
      // no coordinate carries more than 3 decimals
      expect(a.match(/\d+\.\d{4,}/g)).toBeNull();
    }
  });

  it("emits a schema-shaped JSON block", () => {
    const json = emitMountJson(spec);
    expect(json.schemaVersion).toBe("1.3");
    for (const key of [
      "mountId",
      "displayLabel",
      "mechanism",
      "coreDimensions",
      "lockGeometry",
      "cameraSideFeatures",
      "lensSideFeatures",
      "svgLayers",
      "sourceRefs",
    ]) {
      expect(json).toHaveProperty(key);
    }
    for (const view of ["cameraSideFront", "lensSideRear", "axialSection"] as const) {
      expect(json.render.views[view].viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
    }

    // Every value envelope reachable in the JSON has a valid status token, a value, and resolvable refs.
    const knownRefs = new Set(json.sourceRefs.map((s) => s.ref));
    const visit = (node: unknown): void => {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node)) {
        node.forEach(visit);
        return;
      }
      const obj = node as Record<string, unknown>;
      if ("value" in obj && "status" in obj && "sourceRefs" in obj) {
        expect(STATUS_TOKENS.has(obj.status as ValueStatus)).toBe(true);
        expect(Array.isArray(obj.sourceRefs)).toBe(true);
        for (const ref of obj.sourceRefs as string[]) expect(knownRefs.has(ref)).toBe(true);
      }
      Object.values(obj).forEach(visit);
    };
    visit(json);

    expect(() => JSON.parse(JSON.stringify(json))).not.toThrow();
  });

  it("promotes patent-cited photo-scaled values to patent status", () => {
    const patentRefs = new Set(
      spec.sourceRefs.filter((source) => source.sourceType === "patent").map((source) => source.ref),
    );
    if (patentRefs.size === 0) return;

    const offenders: string[] = [];
    const visit = (node: unknown, path: string): void => {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node)) {
        node.forEach((child, index) => visit(child, `${path}[${index}]`));
        return;
      }
      const obj = node as Record<string, unknown>;
      if ("value" in obj && "status" in obj && "sourceRefs" in obj) {
        const sourceRefs = Array.isArray(obj.sourceRefs) ? (obj.sourceRefs as string[]) : [];
        if (obj.status === "photo_scaled" && sourceRefs.some((ref) => patentRefs.has(ref))) offenders.push(path);
      }
      Object.entries(obj).forEach(([key, value]) => visit(value, `${path}.${key}`));
    };

    visit(spec, mountId);
    expect(offenders).toEqual([]);
  });
});
