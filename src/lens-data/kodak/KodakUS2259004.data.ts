import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,259,004 A, Figure 2 numerical example, with the section in Figure 1.
 * Seven elements in four groups; all surfaces are spherical. Printed radii,
 * thicknesses, air spaces, sodium-D indices and Abbe numbers are retained.
 * Dimensions use the printed 100 mm focal-length scale.
 * The stop lies in the printed 14.61 mm gap after surface 7; its 12.50/2.11 mm
 * split and all clear radii are inferred. The stop radius is derived for f/1.5.
 * R6's 26.4 mm clear radius follows Figure 1's height relative to the retained
 * 37 mm front rim. The drawing is not uniformly to scale; other rims retain
 * their inferred values. The axial beam and 20-degree chief ray clear them.
 * The image plane is at the calculated paraxial back focus of 47.00 mm, which
 * is not printed. Calculated EFL is 100.03 mm against the stated 100 mm.
 * The 20.0° half-field lies within the patent's stated covering power.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f15-us2259004",
  maker: "Kodak",
  name: "KODAK 100mm f/1.5 (US 2,259,004 Design)",
  subtitle: "US 2,259,004 A, Figure 2 — Eastman Kodak / Schade",
  visible: true,
  source: {
    patentNumber: "US 2,259,004 A",
    patentYear: 1941,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Willy Schade"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.03,
    },
    fNumber: {
      design: 1.5,
    },
    elementCount: 7,
    groupCount: 4,
    imageCircleMm: 72.15,
    specs: [
      "7 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/1.5",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 53.8,
      indexReference: "D",
      focalLengthMm: 141.32,
      glass: "Unmatched (nD 1.618 / ν 53.8)",
      role: "Front positive collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.568,
      vd: 42.7,
      indexReference: "D",
      focalLengthMm: -151.26,
      glass: "Unmatched (nD 1.568 / ν 42.7)",
      role: "Negative front member of the cemented doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.637,
      vd: 55.7,
      indexReference: "D",
      focalLengthMm: 64.77,
      glass: "Unmatched (nD 1.637 / ν 55.7)",
      role: "Positive rear member of the cemented doublet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.672,
      vd: 32.2,
      indexReference: "D",
      focalLengthMm: -43.88,
      glass: "Unmatched (nD 1.672 / ν 32.2)",
      role: "Air-spaced negative element before the diaphragm",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.637,
      vd: 55.7,
      indexReference: "D",
      focalLengthMm: 40.07,
      glass: "Unmatched (nD 1.637 / ν 55.7)",
      role: "Positive front member of the cemented rear triplet",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.522,
      vd: 50.7,
      indexReference: "D",
      focalLengthMm: -39.85,
      glass: "Unmatched (nD 1.522 / ν 50.7)",
      role: "Negative middle member of the cemented rear triplet",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.671,
      vd: 47,
      indexReference: "D",
      focalLengthMm: 66.99,
      glass: "Unmatched (nD 1.671 / ν 47)",
      role: "Positive rear member of the cemented rear triplet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 73.3,
      d: 12.77,
      sd: 37,
      medium: 1,
    },
    {
      label: "2",
      R: 425.8,
      d: 0.56,
      sd: 37,
    },
    {
      label: "3",
      R: 58.8,
      d: 5.62,
      sd: 35,
      medium: 2,
    },
    {
      label: "4",
      R: 33.7,
      d: 15.38,
      sd: 29.5,
      medium: 3,
    },
    {
      label: "5",
      R: 151.3,
      d: 5.17,
      sd: 30,
    },
    {
      label: "6",
      R: -303.7,
      d: 3.37,
      sd: 26.4,
      medium: 4,
    },
    {
      label: "7",
      R: 32.8,
      d: 12.5,
      sd: 22.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.11,
    },
    {
      label: "8",
      R: 118,
      d: 18.36,
      sd: 25,
      medium: 5,
    },
    {
      label: "9",
      R: -30.6,
      d: 3.37,
      sd: 25,
      medium: 6,
    },
    {
      label: "10",
      R: 67.4,
      d: 11.23,
      sd: 30,
      medium: 7,
    },
    {
      label: "11",
      R: -125.9,
      d: 46.997125,
      sd: 30,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 40,
    maxTraceFieldDeg: 20,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2+L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "G4 · L5+L6+L7",
      fromSurface: "8",
      toSurface: "11",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "8", toSurface: "11" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
