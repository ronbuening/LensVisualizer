import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,888,156 A, sole numerical example (William F. Bielicke, granted 1932).
 * Both tables agree on radii, thicknesses, spaces, D-line indices and Abbe numbers;
 * the printed G-line indices are listed in the analysis. Five elements form four
 * groups; only elements 3 and 4 are cemented, at R6, and R2 is plane.
 * Printed 100 mm f/2.5 gives D-line EFL 99.90 mm and back focus 78.28 mm;
 * the infinity image plane uses this calculated, unprinted back focus.
 * Rims and stop position are inferred: the stop at z = 26.4 mm divides the printed
 * 9.2 mm gap into 5.4 + 3.8 mm. Paraxial f/2.5 sets its radius; the finite beam is f/2.58.
 * The 10.0° half-field and f-stop list are chosen; no field, format or close focus is printed.
 * The patent names no assignee; no production lens is confirmed for this design.
 */
const LENS_DATA = {
  schema: 2,
  key: "bielicke-100mm-f25-us1888156",
  maker: null,
  name: "BIELICKE 100mm f/2.5 (US 1,888,156 Design)",
  subtitle: "US 1,888,156 A, sole example — Bielicke",
  visible: true,
  source: {
    patentNumber: "US 1,888,156 A",
    patentYear: 1932,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["William F. Bielicke"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.9,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 5,
    groupCount: 4,
    specs: ["5 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/2.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.658,
      vd: 51.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.6580 / ν 51.4)",
      focalLengthMm: 64.13,
      role: "Positive front crown collecting the incident beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6741,
      vd: 32.0,
      indexReference: "D",
      glass: "Unmatched (nD 1.6741 / ν 32.0)",
      focalLengthMm: -38.09,
      role: "Dispersive negative singlet ahead of the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5821,
      vd: 42.0,
      indexReference: "D",
      glass: "Unmatched (nD 1.5821 / ν 42.0)",
      focalLengthMm: -53.6,
      role: "Dispersive front member of the cemented collective group.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.658,
      vd: 51.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.6580 / ν 51.4)",
      focalLengthMm: 34.19,
      role: "Positive crown member of the cemented collective group.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6513,
      vd: 38.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6513 / ν 38.3)",
      focalLengthMm: 194.57,
      role: "Weak positive rear singlet completing the collective system.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 42.2,
      d: 7.2,
      sd: 23,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 11.4,
      sd: 23,
    },
    {
      label: "3",
      R: -65.4,
      d: 2.4,
      sd: 22,
      medium: 2,
    },
    {
      label: "4",
      R: 42.9,
      d: 5.4,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.8,
    },
    {
      label: "5",
      R: -213.1,
      d: 2.4,
      sd: 20,
      medium: 3,
    },
    {
      label: "6",
      R: 36.7,
      d: 9.6,
      sd: 19,
      medium: 4,
    },
    {
      label: "7",
      R: -52.1,
      d: 1.1,
      sd: 19,
    },
    {
      label: "8",
      R: 252.5,
      d: 4.8,
      sd: 22,
      medium: 5,
    },
    {
      label: "9",
      R: -252.5,
      d: 78.275004,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front collective lens",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Dispersive lens",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Cemented collective lens",
      fromSurface: "5",
      toSurface: "7",
    },
    {
      text: "Rear collective lens",
      fromSurface: "8",
      toSurface: "9",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
