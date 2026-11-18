import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "kodak-frederick-wood-us1620339-patent-reference",
  "maker": "Eastman Kodak",
  "name": "FREDERICK-WOOD PROJECTION PATENT REFERENCE",
  "subtitle": "1927 100 mm f/2.5; reciprocal infinity reference; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "3 ELEMENTS / 2 GROUPS",
      "PATENT ONLY; NO RETAIL IDENTITY",
      "ESTIMATED FRONT IRIS AND RIMS",
      "RECIPROCAL INFINITY REFERENCE ONLY"
    ],
    "elementCount": 3,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 99.98350859887753
    },
    "fNumber": {
      "design": 2.5
    }
  },
  "source": {
    "patentNumber": "US 1,620,339",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1927,
    "authors": [
      "Charles W. Frederick",
      "Donald L. Wood"
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
      "label": "L1",
      "type": "Biconvex",
      "nd": 1.523,
      "vd": 59,
      "indexReference": "D",
      "indexReferenceNote": "Literal nD and source dispersive ratio. Exact nG preserved separately; native dispersion is an approximation from nD/V."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Meniscus",
      "nd": 1.617,
      "vd": 36.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal nD and source dispersive ratio. Exact nG preserved separately; native dispersion is an approximation from nD/V."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Meniscus",
      "nd": 1.523,
      "vd": 59,
      "indexReference": "D",
      "indexReferenceNote": "Literal nD and source dispersive ratio. Exact nG preserved separately; native dispersion is an approximation from nD/V."
    }
  ],
  "surfaces": [
    {
      "label": "STO",
      "R": "flat",
      "d": 1
    },
    {
      "label": "1",
      "R": 82.8,
      "d": 9.4,
      "sd": 22,
      "medium": 1
    },
    {
      "label": "2",
      "R": -69.2,
      "d": 3.8,
      "sd": 22,
      "medium": 2
    },
    {
      "label": "3",
      "R": -601.9,
      "d": 96.7,
      "sd": 22
    },
    {
      "label": "4",
      "R": 40.7,
      "d": 8,
      "sd": 22,
      "medium": 3
    },
    {
      "label": "5",
      "R": 220.7,
      "d": 31.40822922209336,
      "sd": 22
    }
  ],
  "aperture": {
    "nominalFNumber": 2.5,
    "fStops": [
      2.5,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Reciprocal infinity-only reference, front-to-film direction. Not a finite-conjugate projector simulation. Source nominal 100mm f/2.5 and BFD31.3; calculated D BFD31.4082 preserved rather than fitted. Estimated iris 1mm before front surface and 22mm clear semi-diameter rims; neither is specified by patent. No projector magnification, gate format or production identity claimed."
  },
  "groups": [],
  "doublets": [
    {
      "text": "CEMENTED FRONT PAIR",
      "fromSurface": "1",
      "toSurface": "3"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
