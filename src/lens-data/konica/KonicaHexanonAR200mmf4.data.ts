import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * KONICA HEXANON AR 200mm f/4, from JP S54-55424 A, Example 1 (Konishiroku Photo Industry; inventor Toshiko Shimokura;
 * filed 1977-10-12, published 1979-05-02). Five air-spaced spherical singlets.
 *
 * Association: the patent names no production lens. The link rests on the Konica/Berkey 1980 product sheet, cat. no.
 * 703-193: five elements in five groups, 12 degrees, and a section that agrees shape by shape. Examples 2 and 3 of the
 * patent fit that section equally well, so Example 1 is the best-documented choice, not a confirmed factory prescription.
 *
 * Scale: the patent is normalized to f = 1. Every printed R and d is multiplied by 200 with no renormalization. The
 * four-decimal radii trace to EFL = 200.178 mm. Radii fitted to the patent's Seidel table stay within about 0.00005 of
 * print and return the printed f, fB, T and Petzval sum, so the residuals are radius rounding, not a transcription slip.
 *
 * Image plane: the last gap is the printed fB = 0.261, 52.2 mm at this scale. The paraxial back focus of the rounded
 * radii is 52.304 mm; the 0.104 mm difference is left in place.
 *
 * Stop: the Seidel table's caption prints the stop 0.15 behind surface 6, so the printed d6 = 0.335 (67 mm) is split into
 * 30 + 37 mm. Its radius is not printed and follows from the design F/4.
 *
 * Semi-diameters: not printed, so all are inferred. L1 is 27 mm, the 25 mm entrance-pupil radius plus 8%. The others
 * follow outline ratios measured from Fig. 1 (1, 0.845, 0.819, 0.503, 0.535), one value for both faces of each element.
 * Fig. 1 draws the same ratios about 8% smaller (25.2, 21.2, 20.5, 12.5, 13.3 mm at a scale fitted to its arcs), and the
 * Fig. 2 coma curves end at a front rim near 25.2 mm. These values stay: they clear the F/4 beam and the corner chief ray
 * by real-ray trace, and the drawn rims would take geometric transmission at 6 degrees from 77% to 61.5%.
 *
 * Focus: the patent prints the infinity state only. closeFocusM is the retail 2.5 m; the geometry is static.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "konica-hexanon-ar-200mm-f4",
  "maker": "Konica",
  "name": "KONICA HEXANON AR 200mm f/4",
  "subtitle": "JP S54-55424 A, Example 1 — patent design associated with the production lens",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "konica-ar"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 200 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "TELEPHOTO RATIO 0.809"
    ],
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 200,
      "design": 200
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "JP S54-55424 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1979,
    "authors": [
      "Toshiko Shimokura"
    ],
    "assignees": [
      "Konishiroku Photo Industry Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "role": "Strong low-index positive that leads the front section.",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 116.01039307706606
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "role": "High-index flint negative; its strong front concave face corrects front-section spherical aberration.",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "glass": "S-TIH4 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -135.20815500989173
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "role": "Low-index positive meniscus that closes the front section and helps shorten the telephoto ratio.",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 170.82047086561317
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "role": "High-index negative meniscus, concave to the object, that opens the rear section.",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -56.092163749199194
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "role": "Last positive, stronger than L1, held to limit positive distortion.",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 104.74473250107187
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 76.44,
      "d": 8.5,
      "sd": 27.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -266.34,
      "d": 16.0,
      "sd": 27.0
    },
    {
      "label": "3",
      "R": -144.54,
      "d": 3.0,
      "sd": 22.815,
      "medium": 2
    },
    {
      "label": "4",
      "R": 350.94,
      "d": 2.0,
      "sd": 22.815
    },
    {
      "label": "5",
      "R": 47.5,
      "d": 6.5,
      "sd": 22.113,
      "medium": 3
    },
    {
      "label": "6",
      "R": 98.14,
      "d": 30.0,
      "sd": 22.113
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 37.0
    },
    {
      "label": "7",
      "R": -28.22,
      "d": 2.0,
      "sd": 13.581,
      "medium": 4
    },
    {
      "label": "8",
      "R": -83.42,
      "d": 1.0,
      "sd": 13.581
    },
    {
      "label": "9",
      "R": 462.9,
      "d": 3.5,
      "sd": 14.445,
      "medium": 5
    },
    {
      "label": "10",
      "R": -102.78,
      "d": 52.2,
      "sd": 14.445
    }
  ],
  "focus": {
    "closeFocusM": 2.5,
    "description": "The patent prints the infinity state only, so the geometry is static and no focus motion is modeled. The 2.5 m close-focus distance is the production lens's published figure, not a patent state. The image plane is the printed back focus, 52.2 mm behind the last surface. Semi-diameters are inferred from the patent figure; the stop position is printed and its radius follows from F/4."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12,
    "maxTraceFieldDeg": 6
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
