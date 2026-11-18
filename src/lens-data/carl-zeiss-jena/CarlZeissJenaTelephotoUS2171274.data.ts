import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Carl Zeiss Jena telephoto objective by Willy Merté, US 2,171,274 A (granted 29 August 1939), Figure 1.
 *
 * Source: the Figure 1 table of the patent (drawing sheet 1 and the printed table on page 1 agree).
 * The patent has two numerical examples; Figure 2 is not modelled here.
 * The patent prints the example at a focal length of 100 mm and an aperture of 1:4.
 * Printed and copied as printed: all eight radii with their signs, five glass thicknesses, both air gaps
 * (l1 = 17.61, l2 = 7.98), and the refractive index nd and Abbe number of each of the five glasses.
 * L2, L3 and L4 are cemented into one triplet.
 *
 * Inferred, not printed:
 * - Stop position. The drawing shows the diaphragm in the first air gap without a dimension. It is placed
 *   10.3 mm behind r2 and 7.31 mm ahead of r3, read from the Figure 1 drawing; the two parts add up to the
 *   printed 17.61 mm.
 * - Clear semi-diameters of every surface, estimated and checked against Figure 1 (drawn at about 16.2 px per
 *   lens mm at 300 dpi, from the vertex spacings): L1 13.5 (drawn about 13.9), the triplet 8 (drawn about 7.6,
 *   with L2 standing out to about 9.0 and both outer corners bevelled), L5 10 (drawn about 9.3). L2's front
 *   carries a drawn rim land out to 9.0 mm (rimExtensionSd), which adds no clear aperture. The triplet's 8 mm
 *   is within drawing accuracy; the bevelled rear face of L4 (about 6.5 mm) and L5 are kept wider than drawn
 *   because reducing them would cut off-axis light.
 * - Back focus. The last gap is the computed paraxial back focus, 51.1748 mm. The patent only says the
 *   back focus is about half the focal length.
 *
 * The printed table computes to a focal length of 100.03 mm (+0.03 %).
 *
 * Image circle: 26.34 mm, from the patent's stated image field of approximately 15° (full angle) at the
 * design focal length, 2 × 100.03 × tan 7.5°. The patent states no film format.
 *
 * Glass names: L1, L2 and L3 match catalog rows within the printed precision (Hoya PCD3, Hoya E-FL6,
 * Sumita SK5); these are modern rows with the same index and Abbe number, not a statement of the glass
 * Zeiss used. L4 and L5 match no catalog row and keep their printed index and Abbe number.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-telephoto-100mm-f4-us2171274",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TELEPHOTO 100mm f/4 (US 2,171,274 Design)",
  subtitle: "US 2,171,274 A, Figure 1 — Merté distortion-corrected telephoto",
  visible: true,
  catalog: {
    specs: ["5 ELEMENTS / 3 GROUPS", "DESIGN F/4", "ALL SPHERICAL", "TELEPHOTO"],
    elementCount: 5,
    groupCount: 3,
    imageCircleMm: 26.34,
    focalLengthMm: {
      design: 100.03,
    },
    fNumber: {
      design: 4,
    },
  },
  source: {
    patentNumber: "US 2,171,274 A",
    example: {
      label: "Figure 1",
      id: "1",
    },
    patentYear: 1939,
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.55226,
      vd: 63.3,
      focalLengthMm: 47.18,
      glass: "PCD3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Front positive lens; supplies all the converging power ahead of the stop.",
      indexReference: "d",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.56735,
      vd: 42.8,
      focalLengthMm: -11.63,
      glass: "E-FL6 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Front negative flint of the cemented triplet, the strongest element of the design.",
      indexReference: "d",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5891,
      vd: 61.3,
      focalLengthMm: 12.25,
      glass: "SK5 (Schott)",
      role: "Thick positive crown core of the cemented triplet; its two cemented faces correct colour.",
      indexReference: "d",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.59667,
      vd: 39.1,
      focalLengthMm: -16.93,
      glass: "Unmatched (nd 1.59667 / V 39.1, flint)",
      role: "Rear negative flint of the cemented triplet.",
      indexReference: "d",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.67165,
      vd: 32.3,
      focalLengthMm: 34.03,
      glass: "Unmatched (nd 1.67165 / V 32.3, dense flint)",
      role: "Weak positive rear lens, the outer part of the negative system; it holds distortion down.",
      indexReference: "d",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 26.057,
      d: 4.55,
      sd: 13.5,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 10.3,
      sd: 13.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 7.31,
    },
    {
      label: "3",
      R: -25.924,
      d: 1.8,
      sd: 8,
      rimExtensionSd: 9,
      medium: 2,
    },
    {
      label: "4",
      R: 9.077,
      d: 7.37,
      sd: 8,
      medium: 3,
    },
    {
      label: "5",
      R: -24.582,
      d: 5.21,
      sd: 8,
      medium: 4,
    },
    {
      label: "6",
      R: 18.515,
      d: 7.98,
      sd: 8,
    },
    {
      label: "7",
      R: 39.119,
      d: 2.46,
      sd: 10,
      medium: 5,
    },
    {
      label: "8",
      R: -53.602,
      d: 51.1748,
      sd: 10,
    },
  ],
  aperture: {
    nominalFNumber: 4,
    fStops: [4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [{ text: "C1", fromSurface: "3", toSurface: "6" }],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
