import type { LensDataV2Input } from "../main/src/types/lensDataV2.js";
const data = {
  "schema": 2,
  "key": "bertele-us2254511-100mm-f14-patent-reference",
  "maker": "Zeiss Ikon",
  "name": "BERTELE US2254511 — 100mm f/1.4 PATENT REFERENCE",
  "subtitle": "App-ready patent reconstruction · source nominal f/1.4 · estimated iris/rims · infinity D-line only",
  "source": {
    "patentNumber": "US 2,254,511 A",
    "patentYear": 1941,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Ludwig Bertele"
    ],
    "assignees": [
      "Zeiss Ikon Aktiengesellschaft"
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "elementCount": 8,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 100
    },
    "fNumber": {
      "design": 1.4
    },
    "specs": [
      "APP-READY PATENT RECONSTRUCTION · ESTIMATED IRIS/RIMS",
      "PATENT ONLY · EIGHT ELEMENTS / THREE GROUPS",
      "SOURCE NOMINAL 100 mm f/1.4",
      "ESTIMATED IRIS AT 90% OF SOURCE 13.50 mm GAP",
      "ESTIMATED CLEAR RADII · 10° FULL DIAGNOSTIC FIELD",
      "D-LINE VALIDATION ONLY · ABBE CHANNELS UNCALIBRATED",
      "NO PRODUCTION IDENTITY · INFINITY ONLY"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 1.6202,
      "vd": 60.3,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 1.7015,
      "vd": 41.1,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Biconvex Positive",
      "type": "Biconvex Positive",
      "nd": 1.445,
      "vd": 68.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Biconcave Negative",
      "type": "Biconcave Negative",
      "nd": 1.7219,
      "vd": 28.1,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 1.6385,
      "vd": 55.5,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Biconcave Negative",
      "type": "Biconcave Negative",
      "nd": 1.515,
      "vd": 50,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Biconvex Positive",
      "type": "Biconvex Positive",
      "nd": 1.6689,
      "vd": 48.8,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Negative Meniscus",
      "type": "Negative Meniscus",
      "nd": 1.6102,
      "vd": 56.5,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog melt or measured channel indices; native Abbe fallback uncalibrated. Only D-line optical claims independently checked.",
      "glass": "Unmatched (historical source n_D/V; no exact catalog identification)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 74.4,
      "d": 9.8,
      "sd": 37,
      "medium": 1
    },
    {
      "label": "2",
      "R": 756.8,
      "d": 0.24,
      "sd": 37
    },
    {
      "label": "3",
      "R": 38.16,
      "d": 11.1,
      "sd": 32,
      "medium": 2
    },
    {
      "label": "4",
      "R": 79,
      "d": 8.4,
      "sd": 31,
      "medium": 3
    },
    {
      "label": "5",
      "R": -850,
      "d": 2,
      "sd": 29.5,
      "medium": 4
    },
    {
      "label": "6",
      "R": 25.45,
      "d": 12.15,
      "sd": 21.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.35
    },
    {
      "label": "7",
      "R": -740,
      "d": 8,
      "sd": 21,
      "medium": 5
    },
    {
      "label": "8",
      "R": -80,
      "d": 1.2,
      "sd": 21,
      "medium": 6
    },
    {
      "label": "9",
      "R": 58,
      "d": 20,
      "sd": 21,
      "medium": 7
    },
    {
      "label": "10",
      "R": -23.6,
      "d": 2.6,
      "sd": 21,
      "medium": 8
    },
    {
      "label": "11",
      "R": -106.94,
      "d": 46.03946855339914,
      "sd": 21
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity-only patent reference; no close-focus prescription or production focusing mechanism is supplied."
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
      2,
      2.8,
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
    "maxTraceFieldDeg": 5
  },
  "groups": [
    {
      "text": "G1 (1)",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2 (3 cemented)",
      "fromSurface": "3",
      "toSurface": "6"
    },
    {
      "text": "G3 (4 cemented)",
      "fromSurface": "7",
      "toSurface": "11"
    }
  ],
  "layout": {
    "yScFill": 0.5
  }
} satisfies LensDataV2Input;
export default data;
