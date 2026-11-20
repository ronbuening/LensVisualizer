import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Patent-derived infinity tuning model. Estimated clear apertures and stepped outer geometry; sampled clipping is modeled vignetting, not retail performance. Original source R/d/n and variants retained in baseline and previous checkpoints. */
const data = {
  "schema": 2,
  "visible": false,
  "layout": {
    "scFill": 0.6,
    "yScFill": 0.45
  },
  "focus": {
    "closeFocusM": 1,
    "description": "Infinity-only static prescription. No variable gaps and no finite-conjugate reconstruction; closeFocusM is a required schema/UI placeholder, not a validated endpoint."
  },
  "key": "leica-super-angulon-m-21-patent-tuning",
  "maker": "Leica",
  "name": "LEICA SUPER-ANGULON-M 21mm f/3.4",
  "subtitle": "Patent-derived infinity tuning model. Estimated clear apertures and stepped outer geometry; sampled clipping is modeled vignetting, not retail performance.",
  "catalog": {
    "lensMounts": [
      "leica-m"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 8,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 21,
      "design": 21
    },
    "fNumber": {
      "marketing": 3.4,
      "design": 3.4
    },
    "specs": [
      "8 ELEMENTS / 4 GROUPS",
      "PATENT REPRESENTATIVE",
      "INFINITY ONLY",
      "90° PATENT FIELD",
      "PRIVATE TUNING MODEL",
      "ESTIMATED APERTURES / RIMS",
      "INFINITY ONLY"
    ]
  },
  "source": {
    "patentNumber": "DE 1,273,853 B",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1968,
    "authors": [
      "Karl Heinrich Macher"
    ],
    "assignees": [
      "Jos. Schneider & Co., Optische Werke"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.52249,
      "vd": 59.64,
      "glass": "Unmatched (source n=1.52249, Abbe=59.64; supplier unproven)",
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.72372,
      "vd": 38.09,
      "glass": "Unmatched (source n=1.72372, Abbe=38.09; supplier unproven)",
      "indexReference": "d",
      "cemented": "T1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.60729,
      "vd": 49.25,
      "glass": "Unmatched (source n=1.60729, Abbe=49.25; supplier unproven)",
      "indexReference": "d",
      "cemented": "T1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.56013,
      "vd": 47.03,
      "glass": "Unmatched (source n=1.56013, Abbe=47.03; supplier unproven)",
      "indexReference": "d",
      "cemented": "T1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.56732,
      "vd": 42.82,
      "glass": "Unmatched (source n=1.56732, Abbe=42.82; supplier unproven)",
      "indexReference": "d",
      "cemented": "T2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.62299,
      "vd": 58.12,
      "glass": "Unmatched (source n=1.62299, Abbe=58.12; supplier unproven)",
      "indexReference": "d",
      "cemented": "T2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.717,
      "vd": 47.9,
      "glass": "Unmatched (source n=1.717, Abbe=47.9; supplier unproven)",
      "indexReference": "d",
      "cemented": "T2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.54072,
      "vd": 47.22,
      "glass": "Unmatched (source n=1.54072, Abbe=47.22; supplier unproven)",
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 49.337399999999995,
      "d": 5.1513,
      "sd": 12.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 8.824200000000001,
      "d": 7.791,
      "sd": 7.5
    },
    {
      "label": "3",
      "R": 12.963299999999998,
      "d": 1.5225,
      "sd": 6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 7.1757,
      "d": 7.665,
      "sd": 6,
      "medium": 3
    },
    {
      "label": "5",
      "R": -7.398299999999999,
      "d": 1.0290000000000001,
      "sd": 6,
      "medium": 4
    },
    {
      "label": "6",
      "R": -56.8176,
      "d": 0.86835,
      "sd": 6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.86835
    },
    {
      "label": "7",
      "R": 66.9375,
      "d": 0.9702,
      "sd": 4.8,
      "medium": 5
    },
    {
      "label": "8",
      "R": 6.132,
      "d": 5.502,
      "sd": 4.8,
      "medium": 6
    },
    {
      "label": "9",
      "R": -5.9807999999999995,
      "d": 3.8619,
      "sd": 4.8,
      "medium": 7
    },
    {
      "label": "10",
      "R": -16.485,
      "d": 6.5877,
      "sd": 4.8
    },
    {
      "label": "11",
      "R": -7.975799999999999,
      "d": 3.0765,
      "sd": 7,
      "medium": 8
    },
    {
      "label": "12",
      "R": -34.734,
      "d": 8.19,
      "sd": 11
    }
  ],
  "aperture": {
    "nominalFNumber": 3.4,
    "fStops": [
      3.4,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 90,
    "maxTraceFieldDeg": 45
  }
} satisfies LensDataV2Input;
export default data;
