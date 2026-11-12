import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden literal patent embodiment; published caps/stop, native sodium-D, no scale or focus fit. */
const LENS_DATA = {
  "schema": 2,
  "key": "zenit-petzval-85mm-f22-representative",
  "maker": "KMZ",
  "name": "Zenit Petzval 85mm f/2.2",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "nd": 1.6568,
      "vd": 51.11,
      "indexReference": "D",
      "glass": "TK21 literal patent nD/vD; no catalog substitution",
      "label": "Element 1",
      "type": "Patent spherical glass"
    },
    {
      "id": 2,
      "name": "L2",
      "nd": 1.755,
      "vd": 27.52,
      "indexReference": "D",
      "glass": "TF5 literal patent nD/vD; no catalog substitution",
      "label": "Element 2",
      "type": "Patent spherical glass"
    },
    {
      "id": 3,
      "name": "L3",
      "nd": 1.5749,
      "vd": 41.3,
      "indexReference": "D",
      "glass": "LF5 literal patent nD/vD; no catalog substitution",
      "label": "Element 3",
      "type": "Patent spherical glass"
    },
    {
      "id": 4,
      "name": "L4",
      "nd": 1.6568,
      "vd": 51.11,
      "indexReference": "D",
      "glass": "TK21 literal patent nD/vD; no catalog substitution",
      "label": "Element 4",
      "type": "Patent spherical glass"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.05,
      "d": 13,
      "sd": 18.75,
      "medium": 1
    },
    {
      "label": "2",
      "R": -66.53,
      "d": 4,
      "sd": 17.6,
      "medium": 2
    },
    {
      "label": "3",
      "R": "flat",
      "d": 18,
      "sd": 16.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3
    },
    {
      "label": "4",
      "R": -45.29,
      "d": 8,
      "sd": 11.55,
      "medium": 3
    },
    {
      "label": "5",
      "R": 26.3,
      "d": 3.4,
      "sd": 10.75
    },
    {
      "label": "6",
      "R": 42.17,
      "d": 8.8,
      "sd": 11.2,
      "medium": 4
    },
    {
      "label": "7",
      "R": -42.17,
      "d": 43.22,
      "sd": 11.2
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity-only sentinel; retail rack-and-pinion focus travel is not reconstructed."
  },
  "aperture": {
    "nominalFNumber": 2.2,
    "fStops": [
      2.2
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 32,
    "maxTraceFieldDeg": 16
  },
  "layout": {
    "yScFill": 0.7
  },
  "subtitle": "RU2549915 whole prescription; published clear diameters and stop, qualified retail association",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "canon-ef",
      "nikon-f"
    ],
    "closeFocusM": {
      "marketing": 1
    },
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.01
    },
    "fNumber": {
      "marketing": 2.2,
      "design": 2.2
    },
    "specs": [
      "Original patent embodiment, not factory-exact retail prescription",
      "Published clear diameters and source stop; fixed printed image plane",
      "Infinity-only; peripheral clipping and approximate Abbe dispersion"
    ]
  },
  "source": {
    "patentNumber": "RU 2549915 C1",
    "patentYear": 2015,
    "example": {
      "label": "Whole Table 1",
      "id": "1"
    },
    "authors": [
      "Vladimir Alexandrovich Bogdankov",
      "Artem Andreevich Timirev",
      "Sergey Ivanovich Shcheglov"
    ],
    "assignees": [
      "PJSC Krasnogorsky Zavod named after S. A. Zverev"
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
