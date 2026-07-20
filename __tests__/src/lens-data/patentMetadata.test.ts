import { describe, expect, it } from "vitest";
import type { LensDataInput } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensDataInput }>("../../../src/lens-data/**/*.data.ts", { eager: true });

function expectCleanNames(path: string, field: "patentAuthors" | "patentAssignees", values: string[]): void {
  expect(new Set(values).size, `${path}: ${field} entries must be unique`).toBe(values.length);
  for (const value of values) {
    expect(value.trim(), `${path}: ${field} entries must be non-empty and trimmed`).toBe(value);
    expect(value, `${path}: ${field} must list every named party explicitly`).not.toMatch(/\bet al\.?\b/i);
  }
}

function normalizedNameKey(value: string): string {
  return value
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "");
}

function normalizedWordOrderKey(value: string): string {
  return value
    .normalize("NFKD")
    .toLocaleLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .sort()
    .join("");
}

function normalizedAssigneeKey(value: string): string {
  return value
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/\p{M}/gu, "")
    .replace(
      /\b(?:corporation|corp|incorporated|inc|company|co|limited|ltd|kabushiki|kaisha|aktiengesellschaft|kk)\b/gu,
      "",
    )
    .replace(/[^\p{L}\p{N}]/gu, "");
}

describe("lens patent metadata", () => {
  it("declares complete structured metadata on every patent-backed lens", () => {
    const normalizedSpellings = new Map<string, string>();
    const normalizedWordOrders = new Map<string, string>();
    const normalizedAssigneeSpellings = new Map<string, string>();

    for (const [path, { default: data }] of Object.entries(modules)) {
      if (path.includes("/reference/")) continue;

      expect(data.patentNumber?.trim(), `${path}: patentNumber is required`).toBe(data.patentNumber);
      expect(Array.isArray(data.patentAuthors), `${path}: patentAuthors must be an array`).toBe(true);
      expect(Array.isArray(data.patentAssignees), `${path}: patentAssignees must be an array`).toBe(true);

      expectCleanNames(path, "patentAuthors", data.patentAuthors ?? []);
      expectCleanNames(path, "patentAssignees", data.patentAssignees ?? []);

      for (const author of data.patentAuthors ?? []) {
        expect(author.normalize("NFKC"), `${path}: patentAuthors must use normalized Unicode`).toBe(author);
        expect(author, `${path}: patentAuthors must omit honorifics`).not.toMatch(/\b(?:Dr|Prof)\.?\b/i);
        expect(author, `${path}: patentAuthors must use conventional capitalization`).not.toMatch(/\b\p{Lu}{2,}\b/u);
        expect(author, `${path}: patentAuthors must omit parenthetical source annotations`).not.toMatch(/[()]/);

        const spellingKey = normalizedNameKey(author);
        expect(normalizedSpellings.get(spellingKey) ?? author, `${path}: inconsistent author spelling`).toBe(author);
        normalizedSpellings.set(spellingKey, author);

        const wordOrderKey = normalizedWordOrderKey(author);
        expect(normalizedWordOrders.get(wordOrderKey) ?? author, `${path}: inconsistent author name order`).toBe(
          author,
        );
        normalizedWordOrders.set(wordOrderKey, author);
      }

      for (const assignee of data.patentAssignees ?? []) {
        expect(assignee.normalize("NFKC"), `${path}: patentAssignees must use normalized Unicode`).toBe(assignee);
        expect(assignee, `${path}: patentAssignees must use conventional capitalization`).not.toMatch(
          /^[^\p{Ll}]*\p{Lu}[^\p{Ll}]*$/u,
        );
        expect(assignee, `${path}: patentAssignees must omit parenthetical source annotations`).not.toMatch(/[()]/);
        expect(assignee, `${path}: patentAssignees must use canonical corporate suffixes`).not.toMatch(
          /\b(?:Co|Corp|Inc|Ltd|KK)\b(?!\.)/,
        );

        const assigneeKey = normalizedAssigneeKey(assignee);
        expect(
          normalizedAssigneeSpellings.get(assigneeKey) ?? assignee,
          `${path}: inconsistent assignee spelling`,
        ).toBe(assignee);
        normalizedAssigneeSpellings.set(assigneeKey, assignee);
      }
    }
  });

  it("omits patent metadata from synthetic reference fixtures", () => {
    for (const [path, { default: data }] of Object.entries(modules)) {
      if (!path.includes("/reference/")) continue;

      expect(data.patentNumber, `${path}: patentNumber should be omitted`).toBeUndefined();
      expect(data.patentAuthors, `${path}: patentAuthors should be omitted`).toBeUndefined();
      expect(data.patentAssignees, `${path}: patentAssignees should be omitted`).toBeUndefined();
    }
  });
});
