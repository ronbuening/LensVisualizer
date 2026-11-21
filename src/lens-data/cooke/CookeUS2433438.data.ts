import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Arthur Cox's telephoto objective, US 2,433,438 A, Example I and Figure 1.
 * The normalized prescription is multiplied by 100 to give dimensions in millimetres.
 * Radii, thicknesses, D-line indices, Abbe numbers and the 53.75 mm image gap are printed;
 * the calculated paraxial back focus is 53.777 mm. The stop position is inferred.
 * Clear rims are estimated from Figure 1's proportions and the f/2.8 axial beam,
 * with a square front rim and a narrower rear face on the rear doublet.
 * The drawing compresses the meniscus thickness, so it gives no exact clear diameters.
 * The iris follows the paraxial f/2.8 aperture, and the illustrative
 * field extends to 10 degrees from the axis; the patent gives no field angle.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f28-us2433438",
  maker: "Cooke",
  name: "COOKE 100mm f/2.8 (US 2,433,438 Design)",
  subtitle: "US 2,433,438 A, Example I — Taylor Hobson / Cox",
  visible: false,
  source: {
    patentNumber: "US 2,433,438 A",
    patentYear: 1947,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Arthur Cox"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: {
      design: 100.02,
    },
    fNumber: {
      design: 2.8,
    },
    specs: [
      "5 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/2.8",
      "TELEPHOTO",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive element of the front cemented doublet",
      focalLengthMm: 49.42,
      nd: 1.623,
      vd: 60.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.623 / ν 60.3)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Dispersive negative element of the front cemented doublet",
      focalLengthMm: -53.99,
      nd: 1.699,
      vd: 30.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.699 / ν 30.5)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      role: "Convergent meniscus completing the front system",
      focalLengthMm: 77.53,
      nd: 1.623,
      vd: 60.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.623 / ν 60.3)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      role: "Positive element of the divergent rear doublet",
      focalLengthMm: 35.81,
      nd: 1.547,
      vd: 45.7,
      indexReference: "D",
      glass: "Unmatched (nD 1.547 / ν 45.7)",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      role: "Negative element giving the rear doublet its divergent power",
      focalLengthMm: -19.99,
      nd: 1.613,
      vd: 57.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / ν 57.6)",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 49.6,
      d: 7.94,
      sd: 18.6,
      medium: 1,
    },
    {
      label: "2",
      R: -76.18,
      d: 3.47,
      sd: 18.6,
      medium: 2,
    },
    {
      label: "3",
      R: 76.18,
      d: 0.1,
      sd: 17.7,
    },
    {
      label: "4",
      R: 37.01,
      d: 4.46,
      sd: 16.5,
      medium: 3,
    },
    {
      label: "5",
      R: 151,
      d: 1.5,
      sd: 16.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.47,
    },
    {
      label: "6",
      R: 23.63,
      d: 8.93,
      sd: 13.9,
      medium: 4,
    },
    {
      label: "7",
      R: -99.2,
      d: 3.47,
      sd: 13.9,
      medium: 5,
    },
    {
      label: "8",
      R: 14.17,
      d: 53.75,
      sd: 10.2,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  groups: [
    {
      text: "Front cemented doublet",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Convergent meniscus",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "Divergent rear doublet",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
