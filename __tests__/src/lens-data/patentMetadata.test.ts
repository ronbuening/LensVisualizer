import { describe, expect, it } from "vitest";
import { ingestLens, ingestTeleconverter } from "../../../src/optics/lensDataConversion.js";
import { toLensData, toTeleconverterData } from "../../../src/optics/prescription/v1/toLensData.js";
import { validatePatentExample } from "../../../src/optics/prescription/validate/patent.js";
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
  "canon-ef-28-70mm-f35-45-ii",
  "canon-ef-70-300mm-f4-56-is-usm",
  "canon-efs-10-18-f4556-is-stm",
  "canon-powershot-g1-x-mark-ii-125-625-f20-39",
  "canon-powershot-g7x-8-8-36-8-f1-8-2-8",
  "canon-tse-50f28l-macro",
  "minolta-af-35-105mm-f3-5-4-5-v2",
  "nikkor-z-100-400-f4556",
  "nikon-1-nikkor-vr-10-30-f35-56",
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

/**
 * Patent-backed lenses that do not yet record `source.example`, each queued in agent_docs/patent-example-queue.md. The
 * sweep below compares for equality, so a lens that gains its example must leave this list and no lens may join it.
 */
const MISSING_PATENT_EXAMPLE: readonly string[] = ["nikon-nikkor-15mm-f56"];

const ORDINALS = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
];
const TERM_MODIFIER = "(?:numerical(?: value)?|working|exemplary|illustrative|preferred|design)\\s+";
const DESIGNATION = new RegExp(
  `(?<![\\p{L}])(?:${TERM_MODIFIER})?(example|embodiment|table|numerical data|zahlenbeispiel|beispiel|ausführungsbeispiel|exemple|tableau|tabelle|ex\\.?)(s?)\\s*(\\d+(?:-\\d+)*[A-Za-z]?|[IVX]+|[A-H])(?![\\p{L}\\d])`,
  "giu",
);
const ORDINAL_DESIGNATION = new RegExp(
  `(?<![\\p{L}])(${ORDINALS.join("|")})\\s+(?:${TERM_MODIFIER})?(?:example|embodiment)`,
  "giu",
);
const JAPANESE_DESIGNATION = /(?:数値)?実施例\s*(\d+)|第\s*(\d+)\s*実施例/gu;
const ROMAN_DIGITS: Readonly<Record<string, number>> = { I: 1, V: 5, X: 10 };

function romanValue(numeral: string): number {
  let value = 0;
  for (let i = 0; i < numeral.length; i++) {
    const digit = ROMAN_DIGITS[numeral[i]];
    value += digit < (ROMAN_DIGITS[numeral[i + 1]] ?? 0) ? -digit : digit;
  }
  return value;
}

/**
 * The example id a subtitle names: the first example or embodiment designation, else the first table (which a sole
 * example's subtitle may cite without numbering the example), `null` for "sole … example", or `undefined` for none.
 * Designations a "job card" is credited with are the project's, not the source's.
 */
function subtitleExampleId(subtitle: string, sole: boolean): string | null | undefined {
  const text = subtitle.replace(/[０-９]/g, (digit) => String.fromCharCode(digit.charCodeAt(0) - 0xfee0));
  const jobCard = (index: number) =>
    /job[- ]?(?:card|designation)\b[^—;]{0,12}$/i.test(text.slice(Math.max(0, index - 30), index));
  const found: { index: number; id: string; table: boolean }[] = [];
  for (const match of text.matchAll(DESIGNATION)) {
    const [, term, plural, numeral] = match;
    if (jobCard(match.index) || /^[a-hivx]+$/.test(numeral)) continue;
    const first = plural ? numeral.replace(/-.*$/, "") : numeral;
    const id = /^[IVX]+$/.test(first)
      ? String(romanValue(first))
      : /^[A-H]$/.test(first)
        ? first
        : first.replace(/^(\d+)/, (digits) => String(Number(digits))).toUpperCase();
    found.push({ index: match.index, id, table: /^(?:table|tableau|tabelle)$/i.test(term) });
  }
  for (const match of text.matchAll(ORDINAL_DESIGNATION)) {
    if (!jobCard(match.index)) {
      found.push({ index: match.index, id: String(ORDINALS.indexOf(match[1].toLowerCase()) + 1), table: false });
    }
  }
  for (const match of text.matchAll(JAPANESE_DESIGNATION)) {
    found.push({ index: match.index, id: String(Number(match[1] ?? match[2])), table: false });
  }
  found.sort((a, b) => a.index - b.index);
  const primary = found.find((designation) => !designation.table) ?? (sole ? undefined : found[0]);
  if (primary) return primary.id;
  return /\bsole\b[^—]{0,30}\bexample\b/i.test(text) ? null : undefined;
}

/* The analysis metadata rows that named the example before `source.example` held it. */
const EXAMPLE_ROW =
  /^\*\*(?:Embodiment analy[sz]ed|Embodiment|Example|Example analy[sz]ed|Numerical example analyzed|Example Used|Design Example|Production example|Production embodiment):\*\*/m;
const analyses = import.meta.glob<string>("../../../src/lens-data/**/*.analysis.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

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

  it("records the transcribed example for every patent-backed lens and converter, except the queued ones", () => {
    const missing = [...Object.values(modules), ...Object.values(patentModules)].flatMap(({ default: data }) =>
      data.patentNumber && !data.patentExample ? [data.key] : [],
    );
    expect(missing.sort()).toEqual([...MISSING_PATENT_EXAMPLE].sort());
  });

  it("checks converter examples as the validator checks a lens's", () => {
    const errors = Object.entries(patentModules).flatMap(([path, { default: data }]) => {
      const found: string[] = [];
      validatePatentExample(data.patentExample, data.patentNumber, found);
      return found.map((error) => `${path}: ${error}`);
    });
    expect(errors).toEqual([]);
  });

  it("keeps a subtitle that names an example consistent with source.example", () => {
    const offenders = [...Object.values(modules), ...Object.values(patentModules)].flatMap(({ default: data }) => {
      if (!data.patentExample || !data.subtitle) return [];
      const named = subtitleExampleId(data.subtitle, data.patentExample.id === null);
      return named === undefined || named === data.patentExample.id
        ? []
        : [`${data.key}: subtitle names ${named ?? "a sole example"}, source.example is ${data.patentExample.label}`];
    });
    expect(offenders).toEqual([]);
  });

  it("leaves the example to source.example rather than an analysis metadata row", () => {
    const offenders = Object.entries(modules).flatMap(([path, { default: data }]) => {
      const analysis = analyses[path.replace(/\.data\.ts$/, ".analysis.md")];
      return data.patentExample && analysis && EXAMPLE_ROW.test(analysis) ? [data.key] : [];
    });
    const converterOffenders = Object.entries(patentModules).flatMap(([path, { default: data }]) => {
      const analysis = analyses[path.replace(/\.teleconverter\.ts$/, ".analysis.md")];
      return data.patentExample && analysis && EXAMPLE_ROW.test(analysis) ? [data.key] : [];
    });
    expect([...offenders, ...converterOffenders]).toEqual([]);
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
