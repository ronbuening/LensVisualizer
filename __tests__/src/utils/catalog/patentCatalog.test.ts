import { describe, expect, it } from "vitest";
import type { LensSummary } from "../../../../src/utils/catalog/lensSummaries.js";
import {
  PATENT_ASSIGNEE_FALLBACK,
  buildPatentIndex,
  espacenetPatentUrl,
  patentJurisdiction,
} from "../../../../src/utils/catalog/patentCatalog.js";

function summary(overrides: Partial<LensSummary> & Pick<LensSummary, "key" | "name">): LensSummary {
  return { visible: true, ...overrides };
}

describe("patent catalog", () => {
  it("builds Espacenet publication-number searches from catalog display formats", () => {
    expect(espacenetPatentUrl("US 2,819,651")).toBe("https://worldwide.espacenet.com/patent/search?q=pn%3DUS2819651");
    expect(espacenetPatentUrl("WO 2021/246545 A1")).toBe(
      "https://worldwide.espacenet.com/patent/search?q=pn%3DWO2021246545A1",
    );
    expect(espacenetPatentUrl("JP S56-140311")).toBe(
      "https://worldwide.espacenet.com/patent/search?q=pn%3DJPS56140311",
    );
  });

  it("resolves represented patent authorities to country labels", () => {
    expect(patentJurisdiction("US 2,819,651")).toEqual({ code: "US", label: "United States" });
    expect(patentJurisdiction("JP 2014-145954 A")).toEqual({ code: "JP", label: "Japan" });
    expect(patentJurisdiction("WO 2021/246545 A1")).toEqual({ code: "WO", label: "International (WIPO)" });
    expect(patentJurisdiction("XX 123")).toEqual({ code: "XX", label: "XX" });
  });

  it("deduplicates patents and groups them by country and every named assignee", () => {
    const index = buildPatentIndex([
      summary({
        key: "us-a",
        name: "US Lens A",
        patentNumber: "US 10",
        patentYear: 2001,
        patentAuthors: ["Ada"],
        patentAssignees: ["Acme", "Beta"],
      }),
      summary({
        key: "us-b",
        name: "US Lens B",
        patentNumber: "US 10",
        patentAuthors: ["Ben"],
        patentAssignees: ["Acme", "Beta"],
      }),
      summary({
        key: "us-c",
        name: "US Lens C",
        patentNumber: "US 2",
        patentAssignees: [],
      }),
      summary({
        key: "de-a",
        name: "DE Lens",
        patentNumber: "DE 3",
        patentAssignees: ["Acme"],
      }),
      summary({
        key: "hidden",
        name: "Hidden Lens",
        patentNumber: "US 99",
        patentAssignees: ["Acme"],
        visible: false,
      }),
      summary({ key: "no-patent", name: "No Patent" }),
    ]);

    expect(index.patents).toHaveLength(3);
    expect(index.patents.find((patent) => patent.patentNumber === "US 10")).toMatchObject({
      patentYear: 2001,
      authors: ["Ada", "Ben"],
      assignees: ["Acme", "Beta"],
      lenses: [
        { key: "us-a", name: "US Lens A" },
        { key: "us-b", name: "US Lens B" },
      ],
    });
    expect(index.countries.map((country) => country.jurisdiction.label)).toEqual(["Germany", "United States"]);

    const unitedStates = index.countries.find((country) => country.jurisdiction.code === "US")!;
    expect(unitedStates.patentCount).toBe(2);
    expect(unitedStates.assignees.map((assignee) => assignee.label)).toEqual([
      "Acme",
      "Beta",
      PATENT_ASSIGNEE_FALLBACK,
    ]);
    expect(unitedStates.assignees.find((assignee) => assignee.label === "Acme")?.patents).toHaveLength(1);
    expect(unitedStates.assignees.find((assignee) => assignee.label === "Beta")?.patents).toHaveLength(1);
    expect(unitedStates.assignees.find((assignee) => assignee.isFallback)?.patents[0].patentNumber).toBe("US 2");
  });
});
