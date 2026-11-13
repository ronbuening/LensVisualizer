import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,108,307 A, sole numerical example on PDF page 2; drawing on PDF page 1.
 * Scale factor 1: source f = 100 is represented as 100 mm; source length values
 * are retained numerically as millimetres (units conversion ×1), without fitting.
 * Eight radii, seven axial intervals and four sodium nD / C–F pairs are transcribed;
 * νD is derived as (nD − 1)/(nF − nC). The stop midpoint (2.7/2.7 mm), its
 * f/4.5-derived radius and all 11.5 mm rims are inferred, not printed dimensions.
 * The terminal 88.708856474 mm interval is calculated infinity back focus.
 * Smith identifies this prescription as the Dogmar; production variants and
 * factory glass melts are not established by the patent.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "c-p-goerz-dogmar-10cm-f45",
  "maker": "C. P. Goerz",
  "name": "C. P. GOERZ DOGMAR 10cm f/4.5",
  "subtitle": "US 1,108,307 A, sole example — Goerz Dogmar f/4.5",
  "visible": true,
  "catalog": {
    "lensMounts": ["large-format-lens-board"],
    "imageFormat": "6x9",
    "specs": ["4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "f/4.5"],
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 1,108,307 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1914,
    "authors": [
      "Walther Zschokke"
    ],
    "assignees": [
      "Optische Anstalt C. P. Goerz Aktiengesellschaft"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "role": "Positive front element of the front cell",
      "nd": 1.61412,
      "vd": 56.341284403669725,
      "indexReference": "D",
      "glass": "Unmatched (nD 1.61412 / V 56.3412844)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "role": "Negative inner element of the front cell, with its stronger curve toward the diaphragm",
      "nd": 1.5689,
      "vd": 42.61423220973782,
      "indexReference": "D",
      "glass": "Unmatched (nD 1.56890 / V 42.6142322)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "role": "Negative inner element of the rear cell, with its weaker curve toward the diaphragm",
      "nd": 1.5482,
      "vd": 46.14478114478115,
      "indexReference": "D",
      "glass": "Unmatched (nD 1.54820 / V 46.1447811)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "role": "Positive rear element of the rear cell",
      "nd": 1.61412,
      "vd": 56.341284403669725,
      "indexReference": "D",
      "glass": "Unmatched (nD 1.61412 / V 56.3412844)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 27.701,
      "d": 4.2,
      "sd": 11.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -103.093,
      "d": 1.8,
      "sd": 11.5
    },
    {
      "label": "3",
      "R": -53.909,
      "d": 1.6,
      "sd": 11.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 37.736,
      "d": 2.7,
      "sd": 11.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.7
    },
    {
      "label": "5",
      "R": -63.291,
      "d": 1.6,
      "sd": 11.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 35.088,
      "d": 1.8,
      "sd": 11.5
    },
    {
      "label": "7",
      "R": 53.191,
      "d": 3.6,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": -35.69,
      "d": 88.708856474,
      "sd": 11.5
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent supplies no finite-focus spacings."
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22,
      32,
      36
    ],
    "maxFNumber": 36
  },
  "projection": {
    "kind": "rectilinear"
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
