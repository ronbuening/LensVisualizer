import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,239,538 A, Figure 2, one of two numerical examples, at f = 100.
 * Patent dimensions are read in millimetres. Radii, thicknesses, air gaps,
 * d-line indices, Abbe numbers and the 14.23 / 16.14 stop split are printed.
 * Clear semi-diameters are inferred from Figure 2's rim proportions and
 * checked against real rays. Elements keep square rims; the iris follows f/6.3.
 * The last gap is 41.58 mm: printed front-vertex-to-focus distance 79.37
 * minus the 37.79 mm lens track, rather than the paraxial BFD of 41.60 mm.
 * L1 and L3 retain the same printed nd 1.60801 and different Abbe numbers,
 * 45.0 and 46.2. The patent states an image field of about 30 degrees.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f63-us2239538",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/6.3 (US 2,239,538 Design)",
  subtitle: "US 2,239,538 A, Figure 2 — Zeiss / Richter",
  visible: true,
  source: {
    patentNumber: "US 2,239,538 A",
    patentYear: 1941,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Robert Richter"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 54.2,
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100.03,
    },
    fNumber: {
      design: 6.3,
    },
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/6.3",
      "TELEPHOTO",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.60801,
      vd: 45,
      indexReference: "d",
      focalLengthMm: 23.18,
      glass: "Unmatched (nd 1.60801 / ν 45.0)",
      role: "Positive singlet of the front system",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: -35.08,
      glass: "SF10 (Schott)",
      role: "Negative singlet of the front system, facing the rear negative lens",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.60801,
      vd: 46.2,
      indexReference: "d",
      focalLengthMm: -26.43,
      glass: "H-BaF6 (CDGM)",
      role: "Negative meniscus of the rear system, concave toward the front system",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: 45.56,
      glass: "SF10 (Schott)",
      role: "Positive singlet of the rear system, with its plane face toward the stop",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 21.1,
      d: 3.21,
      sd: 8.7,
      medium: 1,
    },
    {
      label: "2",
      R: -40,
      d: 0.07,
      sd: 8.7,
    },
    {
      label: "3",
      R: -40.2,
      d: 1.2,
      sd: 8.7,
      medium: 2,
    },
    {
      label: "4",
      R: 70.95,
      d: 14.23,
      sd: 8.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 16.14,
    },
    {
      label: "5",
      R: -13,
      d: 1,
      sd: 9.5,
      medium: 3,
    },
    {
      label: "6",
      R: -70,
      d: 0.07,
      sd: 9.5,
    },
    {
      label: "7",
      R: "flat",
      d: 1.87,
      sd: 9.5,
      medium: 4,
    },
    {
      label: "8",
      R: -33.18,
      d: 41.58,
      sd: 9.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 6.3,
    fStops: [6.3, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 30,
    maxTraceFieldDeg: 15,
  },
  groups: [
    {
      text: "FRONT SYSTEM (+)",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "REAR SYSTEM (−)",
      fromSurface: "5",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
