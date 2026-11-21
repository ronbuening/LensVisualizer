import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Theodor Brendel, Agfa, US 2,672,788 A, Example 2 (1954), at the printed
 * f = 100 mm and f/2.5. Radii, thicknesses, air spaces, d-line indices and
 * Abbe numbers follow the table on PDF page 4. Figure 1 places the diaphragm
 * in the 13.870 mm central gap; its 7.68/6.19 mm split and all clear radii
 * are inferred. The iris radius is derived from f/2.5. The unprinted image
 * distance is the computed paraxial back focus, 70.930726228 mm.
 */
const LENS_DATA = {
  schema: 2,
  key: "agfa-100mm-f25-us2672788",
  maker: "Agfa",
  name: "AGFA 100mm f/2.5 (US 2,672,788 Design)",
  subtitle: "US 2,672,788 A, Example 2 — five-element modified Gauss design",
  visible: true,
  source: {
    patentNumber: "US 2,672,788 A",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 1954,
    authors: ["Theodor Brendel"],
    assignees: ["Agfa Camera-Werk AG"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 5,
    groupCount: 4,
    imageCircleMm: 103.4015,
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN F/2.5", "ALL SPHERICAL"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62425,
      vd: 56.8,
      indexReference: "d",
      focalLengthMm: 107.27,
      glass: "Unmatched (nd 1.62425 / ν 56.8)",
      role: "Front positive collecting meniscus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.62425,
      vd: 56.8,
      indexReference: "d",
      focalLengthMm: 55.83,
      glass: "Unmatched (nd 1.62425 / ν 56.8)",
      role: "Positive front member of the cemented meniscus",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.62356,
      vd: 36.8,
      indexReference: "d",
      focalLengthMm: -34.36,
      glass: "Unmatched (nd 1.62356 / ν 36.8)",
      role: "Dispersive negative rear member of the cemented meniscus",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62356,
      vd: 36.8,
      indexReference: "d",
      focalLengthMm: -131.39,
      glass: "Unmatched (nd 1.62356 / ν 36.8)",
      role: "Rear negative meniscus facing the diaphragm",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.62309,
      vd: 58.1,
      indexReference: "d",
      focalLengthMm: 68.28,
      glass: "Unmatched (nd 1.62309 / ν 58.1)",
      role: "Rear positive collecting element",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 41.132,
      d: 4.972,
      sd: 22,
      medium: 1,
    },
    {
      label: "2",
      R: 101.677,
      d: 0.304,
      sd: 22,
    },
    {
      label: "3",
      R: 34.851,
      d: 11.392,
      sd: 20,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 1.905,
      sd: 19,
      medium: 3,
    },
    {
      label: "5",
      R: 21.425,
      d: 7.68,
      sd: 15,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.19,
    },
    {
      label: "6",
      R: -25.708,
      d: 5.963,
      sd: 15,
      medium: 4,
    },
    {
      label: "7",
      R: -40.801,
      d: 0.304,
      sd: 19,
    },
    {
      label: "8",
      R: "flat",
      d: 7.945,
      sd: 20,
      medium: 5,
    },
    {
      label: "9",
      R: -42.546,
      d: 70.93072622762332,
      sd: 20,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 55,
    maxTraceFieldDeg: 27.5,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
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
      text: "G3 · L4",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "G4 · L5",
      fromSurface: "8",
      toSurface: "9",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "3", toSurface: "5" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
