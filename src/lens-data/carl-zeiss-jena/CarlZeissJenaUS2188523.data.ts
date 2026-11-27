import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,188,523 A, sole numerical example: a seven-element photographic objective
 * specified at 100 mm f/2. Radii, axial distances, nd and Abbe numbers follow the
 * printed table; its lowercase nd heading is interpreted at the helium d line.
 * The US patent gives no stop position or diameter. The 9.54 mm central air gap
 * is split 7.58/1.96 mm using the stop-space ratio printed in DE 700,699 C,
 * a German member of the same invention with a different numerical example.
 * The iris diameter follows the paraxial f/2 rule. Clear semi-diameters are
 * inferred from the section drawing's proportions: 30 mm at the square-cut
 * front singlet and 24 mm at the cylindrical triplet rims. The R6/R7 curve
 * ends clear the f/2 axial beam. The drawing's unequal axial scales leave
 * exact rim and chamfer dimensions uncertain.
 * The image plane is the computed paraxial back focus, rounded to
 * 0.0001 mm. The 10-degree half-field is illustrative; no field is printed.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f2-us2188523",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/2 (US 2,188,523 Design)",
  subtitle: "US 2,188,523 A, sole example — Zeiss Ikon / Bertele",
  visible: true,
  source: {
    patentNumber: "US 2,188,523 A",
    patentYear: 1940,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon AG"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 7,
    groupCount: 3,
    focalLengthMm: {
      design: 100.05,
    },
    fNumber: {
      design: 2,
    },
    specs: ["7 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/2"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 133.12,
      glass:
        "S-BSM16 (spectral proxy; patent nd 1.6200 / ν 60.3; supplier and melt unspecified)",
      role: "Positive front singlet that collects light for the cemented groups.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
      focalLengthMm: 96.12,
      glass: "BAFD7 (Hoya)",
      role: "Positive meniscus at the front of the middle triplet.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5487,
      vd: 45.8,
      indexReference: "d",
      focalLengthMm: 99.68,
      glass:
        "S-TIL1 (spectral proxy; patent nd 1.5487 / ν 45.8; supplier and melt unspecified)",
      role: "Positive middle element of the middle triplet.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6883,
      vd: 30,
      indexReference: "d",
      focalLengthMm: -33.01,
      glass: "Unmatched (nd 1.6883 / ν 30.0)",
      role: "Negative rear element that gives the middle triplet its diverging power.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 105.71,
      glass:
        "S-BSM16 (spectral proxy; patent nd 1.6200 / ν 60.3; supplier and melt unspecified)",
      role: "Positive meniscus at the front of the rear triplet.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.515,
      vd: 50,
      indexReference: "d",
      focalLengthMm: -41.81,
      glass: "Unmatched (nd 1.5150 / ν 50.0)",
      role: "Low-index negative element between the two positive rear elements.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6682,
      vd: 48.8,
      indexReference: "d",
      focalLengthMm: 45.63,
      glass: "Unmatched (nd 1.6682 / ν 48.8)",
      role: "Strong positive rear element that completes the converging rear triplet.",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 68.41,
      d: 6.87,
      sd: 30,
      medium: 1,
    },
    {
      label: "2",
      R: 384.32,
      d: 0.38,
      sd: 30,
    },
    {
      label: "3",
      R: 34.35,
      d: 7.25,
      sd: 24,
      medium: 2,
    },
    {
      label: "4",
      R: 63.93,
      d: 7.63,
      sd: 24,
      medium: 3,
    },
    {
      label: "5",
      R: -362.56,
      d: 1.91,
      sd: 24,
      medium: 4,
    },
    {
      label: "6",
      R: 24.29,
      d: 7.58,
      sd: 17.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.96,
    },
    {
      label: "7",
      R: -128.8,
      d: 10.88,
      sd: 17.3,
      medium: 5,
    },
    {
      label: "8",
      R: -44.84,
      d: 1.15,
      sd: 24,
      medium: 6,
    },
    {
      label: "9",
      R: 41.79,
      d: 22.52,
      sd: 24,
      medium: 7,
    },
    {
      label: "10",
      R: -88.43,
      d: 54.6259,
      sd: 24,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only. The patent describes no focusing mechanism or travel.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle triplet",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "Rear triplet",
      fromSurface: "7",
      toSurface: "10",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "6" },
    { text: "C2", fromSurface: "7", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
