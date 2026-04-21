import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 28mm f/3.5                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,974 (sole example) — Hiroshi Ito / Canon.  ║
 * ║  Modified double-Gauss (Planar-type) wide-angle design.           ║
 * ║  6 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: Unit focusing (entire lens moves).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.00 (normalized). Paraxial ray trace gives      ║
 * ║    EFL = 1.0047. Scale factor ×27.8688 applied to all R, d, and   ║
 * ║    sd values to reach f ≈ 28 mm production focal length.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Not listed in patent. Estimated from combined marginal ray     ║
 * ║    (f/3.5) and chief ray (70% field) heights with ~8% mechanical  ║
 * ║    clearance, constrained by cross-gap sag overlap (particularly  ║
 * ║    the narrow 0.139 mm air gap d₂ between L1 and L2).            ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    Patent does not specify stop as a separate surface. Placed at  ║
 * ║    center of air gap d₅ (between Groups II and III), consistent   ║
 * ║    with the canonical double-Gauss stop location and Fig. 1.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-serenar-28f35",
  maker: "Canon",
  name: "CANON SERENAR 28mm f/3.5",
  subtitle: "US 2,645,974 — HIROSHI ITO / CANON",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 28.0 mm", "F/3.5", "2ω = 75°", "ALL SPHERICAL"],

  /* ── Metadata ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28.0,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  patentYear: 1953,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.5638,
      vd: 60.7,
      fl: 38.4,
      glass: "SK4 (Schott)",
      apd: false as const,
      role: "Front positive collector — gathers wide-angle cone toward stop",
    },
    {
      id: 2,
      name: "L21",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6237,
      vd: 47.0,
      fl: 18.4,
      glass: "SK16 (Schott)",
      apd: false as const,
      cemented: "D1",
      role: "Front doublet positive — primary positive refracting element",
    },
    {
      id: 3,
      name: "L22",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5955,
      vd: 39.2,
      fl: -13.6,
      glass: "F7 (Schott)",
      apd: false as const,
      cemented: "D1",
      role: "Front doublet negative — chromatic correction and Gauss waist divergence",
    },
    {
      id: 4,
      name: "L31",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      fl: -11.2,
      glass: "BaF3 (Schott)",
      apd: false as const,
      cemented: "D2",
      role: "Rear doublet negative — strongest negative element, Gauss waist",
    },
    {
      id: 5,
      name: "L32",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      fl: 13.0,
      glass: "SK14 (Schott)",
      apd: false as const,
      cemented: "D2",
      role: "Rear doublet positive — redirects diverging beam toward image",
    },
    {
      id: 6,
      name: "L41",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.6204,
      vd: 60.3,
      fl: 38.9,
      glass: "SK14 (Schott)",
      apd: false as const,
      role: "Rear positive collector — final convergence to image plane",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 2,645,974, sole example. All radii, thicknesses scaled ×27.8688
   *  from the normalized (f = 1.00) prescription.
   *  Stop placed at center of patent gap d₅, inferred from Fig. 1.
   */
  surfaces: [
    { label: "1", R: 16.805, d: 1.895, nd: 1.5638, elemId: 1, sd: 5.3 }, // L1 front
    { label: "2", R: 72.32, d: 0.139, nd: 1.0, elemId: 0, sd: 4.3 }, // L1 rear → air
    { label: "3", R: 13.154, d: 2.731, nd: 1.6237, elemId: 2, sd: 4.3 }, // L2 front (D1)
    { label: "4", R: -83.606, d: 0.669, nd: 1.5955, elemId: 3, sd: 3.8 }, // L2→L3 junction (D1)
    { label: "5", R: 9.002, d: 1.394, nd: 1.0, elemId: 0, sd: 3.5 }, // L3 rear → air
    { label: "STO", R: 1e15, d: 1.394, nd: 1.0, elemId: 0, sd: 3.15 }, // Aperture stop (center of d₅)
    { label: "6", R: -9.225, d: 0.474, nd: 1.5785, elemId: 4, sd: 3.5 }, // L4 front (D2)
    { label: "7", R: 22.239, d: 3.456, nd: 1.6204, elemId: 5, sd: 3.8 }, // L4→L5 junction (D2)
    { label: "8", R: -11.928, d: 0.111, nd: 1.0, elemId: 0, sd: 4.3 }, // L5 rear → air
    { label: "9", R: 1e15, d: 2.508, nd: 1.6204, elemId: 6, sd: 4.5 }, // L6 front (flat)
    { label: "10", R: -24.134, d: 22.3, nd: 1.0, elemId: 0, sd: 5.3 }, // L6 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — only BFD changes) ── */
  var: {
    "10": [22.3, 23.11],
  },
  varLabels: [["10", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (I)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (II)", fromSurface: "3", toSurface: "5" },
    { text: "G3 (III)", fromSurface: "6", toSurface: "8" },
    { text: "G4 (IV)", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Unit focusing — entire lens moves as rigid unit.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
