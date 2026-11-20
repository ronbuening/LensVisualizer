import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Patent-derived infinity tuning model. Estimated clear apertures/rims and representative iris; modeled vignetting is not retail performance. Original source R/d/n and variants retained in baseline and previous checkpoints. */
const data = {
  "schema": 2,
  "visible": false,
  "key": "schacht-travegon-35-patent-tuning",
  "maker": "Schacht",
  "name": "SCHACHT TRAVEGON 35mm f/3.5",
  "subtitle": "Patent-derived infinity tuning model. Estimated clear apertures/rims and representative iris; modeled vignetting is not retail performance.",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "specs": [
      "6 ELEMENTS / 3 GROUPS",
      "PATENT REPRESENTATIVE",
      "ESTIMATED IRIS",
      "INFINITY ONLY",
      "PRIVATE TUNING MODEL",
      "ESTIMATED APERTURES / RIMS",
      "INFINITY ONLY"
    ]
  },
  "source": {
    "patentNumber": "DE 1,020,809 B",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 1957,
    "authors": [
      "Ludwig Jakob Bertele"
    ],
    "assignees": [],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Source Cemented Element",
      "nd": 1.717,
      "vd": 47.9,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.717,vd=47.9; supplier unproven)",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Source Cemented Element",
      "nd": 1.50137,
      "vd": 56.5,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.50137,vd=56.5; supplier unproven)",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Source Cemented Element",
      "nd": 1.72019,
      "vd": 50.3,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.72019,vd=50.3; supplier unproven)",
      "cemented": "D2"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Source Cemented Element",
      "nd": 1.5927,
      "vd": 35.4,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.5927,vd=35.4; supplier unproven)",
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Source Cemented Element",
      "nd": 1.57501,
      "vd": 41.3,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.57501,vd=41.3; supplier unproven)",
      "cemented": "D3"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Source Cemented Element",
      "nd": 1.6425,
      "vd": 58.1,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.6425,vd=58.1; supplier unproven)",
      "cemented": "D3"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 25.6865,
      "d": 3.1324999999999994,
      "sd": 12.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 203.0385,
      "d": 0.8715,
      "sd": 12.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": 10.083499999999999,
      "d": 6.391,
      "sd": 8.5
    },
    {
      "label": "4",
      "R": 17.2305,
      "d": 3.4824999999999995,
      "sd": 7,
      "medium": 3
    },
    {
      "label": "5",
      "R": "flat",
      "d": 7.4479999999999995,
      "sd": 7,
      "medium": 4
    },
    {
      "label": "6",
      "R": 14.3395,
      "d": 1.7709999999999997,
      "sd": 7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.015
    },
    {
      "label": "7",
      "R": -170.56199999999998,
      "d": 0.8715,
      "sd": 6.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": 12.879999999999999,
      "d": 4.2105,
      "sd": 6.5,
      "medium": 6
    },
    {
      "label": "9",
      "R": -15.854999999999999,
      "d": 33.65572094887836,
      "sd": 7.5
    }
  ],
  "focus": {
    "closeFocusM": 1,
    "description": "Static infinity branch. Required closeFocusM is a placeholder; no finite-focus prescription reconstructed."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
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
    "fullFieldDeg": 64,
    "maxTraceFieldDeg": 32
  },
  "layout": {
    "scFill": 0.6,
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default data;
