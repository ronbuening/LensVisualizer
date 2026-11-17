import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,194,413 A (Arthur Warmisham and Charles Gorrie Wynne; Taylor, Taylor & Hobson Limited; granted 1940),
 * Example 1, illustrated by Fig. 1: an f/2 objective of six elements in four groups, printed at an equivalent
 * focal length of 1.000. The description table (PDF p. 2) and the claim 3 table (PDF p. 3) agree.
 *
 * Every radius, thickness and air gap is multiplied by 100, with no further scaling or fitting; the calculated
 * paraxial EFL is 100.04 mm. Indices are the printed sodium-D values and the Abbe numbers are copied as printed.
 * The cemented interfaces are R4 (L2/L3) and R7 (L4/L5).
 *
 * INFERRED: the patent prints no diaphragm position and the figure draws no iris. The stop is placed midway through
 * the 19.21 mm central air gap S2, 9.605 mm from each adjacent vertex, and its radius is set for f/2. All
 * semi-diameters are estimates, not printed or measured values. The 68.40 mm image distance after R10 is the
 * calculated paraxial back focus, not a printed value. Only infinity focus is modelled.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f2-us2194413",
  maker: "Cooke",
  name: "COOKE 100mm f/2 (US 2,194,413 Design)",
  subtitle: "US 2,194,413 A, Example 1 — low-distortion f/2 cine objective",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/2", "CINE OBJECTIVE"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100.04,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 2,194,413 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1940,
    authors: ["Arthur Warmisham", "Charles Gorrie Wynne"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Front collective, nearly plano-convex; its almost flat rear face is the patent's main change for lower distortion",
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6130 / V 59.3)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      role: "Positive crown of the cemented front meniscus C1",
      cemented: "C1",
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6130 / V 59.3)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Flint of C1; its strongly concave rear face turns towards the stop",
      cemented: "C1",
      nd: 1.6137,
      vd: 37.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.6137 / V 37.2)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      role: "Flint of the cemented rear meniscus C2; its concave front face turns towards the stop",
      cemented: "C2",
      nd: 1.6468,
      vd: 33.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.6468 / V 33.8)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      role: "Positive rear member of C2, forming its convex rear face",
      cemented: "C2",
      nd: 1.6437,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6437 / V 48.3)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      role: "Rear collective; its glass index above 1.63 is part of the patent's distortion correction",
      nd: 1.6437,
      vd: 48.3,
      indexReference: "D",
      glass: "Unmatched (nD 1.6437 / V 48.3)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 90.13,
      d: 8.12,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 2504.0,
      d: 0.65,
      sd: 29,
    },
    {
      label: "3",
      R: 40.64,
      d: 15.12,
      sd: 28,
      medium: 2,
    },
    {
      label: "4",
      R: 69.6,
      d: 4.38,
      sd: 26,
      medium: 3,
    },
    {
      label: "5",
      R: 26.57,
      d: 9.605,
      sd: 20.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.605,
    },
    {
      label: "6",
      R: -30.47,
      d: 4.38,
      sd: 20.3,
      medium: 4,
    },
    {
      label: "7",
      R: 45.0,
      d: 15.97,
      sd: 23,
      medium: 5,
    },
    {
      label: "8",
      R: -40.91,
      d: 0.2,
      sd: 23,
    },
    {
      label: "9",
      R: 174.6,
      d: 10.15,
      sd: 24,
      medium: 6,
    },
    {
      label: "10",
      R: -100.1,
      d: 68.40069518795941,
      sd: 24,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
