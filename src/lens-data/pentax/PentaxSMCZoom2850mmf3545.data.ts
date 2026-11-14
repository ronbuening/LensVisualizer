import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,142,779 (Ryota Ogawa, Asahi Kogaku Kogyo), Example 3: a 28.8-48.9 mm f/3.5-4.5 two-group zoom of ten
 * air-spaced singlets, four in the negative front group and six in the positive rear group. Native patent scale; no
 * scale factor. Matched to the SMC PENTAX ZOOM 28-50mm f/3.5-4.5 by focal range, f-numbers, angle of view (76-48°
 * printed, 75-46° in the Asahi catalogue) and 10 elements in 10 groups. Example 2 has the same element count; Example 3
 * is preferred because its front-group spacing matches the Asahi construction diagram (L3 and L4 almost touching on
 * the axis) and its front vertex sits 53.0 mm (28 mm) and 44.6 mm (50 mm) ahead of the K-mount flange, inside the
 * catalogue's 60 mm and 52 mm barrel lengths; Example 2's would sit 4.1-4.7 mm beyond the barrel.
 * Printed: R, d, nd and νd (d-line), d8 = 26.35 / 11.42 / 4.43 mm and back focus 38.035 / 45.582 / 51.579 mm at
 * f = 28.8 / 40 / 48.9 mm and F/3.5 / 4 / 4.5, Fa = -47.730, f1.2 = 135.798, f4 = -22.330 and f6.7 = 50.050 mm. The
 * table reproduces them: EFL 28.798 / 40.000 / 48.907 mm, paraxial back focus 38.033 / 45.582 / 51.584 mm, Fa = -47.730,
 * f1.2 = 135.798, f4 = -22.330, f6.7 = 50.050 mm. Claim 3 repeats the table unchanged.
 * Zoom: both groups move; only d8 and the back focus change. From 28.8 to 48.9 mm the rear group moves 13.54 mm toward
 * the object and the front group 8.38 mm toward the image. The three printed rows are stations at 28.8, 40 and 48.9 mm.
 * The five stations at 31, 33.5, 36.5, 43 and 46 mm are solved paraxially: d8 for the station focal length, then the
 * back focus as the paraxial back focus at that d8. In this two-group zoom d8 follows a hyperbola in f (about
 * -26.96 + 1535.2/f mm) and the back focus a straight line (about 18.63 + 0.6739 f mm), so linear interpolation between
 * the printed rows alone would defocus the image by up to 0.62 mm near 34 mm; with the solved stations the largest
 * defocus along the zoom is 0.054 mm (near 38 mm).
 * Stop: neither printed nor drawn. The text places the stop in the rear group; the iris is set midway in the 1.87 mm
 * air space between L7 and L8. There, one iris radius gives F/3.5, F/4.06 and F/4.50 at the printed rows, matching the
 * printed F/3.5 / 4 / 4.5 within 1.4 %, so the iris is modelled as fixed. The printed stations keep the printed
 * f-numbers; the solved stations carry the f-numbers that radius gives.
 * Glass: every nd/νd pair matches a catalog row within 0.0001 / 0.1; the labels name that row (OHARA or HOYA) as an
 * equivalent, not as the production supplier. L2 and the two SF6-type flints L4 and L8 carry the period OHARA rows
 * LAH53 and PBH6 (lead flint). FIG. 10 plots one unlabelled dashed colour curve; only the g line fits its sign and its
 * fall along the zoom. With PBH6 the paraxial g-line focus lies within 0.008 mm of that curve's foot at all three
 * printed rows (-0.117 / -0.085 / -0.050 mm against about -0.122 / -0.077 / -0.054 mm read from the plots); the
 * lead-free S-TIH6 row missed by up to 0.027 mm.
 * Semi-diameters are inferred; none is printed. They are read from FIG. 6 (drawn at the 28.8 mm setting) at 9.05 px/mm
 * on the 300 dpi sheet (front group vertex span 16.10 mm, rear group 17.97 mm; arc fits of r4 and r8 give 8.97 and
 * 8.85 px/mm across the axis), then floor-checked by real-ray trace. Every rim is within 4 % of the figure's mean of its
 * upper and lower outlines, and the Asahi catalogue drawing shows the same proportions (L2 flange largest after L1, L8
 * smallest, L10 larger than L9). L2 is drawn with a flat-faced flange: its convex front runs to 17.1 mm and its deep
 * concave rear ends at 13.4 mm where the bevel meets L3. L3 is drawn square-cut.
 * Focus: the patent prints the infinity state only and names no focusing method.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-smc-zoom-28-50mm-f35-45",
  maker: "Pentax",
  name: "PENTAX SMC ZOOM 28-50mm f/3.5-4.5",
  subtitle: "US 4,142,779, Example 3 — probable match to the production lens",
  visible: true,
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: ["10 ELEMENTS / 10 GROUPS", "DESIGN f = 28.8–48.9 mm", "DESIGN F/3.5–4.5", "ALL SPHERICAL"],
    elementCount: 10,
    groupCount: 10,
    focalLengthMm: {
      marketing: [28, 50],
      design: [28.8, 48.9],
    },
    fNumber: {
      marketing: 3.5,
      design: 3.5,
    },
    closeFocusM: {
      marketing: 0.55,
    },
  },
  source: {
    patentNumber: "US 4,142,779",
    example: {
      label: "Example 3",
      id: "3",
    },
    patentYear: 1979,
    authors: ["Ryota Ogawa"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.1,
      indexReference: "d",
      focalLengthMm: 135.798,
      glass: "S-BAL35 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak positive front element of the negative front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: -24.945,
      glass: "LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong negative meniscus whose deep rear face carries most of the front group's power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      indexReference: "d",
      focalLengthMm: -107.916,
      glass: "BSM18 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak negative meniscus that shares the front group's negative power with L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 51.893,
      glass: "PBH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint positive meniscus that achromatizes the front group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.7,
      indexReference: "d",
      focalLengthMm: 50.281,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Leading positive element of the rear group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.7,
      indexReference: "d",
      focalLengthMm: 33.068,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strongest positive element of the rear group, convex to the object.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -323.958,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Nearly afocal crown meniscus just ahead of the stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -17.934,
      glass: "PBH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint biconcave element behind the stop, the negative member of the rear group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.56013,
      vd: 47.0,
      indexReference: "d",
      focalLengthMm: 36.776,
      glass: "FEL3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive element behind the biconcave flint.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 166.224,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak positive rear meniscus, concave to the object.",
    },
  ],
  surfaces: [
    { label: "1", R: 99.2, d: 3.5, sd: 19.8, medium: 1 },
    { label: "2", R: -408.0, d: 0.1, sd: 19.8 },
    { label: "3", R: 178.938, d: 1.7, sd: 17.1, medium: 2 },
    { label: "4", R: 18.0, d: 6.02, sd: 13.4 },
    { label: "5", R: 245.958, d: 1.5, sd: 13.2, medium: 3 },
    { label: "6", R: 53.7, d: 0.1, sd: 13.2 },
    { label: "7", R: 25.294, d: 3.18, sd: 12.6, medium: 4 },
    { label: "8", R: 60.5, sd: 12.6 },
    { label: "9", R: 56.177, d: 1.94, sd: 7.6, medium: 5 },
    { label: "10", R: -123.98, d: 0.1, sd: 7.6 },
    { label: "11", R: 17.541, d: 2.0, sd: 7.5, medium: 6 },
    { label: "12", R: 53.2, d: 0.77, sd: 7.5 },
    { label: "13", R: 40.04, d: 1.48, sd: 7.2, medium: 7 },
    { label: "14", R: 31.9, d: 0.935, sd: 7.2 },
    { label: "STO", R: "flat", d: 0.935 },
    { label: "15", R: -85.725, d: 2.69, sd: 6.9, medium: 8 },
    { label: "16", R: 17.608, d: 2.22, sd: 6.9 },
    { label: "17", R: 158.0, d: 2.8, sd: 8.3, medium: 9 },
    { label: "18", R: -23.537, d: 0.1, sd: 8.3 },
    { label: "19", R: -94.05, d: 2.0, sd: 9.4, medium: 10 },
    { label: "20", R: -45.2, sd: 9.4 },
  ],
  zoom: {
    stations: [
      { focalLengthMm: 28.8, nominalFNumber: 3.5, label: "Wide", published: true },
      { focalLengthMm: 31, nominalFNumber: 3.6095, published: false },
      { focalLengthMm: 33.5, nominalFNumber: 3.7339, published: false },
      { focalLengthMm: 36.5, nominalFNumber: 3.883, published: false },
      { focalLengthMm: 40, nominalFNumber: 4, published: true },
      { focalLengthMm: 43, nominalFNumber: 4.2063, published: false },
      { focalLengthMm: 46, nominalFNumber: 4.3555, published: false },
      { focalLengthMm: 48.9, nominalFNumber: 4.5, label: "Tele", published: true },
    ],
    apertureModel: "fixed-iris",
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent prints the infinity state only and names no focusing method, so only infinity focus is modelled. Asahi's 0.55 m minimum focus distance is not modelled.",
  },
  gaps: {
    "8": {
      label: "d8",
      values: [
        [26.35, 26.35],
        [22.562728, 22.562728],
        [18.866969, 18.866969],
        [15.100332, 15.100332],
        [11.42, 11.42],
        [8.742307, 8.742307],
        [6.413866, 6.413866],
        [4.43, 4.43],
      ],
    },
    "20": {
      label: "BF",
      values: [
        [38.035, 38.035],
        [39.517098, 39.517098],
        [41.201786, 41.201786],
        [43.223412, 43.223412],
        [45.582, 45.582],
        [47.603602, 47.603602],
        [49.625228, 49.625228],
        [51.579, 51.579],
      ],
    },
  },
  groups: [
    { text: "FRONT (−)", fromSurface: "1", toSurface: "8" },
    { text: "REAR (+)", fromSurface: "9", toSurface: "20" },
  ],
  aperture: {
    fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  layout: {
    yScFill: 0.35,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
