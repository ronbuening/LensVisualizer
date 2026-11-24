import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,967,836 A, sole numerical example in millimetres, by Willy Merté.
 * Five spherical elements in four groups; a 100 mm f/0.90 design related to
 * the R-Biotar family. The patent prints d-line glass values and the diaphragm
 * station: 43.80 mm behind R4 and 16.59 mm before R5. The inferred iris radius
 * follows paraxial f/0.90; exact axial tracing gives about f/0.96. Clear rims
 * are inferred from the sole drawing on page 1 and checked against the axial
 * beam and corner chief ray. L1, L3 and L4 have square rims; L2's rear optical
 * face ends at 52.6 mm with a land out to 61 mm. R9 is held slightly above its
 * drawn curve end to preserve corner illumination. The image plane is the
 * calculated paraxial infinity focus because no back focus is printed. The 7.2° half-field
 * follows the stated image diameter of approximately 25 mm; no finite-focus
 * state is given.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-r-biotar-100mm-f09-us1967836",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA R-BIOTAR 100mm f/0.9 (US 1,967,836 Design)",
  subtitle: "US 1,967,836 A, sole example — Zeiss / Merté",
  visible: true,
  source: {
    patentNumber: "US 1,967,836 A",
    patentYear: 1934,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 25,
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 0.9,
    },
    specs: [
      "5 ELEMENTS / 4 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/0.9",
      "ALL SPHERICAL",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconvex Positive",
      nd: 1.63753,
      vd: 56.1,
      indexReference: "d",
      focalLengthMm: 126.56,
      glass: "Unmatched (nd 1.63753 / ν 56.1)",
      role: "Front positive collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Negative Meniscus, Concave to Object",
      nd: 1.75823,
      vd: 27.4,
      indexReference: "d",
      focalLengthMm: -183.65,
      glass: "Unmatched (nd 1.75823 / ν 27.4)",
      role: "Dispersive negative member ahead of the diaphragm",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Plano-Convex Positive",
      nd: 1.46449,
      vd: 65.8,
      indexReference: "d",
      focalLengthMm: 210.23,
      glass: "FK3 (Schott)",
      role: "Positive collector behind the diaphragm",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Biconvex Positive",
      nd: 1.62203,
      vd: 53.1,
      indexReference: "d",
      focalLengthMm: 50.67,
      glass:
        "SSK2 (spectral proxy; patent nd 1.62203 / ν 53.1; supplier and melt unspecified)",
      role: "Positive member of the rear converging doublet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Negative Meniscus, Concave to Object",
      nd: 1.75823,
      vd: 27.4,
      indexReference: "d",
      focalLengthMm: -94.52,
      glass: "Unmatched (nd 1.75823 / ν 27.4)",
      role: "Dispersive negative member of the rear converging doublet",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 135.14,
      d: 29.98,
      sd: 61,
      medium: 1,
    },
    {
      label: "2",
      R: -182.95,
      d: 9.78,
      sd: 61,
    },
    {
      label: "3",
      R: -128.96,
      d: 11.7,
      sd: 61,
      medium: 2,
    },
    {
      label: "4",
      R: -1813.8,
      d: 43.8,
      sd: 52.6,
      rimExtensionSd: 61,
    },
    {
      label: "STO",
      R: "flat",
      d: 16.59,
    },
    {
      label: "5",
      R: 97.65,
      d: 23.82,
      sd: 45,
      medium: 3,
    },
    {
      label: "6",
      R: "flat",
      d: 22.64,
      sd: 45,
    },
    {
      label: "7",
      R: 60.22,
      d: 15.1,
      sd: 26,
      medium: 4,
    },
    {
      label: "8",
      R: -59.78,
      d: 3.4,
      sd: 26,
      medium: 5,
    },
    {
      label: "9",
      R: -369.17,
      d: 26.004567,
      sd: 23.4,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 0.9,
    fStops: [0.9, 1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 14.322823,
    maxTraceFieldDeg: 7.161411,
  },
  groups: [
    {
      text: "Member 1 (+)",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Member 2 (−)",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Member 3 (+)",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "Member 4 (+)",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
