// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useLensIndexFilters from "../../../../src/pages/lensIndex/useLensIndexFilters.js";
import type { FilterBounds, NumericFilterField } from "../../../../src/pages/lensIndex/types.js";

/* The /lenses page tests render the whole catalog; these cover the hook's numeric commit and
 * range-coupling rules directly on synthetic bounds with no entries. */
const bounds: FilterBounds = {
  focalMin: 10,
  focalMax: 600,
  apertureMin: 0.95,
  apertureMax: 11,
  patentYearMin: 1900,
  patentYearMax: 2026,
};

function renderFilters() {
  return renderHook(() => useLensIndexFilters({ entries: [], bounds }));
}

describe("useLensIndexFilters", () => {
  it.each<[NumericFilterField, number, NumericFilterField]>([
    ["focalMin", 400, "focalMax"],
    ["apertureMin", 8, "apertureMax"],
    ["patentYearMin", 2000, "patentYearMax"],
  ])("raising %s past its partner drags the partner along", (minField, value, maxField) => {
    const { result } = renderFilters();
    act(() => result.current.applyNumericField(maxField, value / 2));
    act(() => result.current.applyNumericField(minField, value));
    expect(result.current.customFilter[minField]).toBe(value);
    expect(result.current.customFilter[maxField]).toBe(value);
  });

  it.each<[NumericFilterField, number, NumericFilterField]>([
    ["focalMax", 20, "focalMin"],
    ["apertureMax", 1.4, "apertureMin"],
    ["patentYearMax", 1950, "patentYearMin"],
  ])("lowering %s below its partner drags the partner along", (maxField, value, minField) => {
    const { result } = renderFilters();
    act(() => result.current.applyNumericField(minField, value * 2));
    act(() => result.current.applyNumericField(maxField, value));
    expect(result.current.customFilter[maxField]).toBe(value);
    expect(result.current.customFilter[minField]).toBe(value);
  });

  it.each(["", "   ", "f/2"])("discards the draft %j on commit and restores the committed value", (draft) => {
    const { result } = renderFilters();
    act(() => result.current.handleNumericInputChange("focalMin", draft));
    act(() => result.current.commitNumericInput("focalMin"));
    expect(result.current.customFilter.focalMin).toBe(bounds.focalMin);
    expect(result.current.filterInputValues.focalMin).not.toBe(draft);
    expect(result.current.activeFilters).toBe(false);
  });

  it("clamps and step-snaps a committed draft to the field's bounds", () => {
    const { result } = renderFilters();
    act(() => result.current.handleNumericInputChange("focalMax", "9000"));
    act(() => result.current.commitNumericInput("focalMax"));
    expect(result.current.customFilter.focalMax).toBe(bounds.focalMax);
    act(() => result.current.handleNumericInputChange("apertureMin", "1.43"));
    act(() => result.current.commitNumericInput("apertureMin"));
    expect(result.current.customFilter.apertureMin).toBe(1.45);
    expect(result.current.activeFilters).toBe(true);
  });

  it("clears mount and format selections independently of the other filters", () => {
    const { result } = renderFilters();
    act(() => {
      result.current.toggleMount("nikon-z");
      result.current.toggleImageFormat("135-full-frame");
      result.current.toggleMaker("nikon");
    });
    act(() => result.current.clearMountSelection());
    expect(result.current.customFilter.lensMountIds).toEqual([]);
    expect(result.current.customFilter.imageFormatIds).toEqual(["135-full-frame"]);
    act(() => result.current.clearImageFormatSelection());
    expect(result.current.customFilter.imageFormatIds).toEqual([]);
    expect(result.current.customFilter.makerSlugs).toEqual(["nikon"]);
  });
});
