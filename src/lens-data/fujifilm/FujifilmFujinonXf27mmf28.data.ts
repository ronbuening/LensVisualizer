import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  REAR PLATE: patent plane-parallel plate PP (surfaces 14–15,       ║
 * ║  2.80 mm, nd 1.51680, νd 64.2) is modeled in `rearPlates`          ║
 * ║  (traced, not drawn). S13 keeps the printed 6.00 mm gap to PP.     ║
 * ║  Table 9 prints no spacing after S15; the 3.424008 mm plate-to-    ║
 * ║  image gap is derived, not printed: printed air-equivalent         ║
 * ║  BF 11.27 − 6.00 − 2.80/1.51680. No prescription scaling.          ║
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
 * ║  published. The stop radius is derived from the design f-number    ║
 * ║  (published Fno = 2.88), so the model's agreement with f/2.88 is   ║
 * ║  calibration, not independent evidence of diaphragm diameter.      ║
 * ║  Surface SDs are modeled from exact d-line meridional ray          ║
 * ║  envelopes at infinity, with nominal mechanical clearance where    ║
 * ║  geometry permits. S8A uses reduced clearance because the current  ║
 * ║  actual-rim-slope policy becomes limiting above the authored       ║
 * ║  5.06 mm SD.                                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-xf-27mm-f28",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 27mm f/2.8",
  subtitle: "US 2016/0011404 A1 · Example 5 · production correlation unconfirmed by manufacturer",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "f = 27.81 mm DESIGN / 27 mm MARKETED",
      "F/2.88 DESIGN / F/2.8 MARKETED",
      "2ω = 55.2°",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 27, design: 27.81 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 2016/0011404 A1",
    patentYear: 2016,
    authors: ["Takashi Suzuki"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: -14.707360301,
      glass: "S-FTM16 catalog proxy; 593353 class (supplier unproven)",
      role: "Object-side negative meniscus of the positive G1 cemented pair.",
      diagramLabel: "L11",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: 8.752796205,
      glass: "S-LAH58 catalog proxy; 883408 class (supplier unproven)",
      role: "High-index positive partner completing the positive G1 cemented pair.",
      diagramLabel: "L12",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: -9.955999074,
      glass: "S-FTM16 catalog proxy; 593353 class (supplier unproven)",
      role: "Negative front member of G2 immediately behind the aperture stop.",
      diagramLabel: "L21",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 9.51065543,
      glass: "TAC8 catalog proxy; 729547 class (supplier unproven)",
      role: "Positive cemented partner in G2; the L21/L22 pair is net positive in isolation.",
      diagramLabel: "L22",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L23",
      label: "Element L23",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      indexReference: "d",
      focalLengthMm: -53.929950983,
      glass: "M-BACD12 catalog proxy; 583595 class (supplier unproven)",
      role: "Double-aspherical negative meniscus completing the weakly negative in-situ G2.",
      diagramLabel: "L23",
    },
    {
      id: 6,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -32.51735629,
      glass: "S-TIH6 catalog proxy; 805254 class (supplier unproven)",
      role: "Negative front member of the positive rear group G3.",
      diagramLabel: "L31",
    },
    {
      id: 7,
      name: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      focalLengthMm: 25.275640846,
      glass: "J-LASFH13 catalog proxy; 904313 class (supplier unproven)",
      role: "Strong positive rear element completing G3 and the image-side relay.",
      diagramLabel: "L32",
    },
  ],

  surfaces: [
    { label: "1", R: 26.053, d: 0.8, sd: 6.65, medium: 1 },
    { label: "2", R: 6.457, d: 3.04, sd: 5.8, medium: 2 },
    { label: "3", R: 30.578, d: 2.14, sd: 5.5 },
    { label: "STO", R: "flat", d: 2.44 },
    { label: "5", R: -9.548, d: 0.7, sd: 4.4, medium: 3 },
    { label: "6", R: 15.87, d: 2.86, sd: 4.95, medium: 4 },
    { label: "7", R: -11.381, d: 0.6, sd: 5.19 },
    {
      label: "8A",
      R: -11.898,
      d: 2.8,
      sd: 5.06,
      medium: 5,
      asphere: {
        K: -1,
        A4: -1.7499231e-2,
        A6: -1.5275947e-2,
        A8: 2.6653708e-3,
        A10: 2.599842e-4,
        A12: -6.8579204e-5,
        A14: 4.5920468e-6,
        A16: -1.0345902e-7,
        A18: -2.2694472e-10,
        A20: 2.8985323e-11,
        A3: 7.0620023e-3,
        A5: 2.2378175e-2,
        A7: 3.1350874e-3,
        A9: -1.9393091e-3,
        A11: 1.7720892e-4,
        A13: -9.9188983e-7,
        A15: -6.0414099e-7,
        A17: 2.8011243e-8,
        A19: -4.0009448e-10,
      },
    },
    {
      label: "9A",
      R: -20.798,
      d: 4.39,
      sd: 5.91,
      asphere: {
        K: -1,
        A4: -1.1023944e-2,
        A6: -3.9913235e-3,
        A8: 8.1445734e-4,
        A10: -3.9636577e-6,
        A12: -4.0771733e-6,
        A14: 2.3298727e-7,
        A16: -4.3437939e-9,
        A18: 1.3062657e-11,
        A20: 3.0227519e-13,
        A3: 6.3586846e-3,
        A5: 9.6878003e-3,
        A7: -1.1999457e-4,
        A9: -2.8017275e-4,
        A11: 2.3185531e-5,
        A13: -5.2082735e-7,
        A15: -1.1418578e-8,
        A17: 5.8129007e-10,
        A19: -6.2155182e-12,
      },
    },
    { label: "10", R: -18.45, d: 1.52, sd: 7.65, medium: 6 },
    { label: "11", R: -64.769, d: 0.2, sd: 8.99 },
    { label: "12", R: 100.01, d: 4.27, sd: 10.29, medium: 7 },
    { label: "13", R: -29.001, d: 6.0, sd: 11.02 }, // physical gap to PP
  ],

  focus: {
    closeFocusM: 0.34,
    description:
      "Only the published infinity prescription is modeled. The marketed minimum focus distance is 0.34 m; the patent does not supply a focus travel law.",
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16] },

  /* ── Plane-parallel plate PP (patent surfaces 14–15): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.8,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 3.424008, // derived, not printed: BF 11.27 − 6.00 − 2.80/1.51680
      source:
        "US 2016/0011404 A1, Example 5 Table 9 surfaces 14–15; gap after PP derived, not printed (air-equivalent BF 11.27 − 6.00 − 2.80/1.51680)",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−)", fromSurface: "5", toSurface: "9A" },
    { text: "G3 (+)", fromSurface: "10", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
