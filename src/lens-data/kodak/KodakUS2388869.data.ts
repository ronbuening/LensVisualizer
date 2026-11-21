import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,388,869 A, Example II, from the second table on PDF page 2, in millimeters.
 * The page 1 drawing depicts Example I. The printed D-line indices, Abbe numbers,
 * radii and internal spacings are retained. The table gives EF 100 mm and BF
 * 89.5 mm; the prescription computes to EFL 99.59 mm and BF 89.11 mm, with nearly
 * the same BF/EF ratio. The image plane is at that computed paraxial focus.
 * The source's element-power summary chart is also approximate.
 * The text places the diaphragm about 2 mm behind the rear vertex; the model
 * uses exactly 2 mm. Its opening is derived from f/8; clear rims are inferred.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f8-us2388869",
  maker: "Kodak",
  name: "KODAK 100mm f/8 (US 2,388,869 Design)",
  visible: true,
  source: {
    patentNumber: "US 2,388,869 A",
    patentYear: 1945,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Max Reiss"],
    assignees: ["Eastman Kodak Company"],
    errata: [
      {
        status: "unresolved",
        note: "Example II gives EF 100 mm and BF 89.5 mm; its printed prescription computes to EFL 99.594153 mm and paraxial BF 89.110640 mm, with nearly the same BF/EF ratio. The printed prescription is retained and the image plane uses its paraxial focus. The element focal-length chart is also approximate.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 8,
    },
    specs: ["3 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/8"],
    imageCircleMm: 102.097748,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Front positive collector",
      focalLengthMm: 52.83,
      nd: 1.611,
      vd: 58.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.611 / ν 58.8)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Central negative element with greater dispersion",
      focalLengthMm: -32.53,
      nd: 1.605,
      vd: 38.0,
      indexReference: "D",
      glass: "Unmatched (nD 1.605 / ν 38.0)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex Positive",
      role: "Rear positive element ahead of the diaphragm",
      focalLengthMm: 52.7,
      nd: 1.611,
      vd: 58.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.611 / ν 58.8)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.9,
      d: 5.5,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: -1604,
      d: 4.5,
      sd: 15,
    },
    {
      label: "3",
      R: -45.7,
      d: 1.5,
      sd: 12.5,
      medium: 2,
    },
    {
      label: "4",
      R: 35.0,
      d: 5.6,
      sd: 12.5,
    },
    {
      label: "5",
      R: "flat",
      d: 2.7,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -32.2,
      d: 2,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 87.11063991897167,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 54,
    maxTraceFieldDeg: 27,
  },
  layout: {
    yScFill: 0.5,
  },
  subtitle: "US 2,388,869 A, Example II — rear-diaphragm triplet design",
  groups: [
    {
      text: "Front positive element",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Central negative element",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear positive element",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
} satisfies LensDataV2Input;
export default LENS_DATA;
