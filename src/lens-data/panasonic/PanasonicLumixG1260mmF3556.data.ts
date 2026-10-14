import type { LensDataInput } from "../../types/optics.js";

/**
 * PANASONIC LUMIX G VARIO 12-60mm f/3.5-5.6 ASPH. POWER O.I.S. — JP 6814931 B2, Numerical Example 2.
 * Patent millimetres and d-line indices, unscaled; no printed value is altered. The match to the
 * H-FS12060 is a correlation; Panasonic has not confirmed the factory prescription.
 * Eleven elements in nine groups, five zoom groups (+ − + − +), five aspherical surfaces on three
 * elements (11; 13 and 14; 18 and 19). The patent prints no cover plate; the back focus is air.
 * All six printed states are kept: infinity and the 250 mm object-to-image close state at the wide,
 * middle and tele stations, each with its printed BF.
 * Zoom varies d3, d9, d17 and d19. Close focus moves G4 (L10) toward the image through d17 and d19.
 * G1 and G2 move toward the image from wide to middle and toward the object from middle to tele;
 * where they reverse is not printed. The stop moves with G3. O.I.S. decentring of L7 is not modelled.
 * Paragraph 0027 says the straight lines joining the three positions in Fig. 5 differ from the actual
 * group motion. Zoom between the printed stations is piecewise-linear interpolation of the printed
 * gaps, not a published cam, and no refocus is added: the paraxial focus error at the printed image
 * plane reaches about -2.131 mm near zoomT 0.298, where the focal length is about 18.689 mm against a
 * 21.033 mm label and the marginal f-number about 4.123 against 4.291. An interpolated close state
 * between wide and middle can focus at about 139 mm object-to-image although all three printed close
 * states are 250 mm. The production 0.20 m minimum focus at the wide end is not modelled.
 * SEMI-DIAMETERS: not printed; measured on the three Fig. 5 panels (wide, middle, tele; 0.145 mm per
 * pixel on the 399 ppi bitmap, centre of the drawn stroke) and floor-checked by real-ray trace at all
 * six states. Every rim is within about 0.2 mm of the drawing, L1+L2 at 19.3 / 18.3 mm and L10 at
 * 5.3 mm included. L3's rear surface stops at 9.2 mm, near where the figure's flat rear annulus
 * begins, against 12.2 mm on its front. The drawn rims vignette the corner bundles: at the edge of the
 * printed field the share of the iris area that clears every rim is 73 % at wide, 86 % at middle and
 * 72 % at tele (infinity), limited by L10 and the L3/L4 rims at wide, by L10 at middle and mainly by
 * L1 at tele. gapSagFrac stays at its 0.90 default.
 * The stop position is printed; its radius is set by a real axial ray for the patent's F-number at
 * each zoom station (4.768 mm at all three), not a published iris diameter.
 * Aspheres: the patent's κ is the standard conic constant of the (1 + κ) form and is zero on every
 * aspherical surface; even orders A4–A12.
 * Glass names are nd/νd catalog matches and select that glass's dispersion curve; neither supplier nor
 * melt is established. dPgF comes from the same catalog formulas, not from the patent. L6 (aspherical)
 * equals SUMITA's moulding glass K-CSK120 as its dispersion formula evaluates (1.58699 / 59.5); L11
 * equals HOYA E-CF6 in nd, with νd 52.15 against the printed 52.1. L7 and L10 (1.53380 / 55.6, resin
 * by the patent's stated preference) have no catalog match. The same pair stands on double-aspherical
 * elements in three other Panasonic prescriptions in this catalog, and US 2017/0059832 A1 prints its
 * C, F and g indices (Table 23); those are carried here on the inference that it is the same material.
 * Paragraph 0026 defines the middle focal length as the geometric mean of the end focal lengths
 * (26.8374 mm); Table 7A prints 26.8412 mm, which the middle prescription reproduces, so the table is kept.
 * Paragraph 0047 calls G5 fixed; the printed BF varies from 14.23623 to 14.23646 mm (0.23 µm) across
 * the three stations, a rounding-level spread kept as printed.
 * Real chief rays at the printed half-field angles reach 9.997, 10.813 and 10.814 mm against the
 * printed image heights 10.000, 10.815 and 10.815 mm. Rays that cross the iris about 0.09, 0.27 and
 * -0.11 of its radius off-centre land on the printed heights and also reproduce the edge-of-field
 * astigmatism of Fig. 6. This is consistent with a reference ray through a vignetted pupil, but
 * the patent does not identify that ray. The viewer's half-field at each station is the vignetting limit of the
 * estimated semi-diameters, not the printed ω row.
 */

