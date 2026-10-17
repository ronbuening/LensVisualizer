import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * thickness, actual rim slope, conic domain, shared-band cross-gap intrusion, and full-field containment. Surface 1 was
 * reduced after a direct Figure 29 silhouette comparison showed that L11 should be close in height to L12-L14 rather
 * than substantially flared. Surface 2/3 and the G3 cemented pair remain the binding clear-aperture locations; no layout
 * setting is used to conceal invalid geometry.
 *
 * Glass names are vendor-neutral classes because the patent names no glass supplier. nC/nF/ng/dPgF values on matched
 * elements come from current representative OHARA or HIKARI catalog entries that reproduce the patent nd/vd coordinate;
 * they are catalog-derived modeling data, not patent-published line indices. The 1.52538 / 56.3 glass remains
 * unmatched.
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-smc-da-16-45-f4-ed-al",
  maker: "Pentax",
  name: "PENTAX SMC DA 16-45mm f/4 ED AL",
  subtitle: "US 7,106,520 B2, Embodiment 8 — native-scale production correlation",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "13 ELEMENTS / 10 GROUPS",
      "16-45 mm f/4 MARKETING",
      "16.30-43.70 mm / F4.1 MODEL",
      "APS-C / PENTAX K",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: [16, 45], design: [16.300559, 43.69026] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "US 7,106,520 B2",
    patentYear: 2006,
    authors: ["Masakazu Saori"],
    assignees: ["Pentax Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -38.102247,
      glass: "697555 class",
      role: "G1 front negative meniscus",
      diagramLabel: "L11",
      dPgF: -0.0082,
      nC: 1.692974,
      nF: 1.705522,
      ng: 1.71234,
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: -61.650247,
      glass: "713539 class",
      role: "G1 negative meniscus",
      diagramLabel: "L12",
      dPgF: -0.0084,
      nC: 1.708974,
      nF: 1.72221,
      ng: 1.729435,
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.52538,
      vd: 56.3,
      indexReference: "d",
      focalLengthMm: -390.552228,
      glass: "Unmatched (nd=1.52538, vd=56.3)",
      role: "G1 weak negative aspherical element",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 116.028461,
      glass: "847238 class",
      role: "G1 positive element",
      diagramLabel: "L14",
      dPgF: 0.0175,
      nC: 1.836488,
      nF: 1.872096,
      ng: 1.894189,
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 178.434143,
      glass: "487702 class",
      role: "G2 positive element",
      diagramLabel: "L21",
      dPgF: 0.0022,
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 64.959911,
      glass: "497816 ED class",
      role: "G2 ED-class positive element",
      diagramLabel: "L22",
      dPgF: 0.028,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 34.949005,
      glass: "487702 class",
      role: "G2 positive member of cemented pair",
      diagramLabel: "L23",
      cemented: "D1",
      dPgF: 0.0022,
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      indexReference: "d",
      focalLengthMm: -56.991003,
      glass: "673321 class",
      role: "G2 negative member of cemented pair",
      diagramLabel: "L24",
      cemented: "D1",
      dPgF: 0.0093,
      nC: 1.666607,
      nF: 1.687564,
      ng: 1.700114,
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 27.791135,
      glass: "805254 class",
      role: "G3 positive member of cemented pair",
      diagramLabel: "L31",
      cemented: "D2",
      dPgF: 0.0158,
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847286,
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: -17.767841,
      glass: "762401 class",
      role: "G3 negative member of cemented pair",
      diagramLabel: "L32",
      cemented: "D2",
      dPgF: -0.0001,
      nC: 1.756385,
      nF: 1.775388,
      ng: 1.786343,
    },
    {
      id: 11,
      name: "L41r",
      label: "L41 resin",
      type: "Thin Resin Aspherical Layer",
      nd: 1.52972,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: 93236.998823,
      glass: "Resin layer (patent hybrid asphere)",
      role: "G4 hybrid aspherical resin layer",
      diagramLabel: "L41r",
      cemented: "H1",
    },
    {
      id: 12,
      name: "L41g",
      label: "L41 glass substrate",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      indexReference: "d",
      focalLengthMm: 47.559478,
      glass: "589612 class",
      role: "G4 hybrid positive glass substrate",
      diagramLabel: "L41g",
      cemented: "H1",
      dPgF: -0.0018,
      nC: 1.586188,
      nF: 1.595824,
      ng: 1.601034,
    },
    {
      id: 13,
      name: "L42",
      label: "L42",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: -26.051004,
      glass: "806333 class",
      role: "G4 negative member of rear cemented pair",
      diagramLabel: "L42",
      cemented: "D3",
      dPgF: 0.002,
      nC: 1.799034,
      nF: 1.823209,
      ng: 1.837482,
    },
    {
      id: 14,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 31.548753,
      glass: "487702 class",
      role: "G4 positive rear element",
      diagramLabel: "L43",
      cemented: "D3",
      dPgF: 0.0022,
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
    },
  ],

  surfaces: [
    { label: "1", R: 61.5, d: 1.6, sd: 17, medium: 1 },
    { label: "2", R: 18.346, d: 8.79, sd: 16.1 },
    { label: "3", R: 89.373, d: 1.5, sd: 15.97, medium: 2 },
    { label: "4", R: 29.259, d: 4.67, sd: 16.5 },
    { label: "5", R: 58.477, d: 2.2, sd: 17, medium: 3 },
    {
      label: "6A",
      R: 44.918,
      d: 4.98,
      sd: 17,
      asphere: { K: -1, A4: -1.771e-5, A6: -4.591e-9, A8: -5.69e-11, A10: 0 },
    },
    { label: "7", R: 1012.5, d: 2.6, sd: 17, medium: 4 },
    { label: "8", R: -108.664, sd: 17 },
    { label: "STO", R: "flat", d: 1.6 },
    { label: "9", R: 104.8, d: 2.1, sd: 12, medium: 5 },
    { label: "10", R: -508.34, d: 0.2, sd: 12.3 },
    { label: "11", R: 63.95, d: 3.7, sd: 12.5, medium: 6 },
    { label: "12", R: -63.95, d: 0.52, sd: 12.7 },
    { label: "13", R: 40.113, d: 5.94, sd: 13, medium: 7 },
    { label: "14", R: -28.179, d: 1.3, sd: 13, medium: 8 },
    { label: "15", R: -108.316, sd: 13 },
    { label: "16", R: -58.917, d: 3.23, sd: 11.2, medium: 9 },
    { label: "17", R: -16.614, d: 1.2, sd: 11.12, medium: 10 },
    { label: "18", R: 75.438, sd: 12 },
    {
      label: "19A",
      R: 278.456,
      d: 0.1,
      sd: 12.7,
      medium: 11,
      asphere: { K: -1, A4: -1.193e-5, A6: 2.91e-9, A8: 0, A10: 0 },
    },
    { label: "20", R: 280, d: 4.76, sd: 12.7, medium: 12 },
    { label: "21", R: -30.938, d: 0.1, sd: 13 },
    { label: "22", R: 575.504, d: 1.3, sd: 12.9, medium: 13 },
    { label: "23", R: 20.24, d: 5.71, sd: 12.4, medium: 14 },
    { label: "24", R: -58.125, sd: 12.4 },
  ],

  zoom: {
    // (moved from publishedStations) Every authored zoom station is a source row.
    stations: [
      { focalLengthMm: 16.3, label: "Wide", published: true },
      { focalLengthMm: 22.59, published: true },
      { focalLengthMm: 31.9, published: true },
      { focalLengthMm: 43.7, label: "Tele", published: true },
    ],
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent assigns focusing to G1 only but publishes no finite-focus spacing table. " +
      "At the production 0.28 m MFD, G1 translation was solved independently with the image plane and G2-G4 fixed; " +
      "the tele-state paraxial magnification is -0.25749 (|m|≈0.26). Close-focus d8 values are reconstructed, not " +
      "patent-published.",
  },

  gaps: {
    // G1 -> STO. Close values are the G1-only constrained reconstruction at 0.28 m.
    "8": {
      label: "G1→STO",
      values: [
        [53.21, 58.992754579263],
        [30.54, 35.652023961582],
        [13.78, 18.549584853001],
        [3.41, 8.100528920844],
      ],
    },
    // Zoom-only gaps: no independent close-focus motion is assigned to G2, G3, or G4.
    "15": {
      label: "G2→G3",
      values: [
        [2.66, 2.66],
        [5.71, 5.71],
        [10.5, 10.5],
        [15.76, 15.76],
      ],
    },
    "18": {
      label: "G3→G4",
      values: [
        [15.4, 15.4],
        [12.34, 12.34],
        [7.55, 7.55],
        [2.3, 2.3],
      ],
    },
    "24": {
      label: "BF",
      values: [
        [37.22, 37.22],
        [41.85, 41.85],
        [47.89, 47.89],
        [55.9, 55.9],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 8 },

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

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
