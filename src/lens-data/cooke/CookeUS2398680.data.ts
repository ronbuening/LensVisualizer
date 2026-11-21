import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,398,680 A, Example I / Figure 1, Arthur Warmisham,
 * Taylor, Taylor & Hobson Limited (1946): seven glass elements in five groups
 * for photographic or projection use. Printed radii, thicknesses and air gaps
 * are multiplied by 100 for a nominal 100 mm f/1.5 objective in millimetres.
 * Sodium-D indices and Abbe numbers are copied as printed; R4 and R7 are cemented.
 * The patent gives no iris station, diameter or clear radii. Rims are estimated
 * from Figure 1 with axial-beam and off-axis illumination checks: C1 has a
 * 30.4 mm outer rim; C2 and both rear singlets have 24.3 mm outer rims.
 * The front singlet retains 37 mm to preserve edge light; R5/R6 retain
 * 21.1/22 mm. No lands are inferred; the facing concave rims remain tapered.
 * The inferred iris lies 11.10 mm after R5 and 8.96 mm before R6, preserving
 * their 20.06 mm gap; its opening gives paraxial f/1.5. The image plane is
 * 57.32 mm after R12 at paraxial focus, against 57.31 mm printed back focus.
 * Only infinity focus is modeled; the illustrative 10° half-field is not printed.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f15-us2398680",
  maker: "Cooke",
  name: "COOKE 100mm f/1.5 (US 2,398,680 Design)",
  subtitle: "US 2,398,680 A, Example I — Taylor Hobson / Warmisham",
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
    specs: ["7 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/1.5"],
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
      sd: 30.4,
      medium: 2,
    },
    {
      label: "4",
      R: 447.1,
      d: 3.13,
      sd: 30.4,
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
      sd: 24.3,
      medium: 5,
    },
    {
      label: "8",
      R: -53.51,
      d: 0.2,
      sd: 24.3,
    },
    {
      label: "9",
      R: 421,
      d: 5.76,
      sd: 24.3,
      medium: 6,
    },
    {
      label: "10",
      R: -168.3,
      d: 0.2,
      sd: 24.3,
    },
    {
      label: "11",
      R: 388.6,
      d: 4.95,
      sd: 24.3,
      medium: 7,
    },
    {
      label: "12",
      R: -232.1,
      d: 57.321981,
      sd: 24.3,
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
