import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,744,445 A, Figure 1 and claim 2, at the printed f = 100 mm.
 * The four air-spaced elements retain the printed radii, thicknesses, D-line
 * indices and Abbe numbers. Clear semi-diameters are inferred. The inferred
 * stop lies 3 mm behind surface 4, where the field curves support its position;
 * no iris is drawn. The image plane is the computed paraxial back focus.
 */
const LENS_DATA = {
  schema: 2,
  key: "paillard-100mm-f14-us2744445",
  maker: "Paillard",
  name: "PAILLARD 100mm f/1.4 (US 2,744,445 Design)",
  subtitle: "US 2,744,445 A, Figure 1 — Petzval-type projection objective",
  visible: true,
  source: {
    patentNumber: "US 2,744,445 A",
    patentYear: 1956,
    example: {
      label: "Figure 1",
      id: "1",
    },
    authors: ["Arnold Werfeli"],
    assignees: ["Paillard S.A."],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 27.71238705584913,
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 99.71,
    },
    fNumber: {
      design: 1.4,
    },
    specs: ["4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/1.4", "PROJECTION OBJECTIVE"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconvex Positive",
      role: "Positive front element of the first achromatic pair",
      focalLengthMm: 87.79,
      nd: 1.67741,
      vd: 55.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.67741 / ν 55.6)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Biconcave Negative",
      role: "Negative colour-correcting element of the first achromatic pair",
      focalLengthMm: -139.33,
      nd: 1.68873,
      vd: 31.2,
      indexReference: "D",
      glass: "FD8 (Hoya)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconvex Positive",
      role: "Positive front element of the rear achromatic pair",
      focalLengthMm: 48.77,
      nd: 1.67741,
      vd: 55.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.67741 / ν 55.6)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Plano-Concave Negative",
      role: "Negative colour-correcting element of the rear achromatic pair",
      focalLengthMm: -80.82,
      nd: 1.74174,
      vd: 27.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.74174 / ν 27.5)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 89.8,
      d: 17.5,
      sd: 39,
      medium: 1,
    },
    {
      label: "2",
      R: -162.2,
      d: 1.15,
      sd: 36,
    },
    {
      label: "3",
      R: -131.55,
      d: 10,
      sd: 36,
      medium: 2,
    },
    {
      label: "4",
      R: 365.7,
      d: 3,
      sd: 38,
    },
    {
      label: "STO",
      R: "flat",
      d: 70.8,
    },
    {
      label: "5",
      R: 57.85,
      d: 12.5,
      sd: 26,
      medium: 3,
    },
    {
      label: "6",
      R: -70.3,
      d: 1.75,
      sd: 25.6,
    },
    {
      label: "7",
      R: -59.95,
      d: 2.5,
      sd: 27,
      medium: 4,
    },
    {
      label: "8",
      R: "flat",
      d: 37.745784091453295,
      sd: 26.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 1.4,
    fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 16,
    maxTraceFieldDeg: 8,
  },
  groups: [
    {
      text: "Front achromatic pair (air-spaced)",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "Rear achromatic pair (air-spaced)",
      fromSurface: "5",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
