/**
 * Shareable /lenses URL contract: parse↔serialize round trips, malformed-input
 * fallbacks, and the navigation validator that guards lens-library return links.
 */

import { describe, expect, it } from "vitest";
import {
  isSameCustomFilter,
  isValidLensLibraryReturnPath,
  parseLensIndexUrlState,
  parseLensIndexViewMode,
  serializeLensIndexUrlState,
} from "../../../../src/pages/lensIndex/urlState.js";
import { defaultCustomFilter } from "../../../../src/pages/lensIndex/catalog.js";
import type { CustomFilterState, FilterBounds } from "../../../../src/pages/lensIndex/types.js";

/* Fixed bounds keep these assertions independent of catalog growth. */
const BOUNDS: FilterBounds = {
  focalMin: 6,
  focalMax: 1200,
  apertureMin: 0.95,
  apertureMax: 22,
  patentYearMin: 1900,
  patentYearMax: 2026,
};

const KNOWN_MAKERS = ["canon", "nikon", "zeiss"];

function parse(search: string) {
  return parseLensIndexUrlState(search, BOUNDS, KNOWN_MAKERS);
}

function serialize(state: ReturnType<typeof parse>) {
  return serializeLensIndexUrlState({ ...state, bounds: BOUNDS });
}

describe("parseLensIndexViewMode", () => {
  it("accepts the three known view modes", () => {
    expect(parseLensIndexViewMode("?view=visible")).toBe("visible");
    expect(parseLensIndexViewMode("?view=all")).toBe("all");
    expect(parseLensIndexViewMode("?view=debug")).toBe("debug");
  });

  it("falls back to visible for missing or unknown modes", () => {
    expect(parseLensIndexViewMode("")).toBe("visible");
    expect(parseLensIndexViewMode("?view=")).toBe("visible");
    expect(parseLensIndexViewMode("?view=secret")).toBe("visible");
    expect(parseLensIndexViewMode("?view=VISIBLE")).toBe("visible");
  });
});

describe("parseLensIndexUrlState", () => {
  it("defaults every field on an empty query", () => {
    const state = parse("");
    expect(state.viewMode).toBe("visible");
    expect(state.groupMode).toBe("maker");
    expect(state.filterOpen).toBe(false);
    expect(state.customFilter).toEqual(defaultCustomFilter(BOUNDS));
  });

  it("parses each group mode", () => {
    for (const [queryValue, groupMode] of [
      ["maker", "maker"],
      ["inventor", "author"],
      ["assignee", "assignee"],
      ["focal", "focal"],
      ["year-asc", "year-asc"],
      ["year-desc", "year-desc"],
      ["mount", "mount"],
      ["format", "format"],
    ] as const) {
      expect(parse(`?group=${queryValue}`).groupMode).toBe(groupMode);
    }
  });

  it("preserves the public inventor query spelling for the internal author role", () => {
    expect(serialize(parse("?group=inventor"))).toBe("group=inventor");
  });

  it("drops unknown makers, mounts, and formats", () => {
    const state = parse("?makers=canon,not-a-maker&mounts=canon-rf,not-a-mount&formats=aps-c,not-a-format");
    expect(state.customFilter.makerSlugs).toEqual(["canon"]);
    expect(state.customFilter.lensMountIds).toEqual(["canon-rf"]);
    expect(state.customFilter.imageFormatIds).toEqual(["aps-c"]);
  });

  it("deduplicates and orders list params deterministically", () => {
    const state = parse("?makers=nikon,canon,nikon&mounts=nikon-z,canon-rf,nikon-z");
    expect(state.customFilter.makerSlugs).toEqual(["canon", "nikon"]);
    // Mounts sort by taxonomy sortOrder, not alphabetically.
    expect(state.customFilter.lensMountIds).toEqual(["canon-rf", "nikon-z"]);
  });

  it("clamps numeric params into the supplied bounds", () => {
    const state = parse("?focalMin=-40&focalMax=99999&yearMin=1500&yearMax=3000");
    expect(state.customFilter.focalMin).toBe(BOUNDS.focalMin);
    expect(state.customFilter.focalMax).toBe(BOUNDS.focalMax);
    expect(state.customFilter.patentYearMin).toBe(BOUNDS.patentYearMin);
    expect(state.customFilter.patentYearMax).toBe(BOUNDS.patentYearMax);
  });

  it("falls back to defaults for non-numeric and empty numeric params", () => {
    const state = parse("?focalMin=abc&focalMax=&apertureMin=NaN&yearMin=Infinity");
    expect(state.customFilter).toEqual(defaultCustomFilter(BOUNDS));
  });

  it("normalizes swapped min/max pairs", () => {
    const state = parse("?focalMin=200&focalMax=50&apertureMin=8&apertureMax=2&yearMin=2020&yearMax=1980");
    expect([state.customFilter.focalMin, state.customFilter.focalMax]).toEqual([50, 200]);
    expect([state.customFilter.apertureMin, state.customFilter.apertureMax]).toEqual([2, 8]);
    expect([state.customFilter.patentYearMin, state.customFilter.patentYearMax]).toEqual([1980, 2020]);
  });

  it("opens the filter panel explicitly or when a filter is active", () => {
    expect(parse("?filters=open").filterOpen).toBe(true);
    expect(parse("?makers=canon").filterOpen).toBe(true);
    expect(parse("?filters=closed").filterOpen).toBe(false);
  });
});

