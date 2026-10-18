import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CANON RF 24-105mm f/4 L IS USM
 *
 * Data source: US 2019/0278068 A1, Numerical Example 2 [0097], Fig. 3 (Hatada / Canon).
 * Six-unit zoom: +/−/+/−/−/+; all six units move toward the object from wide to tele
 * (monotonic at the three tabulated stations). 18 elements / 14 groups, 6 aspherical
 * surfaces on 3 elements. Stored at patent scale (f = 24.72–101.84 mm).
 *
 * Surface labels follow the patent numbering (the stop is patent surface 14).
 * Zoom variable gaps: d5, d13, d27, d29, d31, d33 — three tabulated stations only.
 *   d27 (L3→L4) and d29 (L4→L5) are non-monotonic: d27 1.80 → 3.37 → 1.40,
 *   d29 11.59 → 10.02 → 11.99. The prose in [0068] (d27 increases, d29 decreases)
 *   does not match the table; the table is used.
 * Back focus: d33 equals the tabulated BF; the patent lists no filter or cover glass.
 * Focus: L4 (single element) moves toward the image [0069]. Close-focus spacings are
 *   not published; the stored close values are calculated for 0.45 m object-to-image.
 * Aperture: FNO 4.12 at all stations; the stop moves with L3. The stop radius is derived
 *   from the design f-number at each station. The
 *   Numerical Example 2 surface table [0097] prints one stop ED of 19.35 mm, agreeing
 *   with the derived tele iris.
 *
 * NOTE ON SEMI-DIAMETERS:
 *   Every sd is the patent's tabulated effective diameter ÷ 2 (2026-09-23 audit). A real
 *   ray trace reproduces them: post-stop values equal the tele f/4.12 axial marginal
 *   height, and the L1/L2/L6 values cover the wide full-field chief ray.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-24-105-f4-l",
  maker: "Canon",
  name: "CANON RF 24-105mm f/4 L IS USM",
  subtitle: "US 2019/0278068 A1 EXAMPLE 2 — HATADA / CANON",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "18 ELEMENTS / 14 GROUPS",
      "f = 24.72 – 101.84 mm",
      "F/4.12 (design)",
      "2ω ≈ 82.4° – 24.0°",
      "6 ASPHERICAL SURFACES (3 ELEMENTS)",
      "1 UD ELEMENT",
    ],
    elementCount: 18,
    groupCount: 14,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [24, 105], design: [24.72, 101.84] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2019/0278068 A1",
    patentYear: 2019,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      focalLengthMm: -178.8,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      role: "G1n — high-dispersion negative front element; drives compactness via low Abbe number",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 128.1,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "G2p — cemented to L1; chromatic corrector within front group",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 108.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "G3p — primary converging power of L1 unit",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: -20.7,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Front element of variator; strong negative power in ultra-dense flint",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -37.8,
      glass: "L-BAL42 (OHARA PGM)",
      apd: false,
      role: "Glass-molded aspheric #1 in variator; corrects SA and coma",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8081,
      vd: 22.8,
      focalLengthMm: 25.7,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      role: "Symmetric biconvex in variator; chromatic counterbalance to L4/L5",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -53.6,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Rear variator element; field-flattening meniscus",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Convex",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: 49.4,
      glass: "TAFD35 (HOYA catalog equivalent)",
      apd: false,
      role: "First element after stop; starts beam convergence in relay group",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: -37.3,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Negative component of achromatic doublet in relay",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 21.7,
      glass: "S-FPM2 (OHARA catalog equivalent)",
      apd: false,
      role: "Positive component of achromatic doublet; phosphate crown for axial color correction",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.74951,
      vd: 35.3,
      focalLengthMm: -19.3,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      role: "Negative component of IS doublet",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 30.5,
      glass: "TAFD40 (HOYA)",
      apd: false,
      role: "IS subunit — ultra-high-index positive element for Petzval correction and IS shift control",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: -32.7,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "Negative component of Gfp achromatizing doublet",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Plano-Convex",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 38.5,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown (UD glass); anomalous partial dispersion for secondary spectrum correction",
      role: "Gfp — UD element for secondary-spectrum correction adjacent to IS group",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 22.5,
      glass: "L-BAL42 (OHARA PGM)",
      apd: false,
      role: "Glass-molded aspheric #2; strongest positive element in relay group",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -40.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Focus group — single lightweight inner-focus element (Nano USM driven)",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.7645,
      vd: 49.1,
      focalLengthMm: -68.4,
      glass: "L-LAH91 (OHARA catalog-equivalent; patent supplier unspecified)",
      apd: false,
      role: "Glass-molded aspheric #3; aggressive aspherization (~1.6 mm departure) for field curvature/distortion",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 72.4,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Grp — high-index rear positive element; corrects lateral color vs G1n across zoom range",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients (patent K is the conic constant; K = 0 on every surface) ── */
  surfaces: [
    // Labels follow the patent's surface numbers (stop = patent surface 14). Refracting-surface sd = patent
    // effective diameter ÷ 2.
    // ── L1: Unit L1 (positive, f = +88.25 mm) ──
    // L1 + L2 cemented doublet (D1)
    { label: "1", R: 266.275, d: 1.8, sd: 31.5, medium: 1 },
    { label: "2", R: 93.368, d: 6.52, sd: 30.645, medium: 2 }, // junction → L2
    { label: "3", R: "flat", d: 0.15, sd: 30.435 }, // L2 rear → air
    // L3 standalone
    { label: "4", R: 49.826, d: 6.97, sd: 27.97, medium: 3 },
    { label: "5", R: 126.155, sd: 27.365 }, // variable gap d5 (L1→L2)

    // ── L2: Unit L2 (negative, f = −18.38 mm) ──
    // L4 standalone
    { label: "6", R: 65.832, d: 1.25, sd: 15.685, medium: 4 },
    { label: "7", R: 15.019, d: 8.19, sd: 11.715 },
    // L5 standalone (both surfaces aspherical)
    {
      label: "8A",
      R: -33.476,
      d: 1.1,
      sd: 11.44,
      medium: 5,
      asphere: { K: 0, A4: 5.17863e-6, A6: -6.74704e-8, A8: 5.22888e-10, A10: -4.25942e-12, A12: 1.45835e-14 },
    },
    { label: "9A", R: 65.137, d: 0.15, sd: 10.98, asphere: { K: 0, A4: -7.7741e-6, A6: -4.92259e-8 } },
    // L6 standalone (symmetric biconvex)
    { label: "10", R: 40.325, d: 5.03, sd: 10.855, medium: 6 },
    { label: "11", R: -40.325, d: 0.97, sd: 10.415 },
    // L7 standalone
    { label: "12", R: -25.491, d: 1.0, sd: 10.275, medium: 7 },
    { label: "13", R: -63.435, sd: 10.045 }, // variable gap d13 (L2→L3)

    // ── L3: Unit L3 (positive, f = +24.16 mm) ──
    // Aperture stop (patent surface 14); Numerical Example 2 patent surface table [0097] prints ED 19.35 mm
    { label: "STO", R: "flat", d: 0.3 },
    // L8 standalone (plano-convex)
    { label: "15", R: 44.965, d: 2.3, sd: 9.97, medium: 8 },
    { label: "16", R: "flat", d: 0.15, sd: 9.965 },
    // L9 + L10 cemented doublet (D2)
    { label: "17", R: 21.533, d: 1.0, sd: 9.95, medium: 9 },
    { label: "18", R: 13.108, d: 6.76, sd: 9.33, medium: 10 }, // junction → L10
    { label: "19", R: -795.231, d: 1.37, sd: 9.05 }, // L10 rear → air
    // L11 + L12 cemented doublet (D3) — IS subunit
    { label: "20", R: -152.936, d: 0.8, sd: 8.85, medium: 11 },
    { label: "21", R: 16.038, d: 2.88, sd: 8.6, medium: 12 }, // junction → L12
    { label: "22", R: 30.717, d: 3.81, sd: 8.385 }, // L12 rear → air
    // L13 + L14 cemented doublet (D4) — Gfp
    { label: "23", R: 76.401, d: 0.75, sd: 8.395, medium: 13 },
    { label: "24", R: 19.11, d: 3.57, sd: 8.295, medium: 14 }, // junction → L14
    { label: "25", R: "flat", d: 0.15, sd: 8.36 }, // L14 rear → air
    // L15 standalone (both surfaces aspherical)
    {
      label: "26A",
      R: 24.461,
      d: 7.26,
      sd: 9.31,
      medium: 15,
      asphere: { K: 0, A4: -2.73692e-5, A6: 5.32572e-8, A8: -8.4482e-10, A10: 5.56287e-12 },
    },
    {
      label: "27A",
      R: -25.212,
      sd: 9.88,
      asphere: { K: 0, A4: 1.47893e-5, A6: 2.32565e-9, A8: -6.75778e-10, A10: 4.79574e-12 },
    }, // variable gap d27 (L3→L4)

    // ── L4: Unit L4 (negative, f = −40.84 mm) — Focus group ──
    { label: "28", R: 121.315, d: 0.75, sd: 9.995, medium: 16 },
    { label: "29", R: 23.846, sd: 9.95 }, // variable gap d29 (L4→L5)

    // ── L5: Unit L5 (negative, f = −68.35 mm) ──
    {
      label: "30A",
      R: -43.071,
      d: 1.5,
      sd: 12.085,
      medium: 17,
      asphere: { K: 0, A4: -8.05959e-5, A6: 1.99191e-7, A8: -1.06561e-9, A10: -7.47195e-13, A12: 8.67762e-15 },
    },
    {
      label: "31A",
      R: -248.821,
      sd: 13.565,
      asphere: { K: 0, A4: -7.18829e-5, A6: 2.81391e-7, A8: -1.4432e-9, A10: 4.2065e-12, A12: -5.37088e-15 },
    }, // variable gap d31 (L5→L6)

    // ── L6: Unit L6 (positive, f = +72.42 mm) — Grp ──
    { label: "32", R: -68.116, d: 4.5, sd: 17.55, medium: 18 },
    { label: "33", R: -32.318, sd: 18.0 }, // variable gap d33 (= BF; no filter block)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Variable air spacings (zoom format) ──
     *  Patent [0097] tabulates infinity-focus spacings at exactly three zoom
     *  stations (wide / intermediate / tele); all three are stored, nothing is
     *  interpolated or blended. The patent publishes no close-focus spacings.
     *  Focus unit L4 (surfaces 28–29) moves toward the image ([0069]), so d27
     *  grows and d29 shrinks by the same travel.
     *
     *  Close-focus values are CALCULATED, not patent data: the L4 travel was
     *  solved paraxially so that the object-to-image distance equals Canon's
     *  published 0.45 m MFD at each station (image plane held at the infinity
     *  BFD): travel 0.73 / 1.92 / 5.13 mm at W / M / T, giving β ≈ −0.070 /
     *  −0.138 / −0.249 (production maximum magnification 0.24×).
     */
    stations: [
      { focalLengthMm: 24.72, label: "Wide" },
      { focalLengthMm: 50.92 },
      { focalLengthMm: 101.84, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "Inner focus — L4 (single negative meniscus) moves toward the image. The patent publishes infinity spacings only; close-focus travel is calculated for Canon's 0.45 m MFD at every zoom station.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [0.75, 0.75],
        [15.82, 15.82],
        [34.38, 34.38],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [21.53, 21.53],
        [9.07, 9.07],
        [2.38, 2.38],
      ],
    },
    "27A": {
      label: "D27",
      values: [
        [1.8, 2.53],
        [3.37, 5.29],
        [1.4, 6.53],
      ],
    },
    "29": {
      label: "D29",
      values: [
        [11.59, 10.86],
        [10.02, 8.1],
        [11.99, 6.86],
      ],
    },
    "31A": {
      label: "D31",
      values: [
        [0.8, 0.8],
        [13.48, 13.48],
        [17.24, 17.24],
      ],
    },
    "33": {
      label: "D33",
      values: [
        [17.88, 17.88],
        [19.75, 19.75],
        [30.96, 30.96],
      ],
    },
  },

  /* ── Aperture configuration ──
   *  Constant F/4.12 across the zoom with the stop riding in L3; the patent
   *  publishes only one stop effective diameter (19.35 mm), which is the tele
   *  iris. Wide/intermediate iris radii are inferred from the nominal f-number.
   */
  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "27A" },
    { text: "L4 (−)", fromSurface: "28", toSurface: "29" },
    { text: "L5 (−)", fromSurface: "30A", toSurface: "31A" },
    { text: "L6 (+)", fromSurface: "32", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
