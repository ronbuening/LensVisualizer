/**
 * Optics architecture guards — import cycles, the outside-import seam, and module-level caches.
 *
 * Each guard scans source text and compares what it finds with the lists below. The lists
 * come in two kinds:
 *
 * - A LEGACY list holds today's violations and only shrinks. A guard fails for a violation
 *   that is not listed, and for a listed entry that no longer violates. Fix the code rather
 *   than add an entry; moving an entry to the registry counts as removing it.
 * - A REGISTRY holds entries that meet the rule by design. Each guard checks its own
 *   admission rule, so an entry that stops qualifying fails here.
 *
 * How to change a list: "Architecture Guards" in agent_docs/architecture/testing.md.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/* ── Cycle guard lists ── */

/**
 * Legacy: modules that sit in a runtime import cycle.
 * Rule: the runtime import graph of src/optics/ has no strongly connected component larger
 * than one module and no self-import. There is no registry, because no cycle is approved.
 */
const CYCLE_LEGACY: readonly string[] = [
  "src/optics/analysis/analysisContext.ts",
  "src/optics/analysis/analysisJobs.ts",
  "src/optics/analysis/distortion.ts",
  "src/optics/analysis/groupMovement.ts",
  "src/optics/analysis/pupilAberration.ts",
  "src/optics/analysis/vignetting.ts",
  "src/optics/compat.ts",
  "src/optics/distortionAnalysis.ts",
  "src/optics/groupMovement.ts",
  "src/optics/optics.ts",
  "src/optics/projection.ts",
  "src/optics/pupilAberration.ts",
  "src/optics/vignetteAnalysis.ts",
];

/* ── Seam guard lists ── */

interface SeamRegistryEntry {
  module: string;
  /** Set on a permanent entry: the script that loads this module by path under plain Node. */
  plainNodeLoader?: string;
}

/**
 * Registry: the optics modules that code outside src/optics/ may import.
 * Admission: a top-level src/optics/*.ts file that holds only imports, re-exports, type
 * declarations and aliases of imported bindings — no function, class or computed value.
 * One entry is permanent and exempt from that rule. Plain Node strips types but cannot follow
 * a barrel's `.js` specifiers, so build metadata loads the import-free compatibility predicate
 * by path; its admission is that the named script, under scripts/, still names that path and
 * that the module still imports nothing at runtime.
 */
const SEAM_REGISTRY: readonly SeamRegistryEntry[] = [
  { module: "src/optics/aberrationAnalysis.ts" },
  { module: "src/optics/buildLens.ts" },
  { module: "src/optics/cardinalElements.ts" },
  { module: "src/optics/chiefRayDiagnostics.ts" },
  { module: "src/optics/diagramGeometry.ts" },
  { module: "src/optics/fieldGeometry.ts" },
  { module: "src/optics/geometry.ts" },
  { module: "src/optics/mtf.ts" },
  { module: "src/optics/optics.ts" },
  {
    module: "src/optics/prescription/teleconverterCompatibility.ts",
    plainNodeLoader: "scripts/generate-build-metadata.mjs",
  },
  { module: "src/optics/projection.ts" },
  { module: "src/optics/teleconverter.ts" },
];

/**
 * Legacy: outside-imported modules that fail admission — top-level implementation files and
 * modules below the top level.
 * Rule: an import into src/optics/ from the rest of src/, from scripts/ or from reports/
 * targets a registered module. Type-only imports count, because a type import still depends
 * on that module's surface, and so do the path strings that scripts load.
 * Two exclusions. Files under __tests__/ are not importers: tests follow the internals they
 * test. Targets under src/optics/mount/ are skipped: the mount diagram renderer shares the
 * folder but is not part of the optical engine, and mount specs import it directly.
 */
const SEAM_LEGACY: readonly string[] = [
  "src/optics/aberration/offAxis.ts",
  "src/optics/analysis/analysisQuality.ts",
  "src/optics/analysis/mtfConstants.ts",
  "src/optics/analysis/mtfFocus.ts",
  "src/optics/analysis/mtfMath.ts",
  "src/optics/analysis/mtfShearedOtf.ts",
  "src/optics/analysis/mtfSupport.ts",
  "src/optics/analysis/mtfTracing.ts",
  "src/optics/analysis/mtfWavefront.ts",
  "src/optics/aperture.ts",
  "src/optics/apertureStop.ts",
  "src/optics/asphericComparison.ts",
  "src/optics/chromatic/channels.ts",
  "src/optics/chromaticRayFanScaling.ts",
  "src/optics/compat.ts",
  "src/optics/constants.ts",
  "src/optics/dispersion.ts",
  "src/optics/distortionAnalysis.ts",
  "src/optics/field/chiefRay.ts",
  "src/optics/field/projection.ts",
  "src/optics/focusDistance.ts",
  "src/optics/foldedPathDisplay.ts",
  "src/optics/glassCatalog.ts",
  "src/optics/groupMovement.ts",
  "src/optics/internal/lensState.ts",
  "src/optics/layout.ts",
  "src/optics/lensMovement.ts",
  "src/optics/math/vector.ts",
  "src/optics/perspective/diagramFan.ts",
  "src/optics/perspective/index.ts",
  "src/optics/prescription/normalizeLensData.ts",
  "src/optics/prescription/rearPlates.ts",
  "src/optics/publishedStations.ts",
  "src/optics/pupilAberration.ts",
  "src/optics/raySampling.ts",
  "src/optics/spectralLines.ts",
  "src/optics/state/prepareState.ts",
  "src/optics/trace/rayAdapters.ts",
  "src/optics/types.ts",
  "src/optics/validateLensData.ts",
  "src/optics/vignetteAnalysis.ts",
];

