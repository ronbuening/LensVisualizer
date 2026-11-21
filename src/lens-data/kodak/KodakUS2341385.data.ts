import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,341,385 A, sole example: five spherical elements in four groups, in millimetres.
 * The table prints f = 100 mm, f/3.5 and sodium D-line indices, retained here.
 * The stop position is inferred from the drawing; the iris follows f/3.5.
 * Lens rims are estimated from the drawing on PDF page 1 and clear the axial beam.
 * R2 and R6 follow the bevelled curve ends; no flat lands are inferred.
 * The image plane uses the calculated paraxial back focus of 101.53 mm rather than
 * the printed 101.7 mm, a difference consistent with table rounding; EFL is 100.08 mm.
 * The rear three components compute to 67.95 mm against the text's unexplained 67.6 mm.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f35-us2341385",
  maker: "Kodak",
  name: "KODAK 100mm f/3.5 (US 2,341,385 Design)",
  subtitle: "US 2,341,385 A, sole example — Eastman Kodak / Kingslake & Stevens",
  visible: true,
  source: {
    patentNumber: "US 2,341,385 A",
    patentYear: 1944,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Rudolf Kingslake", "Paul W. Stevens"],
    assignees: ["Eastman Kodak Company"],
    errata: [
      {
        status: "unresolved",
        note: "The text gives 67.6 mm for the rear three components; the printed prescription computes to 67.95 mm. The cause is unresolved and the table is retained.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 114.89,
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      design: 100.08,
    },
    fNumber: {
      design: 3.5,
    },
    specs: [
      "5 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/3.5",
      "RETROFOCUS",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62,
      vd: 60.4,
      indexReference: "D",
      focalLengthMm: -87.73,
      glass: "Unmatched (nD 1.620 / ν 60.4)",
      role: "Front negative member that extends back focus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      focalLengthMm: 55.23,
      glass: "H-LaK12 (CDGM)",
      role: "Positive front component of the rear member",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      focalLengthMm: -66.9,
      glass: "Unmatched (nD 1.617 / ν 36.6)",
      role: "Negative middle component that contributes to field correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      focalLengthMm: -92.14,
      glass: "Unmatched (nD 1.617 / ν 36.6)",
      role: "Dispersive negative element of the rear doublet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 42.01,
      glass: "Unmatched (nD 1.611 / ν 57.2)",
      role: "Positive element of the rear doublet that converges light toward the image",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 81.9,
      d: 7.1,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 31.6,
      d: 10.6,
      sd: 23.6,
    },
    {
      label: "3",
      R: 48.2,
      d: 11.4,
      sd: 24,
      medium: 2,
    },
    {
      label: "4",
      R: -172.6,
      d: 11.7,
      sd: 24,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.6,
    },
    {
      label: "5",
      R: -410.4,
      d: 4.9,
      sd: 22,
      medium: 3,
    },
    {
      label: "6",
      R: 46.1,
      d: 9.7,
      sd: 19.7,
    },
    {
      label: "7",
      R: 362.3,
      d: 4.6,
      sd: 25,
      medium: 4,
    },
    {
      label: "8",
      R: 48.9,
      d: 19.4,
      sd: 25,
      medium: 5,
    },
    {
      label: "9",
      R: -45.9,
      d: 101.527023,
      sd: 25,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 60,
    maxTraceFieldDeg: 30,
  },
  groups: [
    {
      text: "Front member",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Rear member",
      fromSurface: "3",
      toSurface: "9",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
