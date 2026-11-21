import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,500,046 A, sole numerical example in Figure 2, in millimetres.
 * Four-element Petzval objective with a cemented front doublet and spherical surfaces.
 * The patent prints a 100 mm focal length, f/2, and D-line glass indices.
 * The stop follows the patent's principal-ray crossing 18.9 mm behind the front
 * doublet; its diameter and the clear semi-diameters are inferred. The image plane
 * is the computed paraxial back focus, 56.45 mm, against the printed 56.5 mm.
 * Figure 4 supplies the modeled 7.0-degree half-field.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f2-us2500046",
  maker: "Kodak",
  name: "KODAK 100mm f/2 (US 2,500,046 Design)",
  subtitle: "US 2,500,046 A, sole example — Eastman Kodak / Schade",
  visible: true,
  source: {
    patentNumber: "US 2,500,046 A",
    patentYear: 1950,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy Schade"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.98,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 4,
    groupCount: 3,
    imageCircleMm: 24.56,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/2"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.523,
      vd: 58.6,
      indexReference: "D",
      focalLengthMm: 62.85,
      glass: "C12 (Hoya)",
      role: "Positive front member of the cemented collecting doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.617,
      vd: 38.5,
      indexReference: "D",
      focalLengthMm: -92.04,
      glass: "Unmatched (nD 1.617 / ν 38.5)",
      role: "Negative rear member of the cemented front doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.649,
      vd: 33.8,
      indexReference: "D",
      focalLengthMm: -97.38,
      glass: "Unmatched (nD 1.649 / ν 33.8)",
      role: "Negative front member of the air-spaced rear pair",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      focalLengthMm: 58.21,
      glass: "H-LaK12 (CDGM)",
      role: "Positive rear member of the air-spaced rear pair",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 70.97,
      d: 15,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -56.79,
      d: 4.5,
      sd: 26,
      medium: 2,
    },
    {
      label: "3",
      R: "flat",
      d: 18.9,
      sd: 25,
    },
    {
      label: "STO",
      R: "flat",
      d: 30.4,
    },
    {
      label: "4",
      R: 119.91,
      d: 3.8,
      sd: 18,
      medium: 3,
    },
    {
      label: "5",
      R: 40.87,
      d: 0.9,
      sd: 18,
    },
    {
      label: "6",
      R: 46.87,
      d: 7.5,
      sd: 18,
      medium: 4,
    },
    {
      label: "7",
      R: -282.05,
      d: 56.452649,
      sd: 18,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 14,
    maxTraceFieldDeg: 7,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front doublet",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Rear negative element",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "Rear positive element",
      fromSurface: "6",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
