import { describe, it, expect } from "vitest";
import {
  OVERLAY_BACKDROP,
  OVERLAY_MODAL_BASE,
  SLIDER_LABEL,
  SLIDER_VALUE_BASE,
  toggleGroup,
  toggleBtn,
  chromChannelBtn,
  collapseBtn,
  sliderInput,
  selector,
  headerStrip,
  topBarBtn,
  overlayModal,
  closeBtn,
} from "../src/utils/styles.js";
import type { Theme } from "../src/types/theme.js";

/* Minimal mock theme with just the tokens factories consume */
const mockTheme = {
  toggleBg: "#111",
  toggleActiveBg: "#222",
  toggleBorder: "#333",
  toggleActiveText: "#fff",
  toggleInactiveText: "#888",
  muted: "#666",
  sliderTrack: "#444",
  sliderAccent: "#0af",
  selectorBg: "#1a1a1a",
  selectorText: "#ccc",
  headerBorder: "#2a2a2a",
  headerBgColor: "#0d0d0d",
  headerBgImage: "none",
  descBg: "#101010",
  descBorder: "#333",
} as unknown as Theme;

/* ── Static constants ── */

describe("static constants", () => {
  it("OVERLAY_BACKDROP is frozen with expected keys", () => {
    expect(Object.isFrozen(OVERLAY_BACKDROP)).toBe(true);
    expect(OVERLAY_BACKDROP.position).toBe("fixed");
    expect(OVERLAY_BACKDROP.zIndex).toBe(9999);
  });

  it("OVERLAY_MODAL_BASE is frozen with expected keys", () => {
    expect(Object.isFrozen(OVERLAY_MODAL_BASE)).toBe(true);
    expect(OVERLAY_MODAL_BASE.borderRadius).toBe(10);
    expect(OVERLAY_MODAL_BASE.maxWidth).toBe(480);
  });

  it("SLIDER_LABEL is frozen with expected typography", () => {
    expect(Object.isFrozen(SLIDER_LABEL)).toBe(true);
    expect(SLIDER_LABEL.fontSize).toBe(9.5);
    expect(SLIDER_LABEL.letterSpacing).toBe("0.1em");
    expect(SLIDER_LABEL.transition).toBe("color 0.3s");
  });

  it("SLIDER_VALUE_BASE is frozen with expected typography", () => {
    expect(Object.isFrozen(SLIDER_VALUE_BASE)).toBe(true);
    expect(SLIDER_VALUE_BASE.fontSize).toBe(14);
    expect(SLIDER_VALUE_BASE.fontWeight).toBe(700);
    expect(SLIDER_VALUE_BASE.fontVariantNumeric).toBe("tabular-nums");
    expect(SLIDER_VALUE_BASE.transition).toBe("color 0.3s");
  });
});

/* ── Theme-aware factories ── */

describe("toggleGroup(t, opts)", () => {
  it("returns a style object with theme border", () => {
    const s = toggleGroup(mockTheme);
    expect(s.display).toBe("flex");
    expect(s.borderRadius).toBe(5);
    expect(s.border).toContain(mockTheme.toggleBorder);
  });

  it("includes width when opts.width is provided", () => {
    const s = toggleGroup(mockTheme, { width: 220 });
    expect(s.width).toBe(220);
  });

  it("omits width when not provided", () => {
    const s = toggleGroup(mockTheme);
    expect(s.width).toBeUndefined();
  });
});

describe("toggleBtn(t, active, opts)", () => {
  it("returns active background when active=true", () => {
    const s = toggleBtn(mockTheme, true);
    expect(s.background).toBe(mockTheme.toggleActiveBg);
    expect(s.color).toBe(mockTheme.toggleActiveText);
  });

  it("returns inactive background when active=false", () => {
    const s = toggleBtn(mockTheme, false);
    expect(s.background).toBe(mockTheme.toggleBg);
    expect(s.color).toBe(mockTheme.toggleInactiveText);
  });

  it("shows right border by default", () => {
    const s = toggleBtn(mockTheme, false);
    expect(s.borderRight).toContain(mockTheme.toggleBorder);
  });

  it("hides right border when hasRightBorder=false", () => {
    const s = toggleBtn(mockTheme, false, { hasRightBorder: false });
    expect(s.borderRight).toBe("none");
  });

  it("respects custom flex, padding, and gap", () => {
    const s = toggleBtn(mockTheme, true, { flex: 0.5, padding: "2px 4px", gap: 3 });
    expect(s.flex).toBe(0.5);
    expect(s.padding).toBe("2px 4px");
    expect(s.gap).toBe(3);
  });

  it("defaults flex=1, padding='5px 8px', gap=5", () => {
    const s = toggleBtn(mockTheme, false);
    expect(s.flex).toBe(1);
    expect(s.padding).toBe("5px 8px");
    expect(s.gap).toBe(5);
  });
});

