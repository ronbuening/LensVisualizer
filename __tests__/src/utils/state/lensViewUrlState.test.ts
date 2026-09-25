import { describe, expect, it } from "vitest";
import {
  buildLensViewQuery,
  lensViewQueryToUrlState,
  parseLensViewQuery,
  type LensViewQueryState,
} from "../../../../src/utils/state/lensViewUrlState.js";
import { MOVEMENT_SHIFT_ENVELOPE_MM, MOVEMENT_TILT_ENVELOPE_DEG } from "../../../../src/optics/lensMovement.js";

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

  it("round-trips a bounded v1 optical configuration key", () => {
    const configurationKey = "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr-tc-in";
    const params = buildLensViewQuery({ configurationKey });

    expect(params.toString()).toBe(`v=1&cfg=${configurationKey}`);
    expect(parseLensViewQuery(`?${params.toString()}`).configurationKey).toBe(configurationKey);
    expect(lensViewQueryToUrlState(parseLensViewQuery(`?${params.toString()}`)).configurationKey).toBe(
      configurationKey,
    );
  });

  it("rejects malformed, oversized, unversioned, and comparison configuration params", () => {
    expect(parseLensViewQuery("?v=1&cfg=../other-lens").configurationKey).toBeUndefined();
    expect(parseLensViewQuery(`?v=1&cfg=${"a".repeat(129)}`).configurationKey).toBeUndefined();
    expect(parseLensViewQuery("?cfg=valid-looking-key").configurationKey).toBeUndefined();
    expect(buildLensViewQuery({ comparing: true, configurationKey: "valid-looking-key" }).toString()).toBe("");
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

  it("round-trips signed centered aberration control positions", () => {
    const parsed = parseLensViewQuery("?aberration=-0.625");
    expect(parsed.aberration).toBe(-0.625);

    const params = buildLensViewQuery({ aberration: -0.625 });
    expect(params.toString()).toBe("aberration=-0.625");
  });

  it("clamps adversarial shift/tilt values to the movement envelope", () => {
    const huge = parseLensViewQuery("?shift=1e12&tilt=1e12");
    expect(huge.shift).toBe(MOVEMENT_SHIFT_ENVELOPE_MM[1]);
    expect(huge.tilt).toBe(MOVEMENT_TILT_ENVELOPE_DEG[1]);

    const negative = parseLensViewQuery("?shift=-1e12&tilt=-1e12");
    expect(negative.shift).toBe(MOVEMENT_SHIFT_ENVELOPE_MM[0]);
    expect(negative.tilt).toBe(MOVEMENT_TILT_ENVELOPE_DEG[0]);
  });

  it("passes in-envelope shift/tilt through unchanged and drops non-finite values", () => {
    const inRange = parseLensViewQuery("?shift=-11.5&tilt=8.25");
    expect(inRange.shift).toBe(-11.5);
    expect(inRange.tilt).toBe(8.25);

    const nonFinite = parseLensViewQuery("?shift=Infinity&tilt=NaN");
    expect(nonFinite).not.toHaveProperty("shift");
    expect(nonFinite).not.toHaveProperty("tilt");
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
      configurationKey: "example-configuration",
      sourceStateId: "example-configuration:near",
      comparisonFocusZoom: {
        mode: "independent",
        a: { focusT: 0.7123456789, zoomT: 1 / 3 },
        b: { focusT: 0.1, zoomT: 0.9 },
      },
      sourceStateIdA: "example-a:near",
      sourceStateIdB: "example-b:far",
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
    const {
      selectedElementIdA: _a,
      selectedElementIdB: _b,
      comparisonFocusZoom: _positions,
      sourceStateIdA: _stationA,
      sourceStateIdB: _stationB,
      ...singleLensFields
    } = fixture;
    expect(single).toMatchObject(singleLensFields);

    // Comparison mode serializes a_el/b_el instead of el and drops aberration.
    const comparing = parseLensViewQuery(`?${buildLensViewQuery({ ...fixture, comparing: true }).toString()}`);
    expect(comparing.selectedElementIdA).toBe(fixture.selectedElementIdA);
    expect(comparing.selectedElementIdB).toBe(fixture.selectedElementIdB);
    expect(comparing.selectedElementId).toBeUndefined();
    expect(comparing.comparisonFocusZoom).toEqual(fixture.comparisonFocusZoom);
    expect(comparing.sourceStateIdA).toBe(fixture.sourceStateIdA);
    expect(comparing.sourceStateIdB).toBe(fixture.sourceStateIdB);
  });

  it("ignores the removed beta bokeh overlay URL flag", () => {
    const state = parseLensViewQuery("?v=1&bo=1&ad=1&tab=bokeh");

    expect(state).not.toHaveProperty("bokehPreviewOpen");
    expect(state.analysisDrawerOpen).toBe(true);
    expect(state.analysisDrawerTab).toBe("bokeh");
  });
});

it("round-trips lens-scoped source identity only in version 1 single-lens links", () => {
  const sourceStateId = "synthetic-zoom:near";
  const params = buildLensViewQuery({ sourceStateId, focus: 0.7123456789 });
  expect(params.get("v")).toBe("1");
  expect(parseLensViewQuery(`?${params}`).sourceStateId).toBe(sourceStateId);
  expect(parseLensViewQuery("?ss=synthetic-zoom:near").sourceStateId).toBeUndefined();
  expect(parseLensViewQuery("?v=2&ss=synthetic-zoom:near").sourceStateId).toBeUndefined();
  expect(buildLensViewQuery({ comparing: true, sourceStateId }).has("ss")).toBe(false);
});

it("bounds independent coordinates and ignores unversioned, unknown-mode, and malformed identities", () => {
  const query = "fz=independent&a_focus=Infinity&a_zoom=-1&b_focus=2&b_zoom=NaN&a_ss=bad&b_ss=example-b:near";
  const parsed = parseLensViewQuery(`?v=1&${query}`);
  expect(parsed.comparisonFocusZoom).toEqual({
    mode: "independent",
    a: { focusT: 0, zoomT: 0 },
    b: { focusT: 1, zoomT: 0 },
  });
  expect(parsed.sourceStateIdA).toBeUndefined();
  expect(parsed.sourceStateIdB).toBe("example-b:near");
  for (const prefix of ["", "v=2&"])
    expect(parseLensViewQuery(`?${prefix}${query}`).comparisonFocusZoom).toBeUndefined();
  expect(parseLensViewQuery("?v=1&fz=unknown&a_ss=example-a:near").sourceStateIdA).toBeUndefined();
  const linked = buildLensViewQuery({ comparing: true, focus: 0.7123456789, comparisonFocusZoom: { mode: "linked" } });
  expect(linked.has("fz")).toBe(false);
  expect(parseLensViewQuery(`?${linked}`).focus).toBe(0.7123456789);
});
