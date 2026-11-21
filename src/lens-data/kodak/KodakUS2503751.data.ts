import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,503,751 A, Example 2 (Figure 3): a 100 mm f/2.5 Cooke triplet.
 * Radii, element thicknesses, air spaces and sodium D-line glass values are printed.
 * The stop position and opening and all clear radii are inferred; the stop divides
 * the printed 17.66 mm rear air space into 11.00 mm and 6.66 mm. The image plane
 * is the computed paraxial infinity focus, 67.68 mm behind the last surface.
 * The summary ratios 0.43 and 2.79 differ slightly from the values 0.425 and
 * 2.784 derived from the printed radii; the radii are retained.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f25-us2503751",
  maker: "Kodak",
  name: "KODAK 100mm f/2.5 (US 2,503,751 Design)",
  subtitle: "US 2,503,751 A, Example 2 — Eastman Kodak / Litten, Aklin & Altman",
  visible: true,
  source: {
    patentNumber: "US 2,503,751 A",
    patentYear: 1950,
    example: {
      label: "Example 2",
      id: "2",
    },
    authors: ["Walter Litten", "George H. Aklin", "Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.04,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 3,
    groupCount: 3,
    imageCircleMm: 49.78,
    specs: [
      "3 ELEMENTS / 3 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/2.5",
      "ALL SPHERICAL",
      "COOKE TRIPLET",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.1,
      indexReference: "D",
      focalLengthMm: 53.94,
      glass: "Unmatched (nD 1.734 / ν 51.1)",
      role: "Front positive crown element",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.689,
      vd: 30.9,
      indexReference: "D",
      focalLengthMm: -34.81,
      glass: "Unmatched (nD 1.689 / ν 30.9)",
      role: "Central negative flint element for chromatic and field correction",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.1,
      indexReference: "D",
      focalLengthMm: 63.96,
      glass: "Unmatched (nD 1.734 / ν 51.1)",
      role: "Rear positive crown element",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 43.01,
      d: 13.65,
      sd: 25,
      medium: 1,
    },
    {
      label: "2",
      R: -431.4,
      d: 6.76,
      sd: 25,
    },
    {
      label: "3",
      R: -82.99,
      d: 9.24,
      sd: 22,
      medium: 2,
    },
    {
      label: "4",
      R: 35.26,
      d: 11,
      sd: 20,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.66,
    },
    {
      label: "5",
      R: 133.5,
      d: 5.3,
      sd: 20,
      medium: 3,
    },
    {
      label: "6",
      R: -71.19,
      d: 67.679265,
      sd: 20,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 28,
    maxTraceFieldDeg: 14,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front positive element",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Central negative element",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear positive element",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
