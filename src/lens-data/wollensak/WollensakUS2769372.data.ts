import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,769,372 A, Example I (Figures 1–2): a 100 mm f/3.2 Tessar-type objective.
 * Radii, thicknesses, D-line indices, Abbe numbers and the stop position are printed.
 * The stop is 4.4 mm before element 3; its opening is derived from f/3.2.
 * Rims follow the printed element diameters, with the R4 optical radius taken as
 * 12.5 mm where its 45-degree bevel starts. The bevel depth is not specified.
 * The image plane uses the computed paraxial back focus, 82.9103 mm (printed: 82.9 mm).
 */
const LENS_DATA = {
  schema: 2,
  key: "wollensak-100mm-f32-us2769372",
  maker: "Wollensak",
  name: "WOLLENSAK 100mm f/3.2 (US 2,769,372 Design)",
  subtitle: "US 2,769,372 A, Example I — Tessar-type objective",
  visible: true,
  source: {
    patentNumber: "US 2,769,372 A",
    patentYear: 1956,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Alan A. Cook", "David C. Gilkeson"],
    assignees: ["Wollensak Optical Company"],
  },
  catalog: {
    focalLengthMm: {
      design: 99.99,
    },
    fNumber: {
      design: 3.2,
    },
    elementCount: 4,
    groupCount: 3,
    imageCircleMm: 103.0473,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/3.2"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.638,
      vd: 55,
      indexReference: "D",
      glass: "Unmatched (nD 1.638 / ν 55.0)",
      focalLengthMm: 59.56,
      role: "Positive front component that collects incident light",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.62,
      vd: 36,
      indexReference: "D",
      glass: "Unmatched (nD 1.620 / ν 36.0)",
      focalLengthMm: -38.32,
      role: "Negative middle component that balances the positive components",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.605,
      vd: 38,
      indexReference: "D",
      glass: "Unmatched (nD 1.605 / ν 38.0)",
      focalLengthMm: -83.63,
      role: "Dispersive negative member of the positive rear doublet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7,
      vd: 48,
      indexReference: "D",
      glass: "S-LAM51 (Ohara)",
      focalLengthMm: 36.03,
      role: "Positive member that supplies the rear doublet's converging power",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 38,
      d: 6.6,
      sd: 16,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 6.9,
      sd: 16,
    },
    {
      label: "3",
      R: -73,
      d: 4.2,
      sd: 13.5,
      medium: 2,
    },
    {
      label: "4",
      R: 36,
      d: 4.3,
      sd: 12.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.4,
    },
    {
      label: "5",
      R: 344,
      d: 2.2,
      sd: 14,
      medium: 3,
    },
    {
      label: "6",
      R: 44,
      d: 7.2,
      sd: 14,
      medium: 4,
    },
    {
      label: "7",
      R: -55.1,
      d: 82.910303,
      sd: 14,
    },
  ],
  aperture: {
    nominalFNumber: 3.2,
    fStops: [3.2, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 55,
    maxTraceFieldDeg: 27.5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front component",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle component",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear doublet",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
