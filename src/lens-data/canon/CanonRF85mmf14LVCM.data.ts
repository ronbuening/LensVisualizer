import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole selected source; inferred caps and iris were frozen before MTF.
 * Source/factory identity, wavelength, fixed-plane and finite-conjugate qualifications
 * are in the paired analysis/audit. No optical fitting or continuous cam claim.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-rf-85mm-f14-l-vcm",
  "maker": "Canon",
  "name": "CANON RF 85mm f/1.4 L VCM",
  "subtitle": "JP 2026-094892 A — whole Example 5; qualified representative reconstruction",
  "catalog": {
    "lensMounts": [
      "canon-rf"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 14,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 85,
      "design": 82.5
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.46
    },
    "specs": [
      "Grade B representative family; exact factory prescription unproved",
      "Literal whole source, fixed plane, inferred caps/iris; clipping retained",
      "Explicit finite endpoint with calculated conjugate; no continuous source cam law",
      "Scalar implementation estimates; no physical OPL or factory certification"
    ]
  },
  "source": {
    "patentNumber": "JP 2026-094892 A",
    "example": {
      "label": "Numerical Example 5",
      "id": "5"
    },
    "patentYear": 2026,
    "authors": [
      "Fumihiro Shinobu"
    ],
    "assignees": [
      "Canon Inc."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.9,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 199.6036168956127,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.59522,
      "vd": 67.7,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 95.79447364443064,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.7,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 94.16754741418556,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.77047,
      "vd": 29.7,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -68.08358315744466,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "dPgF": 0.0012553999999999066,
      "apdNote": "Source absolute θgF=0.5951; dPgF is derived against runtime normal line0.6438−0.001682νd. Not an Abbe number or complete measured dispersion.",
      "cemented": "CD1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.77047,
      "vd": 29.7,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -64.8603514791716,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "dPgF": 0.0012553999999999066,
      "apdNote": "Source absolute θgF=0.5951; dPgF is derived against runtime normal line0.6438−0.001682νd. Not an Abbe number or complete measured dispersion."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.6134,
      "vd": 44.3,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -42.54415585557427,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "dPgF": -0.005987400000000087,
      "apdNote": "Source absolute θgF=0.5633; dPgF is derived against runtime normal line0.6438−0.001682νd. Not an Abbe number or complete measured dispersion."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.804,
      "vd": 46.5,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 36.62964152966834,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.6134,
      "vd": 44.3,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -54.375554383658745,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "dPgF": -0.005987400000000087,
      "apdNote": "Source absolute θgF=0.5633; dPgF is derived against runtime normal line0.6438−0.001682νd. Not an Abbe number or complete measured dispersion.",
      "cemented": "CD2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.59522,
      "vd": 67.7,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 31.7808144787309,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD2"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.72342,
      "vd": 38.0,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -33.47446923207749,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD3"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 109.13649148863125,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD3"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 2.001,
      "vd": 29.1,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 23.2834672119154,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD4"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconcave Negative",
      "nd": 1.5927,
      "vd": 35.3,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -45.97055447440384,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "dPgF": 0.008874599999999955,
      "apdNote": "Source absolute θgF=0.5933; dPgF is derived against runtime normal line0.6438−0.001682νd. Not an Abbe number or complete measured dispersion.",
      "cemented": "CD4"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Negative Meniscus",
      "nd": 1.5927,
      "vd": 35.3,
      "indexReference": "d",
      "indexReferenceNote": "Explicit source d-line indices; full dispersion/supplier unknown.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -112.97907957002039,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "dPgF": 0.008874599999999955,
      "apdNote": "Source absolute θgF=0.5933; dPgF is derived against runtime normal line0.6438−0.001682νd. Not an Abbe number or complete measured dispersion."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 75.809,
      "d": 4.02,
      "sd": 31.1,
      "medium": 1
    },
    {
      "label": "2",
      "R": 134.138,
      "d": 0.2,
      "sd": 31.1
    },
    {
      "label": "3",
      "R": 44.068,
      "d": 9.29,
      "sd": 30,
      "medium": 2
    },
    {
      "label": "4",
      "R": 178.758,
      "d": 1.05,
      "sd": 30
    },
    {
      "label": "5",
      "R": 37.48,
      "d": 9.17,
      "sd": 25,
      "medium": 3
    },
    {
      "label": "6",
      "R": 172.898,
      "d": 1.5,
      "sd": 25,
      "medium": 4
    },
    {
      "label": "7",
      "R": 40.094,
      "d": 1.6,
      "sd": 18.75
    },
    {
      "label": "8",
      "R": 56.794,
      "d": 1.3,
      "sd": 18.75,
      "medium": 5
    },
    {
      "label": "9",
      "R": 26.318,
      "d": 8.98,
      "sd": 20.5
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "11",
      "R": -32.079,
      "d": 1.0,
      "sd": 16.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": 141.594,
      "d": 0.2,
      "sd": 16.8
    },
    {
      "label": "13A",
      "R": 51.492,
      "d": 6.85,
      "sd": 17.2,
      "medium": 7,
      "asphere": {
        "K": 0.0,
        "A4": -4.34414e-06,
        "A6": 7.63666e-09,
        "A8": -7.45046e-11,
        "A10": 3.32786e-13,
        "A12": -7.64837e-16
      }
    },
    {
      "label": "14A",
      "R": -64.72,
      "d": 0.15,
      "sd": 17.2,
      "asphere": {
        "K": 0.0,
        "A4": 2.97381e-06,
        "A6": 6.88577e-09,
        "A8": -6.70959e-11,
        "A10": 3.09798e-13,
        "A12": -7.23048e-16
      }
    },
    {
      "label": "15",
      "R": 486.843,
      "d": 1.0,
      "sd": 16.8,
      "medium": 8
    },
    {
      "label": "16",
      "R": 31.191,
      "d": 9.27,
      "sd": 16.8,
      "medium": 9
    },
    {
      "label": "17",
      "R": -42.739,
      "sd": 16.8
    },
    {
      "label": "18",
      "R": -505.803,
      "d": 1.1,
      "sd": 18.2,
      "medium": 10
    },
    {
      "label": "19",
      "R": 25.457,
      "d": 5.38,
      "sd": 18.2,
      "medium": 11
    },
    {
      "label": "20",
      "R": 45.433,
      "d": 2.92,
      "sd": 18.2
    },
    {
      "label": "21",
      "R": 54.147,
      "d": 10.65,
      "sd": 20.5,
      "medium": 12
    },
    {
      "label": "22",
      "R": -36.894,
      "d": 1.2,
      "sd": 20.5,
      "medium": 13
    },
    {
      "label": "23",
      "R": 105.461,
      "d": 5.8,
      "sd": 18.0
    },
    {
      "label": "24",
      "R": -47.15,
      "d": 1.3,
      "sd": 18.0,
      "medium": 14
    },
    {
      "label": "25",
      "R": -160.992,
      "d": 15.09,
      "sd": 20.5
    }
  ],
  "focus": {
    "closeFocusM": 0.7498810590009545,
    "keyframes": [
      0,
      1
    ],
    "published": [
      1
    ],
    "description": "Whole source infinity and near gap endpoints. Calculated conjugate at fixed source plane; U2 surfaces11–17 moves objectward8.44mm, front/stop/rear/film fixed. Source near distance/magnification unprinted; derived values are conditional, not retail calibration. No continuous cam law; intermediate finite MTF unsupported.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 632.7810590009544,
        "distanceReference": "first-surface",
        "source": "JP 2026-094892 A whole Numerical Example 5 literal near spacings; object conjugate independently computed at frozen image plane, with fixed-front registration. Source object distance unprinted; see paired analysis."
      }
    ]
  },
  "aperture": {
    "nominalFNumber": 1.46,
    "fStops": [
      1.46,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16,
    "blades": 11
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 29.38
  },
  "layout": {
    "yScFill": 0.78
  },
  "gaps": {
    "STO": {
      "label": "D10",
      "values": [
        [
          15.98,
          7.54
        ]
      ]
    },
    "17": {
      "label": "D17",
      "values": [
        [
          2.1,
          10.54
        ]
      ]
    }
  },
  "groups": [
    {
      "text": "U1",
      "fromSurface": "1",
      "toSurface": "9"
    },
    {
      "text": "U2 focus",
      "fromSurface": "11",
      "toSurface": "17"
    },
    {
      "text": "U3",
      "fromSurface": "18",
      "toSurface": "25"
    }
  ],
  "checks": {
    "gapSagFrac": 0.92
  },
  "doublets": [
    {
      "text": "CD1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "CD2",
      "fromSurface": "15",
      "toSurface": "17"
    },
    {
      "text": "CD3",
      "fromSurface": "18",
      "toSurface": "20"
    },
    {
      "text": "CD4",
      "fromSurface": "21",
      "toSurface": "23"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
