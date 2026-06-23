import fs from "node:fs/promises";
import path from "node:path";
import * as ts from "typescript";

const repoRoot = process.cwd();
const srcRoot = path.join(repoRoot, "src");
const generatedDocNames = new Set(["readme.md", "improvementsuggestions.md"]);
const skippedDocSubtrees = new Set(["src/generated", "src/lens-data", "src/mounts"]);
const sourceExtensions = new Set([".ts", ".tsx", ".json", ".md", ".template"]);
const codeExtensions = new Set([".ts", ".tsx"]);
const moduleExtensions = [".ts", ".tsx", ".d.ts", ".json", ".md"];
const maxCellItems = 5;
const maxExportItems = 8;
const maxDiagramChildren = 24;
const maxDiagramEdges = 36;

const folderRoleOverrides = new Map([
  [
    "src",
    "application source root tying browser entry points, SSR, routes, pages, components, utilities, optics, lens data, mounts, and generated metadata together",
  ],
  [
    "src/benchmarks",
    "optics/rendering benchmark helpers that exercise runtime viewer paths outside normal app rendering",
  ],
  ["src/comparison", "comparison-mode state, shared sliders, URL metadata, and two-lens layout composition"],
  [
    "src/components",
    "React UI component root for page chrome, controls, SVG diagrams, analysis display, markdown, hooks, mount diagrams, and error boundaries",
  ],
  ["src/components/content", "content-listing UI used by article, changelog, sidebar, and archive routes"],
  ["src/components/controls", "shared viewer controls for sliders, toggles, diagram headers, selectors, and tooltips"],
  [
    "src/components/diagram",
    "inline SVG diagram layers and overlays for optical geometry, rays, pupils, MTF, chromatic widgets, and labels",
  ],
  ["src/components/display", "display-domain UI for inspectors, legends, analysis panels, charts, and overlay helpers"],
  ["src/components/display/analysis", "analysis drawer tabs, plots, chart utilities, and prepared-state hooks"],
  [
    "src/components/display/analysis/aberrations",
    "aberration-tab section components and hooks for spherical aberration, field curvature, astigmatism, and coma",
  ],
  ["src/components/display/analysis/charts", "shared SVG chart frame and math helpers for analysis plots"],
  ["src/components/display/overlays", "modal overlay content for aspheric comparison and lens group movement"],
  ["src/components/errors", "page and panel error boundaries plus shared error display UI"],
  ["src/components/homepage", "home page section components for the public landing surface"],
  [
    "src/components/hooks",
    "viewer computation and interaction hooks for layout, ray tracing, overlays, zoom, and responsive state",
  ],
  ["src/components/layout", "viewer-level layout, page chrome, panels, drawers, top navigation, and overlay shells"],
  [
    "src/components/layout/lensDiagram",
    "lens diagram panel state, viewport, loading/error states, and analysis drawer wiring",
  ],
  ["src/components/layout/lensViewer", "LensViewer chrome, content routing, and overlay composition"],
  ["src/components/markdown", "shared markdown rendering and heading extraction for articles and lens notes"],
  ["src/components/mount", "React mount-diagram rendering panels backed by the pure mount optics renderer"],
  ["src/content", "auto-discovered markdown articles and static site content"],
  ["src/content/focusing-architecture", "article series content about focusing architecture patterns"],
  ["src/content/pupils", "article series content about aperture stops, pupils, telecentricity, and illumination"],
  [
    "src/generated",
    "build-generated metadata and maker prefix JSON consumed by catalog, content, SEO, and prerender flows",
  ],
  [
    "src/lens-data",
    "auto-discovered lens prescription data, companion analysis notes, audit notes, authoring specs, and shared lens-data defaults",
  ],
  ["src/mounts", "mount interface data specs and schema consumed by the pure mount renderer and mount pages"],
  [
    "src/optics",
    "pure optical engine, runtime-lens construction, tracing, analysis, projection, glass, mount rendering, and diagram geometry",
  ],
  ["src/optics/aberration", "engine-native aberration analysis primitives and shared aberration types"],
  ["src/optics/analysis", "prepared-state analysis adapters and grouped analysis facades"],
  ["src/optics/chromatic", "chromatic channel, trace, dispersion, and quality helpers"],
  ["src/optics/diagram", "pure SVG-ready diagram geometry helpers used by React diagram layers"],
  ["src/optics/field", "engine-native field geometry, chief-ray solving, projection, and launch helpers"],
  [
    "src/optics/first-order",
    "first-order optical calculations for cardinals, pupils, f-number, focus breathing, and system matrices",
  ],
  ["src/optics/internal", "private exact surface-tracing implementation details for the optics engine"],
  ["src/optics/math", "low-level vector, numerical, paraxial, surface profile, and intersection math"],
  ["src/optics/mount", "pure mount-diagram geometry, SVG document emission, validation, styling, and JSON helpers"],
  [
    "src/optics/prescription",
    "lens prescription normalization, variable gaps, labels, groups, dispersion, interactions, and aspheric helpers",
  ],
  ["src/optics/state", "engine-native prepared optical state and cache helpers"],
  [
    "src/optics/trace",
    "exact tracing adapters, path planning, folded diagnostics, stop tracing, and aperture/interactions primitives",
  ],
  ["src/pages", "route-level React pages and page-specific lens-index feature module"],
  ["src/pages/lensIndex", "lens library catalog filtering, URL state, grouping, results, and filter-panel UI"],
  ["src/routes", "shared route manifest used by browser routing, SSR, prerender, and sitemap coverage"],
  [
    "src/types",
    "shared TypeScript type surfaces for optics, reducer state, mount diagrams, group movement, and themes",
  ],
  [
    "src/utils",
    "shared app utilities for config, catalog, content, error reporting, feature flags, media queries, performance probes, SEO, state, style, and themes",
  ],
  ["src/utils/catalog", "lens, maker, mount, image-format, and metadata catalog helpers"],
  ["src/utils/content", "article/changelog/homepage content registries and display helpers"],
  ["src/utils/seo", "shared structured-data and freshness helpers for route metadata"],
  ["src/utils/state", "LensViewer reducer, contexts, preferences, URL parsing/sync, and zoom conversions"],
  ["src/utils/style", "inline-style fragments and shared control styling helpers"],
  ["src/utils/theme", "theme variants, page theme hooks, constants, and persisted theme preferences"],
]);

