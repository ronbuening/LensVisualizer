import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Application .393 branch, infinity tuning model. Estimated rims/clear apertures; drawing transverse scale uncalibrated. Grant .383 remains a separate sensitivity. Original source R/d/n and variants retained in baseline and previous checkpoints. */
const data = {
  "schema": 2,
  "visible": false,
  "key": "fujinon-sws-50-patent-tuning",
  "maker": "Fujifilm",
  "name": "FUJIFILM FUJINON SWS 50mm f/5.6",
  "subtitle": "Application .393 branch, infinity tuning model. Estimated rims/clear apertures; drawing transverse scale uncalibrated. Grant .383 remains a separate sensitivity.",
  "catalog": {
    "imageFormat": "6x9",
    "elementCount": 8,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 5.6
    },
    "specs": [
      "8 ELEMENTS / 6 GROUPS",
      "INFINITY ONLY",
      "PATENT REPRESENTATIVE",
      "PRIVATE TUNING MODEL",
      "ESTIMATED APERTURES / RIMS",
      "INFINITY ONLY"
    ]
  },
  "source": {
    "patentNumber": "JP S50-96221 A",
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "patentYear": 1975,
    "authors": [
      "Ryoichi Doi",
      "Yutaka Sakai"
    ],
    "assignees": [
      "Fuji Photo Optical Co., Ltd."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.6425,
      "vd": 58.1,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.6425,vd=58.1; exact glass unproven)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.56883,
      "vd": 56,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.56883,vd=56.0; exact glass unproven)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.65844,
      "vd": 50.8,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.65844,vd=50.8; exact glass unproven)",
      "cemented": "D3"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.54814,
      "vd": 45.9,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.54814,vd=45.9; exact glass unproven)",
      "cemented": "D3"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.5231,
      "vd": 50.9,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.5231,vd=50.9; exact glass unproven)",
      "cemented": "D4"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.6516,
      "vd": 58.5,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.6516,vd=58.5; exact glass unproven)",
      "cemented": "D4"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.3,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.72825,vd=28.3; exact glass unproven)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.65844,
      "vd": 50.8,
      "indexReference": "d",
      "glass": "Unmatched (source nd=1.65844,vd=50.8; exact glass unproven)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 39.644,
      "d": 2,
      "sd": 18,
      "medium": 1
    },
    {
      "label": "2",
      "R": 18.9305,
      "d": 13.941500000000001,
      "sd": 16
    },
    {
      "label": "3",
      "R": 30.710500000000003,
      "d": 2.3,
      "sd": 14,
      "medium": 2
    },
    {
      "label": "4",
      "R": 21.4135,
      "d": 1.1684999999999999,
      "sd": 10.5
    },
    {
      "label": "5",
      "R": 32.2615,
      "d": 14.2,
      "sd": 12,
      "medium": 3
    },
    {
      "label": "6",
      "R": -21.037,
      "d": 2,
      "sd": 11,
      "medium": 4
    },
    {
      "label": "7",
      "R": 204.08149999999998,
      "d": 1.4055000000000035,
      "sd": 11
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.8444999999999965
    },
    {
      "label": "8",
      "R": 581.395,
      "d": 2,
      "sd": 10,
      "medium": 5
    },
    {
      "label": "9",
      "R": 12.9995,
      "d": 19.650000000000002,
      "sd": 10,
      "medium": 6
    },
    {
      "label": "10",
      "R": -18.032500000000002,
      "d": 0.47000000000000003,
      "sd": 10
    },
    {
      "label": "11",
      "R": -16.4655,
      "d": 3.25,
      "sd": 10,
      "medium": 7
    },
    {
      "label": "12",
      "R": -25.7695,
      "d": 8.5105,
      "sd": 13
    },
    {
      "label": "13",
      "R": -15.7435,
      "d": 2,
      "sd": 13.5,
      "medium": 8
    },
    {
      "label": "14",
      "R": -35.329,
      "d": 34.775,
      "sd": 17
    }
  ],
  "focus": {
    "closeFocusM": 1,
    "description": "Static infinity-only research-transcription branch. Required closeFocusM is a schema placeholder, no finite-focus reconstruction."
  },
  "aperture": {
    "nominalFNumber": 5.6,
    "fStops": [
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
  },
  "layout": {
    "scFill": 0.6,
    "yScFill": 0.45
  }
} satisfies LensDataV2Input;
export default data;
