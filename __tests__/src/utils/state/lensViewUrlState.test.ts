import { describe, expect, it } from "vitest";
import {
  buildLensViewQuery,
  lensViewQueryToUrlState,
  parseLensViewQuery,
  type LensViewQueryState,
} from "../../../../src/utils/state/lensViewUrlState.js";
import { MOVEMENT_SHIFT_ENVELOPE_MM, MOVEMENT_TILT_ENVELOPE_DEG } from "../../../../src/optics/lensMovement.js";

describe("lensViewUrlState", () => {
  it.each([false, true])("restores precise slider selections without quantization (comparing: %s)", (comparing) => {
    const aperture = Math.log(8 / 4.6) / Math.log(54 / 4.6);
    const sliders = { focus: 2 / 3, aperture, aberration: -1 / 3, shift: 1 / 3, tilt: -1 / 3 };
    const restored = parseLensViewQuery(`?${buildLensViewQuery({ ...sliders, comparing })}`);
    expect(restored.focus).toBe(sliders.focus);
    expect(restored.aperture).toBe(aperture);
    expect(4.6 * Math.pow(54 / 4.6, restored.aperture!)).toBeCloseTo(8, 12);
    expect(restored.shift).toBe(sliders.shift);
    expect(restored.tilt).toBe(sliders.tilt);
    expect(restored.aberration).toBe(comparing ? null : sliders.aberration);
  });

  it("keeps historical rounded links valid and preserves values near the infinity threshold", () => {
    expect(parseLensViewQuery("?focus=0.500&aperture=0.250")).toMatchObject({ focus: 0.5, aperture: 0.25 });
    const focus = 0.003000000001;
    expect(parseLensViewQuery(`?${buildLensViewQuery({ focus })}`).focus).toBe(focus);
  });
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

  it("round-trips a v1 teleconverter key and applies the same bounds as cfg", () => {
    const teleconverterKey = "reference-xf-14x-teleconverter";
    const params = buildLensViewQuery({ teleconverterKey });

    expect(params.toString()).toBe(`v=1&tc=${teleconverterKey}`);
    expect(parseLensViewQuery(`?${params.toString()}`).teleconverterKey).toBe(teleconverterKey);
    expect(lensViewQueryToUrlState(parseLensViewQuery(`?${params.toString()}`)).teleconverterKey).toBe(
      teleconverterKey,
    );
    /* A null key (bare lens) serializes nothing, so the default URL stays clean. */
    expect(buildLensViewQuery({ teleconverterKey: null }).toString()).toBe("");

    expect(parseLensViewQuery("?v=1&tc=../other").teleconverterKey).toBeUndefined();
    expect(parseLensViewQuery(`?v=1&tc=${"a".repeat(129)}`).teleconverterKey).toBeUndefined();
    expect(parseLensViewQuery("?tc=valid-looking-key").teleconverterKey).toBeUndefined();
    expect(buildLensViewQuery({ comparing: true, teleconverterKey }).toString()).toBe("");
  });

  it("carries one teleconverter per comparison pane as a_tc / b_tc and never in single-lens URLs", () => {
    const params = buildLensViewQuery({ comparing: true, teleconverterKeyA: "tc-one", teleconverterKeyB: "tc-two" });

    expect(params.toString()).toBe("v=1&a_tc=tc-one&b_tc=tc-two");
    const parsed = parseLensViewQuery(`?${params.toString()}`);
    expect(parsed.teleconverterKeyA).toBe("tc-one");
    expect(parsed.teleconverterKeyB).toBe("tc-two");
    expect(parsed.teleconverterKey).toBeUndefined();
    expect(lensViewQueryToUrlState(parsed)).toMatchObject({ teleconverterKeyA: "tc-one", teleconverterKeyB: "tc-two" });
    /* A single pane with a converter still versions the URL; the bare pane serializes nothing. */
    expect(buildLensViewQuery({ comparing: true, teleconverterKeyB: "tc-two" }).toString()).toBe("v=1&b_tc=tc-two");
    expect(buildLensViewQuery({ teleconverterKeyA: "tc-one", teleconverterKeyB: "tc-two" }).toString()).toBe("");
    expect(parseLensViewQuery("?a_tc=tc-one").teleconverterKeyA).toBeUndefined();
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

    expect(params.toString()).toBe("v=1&focus=0.25&aberration=0.75&el=4&gm=1&ad=1&tab=coma");
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
    expect(params.toString()).toBe("shift=-11.5&tilt=8.25");
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
      teleconverterKey: "example-teleconverter",
      teleconverterKeyA: "example-teleconverter-a",
      teleconverterKeyB: "example-teleconverter-b",
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
      patentPositions: true,
    };

    const single = parseLensViewQuery(`?${buildLensViewQuery(fixture).toString()}`);
    const {
      selectedElementIdA: _a,
      selectedElementIdB: _b,
      teleconverterKeyA: _tcA,
      teleconverterKeyB: _tcB,
      ...singleLensFields
    } = fixture;
    expect(single).toMatchObject(singleLensFields);

    // Comparison mode serializes a_el/b_el instead of el and drops aberration.
    const comparing = parseLensViewQuery(`?${buildLensViewQuery({ ...fixture, comparing: true }).toString()}`);
    expect(comparing.selectedElementIdA).toBe(fixture.selectedElementIdA);
    expect(comparing.selectedElementIdB).toBe(fixture.selectedElementIdB);
    expect(comparing.selectedElementId).toBeUndefined();
    expect(comparing.patentPositions).toBeUndefined();
  });

  it("round-trips patent-positions mode as a tri-state v1 flag that never defaults", () => {
    expect(buildLensViewQuery({ patentPositions: true }).toString()).toBe("v=1&pp=1");
    expect(buildLensViewQuery({ patentPositions: false }).toString()).toBe("");
    expect(buildLensViewQuery({ patentPositions: true, comparing: true }).toString()).toBe("");

    expect(parseLensViewQuery("?v=1&pp=1").patentPositions).toBe(true);
    expect(parseLensViewQuery("?v=1&pp=0").patentPositions).toBe(false);
    for (const search of ["?pp=1", "?v=2&pp=1", "?v=1&pp=yes", "?v=1"]) {
      expect(parseLensViewQuery(search)).not.toHaveProperty("patentPositions");
    }
    /* Popstate hydration materializes defaults for every other field; this one must stay absent. */
    expect(lensViewQueryToUrlState(parseLensViewQuery(""), true)).not.toHaveProperty("patentPositions");
    expect(lensViewQueryToUrlState(parseLensViewQuery("?v=1&pp=0"), true).patentPositions).toBe(false);
  });

  it("ignores the removed beta bokeh overlay URL flag", () => {
    const state = parseLensViewQuery("?v=1&bo=1&ad=1&tab=bokeh");

    expect(state).not.toHaveProperty("bokehPreviewOpen");
    expect(state.analysisDrawerOpen).toBe(true);
    expect(state.analysisDrawerTab).toBe("bokeh");
  });
});
