import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * George H. Aklin, Eastman Kodak Company, US 2,391,114 A, Example 2 / Figure 2.
 * The patent gives a 100 mm f/2.25 spherical triplet with sodium D-line indices.
 * Radii, thicknesses, air spaces and glass values follow the printed tables.
 * The stop is inferred 7.2 mm into the 10.2 mm rear air space; all clear radii
 * are estimated. The image plane is the computed paraxial back focus of
 * 73.493161 mm, against the printed 73.5 mm; EFL is 99.920682 mm.
 * The estimated iris gives a real-ray working aperture of about f/2.319.
 * The modeled half-field is 15 degrees, within the angles marked in Figure 4.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f225-us2391114",
  maker: "Kodak",
  name: "KODAK 100mm f/2.25 (US 2,391,114 Design)",
  subtitle: "US 2,391,114 A, Example 2 — high-index triplet design",
  visible: true,
  source: {
    patentNumber: "US 2,391,114 A",
    patentYear: 1945,
    example: {
      label: "Example 2",
      id: "2",
    },
    authors: ["George H. Aklin"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 53.43060634981295,
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.25,
    },
    specs: ["3 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/2.25"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 47.2,
      indexReference: "D",
      focalLengthMm: 66.01,
      glass: "Unmatched (nD 1.755 / ν 47.2)",
      role: "Front positive element that collects and converges the incoming beam",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 29.3,
      indexReference: "D",
      focalLengthMm: -35.92,
      glass: "Unmatched (nD 1.720 / ν 29.3)",
      role: "Central negative element that balances the positive outer elements",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.1,
      indexReference: "D",
      focalLengthMm: 54.73,
      glass: "Unmatched (nD 1.734 / ν 51.1)",
      role: "Rear positive element that converges the beam toward the image",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 54.1,
      d: 16.1,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -552,
      d: 9.4,
      sd: 28,
    },
    {
      label: "3",
      R: -70,
      d: 8.1,
      sd: 27,
      medium: 2,
    },
    {
      label: "4",
      R: 43,
      d: 7.2,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 3,
    },
    {
      label: "5",
      R: 140.7,
      d: 17.9,
      sd: 25,
      medium: 3,
    },
    {
      label: "6",
      R: -53.2,
      d: 73.49316141965102,
      sd: 25,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 2.25,
    fStops: [2.25, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 30,
    maxTraceFieldDeg: 15,
  },
  groups: [
    {
      text: "Front positive group",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Central negative group",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear positive group",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
