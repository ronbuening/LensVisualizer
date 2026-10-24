import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP S39-18282 Y1, sole embodiment, uniformly scaled x25 from f=1.
 * R3=.7743 and R4=.9043: the source's 3/8 glyphs are distinguished by
 * the R4 prose and printed Seidel A/P coefficients; this is a reading correction.
 * Repeated tables and prose support R1=3.147, N2=1.5163 and N6=1.7283.
 * Uniform x25 nominal scale, not an exact EFL renormalization.
 * Probable association with the May 1968 Pen F G.Zuiko Auto-W 25/2.8.
 * Source N/V spectral anchor unknown; nominal d convention is qualified.
 * Clear apertures are estimated from patent Figure 1 (scale from R1-R12 vertices)
 * and floor-checked by real-ray trace, not factory dimensions. R4-R7 sit at the
 * f/2.8 axial ray, above the drawn rims; R1/R2 clear the 15 mm corner chief ray.
 * Group brackets C1-C5 follow the patent's first-fifth member numbering.
 * S8-S9 source airspace is retained; midpoint iris location is an explicit hypothesis.
 * Unprinted infinity BFD=-A/C=25.84042892228762 mm; EFL=-1/C=24.999684 mm.
 * Unit focus changes only BF. For the air-to-air paraxial matrix [A B; C D],
 * solve -(B+D*b)/(A+C*b)+54.675+b=250 mm (object to film plane):
 * b=29.359093471974667 mm, travel=3.5186645496870455 mm.
 * The 0.25 m endpoint approximates the brochure's 10 in (0.254 m);
 * finite-focus spacing is derived, not printed in the patent.
 * f/5.6 through f/16 are modeled settings, not a sourced stop-range claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-pen-f-g-zuiko-auto-w-25mm-f28",
  maker: "Olympus",
  name: "OLYMPUS G.ZUIKO AUTO-W 25mm f/2.8",
  subtitle: "JP S39-18282 Y1, Sole Example — qualified production correlation",
  visible: true,
  catalog: {
    lensMounts: ["olympus-pen-f"],
    imageFormat: "half-frame-135",
    elementCount: 7,
    groupCount: 5,
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "DESIGN f = 25.00 mm",
      "DESIGN F/2.80",
      "ALL SPHERICAL",
      "RETROFOCUS",
    ],
    focalLengthMm: {
      marketing: 25,
      design: 25,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "JP S39-18282 Y1",
    example: { label: "Sole example", id: null },
    patentYear: 1964,
    authors: ["Saburo Yanagawa", "Jihei Nakagawa"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7015,
      vd: 41.1,
      focalLengthMm: 83.3712,
      glass: "BASF7 (SUMITA coordinate equivalent; supplier unconfirmed)",
      role: "Positive front doublet member",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5163,
      vd: 64,
      focalLengthMm: -34.4313,
      glass: "K-BK7 (SUMITA coordinate equivalent; supplier unconfirmed)",
      role: "Negative front doublet member",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.717,
      vd: 47.9,
      focalLengthMm: 31.5307,
      glass: "LAF3 (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Positive plano-convex singlet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      focalLengthMm: 19.7561,
      glass: "K-SK18 (SUMITA coordinate equivalent; supplier unconfirmed)",
      role: "Positive rear doublet member",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6889,
      vd: 31.1,
      focalLengthMm: -13.2351,
      glass: "E-FD8 (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Negative rear doublet member",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7283,
      vd: 28.3,
      focalLengthMm: -58.1554,
      glass: "E-FD10 (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Negative meniscus after the iris",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6228,
      vd: 56.9,
      focalLengthMm: 27.4557,
      glass: "N-SK10 (SCHOTT coordinate equivalent; supplier unconfirmed)",
      role: "Positive rear meniscus",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 78.675,
      d: 3.7249999999999996,
      sd: 18.1,
      medium: 1,
    },
    {
      label: "2",
      R: -223.45000000000002,
      d: 1.5,
      sd: 18.1,
      medium: 2,
    },
    {
      label: "3",
      R: 19.3575,
      d: 32.074999999999996,
      sd: 14,
    },
    {
      label: "4",
      R: 22.6075,
      d: 2.5,
      sd: 6.79,
      medium: 3,
    },
    {
      label: "5",
      R: "flat",
      d: 0.25,
      sd: 6.79,
    },
    {
      label: "6",
      R: 10.7625,
      d: 3.65,
      sd: 6.32,
      medium: 4,
    },
    {
      label: "7",
      R: 63.625,
      d: 0.975,
      sd: 6.32,
      medium: 5,
    },
    {
      label: "8",
      R: 7.925,
      d: 2.975,
      sd: 5.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.975,
    },
    {
      label: "9",
      R: -8.5075,
      d: 0.975,
      sd: 6,
      medium: 6,
    },
    {
      label: "10",
      R: -11.16,
      d: 0.1,
      sd: 6,
    },
    {
      label: "11",
      R: -66.875,
      d: 2.9749999999999996,
      sd: 6,
      medium: 7,
    },
    {
      label: "12",
      R: -13.850000000000001,
      sd: 6,
    },
  ],
  focus: {
    closeFocusM: 0.25,
    description:
      "Unit focus moves the whole lens toward the object, with all internal spacings fixed. The close-focus spacing is calculated for an object 0.25 m from the image plane.",
  },
  gaps: { "12": { label: "BF", values: [[25.84042892228762, 29.359093471974667]] } },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  groups: [
    { text: "C1 (−)", fromSurface: "1", toSurface: "3" },
    { text: "C2 (+)", fromSurface: "4", toSurface: "5" },
    { text: "C3 (−)", fromSurface: "6", toSurface: "8" },
    { text: "C4 (−)", fromSurface: "9", toSurface: "10" },
    { text: "C5 (+)", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
