import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Four Thirds ZUIKO DIGITAL ED 40-150mm F4.0-5.6 (12 elements / 9 groups), not the
 * Micro Four Thirds 13/10 M.ZUIKO / R or the F2.8 PRO.
 * Source: US 2008/0062534 A1, Example 1 (¶0127, PDF pp. 23–24); the same table is
 * printed in US 7,450,319 B2, cols. 11–12. The A1 front page names no assignee;
 * the B2 names Olympus Imaging Corp.
 * Examples 1 and 3 both match the Olympus construction drawing (one ED element at
 * L8), with the same glasses and radii within about 1 %. Example 1 is used
 * because only it prints the OD = 900 mm close-focus rows. Which of the two went
 * into production is not established.
 * All R, d, nd, νd and printed gaps are literal, unscaled, d-line values.
 * OD is the object distance measured from the image plane (¶0126).
 * r11 = STO. r23–r24 are the camera filter block F, traced as rearPlates
 * (4.63 mm, then 2.50 mm air).
 * The iris uses the aberration-plot f-numbers 4.080 / 4.800 / 5.811; the table
 * rounds them to 4.1 / 4.8 / 5.8 and the lens is marketed as f/4–5.6.
 * The plots' 11.60 mm image height is not a published image-circle diameter.
 * Clear semi-diameters are inferred from the Fig. 1 optical outlines and the
 * axial beam; the patent has no clear-aperture column. Glass names are
 * catalog-equivalent proxies for the printed nd/νd.
 * checks.gapSagFrac 0.93: the r8–r9 air gap is 1.27 mm, and 0.93 is the smallest
 * 0.01 step that passes the axial telephoto beam through the inferred rims,
 * with no intersection or hidden trim.
 * The printed prescription's small paraxial image-plane offsets
 * (0.025–0.032 mm at infinity) are kept.
 * Only WE / ST / TE at infinity and OD = 900 mm are printed. The 30 intermediate
 * zoom stations and 11 intermediate focus keyframes are interpolated, with G2
 * solved as the compensator. D3 and D10 change with zoom and focus; D22 changes
 * with zoom only. G2 reverses during zooming (slightly imageward from WE to ST,
 * then objectward); the interpolation puts its turning point at ST.
 * Station labels sit on the first and last stations alone (WE, TE); ST is the
 * published middle station, zoom.stations[16].
 * Cemented components are C1 (L1–L2), C2 (L4–L5) and C3 (L8–L9), so they do not
 * collide with the gap labels D3, D10 and D22.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-digital-ed-40-150mm-f4-56",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO DIGITAL ED 40-150mm f/4.0-5.6",
  subtitle: "US 2008/0062534 A1, Example 1 — probable production design (Example 3 near-identical)",
  catalog: {
    lensMounts: ["four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "DESIGN f = 40.9–146.7 mm",
      "DESIGN F/4.08–5.81",
      "ALL SPHERICAL",
      "1 ED ELEMENT (MAKER)",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: {
      marketing: [40, 150],
      design: [40.9, 146.7],
    },
    fNumber: {
      marketing: 4,
      design: 4.08,
    },
  },
  source: {
    patentNumber: "US 2008/0062534 A1",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2008,
    authors: ["Atsujiro Ishii", "Hirohiko Kimata"],
    assignees: [],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6031,
      vd: 60.6,
      focalLengthMm: 80.53528,
      glass: "N-SK14 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L1",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8467,
      vd: 23.8,
      focalLengthMm: -221.32364,
      glass: "S-TIH53 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L2",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.8052,
      vd: 25.4,
      focalLengthMm: -56.30493,
      glass: "S-TIH6 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -28.64791,
      glass: "N-BK7 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L4",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.8467,
      vd: 23.8,
      focalLengthMm: 25.9794,
      glass: "S-TIH53 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L5",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -38.6493,
      glass: "S-LAH66 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.4875,
      vd: 70.2,
      focalLengthMm: 48.25981,
      glass: "S-FSL5 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 25.19387,
      glass: "S-FPL51 (catalog equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Olympus lists one ED element and its catalogue section colours the biconvex front of the third-group doublet, which is this νd 81.5 fluor-crown element.",
      diagramLabel: "L8",
      cemented: "C3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35.0,
      focalLengthMm: -31.82185,
      glass: "S-LAM66 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L9",
      cemented: "C3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.575,
      vd: 41.5,
      focalLengthMm: 80.88848,
      glass: "S-TIL27 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 94.29032,
      glass: "N-BK7 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -37.67657,
      glass: "S-LAH66 (catalog equivalent; supplier unconfirmed)",
      diagramLabel: "L12",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 86.481,
      d: 4.99,
      sd: 18.4,
      medium: 1,
    },
    {
      label: "2",
      R: -108.395,
      d: 2.1,
      sd: 18.4,
      medium: 2,
    },
    {
      label: "3",
      R: -259.407,
      sd: 18.0,
    },
    {
      label: "4",
      R: 35.302,
      d: 1.29,
      sd: 8.9,
      medium: 3,
    },
    {
      label: "5",
      R: 19.524,
      d: 4.38,
      sd: 8.9,
    },
    {
      label: "6",
      R: -56.707,
      d: 1.01,
      sd: 7.4,
      medium: 4,
    },
    {
      label: "7",
      R: 20.158,
      d: 2.76,
      sd: 7.4,
      medium: 5,
    },
    {
      label: "8",
      R: 226.009,
      d: 1.27,
      sd: 7.4,
    },
    {
      label: "9",
      R: -26.371,
      d: 1.0,
      sd: 7.6,
      medium: 6,
    },
    {
      label: "10",
      R: -229.62,
      sd: 7.6,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.2,
    },
    {
      label: "12",
      R: 69.845,
      d: 3.44,
      sd: 9.8,
      medium: 7,
    },
    {
      label: "13",
      R: -34.904,
      d: 0.15,
      sd: 9.8,
    },
    {
      label: "14",
      R: 24.185,
      d: 4.99,
      sd: 9.0,
      medium: 8,
    },
    {
      label: "15",
      R: -24.185,
      d: 1.18,
      sd: 9.0,
      medium: 9,
    },
    {
      label: "16",
      R: -482.892,
      d: 13.9,
      sd: 9.0,
    },
    {
      label: "17",
      R: -41.202,
      d: 2.01,
      sd: 9.5,
      medium: 10,
    },
    {
      label: "18",
      R: -22.237,
      d: 0.3,
      sd: 9.5,
    },
    {
      label: "19",
      R: 97.144,
      d: 1.84,
      sd: 8.3,
      medium: 11,
    },
    {
      label: "20",
      R: -97.144,
      d: 6.83,
      sd: 8.3,
    },
    {
      label: "21",
      R: -16.722,
      d: 0.94,
      sd: 8.3,
      medium: 12,
    },
    {
      label: "22",
      R: -40.266,
      sd: 8.3,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 40.9,
        nominalFNumber: 4.08,
        published: true,
        publishedFocus: [12],
        label: "WE",
      },
      {
        focalLengthMm: 42.32875,
        nominalFNumber: 4.125,
        published: false,
      },
      {
        focalLengthMm: 43.802761,
        nominalFNumber: 4.17,
        published: false,
      },
      {
        focalLengthMm: 45.353615,
        nominalFNumber: 4.215,
        published: false,
      },
      {
        focalLengthMm: 46.98802,
        nominalFNumber: 4.26,
        published: false,
      },
      {
        focalLengthMm: 48.713553,
        nominalFNumber: 4.305,
        published: false,
      },
      {
        focalLengthMm: 50.538815,
        nominalFNumber: 4.35,
        published: false,
      },
      {
        focalLengthMm: 52.47363,
        nominalFNumber: 4.395,
        published: false,
      },
      {
        focalLengthMm: 54.52928,
        nominalFNumber: 4.44,
        published: false,
      },
      {
        focalLengthMm: 56.718812,
        nominalFNumber: 4.485,
        published: false,
      },
      {
        focalLengthMm: 59.057431,
        nominalFNumber: 4.53,
        published: false,
      },
      {
        focalLengthMm: 61.563001,
        nominalFNumber: 4.575,
        published: false,
      },
      {
        focalLengthMm: 64.256712,
        nominalFNumber: 4.62,
        published: false,
      },
      {
        focalLengthMm: 67.163977,
        nominalFNumber: 4.665,
        published: false,
      },
      {
        focalLengthMm: 70.315647,
        nominalFNumber: 4.71,
        published: false,
      },
      {
        focalLengthMm: 73.74972,
        nominalFNumber: 4.755,
        published: false,
      },
      {
        focalLengthMm: 77.5,
        nominalFNumber: 4.8,
        published: true,
        publishedFocus: [12],
      },
      {
        focalLengthMm: 81.346872,
        nominalFNumber: 4.863187,
        published: false,
      },
      {
        focalLengthMm: 85.242156,
        nominalFNumber: 4.926375,
        published: false,
      },
      {
        focalLengthMm: 89.200003,
        nominalFNumber: 4.989562,
        published: false,
      },
      {
        focalLengthMm: 93.220886,
        nominalFNumber: 5.05275,
        published: false,
      },
      {
        focalLengthMm: 97.30539,
        nominalFNumber: 5.115938,
        published: false,
      },
      {
        focalLengthMm: 101.454213,
        nominalFNumber: 5.179125,
        published: false,
      },
      {
        focalLengthMm: 105.668164,
        nominalFNumber: 5.242312,
        published: false,
      },
      {
        focalLengthMm: 109.948167,
        nominalFNumber: 5.3055,
        published: false,
      },
      {
        focalLengthMm: 114.295256,
        nominalFNumber: 5.368688,
        published: false,
      },
      {
        focalLengthMm: 118.710581,
        nominalFNumber: 5.431875,
        published: false,
      },
      {
        focalLengthMm: 123.195409,
        nominalFNumber: 5.495062,
        published: false,
      },
      {
        focalLengthMm: 127.751132,
        nominalFNumber: 5.55825,
        published: false,
      },
      {
        focalLengthMm: 132.379264,
        nominalFNumber: 5.621437,
        published: false,
      },
      {
        focalLengthMm: 137.081454,
        nominalFNumber: 5.684625,
        published: false,
      },
      {
        focalLengthMm: 141.859488,
        nominalFNumber: 5.747813,
        published: false,
      },
      {
        focalLengthMm: 146.7,
        nominalFNumber: 5.811,
        published: true,
        publishedFocus: [12],
        label: "TE",
      },
    ],
  },
  focus: {
    closeFocusM: 0.9,
    keyframes: [
      0.0, 0.003, 0.0625, 0.125, 0.1875, 0.25, 0.3125, 0.375, 0.5, 0.625, 0.75, 0.875, 1.0,
    ],
    description:
      "PUBLISHED internal focus: negative G2 (L3–L6) moves objectward, by 1.30 / 3.33 / 4.97 mm at WE / ST / TE from infinity to OD = 900 mm (measured from the image plane); G1, G3 and the iris remain fixed. The patent prints infinity and 900 mm rows at those three zoom positions only; the other zoom and focus positions are interpolated, so their distance labels are approximate. The 0.9 m close focus matches Olympus's minimum focusing distance throughout the zoom.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 12,
        objectDistanceMm: 900,
        distanceReference: "image-plane",
        source: "US 2008/0062534 A1, Example 1, paragraph 0127 (PDF pp. 23-24): OD 900 mm rows; OD is object-to-image distance (paragraph 0126)",
      },
      {
        zoomStation: 16,
        keyframe: 12,
        objectDistanceMm: 900,
        distanceReference: "image-plane",
        source: "US 2008/0062534 A1, Example 1, paragraph 0127 (PDF pp. 23-24): OD 900 mm rows; OD is object-to-image distance (paragraph 0126)",
      },
      {
        zoomStation: 32,
        keyframe: 12,
        objectDistanceMm: 900,
        distanceReference: "image-plane",
        source: "US 2008/0062534 A1, Example 1, paragraph 0127 (PDF pp. 23-24): OD 900 mm rows; OD is object-to-image distance (paragraph 0126)",
      },
    ],
  },
  gaps: {
    "3": {
      label: "D3",
      values: [
        [
          2.31, 2.289457, 2.21577, 2.137967, 2.059743, 1.98109,
          1.901997, 1.822456, 1.661985, 1.499594, 1.335195,
          1.168696, 1.0,
        ],
        [
          4.452562, 4.432044, 4.354483, 4.272635, 4.190391,
          4.107742, 4.024676, 3.941185, 3.77288, 3.602742,
          3.430678, 3.256593, 3.080385,
        ],
        [
          6.598459, 6.577939, 6.496183, 6.40996, 6.323374, 6.236415,
          6.14907, 6.061331, 5.884619, 5.706189, 5.525943, 5.343782,
          5.159599,
        ],
        [
          8.74845, 8.727898, 8.641585, 8.550618, 8.45933,
          8.367711, 8.275747, 8.183428, 7.997675, 7.810353,
          7.621359, 7.430587, 7.237926,
        ],
        [
          10.903367, 10.882752, 10.791474, 10.695347, 10.598954,
          10.502282, 10.40532, 10.308053, 10.112553, 9.915677,
          9.717312, 9.517346, 9.315658,
        ],
        [
          13.064137, 13.043423, 12.946718, 12.84496, 12.743006,
          12.640843, 12.538455, 12.435827, 12.229797, 12.022633,
          11.814212, 11.604411, 11.3931,
        ],
        [
          15.231791, 15.210941, 15.108282, 15.000358, 14.892328,
          14.784175, 14.675882, 14.567432, 14.349994, 14.131726,
          13.912492, 13.692153, 13.470566,
        ],
        [
          17.407493, 17.386463, 17.277246, 17.162547, 17.047853,
          16.933146, 16.818405, 16.70361, 16.473782, 16.243502,
          16.012616, 15.780964, 15.548387,
        ],
        [
          19.592563, 19.571304, 19.454832, 19.332655, 19.210627,
          19.088723, 18.966917, 18.845188, 18.60186, 18.358552,
          18.11508, 17.871261, 17.626911,
        ],
        [
          21.788509, 21.766965, 21.64243, 21.511966, 21.381829,
          21.251989, 21.122415, 20.993078, 20.734998, 20.47752,
          20.220422, 19.963487, 19.706503,
        ],
        [
          23.997077, 23.975185, 23.84164, 23.701942, 23.5628,
          23.424172, 23.286021, 23.148307, 22.874048, 22.601111,
          22.329223, 22.058122, 21.787551,
        ],
        [
          26.220303, 26.197987, 26.054315, 25.904276, 25.75508,
          25.606674, 25.459008, 25.312033, 25.019965, 24.730108,
          24.442121, 24.155678, 23.870471,
        ],
        [
          28.460588, 28.437761, 28.282631, 28.120934, 27.96045,
          27.801105, 27.642834, 27.48557, 27.173817, 26.865377,
          26.559812, 26.256717, 25.955705,
        ],
        [
          30.720802, 30.697357, 30.529164, 30.354236, 30.180994,
          30.00934, 29.839181, 29.670429, 29.336819, 29.007888,
          28.683071, 28.361847, 28.043734,
        ],
        [
          33.004416, 32.980226, 32.797011, 32.606944, 32.419178,
          32.233576, 32.05001, 31.868359, 31.510356, 31.158737,
          30.812755, 30.471739, 30.135074,
        ],
        [
          35.3157, 35.290606, 35.089941, 34.882393, 34.677954,
          34.476426, 34.277632, 34.081402, 33.696024, 33.319164,
          32.949828, 32.587134, 32.23029,
        ],
        [
          37.66, 37.633804, 37.412625, 37.184673, 36.960902, 36.741031,
          36.524801, 36.311974, 35.89568, 35.490593, 35.095374,
          34.708852, 34.33,
        ],
        [
          38.527361, 38.501368, 38.27166, 38.035246, 37.803476,
          37.576026, 37.352602, 37.132933, 36.703896, 36.287167,
          35.881246, 35.484837, 35.096804,
        ],
        [
          39.356192, 39.330341, 39.091995, 38.847036, 38.607209,
          38.372146, 38.141511, 37.914999, 37.473256, 37.044954,
          36.628427, 36.222242, 35.82515,
        ],
        [
          40.150018, 40.124255, 39.87715, 39.623552, 39.375605,
          39.132888, 38.89502, 38.661659, 38.207232, 37.767419,
          37.340372, 36.924512, 36.518473,
        ],
        [
          40.911965, 40.886239, 40.630245, 40.367907, 40.111766,
          39.861346, 39.616218, 39.375995, 38.9089, 38.457627,
          38.020136, 37.594694, 37.17981,
        ],
        [
          41.644818, 41.619082, 41.354055, 41.082865, 40.81845,
          40.560272, 40.307848, 40.060747, 39.580989, 39.118299,
          38.670431, 38.235491, 37.811858,
        ],
        [
          42.351062, 42.325272, 42.05106, 41.770894, 41.498117,
          41.232119, 40.972359, 40.718356, 40.22593, 39.751857,
          39.293673, 38.849311, 38.417015,
        ],
        [
          43.03293, 43.007045, 42.72348, 42.434207, 42.152969,
          41.879082, 41.61194, 41.351007, 40.845898, 40.360468,
          39.892019, 39.438306, 38.997426,
        ],
        [
          43.69243, 43.666411, 43.373313, 43.074789, 42.784985,
          42.503131, 42.228554, 41.960658, 41.442844, 40.946074,
          40.467406, 40.004402, 39.555011,
        ],
        [
          44.331376, 44.305186, 44.002361, 43.694432, 43.395946,
          43.106042, 42.823972, 42.549074, 42.018522, 41.510423,
          41.021573, 40.549333, 40.091497,
        ],
        [
          44.951413, 44.925017, 44.612256, 44.294755, 43.987462,
          43.689418, 43.399789, 43.117845, 42.574514, 42.055089,
          41.556088, 41.074662, 40.60844,
        ],
        [
          45.554038, 45.5274, 45.204479, 44.877227, 44.560994,
          44.25471, 43.957451, 43.668412, 43.112252, 42.581496,
          42.072369, 41.581799, 41.107247,
        ],
        [
          46.140616, 46.113703, 45.780381, 45.443185, 45.117867,
          44.803236, 44.49827, 44.202081, 43.633035, 43.090937,
          42.571701, 42.072026, 41.589192,
        ],
        [
          46.712397, 46.685175, 46.341193, 45.993848, 45.65929,
          45.336198, 45.02344, 44.720042, 44.138042, 43.584584,
          43.055253, 42.546504, 42.055432,
        ],
        [
          47.270529, 47.242965, 46.888045, 46.53033, 46.186368,
          45.85469, 45.53405, 45.223377, 44.628349, 44.063506,
          43.524087, 43.006291, 42.507019,
        ],
        [
          47.81607, 47.788132, 47.421976, 47.053654, 46.700111,
          46.359717, 46.031097, 45.713079, 45.104939, 44.528679,
          43.979173, 43.452352, 42.944916,
        ],
        [
          48.35, 48.321654, 47.943942, 47.564761, 47.201448, 46.852196,
          46.515492, 46.190052, 45.568708, 44.980995, 44.421399,
          43.88557, 43.37,
        ],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [
          17.47, 17.490513, 17.563605, 17.640783, 17.718382, 17.79641,
          17.874878, 17.953794, 18.113015, 18.274156, 18.437305,
          18.602554, 18.77,
        ],
        [
          17.116188, 17.136678, 17.213681, 17.294943, 17.376601,
          17.458665, 17.541144, 17.62405, 17.791182, 17.960149,
          18.131041, 18.303954, 18.47899,
        ],
        [
          16.759041, 16.779535, 16.86077, 16.946446, 17.032485,
          17.118898, 17.205695, 17.292888, 17.468506, 17.645842,
          17.824994, 18.006062, 18.189151,
        ],
        [
          16.3978, 16.418328, 16.504157, 16.594616, 16.685396,
          16.776508, 16.867964, 16.959775, 17.144512, 17.330819,
          17.518797, 17.708554, 17.900199,
        ],
        [
          16.031633, 16.052226, 16.143057, 16.238716, 16.33464,
          16.430843, 16.527337, 16.624135, 16.818697,
          17.014636, 17.212063, 17.411092, 17.611842,
        ],
        [
          15.659613, 15.680306, 15.776602, 15.87793, 15.979454,
          16.081189, 16.183147, 16.285345, 16.490515, 16.696821,
          16.904382, 17.113324, 17.323775,
        ],
        [
          15.280709, 15.30154, 15.403828, 15.51136, 15.619,
          15.726762, 15.834665, 15.942725, 16.159381, 16.376868,
          16.59532, 16.814878, 17.035684,
        ],
        [
          14.893757, 14.91477, 15.023653, 15.138, 15.252342,
          15.366698, 15.481087, 15.59553, 15.824656, 16.054232,
          16.284415, 16.515364, 16.747238,
        ],
        [
          14.497437, 14.518681, 14.634856, 14.75672, 14.878435,
          15.000027, 15.12152, 15.242937, 15.48564, 15.728323,
          15.97117, 16.214364, 16.458089,
        ],
        [
          14.090241, 14.111771, 14.236047, 14.366238, 14.496101,
          14.625668, 14.754968, 14.884031, 15.141565, 15.398496,
          15.655047, 15.911434, 16.167872,
        ],
        [
          13.670423, 13.692304, 13.825626, 13.965089, 14.103997,
          14.24239, 14.380307, 14.517786, 14.791577, 15.064045,
          15.335464, 15.606097, 15.876199,
        ],
        [
          13.235947, 13.258253, 13.401739, 13.551584, 13.700585,
          13.848795, 13.996265, 14.143046, 14.434723, 14.724189,
          15.011786, 15.297837, 15.582654,
        ],
        [
          12.784412, 12.807232, 12.962213, 13.123753, 13.284082,
          13.44327, 13.601385, 13.758493, 14.069933, 14.378061,
          14.683313, 14.986096, 15.286795,
        ],
        [
          12.312948, 12.336388, 12.504469, 12.679279, 12.852404,
          13.023941, 13.193983, 13.362617, 13.695993, 14.02469,
          14.349273, 14.670263, 14.988141,
        ],
        [
          11.818084, 11.842271, 12.025411, 12.2154, 12.403087,
          12.588611, 12.772099, 12.953672, 13.311519, 13.662982,
          14.008807, 14.349667, 14.686176,
        ],
        [
          11.29555, 11.320642, 11.52127, 11.728778, 11.933179,
          12.134667, 12.333423, 12.529613, 12.914913, 13.291695,
          13.660953, 14.02357, 14.380335,
        ],
        [
          10.74, 10.766196, 10.987375, 11.215327, 11.439098, 11.658969,
          11.875199, 12.088026, 12.50432, 12.909407, 13.304626,
          13.691148, 14.07,
        ],
        [
          10.000764, 10.026755, 10.256426, 10.4928, 10.724531,
          10.951942, 11.175328, 11.394958, 11.823916, 12.240568,
          12.64641, 13.042741, 13.430696,
        ],
        [
          9.300058, 9.325905, 9.564177, 9.809058, 10.048806,
          10.283791, 10.514348, 10.740782, 11.182369, 11.610515,
          12.026885, 12.432915, 12.82985,
        ],
        [
          8.634357, 8.660114, 8.907108, 9.160588, 9.408418,
          9.651019, 9.888769, 10.122013, 10.576205, 11.015784,
          11.442597, 11.858223, 12.264027,
        ],
        [
          8.000535, 8.026253, 8.282099, 8.544281, 8.800265,
          9.050529, 9.295501, 9.535568, 10.00235, 10.45331,
          10.890489, 11.315619, 11.73019,
        ],
        [
          7.395807, 7.421534, 7.686374, 7.95737, 8.221589,
          8.479572, 8.7318, 8.978707, 9.458074, 9.920373,
          10.36785, 10.8024, 11.225642,
        ],
        [
          6.817688, 6.843466, 7.117456, 7.397387, 7.66993, 7.935694,
          8.195219, 8.448988, 8.940945, 9.414549, 9.872265,
          10.316157, 10.747985,
        ],
        [
          6.263945, 6.289817, 6.573122, 6.862121, 7.143085,
          7.4167, 7.683568, 7.944228, 8.448789, 8.933673,
          9.401574, 9.854741, 10.295074,
        ],
        [
          5.73257, 5.758574, 6.051375, 6.349586, 6.639078,
          6.920619, 7.194883, 7.462467, 7.979656, 8.475801,
          8.953844, 9.416223, 9.864989,
        ],
        [
          5.221749, 5.247922, 5.550413, 5.85799, 6.156125, 6.445676,
          6.727395, 7.001942, 7.531791, 8.039186, 8.527333, 8.99887,
          9.456003,
        ],
        [
          4.729837, 4.756215, 5.068604, 5.385714, 5.692616,
          5.99027, 6.279508, 6.561061, 7.103611, 7.622255,
          8.120475, 8.60112, 9.06656,
        ],
        [
          4.255337, 4.281954, 4.604466, 4.931288, 5.247092,
          5.552947, 5.849776, 6.138385, 6.693685, 7.223582,
          7.73185, 8.22156, 8.695253,
        ],
        [
          3.796884, 3.823775, 4.156651, 4.493377, 4.818227,
          5.132389, 5.436887, 5.732606, 6.300715, 6.841876,
          7.360174, 7.858911, 8.340808,
        ],
        [
          3.353228, 3.380426, 3.723924, 4.070762, 4.404811,
          4.727396, 5.039646, 5.342536, 5.92352, 6.475963,
          7.004278, 7.512012, 8.002068,
        ],
        [
          2.923221, 2.950759, 3.305158, 3.662327, 4.005742,
          4.336872, 4.656965, 4.967091, 5.561026, 6.124775,
          6.663101, 7.179803, 7.677981,
        ],
        [
          2.505805, 2.533715, 2.899313, 3.267049, 3.620006,
          3.959815, 4.287848, 4.605281, 5.212249, 5.787337,
          6.335671, 6.86132, 7.367584,
        ],
        [
          2.1, 2.128316, 2.505433, 2.883989, 3.246677, 3.595304,
          3.931383, 4.256198, 4.876292, 5.462755, 6.021101,
          6.55568, 7.07,
        ],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [
          28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43, 28.43,
        ],
        [
          28.76625, 28.76625, 28.76625, 28.76625, 28.76625, 28.76625, 28.76625, 28.76625, 28.76625, 28.76625, 28.76625,
          28.76625, 28.76625,
        ],
        [
          29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025, 29.1025,
          29.1025,
        ],
        [
          29.43875, 29.43875, 29.43875, 29.43875, 29.43875, 29.43875, 29.43875, 29.43875, 29.43875, 29.43875, 29.43875,
          29.43875, 29.43875,
        ],
        [
          29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775, 29.775,
        ],
        [
          30.11125, 30.11125, 30.11125, 30.11125, 30.11125,
          30.11125, 30.11125, 30.11125, 30.11125, 30.11125,
          30.11125, 30.11125, 30.11125,
        ],
        [
          30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475, 30.4475,
          30.4475,
        ],
        [
          30.78375, 30.78375, 30.78375, 30.78375, 30.78375, 30.78375, 30.78375, 30.78375, 30.78375, 30.78375, 30.78375,
          30.78375, 30.78375,
        ],
        [
          31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12, 31.12,
        ],
        [
          31.45625, 31.45625, 31.45625, 31.45625, 31.45625, 31.45625, 31.45625, 31.45625, 31.45625, 31.45625, 31.45625,
          31.45625, 31.45625,
        ],
        [
          31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925, 31.7925,
          31.7925,
        ],
        [
          32.12875, 32.12875, 32.12875, 32.12875, 32.12875,
          32.12875, 32.12875, 32.12875, 32.12875, 32.12875,
          32.12875, 32.12875, 32.12875,
        ],
        [
          32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465, 32.465,
        ],
        [
          32.80125, 32.80125, 32.80125, 32.80125, 32.80125, 32.80125, 32.80125, 32.80125, 32.80125, 32.80125, 32.80125,
          32.80125, 32.80125,
        ],
        [
          33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375, 33.1375,
          33.1375,
        ],
        [
          33.47375, 33.47375, 33.47375, 33.47375, 33.47375, 33.47375, 33.47375, 33.47375, 33.47375, 33.47375, 33.47375,
          33.47375, 33.47375,
        ],
        [
          33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81, 33.81,
        ],
        [
          35.105, 35.105, 35.105, 35.105, 35.105,
          35.105, 35.105, 35.105, 35.105, 35.105,
          35.105, 35.105, 35.105,
        ],
        [
          36.4, 36.4, 36.4, 36.4, 36.4,
          36.4, 36.4, 36.4, 36.4, 36.4,
          36.4, 36.4, 36.4,
        ],
        [
          37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695, 37.695,
        ],
        [
          38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99, 38.99,
        ],
        [
          40.285, 40.285, 40.285, 40.285, 40.285,
          40.285, 40.285, 40.285, 40.285, 40.285,
          40.285, 40.285, 40.285,
        ],
        [
          41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58, 41.58,
        ],
        [
          42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875, 42.875,
        ],
        [
          44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17, 44.17,
        ],
        [
          45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465, 45.465,
        ],
        [
          46.76, 46.76, 46.76, 46.76, 46.76,
          46.76, 46.76, 46.76, 46.76, 46.76,
          46.76, 46.76, 46.76,
        ],
        [
          48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055, 48.055,
        ],
        [
          49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35, 49.35,
        ],
        [
          50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645, 50.645,
        ],
        [
          51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94, 51.94,
        ],
        [
          53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235, 53.235,
        ],
        [
          54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53, 54.53,
        ],
      ],
    },
  },
  aperture: {
    fStops: [4.08, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  rearPlates: [
    {
      label: "F",
      thicknessMm: 4.63,
      nd: 1.5163,
      vd: 64.1,
      glass: "S-BSL7 (catalog equivalent; supplier unconfirmed)",
      gapAfterMm: 2.5,
      source: "US 2008/0062534 A1, Example 1, r23-r24: camera-side filter block F, separate from the 12 lens elements",
    },
  ],
  groups: [
    {
      text: "G1 (+)",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2 (−) focus",
      fromSurface: "4",
      toSurface: "10",
    },
    {
      text: "G3 (+) with iris",
      fromSurface: "STO",
      toSurface: "22",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "C3",
      fromSurface: "14",
      toSurface: "16",
    },
  ],
  layout: {
    yScFill: 0.8,
  },
  checks: {
    gapSagFrac: 0.93,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
