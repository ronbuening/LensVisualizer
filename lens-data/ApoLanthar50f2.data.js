/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — APO-LANTHAR 50mm f/2.0 Aspherical            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2021-43376A Example 5 (Cosina / Sugano).           ║
 * ║  Identified as the E-mount production prescription candidate.      ║
 * ║  10 elements / 8 groups, 2 double-sided aspherics (4 surfaces).    ║
 * ║  Focus: floating focus (F36 scheme — 3 variable air gaps).         ║
 * ║                                                                    ║
 * ║  NOTE ON APD ELEMENTS:                                             ║
 * ║    Elements 3 and 4 have patent-listed dPgF values (+0.0376 and    ║
 * ║    +0.0195 respectively).  Elements 1, 5, and 6 are inferred APD   ║
 * ║    from the E-mount manufacturer spec of 5 APD elements; their     ║
 * ║    glasses resist identification across all standard catalogs.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not specify clear apertures.  SDs are estimated ║
 * ║    from f/1.93 entrance pupil geometry (EP SD ≈ 12.8 mm) with     ║
 * ║    8–12% mechanical clearance.  These are approximations.          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {

  /* ── Identity ── */
  key:      "apo-lanthar-50f2",
  name:     "VOIGTLÄNDER APO-LANTHAR 50mm f/2.0 Aspherical",
  subtitle: "JP2021-43376A EXAMPLE 5 — COSINA / SUGANO",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "f ≈ 49.3 mm",
    "F/1.93",
    "2ω ≈ 47.4°",
    "4 ASPHERICAL SURFACES",
    "5 APD ELEMENTS (E-MOUNT)",
  ],

  /* ── Elements ── */
  elements: [
    { id: 1,  name: "LF",  label: "Element 1",  type: "Biconcave Negative",             nd: 1.54373, vd: 47.65, fl:  -45.5,  glass: "Unmatched (likely Sumita proprietary)", apd: "inferred", role: "Front diverging element; opening bracket of front Gc group — widens beam to reduce incidence angles downstream" },
    { id: 2,  name: "Lfa", label: "Element 2",  type: "Pos. Meniscus (2× Asph)",        nd: 1.85249, vd: 42.08, fl:   74.5,  glass: "S-LAH79 (OHARA) probable",            apd: false,      role: "Primary monochromatic corrector; double-sided aspheric on high-index lanthanum glass — 217 µm rear departure" },
    { id: 3,  name: "Lfb", label: "Element 3",  type: "Biconvex Positive",              nd: 1.49700, vd: 81.61, fl:   60.0,  glass: "S-FPL51 / N-PK52A (universal)",        apd: "patent",   role: "Primary chromatic powerhouse; fluorophosphate crown, dPgF = +0.0376 — attacks secondary spectrum", apdNote: "dPgF = +0.0376 (patent-listed)" },
    { id: 4,  name: "Lfc", label: "Element 4",  type: "Biconvex Positive",              nd: 1.59282, vd: 68.62, fl:   55.0,  glass: "K-GFK68 (Sumita) — exact match",       apd: "patent",   role: "Secondary chromatic correction; Sumita fluorophosphate crown, dPgF = +0.0195 — power-sharing partner to Lfb", apdNote: "dPgF = +0.0195 (patent-listed)" },
    { id: 5,  name: "Lfd", label: "Element 5",  type: "Negative Meniscus",              nd: 1.51322, vd: 57.22, fl:  -67.6,  glass: "Unmatched (likely Sumita proprietary)", apd: "inferred", role: "Closing bracket of front Gc group; last element before stop — boundary for focus adjustment" },
    { id: 6,  name: "Lrd", label: "Element 6",  type: "Biconcave Negative",             nd: 1.70269, vd: 34.87, fl:  -23.8,  glass: "Unmatched (KZFS-adjacent, dPgF ≈ −0.01 est.)", apd: "inferred", role: "Doublet Jb negative partner; first post-stop element — chromatic correction via Δνd ≈ 12.3 with Lrc", cemented: "Jb" },
    { id: 7,  name: "Lrc", label: "Element 7",  type: "Biconvex Positive",              nd: 1.79334, vd: 47.18, fl:   23.4,  glass: "S-LAH64 (OHARA) possible",             apd: false,      role: "Doublet Jb positive partner; high-index lanthanum glass — drives primary chromatic correction in rear group", cemented: "Jb" },
    { id: 8,  name: "Lrb", label: "Element 8",  type: "Biconvex Positive",              nd: 1.80258, vd: 46.60, fl:   26.3,  glass: "S-LAH65V (OHARA) probable",            apd: false,      role: "Doublet Ja positive partner; Δnd ≈ 0.249 with Lra drives monochromatic correction (sphere + coma)", cemented: "Ja" },
    { id: 9,  name: "Lra", label: "Element 9",  type: "Biconcave Negative",             nd: 1.55362, vd: 45.38, fl:  -31.4,  glass: "Unmatched (conventional)",              apd: false,      role: "Doublet Ja negative partner; low index creates large Δnd step — monochromatic correction only (Δνd ≈ 1.2)", cemented: "Ja" },
    { id: 10, name: "LE",  label: "Element 10", type: "Neg. Meniscus (2× Asph)",        nd: 1.51633, vd: 64.06, fl:  -96.2,  glass: "S-BSL7 / N-BK7 (universal)",            apd: false,      role: "Aspheric field corrector; isolated by 12.5 mm air gap — 800 µm rear departure on cheapest, most moldable glass" },
  ],

  /* ── Surface prescription — JP2021-43376A Table 5, Example 5 ──
   *  Semi-diameters estimated from f/1.93 EP geometry (EP SD ≈ 12.8 mm)
   *  with 8–12% mechanical clearance.  Patent does not specify SDs.
   */
  surfaces: [
    { label: "1",   R:  -37.070, d:  1.70, nd: 1.54373, elemId: 1,  sd: 15.0  },
    { label: "2",   R:   75.394, d:  0.20, nd: 1.0,     elemId: 0,  sd: 15.0  },
    { label: "3A",  R:   50.421, d:  3.46, nd: 1.85249, elemId: 2,  sd: 14.5  },
    { label: "4A",  R:  236.595, d:  0.32, nd: 1.0,     elemId: 0,  sd: 14.5  },
    { label: "5",   R:   67.642, d:  7.57, nd: 1.49700, elemId: 3,  sd: 14.0  },
    { label: "6",   R:  -51.349, d:  0.20, nd: 1.0,     elemId: 0,  sd: 13.5  },
    { label: "7",   R:   63.022, d:  4.71, nd: 1.59282, elemId: 4,  sd: 13.5  },
    { label: "8",   R:  -65.678, d:  0.20, nd: 1.0,     elemId: 0,  sd: 13.0  },
    { label: "9",   R:  200.000, d:  1.60, nd: 1.51322, elemId: 5,  sd: 13.0  },
    { label: "10",  R:   29.490, d:  5.49, nd: 1.0,     elemId: 0,  sd: 13.0  },
    { label: "STO", R:     1e15, d:  3.36, nd: 1.0,     elemId: 0,  sd: 12.8  },
    { label: "12",  R:  -50.154, d:  1.60, nd: 1.70269, elemId: 6,  sd: 13.0  },
    { label: "13",  R:   25.432, d:  6.72, nd: 1.79334, elemId: 7,  sd: 13.0  },
    { label: "14",  R:  -60.434, d:  0.56, nd: 1.0,     elemId: 0,  sd: 13.0  },
    { label: "15",  R:   40.672, d:  6.63, nd: 1.80258, elemId: 8,  sd: 13.0  },
    { label: "16",  R:  -40.724, d:  1.60, nd: 1.55362, elemId: 9,  sd: 12.0  },
    { label: "17",  R:   30.835, d: 12.49, nd: 1.0,     elemId: 0,  sd: 12.0  },
    { label: "18A", R:  -34.164, d:  2.60, nd: 1.51633, elemId: 10, sd: 11.0  },
    { label: "19A", R: -112.348, d: 15.00, nd: 1.0,     elemId: 0,  sd: 11.0  },
  ],

  /* ── Aspherical coefficients — Patent Table 5, Example 5 ──
   *  4 aspheric surfaces on 2 elements (Lfa and LE).
   *  K = 0 for all surfaces (no conic departure).
   *  A4–A10 polynomial terms only (no A12/A14 in this patent).
   */
  asph: {
    "3A": {
      K: 0,
      A4: -1.6435e-06, A6:  7.0442e-10, A8:  2.7291e-11, A10: -2.2674e-15,
      A12: 0, A14: 0,
    },
    "4A": {
      K: 0,
      A4:  6.4457e-06, A6:  1.9943e-09, A8:  2.8907e-11, A10: -4.7319e-15,
      A12: 0, A14: 0,
    },
    "18A": {
      K: 0,
      A4: -7.6822e-05, A6:  1.9445e-07, A8: -8.3803e-10, A10:  1.7349e-12,
      A12: 0, A14: 0,
    },
    "19A": {
      K: 0,
      A4: -5.6981e-05, A6: -1.8942e-07, A8: -4.8687e-10, A10:  7.6837e-13,
      A12: 0, A14: 0,
    },
  },

  /* ── Variable air spacings — F36 focus scheme ──
   *  F36 moves: front group, Jb, and Ja+LE as 3 separate groups.
   *  Variable gaps: ZD10 (pre-stop), ZD14 (between doublets), ZD19 (BFD).
   *  Object distance: ∞ → 370 mm (0.37 m).
   */
  var: {
    "10":  [5.49, 5.89],
    "14":  [0.56, 3.57],
    "19A": [15.00, 20.53],
  },

  varLabels: [
    ["10",  "ZD10"],
    ["14",  "ZD14"],
    ["19A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (101)",  fromSurface: "1",   toSurface: "10"  },
    { text: "REAR (102)",   fromSurface: "12",  toSurface: "19A" },
  ],

  doublets: [
    { text: "Jb", fromSurface: "12", toSurface: "14" },
    { text: "Ja", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM:       0.37,
  focusStep:         0.004,
  focusDescription:  "Floating focus (F36 scheme) — front group, Jb, and Ja+LE move independently. Three variable air gaps adjust to maintain quasi-symmetric aberration balance.",

  /* ── Aperture configuration ── */
  nominalFno:   1.93,
  maxFstop:     16,
  apertureStep: 0.004,
  fstopSeries:  [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Ray fan configuration ── */
  rayFractions:     [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
  rayLeadFrac:      0.19,
  offAxisFieldFrac: 0.60,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],

  /* ── Layout tuning ── */
  svgW:             1080,
  svgH:             490,
  scFill:           0.52,
  yScFill:          0.32,
  clipMargin:       1.0,
  maxRimAngleDeg:   40,
  gapSagFrac:       0.90,
};

export default LENS_DATA;
