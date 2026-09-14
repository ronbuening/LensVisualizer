import type { LensDataInput } from "../../types/optics.js";

/**
 * US 5,640,277 A, Example 2 / Figure 4, source f/1.43.
 * Ten elements and nine air-separated components; three motion groups.
 * This patent candidate differs from the marketing count formerly displayed.
 * Source dimensions are retained; optical rims are inferred from Figure 4.
 * G2 includes five elements and the stop, moving 10.3438 mm objectward.
 * Source beta=-0.1 station implies about0.9557 m object-to-image distance.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-85f14d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 85mm f/1.4 D IF",
  subtitle: "US 5,640,277 A Example 2 (candidate) — Nikon / Kouichi Ohshita",
  specs: ["10 ELEMENTS / 9 GROUPS · PATENT CANDIDATE", "f = 85.0 mm", "F/1.43 (PATENT)", "2ω ≈ 28.6° (FIG. 5)", "ALL SPHERICAL"],

  focalLengthMarketing: 85,
  focalLengthDesign: 85.0,
  apertureMarketing: 1.4,
  apertureDesign: 1.43,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,640,277 A",
  patentAuthors: ["Kouichi Ohshita"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1997,
  elementCount: 10,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.42,
      fl: 313.1,
      glass: "S-PHM53 (OHARA, approximate coordinate counterpart)",
      apd: false,
      role: "Front converter — gently converges the f/1.4 ray bundle with low dispersion",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.87,
      fl: 113.7,
      glass: "J-PSKH1 (Hikari, inferred coordinate counterpart)",
      apd: false,
      role: "Primary power element of G1 front section — low-dispersion split with L1a distributes refraction over four surfaces",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 40.9,
      fl: 261.8,
      glass: "NBFD2 (HOYA catalog equivalent; production supplier unspecified; patent 796409)",
      apd: false,
      role: "Completes G1 positive power; high-index allows strong curvatures with reduced SA",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.46,
      fl: -62.7,
      glass: "S-TIH1 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Diverging element — forms tele-converter with L1/L2 to reduce G2 size and travel",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80454,
      vd: 39.61,
      fl: 60.0,
      glass: "NBFD3 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "First element of focus group G2; front sub-unit G21 positive component",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      fl: -42.2,
      glass: "S-TIM25 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Last element before stop; strongly concave image surface defines modified Gauss symmetry",
    },
    {
      id: 7,
      name: "L6a",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.08,
      fl: -43.1,
      glass: "S-TIM28 (OHARA, inferred coordinate counterpart)",
      apd: false,
      cemented: "L6",
      role: "Chromatic corrector and Petzval sum control — cemented with L6b",
    },
    {
      id: 8,
      name: "L6b",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.86994,
      vd: 39.82,
      fl: 41.8,
      glass: "TAFD32 (HOYA, inferred coordinate counterpart)",
      apd: false,
      cemented: "L6",
      role: "High-index positive for Petzval sum control (n7 ≥ 1.84); cemented with L6a",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.78797,
      vd: 47.47,
      fl: 69.5,
      glass: "N-LAF21 (Schott, inferred coordinate counterpart)",
      apd: false,
      role: "Dominant positive power of rear sub-unit G22; provides back focus and image convergence",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.7481,
      vd: 52.3,
      fl: 1300.2,
      glass: "748523 — E-LAKH1 catalog equivalent (Hikari; production supplier unspecified)",
      apd: false,
      role: "Fixed rear compensator G3 — cancels SA and field curvature variation during focusing",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Fixed front converter group (L1a, L1b, L2, L3) ──
    { label: "1", R: 82.1305, d: 4.6, nd: 1.603, elemId: 1, sd: 36 }, // L1a front
    { label: "2", R: 142.2969, d: 0.1, nd: 1.0, elemId: 0, sd: 36 }, // L1a rear → air
    { label: "3", R: 50.1028, d: 9.6, nd: 1.59319, elemId: 2, sd: 32.5 }, // L1b front
    { label: "4", R: 180.9466, d: 0.1, nd: 1.0, elemId: 0, sd: 32.5 }, // L1b rear → air
    { label: "5", R: 43.2464, d: 7.0, nd: 1.79631, elemId: 3, sd: 28 }, // L2 front
    { label: "6", R: 50.6525, d: 4.0, nd: 1.0, elemId: 0, sd: 28 }, // L2 rear → air
    { label: "7", R: 85.0525, d: 2.4, nd: 1.71736, elemId: 4, sd: 23.5 }, // L3 front
    { label: "8", R: 29.0685, d: 17.7992, nd: 1.0, elemId: 0, sd: 23.5 }, // L3 rear → air (variable: G1–G2 gap)

    // ── G2: Movable focus group — front sub-unit G21 (L4, L5) ──
    { label: "9", R: 39.2512, d: 4.8, nd: 1.80454, elemId: 5, sd: 18 }, // L4 front
    { label: "10", R: 198.2455, d: 2.5, nd: 1.0, elemId: 0, sd: 18 }, // L4 rear → air
    { label: "11", R: -126.0081, d: 2.0, nd: 1.6727, elemId: 6, sd: 17.5 }, // L5 front
    { label: "12", R: 36.9324, d: 4.0, nd: 1.0, elemId: 0, sd: 15.8 }, // L5 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 4.0, nd: 1.0, elemId: 0, sd: 14.3 }, // stop moves with G2

    // ── G2: Movable focus group — rear sub-unit G22 (L6 cemented, L7) ──
    { label: "14", R: -36.6878, d: 1.8, nd: 1.68893, elemId: 7, sd: 15.8 }, // L6a (neg) front
    { label: "15", R: 158.8503, d: 8.0, nd: 1.86994, elemId: 8, sd: 17.3 }, // L6 cemented junction → L6b (pos)
    { label: "16", R: -46.1165, d: 0.1, nd: 1.0, elemId: 0, sd: 17.3 }, // L6b rear → air
    { label: "17", R: 84.9089, d: 4.0, nd: 1.78797, elemId: 9, sd: 17.3 }, // L7 front
    { label: "18", R: -151.1095, d: 1.1997, nd: 1.0, elemId: 0, sd: 17.3 }, // L7 rear → air (variable: G2–G3 gap)

    // ── G3: Fixed rear compensator (L8) ──
    { label: "19", R: -177.6658, d: 2.0, nd: 1.7481, elemId: 10, sd: 17.3 }, // L8 front
    { label: "20", R: -150.9493, d: 38.1199, nd: 1.0, elemId: 0, sd: 17.3 }, // L8 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {}, // All-spherical design

  /* ── Variable air spacings (inner focus) ──
   *  Two gaps change: G1–G2 (surface 8) and G2–G3 (surface 18).
   *  G2 translates as a rigid body — both gaps change by equal and
   *  opposite amounts (Δd8 = −Δd18 = 10.344 mm at β = −0.1).
   */
  var: {
    8: [17.7992, 7.4554], // G1–G2 gap: [infinity, close focus]
    18: [1.1997, 11.5435], // G2–G3 gap: [infinity, close focus]
  },

  varLabels: [
    ["8", "G1–G2"],
    ["18", "G2–G3"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (fixed)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (focus)", fromSurface: "9", toSurface: "18" },
    { text: "G3 (fixed)", fromSurface: "19", toSurface: "20" },
  ],

  doublets: [{ text: "L6", fromSurface: "14", toSurface: "16" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.955706213056126,
  focusDescription: "Inner focus — G2 (L4–L7, five elements) and the stop move 10.3438 mm objectward. The source beta=-0.1 station implies about 0.956 m object-to-image distance; G1, G3 and rear BF stay fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.43,
  fstopSeries: [1.43, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
