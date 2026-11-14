/**
 * Node-only provenance helpers shared by the chart report and command-line drift checks.
 * Hashes use file bytes rather than imported modules, so freshness checks never trace a lens.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { MtfOptions, MtfSpectralLine } from "../src/types/mtf.js";

export const MTF_CHART_ANCHORS_PATH = "reports/data/mtfChartAnchors.csv";
export const MTF_CHART_CONVENTIONS_PATH = "reports/data/mtfChartConventions.ts";
const REPORT_SOURCE_PATHS = [
  "reports/mtfChartRegression.report.ts",
  "reports/mtfChartLib.ts",
  "reports/mtfChartProvenance.ts",
];
const STAMP_VERSION = 2;

export interface MtfChartInputHashes {
  engineSources: string;
  reportSources: string;
  anchors: string;
  conventions: string;
  lensFiles: Record<string, string | null>;
}

export interface MtfChartProvenance {
  version: number;
  generatedDateUtc: string;
  gitCommit: string;
  uncommittedSrcOrReports: boolean;
  settings: Record<string, unknown>;
  hashes: Omit<MtfChartInputHashes, "reportSources"> & { reportSources?: string };
}

interface ConfigurationSettings {
  key: string;
  zoomT: number;
  diffraction: MtfOptions;
  makerConvention: MtfOptions;
  spectralLines: readonly MtfSpectralLine[];
  crossChecks: Record<"wideOpen" | "stoppedDown", { fNumber: number; focusShiftMm: number | null }>;
}

/**
 * Keep chart controls readable while retaining a fingerprint of every resolved value.
 * Object keys sort recursively in code-unit order; array order and JSON number precision remain intact.
 *
 * @param configuration - complete resolved requests, spectrum and cross-check aperture/plane settings
 * @param sharedSettings - controls common to every chart and cross-check
 * @returns one compact configuration entry with the first 12 hex digits of its canonical JSON SHA-256
 */
export function summarizeMtfChartConfiguration(
  configuration: ConfigurationSettings,
  sharedSettings: Record<string, unknown>,
) {
  const canonical = JSON.stringify({ configuration, sharedSettings }, (_key, value) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? Object.fromEntries(
          Object.keys(value)
            .sort()
            .map((key) => [key, value[key]]),
        )
      : value,
  );
  return {
    key: configuration.key,
    zoomT: configuration.zoomT,
    fNumber: configuration.crossChecks.wideOpen.fNumber,
    makerConventionMethod: configuration.makerConvention.method,
    fieldCount: configuration.diffraction.fieldFractions?.length ?? 0,
    settingsSha256: createHash("sha256").update(canonical).digest("hex").slice(0, 12),
  };
}

function renderJson(value: unknown, depth = 0, expandObject = false): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  const padding = " ".repeat(depth);
  const primitive = (item: unknown) => item === null || typeof item !== "object";
  if (Array.isArray(value)) {
    if (value.every(primitive)) return JSON.stringify(value);
    return `[\n${value.map((item) => `${padding}  ${renderJson(item, depth + 2)}`).join(",\n")}\n${padding}]`;
  }
  const entries = Object.entries(value);
  if (!expandObject && entries.every(([, item]) => primitive(item) || (Array.isArray(item) && item.every(primitive))))
    return JSON.stringify(value);
  const lines = entries.map(
    ([key, item]) => `${padding}  ${JSON.stringify(key)}: ${renderJson(item, depth + 2, key === "lensFiles")}`,
  );
  return `{\n${lines.join(",\n")}\n${padding}}`;
}

/**
 * Render parseable JSON with compact arrays and configuration rows, without Markdown JSON reformatting.
 *
 * @param provenance - complete stamp to embed in the report
 * @returns the Provenance section, using a text fence so Prettier preserves its layout
 */
export function renderMtfChartProvenance(provenance: MtfChartProvenance): string {
  return `## Provenance\n\n\`\`\`text\n${renderJson(JSON.parse(JSON.stringify(provenance)))}\n\`\`\`\n`;
}

function hashSources(root: string, paths: readonly string[]): string {
  const hash = createHash("sha256");
  for (const path of [...paths].sort())
    hash
      .update(path)
      .update("\0")
      .update(readFileSync(join(root, path)))
      .update("\0");
  return hash.digest("hex");
}

/**
 * Hash every TypeScript file under src/optics, including root-level barrels, in code-unit path order.
 * Each entry is its POSIX repo-relative path, NUL, raw file bytes, NUL, with no newline conversion.
 * This framing includes renames and empty files and is independent of filesystem enumeration order.
 *
 * @param root - repository root on disk
 * @returns SHA-256 hex digest of the framed, sorted sources
 */
export function hashMtfEngineSources(root: string): string {
  const files: string[] = [];
  const walk = (directory: string) => {
    for (const entry of readdirSync(join(root, directory), { withFileTypes: true })) {
      const path = `${directory}/${entry.name}`;
      if (entry.isDirectory()) walk(path);
      else if (entry.isFile() && entry.name.endsWith(".ts")) files.push(path);
    }
  };
  walk("src/optics");
  return hashSources(root, files);
}

function hashFile(root: string, path: string): string {
  return createHash("sha256")
    .update(readFileSync(join(root, path)))
    .digest("hex");
}

