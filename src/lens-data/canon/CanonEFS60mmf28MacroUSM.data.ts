import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP 2006-153942 A, Numerical Example 2 (Canon Inc.; Yoshiyuki Taki): f = 62.5 mm, Fno. 2.92, ω = 12.3°,
 * all spherical, 12 elements / 8 groups. No scale factor is applied. Probable production correlation with the
 * March 2005 EF-S 60mm f/2.8 Macro USM (Canon: 12/8, inner focus, 1:1); not a factory prescription.
 * R, d, nd and νd follow the printed Table 2 without alteration, including R19 = 2101.954 as printed (an
 * earlier transcription in the source package read 201.954). The patent prints nd and νd and plots the d, g,
 * C and F lines.
 * Rows 13 and 14 are flat air planes 2.62 mm apart, drawn as the stop SP between groups 2 and 3 (¶0027); the
 * table does not say which plane is the iris, so both are dropped and the iris is placed midway: gap 12 =
 * D12 + 1.31 and the stop gap = 1.31 + D14, which keeps every printed spacing.
 * The terminal gap (37.537 mm) is the computed paraxial back focus at infinity; the patent prints no back focus.
 * The image plane stays there for the printed −1.0× spacings, giving 199.86 mm object to image at −0.9997×.
 * All semi-diameters are inferred from Fig. 2 (A), read at its own scale (5.30 px/mm at 400 dpi from the S1–S22
 * vertex span and the S1–image track): L1 16.5, L2/L3 13.5 (Fig. 2 draws 14.0; L2's edge thickness reaches zero
 * at 13.7), L4 11.4 and G3/G4 10.5 mm, all square-cut. G2 keeps the rims that clear the f/2.92 axial beam
 * (Fig. 2 draws it about 7.9 mm high); S9/S10 sit at the 0.9 gap-sag limit, where Fig. 2 draws the two faces meeting.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-ef-s-60mm-f28-macro-usm",
  "maker": "Canon",
  "name": "CANON EF-S 60mm f/2.8 Macro USM",
  "subtitle": "JP 2006-153942 A, Example 2 — probable production correlation",
  "catalog": {
    "lensMounts": [
      "canon-ef-s"
    ],
    "imageFormat": "aps-c",
    "elementCount": 12,
    "groupCount": 8,
    "closeFocusM": {
      "marketing": 0.2
    },
    "focalLengthMm": {
      "marketing": 60,
      "design": 62.5
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.92
    },
    "specs": [
      "12 ELEMENTS / 8 GROUPS",
      "DESIGN f = 62.5 mm",
      "DESIGN F/2.92",
      "ALL SPHERICAL",
      "INNER FOCUS; 1.0× MAX"
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
      "glass": "S-BSM14 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 60.681382003520106,
      "role": "Biconvex front element of the fixed first group; begins converging the axial beam."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.23,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 35.84399704026983,
      "role": "Low-dispersion crown front element of the first group's cemented doublet; the strongest positive element of the fixed group.",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.16,
      "indexReference": "d",
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -28.954400173894683,
      "role": "High-index biconcave rear element of the first group's cemented doublet; corrects the fixed group's axial colour.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.23,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 56.60697429958351,
      "role": "Low-dispersion crown biconvex element closing the fixed first group, ahead of the variable gap D7."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.749497,
      "vd": 35.28,
      "indexReference": "d",
      "glass": "S-LAM7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -20.23413915251053,
      "role": "Negative meniscus, convex to the object, at the front of the second (negative) group, which moves 10.44 mm toward the image when focusing close."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.517417,
      "vd": 52.43,
      "indexReference": "d",
      "glass": "S-NSL36 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -21.388695574721588,
      "role": "Biconcave crown-flint front element of the second group's cemented doublet; with Element 5 it supplies the group's negative power.",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.93,
      "indexReference": "d",
      "glass": "SFLDN3 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 20.207857430047824,
      "role": "Dense-flint, nearly plano-convex rear element of the second group's cemented doublet; its high dispersion corrects the colour of the negative group.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.696797,
      "vd": 55.53,
      "indexReference": "d",
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 38.85600863024,
      "role": "Biconvex element at the front of the third (positive) group, just behind the iris; the group moves 10.43 mm toward the object when focusing close."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.804,
      "vd": 46.57,
      "indexReference": "d",
      "glass": "S-LAH65 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 17.49311880982752,
      "role": "High-index biconvex front element of the third group's cemented doublet; the strongest positive element in the lens.",
      "cemented": "D3"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.93,
      "indexReference": "d",
      "glass": "SFLDN3 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -21.740322402968186,
      "role": "Dense-flint, nearly plano-concave rear element of the third group's cemented doublet; corrects the colour of the positive group.",
      "cemented": "D3"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.93,
      "indexReference": "d",
      "glass": "SFLDN3 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 21.64017393762428,
      "role": "Dense-flint positive meniscus, concave to the object, at the front of the rear group's cemented doublet.",
      "cemented": "D4"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.16,
      "indexReference": "d",
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -14.954825296418655,
      "role": "High-index biconcave rear element; gives the rear group its negative power (about −44 mm) ahead of the image.",
      "cemented": "D4"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 62.45449,
      "d": 4.9,
      "sd": 16.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -85.7887,
      "d": 0.16,
      "sd": 16.5
    },
    {
      "label": "3",
      "R": 28.44829,
      "d": 5.8,
      "sd": 13.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -42.2681,
      "d": 1.12,
      "sd": 13.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 57.00774,
      "d": 0.14,
      "sd": 13.5
    },
    {
      "label": "6",
      "R": 29.50571,
      "d": 3.33,
      "sd": 11.4,
      "medium": 4
    },
    {
      "label": "7",
      "R": -410.445,
      "sd": 11.4
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
      "sd": 10.5,
      "medium": 8
    },
    {
      "label": "16",
      "R": -31.8663,
      "d": 0.88,
      "sd": 10.5
    },
    {
      "label": "17",
      "R": 50.42967,
      "d": 5.4,
      "sd": 10.5,
      "medium": 9
    },
    {
      "label": "18",
      "R": -18.5732,
      "d": 0.97,
      "sd": 10.5,
      "medium": 10
    },
    {
      "label": "19",
      "R": 2101.954,
      "sd": 10.5
    },
    {
      "label": "20",
      "R": -55.4377,
      "d": 3.88,
      "sd": 10.5,
      "medium": 11
    },
    {
      "label": "21",
      "R": -14.2126,
      "d": 1.0,
      "sd": 10.5,
      "medium": 12
    },
    {
      "label": "22",
      "R": 105.1189,
      "sd": 10.5
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
    "description": "PUBLISHED inner focus: JP 2006-153942 A, Example 2 prints D7, D12, D14 and D19 at infinity and at −1.0× (D7 0.87 → 11.31, D12 12.16 → 1.72, D14 11.65 → 1.22, D19 3.28 → 13.72 mm). The first group and the iris stay fixed; the second group moves 10.44 mm toward the image, the third group 10.43 mm toward the object, and the rear group only 0.01 mm. No back focus or object distance is printed: with the image plane held at the computed infinity back focus (37.537 mm), the −1.0× spacings give 199.86 mm object to image at −0.9997×, in line with Canon's 0.20 m minimum focus and 1:1. Intermediate positions interpolate the gaps linearly. The iris keeps its infinity f/2.92 diameter.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 91.71443639234121,
        "distanceReference": "first-surface",
        "source": "The −1.0× spacings (D7 = 11.31, D12 = 1.72, D14 = 1.22, D19 = 13.72 mm) are printed; the object distance is derived with the first group and the image plane fixed at the computed infinity back focus (37.537 mm) and is not printed. The computed magnification is −0.9997× against the patent's −1.0×."
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
      "label": "BF (computed)",
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
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "D3",
      "fromSurface": "17",
      "toSurface": "19"
    },
    {
      "text": "D4",
      "fromSurface": "20",
      "toSurface": "22"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
