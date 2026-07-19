import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — AGFA SOLAGON 50mm f/2                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,745,315 Example 1 (Theodor Brendel / Agfa).      ║
 * ║  Six-element, four-group double-Gauss with plane cemented           ║
 * ║  surfaces in both negative inner menisci.                           ║
 * ║  6 elements / 4 groups, all spherical.                              ║
 * ║  Focus: unit focus; only the final image-side gap changes.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized to f = 100 mm. All radii,      ║
 * ║    thicknesses, air spaces, back focus, stop size, and estimated     ║
 * ║    semi-diameters are scaled ×0.5 to the production 50 mm class.     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent table gives only the full central air space l2. The    ║
 * ║    aperture stop is shown in Fig. 1 inside that gap; here l2 is      ║
 * ║    split equally around STO (5.22 mm + 5.22 mm after scaling).       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent omits clear-aperture data. Semi-diameters are          ║
 * ║    estimated from paraxial marginal/chief-ray traces, the Fig. 1     ║
 * ║    relative element proportions, edge-thickness checks, and the      ║
 * ║    renderer's spherical-rim and same-element diameter constraints.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "agfa-solagon-50mm-f2",
  maker: "Agfa",
  name: "AGFA SOLAGON 50mm f/2",
  subtitle: "US 2,745,315 Example 1 — Brendel / Agfa",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.08 mm", "F/2", "2ω ≈ 46.7°", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0848,
  apertureMarketing: 2,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,745,315",
  patentAuthors: ["Brendel Theodor"],
  patentAssignees: ["Agfa Camera Werk AG"],
  patentYear: 1956,
  elementCount: 6,
  groupCount: 4,
  focusDescription:
    "Unit focus; final back-focus gap varies from infinity to a representative 0.914 m (3 ft) close-focus setting; this finite state is not patent-published.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.623,
      vd: 58.1,
      fl: 82.165,
      glass: "N-SK15 / SK15 class (Schott; patent 623/581)",
      role: "Front positive meniscus; one of the two low-dispersion outer singlets.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.6667,
      vd: 48.4,
      fl: 25.367,
      glass: "S-BAH11 (Ohara) / BaF11 cross-reference class (patent 667/484)",
      role: "Positive element of the front cemented meniscus; plane rear cemented interface.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.6254,
      vd: 35.6,
      fl: -18.838,
      glass: "Unmatched (625/356 flint; CDGM F6/H-F6 and Schott F7 class candidates)",
      role: "Negative element of the front cemented meniscus; concave rear surface faces the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Concave-Plano Negative",
      nd: 1.6254,
      vd: 35.6,
      fl: -23.356,
      glass: "Unmatched (625/356 flint; CDGM F6/H-F6 and Schott F7 class candidates)",
      role: "Negative element of the rear cemented meniscus; concave front surface faces the stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.6667,
      vd: 48.4,
      fl: 32.134,
      glass: "S-BAH11 (Ohara) / BaF11 cross-reference class (patent 667/484)",
      role: "Positive element of the rear cemented meniscus; plane front cemented interface.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.623,
      vd: 58.1,
      fl: 47.252,
      glass: "N-SK15 / SK15 class (Schott; patent 623/581)",
      role: "Rear positive singlet; strongest rear-half contributor to final convergence.",
    },
  ],

  surfaces: [
    { label: "1", R: 34.9215, d: 3.33, nd: 1.623, elemId: 1, sd: 14.2 },
    { label: "2", R: 105.8665, d: 0.305, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "3", R: 16.9125, d: 5.795, nd: 1.6667, elemId: 2, sd: 11.2 },
    { label: "4", R: 1e15, d: 1.445, nd: 1.6254, elemId: 3, sd: 11.2 },
    { label: "5", R: 11.7815, d: 5.22, nd: 1.0, elemId: 0, sd: 10.0 },

    // STO position inferred from Fig. 1; l2 split equally around the iris.
    { label: "STO", R: 1e15, d: 5.22, nd: 1.0, elemId: 0, sd: 8.587057 },

    { label: "6", R: -14.607, d: 1.495, nd: 1.6254, elemId: 4, sd: 10.2 },
    { label: "7", R: 1e15, d: 5.41, nd: 1.6667, elemId: 5, sd: 11.2 },
    { label: "8", R: -21.4235, d: 0.05, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "9", R: 310.015, d: 3.135, nd: 1.623, elemId: 6, sd: 12.8 },
    { label: "10", R: -32.4, d: 34.301821, nd: 1.0, elemId: 0, sd: 12.8 },
  ],

  asph: {},

  var: {
    "10": [34.301821, 37.37203],
  },
  varLabels: [["10", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.9144,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.53,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
