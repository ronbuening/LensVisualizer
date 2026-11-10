/**
 * where-used — where a file, or one of its exports, is used across the repository.
 *
 *   npm run where-used -- <file>            files that load <file>, directly or through a re-export
 *   npm run where-used -- <file>#<symbol>   every reference to one export, followed through barrels
 *
 * The per-folder readme maps list only importing folders, and grep cannot follow the public barrels
 * (agent_docs/architecture/public-functions.md). Answers here come from the TypeScript language
 * service over tsconfig.json's project. A symbol query resolves the export to its original
 * declaration before calling `findReferences`, which then follows named, renamed and `export *`
 * re-exports, namespace members and default imports; started from a renamed re-export it would
 * find only the references spelled with the new name. Lens-data files join the project only when they
 * mention the target's file stem or the symbol: they import nothing but the V2 data contract, and
 * loading all of them adds over a second to every query.
 *
 * scripts/ and root-level config files are outside the TypeScript project, so they are read
 * syntactically. A string literal that resolves to a repo file is a module reference (static and
 * dynamic imports, `join(ROOT, "src/…")` loaders, `new URL(…, import.meta.url)`), and each name a
 * script takes from it is looked up in the project's export tables, which finds a script that
 * imports a symbol through a barrel. A script's uses of an imported name are the occurrences of
 * its local identifier, without scope analysis. package.json is read for literal script paths.
 *
 * Read-only: prints `path:line` per reference, grouped by top-level area, and writes nothing.
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";
import ts from "typescript";

const REPO_ROOT = resolve(import.meta.dirname, "..");

const USAGE = `Usage: npm run where-used -- <file>[#<symbol>]

  <file>            files that import or name <file>, directly or through a re-export
  <file>#<symbol>   references to the export <symbol>, followed through re-exports;
                    #default names a default export

<file> is relative to the working directory (the repo root under npm run). A .js
specifier or an extensionless module path resolves as an import would.`;

/** Report order of the top-level areas; other folders follow alphabetically, root files last. */
const AREA_ORDER = ["src", "__tests__", "reports", "scripts"];
const ROOT_AREA = "(root)";
const LENS_DATA_PREFIX = "src/lens-data/";
const CODE_EXTENSION = /\.[cm]?[jt]sx?$/;
const DECLARATION_FILE = /\.d\.[cm]?ts$/;
/* Suffixes tried for an extensionless path: a TypeScript or script module, then a folder index. */
const MODULE_SUFFIXES = [".ts", ".tsx", ".mjs", ".js", "/index.ts", "/index.tsx", "/index.js"];
const SNIPPET_LENGTH = 90;
const LOCATION_WIDTH = 72;

/** A query the repository cannot answer as asked; the CLI prints its message without a stack. */
class QueryError extends Error {}

/* ── Paths ── */

const repoPath = (root, file) => relative(root, file).split(sep).join("/");

function areaOf(path) {
  const slash = path.indexOf("/");
  return slash < 0 ? ROOT_AREA : path.slice(0, slash);
}

function areaRank(area) {
  const index = AREA_ORDER.indexOf(area);
  if (index >= 0) return index;
  return area === ROOT_AREA ? AREA_ORDER.length + 1 : AREA_ORDER.length;
}

/** Repo code the scans read: no dependencies, TypeScript libs or JSON modules. */
function isRepoCode(root, fileName) {
  const path = repoPath(root, fileName);
  return !path.startsWith("..") && !path.includes("node_modules/") && CODE_EXTENSION.test(path);
}

/**
 * Resolve module specifiers and path strings to repo files. `./` and `../` are relative to the
 * citing file and `folder/…` to the root, as `join(ROOT, …)` loaders use them. Source writes `.js`
 * for `.ts`/`.tsx`, scripts write `.ts`, and an extensionless path may name a module or an index.
 */