const childrenByDir = new Map();
const fileInfos = new Map();
const dirs = new Set();

const toPosix = (value) => value.split(path.sep).join("/");

const fromSrcRel = (absolutePath) => {
  const rel = toPosix(path.relative(srcRoot, absolutePath));
  return rel ? `src/${rel}` : "src";
};

const escapeMarkdown = (value) => {
  const text = String(value ?? "");
  return text.replaceAll("\\", "\\\\").replaceAll("|", "\\|").replaceAll("\n", " ").trim();
};

const escapeMermaidLabel = (value) => String(value).replaceAll("\\", "\\\\").replaceAll('"', "'");

const titleFromPath = (dirRel) => {
  if (dirRel === "src") return "src";
  return dirRel;
};

const humanizeSlug = (slug) =>
  slug
    .replace(/\.[^.]+$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const mermaidId = (value) => `n_${value.replace(/[^A-Za-z0-9_]/g, "_")}`;

const hasGeneratedDocName = (absolutePath) => generatedDocNames.has(path.basename(absolutePath).toLowerCase());

const isSkippedDocSubtree = (dirRel) =>
  [...skippedDocSubtrees].some((skipped) => dirRel === skipped || dirRel.startsWith(`${skipped}/`));

const readDirRecursive = async (dir) => {
  const dirRel = fromSrcRel(dir);
  if (isSkippedDocSubtree(dirRel)) return;
  dirs.add(dirRel);
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await readDirRecursive(absolutePath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (sourceExtensions.has(ext) || entry.name.endsWith(".d.ts")) {
        const dirRel = fromSrcRel(dir);
        if (!childrenByDir.has(dirRel)) childrenByDir.set(dirRel, []);
        if (!hasGeneratedDocName(absolutePath)) {
          childrenByDir.get(dirRel).push(fromSrcRel(absolutePath));
        }
      }
    }
  }
};

const tryAccess = async (candidate) => {
  try {
    const stat = await fs.stat(candidate);
    return stat.isFile();
  } catch {
    return false;
  }
};

