/**
 * Shared source-declaration contract for authored prescriptions and portable builder drafts.
 * Bounds keep source notes and reference lists usable in the builder and analysis disclosures.
 */

const SOURCE_OMISSION_KINDS = ["asphere-coefficients", "asphere-term", "asphere-equation"];
const SEMI_DIAMETER_SOURCES = ["source-table", "figure-measured", "heuristic"];
const MAX_SOURCE_OMISSIONS = 250;
const MAX_OMISSION_SURFACES = 250;
const MAX_OMISSION_NOTE_LENGTH = 4000;

export interface SourceProvenanceIssue {
  path: string;
  message: string;
}

function unsafeNoteCharacter(character: string): boolean {
  // Numeric checks keep invisible characters out of the validator's own source.
  const cp = character.codePointAt(0)!;
  return (
    (cp < 32 && cp !== 9 && cp !== 10 && cp !== 13) ||
    (cp >= 127 && cp <= 159) ||
    cp === 0x061c ||
    cp === 0x200e ||
    cp === 0x200f ||
    (cp >= 0x202a && cp <= 0x202e) ||
    (cp >= 0x2066 && cp <= 0x2069) ||
    (cp >= 0xd800 && cp <= 0xdfff)
  );
}

/**
 * Check explicit surface omissions and aperture provenance without changing authored text.
 *
 * @param omissions - optional source omission list, before trusting its shape
 * @param sdSource - optional clear-aperture evidence category
 * @param surfaceLabels - labels of the authored surfaces these declarations may reference
 * @returns path-specific issues relative to the V2 source object; an empty list means valid
 */
export function sourceProvenanceIssues(
  omissions: unknown,
  sdSource: unknown,
  surfaceLabels: ReadonlySet<string>,
): SourceProvenanceIssue[] {
  const issues: SourceProvenanceIssue[] = [];
  const issue = (path: string, message: string) => issues.push({ path, message });
  if (sdSource !== undefined && (typeof sdSource !== "string" || !SEMI_DIAMETER_SOURCES.includes(sdSource)))
    issue("sdSource", "must be source-table, figure-measured or heuristic");
  if (omissions === undefined) return issues;
  if (!Array.isArray(omissions)) {
    issue("omissions", "must be an array when provided");
    return issues;
  }
  if (omissions.length > MAX_SOURCE_OMISSIONS) {
    issue("omissions", `must contain at most ${MAX_SOURCE_OMISSIONS} entries`);
    return issues;
  }
  for (let index = 0; index < omissions.length; index++) {
    const entry: unknown = omissions[index];
    const at = `omissions[${index}]`;
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      issue(at, "must be an object");
      continue;
    }
    const record = entry as Record<string, unknown>;
    for (const field of Object.keys(record)) {
      if (!["kind", "surfaces", "note"].includes(field)) issue(`${at}.${field}`, `has unknown field ${field}`);
    }
    if (typeof record.kind !== "string" || !SOURCE_OMISSION_KINDS.includes(record.kind))
      issue(`${at}.kind`, "must be asphere-coefficients, asphere-term or asphere-equation");
    const note = record.note;
    if (typeof note !== "string" || !note.trim()) issue(`${at}.note`, "must be non-empty");
    else if (note.length > MAX_OMISSION_NOTE_LENGTH)
      issue(`${at}.note`, `must contain at most ${MAX_OMISSION_NOTE_LENGTH} UTF-16 code units`);
    else if (note !== note.trim()) issue(`${at}.note`, "must be trimmed");
    else if ([...note].some(unsafeNoteCharacter))
      issue(
        `${at}.note`,
        "must not contain control characters other than TAB, LF and CR, BiDi controls or lone surrogates",
      );
    const surfaces = record.surfaces;
    const referenceMessage = "must be a non-empty list of unique authored surface labels";
    if (!Array.isArray(surfaces) || surfaces.length === 0) issue(`${at}.surfaces`, referenceMessage);
    else if (surfaces.length > MAX_OMISSION_SURFACES)
      issue(`${at}.surfaces`, `must contain at most ${MAX_OMISSION_SURFACES} unique authored surface labels`);
    else {
      const seen = new Set<string>();
      for (let i = 0; i < surfaces.length; i++) {
        const label: unknown = surfaces[i];
        if (typeof label !== "string") issue(`${at}.surfaces[${i}]`, referenceMessage);
        else if (!surfaceLabels.has(label) || seen.has(label)) issue(`${at}.surfaces`, referenceMessage);
        else seen.add(label);
      }
    }
  }
  return issues;
}
