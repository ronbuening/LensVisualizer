import type { LensDataInput } from "../../types/optics.js";

/**
 * APPLE WIDE 4.36mm f/1.6 (Apple iPhone 12) — patent model
 *
 * Source: US 2018/0364457 A1, Example 7 / lens system 710, Tables 7A–7F.
 * Seven air-separated refractive elements; all fourteen lens surfaces are aspheric.
 * Scale: native patent scale (s = 1.0); no production rescaling.
 *
 * Product correlation: Apple documents the iPhone 12 Main camera as f/1.6 with a seven-element lens, but Apple does not
 * identify this patent/example as the production prescription. The correlation is therefore plausible, not confirmed.
 *
 * Source corrections / normalization:
 * - Radius signs follow the geometric drawings and the independently reproduced EFL: center to image-right is positive.
 *   The patent sign-convention sentence swaps its object/image parenthetical labels.
 * - The printed asphere equation omits A12 and hard-codes a minus before A14; the signed Tables 7B–7E coefficients govern.
 * - Source Stop S3 has a contradictory -0.035 mm following spacing. The physical S2→S4 air gap is 0.050 mm. Because
 *   Fig. 7A / ¶0148 place the stop in that gap but do not dimension it reliably, the ordinary sequential model uses a
 *   neutral mid-gap inference: S2→STO = 0.025 mm and STO→S4 = 0.025 mm. This is modeled, not a published iris station.
 * - STO sd = 1.242442 mm is calibrated from the modeled EFL to the published f/1.65; it is not an independently published
 *   physical diaphragm radius.
 * - Semi-diameters are modeled from exact meridional ray envelopes and then constrained by edge-thickness, aspheric
 *   rim-slope, conic-domain, and shared-band cross-gap clearance checks. They are not patent-listed clear apertures.
 * - The Table 7A rear IR/filter plate is represented with rearPlates rather than as a lens element/surface.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. Example 7 publishes only the infinity prescription and no motion law. closeFocusM
 * is a UI-only 0.12 m family fallback from Apple's published iPhone 12 Pro Wide minimum-focus-distance example; Apple does
 * not publish an iPhone 12 Main value in the cited material. No focus var spacings are authored.
 */