const resolveRelativeImport = async (fromFileRel, specifier) => {
  const fromAbs = path.join(repoRoot, fromFileRel);
  const baseAbs = path.resolve(path.dirname(fromAbs), specifier);
  const candidates = [];
  if (path.extname(baseAbs)) {
    candidates.push(baseAbs);
    if ([".js", ".jsx", ".mjs"].includes(path.extname(baseAbs))) {
      const withoutJsExt = baseAbs.replace(/\.(m?js|jsx)$/, "");
      for (const ext of [".ts", ".tsx", ".d.ts"]) candidates.push(`${withoutJsExt}${ext}`);
    }
  } else {
    for (const ext of moduleExtensions) candidates.push(`${baseAbs}${ext}`);
    for (const ext of moduleExtensions) candidates.push(path.join(baseAbs, `index${ext}`));
  }
  for (const candidate of candidates) {
    if ((await tryAccess(candidate)) && candidate.startsWith(srcRoot)) {
      return fromSrcRel(candidate);
    }
  }
  if (baseAbs.startsWith(srcRoot)) {
    return `src/${toPosix(path.relative(srcRoot, baseAbs))}`;
  }
  return toPosix(path.relative(repoRoot, baseAbs));
};

const packageNameFromSpecifier = (specifier) => {
  if (specifier.startsWith("@")) {
    const [scope, name] = specifier.split("/");
    return `${scope}/${name}`;
  }
  return specifier.split("/")[0];
};

const normalizeImportTarget = async (fromFileRel, specifier) => {
  if (specifier.startsWith(".")) {
    return {
      raw: specifier,
      target: await resolveRelativeImport(fromFileRel, specifier),
      kind: "internal",
    };
  }
  if (specifier.startsWith("src/")) {
    return { raw: specifier, target: specifier, kind: "internal" };
  }
  return {
    raw: specifier,
    target: `package:${packageNameFromSpecifier(specifier)}`,
    kind: "package",
  };
};

const collectSpecifiersFromNode = (sourceFile, specs) => {
  const visit = (node) => {
    if (ts.isImportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteralLike(node.moduleSpecifier)) {
      specs.push({
        text: node.moduleSpecifier.text,
        typeOnly: node.importClause?.isTypeOnly ?? false,
      });
    }
    if (ts.isExportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteralLike(node.moduleSpecifier)) {
      specs.push({
        text: node.moduleSpecifier.text,
        typeOnly: node.isTypeOnly,
      });
    }
    if (
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword &&
      node.arguments[0] &&
      ts.isStringLiteralLike(node.arguments[0])
    ) {
      specs.push({ text: node.arguments[0].text, typeOnly: false });
    }
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.getText(sourceFile) === "import.meta.glob" &&
      node.arguments[0] &&
      ts.isStringLiteralLike(node.arguments[0])
    ) {
      specs.push({ text: `glob:${node.arguments[0].text}`, typeOnly: false });
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
};

const exportNameFromDeclaration = (node) => {
  if (ts.isVariableStatement(node)) {
    return node.declarationList.declarations
      .map((decl) => (ts.isIdentifier(decl.name) ? decl.name.text : undefined))
      .filter(Boolean);
  }
  if ("name" in node && node.name && ts.isIdentifier(node.name)) {
    return [node.name.text];
  }
  return ["default"];
};

const collectExportsFromNode = (sourceFile, exports) => {
  for (const statement of sourceFile.statements) {
    const modifiers = ts.canHaveModifiers(statement) ? (ts.getModifiers(statement) ?? []) : [];
    const hasExport = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
    const hasDefault = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword);
    if (hasExport) {
      const names = exportNameFromDeclaration(statement);
      if (hasDefault && !names.includes("default")) exports.push("default");
      exports.push(...names);
    }
    if (ts.isExportDeclaration(statement)) {
      if (statement.exportClause && ts.isNamedExports(statement.exportClause)) {
        for (const element of statement.exportClause.elements) exports.push(element.name.text);
      } else if (statement.moduleSpecifier) {
        exports.push("re-export *");
      }
    }
    if (ts.isExportAssignment(statement)) {
      exports.push("default");
    }
  }
};

