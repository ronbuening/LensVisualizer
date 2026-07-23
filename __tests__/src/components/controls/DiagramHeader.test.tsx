// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import DiagramHeader from "../../../../src/components/controls/DiagramHeader.js";
import { authorPathForName } from "../../../../src/utils/catalog/authorCatalog.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { RuntimeLens } from "../../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";

afterEach(() => cleanup());

function lens(overrides: Partial<RuntimeLens> = {}): RuntimeLens {
  const base = buildSimplePositiveElementLens("test-diagram-header");
  return {
    ...base,
    data: {
      ...base.data,
      name: "Header Test Lens",
      subtitle: "50mm f/2 fixture",
      specs: ["50 mm", "f/2", "6 elements"],
    },
    ...overrides,
  } as RuntimeLens;
}

function renderHeader(overrides: Partial<ComponentProps<typeof DiagramHeader>> = {}) {
  const props: ComponentProps<typeof DiagramHeader> = {
    L: lens(),
    t: themes.dark,
    compact: false,
    isWide: true,
    focusT: 0,
    zoomT: 0,
    fNumber: 2,
    showOnAxis: true,
    showOffAxis: "off",
    rayDensity: "normal",
    rayTracksF: false,
    showChromatic: false,
    chromR: true,
    chromG: true,
    chromB: true,
    chromV: false,
    showPupils: false,
    showCardinals: true,
    showCardinalFocal: true,
    showCardinalPrincipal: true,
    showCardinalNodal: false,
    showCardinalDimensions: false,
    showCardinalEfl: true,
    showCardinalBfd: true,
    showCardinalFfd: false,
    showCardinalHiatus: false,
    showCardinalTotalTrack: false,
    headerInfoExpanded: false,
    ...overrides,
  };
  return render(
    <MemoryRouter>
      <DiagramHeader {...props} />
    </MemoryRouter>,
  );
}

describe("DiagramHeader", () => {
  it("renders desktop title, Flickr link, specs, and control groups", () => {
    renderHeader();

    expect(screen.getByText("Header Test Lens")).toBeTruthy();
    expect(screen.getByText("flickr ↗")).toBeTruthy();
    expect(screen.getByText("50 mm")).toBeTruthy();
    expect(screen.getByRole("button", { name: "CARDINALS" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "ON-AXIS" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "COLOR" })).toBeTruthy();
  });

  it("displays structured patent attribution instead of the legacy subtitle", () => {
    const baseLens = lens();
    const structuredLens = {
      ...baseLens,
      data: {
        ...baseLens.data,
        subtitle: "legacy subtitle",
        patentNumber: "US 10,571,651 B2",
        patentAuthors: ["Hideki Sakai", "Aiko Example"],
      },
    } as RuntimeLens;

    renderHeader({ L: structuredLens });

    const authorLink = screen.getByRole("link", { name: "Hideki Sakai" });
    expect(authorLink.getAttribute("href")).toBe(authorPathForName("Hideki Sakai"));
    expect(authorLink.parentElement?.parentElement?.textContent).toBe("US 10,571,651 B2 — Hideki Sakai, Aiko Example");
    expect(screen.queryByRole("link", { name: "Aiko Example" })).toBeNull();
    expect(screen.queryByText("legacy subtitle")).toBeNull();
  });

  it("routes desktop ray-mode and density controls to callbacks", () => {
    const onRayTracksFChange = vi.fn();
    const onRayDensityChange = vi.fn();
    const onShowChromaticChange = vi.fn();
    const onShowOnAxisChange = vi.fn();

    renderHeader({
      onRayTracksFChange,
      onRayDensityChange,
      onShowChromaticChange,
      onShowOnAxisChange,
    });

    fireEvent.click(screen.getByRole("button", { name: /TRACKS FOCUS/ }));
    fireEvent.click(screen.getByRole("button", { name: "DENSE" }));
    fireEvent.click(screen.getByRole("button", { name: "COLOR" }));
    fireEvent.click(screen.getByRole("button", { name: "ON-AXIS" }));

    expect(onRayTracksFChange).toHaveBeenCalledWith(true);
    expect(onRayDensityChange).toHaveBeenCalledWith("dense");
    expect(onShowChromaticChange).toHaveBeenCalledWith(true);
    expect(onShowOnAxisChange).toHaveBeenCalledWith(false);
  });

  it("hides desktop controls and Flickr search in compact comparison headers", () => {
    renderHeader({ compact: true, minHeaderHeight: 88 });

    expect(screen.queryByText("flickr ↗")).toBeNull();
    expect(screen.queryByRole("button", { name: "COLOR" })).toBeNull();
    expect(screen.getByText(/EFL \d+\.\d/)).toBeTruthy();
    expect(screen.getByText("f/2.0")).toBeTruthy();
  });

  it("uses fisheye projection focal length in compact readouts", () => {
    renderHeader({
      compact: true,
      L: lens({
        projection: { kind: "fisheye-equidistant", focalLengthMm: 8, fullFieldDeg: 180 },
        apertureReferenceFocalLength: 7.8,
      } as Partial<RuntimeLens>),
    });

    expect(screen.getByText("Proj f 8.0")).toBeTruthy();
  });

  it("collapses mobile specs until the header toggle is opened", () => {
    const onHeaderInfoExpandedChange = vi.fn();
    renderHeader({
      isWide: false,
      headerInfoExpanded: false,
      onHeaderInfoExpandedChange,
    });

    expect(screen.queryByText("50 mm")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /MORE/ }));
    expect(onHeaderInfoExpandedChange).toHaveBeenCalledWith(true);
  });
});
