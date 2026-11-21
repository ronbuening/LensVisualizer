import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,398,680 A, Arthur Warmisham, Taylor, Taylor & Hobson Limited (1946),
 * Example I and Figure 1: seven glass elements in five groups for photographic
 * or projection use. Every printed radius, thickness and air gap is multiplied
 * by 100 to give a nominal 100 mm f/1.5 objective in millimetres.
 * The indices refer to the sodium D line; Abbe numbers are copied as printed.
 * The cemented interfaces are R4 (elements 2/3) and R7 (elements 4/5).
 *
 * The patent gives no iris position, iris diameter or clear semi-diameters.
 * The inferred stop is 11.10 mm after R5 and 8.96 mm before R6, preserving
 * their 20.06 mm separation; its opening is set for paraxial f/1.5. All rims
 * are estimates. The image plane is the calculated paraxial back focus,
 * 57.32 mm after R12, against the printed 57.31 mm. Only infinity focus is
 * modeled, and the illustrative 10-degree half-field is not a patent claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f15-us2398680",
  maker: "Cooke",
  name: "COOKE 100mm f/1.5 (US 2,398,680 Design)",
  subtitle: "US 2,398,680 A, Example I — seven-element f/1.5 objective",
  visible: false,
  source: {
    patentNumber: "US 2,398,680 A",
    patentYear: 1946,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Arthur Warmisham"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.5,
    },
    elementCount: 7,
    groupCount: 5,
    specs: ["7 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN F/1.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Front positive collector",
      focalLengthMm: 150.49,
      nd: 1.6135,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6135 / ν 59.3)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      role: "Positive front member of the cemented front meniscus",
      cemented: "C1",
      focalLengthMm: 66.7,
      nd: 1.6431,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6431 / ν 48.3)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Dispersive rear member of the front meniscus, concave towards the stop",
      cemented: "C1",
      focalLengthMm: -43.24,
      nd: 1.67605,
      vd: 32.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.67605 / ν 32.3)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      role: "Dispersive front member of the rear doublet, concave towards the stop",
      cemented: "C2",
      focalLengthMm: -44.37,
      nd: 1.621,
      vd: 36.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.621 / ν 36.2)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      role: "High-index positive rear member of the rear doublet",
      cemented: "C2",
      focalLengthMm: 52.23,
      nd: 1.7445,
      vd: 45.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.7445 / ν 45.8)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      role: "First of the two positive rear collectors",
      focalLengthMm: 196.87,
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / ν 59.3)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      role: "Final positive collector, with its shallower face towards the front",
      focalLengthMm: 237.57,
      nd: 1.6135,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6135 / ν 59.3)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 80.84,
      d: 10.86,
      sd: 37,
      medium: 1,
    },
    {
      label: "2",
      R: 616.6,
      d: 0.2,
      sd: 37,
    },
    {
      label: "3",
      R: 39.72,
      d: 16.93,
      sd: 33,
      medium: 2,
    },
    {
      label: "4",
      R: 447.1,
      d: 3.13,
      sd: 32,
      medium: 3,
    },
    {
      label: "5",
      R: 27.36,
      d: 11.1,
      sd: 21.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 8.96,
    },
    {
      label: "6",
      R: -35.68,
      d: 4.14,
      sd: 22,
      medium: 4,
    },
    {
      label: "7",
      R: 126.3,
      d: 14.09,
      sd: 23,
      medium: 5,
    },
    {
      label: "8",
      R: -53.51,
      d: 0.2,
      sd: 29,
    },
    {
      label: "9",
      R: 421,
      d: 5.76,
      sd: 28,
      medium: 6,
    },
    {
      label: "10",
      R: -168.3,
      d: 0.2,
      sd: 26,
    },
    {
      label: "11",
      R: 388.6,
      d: 4.95,
      sd: 26,
      medium: 7,
    },
    {
      label: "12",
      R: -232.1,
      d: 57.321981,
      sd: 26,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2 + L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4 + L5",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "G4 · L6",
      fromSurface: "9",
      toSurface: "10",
    },
    {
      text: "G5 · L7",
      fromSurface: "11",
      toSurface: "12",
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
