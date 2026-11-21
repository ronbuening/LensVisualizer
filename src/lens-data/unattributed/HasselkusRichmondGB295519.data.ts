import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 295,519 A, sole numerical example on printed p. 2, with the section on the drawing sheet.
 * John William Hasselkus and George Arthur Richmond are the individual applicants; no company is printed.
 * The patent gives f = 100 units, f/4 and a 70-degree field. Dimensions are represented in millimetres.
 * All ten signed radii, glass thicknesses, air gaps and helium d-line indices follow the printed table.
 * The table computes to EFL 100.08235 mm and back focus 85.73492 mm; no image distance is printed.
 * The final spacing is the computed paraxial back focus. The stop position is printed: b1 = b2 = 2.32.
 * Its radius is derived from f/4. Clear radii are inferred; R1/R2 and R9/R10 use the drawing's 13.1 mm
 * doublet height, inside the face crossings at 13.57 and 14.86 mm. Other rims retain estimated heights.
 * The R3/R4 gap closes at about 10.9 mm, while the f/4 marginal needs 10.63 mm; gapSagFrac = 0.94
 * preserves that beam with positive air clearance. The 140.2 mm image circle is twice the real chief-ray
 * height at the stated 35-degree half-field, rounded to 0.1 mm. Off-axis bundles are vignetted.
 * Mercury g-line indices are printed but no Abbe numbers are given, so the model traces only helium d.
 * No close-focus prescription is printed. A connection to the Ross Wide Angle Xpres f/4 is likely but
 * unconfirmed; its production prescription is not documented by the cited product record.
 */
const LENS_DATA = {
  schema: 2,
  key: "hasselkus-richmond-100mm-f4-gb295519",
  maker: null,
  name: "HASSELKUS & RICHMOND 100mm f/4 (GB 295,519 Design)",
  subtitle: "GB 295,519 A, sole example — likely Ross Wide Angle Xpres relation",
  visible: true,
  source: {
    patentNumber: "GB 295,519 A",
    patentYear: 1928,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["John William Hasselkus", "George Arthur Richmond"],
    assignees: [],
  },
  catalog: {
    imageCircleMm: 140.2,
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100.08,
    },
    fNumber: {
      design: 4,
    },
    specs: ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/4", "70° FIELD"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.61071,
      indexReference: "d",
      glass: "Unmatched (nd 1.61071 / ng 1.62501)",
      focalLengthMm: 30.53,
      role: "Positive outer element of the front doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.55065,
      indexReference: "d",
      glass: "Unmatched (nd 1.55065 / ng 1.56616)",
      focalLengthMm: -25.7,
      role: "Negative inner element of the front doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.51776,
      indexReference: "d",
      glass: "Unmatched (nd 1.51776 / ng 1.52839)",
      focalLengthMm: 120.31,
      role: "Positive meniscus in front of the stop, concave toward it",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.51776,
      indexReference: "d",
      glass: "Unmatched (nd 1.51776 / ng 1.52839)",
      focalLengthMm: 135.19,
      role: "Positive meniscus behind the stop, concave toward it",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.55065,
      indexReference: "d",
      glass: "Unmatched (nd 1.55065 / ng 1.56616)",
      focalLengthMm: -28.82,
      role: "Negative inner element of the rear doublet",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61071,
      indexReference: "d",
      glass: "Unmatched (nd 1.61071 / ng 1.62501)",
      focalLengthMm: 33.46,
      role: "Positive outer element of the rear doublet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.66,
      d: 5.48,
      sd: 13.1,
      medium: 1,
    },
    {
      label: "2",
      R: -95.51,
      d: 1.91,
      sd: 13.1,
      medium: 2,
    },
    {
      label: "3",
      R: 16.73,
      d: 1.45,
      sd: 10.64,
    },
    {
      label: "4",
      R: 24.25,
      d: 3.47,
      sd: 10.65,
      medium: 3,
    },
    {
      label: "5",
      R: 37.77,
      d: 2.32,
      sd: 12.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.32,
    },
    {
      label: "6",
      R: -43.64,
      d: 3.47,
      sd: 13.5,
      medium: 4,
    },
    {
      label: "7",
      R: -27.61,
      d: 1.45,
      sd: 12,
    },
    {
      label: "8",
      R: -19.95,
      d: 3.13,
      sd: 13,
      medium: 5,
    },
    {
      label: "9",
      R: 81.96,
      d: 5.92,
      sd: 13.1,
      medium: 6,
    },
    {
      label: "10",
      R: -26.48,
      d: 85.734921,
      sd: 13.1,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 4,
    fStops: [4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 70,
    maxTraceFieldDeg: 35,
  },
  groups: [
    {
      text: "Front doublet",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Front meniscus",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "Rear meniscus",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "Rear doublet",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
  checks: {
    gapSagFrac: 0.94,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
