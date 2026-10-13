// @vitest-environment jsdom

import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ThemedMarkdown from "../../../../src/components/markdown/ThemedMarkdown.js";
import themes from "../../../../src/utils/theme/themes.js";
import { ARTICLE_CONTENT } from "../../../../src/utils/content/homepageContent.js";
import { renderWithRouter } from "../../../testUtils.js";

describe("ThemedMarkdown article links", () => {
  it("preserves article-to-lens referrers while keeping external links private and articles in place", () => {
    renderWithRouter(
      <ThemedMarkdown
        markdown={[
          "[Manufacturer article](https://example.com/lens-story)",
          "[Series index](/articles/manufacturer-lens-stories)",
          "[Lens diagram](/lens/example-lens)",
          "[Lens state](/lens/example-lens?v=1#diagram)",
          "[Absolute lens](https://surfaceandstop.com/lens/example-lens?v=1#diagram)",
          "https://surfaceandstop.com/lens/cited-lens/",
          "[External lens](https://example.com/lens/example-lens)",
          "[Lookalike host](https://surfaceandstop.com.example.org/lens/example-lens)",
          "[Article section](#section)",
        ].join("\n\n")}
        theme={themes.dark}
        variant="article"
      />,
    );

    const manufacturerLink = screen.getByRole("link", { name: "Manufacturer article" });
    expect(manufacturerLink.getAttribute("target")).toBe("_blank");
    expect(manufacturerLink.getAttribute("rel")).toBe("noopener noreferrer");

    const seriesLink = screen.getByRole("link", { name: "Series index" });
    expect(seriesLink.getAttribute("href")).toBe("/articles/manufacturer-lens-stories/");
    expect(seriesLink.getAttribute("target")).toBeNull();

    for (const [name, href] of [
      ["Lens diagram", "/lens/example-lens/"],
      ["Lens state", "/lens/example-lens/?v=1#diagram"],
      ["Absolute lens", "https://surfaceandstop.com/lens/example-lens/?v=1#diagram"],
      ["https://surfaceandstop.com/lens/cited-lens/", "https://surfaceandstop.com/lens/cited-lens/"],
    ]) {
      const lensLink = screen.getByRole("link", { name });
      expect(lensLink.getAttribute("href")).toBe(href);
      expect(lensLink.getAttribute("target")).toBe("_blank");
      expect(lensLink.getAttribute("rel")).toBe("noopener");
      expect(lensLink.getAttribute("referrerpolicy")).toBeNull();
    }

    for (const name of ["External lens", "Lookalike host"]) {
      const externalLensLink = screen.getByRole("link", { name });
      expect(externalLensLink.getAttribute("target")).toBe("_blank");
      expect(externalLensLink.getAttribute("rel")).toBe("noopener noreferrer");
    }

    const sectionLink = screen.getByRole("link", { name: "Article section" });
    expect(sectionLink.getAttribute("href")).toBe("#section");
    expect(sectionLink.getAttribute("target")).toBeNull();
  });

  it("keeps the existing referrer policy for lens-description links", () => {
    renderWithRouter(
      <ThemedMarkdown markdown="[Related lens](/lens/example-lens)" theme={themes.dark} variant="description" />,
    );

    const descriptionLink = screen.getByRole("link", { name: "Related lens" });
    expect(descriptionLink.getAttribute("href")).toBe("/lens/example-lens");
    expect(descriptionLink.getAttribute("target")).toBe("_blank");
    expect(descriptionLink.getAttribute("rel")).toBe("noopener noreferrer");
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
