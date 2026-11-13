import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Source: GB 198,958 A, Example I (first numerical table, printed p. 2; Fig. 1).
 * Nominal 12-inch f/6 design at the patent's scale, with no production rescaling.
 * All source lengths in inches are converted to millimetres by multiplying by 25.4;
 * refractive indices and Abbe numbers are unchanged.
 * The stop position at the midpoint of the 2.73-inch air gap is inferred, and its
 * radius is derived from f/6. Rims are not inferred: the printed group diameters
 * 2.05 and 1.5 inches give semi-diameters 26.035 and 19.05 mm. Fig. 1 agrees at
 * about 23.53 px/mm on a 600-dpi render, checked against axial spans, thicknesses,
 * and curved faces; both cemented bodies retain their square-cut common rims.
 * The final back focus is calculated (151.80322609880798 mm), not tabulated.
 * The 15-degree half-field
 * is a modeling limit chosen to trace the assigned 4x5 format, not a patent field.
 * Infinity only; no focusing data are tabulated. Historical nD is approximated by
 * the d line; the glass identifiers do not establish measured dispersion. Example I
 * prints Parra-Mantois 6695 for L4; Example II prints 6675 for the same nD and V.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-series-viii-telephoto-gb198958",
  maker: "Cooke",
  name: "COOKE SERIES VIII TELEPHOTO 12 in f/6 (GB 198,958 Design)",
  subtitle: "GB 198,958 A, Example I — Cooke Series VIII telephoto design",
  visible: true,
  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    specs: ["4 ELEMENTS / 2 GROUPS", "DESIGN f = 12 in", "F/6", "ALL SPHERICAL"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: {
      design: 304.8,
    },
    fNumber: {
      design: 6,
    },
  },
  source: {
    patentNumber: "GB 198,958 A",
    example: {
      label: "Example I",
      id: "1",
    },
    patentYear: 1923,
    authors: ["Horace William Lee"],
    assignees: ["Kapella Limited"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5744,
      vd: 57.7,
      indexReference: "d",
      glass: "S-BAL11 (spectral proxy; patent nD 1.5744 / V 57.7, Chance 9002; supplier and melt unspecified)",
      role: "Positive element of the front collecting doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6515,
      vd: 33.4,
      indexReference: "d",
      glass: "Unmatched (nD 1.6515 / V 33.4, Parra-Mantois 6661)",
      role: "Negative element of the front collecting doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.5732,
      vd: 51.9,
      indexReference: "d",
      glass: "Unmatched (nD 1.5732 / V 51.9, Parra-Mantois 6062)",
      role: "Negative element of the rear diverging doublet",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.6117,
      vd: 37.4,
      indexReference: "d",
      glass: "Unmatched (nD 1.6117 / V 37.4, Parra-Mantois 6695)",
      role: "Positive element of the rear diverging doublet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 54.61,
      d: 10.668,
      sd: 26.035,
      medium: 1,
    },
    {
      label: "2",
      R: -157.988,
      d: 3.048,
      sd: 26.035,
      medium: 2,
    },
    {
      label: "3",
      R: 143.51,
      d: 34.671,
      sd: 26.035,
    },
    {
      label: "STO",
      R: "flat",
      d: 34.671,
    },
    {
      label: "4",
      R: -34.29,
      d: 2.032,
      sd: 19.05,
      medium: 3,
    },
    {
      label: "5",
      R: "flat",
      d: 5.08,
      sd: 19.05,
      medium: 4,
    },
    {
      label: "6",
      R: -54.102,
      d: 151.80322609880798,
      sd: 19.05,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent tabulates no focusing data.",
  },
  aperture: {
    nominalFNumber: 6,
    fStops: [6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 30,
    maxTraceFieldDeg: 15,
  },
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "4", toSurface: "6" },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
