import { describe, it, expect, beforeEach } from "vitest";
import type { LensState, LensAction, RayField, PanelField, OverlayField, Preferences } from "../src/types/state.js";
import lensReducer, {
  createInitialState,
  SET_LENS_A,
  SET_LENS_B,
  SET_SCALE_MODE,
  SET_DARK,
  SET_HIGH_CONTRAST,
  SET_MOBILE_VIEW,
  SET_DESKTOP_VIEW,
  SET_RAY_TOGGLE,
  SET_FOCUS_T,
  SET_ZOOM_T,
  SET_STOPDOWN_T,
  SET_SHIFT_MM,
  SET_TILT_DEG,
  SET_SHARED_FOCUS_T,
  SET_SHARED_STOPDOWN_T,
  SET_SHARED_ZOOM_T,
  SET_SHARED_SHIFT_MM,
  SET_SHARED_TILT_DEG,
  RESET_SLIDERS,
  SET_PANEL_EXPANDED,
  SET_ANALYSIS_TAB,
  SET_SELECTED_ELEMENT,
  APPLY_URL_VIEW_STATE,
  SET_OVERLAY,
  CLOSE_ALL_OVERLAYS,
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "../src/utils/lensReducer.js";

const CATALOG_KEYS = ["nikon_58", "canon_50", "zeiss_35"];

/** Helper: build a default state for testing */
function makeState() {
  return createInitialState({}, {}, true, CATALOG_KEYS);
}

describe("createInitialState", () => {
  it("uses defaults when prefs and URL are empty", () => {
    const state = createInitialState({}, {}, true, CATALOG_KEYS);
    expect(state.lens.lensKeyA).toBe("nikon_58");
    expect(state.lens.lensKeyB).toBe("canon_50");
    expect(state.lens.comparing).toBe(false);
    expect(state.lens.scaleMode).toBe("independent");
    expect(state.sliders.focusT).toBe(0);
    expect(state.sliders.zoomT).toBe(0);
    expect(state.sliders.stopdownT).toBe(0);
    expect(state.sliders.shiftMm).toBe(0);
    expect(state.sliders.tiltDeg).toBe(0);
    expect(state.rays.showOnAxis).toBe(true);
    expect(state.rays.showOffAxis).toBe("off");
    expect(state.panels.focusExpanded).toBe(true); // isWide = true
    expect(state.panels.analysisDrawerOpen).toBe(false);
    expect(state.panels.analysisDrawerTab).toBe("aberrations");
    expect(state.panels.zoomPanActive).toBe(false);
    expect(state.panels.glassMapOpen).toBe(false);
    expect(state.panels.selectedElementId).toBeNull();
    expect(state.overlays.showAbout).toBe(false);
  });

  it("URL params override prefs", () => {
    const prefs = {};
    const urlState = { singleLens: "zeiss_35", focus: 0.5, aperture: 0.3, shift: -4, tilt: 2 };
    const state = createInitialState(prefs, urlState, true, CATALOG_KEYS);
    expect(state.lens.lensKeyA).toBe("zeiss_35");
    expect(state.sliders.focusT).toBe(0.5);
    expect(state.sliders.stopdownT).toBe(0.3);
    expect(state.sliders.shiftMm).toBe(-4);
    expect(state.sliders.tiltDeg).toBe(2);
  });

  it("hydrates shareable panel state from URL params", () => {
    const urlState = {
      selectedElementId: 2,
      glassMapOpen: true,
      bokehPreviewOpen: true,
      analysisDrawerOpen: true,
      analysisDrawerTab: "distortion" as const,
    };
    const state = createInitialState({}, urlState, true, CATALOG_KEYS);
    expect(state.panels.selectedElementId).toBe(2);
    expect(state.panels.glassMapOpen).toBe(true);
    expect(state.panels.bokehPreviewOpen).toBe(true);
    expect(state.panels.analysisDrawerOpen).toBe(true);
    expect(state.panels.analysisDrawerTab).toBe("distortion");
  });

  it("prefs override defaults", () => {
    const prefs = { dark: false, showOnAxis: false, desktopView: "diagram" } satisfies Partial<Preferences>;
    const state = createInitialState(prefs, {}, false, CATALOG_KEYS);
    expect(state.display.dark).toBe(false);
    expect(state.rays.showOnAxis).toBe(false);
    expect(state.display.desktopView).toBe("diagram");
  });

  it("comparison URL sets shared sliders from URL params", () => {
    const urlState = {
      comparing: true,
      lensKeyA: "nikon_58",
      lensKeyB: "canon_50",
      focus: 0.7,
      aperture: 0.4,
      shift: 3,
      tilt: -2,
    };
    const state = createInitialState({}, urlState, true, CATALOG_KEYS);
    expect(state.lens.comparing).toBe(true);
    expect(state.sharedSliders.sharedFocusT).toBe(0.7);
    expect(state.sharedSliders.sharedStopdownT).toBe(0.4);
    expect(state.sharedSliders.sharedShiftMm).toBe(3);
    expect(state.sharedSliders.sharedTiltDeg).toBe(-2);
  });

  it("non-comparison URL does not set shared sliders", () => {
    const urlState = { comparing: false, focus: 0.5 };
    const state = createInitialState({}, urlState, true, CATALOG_KEYS);
    expect(state.sharedSliders.sharedFocusT).toBe(0);
    expect(state.sharedSliders.sharedStopdownT).toBe(0);
    expect(state.sharedSliders.sharedShiftMm).toBe(0);
    expect(state.sharedSliders.sharedTiltDeg).toBe(0);
  });

  it("panel expanded defaults to isWide", () => {
    const narrow = createInitialState({}, {}, false, CATALOG_KEYS);
    expect(narrow.panels.focusExpanded).toBe(false);
    expect(narrow.panels.apertureExpanded).toBe(false);

    const wide = createInitialState({}, {}, true, CATALOG_KEYS);
    expect(wide.panels.focusExpanded).toBe(true);
    expect(wide.panels.apertureExpanded).toBe(true);
  });

  it("lensKeyB defaults to second catalog entry", () => {
    const state = createInitialState({}, {}, true, ["only_one"]);
    expect(state.lens.lensKeyB).toBe("only_one"); // Math.min(1, 0) = 0
  });
});

describe("lensReducer", () => {
  let state: LensState;
  beforeEach(() => {
    state = makeState();
  });

  /* ── Lens selection ── */
  describe("SET_LENS_A", () => {
    it("updates lensKeyA", () => {
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.lens.lensKeyA).toBe("canon_50");
    });

    it("resets sliders in single mode", () => {
      state.sliders = { focusT: 0.5, zoomT: 0.3, stopdownT: 0.2, shiftMm: 5, tiltDeg: -2 };
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.sliders).toEqual({ focusT: 0, zoomT: 0, stopdownT: 0, shiftMm: 0, tiltDeg: 0 });
    });

    it("does NOT reset sliders in comparison mode", () => {
      state.lens.comparing = true;
      state.sliders = { focusT: 0.5, zoomT: 0.3, stopdownT: 0.2, shiftMm: 5, tiltDeg: -2 };
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.sliders.focusT).toBe(0.5);
      expect(next.sliders.shiftMm).toBe(5);
    });

    it("closes analysis drawer when switching lens in single mode", () => {
      state.panels = { ...state.panels, analysisDrawerOpen: true };
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.panels.analysisDrawerOpen).toBe(false);
    });

    it("clears single-lens shareable panel state when switching lens in single mode", () => {
      state.panels = {
        ...state.panels,
        glassMapOpen: true,
        lcaOverlayOpen: true,
        petzvalOverlayOpen: true,
        bokehPreviewOpen: true,
        selectedElementId: 2,
      };
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.panels.glassMapOpen).toBe(false);
      expect(next.panels.lcaOverlayOpen).toBe(false);
      expect(next.panels.petzvalOverlayOpen).toBe(false);
      expect(next.panels.bokehPreviewOpen).toBe(false);
      expect(next.panels.selectedElementId).toBeNull();
    });

    it("clears pane A selection when switching lens A in comparison mode", () => {
      state.lens.comparing = true;
      state.panels = { ...state.panels, selectedElementIdA: 2, selectedElementIdB: 3 };
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.panels.selectedElementIdA).toBeNull();
      expect(next.panels.selectedElementIdB).toBe(3);
    });

    it("exits zoom/pan mode when switching lens in single mode", () => {
      state.panels = { ...state.panels, zoomPanActive: true };
      const next = lensReducer(state, { type: SET_LENS_A, key: "canon_50" });
      expect(next.panels.zoomPanActive).toBe(false);
    });
  });

  describe("SET_LENS_B", () => {
    it("updates lensKeyB", () => {
      const next = lensReducer(state, { type: SET_LENS_B, key: "zeiss_35" });
      expect(next.lens.lensKeyB).toBe("zeiss_35");
    });

    it("clears pane B selection", () => {
      state.panels = { ...state.panels, selectedElementIdB: 3 };
      const next = lensReducer(state, { type: SET_LENS_B, key: "zeiss_35" });
      expect(next.panels.selectedElementIdB).toBeNull();
    });
  });

  describe("SET_SCALE_MODE", () => {
    it("updates scaleMode", () => {
      const next = lensReducer(state, { type: SET_SCALE_MODE, scaleMode: "normalized" });
      expect(next.lens.scaleMode).toBe("normalized");
    });
  });

  /* ── Display ── */
  describe("SET_DARK", () => {
    it("toggles dark mode", () => {
      const next = lensReducer(state, { type: SET_DARK, dark: false });
      expect(next.display.dark).toBe(false);
    });
  });

  describe("SET_HIGH_CONTRAST", () => {
    it("toggles high contrast", () => {
      const next = lensReducer(state, { type: SET_HIGH_CONTRAST, highContrast: true });
      expect(next.display.highContrast).toBe(true);
    });
  });

  describe("SET_MOBILE_VIEW", () => {
    it("sets mobile view", () => {
      const next = lensReducer(state, { type: SET_MOBILE_VIEW, mobileView: "description" });
      expect(next.display.mobileView).toBe("description");
    });
  });

  describe("SET_DESKTOP_VIEW", () => {
    it("sets desktop view", () => {
      const next = lensReducer(state, { type: SET_DESKTOP_VIEW, desktopView: "analysis" });
      expect(next.display.desktopView).toBe("analysis");
    });
  });

  /* ── Ray toggles ── */
  describe("SET_RAY_TOGGLE", () => {
    it("sets valid ray field", () => {
      const next = lensReducer(state, { type: SET_RAY_TOGGLE, field: "showOnAxis", value: false });
      expect(next.rays.showOnAxis).toBe(false);
    });

    it("sets showOffAxis string value", () => {
      const next = lensReducer(state, { type: SET_RAY_TOGGLE, field: "showOffAxis", value: "trueAngle" });
      expect(next.rays.showOffAxis).toBe("trueAngle");
    });

    it("ignores invalid field", () => {
      const action = { type: SET_RAY_TOGGLE, field: "invalidField" as RayField, value: true } as unknown as LensAction;
      const next = lensReducer(state, action);
      expect(next).toBe(state); // same reference = no change
    });
  });

  /* ── Single-lens sliders ── */
  describe("SET_FOCUS_T", () => {
    it("sets focusT", () => {
      const next = lensReducer(state, { type: SET_FOCUS_T, value: 0.75 });
      expect(next.sliders.focusT).toBe(0.75);
    });
  });

  describe("SET_ZOOM_T", () => {
    it("sets zoomT", () => {
      const next = lensReducer(state, { type: SET_ZOOM_T, value: 0.5 });
      expect(next.sliders.zoomT).toBe(0.5);
    });
  });

  describe("SET_STOPDOWN_T", () => {
    it("sets stopdownT", () => {
      const next = lensReducer(state, { type: SET_STOPDOWN_T, value: 0.3 });
      expect(next.sliders.stopdownT).toBe(0.3);
    });
  });

  describe("SET_SHIFT_MM", () => {
    it("sets shiftMm", () => {
      const next = lensReducer(state, { type: SET_SHIFT_MM, value: -6.5 });
      expect(next.sliders.shiftMm).toBe(-6.5);
    });
  });

  describe("SET_TILT_DEG", () => {
    it("sets tiltDeg", () => {
      const next = lensReducer(state, { type: SET_TILT_DEG, value: 4.5 });
      expect(next.sliders.tiltDeg).toBe(4.5);
    });
  });

  describe("RESET_SLIDERS", () => {
    it("resets all sliders to 0", () => {
      state.sliders = { focusT: 0.5, zoomT: 0.3, stopdownT: 0.2, shiftMm: 5, tiltDeg: -3 };
      const next = lensReducer(state, { type: RESET_SLIDERS });
      expect(next.sliders).toEqual({ focusT: 0, zoomT: 0, stopdownT: 0, shiftMm: 0, tiltDeg: 0 });
    });
  });

  /* ── Shared sliders ── */
  describe("SET_SHARED_FOCUS_T", () => {
    it("sets sharedFocusT", () => {
      const next = lensReducer(state, { type: SET_SHARED_FOCUS_T, value: 0.6 });
      expect(next.sharedSliders.sharedFocusT).toBe(0.6);
    });
  });

  describe("SET_SHARED_STOPDOWN_T", () => {
    it("sets sharedStopdownT", () => {
      const next = lensReducer(state, { type: SET_SHARED_STOPDOWN_T, value: 0.4 });
      expect(next.sharedSliders.sharedStopdownT).toBe(0.4);
    });
  });

  describe("SET_SHARED_ZOOM_T", () => {
    it("sets sharedZoomT", () => {
      const next = lensReducer(state, { type: SET_SHARED_ZOOM_T, value: 0.8 });
      expect(next.sharedSliders.sharedZoomT).toBe(0.8);
    });
  });

  describe("SET_SHARED_SHIFT_MM", () => {
    it("sets sharedShiftMm", () => {
      const next = lensReducer(state, { type: SET_SHARED_SHIFT_MM, value: 7 });
      expect(next.sharedSliders.sharedShiftMm).toBe(7);
    });
  });

  describe("SET_SHARED_TILT_DEG", () => {
    it("sets sharedTiltDeg", () => {
      const next = lensReducer(state, { type: SET_SHARED_TILT_DEG, value: -5 });
      expect(next.sharedSliders.sharedTiltDeg).toBe(-5);
    });
  });

  /* ── Panels ── */
  describe("SET_PANEL_EXPANDED", () => {
    it("sets valid panel", () => {
      const next = lensReducer(state, { type: SET_PANEL_EXPANDED, panel: "focusExpanded", expanded: false });
      expect(next.panels.focusExpanded).toBe(false);
    });

    it("ignores invalid panel", () => {
      const next = lensReducer(state, { type: SET_PANEL_EXPANDED, panel: "bogus" as PanelField, expanded: true });
      expect(next).toBe(state);
    });

    it("toggles aberrationsExpanded", () => {
      expect(state.panels.aberrationsExpanded).toBe(true);
      const next = lensReducer(state, {
        type: SET_PANEL_EXPANDED,
        panel: "aberrationsExpanded",
        expanded: false,
      });
      expect(next.panels.aberrationsExpanded).toBe(false);
    });

    it("toggles analysisDrawerOpen", () => {
      expect(state.panels.analysisDrawerOpen).toBe(false);
      const next = lensReducer(state, {
        type: SET_PANEL_EXPANDED,
        panel: "analysisDrawerOpen",
        expanded: true,
      });
      expect(next.panels.analysisDrawerOpen).toBe(true);
    });

    it("toggles zoomPanActive", () => {
      expect(state.panels.zoomPanActive).toBe(false);
      const next = lensReducer(state, {
        type: SET_PANEL_EXPANDED,
        panel: "zoomPanActive",
        expanded: true,
      });
      expect(next.panels.zoomPanActive).toBe(true);
    });

    it("toggles glassMapOpen", () => {
      expect(state.panels.glassMapOpen).toBe(false);
      const next = lensReducer(state, {
        type: SET_PANEL_EXPANDED,
        panel: "glassMapOpen",
        expanded: true,
      });
      expect(next.panels.glassMapOpen).toBe(true);
    });
  });

  /* ── Analysis drawer tab ── */
  describe("SET_ANALYSIS_TAB", () => {
    it("updates analysisDrawerTab", () => {
      expect(state.panels.analysisDrawerTab).toBe("aberrations");
      const next = lensReducer(state, { type: SET_ANALYSIS_TAB, tab: "distortion" });
      expect(next.panels.analysisDrawerTab).toBe("distortion");
    });

    it("accepts the breathing analysis tab", () => {
      const next = lensReducer(state, { type: SET_ANALYSIS_TAB, tab: "breathing" });
      expect(next.panels.analysisDrawerTab).toBe("breathing");
    });
  });

  describe("URL view state actions", () => {
    it("sets single and comparison selected element state", () => {
      let next = lensReducer(state, { type: SET_SELECTED_ELEMENT, panelId: "main", elementId: 2 });
      expect(next.panels.selectedElementId).toBe(2);

      next = lensReducer(next, { type: SET_SELECTED_ELEMENT, panelId: "a", elementId: 4 });
      next = lensReducer(next, { type: SET_SELECTED_ELEMENT, panelId: "b", elementId: 6 });
      expect(next.panels.selectedElementIdA).toBe(4);
      expect(next.panels.selectedElementIdB).toBe(6);
    });

    it("sets shared glass map open state", () => {
      const next = lensReducer(state, { type: SET_PANEL_EXPANDED, panel: "glassMapOpen", expanded: true });
      expect(next.panels.glassMapOpen).toBe(true);
    });

    it("applies URL view state in single-lens mode", () => {
      const next = lensReducer(state, {
        type: APPLY_URL_VIEW_STATE,
        state: {
          focus: 0.4,
          aperture: 0.2,
          shift: -5,
          tilt: 6,
          selectedElementId: 5,
          glassMapOpen: true,
          bokehPreviewOpen: true,
          analysisDrawerOpen: true,
          analysisDrawerTab: "pupils",
        },
      });
      expect(next.sliders.focusT).toBe(0.4);
      expect(next.sliders.stopdownT).toBe(0.2);
      expect(next.sliders.shiftMm).toBe(-5);
      expect(next.sliders.tiltDeg).toBe(6);
      expect(next.panels.selectedElementId).toBe(5);
      expect(next.panels.glassMapOpen).toBe(true);
      expect(next.panels.bokehPreviewOpen).toBe(true);
      expect(next.panels.analysisDrawerOpen).toBe(true);
      expect(next.panels.analysisDrawerTab).toBe("pupils");
    });

    it("applies shared slider and per-pane selection state in comparison mode", () => {
      state.lens.comparing = true;
      const next = lensReducer(state, {
        type: APPLY_URL_VIEW_STATE,
        state: { focus: 0.4, aperture: 0.2, shift: 4, tilt: -3, selectedElementIdA: 1, selectedElementIdB: 3 },
      });
      expect(next.sharedSliders.sharedFocusT).toBe(0.4);
      expect(next.sharedSliders.sharedStopdownT).toBe(0.2);
      expect(next.sharedSliders.sharedShiftMm).toBe(4);
      expect(next.sharedSliders.sharedTiltDeg).toBe(-3);
      expect(next.panels.selectedElementIdA).toBe(1);
      expect(next.panels.selectedElementIdB).toBe(3);
    });
  });

  /* ── Overlays ── */
  describe("SET_OVERLAY", () => {
    it("opens overlay", () => {
      const next = lensReducer(state, { type: SET_OVERLAY, overlay: "showAbout", visible: true });
      expect(next.overlays.showAbout).toBe(true);
    });

    it("opens optics primer overlay", () => {
      const next = lensReducer(state, { type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: true });
      expect(next.overlays.showOpticsPrimer).toBe(true);
    });

    it("ignores invalid overlay", () => {
      const next = lensReducer(state, { type: SET_OVERLAY, overlay: "showFoo" as OverlayField, visible: true });
      expect(next).toBe(state);
    });
  });

  describe("CLOSE_ALL_OVERLAYS", () => {
    it("closes all overlays", () => {
      state.overlays = { showAbout: true, showAboutSite: true, showOpticsPrimer: true, showAberrationsPrimer: true };
      const next = lensReducer(state, { type: CLOSE_ALL_OVERLAYS });
      expect(next.overlays.showAbout).toBe(false);
      expect(next.overlays.showAboutSite).toBe(false);
      expect(next.overlays.showOpticsPrimer).toBe(false);
      expect(next.overlays.showAberrationsPrimer).toBe(false);
    });
  });

  /* ── Comparison mode transitions ── */
  describe("ENTER_COMPARE", () => {
    it("sets comparing to true and resets shared sliders", () => {
      state.sharedSliders = {
        sharedFocusT: 0.5,
        sharedStopdownT: 0.3,
        sharedZoomT: 0.2,
        sharedShiftMm: 7,
        sharedTiltDeg: -4,
      };
      const next = lensReducer(state, { type: ENTER_COMPARE, catalogKeys: CATALOG_KEYS });
      expect(next.lens.comparing).toBe(true);
      expect(next.sharedSliders).toEqual({
        sharedFocusT: 0,
        sharedStopdownT: 0,
        sharedZoomT: 0,
        sharedShiftMm: 0,
        sharedTiltDeg: 0,
      });
    });

    it("picks next lens if A===B", () => {
      state.lens.lensKeyA = "nikon_58";
      state.lens.lensKeyB = "nikon_58";
      const next = lensReducer(state, { type: ENTER_COMPARE, catalogKeys: CATALOG_KEYS });
      expect(next.lens.lensKeyB).toBe("canon_50"); // index 1
    });

    it("wraps around catalog if A is last entry", () => {
      state.lens.lensKeyA = "zeiss_35";
      state.lens.lensKeyB = "zeiss_35";
      const next = lensReducer(state, { type: ENTER_COMPARE, catalogKeys: CATALOG_KEYS });
      expect(next.lens.lensKeyB).toBe("nikon_58"); // wraps to 0
    });

    it("does not change lensKeyB when A !== B", () => {
      state.lens.lensKeyA = "nikon_58";
      state.lens.lensKeyB = "canon_50";
      const next = lensReducer(state, { type: ENTER_COMPARE, catalogKeys: CATALOG_KEYS });
      expect(next.lens.lensKeyB).toBe("canon_50");
    });
  });

  describe("EXIT_COMPARE", () => {
    it("sets comparing to false and maps shared values back", () => {
      state.lens.comparing = true;
      const next = lensReducer(state, { type: EXIT_COMPARE, focusA: 0.3, stopdownA: 0.5, shiftA: 6, tiltA: -2 });
      expect(next.lens.comparing).toBe(false);
      expect(next.sliders.focusT).toBe(0.3);
      expect(next.sliders.stopdownT).toBe(0.5);
      expect(next.sliders.shiftMm).toBe(6);
      expect(next.sliders.tiltDeg).toBe(-2);
    });

    it("keeps existing slider values when payload is undefined", () => {
      state.lens.comparing = true;
      state.sliders = { focusT: 0.2, zoomT: 0.1, stopdownT: 0.4, shiftMm: 3, tiltDeg: 4 };
      const next = lensReducer(state, { type: EXIT_COMPARE });
      expect(next.sliders.focusT).toBe(0.2);
      expect(next.sliders.stopdownT).toBe(0.4);
      expect(next.sliders.shiftMm).toBe(3);
      expect(next.sliders.tiltDeg).toBe(4);
    });

    it("preserves zoomT on exit", () => {
      state.lens.comparing = true;
      state.sliders.zoomT = 0.7;
      const next = lensReducer(state, { type: EXIT_COMPARE, focusA: 0, stopdownA: 0 });
      expect(next.sliders.zoomT).toBe(0.7);
    });
  });

  /* ── Immutability ── */
  describe("immutability", () => {
    it("returns same reference for unknown action", () => {
      const next = lensReducer(state, { type: "UNKNOWN_ACTION" } as unknown as LensAction);
      expect(next).toBe(state);
    });

    it("produces new top-level object on change", () => {
      const next = lensReducer(state, { type: SET_DARK, dark: !state.display.dark });
      expect(next).not.toBe(state);
      expect(next.display).not.toBe(state.display);
    });

    it("does not mutate unchanged slices", () => {
      const next = lensReducer(state, { type: SET_DARK, dark: !state.display.dark });
      expect(next.lens).toBe(state.lens);
      expect(next.rays).toBe(state.rays);
      expect(next.sliders).toBe(state.sliders);
    });
  });
});

