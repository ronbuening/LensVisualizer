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
import { MOUNT_SPECS } from "../../../../src/lens-data/mounts/index.js";
import type { MountSpec, ValueStatus } from "../../../../src/types/mount.js";
import validateMountSpec from "../../../../src/optics/mount/validateMountSpec.js";
import { buildMountSvgDoc } from "../../../../src/optics/mount/renderMount.js";
import { mountSvgDocToString } from "../../../../src/optics/mount/toSvgString.js";
import { emitMountJson } from "../../../../src/optics/mount/emitMountJson.js";
import { MOUNT_LAYER_ORDER } from "../../../../src/optics/mount/layers.js";
import { isLensMountId } from "../../../../src/utils/catalog/lensTaxonomy.js";

const ENTRIES = Object.entries(MOUNT_SPECS) as [string, MountSpec][];
const VIEWS = ["camera_side_front", "lens_side_rear", "axial_section"] as const;
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
});
