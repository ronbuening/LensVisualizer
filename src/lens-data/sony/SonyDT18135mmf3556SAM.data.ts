import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2013/0155294 A1 (Sony Corporation; inventors Hideki Kai and Syuuji Maki; filed 19 November 2012, published
 * 20 June 2013; priority JP 2011-278265, 20 December 2011), Example 1: Tables 1–3 (PDF p. 17), Figs. 1A–1C.
 * Unscaled: every radius, thickness, index, Abbe number and asphere coefficient is as printed.
 * Correlated with the Sony DT 18-135mm F3.5-5.6 SAM (SAL18135): 14 elements in 11 groups, two aspherical elements
 * (L21, L42) and one ED element (L41), as Sony's construction diagram shows. Example 2 of the same patent uses the
 * 1.49700/81.61 glass in both L41 and L44, which does not fit Sony's single ED element.
 * Layout: positive–negative–positive–positive four-group zoom. All four groups move toward the object from wide to
 * tele; D5 increases and D14 and D20 decrease (Table 3). The image plane is fixed.
 * Hybrid aspheres: the patent prints a 0.15 mm layer of nd 1.53420 / νd 41.73 on the object side of L21 (surface 6)
 * and of L42 (surface 23), and both of those faces are aspherical. The patent does not name the layer material; the
 * thin layer on a glass body is read as a bonded resin (hybrid) asphere. Each layer is its own element entry, so the
 * model lists 16 media for the 14 physical elements.
 * Asphere equation (¶0078): x = cy²/[1 + √(1 − (1 + k)c²y²)] + Ay⁴ + By⁶ + Cy⁸ + Dy¹⁰ + Ey¹², the engine's own
 * convention, so K = k. Surface 6 has k = +1 and no E term (A12 = 0).
 * Back focus: Table 1 leaves the last gap blank and the patent prints no back focus. BF here is the paraxial image
 * distance of the printed prescription at each station: 38.532 / 59.395 / 83.601 mm. No cover glass or filter is
 * listed.
 * First order: printed f = 18.56 / 50.01 / 130.89 mm, Fno 3.61 / 4.43 / 5.79, 2ω = 78.1° / 30.9° / 12.2°. Traced EFL
 * 18.564 / 50.040 / 130.997 mm. Real chief rays at the printed half-angles reach Y = 14.20 / 14.23 / 14.24 mm, so the
 * patent's field implies the 28.4 mm APS-C image circle used for imageCircleMm.
 * Stop: surface 15 (STO), 1.00 mm ahead of surface 16; it moves with G3 (¶0027). Its radius follows the printed
 * f-number at each station.
 * Semi-diameters: not published. They are inferred and checked against Fig. 1A (8.16 px/mm at 300 dpi along and
 * across the axis), whose outer rims they match to within about 6%. Fig. 1A draws flat lands outside the curved faces
 * of L21 (rear), L22 (both faces) and L42 (rear); rimExtensionSd draws them (S8 to 14 mm, S9/S10 to 10.4 mm, S25 to
 * 10.1 mm). The figure ends those curves at about 8.7–8.8 mm; the caps sit at 9.45 mm (S9/S10) and 9.3 mm (S25), the
 * lowest values that take no light from the wide-angle corner. S8 (9.743 mm) and S18 (8.57 mm) stop where the facing
 * surfaces close to about 10% of their axial gap; S19 is 9.0 mm so that L33 is square-cut as drawn. S23A (9.5 mm)
 * stays inside 9.59 mm, where its aspheric sag stops increasing.
 * Focus: the patent states that G2 focuses, as an example (¶0029), but prints no close-focus spacings. The model is
 * infinity-only; Sony's 0.45 m minimum focus distance is in catalog.closeFocusM.
 * Glass: catalog equivalents matched by printed nd/νd; the patent names no supplier. The two hybrid layers stay
 * Unmatched.
 */
