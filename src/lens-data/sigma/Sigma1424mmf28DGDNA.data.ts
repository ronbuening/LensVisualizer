import type { LensDataInput } from "../../types/optics.js";

/* JP2020042221A, Numerical Example 1. Source PDF pp. 10–13, Figure 1 p. 27.
 * Native scale 1; all source radii, spacings, media, K and A3–A20 preserved.
 * Five aspheres on three elements; odd terms are radial, rotationally symmetric.
 * NO_INTERNAL_RECONSTRUCTION: only published infinity zoom states are modeled.
 * Repeated focus endpoints invent no near motion; production 0.28 m is metadata.
 * Stop position is source s19. Physical iris sizes are inferred by exact axial
 * Snell tracing from nominal EFL/(2*2.93), with zoomApertureModel enabled.
 * Agreement with f/2.93 is calibration, not independent diaphragm evidence.
 * SEMI-DIAMETERS ARE ESTIMATED from JP 2020-042221 A Figure 1 (PDF p. 27, wide
 * end); the patent publishes none. The figure is to scale but not isotropic:
 * the axial scale comes from vertex spacing (s1-s32 = 119.60 mm), the radial
 * scale from the drawn image-plane half-height (Y = 21.63 mm) and the rim sags
 * of the spherical surfaces, and is about 1.14x finer. Rims follow that
 * two-axis reading plus exact axial/chief-ray clearance and actual
 * rim/edge/gap geometry. s2 sits at the drawn 0.90|R| rim; s4, s6 and s30 stay
 * just below the drawn rims at the rim-slope and gap-intrusion limits. They
 * are optical apertures, not measured mechanical blanks.
 * No source cover plate or filter exists in this example; none is invented.
 * Glass labels are coordinate-equivalent classes, not supplier/melt claims.
 * dPgF is converted from patent absolute theta_gF using the engine normal line;
 * no unsupported individual nC/nF/ng values or patent APD labels are invented.
 * Six inferred APD display tags (L11 FCD100 class; L2, L4 FCD515 class; L13,
 * L17 FCD705 class; L18 MP-FCD500-20 class) follow the coordinate classes and
 * Sigma's 1 FLD + 5 SLD count. The patent prints theta_gF for every element
 * but names no anomalous or low-dispersion glass, so none is tagged "patent".
 * Group labels G2 (GF) and G3 (GP) are Figure 1's own; GR is G2 through G4.
 */

