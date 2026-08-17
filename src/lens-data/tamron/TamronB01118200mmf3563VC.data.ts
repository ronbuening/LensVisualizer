import type { LensDataInput } from "../../types/optics.js";

/**
 * Tamron 18-200mm f/3.5-6.3 Di III VC (B011)
 *
 * Data source: JP 2012-181525 A, Example 1 (第1実施形態).
 * Production correlation: TAMRON B011 18-200mm F/3.5-6.3 Di III VC.
 * Patent prescription is retained unscaled: 18.50 / 60.00 / 194.00 mm at infinity,
 * with modeled F-numbers 3.56 / 5.50 / 6.47. Marketing values remain separate.
 *
 * Physical design: 17 physical lenses in 13 air-spaced groups. The hybrid asphere
 * is represented by two optical media entries (resin + glass substrate), so the
 * authored elements array contains 18 entries while elementCount remains 17.
 * Five patent aspherical surfaces are retained with the patent's standard conic K.
 *
 * Zoom variable gaps: D6, D15, D16 (STO->F), D18, and the normalized rear image gap.
 * D16 and D18 reverse between the middle and telephoto states. The aperture stop and
 * M carrier co-move to source precision (STO->M ~= 12.308 mm at all three states).
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only a telephoto
 * close-focus row; wide and middle close-focus rows are absent, and the tele row does
 * not uniquely determine a continuous mechanism after reference-plane normalization.
 * Therefore all authored var pairs are infinity-only zoom states with identical
 * [infinity, close] values. closeFocusM records the marketed 0.5 m MOD only; it does
 * not imply a reconstructed LensVisualizer focus state.
 *
 * Rear-plate normalization: patent surfaces 34-35 form a 2.000 mm, nd=1.51680
 * plane-parallel plate. It is omitted under the project sensor-cover/filter rule.
 * The last authored surface therefore uses the independently verified air-equivalent
 * Gaussian image gap from patent surface 33: 14.8252828501 / 42.2719338920 /
 * 51.6793316884 mm for wide / middle / tele. Raw patent D33 values are
 * 12.500 / 39.912 / 49.348 mm and are preserved in the audit artifacts.
 *
 * Semi-diameters are inferred, not patent-published. They were derived from exact
 * meridional ray envelopes at all three infinity zoom states using the modeled
 * wide-open stop, the full on-axis pupil, the default 0.6x off-axis field bundle,
 * and the full-field chief ray, then given a small mechanical margin. The STO.sd value
 * is the maximum required mechanical clear radius across the defined zoom states; the
 * nominalFno array supplies the effective per-position wide-open aperture. They were
 * checked for positive edge thickness, actual rim slope, conic domain, shared-band
 * cross-gap intrusion, ray containment, and absence of geometry-forced render trim.
 *
 * Spectral discipline: the patent publishes nd and vd only. No element-level nC, nF,
 * ng, or dPgF values are invented. Glass strings are vendor-neutral classes/codes or
 * explicit Unmatched labels because the patent does not identify a glass vendor.
 *
 * Manufacturer identity/specification sources:
 * https://www.tamron.com/global/consumer/lenses/b011/
 * https://www.tamron.com/global/consumer/lenses/b011/spec.html
 */

