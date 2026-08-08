import type { LensDataInput } from "../../types/optics.js";

/**
 * smc PENTAX-DA 16-45mm F4 ED AL
 *
 * Source prescription: US 7,106,520 B2, Embodiment 8 (Table 8; Figs. 29 and 31).
 * Production correlation: RICOH IMAGING / PENTAX official product literature.
 * Native patent scale is retained; no focal-length scaling is applied.
 *
 * The patent publishes four infinity-focus zoom states at 16.30, 22.59, 31.90, and 43.70 mm. Variable gaps d8, d15,
 * d18, and fB are transcribed from those states. The diaphragm is 1.60 mm object-side of patent surface 9, so patent
 * d8 is split into surface 8 -> STO and STO -> surface 9 while preserving surface 9's axial station.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G1 alone performs focusing but gives no finite-focus
 * table. Close-focus values at the production 0.28 m MFD were independently solved with the image plane fixed and G1
 * constrained to rigid translation. The resulting tele-state paraxial magnification is |m| = 0.25749, consistent with
 * the manufacturer's 0.26x specification. These close-focus spacings are modeling values, not patent-published rows.
 *
 * The patent prose says G1 reverses direction somewhere during W->T zoom, but its four Table 8 samples do not bracket
 * that reversal. Only the published control points are represented; no unsampled reversal path is invented.
 *
 * The patent prints TLW = 147.63 mm and TLT = 131.39 mm in Table 8, but those values contradict both the prescription
 * sum and Table 10 condition (5). The model uses the complete prescription plus published fB values, yielding tracks of
 * 166.59, 148.54, 137.82, and 135.47 mm and TLW/TLT = 1.22972, which agrees with Table 10's 1.23.
 *
 * Physical element count is 13. The elements array contains 14 modeled media because the thin resin aspherical layer on
 * L41 is represented separately from its glass substrate, as required for a hybrid/composite element.
 *
 * Semi-diameters are Stage-2 modeled clear apertures. The patent publishes none. They were derived by exact meridional
 * tracing over all four zoom states at infinity and the constrained 0.28 m close-focus states, then checked for edge
 * thickness, actual rim slope, conic domain, shared-band cross-gap intrusion, and full-field containment. Surface 2/3
 * and the G3 cemented pair are the binding clear-aperture locations; no layout setting is used to conceal invalid
 * geometry.
 *
 * Glass names are vendor-neutral classes because the patent names no glass supplier. nC/nF/ng/dPgF values on matched
 * elements come from current representative OHARA or HIKARI catalog entries that reproduce the patent nd/vd coordinate;
 * they are catalog-derived modeling data, not patent-published line indices. The 1.52538 / 56.3 glass remains
 * unmatched.
 */

