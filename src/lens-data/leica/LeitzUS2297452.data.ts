import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,297,452 A, sole example (Figure 1), f = 100 and aperture 1:1.3.
 * The patent gives no physical unit; lengths are expressed in millimetres.
 * Signed radii, thicknesses, air spaces and six index/Abbe pairs follow the table;
 * D/C/F corrections support sodium D (589.3 nm). No supplier is established.
 * Clear semi-diameters are inferred from Figure 1 and checked against real rays.
 * The second doublet has level r4/r5 rims; r6/r8 lands follow its drawn edges.
 * The r8 optical rim stays ahead of the inferred iris; Figure 1 draws no iris.
 * The stop is 11.75 mm after r8 and 1.07 mm before r9 in the printed 12.82 mm gap.
 * The image gap is rounded paraxial back focus, 34.879 mm (printed: 34.875).
 * Zonal distances agree with r10-vertex intercepts despite emergence-point wording.
 * The ±5.0° field is illustrative; the patent mentions only moderate view angles.
 */
const LENS_DATA = {
  schema: 2,
  key: "leitz-100mm-f13-us2297452",
  maker: "Leica",
  name: "LEITZ 100mm f/1.3 (US 2,297,452 Design)",
  subtitle: "US 2,297,452 A, sole example — Berek, Zimmermann & Kleineberg",
  visible: true,
  source: {
    patentNumber: "US 2,297,452 A",
    patentYear: 1942,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Max Berek", "Otto Zimmermann", "Gustav Kleineberg"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.01,
    },
    fNumber: {
      design: 1.3,
    },
    elementCount: 6,
    groupCount: 4,
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/1.3",
      "SPLIT-FRONT TRIPLET",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5338,
      vd: 55.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.5338 / ν 55.4)",
      focalLengthMm: 103.1,
      role: "Positive front element of the first collecting doublet.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7283,
      vd: 28.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.7283 / ν 28.3)",
      focalLengthMm: -268.67,
      role: "Dispersive negative partner in the first collecting doublet.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.623,
      vd: 58.1,
      indexReference: "D",
      glass: "Unmatched (nD 1.6230 / ν 58.1)",
      focalLengthMm: 78.09,
      role: "Positive front element of the second collecting doublet.",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7283,
      vd: 28.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.7283 / ν 28.3)",
      focalLengthMm: -122.94,
      role: "Dispersive negative partner in the second collecting doublet.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.6073,
      vd: 49.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.6073 / ν 49.2)",
      focalLengthMm: -47.09,
      role: "Negative singlet between the collecting doublets and the rear positive lens.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6074,
      vd: 56.7,
      indexReference: "D",
      glass: "Unmatched (nD 1.6074 / ν 56.7)",
      focalLengthMm: 56.07,
      role: "Rear positive singlet that brings the beam to the image.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 78.9,
      d: 17.76,
      sd: 40,
      medium: 1,
    },
    {
      label: "2",
      R: -167.68,
      d: 3.94,
      sd: 40,
      medium: 2,
    },
    {
      label: "3",
      R: -1183.62,
      d: 2.96,
      sd: 40,
    },
    {
      label: "4",
      R: 50.8,
      d: 18.74,
      sd: 35.3,
      medium: 3,
    },
    {
      label: "5",
      R: -986.34,
      d: 3.94,
      sd: 35.3,
      medium: 4,
    },
    {
      label: "6",
      R: 98.64,
      d: 12.82,
      sd: 33,
      rimExtensionSd: 35.3,
    },
    {
      label: "7",
      R: "flat",
      d: 5.92,
      sd: 30,
      medium: 5,
    },
    {
      label: "8",
      R: 28.6,
      d: 11.75,
      sd: 22,
      rimExtensionSd: 30,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.07,
    },
    {
      label: "9",
      R: 47.34,
      d: 13.32,
      sd: 26,
      medium: 6,
    },
    {
      label: "10",
      R: -108.5,
      d: 34.8788,
      sd: 26,
    },
  ],
  aperture: {
    nominalFNumber: 1.3,
    fStops: [1.3, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front doublet",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Second doublet",
      fromSurface: "4",
      toSurface: "6",
    },
    {
      text: "Negative singlet",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "Rear positive singlet",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "4", toSurface: "6" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
