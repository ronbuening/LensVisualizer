import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * SAMSUNG 18-200mm f/3.5-6.3 ED OIS — EP 2 469 319 A2 (Samsung Electronics Co., Ltd.; inventor Makoto Misaka;
 * published 27 June 2012), Example 2, ¶0198–0207, pp. 16–17; cross-section FIG. 3 (zoom lens 101).
 * Scale 1, millimetres: R, d, nd, νd, the three aspheres (K = 0, A4–A10, standard 1+K form), the stop at surface 16
 * and the six variable gaps at the three printed stations (f = 18.50 / 68.50 / 194.15 mm, F3.55 / 5.81 / 6.50) are as
 * printed. Surfaces 33–34, a 2.24 mm plate (nd 1.51633, νd 64.1) drawn as LPF in FIG. 3, are a rear plate with the
 * printed 0.60 mm to the image plane. Traced EFL is 18.50 / 68.41 / 193.87 mm, and the infinity image lies within
 * 0.03 mm of the printed image plane at every station.
 * Groups G1–G4 are the patent's G11–G14 (+ − + +). G3 holds the weak negative meniscus L8, the stop, the focusing
 * element L9, the cemented triplet L10–L12 and the OIS doublet L13–L14 (the patent's fourth, first, second and third
 * part groups). G3 is bracketed by those part groups, lettered after Table 1's f3f, f3a, f3b and f3c: G3f (L8), G3a
 * (L9), G3b (L10–L12) and G3c (L13–L14), so the movement view tracks L9 apart from the rest of G3, which moves as one
 * body. All four groups and the stop move toward the object from wide to tele (¶0145). D5, D13, D25 and D32
 * change with zoom only; D16 (after the stop) and D18 change with zoom and focus. Only the three printed stations are
 * authored; linear interpolation between them leaves the infinity image up to 5.6 mm ahead of the image plane near
 * 36 mm and up to 10.7 mm behind it near 141 mm.
 * Focus: L9 moves toward the image (¶0147). ¶0202 prints its travel at an object distance of 0.5 m: 0.691, 1.750 and
 * 6.822 mm at wide, middle and tele. The close rows add that travel to D16 and take it from D18. They focus at
 * 499.4 / 500.2 / 500.2 mm from object to image, so the 0.5 m is measured from the image plane, and the conjugates
 * use that reference. The OIS doublet's decentring is not modelled.
 * Stop: the iris radius at each station follows from the printed F-number; the patent prints no stop diameter.
 * Semi-diameters are not printed. They were estimated from FIG. 3 (wide panel, 8.25 px/mm at 300 dpi, scale proved on
 * vertex spacings and the S7, S24 and S29 arcs) and checked by ray trace; S7's cap ends at 9.4 mm with the flat land
 * FIG. 3 draws out to 13.5 mm. FIG. 3 draws L7 (9.9 mm) almost as tall as L6, meeting it at the rim; L6's rear and L7's
 * front close their 0.14 mm air gap at 9.43 mm, so L7 stops at 9.3 mm, 0.006 mm clear of L6, and checks.gapSagFrac
 * 0.96 admits that pair. FIG. 3 steps L16 (9.1 mm) below L17 (9.8 mm) at their cemented face, which one
 * semi-diameter cannot draw; both stay square at 9.7 mm. These rims vignette the wide-open corners heavily, and at
 * 0.5 m at tele L9 and the front of the triplet, both drawn at about 8.5 mm in FIG. 3A–3C, also clip the axial beam.
 * Glass: d-line. Fifteen elements carry HOYA catalog equivalents that match the printed nd and νd. The three
 * aspherical elements print indices 0.0019–0.0026 below HOYA moulding glasses with the same νd (within 0.1):
 * L9 M-BACD5N, L13 M-LAC130, L15 M-BACD12. They take those dispersion curves while the trace keeps the printed nd;
 * the offset is consistent with post-moulding indices, which the patent does not state.
 * Source inconsistencies: the US family member US 2012/0154913 A1 prints η15 = 1.53123 for this example's L15. EP
 * prints 1.58123, as do EP Examples 1 and 3 for the same lens. With 1.53123 the EFL becomes 20.94 / 88.33 / 259.88 mm
 * and the image falls 4.4–24.8 mm behind the printed image plane, so the US value is a misprint and the EP value is
 * used. ¶0192 and ¶0205 call the near object distance "0.5mm"; the ¶0202 heading and ¶0207 give 0.5 m.
 */
