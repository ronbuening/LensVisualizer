import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP S40-24553 B (Jiro Mukai, Canon Camera Co.), sole numerical example, Figure 1; probable match to the
 * Canon R 58mm f/1.2 (1962). The patent is normalized to f = 1; every radius and spacing is scaled by 58
 * (computed EFL 57.919 mm). The patent's 46° full field is its design field; 41° is the 135-format diagonal at 58 mm.
 * The later FL 58mm f/1.2 (1964, also 7/5) may share the design.
 * R10 = -1.528 is printed in both prescription tables and agrees with the patent's Seidel P column.
 * N and ν are printed without a line subscript; Fig. 2 plots d and g lines and all seven pairs match d-line
 * catalog glasses, so they are stored as nd / νd.
 * The patent prints no stop, clear apertures or back focus: STO is placed at the midpoint of the central air gap
 * (Fig. 1), its radius is derived from f/1.2, and the last gap is the computed paraxial back focus. Semi-diameters
 * follow Figure 1's height ratios (Canon's published section agrees), set against the f/1.2 axial ray: Fig. 1 is
 * drawn about 10 % short vertically, so its rims are scaled from the front element. The front doublet is square-cut
 * at 22 mm as drawn; the stop-side faces stay at 14.65 mm, where their sags fill 90 % of the central gap.
 * Infinity prescription only; no focus travel is modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-r-58mm-f12",
  maker: "Canon",
  name: "CANON R 58mm f/1.2",
  subtitle: "JP S40-24553 B, sole example — probable production correlation",
  visible: true,
  catalog: {
    lensMounts: ["canon-r"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "DESIGN f = 1 (SCALED ×58)", "DESIGN F/1.2", "ALL SPHERICAL", "PATENT 2ω = 46°"],
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
    patentNumber: "JP S40-24553 B",
    example: { label: "Sole example", id: null },
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
      focalLengthMm: 80.12,
      glass: "BAFD8 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Front positive meniscus with a nearly flat rear face; collects the f/1.2 beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6676,
      vd: 41.9,
      focalLengthMm: 39.30,
      glass: "J-BASF6 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Thick positive front member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -22.20,
      glass: "S-TIH4 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative rear member of the front doublet; its strong rear face borders the stop space.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      focalLengthMm: -25.57,
      glass: "FF5 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative front member of the rear cemented doublet; its concave front faces the stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.89,
      focalLengthMm: 31.25,
      glass: "S-LAL8 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thick lanthanum-crown positive rear member of the rear doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.72,
      vd: 50.31,
      focalLengthMm: 123.09,
      glass: "K-LaK10 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "First of the two rear positive singlets; flat front face.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: 86.81,
      glass: "LAF2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Final positive singlet; shares the rear group's convergence with L6.",
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
      sd: 22,
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
      sd: 19,
      medium: 5,
    },
    {
      label: "8",
      R: -32.306000000000004,
      d: 0.116,
      sd: 19,
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
      "Patent infinity state only; all spacings stay fixed. The production lens focuses to 0.6 m, but the patent gives no focus travel, so no close-focus state is modeled.",
  },
  aperture: {
    nominalFNumber: 1.2,
    fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    blades: 8,
  },
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
