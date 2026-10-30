import { describe, it, expect } from "vitest";
import ts from "typescript";
import { parseUntrustedDraft } from "../../../src/lensBuilder/untrusted.js";
import { createTemplate, cloneDraft, copyCatalogInput, validateDraft } from "../../../src/lensBuilder/draft.js";
import { exportDataTs, exportJson, importJson, draftFilename } from "../../../src/lensBuilder/serialize.js";
import { commonGlasses, findGlass, searchGlass, nearestGlass } from "../../../src/lensBuilder/glassSearch.js";
import { ALL_CATALOG_KEYS, authoredInputForKey } from "../../../src/utils/catalog/lensCatalog.js";
import type { LensDataV2Input } from "../../../src/types/lensDataV2.js";

const catalog = ALL_CATALOG_KEYS.map((k) => authoredInputForKey(k)!).filter((d) => parseUntrustedDraft(d).ok);
const inputs = [
  catalog.find((d) => !d.zoom && !d.opticalPath)!,
  catalog.find((d) => d.zoom && d.gaps && d.surfaces.some((s) => s.asphere))!,
  catalog.find((d) => d.rearPlates?.length)!,
];
const extensionInput = createTemplate();
extensionInput.surfaces[0].rimExtensionSd = extensionInput.surfaces[0].sd! + 2;

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

  it("reports invalid geometry against the authored surface path", () => {
    const bad = cloneDraft(createTemplate());
    bad.surfaces[0].d = -1;
    const result = validateDraft(bad);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.issues.join(" ")).toMatch(/surfaces/);
  });
});

describe("builder transport", () => {
  it.each([...inputs, extensionInput])("round-trips authored data ($key) through a complete TS file", (input) => {
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
    const common = commonGlasses();
    expect(common.length).toBeGreaterThan(4);
    expect(common.length).toBeLessThanOrEqual(8);
    expect(common.map((g) => g.name)).toContain("N-BK7");
    expect(findGlass("n-bk7", 1.5168)).toMatchObject({ name: "N-BK7", vendor: "Schott" });
    expect(findGlass("N-F2", 1.62004)).toMatchObject({ name: "F2", vendor: "Schott" });
    expect(findGlass("not-a-glass")).toBeUndefined();
  });
});
