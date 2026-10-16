/**
 * Converter report — what converting a file moved or dropped, for review (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest,
 * conversion and comments). The report is a value; whoever runs the converter prints it, alone on stdout.
 *
 * For each file it lists:
 * - each comment that moved, with the source path it left and the node it now leads;
 * - each stop radius dropped: the authored radius as written, the radius the engine uses in its place (labelled
 *   "engine radius", one per zoom station in station order, one held at every station on a fixed-iris zoom, or the
 *   published "schedule"), every comment on the stop's entry with those that name the radius flagged, and each
 *   comment line elsewhere in the file that names the stop and quotes the authored radius, as written or rounded to
 *   the two or more decimals it is quoted with;
 * - the zero aspheric terms dropped, by aspheric entry;
 * - any other value ingest set aside that the converted file does not hold;
 * - going to V1, the stop radius written for V1's type, which V1 ingest sets aside, and each medium name V1 cannot
 *   hold.
 * The text is deterministic: no dates, timings or absolute paths.
 */

/** Words that say a comment discusses a stop's radius. */
const RADIUS_WORDS = /\bsd\b|\biris\b|\bradi(?:us|i)\b|calibrat|diameter|f-?numbers?\b|\bf\/|\bfno\b/i;

/** Words that name the stop. */
const STOP_WORDS = /\bstops?\b|\bsto\b|\bsd\b|\bsemi-diameters?\b|\biris\b|\bapertures?\b/i;

/** Decimal numbers in a line of text. */
const NUMBERS = /\d*\.?\d+(?:[eE][-+]?\d+)?/g;

/**
 * Whether a number in a comment quotes a radius: equal to it, or written with two or more decimals and equal to the
 * radius rounded to as many, as a calibration note quotes a computed radius.
 */
function quotes(number, radius) {
  if (Number(number) === radius) return true;
  const decimals = /^\d*\.(\d+)$/.exec(number)?.[1].length ?? 0;
  return decimals >= 2 && Number(number) === Number(radius.toFixed(decimals));
}

/** A comment's lines, each trimmed, joined into one. */
function oneLine(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .join(" ");
}

/** Whether a path names a node at or below `ancestor`. */
function isWithin(path, ancestor, parentPath) {
  for (let at = path; at !== undefined; at = parentPath(at)) if (at === ancestor) return true;
  return false;
}

/**
 * The report entry of one dropped stop radius.
 *
 * @param {object} stop - what the entry is about
 * @param {string} stop.from - the authored path of the radius
 * @param {string} stop.text - the radius as written
 * @param {number} stop.value - its value
 * @param {{ kind: "prime" | "held" | "perStation" | "schedule", radii: number[] } | { error: string }} stop.engine -
 *   the radius the engine uses, or the header and first reason of the error its build threw
 * @param {import("./read.mjs").ReadComment[]} comments - every comment in the source file
 * @param {(path: string) => string | undefined} parentPath - the engine's path spelling
 * @returns {object} the entry
 */
export function stopRadiusEntry(stop, comments, parentPath) {
  const record = parentPath(stop.from);
  const onEntry = comments.filter(
    (comment) => comment.path !== undefined && isWithin(comment.path, record, parentPath),
  );
  const elsewhere = [];
  for (const comment of comments) {
    if (onEntry.includes(comment)) continue;
    comment.text.split("\n").forEach((line, offset) => {
      const quoted = (line.match(NUMBERS) ?? []).some((number) => quotes(number, stop.value));
      if (quoted && STOP_WORDS.test(line)) elsewhere.push({ line: comment.line + offset, text: line.trim() });
    });
  }
  return {
    from: stop.from,
    authored: stop.text,
    engine: stop.engine,
    comments: onEntry.map((comment) => ({
      line: comment.line,
      text: oneLine(comment.text),
      flagged: RADIUS_WORDS.test(comment.text),
    })),
    elsewhere,
  };
}

const millimetres = (radii) => radii.map((radius) => radius.toFixed(3)).join(", ");

/** Where the radius a V1 file writes for its stop comes from, by how the engine sets it. */
const WRITTEN_RADIUS = {
  prime: "the engine's radius",
  held: "the engine's radius, held at every station",
  perStation: "the engine's radius at the wide station",
  schedule: "the schedule's first value",
};

/** The engine's radius, as a line of the report. */
function engineLine(engine) {
  if ("error" in engine) return `engine radius: not computed (${engine.error})`;
  switch (engine.kind) {
    case "prime":
      return `engine radius: ${millimetres(engine.radii)} mm`;
    case "held":
      return `engine radius: ${millimetres(engine.radii)} mm, held at every station`;
    case "perStation":
      return `engine radius by station: ${millimetres(engine.radii)} mm`;
    default:
      return `schedule by station: ${millimetres(engine.radii)} mm`;
  }
}

/**
 * The report of one or more converted files, as text.
 *
 * @param {object[]} reports - each file's report, as the converter returns it
 * @returns {string} the report; empty when no file moved or dropped anything
 */
export function formatConversionReport(reports) {
  const lines = [];
  for (const report of [...reports].sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : 0))) {
    const body = [];
    if (report.moved.length > 0) {
      body.push("  moved comments:");
      for (const moved of report.moved) {
        body.push(
          `    line ${moved.line}: ${moved.from} → ${moved.to || "(the file's object)"}: ${oneLine(moved.text)}`,
        );
      }
    }
    for (const stop of report.stops) {
      body.push(`  stop radius dropped: ${stop.from} = ${stop.authored}`);
      body.push(`    ${engineLine(stop.engine)}`);
      if (stop.comments.length > 0) {
        body.push("    comments on the stop entry:");
        for (const comment of stop.comments) {
          body.push(`      line ${comment.line}${comment.flagged ? " (radius)" : ""}: ${comment.text}`);
        }
      }
      if (stop.elsewhere.length > 0) {
        body.push("    elsewhere in the file:");
        for (const line of stop.elsewhere) body.push(`      line ${line.line}: ${line.text}`);
      }
    }
    if (report.zeroTerms.length > 0) {
      body.push("  zero aspheric terms dropped:");
      for (const entry of report.zeroTerms) body.push(`    ${entry.entry}: ${entry.terms.join(", ")}`);
    }
    if (report.stopWritten) {
      const { at, value, stop } = report.stopWritten;
      body.push(
        `  stop radius written for V1's type: ${at} = ${value} (${WRITTEN_RADIUS[stop]}; V1 ingest sets it aside)`,
      );
    }
    if (report.mediumNames?.length > 0) {
      body.push("  medium names V1 cannot hold:");
      for (const medium of report.mediumNames) body.push(`    ${medium.from} = ${JSON.stringify(medium.name)}`);
    }
    if (report.dropped.length > 0) {
      body.push("  other values dropped:");
      for (const value of report.dropped) {
        body.push(`    ${value.from} = ${JSON.stringify(value.value)} (${value.kind})`);
      }
    }
    if (body.length > 0) lines.push(report.file, ...body);
  }
  return lines.length > 0 ? `${lines.join("\n")}\n` : "";
}