const frontmatterTitle = (content) => {
  const match = /^---\n([\s\S]*?)\n---/.exec(content);
  if (!match) return undefined;
  const titleMatch = /^title:\s*["']?(.+?)["']?\s*$/m.exec(match[1]);
  return titleMatch?.[1];
};

const summarizeMarkdown = (fileRel, content) => {
  const base = path.basename(fileRel);
  const title = frontmatterTitle(content);
  if (base.endsWith(".analysis.md")) return `Lens analysis note${title ? `: ${title}` : ""}`;
  if (base.endsWith(".audit.md")) return "Lens patent/source audit note";
  if (base === "MOUNT_SVG_SPEC.md") return "Mount diagram authoring specification";
  if (base === "LENS_DATA_SPEC.md") return "Lens data authoring specification";
  if (base === "LENS_ANALYSIS_SPEC.md") return "Lens analysis authoring specification";
  if (base === "LENS_MOUNT_FORMAT_OPTIONS.md") return "Canonical lens mount and image-format option reference";
  return `Markdown content${title ? `: ${title}` : ""}`;
};

const roleForFile = (fileRel, content, exports) => {
  const base = path.basename(fileRel);
  const ext = path.extname(base);
  const withoutExt = base.replace(/\.(tsx|ts|d\.ts|json|md|template)$/, "");
  if (base.endsWith(".data.ts")) return "Lens prescription data module";
  if (base.endsWith(".mount.ts")) return "Mount interface specification";
  if (base.endsWith(".d.ts")) return "Ambient/type declaration surface";
  if (base.endsWith(".analysis.md") || base.endsWith(".audit.md") || ext === ".md")
    return summarizeMarkdown(fileRel, content);
  if (base === "lens-mount.schema.json") return "JSON schema for mount specifications";
  if (base === "build-metadata.json") return "Generated build metadata for routes, content, lens freshness, and SEO";
  if (base === "maker-prefixes.json") return "Generated maker-prefix lookup";
  if (base.endsWith(".template")) return "Authoring template";
  if (ext === ".tsx") {
    if (base.startsWith("use")) return "React hook module";
    if (fileRel.includes("/pages/")) return "Route-level React page";
    return "React component module";
  }
  if (base.startsWith("use")) return "React hook module";
  if (fileRel.includes("/types/") || /(^|\/)types?\.ts$/.test(fileRel)) return "Shared TypeScript types";
  if (base === "index.ts") return "Barrel/registry module";
  if (exports.includes("default")) return `${humanizeSlug(withoutExt)} module with default export`;
  return `${humanizeSlug(withoutExt)} helper module`;
};

const analyzeFile = async (fileRel) => {
  const absolutePath = path.join(repoRoot, fileRel);
  const content = await fs.readFile(absolutePath, "utf8");
  const ext = path.extname(fileRel);
  const imports = [];
  const exports = [];
  if (codeExtensions.has(ext) || fileRel.endsWith(".d.ts")) {
    const scriptKind = fileRel.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    const sourceFile = ts.createSourceFile(fileRel, content, ts.ScriptTarget.Latest, true, scriptKind);
    const specs = [];
    collectSpecifiersFromNode(sourceFile, specs);
    for (const specifier of specs) {
      if (specifier.text.startsWith("glob:")) {
        imports.push({
          raw: specifier.text.slice("glob:".length),
          target: specifier.text,
          kind: "glob",
          typeOnly: false,
        });
      } else {
        imports.push({ ...(await normalizeImportTarget(fileRel, specifier.text)), typeOnly: specifier.typeOnly });
      }
    }
    collectExportsFromNode(sourceFile, exports);
  } else if (ext === ".json") {
    exports.push("data");
  } else if (ext === ".md") {
    exports.push("content");
  } else if (fileRel.endsWith(".template")) {
    exports.push("template");
  }
  const uniqueExports = [...new Set(exports)];
  return {
    rel: fileRel,
    dir: `src/${toPosix(path.dirname(path.relative(srcRoot, absolutePath)))}`.replace(/\/\.$/, ""),
    base: path.basename(fileRel),
    role: roleForFile(fileRel, content, uniqueExports),
    imports,
    exports: uniqueExports,
    lineCount: content.split(/\r?\n/).length,
  };
};

const internalFolderForTarget = (target) => {
  if (!target.startsWith("src/")) return target;
  const parts = target.split("/");
  if (parts.length <= 2) return target;
  if (parts[1] === "components" && parts.length >= 3) return `src/components/${parts[2]}`;
  if (parts[1] === "optics" && parts.length >= 3) return `src/optics/${parts[2]}`;
  if (parts[1] === "utils" && parts.length >= 3) return `src/utils/${parts[2]}`;
  if (parts[1] === "lens-data" && parts.length >= 3) return `src/lens-data/${parts[2]}`;
  if (parts[1] === "content" && parts.length >= 3) return `src/content/${parts[2]}`;
  if (parts[1] === "pages" && parts.length >= 3) return `src/pages/${parts[2]}`;
  return `src/${parts[1]}`;
};

const childKeyForTarget = (dirRel, target) => {
  if (!target.startsWith(`${dirRel}/`)) return undefined;
  const remainder = target.slice(dirRel.length + 1);
  const first = remainder.split("/")[0];
  return `${dirRel}/${first}`;
};

const summarizeTargets = (targets, currentDir) => {
  const counts = new Map();
  for (const target of targets) {
    let label = target;
    if (target.startsWith("package:")) label = target;
    else if (target.startsWith("glob:")) label = target.replace("glob:", "glob:");
    else if (target.startsWith("src/")) label = internalFolderForTarget(target);
    if (currentDir && label === currentDir) label = "same folder";
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, count]) => (count > 1 ? `${label} (${count})` : label));
};

