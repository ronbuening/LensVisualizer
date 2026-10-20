/** Resolve manual tooling's module paths without running the tools or their expensive analyses. */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { describe, expect, it } from "vitest";

const ROOT = fileURLToPath(new URL("../..", import.meta.url));
const parse = (file: string, text = readFileSync(join(ROOT, file), "utf8")) =>
  ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );

function walk(node: ts.Node, visit: (node: ts.Node) => void): void {
  visit(node);
  node.forEachChild((child) => walk(child, visit));
}

/** Read the architecture guard's registry, rather than keep a second list of public modules. */
const registered = new Set<string>();
walk(parse("__tests__/src/optics/opticsArchitecture.test.ts"), (node) => {
  if (ts.isVariableDeclaration(node) && node.name.getText() === "SEAM_REGISTRY" && node.initializer) {
    walk(node.initializer, (entry) => {
      if (
        ts.isPropertyAssignment(entry) &&
        entry.name.getText() === "module" &&
        ts.isStringLiteral(entry.initializer)
      ) {
        registered.add(entry.initializer.text);
      }
    });
  }
});

interface Reference {
  file: string;
  expression: string;
  path: string;
}

/**
 * Paths supplied at runtime cannot be evaluated as constants. Keep their precise expressions explicit and
 * expand catalog inputs to the actual files. Generated bundles are checked at their source entry instead.
 * New computed expressions fail closed until the scanner can resolve them or their producer is documented here.
 */
const runtimeInputs: Record<string, Record<string, { pattern?: string; generated?: boolean; reason: string }>> = {
  "scripts/audit-aperture.mjs": { path: { pattern: "src/lens-data/**/*.data.ts", reason: "CLI path or catalog walk" } },
  "scripts/audit-dpgf.mjs": { file: { pattern: "src/lens-data/**/*.data.ts", reason: "catalog walk" } },
  "scripts/audit-field-coverage.mjs": {
    file: { pattern: "src/lens-data/**/*.data.ts", reason: "CLI path or catalog walk" },
  },
  "scripts/audit-image-circle.mjs": { file: { pattern: "src/lens-data/**/*.data.ts", reason: "catalog walk" } },
  "scripts/audit-patent-figure.mjs": {
    "resolve(dataFile)": { pattern: "src/lens-data/**/*.data.ts", reason: "required CLI data path" },
  },
  "scripts/audit-surface-probe.mjs": {
    "resolve(dataFile)": { pattern: "src/lens-data/**/*.data.ts", reason: "required CLI data path" },
  },
  "scripts/audit-mtf.mjs": {
    'resolve("src/lens-data", file)': { pattern: "src/lens-data/**/*.data.ts", reason: "catalog walk" },
  },
  "scripts/audit-mtf-dispersion.mjs": {
    'resolve("src/lens-data", file)': { pattern: "src/lens-data/**/*.data.ts", reason: "catalog walk" },
  },
  "scripts/benchmark-mtf.mjs": {
    'join(ROOT, "src", "lens-data", file)': { pattern: "src/lens-data/**/*.data.ts", reason: "benchmark case paths" },
  },
  "scripts/generate-build-metadata.mjs": {
    filePath: { pattern: "src/lens-data/**/*.*ts", reason: "lens and teleconverter catalog walk" },
  },
  "scripts/benchmark-optics-rendering.mjs": {
    'join(outDir, "opticsRenderingBenchmark.js")': { reason: "buildBundle builds ENTRY" },
    bundleUrl: { reason: "buildBundle result" },
  },
  "scripts/benchmark-child.mjs": {
    bundleUrl: { reason: "driver passes buildBundle result in request JSON" },
  },
  "scripts/prerender.mjs": {
    'join(ROOT, "dist-server", "entry-server.js")': {
      generated: true,
      reason: "Vite builds src/entry-server.tsx immediately above",
    },
  },
};

