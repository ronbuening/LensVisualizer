import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 895,045 A (Paul Rudolph, assignor to the firm of Carl Zeiss, Jena; filed July 12, 1907, patented Aug. 4, 1908),
 * Example 1, the example shown in the patent drawing: an unsymmetrical double objective of two cemented pairs, 1:12.5.
 * Radii, thicknesses, air spaces and solar D-line indices are as printed for "a focal length 100", read as
 * millimetres.
 * The printed table computes to a focal length of 101.11, 1.11 % above the stated 100. Example 2 of the same patent
 * computes to 100.00, and no misprint could be established for Example 1 (a change of 0.05 in r1 alone moves the
 * focal length by about 1 %), so the printed one-decimal values are kept unchanged.
 * The patent prints nD and nG′ (hydrogen Hγ) indices but no Abbe numbers, so the model carries none and is
 * monochromatic.
 * The diaphragm position is printed: b1 = b2 = 1.5 on either side of it.
 * Inferred: the stop diameter (from 1:12.5), all clear semi-diameters (estimates, not source dimensions), the back
 * focus (computed paraxial value, 98.2832) and the 5° trace field. The patent states no field angle.
 * Infinity focus only; the patent gives no close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f125-us895045",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/12.5 (US 895,045 Design)",
  subtitle: "US 895,045 A, Example 1 — Rudolph unsymmetrical double objective",
  visible: true,
  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "ALL SPHERICAL", "DESIGN F/12.5", "UNSYMMETRICAL DOUBLE OBJECTIVE"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: {
      design: 101.11,
    },
    fNumber: {
      design: 12.5,
    },
  },
  source: {
    patentNumber: "US 895,045 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1908,
    authors: ["Paul Rudolph"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6489,
      indexReference: "D",
      glass: "Unmatched (nD 1.6489, nG′ 1.6744; no Abbe number printed)",
      focalLengthMm: -14.81,
      role: "Negative front meniscus of the cemented front pair, in the most dispersive glass",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6031,
      indexReference: "D",
      glass: "Unmatched (nD 1.6031, nG′ 1.6239; no Abbe number printed)",
      focalLengthMm: 13.46,
      role: "Positive high-index meniscus of the cemented front pair",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5154,
      indexReference: "D",
      glass: "Unmatched (nD 1.5154, nG′ 1.5275; no Abbe number printed)",
      focalLengthMm: -14.54,
      role: "Negative low-index lens of the cemented rear pair",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6112,
      indexReference: "D",
      glass: "Unmatched (nD 1.6112, nG′ 1.6260; no Abbe number printed)",
      focalLengthMm: 13.51,
      role: "Positive high-index lens of the cemented rear pair",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 17.5,
      d: 2.9,
      sd: 4.2,
      medium: 1,
    },
    {
      label: "2",
      R: 5.8,
      d: 1.3,
      sd: 4,
      medium: 2,
    },
    {
      label: "3",
      R: 18.6,
      d: 1.5,
      sd: 4,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.5,
    },
    {
      label: "4",
      R: -12.8,
      d: 1.1,
      sd: 4,
      medium: 3,
    },
    {
      label: "5",
      R: 18.6,
      d: 1.8,
      sd: 4,
      medium: 4,
    },
    {
      label: "6",
      R: -14.3,
      d: 98.2832,
      sd: 4.2,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 12.5,
    maxFNumber: 22,
    fStops: [12.5, 16, 22],
  },
  projection: {
    kind: "rectilinear",
    maxTraceFieldDeg: 5,
  },
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "4",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
