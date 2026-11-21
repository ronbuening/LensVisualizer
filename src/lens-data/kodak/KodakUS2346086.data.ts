import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,346,086 A, Example 2: a four-element Tessar-type photographic objective.
 * The patent gives dimensions in millimetres, nD and Abbe numbers, f/4.5 and a
 * 27-degree half-field. Its nominal 100 mm focal length computes to 100.20 mm;
 * the printed 89.7 mm back focus is retained, versus 89.99 mm paraxially.
 * The stop is inferred within the 7.5 mm rear air space, split 4.2 / 3.3 mm;
 * its radius is derived from the nominal aperture. Clear semi-diameters are
 * inferred from the drawing-sheet section: 13.3 mm at the front and 12.4 mm
 * at the middle singlet and rear doublet. These square-cut rims preserve the
 * drawn size order and the axial beam, with 92.0% geometric transmission at
 * 27 degrees; the smaller drawn rims would lose substantially more light.
 * The patent gives no close-focus data or named glass melts.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f45-us2346086",
  maker: "Kodak",
  name: "KODAK 100mm f/4.5 (US 2,346,086 Design)",
  subtitle: "US 2,346,086 A, Example 2 — Eastman Kodak / Schade & Tolle",
  visible: true,
  source: {
    patentNumber: "US 2,346,086 A",
    patentYear: 1944,
    example: {
      label: "Example 2",
      id: "2",
    },
    authors: ["Willy Schade", "Karl Tolle"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 101.49,
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 100.2,
    },
    fNumber: {
      design: 4.5,
    },
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/4.5",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      glass: "H-LaK12 (CDGM)",
      focalLengthMm: 37.88,
      role: "Positive front element collecting light into the central negative element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.605,
      vd: 43.6,
      indexReference: "D",
      glass: "Unmatched (nD 1.605 / ν 43.6)",
      focalLengthMm: -31.57,
      role: "Negative middle element balancing the positive front and rear components.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.621,
      vd: 36.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.621 / ν 36.2)",
      focalLengthMm: -50.57,
      role: "Negative front member of the rear cemented doublet.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 45.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.744 / ν 45.8)",
      focalLengthMm: 31.71,
      role: "High-index positive rear member providing the doublet's converging power.",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 26.4,
      d: 3.9,
      sd: 13.3,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 2.0,
      sd: 13.3,
    },
    {
      label: "3",
      R: -85.6,
      d: 1.1,
      sd: 12.4,
      medium: 2,
    },
    {
      label: "4",
      R: 24.7,
      d: 4.2,
      sd: 12.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.3,
    },
    {
      label: "5",
      R: -90.5,
      d: 1.0,
      sd: 12.4,
      medium: 3,
    },
    {
      label: "6",
      R: 48.3,
      d: 4.0,
      sd: 12.4,
      medium: 4,
    },
    {
      label: "7",
      R: -44.5,
      d: 89.7,
      sd: 12.4,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 54,
    maxTraceFieldDeg: 27,
  },
  groups: [
    {
      text: "FRONT POSITIVE",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "MIDDLE NEGATIVE",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "REAR DOUBLET",
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
