import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,899,934 A (Max Berek, Ernst Leitz, granted 1933), Figure 1 example, f/2.
 * Radii, thicknesses, air spaces, nD and Abbe numbers are copied exactly as printed, with the table's own
 * signs; the table is normalised to f = 100 (the computed EFL is 99.998 mm). No scaling is applied.
 * Six spherical elements in four groups; L3/L4 and L5/L6 are the patent's two cemented members.
 * Inferred, not printed: the iris position (placed in the 7.56 mm air space behind the cemented negative
 * member, 6.5 mm behind r7 and 1.06 mm ahead of r8), all clear semi-diameters, and the back focus (the
 * computed paraxial infinity value). The patent states no focal length, field angle or close-focus data.
 * The concave r7 face would reach 7.41 mm behind its vertex at its 23 mm rim, past the inferred iris plane, so
 * its rim is cut flat at the iris plane (6.5 mm, cut radius 21.68 mm); no traced beam reaches that radius.
 */
const LENS_DATA = {
  schema: 2,
  key: "leitz-100mm-f2-us1899934-figure-1",
  maker: "Leica",
  name: "LEITZ 100mm f/2 (US 1,899,934 Figure 1 Design)",
  subtitle: "FIGURE 1 \u2014 HIDDEN QUALIFIED REFERENCE",
  visible: true,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 1,899,934 A",
    example: {
      label: "Figure 1",
      id: "1",
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
      nd: 1.6185,
      vd: 60.5,
      indexReference: "D",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconvex",
      nd: 1.6185,
      vd: 60.5,
      indexReference: "D",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Positive Meniscus",
      nd: 1.689,
      vd: 31.2,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave",
      nd: 1.6034,
      vd: 38,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Negative Meniscus",
      nd: 1.6034,
      vd: 38,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconvex",
      nd: 1.658,
      vd: 51.4,
      indexReference: "D",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 51.193,
      d: 9.07,
      sd: 26,
      medium: 1,
    },
    {
      label: "2",
      R: 148.9,
      d: 1,
      sd: 26,
    },
    {
      label: "3",
      R: 132,
      d: 8.06,
      sd: 25,
      medium: 2,
    },
    {
      label: "4",
      R: -153.6,
      d: 5.72,
      sd: 25,
    },
    {
      label: "5",
      R: -57.46,
      d: 9.07,
      sd: 23,
      medium: 3,
    },
    {
      label: "6",
      R: -30.55,
      d: 5.04,
      sd: 23,
      medium: 4,
    },
    {
      label: "7",
      R: 39.4,
      d: 6.5,
      sd: 23,
      rimCutDepthMm: 6.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.06,
    },
    {
      label: "8",
      R: 120.9,
      d: 4.03,
      sd: 21.5,
      medium: 5,
    },
    {
      label: "9",
      R: 33.558,
      d: 12.09,
      sd: 21.5,
      medium: 6,
    },
    {
      label: "10",
      R: -63.51,
      d: 69.65283913735544,
      sd: 21.5,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description: "Infinity-only patent reference with computed paraxial BFD; no retail identity.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
