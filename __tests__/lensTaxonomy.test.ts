import { describe, expect, it } from "vitest";
import {
  DEFAULT_IMAGE_FORMAT_ID,
  IMAGE_FORMATS,
  LENS_MOUNTS,
  resolveImageFormatMetadata,
} from "../src/utils/lensTaxonomy.js";

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

  it("includes canonical larger film sheet and roll-film formats", () => {
    expect(IMAGE_FORMATS.map((format) => format.id)).toEqual(expect.arrayContaining(["6x7", "6x9", "5x7", "8x10"]));
  });

  it("includes additional interchangeable-lens mount families", () => {
    expect(LENS_MOUNTS.map((mount) => mount.id)).toEqual(
      expect.arrayContaining([
        "bronica-etr",
        "bronica-gs",
        "bronica-sq",
        "canon-ef-m",
        "canon-fl",
        "canon-r",
        "contax-n",
        "contax-g",
        "contax-rf",
        "dkl",
        "exakta",
        "four-thirds",
        "fuji-g690",
        "fuji-gx680",
        "konica-ar",
        "konica-f",
        "leica-r",
        "leica-s",
        "m42",
        "mamiya-6",
        "mamiya-7",
        "mamiya-645",
        "mamiya-nc",
        "mamiya-rb67",
        "mamiya-rz67",
        "micro-four-thirds",
        "minolta-v",
        "nikon-1",
        "nikon-s",
        "nikonos",
        "olympus-pen-f",
        "pentax-645",
        "pentax-67",
        "pentax-q",
        "praktina",
        "rollei-6000",
        "rollei-qbm",
        "samsung-nx",
        "samsung-nx-mini",
        "sigma-sa",
        "xpan",
        "yashica-contax",
      ]),
    );
  });

  it("includes image formats for the added mount families", () => {
    expect(IMAGE_FORMATS.map((format) => format.id)).toEqual(
      expect.arrayContaining([
        "1/2.3-inch-type",
        "1/1.7-inch-type",
        "1-inch-type",
        "four-thirds",
        "aps-film",
        "135-panoramic",
        "leica-s-45x30",
        "6x8",
      ]),
    );
  });

  it("falls back to full-frame metadata when a format id is missing", () => {
    expect(DEFAULT_IMAGE_FORMAT_ID).toBe("135-full-frame");
    expect(resolveImageFormatMetadata(undefined).id).toBe("135-full-frame");
    expect(resolveImageFormatMetadata("not-a-format").id).toBe("135-full-frame");
    expect(resolveImageFormatMetadata("aps-c").id).toBe("aps-c");
  });
});