/* ── Action constant exhaustiveness ── */
describe("lensReducer — action constant exports", () => {
  it("exports all 27 expected action type constants", () => {
    const EXPECTED = [
      SET_LENS_A,
      SET_LENS_B,
      SET_SCALE_MODE,
      SET_DARK,
      SET_HIGH_CONTRAST,
      SET_MOBILE_VIEW,
      SET_DESKTOP_VIEW,
      SET_RAY_TOGGLE,
      SET_FOCUS_T,
      SET_ZOOM_T,
      SET_STOPDOWN_T,
      SET_SHIFT_MM,
      SET_TILT_DEG,
      SET_SHARED_FOCUS_T,
      SET_SHARED_STOPDOWN_T,
      SET_SHARED_ZOOM_T,
      SET_SHARED_SHIFT_MM,
      SET_SHARED_TILT_DEG,
      RESET_SLIDERS,
      SET_PANEL_EXPANDED,
      SET_ANALYSIS_TAB,
      SET_SELECTED_ELEMENT,
      APPLY_URL_VIEW_STATE,
      SET_OVERLAY,
      CLOSE_ALL_OVERLAYS,
      ENTER_COMPARE,
      EXIT_COMPARE,
    ];
    // Each constant must be a non-empty string
    for (const c of EXPECTED) {
      expect(typeof c).toBe("string");
      expect(c.length).toBeGreaterThan(0);
    }
    // The full set must be exactly 27 unique values
    expect(new Set(EXPECTED).size).toBe(27);
  });

  it("every action constant's string value matches its export name", () => {
    const constants = {
      SET_LENS_A,
      SET_LENS_B,
      SET_SCALE_MODE,
      SET_DARK,
      SET_HIGH_CONTRAST,
      SET_MOBILE_VIEW,
      SET_DESKTOP_VIEW,
      SET_RAY_TOGGLE,
      SET_FOCUS_T,
      SET_ZOOM_T,
      SET_STOPDOWN_T,
      SET_SHIFT_MM,
      SET_TILT_DEG,
      SET_SHARED_FOCUS_T,
      SET_SHARED_STOPDOWN_T,
      SET_SHARED_ZOOM_T,
      SET_SHARED_SHIFT_MM,
      SET_SHARED_TILT_DEG,
      RESET_SLIDERS,
      SET_PANEL_EXPANDED,
      SET_ANALYSIS_TAB,
      SET_SELECTED_ELEMENT,
      APPLY_URL_VIEW_STATE,
      SET_OVERLAY,
      CLOSE_ALL_OVERLAYS,
      ENTER_COMPARE,
      EXIT_COMPARE,
    };
    for (const [name, value] of Object.entries(constants)) {
      expect(value).toBe(name);
    }
  });
});