const LENS_DATA = {
  key: "panasonic-lumix-g-vario-12-60mm-f35-56",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G VARIO 12-60mm f/3.5-5.6 ASPH. POWER O.I.S.",
  subtitle: "JP 6814931 B2, Example 2 — qualified production correlation",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "DESIGN f = 12.46–57.78 mm",
    "DESIGN F/3.62–5.85",
    "5 ASPHERICAL SURFACES / 3 ELEMENTS",
    "PUBLISHED ZOOM AND CLOSE FOCUS, THREE STATIONS",
  ],
  focalLengthMarketing: [12, 60],
  focalLengthDesign: [12.464232981043029, 57.783421839431895],
  apertureMarketing: 3.5,
  apertureDesign: 3.62207,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "JP 6814931 B2",
  patentAuthors: ["Takahiro Kitada", "Shunichiro Yoshinaga", "Takakazu Bito"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2021,
  elementCount: 11,
  groupCount: 9,
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Meniscus Negative",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      fl: -129.99180622246152,
      glass: "NBFD15 (catalog equivalent; production supplier unspecified)",
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      dPgF: 0.0006373971623230279,
      apd: false,
      cemented: "L1+L2",
      role: "Negative meniscus front element of the cemented doublet L1+L2, the positive first group",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Meniscus Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 57.25262757995004,
      glass: "BSC7 (catalog equivalent; production supplier unspecified)",
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      dPgF: -0.001534821416379395,
      apd: false,
      cemented: "L1+L2",
      role: "Positive meniscus rear element of the cemented doublet L1+L2 in the first group",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Meniscus Negative",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      fl: -15.801216548112134,
      glass: "S-LAH95 (catalog equivalent; production supplier unspecified)",
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      dPgF: 0.005177102262475919,
      apd: false,
      role: "High-index negative meniscus at the front of the negative second group",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: -29.71062603666843,
      glass: "S-BSM16 (catalog equivalent; production supplier unspecified)",
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      dPgF: 0.00026288910444438596,
      apd: false,
      role: "Biconcave negative middle element of the second group",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Meniscus Positive",
      nd: 1.94595,
      vd: 18.0,
      indexReference: "d",
      fl: 35.810812283390135,
      glass: "FDS18 (catalog equivalent; production supplier unspecified)",
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      dPgF: 0.04104289665738381,
      apd: false,
      role: "High-index, high-dispersion positive meniscus at the rear of the second group",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (1 aspheric surface)",
      nd: 1.58699,
      vd: 59.5,
      indexReference: "d",
      fl: 25.75214282371652,
      glass: "K-CSK120 (SUMITA catalog equivalent, a moulding glass; production supplier unspecified)",
      dPgF: -0.003251,
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      apd: false,
      role: "Biconvex positive front element of the third group, directly behind the stop; aspherical on its object side",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2 aspheric surfaces)",
      nd: 1.5338,
      vd: 55.6,
      indexReference: "d",
      fl: 39.07116205673914,
      glass:
        "Unmatched (Panasonic moulding material 1.53380/55.6, resin by the patent's stated preference; no catalog row; line indices from US 2017/0059832 A1)",
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
      dPgF: 0.01204,
      apdNote:
        "nC, nF and ng are the values Panasonic prints for this nd/νd material in US 2017/0059832 A1 (Table 23, P_g,F 0.56232); this patent prints nd and νd only.",
      role: "Biconvex positive O.I.S. element of the third group, aspherical on both faces; its stabilizing shift is not modelled",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Meniscus Negative",
      nd: 1.738,
      vd: 32.3,
      indexReference: "d",
      fl: -14.503203701639677,
      glass: "S-NBH53V (catalog equivalent; production supplier unspecified)",
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      dPgF: 0.0005512198265796853,
      apd: false,
      cemented: "L8+L9",
      role: "Negative meniscus front element of the cemented doublet L8+L9 in the third group",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 13.289631174145423,
      glass: "S-FPL51 (catalog equivalent; production supplier unspecified)",
      apdNote: "Panasonic's construction drawing marks this position as the ED lens, and nd 1.497 / νd 81.6 is a fluorophosphate ED glass; dPgF comes from the named glass's catalog dispersion formula.",
      dPgF: 0.030910738991392517,
      apd: "inferred",
      cemented: "L8+L9",
      role: "Low-dispersion biconvex positive rear element of the cemented doublet L8+L9 in the third group",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative (2 aspheric surfaces)",
      nd: 1.5338,
      vd: 55.6,
      indexReference: "d",
      fl: -20.62121360452842,
      glass:
        "Unmatched (Panasonic moulding material 1.53380/55.6, resin by the patent's stated preference; no catalog row; line indices from US 2017/0059832 A1)",
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
      dPgF: 0.01204,
      apdNote:
        "nC, nF and ng are the values Panasonic prints for this nd/νd material in US 2017/0059832 A1 (Table 23, P_g,F 0.56232); this patent prints nd and νd only.",
      role: "Biconcave negative focus element forming the fourth group, aspherical on both faces; moves toward the image for close focus",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Meniscus Positive",
      nd: 1.51742,
      vd: 52.1,
      indexReference: "d",
      fl: 49.5015779090591,
      glass: "E-CF6 (HOYA catalog equivalent, catalog νd 52.15; production supplier unspecified)",
      dPgF: 0.002771,
      apdNote: "dPgF comes from the named glass's catalog dispersion formula; the patent prints nd and νd only.",
      apd: false,
      role: "Positive meniscus, concave toward the object, forming the fixed fifth group",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 36.9439,
      d: 1.2,
      nd: 1.8061,
      elemId: 1,
      sd: 19.3,
    },
    {
      label: "2",
      R: 26.918,
      d: 8.0,
      nd: 1.5168,
      elemId: 2,
      sd: 18.3,
    },
    {
      label: "3",
      R: 268.0757,
      d: 0.7565,
      nd: 1.0,
      elemId: 0,
      sd: 18.3,
    },
    {
      label: "4",
      R: 74.561,
      d: 1.1,
      nd: 1.90366,
      elemId: 3,
      sd: 12.2,
    },
    {
      label: "5",
      R: 11.9,
      d: 5.7413,
      nd: 1.0,
      elemId: 0,
      sd: 9.2,
    },
    {
      label: "6",
      R: -55.593,
      d: 0.8,
      nd: 1.62041,
      elemId: 4,
      sd: 9,
    },
    {
      label: "7",
      R: 27.728,
      d: 1.7927,
      nd: 1.0,
      elemId: 0,
      sd: 9,
    },
    {
      label: "8",
      R: 22.824,
      d: 2.1,
      nd: 1.94595,
      elemId: 5,
      sd: 9,
    },
    {
      label: "9",
      R: 66.833,
      d: 26.1,
      nd: 1.0,
      elemId: 0,
      sd: 9,
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 1.0,
      nd: 1.0,
      elemId: 0,
      sd: 4.767906932187561,
    },
    {
      label: "11A",
      R: 24.859,
      d: 2.5,
      nd: 1.58699,
      elemId: 6,
      sd: 5.6,
    },
    {
      label: "12",
      R: -37.135,
      d: 5.8893,
      nd: 1.0,
      elemId: 0,
      sd: 5.6,
    },
    {
      label: "13A",
      R: 26.541,
      d: 1.66,
      nd: 1.5338,
      elemId: 7,
      sd: 5.8,
    },
    {
      label: "14A",
      R: -95.2529,
      d: 1.0,
      nd: 1.0,
      elemId: 0,
      sd: 5.8,
    },
    {
      label: "15",
      R: 117.8516,
      d: 0.6,
      nd: 1.738,
      elemId: 8,
      sd: 5.6,
    },
    {
      label: "16",
      R: 9.791,
      d: 3.25,
      nd: 1.497,
      elemId: 9,
      sd: 5.6,
    },
    {
      label: "17",
      R: -18.0607,
      d: 1.8729,
      nd: 1.0,
      elemId: 0,
      sd: 5.6,
    },
    {
      label: "18A",
      R: -215.46,
      d: 1.2143,
      nd: 1.5338,
      elemId: 10,
      sd: 5.3,
    },
    {
      label: "19A",
      R: 11.623,
      d: 5.7284,
      nd: 1.0,
      elemId: 0,
      sd: 5.3,
    },
    {
      label: "20",
      R: -1000.0,
      d: 4.0445,
      nd: 1.51742,
      elemId: 11,
      sd: 11.1,
    },
    {
      label: "21",
      R: -25.0079,
      d: 14.23627,
      nd: 1.0,
      elemId: 0,
      sd: 11.1,
    },
  ],
  asph: {
    "11A": {
      K: 0.0,
      A4: -3.5522e-5,
      A6: -1.08362e-6,
      A8: 5.77171e-8,
      A10: -1.67254e-9,
      A12: 1.9013e-11,
      A14: 0,
    },
    "13A": {
      K: 0.0,
      A4: -5.32137e-6,
      A6: -5.6696e-7,
      A8: 5.95887e-8,
      A10: 2.2884e-10,
      A12: -3.91081e-11,
      A14: 0,
    },
    "14A": {
      K: 0.0,
      A4: 3.67775e-5,
      A6: -3.06523e-6,
      A8: 2.38448e-7,
      A10: -5.97129e-9,
      A12: 3.84009e-11,
      A14: 0,
    },
    "18A": {
      K: 0.0,
      A4: -0.000215771,
      A6: 5.28419e-6,
      A8: -5.21315e-8,
      A10: 5.99872e-10,
      A12: -2.83037e-11,
      A14: 0,
    },
    "19A": {
      K: 0.0,
      A4: -0.000246865,
      A6: 3.87923e-6,
      A8: 2.22954e-8,
      A10: -3.01584e-9,
      A12: 3.30166e-11,
      A14: 0,
    },
  },
  var: {
    "3": [
      [0.7565, 0.7565],
      [7.6661, 7.6661],
      [35.5513, 35.5513],
    ],
    "9": [
      [26.1, 26.1],
      [7.693, 7.693],
      [2.709, 2.709],
    ],
    "17": [
      [1.8729, 2.2388],
      [5.217, 6.4036],
      [5.6168, 8.9986],
    ],
    "19A": [
      [5.7284, 5.3625],
      [13.1812, 11.9947],
      [23.4348, 20.0529],
    ],
    "21": [
      [14.23627, 14.2364],
      [14.23646, 14.2364],
      [14.23623, 14.2364],
    ],
  },
  varLabels: [
    ["3", "D3"],
    ["9", "D9"],
    ["17", "D17"],
    ["19A", "D19"],
    ["21", "BF"],
  ],
  zoomPositions: [12.4644, 26.8412, 57.7842],
  zoomApertureModel: "from-nominal-fno",
  publishedStations: {
    focus: [1],
    zoom: [0, 1, 2],
  },
  finiteConjugates: [
    {
      focusT: 1,
      zoomT: 0.0,
      objectDistanceMm: 250,
      distanceReference: "image-plane",
      source: "JP 6814931 B2, Example 2, Tables 7A and 8: printed close-focus gaps; object distance plus track is 250 mm as printed",
    },
    {
      focusT: 1,
      zoomT: 0.5,
      objectDistanceMm: 250,
      distanceReference: "image-plane",
      source: "JP 6814931 B2, Example 2, Tables 7A and 8: printed close-focus gaps; object distance plus track is 250 mm as printed",
    },
    {
      focusT: 1,
      zoomT: 1.0,
      objectDistanceMm: 250,
      distanceReference: "image-plane",
      source: "JP 6814931 B2, Example 2, Tables 7A and 8: printed close-focus gaps; object distance plus track is 250 mm as printed",
    },
  ],
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2",
      fromSurface: "4",
      toSurface: "9",
    },
    {
      text: "G3",
      fromSurface: "STO",
      toSurface: "17",
    },
    {
      text: "G4",
      fromSurface: "18A",
      toSurface: "19A",
    },
    {
      text: "G5",
      fromSurface: "20",
      toSurface: "21",
    },
  ],
  doublets: [
    {
      text: "L1+L2",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "L8+L9",
      fromSurface: "15",
      toSurface: "17",
    },
  ],
  closeFocusM: 0.25,
  focusDescription:
    "PUBLISHED: the patent prints infinity and a 250 mm object-to-image close state at all three zoom stations. For close focus L10 (G4) moves toward the image by 0.37, 1.19 and 3.38 mm at the wide, middle and tele stations; the stop travels with G3. Positions between the printed stations interpolate the printed gaps linearly and are not the production cam, so between the wide and middle stations the image can sit up to about 2.1 mm from best focus and the indicated close distance is approximate. The production 0.20 m minimum focus at the wide end is not in the patent and is not modelled.",
  nominalFno: [3.62207, 4.74375, 5.84637],
  fstopSeries: [3.62207, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,
  yScFill: 0.8,
} satisfies LensDataInput;

export default LENS_DATA;
