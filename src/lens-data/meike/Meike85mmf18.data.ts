import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CN 217606166 U (Yunhong Li; Shenzhen Huitian Film and Television Equipment Co., Ltd., the name Meike's Shenzhen
 * company took in July 2019), sole numerical example: table in para. 0034, section in Fig. 1. Associated with the
 * original Meike AF 85mm f/1.8 FF STM (nine elements in six groups, all spherical); this is a patent design, not a
 * confirmed factory prescription.
 * Scale: none. The example is printed at the production focal length; the computed d-line EFL is 85.645 mm against
 * the stated f = 85 mm (para. 0035). No wavelength from C to g reaches 85.0 mm, so the 85 is a nominal value.
 * Printed: R, d, glass name, a clear aperture (孔径) for every row, zero conic on every row, f = 85 mm and F = 1.8.
 * The patent prints no index or Abbe number; nd and vd are the CDGM and HOYA catalog values for the named glasses,
 * and each element traces on that glass's catalog dispersion curve.
 * Cemented joins: the table prints each cemented interface twice with 0.00 mm of air (rows 6, 11 and 15). Each pair
 * is merged into one cemented surface, as the text describes, leaving 15 refracting surfaces and the stop. Surface
 * labels keep the patent's row numbers.
 * Semi-diameters: the 孔径 column is read as a clear diameter and halved. As a diameter the stop's 29.75 mm gives a
 * paraxial f/1.785, consistent with F = 1.8; as a radius it would give f/0.89. At the two cemented joins whose
 * printed cells differ, the smaller is used (36.97 against 37.30 mm, 28.42 against 29.00 mm). The printed rims at
 * S3 to S8 sit slightly inside the real f/1.8 axial bundle (up to 0.35 mm at S3), so the model works at about f/1.83
 * wide open; they are kept as printed. Fig. 1 (15.46 px/mm at 300 dpi, from the drawn rim heights) draws every face
 * within about 2 % of its printed rim except S19. The printed S19 cell, 43.00 mm, reads as a transposed 34.00 mm:
 * halved, that is 17.0 mm, equal to L9's printed front rim, and Fig. 1 and Meike's own render both draw L9 square at
 * about that height (Fig. 1: 17.3 mm on both faces). S19 therefore takes 17.0 mm, not 21.5 mm. Fig. 1 also draws flat
 * lands on L4's rear, L6's rear and L7's front faces; rimExtensionSd carries each out to its cemented junction's rim
 * (S8 to 18.485, S13 to 14.35, S14 to 14.21 mm), so the three elements are square-edged. The figure continues them to
 * the full doublet height, which the merged junctions do not reach. Fig. 1 draws L1 and L2 as square blocks, their
 * rear faces reaching the front rims; S2 and S4 carry lands to 24.1 and 22.02 mm to match. The lands lie outside the
 * printed clear apertures and do not change the trace.
 * Stop: the radius follows the design F/1.8 (diameter 29.49 mm) under the prime stop rule, not the printed 29.75 mm.
 * Image plane: the final gap is the printed 42.53 mm; the paraxial back focus is 42.262 mm, so the stored image plane
 * lies 0.268 mm beyond paraxial focus.
 * Focus: claim 2 moves the cemented L5-L6 pair to focus from infinity to 1 m but no close-range spacings are printed,
 * so no gap varies. Meike's 0.85 m minimum focus is not modeled.
 */
