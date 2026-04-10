import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 50mm f/1.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,681,594 Claim 3 (Hiroshi Ito / Canon).         ║
 * ║  Modified Gauss (double-Gauss) for 35mm rangefinder (M39 LTM).    ║
 * ║  6 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens moves).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.00 (normalized); all R, d, sd values scaled    ║
 * ║    ×55.725 to f ≈ 50 mm production focal length.                  ║
 * ║    Computed EFL (normalized) = 0.8973; scaled EFL ≈ 50.0 mm.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal ray trace at f/1.8 with 8–12%          ║
 * ║    mechanical clearance. Front element constrained by 40 mm        ║
 * ║    filter thread. Cemented pair SDs held within 1.25 ratio.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-serenar-50f18",
  maker: "Canon",
  name: "Canon Serenar 50mm f/1.8",
  subtitle: "US 2,681,594 Claim 3 — Hiroshi Ito / Canon Camera Co.",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.0 mm", "F/1.8", "2ω ≈ 46°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  patentYear: 1954,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      fl: 60.8,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Front collector — positive meniscus, nearly plano-convex",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6261,
      vd: 39.1,
      fl: 27.8,
      glass: "BAFD7 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Front doublet convex — strongest converging surface in system",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.2,
      fl: -16.2,
      glass: "NBFD3 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Front doublet concave — highest nd; Ito innovation surface for coma correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5014,
      vd: 56.5,
      fl: -27.1,
      glass: "K10 (Schott)",
      apd: false,
      cemented: "D2",
      role: "Rear doublet concave — lowest nd in system; Petzval sum compensation",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      fl: 26.1,
      glass: "SK18 (Schott)",
      apd: false,
      cemented: "D2",
      role: "Rear doublet convex — dominant positive power in Group III",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      fl: 63.7,
      glass: "SK18 (Schott)",
      apd: false,
      role: "Rear collector — same glass as L5 for manufacturing simplicity",
    },
  ],

  /* ── Surface prescription ──
   *  Patent f = 1.00 scaled ×55.725 to production f ≈ 50 mm.
   *  Stop placed at center of patent air gap d₅ = 0.132 (split 0.066 / 0.066).
   */
  surfaces: [
    { label: "1", R: 32.32, d: 5.294, nd: 1.6204, elemId: 1, sd: 15.5 },
    { label: "2", R: 211.76, d: 0.279, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "3", R: 19.89, d: 8.08, nd: 1.6261, elemId: 2, sd: 13.2 },
    { label: "4", R: -117.02, d: 2.452, nd: 1.74, elemId: 3, sd: 10.6 },
    { label: "5", R: 13.43, d: 3.678, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "STO", R: 1e15, d: 3.678, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "6", R: -31.35, d: 1.95, nd: 1.5014, elemId: 4, sd: 8.7 },
    { label: "7", R: 24.41, d: 9.195, nd: 1.6385, elemId: 5, sd: 8.7 },
    { label: "8", R: -44.58, d: 0.167, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "9", R: 94.73, d: 3.901, nd: 1.6385, elemId: 6, sd: 8.3 },
    { label: "10", R: -70.05, d: 25.43, nd: 1.0, elemId: 0, sd: 7.8 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BFD only) ── */
  var: {
    "10": [25.43, 28.06],
  },
  varLabels: [["10", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Unit focusing — entire lens group moves axially.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  apertureBlades: 10,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
