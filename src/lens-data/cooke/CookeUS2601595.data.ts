import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,601,595 A, Example VII and Figure 7, by Gordon Henry Cook for Taylor,
 * Taylor & Hobson Limited. The patent's F = 1.000 prescription is multiplied
 * by 100 to express every length in millimetres at nominal f = 100 mm.
 * Six spherical elements form five air-spaced groups, with a cemented front
 * doublet and a 0.5 mm air gap between the two rear elements.
 * The patent states f/3.5, a 25-degree half-field and an approximately central
 * stop; the exact stop station is inferred by halving the R5-R6 air space.
 * Rims combine the suggested diameters with inferred R4, R7 and R9 apertures.
 * R3 and R5 use 11.3 and 11.05 mm semi-diameters to admit the axial f/3.5 beam;
 * the patent says its suggested diameters exceed the axial requirement.
 * Its repeated R8 in the rear-diameter list is probably a misprint for R9.
 * The image plane is the computed paraxial back focus, 80.319697 mm; no back
 * focus or close-focus data is printed. Glass indices refer to sodium D.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f35-us2601595",
  maker: "Cooke",
  name: "COOKE 100mm f/3.5 (US 2,601,595 Design)",
  subtitle: "US 2,601,595 A, Example VII — four-component anastigmat design",
  visible: false,
  source: {
    patentNumber: "US 2,601,595 A",
    patentYear: 1952,
    example: {
      label: "Example VII",
      id: "7",
    },
    authors: ["Gordon Henry Cook"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
  },
  catalog: {
    imageCircleMm: 93.32,
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      design: 100.02,
    },
    fNumber: {
      design: 3.5,
    },
    specs: ["6 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN F/3.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.657,
      vd: 50.8,
      indexReference: "D",
      focalLengthMm: 58.67,
      glass: "Unmatched (nD 1.6570 / ν 50.8)",
      role: "Positive front element of the negative front component.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6205,
      vd: 36.2,
      indexReference: "D",
      focalLengthMm: -42.54,
      glass: "Unmatched (nD 1.6205 / ν 36.2)",
      role: "Negative rear element of the cemented front component.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6234,
      vd: 56.2,
      indexReference: "D",
      focalLengthMm: 114.13,
      glass: "Unmatched (nD 1.6234 / ν 56.2)",
      role: "Positive inner meniscus ahead of the aperture stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6234,
      vd: 56.2,
      indexReference: "D",
      focalLengthMm: 120.95,
      glass: "Unmatched (nD 1.6234 / ν 56.2)",
      role: "Positive inner meniscus behind the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6055,
      vd: 38,
      indexReference: "D",
      focalLengthMm: -39.57,
      glass: "F15 (Hoya)",
      role: "Negative front element of the air-spaced rear component.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.657,
      vd: 50.8,
      indexReference: "D",
      focalLengthMm: 45.28,
      glass: "Unmatched (nD 1.6570 / ν 50.8)",
      role: "Positive rear element of the air-spaced rear component.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 23.26,
      d: 7,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: 51.65,
      d: 4,
      sd: 15,
      medium: 2,
    },
    {
      label: "3",
      R: 16.95,
      d: 2.8,
      sd: 11.3,
    },
    {
      label: "4",
      R: 28.41,
      d: 3.2,
      sd: 12.3,
      medium: 3,
    },
    {
      label: "5",
      R: 45.25,
      d: 2.55,
      sd: 11.05,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.55,
    },
    {
      label: "6",
      R: -76.92,
      d: 3.6,
      sd: 11,
      medium: 4,
    },
    {
      label: "7",
      R: -38.76,
      d: 2.8,
      sd: 12.6,
    },
    {
      label: "8",
      R: -19.61,
      d: 4,
      sd: 11,
      medium: 5,
    },
    {
      label: "9",
      R: -116.28,
      d: 0.5,
      sd: 13,
    },
    {
      label: "10",
      R: -116.55,
      d: 5.2,
      sd: 13,
      medium: 6,
    },
    {
      label: "11",
      R: -24.12,
      d: 80.3196970246873,
      sd: 13,
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
    fullFieldDeg: 50,
    maxTraceFieldDeg: 25,
  },
  groups: [
    {
      text: "Front cemented pair",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Inner positive meniscus",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "Inner positive meniscus",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "Rear negative meniscus",
      fromSurface: "8",
      toSurface: "9",
    },
    {
      text: "Rear positive meniscus",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
