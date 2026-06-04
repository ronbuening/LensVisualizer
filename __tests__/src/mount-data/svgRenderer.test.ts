import { describe, expect, it } from "vitest";
import {
  MOUNT_SVG_LAYER_ORDER,
  buildMountSvgModel,
  renderMountSvgString,
} from "../../../src/mount-data/svgRenderer.js";
import { MOUNT_SPEC_BY_ID } from "../../../src/mount-data/index.js";

describe("mount SVG renderer", () => {
  it("emits stable accessible SVG markup with metadata", () => {
    const spec = MOUNT_SPEC_BY_ID["canon-ef"];
    expect(spec).toBeTruthy();
    const first = renderMountSvgString(spec!, "camera_side_front_view");
    const second = renderMountSvgString(spec!, "camera_side_front_view");

    expect(first).toBe(second);
    expect(first).toContain('role="img"');
    expect(first).toContain("<metadata>");
    expect(first).toContain('"mountId":"canon-ef"');
    expect(first).toContain("status-unknown");
  });

  it("emits primitives in layer-contract order", () => {
    const spec = MOUNT_SPEC_BY_ID["pentax-k"];
    expect(spec).toBeTruthy();
    const model = buildMountSvgModel(spec!, "lens_side_rear_view");
    const layerIndexes = model.primitives.map((primitive) =>
      MOUNT_SVG_LAYER_ORDER.indexOf(primitive.layer as (typeof MOUNT_SVG_LAYER_ORDER)[number]),
    );

    expect(layerIndexes.every((index) => index >= 0)).toBe(true);
    expect(layerIndexes).toEqual([...layerIndexes].sort((a, b) => a - b));
  });

  it("draws the axial sensor plane at negative flange distance", () => {
    const spec = MOUNT_SPEC_BY_ID["nikon-f"];
    expect(spec).toBeTruthy();
    const svg = renderMountSvgString(spec!, "axial_register_schematic");

    expect(svg).toContain('x1="-46.5"');
    expect(svg).toContain("sensor / film plane");
  });
});