/**
 * Read only the declared chart inputs; a deleted prescription is a changed input too.
 *
 * @param root - repository root on disk
 * @param lensPaths - repo-relative paths of the prescriptions traced by the report
 * @returns current content digests, with null for a missing prescription
 */
export function hashMtfChartInputs(root: string, lensPaths: readonly string[]): MtfChartInputHashes {
  const lensFiles = Object.fromEntries(
    [...new Set(lensPaths)].sort().map((path) => {
      try {
        return [path, hashFile(root, path)];
      } catch (error) {
        if ((error as { code?: string }).code !== "ENOENT") throw error;
        return [path, null];
      }
    }),
  );
  return {
    engineSources: hashMtfEngineSources(root),
    reportSources: hashSources(root, REPORT_SOURCE_PATHS),
    anchors: hashFile(root, MTF_CHART_ANCHORS_PATH),
    conventions: hashFile(root, MTF_CHART_CONVENTIONS_PATH),
    lensFiles,
  };
}

/**
 * Capture the checkout identity without treating unrelated untracked files as optical input changes.
 *
 * @param root - repository root on disk
 * @param hashes - input snapshot taken before tracing
 * @param settings - resolved chart and cross-check controls
 * @returns provenance suitable for a fenced JSON block
 */
export function createMtfChartProvenance(
  root: string,
  hashes: MtfChartInputHashes,
  settings: Record<string, unknown>,
): MtfChartProvenance {
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
  return {
    version: STAMP_VERSION,
    generatedDateUtc: new Date().toISOString().slice(0, 10),
    gitCommit: git("rev-parse", "HEAD"),
    uncommittedSrcOrReports: git("status", "--porcelain", "--untracked-files=all", "--", "src/", "reports/") !== "",
    settings,
    hashes,
  };
}

/**
 * Read the report's own stamp rather than depending on a sidecar that can drift separately.
 *
 * @param markdown - existing generated report, with or without a stamp
 * @returns validated current or legacy provenance, or null for absent or malformed stamps
 */
export function parseMtfChartProvenance(markdown: string): MtfChartProvenance | null {
  const block = /^## Provenance\r?\n\s*```(?:json|text)\r?\n([\s\S]*?)\r?\n```/m.exec(markdown);
  if (!block) return null;
  try {
    const value = JSON.parse(block[1]);
    const digest = (input: unknown) => typeof input === "string" && /^[a-f0-9]{64}$/.test(input);
    if (
      !Number.isInteger(value?.version) ||
      value.version < 1 ||
      typeof value.generatedDateUtc !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(value.generatedDateUtc) ||
      typeof value.gitCommit !== "string" ||
      typeof value.uncommittedSrcOrReports !== "boolean" ||
      !value.settings ||
      typeof value.settings !== "object" ||
      !digest(value.hashes?.engineSources) ||
      (value.hashes?.reportSources !== undefined && !digest(value.hashes.reportSources)) ||
      !digest(value.hashes?.anchors) ||
      !digest(value.hashes?.conventions) ||
      !value.hashes?.lensFiles ||
      typeof value.hashes.lensFiles !== "object" ||
      Array.isArray(value.hashes.lensFiles) ||
      !Object.entries(value.hashes.lensFiles).every(
        ([path, hash]) => path.startsWith("src/lens-data/") && !path.split("/").includes("..") && digest(hash),
      )
    )
      return null;
    return value;
  } catch {
    return null;
  }
}

/**
 * Compare content, not commit identity: an unrelated commit does not stale a chart.
 *
 * @param provenance - parsed stamp, or null for a report without usable provenance
 * @param current - current hashes of the same inputs
 * @returns one human-readable status line
 */
export function mtfChartStatus(provenance: MtfChartProvenance | null, current: MtfChartInputHashes): string {
  if (!provenance) return "Status: STALE — generated before provenance was recorded";
  const before = provenance.hashes;
  const changed: string[] = [];
  if (provenance.version !== STAMP_VERSION)
    changed.push(`provenance stamp version ${provenance.version} (expected ${STAMP_VERSION})`);
  if (before.engineSources !== current.engineSources) changed.push("engine sources");
  if (before.reportSources === undefined) changed.push("report code hash missing");
  else if (before.reportSources !== current.reportSources) changed.push("report code changed");
  if (before.anchors !== current.anchors) changed.push("anchors");
  if (before.conventions !== current.conventions) changed.push("conventions");
  const paths = new Set([...Object.keys(before.lensFiles), ...Object.keys(current.lensFiles)]);
  const lensCount = [...paths].filter((path) => before.lensFiles[path] !== current.lensFiles[path]).length;
  if (lensCount) changed.push(`${lensCount} lens files`);
  return changed.length ? `Status: STALE — ${changed.join(" / ")}` : "Status: current";
}

/**
 * Preserve every table and the original stamp when refreshing status, including on repeated runs.
 *
 * @param markdown - existing generated report
 * @param status - replacement status line
 * @returns report with just its top status line inserted or replaced
 */
export function updateMtfChartStatus(markdown: string, status: string): string {
  if (/^Status: .+$/m.test(markdown)) return markdown.replace(/^Status: .+$/m, status);
  return markdown.replace(/^(# .+\r?\n)/, `$1\n${status}\n`);
}