/* ── Cache guard lists ── */

type CacheRecord =
  | { kind: "constant" }
  | { kind: "bounded"; owner: string; key: string; capacity: number; limit: string }
  | { kind: "weak-owner"; owner: string; key: string; perOwner: string; capacity?: number; limit?: string };

interface CacheLegacyRecord {
  /** What makes the container grow without bound. */
  grows: string;
  /** The change that would let the entry leave this list. */
  retire: string;
  /** Set when a WeakMap's declaration shows only a type name: the module type that holds the per-owner Map. */
  storeType?: string;
}

/**
 * Registry: module-level containers that meet the rule, keyed `<module>#<identifier>`.
 * Admission by kind:
 * - "constant": a lookup table. Its module never calls set, add, delete or clear on it.
 * - "bounded": records owner, key and capacity. `limit` names the module constant that holds
 *   the capacity, so the record cannot drift from the code.
 * - "weak-owner": a WeakMap keyed by its owner object. Records the owner, the key and what one
 *   owner holds, which must not grow without bound: a per-owner Map or Set needs a capacity
 *   and its `limit` constant.
 */
const CACHE_REGISTRY: Readonly<Record<string, CacheRecord>> = {
  "src/optics/analysis/analysisMovementSupport.ts#MOVEMENT_AWARE_SECTIONS": { kind: "constant" },
  "src/optics/analysis/analysisMovementSupport.ts#MOVEMENT_INVARIANT_SECTIONS": { kind: "constant" },
  "src/optics/analysis/mtfTracing.ts#X_SYMMETRIC_PROFILES": { kind: "constant" },
  "src/optics/chromatic/indexResolver.ts#cauchyCoefficientsByDispersion": {
    kind: "weak-owner",
    owner: "CompiledSurfaceDispersion",
    key: "owner identity",
    perOwner: "one frozen Cauchy coefficient vector",
  },
  "src/optics/chromatic/indexResolver.ts#referenceLineByLens": {
    kind: "weak-owner",
    owner: "EngineLens",
    key: "owner identity",
    perOwner: "one read-only map with a row per element, built once",
  },
  "src/optics/compat.ts#PREPARED_STATE_CACHE_BY_RUNTIME": {
    kind: "weak-owner",
    owner: "RuntimeLens",
    key: "owner identity, then lens key with focusT, zoomT and aberrationT",
    perOwner: "an LRU of prepared states",
    capacity: 96,
    limit: "PREPARED_STATE_CACHE_LIMIT",
  },
  "src/optics/geometry/surfaceProfile.ts#COMPILED_ASPHERES": {
    kind: "weak-owner",
    owner: "frozen AsphericCoefficients",
    key: "owner identity",
    perOwner: "one record of compiled Horner coefficient vectors",
  },
  "src/optics/geometry/surfaceProfile.ts#IMMUTABLE_ASPHERIC_PROFILES": {
    kind: "weak-owner",
    owner: "frozen AsphericCoefficients",
    key: "owner identity",
    perOwner: "one profile, for the base radius it was last built with",
  },
  "src/optics/glassCatalog.ts#ALIAS_PATTERNS": { kind: "constant" },
  "src/optics/glassCatalog.ts#CATALOG": { kind: "constant" },
  "src/optics/glassCatalog.ts#CODE6_CANDIDATES": { kind: "constant" },
  "src/optics/glassCatalog.ts#CODE6_INDEX": { kind: "constant" },
  "src/optics/glassCatalogAliases.ts#ALIASES": { kind: "constant" },
  "src/optics/glassCatalogData.ts#DUPLICATE_CODE6_PRECEDENCE": { kind: "constant" },
  "src/optics/glassCatalogData.ts#GLASS_CATALOG_ENTRIES_BY_NAME": { kind: "constant" },
  "src/optics/mount/layers.ts#CAMERA_CLEAR_TYPES": { kind: "constant" },
  "src/optics/mount/layers.ts#CAMERA_METAL_TYPES": { kind: "constant" },
  "src/optics/mount/layers.ts#LENS_METAL_TYPES": { kind: "constant" },
  "src/optics/mount/renderMount.ts#DOT_TYPES": { kind: "constant" },
  "src/optics/mount/renderMount.ts#INDEX_TYPES": { kind: "constant" },
  "src/optics/mount/renderMount.ts#OPENING_TYPES": { kind: "constant" },
  "src/optics/mount/renderMount.ts#RING_TYPES": { kind: "constant" },
  "src/optics/mount/validateMountSpec.ts#PROVENANCE_STATUSES": { kind: "constant" },
  "src/optics/prescription/normalizeLensData.ts#ENGINE_LENS_BY_RUNTIME": {
    kind: "weak-owner",
    owner: "RuntimeLens",
    key: "owner identity",
    perOwner: "one normalized EngineLens",
  },
  "src/optics/trace/bulkAbsorption.ts#ABSORPTION_BY_ELEMENT_ID": {
    kind: "weak-owner",
    owner: "RuntimeLens",
    key: "owner identity",
    perOwner: "one read-only map with a row per absorbing element, built once",
  },
  "src/optics/trace/rayAdapters.ts#MERIDIONAL_DIRECTION_BY_SLOPE": {
    kind: "bounded",
    owner: "module",
    key: "meridional slope",
    capacity: 4096,
    limit: "DIRECTION_CACHE_LIMIT",
  },
  "src/optics/trace/rayAdapters.ts#RUNTIME_Z_STATE_BY_BASE": {
    kind: "weak-owner",
    owner: "PreparedOpticalState",
    key: "owner identity, then the identity of the caller's z-position array",
    perOwner: "one WeakMap keyed by z-position array, so entries die with the array",
  },
  "src/optics/trace/rayAdapters.ts#SKEW_DIRECTION_BY_UX": {
    kind: "bounded",
    owner: "module",
    key: "skew slope ux, then uy",
    capacity: 4096,
    limit: "DIRECTION_CACHE_LIMIT",
  },
  "src/optics/validateLensData.ts#KNOWN_ASPHERIC_COEFFICIENTS": { kind: "constant" },
  "src/optics/validateLensData.ts#SOURCE_ERRATUM_EVIDENCE": { kind: "constant" },
  "src/optics/validateLensData.ts#SOURCE_ERRATUM_SURFACE_FIELDS": { kind: "constant" },
};

