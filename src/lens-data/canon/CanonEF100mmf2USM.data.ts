import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Representative Grade B probable patent-family reconstruction; exact factory prescription is unproved.
 * Source R/d/N/V and published stop are literal. Clear SDs are frozen figure-informed inferences.
 * The patent prints neither back focus nor image plane: BF 39.60 mm and the image plane 115.66 mm behind surface 1 are
 * computed from the table (paraxial, f = 100.016 mm). D9 and D12 are printed at infinity only; the near gaps are solved.
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
      label: "Numerical Example 1",
      id: "1",
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
      glass: "S-BAL50 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 256.064018348726,
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
      glass: "S-LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 138.60699819861784,
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
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 59.11346162229674,
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
      glass: "Unmatched (patent nd=1.7555, νd=25.1; no catalog row at these coordinates)",
      focalLengthMm: -41.9715899568247,
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
      glass: "SF6 (Schott catalog equivalent; production supplier unspecified)",
      focalLengthMm: 185.21000932949863,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.55962,
      vd: 61.2,
      indexReference: "d",
      glass: "S-BAL50 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -51.66093370565275,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "SF6 (Schott catalog equivalent; production supplier unspecified)",
      focalLengthMm: -119.5268407928693,
      role: "Literal representative prescription; negative isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 43.064730248503025,
      role: "Literal representative prescription; positive isolated-in-air paraxial power.",
      indexReferenceNote:
        "The table prints N and nu without an explicit spectral line; applying the literal pair at d is a qualified modeling convention, not a measured factory material identification.",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 180.64,
      d: 4.8,
      medium: 1,
      sd: 27.5,
    },
    {
      label: "2",
      R: -686.6,
      d: 0.2,
      sd: 27.5,
    },
    {
      label: "3",
      R: 68.44,
      d: 6.4,
      medium: 2,
      sd: 25.75,
    },
    {
      label: "4",
      R: 272.13,
      d: 0.5,
      sd: 25.75,
    },
    {
      label: "5",
      R: 33.79,
      d: 9.7,
      medium: 3,
      sd: 22.25,
    },
    {
      label: "6",
      R: 108.27,
      d: 0.91,
      sd: 22.25,
    },
    {
      label: "7",
      R: 126.33,
      d: 2.4,
      medium: 4,
      sd: 19.75,
    },
    {
      label: "8",
      R: 25.14,
      d: 9.0,
      sd: 19.75,
      rimCutDepthMm: 9.0,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "10",
      R: -367.05,
      d: 3.0,
      medium: 5,
      sd: 15.5,
    },
    {
      label: "11",
      R: -106.43,
      d: 1.7,
      medium: 6,
      sd: 15.5,
    },
    {
      label: "12",
      R: 39.92,
      sd: 15.5,
    },
    {
      label: "13",
      R: 81.96,
      d: 2.3,
      medium: 7,
      sd: 17.25,
    },
    {
      label: "14",
      R: 43.71,
      d: 7.5,
      medium: 8,
      sd: 17.25,
    },
    {
      label: "15",
      R: -138.63,
      d: 39.60156561972394,
      sd: 17.25,
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "10",
      toSurface: "12",
    },
    {
      text: "C2",
      fromSurface: "13",
      toSurface: "15",
    },
  ],
  focus: {
    closeFocusM: 0.9,
    description:
      "Rear focus: group 2 moves toward the image while the stop and groups 1 and 3 stay put. The patent prints D9 and D12 only at infinity (2.66 and 24.99 mm). The near gaps here are solved, not printed: at Canon's 0.9 m minimum focus, D9 is 16.487 mm and D12 is 11.163 mm, a 13.83 mm stroke at 0.139× (Canon states 0.14×). The same solve at 1 m, measured from the image plane, gives f/2.27 and +2.8% distortion at 12°, against f/2.3 and about +2.8% in the patent's Fig. 4(B).",
  },
  gaps: {
    STO: { label: "D9", values: [[2.66, 16.487]] },
    "12": { label: "D12", values: [[24.99, 11.163]] },
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
      text: "G1",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "G2",
      fromSurface: "10",
      toSurface: "12",
    },
    {
      text: "G3",
      fromSurface: "13",
      toSurface: "15",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
