import { describe, expect, it } from "vitest";
import {
  ARTICLE_SCROLL_MARGIN_TOP,
  TOC_OBSERVER_BOTTOM_ROOT_MARGIN,
  TOC_OBSERVER_THRESHOLDS,
  extractTOCHeadings,
  resolveActiveHeadingId,
} from "../../../../src/components/display/ArticleTOC.js";

describe("resolveActiveHeadingId", () => {
  it("returns first heading when no headings intersect activation line", () => {
    const ids = ["intro", "details", "summary"];
    const tops = new Map([
      ["intro", 140],
      ["details", 300],
      ["summary", 520],
    ]);

    const active = resolveActiveHeadingId(ids, 80, (id) => tops.get(id) ?? null);
    expect(active).toBe("intro");
  });

  it("tracks fast-scroll transitions to later headings", () => {
    const ids = ["intro", "details", "summary"];
    const tops = new Map([
      ["intro", -400],
      ["details", -8],
      ["summary", 180],
    ]);

    const active = resolveActiveHeadingId(ids, 80, (id) => tops.get(id) ?? null);
    expect(active).toBe("details");
  });

  it("selects final heading near page bottom", () => {
    const ids = ["intro", "details", "summary"];
    const tops = new Map([
      ["intro", -700],
      ["details", -250],
      ["summary", 50],
    ]);

    const active = resolveActiveHeadingId(ids, 80, (id) => tops.get(id) ?? null);
    expect(active).toBe("summary");
  });

  it("uses observer config aligned with markdown heading scroll margin behavior", () => {
    expect(ARTICLE_SCROLL_MARGIN_TOP).toBe(88);
    expect(TOC_OBSERVER_BOTTOM_ROOT_MARGIN).toBe("-35%");
    expect(TOC_OBSERVER_THRESHOLDS).toEqual([0, 0.1, 0.25, 0.5]);
  });
});

describe("extractTOCHeadings", () => {
  it("extracts h2 and h3 headings and ignores h1/h4+", () => {
    const md = ["# Top", "## Section A", "### Sub A1", "#### too deep", "## Section B", ""].join("\n");
    const headings = extractTOCHeadings(md);
    expect(headings.map((h) => h.text)).toEqual(["Section A", "Sub A1", "Section B"]);
    expect(headings.map((h) => h.level)).toEqual([2, 3, 2]);
  });

  it("skips headings inside fenced code blocks", () => {
    const md = ["## Real", "```", "## Fake", "```", "## AlsoReal"].join("\n");
    const headings = extractTOCHeadings(md);
    expect(headings.map((h) => h.text)).toEqual(["Real", "AlsoReal"]);
  });

  it("extracts heading text with inline HTML and entities", () => {
    const md = ["## <em>Alpha</em> &amp; <span>Beta</span>"].join("\n");
    const [heading] = extractTOCHeadings(md);
    expect(heading.text).toBe("Alpha & Beta");
    expect(heading.id).toBe("alpha--beta");
  });

  it("extracts emphasis + links + code combinations", () => {
    const md = ["## A *bold* [linked **phrase**](/x) with `code`"].join("\n");
    const [heading] = extractTOCHeadings(md);
    expect(heading.text).toBe("A bold linked phrase with code");
    expect(heading.id).toBe("a-bold-linked-phrase-with-code");
  });

  it("produces unique slugs for duplicate complex heading text", () => {
    const md = [
      "## [Lens](/lens) *Field* `Notes`",
      "## [Lens](/lens) *Field* `Notes`",
      "## [Lens](/lens) *Field* `Notes`",
    ].join("\n");
    const headings = extractTOCHeadings(md);
    expect(headings.map((h) => h.id)).toEqual(["lens-field-notes", "lens-field-notes-1", "lens-field-notes-2"]);
  });

  it("handles non-Latin punctuation in slugs", () => {
    const md = ["## 你好，世界！", "## Привет, мир!", "## مرحبًا، عالم!"];
    const headings = extractTOCHeadings(md.join("\n"));
    expect(headings.map((h) => h.id)).toEqual(["你好世界", "привет-мир", "مرحبًا-عالم"]);
  });

  it("returns an empty array for markdown without h2/h3", () => {
    const md = ["# Only top", "Some paragraph.", "#### Too deep"].join("\n");
    expect(extractTOCHeadings(md)).toEqual([]);
  });
});
