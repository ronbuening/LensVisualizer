import { describe, it, expect, vi } from "vitest";
import {
  ALL_CATALOG_KEYS,
  LENS_CATALOG,
  CATALOG_KEYS,
  COMPARISON_CATALOG_KEYS,
  hasMdForKey,
  lensNameForKey,
  loadMdForKey,
  resolveOpticalConfigurationKey,
} from "../../../../src/utils/catalog/lensCatalog.js";
import { buildLens } from "../../../../src/optics/prescription/buildRuntimeLens.js";
import { ingestLens, ingestTeleconverter } from "../../../../src/optics/buildLens.js";
import { attachTeleconverter } from "../../../../src/optics/prescription/teleconverter.js";
import { catalogCollator } from "../../../../src/utils/catalog/collation.js";
import {
  ALL_TELECONVERTER_KEYS,
  TELECONVERTER_CATALOG,
  resolveLensSystemData,
  resolveTeleconverterKey,
} from "../../../../src/utils/catalog/teleconverterCatalog.js";
import type { LensDataInput } from "../../../../src/types/optics.js";
import type { TeleconverterData } from "../../../../src/types/teleconverter.js";

/* Ingest, watched: it still runs, and a test can count the lenses it reads. */
vi.mock("../../../../src/optics/buildLens.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/optics/buildLens.js")>();
  return { ...actual, ingestLens: vi.fn(actual.ingestLens) };
});

/* Every file as authored, by key: what the catalogs read through canonical ingest. */
const AUTHORED_LENSES = new Map(
  Object.values(
    import.meta.glob<{ default: LensDataInput }>("../../../../src/lens-data/**/*.data.ts", { eager: true }),
  ).map(({ default: data }) => [data.key, data] as const),
);
const AUTHORED_CONVERTERS = new Map(
  Object.values(
    import.meta.glob<{ default: TeleconverterData }>("../../../../src/lens-data/**/*.teleconverter.ts", {
      eager: true,
    }),
  ).map(({ default: data }) => [data.key, data] as const),
);

const INITIAL_INGEST_COUNT = vi.mocked(ingestLens).mock.calls.length;

describe("lensCatalog", () => {
  it("keeps nested maker-folder lenses discoverable with matching analysis markdown", async () => {
    const key = "zeiss-hologon-15f8";
    expect(LENS_CATALOG[key]).toBeDefined();
    expect(LENS_CATALOG[key].name).toBe("CARL ZEISS HOLOGON 15mm f/8 (Contarex Hologon / Leica M)");
    expect(hasMdForKey(key)).toBe(true);
    expect(await loadMdForKey(key)).toContain("# Carl Zeiss Hologon 15 mm f/8");
  });

  it("names every listed lens from its file as authored, ingesting none", () => {
    expect(INITIAL_INGEST_COUNT).toBe(0);
    /* The viewer builds its name map for every listed key on first render; an entry ingests only when it is read. */
    const ingested = vi.mocked(ingestLens).mock.calls.length;
    const names = Object.fromEntries(ALL_CATALOG_KEYS.map((key) => [key, lensNameForKey(key)]));
    expect(vi.mocked(ingestLens).mock.calls.length).toBe(ingested);
    for (const key of ALL_CATALOG_KEYS) expect(names[key], key).toBe(AUTHORED_LENSES.get(key)!.name);
  });

  it("CATALOG_KEYS is non-empty", () => {
    expect(CATALOG_KEYS.length).toBeGreaterThan(0);
  });

  it("every key in CATALOG_KEYS has a valid, defaults-merged, visible LENS_CATALOG entry", () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(entry).toBeDefined();
      expect(entry.key).toBe(key);
      expect(entry.name).toBeTruthy();
      expect(entry.surfaces).toBeDefined();
      expect(entry.elements).toBeDefined();
      expect(Array.isArray(entry.rays.rayFractions)).toBe(true);
      expect(entry.layout.svgW).toBeGreaterThan(0);
      expect(entry.layout.svgH).toBeGreaterThan(0);
      expect(entry.visible, `${key}: hidden lenses must be excluded from CATALOG_KEYS`).not.toBe(false);
    }
  });

  it("loadMdForKey returns a string for known lenses", async () => {
    /* At least one lens should have an .analysis.md file */
    const withMd = CATALOG_KEYS.find((k) => hasMdForKey(k));
    expect(withMd).toBeDefined();
    expect(typeof (await loadMdForKey(withMd!))).toBe("string");
  });

  it("hasMdForKey / loadMdForKey handle unknown keys", async () => {
    expect(hasMdForKey("nonexistent_lens_key_xyz")).toBe(false);
    expect(await loadMdForKey("nonexistent_lens_key_xyz")).toBeNull();
  });

  it("CATALOG_KEYS is sorted alphabetically by display name", () => {
    const names = CATALOG_KEYS.map((k) => LENS_CATALOG[k].name);
    const sorted = [...names].sort((a, b) => catalogCollator.compare(a, b));
    expect(names).toEqual(sorted);
  });

  it("accepts only configurations from the canonical lens's group", () => {
    const canonicalKey = "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr";
    const variantKey = `${canonicalKey}-tc-in`;

    expect(resolveOpticalConfigurationKey(canonicalKey, variantKey)).toBe(variantKey);
    expect(resolveOpticalConfigurationKey(canonicalKey, "reference-newtonian-side-focus")).toBe(canonicalKey);
    expect(resolveOpticalConfigurationKey(canonicalKey, "stale-configuration-key")).toBe(canonicalKey);
    expect(resolveOpticalConfigurationKey(canonicalKey, undefined)).toBe(canonicalKey);
  });

  it("exposes configuration variants to compare without exposing debug fixtures", () => {
    const canonicalKey = "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr";
    expect(COMPARISON_CATALOG_KEYS).toContain(canonicalKey);
    expect(COMPARISON_CATALOG_KEYS).toContain(`${canonicalKey}-tc-in`);
    expect(COMPARISON_CATALOG_KEYS).not.toContain("reference-newtonian-side-focus");
    expect(COMPARISON_CATALOG_KEYS).toEqual(expect.arrayContaining(CATALOG_KEYS));
  });
});

