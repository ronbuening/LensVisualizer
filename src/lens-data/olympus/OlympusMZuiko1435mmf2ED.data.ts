import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Olympus Zuiko Digital ED 14–35mm f/2.0 SWD        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,081,392 B2, Numerical Example 3 (Olympus).      ║
 * ║  Three-group Four Thirds constant-aperture zoom: positive G1,      ║
 * ║  split negative G2, aperture stop, positive G3.                    ║
 * ║  18 elements / 17 groups, four aspherical surfaces.                ║
 * ║  Focus: floating inner focus by split G2; G2F–G2R spacing is       ║
 * ║  subject-distance dependent but zoom-position independent.         ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D18, BF.                                  ║
 * ║  Focus variable gaps: D6, D14, D18, BF.                            ║
 * ║  D14 is the patent's key zoom-independent floating spacing.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║  No scaling applied. Patent design focal lengths are 14.22, 22.08, ║
 * ║  and 34.28 mm; manufacturer nominal range is 14–35 mm.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not list clear apertures. Semi-diameters are      ║
 * ║  conservative reconstruction values sized from paraxial marginal   ║
 * ║  and chief-ray envelopes, then reduced where needed to satisfy     ║
 * ║  the renderer's sd/|R|, edge-thickness, element-ratio, and signed  ║
 * ║  cross-gap sag limits.                                             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ║    ✗ DO NOT include: parent/donor designs                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-digital-ed-14-35mm-f2-swd",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO DIGITAL ED 14-35mm f/2.0 SWD",
  subtitle: "US 8,081,392 B2 Example 3 — Ishii / Shimizu, Olympus",

  catalog: {
    lensMounts: ["four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "18 elements / 17 groups",
      "14–35 mm f/2.0 marketed; 14.22–34.28 mm patent",
      "Four Thirds mount and format",
      "Four aspherical surfaces",
      "Split-G2 floating inner focus",
    ],
    elementCount: 18,
    groupCount: 17,
    focalLengthMm: { marketing: [14, 35], design: [14.22, 34.28] },
    fNumber: { marketing: 2, design: 2.04 },
  },

  source: {
    patentNumber: "US 8,081,392 B2",
    patentYear: 2011,
    authors: ["Atsujiro Ishii", "Yoshiaki Shimizu"],
    assignees: ["Olympus Imaging Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -197.0,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion negative member of the positive first group; front-group chromatic balancer.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 156.0,
      glass: "S-LAH66 (OHARA)",
      role: "High-index positive front-group power element; its flat rear surface identifies Example 3.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 141.8,
      glass: "S-LAH66 (OHARA)",
      role: "Second high-index positive in G1; completes the weak positive front collector.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.76,
      focalLengthMm: -24.8,
      glass: "S-LAH58 (OHARA)",
      role: "Strong high-index negative element in G2F; principal front-unit variator power with moderated Petzval cost.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58253,
      vd: 59.32,
      focalLengthMm: -57.5,
      glass: "S/L-BAL42-class molded barium crown (OHARA class; exact public catalog match not found)",
      role: "Double-aspheric front-unit negative meniscus; primary wide-end distortion and off-axis field-aberration control element.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: -140.5,
      glass: "S-FSL5 (OHARA)",
      role: "Weak low-dispersion negative element in G2F; trims the chromatic balance of the negative front unit.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 42.3,
      glass: "S-TIH53 (OHARA)",
      role: "Positive high-dispersion member inside G2F; achromatizes the strong negative front unit.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.26,
      focalLengthMm: -53.9,
      glass: "S-TIM2 (OHARA)",
      role: "Negative member of the rear focus unit G2R.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 108.0,
      glass: "S-LAH51 (OHARA)",
      role: "Positive member of G2R; balances astigmatism change during the floating focus stroke.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.6398,
      vd: 34.46,
      focalLengthMm: 96.8,
      glass: "S-TIM27 (OHARA)",
      role: "First post-stop positive element; starts the rear relay group's reconvergence.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 57.05,
      focalLengthMm: 65.0,
      glass: "S-BSM10 (OHARA)",
      role: "Moderate-dispersion barium-crown power element in G3.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.57501,
      vd: 41.5,
      focalLengthMm: -75.8,
      glass: "S-TIL27 (OHARA)",
      role: "Weak rear-group negative for spherical, chromatic, and field-balance trimming.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 78.6,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.537; deviation from formula (6) = +0.033.",
      role: "Condition-(a) ED positive in the rear group; contributes to secondary-spectrum control behind the stop.",
      dPgF: 0.033,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.08,
      focalLengthMm: -29.9,
      glass: "S-TIM28 (OHARA)",
      role: "High-dispersion negative member of the only cemented doublet.",
      cemented: "D1",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (Super ED)",
      nd: 1.43875,
      vd: 94.93,
      focalLengthMm: 33.8,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.534; deviation from formula (6) = +0.054.",
      role: "Condition-(a) super-ED positive; the strongest low-dispersion anomalous member in the lens.",
      cemented: "D1",
      dPgF: 0.054,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -45.9,
      glass: "S-LAH95 (OHARA; catalog νd ≈ 31.34)",
      role: "Very-high-index rear negative element; Petzval-balancing dense lanthanum flint, not a crown glass.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive (ED, 2× Asph)",
      nd: 1.4964,
      vd: 81.24,
      focalLengthMm: 41.9,
      glass: "S-FPL51 / FCD1-class moldable ED (exact public catalog match not found)",
      apd: "patent",
      apdNote: "Patent groups L13 and L17 together: θgF = 0.537; deviation from formula (6) = +0.033.",
      role: "Double-aspheric ED positive near the image side; combines rear-group spherical/field correction with condition-(a) secondary-spectrum control.",
      dPgF: 0.033,
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.63494,
      vd: 23.22,
      focalLengthMm: 91.3,
      glass: "Unmatched proprietary short flint (635/232, condition-b APD glass)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.668; deviation from formula (6) = +0.060.",
      role: "Condition-(b) high-dispersion anomalous positive; supplies the reverse secondary-spectrum term described in the patent.",
      dPgF: 0.06,
    },
  ],

  surfaces: [
    { label: "1", R: 388.432, d: 2.63, sd: 38.5, medium: 1 },
    { label: "2", R: 116.328, d: 0.19, sd: 31.0 },
    { label: "3", R: 120.478, d: 6.23, sd: 31.0, medium: 2 },
    { label: "4", R: "flat", d: 0.2, sd: 31.0 },
    { label: "5", R: 55.418, d: 6.31, sd: 31.0, medium: 3 },
    { label: "6", R: 106.616, sd: 31.0 },
    { label: "7", R: 58.092, d: 2.01, sd: 17.1, medium: 4 },
    { label: "8", R: 15.659, d: 8.62, sd: 13.7 },
    {
      label: "9A",
      R: 499.999,
      d: 1.92,
      sd: 15.5,
      medium: 5,
      asphere: { K: 0, A4: 2.33955e-5, A6: -1.46412e-7, A8: 5.37937e-10, A10: -1.32462e-12 },
    },
    {
      label: "10A",
      R: 31.329,
      d: 6.88,
      sd: 12.5,
      asphere: { K: 0, A4: 7.38718e-6, A6: -1.66142e-7, A8: 3.75503e-10, A10: -1.27423e-12 },
    },
    { label: "11", R: -22.54, d: 1.62, sd: 12.5, medium: 6 },
    { label: "12", R: -34.382, d: 0.15, sd: 12.5 },
    { label: "13", R: 109.408, d: 4.13, sd: 16.0, medium: 7 },
    { label: "14", R: -52.304, sd: 16.0 },
    { label: "15", R: -53.386, d: 1.61, sd: 16.0, medium: 8 },
    { label: "16", R: 90.446, d: 0.15, sd: 16.0 },
    { label: "17", R: 74.131, d: 2.68, sd: 16.0, medium: 9 },
    { label: "18", R: 577.522, sd: 16.0 },
    { label: "STO", R: "flat", d: 1.7 },
    { label: "20", R: 54.962, d: 2.98, sd: 13.8, medium: 10 },
    { label: "21", R: 477.175, d: 0.15, sd: 14.0 },
    { label: "22", R: 44.882, d: 3.94, sd: 14.2, medium: 11 },
    { label: "23", R: -400.001, d: 9.25, sd: 14.6 },
    { label: "24", R: -37.96, d: 1.79, sd: 15.4, medium: 12 },
    { label: "25", R: -300, d: 0.15, sd: 15.4 },
    { label: "26", R: 90.287, d: 3.53, sd: 15.4, medium: 13 },
    { label: "27", R: -67.879, d: 0.29, sd: 15.4 },
    { label: "28", R: -1026.371, d: 1.6, sd: 12.5, medium: 14 },
    { label: "29", R: 21.042, d: 7.45, sd: 12.5, medium: 15 },
    { label: "30", R: -44.725, d: 0.17, sd: 10.0 },
    { label: "31", R: -40.315, d: 1.59, sd: 10.0, medium: 16 },
    { label: "32", R: -1452.783, d: 0.15, sd: 12.5 },
    {
      label: "33A",
      R: 45.448,
      d: 7.46,
      sd: 17.6,
      medium: 17,
      asphere: { K: 0, A4: -1.05652e-5, A6: 6.57981e-10, A8: 4.92273e-11, A10: -8.47219e-14 },
    },
    {
      label: "34A",
      R: -36.32,
      d: 0.15,
      sd: 17.6,
      asphere: { K: 0, A4: 4.57324e-6, A6: -1.30667e-8, A8: 5.78315e-11, A10: -9.06114e-14 },
    },
    { label: "35", R: -2245.818, d: 2.9, sd: 16.8, medium: 18 },
    { label: "36", R: -56.553, sd: 16.8 },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 14.22, label: "14 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 22.08, label: "22 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 34.28, label: "35 mm", published: true, publishedFocus: [1] },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.35,
    description:
      "Floating inner focus by the split negative second group. The G2F–G2R spacing changes with subject distance but remains identical at a given subject distance across the zoom range.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.6, 0.76],
        [9.28, 9.09],
        [28.72, 26.5],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [6.2, 0.85],
        [6.2, 0.85],
        [6.2, 0.85],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [33.99, 39.19],
        [11.81, 17.36],
        [1.99, 9.57],
      ],
    },
    "36": {
      label: "BF",
      values: [
        [33.77, 33.78],
        [41.71, 41.76],
        [46.62, 46.6],
      ],
    },
  },

  aperture: { nominalFNumber: 2.04, fStops: [2.04, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2F", fromSurface: "7", toSurface: "14" },
    { text: "G2R", fromSurface: "15", toSurface: "18" },
    { text: "G3", fromSurface: "20", toSurface: "36" },
  ],
  doublets: [{ text: "D1", fromSurface: "28", toSurface: "30" }],

  layout: { scFill: 0.58, yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
