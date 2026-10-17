import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5             ║
 * ║  (Sony Cyber-shot RX100 VI / RX100 VII)                              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP WO2019/188070 A1 (Japanese republication of         ║
 * ║    WO 2019/188070 A1), Numerical Example 3, Tables 7-9 (Sony Corp.). ║
 * ║  Positive-lead six-group zoom: GR1(+) GR2(-) GR3(+) GR4(+) GR5(-)    ║
 * ║    GR6(+); all six groups move during zooming.                       ║
 * ║  15 elements / 12 groups, 14 aspherical surfaces on 8 elements.      ║
 * ║  Production correlation (RX100 VI/VII) is a research inference, not  ║
 * ║    a manufacturer-confirmed attribution. Sony states 13 aspherical   ║
 * ║    surfaces; Example 3 has 14, while sibling Example 2 has 13 and a  ║
 * ║    closer zoom ratio / FNo (7.73x, 2.93-4.66). Field angle and the   ║
 * ║    L32 shape in Sony's published construction drawing favour         ║
 * ║    Example 3, the job-specified embodiment, transcribed unchanged.   ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: D5, D12, D19, D22, D26, D28 (zoom only).        ║
 * ║  Published states: wide / middle / tele, infinity focus only.        ║
 * ║  Reversing: GR2 (imageward W->M, objectward M->T); D19 non-monotonic.║
 * ║  Focus: not modeled. The example publishes no close-focus spacings   ║
 * ║    and no focus group; focus pairs repeat the infinity value.        ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: patent normalized to f(wide)=1.00. Uniform scale   ║
 * ║    s = 9.0 (anchored to Sony's 9.0 mm marketed wide focal length)    ║
 * ║    applied to R, d and sd; A_p -> A_p / 9^(p-1); K unchanged. The    ║
 * ║    source zoom ratio is 7.40x, so computed tele EFL is ~66.3 mm,     ║
 * ║    not the marketed 72 mm.                                           ║
 * ║  NOTE ON REAR PLATES: patent S29-S32 are two plane plates (optical   ║
 * ║    filter FL, para. 0106), modeled in `rearPlates` (traced, not      ║
 * ║    drawn), scaled x9: 0.288 mm nd 1.5168 / vd 64.2, 1.251 mm air,    ║
 * ║    0.486 mm nd 1.5567 / vd 58.6, 0.963 mm to the image plane. D28    ║
 * ║    is the patent's physical gap to the first plate (0.554 / 1.503 /  ║
 * ║    1.996 source; 4.986 / 13.527 / 17.964 mm scaled).                 ║
 * ║  NOTE ON APERTURE: patent gives FNo 2.97 / 4.16 / 4.72 but no stop   ║
 * ║    diameter. The stop radius is derived from the design f-number at  ║
 * ║    each zoom station; the prior paraxial solve gave 4.04 / 3.92 /    ║
 * ║    4.16 mm. zoomApertureModel "from-nominal-fno" reproduces the      ║
 * ║    published f-number schedule (iris openings inferred, not          ║
 * ║    published).                                                       ║
 * ║  NOTE ON SEMI-DIAMETERS: not published. Modeled from real-ray        ║
 * ║    envelopes (full-aperture axial marginal; 0.6-field bundle at      ║
 * ║    pupil +/-1.0; full-field chief) over the three zoom states with   ║
 * ║    8% clearance, reduced where needed to keep GR1 edge thickness     ║
 * ║    near 0.30 mm (L13: 0.338 mm at the common clear radius, 0.296 mm  ║
 * ║    at its larger front SD); 0.05 mm steps.                           ║
 * ║  NOTE ON ASPHERES: patent Eq. (para. 0066) prints a y^2 c^2          ║
 * ║    numerator; the standard c*y^2 form is used (dimensionally         ║
 * ║    consistent and required to reproduce the published EFLs).         ║
 * ║  NOTE ON GLASS: patent gives nd/vd only. Each coordinate reproduces  ║
 * ║    a catalog glass to printed precision; HOYA is the only catalog    ║
 * ║    matching all eight (incl. mold glasses M-PCD4, M-FCD1). Labels    ║
 * ║    name that glass plus six-digit class; supplier not confirmed; no  ║
 * ║    spectral line data added.                                         ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ║  No mechanics or parent/donor designs (filter FL: `rearPlates`).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-vario-sonnar-t-9-72-f28-45-sony-rx100m6-m7",
  maker: "Sony",
  name: "SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5 (Sony Cyber-shot RX100 VI / RX100 VII)",
  subtitle: "JP WO2019/188070 A1 EXAMPLE 3 — SONY CORPORATION (CORRELATED WITH RX100 VI / VII)",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-inch-type",
    specs: [
      "15 ELEMENTS / 12 GROUPS",
      "f ≈ 9.0–66.3 mm (DESIGN)",
      "F/2.97–4.72 (DESIGN)",
      "2ω ≈ 84.4°–12.4°",
      "14 ASPHERICAL SURFACES",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [9, 72], design: [9.01, 66.27] },
    fNumber: { marketing: 2.8, design: 2.97 },
  },

  source: {
    patentNumber: "JP WO2019/188070 A1",
    patentYear: 2019,
    authors: ["Koji Toyoda", "Maya Kiyotoshi", "Keita Kaifu", "Kentaro Tawada"],
    assignees: ["Sony Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.946,
      vd: 18.0,
      focalLengthMm: -114.81,
      glass:
        "FDS18 (HOYA) — 946180 class, ultra-high-index dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR1 cemented doublet, object-side element; meniscus convex to object",
      diagramLabel: "L11",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62,
      vd: 63.9,
      focalLengthMm: 70.42,
      glass: "PCD40 (HOYA) — 620639 class, dense phosphate crown; catalog coordinate match, supplier unconfirmed",
      role: "GR1 cemented doublet, image-side biconvex element",
      diagramLabel: "L12",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7292,
      vd: 54.7,
      focalLengthMm: 56.41,
      glass:
        "TAC8 (HOYA) / S-LAL18 (OHARA) — 729547 class, lanthanum crown; catalog coordinate match, supplier unconfirmed",
      role: "GR1 rear positive meniscus, convex to object",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      focalLengthMm: -11.32,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR2 front negative meniscus, concave to image; both faces aspheric",
      diagramLabel: "L21",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.8514,
      vd: 40.1,
      focalLengthMm: -16.55,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR2 cemented doublet, biconcave element; object-side face aspheric",
      diagramLabel: "L22",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.946,
      vd: 18.0,
      focalLengthMm: 12.32,
      glass:
        "FDS18 (HOYA) — 946180 class, ultra-high-index dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR2 cemented doublet, biconvex element",
      diagramLabel: "L23",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      focalLengthMm: -16.47,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR2 rear negative meniscus, concave to object; both faces aspheric",
      diagramLabel: "L24",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6188,
      vd: 63.9,
      focalLengthMm: 14.49,
      glass:
        "M-PCD4 (HOYA) — 619639 class, phosphate crown molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR3 first positive element immediately behind the stop; both faces aspheric",
      diagramLabel: "L31",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.4971,
      vd: 81.6,
      focalLengthMm: 55.11,
      glass:
        "M-FCD1 (HOYA) — 497816 class, fluorophosphate ED molding glass; molding-grade spectral proxy; production supplier unconfirmed",
      apd: "inferred",
      apdNote:
        "ED/APD inferred from the M-FCD1 catalog match; production glass and source partial dispersion are unconfirmed.",
      role: "GR3 second positive element; both faces aspheric",
      diagramLabel: "L32",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -22.56,
      glass:
        "TAFD55 (HOYA) / S-LAH99 (OHARA) — 001291 class, lanthanum dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR3 rear negative meniscus, concave to image",
      diagramLabel: "L33",
    },
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.4971,
      vd: 81.6,
      focalLengthMm: 16.5,
      glass:
        "M-FCD1 (HOYA) — 497816 class, fluorophosphate ED molding glass; molding-grade spectral proxy; production supplier unconfirmed",
      apd: "inferred",
      apdNote:
        "ED/APD inferred from the M-FCD1 catalog match; production glass and source partial dispersion are unconfirmed.",
      role: "GR4 cemented doublet, biconvex element; object-side face aspheric",
      diagramLabel: "L41",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.946,
      vd: 18.0,
      focalLengthMm: -82.04,
      glass:
        "FDS18 (HOYA) — 946180 class, ultra-high-index dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR4 cemented doublet, meniscus concave to object",
      diagramLabel: "L42",
      cemented: "C3",
    },
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.8467,
      vd: 23.8,
      focalLengthMm: 51.63,
      glass:
        "FDS90 (HOYA) / N-SF57 (SCHOTT) — 847238 class, dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR5 positive meniscus, convex to image",
      diagramLabel: "L51",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      focalLengthMm: -25.34,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR5 biconcave negative element; both faces aspheric",
      diagramLabel: "L52",
    },
    {
      id: 15,
      name: "L61",
      label: "Element 15",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      focalLengthMm: 174.25,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR6 single positive meniscus, convex to object; both faces aspheric",
      diagramLabel: "L61",
    },
  ],

  surfaces: [
    { label: "1", R: 106.083, d: 0.909, sd: 13.3, medium: 1 },
    { label: "2", R: 53.442, d: 2.367, sd: 13.3, medium: 2 },
    { label: "3", R: -234.558, d: 0.099, sd: 13.3 },
    { label: "4", R: 31.518, d: 2.241, sd: 12.35, medium: 3 },
    { label: "5", R: 130.743, sd: 12.25 },
    {
      label: "6A",
      R: 124.83,
      d: 0.54,
      sd: 6.7,
      medium: 4,
      asphere: {
        K: 0,
        A4: 0.00017875171,
        A6: 7.4651561e-6,
        A8: -4.8572341e-7,
        A10: 9.5759004e-9,
        A12: -7.8872416e-11,
        A14: 2.2286778e-13,
      },
    },
    {
      label: "7A",
      R: 8.928,
      d: 3.015,
      sd: 5.3,
      asphere: {
        K: 0,
        A4: 0.00019949246,
        A6: 1.6787414e-5,
        A8: -1.3314951e-7,
        A10: -1.305171e-9,
        A12: -1.4789494e-10,
        A14: 2.5094165e-12,
      },
    },
    {
      label: "8A",
      R: -31.896,
      d: 0.576,
      sd: 4.8,
      medium: 5,
      asphere: {
        K: 0,
        A4: -0.00029102881,
        A6: 1.1476909e-5,
        A8: 1.9781855e-7,
        A10: -3.1387085e-8,
        A12: 7.8964829e-10,
        A14: -9.7813975e-12,
      },
    },
    { label: "9", R: 25.452, d: 1.935, sd: 4.8, medium: 6 },
    { label: "10", R: -20.691, d: 0.549, sd: 4.8 },
    {
      label: "11A",
      R: -13.158,
      d: 0.405,
      sd: 4.4,
      medium: 7,
      asphere: { K: 0, A4: 0.00014650206, A6: -3.9523108e-5, A8: 2.6849432e-6, A10: -7.8818753e-8, A12: 9.2351885e-10, A14: 0 },
    },
    {
      label: "12A",
      R: -216.036,
      sd: 4.4,
      asphere: {
        K: 0,
        A4: -0.00015610425,
        A6: -2.9626243e-5,
        A8: 2.5237462e-6,
        A10: -9.7780063e-8,
        A12: 1.8030621e-9,
        A14: -1.3090778e-11,
      },
    },
    { label: "STO", R: "flat", d: 0.459 },
    {
      label: "14A",
      R: 11.007,
      d: 2.466,
      sd: 5.1,
      medium: 8,
      asphere: {
        K: 0,
        A4: -0.0001115048,
        A6: 1.2921641e-6,
        A8: -5.5346376e-7,
        A10: 5.2803093e-8,
        A12: -2.3303866e-9,
        A14: 3.4231154e-11,
      },
    },
    {
      label: "15A",
      R: -44.244,
      d: 0.99,
      sd: 5.15,
      asphere: {
        K: 0,
        A4: 0.0001115048,
        A6: 2.0908059e-7,
        A8: -6.375956e-7,
        A10: 7.4035837e-8,
        A12: -3.4839486e-9,
        A14: 5.3039778e-11,
      },
    },
    {
      label: "16A",
      R: 192.87,
      d: 1.458,
      sd: 5.15,
      medium: 9,
      asphere: {
        K: 0,
        A4: -7.370096e-5,
        A6: -1.6081051e-6,
        A8: 2.5055567e-7,
        A10: -1.0803507e-9,
        A12: 1.182911e-10,
        A14: -7.7486387e-12,
      },
    },
    {
      label: "17A",
      R: -31.851,
      d: 0.099,
      sd: 5.15,
      asphere: {
        K: 0,
        A4: -0.00012265569,
        A6: 6.6849566e-7,
        A8: 4.4907253e-7,
        A10: -4.2749417e-8,
        A12: 2.4218749e-9,
        A14: -4.783494e-11,
      },
    },
    { label: "18", R: 22.455, d: 0.432, sd: 5.1, medium: 10 },
    { label: "19", R: 11.151, sd: 4.95 },
    {
      label: "20A",
      R: 19.206,
      d: 2.493,
      sd: 5.5,
      medium: 11,
      asphere: {
        K: 0,
        A4: -8.276406e-5,
        A6: 8.3996342e-7,
        A8: -1.5942608e-8,
        A10: -5.9243124e-9,
        A12: 4.3335057e-10,
        A14: -8.6983348e-12,
      },
    },
    { label: "21", R: -13.698, d: 0.576, sd: 5.5, medium: 12 },
    { label: "22", R: -16.974, sd: 5.5 },
    { label: "23", R: -87.669, d: 0.99, sd: 4.9, medium: 13 },
    { label: "24", R: -29.322, d: 0.099, sd: 4.85 },
    {
      label: "25A",
      R: -38.997,
      d: 0.441,
      sd: 4.85,
      medium: 14,
      asphere: { K: 0, A4: -2.1816187e-5, A6: 1.0163254e-6, A8: 1.0095194e-8, A10: -4.2016363e-9, A12: 1.0919644e-10, A14: 0 },
    },
    {
      label: "26A",
      R: 48.528,
      sd: 4.8,
      asphere: { K: 0, A4: -4.4602195e-5, A6: 2.5688835e-6, A8: -7.9396291e-8, A10: -1.2129457e-9, A12: 6.6616616e-11, A14: 0 },
    },
    {
      label: "27A",
      R: 17.739,
      d: 1.08,
      sd: 5.5,
      medium: 15,
      asphere: { K: 0, A4: -0.0003617284, A6: 4.2928754e-6, A8: 2.7781907e-9, A10: -3.1278676e-9, A12: 5.5109675e-11, A14: 0 },
    },
    {
      label: "28A",
      R: 19.584,
      sd: 5.55,
      asphere: { K: 0, A4: -0.00033451303, A6: 4.2171756e-6, A8: 2.7186043e-8, A10: -3.9169327e-9, A12: 6.4376411e-11, A14: 0 },
    }, // D28: physical gap to plate S29
  ],

  zoom: {
    stations: [
      { focalLengthMm: 9.01, nominalFNumber: 2.97, label: "Wide" },
      { focalLengthMm: 23.6, nominalFNumber: 4.16 },
      { focalLengthMm: 66.27, nominalFNumber: 4.72, label: "Tele" },
    ],
    apertureModel: "from-nominal-fno",
  },

  focus: {
    closeFocusM: 0.08,
    description:
      "Not modeled. Patent Example 3 publishes infinity-focus zoom states only and identifies no focus group; focus positions repeat the infinity spacings. Sony lists minimum focus of approx. 0.08 m (wide) and 1.0 m (tele).",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [0.387, 0.387],
        [10.062, 10.062],
        [21.987, 21.987],
      ],
    },
    "12A": {
      label: "D12",
      values: [
        [13.275, 13.275],
        [6.003, 6.003],
        [1.737, 1.737],
      ],
    },
    "19": {
      label: "D19",
      values: [
        [5.13, 5.13],
        [1.206, 1.206],
        [1.278, 1.278],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [4.896, 4.896],
        [5.805, 5.805],
        [6.237, 6.237],
      ],
    },
    "26A": {
      label: "D26",
      values: [
        [4.365, 4.365],
        [5.274, 5.274],
        [7.983, 7.983],
      ],
    },
    "28A": {
      label: "D28",
      values: [
        [4.986, 4.986],
        [13.527, 13.527],
        [17.964, 17.964],
      ],
    },
  },

  aperture: { fStops: [2.8, 3.5, 4, 4.5, 5.6, 8, 11, 16] },

  /* ── Optical filter FL (patent Table 7 surfaces S29–S32, scaled x9): traced, not drawn ── */
  rearPlates: [
    {
      label: "FL",
      thicknessMm: 0.288,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.251,
      source: "JP WO2019/188070 A1, Example 3 Table 7 surfaces 29–30 (scaled x9)",
    },
    {
      label: "FL",
      thicknessMm: 0.486,
      nd: 1.5567,
      vd: 58.6,
      glass: "BAL15Y",
      gapAfterMm: 0.963,
      source: "JP WO2019/188070 A1, Example 3 Table 7 surfaces 31–32 (scaled x9)",
    },
  ],

  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "GR2 (−)", fromSurface: "6A", toSurface: "12A" },
    { text: "GR3 (+)", fromSurface: "14A", toSurface: "19" },
    { text: "GR4 (+)", fromSurface: "20A", toSurface: "22" },
    { text: "GR5 (−)", fromSurface: "23", toSurface: "26A" },
    { text: "GR6 (+)", fromSurface: "27A", toSurface: "28A" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "8A", toSurface: "10" },
    { text: "C3", fromSurface: "20A", toSurface: "22" },
  ],

  layout: { scFill: 0.55, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
