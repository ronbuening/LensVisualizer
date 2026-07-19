import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD XCD 2,8/65                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0319427 A1, Example 1 (Nittoh / Yazaki).    ║
 * ║  Positive–positive–positive three-group design, all spherical.     ║
 * ║  10 elements / 6 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: G1 + Stop + G2 move as unit; G3 fixed.                    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs taken directly from patent effective-diameter column         ║
 * ║    (Di/2). Patent lists effective diameters for all surfaces.       ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent lists two cover glass plates (S18–S20). Excluded per     ║
 * ║    project convention. Air-equivalent BFD folded into final        ║
 * ║    surface d: 20.73 + 0.80/1.53741 + 1.00/1.52312 = 21.91 mm.    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-xcd-65-f28",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 65mm f/2.8",
  subtitle: "US 2020/0319427 A1 Example 1 — Nittoh / Yazaki",
  specs: ["10 ELEMENTS / 6 GROUPS", "f ≈ 65.0 mm", "F/2.8", "2ω ≈ 46°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 65,
  focalLengthDesign: 65.02,
  apertureMarketing: 2.8,
  lensMounts: ["hasselblad-xcd"],
  imageFormat: "44x33",
  patentNumber: "US 2020/0319427 A1",
  patentAuthors: ["Takuya YAZAKI"],
  patentAssignees: ["Nittoh Inc"],
  patentYear: 2020,
  elementCount: 10,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 34.47,
      fl: -135.1,
      glass: "S-TIM27 (OHARA)",

      apd: false,
      role: "Negative component of B11; chromatic partner to L12 at cemented surface S2",
      cemented: "B11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.74,
      fl: 45.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Primary positive power in G1; high-index lanthanum crown, symmetry partner to L31",
      cemented: "B11",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.13,
      fl: 48.9,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Positive element in B12; low-dispersion barium crown for chromatic balance",
      cemented: "B12",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.03,
      fl: -29.6,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Negative element in B12; strongly curved rear surface S6 collimates beam toward stop",
      cemented: "B12",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.59551,
      vd: 39.24,
      fl: -51.9,
      glass: "S-TIM8 (OHARA)",
      apd: false,
      role: "Negative element in B21; mirrors B12 across stop for symmetry",
      cemented: "B21",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: 109.8,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "ED fluorophosphate; anomalous low dispersion marked with * in patent",
      role: "ED element in B21; primary secondary-spectrum corrector in the highest-power group",
      cemented: "B21",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 50.2,
      glass: "S-FPM3 (OHARA)",
      apd: "patent",
      apdNote: "Fluorophosphate with anomalous partial dispersion; marked * in patent",
      role: "Strongest positive element behind stop; bulk of G2 converging power",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.8919,
      vd: 37.13,
      fl: 36.5,
      glass: "S-LAH92 (OHARA)",
      apd: false,
      role: "Highest-index element; positive power in B31, symmetry partner to L12 in B11",
      cemented: "B31",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.13,
      fl: -70.8,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Highest-dispersion element; chromatic partner to L31 at cemented surface S14",
      cemented: "B31",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.24,
      fl: -75.5,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Trailing negative element; widens image cone for 44×33 coverage, quasi-telephoto rear",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: front group (positive), 4 elements in 2 cemented doublets ──
    // B11: L11 (neg) + L12 (pos) — positive meniscus cemented doublet, convex to object
    { label: "1", R: 38.557, d: 1.7, nd: 1.6398, elemId: 1, sd: 16.1 },
    { label: "2", R: 26.205, d: 5.2, nd: 1.83481, elemId: 2, sd: 14.9 }, // L11→L12 cement
    { label: "3", R: 77.6, d: 1.28, nd: 1.0, elemId: 0, sd: 14.0 },

    // B12: L13 (pos) + L14 (neg) — negative meniscus cemented doublet, convex to object
    { label: "4", R: 23.972, d: 6.3, nd: 1.58913, elemId: 3, sd: 11.65 },
    { label: "5", R: 129.0, d: 1.3, nd: 1.60342, elemId: 4, sd: 9.85 }, // L13→L14 cement
    { label: "6", R: 15.62, d: 8.75, nd: 1.0, elemId: 0, sd: 8.35 },

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 8.45, nd: 1.0, elemId: 0, sd: 7.55 },

    // ── G2: middle group (positive), 1 cemented doublet + 1 singleton ──
    // B21: L21 (neg) + L22 (pos, ED) — negative meniscus cemented doublet, concave to object
    { label: "8", R: -17.672, d: 1.4, nd: 1.59551, elemId: 5, sd: 9.1 },
    { label: "9", R: -42.478, d: 3.3, nd: 1.497, elemId: 6, sd: 10.75 }, // L21→L22 cement
    { label: "10", R: -24.498, d: 0.2, nd: 1.0, elemId: 0, sd: 11.85 },

    // L23: biconvex positive singleton (anomalous dispersion glass)
    { label: "11", R: 271.932, d: 6.8, nd: 1.53775, elemId: 7, sd: 14.6 },
    { label: "12", R: -29.703, d: 1.0, nd: 1.0, elemId: 0, sd: 15.45 }, // variable gap → G3

    // ── G3: rear group (weakly positive, fixed), 1 cemented doublet + 1 singleton ──
    // B31: L31 (pos) + L32 (neg) — positive meniscus cemented doublet, concave to object
    { label: "13", R: -579.519, d: 12.37, nd: 1.8919, elemId: 8, sd: 18.75 },
    { label: "14", R: -31.09, d: 4.6, nd: 1.69895, elemId: 9, sd: 19.55 }, // L31→L32 cement
    { label: "15", R: -88.755, d: 4.35, nd: 1.0, elemId: 0, sd: 20.0 },

    // L33: negative meniscus singleton, concave to object
    { label: "16", R: -35.501, d: 2.2, nd: 1.48749, elemId: 10, sd: 20.0 },
    { label: "17", R: -1023.357, d: 21.91, nd: 1.0, elemId: 0, sd: 21.8 }, // air-eq BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus) ──
   *  Single variable gap: G1+Stop+G2 move as unit toward object; G3 fixed.
   *  Patent Fig. 3: d12 = 1.00 (infinity) → 14.46 (400 mm from S1, ≈ 0.50 m MFD from image plane).
   */
  var: {
    "12": [1.0, 14.46],
  },

  varLabels: [["12", "BF"]],

  /* ── Group annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "8", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "17" },
  ],

  doublets: [
    { text: "B11", fromSurface: "1", toSurface: "3" },
    { text: "B12", fromSurface: "4", toSurface: "6" },
    { text: "B21", fromSurface: "8", toSurface: "10" },
    { text: "B31", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription: "Front-group focus: G1, stop, and G2 move as a unit toward the object. G3 is fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
