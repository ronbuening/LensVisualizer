import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF-S 18-55mm f/3.5-5.6                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP2005092056A, Numerical Example 5 (Canon Inc.; Takeshi Nishimura).║
 * ║  Production correlation: Canon EF-S 18-55mm f/3.5-5.6.                    ║
 * ║  11 elements / 9 air-separated groups; 4 zoom groups (− + − +).           ║
 * ║  One aspherical surface: patent R19, stored here as R19A.                  ║
 * ║                                                                            ║
 * ║  SOURCE CORRECTION: The selected A publication prints R10 = Stop and       ║
 * ║  R11 = infinity. The patent architecture requires the finite rear surface  ║
 * ║  of L2a before the stop. R10 is therefore a constrained source correction, ║
 * ║  independently solved against all three printed focal lengths as           ║
 * ║  R10 = -44.181130175128175 mm. The stop is placed at the original R11      ║
 * ║  axial station. This value is a modeling inference, not a verbatim patent  ║
 * ║  radius.                                                                   ║
 * ║                                                                            ║
 * ║  ZOOM: Patent gaps D8, D14, and D17 are stored on R8, R14, and R17.        ║
 * ║  R21 stores the independently computed paraxial BFD to the fixed image     ║
 * ║  plane at each zoom position. L1 reverses direction across the zoom range; ║
 * ║  L2 and L4 move essentially integrally at source precision.                ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: CONSTRAINED_RECONSTRUCTION. The patent publishes L1         ║
 * ║  objectward focusing but no close-focus spacing rows. Close-focus D8 values║
 * ║  are code-solved at Canon's 0.28 m focal-plane-referenced MFD with the      ║
 * ║  image plane and L2-L4 fixed. R14, R17, and R21 are zoom-only.             ║
 * ║                                                                            ║
 * ║  APERTURE MODEL: Patent endpoint design F-numbers 3.59 and 5.99 are kept   ║
 * ║  separate from the marketed f/3.5-5.6 designation. For the unpublished     ║
 * ║  31.74 mm state, F/4.42103340096855 is a constrained interpolation: the    ║
 * ║  exact pre-stop physical semi-diameter is linearly interpolated between the║
 * ║  two endpoint stop semi-diameters, then inverted through the same exact     ║
 * ║  pre-stop trace. nominalFno therefore carries modeled design values.       ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes none for Example 5. SDs are derived  ║
 * ║  from exact on-axis and 0.6-design-field marginal/chief-ray envelopes at   ║
 * ║  all three zoom positions and at infinity/0.28 m focus, then refined so    ║
 * ║  surviving full-field rays remain at every defined state. Edge thickness, ║
 * ║  actual rim slope, cross-gap intrusion, asphere height, and ray containment║
 * ║  were independently checked. They are modeling values, not patent data.    ║
 * ║                                                                            ║
 * ║  GLASS: The patent gives d-line nd/vd only. Glass strings therefore use    ║
 * ║  coordinate classes or Unmatched(...) rather than unproven vendor melts.   ║
 * ║  nC, nF, ng, and dPgF are intentionally omitted because the source does not║
 * ║  publish them and no historical melt identity is established.              ║
 * ║                                                                            ║
 * ║  No uniform scale is applied (s = 1). No sensor cover, filter, dummy plane, ║
 * ║  or mechanical part is included.                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-s-18-55mm-f3p5-5p6",
  maker: "Canon",
  name: "CANON EF-S 18-55mm f/3.5-5.6",
  subtitle: "JP2005092056A Example 5 — correlated to production EF-S 18-55mm f/3.5-5.6",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "18-55mm MARKETED",
    "18.0006-54.9988mm DESIGN",
    "f/3.5-5.6 MARKETED",
    "F/3.59-5.99 PATENT ENDPOINTS",
    "1 ASPHERICAL SURFACE",
  ],

  /* ── Metadata ── */
  focalLengthMarketing: [18, 55],
  focalLengthDesign: [18.00063621059004, 54.9987534396274],
  apertureMarketing: 3.5,
  apertureDesign: 3.59,
  lensMounts: ["canon-ef-s"],
  imageFormat: "aps-c",
  patentNumber: "JP 2005-092056 A",
  patentAuthors: ["Takeshi Nishimura"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2005,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 181.904259,
      glass: "516641 class (vendor unresolved)",
      role: "Weak positive front element in negative zoom group L1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.622992,
      vd: 58.2,
      indexReference: "d",
      fl: -28.908043,
      glass: "623582 class (vendor unresolved)",
      role: "Strong negative element in L1.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.2,
      indexReference: "d",
      fl: -37.89218,
      glass: "623582 class (vendor unresolved)",
      role: "Second negative-power element in L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      fl: 50.253395,
      glass: "847239 class (vendor unresolved)",
      role: "Positive high-index element completing negative zoom group L1.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.572501,
      vd: 57.8,
      indexReference: "d",
      fl: 57.992959,
      glass: "573578 class (vendor unresolved)",
      role: "Positive L2a element immediately before the aperture stop.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      fl: -50.344005,
      glass: "847239 class (vendor unresolved)",
      role: "Negative member of the cemented L2b doublet.",
      cemented: "L2b",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 20.16452,
      glass: "487702 class (vendor unresolved)",
      role: "Strong positive crown member of the cemented L2b doublet.",
      cemented: "L2b",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.620041,
      vd: 36.3,
      indexReference: "d",
      fl: -13.375923,
      glass: "620363 class (vendor unresolved)",
      role: "Negative member of zoom group L3 cemented doublet.",
      cemented: "L3",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.755199,
      vd: 27.5,
      indexReference: "d",
      fl: 23.149031,
      glass: "755275 class (vendor unresolved)",
      role: "Positive member of zoom group L3 cemented doublet.",
      cemented: "L3",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Weak Negative Meniscus (1x Asph)",
      nd: 1.58306,
      vd: 30.2,
      indexReference: "d",
      fl: -9994.646478,
      glass: "Unmatched (nd=1.583060, vd=30.2; coordinate class 583302)",
      role: "Near-zero-power first element of rear positive group L4; rear surface is aspherical.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 39.580844,
      glass: "516641 class (vendor unresolved)",
      role: "Final positive relay element in L4.",
    },
  ],

  // Fig. 13 (p. 18), inspected at 600 dpi: restore the larger front-group rims.
  // R4 stops at 11.8 mm to preserve R4-R5 clearance; the outer drawn flange is mechanical.
  /* ── Surface prescription ── */
  surfaces: [
    { label: "R1", R: 93.97, d: 3.2, nd: 1.51633, elemId: 1, sd: 20.5 },
    { label: "R2", R: -184142.483, d: 0.12, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "R3", R: 66.571, d: 1.6, nd: 1.622992, elemId: 2, sd: 17 },
    { label: "R4", R: 14.044, d: 7.82, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "R5", R: -186.656, d: 1.2, nd: 1.622992, elemId: 3, sd: 12.5 },
    { label: "R6", R: 27.091, d: 0.12, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "R7", R: 20.119, d: 2.9, nd: 1.84666, elemId: 4, sd: 12 },
    { label: "R8", R: 35.644, d: 32.31, nd: 1.0, elemId: 0, sd: 12 },
    { label: "R9", R: 131.721, d: 1.7, nd: 1.572501, elemId: 5, sd: 7.6 },
    { label: "R10", R: -44.181130175128175, d: 2.9, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1e15, d: 2.5, nd: 1.0, elemId: 0, sd: 6.26423971036203 },
    { label: "R12", R: 16.312, d: 0.8, nd: 1.84666, elemId: 6, sd: 7.8 },
    { label: "R13", R: 11.532, d: 4.75, nd: 1.48749, elemId: 7, sd: 7.6 },
    { label: "R14", R: -57.613, d: 1.62, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "R15", R: -33.004, d: 0.8, nd: 1.620041, elemId: 8, sd: 7.5 },
    { label: "R16", R: 11.18, d: 3.2, nd: 1.755199, elemId: 9, sd: 7.7 },
    { label: "R17", R: 27.194, d: 7.72, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "R18", R: -140.794, d: 1.5, nd: 1.58306, elemId: 10, sd: 9.8 },
    { label: "R19A", R: -144.846, d: 0.12, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "R20", R: -664.185, d: 4.16, nd: 1.51633, elemId: 11, sd: 10.2 },
    { label: "R21", R: -19.869, d: 34.21177480802583, nd: 1.0, elemId: 0, sd: 10.6 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    R19A: {
      K: 0,
      A4: 2.76705e-5,
      A6: 1.09618e-7,
      A8: 2.25895e-11,
      A10: -1.44537e-11,
      A12: 1.26393e-13,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    R8: [
      [32.31, 35.82417777403997],
      [12.13, 15.493419286570902],
      [2.05, 5.566683310128965],
    ],
    R14: [
      [1.62, 1.62],
      [4.33, 4.33],
      [7.91, 7.91],
    ],
    R17: [
      [7.72, 7.72],
      [5.02, 5.02],
      [1.44, 1.44],
    ],
    R21: [
      [34.21177480802583, 34.21177480802583],
      [45.84144866108657, 45.84144866108657],
      [64.59741600530013, 64.59741600530013],
    ],
  },
  varLabels: [
    ["R8", "D8 / FOCUS"],
    ["R14", "D14"],
    ["R17", "D17"],
    ["R21", "BF"],
  ],

  /* ── Zoom configuration ── */
  zoomPositions: [18, 31.74, 55],
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "L1 (-)", fromSurface: "R1", toSurface: "R8" },
    { text: "L2 (+)", fromSurface: "R9", toSurface: "R14" },
    { text: "L3 (-)", fromSurface: "R15", toSurface: "R17" },
    { text: "L4 (+)", fromSurface: "R18", toSurface: "R21" },
  ],
  doublets: [
    { text: "L2b", fromSurface: "R12", toSurface: "R14" },
    { text: "L3", fromSurface: "R15", toSurface: "R17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: L1 focuses by moving objectward. Close-focus D8 values are code-solved at Canon's 0.28 m focal-plane-referenced MFD with the image plane and L2-L4 fixed; all other authored close gaps equal their infinity values.",

  /* ── Aperture configuration ── */
  nominalFno: [3.59, 4.42103340096855, 5.99],
  fstopSeries: [3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 36],
  apertureBlades: 6,
  maxFstop: 36,

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
