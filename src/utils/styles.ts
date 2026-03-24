/**
 * Shared style-object module — theme-aware factory functions and static
 * constants for reusable UI patterns (toggle buttons, sliders, overlays, etc.).
 *
 * Replaces per-component hoisted style objects that were previously duplicated
 * across DiagramHeader, DiagramControls, DiagramLegend, SharedSlidersBar, and
 * LensViewer. Every factory is a pure function: (t, ...params) → style object.
 *
 * What belongs here:
 *   • Visual patterns used by 2+ components (toggles, collapse pills, sliders)
 *   • Structural constants shared across components (overlay backdrop/modal)
 *
 * What stays inline in components:
 *   • SVG element attributes (stroke, fill, strokeWidth)
 *   • One-off structural layout styles
 *   • Data-driven positions/sizes
 *   • Runtime-conditional layout (compact padding, side-layout borders)
 */

/* =====================================================================
 * §1  STATIC CONSTANTS — no theme parameter, frozen for safety
 * ===================================================================== */

/** Full-viewport overlay backdrop with centered content. */
export const OVERLAY_BACKDROP = Object.freeze({
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
});

/** Base modal container (border-radius, sizing, shadow). */
export const OVERLAY_MODAL_BASE = Object.freeze({
  borderRadius: 10,
  maxWidth: 480,
  width: "90%",
  maxHeight: "70vh",
  overflowY: "auto",
  position: "relative",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
});

/** Slider label typography (e.g., "FOCUS", "APERTURE", "ZOOM"). */
export const SLIDER_LABEL = Object.freeze({
  fontSize: 9.5,
  letterSpacing: "0.1em",
  transition: "color 0.3s",
});

/** Bold numeric readout next to sliders (e.g., "50 mm", "f/2.8"). */
export const SLIDER_VALUE_BASE = Object.freeze({
  fontSize: 14,
  fontWeight: 700,
  fontVariantNumeric: "tabular-nums",
  transition: "color 0.3s",
});

/* =====================================================================
 * §2  THEME-AWARE FACTORIES — each returns a fresh style object
 * ===================================================================== */

/**
 * Toggle button group container (rounded pill wrapping multiple buttons).
 * @param {Object} t     — theme object
 * @param {Object} [opts]
 * @param {number|string} [opts.width] — fixed width (e.g., 220, "100%")
 */
export function toggleGroup(t, opts) {
  return {
    display: "flex",
    gap: 0,
    borderRadius: 5,
    overflow: "hidden",
    border: `1px solid ${t.toggleBorder}`,
    transition: "border-color 0.3s",
    ...(opts?.width != null ? { width: opts.width } : {}),
  };
}

/**
 * Individual toggle button within a toggle group.
 * @param {Object}  t      — theme object
 * @param {boolean} active — whether this button is currently selected
 * @param {Object}  [opts]
 * @param {boolean} [opts.hasRightBorder=true] — show right border separator
 * @param {number}  [opts.flex=1]
 * @param {string}  [opts.padding="5px 8px"]
 * @param {number}  [opts.gap=5]
 */
export function toggleBtn(t, active, opts) {
  const { hasRightBorder = true, flex = 1, padding = "5px 8px", gap = 5 } = opts || {};
  return {
    flex,
    background: active ? t.toggleActiveBg : t.toggleBg,
    border: "none",
    borderRight: hasRightBorder ? `1px solid ${t.toggleBorder}` : "none",
    padding,
    cursor: "pointer",
    fontSize: 9,
    color: active ? t.toggleActiveText : t.toggleInactiveText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap,
    transition: "all 0.25s",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    letterSpacing: "0.08em",
    minHeight: 28,
  };
}

/**
 * Chromatic channel toggle button (R / G / B) — smaller variant of toggleBtn.
 * @param {Object}  t               — theme object
 * @param {boolean} active          — channel is on
 * @param {boolean} hasRightBorder  — show right border separator
 */
export function chromChannelBtn(t, active, hasRightBorder) {
  return {
    flex: 0.6,
    background: active ? t.toggleActiveBg : t.toggleBg,
    border: "none",
    borderRight: hasRightBorder ? `1px solid ${t.toggleBorder}` : "none",
    padding: "5px 6px",
    cursor: "pointer",
    fontSize: 9,
    color: active ? t.toggleActiveText : t.toggleInactiveText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 28,
    gap: 3,
    transition: "all 0.25s",
    fontFamily: "inherit",
    letterSpacing: "0.08em",
  };
}

