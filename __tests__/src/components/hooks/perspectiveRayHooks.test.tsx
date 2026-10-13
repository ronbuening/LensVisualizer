// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useChromaticRays from "../../../../src/components/hooks/useChromaticRays.js";
import useOffAxisRays from "../../../../src/components/hooks/useOffAxisRays.js";
import useOnAxisRays from "../../../../src/components/hooks/useOnAxisRays.js";
import useRayTracing from "../../../../src/components/hooks/useRayTracing.js";
import type { PerspectiveDiagramFan } from "../../../../src/optics/perspective/diagramFan.js";
import type { PerspectiveTraceContext } from "../../../../src/optics/perspective/index.js";
import type { ChromaticChannel, RuntimeLens } from "../../../../src/types/optics.js";

const mocks = vi.hoisted(() => ({
  traceFan: vi.fn(),
  offAxisGeometry: vi.fn(),
}));

vi.mock("../../../../src/optics/perspective/diagramFan.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/optics/perspective/diagramFan.js")>();
  return { ...actual, tracePerspectiveDiagramFan: mocks.traceFan };
});

vi.mock("../../../../src/components/hooks/offAxisRayUtils.js", () => ({
  computeOffAxisTraceGeometry: mocks.offAxisGeometry,
}));

vi.mock("../../../../src/optics/optics.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/optics/optics.js")>();
  return { ...actual, computeLongitudinalChromaticFocus: () => null };
});

const lens = {
  key: "physical-pc-test",
  isFoldedOptics: false,
  S: [],
  stopIdx: 0,
  N: 1,
  rayLead: 12,
  rayFractions: [-0.5, 0, 0.5],
  offAxisFractions: [-0.75, 0, 0.75],
} as unknown as RuntimeLens;

const activeContext = {
  pose: { active: true },
} as unknown as PerspectiveTraceContext;

function fanFor(
  fractions: readonly number[],
  channel?: ChromaticChannel,
  { reachesSensor = true }: { reachesSensor?: boolean } = {},
): PerspectiveDiagramFan {
  const channelOffset = channel === "R" ? -1 : channel === "B" ? 1 : 0;
  return {
    field: {} as PerspectiveDiagramFan["field"],
    samples: fractions.map((fraction) => ({
      fraction,
      status: reachesSensor ? "usable" : "missed-sensor",
      diagramTrace: {
        ray: {
          pts: reachesSensor
            ? [
                [0, fraction],
                [50, fraction + channelOffset],
                [100, fraction + channelOffset + 0.25],
              ]
            : [
                [0, fraction],
                [50, fraction + channelOffset],
              ],
          ghostPts: [],
          y: fraction + channelOffset,
          u: 0.01,
          clipped: false,
          reachedImagePlane: reachesSensor,
        },
        returnPoint: [50, fraction + channelOffset],
        sensorPoint: reachesSensor ? [100, fraction + channelOffset + 0.25] : null,
      },
    })),
  };
}

function commonRayProps() {
  return {
    L: lens,
    zPos: [50],
    IMG_MM: 100,
    focusT: 0.6,
    zoomT: 0,
    sx: (z: number) => z,
    sy: (y: number) => y,
    currentPhysStopSD: 4,
    currentEPSD: 6,
    rayDensity: "normal" as const,
    rayTracksF: true,
    focusK: 0.5,
    lensKey: "perspective-ray-hook-test",
    perspectiveTraceContext: activeContext,
  };
}

