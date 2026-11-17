import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,899,934, "Ultralight Intensive Objective", Max Berek, assigned to Ernst Leitz, Optische Werke, G.m.b.H.,
 * Wetzlar. Filed July 20, 1932 (German priority June 6, 1931); granted March 7, 1933. The patent prints two
 * examples, headed by figure: Figure 1 (1:2.0, six elements) and Figure 2 (1:1.3, seven elements). This file
 * transcribes Figure 2 (printed p. 2, left column lines 42-50 and right column lines 51-55).
 *
 * PRESCRIPTION: radii r1-r11 with their printed signs, glass thicknesses d1-d7, air spaces a1-a3, and the printed
 * nD and ν for each element, all exactly as printed. Three cemented pairs: L2/L3 at r4, L4/L5 at r7, L6/L7 at r10,
 * as both the table and the drawing show. Seven elements in four groups.
 *
 * SCALE: none. The patent prints no focal length; the table as printed computes to EFL 99.99 mm, so it is the
 * usual normalisation to f = 100. The claim's conditions (cement-face index step 0.0569, (n' - n)f/r = 0.139,
 * a2/a3 = 0.93, total air 0.26 of the length) all hold at this scale.
 *
 * GLASS: the table heads its index column nD (sodium D line) and prints ν, so the elements use
 * indexReference "D". No partial-dispersion data are printed; no catalogue glass is named.
 *
 * INFERRED: the patent prints no stop position and the drawing shows none. The iris is placed in the air space a3
 * between the negative member and the rear member, 8.4 mm behind r8 and 3.634 mm ahead of r9, a usual iris
 * position in triplet-derived designs of this kind. All clear semi-diameters are estimates (the patent prints no diameters). The image
 * distance is the computed paraxial back focus, 46.831 mm; the patent prints none. Infinity focus only.
 */
const LENS_DATA = {
  schema: 2,
  key: "leitz-100mm-f13-us1899934-figure-2",
  maker: "Leica",
  name: "LEITZ 100mm f/1.3 (US 1,899,934 Figure 2 Design)",
  subtitle: "FIGURE 2 \u2014 HIDDEN QUALIFIED REFERENCE",
  visible: true,
  catalog: {
    specs: [
      "7 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; NO RETAIL MATCH",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      design: 99.99,
    },
    fNumber: {
      design: 1.3,
    },
  },
  source: {
    patentNumber: "US 1,899,934 A",
    example: {
      label: "Figure 2",
      id: "2",
    },
    patentYear: 1933,
    authors: ["Max Berek"],
    assignees: ["Ernst Leitz GmbH"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.624,
      vd: 58.2,
      indexReference: "D",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconvex",
      nd: 1.624,
      vd: 58.2,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave",
      nd: 1.6219,
      vd: 36.1,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Positive Meniscus",
      nd: 1.6242,
      vd: 44.8,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconcave",
      nd: 1.5673,
      vd: 42.8,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Negative Meniscus",
      nd: 1.5407,
      vd: 47.2,
      indexReference: "D",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Biconvex",
      nd: 1.624,
      vd: 58.2,
      indexReference: "D",
      cemented: "D3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 93.6,
      d: 8.91,
      sd: 39.5,
      medium: 1,
    },
    {
      label: "2",
      R: 324.07,
      d: 0.4457,
      sd: 39.5,
    },
    {
      label: "3",
      R: 71.315,
      d: 19.611,
      sd: 38,
      medium: 2,
    },
    {
      label: "4",
      R: -99.842,
      d: 5.348,
      sd: 38,
      medium: 3,
    },
    {
      label: "5",
      R: 445.72,
      d: 11.143,
      sd: 33,
    },
    {
      label: "6",
      R: -108.755,
      d: 10.697,
      sd: 27.5,
      medium: 4,
    },
    {
      label: "7",
      R: -40.828,
      d: 5.349,
      sd: 27.5,
      medium: 5,
    },
    {
      label: "8",
      R: 33.963,
      d: 8.4,
      sd: 27.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.634,
    },
    {
      label: "9",
      R: 62.846,
      d: 4.457,
      sd: 22.5,
      medium: 6,
    },
    {
      label: "10",
      R: 54.734,
      d: 12.48,
      sd: 22.5,
      medium: 7,
    },
    {
      label: "11",
      R: -69.71,
      d: 46.83135705853188,
      sd: 22.5,
    },
  ],
  aperture: {
    nominalFNumber: 1.3,
    fStops: [1.3, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only patent reference with computed paraxial BFD; no retail identity.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
