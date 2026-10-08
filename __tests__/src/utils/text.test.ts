import { describe, expect, it } from "vitest";
import { pluralize, textRun } from "../../../src/utils/text.js";

describe("pluralize", () => {
  it("keeps singular words unchanged only for a count of one", () => {
    expect(pluralize(1, "patent")).toBe("patent");
    expect(pluralize(0, "patent")).toBe("patents");
    expect(pluralize(2, "patent")).toBe("patents");
  });

  it("handles the regular endings used by catalog copy", () => {
    expect(pluralize(2, "lens")).toBe("lenses");
    expect(pluralize(2, "match")).toBe("matches");
    expect(pluralize(2, "lens diagram")).toBe("lens diagrams");
  });

  it("handles consonant-y plurals", () => {
    expect(pluralize(2, "company")).toBe("companies");
  });
});

describe("textRun", () => {
  it("preserves spaces, zero and React's omission of empty or boolean children", () => {
    expect(textRun("A: ", 0, " mm", false, null, undefined, true)).toBe("A: 0 mm");
    expect(textRun("T ", "+2", " / S ", "-3")).toBe("T +2 / S -3");
  });
});
