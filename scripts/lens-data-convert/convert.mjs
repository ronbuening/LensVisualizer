/**
 * Lens-data converter library — converts the text of a lens or teleconverter file to V2 text, with a report of what
 * moved or dropped, or refuses it with the reason (OPTICS_ENGINE_REWRITE_SPEC.md, Ingest, conversion and comments).
 *
 * One conversion:
 * 1. reads the file without running it (`read.mjs`) and ingests its value with source paths, through the engine's
 *    lens-data conversion seam, loaded by path under plain Node (`loadLensDataConversion`);
 * 2. writes the V2 view, composes where each part of it came from, carries each comment there (`comments.mjs`) and
 *    keeps each literal's source text where the rule below allows, then prints the object (`print.mjs`);
 * 3. formats the statement that declares the object, and the export after it, with Prettier's API under the
 *    repository's configuration, read once; Prettier never sees the file's header or its path;
 * 4. puts the printer's number tokens back where Prettier respelled them, so `1.05587e-7` stays as written;
 * 5. checks the bytes it would write: every number token where the printer put it; every comment of the source once,
 *    header included, as written or with its moved-from note; every comment on the node and in the placement the
 *    placer gave it, as the printed text reads and as formatting leaves it, so a second conversion carries it nowhere
 *    else; and an ingest of the result equal to the source's prescription under the fingerprint's rules.
 *
 * The file around the object keeps its shape: everything before the statement that declares the exported const is
 * kept byte for byte, except the type import, which names the V2 type from `types/lensDataV2.js` at the import's own
 * depth. The statement is always `const X = {…} satisfies T;` and the export `export default X;`, X keeping its
 * name; any other top-level const sits in the kept header and stays as written.
 *
 * A literal keeps its source text — a number's spelling, a sign, a computed number, a `+` chain of strings — when the
 * engine names the place the value was read from, the text there names no binding, and it evaluates to exactly the
 * value written; `as`, `satisfies` and parentheses around it are dropped. Anything else prints from its value.
 *
 * A source already in V2 converts too, as the tests of the library's idempotence need: it keeps its comments and number
 * tokens at the same paths, its media's ids, names and order, its zero aspheric terms and a numeric flat radius other
 * than 1e15. The command line (S2.P3.T2) leaves an input already at the target version as it is.
 */

import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
import ts from "typescript";
import { parseLensDataSource } from "../lens-data-ast.mjs";
import { loadLensDataConversion } from "../lens-summaries.mjs";
import { commentMisplaced, commentNotCarried, commentReplaced, placeComments } from "./comments.mjs";
import { printLensDataObject } from "./print.mjs";
import { readLensDataFile } from "./read.mjs";
import { stopRadiusEntry } from "./report.mjs";

/* Named whole, so the seam guard sees which optics module this script loads. */
const BUILD_LENS_URL = new URL("../../src/optics/buildLens.ts", import.meta.url);

/** The V2 type each kind of file satisfies. */
const V2_TYPES = { lens: "LensDataV2Input", teleconverter: "TeleconverterDataV2Input" };

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
 * @returns {{ header: string, name: string, type: string } | { refusal: string }} the frame, or why there is none
 */
function frameOf(read, kind) {
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
  const directory = specifier.slice(0, specifier.lastIndexOf("/") + 1);
  const type = V2_TYPES[kind];
  const text = sourceFile.text;
  const header =
    text.slice(0, typeImport.getStart(sourceFile)) +
    `import type { ${type} } from "${directory}lensDataV2.js";` +
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
 * The engine's stop radius for a converted lens, as the report states it. Only the build is caught: a lens it cannot
 * build has no radius to state, while a `buildLens` that cannot load fails the conversion.
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

/**
 * Convert the text of a lens or teleconverter file to V2.
 *
 * @param {string} content - the file's text
 * @param {object} options - how to convert it
 * @param {string} options.file - the file's repository-relative path, for messages and the report
 * @param {"lens" | "teleconverter"} options.kind - which kind of file it is
 * @param {() => Promise<object>} [options.loadConversion] - loads the engine's conversion seam
 * @param {() => Promise<{ default: Function }>} [options.loadBuildLens] - loads `buildLens`, for the stop report
 * @param {(text: string) => Promise<string>} [options.format] - formats the printed statement; Prettier's API under
 *   the repository's configuration unless a test shows a refusal with another
 * @returns {Promise<{ text: string | undefined, refusal: string | undefined, report: object }>} the converted text, or
 *   the reason the file is refused; and the report of what moved or dropped
 */
export async function convertLensDataSource(content, options) {
  const { file, kind } = options;
  const report = { file, moved: [], stops: [], zeroTerms: [], dropped: [] };
  const refuse = (reason) => ({ text: undefined, refusal: reason, report });
  const conversion = await (options.loadConversion ?? loadLensDataConversion)();
  const ingest = kind === "lens" ? conversion.ingestLens : conversion.ingestTeleconverter;
  const toV2 = kind === "lens" ? conversion.toLensDataV2Input : conversion.toTeleconverterDataV2Input;

  let read;
  let ingested;
  try {
    read = readLensDataFile(content, file, conversion);
  } catch (error) {
    return refuse(`the file cannot be read: ${error.message}`);
  }
  const frame = frameOf(read, kind);
  if (frame.refusal) return refuse(frame.refusal);
  try {
    ingested = ingest(read.value, { sources: true });
  } catch (error) {
    return refuse(ingestRefusal("ingest refuses it", error));
  }

  const writes = conversion.v2Writes();
  const data = toV2(ingested, writes);
  const map = conversion.v2SourceMap(ingested, writes);

  /* Text: the literal at the place the engine read each value from, where it is still exactly that value. */
  const texts = new Map();
  const kept = new Set();
  const containers = new Set();
  const visit = (path, value) => {
    if (value !== null && typeof value === "object") {
      containers.add(path);
      for (const key of Array.isArray(value) ? value.keys() : (writes.order[path] ?? Object.keys(value))) {
        visit(conversion.childPath(path, key), value[key]);
      }
      return;
    }
    const source = read.nodes.get(map.textSource(path));
    if (source?.text !== undefined && Object.is(source.value, value)) {
      texts.set(path, source.text);
      kept.add(source.path);
    }
  };
  visit("", data);

  const placed = placeComments({
    comments: read.comments,
    commentTarget: (path, leading) => map.commentTarget(path, leading),
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
    order: writes.order,
    text: (path) => texts.get(path),
    comments: (path) => placed.byPath.get(path),
    blankBefore: (path) => read.nodes.get(map.recordSource(path))?.blankBefore ?? false,
    opensGroup: (member) => conversion.V2_GROUP_STARTS.includes(member),
    rowLists: conversion.V2_ROW_LISTS,
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

  /* The report: what the converted file no longer holds. */
  const zeroTerms = new Map();
  for (const value of map.dropped) {
    if (value.kind === "stopRadius") {
      const engine = await engineStopRadius(value.stop, data, options.loadBuildLens ?? loadBuildLens);
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
