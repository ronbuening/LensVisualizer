import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,558,073 A, William F. Bielicke's sole numerical example for Bausch & Lomb Optical Company,
 * published October 20, 1925: a four-element, three-group Tessar-type objective printed at 188 mm f/4.5.
 * Radii, axial distances, D-line indices and Abbe numbers follow the table; all lengths are in millimetres.
 * The poorly printed d3 is read as 3.8 mm: its closed lower bowl resembles the 8 in d1 = 7.8.
 * The printed 188 mm is closer to the G′-line EFL of 188.21 mm than the D-line EFL of 188.64 mm.
 * Stop position is printed, 8.7 mm after R4 and 6.2 mm before R5; its diameter is inferred from f/4.5.
 * Clear semi-diameters are estimates. The image plane is the computed D-line paraxial back focus,
 * 166.977796 mm after R7. The 12° half-field is illustrative and is not printed.
 * Element focal lengths are thick-lens values in air at the D line, including the two cemented members.
 */
const LENS_DATA = {
  schema: 2,
  key: "bausch-lomb-188mm-f45-us1558073",
  maker: "Bausch & Lomb",
  name: "BAUSCH & LOMB 188mm f/4.5 (US 1,558,073 Design)",
  subtitle: "US 1,558,073 A, sole example — Tessar-type four-element objective",
  visible: false,
  source: {
    patentNumber: "US 1,558,073 A",
    patentYear: 1925,
    example: { label: "Sole example", id: null },
    authors: ["William F. Bielicke"],
    assignees: ["Bausch & Lomb Optical Company"],
    sdSource: "heuristic",
    errata: [
      {
        status: "unresolved",
        note: "The table gives a D-line EFL of 188.640798 mm against the stated 188 mm. The printed G′ indices give 188.210679 mm, closer to the stated focal length; the reason for the difference is not established.",
      },
    ],
  },
  catalog: {
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 188.64,
    },
    fNumber: {
      design: 4.5,
    },
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/4.5", "DESIGN f = 188 mm"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6088,
      vd: 56.5,
      indexReference: "D",
      focalLengthMm: 73.44,
      glass: "Unmatched (nD 1.6088 / ν 56.5)",
      role: "Positive front collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5602,
      vd: 45.3,
      indexReference: "D",
      focalLengthMm: -56.75,
      glass: "Unmatched (nD 1.5602 / ν 45.3)",
      role: "Negative middle singlet between the positive front and rear groups",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5602,
      vd: 45.3,
      indexReference: "D",
      focalLengthMm: -71.37,
      glass: "Unmatched (nD 1.5602 / ν 45.3)",
      role: "Negative front member of the positive rear doublet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6165,
      vd: 55,
      indexReference: "D",
      focalLengthMm: 48.28,
      glass: "Unmatched (nD 1.6165 / ν 55.0)",
      role: "Positive rear member of the rear doublet",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 49.01,
      d: 7.8,
      sd: 23.5,
      medium: 1,
    },
    {
      label: "2",
      R: -478.7,
      d: 5.4,
      sd: 23.5,
    },
    {
      label: "3",
      R: -114.3,
      d: 3.3,
      sd: 25,
      medium: 2,
    },
    {
      label: "4",
      R: 44.5,
      d: 8.7,
      sd: 24,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.2,
    },
    {
      label: "5",
      R: -271.9,
      d: 3.8,
      sd: 24,
      medium: 3,
    },
    {
      label: "6",
      R: 47.11,
      d: 9.7,
      sd: 21.5,
      medium: 4,
    },
    {
      label: "7",
      R: -74.5,
      d: 166.97779594813107,
      sd: 21.5,
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
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Negative middle singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear cemented doublet",
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
