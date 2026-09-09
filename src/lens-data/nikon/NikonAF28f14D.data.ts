import type { LensDataInput } from "../../types/optics.js";

/** US5315441A Embodiment1, Table1/equation PDF p.12 and Figure1 p.2.
 * Source conic k=1.974 in 1−k h²/r² maps to standard K=0.974.
 * All nineteen source radii/thicknesses/glass coordinates retained.
 * Stop is inserted at inferred4.65mm after S11, preserving the full D11 gap.
 * Source beta−0.1 station determines the near-distance label; no cover/filter rows.
 * Figure-derived rims are constrained at L4 and L8 where numerical edges conflict.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-28f14d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 28mm f/1.4 D",
  subtitle: "US 5,315,441 EXAMPLE 1 — NIKON / HORI & TATSUNO",
  specs: ["11 ELEMENTS / 8 GROUPS", "f = 28.6208 mm", "F/1.41", "2ω = 75.37°", "1 ASPHERICAL SURFACE"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.6208,
  apertureMarketing: 1.4,
  apertureDesign: 1.41,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,315,441 A",
  patentAuthors: ["Kenji Hori", "Wataru Tatsuno"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1994,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ──
   *  11 physical glass elements in 8 air-spaced groups (4 functional macro-groups).
   *  Three cemented doublets: L4 (G2), L6 (G3), L8 (G4).
   *  Two glasses reused: L2/L7 share nd=1.77279/νd=49.4; L5/L8a share nd=1.80411/νd=46.5.
   */
  elements: [
    // ── G1: Negative front group (1 element, 1 group) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: -79.66,
      glass: "BSC7 / BK7 type (HOYA BSC7 nd=1.51680, νd=64.20) (inferred coordinate counterpart)",
      apd: false,
      role: "Front negative meniscus, convex toward object, establishes the retrofocus entrance.",
    },

    // ── G2: Main positive group (5 elements, 4 groups) ──
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.77279,
      vd: 49.4,
      fl: 75.4,
      glass: "S-LAH66 (OHARA) — near nd=1.77250/νd=49.62 (inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet in moving G2; shares source coordinates with L7.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: -65.08,
      glass: "FK5 / S-FSL5 type (Schott FK5 nd=1.48749, νd=70.41) (inferred coordinate counterpart)",
      apd: false,
      role: "Low-dispersion negative meniscus in G2. Composition and production supplier are not identified.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5186,
      vd: 69.9,
      fl: 40.58,
      glass: "J-PKH1 (Hikari, 519699) (inferred coordinate counterpart)",
      apd: false,
      role: "Positive low-dispersion member of cemented L4.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51454,
      vd: 54.6,
      fl: -29.46,
      glass: "KF3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified) (inferred coordinate counterpart)",
      apd: false,
      role: "Biconcave negative member of L4; nearly matched index but different Abbe number from L4a.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.80411,
      vd: 46.5,
      fl: 30.79,
      glass: "S-LAH65V (OHARA) — near nd=1.80400/νd=46.58 (inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet immediately before the inferred stop; shares source coordinates with L8a.",
    },

    // ── G3: Negative correction group (3 elements, 2 groups) ──
    {
      id: 7,
      name: "L6a",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7481,
      vd: 52.3,
      fl: 120.71,
      glass: "748523 — E-LAKH1 catalog equivalent (Hikari; production supplier unspecified) (inferred coordinate counterpart)",
      apd: false,
      role: "Positive meniscus in cemented L6 of the faster-moving G3.",
      cemented: "L6",
    },
    {
      id: 8,
      name: "L6b",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      fl: -27.09,
      glass: "Dense flint (near OHARA S-TIH4, nd=1.75520, νd=27.53) (inferred coordinate counterpart)",
      apd: false,
      role: "Negative member of cemented L6; its Abbe number differs strongly from L6a.",
      cemented: "L6",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 9",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.77279,
      vd: 49.4,
      fl: 95.1,
      glass: "S-LAH66 (OHARA) — same as L2 (inferred coordinate counterpart)",
      apd: false,
      role: "Weak positive meniscus in G3 with source aspheric rear face. Standard K=0.974; fabrication method is not established by this prescription.",
    },

    // ── G4: Final positive group (2 elements, 1 group) ──
    {
      id: 10,
      name: "L8a",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.80411,
      vd: 46.5,
      fl: 25.52,
      glass: "S-LAH65V (OHARA) — same as L5 (inferred coordinate counterpart)",
      apd: false,
      role: "Biconvex positive member of L8, with a very weak but finite front curvature.",
      cemented: "L8",
    },
    {
      id: 11,
      name: "L8b",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23.0,
      fl: -105.12,
      glass: "J-SFH2 (Hikari coordinate match) (inferred coordinate counterpart)",
      apd: false,
      role: "Negative meniscus in L8; source text discusses this compound final lens in back-focus and distortion correction.",
      cemented: "L8",
    },
  ],

  /* ── Surface prescription ──
   *  19 patent surfaces + 1 inserted STO = 20 surfaces total.
   *  Patent Table 1 does not include stop as a separate row.
   *  Stop inserted in d11 gap at estimated position (see header note).
   */
  surfaces: [
    // ── G1 ──
    { label: "1", R: 66.23, d: 2.0, nd: 1.5168, elemId: 1, sd: 27.5 }, // L1 front
    { label: "2", R: 25.126, d: 13.9, nd: 1.0, elemId: 0, sd: 22.3 }, // L1 rear → air (d2, variable)

    // ── G2 ──
    { label: "3", R: 89.207, d: 4.7, nd: 1.77279, elemId: 2, sd: 20.5 }, // L2 front
    { label: "4", R: -164.124, d: 0.1, nd: 1.0, elemId: 0, sd: 20.5 }, // L2 rear → air
    { label: "5", R: 87.119, d: 1.5, nd: 1.48749, elemId: 3, sd: 18 }, // L3 front
    { label: "6", R: 23.125, d: 7.9, nd: 1.0, elemId: 0, sd: 15.5 }, // L3 rear → air
    { label: "7", R: -49.577, d: 9.0, nd: 1.5186, elemId: 4, sd: 14.3 }, // L4a front
    { label: "8", R: -15.69, d: 1.5, nd: 1.51454, elemId: 5, sd: 13.5 }, // L4a→L4b junction
    { label: "9", R: 462.539, d: 0.2, nd: 1.0, elemId: 0, sd: 16.7 }, // L4b rear → air
    { label: "10", R: 33.228, d: 9.0, nd: 1.80411, elemId: 6, sd: 18.3 }, // L5 front
    { label: "11", R: -85.405, d: 4.65, nd: 1.0, elemId: 0, sd: 18.3 }, // L5 rear → air (to stop)

    // ── Stop (inferred from Fig. 1; moves with G2) ──
    { label: "STO", R: 1e15, d: 7.9, nd: 1.0, elemId: 0, sd: 13.6 }, // aperture stop

    // ── G3 ──
    { label: "12", R: -23.276, d: 3.6, nd: 1.7481, elemId: 7, sd: 14.8 }, // L6a front
    { label: "13", R: -19.731, d: 1.0, nd: 1.7552, elemId: 8, sd: 14.8 }, // L6a→L6b junction
    { label: "14", R: -568.331, d: 1.0, nd: 1.0, elemId: 0, sd: 15.8 }, // L6b rear → air
    { label: "15", R: -122.249, d: 3.5, nd: 1.77279, elemId: 9, sd: 16.4 }, // L7 front
    { label: "16A", R: -46.473, d: 0.5, nd: 1.0, elemId: 0, sd: 16.4 }, // L7 rear → air (aspherical)

    // ── G4 ──
    { label: "17", R: 722.991, d: 9.3, nd: 1.80411, elemId: 10, sd: 17 }, // L8a front
    { label: "18", R: -21.0, d: 1.5, nd: 1.86074, elemId: 11, sd: 17 }, // L8a→L8b junction
    { label: "19", R: -28.251, d: 38.1031, nd: 1.0, elemId: 0, sd: 17.5 }, // L8b rear → BF (variable)
  ],

  /* ── Aspherical coefficients ──
   *  Surface 16A (L7 image-side): source asphere.
   *  Patent sag equation (even-polynomial + conic):
   *    Z(h) = (h²/R) / [1 + √(1 − (1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰
   *  Source k=1.974 uses 1−k(h/R)²; standard K=0.974.
   */
  asph: {
    "16A": {
      K: 0.974,
      A4: 1.644e-5,
      A6: 1.61e-8,
      A8: 1.721e-11,
      A10: -6.229e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (three-group floating focus) ──
   *  G1 fixed; G2+Stop and G4 coupled (Δd₂=Δd₄=3.5248 mm); G3 moves 10% more (Δd₃/Δd₂=1.1).
   *  Patent Table 1 variable spacings at infinity focus and close focus (β=−1/10):
   *    d2:   13.9000 → 10.3752  (G1→G2, decreasing)
   *    d11:  12.5500 → 12.1975  (G2→G3 total gap, decreasing)
   *    d16:   0.5000 →  0.8525  (G3→G4, increasing)
   *    BF:   38.1031 → 41.6279  (G4→image, increasing)
   *
   *  Since stop moves with G2, the d11 gap is split:
   *    S11 d = 4.65 (fixed: L5 rear to stop, both move with G2)
   *    STO d = 7.90 → 7.5475 (variable: stop to G3, only G3 side moves faster)
   */
  var: {
    "2": [13.9, 10.3752],
    STO: [7.9, 7.5475],
    "16A": [0.5, 0.8525],
    "19": [38.1031, 41.6279],
  },
  varLabels: [
    ["2", "D2"],
    ["STO", "Stop–G3"],
    ["16A", "D16"],
    ["19", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+)", fromSurface: "3", toSurface: "11" },
    { text: "G3 (−)", fromSurface: "12", toSurface: "16A" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "19" },
  ],
  doublets: [
    { text: "L4", fromSurface: "7", toSurface: "9" },
    { text: "L6", fromSurface: "12", toSurface: "14" },
    { text: "L8", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.39703262633180925,
  focusDescription:
    "Source 1:10 focus station corresponds to about 39.7 cm object-to-image. G1 stays fixed; G2 plus stop and G4 move 3.5248 mm objectward, G3 moves 3.8773 mm. Intermediate motion is interpolated.",

  /* ── Aperture configuration ── */
  nominalFno: 1.41,
  fstopSeries: [1.41, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
