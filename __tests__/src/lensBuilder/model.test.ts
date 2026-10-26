import { describe, it, expect } from "vitest";
import ts from "typescript";
import {
  createTemplate,
  cloneDraft,
  copyCatalogInput,
  validateDraft,
  setSurfaceField,
  setElementField,
  insertElement,
  insertAirSurface,
  deleteSurface,
  deleteElement,
  moveStop,
  reorderSurface,
} from "../../../src/lensBuilder/draft.js";
import { exportDataTs, exportJson, importJson, draftFilename } from "../../../src/lensBuilder/serialize.js";
import { searchGlass, nearestGlass } from "../../../src/lensBuilder/glassSearch.js";
import { ALL_CATALOG_KEYS, authoredInputForKey } from "../../../src/utils/catalog/lensCatalog.js";
import type { LensDataV2Input } from "../../../src/types/lensDataV2.js";

const catalog = ALL_CATALOG_KEYS.map((k) => authoredInputForKey(k)!);
const inputs = [
  catalog.find((d) => !d.zoom && !d.opticalPath)!,
  catalog.find((d) => d.zoom && d.gaps && d.surfaces.some((s) => s.asphere))!,
  catalog.find((d) => d.rearPlates?.length)!,
];

describe("lens builder authored model", () => {
  it("builds the teaching template with exactly one stop and real glasses", () => {
    const result = validateDraft(createTemplate());
    expect(result.ok ? [] : result.issues).toEqual([]);
    expect(createTemplate().surfaces.filter((s) => s.label === "STO")).toHaveLength(1);
    expect(searchGlass("N-BK7")[0].name).toBe("N-BK7");
  });

  it("clones catalog inputs independently, retaining all authored details", () => {
    expect(authoredInputForKey("toString")).toBeUndefined();
    expect(authoredInputForKey("not-a-catalog-lens")).toBeUndefined();
    for (const input of inputs) {
      const copy = copyCatalogInput(input);
      expect(copy).toEqual({ ...input, key: `${input.key}-copy`, name: `${input.name} (copy)`, visible: false });
      copy.surfaces[0].R = 123;
      expect(input.surfaces[0].R).not.toBe(123);
      const another = authoredInputForKey(input.key)!;
      expect(another).toEqual(input);
      expect(another.surfaces).not.toBe(input.surfaces);
    }
  });

  it("edits one field without losing zoom, gaps, aspheres, rear plates or provenance", () => {
    for (const input of inputs) {
      const snapshot = cloneDraft(input);
      const edited = setSurfaceField(input, 0, "R", "flat");
      expect(edited).toEqual({ ...input, surfaces: input.surfaces.map((s, i) => (i === 0 ? { ...s, R: "flat" } : s)) });
      expect(edited).not.toBe(input);
      const glass = setElementField(input, input.elements[0].id, "glass", "N-BK7");
      expect(glass).toEqual({
        ...input,
        elements: input.elements.map((e, i) => (i === 0 ? { ...e, glass: "N-BK7" } : e)),
      });
      expect(input).toEqual(snapshot);
    }
  });

  it("splits fixed spacing for insertion, merges it for deletion and retains untouched fields", () => {
    const draft = createTemplate();
    const original = cloneDraft(draft);
    const air = insertAirSurface(draft, 1);
    expect(air.surfaces[1].d! + air.surfaces[2].d!).toBe(draft.surfaces[1].d);
    expect(deleteSurface(air, 2)).toEqual(draft);
    const glass = insertElement(draft, 1);
    expect(glass.elements).toHaveLength(4);
    expect(glass.surfaces.slice(1, 4).reduce((n, s) => n + s.d!, 0)).toBe(draft.surfaces[1].d);
    expect(deleteElement(glass, 4)).toEqual(draft);
    for (const op of [air, glass, moveStop(air, 2), reorderSurface(draft, 2, -1)]) {
      for (const field of ["focus", "gaps", "layout", "aperture", "source", "catalog", "rearPlates", "zoom"] as const)
        expect(op[field]).toEqual(draft[field]);
    }
    const moved = moveStop(air, 2);
    expect(moved.surfaces.filter((s) => s.label === "STO")).toHaveLength(1);
    expect(validateDraft(moved).ok).toBe(true);
    // A cemented run moves as one block with its exit surface and keeps its spacings.
    const cemented = setSurfaceField(draft, 1, "medium", 2);
    const swapped = reorderSurface(cemented, 1, 1);
    expect(swapped.surfaces.map((s) => s.label)).toEqual(["STO", "1", "2", "3", "4", "5", "6"]);
    expect(swapped.surfaces[0]).toEqual(draft.surfaces[4]);
    expect(swapped.elements.map((e) => e.id)).toEqual([1, 2, 3]);
    expect(draft).toEqual(original);
  });

  it("refuses references and unsupported structures with useful messages", () => {
    const draft = createTemplate();
    expect(() => setSurfaceField(draft, 6, "d", 12)).toThrow(/gaps/);
    expect(() => setSurfaceField(draft, 6, "label", "new")).toThrow(/referenced/);
    expect(() => deleteSurface(draft, 6)).toThrow(/gaps/);
    expect(() => insertAirSurface(draft, 6)).toThrow(/gaps/);
    expect(() => insertElement(draft, 0)).toThrow(/air/);
    expect(() => moveStop(draft, 0)).toThrow(/flat air/);
    expect(() => deleteSurface(draft, 4)).toThrow(/stop/);
    const cemented = cloneDraft(draft);
    cemented.elements[0].cemented = "D1";
    expect(() => deleteElement(cemented, 1)).toThrow(/cemented/);
    const spanned = cloneDraft(draft);
    spanned.elements[0].span = ["1", "2"];
    expect(() => reorderSurface(spanned, 0, 1)).toThrow(/spans/);
    const bad = cloneDraft(draft);
    bad.surfaces[0].d = -1;
    const result = validateDraft(bad);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.issues.join(" ")).toMatch(/surfaces/);
  });
});

