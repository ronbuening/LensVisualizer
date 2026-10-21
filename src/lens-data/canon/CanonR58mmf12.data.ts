import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JPS4024553B1 sole embodiment, Figure 1. Qualified probable original R58 pairing.
 * Literal source dimensions uniformly scaled x58 conditionally; patent46° differs from maker41°.
 * Possible later FL58 reuse remains; raw N/nu spectral reference unspecified.
 * R10=-1.528 is printed in both tables, not a fitted correction.
 * Iris midpoint, inferred clear apertures and computed Gaussian BFD are modeling inferences.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only optical model; no factory focus law is known.
 * All invalid and clipped rays retained; private review, no factory performance claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-r-58mm-f12",
  maker: "Canon",
  name: "CANON R 58mm f/1.2",
  subtitle: "JPS4024553B1 sole embodiment / Figure 1; qualified probable production correlation",
  visible: false,
  catalog: {
    lensMounts: ["canon-r"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "Patent field 46°; product field 41°", "Conditional uniform ×58 scaling"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      marketing: 58,
      design: 58,
    },
    fNumber: {
      marketing: 1.2,
      design: 1.2,
    },
  },
  source: {
    patentNumber: "JP S40-24553 B1",
    patentYear: 1965,
    authors: ["Jiro Mukai"],
    assignees: ["Canon Camera Co., Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7234,
      vd: 38,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.72340, ν=38; reference unspecified)",
      role: "Front positive meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6676,
      vd: 41.9,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.66760, ν=41.9; reference unspecified)",
      role: "Front cemented positive component.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.75520, ν=27.5; reference unspecified)",
      role: "Front cemented negative component.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.59270, ν=35.4; reference unspecified)",
      role: "Rear cemented negative component.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.89,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.71300, ν=53.89; reference unspecified)",
      role: "Rear cemented positive component.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.72,
      vd: 50.31,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.72000, ν=50.31; reference unspecified)",
      role: "Rear positive plano-convex singlet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      indexReferenceNote:
        "Source prints N and ν without spectral subscripts; values are retained as printed. Default d-line reference and Abbe dispersion are approximate computational conventions, not confirmed source lines or factory melts.",
      glass: "Unmatched (source N=1.74400, ν=44.9; reference unspecified)",
      role: "Final positive biconvex singlet.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 49.474,
      d: 7.366,
      sd: 25,
      medium: 1,
    },
    {
      label: "2",
      R: 316.854,
      d: 0.116,
      sd: 25,
    },
    {
      label: "3",
      R: 30.682000000000002,
      d: 11.889999999999999,
      sd: 23,
      medium: 2,
    },
    {
      label: "4",
      R: -152.888,
      d: 2.552,
      sd: 22,
      medium: 3,
    },
    {
      label: "5",
      R: 18.966,
      d: 7.337,
      sd: 14.65,
    },
    {
      label: "STO",
      R: "flat",
      d: 7.337,
    },
    {
      label: "6",
      R: -20.357999999999997,
      d: 1.74,
      sd: 14.65,
      medium: 4,
    },
    {
      label: "7",
      R: 61.19,
      d: 11.484,
      sd: 20.5,
      medium: 5,
    },
    {
      label: "8",
      R: -32.306000000000004,
      d: 0.116,
      sd: 20.5,
    },
    {
      label: "9",
      R: "flat",
      d: 2.0300000000000002,
      sd: 17.5,
      medium: 6,
    },
    {
      label: "10",
      R: -88.624,
      d: 0.116,
      sd: 17.5,
    },
    {
      label: "11",
      R: 129.978,
      d: 2.552,
      sd: 17.25,
      medium: 7,
    },
    {
      label: "12",
      R: -127.30999999999999,
      sd: 17.25,
      d: 34.940156070856204,
    },
  ],
  focus: {
    closeFocusM: 0.6,
    description:
      "NO_INTERNAL_RECONSTRUCTION: only the patent infinity prescription is validated. All optical separations stay fixed. The maker 0.6 m minimum distance is retained as catalog metadata required by this schema, not a computed or source-certified finite state. No factory focusing law is claimed.",
  },
  aperture: {
    nominalFNumber: 1.2,
    fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
