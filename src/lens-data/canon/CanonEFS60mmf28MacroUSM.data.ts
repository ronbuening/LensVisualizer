import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole selected source; inferred caps and iris were frozen before MTF.
 * Source/factory identity, wavelength, fixed-plane and finite-conjugate qualifications
 * are in the paired analysis/audit. No optical fitting or continuous cam claim.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-ef-s-60mm-f28-macro-usm",
  "maker": "Canon",
  "name": "CANON EF-S 60mm f/2.8 Macro USM",
  "subtitle": "JP 2006-153942 A — whole Example 2; qualified representative reconstruction",
  "catalog": {
    "lensMounts": [
      "canon-ef-s"
    ],
    "imageFormat": "aps-c",
    "elementCount": 12,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 60,
      "design": 62.5
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.92
    },
    "specs": [
      "Grade B representative family; exact factory prescription unproved",
      "Literal whole source, fixed plane, inferred caps/iris; clipping retained",
      "Explicit finite endpoint with calculated conjugate; no continuous source cam law",
      "Scalar implementation estimates; no physical OPL or factory certification"
    ]
  },
  "source": {
    "patentNumber": "JP 2006-153942 A",
    "example": {
      "label": "Numerical Example 2",
      "id": "2"
    },
    "patentYear": 2006,
    "authors": [
      "Yoshiyuki Taki"
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
      "type": "Biconvex Positive",
      "nd": 1.603112,
      "vd": 60.64,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 60.681382003520106,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.23,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 35.84399704026983,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.16,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -28.954400173894683,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.23,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 56.60697429958351,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.749497,
      "vd": 35.28,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -20.23413915251053,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.517417,
      "vd": 52.43,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -21.388695574721588,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.93,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 20.207857430047824,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.696797,
      "vd": 55.53,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 38.85600863024,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.804,
      "vd": 46.57,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 17.49311880982752,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD3"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.93,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -21.740322402968186,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD3"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.93,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 21.64017393762428,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD4"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.16,
      "indexReference": "d",
      "indexReferenceNote": "Source nd/νd and d-line plot convention; canonical d-line implementation, not measured dispersion.",
      "glass": "Unmatched (literal patent coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -14.954825296418655,
      "role": "Whole selected embodiment. Isolated-in-air focal length is descriptive, not installed cemented-group power.",
      "cemented": "CD4"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 62.45449,
      "d": 4.9,
      "sd": 11.8,
      "medium": 1
    },
    {
      "label": "2",
      "R": -85.7887,
      "d": 0.16,
      "sd": 11.8
    },
    {
      "label": "3",
      "R": 28.44829,
      "d": 5.8,
      "sd": 9.8,
      "medium": 2
    },
    {
      "label": "4",
      "R": -42.2681,
      "d": 1.12,
      "sd": 9.8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 57.00774,
      "d": 0.14,
      "sd": 9.8
    },
    {
      "label": "6",
      "R": 29.50571,
      "d": 3.33,
      "sd": 8.6,
      "medium": 4
    },
    {
      "label": "7",
      "R": -410.445,
      "sd": 8.6
    },
    {
      "label": "8",
      "R": 157.9148,
      "d": 0.8,
      "sd": 7.8,
      "medium": 5
    },
    {
      "label": "9",
      "R": 13.80659,
      "d": 3.34,
      "sd": 7.3
    },
    {
      "label": "10",
      "R": -31.4971,
      "d": 1.01,
      "sd": 7.4,
      "medium": 6
    },
    {
      "label": "11",
      "R": 17.24826,
      "d": 3.69,
      "sd": 8.1,
      "medium": 7
    },
    {
      "label": "12",
      "R": -1913.77,
      "sd": 8.1
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": 171.6845,
      "d": 3.61,
      "sd": 9.7,
      "medium": 8
    },
    {
      "label": "16",
      "R": -31.8663,
      "d": 0.88,
      "sd": 9.7
    },
    {
      "label": "17",
      "R": 50.42967,
      "d": 5.4,
      "sd": 9.0,
      "medium": 9
    },
    {
      "label": "18",
      "R": -18.5732,
      "d": 0.97,
      "sd": 9.0,
      "medium": 10
    },
    {
      "label": "19",
      "R": 2101.954,
      "sd": 9.0
    },
    {
      "label": "20",
      "R": -55.4377,
      "d": 3.88,
      "sd": 7.6,
      "medium": 11
    },
    {
      "label": "21",
      "R": -14.2126,
      "d": 1.0,
      "sd": 7.6,
      "medium": 12
    },
    {
      "label": "22",
      "R": 105.1189,
      "sd": 7.6
    }
  ],
  "focus": {
    "closeFocusM": 0.1998614971088036,
    "keyframes": [
      0,
      1
    ],
    "published": [
      1
    ],
    "description": "Whole corrected E2 source infinity/−1x endpoints. G1 fixed; G2 imageward10.44mm, G3 objectward10.43mm, G4 imageward0.01mm from literal rounded gaps. Fixed derived infinity plane retained, near final gap37.5270607164624mm. Near object conjugate is calculated, not printed retail0.2m. Passive source airplanes13/14 r0/n1 separated2.62mm remain in source mapping; midpoint iris hypothesis uses exact declared gap decomposition. Piecewise-linear geometry is software interpolation, not a patent cam law; intermediate finite MTF unavailable.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 91.71443639234121,
        "distanceReference": "first-surface",
        "source": "JP 2006-153942 A whole Numerical Example 2 literal near spacings; object conjugate independently computed at frozen image plane, with fixed-front registration. Source object distance unprinted; see paired analysis."
      }
    ]
  },
  "aperture": {
    "nominalFNumber": 2.92,
    "fStops": [
      2.92,
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32,
    "blades": 7
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 24.6
  },
  "layout": {
    "yScFill": 0.78
  },
  "gaps": {
    "7": {
      "label": "D7",
      "values": [
        [
          0.87,
          11.31
        ]
      ]
    },
    "12": {
      "label": "D12 + 1.31",
      "values": [
        [
          13.47,
          3.0300000000000002
        ]
      ]
    },
    "STO": {
      "label": "1.31 + D14",
      "values": [
        [
          12.96,
          2.5300000000000002
        ]
      ]
    },
    "19": {
      "label": "D19",
      "values": [
        [
          3.28,
          13.72
        ]
      ]
    },
    "22": {
      "label": "BF (derived, fixed film)",
      "values": [
        [
          37.537060716462385,
          37.52706071646239
        ]
      ]
    }
  },
  "groups": [
    {
      "text": "G1 fixed",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "G2",
      "fromSurface": "8",
      "toSurface": "12"
    },
    {
      "text": "G3",
      "fromSurface": "15",
      "toSurface": "19"
    },
    {
      "text": "G4",
      "fromSurface": "20",
      "toSurface": "22"
    }
  ],
  "doublets": [
    {
      "text": "CD1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "CD2",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "CD3",
      "fromSurface": "17",
      "toSurface": "19"
    },
    {
      "text": "CD4",
      "fromSurface": "20",
      "toSurface": "22"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
