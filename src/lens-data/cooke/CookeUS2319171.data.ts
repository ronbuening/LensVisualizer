import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,319,171 A, Example II and Figure 2, by Arthur Warmisham and Charles Gorrie Wynne.
 * The normalized prescription at f = 1.000 is multiplied by 100 for a 100 mm design.
 * The table and claim 16 give S2 = .1591 and S3 = .0050; Figure 2 labels them .1691
 * and .0060. The model follows the two numerical tables, preserving the 15.91 mm
 * central air space. All radii, thicknesses, D-line indices and Abbe numbers are printed.
 * The stop's 8.8 / 7.11 mm split, bore and all clear rims are inferred; the final
 * image gap is the computed paraxial back focus. The modelled +/-10 degree field
 * is not specified by the patent. Element 3 is potassium bromide crystal; the
 * printed relative partial dispersions are documented in the analysis.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f2-us2319171",
  maker: "Cooke",
  name: "COOKE 100mm f/2 (US 2,319,171 Design)",
  subtitle: "US 2,319,171 A, Example II — Potassium bromide objective",
  visible: false,
  source: {
    patentNumber: "US 2,319,171 A",
    patentYear: 1943,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Arthur Warmisham", "Charles Gorrie Wynne"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 6,
    groupCount: 4,
    specs: ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/2"],
  },
  elements: [
    {
      id: 1,
      name: "Element 1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Front positive collector",
      focalLengthMm: 161.49,
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass: "Dense barium flint (nD 1.644 / ν 48.3)",
    },
    {
      id: 2,
      name: "Element 2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      role: "Positive member of the front cemented doublet",
      focalLengthMm: 64.83,
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass: "Dense barium flint (nD 1.644 / ν 48.3)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "Element 3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      role: "Potassium bromide negative member of the front cemented doublet",
      focalLengthMm: -49.84,
      nd: 1.558,
      vd: 31.5,
      indexReference: "D",
      glass: "Potassium bromide crystal (nD 1.558 / ν 31.5)",
      cemented: "C1",
    },
    {
      id: 4,
      name: "Element 4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      role: "Dispersive negative member of the rear cemented doublet",
      focalLengthMm: -48.57,
      nd: 1.651,
      vd: 33.5,
      indexReference: "D",
      glass: "Dense flint (nD 1.651 / ν 33.5)",
      cemented: "C2",
    },
    {
      id: 5,
      name: "Element 5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      role: "Positive member of the rear cemented doublet",
      focalLengthMm: 64.57,
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass: "Dense barium flint (nD 1.644 / ν 48.3)",
      cemented: "C2",
    },
    {
      id: 6,
      name: "Element 6",
      label: "Element 6",
      type: "Biconvex Positive",
      role: "Rear positive collector",
      focalLengthMm: 107.45,
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass: "Dense barium flint (nD 1.644 / ν 48.3)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.32,
      d: 8.45,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 159.9,
      d: 0.53,
      sd: 29,
    },
    {
      label: "3",
      R: 41.75,
      d: 9.5,
      sd: 26,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 4.18,
      sd: 23,
      medium: 3,
    },
    {
      label: "5",
      R: 27.81,
      d: 8.8,
      sd: 18.6,
    },
    {
      label: "STO",
      R: "flat",
      d: 7.11,
    },
    {
      label: "6",
      R: -31.62,
      d: 3.98,
      sd: 18.4,
      medium: 4,
    },
    {
      label: "7",
      R: "flat",
      d: 10.43,
      sd: 20,
      medium: 5,
    },
    {
      label: "8",
      R: -41.58,
      d: 0.5,
      sd: 22,
    },
    {
      label: "9",
      R: 316.7,
      d: 7.46,
      sd: 23,
      medium: 6,
    },
    {
      label: "10",
      R: -87.73,
      d: 73.905064,
      sd: 23,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
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
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Front cemented doublet",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "Rear cemented doublet",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "Rear singlet",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
