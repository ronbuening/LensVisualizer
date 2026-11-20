// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import buildLens from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/optics.js";
import useOnAxisRays from "../../../../src/components/hooks/useOnAxisRays.js";
import { finiteFixture } from "../../optics/finiteOnly/fixture.js";
import type { LensDataV2Input } from "../../../../src/types/lensDataV2.js";
import useLensState from "../../../../src/utils/state/useLensState.js";
import { clearBrowserState, installMatchMediaMock } from "../../../testUtils.js";
import { parseLensViewQuery, lensViewQueryToUrlState } from "../../../../src/utils/state/lensViewUrlState.js";

vi.mock("../../../../src/utils/catalog/lensCatalog.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/utils/catalog/lensCatalog.js")>();
  const { ingestLens } = await import("../../../../src/optics/prescription/ingestV2.js");
  const { finiteFixture } = await import("../../optics/finiteOnly/fixture.js");
  const fixture = finiteFixture();
  return { ...actual, LENS_CATALOG: { ...actual.LENS_CATALOG, [fixture.key]: ingestLens(fixture).prescription } };
});
beforeEach(() => {
  clearBrowserState();
  installMatchMediaMock(true);
});
describe("finite-only hook lifecycle", () => {
  it("uses a finite catalog entry's default, including entries without a public Builder copy", () => {
    const d = finiteFixture();
    const { result } = renderHook(() => useLensState([d.key], d.key));
    expect(result.current[0].sliders.focusT).toBe(1);
    act(() => result.current[1]({ type: "SET_FOCUS_T", value: 0 }));
    expect(result.current[0].sliders.focusT).toBe(0);
    act(() => result.current[1]({ type: "RESET_SLIDERS" }));
    expect(result.current[0].sliders.focusT).toBe(1);
  });
  it.each([
    ["", 1],
    ["?focus=0", 0],
    ["?focus=0.8", 1],
    ["?focus=invalid", 1],
    ["?focus=0&zoom=1&aberration=1&aperture=1", 0],
  ])("hydrates %s without an infinity fallback", (search, expected) => {
    const d = finiteFixture();
    window.history.replaceState({}, "", search || "/");
    const { result } = renderHook(() => useLensState([d.key], d.key, undefined, d));
    expect(result.current[0].sliders.focusT).toBe(expected);
    expect(result.current[0].sliders.zoomT).toBe(0);
    expect(result.current[0].sliders.aberrationT).toBe(0);
    expect(result.current[0].sliders.stopdownT).toBe(0);
    act(() => result.current[1]({ type: "RESET_SLIDERS" }));
    expect(result.current[0].sliders.focusT).toBe(1);
    act(() =>
      result.current[1]({
        type: "APPLY_URL_VIEW_STATE",
        state: lensViewQueryToUrlState(parseLensViewQuery("?focus=0")),
      }),
    );
    expect(result.current[0].sliders.focusT).toBe(0);
  });
  it("adopts the finite default when a Builder import changes identity", () => {
    const d = finiteFixture(),
      ordinary: LensDataV2Input = { ...d, key: "ordinary", focus: { closeFocusM: 1, keyframes: [0, 1] } };
    const { result, rerender } = renderHook(({ draft }) => useLensState([draft.key], draft.key, undefined, draft), {
      initialProps: { draft: ordinary },
    });
    expect(result.current[0].sliders.focusT).toBe(0);
    rerender({ draft: d });
    expect(result.current[0].sliders.focusT).toBe(1);
    act(() => result.current[1]({ type: "SET_FOCUS_T", value: 0 }));
    expect(result.current[0].sliders.focusT).toBe(0);
    rerender({ draft: { ...d, name: "Edited name" } });
    expect(result.current[0].sliders.focusT).toBe(0);
    act(() => result.current[1]({ type: "SET_FOCUS_T", value: 1 }));
    rerender({ draft: { ...d, focus: { ...d.focus, finiteOnly: { defaultKeyframe: 0 } } } });
    expect(result.current[0].sliders.focusT).toBe(0);
    act(() => result.current[1]({ type: "SET_FOCUS_T", value: 1 }));
    rerender({ draft: ordinary });
    expect(result.current[0].sliders.focusT).toBe(0);
  });
  it("adopts the finite default when an import retains the lens key but changes the focus domain", () => {
    const d = finiteFixture();
    const ordinary: LensDataV2Input = { ...d, focus: { closeFocusM: 1, keyframes: [0, 1] } };
    const { result, rerender } = renderHook(({ draft }) => useLensState([draft.key], draft.key, undefined, draft), {
      initialProps: { draft: ordinary },
    });
    expect(result.current[0].sliders.focusT).toBe(0);
    rerender({ draft: d });
    expect(result.current[0].sliders.focusT).toBe(1);
  });
});

it("draws the finite image leg even when the saved ray mode requests collimated light", () => {
  const L = buildLens(finiteFixture()),
    state = prepareRuntimeState(L, 0, 0);
  const args = {
    L,
    zPos: [...state.z],
    IMG_MM: state.imgZ,
    focusT: 0,
    zoomT: 0,
    sx: (x: number) => x,
    sy: (y: number) => y,
    clampedRayEnd: (z: number, y: number, u: number, target: number): [number, number] => [
      target,
      y + u * (target - z),
    ],
    currentPhysStopSD: 2,
    currentEPSD: 2,
    rayDensity: "normal" as const,
    rayTracksF: false,
    focusK: 0,
    lensKey: L.source.key,
  };
  const { result, rerender } = renderHook(({ tracks }) => useOnAxisRays({ ...args, rayTracksF: tracks }), {
    initialProps: { tracks: false },
  });
  expect(result.current.error).toBeNull();
  expect(result.current.segments.length).toBeGreaterThan(1);
  for (const ray of result.current.segments) expect(ray.sp.at(-1)![0]).toBe(state.imgZ);
  const finite = result.current.segments;
  rerender({ tracks: true });
  expect(result.current.segments).toEqual(finite);
});
