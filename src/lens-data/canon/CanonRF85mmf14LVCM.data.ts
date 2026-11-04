import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2026-094892 A, Numerical Example 5 (Canon Inc.; inventor Fumihiro Shinobu); US family member
 * US 2026/0153708 A1. Prescription table pp. 24–25, section Fig. 9, aberration plots Fig. 10. Associated with the
 * Canon RF 85mm F1.4 L VCM by construction: 14 elements in 10 groups, a UD third element cemented to a negative
 * meniscus, a double-aspherical biconvex L7 in the four-element focus group, and a near state at 0.75 m. Example 12
 * of the same patent fits the public evidence equally well; this is a patent design, not a confirmed factory
 * prescription.
 *
 * Scale: none; the patent is printed at f = 82.50 mm (computed d-line EFL 82.494 mm).
 * Printed: R, d, d-line n, Abbe number, θgF for L4, L5, L6, L8, L13 and L14, K and A4–A12 on surfaces 13 and 14,
 * f 82.50, F/1.46, half-field 14.69°, image height 21.63, BF 15.09, total length 117.10, and the infinity and near
 * values of d10 and d17.
 * Image plane: the last gap keeps the printed BF of 15.09 mm, an air-equivalent length; no cover glass is modeled.
 * The paraxial back focus computes 15.080 mm, 0.010 mm shorter; the difference is not applied.
 * Stop: at surface 10 as printed; its radius follows the F/1.46 rule.
 * Glass: catalog equivalents matched on nd/νd; the six printed θgF values agree with catalog PgF within 0.0001.
 * Semi-diameters are inferred from Fig. 9 and Canon's construction diagram; none is printed. S7/S8 are 18.75 mm so
 * the f/1.46 axial beam (18.70/18.64 mm) clears the near-touching L4/L5 rims, with checks.gapSagFrac 0.92.
 * Focus: U2 (surfaces 11–17) moves 8.44 mm toward the object; U1, the stop, U3 and the image plane stay fixed. The
 * patent prints both gap states but not the near object distance; at the fixed image plane the near gaps focus at
 * 632.8 mm from S1 (749.9 mm object to image, −0.1265×), in line with Canon's 0.75 m and 0.12×. Intermediate
 * positions are interpolated.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-rf-85mm-f14-l-vcm",
  "maker": "Canon",
  "name": "CANON RF 85mm f/1.4 L VCM",
  "subtitle": "JP 2026-094892 A, Example 5 — construction correlation with the production lens",
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
    "closeFocusM": {
      "marketing": 0.75
    },
    "specs": [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 82.5 mm",
      "DESIGN F/1.46",
      "2 ASPHERICAL SURFACES / 1 ELEMENT"
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
      "glass": "S-NPH53 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 199.6036168956127,
      "role": "High-index, high-dispersion positive front meniscus of the fixed first group U1."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.59522,
      "vd": 67.7,
      "indexReference": "d",
      "glass": "S-FPM2 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 95.79447364443064,
      "role": "Second positive meniscus of U1, in a low-dispersion crown."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.7,
      "indexReference": "d",
      "glass": "J-FK01A (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 94.16754741418556,
      "role": "UD positive meniscus at the front of the U1 cemented doublet.",
      "apd": "inferred",
      "apdNote": "Canon's construction diagram marks this position as the lens's UD element, and its nd 1.497 / νd 81.7 is a fluorophosphate UD-class glass (catalog PgF 0.5371).",
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
      "glass": "NBFD29 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -68.08358315744466,
      "role": "Negative meniscus cemented to L3; one of the two U1 negatives that set the patent's partial-dispersion condition.",
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
      "glass": "NBFD29 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -64.8603514791716,
      "role": "Negative meniscus closing U1 just ahead of the stop; the second of the two partial-dispersion-controlled negatives."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.6134,
      "vd": 44.3,
      "indexReference": "d",
      "glass": "S-NBM51 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -42.54415585557427,
      "role": "Biconcave negative leading the moving focus group U2, directly behind the stop."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.804,
      "vd": 46.5,
      "indexReference": "d",
      "glass": "S-LAH65VS (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 36.62964152966834,
      "role": "Double-aspherical biconvex positive element of U2; the lens's one aspherical element."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.6134,
      "vd": 44.3,
      "indexReference": "d",
      "glass": "S-NBM51 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -54.375554383658745,
      "role": "Negative meniscus front half of the U2 cemented doublet.",
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
      "glass": "S-FPM2 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 31.7808144787309,
      "role": "Biconvex positive rear half of the U2 doublet and the strongest positive element of the focus group.",
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
      "glass": "BAFD8 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -33.47446923207749,
      "role": "Biconcave negative front half of the first cemented doublet in the fixed rear group U3.",
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
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 109.13649148863125,
      "role": "Weak positive meniscus cemented to L10, in a low-index crown.",
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
      "glass": "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 23.2834672119154,
      "role": "Strong biconvex positive in nd 2.0 glass, front half of the second U3 cemented doublet.",
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
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -45.97055447440384,
      "role": "Biconcave negative cemented to L12; the second-to-last negative, which the patent uses for g-line lateral color.",
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
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -112.97907957002039,
      "role": "Rear negative meniscus, concave to the object, closing U3; the patent's last-lens lateral-color corrector."
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
    "description": "PUBLISHED: The four-element focus group U2 (L6–L9, surfaces 11–17) moves 8.44 mm toward the object from infinity to the near state; U1, the stop, U3 and the image plane stay fixed. Canon drives this group with a voice-coil motor. Both gap states are printed in the patent, but its near object distance and magnification are not: at the fixed image plane the near gaps focus at about 750 mm object to image (−0.126×), matching Canon's 0.75 m minimum focus and 0.12× maximum magnification. Intermediate positions are interpolated.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 632.7810590009544,
        "distanceReference": "first-surface",
        "source": "JP 2026-094892 A, Numerical Example 5 near spacings (d10 7.54 mm, d17 10.54 mm); the patent prints no object distance, so it is computed paraxially at the fixed image plane."
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