const LENS_DATA = {
  "key": "sigma-14-24-f28-dg-dn-art",
  "maker": "Sigma",
  "name": "SIGMA 14-24mm f/2.8 DG DN | Art",
  "subtitle": "JP 2020-042221 A, Numerical Example 1; construction correlation, not factory confirmation",
  "specs": [
    "18 ELEMENTS / 13 GROUPS",
    "DESIGN f = 14.50–23.15 mm",
    "DESIGN F/2.93",
    "5 ASPHERICAL SURFACES / 3 ELEMENTS",
    "1 FLD + 5 SLD (INFERRED)"
  ],
  "focalLengthMarketing": [
    14,
    24
  ],
  "focalLengthDesign": [
    14.50046093,
    23.15099814
  ],
  "apertureMarketing": 2.8,
  "apertureDesign": 2.93,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2020-042221 A",
  "patentAuthors": [
    "Ryo Shioda"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2020,
  "elementCount": 18,
  "groupCount": 13,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Neg. Meniscus (1× Asph)",
      "nd": 1.6935,
      "vd": 53.18,
      "indexReference": "d",
      "fl": -54.0117243,
      "glass": "L-LAL13 class (OHARA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00615124,
      "apd": false,
      "role": "G1 front negative group member"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "fl": -98.9717938,
      "glass": "FCD515 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01561884,
      "apd": "inferred",
      "apdNote": "FCD515-class coordinate with patent θgF 0.5440 (ΔPgF +0.0156); counted among Sigma's five SLD elements by inference, not a patent ED designation.",
      "role": "G1 front negative group member"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Neg. Meniscus (2× Asph)",
      "nd": 1.59271,
      "vd": 66.97,
      "indexReference": "d",
      "fl": -55.6081847,
      "glass": "MP-PCD51-70 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00544354,
      "apd": false,
      "role": "G1 front negative group member"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "fl": -75.5328031,
      "glass": "FCD515 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01561884,
      "apd": "inferred",
      "apdNote": "FCD515-class coordinate with patent θgF 0.5440 (ΔPgF +0.0156); counted among Sigma's five SLD elements by inference, not a patent ED designation.",
      "role": "G1 front negative group member"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": 63.9475868,
      "glass": "FDS90-SG class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01529796,
      "apd": false,
      "role": "G1 front negative group member"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.92119,
      "vd": 23.96,
      "indexReference": "d",
      "fl": -31.885239,
      "glass": "FDS24-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01660072,
      "apd": false,
      "role": "G2 (GF) inner-focus doublet member; the pair moves imageward for near focus",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.75211,
      "vd": 25.05,
      "indexReference": "d",
      "fl": 24.4508266,
      "glass": "FF8 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0174341,
      "apd": false,
      "role": "G2 (GF) inner-focus doublet member; the pair moves imageward for near focus",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.80809,
      "vd": 22.76,
      "indexReference": "d",
      "fl": -88.0779298,
      "glass": "FD225 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.02298232,
      "apd": false,
      "role": "G3 (GP) pre-stop positive group member"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.94595,
      "vd": 17.98,
      "indexReference": "d",
      "fl": -60.4985782,
      "glass": "FDS18-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.04084236,
      "apd": false,
      "role": "G3 (GP) pre-stop positive group member",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.7552,
      "vd": 27.51,
      "indexReference": "d",
      "fl": 29.7824851,
      "glass": "S-TIH4 class (OHARA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01267182,
      "apd": false,
      "role": "G3 (GP) pre-stop positive group member",
      "cemented": "D2"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "indexReference": "d",
      "fl": 46.9368687,
      "glass": "FCD100 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0496582,
      "apd": "inferred",
      "apdNote": "FCD100-class coordinate (1.43700 / 95.10) with patent θgF 0.5335 (ΔPgF +0.0497); matches Sigma's single FLD element by inference, not a patent ED designation.",
      "role": "G4 rear positive group member"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.72047,
      "vd": 34.71,
      "indexReference": "d",
      "fl": -41.7468892,
      "glass": "S-NBH8 class (OHARA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00201778,
      "apd": false,
      "role": "G4 rear positive group member",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.55032,
      "vd": 75.5,
      "indexReference": "d",
      "fl": 24.8924876,
      "glass": "FCD705 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.023091,
      "apd": "inferred",
      "apdNote": "FCD705-class coordinate with patent θgF 0.5399 (ΔPgF +0.0231); counted among Sigma's five SLD elements by inference, not a patent ED designation.",
      "role": "G4 rear positive group member",
      "cemented": "D3"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconcave Negative",
      "nd": 1.95375,
      "vd": 32.32,
      "indexReference": "d",
      "fl": -12.4535061,
      "glass": "TAFD45L class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00056224,
      "apd": false,
      "role": "G4 rear positive group member",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 19.6633491,
      "glass": "E-FDS1-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.03012016,
      "apd": false,
      "role": "G4 rear positive group member",
      "cemented": "D4"
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": -35.8491595,
      "glass": "TAFD30 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.0097744,
      "apd": false,
      "role": "G4 rear positive group member",
      "cemented": "D5"
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Positive Meniscus",
      "nd": 1.55032,
      "vd": 75.5,
      "indexReference": "d",
      "fl": 30.5927378,
      "glass": "FCD705 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.023091,
      "apd": "inferred",
      "apdNote": "FCD705-class coordinate with patent θgF 0.5399 (ΔPgF +0.0231); counted among Sigma's five SLD elements by inference, not a patent ED designation.",
      "role": "G4 rear positive group member",
      "cemented": "D5"
    },
    {
      "id": 18,
      "name": "L18",
      "label": "Element 18",
      "type": "Pos. Meniscus (2× Asph)",
      "nd": 1.55352,
      "vd": 71.72,
      "indexReference": "d",
      "fl": 165.8293717,
      "glass": "MP-FCD500-20 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01653304,
      "apd": "inferred",
      "apdNote": "MP-FCD500-20-class fluorophosphate preform coordinate with patent θgF 0.5397 (ΔPgF +0.0165); taken as the fifth SLD element by count, not a patent ED designation or a Sigma-published position.",
      "role": "G4 rear positive group member"
    }
  ],
  "surfaces": [
    {
      "label": "1A",
      "R": 85.4412,
      "d": 3.2,
      "nd": 1.6935,
      "elemId": 1,
      "sd": 33.5
    },
    {
      "label": "2",
      "R": 25.6415,
      "d": 5.9311,
      "nd": 1,
      "elemId": 0,
      "sd": 23.0
    },
    {
      "label": "3",
      "R": 32.2488,
      "d": 1.7,
      "nd": 1.59282,
      "elemId": 2,
      "sd": 24.0
    },
    {
      "label": "4",
      "R": 20.4022,
      "d": 9.9424,
      "nd": 1,
      "elemId": 0,
      "sd": 18.36
    },
    {
      "label": "5A",
      "R": 44.7525,
      "d": 2.4089,
      "nd": 1.59271,
      "elemId": 3,
      "sd": 19.3
    },
    {
      "label": "6A",
      "R": 18.6004,
      "d": 8.2083,
      "nd": 1,
      "elemId": 0,
      "sd": 15.1
    },
    {
      "label": "7",
      "R": -143.3662,
      "d": 1.0,
      "nd": 1.59282,
      "elemId": 4,
      "sd": 16.2
    },
    {
      "label": "8",
      "R": 65.2835,
      "d": 0.25,
      "nd": 1,
      "elemId": 0,
      "sd": 16.2
    },
    {
      "label": "9",
      "R": 32.7185,
      "d": 3.5498,
      "nd": 1.84666,
      "elemId": 5,
      "sd": 15.9
    },
    {
      "label": "10",
      "R": 78.5742,
      "d": 17.4502,
      "nd": 1,
      "elemId": 0,
      "sd": 15.9
    },
    {
      "label": "11",
      "R": 47.9876,
      "d": 0.7,
      "nd": 1.92119,
      "elemId": 6,
      "sd": 11.1
    },
    {
      "label": "12",
      "R": 18.0927,
      "d": 4.5235,
      "nd": 1.75211,
      "elemId": 7,
      "sd": 11.1
    },
    {
      "label": "13",
      "R": 1000.0,
      "d": 8.4183,
      "nd": 1,
      "elemId": 0,
      "sd": 11.1
    },
    {
      "label": "14",
      "R": -45.9274,
      "d": 0.8473,
      "nd": 1.80809,
      "elemId": 8,
      "sd": 11.6
    },
    {
      "label": "15",
      "R": -130.5409,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 11.6
    },
    {
      "label": "16",
      "R": 43.8526,
      "d": 0.8157,
      "nd": 1.94595,
      "elemId": 9,
      "sd": 12.3
    },
    {
      "label": "17",
      "R": 24.6033,
      "d": 5.0424,
      "nd": 1.7552,
      "elemId": 10,
      "sd": 12.3
    },
    {
      "label": "18",
      "R": -238.9569,
      "d": 9.1955,
      "nd": 1,
      "elemId": 0,
      "sd": 12.3
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.24,
      "nd": 1,
      "elemId": 0,
      "sd": 8.59464622766546
    },
    {
      "label": "20",
      "R": 26.7826,
      "d": 5.4475,
      "nd": 1.437,
      "elemId": 11,
      "sd": 12.7
    },
    {
      "label": "21",
      "R": -82.1805,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 12.7
    },
    {
      "label": "22",
      "R": 27.6053,
      "d": 0.8,
      "nd": 1.72047,
      "elemId": 12,
      "sd": 11.8
    },
    {
      "label": "23",
      "R": 14.2195,
      "d": 7.7162,
      "nd": 1.55032,
      "elemId": 13,
      "sd": 11.8
    },
    {
      "label": "24",
      "R": -302.0534,
      "d": 3.1611,
      "nd": 1,
      "elemId": 0,
      "sd": 11.8
    },
    {
      "label": "25",
      "R": -42.7697,
      "d": 0.8,
      "nd": 1.95375,
      "elemId": 14,
      "sd": 10.8
    },
    {
      "label": "26",
      "R": 16.5944,
      "d": 5.1186,
      "nd": 1.92286,
      "elemId": 15,
      "sd": 10.8
    },
    {
      "label": "27",
      "R": 165.2911,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 10.8
    },
    {
      "label": "28",
      "R": 30.6058,
      "d": 0.8,
      "nd": 1.883,
      "elemId": 16,
      "sd": 12.3
    },
    {
      "label": "29",
      "R": 15.37,
      "d": 7.4494,
      "nd": 1.55032,
      "elemId": 17,
      "sd": 12.3
    },
    {
      "label": "30",
      "R": 146.1642,
      "d": 1.4019,
      "nd": 1,
      "elemId": 0,
      "sd": 11.9
    },
    {
      "label": "31A",
      "R": -300.0,
      "d": 2.035,
      "nd": 1.55352,
      "elemId": 18,
      "sd": 13.0
    },
    {
      "label": "32A",
      "R": -70.4549,
      "d": 21.5383,
      "nd": 1,
      "elemId": 0,
      "sd": 13.0
    }
  ],
  "asph": {
    "1A": {
      "K": 0.0,
      "A4": 8.58209e-06,
      "A6": -1.40764e-08,
      "A8": 3.05748e-11,
      "A10": -5.97803e-14,
      "A12": 9.0859e-17,
      "A14": -9.58737e-20,
      "A16": 6.40051e-23,
      "A18": -2.39147e-26,
      "A20": 3.78519e-30
    },
    "5A": {
      "K": 0.0,
      "A3": -5.23111e-05,
      "A4": -1.26716e-05,
      "A5": -1.1304e-05,
      "A6": 1.95245e-06,
      "A7": -9.38134e-08,
      "A8": -7.82976e-10,
      "A9": 1.22496e-10,
      "A10": 1.97968e-12,
      "A11": -1.33295e-14,
      "A12": -1.10265e-14,
      "A13": 5.32582e-17,
      "A14": 7.28532e-18,
      "A15": 1.89244e-19,
      "A16": -1.81192e-20,
      "A17": 1.13899e-21,
      "A18": -2.99255e-23,
      "A19": 1.48595e-25,
      "A20": -3.31214e-27
    },
    "6A": {
      "K": -0.0364842,
      "A3": -3.48559e-05,
      "A4": -1.50563e-05,
      "A5": -1.10043e-05,
      "A6": 1.72222e-06,
      "A7": -4.71099e-08,
      "A8": -3.15483e-09,
      "A9": -5.86163e-11,
      "A10": 1.76453e-11,
      "A11": -1.10783e-13,
      "A12": -5.28181e-15,
      "A13": -8.35047e-16,
      "A14": 5.89441e-17,
      "A15": -9.54814e-18,
      "A16": 3.21284e-19,
      "A17": 6.43253e-21,
      "A18": -4.91029e-23,
      "A19": 1.37261e-24,
      "A20": -5.09803e-25
    },
    "31A": {
      "K": 0.0,
      "A4": -2.45667e-05,
      "A6": -8.17092e-08,
      "A8": 2.8137e-09,
      "A10": -7.26008e-11,
      "A12": 1.11778e-12,
      "A14": -9.83681e-15,
      "A16": 4.86452e-17,
      "A18": -1.24975e-19,
      "A20": 1.29336e-22
    },
    "32A": {
      "K": 0.0,
      "A4": 5.66654e-06,
      "A6": 5.42201e-08,
      "A8": -2.06458e-09,
      "A10": 3.2509e-11,
      "A12": -2.5641e-13,
      "A14": 1.03356e-15,
      "A16": -1.78037e-18,
      "A18": -8.0761e-22,
      "A20": 5.22718e-24
    }
  },
  "var": {
    "10": [
      [
        17.4502,
        17.4502
      ],
      [
        9.3308,
        9.3308
      ],
      [
        3.1517,
        3.1517
      ]
    ],
    "13": [
      [
        8.4183,
        8.4183
      ],
      [
        10.2009,
        10.2009
      ],
      [
        9.58,
        9.58
      ]
    ],
    "18": [
      [
        9.1955,
        9.1955
      ],
      [
        5.5627,
        5.5627
      ],
      [
        2.665,
        2.665
      ]
    ],
    "32A": [
      [
        21.5383,
        21.5383
      ],
      [
        27.2429,
        27.2429
      ],
      [
        35.0738,
        35.0738
      ]
    ]
  },
  "varLabels": [
    [
      "10",
      "G1–G2"
    ],
    [
      "13",
      "G2–G3"
    ],
    [
      "18",
      "G3–STO"
    ],
    [
      "32A",
      "BF"
    ]
  ],
  "zoomPositions": [
    14.5,
    17.97,
    23.15
  ],
  "zoomApertureModel": "from-nominal-fno",
  "zoomLabels": [
    "14.50 mm native",
    "23.15 mm native"
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1A",
      "toSurface": "10"
    },
    {
      "text": "G2 (GF)",
      "fromSurface": "11",
      "toSurface": "13"
    },
    {
      "text": "G3 (GP)",
      "fromSurface": "14",
      "toSurface": "18"
    },
    {
      "text": "G4",
      "fromSurface": "STO",
      "toSurface": "32A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "11",
      "toSurface": "13"
    },
    {
      "text": "D2",
      "fromSurface": "16",
      "toSurface": "18"
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
      "fromSurface": "28",
      "toSurface": "30"
    }
  ],
  "closeFocusM": 0.28,
  "focusDescription": "NO_INTERNAL_RECONSTRUCTION: patent G2 (GF, cemented L6/L7) moves imageward for near focus (¶0063, Figure 1 focus arrow), but the patent tabulates infinity spacings only at all three zoom stations. All authored zoom gaps retain their infinity values at both focus endpoints. 0.28 m is production metadata only; finite-conjugate simulation is not certified.",
  "nominalFno": 2.93,
  "fstopSeries": [
    2.93,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 11,
  "apertureBladeRoundedness": 1,
  "yScFill": 0.42
} satisfies LensDataInput;

export default LENS_DATA;
