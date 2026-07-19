import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                  LENS DATA — Leica Elmarit-R 35mm f/2.8                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: FR 1,471,493, Ernst Leitz G.m.b.H.                         ║
 * ║  Single worked example: f = 1.0, s' = 1.0918f, aperture ratio 1:2.8.      ║
 * ║  7 elements / 5 air-separated groups, all spherical.                     ║
 * ║  Focus: unit focus. Patent publishes infinity prescription only; close   ║
 * ║  focus is modeled as rear BF extension to the production 0.30 m MFD.     ║
 * ║                                                                            ║
 * ║  NOTE ON SCALING:                                                         ║
 * ║    Patent prescription is normalized to f = 1.0. All radii, thicknesses,  ║
 * ║    spacings, and inferred semi-diameters are scaled ×35.0. The resulting ║
 * ║    paraxial EFL is 35.073 mm at the patent e-line indices.                ║
 * ║                                                                            ║
 * ║  NOTE ON REFRACTIVE-INDEX FIELDS:                                         ║
 * ║    The patent gives mercury e-line n_e / ν_e values. The project schema   ║
 * ║    stores these in nd/vd fields because it has no separate e-line fields. ║
 * ║    Do not treat the stored nd values as catalog d-line matches.           ║
 * ║                                                                            ║
 * ║  NOTE ON APERTURE STOP:                                                   ║
 * ║    The drawing places the stop in air gap l3, between R7 and R8, but the  ║
 * ║    table does not give an axial stop coordinate. The l3 gap is split      ║
 * ║    equally here. Stop semi-diameter is computed from the f/2.8 entrance   ║
 * ║    pupil using the paraxial transfer to that inferred stop plane.         ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║    The patent omits clear apertures. Values below are conservative        ║
 * ║    renderer-safe estimates constrained by marginal/chief-ray geometry,    ║
 * ║    rim slope, edge thickness, element SD ratios, and cross-gap sag.       ║
 * ║                                                                            ║
 * ║  IMPORTANT: This file describes ONLY the optical design: glass elements,  ║
 * ║  refracting surfaces, aperture stop, and focus variable BF gap.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-elmarit-r-35mm-f28",
  maker: "Leica",
  name: "LEICA ELMARIT-R 35mm f/2.8",
  subtitle: "FR 1,471,493 — Ernst Leitz G.m.b.H.",
  specs: ["7 elements / 5 groups", "f ≈ 35.1 mm", "1:2.8", "2ω ≈ 63.3°", "all spherical"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.073,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["leica-r"],
  imageFormat: "135-full-frame",
  patentNumber: "FR 1,471,493",
  patentAuthors: [],
  patentAssignees: ["Ernst Leitz G.m.b.H."],
  patentYear: 1967,
  elementCount: 7,
  groupCount: 5,
  focusDescription:
    "Unit focusing. The patent publishes only the infinity prescription; close focus is approximated as rear BF extension to 0.30 m.",

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4892,
      vd: 69.9,
      fl: -54.908,
      glass: "FK5 / N-FK5 class (Schott legacy; patent n_e)",
      apd: false,
      role: "Front negative meniscus establishing the retrofocus extension and helping field flattening.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6713,
      vd: 41.6,
      fl: 16.463,
      glass: "BaSF6-class (Schott legacy barium dense flint, inferred; patent n_e)",
      apd: false,
      role: "Strong positive collector in the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6299,
      vd: 38.8,
      fl: -23.183,
      glass: "Unmatched (flint/barium-flint position; no confident public catalog match; patent n_e)",
      apd: false,
      role: "Negative rear element of the front doublet; creates the weak positive cemented junction at R4.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6241,
      vd: 60.1,
      fl: 36.457,
      glass: "SK16 / N-SK16 class (Schott legacy dense barium crown; patent n_e)",
      apd: false,
      role: "Front positive member of the triplet-like rear subsystem, immediately before the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7046,
      vd: 34.6,
      fl: -18.039,
      glass: "Unmatched (dense flint; no confident public catalog match; patent n_e)",
      apd: false,
      role: "Central negative triplet element; primary negative Petzval and chromatic counterweight.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6734,
      vd: 46.9,
      fl: -19.237,
      glass: "BaF13-class (Schott legacy barium flint, inferred; patent n_e)",
      apd: false,
      role: "Negative front element of the rear cemented doublet; forms weak positive cemented junction with L7.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.694,
      vd: 54.6,
      fl: 12.082,
      glass: "Unmatched (LAK9-class lanthanum crown; patent e-line value stored)",
      apd: false,
      role: "Rear positive doublet member and final strong converging element.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.025, d: 2.24, nd: 1.4892, elemId: 1, sd: 13.7 },
    { label: "2", R: 15.61, d: 15.365, nd: 1.0, elemId: 0, sd: 13.7 },
    { label: "3", R: 52.115, d: 10.605, nd: 1.6713, elemId: 2, sd: 11.2 },
    { label: "4", R: -12.88, d: 1.855, nd: 1.6299, elemId: 3, sd: 11.2 },
    { label: "5", R: -115.255, d: 0.105, nd: 1.0, elemId: 0, sd: 10.7 },
    { label: "6", R: 23.59, d: 2.975, nd: 1.6241, elemId: 4, sd: 10.2 },
    { label: "7", R: -609.98, d: 1.6625, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "STO", R: 1e15, d: 1.6625, nd: 1.0, elemId: 0, sd: 7.008 },
    { label: "8", R: -39.935, d: 1.505, nd: 1.7046, elemId: 5, sd: 8.4 },
    { label: "9", R: 18.935, d: 1.96, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "10", R: 400.925, d: 1.505, nd: 1.6734, elemId: 6, sd: 7.8 },
    { label: "11", R: 12.53, d: 6.3, nd: 1.694, elemId: 7, sd: 8.6 },
    { label: "12", R: -20.125, d: 38.213, nd: 1.0, elemId: 0, sd: 8.6 },
  ],

  asph: {},

  /* Patent gives only infinity data. The close-focus value is a unit-focus BF extension estimate for 0.30 m. */
  var: {
    "12": [38.213, 44.211],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  closeFocusM: 0.3,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.58,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
