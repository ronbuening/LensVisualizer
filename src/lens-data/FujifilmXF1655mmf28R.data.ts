import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJIFILM XF 16-55mm F2.8 R LM WR             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2016/0154221 A1, Example 1 (Noda & Cho, Fujifilm).║
 * ║  Priority: JP 2014-243845, filed 2 December 2014.                  ║
 * ║  Positive-negative-positive-negative-positive (P-N-P-N-P) 5-group  ║
 * ║  standard zoom for APS-C X-mount.  17 elements in 12 groups,       ║
 * ║  6 aspherical surfaces on 3 elements (L21, L31, L34),              ║
 * ║  3 ED elements (L32B = S-FPM3; L33A, L43 = S-FPL51).               ║
 * ║  Focus: inner (internal) focus by G4 translation (3 elements);     ║
 * ║  G4 moves toward image for closer focus.  G5 (L51) is stationary.  ║
 * ║                                                                    ║
 * ║  Zoom variable gaps (inf-focus only, from patent Table 3):         ║
 * ║    DD5  (G1→G2) :  0.800 / 12.276 / 26.783  (zoom-only)            ║
 * ║    DD12 (G2→G3) : 19.890 /  5.636 /  0.685  (zoom-only)            ║
 * ║    DD23 (G3→G4) :  2.000 /  6.395 /  7.257  (zoom + focus)         ║
 * ║    DD28 (G4→G5) :  2.600 /  7.250 / 14.396  (zoom + focus)         ║
 * ║  All four trajectories are monotonic across the zoom range.        ║
 * ║                                                                    ║
 * ║  Close-focus DD23/DD28 values are DERIVED (not in patent):         ║
 * ║    Patent lists only infinity-focus variable gaps. Close-focus     ║
 * ║    values for DD23 and DD28 are computed here by solving for the   ║
 * ║    G4 translation that brings the paraxial image plane onto the    ║
 * ║    sensor at the Fujifilm-marketed MFD of 0.30 m (measured from    ║
 * ║    image plane).  DD5 and DD12 lie ahead of G4 and are not         ║
 * ║    affected by focusing — their close-focus values equal their     ║
 * ║    infinity values.                                                ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                   ║
 * ║    The patent uses the Fujifilm sag convention                     ║
 * ║        Z = C·h²/(1 + √(1 − KA·C²·h²)) + Σ A_m·h^m   (m = 3..16)     ║
 * ║    with non-zero ODD-order polynomial coefficients on all six      ║
 * ║    aspherical surfaces.  The project schema supports EVEN orders   ║
 * ║    only (A4, A6, A8, A10, A12, A14 required; A16, A18, A20         ║
 * ║    optional), and the standard conic K_std = KA − 1.               ║
 * ║                                                                    ║
 * ║    To preserve visual fidelity to the patent surface, each asph    ║
 * ║    surface's (R, K) base has been retained EXACTLY from the patent ║
 * ║    (KA mapped to K_std = KA − 1), and the polynomial has been      ║
 * ║    least-squares RE-FITTED over the surface's clear aperture using ║
 * ║    only even orders A4..A16.  Worst-case sag residual after refit  ║
 * ║    is ~11 μm at the rim of S22A; residuals on the other five       ║
 * ║    surfaces are sub-3 μm.  This is adequate for visualization but  ║
 * ║    not for optical simulation or manufacturing.  See the companion ║
 * ║    analysis document, §6.1a, for fit details.                      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent Example 1 prescription is at f = 16.492 mm (wide) to     ║
 * ║    f = 53.436 mm (tele).  Fujifilm markets the lens as 16–55 mm;   ║
 * ║    this ~3% marketing rounding is NOT rescaled here — prescription ║
 * ║    values are preserved exactly from the patent.                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Semi-diameters are NOT listed in the patent.  They were         ║
 * ║    estimated by combined marginal-ray + chief-ray envelope         ║
 * ║    (offAxisFieldFrac = 0.60) evaluated at all three zoom positions ║
 * ║    with an 8% mechanical clearance, then iteratively adjusted to   ║
 * ║    satisfy edge-thickness (≥ 0.5 mm), cross-gap overlap (intrusion ║
 * ║    ≤ gap × 1.1), and rim-slope (≤ tan 64.2°) constraints across    ║
 * ║    all zoom positions.  Front-group SDs (~25 mm) are consistent    ║
 * ║    with the lens's 77 mm filter thread.                            ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    Patent Table 1 explicitly labels surface 15 as the aperture     ║
 * ║    stop ("aperture stop"), sitting 3.440 mm behind L31 and         ║
 * ║    3.440 mm ahead of L32A.  The stop is variable — its physical    ║
 * ║    SD changes with zoom position so that the marketed constant     ║
 * ║    f/2.8 is held across the zoom range.  The data file records     ║
 * ║    the maximum stop SD (tele, wide-open, ≈ 9.1 mm); the renderer   ║
 * ║    reconstructs the per-zoom entrance pupil from the ABCD trace.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fuji-xf-16-55-f28",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR",
  subtitle: "US 2016/0154221 A1 EXAMPLE 1 — NODA & CHO / FUJIFILM",
  specs: [
    "17 ELEMENTS / 12 GROUPS",
    "f = 16.5 – 53.4 mm (PATENT) / 16 – 55 mm (MARKETED)",
    "F/2.88 – F/2.74 – F/2.89 (PATENT); F/2.8 CONSTANT (MARKETED)",
    "2ω = 87.0° – 28.8° (PATENT, PARAXIAL)",
    "6 ASPHERICAL SURFACES (3 ELEMENTS)",
    "3 ED ELEMENTS (S-FPM3, 2× S-FPL51)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [16, 55],
  focalLengthDesign: [16.49, 53.44],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 2016,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements (front to rear) ── */
  elements: [
    // G1 — front group (positive, +85.73 mm)
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -179.4,
      glass: "OHARA S-TIH53",
      apd: false,
      role: "High-index dense-flint achromatic front of G1 doublet; corrects longitudinal and lateral chromatic aberration and spherical aberration",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.33,
      fl: 140.4,
      glass: "OHARA S-PHM52",
      apd: false,
      role: "Positive crown paired with L11 to form the front achromat of G1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      fl: 94.1,
      glass: "Near OHARA S-LAL60 (755523)",
      apd: false,
      role: "Separate positive lanthanum crown; distributes G1 positive power to suppress spherical aberration",
    },

    // G2 — variator (negative, -14.70 mm)
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -17.6,
      glass: "HOYA M-TAFD305",
      apd: false,
      role: "Double-aspheric negative meniscus leading G2; principal wide-angle aberration corrector via its strong hyperbolic rear surface (K = −2.38)",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.53,
      fl: -16.4,
      glass: "OHARA S-LAL14",
      apd: false,
      role: "Biconcave negative sharing G2's negative power; cemented to L23",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.31,
      fl: 14.6,
      glass: "OHARA S-LAH58",
      apd: false,
      role: "Dense lanthanum-flint positive cemented to L22; balances G2 chromatic behaviour",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.68,
      fl: -48.6,
      glass: "OHARA S-LAL18",
      apd: false,
      role: "Separate negative meniscus closing G2; distributes negative power to suppress zoom-induced aberration fluctuations (claim designates this as negative; detailed description [0059] contains a typo calling it positive)",
    },

    // G3 — master group (positive, +22.94 mm), with stop
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.68458,
      vd: 30.88,
      fl: 39.1,
      glass: "Near OHARA L-TIM28 (685309)",
      apd: false,
      role: "Double-aspheric positive 'diverging-beam catcher' before the stop; limits downstream clear apertures and corrects spherical aberration at f/2.8",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -34.6,
      glass: "OHARA S-TIH53",
      apd: false,
      role: "Dense-flint negative front of L32 doublet; achromatises the positive combined doublet",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 23.0,
      glass: "OHARA S-FPM3 (ED)",
      apd: "patent",
      apdNote: "Fluor-phosphate ED glass; corrects longitudinal-chromatic secondary spectrum in post-stop region",
      role: "Biconvex ED positive cemented to L32A; primary post-stop apochromatic-correction element",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L34",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: 72.6,
      glass: "OHARA S-FPL51 (ED)",
      apd: "patent",
      apdNote: "Near-fluorite ED glass; strongest available anomalous-partial-dispersion behaviour in OHARA catalog",
      role: "ED positive meniscus (convex to image) cemented to L33B; completes the negative-combined L33 doublet",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L35",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.79952,
      vd: 42.22,
      fl: -22.0,
      glass: "OHARA S-LAH52",
      apd: false,
      role: "Biconcave lanthanum-flint cemented to L33A; designated as the IBIS/OIS shake-correction element in patent [0081] (OIS not implemented in the commercialised lens)",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L36",
      label: "Element 13",
      type: "Biconvex Pos. (2× Asph)",
      nd: 1.61882,
      vd: 63.58,
      fl: 19.8,
      glass: "Near OHARA L-PHM52 (619636)",
      apd: false,
      role: "Double-aspheric biconvex positive terminating G3; corrects astigmatism and high-order spherical aberration at the full f/2.8 cone angle",
    },

    // G4 — focus group (negative, -31.82 mm)
    {
      id: 14,
      name: "L41",
      label: "Element 14",
      type: "Plano-Concave",
      nd: 1.618,
      vd: 63.33,
      fl: -35.8,
      glass: "OHARA S-PHM52",
      apd: false,
      role: "Plano-concave negative leading G4; flat object-side surface simplifies axial registration and satisfies the shape constraint of patent [0084]",
    },
    {
      id: 15,
      name: "L42",
      label: "Element 15",
      type: "Plano-Concave",
      nd: 1.84666,
      vd: 23.78,
      fl: -54.3,
      glass: "OHARA S-TIH53",
      apd: false,
      role: "Plano-concave negative cemented to L43; splitting G4 negative power between L41 and L42 pushes the forward principal plane ahead, increasing focus sensitivity (patent [0084])",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L43",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 67.4,
      glass: "OHARA S-FPL51 (ED)",
      apd: "patent",
      apdNote: "Holds chromatic aberration stable through the focus stroke",
      role: "Biconvex ED positive cemented to L42; focus-group achromatic corrector",
      cemented: "D5",
    },

    // G5 — fixed field flattener (positive, +66.71 mm)
    {
      id: 17,
      name: "L51",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.95906,
      vd: 17.47,
      fl: 66.7,
      glass: "OHARA S-NPH3",
      apd: false,
      role: "Ultra-high-index niobium field flattener; reduces chief-ray angle at sensor (near-telecentric exit) and seals the rear of the barrel against dust ingress",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1 — positive front group
    { label: "1", R: 86.20982, d: 2.21, nd: 1.84666, elemId: 1, sd: 25.2 }, //  1  L11 front
    { label: "2", R: 54.352, d: 6.0, nd: 1.618, elemId: 2, sd: 24.8 }, //  2  L11/L12 cement
    { label: "3", R: 139.31177, d: 0.1, nd: 1.0, elemId: 0, sd: 23.6 }, //  3  L12 rear → air
    { label: "4", R: 53.19269, d: 6.34, nd: 1.755, elemId: 3, sd: 23.6 }, //  4  L13 front
    { label: "5", R: 200.56627, d: 0.8, nd: 1.0, elemId: 0, sd: 21.7 }, //  5  L13 rear → DD5

    // G2 — negative variator
    { label: "6A", R: 141.91654, d: 1.4, nd: 1.85135, elemId: 4, sd: 11.5 }, //  6  L21 front (asph)
    { label: "7A", R: 13.47772, d: 8.57, nd: 1.0, elemId: 0, sd: 10.8 }, //  7  L21 rear  (asph) → air
    { label: "8", R: -32.15762, d: 1.01, nd: 1.6968, elemId: 5, sd: 9.8 }, //  8  L22 front
    { label: "9", R: 17.989, d: 7.5, nd: 1.90366, elemId: 6, sd: 9.9 }, //  9  L22/L23 cement
    { label: "10", R: -39.71555, d: 1.38, nd: 1.0, elemId: 0, sd: 10.3 }, // 10  L23 rear → air
    { label: "11", R: -21.64392, d: 1.0, nd: 1.72916, elemId: 7, sd: 10.2 }, // 11  L24 front
    { label: "12", R: -56.68875, d: 19.89, nd: 1.0, elemId: 0, sd: 10.3 }, // 12  L24 rear → DD12

    // G3 — master group (positive) with aperture stop after L31
    { label: "13A", R: 27.66531, d: 4.0, nd: 1.68458, elemId: 8, sd: 10.4 }, // 13  L31 front (asph)
    { label: "14A", R: -787.32682, d: 2.0, nd: 1.0, elemId: 0, sd: 10.1 }, // 14  L31 rear  (asph) → air
    { label: "STO", R: 1e15, d: 3.44, nd: 1.0, elemId: 0, sd: 9.1 }, // 15  aperture stop
    { label: "16", R: 35.85993, d: 1.01, nd: 1.84666, elemId: 9, sd: 10.5 }, // 16  L32A front
    { label: "17", R: 15.925, d: 6.28, nd: 1.53775, elemId: 10, sd: 10.5 }, // 17  L32A/L32B cement
    { label: "18", R: -48.19335, d: 0.5, nd: 1.0, elemId: 0, sd: 11.1 }, // 18  L32B rear → air
    { label: "19", R: 396.51587, d: 3.51, nd: 1.497, elemId: 11, sd: 11.1 }, // 19  L33A front
    { label: "20", R: -39.578, d: 0.8, nd: 1.79952, elemId: 12, sd: 11.1 }, // 20  L33A/L33B cement
    { label: "21", R: 31.95551, d: 1.81, nd: 1.0, elemId: 0, sd: 11.2 }, // 21  L33B rear → air
    { label: "22A", R: 20.62352, d: 5.76, nd: 1.61882, elemId: 13, sd: 11.4 }, // 22  L34 front (asph)
    { label: "23A", R: -26.89463, d: 2.0, nd: 1.0, elemId: 0, sd: 11.4 }, // 23  L34 rear  (asph) → DD23

    // G4 — negative focus group
    { label: "24", R: 1e15, d: 0.8, nd: 1.618, elemId: 14, sd: 10.1 }, // 24  L41 front (plano)
    { label: "25", R: 22.13057, d: 2.05, nd: 1.0, elemId: 0, sd: 8.8 }, // 25  L41 rear → air
    { label: "26", R: 1e15, d: 0.81, nd: 1.84666, elemId: 15, sd: 9.7 }, // 26  L42 front (plano)
    { label: "27", R: 45.984, d: 2.54, nd: 1.497, elemId: 16, sd: 10.0 }, // 27  L42/L43 cement
    { label: "28", R: -121.37904, d: 2.6, nd: 1.0, elemId: 0, sd: 10.2 }, // 28  L43 rear → DD28

    // G5 — fixed positive field flattener; then cover-glass stack folded into BFD
    { label: "29", R: 310.67587, d: 3.0, nd: 1.95906, elemId: 17, sd: 11.1 }, // 29  L51 front
    { label: "30", R: -80.18906, d: 21.999, nd: 1.0, elemId: 0, sd: 11.1 }, // 30  L51 rear → image (air-equivalent BFD folds the 2.15/1.54763 + 0.70/1.49784 + 0.513 mm cover-glass stack)
  ],

  /* ── Aspherical coefficients ──
   *  Each of the six patent aspherics uses the Fujifilm convention
   *     Z = C·h²/(1 + √(1 − KA·C²·h²)) + Σ A_m·h^m   (m = 3..16)
   *  with non-zero odd orders.  The (R, KA) base is retained exactly
   *  (K_std = KA − 1 inserted here), and the polynomial has been
   *  least-squares re-fitted over the surface's clear aperture using
   *  even orders A4..A16 only.  Worst-case sag residual after refit:
   *  ~11 μm at the rim of S22A; sub-3 μm on the other five surfaces.
   *  See analysis §6.1a for fit details.
   */
  asph: {
    "6A": {
      K: 0.0,
      A4: -4.332663e-11,
      A6: -1.116917e-9,
      A8: -1.833214e-8,
      A10: 6.404905e-10,
      A12: -8.515753e-12,
      A14: 5.066359e-14,
      A16: -1.130948e-16,
    },
    "7A": {
      K: -2.3833082,
      A4: 8.816128e-7,
      A6: 8.611936e-6,
      A8: -3.269228e-7,
      A10: 6.307652e-9,
      A12: -6.52077e-11,
      A14: 3.450697e-13,
      A16: -7.337994e-16,
    },
    "13A": {
      K: 0.0,
      A4: -1.456767e-7,
      A6: -1.311471e-6,
      A8: 5.235481e-8,
      A10: -1.07252e-9,
      A12: 1.18629e-11,
      A14: -6.715091e-14,
      A16: 1.527351e-16,
    },
    "14A": {
      K: 0.0,
      A4: -3.819466e-8,
      A6: -3.238937e-7,
      A8: 1.148276e-8,
      A10: -2.060812e-10,
      A12: 2.056398e-12,
      A14: -1.044507e-14,
      A16: 2.091965e-17,
    },
    "22A": {
      K: 0.0,
      A4: -1.491699e-10,
      A6: -4.125307e-9,
      A8: -7.263441e-8,
      A10: 2.090593e-9,
      A12: -2.411155e-11,
      A14: 1.257416e-13,
      A16: -2.407388e-16,
    },
    "23A": {
      K: 0.0,
      A4: 2.846231e-11,
      A6: 7.97446e-10,
      A8: 1.422518e-8,
      A10: -4.237183e-10,
      A12: 5.323013e-12,
      A14: -3.234446e-14,
      A16: 8.265862e-17,
    },
  },

  /* ── Variable air spacings ── */
  //  DD5 and DD12 are ZOOM-ONLY (unchanged by focus, since both lie ahead of the focus group G4).
  //  DD23 (G3→G4) and DD28 (G4→G5) are ZOOM + FOCUS:
  //    Infinity values taken from patent Table 3.
  //    Close-focus values derived from paraxial G4-translation solve for Fujifilm MFD of
  //    0.30 m (measured from image plane), yielding G4 image-ward motion of
  //    ≈ 0.70 mm (wide), ≈ 2.04 mm (mid), ≈ 4.55 mm (tele).
  //    For each zoom position:  DD23_close = DD23_inf + ΔG4;  DD28_close = DD28_inf − ΔG4.
  var: {
    "5": [
      [0.8, 0.8],
      [12.276, 12.276],
      [26.783, 26.783],
    ],
    "12": [
      [19.89, 19.89],
      [5.636, 5.636],
      [0.685, 0.685],
    ],
    "23A": [
      [2.0, 2.697],
      [6.395, 8.435],
      [7.257, 11.805],
    ],
    "28": [
      [2.6, 1.903],
      [7.25, 5.21],
      [14.396, 9.848],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["12", "D12"],
    ["23A", "D23"],
    ["28", "BF"], // Functionally the last variable gap before G5; G5 rear + cover-glass air-equivalent is the true BFD
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [16.492, 31.059, 53.436],
  zoomStep: 0.004,
  zoomLabels: ["Wide (16mm)", "Tele (55mm)"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "13A", toSurface: "23A" },
    { text: "G4 (−)", fromSurface: "24", toSurface: "28" },
    { text: "G5 (+)", fromSurface: "29", toSurface: "30" },
  ],

  doublets: [
    { text: "D1 L11+L12", fromSurface: "1", toSurface: "3" },
    { text: "D2 L22+L23", fromSurface: "8", toSurface: "10" },
    { text: "D3 L32", fromSurface: "16", toSurface: "18" },
    { text: "D4 L33", fromSurface: "19", toSurface: "21" },
    { text: "D5 L42+L43", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Inner focus by G4 translation; G4 (L41 + L42+L43 cemented) moves toward the image plane for closer focus. Linear-motor driven (the 'LM' in the product name). G5 (field flattener) is stationary for weather sealing and microlens consistency.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 9,
  apertureBladeRoundedness: 0.85,

  /* ── Layout tuning ── */
  scFill: 0.86,
  yScFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
