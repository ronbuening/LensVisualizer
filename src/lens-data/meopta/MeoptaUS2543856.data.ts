import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,543,856 A, Example 1: František Kupka's five-element cinema objective,
 * published 6 March 1951. The patent gives f = 100 mm, aperture 1:1.8, spherical
 * radii, axial spacings, sodium-D indices and Abbe numbers. The flat r4 interface
 * cements elements 2 and 3. The dashed plane in Fig. 1 is treated as the stop,
 * 9.4 mm after r7 and 15.6 mm before r8; its opening is inferred from f/1.8.
 * All clear semi-diameters are estimated. The image plane is the computed
 * paraxial back focus, 52.32 mm; no back focus is printed.
 * The ±10° field is illustrative; the patent states no field or image format.
 */
const LENS_DATA = {
  schema: 2,
  key: "meopta-100mm-f18-us2543856",
  maker: "Meopta",
  name: "MEOPTA 100mm f/1.8 (US 2,543,856 Design)",
  subtitle: "US 2,543,856 A, Example 1 — Meopta / Kupka",
  visible: true,
  source: {
    patentNumber: "US 2,543,856 A",
    patentYear: 1951,
    example: {
      label: "Example 1",
      id: "1",
    },
    authors: ["František Kupka"],
    assignees: ["Meopta, spojene zavody pro jemnou mechaniku a optiku, narodni podnik"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.8,
    },
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 100 mm", "DESIGN F/1.8", "ALL SPHERICAL"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Positive front collector",
      focalLengthMm: 163.03,
      nd: 1.65981,
      vd: 50.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.65981 / ν 50.3)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      role: "Positive front element of the cemented second group",
      focalLengthMm: 68.96,
      cemented: "C1",
      nd: 1.65981,
      vd: 50.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.65981 / ν 50.3)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      role: "Dispersive negative rear element of the cemented second group",
      focalLengthMm: -278.88,
      cemented: "C1",
      nd: 1.71715,
      vd: 29.6,
      indexReference: "D",
      glass: "SF1 (Schott)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      role: "Negative third group balancing the positive components",
      focalLengthMm: -41.69,
      nd: 1.71715,
      vd: 29.6,
      indexReference: "D",
      glass: "SF1 (Schott)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      role: "Positive rear group forming the image",
      focalLengthMm: 72.37,
      nd: 1.61216,
      vd: 58,
      indexReference: "D",
      glass: "Unmatched (nD 1.61216 / ν 58)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 78,
      d: 9.5,
      sd: 32,
      medium: 1,
    },
    {
      label: "2",
      R: 270,
      d: 0.1,
      sd: 32,
    },
    {
      label: "3",
      R: 45.5,
      d: 13,
      sd: 30,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 2.5,
      sd: 27,
      medium: 3,
    },
    {
      label: "5",
      R: 200,
      d: 8.2,
      sd: 27,
    },
    {
      label: "6",
      R: -600,
      d: 1.5,
      sd: 24,
      medium: 4,
    },
    {
      label: "7",
      R: 31.5,
      d: 9.4,
      sd: 21,
    },
    {
      label: "STO",
      R: "flat",
      d: 15.6,
    },
    {
      label: "8",
      R: 109,
      d: 7,
      sd: 22,
      medium: 5,
    },
    {
      label: "9",
      R: -72.82,
      d: 52.319966,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
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
  doublets: [
    {
      text: "C1",
      fromSurface: "3",
      toSurface: "5",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
