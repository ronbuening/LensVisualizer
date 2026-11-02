/** Single-lens source metadata; cross-file spelling and reference paths remain corpus checks. */
import type { UntrustedLensData } from "./context.js";
import {
  docdbPublicationNumber,
  isPatentPublicationNumber,
  patentJurisdiction,
} from "../../../utils/catalog/patentRecords.js";

function normalizedNameKey(value: string): string {
  return value
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "");
}

function validateNames(
  data: UntrustedLensData,
  field: "patentAuthors" | "patentAssignees",
  errors: string[],
): string[] {
  const values: unknown = data[field];
  if (!Array.isArray(values)) {
    errors.push(`"${field}" must be an array when patent metadata is provided`);
    return [];
  }
  if (new Set(values).size !== values.length) errors.push(`"${field}" entries must be unique`);
  const names: string[] = [];
  for (let i = 0; i < values.length; i++) {
    const value: unknown = values[i];
    const at = `"${field}[${i}]"`;
    if (typeof value !== "string" || !value.trim() || value.trim() !== value) {
      errors.push(`${at} must be a non-empty, trimmed string`);
      continue;
    }
    names.push(value);
    if (/\bet al\.?\b/i.test(value)) errors.push(`${at} must list every named party explicitly`);
    if (value.normalize("NFKC") !== value) errors.push(`${at} must use normalized Unicode (NFKC)`);
    if (/[()]/.test(value)) errors.push(`${at} must omit parenthetical source annotations`);
    if (field === "patentAuthors") {
      if ([...value].some((character) => /\p{Letter}/u.test(character) && !/\p{Script=Latin}/u.test(character))) {
        errors.push(`${at} must be romanized`);
      }
      if (/\b(?:Dr|Prof)\.?\b/i.test(value)) errors.push(`${at} must omit honorifics`);
      if (/\b\p{Lu}{2,}\b/u.test(value)) errors.push(`${at} must use conventional capitalization`);
    } else {
      if (/^[^\p{Ll}]*\p{Lu}[^\p{Ll}]*$/u.test(value)) errors.push(`${at} must use conventional capitalization`);
      if (/\b(?:Co|Corp|Inc|Ltd|KK)\b(?!\.)/.test(value)) errors.push(`${at} must use canonical corporate suffixes`);
    }
  }
  return names;
}

const SOLE_EXAMPLE = "Sole example";
const ROMAN_VALUES: Readonly<Record<string, number>> = { I: 1, V: 5, X: 10 };

/** The value of a roman numeral in canonical form (`"IV"`, not `"IIII"`), or null. */
function romanValue(numeral: string): number | null {
  if (!/^[IVX]+$/.test(numeral)) return null;
  let value = 0;
  for (let i = 0; i < numeral.length; i++) {
    const digit = ROMAN_VALUES[numeral[i]];
    value += digit < (ROMAN_VALUES[numeral[i + 1]] ?? 0) ? -digit : digit;
  }
  const canonical = [
    "X".repeat(Math.floor(value / 10)),
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][value % 10],
  ];
  return value > 0 && value < 40 && canonical.join("") === numeral ? value : null;
}

/**
 * The comparable id an example label gives: the numeral in Arabic digits, roman converted and suffixes uppercased.
 * Labels are a Title Case term and a numeral (`"Example 6"`, `"Table IV"`, `"Numerical Example 2-1"`,
 * `"Example A"`), or `"Sole example"`.
 *
 * @param label - an example label
 * @returns the id; `null` for `"Sole example"`; `undefined` when the label is not one of those forms
 */
export function patentExampleId(label: string): string | null | undefined {
  if (label === SOLE_EXAMPLE) return null;
  const match = label.match(/^(?:[A-Z][a-z]+ )+(\S+)$/);
  if (!match) return undefined;
  const numeral = match[1];
  const roman = romanValue(numeral);
  if (roman !== null) return String(roman);
  if (/^[A-HJ-UWYZ]$/.test(numeral)) return numeral;
  const arabic = numeral.match(/^(\d+)((?:-\d+)*)([A-Za-z]?)$/);
  return arabic ? `${Number(arabic[1])}${arabic[2]}${arabic[3].toUpperCase()}` : undefined;
}

