import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 24-120mm f/4 S                      ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2022/259649 A1 (PCT/JP2022/008965), Example 5          ║
 * ║               (¶0244–¶0259, Table 5, Fig. 9, Figs. 10A–10C).            ║
 * ║  Inventors: Takuro Ono, Kosuke Machida, Ayumu Makida,                   ║
 * ║             Keisuke Tsubonoya — Nikon Corporation.                      ║
 * ║  Priority: JP 2021-096938 (9 June 2021). Published 15 December 2022.    ║
 * ║                                                                          ║
 * ║  7 zoom groups (G1 + / G2 − / G3 + / G4 + / G5 + / G6 + / G7 −),         ║
 * ║  16 elements / 13 groups, 4 aspherical surfaces (*4, *13, *27, *28).    ║
 * ║  Example 5 is the embodiment matching the production lens: f = 24.70–   ║
 * ║  116.50, F/4.00–4.12, ω = 43.38°–9.97° (Figs. 10A/10C; the exact trace  ║
 * ║  lands those chief rays at Y = 21.71 mm), 16/13 construction.           ║
 * ║  Native scale (no scaling). No cover glass or filter in Table 5.        ║
 * ║                                                                          ║
 * ║  Conic: formula (a) ¶0187 prints √(1 − K·y²/r²), but the tabulated      ║
 * ║    K = 0.0000 is stored as standard K = 0. Verified numerically: with   ║
 * ║    K = 0 the f/4 axial marginal ray lands within 0.05 mm of the image   ║
 * ║    plane at both stations; reading it as κ (K = −1) gives 0.88 mm       ║
 * ║    (wide) and 23 mm (tele) of spherical aberration.                     ║
 * ║                                                                          ║
 * ║  ZOOM (patent Table 5 gaps, positions calculated from the image plane):  ║
 * ║    wide → tele every group moves toward the object: G1 +55.00,          ║
 * ║    G2 +9.82 (curved path in Fig. 9), G3 + stop +31.59, G4 +39.20,       ║
 * ║    G5 +27.44, G6 +24.26, G7 +31.59 mm (G3 and G7 travel equally).       ║
 * ║    Only W and T are tabulated. The middle state of Fig. 10B            ║
 * ║    (f = 69.98) has no gap table, so the viewer interpolates the gaps    ║
 * ║    linearly between W and T. That path is not the production cam: at   ║
 * ║    the slider midpoint the gaps give a paraxial f ≈ 48.1 mm (the zoom   ║
 * ║    readout interpolates 24.7→116.5 and shows ≈ 70.6) with the image     ║
 * ║    about 6 mm ahead of the stored image plane.                          ║
 * ║                                                                          ║
 * ║  FOCUS: ¶0254 — G5 and G6 both move toward the object. Table 5 gives   ║
 * ║    infinity spacings only. The close pairs are CALCULATED: minimum-     ║
 * ║    norm (Δ5, Δ6) that focuses a 0.35 m object-to-image distance (the    ║
 * ║    production MFD), with a 0.5 mm floor on d25 (binding at tele). The   ║
 * ║    G5/G6 split is a modelling choice, not published travel. Result:     ║
 * ║    350.2 / 350.0 mm object-to-image at W / T; β = −0.10 / −0.38         ║
 * ║    (production maximum 0.39×).                                          ║
 * ║                                                                          ║
 * ║  APERTURE: stop rides 0.88 mm ahead of L7 (moves with G3).              ║
 * ║    FNO 4.00 / 4.12 is published but no iris diameter. The stop radius   ║
 * ║    is derived from the design f-number at each zoom station             ║
 * ║    (zoom.apertureModel "from-nominal-fno"; wide ≈ 6.3 mm,               ║
 * ║    tele ≈ 11.9 mm).                                                     ║
 * ║                                                                          ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                 ║
 * ║    No effective diameters are published. Rims of L1–L3, L10/L11, L14    ║
 * ║    and L15/L16 are measured from Fig. 9 (300 dpi, 0.0674 mm/px from     ║
 * ║    the 117.40 mm S1–S30 vertex span; flanges excluded). The other rims  ║
 * ║    are earlier ray-trace estimates that lie within about 15 % of the     ║
 * ║    figure. Exact trace at ω = 43.38° / 9.97°: no surface clips the f/4  ║
 * ║    axial beam or blocks the full-field chief ray at either station.     ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-z-24-120f4",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-120mm f/4 S",
  subtitle: "WO 2022/259649 A1 EXAMPLE 5 — NIKON / ONO, MACHIDA, MAKIDA, TSUBONOYA",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 13 GROUPS",
      "f = 24.70 – 116.50 mm",
      "F/4.00 – F/4.12",
      "2ω = 86.8° – 19.9°",
      "4 ASPHERICAL SURFACES",
      "3 ED + 1 ASPHERICAL ED",
    ],
    elementCount: 16,
    groupCount: 13,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [24, 120], design: [24.7, 116.5] },
    fNumber: { marketing: 4, design: 4.0 },
  },

  source: {
    patentNumber: "WO 2022/259649 A1",
    patentYear: 2022,
    authors: ["Takuro Ono", "Kosuke Machida", "Ayumu Makida", "Keisuke Tsubonoya"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      focalLengthMm: -174.9,
      glass: "J-LASFH13 (HIKARI catalog equivalent; patent 1.90366/31.27)",
      apd: false,
      role: "Front negative meniscus of G1 cemented doublet; high-index dense lanthanum flint for compact diameter",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.34,
      focalLengthMm: 75.4,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Rear positive meniscus of G1 doublet; moderate-dispersion phosphate crown for lateral color correction",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.77503,
      vd: 47.31,
      focalLengthMm: -27.8,
      glass: "M-TAF401 catalog equivalent (patent 775473; production supplier unspecified)",
      apd: false,
      role: "Front negative meniscus of G2 with an aspherical, nearly flat front (*4; ≈ +0.95 mm departure at the 20.1 mm rim) and a strongly concave rear",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.18,
      focalLengthMm: -54.2,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Strong negative diverger in G2 variator; high-index lanthanum flint keeps curvatures moderate",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: 35.9,
      glass: "NBFD25 (HOYA, 855252)",
      apd: false,
      role: "High-dispersion positive in G2 (P1 element); forms air-spaced achromatic pair with L4 for Petzval/chromatic correction",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: -69.5,
      glass: "J-FKH1 (HIKARI catalog equivalent; patent 1.49782/82.57)",
      apd: "inferred",
      apdNote:
        "Inferred from the fluor-crown glass class and Nikon’s 3 ED + 1 aspherical ED count; the patent tags L6 only as lens N of condition (24), νdN > 60, an Abbe-number condition",
      role: "Low-dispersion negative meniscus at the image side of G2; lens N of condition (24) for chromatic correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.59306,
      vd: 66.97,
      focalLengthMm: 77.8,
      glass: "J-PSKH4 catalog equivalent (patent nd=1.59306, νd=66.97; production supplier unspecified)",
      apd: false,
      role: "Aspherical positive meniscus immediately behind stop in G3; corrects spherical aberration in the axial beam",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.34,
      focalLengthMm: 249.1,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Weak positive meniscus in G3; distributes relay convergence and shares glass with L2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 52.4,
      glass: "J-FKH1 (HIKARI catalog equivalent; patent 1.49782/82.57)",
      apd: "inferred",
      apdNote:
        "Inferred from the fluor-crown glass class and Nikon’s ED count; the patent tags L9 only as a P2 lens of condition (25), νdP2 > 60",
      role: "Low-dispersion biconvex positive at the front of G4; axial colour control in the converging relay",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.90043,
      vd: 37.38,
      focalLengthMm: -31.1,
      glass: "TAFD37A (HOYA)",
      apd: false,
      role: "Dense lanthanum flint in G4 cemented doublet; provides dispersive counterbalance to L11",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 36.3,
      glass: "J-FKH1 (HIKARI catalog equivalent; patent 1.49782/82.57)",
      apd: "inferred",
      apdNote:
        "Inferred from the fluor-crown glass class and Nikon’s ED count; the patent tags L11 only as a P2 lens of condition (25), νdP2 > 60",
      role: "Low-dispersion positive meniscus cemented behind L10 (Δνd ≈ 45); the doublet is weakly negative overall",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.64,
      focalLengthMm: -79.0,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "High-dispersion negative meniscus in G5 focus group; chromatic corrector within the focusing assembly",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 52.0,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Positive power in G5 focus group; lanthanum crown provides the net group convergence (f_G5 = +135.76 mm)",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.55332,
      vd: 71.67,
      focalLengthMm: 79.6,
      glass: "M-FCD500 (HOYA)",
      apd: "inferred",
      apdNote:
        "Inferred: Nikon lists one aspherical ED element and M-FCD500 is a moldable fluorophosphate crown; the patent tags L14 only as a P2 lens of condition (25)",
      role: "Aspherical low-dispersion positive meniscus forming G6, the second focusing group; aspherical rear surface (*27)",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.77503,
      vd: 47.31,
      focalLengthMm: -25.7,
      glass: "M-TAF401 catalog equivalent (same patent melt as L3; production supplier unspecified)",
      apd: false,
      role: "Aspherical negative in G7 rear doublet; fine-tunes converging wavefront before image plane",
      cemented: "D7",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 71.9,
      glass: "PBH21 (OHARA; historical 923209)",
      apd: false,
      role: "Ultra-high-dispersion dense flint in G7 doublet (P1 element); final lateral color correction (Δνd ≈ 26 with L15)",
      cemented: "D7",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── G1: Front positive cemented doublet (L1 + L2) ── */
    { label: "1", R: 61.204, d: 1.8, sd: 27.7, medium: 1 },
    { label: "2", R: 43.5, d: 9.29, sd: 25.6, medium: 2 },
    { label: "3", R: 599.325, sd: 25.6 },

    /* ── G2: Variator — four air-spaced singlets (L3, L4, L5, L6) ── */
    {
      label: "4A",
      R: 8892.243,
      d: 1.4,
      sd: 20.1,
      medium: 3,
      asphere: {
        K: 0,
        A4: 6.78e-6,
        A6: -9.11e-9,
        A8: 2.14e-11,
        A10: -6.61e-15,
        A12: -7.48e-17,
        A14: 1.46e-19,
      },
    },
    { label: "5", R: 21.486, d: 7.77, sd: 16.2 },
    { label: "6", R: -67.187, d: 1.5, sd: 14.0, medium: 4 },
    { label: "7", R: 139.906, d: 0.23, sd: 14.2 },
    { label: "8", R: 60.17, d: 4.73, sd: 13.8, medium: 5 },
    { label: "9", R: -60.17, d: 1.96, sd: 12.5 },
    { label: "10", R: -27.165, d: 1.1, sd: 13.5, medium: 6 },
    { label: "11", R: -128.171, sd: 14.7 },

    /* ── Aperture stop (moves with G3) ── */
    { label: "STO", R: "flat", d: 0.88 },

    /* ── G3: First relay — two air-spaced singlets (L7, L8) ── */
    {
      label: "13A",
      R: 34.508,
      d: 3.66,
      sd: 13.5,
      medium: 7,
      asphere: {
        K: 0,
        A4: -7.33e-6,
        A6: 1.12e-9,
        A8: -3.78e-12,
        A10: -5.24e-15,
      },
    },
    { label: "14", R: 131.359, d: 0.2, sd: 14.0 },
    { label: "15", R: 51.576, d: 2.03, sd: 14.0, medium: 8 },
    { label: "16", R: 76.388, sd: 14.2 },

    /* ── G4: Second relay — L9 singlet + L10/L11 cemented doublet ── */
    { label: "17", R: 33.398, d: 5.6, sd: 15.5, medium: 9 },
    { label: "18", R: -112.939, d: 1.45, sd: 15.5 },
    { label: "19", R: 51.317, d: 1.1, sd: 12.7, medium: 10 },
    { label: "20", R: 17.933, d: 6.55, sd: 12.0, medium: 11 },
    { label: "21", R: 1939.354, sd: 12.0 },

    /* ── G5: First focus group — two air-spaced singlets (L12, L13) ── */
    { label: "22", R: -28.1, d: 1.1, sd: 13.2, medium: 12 },
    { label: "23", R: -52.294, d: 0.2, sd: 13.4 },
    { label: "24", R: 156.708, d: 4.09, sd: 13.4, medium: 13 },
    { label: "25", R: -53.421, sd: 13.6 },

    /* ── G6: Second focus group — single element (L14) ── */
    { label: "26", R: -214.076, d: 3.8, sd: 15.0, medium: 14 },
    {
      label: "27A",
      R: -36.775,
      sd: 15.0,
      asphere: {
        K: 0,
        A4: 1.69e-5,
        A6: -8.63e-9,
        A8: 5.71e-12,
        A10: -9.88e-15,
      },
    },

    /* ── G7: Rear negative cemented doublet (L15 + L16) ── */
    {
      label: "28A",
      R: -43.094,
      d: 1.3,
      sd: 16.9,
      medium: 15,
      asphere: {
        K: 0,
        A4: 2.41e-6,
        A6: 1.5e-9,
        A8: -1.37e-10,
        A10: 6.99e-13,
        A12: -1.28e-15,
        A14: -1.88e-19,
      },
    },
    { label: "29", R: 37.433, d: 3.6, sd: 16.6, medium: 16 },
    { label: "30", R: 81.956, sd: 17.0 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom lens fields ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 24.7, nominalFNumber: 4.0, label: "Wide" },
      { focalLengthMm: 116.5, nominalFNumber: 4.12, label: "Tele" },
    ],
    apertureModel: "from-nominal-fno",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.35,
    description:
      "Internal focus by two groups: G5 (L12 + L13) and G6 (L14) both move toward the object when focusing closer (patent ¶0254). The patent tabulates infinity spacings only; the close-focus placements are calculated (minimum-norm G5/G6 travel that focuses 0.35 m at the wide and tele stations), not published travel.",
  },

  /* (moved from var) ── Variable air spacings (zoom + focus) ──
   *  Two zoom stations, exactly as tabulated in Table 5 (wide 24.70 / tele
   *  116.50). The patent draws a middle state (f = 69.98, Fig. 10B) but does
   *  not tabulate its gaps; the viewer interpolates linearly between the two
   *  published stations, which is not the production cam (see header).
   *  Infinity values (first of each pair) are patent values. Close values
   *  (second of each pair) are CALCULATED, not published: minimum-norm
   *  (Δ5, Δ6) placement of G5/G6 that focuses a 0.35 m object-to-image
   *  distance, with a 0.5 mm floor on d25 (binding at tele).
   *  d3:  G1 → G2 (zoom only)
   *  d11: G2 → STO/G3 (zoom only)
   *  d16: G3 → G4 (zoom only)
   *  d21: G4 → G5 (zoom + focus — shrinks by Δ5)
   *  d25: G5 → G6 (zoom + focus — changes by Δ5 − Δ6)
   *  d27: G6 → G7 (zoom + focus — grows by Δ6)
   *  Bf:  G7 → image (zoom only; no cover glass is listed in Table 5)
   */
  gaps: {
    "3": {
      label: "D3",
      values: [
        [1.525, 1.525],
        [46.708, 46.708],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [24.145, 24.145],
        [2.37, 2.37],
      ],
    },
    "16": {
      label: "D16",
      values: [
        [9.007, 9.007],
        [1.4, 1.4],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [6.277, 5.288],
        [18.04, 10.574],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [2.0, 0.759],
        [5.177, 0.5],
      ],
    },
    "27A": {
      label: "D27",
      values: [
        [9.107, 11.337],
        [1.773, 13.916],
      ],
    },
    "30": {
      label: "BF",
      values: [
        [13.555, 13.555],
        [45.147, 45.147],
      ],
    },
  },

  aperture: { fStops: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+136.58)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−24.06)", fromSurface: "4A", toSurface: "11" },
    { text: "G3 (+59.44)", fromSurface: "13A", toSurface: "16" },
    { text: "G4 (+67.49)", fromSurface: "17", toSurface: "21" },
    { text: "G5 (+135.76)", fromSurface: "22", toSurface: "25" },
    { text: "G6 (+79.64)", fromSurface: "26", toSurface: "27A" },
    { text: "G7 (−38.93)", fromSurface: "28A", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D7", fromSurface: "28A", toSurface: "30" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.45, yScFill: 0.28 },
} satisfies LensDataV2Input;

export default LENS_DATA;
