// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, within } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router";
import TeleconvertersIndexPage from "../../../src/pages/TeleconvertersIndexPage.js";
import { IMAGE_FORMAT_BY_ID, LENS_MOUNT_BY_ID } from "../../../src/utils/catalog/lensTaxonomy.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({ default: () => null }));
vi.mock("../../../src/generated/teleconverter-summaries.json", () => ({
  default: [
    {
      key: "multi",
      name: "Alpha 2x",
      maker: "Alpha",
      visible: true,
      magnification: 2,
      lensMounts: ["nikon-f", "canon-ef"],
      imageFormat: "135-full-frame",
      patentYear: 2015,
      patentAuthors: ["Inventor B", "Inventor A", "Inventor A"],
      patentAssignees: ["Company B", "Company A"],
      compatibleLensKeys: ["host"],
    },
    {
      key: "early",
      name: "Alpha 1.4x",
      maker: "Alpha",
      visible: true,
      magnification: 1.4,
      lensMounts: ["fujifilm-x"],
      imageFormat: "aps-c",
      patentYear: 1995,
      patentAuthors: ["Inventor A"],
      patentAssignees: ["Company A"],
      compatibleLensKeys: [],
    },
    {
      key: "late",
      name: "Beta 1.4x",
      maker: "Beta",
      visible: true,
      magnification: 1.4,
      lensMounts: ["fujifilm-g"],
      imageFormat: "44x33",
      patentYear: 2020,
      patentAuthors: [],
      patentAssignees: [],
      compatibleLensKeys: [],
    },
    {
      key: "unknown",
      name: "Unconfirmed converter",
      maker: null,
      visible: true,
      magnification: 1.4,
      lensMounts: [],
      compatibleLensKeys: [],
    },
    {
      key: "hidden",
      name: "Hidden converter",
      maker: "Hidden",
      visible: false,
      magnification: 1.4,
      lensMounts: ["nikon-f"],
      compatibleLensKeys: [],
    },
  ],
}));

function NavigationProbe() {
  const { search } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <output aria-label="Current search">{search}</output>
      <button onClick={() => void navigate("?group=mount")}>Navigate to mounts</button>
      <button onClick={() => void navigate(-1)}>Back</button>
    </>
  );
}

function renderIndex(initialEntry = "/teleconverters/") {
  return renderPage(
    <>
      <TeleconvertersIndexPage />
      <NavigationProbe />
    </>,
    { initialEntries: [initialEntry] },
  );
}

function sectionLabels() {
  return screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent);
}

function assertSidebarTargets(label: string) {
  const nav = screen.getByRole("navigation", { name: `Jump to ${label}` });
  for (const link of within(nav).getAllByRole("link")) {
    const target = document.getElementById(link.getAttribute("href")!.slice(1));
    expect(target?.tagName).toBe("SECTION");
  }
  const ids = [...document.querySelectorAll("[id]")].map((element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
}

describe("TeleconvertersIndexPage grouping", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });
  afterEach(cleanup);

  it("defaults to makers, sorts entries by name, and excludes hidden converters", () => {
    renderIndex();
    expect(screen.getByRole("button", { name: "By Maker", pressed: true })).toBeTruthy();
    const alpha = screen.getByRole("heading", { name: /^Alpha\s*\(2\)$/ }).closest("section")!;
    expect(
      within(alpha)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual(["Alpha 1.4x", "Alpha 2x"]);
    expect(screen.getByRole("link", { name: "Alpha 2x" }).getAttribute("href")).toBe("/teleconverters/multi/");
    expect(screen.getByRole("link", { name: "Alpha 2x" }).closest("div")?.id).toBe("teleconverter-multi");
    expect(screen.queryByRole("link", { name: "Hidden converter" })).toBeNull();
    assertSidebarTargets("makers");
  });

  it("lists each converter under every unique inventor and assignee, with separate metadata fallbacks", () => {
    renderIndex();
    fireEvent.click(screen.getByRole("button", { name: "By Inventor" }));
    expect(sectionLabels()).toEqual([
      "Inventor A(2)",
      "Inventor B(1)",
      "No named inventor(1)",
      "No patent metadata(1)",
    ]);
    expect(screen.getAllByRole("link", { name: "Alpha 2x" })).toHaveLength(2);
    assertSidebarTargets("inventors");
    fireEvent.click(screen.getByRole("button", { name: "By Assignee" }));
    expect(sectionLabels()).toEqual([
      "Company A(2)",
      "Company B(1)",
      "No named assignee or applicant(1)",
      "No patent metadata(1)",
    ]);
    expect(screen.getAllByRole("link", { name: "Alpha 2x" })).toHaveLength(2);
    assertSidebarTargets("assignees");
  });

  it("uses canonical mount and format order, including multiple mounts and unknown groups", () => {
    renderIndex();
    fireEvent.click(screen.getByRole("button", { name: "By Mount" }));
    const mounts = screen.getAllByRole("heading", { level: 2 });
    expect(mounts.at(-1)?.textContent).toBe("Unknown Mount(1)");
    for (const id of ["nikon-f", "canon-ef"] as const) {
      const section = mounts
        .find((heading) => heading.textContent === `${LENS_MOUNT_BY_ID[id].label}(1)`)!
        .closest("section")!;
      expect(within(section).getByRole("link", { name: "Alpha 2x" })).toBeTruthy();
    }
    assertSidebarTargets("mounts");
    fireEvent.click(screen.getByRole("button", { name: "By Format" }));
    expect(sectionLabels()).toEqual([
      `${IMAGE_FORMAT_BY_ID["aps-c"].label}(1)`,
      `${IMAGE_FORMAT_BY_ID["135-full-frame"].label}(1)`,
      `${IMAGE_FORMAT_BY_ID["44x33"].label}(1)`,
      "Unknown Format(1)",
    ]);
    assertSidebarTargets("formats");
  });

  it("toggles chronological order, keeps unknown years last, and follows URL navigation", () => {
    renderIndex("/teleconverters/?group=year-desc&keep=value");
    expect(sectionLabels()).toEqual(["2020s(1)", "2010s(1)", "1990s(1)", "Unknown Year(1)"]);
    fireEvent.click(screen.getByRole("button", { name: "By Patent Year ↓" }));
    expect(sectionLabels()).toEqual(["1990s(1)", "2010s(1)", "2020s(1)", "Unknown Year(1)"]);
    expect(screen.getByLabelText("Current search").textContent).toBe("?group=year-asc&keep=value");
    assertSidebarTargets("patent years");
    fireEvent.click(screen.getByRole("button", { name: "Navigate to mounts" }));
    expect(screen.getByRole("button", { name: "By Mount", pressed: true })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(screen.getByRole("button", { name: "By Patent Year ↑", pressed: true })).toBeTruthy();
  });

  it("falls back to maker grouping for an unsupported URL mode", () => {
    renderIndex("/teleconverters/?group=focal");
    expect(screen.getByRole("button", { name: "By Maker", pressed: true })).toBeTruthy();
  });
});
