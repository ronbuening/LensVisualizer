import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,545,845, sole example, Table I and Fig. 1. Yasuo Takahashi gives radii,
 * axial spacings and d-line glass constants for nominal f = 100. Multiplying
 * all lengths by 0.24 gives the 24 mm scale. With the printed L8 index of
 * 1.58487, the focal length is 23.66 mm. An index of 1.56883 would reproduce
 * the nominal focal length and more closely match the Seidel sums in Table II
 * and the aberration curves of Fig. 2.
 *
 * Each clear semi-diameter is measured from the curved or plane face in Fig. 1.
 * L4 and the L6/L7 doublet are drawn with square edges, so their faces share
 * one height. Fig. 1 bevels the rear edges of L1 and L3; flat lands carry those
 * edges out to the front-face height. The diaphragm sits at the published
 * position 0.96 mm behind face 10. Its radius follows from f/3.5. The infinity
 * image gap is the paraxial back focus. The near gap assumes the whole lens
 * moves toward the object to reach Asahi's 0.25 m minimum. The patent gives
 * only the infinity spacings.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-super-takumar-24mm-f35",
  visible: true,
  maker: "Pentax",
  name: "PENTAX SUPER-TAKUMAR 24mm f/3.5",
  subtitle: "US 3,545,845, sole example — Asahi Kogaku / Takahashi",
  source: {
    patentNumber: "US 3,545,845",
    patentYear: 1970,
    example: { label: "Sole example", id: null },
    authors: ["Yasuo Takahashi"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
    sdSource: "figure-measured",
    errata: [
      {
        status: "unresolved",
        note: "Both copies of Table I give L8 an index of 1.58487. The resulting focal length is 98.565 against the stated 100, a shortfall of 1.44%. An index of 1.56883 gives 100.004 and brings the spherical aberration coefficients for faces 16 and 18 closer to Table II. The prescription retains the printed index.",
      },
    ],
  },
  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 24, design: 23.66 },
    fNumber: { marketing: 3.5, design: 3.5 },
    closeFocusM: { marketing: 0.25 },
    specs: ["9 ELEMENTS / 8 GROUPS", "ALL SPHERICAL", "84° FIELD"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -104.25,
      glass: "S-BSL7 (Ohara equivalent)",
      role: "The large front meniscus admits oblique rays and starts the diverging front section.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8363,
      vd: 30.4,
      indexReference: "d",
      focalLengthMm: 71.67,
      glass: "Unmatched (nd 1.83630 / νd 30.4)",
      role: "A high-index lens with a nearly flat rear face adds positive power between the two front negative menisci.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: -25.87,
      glass: "S-BSM16 (Ohara equivalent)",
      role: "The steep rear face supplies most of the diverging power at the front of the lens.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -436.35,
      glass: "S-BSL7 (Ohara equivalent)",
      role: "This thick, weak meniscus spaces the front lenses from the stop. Its concave front face helps control coma.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5569,
      vd: 48.5,
      indexReference: "d",
      focalLengthMm: 45.56,
      glass: "BAF1 (Sumita equivalent)",
      role: "This biconvex element bends the diverging beam toward the axis immediately ahead of the diaphragm.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.56883,
      vd: 56,
      indexReference: "d",
      focalLengthMm: 18.99,
      glass: "N-BAK4 (Schott equivalent)",
      cemented: "D1",
      role: "The converging member of the doublet behind the stop shares its rear surface with the more dispersive L7.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30,
      indexReference: "d",
      focalLengthMm: -13.89,
      glass: "SF15 (Sumita equivalent)",
      cemented: "D1",
      role: "The negative member gives the doublet its net diverging power. Its index contrast with L6 helps control spherical aberration.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.58487,
      vd: 53,
      indexReference: "d",
      focalLengthMm: 68.44,
      glass: "Unmatched (nd 1.58487 / νd 53.0)",
      role: "The concave-front meniscus restores convergence behind the doublet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Convex Positive",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      focalLengthMm: 45.01,
      glass: "S-TIL26 (Ohara equivalent)",
      role: "The plane front face lies close to L8. The convex rear face provides the final convergence toward the film.",
    },
  ],
  surfaces: [
    { label: "1", R: 53.04, d: 2.4, sd: 20.11, medium: 1 },
    { label: "2", R: 26.304, d: 5.76, sd: 16.66, rimExtensionSd: 20.11 },
    { label: "3", R: 54.72, d: 5.64, sd: 15.97, medium: 2 },
    { label: "4", R: 598.944, d: 0.12, sd: 15.97 },
    { label: "5", R: 32.04, d: 1.8, sd: 11.53, medium: 3 },
    { label: "6", R: 10.464, d: 8.4, sd: 9.12, rimExtensionSd: 11.53 },
    { label: "7", R: -26.4, d: 8.4, sd: 7.89, medium: 4 },
    { label: "8", R: -33.144, d: 0.12, sd: 7.89 },
    { label: "9", R: 42.96, d: 4.8, sd: 6.01, medium: 5 },
    { label: "10", R: -59.496, d: 0.96, sd: 6.01 },
    { label: "STO", R: "flat", d: 0.24 },
    { label: "11", R: 16.44, d: 5.28, sd: 6.16, medium: 6 },
    { label: "12", R: -27.84, d: 1.08, sd: 6.16, medium: 7 },
    { label: "13", R: 15.144, d: 2.64, sd: 6.16 },
    { label: "14", R: -29.88, d: 2.4, sd: 6.21, medium: 8 },
    { label: "15", R: -17.616, d: 0.12, sd: 6.21 },
    { label: "16", R: "flat", d: 2.28, sd: 6.9, medium: 9 },
    { label: "17", R: -25.536, sd: 6.9 },
  ],
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16], maxFNumber: 16, blades: 5 },
  focus: {
    closeFocusM: 0.25,
    description:
      "Unit focus is inferred. All nine elements move 3.30 mm toward the subject to focus at 0.25 m. The patent gives the internal spacings at infinity.",
  },
  gaps: { "17": { label: "BF", values: [[35.4968, 38.7951]] } },
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],
  layout: { yScFill: 0.65 },
} satisfies LensDataV2Input;

export default LENS_DATA;
