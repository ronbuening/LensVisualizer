import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Representative Grade B probable patent-family reconstruction; exact factory prescription is unproved.
 * Source R/d/N/V and published stop are literal. Clear SDs are frozen figure-informed inferences.
 * Infinity only; source/retail near-focus data are not turned into an unproved motion law.
 * Normal scalar native diffraction estimates are numerical checks, not independent phase or factory validation.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-100mm-f2-usm",
  maker: "Canon",
  name: "CANON EF 100mm f/2 USM",
  subtitle: "JP H04-255813 A; Grade B probable family, representative numerical embodiment",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: {
      marketing: 100,
      design: 100,
    },
    fNumber: {
      marketing: 2,
      design: 2,
    },
    specs: [
      "PATENT RECONSTRUCTION; CLEAR APERTURES AND IRIS OPENING INFERRED",
      "8 ELEMENTS / 6 GROUPS",
      "GRADE B PROBABLE FAMILY; REPRESENTATIVE EMBODIMENT",
      "INFINITY CONFIGURATION ONLY",
    ],
  },
  source: {
    patentNumber: "JP H04-255813 A",
    example: {
      label: "Numerical Example 2",
      id: "2",
    },
    patentYear: 1992,
    authors: ["Hiroshi Endo"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.55962,
      vd: 61.2,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: 239.23700973773845,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6516,
      vd: 58.5,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: 140.920360485708,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: 62.22116071908169,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7555,
      vd: 25.1,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: -43.55982540607531,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: 168.74988001868988,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.55962,
      vd: 61.2,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: -48.815643614125285,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: 39.09822398913881,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "Unmatched (literal source indices and Abbe number; vendor and full dispersion unproved)",
      focalLengthMm: -96.65588467306269,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 143.26,
      d: 5.0,
      medium: 1,
      sd: 27.5,
    },
    {
      label: "2",
      R: -2019.55,
      d: 0.2,
      sd: 27.5,
    },
    {
      label: "3",
      R: 67.27,
      d: 6.5,
      medium: 2,
      sd: 25.75,
    },
    {
      label: "4",
      R: 241.98,
      d: 0.5,
      sd: 25.75,
    },
    {
      label: "5",
      R: 35.47,
      d: 9.7,
      medium: 3,
      sd: 22.25,
    },
    {
      label: "6",
      R: 113.61,
      d: 0.95,
      sd: 22.25,
    },
    {
      label: "7",
      R: 132.1,
      d: 2.4,
      medium: 4,
      sd: 19.75,
    },
    {
      label: "8",
      R: 26.14,
      d: 9.0,
      sd: 19.75,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.81,
    },
    {
      label: "10",
      R: -240.38,
      d: 3.0,
      medium: 5,
      sd: 15.5,
    },
    {
      label: "11",
      R: -87.29,
      d: 1.7,
      medium: 6,
      sd: 15.5,
    },
    {
      label: "12",
      R: 40.04,
      d: 25.15,
      sd: 15.5,
    },
    {
      label: "13",
      R: 80.41,
      d: 7.5,
      medium: 7,
      sd: 17.25,
    },
    {
      label: "14",
      R: -47.69,
      d: 2.3,
      medium: 8,
      sd: 17.25,
    },
    {
      label: "15",
      R: -125.81,
      d: 41.455292453055776,
      sd: 17.25,
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "10",
      toSurface: "12",
    },
    {
      text: "D2",
      fromSurface: "13",
      toSurface: "15",
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The source marks D9 and D12 variable but gives only starting gaps 2.81 and 25.15 mm. Infinity is assumed; no finite endpoint or retail 0.9 m travel is authored.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 8,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24.4,
    maxTraceFieldDeg: 12.2,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    {
      text: "I fixed",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "II at infinity",
      fromSurface: "10",
      toSurface: "12",
    },
    {
      text: "III fixed",
      fromSurface: "13",
      toSurface: "15",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
