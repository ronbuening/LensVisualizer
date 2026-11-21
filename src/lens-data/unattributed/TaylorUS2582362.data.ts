import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,582,362 A (1952), sole example: Philip H. Taylor's photographic triplet.
 * All printed lengths are converted from inches to millimetres by a factor of 25.4.
 * The printed stop is 17.85112 mm behind surface 2. Its diameter of 1.170 in
 * (29.718 mm) gives paraxial f/4.82; the clear diameter of 1.452 in (36.8808 mm)
 * gives f′/D = 4.87, consistent with the patent's rounded f/4.9 designation.
 * The model uses f/4.9. Equal surface rims are inferred from the single printed
 * clear diameter; the image plane is the computed paraxial infinity plane.
 * The patent's sodium-D index, Abbe number and C/F indices are retained for each glass.
 */
const LENS_DATA = {
  schema: 2,
  key: "taylor-180mm-f49-us2582362",
  maker: null,
  name: "TAYLOR 180mm f/4.9 (US 2,582,362 Design)",
  subtitle: "US 2,582,362 A, sole example — photographic triplet design",
  visible: true,
  source: {
    patentNumber: "US 2,582,362 A",
    patentYear: 1952,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Philip H. Taylor"],
    assignees: ["Northrop Aircraft, Inc."],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 31.44,
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 179.55,
    },
    specs: ["3 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/4.9", "DESIGN f = 179.55 mm"],
    fNumber: {
      design: 4.9,
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive front element that begins convergence toward the image",
      focalLengthMm: 104.33,
      nd: 1.517,
      vd: 64.5,
      indexReference: "D",
      nC: 1.51462,
      nF: 1.52264,
      glass: "Unmatched (BSC-2, nD 1.517 / ν 64.5)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Dispersive negative middle element that balances the positive crowns",
      focalLengthMm: -43.88,
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      nC: 1.61216,
      nF: 1.62901,
      glass: "Unmatched (DF-2, nD 1.617 / ν 36.6)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      role: "Positive rear element that completes image formation",
      focalLengthMm: 69.82,
      nd: 1.5725,
      vd: 57.8,
      indexReference: "D",
      nC: 1.5696,
      nF: 1.5795,
      glass: "S-BAL11 (Ohara)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 56.44642,
      d: 5.08,
      sd: 18.4404,
      medium: 1,
    },
    {
      label: "2",
      R: -1177.72434,
      d: 17.85112,
      sd: 18.4404,
    },
    {
      label: "STO",
      R: "flat",
      d: 11.2395,
    },
    {
      label: "3",
      R: -57.65546,
      d: 2.54,
      sd: 18.4404,
      medium: 2,
    },
    {
      label: "4",
      R: 51.88966,
      d: 16.06804,
      sd: 18.4404,
    },
    {
      label: "5",
      R: 180.54828,
      d: 7.62,
      sd: 18.4404,
      medium: 3,
    },
    {
      label: "6",
      R: -50.546,
      d: 143.637469,
      sd: 18.4404,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 4.9,
    fStops: [4.9, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  groups: [
    {
      text: "Front positive element",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle negative element",
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
