import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,967,836 A, sole numerical example in millimetres, by Willy Merté.
 * Five spherical elements in four groups, related to the R-Biotar family.
 * The patent prints d-line glass values and the diaphragm station: 43.80 mm
 * behind R4 and 16.59 mm before R5. The iris radius and all clear rims are
 * inferred. The image plane is the computed paraxial infinity focus because
 * no back focus is printed. The 7.16° half-field follows the stated image
 * diameter of approximately 25 mm; no finite-focus state is given.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-r-biotar-100mm-f09-us1967836",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA R-BIOTAR 100mm f/0.9 (US 1,967,836 Design)",
  subtitle: "US 1,967,836 A, sole example — R-Biotar family design",
  visible: true,
  source: {
    patentNumber: "US 1,967,836 A",
    patentYear: 1934,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 25,
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 0.9,
    },
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN F/0.9", "ALL SPHERICAL"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconvex Positive",
      nd: 1.63753,
      vd: 56.1,
      indexReference: "d",
      focalLengthMm: 126.56,
      glass: "Unmatched (nd 1.63753 / ν 56.1)",
      role: "Front positive collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Negative Meniscus",
      nd: 1.75823,
      vd: 27.4,
      indexReference: "d",
      focalLengthMm: -183.65,
      glass: "Unmatched (nd 1.75823 / ν 27.4)",
      role: "Dispersive negative member ahead of the diaphragm",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Plano-Convex Positive",
      nd: 1.46449,
      vd: 65.8,
      indexReference: "d",
      focalLengthMm: 210.23,
      glass: "FK3 (Schott)",
      role: "Positive collector behind the diaphragm",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Biconvex Positive",
      nd: 1.62203,
      vd: 53.1,
      indexReference: "d",
      focalLengthMm: 50.67,
      glass: "Unmatched (nd 1.62203 / ν 53.1)",
      role: "Positive member of the rear converging doublet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Negative Meniscus",
      nd: 1.75823,
      vd: 27.4,
      indexReference: "d",
      focalLengthMm: -94.52,
      glass: "Unmatched (nd 1.75823 / ν 27.4)",
      role: "Dispersive negative member of the rear converging doublet",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 135.14,
      d: 29.98,
      sd: 66,
      medium: 1,
    },
    {
      label: "2",
      R: -182.95,
      d: 9.78,
      sd: 60.5,
    },
    {
      label: "3",
      R: -128.96,
      d: 11.7,
      sd: 55,
      medium: 2,
    },
    {
      label: "4",
      R: -1813.8,
      d: 43.8,
      sd: 54,
    },
    {
      label: "STO",
      R: "flat",
      d: 16.59,
    },
    {
      label: "5",
      R: 97.65,
      d: 23.82,
      sd: 48,
      medium: 3,
    },
    {
      label: "6",
      R: "flat",
      d: 22.64,
      sd: 42,
    },
    {
      label: "7",
      R: 60.22,
      d: 15.1,
      sd: 27,
      medium: 4,
    },
    {
      label: "8",
      R: -59.78,
      d: 3.4,
      sd: 26,
      medium: 5,
    },
    {
      label: "9",
      R: -369.17,
      d: 26.004567,
      sd: 27,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 0.9,
    fStops: [0.9, 1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 14.3228226,
    maxTraceFieldDeg: 7.1614113,
  },
  groups: [
    {
      text: "Front positive singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Negative singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Plano-convex positive singlet",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "Rear cemented doublet",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
