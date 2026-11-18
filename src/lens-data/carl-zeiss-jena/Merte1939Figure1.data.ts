import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Willy Merté telephoto objective, US 2,171,274 A (granted 29 August 1939), Figure 1.
 *
 * Source: the Figure 1 table of the patent (drawing sheet 1 and the printed table on page 1 agree).
 * The patent has two numerical examples; Figure 2 is not modelled here.
 * Scale: the patent's own normalisation, focal length 100 mm at 1:4. No scaling or unit conversion is applied.
 * Printed and copied as printed: all eight radii with their signs, five glass thicknesses, both air gaps
 * (l1 = 17.61, l2 = 7.98), and the refractive index nd and Abbe number of each of the five glasses.
 * L2, L3 and L4 are cemented into one triplet.
 *
 * Inferred, not printed:
 * - Stop position. The drawing shows the diaphragm in the first air gap without a dimension. It is placed
 *   10.3 mm behind r2 and 7.31 mm ahead of r3, read from the Figure 1 drawing; the two parts add up to the
 *   printed 17.61 mm.
 * - Clear semi-diameters of every surface (estimated; close to the drawing).
 * - Back focus. The last gap is the computed paraxial back focus, 51.1748 mm. The patent only says the
 *   back focus is about half the focal length.
 *
 * The printed table computes to a focal length of 100.03 mm (+0.03 %).
 */
const LENS_DATA = {
  schema: 2,
  key: "zeiss-merte-us2171274-figure-1",
  maker: "Carl Zeiss Jena",
  name: "MERTE FIGURE 1 100 mm f/4",
  subtitle: "1939 FIGURE 1; PATENT-ONLY RECONSTRUCTION",
  visible: false,
  catalog: {
    specs: [
      "5 ELEMENTS / 3 GROUPS",
      "PATENT ONLY; NO RETAIL MATCH",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 5,
    groupCount: 3,
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
      label: "L1",
      type: "Plano-convex",
      nd: 1.55226,
      vd: 63.3,
      indexReference: "d",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave",
      nd: 1.56735,
      vd: 42.8,
      indexReference: "d",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex",
      nd: 1.5891,
      vd: 61.3,
      indexReference: "d",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave",
      nd: 1.59667,
      vd: 39.1,
      indexReference: "d",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex",
      nd: 1.67165,
      vd: 32.3,
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
    description:
      "Infinity-only patent reference; computed paraxial BFD; retail identity not established.",
  },
  groups: [],
  doublets: [{ text: "T1", fromSurface: "3", toSurface: "6" }],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
