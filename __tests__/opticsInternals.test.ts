import { describe, expect, it } from "vitest";
import {
  buildAsphereIndex,
  buildLabelIndex,
  buildStateSurfaces,
  firstInfinityThickness,
  resolveVariableThickness,
} from "../src/optics/internal/lensState.js";
import { conicPolySag, sagSlopeRaw } from "../src/optics/internal/surfaceMath.js";
import { traceSurfacesReal } from "../src/optics/internal/traceSurfaces.js";
import type { AsphericCoefficients, SurfaceData } from "../src/types/optics.js";

describe("lensState helpers", () => {
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

describe("traceSurfacesReal", () => {
  it("transfers to the target plane when stopAt is provided", () => {
    const surfaces = [
      { R: 1e15, nd: 1.0, d: 5, sd: 10 },
      { R: 1e15, nd: 1.0, d: 10, sd: 10 },
    ] as SurfaceData[];

    const result = traceSurfacesReal(surfaces, {}, 1, 0.2, { stopAt: 1, recordHeights: true });

    expect(result.heights).toEqual([1]);
    expect(result.y).toBeCloseTo(2, 10);
    expect(result.u).toBeCloseTo(0.2, 10);
  });

  it("marks total internal reflection as clipped and returns NaN coordinates", () => {
    const surfaces = [
      { R: 10, nd: 2.0, d: 5, sd: 20 },
      { R: 1e15, nd: 1.0, d: 10, sd: 20 },
    ] as SurfaceData[];

    const result = traceSurfacesReal(surfaces, {}, 9, 0.5, { checkSemiDiameter: true });

    expect(result.clipped).toBe(true);
    expect(Number.isNaN(result.y)).toBe(true);
    expect(Number.isNaN(result.u)).toBe(true);
  });

  it("flags semi-diameter clipping without breaking finite traces", () => {
    const surfaces = [
      { R: 1e15, nd: 1.0, d: 5, sd: 1 },
      { R: 1e15, nd: 1.0, d: 10, sd: 10 },
    ] as SurfaceData[];

    const result = traceSurfacesReal(surfaces, {}, 2, 0.1, { checkSemiDiameter: true });

    expect(result.clipped).toBe(true);
    expect(result.y).toBeCloseTo(2.5, 10);
    expect(result.u).toBeCloseTo(0.1, 10);
  });
});

describe("surfaceMath helpers", () => {
  it("includes optional higher-order asphere terms in sag and slope calculations", () => {
    const asphere: AsphericCoefficients = {
      K: -0.5,
      A4: 1e-5,
      A6: -2e-7,
      A8: 3e-9,
      A10: -4e-11,
      A12: 5e-13,
      A14: -6e-15,
      A16: 7e-17,
      A18: -8e-19,
      A20: 9e-21,
    };

    const withoutHighOrder: AsphericCoefficients = {
      ...asphere,
      A16: 0,
      A18: 0,
      A20: 0,
    };

    const h = 4;
    const R = 32;

    expect(conicPolySag(h, R, asphere)).not.toBeCloseTo(conicPolySag(h, R, withoutHighOrder), 12);
    expect(sagSlopeRaw(h, R, asphere)).not.toBeCloseTo(sagSlopeRaw(h, R, withoutHighOrder), 12);
  });
});
