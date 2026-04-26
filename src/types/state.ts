/**
 * Type definitions for state management: reducer state, actions, preferences.
 */

import type { SharedSlidersSlice, ComparisonAction } from "../comparison/comparisonTypes.js";

/* Re-export comparison types for backward compatibility */
export type { SharedSlidersSlice, ComparisonAction } from "../comparison/comparisonTypes.js";

/* ── State slices ── */

export interface LensSlice {
  lensKeyA: string;
  lensKeyB: string;
  comparing: boolean;
  scaleMode: "independent" | "normalized";
}

export interface DisplaySlice {
  dark: boolean | null; // null = auto (follow system preference)
  highContrast: boolean;
  mobileView: string;
  desktopView: string;
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

export interface RaysSlice {
  showOnAxis: boolean;
  showOffAxis: string;
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
  | "glassMapOpen"
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
  analysisDrawerTab: string;
  glassMapOpen: boolean;
  zoomPanActive: boolean;
  bokehPreviewOpen: boolean;
  selectedElementA: number | null;
  selectedElementB: number | null;
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
  | { type: "SET_MOBILE_VIEW"; mobileView: string }
  | { type: "SET_DESKTOP_VIEW"; desktopView: string }
  | { type: "SET_RAY_TOGGLE"; field: RayField; value: boolean | string }
  | { type: "SET_FOCUS_T"; value: number }
  | { type: "SET_ZOOM_T"; value: number }
  | { type: "SET_STOPDOWN_T"; value: number }
  | { type: "RESET_SLIDERS" }
  | { type: "SET_PANEL_EXPANDED"; panel: PanelField; expanded: boolean }
  | { type: "SET_SELECTED_ELEMENT"; panel: "a" | "b"; elementId: number | null }
  | { type: "SET_ANALYSIS_TAB"; tab: string }
  | { type: "SET_OVERLAY"; overlay: OverlayField; visible: boolean }
  | { type: "CLOSE_ALL_OVERLAYS" }
  | { type: "SWAP_LENSES" }
  | ComparisonAction;

/* ── Preferences (from localStorage) ── */

export interface Preferences {
  scaleMode: "independent" | "normalized";
  dark: boolean | null; // null = auto
  highContrast: boolean;
  desktopView: string;
  showOnAxis: boolean;
  showOffAxis: string;
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
  analysisDrawerTab: string;
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
  analysisDrawerOpen?: boolean;
  analysisDrawerTab?: string;
  glassMapOpen?: boolean;
  bokehPreviewOpen?: boolean;
  selectedElementA?: number;
  selectedElementB?: number;
}
