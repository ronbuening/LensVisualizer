import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON SP 70-200mm f/2.8 Di VC USD (A009)                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 8,867,144 B2, Example 1 / Embodiment 1 (Hisayuki Yamanaka).       ║
 * ║ Unscaled d-line prescription: 23 elements / 17 air-separated groups.         ║
 * ║ The 41-plane source prescription is all-spherical; source surface 23 is STO. ║
 * ║ Zoom groups: LG2, LG3, and LG4 move imageward; LG1 and LG5 are fixed.        ║
 * ║ Focus status: PUBLISHED. LG3 alone moves objectward at close focus.          ║
 * ║ Zoom-only gaps: d7 and d22. Zoom+focus gaps: d10 and d17.                    ║
 * ║ LG2/LG3 separation d10 narrows, then widens across the zoom positions.       ║
 * ║                                                                              ║
 * ║ The stop radius is derived from the design f-number and held at every zoom   ║
 * ║ station; it is not patent-published. The prior mean paraxial radius for      ║
 * ║ source FNo.=2.90 at the three infinity states gave modeled F/# 2.90142 /     ║
 * ║ 2.89654 / 2.90205.                                                           ║
 * ║                                                                              ║
 * ║ Semi-diameters are MODELING VALUES because Example 1 publishes no SDs.       ║
 * ║ Their profile was initialized from paraxial marginal/chief-ray envelopes     ║
 * ║ and Tamron's A009 optical-construction section, then reduced only where      ║
 * ║ required by current edge-thickness/cross-gap geometry. They are not          ║
 * ║ presented as patent or factory clear-aperture dimensions.                    ║
 * ║ Every rim clears the on-axis f/2.90 ray at all three zoom positions.         ║
 * ║ Surface 15 (L9 rear, 17.1) and surface 27 (L15 rear, 14.9) sit at the        ║
 * ║ height that ray reaches at 194.5 mm (17.02 and 14.85 mm), rounded up to      ║
 * ║ 0.1 mm. Both elements keep stepped rims: front faces 14 and 26 carry 20.0    ║
 * ║ and 18.6 mm, and the air gaps behind the rear faces close at 17.70 mm        ║
 * ║ (15/16) and 14.90 mm (27/28). Figure 1 draws D3 and L15 square-cut, at       ║
 * ║ about 18.6 and 17.2 mm.                                                      ║
 * ║ gapSagFrac = 1.00 admits two pairs that Figure 1 draws meeting at the rim:   ║
 * ║   27/28 (L15/L16): 99.98 % of the 1.8091 mm gap, 0.0004 mm rim clearance.    ║
 * ║   15/16 (L9/L10):  93.3 % of the 3.1602 mm gap, 0.213 mm rim clearance.      ║
 * ║ Tamron sources:                                                              ║
 * ║ https://www.tamron.com/global/consumer/lenses/a009/spec.html                 ║
 * ║ https://www.tamron.com/product/pc_file/file/a009_lens-construction_en.svg    ║
 * ║                                                                              ║
 * ║ Glass labels are HOYA catalog-coordinate equivalents selected because all    ║
 * ║ 14 patent nd/νd pairs follow that family closely. The patent does not name   ║
 * ║ the glass vendor; these labels do not assert production melt identity.       ║
 * ║ nC/nF/ng are catalog-derived from the matching HOYA 2026 data rows.          ║
 * ║ They are modeling values for the stated HOYA equivalents, not patent-        ║
 * ║ published line data or claims about the production melts.                    ║
 * ║                                                                              ║
 * ║ NOTE ON PARTIAL DISPERSION:                                                  ║
 * ║ The patent prints nd and νd only and defines no partial-dispersion           ║
 * ║ deviation of its own. `dPgF` is PgF minus the engine's normal line           ║
 * ║ (0.6438 − 0.001682·νd), with PgF = (ng − nF)/(nF − nC) taken from each       ║
 * ║ element's stored HOYA line indices; the trace reads those indices, so        ║
 * ║ `dPgF` is the matching annotation. It is not HOYA's catalog ΔPgF, which      ║
 * ║ fits the line 0.64833 − 0.00180·νd and was stored here before. L10, L13      ║
 * ║ and L20 already sat within 0.0003 and keep their four-decimal values.        ║
 * ║                                                                              ║
 * ║ No scaling, omitted cover/filter plate, dummy plane, or folded path.         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "tamron-sp-a009-70-200mm-f28-vc-usd",
  maker: "Tamron",
  name: "TAMRON SP 70-200mm f/2.8 Di VC USD",
  subtitle: "US 8,867,144 B2 Example 1 — A009 production correlation; unscaled patent prescription",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "23 ELEMENTS / 17 GROUPS",
      "70-200mm f/2.8 (MARKETING)",
      "71.800-194.500mm F/2.90 (PATENT DESIGN)",
      "PUBLISHED 1.3m CLOSE-FOCUS STATES",
      "TRANSVERSE VC SUBSET 5B",
    ],
    elementCount: 23,
    groupCount: 17,
    focalLengthMm: { marketing: [70, 200], design: [71.799858, 194.498327] },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 8,867,144 B2",
    patentYear: 2014,
    authors: ["Hisayuki Yamanaka"],
    assignees: ["Tamron Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -231.302011,
      glass: "NBFD15-W (Hoya)",
      role: "LG1 front negative member of the first cemented pair.",
      cemented: "D1",
      dPgF: 0.000930,
      nC: 1.79902,
      nF: 1.82324,
      ng: 1.83750,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 205.604442,
      glass: "FCD100 (Hoya)",
      apd: "inferred",
      apdNote:
        "Official construction identifies this correlated patent position as the single XLD element. " +
        "The patent prints no partial dispersion; PgF = 0.5326 from the stored HOYA-equivalent nC/nF/ng, " +
        "runtime dPgF +0.04877 (HOYA's catalog ΔPgF for the equivalent, +0.0564, is against HOYA's own line).",
      role: "LG1 low-dispersion positive partner; correlates to the product XLD count.",
      cemented: "D1",
      dPgF: 0.048767,
      nC: 1.43559,
      nF: 1.44019,
      ng: 1.44264,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 380.997734,
      glass: "FCD1 (Hoya)",
      apd: "inferred",
      apdNote:
        "Official construction identifies this correlated patent position as one of four LD elements. " +
        "The patent prints no partial dispersion; PgF = 0.5386 from the stored HOYA-equivalent nC/nF/ng, " +
        "runtime dPgF +0.03206 (HOYA's catalog ΔPgF for the equivalent, +0.0374, is against HOYA's own line).",
      role: "LG1 low-dispersion positive element.",
      dPgF: 0.032056,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 174.034148,
      glass: "FCD1 (Hoya)",
      apd: "inferred",
      apdNote:
        "Official construction identifies this correlated patent position as one of four LD elements. " +
        "The patent prints no partial dispersion; PgF = 0.5386 from the stored HOYA-equivalent nC/nF/ng, " +
        "runtime dPgF +0.03206 (HOYA's catalog ΔPgF for the equivalent, +0.0374, is against HOYA's own line).",
      role: "LG1 low-dispersion positive element.",
      dPgF: 0.032056,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: 124.402681,
      glass: "TAFD25 (Hoya)",
      role: "LG2 positive member of the negative zoom doublet.",
      cemented: "D2",
      dPgF: 0.003458,
      nC: 1.89526,
      nF: 1.92412,
      ng: 1.94128,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: -49.825149,
      glass: "LAC14 (Hoya)",
      role: "LG2 negative member; the cemented group has net negative power.",
      cemented: "D2",
      dPgF: -0.007523,
      nC: 1.69297,
      nF: 1.70553,
      ng: 1.71235,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.39,
      focalLengthMm: -133.058375,
      glass: "PCD4 (Hoya)",
      role: "LG3 front negative focus member.",
      dPgF: 0.002309,
      nC: 1.61503,
      nF: 1.62478,
      ng: 1.63004,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -91.103951,
      glass: "FC5 (Hoya)",
      role: "LG3 negative member of the central cemented pair.",
      cemented: "D3",
      dPgF: 0.005027,
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49594,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 60.87657,
      glass: "FD60 (Hoya)",
      role: "LG3 positive partner in the central cemented pair.",
      cemented: "D3",
      dPgF: 0.014579,
      nC: 1.79611,
      nF: 1.82774,
      ng: 1.84721,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -61.718456,
      glass: "TAFD5G (Hoya)",
      role: "LG3 rear negative focus member.",
      dPgF: -0.0067,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 97.092797,
      glass: "TAF1 (Hoya)",
      role: "LG4 front positive element.",
      dPgF: -0.009568,
      nC: 1.76780,
      nF: 1.78336,
      ng: 1.79193,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 53.859844,
      glass: "FC5 (Hoya)",
      role: "LG4 positive member of the rear cemented pair.",
      cemented: "D4",
      dPgF: 0.005027,
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49594,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -56.993683,
      glass: "TAFD5G (Hoya)",
      role: "LG4 negative partner; the full group remains positive.",
      cemented: "D4",
      dPgF: -0.0067,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 47.424167,
      glass: "TAC8 (Hoya)",
      role: "LG5/5A front positive element immediately behind the stop.",
      dPgF: -0.006868,
      nC: 1.72510,
      nF: 1.73844,
      ng: 1.74571,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 123.858442,
      glass: "FCD1 (Hoya)",
      apd: "inferred",
      apdNote:
        "Official construction identifies this correlated patent position as one of four LD elements. " +
        "The patent prints no partial dispersion; PgF = 0.5386 from the stored HOYA-equivalent nC/nF/ng, " +
        "runtime dPgF +0.03206 (HOYA's catalog ΔPgF for the equivalent, +0.0374, is against HOYA's own line).",
      role: "LG5/5A low-dispersion positive element.",
      dPgF: 0.032056,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -25.791243,
      glass: "NBFD15-W (Hoya)",
      role: "LG5/5A negative member of the rear cemented pair.",
      cemented: "D5",
      dPgF: 0.000930,
      nC: 1.79902,
      nF: 1.82324,
      ng: 1.83750,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 41.780761,
      glass: "FCD1 (Hoya)",
      apd: "inferred",
      apdNote:
        "Official construction identifies this correlated patent position as one of four LD elements. " +
        "The patent prints no partial dispersion; PgF = 0.5386 from the stored HOYA-equivalent nC/nF/ng, " +
        "runtime dPgF +0.03206 (HOYA's catalog ΔPgF for the equivalent, +0.0374, is against HOYA's own line).",
      role: "LG5/5A low-dispersion positive partner.",
      cemented: "D5",
      dPgF: 0.032056,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 53.828264,
      glass: "FD60 (Hoya)",
      role: "LG5/5B positive member of the transverse VC doublet.",
      cemented: "D6",
      dPgF: 0.014579,
      nC: 1.79611,
      nF: 1.82774,
      ng: 1.84721,
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.04,
      focalLengthMm: -43.586293,
      glass: "BAC4 (Hoya)",
      role: "LG5/5B negative partner in the transverse VC subset.",
      cemented: "D6",
      dPgF: -0.000772,
      nC: 1.56575,
      nF: 1.57590,
      ng: 1.58147,
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: -44.461186,
      glass: "E-F5 (Hoya)",
      role: "LG5/5B rear negative element; 5B has net negative power.",
      dPgF: 0.0029,
      nC: 1.59874,
      nF: 1.61462,
      ng: 1.62387,
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: 42.996061,
      glass: "LAC14 (Hoya)",
      role: "LG5/5C front positive element.",
      dPgF: -0.007523,
      nC: 1.69297,
      nF: 1.70553,
      ng: 1.71235,
    },
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -45.473562,
      glass: "TAFD25 (Hoya)",
      role: "LG5/5C high-index negative element.",
      dPgF: 0.003458,
      nC: 1.89526,
      nF: 1.92412,
      ng: 1.94128,
    },
    {
      id: 23,
      name: "L23",
      label: "Element 23",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 63.698882,
      glass: "FDS90 (Hoya)",
      role: "LG5/5C final positive element satisfying the patent νd ≤ 30 condition.",
      dPgF: 0.015299,
      nC: 1.83649,
      nF: 1.87209,
      ng: 1.89413,
    },
  ],

  surfaces: [
    { label: "1", R: 133.7102, d: 2.0, sd: 38.4, medium: 1 },
    { label: "2", R: 77.3487, d: 8.55, sd: 36.8, medium: 2 },
    { label: "3", R: 537.2688, d: 0.2, sd: 36.8 },
    { label: "4", R: 116.5358, d: 4.6988, sd: 37.5, medium: 3 },
    { label: "5", R: 298.9745, d: 0.2, sd: 37.5 },
    { label: "6", R: 84.2299, d: 8.2046, sd: 35.8, medium: 4 },
    { label: "7", R: 3112.4218, sd: 35.8 },
    { label: "8", R: -2017.5362, d: 3.5529, sd: 23.9, medium: 5 },
    { label: "9", R: -106.5734, d: 1.5, sd: 24.0, medium: 6 },
    { label: "10", R: 51.7905, sd: 20.8 },
    { label: "11", R: 226.3153, d: 1.3, sd: 19.4, medium: 7 },
    { label: "12", R: 60.1827, d: 3.2285, sd: 18.9 },
    { label: "13", R: 407.1084, d: 1.3, sd: 20.1, medium: 8 },
    { label: "14", R: 40.0019, d: 4.8, sd: 20.0, medium: 9 },
    { label: "15", R: 205.8653, d: 3.1602, sd: 17.1 }, // f/2.90 axial ray: 17.02 mm at 194.5 mm
    { label: "16", R: -66.4978, d: 1.3, sd: 19.2, medium: 10 },
    { label: "17", R: 230.8342, sd: 19.3 },
    { label: "18", R: 378.2306, d: 3.8, sd: 20.4, medium: 11 },
    { label: "19", R: -93.1471, d: 0.2, sd: 20.2 },
    { label: "20", R: 49.2255, d: 9.6077, sd: 20.4, medium: 12 },
    { label: "21", R: -52.6701, d: 1.3, sd: 21.3, medium: 13 },
    { label: "22", R: 497.7462, sd: 20.8 },
    { label: "STO", R: "flat", d: 3.8462 },
    { label: "24", R: 48.2164, d: 7.9959, sd: 20.2, medium: 14 },
    { label: "25", R: -113.7175, d: 0.2, sd: 20.3 },
    { label: "26", R: 45.1106, d: 4.5932, sd: 18.6, medium: 15 },
    { label: "27", R: 163.1315, d: 1.8091, sd: 14.9 }, // f/2.90 axial ray: 14.85 mm at 194.5 mm
    { label: "28", R: -99.0801, d: 1.5, sd: 16.4, medium: 16 },
    { label: "29", R: 26.4891, d: 8.349, sd: 16.1, medium: 17 },
    { label: "30", R: -86.0385, d: 1.7067, sd: 14.9 },
    { label: "31", R: -133.2957, d: 3.7, sd: 14.9, medium: 18 },
    { label: "32", R: -33.1117, d: 1.0, sd: 14.3, medium: 19 },
    { label: "33", R: 99.7696, d: 1.8312, sd: 11.8 },
    { label: "34", R: -78.7563, d: 1.0, sd: 14.9, medium: 20 },
    { label: "35", R: 40.8845, d: 3.0, sd: 15.7 },
    { label: "36", R: 118.2041, d: 7.5038, sd: 15.7, medium: 21 },
    { label: "37", R: -39.085, d: 2.5092, sd: 15.5 },
    { label: "38", R: -29.1014, d: 1.3, sd: 17.5, medium: 22 },
    { label: "39", R: -101.842, d: 0.2, sd: 17.8 },
    { label: "40", R: 160.349, d: 3.9189, sd: 17.6, medium: 23 },
    { label: "41", R: -80.3525, d: 57.005, sd: 17.6 },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 71.8, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 118.0, published: true, publishedFocus: [1] },
      { focalLengthMm: 194.5, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.3,
    description:
      "PUBLISHED Example-1 focus states: LG3 alone translates objectward from infinity to the 1.3 m state; " +
      "d10 shortens exactly as d17 lengthens at each zoom position. No internal focus reconstruction is used.",
  },

  gaps: {
    "7": {
      label: "D7",
      values: [
        [2.2014, 2.2014],
        [25.5869, 25.5869],
        [39.7471, 39.7471],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [20.5031, 18.2357],
        [13.5, 8.2041],
        [18.9574, 6.9574],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [21.2237, 23.4911],
        [13.7979, 19.0938],
        [1.5461, 13.5461],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [17.8225, 17.8225],
        [8.8658, 8.8658],
        [1.5, 1.5],
      ],
    },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "LG1", fromSurface: "1", toSurface: "7" },
    { text: "LG2", fromSurface: "8", toSurface: "10" },
    { text: "LG3", fromSurface: "11", toSurface: "17" },
    { text: "LG4", fromSurface: "18", toSurface: "22" },
    { text: "LG5", fromSurface: "24", toSurface: "41" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "20", toSurface: "22" },
    { text: "D5", fromSurface: "28", toSurface: "30" },
    { text: "D6", fromSurface: "31", toSurface: "33" },
  ],

  layout: { scFill: 0.55, yScFill: 0.38 },

  checks: {
    gapSagFrac: 1, // rims meet in Figure 1: 27/28 (L15/L16) uses 99.98 % of its gap, 15/16 (L9/L10) 93.3 %; see header
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
