// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, within } from "@testing-library/react";
import { useLocation } from "react-router";
import LensIndexPage from "../../../../src/pages/LensIndexPage.js";
import { buildFilterBounds, catalogEntriesForView, FILTER_BOUNDS } from "../../../../src/pages/lensIndex/catalog.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../../testUtils.js";

vi.mock("../../../../src/components/SEOHead.js", () => ({ default: () => null }));

function LocationProbe() {
  return <output data-testid="location">{useLocation().search}</output>;
}

function renderFilters(search = "?filters=open") {
  renderPage(
    <>
      <LensIndexPage />
      <LocationProbe />
    </>,
    { initialEntries: [`/lenses${search}`] },
  );
  return within(screen.getByRole("group", { name: "Patent decade" }));
}

function expectRange(min: number, max: number) {
  expect((screen.getByLabelText("Minimum patent year value") as HTMLInputElement).value).toBe(String(min));
  expect((screen.getByLabelText("Maximum patent year value") as HTMLInputElement).value).toBe(String(max));
  expect((screen.getByLabelText("Minimum patent year slider") as HTMLInputElement).value).toBe(String(min));
  expect((screen.getByLabelText("Maximum patent year slider") as HTMLInputElement).value).toBe(String(max));
  const params = new URLSearchParams(screen.getByTestId("location").textContent ?? "");
  expect(params.get("yearMin")).toBe(min === FILTER_BOUNDS.patentYearMin ? null : String(min));
  expect(params.get("yearMax")).toBe(max === FILTER_BOUNDS.patentYearMax ? null : String(max));
  expect([...params.keys()].sort()).toEqual(
    [
      ...(min === FILTER_BOUNDS.patentYearMin && max === FILTER_BOUNDS.patentYearMax ? ["filters"] : []),
      ...(min === FILTER_BOUNDS.patentYearMin ? [] : ["yearMin"]),
      ...(max === FILTER_BOUNDS.patentYearMax ? [] : ["yearMax"]),
    ].sort(),
  );
}

describe("patent decade chips", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });
  afterEach(cleanup);

  it.each(["visible", "all", "debug"] as const)("uses the same unfiltered %s entry set as maker counts", (view) => {
    const chips = renderFilters(`?filters=open&view=${view}`);
    const entries = catalogEntriesForView(view);
    const bounds = buildFilterBounds(entries);
    const counts = new Map<number, number>();
    for (const { patentYear } of entries) {
      if (patentYear === null || patentYear < bounds.patentYearMin || patentYear > bounds.patentYearMax) continue;
      const decade = Math.floor(patentYear / 10) * 10;
      counts.set(decade, (counts.get(decade) ?? 0) + 1);
    }
    const labels = [
      "All years",
      ...Array.from(counts)
        .sort(([a], [b]) => a - b)
        .map(([decade, count]) => `${decade}s (${count})`),
    ];
    expect(chips.getAllByRole("button").map((button) => button.textContent)).toEqual(labels);
    const maker = entries[0].maker;
    fireEvent.click(
      screen.getByRole("button", {
        name: `${maker.display} (${entries.filter((entry) => entry.maker.slug === maker.slug).length})`,
      }),
    );
    expect(chips.getAllByRole("button").map((button) => button.textContent)).toEqual(labels);
  });

  it("sets both endpoints and URL params when switching between clamped end decades, and resets", () => {
    const chips = renderFilters();
    const firstDecade = Math.floor(FILTER_BOUNDS.patentYearMin / 10) * 10;
    const lastDecade = Math.floor(FILTER_BOUNDS.patentYearMax / 10) * 10;
    const first = chips.getByRole("button", { name: new RegExp(`^${firstDecade}s`) });
    const last = chips.getByRole("button", { name: new RegExp(`^${lastDecade}s`) });
    const all = chips.getByRole("button", { name: "All years" });
    expect(all.getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(last);
    expectRange(lastDecade, FILTER_BOUNDS.patentYearMax);
    expect(last.getAttribute("aria-pressed")).toBe("true");
    expect(all.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(first);
    expectRange(FILTER_BOUNDS.patentYearMin, firstDecade + 9);
    expect(first.getAttribute("aria-pressed")).toBe("true");
    expect(last.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(first);
    expectRange(FILTER_BOUNDS.patentYearMin, FILTER_BOUNDS.patentYearMax);
    expect(all.getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(last);
    fireEvent.click(all);
    expectRange(FILTER_BOUNDS.patentYearMin, FILTER_BOUNDS.patentYearMax);
    expect(last.getAttribute("aria-pressed")).toBe("false");
    expect(all.getAttribute("aria-pressed")).toBe("true");
  });

  it("recognizes an existing decade link and clears chip selection for custom slider and typed ranges", () => {
    const chips = renderFilters("?filters=open&yearMin=1960&yearMax=1969");
    const decade = chips.getByRole("button", { name: /^1960s/ });
    expect(decade.getAttribute("aria-pressed")).toBe("true");
    fireEvent.change(screen.getByLabelText("Minimum patent year slider"), { target: { value: "1961" } });
    expect(chips.queryByRole("button", { pressed: true })).toBeNull();
    fireEvent.click(decade);
    const input = screen.getByLabelText("Maximum patent year value");
    fireEvent.change(input, { target: { value: "1968" } });
    fireEvent.blur(input);
    expectRange(1960, 1968);
    expect(chips.queryByRole("button", { pressed: true })).toBeNull();
  });
});
