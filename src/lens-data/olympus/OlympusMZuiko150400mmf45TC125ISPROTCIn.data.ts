import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP2021096331A Numerical Examples 5/6, paragraphs 0647/0648, Figures 5/6.
 * Patent model associated with the Olympus product; exact production prescription and cam are unproven.
 * No dimensional scaling; original signs, source rows, both K=0 aspheres and physical rear plate retained.
 * Example 5 d15 prints literal "variable" without a schedule. Reconstructed 1.5 mm follows paired
 * Example 6 and independent source total-length closure 1.499995/1.499795/1.499995 mm.
 * The 1.5 mm value is reconstructed, not printed in Example 5; the nonnumeric source cell is
 * disclosed here and in the analysis rather than assigned a fictional printed number.
 * Zoom: exactly 3 published source stations at indices 0/50/100, all native values unchanged.
 * The other 98 stations are reconstructed: hold source-linear G2/G5 motion and solve the
 * source-stated rigid G4 compensator to preserve the interpolated native infinity image plane.
 * Both TC states share identical infinity front geometry; the production mechanical cam is unknown.
 * Focus: independently reconstruct G4 imageward travel to manufacturer 1.3 m object-to-image MFD;
 * D19+D22 remains constant. The patent supplies no finite-focus prescription.
 * Semi-diameters are inferred optical rims: shared surfaces from FIG. 5 (identical to TC OUT); converter
 * L20 (34-35) from FIG. 6; L21-L26 (36-44) at the smallest rims that hold the engine half-field
 * (5.57 vs 5.64 deg at 191.62 mm), between FIG. 6 and the maker drawing's converter proportions;
 * floor-checked by real-ray trace at f/5.75 and the Four Thirds corner. FIG. 6 draws L19 and L27/L28
 * smaller; the larger FIG. 5 rims are kept.
 * The default gap-sag allowance of 0.90 is retained.
 * Image stabilization is modelled centred at L16-L18. Surface 12 is the stop, labelled STO,
 * with a zoom-dependent radius derived from the stated f-number.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "olympus-mzuiko-150400mm-f45-tc125-is-pro-tc-in",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 150-400mm f/4.5 TC1.25× IS PRO",
  "subtitle": "JP 2021-096331 A, Numerical Example 6 — Olympus Corporation (TC IN)",
  "visible": false,
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "specs": [
      "28 ELEMENTS / 18 GROUPS",
      "DESIGN f = 191.62–490.90 mm",
      "DESIGN F/5.75",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "BUILT-IN 1.25× CONVERTER: 7 ELEMENTS / 4 GROUPS"
    ],
    "elementCount": 28,
    "groupCount": 18,
    "acceptsTeleconverters": true,
    "opticalConfiguration": {
      "groupKey": "olympus-mzuiko-150400-f45-tc125-is-pro-configurations",
      "label": "TC 1.25× IN",
      "order": 1
    },
    "focalLengthMm": {
      "marketing": [
        187.5,
        500
      ],
      "design": [
        191.62,
        490.9
      ]
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 5.75
    }
  },
  "source": {
    "patentNumber": "JP 2021-096331 A",
    "example": {
      "label": "Numerical Example 6",
      "id": "6"
    },
    "patentYear": 2021,
    "authors": [
      "Yuki Kubota",
      "Yasuharu Yamada"
    ],
    "assignees": [
      "Olympus Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Plano-Convex Positive",
      "nd": 1.48749,
      "vd": 70.23,
      "focalLengthMm": 310.050257,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive front singlet of fixed G1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.673,
      "vd": 38.26,
      "focalLengthMm": -244.382179,
      "glass": "S-NBH52V (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the fixed G1 achromatic doublet",
      "cemented": "C3"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.43875,
      "vd": 94.66,
      "focalLengthMm": 192.745423,
      "glass": "S-FPL55 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places Super ED glass here, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Very-low-dispersion positive member of the fixed G1 doublet",
      "cemented": "C3"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.85478,
      "vd": 24.8,
      "focalLengthMm": 131.973669,
      "glass": "S-NBH56 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the moving G2 variator triplet",
      "cemented": "C6"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.48749,
      "vd": 70.23,
      "focalLengthMm": -64.989848,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the moving G2 variator triplet",
      "cemented": "C6"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.78472,
      "vd": 25.68,
      "focalLengthMm": 373.500362,
      "glass": "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the moving G2 variator triplet",
      "cemented": "C6"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.788,
      "vd": 47.37,
      "focalLengthMm": -81.701422,
      "glass": "S-LAH64 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative singlet of the moving G2 variator"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive (2× Aspheric)",
      "nd": 1.497,
      "vd": 81.61,
      "focalLengthMm": 72.250647,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places EDA glass here, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Low-dispersion positive element with two aspheres in fixed G3"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Plano-Concave Negative",
      "nd": 1.84666,
      "vd": 23.78,
      "focalLengthMm": -120.076772,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the fixed G3 doublet",
      "cemented": "C15"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.43875,
      "vd": 94.66,
      "focalLengthMm": 117.205631,
      "glass": "S-FPL55 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places Super ED glass here, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Very-low-dispersion positive member of the fixed G3 doublet",
      "cemented": "C15"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.43875,
      "vd": 94.66,
      "focalLengthMm": 78.012436,
      "glass": "S-FPL55 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places Super ED glass here, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Very-low-dispersion positive singlet completing fixed G3"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": -41.734662,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the G4 focus doublet",
      "cemented": "C20"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Positive Meniscus",
      "nd": 1.85478,
      "vd": 24.8,
      "focalLengthMm": 106.301987,
      "glass": "S-NBH56 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the G4 focus doublet",
      "cemented": "C20"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Negative Meniscus",
      "nd": 1.5927,
      "vd": 35.31,
      "focalLengthMm": -84.041644,
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative singlet of the G5 zoom compensator"
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconvex Positive",
      "nd": 1.43875,
      "vd": 94.66,
      "focalLengthMm": 60.025423,
      "glass": "S-FPL55 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places Super ED glass here, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Very-low-dispersion positive singlet at the front of fixed G6"
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Biconvex Positive",
      "nd": 1.85478,
      "vd": 24.8,
      "focalLengthMm": 40.463165,
      "glass": "S-NBH56 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the G6 stabilization doublet, modelled centred",
      "cemented": "C27"
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconcave Negative",
      "nd": 1.59282,
      "vd": 68.63,
      "focalLengthMm": -39.747275,
      "glass": "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places ED glass here, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Negative member of the G6 stabilization doublet, modelled centred",
      "cemented": "C27"
    },
    {
      "id": 18,
      "name": "L18",
      "label": "Element 18",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": -31.695159,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative singlet of the G6 stabilization assembly, modelled centred"
    },
    {
      "id": 19,
      "name": "L19",
      "label": "Element 19",
      "type": "Biconvex Positive",
      "nd": 1.762,
      "vd": 40.1,
      "focalLengthMm": 55.204,
      "glass": "S-LAM55 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive G6 singlet before the converter insertion space"
    },
    {
      "id": 20,
      "name": "L20",
      "label": "Element 20",
      "type": "Positive Meniscus",
      "nd": 1.51742,
      "vd": 52.43,
      "focalLengthMm": 49.798972,
      "glass": "S-NSL36 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive entrance meniscus of the built-in converter in fixed G6"
    },
    {
      "id": 21,
      "name": "L21",
      "label": "Element 21",
      "type": "Negative Meniscus",
      "nd": 1.95375,
      "vd": 32.32,
      "focalLengthMm": -20.584214,
      "glass": "S-LAH98 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the first converter doublet in fixed G6",
      "cemented": "C36"
    },
    {
      "id": 22,
      "name": "L22",
      "label": "Element 22",
      "type": "Biconvex Positive",
      "nd": 1.59551,
      "vd": 39.24,
      "focalLengthMm": 21.5871,
      "glass": "S-TIM8 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the first converter doublet in fixed G6",
      "cemented": "C36"
    },
    {
      "id": 23,
      "name": "L23",
      "label": "Element 23",
      "type": "Biconcave Negative",
      "nd": 1.55032,
      "vd": 75.5,
      "focalLengthMm": -23.030185,
      "glass": "FCD705 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker drawing places ED glass at this converter element, consistent with the patent index and Abbe number; anomalous partial dispersion and production glass identity remain unverified.",
      "role": "Negative entrance member of the converter triplet in fixed G6",
      "cemented": "C39"
    },
    {
      "id": 24,
      "name": "L24",
      "label": "Element 24",
      "type": "Biconvex Positive",
      "nd": 1.58144,
      "vd": 40.75,
      "focalLengthMm": 19.316204,
      "glass": "S-TIL25 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive middle member of the converter triplet in fixed G6",
      "cemented": "C39"
    },
    {
      "id": 25,
      "name": "L25",
      "label": "Element 25",
      "type": "Biconcave Negative",
      "nd": 1.90043,
      "vd": 37.37,
      "focalLengthMm": -16.363521,
      "glass": "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative exit member of the converter triplet in fixed G6",
      "cemented": "C39"
    },
    {
      "id": 26,
      "name": "L26",
      "label": "Element 26",
      "type": "Positive Meniscus",
      "nd": 1.5927,
      "vd": 35.31,
      "focalLengthMm": 84.015432,
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive exit meniscus of the built-in converter in fixed G6"
    },
    {
      "id": 27,
      "name": "L27",
      "label": "Element 27",
      "type": "Biconvex Positive",
      "nd": 1.85025,
      "vd": 30.05,
      "focalLengthMm": 36.118388,
      "glass": "S-NBH57 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the fixed G6 rear doublet",
      "cemented": "C45"
    },
    {
      "id": 28,
      "name": "L28",
      "label": "Element 28",
      "type": "Plano-Concave Negative",
      "nd": 1.94595,
      "vd": 17.98,
      "focalLengthMm": -43.815635,
      "glass": "FDS18 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the fixed G6 rear doublet",
      "cemented": "C45"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 151.1464,
      "d": 8.5577,
      "sd": 44.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": "flat",
      "d": 20.0,
      "sd": 44.5
    },
    {
      "label": "3",
      "R": 132.8428,
      "d": 2.9,
      "sd": 38.8,
      "medium": 2
    },
    {
      "label": "4",
      "R": 72.8416,
      "d": 12.5,
      "sd": 38.8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 497.8603,
      "sd": 37.2
    },
    {
      "label": "6",
      "R": -521.8225,
      "d": 3.1,
      "sd": 16.8,
      "medium": 4
    },
    {
      "label": "7",
      "R": -93.0102,
      "d": 1.6,
      "sd": 16.8,
      "medium": 5
    },
    {
      "label": "8",
      "R": 48.3195,
      "d": 2.56,
      "sd": 16.8,
      "medium": 6
    },
    {
      "label": "9",
      "R": 56.5102,
      "d": 4.4178,
      "sd": 15.6
    },
    {
      "label": "10",
      "R": -72.427,
      "d": 1.35,
      "sd": 15.6,
      "medium": 7
    },
    {
      "label": "11",
      "R": 584.2709,
      "sd": 15.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.8
    },
    {
      "label": "13",
      "R": 55.6031,
      "d": 7.2608,
      "sd": 18,
      "asphere": {
        "K": 0.0,
        "A4": -2.32812e-06,
        "A6": -3.60753e-10,
        "A8": 1.07081e-13,
        "A10": -3.07466e-15
      },
      "medium": 8
    },
    {
      "label": "14",
      "R": -96.9847,
      "d": 3.6608,
      "sd": 18,
      "asphere": {
        "K": 0.0,
        "A4": 2.91882e-06,
        "A6": -7.53043e-11,
        "A8": 5.04843e-13,
        "A10": -2.44305e-15
      }
    },
    {
      "label": "15",
      "R": "flat",
      "d": 1.5,
      "sd": 17.5,
      "medium": 9
    },
    {
      "label": "16",
      "R": 101.6642,
      "d": 7.6741,
      "sd": 17.5,
      "medium": 10
    },
    {
      "label": "17",
      "R": -101.6642,
      "d": 0.6381,
      "sd": 17.5
    },
    {
      "label": "18",
      "R": 95.0019,
      "d": 9.958,
      "sd": 17.5,
      "medium": 11
    },
    {
      "label": "19",
      "R": -51.7949,
      "sd": 17.5
    },
    {
      "label": "20",
      "R": 212.9643,
      "d": 1.1,
      "sd": 13.5,
      "medium": 12
    },
    {
      "label": "21",
      "R": 27.938,
      "d": 2.4,
      "sd": 13.5,
      "medium": 13
    },
    {
      "label": "22",
      "R": 38.7447,
      "sd": 13.5
    },
    {
      "label": "23",
      "R": 77.5188,
      "d": 1.0,
      "sd": 8.9,
      "medium": 14
    },
    {
      "label": "24",
      "R": 30.1797,
      "sd": 8.9
    },
    {
      "label": "25",
      "R": 37.8085,
      "d": 3.256,
      "sd": 8.7,
      "medium": 15
    },
    {
      "label": "26",
      "R": -84.5146,
      "d": 1.6326,
      "sd": 8.7
    },
    {
      "label": "27",
      "R": 477.7324,
      "d": 2.7773,
      "sd": 9.3,
      "medium": 16
    },
    {
      "label": "28",
      "R": -37.1867,
      "d": 0.9,
      "sd": 9.3,
      "medium": 17
    },
    {
      "label": "29",
      "R": 64.8958,
      "d": 2.1108,
      "sd": 9.3
    },
    {
      "label": "30",
      "R": -60.4635,
      "d": 0.9,
      "sd": 9.2,
      "medium": 18
    },
    {
      "label": "31",
      "R": 41.4137,
      "d": 3.5801,
      "sd": 9.2
    },
    {
      "label": "32",
      "R": 44.7727,
      "d": 3.4977,
      "sd": 9.8,
      "medium": 19
    },
    {
      "label": "33",
      "R": -672.1776,
      "d": 1.767,
      "sd": 9.8
    },
    {
      "label": "34",
      "R": 19.7942,
      "d": 3.8368,
      "sd": 8.7,
      "medium": 20
    },
    {
      "label": "35",
      "R": 79.7494,
      "d": 1.7898,
      "sd": 8.7
    },
    {
      "label": "36",
      "R": 89.4919,
      "d": 1.0,
      "sd": 8.6,
      "medium": 21
    },
    {
      "label": "37",
      "R": 16.0124,
      "d": 5.3298,
      "sd": 8.6,
      "medium": 22
    },
    {
      "label": "38",
      "R": -57.101,
      "d": 1.7601,
      "sd": 8.6
    },
    {
      "label": "39",
      "R": -81.1092,
      "d": 0.95,
      "sd": 8.8,
      "medium": 23
    },
    {
      "label": "40",
      "R": 15.0836,
      "d": 5.1093,
      "sd": 8.8,
      "medium": 24
    },
    {
      "label": "41",
      "R": -38.498,
      "d": 0.95,
      "sd": 8.8,
      "medium": 25
    },
    {
      "label": "42",
      "R": 24.1489,
      "d": 1.4981,
      "sd": 8.8
    },
    {
      "label": "43",
      "R": 40.0157,
      "d": 1.9804,
      "sd": 9.4,
      "medium": 26
    },
    {
      "label": "44",
      "R": 199.9869,
      "d": 4.4964,
      "sd": 9.8
    },
    {
      "label": "45",
      "R": 111.9646,
      "d": 5.002,
      "sd": 11.9,
      "medium": 27
    },
    {
      "label": "46",
      "R": -41.4474,
      "d": 1.3,
      "sd": 11.9,
      "medium": 28
    },
    {
      "label": "47",
      "R": "flat",
      "d": 24.3098,
      "sd": 11.9
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 191.62,
        "label": "191.62 mm",
        "published": true
      },
      {
        "focalLengthMm": 193.32829125,
        "label": "193.328 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 195.0565886,
        "label": "195.057 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 196.8053583,
        "label": "196.805 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 198.57486832,
        "label": "198.575 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 200.36538949,
        "label": "200.365 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 202.17719555,
        "label": "202.177 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 204.01056306,
        "label": "204.011 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 205.86577141,
        "label": "205.866 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 207.74310277,
        "label": "207.743 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 209.64284209,
        "label": "209.643 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 211.56527703,
        "label": "211.565 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 213.5106979,
        "label": "213.511 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 215.47939767,
        "label": "215.479 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 217.47167184,
        "label": "217.472 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 219.48781847,
        "label": "219.488 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 221.52813801,
        "label": "221.528 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 223.59293333,
        "label": "223.593 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 225.68250954,
        "label": "225.683 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 227.797174,
        "label": "227.797 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 229.93723617,
        "label": "229.937 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 232.1030075,
        "label": "232.103 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 234.29480137,
        "label": "234.295 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 236.51293292,
        "label": "236.513 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 238.75771896,
        "label": "238.758 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 241.02947781,
        "label": "241.029 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 243.32852916,
        "label": "243.329 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 245.65519391,
        "label": "245.655 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 248.00979403,
        "label": "248.01 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 250.39265231,
        "label": "250.393 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 252.80409223,
        "label": "252.804 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 255.24443775,
        "label": "255.244 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 257.71401305,
        "label": "257.714 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 260.21314232,
        "label": "260.213 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 262.74214951,
        "label": "262.742 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 265.30135808,
        "label": "265.301 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 267.89109069,
        "label": "267.891 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 270.51166892,
        "label": "270.512 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 273.16341292,
        "label": "273.163 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 275.84664115,
        "label": "275.847 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 278.56166994,
        "label": "278.562 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 281.30881316,
        "label": "281.309 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 284.0883818,
        "label": "284.088 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 286.90068359,
        "label": "286.901 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 289.74602248,
        "label": "289.746 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 292.62469827,
        "label": "292.625 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 295.53700601,
        "label": "295.537 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 298.48323557,
        "label": "298.483 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 301.46367104,
        "label": "301.464 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 304.47859016,
        "label": "304.479 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 307.53,
        "label": "307.53 mm",
        "published": true
      },
      {
        "focalLengthMm": 310.42331647,
        "label": "310.423 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 313.349273,
        "label": "313.349 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 316.30633567,
        "label": "316.306 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 319.29469964,
        "label": "319.295 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 322.31455232,
        "label": "322.315 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 325.36607281,
        "label": "325.366 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 328.44943136,
        "label": "328.449 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 331.56478869,
        "label": "331.565 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 334.71229544,
        "label": "334.712 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 337.89209145,
        "label": "337.892 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 341.10430511,
        "label": "341.104 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 344.34905265,
        "label": "344.349 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 347.62643739,
        "label": "347.626 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 350.93654898,
        "label": "350.937 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 354.27946259,
        "label": "354.279 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 357.65523812,
        "label": "357.655 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 361.06391932,
        "label": "361.064 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 364.5055329,
        "label": "364.506 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 367.98008766,
        "label": "367.98 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 371.48757346,
        "label": "371.488 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 375.02796034,
        "label": "375.028 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 378.60119746,
        "label": "378.601 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 382.20721206,
        "label": "382.207 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 385.84590841,
        "label": "385.846 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 389.5171667,
        "label": "389.517 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 393.22084191,
        "label": "393.221 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 396.95676268,
        "label": "396.957 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 400.72473005,
        "label": "400.725 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 404.52451632,
        "label": "404.525 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 408.35586376,
        "label": "408.356 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 412.21848334,
        "label": "412.218 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 416.11205345,
        "label": "416.112 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 420.03621858,
        "label": "420.036 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 423.99058792,
        "label": "423.991 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 427.9747341,
        "label": "427.975 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 431.9881917,
        "label": "431.988 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 436.03045592,
        "label": "436.03 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 440.10098114,
        "label": "440.101 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 444.1991795,
        "label": "444.199 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 448.32441949,
        "label": "448.324 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 452.47602449,
        "label": "452.476 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 456.65327134,
        "label": "456.653 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 460.85538893,
        "label": "460.855 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 465.08155676,
        "label": "465.082 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 469.33090355,
        "label": "469.331 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 473.60250583,
        "label": "473.603 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 477.89538661,
        "label": "477.895 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 482.20851399,
        "label": "482.209 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 486.54079993,
        "label": "486.541 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 490.9,
        "label": "490.9 mm",
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1.3,
    "description": "G4 (L12/L13) moves imageward for near focus. The patent prints three infinity zoom states; the 98 intermediate zoom positions and the 1.3 m close-focus state are reconstructed. Both converter configurations share the front geometry at infinity, with close-focus travel solved separately. D19+D22 remains constant. Image stabilization is modelled centred; finite-focus MTF is unavailable."
  },
  "gaps": {
    "5": {
      "label": "D5",
      "values": [
        [
          56.5303,
          56.5303
        ],
        [
          57.099512,
          57.099512
        ],
        [
          57.668724,
          57.668724
        ],
        [
          58.237936,
          58.237936
        ],
        [
          58.807148,
          58.807148
        ],
        [
          59.37636,
          59.37636
        ],
        [
          59.945572,
          59.945572
        ],
        [
          60.514784,
          60.514784
        ],
        [
          61.083996,
          61.083996
        ],
        [
          61.653208,
          61.653208
        ],
        [
          62.22242,
          62.22242
        ],
        [
          62.791632,
          62.791632
        ],
        [
          63.360844,
          63.360844
        ],
        [
          63.930056,
          63.930056
        ],
        [
          64.499268,
          64.499268
        ],
        [
          65.06848,
          65.06848
        ],
        [
          65.637692,
          65.637692
        ],
        [
          66.206904,
          66.206904
        ],
        [
          66.776116,
          66.776116
        ],
        [
          67.345328,
          67.345328
        ],
        [
          67.91454,
          67.91454
        ],
        [
          68.483752,
          68.483752
        ],
        [
          69.052964,
          69.052964
        ],
        [
          69.622176,
          69.622176
        ],
        [
          70.191388,
          70.191388
        ],
        [
          70.7606,
          70.7606
        ],
        [
          71.329812,
          71.329812
        ],
        [
          71.899024,
          71.899024
        ],
        [
          72.468236,
          72.468236
        ],
        [
          73.037448,
          73.037448
        ],
        [
          73.60666,
          73.60666
        ],
        [
          74.175872,
          74.175872
        ],
        [
          74.745084,
          74.745084
        ],
        [
          75.314296,
          75.314296
        ],
        [
          75.883508,
          75.883508
        ],
        [
          76.45272,
          76.45272
        ],
        [
          77.021932,
          77.021932
        ],
        [
          77.591144,
          77.591144
        ],
        [
          78.160356,
          78.160356
        ],
        [
          78.729568,
          78.729568
        ],
        [
          79.29878,
          79.29878
        ],
        [
          79.867992,
          79.867992
        ],
        [
          80.437204,
          80.437204
        ],
        [
          81.006416,
          81.006416
        ],
        [
          81.575628,
          81.575628
        ],
        [
          82.14484,
          82.14484
        ],
        [
          82.714052,
          82.714052
        ],
        [
          83.283264,
          83.283264
        ],
        [
          83.852476,
          83.852476
        ],
        [
          84.421688,
          84.421688
        ],
        [
          84.9909,
          84.9909
        ],
        [
          85.513986,
          85.513986
        ],
        [
          86.037072,
          86.037072
        ],
        [
          86.560158,
          86.560158
        ],
        [
          87.083244,
          87.083244
        ],
        [
          87.60633,
          87.60633
        ],
        [
          88.129416,
          88.129416
        ],
        [
          88.652502,
          88.652502
        ],
        [
          89.175588,
          89.175588
        ],
        [
          89.698674,
          89.698674
        ],
        [
          90.22176,
          90.22176
        ],
        [
          90.744846,
          90.744846
        ],
        [
          91.267932,
          91.267932
        ],
        [
          91.791018,
          91.791018
        ],
        [
          92.314104,
          92.314104
        ],
        [
          92.83719,
          92.83719
        ],
        [
          93.360276,
          93.360276
        ],
        [
          93.883362,
          93.883362
        ],
        [
          94.406448,
          94.406448
        ],
        [
          94.929534,
          94.929534
        ],
        [
          95.45262,
          95.45262
        ],
        [
          95.975706,
          95.975706
        ],
        [
          96.498792,
          96.498792
        ],
        [
          97.021878,
          97.021878
        ],
        [
          97.544964,
          97.544964
        ],
        [
          98.06805,
          98.06805
        ],
        [
          98.591136,
          98.591136
        ],
        [
          99.114222,
          99.114222
        ],
        [
          99.637308,
          99.637308
        ],
        [
          100.160394,
          100.160394
        ],
        [
          100.68348,
          100.68348
        ],
        [
          101.206566,
          101.206566
        ],
        [
          101.729652,
          101.729652
        ],
        [
          102.252738,
          102.252738
        ],
        [
          102.775824,
          102.775824
        ],
        [
          103.29891,
          103.29891
        ],
        [
          103.821996,
          103.821996
        ],
        [
          104.345082,
          104.345082
        ],
        [
          104.868168,
          104.868168
        ],
        [
          105.391254,
          105.391254
        ],
        [
          105.91434,
          105.91434
        ],
        [
          106.437426,
          106.437426
        ],
        [
          106.960512,
          106.960512
        ],
        [
          107.483598,
          107.483598
        ],
        [
          108.006684,
          108.006684
        ],
        [
          108.52977,
          108.52977
        ],
        [
          109.052856,
          109.052856
        ],
        [
          109.575942,
          109.575942
        ],
        [
          110.099028,
          110.099028
        ],
        [
          110.622114,
          110.622114
        ],
        [
          111.1452,
          111.1452
        ]
      ]
    },
    "11": {
      "label": "D11",
      "values": [
        [
          56.7653,
          56.7653
        ],
        [
          56.196088,
          56.196088
        ],
        [
          55.626876,
          55.626876
        ],
        [
          55.057664,
          55.057664
        ],
        [
          54.488452,
          54.488452
        ],
        [
          53.91924,
          53.91924
        ],
        [
          53.350028,
          53.350028
        ],
        [
          52.780816,
          52.780816
        ],
        [
          52.211604,
          52.211604
        ],
        [
          51.642392,
          51.642392
        ],
        [
          51.07318,
          51.07318
        ],
        [
          50.503968,
          50.503968
        ],
        [
          49.934756,
          49.934756
        ],
        [
          49.365544,
          49.365544
        ],
        [
          48.796332,
          48.796332
        ],
        [
          48.22712,
          48.22712
        ],
        [
          47.657908,
          47.657908
        ],
        [
          47.088696,
          47.088696
        ],
        [
          46.519484,
          46.519484
        ],
        [
          45.950272,
          45.950272
        ],
        [
          45.38106,
          45.38106
        ],
        [
          44.811848,
          44.811848
        ],
        [
          44.242636,
          44.242636
        ],
        [
          43.673424,
          43.673424
        ],
        [
          43.104212,
          43.104212
        ],
        [
          42.535,
          42.535
        ],
        [
          41.965788,
          41.965788
        ],
        [
          41.396576,
          41.396576
        ],
        [
          40.827364,
          40.827364
        ],
        [
          40.258152,
          40.258152
        ],
        [
          39.68894,
          39.68894
        ],
        [
          39.119728,
          39.119728
        ],
        [
          38.550516,
          38.550516
        ],
        [
          37.981304,
          37.981304
        ],
        [
          37.412092,
          37.412092
        ],
        [
          36.84288,
          36.84288
        ],
        [
          36.273668,
          36.273668
        ],
        [
          35.704456,
          35.704456
        ],
        [
          35.135244,
          35.135244
        ],
        [
          34.566032,
          34.566032
        ],
        [
          33.99682,
          33.99682
        ],
        [
          33.427608,
          33.427608
        ],
        [
          32.858396,
          32.858396
        ],
        [
          32.289184,
          32.289184
        ],
        [
          31.719972,
          31.719972
        ],
        [
          31.15076,
          31.15076
        ],
        [
          30.581548,
          30.581548
        ],
        [
          30.012336,
          30.012336
        ],
        [
          29.443124,
          29.443124
        ],
        [
          28.873912,
          28.873912
        ],
        [
          28.3047,
          28.3047
        ],
        [
          27.781614,
          27.781614
        ],
        [
          27.258528,
          27.258528
        ],
        [
          26.735442,
          26.735442
        ],
        [
          26.212356,
          26.212356
        ],
        [
          25.68927,
          25.68927
        ],
        [
          25.166184,
          25.166184
        ],
        [
          24.643098,
          24.643098
        ],
        [
          24.120012,
          24.120012
        ],
        [
          23.596926,
          23.596926
        ],
        [
          23.07384,
          23.07384
        ],
        [
          22.550754,
          22.550754
        ],
        [
          22.027668,
          22.027668
        ],
        [
          21.504582,
          21.504582
        ],
        [
          20.981496,
          20.981496
        ],
        [
          20.45841,
          20.45841
        ],
        [
          19.935324,
          19.935324
        ],
        [
          19.412238,
          19.412238
        ],
        [
          18.889152,
          18.889152
        ],
        [
          18.366066,
          18.366066
        ],
        [
          17.84298,
          17.84298
        ],
        [
          17.319894,
          17.319894
        ],
        [
          16.796808,
          16.796808
        ],
        [
          16.273722,
          16.273722
        ],
        [
          15.750636,
          15.750636
        ],
        [
          15.22755,
          15.22755
        ],
        [
          14.704464,
          14.704464
        ],
        [
          14.181378,
          14.181378
        ],
        [
          13.658292,
          13.658292
        ],
        [
          13.135206,
          13.135206
        ],
        [
          12.61212,
          12.61212
        ],
        [
          12.089034,
          12.089034
        ],
        [
          11.565948,
          11.565948
        ],
        [
          11.042862,
          11.042862
        ],
        [
          10.519776,
          10.519776
        ],
        [
          9.99669,
          9.99669
        ],
        [
          9.473604,
          9.473604
        ],
        [
          8.950518,
          8.950518
        ],
        [
          8.427432,
          8.427432
        ],
        [
          7.904346,
          7.904346
        ],
        [
          7.38126,
          7.38126
        ],
        [
          6.858174,
          6.858174
        ],
        [
          6.335088,
          6.335088
        ],
        [
          5.812002,
          5.812002
        ],
        [
          5.288916,
          5.288916
        ],
        [
          4.76583,
          4.76583
        ],
        [
          4.242744,
          4.242744
        ],
        [
          3.719658,
          3.719658
        ],
        [
          3.196572,
          3.196572
        ],
        [
          2.673486,
          2.673486
        ],
        [
          2.1504,
          2.1504
        ]
      ]
    },
    "19": {
      "label": "D19",
      "values": [
        [
          5.2138,
          8.278346
        ],
        [
          5.262820521,
          8.382591178
        ],
        [
          5.311540419,
          8.487706399
        ],
        [
          5.359942361,
          8.593702017
        ],
        [
          5.408008475,
          8.700588392
        ],
        [
          5.455720337,
          8.808376025
        ],
        [
          5.503058959,
          8.91707556
        ],
        [
          5.550004772,
          9.026697789
        ],
        [
          5.596537611,
          9.137253647
        ],
        [
          5.642636703,
          9.24875422
        ],
        [
          5.688280651,
          9.361210745
        ],
        [
          5.733447415,
          9.474634611
        ],
        [
          5.778114301,
          9.589037361
        ],
        [
          5.822257945,
          9.704430695
        ],
        [
          5.865854292,
          9.820826471
        ],
        [
          5.908878587,
          9.938236709
        ],
        [
          5.951305354,
          10.056673587
        ],
        [
          5.993108379,
          10.176149452
        ],
        [
          6.034260698,
          10.296676813
        ],
        [
          6.074734575,
          10.418268348
        ],
        [
          6.114501488,
          10.540936906
        ],
        [
          6.153532114,
          10.664695504
        ],
        [
          6.191796306,
          10.789557336
        ],
        [
          6.229263082,
          10.915535768
        ],
        [
          6.265900605,
          11.042644345
        ],
        [
          6.301676165,
          11.170896789
        ],
        [
          6.336556166,
          11.300307004
        ],
        [
          6.370506105,
          11.430889073
        ],
        [
          6.403490558,
          11.562657266
        ],
        [
          6.435473161,
          11.695626036
        ],
        [
          6.466416596,
          11.829810024
        ],
        [
          6.496282572,
          11.965224057
        ],
        [
          6.525031812,
          12.101883155
        ],
        [
          6.552624035,
          12.239802526
        ],
        [
          6.579017944,
          12.378997573
        ],
        [
          6.604171206,
          12.51948389
        ],
        [
          6.628040444,
          12.661277268
        ],
        [
          6.650581217,
          12.804393692
        ],
        [
          6.671748014,
          12.948849346
        ],
        [
          6.691494233,
          13.094660609
        ],
        [
          6.709772178,
          13.24184406
        ],
        [
          6.726533044,
          13.390416477
        ],
        [
          6.741726906,
          13.540394838
        ],
        [
          6.755302713,
          13.691796319
        ],
        [
          6.767208281,
          13.844638297
        ],
        [
          6.777390282,
          13.998938351
        ],
        [
          6.785794245,
          14.154714257
        ],
        [
          6.792364547,
          14.311983993
        ],
        [
          6.797044416,
          14.470765734
        ],
        [
          6.799775926,
          14.631077857
        ],
        [
          6.8005,
          14.792939
        ],
        [
          6.787838697,
          14.929690165
        ],
        [
          6.773386442,
          15.067703925
        ],
        [
          6.757095954,
          15.206993498
        ],
        [
          6.738919188,
          15.347572269
        ],
        [
          6.718807341,
          15.489453717
        ],
        [
          6.696710862,
          15.632651414
        ],
        [
          6.672579465,
          15.77717902
        ],
        [
          6.64636214,
          15.923050284
        ],
        [
          6.618007169,
          16.070279033
        ],
        [
          6.587462142,
          16.218879176
        ],
        [
          6.554673973,
          16.368864694
        ],
        [
          6.519588924,
          16.520249638
        ],
        [
          6.482152626,
          16.673048126
        ],
        [
          6.442310102,
          16.827274332
        ],
        [
          6.400005797,
          16.982942488
        ],
        [
          6.355183604,
          17.140066872
        ],
        [
          6.307786897,
          17.298661804
        ],
        [
          6.257758567,
          17.458741639
        ],
        [
          6.205041057,
          17.62032076
        ],
        [
          6.149576399,
          17.783413571
        ],
        [
          6.091306262,
          17.948034485
        ],
        [
          6.030171992,
          18.114197922
        ],
        [
          5.966114665,
          18.281918291
        ],
        [
          5.899075134,
          18.451209989
        ],
        [
          5.828994084,
          18.622087384
        ],
        [
          5.755812092,
          18.794564806
        ],
        [
          5.679469687,
          18.968656535
        ],
        [
          5.599907411,
          19.144376789
        ],
        [
          5.51706589,
          19.321739711
        ],
        [
          5.430885905,
          19.500759353
        ],
        [
          5.341308462,
          19.681449662
        ],
        [
          5.248274875,
          19.863824463
        ],
        [
          5.151726846,
          20.047897447
        ],
        [
          5.051606546,
          20.233682146
        ],
        [
          4.947856709,
          20.421191921
        ],
        [
          4.840420722,
          20.610439936
        ],
        [
          4.729242716,
          20.801439142
        ],
        [
          4.614267674,
          20.994202254
        ],
        [
          4.495441524,
          21.188741726
        ],
        [
          4.372711251,
          21.385069728
        ],
        [
          4.246025003,
          21.583198116
        ],
        [
          4.115332204,
          21.783138414
        ],
        [
          3.980583672,
          21.984901773
        ],
        [
          3.84173173,
          22.188498952
        ],
        [
          3.698730336,
          22.393940277
        ],
        [
          3.5515352,
          22.601235614
        ],
        [
          3.400103915,
          22.810394329
        ],
        [
          3.244396081,
          23.021425253
        ],
        [
          3.084373438,
          23.234336642
        ],
        [
          2.92,
          23.449136
        ]
      ]
    },
    "22": {
      "label": "D22",
      "values": [
        [
          23.3087,
          20.244154
        ],
        [
          23.231119479,
          20.111348822
        ],
        [
          23.153839581,
          19.977673601
        ],
        [
          23.076877639,
          19.843117983
        ],
        [
          23.000251525,
          19.707671608
        ],
        [
          22.923979663,
          19.571323975
        ],
        [
          22.848081041,
          19.43406444
        ],
        [
          22.772575228,
          19.295882211
        ],
        [
          22.697482389,
          19.156766353
        ],
        [
          22.622823297,
          19.01670578
        ],
        [
          22.548619349,
          18.875689255
        ],
        [
          22.474892585,
          18.733705389
        ],
        [
          22.401665699,
          18.590742639
        ],
        [
          22.328962055,
          18.446789305
        ],
        [
          22.256805708,
          18.301833529
        ],
        [
          22.185221413,
          18.155863291
        ],
        [
          22.114234646,
          18.008866413
        ],
        [
          22.043871621,
          17.860830548
        ],
        [
          21.974159302,
          17.711743187
        ],
        [
          21.905125425,
          17.561591652
        ],
        [
          21.836798512,
          17.410363094
        ],
        [
          21.769207886,
          17.258044496
        ],
        [
          21.702383694,
          17.104622664
        ],
        [
          21.636356918,
          16.950084232
        ],
        [
          21.571159395,
          16.794415655
        ],
        [
          21.506823835,
          16.637603211
        ],
        [
          21.443383834,
          16.479632996
        ],
        [
          21.380873895,
          16.320490927
        ],
        [
          21.319329442,
          16.160162734
        ],
        [
          21.258786839,
          15.998633964
        ],
        [
          21.199283404,
          15.835889976
        ],
        [
          21.140857428,
          15.671915943
        ],
        [
          21.083548188,
          15.506696845
        ],
        [
          21.027395965,
          15.340217474
        ],
        [
          20.972442056,
          15.172462427
        ],
        [
          20.918728794,
          15.00341611
        ],
        [
          20.866299556,
          14.833062732
        ],
        [
          20.815198783,
          14.661386308
        ],
        [
          20.765471986,
          14.488370654
        ],
        [
          20.717165767,
          14.313999391
        ],
        [
          20.670327822,
          14.13825594
        ],
        [
          20.625006956,
          13.961123523
        ],
        [
          20.581253094,
          13.782585162
        ],
        [
          20.539117287,
          13.602623681
        ],
        [
          20.498651719,
          13.421221703
        ],
        [
          20.459909718,
          13.238361649
        ],
        [
          20.422945755,
          13.054025743
        ],
        [
          20.387815453,
          12.868196007
        ],
        [
          20.354575584,
          12.680854266
        ],
        [
          20.323284074,
          12.491982143
        ],
        [
          20.294,
          12.301561
        ],
        [
          20.328871303,
          12.187019835
        ],
        [
          20.365533558,
          12.071216075
        ],
        [
          20.404034046,
          11.954136502
        ],
        [
          20.444420812,
          11.835767731
        ],
        [
          20.486742659,
          11.716096283
        ],
        [
          20.531049138,
          11.595108586
        ],
        [
          20.577390535,
          11.47279098
        ],
        [
          20.62581786,
          11.349129716
        ],
        [
          20.676382831,
          11.224110967
        ],
        [
          20.729137858,
          11.097720824
        ],
        [
          20.784136027,
          10.969945306
        ],
        [
          20.841431076,
          10.840770362
        ],
        [
          20.901077374,
          10.710181874
        ],
        [
          20.963129898,
          10.578165668
        ],
        [
          21.027644203,
          10.444707512
        ],
        [
          21.094676396,
          10.309793128
        ],
        [
          21.164283103,
          10.173408196
        ],
        [
          21.236521433,
          10.035538361
        ],
        [
          21.311448943,
          9.89616924
        ],
        [
          21.389123601,
          9.755286429
        ],
        [
          21.469603738,
          9.612875515
        ],
        [
          21.552948008,
          9.468922078
        ],
        [
          21.639215335,
          9.323411709
        ],
        [
          21.728464866,
          9.176330011
        ],
        [
          21.820755916,
          9.027662616
        ],
        [
          21.916147908,
          8.877395194
        ],
        [
          22.014700313,
          8.725513465
        ],
        [
          22.116472589,
          8.572003211
        ],
        [
          22.22152411,
          8.416850289
        ],
        [
          22.329914095,
          8.260040647
        ],
        [
          22.441701538,
          8.101560338
        ],
        [
          22.556945125,
          7.941395537
        ],
        [
          22.675703154,
          7.779532553
        ],
        [
          22.798033454,
          7.615957854
        ],
        [
          22.923993291,
          7.450658079
        ],
        [
          23.053639278,
          7.283620064
        ],
        [
          23.187027284,
          7.114830858
        ],
        [
          23.324212326,
          6.944277746
        ],
        [
          23.465248476,
          6.771948274
        ],
        [
          23.610188749,
          6.597830272
        ],
        [
          23.759084997,
          6.421911884
        ],
        [
          23.911987796,
          6.244181586
        ],
        [
          24.068946328,
          6.064628227
        ],
        [
          24.23000827,
          5.883241048
        ],
        [
          24.395219664,
          5.700009723
        ],
        [
          24.5646248,
          5.514924386
        ],
        [
          24.738266085,
          5.327975671
        ],
        [
          24.916183919,
          5.139154747
        ],
        [
          25.098416562,
          4.948453358
        ],
        [
          25.285,
          4.755864
        ]
      ]
    },
    "24": {
      "label": "D24",
      "values": [
        [
          2.305,
          2.305
        ],
        [
          2.33356,
          2.33356
        ],
        [
          2.36212,
          2.36212
        ],
        [
          2.39068,
          2.39068
        ],
        [
          2.41924,
          2.41924
        ],
        [
          2.4478,
          2.4478
        ],
        [
          2.47636,
          2.47636
        ],
        [
          2.50492,
          2.50492
        ],
        [
          2.53348,
          2.53348
        ],
        [
          2.56204,
          2.56204
        ],
        [
          2.5906,
          2.5906
        ],
        [
          2.61916,
          2.61916
        ],
        [
          2.64772,
          2.64772
        ],
        [
          2.67628,
          2.67628
        ],
        [
          2.70484,
          2.70484
        ],
        [
          2.7334,
          2.7334
        ],
        [
          2.76196,
          2.76196
        ],
        [
          2.79052,
          2.79052
        ],
        [
          2.81908,
          2.81908
        ],
        [
          2.84764,
          2.84764
        ],
        [
          2.8762,
          2.8762
        ],
        [
          2.90476,
          2.90476
        ],
        [
          2.93332,
          2.93332
        ],
        [
          2.96188,
          2.96188
        ],
        [
          2.99044,
          2.99044
        ],
        [
          3.019,
          3.019
        ],
        [
          3.04756,
          3.04756
        ],
        [
          3.07612,
          3.07612
        ],
        [
          3.10468,
          3.10468
        ],
        [
          3.13324,
          3.13324
        ],
        [
          3.1618,
          3.1618
        ],
        [
          3.19036,
          3.19036
        ],
        [
          3.21892,
          3.21892
        ],
        [
          3.24748,
          3.24748
        ],
        [
          3.27604,
          3.27604
        ],
        [
          3.3046,
          3.3046
        ],
        [
          3.33316,
          3.33316
        ],
        [
          3.36172,
          3.36172
        ],
        [
          3.39028,
          3.39028
        ],
        [
          3.41884,
          3.41884
        ],
        [
          3.4474,
          3.4474
        ],
        [
          3.47596,
          3.47596
        ],
        [
          3.50452,
          3.50452
        ],
        [
          3.53308,
          3.53308
        ],
        [
          3.56164,
          3.56164
        ],
        [
          3.5902,
          3.5902
        ],
        [
          3.61876,
          3.61876
        ],
        [
          3.64732,
          3.64732
        ],
        [
          3.67588,
          3.67588
        ],
        [
          3.70444,
          3.70444
        ],
        [
          3.733,
          3.733
        ],
        [
          3.71079,
          3.71079
        ],
        [
          3.68858,
          3.68858
        ],
        [
          3.66637,
          3.66637
        ],
        [
          3.64416,
          3.64416
        ],
        [
          3.62195,
          3.62195
        ],
        [
          3.59974,
          3.59974
        ],
        [
          3.57753,
          3.57753
        ],
        [
          3.55532,
          3.55532
        ],
        [
          3.53311,
          3.53311
        ],
        [
          3.5109,
          3.5109
        ],
        [
          3.48869,
          3.48869
        ],
        [
          3.46648,
          3.46648
        ],
        [
          3.44427,
          3.44427
        ],
        [
          3.42206,
          3.42206
        ],
        [
          3.39985,
          3.39985
        ],
        [
          3.37764,
          3.37764
        ],
        [
          3.35543,
          3.35543
        ],
        [
          3.33322,
          3.33322
        ],
        [
          3.31101,
          3.31101
        ],
        [
          3.2888,
          3.2888
        ],
        [
          3.26659,
          3.26659
        ],
        [
          3.24438,
          3.24438
        ],
        [
          3.22217,
          3.22217
        ],
        [
          3.19996,
          3.19996
        ],
        [
          3.17775,
          3.17775
        ],
        [
          3.15554,
          3.15554
        ],
        [
          3.13333,
          3.13333
        ],
        [
          3.11112,
          3.11112
        ],
        [
          3.08891,
          3.08891
        ],
        [
          3.0667,
          3.0667
        ],
        [
          3.04449,
          3.04449
        ],
        [
          3.02228,
          3.02228
        ],
        [
          3.00007,
          3.00007
        ],
        [
          2.97786,
          2.97786
        ],
        [
          2.95565,
          2.95565
        ],
        [
          2.93344,
          2.93344
        ],
        [
          2.91123,
          2.91123
        ],
        [
          2.88902,
          2.88902
        ],
        [
          2.86681,
          2.86681
        ],
        [
          2.8446,
          2.8446
        ],
        [
          2.82239,
          2.82239
        ],
        [
          2.80018,
          2.80018
        ],
        [
          2.77797,
          2.77797
        ],
        [
          2.75576,
          2.75576
        ],
        [
          2.73355,
          2.73355
        ],
        [
          2.71134,
          2.71134
        ],
        [
          2.68913,
          2.68913
        ],
        [
          2.66692,
          2.66692
        ],
        [
          2.64471,
          2.64471
        ],
        [
          2.6225,
          2.6225
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 5.75,
    "fStops": [
      5.75,
      8,
      11,
      16,
      22,
      29
    ],
    "maxFNumber": 29,
    "blades": 9
  },
  "rearPlates": [
    {
      "label": "C",
      "thicknessMm": 4.1082,
      "nd": 1.51633,
      "vd": 64.14,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 2.045,
      "source": "JP2021096331A Numerical Example6, surfaces48-49; physical camera-side plate traced, not drawn."
    }
  ],
  "groups": [
    {
      "text": "G1 (+) Fixed",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2 (−) Zoom",
      "fromSurface": "6",
      "toSurface": "11"
    },
    {
      "text": "G3 (+) Fixed",
      "fromSurface": "13",
      "toSurface": "19"
    },
    {
      "text": "G4 (−) Focus",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "G5 (−) Zoom",
      "fromSurface": "23",
      "toSurface": "24"
    },
    {
      "text": "G6 (+) Fixed",
      "fromSurface": "25",
      "toSurface": "47"
    }
  ],
  "doublets": [
    {
      "text": "C15",
      "fromSurface": "15",
      "toSurface": "17"
    },
    {
      "text": "C20",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "C27",
      "fromSurface": "27",
      "toSurface": "29"
    },
    {
      "text": "C3",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C36",
      "fromSurface": "36",
      "toSurface": "38"
    },
    {
      "text": "C39",
      "fromSurface": "39",
      "toSurface": "42"
    },
    {
      "text": "C45",
      "fromSurface": "45",
      "toSurface": "47"
    },
    {
      "text": "C6",
      "fromSurface": "6",
      "toSurface": "9"
    }
  ],
  "layout": {
    "scFill": 0.65,
    "yScFill": 0.44
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
