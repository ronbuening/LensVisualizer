/**
 * Curated guardrails for assignee names whose legal forms have clear start dates.
 *
 * This audit intentionally reports metadata problems instead of rewriting them:
 * source-publication wording still needs a human to resolve the correct entity.
 * Start years derive from the corporate-history registry so the guardrail and the
 * relationship map cannot drift apart; overrides cover the cases the registry
 * cannot express.
 */

import { ASSIGNEE_CORPORATE_HISTORY } from "../src/utils/catalog/assigneeCorporateHistory.ts";

/**
 * Hand-curated start years the registry cannot derive: entities modeled without a
 * successorOf record, and names whose successorOf events are absorptions of other
 * companies rather than the rename that created the name.
 */
const ASSIGNEE_START_YEAR_OVERRIDES = new Map([
  // https://www.zeiss.com/corporate/en/about-zeiss/past/history.html
  ["Carl-Zeiss-Stiftung", 1891],
  ["VEB Carl Zeiss Jena", 1948],
  ["Zeiss Ikon AG", 1926],
  ["Carl Zeiss SMT GmbH", 2001],
  ["Carl Zeiss AG", 2004],
  // https://www.konicaminolta.com/global-en/corporate/history-timeline04.html
  // The registry's earliest successor event is the 2003 Konica–Minolta integration, but the
  // operating-company name Konica Minolta, Inc. dates from the 2013 reorganization.
  ["Konica Minolta, Inc.", 2013],
  // https://www.samsung.com/us/aboutsamsung/company/history/
  // The registry only records the 2010 absorption of Samsung Digital Imaging, which postdates the
  // company's 1969 founding.
  ["Samsung Electronics Co., Ltd.", 1969],
]);

// Nikon history and the source publications distinguish legal renames from spelling variants:
// https://www.nikon.com/company/corporate/history/
// https://patents.google.com/patent/US2646721A/en (front page: Aktiengesellschaft)
// DE 1 157 000 names Jenoptik Jena G.m.b.H.; normalize punctuation only, not legal identity.
const ASSIGNEE_ALIASES = [
  // US 2024/0134166 A1 and US 3,536,379: translated corporate style / "Firma"
  // prefix, not new entities. Keep Canon Camera and later Leica entities distinct.
  { alias: "Canon Kabushiki Kaisha", canonical: "Canon Inc.", fromYear: 1969 },
  { alias: "Firma Ernst Leitz GmbH", canonical: "Ernst Leitz GmbH" },
  // US 2,824,495 shortens the same Kreuznach assignee named in US 3,005,379.
  // Retain the later GmbH & Co. KG as a distinct historical legal style.
  { alias: "Jos. Schneider & Co.", canonical: "Jos. Schneider & Co., Optische Werke" },
  { alias: "Jos. Schneider & Co. Optische Werke", canonical: "Jos. Schneider & Co., Optische Werke" },
  { alias: "Jenoptik Jena G.m.b.H.", canonical: "Jenoptik Jena GmbH" },
  { alias: "Voigtländer A.G.", canonical: "Voigtländer AG" },
  { alias: "Nippon Kogaku Kogyo K.K.", canonical: "Nippon Kogaku K.K." },
  { alias: "Voigtländer & Sohn Aktiengesellschaft", canonical: "Voigtländer & Sohn AG" },
  { alias: "Carl Zeiss", canonical: "Carl-Zeiss-Stiftung", fromYear: 1891, throughYear: 2003 },
  { alias: "Carl Zeiss Stiftung", canonical: "Carl-Zeiss-Stiftung" },
  { alias: "Carl Zeiss Stiftung d/b/a Carl Zeiss", canonical: "Carl-Zeiss-Stiftung" },
  { alias: "Zeiss Carl Fa", canonical: "Carl-Zeiss-Stiftung" },
  { alias: "VEB Optik Carl Zeiss Jena", canonical: "VEB Carl Zeiss Jena" },
  { alias: "Optik Carl Zeiss Jena VEB", canonical: "VEB Carl Zeiss Jena" },
];

/**
 * Derive each registry name's start year from its earliest successorOf event, then
 * apply the curated overrides.
 *
 * A successorOf record dates the moment a name took over a predecessor, so the
 * earliest one bounds when the exact assignee string could first appear on a
 * publication. Names without a successorOf record get no bound.
 *
 * @param {Partial<Record<string, {successorOf?: Array<{effectiveDate: string}>}>>} history registry entries by assignee name
 * @param {Map<string, number>} overrides hand-curated years that replace derived ones
 * @returns {Map<string, number>} earliest permitted publication year by assignee name
 */
export function deriveAssigneeStartYears(history, overrides = ASSIGNEE_START_YEAR_OVERRIDES) {
  const startYears = new Map();
  for (const [name, relationships] of Object.entries(history)) {
    const years = (relationships?.successorOf ?? [])
      .map((event) => Number.parseInt(String(event.effectiveDate).slice(0, 4), 10))
      .filter(Number.isInteger);
    if (years.length > 0) startYears.set(name, Math.min(...years));
  }
  for (const [name, year] of overrides) startYears.set(name, year);
  return startYears;
}

export const ASSIGNEE_START_YEARS = deriveAssigneeStartYears(ASSIGNEE_CORPORATE_HISTORY);

function appliesToYear(rule, year) {
  return (
    (rule.fromYear === undefined || year >= rule.fromYear) &&
    (rule.throughYear === undefined || year <= rule.throughYear)
  );
}

function sourceLabel(lens) {
  return `${lens.key ?? "unknown lens"}${lens.patentNumber ? ` (${lens.patentNumber})` : ""}`;
}

/**
 * Reject known non-canonical aliases and assignee dates earlier than the
 * corresponding legal entity. Later dates are left to source review because
 * applications can remain published under an earlier entity after a reorganization.
 */
export function assertPatentAssigneeValidity(lensSummaries) {
  const errors = [];

  for (const lens of lensSummaries) {
    const year = lens.patentYear;
    if (!Number.isInteger(year)) continue;

    for (const assignee of lens.patentAssignees ?? []) {
      const aliasRule = ASSIGNEE_ALIASES.find((rule) => rule.alias === assignee && appliesToYear(rule, year));
      if (aliasRule) {
        errors.push(`${sourceLabel(lens)}: use ${aliasRule.canonical} instead of ${assignee}`);
        continue;
      }

      const startYear = ASSIGNEE_START_YEARS.get(assignee);
      if (startYear !== undefined && year < startYear) {
        errors.push(`${sourceLabel(lens)}: ${assignee} did not exist until ${startYear}`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid patent assignee metadata:\n- ${errors.join("\n- ")}`);
  }
}
