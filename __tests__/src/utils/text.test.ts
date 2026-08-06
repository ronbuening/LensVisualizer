import { describe, expect, it } from "vitest";
import { pluralize } from "../../../src/utils/text.js";

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
