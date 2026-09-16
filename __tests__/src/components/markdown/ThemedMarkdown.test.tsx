// @vitest-environment jsdom

import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ThemedMarkdown from "../../../../src/components/markdown/ThemedMarkdown.js";
import themes from "../../../../src/utils/theme/themes.js";
import { ARTICLE_CONTENT } from "../../../../src/utils/content/homepageContent.js";
import { renderWithRouter } from "../../../testUtils.js";

describe("ThemedMarkdown article links", () => {
  it("opens external and lens links in a new tab while keeping internal articles in place", () => {
    renderWithRouter(
      <ThemedMarkdown
        markdown={[
          "[Manufacturer article](https://example.com/lens-story)",
          "[Series index](/articles/manufacturer-lens-stories)",
          "[Lens diagram](/lens/example-lens)",
        ].join("\n\n")}
        theme={themes.dark}
        variant="article"
      />,
    );

    const manufacturerLink = screen.getByRole("link", { name: "Manufacturer article" });
    expect(manufacturerLink.getAttribute("target")).toBe("_blank");
    expect(manufacturerLink.getAttribute("rel")).toBe("noopener noreferrer");

    expect(screen.getByRole("link", { name: "Series index" }).getAttribute("target")).toBeNull();
    expect(screen.getByRole("link", { name: "Lens diagram" }).getAttribute("target")).toBe("_blank");
  });
});

/* Every `/diagrams/...` image reference in the article corpus substitutes an inline React
 * diagram. Browsers parse the root <svg> `height` attribute as an SVG length, so a CSS-only
 * value such as "auto" logs a console error per figure on every article view; responsive
 * sizing has to come from `width="100%"` plus the viewBox aspect ratio instead. The <figure>
 * must also sit outside the markdown paragraph, since HTML forbids block content in <p>.
 * Sweeping the corpus keeps a newly added figure component from reintroducing either. */
const SVG_LENGTH = /^\d+(\.\d+)?(px|%|em|rem)?$/;

describe("ThemedMarkdown article figures", () => {
  it("renders every article diagram reference as a bare inline <svg> figure sized by width and viewBox", () => {
    const paths = [
      ...new Set(
        Object.values(ARTICLE_CONTENT).flatMap((entry) =>
          Array.from(entry.markdown.matchAll(/\]\((\/diagrams\/[^)]+)\)/g), (m) => m[1]),
        ),
      ),
    ];
    expect(paths.length).toBeGreaterThan(0);

    const { container } = renderWithRouter(
      <ThemedMarkdown markdown={paths.map((p) => `![](${p})`).join("\n\n")} theme={themes.dark} variant="article" />,
    );

    const figures = Array.from(container.querySelectorAll("figure"));
    expect(figures).toHaveLength(paths.length);
    const offenders = figures.flatMap((figure, i) => {
      const svg = figure.querySelector("svg");
      if (!svg) return [`${paths[i]}: rendered no inline <svg>`];
      if (figure.closest("p")) return [`${paths[i]}: <figure> nested inside <p>`];
      const viewBox = svg.getAttribute("viewBox") ?? "";
      const width = svg.getAttribute("width");
      const height = svg.getAttribute("height");
      const sized = /^0 0 \d+ \d+$/.test(viewBox) && width === "100%";
      if (sized && (height === null || SVG_LENGTH.test(height))) return [];
      return [`${paths[i]}: viewBox="${viewBox}" width="${width}" height="${height}"`];
    });
    expect(offenders).toEqual([]);
  });
});
