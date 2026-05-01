/**
 * Persistent user preferences via localStorage.
 */

import { isAnalysisTabId, isDesktopView, isOffAxisMode, isRayDensity, type Preferences } from "../types/state.js";

export const PREFS_KEY: string = "lensvis:prefs";

/**
 * Load persisted user preferences from localStorage.
 *
 * Validates each field individually — corrupt or unexpected values are
 * silently dropped. Lens selection (lensKeyA, lensKeyB, comparing) is
 * intentionally not restored — it comes from the URL.
 *
 * @returns sanitized preferences (partial — only valid fields)
 */
export function loadPrefs(): Partial<Preferences> {
  try {
    const raw: string | null = localStorage.getItem(PREFS_KEY);
    if (!raw) return {};
    const p: Record<string, unknown> = JSON.parse(raw);
    if (!p || typeof p !== "object") return {};
    const out: Partial<Preferences> = {};
    if (p.dark === null || typeof p.dark === "boolean") out.dark = p.dark;
    if (typeof p.highContrast === "boolean") out.highContrast = p.highContrast;
    if (typeof p.showOnAxis === "boolean") out.showOnAxis = p.showOnAxis;
    /* showOffAxis: v2 stored boolean (true→"trueAngle", false→"off"),
       v3+ stores string "off"|"trueAngle"|"edge" */
    if (isOffAxisMode(p.showOffAxis)) {
      out.showOffAxis = p.showOffAxis;
    } else if (typeof p.showOffAxis === "boolean") {
      out.showOffAxis = p.showOffAxis ? "trueAngle" : "off";
    }
    if (isRayDensity(p.rayDensity)) out.rayDensity = p.rayDensity;
    if (typeof p.rayTracksF === "boolean") out.rayTracksF = p.rayTracksF;
    if (typeof p.showChromatic === "boolean") out.showChromatic = p.showChromatic;
    if (typeof p.chromR === "boolean") out.chromR = p.chromR;
    if (typeof p.chromG === "boolean") out.chromG = p.chromG;
    if (typeof p.chromB === "boolean") out.chromB = p.chromB;
    if (typeof p.chromV === "boolean") out.chromV = p.chromV;
    if (typeof p.showPupils === "boolean") out.showPupils = p.showPupils;
    if (typeof p.showCardinals === "boolean") out.showCardinals = p.showCardinals;
    if (typeof p.showCardinalFocal === "boolean") out.showCardinalFocal = p.showCardinalFocal;
    if (typeof p.showCardinalPrincipal === "boolean") out.showCardinalPrincipal = p.showCardinalPrincipal;
    if (typeof p.showCardinalNodal === "boolean") out.showCardinalNodal = p.showCardinalNodal;
    if (typeof p.showCardinalDimensions === "boolean") out.showCardinalDimensions = p.showCardinalDimensions;
    if (typeof p.showCardinalEfl === "boolean") out.showCardinalEfl = p.showCardinalEfl;
    if (typeof p.showCardinalBfd === "boolean") out.showCardinalBfd = p.showCardinalBfd;
    if (typeof p.showCardinalFfd === "boolean") out.showCardinalFfd = p.showCardinalFfd;
    if (typeof p.showCardinalHiatus === "boolean") out.showCardinalHiatus = p.showCardinalHiatus;
    if (typeof p.showCardinalTotalTrack === "boolean") out.showCardinalTotalTrack = p.showCardinalTotalTrack;
    /* Lens selection (lensKeyA, lensKeyB, comparing) is intentionally NOT
       restored from preferences — it comes from the URL so the homepage
       isn't hijacked by a previously-viewed lens. */
    if (p.scaleMode === "independent" || p.scaleMode === "normalized") out.scaleMode = p.scaleMode;
    if (isDesktopView(p.desktopView)) out.desktopView = p.desktopView;
    if (typeof p.focusExpanded === "boolean") out.focusExpanded = p.focusExpanded;
    if (typeof p.apertureExpanded === "boolean") out.apertureExpanded = p.apertureExpanded;
    if (typeof p.headerControlsExpanded === "boolean") out.headerControlsExpanded = p.headerControlsExpanded;
    if (typeof p.legendExpanded === "boolean") out.legendExpanded = p.legendExpanded;
    if (typeof p.headerInfoExpanded === "boolean") out.headerInfoExpanded = p.headerInfoExpanded;
    if (typeof p.abbeShowGlassType === "boolean") out.abbeShowGlassType = p.abbeShowGlassType;
    if (typeof p.showEffectiveAperture === "boolean") out.showEffectiveAperture = p.showEffectiveAperture;
    if (typeof p.aberrationsExpanded === "boolean") out.aberrationsExpanded = p.aberrationsExpanded;
    if (isAnalysisTabId(p.analysisDrawerTab)) out.analysisDrawerTab = p.analysisDrawerTab;
    return out;
  } catch {
    return {};
  }
}
