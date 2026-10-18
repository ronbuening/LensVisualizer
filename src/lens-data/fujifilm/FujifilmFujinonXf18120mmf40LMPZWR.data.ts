import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 18-120mm f/4 LM PZ WR                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: JP 2023-033114 A, Example 1 (FUJIFILM Corporation).                  ║
 * ║ Native patent scale retained: no uniform scaling applied.                           ║
 * ║ 15 elements / 12 air-separated groups; 3 double-sided aspherical elements.          ║
 * ║ Optical zoom groups: G1 (+), G2 (-), G3 (+), G4 (-), G5 (+).                        ║
 * ║ Zoom: G2 and G4 move from wide to tele; G1, G3, and G5 are fixed.                   ║
 * ║ Focus: G4 alone moves imageward.                                                     ║
 * ║                                                                                      ║
 * ║ Variable gaps: D5/D13 are zoom-only; D19/D22 are zoom + focus.                     ║
 * ║ The patent publishes wide-infinity, tele-infinity, and a tele near state.           ║
 * ║ focusPositions preserves the tele near row as the middle keyframe after              ║
 * ║ reference-plane normalization. The corresponding wide middle keyframe and the        ║
 * ║ 0.6 m close-focus endpoints are code-solved constrained reconstructions with         ║
 * ║ D19 + D22 fixed at 23.060 mm. Focus status: CONSTRAINED_RECONSTRUCTION.              ║
 * ║                                                                                      ║
 * ║ The patent PP filter/cover plate (surfaces 29-30: 2.850 mm, nd 1.51633, vd 64.14,    ║
 * ║ theta_gF 0.53531) is modeled in `rearPlates` (traced, not drawn): D28 = 21.929 mm to ║
 * ║ PP and 1.021 mm from PP to the image plane. The air-equivalent rear spacing is       ║
 * ║ unchanged at 24.8295380953 mm. Focus keyframes were solved against that              ║
 * ║ air-equivalent image plane, which lies 0.970462 mm ahead of the physical one, so     ║
 * ║ physical object-to-image distances are 0.970462 mm longer than the solved values.    ║
 * ║                                                                                      ║
 * ║ Non-stop semi-diameters are patent effective diameters ED/2. The STO source ED is    ║
 * ║ not the physical iris diameter; the stop radius is derived from the design           ║
 * ║ f-number at each zoom station, where nominalFNumber supplies the modeled             ║
 * ║ wide-open pupil geometry.                                                            ║
 * ║                                                                                      ║
 * ║ Fujifilm's asphere convention uses sqrt(1 - KA*C^2*h^2); all Example-1 KA = 1,       ║
 * ║ therefore standard LensVisualizer K = 0. Surface 23 A12 is negative in the rendered  ║
 * ║ original Table 3: -1.5910064e-12.                                                    ║
 * ║                                                                                      ║
 * ║ Patent theta_gF values are preserved as dPgF using the project normal line:          ║
 * ║ dPgF = theta_gF - (0.6438 - 0.001682 * vd). The patent does not publish nC/nF/ng,   ║
 * ║ so those fields are intentionally omitted rather than inferred from vendor matches.  ║
 * ║ Glass labels use coordinate classes and qualified catalog equivalents     ║
 * ║ because the patent does not identify glass vendors.                                  ║
 * ║                                                                                      ║
 * ║ Production metadata sources:                                                         ║
 * ║ https://www.fujifilm-x.com/en-us/products/lenses/xf18-120mmf4-lm-pz-wr/specifications/║
 * ║ https://www.fujifilm-x.com/en-sg/news/fujifilm-announces-fujinon-xf18-120mmf4-lm-pz-wr/ ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "fujifilm-fujinon-xf-18-120mm-f4-lm-pz-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 18-120mm f/4 LM PZ WR",
  subtitle: "JP 2023-033114 A Example 1 — native-scale production correlation",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "15 ELEMENTS / 12 GROUPS",
      "DESIGN f = 18.5444-116.8236 mm",
      "DESIGN F/4.04-4.11",
      "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
      "INNER FOCUS / POWER ZOOM",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [18, 120], design: [18.544395860229333, 116.82355280015217] },
    fNumber: { marketing: 4 },
  },

  source: {
    patentNumber: "JP 2023-033114 A",
    patentYear: 2023,
    authors: ["Masaru Yonezawa", "Shinkichi Ikeda", "Takashi Kunugise", "Masanao Kawana"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.89,
      focalLengthMm: -148.173,
      glass: "923209 class (supplier unresolved)",
      apd: "patent",
      apdNote: "Patent Table 1 partial-dispersion ratio gives ΔPgF = +0.02940 for L11; high-dispersion APD, not ED.",
      diagramLabel: "L11",
      cemented: "D1",
      dPgF: 0.02939698,
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Plano-Convex Positive",
      nd: 1.59283,
      vd: 68.63,
      focalLengthMm: 89.4,
      glass: "593686 class (supplier unresolved)",
      diagramLabel: "L12",
      cemented: "D1",
      dPgF: 0.01449566,
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 1.77535,
      vd: 50.3,
      focalLengthMm: 89.506,
      glass: "775503 class (H-LaK77 catalog equivalent; supplier unresolved)",
      diagramLabel: "L13",
      dPgF: -0.0091554,
    },
    {
      id: 4,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: -16.637,
      glass: "806407 class (supplier unresolved)",
      diagramLabel: "L21",
      dPgF: -0.00589214,
    },
    {
      id: 5,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.77535,
      vd: 50.3,
      focalLengthMm: -22.676,
      glass: "775503 class (H-LaK77 catalog equivalent; supplier unresolved)",
      diagramLabel: "L22",
      dPgF: -0.0091554,
    },
    {
      id: 6,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.84667,
      vd: 23.79,
      focalLengthMm: 19.103,
      glass: "847238 class (supplier unresolved)",
      diagramLabel: "L23",
      dPgF: 0.01392478,
    },
    {
      id: 7,
      name: "L24",
      label: "Element L24",
      type: "Negative Meniscus",
      nd: 1.88299,
      vd: 40.78,
      focalLengthMm: -36.557,
      glass: "883408 class (supplier unresolved)",
      diagramLabel: "L24",
      dPgF: -0.00691804,
    },
    {
      id: 8,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.49648,
      vd: 81.26,
      focalLengthMm: 27.451,
      glass: "S-FPL51 (catalog proxy for nd=1.49648, vd=81.26; supplier unresolved)",
      apd: "patent",
      apdNote: "Patent Table 1 partial-dispersion ratio gives ΔPgF = +0.02977 for low-dispersion L31.",
      diagramLabel: "L31",
      dPgF: 0.02976932,
    },
    {
      id: 9,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: -26.178,
      glass: "911353 class (supplier unresolved)",
      diagramLabel: "L32",
      cemented: "D2",
      dPgF: -0.0022695,
    },
    {
      id: 10,
      name: "L33",
      label: "Element L33",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      focalLengthMm: 16.782,
      glass: "538747 class (supplier unresolved)",
      apd: "patent",
      apdNote: "Patent Table 1 partial-dispersion ratio gives ΔPgF = +0.02121 for low-dispersion L33.",
      diagramLabel: "L33",
      cemented: "D2",
      dPgF: 0.0212054,
    },
    {
      id: 11,
      name: "L41",
      label: "Element L41",
      type: "Positive Meniscus",
      nd: 1.902,
      vd: 25.26,
      focalLengthMm: 26.721,
      glass: "902253 class (supplier unresolved)",
      diagramLabel: "L41",
      cemented: "D3",
      dPgF: 0.01530732,
    },
    {
      id: 12,
      name: "L42",
      label: "Element L42",
      type: "Biconcave Negative",
      nd: 1.78799,
      vd: 47.47,
      focalLengthMm: -13.042,
      glass: "788475 class (supplier unresolved)",
      diagramLabel: "L42",
      cemented: "D3",
      dPgF: -0.01049546,
    },
    {
      id: 13,
      name: "L51",
      label: "Element L51",
      type: "Positive Meniscus (2x Asph)",
      nd: 1.58313,
      vd: 59.46,
      focalLengthMm: 31.816,
      glass: "583595 class (supplier unresolved)",
      diagramLabel: "L51",
      dPgF: -0.00322828,
    },
    {
      id: 14,
      name: "L52",
      label: "Element L52",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.43,
      focalLengthMm: -33.538,
      glass: "001255 class (supplier unresolved)",
      diagramLabel: "L52",
      dPgF: 0.01314326,
    },
    {
      id: 15,
      name: "L53",
      label: "Element L53",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.85,
      focalLengthMm: 68.503,
      glass: "532489 class (supplier unresolved)",
      diagramLabel: "L53",
      dPgF: 0.0053657,
    },
  ],

  /* ── Optical surfaces ──
   * Source surfaces 29-30 (PP cover/filter surrogate) are modeled in rearPlates.
   * Source surface 14 is the aperture stop and is labeled STO here.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 87.87311, d: 1.7, sd: 27.02, medium: 1 },
    { label: "2", R: 52.9991, d: 7.9, sd: 25.405, medium: 2 },
    { label: "3", R: "flat", d: 0.11, sd: 24.865 },
    { label: "4", R: 44.22167, d: 4.8, sd: 21.3, medium: 3 },
    { label: "5", R: 116.11577, sd: 20.9 },
    {
      label: "6A",
      R: 245.66038,
      d: 1.2,
      sd: 12.42,
      medium: 4,
      asphere: {
        K: 0,
        A4: 7.4473652e-5,
        A6: -2.1119784e-6,
        A8: 4.7319775e-8,
        A10: -7.9524193e-10,
        A12: 9.393489e-12,
        A14: -7.4102362e-14,
        A16: 3.6783833e-16,
        A18: -1.0327838e-18,
        A20: 1.2461383e-21,
      },
    },
    {
      label: "7A",
      R: 12.68927,
      d: 6.127,
      sd: 9.12,
      asphere: {
        K: 0,
        A4: 6.5838933e-5,
        A6: -8.296292e-7,
        A8: -8.079397e-8,
        A10: 5.9315217e-9,
        A12: -2.005024e-10,
        A14: 3.9039118e-12,
        A16: -4.4501804e-14,
        A18: 2.7553203e-16,
        A20: -7.1506946e-19,
      },
    },
    { label: "8", R: -26.91391, d: 0.65, sd: 8.745, medium: 5 },
    { label: "9", R: 51.24076, d: 0.13, sd: 8.51 },
    { label: "10", R: 31.36898, d: 4.14, sd: 8.5, medium: 6 },
    { label: "11", R: -31.36898, d: 0.619, sd: 8.245 },
    { label: "12", R: -22.72231, d: 0.6, sd: 8.11, medium: 7 },
    { label: "13", R: -77.69761, sd: 8.0 },
    // JP 2023-033114 A Table 1, Example 1, row 14(St) prints effective diameter ED = 16.50 mm.
    // Radius derived from the design f-number at each zoom station.
    { label: "STO", R: "flat", d: 1.2 },
    {
      label: "15A",
      R: 18.36941,
      d: 4.76,
      sd: 9.23,
      medium: 8,
      asphere: {
        K: 0,
        A4: 7.3078481e-6,
        A6: 1.6384009e-5,
        A8: 2.4477938e-7,
        A10: -1.6990822e-8,
        A12: 3.0825088e-10,
        A14: -7.8884947e-13,
        A16: -5.4632706e-15,
        A5: -2.9986848e-5,
        A7: -4.0393568e-6,
        A9: 9.0464563e-8,
        A11: -2.4534913e-10,
        A13: -2.3134201e-11,
        A15: 1.6292002e-13,
      },
    },
    {
      label: "16A",
      R: -48.27179,
      d: 1.19,
      sd: 9.2,
      asphere: {
        K: 0,
        A4: 5.3950544e-5,
        A6: 1.0144728e-5,
        A8: 8.7491995e-7,
        A10: -2.9596556e-9,
        A12: -2.8803981e-10,
        A14: -1.8603752e-12,
        A16: -2.4344642e-15,
        A5: -1.3977719e-5,
        A7: -3.982888e-6,
        A9: -8.8643972e-8,
        A11: 2.0443076e-9,
        A13: 2.5839721e-11,
        A15: 9.7346637e-14,
      },
    },
    { label: "17", R: 29.69112, d: 0.81, sd: 9.04, medium: 9 },
    { label: "18", R: 13.0521, d: 6.86, sd: 8.575, medium: 10 },
    { label: "19", R: -23.87047, sd: 8.53 },
    { label: "20", R: -77.85373, d: 2.01, sd: 6.25, medium: 11 },
    { label: "21", R: -18.6299, d: 0.61, sd: 6.32, medium: 12 },
    { label: "22", R: 23.2536, sd: 6.435 },
    {
      label: "23A",
      R: -179.47134,
      d: 5.63,
      sd: 11.32,
      medium: 13,
      asphere: {
        K: 0,
        A4: 6.2558334e-7,
        A6: -2.5123777e-7,
        A8: 9.6772452e-9,
        A10: -9.266304e-11,
        A12: -1.5910064e-12,
        A14: 4.8091291e-14,
        A16: -4.7819912e-16,
        A18: 2.1682041e-18,
        A20: -3.7741189e-21,
      },
    },
    {
      label: "24A",
      R: -17.00892,
      d: 0.3,
      sd: 11.62,
      asphere: {
        K: 0,
        A4: 1.7961844e-5,
        A6: 2.5308981e-7,
        A8: -1.7409809e-8,
        A10: 6.4173328e-10,
        A12: -1.2426583e-11,
        A14: 1.3729067e-13,
        A16: -8.6371114e-16,
        A18: 2.8638107e-18,
        A20: -3.8577185e-21,
      },
    },
    { label: "25", R: -20.3393, d: 0.81, sd: 11.49, medium: 14 },
    { label: "26", R: -52.65464, d: 2.55, sd: 12.235 },
    { label: "27", R: -170.95811, d: 3.93, sd: 13.17, medium: 15 },
    { label: "28", R: -30.26663, d: 21.929, sd: 13.43 }, // D28 — gap to PP
  ],

  zoom: {
    // (moved from publishedStations) Source-tabulated focus rows differ by zoom station.
    stations: [
      { focalLengthMm: 18.544, nominalFNumber: 4.04, label: "Wide", published: true },
      { focalLengthMm: 116.83, nominalFNumber: 4.11, label: "Tele", published: true, publishedFocus: [1] },
    ],
    // Physical iris schedule inferred by tracing each source-station modeled entrance pupil to STO.
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.6,
    /* ── Zoom and focus variable gaps ──
     * focusPositions[1] corresponds to 1.195394397 m from object to the air-equivalent
     * image plane (1.196364859 m to the physical image plane behind PP). At tele,
     * the middle D19/D22 pair is the patent-published near row.
     */
    keyframes: [0, 0.5019263947098996, 1],
    description:
      "Single-group inner focus. G4 (L41-L42) moves imageward while D19 + D22 remains 23.060 mm. " +
      "The tele middle keyframe preserves the patent-published near row. The matching wide middle keyframe and " +
      "the 0.6 m endpoints are mechanism-constrained reconstructions solved against the air-equivalent image plane.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.01, 1.01, 1.01],
        [31.285, 31.285, 31.285],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [31.22, 31.22, 31.22],
        [0.945, 0.945, 0.945],
      ],
    },
    "19": {
      label: "D19 / FOCUS",
      values: [
        [1.0, 1.0607827276124988, 1.135196906692618],
        [12.925, 16.026, 19.54084644486592],
      ],
    },
    "22": {
      label: "D22 / FOCUS",
      values: [
        [22.06, 21.9992172723875, 21.924803093307382],
        [10.135, 7.034, 3.519153555134082],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22] },

  /* ── Plane-parallel member PP (patent surfaces 29–30): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      dPgF: -0.00060652,
      gapAfterMm: 1.021,
      sd: 14.85,
      source: "JP 2023-033114 A, Example 1 Table 1 surfaces 29–30 (ED 29.50 / 29.70)",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6A", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "STO", toSurface: "19" },
    { text: "G4 (-) FOCUS", fromSurface: "20", toSurface: "22" },
    { text: "G5 (+)", fromSurface: "23A", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
