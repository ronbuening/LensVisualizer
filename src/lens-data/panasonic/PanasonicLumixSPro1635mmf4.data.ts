import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S PRO 16-35mm f/4                               ║
 * ║                                                                              ║
 * ║  Data source: JP 2021-076829 A, Numerical Example 1 (Panasonic).             ║
 * ║  Strong product correlation; the patent does not explicitly name S-R1635.    ║
 * ║  12 physical lens elements / 9 air-separated groups; 13 modeled material     ║
 * ║  layers because bonded resin layer P is separate from the L2 substrate.      ║
 * ║  Five aspherical surfaces on three physical lenses. No scale applied.        ║
 * ║                                                                              ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION.                                   ║
 * ║  The patent publishes three infinity-focus zoom anchors and states that G3   ║
 * ║  alone moves imageward for close focus, but gives no close-focus spacings.   ║
 * ║  Those three anchors are retained with 30 derived control points inserted    ║
 * ║  along the same piecewise-linear infinity zoom path. At all 33 points, G3    ║
 * ║  is solved at the 0.25 m sensor-plane conjugate while conserving D17 + D20.  ║
 * ║  The tele anchor gives 0.228626×, consistent with the marketed 0.23×.        ║
 * ║                                                                              ║
 * ║  Zoom-only gaps: D9 and BF (D23). Zoom + focus gaps: D17 and D20.            ║
 * ║  G1 reverses between middle and tele; G2-G4 continue objectward.             ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                     ║
 * ║  The patent publishes no clear apertures. SDs are inferred from meridional   ║
 * ║  rays, patent image heights/field angles, Figure 1, and current geometry     ║
 * ║  limits. Full-field edge bundles may vignette where front geometry binds.    ║
 * ║                                                                              ║
 * ║  NOTE ON SPECTRAL DATA:                                                      ║
 * ║  The patent publishes nd and νd only. No nC, nF, ng, or dPgF is invented.    ║
 * ║  Glass labels remain class-level or Unmatched except coefficient-backed     ║
 * ║  BAC6 and K-LaSFn23 catalog equivalents.                                    ║
 * ║                                                                              ║
 * ║  SOURCE CONTRADICTION: ¶0025 calls complete G2R negative, but the published  ║
 * ║  prescription computes f = +63.64335 mm for L6+L7+air+L8. It is preserved.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-lumix-s-pro-16-35f4",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 16-35mm f/4",
  subtitle: "JP 2021-076829 A, NUMERICAL EXAMPLE 1 — STRONG PRODUCT CORRELATION",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "12 LENS ELEMENTS / 9 GROUPS",
      "16.5534-33.8782 mm DESIGN",
      "F/4.10925-F/4.12028 MODELED",
      "2ω = 107.1354°-66.3796°",
      "5 ASPHERICAL SURFACES / 3 ASPHERICAL LENSES",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: [16, 35], design: [16.5534, 33.8782] },
    fNumber: { marketing: 4, design: 4.12005 },
  },

  source: {
    patentNumber: "JP 2021-076829 A",
    patentYear: 2021,
    authors: ["Takahiro Kitaguchi"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.69144,
      vd: 53.6,
      focalLengthMm: -40.367,
      glass: "Unmatched (691536; lanthanum-crown class)",
      apd: false,
      role: "First negative front-group meniscus; spreads the ultrawide field before the following negative elements.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 glass substrate",
      type: "Negative Meniscus",
      nd: 1.71181,
      vd: 52.5,
      focalLengthMm: -58.1978,
      glass: "Unmatched (712525; lanthanum-crown class)",
      apd: false,
      role: "High-index substrate for the bonded hybrid asphere P.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "P",
      label: "Bonded resin layer P",
      type: "Negative Meniscus Resin Layer (1× Asph)",
      nd: 1.51122,
      vd: 59.6,
      focalLengthMm: -98.4319,
      glass: "Unmatched (optical resin layer P; no glass-catalog identity)",
      apd: false,
      role: "Thin bonded resin layer carrying the aspherical outer surface of the hybrid L2 lens.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      focalLengthMm: -223.4817,
      glass: "487704 fluor-crown class (vendor-indeterminate)",
      apd: false,
      role: "Weak negative meniscus with low dispersion; completes the three-negative front sequence.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7296,
      vd: 26.2,
      focalLengthMm: 66.2587,
      glass: "Unmatched (730262; dense-flint class)",
      apd: false,
      role: "Positive rear element of G1; partially recovers power after the negative front menisci.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.57469,
      vd: 56,
      focalLengthMm: 28.3634,
      glass: "BAC6 (HOYA legacy catalog equivalent; patent code 575560, supplier unspecified)",
      apd: false,
      role: "Strong positive G2F element before the stop; both surfaces are aspherical.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.90698,
      vd: 30.3,
      focalLengthMm: -14.0335,
      glass: "Unmatched (907303; ultra-high-index flint class)",
      apd: false,
      role: "Strong negative member of the cemented L6-L7 pair; its nd makes it the probable marketed UHR element.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 23.4039,
      glass: "497816 ED fluorophosphate-crown class (vendor-indeterminate)",
      apd: false,
      role: "Low-dispersion positive partner in the cemented L6-L7 doublet; satisfies patent condition (2).",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58133,
      vd: 46.5,
      focalLengthMm: 27.5046,
      glass: "Unmatched (581465; barium-flint class; nearest public candidate J-BAF3, Δnd +0.00134, Δνd -0.02)",
      apd: false,
      role: "Separated positive asphere completing G2R; both surfaces carry polynomial correction.",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 28.1291,
      glass: "847238 dense-flint class (vendor-indeterminate)",
      apd: false,
      role: "Positive member of the cemented G3 focus doublet; satisfies patent condition (4).",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.8104,
      vd: 33.1,
      focalLengthMm: -18.7375,
      glass: "Unmatched (810331; lanthanum-flint class; nearest public candidate J-LASFH6, Δnd -0.00430, Δνd +0.24)",
      apd: false,
      role: "Dominant negative member of G3; the cemented doublet translates imageward for close focus.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      focalLengthMm: 43.0795,
      glass: "487704 fluor-crown class (vendor-indeterminate)",
      apd: false,
      role: "Positive front member of the weak G4 cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: -38.5099,
      glass: "K-LaSFn23 (SUMITA catalog equivalent; patent nd retained, production supplier unspecified)",
      apd: false,
      role: "High-index negative rear member of G4; satisfies patent condition (3).",
      cemented: "D3",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // G1: negative front zoom group
    { label: "1", R: 61.3031, d: 2.3, sd: 25.3, medium: 1 },
    { label: "2", R: 18.8849, d: 9.3, sd: 16.85 },
    { label: "3", R: 41.15, d: 1.75, sd: 17.2, medium: 2 },
    { label: "4", R: 20.2786, d: 0.07, sd: 15.2, medium: 3 },
    {
      label: "5A",
      R: 14.437,
      d: 11.04,
      sd: 14.2,
      asphere: {
        K: -0.860744,
        A4: -1.09058e-5,
        A6: -3.39948e-8,
        A8: -7.35568e-11,
        A10: 1.89948e-13,
        A12: -8.19926e-16,
        A14: 0,
      },
    },
    { label: "6", R: -30.4617, d: 1.2, sd: 14.2, medium: 4 },
    { label: "7", R: -42.8307, d: 0.23, sd: 15.2 },
    { label: "8", R: 49.248, d: 3.9, sd: 15.2, medium: 5 },
    { label: "9", R: -2541.0738, sd: 14.8 },

    // G2: positive zoom group; stop moves with G2
    {
      label: "10A",
      R: 22.9021,
      d: 5.8,
      sd: 10.9,
      medium: 6,
      asphere: { K: 0, A4: -1.01233e-5, A6: -8.60053e-8, A8: 2.86697e-9, A10: -2.94258e-11, A12: 1.68258e-13, A14: 0 },
    },
    {
      label: "11A",
      R: -51.3183,
      d: 2.83,
      sd: 10.2,
      asphere: {
        K: 0,
        A4: 1.58943e-5,
        A6: 2.92108e-8,
        A8: -5.38824e-10,
        A10: 3.70371e-11,
        A12: -4.51108e-13,
        A14: 2.42691e-15,
      },
    },
    { label: "STO", R: "flat", d: 4.75 },
    { label: "13", R: 64.0609, d: 0.8, sd: 8.5, medium: 7 },
    { label: "14", R: 10.5553, d: 5, sd: 8.3, medium: 8 },
    { label: "15", R: 96.1258, d: 3.55, sd: 8.8 },
    {
      label: "16A",
      R: 269.4121,
      d: 4.2,
      sd: 10.3,
      medium: 9,
      asphere: {
        K: 0,
        A4: -2.3515e-5,
        A6: 1.19948e-7,
        A8: -3.24297e-9,
        A10: 1.40767e-11,
        A12: 2.15242e-13,
        A14: -2.59066e-15,
      },
    },
    {
      label: "17A",
      R: -16.9007,
      sd: 10.3,
      asphere: { K: 0, A4: -1.50992e-5, A6: -8.96894e-8, A8: -2.74366e-9, A10: 2.94693e-11, A12: -3.11976e-13, A14: 0 },
    },

    // G3: negative translating focus group
    { label: "18", R: 57.2983, d: 3.25, sd: 11, medium: 10 },
    { label: "19", R: -39.6961, d: 1, sd: 11, medium: 11 },
    { label: "20", R: 24.8695, sd: 10.8 },

    // G4: weak negative rear zoom group
    { label: "21", R: 35.8528, d: 6, sd: 14.7, medium: 12 },
    { label: "22", R: -47.9156, d: 1.2, sd: 14.7, medium: 13 },
    { label: "23", R: 132.4575, sd: 15.2 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom fields ── */
    // Three patent anchors plus 30 constrained reconstruction knots.
    // (moved from publishedStations) Source rows only; the other zoom stations are solved or sampled control points.
    /* (moved from nominalFno) ── Aperture configuration ── */
    // Patent f-numbers at the three source anchors; intermediate values are linearly interpolated.
    stations: [
      { focalLengthMm: 16.5534, nominalFNumber: 4.12005, label: "Wide", published: true },
      { focalLengthMm: 16.884476, nominalFNumber: 4.119375, published: false },
      { focalLengthMm: 17.229139, nominalFNumber: 4.1187, published: false },
      { focalLengthMm: 17.588136, nominalFNumber: 4.118025, published: false },
      { focalLengthMm: 17.962382, nominalFNumber: 4.11735, published: false },
      { focalLengthMm: 18.352869, nominalFNumber: 4.116675, published: false },
      { focalLengthMm: 18.760677, nominalFNumber: 4.116, published: false },
      { focalLengthMm: 19.186985, nominalFNumber: 4.115325, published: false },
      { focalLengthMm: 19.633081, nominalFNumber: 4.11465, published: false },
      { focalLengthMm: 20.100376, nominalFNumber: 4.113975, published: false },
      { focalLengthMm: 20.590417, nominalFNumber: 4.1133, published: false },
      { focalLengthMm: 21.104908, nominalFNumber: 4.112625, published: false },
      { focalLengthMm: 21.645723, nominalFNumber: 4.11195, published: false },
      { focalLengthMm: 22.214937, nominalFNumber: 4.111275, published: false },
      { focalLengthMm: 22.814847, nominalFNumber: 4.1106, published: false },
      { focalLengthMm: 23.448004, nominalFNumber: 4.109925, published: false },
      { focalLengthMm: 24.1174, nominalFNumber: 4.10925, published: true },
      { focalLengthMm: 24.564799, nominalFNumber: 4.10993937, published: false },
      { focalLengthMm: 25.028537, nominalFNumber: 4.11062875, published: false },
      { focalLengthMm: 25.509361, nominalFNumber: 4.11131813, published: false },
      { focalLengthMm: 26.008229, nominalFNumber: 4.1120075, published: false },
      { focalLengthMm: 26.526174, nominalFNumber: 4.11269688, published: false },
      { focalLengthMm: 27.064311, nominalFNumber: 4.11338625, published: false },
      { focalLengthMm: 27.62384, nominalFNumber: 4.11407562, published: false },
      { focalLengthMm: 28.206061, nominalFNumber: 4.114765, published: false },
      { focalLengthMm: 28.81238, nominalFNumber: 4.11545438, published: false },
      { focalLengthMm: 29.444322, nominalFNumber: 4.11614375, published: false },
      { focalLengthMm: 30.103544, nominalFNumber: 4.11683313, published: false },
      { focalLengthMm: 30.791848, nominalFNumber: 4.1175225, published: false },
      { focalLengthMm: 31.511198, nominalFNumber: 4.11821188, published: false },
      { focalLengthMm: 32.263741, nominalFNumber: 4.11890125, published: false },
      { focalLengthMm: 33.051825, nominalFNumber: 4.11959062, published: false },
      { focalLengthMm: 33.8782, nominalFNumber: 4.12028, label: "Tele", published: true },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.25,
    description:
      "CONSTRAINED_RECONSTRUCTION: G3 alone moves imageward. The three published infinity zoom anchors are retained and 30 derived control points are inserted along their piecewise-linear zoom path. At all 33 points, D17 increases and D20 decreases equally, preserving D17 + D20 and fixed BF while solving the 0.25 m sensor-plane conjugate. Between-knot states remain ordinary piecewise-linear UI interpolation. The patent publishes the mechanism and direction but no close-focus spacing rows.",
  },

  /* (moved from var) ── Variable air spacings: zoom + constrained focus ── */
  gaps: {
    "9": {
      label: "D9",
      values: [
        [27.6237, 27.6237],
        [26.61880625, 26.61880625],
        [25.6139125, 25.6139125],
        [24.60901875, 24.60901875],
        [23.604125, 23.604125],
        [22.59923125, 22.59923125],
        [21.5943375, 21.5943375],
        [20.58944375, 20.58944375],
        [19.58455, 19.58455],
        [18.57965625, 18.57965625],
        [17.5747625, 17.5747625],
        [16.56986875, 16.56986875],
        [15.564975, 15.564975],
        [14.56008125, 14.56008125],
        [13.5551875, 13.5551875],
        [12.55029375, 12.55029375],
        [11.5454, 11.5454],
        [10.94735625, 10.94735625],
        [10.3493125, 10.3493125],
        [9.75126875, 9.75126875],
        [9.153225, 9.153225],
        [8.55518125, 8.55518125],
        [7.9571375, 7.9571375],
        [7.35909375, 7.35909375],
        [6.76105, 6.76105],
        [6.16300625, 6.16300625],
        [5.5649625, 5.5649625],
        [4.96691875, 4.96691875],
        [4.368875, 4.368875],
        [3.77083125, 3.77083125],
        [3.1727875, 3.1727875],
        [2.57474375, 2.57474375],
        [1.9767, 1.9767],
      ],
    },
    "17A": {
      label: "D17",
      values: [
        [1.0, 2.747044997],
        [0.99556875, 2.617221019],
        [0.9911375, 2.511229587],
        [0.98670625, 2.42851717],
        [0.982275, 2.368677349],
        [0.97784375, 2.331437139],
        [0.9734125, 2.316646671],
        [0.96898125, 2.324271646],
        [0.96455, 2.35438811],
        [0.96011875, 2.407179248],
        [0.9556875, 2.482933969],
        [0.95125625, 2.582047142],
        [0.946825, 2.705021399],
        [0.94239375, 2.852470485],
        [0.9379625, 3.025124165],
        [0.93353125, 3.223834762],
        [0.9291, 3.449585452],
        [0.880475, 3.309143242],
        [0.83185, 3.190534596],
        [0.783225, 3.093064008],
        [0.7346, 3.016153136],
        [0.685975, 2.959328013],
        [0.63735, 2.922208688],
        [0.588725, 2.904500871],
        [0.5401, 2.905989204],
        [0.491475, 2.926531906],
        [0.44285, 2.966056561],
        [0.394225, 3.024556913],
        [0.3456, 3.102090518],
        [0.296975, 3.198777176],
        [0.24835, 3.314798062],
        [0.199725, 3.450395508],
        [0.1511, 3.605873403],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [8.0528, 6.305755003],
        [8.0921625, 6.470510231],
        [8.131525, 6.611432913],
        [8.1708875, 6.72907658],
        [8.21025, 6.823847651],
        [8.2496125, 6.896019111],
        [8.288975, 6.945740829],
        [8.3283375, 6.973047104],
        [8.3677, 6.97786189],
        [8.4070625, 6.960002002],
        [8.446425, 6.919178531],
        [8.4857875, 6.854996608],
        [8.52515, 6.766953601],
        [8.5645125, 6.654435765],
        [8.603875, 6.516713335],
        [8.6432375, 6.352933988],
        [8.6826, 6.162114548],
        [8.77339375, 6.344725508],
        [8.8641875, 6.505502904],
        [8.95498125, 6.645142242],
        [9.045775, 6.764221864],
        [9.13656875, 6.863215737],
        [9.2273625, 6.942503812],
        [9.31815625, 7.002380379],
        [9.40895, 7.043060796],
        [9.49974375, 7.064686844],
        [9.5905375, 7.067330939],
        [9.68133125, 7.050999337],
        [9.772125, 7.015634482],
        [9.86291875, 6.961116574],
        [9.9537125, 6.887264438],
        [10.04450625, 6.793835742],
        [10.1353, 6.680526597],
      ],
    },
    "23": {
      label: "BF",
      values: [
        [17.50941, 17.50941],
        [18.03864187, 18.03864187],
        [18.56787375, 18.56787375],
        [19.09710562, 19.09710562],
        [19.6263375, 19.6263375],
        [20.15556937, 20.15556937],
        [20.68480125, 20.68480125],
        [21.21403313, 21.21403313],
        [21.743265, 21.743265],
        [22.27249688, 22.27249688],
        [22.80172875, 22.80172875],
        [23.33096062, 23.33096062],
        [23.8601925, 23.8601925],
        [24.38942438, 24.38942438],
        [24.91865625, 24.91865625],
        [25.44788812, 25.44788812],
        [25.97712, 25.97712],
        [26.70757, 26.70757],
        [27.43802, 27.43802],
        [28.16847, 28.16847],
        [28.89892, 28.89892],
        [29.62937, 29.62937],
        [30.35982, 30.35982],
        [31.09027, 31.09027],
        [31.82072, 31.82072],
        [32.55117, 32.55117],
        [33.28162, 33.28162],
        [34.01207, 34.01207],
        [34.74252, 34.74252],
        [35.47297, 35.47297],
        [36.20342, 36.20342],
        [36.93387, 36.93387],
        [37.66432, 37.66432],
      ],
    },
  },

  aperture: { fStops: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22], blades: 9 },

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "9" },
    { text: "G2 (+)", fromSurface: "10A", toSurface: "17A" },
    { text: "G3 (-) FOCUS", fromSurface: "18", toSurface: "20" },
    { text: "G4 (-)", fromSurface: "21", toSurface: "23" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
