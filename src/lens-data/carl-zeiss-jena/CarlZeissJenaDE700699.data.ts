import type { LensDataV2Input } from "../main/src/types/lensDataV2.js";
const data = {
  "schema": 2,
  "key": "bertele-de700699-100mm-f2-patent-reference",
  "maker": "Zeiss Ikon",
  "name": "BERTELE DE700699 — 100mm f/2 PATENT REFERENCE",
  "subtitle": "App-ready patent reconstruction · source nominal f/2 · estimated iris/rims · infinity D-line only",
  "source": {
    "patentNumber": "DE 700,699 A",
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
    "elementCount": 7,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 100
    },
    "fNumber": {
      "design": 2
    },
    "specs": [
      "APP-READY PATENT RECONSTRUCTION · ESTIMATED IRIS/RIMS",
      "GERMAN PATENT EXAMPLE · 7 ELEMENTS / 3 GROUPS 1|3|3",
      "NOT US2188523 OR US2254511",
      "SOURCE NOMINAL f/2 · FINITE PUPIL DIFFERENCE DOCUMENTED",
      "PUBLISHED IRIS STATION · ESTIMATED DIAMETER/RIMS",
      "ESTIMATED 10° FULL DIAGNOSTIC FIELD",
      "D-LINE ONLY · ABBE CHANNELS UNCALIBRATED",
      "NO RETAIL SONNAR/JUPITER IDENTITY · INFINITY ONLY"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 1.6204,
      "vd": 60.3,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 1.7016,
      "vd": 41.2,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Biconvex Positive",
      "type": "Biconvex Positive",
      "nd": 1.54,
      "vd": 59.6,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Biconcave Negative",
      "type": "Biconcave Negative",
      "nd": 1.6883,
      "vd": 31.2,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 1.6204,
      "vd": 60.3,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Biconcave Negative",
      "type": "Biconcave Negative",
      "nd": 1.5174,
      "vd": 52.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Biconvex Positive",
      "type": "Biconvex Positive",
      "nd": 1.6689,
      "vd": 48.8,
      "indexReference": "D",
      "indexReferenceNote": "Literal source n_D/V. No exact catalog glass/melt or measured channel indices. Native Abbe fallback uncalibrated; only D-line ray claims independently checked.",
      "glass": "Unmatched (historical German source n_D/V; no exact catalog identification)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 67.54,
      "d": 6.79,
      "sd": 26.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 380.08,
      "d": 0.38,
      "sd": 26.5
    },
    {
      "label": "3",
      "R": 34.01,
      "d": 7.17,
      "sd": 24.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 63.22,
      "d": 7.55,
      "sd": 23,
      "medium": 3
    },
    {
      "label": "5",
      "R": -481.81,
      "d": 1.89,
      "sd": 22.5,
      "medium": 4
    },
    {
      "label": "6",
      "R": 24.08,
      "d": 7.5,
      "sd": 16.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.94
    },
    {
      "label": "7",
      "R": -128.76,
      "d": 10.76,
      "sd": 17,
      "medium": 5
    },
    {
      "label": "8",
      "R": -44.37,
      "d": 1.13,
      "sd": 17,
      "medium": 6
    },
    {
      "label": "9",
      "R": 41.14,
      "d": 22.46,
      "sd": 17,
      "medium": 7
    },
    {
      "label": "10",
      "R": -89.32,
      "d": 54.53516467419609,
      "sd": 17
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity-only patent reference; no source close-focus schedule or retail focusing mechanism inferred."
  },
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
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
      "text": "G3 (3 cemented)",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.5
  }
} satisfies LensDataV2Input;
export default data;