/**
 * Legacy: caches that grow without bound — one strong Map with no cap, and WeakMaps whose
 * per-owner Map has no cap. A WeakMap frees an owner's entries with the owner, but a live lens
 * or state still accumulates one entry per distinct key.
 * Rule: every module-level Map, WeakMap, Set or WeakSet in src/optics/ is registered.
 * Staleness is read from declarations: an entry is stale once its container is gone or is never
 * written, and a WeakMap once it no longer shows a Map or Set per owner, in its own declaration
 * or in the module type its record names as `storeType`. Two things stay review-only. A cap
 * shows in no declaration, so an entry retired by capping has to be moved to the registry by
 * hand, with its capacity. And DIAGNOSTICS is a strong Map, with no per-owner store to check.
 */
const CACHE_LEGACY: Readonly<Record<string, CacheLegacyRecord>> = {
  "src/optics/analysis/mtfRayClassification.ts#boundsBySurface": {
    grows: "per compiled surface, one bounds record per distinct evaluated semi-diameter",
    retire: "keep one bounds record per surface, or cap the per-surface map",
  },
  "src/optics/analysis/mtfTracing.ts#indexTablesByState": {
    grows: "per prepared state, one index table per distinct wavelength",
    retire: "cap the per-state map of index tables",
  },
  "src/optics/field/chiefRayCache.ts#CACHE": {
    grows: "per lens, one solve per distinct focus, zoom, aberration, field angle and launch surface",
    retire: "cache chief-ray solves per prepared state under a capacity",
  },
  "src/optics/field/chiefRayCache.ts#DIAGNOSTICS": {
    grows: "a strong Map with one counter record per lens key, cleared only by resetChiefRayDiagnostics2()",
    retire: "key the counters by lens object in a WeakMap, or cap the map",
  },
  "src/optics/perspective/analysis/vignetting.ts#ZERO_CENTER_REFERENCE_BY_STATE": {
    grows: "per prepared state, one center reference per distinct sampling, pupil and channel key",
    retire: "cap the per-state map of center references",
  },
  "src/optics/trace/rayAdapters.ts#PREPARED_STATE_BY_RUNTIME": {
    grows: "per lens, one prepared state per distinct focus, zoom and aberration triple",
    retire: "resolve states through the bounded prepared-state cache instead of this second store",
    storeType: "PreparedStateCache",
  },
  "src/optics/trace/rayAdapters.ts#TRACE_OPTIONS_BY_STATE": {
    grows: "per prepared state, one options object per distinct stop radius, ghost flag and channel",
    retire: "build trace options once per request instead of caching them per ray, or cap the per-state map",
    storeType: "TraceOptionsCache",
  },
};

/* ── Source scanning ── */

const repoRoot = fileURLToPath(new URL("../../..", import.meta.url));
const OPTICS_ROOT = "src/optics";
const MOUNT_PREFIX = "src/optics/mount/";
const IMPORTER_ROOTS = ["src", "scripts", "reports"];
/** Names optics files to keep them out of large-file warnings; it never loads them. */
const PATH_MENTION_ONLY_SCRIPTS = ["scripts/generate-src-readmes.mjs"];

interface ModuleReference {
  specifier: string;
  /** True when the declaration carries types only, so nothing is imported at runtime. */
  typeOnly: boolean;
}

interface ModuleContainer {
  module: string;
  name: string;
  /** Map, WeakMap, Set or WeakSet: from `new X`, or from the declared type when there is none. */
  constructorName: string;
  /** Declaration text through its first semicolon; holds the type arguments. */
  declaration: string;
  /** True when the module calls set, add, delete or clear on the identifier. */
  written: boolean;
}

