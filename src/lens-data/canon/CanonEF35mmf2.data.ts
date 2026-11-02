import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Representative Grade B probable patent-family reconstruction; exact factory prescription is unproved.
 * Source R/d/N/V and published stop are literal. Clear SDs are frozen figure-informed inferences.
 * Infinity only; source/retail near-focus data are not turned into an unproved motion law.
 * Normal scalar native diffraction estimates are numerical checks, not independent phase or factory validation.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-35mm-f2",
  maker: "Canon",
  name: "CANON EF 35mm f/2",
  subtitle: "JP H04-015611 A; Grade B probable family, representative numerical embodiment",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      marketing: 35,
      design: 35.51,
    },
    fNumber: {
      marketing: 2,
      design: 2,
    },
    specs: [
      "PATENT RECONSTRUCTION; CLEAR APERTURES AND IRIS OPENING INFERRED",
      "MODELED AXIAL CLIPPING: 40 OF 3,228 SAMPLES AT S8; NOT FACTORY PERFORMANCE",
      "Inventor romanization tentative; primary name 田中 常文",
      "7 ELEMENTS / 5 GROUPS",
      "GRADE B PROBABLE FAMILY; REPRESENTATIVE EMBODIMENT",
      "INFINITY CONFIGURATION ONLY",
    ],
  },
  source: {
    patentNumber: "JP H04-015611 A",
    example: {
      label: "Numerical Example 1",
      id: "1",
    },
    patentYear: 1992,
    authors: ["Tsunefumi Tanaka"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.2,
      indexReference: "d",
      glass: "BACD5 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -63.6062380124121,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      glass: "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 17.541461091812614,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "HL1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      glass: "E-FD2 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -35.63416681048583,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "HL1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      indexReference: "d",
      glass: "S-TIM25 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -25.29924944292772,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      indexReference: "d",
      glass: "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -50.3414027811061,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "HL2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 28.903561637089588,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "HL2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 44.868308846086855,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 28.25,
      d: 1.5,
      medium: 1,
      sd: 14.5,
    },
    {
      label: "2",
      R: 15.79,
      d: 15.28,
      sd: 14,
    },
    {
      label: "3",
      R: 37.84,
      d: 10.54,
      medium: 2,
      sd: 11.5,
    },
    {
      label: "4",
      R: -19.77,
      d: 1.53,
      medium: 3,
      sd: 11.5,
    },
    {
      label: "5",
      R: -142.05,
      d: 3.09,
      sd: 11.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.54,
    },
    {
      label: "7",
      R: -27.54,
      d: 1.94,
      medium: 4,
      sd: 9.5,
    },
    {
      label: "8",
      R: 45.81,
      d: 2.0,
      sd: 9.0,
    },
    {
      label: "9",
      R: -46.16,
      d: 1.1,
      medium: 5,
      sd: 9.75,
    },
    {
      label: "10",
      R: 276.83,
      d: 3.58,
      medium: 6,
      sd: 9.75,
    },
    {
      label: "11",
      R: -24.15,
      d: 0.1,
      sd: 9.75,
    },
    {
      label: "12",
      R: 134.67,
      d: 3.2,
      medium: 7,
      sd: 11.25,
    },
    {
      label: "13",
      R: -46.19,
      d: 37.827796312164644,
      sd: 11.25,
    },
  ],
  doublets: [
    {
      text: "HL1",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "HL2",
      fromSurface: "9",
      toSurface: "11",
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "No finite-focus gaps or image distance are supplied. Only the hypothetical infinity configuration is authored; retail 0.25 m is not a source conjugate.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 5,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 62.7,
    maxTraceFieldDeg: 31.35,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "II",
      fromSurface: "7",
      toSurface: "13",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
