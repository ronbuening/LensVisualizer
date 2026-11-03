// @vitest-environment jsdom

import { readFileSync, readdirSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { screen } from "@testing-library/react";
import katex from "katex";
import type { Nodes } from "mdast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFootnoteFromMarkdown } from "mdast-util-gfm-footnote";
import { gfmTableFromMarkdown } from "mdast-util-gfm-table";
import { mathFromMarkdown } from "mdast-util-math";
import { gfmFootnote } from "micromark-extension-gfm-footnote";
import { gfmTable } from "micromark-extension-gfm-table";
import { math } from "micromark-extension-math";
import { describe, expect, it } from "vitest";
import ThemedMarkdown from "../../../../src/components/markdown/ThemedMarkdown.js";
import themes from "../../../../src/utils/theme/themes.js";
import { ARTICLE_CONTENT } from "../../../../src/utils/content/homepageContent.js";
import { stripFrontmatter } from "../../../../src/utils/content/stripFrontmatter.js";
import { renderWithRouter } from "../../../testUtils.js";
import { replaceTextForTranslation } from "../../../translationTestUtils.js";

describe("ThemedMarkdown article links", () => {
  it.each(["article", "description"] as const)(
    "updates translated rich %s text without losing links or math",
    (variant) => {
      const first = "First **bold** text with [a link](https://example.com).\n\n$ x^2 $";
      const second = "Changed *emphasis* with [another link](https://example.org).\n\n$ x^3 $";
      const { container, rerender } = renderWithRouter(
        <ThemedMarkdown markdown={first} theme={themes.dark} variant={variant} />,
      );
      expect(replaceTextForTranslation(container)).toBeGreaterThan(0);
      rerender(<ThemedMarkdown markdown={second} theme={themes.dark} variant={variant} />);
      expect(container.textContent).toContain("Changed emphasis with another link.");
      expect(container.textContent).not.toContain("First bold text");
      expect(screen.getByRole("link", { name: "another link" }).getAttribute("href")).toBe("https://example.org");
      expect(container.querySelector(".katex")).not.toBeNull();
      replaceTextForTranslation(container);
      rerender(<ThemedMarkdown markdown="Only plain text remains." theme={themes.dark} variant={variant} />);
      expect(container.textContent).toBe("Only plain text remains.");
      expect(screen.queryByRole("link", { name: "another link" })).toBeNull();
    },
  );

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

/* Vite rewrites new URL("<literal>", import.meta.url) into a served asset URL under jsdom, so build the path. */
const SRC = join(dirname(fileURLToPath(import.meta.url)), "../../../../src");

function markdownFiles(dir: string, keep: (name: string) => boolean): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return markdownFiles(path, keep);
    return keep(name) ? [path] : [];
  });
}

/* rehype-katex renders remark-math's $…$ and $$…$$ nodes, and a ```math code fence as display math. */
const MATH_FENCE = /^ {0,3}(`{3,}|~{3,})[ \t]*math\b/m;

function mathNodes(node: Nodes): { value: string; display: boolean; line: number }[] {
  const line = node.position?.start.line ?? 0;
  if (node.type === "math" || node.type === "inlineMath") {
    return [{ value: node.value, display: node.type === "math", line }];
  }
  if (node.type === "code" && node.lang === "math") return [{ value: node.value, display: true, line }];
  return "children" in node ? node.children.flatMap(mathNodes) : [];
}

function strictKatexError(tex: string, displayMode: boolean): string | null {
  try {
    katex.renderToString(tex, { displayMode, throwOnError: true, strict: "error" });
    return null;
  } catch (error) {
    return error instanceof Error ? error.message : String(error);
  }
}

describe("ThemedMarkdown math", () => {
  /* ThemedMarkdown imports the root package's katex stylesheet, but rehype-katex renders with whichever katex it
   * resolves. KaTeX renames internal classes between minors (0.18 prefixed base, strut and sizing), so a nested older
   * copy emits markup the stylesheet no longer styles and sub- and superscripts render at full size. The katex entry
   * in package.json "overrides" keeps a single copy. */
  it("renders math with the KaTeX release whose stylesheet it imports", () => {
    const fromProject = createRequire(import.meta.url);
    const fromRehypeKatex = createRequire(fromProject.resolve("rehype-katex"));
    const version = (load: typeof fromProject) => (load("katex/package.json") as { version: string }).version;
    expect(version(fromRehypeKatex)).toBe(version(fromProject));
  });

  /* rehype-katex shows a formula KaTeX cannot parse as red source text. A note written through a string that
   * evaluated backslash escapes loses commands quietly: \frac and \approx become control characters KaTeX rejects,
   * \tan becomes a tab KaTeX reads as a space (f \tan ω renders as "fan ω"), and \nu becomes a line break, which can
   * also split a table row. Inline math never needs a line break, so one there is an evaluated \n. Strict mode also
   * refuses Unicode dashes, primes and Greek letters in math, which KaTeX can only draw from a fallback font. */
  it("parses every formula in the articles and lens notes strictly", () => {
    const files = [
      ...markdownFiles(join(SRC, "content"), (name) => name.endsWith(".md") && name !== "readme.md"),
      ...markdownFiles(join(SRC, "lens-data"), (name) => name.endsWith(".analysis.md")),
    ];
    const errors = new Map<string, string | null>();
    const offenders: string[] = [];
    let formulas = 0;
    for (const file of files) {
      const raw = readFileSync(file, "utf-8");
      /* Parsing all ~24 MB takes most of a minute. A file with no $ or math fence holds no formula, and of GFM only
       * tables (cells split on pipes) and footnotes (definitions hold math) move where formulas fall; the rest of
       * GFM finds the same formulas at about 1.6 times the cost. */
      if (!raw.includes("$") && !MATH_FENCE.test(raw)) continue;
      const body = stripFrontmatter(raw);
      const frontmatterLines = raw.slice(0, raw.length - body.length).split("\n").length - 1;
      const tree = fromMarkdown(body, {
        extensions: [gfmTable(), gfmFootnote(), math()],
        mdastExtensions: [gfmTableFromMarkdown(), gfmFootnoteFromMarkdown(), mathFromMarkdown()],
      });
      for (const { value, display, line } of mathNodes(tree)) {
        formulas++;
        const where = `${relative(SRC, file)}:${line + frontmatterLines}`;
        const control = [...value].find((ch) => ch.charCodeAt(0) < 0x20 && !(display && ch === "\n"));
        if (control) offenders.push(`${where}: U+${control.charCodeAt(0).toString(16).padStart(4, "0")} in math`);
        const key = `${display}:${value}`;
        if (!errors.has(key)) errors.set(key, strictKatexError(value, display));
        const error = errors.get(key);
        if (error) offenders.push(`${where}: ${error}`);
      }
    }
    expect(files.length).toBeGreaterThan(1000);
    expect(formulas).toBeGreaterThan(10_000);
    expect(offenders).toEqual([]);
  }, 120_000);
});
