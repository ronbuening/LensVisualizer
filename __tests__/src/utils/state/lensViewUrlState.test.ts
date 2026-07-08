import { describe, expect, it } from "vitest";
import {
  buildLensViewQuery,
  lensViewQueryToUrlState,
  parseLensViewQuery,
  type LensViewQueryState,
} from "../../../../src/utils/state/lensViewUrlState.js";

describe("lensViewUrlState", () => {
  it("parses v1 single-lens view params", () => {
    const state = parseLensViewQuery(
      "?v=1&focus=0.25&aberration=0.75&aperture=0.5&zoom=70&el=12&gm=1&ad=1&tab=distortion&mv=zoom",
    );

    expect(state).toMatchObject({
      focus: 0.25,
      aberration: 0.75,
      aperture: 0.5,
      zoom: 70,
      selectedElementId: 12,
      glassMapOpen: true,
      analysisDrawerOpen: true,
      analysisDrawerTab: "distortion",
      groupMovementOpen: true,
      groupMovementMode: "zoom",
    });
  });

  it("parses v1 comparison element params", () => {
    const state = parseLensViewQuery("?v=1&a_el=3&b_el=7&gm=1");
    expect(state.selectedElementIdA).toBe(3);
    expect(state.selectedElementIdB).toBe(7);
    expect(state.glassMapOpen).toBe(true);
  });

  it("clamps sliders and ignores invalid v1 values", () => {
    const state = parseLensViewQuery(
      "?v=1&focus=-1&aberration=2&aperture=2&zoom=0&el=1.5&a_el=-2&gm=yes&bo=maybe&ad=no&tab=bogus&mv=bogus",
    );

    expect(state.focus).toBe(0);
    expect(state.aberration).toBe(1);
    expect(state.aperture).toBe(1);
    expect(state.zoom).toBeNull();
    expect(state.selectedElementId).toBeUndefined();
    expect(state.selectedElementIdA).toBeUndefined();
    expect(state.glassMapOpen).toBeUndefined();
    expect(state).not.toHaveProperty("bokehPreviewOpen");
    expect(state.analysisDrawerOpen).toBeUndefined();
    expect(state.analysisDrawerTab).toBeUndefined();
    expect(state.groupMovementOpen).toBeUndefined();
    expect(state.groupMovementMode).toBeUndefined();
  });

  it("honors stable slider params for unknown versions but ignores v1-only params", () => {
    const state = parseLensViewQuery(
      "?v=99&focus=0.4&aberration=0.6&aperture=0.3&zoom=50&shift=-4.5&tilt=3&el=2&gm=1&tab=coma",
    );
    expect(state).toEqual({ focus: 0.4, aberration: 0.6, aperture: 0.3, zoom: 50, shift: -4.5, tilt: 3 });
  });

  it("builds minimal single-lens query params", () => {
    const params = buildLensViewQuery({
      focus: 0.25,
      aberration: 0.75,
      aperture: 0,
      selectedElementId: 4,
      glassMapOpen: true,
      analysisDrawerOpen: true,
      analysisDrawerTab: "coma",
    });

    expect(params.toString()).toBe("v=1&focus=0.250&aberration=0.750&el=4&gm=1&ad=1&tab=coma");
  });

  it("round-trips the summary analysis tab", () => {
    const parsed = parseLensViewQuery("?v=1&ad=1&tab=summary");
    expect(parsed.analysisDrawerOpen).toBe(true);
    expect(parsed.analysisDrawerTab).toBe("summary");

    const params = buildLensViewQuery({ analysisDrawerOpen: true, analysisDrawerTab: "summary" });
    expect(params.toString()).toBe("v=1&ad=1&tab=summary");
  });

  it("round-trips the chromatic analysis tab", () => {
    const parsed = parseLensViewQuery("?v=1&ad=1&tab=chromatic");
    expect(parsed.analysisDrawerOpen).toBe(true);
    expect(parsed.analysisDrawerTab).toBe("chromatic");

    const params = buildLensViewQuery({ analysisDrawerOpen: true, analysisDrawerTab: "chromatic" });
    expect(params.toString()).toBe("v=1&ad=1&tab=chromatic");
  });

  it("builds minimal comparison query params", () => {
    const params = buildLensViewQuery({
      comparing: true,
      selectedElementId: 4,
      selectedElementIdA: 2,
      selectedElementIdB: 9,
    });

    expect(params.toString()).toBe("v=1&a_el=2&b_el=9");
  });

  it("omits defaults and unimplemented ai state", () => {
    const params = buildLensViewQuery({
      focus: 0,
      aberration: 0,
      aperture: 0,
      zoom: null,
      glassMapOpen: false,
      analysisDrawerOpen: false,
      analysisDrawerTab: "distortion",
    });

    expect(params.toString()).toBe("");
  });

  it("round-trips chromatic and Petzval overlay flags", () => {
    const parsed = parseLensViewQuery("?v=1&chr=1&ptz=1");
    expect(parsed.chromaticOverlayOpen).toBe(true);
    expect(parsed.petzvalOverlayOpen).toBe(true);

    const params = buildLensViewQuery({ chromaticOverlayOpen: true, petzvalOverlayOpen: true });
    expect(params.toString()).toBe("v=1&chr=1&ptz=1");
  });

  it("round-trips signed perspective-control movement", () => {
    const parsed = parseLensViewQuery("?shift=-11.5&tilt=8.25");
    expect(parsed.shift).toBe(-11.5);
    expect(parsed.tilt).toBe(8.25);

    const params = buildLensViewQuery({ shift: -11.5, tilt: 8.25 });
    expect(params.toString()).toBe("shift=-11.50&tilt=8.25");
  });

  it("round-trips group movement overlay mode", () => {
    const parsed = parseLensViewQuery("?v=1&mv=combined");
    expect(parsed.groupMovementOpen).toBe(true);
    expect(parsed.groupMovementMode).toBe("combined");

    const params = buildLensViewQuery({ groupMovementOpen: true, groupMovementMode: "focus" });
    expect(params.toString()).toBe("v=1&mv=focus");
  });

  it("can materialize defaults for popstate hydration", () => {
    const state = lensViewQueryToUrlState(parseLensViewQuery(""), true);
    expect(state).toMatchObject({
      focus: 0,
      aberration: 0,
      aperture: 0,
      zoom: 0,
      shift: 0,
      tilt: 0,
      selectedElementId: null,
      selectedElementIdA: null,
      selectedElementIdB: null,
      glassMapOpen: false,
      chromaticOverlayOpen: false,
      petzvalOverlayOpen: false,
      analysisDrawerOpen: false,
      analysisDrawerTab: "aberrations",
      groupMovementOpen: false,
      groupMovementMode: "focus",
    });
  });

  it("round-trips every shareable view-state field (completeness guard)", () => {
    // Required<LensViewQueryState> makes this fixture fail `npm run typecheck`
    // whenever a new shareable field is added to the query state without being
    // exercised here — extend the fixture AND the assertions below together.
    // Values are chosen to survive the builder's toFixed() rounding and to be
    // non-default so every field actually serializes.
    const fixture: Required<LensViewQueryState> = {
      focus: 0.25,
      aberration: 0.75,
      aperture: 0.5,
      zoom: 70,
      shift: -4.5,
      tilt: 3.25,
      selectedElementId: 4,
      selectedElementIdA: 2,
      selectedElementIdB: 9,
      glassMapOpen: true,
      chromaticOverlayOpen: true,
      petzvalOverlayOpen: true,
      analysisDrawerOpen: true,
      analysisDrawerTab: "distortion",
      groupMovementOpen: true,
      groupMovementMode: "zoom",
    };

    const single = parseLensViewQuery(`?${buildLensViewQuery(fixture).toString()}`);
    const { selectedElementIdA: _a, selectedElementIdB: _b, ...singleLensFields } = fixture;
    expect(single).toMatchObject(singleLensFields);

    // Comparison mode serializes a_el/b_el instead of el and drops aberration.
    const comparing = parseLensViewQuery(`?${buildLensViewQuery({ ...fixture, comparing: true }).toString()}`);
    expect(comparing.selectedElementIdA).toBe(fixture.selectedElementIdA);
    expect(comparing.selectedElementIdB).toBe(fixture.selectedElementIdB);
    expect(comparing.selectedElementId).toBeUndefined();
  });

  it("ignores the removed beta bokeh overlay URL flag", () => {
    const state = parseLensViewQuery("?v=1&bo=1&ad=1&tab=bokeh");

    expect(state).not.toHaveProperty("bokehPreviewOpen");
    expect(state.analysisDrawerOpen).toBe(true);
    expect(state.analysisDrawerTab).toBe("bokeh");
  });
});
