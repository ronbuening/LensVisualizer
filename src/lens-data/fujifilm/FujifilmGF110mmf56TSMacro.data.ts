import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2026/0003158 A1, Example 18, Figure 39, Tables 45–47. Eleven elements in nine groups; names follow patent L11–L18 in G1 and L21–L23 in G2, with physical IDs 1–11 retained. Surfaces 20 and 21 on L23 are aspherical. Patent ED means full effective diameter; non-stop sd values are the printed ED/2, confirmed against Figure 39 (drawn about 5–7 % larger overall, with both cemented doublets square-cut). The printed stop diameter is 17.440 mm; the model derives its radius from design f/5.76. K = KA - 1 = 0, with all A4–A20 terms retained. Physical elements 1–9 carry OHARA/HOYA catalog-equivalent labels and trace on the catalog curves, with production supplier and melts unspecified; FCD1 and E-CF6 differ from the printed θgF by about 0.0009. L22 matches HIKARI J-KZFH4 in nd, νd and θgF and traces on that curve; L23 has no catalog match and keeps a three-term Cauchy curve that reproduces the printed nd, νd and θgF. L23's exact triple recurs in Examples 4–8; L22's is unique to Example 18, which alone does not prove optimiser-floating. No glass is named by the patent.
 * The first eight lenses and stop move 23.9818 mm objectward as DD15 increases from the printed infinity value 2.9000 mm to 26.8818 mm at −0.5000×. Intermediate spacings are calculated in inverse object-to-image distance, not a measured focusing cam. The printed near state implies 257.939149977679 mm from object to first vertex and 0.426259949977679 m from object to sensor with the physical plate train; Fujifilm specifies 0.43 m. The 4.419 micrometre infinity focus residual and calculated near magnification −0.499875264 are retained.
 * Fujifilm specifies ±15 mm shift and ±10° tilt. Movements use a fixed camera/sensor frame and 0.1 mm / 0.1° control steps. The tilt reference is 109.9746 mm objectward of the image plane, following the principal-point guidance in paragraph [0276], Figure 42 and Example 18's infinity EFL; it is not a measured production hinge position. The 44×33 mm corner reaches about 27.5° under combined extreme movements, beyond the patent's 21.7° half-field (43.4° full field), and vignettes. Shift alone reaches about 40.5 mm image height, within the roughly 43.8 mm patent design height.
 * The plane-parallel plate at surfaces 22–23 (3.2 mm, n = 1.51680) and terminal 0.9874 mm gap are represented in surface 21's air-equivalent spacing: 78.8866 + 3.2/1.51680 + 0.9874 = 81.9837 mm. This preserves reference-wavelength paraxial focus, EFL and focus travel but omits the plate's spherochromatism. The physical infinity vertex-to-image length is 144.339 mm; the air-equivalent model track is 143.249 mm.
 * The surface 19–20 gap retains positive physical separation with gapSagFrac 0.911; 0.90 and 0.91 do not accommodate the printed rims. Printed effective diameters and gaps are retained. Off-axis marginal rays vignette at surface 1. MTF convergence depends on field, spectrum and spatial frequency; intermediate finite-focus MTF is unavailable. Numerical convergence does not establish measured production performance.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "fujifilm-gf-110mm-f56-ts-macro",
  "maker": "Fujifilm",
  "name": "FUJIFILM FUJINON GF 110mm f/5.6 T/S Macro",
  "subtitle": "US 2026/0003158 A1, Example 18 — Fujifilm Corporation",
  "catalog": {
    "specs": [
      "11 ELEMENTS / 9 GROUPS",
      "DESIGN f = 109.97 mm",
      "DESIGN F/5.76",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "±15 mm SHIFT / ±10° TILT"
    ],
    "imageFormat": "44x33",
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 110,
      "design": 109.9746
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 5.76
    },
    "lensMounts": [
      "fujifilm-g"
    ]
  },
  "source": {
    "patentNumber": "US 2026/0003158 A1",
    "example": { "label": "Example 18", "id": "18" },
    "patentYear": 2026,
    "authors": [
      "Daiki Komatsu",
      "Takuya Tanaka",
      "Hiroki Saito"
    ],
    "assignees": [
      "Fujifilm Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 1",
      "type": "Biconcave Negative",
      "nd": 1.65412,
      "vd": 39.67999999999953,
      "glass": "S-NBH5 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -35.06162522000231,
      "role": "Negative front singlet of the moving first group."
    },
    {
      "id": 2,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6968,
      "vd": 55.45999999999932,
      "glass": "LAC14 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 88.39556785445122,
      "role": "Positive second singlet of the moving first group."
    },
    {
      "id": 3,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.60342,
      "vd": 38.03000000000001,
      "glass": "S-TIM5 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 37.87440328249985,
      "role": "Positive third singlet ahead of the first cemented doublet."
    },
    {
      "id": 4,
      "name": "L14",
      "diagramLabel": "L14",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.60999999999909,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Fujifilm's construction drawing places ED glass at physical element 4 (patent L14), consistent with the patent's nd = 1.49700 and νd = 81.61; HOYA FCD1 is the coordinate equivalent, and the production melt is not published.",
      "focalLengthMm": 33.411874098271845,
      "role": "Positive low-dispersion member of the first cemented doublet, ahead of the stop."
    },
    {
      "id": 5,
      "name": "L15",
      "diagramLabel": "L15",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.51742,
      "vd": 52.20000000000048,
      "glass": "E-CF6 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -27.61492311351216,
      "role": "Negative rear member of the first cemented doublet, ahead of the stop."
    },
    {
      "id": 6,
      "name": "L16",
      "diagramLabel": "L16",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.83481,
      "vd": 42.720000000000255,
      "glass": "S-LAH55V (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -18.834495304764154,
      "role": "Negative front member of the second cemented doublet, behind the stop."
    },
    {
      "id": 7,
      "name": "L17",
      "diagramLabel": "L17",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.51742,
      "vd": 52.20000000000048,
      "glass": "E-CF6 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 34.086496804537006,
      "role": "Positive rear member of the second cemented doublet, behind the stop."
    },
    {
      "id": 8,
      "name": "L18",
      "diagramLabel": "L18",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.60999999999909,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Fujifilm's construction drawing places ED glass at physical element 8 (patent L18), consistent with the patent's nd = 1.49700 and νd = 81.61; HOYA FCD1 is the coordinate equivalent, and the production melt is not published.",
      "focalLengthMm": 52.37966664468047,
      "role": "Positive low-dispersion singlet at the rear of the moving first group."
    },
    {
      "id": 9,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "Element 9",
      "type": "Meniscus Positive (Convex to Image)",
      "nd": 1.83481,
      "vd": 42.73999999999984,
      "glass": "S-LAH55V (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 77.66911595716358,
      "role": "Positive meniscus at the front of the fixed rear group."
    },
    {
      "id": 10,
      "name": "L22",
      "diagramLabel": "L22",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.55298,
      "vd": 55.06999999999859,
      "glass": "J-KZFH4 (HIKARI catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -72.66260363901536,
      "role": "Negative singlet between the rear positive meniscus and final aspherical element."
    },
    {
      "id": 11,
      "name": "L23",
      "diagramLabel": "L23",
      "label": "Element 11",
      "type": "Meniscus Negative (Two Aspheric Surfaces, Convex to Image)",
      "nd": 1.5848,
      "vd": 58.709999999999084,
      "glass": "Unmatched (source nd=1.5848, dispersion=58.71)",
      "apd": false,
      "nC": 1.5818023039681584,
      "nF": 1.5917631283592333,
      "ng": 1.5971535280867073,
      "indexReferenceNote": "Three-term Cauchy fitted to source nd, Vd and theta_gF=(ng-nF)/(nF-nC); direct line indices calculated, not named glass identification.",
      "focalLengthMm": -155.46899444628406,
      "role": "Negative rear meniscus with two aspherical surfaces in the fixed rear group."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -46.0659,
      "d": 1,
      "sd": 10.47,
      "medium": 1
    },
    {
      "label": "2",
      "R": 46.0659,
      "d": 3.15,
      "sd": 10.517
    },
    {
      "label": "3",
      "R": 500.6199,
      "d": 2.35,
      "sd": 10.9005,
      "medium": 2
    },
    {
      "label": "4",
      "R": -70.1001,
      "d": 0.1,
      "sd": 11.036
    },
    {
      "label": "5",
      "R": 35.2255,
      "d": 4.47,
      "sd": 11.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": -61.9662,
      "d": 1.16,
      "sd": 11.153
    },
    {
      "label": "7",
      "R": 36.8316,
      "d": 5.47,
      "sd": 10.5595,
      "medium": 4
    },
    {
      "label": "8",
      "R": -28.7482,
      "d": 1.01,
      "sd": 10.14,
      "medium": 5
    },
    {
      "label": "9",
      "R": 28.7482,
      "d": 6.43,
      "sd": 9.295
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.54
    },
    {
      "label": "11",
      "R": -20.6965,
      "d": 1.8,
      "sd": 8.6625,
      "medium": 6
    },
    {
      "label": "12",
      "R": 68.0221,
      "d": 5.96,
      "sd": 9.584,
      "medium": 7
    },
    {
      "label": "13",
      "R": -23.0994,
      "d": 0.15,
      "sd": 10.4
    },
    {
      "label": "14",
      "R": 129.5764,
      "d": 4.89,
      "sd": 12.0255,
      "medium": 8
    },
    {
      "label": "15",
      "R": -32.1696,
      "sd": 12.5265
    },
    {
      "label": "16",
      "R": -167.9098,
      "d": 3.16,
      "sd": 14.765,
      "medium": 9
    },
    {
      "label": "17",
      "R": -47.1767,
      "d": 3.6,
      "sd": 14.9
    },
    {
      "label": "18",
      "R": -48.5517,
      "d": 1.1,
      "sd": 14.8715,
      "medium": 10
    },
    {
      "label": "19",
      "R": 234.9367,
      "d": 3.825,
      "sd": 15.298
    },
    {
      "label": "20A",
      "R": -49.2419,
      "d": 2.2,
      "sd": 15.3635,
      "medium": 11,
      "asphere": {
        "K": 0,
        "A4": -1.4891620663e-05,
        "A6": 1.6689235765e-08,
        "A8": 1.8215298356e-10,
        "A10": -1.202947498e-12,
        "A12": -3.2918804549e-18,
        "A14": 1.4798628128e-17,
        "A16": 3.2311034086e-20,
        "A18": -4.1122291666e-22,
        "A20": 7.3036285573e-25
      }
    },
    {
      "label": "21A",
      "R": -109.1937,
      "d": 81.9837046413502,
      "sd": 16.3845,
      "asphere": {
        "K": 0,
        "A4": -1.2287489595e-05,
        "A6": 1.3828642481e-08,
        "A8": 2.0444646881e-10,
        "A10": -1.5065419952e-12,
        "A12": 3.1939641025e-15,
        "A14": 6.1701283401e-18,
        "A16": -2.842676537e-20,
        "A18": -8.4745033242e-24,
        "A20": 8.4536735759e-26
      }
    }
  ],
  "focus": {
    "closeFocusM": 0.42625994997767896,
    "description": "The first eight lenses and the stop move objectward as one unit by 23.9818 mm. DD15 increases from 2.9000 mm at infinity to 26.8818 mm at the patent's printed −0.5× near state. Intermediate spacings are calculated in inverse object-to-image distance rather than taken from a measured focusing cam. The printed near state gives a calculated object-to-sensor distance of 0.426 m with the physical plate train; Fujifilm specifies 0.43 m.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 100,
        "objectDistanceMm": 257.939149977679,
        "distanceReference": "first-surface",
        "source": "US20260003158A1 E18 Tables45-46, nearest DD15=26.8818 and printed magnification=-0.5000. Distance257.9391498mm derived independently from exact native prescription and fixed sensor plane; not maker MFD. Native gap unchanged, calculated conjugate retains rounding residual."
      }
    ],
    "keyframes": [
      0.0,
      0.01,
      0.02,
      0.03,
      0.04,
      0.05,
      0.06,
      0.07,
      0.08,
      0.09,
      0.1,
      0.11,
      0.12,
      0.13,
      0.14,
      0.15,
      0.16,
      0.17,
      0.18,
      0.19,
      0.2,
      0.21,
      0.22,
      0.23,
      0.24,
      0.25,
      0.26,
      0.27,
      0.28,
      0.29,
      0.3,
      0.31,
      0.32,
      0.33,
      0.34,
      0.35,
      0.36,
      0.37,
      0.38,
      0.39,
      0.4,
      0.41,
      0.42,
      0.43,
      0.44,
      0.45,
      0.46,
      0.47,
      0.48,
      0.49,
      0.5,
      0.51,
      0.52,
      0.53,
      0.54,
      0.55,
      0.56,
      0.57,
      0.58,
      0.59,
      0.6,
      0.61,
      0.62,
      0.63,
      0.64,
      0.65,
      0.66,
      0.67,
      0.68,
      0.69,
      0.7,
      0.71,
      0.72,
      0.73,
      0.74,
      0.75,
      0.76,
      0.77,
      0.78,
      0.79,
      0.8,
      0.81,
      0.82,
      0.83,
      0.84,
      0.85,
      0.86,
      0.87,
      0.88,
      0.89,
      0.9,
      0.91,
      0.92,
      0.93,
      0.94,
      0.95,
      0.96,
      0.97,
      0.98,
      0.99,
      1.0
    ]
  },
  "aperture": {
    "nominalFNumber": 5.76,
    "fStops": [
      5.76,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "layout": {
    "yScFill": 0.65
  },
  "gaps": {
    "15": {
      "label": "DD15",
      "values": [
        [
          2.9,
          3.026214847123541,
          3.151576505912087,
          3.278028880071633,
          3.4055885968071746,
          3.5342726578954227,
          3.664098451008104,
          3.795083761468211,
          3.927246784458968,
          4.060606137706705,
          4.1951808746598935,
          4.330990498189544,
          4.468054974831718,
          4.606394749603847,
          4.746030761418943,
          4.88698445912823,
          5.029277818223792,
          5.172933358233811,
          5.317974160845098,
          5.464423888790682,
          5.612306805540689,
          5.761647795839081,
          5.912472387130036,
          6.064806771920496,
          6.218677831129646,
          6.374113158476981,
          6.531141085966955,
          6.689790710528461,
          6.8500919218742125,
          7.012075431647198,
          7.175772803927573,
          7.341216487176372,
          7.5084398476989636,
          7.6774772047168724,
          7.84836386714133,
          8.021136172149744,
          8.195831525672812,
          8.372488444907864,
          8.55114660298172,
          8.73184687589617,
          8.914631391898359,
          9.099543583428305,
          9.286628241809236,
          9.475931574855952,
          9.667501267592716,
          9.86138654628484,
          10.057638246005371,
          10.256308881975729,
          10.457452724936902,
          10.661125880830879,
          10.867386375093199,
          11.076294241882653,
          11.287911618603104,
          11.502302846100209,
          11.719534574951345,
          11.93967587830133,
          12.16279837173887,
          12.388976340750743,
          12.618286876341807,
          12.850810019461221,
          13.086628914936618,
          13.325829975683408,
          13.568503058031027,
          13.814741649089488,
          14.064643067171247,
          14.318308676385284,
          14.575844116634427,
          14.83735955037453,
          15.102969927636526,
          15.372795270973617,
          15.64696098217589,
          15.925598172798587,
          16.208844020779047,
          16.496842155679065,
          16.789743075381594,
          17.087704597408006,
          17.390892348400424,
          17.69948029575124,
          18.01365132585655,
          18.33359787404212,
          18.659522611860982,
          18.991639198228217,
          19.330173101710884,
          19.675362502320183,
          20.027459282314222,
          20.386730116891993,
          20.753457677256037,
          21.127941960396015,
          21.510501762152987,
          21.901476312726423,
          22.30122709687875,
          22.710139884764235,
          23.128627003703226,
          23.557129886491623,
          23.996121938190196,
          24.44611177103062,
          24.907646866443287,
          25.38131773466323,
          25.867762656478767,
          26.367673109118133,
          26.8818
        ]
      ]
    }
  },
  "perspectiveControl": {
    "shiftRangeMm": [-15, 15],
    "tiltRangeDeg": [-10, 10],
    "shiftStepMm": 0.1,
    "tiltStepDeg": 0.1,
    "tiltPivot": {
      "frame": "camera",
      "basis": "patent-principal-point-guidance",
      "zOffsetFromImagePlaneMm": -109.9746
    }
  },
  "groups": [
    { "text": "G1", "fromSurface": "1", "toSurface": "15" },
    { "text": "G2", "fromSurface": "16", "toSurface": "21A" }
  ],
  "doublets": [
    { "text": "L14 + L15", "fromSurface": "7", "toSurface": "9" },
    { "text": "L16 + L17", "fromSurface": "11", "toSurface": "13" }
  ],
  "checks": {
    "gapSagFrac": 0.911
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
