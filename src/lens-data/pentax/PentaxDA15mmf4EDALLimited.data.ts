import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 7,843,651 B2, Embodiment 1 (Table 1, Fig. 1), transcribed as printed in millimetres; no scaling.
 * 8 glass elements in 6 groups plus the 0.18 mm resin layer of the hybrid front element, modeled as a
 * separate cemented element so its printed nd/νd survive. The design values f = 15.45 mm and F/4.1 are
 * kept; nothing is retuned to the marketed 15 mm f/4.
 * S11 = −42.598 and S15 = −17.739 as printed (an earlier transcription had −12.598 and −7.739).
 * S3 asphere: K = −1 in the patent's (1+K) conic form; A4, A6, A8 as printed.
 * Stop 3.13 mm ahead of S11 (patent text), splitting the printed d10 = 5.19 mm into 2.06 + 3.13.
 * The patent lists no clear apertures: semi-diameters are estimated from Fig. 1 (300 dpi native scan,
 * 23.94 px/mm from the S1–S15 vertex span, checked on every vertex and the S1 arc) and rounded to 0.1 mm;
 * every rim agrees with the figure within about 3 % except two. S7's concave cap ends at 4.9 mm in the figure,
 * with a flat land out to the element edge (sd 4.9, rimExtensionSd 5.7). The resin's aspherical S3 ends at about
 * 10.4 mm in the figure but keeps 11.0 mm, because 10.4 would narrow the traced field from 40.5° to 39.2°.
 * L1's flat rear flange behind the resin layer is not drawn: a land cannot sit on the cemented glass/resin junction.
 * The table leaves d15 blank; the last gap is the paraxial air back focus, 37.490 mm (printed fB 37.49).
 * The patent's fB definition mentions a cover glass, but none is tabulated or drawn, so no plate is modeled.
 * Infinity focus only. Embodiment 1 is one of eight close variants; the production prescription is not
 * published. No rim cuts or validator overrides.
 */

const LENS_DATA = {
  layout: {
    yScFill: 0.35,
  },
  schema: 2,
  key: "pentax-smc-da-15mm-f4-ed-al-limited",
  maker: "Pentax",
  name: "PENTAX DA 15mm f/4 ED AL Limited",
  subtitle: "US 7,843,651 B2, Embodiment 1 \u2014 probable production correlation",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    elementCount: 8,
    groupCount: 6,
    specs: [
      "8 ELEMENTS / 6 GROUPS",
      "DESIGN f = 15.45 mm",
      "DESIGN F/4.1",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
    ],
    focalLengthMm: {
      marketing: 15,
      design: 15.45,
    },
    closeFocusM: {
      marketing: 0.18,
    },
    fNumber: {
      marketing: 4,
      design: 4.1,
    },
  },
  source: {
    patentNumber: "US 7,843,651 B2",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 2010,
    authors: ["Yasuo Kanazashi"],
    assignees: ["Hoya Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -29.824129104578606,
      glass: "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      role: "Glass substrate of the hybrid aspherical front meniscus; strong negative power for the retrofocus front group.",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L1r",
      label: "Element 1 resin layer",
      type: "Aspheric Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -96.23992080069029,
      glass: "Unmatched (synthetic resin hybrid-asphere layer, nd=1.52972, vd=42.7)",
      role: "Thin resin layer on the rear of Element 1 carrying the lens's only aspherical surface.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: 59.87363281672282,
      glass: "E-F2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus closing the negative first group; corrects off-axis aberrations from the front meniscus.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -14.099730041638423,
      glass: "TAFD5F (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong negative meniscus opening the negative second group.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: 8.467394727329124,
      glass: "E-FD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive front member of the second group's cemented doublet.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -13.597654679024531,
      glass: "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative rear member of the second group's cemented doublet, just ahead of the stop.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -15.038075849185473,
      glass: "FD60 (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-dispersion negative front member of the third group's cemented doublet, behind the stop.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 14.849169674762248,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Ricoh's construction diagram marks this position, the positive member of the rear cemented doublet, as ED glass; nd 1.49700 / \u03bdd 81.6 fits an FCD1-class ED crown.",
      role: "ED positive rear member of the third group's cemented doublet; chromatic partner of Element 6.",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 33.4560857958077,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Rear positive element, convex to the image, closing the positive third group.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.044,
      sd: 13.5,
      d: 1.8,
      medium: 1,
    },
    {
      label: "2",
      R: 13.372,
      sd: 11,
      d: 0.18,
      medium: 2,
    },
    {
      label: "3A",
      R: 10.544,
      sd: 11,
      d: 7.16,
      asphere: {
        K: -1,
        A4: 2.64942e-5,
        A6: 1.0204e-7,
        A8: -6.9952e-10,
      },
    },
    {
      label: "4",
      R: 27.64,
      sd: 9.3,
      d: 3.18,
      medium: 3,
    },
    {
      label: "5",
      R: 103.429,
      sd: 9.3,
      d: 6.11,
    },
    {
      label: "6",
      R: 35.873,
      sd: 5.7,
      d: 1.5,
      medium: 4,
    },
    {
      label: "7",
      R: 8.694,
      sd: 4.9,
      rimExtensionSd: 5.7,
      d: 2.78,
    },
    {
      label: "8",
      R: 14.071,
      sd: 4.9,
      d: 4.78,
      medium: 5,
    },
    {
      label: "9",
      R: -8.787,
      sd: 4.9,
      d: 1.63,
      medium: 6,
    },
    {
      label: "10",
      R: -48.476,
      sd: 4.9,
      d: 2.06,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.13,
    },
    {
      label: "11",
      R: -42.598,
      sd: 5,
      d: 1.31,
      medium: 7,
    },
    {
      label: "12",
      R: 17.149,
      sd: 5,
      d: 3.51,
      medium: 8,
    },
    {
      label: "13",
      R: -12.075,
      sd: 5,
      d: 0.76,
    },
    {
      label: "14",
      R: 195.173,
      sd: 5.5,
      d: 1.93,
      medium: 9,
    },
    {
      label: "15",
      R: -17.739,
      sd: 5.5,
    },
  ],
  gaps: {
    "15": {
      label: "Back focus (paraxial; d15 is blank in the patent)",
      values: [[37.49026159908341, 37.49026159908341]],
    },
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. The patent moves the first and second groups together toward the object while the third group and the stop move faster, and prints a near state (d10 5.19 to 4.57 mm, fB 37.49 to 39.83 mm, magnification −0.142) that is not modeled here. The production lens focuses to 0.18 m (0.15×).",
  },
  aperture: {
    nominalFNumber: 4.1,
    fStops: [4.1, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 85.92,
    maxTraceFieldDeg: 42.96,
  },
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "G2",
      fromSurface: "6",
      toSurface: "10",
    },
    {
      text: "G3",
      fromSurface: "11",
      toSurface: "15",
    },
  ],
  doublets: [
    {
      text: "H1",
      fromSurface: "1",
      toSurface: "3A",
    },
    {
      text: "C1",
      fromSurface: "8",
      toSurface: "10",
    },
    {
      text: "C2",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
