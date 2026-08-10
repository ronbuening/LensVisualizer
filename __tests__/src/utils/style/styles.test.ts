import { describe, it, expect } from "vitest";
import {
  OVERLAY_BACKDROP,
  OVERLAY_MODAL_BASE,
  PANEL_OVERLAY_BACKDROP,
  SLIDER_LABEL,
  SLIDER_VALUE_BASE,
  VISUALLY_HIDDEN,
  panelCard,
  countSuffix,
  searchInput,
  toggleGroup,
  toggleBtn,
  chromChannelBtn,
  collapseBtn,
  sliderInput,
  selector,
  headerStrip,
  headerSearchBtn,
  topBarBtn,
  overlayModal,
  panelOverlayContent,
  closeBtn,
  withAlpha,
} from "../../../../src/utils/style/styles.js";
import { CHANGELOG_TYPE_COLORS } from "../../../../src/utils/content/changelogHelpers.js";
import { TAG_COLORS } from "../../../../src/components/content/ArticleCard.js";
import type { Theme } from "../../../../src/types/theme.js";

/*
 * Pixel values (font sizes, paddings, radii, offsets) are a design choice,
 * not a contract — they are intentionally NOT asserted here, so visual
 * tweaks never break tests. This file guards only:
 *   • withAlpha() color math (real logic with edge cases)
 *   • badge palette literals staying 6-digit hex so alpha tints render
 *   • static style constants staying frozen (shared objects, never mutated)
 *   • theme-token wiring: each factory routes the passed theme's tokens
 *     into the right style fields
 */

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
  panelBg: "#121820",
  panelBorder: "#345",
  label: "#789",
  selectorBorder: "#456",
} as unknown as Theme;

/* ── Color helpers ── */

const VALID_TINT = /^#([0-9a-f]{8})$|^rgba\(/i;

describe("withAlpha(color, alphaHex)", () => {
  it("expands 3-digit hex before appending the alpha", () => {
    expect(withAlpha("#58c", "22")).toBe("#5588cc22");
    expect(withAlpha("#58c", "22")).toMatch(VALID_TINT);
  });

  it("appends the alpha to 6-digit hex", () => {
    expect(withAlpha("#5588cc", "22")).toBe("#5588cc22");
    expect(withAlpha("#5588cc", "22")).toMatch(VALID_TINT);
  });

  it("replaces the alpha component of rgba() colors", () => {
    expect(withAlpha("rgba(59, 130, 246, 0.18)", "22")).toBe("rgba(59, 130, 246, 0.133)");
    expect(withAlpha("rgba(59, 130, 246, 0.18)", "22")).toMatch(VALID_TINT);
  });

  it("converts rgb() colors to rgba()", () => {
    expect(withAlpha("rgb(59, 130, 246)", "22")).toBe("rgba(59, 130, 246, 0.133)");
  });

  it("returns unrecognized color forms unchanged", () => {
    expect(withAlpha("transparent", "22")).toBe("transparent");
  });
});

