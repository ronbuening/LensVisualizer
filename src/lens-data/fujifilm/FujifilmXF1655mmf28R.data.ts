import type { LensDataInput } from "../../types/optics.js";

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
 * ║  Each gap changes monotonically over the three stations.  Group    ║
 * ║  motion (Fig. 4): G1, G3 and G4 move monotonically toward the      ║
 * ║  object; G2 first moves toward the image (≈5.2 mm to mid) and      ║
 * ║  then back toward the object (≈3.1 mm to tele); G5 is fixed.       ║
 * ║                                                                    ║
 * ║  Close-focus DD23/DD28 values are DERIVED (not in patent):         ║
 * ║    The patent lists only infinity-focus variable gaps.  Close     ║
 * ║    values are a paraxial G4-translation solve for Fujifilm's      ║
 * ║    macro-range MFD (object-to-image): 0.30 m at wide, 0.40 m at    ║
 * ║    tele (zoomCloseFocusM); the mid-station 0.30 m is an assumed    ║
 * ║    value, since Fujifilm publishes only wide/tele.  G4 travel      ║
 * ║    ≈ 0.70 / 2.04 / 3.16 mm.  DD5 and DD12 lie ahead of G4 and are  ║
 * ║    not affected by focusing.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                   ║
 * ║    The patent uses the Fujifilm sag convention                     ║
 * ║        Z = C·h²/(1 + √(1 − KA·C²·h²)) + Σ A_m·h^m   (m = 3..16)     ║
 * ║    with non-zero ODD-order polynomial coefficients on all six      ║
 * ║    aspherical surfaces. Exact Table 4 odd/even coefficients are   ║
 * ║    transcribed below, with the standard conic K = KA − 1.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent Example 1 prescription is at f = 16.492 mm (wide) to     ║
 * ║    f = 53.436 mm (tele).  Fujifilm markets the lens as 16–55 mm;   ║
 * ║    the patent is already at production scale and is kept native.  ║
 * ║                                                                    ║
 * ║  NOTE ON BACK FOCUS:                                               ║
 * ║    Patent optical member PP (surfaces 31–33: cemented plates       ║
 * ║    2.15 mm nd 1.54763 / νd 54.98 and 0.70 mm nd 1.49784 / νd 54.98,║
 * ║    then 0.513 mm air to the image) is modeled in `rearPlates`      ║
 * ║    (traced, not drawn).  Surface 30 stores the physical 19.630 mm  ║
 * ║    gap to the first plate; the air-equivalent 19.630 + t/n + 0.513 ║
 * ║    = 21.9996 mm matches the patent Bf of 22.000 mm at all stations.║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Semi-diameters are NOT listed in the patent.  G1 (S1–S5), L21   ║
 * ║    (6A/7A) and L51 (29/30) were re-measured from the Fig. 1        ║
 * ║    wide-angle section (scale 0.1316 mm/px at 300 dpi from S1 to    ║
 * ║    the cover plate) in the 2026-09-23 audit: the old values        ║
 * ║    blocked the exact full-field chief ray at S1 and 6A (wide) and  ║
 * ║    at S30 (mid/tele, patent ω).  S8/S9                             ║
 * ║    were raised to 10.5 mm to pass the ω = 43.5° chief ray (9.95   ║
 * ║    mm on S8).  The remaining G2–G4 values are earlier ray-envelope ║
 * ║    estimates, within ~15 % of the figure and clear of the axial    ║
 * ║    f/2.74–2.89 beams at every station.                             ║
 * ║                                                                    ║
 * ║  NOTE ON STOP / APERTURE:                                           ║
 * ║    Patent Table 1 labels surface 15 as the aperture stop, 3.440 mm ║
 * ║    behind L31 and ahead of L32A; ¶[0088] calls it a variable stop. ║
 * ║    The patent gives FNO 2.88 / 2.74 / 2.89 but no iris diameters,  ║
 * ║    so zoomApertureModel "from-nominal-fno" infers the per-station  ║
 * ║    iris (≈ 7.2 / 9.0 / 9.7 mm from the engine).  STO sd records   ║
 * ║    the largest (tele) iris; production is marketed as f/2.8.       ║
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
    "2ω = 87.0° – 48.6° – 28.8° (PATENT)",
    "6 ASPHERICAL SURFACES (3 ELEMENTS)",
    "3 ED ELEMENTS (S-FPM3, 2× S-FPL51)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [16, 55],
  focalLengthDesign: [16.49, 53.44],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2016/0154221 A1",
  patentAuthors: ["Taiga Noda", "Michio Cho"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2016,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements (front to rear) ── */
  elements: [
    // G1 — front group (positive, +85.73 mm)
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
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
      label: "Element 2 (L12)",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      fl: 140.4,
      glass: "OHARA S-PHM52",
      apd: false,
      role: "Positive meniscus crown (convex to object) paired with L11 to form the front achromat of G1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      fl: 94.1,
      glass: "J-LASKH2 (HIKARI catalog equivalent; patent code 755523, vendor unspecified)",
      apd: false,
      role: "Separate positive meniscus (convex to object) in lanthanum crown; distributes G1 positive power to suppress spherical aberration",
    },

    // G2 — variator (negative, -14.70 mm)
    {
      id: 4,
      name: "L21",
      label: "Element 4 (L21)",
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
      label: "Element 5 (L22)",
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
      label: "Element 6 (L23)",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.31,
      fl: 14.6,
      glass: "OHARA S-LAH95",
      apd: false,
      role: "Dense lanthanum-flint positive cemented to L22; balances G2 chromatic behaviour",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7 (L24)",
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
      label: "Element 8 (L31)",
      type: "Biconvex Pos. (2× Asph)",
      nd: 1.68458,
      vd: 30.88,
      fl: 39.1,
      glass: "Unmatched (685309 dense flint; nearest public catalog row exceeds d-line tolerance)",
      apd: false,
      role: "Double-aspheric, nearly plano-convex biconvex positive (R2 = −787 mm) before the stop; catches the diverging beam from G2, limits downstream clear apertures and corrects spherical aberration at f/2.8",
    },
    {
      id: 9,
      name: "L32A",
      label: "Element 9 (L32A)",
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
      name: "L32B",
      label: "Element 10 (L32B)",
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
      name: "L33A",
      label: "Element 11 (L33A)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 72.6,
      glass: "OHARA S-FPL51 (ED)",
      apd: "patent",
      apdNote: "Near-fluorite ED glass; strongest available anomalous-partial-dispersion behaviour in OHARA catalog",
      role: "Weakly biconvex ED positive (R1 = +396.5 mm, R2 = −39.6 mm) cemented to L33B; completes the negative-combined L33 doublet",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L33B",
      label: "Element 12 (L33B)",
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
      name: "L34",
      label: "Element 13 (L34)",
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
      label: "Element 14 (L41)",
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
      label: "Element 15 (L42)",
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
      label: "Element 16 (L43)",
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
      label: "Element 17 (L51)",
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
    { label: "1", R: 86.20982, d: 2.21, nd: 1.84666, elemId: 1, sd: 28.5 }, //  1  L11 front
    { label: "2", R: 54.352, d: 6.0, nd: 1.618, elemId: 2, sd: 26.8 }, //  2  L11/L12 cement
    { label: "3", R: 139.31177, d: 0.1, nd: 1.0, elemId: 0, sd: 26.6 }, //  3  L12 rear → air
    { label: "4", R: 53.19269, d: 6.34, nd: 1.755, elemId: 3, sd: 25.7 }, //  4  L13 front
    { label: "5", R: 200.56627, d: 0.8, nd: 1.0, elemId: 0, sd: 25.7 }, //  5  L13 rear → DD5

    // G2 — negative variator
    { label: "6A", R: 141.91654, d: 1.4, nd: 1.85135, elemId: 4, sd: 17.4 }, //  6  L21 front (asph)
    { label: "7A", R: 13.47772, d: 8.57, nd: 1.0, elemId: 0, sd: 11.3 }, //  7  L21 rear  (asph) → air
    { label: "8", R: -32.15762, d: 1.01, nd: 1.6968, elemId: 5, sd: 10.5 }, //  8  L22 front
    { label: "9", R: 17.989, d: 7.5, nd: 1.90366, elemId: 6, sd: 10.5 }, //  9  L22/L23 cement
    { label: "10", R: -39.71555, d: 1.38, nd: 1.0, elemId: 0, sd: 10.3 }, // 10  L23 rear → air
    { label: "11", R: -21.64392, d: 1.0, nd: 1.72916, elemId: 7, sd: 10.2 }, // 11  L24 front
    { label: "12", R: -56.68875, d: 19.89, nd: 1.0, elemId: 0, sd: 10.3 }, // 12  L24 rear → DD12

    // G3 — master group (positive) with aperture stop after L31
    { label: "13A", R: 27.66531, d: 4.0, nd: 1.68458, elemId: 8, sd: 10.4 }, // 13  L31 front (asph)
    { label: "14A", R: -787.32682, d: 2.0, nd: 1.0, elemId: 0, sd: 10.1 }, // 14  L31 rear  (asph) → air
    { label: "STO", R: 1e15, d: 3.44, nd: 1.0, elemId: 0, sd: 9.7 }, // 15  aperture stop
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

    // G5 — fixed positive field flattener; the PP plate stack follows in `rearPlates`
    { label: "29", R: 310.67587, d: 3.0, nd: 1.95906, elemId: 17, sd: 13.8 }, // 29  L51 front
    { label: "30", R: -80.18906, d: 19.63, nd: 1.0, elemId: 0, sd: 13.8 }, // 30  L51 rear → PP (physical gap to the first plate)
  ],

  /* ── Optical member PP (patent surfaces 31–33): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.15,
      nd: 1.54763,
      vd: 54.98,
      glass: "N-BALF5",
      gapAfterMm: 0,
      source: "US 2016/0154221 A1, Example 1 Table 1 surfaces 31–32 (PP, first plate)",
    },
    {
      thicknessMm: 0.7,
      nd: 1.49784,
      vd: 54.98,
      gapAfterMm: 0.513,
      source: "US 2016/0154221 A1, Example 1 Table 1 surfaces 32–33 (PP, second plate)",
    },
  ],

  /* ── Aspherical coefficients ──
   *  Each of the six patent aspherics uses the Fujifilm convention
   *     Z = C·h²/(1 + √(1 − KA·C²·h²)) + Σ A_m·h^m   (m = 3..16)
   *  with non-zero odd orders. Exact Table 4 coefficients are retained,
   *  with K_std = KA − 1 inserted here and zero A3 terms omitted.
   */
  asph: {
    "6A": {
      K: 0,
      A4: -2.6826923e-5,
      A5: 4.7863658e-6,
      A6: -1.8421337e-7,
      A7: -1.8337031e-8,
      A8: 1.6991972e-9,
      A9: 4.0861337e-11,
      A10: -7.851143e-12,
      A11: -4.307865e-14,
      A12: 2.3184894e-14,
      A13: 4.1106169e-17,
      A14: -4.8125491e-17,
      A15: 3.8585298e-19,
      A16: 2.7390609e-20,
    },
    "7A": {
      K: -2.3833082,
      A4: 5.1722084e-5,
      A5: 1.924965e-5,
      A6: -4.6557231e-6,
      A7: 6.808623e-7,
      A8: -4.6108053e-8,
      A9: -1.7600435e-9,
      A10: 4.557412e-10,
      A11: -5.9515764e-12,
      A12: -1.949942e-12,
      A13: 1.9031053e-14,
      A14: 5.4999737e-15,
      A15: 1.9283343e-16,
      A16: -2.0233351e-17,
    },
    "13A": {
      K: 0,
      A4: 4.1332336e-6,
      A5: -8.6972277e-6,
      A6: 1.5350565e-6,
      A7: -7.8404429e-8,
      A8: -7.4982002e-9,
      A9: 8.8156832e-10,
      A10: -9.4816394e-12,
      A11: -6.284011e-13,
      A12: -2.4248166e-14,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 1.0143172e-5,
      A5: -6.3304378e-6,
      A6: 8.2811414e-7,
      A7: 1.05711e-8,
      A8: -6.8812553e-9,
      A9: -2.0359431e-10,
      A10: 6.3325383e-11,
      A11: -3.4680139e-14,
      A12: -1.5600198e-13,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: -4.8240511e-5,
      A5: 5.2748685e-6,
      A6: -6.2154451e-7,
      A7: -4.8032329e-8,
      A8: 1.3275405e-8,
      A9: 6.1331416e-10,
      A10: -2.2421975e-10,
      A11: -3.4333485e-12,
      A12: 2.2269472e-12,
      A13: 2.2654836e-14,
      A14: -1.4106854e-14,
      A15: -1.194908e-16,
      A16: 4.6802864e-17,
    },
    "23A": {
      K: 0,
      A4: -4.3314253e-7,
      A5: 1.6554907e-6,
      A6: 5.7603232e-7,
      A7: -2.3889843e-7,
      A8: 2.0442912e-8,
      A9: 2.1682367e-9,
      A10: -3.8023797e-10,
      A11: -5.6322606e-12,
      A12: 2.8361883e-12,
      A13: 9.7304729e-15,
      A14: -1.094833e-14,
      A15: -5.6980089e-16,
      A16: 6.3788931e-17,
    },
  },

  /* ── Variable air spacings ── */
  //  DD5 and DD12 are ZOOM-ONLY (unchanged by focus, since both lie ahead of the focus group G4).
  //  DD23 (G3→G4) and DD28 (G4→G5) are ZOOM + FOCUS:
  //    Infinity values taken from patent Table 3.
  //    Close-focus values are DERIVED (paraxial G4-translation solve), not patent values:
  //    wide and mid focus 0.30 m object-to-image, tele 0.40 m (Fujifilm macro-range MFD
  //    0.30 m wide / 0.40 m tele; the mid-station 0.30 m is an assumption). G4 image-ward
  //    motion ≈ 0.70 mm (wide), ≈ 2.04 mm (mid), ≈ 3.16 mm (tele); tele magnification
  //    ≈ 0.154× paraxial vs Fujifilm's published 0.16×.
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
      [7.257, 10.418],
    ],
    "28": [
      [2.6, 1.903],
      [7.25, 5.21],
      [14.396, 11.235],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["12", "D12"],
    ["23A", "D23"],
    ["28", "D28"], // G4→G5 gap; the back focus behind the fixed G5 is constant (patent Bf 22.000 air-equivalent)
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
  zoomCloseFocusM: [0.3, 0.3, 0.4],
  focusDescription:
    "Inner focus by G4 translation; G4 (L41 + L42+L43 cemented) moves toward the image plane for closer focus (patent ¶[0084]). Close-focus gaps are calculated for Fujifilm's macro-range MFD (0.30 m wide, 0.40 m tele; mid assumed 0.30 m), not published in the patent. Linear-motor driven (the 'LM' in the product name). G5 stays fixed during zoom and focus (¶[0078]: allows the lens to be sealed against foreign matter).",

  /* ── Aperture configuration ── */
  nominalFno: [2.88, 2.74, 2.89],
  zoomApertureModel: "from-nominal-fno",
  fstopSeries: [2.74, 2.88, 2.89, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,
  apertureBladeRoundedness: 0.85,

  /* ── Layout tuning ── */
  scFill: 0.86,
  yScFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
