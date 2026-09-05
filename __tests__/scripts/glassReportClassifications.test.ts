import { describe, expect, it } from "vitest";
import { ambiguityGroupKey } from "../../scripts/glass-reports/glassAmbiguityScan.js";
import { classifyMissingMaterial } from "../../scripts/glass-reports/glassCoverageOpportunitiesScan.js";
import {
  hasReviewRecord,
  reviewRecordStatus,
  extractPatentNumber,
  patentSearchTokens,
  findLocalPatent,
} from "../../scripts/glass-reports/glassScanLib.js";

describe("glass ambiguity scan", () => {
  it("keeps d-line and e-line resolutions in separate report groups", () => {
    const coordinates = { glassString: "example", storedNd: 1.5, storedVd: 50 };

    expect(ambiguityGroupKey({ ...coordinates, indexReference: "d" })).not.toBe(
      ambiguityGroupKey({ ...coordinates, indexReference: "e" }),
    );
  });
});

describe("six-digit glass-code scan", () => {
  it("treats explicit unmatched annotations as self-recording review dispositions", () => {
    expect(
      hasReviewRecord({
        explicitlyUnmatched: true,
        reviewedStatus: "No reviewed-sidecar hit",
        auditReviewed: false,
      }),
    ).toBe(true);
    expect(
      reviewRecordStatus({
        explicitlyUnmatched: true,
        reviewedStatus: "No reviewed-sidecar hit",
        auditReviewed: false,
      }),
    ).toBe("Explicit disposition in data");
  });
});

describe("glass coverage opportunities scan", () => {
  it("prefers explicit patent metadata when a subtitle uses Japanese-era notation", () => {
    expect(extractPatentNumber("JP1987-244010 A", "JP S62-244010 A Example 2")).toBe("JP1987-244010 A");
    expect(extractPatentNumber(undefined, "US 4,123,456 A Example 1")).toBe("US 4,123,456 A");
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

  it("separates glass opportunities from resin, cement, plastic, and other optical media", () => {
    expect(classifyMissingMaterial("Element 2 synthetic-resin layer", "Proprietary optical resin")).toBe("resin");
    expect(classifyMissingMaterial("Bond layer 1", "UV-curing adhesive")).toBe("cement");
    expect(classifyMissingMaterial("Plastic corrector", "PMMA")).toBe("plastic");
    expect(classifyMissingMaterial("Hybrid replica layer", "Unmatched optical medium")).toBe("resin");
    expect(classifyMissingMaterial("Element 9", "Canon proprietary organic")).toBe("resin");
    expect(classifyMissingMaterial("WTR", "")).toBe("other");
    expect(classifyMissingMaterial("Element 4", "Unmatched barium crown")).toBe("glass");
  });
});