describe("perspective-control diagram ray hooks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.traceFan.mockImplementation(
      ({ fractions, channel }: { fractions: readonly number[]; channel?: ChromaticChannel }) =>
        fanFor(fractions, channel),
    );
    mocks.offAxisGeometry.mockReturnValue({
      kind: "slope",
      fieldAngleDeg: 12,
      yChief: 40,
      uField: 9,
      edgeEnd: [999, 888],
      useEdge: true,
    });
  });

  it("locks the active on-axis fan to camera direction [0, 0, 1] and the moved-stop chief solve", () => {
    const clampedRayEnd = vi.fn((): [number, number] => [777, 777]);
    const { result } = renderHook(() =>
      useOnAxisRays({
        ...commonRayProps(),
        clampedRayEnd,
      }),
    );

    expect(result.current.error).toBeNull();
    expect(mocks.traceFan).toHaveBeenCalledWith(
      expect.objectContaining({
        context: activeContext,
        sceneDirectionCamera: [0, 0, 1],
        pupilSemiDiameterMm: 6,
        stopSemiDiameterMm: 4,
        fractions: lens.rayFractions,
      }),
    );
    expect(result.current.segments).toHaveLength(lens.rayFractions.length);
    expect(result.current.segments.every((segment) => segment.sp.at(-1)?.[0] === 100)).toBe(true);
    expect(clampedRayEnd).not.toHaveBeenCalled();
  });

  it("derives the active off-axis camera direction from the existing field angle and ignores edge override", () => {
    const clampedRayEnd = vi.fn((): [number, number] => [777, 777]);
    const { result } = renderHook(() =>
      useOffAxisRays({
        ...commonRayProps(),
        clampedRayEnd,
        showOffAxis: "edge",
      }),
    );

    const request = mocks.traceFan.mock.calls[0]?.[0];
    const theta = (12 * Math.PI) / 180;
    expect(request.sceneDirectionCamera).toEqual([0, -Math.sin(theta), Math.cos(theta)]);
    expect(result.current.segments).toHaveLength(lens.offAxisFractions.length);
    expect(result.current.segments.flatMap((segment) => segment.sp)).not.toContainEqual([999, 888]);
    expect(clampedRayEnd).not.toHaveBeenCalled();
  });

  it("uses scene-locked moved-stop bundles for every active chromatic axis and channel", () => {
    const { result } = renderHook(() =>
      useChromaticRays({
        ...commonRayProps(),
        clampedRayEnd: vi.fn((): [number, number] => [777, 777]),
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "trueAngle",
        chromR: true,
        chromG: false,
        chromB: true,
        chromV: false,
      }),
    );

    expect(mocks.traceFan).toHaveBeenCalledTimes(4);
    expect(mocks.traceFan.mock.calls.map(([request]) => request.channel)).toEqual(["R", "B", "R", "B"]);
    expect(mocks.traceFan.mock.calls[0]?.[0].sceneDirectionCamera).toEqual([0, 0, 1]);
    expect(result.current.chromaticRays.filter((ray) => ray.axis === "onAxis")).toHaveLength(
      lens.rayFractions.length * 2,
    );
    expect(result.current.chromaticRays.filter((ray) => ray.axis === "offAxis")).toHaveLength(
      lens.offAxisFractions.length * 2,
    );
    expect(result.current.chromaticRays.every((ray) => ray.z === 50)).toBe(true);
  });

  it("does not invent a sensor endpoint or mark a missed physical ray as reached", () => {
    mocks.traceFan.mockImplementation(({ fractions }: { fractions: readonly number[] }) =>
      fanFor(fractions, undefined, { reachesSensor: false }),
    );
    const clampedRayEnd = vi.fn((): [number, number] => [777, 777]);
    const { result } = renderHook(() =>
      useOnAxisRays({
        ...commonRayProps(),
        clampedRayEnd,
      }),
    );

    expect(result.current.segments.every((segment) => segment.sp.at(-1)?.[0] === 50)).toBe(true);
    expect(clampedRayEnd).not.toHaveBeenCalled();
  });

  it("routes one shared physical context through the ray-family orchestrator", () => {
    const { result } = renderHook(() =>
      useRayTracing({
        ...commonRayProps(),
        rayTracksF: false,
        clampedRayEnd: vi.fn((): [number, number] => [777, 777]),
        showOnAxis: true,
        showOffAxis: "trueAngle",
        showChromatic: false,
        chromR: false,
        chromG: false,
        chromB: false,
        chromV: false,
      }),
    );

    expect(result.current.rayError).toBeNull();
    expect(mocks.traceFan).toHaveBeenCalledTimes(2);
    expect(result.current.rays).toHaveLength(lens.rayFractions.length);
    expect(result.current.offAxisRays).toHaveLength(lens.offAxisFractions.length);
  });
});
