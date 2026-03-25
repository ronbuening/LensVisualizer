import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF NIKKOR 85mm f/1.4D IF              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,640,277 Example 2 (Ohshita / Nikon).          ║
 * ║  Modified Gauss-type, three-group inner focus design.             ║
 * ║  9 elements / 8 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: inner focus — G2 (L4–L7 + stop) translates forward.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not patent-listed.  Estimated from paraxial marginal-ray trace ║
 * ║    at f/1.43 (EP SD = 29.72 mm) with 10% mechanical clearance,   ║
 * ║    then clamped for edge-thickness and sd/|R| constraints.        ║
 * ║    Front elements consistent with 77 mm filter thread.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-85f14d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 85mm f/1.4D IF",
  subtitle: "US 5,640,277 Example 2 — Nikon / Koichi Ohshita",
  specs: ["9 ELEMENTS / 8 GROUPS", "f = 85.0 mm", "F/1.4", "2ω = 28°30'", "ALL SPHERICAL"],

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.42,
      fl: 322.1,
      glass: "Phosphate Crown (S-PHM53)",
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
      fl: 116.8,
      glass: "Fluorophosphate Crown (glass code 593679)",
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
      fl: 371.4,
      glass: "Dense Lanthanum Flint (LaSF3 / NBFD15)",
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
      fl: -61.6,
      glass: "Dense Flint (SF1 / S-TIH1)",
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
      fl: 60.8,
      glass: "Dense Niobium Flint (NBFD3 / S-LAH63)",
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
      fl: -42.5,
      glass: "Flint (E-FD5 / S-TIM25)",
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
      fl: -43.3,
      glass: "Flint (S-TIM28)",
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
      fl: 41.1,
      glass: "Very Dense Lanthanum Flint (TAFD30)",
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
      fl: 69.0,
      glass: "Lanthanum Flint (LaFN21 / N-LAF21)",
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
      fl: 1341.8,
      glass: "Lanthanum Crown (S-LAM66)",
      apd: "inferred",
      apdNote: "S-LAM66 has anomalous partial dispersion but chromatic contribution is minimal due to weak power",
      role: "Fixed rear compensator G3 — cancels SA and field curvature variation during focusing",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Fixed front converter group (L1a, L1b, L2, L3) ──
    { label: "1", R: 82.1305, d: 4.6, nd: 1.603, elemId: 1, sd: 32.7 }, // L1a front
    { label: "2", R: 142.2969, d: 0.1, nd: 1.0, elemId: 0, sd: 32.0 }, // L1a rear → air
    { label: "3", R: 50.1028, d: 9.6, nd: 1.59319, elemId: 2, sd: 30.5 }, // L1b front
    { label: "4", R: 180.9466, d: 0.1, nd: 1.0, elemId: 0, sd: 29.1 }, // L1b rear → air
    { label: "5", R: 43.2464, d: 7.0, nd: 1.79631, elemId: 3, sd: 29.0 }, // L2 front
    { label: "6", R: 50.6525, d: 4.0, nd: 1.0, elemId: 0, sd: 25.4 }, // L2 rear → air
    { label: "7", R: 85.0525, d: 2.4, nd: 1.71736, elemId: 4, sd: 23.4 }, // L3 front
    { label: "8", R: 29.0685, d: 17.7992, nd: 1.0, elemId: 0, sd: 22.4 }, // L3 rear → air (variable: G1–G2 gap)

    // ── G2: Movable focus group — front sub-unit G21 (L4, L5) ──
    { label: "9", R: 39.2512, d: 4.8, nd: 1.80454, elemId: 5, sd: 19.4 }, // L4 front
    { label: "10", R: 198.2455, d: 2.5, nd: 1.0, elemId: 0, sd: 17.9 }, // L4 rear → air
    { label: "11", R: -126.0081, d: 2.0, nd: 1.6727, elemId: 6, sd: 16.6 }, // L5 front
    { label: "12", R: 36.9324, d: 4.0, nd: 1.0, elemId: 0, sd: 16.1 }, // L5 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 4.0, nd: 1.0, elemId: 0, sd: 14.3 }, // 9-blade rounded diaphragm

    // ── G2: Movable focus group — rear sub-unit G22 (L6 cemented, L7) ──
    { label: "14", R: -36.6878, d: 1.8, nd: 1.68893, elemId: 7, sd: 16.1 }, // L6a (neg) front
    { label: "15", R: 158.8503, d: 8.0, nd: 1.86994, elemId: 8, sd: 16.1 }, // L6 cemented junction → L6b (pos)
    { label: "16", R: -46.1165, d: 0.1, nd: 1.0, elemId: 0, sd: 16.1 }, // L6b rear → air
    { label: "17", R: 84.9089, d: 4.0, nd: 1.78797, elemId: 9, sd: 16.1 }, // L7 front
    { label: "18", R: -151.1095, d: 1.1997, nd: 1.0, elemId: 0, sd: 15.5 }, // L7 rear → air (variable: G2–G3 gap)

    // ── G3: Fixed rear compensator (L8) ──
    { label: "19", R: -177.6658, d: 2.0, nd: 1.7481, elemId: 10, sd: 15.0 }, // L8 front
    { label: "20", R: -150.9493, d: 38.1199, nd: 1.0, elemId: 0, sd: 14.7 }, // L8 rear → image (BFD)
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
    ["18", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (fixed)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (focus)", fromSurface: "9", toSurface: "18" },
    { text: "G3 (fixed)", fromSurface: "19", toSurface: "20" },
  ],

  doublets: [{ text: "L6", fromSurface: "14", toSurface: "16" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription: "Inner focus — G2 (L4–L7 + stop, 5 elements) translates forward 10.3 mm to close focus at 0.85 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
