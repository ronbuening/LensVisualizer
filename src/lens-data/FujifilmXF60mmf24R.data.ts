import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON XF60mmF2.4 R Macro                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0247506 A1, Example 1 (Tetsuya Ori,         ║
 * ║  FUJIFILM Corporation). Priority: JP 2011-248180 (Nov. 14, 2011). ║
 * ║  Medium telephoto macro for APS-C (X-mount), 91 mm equiv.         ║
 * ║  10 elements / 8 groups, 2 aspherical surfaces, 1 ED element.     ║
 * ║  Focus: unit focus — entire G1 (L11–L17 + stop) translates        ║
 * ║    forward; G2 (L21–L23) fixed. Variable gap D13 only.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal ray (f/2.48) + chief ray (60% field)   ║
 * ║    with ~10% mechanical clearance. Front group capped by 39 mm    ║
 * ║    filter thread (≤ 18.5 mm SD). Edge thickness, SD ratio, and    ║
 * ║    cross-gap sag intrusion validated computationally.             ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACES:                                      ║
 * ║    Patent uses odd-order polynomial terms (A3–A9) and a non-      ║
 * ║    standard conic "eccentricity" K where K_std = K_patent − 1.    ║
 * ║    Coefficients refitted to even-order (A4–A14) via least-squares ║
 * ║    over h = 0–11 mm. Max residual < 0.15 nm; see analysis.md.    ║
 * ║                                                                    ║
 * ║  NOTE ON L15 ABBE NUMBER:                                          ║
 * ║    Patent Table 1 lists νd = 48.8 for surface 9 (L15). Cross-    ║
 * ║    check against Table 17 conditional expressions proves this is  ║
 * ║    a typographical error (νd6 − νd5 computes to 32.7, not the    ║
 * ║    29.1 stated in Table 17). All five other examples match when   ║
 * ║    computed from their own tables; Example 1 alone fails. The     ║
 * ║    intended νd ≈ 52.4, consistent with OHARA S-TIL27 (nd =       ║
 * ║    1.51742, νd = 52.15). Value retained as-is (48.8) in surface  ║
 * ║    data since the renderer uses nd only.                           ║
 * ║                                                                    ║
 * ║  COVER GLASS:                                                      ║
 * ║    Patent surfaces S20/S21 (parallel plate, d = 2.85 mm,         ║
 * ║    nd = 1.51680/N-BK7) excluded; air-equivalent path folded into ║
 * ║    BFD of last surface (d = 20.34 mm).                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf60-f24-r-macro",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 60mmF2.4 R Macro",
  subtitle: "US 2014/0247506 A1 EXAMPLE 1 — FUJIFILM / ORI",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "f = 61.06 mm (design)",
    "F/2.48 (design) · F/2.4 (marketed)",
    "2ω = 25.4° (design) · 26.6° (marketed)",
    "2 ASPHERICAL SURFACES · 1 ED ELEMENT",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 61.06,
  apertureMarketing: 2.4,
  apertureDesign: 2.48,
  patentYear: 2014,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 106.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front positive collector — low-index fluorosilicate crown with high νd minimizes chromatic contribution while providing gentle convergence.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: 103.3,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Second positive collector — barium crown meniscus shares refractive load with L11, keeping surface curvatures moderate.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 35.4,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Crown element of achromatic doublet D1 — lanthanum crown provides strong positive power from moderate curvatures.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6668,
      vd: 31.1,
      fl: -25.0,
      glass: "Dense flint (unidentified; nd/νd = 667/311)",
      apd: false,
      cemented: "D1",
      role: "Flint element of D1 — corrects longitudinal chromatic aberration with Δνd = 23.6. Net doublet power is negative (fl ≈ −174 mm).",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 48.8,
      fl: -31.5,
      glass: "S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)",
      apd: false,
      cemented: "D2",
      role: "Flint element of achromatic doublet D2 — paired with ED glass L16 for chromatic correction behind the stop.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 50.1,
      glass: "S-FPL51 (OHARA) — ED glass",
      apd: "patent",
      apdNote: "Anomalous partial dispersion (ED glass); extremely high νd enables strong achromatic correction in D2.",
      cemented: "D2",
      role: "ED crown element of D2 — sole extra-low dispersion glass in the design, correcting both longitudinal and lateral chromatic aberration.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.80348,
      vd: 40.4,
      fl: 62.7,
      glass: "Lanthanum heavy flint (PGM, unidentified; nd/νd = 803/404)",
      apd: false,
      role: "Glass-molded aspherical element — both surfaces aspherical. Primary corrector for sagittal field curvature. Last element of moving group G1.",
    },
    {
      id: 8,
      name: "L21",
      label: "Element 8",
      type: "Plano-Concave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -30.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "First element of fixed G2 — diverges converging beam to increase BFD and reduce sensor cone angle.",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.9,
      fl: 86.1,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Re-converges beam after L21; moderate-index crown with minimal chromatic contribution.",
    },
    {
      id: 10,
      name: "L23",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 57.4,
      glass: "S-LAH65V (OHARA) — very close match",
      apd: false,
      role: "Final element — strongly asymmetric biconvex acts as primary field-flattener in G2. Rear surface (R = −57 mm) dominates Petzval correction.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: moving focus group (L11–L17 + stop) ──
    { label: "1", R: 51.9744, d: 3.17, nd: 1.48749, elemId: 1, sd: 15.5 }, // L11 front
    { label: "2", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 15.0 }, // L11 rear (flat) → air
    { label: "3", R: 28.9998, d: 3.8, nd: 1.58913, elemId: 2, sd: 14.8 }, // L12 front
    { label: "4", R: 52.7228, d: 0.1, nd: 1.0, elemId: 0, sd: 13.5 }, // L12 rear → air
    { label: "5", R: 18.5122, d: 5.5, nd: 1.72916, elemId: 3, sd: 10.5 }, // L13 front (cemented D1)
    { label: "6", R: 57.135, d: 1.16, nd: 1.6668, elemId: 4, sd: 10.5 }, // L13→L14 junction
    { label: "7", R: 12.7943, d: 4.2, nd: 1.0, elemId: 0, sd: 10.0 }, // L14 rear → air
    { label: "STO", R: 1e15, d: 2.6, nd: 1.0, elemId: 0, sd: 7.65 }, // Aperture stop
    { label: "9", R: -317.3207, d: 1.01, nd: 1.51742, elemId: 5, sd: 8.0 }, // L15 front (cemented D2)
    { label: "10", R: 17.18, d: 2.8, nd: 1.497, elemId: 6, sd: 8.0 }, // L15→L16 junction
    { label: "11", R: 52.4398, d: 2.54, nd: 1.0, elemId: 0, sd: 8.2 }, // L16 rear → air
    { label: "12A", R: 34.5881, d: 2.6, nd: 1.80348, elemId: 7, sd: 8.5 }, // L17 front (asph)
    { label: "13A", R: 106.5522, d: 1.8, nd: 1.0, elemId: 0, sd: 8.2 }, // L17 rear (asph) → air [D13 variable]
    // ── G2: fixed rear corrector group (L21–L23) ──
    { label: "14", R: 1e15, d: 1.8, nd: 1.72916, elemId: 8, sd: 8.2 }, // L21 front (flat)
    { label: "15", R: 22.466, d: 3.55, nd: 1.0, elemId: 0, sd: 8.2 }, // L21 rear → air
    { label: "16", R: 28.6691, d: 2.82, nd: 1.51823, elemId: 9, sd: 9.0 }, // L22 front
    { label: "17", R: 77.4943, d: 1.81, nd: 1.0, elemId: 0, sd: 9.0 }, // L22 rear → air
    { label: "18", R: 236.5466, d: 3.0, nd: 1.804, elemId: 10, sd: 9.5 }, // L23 front
    { label: "19", R: -56.9828, d: 20.34, nd: 1.0, elemId: 0, sd: 9.5 }, // L23 rear → image (BFD, cover glass air-equiv folded)
  ],

  /* ── Aspherical coefficients ──
   *  Refitted from patent's odd+even order polynomial (A3–A10) with non-standard
   *  conic "eccentricity" to standard even-order-only form (A4–A14).
   *  K_std = K_patent − 1.  Max refit residual < 0.15 nm over h = 0–11 mm.
   */
  asph: {
    "12A": {
      K: -3.154014e1,
      A4: 9.643206e-5,
      A6: -4.485087e-7,
      A8: -9.443291e-9,
      A10: 2.623015e-10,
      A12: -1.989546e-12,
      A14: 2.061914e-15,
    },
    "13A": {
      K: 5.910862e1,
      A4: 3.386573e-6,
      A6: 2.311207e-7,
      A8: -5.842872e-9,
      A10: 5.69833e-11,
      A12: -1.773299e-13,
      A14: 2.131915e-16,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire G1 translates forward. Only gap D13 changes.
   *  D13 at infinity = 1.80 mm; at −0.5× (close focus, 26.7 cm) = 23.73 mm.
   */
  var: {
    "13A": [1.8, 23.73],
  },
  varLabels: [["13A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (moving)", fromSurface: "1", toSurface: "13A" },
    { text: "G2 (fixed)", fromSurface: "14", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.267,
  focusDescription: "Unit focus — entire G1 (L11–L17 + aperture stop) translates forward as a rigid unit; G2 fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.4,
  fstopSeries: [2.4, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  apertureBladeRoundedness: 0.85,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