const LENS_DATA = {
  key: "tamron-b011-18-200mm-f35-63-di-iii-vc",
  maker: "Tamron",
  name: "TAMRON 18-200mm f/3.5-6.3 Di III VC (B011)",
  subtitle: "JP 2012-181525 A Example 1 - unscaled patent prescription correlated to Model B011",
  specs: [
    "17 ELEMENTS / 13 GROUPS",
    "18.50-194.00 mm PATENT EFL",
    "f/3.56-6.47 PATENT",
    "5 ASPHERICAL SURFACES",
    "INNER FOCUS / VC",
  ],

  focalLengthMarketing: [18, 200],
  focalLengthDesign: [18.49979079905787, 193.99844549317712],
  apertureMarketing: 3.5,
  apertureDesign: 3.56,
  lensMounts: ["sony-fe", "canon-ef-m"],
  imageFormat: "aps-c",
  patentNumber: "JP 2012-181525 A",
  patentAuthors: ["Nobuyuki Adachi", "Hisayuki Yamanaka"],
  patentAssignees: ["Tamron Optical Foshan Co., Ltd."],
  patentYear: 2012,
  elementCount: 17,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "G1 front cemented element",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -118.6898913152981,
      glass: "904313 - lanthanum-flint class",
      cemented: "J1",
      role: "Front component of the weak cemented pair in positive group G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "G1 rear cemented element",
      type: "Biconvex Positive",
      nd: 1.435,
      vd: 95.0,
      fl: 120.81525651881772,
      glass: "K-CaFK95 (Sumita catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "K-CaFK95 catalog-equivalent fluor-crown; coefficient-derived ΔPgF ≈ +0.0477. The patent identifies only nd/vd, not the production supplier.",
      cemented: "J1",
      role: "Ultra-low-dispersion positive partner in the front cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "G1 positive singlet",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 92.15630067956499,
      glass: "729547 - lanthanum-crown class",
      role: "Positive singlet completing the front positive zoom group.",
    },
    {
      id: 4,
      name: "L4r",
      diagramLabel: "4r",
      label: "G2 hybrid asphere resin layer",
      type: "Hybrid Resin Layer (1x Asph)",
      nd: 1.5146,
      vd: 50.0,
      fl: -304.6034477520645,
      glass: "Unmatched (hybrid asphere resin/polymer, nd=1.51460, vd=50.0)",
      cemented: "H1",
      role: "Thin aspherical resin layer bonded to the G2 hybrid substrate.",
    },
    {
      id: 5,
      name: "L4g",
      diagramLabel: "4",
      label: "G2 hybrid asphere glass substrate",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -20.375268759619992,
      glass: "883408 - high-index lanthanum-flint class",
      cemented: "H1",
      role: "High-index glass substrate of the hybrid negative element.",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "5",
      label: "G2 negative singlet",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      fl: -29.78505126257319,
      glass: "804465 - lanthanum-flint class",
      role: "Negative zoom-group element following the hybrid asphere.",
    },
    {
      id: 7,
      name: "L6",
      diagramLabel: "6",
      label: "G2 positive singlet",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      fl: 21.379828726303618,
      glass: "923209 - dense-flint class",
      role: "Strong positive element embedded within the net-negative G2 group.",
    },
    {
      id: 8,
      name: "L7",
      diagramLabel: "7",
      label: "G2 rear aspherical singlet",
      type: "Negative Meniscus (1x Asph)",
      nd: 1.80139,
      vd: 45.4,
      fl: -31.67314434393763,
      glass: "M-TAF31 (Hoya catalog equivalent; production supplier unspecified)",
      role: "Rear negative aspherical element of G2 adjacent to the stop cavity.",
    },
    {
      id: 9,
      name: "L8",
      diagramLabel: "8",
      label: "F focusing element",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 34.71260279519849,
      glass: "694532 - low-Tg molded lanthanum-crown class",
      role: "Single positive inner-focus element immediately behind the aperture stop.",
    },
    {
      id: 10,
      name: "L9",
      diagramLabel: "9",
      label: "MA cemented positive element",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 20.719068053642527,
      glass: "497816 - low-dispersion crown class",
      cemented: "J2",
      role: "Positive front component of the first MA cemented pair.",
    },
    {
      id: 11,
      name: "L10",
      diagramLabel: "10",
      label: "MA cemented negative element",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: -50.87166822646843,
      glass: "806333 - high-index flint class",
      cemented: "J2",
      role: "Negative rear component of the first MA cemented pair.",
    },
    {
      id: 12,
      name: "L11",
      diagramLabel: "11",
      label: "MA cemented negative element",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -22.725164014103445,
      glass: "904313 - lanthanum-flint class",
      cemented: "J3",
      role: "Negative front component of the second MA cemented pair.",
    },
    {
      id: 13,
      name: "L12",
      diagramLabel: "12",
      label: "MA cemented positive element",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 22.496083264287122,
      glass: "497816 - low-dispersion crown class",
      cemented: "J3",
      role: "Positive rear component of the second MA cemented pair.",
    },
    {
      id: 14,
      name: "L13",
      diagramLabel: "13",
      label: "MVC aspherical positive element",
      type: "Biconvex Positive (1x Asph)",
      nd: 1.68893,
      vd: 31.1,
      fl: 16.449519517328504,
      glass: "689311 - low-Tg molded flint class",
      cemented: "J4",
      role: "Positive front component of the laterally shifted VC cemented group.",
    },
    {
      id: 15,
      name: "L14",
      diagramLabel: "14",
      label: "MVC negative element",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -9.111585241774701,
      glass: "835427 - high-index lanthanum-flint class",
      cemented: "J4",
      role: "Negative rear component that makes the MVC pair net negative.",
    },
    {
      id: 16,
      name: "L15",
      diagramLabel: "15",
      label: "MC positive singlet",
      type: "Biconvex Positive",
      nd: 1.54072,
      vd: 47.2,
      fl: 26.751054861601798,
      glass: "541472 - flint class",
      role: "Positive front singlet of the MC rear relay.",
    },
    {
      id: 17,
      name: "L16",
      diagramLabel: "16",
      label: "MC negative singlet",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -22.633215114969623,
      glass: "883408 - high-index lanthanum-flint class",
      role: "Negative middle singlet of the MC rear relay.",
    },
    {
      id: 18,
      name: "L17",
      diagramLabel: "17",
      label: "MC rear positive singlet",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.2,
      fl: 47.194550731706926,
      glass: "673322 - dense-flint class",
      role: "Final positive singlet before the normalized image-space gap.",
    },
  ],

  surfaces: [
    { label: "2", R: 132.68, d: 1.5, nd: 1.90366, elemId: 1, sd: 27.3 },
    { label: "3", R: 58.992, d: 7.413, nd: 1.435, elemId: 2, sd: 26.7 },
    { label: "4", R: -463.265, d: 0.2, nd: 1.0, elemId: 0, sd: 26.7 },
    { label: "5", R: 58.944, d: 5.895, nd: 1.72916, elemId: 3, sd: 26.5 },
    { label: "6", R: 459.705, d: 0.8, nd: 1.0, elemId: 0, sd: 26.3 },
    { label: "7A", R: 52.006, d: 0.2, nd: 1.5146, elemId: 4, sd: 11.5 },
    { label: "8", R: 38.999, d: 1.2, nd: 1.883, elemId: 5, sd: 11.2 },
    { label: "9", R: 12.134, d: 6.494, nd: 1.0, elemId: 0, sd: 8.9 },
    { label: "10", R: -24.705, d: 0.8, nd: 1.8042, elemId: 6, sd: 7.6 },
    { label: "11", R: 798.423, d: 0.2, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "12", R: 38.348, d: 3.0, nd: 1.92286, elemId: 7, sd: 7.2 },
    { label: "13", R: -39.115, d: 1.264, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "14", R: -17.349, d: 1.0, nd: 1.80139, elemId: 8, sd: 7.0 },
    { label: "15A", R: -56.221, d: 18.053, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "STO", R: 1e15, d: 4.056, nd: 1.0, elemId: 0, sd: 6.8270416246155845 },
    { label: "17A", R: 38.831, d: 2.6, nd: 1.6935, elemId: 9, sd: 9.0 },
    { label: "18A", R: -61.605, d: 5.652, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "19", R: 19.089, d: 5.206, nd: 1.497, elemId: 10, sd: 9.5 },
    { label: "20", R: -20.334, d: 1.656, nd: 1.8061, elemId: 11, sd: 9.4 },
    { label: "21", R: -41.8, d: 1.237, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "22", R: 22.199, d: 1.221, nd: 1.90366, elemId: 12, sd: 8.7 },
    { label: "23", R: 10.389, d: 3.774, nd: 1.497, elemId: 13, sd: 7.8 },
    { label: "24", R: 129.045, d: 1.1, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "25A", R: 244.003, d: 3.5, nd: 1.68893, elemId: 14, sd: 7.5 },
    { label: "26", R: -11.815, d: 0.8, nd: 1.83481, elemId: 15, sd: 7.3 },
    { label: "27", R: 22.012, d: 1.905, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "28", R: 36.993, d: 7.0, nd: 1.54072, elemId: 16, sd: 7.2 },
    { label: "29", R: -22.175, d: 2.991, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "30", R: -13.027, d: 1.0, nd: 1.883, elemId: 17, sd: 7.9 },
    { label: "31", R: -38.763, d: 0.2, nd: 1.0, elemId: 0, sd: 8.9 },
    { label: "32", R: 98.457, d: 3.051, nd: 1.6727, elemId: 18, sd: 9.8 },
    { label: "33", R: -46.273, d: 14.825282850114665, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: 2.11773e-5,
      A6: -7.42565e-8,
      A8: 2.76094e-10,
      A10: 4.23754e-13,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: -2.56488e-6,
      A6: -1.77205e-8,
      A8: -1.29711e-9,
      A10: 1.69949e-11,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 2.50125,
      A4: -9.11521e-6,
      A6: -7.20102e-7,
      A8: 1.32972e-8,
      A10: -1.24641e-10,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: 1.01753e-5,
      A6: -8.28466e-7,
      A8: 1.46868e-8,
      A10: -1.30385e-10,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 4.27471e-5,
      A6: -5.26048e-7,
      A8: 1.52615e-8,
      A10: -1.07325e-10,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [18.5, 60, 194],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "6": [
      [0.8, 0.8],
      [25.131, 25.131],
      [55.897, 55.897],
    ],
    "15A": [
      [18.053, 18.053],
      [4.815, 4.815],
      [1.05, 1.05],
    ],
    STO: [
      [4.056, 4.056],
      [5.655, 5.655],
      [1.898, 1.898],
    ],
    "18A": [
      [5.652, 5.652],
      [4.054, 4.054],
      [7.81, 7.81],
    ],
    "33": [
      [14.825282850114665, 14.825282850114665],
      [42.27193389202423, 42.27193389202423],
      [51.67933168844558, 51.67933168844558],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["15A", "D15"],
    ["STO", "D16"],
    ["18A", "D18"],
    ["33", "BF (cover-normalized)"],
  ],

  groups: [
    { text: "G1", fromSurface: "2", toSurface: "6" },
    { text: "G2", fromSurface: "7A", toSurface: "15A" },
    { text: "F", fromSurface: "17A", toSurface: "18A" },
    { text: "MA", fromSurface: "19", toSurface: "24" },
    { text: "MVC", fromSurface: "25A", toSurface: "27" },
    { text: "MC", fromSurface: "28", toSurface: "33" },
  ],

  doublets: [
    { text: "J1", fromSurface: "2", toSurface: "4" },
    { text: "H1", fromSurface: "7A", toSurface: "9" },
    { text: "J2", fromSurface: "19", toSurface: "21" },
    { text: "J3", fromSurface: "22", toSurface: "24" },
    { text: "J4", fromSurface: "25A", toSurface: "27" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "Patent inner focus uses the single positive F element as the focusing group. " +
    "Focus status NO_INTERNAL_RECONSTRUCTION: only the three published infinity zoom states are modeled; " +
    "0.5 m is the marketed MOD, not a reconstructed close-focus state.",

  nominalFno: [3.56, 5.5, 6.47],
  fstopSeries: [3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 40],
  maxFstop: 40,
  apertureBlades: 7,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
