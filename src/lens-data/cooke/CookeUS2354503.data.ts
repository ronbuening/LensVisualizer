import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Arthur Cox's telephoto objective, US 2,354,503 A, sole numerical example.
 * Printed dimensions are multiplied by 100 to express the f = 1 prescription
 * in millimetres at nominal f = 100 mm. Radii, thicknesses, D-line indices and
 * Abbe numbers follow the table. EFL is 99.49 mm rather than 100 mm; no misprint
 * has been identified, and rounding as the cause remains unproven. The image gap
 * is the computed paraxial back focus, 50.28 mm. Clear rims are estimated from
 * the printed rear/front aperture ratio of 1.20 and rear air-gap clearance.
 * R3 ends just inside R1 and R2, following the drawn front-member bevel.
 * The drawing on PDF p. 1 is schematic at the rear gap and aperture outlines;
 * its larger rims cannot all follow the printed curves without overlap.
 * The stop 1.5 mm behind R3 is inferred; the iris gives paraxial f/6.3.
 * The 12.0° half-field follows the patent's aperture-ratio conditions;
 * no exact example field is printed.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f63-us2354503",
  maker: "Cooke",
  name: "COOKE 100mm f/6.3 (US 2,354,503 Design)",
  subtitle: "US 2,354,503 A, sole example — Taylor Hobson / Cox",
  visible: true,
  source: {
    patentNumber: "US 2,354,503 A",
    patentYear: 1944,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Arthur Cox"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.49,
    },
    fNumber: {
      design: 6.3,
    },
    elementCount: 4,
    groupCount: 3,
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/6.3",
      "TELEPHOTO",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive element of the front cemented doublet",
      focalLengthMm: 23.34,
      nd: 1.613,
      vd: 55.7,
      indexReference: "D",
      glass: "BACD8 (spectral proxy; patent nD 1.613 / ν 55.7; supplier and melt unspecified)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Dispersive negative element of the front cemented doublet",
      focalLengthMm: -36.17,
      nd: 1.676,
      vd: 32.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.676 / ν 32.3)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Negative element giving the rear air-spaced doublet its divergent power",
      focalLengthMm: -37.51,
      nd: 1.613,
      vd: 55.7,
      indexReference: "D",
      glass: "BACD8 (spectral proxy; patent nD 1.613 / ν 55.7; supplier and melt unspecified)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      role: "Positive element completing the rear air-spaced doublet",
      focalLengthMm: 84.42,
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.652 / ν 33.5)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 19.1,
      d: 4.1,
      sd: 8.2,
      medium: 1,
    },
    {
      label: "2",
      R: -52.4,
      d: 1.0,
      sd: 8.2,
      medium: 2,
    },
    {
      label: "3",
      R: 46.2,
      d: 1.5,
      sd: 8.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 22,
    },
    {
      label: "4",
      R: -11.05,
      d: 1.4,
      sd: 8.3,
      medium: 3,
    },
    {
      label: "5",
      R: -22.3,
      d: 0.1,
      sd: 8.3,
    },
    {
      label: "6",
      R: -21.25,
      d: 2.7,
      sd: 8.3,
      medium: 4,
    },
    {
      label: "7",
      R: -16.1,
      d: 50.27789,
      sd: 9.84,
    },
  ],
  aperture: {
    nominalFNumber: 6.3,
    fStops: [6.3, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front convergent member",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Rear divergent member",
      fromSurface: "4",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