describe("builder transport", () => {
  it.each(inputs)("round-trips authored catalog data ($key) through a complete TS file", (input) => {
    const source = exportDataTs(input);
    expect(source).toMatch(/^import type \{ LensDataV2Input \} from "\.\.\/types\/lensDataV2.js";/);
    expect(source).toContain("LENS DATA —");
    expect(source).toContain("const LENS_DATA = {");
    expect(source).toMatch(/} satisfies LensDataV2Input;\n\nexport default LENS_DATA;\n$/);
    const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
    const exports: { default?: LensDataV2Input } = {};
    new Function("exports", compiled)(exports);
    expect(exports.default).toEqual(input);
    expect(importJson(exportJson(input))).toEqual(input);
  });

  it("rejects malformed and invalid JSON with readable errors", () => {
    expect(() => importJson("{")).toThrow(/Invalid JSON/);
    expect(() => importJson("null")).toThrow(/schema: 2/);
    expect(() => importJson('{"schema":2}')).toThrow();
    const draft = createTemplate();
    draft.surfaces[0].R = 0;
    expect(() => importJson(exportJson(draft))).toThrow(/surfaces/);
    expect(draftFilename(createTemplate())).toBe("my-triplet.data.ts");
  });

  it("searches glass names and nearest coordinates, with vendors", () => {
    expect(searchGlass("n-bk7")[0]).toMatchObject({ name: "N-BK7", vendor: "Schott" });
    const [nearest] = nearestGlass(1.5168, 64.17);
    expect(nearest.nd).toBeCloseTo(1.5168, 4);
    expect(nearest.vd).toBeCloseTo(64.17, 1);
    expect(searchGlass("does-not-exist")).toEqual([]);
    expect(nearestGlass(NaN, 50)).toEqual([]);
  });
});
