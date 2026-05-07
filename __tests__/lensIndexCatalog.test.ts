import { describe, expect, it } from "vitest";
import {
  defaultCustomFilter,
  groupByImageFormat,
  groupByMount,
  matchesCustomFilter,
} from "../src/pages/lensIndex/catalog.js";
import type { CatalogLensEntry, FilterBounds } from "../src/pages/lensIndex/types.js";
import type { LensData } from "../src/types/optics.js";
import { IMAGE_FORMAT_BY_ID, LENS_MOUNT_BY_ID } from "../src/utils/lensTaxonomy.js";

const TEST_BOUNDS: FilterBounds = {
  focalMin: 20,
  focalMax: 100,
  apertureMin: 1.4,
  apertureMax: 8,
  patentYearMin: 1950,
  patentYearMax: 2026,
};

function entry(
  key: string,
  overrides: Partial<Pick<CatalogLensEntry, "lensMounts" | "imageFormat">> = {},
): CatalogLensEntry {
  return {
    key,
    data: { key, name: key.toUpperCase() } as LensData,
    maker: { display: "Test", slug: "test" },
    focalRange: [50, 50],
    aperture: 2,
    patentYear: 2021,
    lensMounts: [],
    imageFormat: null,
    ...overrides,
  };
}

describe("lens index catalog metadata filters", () => {
  it("matches a multi-mount lens when any selected mount matches", () => {
    const multiMount = entry("multi", {
      lensMounts: [LENS_MOUNT_BY_ID["nikon-z"], LENS_MOUNT_BY_ID["sony-fe"]],
    });
    const unknownMount = entry("unknown");

    expect(
      matchesCustomFilter(multiMount, { ...defaultCustomFilter(TEST_BOUNDS), lensMountIds: ["sony-fe"] }, TEST_BOUNDS),
    ).toBe(true);
    expect(
      matchesCustomFilter(
        unknownMount,
        { ...defaultCustomFilter(TEST_BOUNDS), lensMountIds: ["sony-fe"] },
        TEST_BOUNDS,
      ),
    ).toBe(false);
    expect(matchesCustomFilter(unknownMount, defaultCustomFilter(TEST_BOUNDS), TEST_BOUNDS)).toBe(true);
  });

  it("matches a lens by its single image format", () => {
    const fullFrame = entry("full-frame", {
      imageFormat: IMAGE_FORMAT_BY_ID["135-full-frame"],
    });
    const unknownFormat = entry("unknown");

    expect(
      matchesCustomFilter(
        fullFrame,
        { ...defaultCustomFilter(TEST_BOUNDS), imageFormatIds: ["135-full-frame"] },
        TEST_BOUNDS,
      ),
    ).toBe(true);
    expect(
      matchesCustomFilter(
        unknownFormat,
        { ...defaultCustomFilter(TEST_BOUNDS), imageFormatIds: ["135-full-frame"] },
        TEST_BOUNDS,
      ),
    ).toBe(false);
    expect(matchesCustomFilter(unknownFormat, defaultCustomFilter(TEST_BOUNDS), TEST_BOUNDS)).toBe(true);
  });
});

describe("lens index catalog metadata grouping", () => {
  it("duplicates multi-mount lenses into each mount group and puts unknown last", () => {
    const multiMount = entry("multi", {
      lensMounts: [LENS_MOUNT_BY_ID["nikon-z"], LENS_MOUNT_BY_ID["sony-fe"]],
    });
    const unknownMount = entry("unknown");

    const groups = groupByMount([unknownMount, multiMount]);

    expect(groups.map((group) => group.id)).toEqual(["nikon-z", "sony-fe", "unknown"]);
    expect(groups[0].lenses).toEqual([multiMount]);
    expect(groups[1].lenses).toEqual([multiMount]);
    expect(groups[2].lenses).toEqual([unknownMount]);
  });

  it("groups image formats by canonical order and puts unknown last", () => {
    const fullFrame = entry("full-frame", {
      imageFormat: IMAGE_FORMAT_BY_ID["135-full-frame"],
    });
    const apsC = entry("aps-c", {
      imageFormat: IMAGE_FORMAT_BY_ID["aps-c"],
    });
    const unknownFormat = entry("unknown");

    const groups = groupByImageFormat([unknownFormat, fullFrame, apsC]);

    expect(groups.map((group) => group.id)).toEqual(["aps-c", "135-full-frame", "unknown"]);
    expect(groups[2].lenses).toEqual([unknownFormat]);
  });
});