/** Evaluate a scan once and share the result between tests. */
function once<T>(compute: () => T): () => T {
  let result: { value: T } | undefined;
  return () => (result ??= { value: compute() }).value;
}

const isTypeScriptModule = (name: string): boolean => /\.tsx?$/.test(name) && !name.endsWith(".d.ts");
const isCodeFile = (name: string): boolean => /\.(?:[cm]?[jt]s|[jt]sx)$/.test(name);
const readSource = (path: string): string => readFileSync(join(repoRoot, path), "utf-8");

/** Repo-relative, forward-slash paths of the matching files under a directory, recursively. */
function sourceFiles(relativeDir: string, matches: (name: string) => boolean): string[] {
  return readdirSync(join(repoRoot, relativeDir)).flatMap((name) => {
    const path = `${relativeDir}/${name}`;
    if (statSync(join(repoRoot, path)).isDirectory()) return sourceFiles(path, matches);
    return matches(name) ? [path] : [];
  });
}

const opticsModules = once(() => new Set(sourceFiles(OPTICS_ROOT, isTypeScriptModule)));

/** `import type …`, `export type …`, or a braced list whose every specifier is `type`-qualified. */
function isTypeOnlyClause(clause: string): boolean {
  if (/^type\s+[\w$*{]/.test(clause)) return true;
  const named = /^\{([\s\S]*)\}$/.exec(clause);
  if (!named) return false;
  const specifiers = named[1]
    .split(",")
    .map((specifier) => specifier.trim())
    .filter((specifier) => specifier !== "");
  return specifiers.length > 0 && specifiers.every((specifier) => /^type\s/.test(specifier));
}

/**
 * Module specifiers a file imports: static imports and re-exports, side-effect imports and
 * `import()` calls with a literal specifier. A declaration is found where `import` or `export`
 * starts a line or follows the end of a block comment. Text is scanned as written, so a
 * match inside a block comment or a template string counts too, which only adds a reference.
 * Not seen: a declaration after other code on its line, which Prettier never leaves there,
 * and an `import()` whose specifier is not one plain literal.
 */
function moduleReferences(text: string): ModuleReference[] {
  const references: ModuleReference[] = [];
  for (const head of text.matchAll(/(?:^[ \t]*|\*\/[ \t]*)(import|export)\b/gm)) {
    // Walk the clause by hand so a comment between the braces cannot end it early.
    let index = head.index + head[0].length;
    let clause = "";
    while (index < text.length && !";\"'`".includes(text[index])) {
      const lineComment = text.startsWith("//", index);
      if (lineComment || text.startsWith("/*", index)) {
        const end = text.indexOf(lineComment ? "\n" : "*/", index + 2);
        index = end < 0 ? text.length : end + (lineComment ? 0 : 2);
      } else {
        clause += text[index];
        index += 1;
      }
    }
    const quote = text[index];
    const end = quote === '"' || quote === "'" ? text.indexOf(quote, index + 1) : -1;
    if (end < 0) continue;
    const specifier = text.slice(index + 1, end);
    const from = /^([\s\S]*)\bfrom$/.exec(clause.trim());
    if (from) references.push({ specifier, typeOnly: isTypeOnlyClause(from[1].trim()) });
    else if (head[1] === "import" && clause.trim() === "") references.push({ specifier, typeOnly: false });
  }
  // `import("x").Name` is a type reference; any other `import("x")` loads the module. The
  // specifier may be a template literal, and a bundler hint comment may come before it.
  const dynamicImport = /\bimport\s*\(\s*(?:\/\*(?:[^*]|\*(?!\/))*\*\/\s*)*["'`]([^"'`]+)["'`]\s*\)(\s*\.\s*[A-Z])?/g;
  for (const call of text.matchAll(dynamicImport)) {
    references.push({ specifier: call[1], typeOnly: call[2] !== undefined });
  }
  return references;
}

/** The optics module a relative specifier resolves to, as the bundler would, or null. */
function resolveOpticsModule(importer: string, specifier: string): string | null {
  if (!specifier.startsWith(".")) return null;
  const segments = importer.split("/").slice(0, -1);
  for (const segment of specifier.split("/")) {
    if (segment === "..") segments.pop();
    else if (segment !== "." && segment !== "") segments.push(segment);
  }
  const base = segments.join("/");
  if (base !== OPTICS_ROOT && !base.startsWith(`${OPTICS_ROOT}/`)) return null;
  // Source writes `.js` specifiers for `.ts` files; scripts write `.ts`; a folder means its index.
  const stem = base.replace(/\.(?:m?js|jsx)$/, "");
  const candidates = [base, `${stem}.ts`, `${stem}.tsx`, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`];
  return candidates.find((candidate) => opticsModules().has(candidate)) ?? null;
}

/**
 * Runtime import graph of src/optics/: each module mapped to the optics modules it imports or
 * re-exports at least one value from. Type-only declarations are erased and add no edge.
 */
const opticsRuntimeGraph = once(() => {
  const graph = new Map([...opticsModules()].sort().map((module) => [module, new Set<string>()]));
  for (const [module, targets] of graph) {
    for (const reference of moduleReferences(readSource(module))) {
      const target = reference.typeOnly ? null : resolveOpticsModule(module, reference.specifier);
      if (target !== null) targets.add(target);
    }
  }
  return graph;
});

/** Strongly connected components with more than one module, plus self-importing modules (Tarjan). */
function importCycles(graph: ReadonlyMap<string, ReadonlySet<string>>): string[][] {
  const order = new Map<string, number>();
  const low = new Map<string, number>();
  const stack: string[] = [];
  const onStack = new Set<string>();
  const cycles: string[][] = [];
  const visit = (node: string): void => {
    order.set(node, order.size);
    low.set(node, order.get(node)!);
    stack.push(node);
    onStack.add(node);
    for (const next of graph.get(node)!) {
      if (!order.has(next)) {
        visit(next);
        low.set(node, Math.min(low.get(node)!, low.get(next)!));
      } else if (onStack.has(next)) {
        low.set(node, Math.min(low.get(node)!, order.get(next)!));
      }
    }
    if (low.get(node) !== order.get(node)) return;
    const component = stack.splice(stack.lastIndexOf(node));
    for (const member of component) onStack.delete(member);
    if (component.length > 1 || graph.get(node)!.has(node)) cycles.push(component.sort());
  };
  for (const node of graph.keys()) if (!order.has(node)) visit(node);
  return cycles;
}

/** One shortest import chain from a module back to itself, for a failure message. */
function cycleThrough(graph: ReadonlyMap<string, ReadonlySet<string>>, start: string): string[] {
  const cameFrom = new Map<string, string>();
  const queue = [start];
  for (const node of queue) {
    for (const next of graph.get(node)!) {
      if (next === start) {
        const chain = [start];
        for (let step = node; step !== start; step = cameFrom.get(step)!) chain.unshift(step);
        return [start, ...chain];
      }
      if (!cameFrom.has(next)) {
        cameFrom.set(next, node);
        queue.push(next);
      }
    }
  }
  return [start];
}

/**
 * Optics modules a script names as a path: "src/optics/x.ts", with or without a relative
 * prefix, or "src", "optics", "x.ts" segments.
 */
function pathLoadedOpticsModules(text: string): string[] {
  const whole = [...text.matchAll(/["'`](?:\.{0,2}\/)*(src\/optics\/[\w./-]+\.tsx?)["'`]/g)].map((match) => match[1]);
  const segmented = [...text.matchAll(/["']src["'],\s*["']optics["']((?:,\s*["'][\w.-]+["'])+)/g)].map((match) =>
    [OPTICS_ROOT, ...[...match[1].matchAll(/["']([^"']+)["']/g)].map((segment) => segment[1])].join("/"),
  );
  return [...whole, ...segmented].filter((path) => opticsModules().has(path));
}

/**
 * Outside importers of each optics module: target mapped to the sorted files under src/ (outside
 * src/optics/), scripts/ and reports/ that import it, type-only imports included. Scripts also
 * count for the modules they load by path string. Mount targets are left out.
 * Not seen: an `import.meta.glob` pattern, a `new URL("x", import.meta.url)` outside scripts/,
 * and a path assembled at runtime.
 */
const outsideImporters = once(() => {
  const importers = new Map<string, Set<string>>();
  const files = IMPORTER_ROOTS.flatMap((root) => sourceFiles(root, isCodeFile));
  for (const file of files) {
    if (file.startsWith(`${OPTICS_ROOT}/`)) continue;
    const text = readSource(file);
    // Every path into src/optics/ spells the folder name, so most files need no further scan.
    if (!text.includes("optics")) continue;
    const targets = moduleReferences(text).map((reference) => resolveOpticsModule(file, reference.specifier));
    if (file.startsWith("scripts/") && !PATH_MENTION_ONLY_SCRIPTS.includes(file)) {
      targets.push(...pathLoadedOpticsModules(text));
    }
    for (const target of targets) {
      if (target === null || target.startsWith(MOUNT_PREFIX)) continue;
      if (!importers.has(target)) importers.set(target, new Set());
      importers.get(target)!.add(file);
    }
  }
  return new Map([...importers.keys()].sort().map((target) => [target, [...importers.get(target)!].sort()]));
});

/** Source with comments removed; string and template literals are kept whole. */
function stripComments(text: string): string {
  const literalOrComment = /("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|\/\/[^\n]*|\/\*[\s\S]*?\*\//g;
  return text.replace(literalOrComment, (_match, literal: string | undefined) => literal ?? "");
}

/** Local names an import clause binds: default, namespace and named (after any `as`). */
function importedBindings(clause: string): string[] {
  const named = /\{([\s\S]*)\}/.exec(clause);
  const outside = clause.replace(/\{[\s\S]*\}/, "").replace(/^\s*type\b/, "");
  const names = [...outside.matchAll(/(?:\*\s*as\s+)?([\w$]+)/g)].map((match) => match[1]);
  for (const specifier of named?.[1].split(",") ?? []) {
    const local = /([\w$]+)\s*$/.exec(specifier);
    if (local) names.push(local[1]);
  }
  return names.filter((name) => name !== "from");
}

/** Length of a leading `type` or `interface` declaration, or 0 when it has no clear end. */
function typeDeclarationLength(text: string): number {
  const isInterface = /^(?:export\s+)?interface\b/.test(text);
  let depth = 0;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if ("\"'`".includes(character)) {
      index = text.indexOf(character, index + 1);
      if (index < 0) return 0;
    } else if ("{[(".includes(character)) {
      depth += 1;
    } else if ("}])".includes(character)) {
      depth -= 1;
      if (isInterface && depth === 0 && character === "}") return index + 1;
    } else if (!isInterface && depth === 0 && character === ";") {
      return index + 1;
    }
  }
  return 0;
}

/**
 * The first top-level statement that keeps a module from being a barrel or thin facade, or null
 * when every statement is an import, a re-export, a type declaration, or an alias of an imported
 * binding (`export default imported;`, `export const name = imported;`).
 */
function facadeViolation(module: string): string | null {
  const imported = new Set<string>();
  // Only `*` or a braced list may stand before `from`, so a declaration cannot ride in on a re-export.
  const reExportForm = /^export\s+(?:type\s+)?(?:\*(?:\s+as\s+[\w$]+)?|\{[^{};"'`]*\})\s*from\s*["'][^"'\n]*["'];?/;
  let rest = stripComments(readSource(module)).trimStart();
  while (rest !== "") {
    const importDeclaration = /^import\b([^;"'`]*)["'][^"'\n]*["'];?/.exec(rest);
    const reExport = reExportForm.exec(rest);
    const alias = /^export\s+(?:default\s+|const\s+[\w$]+\s*=\s*)([\w$]+);/.exec(rest);
    let length = 0;
    if (importDeclaration) {
      for (const name of importedBindings(importDeclaration[1])) imported.add(name);
      length = importDeclaration[0].length;
    } else if (reExport) {
      length = reExport[0].length;
    } else if (/^(?:export\s+)?(?:type|interface)\b/.test(rest)) {
      length = typeDeclarationLength(rest);
    } else if (alias && imported.has(alias[1])) {
      length = alias[0].length;
    }
    if (length === 0) return rest.split("\n")[0].slice(0, 80);
    rest = rest.slice(length).trimStart();
  }
  return null;
}

/** Why a module fails seam admission, phrased to follow its path, or null when it is admitted. */
function seamAdmissionFailure(module: string): string | null {
  if (!/^src\/optics\/[^/]+\.ts$/.test(module)) return "is not a top-level src/optics/*.ts file";
  const statement = facadeViolation(module);
  if (statement === null) return null;
  return `is an implementation file, not a barrel or thin facade (first disqualifying statement: \`${statement}\`)`;
}

/**
 * Why a permanent seam entry's stated reason no longer holds, phrased to follow its path and to
 * end the sentence, or null when it does: a script under scripts/ names the module as a path, and
 * the module imports nothing at runtime, which is what lets plain Node load it without resolving
 * a specifier.
 */
function plainNodeLoadFailure(module: string, loader: string): string | null {
  const entry = "is a permanent SEAM_REGISTRY entry";
  const nameLoader = "Name the script that loads it, or remove the entry.";
  if (!loader.startsWith("scripts/")) {
    return `${entry}, but its plainNodeLoader ${loader} is not a script under scripts/. ${nameLoader}`;
  }
  // The importer scan lists the loader only when that file exists, so a missing file is never read.
  const loads =
    outsideImporters().get(module)?.includes(loader) === true &&
    pathLoadedOpticsModules(readSource(loader)).includes(module);
  if (!loads) return `${entry} because ${loader} loads it by path, but that script no longer does. ${nameLoader}`;
  const runtimeImport = moduleReferences(readSource(module)).find((reference) => !reference.typeOnly);
  if (runtimeImport === undefined) return null;
  return (
    `${entry} because plain Node loads it by path, but it imports "${runtimeImport.specifier}" at runtime. ` +
    "Keep its imports type-only, or remove the entry."
  );
}

/**
 * Module-level containers in src/optics/, keyed `<module>#<identifier>`: a column-0 declaration
 * whose initializer starts with `new Map`, `new WeakMap`, `new Set` or `new WeakSet`, or whose
 * declared type is one of those or their Readonly forms.
 * Not seen: a container nested in another value, returned by a factory call or chosen by a
 * conditional initializer; a second declarator of one statement; a class static field.
 */
const moduleLevelContainers = once(() => {
  const containers = new Map<string, ModuleContainer>();
  // The type annotation ends at the first `=` that is not an arrow's, and cannot run onto a line
  // that starts a new statement: Prettier indents a continuation line or starts it with a closer.
  const declaration =
    /^(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::\s*((?:(?!\n[^ \t)\]}>])(?:=>|[^=]))+))?(?:\s*=(?!>)\s*new\s+(Map|WeakMap|Set|WeakSet)\b)?/gm;
  for (const module of [...opticsModules()].sort()) {
    const text = readSource(module);
    for (const match of text.matchAll(declaration)) {
      const declared = /^(?:Readonly)?(Map|Set)<|^(WeakMap|WeakSet)</.exec(match[2] ?? "");
      const constructorName = match[3] ?? declared?.[1] ?? declared?.[2];
      if (constructorName === undefined) continue;
      const name = match[1];
      const end = text.indexOf(";", match.index);
      const write = new RegExp(`\\b${name.replace(/\$/g, "\\$")}\\s*\\??\\.\\s*(?:set|add|delete|clear)\\s*\\(`);
      containers.set(`${module}#${name}`, {
        module,
        name,
        constructorName,
        declaration: text.slice(match.index, end < 0 ? undefined : end),
        written: write.test(text),
      });
    }
  }
  return containers;
});

/** True when the module declares `const <limit> = <capacity>;` at module level. */
function declaresLimit(module: string, limit: string, capacity: number): boolean {
  const value = new RegExp(`^(?:export\\s+)?const\\s+${limit}\\s*=\\s*([\\d_]+)\\s*;`, "m").exec(readSource(module));
  return value !== null && Number(value[1].replaceAll("_", "")) === capacity;
}

/** A Map or Set in a declaration. The word boundary keeps WeakMap, ReadonlyMap and their Set forms out. */
const GROWABLE_STORE = /\b(?:Map|Set)</;

/** Why a registry record fails its kind's admission rule, or null when it is admitted. */
function cacheAdmissionFailure(container: ModuleContainer, record: CacheRecord): string | null {
  const { module, name } = container;
  if (record.kind === "constant") {
    return container.written ? `is registered as a constant, but ${module} calls a mutating method on it` : null;
  }
  if (record.owner.trim() === "" || record.key.trim() === "") return "must record a non-empty owner and key";
  const { capacity, limit } = record;
  const capped = capacity !== undefined && limit !== undefined;
  if (capped && !(Number.isInteger(capacity) && capacity > 0 && declaresLimit(module, limit, capacity))) {
    return `records capacity ${capacity}, but ${module} does not declare \`const ${limit} = ${capacity};\``;
  }
  if (record.kind === "bounded") return null;
  if (container.constructorName !== "WeakMap") return `is registered as "weak-owner" but ${name} is not a WeakMap`;
  if (record.perOwner.trim() === "") return "must record what one owner holds (perOwner)";
  if ((capacity === undefined) !== (limit === undefined)) return "must record capacity and limit together";
  // Only the declaration is read, so a growable store behind a type alias is left to review.
  if (!capped && GROWABLE_STORE.test(container.declaration)) {
    return "holds a Map or Set per owner, which grows without bound unless the record has a capacity and limit";
  }
  return null;
}

/**
 * Why a legacy cache no longer violates, phrased to follow its id and to end the sentence, or null
 * while it still does. A WeakMap violates through the Map or Set it holds per owner: one shown in
 * its declaration, or one inside the module type the record names as `storeType`.
 */
function cacheLegacyStaleness(container: ModuleContainer | undefined, record: CacheLegacyRecord): string | null {
  if (container === undefined) return "is no longer a module-level container. Remove it from CACHE_LEGACY.";
  if (!container.written) {
    return (
      "is no longer written by its module, so it is a constant. Move it from CACHE_LEGACY to " +
      'CACHE_REGISTRY as { kind: "constant" }.'
    );
  }
  if (container.constructorName !== "WeakMap") return null;
  const { storeType } = record;
  const toRegistry = 'Move it from CACHE_LEGACY to CACHE_REGISTRY as { kind: "weak-owner" }';
  if (storeType === undefined) {
    if (GROWABLE_STORE.test(container.declaration)) return null;
    return (
      `no longer shows a Map or Set per owner in its declaration. ${toRegistry}, or record the type ` +
      "that now holds the Map as storeType."
    );
  }
  // The named type has to be the one the WeakMap holds, and has to hold the Map itself.
  const source = stripComments(readSource(container.module));
  const start = source.search(new RegExp(`^(?:export\\s+)?(?:interface|type)\\s+${storeType}\\b`, "m"));
  const storeDeclaration = start < 0 ? "" : source.slice(start, start + typeDeclarationLength(source.slice(start)));
  const named = new RegExp(`\\b${storeType}\\b`).test(container.declaration);
  if (named && GROWABLE_STORE.test(storeDeclaration)) return null;
  return (
    `records storeType ${storeType}, but its declaration no longer names that type or ${container.module} no ` +
    `longer declares it with a Map or Set. ${toRegistry}, or correct storeType.`
  );
}

/** A short list of importer files for a failure message. */
function summarize(files: readonly string[]): string {
  return files.length <= 3 ? files.join(", ") : `${files.slice(0, 3).join(", ")} and ${files.length - 3} more`;
}

/* ── Guards ── */

describe("optics architecture guards", () => {
  it("keeps every list sorted", () => {
    const lists = {
      CYCLE_LEGACY,
      SEAM_REGISTRY: SEAM_REGISTRY.map((entry) => entry.module),
      SEAM_LEGACY,
      CACHE_REGISTRY: Object.keys(CACHE_REGISTRY),
      CACHE_LEGACY: Object.keys(CACHE_LEGACY),
    };
    const unsorted = Object.entries(lists)
      .filter(([, entries]) => entries.join("\n") !== [...new Set(entries)].sort().join("\n"))
      .map(([name]) => name);
    expect(unsorted, "sort these lists by entry and drop duplicates").toEqual([]);
  });

  describe("import cycles", () => {
    it("finds no runtime import cycle outside CYCLE_LEGACY, and no stale legacy entry", () => {
      const graph = opticsRuntimeGraph();
      const cyclic = new Set(importCycles(graph).flat());
      const added = [...cyclic].filter((module) => !CYCLE_LEGACY.includes(module)).sort();
      const problems = [
        ...added.map(
          (module) =>
            `${module} is in a runtime import cycle (${cycleThrough(graph, module).join(" -> ")}). ` +
            "Break the cycle: CYCLE_LEGACY only shrinks, so do not add the module there.",
        ),
        ...CYCLE_LEGACY.filter((module) => !cyclic.has(module)).map(
          (module) => `${module} is no longer in a runtime import cycle. Remove it from CYCLE_LEGACY.`,
        ),
      ];
      expect(problems, "import-cycle guard").toEqual([]);
    });
  });

  describe("seam", () => {
    it("registers only modules that meet the admission rule", () => {
      const problems = SEAM_REGISTRY.flatMap(({ module, plainNodeLoader }) => {
        if (!opticsModules().has(module)) return [`${module} does not exist. Remove it from SEAM_REGISTRY.`];
        if (plainNodeLoader !== undefined) {
          const unloadable = plainNodeLoadFailure(module, plainNodeLoader);
          return unloadable === null ? [] : [`${module} ${unloadable}`];
        }
        const failure = seamAdmissionFailure(module);
        return failure === null ? [] : [`${module} ${failure}. Remove it from SEAM_REGISTRY.`];
      });
      expect(problems, "seam registry admission").toEqual([]);
    });

    it("finds no outside import of an unlisted optics module, and no stale legacy entry", () => {
      const registered = new Set(SEAM_REGISTRY.map((entry) => entry.module));
      const problems: string[] = [];
      for (const [module, files] of outsideImporters()) {
        if (registered.has(module) || SEAM_LEGACY.includes(module)) continue;
        const failure = seamAdmissionFailure(module);
        problems.push(
          failure === null
            ? `${module} is imported from outside src/optics/ (${summarize(files)}) and meets the admission ` +
                "rule. Add it to SEAM_REGISTRY."
            : `${module} is imported from outside src/optics/ (${summarize(files)}) but ${failure}. Import a ` +
                "SEAM_REGISTRY module instead: SEAM_LEGACY only shrinks, so do not add the module there.",
        );
      }
      for (const module of SEAM_LEGACY) {
        if (registered.has(module)) {
          problems.push(`${module} is in both seam lists. Remove it from SEAM_LEGACY.`);
        } else if (!outsideImporters().has(module)) {
          problems.push(`${module} is no longer imported from outside src/optics/. Remove it from SEAM_LEGACY.`);
        } else if (seamAdmissionFailure(module) === null) {
          problems.push(`${module} now meets the admission rule. Move it from SEAM_LEGACY to SEAM_REGISTRY.`);
        }
      }
      expect(problems, "seam guard").toEqual([]);
    });
  });

  describe("caches", () => {
    it("finds no unlisted module-level container, and no entry without one", () => {
      const containers = moduleLevelContainers();
      const problems: string[] = [];
      for (const [id, container] of containers) {
        if (id in CACHE_REGISTRY || id in CACHE_LEGACY) continue;
        problems.push(
          `${id} is a module-level ${container.constructorName} that is not listed. Add it to CACHE_REGISTRY as ` +
            '"constant", "bounded" or "weak-owner": CACHE_LEGACY only shrinks, so do not add it there.',
        );
      }
      for (const id of Object.keys(CACHE_REGISTRY)) {
        if (id in CACHE_LEGACY) problems.push(`${id} is in both cache lists. Remove it from CACHE_LEGACY.`);
        if (!containers.has(id)) problems.push(`${id} is not a module-level container. Remove it from CACHE_REGISTRY.`);
      }
      for (const [id, record] of Object.entries(CACHE_LEGACY)) {
        const staleness = cacheLegacyStaleness(containers.get(id), record);
        if (staleness !== null) problems.push(`${id} ${staleness}`);
      }
      expect(problems, "cache guard").toEqual([]);
    });

    it("registers only containers that meet their kind's admission rule", () => {
      const problems = Object.entries(CACHE_REGISTRY).flatMap(([id, record]) => {
        const container = moduleLevelContainers().get(id);
        const failure = container === undefined ? null : cacheAdmissionFailure(container, record);
        return failure === null ? [] : [`${id} ${failure}. Fix the code or the CACHE_REGISTRY record.`];
      });
      expect(problems, "cache registry admission").toEqual([]);
    });

    it("records how each legacy cache grows and what would retire it", () => {
      const incomplete = Object.entries(CACHE_LEGACY)
        .filter(([, record]) => record.grows.trim() === "" || record.retire.trim() === "")
        .map(([id]) => id);
      expect(incomplete, "CACHE_LEGACY records need non-empty `grows` and `retire` text").toEqual([]);
    });
  });
});
