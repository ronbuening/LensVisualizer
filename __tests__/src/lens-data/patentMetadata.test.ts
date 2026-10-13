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

/** A design f-number within this share of the nominal one is the same aperture printed to different precision. */
const APERTURE_ROUNDING = 0.005;

/**
 * Lenses whose stop still opens wider than their source design f-number, each queued in Section H of
 * agent_docs/sd-audit-queue.md. The sweep below compares for equality, so a lens that is fixed must leave this list
 * and no lens may join it.
 */
const NOMINAL_FASTER_THAN_DESIGN: readonly string[] = [
  "canon-ef-28-105mm-f35-45-ii-usm",
  "canon-ef-28-135mm-f3-5-5-6-is-usm",
  "canon-ef-28-70mm-f35-45-ii",
  "canon-ef-70-300mm-f4-56-is-usm",
  "canon-efs-10-18-f4556-is-stm",
  "canon-powershot-g1-x-mark-ii-125-625-f20-39",
  "canon-powershot-g7x-8-8-36-8-f1-8-2-8",
  "canon-tse-50f28l-macro",
  "minolta-af-35-105mm-f3-5-4-5-v2",
  "nikkor-z-100-400-f4556",
  "nikon-1-nikkor-vr-10-30-f35-56",
  "nikon-fuwatto-soft-90mm-f48",
  "nikon-z-dx-16-50-f3563-vr",
  "nikon-z-dx-18-140-f35-63-vr",
  "olympus-zuiko-85mm-f2",
  "olympus-zuiko-auto-macro-90f2",
  "pentax-da-70mm-f24-limited",
  "samyang-af-35-150mm-f2-28",
  "sony-e-18-55mm-f35-56-oss",
  "sony-fe-24-f28-g",
  "sony-sal-70-400mm-f4-56-g",
  "tamron-sp-90mm-f2-8-di-macro-vc-usd-f004",
];

describe("lens patent metadata", () => {
  it("opens each lens to its source design f-number, not a faster marketed one", () => {
    // `nominalFno` sizes the iris. Where the source gives a design f-number, a faster nominal value opens the stop
    // past what the prescription was corrected for; the marketed number belongs in `apertureMarketing`.
    const offenders = Object.values(modules).flatMap(({ default: data }) => {
      if (data.apertureDesign === undefined || data.nominalFno === undefined) return [];
      const wideOpen = Array.isArray(data.nominalFno) ? data.nominalFno[0] : data.nominalFno;
      return wideOpen / data.apertureDesign < 1 - APERTURE_ROUNDING ? [data.key] : [];
    });
    expect(offenders.sort()).toEqual([...NOMINAL_FASTER_THAN_DESIGN].sort());
  });

  it("does not repeat inventors as organizational assignees", () => {
    // Inventor-applicants belong in patentAuthors; duplicating them creates false assignee nodes.
    const offenders = Object.entries(modules).flatMap(([path, { default: data }]) => {
      const authorKeys = new Set((data.patentAuthors ?? []).map(normalizedNameKey));
      return (data.patentAssignees ?? [])
        .filter((assignee) => authorKeys.has(normalizedNameKey(assignee)))
        .map((assignee) => `${path}: ${assignee}`);
    });

    expect(offenders, "patentAssignees must contain organizations, not inventor-applicants").toEqual([]);
  });

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
        const nonLatinLetters = [...author].filter(
          (character) => /\p{Letter}/u.test(character) && !/\p{Script=Latin}/u.test(character),
        );
        expect(nonLatinLetters, `${path}: patentAuthors must be romanized`).toEqual([]);
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
