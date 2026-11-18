import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,361,207 A (Arthur Warmisham, assigned to Taylor, Taylor & Hobson Limited, granted 1920), Example II, Fig. 2:
 * an f/4.5 objective of four air-spaced spherical singlets, printed on specification page 2. The patent gives two
 * examples of unit equivalent focal length; this file uses Example II only, the design the patent describes as
 * intended for objectives of long focal length with a field of moderate extent.
 *
 * Every printed radius, thickness and separation is multiplied by 100, with no further scaling or fitting. The
 * printed table then traces to a paraxial focal length of 101.56 mm, 1.56 % above the patent's stated 1.00 (100 mm
 * at this scale). GB 113,590 A prints the same Example II numbers, so the residual belongs to the printed table and
 * is kept as it stands. Indices and Abbe numbers are the patent's sodium D-line nD and V values.
 *
 * Inferred, not printed: the iris, placed at the midpoint of the 1.42 mm middle air space S2 (0.71 mm on either
 * side; the patent draws no diaphragm), with its radius derived from f/4.5; the 11.5 mm clear semi-diameters, which
 * pass the f/4.5 axial beam and are not figure readings; and the 85.618 mm back focus, the computed paraxial image
 * distance for an object at infinity. The patent prints no back focus, field angle, image size or close-focus data.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "warmisham-us1361207-example2-patent-reference",
  "maker": "Cooke",
  "name": "WARMISHAM FOUR-SINGLET PATENT",
  "subtitle": "1920 Example II 100 mm f/4.5; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; NO RETAIL IDENTITY",
      "ESTIMATED MIDPOINT IRIS AND RIMS"
    ],
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 101.56
    },
    "fNumber": {
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 1,361,207 A",
    "example": {
      "label": "Example II",
      "id": "2"
    },
    "patentYear": 1920,
    "authors": [
      "Arthur Warmisham"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Limited"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Biconvex",
      "role": "Front biconvex crown",
      "focalLengthMm": 51.56,
      "nd": 1.6116,
      "vd": 56.4,
      "indexReference": "D",
      "indexReferenceNote": "Patent nD and V (sodium D line); colour is estimated from these two values."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Biconcave",
      "role": "Front biconcave flint ahead of the diaphragm",
      "focalLengthMm": -47.74,
      "nd": 1.6206,
      "vd": 36.2,
      "indexReference": "D",
      "indexReferenceNote": "Patent nD and V (sodium D line); colour is estimated from these two values."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Biconcave",
      "role": "Rear biconcave flint behind the diaphragm",
      "focalLengthMm": -58.08,
      "nd": 1.6206,
      "vd": 36.2,
      "indexReference": "D",
      "indexReferenceNote": "Patent nD and V (sodium D line); colour is estimated from these two values."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Biconvex",
      "role": "Rear biconvex crown",
      "focalLengthMm": 44.08,
      "nd": 1.6116,
      "vd": 56.4,
      "indexReference": "D",
      "indexReferenceNote": "Patent nD and V (sodium D line); colour is estimated from these two values."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 34.09,
      "d": 2.57,
      "sd": 11.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -408.1,
      "d": 10.89,
      "sd": 11.5
    },
    {
      "label": "3",
      "R": -41.43,
      "d": 0.9,
      "sd": 11.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 104.9,
      "d": 0.71,
      "sd": 11.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.71
    },
    {
      "label": "5",
      "R": -1440,
      "d": 0.9,
      "sd": 11.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 36.98,
      "d": 9.09,
      "sd": 11.5
    },
    {
      "label": "7",
      "R": 133.6,
      "d": 2.65,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": -33.52,
      "d": 85.61779647354736,
      "sd": 11.5
    }
  ],
  "aperture": {
    "nominalFNumber": 4.5,
    "maxFNumber": 22, "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent specifies no finite-focus movement."
  },
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
