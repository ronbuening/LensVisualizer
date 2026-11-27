import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,176,914, Table 1 and Figure 1, Kazuo Fujibayashi for Canon. The sole
 * example gives f = 100, f/2.8 and a 76° field. All lengths are scaled by
 * 0.28 to the marketed 28 mm focal length. The seven air-spaced singlets
 * retain the printed indices, Abbe numbers and 35.644 mm back focus. The text
 * names the sodium D line, but every index/Abbe pair is a catalog helium
 * d-line value, so they are entered as d-line data.
 * The patent places the iris between L3 and L4. Its estimated axial position
 * divides that air space into 4.1468 and 1.414 mm. The iris radius follows
 * from f/2.8. Figure 1 supplies the clear rims and the flat land on the back
 * of L1. At surfaces 7–10 the nominal axial marginal ray sets the minimum
 * clear radii. Table 1 gives only the infinity setting.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-new-fd-28mm-f28",
  maker: "Canon",
  visible: true,
  name: "CANON NEW FD 28mm f/2.8",
  subtitle: "US 4,176,914, sole example — Canon / Fujibayashi",
  source: {
    patentNumber: "US 4,176,914",
    patentYear: 1979,
    example: { label: "Sole example", id: null },
    authors: ["Kazuo Fujibayashi"],
    assignees: ["Canon Inc."],
  },
  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: {
      marketing: 28,
      design: 28.01,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: {
      marketing: 0.3,
    },
    specs: ["7 ELEMENTS / 7 GROUPS", "ALL SPHERICAL", "RETROFOCUS"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: -50.61,
      glass: "S-BSM14 (OHARA)",
      role: "The front meniscus diverges the incoming beam and provides clearance behind the lens for the reflex mirror.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: -76.17,
      glass: "S-BSM14 (OHARA)",
      role: "Adds negative power behind the first meniscus. Both front menisci are convex toward the object.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: 72.05,
      glass: "S-TIM35 (OHARA)",
      role: "Begins to converge the beam before the iris. Its nearly flat rear face contributes little power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 21.11,
      glass: "S-LAH66 (OHARA)",
      role: "Supplies the strongest positive power immediately behind the iris.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -16.47,
      glass: "PBH6 (OHARA)",
      role: "Opposes the convergence from L4. Its highly dispersive glass contributes to the balance of axial color.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: 49.51,
      glass: "S-LAL8 (OHARA)",
      role: "Restores convergence after L5, mainly at its rear face.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 43.31,
      glass: "S-LAH66 (OHARA)",
      role: "Bends rays toward the film, with most of its power at the rear face.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.16228,
      d: 1.6212,
      sd: 12.22,
      medium: 1,
    },
    {
      label: "2",
      R: 12.48604,
      d: 3.9788,
      sd: 9.84,
      rimExtensionSd: 12.22,
    },
    {
      label: "3",
      R: 23.82548,
      d: 1.2768,
      sd: 9.61,
      medium: 2,
    },
    {
      label: "4",
      R: 15.37256,
      d: 7.7112,
      sd: 9.61,
    },
    {
      label: "5",
      R: 51.5284,
      d: 1.9852,
      sd: 7.23,
      medium: 3,
    },
    {
      label: "6",
      R: -2187.836,
      d: 4.1468,
      sd: 7.23,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.414,
    },
    {
      label: "7",
      R: 33.8212,
      d: 3.458,
      sd: 7.5,
      medium: 4,
    },
    {
      label: "8",
      R: -30.086,
      d: 3.1724,
      sd: 7.5,
    },
    {
      label: "9",
      R: -24.1066,
      d: 4.4212,
      sd: 6.51,
      medium: 5,
    },
    {
      label: "10",
      R: 31.8836,
      d: 1.4252,
      sd: 6.51,
    },
    {
      label: "11",
      R: -36.7332,
      d: 2.0916,
      sd: 7.07,
      medium: 6,
    },
    {
      label: "12",
      R: -18.42792,
      d: 0.196,
      sd: 7.07,
    },
    {
      label: "13",
      R: -134.2432,
      d: 2.2792,
      sd: 8.3,
      medium: 7,
    },
    {
      label: "14",
      R: -26.97828,
      d: 35.644,
      sd: 8.3,
    },
  ],
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 5,
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. Canon lists double-helicoid focusing, with no floating system, to 0.3 m and 0.13×. The patent gives no close-focus spacings.",
  },
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
