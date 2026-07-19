import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — KODAK AERO EKTAR 6 in f/3.5                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,983,193 Fig. 2 (Willy Schade / Eastman Kodak).  ║
 * ║  Six-element, four-group M-type / double-Gauss aerial objective.   ║
 * ║  All-spherical: two positive singlets plus two cemented doublets.  ║
 * ║                                                                    ║
 * ║  Scaling: patent table is normalized at f = 100 mm. Values are     ║
 * ║  uniformly scaled ×1.523030854, giving computed EFL = 152.58 mm.         ║
 * ║  The encoded table uses the published S2 = 36.0 mm central space,  ║
 * ║  not the later text note that S2 = 36.7 mm was the best test set.  ║
 * ║                                                                    ║
 * ║  Stop: US2983193 places the diaphragm in the central airspace but  ║
 * ║  gives no axial coordinate. The stop is placed at the midpoint of  ║
 * ║  S2; its semi-diameter is calculated for f/3.5 by paraxial trace. ║
 * ║                                                                    ║
 * ║  Semi-diameters: inferred from 14.7° semi-field ray envelopes,     ║
 * ║  then constrained by sd/|R| < 0.90, element SD ratio ≤ 1.25,       ║
 * ║  edge thickness, and signed cross-gap sag intrusion.               ║
 * ║                                                                    ║
 * ║  Focus: no internal focus mechanism is specified. The BF variable  ║
 * ║  is a unit-focus visualization control to 10 m, not patent data.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "kodak-aero-ektar-6in-f35",
  maker: "Kodak",
  name: "KODAK AERO EKTAR 6 in f/3.5",
  subtitle: "US 2,983,193 Fig. 2 — Willy Schade / Eastman Kodak",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 152.58 mm", "F/3.5", "2ω ≈ 29.4°", "ALL-SPHERICAL"],

  focalLengthMarketing: 152.4,
  focalLengthDesign: 152.58,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "6x6",
  patentNumber: "US 2,983,193",
  patentAuthors: ["Willy Schade"],
  patentAssignees: ["Eastman Kodak Co"],
  patentYear: 1961,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.74,
      vd: 45.8,
      fl: 199.8,
      glass: "Unmatched (Kodak proprietary high-index lanthanum flint, 740/458)",
      apd: false,
      role: "Front positive collector; stronger outer curvature faces the object side.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.693,
      vd: 56.2,
      fl: 119.4,
      glass: "Unmatched (Kodak proprietary high-index crown, 693/562)",
      apd: false,
      role: "Positive member of the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.683,
      vd: 30.9,
      fl: -76.0,
      glass: "Unmatched (Kodak proprietary dense flint, 683/309)",
      apd: false,
      role: "High-dispersion negative member of the front cemented component.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.667,
      vd: 32.2,
      fl: -55.4,
      glass: "Unmatched (Kodak proprietary dense flint, 667/322)",
      apd: false,
      role: "Front member of the rear cemented component; bounds the central airspace.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.74,
      vd: 43.9,
      fl: 63.1,
      glass: "Unmatched (Kodak proprietary lanthanum flint, 740/439)",
      apd: false,
      role: "Positive member of the rear doublet; nearly cancels L4 in net power.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.74,
      vd: 46.4,
      fl: 166.4,
      glass: "Unmatched (Kodak proprietary high-index lanthanum flint, 740/464)",
      apd: false,
      role: "Rear positive collector; stronger outer curvature faces the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: 72.7095, d: 9.5951, nd: 1.74, elemId: 1, sd: 43.0 },
    { label: "2", R: 135.0471, d: 0.6092, nd: 1.0, elemId: 0, sd: 39.0 },
    { label: "3", R: 43.5739, d: 10.5089, nd: 1.693, elemId: 2, sd: 33.0 },
    { label: "4", R: 82.9443, d: 5.3306, nd: 1.683, elemId: 3, sd: 32.0 },
    { label: "5", R: 31.1003, d: 27.4146, nd: 1.0, elemId: 0, sd: 27.8 },
    { label: "STO", R: 1e15, d: 27.4146, nd: 1.0, elemId: 0, sd: 14.455 },
    { label: "6", R: -36.3243, d: 3.0461, nd: 1.667, elemId: 4, sd: 29.0 },
    { label: "7", R: -2180.9802, d: 9.4428, nd: 1.74, elemId: 5, sd: 28.0 },
    { label: "8", R: -45.7671, d: 0.1523, nd: 1.0, elemId: 0, sd: 28.0 },
    { label: "9", R: -1541.3072, d: 7.4629, nd: 1.74, elemId: 6, sd: 31.0 },
    { label: "10", R: -114.273, d: 93.5504, nd: 1.0, elemId: 0, sd: 35.0 },
  ],

  asph: {},

  var: {
    "10": [93.5504, 95.8949],
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

  closeFocusM: 10,
  focusDescription: "No internal focus mechanism; unit-focus back-focus extension shown to 10 m for visualization.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  scFill: 0.5,
  yScFill: 0.43,
} satisfies LensDataInput;

export default LENS_DATA;
