import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "rodenstock-rodagon-wa-80mm-f4",
  maker: "Rodenstock",
  name: "RODENSTOCK RODAGON-WA 80mm f/4",
  subtitle: "DE 2818435 B1 — Optische Werke G. Rodenstock",

  catalog: {
    lensMounts: ["enlarging-lens"],
    imageFormat: "6x9",
    specs: [
      "6 elements / 4 groups",
      "f ≈ 79.95 mm (d-line)",
      "f/4; stops to f/22",
      "6×9 cm enlarging coverage",
      "4–15× recommended scale range",
    ],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 80, design: 79.949 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "DE 2818435 B1",
    patentYear: 1978,
    authors: ["Franz Schlegel", "Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.691,
      vd: 54.71,
      focalLengthMm: 29.812,
      glass: "N-LAK9 (Schott)",
      apd: false,
      role: "Front positive crown of the first cemented doublet; provides the strongest positive front-surface power.",
      cemented: "D1",
      dPgF: -0.0083,
      nC: 1.68716,
      nF: 1.69979,
      ng: 1.70667,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.61336,
      vd: 44.49,
      focalLengthMm: -21.351,
      glass: "N-KZFS4 (Schott; KzFS4 class)",
      apd: false,
      role: "Negative short-flint partner of the front doublet; balances L1 chromatically and optically.",
      cemented: "D1",
      dPgF: -0.01,
      nC: 1.60922,
      nF: 1.623,
      ng: 1.63071,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 86.311,
      glass: "N-SK16 (Schott)",
      apd: false,
      role: "Positive front meniscus immediately before the stop; its edge nearly contacts L2 in the patent construction.",
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 99.657,
      glass: "N-SK16 (Schott)",
      apd: false,
      role: "Positive rear meniscus immediately after the stop; forms the rear-half counterpart to L3.",
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.61336,
      vd: 44.49,
      focalLengthMm: -30.168,
      glass: "N-KZFS4 (Schott; KzFS4 class)",
      apd: false,
      role: "Negative short-flint component of the rear cemented doublet; weaker than L2 to break strict symmetry.",
      cemented: "D2",
      dPgF: -0.01,
      nC: 1.60922,
      nF: 1.623,
      ng: 1.63071,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 32.508,
      glass: "N-SK16 (Schott)",
      apd: false,
      role: "Rear positive crown of the final doublet; provides the last refracting power before the image side.",
      cemented: "D2",
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
    },
  ],

  surfaces: [
    { label: "1", R: 20.6, d: 6.872, sd: 12.2, medium: 1 },
    { label: "2", R: "flat", d: 2.856, sd: 10.4, medium: 2 },
    { label: "3", R: 13.096, d: 1.16, sd: 8.5 },
    { label: "4", R: 18.976, d: 3.048, sd: 8.0, medium: 3 },
    { label: "5", R: 27.584, d: 4.6, sd: 7.2 },
    { label: "STO", R: "flat", d: 3.352 },
    { label: "6", R: -108.632, d: 4.016, sd: 7.2, medium: 4 },
    { label: "7", R: -39.96, d: 1.144, sd: 8.0 },
    { label: "8", R: -18.504, d: 3.096, sd: 8.5, medium: 5 },
    { label: "9", R: "flat", d: 6.296, sd: 10.4, medium: 6 },
    { label: "10", R: -20.168, d: 62.089, sd: 12.2 },
  ],

  focus: {
    closeFocusM: 0.085,
    description:
      "Finite-conjugate enlarging lens; focus is set by changing enlarger lens/negative/easel distances. The optical unit is rigid and the patent publishes no internal focus variables.",
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

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

  layout: { scFill: 0.64, yScFill: 0.74 },
} satisfies LensDataV2Input;

export default LENS_DATA;
