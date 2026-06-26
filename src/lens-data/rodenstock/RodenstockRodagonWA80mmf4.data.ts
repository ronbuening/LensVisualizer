import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — RODENSTOCK Rodagon-WA 80mm f/4                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 2818435 B1, sole worked example, Optische Werke    ║
 * ║  G. Rodenstock. Six-element, four-group wide-angle enlarging        ║
 * ║  objective with flat cemented interfaces and an air stop.           ║
 * ║                                                                    ║
 * ║  Scaling: patent prescription is normalized to f' = 100 at the      ║
 * ║  e-line. All radii and axial separations are scaled ×0.8 to model   ║
 * ║  the production Rodagon-WA 80mm f/4.                                ║
 * ║                                                                    ║
 * ║  Stop placement: the patent table gives l2 = 5.75 from r5 to the    ║
 * ║  Blende and l3 = 4.19 from the Blende to r6. These are preserved    ║
 * ║  as surface 5 -> STO and STO -> surface 6 after scaling.            ║
 * ║                                                                    ║
 * ║  Semi-diameters: the patent does not publish clear apertures.       ║
 * ║  SDs are conservative geometric estimates. The front and rear       ║
 * ║  singlet/doublet contact heights implied by the patent's edge-touch ║
 * ║  statement are slightly reduced so the renderer preserves ≥10%      ║
 * ║  of each narrow air gap instead of drawing literal rim contact.     ║
 * ║  These SDs are intended to show the mechanical optical section, not ║
 * ║  to model the finite-conjugate 62° enlarger field as an infinity    ║
 * ║  camera objective.                                                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "rodenstock-rodagon-wa-80mm-f4",
  maker: "Rodenstock",
  name: "RODENSTOCK RODAGON-WA 80mm f/4",
  subtitle: "DE 2818435 B1 — Optische Werke G. Rodenstock",
  specs: [
    "6 elements / 4 groups",
    "f ≈ 79.95 mm (d-line)",
    "f/4; stops to f/22",
    "6×9 cm enlarging coverage",
    "4–15× recommended scale range",
  ],

  focalLengthMarketing: 80,
  focalLengthDesign: 79.949,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["enlarging-lens"],
  imageFormat: "6x9",
  patentYear: 1978,
  elementCount: 6,
  groupCount: 4,

  nominalFno: 4,
  closeFocusM: 0.085,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  yScFill: 0.74,
  scFill: 0.64,
  focusDescription:
    "Finite-conjugate enlarging lens; focus is set by changing enlarger lens/negative/easel distances. The optical unit is rigid and the patent publishes no internal focus variables.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.691,
      vd: 54.71,
      fl: 29.812,
      glass: "N-LAK9 (Schott)",
      apd: false,
      dPgF: -0.0083,
      nC: 1.68716,
      nF: 1.69979,
      ng: 1.70667,
      cemented: "D1",
      role: "Front positive crown of the first cemented doublet; provides the strongest positive front-surface power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.61336,
      vd: 44.49,
      fl: -21.351,
      glass: "N-KZFS4 (Schott; KzFS4 class)",
      apd: false,
      dPgF: -0.01,
      nC: 1.60922,
      nF: 1.623,
      ng: 1.63071,
      cemented: "D1",
      role: "Negative short-flint partner of the front doublet; balances L1 chromatically and optically.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.32,
      fl: 86.311,
      glass: "N-SK16 (Schott)",
      apd: false,
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
      role: "Positive front meniscus immediately before the stop; its edge nearly contacts L2 in the patent construction.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.32,
      fl: 99.657,
      glass: "N-SK16 (Schott)",
      apd: false,
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
      role: "Positive rear meniscus immediately after the stop; forms the rear-half counterpart to L3.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.61336,
      vd: 44.49,
      fl: -30.168,
      glass: "N-KZFS4 (Schott; KzFS4 class)",
      apd: false,
      dPgF: -0.01,
      nC: 1.60922,
      nF: 1.623,
      ng: 1.63071,
      cemented: "D2",
      role: "Negative short-flint component of the rear cemented doublet; weaker than L2 to break strict symmetry.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.62041,
      vd: 60.32,
      fl: 32.508,
      glass: "N-SK16 (Schott)",
      apd: false,
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
      cemented: "D2",
      role: "Rear positive crown of the final doublet; provides the last refracting power before the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: 20.6, d: 6.872, nd: 1.691, elemId: 1, sd: 12.2 },
    { label: "2", R: 1e15, d: 2.856, nd: 1.61336, elemId: 2, sd: 10.4 },
    { label: "3", R: 13.096, d: 1.16, nd: 1, elemId: 0, sd: 8.5 },
    { label: "4", R: 18.976, d: 3.048, nd: 1.62041, elemId: 3, sd: 8.0 },
    { label: "5", R: 27.584, d: 4.6, nd: 1, elemId: 0, sd: 7.2 },
    { label: "STO", R: 1e15, d: 3.352, nd: 1, elemId: 0, sd: 7.433 },
    { label: "6", R: -108.632, d: 4.016, nd: 1.62041, elemId: 4, sd: 7.2 },
    { label: "7", R: -39.96, d: 1.144, nd: 1, elemId: 0, sd: 8.0 },
    { label: "8", R: -18.504, d: 3.096, nd: 1.61336, elemId: 5, sd: 8.5 },
    { label: "9", R: 1e15, d: 6.296, nd: 1.62041, elemId: 6, sd: 10.4 },
    { label: "10", R: -20.168, d: 62.089, nd: 1, elemId: 0, sd: 12.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1 front doublet", fromSurface: "1", toSurface: "3" },
    { text: "G2 front meniscus", fromSurface: "4", toSurface: "5" },
    { text: "G3 rear meniscus", fromSurface: "6", toSurface: "7" },
    { text: "G4 rear doublet", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
