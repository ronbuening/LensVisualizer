// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import DiagramHeader from "../../../../src/components/controls/DiagramHeader.js";
import { authorPathForName } from "../../../../src/utils/catalog/authorCatalog.js";
import { espacenetPatentUrl } from "../../../../src/utils/catalog/patentCatalog.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { RuntimeLens } from "../../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";

vi.mock("../../../../src/utils/featureFlags.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/utils/featureFlags.js")>();
  return { ...actual, ENABLE_CARDINAL_ELEMENTS: true };
});

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
  it("preserves the same aperture precision as the sliders", () => {
    renderHeader({ compact: true, fNumber: 9.18 });
    expect(screen.getByText("f/9.18")).toBeTruthy();
    expect(screen.queryByText("f/9.2")).toBeNull();
  });
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
    const patentLink = screen.getByRole("link", {
      name: "US 10,571,651 B2 in Espacenet (opens in a new tab)",
    });
    expect(authorLink.getAttribute("href")).toBe(authorPathForName("Hideki Sakai"));
    expect(patentLink.getAttribute("href")).toBe(espacenetPatentUrl("US 10,571,651 B2"));
    expect(patentLink.getAttribute("target")).toBe("_blank");
    expect(authorLink.parentElement?.parentElement?.textContent).toBe("US 10,571,651 B2↗ — Hideki Sakai, Aiko Example");
    expect(screen.queryByRole("link", { name: "Aiko Example" })).toBeNull();
    expect(screen.queryByText("legacy subtitle")).toBeNull();
  });

  it("searches photos by the host lens and credits a converter's separate patent", () => {
    const baseLens = lens();
    const converted = (teleconverterPatent: string) =>
      ({
        ...baseLens,
        data: {
          ...baseLens.data,
          name: "Header Test Lens + Test Converter",
          patentNumber: "US 10,571,651 B2",
          patentAuthors: ["Hideki Sakai"],
          attachedTeleconverter: {
            key: "test-converter",
            name: "Test Converter",
            magnification: 1.4,
            hostKey: "test-diagram-header",
            hostName: "Header Test Lens",
            firstSurfaceLabel: "TC1",
            lastSurfaceLabel: "TC2",
            firstElementId: 2,
            patentNumber: teleconverterPatent,
            patentAuthors: ["Aiko Example"],
          },
        },
      }) as RuntimeLens;

    const { unmount } = renderHeader({ L: converted("US 9,000,000 B2") });
    expect(screen.getByText("Header Test Lens + Test Converter")).toBeTruthy();
    expect(screen.getByText("flickr ↗").getAttribute("href")).toBe(
      "https://www.flickr.com/search/?text=Header%20Test%20Lens",
    );
    expect(screen.getByRole("link", { name: "US 9,000,000 B2 in Espacenet (opens in a new tab)" })).toBeTruthy();
    /* Inventor names link only when the inventor is in the author catalog, so assert on the rendered line. */
    expect(document.body.textContent).toContain(" · TC US 9,000,000 B2↗ — Aiko Example");
    unmount();

    /* A converter published in the lens's own patent is not credited twice. */
    renderHeader({ L: converted("US 10,571,651 B2") });
    expect(screen.getAllByRole("link", { name: "US 10,571,651 B2 in Espacenet (opens in a new tab)" })).toHaveLength(1);
    expect(document.body.textContent).not.toContain("Aiko Example");
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

  it("collapses comparison details while retaining lens identity", () => {
    const onChange = vi.fn();
    renderHeader({ compact: true, comparisonDetails: { expanded: false, onChange } });
    expect(screen.queryByText("6 elements")).toBeNull();
    expect(screen.getByText("Header Test Lens")).toBeTruthy();
    expect(screen.queryByText("f/2.0")).toBeNull();
    expect(screen.queryByText(/EFL \d+\.\d/)).toBeNull();
    const toggle = screen.getByRole("button", { name: /DETAILS/ });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(toggle);
    expect(onChange).toHaveBeenCalledWith(true);
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
