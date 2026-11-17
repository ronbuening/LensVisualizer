import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal Figure 1 nD/V and geometry. Middle-of-gap stop and clear rims are estimates; no iris in patent drawing. BFD calculated at sodium D. No factory product identity. */
const LENS_DATA = {
  "schema": 2,
  "key": "kodak-bennett-100-f38-us2231699-figure1-patent-reference",
  "maker": "Kodak",
  "name": "KODAK BENNETT 100mm f/3.8 PATENT REFERENCE",
  "subtitle": "1939 DESIGN / 1941 GRANT \u2014 NO PRODUCTION MATCH",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 2 GROUPS",
      "PATENT-ONLY REFERENCE",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 100.05834371899277
    },
    "fNumber": {
      "design": 3.8
    }
  },
  "source": {
    "patentNumber": "US 2,231,699",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1941,
    "authors": [
      "Harold F. Bennett"
    ],
    "assignees": [
      "Eastman Kodak Company"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.498,
      "vd": 67,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Literal patent nD/V; native Abbe dispersion approximation, not identified factory glass"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Plano-concave Negative",
      "nd": 1.664,
      "vd": 35.9,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Literal patent nD/V; native Abbe dispersion approximation, not identified factory glass"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.516,
      "vd": 64.1,
      "indexReference": "D",
      "cemented": "C2",
      "role": "Literal patent nD/V; native Abbe dispersion approximation, not identified factory glass"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.639,
      "vd": 55.5,
      "indexReference": "D",
      "cemented": "C2",
      "role": "Literal patent nD/V; native Abbe dispersion approximation, not identified factory glass"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 29.18,
      "d": 7.3,
      "sd": 13.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -47.45,
      "d": 2.1,
      "sd": 13.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": "flat",
      "d": 19.75,
      "sd": 13.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 19.75
    },
    {
      "label": "4",
      "R": -16.45,
      "d": 2.9,
      "sd": 10,
      "medium": 3
    },
    {
      "label": "5",
      "R": 52.5,
      "d": 5.5,
      "sd": 10,
      "medium": 4
    },
    {
      "label": "6",
      "R": -33.58,
      "d": 33.452186952425265,
      "sd": 10
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent reference. No sourced finite-focus motion."
  },
  "aperture": {
    "nominalFNumber": 3.8,
    "fStops": [
      3.8,
      5.6,
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
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "C2",
      "fromSurface": "4",
      "toSurface": "6"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
