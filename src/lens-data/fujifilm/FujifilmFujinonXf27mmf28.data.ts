import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINON XF 27mm f/2.8                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2016/0011404 A1, Example 5 (Takashi Suzuki /          ║
 * ║  FUJIFILM Corporation). Strong production correlation to the       ║
 * ║  original XF27mmF2.8; no manufacturer source located for this      ║
 * ║  dossier confirms the patent attribution.                          ║
 * ║                                                                    ║
 * ║  7 physical elements / 5 air-separated glass groups; 3 patent     ║
 * ║  power groups (G1 positive, G2 negative, G3 positive).             ║
 * ║  Two aspherical surfaces, both on L23.                             ║
 * ║                                                                    ║
 * ║  REAR-PLATE NORMALIZATION: source PP surfaces 14–15 are omitted.   ║
 * ║  The active model uses the published 11.27 mm air-equivalent       ║
 * ║  S13-to-image spacing. No prescription scaling is applied.         ║
 * ║                                                                    ║
 * ║  ASPHERE CONVENTION: the patent uses sqrt(1 - Kp*C^2*h^2).        ║
 * ║  LensVisualizer uses sqrt(1 - (1+K)*(h/R)^2), therefore            ║
 * ║  K = Kp - 1. The published Kp = 0 maps to K = -1 on S8/S9.       ║
 * ║                                                                    ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. Only the published infinity    ║
 * ║  prescription is modeled. closeFocusM = 0.34 m is manufacturer     ║
 * ║  metadata and does not create an internal focus-motion model.      ║
 * ║                                                                    ║
 * ║  STOP / SEMI-DIAMETERS: no physical stop or clear apertures are    ║
 * ║  published. STO.sd is calibrated from the published Fno = 2.88    ║
 * ║  and the modeled entrance pupil; that agreement is calibration,    ║
 * ║  not independent evidence of diaphragm diameter. Surface SDs are   ║
 * ║  modeled from exact d-line meridional ray envelopes at infinity,   ║
 * ║  with nominal mechanical clearance where geometry permits. S8A    ║
 * ║  uses reduced clearance because the current actual-rim-slope       ║
 * ║  policy becomes limiting above the authored 5.06 mm SD.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-xf-27mm-f28",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 27mm f/2.8",
  subtitle: "US 2016/0011404 A1 · Example 5 · production correlation unconfirmed by manufacturer",
  specs: [
    "7 ELEMENTS / 5 GROUPS",
    "f = 27.81 mm DESIGN / 27 mm MARKETED",
    "F/2.88 DESIGN / F/2.8 MARKETED",
    "2ω = 55.2°",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 27,
  focalLengthDesign: 27.81,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2016/0011404 A1",
  patentAuthors: ["Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2016,
  elementCount: 7,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      indexReference: "d",
      fl: -14.707360301,
      glass: "S-FTM16 catalog proxy; 593353 class (supplier unproven)",
      cemented: "D1",
      role: "Object-side negative meniscus of the positive G1 cemented pair.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      fl: 8.752796205,
      glass: "S-LAH58 catalog proxy; 883408 class (supplier unproven)",
      cemented: "D1",
      role: "High-index positive partner completing the positive G1 cemented pair.",
    },
    {
      id: 3,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      indexReference: "d",
      fl: -9.955999074,
      glass: "S-FTM16 catalog proxy; 593353 class (supplier unproven)",
      cemented: "D2",
      role: "Negative front member of G2 immediately behind the aperture stop.",
    },
    {
      id: 4,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      fl: 9.51065543,
      glass: "TAC8 catalog proxy; 729547 class (supplier unproven)",
      cemented: "D2",
      role: "Positive cemented partner in G2; the L21/L22 pair is net positive in isolation.",
    },
    {
      id: 5,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      indexReference: "d",
      fl: -53.929950983,
      glass: "M-BACD12 catalog proxy; 583595 class (supplier unproven)",
      role: "Double-aspherical negative meniscus completing the weakly negative in-situ G2.",
    },
    {
      id: 6,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -32.51735629,
      glass: "S-TIH6 catalog proxy; 805254 class (supplier unproven)",
      role: "Negative front member of the positive rear group G3.",
    },
    {
      id: 7,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      fl: 25.275640846,
      glass: "J-LASFH13 catalog proxy; 904313 class (supplier unproven)",
      role: "Strong positive rear element completing G3 and the image-side relay.",
    },
  ],

  surfaces: [
    { label: "1", R: 26.053, d: 0.8, nd: 1.5927, elemId: 1, sd: 6.65 },
    { label: "2", R: 6.457, d: 3.04, nd: 1.883, elemId: 2, sd: 5.8 },
    { label: "3", R: 30.578, d: 2.14, nd: 1.0, elemId: 0, sd: 5.5 },
    { label: "STO", R: 1e15, d: 2.44, nd: 1.0, elemId: 0, sd: 3.818045612 },
    { label: "5", R: -9.548, d: 0.7, nd: 1.5927, elemId: 3, sd: 4.4 },
    { label: "6", R: 15.87, d: 2.86, nd: 1.72916, elemId: 4, sd: 4.95 },
    { label: "7", R: -11.381, d: 0.6, nd: 1.0, elemId: 0, sd: 5.19 },
    { label: "8A", R: -11.898, d: 2.8, nd: 1.58313, elemId: 5, sd: 5.06 },
    { label: "9A", R: -20.798, d: 4.39, nd: 1.0, elemId: 0, sd: 5.91 },
    { label: "10", R: -18.45, d: 1.52, nd: 1.80518, elemId: 6, sd: 7.65 },
    { label: "11", R: -64.769, d: 0.2, nd: 1.0, elemId: 0, sd: 8.99 },
    { label: "12", R: 100.01, d: 4.27, nd: 1.90366, elemId: 7, sd: 10.29 },
    { label: "13", R: -29.001, d: 11.27, nd: 1.0, elemId: 0, sd: 11.02 },
  ],

  asph: {
    "8A": {
      K: -1,
      A3: 7.0620023e-3,
      A4: -1.7499231e-2,
      A5: 2.2378175e-2,
      A6: -1.5275947e-2,
      A7: 3.1350874e-3,
      A8: 2.6653708e-3,
      A9: -1.9393091e-3,
      A10: 2.599842e-4,
      A11: 1.7720892e-4,
      A12: -6.8579204e-5,
      A13: -9.9188983e-7,
      A14: 4.5920468e-6,
      A15: -6.0414099e-7,
      A16: -1.0345902e-7,
      A17: 2.8011243e-8,
      A18: -2.2694472e-10,
      A19: -4.0009448e-10,
      A20: 2.8985323e-11,
    },
    "9A": {
      K: -1,
      A3: 6.3586846e-3,
      A4: -1.1023944e-2,
      A5: 9.6878003e-3,
      A6: -3.9913235e-3,
      A7: -1.1999457e-4,
      A8: 8.1445734e-4,
      A9: -2.8017275e-4,
      A10: -3.9636577e-6,
      A11: 2.3185531e-5,
      A12: -4.0771733e-6,
      A13: -5.2082735e-7,
      A14: 2.3298727e-7,
      A15: -1.1418578e-8,
      A16: -4.3437939e-9,
      A17: 5.8129007e-10,
      A18: 1.3062657e-11,
      A19: -6.2155182e-12,
      A20: 3.0227519e-13,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−)", fromSurface: "5", toSurface: "9A" },
    { text: "G3 (+)", fromSurface: "10", toSurface: "13" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  closeFocusM: 0.34,
  focusDescription:
    "Only the published infinity prescription is modeled. The marketed minimum focus distance is 0.34 m; the patent does not supply a focus travel law.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
