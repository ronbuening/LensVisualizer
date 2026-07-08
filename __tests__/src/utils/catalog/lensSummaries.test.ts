/**
 * Parity tests between the generated lens summaries (lensSummaries.ts, from
 * scripts/generate-build-metadata.mjs) and the runtime lens catalog
 * (lensCatalog.ts, from the eager data glob).
 *
 * The summary JSON is produced by a Node script that evaluates the same
 * `*.data.ts` modules the client glob does. If the script's field list or
 * defaults handling drifts from the runtime catalog, index-style pages would
 * silently render stale or missing metadata — these tests catch that.
 */

import { describe, it, expect } from "vitest";
import {
  LENS_CATALOG,
  ALL_CATALOG_KEYS,
  CATALOG_KEYS,
  DEBUG_CATALOG_KEYS,
} from "../../../../src/utils/catalog/lensCatalog.js";
import {
  LENS_SUMMARIES,
  ALL_SUMMARY_KEYS,
  SUMMARY_KEYS,
  DEBUG_SUMMARY_KEYS,
} from "../../../../src/utils/catalog/lensSummaries.js";

describe("lensSummaries parity with lensCatalog", () => {
  it("key lists match the catalog exactly (same order)", () => {
    expect(ALL_SUMMARY_KEYS).toEqual(ALL_CATALOG_KEYS);
    expect(SUMMARY_KEYS).toEqual(CATALOG_KEYS);
    expect(DEBUG_SUMMARY_KEYS).toEqual(DEBUG_CATALOG_KEYS);
  });

  it("every summary field matches the catalog entry", () => {
    for (const key of ALL_CATALOG_KEYS) {
      const data = LENS_CATALOG[key];
      const summary = LENS_SUMMARIES[key];
      expect(summary, `${key}: missing summary`).toBeDefined();
      expect(summary.name).toBe(data.name);
      expect(summary.maker).toBe(data.maker);
      expect(summary.specs).toEqual(data.specs);
      expect(summary.focalLengthMarketing).toEqual(data.focalLengthMarketing);
      expect(summary.apertureMarketing).toBe(data.apertureMarketing);
      expect(summary.apertureDesign).toBe(data.apertureDesign);
      expect(summary.nominalFno).toEqual(data.nominalFno);
      expect(summary.patentYear).toBe(data.patentYear);
      expect(summary.lensMounts).toEqual(data.lensMounts);
      expect(summary.imageFormat).toBe(data.imageFormat);
      expect(summary.visible).toBe(data.visible !== false);
    }
  });
});
