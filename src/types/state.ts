/**
 * Type definitions for state management: reducer state, actions, preferences.
 */

import type { SharedSlidersSlice, ComparisonAction } from "../comparison/comparisonTypes.js";

/* Re-export comparison types for backward compatibility */
export type { SharedSlidersSlice, ComparisonAction } from "../comparison/comparisonTypes.js";

/* ── State slices ── */

export const OFF_AXIS_MODES = ["off", "trueAngle", "edge"] as const;
export const MOBILE_VIEWS = ["diagram", "description"] as const;
export const DESKTOP_VIEWS = ["diagram", "both", "analysis"] as const;
export const ANALYSIS_TAB_IDS = ["aberrations", "coma", "distortion", "breathing", "vignetting", "pupils"] as const;

export type OffAxisMode = (typeof OFF_AXIS_MODES)[number];
export type MobileView = (typeof MOBILE_VIEWS)[number];
export type DesktopView = (typeof DESKTOP_VIEWS)[number];
export type AnalysisTabId = (typeof ANALYSIS_TAB_IDS)[number];

export function isOffAxisMode(value: unknown): value is OffAxisMode {
  return typeof value === "string" && (OFF_AXIS_MODES as readonly string[]).includes(value);
}

export function isMobileView(value: unknown): value is MobileView {
  return typeof value === "string" && (MOBILE_VIEWS as readonly string[]).includes(value);
}

export function isDesktopView(value: unknown): value is DesktopView {
  return typeof value === "string" && (DESKTOP_VIEWS as readonly string[]).includes(value);
}

export function isAnalysisTabId(value: unknown): value is AnalysisTabId {
  return typeof value === "string" && (ANALYSIS_TAB_IDS as readonly string[]).includes(value);
}

export interface LensSlice {
  lensKeyA: string;
  lensKeyB: string;
  comparing: boolean;
  scaleMode: "independent" | "normalized";
}

export interface DisplaySlice {
  dark: boolean | null; // null = auto (follow system preference)
  highContrast: boolean;
  mobileView: MobileView;
  desktopView: DesktopView;
}

export type RayField =
  | "showOnAxis"
  | "showOffAxis"
  | "rayTracksF"
  | "showChromatic"
  | "chromR"
  | "chromG"
  | "chromB"
  | "showPupils";
export type BooleanRayField = Exclude<RayField, "showOffAxis">;

export interface RaysSlice {
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  rayTracksF: boolean;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  showPupils: boolean;
}

export interface SlidersSlice {
  focusT: number;
  zoomT: number;
  stopdownT: number;
}

export type PanelField =
  | "focusExpanded"
  | "apertureExpanded"
  | "headerControlsExpanded"
  | "legendExpanded"
  | "headerInfoExpanded"
  | "abbeShowGlassType"
  | "showEffectiveAperture"
  | "aberrationsExpanded"
  | "analysisDrawerOpen"
  | "zoomPanActive"
  | "bokehPreviewOpen";

export interface PanelsSlice {
  focusExpanded: boolean;
  apertureExpanded: boolean;
  headerControlsExpanded: boolean;
  legendExpanded: boolean;
  headerInfoExpanded: boolean;
  abbeShowGlassType: boolean;
  showEffectiveAperture: boolean;
  aberrationsExpanded: boolean;
  analysisDrawerOpen: boolean;
  analysisDrawerTab: AnalysisTabId;
  zoomPanActive: boolean;
  bokehPreviewOpen: boolean;
}

export type OverlayField = "showAbout" | "showAboutSite" | "showOpticsPrimer" | "showAberrationsPrimer";

export interface OverlaysSlice {
  showAbout: boolean;
  showAboutSite: boolean;
  showOpticsPrimer: boolean;
  showAberrationsPrimer: boolean;
}

export interface LensState {
  lens: LensSlice;
  display: DisplaySlice;
  rays: RaysSlice;
  sliders: SlidersSlice;
  sharedSliders: SharedSlidersSlice;
  panels: PanelsSlice;
  overlays: OverlaysSlice;
}

/* ── Discriminated union actions ── */

export type LensAction =
  | { type: "SET_LENS_A"; key: string }
  | { type: "SET_LENS_B"; key: string }
  | { type: "SET_DARK"; dark: boolean | null }
  | { type: "SET_HIGH_CONTRAST"; highContrast: boolean }
  | { type: "SET_MOBILE_VIEW"; mobileView: MobileView }
  | { type: "SET_DESKTOP_VIEW"; desktopView: DesktopView }
  | { type: "SET_RAY_TOGGLE"; field: "showOffAxis"; value: OffAxisMode }
  | { type: "SET_RAY_TOGGLE"; field: BooleanRayField; value: boolean }
  | { type: "SET_FOCUS_T"; value: number }
  | { type: "SET_ZOOM_T"; value: number }
  | { type: "SET_STOPDOWN_T"; value: number }
  | { type: "RESET_SLIDERS" }
  | { type: "SET_PANEL_EXPANDED"; panel: PanelField; expanded: boolean }
  | { type: "SET_ANALYSIS_TAB"; tab: AnalysisTabId }
  | { type: "SET_OVERLAY"; overlay: OverlayField; visible: boolean }
  | { type: "CLOSE_ALL_OVERLAYS" }
  | { type: "SWAP_LENSES" }
  | ComparisonAction;

/* ── Preferences (from localStorage) ── */

export interface Preferences {
  scaleMode: "independent" | "normalized";
  dark: boolean | null; // null = auto
  highContrast: boolean;
  desktopView: DesktopView;
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  rayTracksF: boolean;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  showPupils: boolean;
  focusExpanded: boolean;
  apertureExpanded: boolean;
  headerControlsExpanded: boolean;
  legendExpanded: boolean;
  headerInfoExpanded: boolean;
  abbeShowGlassType: boolean;
  showEffectiveAperture: boolean;
  aberrationsExpanded: boolean;
  analysisDrawerTab: AnalysisTabId;
}

/* ── URL state (from query params) ── */

export interface URLState {
  singleLens?: string;
  lensKeyA?: string;
  lensKeyB?: string;
  comparing?: boolean;
  focus?: number;
  aperture?: number;
  zoomA?: number;
  zoomB?: number;
}