describe("serializeLensIndexUrlState", () => {
  it("emits nothing for default state", () => {
    expect(serialize(parse(""))).toBe("");
  });

  it("omits numeric params that equal their bound", () => {
    const query = serialize(parse("?focalMin=6&focalMax=1200"));
    expect(query).toBe("");
  });

  it("round-trips every field", () => {
    const search =
      "?group=inventor&view=debug&makers=canon,nikon&mounts=canon-rf,nikon-z&formats=aps-c&focalMin=24&focalMax=200&apertureMin=1.4&apertureMax=5.6&yearMin=1970&yearMax=2020";
    const parsed = parse(search);
    const reparsed = parse(`?${serialize(parsed)}`);

    expect(reparsed.viewMode).toBe(parsed.viewMode);
    expect(reparsed.groupMode).toBe(parsed.groupMode);
    expect(reparsed.filterOpen).toBe(parsed.filterOpen);
    expect(isSameCustomFilter(reparsed.customFilter, parsed.customFilter)).toBe(true);
  });

  it("round-trips the explicit filters=open flag with no active filters", () => {
    const parsed = parse("?filters=open");
    expect(serialize(parsed)).toContain("filters=open");
    expect(parse(`?${serialize(parsed)}`).filterOpen).toBe(true);
  });
});

describe("isSameCustomFilter", () => {
  const base = defaultCustomFilter(BOUNDS);

  it("treats an identical filter as equal", () => {
    expect(isSameCustomFilter(base, { ...base })).toBe(true);
  });

  it.each<[string, Partial<CustomFilterState>]>([
    ["focalMin", { focalMin: base.focalMin + 1 }],
    ["focalMax", { focalMax: base.focalMax - 1 }],
    ["apertureMin", { apertureMin: base.apertureMin + 0.05 }],
    ["apertureMax", { apertureMax: base.apertureMax - 0.05 }],
    ["patentYearMin", { patentYearMin: base.patentYearMin + 1 }],
    ["patentYearMax", { patentYearMax: base.patentYearMax - 1 }],
    ["makerSlugs", { makerSlugs: ["canon"] }],
    ["lensMountIds", { lensMountIds: ["canon-rf"] }],
    ["imageFormatIds", { imageFormatIds: ["aps-c"] }],
  ])("detects a change in %s", (_field, patch) => {
    expect(isSameCustomFilter(base, { ...base, ...patch })).toBe(false);
  });
});

describe("isValidLensLibraryReturnPath", () => {
  it.each(["/lenses", "/lenses/", "/lenses?group=inventor", "/lenses?makers=canon&focalMin=24", "/lenses?view=debug"])(
    "accepts %s",
    (path) => {
      expect(isValidLensLibraryReturnPath(path, BOUNDS)).toBe(true);
    },
  );

  it.each([
    ["absolute external URL", "https://evil.example/lenses"],
    ["protocol-relative host", "//evil.example/lenses"],
    ["backslash host", "\\\\evil.example/lenses"],
    ["path outside the library", "/authors/josef-weiss"],
    ["library-prefixed sibling route", "/lenses-extra"],
    ["nested library path", "/lenses/canon"],
    ["traversal that normalizes out of the library", "/lenses/../authors"],
    ["traversal to the site root", "/lenses/.."],
    ["empty path", ""],
    ["bare query", "?group=maker"],
    ["javascript scheme", "javascript:alert(1)"],
  ])("rejects %s", (_label, path) => {
    expect(isValidLensLibraryReturnPath(path, BOUNDS)).toBe(false);
  });
});
