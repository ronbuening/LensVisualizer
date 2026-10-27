import { describe, expect, it } from "vitest";
import { buildPatentDecadeOptions } from "../../../../src/pages/lensIndex/patentDecades.js";
import type { CatalogLensEntry, FilterBounds } from "../../../../src/pages/lensIndex/types.js";

const bounds: FilterBounds = {
  focalMin: 10,
  focalMax: 600,
  apertureMin: 1,
  apertureMax: 11,
  patentYearMin: 1902,
  patentYearMax: 2026,
};

describe("patent decade options", () => {
  it("counts supplied entries within bounds, omits empty decades, and sorts with clamped endpoints", () => {
    const entries = [2026, 1902, null, 1960, 1909, 1969, 2020, 1901, 2027].map(
      (patentYear) => ({ patentYear }) as CatalogLensEntry,
    );
    expect(buildPatentDecadeOptions(entries, bounds)).toEqual([
      { decade: 1900, count: 2, patentYearMin: 1902, patentYearMax: 1909 },
      { decade: 1960, count: 2, patentYearMin: 1960, patentYearMax: 1969 },
      { decade: 2020, count: 2, patentYearMin: 2020, patentYearMax: 2026 },
    ]);
  });

  it("has no decade options for entries without patent years", () => {
    expect(buildPatentDecadeOptions([{ patentYear: null } as CatalogLensEntry], bounds)).toEqual([]);
    expect(buildPatentDecadeOptions([], bounds)).toEqual([]);
  });
});
