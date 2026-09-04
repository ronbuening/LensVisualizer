import { describe, expect, it } from "vitest";
import { traceParaxialSurfaces2 } from "../../../src/optics/math/paraxial.js";
import { entrancePupilFromStop2 } from "../../../src/optics/first-order/pupils.js";

// Independent lensmaker/Gaussian references, not snapshots calculated by the implementation under test.
const thinLens = [
  { R: 100, nd: 1.5, d: 0 },
  { R: -100, nd: 1, d: 0 },
];

describe("physical first-order references", () => {
  it("reproduces the lensmaker power of a 100 mm symmetric thin lens", () => {
    const ray = traceParaxialSurfaces2(thinLens, 1, 0);
    expect(ray.y).toBe(1);
    expect(ray.u).toBeCloseTo(-0.01, 12);
    expect(ray.n).toBe(1);
  });

  it("includes thick-lens power rather than adding surface powers", () => {
    // Phi = Phi1 + Phi2 - t/n * Phi1*Phi2 = .005 + .005 - 10/1.5 * .005^2.
    const ray = traceParaxialSurfaces2([{ ...thinLens[0], d: 10 }, thinLens[1]], 1, 0);
    expect(ray.u).toBeCloseTo(-0.009833333333333333, 12);
    expect(ray.y).toBeCloseTo(0.9666666666666667, 12);
  });

  it("forms a unit-magnification image at the 2f conjugate", () => {
    // Object at -200 mm, image at +200 mm: a ray from y=3 through the lens center reaches y=-3.
    const chief = traceParaxialSurfaces2(thinLens, 0, -3 / 200);
    expect(chief.y + 200 * chief.u).toBeCloseTo(-3, 12);
    // An axial marginal ray at height 5 has half the infinity image-space cone angle.
    const finite = traceParaxialSurfaces2(thinLens, 5, 5 / 200);
    const infinity = traceParaxialSurfaces2(thinLens, 5, 0);
    expect(finite.y + 200 * finite.u).toBeCloseTo(0, 12);
    expect(finite.u).toBeCloseTo(infinity.u / 2, 12);
  });

  it("preserves the optical invariant for an air-to-glass surface", () => {
    const surfaces = [{ R: 100, nd: 1.5, d: 0 }];
    const marginal = traceParaxialSurfaces2(surfaces, 1, 0);
    const chief = traceParaxialSurfaces2(surfaces, 0, 1);
    expect(marginal.n * (marginal.y * chief.u - chief.y * marginal.u)).toBeCloseTo(1, 12);
    expect(-1 / marginal.u).toBeCloseTo(300, 12);
  });

  it("uses the stop-to-pupil magnification and preserves inverted pupil orientation", () => {
    expect(entrancePupilFromStop2(5, { yRatio: 0.5, b: 10, epRatio: 20 }).epSD).toBe(10);
    expect(entrancePupilFromStop2(5, { yRatio: -2, b: 10, epRatio: -5 }).epSD).toBe(2.5);
  });
});
