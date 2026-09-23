import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — Fujifilm Fujinon XF 16–80mm f/4 R OIS WR
 *
 * Data source: US 2020/0166735 A1, Example 11 (Kawamura & Noda, Fujifilm Corporation; filed 20 Nov 2019;
 * priority JP 2018-221597, 27 Nov 2018; published 28 May 2020). Table 31 (lens data), Table 32 (zoom data),
 * Table 33 (aspheric coefficients), FIG. 11 (cross-section). Stored at patent scale (no rescaling).
 *
 * EMBODIMENT CHOICE: Examples 1, 4 and 11 all have the same 16-element / 12-group layout, constant
 * FNo 4.12–4.13, f ≈ 16.5–77.8 mm and aspheric surfaces on L21, L31, L34 and L53. The patent does not say
 * which one is the production lens. Example 11 is kept. One point in its favour (inferred, not stated): its
 * double-sided aspheric L34 uses nd/νd 1.49710/81.56, which exactly matches the moldable HOYA M-FCD1.
 *
 * LAYOUT: G1(+) G2(−) STOP G3(+) [G3F + G3R] G4(−) G5(+). 16 elements in 12 groups, 8 aspheric surfaces
 * on 4 elements (L21, L31, L34, L53, each with both sides aspheric). Focus: G4 (the L41/L42 cemented
 * doublet) moves toward the image for close focus (¶0077). OIS: G3R = L34 alone shifts across the axis.
 *
 * ZOOM MOTION (Table 32 gaps, positions relative to the fixed G5 / image plane; derived):
 *   G1 moves toward the object by 42.6 mm.
 *   G2 first moves 0.9 mm toward the image (wide→middle), then 8.1 mm toward the object (middle→tele).
 *     This reversal is small; FIG. 11 draws its wide→middle arrow straight down.
 *   G3 (with the stop) moves 26.3 mm toward the object; G4 moves 26.2 mm toward the object.
 *   G5 is fixed (ground symbol in FIG. 11). D21 (G3–G4) rises from 2.400 to 3.974 mm and falls back to
 *   2.502 mm because G3 and G4 move at different rates. The lens gets 42.6 mm longer from wide to tele.
 *
 * BACK FOCUS: Table 31 gives 14.614 mm after S29, then a 2.850 mm plate (nd 1.51680) and 1.000 mm of air.
 * The plate is left out and its air-equivalent length is added to the last gap:
 * 14.614 + 2.850/1.51680 + 1.000 = 17.493 mm. The stored value is 17.494 mm, and the paraxial BFD is
 * 17.494 / 17.495 / 17.494 mm, so the defocus is ≤ 0.001 mm.
 *
 * FOCUS: Table 32 gives only infinity gaps, and no close-focus spacing is published. The focus pairs are
 * therefore identical, so focus travel is not modelled and no G4 travel was invented. closeFocusM 0.35 m
 * is Fujifilm's published minimum focus distance, not a patent value.
 *
 * APERTURE: FNo 4.12 / 4.12 / 4.13 and the stop moves with G3. No iris diameters are published, so
 * zoomApertureModel "from-nominal-fno" calculates each station's iris radius from FNo 4.12. The traced
 * radii are 4.90 / 6.41 / 7.97 mm, and the STO sd of 8.0 mm records the largest (tele) iris.
 *
 * NOTE ON SEMI-DIAMETERS: No effective diameters are published. The values come from the FIG. 11 wide-angle
 * drawing, measured with a profiler (10.54 px/mm at 300 dpi, scaled from the S1→S29 vertex span of
 * 86.70 mm). They were then checked with exact real-ray traces at Y = 14.2 mm
 * (ω = 43.5° / 20.2° / 9.9°, patent 2ω = 87.2° / 40.4° / 19.8°):
 *   G1 26.0–24.2 (figure rims 25.9 / 24.9 / 24.1 mm); L21 front 13.8 (the wide chief ray reaches 13.5);
 *   L21 rear / L22 front 10.6 / 9.6, where the air lens between them closes at about 10.6 mm;
 *   G3 8.9–9.8 (figure 9.0–10.1; tele marginal ray 8.65 at S15); G5 12.4–13.8
 *   (figure 12.8–13.8; tele chief 10.8–11.9). S28 is limited to 12.4 by the 0.511 mm gap to flat S27.
 * No surface clips the axial beam or blocks a full-field chief ray at any station. The retained G2
 * (S9–S13) and G4 rims are within about 10 % of the figure. The engine's paraxial half-field at wide
 * (38.0°) is capped by S7A. It stays below the patent's 43.6° even though the real chief ray clears S7A.
 *
 * ASPHERICS: KA = 1 (K = 0). Table 33 A3..A10 are transcribed in full, including the odd orders A5/A7/A9.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf-16-80-f4",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 16-80mm f/4 R OIS WR",
  subtitle: "US 2020/0166735 A1 Example 11 — Fujifilm / Kawamura, Noda",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "f = 16.5–77.8 mm",
    "F/4",
    "2ω = 87.2°–19.8°",
    "8 ASPHERICAL SURFACES (4 ELEMENTS)",
    "OIS: L34",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [16, 80],
  focalLengthDesign: [16.497, 77.751],
  apertureMarketing: 4,
  apertureDesign: 4.13,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2020/0166735 A1",
  patentAuthors: ["Daiki Kawamura", "Taiga Noda"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2020,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements (front to rear) ──
   *  16 elements total. L21, L31, L34, L53 each have BOTH surfaces aspheric (8 asph surfaces total).
   *  The patent names no glass vendors; labels are catalog equivalents that match the Table 31 nd/νd pair.
   *  dPgF = θgF − (0.6438 − 0.001682·νd) from the Table 31 θgF column (derived).
   */
  elements: [
    // Front group G1 (positive) — cemented doublet L11+L12 plus separated L13
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -164.2,
      glass: "S-TIH53 (OHARA, 847/238 dense short flint)",
      apd: false,
      dPgF: 0.01674, // θgF 0.62054
      role: "G1 front: tele-end longitudinal CA absorber; cemented to L12",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 110.0,
      glass: "TAC8 (HOYA, 729/547 lanthanum crown; OHARA S-LAL18 equivalent)",
      apd: false,
      dPgF: -0.00682, // θgF 0.54503
      role: "G1 partner in achromatic front doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.53,
      fl: 119.6,
      glass: "S-LAL14 (OHARA, 697/555 lanthanum crown)",
      apd: false,
      dPgF: -0.00636, // θgF 0.54404
      role: "G1 separated positive — extra DOF for SA at tele",
    },

    // G2 (negative, four elements — variator)
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8078,
      vd: 40.89,
      fl: -17.3,
      glass: "808409 - PGM lanthanum dense flint (MC-NBFD135 code match; patent nd=1.80780, vd=40.89)",
      apd: false,
      dPgF: -0.00553, // θgF 0.56949
      role: "Primary wide-end SA & distortion corrector; double-sided asphere",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: -33.0,
      glass: "S-PHM52 (OHARA, 618/634 light phosphate crown)",
      apd: false,
      dPgF: 0.00297, // θgF 0.54015
      role: "Low-dispersion negative; chromatic partner to L23",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92287,
      vd: 20.88,
      fl: 26.7,
      glass: "E-FDS1 (HOYA, 923/209 dense flint)",
      apd: "inferred",
      apdNote: "Table 31 θgF = 0.63943, dPgF ≈ +0.031 above the normal line (derived; the patent makes no APD claim)",
      dPgF: 0.03075,
      role: "High-index, high-dispersion positive in G2; chromatic partner to the negative lenses",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.84667,
      vd: 23.79,
      fl: -74.8,
      glass: "S-TIH53 (OHARA, 847/238 dense short flint)",
      apd: false,
      dPgF: 0.01392, // θgF 0.61771
      role: "G2 field-angle correction at wide end",
    },

    // G3 — split into G3F (L31, L32, L33) and G3R (L34)
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Pos. Biconvex (2× Asph)",
      nd: 1.68893,
      vd: 31.16,
      fl: 23.3,
      glass: "M-FD80 (HOYA, 689/312 moldable dense flint)",
      apd: false,
      dPgF: 0.01258, // θgF 0.60397
      role: "G3F post-stop SA corrector; double-sided asphere",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84667,
      vd: 23.79,
      fl: -16.5,
      glass: "S-TIH53 (OHARA, 847/238 dense short flint)",
      apd: false,
      dPgF: 0.01392, // θgF 0.61771
      role: "G3F cemented doublet front — longitudinal CA corrector",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: 34.6,
      glass: "S-PHM52 (OHARA, 618/634 light phosphate crown)",
      apd: false,
      dPgF: 0.00297, // θgF 0.54015
      role: "G3F cemented doublet rear — partner crown",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L34",
      label: "Element 11",
      type: "Pos. Biconvex (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      fl: 19.56,
      glass: "M-FCD1 (HOYA, 497/816 moldable fluorophosphate ED glass)",
      apd: "inferred",
      apdNote:
        "Table 31 θgF = 0.53859, dPgF ≈ +0.032 (derived). The patent asks only for a high Abbe number (Cond. 7: 65 < νd3Rp < 105) to limit colour shift during image-blur correction; APD is inferred from the glass.",
      dPgF: 0.03197,
      role: "OIS element (G3R) — shifts perpendicular to the axis; high-νd glass limits colour change during stabilisation",
    },

    // G4 — cemented doublet focusing group (inner focus)
    {
      id: 12,
      name: "L41",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.85896,
      vd: 22.73,
      fl: 51.0,
      glass: "S-NPH5 (OHARA, 859/227 dense flint)",
      apd: false,
      dPgF: 0.02287, // θgF 0.62844
      role: "G4 focus-group positive; cemented to L42",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L42",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.59,
      fl: -20.3,
      glass: "S-LAH63 (OHARA, 804/396 lanthanum flint)",
      apd: false,
      dPgF: -0.00424, // θgF 0.57297
      role: "G4 focus-group negative; internal color correction",
      cemented: "D3",
    },

    // G5 — stationary rear group (field flattener + telecentric shaping)
    {
      id: 14,
      name: "L51",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 81.0,
      glass: "N-BK7 (SCHOTT, 517/642 borosilicate crown; OHARA S-BSL7 equivalent)",
      apd: false,
      dPgF: -0.00152, // θgF 0.53430
      role: "G5 positive; cemented to L52 (near-flat front R=399 mm)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L52",
      label: "Element 15",
      type: "Plano-Concave Negative",
      nd: 1.6935,
      vd: 53.35,
      fl: -67.2,
      glass: "LAC13 (HOYA, 694/533 lanthanum crown)",
      apd: false,
      dPgF: -0.00563, // θgF 0.54844
      role: "G5 negative with FLAT rear surface; cemented to L51",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L53",
      label: "Element 16",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 76.6,
      glass: "M-BACD12 (HOYA, 583/595 moldable barium crown)",
      apd: false,
      dPgF: -0.00312, // θgF 0.54067
      role: "Final field flattener; largest aspheric departures in system",
    },
  ],

  /* ── Surface prescription (Table 31 S1–S29: 28 lens surfaces + stop S14) ──
   *  Flat surfaces use R = 1e15 per project convention. Labels follow the patent surface numbers;
   *  the "A" suffix marks the Table 31 asterisked (aspheric) surfaces.
   *  DD[5], DD[13], DD[21], DD[24] are zoom-variable (see `var` block below).
   *  The Table 31 plate (S30–S31) is excluded; its air-equivalent path is folded into the S29 gap
   *  (14.614 + 2.850/1.51680 + 1.000 = 17.493; stored 17.494).
   */
  surfaces: [
    // G1: L11 + L12 cemented doublet, L13 separated
    { label: "1", R: 128.24623, d: 1.5, nd: 1.84666, elemId: 1, sd: 26.0 }, // L11 front
    { label: "2", R: 66.354, d: 5.42, nd: 1.72916, elemId: 2, sd: 26.0 }, // L11/L12 junction (cemented)
    { label: "3", R: 370.23098, d: 0.15, nd: 1.0, elemId: 0, sd: 25.0 }, // L12 rear → air
    { label: "4", R: 60.85319, d: 4.91, nd: 1.6968, elemId: 3, sd: 24.2 }, // L13 front
    { label: "5", R: 218.25042, d: 0.8, nd: 1.0, elemId: 0, sd: 24.2 }, // L13 rear → air (DD[5] variable)

    // G2: L21 asph, L22, L23, L24
    { label: "6A", R: 294.10562, d: 2.0, nd: 1.8078, elemId: 4, sd: 13.8 }, // L21 front (asph)
    { label: "7A", R: 13.29231, d: 8.38, nd: 1.0, elemId: 0, sd: 10.6 }, // L21 rear → air (asph)
    { label: "8", R: -17.12196, d: 0.7, nd: 1.618, elemId: 5, sd: 9.6 }, // L22 front
    { label: "9", R: -108.18599, d: 0.15, nd: 1.0, elemId: 0, sd: 10.8 }, // L22 rear → air
    { label: "10", R: 89.95607, d: 3.62, nd: 1.92287, elemId: 6, sd: 10.8 }, // L23 front
    { label: "11", R: -33.23372, d: 1.45, nd: 1.0, elemId: 0, sd: 10.5 }, // L23 rear → air
    { label: "12", R: -19.01017, d: 0.7, nd: 1.84667, elemId: 7, sd: 9.8 }, // L24 front
    { label: "13", R: -27.63008, d: 20.01, nd: 1.0, elemId: 0, sd: 9.8 }, // L24 rear → air (DD[13] variable)

    // Aperture stop (position per patent Table 31 Sn=14)
    { label: "STO", R: 1e15, d: 1.1, nd: 1.0, elemId: 0, sd: 8.0 }, // aperture stop (flat)

    // G3F: L31 asph, cemented doublet L32+L33
    { label: "15A", R: 16.62717, d: 4.51, nd: 1.68893, elemId: 8, sd: 9.8 }, // L31 front (asph)
    { label: "16A", R: -416.39974, d: 1.64, nd: 1.0, elemId: 0, sd: 9.8 }, // L31 rear → air (asph)
    { label: "17", R: 50.66171, d: 0.7, nd: 1.84667, elemId: 9, sd: 9.6 }, // L32 front
    { label: "18", R: 10.881, d: 3.75, nd: 1.618, elemId: 10, sd: 9.2 }, // L32/L33 junction (cemented)
    { label: "19", R: 19.23257, d: 1.6, nd: 1.0, elemId: 0, sd: 8.9 }, // L33 rear → air

    // G3R: L34 (OIS element, ED glass, double-sided asphere)
    { label: "20A", R: 16.53927, d: 5.89, nd: 1.4971, elemId: 11, sd: 9.6 }, // L34 front (asph, ED)
    { label: "21A", R: -20.80043, d: 2.4, nd: 1.0, elemId: 0, sd: 9.7 }, // L34 rear → air (asph, DD[21] variable)

    // G4: cemented doublet focusing group
    { label: "22", R: 87.208, d: 2.0, nd: 1.85896, elemId: 12, sd: 7.8 }, // L41 front
    { label: "23", R: -87.208, d: 0.61, nd: 1.8044, elemId: 13, sd: 7.8 }, // L41/L42 junction (cemented)
    { label: "24", R: 20.15648, d: 4.01, nd: 1.0, elemId: 0, sd: 8.0 }, // L42 rear → air (DD[24] variable)

    // G5: cemented doublet L51+L52 (L52 has flat rear), then L53 asph
    { label: "25", R: 398.56925, d: 3.3, nd: 1.5168, elemId: 14, sd: 12.8 }, // L51 front
    { label: "26", R: -46.616, d: 1.2, nd: 1.6935, elemId: 15, sd: 13.2 }, // L51/L52 junction (cemented)
    { label: "27", R: 1e15, d: 0.511, nd: 1.0, elemId: 0, sd: 13.5 }, // L52 rear (FLAT) → air
    { label: "28A", R: -83.44813, d: 3.69, nd: 1.58313, elemId: 16, sd: 12.4 }, // L53 front (asph)
    { label: "29A", R: -29.56019, d: 17.494, nd: 1.0, elemId: 0, sd: 13.8 }, // L53 rear → image (asph, air-equiv BFD incl. cover glass)
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: KA = 1 + K (so KA = 1.0 → K = 0, spherical base).
   *  Z(h) = (h²/R) / [1 + √(1 − KA·(h/R)²)] + Σ Aₙ·hⁿ  for n = 3..10.
   *  Table 33 (Example 11) lists A3..A10 for all eight surfaces. A3 = 0 on
   *  every surface and is omitted; A4..A10 including the odd orders A5, A7, A9
   *  are transcribed verbatim (checked against the rendered page). A12/A14 are
   *  not in the patent and are 0. Before the 2026-09-23 audit this block held
   *  only the even orders, and 7A/20A/21A/28A held A4 alone.
   */
  asph: {
    "6A": {
      K: 0,
      A4: -2.8490089e-5,
      A6: 8.6025369e-8,
      A8: 4.6954316e-11,
      A10: -2.8828379e-13,
      A12: 0,
      A14: 0,
      A5: 3.4001978e-6,
      A7: -1.5881372e-8,
      A9: 2.5563829e-11,
    },
    "7A": {
      K: 0,
      A4: -7.0282771e-5,
      A6: -3.5251621e-8,
      A8: 6.3478737e-9,
      A10: -2.5970681e-11,
      A12: 0,
      A14: 0,
      A5: 5.3460017e-6,
      A7: -6.1941991e-8,
      A9: 4.1329015e-11,
    },
    "15A": {
      K: 0,
      A4: -2.602637e-5,
      A6: -2.0288251e-6,
      A8: 8.9124018e-9,
      A10: 3.8219433e-11,
      A12: 0,
      A14: 0,
      A5: 8.9327675e-6,
      A7: 1.4984851e-7,
      A9: -1.6175571e-9,
    },
    "16A": {
      K: 0,
      A4: -5.251972e-6,
      A6: -2.8991687e-6,
      A8: 1.1490979e-8,
      A10: 1.0930036e-10,
      A12: 0,
      A14: 0,
      A5: 1.1905465e-5,
      A7: 2.520633e-7,
      A9: -3.0037271e-9,
    },
    "20A": {
      K: 0,
      A4: -5.1646523e-5,
      A6: 9.0512974e-6,
      A8: 3.9970349e-7,
      A10: 9.5538736e-10,
      A12: 0,
      A14: 0,
      A5: -1.3212713e-5,
      A7: -2.6426652e-6,
      A9: -3.0895564e-8,
    },
    "21A": {
      K: 0,
      A4: 3.0888509e-5,
      A6: 7.4686715e-6,
      A8: 2.7982876e-7,
      A10: 5.7836273e-10,
      A12: 0,
      A14: 0,
      A5: -1.1362506e-5,
      A7: -2.0164295e-6,
      A9: -1.9958501e-8,
    },
    "28A": {
      K: 0,
      A4: 2.2349857e-5,
      A6: -8.5821407e-7,
      A8: 3.8678891e-9,
      A10: -3.5162202e-14,
      A12: 0,
      A14: 0,
      A5: 5.5598856e-6,
      A7: 1.4544149e-8,
      A9: -1.9921474e-10,
    },
    "29A": {
      K: 0,
      A4: 4.5879069e-5,
      A6: 2.7031166e-7,
      A8: 4.4104943e-10,
      A10: -1.1877867e-11,
      A12: 0,
      A14: 0,
      A5: -1.7722904e-6,
      A7: -3.9980318e-8,
      A9: 2.3673571e-10,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom lens format: each value is an array of [d_inf, d_close] pairs, one per
   *  zoom position. Values from Table 32 (Example 11).
   *
   *  Close focus: the patent publishes no close-focus spacings for Example 11. Focusing moves
   *  G4 alone (¶0077), so only DD[21] and DD[24] would change. With no published travel, every
   *  close value equals its infinity value and focus travel is not modelled. No travel is invented.
   */
  var: {
    "5": [
      [0.8, 0.8],
      [16.301, 16.301],
      [36.16, 36.16],
    ], // DD[5]: zoom only
    "13": [
      [20.01, 20.01],
      [6.315, 6.315],
      [0.948, 0.948],
    ], // DD[13]: zoom only
    "21A": [
      [2.4, 2.4],
      [3.974, 3.974],
      [2.502, 2.502],
    ], // DD[21]: G3–G4; rises then falls with zoom; focus travel not published
    "24": [
      [4.01, 4.01],
      [15.227, 15.227],
      [30.211, 30.211],
    ], // DD[24]: G4–G5; focus travel not published
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["21A", "D21"],
    ["24", "D24"],
  ],

  /* ── Zoom lens configuration ── */
  zoomPositions: [16.497, 36.533, 77.751], // design EFL at each position (wide / mid / tele)
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations (visual brackets) ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "15A", toSurface: "21A" },
    { text: "G4 (−)", fromSurface: "22", toSurface: "24" },
    { text: "G5 (+)", fromSurface: "25", toSurface: "29A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3 (focus)", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35, // Fujifilm-published minimum focus distance (not in the patent)
  focusDescription:
    "Inner focus: the G4 cemented doublet alone moves toward the image for closer subjects (patent ¶0077). The patent publishes no close-focus spacings, so focus travel is not modelled.",

  /* ── Aperture configuration ── */
  nominalFno: 4.12, // Table 32 FNo 4.12 / 4.12 / 4.13 (tele 4.13 treated as rounding)
  zoomApertureModel: "from-nominal-fno", // iris radii inferred per station; no diameters published
  fstopSeries: [4.12, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22, // Fujifilm-published minimum aperture f/22

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
