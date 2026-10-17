import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * HASSELBLAD XCD 35-100mm f/2.8-4 E — US 2026/0036794 A1, Example 1.
 * Patent millimetres and d-line indices, unscaled; no printed value is altered. The match to the
 * XCD 2,8-4/35-100E is a correlation; the factory prescription and glass supplier are not confirmed.
 * Sixteen elements in thirteen groups, six zoom groups (+ − + + − +), five aspherical surfaces on
 * three elements (6; 21 and 22; 23 and 24).
 * APERTURE: the patent prints F4.12 at the wide, middle and long stations (4.11984 / 4.11992 /
 * 4.11983) in all five examples, draws its aberration plots at F4.12 only, and prints no iris
 * diameter. This file models the marketed f/2.8-4 as the same prescription with a fixed iris. The
 * modeled station f-numbers were obtained by holding the radius that passes the printed F4.11983
 * beam at the long end (12.183 mm, real axial ray), giving f/2.84 at wide and f/3.414 at middle. The
 * stored station nominalFNumber values [2.84, 3.414, 4.11983] derive radii of 12.1828 / 12.1824 /
 * 12.1833 mm separately at each station, approximately reproducing that fixed-iris model. The wide
 * and middle f-numbers are derived, not printed; at the printed F4.12 the radii would be 8.355 /
 * 10.054 / 12.183 mm.
 * The printed 1.8 mm cover plate and the 1.0 mm of air behind it are in rearPlates; the last lens
 * gap is the printed gap to the plate. The image plane is where the patent puts it: the paraxial
 * focus lies +0.069704 / +0.036030 / -0.046516 mm from it at the three stations.
 * Zoom: only the three printed stations are modeled. Between them the gaps are piecewise-linear
 * interpolation, not a published cam (paragraph 0027 says the lines joining the stations in Figure 1A
 * are not the actual group motion); the paraxial focus then sits up to -1.075280 mm off the image
 * plane, and no refocus is added.
 * Focus: infinity only. The patent says G5 moves toward the image for near objects but prints no
 * finite-focus gaps, so each focus vector repeats its infinity value. closeFocusM is Hasselblad's
 * 0.4 m minimum focus at the wide end (0.5 m at the long end); it is not modeled.
 * The stop position is printed (surface 11).
 * SEMI-DIAMETERS: not printed; estimated from the Figure 1A optical curves (all three panels) and
 * floor-checked by real-ray trace. The axial beam of the fixed-iris model clears every rim at all
 * three stations (smallest margin 0.15 mm, surface 18, long end). Each face follows the end of its
 * own drawn curve: L3's rear face (18.0 mm) stops where its wider mechanical flange begins, L14's
 * concave front face (13.2 mm) stops at the flat land below its 14.5 mm rim, and the rear faces of
 * L5 (15.0 mm) and L10 (11.3 mm) stop below the bevelled rear corners of their cemented pairs. Each
 * cemented joint keeps the height of the element in front of it. The diagram joins unequal face
 * heights with a straight edge, so the drawn lands and flanges appear as chamfers. Surfaces 21A/22A
 * are 11.6 mm, below the first slope turnover of 21A at 11.646877 mm. gapSagFrac stays at its default.
 * The printed half-angles put the chief ray at 27.481170 / 27.491995 / 27.508027 mm on the printed
 * image plane, against the summary 27.5000 mm; angles and image plane are kept as printed.
 * Aspheres: the patent's κ is the conic constant of the (1 + κ) form and is zero on every
 * aspherical surface; A4–A12 as printed, no A14. A8 of surface 23 is the printed negative value
 * -1.98459e-10.
 * LABELS: element names L1–L16 and the group brackets G1 (+) … G6 (+) are the patent's own reference signs
 * (Figure 1A; the group brackets span the same surfaces as the figure's). The patent lists the stop (its "A")
 * between G2 and G3, outside both. The three cemented pairs are bracketed by their element signs (L1+L2, L4+L5,
 * L9+L10) so that they do not read like the patent's gap labels d3 … d30 shown with the zoom gaps.
 * GLASS: the patent prints nd, νd and θgF for every glass. Each glass label names a HOYA, OHARA
 * or SUMITA catalog glass whose nd, νd and θgF equal the print (L4: θgF 0.0005 apart; L9: nd 0.00001
 * apart) and selects its dispersion curve; supplier and melt are not identified. The three aspherical
 * elements are the three moulding glasses (M-FCD500, L-LAL13, K-VC181). dPgF is the printed θgF
 * measured from the engine's normal line, 0.6438 − 0.001682 νd, not the patent's line.
 */
const LENS_DATA = {
  schema: 2,
  key: "hasselblad-xcd-35-100mm-f28-4-e",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 35-100mm f/2.8-4 E",
  subtitle: "US 2026/0036794 A1, Example 1 — qualified production correlation",

  catalog: {
    lensMounts: ["hasselblad-xcd"],
    imageFormat: "44x33",
    imageCircleMm: 55,
    specs: [
      "16 ELEMENTS / 13 GROUPS",
      "DESIGN f = 36.05–96.99 mm",
      "PATENT F/4.12 AT ALL STATIONS",
      "MODEL F/2.84–4.12 WITH FIXED IRIS",
      "5 ASPHERICAL SURFACES / 3 ELEMENTS",
    ],
    elementCount: 16,
    groupCount: 13,
    focalLengthMm: { marketing: [35, 100], design: [36.0455, 96.9931] },
    fNumber: { marketing: 2.8, design: 2.84 },
  },

  source: {
    patentNumber: "US 2026/0036794 A1",
    patentYear: 2026,
    authors: ["Emiri Suzuki", "Naoto Nishimura"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -324.3865051254268,
      glass: "E-FD15L (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Negative meniscus, front element of the cemented pair that forms the positive first group",
      cemented: "L1+L2",
      dPgF: 0.009628199999999976,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: 96.367481773196,
      glass: "LAC8 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Positive meniscus, rear element of the first group's cemented pair",
      cemented: "L1+L2",
      dPgF: -0.008940200000000065,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -40.355119817766685,
      glass: "TAFD5G (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Negative meniscus at the front of the negative second group",
      dPgF: -0.007278600000000024,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Biconcave (1x Asph)",
      nd: 1.55332,
      vd: 71.7,
      indexReference: "d",
      focalLengthMm: -38.532950227716604,
      glass:
        "M-FCD500 (HOYA; equals the patent nd and νd, catalog θgF 0.5403 against the printed 0.5398; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the five elements with νd of 71.7 or more (L4, L8, L10, L11, L15); Hasselblad states five ED elements. dPgF comes from the patent's printed θgF.",
      role: "Biconcave front element of the second group's cemented pair; aspherical on its object side",
      cemented: "L4+L5",
      dPgF: 0.01659939999999993,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.9011,
      vd: 27.1,
      indexReference: "d",
      focalLengthMm: 38.088351666342064,
      glass: "NBFD27 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Positive meniscus, rear element of the second group's cemented pair",
      cemented: "L4+L5",
      dPgF: 0.00898219999999994,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6896,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: -182.39712290466713,
      glass: "E-FD80 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Negative meniscus at the rear of the second group, concave toward the object, ahead of the stop",
      dPgF: 0.011610199999999904,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.3,
      indexReference: "d",
      focalLengthMm: 48.97392394041472,
      glass: "NBFD10 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Positive meniscus at the front of the positive third group, directly behind the stop",
      dPgF: -0.002061400000000102,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Biconvex",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 42.87056288808425,
      glass: "FCD1 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the five elements with νd of 71.7 or more (L4, L8, L10, L11, L15); Hasselblad states five ED elements. dPgF comes from the patent's printed θgF.",
      role: "Biconvex positive element of the third group, between L7 and the cemented pair",
      dPgF: 0.032351200000000024,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Biconcave",
      nd: 1.74951,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: -18.82059568563722,
      glass:
        "S-NBH51 (OHARA; equals the patent νd and θgF, catalog nd 1.74950 against the printed 1.74951; supplier unconfirmed)",
      role: "Biconcave front element of the third group's cemented pair",
      cemented: "L9+L10",
      dPgF: -0.002625400000000111,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 59.15251429123069,
      glass: "FCD1 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the five elements with νd of 71.7 or more (L4, L8, L10, L11, L15); Hasselblad states five ED elements. dPgF comes from the patent's printed θgF.",
      role: "Positive meniscus, rear element of the third group's cemented pair",
      cemented: "L9+L10",
      dPgF: 0.032351200000000024,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Biconvex",
      nd: 1.55032,
      vd: 75.5,
      indexReference: "d",
      focalLengthMm: 30.66506351879886,
      glass: "FCD705 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the five elements with νd of 71.7 or more (L4, L8, L10, L11, L15); Hasselblad states five ED elements. dPgF comes from the patent's printed θgF.",
      role: "Biconvex positive front element of the positive fourth group",
      dPgF: 0.02329099999999995,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      focalLengthMm: -179.11987321597823,
      glass: "L-LAL13 (OHARA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Negative meniscus at the rear of the fourth group; aspherical on both sides",
      dPgF: -0.006117600000000056,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.81055,
      vd: 41.1,
      indexReference: "d",
      focalLengthMm: -80.55101888238354,
      glass: "K-VC181 (SUMITA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Negative meniscus at the front of the negative fifth group, the group the patent moves to focus; aspherical on both sides",
      dPgF: -0.005669800000000058,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: -110.66739532664758,
      glass: "FC5 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Negative meniscus at the rear of the fifth group, concave toward the object",
      dPgF: 0.005212799999999906,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: -366.8757712513046,
      glass: "FCD1 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the five elements with νd of 71.7 or more (L4, L8, L10, L11, L15); Hasselblad states five ED elements. dPgF comes from the patent's printed θgF.",
      role: "Negative meniscus at the front of the positive sixth group, concave toward the object",
      dPgF: 0.032351200000000024,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Biconvex",
      nd: 1.92119,
      vd: 24.0,
      indexReference: "d",
      focalLengthMm: 87.93669415030313,
      glass: "FDS24-W (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      role: "Biconvex positive last element, at the rear of the sixth group",
      dPgF: 0.016767999999999894,
    },
  ],

  surfaces: [
    { label: "1", R: 68.3354, d: 1.0, sd: 30.3, medium: 1 },
    { label: "2", R: 52.1932, d: 8.1143, sd: 30.3, medium: 2 },
    { label: "3", R: 203.0739, sd: 30.3 },
    { label: "4", R: 61.7717, d: 1.0, sd: 23.0, medium: 3 },
    { label: "5", R: 21.6392, d: 11.1395, sd: 18.0 },
    {
      label: "6A",
      R: -111.0342,
      d: 1.5123,
      sd: 17.4,
      medium: 4,
      asphere: { K: 0, A4: 1.65418e-6, A6: 2.35613e-9, A8: -6.17277e-12, A10: 1.77861e-14, A12: 0, A14: 0 },
    },
    { label: "7", R: 26.5162, d: 5.3019, sd: 17.4, medium: 5 },
    { label: "8", R: 105.5477, d: 5.5461, sd: 15.0 },
    { label: "9", R: -34.4264, d: 1.045, sd: 14.6, medium: 6 },
    { label: "10", R: -47.987, sd: 14.6 },
    // (moved from surfaces[10].sd) radius derived from the design f-number at each zoom station
    { label: "STO", R: "flat", d: 1.95 },
    { label: "12", R: 32.87, d: 4.2034, sd: 13.5, medium: 7 },
    { label: "13", R: 158.5701, d: 0.3, sd: 13.5 },
    { label: "14", R: 36.7224, d: 5.44, sd: 13.0, medium: 8 },
    { label: "15", R: -48.2592, d: 1.4752, sd: 13.0 },
    { label: "16", R: -38.3162, d: 1.0, sd: 12.1, medium: 9 },
    { label: "17", R: 22.575, d: 4.4156, sd: 12.1, medium: 10 },
    { label: "18", R: 90.9435, sd: 11.3 },
    { label: "19", R: 26.9173, d: 7.1364, sd: 12.0, medium: 11 },
    { label: "20", R: -40.9787, d: 0.3, sd: 12.0 },
    {
      label: "21A",
      R: 101.835,
      d: 1.183,
      sd: 11.6,
      medium: 12,
      asphere: { K: 0, A4: -7.15927e-6, A6: -9.60538e-8, A8: 2.44811e-10, A10: -8.3803e-14, A12: 0, A14: 0 },
    },
    {
      label: "22A",
      R: 55.6933,
      sd: 11.6,
      asphere: { K: 0, A4: 1.6343e-5, A6: -6.5593e-8, A8: 2.59214e-10, A10: 2.75345e-13, A12: 0, A14: 0 },
    },
    {
      label: "23A",
      R: 69.0038,
      d: 1.4401,
      sd: 12.2,
      medium: 13,
      asphere: { K: 0, A4: -3.2763e-6, A6: 1.66759e-7, A8: -1.98459e-10, A10: -3.44918e-13, A12: 2.38114e-15, A14: 0 },
    },
    {
      label: "24A",
      R: 33.2345,
      d: 12.0031,
      sd: 12.2,
      asphere: { K: 0, A4: -9.87207e-6, A6: 1.59487e-7, A8: -1.15095e-11, A10: -1.39913e-12, A12: 5.93558e-15, A14: 0 },
    },
    { label: "25", R: -16.1239, d: 1.0, sd: 13.2, medium: 14 },
    { label: "26", R: -23.4645, sd: 14.5 },
    { label: "27", R: -117.0607, d: 2.8982, sd: 23.2, medium: 15 },
    { label: "28", R: -329.6738, d: 0.3, sd: 23.2 },
    { label: "29", R: 158.4607, d: 5.487, sd: 24.6, medium: 16 },
    { label: "30", R: -162.9762, sd: 24.6 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 36.0455, nominalFNumber: 2.84 },
      { focalLengthMm: 59.129, nominalFNumber: 3.414 },
      { focalLengthMm: 96.9931, nominalFNumber: 4.11983 },
    ],
  },

  focus: {
    closeFocusM: 0.4,
    description:
      "The patent tabulates infinity focus only, at three zoom stations (36.05, 59.13 and 96.99 mm), so focus is not modeled and the focus control moves nothing. The fifth group (L13–L14) moves toward the image for near objects, but the patent prints no travel or finite-focus spacings. The 0.4 m minimum focus distance is Hasselblad's figure for the wide end (0.5 m at the long end) and is not modeled. Between the printed stations the zoom gaps are linearly interpolated; this is not a published cam, and the paraxial focus sits up to 1.08 mm off the printed image plane between the wide and middle stations.",
  },

  gaps: {
    "3": {
      label: "d3",
      values: [
        [1.2133, 1.2133],
        [15.2146, 15.2146],
        [31.0268, 31.0268],
      ],
    },
    "10": {
      label: "d10",
      values: [
        [28.0712, 28.0712],
        [14.5482, 14.5482],
        [5.6396, 5.6396],
      ],
    },
    "18": {
      label: "d18",
      values: [
        [5.9766, 5.9766],
        [3.4487, 3.4487],
        [2.2896, 2.2896],
      ],
    },
    "22A": {
      label: "d22",
      values: [
        [3.3108, 3.3108],
        [2.253, 2.253],
        [1.8554, 1.8554],
      ],
    },
    "26": {
      label: "d26",
      values: [
        [6.5833, 6.5833],
        [13.0003, 13.0003],
        [27.7508, 27.7508],
      ],
    },
    "30": {
      label: "d30",
      values: [
        [17.2633, 17.2633],
        [27.9899, 27.9899],
        [33.4165, 33.4165],
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  rearPlates: [
    {
      label: "CG",
      thicknessMm: 1.8,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (HOYA; equals the patent nd, νd and θgF; supplier unconfirmed)",
      indexReference: "d",
      dPgF: -0.0015156000000000613,
      gapAfterMm: 1.0,
      source: "US 2026/0036794 A1, Example 1 Table 1A surfaces 31–32; paragraph 0031.",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (-)", fromSurface: "4", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "12", toSurface: "18" },
    { text: "G4 (+)", fromSurface: "19", toSurface: "22A" },
    { text: "G5 (-)", fromSurface: "23A", toSurface: "26" },
    { text: "G6 (+)", fromSurface: "27", toSurface: "30" },
  ],
  doublets: [
    { text: "L1+L2", fromSurface: "1", toSurface: "3" },
    { text: "L4+L5", fromSurface: "6A", toSurface: "8" },
    { text: "L9+L10", fromSurface: "16", toSurface: "18" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
