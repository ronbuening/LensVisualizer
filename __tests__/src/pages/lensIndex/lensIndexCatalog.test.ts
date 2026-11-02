import { describe, expect, it } from "vitest";
import {
  ALL_CATALOG_ENTRIES,
  buildImageFormatOptions,
  buildMountOptions,
  defaultCustomFilter,
  DEBUG_CATALOG_ENTRIES,
  catalogEntriesForView,
  groupByAssignee,
  groupByImageFormat,
  groupByInventor,
  groupByMount,
  matchesCustomFilter,
} from "../../../../src/pages/lensIndex/catalog.js";
import { CATALOG_KEYS } from "../../../../src/utils/catalog/lensCatalog.js";
import type { CatalogLensEntry, FilterBounds } from "../../../../src/pages/lensIndex/types.js";
import type { LensSummary } from "../../../../src/utils/catalog/lensSummaries.js";
import { IMAGE_FORMAT_BY_ID, LENS_MOUNT_BY_ID } from "../../../../src/utils/catalog/lensTaxonomy.js";

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
    data: { key, name: key.toUpperCase() } as LensSummary,
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
  /* A table lookup of an inherited name used to hand back Object members, which crashed the module-level options. */
  it("leaves ids outside the taxonomy out of the mount and format options", () => {
    const bogus = (id: string) =>
      ({ id, label: id, sortOrder: 1 }) as unknown as CatalogLensEntry["lensMounts"][number];
    const unknownLookups = ["__proto__", "constructor", "toString"].map(
      (id) => (LENS_MOUNT_BY_ID as Record<string, unknown>)[id],
    ) as CatalogLensEntry["lensMounts"];
    const entries = [
      entry("real", { lensMounts: [LENS_MOUNT_BY_ID["sony-fe"]], imageFormat: IMAGE_FORMAT_BY_ID["aps-c"] }),
      entry("bogus", {
        lensMounts: [...unknownLookups, bogus("__proto__"), bogus("constructor"), bogus("toString")],
        imageFormat: bogus("constructor") as unknown as CatalogLensEntry["imageFormat"],
      }),
    ];
    expect(buildMountOptions(entries)).toEqual([{ id: "sony-fe", label: "Sony E", count: 1 }]);
    expect(buildImageFormatOptions(entries)).toEqual([{ id: "aps-c", label: "APS-C", count: 1 }]);
  });

  it("exposes visible, all, and debug catalog entry sets", () => {
    expect(catalogEntriesForView("visible").map((entry) => entry.key)).toEqual(CATALOG_KEYS);
    expect(catalogEntriesForView("all").length).toBe(ALL_CATALOG_ENTRIES.length);
    expect(catalogEntriesForView("debug").map((entry) => entry.key)).toEqual(
      DEBUG_CATALOG_ENTRIES.map((entry) => entry.key),
    );
    expect(catalogEntriesForView("debug").some((entry) => entry.key === "reference-newtonian-side-focus")).toBe(true);
  });

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
  it("duplicates multi-inventor lenses into every inventor group and preserves source-empty states", () => {
    const multiInventor = entry("multi-inventor");
    multiInventor.data.patentAuthors = ["Ada Inventor", "Grace Inventor"];
    const unnamedInventor = entry("unnamed-inventor");
    unnamedInventor.data.patentAuthors = [];
    const missingMetadata = entry("missing-metadata");

    const groups = groupByInventor([missingMetadata, unnamedInventor, multiInventor]);

    expect(groups.map((group) => group.label)).toEqual([
      "Ada Inventor",
      "Grace Inventor",
      "No named inventor",
      "No patent metadata",
    ]);
    expect(groups.map((group) => group.id)).toEqual([
      "named:Ada Inventor",
      "named:Grace Inventor",
      "unnamed",
      "missing-metadata",
    ]);
    expect(groups[0].lenses).toEqual([multiInventor]);
    expect(groups[1].lenses).toEqual([multiInventor]);
    expect(groups[2].lenses).toEqual([unnamedInventor]);
    expect(groups[3].lenses).toEqual([missingMetadata]);
  });

  it("duplicates multi-assignee lenses into every assignee group", () => {
    const multiAssignee = entry("multi-assignee");
    multiAssignee.data.patentAssignees = ["Alpha Optics", "Beta Optics"];

    const groups = groupByAssignee([multiAssignee]);

    expect(groups.map((group) => group.label)).toEqual(["Alpha Optics", "Beta Optics"]);
    expect(groups[0].lenses).toEqual([multiAssignee]);
    expect(groups[1].lenses).toEqual([multiAssignee]);
  });

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
