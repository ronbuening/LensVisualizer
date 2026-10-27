// @vitest-environment jsdom
import { runtimeFixtureView } from "../../optics/constructionFixtures.js";
import { constructionFixtureData } from "../../optics/constructionFixtures.js";

import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import type { ComponentProps } from "react";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import DiagramHeader from "../../../../src/components/controls/DiagramHeader.js";
import { authorPathForName } from "../../../../src/utils/catalog/authorCatalog.js";
import { espacenetPatentUrl } from "../../../../src/utils/catalog/patentCatalog.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { PatentExample, RuntimeLens } from "../../../../src/types/optics.js";
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
    ...runtimeFixtureView({
      ...constructionFixtureData(base),
      name: "Header Test Lens",
      subtitle: "50mm f/2 fixture",
      specs: ["50 mm", "f/2", "6 elements"],
    }),
    ...overrides,
  } as RuntimeLens;
}

function lensWithCatalog(catalog: Partial<RuntimeLens["source"]["catalog"]>): RuntimeLens {
  const L = lens();
  return {
    ...L,
    source: {
      ...L.source,
      catalog: { ...L.source.catalog, lensMounts: undefined, imageFormat: undefined, ...catalog },
    },
  };
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
  it("places taxonomy-labelled mount and format links after Flickr with canonical paths", () => {
    renderHeader({ L: lensWithCatalog({ lensMounts: ["leica-m"], imageFormat: "135-full-frame" }) });

    const group = screen.getByRole("group", { name: "Mount and image format" });
    const links = within(group).getAllByRole("link");
    expect(links.map((link) => link.textContent)).toEqual(["Leica M", "135 / Full-frame"]);
    expect(within(group).getByRole("link", { name: "Mount: Leica M" }).getAttribute("href")).toBe("/mounts/leica-m/");
    expect(within(group).getByRole("link", { name: "Image format: 135 / Full-frame" }).getAttribute("href")).toBe(
      "/formats/135-full-frame/",
    );
    expect(group.previousElementSibling).toBe(screen.getByRole("link", { name: "flickr ↗" }));
  });

  it("omits the taxonomy group when neither field is authored", () => {
    renderHeader({ L: lensWithCatalog({}) });
    expect(screen.queryByRole("group", { name: "Mount and image format" })).toBeNull();
  });

  it("does not default an unauthored image format even when mounts are present", () => {
    renderHeader({ L: lensWithCatalog({ lensMounts: ["nikon-f"] }) });
    const group = screen.getByRole("group", { name: "Mount and image format" });
    expect(within(group).getAllByRole("link")).toHaveLength(1);
    expect(within(group).queryByRole("link", { name: /^Image format:/ })).toBeNull();
  });

  it("expands five mounts from two in place and keeps the format last", () => {
    renderHeader({
      L: lensWithCatalog({
        lensMounts: ["leica-m", "nikon-f", "canon-ef", "pentax-k", "sony-fe"],
        imageFormat: "aps-c",
      }),
    });
    const group = screen.getByRole("group", { name: "Mount and image format" });
    expect(
      within(group)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual(["Leica M", "Nikon F", "APS-C"]);
    const more = within(group).getByRole("button", { name: "+3 more" });
    expect(more.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(more);
    expect(more.getAttribute("aria-expanded")).toBe("true");
    expect(
      within(group)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual(["Leica M", "Nikon F", "Canon EF", "Pentax K", "Sony E", "APS-C"]);
    expect(group.lastElementChild).toBe(within(group).getByRole("link", { name: "Image format: APS-C" }));
    fireEvent.click(within(group).getByRole("button", { name: "Show fewer" }));
    expect(more.getAttribute("aria-expanded")).toBe("false");
    expect(within(group).getAllByRole("link")).toHaveLength(3);
  });

  it("renders taxonomy pills after the compact title even with comparison details collapsed", () => {
    renderHeader({
      L: lensWithCatalog({ lensMounts: ["leica-m"], imageFormat: "135-full-frame" }),
      compact: true,
      comparisonDetails: { expanded: false, onChange: vi.fn() },
    });
    const group = screen.getByRole("group", { name: "Mount and image format" });
    expect(within(group).getByRole("link", { name: "Mount: Leica M" })).toBeTruthy();
    expect(within(group).getByRole("link", { name: "Image format: 135 / Full-frame" })).toBeTruthy();
    expect(group.previousElementSibling).toBe(screen.getByRole("heading", { name: "Header Test Lens" }));
    expect(screen.queryByText("flickr ↗")).toBeNull();
  });

  it("renders a compact patent identifier as a link rather than plain text", () => {
    const L = lens();
    renderHeader({
      L: { ...L, source: { ...L.source, source: { ...L.source.source, patentNumber: "CN123456789B", authors: [] } } },
    });
    const link = screen.getByRole("link", { name: "CN123456789B in Espacenet (opens in a new tab)" });
    expect(link.getAttribute("href")).toBe("https://worldwide.espacenet.com/patent/search?q=pn%3DCN123456789B");
    expect(link.getAttribute("target")).toBe("_blank");
  });
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
      ...runtimeFixtureView({
        ...constructionFixtureData(baseLens),
        subtitle: "legacy subtitle",
        patentNumber: "US 10,571,651 B2",
        patentAuthors: ["Hideki Sakai", "Aiko Example"],
      }),
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

  it("follows the patent number with the transcribed example, or sole example when it is unnumbered", () => {
    const baseLens = lens();
    const cases: [PatentExample | undefined, string][] = [
      [{ label: "Example 6", id: "6" }, "US 10,095,009 B2↗, Example 6 — Hideki Sakai"],
      [{ label: "Sole example", id: null }, "US 10,095,009 B2↗, sole example — Hideki Sakai"],
      [undefined, "US 10,095,009 B2↗ — Hideki Sakai"],
    ];
    for (const [patentExample, text] of cases) {
      const L = {
        ...baseLens,
        ...runtimeFixtureView({
          ...constructionFixtureData(baseLens),
          patentNumber: "US 10,095,009 B2",
          patentAuthors: ["Hideki Sakai"],
          ...(patentExample ? { patentExample } : {}),
        }),
      } as RuntimeLens;
      const { unmount } = renderHeader({ L });
      expect(screen.getByRole("link", { name: "Hideki Sakai" }).parentElement?.parentElement?.textContent).toBe(text);
      unmount();
    }
  });

  it("searches photos by the host lens and credits a converter's separate patent", () => {
    const baseLens = lens();
    const converted = (teleconverterPatent: string, teleconverterExample?: PatentExample) =>
      ({
        ...baseLens,
        ...runtimeFixtureView({
          ...constructionFixtureData(baseLens),
          name: "Header Test Lens + Test Converter",
          patentNumber: "US 10,571,651 B2",
          patentExample: { label: "Table 1", id: "1" },
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
            ...(teleconverterExample ? { patentExample: teleconverterExample } : {}),
            patentAuthors: ["Aiko Example"],
          },
        }),
      }) as RuntimeLens;

    const { unmount } = renderHeader({ L: converted("US 9,000,000 B2") });
    expect(screen.getByText("Header Test Lens + Test Converter")).toBeTruthy();
    expect(screen.getByText("flickr ↗").getAttribute("href")).toBe(
      "https://www.flickr.com/search/?text=Header%20Test%20Lens",
    );
    expect(screen.getByRole("link", { name: "US 9,000,000 B2 in Espacenet (opens in a new tab)" })).toBeTruthy();
    /* Inventor names link only when the inventor is in the author catalog, so assert on the rendered line. */
    expect(document.body.textContent).toContain(
      "US 10,571,651 B2↗, Table 1 — Hideki Sakai · TC US 9,000,000 B2↗ — Aiko",
    );
    unmount();

    /* A converter published in the lens's own patent example is not credited twice. */
    for (const example of [undefined, { label: "Table 1", id: "1" }]) {
      const { unmount: close } = renderHeader({ L: converted("US 10,571,651 B2", example) });
      expect(screen.getAllByRole("link", { name: "US 10,571,651 B2 in Espacenet (opens in a new tab)" })).toHaveLength(
        1,
      );
      expect(document.body.textContent).not.toContain("Aiko Example");
      close();
    }

    /* Another example of the same publication is credited on its own line, with its example. */
    renderHeader({ L: converted("US 10,571,651 B2", { label: "Example 1", id: "1" }) });
    expect(document.body.textContent).toContain(" · TC US 10,571,651 B2↗, Example 1 — Aiko Example");
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
