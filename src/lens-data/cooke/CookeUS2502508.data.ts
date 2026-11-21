import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,502,508 A, Example I and Figure 1, by Gordon Henry Cook.
 * The unit-focal-length prescription is multiplied by 100 to give millimetres.
 * Radii, thicknesses, air spaces and D-line glass data follow the printed table.
 * The inferred stop splits the 11.4 mm rear air space into 7.2 and 4.2 mm.
 * Clear radii are inferred; R1's 18.75 mm uses the printed 0.375F effective front
 * diameter. The image gap is the computed paraxial back focus, 76.297288 mm.
 * The illustrative ±5° field is not a field specification from the patent.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f267-us2502508",
  maker: "Cooke",
  name: "COOKE 100mm f/2.67 (US 2,502,508 Design)",
  subtitle: "US 2,502,508 A, Example I — three-component photographic objective",
  visible: false,
  source: {
    patentNumber: "US 2,502,508 A",
    patentYear: 1950,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Gordon Henry Cook"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.97,
    },
    fNumber: {
      design: 2.67,
    },
    elementCount: 4,
    groupCount: 3,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/2.67"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive front component",
      focalLengthMm: 57.35,
      nd: 1.6225,
      vd: 60.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.62250 / ν 60.4)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Negative middle component between the positive components",
      focalLengthMm: -30.96,
      nd: 1.62266,
      vd: 36,
      indexReference: "D",
      glass: "Unmatched (nD 1.62266 / ν 36.0)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      role: "Positive front element of the rear cemented doublet",
      focalLengthMm: 31.77,
      nd: 1.6138,
      vd: 57.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.61380 / ν 57.5)",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      role: "Negative rear element of the positive cemented doublet",
      focalLengthMm: -82.97,
      nd: 1.51414,
      vd: 56.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.51414 / ν 56.5)",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 37.74,
      d: 8.1,
      sd: 18.75,
      medium: 1,
    },
    {
      label: "2",
      R: -606.07,
      d: 10.9,
      sd: 18.75,
    },
    {
      label: "3",
      R: -55.56,
      d: 3.8,
      sd: 18,
      medium: 2,
    },
    {
      label: "4",
      R: 30.3,
      d: 7.2,
      sd: 17,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.2,
    },
    {
      label: "5",
      R: 101.06,
      d: 9,
      sd: 17,
      medium: 3,
    },
    {
      label: "6",
      R: -23.34,
      d: 3,
      sd: 16,
      medium: 4,
    },
    {
      label: "7",
      R: -53.79,
      d: 76.2972883785474,
      sd: 17,
    },
  ],
  aperture: {
    nominalFNumber: 2.67,
    fStops: [2.67, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front component",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle component",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear component",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
