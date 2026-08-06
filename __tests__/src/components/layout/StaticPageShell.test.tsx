// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import StaticPageShell from "../../../../src/components/layout/StaticPageShell.js";
import { installMatchMediaMock, renderWithRouter } from "../../../testUtils.js";

describe("StaticPageShell", () => {
  beforeEach(() => {
    localStorage.clear();
    installMatchMediaMock(false);
  });

  it("renders SEO content, breadcrumb navigation, and page content in a main landmark", () => {
    renderWithRouter(
      <StaticPageShell
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Catalog" }]}
        seo={<meta name="test-description" content="Shared shell metadata" />}
      >
        {({ theme, dark, highContrast }) => (
          <p data-theme-state={`${theme.bg}:${dark}:${highContrast}`}>Catalog content</p>
        )}
      </StaticPageShell>,
    );

    expect(document.head.querySelector('meta[name="test-description"]')?.getAttribute("content")).toBe(
      "Shared shell metadata",
    );
    expect(screen.getByRole("navigation").textContent).toContain("Home/Catalog");
    expect(screen.getByRole("link", { name: "Home" }).getAttribute("href")).toBe("/");
    expect(screen.getByRole("main").textContent).toContain("Catalog content");
  });
});
