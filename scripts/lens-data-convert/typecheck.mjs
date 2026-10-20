/**
 * Converter type-check — checks converted lens-data files against their types where they will be written, without
 * writing them.
 *
 * One TypeScript program per run: its roots are the converted files, each served in memory at the path it will be
 * written to (in place, its input's own path), so its type import resolves from there; every other file comes from
 * disk. The compiler options are the repository's `tsconfig.json`. Every diagnostic is returned: those in a converted
 * file with that file, any other apart.
 */

import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

/** The repository root, where `tsconfig.json` is. */
const ROOT = fileURLToPath(new URL("../../", import.meta.url));

/** The repository's compiler options, read from its `tsconfig.json`. */
function repositoryOptions() {
  const path = join(ROOT, "tsconfig.json");
  const read = ts.readConfigFile(path, ts.sys.readFile);
  if (read.error) {
    throw new Error(`cannot read ${path}: ${ts.flattenDiagnosticMessageText(read.error.messageText, " ")}`);
  }
  const parsed = ts.parseJsonConfigFileContent(read.config, ts.sys, dirname(path), undefined, path);
  if (parsed.errors.length > 0) {
    throw new Error(`cannot use ${path}: ${ts.flattenDiagnosticMessageText(parsed.errors[0].messageText, " ")}`);
  }
  return parsed.options;
}

/** A diagnostic on one line: where it is, its code and its message. */
function describe(diagnostic) {
  const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, " ");
  if (!diagnostic.file || diagnostic.start === undefined) return `TS${diagnostic.code}: ${message}`;
  const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
  return `${line + 1}:${character + 1} TS${diagnostic.code}: ${message}`;
}

/**
 * Type-check converted files at the paths they will be written to.
 *
 * @param {{ path: string, text: string }[]} files - each converted file's destination and text
 * @returns {{ byFile: Map<string, string[]>, other: string[] }} each converted file's diagnostics, by its destination
 *   as given, and every diagnostic that is in no converted file
 */
export function typeCheckConvertedFiles(files) {
  const options = repositoryOptions();
  const overlay = new Map(files.map((file) => [resolve(file.path), file]));
  const host = ts.createCompilerHost(options, true);
  const { getSourceFile, fileExists, readFile } = host;
  host.getSourceFile = (fileName, languageVersion, onError, shouldCreate) => {
    const file = overlay.get(resolve(fileName));
    if (file) return ts.createSourceFile(fileName, file.text, languageVersion, true);
    return getSourceFile.call(host, fileName, languageVersion, onError, shouldCreate);
  };
  host.fileExists = (fileName) => overlay.has(resolve(fileName)) || fileExists.call(host, fileName);
  host.readFile = (fileName) => overlay.get(resolve(fileName))?.text ?? readFile.call(host, fileName);

  const program = ts.createProgram({ rootNames: [...overlay.keys()], options, host });
  const byFile = new Map(files.map((file) => [file.path, []]));
  const other = [];
  for (const diagnostic of ts.getPreEmitDiagnostics(program)) {
    const file = diagnostic.file && overlay.get(resolve(diagnostic.file.fileName));
    if (file) byFile.get(file.path).push(describe(diagnostic));
    else other.push(diagnostic.file ? `${diagnostic.file.fileName}:${describe(diagnostic)}` : describe(diagnostic));
  }
  return { byFile, other };
}