const LENS_DATA = {
  key: "pentax-smc-da-16-45-f4-ed-al",
  name: "PENTAX SMC DA 16-45mm f/4 ED AL",
  maker: "Pentax",
  subtitle: "US 7,106,520 B2, Embodiment 8 — native-scale production correlation",
  specs: [
    "13 ELEMENTS / 10 GROUPS",
    "16-45 mm f/4 MARKETING",
    "16.30-43.70 mm / F4.1 MODEL",
    "APS-C / PENTAX K",
    "2 ASPHERICAL SURFACES",
  ],
  focalLengthMarketing: [16, 45],
  focalLengthDesign: [16.300559, 43.69026],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "US 7,106,520 B2",
  patentAuthors: ["Masakazu Saori"],
  patentAssignees: ["Pentax Corporation"],
  patentYear: 2006,
  elementCount: 13,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: -38.102247,
      glass: "697555 class",
      nC: 1.692974,
      nF: 1.705522,
      ng: 1.71234,
      dPgF: -0.0082,
      role: "G1 front negative meniscus",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: -61.650247,
      glass: "713539 class",
      nC: 1.708974,
      nF: 1.72221,
      ng: 1.729435,
      dPgF: -0.0084,
      role: "G1 negative meniscus",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.52538,
      vd: 56.3,
      indexReference: "d",
      fl: -390.552228,
      glass: "Unmatched (nd=1.52538, vd=56.3)",
      role: "G1 weak negative aspherical element",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: 116.028461,
      glass: "847238 class",
      nC: 1.836488,
      nF: 1.872096,
      ng: 1.894189,
      dPgF: 0.0175,
      role: "G1 positive element",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 178.434143,
      glass: "487702 class",
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
      dPgF: 0.0022,
      role: "G2 positive element",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 64.959911,
      glass: "497816 ED class",
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      dPgF: 0.028,
      role: "G2 ED-class positive element",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 34.949005,
      glass: "487702 class",
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
      dPgF: 0.0022,
      cemented: "D1",
      role: "G2 positive member of cemented pair",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      indexReference: "d",
      fl: -56.991003,
      glass: "673321 class",
      nC: 1.666607,
      nF: 1.687564,
      ng: 1.700114,
      dPgF: 0.0093,
      cemented: "D1",
      role: "G2 negative member of cemented pair",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 27.791135,
      glass: "805254 class",
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847286,
      dPgF: 0.0158,
      cemented: "D2",
      role: "G3 positive member of cemented pair",
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      fl: -17.767841,
      glass: "762401 class",
      nC: 1.756385,
      nF: 1.775388,
      ng: 1.786343,
      dPgF: -0.0001,
      cemented: "D2",
      role: "G3 negative member of cemented pair",
    },
    {
      id: 11,
      name: "L41r",
      label: "L41 resin",
      type: "Thin Resin Aspherical Layer",
      nd: 1.52972,
      vd: 42.7,
      indexReference: "d",
      fl: 93236.998823,
      glass: "Resin layer (patent hybrid asphere)",
      cemented: "H1",
      role: "G4 hybrid aspherical resin layer",
    },
    {
      id: 12,
      name: "L41g",
      label: "L41 glass substrate",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      indexReference: "d",
      fl: 47.559478,
      glass: "589612 class",
      nC: 1.586188,
      nF: 1.595824,
      ng: 1.601034,
      dPgF: -0.0018,
      cemented: "H1",
      role: "G4 hybrid positive glass substrate",
    },
    {
      id: 13,
      name: "L42",
      label: "L42",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      fl: -26.051004,
      glass: "806333 class",
      nC: 1.799034,
      nF: 1.823209,
      ng: 1.837482,
      dPgF: 0.002,
      cemented: "D3",
      role: "G4 negative member of rear cemented pair",
    },
    {
      id: 14,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 31.548753,
      glass: "487702 class",
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
      dPgF: 0.0022,
      cemented: "D3",
      role: "G4 positive rear element",
    },
  ],

  surfaces: [
    { label: "1", R: 61.5, d: 1.6, nd: 1.6968, elemId: 1, sd: 22.5 },
    { label: "2", R: 18.346, d: 8.79, nd: 1, elemId: 0, sd: 16.1 },
    { label: "3", R: 89.373, d: 1.5, nd: 1.713, elemId: 2, sd: 15.97 },
    { label: "4", R: 29.259, d: 4.67, nd: 1, elemId: 0, sd: 16.5 },
    { label: "5", R: 58.477, d: 2.2, nd: 1.52538, elemId: 3, sd: 17 },
    { label: "6A", R: 44.918, d: 4.98, nd: 1, elemId: 0, sd: 17 },
    { label: "7", R: 1012.5, d: 2.6, nd: 1.84666, elemId: 4, sd: 17 },
    { label: "8", R: -108.664, d: 53.21, nd: 1, elemId: 0, sd: 17 },
    { label: "STO", R: 1e15, d: 1.6, nd: 1, elemId: 0, sd: 7.373267 },
    { label: "9", R: 104.8, d: 2.1, nd: 1.48749, elemId: 5, sd: 12 },
    { label: "10", R: -508.34, d: 0.2, nd: 1, elemId: 0, sd: 12.3 },
    { label: "11", R: 63.95, d: 3.7, nd: 1.497, elemId: 6, sd: 12.5 },
    { label: "12", R: -63.95, d: 0.52, nd: 1, elemId: 0, sd: 12.7 },
    { label: "13", R: 40.113, d: 5.94, nd: 1.48749, elemId: 7, sd: 13 },
    { label: "14", R: -28.179, d: 1.3, nd: 1.6727, elemId: 8, sd: 13 },
    { label: "15", R: -108.316, d: 2.66, nd: 1, elemId: 0, sd: 13 },
    { label: "16", R: -58.917, d: 3.23, nd: 1.80518, elemId: 9, sd: 11.2 },
    { label: "17", R: -16.614, d: 1.2, nd: 1.762, elemId: 10, sd: 11.12 },
    { label: "18", R: 75.438, d: 15.4, nd: 1, elemId: 0, sd: 12 },
    { label: "19A", R: 278.456, d: 0.1, nd: 1.52972, elemId: 11, sd: 12.7 },
    { label: "20", R: 280, d: 4.76, nd: 1.58913, elemId: 12, sd: 12.7 },
    { label: "21", R: -30.938, d: 0.1, nd: 1, elemId: 0, sd: 13 },
    { label: "22", R: 575.504, d: 1.3, nd: 1.8061, elemId: 13, sd: 12.9 },
    { label: "23", R: 20.24, d: 5.71, nd: 1.48749, elemId: 14, sd: 12.4 },
    { label: "24", R: -58.125, d: 37.22, nd: 1, elemId: 0, sd: 12.4 },
  ],

  asph: {
    "6A": {
      K: -1,
      A4: -1.771e-5,
      A6: -4.591e-9,
      A8: -5.69e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: -1,
      A4: -1.193e-5,
      A6: 2.91e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [16.3, 22.59, 31.9, 43.7],
  zoomLabels: ["Wide", "Tele"],

  var: {
    // G1 -> STO. Close values are the G1-only constrained reconstruction at 0.28 m.
    "8": [
      [53.21, 58.992754579263],
      [30.54, 35.652023961582],
      [13.78, 18.549584853001],
      [3.41, 8.100528920844],
    ],
    // Zoom-only gaps: no independent close-focus motion is assigned to G2, G3, or G4.
    "15": [
      [2.66, 2.66],
      [5.71, 5.71],
      [10.5, 10.5],
      [15.76, 15.76],
    ],
    "18": [
      [15.4, 15.4],
      [12.34, 12.34],
      [7.55, 7.55],
      [2.3, 2.3],
    ],
    "24": [
      [37.22, 37.22],
      [41.85, 41.85],
      [47.89, 47.89],
      [55.9, 55.9],
    ],
  },
  varLabels: [
    ["8", "G1→STO"],
    ["15", "G2→G3"],
    ["18", "G3→G4"],
    ["24", "BF"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "15" },
    { text: "G3 (-)", fromSurface: "16", toSurface: "18" },
    { text: "G4 (+)", fromSurface: "19A", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "H1", fromSurface: "19A", toSurface: "21" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
  ],

  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent assigns focusing to G1 only but publishes no finite-focus spacing table. " +
    "At the production 0.28 m MFD, G1 translation was solved independently with the image plane and G2-G4 fixed; " +
    "the tele-state paraxial magnification is -0.25749 (|m|≈0.26). Close-focus d8 values are reconstructed, not " +
    "patent-published.",
  closeFocusM: 0.28,
  nominalFno: 4.1,
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 8,
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
