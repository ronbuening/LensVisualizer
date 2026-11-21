import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,380,207 A, sole example: George H. Aklin's five-element telephoto.
 * Dimensions are in millimetres. The printed table computes to EFL 100.23 mm
 * and back focus 53.66 mm against the stated 100 mm and 53.2 mm; the image
 * plane remains at the calculated paraxial focus. No single misprint explains
 * both differences. The two tables give a 0.05 mm rear air space, retained
 * despite the prose's conflicting 0.005f (0.5 mm). Claim 5 gives only S2 < 0.01F.
 * The text places the diaphragm about 9 units behind R3. Its modeled station
 * uses that distance; its radius is derived from f/5.6. Clear rims are estimated.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f56-us2380207",
  maker: "Kodak",
  name: "KODAK 100mm f/5.6 (US 2,380,207 Design)",
  subtitle: "US 2,380,207 A, sole example — compact telephoto design",
  visible: true,
  source: {
    patentNumber: "US 2,380,207 A",
    patentYear: 1945,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["George H. Aklin"],
    assignees: ["Eastman Kodak Company"],
    errata: [
      {
        status: "unresolved",
        note: "The prescription in the printed table computes to EFL 100.226983 mm and back focus 53.655204 mm, against stated values of 100 mm and 53.2 mm. No single misprint explains both differences; the image plane is at the calculated paraxial focus.",
      },
      {
        status: "unresolved",
        note: "Both numerical tables give rear air space S2 = 0.05 mm, whereas the prose gives 0.005f (0.5 mm at f = 100 mm); claim 5 gives only S2 < 0.01F. The model follows the tables, consistent with the figure and the distortion pattern.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.23,
    },
    fNumber: {
      design: 5.6,
    },
    elementCount: 5,
    groupCount: 3,
    imageCircleMm: 53.709469,
    specs: ["5 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/5.6", "TELEPHOTO"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.498,
      vd: 67,
      indexReference: "D",
      focalLengthMm: 25.09,
      glass: "N-BK10 (Schott)",
      role: "Positive front element of the collecting doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.656,
      vd: 40.5,
      indexReference: "D",
      focalLengthMm: -38.13,
      glass: "Unmatched (nD 1.656 / ν 40.5)",
      role: "Dispersive negative partner in the front doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5,
      vd: 61.6,
      indexReference: "D",
      focalLengthMm: -26.02,
      glass: "Unmatched (nD 1.500 / ν 61.6)",
      role: "Negative front element of the rear diverging doublet",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 47.2,
      indexReference: "D",
      focalLengthMm: 69.24,
      glass: "Unmatched (nD 1.755 / ν 47.2)",
      role: "High-index positive partner in the rear doublet",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 47.2,
      indexReference: "D",
      focalLengthMm: 91.43,
      glass: "Unmatched (nD 1.755 / ν 47.2)",
      role: "Positive singlet completing the rear negative member",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 16,
      d: 4.8,
      sd: 9.8,
      medium: 1,
    },
    {
      label: "2",
      R: -51.3,
      d: 1.3,
      sd: 9.8,
      medium: 2,
    },
    {
      label: "3",
      R: 49.3,
      d: 9,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 12.1,
    },
    {
      label: "4",
      R: -11,
      d: 1,
      sd: 8,
      medium: 3,
    },
    {
      label: "5",
      R: -73.4,
      d: 1.5,
      sd: 8,
      medium: 4,
    },
    {
      label: "6",
      R: -30.8,
      d: 0.05,
      sd: 8,
    },
    {
      label: "7",
      R: 508,
      d: 1.2,
      sd: 8,
      medium: 5,
    },
    {
      label: "8",
      R: -79.8,
      d: 53.655204,
      sd: 8,
    },
  ],
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 30,
    maxTraceFieldDeg: 15,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front doublet",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Rear doublet",
      fromSurface: "4",
      toSurface: "6",
    },
    {
      text: "Rear singlet",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "4", toSurface: "6" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