function createPathResolver(root) {
  const fileCache = new Map();
  const isFile = (path) => {
    if (!fileCache.has(path)) fileCache.set(path, existsSync(path) && statSync(path).isFile());
    return fileCache.get(path);
  };
  const moduleFile = (path) => {
    const candidates = [path];
    if (/\.jsx?$/.test(path)) candidates.push(path.replace(/\.jsx?$/, ".ts"), path.replace(/\.jsx?$/, ".tsx"));
    else if (!CODE_EXTENSION.test(path)) candidates.push(...MODULE_SUFFIXES.map((suffix) => path + suffix));
    return candidates.find(isFile);
  };
  return {
    moduleFile,
    fromText(text, fromFile) {
      if (text.startsWith("./") || text.startsWith("../")) return moduleFile(resolve(dirname(fromFile), text));
      if (/^[\w.-]+\//.test(text)) return moduleFile(resolve(root, text));
      return undefined;
    },
  };
}

/* ── TypeScript project ── */

/**
 * Code under scripts/ and at the root. Declarations (`.d.mts`) join the project so consumers'
 * names resolve through them; sources are scanned syntactically.
 */
function listPlainFiles(root) {
  const sources = [];
  const declarations = [];
  const visit = (dir, recurse) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (recurse) visit(path, true);
      } else if (DECLARATION_FILE.test(entry.name)) declarations.push(path);
      else if (CODE_EXTENSION.test(entry.name)) sources.push(path);
    }
  };
  visit(root, false);
  if (existsSync(join(root, "scripts"))) visit(join(root, "scripts"), true);
  return { sources, declarations };
}

/** Language service over tsconfig.json's files, minus lens-data files that mention no needle. */
function createProject(root, needles, extraRoots) {
  const config = ts.getParsedCommandLineOfConfigFile(join(root, "tsconfig.json"), undefined, {
    ...ts.sys,
    onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
      throw new QueryError(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
    },
  });
  const rootNames = config.fileNames.filter((file) => {
    if (!repoPath(root, file).startsWith(LENS_DATA_PREFIX)) return true;
    const text = readFileSync(file, "utf8");
    return needles.some((needle) => text.includes(needle));
  });
  rootNames.push(...extraRoots);

  const service = ts.createLanguageService(
    {
      getScriptFileNames: () => rootNames,
      getScriptVersion: () => "0",
      getScriptSnapshot: (file) => {
        const text = ts.sys.readFile(file);
        return text === undefined ? undefined : ts.ScriptSnapshot.fromString(text);
      },
      getCurrentDirectory: () => root,
      getCompilationSettings: () => config.options,
      getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
      fileExists: ts.sys.fileExists,
      readFile: ts.sys.readFile,
      readDirectory: ts.sys.readDirectory,
      directoryExists: ts.sys.directoryExists,
      getDirectories: ts.sys.getDirectories,
    },
    ts.createDocumentRegistry(),
  );
  const program = service.getProgram();
  const checker = program.getTypeChecker();

  /** A module's file in the project; a plain `.mjs`/`.js` module answers through its declaration. */
  const sourceFileFor = (file) =>
    program.getSourceFile(file) ?? program.getSourceFile(file.replace(/\.([cm]?)js$/, ".d.$1ts"));
  /** The declaration an export or import alias finally names, through every re-export hop. */
  const original = (symbol) => (symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol);
  /**
   * What `name` exported from `file` resolves to: the declaring symbol, a `file#name` key for a
   * plain module outside the project, or undefined when the module does not export it.
   */
  const exportOrigin = (file, name) => {
    const sourceFile = sourceFileFor(file);
    if (!sourceFile) return `${file}#${name}`;
    const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
    const exported = moduleSymbol && checker.tryGetMemberInModuleExports(name, moduleSymbol);
    return exported ? original(exported) : undefined;
  };
  return { service, program, checker, sourceFileFor, original, exportOrigin };
}

/** Whether a plain module outside the project exports `name`, from its own syntax alone. */
function declaresExport(file, name) {
  const program = ts.createProgram([file], { allowJs: true, noLib: true, noResolve: true, types: [] });
  const checker = program.getTypeChecker();
  const moduleSymbol = checker.getSymbolAtLocation(program.getSourceFile(file));
  return Boolean(moduleSymbol && checker.tryGetMemberInModuleExports(name, moduleSymbol));
}

const declaredIn = (symbol, sourceFile) =>
  Boolean(sourceFile) && (symbol.declarations ?? []).some((declaration) => declaration.getSourceFile() === sourceFile);

/** Where `findReferences` starts for a declaration: its name, or `default` in an anonymous default export. */
function namePosition(declaration) {
  const name = ts.getNameOfDeclaration(declaration);
  if (name) return name.getStart();
  const isDefault = (node) => node.kind === ts.SyntaxKind.DefaultKeyword;
  const modifiers = ts.canHaveModifiers(declaration) ? ts.getModifiers(declaration) : undefined;
  return (modifiers?.find(isDefault) ?? declaration.getChildren().find(isDefault) ?? declaration).getStart();
}

