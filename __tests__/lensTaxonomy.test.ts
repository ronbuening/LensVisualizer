import { describe, expect, it } from "vitest";
import { IMAGE_FORMATS, LENS_MOUNTS } from "../src/utils/lensTaxonomy.js";

describe("lensTaxonomy", () => {
  it("keeps mount ids unique", () => {
    const ids = LENS_MOUNTS.map((mount) => mount.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps image format ids unique", () => {
    const ids = IMAGE_FORMATS.map((format) => format.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("defines positive dimensions for every image format", () => {
    for (const format of IMAGE_FORMATS) {
      expect(format.widthMm, `${format.id}: width`).toBeGreaterThan(0);
      expect(format.heightMm, `${format.id}: height`).toBeGreaterThan(0);
      expect(format.diagonalMm, `${format.id}: diagonal`).toBeGreaterThan(0);
      expect(format.aspectRatio, `${format.id}: aspect ratio`).toBeGreaterThan(0);
    }
  });

  it("keeps format diagonals aligned with width and height", () => {
    for (const format of IMAGE_FORMATS) {
      const expectedDiagonal = Math.hypot(format.widthMm, format.heightMm);
      expect(format.diagonalMm, `${format.id}: diagonal`).toBeCloseTo(expectedDiagonal, 1);
    }
  });
});
