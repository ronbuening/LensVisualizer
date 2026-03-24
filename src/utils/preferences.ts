/**
 * Persistent user preferences via localStorage.
 */

import type { Preferences } from "../types/state.js";

export const PREFS_KEY: string = "lensvis:prefs";

/**
 * Load persisted user preferences from localStorage.
 *
 * Validates each field individually — corrupt or unexpected values are
 * silently dropped.  Lens keys are checked against the current catalog
 * to avoid referencing lenses that no longer exist.
 *
 * @param catalogKeys — valid lens keys from the current catalog
 * @returns sanitized preferences (partial — only valid fields)
 */
export function loadPrefs(catalogKeys: string[]): Partial<Preferences> {
  try {
    const raw: string | null = localStorage.getItem(PREFS_KEY);
    if (!raw) return {};
    const p: Record<string, unknown> = JSON.parse(raw);
    if (!p || typeof p !== "object") return {};
    const out: Partial<Preferences> = {};
    if (typeof p.dark === "boolean") out.dark = p.dark;
    if (typeof p.highContrast === "boolean") out.highContrast = p.highContrast;
    if (typeof p.showOnAxis === "boolean") out.showOnAxis = p.showOnAxis;
    /* showOffAxis: v2 stored boolean (true→"trueAngle", false→"off"),
       v3+ stores string "off"|"trueAngle"|"edge" */
    if (typeof p.showOffAxis === "string" && ["off", "trueAngle", "edge"].includes(p.showOffAxis)) {
      out.showOffAxis = p.showOffAxis;
    } else if (typeof p.showOffAxis === "boolean") {
      out.showOffAxis = p.showOffAxis ? "trueAngle" : "off";
    }
    if (typeof p.rayTracksF === "boolean") out.rayTracksF = p.rayTracksF;
    if (typeof p.showChromatic === "boolean") out.showChromatic = p.showChromatic;
    if (typeof p.chromR === "boolean") out.chromR = p.chromR;
    if (typeof p.chromG === "boolean") out.chromG = p.chromG;
    if (typeof p.chromB === "boolean") out.chromB = p.chromB;
    /* v1 compat: lensKey → lensKeyA */
    const key: unknown = (p as Record<string, unknown>).lensKeyA || (p as Record<string, unknown>).lensKey;
    if (typeof key === "string" && catalogKeys.includes(key)) out.lensKeyA = key;
    if (typeof p.lensKeyB === "string" && catalogKeys.includes(p.lensKeyB)) out.lensKeyB = p.lensKeyB;
    if (typeof p.comparing === "boolean") out.comparing = p.comparing;
    if (p.scaleMode === "independent" || p.scaleMode === "normalized")
      out.scaleMode = p.scaleMode as "independent" | "normalized";
    if (typeof p.desktopView === "string" && ["diagram", "both", "analysis"].includes(p.desktopView))
      out.desktopView = p.desktopView;
    if (typeof p.focusExpanded === "boolean") out.focusExpanded = p.focusExpanded;
    if (typeof p.apertureExpanded === "boolean") out.apertureExpanded = p.apertureExpanded;
    if (typeof p.headerControlsExpanded === "boolean") out.headerControlsExpanded = p.headerControlsExpanded;
    if (typeof p.legendExpanded === "boolean") out.legendExpanded = p.legendExpanded;
    if (typeof p.headerInfoExpanded === "boolean") out.headerInfoExpanded = p.headerInfoExpanded;
    return out;
  } catch {
    return {};
  }
}
