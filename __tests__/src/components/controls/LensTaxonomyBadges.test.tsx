// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it } from "vitest";
import LensTaxonomyBadges from "../../../../src/components/controls/LensTaxonomyBadges.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { ImageFormatId, LensMountId } from "../../../../src/utils/catalog/lensTaxonomy.js";

afterEach(() => cleanup());

describe("LensTaxonomyBadges", () => {
  it("renders a format on its own when the mount list is empty", () => {
    render(
      <MemoryRouter>
        <LensTaxonomyBadges lensMounts={[]} imageFormat="aps-c" t={themes.lightHC} compact={false} />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(screen.getByRole("link", { name: "Image format: APS-C" }).getAttribute("href")).toBe("/formats/aps-c/");
  });

  it("skips ids outside the taxonomy, inherited object members included", () => {
    const unknown = ["__proto__", "constructor", "toString"] as unknown as LensMountId[];
    const { container } = render(
      <MemoryRouter>
        <LensTaxonomyBadges
          lensMounts={[...unknown, "leica-m"]}
          imageFormat={"constructor" as ImageFormatId}
          t={themes.dark}
          compact={false}
        />
        <LensTaxonomyBadges lensMounts={unknown} imageFormat={"toString" as ImageFormatId} t={themes.dark} compact />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual(["/mounts/leica-m/"]);
    expect(screen.queryByRole("button")).toBeNull();
    expect(container.querySelectorAll('[role="group"]')).toHaveLength(1);
  });

  it("includes canonical links in server-rendered markup with the same initial disclosure as the client", () => {
    const badges = (
      <MemoryRouter>
        <LensTaxonomyBadges
          lensMounts={["leica-m", "nikon-f", "canon-ef"]}
          imageFormat="135-full-frame"
          t={themes.dark}
          compact={false}
        />
      </MemoryRouter>
    );
    const serverMarkup = renderToString(badges);
    expect(serverMarkup).toContain('href="/mounts/leica-m/"');
    expect(serverMarkup).toContain('href="/mounts/nikon-f/"');
    expect(serverMarkup).toContain('href="/formats/135-full-frame/"');
    expect(serverMarkup).toContain('aria-expanded="false"');
    expect(serverMarkup).toContain("+1 more");
    render(badges);
    expect(screen.getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual([
      "/mounts/leica-m/",
      "/mounts/nikon-f/",
      "/formats/135-full-frame/",
    ]);
    expect(screen.getByRole("button", { name: "+1 more" }).getAttribute("aria-expanded")).toBe("false");
  });
});
