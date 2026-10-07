import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — FUJINON XC50-230mmF4.5-6.7 OIS II research correlation.
 * Source: US 10,095,009 B2, Example 6, Tables 16–19, Figure 6.
 * 13 lens elements / 10 air-separated groups; six zoom groups (+ - + + - +).
 * Surface 11 is the source stop; 12A and 13A are aspheric (K = KA - 1 = 0).
 * All native dimensions and nonzero A4–A12 retained; no scaling to marketed 50–230 mm.
 * Source rear plates (Table 16 surfaces 25–32) use physical gaps via rearPlates: a 0.600 mm plate,
 * a 1.550 mm member printed as three contiguous same-index layers (0.350 + 0.600 + 0.600 mm, merged
 * here because they are optically identical to one plate), and a 0.700 mm plate.
 * SEMI-DIAMETERS: no effective diameters were published. Inferred from Figure 6, the
 * manufacturer diagram and exact ray geometry, then measured on the FIG. 6 wide-angle panel
 * (0.153 mm/px at the 300 dpi scan, scaled on the S1–S24 vertex span; the telephoto panel
 * agrees) and floor-checked by real-ray trace at all three zoom stations. Every element is
 * within about 5 % of its drawn rim except the front of L22. Both faces of L21 (6 and 7) carry
 * the drawn 9.0 mm blank height, so L21 renders as the squared plate of the figure. Surface 8
 * (L22 front) stays at 7.1 mm because the facing concave surfaces 7 and 8 close the 1.2 mm
 * airgap near h ≈ 7.6 mm (the figure draws flat contact annuli from there to the 9.0 mm edge);
 * 8 is therefore the working aperture of that pair, and the part of 7 outside it is drawn
 * glass, not clear aperture. 9 and 10 follow the smaller L23 (drawn 8.1 mm), not the 9.0 mm
 * L22 blank. L31 rims (12A/13A) are held at 8.6 mm (drawn ≈ 8.8 mm), inside the slope turnover
 * of 13A at h ≈ 8.83 mm. L33 (16/17) carries its drawn 10.0 mm edge on both faces; its rear
 * face is drawn curved only to ≈ 7.5–8 mm with a flat annulus beyond, which one sd per surface
 * cannot carry. Iris schedule is inferred by calibration to
 * native F/4.63, 5.76, 6.92; calibration-target agreement is not independent stop evidence.
 * Zoom gaps: DD5, DD10, DD17, DD19, DD22. Only source infinity zoom states published.
 * Focus: NO_INTERNAL_RECONSTRUCTION; no internal focus motion. closeFocusM=1.1 is the
 * production MFD, kept as product metadata only.
 * G4 physical focus mechanism is described, but finite-focus travel is not reconstructed.
 * Source image plane is retained: it lies 0.024 / 0.012 / 0.039 mm objectward of the computed
 * paraxial image at wide / intermediate / telephoto. No rear spacing is altered to remove that residual.
 * Glass labels name coordinate-equal catalog rows as dispersion proxies, not vendor/melt
 * identification; no APO claim.
 * Selected production-to-patent correlation is not manufacturer-confirmed.
 */

