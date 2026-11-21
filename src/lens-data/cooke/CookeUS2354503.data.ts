import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Arthur Cox's telephoto objective, US 2,354,503 A, sole numerical example.
 * All printed dimensions are multiplied by 100 to express the f = 1 prescription
 * in millimetres at nominal f = 100 mm. Radii, thicknesses, D-line indices and
 * Abbe numbers follow the table. Its printed precision gives EFL 99.4874 mm
 * rather than 100 mm; no misprint has been identified. The image gap is the
 * computed paraxial back focus, 50.2779 mm. Clear rims and the stop 1.5 mm behind
 * R3 are inferred; the iris gives paraxial f/6.3. The external rear/front clear
 * aperture ratio is the printed 1.20. The 12-degree half-field is inferred from
 * the patent's aperture-ratio conditions, rather than an explicitly stated field.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f63-us2354503",
  maker: "Cooke",
  name: "COOKE 100mm f/6.3 (US 2,354,503 Design)",
  subtitle: "US 2,354,503 A, sole example — telephoto design",
  visible: false,
  source: {
    patentNumber: "US 2,354,503 A",
    patentYear: 1944,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Arthur Cox"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.49,
    },
    fNumber: {
      design: 6.3,
    },
    elementCount: 4,
    groupCount: 3,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/6.3", "TELEPHOTO"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive element of the front cemented doublet",
      focalLengthMm: 23.34,
      nd: 1.613,
      vd: 55.7,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / ν 55.7)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Dispersive negative element of the front cemented doublet",
      focalLengthMm: -36.17,
      nd: 1.676,
      vd: 32.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.676 / ν 32.3)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Negative element giving the rear air-spaced doublet its divergent power",
      focalLengthMm: -37.51,
      nd: 1.613,
      vd: 55.7,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / ν 55.7)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      role: "Positive element completing the rear air-spaced doublet",
      focalLengthMm: 84.42,
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.652 / ν 33.5)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 19.1,
      d: 4.1,
      sd: 8.2,
      medium: 1,
    },
    {
      label: "2",
      R: -52.4,
      d: 1.0,
      sd: 8.2,
      medium: 2,
    },
    {
      label: "3",
      R: 46.2,
      d: 1.5,
      sd: 8.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 22,
    },
    {
      label: "4",
      R: -11.05,
      d: 1.4,
      sd: 8.3,
      medium: 3,
    },
    {
      label: "5",
      R: -22.3,
      d: 0.1,
      sd: 8.3,
    },
    {
      label: "6",
      R: -21.25,
      d: 2.7,
      sd: 8.3,
      medium: 4,
    },
    {
      label: "7",
      R: -16.1,
      d: 50.27789,
      sd: 9.84,
    },
  ],
  aperture: {
    nominalFNumber: 6.3,
    fStops: [6.3, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front cemented member",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Rear air-spaced member",
      fromSurface: "4",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
