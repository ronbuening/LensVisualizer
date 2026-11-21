import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,279,372 A, Example VI, describes a three-element photographic objective.
 * The printed radii, thicknesses, air spaces and sodium-D glass values are retained.
 * They give EFL 100.75 mm and back focus 79.41 mm against the printed 100 mm and
 * 78.5 mm; Examples I–V also show the patent's loose focal-length normalization.
 * The image plane is the computed paraxial infinity plane. The stop is inferred
 * at the midpoint of the 7.5 mm rear air space, its size from f/3.5, and all clear
 * semi-diameters are estimated. Covering power 26° is interpreted as a half-angle.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f35-us2279372",
  maker: "Kodak",
  name: "KODAK 100mm f/3.5 (US 2,279,372 Design)",
  subtitle: "US 2,279,372 A, Example VI — three-element photographic objective",
  visible: true,
  source: {
    patentNumber: "US 2,279,372 A",
    patentYear: 1942,
    example: {
      label: "Example VI",
      id: "6",
    },
    authors: ["Maximilian J. Herzberger"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 97.6034,
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100.75,
    },
    fNumber: {
      design: 3.5,
    },
    specs: ["3 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/3.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      focalLengthMm: 59.39,
      nd: 1.616,
      vd: 55.1,
      indexReference: "D",
      glass: "Unmatched (nD 1.6160 / ν 55.1)",
      role: "Positive front collector of the triplet.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      focalLengthMm: -33.47,
      nd: 1.649,
      vd: 33.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.6490 / ν 33.8)",
      role: "More dispersive negative element between the positive singlets.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      focalLengthMm: 52.29,
      nd: 1.616,
      vd: 55.1,
      indexReference: "D",
      glass: "Unmatched (nD 1.6160 / ν 55.1)",
      role: "Positive rear collector of the triplet.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.1,
      d: 6.7,
      sd: 18,
      medium: 1,
    },
    {
      label: "2",
      R: 241,
      d: 9.4,
      sd: 18,
    },
    {
      label: "3",
      R: -71.4,
      d: 2.2,
      sd: 19,
      medium: 2,
    },
    {
      label: "4",
      R: 31.6,
      d: 3.75,
      sd: 14,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.75,
    },
    {
      label: "5",
      R: 82.8,
      d: 7.1,
      sd: 18,
      medium: 3,
    },
    {
      label: "6",
      R: -51,
      d: 79.41431821933085,
      sd: 18,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 52,
    maxTraceFieldDeg: 26,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear singlet",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
