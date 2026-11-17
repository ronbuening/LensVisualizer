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
  key: "taylor-hobson-warmisham-wynne-us2194413-fig1-patent-reference",
  maker: "Cooke",
  name: "WARMISHAM / WYNNE f/2 PATENT REFERENCE",
  subtitle: "FIGURE 1; HIDDEN QUALIFIED REFERENCE",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"],
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
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      cemented: "D1",
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Negative Meniscus",
      cemented: "D1",
      nd: 1.6137,
      vd: 37.2,
      indexReference: "D",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      cemented: "D2",
      nd: 1.6468,
      vd: 33.8,
      indexReference: "D",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex Positive",
      cemented: "D2",
      nd: 1.6437,
      vd: 48.3,
      indexReference: "D",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconvex Positive",
      nd: 1.6437,
      vd: 48.3,
      indexReference: "D",
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
    description: "Infinity-only patent reference. Computed paraxial BFD; no named retail match.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
