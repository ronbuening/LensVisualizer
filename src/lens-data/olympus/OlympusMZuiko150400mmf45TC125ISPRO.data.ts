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
 * Semi-diameters are inferred optical rims estimated from FIG. 5 (read on the clean sides of all three
 * panels; the leader-crossed wide panel is a check), floor-checked by real-ray trace at f/4.59 and the
 * Four Thirds corner. Shared rims are identical in both converter configurations.
 * The default gap-sag allowance of 0.90 is retained.
 * Image stabilization is modelled centred at L16-L18. Surface 12 is the stop, labelled STO,
 * with a zoom-dependent radius derived from the stated f-number.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "olympus-mzuiko-150400mm-f45-tc125-is-pro",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 150-400mm f/4.5 TC1.25× IS PRO",
  "subtitle": "JP 2021-096331 A, Numerical Example 5 — Olympus Corporation (TC OUT)",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "specs": [
      "21 ELEMENTS / 14 GROUPS",
      "DESIGN f = 153.00–391.96 mm",
      "DESIGN F/4.59",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "28 ELEMENTS / 18 GROUPS WITH BUILT-IN CONVERTER"
    ],
    "elementCount": 21,
    "groupCount": 14,
    "acceptsTeleconverters": true,
    "opticalConfiguration": {
      "groupKey": "olympus-mzuiko-150400-f45-tc125-is-pro-configurations",
      "label": "TC OUT",
      "order": 0
    },
    "focalLengthMm": {
      "marketing": [
        150,
        400
      ],
      "design": [
        153.0,
        391.96
      ]
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.59
    }
  },
  "source": {
    "patentNumber": "JP 2021-096331 A",
    "example": {
      "label": "Numerical Example 5",
      "id": "5"
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
      "diagramLabel": "L1",
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
      "diagramLabel": "L2",
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
      "diagramLabel": "L3",
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
      "diagramLabel": "L4",
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
      "diagramLabel": "L5",
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
      "diagramLabel": "L6",
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
      "diagramLabel": "L7",
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
      "diagramLabel": "L8",
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
      "diagramLabel": "L9",
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
      "diagramLabel": "L10",
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
      "diagramLabel": "L11",
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
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": -41.734662,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the G4 zoom and focus doublet",
      "cemented": "C20"
    },
    {
      "id": 13,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Positive Meniscus",
      "nd": 1.85478,
      "vd": 24.8,
      "focalLengthMm": 106.301987,
      "glass": "S-NBH56 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the G4 zoom and focus doublet",
      "cemented": "C20"
    },
    {
      "id": 14,
      "name": "L14",
      "diagramLabel": "L14",
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
      "diagramLabel": "L15",
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
      "diagramLabel": "L16",
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
      "diagramLabel": "L17",
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
      "diagramLabel": "L18",
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
      "diagramLabel": "L19",
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
      "diagramLabel": "L20",
      "label": "Element 20",
      "type": "Biconvex Positive",
      "nd": 1.85025,
      "vd": 30.05,
      "focalLengthMm": 36.118388,
      "glass": "S-NBH57 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Positive member of the fixed G6 rear doublet",
      "cemented": "C34"
    },
    {
      "id": 21,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "Element 21",
      "type": "Plano-Concave Negative",
      "nd": 1.94595,
      "vd": 17.98,
      "focalLengthMm": -43.815635,
      "glass": "FDS18 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "role": "Negative member of the fixed G6 rear doublet",
      "cemented": "C34"
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
      "label": "13A",
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
      "label": "14A",
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
      "d": 30.4677,
      "sd": 9.8
    },
    {
      "label": "34",
      "R": 111.9646,
      "d": 5.002,
      "sd": 11.9,
      "medium": 20
    },
    {
      "label": "35",
      "R": -41.4474,
      "d": 1.3,
      "sd": 11.9,
      "medium": 21
    },
    {
      "label": "36",
      "R": "flat",
      "d": 24.3098,
      "sd": 11.9
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 153.0,
        "label": "153 mm",
        "published": true
      },
      {
        "focalLengthMm": 154.36540476,
        "label": "154.365 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 155.74537499,
        "label": "155.745 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 157.14169145,
        "label": "157.142 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 158.55456807,
        "label": "158.555 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 159.98422112,
        "label": "159.984 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 161.43086916,
        "label": "161.431 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 162.894733,
        "label": "162.895 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 164.37603573,
        "label": "164.376 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 165.87500265,
        "label": "165.875 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 167.39186127,
        "label": "167.392 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 168.92684128,
        "label": "168.927 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 170.48017447,
        "label": "170.48 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 172.05209476,
        "label": "172.052 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 173.64283812,
        "label": "173.643 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 175.25264249,
        "label": "175.253 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 176.8817478,
        "label": "176.882 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 178.53039585,
        "label": "178.53 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 180.19883028,
        "label": "180.199 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 181.88729649,
        "label": "181.887 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 183.59604155,
        "label": "183.596 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 185.32531417,
        "label": "185.325 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 187.07536454,
        "label": "187.075 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 188.84644431,
        "label": "188.846 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 190.6388064,
        "label": "190.639 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 192.45270501,
        "label": "192.453 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 194.28839537,
        "label": "194.288 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 196.14613371,
        "label": "196.146 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 198.0261771,
        "label": "198.026 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 199.92878329,
        "label": "199.929 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 201.85421054,
        "label": "201.854 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 203.80271753,
        "label": "203.803 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 205.77456308,
        "label": "205.775 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 207.77000606,
        "label": "207.77 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 209.78930512,
        "label": "209.789 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 211.83271852,
        "label": "211.833 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 213.90050389,
        "label": "213.901 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 215.99291799,
        "label": "215.993 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 218.11021646,
        "label": "218.11 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 220.25265355,
        "label": "220.253 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 222.42048184,
        "label": "222.42 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 224.61395194,
        "label": "224.614 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 226.83331215,
        "label": "226.833 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 229.07880818,
        "label": "229.079 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 231.35068273,
        "label": "231.351 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 233.64917515,
        "label": "233.649 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 235.97452104,
        "label": "235.975 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 238.32695184,
        "label": "238.327 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 240.70669436,
        "label": "240.707 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 243.11397038,
        "label": "243.114 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 245.55,
        "label": "245.55 mm",
        "published": true
      },
      {
        "focalLengthMm": 247.86060637,
        "label": "247.861 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 250.19689257,
        "label": "250.197 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 252.55801628,
        "label": "252.558 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 254.94413334,
        "label": "254.944 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 257.3553934,
        "label": "257.355 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 259.79193949,
        "label": "259.792 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 262.25390752,
        "label": "262.254 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 264.74142585,
        "label": "264.741 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 267.25461476,
        "label": "267.255 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 269.79358592,
        "label": "269.794 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 272.35844186,
        "label": "272.358 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 274.94927538,
        "label": "274.949 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 277.56616898,
        "label": "277.566 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 280.20919427,
        "label": "280.209 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 282.87841126,
        "label": "282.878 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 285.57386781,
        "label": "285.574 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 288.29559884,
        "label": "288.296 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 291.04362569,
        "label": "291.044 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 293.81795539,
        "label": "293.818 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 296.61857987,
        "label": "296.619 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 299.44547521,
        "label": "299.445 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 302.29860081,
        "label": "302.299 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 305.17789859,
        "label": "305.178 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 308.08329213,
        "label": "308.083 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 311.01468576,
        "label": "311.015 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 313.97196372,
        "label": "313.972 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 316.95498917,
        "label": "316.955 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 319.96360326,
        "label": "319.964 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 322.9976242,
        "label": "322.998 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 326.0568462,
        "label": "326.057 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 329.1410385,
        "label": "329.141 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 332.2499443,
        "label": "332.25 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 335.38327974,
        "label": "335.383 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 338.54073281,
        "label": "338.541 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 341.72196225,
        "label": "341.722 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 344.92659647,
        "label": "344.927 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 348.15423239,
        "label": "348.154 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 351.40443438,
        "label": "351.404 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 354.67673306,
        "label": "354.677 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 357.97062419,
        "label": "357.971 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 361.28556752,
        "label": "361.286 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 364.62098565,
        "label": "364.621 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 367.97626288,
        "label": "367.976 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 371.35074407,
        "label": "371.351 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 374.74373355,
        "label": "374.744 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 378.15449396,
        "label": "378.154 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 381.58224522,
        "label": "381.582 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 385.02616341,
        "label": "385.026 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 388.48537975,
        "label": "388.485 mm (inferred cam)",
        "published": false
      },
      {
        "focalLengthMm": 391.96,
        "label": "391.96 mm",
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1.3,
    "description": "G4 (L12/L13) moves imageward for near focus; during zoom it first moves imageward then objectward. The patent prints three infinity zoom states; the 98 intermediate zoom positions and the 1.3 m close-focus state are reconstructed. Both converter configurations share the front geometry at infinity, with close-focus travel solved separately. D19+D22 remains constant. Image stabilization is modelled centred; finite-focus MTF is unavailable."
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
          8.278451
        ],
        [
          5.262820521,
          8.3826965
        ],
        [
          5.311540419,
          8.487811942
        ],
        [
          5.359942361,
          8.593807784
        ],
        [
          5.408008475,
          8.700694385
        ],
        [
          5.455720337,
          8.808482246
        ],
        [
          5.503058959,
          8.917182013
        ],
        [
          5.550004772,
          9.026804476
        ],
        [
          5.596537611,
          9.137360571
        ],
        [
          5.642636703,
          9.248861383
        ],
        [
          5.688280651,
          9.361318151
        ],
        [
          5.733447415,
          9.474742261
        ],
        [
          5.778114301,
          9.589145259
        ],
        [
          5.822257945,
          9.704538844
        ],
        [
          5.865854292,
          9.820934874
        ],
        [
          5.908878587,
          9.938345369
        ],
        [
          5.951305354,
          10.056782507
        ],
        [
          5.993108379,
          10.176258635
        ],
        [
          6.034260698,
          10.296786262
        ],
        [
          6.074734575,
          10.418378067
        ],
        [
          6.114501488,
          10.541046897
        ],
        [
          6.153532114,
          10.664805772
        ],
        [
          6.191796306,
          10.789667883
        ],
        [
          6.229263082,
          10.915646599
        ],
        [
          6.265900605,
          11.042755462
        ],
        [
          6.301676165,
          11.171008197
        ],
        [
          6.336556166,
          11.300418705
        ],
        [
          6.370506105,
          11.431001072
        ],
        [
          6.403490558,
          11.562769567
        ],
        [
          6.435473161,
          11.695738642
        ],
        [
          6.466416596,
          11.829922939
        ],
        [
          6.496282572,
          11.965337286
        ],
        [
          6.525031812,
          12.101996702
        ],
        [
          6.552624035,
          12.239916395
        ],
        [
          6.579017944,
          12.379111768
        ],
        [
          6.604171206,
          12.519598415
        ],
        [
          6.628040444,
          12.661392128
        ],
        [
          6.650581217,
          12.804508892
        ],
        [
          6.671748014,
          12.94896489
        ],
        [
          6.691494233,
          13.094776502
        ],
        [
          6.709772178,
          13.241960307
        ],
        [
          6.726533044,
          13.390533083
        ],
        [
          6.741726906,
          13.540511807
        ],
        [
          6.755302713,
          13.691913656
        ],
        [
          6.767208281,
          13.844756009
        ],
        [
          6.777390282,
          13.999056442
        ],
        [
          6.785794245,
          14.154832733
        ],
        [
          6.792364547,
          14.312102859
        ],
        [
          6.797044416,
          14.470884996
        ],
        [
          6.799775926,
          14.631197521
        ],
        [
          6.8005,
          14.793059
        ],
        [
          6.787838697,
          14.929810529
        ],
        [
          6.773386442,
          15.067824585
        ],
        [
          6.757095954,
          15.207114458
        ],
        [
          6.738919188,
          15.347693533
        ],
        [
          6.718807341,
          15.489575289
        ],
        [
          6.696710862,
          15.632773299
        ],
        [
          6.672579465,
          15.777301223
        ],
        [
          6.64636214,
          15.923172809
        ],
        [
          6.618007169,
          16.070401885
        ],
        [
          6.587462142,
          16.219002358
        ],
        [
          6.554673973,
          16.368988212
        ],
        [
          6.519588924,
          16.520373497
        ],
        [
          6.482152626,
          16.67317233
        ],
        [
          6.442310102,
          16.827398888
        ],
        [
          6.400005797,
          16.983067399
        ],
        [
          6.355183604,
          17.140192144
        ],
        [
          6.307786897,
          17.298787442
        ],
        [
          6.257758567,
          17.458867648
        ],
        [
          6.205041057,
          17.620447147
        ],
        [
          6.149576399,
          17.78354034
        ],
        [
          6.091306262,
          17.948161643
        ],
        [
          6.030171992,
          18.114325473
        ],
        [
          5.966114665,
          18.282046243
        ],
        [
          5.899075134,
          18.451338347
        ],
        [
          5.828994084,
          18.622216154
        ],
        [
          5.755812092,
          18.794693994
        ],
        [
          5.679469687,
          18.968786148
        ],
        [
          5.599907411,
          19.144506833
        ],
        [
          5.51706589,
          19.321870193
        ],
        [
          5.430885905,
          19.500890279
        ],
        [
          5.341308462,
          19.681581039
        ],
        [
          5.248274875,
          19.863956299
        ],
        [
          5.151726846,
          20.048029749
        ],
        [
          5.051606546,
          20.233814921
        ],
        [
          4.947856709,
          20.421325175
        ],
        [
          4.840420722,
          20.610573678
        ],
        [
          4.729242716,
          20.801573379
        ],
        [
          4.614267674,
          20.994336995
        ],
        [
          4.495441524,
          21.188876978
        ],
        [
          4.372711251,
          21.385205498
        ],
        [
          4.246025003,
          21.583334414
        ],
        [
          4.115332204,
          21.783275247
        ],
        [
          3.980583672,
          21.985039151
        ],
        [
          3.84173173,
          22.188636883
        ],
        [
          3.698730336,
          22.39407877
        ],
        [
          3.5515352,
          22.601374678
        ],
        [
          3.400103915,
          22.810533973
        ],
        [
          3.244396081,
          23.021565487
        ],
        [
          3.084373438,
          23.234477476
        ],
        [
          2.92,
          23.449278
        ]
      ]
    },
    "22": {
      "label": "D22",
      "values": [
        [
          23.3087,
          20.244049
        ],
        [
          23.231119479,
          20.1112435
        ],
        [
          23.153839581,
          19.977568058
        ],
        [
          23.076877639,
          19.843012216
        ],
        [
          23.000251525,
          19.707565615
        ],
        [
          22.923979663,
          19.571217754
        ],
        [
          22.848081041,
          19.433957987
        ],
        [
          22.772575228,
          19.295775524
        ],
        [
          22.697482389,
          19.156659429
        ],
        [
          22.622823297,
          19.016598617
        ],
        [
          22.548619349,
          18.875581849
        ],
        [
          22.474892585,
          18.733597739
        ],
        [
          22.401665699,
          18.590634741
        ],
        [
          22.328962055,
          18.446681156
        ],
        [
          22.256805708,
          18.301725126
        ],
        [
          22.185221413,
          18.155754631
        ],
        [
          22.114234646,
          18.008757493
        ],
        [
          22.043871621,
          17.860721365
        ],
        [
          21.974159302,
          17.711633738
        ],
        [
          21.905125425,
          17.561481933
        ],
        [
          21.836798512,
          17.410253103
        ],
        [
          21.769207886,
          17.257934228
        ],
        [
          21.702383694,
          17.104512117
        ],
        [
          21.636356918,
          16.949973401
        ],
        [
          21.571159395,
          16.794304538
        ],
        [
          21.506823835,
          16.637491803
        ],
        [
          21.443383834,
          16.479521295
        ],
        [
          21.380873895,
          16.320378928
        ],
        [
          21.319329442,
          16.160050433
        ],
        [
          21.258786839,
          15.998521358
        ],
        [
          21.199283404,
          15.835777061
        ],
        [
          21.140857428,
          15.671802714
        ],
        [
          21.083548188,
          15.506583298
        ],
        [
          21.027395965,
          15.340103605
        ],
        [
          20.972442056,
          15.172348232
        ],
        [
          20.918728794,
          15.003301585
        ],
        [
          20.866299556,
          14.832947872
        ],
        [
          20.815198783,
          14.661271108
        ],
        [
          20.765471986,
          14.48825511
        ],
        [
          20.717165767,
          14.313883498
        ],
        [
          20.670327822,
          14.138139693
        ],
        [
          20.625006956,
          13.961006917
        ],
        [
          20.581253094,
          13.782468193
        ],
        [
          20.539117287,
          13.602506344
        ],
        [
          20.498651719,
          13.421103991
        ],
        [
          20.459909718,
          13.238243558
        ],
        [
          20.422945755,
          13.053907267
        ],
        [
          20.387815453,
          12.868077141
        ],
        [
          20.354575584,
          12.680735004
        ],
        [
          20.323284074,
          12.491862479
        ],
        [
          20.294,
          12.301441
        ],
        [
          20.328871303,
          12.186899471
        ],
        [
          20.365533558,
          12.071095415
        ],
        [
          20.404034046,
          11.954015542
        ],
        [
          20.444420812,
          11.835646467
        ],
        [
          20.486742659,
          11.715974711
        ],
        [
          20.531049138,
          11.594986701
        ],
        [
          20.577390535,
          11.472668777
        ],
        [
          20.62581786,
          11.349007191
        ],
        [
          20.676382831,
          11.223988115
        ],
        [
          20.729137858,
          11.097597642
        ],
        [
          20.784136027,
          10.969821788
        ],
        [
          20.841431076,
          10.840646503
        ],
        [
          20.901077374,
          10.71005767
        ],
        [
          20.963129898,
          10.578041112
        ],
        [
          21.027644203,
          10.444582601
        ],
        [
          21.094676396,
          10.309667856
        ],
        [
          21.164283103,
          10.173282558
        ],
        [
          21.236521433,
          10.035412352
        ],
        [
          21.311448943,
          9.896042853
        ],
        [
          21.389123601,
          9.75515966
        ],
        [
          21.469603738,
          9.612748357
        ],
        [
          21.552948008,
          9.468794527
        ],
        [
          21.639215335,
          9.323283757
        ],
        [
          21.728464866,
          9.176201653
        ],
        [
          21.820755916,
          9.027533846
        ],
        [
          21.916147908,
          8.877266006
        ],
        [
          22.014700313,
          8.725383852
        ],
        [
          22.116472589,
          8.571873167
        ],
        [
          22.22152411,
          8.416719807
        ],
        [
          22.329914095,
          8.259909721
        ],
        [
          22.441701538,
          8.101428961
        ],
        [
          22.556945125,
          7.941263701
        ],
        [
          22.675703154,
          7.779400251
        ],
        [
          22.798033454,
          7.615825079
        ],
        [
          22.923993291,
          7.450524825
        ],
        [
          23.053639278,
          7.283486322
        ],
        [
          23.187027284,
          7.114696621
        ],
        [
          23.324212326,
          6.944143005
        ],
        [
          23.465248476,
          6.771813022
        ],
        [
          23.610188749,
          6.597694502
        ],
        [
          23.759084997,
          6.421775586
        ],
        [
          23.911987796,
          6.244044753
        ],
        [
          24.068946328,
          6.064490849
        ],
        [
          24.23000827,
          5.883103117
        ],
        [
          24.395219664,
          5.69987123
        ],
        [
          24.5646248,
          5.514785322
        ],
        [
          24.738266085,
          5.327836027
        ],
        [
          24.916183919,
          5.139014513
        ],
        [
          25.098416562,
          4.948312524
        ],
        [
          25.285,
          4.755722
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
    "nominalFNumber": 4.59,
    "fStops": [
      4.59,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
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
      "source": "JP2021096331A Numerical Example5, surfaces37-38; physical camera-side plate traced, not drawn."
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
      "fromSurface": "13A",
      "toSurface": "19"
    },
    {
      "text": "G4 (−) Zoom/Focus",
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
      "toSurface": "36"
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
      "text": "C34",
      "fromSurface": "34",
      "toSurface": "36"
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
