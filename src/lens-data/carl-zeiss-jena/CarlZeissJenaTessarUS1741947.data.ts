import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,741,947 A, sole numerical example: a four-element Tessar-type objective
 * with nominal f = 100 mm, f/3.5 and a 55° full field. Radii, axial spacings,
 * D-line indices, Abbe numbers and the 4.42/2.29 mm stop spacing are printed.
 * The typed table gives element III's Abbe number as 51.4; the drawing gives 51.
 * Clear semi-diameters are estimated, the iris diameter is derived from the
 * paraxial aperture, and the image plane is the computed infinity paraxial plane.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-tessar-100mm-f35-us1741947",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TESSAR 100mm f/3.5 (US 1,741,947 Design)",
  subtitle: "US 1,741,947 A, sole example — Tessar-type design",
  visible: true,
  source: {
    patentNumber: "US 1,741,947 A",
    patentYear: 1929,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 103.28187606617861,
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 100.05,
    },
    fNumber: {
      design: 3.5,
    },
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/3.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "I",
      type: "Plano-Convex Positive",
      nd: 1.60717,
      vd: 59.5,
      indexReference: "D",
      focalLengthMm: 52.84,
      glass: "K-SK7 (Sumita)",
      role: "Front positive singlet that converges incoming light",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "II",
      type: "Biconcave Negative",
      nd: 1.57596,
      vd: 41.3,
      indexReference: "D",
      focalLengthMm: -35.16,
      glass: "FL57 (Hoya)",
      role: "Negative singlet that balances the converging front and rear groups",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "III",
      type: "Plano-Concave Negative",
      nd: 1.52648,
      vd: 51.4,
      indexReference: "D",
      focalLengthMm: -54.13,
      glass: "Unmatched (nD 1.52648 / ν 51.4)",
      role: "Negative front member of the rear cemented doublet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "IV",
      type: "Biconvex Positive",
      nd: 1.62377,
      vd: 56.9,
      indexReference: "D",
      focalLengthMm: 29.7,
      glass: "Unmatched (nD 1.62377 / ν 56.9)",
      role: "Positive rear member that supplies the rear doublet's converging power",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.08,
      d: 4.63,
      sd: 16.2,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 5.42,
      sd: 15.8,
    },
    {
      label: "3",
      R: -71.13,
      d: 3.73,
      sd: 16,
      medium: 2,
    },
    {
      label: "4",
      R: 28.85,
      d: 4.42,
      sd: 15.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.29,
    },
    {
      label: "5",
      R: "flat",
      d: 1.5,
      sd: 15.2,
      medium: 3,
    },
    {
      label: "6",
      R: 28.5,
      d: 8,
      sd: 15.7,
      medium: 4,
    },
    {
      label: "7",
      R: -47.22,
      d: 85.28442868969088,
      sd: 16.5,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 55,
    maxTraceFieldDeg: 27.5,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear cemented doublet",
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