/** Innermost node spanning `position`; tokens such as keywords resolve to their parent. */
function nodeAt(sourceFile, position) {
  let node = sourceFile;
  for (;;) {
    const child = node.forEachChild((candidate) =>
      candidate.getStart(sourceFile) <= position && position < candidate.end ? candidate : undefined,
    );
    if (!child) return node;
    node = child;
  }
}

/* ── Syntactic module references ── */

/**
 * String literals that resolve to a repo file: import and export specifiers, dynamic imports,
 * mocked module paths and path strings handed to loaders.
 */
function moduleReferences(sourceFile, paths) {
  const references = [];
  const visit = (node) => {
    if (ts.isStringLiteralLike(node)) {
      const file = paths.fromText(node.text, sourceFile.fileName);
      if (file) references.push({ literal: node, file });
    }
    node.forEachChild(visit);
  };
  visit(sourceFile);
  return references;
}

/** `ns.member` reads of a namespace binding, one binding per read. */
function memberReads(sourceFile, namespace) {
  const reads = [];
  const visit = (node) => {
    if (
      ts.isPropertyAccessExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === namespace.text
    ) {
      reads.push({ imported: node.name.text, site: node });
    }
    node.forEachChild(visit);
  };
  visit(sourceFile);
  return reads;
}

/**
 * Names a file takes through one module reference. Import clauses, `export … from` lists and
 * `import("x").Name` types bind by name. A dynamic import or loader call binds whatever receives
 * its awaited result: a destructuring pattern, a namespace variable's `ns.member` reads, or
 * `(await …).member`; a path that is never awaited (a URL constant, a file read) binds nothing.
 * Each binding carries `imported` (the export name, `*` for `export *`), `site` (the node to
 * report), the `local` identifier whose other occurrences are its uses, and `reexport`.
 */
function moduleBindings(reference, sourceFile) {
  const { literal } = reference;
  const owner = literal.parent;
  if (ts.isLiteralTypeNode(owner) && ts.isImportTypeNode(owner.parent)) {
    // `import("x").Name.Member` takes `Name`; a bare `typeof import("x")` names no export.
    let name = owner.parent.qualifier;
    while (name && ts.isQualifiedName(name)) name = name.left;
    return name ? [{ imported: name.text, site: name }] : [];
  }
  if (ts.isImportDeclaration(owner)) {
    const clause = owner.importClause;
    if (!clause) return [];
    const bindings = clause.name ? [{ imported: "default", site: clause.name, local: clause.name }] : [];
    const named = clause.namedBindings;
    if (named && ts.isNamespaceImport(named)) bindings.push(...memberReads(sourceFile, named.name));
    else if (named) {
      for (const element of named.elements) {
        bindings.push({ imported: (element.propertyName ?? element.name).text, site: element, local: element.name });
      }
    }
    return bindings;
  }
  if (ts.isExportDeclaration(owner)) {
    const clause = owner.exportClause;
    if (!clause || ts.isNamespaceExport(clause)) return [{ imported: "*", site: literal, reexport: true }];
    return clause.elements.map((element) => ({
      imported: (element.propertyName ?? element.name).text,
      site: element,
      reexport: true,
    }));
  }

  let expression = literal;
  let awaited = false;
  for (let parent = expression.parent; ; parent = expression.parent) {
    if (ts.isAwaitExpression(parent)) awaited = true;
    else if (
      !ts.isCallExpression(parent) &&
      !ts.isNewExpression(parent) &&
      !ts.isParenthesizedExpression(parent) &&
      !(ts.isPropertyAccessExpression(parent) && parent.name.text === "href")
    ) {
      break;
    }
    expression = parent;
  }
  if (!awaited) return [];
  const holder = expression.parent;
  if (ts.isPropertyAccessExpression(holder)) return [{ imported: holder.name.text, site: holder }];
  if (!ts.isVariableDeclaration(holder)) return [];
  if (ts.isIdentifier(holder.name)) return memberReads(sourceFile, holder.name);
  if (!ts.isObjectBindingPattern(holder.name)) return [];
  return holder.name.elements.flatMap((element) => {
    const key = element.propertyName ?? element.name;
    if (!ts.isIdentifier(element.name) || !(ts.isIdentifier(key) || ts.isStringLiteral(key))) return [];
    return [{ imported: key.text, site: element, local: element.name }];
  });
}

