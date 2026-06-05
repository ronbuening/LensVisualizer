/**
 * Nikon F end-to-end test + the package Section 4.1 lens-rear mirror validation gate.
 *
 * Nikon F is the package's named mirror-validation reference. Its mounting-index clock position is
 * stored in the camera-front frame; this test confirms the lens-rear transform is the left-right
 * reflection (θ → 360 − θ), which distinguishes it from the other physically valid up-down flip
 * (θ → 180 − θ), and that the renderer never mutates the spec.
 */
import { describe, expect, it } from "vitest";
import NIKON_F_INPUT from "../../../../src/lens-data/mounts/nikon-f.mount.js";
import { normalizeMountSpec } from "../../../../src/optics/mount/defaults.js";
import validateMountSpec from "../../../../src/optics/mount/validateMountSpec.js";
import { buildMountSvgDoc } from "../../../../src/optics/mount/renderMount.js";
import { mountSvgDocToString } from "../../../../src/optics/mount/toSvgString.js";

const SPEC = normalizeMountSpec(NIKON_F_INPUT);

function deepFreeze<T>(obj: T): T {
  if (obj && typeof obj === "object") {
    for (const value of Object.values(obj)) deepFreeze(value);
    Object.freeze(obj);
  }
  return obj;
}

describe("nikon-f.mount", () => {
  it("passes cross-field validation with no errors", () => {
    expect(validateMountSpec(NIKON_F_INPUT)).toEqual([]);
  });

  it("renders all three views with integer-bounded viewBoxes", () => {
    for (const view of ["camera_side_front", "lens_side_rear", "axial_section"] as const) {
      const doc = buildMountSvgDoc(SPEC, "nikon-f/ai-s", view);
      expect(doc.viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
      expect(() => mountSvgDocToString(doc)).not.toThrow();
    }
  });
});

describe("§4.1 lens-rear mirror gate (Nikon F)", () => {
  it("reflects the mounting index left-to-right (60° → 300°), not up-down", () => {
    const bodyIndex = SPEC.cameraSideFeatures.find((f) => f.featureId === "body-index-mark");
    const storedAngle =
      bodyIndex && typeof bodyIndex.centerAngleDeg.value === "number" ? bodyIndex.centerAngleDeg.value : NaN;
    expect(storedAngle).toBe(60); // documented camera-front index position (2 o'clock)

    const rear = buildMountSvgDoc(SPEC, "nikon-f/ai-s", "lens_side_rear");
    const lensIndex = rear.layers.flatMap((l) => l.elements).find((e) => e.sortKey === "lens-index-mark");
    // Vertical-axis flip: 60 → 300 (10 o'clock). The up-down flip would give 120, so this gate
    // distinguishes the two physically valid reflections.
    expect(lensIndex?.sortAngle).toBe(300);
    expect((300 + 60) % 360).toBe(0);
  });

  it("never mutates the spec while rendering", () => {
    const frozen = deepFreeze(normalizeMountSpec(NIKON_F_INPUT));
    expect(() => {
      buildMountSvgDoc(frozen, "nikon-f/ai-s", "camera_side_front");
      buildMountSvgDoc(frozen, "nikon-f/ai-s", "lens_side_rear");
      buildMountSvgDoc(frozen, "nikon-f/ai-s", "axial_section");
    }).not.toThrow();
  });
});
