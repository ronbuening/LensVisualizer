import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Fred E. Altman, US 1,880,394 A (Eastman Kodak Company, 1932), sole numerical
 * example: five-element f/6 aerial objective. The printed focal length is 100
 * units; one unit is treated as one millimetre, giving a D-line EFL of 100.01 mm.
 * Radius magnitudes, thicknesses, spaces, D indices and Abbe numbers follow the
 * table; signs follow the drawing. D is taken as sodium, 589.3 nm. The analysis
 * lists the printed G′ indices and small element/component focal-length differences.
 * The stop divides the 7.54 mm doublet gap into 3.11/4.43 mm, inferred from the
 * drawing and the astigmatic node below 15°; its opening follows f/6. Rims are estimated
 * from the drawing's proportions. Both doublets taper toward the iris and the rear
 * doublet is taller than the middle one. The drawing is not uniformly to scale, and
 * the rear crown's edge thickness limits its diameter. The axial f/6 beam and 15° chief ray clear the rims.
 * The 15° field is read as a half-angle; its real chief-ray height sets the image circle.
 * The image plane is at paraxial back focus, 88.64 mm. No back focus or close-focus data is printed.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f6-us1880394",
  maker: "Kodak",
  name: "KODAK 100mm f/6 (US 1,880,394 Design)",
  subtitle: "US 1,880,394 A, sole example — Eastman Kodak / Altman",
  visible: true,
  source: {
    patentNumber: "US 1,880,394 A",
    patentYear: 1932,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.01,
    },
    fNumber: {
      design: 6,
    },
    elementCount: 5,
    groupCount: 3,
    imageCircleMm: 53.6,
    specs: ["5 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/6"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "1",
      type: "Biconvex Positive",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 40.53,
      glass: "Unmatched (nD 1.61088 / ν 57.2)",
      role: "Front positive crown that collects the incident light.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "2",
      type: "Positive Meniscus",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 44.65,
      glass: "Unmatched (nD 1.61088 / ν 57.2)",
      role: "Positive crown member of the middle negative doublet, contributing colour correction.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "3",
      type: "Biconcave Negative",
      nd: 1.54995,
      vd: 45.8,
      indexReference: "D",
      focalLengthMm: -16.65,
      glass: "E-FEL1 (spectral proxy; patent nD 1.54995 / ν 45.8; supplier and melt unspecified)",
      role: "Dispersive negative member that supplies the middle doublet's negative power.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "4",
      type: "Biconcave Negative",
      nd: 1.52301,
      vd: 50.5,
      indexReference: "D",
      focalLengthMm: -35.72,
      glass: "Unmatched (nD 1.52301 / ν 50.5)",
      role: "Negative member of the rear doublet, balancing its positive crown.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "5",
      type: "Biconvex Positive",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 21.87,
      glass: "Unmatched (nD 1.61088 / ν 57.2)",
      role: "Strong positive crown that gives the rear doublet its net converging power.",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 27.52,
      d: 2.74,
      sd: 10.6,
      medium: 1,
    },
    {
      label: "2",
      R: -237.52,
      d: 5.22,
      sd: 10.6,
    },
    {
      label: "3",
      R: -35.24,
      d: 1.96,
      sd: 8.9,
      medium: 2,
    },
    {
      label: "4",
      R: -15.7,
      d: 0.56,
      sd: 8.9,
      medium: 3,
    },
    {
      label: "5",
      R: 22.26,
      d: 3.11,
      sd: 7.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.43,
    },
    {
      label: "6",
      R: -136.41,
      d: 0.84,
      sd: 8,
      medium: 4,
    },
    {
      label: "7",
      R: 21.69,
      d: 3.35,
      sd: 9,
      medium: 5,
    },
    {
      label: "8",
      R: -32.73,
      d: 88.635299,
      sd: 9,
    },
  ],
  aperture: {
    nominalFNumber: 6,
    fStops: [6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 30,
    maxTraceFieldDeg: 15,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "FRONT (+)",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "MIDDLE (−)",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "REAR (+)",
      fromSurface: "6",
      toSurface: "8",
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