/** Where a script uses an imported name: other occurrences of its local identifier, else the import. */
function bindingUses(sourceFile, binding) {
  if (!binding.local) return [binding.site];
  const uses = [];
  const visit = (node) => {
    if (ts.isImportDeclaration(node)) return;
    if (ts.isIdentifier(node) && node.text === binding.local.text && node !== binding.local) uses.push(node);
    node.forEachChild(visit);
  };
  visit(sourceFile);
  return uses.length > 0 ? uses : [binding.site];
}

/* ── Sites ── */

function siteAt(root, sourceFile, position) {
  const { line } = sourceFile.getLineAndCharacterOfPosition(position);
  const starts = sourceFile.getLineStarts();
  const text = sourceFile.text.slice(starts[line], starts[line + 1] ?? sourceFile.text.length).trim();
  return { file: repoPath(root, sourceFile.fileName), line: line + 1, text };
}

const siteOf = (root, node) => siteAt(root, node.getSourceFile(), node.getStart());

/** One site per line, in area order, then path, then line. */
function sortSites(sites) {
  const unique = new Map(sites.map((site) => [`${site.file}:${site.line}`, site]));
  return [...unique.values()].sort((a, b) => {
    const [areaA, areaB] = [areaOf(a.file), areaOf(b.file)];
    if (areaA !== areaB) return areaRank(areaA) - areaRank(areaB) || (areaA < areaB ? -1 : 1);
    if (a.file !== b.file) return a.file < b.file ? -1 : 1;
    return a.line - b.line;
  });
}

/* ── Queries ── */

/**
 * Every reference to one export. TypeScript references come from `findReferences` on the original
 * declaration: import specifiers are reported only for files with no other reference, and
 * re-export sites (including `export *` barrels, which carry no identifier) are listed apart.
 * Scripts contribute the uses of each name they take whose export resolves to the same declaration.
 */
function symbolUsages({ root, paths, project, file, projectFiles, plainFiles }, symbol) {
  const { service, program, exportOrigin } = project;
  const identity = exportOrigin(file, symbol);
  if (!identity || (typeof identity === "string" && !declaresExport(file, symbol))) {
    throw new QueryError(`${repoPath(root, file)} does not export "${symbol}".`);
  }

  const declarations = typeof identity === "string" ? [] : (identity.declarations ?? []);
  const declaredAt = new Set(declarations.map((node) => `${node.getSourceFile().fileName}:${namePosition(node)}`));
  const declaringFiles = new Set(declarations.map((node) => node.getSourceFile()));
  const exportedAs = new Set([symbol]);
  const uses = [];
  const imports = [];
  const reexports = [];

  const [first] = declarations;
  const groups = first ? (service.findReferences(first.getSourceFile().fileName, namePosition(first)) ?? []) : [];
  for (const entry of groups.flatMap((group) => group.references)) {
    const sourceFile = program.getSourceFile(entry.fileName);
    if (!sourceFile || !isRepoCode(root, entry.fileName)) continue;
    if (declaredAt.has(`${sourceFile.fileName}:${entry.textSpan.start}`)) continue;
    const site = siteAt(root, sourceFile, entry.textSpan.start);
    const parent = nodeAt(sourceFile, entry.textSpan.start).parent;
    if (parent && (ts.isExportSpecifier(parent) || ts.isExportAssignment(parent))) {
      exportedAs.add(ts.isExportSpecifier(parent) ? parent.name.text : "default");
      if (!declaringFiles.has(sourceFile)) reexports.push(site);
    } else if (
      parent &&
      (ts.isImportSpecifier(parent) ||
        ts.isImportClause(parent) ||
        ts.isNamespaceImport(parent) ||
        ts.isImportEqualsDeclaration(parent))
    ) {
      imports.push(site);
    } else {
      uses.push(site);
    }
  }

  for (const sourceFile of projectFiles) {
    for (const statement of sourceFile.statements) {
      if (!ts.isExportDeclaration(statement) || statement.exportClause) continue;
      const specifier = statement.moduleSpecifier;
      const module = specifier && ts.isStringLiteral(specifier) && paths.fromText(specifier.text, sourceFile.fileName);
      if (module && [...exportedAs].some((name) => exportOrigin(module, name) === identity)) {
        reexports.push(siteAt(root, sourceFile, statement.getStart()));
      }
    }
  }

  for (const sourceFile of plainFiles) {
    for (const reference of moduleReferences(sourceFile, paths)) {
      for (const binding of moduleBindings(reference, sourceFile)) {
        if (exportOrigin(reference.file, binding.imported) !== identity) continue;
        if (binding.reexport) reexports.push(siteOf(root, binding.site));
        else uses.push(...bindingUses(sourceFile, binding).map((node) => siteOf(root, node)));
      }
    }
  }

  const covered = new Set([...uses, ...reexports].map((site) => site.file));
  return {
    declarations: declarations.map((node) => siteAt(root, node.getSourceFile(), namePosition(node))),
    reexports,
    references: [...uses, ...imports.filter((site) => !covered.has(site.file))],
    throughReexports: [],
  };
}

