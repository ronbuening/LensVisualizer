import type { LensDataInput } from "../../types/optics.js";

/**
 * JP2025099854A Numerical Example 3, PDF pp. 28–29; Fig. 11 on p. 64.
 * Exact production prescription unconfirmed. No scaling or source repairs.
 * Native equisolid projection (paragraph 0107), 185.73° field, f=15.50 mm.
 * Japanese surface 34 radius is −62.0139 mm; do not import the US positive sign.
 * Image-adjacent F (38–39) is retained physically in rearPlates; camera-side role
 * is inferred from Fig.11/location, not explicitly named by the source. It is
 * not described as optional, and is not omitted or air-equivalent-folded.
 * Source ΔPgF = PgF − 0.64833 + 0.00180 νd; engine deviation converted explicitly.
 * Focus PUBLISHED: L8 moves 2.0415 mm imageward, 435.2537 mm object-first-surface.
 * Physical stop diameter is unpublished; calibrated from source F/1.46.
 * Semi-diameters are inferred from Fig. 11 optical extents plus exact tracing,
 * then constrained by current rim/domain/edge/shared-band gap rules.
 */

const LENS_DATA = {
  "key": "sigma-15mm-f14-dg-dn-diagonal-fisheye-art",
  "maker": "Sigma",
  "name": "SIGMA 15mm f/1.4 DG DN DIAGONAL FISHEYE Art",
  "subtitle": "JP 2025-099854 A, Numerical Example 3; construction correlation, production prescription unconfirmed",
  "specs": [
    "21 ELEMENTS / 15 GROUPS",
    "Native equisolid f = 15.50 mm, F/1.46",
    "Native 2ω = 185.73°",
    "4 ASPHERICAL SURFACES"
  ],
  "focalLengthMarketing": 15,
  "focalLengthDesign": 15.5,
  "apertureMarketing": 1.4,
  "apertureDesign": 1.46,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 44.78,
  "patentNumber": "JP 2025-099854 A",
  "patentAuthors": [
    "Yasumoto Oginome"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2025,
  "elementCount": 21,
  "groupCount": 15,
  "projection": {
    "kind": "fisheye-equisolid",
    "focalLengthMm": 15.5,
    "fullFieldDeg": 185.73,
    "imageCircleMm": 44.78,
    "maxTraceFieldDeg": 92.865
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "fl": -138.0,
      "glass": "TAFD30 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.0096844,
      "apd": false,
      "role": "Source-listed negative meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.8765692413387016,
      "nF": 1.8982085278230374,
      "ng": 1.9104465184739963
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 2.001,
      "vd": 29.13,
      "fl": -35.7,
      "glass": "TAFD55-W (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.00459266,
      "apd": false,
      "role": "Source-listed negative meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.9910461402030342,
      "nF": 2.025403881691904,
      "ng": 2.0460011117376657
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "fl": 67.8,
      "glass": "TAFD30 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.0096844,
      "apd": false,
      "role": "Source-listed positive meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D1",
      "nC": 1.8765692413387016,
      "nF": 1.8982085278230374,
      "ng": 1.9104465184739963
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.437,
      "vd": 95.1,
      "fl": -68.3,
      "glass": "FCD100 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.0497082,
      "apd": false,
      "role": "Source-listed biconcave negative; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D1",
      "nC": 1.4355899618746153,
      "nF": 1.4401851120638876,
      "ng": 1.442637171773263
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.48749,
      "vd": 70.44,
      "fl": -51.0,
      "glass": "FC5 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.00521808,
      "apd": false,
      "role": "Source-listed biconcave negative; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D2",
      "nC": 1.4853500040225573,
      "nF": 1.492270524090005,
      "ng": 1.4959425073542514
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 2.001,
      "vd": 29.13,
      "fl": 43.5,
      "glass": "TAFD55-W (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.00459266,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D2",
      "nC": 1.9910461402030342,
      "nF": 2.025403881691904,
      "ng": 2.0460011117376657
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.60311,
      "vd": 60.64,
      "fl": -99.2,
      "glass": "S-BSM14 (OHARA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.00042552,
      "apd": false,
      "role": "Source-listed biconcave negative; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.60008,
      "nF": 1.61002,
      "ng": 1.61541
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.68893,
      "vd": 31.07,
      "fl": 214.5,
      "glass": "S-TIM28 (OHARA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.00876374,
      "apd": false,
      "role": "Source-listed positive meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.6825,
      "nF": 1.70467,
      "ng": 1.71797
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.77377,
      "vd": 47.17,
      "fl": 61.8,
      "glass": "MC-TAF401 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.00883606,
      "apd": false,
      "role": "Source-listed biconvex positive (2× asph); isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.7688378665827869,
      "nF": 1.7852426855508647,
      "ng": 1.7943591863994737
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.86966,
      "vd": 20.02,
      "fl": -49.7,
      "glass": "FDS20-W (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.03316764,
      "apd": false,
      "role": "Source-listed negative meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D3",
      "nC": 1.8574175400676973,
      "nF": 1.9008589637011706,
      "ng": 1.9288119444944472
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 2.001,
      "vd": 29.13,
      "fl": 72.4,
      "glass": "TAFD55-W (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.00459266,
      "apd": false,
      "role": "Source-listed positive meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D3",
      "nC": 1.9910461402030342,
      "nF": 2.025403881691904,
      "ng": 2.0460011117376657
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "fl": 122.2,
      "glass": "FCD515 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.01563284,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.590206058843811,
      "nF": 1.598844742390663,
      "ng": 1.6035451826469111
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.48071,
      "vd": 85.29,
      "fl": 58.3,
      "glass": "FCD915 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.03576578,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D4",
      "nC": 1.478983857758937,
      "nF": 1.4846196250178265,
      "ng": 1.4876415765839446
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -41.6,
      "glass": "NBFD25 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.0086623,
      "apd": false,
      "role": "Source-listed negative meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D4",
      "nC": 1.844729374424391,
      "nF": 1.8786993714718667,
      "ng": 1.8994306652868231
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconvex Positive",
      "nd": 1.98613,
      "vd": 16.48,
      "fl": 59.8,
      "glass": "FDS16-W (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.04938536,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.9694882959023088,
      "nF": 2.02931181281951,
      "ng": 2.0691272128163374
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Negative Meniscus",
      "nd": 1.76634,
      "vd": 35.82,
      "fl": -52.8,
      "glass": "S-NBH59 (OHARA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.00439676,
      "apd": false,
      "role": "Source-listed negative meniscus; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D5",
      "nC": 1.76004,
      "nF": 1.78143,
      "ng": 1.79382
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 58.5,
      "glass": "FCD100 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.0497082,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D5",
      "nC": 1.4355899618746153,
      "nF": 1.4401851120638876,
      "ng": 1.442637171773263
    },
    {
      "id": 18,
      "name": "L18",
      "label": "Element 18",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 53.8,
      "glass": "FCD100 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.0497082,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.4355899618746153,
      "nF": 1.4401851120638876,
      "ng": 1.442637171773263
    },
    {
      "id": 19,
      "name": "L19",
      "label": "Element 19",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 52.5,
      "glass": "FCD1 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": 0.03220002,
      "apd": false,
      "role": "Source-listed biconvex positive; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D6",
      "nC": 1.4951374776446764,
      "nF": 1.5012275045747954,
      "ng": 1.504509126705896
    },
    {
      "id": 20,
      "name": "L20",
      "label": "Element 20",
      "type": "Biconcave Negative",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": -22.0,
      "glass": "TAFD35 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.0024295,
      "apd": false,
      "role": "Source-listed biconcave negative; isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "cemented": "D6",
      "nC": 1.903234376216336,
      "nF": 1.929073304252883,
      "ng": 1.9441172411117131
    },
    {
      "id": 21,
      "name": "L21",
      "label": "Element 21",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.8061,
      "vd": 40.73,
      "fl": 99.8,
      "glass": "MC-NBFD130 (HOYA; source-listed example)",
      "indexReference": "d",
      "dPgF": -0.00607614,
      "apd": false,
      "role": "Source-listed biconvex positive (2× asph); isolated in-air focal length, not an attribution of in-situ aberration contribution.",
      "nC": 1.8002242035144689,
      "nF": 1.8200151953321588,
      "ng": 1.8312837112942038
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 109.2625,
      "d": 3.2,
      "nd": 1.883,
      "elemId": 1,
      "sd": 44.5
    },
    {
      "label": "2",
      "R": 56.82,
      "d": 7.4594,
      "nd": 1.0,
      "elemId": 0,
      "sd": 34.5
    },
    {
      "label": "3",
      "R": 97.5361,
      "d": 2.2,
      "nd": 2.001,
      "elemId": 2,
      "sd": 33.5
    },
    {
      "label": "4",
      "R": 25.8504,
      "d": 16.968,
      "nd": 1.0,
      "elemId": 0,
      "sd": 23.0
    },
    {
      "label": "5",
      "R": -919.4422,
      "d": 6.3047,
      "nd": 1.883,
      "elemId": 3,
      "sd": 23.0
    },
    {
      "label": "6",
      "R": -56.4257,
      "d": 1.3369,
      "nd": 1.437,
      "elemId": 4,
      "sd": 23.3
    },
    {
      "label": "7",
      "R": 63.817,
      "d": 9.8914,
      "nd": 1.0,
      "elemId": 0,
      "sd": 23.0
    },
    {
      "label": "8",
      "R": -37.0971,
      "d": 1.2936,
      "nd": 1.48749,
      "elemId": 5,
      "sd": 19.8
    },
    {
      "label": "9",
      "R": 76.4236,
      "d": 6.0467,
      "nd": 2.001,
      "elemId": 6,
      "sd": 22
    },
    {
      "label": "10",
      "R": -97.1124,
      "d": 0.1875,
      "nd": 1.0,
      "elemId": 0,
      "sd": 20.5
    },
    {
      "label": "11",
      "R": -129.7405,
      "d": 1.248,
      "nd": 1.60311,
      "elemId": 7,
      "sd": 20.2
    },
    {
      "label": "12",
      "R": 111.4369,
      "d": 3.95,
      "nd": 1.0,
      "elemId": 0,
      "sd": 20.2
    },
    {
      "label": "13",
      "R": 70.5891,
      "d": 2.3511,
      "nd": 1.68893,
      "elemId": 8,
      "sd": 19.5
    },
    {
      "label": "14",
      "R": 133.3264,
      "d": 8.7163,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19.5
    },
    {
      "label": "15A",
      "R": 79.7484,
      "d": 5.8668,
      "nd": 1.77377,
      "elemId": 9,
      "sd": 18.5
    },
    {
      "label": "16A",
      "R": -115.3962,
      "d": 3.9562,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.5
    },
    {
      "label": "17",
      "R": 192.5212,
      "d": 0.999,
      "nd": 1.86966,
      "elemId": 10,
      "sd": 17.6
    },
    {
      "label": "18",
      "R": 35.2125,
      "d": 3.6459,
      "nd": 2.001,
      "elemId": 11,
      "sd": 18.0
    },
    {
      "label": "19",
      "R": 64.9829,
      "d": 4.8785,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.6
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 3.508,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.216508745470342
    },
    {
      "label": "21",
      "R": 539.5023,
      "d": 3.9395,
      "nd": 1.59282,
      "elemId": 12,
      "sd": 17.6
    },
    {
      "label": "22",
      "R": -83.4488,
      "d": 2.6689,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.6
    },
    {
      "label": "23",
      "R": 1065.0975,
      "d": 8.0417,
      "nd": 1.48071,
      "elemId": 13,
      "sd": 17.6
    },
    {
      "label": "24",
      "R": -28.6941,
      "d": 0.999,
      "nd": 1.85451,
      "elemId": 14,
      "sd": 18.0
    },
    {
      "label": "25",
      "R": -150.6573,
      "d": 0.4573,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.6
    },
    {
      "label": "26",
      "R": 129.2499,
      "d": 4.6033,
      "nd": 1.98613,
      "elemId": 15,
      "sd": 17.5
    },
    {
      "label": "27",
      "R": -106.5875,
      "d": 0.3,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.5
    },
    {
      "label": "28",
      "R": 78.25,
      "d": 0.995,
      "nd": 1.76634,
      "elemId": 16,
      "sd": 17
    },
    {
      "label": "29",
      "R": 26.5216,
      "d": 7.5754,
      "nd": 1.437,
      "elemId": 17,
      "sd": 17
    },
    {
      "label": "30",
      "R": -641.5498,
      "d": 1.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17
    },
    {
      "label": "31",
      "R": 37.1997,
      "d": 8.4302,
      "nd": 1.437,
      "elemId": 18,
      "sd": 16.8
    },
    {
      "label": "32",
      "R": -59.4924,
      "d": 1.7256,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.8
    },
    {
      "label": "33",
      "R": 43.4097,
      "d": 6.953,
      "nd": 1.497,
      "elemId": 19,
      "sd": 16.2
    },
    {
      "label": "34",
      "R": -62.0139,
      "d": 0.8477,
      "nd": 1.91082,
      "elemId": 20,
      "sd": 16.2
    },
    {
      "label": "35",
      "R": 29.7524,
      "d": 3.3928,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.2
    },
    {
      "label": "36A",
      "R": 133.7065,
      "d": 3.7491,
      "nd": 1.8061,
      "elemId": 21,
      "sd": 14.2
    },
    {
      "label": "37A",
      "R": -199.3448,
      "d": 14.8136,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.6
    }
  ],
  "rearPlates": [
    {
      "label": "F",
      "thicknessMm": 2.5,
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "BSC7 (HOYA; source-listed example)",
      "dPgF": -0.0016456,
      "gapAfterMm": 1.0,
      "source": "JP2025099854A Example 3, PDF 29, surfaces 38–39; Fig.11 image-adjacent F; camera-side representation inferred, ownership not expressly stated"
    }
  ],
  "asph": {
    "15A": {
      "K": 0.0,
      "A4": -2.23652e-06,
      "A6": -2.2504e-09,
      "A8": 3.84549e-12,
      "A10": 3.11662e-15,
      "A12": -6.72119e-17,
      "A14": 1.49463e-19,
      "A16": -8.65376e-23
    },
    "16A": {
      "K": 0.0,
      "A4": 4.05148e-07,
      "A6": -3.08367e-09,
      "A8": 1.68754e-12,
      "A10": 2.86917e-14,
      "A12": -1.86935e-16,
      "A14": 4.08499e-19,
      "A16": -2.97153e-22
    },
    "36A": {
      "K": 0.0,
      "A4": -1.04802e-06,
      "A6": -1.09807e-08,
      "A8": -3.35729e-12,
      "A10": 1.59525e-13,
      "A12": -2.69304e-16,
      "A14": 0.0,
      "A16": 0.0
    },
    "37A": {
      "K": 0.0,
      "A4": 1.87054e-06,
      "A6": -7.69431e-09,
      "A8": -8.98365e-11,
      "A10": 6.98929e-13,
      "A12": -2.03111e-15,
      "A14": 2.18373e-18,
      "A16": 0.0
    }
  },
  "var": {
    "12": [
      3.95,
      5.9915
    ],
    "14": [
      8.7163,
      6.6748
    ]
  },
  "focusPositions": [
    0,
    1
  ],
  "varLabels": [
    [
      "12",
      "D12"
    ],
    [
      "14",
      "D14"
    ]
  ],
  "groups": [
    {
      "text": "G1 (negative)",
      "fromSurface": "1",
      "toSurface": "19"
    },
    {
      "text": "G2 (positive)",
      "fromSurface": "21",
      "toSurface": "37A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "D3",
      "fromSurface": "17",
      "toSurface": "19"
    },
    {
      "text": "D4",
      "fromSurface": "23",
      "toSurface": "25"
    },
    {
      "text": "D5",
      "fromSurface": "28",
      "toSurface": "30"
    },
    {
      "text": "D6",
      "fromSurface": "33",
      "toSurface": "35"
    }
  ],
  "closeFocusM": 0.6037538,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 435.2537,
      "distanceReference": "first-surface",
      "source": "JP2025099854A Example 3, paragraph 0140 PDF 29 variable spacings; first-surface reference paragraph 0109."
    }
  ],
  "focusDescription": "PUBLISHED inner focus: L8 (surfaces 13–14) moves 2.0415 mm imageward. Source near object distance 435.2537 mm from first surface, 603.7538 mm from image; this is not the marketed 0.385 m MFD. Intermediate states are linear interpolation of spacings.",
  "nominalFno": 1.46,
  "fstopSeries": [
    1.46,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "apertureBlades": 11,
  "yScFill": 0.4
} satisfies LensDataInput;

export default LENS_DATA;
