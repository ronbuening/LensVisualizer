import type { LensDataInput } from "../../types/optics.js";

/**
 * JP2015055858A, Numerical Example 2. Construction correlation with the
 * SIGMA 24-105mm F4 DG OS HSM Art, not confirmed factory prescription.
 * CONDITIONAL MODEL: source A10 on surfaces 28/29 is blank and retained null
 * in the evidence. Explicitly approved modeled A10=0 gives a degree-8
 * polynomial on 28A/29A. It is not an exact source value; no source-derived
 * error bound exists. Every finite-aperture ray and geometry result is
 * conditional on this treatment. No other source value is changed.
 * Native millimetres and d-line indices; no scaling or rear plates.
 * 19 physical elements, 14 air-separated groups, 4 aspheric surfaces.
 * NO_INTERNAL_RECONSTRUCTION: all three published infinity zoom stations
 * are retained; var focus pairs repeat, with no finite-focus prescription.
 * Linear interpolation is an application approximation, not a patent zoom law.
 * SEMI-DIAMETERS: modeled from qualified same-application grant Figure 11,
 * actual conditional exact-ray requirements and validated geometric limits.
 * Original application Figure 11 is damaged. No diameter is patent-published.
 * Ordinary-stop radius is calibrated by the real runtime from nominalFno;
 * authored STO.sd is an initial value, not a measured diaphragm dimension.
 * GLASS: runtime catalog curves are coordinate-equivalent spectral proxies;
 * native nd/vd are unchanged. Supplier/melt identity and APO performance are
 * not established. Sony A production variant omits OS; lateral IS unmodeled.
 */