describe("badge palettes", () => {
  it("every palette literal is 6-digit hex so tints render", () => {
    for (const color of [...Object.values(CHANGELOG_TYPE_COLORS), ...Object.values(TAG_COLORS)]) {
      expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });
});

/* ── Static constants ── */

describe("static constants", () => {
  it("are frozen so shared style objects cannot be mutated", () => {
    for (const constant of [
      OVERLAY_BACKDROP,
      OVERLAY_MODAL_BASE,
      PANEL_OVERLAY_BACKDROP,
      SLIDER_LABEL,
      SLIDER_VALUE_BASE,
      VISUALLY_HIDDEN,
    ]) {
      expect(Object.isFrozen(constant)).toBe(true);
    }
  });
});

/* ── Theme-token wiring ── */

describe("theme-token wiring", () => {
  it("panelCard and countSuffix use the panel and label tokens", () => {
    const card = panelCard(mockTheme);
    expect(card.background).toBe(mockTheme.panelBg);
    expect(card.border).toContain(mockTheme.panelBorder);
    expect(countSuffix(mockTheme).color).toBe(mockTheme.label);
  });

  it("searchInput, selector, topBarBtn, and headerSearchBtn use the selector chrome tokens", () => {
    const input = searchInput(mockTheme);
    expect(input.background).toBe(mockTheme.selectorBg);
    expect(input.color).toBe(mockTheme.selectorText);
    expect(input.border).toContain(mockTheme.selectorBorder);

    const sel = selector(mockTheme, true);
    expect(sel.backgroundColor).toBe(mockTheme.selectorBg);
    expect(sel.color).toBe(mockTheme.selectorText);
    expect(sel.border).toContain(mockTheme.sliderAccent);

    const bar = topBarBtn(mockTheme, true);
    expect(bar.backgroundColor).toBe(mockTheme.selectorBg);
    expect(bar.color).toBe(mockTheme.selectorText);
    expect(bar.boxShadow).toContain(mockTheme.sliderAccent);

    const search = headerSearchBtn(mockTheme);
    expect(search.backgroundColor).toBe(mockTheme.selectorBg);
    expect(search.color).toBe(mockTheme.selectorText);
  });

  it("toggleBtn switches between the active and inactive toggle tokens", () => {
    const active = toggleBtn(mockTheme, true);
    expect(active.background).toBe(mockTheme.toggleActiveBg);
    expect(active.color).toBe(mockTheme.toggleActiveText);

    const inactive = toggleBtn(mockTheme, false);
    expect(inactive.background).toBe(mockTheme.toggleBg);
    expect(inactive.color).toBe(mockTheme.toggleInactiveText);
    expect(inactive.borderRight).toContain(mockTheme.toggleBorder);
  });

  it("chromChannelBtn switches between the active and inactive toggle tokens", () => {
    const active = chromChannelBtn(mockTheme, true, true);
    expect(active.background).toBe(mockTheme.toggleActiveBg);
    expect(active.color).toBe(mockTheme.toggleActiveText);
    expect(active.borderRight).toContain(mockTheme.toggleBorder);

    const inactive = chromChannelBtn(mockTheme, false, false);
    expect(inactive.background).toBe(mockTheme.toggleBg);
    expect(inactive.color).toBe(mockTheme.toggleInactiveText);
  });

  it("toggleGroup and collapseBtn use the toggle border, background, and muted tokens", () => {
    expect(toggleGroup(mockTheme).border).toContain(mockTheme.toggleBorder);

    const pill = collapseBtn(mockTheme);
    expect(pill.background).toBe(mockTheme.toggleBg);
    expect(pill.border).toContain(mockTheme.toggleBorder);
    expect(pill.color).toBe(mockTheme.muted);
  });

  it("sliderInput uses the slider track and accent tokens", () => {
    const s = sliderInput(mockTheme);
    expect(s.background).toBe(mockTheme.sliderTrack);
    expect(s.accentColor).toBe(mockTheme.sliderAccent);
  });

  it("headerStrip uses the header border and background tokens", () => {
    const s = headerStrip(mockTheme);
    expect(s.borderBottom).toContain(mockTheme.headerBorder);
    expect(s.backgroundColor).toBe(mockTheme.headerBgColor);
    expect(s.backgroundImage).toBe(mockTheme.headerBgImage);
  });

  it("overlayModal, panelOverlayContent, and closeBtn use the description and muted tokens", () => {
    const modal = overlayModal(mockTheme);
    expect(modal.background).toBe(mockTheme.descBg);
    expect(modal.border).toContain(mockTheme.descBorder);

    const panel = panelOverlayContent(mockTheme);
    expect(panel.background).toBe(mockTheme.descBg);
    expect(panel.border).toContain(mockTheme.descBorder);

    expect(closeBtn(mockTheme).color).toBe(mockTheme.muted);
  });
});

describe("overlayModal(t, maxWidth)", () => {
  it("keeps the base maxWidth by default and overrides it when provided", () => {
    expect(overlayModal(mockTheme).maxWidth).toBe(OVERLAY_MODAL_BASE.maxWidth);
    expect(overlayModal(mockTheme, 640).maxWidth).toBe(640);
  });
});
