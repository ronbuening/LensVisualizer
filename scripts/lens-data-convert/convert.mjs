/**
 * Lens-data converter library — converts the text of a lens or teleconverter file to V2 text, or to V1 text, with a
 * report of what moved or dropped, or refuses it with the reason (see agent_docs/architecture/optics-engine.md).
 *
 * One conversion:
 * 1. reads the file without running it (`read.mjs`) and ingests its value with source paths, through the engine's
 *    lens-data conversion seam, loaded by path under plain Node (`loadLensDataConversion`);
 * 2. writes the view of the version it converts to, composes where each part of it came from (`v2SourceMap`,
 *    `v1SourceMap`), carries each comment there (`comments.mjs`) and keeps each literal's source text where the rule
 *    below allows, then prints the object (`print.mjs`) in the order the engine states for that version;
 * 3. formats the statement that declares the object, and the export after it, with Prettier's API under the
 *    repository's configuration, read once; Prettier never sees the file's header or its path;
 * 4. puts the printer's number tokens back where Prettier respelled them, so `1.05587e-7` stays as written;
 * 5. checks the bytes it would write: every number token where the printer put it; every comment of the source once,
 *    header included, as written or with its moved-from note; every comment on the node and in the placement the
 *    placer gave it, as the printed text reads and as formatting leaves it, so a second conversion carries it nowhere
 *    else; and an ingest of the result equal to the source's prescription under canonical semantic equality.
 *
 * The file around the object keeps its shape: everything before the statement that declares the exported const is
 * kept byte for byte, except the type import, which names the target version's type (`types/lensDataV2.js`; going
 * to V1, `types/optics.js` or `types/teleconverter.js`) at the import's own depth, or at the depth the caller gives
 * for a file written elsewhere. The statement is always `const X = {…} satisfies T;` and the export
 * `export default X;`, X keeping its name; any other top-level const sits in the kept header and stays as written.
 *
 * A literal keeps its source text — a number's spelling, a sign, a computed number, a `+` chain of strings — when the
 * engine names the place the value was read from, the text there names no binding, and it evaluates to exactly the
 * value written; `as`, `satisfies` and parentheses around it are dropped. Anything else prints from its value.
 *
 * A source already in V2 converts too, as the tests of the library's idempotence need: it keeps its comments and number
 * tokens at the same paths, its media's ids, names and order, its zero aspheric terms and a numeric flat radius other
 * than 1e15. The command line (`cli.mjs`) leaves an input already at the target version as it is.
 *
 * Going to V1, the file is the V1 view without catalog defaults (`toLensDataInput`, `toTeleconverterData`). A stop
 * whose radius the engine derives or takes from a schedule gets the `sd` V1's `SurfaceData` requires: the engine's
 * radius from `buildLens` on the source, to 0.001 mm, at the wide station of a zoom (a scheduled zoom's first schedule
 * value), which V1 ingest sets aside again and the report states. A file whose radius cannot be derived is refused. A
 * restored flat radius prints `1e15`, and a value V1 holds twice, or zero padding V1 requires, prints from its value.
 * A container a converter note names, "(moved from asph)", that the view would not write is written empty when the
 * note's run returns to it. The report lists each moved comment, each medium V1 cannot hold, and anything else
 * the V1 file drops.
 */

import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
import ts from "typescript";
import { parseLensDataSource } from "../lens-data-ast.mjs";
import { loadLensDataConversion } from "./load.mjs";
import { commentMisplaced, commentNotCarried, commentReplaced, movedNote, placeComments } from "./comments.mjs";
import { printLensDataObject } from "./print.mjs";
import { readLensDataFile } from "./read.mjs";
import { stopRadiusEntry } from "./report.mjs";

/* Named whole, so the seam guard sees which optics module this script loads. */
const BUILD_LENS_URL = new URL("../../src/optics/buildLens.ts", import.meta.url);

/** The type each kind of file satisfies, by version, and the module under `types/` that declares it. */
const FILE_TYPES = {
  1: { lens: ["LensDataInput", "optics.js"], teleconverter: ["TeleconverterDataInput", "teleconverter.js"] },
  2: { lens: ["LensDataV2Input", "lensDataV2.js"], teleconverter: ["TeleconverterDataV2Input", "lensDataV2.js"] },
};

let prettierOptions;

/** The repository's Prettier configuration, read once from its root; `null` when there is none. */
function formatOptions() {
  prettierOptions ??= prettier.resolveConfig(fileURLToPath(new URL("../../package.json", import.meta.url)));
  return prettierOptions;
}

