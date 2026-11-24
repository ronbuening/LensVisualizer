import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,298,993 A, Example IV / Figure 4: five air-spaced spherical singlets.
 * The normalized f = 1.000 table is multiplied by 100 for millimetres at nominal
 * f = 100 mm. Its printed values give EFL 99.62 mm; rounding may explain the
 * difference, but no particular correction is supported.
 * The stop is inferred in S3, 3.51 mm after R6 and 0.49 mm before R7; its bore
 * is inferred. Rims follow Figure 4's approximately 21 mm heights, with a
 * 16.65 mm clear radius and 21 mm outer land at R6 to keep the iris in air;
 * R9/R10 retain 20.2 mm, within 5% of the drawing. The image
 * plane is the computed paraxial back focus, 76.97 mm after R10. The ±10.0°
 * field is illustrative; the patent gives no field for Example IV.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f25-us2298993",
  maker: "Cooke",
  name: "COOKE 100mm f/2.5 (US 2,298,993 Design)",
  subtitle: "US 2,298,993 A, Example IV — Taylor Hobson / Warmisham",
  visible: true,
  source: {
    patentNumber: "US 2,298,993 A",
    patentYear: 1942,
    example: {
      label: "Example IV",
      id: "4",
    },
    authors: ["Arthur Warmisham"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.62,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 5,
    groupCount: 5,
    specs: [
      "5 ELEMENTS / 5 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/2.5",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      focalLengthMm: 164.04,
      glass: "Unmatched (nD 1.644 / ν 48.3)",
      role: "Positive front element contributing converging power",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
      focalLengthMm: 85.83,
      glass: "Unmatched (nD 1.613 / ν 59.3)",
      role: "Second positive element ahead of the negative pair",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      focalLengthMm: -59.38,
      glass: "Unmatched (nD 1.652 / ν 33.5)",
      role: "Front negative element balancing the positive components",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      focalLengthMm: -80.22,
      glass: "Unmatched (nD 1.652 / ν 33.5)",
      role: "Rear negative element ahead of the final positive element",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      focalLengthMm: 53.32,
      glass: "Unmatched (nD 1.644 / ν 48.3)",
      role: "Positive rear element converging light toward the image",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 65.53,
      d: 5.7,
      sd: 21.2,
      medium: 1,
    },
    {
      label: "2",
      R: 166.7,
      d: 0.1,
      sd: 21.2,
    },
    {
      label: "3",
      R: 39.45,
      d: 8.4,
      sd: 21.1,
      medium: 2,
    },
    {
      label: "4",
      R: 144.9,
      d: 4.1,
      sd: 21.1,
    },
    {
      label: "5",
      R: -200,
      d: 1.5,
      sd: 21,
      medium: 3,
    },
    {
      label: "6",
      R: 48.15,
      d: 3.51,
      sd: 16.65,
      rimExtensionSd: 21,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.49,
    },
    {
      label: "7",
      R: 308.6,
      d: 1.5,
      sd: 21,
      medium: 4,
    },
    {
      label: "8",
      R: 44.64,
      d: 6.5,
      sd: 21,
    },
    {
      label: "9",
      R: 84.03,
      d: 8,
      sd: 20.2,
      medium: 5,
    },
    {
      label: "10",
      R: -55.9,
      d: 76.966226,
      sd: 20.2,
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
    {
      text: "G5 \u00b7 L5",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
