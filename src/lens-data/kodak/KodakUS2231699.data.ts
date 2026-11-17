import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,231,699 A (Harold F. Bennett, Eastman Kodak Company, granted 1941), Figure 1 example: a four-element,
 * two-group telephoto objective, f = 100 mm, f/3.8. Radii, thicknesses, the 39.5 mm group separation and the sodium-D
 * indices and Abbe numbers are copied unchanged from the patent.
 *
 * Inferred, not printed: the stop sits at the middle of the 39.5 mm air space (the patent shows no diaphragm); the image
 * plane is the computed paraxial back focus at the D line (33.45 mm), since the patent prints no back focus.
 *
 * Semi-diameters are measured from Figure 1, which is drawn to scale (34.0 px/mm at 600 dpi across the first-to-last
 * vertex span, within 3 % on each doublet and the air gap). Front doublet 13.5 mm, against about 14.0 mm drawn for
 * the curved faces and 13.5 mm where the flat R3 face meets its corner chamfer. Rear doublet: R5 and R6 12.8 mm, the
 * drawn flat rim; R4 10.9 mm, where the drawn R4 arc ends at a short bevel that runs out to that rim. A flat land
 * (rimExtensionSd 12.8) stands for the bevel, so lens III draws flat-topped at the rim as in the figure; it lies outside
 * the clear aperture and stops no light. The f/3.8 axial beam clears every rim. The patent does not name its
 * glasses: lenses I to III carry modern catalog equivalents that match the printed nD and V at the printed
 * precision; lens IV has no such match. Elements carry the patent's lens numerals I to IV.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f38-us2231699",
  maker: "Kodak",
  name: "KODAK 100mm f/3.8 (US 2,231,699 Design)",
  subtitle: "US 2,231,699 A, Figure 1 \u2014 two-doublet f/3.8 telephoto",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 2 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/3.8",
      "TELEPHOTO"
    ],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: {
      design: 100.06
    },
    fNumber: {
      design: 3.8
    }
  },
  source: {
    patentNumber: "US 2,231,699 A",
    example: {
      label: "Figure 1",
      id: "1"
    },
    patentYear: 1941,
    authors: [
      "Harold F. Bennett"
    ],
    assignees: [
      "Eastman Kodak Company"
    ],
    sdSource: "figure-measured"
  },
  elements: [
    {
      id: 1,
      name: "I",
      label: "Element I",
      diagramLabel: "I",
      type: "Biconvex Positive",
      nd: 1.498,
      vd: 67,
      indexReference: "D",
      focalLengthMm: 37.47,
      glass: "N-BK10 (SCHOTT catalog equivalent; patent nD 1.498 / V 67.0; production supplier unspecified)",
      cemented: "C1",
      role: "Positive crown of the front cemented doublet; supplies the front component's power."
    },
    {
      id: 2,
      name: "II",
      label: "Element II",
      diagramLabel: "II",
      type: "Plano-Concave Negative",
      nd: 1.664,
      vd: 35.9,
      indexReference: "D",
      focalLengthMm: -71.46,
      glass: "J-BASF2 (HIKARI catalog equivalent; patent nD 1.664 / V 35.9; production supplier unspecified)",
      cemented: "C1",
      role: "Negative flint of the front cemented doublet, with a flat rear face."
    },
    {
      id: 3,
      name: "III",
      label: "Element III",
      diagramLabel: "III",
      type: "Biconcave Negative",
      nd: 1.516,
      vd: 64.1,
      indexReference: "D",
      focalLengthMm: -23.93,
      glass: "S-BSL7 (OHARA catalog equivalent; patent nD 1.516 / V 64.1; production supplier unspecified)",
      cemented: "C2",
      role: "Negative crown at the front of the rear cemented doublet."
    },
    {
      id: 4,
      name: "IV",
      label: "Element IV",
      diagramLabel: "IV",
      type: "Biconvex Positive",
      nd: 1.639,
      vd: 55.5,
      indexReference: "D",
      focalLengthMm: 32.87,
      glass: "Unmatched (nD 1.639 / V 55.5)",
      cemented: "C2",
      role: "Higher-index positive rear element; the index step at its cemented face R5 is the patent's means of reducing distortion."
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 29.18,
      d: 7.3,
      sd: 13.5,
      medium: 1
    },
    {
      label: "2",
      R: -47.45,
      d: 2.1,
      sd: 13.5,
      medium: 2
    },
    {
      label: "3",
      R: "flat",
      d: 19.75,
      sd: 13.5
    },
    {
      label: "STO",
      R: "flat",
      d: 19.75
    },
    {
      label: "4",
      R: -16.45,
      d: 2.9,
      sd: 10.9,
      rimExtensionSd: 12.8,
      medium: 3
    },
    {
      label: "5",
      R: 52.5,
      d: 5.5,
      sd: 12.8,
      medium: 4
    },
    {
      label: "6",
      R: -33.58,
      d: 33.452186952425265,
      sd: 12.8
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
  },
  aperture: {
    nominalFNumber: 3.8,
    fStops: [
      3.8,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3"
    },
    {
      text: "C2",
      fromSurface: "4",
      toSurface: "6"
    }
  ],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
