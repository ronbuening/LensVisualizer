import type { LensDataV2Input } from "../types/lensDataV2.js";
import { validateDraft } from "./draft.js";
import { requireUntrustedDraft, escapeExportString, escapeExportJsonText, MAX_DRAFT_BYTES } from "./untrusted.js";

// Declaration order from lensDataV2.ts. Unknown nested records keep their authored order.
const ORDERS: Record<string, string[]> = {
  "": [
    "schema",
    "key",
    "maker",
    "name",
    "subtitle",
    "visible",
    "publishedAt",
    "catalog",
    "source",
    "elements",
    "media",
    "surfaces",
    "zoom",
    "focus",
    "gaps",
    "aperture",
    "aberrationControl",
    "projection",
    "opticalPath",
    "perspectiveControl",
    "rearPlates",
    "groups",
    "doublets",
    "layout",
    "rays",
    "checks",
  ],
  catalog: [
    "lensMounts",
    "imageFormat",
    "imageCircleMm",
    "specs",
    "elementCount",
    "groupCount",
    "acceptsTeleconverters",
    "opticalConfiguration",
    "focalLengthMm",
    "fNumber",
  ],
  source: ["patentNumber", "example", "patentYear", "authors", "assignees", "errata"],
  elements: [
    "id",
    "name",
    "label",
    "type",
    "nd",
    "vd",
    "indexReference",
    "indexReferenceNote",
    "focalLengthMm",
    "glass",
    "apd",
    "apdNote",
    "role",
    "diagramLabel",
    "maxSdRatio",
    "absorptionCoefficientPerMm",
    "cemented",
    "dPgF",
    "nC",
    "nF",
    "ng",
    "span",
  ],
  media: ["id", "name", "nd"],
  surfaces: [
    "label",
    "R",
    "d",
    "sd",
    "innerSd",
    "rimCutDepthMm",
    "medium",
    "asphere",
    "diffractive",
    "interaction",
    "stopPlacement",
  ],
  asphere: [
    "K",
    "A4",
    "A6",
    "A8",
    "A10",
    "A12",
    "A14",
    "A16",
    "A18",
    "A20",
    "A3",
    "A5",
    "A7",
    "A9",
    "A11",
    "A13",
    "A15",
    "A17",
    "A19",
  ],
  zoom: ["stations", "apertureModel", "step"],
  stations: [
    "focalLengthMm",
    "nominalFNumber",
    "stopSemiDiameter",
    "closeFocusM",
    "label",
    "published",
    "publishedFocus",
  ],
  focus: ["closeFocusM", "keyframes", "step", "description", "conjugates", "published"],
  aperture: ["nominalFNumber", "fStops", "maxFNumber", "step", "blades", "bladeRoundedness"],
  aberrationControl: ["label", "description", "minLabel", "centerLabel", "maxLabel", "step", "gaps"],
  gap: ["label", "values"],
  conjugates: ["zoomStation", "keyframe", "objectDistanceMm", "distanceReference", "source"],
  opticalConfiguration: ["groupKey", "label", "order"],
  focalLengthMm: ["marketing", "design"],
  fNumber: ["marketing", "design"],
  example: ["label", "id"],
  projection: ["kind", "focalLengthMm", "fullFieldDeg", "imageCircleMm", "maxTraceFieldDeg"],
  opticalPath: ["mode", "surfaceOrder", "imagePlane", "maxInteractions"],
  groups: ["text", "fromSurface", "toSurface"],
  doublets: ["text", "fromSurface", "toSurface"],
  layout: ["svgW", "svgH", "scFill", "yScFill", "maxAspectRatio", "lensShiftFrac"],
  rays: ["rayFractions", "rayLeadFrac", "offAxisFieldFrac", "offAxisFractions"],
  checks: ["gapSagFrac", "maxRimAngleDeg"],
};
const GROUP_STARTS = new Set([
  "catalog",
  "source",
  "elements",
  "zoom",
  "focus",
  "aperture",
  "aberrationControl",
  "projection",
  "opticalPath",
  "perspectiveControl",
  "rearPlates",
  "groups",
  "layout",
]);

