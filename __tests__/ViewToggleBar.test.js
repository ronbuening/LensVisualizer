import { describe, it, expect } from "vitest";
import { toggleGroup, toggleBtn } from "../src/utils/styles.js";

/**
 * ViewToggleBar is a generic view-mode toggle component used for both
 * mobile and desktop view switching. We verify its module contract and
 * the style factories it uses to render the toggle group.
 */

const mockTheme = {
  toggleBg: "#222",
  toggleBorder: "#444",
  toggleText: "#eee",
  toggleActive: "#555",
  toggleActiveBorder: "#888",
  toggleActiveText: "#fff",
  headerBorder: "#333",
  headerBgColor: "#111",
  headerBgImage: "none",
};

describe("ViewToggleBar", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/ViewToggleBar.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("ViewToggleBar");
  });

  it("imports style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.headerStrip).toBe("function");
    expect(typeof styles.toggleGroup).toBe("function");
    expect(typeof styles.toggleBtn).toBe("function");
  });

  it("toggleGroup style factory produces an object with expected width property", () => {
    // ViewToggleBar calls toggleGroup(t, { width: groupWidth }) where
    // groupWidth defaults to options.length * 110
    const style = toggleGroup(mockTheme, { width: 330 });
    expect(typeof style).toBe("object");
    expect(style.width).toBe(330);
  });

  it("toggleBtn produces distinct styles for active vs inactive state", () => {
    const activeStyle = toggleBtn(mockTheme, true, { hasRightBorder: true, padding: "5px 0" });
    const inactiveStyle = toggleBtn(mockTheme, false, { hasRightBorder: true, padding: "5px 0" });
    expect(typeof activeStyle).toBe("object");
    expect(typeof inactiveStyle).toBe("object");
    // Active and inactive buttons must have visually distinct backgrounds
    expect(activeStyle.background).not.toBe(inactiveStyle.background);
  });
});
