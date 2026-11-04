import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2014-026184 A (Koji Kato, Ricoh Imaging), Numerical Example 4, associated with the smc PENTAX-DA 50mm F1.8.
 * The same prescription is numerical Example 2 of the granted JP 5966728 B2; the grant's Example 4 is a different
 * design. The association rests on construction, focal length, aperture and field; this is a patent design, not a
 * confirmed factory prescription.
 *
 * Scale: none. The patent's millimetre values are used as printed; f = 51.50 mm is not rescaled to the retail 50 mm.
 * Printed: R, d, d-line n, Abbe number, the stop row (surface 7) with its gaps, F/1.8, f = 51.50, W = 15.5°,
 * Y = 14.24, fB = 38.52 and L = 72.37. The patent names no glass supplier and prints no partial dispersion; the glass
 * labels are catalog equivalents matched on nd and νd.
 * Image plane: the last gap is the printed air-equivalent back focus, 38.52 mm, with no filter or cover plate. The
 * paraxial back focus computes to 38.518 mm and is not applied. The image lies 72.372 mm behind S1, against the
 * rounded printed L of 72.37 mm.
 * Stop: the patent tabulates the stop position but not its diameter; the stop radius follows F/N.
 * Semi-diameters are inferred, none is printed. S1 sits about 10 % above the entrance-pupil radius; the other rims
 * follow Fig. 10 and the maker's section, limited by edge clearance across the air gaps. S4/S5 stand at 11.75 mm,
 * with checks.gapSagFrac 0.94, so the f/1.8 axial beam clears the L2/L3 rims; Fig. 10 draws both faces at about
 * this height.
 * Focus: the patent prints the infinity state only and names no focusing group, so no gap varies and
 * focus.closeFocusM stays at infinity; the retail 0.45 m minimum focus is catalog data.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-smc-da-50mm-f18",
  maker: "Pentax",
  name: "PENTAX DA 50mm f/1.8",
  subtitle: "JP 2014-026184 A, Example 4 \u2014 probable production correlation",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 51.5 mm", "DESIGN F/1.8", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 50,
      design: 51.5,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
    closeFocusM: {
      marketing: 0.45,
    },
  },
  source: {
    patentNumber: "JP 2014-026184 A",
    example: {
      label: "Numerical Example 4",
      id: "4",
    },
    patentYear: 2014,
    authors: ["Koji Kato"],
    assignees: ["Ricoh Imaging Company, Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      glass: "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-index positive front meniscus, convex to the object; the main collector of the front group.",
      focalLengthMm: 47.55320610892602,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weaker second positive meniscus; its power is set to balance coma flare against astigmatism.",
      focalLengthMm: 92.1908193999333,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      indexReference: "d",
      glass: "S-TIH13 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative meniscus ahead of the stop; with L2 it bounds the diverging air lens.",
      focalLengthMm: -26.69495093740918,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.6,
      indexReference: "d",
      glass: "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative meniscus behind the stop, concave to the object; front member of the cemented doublet.",
      focalLengthMm: -30.33673016401732,
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      glass: "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-index positive meniscus, convex to the image; rear member of the weakly negative cemented doublet.",
      focalLengthMm: 37.35933926202443,
      cemented: "CD1",
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
      role: "High-index biconvex rear element; supplies most of the rear group's positive power.",
      focalLengthMm: 47.188383256772205,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 36.153,
      d: 4.688,
      sd: 15.75,
      medium: 1,
    },
    {
      label: "2",
      R: 599.014,
      d: 0.15,
      sd: 15.75,
    },
    {
      label: "3",
      R: 26.64,
      d: 4.226,
      sd: 13.75,
      medium: 2,
    },
    {
      label: "4",
      R: 39.19,
      d: 1.682,
      sd: 11.75,
    },
    {
      label: "5",
      R: 290.94,
      d: 2.3,
      sd: 11.75,
      medium: 3,
    },
    {
      label: "6",
      R: 18.454,
      d: 4.145,
      sd: 11.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.087,
    },
    {
      label: "8",
      R: -17.128,
      d: 1.5,
      sd: 11.5,
      medium: 4,
    },
    {
      label: "9",
      R: -68.666,
      d: 5.217,
      sd: 13.0,
      medium: 5,
    },
    {
      label: "10",
      R: -21.644,
      d: 0.1,
      sd: 13.0,
    },
    {
      label: "11",
      R: 113.83,
      d: 3.757,
      sd: 13.0,
      medium: 6,
    },
    {
      label: "12",
      R: -52.855,
      d: 38.52,
      sd: 13.0,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity only. The patent tabulates the infinity state alone and names no focusing group, so close focus is not modeled and every air gap stays fixed. The last gap is the printed air-equivalent back focus of 38.52 mm, with no filter or cover glass. The production lens focuses to 0.45 m (0.15×); how its optics move is not published.",
  },
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 31,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "Rear",
      fromSurface: "8",
      toSurface: "12",
    },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.78,
  },
  checks: { gapSagFrac: 0.94 },
} satisfies LensDataV2Input;
export default LENS_DATA;
