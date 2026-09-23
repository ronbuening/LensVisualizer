import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR LENS A12 28mm f/2.5                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2012-003015 A, Example 1 (Table 1, aspheres ¶0094– ║
 * ║    0095, focus gaps Table 2, Fig. 1) — Takashi Kubota / Ricoh.       ║
 * ║  Positive–positive two-group wide-angle prime for an APS-C sensor   ║
 * ║    (patent image diagonal 28.6 mm, ω = 38.0°).                       ║
 * ║  9 elements / 6 groups; 2 aspherical surfaces on 2 elements          ║
 * ║    (L2 front, L9 front).                                             ║
 * ║  Focus: floating — Group 1 (L1–L4 + stop) and Group 2 (L5–L9) both   ║
 * ║    advance toward the object by different amounts.                   ║
 * ║                                                                      ║
 * ║  NOTE ON EXAMPLE CHOICE:                                             ║
 * ║    Ricoh's A12 28mm manual lists "9 elements in 6 groups (2          ║
 * ║    aspherical lens elements with 2 surfaces)". Example 1 is the only ║
 * ║    embodiment with exactly that construction and is the patent's     ║
 * ║    representative figure. (This file previously stored Example 3,   ║
 * ║    an 8-element design with 3 aspherical surfaces.) No example in    ║
 * ║    the patent has the "special low-dispersion" element Ricoh lists   ║
 * ║    together with those 9/6 counts, so the production prescription   ║
 * ║    is not claimed to be identical.                                   ║
 * ║                                                                      ║
 * ║  NOTE ON BACK FOCUS:                                                 ║
 * ║    Patent surfaces 17–18 are a 2.5 mm plate (nd 1.5168) standing    ║
 * ║    for cover glass/filters; it is excluded and its t/n = 1.648 mm is ║
 * ║    folded into the last gap. The table gives no plate-to-image       ║
 * ║    distance ("—"). D2 + t/n = 15.748 mm leaves the paraxial image     ║
 * ║    0.447 mm farther back, so that distance is added to both D2      ║
 * ║    states (derived: image plane at the paraxial focus, where the    ║
 * ║    Fig. 2 curves start at zero). Infinity 16.196, close 17.876.      ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    Not tabulated. Rims measured from Fig. 1 at 400 dpi (lens part    ║
 * ║    to scale, 16.8 px/mm from vertex crossings), then checked with an ║
 * ║    exact real-ray trace at f/2.56 and Y = 14.3 mm. The stop is the  ║
 * ║    traced f/2.56 iris radius.                                        ║
 * ║                                                                      ║
 * ║  CONIC CONSTANT CONVENTION:                                          ║
 * ║    Patent sag X = (H²/R)/[1+√(1−k(H/R)²)] + ΣC·H^n puts k in the     ║
 * ║    (1+K) slot, so K = k − 1 (surface 3: k 16.511 → K 15.511;         ║
 * ║    surface 15: k 0 → K −1).                                          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gxr-a12-18f25",
  maker: "Ricoh",
  name: "RICOH GR LENS A12 28mm f/2.5 (Ricoh GXR A12)",
  subtitle: "JP 2012-003015 A EXAMPLE 1 — KUBOTA / RICOH",
  specs: ["9 ELEMENTS / 6 GROUPS", "f = 18.24 mm (28 mm equiv.)", "F/2.56", "2ω = 76.0°", "2 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 18.3,
  focalLengthDesign: 18.24,
  apertureMarketing: 2.5,
  apertureDesign: 2.56,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "JP 2012-003015 A",
  patentAuthors: ["Takashi Kubota"],
  patentAssignees: ["Ricoh Co., Ltd."],
  patentYear: 2012,
  elementCount: 9,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6516,
      vd: 58.6,
      fl: -25.2,
      glass: "S-LAL7 (OHARA)",
      apd: false,
      role: "Front negative meniscus, convex to the object; widens the accepted field ahead of the positive members.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8061,
      vd: 40.4,
      fl: +44.6,
      glass: "806404 — lanthanum flint (catalog unresolved; nd 1.8061, νd 40.4)",
      apd: false,
      role: "First positive member of Group 1; its aspherical front surface is the front-group corrector.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6129,
      vd: 37.0,
      fl: -12.4,
      glass: "S-TIM3 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Flint half of the Group 1 rear doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.7,
      fl: +11.4,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Positive half of the Group 1 rear doublet; its rear surface faces the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.7,
      fl: +10.5,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Thick positive element behind the stop; main power of the Group 2 front doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.575,
      vd: 41.5,
      fl: -16.2,
      glass: "S-TIL27 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Negative half of the Group 2 front doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.8467,
      vd: 23.8,
      fl: -12.5,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Dense-flint negative half of the second Group 2 doublet; highest dispersion in the lens.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.7,
      fl: +15.0,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Positive half of the second Group 2 doublet; the pair is nearly afocal (−216 mm).",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: +63.3,
      glass: "L-LAH85V (OHARA)",
      apd: false,
      role: "Weak rear meniscus, convex to the image; its aspherical front surface corrects the outer field.",
    },
  ],

  /* ── Surface prescription (Table 1; surfaces 17–18 plate excluded) ── */
  surfaces: [
    // ── Group 1 ──
    { label: "1", R: 23.72, d: 1.1, nd: 1.6516, elemId: 1, sd: 9.4 }, // L1 front
    { label: "2", R: 9.52, d: 3.4, nd: 1.0, elemId: 0, sd: 7.4 }, // L1 rear → air
    { label: "3A", R: 59.04, d: 1.7, nd: 1.8061, elemId: 2, sd: 7.5 }, // L2 front (asph)
    { label: "4", R: -90.61, d: 1.1, nd: 1.0, elemId: 0, sd: 7.5 }, // L2 rear → air
    { label: "5", R: -18.02, d: 0.9, nd: 1.6129, elemId: 3, sd: 6.7 }, // L3 front
    { label: "6", R: 13.37, d: 3.0, nd: 1.8348, elemId: 4, sd: 6.7 }, // L3→L4 junction
    { label: "7", R: -29.58, d: 2.2, nd: 1.0, elemId: 0, sd: 6.5 }, // L4 rear → air

    // ── Aperture stop (surface 8; moves with Group 1) ──
    { label: "STO", R: 1e15, d: 4.46, nd: 1.0, elemId: 0, sd: 4.5 }, // D1

    // ── Group 2 ──
    { label: "9", R: 21.55, d: 4.3, nd: 1.8348, elemId: 5, sd: 7.6 }, // L5 front
    { label: "10", R: -13.34, d: 0.8, nd: 1.575, elemId: 6, sd: 7.6 }, // L5→L6 junction
    { label: "11", R: 31.58, d: 2.9, nd: 1.0, elemId: 0, sd: 7.6 }, // L6 rear → air
    { label: "12", R: -16.16, d: 0.8, nd: 1.8467, elemId: 7, sd: 9.1 }, // L7 front
    { label: "13", R: 31.25, d: 3.9, nd: 1.8348, elemId: 8, sd: 9.1 }, // L7→L8 junction
    { label: "14", R: -19.67, d: 0.1, nd: 1.0, elemId: 0, sd: 9.1 }, // L8 rear → air
    { label: "15A", R: -181.46, d: 2.0, nd: 1.854, elemId: 9, sd: 9.9 }, // L9 front (asph)
    { label: "16", R: -41.88, d: 16.196, nd: 1.0, elemId: 0, sd: 9.9 }, // L9 rear → image (D2 + t/n + derived plate-to-image)
  ],

  /* ── Aspherical coefficients (¶0094–0095); K = k_patent − 1 ── */
  asph: {
    "3A": {
      K: 15.511,
      A4: 1.057e-5,
      A6: -8.295e-7,
      A8: 3.194e-8,
      A10: -4.098e-10,
      A12: -1.55e-12,
      A14: 7.232e-14,
      A16: -6.999e-16,
      A18: -5.662e-18,
    },
    "15A": {
      K: -1,
      A4: -9.157e-5,
      A6: 1.096e-6,
      A8: -5.305e-8,
      A10: 1.237e-9,
      A12: -1.839e-11,
      A14: 1.517e-13,
      A16: -5.705e-16,
      A18: 3.284e-19,
    },
  },

  /* ── Variable air spacings (Table 2: INF / 200 mm) ──
   *  D1 (stop → L5): 4.46 → 3.85. D2 (L9 → plate): 14.10 → 15.78, stored as D2 + 1.648 (plate t/n)
   *  + 0.447 (derived plate-to-image distance). Group 2 advances 1.68 mm and Group 1 advances
   *  1.68 − 0.61 = 1.07 mm toward the object (derived from the two gaps).
   */
  var: {
    STO: [4.46, 3.85],
    "16": [16.196, 17.876],
  },
  varLabels: [
    ["STO", "D1"],
    ["16", "D2"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GROUP 1", fromSurface: "1", toSurface: "7" },
    { text: "GROUP 2", fromSurface: "9", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Focus configuration ──
   *  Patent reference close distance 200 mm (object to surface 1); object-to-image ≈ 248 mm.
   */
  closeFocusM: 0.248,
  focusDescription:
    "Floating focus — Group 1 (L1–L4 with the stop) and Group 2 (L5–L9) both advance toward the object; Group 2 moves farther (1.68 mm vs 1.07 mm at 200 mm).",

  /* ── Aperture configuration ── */
  nominalFno: 2.56,
  fstopSeries: [2.56, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  gapSagFrac: 0.98,
  scFill: 0.55,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
