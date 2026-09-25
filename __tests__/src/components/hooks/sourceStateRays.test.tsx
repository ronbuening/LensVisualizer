// @vitest-environment jsdom
/** Source geometry must survive diagram translation and be shared by all wavelength fans. */
import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { build, buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { prepareSourceDiagramFan } from "../../../../src/optics/diagramGeometry.js";
import useOnAxisRays from "../../../../src/components/hooks/useOnAxisRays.js";
import useOffAxisRays from "../../../../src/components/hooks/useOffAxisRays.js";
import useChromaticRays from "../../../../src/components/hooks/useChromaticRays.js";

const base = buildSimplePositiveElementLens();
const L = build({
  ...base.data,
  sourceStates: [
    {
      id: "near",
      label: "1 m from first vertex",
      focusT: 1,
      zoomT: 0,
      source: "Synthetic source geometry",
      conjugate: {
        kind: "finite",
        objectDistanceMm: 1000,
        distanceReference: "first-surface",
        distanceProvenance: "published",
      },
    },
  ],
});
const state = prepareRuntimeState(L, 1, 0);
const shift = 25;
const params = {
  L,
  focusT: 1,
  zoomT: 0,
  aberrationT: 0,
  zPos: state.z.map((z) => z + shift),
  IMG_MM: state.imgZ + shift,
  sx: (z: number) => z,
  sy: (y: number) => y,
  clampedRayEnd: (z: number, y: number, u: number, target: number): [number, number] => [target, y + (target - z) * u],
  currentPhysStopSD: 0.1,
  currentEPSD: 0.1,
  rayDensity: "normal" as const,
  rayTracksF: true,
  focusK: 0,
  lensKey: L.data.key,
};
function extrapolateSource(points: number[][]): number {
  const [a, b] = points;
  expect(b).toBeDefined();
  return a[1] + ((b[1] - a[1]) / (b[0] - a[0])) * (-1000 + shift - a[0]);
}
describe("verified source diagram rays", () => {
  it("preserves the translated source for axial and off-axis hooks", () => {
    const axial = renderHook(() => useOnAxisRays(params)).result.current;
    expect(axial.error).toBeNull();
    expect(axial.segments.length).toBeGreaterThan(1);
    for (const ray of axial.segments) expect(extrapolateSource(ray.sp)).toBeCloseTo(0, 8);
    const offAxis = renderHook(() => useOffAxisRays({ ...params, showOffAxis: "trueAngle" })).result.current;
    expect(offAxis.error).toBeNull();
    expect(offAxis.segments.length).toBeGreaterThan(1);
    const sourceY = extrapolateSource(offAxis.segments[0].sp);
    expect(Math.abs(sourceY)).toBeGreaterThan(0);
    for (const ray of offAxis.segments) expect(extrapolateSource(ray.sp)).toBeCloseTo(sourceY, 8);
  });
  it("keeps every chromatic channel on the same physical source", () => {
    const chromatic = renderHook(() =>
      useChromaticRays({
        ...params,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "trueAngle",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
      }),
    ).result.current;
    expect(chromatic.error).toBeNull();
    expect(new Set(chromatic.chromaticRays.map((r) => r.channel)).size).toBe(3);
    for (const axis of ["onAxis", "offAxis"]) {
      const rays = chromatic.chromaticRays.filter((r) => r.axis === axis);
      expect(rays.length).toBeGreaterThan(1);
      const sourceY = axis === "onAxis" ? 0 : extrapolateSource(rays[0].sp);
      for (const ray of rays) expect(extrapolateSource(ray.sp)).toBeCloseTo(sourceY, 8);
    }
  });
  it("retains physical clipping and leaves uncertified slider positions to the existing model", () => {
    const fan = prepareSourceDiagramFan(L, 1, 0, 0, 0, 0.1, params.zPos, 0.01)!;
    expect(fan(0).clipped).toBe(false);
    expect(fan(0.2).clipped).toBe(true);
    expect(prepareSourceDiagramFan(L, 0.5, 0, 0, 0, 0.1, params.zPos, 0.1)).toBeUndefined();
    const parallel = renderHook(() => useOnAxisRays({ ...params, rayTracksF: false })).result.current;
    expect(parallel.error).toBeNull();
    const [a, b] = parallel.segments[0].sp;
    expect(a[1]).toBeCloseTo(b[1], 12);
  });
});