/* ── TypeScript migration regression: all catalog lenses build successfully ──
 * One shared build per lens: three separate sweeps used to rebuild the full
 * catalog three times over for these assertions. */
describe("lensCatalog — buildLens integration", () => {
  it("every catalog lens builds to a frozen RuntimeLens with finite EFL and a valid stopIdx", () => {
    for (const key of CATALOG_KEYS) {
      const L = buildLens(LENS_CATALOG[key]);
      expect(isFinite(L.EFL), `${key}: EFL must be finite`).toBe(true);
      expect(L.EFL, `${key}: EFL must be positive`).toBeGreaterThan(0);
      expect(Object.isFrozen(L), `${key}: RuntimeLens must be frozen`).toBe(true);
      expect(L.stopIdx, `${key}: stopIdx out of range`).toBeGreaterThanOrEqual(0);
      expect(L.stopIdx, `${key}: stopIdx out of range`).toBeLessThan(L.N);
      expect(L.S[L.stopIdx].label, `${key}: STO label mismatch`).toBe("STO");
    }
  });
});

/* ── Catalog ingest: every entry is its file read through canonical ingest, once ── */
describe("lensCatalog and teleconverterCatalog — canonical ingest", () => {
  it("reads every lens and converter through ingest, so a refusal fails here", () => {
    const refused: string[] = [];
    const read = (key: string, entry: () => unknown) => {
      try {
        entry();
      } catch (error) {
        refused.push(`${key}: ${(error as Error).message}`);
      }
    };
    for (const key of ALL_CATALOG_KEYS) read(key, () => LENS_CATALOG[key]);
    for (const key of ALL_TELECONVERTER_KEYS) read(key, () => TELECONVERTER_CATALOG[key]);
    expect(refused).toEqual([]);
    expect(ALL_CATALOG_KEYS.length).toBe(AUTHORED_LENSES.size);
    expect(ALL_TELECONVERTER_KEYS.length).toBe(AUTHORED_CONVERTERS.size);
  });

  it("returns the same object on every read of a key: the canonical prescription of the file", () => {
    for (const key of ALL_CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(LENS_CATALOG[key], key).toBe(entry);
      expect(entry, key).not.toBe(AUTHORED_LENSES.get(key));
      expect(entry, key).toEqual(ingestLens(AUTHORED_LENSES.get(key)!).prescription);
      /* Building retains the canonical identity without another file projection. */
      expect(buildLens(entry).source, key).toBe(entry);
      expect(buildLens(entry)).not.toHaveProperty("data");
    }
    for (const key of ALL_TELECONVERTER_KEYS) {
      const entry = TELECONVERTER_CATALOG[key];
      expect(TELECONVERTER_CATALOG[key], key).toBe(entry);
      expect(entry, key).not.toBe(AUTHORED_CONVERTERS.get(key));
      expect(entry, key).toEqual(ingestTeleconverter(AUTHORED_CONVERTERS.get(key)!).prescription);
    }
  });

  it("composes every permitted pair from a host and a converter that each came through ingest", () => {
    /* The test above shows each catalog entry is its file's ingested view; this shows a pair is composed from them. */
    let pairs = 0;
    for (const lensKey of ALL_CATALOG_KEYS) {
      expect(resolveLensSystemData(lensKey, null), lensKey).toBe(LENS_CATALOG[lensKey]);
      for (const converterKey of ALL_TELECONVERTER_KEYS) {
        if (resolveTeleconverterKey(lensKey, converterKey) !== converterKey) continue;
        pairs++;
        expect(resolveLensSystemData(lensKey, converterKey), `${lensKey} + ${converterKey}`).toEqual(
          attachTeleconverter(LENS_CATALOG[lensKey], TELECONVERTER_CATALOG[converterKey]),
        );
      }
    }
    expect(pairs).toBeGreaterThan(0);
  });
});
