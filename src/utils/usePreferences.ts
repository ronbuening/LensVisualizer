/**
 * Persists user preferences to localStorage whenever persistable state changes.
 *
 * Only writes the fields that should survive a page reload (lens selection,
 * display settings, ray toggles, panel expand states). Slider positions
 * and overlay visibility are intentionally excluded.
 */

import { useEffect, useRef } from "react";
import { PREFS_KEY } from "./preferences.js";
import type { LensState } from "../types/state.js";

export default function usePreferences(state: LensState): void {
  const { lens, display, rays, panels } = state;
  const prevRef = useRef<string | null>(null);

  useEffect(() => {
    const prefs = {
      v: 2,
      dark: display.dark,
      highContrast: display.highContrast,
      desktopView: display.desktopView,
      scaleMode: lens.scaleMode,
      showOnAxis: rays.showOnAxis,
      showOffAxis: rays.showOffAxis,
      rayDensity: rays.rayDensity,
      rayTracksF: rays.rayTracksF,
      showChromatic: rays.showChromatic,
      chromR: rays.chromR,
      chromG: rays.chromG,
      chromB: rays.chromB,
      showPupils: rays.showPupils,
      showCardinals: rays.showCardinals,
      showCardinalDimensions: rays.showCardinalDimensions,
      focusExpanded: panels.focusExpanded,
      apertureExpanded: panels.apertureExpanded,
      headerControlsExpanded: panels.headerControlsExpanded,
      legendExpanded: panels.legendExpanded,
      headerInfoExpanded: panels.headerInfoExpanded,
      abbeShowGlassType: panels.abbeShowGlassType,
      showEffectiveAperture: panels.showEffectiveAperture,
      aberrationsExpanded: panels.aberrationsExpanded,
      analysisDrawerTab: panels.analysisDrawerTab,
    };

    const json = JSON.stringify(prefs);
    if (json === prevRef.current) return;
    prevRef.current = json;

    try {
      localStorage.setItem(PREFS_KEY, json);
    } catch {
      /* private browsing or quota — ignore */
    }
  }, [lens, display, rays, panels]);
}
