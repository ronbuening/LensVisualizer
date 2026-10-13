import type { LensDataInput } from "../../types/optics.js";

/**
 * JP2013161076A Numerical Example 1, freshly transcribed at native scale.
 * Ten elements / nine air groups; spherical, no rear plate.
 * User-selected Example1 revision of the prior Example2 research package.
 * Patent correlation to Olympus production lens is unconfirmed; Sigma attribution
 * does not establish a commercial relationship. Native radii/gaps/image retained.
 * Focus PUBLISHED: G2 only, 5.9170mm imageward, endpoints INF and |beta|=0.10.
 * Stop position published; iris radius inferred by exact infinity F/1.79 calibration.
 * All other semi-diameters are estimates, not factory apertures: rims inferred from
 * the source/product sections and exact rays, then checked against patent Fig. 1
 * (400 dpi; 11.66 px/mm along the axis, 12.65 px/mm across it — the sheet is drawn
 * about 8.5% taller than wide; a second reading gave 12.63 px/mm from the arcs
 * and 12.64 from the image line drawn to Y = 10.80 mm). Fig. 1 draws L3, L4 and
 * L6 square-cut, each concave rear curve ending at a flat annulus. L6 keeps both
 * faces at its drawn 10.1 mm rim. Surfaces 6 and 8 stop where the drawn curves
 * end (14.5 and 13 mm): carried to the rim, surface 6 would pass 0.37 mm behind
 * L4's front corner and surface 8 0.19 mm behind the stop plane, where Fig. 1
 * keeps both in front. The renderer joins those unequal faces with a straight
 * edge where the figure shows a flat annulus and a cylindrical rim. Every rim
 * clears the exact F/1.79 axial ray and the Y = 10.80 mm chief ray. No
 * geometry-policy override or optical fitting.
 * Source surface20 is planar; this overrides the source prose's meniscus label.
 * Only L1–L4 have published line indices. Glass labels name the coordinate-equal HOYA row
 * (the published L1–L4 line indices equal HOYA's catalog values); they are not supplier identities.
 */

