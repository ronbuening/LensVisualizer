/**
 * Parity tests between the generated teleconverter summaries (teleconverterSummaries.ts, from
 * scripts/generate-build-metadata.mjs) and the runtime catalogs.
 *
 * The build script resolves each converter's host list with the fit predicate under plain Node, from raw lens
 * modules. The viewer resolves it again from the defaulted catalog. If the two drift, a teleconverter page would
 * link a lens the viewer then refuses to mount the converter on — these tests catch that.
 */

import { describe, expect, it } from "vitest";
import { teleconverterCompatibility } from "../../../../src/optics/teleconverter.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";
import {
  ALL_TELECONVERTER_KEYS,
  TELECONVERTER_CATALOG,
  TELECONVERTER_KEYS,
} from "../../../../src/utils/catalog/teleconverterCatalog.js";
import {
  ALL_TELECONVERTER_SUMMARY_LIST,
  TELECONVERTER_SUMMARIES,
  TELECONVERTER_SUMMARY_KEYS,
  teleconverterLensPath,
  teleconverterSummariesForLens,
} from "../../../../src/utils/catalog/teleconverterSummaries.js";

describe("teleconverterSummaries parity with teleconverterCatalog", () => {
  it("key lists match the catalog exactly (same order), hidden test models only in the full list", () => {
    expect(ALL_TELECONVERTER_SUMMARY_LIST.map((summary) => summary.key)).toEqual(ALL_TELECONVERTER_KEYS);
    expect(TELECONVERTER_SUMMARY_KEYS).toEqual(TELECONVERTER_KEYS);
  });

  it("every summary field matches the catalog entry", () => {
    for (const key of ALL_TELECONVERTER_KEYS) {
      const data = TELECONVERTER_CATALOG[key];
      const summary = TELECONVERTER_SUMMARIES[key];
      expect(summary, `${key}: missing summary`).toBeDefined();
      expect(summary.visible).toBe(data.visible !== false);
      expect(summary.name).toBe(data.name);
      expect(summary.maker).toBe(data.maker);
      expect(summary.subtitle).toBe(data.subtitle);
      expect(summary.specs).toEqual(data.specs);
      expect(summary.magnification).toBe(data.magnification);
      expect(summary.lensMounts).toEqual(data.lensMounts);
      expect(summary.universal).toBe(data.universal);
      expect(summary.minHostFno).toBe(data.minHostFno);
      expect(summary.patentNumber).toBe(data.patentNumber);
      expect(summary.patentAuthors).toEqual(data.patentAuthors);
      expect(summary.patentAssignees).toEqual(data.patentAssignees);
      expect(summary.patentYear).toBe(data.patentYear);
      expect(summary.elementCount).toBe(data.elementCount);
      expect(summary.groupCount).toBe(data.groupCount);
    }
  });

  it("lists exactly the visible lenses the runtime predicate accepts, in catalog order", () => {
    for (const key of ALL_TELECONVERTER_KEYS) {
      const expected = CATALOG_KEYS.filter(
        (lensKey) => teleconverterCompatibility(LENS_CATALOG[lensKey], TELECONVERTER_CATALOG[key]).ok,
      );
      expect(TELECONVERTER_SUMMARIES[key].compatibleLensKeys, key).toEqual(expected);
      /* A lens page links only published converters, so a hidden test model never appears there. */
      const published = TELECONVERTER_KEYS.includes(key);
      for (const lensKey of expected) {
        expect(
          teleconverterSummariesForLens(lensKey).some((summary) => summary.key === key),
          `${lensKey} / ${key}`,
        ).toBe(published);
      }
    }
  });

  it("builds a canonical viewer path that carries the converter in the query", () => {
    expect(teleconverterLensPath("example-lens", "example-converter")).toBe(
      "/lens/example-lens/?v=1&tc=example-converter",
    );
  });
});
