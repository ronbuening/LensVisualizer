import type { LensDataV2Input } from "../types/lensDataV2.js";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../types/asphericSchema.js";
import { IMAGE_FORMAT_BY_ID, LENS_MOUNT_BY_ID } from "../utils/catalog/lensTaxonomy.js";

export const MAX_DRAFT_BYTES = 1_000_000;
// Limits sit well above the catalog's measured maxima (257 zoom stations, 101 focus keyframes, 165 KB, radii and
// close-focus sentinels near 1e16) so every catalog lens can be a starting point; the byte cap bounds total work.
export const MAX_DRAFT_NUMBER = 1e18;
const MAX_DRAFT_NODES = 300_000;
const MAX_ZOOM_STATIONS = 512;
const MAX_FOCUS_KEYFRAMES = 256;
// Folded traces loop once per interaction, and a stable mirror cavity never repeats a ray state exactly; the catalog
// tops out at 32, and the engine requires up to 251 (250 surfaces plus the image plane).
const MAX_PATH_INTERACTIONS = 512;
const DANGEROUS_KEYS = new Set(["__proto__", "constructor", "prototype"]);
// Code points are checked numerically so the validator itself contains no invisible control characters.
function unsafeCodePoint(cp: number, multiline: boolean): boolean {
  return (
    (cp < 32 && !(multiline && (cp === 10 || cp === 13))) ||
    (cp >= 127 && cp <= 159) ||
    cp === 0x061c ||
    cp === 0x200e ||
    cp === 0x200f ||
    (cp >= 0x202a && cp <= 0x202e) ||
    (cp >= 0x2066 && cp <= 0x2069) ||
    (cp >= 0xd800 && cp <= 0xdfff)
  );
}

export type DraftStringRule = "text" | "freeText" | "name" | "label" | "glass" | "maker" | "key" | "surfaceLabel";
export function draftStringLimit(rule: DraftStringRule): number {
  return rule === "freeText"
    ? 4000
    : rule === "key"
      ? 80
      : rule === "maker"
        ? 60
        : rule === "surfaceLabel"
          ? 16
          : rule === "label"
            ? 64
            : rule === "text"
              ? 1000
              : 200;
}