const LENS_DATA = {
  "key": "fujifilm-fujinon-xc-50-230mm-f45-67-ois-ii",
  "maker": "Fujifilm",
  "name": "FUJIFILM FUJINON XC 50-230mm f/4.5-6.7 OIS II",
  "subtitle": "US 10,095,009 B2 EXAMPLE 6 — FUJIFILM / ORI, CHO — PRODUCT CORRELATION UNCONFIRMED",
  "specs": [
    "13 ELEMENTS / 10 GROUPS",
    "DESIGN f = 51.53–223.44 mm",
    "DESIGN F/4.63–6.92",
    "2 ASPHERICAL SURFACES / 1 ELEMENT",
    "1 ED (INFERRED)"
  ],
  "focalLengthMarketing": [
    50,
    230
  ],
  "focalLengthDesign": [
    51.55367841411755,
    223.48628874813753
  ],
  "apertureMarketing": 4.5,
  "apertureDesign": 4.63,
  "lensMounts": [
    "fujifilm-x"
  ],
  "imageFormat": "aps-c",
  "patentNumber": "US 10,095,009 B2",
  "patentAuthors": [
    "Tetsuya Ori",
    "Michio Cho"
  ],
  "patentAssignees": [
    "Fujifilm Corporation"
  ],
  "patentYear": 2018,
  "elementCount": 13,
  "groupCount": 10,
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "L11",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.23,
      "indexReference": "d",
      "fl": 167.23194420217774,
      "glass": "S-FSL5 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Positive leading element of G1."
    },
    {
      "id": 2,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "L12",
      "type": "Negative Meniscus",
      "nd": 1.60342,
      "vd": 38.03,
      "indexReference": "d",
      "fl": -124.63306211992648,
      "glass": "S-TIM5 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Negative constituent of the G1 cemented pair.",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "L13",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.23,
      "indexReference": "d",
      "fl": 95.00170258967565,
      "glass": "S-FSL5 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Positive constituent of the G1 cemented pair.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "L21",
      "type": "Biconcave Negative",
      "nd": 1.7495,
      "vd": 35.33,
      "indexReference": "d",
      "fl": -54.28731335620799,
      "glass": "S-NBH51 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Negative leading element of G2, the group the patent shifts across the axis for camera-shake correction."
    },
    {
      "id": 5,
      "name": "L22",
      "diagramLabel": "L22",
      "label": "L22",
      "type": "Biconcave Negative",
      "nd": 1.7859,
      "vd": 44.2,
      "indexReference": "d",
      "fl": -23.1399403651219,
      "glass": "S-LAH51 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Negative constituent of the G2 cemented pair.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L23",
      "diagramLabel": "L23",
      "label": "L23",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 18.9,
      "indexReference": "d",
      "fl": 38.09611501979411,
      "glass": "S-NPH2 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Positive constituent of the G2 cemented pair.",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L31",
      "diagramLabel": "L31",
      "label": "L31",
      "type": "Pos. Meniscus (2× Asph)",
      "nd": 1.65296,
      "vd": 36.79,
      "indexReference": "d",
      "fl": 64.46665795096196,
      "glass": "K-PG395-M (SUMITA K-PG395(M) molding-state coordinate equivalent; supplier unresolved)",
      "role": "Doubly aspheric positive leading element of G3."
    },
    {
      "id": 8,
      "name": "L32",
      "diagramLabel": "L32",
      "label": "L32",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.54,
      "indexReference": "d",
      "fl": 31.053569004272887,
      "glass": "S-FPL51 (OHARA coordinate equivalent; supplier unresolved)",
      "apd": "inferred",
      "apdNote": "Inferred from coordinates: S-FPL51-class low-dispersion crown (νd 81.54; catalog dPgF +0.031) at the position Fujifilm marks as the ED element. The patent publishes no partial dispersion.",
      "role": "Low-dispersion positive element of G3."
    },
    {
      "id": 9,
      "name": "L33",
      "diagramLabel": "L33",
      "label": "L33",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": -41.09051143007377,
      "glass": "S-TIH53 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Negative rear element of G3."
    },
    {
      "id": 10,
      "name": "L41",
      "diagramLabel": "L41",
      "label": "L41",
      "type": "Positive Meniscus",
      "nd": 1.59282,
      "vd": 68.63,
      "indexReference": "d",
      "fl": 62.29688811203275,
      "glass": "FCD505 (HOYA coordinate equivalent; supplier unresolved)",
      "role": "Positive G4 focus-group element; finite-focus motion is not reconstructed."
    },
    {
      "id": 11,
      "name": "L51",
      "diagramLabel": "L51",
      "label": "L51",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 93.52461764327037,
      "glass": "E-FDS1 (HOYA coordinate equivalent; supplier unresolved)",
      "role": "Positive constituent of the negative G5 cemented pair.",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L52",
      "diagramLabel": "L52",
      "label": "L52",
      "type": "Biconcave Negative",
      "nd": 1.62299,
      "vd": 58.16,
      "indexReference": "d",
      "fl": -27.792424856553733,
      "glass": "S-BSM15 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Negative constituent of the G5 cemented pair.",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L61",
      "diagramLabel": "L61",
      "label": "L61",
      "type": "Positive Meniscus",
      "nd": 1.61293,
      "vd": 37.0,
      "indexReference": "d",
      "fl": 110.7404109047656,
      "glass": "S-TIM3 (OHARA coordinate equivalent; supplier unresolved)",
      "role": "Positive fixed rear group G6."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 91.2839,
      "d": 4.3,
      "nd": 1.48749,
      "elemId": 1,
      "sd": 20.5
    },
    {
      "label": "2",
      "R": -750.7105,
      "d": 0.1,
      "nd": 1.0,
      "elemId": 0,
      "sd": 20.5
    },
    {
      "label": "3",
      "R": 98.0341,
      "d": 1.61,
      "nd": 1.60342,
      "elemId": 2,
      "sd": 20
    },
    {
      "label": "4",
      "R": 42.295,
      "d": 6.1,
      "nd": 1.48749,
      "elemId": 3,
      "sd": 20
    },
    {
      "label": "5",
      "R": 464.531,
      "d": 13.14,
      "nd": 1.0,
      "elemId": 0,
      "sd": 20
    },
    {
      "label": "6",
      "R": -127.1629,
      "d": 0.84,
      "nd": 1.7495,
      "elemId": 4,
      "sd": 9.0
    },
    {
      "label": "7",
      "R": 60.0025,
      "d": 1.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.0
    },
    {
      "label": "8",
      "R": -41.2999,
      "d": 0.85,
      "nd": 1.7859,
      "elemId": 5,
      "sd": 7.1
    },
    {
      "label": "9",
      "R": 32.788,
      "d": 1.9,
      "nd": 1.92286,
      "elemId": 6,
      "sd": 8.0
    },
    {
      "label": "10",
      "R": 472.9846,
      "d": 20.55,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.0
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.14740029439
    },
    {
      "label": "12A",
      "R": 35.2293,
      "d": 3.5,
      "nd": 1.65296,
      "elemId": 7,
      "sd": 8.6
    },
    {
      "label": "13A",
      "R": 207.5426,
      "d": 4.57,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.6
    },
    {
      "label": "14",
      "R": 99.4961,
      "d": 4.5,
      "nd": 1.497,
      "elemId": 8,
      "sd": 9.4
    },
    {
      "label": "15",
      "R": -17.9929,
      "d": 0.3,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.4
    },
    {
      "label": "16",
      "R": 51.7317,
      "d": 0.8,
      "nd": 1.84666,
      "elemId": 9,
      "sd": 10.0
    },
    {
      "label": "17",
      "R": 20.6535,
      "d": 6.18,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.0
    },
    {
      "label": "18",
      "R": 26.3323,
      "d": 2.0,
      "nd": 1.59282,
      "elemId": 10,
      "sd": 8.8
    },
    {
      "label": "19",
      "R": 89.1617,
      "d": 17.24,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.8
    },
    {
      "label": "20",
      "R": -128.4997,
      "d": 2.64,
      "nd": 1.92286,
      "elemId": 11,
      "sd": 10.2
    },
    {
      "label": "21",
      "R": -52.14,
      "d": 0.85,
      "nd": 1.62299,
      "elemId": 12,
      "sd": 10.2
    },
    {
      "label": "22",
      "R": 26.0849,
      "d": 5.93,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.2
    },
    {
      "label": "23",
      "R": -144.0763,
      "d": 4.0,
      "nd": 1.61293,
      "elemId": 13,
      "sd": 14.7
    },
    {
      "label": "24",
      "R": -46.6261,
      "d": 17.84,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.7
    }
  ],
  "rearPlates": [
    {
      "label": "PP1",
      "thicknessMm": 0.6,
      "nd": 1.54763,
      "vd": 54.98,
      "glass": "Unmatched (source rear plate nd=1.54763, vd=54.98)",
      "gapAfterMm": 0.81,
      "source": "US 10,095,009 B2 Example 6 Table 16 surfaces 25-26; physical gaps preserved"
    },
    {
      "label": "PP2",
      "thicknessMm": 1.55,
      "nd": 1.54763,
      "vd": 54.98,
      "glass": "Unmatched (source rear plate nd=1.54763, vd=54.98)",
      "gapAfterMm": 0.5,
      "source": "US 10,095,009 B2 Example 6 Table 16 surfaces 27-30; three contiguous same-index layers 0.350 + 0.600 + 0.600 mm merged into one optically identical 1.550 mm plate"
    },
    {
      "label": "PP3",
      "thicknessMm": 0.7,
      "nd": 1.49784,
      "vd": 54.98,
      "glass": "Unmatched (source rear plate nd=1.49784, vd=54.98)",
      "gapAfterMm": 1.12,
      "source": "US 10,095,009 B2 Example 6 Table 16 surfaces 31-32; physical gaps preserved"
    }
  ],
  "asph": {
    "12A": {
      "K": 0.0,
      "A4": -2.192971e-05,
      "A6": -2.6825828e-07,
      "A8": -1.4041431e-09,
      "A10": -1.3101658e-11,
      "A12": 2.0009875e-14,
      "A14": 0
    },
    "13A": {
      "K": 0.0,
      "A4": 2.4812223e-05,
      "A6": -2.3807118e-07,
      "A8": 8.3060405e-10,
      "A10": -4.3238076e-11,
      "A12": 2.5906063e-13,
      "A14": 0
    }
  },
  "var": {
    "5": [
      [
        13.14,
        13.14
      ],
      [
        37.23,
        37.23
      ],
      [
        61.95,
        61.95
      ]
    ],
    "10": [
      [
        20.55,
        20.55
      ],
      [
        9.15,
        9.15
      ],
      [
        3.89,
        3.89
      ]
    ],
    "17": [
      [
        6.18,
        6.18
      ],
      [
        15.15,
        15.15
      ],
      [
        28.49,
        28.49
      ]
    ],
    "19": [
      [
        17.24,
        17.24
      ],
      [
        16.74,
        16.74
      ],
      [
        2.9,
        2.9
      ]
    ],
    "22": [
      [
        5.93,
        5.93
      ],
      [
        15.74,
        15.74
      ],
      [
        31.82,
        31.82
      ]
    ]
  },
  "varLabels": [
    [
      "5",
      "DD[5]"
    ],
    [
      "10",
      "DD[10]"
    ],
    [
      "17",
      "DD[17]"
    ],
    [
      "19",
      "DD[19]"
    ],
    [
      "22",
      "DD[22]"
    ]
  ],
  "zoomPositions": [
    51.53,
    107.31,
    223.44
  ],
  "zoomApertureModel": "from-nominal-fno",
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2 (OIS)",
      "fromSurface": "6",
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "12A",
      "toSurface": "17"
    },
    {
      "text": "G4 (FOCUS)",
      "fromSurface": "18",
      "toSurface": "19"
    },
    {
      "text": "G5",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "G6",
      "fromSurface": "23",
      "toSurface": "24"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "D3",
      "fromSurface": "20",
      "toSurface": "22"
    }
  ],
  "closeFocusM": 1.1,
  "focusDescription": "Focus travel is not modeled. The patent focuses by moving G4 (L41) toward the object but tabulates infinity-focus zoom states only, so every gap is the same at both focus endpoints. The 1.1 m minimum focus distance is Fujifilm's production figure, kept as product metadata.",
  "nominalFno": [
    4.63,
    5.76,
    6.92
  ],
  "maxFstop": 22,
  "fstopSeries": [
    4.63,
    5.6,
    6.92,
    8,
    11,
    16,
    22
  ],
  "yScFill": 0.3,
  "apertureBlades": 7
} satisfies LensDataInput;

export default LENS_DATA;
