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