/** Browser counterpart of the converter's pure literal printer: no evaluation or runtime-to-input conversion. */
function print(node: unknown, group = "", depth = 0): string {
  if (typeof node === "number") {
    if (!Number.isFinite(node)) throw new Error("Export requires finite numbers");
    return Object.is(node, -0) ? "-0" : String(node);
  }
  if (node === null || typeof node !== "object")
    return typeof node === "string" ? escapeExportString(node) : JSON.stringify(node);
  const list = Array.isArray(node);
  const record = node as Record<string, unknown>;
  const keys = Object.keys(node).filter((key) => record[key] !== undefined);
  const order = Object.hasOwn(ORDERS, group) ? ORDERS[group] : [];
  if (!list)
    keys.sort((a, b) => {
      const rank = (k: string) => (order.includes(k) ? order.indexOf(k) : order.length);
      return rank(a) - rank(b);
    });
  const entries = keys.map((key) => {
    if (["__proto__", "constructor", "prototype"].includes(key)) throw new Error("Dangerous export key");
    const value = print(record[key], list ? group : group === "gaps" ? "gap" : key, depth + 1);
    return list ? value : `${/^[a-zA-Z_$][\w$]*$/.test(key) ? key : escapeExportString(key)}: ${value}`;
  });
  const [open, close] = list ? ["[", "]"] : ["{", "}"];
  const compact = list ? `[${entries.join(", ")}]` : entries.length ? `{ ${entries.join(", ")} }` : "{}";
  if (depth > 0 && compact.length + depth * 2 <= 116 && !compact.includes("\n")) return compact;
  const indent = "  ".repeat(depth + 1);
  return `${open}\n${entries.map((entry, i) => `${depth === 0 && i > 0 && GROUP_STARTS.has(keys[i]) ? "\n" : ""}${indent}${entry},`).join("\n")}\n${"  ".repeat(depth)}${close}`;
}

/** Word-wraps header text to the box width, splitting only words longer than a whole line. */
function wrapWords(text: string, width: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (let word of text.split(/\s+/).filter(Boolean)) {
    if (current && current.length + 1 + word.length > width) {
      lines.push(current);
      current = "";
    }
    while (word.length > width) {
      lines.push(word.slice(0, width));
      word = word.slice(width);
    }
    current = current ? `${current} ${word}` : word;
  }
  return [...lines, current];
}

export function exportDataTs(draft: LensDataV2Input): string {
  draft = requireUntrustedDraft(draft);
  const name = draft.name
    .replace(/[\r\n]/g, " ")
    .replace(/[\p{C}\u2028\u2029]/gu, "")
    .replaceAll("*/", "* /");
  const rule = "═".repeat(70);
  const line = (text: string) =>
    wrapWords(text, 68)
      .map((part) => ` * ║ ${part.padEnd(68)} ║`)
      .join("\n");
  const header = `/**\n * ╔${rule}╗\n${line(`LENS DATA — ${name}`)}\n * ╠${rule}╣\n${line("Exported from Build your own lens. Verify data and provenance.")}\n * ╚${rule}╝\n */`;
  return `import type { LensDataV2Input } from "../types/lensDataV2.js";\n\n${header}\n\nconst LENS_DATA = ${print(draft)} satisfies LensDataV2Input;\n\nexport default LENS_DATA;\n`;
}

export function exportJson(draft: LensDataV2Input): string {
  const safe = requireUntrustedDraft(draft);
  const pretty = escapeExportJsonText(JSON.stringify(safe, null, 2)) + "\n";
  if (new TextEncoder().encode(pretty).length <= MAX_DRAFT_BYTES) return pretty;
  const compact = escapeExportJsonText(JSON.stringify(safe));
  if (new TextEncoder().encode(compact).length > MAX_DRAFT_BYTES) throw new Error("Export JSON must be at most 1 MB");
  return compact;
}

export function importJson(text: string): LensDataV2Input {
  const draft = requireUntrustedDraft(text);
  const result = validateDraft(draft);
  if (!result.ok) throw new Error(result.issues.join("\n"));
  return draft;
}

export function draftFilename(draft: LensDataV2Input, extension: "data.ts" | "json" = "data.ts"): string {
  let stem = draft.key.replace(/[^a-z0-9-]/gi, "-") || "custom-lens";
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(stem)) stem = `_${stem}`;
  return `${stem.slice(0, 80 - extension.length - 1)}.${extension}`;
}