const LENS_DATA = {
  "key": "sigma-24-105-f4-dg-os-hsm-art",
  "maker": "Sigma",
  "name": "SIGMA 24-105mm f/4 DG OS HSM Art",
  "subtitle": "JP 2015-055858 A, Example 2; conditional degree-8 model on surfaces 28A/29A",
  "specs": [
    "19 ELEMENTS / 14 GROUPS",
    "NATIVE DESIGN 24.86-101.70 mm",
    "4 ASPHERICAL SURFACES",
    "CONDITIONAL A10=0 ON 28A/29A"
  ],
  "focalLengthMarketing": [
    24,
    105
  ],
  "focalLengthDesign": [
    24.861962645591184,
    101.70943627608789
  ],
  "apertureMarketing": 4,
  "apertureDesign": 4.06,
  "lensMounts": [
    "sigma-sa",
    "canon-ef",
    "nikon-f",
    "sony-a"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.26,
  "patentNumber": "JP 2015-055858 A",
  "patentAuthors": [
    "Tomoki Kono"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2015,
  "elementCount": 19,
  "groupCount": 14,
  "elements": [
    {
      "id": 1,
      "name": "L1a",
      "diagramLabel": "L1a",
      "label": "L1a",
      "type": "Neg. Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": -172.919009,
      "glass": "FDS90 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G1; isolated element focal length is not in-situ power.",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L1b",
      "diagramLabel": "L1b",
      "label": "L1b",
      "type": "Biconvex Positive",
      "nd": 1.59349,
      "vd": 67.0,
      "indexReference": "d",
      "fl": 136.242296,
      "glass": "PCD51 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G1; isolated element focal length is not in-situ power.",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L1c",
      "diagramLabel": "L1c",
      "label": "L1c",
      "type": "Pos. Meniscus",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "fl": 123.769144,
      "glass": "TAF1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G1; isolated element focal length is not in-situ power."
    },
    {
      "id": 4,
      "name": "L2a",
      "diagramLabel": "L2a",
      "label": "L2a",
      "type": "Neg. Meniscus (1× Asph)",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": -20.192674,
      "glass": "TAFD30 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G2; isolated element focal length is not in-situ power."
    },
    {
      "id": 5,
      "name": "L2b",
      "diagramLabel": "L2b",
      "label": "L2b",
      "type": "Biconcave Negative",
      "nd": 1.72916,
      "vd": 54.67,
      "indexReference": "d",
      "fl": -37.765918,
      "glass": "TAC8 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G2; isolated element focal length is not in-situ power."
    },
    {
      "id": 6,
      "name": "L2c",
      "diagramLabel": "L2c",
      "label": "L2c",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": 27.729884,
      "glass": "FDS90 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G2; isolated element focal length is not in-situ power."
    },
    {
      "id": 7,
      "name": "L2d",
      "diagramLabel": "L2d",
      "label": "L2d",
      "type": "Neg. Meniscus (1× Asph)",
      "nd": 1.6935,
      "vd": 53.2,
      "indexReference": "d",
      "fl": -55.046494,
      "glass": "M-LAC130 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G2; isolated element focal length is not in-situ power."
    },
    {
      "id": 8,
      "name": "L3a",
      "diagramLabel": "L3a",
      "label": "L3a",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "indexReference": "d",
      "fl": 86.251719,
      "glass": "FCD100 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the FCD100 spectral proxy: catalog PgF ≈ 0.53362, ΔPgF ≈ +0.04978. Sigma marks the corresponding position FLD; the patent gives no anomalous-dispersion designation or factory-glass identity.",
      "role": "Component of G3; isolated element focal length is not in-situ power."
    },
    {
      "id": 9,
      "name": "L3b",
      "diagramLabel": "L3b",
      "label": "L3b",
      "type": "Neg. Meniscus",
      "nd": 2.001,
      "vd": 29.13,
      "indexReference": "d",
      "fl": -45.223801,
      "glass": "TAFD55 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G3; isolated element focal length is not in-situ power.",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L3c",
      "diagramLabel": "L3c",
      "label": "L3c",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "fl": 30.984787,
      "glass": "FCD515 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the FCD515 spectral proxy: catalog PgF ≈ 0.54412, ΔPgF ≈ +0.01573. Sigma marks the corresponding position SLD; the patent gives no anomalous-dispersion designation or factory-glass identity.",
      "role": "Component of G3; isolated element focal length is not in-situ power.",
      "cemented": "D2"
    },
    {
      "id": 11,
      "name": "L3d",
      "diagramLabel": "L3d",
      "label": "L3d",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "fl": 69.223363,
      "glass": "FCD515 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the FCD515 spectral proxy: catalog PgF ≈ 0.54412, ΔPgF ≈ +0.01573. Sigma marks the corresponding position SLD; the patent gives no anomalous-dispersion designation or factory-glass identity.",
      "role": "Component of G3; isolated element focal length is not in-situ power."
    },
    {
      "id": 12,
      "name": "L4a",
      "diagramLabel": "L4a",
      "label": "L4a",
      "type": "Pos. Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": 57.182357,
      "glass": "FDS90 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G4; isolated element focal length is not in-situ power.",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L4b",
      "diagramLabel": "L4b",
      "label": "L4b",
      "type": "Biconcave Negative",
      "nd": 1.54814,
      "vd": 45.82,
      "indexReference": "d",
      "fl": -29.89214,
      "glass": "E-FEL1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G4; isolated element focal length is not in-situ power.",
      "cemented": "D3"
    },
    {
      "id": 14,
      "name": "L4c",
      "diagramLabel": "L4c",
      "label": "L4c",
      "type": "Biconvex Positive",
      "nd": 1.60342,
      "vd": 38.01,
      "indexReference": "d",
      "fl": 33.209713,
      "glass": "E-F5 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G4; isolated element focal length is not in-situ power.",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "L4d",
      "diagramLabel": "L4d",
      "label": "L4d",
      "type": "Biconcave Negative",
      "nd": 1.744,
      "vd": 44.9,
      "indexReference": "d",
      "fl": -33.168352,
      "glass": "LAF2 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G4; isolated element focal length is not in-situ power.",
      "cemented": "D4"
    },
    {
      "id": 16,
      "name": "L5a",
      "diagramLabel": "L5a",
      "label": "L5a",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.59201,
      "vd": 67.02,
      "indexReference": "d",
      "fl": 31.126365,
      "glass": "M-PCD51 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G5; isolated element focal length is not in-situ power."
    },
    {
      "id": 17,
      "name": "L5b",
      "diagramLabel": "L5b",
      "label": "L5b",
      "type": "Pos. Meniscus",
      "nd": 1.437,
      "vd": 95.1,
      "indexReference": "d",
      "fl": 200.213705,
      "glass": "FCD100 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the FCD100 spectral proxy: catalog PgF ≈ 0.53362, ΔPgF ≈ +0.04978. Sigma marks the corresponding position FLD; the patent gives no anomalous-dispersion designation or factory-glass identity.",
      "role": "Component of G5; isolated element focal length is not in-situ power.",
      "cemented": "D5"
    },
    {
      "id": 18,
      "name": "L5c",
      "diagramLabel": "L5c",
      "label": "L5c",
      "type": "Biconcave Negative",
      "nd": 1.90366,
      "vd": 31.31,
      "indexReference": "d",
      "fl": -22.570823,
      "glass": "TAFD25 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G5; isolated element focal length is not in-situ power.",
      "cemented": "D5"
    },
    {
      "id": 19,
      "name": "L5d",
      "diagramLabel": "L5d",
      "label": "L5d",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "fl": 47.202061,
      "glass": "TAF1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Component of G5; isolated element focal length is not in-situ power."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 220.62,
      "d": 1.75,
      "nd": 1.84666,
      "elemId": 1,
      "sd": 34
    },
    {
      "label": "2",
      "R": 87.684,
      "d": 8.42,
      "nd": 1.59349,
      "elemId": 2,
      "sd": 34
    },
    {
      "label": "3",
      "R": -1001.591,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 34
    },
    {
      "label": "4",
      "R": 58.262,
      "d": 6.4,
      "nd": 1.7725,
      "elemId": 3,
      "sd": 30.5
    },
    {
      "label": "5",
      "R": 142.005,
      "d": 3.336,
      "nd": 1.0,
      "elemId": 0,
      "sd": 30.5
    },
    {
      "label": "6A",
      "R": 129.885,
      "d": 1.2,
      "nd": 1.883,
      "elemId": 4,
      "sd": 15.5
    },
    {
      "label": "7",
      "R": 15.61,
      "d": 6.639,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.7
    },
    {
      "label": "8",
      "R": -36.726,
      "d": 0.95,
      "nd": 1.72916,
      "elemId": 5,
      "sd": 12
    },
    {
      "label": "9",
      "R": 111.265,
      "d": 0.591,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "10",
      "R": 45.919,
      "d": 4.424,
      "nd": 1.84666,
      "elemId": 6,
      "sd": 12
    },
    {
      "label": "11",
      "R": -45.918,
      "d": 0.876,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "12",
      "R": -30.796,
      "d": 1.1,
      "nd": 1.6935,
      "elemId": 7,
      "sd": 11.6
    },
    {
      "label": "13A",
      "R": -161.657,
      "d": 22.261,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.6
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.1
    },
    {
      "label": "15",
      "R": 39.128,
      "d": 3.346,
      "nd": 1.437,
      "elemId": 8,
      "sd": 11.4
    },
    {
      "label": "16",
      "R": -1000.321,
      "d": 2.054,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.4
    },
    {
      "label": "17",
      "R": 36.661,
      "d": 1.0,
      "nd": 2.001,
      "elemId": 9,
      "sd": 12
    },
    {
      "label": "18",
      "R": 19.98,
      "d": 5.676,
      "nd": 1.59282,
      "elemId": 10,
      "sd": 12
    },
    {
      "label": "19",
      "R": -203.647,
      "d": 0.193,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "20",
      "R": 81.435,
      "d": 3.407,
      "nd": 1.59282,
      "elemId": 11,
      "sd": 11.8
    },
    {
      "label": "21",
      "R": -81.435,
      "d": 2.825,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.8
    },
    {
      "label": "22",
      "R": -33.022,
      "d": 2.716,
      "nd": 1.84666,
      "elemId": 12,
      "sd": 11.8
    },
    {
      "label": "23",
      "R": -20.372,
      "d": 0.8,
      "nd": 1.54814,
      "elemId": 13,
      "sd": 12.2
    },
    {
      "label": "24",
      "R": 84.887,
      "d": 1.039,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.8
    },
    {
      "label": "25",
      "R": 26.621,
      "d": 5.051,
      "nd": 1.60342,
      "elemId": 14,
      "sd": 12.3
    },
    {
      "label": "26",
      "R": -75.267,
      "d": 0.814,
      "nd": 1.744,
      "elemId": 15,
      "sd": 12.3
    },
    {
      "label": "27",
      "R": 36.884,
      "d": 9.335,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.3
    },
    {
      "label": "28A",
      "R": 43.538,
      "d": 6.03,
      "nd": 1.59201,
      "elemId": 16,
      "sd": 13.5
    },
    {
      "label": "29A",
      "R": -30.304,
      "d": 0.206,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.5
    },
    {
      "label": "30",
      "R": -58.615,
      "d": 2.668,
      "nd": 1.437,
      "elemId": 17,
      "sd": 13.8
    },
    {
      "label": "31",
      "R": -35.586,
      "d": 0.985,
      "nd": 1.90366,
      "elemId": 18,
      "sd": 13.8
    },
    {
      "label": "32",
      "R": 48.412,
      "d": 0.839,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.0
    },
    {
      "label": "33",
      "R": 82.769,
      "d": 4.208,
      "nd": 1.7725,
      "elemId": 19,
      "sd": 14.2
    },
    {
      "label": "34",
      "R": -63.733,
      "d": 39.4591,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.2
    }
  ],
  "asph": {
    "6A": {
      "K": 0.0,
      "A4": 5.9165e-06,
      "A6": -1.1181e-08,
      "A8": -7.8581e-12,
      "A10": 4.3217e-14,
      "A12": 0,
      "A14": 0
    },
    "13A": {
      "K": 0.0,
      "A4": -8.67e-07,
      "A6": 1.6032e-09,
      "A8": -2.2831e-10,
      "A10": 1.1001e-12,
      "A12": 0,
      "A14": 0
    },
    "28A": {
      "K": 0.0,
      "A4": -1.1457e-05,
      "A6": -1.6635e-08,
      "A8": 3.4344e-11,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "29A": {
      "K": 0.0,
      "A4": 7.2943e-06,
      "A6": -1.4854e-08,
      "A8": 4.1583e-11,
      "A10": 0,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "5": [
      [
        3.336,
        3.336
      ],
      [
        17.352,
        17.352
      ],
      [
        43.103,
        43.103
      ]
    ],
    "13A": [
      [
        22.261,
        22.261
      ],
      [
        8.304,
        8.304
      ],
      [
        2.255,
        2.255
      ]
    ],
    "21": [
      [
        2.825,
        2.825
      ],
      [
        7.273,
        7.273
      ],
      [
        9.415,
        9.415
      ]
    ],
    "27": [
      [
        9.335,
        9.335
      ],
      [
        3.74,
        3.74
      ],
      [
        1.818,
        1.818
      ]
    ],
    "34": [
      [
        39.4591,
        39.4591
      ],
      [
        59.1232,
        59.1232
      ],
      [
        66.9314,
        66.9314
      ]
    ]
  },
  "varLabels": [
    [
      "5",
      "D5"
    ],
    [
      "13A",
      "D13"
    ],
    [
      "21",
      "D21"
    ],
    [
      "27",
      "D27"
    ],
    [
      "34",
      "BF"
    ]
  ],
  "zoomPositions": [
    24.86,
    50.58,
    101.7
  ],
  "zoomLabels": [
    "24.86 mm",
    "101.70 mm"
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6A",
      "toSurface": "13A"
    },
    {
      "text": "G3",
      "fromSurface": "STO",
      "toSurface": "21"
    },
    {
      "text": "G4",
      "fromSurface": "22",
      "toSurface": "27"
    },
    {
      "text": "G5",
      "fromSurface": "28A",
      "toSurface": "34"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "D2",
      "fromSurface": "17",
      "toSurface": "19"
    },
    {
      "text": "D3",
      "fromSurface": "22",
      "toSurface": "24"
    },
    {
      "text": "D4",
      "fromSurface": "25",
      "toSurface": "27"
    },
    {
      "text": "D5",
      "fromSurface": "30",
      "toSurface": "32"
    }
  ],
  "closeFocusM": 0.45,
  "focusDescription": "The patent describes G2 moving toward the object for closer focus, but provides only infinity-focus zoom prescriptions. The production lens focuses to 0.45 m. Intermediate zoom positions are interpolated. The model assumes zero for the unpublished A10 coefficients on surfaces 28A/29A; their effect on the result is unknown.",
  "nominalFno": [
    4.06,
    4.11,
    4.07
  ],
  "fstopSeries": [
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 9,
  "apertureBladeRoundedness": 1,
  "yScFill": 0.38,
  "zoomApertureModel": "from-nominal-fno"
} satisfies LensDataInput;

export default LENS_DATA;
