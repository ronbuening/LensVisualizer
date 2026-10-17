import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Minolta AF 70-200mm f/2.8 APO G (D) SSM                    ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2004-109559 A, Example 1, Minolta zoom lens system.          ║
 * ║  Patent prescription: f = 71.8 / 105.0 / 195.0 mm, Fno = 2.88.          ║
 * ║  Production correspondence: Minolta/Sony A-mount 70-200mm f/2.8 G SSM.  ║
 * ║                                                                            ║
 * ║  Recalculated EFLs: 71.756668 / 105.008403 / 195.006309 mm.             ║
 * ║  Recalculated BFDs: 51.216172 / 51.216068 / 51.211360 mm.               ║
 * ║  Aperture stop: r24 from the patent table; the stop radius is derived   ║
 * ║  from the design f-number, Fno 2.88, and held at every zoom station.    ║
 * ║                                                                            ║
 * ║  Variable gaps: D9, D18, and D23 are the patent zoom spacings.           ║
 * ║  Focus model: D5/D9 carry an inferred Gr1R objectward focus shift for   ║
 * ║  Sony's official 1.2 m minimum-focus distance; the patent publishes     ║
 * ║  infinity-focus zoom positions only, so the close-focus row is modeled. ║
 * ║                                                                            ║
 * ║  Semi-diameters are not patent-published. They are conservative         ║
 * ║  renderer/mechanical estimates constrained by the 77 mm filter class,   ║
 * ║  edge thickness, element SD ratios, and cross-gap sag-intrusion checks. ║
 * ║  They are not official clear-aperture or production drawing values.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-af-70-200mm-f28-apo-g-d-ssm",
  maker: "Minolta",
  name: "MINOLTA AF 70-200mm f/2.8 APO G (D) SSM",
  subtitle: "JP 2004-109559 A Example 1 — Minolta zoom lens system",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "Patent Example 1: 19 elements / 15 air-spaced optical clusters",
      "Production class: 70-200mm f/2.8 A-mount",
      "Patent f = 71.8 / 105.0 / 195.0 mm; Fno = 2.88",
      "Four inferred AD/ED elements; all-spherical prescription",
      "Inner focus by Gr1R (L4-L5)",
    ],
    elementCount: 19,
    groupCount: 15,
    focalLengthMm: { marketing: [70, 200], design: [71.756668, 195.006309] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 2004-109559 A",
    patentYear: 2004,
    authors: ["Hiroyuki Matsumoto", "Mamoru Terada"],
    assignees: ["Minolta Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: -258.77,
      glass: "F2 / S-TIM2 class (620/363; vendor not specified)",
      apd: false,
      role: "Front negative flint member of the first cemented doublet; balances the very-low-dispersion L2 and moderates front-group spherical and axial-color residuals.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive ED",
      nd: 1.4931,
      vd: 83.58,
      focalLengthMm: 199.99,
      glass: "493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)",
      apd: "inferred",
      apdNote:
        "Sony production literature identifies four ED elements; the patent gives only nd and νd, with no line indices or partial-dispersion data.",
      role: "First low-dispersion positive element, used in the large fixed front group before the negative zoom variator magnifies residual color.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.4931,
      vd: 83.58,
      focalLengthMm: 249.91,
      glass: "493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)",
      apd: "inferred",
      apdNote: "Second of four inferred AD/ED elements; no patent partial-dispersion data are published.",
      role: "Positive ED/AD continuation of the fixed front collector, preserving axial-color correction while setting the ray geometry entering the focus group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -212.59,
      glass: "E-FD1L (HOYA) / S-TIH1 / N-SF1 class",
      apd: false,
      role: "Negative member of the moving Gr1R inner-focus pair; controls focus-induced spherical and field-curvature variation.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 56.47,
      focalLengthMm: 93.41,
      glass: "H-LAK12 (CDGM equivalent; patent 697565)",
      apd: false,
      role: "Primary positive power in the moving Gr1R focus group; paired with L4 to keep the focus unit positive but aberrationally moderated.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7545,
      vd: 51.57,
      focalLengthMm: -52.64,
      glass: "755516 - high-index crown (unresolved)",
      apd: false,
      role: "First negative component of the Gr2 variator; begins the strong negative zoom-power change.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.82,
      focalLengthMm: 132.86,
      glass: "FDS90 / N-SF57 / S-TIH53 dense-flint class",
      apd: false,
      role: "Positive high-index dense-flint member of the Gr2 cemented doublet; compactly reshapes variator power and field curvature.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.67,
      vd: 57.07,
      focalLengthMm: -37.88,
      glass: "S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)",
      apd: false,
      role: "Negative crown member of the Gr2 doublet; supplies most of the doublet's net negative power while offsetting part of L7 dispersion.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.82,
      focalLengthMm: 72.04,
      glass: "FDS90 / N-SF57 / S-TIH53 dense-flint class",
      apd: false,
      role: "Positive third component inside the negative Gr2 variator; patent condition f23/f2 bounds its field-curvature moderation.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.7545,
      vd: 51.57,
      focalLengthMm: -102.13,
      glass: "755516 - high-index crown (unresolved)",
      apd: false,
      role: "Final negative component of Gr2; controls ray angles before the large variable spacing to Gr3.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.39,
      focalLengthMm: 130.53,
      glass: "N-PSK53A (Schott) / PCD4 / S-PHM52 class",
      apd: false,
      role: "Positive relay element opening Gr3; restores convergence after the negative variator.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive ED",
      nd: 1.4931,
      vd: 83.58,
      focalLengthMm: 74.65,
      glass: "493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)",
      apd: "inferred",
      apdNote: "Third inferred AD/ED element; no patent partial-dispersion data are published.",
      role: "Positive low-dispersion member of the Gr3 achromatizing doublet, placed after the variator for residual axial and lateral color control.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.04,
      focalLengthMm: -100.48,
      glass: "E-LAF7 (HOYA) / N-LAF7 class",
      apd: false,
      role: "High-index flint partner to L12; weakens the doublet's net power and supplies compact chromatic balancing.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.781,
      vd: 44.55,
      focalLengthMm: -941.68,
      glass: "781446 - high-index mid-dispersion glass (unresolved)",
      apd: false,
      role: "Very weak negative stop-side element in Gr4f; adjusts marginal-ray correction near the aperture rather than adding large net power.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive ED",
      nd: 1.4931,
      vd: 83.58,
      focalLengthMm: 68.74,
      glass: "493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)",
      apd: "inferred",
      apdNote: "Fourth inferred AD/ED element; no patent partial-dispersion data are published.",
      role: "Rear positive ED/AD element near the stop; participates in residual color, spherical, and coma correction.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.29,
      focalLengthMm: -203.56,
      glass: "F2 / S-TIM2 class (620/363; vendor not specified)",
      apd: false,
      role: "Flint partner to rear ED/AD element L15; completes the positive Gr4f doublet.",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.45,
      focalLengthMm: 125.49,
      glass: "FF5 (HOYA) / S-FTM16 class",
      apd: false,
      role: "Positive first member of the Gr4r rear sub-group; restores convergence before the strong rear negative field-correction element.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -57.31,
      glass: "NBFD15-W / NBFD15 (HOYA)",
      apd: false,
      role: "High-index rear negative element; the patent condition fIr2/fIr identifies this as the principal rear field-correction component.",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.86,
      focalLengthMm: 94.66,
      glass: "LAF3 / S-LAM3 / N-LAF3 class (close, patent νd=47.86)",
      apd: false,
      role: "Final positive field and back-focus element; helps maintain the SLR-compatible image-side clearance.",
    },
  ],

  surfaces: [
    { label: "1", R: 479.561, d: 3, sd: 38.5, medium: 1 },
    { label: "2", R: 119.935, d: 8.5, sd: 38.5, medium: 2 },
    { label: "3", R: -541.841, d: 0.2, sd: 38 },
    { label: "4", R: 82.499, d: 6.8, sd: 37.5, medium: 3 },
    { label: "5", R: 242.794, sd: 37.5 },
    { label: "6", R: 85.355, d: 2.5, sd: 36, medium: 4 },
    { label: "7", R: 54.056, d: 0.695, sd: 29.1 },
    { label: "8", R: 57.664, d: 9, sd: 29.1, medium: 5 },
    { label: "9", R: 473.27, sd: 31.5 },
    { label: "10", R: -4240.702, d: 1.5, sd: 18.5, medium: 6 },
    { label: "11", R: 40.101, d: 5.266, sd: 16 },
    { label: "12", R: -94.816, d: 3.5, sd: 16, medium: 7 },
    { label: "13", R: -52.32, d: 1.5, sd: 16.8, medium: 8 },
    { label: "14", R: 49.848, d: 1.613, sd: 17.5 },
    { label: "15", R: 52.408, d: 4.3, sd: 18.2, medium: 9 },
    { label: "16", R: 358.451, d: 3.212, sd: 16.7 },
    { label: "17", R: -57.162, d: 1.5, sd: 16.7, medium: 10 },
    { label: "18", R: -223.893, sd: 18.3 },
    { label: "19", R: 1061.154, d: 3.7, sd: 20, medium: 11 },
    { label: "20", R: -87.186, d: 0.2, sd: 20 },
    { label: "21", R: 112.872, d: 6.605, sd: 20, medium: 12 },
    { label: "22", R: -53.563, d: 1.8, sd: 20, medium: 13 },
    { label: "23", R: -188.163, sd: 20 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "25", R: 44.684, d: 4.196, sd: 19.5, medium: 14 },
    { label: "26", R: 40.39, d: 0.141, sd: 19 },
    { label: "27", R: 34.466, d: 9.183, sd: 20, medium: 15 },
    { label: "28", R: -1874.66, d: 1.5, sd: 19.5, medium: 16 },
    { label: "29", R: 135.366, d: 33.008, sd: 19 },
    { label: "30", R: 234.193, d: 3.091, sd: 19, medium: 17 },
    { label: "31", R: -108.454, d: 5.703, sd: 18 },
    { label: "32", R: -28.005, d: 2.713, sd: 18, medium: 18 },
    { label: "33", R: -74.199, d: 2.104, sd: 20 },
    { label: "34", R: 153.847, d: 4.288, sd: 21.5, medium: 19 },
    { label: "35", R: -120.026, sd: 21.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 71.8, label: "70 mm" },
      { focalLengthMm: 105 },
      { focalLengthMm: 195, label: "200 mm" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "Inner-focus model: Gr1R (L4-L5) translates objectward for finite focus. Close-focus spacings are a paraxial reconstruction from Sony's 1.2 m official MFD, not a patent-published focus table.",
  },

  gaps: {
    "5": {
      label: "IF front",
      values: [
        [13.71, 0.914722],
        [13.71, 0.914737],
        [13.71, 0.914787],
      ],
    },
    "9": {
      label: "IF rear / D9",
      values: [
        [1.98, 14.775278],
        [15.965, 28.760263],
        [29.959, 42.754213],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [31.098, 31.098],
        [23.491, 23.491],
        [2.8, 2.8],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [7.685, 7.685],
        [1.306, 1.306],
        [8.004, 8.004],
      ],
    },
    "35": {
      label: "BF",
      values: [
        [51.216172, 51.216172],
        [51.216068, 51.216068],
        [51.21136, 51.21136],
      ],
    },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "Gr1F", fromSurface: "1", toSurface: "5" },
    { text: "Gr1R / IF", fromSurface: "6", toSurface: "9" },
    { text: "Gr2", fromSurface: "10", toSurface: "18" },
    { text: "Gr3", fromSurface: "19", toSurface: "23" },
    { text: "Gr4", fromSurface: "STO", toSurface: "35" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  layout: { scFill: 0.72, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
