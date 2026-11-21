import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Fred E. Altman, US 1,880,394 A (Eastman Kodak Company, 1932), sole numerical
 * example: a five-element f/6 aerial objective. The patent gives dimensions for
 * a focal length of 100 units; each unit is treated as one millimetre here.
 * Radius magnitudes, thicknesses, air spaces, D-line indices and Abbe numbers
 * follow the table; radius signs follow the drawing. The D line is taken as
 * sodium, 589.3 nm. The printed G′ indices are listed in the analysis.
 *
 * The diaphragm is drawn in the 7.54 mm space between the two doublets. Its
 * inferred station is 3.11 mm after R5 and 4.43 mm before R6, consistent with
 * the drawn position and the stated astigmatic node below 15°. Its opening is
 * calculated for f/6. All clear semi-diameters are estimates. The image plane
 * is the computed paraxial back focus, 88.635299 mm; no back focus is printed.
 * The computed focal length is 100.011791 mm. The stated field is read as a
 * 15° half-angle; the image circle is twice the real chief-ray height there.
 * The patent gives no close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f6-us1880394",
  maker: "Kodak",
  name: "KODAK 100mm f/6 (US 1,880,394 Design)",
  subtitle: "US 1,880,394 A, sole example — Kodak f/6 aerial objective",
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
    specs: ["5 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/6", "AERIAL OBJECTIVE"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
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
      type: "Biconcave Negative",
      nd: 1.54995,
      vd: 45.8,
      indexReference: "D",
      focalLengthMm: -16.65,
      glass: "Unmatched (nD 1.54995 / ν 45.8)",
      role: "Dispersive negative member that supplies the middle doublet's negative power.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
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
      sd: 9.2,
      medium: 2,
    },
    {
      label: "4",
      R: -15.7,
      d: 0.56,
      sd: 9.2,
      medium: 3,
    },
    {
      label: "5",
      R: 22.26,
      d: 3.11,
      sd: 10,
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
      sd: 10.4,
      medium: 4,
    },
    {
      label: "7",
      R: 21.69,
      d: 3.35,
      sd: 8.6,
      medium: 5,
    },
    {
      label: "8",
      R: -32.73,
      d: 88.635299,
      sd: 8.6,
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
  rays: {
    offAxisFieldFrac: 1,
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
