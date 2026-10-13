/**
 * Unit tests for the glass report harness. The report generators under reports/ run only through
 * `npm run generate:reports`; these helper checks stay in `npm test` so the patent matcher and
 * review-disposition rules cannot rot between report regenerations.
 */
import { describe, expect, it } from "vitest";
import {
  classifyMissingMaterial,
  activeGlassAnnotation,
  extractSixDigitCodes,
  isCodeOnlyGlassAnnotation,
  extractPatentNumber,
  findLocalPatent,
  hasReviewRecord,
  patentSearchTokens,
  reviewRecordStatus,
} from "../../reports/glassScanLib.js";

describe("patent-number matching", () => {
  it("prefers explicit patent metadata when a subtitle uses Japanese-era notation", () => {
    expect(extractPatentNumber("JP1987-244010 A", "JP S62-244010 A Example 2")).toBe("JP1987-244010 A");
    expect(extractPatentNumber(undefined, "US 4,123,456 A Example 1")).toBe("US 4,123,456 A");
  });

  it("preserves era-form publications and matches their Gregorian PDF wrappers", () => {
    expect(extractPatentNumber("JP S62-244010 A", "US 4,123,456 A Example 1")).toBe("JP S62-244010 A");
    expect(extractPatentNumber(undefined, "JP S62-244010 A Example 2")).toBe("JP S62-244010 A");
    expect(findLocalPatent("JP S62-244010 A", ["JPA 1987244010-000000.pdf"]).path).toBe(
      "patents/JPA 1987244010-000000.pdf",
    );
    expect(findLocalPatent("JP H10-123456 B2", ["JPB 1998123456-000000.pdf"]).path).toBe(
      "patents/JPB 1998123456-000000.pdf",
    );
    expect(findLocalPatent("JP S62-4010 A", ["JPA 1987244010-000000.pdf"]).path).toBeNull();
  });

  it("matches spaced legacy patent numbers without substring collisions", () => {
    expect(patentSearchTokens("DE 1 228 820 B")).toEqual(["DE1228820B", "DE1228820", "1228820"]);
    expect(findLocalPatent("DE 1 228 820 B", ["20260118637.pdf", "DE_1228820_B.pdf"])).toEqual({
      path: "patents/DE_1228820_B.pdf",
      status: "Matched untracked local patent PDF",
    });
  });

  it("matches exact JPA and JPB export wrappers without short-serial collisions", () => {
    expect(patentSearchTokens("JP1987-244010 A")).toContain("JPA1987244010000000");
    expect(findLocalPatent("JP1987-244010 A", ["JPA 1987004010-000000.pdf", "JPA 1987244010-000000.pdf"])).toEqual({
      path: "patents/JPA 1987244010-000000.pdf",
      status: "Matched untracked local patent PDF",
    });
    expect(findLocalPatent("JP1987-4010 A", ["JPA 1987244010-000000.pdf"]).path).toBeNull();

    expect(patentSearchTokens("JP1980-024081 B2")).toContain("JPB1980024081000000");
    expect(findLocalPatent("JP1980-024081 B2", ["JPA 1980024081-000000.pdf", "JPB 1980024081-000000.pdf"])).toEqual({
      path: "patents/JPB 1980024081-000000.pdf",
      status: "Matched untracked local patent PDF",
    });
  });
});

describe("opportunity classification", () => {
  it("keeps coordinate codes without reviving explicitly rejected glass labels", () => {
    const annotation =
      "683330 — dense flint (catalog unresolved; patent nd=1.68250, vd=33.0; prior H-ZF52A label rejected)";
    expect(activeGlassAnnotation(annotation)).not.toContain("H-ZF52A");
    expect(activeGlassAnnotation(annotation)).toContain("patent nd=1.68250, vd=33.0");
    expect(extractSixDigitCodes(activeGlassAnnotation(annotation))).toEqual(["683330"]);
    expect(isCodeOnlyGlassAnnotation(annotation)).toBe(true);
  });

  it("filters only the rejected token, retaining a valid spectral proxy", () => {
    for (const rejected of [
      "H-ZF52A label rejected",
      "S-NPH7 attribution unsupported",
      "S-NPH85 annotation not coefficient-backed",
      "CDGM H-ZBaF4 rejected by partial dispersion",
    ]) {
      const annotation = `S-LAH66 (supplier unresolved; prior ${rejected})`;
      expect(activeGlassAnnotation(annotation)).toContain("S-LAH66");
      expect(activeGlassAnnotation(annotation)).not.toMatch(/H-ZF52A|S-NPH7|S-NPH85|H-ZBaF4/);
      expect(isCodeOnlyGlassAnnotation(annotation)).toBe(false);
    }
  });

  it("preserves unresolved suppliers and historical names without an explicit rejection", () => {
    for (const annotation of [
      "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      "683330 (historical H-ZF52A label; unresolved attribution)",
      "H-ZF52A label not rejected",
    ])
      expect(activeGlassAnnotation(annotation)).toBe(annotation);
  });

  it("separates glass opportunities from resin, cement, plastic, and other optical media", () => {
    expect(classifyMissingMaterial("Element 2 synthetic-resin layer", "Proprietary optical resin")).toBe("resin");
    expect(classifyMissingMaterial("Bond layer 1", "UV-curing adhesive")).toBe("cement");
    expect(classifyMissingMaterial("Plastic corrector", "PMMA")).toBe("plastic");
    expect(classifyMissingMaterial("Hybrid replica layer", "Unmatched optical medium")).toBe("resin");
    expect(classifyMissingMaterial("Element 9", "Canon proprietary organic")).toBe("resin");
    expect(classifyMissingMaterial("WTR", "")).toBe("other");
    expect(classifyMissingMaterial("Element 4", "Unmatched barium crown")).toBe("glass");
  });

  it("treats explicit unmatched annotations as self-recording review dispositions", () => {
    const row = { explicitlyUnmatched: true, reviewedStatus: "No reviewed-sidecar hit", auditReviewed: false };
    expect(hasReviewRecord(row)).toBe(true);
    expect(reviewRecordStatus(row)).toBe("Explicit disposition in data");
  });
});
