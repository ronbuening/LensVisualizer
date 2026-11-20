import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Patent-derived infinity tuning model. Estimated rims and iris. Limited to 70 degrees modeled full field; not the retail 92-degree coverage. Original source R/d/n and variants retained in baseline and previous checkpoints. */
const data = {
  "schema": 2,
  "visible": false,
  "key": "leica-super-angulon-21-f4-patent-tuning",
  "maker": "Leica",
  "name": "LEICA SUPER-ANGULON 21mm f/4",
  "subtitle": "Patent-derived infinity tuning model. Estimated rims and iris. Limited to 70 degrees modeled full field; not the retail 92-degree coverage.",
  "catalog": {
    "lensMounts": [
      "leica-m"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 9,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 21,
      "design": 21
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "9 ELEMENTS / 4 GROUPS",
      "INFINITY ONLY",
      "REPRESENTATIVE PATENT BRANCH",
      "PRIVATE TUNING MODEL",
      "ESTIMATED APERTURES / RIMS",
      "INFINITY ONLY",
      "MODELED FIELD LIMITED TO 70°"
    ]
  },
  "source": {
    "patentNumber": "DE 1,107,416 B",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1961,
    "authors": [
      "Günter Klemt",
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
      "type": "Source Cemented Element",
      "nd": 1.6583,
      "vd": 57.49,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.6583, vd=57.49; supplier unproven)",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Source Cemented Element",
      "nd": 1.4645,
      "vd": 65.79,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.4645, vd=65.79; supplier unproven)",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Source Cemented Element",
      "nd": 1.58904,
      "vd": 53.16,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.58904, vd=53.16; supplier unproven)",
      "cemented": "D2"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Source Cemented Element",
      "nd": 1.60729,
      "vd": 49.25,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.60729, vd=49.25; supplier unproven)",
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Source Cemented Element",
      "nd": 1.52944,
      "vd": 51.8,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.52944, vd=51.8; supplier unproven)",
      "cemented": "T3"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Source Cemented Element",
      "nd": 1.61772,
      "vd": 49.78,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.61772, vd=49.78; supplier unproven)",
      "cemented": "T3"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Source Cemented Element",
      "nd": 1.7847,
      "vd": 26.1,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.7847, vd=26.1; supplier unproven)",
      "cemented": "T3"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Source Cemented Element",
      "nd": 1.53375,
      "vd": 55.37,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.53375, vd=55.37; supplier unproven)",
      "cemented": "D4"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Source Cemented Element",
      "nd": 1.65844,
      "vd": 50.84,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.65844, vd=50.84; supplier unproven)",
      "cemented": "D4"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 46.6851,
      "d": 0.9386999999999999,
      "sd": 12.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 10.0968,
      "d": 2.9211,
      "sd": 8.3,
      "medium": 2
    },
    {
      "label": "3",
      "R": 9.4647,
      "d": 7.497,
      "sd": 8.3
    },
    {
      "label": "4",
      "R": 13.0578,
      "d": 1.4511,
      "sd": 5.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 6.2600999999999996,
      "d": 8.3286,
      "sd": 5.5,
      "medium": 4
    },
    {
      "label": "6",
      "R": -36.7836,
      "d": 0.8295,
      "sd": 5.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.8295
    },
    {
      "label": "7",
      "R": 115.59660000000001,
      "d": 0.5397,
      "sd": 4.3,
      "medium": 5
    },
    {
      "label": "8",
      "R": 5.8694999999999995,
      "d": 4.1958,
      "sd": 4.3,
      "medium": 6
    },
    {
      "label": "9",
      "R": -5.733,
      "d": 5.9955,
      "sd": 4.3,
      "medium": 7
    },
    {
      "label": "10",
      "R": -15.6618,
      "d": 6.5583,
      "sd": 5.2
    },
    {
      "label": "11",
      "R": -7.637699999999999,
      "d": 3.4019999999999997,
      "sd": 6.8,
      "medium": 8
    },
    {
      "label": "12",
      "R": -9.8196,
      "d": 1.0436999999999999,
      "sd": 6.8,
      "medium": 9
    },
    {
      "label": "13",
      "R": -28.6377,
      "d": 7.727999999999999,
      "sd": 10
    }
  ],
  "focus": {
    "closeFocusM": 1,
    "description": "Infinity-only static table. Required closeFocusM is a schema placeholder; no finite-conjugate behavior reconstructed."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "fullFieldDeg": 70,
    "maxTraceFieldDeg": 35
  },
  "layout": {
    "scFill": 0.6,
    "yScFill": 0.45
  }
} satisfies LensDataV2Input;
export default data;