function filesUnder(dir: string): string[] {
  return readdirSync(join(ROOT, dir), { withFileTypes: true }).flatMap((entry) => {
    const file = `${dir}/${entry.name}`;
    return entry.isDirectory() ? filesUnder(file) : /\.(?:[cm]?js|[cm]?tsx?)$/.test(file) ? [file] : [];
  });
}

function resolveModule(path: string): string | undefined {
  const absolute = isAbsolute(path) ? path : join(ROOT, path);
  const candidates = [absolute];
  if (/\.jsx?$/.test(path)) candidates.push(absolute.replace(/\.jsx?$/, ".ts"), absolute.replace(/\.jsx?$/, ".tsx"));
  if (!extname(path)) {
    for (const extension of [".ts", ".tsx", ".mjs", ".js", "/index.ts", "/index.js"])
      candidates.push(absolute + extension);
  }
  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
}

function problemsFor(ref: Reference): string[] {
  const found = resolveModule(ref.path);
  if (!found) return [`${ref.file}: ${ref.expression} -> missing module ${ref.path}`];
  const target = relative(ROOT, found);
  if (target.startsWith("src/optics/") && !target.startsWith("src/optics/mount/") && !registered.has(target)) {
    return [`${ref.file}: ${ref.expression} -> non-barrel optics module ${target}`];
  }
  return [];
}

