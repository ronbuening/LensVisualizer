import { describe, it, expect } from "vitest";
import { PANEL_OVERLAY_BACKDROP, panelOverlayContent } from "../src/utils/styles.js";
import type { Theme } from "../src/types/theme.js";

const mockTheme = {
  descBg: "#1a1a1a",
  descBorder: "#444",
  muted: "#888",
} as unknown as Theme;

describe("PanelOverlay", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/layout/PanelOverlay.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("PanelOverlay");
  });

  it("PANEL_OVERLAY_BACKDROP uses absolute positioning (panel-scoped)", () => {
    expect(Object.isFrozen(PANEL_OVERLAY_BACKDROP)).toBe(true);
    expect(PANEL_OVERLAY_BACKDROP.position).toBe("absolute");
    expect(PANEL_OVERLAY_BACKDROP.zIndex).toBe(100);
  });

  it("panelOverlayContent(theme) returns 90% width/height with theme colors", () => {
    const s = panelOverlayContent(mockTheme);
    expect(s.width).toBe("90%");
    expect(s.height).toBe("90%");
    expect(s.background).toBe(mockTheme.descBg);
    expect(s.border).toContain(mockTheme.descBorder);
    expect(s.borderRadius).toBe(10);
  });
});

describe("LCAOverlayContent", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/diagram/LCAOverlayContent.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("LCAOverlayContent");
  });
});
