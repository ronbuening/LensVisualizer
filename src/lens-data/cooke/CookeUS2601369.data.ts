import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Gordon Henry Cook's sole example in US 2,601,369 A, specification table and
 * claim 4. All dimensions are multiplied by 100 from the patent's F = 1 table,
 * giving millimetres at a nominal 100 mm focal length. Both tables give D1 =
 * .130F; the drawing's .103 label is a misprint, as the stated .403F total confirms.
 * The indices are for the D line (taken as sodium, 589.3 nm), with printed Abbe V.
 * The stop position, bore and clear rims are inferred; the image plane is the
 * calculated paraxial infinity focus. The patent states a 26-degree half-field.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f267-us2601369",
  maker: "Cooke",
  name: "COOKE 100mm f/2.67 (US 2,601,369 Design)",
  subtitle: "US 2,601,369 A, sole example — Three-component photographic objective",
  visible: false,
  source: {
    patentNumber: "US 2,601,369 A",
    patentYear: 1952,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Gordon Henry Cook"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.97,
    },
    fNumber: {
      design: 2.67,
    },
    elementCount: 4,
    groupCount: 3,
    imageCircleMm: 97.2,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/2.67"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      role: "Converging front component",
      focalLengthMm: 53.41,
      nd: 1.657,
      vd: 50.8,
      indexReference: "D",
      glass: "Unmatched (nD 1.6570 / ν 50.8)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Diverging middle component",
      focalLengthMm: -32.95,
      nd: 1.6535,
      vd: 33.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.6535 / ν 33.5)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Negative front element of the converging rear doublet",
      focalLengthMm: -31.98,
      nd: 1.7,
      vd: 41.2,
      indexReference: "D",
      glass: "Unmatched (nD 1.7000 / ν 41.2)",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      role: "Positive rear element of the converging rear doublet",
      focalLengthMm: 21.96,
      nd: 1.744,
      vd: 44.7,
      indexReference: "D",
      glass: "Unmatched (nD 1.7440 / ν 44.7)",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 35.09,
      d: 13,
      sd: 23,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 4,
      sd: 20,
    },
    {
      label: "3",
      R: -77.52,
      d: 2,
      sd: 18,
      medium: 2,
    },
    {
      label: "4",
      R: 30.12,
      d: 4.8,
      sd: 15.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.2,
    },
    {
      label: "5",
      R: 285.71,
      d: 2,
      sd: 17,
      medium: 3,
    },
    {
      label: "6",
      R: 20.7,
      d: 14.3,
      sd: 17,
      medium: 4,
    },
    {
      label: "7",
      R: -54.74,
      d: 79.474368,
      sd: 17,
    },
  ],
  aperture: {
    nominalFNumber: 2.67,
    fStops: [2.67, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 52,
    maxTraceFieldDeg: 26,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Group 1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Group 2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Group 3",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
