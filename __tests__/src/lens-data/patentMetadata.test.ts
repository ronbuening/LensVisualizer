import { describe, expect, it } from "vitest";
import { ingestLens, ingestTeleconverter, toLensData, toTeleconverterData } from "../../../src/optics/buildLens.js";
import type { LensDataInput } from "../../../src/types/optics.js";
import {
  docdbPublicationNumber,
  isPatentPublicationNumber,
  patentJurisdiction,
} from "../../../src/utils/catalog/patentRecords.js";

/* Each lens file of either version, read as its V1 view gives its fields. */
const modules = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: LensDataInput }>("../../../src/lens-data/**/*.data.ts", { eager: true }),
  ).map(([path, module]) => [path, { default: toLensData(ingestLens(module.default)) }]),
);
/* Converter publication formatting remains here; lens publication rules live in the validator. */
const patentModules = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: Parameters<typeof ingestTeleconverter>[0] }>(
      "../../../src/lens-data/**/*.teleconverter.ts",
      { eager: true },
    ),
  ).map(([path, module]) => [path, { default: toTeleconverterData(ingestTeleconverter(module.default)) }]),
);

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
  it("links every authored converter patent with consistent country and kind-code spacing", () => {
    const offenders = Object.entries(patentModules).flatMap(([path, { default: data }]) => {
      const number = data.patentNumber;
      if (!number) return [];
      return isPatentPublicationNumber(number) &&
        /^[A-Z]{2} /.test(number) &&
        !/\d[A-Z]\d?$/.test(number) &&
        patentJurisdiction(number).code !== "OTHER" &&
        /^[A-Z]{2}[A-Z0-9]*\d[A-Z0-9]*$/.test(docdbPublicationNumber(number))
        ? []
        : [`${path}: ${number}`];
    });
    expect(offenders, "patent identifiers must render as external links and resolve to a publication query").toEqual(
      [],
    );
  });
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

  it("uses consistent author spelling, name order and assignee spelling across lenses", () => {
    const normalizedSpellings = new Map<string, string>();
    const normalizedWordOrders = new Map<string, string>();
    const normalizedAssigneeSpellings = new Map<string, string>();

    for (const [path, { default: data }] of Object.entries(modules)) {
      if (path.includes("/reference/")) continue;

      for (const author of data.patentAuthors ?? []) {
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