function scan(file: string, text?: string): { references: Reference[]; problems: string[]; runtime: string[] } {
  const source = parse(file, text);
  const references: Reference[] = [];
  const problems: string[] = [];
  const runtime: string[] = [];
  const initializers = new Map<string, ts.Expression>();
  const loaderNames = new Set(["load"]);
  const loaderBodies = new Set<ts.Node>();
  walk(source, (node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      initializers.set(node.name.text, node.initializer);
      if (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer)) {
        walk(node.initializer.body, (child) => {
          if (ts.isCallExpression(child) && child.expression.kind === ts.SyntaxKind.ImportKeyword) {
            loaderNames.add(node.name.getText(source));
            const body = node.initializer!;
            if (
              (ts.isArrowFunction(body) || ts.isFunctionExpression(body)) &&
              /^import\(pathToFileURL\(join\(ROOT, \w+\)\)\.href\)$/.test(body.body.getText(source))
            )
              loaderBodies.add(body.body);
            else problems.push(`${file}: unsupported loader helper ${node.name.getText(source)}`);
          }
        });
      }
    }
  });

  /** Constant propagation for strings, URL wrappers and node:path joins; never executes script code. */
  function value(node: ts.Expression, seen = new Set<string>()): string | undefined {
    if (ts.isStringLiteralLike(node)) return node.text.startsWith("file:") ? fileURLToPath(node.text) : node.text;
    if (node.getText(source) === "import.meta.dirname") return join(ROOT, dirname(file));
    if (node.getText(source) === "import.meta.url") return join(ROOT, file);
    if (node.getText(source) === "process.cwd()") return ROOT;
    if (ts.isIdentifier(node)) {
      if (seen.has(node.text)) return undefined;
      const initializer = initializers.get(node.text);
      return initializer ? value(initializer, new Set([...seen, node.text])) : undefined;
    }
    if (ts.isPropertyAccessExpression(node) && node.name.text === "href") return value(node.expression, seen);
    if (ts.isCallExpression(node)) {
      const name = node.expression.getText(source);
      if (["pathToFileURL", "fileURLToPath"].includes(name)) return value(node.arguments[0], seen);
      if (["join", "resolve"].includes(name)) {
        const parts = node.arguments.map((argument) => value(argument, seen));
        if (parts.some((part) => part === undefined)) return undefined;
        return resolve(ROOT, ...(parts as string[]));
      }
    }
    if (ts.isNewExpression(node) && node.expression.getText(source) === "URL" && node.arguments?.length === 2) {
      const path = value(node.arguments[0], seen);
      const base = value(node.arguments[1], seen);
      return path !== undefined && base !== undefined ? resolve(dirname(base), path) : undefined;
    }
    return undefined;
  }

  function add(node: ts.Expression, relativeToFile = false): void {
    const expression = node.getText(source);
    const input = runtimeInputs[file]?.[expression];
    const path = value(node);
    if (input && (input.generated || path === undefined)) {
      runtime.push(`${file}:${expression}`);
      if (input.pattern) addPattern(input.pattern, expression);
      return;
    }
    if (path === undefined) {
      // Unwrap loaders only, so the exception names the producer expression, not import(...).href.
      if (ts.isPropertyAccessExpression(node) && node.name.text === "href") return add(node.expression, relativeToFile);
      if (ts.isCallExpression(node) && node.expression.getText(source) === "pathToFileURL")
        return add(node.arguments[0]);
      problems.push(`${file}: unresolved loader path ${expression}`);
      return;
    }
    if (relativeToFile && !path.startsWith(".") && !isAbsolute(path)) return; // Package or node: import.
    references.push({ file, expression, path: relativeToFile ? resolve(ROOT, dirname(file), path) : path });
  }

  function addPattern(pattern: string, expression: string): void {
    const matches = ts.sys.readDirectory(ROOT, [".ts", ".tsx", ".mjs", ".js"], undefined, [pattern]);
    if (!matches.length) problems.push(`${file}: empty module glob ${pattern}`);
    for (const path of matches) references.push({ file, expression, path });
  }

  walk(source, (node) => {
    for (let parent: ts.Node | undefined = node; parent; parent = parent.parent) {
      if (loaderBodies.has(parent)) return; // Its complete expression is validated above; callers are scanned below.
    }
    // This exported path list is consumed by benchmark-mtf's computed catalog import.
    if (file === "src/benchmarks/mtfCases.ts" && ts.isStringLiteral(node) && node.text.endsWith(".data.ts")) {
      references.push({ file, expression: node.getText(source), path: join("src/lens-data", node.text) });
    }
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      add(node.moduleSpecifier, true);
    } else if (
      ts.isImportTypeNode(node) &&
      ts.isLiteralTypeNode(node.argument) &&
      ts.isStringLiteral(node.argument.literal)
    ) {
      add(node.argument.literal, true);
    } else if (ts.isCallExpression(node)) {
      const name = node.expression.getText(source);
      if (node.expression.kind === ts.SyntaxKind.ImportKeyword || loaderNames.has(name) || name === "register") {
        if (node.arguments[0])
          add(node.arguments[0], node.expression.kind === ts.SyntaxKind.ImportKeyword || name === "register");
      } else if (name === "import.meta.glob") {
        const argument = node.arguments[0];
        if (!argument || !ts.isStringLiteral(argument)) problems.push(`${file}: non-literal module glob`);
        else if (argument.text.includes("*"))
          addPattern(relative(ROOT, resolve(ROOT, dirname(file), argument.text)), argument.text);
        else {
          add(argument, true);
        }
      } else if (name === "pathToFileURL") {
        // Imports are covered above; URL comparisons for direct execution and the resolver hook do not load modules.
        const argument = node.arguments[0];
        if (
          argument &&
          !["process.argv[1]", "resolve(process.argv[1])", "`${process.cwd()}/`"].includes(argument.getText(source))
        )
          add(argument);
      } else if (name === "spawn" && node.arguments[0]?.getText(source) === "process.execPath") {
        const args = node.arguments[1];
        if (!args || !ts.isArrayLiteralExpression(args)) problems.push(`${file}: unrecognized Node entry arguments`);
        else {
          const entry = args.elements.find((arg) => !ts.isSpreadElement(arg));
          if (entry) add(entry);
          else problems.push(`${file}: missing Node entry argument`);
        }
      }
    } else if (
      ts.isPropertyAssignment(node) &&
      ["ssr", "input", "entryPoints", "configFile"].includes(node.name.getText(source)) &&
      (() => {
        for (let parent: ts.Node | undefined = node.parent; parent; parent = parent.parent) {
          if (ts.isCallExpression(parent) && parent.expression.getText(source) === "build") return true;
        }
        return false;
      })()
    ) {
      if (ts.isObjectLiteralExpression(node.initializer) || node.initializer.kind === ts.SyntaxKind.FalseKeyword)
        return;
      if (ts.isArrayLiteralExpression(node.initializer)) node.initializer.elements.forEach((entry) => add(entry));
      else add(node.initializer);
    }
  });
  return { references, problems: [...problems, ...references.flatMap(problemsFor)], runtime };
}

