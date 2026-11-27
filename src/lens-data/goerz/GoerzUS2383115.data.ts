import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,383,115 A, Example I and Figure 1: four air-spaced spherical menisci.
 * The patent gives f = 100 without a length unit; dimensions are interpreted in mm.
 * The radii follow the figure in the direction of light travel. The printed D-light
 * indices and Abbe numbers are retained. The midpoint stop in the 7.366 mm central
 * gap is inferred. Clear semi-diameters follow Figure 1: 15 mm outer rims and
 * 9.45 mm square inner rims, checked against the f/6 axial beam and 45° chief ray.
 * The final gap is the computed paraxial back focus, 90.54 mm; the patent prints
 * no back focus or close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "goerz-100mm-f6-us2383115",
  maker: "Goerz",
  name: "GOERZ 100mm f/6 (US 2,383,115 Design)",
  subtitle: "US 2,383,115 A, Example I — Goerz / Durand",
  visible: true,
  source: {
    patentNumber: "US 2,383,115 A",
    patentYear: 1945,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Milo A. Durand"],
    assignees: ["C. P. Goerz American Optical Company"],
    sdSource: "figure-measured",
  },
  catalog: {
    focalLengthMm: {
      design: 99.98,
    },
    fNumber: {
      design: 6,
    },
    elementCount: 4,
    groupCount: 4,
    imageCircleMm: 203.49,
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/6",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "10",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Positive front meniscus supplying converging power",
      focalLengthMm: 50.95,
      nd: 1.588,
      vd: 53.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.588 / ν 53.4)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "14",
      label: "Element 2",
      type: "Negative Meniscus",
      role: "Negative front inner meniscus balancing the positive outer elements",
      focalLengthMm: -63.21,
      nd: 1.636,
      vd: 34.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.636 / ν 34.8)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "15",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Negative rear inner meniscus forming the symmetric partner of Element 2",
      focalLengthMm: -63.21,
      nd: 1.636,
      vd: 34.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.636 / ν 34.8)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "11",
      label: "Element 4",
      type: "Positive Meniscus",
      role: "Positive rear meniscus supplying converging power toward the image",
      focalLengthMm: 50.95,
      nd: 1.588,
      vd: 53.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.588 / ν 53.4)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 20.118,
      d: 4.84,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: 55.801,
      d: 0.316,
      sd: 15,
    },
    {
      label: "3",
      R: 25.089,
      d: 1.052,
      sd: 9.45,
      medium: 2,
    },
    {
      label: "4",
      R: 15.196,
      d: 3.683,
      sd: 9.45,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.683,
    },
    {
      label: "5",
      R: -15.196,
      d: 1.052,
      sd: 9.45,
      medium: 3,
    },
    {
      label: "6",
      R: -25.089,
      d: 0.316,
      sd: 9.45,
    },
    {
      label: "7",
      R: -55.801,
      d: 4.84,
      sd: 15,
      medium: 4,
    },
    {
      label: "8",
      R: -20.118,
      d: 90.536134,
      sd: 15,
    },
  ],
  aperture: {
    nominalFNumber: 6,
    fStops: [6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 90,
    maxTraceFieldDeg: 45,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 \u00b7 L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "G4 \u00b7 L4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