/**
 * Files that load the target. Direct references are literals that resolve to it. A barrel is any
 * module that exports one of the target's declarations, found outward from the target's importers;
 * files that take such a name from a barrel, or `export *` it onward, are through-re-export users.
 */
function fileUsages({ root, paths, project, file, projectFiles, plainFiles }) {
  const { checker, sourceFileFor, original, exportOrigin } = project;
  const scanned = [...projectFiles, ...plainFiles].map((sourceFile) => ({
    sourceFile,
    module: resolve(sourceFile.fileName),
    references: moduleReferences(sourceFile, paths),
  }));
  const references = scanned.flatMap(({ module, references }) =>
    module === file ? [] : references.filter((ref) => ref.file === file).map((ref) => siteOf(root, ref.literal)),
  );

  const targetSource = sourceFileFor(file);
  const forwards = new Map();
  const forwardsTarget = (module) => {
    if (!forwards.has(module)) {
      const sourceFile = sourceFileFor(module);
      const moduleSymbol = sourceFile && checker.getSymbolAtLocation(sourceFile);
      const exports = moduleSymbol ? checker.getExportsOfModule(moduleSymbol) : [];
      forwards.set(
        module,
        exports.some((symbol) => declaredIn(original(symbol), targetSource)),
      );
    }
    return forwards.get(module);
  };
  const reached = new Set([file]);
  for (let grew = Boolean(targetSource); grew; ) {
    grew = false;
    for (const { module, references } of scanned) {
      if (reached.has(module) || !references.some((ref) => reached.has(ref.file))) continue;
      if (forwardsTarget(module)) {
        reached.add(module);
        grew = true;
      }
    }
  }

  const throughReexports = [];
  for (const { sourceFile, references } of scanned) {
    for (const reference of references) {
      if (reference.file === file || !reached.has(reference.file)) continue;
      for (const binding of moduleBindings(reference, sourceFile)) {
        const origin = binding.imported === "*" ? undefined : exportOrigin(reference.file, binding.imported);
        if (binding.imported === "*" || (typeof origin === "object" && declaredIn(origin, targetSource))) {
          throughReexports.push(siteOf(root, binding.site));
        }
      }
    }
  }

  const manifest = join(root, "package.json");
  if (existsSync(manifest)) {
    const escaped = repoPath(root, file).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const mention = new RegExp(`(?<![\\w./-])${escaped}(?![\\w/-])`);
    readFileSync(manifest, "utf8")
      .split("\n")
      .forEach((line, index) => {
        if (mention.test(line)) references.push({ file: "package.json", line: index + 1, text: line.trim() });
      });
  }
  return { declarations: [], reexports: [], references, throughReexports };
}

/**
 * Find where a file, or one of its exports, is used.
 *
 * @param options.root   repository root holding tsconfig.json; defaults to this checkout
 * @param options.target file path, absolute or relative to `root`; `.js` specifiers and
 *                       extensionless module paths resolve as imports do
 * @param options.symbol export name (`default` for a default export); omit for a file query
 * @returns repo-relative sites, each `{ file, line, text }`. A symbol query fills `declarations`,
 *          `reexports` and `references` (its uses); a file query fills `references` (direct
 *          references) and `throughReexports` (imports of its declarations through a barrel).
 */
