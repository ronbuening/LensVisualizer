import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — LEICA APO-SUMMICRON 43mm f/2 ASPH.                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2024/0241349 A1, Example 1 (Nishioka / Kurioka). ║
 * ║  Panasonic IP Management Co., Ltd.  Priority: JP 2022-142614.     ║
 * ║  Production lens: Leica APO-Summicron 43mm f/2 ASPH. (Q3 43).    ║
 * ║  11 elements / 5 power groups (8 air-separated) / 7 asph surfs.  ║
 * ║  Focus: floating inner focus — G2 (L6–L7) and G4 (L10) move.     ║
 * ║                                                                    ║
 * ║  NOTE ON CEMENT LAYERS:                                            ║
 * ║    Patent models 0.01 mm cement layers (nd = 1.56732, νd 42.8)   ║
 * ║    at each cemented junction (D1, D2, D3). Since junction         ║
 * ║    surfaces share the same R, the cement thickness is folded into ║
 * ║    the preceding element's center thickness (L3 6.60 → 6.61,      ║
 * ║    L6 1.40 → 1.41, L8 3.10 → 3.11).                               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS (2026-09-21 audit):                        ║
 * ║    Patent Table 1A lists no effective diameters. sd values are    ║
 * ║    measured from FIG. 1A (300 dpi raster, 13.92 px/mm from the    ║
 * ║    S1→S23 vertex span); the drawing is to design scale — the stop ║
 * ║    is drawn at 8.41 mm (f/2.06 real-ray stop radius 8.40) and the ║
 * ║    plate P at ±20.2 mm (≈ patent Y). Cemented junctions carry the ║
 * ║    smaller member's rim. 16A is capped at 14.5 mm (figure ≈15.3)  ║
 * ║    because its asphere slope turns over near h ≈ 14.6 mm. L11's   ║
 * ║    front (18A) uses the optical extent (15.8 mm) where the drawn  ║
 * ║    curve ends; the flat annulus out to the 18.3 mm rim (19A) is   ║
 * ║    the mechanical edge shared with the rear surface. Every sd     ║
 * ║    passes the f/2.06 axial beam and the Y = 20 mm chief ray at    ║
 * ║    infinity and close focus (real-ray check).                     ║
 * ║                                                                    ║
 * ║  NOTE ON IMAGE HEIGHT:                                             ║
 * ║    Patent Y = 20.0 mm at ω = 27.50° (f·tanω = 21.7 mm), i.e. the  ║
 * ║    design carries ≈ −7.9 % barrel distortion (derived) and the    ║
 * ║    full-frame corner is reached after in-camera correction. Chief ║
 * ║    rays aimed at 21.6 mm raw height (ω ≈ 30°) are outside the     ║
 * ║    design field and vignette at L11.                              ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent parallel plate P (Table 1A surfaces 24–25, 1.40 mm,      ║
 * ║    nd 1.51680, νd 64.2) and the 1.00 mm air gap to the image       ║
 * ║    (BF = 0) are modeled in `rearPlates` (traced, not drawn).       ║
 * ║    Surface 19A keeps the patent's 3.60 mm gap to the plate         ║
 * ║    (air-equivalent rear space 5.523 mm; geometric 6.00 mm).        ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS STATES:                                             ║
 * ║    Table 1C publishes infinity, middle (d0 = 1331.625 mm, 1.4 m  ║
 * ║    object-to-image) and close (d0 = 531.6251 mm, 0.600 m         ║
 * ║    object-to-image). All three rows are kept via focusPositions;  ║
 * ║    closeFocusM = 0.6 is the patent state, not the 0.27 m macro    ║
 * ║    mode (a mechanical extension the patent does not describe).    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "leica-apo-summicron-43f2",
  maker: "Leica",
  name: "LEICA APO-SUMMICRON 43mm f/2 ASPH. (Leica Q3 43)",
  subtitle: "US 2024/0241349 A1 EXAMPLE 1 — PANASONIC / NISHIOKA",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 41.7 mm", "F/2.06", "2ω ≈ 55.0°", "7 ASPHERICAL SURFACES (4 ELEMENTS)"],
    elementCount: 11,
    groupCount: 8,
    focalLengthMm: { marketing: 43, design: 41.71 },
    fNumber: { marketing: 2.0, design: 2.06 },
  },

  source: {
    patentNumber: "US 2024/0241349 A1",
    patentYear: 2024,
    authors: ["Takehiro Nishioka", "Yoshiaki Kurioka"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -35.6,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Front negative; pre-diverges beam to reduce higher-order aberrations on downstream high-index positives; Petzval counter-bending",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 29.9,
      glass: "TAFD40 (HOYA)",
      apd: false,
      role: "Ultra-high-index positive; strong refraction at minimal curvature, primary chromatic dispersion source in G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 28.7,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote: "Phosphate crown region; νd = 68.6 implies positive ΔPgF for secondary spectrum correction",
      role: "Positive crown in D1 doublet; primary positive power in G1; APD glass for secondary spectrum correction",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      focalLengthMm: -24.4,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Negative flint in D1 doublet; chromatic correction partner for L3",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5866,
      vd: 59.0,
      focalLengthMm: 66.0,
      glass: "K-SKLD200 (Sumita)",
      apd: false,
      role: "OIS element — shifts ⊥ to optical axis for image stabilization; weak positive with aspherics for SA/coma correction near stop",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.68948,
      vd: 31.0,
      focalLengthMm: -22.3,
      glass: "S-TIM28 / L-TIM28 (OHARA)",
      apd: false,
      role: "Negative flint in D2 doublet; aspherical front surface for coma and oblique SA control at stop",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: 19.0,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Ultra-high-index positive in D2 doublet; primary power in G2; focus group component",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: 37.8,
      glass: "S-LAH95 (OHARA)",
      apd: false,
      role: "High-index positive meniscus (convex to image) in D3 doublet; Petzval correction",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -31.0,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Negative flint in D3 doublet; G3 diverging power for field curvature correction",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55332,
      vd: 71.7,
      focalLengthMm: 40.0,
      glass: "M-FCD500 (HOYA)",
      apd: "inferred",
      apdNote: "Fluorophosphate; νd = 71.7 — primary APO contributor; patent requires νd4G > 62",
      role: "Fluorophosphate APD positive; cornerstone of APO correction; focus group (G4 moves during IF)",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5866,
      vd: 59.0,
      focalLengthMm: -31.2,
      glass: "K-SKLD200 (Sumita)",
      apd: false,
      role: "Rear field-flattener; G5 negative for Petzval balance; aggressive aspherization for astigmatism and distortion",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── G1 (+) — L1 through L5 ──
    { label: "1", R: -48.2488, d: 1.5, sd: 14.9, medium: 1 }, // L1 front; FIG. 1A rim 14.9
    { label: "2", R: 44.7343, d: 0.7288, sd: 14.9 }, // L1 rear → air
    { label: "3", R: 37.972, d: 5.0, sd: 14.0, medium: 2 }, // L2 front; FIG. 1A rim 14.0
    { label: "4", R: -131.5072, d: 0.9, sd: 14.0 }, // L2 rear → air
    { label: "5", R: 25.1796, d: 6.61, sd: 11.3, medium: 3 }, // L3 front (D1); d includes 0.01 cement; rim 11.3
    { label: "6", R: -47.5179, d: 1.1, sd: 10.4, medium: 4 }, // D1 junction → L4; L4 rim 10.4 (L3 rim 11.3)
    { label: "7", R: 30.7715, d: 2.9914, sd: 10.4 }, // L4 rear → air
    {
      label: "8A",
      R: 54.8186,
      d: 2.8,
      sd: 9.8,
      medium: 5,
      // Patent surface 9 — L5 front
      asphere: {
        K: 0,
        A4: -1.30306e-5,
        A6: -5.62107e-8,
        A8: -3.60682e-10,
        A10: 8.61029e-14,
        A12: -7.87986e-14,
        A14: 5.22901e-17,
      },
    }, // L5 front (OIS element); rim 9.8
    {
      label: "9A",
      R: -129.0571,
      d: 1.3423,
      sd: 9.8,
      // Patent surface 10 — L5 rear
      asphere: {
        K: 0,
        A4: -9.82247e-6,
        A6: -9.90962e-9,
        A8: -2.51292e-9,
        A10: 3.89661e-11,
        A12: -4.70452e-13,
        A14: 1.70621e-15,
      },
    }, // L5 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat" }, // d11 variable; radius derived from the design f-number (figure draws 8.4)

    // ── G2 (+) — L6–L7 cemented (focus group) ──
    {
      label: "10A",
      R: -34.7967,
      d: 1.41,
      sd: 9.2,
      medium: 6,
      asphere: {
        // Patent surface 12 — L6 front (prolate ellipsoid base)
        K: -4.20325e-1,
        A4: -2.20963e-5,
        A6: -1.90668e-8,
        A8: -1.28958e-9,
        A10: 1.02111e-11,
        A12: 0,
        A14: 0,
      },
    }, // L6 front; d includes 0.01 cement; rim 9.2
    { label: "11", R: 27.9597, d: 4.0, sd: 9.5, medium: 7 }, // D2 junction → L7; L6 rim 9.2 / L7 rim 9.8
    { label: "12", R: -47.7042, sd: 9.8 }, // L7 rear → air; d15 variable

    // ── G3 (−) — L8–L9 cemented ──
    { label: "13", R: -69.0757, d: 3.11, sd: 11.2, medium: 8 }, // L8 front; d includes 0.01 cement; rim 11.2
    { label: "14", R: -23.3606, d: 1.0, sd: 12.2, medium: 9 }, // D3 junction → L9; doublet edge 12.2
    { label: "15", R: 306.9478, sd: 12.2 }, // L9 rear → air; d19 variable

    // ── G4 (+) — L10 singlet (focus group) ──
    {
      label: "16A",
      R: 202.6421,
      d: 7.1497,
      sd: 14.5,
      medium: 10,
      // Patent surface 20 — L10 front
      asphere: {
        K: 0,
        A4: -1.18748e-5,
        A6: 6.25689e-8,
        A8: -1.36411e-10,
        A10: 7.15711e-14,
        A12: -3.29562e-17,
        A14: -1.87905e-18,
      },
    }, // L10 front; figure ≈15.3, capped below asphere turnover
    {
      label: "17A",
      R: -24.5159,
      sd: 15.3,
      // Patent surface 21 — L10 rear
      asphere: {
        K: 0,
        A4: 3.3582e-6,
        A6: 1.04068e-7,
        A8: -6.34208e-10,
        A10: 4.09992e-12,
        A12: -1.28044e-14,
        A14: 1.19979e-17,
      },
    }, // L10 rear → air; d21 variable; rim 15.3

    // ── G5 (−) — L11 singlet ──
    {
      label: "18A",
      R: -17.1668,
      d: 2.0,
      sd: 15.8,
      medium: 11,
      asphere: {
        // Patent surface 22 — L11 front (prolate ellipsoid base)
        K: -2.75865e-1,
        A4: 7.31746e-5,
        A6: -2.58094e-7,
        A8: 7.84314e-10,
        A10: 2.62197e-13,
        A12: -3.52305e-15,
        A14: 0,
      },
    }, // L11 front; optical extent 15.8 (flange to 18.3)
    {
      label: "19A",
      R: -295.0,
      d: 3.6,
      sd: 18.3,
      // Patent surface 23 — L11 rear
      asphere: {
        K: 0,
        A4: 3.22163e-5,
        A6: -2.53939e-7,
        A8: 7.10332e-10,
        A10: -8.86821e-13,
        A12: 0,
        A14: 0,
      },
    }, // L11 rear → plate P; patent d23 3.60
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.6, // patent close-object state: d0 531.6251 + TL 68.3749 = 600.0 mm object-to-image
    /* ── Variable air spacings (floating inner focus) ──
     *  G2 (L6–L7) and G4 (L10) advance toward object during close focusing.
     *  G1, G3, G5 remain stationary. Constant overall length.
     *  d(STO) + d(12) = 10.898 mm (constant); d(15) + d(17A) = 9.834 mm (constant).
     *  Patent Table 1C rows: infinity / middle (1.4 m object-to-image) / close (0.6 m).
     *  Middle-row coordinate = 0.6 m ÷ 1.4 m.
     */
    keyframes: [0, 0.428571428571, 1],
    description: "Floating inner focus: G2 (L6–L7) and G4 (L10) translate toward object. Constant overall length.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    STO: { label: "D11", values: [[8.5, 7.6379, 6.4983]] },
    "12": { label: "D15", values: [[2.3984, 3.2604, 4.4001]] },
    "15": { label: "D19", values: [[4.5634, 3.3774, 1.8105]] },
    "17A": { label: "D21", values: [[5.2709, 6.4569, 8.0238]] },
  },

  /* ── Aperture configuration ── */
  aperture: {
    nominalFNumber: 2.06, // patent Table 1C F number 2.06002 at infinity
    fStops: [2.06, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },

  /* ── Parallel plate P (patent Table 1A surfaces 24–25): traced, not drawn ── */
  rearPlates: [
    {
      label: "P",
      thicknessMm: 1.4,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "US 2024/0241349 A1, Example 1 Table 1A surfaces 24–25",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "9A" },
    { text: "G2 (+)", fromSurface: "10A", toSurface: "12" },
    { text: "G3 (−)", fromSurface: "13", toSurface: "15" },
    { text: "G4 (+)", fromSurface: "16A", toSurface: "17A" },
    { text: "G5 (−)", fromSurface: "18A", toSurface: "19A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10A", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
