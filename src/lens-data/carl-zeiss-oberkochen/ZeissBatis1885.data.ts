import type { LensDataInput } from "../../types/optics.js";

/**
 * ZEISS Batis 85mm f/1.8 research correlation — JP 2015-096915 A, Example 2.
 *
 * Patent prescription: 11 elements / 8 air-spaced groups, all spherical. The source gives a positive G1,
 * negative single-element G2 focus group, and positive G3 with a negative single-element VC stabilization group.
 * G2 has three PUBLISHED focus states. No focus reconstruction is used.
 *
 * Source normalization:
 * - Source air-to-air bookkeeping planes 8 and 17 are omitted and their spacings folded into the adjacent air gaps.
 * - Source CG/filter surfaces 23-24 are excluded. Surface 22 uses 17.3482067511 mm air-equivalent rear spacing,
 *   replacing 14.700 mm air + 2.500 mm at nd=1.5168 + 1.000 mm air.
 * - No dimensional scaling is applied; patent design and marketed focal/aperture values remain separate.
 *
 * Stop and aperture modeling:
 * - The patent publishes the stop position but not its physical diameter. STO.sd = 11.1700166517 mm is calibrated to
 *   the published infinity Fno=1.85 using the parsed model's paraxial entrance-pupil magnification. Agreement with
 *   f/1.85 is therefore calibration, not independent diaphragm evidence.
 * - With that one fixed stop, the paraxial image-space model predicts about f/1.850 at the 1/40 and MOD states;
 *   patent Table 4 prints f/1.93 at MOD. Because no stop diameter or focus-dependent iris law is published, the data
 *   preserves one fixed stop and nominalFno=1.85 rather than inventing variable aperture. The MOD mismatch is retained
 *   explicitly in the Stage 2 audit/results.
 * - The patent publishes no clear apertures. Surface SDs are MODELED from exact meridional on-axis marginal rays and
 *   full-field chief rays, normally with about 8% allowance. Fig. 6 (PDF p. 35), inspected at 600 dpi, supports
 *   15.8 mm rims on S18-S20 and 16.8 mm on S22; S21 is capped at 14.5 mm for the preceding air gap.
 *   Surfaces 5/6 use 16.0 mm rims so the default 90% gap-intrusion policy passes without a lens-specific override.
 * - Representative 60%-field exact-meridional pupil samples are checked at all published focus states. Available
 *   samples clear authored SDs; some extreme samples cannot reach the stop even before SD clipping and are recorded as
 *   intrinsic spherical-surface/vignetting limitations. Full-field chief rays clear at all published states.
 *
 * Production identity remains inferential: the selected patent is a Tamron application and no primary ZEISS source in
 * the dossier confirms that this exact Example 2 prescription was used in the Batis 1.8/85.
 */