describe("chromChannelBtn(t, active, hasRightBorder)", () => {
  it("uses flex 0.6 and smaller gap", () => {
    const s = chromChannelBtn(mockTheme, true, true);
    expect(s.flex).toBe(0.6);
    expect(s.gap).toBe(3);
    expect(s.padding).toBe("5px 6px");
  });

  it("active/inactive colors match toggleBtn pattern", () => {
    const active = chromChannelBtn(mockTheme, true, false);
    const inactive = chromChannelBtn(mockTheme, false, false);
    expect(active.background).toBe(mockTheme.toggleActiveBg);
    expect(inactive.background).toBe(mockTheme.toggleBg);
  });

  it("controls right border", () => {
    expect(chromChannelBtn(mockTheme, true, true).borderRight).toContain(mockTheme.toggleBorder);
    expect(chromChannelBtn(mockTheme, true, false).borderRight).toBe("none");
  });
});

describe("collapseBtn(t)", () => {
  it("returns a style object with theme background and border", () => {
    const s = collapseBtn(mockTheme);
    expect(s.borderRadius).toBe(10);
    expect(s.background).toBe(mockTheme.toggleBg);
    expect(s.border).toContain(mockTheme.toggleBorder);
    expect(s.color).toBe(mockTheme.muted);
    expect(s.fontSize).toBe(8);
  });
});

describe("sliderInput(t, opts)", () => {
  it("defaults to flex sizing", () => {
    const s = sliderInput(mockTheme);
    expect(s.flex).toBe(1);
    expect(s.width).toBeUndefined();
    expect(s.background).toBe(mockTheme.sliderTrack);
    expect(s.accentColor).toBe(mockTheme.sliderAccent);
  });

  it('uses width:"100%" when sizing="full"', () => {
    const s = sliderInput(mockTheme, { sizing: "full" });
    expect(s.width).toBe("100%");
    expect(s.flex).toBeUndefined();
  });
});

describe("selector(t, wide)", () => {
  it("returns wider padding for desktop", () => {
    const s = selector(mockTheme, true);
    expect(s.padding).toBe("7px 32px 7px 12px");
    expect(s.fontSize).toBe(13);
  });

  it("returns narrower padding for mobile", () => {
    const s = selector(mockTheme, false);
    expect(s.padding).toBe("7px 28px 7px 8px");
    expect(s.fontSize).toBe(12);
  });

  it("includes theme-derived colors", () => {
    const s = selector(mockTheme, true);
    expect(s.backgroundColor).toBe(mockTheme.selectorBg);
    expect(s.color).toBe(mockTheme.selectorText);
    expect(s.border).toContain(mockTheme.sliderAccent);
  });
});

describe("headerStrip(t, opts)", () => {
  it("returns theme-derived header background", () => {
    const s = headerStrip(mockTheme);
    expect(s.borderBottom).toContain(mockTheme.headerBorder);
    expect(s.backgroundColor).toBe(mockTheme.headerBgColor);
    expect(s.backgroundImage).toBe(mockTheme.headerBgImage);
  });

  it("includes padding when provided", () => {
    const s = headerStrip(mockTheme, { padding: "8px 16px" });
    expect(s.padding).toBe("8px 16px");
  });

  it("omits padding when not provided", () => {
    const s = headerStrip(mockTheme);
    expect(s.padding).toBeUndefined();
  });
});

describe("topBarBtn(t, wide)", () => {
  it("uses desktop padding when wide=true", () => {
    const s = topBarBtn(mockTheme, true);
    expect(s.padding).toBe("5px 14px");
  });

  it("uses mobile padding when wide=false", () => {
    const s = topBarBtn(mockTheme, false);
    expect(s.padding).toBe("5px 10px");
  });

  it("includes theme-derived colors", () => {
    const s = topBarBtn(mockTheme, true);
    expect(s.backgroundColor).toBe(mockTheme.selectorBg);
    expect(s.color).toBe(mockTheme.selectorText);
  });
});

describe("overlayModal(t)", () => {
  it("extends OVERLAY_MODAL_BASE with theme colors", () => {
    const s = overlayModal(mockTheme);
    expect(s.borderRadius).toBe(OVERLAY_MODAL_BASE.borderRadius);
    expect(s.maxWidth).toBe(OVERLAY_MODAL_BASE.maxWidth);
    expect(s.background).toBe(mockTheme.descBg);
    expect(s.border).toContain(mockTheme.descBorder);
  });
});

describe("closeBtn(t)", () => {
  it("returns close button style with theme muted color", () => {
    const s = closeBtn(mockTheme);
    expect(s.position).toBe("sticky");
    expect(s.color).toBe(mockTheme.muted);
    expect(s.cursor).toBe("pointer");
    expect(s.fontSize).toBe(18);
  });
});
