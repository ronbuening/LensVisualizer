import { describe, it, expect } from "vitest";
import { extractTOCHeadings } from "../src/components/display/ArticleTOC.js";

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

  it("handles tilde-fenced blocks without eating later headings", () => {
    const md = ["## First", "~~~js", "## InsideFence", "~~~", "## Second"].join("\n");
    const headings = extractTOCHeadings(md);
    expect(headings.map((h) => h.text)).toEqual(["First", "Second"]);
  });

  it("strips inline markdown (bold, italic, code, links) from heading text", () => {
    const md = ["## A **bold** `code` [link](/x) word"].join("\n");
    const [h] = extractTOCHeadings(md);
    expect(h.text).toBe("A bold code link word");
  });

  it("produces unique slugs for duplicate heading text", () => {
    const md = ["## Intro", "## Intro", "## Intro"].join("\n");
    const headings = extractTOCHeadings(md);
    expect(headings.map((h) => h.id)).toEqual(["intro", "intro-1", "intro-2"]);
  });

  it("returns an empty array for markdown without h2/h3", () => {
    const md = ["# Only top", "Some paragraph.", "#### Too deep"].join("\n");
    expect(extractTOCHeadings(md)).toEqual([]);
  });

  it("slugs match github-slugger conventions (lowercase, hyphens, punctuation dropped)", () => {
    const md = ["## Hello, World!", "## Stop-Shift Equations"].join("\n");
    const headings = extractTOCHeadings(md);
    expect(headings.map((h) => h.id)).toEqual(["hello-world", "stop-shift-equations"]);
  });
});