/**
 * Format the statement that declares the object, and the export after it, as TypeScript under the repository's
 * Prettier configuration.
 *
 * @param {string} text - the printed statement and export
 * @returns {Promise<string>} Prettier's text of it
 * @throws when the repository has no Prettier configuration, which would format at Prettier's own defaults
 */
export async function formatWithPrettier(text) {
  const options = await formatOptions();
  if (!options) throw new Error("the repository has no Prettier configuration");
  return prettier.format(text, { ...options, parser: "typescript" });
}

/**
 * Load `buildLens` under plain Node, only for a file that drops a stop radius. The conversion seam registers the
 * specifier hook its modules need, and `buildLens` is not on that seam, which build metadata loads.
 *
 * @returns {Promise<{ default: (data: object) => object }>} the module
 */
async function loadBuildLens() {
  await loadLensDataConversion();
  return import(BUILD_LENS_URL.href);
}

/** Every number token of a source text, in order: its text as written and the value it reads as. */
function numberTokens(text) {
  const sourceFile = parseLensDataSource(text);
  const tokens = [];
  const visit = (node) => {
    if (ts.isNumericLiteral(node)) {
      const start = node.getStart(sourceFile);
      tokens.push({ start, end: node.end, text: text.slice(start, node.end), value: Number(node.text) });
    } else ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return tokens;
}

/**
 * Put the printer's number tokens back into Prettier's output.
 *
 * @param {string} printed - the printer's text
 * @param {string} formatted - Prettier's text of it
 * @returns {{ text: string } | { refusal: string }} the formatted text with each token as printed
 */
function restoreNumberTokens(printed, formatted) {
  const before = numberTokens(printed);
  const after = numberTokens(formatted);
  if (before.length !== after.length) {
    return { refusal: `formatting changed the number of number tokens from ${before.length} to ${after.length}` };
  }
  let text = formatted;
  for (let index = after.length - 1; index >= 0; index--) {
    const [printedToken, formattedToken] = [before[index], after[index]];
    if (!Object.is(printedToken.value, formattedToken.value)) {
      return {
        refusal: `formatting changed number token ${index + 1} from ${printedToken.text} to ${formattedToken.text}`,
      };
    }
    text = text.slice(0, formattedToken.start) + printedToken.text + text.slice(formattedToken.end);
  }
  return { text };
}

/** The number tokens inside each value of a read file, by path. */
function tokensByPath(read) {
  const byPath = new Map();
  const text = read.sourceFile.text;
  for (const node of read.nodes.values()) {
    if (node.kind !== "value") continue;
    const tokens = [];
    const visit = (child) => {
      if (ts.isNumericLiteral(child)) tokens.push(text.slice(child.getStart(read.sourceFile), child.end));
      else ts.forEachChild(child, visit);
    };
    visit(node.expression);
    byPath.set(node.path, tokens.join(" "));
  }
  return byPath;
}

/**
 * The file around the exported object: its header with the type import renamed, and the names the statement uses.
 *
 * @param {object} read - the file, as `readLensDataFile` reads it
 * @param {"lens" | "teleconverter"} kind - which kind of file it is
 * @param {1 | 2} toVersion - the version it converts to
 * @param {string | undefined} typesDirectory - the type import's directory, ending in `/`; the import's own by default
 * @returns {{ header: string, name: string, type: string } | { refusal: string }} the frame, or why there is none
 */
function frameOf(read, kind, toVersion, typesDirectory) {
  const { sourceFile, exported, declaration } = read;
  if (!exported || !declaration) return { refusal: "the file does not export a top-level const" };
  const declarator = declaration.declarationList.declarations[0];
  if (declaration.declarationList.declarations.length !== 1) {
    return { refusal: "the exported const shares its statement with another declaration" };
  }
  const satisfied = [declarator.initializer, exported.expression].find((node) => ts.isSatisfiesExpression(node));
  const typeName =
    satisfied && ts.isTypeReferenceNode(satisfied.type) ? satisfied.type.typeName.getText(sourceFile) : null;
  if (!typeName) return { refusal: "the exported object names no type with satisfies" };
  const typeImport = sourceFile.statements.find(
    (statement) =>
      ts.isImportDeclaration(statement) &&
      statement.importClause?.namedBindings &&
      ts.isNamedImports(statement.importClause.namedBindings) &&
      statement.importClause.namedBindings.elements.some((element) => element.name.text === typeName),
  );
  if (!typeImport) return { refusal: `the file does not import ${typeName}` };
  if (typeImport.importClause.namedBindings.elements.length !== 1 || typeImport.importClause.name) {
    return { refusal: `the import of ${typeName} imports more than the file's type` };
  }
  const later = sourceFile.statements.slice(sourceFile.statements.indexOf(declaration) + 1);
  if (later.some((statement) => statement !== exported)) {
    return { refusal: "a statement other than the export follows the exported const" };
  }
  const specifier = typeImport.moduleSpecifier.text;
  const directory = typesDirectory ?? specifier.slice(0, specifier.lastIndexOf("/") + 1);
  const [type, module] = FILE_TYPES[toVersion][kind];
  const text = sourceFile.text;
  const header =
    text.slice(0, typeImport.getStart(sourceFile)) +
    `import type { ${type} } from "${directory}${module}";` +
    text.slice(typeImport.end, declaration.getStart(sourceFile));
  return { header, name: declarator.name.getText(sourceFile), type };
}

/** An error's message on one line: its header and its first reason, as `ingest refuses it:` lists reasons. */
function headerAndFirstReason(error) {
  const [header, first] = String(error instanceof Error ? error.message : error).split("\n");
  return first === undefined ? header : `${header} ${first.trim().replace(/^•\s*/, "")}`;
}

/** A refusal by ingest, every reason on its own line. */
function ingestRefusal(lead, error) {
  return error?.issues ? `${lead}:\n  • ${error.issues.join("\n  • ")}` : `${lead}: ${error.message}`;
}

/**
 * The engine's stop radius for a lens, as the report states it, and as the V1 file writes it for V1's types. Only the
 * build is caught: a lens it cannot build has no radius, while a `buildLens` that cannot load fails the conversion.
 *
 * @param {"prime" | "held" | "perStation" | "schedule"} kind - how the engine sets the radius, as it says with the
 *   dropped value
 */
async function engineStopRadius(kind, data, loadBuildLensModule) {
  const { default: buildLens } = await loadBuildLensModule();
  let built;
  try {
    built = buildLens(structuredClone(data));
  } catch (error) {
    return { error: headerAndFirstReason(error) };
  }
  return { kind, radii: built.zoomStopSDs ?? [built.stopPhysSD] };
}

/** The V2 file of an ingested source: the V2 view, where each part of it came from, and how it prints. */
function writeV2(conversion, ingested, kind) {
  const writes = conversion.v2Writes();
  const toV2 = kind === "lens" ? conversion.toLensDataV2Input : conversion.toTeleconverterDataV2Input;
  return {
    data: toV2(ingested, writes),
    map: conversion.v2SourceMap(ingested, writes),
    order: writes.order,
    opensGroup: (member) => conversion.V2_GROUP_STARTS.includes(member),
    rowLists: conversion.V2_ROW_LISTS,
  };
}

/** Each member of a print order with the section it is in: the last group start at or before it. */
function sectionsOf(order, starts) {
  const sections = new Map();
  let section = "";
  for (const member of order) {
    if (starts.includes(member)) section = member;
    sections.set(member, section);
  }
  return sections;
}

/** The value at a dotted member path, `aberrationControl.varLabels`, or `undefined` when the path is no such path. */
function memberValue(value, path) {
  if (!/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*$/.test(path)) return undefined;
  return path.split(".").reduce((at, key) => (at !== null && typeof at === "object" ? at[key] : undefined), value);
}

/**
 * The V1 file of an ingested source: the V1 view, with the `sd` V1's types require on a stop the prescription holds
 * none for, and empty each container a converter note names that the view would not write, when the note's run
 * returns to it; where each part of it came from; and how it prints.
 *
 * @param {{ path: string, from: string }[]} notes - the source's leading comments that open with the converter's own
 *   note: the node each leads and the path its note names
 * @returns {Promise<object>} the file, or `{ refusal }` when the stop's radius cannot be derived or V1 ingest refuses
 *   the view
 */
async function writeV1(conversion, ingested, kind, source, loadBuildLensModule, notes) {
  const needed = kind === "lens" ? conversion.v1StopRadius(ingested.prescription) : undefined;
  let stopWritten;
  if (needed) {
    const at = conversion.childPath(conversion.childPath("surfaces", needed.index), "sd");
    const engine = await engineStopRadius(needed.stop, source, loadBuildLensModule);
    const radius = engine.radii?.[0];
    if (!Number.isFinite(radius) || radius <= 0) {
      const why = engine.error ?? `the engine's radius is ${radius}`;
      return { refusal: `${at}: V1's type requires a stop radius, and the engine derives none (${why})` };
    }
    stopWritten = { at, value: Number(radius.toFixed(3)), stop: needed.stop };
  }
  const view = (emptyContainers) =>
    kind === "lens"
      ? conversion.toLensDataInput(ingested, { stopRadius: stopWritten?.value, emptyContainers })
      : conversion.toTeleconverterData(ingested, { emptyContainers });
  const mapOf = (written) => conversion.v1SourceMap(ingested, kind, written);
  let data = view([]);
  let map;
  try {
    map = mapOf(data);
    /* A container a note names and the view leaves out is written empty, and kept so when the note's run returns. */
    const missing = [...new Set(notes.map((note) => note.from))].filter(
      (from) => memberValue(data, from) === undefined,
    );
    if (missing.length > 0) {
      const trial = view(missing);
      const trialMap = mapOf(trial);
      const returned = missing.filter(
        (from) =>
          memberValue(trial, from) !== undefined &&
          notes.some((note) => note.from === from && trialMap.commentTarget(note.path, true, from).noted),
      );
      if (returned.length === missing.length) [data, map] = [trial, trialMap];
      else if (returned.length > 0) {
        data = view(returned);
        map = mapOf(data);
      }
    }
  } catch (error) {
    return { refusal: ingestRefusal("V1 ingest refuses the V1 view of it", error) };
  }
  const sections = sectionsOf(conversion.V1_PRINT_ORDER[kind], conversion.V1_GROUP_STARTS[kind]);
  return {
    data,
    map,
    order: map.order,
    opensGroup: (member, previous) => sections.get(member) !== sections.get(previous),
    rowLists: conversion.V1_ROW_LISTS,
    stopWritten,
  };
}

/** The source's leading comments that open with the converter's own note: the node each leads and the path it names. */
function notesOf(comments) {
  return comments.flatMap((comment) => {
    const note = comment.placement === "leading" && comment.path !== undefined ? movedNote(comment.text) : undefined;
    return note ? [{ path: comment.path, from: note.from }] : [];
  });
}

/** A number's exponent spelling, `1e15` for 1e15, which `String` would write as sixteen digits. */
function exponentText(value) {
  return value.toExponential().replace("e+", "e");
}

/**
 * Convert the text of a lens or teleconverter file to V2, or to V1.
 *
 * @param {string} content - the file's text
 * @param {object} options - how to convert it
 * @param {string} options.file - the file's repository-relative path, for messages and the report
 * @param {"lens" | "teleconverter"} options.kind - which kind of file it is
 * @param {1 | 2} [options.toVersion] - the version to convert to; 2 by default
 * @param {string} [options.typesDirectory] - the directory, ending in `/`, from which the converted file imports its
 *   type, for a file written at another depth than its source; the source's own by default
 * @param {() => Promise<object>} [options.loadConversion] - loads the engine's conversion seam
 * @param {() => Promise<{ default: Function }>} [options.loadBuildLens] - loads `buildLens`, for the stop report, and
 *   going to V1 for the radius of a stop the prescription holds none for
 * @param {(text: string) => Promise<string>} [options.format] - formats the printed statement; Prettier's API under
 *   the repository's configuration unless a test shows a refusal with another
 * @returns {Promise<{ text: string | undefined, refusal: string | undefined, report: object }>} the converted text, or
 *   the reason the file is refused; and the report of what moved or dropped
 */
export async function convertLensDataSource(content, options) {
  const { file, kind } = options;
  const toVersion = options.toVersion ?? 2;
  const report = { file, moved: [], stops: [], zeroTerms: [], dropped: [] };
  if (toVersion === 1) report.media = [];
  const refuse = (reason) => ({ text: undefined, refusal: reason, report });
  const conversion = await (options.loadConversion ?? loadLensDataConversion)();
  const ingest = kind === "lens" ? conversion.ingestLens : conversion.ingestTeleconverter;
  const loadBuildLensModule = options.loadBuildLens ?? loadBuildLens;

  let read;
  let ingested;
  try {
    read = readLensDataFile(content, file, conversion);
  } catch (error) {
    return refuse(`the file cannot be read: ${error.message}`);
  }
  const frame = frameOf(read, kind, toVersion, options.typesDirectory);
  if (frame.refusal) return refuse(frame.refusal);
  try {
    ingested = ingest(read.value, { sources: true });
  } catch (error) {
    return refuse(ingestRefusal("ingest refuses it", error));
  }

  const written =
    toVersion === 2
      ? writeV2(conversion, ingested, kind)
      : await writeV1(conversion, ingested, kind, read.value, loadBuildLensModule, notesOf(read.comments));
  if (written.refusal) return refuse(written.refusal);
  const { data, map, order, opensGroup, rowLists } = written;

  /* Text: the literal at the place the engine read each value from, where it is still exactly that value. */
  const texts = new Map();
  const kept = new Set();
  const containers = new Set();
  const visit = (path, value) => {
    if (value !== null && typeof value === "object") {
      containers.add(path);
      for (const key of Array.isArray(value) ? value.keys() : (order[path] ?? Object.keys(value))) {
        visit(conversion.childPath(path, key), value[key]);
      }
      return;
    }
    const source = read.nodes.get(map.textSource(path));
    if (source?.text !== undefined && Object.is(source.value, value)) {
      texts.set(path, source.text);
      kept.add(source.path);
    } else if (toVersion === 1 && value === conversion.V1_FLAT_RADIUS) {
      texts.set(path, exponentText(value));
    }
  };
  visit("", data);

  const placed = placeComments({
    comments: read.comments,
    commentTarget: (path, leading, movedFrom) => map.commentTarget(path, leading, movedFrom),
    textKept: (path) => kept.has(path),
    isContainer: (path) => containers.has(path),
  });
  if (placed.unattached.length > 0) {
    const [comment] = placed.unattached;
    return refuse(`the comment at line ${comment.line} sits ${comment.reason ?? "outside the exported object"}`);
  }
  report.moved = placed.moved;

  const objectText = printLensDataObject({
    value: data,
    order,
    text: (path) => texts.get(path),
    comments: (path) => placed.byPath.get(path),
    blankBefore: (path) => read.nodes.get(map.recordSource(path))?.blankBefore ?? false,
    opensGroup,
    rowLists,
    childPath: conversion.childPath,
  });
  const printed = `const ${frame.name} = ${objectText} satisfies ${frame.type};\n\nexport default ${frame.name};\n`;
  let formatted;
  try {
    formatted = await (options.format ?? formatWithPrettier)(printed);
  } catch (error) {
    return refuse(`Prettier cannot format it: ${String(error.message).split("\n")[0]}`);
  }
  const restored = restoreNumberTokens(printed, formatted);
  if (restored.refusal) return refuse(restored.refusal);
  const text = frame.header + restored.text;

  /* The bytes to be written: number tokens where the printer put them, each comment once, the same prescription. */
  const printedRead = readLensDataFile(printed, file, conversion);
  const outputRead = readLensDataFile(text, file, conversion);
  const printedTokens = tokensByPath(printedRead);
  const outputTokens = tokensByPath(outputRead);
  for (const [path, tokens] of printedTokens) {
    if (outputTokens.get(path) !== tokens) {
      return refuse(`${path || "(root)"} reads back as ${outputTokens.get(path) ?? "nothing"}, not ${tokens}`);
    }
  }
  const uncarried = commentNotCarried(read.comments, outputRead.comments);
  if (uncarried) return refuse(uncarried);
  const misplaced = commentMisplaced(placed.byPath, printedRead.comments);
  if (misplaced) return refuse(misplaced);
  const replaced = commentReplaced(printedRead.comments, outputRead.comments);
  if (replaced) return refuse(replaced);
  let reingested;
  try {
    reingested = ingest(outputRead.value);
  } catch (error) {
    return refuse(ingestRefusal("the converted file does not ingest", error));
  }
  const difference = conversion.prescriptionDifference(ingested.prescription, reingested.prescription);
  if (difference) return refuse(`the converted file ingests to another prescription: ${difference}`);

  /* The report: what the converted file no longer holds, and going to V1 what it holds for V1's types. */
  if (toVersion === 1) {
    report.dropped = map.dropped.map((value) => ({ from: value.from, value: value.value, kind: value.kind }));
    report.media = map.media.map((medium) => ({ ...medium }));
    if (written.stopWritten) report.stopWritten = written.stopWritten;
    return { text, refusal: undefined, report };
  }
  const zeroTerms = new Map();
  for (const value of map.dropped) {
    if (value.kind === "stopRadius") {
      const engine = await engineStopRadius(value.stop, data, loadBuildLensModule);
      const authored = read.nodes.get(value.from);
      const stop = { from: value.from, text: authored?.text ?? String(value.value), value: value.value, engine };
      report.stops.push(stopRadiusEntry(stop, read.comments, conversion.parentPath));
    } else if (value.kind === "zeroTerm") {
      const entry = conversion.parentPath(value.from);
      if (!zeroTerms.has(entry)) zeroTerms.set(entry, []);
      zeroTerms.get(entry).push(value.from.slice(entry.length + 1));
    } else {
      report.dropped.push({ from: value.from, value: value.value, kind: value.kind });
    }
  }
  report.zeroTerms = [...zeroTerms].map(([entry, terms]) => ({ entry, terms }));
  return { text, refusal: undefined, report };
}