/**
 * Collapse/expand pill button (LESS/MORE, LEGEND, CONTROLS, etc.).
 * @param {Object} t — theme object
 */
export function collapseBtn(t) {
  return {
    borderRadius: 10,
    cursor: "pointer",
    padding: "3px 8px",
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 8,
    fontFamily: "inherit",
    letterSpacing: "0.08em",
    transition: "all 0.25s",
    background: t.toggleBg,
    border: `1px solid ${t.toggleBorder}`,
    color: t.muted,
  };
}

/**
 * Slider `<input type="range">` element style.
 * @param {Object} t      — theme object
 * @param {Object} [opts]
 * @param {"flex"|"full"} [opts.sizing="flex"] — "flex" → flex:1, "full" → width:"100%"
 */
export function sliderInput(t, opts) {
  const sizing = opts?.sizing === "full" ? { width: "100%" } : { flex: 1 };
  return {
    ...sizing,
    height: 4,
    appearance: "none",
    borderRadius: 2,
    outline: "none",
    cursor: "pointer",
    background: t.sliderTrack,
    accentColor: t.sliderAccent,
  };
}

/**
 * Lens selector `<select>` dropdown.
 * @param {Object}  t    — theme object
 * @param {boolean} wide — desktop (true) vs mobile (false) sizing
 */
export function selector(t, wide) {
  return {
    backgroundColor: t.selectorBg,
    border: `1.5px solid ${t.sliderAccent}40`,
    borderRadius: 6,
    padding: wide ? "7px 32px 7px 12px" : "7px 28px 7px 8px",
    cursor: "pointer",
    fontSize: wide ? 13 : 12,
    color: t.selectorText,
    fontFamily: "inherit",
    letterSpacing: "0.06em",
    appearance: "none",
    outline: "none",
    boxShadow: `0 0 6px ${t.sliderAccent}18`,
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='12' height='7'><path d='M0 0l6 7 6-7z' fill='${t.selectorText}'/></svg>`)}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  };
}

/**
 * Header/control strip background bar (shared by header, comparison bar,
 * mobile strip, view toggle rows).
 * @param {Object} t      — theme object
 * @param {Object} [opts]
 * @param {string} [opts.padding] — custom padding (e.g., "8px 16px")
 */
export function headerStrip(t, opts) {
  return {
    borderBottom: `1px solid ${t.headerBorder}`,
    backgroundColor: t.headerBgColor,
    backgroundImage: t.headerBgImage,
    transition: "background-color 0.3s,border-color 0.3s",
    ...(opts?.padding != null ? { padding: opts.padding } : {}),
  };
}

/**
 * Top-bar action button (Site, Author, Compare-inactive).
 * @param {Object}  t    — theme object
 * @param {boolean} wide — desktop (true) vs mobile (false)
 */
export function topBarBtn(t, wide) {
  return {
    backgroundColor: t.selectorBg,
    border: `1.5px solid ${t.sliderAccent}40`,
    borderRadius: 6,
    padding: wide ? "5px 14px" : "5px 10px",
    cursor: "pointer",
    fontSize: 11,
    color: t.selectorText,
    fontFamily: "inherit",
    letterSpacing: "0.06em",
    outline: "none",
    flexShrink: 0,
    boxShadow: `0 0 6px ${t.sliderAccent}18`,
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  };
}

/**
 * Overlay modal with theme-derived background and border.
 * @param {Object} t — theme object
 */
export function overlayModal(t) {
  return {
    ...OVERLAY_MODAL_BASE,
    background: t.descBg,
    border: `1px solid ${t.descBorder}`,
  };
}

/**
 * Overlay close button (sticky "×") with theme color.
 * @param {Object} t — theme object
 */
export function closeBtn(t) {
  return {
    position: "sticky",
    top: 0,
    float: "right",
    margin: "10px 10px 0 0",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
    fontFamily: "inherit",
    lineHeight: 1,
    padding: "2px 6px",
    borderRadius: 4,
    zIndex: 1,
    color: t.muted,
  };
}