const formatListCell = (items, emptyLabel = "none", maxItems = maxCellItems) => {
  const unique = [...new Set(items)].filter(Boolean);
  if (unique.length === 0) return emptyLabel;
  const shown = unique.slice(0, maxItems);
  const suffix = unique.length > maxItems ? `, +${unique.length - maxItems} more` : "";
  return escapeMarkdown(`${shown.join(", ")}${suffix}`);
};

const classifyChild = (fileRel) => {
  const base = path.basename(fileRel);
  if (base.endsWith(".data.ts")) return "lens data files";
  if (base.endsWith(".analysis.md")) return "analysis notes";
  if (base.endsWith(".audit.md")) return "audit notes";
  if (base.endsWith(".mount.ts")) return "mount specs";
  if (base.endsWith(".tsx")) return "React components";
  if (base.endsWith(".d.ts")) return "type declarations";
  if (base.endsWith(".ts")) return "TypeScript modules";
  if (base.endsWith(".md")) return "Markdown docs";
  if (base.endsWith(".json")) return "JSON data";
  if (base.endsWith(".template")) return "templates";
  return "other files";
};

const folderRole = (dirRel) => {
  if (folderRoleOverrides.has(dirRel)) return folderRoleOverrides.get(dirRel);
  return `${titleFromPath(dirRel)} source folder`;
};

const filesInDir = (dirRel) => (childrenByDir.get(dirRel) ?? []).sort((a, b) => a.localeCompare(b));

const subdirsInDir = (dirRel) => {
  const prefix = `${dirRel}/`;
  return [...dirs]
    .filter((candidate) => candidate.startsWith(prefix))
    .filter((candidate) => !candidate.slice(prefix.length).includes("/"))
    .sort((a, b) => a.localeCompare(b));
};

const inboundMap = new Map();

const addInbound = (target, from) => {
  if (!fileInfos.has(target)) return;
  if (!inboundMap.has(target)) inboundMap.set(target, new Set());
  inboundMap.get(target).add(from);
};

const buildInboundMap = () => {
  for (const info of fileInfos.values()) {
    for (const imp of info.imports) {
      if (imp.kind === "internal") addInbound(imp.target, info.rel);
    }
  }
};

const fileDisplayName = (fileRel, dirRel) =>
  toPosix(path.relative(path.join(repoRoot, dirRel), path.join(repoRoot, fileRel)));

const docLinkForChildDir = (dirRel, childDirRel) => {
  const rel = toPosix(path.relative(path.join(repoRoot, dirRel), path.join(repoRoot, childDirRel, "readme.md")));
  return `[${path.basename(childDirRel)}/](${rel})`;
};