const LENS_DATA = {
  schema: 2,
  layout: { yScFill: 0.4 },
  key: "meike-af-85mm-f18-ff-stm",
  maker: "Meike",
  name: "MEIKE AF 85mm f/1.8 FF STM",
  subtitle: "CN 217606166 U, Sole example \u2014 probable match to the 2022 production lens",
  catalog: {
    specs: ["9 ELEMENTS / 6 GROUPS", "DESIGN f = 85 mm", "DESIGN F/1.8", "ALL SPHERICAL"],
    elementCount: 9,
    groupCount: 6,
    lensMounts: ["sony-fe", "nikon-z", "fujifilm-x", "l-mount"],
    imageFormat: "135-full-frame",
    focalLengthMm: {
      marketing: 85,
      design: 85,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
    closeFocusM: {
      marketing: 0.85,
    },
  },
  source: {
    patentNumber: "CN 217606166 U",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 2022,
    authors: ["Yunhong Li"],
    assignees: ["Shenzhen Huitian Film and Television Equipment Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      glass: "H-LaF50B (CDGM; named in the patent)",
      role: "Weak biconvex front collector; begins converging the 47.6 mm f/1.8 entrance beam.",
      nd: 1.7725,
      vd: 49.598996,
      focalLengthMm: 189.44,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      glass: "H-ZLaF55D (CDGM; named in the patent)",
      role: "Positive meniscus convex to the object; with L1 forms the positive front pair of claim 3.",
      nd: 1.83481,
      vd: 42.725177,
      focalLengthMm: 132.56,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      glass: "H-LaK50A (CDGM; named in the patent)",
      role: "Lanthanum-crown positive meniscus of the front cemented doublet U1.",
      nd: 1.6516,
      vd: 58.403057,
      focalLengthMm: 53.9,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      glass: "E-FD10 (HOYA; named in the patent)",
      role: "Dense-flint negative meniscus of U1; makes the doublet weakly negative and corrects axial color ahead of the stop.",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -42.06,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      glass: "H-ZF52 (CDGM; named in the patent)",
      role: "Dense-flint positive meniscus, concave to the object; front half of the cemented focusing doublet U2.",
      nd: 1.84666,
      vd: 23.784497,
      focalLengthMm: 158.32,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      glass: "H-K9L (CDGM; named in the patent)",
      role: "Biconcave crown that gives U2 its negative power; U2 is the patent's focusing group.",
      nd: 1.5168,
      vd: 64.198732,
      focalLengthMm: -43.5,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      glass: "H-ZF52 (CDGM; named in the patent)",
      role: "Dense-flint biconcave element opening the rear cemented doublet U3.",
      nd: 1.84666,
      vd: 23.784497,
      focalLengthMm: -57.08,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      glass: "H-ZLaF55D (CDGM; named in the patent)",
      role: "Biconvex lanthanum element of U3; nearly index-matched to L7, so the pair works mainly on lateral color.",
      nd: 1.83481,
      vd: 42.725177,
      focalLengthMm: 54.54,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      glass: "H-ZLaF55D (CDGM; named in the patent)",
      role: "Biconvex rear positive element; balances the front pair's power about the stop (claim 3).",
      nd: 1.83481,
      vd: 42.725177,
      focalLengthMm: 63.57,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 217.5,
      d: 8.06,
      sd: 24.1,
      medium: 1,
    },
    {
      label: "2",
      R: -440.08,
      d: 0.1,
      sd: 23.71,
      rimExtensionSd: 24.1,
    },
    {
      label: "3",
      R: 72.32,
      d: 5.51,
      sd: 22.02,
      medium: 2,
    },
    {
      label: "4",
      R: 201.49,
      d: 0.24,
      sd: 21.56,
      rimExtensionSd: 22.02,
    },
    {
      label: "5",
      R: 33.09,
      d: 9.25,
      sd: 19.81,
      medium: 3,
    },
    {
      label: "7",
      R: 509.45,
      d: 1.09,
      sd: 18.485,
      medium: 4,
    },
    {
      label: "8",
      R: 28.87,
      d: 9.25,
      sd: 15.865,
      rimExtensionSd: 18.485,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.27,
    },
    {
      label: "10",
      R: -103.73,
      d: 2.72,
      sd: 14.495,
      medium: 5,
    },
    {
      label: "12",
      R: -59.18,
      d: 1.47,
      sd: 14.35,
      medium: 6,
    },
    {
      label: "13",
      R: 36.56,
      d: 18.66,
      sd: 13.495,
      rimExtensionSd: 14.35,
    },
    {
      label: "14",
      R: -59.06,
      d: 1,
      sd: 13.5,
      rimExtensionSd: 14.21,
      medium: 7,
    },
    {
      label: "16",
      R: 268.12,
      d: 4.16,
      sd: 14.21,
      medium: 8,
    },
    {
      label: "17",
      R: -54.46,
      d: 3.53,
      sd: 15.45,
    },
    {
      label: "18",
      R: 83.44,
      d: 4.08,
      sd: 17.0,
      medium: 9,
    },
    {
      label: "19",
      R: -142.56,
      d: 42.53,
      sd: 17.0,
    },
  ],
  doublets: [
    { text: "U1", fromSurface: "5", toSurface: "8" },
    { text: "U2", fromSurface: "10", toSurface: "13" },
    { text: "U3", fromSurface: "14", toSurface: "17" },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent prints the infinity state only. Its claims move the cemented L5-L6 pair to focus from infinity to 1 m, but no close-range spacings are given, so the lens is modeled at infinity with no focus movement. Meike's retail minimum focus of 0.85 m is not modeled.",
  },
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 9,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
