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

export function validatePatentMetadata(data: UntrustedLensData, errors: string[]): void {
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