const groupDiagramChildren = (directFiles, directSubdirs) => {
  const children = [];
  for (const subdir of directSubdirs)
    children.push({ key: subdir, label: `${path.basename(subdir)}/`, files: [subdir], isDir: true });
  if (directFiles.length + directSubdirs.length <= maxDiagramChildren) {
    for (const file of directFiles)
      children.push({ key: file, label: path.basename(file), files: [file], isDir: false });
    return children;
  }
  const groups = new Map();
  for (const file of directFiles) {
    const label = classifyChild(file);
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(file);
  }
  for (const [label, files] of [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    children.push({ key: label, label: `${label} (${files.length})`, files, isDir: false });
  }
  return children;
};

const buildDiagram = (dirRel, directFiles, directSubdirs) => {
  const children = groupDiagramChildren(directFiles, directSubdirs);
  const lines = ["```mermaid", "flowchart LR", `  subgraph ${mermaidId(dirRel)}["${escapeMermaidLabel(dirRel)}"]`];
  for (const child of children) {
    lines.push(`    ${mermaidId(`${dirRel}:${child.key}`)}["${escapeMermaidLabel(child.label)}"]`);
  }
  if (children.length === 0) {
    lines.push(`    ${mermaidId(`${dirRel}:empty`)}["no direct source files"]`);
  }
  lines.push("  end");

  const edgeCounts = new Map();
  const ensureEdge = (fromKey, target) => {
    const childTarget = childKeyForTarget(dirRel, target);
    let toKey;
    let toLabel;
    if (childTarget && children.some((child) => child.key === childTarget || child.files.includes(childTarget))) {
      const targetChild = children.find((child) => child.key === childTarget || child.files.includes(childTarget));
      toKey = `${dirRel}:${targetChild.key}`;
    } else {
      const label = target.startsWith("package:")
        ? target.replace("package:", "pkg:")
        : internalFolderForTarget(target);
      toKey = `external:${label}`;
      toLabel = label;
    }
    const key = `${fromKey}->${toKey}`;
    edgeCounts.set(key, { fromKey, toKey, toLabel, count: (edgeCounts.get(key)?.count ?? 0) + 1 });
  };

  for (const child of children) {
    if (child.isDir) continue;
    for (const file of child.files) {
      const info = fileInfos.get(file);
      if (!info) continue;
      for (const imp of info.imports) {
        if (imp.kind === "glob") {
          ensureEdge(`${dirRel}:${child.key}`, imp.target);
        } else {
          ensureEdge(`${dirRel}:${child.key}`, imp.target);
        }
      }
    }
  }

  const edges = [...edgeCounts.values()]
    .filter((edge) => edge.fromKey !== edge.toKey)
    .sort((a, b) => b.count - a.count || a.toKey.localeCompare(b.toKey))
    .slice(0, maxDiagramEdges);
  const externalNodes = new Map();
  for (const edge of edges) {
    if (edge.toLabel) externalNodes.set(edge.toKey, edge.toLabel);
  }
  for (const [key, label] of externalNodes) {
    lines.push(`  ${mermaidId(key)}["${escapeMermaidLabel(label)}"]`);
  }
  for (const edge of edges) {
    const label = edge.count > 1 ? ` |${edge.count}|` : "";
    lines.push(`  ${mermaidId(edge.fromKey)} -->${label} ${mermaidId(edge.toKey)}`);
  }
  if ([...edgeCounts.values()].length > maxDiagramEdges) {
    lines.push(`  ${mermaidId(`${dirRel}:truncated`)}["additional relationships omitted"]`);
  }
  lines.push("```");
  return lines.join("\n");
};

const externalConsumersForDir = (dirRel) => {
  const consumers = new Set();
  for (const file of filesInDir(dirRel)) {
    for (const inbound of inboundMap.get(file) ?? []) {
      const inboundDir = `src/${toPosix(path.dirname(path.relative(srcRoot, path.join(repoRoot, inbound))))}`.replace(
        /\/\.$/,
        "",
      );
      if (inboundDir !== dirRel) consumers.add(internalFolderForTarget(inbound));
    }
  }
  return [...consumers].sort((a, b) => a.localeCompare(b));
};

const outboundAreasForDir = (dirRel) => {
  const targets = [];
  for (const file of filesInDir(dirRel)) {
    const info = fileInfos.get(file);
    if (!info) continue;
    targets.push(...info.imports.map((imp) => imp.target));
  }
  return summarizeTargets(targets, dirRel);
};

const writeReadme = async (dirRel) => {
  const directFiles = filesInDir(dirRel);
  const directSubdirs = subdirsInDir(dirRel);
  const role = folderRole(dirRel);
  const outbound = outboundAreasForDir(dirRel);
  const consumers = externalConsumersForDir(dirRel);
  const lines = [];

  lines.push(`# ${titleFromPath(dirRel)}`);
  lines.push("");
  lines.push(`This folder ${role}.`);
  lines.push("");
  lines.push(
    "Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.",
  );
  lines.push("");
  lines.push("## Relationship Diagram");
  lines.push("");
  lines.push(buildDiagram(dirRel, directFiles, directSubdirs));
  lines.push("");
  lines.push("## Directory Overview");
  lines.push("");
  lines.push(`- Direct source files: ${directFiles.length}`);
  lines.push(`- Direct subfolders: ${directSubdirs.length}`);
  lines.push(`- Main outbound areas: ${formatListCell(outbound, "none", 8)}`);
  lines.push(`- External consumers: ${formatListCell(consumers, "none", 8)}`);
  if (dirRel === "src") {
    lines.push("- Skipped documentation subtrees: `src/generated/` (build output), `src/lens-data/`, `src/mounts/`");
  }
  lines.push("");

  if (directSubdirs.length > 0) {
    lines.push("## Subfolders");
    lines.push("");
    lines.push("| Folder | Role |");
    lines.push("| --- | --- |");
    for (const subdir of directSubdirs) {
      lines.push(`| ${docLinkForChildDir(dirRel, subdir)} | ${escapeMarkdown(folderRole(subdir))} |`);
    }
    lines.push("");
  }

  lines.push("## Files");
  lines.push("");
  if (directFiles.length === 0) {
    lines.push("No direct source files are present in this folder.");
  } else {
    lines.push("| File | Role | Imports from | Imported by | Exports |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const file of directFiles) {
      const info = fileInfos.get(file);
      if (!info) continue;
      const imports = summarizeTargets(
        info.imports.map((imp) => imp.target),
        dirRel,
      );
      const inbound = summarizeTargets([...(inboundMap.get(file) ?? [])], dirRel);
      lines.push(
        `| \`${escapeMarkdown(fileDisplayName(file, dirRel))}\` | ${escapeMarkdown(info.role)} | ${formatListCell(imports)} | ${formatListCell(inbound)} | ${formatListCell(info.exports, "none", maxExportItems)} |`,
      );
    }
  }
  lines.push("");

  await fs.writeFile(path.join(repoRoot, dirRel, "readme.md"), `${lines.join("\n")}\n`);
};

const findCycleSuggestions = () => {
  const graph = new Map();
  for (const info of fileInfos.values()) {
    graph.set(
      info.rel,
      info.imports
        .filter((imp) => !imp.typeOnly && imp.kind === "internal" && fileInfos.has(imp.target))
        .map((imp) => imp.target),
    );
  }
  const visited = new Set();
  const stack = [];
  const stackSet = new Set();
  const cycles = [];
  const visit = (node) => {
    visited.add(node);
    stack.push(node);
    stackSet.add(node);
    for (const next of graph.get(node) ?? []) {
      if (!visited.has(next)) visit(next);
      else if (stackSet.has(next)) {
        const cycle = stack.slice(stack.indexOf(next));
        if (cycle.length > 1) cycles.push(cycle);
      }
    }
    stack.pop();
    stackSet.delete(node);
  };
  for (const node of graph.keys()) {
    if (!visited.has(node)) visit(node);
  }
  const unique = new Map();
  for (const cycle of cycles) {
    const key = [...cycle].sort().join("|");
    if (!unique.has(key)) unique.set(key, cycle);
  }
  return [...unique.values()];
};

const suggestForDir = (dirRel, cycles) => {
  if (dirRel === "src/generated") return [];
  const directFiles = filesInDir(dirRel);
  const suggestions = [];
  const lineHeavy = directFiles
    .map((file) => fileInfos.get(file))
    .filter(Boolean)
    .filter((info) => codeExtensions.has(path.extname(info.rel)) || info.rel.endsWith(".d.ts"))
    .filter((info) => info.lineCount >= 650)
    .sort((a, b) => b.lineCount - a.lineCount);
  if (lineHeavy.length > 0 && !dirRel.startsWith("src/lens-data/")) {
    suggestions.push({
      title: "Large files carry substantial maintenance weight",
      evidence: lineHeavy
        .slice(0, 5)
        .map((info) => `${path.basename(info.rel)} (${info.lineCount} lines)`)
        .join(", "),
      implementation:
        "For code-heavy modules, extract pure calculations or formatting helpers into adjacent files. For data/catalog-heavy modules, split records into focused shards behind the existing index or public export surface.",
      upstream:
        "Tests and call sites that import the current module path should keep working if the original file re-exports or delegates to the extracted helpers.",
      downstream:
        "Moving exported names directly can break imports in pages, components, tests, and scripts; perform the split in stages and run typecheck plus focused tests.",
    });
  }

  const folderCycles = cycles.filter((cycle) => cycle.some((file) => path.dirname(file) === dirRel));
  if (folderCycles.length > 0) {
    suggestions.push({
      title: "Import cycles make this area harder to reason about",
      evidence: folderCycles
        .slice(0, 4)
        .map((cycle) => cycle.join(" -> "))
        .join("; "),
      implementation:
        "Move shared constants/types into a lower-level helper, invert UI-to-domain dependencies through function arguments, or introduce a narrow adapter module so each cycle has a clear direction.",
      upstream:
        "Breaking cycles can change initialization order, so preserve exported values and avoid moving side-effectful code without a regression check.",
      downstream:
        "Consumers may rely on barrel exports that currently hide the cycle; keep those barrels stable until imports have migrated.",
    });
  }

  const relativeEscapes = directFiles
    .map((file) => fileInfos.get(file))
    .filter(Boolean)
    .map((info) => ({
      info,
      count: info.imports.filter((imp) => imp.raw.startsWith("../../..")).length,
    }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count);
  if (relativeEscapes.length >= 4) {
    suggestions.push({
      title: "Several files use deep relative imports",
      evidence: relativeEscapes
        .slice(0, 6)
        .map((entry) => `${path.basename(entry.info.rel)} (${entry.count})`)
        .join(", "),
      implementation:
        "Prefer a local index module or existing public surface for repeated cross-folder imports. Where a domain already has a stable barrel, migrate callers to that surface instead of reaching through multiple parent directories.",
      upstream:
        "Adding barrels can increase accidental public API area; document intended exports and avoid exposing internal helpers.",
      downstream:
        "Changing import paths is mechanically simple but can mask circular dependencies, so re-run lint/typecheck and inspect bundle warnings if new barrels are introduced.",
    });
  }

  if (dirRel === "src/components/display/analysis") {
    suggestions.push({
      title: "Analysis tab wiring spans display components and optics analysis adapters",
      evidence:
        "The folder has many tab, chart, and hook modules that import prepared analysis state plus specialized optics analysis helpers.",
      implementation:
        "Keep new analysis features behind one folder-local hook or adapter per tab, then expose only chart-ready data to presentational components.",
      upstream:
        "Moving computation too far into UI components can duplicate prepared-state work and slow slider interactions.",
      downstream:
        "Moving display formatting into optics helpers would make the pure engine depend on UI concerns; keep that boundary intact.",
    });
  }

  return suggestions;
};

const writeSuggestions = async (dirRel, suggestions) => {
  const target = path.join(repoRoot, dirRel, "improvementsuggestions.md");
  if (suggestions.length === 0) {
    try {
      await fs.unlink(target);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    return;
  }
  const lines = [`# Improvement Suggestions for ${dirRel}`, ""];
  lines.push("These notes were created while mapping imports, exports, and file relationships for this folder.");
  lines.push("");
  for (const suggestion of suggestions) {
    lines.push(`## ${suggestion.title}`);
    lines.push("");
    lines.push(`- Evidence: ${suggestion.evidence}`);
    lines.push(`- Implementation overview: ${suggestion.implementation}`);
    lines.push(`- Upstream considerations: ${suggestion.upstream}`);
    lines.push(`- Downstream considerations: ${suggestion.downstream}`);
    lines.push("");
  }
  await fs.writeFile(target, `${lines.join("\n")}\n`);
};

await readDirRecursive(srcRoot);
for (const fileRel of [...childrenByDir.values()].flat()) {
  fileInfos.set(fileRel, await analyzeFile(fileRel));
}
buildInboundMap();
const cycles = findCycleSuggestions();

for (const dirRel of [...dirs].sort((a, b) => a.localeCompare(b))) {
  await writeReadme(dirRel);
}

for (const dirRel of [...dirs].sort((a, b) => a.localeCompare(b))) {
  await writeSuggestions(dirRel, suggestForDir(dirRel, cycles));
}

console.log(`Wrote ${dirs.size} readme.md files under src/.`);
console.log(`Detected ${cycles.length} unique internal import cycles for suggestion generation.`);
