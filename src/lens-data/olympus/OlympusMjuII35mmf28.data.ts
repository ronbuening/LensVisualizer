import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * JP 3610160 B2, Example 1, at the printed millimetre scale (factor 1; no unit conversion).
 * Radii, thicknesses, indices, Abbe numbers and the rear asphere follow the patent.
 * The printed 2.49 mm L2-to-L3 gap is split 1.60 / 0.89 mm at the stated stop position.
 * The iris radius is inferred from f/2.89, not from the drawing's approximately 5.3 mm radius.
 * Semi-diameters are estimated from Figure 1, which is drawn to scale (35.2 px/mm at 600 dpi from
 * the 21.0641 mm first-to-last vertex span, confirmed by the stop position). It draws L1, L2, L3 and
 * L4 square-cut at about 6.9, 6.1, 6.6 and 8.7 mm. L1's rear face would meet L2's front face near
 * 6.25 mm, so its clear radius stays 5.9 mm and a flat land carries L1's edge out to 6.9 mm, just
 * ahead of L2's rim where the drawing shows the two touching; gapSagFrac 0.94 admits that pair.
 * L4's front curve ends at 7.3 mm with a flat land to 8.7 mm; its aspheric rear face runs to the
 * 8.7 mm edge, as drawn. The clear radii follow the drawing and surface geometry; none is enlarged
 * to pass rays.
 * The infinity image plane uses the printed fb = 14.6687 mm.
 * Whole-unit focus to 0.35 m is described by the patent, but its spacings are not tabulated.
 * The rear gap alone varies to an inferred 18.87 mm, with three inferred intermediate states.
 * The helium d-line reference follows the d/g/F/C labels in Figure 7; glass suppliers are unknown.
 */
const LENS_DATA = {
  schema: 2,
  visible: true,
  layout: {
    scFill: 0.6,
    yScFill: 0.45,
  },
  checks: {
    gapSagFrac: 0.94,
  },
  focus: {
    closeFocusM: 0.35,
    keyframes: [0, 0.25, 0.5, 0.75, 1],
    description:
      "Whole-unit focus from infinity to 0.35 m: all four elements and the iris move 4.20 mm toward the object. Only the rear gap changes, from the printed 14.6687 mm to an inferred 18.87 mm; the three intermediate spacings are also inferred.",
  },
  key: "olympus-mju-ii-35-f28",
  maker: "Olympus",
  name: "OLYMPUS 35mm f/2.8 (Olympus μ[mju:]-II)",
  subtitle: "JP 3610160 B2, Example 1 — Olympus / Takahashi, Shimizu & Takato",
  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      marketing: 35,
      design: 33.91,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.89,
    },
    closeFocusM: {
      marketing: 0.35,
    },
    specs: ["4 ELEMENTS / 4 GROUPS", "DESIGN f = 33.91 mm", "DESIGN F/2.89", "1 ASPHERICAL SURFACE"],
  },
  source: {
    patentNumber: "JP 3610160 B2",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2005,
    authors: ["Toshio Takahashi", "Seiji Shimizu", "Hideyasu Takato"],
    assignees: ["Olympus Corporation"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7432,
      vd: 49.31,
      focalLengthMm: 20.69,
      glass: "S-LAM60 (Ohara)",
      indexReference: "d",
      role: "Positive front collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.46,
      focalLengthMm: -16.21,
      glass: "S-TIH10 (Ohara)",
      indexReference: "d",
      role: "Dispersive negative element ahead of the iris",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.19,
      focalLengthMm: 20.5,
      glass: "S-LAH51 (Ohara)",
      indexReference: "d",
      role: "Positive element behind the iris",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.52542,
      vd: 55.78,
      focalLengthMm: -62.97,
      glass: "Unmatched (COP resin, Zeonex type; nd 1.52542 / νd 55.78)",
      indexReference: "d",
      role: "Negative rear resin element with an aspherical image-side surface",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 12.0391,
      d: 2.7545,
      sd: 6.9,
      medium: 1,
    },
    {
      label: "2",
      R: 50.0294,
      d: 0.92,
      sd: 5.9,
      rimExtensionSd: 6.9,
    },
    {
      label: "3",
      R: -36.9805,
      d: 1,
      sd: 6.1,
      medium: 2,
    },
    {
      label: "4",
      R: 17.5343,
      d: 1.6,
      sd: 6.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.89,
    },
    {
      label: "5",
      R: 40.7109,
      d: 2.25,
      sd: 6.5,
      medium: 3,
    },
    {
      label: "6",
      R: -26.0206,
      d: 10.2496,
      sd: 6.5,
    },
    {
      label: "7",
      R: -8.3616,
      d: 1.4,
      sd: 7.3,
      medium: 4,
      rimExtensionSd: 8.7,
    },
    {
      label: "8A",
      R: -11.8346,
      sd: 8.7,
      asphere: {
        K: 0,
        A4: 0.000031902,
        A6: -7.6178e-7,
        A8: 1.0551e-8,
        A10: -7.6647e-11,
      },
    },
  ],
  gaps: {
    "8A": {
      label: "BF",
      values: [[14.6687, 15.535, 16.506, 17.6069, 18.87]],
    },
  },
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "2" },
    { text: "L2", fromSurface: "3", toSurface: "4" },
    { text: "L3", fromSurface: "5", toSurface: "6" },
    { text: "L4", fromSurface: "7", toSurface: "8A" },
  ],
  aperture: {
    nominalFNumber: 2.89,
    fStops: [2.89, 4, 5.6, 8, 11],
    maxFNumber: 11,
    blades: 3,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 64,
    maxTraceFieldDeg: 32,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