const LENS_DATA = {
  key: "zeiss-batis-85f18",
  maker: "Carl Zeiss",
  name: "ZEISS BATIS 85mm f/1.8",
  subtitle: "JP 2015-096915 A Example 2 — inferred ZEISS Batis 1.8/85 correlation",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "85 mm marketed / 82.87 mm patent",
    "f/1.8 marketed / Fno 1.85 patent-model infinity",
    "2ω = 28.60° at infinity",
    "PUBLISHED INNER FOCUS / VC GROUP IDENTIFIED",
  ],

  focalLengthMarketing: 85,
  focalLengthDesign: 82.91303,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2015-096915 A",
  patentAuthors: ["Hirofumi Tabata", "Yasuhiko Obikane"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2015,
  elementCount: 11,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.9037,
      vd: 31.31,
      indexReference: "d",
      fl: 72.515229,
      glass: "N-LASF46B catalog proxy; 904313 — high-index lanthanum-flint class (supplier unproven)",
      role: "Front positive element of G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: 65.845536,
      apd: "inferred",
      apdNote: "The compatible H-FK61 low-dispersion catalog proxy has ΔPgF ≈ +0.0315. The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
      glass: "H-FK61 catalog proxy; 497816 — low-dispersion fluorine/phosphate-crown class (supplier unproven)",
      cemented: "D1",
      role: "Positive component of the G1 cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7408,
      vd: 27.76,
      indexReference: "d",
      fl: -34.167712,
      glass: "E-FD13 catalog proxy; 741278 — dense-flint class (supplier unproven)",
      cemented: "D1",
      role: "Negative component of the G1 cemented pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6584,
      vd: 50.85,
      indexReference: "d",
      fl: 71.025958,
      glass: "BACED5 catalog proxy; 658509 — dense-crown class (supplier unproven)",
      role: "Rear positive element of G1.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.4875,
      vd: 70.44,
      indexReference: "d",
      fl: -57.134473,
      glass: "H-QK3L catalog proxy; 487704 — low-index crown class (supplier unproven)",
      role: "Single negative G2 axial focus element.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 25.72,
      indexReference: "d",
      fl: -39.904671,
      glass: "H-ZF13 catalog proxy; 785257 — dense-flint class (supplier unproven)",
      cemented: "D2",
      role: "Negative component of the positive G3a cemented pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5928,
      vd: 68.62,
      indexReference: "d",
      fl: 26.087626,
      apd: "inferred",
      apdNote: "The compatible FCD515 low-dispersion catalog proxy has ΔPgF ≈ +0.0157. The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
      glass: "FCD515 catalog proxy; 593686 — low-dispersion crown class (supplier unproven)",
      cemented: "D2",
      role: "Positive component of the positive G3a cemented pair.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: -61.276307,
      glass: "N-LASF44 catalog proxy; 804465 — lanthanum high-index class (supplier unproven)",
      role: "Single negative G3b / VC stabilization element.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.27,
      indexReference: "d",
      fl: 21.025692,
      glass: "J-LASFH6 catalog proxy; 806333 — high-index flint class (supplier unproven)",
      cemented: "D3",
      role: "Positive component of the G3c cemented pair.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.4875,
      vd: 70.44,
      indexReference: "d",
      fl: -38.937873,
      glass: "H-QK3L catalog proxy; 487704 — low-index crown class (supplier unproven)",
      cemented: "D3",
      role: "Negative component of the G3c cemented pair.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.5182,
      vd: 58.96,
      indexReference: "d",
      fl: -89.666436,
      glass: "S-NSL3 catalog proxy; 518590 — crown class (supplier unproven)",
      role: "Rear negative meniscus of G3c, convex toward the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 54.526, d: 7.5, nd: 1.9037, elemId: 1, sd: 25.2 },
    { label: "2", R: 303.46, d: 3.357, nd: 1.0, elemId: 0, sd: 24.18 },
    { label: "3", R: 33.793, d: 8.0, nd: 1.497, elemId: 2, sd: 21.147 },
    { label: "4", R: -954.295, d: 1.2, nd: 1.7408, elemId: 3, sd: 20.407 },
    { label: "5", R: 26.015, d: 1.501, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "6", R: 32.867, d: 4.538, nd: 1.6584, elemId: 4, sd: 16.0 },
    { label: "7", R: 104.539, d: 4.538, nd: 1.0, elemId: 0, sd: 17.178 },
    { label: "9", R: -685.18, d: 0.7, nd: 1.4875, elemId: 5, sd: 14.339 },
    { label: "10", R: 29.043, d: 13.725, nd: 1.0, elemId: 0, sd: 13.44 },
    { label: "STO", R: 1e15, d: 1.884, nd: 1.0, elemId: 0, sd: 11.170016651708 },
    { label: "12", R: 38.815, d: 0.7, nd: 1.7847, elemId: 6, sd: 11.634 },
    { label: "13", R: 17.194, d: 5.552, nd: 1.5928, elemId: 7, sd: 11.1 },
    { label: "14", R: -135.287, d: 1.0, nd: 1.0, elemId: 0, sd: 10.851 },
    { label: "15", R: 409.346, d: 0.7, nd: 1.8042, elemId: 8, sd: 10.433 },
    { label: "16", R: 43.95, d: 6.403, nd: 1.0, elemId: 0, sd: 10.17 },
    { label: "18", R: 60.05, d: 9.234, nd: 1.8061, elemId: 9, sd: 15.8 },
    { label: "19", R: -21.993, d: 2.369, nd: 1.4875, elemId: 10, sd: 15.8 },
    { label: "20", R: 143.555, d: 6.6, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "21", R: -25.154, d: 1.0, nd: 1.5182, elemId: 11, sd: 14.5 },
    { label: "22", R: -55.588, d: 17.348206751055, nd: 1.0, elemId: 0, sd: 16.8 },
  ],

  asph: {},

  // Published 1/40 row mapped by 0.80 m / 3.4841132476 m = 0.229613661542.
  focusPositions: [0, 0.229613661542, 1],
  var: {
    "7": [4.538, 5.87, 11.462],
    "10": [13.725, 12.393, 6.801],
  },
  varLabels: [
    ["7", "G1–G2"],
    ["10", "G2–STO"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2 / F", fromSurface: "9", toSurface: "10" },
    { text: "G3a", fromSurface: "12", toSurface: "14" },
    { text: "G3b / VC", fromSurface: "15", toSurface: "16" },
    { text: "G3c", fromSurface: "18", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  // ZEISS marketed MFD is 0.80 m; the rounded patent MOD conjugate is about 0.810 m object-to-image.
  closeFocusM: 0.8,
  focusDescription: "PUBLISHED inner focus: G2 moves imageward through INF, |β|=0.025, and MOD |β|=0.125 states.",

  nominalFno: 1.85,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
