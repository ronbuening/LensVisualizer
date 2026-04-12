// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useLensComputation from "../src/components/hooks/useLensComputation.js";

/* This test uses a real lens key from the catalog. The LENS_CATALOG is populated
 * at import time via import.meta.glob so all *.data.ts lenses are available. */

describe("useLensComputation", () => {
  const baseLensKey = "sonnar-50f15";

  it("returns a valid RuntimeLens and geometry for a known lens key", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    const r = result.current;
    expect(r.L).toBeDefined();
    expect(r.buildError).toBeUndefined();
    expect(r.IMG_MM).toBeGreaterThan(0);
    expect(r.zPos.length).toBe(r.L!.N);
    expect(typeof r.sx).toBe("function");
    expect(typeof r.sy).toBe("function");
    expect(typeof r.clampedRayEnd).toBe("function");
    expect(r.CX).toBeGreaterThan(0);
    expect(r.IX).toBeGreaterThan(0);
    expect(r.effectiveSC).toBeGreaterThan(0);
  });

  it("returns element shapes", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    expect(result.current.shapes.length).toBeGreaterThan(0);
    expect(result.current.shapeError).toBeNull();
  });

  it("computes aperture metrics", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    const r = result.current;
    expect(r.currentFOPEN).toBeGreaterThan(0);
    expect(r.fNumber).toBeGreaterThan(0);
    expect(r.currentPhysStopSD).toBeGreaterThan(0);
    expect(r.baseEPSD).toBeGreaterThan(0);
    expect(r.currentEPSD).toBeGreaterThan(0);
    // Wide open: fNumber should equal currentFOPEN
    expect(r.fNumber).toBeCloseTo(r.currentFOPEN, 1);
  });

  it("fNumber increases when stopped down", () => {
    const { result: wide } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    const { result: stopped } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0.5,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    expect(stopped.current.fNumber).toBeGreaterThan(wide.current.fNumber);
    expect(stopped.current.currentPhysStopSD).toBeLessThan(wide.current.currentPhysStopSD);
    expect(stopped.current.currentEPSD).toBeLessThan(wide.current.currentEPSD);
  });

  it("computes dynamic EFL", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    expect(result.current.dynamicEFL).toBeGreaterThan(0);
  });

  it("computes effective f-number", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    expect(result.current.effectiveFNum).toBeGreaterThan(0);
    // At infinity focus, effective f-number ≈ geometric f-number
    expect(result.current.effectiveFNum).toBeCloseTo(result.current.fNumber, 0);
  });

  it("generates a filterId from panelId", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "myPanel",
      }),
    );
    expect(result.current.filterId).toBe("gl-myPanel");
  });

  it("returns buildError for an invalid lens key", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: "NonExistentLens999",
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    expect(result.current.L).toBeUndefined();
    expect(result.current.buildError).toBeTruthy();
    spy.mockRestore();
  });

  it("returns variable gap readouts", () => {
    const { result } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    // varReadouts matches L.varLabels length
    const L = result.current.L!;
    expect(result.current.varReadouts.length).toBe(L.varLabels.length);
    for (const vr of result.current.varReadouts) {
      expect(typeof vr.label).toBe("string");
      expect(typeof vr.val).toBe("string");
    }
  });

  it("zPos shifts when focus changes but IMG_MM stays fixed", () => {
    const { result: r0 } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    const { result: r1 } = renderHook(() =>
      useLensComputation({
        lensKey: baseLensKey,
        focusT: 0.8,
        zoomT: 0,
        stopdownT: 0,
        scaleRatio: null,
        panelId: "test",
      }),
    );
    // IMG_MM should be the same (fixed reference)
    expect(r0.current.IMG_MM).toBe(r1.current.IMG_MM);
    // But surface positions should change with focus
    expect(r0.current.zPos).not.toEqual(r1.current.zPos);
  });
});
