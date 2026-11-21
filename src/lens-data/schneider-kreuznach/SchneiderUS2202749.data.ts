import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,202,749 A, Example II: five-element asymmetric objective, f = 100 mm,
 * f/3.5. Radii, thicknesses, the 10.9 mm diaphragm space, refractive indices
 * and Abbe numbers follow the printed millimetre table without conversion.
 * The patent says only "yellow ray"; four of five glass pairs match helium d
 * catalogue values. Fig. 2 depicts the f/5 Example I form; Example II is
 * described as analogous to it, with planar R2 and R5.
 * The stop's 7.6 / 3.3 mm split, its size and all clear semi-diameters are
 * inferred. The last gap is the computed paraxial back focus, 77.948626 mm.
 * The calculated EFL is 99.936 mm; exact rays at the paraxial iris give about
 * f/3.520. The 12-degree half-field is illustrative;
 * the text's useful angle of about 60 degrees describes the design class.
 */
const LENS_DATA = {
  schema: 2,
  key: "schneider-kreuznach-100mm-f35-us2202749",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH 100mm f/3.5 (US 2,202,749 Design)",
  subtitle: "US 2,202,749 A, Example II — asymmetric cemented-group design",
  visible: true,
  source: {
    patentNumber: "US 2,202,749 A",
    patentYear: 1940,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Jos. Schneider & Co., Optotechnische Gesellschaft"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 5,
    groupCount: 2,
    focalLengthMm: {
      design: 99.94,
    },
    fNumber: {
      design: 3.5,
    },
    specs: ["5 ELEMENTS / 2 GROUPS", "ALL SPHERICAL", "DESIGN F/3.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Plano-Convex Positive",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
      indexReferenceNote: "The patent says only yellow ray; four of five glass pairs match helium d catalogue values.",
      focalLengthMm: 41.63,
      glass: "BAFD7 (Hoya)",
      role: "Positive front element of the cemented triplet.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Plano-Convex Positive",
      nd: 1.4875,
      vd: 70,
      indexReference: "d",
      indexReferenceNote: "The patent says only yellow ray; four of five glass pairs match helium d catalogue values.",
      focalLengthMm: 84.31,
      glass: "Unmatched (yellow-ray n 1.4875 / ν 70.0)",
      role: "Low-index central element of the cemented triplet.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconcave Negative",
      nd: 1.6545,
      vd: 33.8,
      indexReference: "d",
      indexReferenceNote: "The patent says only yellow ray; four of five glass pairs match helium d catalogue values.",
      focalLengthMm: -22.03,
      glass: "SF9 (Hikari)",
      role: "Negative rear element of the cemented triplet.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Plano-Concave Negative",
      nd: 1.6254,
      vd: 35.6,
      indexReference: "d",
      indexReferenceNote: "The patent says only yellow ray; four of five glass pairs match helium d catalogue values.",
      focalLengthMm: -34.7,
      glass: "F7 (Hoya)",
      role: "Negative front element of the rear cemented doublet.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Biconvex Positive",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
      indexReferenceNote: "The patent says only yellow ray; four of five glass pairs match helium d catalogue values.",
      focalLengthMm: 24.65,
      glass: "BAFD7 (Hoya)",
      role: "Positive collecting element of the rear cemented doublet.",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 29.2,
      d: 7.6,
      sd: 17.5,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 6.1,
      sd: 17.5,
      medium: 2,
    },
    {
      label: "3",
      R: -41.1,
      d: 1.8,
      sd: 18,
      medium: 3,
    },
    {
      label: "4",
      R: 22.6,
      d: 7.6,
      sd: 16.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.3,
    },
    {
      label: "5",
      R: "flat",
      d: 1.8,
      sd: 17,
      medium: 4,
    },
    {
      label: "6",
      R: 21.7,
      d: 14.1,
      sd: 17,
      medium: 5,
    },
    {
      label: "7",
      R: -62.3,
      d: 77.94862552893022,
      sd: 17,
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
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  groups: [
    {
      text: "Front cemented triplet",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "Rear cemented doublet",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "4" },
    { text: "C2", fromSurface: "5", toSurface: "7" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
