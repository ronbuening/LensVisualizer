/**
 * Cross-mount conformance suite for every authored mount specification.
 *
 * Validates all three POC mounts at once: cross-field validation, mount-id membership against the
 * canonical taxonomy, render determinism and layer order across all views, and structural
 * conformance of the emitted JSON machine block. The JSON check is hand-written (no ajv): because
 * the block is emitted from the typed object, asserting the required keys, enum tokens, and the
 * value-envelope shape is enough to catch drift between the types and the schema.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
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

it("keeps MountSpec keys in sync with lens-mount.schema.json", () => {
  // The emitted JSON block is the MountSpec object itself, so diffing its keys
  // against the schema catches drift between src/types/mount.ts and
  // src/mounts/lens-mount.schema.json in either direction.
  const schemaPath = fileURLToPath(new URL("../../../../src/mounts/lens-mount.schema.json", import.meta.url));
  const schema = JSON.parse(readFileSync(schemaPath, "utf-8")) as {
    additionalProperties: boolean;
    required: string[];
    properties: Record<string, unknown>;
  };

  expect(schema.additionalProperties).toBe(false);
  const schemaKeys = [...schema.required].sort();
  expect([...Object.keys(schema.properties)].sort()).toEqual(schemaKeys);

  for (const [mountId, spec] of ENTRIES) {
    expect(Object.keys(emitMountJson(spec)).sort(), `emitted keys for ${mountId}`).toEqual(schemaKeys);
  }
});

it("registers the three POC mounts and never silently shrinks the registry", () => {
  // Floor guard for the aggregate sweeps below: a registry that silently lost
  // mounts would otherwise still pass every per-mount check.
  expect(ENTRIES.length).toBeGreaterThanOrEqual(40);
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

/* Aggregate per-mount conformance sweeps. Each test loops every registered
 * mount and collects offenders so a failure names every non-conforming mount
 * (same style as the full-catalog lens sweeps); the registry-floor test above
 * guards against a silently shrunken ENTRIES list. */
describe("every registered mount spec", () => {
  it("has a canonical mount id", () => {
    const offenders = ENTRIES.filter(([mountId, spec]) => !isLensMountId(mountId) || spec.mountId !== mountId).map(
      ([mountId]) => mountId,
    );
    expect(offenders).toEqual([]);
  });

  it("passes cross-field validation", () => {
    const offenders = ENTRIES.flatMap(([mountId, spec]) =>
      validateMountSpec(spec).map((error) => `${mountId}: ${error}`),
    );
    expect(offenders).toEqual([]);
  });

  it("renders deterministically with ordered layers", () => {
    const offenders: string[] = [];
    for (const [mountId, spec] of ENTRIES) {
      for (const view of VIEWS) {
        const label = `${mountId}/${view}`;
        const doc = buildMountSvgDoc(spec, spec.mvp.profileModel.selectedMvpProfileId, view);
        if (!/^-?\d+ -?\d+ \d+ \d+$/.test(doc.viewBox)) offenders.push(`${label}: viewBox "${doc.viewBox}"`);
        const a = mountSvgDocToString(doc);
        const b = mountSvgDocToString(buildMountSvgDoc(spec, spec.mvp.profileModel.selectedMvpProfileId, view));
        if (a !== b) offenders.push(`${label}: render is not deterministic`);
        const layerIdx = doc.layers.map((l) => MOUNT_LAYER_ORDER.indexOf(l.name));
        if (layerIdx.some((idx, i) => i > 0 && idx < layerIdx[i - 1])) offenders.push(`${label}: layers out of order`);
        // no coordinate carries more than 3 decimals
        if (a.match(/\d+\.\d{4,}/g)) offenders.push(`${label}: coordinate precision exceeds 3 decimals`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it("emits a schema-shaped JSON block", () => {
    const offenders: string[] = [];
    for (const [mountId, spec] of ENTRIES) {
      const json = emitMountJson(spec);
      if (json.schemaVersion !== "1.3") offenders.push(`${mountId}: schemaVersion "${json.schemaVersion}"`);
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
        if (!(key in json)) offenders.push(`${mountId}: missing "${key}"`);
      }
      for (const view of ["cameraSideFront", "lensSideRear", "axialSection"] as const) {
        if (!/^-?\d+ -?\d+ \d+ \d+$/.test(json.render.views[view].viewBox)) {
          offenders.push(`${mountId}: ${view} viewBox "${json.render.views[view].viewBox}"`);
        }
      }

      // Every value envelope reachable in the JSON has a valid status token, a value, and resolvable refs.
      const knownRefs = new Set(json.sourceRefs.map((s) => s.ref));
      const visit = (node: unknown, path: string): void => {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) {
          node.forEach((child, index) => visit(child, `${path}[${index}]`));
          return;
        }
        const obj = node as Record<string, unknown>;
        if ("value" in obj && "status" in obj && "sourceRefs" in obj) {
          if (!STATUS_TOKENS.has(obj.status as ValueStatus)) offenders.push(`${path}: status "${obj.status}"`);
          if (!Array.isArray(obj.sourceRefs)) offenders.push(`${path}: sourceRefs is not an array`);
          else {
            for (const ref of obj.sourceRefs as string[]) {
              if (!knownRefs.has(ref)) offenders.push(`${path}: unresolved ref "${ref}"`);
            }
          }
        }
        Object.entries(obj).forEach(([key, value]) => visit(value, `${path}.${key}`));
      };
      visit(json, mountId);

      try {
        JSON.parse(JSON.stringify(json));
      } catch {
        offenders.push(`${mountId}: JSON round-trip failed`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it("promotes patent-cited photo-scaled values to patent status", () => {
    const offenders: string[] = [];
    for (const [mountId, spec] of ENTRIES) {
      const patentRefs = new Set(
        spec.sourceRefs.filter((source) => source.sourceType === "patent").map((source) => source.ref),
      );
      if (patentRefs.size === 0) continue;

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
    }
    expect(offenders).toEqual([]);
  });
});