const LENS_DATA = {
  "key": "olympus-mzuiko-75mm-f18",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 75mm f/1.8",
  "subtitle": "JP 2013-161076 A, Numerical Example 1 — Sigma patent; production correlation unconfirmed",
  "specs": [
    "10 ELEMENTS / 9 GROUPS",
    "DESIGN f = 74.56 mm",
    "DESIGN F/1.79",
    "2ω = 16.47°",
    "NO ASPHERES"
  ],
  "focalLengthMarketing": 75,
  "focalLengthDesign": 74.56,
  "apertureMarketing": 1.8,
  "apertureDesign": 1.79,
  "lensMounts": [
    "micro-four-thirds"
  ],
  "imageFormat": "four-thirds",
  "patentNumber": "JP 2013-161076 A",
  "patentAuthors": [
    "Yukihiro Yamamoto"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2013,
  "elementCount": 10,
  "groupCount": 9,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.58913,
      "vd": 61.25,
      "fl": 108.07284235,
      "glass": "BACD5 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed)",
      "indexReference": "d",
      "role": "Front positive collector; fixed with G1a.",
      "nC": 1.58619,
      "nF": 1.59581,
      "ng": 1.601,
      "dPgF": -0.0004775
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 111.74135932,
      "glass": "FCD1 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD1-class coordinate at one of the three positions Olympus's construction diagram marks ED; inferred from the glass family, not a patent designation.",
      "indexReference": "d",
      "role": "Low-dispersion positive member of fixed G1a.",
      "nC": 1.49514,
      "nF": 1.50123,
      "ng": 1.50451,
      "dPgF": 0.03226802
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 108.65392326,
      "glass": "FCD1 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD1-class coordinate at one of the three positions Olympus's construction diagram marks ED; inferred from the glass family, not a patent designation.",
      "indexReference": "d",
      "role": "Second low-dispersion positive member of fixed G1a.",
      "nC": 1.49514,
      "nF": 1.50123,
      "ng": 1.50451,
      "dPgF": 0.03226802
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.6727,
      "vd": 32.17,
      "fl": -40.12679737,
      "glass": "E-FD5 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed)",
      "indexReference": "d",
      "role": "Negative partner in fixed G1a; the patent's condition (8) addresses the positive/negative glass combination.",
      "nC": 1.66661,
      "nF": 1.68752,
      "ng": 1.69999,
      "dPgF": 0.00650994
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 81.80097683,
      "glass": "FCD1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD1-class coordinate at one of the three positions Olympus's construction diagram marks ED; inferred from the glass family, not a patent designation.",
      "indexReference": "d",
      "role": "Positive G1b behind the stop; fixed collector before focusing group."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.58913,
      "vd": 61.25,
      "fl": -39.72358839,
      "glass": "BACD5 (HOYA coordinate equivalent; supplier unconfirmed)",
      "indexReference": "d",
      "role": "Single negative internal-focus element G2; moves imageward toward near focus."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.46,
      "fl": -25.58865398,
      "glass": "FD60 (HOYA coordinate equivalent; supplier unconfirmed)",
      "indexReference": "d",
      "role": "Negative front member of cemented L7/L8 rear pair.",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.90366,
      "vd": 31.32,
      "fl": 14.25516476,
      "glass": "TAFD25 (HOYA coordinate equivalent; supplier unconfirmed)",
      "indexReference": "d",
      "role": "Positive rear member of cemented L7/L8 rear pair.",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.7495,
      "vd": 35.04,
      "fl": -22.16406149,
      "glass": "E-LAF7 (HOYA coordinate equivalent; supplier unconfirmed)",
      "indexReference": "d",
      "role": "Negative member of fixed rear group G3."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Plano-Convex Positive",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": 33.72455589,
      "glass": "TAFD35 (HOYA coordinate equivalent; supplier unconfirmed)",
      "indexReference": "d",
      "role": "High-index positive terminal element; rear surface is planar in Numerical Example 1."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 61.9043,
      "d": 7.02,
      "nd": 1.58913,
      "elemId": 1,
      "sd": 25
    },
    {
      "label": "2",
      "R": 2139.6178,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 25
    },
    {
      "label": "3",
      "R": 38.9573,
      "d": 7.0,
      "nd": 1.497,
      "elemId": 2,
      "sd": 22
    },
    {
      "label": "4",
      "R": 122.7186,
      "d": 3.63,
      "nd": 1.0,
      "elemId": 0,
      "sd": 22
    },
    {
      "label": "5",
      "R": 27.5314,
      "d": 5.1,
      "nd": 1.497,
      "elemId": 3,
      "sd": 17
    },
    {
      "label": "6",
      "R": 52.7129,
      "d": 1.63,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.5
    },
    {
      "label": "7",
      "R": 143.8344,
      "d": 1.2,
      "nd": 1.6727,
      "elemId": 4,
      "sd": 15.3
    },
    {
      "label": "8",
      "R": 22.6517,
      "d": 5.76,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 3.02,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.993173367275594
    },
    {
      "label": "10",
      "R": 39.0179,
      "d": 5.12,
      "nd": 1.497,
      "elemId": 5,
      "sd": 12.4
    },
    {
      "label": "11",
      "R": 926.6937,
      "d": 2.67,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.4
    },
    {
      "label": "12",
      "R": 218.7779,
      "d": 0.9,
      "nd": 1.58913,
      "elemId": 6,
      "sd": 10.1
    },
    {
      "label": "13",
      "R": 21.1087,
      "d": 11.24,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.1
    },
    {
      "label": "14",
      "R": 267.3977,
      "d": 1.0,
      "nd": 1.80518,
      "elemId": 7,
      "sd": 11.5
    },
    {
      "label": "15",
      "R": 19.0976,
      "d": 7.07,
      "nd": 1.90366,
      "elemId": 8,
      "sd": 11.5
    },
    {
      "label": "16",
      "R": -32.6233,
      "d": 2.04,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "17",
      "R": -29.2555,
      "d": 1.0,
      "nd": 1.7495,
      "elemId": 9,
      "sd": 11.3
    },
    {
      "label": "18",
      "R": 39.0008,
      "d": 0.68,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.3
    },
    {
      "label": "19",
      "R": 30.717,
      "d": 3.56,
      "nd": 1.91082,
      "elemId": 10,
      "sd": 11.7
    },
    {
      "label": "20",
      "R": 1000000000000000.0,
      "d": 17.0008,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.7
    }
  ],
  "asph": {},
  "var": {
    "11": [
      2.67,
      8.587
    ],
    "13": [
      11.24,
      5.323
    ]
  },
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "varLabels": [
    [
      "11",
      "D11"
    ],
    [
      "13",
      "D13"
    ]
  ],
  "groups": [
    {
      "text": "G1a",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "G1b",
      "fromSurface": "10",
      "toSurface": "11"
    },
    {
      "text": "G2 IF",
      "fromSurface": "12",
      "toSurface": "13"
    },
    {
      "text": "G3",
      "fromSurface": "14",
      "toSurface": "20"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "closeFocusM": 0.846926821765851,
  "focusDescription": "PUBLISHED endpoint spacings: G2/L6 moves 5.9170 mm imageward; G1 and G3/image remain fixed. Native near state is |β| = 0.10, calculated object-to-image distance 0.846927 m, separate from marketed 0.84 m. Intermediate gaps are interpolated; UI distance labels are approximate, not a published focus law.",
  "nominalFno": 1.79,
  "fstopSeries": [
    1.79,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "apertureBlades": 9,
  "apertureBladeRoundedness": 1,
  "yScFill": 0.3,
  "maxFstop": 22
} satisfies LensDataInput;

export default LENS_DATA;