const LENS_DATA = {
  schema: 2,
  key: "sony-dt-18-135mm-f35-56-sam",
  maker: "Sony",
  name: "SONY DT 18-135mm f/3.5-5.6 SAM",
  subtitle: "US 2013/0155294 A1, Example 1 — production correlation to Sony SAL18135",
  visible: true,
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "aps-c",
    imageCircleMm: 28.4,
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "DESIGN f = 18.56–130.89 mm",
      "DESIGN F/3.61–5.79",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
      "1 ED ELEMENT",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: {
      marketing: [18, 135],
      design: [18.56, 130.89],
    },
    fNumber: {
      marketing: 3.5,
      design: 3.61,
    },
    closeFocusM: {
      marketing: 0.45,
    },
  },
  source: {
    patentNumber: "US 2013/0155294 A1",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2013,
    authors: ["Hideki Kai", "Syuuji Maki"],
    assignees: ["Sony Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -135.61,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative front meniscus of the first-group cemented doublet",
      diagramLabel: "L11",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 91.5,
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus completing the first-group cemented doublet",
      diagramLabel: "L12",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 125.47,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus at the rear of the first group",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L21r",
      label: "Element 4 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.5342,
      vd: 41.73,
      focalLengthMm: -288.17,
      glass: "Unmatched (optical resin layer; vendor not identified)",
      role: "Thin bonded layer carrying the aspherical object-side surface of L21; part of L21, not a separate lens",
      diagramLabel: "L21r",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 4 glass body",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -22.99,
      glass: "TAFD5F (HOYA catalog equivalent; production supplier unspecified)",
      role: "Glass body of the hybrid aspherical meniscus that leads the second group",
      diagramLabel: "L21",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -24.02,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative lens of the second group",
      diagramLabel: "L22",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 21.9,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Equiconvex dense-flint lens, the only positive lens of the second group",
      diagramLabel: "L23",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -40.08,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus, concave to the object, closing the second group",
      diagramLabel: "L24",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -69.05,
      glass: "TAFD5F (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-index negative meniscus at the front of the third-group cemented doublet",
      diagramLabel: "L31",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.83,
      focalLengthMm: 25.08,
      glass: "N-SK11 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Low-index biconvex lens completing the third-group cemented doublet",
      diagramLabel: "L32",
      cemented: "C2",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -72.79,
      glass: "TAFD5F (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus, convex to the image, closing the third group",
      diagramLabel: "L33",
    },
    {
      id: 12,
      name: "L41",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 27.54,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Sony's construction diagram marks L41 as the lens's single ED element, and its nd 1.49700 / νd 81.61 fits an ED fluorophosphate glass of the FCD1 class.",
      role: "Low-dispersion biconvex lens at the front of the fourth group",
      diagramLabel: "L41",
    },
    {
      id: 13,
      name: "L42r",
      label: "Element 12 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.5342,
      vd: 41.73,
      focalLengthMm: 225.23,
      glass: "Unmatched (optical resin layer; vendor not identified)",
      role: "Thin bonded layer carrying the aspherical object-side surface of L42; part of L42, not a separate lens",
      diagramLabel: "L42r",
      cemented: "H2",
    },
    {
      id: 14,
      name: "L42",
      label: "Element 12 glass body",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.34,
      focalLengthMm: -39.76,
      glass: "NBFD10 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Glass body of the hybrid aspherical negative meniscus in the fourth group",
      diagramLabel: "L42",
      cemented: "H2",
    },
    {
      id: 15,
      name: "L43",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.15,
      focalLengthMm: -52.91,
      glass: "E-CF6 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus of the rear achromatic cemented doublet",
      diagramLabel: "L43",
      cemented: "C3",
    },
    {
      id: 16,
      name: "L44",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 34.37,
      glass: "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive lens completing the rear achromatic doublet",
      diagramLabel: "L44",
      cemented: "C3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 133.241,
      d: 1.3,
      sd: 27.9,
      medium: 1,
    },
    {
      label: "2",
      R: 61.395,
      d: 6.94,
      sd: 27.9,
      medium: 2,
    },
    {
      label: "3",
      R: 732.741,
      d: 0.1,
      sd: 27.2,
    },
    {
      label: "4",
      R: 63.071,
      d: 4,
      sd: 22.2,
      medium: 3,
    },
    {
      label: "5",
      R: 175.58,
      sd: 22.2,
    },
    {
      label: "6A",
      R: 98.407,
      d: 0.15,
      sd: 14,
      asphere: {
        K: 1,
        A4: 1.728e-5,
        A6: -1.468e-8,
        A8: -4.855e-11,
        A10: 7.204e-13,
        A12: 0,
      },
      medium: 4,
    },
    {
      label: "7",
      R: 60,
      d: 0.9,
      sd: 14,
      medium: 5,
    },
    {
      label: "8",
      R: 14.443,
      d: 6.07,
      sd: 9.743,
      rimExtensionSd: 14,
    },
    {
      label: "9",
      R: -29.082,
      d: 0.9,
      sd: 9.45,
      rimExtensionSd: 10.4,
      medium: 6,
    },
    {
      label: "10",
      R: 51.963,
      d: 0.25,
      sd: 9.45,
      rimExtensionSd: 10.4,
    },
    {
      label: "11",
      R: 35.964,
      d: 4.74,
      sd: 10.3,
      medium: 7,
    },
    {
      label: "12",
      R: -35.964,
      d: 1.73,
      sd: 10.3,
    },
    {
      label: "13",
      R: -19.265,
      d: 0.9,
      sd: 9.2,
      medium: 8,
    },
    {
      label: "14",
      R: -52.037,
      sd: 9.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 1,
    },
    {
      label: "16",
      R: 28.265,
      d: 1.3,
      sd: 8.8,
      medium: 9,
    },
    {
      label: "17",
      R: 18.569,
      d: 4.77,
      sd: 8.8,
      medium: 10,
    },
    {
      label: "18",
      R: -53.766,
      d: 1.02,
      sd: 8.57,
    },
    {
      label: "19",
      R: -23.678,
      d: 0.9,
      sd: 9,
      medium: 11,
    },
    {
      label: "20",
      R: -39.467,
      sd: 9,
    },
    {
      label: "21",
      R: 20.064,
      d: 7,
      sd: 10.3,
      medium: 12,
    },
    {
      label: "22",
      R: -38.092,
      d: 1.3,
      sd: 10.3,
    },
    {
      label: "23A",
      R: 43.493,
      d: 0.15,
      sd: 9.5,
      asphere: {
        K: -3.15,
        A4: -4.01e-5,
        A6: -8.455e-8,
        A8: -8.174e-10,
        A10: 5.619e-12,
        A12: -2.246e-14,
      },
      medium: 13,
    },
    {
      label: "24",
      R: 68.034,
      d: 0.9,
      sd: 10.1,
      medium: 14,
    },
    {
      label: "25",
      R: 22.16,
      d: 4.12,
      sd: 9.3,
      rimExtensionSd: 10.1,
    },
    {
      label: "26",
      R: 104.165,
      d: 1.72,
      sd: 11,
      medium: 15,
    },
    {
      label: "27",
      R: 21.556,
      d: 6,
      sd: 11,
      medium: 16,
    },
    {
      label: "28",
      R: -68.385,
      sd: 11,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 18.56,
        nominalFNumber: 3.61,
        label: "Wide",
      },
      {
        focalLengthMm: 50.01,
        nominalFNumber: 4.43,
        label: "Mid",
      },
      {
        focalLengthMm: 130.89,
        nominalFNumber: 5.79,
        label: "Tele",
      },
    ],
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity prescription only. The patent names moving the second group (G2) as an example of how the lens focuses but prints no close-focus spacings, so no focus movement is modeled. Sony specifies a 0.45 m minimum focus distance.",
  },
  gaps: {
    "5": {
      label: "D5",
      values: [
        [2.02, 2.02],
        [24.48, 24.48],
        [42.45, 42.45],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [21.83, 21.83],
        [9.26, 9.26],
        [1.4, 1.4],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [8, 8],
        [3.15, 3.15],
        [1, 1],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [38.532360044907875, 38.532360044907875],
        [59.39480115441277, 59.39480115441277],
        [83.60116486696846, 83.60116486696846],
      ],
    },
  },
  aperture: {
    fStops: [3.61, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  groups: [
    {
      text: "G1 (+)",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "G2 (−)",
      fromSurface: "6A",
      toSurface: "14",
    },
    {
      text: "G3 (+)",
      fromSurface: "STO",
      toSurface: "20",
    },
    {
      text: "G4 (+)",
      fromSurface: "21",
      toSurface: "28",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "H1",
      fromSurface: "6A",
      toSurface: "8",
    },
    {
      text: "C2",
      fromSurface: "16",
      toSurface: "18",
    },
    {
      text: "H2",
      fromSurface: "23A",
      toSurface: "25",
    },
    {
      text: "C3",
      fromSurface: "26",
      toSurface: "28",
    },
  ],
  layout: {
    yScFill: 0.3,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
