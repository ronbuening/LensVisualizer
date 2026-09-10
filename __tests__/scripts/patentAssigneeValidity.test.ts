import { describe, expect, it } from "vitest";
import { assertPatentAssigneeValidity } from "../../scripts/patent-assignee-validity.mjs";

describe("patent assignee validity", () => {
  it("accepts canonical historical and modern Zeiss entities", () => {
    expect(() =>
      assertPatentAssigneeValidity([
        {
          key: "historic",
          patentNumber: "US 1",
          patentYear: 1903,
          patentAssignees: ["Carl-Zeiss-Stiftung"],
        },
        {
          key: "modern",
          patentNumber: "US 2",
          patentYear: 2018,
          patentAssignees: ["Carl Zeiss AG"],
        },
      ]),
    ).not.toThrow();
  });

  it("rejects known source-name aliases in structured metadata", () => {
    expect(() =>
      assertPatentAssigneeValidity([
        {
          key: "jena",
          patentNumber: "FR 1",
          patentYear: 1952,
          patentAssignees: ["VEB Optik Carl Zeiss Jena"],
        },
      ]),
    ).toThrow(/use VEB Carl Zeiss Jena instead of VEB Optik Carl Zeiss Jena/);
  });

  it.each([
    ["Nippon Kogaku Kogyo K.K.", "Nippon Kogaku K.K."],
    ["Voigtländer & Sohn Aktiengesellschaft", "Voigtländer & Sohn AG"],
  ])("rejects the spelling-only duplicate %s", (alias, canonical) => {
    expect(() => assertPatentAssigneeValidity([{ key: "alias", patentYear: 1953, patentAssignees: [alias] }])).toThrow(
      `use ${canonical} instead of ${alias}`,
    );
  });

  it("preserves a legal rename boundary without rejecting delayed publications", () => {
    expect(() =>
      assertPatentAssigneeValidity([{ key: "early", patentYear: 1989, patentAssignees: ["Minolta Co., Ltd."] }]),
    ).toThrow("Minolta Co., Ltd. did not exist until 1994");
    expect(() =>
      assertPatentAssigneeValidity([
        { key: "renamed", patentYear: 1994, patentAssignees: ["Minolta Co., Ltd."] },
        { key: "delayed", patentYear: 1995, patentAssignees: ["Minolta Camera Co., Ltd."] },
      ]),
    ).not.toThrow();
  });

  it("rejects entity names that postdate the source publication", () => {
    expect(() =>
      assertPatentAssigneeValidity([
        {
          key: "anachronistic",
          patentNumber: "US 3",
          patentYear: 1975,
          patentAssignees: ["Carl Zeiss AG", "Carl Zeiss SMT GmbH"],
        },
      ]),
    ).toThrow(/Carl Zeiss AG did not exist until 2004/);
  });
});
