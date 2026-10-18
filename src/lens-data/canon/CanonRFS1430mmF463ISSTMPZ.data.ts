import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — CANON RF-S 14-30mm f/4-6.3 IS STM PZ              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2025-50505 A, Numerical Example 5 (Canon Inc.;      ║
 * ║    inventor 仲田 丈晴), Figs. 9–10.                                  ║
 * ║  Four-group negative-lead wide zoom (− + − +) for APS-C.             ║
 * ║  10 elements / 9 groups, 4 aspherical surfaces on 2 molded-polymer   ║
 * ║    elements (G12, G32); 1 cemented doublet (G23 + G24).              ║
 * ║  Production correlation with the RF-S14-30mm F4-6.3 IS STM PZ is     ║
 * ║    plausible (10/9, 2 PMo aspheres, 1 UD, internal zoom), not        ║
 * ║    manufacturer-confirmed.                                           ║
 * ║                                                                      ║
 * ║  Internal zoom (constant length 80.14 mm per patent): L1 and L4      ║
 * ║    fixed; L2 (with the stop) and L3 move objectward W→T.             ║
 * ║  Zoom variable gaps: d7 (zoom only); d16, d20A (zoom + focus).       ║
 * ║  No reversal at the three published states (finite sampling).        ║
 * ║                                                                      ║
 * ║  Focus: inner focus, L3 (G31 + G32) moves imageward ([0036]).        ║
 * ║  NOTE ON FOCUS (CONSTRAINED RECONSTRUCTION): no close-focus spacings ║
 * ║    are published. The L3 shift at each zoom station is solved so a   ║
 * ║    0.15 m object-to-image conjugate (Canon MFD, measured from the    ║
 * ║    image plane) images onto that station's own paraxial infinity     ║
 * ║    image plane; d16 + d20A is conserved. Shift W/M/T = 1.428 /       ║
 * ║    2.166 / 4.126 mm; paraxial β = −0.177 / −0.253 / −0.385 (Canon    ║
 * ║    0.38× at 30 mm). Intermediate focus uses linear gap interpolation ║
 * ║    (model assumption).                                               ║
 * ║                                                                      ║
 * ║  NOTE ON TRANSFORMATIONS: patent surfaces 1 (flat air/air, d = 0)    ║
 * ║    and 11 (flat air/air after the stop, d = 1.00) are omitted; the   ║
 * ║    stop spacing becomes 0.00 + 1.00 = 1.00 mm. Labels keep patent    ║
 * ║    surface numbers (patent surface 10 = STO). No scaling (s = 1).    ║
 * ║    Aspheres: (1+k) conic form, K = 0, A4–A12 as printed, A14 = 0.    ║
 * ║    No cover glass or filter is listed; last d = BF 14.20 mm.         ║
 * ║  NOTE ON STOP: stop diameter is not published. The iris schedule     ║
 * ║    is calibrated to the                                              ║
 * ║    published F 4.08 / 5.18 / 6.43. The stop radius is derived from   ║
 * ║    the design f-number at each zoom station; this is not a published ║
 * ║    iris.                                                             ║
 * ║  NOTE ON SEMI-DIAMETERS: modeled, not published. Taken from the      ║
 * ║    to-scale Fig. 9 section (scale verified against vertex positions  ║
 * ║    and surface profiles). S3 and S18 are reduced because the drawn   ║
 * ║    rims exceed the cross-gap policy; S4A, S19A and S20A are reduced  ║
 * ║    to stay consistent with those neighbours. Geometry is checked at  ║
 * ║    17 zoom × 3 focus samples and meridional real-ray containment at  ║
 * ║    9 × 3: the full axial beam and the full-field chief ray pass; the ║
 * ║    full 0.6-field pupil is clipped only at S14 (doublet front, air). ║
 * ║                                                                      ║
 * ║  Catalog names are supplier-neutral spectral proxies; polymer       ║
 * ║    grades and production glass suppliers remain unresolved.         ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-s14-30f4-63-is-stm-pz",
  maker: "Canon",
  name: "CANON RF-S 14-30mm f/4-6.3 IS STM PZ",
  subtitle: "JP 2025-50505 A EXAMPLE 5 — CANON / TAKEHARU NAKADA",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "aps-c",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "f ≈ 14.41–29.35 mm",
      "F/4.08–6.43",
      "2ω ≈ 80.7°–51.4° (PARAXIAL)",
      "4 ASPHERICAL SURFACES (2 MOLDED-POLYMER ELEMENTS)",
      "1 UD-CLASS ELEMENT",
    ],
    elementCount: 10,
    groupCount: 9,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: [14, 30], design: [14.41, 29.35] },
    fNumber: { marketing: 4, design: 4.08 },
  },

  source: {
    patentNumber: "JP 2025-50505 A",
    patentYear: 2025,
    authors: ["Takeharu Nakada"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -19.5,
      glass: "S-LAH66 / TAF1 class (772496 lanthanum flint; vendor unresolved)",
      apd: false,
      role: "Front negative meniscus convex to the object (f ≈ −19.50 mm); strongest element of the fixed negative lead group L1.",
      diagramLabel: "G11",
    },
    {
      id: 2,
      name: "G12",
      label: "Element 2",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.53504,
      vd: 55.7,
      focalLengthMm: -59.96,
      glass:
        "Unmatched (molded optical polymer, COP-like coordinates nd 1.53504 / νd 55.7; supplier and grade unconfirmed)",
      apd: false,
      role: "Molded-polymer biconcave element, aspherical on both faces (f ≈ −59.96 mm); weak negative member of L1.",
      diagramLabel: "G12",
    },
    {
      id: 3,
      name: "G13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 60.04,
      glass: "S-TIH53WN class (supplier-neutral spectral proxy)",
      apd: false,
      role: "Dense-flint biconvex positive element closing L1 (f ≈ +60.04 mm).",
      diagramLabel: "G13",
    },
    {
      id: 4,
      name: "G21",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 83.51,
      glass: "S-FSL5 class (supplier-neutral spectral proxy)",
      apd: false,
      role: "Fluor-crown positive meniscus convex to the image, ahead of the stop (f ≈ +83.51 mm); the patent names G21 (or all of L2) as the stabilizing component.",
      diagramLabel: "G21",
    },
    {
      id: 5,
      name: "G22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.5,
      focalLengthMm: 36.01,
      glass: "S-LAH65VS class (supplier-neutral spectral proxy)",
      apd: false,
      role: "Lanthanum-flint positive meniscus convex to the object, just behind the stop (f ≈ +36.01 mm).",
      diagramLabel: "G22",
    },
    {
      id: 6,
      name: "G23",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: -21.9,
      glass: "S-LAH98 / TAFD45 class (954323 dense lanthanum flint; vendor unresolved)",
      apd: false,
      role: "High-index negative meniscus; front element of cemented doublet D1 (f ≈ −21.90 mm standalone).",
      diagramLabel: "G23",
      cemented: "D1",
    },
    {
      id: 7,
      name: "G24",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.7,
      focalLengthMm: 13.39,
      glass: "S-FPL51 / FCD1 class (497816 fluorophosphate ED crown; inferred UD assignment; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "Glass-class inference only (FCD1 / S-FPL51 family); the patent publishes no partial-dispersion data.",
      role: "Low-dispersion (UD-class) biconvex positive; rear element of D1 (f ≈ +13.39 mm standalone; doublet net ≈ +39.06 mm).",
      diagramLabel: "G24",
      cemented: "D1",
    },
    {
      id: 8,
      name: "G31",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.5,
      focalLengthMm: -20.42,
      glass: "S-TIM27 class (supplier-neutral spectral proxy)",
      apd: false,
      role: "Biconcave flint negative element (f ≈ −20.42 mm); front element of the focusing group L3.",
      diagramLabel: "G31",
    },
    {
      id: 9,
      name: "G32",
      label: "Element 9",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.53504,
      vd: 55.7,
      focalLengthMm: 85.04,
      glass:
        "Unmatched (molded optical polymer, COP-like coordinates nd 1.53504 / νd 55.7; supplier and grade unconfirmed)",
      apd: false,
      role: "Molded-polymer positive meniscus convex to the image, aspherical on both faces (f ≈ +85.04 mm); rear element of the focusing group L3.",
      diagramLabel: "G32",
    },
    {
      id: 10,
      name: "G41",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 51.05,
      glass: "TAFD37A class (supplier-neutral spectral proxy)",
      apd: false,
      role: "Fixed rear positive meniscus convex to the image (f ≈ +51.05 mm); sole element of L4.",
      diagramLabel: "G41",
    },
  ],

  /* ── Surface prescription ── labels keep the patent surface numbers; patent surfaces 1 and 11 omitted */
  /* (moved from asph) ── Aspherical coefficients ── patent (1+k) form; K = 0; A4–A12 as printed; A14 not published */
  surfaces: [
    { label: "2", R: 49.683, d: 1.2, sd: 12.85, medium: 1 }, // G11 front
    { label: "3", R: 11.439, d: 6.55, sd: 9.2 }, // G11 rear (SD below Fig. 9 for the S3/S4A gap policy)
    {
      label: "4A",
      R: -52.694,
      d: 2.38,
      sd: 9.6,
      medium: 2,
      asphere: { K: 0, A4: -5.04723e-5, A6: 9.76372e-7, A8: -1.59689e-8, A10: 1.32446e-10, A12: -5.6813e-13, A14: 0 },
    }, // G12 front (asph; SD below the Fig. 9 reading, matched to S5A)
    {
      label: "5A",
      R: 83.284,
      d: 0.58,
      sd: 9.6,
      asphere: { K: 0, A4: -7.17848e-5, A6: 7.38593e-7, A8: -1.30318e-8, A10: 9.24639e-11, A12: -3.59028e-13, A14: 0 },
    }, // G12 rear (asph)
    { label: "6", R: 77.119, d: 2.86, sd: 9.6, medium: 3 }, // G13 front
    { label: "7", R: -146.627, sd: 9.6 }, // G13 rear; d7 variable (zoom)
    { label: "8", R: -788.613, d: 2.27, sd: 5.5, medium: 4 }, // G21 front
    { label: "9", R: -38.75, d: 3.2, sd: 5.5 }, // G21 rear
    { label: "STO", R: "flat", d: 1.0 }, // patent surface 10 (stop); d = 0.00 + 1.00 (surface 11 omitted)
    { label: "12", R: 16.034, d: 2.34, sd: 5.15, medium: 5 }, // G22 front
    { label: "13", R: 33.602, d: 4.3, sd: 5.05 }, // G22 rear
    { label: "14", R: 12.731, d: 1.6, sd: 4.45, medium: 6 }, // G23 front (D1)
    { label: "15", R: 7.424, d: 4.05, sd: 4.45, medium: 7 }, // G23→G24 cemented junction (D1)
    { label: "16", R: -52.566, sd: 4.45 }, // G24 rear; d16 variable (zoom + focus)
    { label: "17", R: -31.291, d: 1.0, sd: 5.8, medium: 8 }, // G31 front
    { label: "18", R: 22.704, d: 1.52, sd: 5.5 }, // G31 rear (SD below Fig. 9 for the S18/S19A gap policy)
    {
      label: "19A",
      R: -31.961,
      d: 1.95,
      sd: 5.6,
      medium: 9,
      asphere: { K: 0, A4: -2.04732e-4, A6: 3.95714e-7, A8: 4.8841e-8, A10: 2.8813e-9, A12: -5.69956e-11, A14: 0 },
    }, // G32 front (asph; SD below Fig. 9, consistent with S18)
    {
      label: "20A",
      R: -19.173,
      sd: 6.2,
      asphere: { K: 0, A4: -1.03004e-4, A6: -4.09262e-7, A8: 4.95272e-8, A10: 5.33678e-10, A12: -9.62541e-12, A14: 0 },
    }, // G32 rear (asph; SD below Fig. 9); d20 variable (zoom + focus)
    { label: "21", R: -105.252, d: 3.95, sd: 13.6, medium: 10 }, // G41 front
    { label: "22", R: -32.563, d: 14.2, sd: 13.6 }, // G41 rear; d = BF 14.20 (no plates listed)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom ── published infinity stations (patent focal lengths) */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 14.41, nominalFNumber: 4.08, label: "Wide" },
      { focalLengthMm: 20.03, nominalFNumber: 5.18 },
      { focalLengthMm: 29.35, nominalFNumber: 6.43, label: "Tele" },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.15,
    description:
      "Inner focus: the two-element group L3 (G31 + G32) moves toward the image for close focus while L1, L2, L4 and the image plane stay fixed (patent [0036]). Close-focus spacings are a constrained reconstruction, not patent data: the L3 shift at each zoom station is solved for Canon's 0.15 m object-to-image minimum distance (paraxial magnification ≈ −0.18 / −0.25 / −0.38 at W / M / T); intermediate focus positions use linear gap interpolation.",
  },

  /* (moved from var) ── Variable air spacings ── [d_infinity, d_close] per zoom station (W, M, T).
   *    Infinity values are published; close values are the constrained focus reconstruction (L3 only). */
  gaps: {
    "7": {
      label: "d7",
      values: [
        [16.9, 16.9],
        [9.35, 9.35],
        [1.3, 1.3],
      ],
    },
    "16": {
      label: "d16",
      values: [
        [2.57, 3.998],
        [3.06, 5.226],
        [5.63, 9.756],
      ],
    },
    "20A": {
      label: "d20",
      values: [
        [5.74, 4.312],
        [12.79, 10.624],
        [18.28, 14.154],
      ],
    },
  },

  aperture: { fStops: [4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1", fromSurface: "2", toSurface: "7" },
    { text: "L2", fromSurface: "8", toSurface: "16" },
    { text: "L3 (FOCUS)", fromSurface: "17", toSurface: "20A" },
    { text: "L4", fromSurface: "21", toSurface: "22" },
  ],
  doublets: [{ text: "D1", fromSurface: "14", toSurface: "16" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