const LENS_DATA = {
  schema: 2,
  key: "samsung-nx-18-200mm-f35-63-ed-ois",
  maker: "Samsung",
  name: "SAMSUNG 18-200mm f/3.5-6.3 ED OIS",
  subtitle: "EP 2 469 319 A2, Example 2 — construction-based production correlation",
  visible: true,
  catalog: {
    lensMounts: ["samsung-nx"],
    imageFormat: "aps-c",
    specs: [
      "18 ELEMENTS / 13 GROUPS",
      "DESIGN f = 18.5–194.15 mm",
      "DESIGN F/3.55–6.50",
      "3 ASPHERICAL SURFACES / 3 ELEMENTS",
      "2 ED ELEMENTS",
    ],
    elementCount: 18,
    groupCount: 13,
    focalLengthMm: {
      marketing: [18, 200],
      design: [18.5, 194.15],
    },
    fNumber: {
      marketing: 3.5,
      design: 3.55,
    },
  },
  source: {
    patentNumber: "EP 2 469 319 A2",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 2012,
    authors: ["Makoto Misaka"],
    assignees: ["Samsung Electronics Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -167.71,
      glass: "FD60 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative meniscus at the front of G1, cemented to L2.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 106.34,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Samsung lists two ED elements; the printed nd/νd (1.49700/81.6) fit an FCD1-class ED glass.",
      role: "Low-dispersion positive element of the front cemented doublet.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 116.88,
      glass: "BACD16 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus closing the positive first group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -18.56,
      glass: "TAFD5G (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong negative meniscus at the front of the negative variator G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -26.5,
      glass: "TAFD5G (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative element of G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 16.32,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint positive element of G2; corrects the group's colour.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -23.45,
      glass: "TAF3D (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative element closing G2.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: -297.47,
      glass: "LAF2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Weak negative meniscus ahead of the stop; sets G3's power balance and L9's focus sensitivity.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58673,
      vd: 61.3,
      focalLengthMm: 36.98,
      glass: "M-BACD5N (HOYA moulding glass; nearest catalog row to patent nd 1.58673, νd 61.3; supplier unconfirmed)",
      role: "Single-element focusing group behind the stop; moves toward the image for close focus.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 27.63,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Samsung lists two ED elements; the printed nd/νd (1.49700/81.6) fit an FCD1-class ED glass.",
      role: "Low-dispersion positive front element of the cemented triplet.",
      cemented: "T1",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -27.34,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative centre of the cemented triplet.",
      cemented: "T1",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.2,
      focalLengthMm: 51.37,
      glass: "E-CF6 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive rear element of the cemented triplet.",
      cemented: "T1",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6909,
      vd: 53.3,
      focalLengthMm: -15.03,
      glass: "M-LAC130 (HOYA moulding glass; nearest catalog row to patent nd 1.69090, νd 53.3; supplier unconfirmed)",
      role: "Negative element of the OIS doublet, aspherical on its front face.",
      cemented: "C2",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      focalLengthMm: 29.01,
      glass: "E-FD10 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Flint positive meniscus of the OIS doublet, which shifts across the axis to stabilize the image.",
      cemented: "C2",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58123,
      vd: 59.5,
      focalLengthMm: 31.01,
      glass: "M-BACD12 (HOYA moulding glass; nearest catalog row to patent nd 1.58123, νd 59.5; supplier unconfirmed)",
      role: "Positive element at the front of G4, aspherical on its rear face.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.2,
      focalLengthMm: 19.29,
      glass: "E-CF6 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the G4 cemented doublet.",
      cemented: "C3",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -10.06,
      glass: "TAFD5G (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong negative element of the G4 cemented doublet.",
      cemented: "C3",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.9,
      focalLengthMm: 36.77,
      glass: "E-FL5 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Last positive element of G4.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 108.692,
      d: 1.5,
      sd: 26.1,
      medium: 1,
    },
    {
      label: "2",
      R: 59.849,
      d: 8.13,
      sd: 26.1,
      medium: 2,
    },
    {
      label: "3",
      R: -431.693,
      d: 0.15,
      sd: 25.3,
    },
    {
      label: "4",
      R: 52.307,
      d: 5.8,
      sd: 24,
      medium: 3,
    },
    {
      label: "5",
      R: 179.739,
      sd: 24,
    },
    {
      label: "6",
      R: 141.166,
      d: 1.3,
      sd: 13.5,
      medium: 4,
    },
    {
      label: "7",
      R: 13.905,
      d: 5.96,
      sd: 9.4,
      rimExtensionSd: 13.5,
    },
    {
      label: "8",
      R: -32.856,
      d: 1.1,
      sd: 10.3,
      medium: 5,
    },
    {
      label: "9",
      R: 68.778,
      d: 0.15,
      sd: 10.3,
    },
    {
      label: "10",
      R: 30.271,
      d: 5.54,
      sd: 10,
      medium: 6,
    },
    {
      label: "11",
      R: -23.286,
      d: 0.14,
      sd: 10,
    },
    {
      label: "12",
      R: -21.908,
      d: 1,
      sd: 9.3,
      medium: 7,
    },
    {
      label: "13",
      R: 138.173,
      sd: 9.3,
    },
    {
      label: "14",
      R: -67.159,
      d: 1.2,
      sd: 7.8,
      medium: 8,
    },
    {
      label: "15",
      R: -97.151,
      d: 1,
      sd: 7.8,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "17",
      R: 37.586,
      d: 3.2,
      sd: 8.5,
      medium: 9,
    },
    {
      label: "18A",
      R: -49.701,
      sd: 8.5,
      asphere: {
        K: 0,
        A4: 8.6468e-6,
        A6: -6.0751e-9,
        A8: 0,
        A10: 0,
      },
    },
    {
      label: "19",
      R: 17.435,
      d: 4.95,
      sd: 8.5,
      medium: 10,
    },
    {
      label: "20",
      R: -58.546,
      d: 0.9,
      sd: 8.5,
      medium: 11,
    },
    {
      label: "21",
      R: 38.554,
      d: 2.43,
      sd: 7.7,
      medium: 12,
    },
    {
      label: "22",
      R: -83.758,
      d: 2.5,
      sd: 7.7,
    },
    {
      label: "23A",
      R: -77.659,
      d: 1.2,
      sd: 7.2,
      asphere: {
        K: 0,
        A4: 1.198e-5,
        A6: -3.0461e-8,
        A8: 0,
        A10: 0,
      },
      medium: 13,
    },
    {
      label: "24",
      R: 12.066,
      d: 2.87,
      sd: 7.2,
      medium: 14,
    },
    {
      label: "25",
      R: 25.316,
      sd: 7.2,
    },
    {
      label: "26",
      R: 25.223,
      d: 4.68,
      sd: 9.5,
      medium: 15,
    },
    {
      label: "27A",
      R: -58.82,
      d: 0.15,
      sd: 9.5,
      asphere: {
        K: 0,
        A4: 1.4007e-5,
        A6: 1.2894e-8,
        A8: -9.8111e-10,
        A10: 0,
      },
    },
    {
      label: "28",
      R: 46.924,
      d: 7.57,
      sd: 9.7,
      medium: 16,
    },
    {
      label: "29",
      R: -11.984,
      d: 1.4,
      sd: 9.7,
      medium: 17,
    },
    {
      label: "30",
      R: 29.549,
      d: 0.43,
      sd: 9.7,
    },
    {
      label: "31",
      R: 27.366,
      d: 4.74,
      sd: 10.1,
      medium: 18,
    },
    {
      label: "32",
      R: -91.492,
      sd: 10.1,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 18.5,
        nominalFNumber: 3.55,
        label: "Wide",
        publishedFocus: [1],
      },
      {
        focalLengthMm: 68.5,
        nominalFNumber: 5.81,
        label: "Mid",
        publishedFocus: [1],
      },
      {
        focalLengthMm: 194.15,
        nominalFNumber: 6.5,
        label: "Tele",
        publishedFocus: [1],
      },
    ],
  },
  focus: {
    closeFocusM: 0.5,
    description:
      "PUBLISHED infinity and 0.5 m states at all three printed focal lengths. Inner focus: only L9, the single positive element behind the stop, moves toward the image, by 0.691, 1.750 and 6.822 mm at the wide, middle and tele settings (patent ¶0202); every other gap, the stop and the image plane stay fixed. The 0.5 m object-to-image distance is also Samsung's minimum focus distance; magnification there is about 0.05×, 0.15× and 0.28×. Positions between the printed states are interpolated.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 500,
        distanceReference: "image-plane",
        source:
          "EP 2 469 319 A2, Example 2: object distance 0.5 m and L9 travel 0.691 mm (¶0202) applied to the printed D16 and D18; the travel focuses at 0.5 m from the image plane.",
      },
      {
        zoomStation: 1,
        keyframe: 1,
        objectDistanceMm: 500,
        distanceReference: "image-plane",
        source:
          "EP 2 469 319 A2, Example 2: object distance 0.5 m and L9 travel 1.750 mm (¶0202) applied to the printed D16 and D18; the travel focuses at 0.5 m from the image plane.",
      },
      {
        zoomStation: 2,
        keyframe: 1,
        objectDistanceMm: 500,
        distanceReference: "image-plane",
        source:
          "EP 2 469 319 A2, Example 2: object distance 0.5 m and L9 travel 6.822 mm (¶0202) applied to the printed D16 and D18; the travel focuses at 0.5 m from the image plane.",
      },
    ],
  },
  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.1, 1.1],
        [26.203, 26.203],
        [48.034, 48.034],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [19.455, 19.455],
        [6.684, 6.684],
        [1.916, 1.916],
      ],
    },
    STO: {
      label: "D16",
      values: [
        [6.812, 7.503],
        [4.301, 6.051],
        [1.2, 8.022],
      ],
    },
    "18A": {
      label: "D18",
      values: [
        [2.288, 1.597],
        [4.799, 3.049],
        [7.9, 1.078],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [6.328, 6.328],
        [3.191, 3.191],
        [2, 2],
      ],
    },
    "32": {
      label: "D32",
      values: [
        [20.757, 20.757],
        [52.134, 52.134],
        [60.319, 60.319],
      ],
    },
  },
  aperture: {
    fStops: [3.55, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  rearPlates: [
    {
      label: "LPF",
      thicknessMm: 2.24,
      nd: 1.51633,
      vd: 64.1,
      gapAfterMm: 0.6,
      source:
        "EP 2 469 319 A2, Example 2, surfaces 33–34 (drawn as LPF in FIG. 3), with the printed 0.60 mm to the image plane. The patent gives no plate diameter.",
    },
  ],
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "G2",
      fromSurface: "6",
      toSurface: "13",
    },
    {
      text: "G3f",
      fromSurface: "14",
      toSurface: "15",
    },
    {
      text: "G3a",
      fromSurface: "17",
      toSurface: "18A",
    },
    {
      text: "G3b",
      fromSurface: "19",
      toSurface: "22",
    },
    {
      text: "G3c",
      fromSurface: "23A",
      toSurface: "25",
    },
    {
      text: "G4",
      fromSurface: "26",
      toSurface: "32",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "T1",
      fromSurface: "19",
      toSurface: "22",
    },
    {
      text: "C2",
      fromSurface: "23A",
      toSurface: "25",
    },
    {
      text: "C3",
      fromSurface: "28",
      toSurface: "30",
    },
  ],
  layout: {
    yScFill: 0.3,
  },
  checks: {
    gapSagFrac: 0.96,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
