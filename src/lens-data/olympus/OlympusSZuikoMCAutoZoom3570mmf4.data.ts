import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,452,512 (Hiroshi Takase, Olympus Optical Co.), Embodiment 1: a 36-68.5 mm f/4 two-group zoom of seven singlets,
 * a negative front group (L1-L3) and a positive rear group (L4-L7). It is matched to the Olympus S Zuiko MC Auto-Zoom
 * 35-70mm f/4 by the Olympus data sheet: seven elements in seven groups, 63°-34° and F4-22, with a section drawing
 * three elements ahead of the zoom space and four behind it, the diaphragm between the fifth and sixth. The patent does
 * not name the product, and all six of its examples share this construction (f = 36-68.5 or 36-68 mm), so
 * Embodiment 1 stands for the family rather than identified factory data. Native patent scale; no scale factor.
 * Printed: R, d, n and ν; d6 = 36.741 mm at f = 36.0 and 0.550 mm at f = 68.5; F/4 and the half-fields 31° and 17.5°
 * (Figs. 2A and 2C); and the focal lengths fM = -64.742 (front group), fU = 42.415 (rear group), f1-f7 and
 * f45 = 24.238 mm, which the table reproduces. The printed rows trace to f = 35.9999 and 68.5004 mm. The table gives n
 * and ν without a line subscript; the aberration plots use the d and g lines, so the indices are taken as d-line.
 * Zoom: only the air space d6 between the groups is printed as variable. From 36 to 68.5 mm the rear group moves
 * 21.29 mm toward the object; the front group moves 15.03 mm toward the image up to 64.7 mm and returns 0.14 mm by
 * 68.5 mm. The 36 and 68.5 mm stations are the printed rows; the nine between them are solved from the printed table
 * (paraxial, d-line). d6 sets the focal length, d6 = -39.538 + 2746.03 / f mm, from the two group focal lengths and
 * principal planes; the back focus puts the paraxial image on a fixed plane, BF = 45.998 + 0.65514 (f - 36) mm, which
 * is exactly linear in f. Linear interpolation between the 11 stations leaves at most 0.039 mm of defocus (near
 * 37.5 mm); between the printed ends alone it would be 3.40 mm.
 * Image plane: the patent prints no back focus. The final gap is each station's paraxial back focus, 45.998 mm at
 * 36 mm and 67.290 mm at 68.5 mm.
 * Stop: neither printed nor drawn in the patent (Fig. 1 shows no stop). The iris sits at the middle of d10, between L5
 * and L6, where the Olympus section draws the diaphragm, and it moves with the rear group. The patent states F/4 at
 * both ends and in between (Figs. 2A-2C), so the iris radius follows the zoom: 6.75 mm at 36 mm to 9.10 mm at
 * 68.5 mm.
 * Semi-diameters are inferred; none is printed. They are checked against Fig. 1, the patent's only section (drawn at
 * an intermediate zoom setting; 22.8 and 23.4 px/mm at 72 dpi from the front- and rear-group vertex spans), and by
 * real-ray trace. L1 keeps 20.5 mm on both faces; its front face carries the 36 mm corner chief ray (32.1° to
 * 21.63 mm) at 18.4 mm.
 * Fig. 1 ends L1's concave rear face at about 17.9 mm inside a flat land, but cutting S2 below about 19.4 mm narrows
 * the traced wide-angle field, so the land is not modeled. L2 (17.3 mm) and L3 (16 mm) stay below Fig. 1's 19.8 and
 * 17.9 mm: widening them would change the silhouette without any ray needing it. L4 and L5 rise from 10.4 and 10.1 mm
 * to 11.1 and 10.8 mm, the least that passes a real F/4 marginal ray at 68.5 mm (11.02 and 10.71 mm); Fig. 1 draws
 * them at 12.3 and 11.3 mm and the Olympus section larger again. L6 and L7 keep 10 mm (Fig. 1: 9.9 and 11.0 mm).
 * Focus: the patent prints the infinity state only and names no focusing group, so no gap varies with focus.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-s-zuiko-mc-auto-zoom-35-70mm-f4",
  maker: "Olympus",
  name: "OLYMPUS S ZUIKO MC AUTO-ZOOM 35-70mm f/4",
  subtitle: "US 4,452,512, Embodiment 1 — probable production correlation",
  visible: true,
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 7 GROUPS", "DESIGN f = 36–68.5 mm", "DESIGN F/4", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: {
      marketing: [35, 70],
      design: [36, 68.5],
    },
    fNumber: {
      marketing: 4,
      design: 4,
    },
    closeFocusM: {
      marketing: 0.75,
    },
  },
  source: {
    patentNumber: "US 4,452,512",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1984,
    authors: ["Hiroshi Takase"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      indexReference: "d",
      focalLengthMm: -86.38,
      glass: "S-BSM18 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Front negative meniscus of the front group, convex toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      indexReference: "d",
      focalLengthMm: -59.21,
      glass: "S-BSM18 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strongest negative element of the front group: nearly flat in front, deeply concave at the rear.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.68893,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: 80.07,
      glass: "S-TIM28 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Flint positive meniscus that closes the front group and corrects the colour of L1 and L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.7,
      indexReference: "d",
      focalLengthMm: 51.95,
      glass: "Unmatched 652587 (lanthanum crown near LaK7; supplier unspecified)",
      role: "First positive element of the rear group, behind the zoom air space.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6583,
      vd: 57.3,
      indexReference: "d",
      focalLengthMm: 44.21,
      glass: "K-LaK11 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus ahead of the iris; with L4 it forms the rear group's front positive member (f = 24.24 mm).",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -20.44,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative element behind the iris, the middle member of the rear group's triplet form.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6398,
      vd: 34.5,
      indexReference: "d",
      focalLengthMm: 42.52,
      glass: "S-TIM27 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Rear positive element of the rear group, with almost all its power on the strong rear surface.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 42.3913,
      d: 2.09,
      sd: 20.5,
      medium: 1,
    },
    {
      label: "2",
      R: 23.5091,
      d: 8.1,
      sd: 20.5,
    },
    {
      label: "3",
      R: 442.1958,
      d: 1.99,
      sd: 17.3,
      medium: 2,
    },
    {
      label: "4",
      R: 34.7672,
      d: 4.479,
      sd: 17.3,
    },
    {
      label: "5",
      R: 32.291,
      d: 4.28,
      sd: 16,
      medium: 3,
    },
    {
      label: "6",
      R: 73.6646,
      sd: 16,
    },
    {
      label: "7",
      R: 41.0666,
      d: 3.38,
      sd: 11.1,
      medium: 4,
    },
    {
      label: "8",
      R: -186.3587,
      d: 0.15,
      sd: 11.1,
    },
    {
      label: "9",
      R: 24.5146,
      d: 3.59,
      sd: 10.8,
      medium: 5,
    },
    {
      label: "10",
      R: 146.4997,
      d: 2.1035,
      sd: 10.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.1035,
    },
    {
      label: "11",
      R: -86.5398,
      d: 4.147,
      sd: 10,
      medium: 6,
    },
    {
      label: "12",
      R: 20.7628,
      d: 5.332,
      sd: 10,
    },
    {
      label: "13",
      R: 246.83,
      d: 3.443,
      sd: 10,
      medium: 7,
    },
    {
      label: "14",
      R: -30.4106,
      sd: 10,
    },
  ],
  zoom: {
    stations: [
      { focalLengthMm: 36, label: "Wide", published: true },
      { focalLengthMm: 39, published: false },
      { focalLengthMm: 42, published: false },
      { focalLengthMm: 45, published: false },
      { focalLengthMm: 48, published: false },
      { focalLengthMm: 51, published: false },
      { focalLengthMm: 54.5, published: false },
      { focalLengthMm: 58, published: false },
      { focalLengthMm: 61.5, published: false },
      { focalLengthMm: 65, published: false },
      { focalLengthMm: 68.5, label: "Tele", published: true },
    ],
    step: 0.004,
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent prints the infinity state only and names no focusing group, so only infinity focus is modeled at every zoom setting. Olympus's minimum focus of 0.75 m, by a rotating helicoid, is not modeled.",
  },
  gaps: {
    "6": {
      label: "d6",
      values: [
        [36.741, 36.741],
        [30.87325, 30.87325],
        [25.84389, 25.84389],
        [21.485111, 21.485111],
        [17.671179, 17.671179],
        [14.305945, 14.305945],
        [10.84809, 10.84809],
        [7.807563, 7.807563],
        [5.113112, 5.113112],
        [2.708832, 2.708832],
        [0.55, 0.55],
      ],
    },
    "14": {
      label: "BF",
      values: [
        [45.997545, 45.997545],
        [47.962985, 47.962985],
        [49.928374, 49.928374],
        [51.893763, 51.893763],
        [53.859152, 53.859152],
        [55.824542, 55.824542],
        [58.117496, 58.117496],
        [60.41045, 60.41045],
        [62.703403, 62.703403],
        [64.996358, 64.996358],
        [67.289586, 67.289586],
      ],
    },
  },
  aperture: {
    nominalFNumber: 4,
    fStops: [4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "14" },
  ],
  layout: {
    yScFill: 0.35,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
