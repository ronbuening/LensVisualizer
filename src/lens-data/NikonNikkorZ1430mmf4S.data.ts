import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR Z 14-30mm f/4 S                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2019-008031 A, Example 1 (Nikon / Uehara Ken).   ║
 * ║  Negative-lead (retrofocus) zoom: G1(−) G2(+) G3(+) G4(−) G5(−). ║
 * ║  14 elements / 12 groups, 4 aspherical surfaces on 4 elements.    ║
 * ║  Focus: Internal focus via G4 (single element L41) toward image.  ║
 * ║                                                                    ║
 * ║  Zoom variable gaps (zoom only): D1 (S8), D2 (STO).              ║
 * ║  Focus variable gaps (zoom + focus): D3 (S21), D4 (S23).         ║
 * ║  Back focal distance: Bf (S27), zoom only.                       ║
 * ║  Reversing groups: D3 is non-monotonic (1.579→2.261→2.007).      ║
 * ║  G2 and G5 share identical zoom trajectories (patent ¶93).       ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE-FOCUS:                                              ║
 * ║    Patent provides only infinity-focus spacings at 3 zoom          ║
 * ║    positions. Close-focus D3/D4 values are therefore inferred      ║
 * ║    from a real-ray focus-curvature calibration to the production   ║
 * ║    0.28 m MFD, yielding approximately 0.52 mm (W), 0.75 mm (M),   ║
 * ║    and 1.07 mm (T) of L41 travel toward the image.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent.  Estimated via combined marginal +        ║
 * ║    chief ray trace at f/4 and full field, constrained by edge      ║
 * ║    thickness ≥ 0.5 mm, cross-gap sag overlap ≤ gap × 1.1, and    ║
 * ║    aspherical slope < 64.2°.  Front group SDs are significantly   ║
 * ║    below paraxial beam estimates due to (a) heavy barrel           ║
 * ║    distortion at 14 mm reducing real chief-ray heights and         ║
 * ║    (b) the extreme aspherical departure on S4A limiting the        ║
 * ║    usable clear aperture to ~15 mm.                                ║
 * ║                                                                    ║
 * ║  NOTE ON CONIC CONVENTION:                                         ║
 * ║    Patent formula uses κ.  Physical reasonableness testing         ║
 * ║    confirms κ = K (standard conic constant) for this patent:       ║
 * ║    κ = −1 → paraboloid, κ = 0 → sphere.                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-14-30f4s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 14-30mm f/4 S",
  subtitle: "JP 2019-008031 A EXAMPLE 1 — NIKON / UEHARA",
  specs: [
    "14 ELEMENTS / 12 GROUPS",
    "f = 14.42–29.10 mm",
    "F/4.0 (CONSTANT)",
    "2ω ≈ 115.4° (WIDE)",
    "4 ASPHERICAL SURFACES / 4 ED ELEMENTS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [14, 30],
  focalLengthDesign: [14.42, 29.101],
  apertureMarketing: 4,
  apertureDesign: 4.0,
  patentYear: 2019,
  elementCount: 14,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6937,
      vd: 53.32,
      fl: -30.3,
      glass: "S-BAM4 (OHARA)",
      apd: false,
      role: "Front element; nearly flat front enables 82 mm filter thread. Rear asph S2A carries ~−4.5 mm departure (paraboloid base).",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6937,
      vd: 53.32,
      fl: -61.0,
      glass: "S-BAM4 (OHARA)",
      apd: false,
      role: "Paired with L11 asphere; S4A has +2.5 mm positive departure that partially restores wavefront after S2A.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -54.7,
      glass: "S-FPL51 family (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.035",
      role: "ED element in G1 for lateral chromatic aberration correction at wide angles.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.90265,
      vd: 35.73,
      fl: 40.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense flint; Petzval correction and air-spaced chromatic doublet with L13.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: 121.4,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Weak positive field lens at G2 entrance.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.66,
      fl: 27.2,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Cemented flint in G2 doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.56883,
      vd: 56.0,
      fl: 24.3,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Cemented crown in G2 doublet; achromatic variator pair with L22.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.59,
      fl: 44.6,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      role: "Cemented flint in G3 doublet; aberration correction near stop.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.51612,
      vd: 64.08,
      fl: 34.1,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Cemented crown; rear aspherical S17A fine-tunes spherical aberration.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 41.4,
      glass: "S-FPL51 family (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.035",
      role: "Primary positive power in G3; ED element for axial chromatic correction.",
    },
    {
      id: 11,
      name: "L34",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 45.1,
      glass: "S-FPL51 family (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.035",
      role: "Second positive ED element in G3; distributes convergent power with L33.",
    },
    {
      id: 12,
      name: "L41",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.795,
      vd: 45.31,
      fl: -37.6,
      glass: "S-LAH51 (OHARA)",
      apd: false,
      role: "Single-element focusing group (G4/GF). Lightweight for fast STM AF.",
    },
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 41.9,
      glass: "S-FPL51 family (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate, ΔPgF ≈ +0.035",
      role: "Fourth ED element; field flattener near image plane. G5 net power ≈ 0.",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.76546,
      vd: 46.75,
      fl: -40.5,
      glass: "Lanthanum flint (catalog uncertain; near S-LAH64)",
      apd: false,
      role: "Rear element; aspherical S26A corrects astigmatism and field curvature at corners. Paired with L51 for field correction.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front negative group (L11–L14) ── */
    { label: "1", R: 190.7535, d: 3.0, nd: 1.6937, elemId: 1, sd: 22.4 },
    { label: "2A", R: 18.8098, d: 9.5, nd: 1.0, elemId: 0, sd: 18.3 },
    { label: "3", R: 51.563, d: 2.9, nd: 1.6937, elemId: 2, sd: 16.1 },
    { label: "4A", R: 22.702, d: 9.7, nd: 1.0, elemId: 0, sd: 16.1 },
    { label: "5", R: -71.0651, d: 1.9, nd: 1.49782, elemId: 3, sd: 14.4 },
    { label: "6", R: 44.4835, d: 0.1, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "7", R: 32.608, d: 4.5, nd: 1.90265, elemId: 4, sd: 16.0 },
    { label: "8", R: 296.5863, d: 28.616, nd: 1.0, elemId: 0, sd: 16.0 },

    /* ── G2: Positive variator (L21–L23) ── */
    { label: "9", R: 63.0604, d: 2.0, nd: 1.59349, elemId: 5, sd: 11.6 },
    { label: "10", R: 499.8755, d: 0.1, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "11", R: 24.0057, d: 1.2, nd: 1.883, elemId: 6, sd: 10.0 },
    { label: "12", R: 13.347, d: 4.5, nd: 1.56883, elemId: 7, sd: 10.0 },
    { label: "13", R: 333.9818, d: 2.5, nd: 1.0, elemId: 0, sd: 10.0 },

    /* ── Aperture stop (travels with G2) ── */
    { label: "STO", R: 1e15, d: 7.483, nd: 1.0, elemId: 0, sd: 5.6 },

    /* ── G3: Positive relay (L31–L34) ── */
    { label: "15", R: 36.3784, d: 1.1, nd: 1.816, elemId: 8, sd: 10.8 },
    { label: "16", R: 14.0097, d: 4.71, nd: 1.51612, elemId: 9, sd: 10.8 },
    { label: "17A", R: 61.0448, d: 0.2, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "18", R: 27.9719, d: 3.15, nd: 1.49782, elemId: 10, sd: 10.0 },
    { label: "19", R: -75.3921, d: 0.25, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "20", R: 91.9654, d: 3.05, nd: 1.49782, elemId: 11, sd: 10.2 },
    { label: "21", R: -29.3923, d: 1.579, nd: 1.0, elemId: 0, sd: 10.2 },

    /* ── G4: Focusing group (L41) ── */
    { label: "22", R: 72.093, d: 1.0, nd: 1.795, elemId: 12, sd: 12.4 },
    { label: "23", R: 20.9929, d: 5.766, nd: 1.0, elemId: 0, sd: 12.4 },

    /* ── G5: Field corrector / final group (L51–L52) ── */
    { label: "24", R: -538.2301, d: 4.8, nd: 1.49782, elemId: 13, sd: 12.4 },
    { label: "25", R: -20.1257, d: 0.1, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "26A", R: -38.9341, d: 1.4, nd: 1.76546, elemId: 14, sd: 16.0 },
    { label: "27", R: 154.832, d: 21.36, nd: 1.0, elemId: 0, sd: 16.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "2A": {
      K: -1.0,
      A4: -1.33157e-5,
      A6: -3.07345e-8,
      A8: 6.9126e-11,
      A10: -3.76684e-14,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: -1.0,
      A4: 3.67009e-5,
      A6: 1.37031e-7,
      A8: -5.20756e-10,
      A10: 3.14884e-12,
      A12: -5.6153e-15,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: 1.75905e-5,
      A6: -6.64635e-8,
      A8: 2.26551e-10,
      A10: -4.40763e-12,
      A12: 0,
      A14: 0,
    },
    "26A": {
      K: -1.0,
      A4: -2.67902e-5,
      A6: -3.34364e-8,
      A8: -1.13765e-10,
      A10: -1.88017e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom positions ── */
  zoomPositions: [14.42, 20.0, 29.101],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  Zoom-only gaps: D1 (S8), D2 (STO), Bf (S27).
   *  Zoom+focus gaps: D3 (S21), D4 (S23).
   *  Patent gives only infinity values; close-focus pairs below are inferred
   *  by solving for a plausible 0.28 m focused-state conjugate while keeping
   *  D3 + D4 constant at each zoom position (single-element G4 translation).
   *  D3 is non-monotonic: 1.579 → 2.261 → 2.007 (increases then decreases).
   */
  var: {
    "8": [
      [28.616, 28.616],
      [12.942, 12.942],
      [2.214, 2.214],
    ],
    STO: [
      [7.483, 7.483],
      [6.371, 6.371],
      [3.521, 3.521],
    ],
    "21": [
      [1.579, 2.096],
      [2.261, 3.013],
      [2.007, 3.076],
    ],
    "23": [
      [5.766, 5.249],
      [6.196, 5.444],
      [9.3, 8.231],
    ],
    "27": [
      [21.36, 21.36],
      [26.809, 26.809],
      [36.297, 36.297],
    ],
  },
  varLabels: [
    ["8", "D1"],
    ["STO", "D2"],
    ["21", "D3"],
    ["23", "D4"],
    ["27", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "21" },
    { text: "G4 (−)", fromSurface: "22", toSurface: "23" },
    { text: "G5 (−)", fromSurface: "24", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "15", toSurface: "17A" },
  ],

  /* ── Focus ── */
  closeFocusM: 0.28,
  focusDescription:
    "Internal focus: G4 (single element L41) translates toward image. Close-focus D3/D4 values are inferred from real-ray calibration to the 0.28 m production MFD; estimated L41 travel is 0.52 mm (W), 0.75 mm (M), 1.07 mm (T).",

  /* ── Aperture ── */
  nominalFno: 4.0,
  apertureBlades: 7,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ──
   * Patent Fig. 1 shows the 14 mm state with a taller, more nested silhouette
   * than the raw axial table suggests, so bias the diagram away from horizontal
   * stretch and give the enlarged G1/G2 SD estimates room to read clearly.
   */
  scFill: 0.46,
  yScFill: 0.42,
  maxAspectRatio: 2.0,
  lensShiftFrac: 0.05,
} satisfies LensDataInput;

export default LENS_DATA;
