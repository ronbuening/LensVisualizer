import { describe, expect, it } from "vitest";
import roleChip from "../../../../src/components/relationshipMap/roleChip.js";
import themes from "../../../../src/utils/theme/themes.js";

describe("roleChip", () => {
  it("uses the warm inventor border and cool assignee border", () => {
    expect(roleChip(themes.dark, "author").border).toContain(themes.dark.rayWarm);
    expect(roleChip(themes.dark, "assignee").border).toContain(themes.dark.rayCool);
  });

  it("returns one shared chip vocabulary for both roles", () => {
    const author = roleChip(themes.dark, "author");
    const assignee = roleChip(themes.dark, "assignee");

    expect({ ...author, border: undefined }).toEqual({ ...assignee, border: undefined });
    expect(author).toMatchObject({ fontSize: "0.6rem", marginLeft: "0.4rem", verticalAlign: "middle" });
  });
});