describe("script module paths through the optics seam", () => {
  it("resolves static imports, loader calls, URL constants, bundle entries and report/benchmark globs", () => {
    expect(registered.size).toBe(17);
    const results = ["scripts", "reports", "src/benchmarks"].flatMap(filesUnder).map((file) => scan(file));
    expect(results.flatMap((result) => result.problems)).toEqual([]);
    const references = results.flatMap((result) => result.references);
    console.info(
      `Module inventory: ${results.length} files, ${new Set(references.map((ref) => relative(ROOT, resolve(ROOT, ref.path)))).size} resolved targets, ${new Set(results.flatMap((result) => result.runtime)).size} runtime input expressions.`,
    );
    // Every documented runtime input must still be used; removed loaders must remove their exception too.
    expect(new Set(results.flatMap((result) => result.runtime))).toEqual(
      new Set(
        Object.entries(runtimeInputs).flatMap(([file, inputs]) =>
          Object.keys(inputs).map((expression) => `${file}:${expression}`),
        ),
      ),
    );
  });

  it("catches broken paths, including a helper call site and a computed URL", () => {
    const result = scan(
      "scripts/self-test.mjs",
      `
      const ROOT = join(import.meta.dirname, "..");
      const load = path => import(pathToFileURL(join(ROOT, path)).href);
      load("src/optics/deliberately-missing.ts");
      const modulePath = join(ROOT, "src", "optics", "also-missing.mjs");
      import(pathToFileURL(modulePath).href);
    `,
    );
    expect(
      result.problems.some((problem) => problem.includes("missing module src/optics/deliberately-missing.ts")),
    ).toBe(true);
    expect(result.problems.some((problem) => problem.includes("also-missing.mjs"))).toBe(true);
  });

  it("checks path-list producers and renamed loader helpers as well as direct loaders", () => {
    expect(
      scan("src/benchmarks/mtfCases.ts", 'export const CASE = "maker/missing.data.ts"').problems.join("\n"),
    ).toContain("missing module");
    expect(
      scan(
        "scripts/self-test.mjs",
        `
      const ROOT = join(import.meta.dirname, "..");
      const loadModule = modulePath => import(pathToFileURL(join(ROOT, modulePath)).href);
      loadModule("src/optics/missing.ts");
    `,
      ).problems.join("\n"),
    ).toContain("missing module src/optics/missing.ts");
  });

  it("rejects existing internals, type-only imports, unknown computed paths and deleted modules", () => {
    for (const text of [
      'load("src/optics/state/runtimeAdapters.ts")',
      'import type { PreparedOpticalState } from "../src/optics/state/runtimeAdapters.js"',
      "import(computedAtRuntime)",
      'import.meta.glob("../src/optics/deleted.ts", { eager: true })',
    ])
      expect(scan("scripts/self-test.mjs", text).problems.length).toBeGreaterThan(0);
  });

  it("resolves .js source specifiers, extensionless TS and actual .mjs modules", () => {
    expect(
      scan(
        "scripts/self-test.mjs",
        `
      import "../src/optics/buildLens.js";
      load("src/optics/analysis");
      import("./lens-data-lib.mjs");
      import "../vite.config.js";
    `,
      ).problems,
    ).toEqual([]);
  });
});
