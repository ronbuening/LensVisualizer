import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * AEG Weitwinkelobjektiv 17mm f/6.3 — DE 620,538 C (Allgemeine Elektricitäts-Gesellschaft, issued 1935), sole
 * numerical example.
 *
 * Scale: 1:1. The patent table is printed in millimetres and is used unchanged (no scale factor, no unit
 * conversion); the resulting focal length is 16.68 mm. Indices are the printed n_d values.
 *
 * Not printed in the patent, and therefore inferred here:
 *  - focal length, f-number, back focus and field angle of the example (the patent states none of them);
 *    f/6.3 is the nominal aperture of the surviving 1.7 cm lens;
 *  - the last gap, which is the paraxial back focus at infinity;
 *  - the stop position (placed at the r5 vertex; the figure draws it just ahead of the cemented doublet)
 *    and the stop diameter;
 *  - every semi-diameter and the flat outer lands of surfaces 2 and 4. The rims pass the full beam to a
 *    90° half-field and cover about 93°.
 *
 * Glasses are named in the patent (BaK 2, BaK 2, SK 6, F 6, SK 2). BaK 2 and SK 2 match present-day catalog rows
 * and carry catalog labels; SK 6 and F 6 have no exact row and stay unmatched at the printed values.
 *
 * Projection: the patent states no projection law. Traced image height is 25.07 mm at a 90° half-field, 4.3 % under
 * focal length times angle, so the lens is described as an equidistant fisheye with a 50.14 mm image circle for a
 * 180° field.
 *
 * Infinity focus only: the patent gives no focusing movement.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "aeg-weitwinkelobjektiv-17mm-f63",
  "maker": "AEG",
  "name": "AEG WEITWINKELOBJEKTIV 17mm f/6.3",
  "subtitle": "DE 620,538 C, sole example — AEG cloud-camera wide-angle objective of c. 1935",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Negative Meniscus",
      "nd": 1.54,
      "vd": 59.6,
      "indexReference": "d",
      "label": "Element 1",
      "focalLengthMm": -83.72,
      "glass": "BaK2 (Schott, as printed; Sumita BAK2 catalog curve)",
      "role": "Large front negative meniscus, convex to the object (patent lens A); its outer surface is concentric with that of L2."
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Negative Meniscus",
      "nd": 1.54,
      "vd": 59.6,
      "indexReference": "d",
      "label": "Element 2",
      "focalLengthMm": -32.46,
      "glass": "BaK2 (Schott, as printed; Sumita BAK2 catalog curve)",
      "role": "Stronger second negative meniscus (patent lens B) with a nearly hemispherical inner surface facing the stop."
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Biconvex Positive",
      "nd": 1.6138,
      "vd": 56.3,
      "indexReference": "d",
      "label": "Element 3",
      "focalLengthMm": 12.68,
      "glass": "Unmatched (SK 6 as printed; nd 1.6138 / νd 56.3)",
      "role": "Crown front element of the cemented positive doublet behind the stop (patent member C).",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Negative Meniscus",
      "nd": 1.6364,
      "vd": 35.4,
      "indexReference": "d",
      "label": "Element 4",
      "focalLengthMm": -21.2,
      "glass": "Unmatched (F 6 as printed; nd 1.6364 / νd 35.4)",
      "role": "Flint rear element of the cemented doublet, facing the image; the only flint in the design.",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Biconvex Positive",
      "nd": 1.6074,
      "vd": 56.7,
      "indexReference": "d",
      "label": "Element 5",
      "focalLengthMm": 60.3,
      "glass": "SK2 (Schott, as printed; N-SK2 catalog curve)",
      "role": "Weak positive rear lens (patent lens D), set 23 mm behind the doublet to flatten the image."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 67,
      "d": 3.5,
      "sd": 48,
      "medium": 1
    },
    {
      "label": "2",
      "R": 26.5,
      "d": 19.9,
      "sd": 26.4,
      "rimExtensionSd": 48
    },
    {
      "label": "3",
      "R": 43.35,
      "d": 2.2,
      "sd": 21.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.26,
      "d": 24.1,
      "sd": 12.2,
      "rimExtensionSd": 21.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0
    },
    {
      "label": "5",
      "R": 87.6,
      "d": 6.6,
      "sd": 7,
      "medium": 3
    },
    {
      "label": "6",
      "R": -8.3,
      "d": 2.6,
      "sd": 7,
      "medium": 4
    },
    {
      "label": "7",
      "R": -24.2,
      "d": 23,
      "sd": 7
    },
    {
      "label": "8",
      "R": 81.1,
      "d": 8.3,
      "sd": 21.5,
      "medium": 5
    },
    {
      "label": "9",
      "R": -64.2,
      "d": 28.988003934,
      "sd": 21.5
    }
  ],
  "gaps": {},
  "groups": [
    {
      "text": "A + B",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "C + D",
      "fromSurface": "5",
      "toSurface": "9"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity focus only; the patent prints one set of spacings and describes no focusing movement, so the focus control does not move the lens."
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
      8,
      11,
      16
    ]
  },
  "projection": {
    "kind": "fisheye-equidistant",
    "focalLengthMm": 16.6754,
    "fullFieldDeg": 180,
    "imageCircleMm": 50.14,
    "maxTraceFieldDeg": 90
  },
  "layout": {
    "yScFill": 0.7
  },
  "checks": {
    "maxRimAngleDeg": 85.1,
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "fixed-lens-camera"
    ],
    "imageFormat": "6x9",
    "specs": [
      "5 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "F/6.3",
      "ABOUT 180° FIELD"
    ],
    "elementCount": 5,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 17,
      "design": 16.6754
    },
    "fNumber": {
      "marketing": 6.3,
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "DE 620,538 C",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1935,
    "authors": [],
    "assignees": [
      "Allgemeine Elektricitäts-Gesellschaft"
    ]
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
