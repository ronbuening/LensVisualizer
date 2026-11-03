import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Literal whole patent embodiment under a disclosed uniform similarity hypothesis.
 * Probable product family, not an identified factory prescription.
 * Every clear semi-diameter and exact stop split is inferred before tracing.
 * No source radii, thicknesses, indices, source precision or frozen image plane retuned.
 * Unqualified source n/Abbe interpreted at d as a hypothesis; no named-glass substitution.
 * Canonical infinity-only state; no finite factory law or independent OPL/phase claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-auto-t-180mm-f28",
  maker: "Olympus",
  name: "OLYMPUS OM-SYSTEM ZUIKO MC AUTO-T 180mm f/2.8",
  subtitle: "US 4,114,992 Embodiment 1 \u2014 probable family; inferred aperture",
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      marketing: 180,
      design: 180,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: ["5 ELEMENTS / 5 GROUPS", "PROBABLE FAMILY; INFERRED APERTURE", "INFINITY CONFIGURATION ONLY"],
  },
  source: {
    patentNumber: "US 4,114,992",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1978,
    authors: ["Tadashi Kimura"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.66672,
      vd: 48.32,
      glass: "Unmatched (literal unqualified n/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Source table and definitions do not assign a spectral line. Literal n at d is a declared modeling hypothesis, not glass identification.",
      focalLengthMm: 129.1868233570837,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.14,
      glass: "Unmatched (literal unqualified n/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Source table and definitions do not assign a spectral line. Literal n at d is a declared modeling hypothesis, not glass identification.",
      focalLengthMm: 269.67957665656496,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      glass: "Unmatched (literal unqualified n/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Source table and definitions do not assign a spectral line. Literal n at d is a declared modeling hypothesis, not glass identification.",
      focalLengthMm: 361.4488021200887,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.71,
      glass: "Unmatched (literal unqualified n/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Source table and definitions do not assign a spectral line. Literal n at d is a declared modeling hypothesis, not glass identification.",
      focalLengthMm: -56.971199257004656,
      role: "Literal source negative element; isolated-in-air power is descriptive, not cemented-group power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.55,
      glass: "Unmatched (literal unqualified n/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Source table and definitions do not assign a spectral line. Literal n at d is a declared modeling hypothesis, not glass identification.",
      focalLengthMm: 220.7307272858642,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.242,
      d: 8.1702,
      sd: 35.4,
      medium: 1,
    },
    {
      label: "2",
      R: 239.922,
      d: 0.12420000000000002,
      sd: 35.4,
    },
    {
      label: "3",
      R: 61.9488,
      d: 5.7438,
      sd: 33.1,
      medium: 2,
    },
    {
      label: "4",
      R: 94.64040000000001,
      d: 0.1008,
      sd: 33.1,
    },
    {
      label: "5",
      R: 55.6632,
      d: 9.2736,
      sd: 30.7,
      medium: 3,
    },
    {
      label: "6",
      R: 70.065,
      d: 4.5,
      sd: 30.7,
    },
    {
      label: "7",
      R: 151.4574,
      d: 6.8886,
      sd: 25.8,
      medium: 4,
    },
    {
      label: "8",
      R: 33.8274,
      d: 27.424638,
      sd: 25.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 24.319961999999997,
    },
    {
      label: "9",
      R: 93.7026,
      d: 5.4702,
      sd: 16.6,
      medium: 5,
    },
    {
      label: "10",
      R: 206.2872,
      d: 76.88340000000002,
      sd: 16.6,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Only the hypothetical infinity configuration is modeled. Neither a finite conjugate nor a focus travel law is supplied; retail MFD is not a modeled state.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 13.8,
    maxTraceFieldDeg: 6.9,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
