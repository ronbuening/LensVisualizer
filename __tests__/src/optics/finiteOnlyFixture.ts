/**
 * A synthetic finite-only singlet: a stop 1 mm ahead of a biconvex f ≈ 50 mm element, with a 1:1 state at
 * coordinate 0 (object 99 mm from the stop plane) and a farther default state at 1. Each gap puts its object's paraxial
 * image on the authored plane, and `closeFocusM` is the 1:1 state's object-to-image distance.
 *
 * Data only, with no engine imports, so the browser spec can load it as well.
 */
import type { LensDataV2Input } from "../../../src/types/lensDataV2.js";

export function finiteOnlyFixture(): LensDataV2Input {
  return {
    schema: 2,
    key: "synthetic-finite-only",
    name: "Synthetic finite-only control",
    elements: [
      {
        id: 1,
        name: "L1",
        label: "Synthetic",
        type: "Biconvex Positive",
        nd: 1.5,
        indexReference: "D",
        glass: "Unmatched (synthetic constant index)",
      },
    ],
    surfaces: [
      { label: "STO", R: "flat", d: 1, sd: 2 },
      { label: "1", R: 50, d: 5, sd: 4, medium: 1 },
      { label: "2", R: -50, sd: 4 },
    ],
    focus: {
      closeFocusM: 0.205,
      keyframes: [0, 1],
      finiteOnly: { defaultKeyframe: 1 },
      conjugates: [
        {
          zoomStation: 0,
          keyframe: 0,
          objectDistanceMm: 99,
          distanceReference: "first-surface",
          source: "Calculated synthetic 1:1 control",
        },
        {
          zoomStation: 0,
          keyframe: 1,
          objectDistanceMm: 199,
          distanceReference: "first-surface",
          source: "Calculated synthetic control",
        },
      ],
    },
    gaps: { "2": { values: [[100, 5900 / 89]] } },
    aperture: { nominalFNumber: 8, fStops: [8], maxFNumber: 8 },
    projection: { kind: "rectilinear", maxTraceFieldDeg: 2 },
    layout: { yScFill: 0.5 },
  };
}
