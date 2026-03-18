/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NOKTON 50mm f/1.0                            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2023063766A Example 1 (Cosina / Ogino).            ║
 * ║  Focus: unit focusing assumed (entire lens advances as a rigid     ║
 * ║  body).  Patent does not disclose a floating-element mechanism.    ║
 * ║                                                                    ║
 * ║  NOTE ON _FOPEN:                                                   ║
 * ║    The Nokton's front group has strong positive power, giving a    ║
 * ║    y_ratio of ~0.645 at the stop.  The entrance pupil is ~1.55×   ║
 * ║    larger than the physical stop opening.  _FOPEN uses EP-based    ║
 * ║    formula: EFL / (2 × EP_SD) to give the correct f/1.0 readout  ║
 * ║    while keeping the stop SD at its physically correct ~16.14 mm. ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL RENDERING:                                     ║
 * ║    3 aspherical surfaces (1A, 16A, 17A) with large polynomial     ║
 * ║    departures (up to 739 µm).  renderSag() provides aspherically- ║
 * ║    correct element profiles in the SVG cross-section.  The        ║
 * ║    paraxial ray engine continues to use spherical sag correctly.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {

  /* ── Identity ── */
  name:     "VOIGTLÄNDER NOKTON 50mm f/1.0",
  subtitle: "JP2023063766A EXAMPLE 1 — COSINA / OGINO",
  specs: [
    "9 ELEMENTS / 6 GROUPS",
    "f ≈ 50.0 mm",
    "F/1.0",
    "2ω ≈ 46.8°",
    "3 ASPHERICAL SURFACES",
  ],

  /* ── Elements ── */
  elements: [
    { id: 1, name: "L1",  label: "Element 1", type: "Pos. Meniscus (1× Asph)", nd: 1.90525, vd: 35.04, fl:  119.3,  glass: "LaSF (LASF35 melt)",       apd: false, role: "Front positive meniscus; ASP1 corrects spherical aberration — 739 µm departure at H = 26 mm" },
    { id: 2, name: "L2",  label: "Element 2", type: "Positive Meniscus",       nd: 1.90043, vd: 37.37, fl:   60.2,  glass: "LaSF family",                apd: false, role: "Second extreme-index power element; shares G1 refractive load with L1" },
    { id: 3, name: "L3",  label: "Element 3", type: "Negative Meniscus",       nd: 1.80518, vd: 25.46, fl:  -37.2,  glass: "SF6 / S-TIH6 (OHARA)",      apd: false, role: "G1 negative element; Petzval corrector and chromatic balancer (νd = 25.46)" },
    { id: 4, name: "L4f", label: "Element 4", type: "Biconcave Negative",      nd: 1.76182, vd: 26.61, fl:  -21.2,  glass: "Dense flint (SF14 family)",  apd: false, role: "Cemented in L4; primary chromatic lever — strongest negative power in system (f = −21.2 mm)", cemented: "L4" },
    { id: 5, name: "L4r", label: "Element 5", type: "Biconvex Positive",       nd: 1.88300, vd: 40.69, fl:   23.3,  glass: "S-LAH58 (OHARA)",            apd: false, role: "Cemented in L4; high-index positive partner, same glass as L5 and L6f", cemented: "L4" },
    { id: 6, name: "L5",  label: "Element 6", type: "Biconvex Positive",       nd: 1.88300, vd: 40.69, fl:   54.7,  glass: "S-LAH58 (OHARA)",            apd: false, role: "Standalone positive element; power-sharing with L4r and L6f (same glass)" },
    { id: 7, name: "L6f", label: "Element 7", type: "Biconvex Positive",       nd: 1.88300, vd: 40.69, fl:   36.1,  glass: "S-LAH58 (OHARA)",            apd: false, role: "Cemented in L6; field and chromatic correction, third element in S-LAH58 group", cemented: "L6" },
    { id: 8, name: "L6r", label: "Element 8", type: "Biconcave Negative",      nd: 1.55298, vd: 55.07, fl:  -52.3,  glass: "Standard crown (selected melt)", apd: false, role: "Cemented in L6; low-index negative partner for field curvature correction", cemented: "L6" },
    { id: 9, name: "L7",  label: "Element 9", type: "Neg. Meniscus (2× Asph)", nd: 1.80835, vd: 40.55, fl: -154.6,  glass: "LaF/LaSF boundary",          apd: false, role: "Rear aspherical corrector — ASP16 + ASP17 carry ~1 mm combined departure; f/f_le = −0.3235" },
  ],

  /* ── Surface prescription — JP2023063766A Table 1, Example 1 ──
   *  Semi-diameters derived from paraxial marginal-ray trace at f/1.0
   *  (EP SD = 25 mm), with 8–12% mechanical clearance margin.
   *  Surface "6" (L3 rear, R = 19.835 mm) is R-capped at 93% of |R|.
   *  Rear-group SDs sized to match patent Figure 1 proportions.
   *
   *  STOP SD is the physically correct value (~16.14 mm) so that the
   *  computed entrance pupil is 25 mm SD = 50 mm diameter = f/1.0.
   */
  surfaces: [
    { label: "1A",  R:   40.765, d:  4.89, nd: 1.90525, elemId: 1, sd: 27.0  },
    { label: "2",   R:   65.488, d:  1.07, nd: 1.0,     elemId: 0, sd: 26.0  },
    { label: "3",   R:   32.975, d:  8.01, nd: 1.90043, elemId: 2, sd: 26.0  },
    { label: "4",   R:   84.150, d:  0.87, nd: 1.0,     elemId: 0, sd: 22.0  },
    { label: "5",   R:   58.596, d:  1.65, nd: 1.80518, elemId: 3, sd: 21.0  },
    { label: "6",   R:   19.835, d: 12.05, nd: 1.0,     elemId: 0, sd: 18.5  },
    { label: "STO", R:     1e15, d:  3.24, nd: 1.0,     elemId: 0, sd: 16.14 },
    { label: "8",   R:  -40.995, d:  1.55, nd: 1.76182, elemId: 4, sd: 17.0  },
    { label: "9",   R:   26.578, d: 10.80, nd: 1.88300, elemId: 5, sd: 17.0  },
    { label: "10",  R:  -90.702, d:  0.31, nd: 1.0,     elemId: 0, sd: 17.0  },
    { label: "11",  R:   78.611, d:  5.05, nd: 1.88300, elemId: 6, sd: 16.5  },
    { label: "12",  R: -125.199, d:  0.31, nd: 1.0,     elemId: 0, sd: 16.0  },
    { label: "13",  R:   53.736, d:  9.47, nd: 1.88300, elemId: 7, sd: 16.0  },
    { label: "14",  R:  -78.407, d:  1.55, nd: 1.55298, elemId: 8, sd: 13.5  },
    { label: "15",  R:   45.846, d:  1.42, nd: 1.0,     elemId: 0, sd: 13.0  },
    { label: "16A", R: 3376.612, d:  2.78, nd: 1.80835, elemId: 9, sd: 12.0  },
    { label: "17A", R:  120.496, d: 18.74, nd: 1.0,     elemId: 0, sd: 11.0  },
  ],

  /* ── Aspherical coefficients — Patent Table 2, Example 1 ──
   *  Keyed by surface label.  Sag equation:
   *    Z = (C·H²)/(1+√(1−(1+K)·C²·H²)) + A4·H⁴ + A6·H⁶ + ... + A14·H¹⁴
   *  Used ONLY for element shape rendering (renderSag).
   *  For all-spherical designs, set asph: {}
   */
  asph: {
    "1A": {
      K: -0.02238,
      A4: -1.02810e-06, A6:  6.04388e-10, A8: -4.31143e-12,
      A10: 5.62572e-15, A12: -3.29805e-18, A14: -5.97602e-23,
    },
    "16A": {
      K: -20,
      A4:  2.43710e-05, A6: -9.23649e-08, A8:  1.14851e-09,
      A10: -1.18851e-11, A12: 5.37423e-14, A14: -9.17045e-17,
    },
    "17A": {
      K: 20,
      A4:  3.37528e-05, A6: -2.40831e-08, A8: -1.16539e-10,
      A10: 1.95240e-13, A12: -7.79650e-16, A14: 2.20734e-18,
    },
  },

  /* ── Variable air spacings ──
   *  Keyed by surface label.  [thickness_infinity, thickness_close_focus]
   *  Unit focus: BFD increases by f²/(d_close − f) = 3.85 mm.
   */
  var: {
    "17A": [18.74, 22.59],
  },

  varLabels: [
    ["17A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1A",  toSurface: "6"   },
    { text: "G2 (REAR)",  fromSurface: "8",   toSurface: "17A" },
  ],

  doublets: [
    { text: "L4", fromSurface: "8",  toSurface: "10" },
    { text: "L6", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Focus configuration ── */
  closeFocusM:       0.70,
  focusStep:         0.004,
  focusDescription:  "Unit focus assumed — entire lens advances as one piece. Patent does not disclose a floating-element mechanism for this embodiment.",

  /* ── Aperture configuration ── */
  nominalFno:   1.0,
  maxFstop:     16,
  apertureStep: 0.004,
  fstopSeries:  [1, 1.2, 1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Ray fan configuration ── */
  rayFractions:     [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
  rayLeadFrac:      0.19,
  offAxisFieldFrac: 0.60,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],

  /* ── Layout tuning ── */
  svgW:             1080,
  svgH:             490,
  scFill:           0.50,
  yScFill:          0.30,
  clipMargin:       1.0,
  maxRimAngleDeg:   40,
  gapSagFrac:       0.90,
};

export default LENS_DATA;
