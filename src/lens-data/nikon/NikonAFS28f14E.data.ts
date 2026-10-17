import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP2017-227799A Example 1: prescription pp.14–15, Figure1 p.21.
 * Four aspheres use the source's standard (1+K) equation; coefficients retained.
 * L12's 0.05mm resin is a compound-lens layer, not an omitted filter/cover.
 * Fourteen patent elements are represented by fifteen media entries, eleven components.
 * Rims follow the optical figure outline, constrained where the resin edge crosses.
 * BF is explicitly air-equivalent (paragraph62); no cover/filter is added.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-afs-28f14e",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 28mm f/1.4 E ED",
  subtitle: "JP2017-227799A EX1 — Konica Minolta / Nikon",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["14 ELEMENTS / 11 GROUPS", "f = 28.41 mm", "F/1.45", "2ω = 75.42°", "4 ASPHERICAL SURFACES (3 ELEMENTS)"],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 28, design: 28.41 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "JP 2017-227799 A",
    patentYear: 2017,
    authors: ["Yasunari Fukuda", "Akiko Furuta", "Toshinori Take", "Takayuki Sensui"],
    assignees: ["Konica Minolta, Inc.", "Nikon Corporation"],
  },

  /* ── Elements ──
   *  15 entries for 14 patent elements (L12 compound asphere = 2 entries).
   *  Glass identifications: inferential, matched by nd/νd against OHARA catalog.
   */
  elements: [
    // ── Group 1 (Gr1): Front group, fixed during focus ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.2,
      focalLengthMm: -76.54,
      glass: "S-TIM28 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Front negative meniscus, convex toward object; first diverging component.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (glass)",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -68.37,
      glass: "N-LAK8 (inferred coordinate counterpart; Schott)",
      apd: false,
      role: "Glass substrate of the compound negative L12; its rear face bonds to the resin layer.",
      cemented: "L12c",
    },
    {
      id: 3,
      name: "L12r",
      label: "Element 2 (resin)",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.5138,
      vd: 53.0,
      focalLengthMm: -368.9,
      glass: "UV-curing resin (composite)",
      apd: false,
      role: "Source 0.05mm resin layer forms the aspheric exit of compound L12. Resin supplier and formulation are unspecified.",
      cemented: "L12c",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 86.86,
      glass: "S-TIH53 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Positive high-index component in the fixed front group; its source index meets condition6.",
    },
    {
      id: 5,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.0,
      focalLengthMm: -60.83,
      glass: "N-BAK4 (inferred coordinate counterpart; Schott catalog-equivalent; patent supplier unspecified)",
      apd: false,
      role: "Negative member of cemented LS; source isolated focal length −60.83mm.",
      cemented: "LS",
    },
    {
      id: 6,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 112.04,
      glass: "S-LAH58 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Positive member of cemented LS; source isolated focal length112.04mm.",
      cemented: "LS",
    },
    {
      id: 7,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 54.29,
      glass: "S-LAH66 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Terminal positive singlet of fixed Gr1; source isolated focal length54.29mm.",
    },

    // ── Group 2 (Gr2): Rear group, moves as unit for focus ──
    {
      id: 8,
      name: "L21",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 93.17,
      glass: "S-LAL18 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Positive meniscus at the front of moving Gr2.",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 94.38,
      glass: "S-LAL14 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Positive singlet in moving Gr2.",
    },
    {
      id: 10,
      name: "L23",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 56.49,
      glass: "S-FPM2 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Low-dispersion positive member of the pre-stop cemented pair. Commercial ED identity is not specified.",
      cemented: "D1",
    },
    {
      id: 11,
      name: "L24",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      focalLengthMm: -24.97,
      glass: "J-KZFH9 (inferred coordinate counterpart; Hikari)",
      apd: false,
      apdNote:
        "Patent PgF=0.5899; converted from the source ratio using runtime normal line0.6438−0.001682νd. This near-normal value is not an anomalous-glass identity claim.",
      role: "Pre-stop negative member. Source PgF0.5899 is preserved via the runtime normal-line conversion, not an inferred commercial dispersion value.",
      cemented: "D1",
      dPgF: 0.0004286,
    },
    // [Aperture Stop between L24 and L25]
    {
      id: 12,
      name: "L25",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -19.65,
      glass: "806333 — dense flint (inferred coordinate counterpart; patent coordinate; vendor unresolved)",
      apd: false,
      role: "Negative member of the post-stop cemented pair.",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L26",
      label: "Element 12",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.8322,
      vd: 40.1,
      focalLengthMm: 42.37,
      glass: "L-LAH90 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Positive member of the post-stop cemented pair, with aspheric rear surface23.",
      cemented: "D2",
    },
    {
      id: 14,
      name: "L27",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 34.8,
      glass: "S-FPM2 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Positive singlet after the stop; shares source coordinates with L23.",
    },
    {
      id: 15,
      name: "L28",
      label: "Element 14",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 99.11,
      glass: "S-LAL13 (inferred coordinate counterpart; OHARA)",
      apd: false,
      role: "Final positive meniscus, with both surfaces aspheric; source coefficients retained.",
    },
  ],

  /* ── Surface prescription ──
   *  27 surfaces including STO, front to rear.  Patent surface numbering i=1..27.
   *  Sign convention: R > 0 = center of curvature to the RIGHT.
   *
   *  Compound asphere L12: modeled as cemented doublet (glass + resin).
   *    Surface 3 = L12 glass front (elemId: 2)
   *    Surface 4 = glass→resin junction (elemId: 3, nd = resin)
   *    Surface 5A = resin rear → air (elemId: 0, aspherical)
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  4 aspherical surfaces on 3 elements.
   *  Sag: Z(h) = (h²/R)/[1+√(1−(1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + ...
   */
  surfaces: [
    // ── Gr1: Front group (fixed) ──
    { label: "1", R: 70.017, d: 2.5, sd: 30.5, medium: 1 }, // L11 front
    { label: "2", R: 29.64, d: 10.58, sd: 24.2 }, // L11 rear → air (sd<0.9×R to avoid TIR)
    { label: "3", R: 94.105, d: 2.4, sd: 25, medium: 2 }, // L12 glass front
    { label: "4", R: 31.773, d: 0.05, sd: 23, medium: 3 }, // L12 glass→resin junction
    {
      label: "5A",
      R: 27.197,
      d: 9.49,
      sd: 21.8,
      asphere: { K: -1.81201, A4: 5.0791e-6, A6: -6.20262e-9, A8: 1.15776e-11, A10: -2.04179e-14, A12: 1.909e-17 },
    }, // L12 resin rear → air (asph; sd<0.9×R)
    { label: "6", R: 164.736, d: 4.94, sd: 23, medium: 4 }, // L13 front
    { label: "7", R: -131.025, d: 4.85, sd: 23 }, // L13 rear → air
    { label: "8", R: -46.832, d: 2.15, sd: 23, medium: 5 }, // L14 front (LS doublet)
    { label: "9", R: 134.737, d: 4.17, sd: 23, medium: 6 }, // L14→L15 cemented junction
    { label: "10", R: -366.912, d: 3.03, sd: 23 }, // L15 rear → air
    { label: "11", R: 70.316, d: 7.09, sd: 23, medium: 7 }, // L16 front
    { label: "12", R: -99.338, sd: 23 }, // L16 rear → air [VARIABLE: Gr1→Gr2]

    // ── Gr2: Rear group (focusing, moves as unit toward object) ──
    { label: "13", R: 55.349, d: 4.2, sd: 21, medium: 8 }, // L21 front
    { label: "14", R: 289.177, d: 0.15, sd: 21 }, // L21 rear → air
    { label: "15", R: 111.31, d: 4.0, sd: 20, medium: 9 }, // L22 front
    { label: "16", R: -158.345, d: 0.15, sd: 20 }, // L22 rear → air
    { label: "17", R: 322.096, d: 5.79, sd: 18, medium: 10 }, // L23 front (D1 doublet)
    { label: "18", R: -37.124, d: 1.5, sd: 18, medium: 11 }, // L23→L24 cemented junction
    { label: "19", R: 37.221, d: 5.6, sd: 18 }, // L24 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat", d: 5.78 }, // ST — patent surface i=20

    // ── Gr2 continued (post-stop) ──
    { label: "21", R: -24.127, d: 1.3, sd: 16.4, medium: 12 }, // L25 front (D2 doublet)
    { label: "22", R: 47.257, d: 5.35, sd: 16.4, medium: 13 }, // L25→L26 cemented junction
    {
      label: "23A",
      R: -131.725,
      d: 0.3,
      sd: 16.4,
      asphere: {
        K: 0,
        A4: 3.38686e-6,
        A6: -1.03975e-9,
        A8: 5.14761e-11,
        A10: 1.18111e-14,
        A12: -1.1141e-16,
      },
    }, // L26 rear → air (asph)
    { label: "24", R: 64.397, d: 8.98, sd: 18, medium: 14 }, // L27 front
    { label: "25", R: -28.781, d: 0.15, sd: 18 }, // L27 rear → air
    {
      label: "26A",
      R: -280.388,
      d: 3.71,
      sd: 18.8,
      medium: 15,
      asphere: {
        K: 0,
        A4: -1.45264e-5,
        A6: -2.74974e-8,
        A8: 4.08509e-11,
        A10: -1.2205e-13,
        A12: 2.18038e-15,
        A14: -3.26e-18,
      },
    }, // L28 front (asph)
    {
      label: "27A",
      R: -55.502,
      sd: 18.8,
      asphere: {
        K: 1.61294,
        A4: -4.86948e-6,
        A6: -2.36249e-8,
        A8: 7.19463e-11,
        A10: -3.12054e-13,
        A12: 2.11838e-15,
        A14: -2.42e-18,
      },
    }, // L28 rear → image (asph) [VARIABLE: BF]
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.25001,
    description:
      "Patent near station: 25 cm object-to-image. Gr2 and stop move 6.30 mm objectward; Gr1 has a 0.02 mm residual from the published gaps. Intermediate motion is interpolated.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (rear-group unit focus) ──
   *  Gr2 translates as rigid unit toward object for close focus.
   *  D12: Gr1→Gr2 air gap (decreases as Gr2 moves forward)
   *  D27A: Back focal distance (increases as Gr2 moves forward)
   *  Total track change: +0.02 mm (effectively constant length).
   */
  gaps: { "12": { label: "D12", values: [[7.7, 1.42]] }, "27A": { label: "BF", values: [[38.47, 44.77]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1 (+)", fromSurface: "1", toSurface: "12" },
    { text: "Gr2 (+)", fromSurface: "13", toSurface: "27A" },
  ],
  doublets: [
    { text: "L12c", fromSurface: "3", toSurface: "5A" },
    { text: "LS", fromSurface: "8", toSurface: "10" },
    { text: "D1", fromSurface: "17", toSurface: "19" },
    { text: "D2", fromSurface: "21", toSurface: "23A" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.52, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