/**
 * Check a `patentExample`: a `{ label, id }` record whose id the label gives, beside a patent number it does not
 * repeat. Converters share the rule through the corpus sweep.
 *
 * @param example - the authored value
 * @param patentNumber - the file's publication number, if any
 * @param errors - collects the messages, naming the V1 field
 */
export function validatePatentExample(example: unknown, patentNumber: unknown, errors: string[]): void {
  if (example === undefined) return;
  if (patentNumber === undefined) errors.push('"patentExample" requires a patent number');
  if (example === null || typeof example !== "object" || Array.isArray(example)) {
    errors.push('"patentExample" must be an object with "label" and "id"');
    return;
  }
  const record = example as Record<string, unknown>;
  const extra = Object.keys(record).filter((field) => field !== "label" && field !== "id");
  if (extra.length)
    errors.push(`"patentExample" holds only "label" and "id", not ${extra.map((f) => `"${f}"`).join(", ")}`);
  const { label, id } = record;
  if (typeof label !== "string" || !label.trim() || label.trim() !== label || /\s{2,}|[\t\n]/.test(label)) {
    errors.push('"patentExample" label must be a non-empty, trimmed, single-spaced string');
    return;
  }
  if (id !== null && (typeof id !== "string" || !id.trim() || id.trim() !== id)) {
    errors.push('"patentExample" id must be a non-empty, trimmed string or null');
    return;
  }
  if ((id === null) !== (label === SOLE_EXAMPLE)) {
    errors.push(`"patentExample" id is null exactly when the label is "${SOLE_EXAMPLE}"`);
    return;
  }
  const digits = (value: string) => value.replace(/\D/g, "");
  if (
    typeof patentNumber === "string" &&
    (label.includes(patentNumber) || (digits(label).length >= 4 && digits(patentNumber).includes(digits(label))))
  ) {
    errors.push('"patentExample" label must not repeat the publication number');
    return;
  }
  const derived = patentExampleId(label);
  if (derived === undefined) {
    errors.push(`"patentExample" label "${label}" must be a Title Case term and a numeral, or "${SOLE_EXAMPLE}"`);
  } else if (derived !== id) {
    errors.push(
      `"patentExample" id ${JSON.stringify(id)} must be ${JSON.stringify(derived)}, as label "${label}" gives`,
    );
  }
}

export function validatePatentMetadata(data: UntrustedLensData, errors: string[]): void {
  validatePatentExample(data.patentExample, data.patentNumber, errors);
  // A year alone also dates synthetic fixtures. Empty party lists can describe a non-patent source.
  if (
    data.patentNumber === undefined &&
    [data.patentAuthors, data.patentAssignees].every(
      (value: unknown) => value === undefined || (Array.isArray(value) && value.length === 0),
    )
  )
    return;
  const number: unknown = data.patentNumber;
  if (typeof number !== "string" || !number.trim() || number.trim() !== number) {
    errors.push('"patentNumber" must be a non-empty, trimmed string when patent metadata is provided');
  } else if (
    !isPatentPublicationNumber(number) ||
    !/^[A-Z]{2} /.test(number) ||
    /\d[A-Z]\d?$/.test(number) ||
    patentJurisdiction(number).code === "OTHER" ||
    !/^[A-Z]{2}[A-Z0-9]*\d[A-Z0-9]*$/.test(docdbPublicationNumber(number))
  ) {
    errors.push('"patentNumber" must be a patent publication number with country and kind-code spacing');
  }
  const authors = new Set(validateNames(data, "patentAuthors", errors).map(normalizedNameKey));
  const assignees = validateNames(data, "patentAssignees", errors);
  if (assignees.some((assignee) => authors.has(normalizedNameKey(assignee)))) {
    errors.push('"patentAssignees" must contain organizations, not inventor-applicants');
  }
}
