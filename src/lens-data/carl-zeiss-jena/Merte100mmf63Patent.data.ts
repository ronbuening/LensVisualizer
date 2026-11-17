import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Normalized f100 interpreted as mm. Source nD retained, Vd absent; constant-index fallback is ONLY monochromatic, not achromatic. nG-prime preserved in analysis, not fitted. Stop location literal; diameter/rims estimated; BFD calculated. */
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-merte-100-f63-us1485515-patent-reference",
  "maker": "Zeiss",
  "name": "ZEISS MERTE 100mm f/6.3 PATENT REFERENCE",
  "subtitle": "US 1,485,515 \u2014 MONOCHROMATIC SODIUM D",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "PATENT-ONLY MONOCHROME REFERENCE",
      "NO RETAIL FOCAL-LENGTH IDENTITY",
      "ESTIMATED CLEAR APERTURES"
    ],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 99.97654348426373
    },
    "fNumber": {
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "US 1,485,515",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1924,
    "authors": [
      "Willy Mert\u00e9"
    ],
    "assignees": [
      "Carl Zeiss"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.59234,
      "indexReference": "D",
      "role": "Patent element; monochromatic sodium-D reference; no Vd supplied"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.59704,
      "indexReference": "D",
      "role": "Patent element; monochromatic sodium-D reference; no Vd supplied"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.6241,
      "indexReference": "D",
      "role": "Patent element; monochromatic sodium-D reference; no Vd supplied",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.499,
      "indexReference": "D",
      "role": "Patent element; monochromatic sodium-D reference; no Vd supplied",
      "cemented": "C1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 18.091,
      "d": 3.329,
      "sd": 8.3,
      "medium": 1
    },
    {
      "label": "2",
      "R": -38.834,
      "d": 0.13,
      "sd": 8.1
    },
    {
      "label": "3",
      "R": -36.679,
      "d": 0.83,
      "sd": 8.1,
      "medium": 2
    },
    {
      "label": "4",
      "R": 38.74,
      "d": 5.66,
      "sd": 8.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 18.25
    },
    {
      "label": "5",
      "R": -10.396,
      "d": 1.89,
      "sd": 5.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": -9.426,
      "d": 0.75,
      "sd": 5.2,
      "medium": 4
    },
    {
      "label": "7",
      "R": -17.13,
      "d": 49.6286724892259,
      "sd": 5.2
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent reference; no finite-focus motion modeled."
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
      8,
      11,
      16,
      22
    ]
  },
  "groups": [],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
