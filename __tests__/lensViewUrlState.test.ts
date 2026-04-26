import { describe, expect, it } from "vitest";
import { buildLensViewQuery, lensViewQueryToUrlState, parseLensViewQuery } from "../src/utils/lensViewUrlState.js";

describe("lensViewUrlState", () => {
  it("parses v1 single-lens view params", () => {
    const state = parseLensViewQuery("?v=1&focus=0.25&aperture=0.5&zoom=70&el=12&gm=1&bo=1&ad=1&tab=distortion");

    expect(state).toMatchObject({
      focus: 0.25,
      aperture: 0.5,
      zoom: 70,
      selectedElementId: 12,
      glassMapOpen: true,
      bokehPreviewOpen: true,
      analysisDrawerOpen: true,
      analysisDrawerTab: "distortion",
    });
  });

  it("parses v1 comparison element params", () => {
    const state = parseLensViewQuery("?v=1&a_el=3&b_el=7&gm=1");
    expect(state.selectedElementIdA).toBe(3);
    expect(state.selectedElementIdB).toBe(7);
    expect(state.glassMapOpen).toBe(true);
  });

  it("clamps sliders and ignores invalid v1 values", () => {
    const state = parseLensViewQuery("?v=1&focus=-1&aperture=2&zoom=0&el=1.5&a_el=-2&gm=yes&bo=maybe&ad=no&tab=bogus");

    expect(state.focus).toBe(0);
    expect(state.aperture).toBe(1);
    expect(state.zoom).toBeNull();
    expect(state.selectedElementId).toBeUndefined();
    expect(state.selectedElementIdA).toBeUndefined();
    expect(state.glassMapOpen).toBeUndefined();
    expect(state.bokehPreviewOpen).toBeUndefined();
    expect(state.analysisDrawerOpen).toBeUndefined();
    expect(state.analysisDrawerTab).toBeUndefined();
  });

  it("honors stable slider params for unknown versions but ignores v1-only params", () => {
    const state = parseLensViewQuery("?v=99&focus=0.4&aperture=0.3&zoom=50&el=2&gm=1&tab=coma");
    expect(state).toEqual({ focus: 0.4, aperture: 0.3, zoom: 50 });
  });

  it("builds minimal single-lens query params", () => {
    const params = buildLensViewQuery({
      focus: 0.25,
      aperture: 0,
      selectedElementId: 4,
      glassMapOpen: true,
      bokehPreviewOpen: false,
      analysisDrawerOpen: true,
      analysisDrawerTab: "coma",
    });

    expect(params.toString()).toBe("v=1&focus=0.250&el=4&gm=1&ad=1&tab=coma");
  });

  it("builds minimal comparison query params", () => {
    const params = buildLensViewQuery({
      comparing: true,
      selectedElementId: 4,
      selectedElementIdA: 2,
      selectedElementIdB: 9,
      bokehPreviewOpen: true,
    });

    expect(params.toString()).toBe("v=1&a_el=2&b_el=9&bo=1");
  });

  it("omits defaults and unimplemented ai state", () => {
    const params = buildLensViewQuery({
      focus: 0,
      aperture: 0,
      zoom: null,
      glassMapOpen: false,
      bokehPreviewOpen: false,
      analysisDrawerOpen: false,
      analysisDrawerTab: "distortion",
    });

    expect(params.toString()).toBe("");
  });

  it("round-trips LCA and Petzval overlay flags", () => {
    const parsed = parseLensViewQuery("?v=1&lca=1&ptz=1");
    expect(parsed.lcaOverlayOpen).toBe(true);
    expect(parsed.petzvalOverlayOpen).toBe(true);

    const params = buildLensViewQuery({ lcaOverlayOpen: true, petzvalOverlayOpen: true });
    expect(params.toString()).toBe("v=1&lca=1&ptz=1");
  });

  it("can materialize defaults for popstate hydration", () => {
    const state = lensViewQueryToUrlState(parseLensViewQuery(""), true);
    expect(state).toMatchObject({
      focus: 0,
      aperture: 0,
      zoom: 0,
      selectedElementId: null,
      selectedElementIdA: null,
      selectedElementIdB: null,
      glassMapOpen: false,
      lcaOverlayOpen: false,
      petzvalOverlayOpen: false,
      bokehPreviewOpen: false,
      analysisDrawerOpen: false,
      analysisDrawerTab: "aberrations",
    });
  });
});