export function findUsages({ root = REPO_ROOT, target, symbol }) {
  root = resolve(root);
  const paths = createPathResolver(root);
  let file = paths.moduleFile(resolve(root, target));
  if (!file) throw new QueryError(`No such module: ${repoPath(root, resolve(root, target))}`);
  // Consumers name a script's `.mjs`; its `.d.mts` only describes it.
  const implementation = file.replace(/\.d\.([cm]?)ts$/, ".$1js");
  if (implementation !== file && existsSync(implementation)) file = implementation;

  const stem = basename(file).replace(/(?:\.d)?\.[cm]?[jt]sx?$/, "");
  const needles = symbol && symbol !== "default" ? [stem, symbol] : [stem];
  const plain = listPlainFiles(root);
  const project = createProject(root, needles, plain.declarations);
  const context = {
    root,
    paths,
    project,
    file,
    projectFiles: project.program.getSourceFiles().filter((sourceFile) => isRepoCode(root, sourceFile.fileName)),
    plainFiles: plain.sources
      .filter((source) => !project.program.getSourceFile(source))
      .map((source) => ts.createSourceFile(source, readFileSync(source, "utf8"), ts.ScriptTarget.Latest, true)),
  };
  const found = symbol ? symbolUsages(context, symbol) : fileUsages(context);
  return {
    target: repoPath(root, file),
    symbol: symbol ?? null,
    declarations: sortSites(found.declarations),
    reexports: sortSites(found.reexports),
    references: sortSites(found.references),
    throughReexports: sortSites(found.throughReexports),
  };
}

/* ── Output ── */

const plural = (count, noun) => `${count} ${noun}${count === 1 ? "" : "s"}`;

/** `path:line  text` lines under one heading per area, locations padded to a common column. */
function areaLines(sites) {
  if (sites.length === 0) return ["  (none)"];
  const lines = [];
  const areas = [...new Set(sites.map((site) => areaOf(site.file)))];
  for (const area of areas) {
    const inArea = sites.filter((site) => areaOf(site.file) === area);
    const locations = inArea.map((site) => `${site.file}:${site.line}`);
    const width = Math.min(LOCATION_WIDTH, Math.max(...locations.map((location) => location.length)));
    const files = new Set(inArea.map((site) => site.file)).size;
    lines.push("", `${area} — ${plural(inArea.length, "reference")} in ${plural(files, "file")}`);
    inArea.forEach((site, index) => {
      const text = site.text.length > SNIPPET_LENGTH ? `${site.text.slice(0, SNIPPET_LENGTH - 1)}…` : site.text;
      lines.push(`  ${locations[index].padEnd(width)}  ${text}`.trimEnd());
    });
  }
  return lines;
}

/** Render a `findUsages` result as plain text. */
export function formatUsages(result) {
  if (result.symbol === null) {
    return [
      result.target,
      "",
      "Direct references:",
      ...areaLines(result.references),
      "",
      "Through re-exports:",
      ...areaLines(result.throughReexports),
    ].join("\n");
  }
  return [
    `${result.target}#${result.symbol}`,
    ...result.declarations.map((site) => `  declared     ${site.file}:${site.line}`),
    ...result.reexports.map((site) => `  re-exported  ${site.file}:${site.line}`),
    ...(result.references.length > 0 ? areaLines(result.references) : ["", "No references."]),
  ].join("\n");
}

/* ── CLI ── */

function main() {
  let parsed;
  try {
    parsed = parseArgs({ allowPositionals: true, options: { help: { type: "boolean", short: "h" } } });
  } catch (error) {
    console.error(`${error.message}\n\n${USAGE}`);
    process.exitCode = 1;
    return;
  }
  if (parsed.values.help) {
    console.log(USAGE);
    return;
  }
  const [query] = parsed.positionals;
  const hash = query?.lastIndexOf("#") ?? -1;
  if (parsed.positionals.length !== 1 || hash === query.length - 1) {
    console.error(USAGE);
    process.exitCode = 1;
    return;
  }
  try {
    const result = findUsages({
      target: resolve(hash < 0 ? query : query.slice(0, hash)),
      symbol: hash < 0 ? undefined : query.slice(hash + 1),
    });
    console.log(formatUsages(result));
  } catch (error) {
    if (!(error instanceof QueryError)) throw error;
    console.error(`where-used: ${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main();
