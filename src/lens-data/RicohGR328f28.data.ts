import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR III  18.3mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0154946 A1, Example 5 (Kazuyasu Ohashi).    ║
 * ║  Compact wide-angle imaging lens for APS-C sensor.                ║
 * ║  6 elements / 4 groups, 3 aspherical surfaces on 2 elements.     ║
 * ║  Focus: Unit focus (entire lens translates).                      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from paraxial marginal + chief ray trace at      ║
 * ║    ω = 38.2° with clearance.  Patent does not list SDs.           ║
 * ║    Front group SDs reduced to avoid cross-gap surface overlap     ║
 * ║    (deep asph on S02 extends into 2.46 mm air gap).  D2 SDs      ║
 * ║    matched at junction for consistent rendering.  L23 rear SD     ║
 * ║    kept below conic h_max (K = +7.28).                            ║
 * ║                                                                    ║
 * ║  NOTE ON BFD:                                                      ║
 * ║    Patent surface 11 d = 12.807 mm (to filter).  Filter: 1.40 mm ║
 * ║    (nd = 1.51633) + 0.70 mm air to image.  Total BFD from last   ║
 * ║    lens surface to image = 14.907 mm.  Filter omitted from       ║
 * ║    surfaces; BFD includes filter optical path.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr3-28f28",
  maker: "Ricoh",
  name: "RICOH GR III  18.3mm f/2.8",
  subtitle: "US 2019/0154946 A1, Example 5 — Ohashi / Ricoh",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "f ≈ 18.3 mm  (28 mm equiv.)",
    "F/2.87",
    "2ω ≈ 76.4°",
    "3 ASPHERICAL SURFACES (2 PGM ELEMENTS)",
  ],

  focalLengthMarketing: 18.3,
  focalLengthDesign: 18.3,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  patentYear: 2019,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ──
   *  Front group LO: L11 (singlet), L12+L13 (cemented doublet)
   *  Rear group LI:  L21+L22 (cemented doublet), L23 (singlet)
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51633,
      vd: 64.06,
      fl: -60.9,
      glass: "OHARA L-BSL7 (PGM)",
      apd: false,
      role: "Front negative meniscus; introduces weak retrofocus property for exit pupil control. Aspherical rear surface (S02) corrects spherical aberration and field curvature.",
    },

    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.47,
      fl: -8.9,
      glass: "OHARA S-TIM27",
      apd: false,
      cemented: "D1",
      role: "Negative flint component of front cemented doublet; provides chromatic correction for L13.",
    },

    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      fl: 7.4,
      glass: "HOYA TAFD33",
      apd: false,
      cemented: "D1",
      role: "Positive high-index element of front doublet; primary converging power in front group.",
    },

    {
      id: 4,
      name: "L21",
      label: "Element 4 (L21)",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      fl: 6.3,
      glass: "HOYA TAFD33",
      apd: false,
      cemented: "D2",
      role: "Positive high-index element of rear doublet; strongest individual element in system (f ≈ +6.3 mm).",
    },

    {
      id: 5,
      name: "L22",
      label: "Element 5 (L22)",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      fl: -7.3,
      glass: "OHARA S-TIM35",
      apd: false,
      cemented: "D2",
      role: "Negative dense flint in rear doublet; highest dispersion glass in system (νd = 30.1) for chromatic balance.",
    },

    {
      id: 6,
      name: "L23",
      label: "Element 6 (L23)",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.88202,
      vd: 37.22,
      fl: -1620,
      glass: "HOYA M-TAFD307 (PGM)",
      apd: false,
      role: "Double-aspherical corrector plate; near-zero paraxial power (f ≈ −1620 mm). Both surfaces aspherical — S10 fine-tunes field curvature, S11 (K = +7.28) provides final correction of astigmatism, coma, and distortion.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbering: 01–11 (optical) + 12–13 (filter, omitted here).
   *  Cemented doublets: L12+L13 (D1), L21+L22 (D2).
   *  Last surface d = total BFD from L23 rear to image plane (14.907 mm).
   */
  surfaces: [
    // ── Front group LO ──
    { label: "1", R: 17.034, d: 0.7, nd: 1.51633, elemId: 1, sd: 6.0 }, // L11 front
    { label: "2A", R: 10.894, d: 2.46, nd: 1.0, elemId: 0, sd: 5.5 }, // L11 rear → air (asph)
    { label: "3", R: -18.486, d: 0.6, nd: 1.6398, elemId: 2, sd: 5.0 }, // L12 front
    { label: "4", R: 8.332, d: 2.75, nd: 1.881, elemId: 3, sd: 5.0 }, // L12→L13 junction
    { label: "5", R: -25.206, d: 1.1, nd: 1.0, elemId: 0, sd: 4.6 }, // L13 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.2, nd: 1.0, elemId: 0, sd: 3.4 }, // stop (sd from marginal ray)

    // ── Rear group LI ──
    { label: "7", R: 13.099, d: 2.76, nd: 1.881, elemId: 4, sd: 4.8 }, // L21 front
    { label: "8", R: -8.666, d: 0.5, nd: 1.69895, elemId: 5, sd: 4.8 }, // L21→L22 junction
    { label: "9", R: 12.744, d: 1.52, nd: 1.0, elemId: 0, sd: 4.5 }, // L22 rear → air
    { label: "10A", R: -16.835, d: 1.0, nd: 1.88202, elemId: 6, sd: 6.0 }, // L23 front (asph)
    { label: "11A", R: -17.51, d: 14.907, nd: 1.0, elemId: 0, sd: 5.9 }, // L23 rear → air (asph) — BFD to image
  ],

  /* ── Aspherical coefficients ──
   *  Three aspherical surfaces: S02 (L11 rear), S10 (L23 front), S11 (L23 rear).
   *  Sag: Z(h) = (h²/R)/[1+√(1−(1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
   */
  asph: {
    "2A": {
      K: 0.0,
      A4: 2.49546e-4,
      A6: 5.30767e-6,
      A8: -1.77772e-7,
      A10: 2.52567e-8,
      A12: -9.4656e-10,
      A14: 1.70552e-11,
    },
    "10A": {
      K: 0.0,
      A4: 2.21965e-4,
      A6: -7.84181e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 7.28422,
      A4: 6.02712e-4,
      A6: 8.85505e-6,
      A8: -5.39399e-8,
      A10: 4.60086e-9,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  Close focus ≈ 0.10 m (normal mode); BFD extends by ~3.8 mm.
   *  Paraxial trace: air-equiv BFD 14.431 → 18.216 mm (+3.785 mm).
   *  Physical BFD includes filter path (0.476 mm shift).
   */
  var: {
    "11A": [14.907, 18.69],
  },

  varLabels: [["11A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (LO)", fromSurface: "1", toSurface: "5" },
    { text: "REAR (LI)", fromSurface: "7", toSurface: "11A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.1,
  focusDescription:
    "Unit focus — entire lens assembly translates along axis. Normal mode 0.10 m to ∞; macro mode extends to 0.06 m.",

  /* ── Aperture configuration ── */
  nominalFno: 2.87,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
