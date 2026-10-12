import type { LensDataInput } from "../../types/optics.js";

/**
 * Canon EF85mm f/1.8 USM - JP H05-157964 A, Numerical Example 1.
 * Infinity prescription as printed, plus a DERIVED 0.85 m close-focus endpoint.
 * The patent prints no close-focus gaps. Only the negative G2 translates; the stop
 * stays fixed, as in the table (D8 constant, D9 and D12 variable).
 * The 0.85 m object-to-image distance is Canon's published minimum focus, not a patent value.
 * R, d, N and nu are as printed; the image plane is the same in both focus states.
 * D17 is the calculated Gaussian back focal distance (the patent prints none); it is not
 * adjusted, and the close-focus state is not fitted to Canon's 0.13x magnification.
 * All semi-diameters and the f/1.8 stop radius (set by the real marginal ray) are inferred,
 * not source dimensions. Rims are unequal across R7/R8, R10/R11 and R13/R14 (see the audit log).
 * The table does not name a spectral line for N/nu; Fig. 4 plots the d and g lines, so the
 * values are read as nd/vd. All nine elements carry coordinate-equivalent catalog glass names;
 * L6 (1.51633/64.2) uses S-BSL7 (1.51633/64.14), 0.06 below the one-decimal printed Abbe number
 * and inside the catalog tolerance of 0.15.
 * The derived gaps are not listed as published finite conjugates.
 * The correlation with the Canon production lens is not manufacturer-confirmed.
 */
const LENS_DATA = {
  "key": "canon-ef-85mm-f18-usm",
  "maker": "Canon",
  "name": "CANON EF 85mm f/1.8 USM",
  "subtitle": "JP H05-157964 A, Example 1 — production correlation",
  "specs": [
    "9 ELEMENTS / 7 GROUPS",
    "DESIGN f = 85.0 mm",
    "DESIGN F/1.8",
    "ALL SPHERICAL"
  ],
  "focalLengthMarketing": 85,
  "apertureMarketing": 1.8,
  "lensMounts": [
    "canon-ef"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP H05-157964 A",
  "patentAuthors": [
    "Hiroshi Endo"
  ],
  "patentAssignees": [
    "Canon Inc."
  ],
  "patentYear": 1993,
  "elementCount": 9,
  "groupCount": 7,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.6516,
      "vd": 58.5,
      "fl": 199.017143745,
      "glass": "N-LAK7 (coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "fl": 135.794199469,
      "glass": "S-LAH66 (coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.713,
      "vd": 53.8,
      "fl": 54.566965611,
      "glass": "N-LAK8 (coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.71736,
      "vd": 29.5,
      "fl": -40.895978163,
      "glass": "SF1 (coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "fl": 134.282552927,
      "glass": "S-TIH6 (coordinate equivalent; supplier unconfirmed)",
      "cemented": "L5-L6"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.51633,
      "vd": 64.2,
      "fl": -41.497051496,
      "glass": "S-BSL7 (coordinate equivalent; supplier unconfirmed)",
      "cemented": "L5-L6"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "fl": -51.731863911,
      "glass": "S-TIH6 (coordinate equivalent; supplier unconfirmed)",
      "cemented": "L7-L8"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.8061,
      "vd": 41.0,
      "fl": 47.699580069,
      "glass": "H-ZLaF52A (coordinate equivalent; supplier unconfirmed)",
      "cemented": "L7-L8"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.6,
      "fl": 59.883866221,
      "glass": "S-LAH66 (coordinate equivalent; supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 185.36,
      "d": 4.4,
      "nd": 1.6516,
      "elemId": 1,
      "sd": 25.5
    },
    {
      "label": "2",
      "R": -427.66,
      "d": 0.2,
      "nd": 1,
      "elemId": 0,
      "sd": 25.5
    },
    {
      "label": "3",
      "R": 63.58,
      "d": 4.6,
      "nd": 1.7725,
      "elemId": 2,
      "sd": 24.8
    },
    {
      "label": "4",
      "R": 156.32,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 24.8
    },
    {
      "label": "5",
      "R": 33.99,
      "d": 8.2,
      "nd": 1.713,
      "elemId": 3,
      "sd": 22.4
    },
    {
      "label": "6",
      "R": 241.98,
      "d": 0.16,
      "nd": 1,
      "elemId": 0,
      "sd": 22.4
    },
    {
      "label": "7",
      "R": 278.09,
      "d": 3.2,
      "nd": 1.71736,
      "elemId": 4,
      "sd": 20.4
    },
    {
      "label": "8",
      "R": 26.41,
      "d": 8.82,
      "nd": 1,
      "elemId": 0,
      "sd": 19.6
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 3.59,
      "nd": 1,
      "elemId": 0,
      "sd": 14.995052356557
    },
    {
      "label": "10",
      "R": -101.48,
      "d": 2.4,
      "nd": 1.80518,
      "elemId": 5,
      "sd": 15.0
    },
    {
      "label": "11",
      "R": -52.9,
      "d": 1.5,
      "nd": 1.51633,
      "elemId": 6,
      "sd": 15.5
    },
    {
      "label": "12",
      "R": 36.36,
      "d": 16.3,
      "nd": 1,
      "elemId": 0,
      "sd": 15.5
    },
    {
      "label": "13",
      "R": -9058.59,
      "d": 2.0,
      "nd": 1.80518,
      "elemId": 7,
      "sd": 15.0
    },
    {
      "label": "14",
      "R": 41.85,
      "d": 12.4,
      "nd": 1.8061,
      "elemId": 8,
      "sd": 17
    },
    {
      "label": "15",
      "R": -410.77,
      "d": 0.2,
      "nd": 1,
      "elemId": 0,
      "sd": 17
    },
    {
      "label": "16",
      "R": 73.06,
      "d": 5.4,
      "nd": 1.7725,
      "elemId": 9,
      "sd": 17.5
    },
    {
      "label": "17",
      "R": -122.05,
      "d": 38.9050921339573,
      "nd": 1,
      "elemId": 0,
      "sd": 17.5
    }
  ],
  "asph": {},
  "var": {
    "STO": [
      3.59,
      14.78056260413962
    ],
    "12": [
      16.3,
      5.109437395860381
    ]
  },
  "varLabels": [
    [
      "STO",
      "D9 (derived G2)"
    ],
    [
      "12",
      "D12 (derived G2)"
    ]
  ],
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "G2 (-)",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "13",
      "toSurface": "17"
    }
  ],
  "doublets": [
    {
      "text": "L5-L6",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "L7-L8",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ],
  "nominalFno": 1.8,
  "closeFocusM": 0.85,
  "fstopSeries": [
    1.8,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.82,
  "focusDescription": "Rear focus: only G2 (the L5-L6 cemented doublet, surfaces 10-12) moves, 11.19 mm toward the image from infinity to 0.85 m; G1, the stop, G3 and the image plane stay fixed. The patent prints only the infinity gaps, so the 0.85 m state is derived: it is the G2 position that brings an object 0.85 m from the image plane, Canon's published minimum focus distance, to paraxial focus. Gaps between the two states are interpolated linearly, so intermediate distance labels are estimates. The patent's own close-focus plots are labelled 0.8 m without stating where that distance is measured from."
} satisfies LensDataInput;

export default LENS_DATA;
