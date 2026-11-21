import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Ludwig Bertele's DE 428,657 C, Figure 2, a five-element f/2 projection
 * objective. The patent places the film behind R10 and the screen on the R1 side;
 * this infinity model traces from the screen side toward the film. The printed
 * radii, thicknesses, air gaps and D-line glass values are retained. The stop is
 * inferred at the midpoint of the 19.05 mm central gap. Clear radii combine
 * estimates with Figure 2 readings; the image plane is the calculated paraxial
 * back focus, 56.18336 mm. The illustrative half-field is 5 degrees.
 */
const LENS_DATA = {
  schema: 2,
  key: "ernemann-100mm-f2-de428657",
  maker: "Ernemann",
  name: "ERNEMANN 100mm f/2 (DE 428,657 Design)",
  subtitle: "DE 428,657 C, Figure 2 — Ernostar-type objective with split rear member",
  visible: false,
  source: {
    patentNumber: "DE 428,657 C",
    patentYear: 1926,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Ludwig Bertele"],
    assignees: ["Ernemann-Werke AG"],
  },
  catalog: {
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      design: 100.03,
    },
    fNumber: {
      design: 2,
    },
    specs: ["5 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN F/2", "PROJECTION OBJECTIVE"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconvex Positive",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      focalLengthMm: 76.41,
      role: "Front converging element",
      glass: "Unmatched (nD 1.6068 / ν 59.5)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Positive Meniscus",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      focalLengthMm: 221.1,
      role: "Second converging element ahead of the central diverging lens",
      glass: "Unmatched (nD 1.6068 / ν 59.5)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconcave Negative",
      nd: 1.6477,
      vd: 33.9,
      indexReference: "D",
      focalLengthMm: -37.56,
      role: "Central diverging element",
      glass: "Unmatched (nD 1.6477 / ν 33.9)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Negative Meniscus",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      focalLengthMm: -129.75,
      role: "Negative part of the split rear component",
      glass: "Unmatched (nD 1.6068 / ν 59.5)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Biconvex Positive",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      focalLengthMm: 46.57,
      role: "Positive part of the split rear component facing the film",
      glass: "Unmatched (nD 1.6068 / ν 59.5)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 48.57,
      d: 8.57,
      sd: 25.5,
      medium: 1,
    },
    {
      label: "2",
      R: -952.45,
      d: 0.48,
      sd: 25.5,
    },
    {
      label: "3",
      R: 38.1,
      d: 9.52,
      sd: 23.5,
      medium: 2,
    },
    {
      label: "4",
      R: 48.19,
      d: 5.71,
      sd: 23,
    },
    {
      label: "5",
      R: -223.83,
      d: 2.86,
      sd: 19.5,
      medium: 3,
    },
    {
      label: "6",
      R: 27.43,
      d: 9.525,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.525,
    },
    {
      label: "7",
      R: 200.01,
      d: 2.86,
      sd: 23.5,
      medium: 4,
    },
    {
      label: "8",
      R: 56.19,
      d: 0.48,
      sd: 23.5,
    },
    {
      label: "9",
      R: 51.43,
      d: 14.29,
      sd: 24,
      medium: 5,
    },
    {
      label: "10",
      R: -56.15,
      d: 56.18336,
      sd: 24,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "L4",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "L5",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