const LENS_DATA = {
  key: "apple-iphone-12-main-wide",
  maker: "Apple",
  name: "APPLE WIDE 4.36mm f/1.6 (Apple iPhone 12)",
  subtitle: "US 2018/0364457 A1 Example 7 — plausible iPhone 12 Main correlation; not Apple-confirmed",
  specs: [
    "7 ELEMENTS / 7 GROUPS",
    "PATENT f = 4.361 mm; MODEL EFL = 4.3566 mm",
    "f/1.65 DESIGN; f/1.6 MARKETED",
    "80.3° FULL FOV",
    "14 ASPHERICAL SURFACES",
  ],

  focalLengthDesign: 4.356606,
  apertureMarketing: 1.6,
  apertureDesign: 1.65,
  lensMounts: ["fixed-lens-camera"],
  imageCircleMm: 7.5,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 80.3,
    maxTraceFieldDeg: 40.15,
  },
  patentNumber: "US 2018/0364457 A1",
  patentAuthors: ["Yuhong Yao", "Yoshikazu Shinohara", "Lin-Yao Liao"],
  patentAssignees: ["Apple Inc."],
  patentYear: 2018,
  elementCount: 7,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.678,
      vd: 55.3,
      indexReference: "d",
      fl: 5.653969,
      glass: "678553 lanthanum-crown class (supplier/material unconfirmed)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.545,
      vd: 56.0,
      indexReference: "d",
      fl: 23.144737,
      glass: "Unmatched (545560 patent material coordinate)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.671,
      vd: 19.5,
      indexReference: "d",
      fl: -13.762403,
      glass: "Unmatched (671195 patent material coordinate)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.545,
      vd: 56.0,
      indexReference: "d",
      fl: 11.433731,
      glass: "Unmatched (545560 patent material coordinate)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.671,
      vd: 19.5,
      indexReference: "d",
      fl: -8.022455,
      glass: "Unmatched (671195 patent material coordinate)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.545,
      vd: 56.0,
      indexReference: "d",
      fl: 7.679541,
      glass: "Unmatched (545560 patent material coordinate)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.545,
      vd: 56.0,
      indexReference: "d",
      fl: -16.719608,
      glass: "Unmatched (545560 patent material coordinate)",
    },
  ],

  surfaces: [
    { label: "1A", R: 3.368, d: 0.454, nd: 1.678, elemId: 1, sd: 1.55 },
    { label: "2A", R: 26.231, d: 0.025, nd: 1.0, elemId: 0, sd: 1.45 },
    { label: "STO", R: 1e15, d: 0.025, nd: 1.0, elemId: 0, sd: 1.242442 },
    { label: "4A", R: 68.151, d: 0.447, nd: 1.545, elemId: 2, sd: 1.38 },
    { label: "5A", R: -15.443, d: 0.065, nd: 1.0, elemId: 0, sd: 1.42 },
    { label: "6A", R: 3.535, d: 0.27, nd: 1.671, elemId: 3, sd: 1.45 },
    { label: "7A", R: 2.478, d: 0.557, nd: 1.0, elemId: 0, sd: 1.45 },
    { label: "8A", R: -194.992, d: 0.603, nd: 1.545, elemId: 4, sd: 1.5 },
    { label: "9A", R: -6.045, d: 0.231, nd: 1.0, elemId: 0, sd: 1.6 },
    { label: "10A", R: -1.641, d: 0.359, nd: 1.671, elemId: 5, sd: 1.58 },
    { label: "11A", R: -2.568, d: 0.059, nd: 1.0, elemId: 0, sd: 1.7 },
    { label: "12A", R: 2.214, d: 0.679, nd: 1.545, elemId: 6, sd: 2.25 },
    { label: "13A", R: 4.192, d: 0.45, nd: 1.0, elemId: 0, sd: 2.8 },
    { label: "14A", R: 1.948, d: 0.65, nd: 1.545, elemId: 7, sd: 3.0 },
    { label: "15A", R: 1.416, d: 0.394, nd: 1.0, elemId: 0, sd: 3.35 },
  ],

  rearPlates: [
    {
      label: "IR",
      thicknessMm: 0.15,
      nd: 1.517,
      vd: 64.2,
      glass: "517642 BK7-type rear plate class (supplier unconfirmed)",
      gapAfterMm: 0.581,
      source: "US 2018/0364457 A1, Example 7, Table 7A surfaces 16–17",
    },
  ],

  asph: {
    "1A": { K: 0, A4: -0.0344743, A6: 0.00674888, A8: -0.0296218, A10: 0.0155924, A12: -0.00221316, A14: 0 },
    "2A": { K: 0, A4: -0.0627155, A6: -0.00509915, A8: 0.0272039, A10: -0.0152933, A12: 0.00328068, A14: 0 },
    "4A": { K: 0, A4: -0.0111696, A6: -0.0228545, A8: 0.0769463, A10: -0.0526124, A12: 0.0140864, A14: -0.00109968 },
    "5A": { K: 0, A4: 0.009286, A6: -0.00971708, A8: -0.00962688, A10: 0.00524733, A12: -0.00091593, A14: 0.000248834 },
    "6A": { K: 0, A4: -0.0732015, A6: 0.0260355, A8: -0.014495, A10: 0.00526982, A12: 0.00139273, A14: -0.000660225 },
    "7A": { K: 0, A4: -0.0804783, A6: 0.0462935, A8: -0.0349531, A10: 0.0227973, A12: -0.00783022, A14: 0.00117663 },
    "8A": { K: 0, A4: -0.0326817, A6: -0.00623032, A8: 0.00217401, A10: -0.00485828, A12: 0.00171949, A14: 0.000296148 },
    "9A": { K: 0, A4: -0.0774378, A6: 0.0626289, A8: -0.0682425, A10: 0.0492366, A12: -0.0183752, A14: 0.00263725 },
    "10A": {
      K: 0,
      A4: 0.0405724,
      A6: 0.000309326,
      A8: 0.0380031,
      A10: -0.0348428,
      A12: 0.0194087,
      A14: -0.00610262,
      A16: 0.000794906,
    },
    "11A": {
      K: 0,
      A4: -0.0386026,
      A6: 0.020506,
      A8: 0.0228231,
      A10: -0.0275874,
      A12: 0.0136669,
      A14: -0.00327438,
      A16: 0.000304947,
    },
    "12A": {
      K: -1,
      A4: -0.0618155,
      A6: 0.0338178,
      A8: -0.0191914,
      A10: 0.00551249,
      A12: -0.000864167,
      A14: 0.0000682043,
      A16: -0.00000205288,
    },
    "13A": {
      K: 0,
      A4: 0.0102626,
      A6: -0.00173677,
      A8: -0.00453206,
      A10: 0.00173567,
      A12: -0.000291549,
      A14: 0.0000241326,
      A16: -0.000000796272,
    },
    "14A": {
      K: -1,
      A4: -0.172955,
      A6: 0.0519549,
      A8: -0.0106579,
      A10: 0.00152322,
      A12: -0.000136015,
      A14: 0.00000661824,
      A16: -0.000000132761,
    },
    "15A": {
      K: -1,
      A4: -0.172321,
      A6: 0.0608467,
      A8: -0.0169687,
      A10: 0.00318908,
      A12: -0.000387618,
      A14: 0.0000295229,
      A16: -0.00000128364,
      A18: 0.0000000241956,
    },
  },

  var: {},
  varLabels: [],

  groups: [],
  doublets: [],

  closeFocusM: 0.12,
  focusDescription:
    "Example 7 publishes an infinity prescription only; no focus travel or minimum focus distance is established for this model.",

  nominalFno: 1.65,
  maxFstop: 1.65,
  fstopSeries: [1.65],

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