/** Shared by the untrusted gate and typed controls; returns an inline-safe refusal. */
export function draftStringIssue(value: string, rule: DraftStringRule = "text"): string | undefined {
  const max = draftStringLimit(rule);
  if (value.length > max) return `Use at most ${max} characters`;
  if ([...value].some((c) => unsafeCodePoint(c.codePointAt(0)!, rule === "freeText")))
    return "Control characters, BiDi controls and lone surrogates are not allowed";
  if (rule === "key" && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return "Use lowercase words separated by hyphens";
  if (rule === "maker") {
    const normalized = value.normalize("NFKD").replace(/\p{M}/gu, "").trim().toLowerCase();
    // Any script's letters are fine (the organizer keeps them); separators, `..` and a leading dot are not.
    const slug = normalized.replace(/[^\p{L}\p{N}._-]+/gu, "-").replace(/^-+|-+$/g, "");
    if (
      /[\\/]/.test(value) ||
      value.trim().startsWith(".") ||
      normalized.includes("..") ||
      !/^[\p{L}\p{N}][\p{L}\p{N}._-]*$/u.test(slug)
    )
      return "Maker must form one safe path segment";
  }
  if (
    rule === "surfaceLabel" &&
    // Folded paths label a twice-crossed surface "3/5"; labels only ever key objects, never paths.
    (!/^[A-Za-z0-9][A-Za-z0-9._'′/-]{0,15}$/.test(value) ||
      Object.hasOwn(Object.prototype, value) ||
      DANGEROUS_KEYS.has(value))
  )
    return "Use a safe surface label of at most 16 characters";
  return undefined;
}

function refuse(path: string, message: string): never {
  throw new Error(`${path || "draft"}: ${message}`);
}
type Rule = (value: unknown, path: string) => void;
const number: Rule = (v, p) => {
  if (typeof v !== "number" || !Number.isFinite(v) || Math.abs(v) > MAX_DRAFT_NUMBER)
    refuse(p, `Expected a finite number with magnitude at most ${MAX_DRAFT_NUMBER.toExponential()}`);
};
const boolean: Rule = (v, p) => {
  if (typeof v !== "boolean") refuse(p, "Expected a boolean");
};
const string =
  (rule: DraftStringRule = "text"): Rule =>
  (v, p) => {
    if (typeof v !== "string") refuse(p, "Expected a string");
    const issue = draftStringIssue(v, rule);
    if (issue) refuse(p, issue);
  };
const text = string(),
  label = string("label"),
  freeText = string("freeText"),
  surfaceLabel = string("surfaceLabel");
const range =
  (min: number, max: number, integer = false): Rule =>
  (v, p) => {
    number(v, p);
    const value = v as number;
    if (value < min || value > max || (integer && !Number.isInteger(value)))
      refuse(p, `Expected ${integer ? "an integer" : "a number"} from ${min} to ${max}`);
  };
const literal =
  (...values: unknown[]): Rule =>
  (v, p) => {
    if (!values.includes(v)) refuse(p, "Unexpected enum value");
  };
const either =
  (...rules: Rule[]): Rule =>
  (v, p) => {
    for (const rule of rules) {
      try {
        rule(v, p);
        return;
      } catch {
        /* Try the other authored variant. */
      }
    }
    refuse(p, "Value does not match an allowed type or range");
  };
const array =
  (item: Rule, max: number, min = 0): Rule =>
  (v, p) => {
    if (!Array.isArray(v) || v.length > max || v.length < min) refuse(p, `Expected an array of ${min}–${max} items`);
    (v as unknown[]).forEach((value, i) => item(value, `${p}[${i}]`));
  };
const object =
  (fields: Record<string, Rule>, required: string[] = []): Rule =>
  (v, p) => {
    if (!v || typeof v !== "object" || Array.isArray(v)) refuse(p, "Expected an object (schema: 2 at the root)");
    const record = v as Record<string, unknown>;
    for (const key of Object.keys(record)) {
      if (!Object.hasOwn(fields, key)) refuse(`${p}.${key}`, "Unknown key");
      if (record[key] === undefined && !required.includes(key)) delete record[key];
      else fields[key](record[key], `${p}.${key}`);
    }
    for (const key of required) if (!Object.hasOwn(record, key)) refuse(`${p}.${key}`, "Required field is missing");
  };
/** Select tagged object variants before validating fields, preserving the exact path of unknown keys. */
const variant =
  (tag: string, cases: Record<string, Rule>): Rule =>
  (v, p) => {
    if (!v || typeof v !== "object" || Array.isArray(v)) refuse(p, "Expected an object");
    const discriminator = (v as Record<string, unknown>)[tag];
    if (typeof discriminator !== "string" || !Object.hasOwn(cases, discriminator))
      refuse(`${p}.${tag}`, "Unexpected enum value");
    cases[discriminator](v, p);
  };
const numericFields = (...keys: string[]): Record<string, Rule> => Object.fromEntries(keys.map((k) => [k, number]));
const recordOf =
  (value: Rule): Rule =>
  (v, p) => {
    if (!v || typeof v !== "object" || Array.isArray(v)) refuse(p, "Expected a surface-keyed object");
    const entries = Object.entries(v as Record<string, unknown>);
    if (entries.length > 250) refuse(p, "At most 250 surface schedules are allowed");
    for (const [key, entry] of entries) {
      surfaceLabel(key, `${p}.${key}`);
      value(entry, `${p}.${key}`);
    }
  };
const pair = array(number, 2, 2);
const zoomValue = either(number, array(number, MAX_ZOOM_STATIONS));
const normal = object({ z: number, y: number }, ["z", "y"]);
const annotation = object({ text, fromSurface: surfaceLabel, toSurface: surfaceLabel }, [
  "text",
  "fromSurface",
  "toSurface",
]);
const erratum = variant("status", {
  unresolved: object({ status: literal("unresolved"), note: freeText }, ["status", "note"]),
  corrected: object(
    {
      status: literal("corrected"),
      surface: surfaceLabel,
      field: text,
      printed: number,
      applied: number,
      evidence: array(
        literal("source-summary", "sibling-example", "aberration-figure", "claims", "family-publication"),
        5,
      ),
      note: freeText,
    },
    ["status", "surface", "field", "printed", "applied", "evidence", "note"],
  ),
});
const element = object(
  {
    ...numericFields(
      "id",
      "nd",
      "vd",
      "focalLengthMm",
      "maxSdRatio",
      "absorptionCoefficientPerMm",
      "dPgF",
      "nC",
      "nF",
      "ng",
    ),
    name: string("name"),
    // V2 element `label` is the element's description ("Front crown"), not a short tag.
    label: string("name"),
    type: text,
    indexReference: literal("d", "e"),
    indexReferenceNote: freeText,
    glass: string("glass"),
    apd: literal("patent", "inferred", false),
    apdNote: freeText,
    role: text,
    diagramLabel: label,
    cemented: text,
    span: array(surfaceLabel, 2, 2),
  },
  ["id", "name", "label", "type", "nd"],
);
const surface = object(
  {
    label: surfaceLabel,
    R: either(number, literal("flat")),
    ...numericFields("d", "sd", "innerSd", "rimCutDepthMm"),
    rimCutDepthSource: text,
    medium: either(number, text),
    asphere: object(numericFields(...ASPHERIC_COEFFICIENT_SCHEMA.map((c) => c.key))),
    diffractive: object(
      {
        kind: literal("radial-polynomial"),
        referenceWavelengthNm: number,
        diffractionOrder: number,
        terms: array(object({ radialPower: number, coefficient: number }, ["radialPower", "coefficient"]), 64),
      },
      ["kind", "referenceWavelengthNm", "diffractionOrder", "terms"],
    ),
    interaction: object(
      {
        type: literal("refract", "reflect", "block"),
        incidentSide: literal("front", "rear", "both"),
        inactiveSide: literal("ignore", "block"),
        mirrorKind: literal("first-surface", "second-surface"),
        normal,
      },
      ["type"],
    ),
    stopPlacement: literal("inside-element"),
  },
  ["label", "R"],
);
const fisheye = object(
  {
    kind: literal("fisheye-equidistant", "fisheye-equisolid"),
    focalLengthMm: zoomValue,
    fullFieldDeg: zoomValue,
    imageCircleMm: zoomValue,
    maxTraceFieldDeg: zoomValue,
  },
  ["kind", "focalLengthMm", "fullFieldDeg"],
);
const projection = variant("kind", {
  rectilinear: object({ kind: literal("rectilinear"), fullFieldDeg: number, maxTraceFieldDeg: number }, ["kind"]),
  "fisheye-equidistant": fisheye,
  "fisheye-equisolid": fisheye,
});
const taxonomy =
  (table: object): Rule =>
  (v, p) => {
    text(v, p);
    if (!Object.hasOwn(table, v as string)) refuse(p, "Unknown taxonomy id");
  };
const schema = object(
  {
    schema: literal(2),
    key: string("key"),
    maker: either(literal(null), string("maker")),
    name: string("name"),
    subtitle: string("name"),
    visible: boolean,
    publishedAt: (v, p) => {
      text(v, p);
      // Same rule as the build's applyPublicationDate (scripts/lens-data-lib.mjs), so an export never breaks metadata.
      const value = v as string;
      const date = new Date(value);
      if (
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value) ||
        Number.isNaN(date.valueOf()) ||
        date.toISOString().replace(".000Z", "Z") !== value.replace(".000Z", "Z")
      )
        refuse(p, "Expected a real UTC timestamp, YYYY-MM-DDTHH:mm:ssZ");
    },
    catalog: object({
      lensMounts: array(taxonomy(LENS_MOUNT_BY_ID), 20),
      imageFormat: taxonomy(IMAGE_FORMAT_BY_ID),
      ...numericFields("imageCircleMm", "elementCount", "groupCount"),
      specs: array(text, 40),
      acceptsTeleconverters: boolean,
      opticalConfiguration: object({ groupKey: text, label, order: number }, ["groupKey", "label", "order"]),
      focalLengthMm: object({ marketing: either(number, pair), design: either(number, pair) }),
      fNumber: object(numericFields("marketing", "design")),
    }),
    source: object({
      patentNumber: text,
      example: object({ label: text, id: either(text, literal(null)) }, ["label", "id"]),
      patentYear: number,
      authors: array(text, 40),
      assignees: array(text, 40),
      errata: array(erratum, 250),
    }),
    elements: array(element, 100),
    media: array(object({ id: text, name: string("name"), nd: number }, ["id", "nd"]), 20),
    surfaces: array(surface, 250),
    zoom: object(
      {
        stations: array(
          object(
            {
              ...numericFields("focalLengthMm", "nominalFNumber", "stopSemiDiameter", "closeFocusM"),
              label,
              published: boolean,
              publishedFocus: array(number, 24),
            },
            ["focalLengthMm"],
          ),
          MAX_ZOOM_STATIONS,
        ),
        apertureModel: literal("from-nominal-fno", "fixed-iris"),
        step: number,
      },
      ["stations"],
    ),
    focus: object(
      {
        closeFocusM: number,
        keyframes: array(number, MAX_FOCUS_KEYFRAMES),
        step: number,
        description: freeText,
        conjugates: array(
          object(
            {
              zoomStation: number,
              keyframe: number,
              objectDistanceMm: number,
              distanceReference: literal("first-surface", "image-plane"),
              source: freeText,
            },
            ["zoomStation", "keyframe", "objectDistanceMm", "distanceReference", "source"],
          ),
          MAX_ZOOM_STATIONS * 2,
        ),
        published: array(number, 24),
      },
      ["closeFocusM"],
    ),
    gaps: recordOf(object({ label, values: array(array(number, MAX_FOCUS_KEYFRAMES), MAX_ZOOM_STATIONS) }, ["values"])),
    aperture: object(
      {
        ...numericFields("nominalFNumber", "maxFNumber", "step", "blades", "bladeRoundedness"),
        fStops: array(number, 40),
      },
      ["fStops"],
    ),
    aberrationControl: object(
      {
        label,
        description: freeText,
        minLabel: label,
        centerLabel: label,
        maxLabel: label,
        step: number,
        gaps: recordOf(
          object({ label, values: either(array(number, 3, 2), array(array(number, 3, 2), MAX_ZOOM_STATIONS)) }, [
            "values",
          ]),
        ),
      },
      ["label", "gaps"],
    ),
    projection,
    opticalPath: object({
      mode: literal("sequential", "auto"),
      surfaceOrder: array(surfaceLabel, 250),
      imagePlane: object({ z: number, y: number, normal, label }, ["z"]),
      maxInteractions: range(1, MAX_PATH_INTERACTIONS, true),
    }),
    perspectiveControl: object(
      {
        shiftRangeMm: pair,
        tiltRangeDeg: pair,
        shiftStepMm: number,
        tiltStepDeg: number,
        tiltPivot: object(
          {
            frame: literal("camera"),
            basis: literal("mechanical-axis", "patent-principal-point-guidance", "rear-vertex-fallback"),
            zOffsetFromImagePlaneMm: number,
          },
          ["frame", "basis", "zOffsetFromImagePlaneMm"],
        ),
      },
      ["shiftRangeMm", "tiltRangeDeg"],
    ),
    rearPlates: array(
      object(
        {
          label,
          ...numericFields("thicknessMm", "nd", "vd", "dPgF", "nC", "nF", "ng", "gapAfterMm", "sd"),
          glass: string("glass"),
          indexReference: literal("d", "e"),
          source: freeText,
        },
        ["thicknessMm", "nd", "vd", "gapAfterMm"],
      ),
      10,
    ),
    groups: array(annotation, 250),
    doublets: array(annotation, 250),
    // Diagram scale drives per-render work (the grid draws 15 / scFill lines). The catalog spans scFill 0.35–0.92,
    // yScFill 0.1–0.92, svgW 1120–1440, svgH 500–540, maxAspectRatio 1.2–4 and lensShiftFrac 0.04–0.08.
    layout: object(
      {
        svgW: range(200, 4000),
        svgH: range(100, 4000),
        scFill: range(0.05, 2),
        yScFill: range(0.05, 2),
        maxAspectRatio: range(0, 100),
        lensShiftFrac: range(-1, 1),
      },
      ["yScFill"],
    ),
    rays: object({
      rayFractions: array(number, 64),
      offAxisFractions: array(number, 64),
      rayLeadFrac: number,
      offAxisFieldFrac: number,
    }),
    checks: object(numericFields("gapSagFrac", "maxRimAngleDeg")),
  },
  ["schema", "key", "name", "elements", "surfaces", "focus", "aperture", "layout"],
);

export type UntrustedDraftResult = { ok: true; draft: LensDataV2Input } | { ok: false; issues: string[] };

/** Bound work before schema traversal, ignore inherited properties, and rebuild only own data properties. */
export function parseUntrustedDraft(input: unknown): UntrustedDraftResult {
  try {
    let value = input;
    if (typeof input === "string") {
      if (input.length > MAX_DRAFT_BYTES || new TextEncoder().encode(input).length > MAX_DRAFT_BYTES)
        refuse("draft", "JSON must be at most 1 MB");
      try {
        value = JSON.parse(input);
      } catch {
        refuse("draft", "Invalid JSON");
      }
    }
    let nodes = 0;
    let stringBytes = 0;
    const copy = (v: unknown, path: string, depth: number): unknown => {
      if (++nodes > MAX_DRAFT_NODES) refuse(path, `At most ${MAX_DRAFT_NODES} nodes are allowed`);
      if (depth > 10) refuse(path, "Maximum depth is 10");
      if (typeof v === "number") number(v, path);
      if (typeof v === "string") {
        stringBytes += v.length;
        if (stringBytes > MAX_DRAFT_BYTES) refuse(path, "Draft strings exceed 1 MB");
      }
      if (v === null || typeof v !== "object") {
        if (v !== null && v !== undefined && !["number", "string", "boolean"].includes(typeof v))
          refuse(path, "Expected JSON data");
        return v;
      }
      const list = Array.isArray(v);
      if (list && v.length > MAX_DRAFT_NODES) refuse(path, `At most ${MAX_DRAFT_NODES} nodes are allowed`);
      const out: Record<string, unknown> = {};
      const result: unknown[] = [];
      for (const key of Reflect.ownKeys(v)) {
        if (list && key === "length") continue;
        if (typeof key !== "string" || DANGEROUS_KEYS.has(key)) refuse(path, "Dangerous or symbol key is not allowed");
        if (list && !/^(0|[1-9][0-9]*)$/.test(key)) refuse(path, "Unexpected array property");
        const descriptor = Object.getOwnPropertyDescriptor(v, key)!;
        if (!Object.hasOwn(descriptor, "value")) refuse(path, "Accessors are not allowed");
        const next = copy(descriptor.value, `${path}.${key}`, depth + 1);
        if (list) result.push(next);
        else out[key] = next;
      }
      if (list && result.length !== v.length) refuse(path, "Sparse arrays are not allowed");
      return list ? result : out;
    };
    const draft = copy(value, "draft", 0);
    schema(draft, "draft");
    if (new TextEncoder().encode(JSON.stringify(draft)).length > MAX_DRAFT_BYTES)
      refuse("draft", "JSON must be at most 1 MB");
    return { ok: true, draft: draft as LensDataV2Input };
  } catch (error) {
    return { ok: false, issues: [error instanceof Error ? error.message : "Invalid draft"] };
  }
}

export function requireUntrustedDraft(input: unknown): LensDataV2Input {
  const result = parseUntrustedDraft(input);
  if (!result.ok) throw new Error(result.issues.join("\n"));
  return result.draft;
}

/** Escape string contents in JSON text while preserving its formatting and literal backslash escapes. */
export function escapeExportJsonText(value: string): string {
  return value.replace(/\\\\|\\[bfnrt]|(?!\n)[\p{C}\u2028\u2029]/gu, (c) => {
    switch (c) {
      case "\\\\":
        return c;
      case "\\b":
        return "\\u0008";
      case "\\f":
        return "\\u000c";
      case "\\n":
        return "\\u000a";
      case "\\r":
        return "\\u000d";
      case "\\t":
        return "\\u0009";
      default:
        return c
          .split("")
          .map((unit) => `\\u${unit.charCodeAt(0).toString(16).padStart(4, "0")}`)
          .join("");
    }
  });
}

/** JSON string contents stay inert in source code, review tools and plain-text transport. */
export function escapeExportString(value: string): string {
  return escapeExportJsonText(JSON.stringify(value));
}
