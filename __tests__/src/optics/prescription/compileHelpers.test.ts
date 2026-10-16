import { describe, expect, it } from "vitest";
import { buildAsphereIndex } from "../../../../src/optics/prescription/compileAspheres.js";
import { buildLabelIndex } from "../../../../src/optics/prescription/compileLabels.js";
import { buildStateSurfaces, buildZPositions } from "../../../../src/optics/state/layout.js";
import { firstInfinityThickness } from "../../../../src/optics/prescription/compileControls.js";
import {
  resolveVariableThickness,
  interpolateStationTable,
  clampStationControl,
  closeFocusAtZoom,
  wideOpenStopAtZoom,
} from "../../../../src/optics/state/stationTables.js";
import { buildVariableStopGapLens } from "../testLensFixtures.js";
import type { AsphericCoefficients, SurfaceData } from "../../../../src/types/optics.js";

describe("compiler helpers", () => {
  it("builds label and asphere lookups from surface labels", () => {
    const surfaces = [{ label: "1" }, { label: "STO" }, { label: "2" }] as SurfaceData[];
    const asphere: AsphericCoefficients = {
      K: -0.5,
      A4: 1e-5,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    };

    const labelIdx = buildLabelIndex(surfaces);
    const asphByIdx = buildAsphereIndex({ STO: asphere }, labelIdx);

    expect(labelIdx).toEqual({ 1: 0, STO: 1, 2: 2 });
    expect(asphByIdx).toEqual({ 1: asphere });
    expect(asphByIdx[1]).not.toBe(asphere);
    expect(Object.isFrozen(asphByIdx[1])).toBe(true);
  });

  it("interpolates non-monotonic zoom ranges across focus and zoom", () => {
    const thickness = resolveVariableThickness(
      2,
      [
        [2, 4],
        [6, 8],
        [3, 5],
      ],
      true,
      0.5,
      0.75,
    );

    expect(thickness).toBeCloseTo(5.5, 10);
  });

  it("builds state surfaces without mutating the source array", () => {
    const surfaces = [{ label: "1", R: 1e15, d: 2, nd: 1.0, sd: 10, elemId: 0 }] as SurfaceData[];

    const stateSurfaces = buildStateSurfaces(
      surfaces,
      {
        0: [
          [2, 4],
          [6, 8],
          [3, 5],
        ],
      },
      true,
      0.5,
      0.75,
    );

    expect(stateSurfaces[0].d).toBeCloseTo(5.5, 10);
    expect(surfaces[0].d).toBe(2);
    expect(stateSurfaces[0]).not.toBe(surfaces[0]);
  });

  it("preserves derived-table and projection-table endpoint arithmetic", () => {
    const values = [1e16, 1];
    expect(interpolateStationTable(1, values)).toBe(0);
    expect(interpolateStationTable(1, values, "last")).toBe(1);
    expect(interpolateStationTable(2, [2, 4])).toBe(6);
    expect(interpolateStationTable(clampStationControl(2), [2, 4])).toBe(4);
    expect(interpolateStationTable(clampStationControl(NaN), [2, 4])).toBe(2);
    expect(interpolateStationTable(0.5, [7])).toBe(7);
  });

  it("selects the interior interval of a multi-station table", () => {
    expect(interpolateStationTable(0.625, [4, 20, 100, 12, 60])).toBe(56);
  });

  it.each([
    [-1, 0.5, 6],
    [2, 2, 12],
    [NaN, 0.5, 6],
  ])("clamps distance and iris schedules at zoom %s", (zoomT, distanceM, stopSD) => {
    const L = buildVariableStopGapLens(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      "test-station-schedules",
      undefined,
      { zoomCloseFocusM: [0.5, 1, 2], zoomStopSemiDiameters: [6, 8, 12] },
    );
    expect(closeFocusAtZoom(zoomT, L)).toBe(distanceM);
    expect(wideOpenStopAtZoom(zoomT, L)).toBe(stopSD);
  });

  it("accumulates signed folded gaps in physical surface order", () => {
    expect(buildZPositions([10, -4, 8])).toEqual([0, 10, 6]);
  });

  it("reads the infinity thickness from prime and zoom var ranges", () => {
    expect(firstInfinityThickness([2, 3], false)).toBe(2);
    expect(
      firstInfinityThickness(
        [
          [2, 3],
          [4, 5],
        ],
        true,
      ),
    ).toBe(2);
    expect(firstInfinityThickness("bad", true)).toBeNull();
  });
});
