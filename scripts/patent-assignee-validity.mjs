/**
 * Curated guardrails for assignee names whose legal forms have clear start dates.
 *
 * This audit intentionally reports metadata problems instead of rewriting them:
 * source-publication wording still needs a human to resolve the correct entity.
 */

const ASSIGNEE_START_YEARS = new Map([
  ["Carl-Zeiss-Stiftung", 1891],
  ["VEB Carl Zeiss Jena", 1948],
  ["Zeiss Ikon AG", 1926],
  ["Carl Zeiss SMT GmbH", 2001],
  ["Carl Zeiss AG", 2004],
]);

const ASSIGNEE_ALIASES = [
  { alias: "Carl Zeiss", canonical: "Carl-Zeiss-Stiftung", fromYear: 1891, throughYear: 2003 },
  { alias: "Carl Zeiss Stiftung", canonical: "Carl-Zeiss-Stiftung" },
  { alias: "Carl Zeiss Stiftung d/b/a Carl Zeiss", canonical: "Carl-Zeiss-Stiftung" },
  { alias: "Zeiss Carl Fa", canonical: "Carl-Zeiss-Stiftung" },
  { alias: "VEB Optik Carl Zeiss Jena", canonical: "VEB Carl Zeiss Jena" },
  { alias: "Optik Carl Zeiss Jena VEB", canonical: "VEB Carl Zeiss Jena" },
];

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
