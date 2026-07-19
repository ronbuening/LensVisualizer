import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║             LENS DATA — CANON EF 200mm f/1.8 L USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H01-102413 A, Numerical Example 1 (Canon).           ║
 * ║  Three principal groups with positive-negative-positive power.         ║
 * ║  Patent core: 10 powered elements / 8 air-spaced groups, all spherical.║
 * ║  Focus: cemented negative G2 moves 14.49 mm imageward to 2.5 m.        ║
 * ║                                                                          ║
 * ║  PRODUCTION-COUNT NOTE:                                                  ║
 * ║    Canon specifies 12 elements / 10 groups. Its official block diagram  ║
 * ║    adds a plane-parallel front plate and a plane-parallel rear filter    ║
 * ║    group to the patent's 10-element powered core. They are not modeled:  ║
 * ║    the patent gives no prescription for the front plate, and project     ║
 * ║    rules exclude filters. elementCount/groupCount therefore describe     ║
 * ║    the transcribed patent prescription.                                  ║
 * ║                                                                          ║
 * ║  NOTE ON APERTURE STOP:                                                  ║
 * ║    The patent does not tabulate a stop surface. A working stop position ║
 * ║    is estimated in D13 from Canon's production block diagram, 8.00 mm   ║
 * ║    before R14. D13 remains 32.20 mm at infinity and 17.71 mm at 2.5 m.  ║
 * ║    Stop SD = 19.438574 mm gives the patent design aperture f/1.86.       ║
 * ║                                                                          ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                 ║
 * ║    The patent publishes no clear apertures. SDs use combined marginal-  ║
 * ║    and chief-ray traces, the patent/production outlines, and conservative║
 * ║    mechanical limits. They pass sd/|R| < 0.90, element SD ratio <= 1.25,║
 * ║    edge thickness >= 0.5 mm, and signed gap intrusion <= 90%. The       ║
 * ║    inferred apertures contain the infinity on-axis f/1.86 bundle but     ║
 * ║    intentionally retain modeled field and close-focus vignetting.        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-200mm-f1-8-l-usm",
  maker: "Canon",
  name: "CANON EF 200mm f/1.8 L USM",
  subtitle: "JP H01-102413 A, Numerical Example 1 — Canon / Ogawa and Takahashi",
  specs: [
    "10 POWERED ELEMENTS / 8 GROUPS (PATENT CORE)",
    "f ≈ 200.017 mm",
    "f/1.86 PATENT DESIGN",
    "2ω = 12.3°",
    "3 UD-CLASS ELEMENTS",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 200,
  focalLengthDesign: 200.016526,
  apertureMarketing: 1.8,
  apertureDesign: 1.86,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H01-102413 A",
  patentAuthors: ["Hideki Ogawa", "Sadatoshi Takahashi"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1989,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 194.863158,
      glass: "S-FPL51 (OHARA; 497816 class, supplier inferred)",
      apd: "inferred",
      apdNote: "Current OHARA S-FPL51 catalog coordinate; dPgF = +0.0280.",
      dPgF: 0.028,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      role: "First low-dispersion positive collector in G1; one of the three production UD-correlated positions.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.6,
      fl: 272.181368,
      glass: "S-FPL51 (OHARA; 497816 class, supplier inferred)",
      apd: "inferred",
      apdNote: "Current OHARA S-FPL51 catalog coordinate; dPgF = +0.0280.",
      dPgF: 0.028,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      role: "Second low-dispersion positive collector in G1; distributes positive power across the front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -145.573569,
      glass: "BPH5 (historical OHARA; exact 654397 spectral match, supplier inferred)",
      nC: 1.64921,
      nF: 1.66569,
      ng: 1.6751,
      role: "First negative flint in G1; supplies opposite power and dispersion to the preceding ED positives.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.6,
      fl: 154.436378,
      glass: "S-FPL51 (OHARA; 497816 class, supplier inferred)",
      apd: "inferred",
      apdNote: "Current OHARA S-FPL51 catalog coordinate; dPgF = +0.0280.",
      dPgF: 0.028,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      role: "Third low-dispersion positive in G1; corresponds to the third UD-highlighted production position.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus, convex to object",
      nd: 1.6968,
      vd: 55.5,
      fl: -281.405845,
      glass: "S-LAL14 (OHARA; exact 697555 coordinate, supplier inferred)",
      nC: 1.692974,
      nF: 1.705522,
      ng: 1.71234,
      role: "Weak negative rear member of G1, immediately ahead of the first focus-variable gap.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.9,
      fl: 139.100259,
      glass: "PBH53 (historical OHARA; exact 847239 spectral match, supplier inferred)",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
      role: "Standalone-positive high-index component of the cemented, net-negative moving focus group.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 43.8,
      fl: -60.288767,
      glass: "BPM4 (historical OHARA; exact 613438 spectral match, supplier inferred)",
      nC: 1.60921,
      nF: 1.6232,
      ng: 1.63107,
      role: "Negative component that makes cemented doublet D1 net negative; D1 is the sole moving focus group.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus, concave to object",
      nd: 1.65412,
      vd: 39.7,
      fl: -58.224609,
      glass: "BPH5 (historical OHARA; exact 654397 spectral match, supplier inferred)",
      nC: 1.64921,
      nF: 1.66569,
      ng: 1.6751,
      role: "Strongly object-concave negative at the front of G3; forms the chromatically constrained rear doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus, convex to image",
      nd: 1.6516,
      vd: 58.6,
      fl: 71.057526,
      glass: "S-LAL7 (historical OHARA spectral match; supplier inferred)",
      apd: "inferred",
      apdNote: "Historical OHARA S-LAL7: theta_g,d = 1.2379 and delta theta_g,F = -0.0042.",
      dPgF: -0.0042,
      nC: 1.64821,
      nF: 1.65934,
      ng: 1.66537,
      role: "Positive partner in D2; its historical OHARA spectral data best match the patent's theta_3b condition.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 112.566809,
      glass: "S-PHM52 (OHARA; exact 618634 coordinate, supplier inferred)",
      nC: 1.615036,
      nF: 1.624794,
      ng: 1.630103,
      role: "Final positive singlet; with weakly negative D2, makes G3 net positive.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 123.12, d: 19.0, nd: 1.497, elemId: 1, sd: 57.0 },
    { label: "2", R: -430.59, d: 0.72, nd: 1.0, elemId: 0, sd: 54.0 },
    { label: "3", R: 89.981, d: 13.2, nd: 1.497, elemId: 2, sd: 53.8 },
    { label: "4", R: 255.652, d: 6.0, nd: 1.0, elemId: 0, sd: 49.0 },
    { label: "5", R: -704.106, d: 4.7, nd: 1.65412, elemId: 3, sd: 44.8 },
    { label: "6", R: 110.405, d: 18.0, nd: 1.0, elemId: 0, sd: 44.2 },
    { label: "7", R: 67.274, d: 15.55, nd: 1.497, elemId: 4, sd: 42.0 },
    { label: "8", R: 502.839, d: 0.5, nd: 1.0, elemId: 0, sd: 37.0 },
    { label: "9", R: 44.766, d: 4.5, nd: 1.6968, elemId: 5, sd: 36.5 },
    { label: "10", R: 34.941, d: 21.0, nd: 1.0, elemId: 0, sd: 31.3 },
    { label: "11", R: -1069.676, d: 6.0, nd: 1.84666, elemId: 6, sd: 27.0 },
    { label: "12", R: -106.363, d: 2.5, nd: 1.6134, elemId: 7, sd: 26.0 },
    { label: "13", R: 57.199, d: 24.2, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "STO", R: 1e15, d: 8.0, nd: 1.0, elemId: 0, sd: 19.438574 },
    { label: "14", R: -35.135, d: 4.4, nd: 1.65412, elemId: 8, sd: 20.0 },
    { label: "15", R: -475.931, d: 8.49, nd: 1.6516, elemId: 9, sd: 21.0 },
    { label: "16", R: -42.493, d: 0.15, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "17", R: 96.893, d: 5.5, nd: 1.618, elemId: 10, sd: 23.5 },
    { label: "18", R: -241.315, d: 72.089219, nd: 1.0, elemId: 0, sd: 23.0 },
  ],

  asph: {},

  /* D13 is split by the estimated stop: R13→STO varies; STO→R14 remains 8.00 mm. */
  var: {
    "10": [21.0, 35.49],
    "13": [24.2, 9.71],
  },
  varLabels: [
    ["10", "D10"],
    ["13", "D13 (to STO)"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (−, FOCUS)", fromSurface: "11", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  focusDescription: "Rear focus: cemented negative G2 moves 14.49 mm imageward from infinity to 2.5 m.",
  closeFocusM: 2.5,
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 8,
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.68,
  yScFill: 0.62,
  maxAspectRatio: 2.2,
} satisfies LensDataInput;

export default LENS_DATA;
