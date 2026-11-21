import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 553,844 A, sole numerical example, described as a preferred form.
 * Radii, thicknesses and air spaces are the patent's unit-focal-length values
 * multiplied by 100 to give millimetres; this is not the 2 in production lens.
 * The printed table computes to EFL 101.38 mm against the stated 100 mm at this
 * scale. Its values are retained, with the discrepancy recorded as unresolved.
 * Indices refer to the D line (taken as sodium, 589.3 nm).
 * The stop is inferred 11.4 mm after R6, leaving 10.1 mm before R7; all clear
 * semi-diameters are inferred. The image plane is the computed paraxial back
 * focus, 52.933704 mm behind R11. Neither stop nor back focus is printed.
 */
const LENS_DATA = {
  schema: 2,
  key: "dallmeyer-septac-100mm-f15-gb553844",
  maker: "Dallmeyer",
  name: "DALLMEYER SEPTAC 100mm f/1.5 (GB 553,844 Design)",
  subtitle: "GB 553,844 A, preferred form — Septac f/1.5 family",
  visible: true,
  source: {
    patentNumber: "GB 553,844 A",
    patentYear: 1943,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Bertram Langton"],
    assignees: ["J. H. Dallmeyer, Limited"],
    errata: [
      {
        status: "unresolved",
        note: "The printed table computes to EFL 101.38 mm at the model's scale, whereas F = 1.0 implies 100 mm. The page image is unambiguous; the tested single-radius alternatives worsen spherical correction and the sine condition. The printed values are retained.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 91.23,
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      design: 101.38,
    },
    fNumber: {
      design: 1.5,
    },
    specs: ["7 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/1.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Positive front collecting element",
      focalLengthMm: 120.7,
      nd: 1.6436,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6436 / ν 48.3)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      role: "Positive front member of the cemented triplet",
      focalLengthMm: 115.89,
      cemented: "C1",
      nd: 1.6436,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6436 / ν 48.3)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      role: "Low-index positive middle member of the cemented triplet",
      focalLengthMm: 169.58,
      cemented: "C1",
      nd: 1.51,
      vd: 64.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.5100 / ν 64.5)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      role: "Dispersive negative rear member of the cemented triplet",
      focalLengthMm: -38.92,
      cemented: "C1",
      nd: 1.7005,
      vd: 30.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.7005 / ν 30.2)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      role: "Dispersive negative front member of the rear doublet",
      focalLengthMm: -54.04,
      cemented: "C2",
      nd: 1.6193,
      vd: 36.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.6193 / ν 36.4)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      role: "Positive rear member of the rear doublet",
      focalLengthMm: 67.01,
      cemented: "C2",
      nd: 1.6435,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6435 / ν 48.3)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      role: "Positive rear collecting element",
      focalLengthMm: 87.38,
      nd: 1.6142,
      vd: 56.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6142 / ν 56.3)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 66.07,
      d: 10.5,
      sd: 35,
      medium: 1,
    },
    {
      label: "2",
      R: 414.47,
      d: 0.5,
      sd: 35,
    },
    {
      label: "3",
      R: 43.827,
      d: 12,
      sd: 33,
      medium: 2,
    },
    {
      label: "4",
      R: 94.874,
      d: 8,
      sd: 31,
      medium: 3,
    },
    {
      label: "5",
      R: -950.5,
      d: 2,
      sd: 26,
      medium: 4,
    },
    {
      label: "6",
      R: 28.096,
      d: 11.4,
      sd: 21,
    },
    {
      label: "STO",
      R: "flat",
      d: 10.1,
    },
    {
      label: "7",
      R: -33.465,
      d: 2,
      sd: 21,
      medium: 5,
    },
    {
      label: "8",
      R: "flat",
      d: 11,
      sd: 22,
      medium: 6,
    },
    {
      label: "9",
      R: -43.123,
      d: 2,
      sd: 26,
    },
    {
      label: "10",
      R: 122.69,
      d: 11,
      sd: 31,
      medium: 7,
    },
    {
      label: "11",
      R: -92.14,
      d: 52.933704085610145,
      sd: 31,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 50,
    maxTraceFieldDeg: 25,
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2–L4",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "G3 · L5–L6",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "G4 · L7",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "6" },
    { text: "C2", fromSurface: "7", toSurface: "9" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
