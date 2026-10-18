import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2025-043459 A, Numerical Example 1. A design correlated with the production lens, not a factory prescription.
 * 20 lens elements / 15 air-separated groups; four aspherical surfaces on three elements.
 * No scaling and no correction of patent values: R, d, nd and νd are as printed.
 * NOTE ON GLASS: the patent prints nd, νd and PgF for every glass. Each `glass` label names the one HOYA or OHARA
 * catalog glass whose nd, νd and PgF equal the print and selects its dispersion curve; supplier and melt are not
 * identified. `dPgF` is the printed PgF measured from the engine's normal line, 0.6438 − 0.001682 νd.
 * Patent surfaces 37–38 are the filter FL next to the image, modeled as a camera-side rear plate with a fixed
 * 1.0 mm trailing gap; the printed back-focus variation (at most 0.0004 mm) is carried in d36.
 * PUBLISHED focus: infinity and 1.0 m at three zoom stations. The marketed 0.65 m wide-end minimum is not modeled.
 * Zoom-only gaps d5, d7, d10, d12; zoom and focus gaps d26, d30, d32; d36 carries the sub-micron printed variation.
 * LABELS: the patent names the groups G1–G8 and no elements, so elements are L1–L20 front to rear in the diagram,
 * inspector and prose. Gap labels use the patent's lowercase d; D1–D5 are the five cemented pairs.
 * L4 and L5 are tagged apd "patent": conditions (3) and (4) bound the mean Abbe number and mean anomalous
 * dispersion of the negative lenses of G2 and G3. The other six special-glass tags follow Sigma's diagram.
 * G7 reverses direction across the three infinity zoom stations; the middle station is kept as printed.
 * The patent calls the stop and G5 fixed, but their printed gaps sum to 27.0814, 27.0803 and 27.0820 mm at the
 * three infinity stations, more than rounding allows; no gap is adjusted.
 * The close-focus aberration figures are labelled F2.92, 3.01 and 3.00; the model does not vary the iris with focus.
 * The sliders interpolate the printed gaps linearly. That is not the production zoom or focus cam, and positions
 * between the printed stations can be out of focus (about 4 mm at zoomT 0.75); no spacing is invented to fix it.
 * NOTE ON APERTURE: the builder sets the iris radius at each station from the printed infinity f-number.
 * It is a calibration, not independent evidence of the unpublished stop diameter.
 * NOTE ON SEMI-DIAMETERS: not published. Estimated from the FIG. 1 cross-section (wide end, infinity), measured on
 * the 420 dpi page raster at 0.1275 mm/px, and floor-checked by exact real-ray trace at all six published states
 * (axial ray at the nominal f-number with the infinity iris held; corner chief ray to Y = 21.63 mm).
 * Concave faces 30, 34 and 35 stop where the drawn curve ends, not at the flat mounting annulus outside it;
 * cemented junctions 2 and 17 follow the smaller partner's rim. The figure's stop marks read 16.7 mm.
 * Exception: L4 keeps a 24 mm rim on both faces (6 and 7). FIG. 1 draws its blank at 23.0 mm and ends the rear
 * concave curve at 19.3 mm inside a flat annulus. L4 is the one element set away from the figure, a deliberate
 * choice to hold wide-corner illumination: the modeled geometric transmission at the 16.5° wide corner is 54 %
 * as modeled, 52 % with a square 23.0 mm rim and 44 % with the rear face at 19.3 mm.
 * The camera-side plate is always traced. No teleconverter is modeled.
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-70-200mm-f28-dg-dn-os-sports",
  maker: "Sigma",
  name: "SIGMA 70-200mm f/2.8 DG DN OS | Sports",
  subtitle: "JP 2025-043459 A, Numerical Example 1; construction correlation",

  catalog: {
    lensMounts: ["l-mount", "sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "20 ELEMENTS / 15 GROUPS",
      "DESIGN f = 72.10–194.00 mm",
      "DESIGN F/2.91",
      "4 ASPHERICAL SURFACES / 3 ELEMENTS",
    ],
    elementCount: 20,
    groupCount: 15,
    focalLengthMm: { marketing: [70, 200], design: [72.1, 194.0] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "JP 2025-043459 A",
    patentYear: 2025,
    authors: ["Masakazu Hibino"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 43.94,
      focalLengthMm: -254.7385635,
      glass: "NBFD11 (HOYA; equals the patent nd and PgF, catalog νd 43.93; supplier unconfirmed)",
      role: "Negative front member of the cemented doublet that opens the fixed first group.",
      diagramLabel: "L1",
      cemented: "D1",
      dPgF: -0.008692919999999993,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 197.18641148,
      glass: "FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the six FLD positions in Sigma's construction diagram (elements 2, 3, 4, 10, 13, 19); dPgF comes from the patent's printed PgF.",
      role: "Positive low-dispersion member of the first group's cemented doublet.",
      diagramLabel: "L2",
      cemented: "D1",
      dPgF: 0.04975819999999992,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 196.20852779,
      glass: "FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the six FLD positions in Sigma's construction diagram (elements 2, 3, 4, 10, 13, 19); dPgF comes from the patent's printed PgF.",
      role: "Positive low-dispersion singlet completing the fixed first group.",
      diagramLabel: "L3",
      dPgF: 0.04975819999999992,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -119.97562234,
      glass: "FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent conditions (3) and (4) bound the mean Abbe number and mean anomalous dispersion of the negative lenses of G2 and G3, which are this element and L5 (Example 1: 85.30 and 0.042); also one of the six FLD positions in Sigma's construction diagram (elements 2, 3, 4, 10, 13, 19); dPgF comes from the patent's printed PgF.",
      role: "Negative low-dispersion meniscus; the whole of zoom group G2.",
      diagramLabel: "L4",
      dPgF: 0.04975819999999992,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: -66.19298961,
      glass: "FCD705 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent conditions (3) and (4) bound the mean Abbe number and mean anomalous dispersion of the negative lenses of G2 and G3, which are L4 and this element (Example 1: 85.30 and 0.042); also one of the two SLD positions in Sigma's construction diagram (elements 5 and 20); dPgF comes from the patent's printed PgF.",
      role: "Negative low-dispersion member of the cemented zoom group G3.",
      diagramLabel: "L5",
      cemented: "D2",
      dPgF: 0.02329099999999995,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.85883,
      vd: 30.0,
      focalLengthMm: 154.74625211,
      glass: "NBFD30 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive dense-flint member of the cemented zoom group G3.",
      diagramLabel: "L6",
      cemented: "D2",
      dPgF: 0.0045599999999998975,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.8707,
      vd: 40.73,
      focalLengthMm: 125.94710388,
      glass: "TAFD32 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive meniscus forming zoom group G4; converges the beam ahead of the stop.",
      diagramLabel: "L7",
      dPgF: -0.0070921400000000245,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: 112.92505137,
      glass: "M-NBFD130 (HOYA moulding glass; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive aspherical meniscus directly behind the stop; first element of fixed group G5.",
      diagramLabel: "L8",
      dPgF: -0.005892140000000046,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -61.46396654,
      glass: "NBFD15 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Negative meniscus cemented to L10; first doublet of G5.",
      diagramLabel: "L9",
      cemented: "D3",
      dPgF: 0.0005601400000000423,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 63.78677306,
      glass: "FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the six FLD positions in Sigma's construction diagram (elements 2, 3, 4, 10, 13, 19); dPgF comes from the patent's printed PgF.",
      role: "Positive low-dispersion member of the first G5 doublet, cemented to L9.",
      diagramLabel: "L10",
      cemented: "D3",
      dPgF: 0.04975819999999992,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 139.03151303,
      glass: "S-NPH1 (OHARA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive member of the cemented image-stabilization doublet in G5.",
      diagramLabel: "L11",
      cemented: "D4",
      dPgF: 0.02518231999999998,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -42.22266018,
      glass: "M-LAC130 (HOYA moulding glass; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Negative aspherical member of the cemented image-stabilization doublet in G5.",
      diagramLabel: "L12",
      cemented: "D4",
      dPgF: -0.007617600000000113,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 50.3639688,
      glass: "FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the six FLD positions in Sigma's construction diagram (elements 2, 3, 4, 10, 13, 19); dPgF comes from the patent's printed PgF.",
      role: "Positive low-dispersion member of the last cemented doublet in G5.",
      diagramLabel: "L13",
      cemented: "D5",
      dPgF: 0.04975819999999992,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -49.94704225,
      glass: "NBFD25 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Negative dense-flint member of the last cemented doublet in G5.",
      diagramLabel: "L14",
      cemented: "D5",
      dPgF: 0.00880229999999993,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7645,
      vd: 49.09,
      focalLengthMm: 40.0371732,
      glass: "L-LAH91 (OHARA low-Tg moulding glass; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive double-aspherical element closing fixed group G5.",
      diagramLabel: "L15",
      dPgF: -0.008430620000000055,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.86966,
      vd: 20.02,
      focalLengthMm: 134.01253963,
      glass: "FDS20-W (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive meniscus leading focus group G6, which moves toward the image for close focus.",
      diagramLabel: "L16",
      dPgF: 0.03337363999999987,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: -45.769447,
      glass: "TAC6 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Negative meniscus that makes focus group G6 negative overall.",
      diagramLabel: "L17",
      dPgF: -0.00849776000000002,
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.651,
      vd: 56.24,
      focalLengthMm: 52.73377705,
      glass: "S-LAL54Q (OHARA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      role: "Positive focus group G7, moving toward the object for close focus.",
      diagramLabel: "L18",
      dPgF: -0.007204320000000042,
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -89.48169928,
      glass: "FCD100 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the six FLD positions in Sigma's construction diagram (elements 2, 3, 4, 10, 13, 19); dPgF comes from the patent's printed PgF.",
      role: "Negative low-dispersion front element of the fixed rear group G8.",
      diagramLabel: "L19",
      dPgF: 0.04975819999999992,
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: -107.80553411,
      glass: "FCD1 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "One of the two SLD positions in Sigma's construction diagram (elements 5 and 20); dPgF comes from the patent's printed PgF.",
      role: "Negative low-dispersion meniscus closing the fixed rear group G8.",
      diagramLabel: "L20",
      dPgF: 0.03236801999999994,
    },
  ],

  surfaces: [
    { label: "1", R: 204.5881, d: 2.0, sd: 35, medium: 1 },
    { label: "2", R: 100.7496, d: 8.2048, sd: 34.6, medium: 2 },
    { label: "3", R: -580.7362, d: 0.187, sd: 34.6 },
    { label: "4", R: 85.9171, d: 8.145, sd: 34.4, medium: 3 },
    { label: "5", R: -41123.6542, sd: 34.4 },
    { label: "6", R: 200.2421, d: 1.5, sd: 24, medium: 4 },
    { label: "7", R: 41.4556, sd: 24 },
    { label: "8", R: -90.8162, d: 1.1, sd: 18.7, medium: 5 },
    { label: "9", R: 61.0863, d: 2.2411, sd: 18.7, medium: 6 },
    { label: "10", R: 111.1309, sd: 18.4 },
    { label: "11", R: 49.2382, d: 2.7307, sd: 19, medium: 7 },
    { label: "12", R: 87.0547, sd: 19 },
    { label: "STO", R: "flat", d: 1.201 },
    {
      label: "14A",
      R: 54.8111,
      d: 3.6155,
      sd: 18,
      medium: 8,
      asphere: { K: 0, A4: -1.70699e-06, A6: -9.83571e-10, A8: -1.48085e-12, A10: 2.58015e-16, A12: 0, A14: 0 },
    },
    { label: "15", R: 133.7051, d: 0.9441, sd: 18 },
    { label: "16", R: 64.7697, d: 1.05, sd: 17.3, medium: 9 },
    { label: "17", R: 27.869, d: 7.1018, sd: 16.6, medium: 10 },
    { label: "18", R: 123138.0915, d: 2.6175, sd: 16.6 },
    { label: "19", R: -86.3491, d: 2.2798, sd: 16.2, medium: 11 },
    { label: "20", R: -49.4003, d: 1.69, sd: 16.2, medium: 12 },
    {
      label: "21A",
      R: 72.9054,
      d: 1.4361,
      sd: 16.2,
      asphere: {
        K: 0,
        A4: -2.05493e-06,
        A6: 1.55966e-08,
        A8: -2.58234e-10,
        A10: 2.85196e-12,
        A12: -2.04687e-14,
        A14: 9.26512e-17,
        A16: -2.51983e-19,
        A18: 3.72342e-22,
        A20: -2.27627e-25,
      },
    },
    { label: "22", R: 43.1721, d: 8.0877, sd: 16.6, medium: 13 },
    { label: "23", R: -42.3401, d: 1.05, sd: 16.6, medium: 14 },
    { label: "24", R: -5373.3673, d: 0.8069, sd: 16.7 },
    {
      label: "25A",
      R: 71.0779,
      d: 6.351,
      sd: 17,
      medium: 15,
      asphere: { K: 5.73849, A4: -6.68946e-06, A6: 6.52223e-09, A8: -4.7766e-11, A10: 1.22707e-13, A12: -1.23679e-16, A14: 0 },
    },
    {
      label: "26A",
      R: -51.6774,
      sd: 17,
      asphere: { K: -0.04777, A4: 5.98132e-07, A6: 3.49487e-09, A8: -2.96468e-11, A10: 7.5959e-14, A12: -6.8443e-17, A14: 0 },
    },
    { label: "27", R: -361.8675, d: 2.0048, sd: 15.5, medium: 16 },
    { label: "28", R: -88.3811, d: 0.15, sd: 15.5 },
    { label: "29", R: 425.009, d: 0.8, sd: 15.5, medium: 17 },
    { label: "30", R: 31.9317, sd: 13.5 },
    { label: "31", R: 52.9222, d: 5.8799, sd: 18, medium: 18 },
    { label: "32", R: -93.436, sd: 18 },
    { label: "33", R: -135.9088, d: 1.0, sd: 17.1, medium: 19 },
    { label: "34", R: 55.0218, d: 6.3943, sd: 15.5 },
    { label: "35", R: -36.614, d: 1.0, sd: 15.5, medium: 20 },
    { label: "36", R: -116.6815, sd: 17.2 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.1, nominalFNumber: 2.91, label: "Wide" },
      { focalLengthMm: 118.0, nominalFNumber: 2.89 },
      { focalLengthMm: 194.0, nominalFNumber: 2.92, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 1.0,
    description:
      "PUBLISHED: the patent tabulates infinity and a 1.0 m object-to-image distance at all three zoom stations. For close focus G6 moves toward the image by 1.32, 3.57 and 7.84 mm at 72.1, 118 and 194 mm, and G7 toward the object by 1.22, 2.77 and 7.42 mm. Positions between the printed states interpolate the printed gaps linearly and are not the production focus cam. The marketed 0.65 m minimum focus at the wide end is not in the patent and is not modeled.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 778.0034,
        distanceReference: "first-surface",
        source: "JP 2025-043459 A, Numerical Example 1, close-focus spacing table (PDF pp. 18–19), wide station.",
      },
      {
        zoomStation: 1,
        keyframe: 1,
        objectDistanceMm: 778.0028,
        distanceReference: "first-surface",
        source: "JP 2025-043459 A, Numerical Example 1, close-focus spacing table (PDF pp. 18–19), middle station.",
      },
      {
        zoomStation: 2,
        keyframe: 1,
        objectDistanceMm: 778.0037,
        distanceReference: "first-surface",
        source: "JP 2025-043459 A, Numerical Example 1, close-focus spacing table (PDF pp. 18–19), tele station.",
      },
    ],
  },

  gaps: {
    "5": {
      label: "d5",
      values: [
        [2.0, 2.0],
        [36.6277, 36.6277],
        [68.5506, 68.5506],
      ],
    },
    "7": {
      label: "d7",
      values: [
        [16.5679, 16.5679],
        [12.1976, 12.1976],
        [8.0959, 8.0959],
      ],
    },
    "10": {
      label: "d10",
      values: [
        [39.4276, 39.4276],
        [16.4079, 16.4079],
        [1.0, 1.0],
      ],
    },
    "12": {
      label: "d12",
      values: [
        [23.4999, 23.4999],
        [16.2637, 16.2637],
        [3.8477, 3.8477],
      ],
    },
    "26A": {
      label: "d26",
      values: [
        [9.0036, 10.322],
        [7.6236, 11.1975],
        [3.0, 10.8357],
      ],
    },
    "30": {
      label: "d30",
      values: [
        [11.0632, 8.5288],
        [11.0431, 4.6959],
        [20.0809, 4.8235],
      ],
    },
    "32": {
      label: "d32",
      values: [
        [6.0146, 7.2305],
        [7.4133, 10.187],
        [3.0011, 10.4232],
      ],
    },
    "36": {
      label: "d36",
      values: [
        [29.351, 29.3509],
        [29.3513, 29.351],
        [29.351, 29.3506],
      ],
    },
  },

  aperture: { fStops: [2.8, 3.2, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 11 },

  rearPlates: [
    {
      label: "FL",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (HOYA; equals the patent nd, νd and PgF; supplier unconfirmed)",
      dPgF: -0.0015156000000000613,
      gapAfterMm: 1.0,
      source:
        "JP 2025-043459 A, Numerical Example 1, surfaces 37–38 (PDF p. 18); filter FL on the camera side in Figure 1. The printed back-focus variation (at most 0.0004 mm) is carried in d36.",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "7" },
    { text: "G3", fromSurface: "8", toSurface: "10" },
    { text: "G4", fromSurface: "11", toSurface: "12" },
    { text: "G5", fromSurface: "STO", toSurface: "26A" },
    { text: "G6", fromSurface: "27", toSurface: "30" },
    { text: "G7", fromSurface: "31", toSurface: "32" },
    { text: "G8", fromSurface: "33", toSurface: "36" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21A" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
