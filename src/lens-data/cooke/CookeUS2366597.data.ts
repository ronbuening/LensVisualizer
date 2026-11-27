import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,366,597 A, Example I and Figure 1, by Arthur Cox.
 * The unit-focal-length prescription is multiplied by 100 to give millimetres.
 * Radii, thicknesses, air spaces and D-line glass data follow the printed table.
 * The inferred stop splits the 6.5 mm rear air space into 3 and 3.5 mm.
 * Clear semi-diameters are estimated from Figure 1's proportions, with square
 * positive elements, beveled rear faces and positive edge thickness; axial
 * rays clear every rim.
 * The image gap is the computed paraxial back focus, 48.91 mm.
 * The illustrative ±5.0° field is not printed.
 * Total length is 0.871 of the computed focal length, below the stated 7/8.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f25-us2366597",
  maker: "Cooke",
  name: "COOKE 100mm f/2.5 (US 2,366,597 Design)",
  subtitle: "US 2,366,597 A, Example I — Taylor Hobson / Cox",
  visible: true,
  source: {
    patentNumber: "US 2,366,597 A",
    patentYear: 1945,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Arthur Cox"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.87,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 6,
    groupCount: 3,
    specs: [
      "6 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/2.5",
      "TELEPHOTO",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive front element of the first convergent doublet",
      focalLengthMm: 52.75,
      nd: 1.613,
      vd: 57.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / ν 57.6)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Dispersive negative element of the first convergent doublet",
      focalLengthMm: -84.47,
      nd: 1.699,
      vd: 30.3,
      indexReference: "D",
      glass:
        "S-TIM35 (spectral proxy; patent nD 1.699 / ν 30.3; supplier and melt unspecified)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      role: "Positive front element of the second convergent doublet",
      focalLengthMm: 51.77,
      nd: 1.613,
      vd: 57.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.613 / ν 57.6)",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      role: "Dispersive negative element of the second convergent doublet",
      focalLengthMm: -74.91,
      nd: 1.699,
      vd: 30.3,
      indexReference: "D",
      glass:
        "S-TIM35 (spectral proxy; patent nD 1.699 / ν 30.3; supplier and melt unspecified)",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      role: "Positive front element of the divergent rear doublet",
      focalLengthMm: 33.01,
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.652 / ν 33.5)",
      cemented: "C3",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      role: "Negative rear element providing the telephoto divergence",
      focalLengthMm: -19.7,
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.644 / ν 48.3)",
      cemented: "C3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 51.23,
      d: 8.7,
      sd: 22.7,
      medium: 1,
    },
    {
      label: "2",
      R: -82,
      d: 1.8,
      sd: 22.7,
      medium: 2,
    },
    {
      label: "3",
      R: 212.8,
      d: 1.4,
      sd: 20,
    },
    {
      label: "4",
      R: 37.1,
      d: 8.6,
      sd: 22,
      medium: 3,
    },
    {
      label: "5",
      R: -200,
      d: 1.8,
      sd: 22,
      medium: 4,
    },
    {
      label: "6",
      R: 71.2,
      d: 3,
      sd: 21.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.5,
    },
    {
      label: "7",
      R: 26.67,
      d: 7,
      sd: 16,
      medium: 5,
    },
    {
      label: "8",
      R: -100,
      d: 2.3,
      sd: 16,
      medium: 6,
    },
    {
      label: "9",
      R: 14.66,
      d: 48.908493,
      sd: 12.7,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  focus: {
    closeFocusM: 1e15,
    description: "The model holds all element spacings fixed at infinity. The patent gives no focusing mechanism or close-focus prescription.",
  },
  groups: [
    {
      text: "Front convergent member",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Second convergent member",
      fromSurface: "4",
      toSurface: "6",
    },
    {
      text: "Divergent rear member",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "4", toSurface: "6" },
    { text: "C3", fromSurface: "7", toSurface: "9" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
