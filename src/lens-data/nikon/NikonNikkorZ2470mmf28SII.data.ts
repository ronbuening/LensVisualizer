import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKKOR Z 24-70mm f/2.8 S II research model: WO2024214585A1, Example 2.
 * Strong construction-based association, not an exact manufactured prescription.
 * Source: Table 2 (PDF pp.34-36), Figure 3 (p.69), equation 0157 (p.29).
 * All 25 native rows retained; stop 14=STO; 24 refracting surfaces; 14 elements / 10
 * air-separated components / 7 functional groups. No scaling or synthetic plate.
 * Numeric nd/vd media retained. All fourteen elements carry exact-coordinate catalog-equivalent
 * glass labels (catalog-compatible inferences, not supplier claims); L1, L4 and L13 use the
 * HIKARI rows Q-LAK53S, J-LASF03 and Q-SK15S.
 * Native K maps to application K=nativeK-1. Blank A12 cells and unlisted A14
 * are implemented as zero and remain distinguished in evidence.json.
 * L10 dPgF is calculated from rounded condition(3-1)/(3-2), not copied glass data.
 * The source has three infinity and three near (165 mm) spacing states.
 * Calculated conjugates support 165 mm from the first vertex, about 319.46 mm
 * object-to-image. Production MFD is separate. Middle EFL 49.9991579434 is a
 * computed schema coordinate; its exact focal length and F-number are not printed.
 * nominalFNumber 2.91 at the middle station is an explicit constant-aperture assumption.
 * The inferred iris schedule is calibrated from nominalFNumber, not measured diameters.
 * Every physical SD is estimated from Figure 3, then constrained by ray/geometry
 * checks. 2A=24.0 is the figure's optical extent of L1's rear surface (a flat annulus
 * lies beyond it; traced rays reach 23.1). 3=23.1 and 19/21=12.9 follow the figure (about 23.7
 * and 12.2-12.9) and clear the wide/near full-field chief (21.12 mm at surface 3) and
 * the tele/near on-axis marginal ray (12.77 / 12.60 mm at surfaces 19 / 21).
 * 24=16.0 is likewise the figure's optical extent of L14's concave front surface (a flat
 * annulus continues to the 18 mm rim kept on 25A; rays passed by the other rims reach 15.4).
 * Shared junction SDs 7=18.0 / 20=13.0 mm are ray-envelope refinements beyond the
 * figure estimate. These are not published SDs.
 * Zoom/focus interpolation is schematic; no CODE V cam, aperture, plate,
 * third-party glass assignment, vignetting or focus fitting has been imported.
 * Native tele table computes EFL 67.879045 and TL 154.469, versus rounded 67.87
 * and 154.46 overview. Source-rounding discrepancies are retained without edits.
 * Optical calculations and integration limits are documented in the dossier.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-z-24-70mm-f28-s-ii",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-70mm f/2.8 S II",
  subtitle: "WO 2024/214585 A1 EXAMPLE 2 — strong construction-based association; production prescription unconfirmed",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.4,
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 24.70–67.87 mm",
      "DESIGN F/2.91",
      "5 ASPHERICAL SURFACES / 3 ELEMENTS",
      "2 ED (INFERRED)",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: [24, 70], design: [24.7, 67.87] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "WO 2024/214585 A1",
    patentYear: 2024,
    authors: ["Fumiaki Ohtake"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.69343,
      vd: 53.3,
      indexReference: "d",
      focalLengthMm: -52.721856,
      glass: "Q-LAK53S (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Front negative aspheric meniscus in fixed G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67.0,
      indexReference: "d",
      focalLengthMm: -66.062128,
      glass: "J-PSKH4 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Negative member of the G1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: 70.993744,
      glass: "NBFD25 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Positive member of the G1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.97,
      indexReference: "d",
      focalLengthMm: 51.451725,
      glass: "J-LASF03 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Positive member of moving G2.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -75.872428,
      glass: "J-SF03 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Negative partner in the net-positive G2 doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus, convex to object",
      nd: 1.59349,
      vd: 67.0,
      indexReference: "d",
      focalLengthMm: 131.902834,
      glass: "J-PSKH4 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Separate positive meniscus in G3.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus, convex to object",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: -96.84145,
      glass: "NBFD25 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Negative partner in the G3 cemented pair.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      indexReference: "d",
      focalLengthMm: 48.236548,
      glass: "J-FKH1 (catalog-compatible inference; patent supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Inferred from coordinates: J-FKH1-class low-dispersion crown (νd 82.57; catalog dPgF +0.034) at a position Nikon marks as ED. The patent does not designate it.",
      role: "Low-dispersion positive member in G3.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.85883,
      vd: 30.0,
      indexReference: "d",
      focalLengthMm: -28.533215,
      glass: "NBFD30 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Negative singlet immediately behind the stop in G4.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 34.947041,
      glass: "E-FDS1 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      apdNote:
        "Derived from rounded patent condition PgF-0.64435+0.00168*vd=0.030; engine normal-line conversion. Not measured line indices.",
      role: "Positive singlet in net-negative G4; patent partial-dispersion condition applies.",
      dPgF: 0.03059176,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      indexReference: "d",
      focalLengthMm: 28.126864,
      glass: "J-PSKH4 (catalog-compatible inference; patent supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Inferred from coordinates and position: J-PSKH4-class phosphate crown (νd 67.00; catalog dPgF +0.005) at the second position Nikon marks as ED. L2 and L6 share the pair but are not marked. The patent does not designate it.",
      role: "Positive member of first focusing group G5.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus, concave to object",
      nd: 1.77047,
      vd: 29.74,
      indexReference: "d",
      focalLengthMm: -41.695096,
      glass: "NBFD29 (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Negative partner in the G5 focusing doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus, concave to object",
      nd: 1.62291,
      vd: 58.3,
      indexReference: "d",
      focalLengthMm: 124.598859,
      glass: "Q-SK15S (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Dual-aspheric positive meniscus, second focusing group G6.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus, concave to object",
      nd: 1.5168,
      vd: 64.13,
      indexReference: "d",
      focalLengthMm: -57.500388,
      glass: "J-BK7A (catalog-compatible inference; patent supplier unspecified)",
      apd: false,
      role: "Rear negative meniscus in G7, with aspheric exit.",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 81.5606,
      d: 2.5,
      sd: 30,
      medium: 1,
      asphere: {
        K: 1.0,
        A4: -3.346e-10,
        A6: -1.631e-9,
        A8: 8.861e-13,
        A10: -3.347e-16,
        A14: 0,
      },
    },
    {
      label: "2A",
      R: 24.9268,
      d: 14.774,
      sd: 24.0,
      asphere: {
        K: -1.0,
        A4: 5.692e-6,
        A6: 1.259e-9,
        A8: -3.304e-12,
        A10: 7.355e-15,
        A12: -9.172e-18,
        A14: 0,
      },
    },
    { label: "3", R: -317.9158, d: 1.6, sd: 23.1, medium: 2 },
    { label: "4", R: 44.8065, d: 5.605, sd: 23.1, medium: 3 },
    { label: "5", R: 161.5239, sd: 23.1 },
    { label: "6", R: 60.9829, d: 5.0, sd: 17.8, medium: 4 },
    { label: "7", R: -124.9111, d: 1.2, sd: 18.0, medium: 5 },
    { label: "8", R: 132.8335, sd: 17.8 },
    { label: "9", R: 59.0944, d: 3.4, sd: 18, medium: 6 },
    { label: "10", R: 235.9189, d: 0.15, sd: 18 },
    { label: "11", R: 51.3297, d: 1.2, sd: 18, medium: 7 },
    { label: "12", R: 31.3382, d: 9.1, sd: 18, medium: 8 },
    { label: "13", R: -92.8181, sd: 18 },
    { label: "STO", R: "flat", d: 3.97 },
    { label: "15", R: -41.6498, d: 1.1, sd: 13, medium: 9 },
    { label: "16", R: 60.2574, d: 0.97, sd: 13 },
    { label: "17", R: 44.6327, d: 4.2, sd: 13.5, medium: 10 },
    { label: "18", R: -111.0085, sd: 13.5 },
    { label: "19", R: 72.1996, d: 6.2, sd: 12.9, medium: 11 },
    { label: "20", R: -21.0188, d: 1.0, sd: 13.0, medium: 12 },
    { label: "21", R: -62.0569, sd: 12.9 },
    {
      label: "22A",
      R: -42.2359,
      d: 2.9,
      sd: 14,
      medium: 13,
      asphere: {
        K: -0.2062,
        A4: -2.319e-5,
        A6: -3.004e-8,
        A8: 1.183e-9,
        A10: -2.355e-12,
        A14: 0,
      },
    },
    {
      label: "23A",
      R: -28.0725,
      sd: 14,
      asphere: {
        K: -0.7275,
        A4: -9.524e-6,
        A6: -4.572e-8,
        A8: 1.082e-9,
        A10: -1.851e-12,
        A14: 0,
      },
    },
    { label: "24", R: -25.2494, d: 1.3, sd: 16.0, medium: 14 },
    {
      label: "25A",
      R: -170.9229,
      sd: 18,
      asphere: {
        K: 0,
        A4: -1.431e-5,
        A6: 2.423e-8,
        A8: -1.539e-10,
        A10: 5.368e-13,
        A12: -6.402e-16,
        A14: 0,
      },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24.7, closeFocusM: 0.3194500909372666, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 49.9991579434, closeFocusM: 0.3194652520418364, published: true, publishedFocus: [1] },
      { focalLengthMm: 67.87, closeFocusM: 0.3194478952142493, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "from-nominal-fno",
  },

  focus: {
    closeFocusM: 0.31946,
    description:
      "Published infinity and near-distance (165 mm) spacing rows at wide/middle/tele. G5 and G6 move independently objectward. The 165 mm first-vertex reference is inferred from conjugate calculations; object-to-image endpoint is about 0.31946 m. Continuous zoom/focus interpolation is schematic, not a source cam or calibrated focus law.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [42.598, 42.598],
        [5.259, 5.259],
        [1.238, 1.238],
      ],
    },
    "8": {
      label: "D8",
      values: [
        [2.356, 2.356],
        [12.947, 12.947],
        [2.305, 2.305],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [1.0, 1.0],
        [13.547, 13.547],
        [22.4, 22.4],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [11.961, 9.304],
        [13.171, 5.626],
        [12.959, 2.164],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [5.559, 5.825],
        [15.041, 16.172],
        [16.04, 16.256],
      ],
    },
    "23A": {
      label: "D23",
      values: [
        [12.963, 15.353],
        [5.848, 12.261],
        [3.863, 14.442],
      ],
    },
    "25A": {
      label: "D25",
      values: [
        [11.855, 11.855],
        [22.479, 22.479],
        [29.495, 29.495],
      ],
    },
  },

  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 11 },

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "8" },
    { text: "G3", fromSurface: "9", toSurface: "13" },
    { text: "G4", fromSurface: "STO", toSurface: "18" },
    { text: "G5", fromSurface: "19", toSurface: "21" },
    { text: "G6", fromSurface: "22A", toSurface: "23A" },
    { text: "G7", fromSurface: "24", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
