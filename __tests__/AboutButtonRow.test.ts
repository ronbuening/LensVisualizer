import { describe, it, expect } from "vitest";

/**
 * AboutButtonRow is a React component that renders the about button group
 * (Optics, Site, Author). We verify its module contract and style dependencies.
 */

describe("AboutButtonRow", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/AboutButtonRow.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("AboutButtonRow");
  });

  it("imports style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.topBarBtn).toBe("function");
  });
});
