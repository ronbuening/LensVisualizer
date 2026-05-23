import type { LensDataInput } from "../../types/optics.js";

/**
 * Reference Cassegrain — two-mirror catadioptric demo.
 *
 * Synthetic prescription used to exercise the explicit `traceSequence` path
 * for catadioptric lenses with more than one reflective surface. Not a real
 * commercial lens — included in the catalog as a visible engine demo.
 *
 * Geometry: light enters at the STO, traverses past the secondary mirror
 * (which sits between the stop and the primary), reflects off the primary,
 * returns to the secondary, and reflects forward again. The traceSequence
 * names the hit order explicitly:
 *
 *     STO  →  M1 (primary)  →  M2 (secondary)
 *
 * Surfaces are listed in z-order: STO at z=0, M2 at z=100, M1 at z=200.
 * With the chosen radii (M1: R=-400 concave, M2: R=+200 convex toward the
 * returning light), the paraxial EFL is +100 mm.
 */
const LENS_DATA = {
  key: "reference-cassegrain-100f8",
  maker: "Reference",
  name: "REFERENCE CASSEGRAIN 100 mm f/8",
  subtitle: "Synthetic two-mirror catadioptric (engine demo, not a real lens)",
  specs: ["2 MIRRORS / 0 ELEMENTS", "f ≈ 100 mm", "F/8"],

  focalLengthMarketing: 100,
  apertureMarketing: 8,
  nominalFno: 8,

  elements: [],

  surfaces: [
    { label: "STO", R: 1e15, d: 100, nd: 1.0, elemId: 0, sd: 10 },
    {
      label: "M2",
      R: 200,
      d: 100,
      nd: 1.0,
      elemId: 0,
      sd: 15,
      reflect: { kind: "first" },
    },
    {
      label: "M1",
      R: -400,
      d: 100,
      nd: 1.0,
      elemId: 0,
      sd: 80,
      reflect: { kind: "first" },
    },
  ],

  traceSequence: ["STO", "M1", "M2"],

  closeFocusM: 10,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],

  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
