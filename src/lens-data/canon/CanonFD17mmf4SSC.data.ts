import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private production-correlated source reconstruction. Literal signed source, estimated iris/caps; browserQA deferred. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-fd-17mm-f4-ssc",
  "maker": "Canon",
  "visible": false,
  "name": "CANON FD 17mm f/4 S.S.C.",
  "subtitle": "US3748021A Embodiment1; production-correlated patent reconstruction, not factory exact",
  "source": {
    "patentNumber": "US 3748021 A",
    "patentYear": 1973,
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "authors": [
      "Akira Tajima",
      "Kikuo Momiyama"
    ],
    "assignees": [
      "Canon Kabushiki Kaisha"
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "lensMounts": [
      "canon-fd"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 17,
      "design": 17.39991546639363
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "closeFocusM": {
      "marketing": 0.25
    },
    "specs": [
      "Canon period catalog printed16 cutaway, independently registered all20 signed surfaces with one uniform transform; not factory exact.",
      "One disclosed17.4mm/source-f normalization, exact printed2.0714f rear air retained. No source fitting.",
      "Private f4/f8-controls through\u00b15deg helium-d static infinity only. No nominal full104deg performance claim.",
      "Iris position estimated midpoint of unnumbered schematicD12 iris; radius and inner optical caps estimated.",
      "Published nearD8 .025f at17.24f image-object distance299.976mm remains documentary, not retail250mm or a modeled focus schedule.",
      "BrowserQA deferred to integration, not passed."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.6968,
      "vd": 55.2,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.68893,
      "vd": 31,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.64769,
      "vd": 33.8,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.5,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Lens",
      "nd": 1.50137,
      "vd": 56.2,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Lens",
      "nd": 1.56384,
      "vd": 60.7,
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Lens",
      "nd": 1.72151,
      "vd": 29.2,
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Lens",
      "nd": 1.92286,
      "vd": 20.9,
      "indexReference": "d"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Element 10",
      "type": "Lens",
      "nd": 1.48749,
      "vd": 69.8,
      "indexReference": "d"
    },
    {
      "id": 11,
      "name": "E11",
      "label": "Element 11",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.5,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 35.87879999999999,
      "d": 1.9992599999999998,
      "sd": 4.3500000000000005,
      "medium": 1
    },
    {
      "label": "2",
      "R": 19.750739999999997,
      "d": 6.3457799999999995,
      "sd": 4.15
    },
    {
      "label": "3",
      "R": 36.75924,
      "d": 1.9992599999999998,
      "sd": 3.9000000000000004,
      "medium": 2
    },
    {
      "label": "4",
      "R": 18.19692,
      "d": 6.9078,
      "sd": 3.8000000000000003
    },
    {
      "label": "5",
      "R": 283.9158,
      "d": 5.17998,
      "sd": 4,
      "medium": 3
    },
    {
      "label": "6",
      "R": -84.67535999999998,
      "d": 0.09917999999999999,
      "sd": 4.1000000000000005
    },
    {
      "label": "7",
      "R": 52.69416,
      "d": 4.710179999999999,
      "sd": 4.1000000000000005,
      "medium": 4
    },
    {
      "label": "8",
      "R": -803.1143999999999,
      "d": 1.0005,
      "sd": 3.9000000000000004
    },
    {
      "label": "9",
      "R": 20.0448,
      "d": 1.0005,
      "sd": 3.85,
      "medium": 5
    },
    {
      "label": "10",
      "R": 8.551925999999998,
      "d": 2.7335399999999996,
      "sd": 3.7
    },
    {
      "label": "11",
      "R": 30.571799999999996,
      "d": 9.444719999999998,
      "sd": 4,
      "medium": 6
    },
    {
      "label": "12",
      "R": -12.841199999999999,
      "d": 1.09968,
      "sd": 4.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.09968
    },
    {
      "label": "13",
      "R": -34.222319999999996,
      "d": 4.983359999999999,
      "sd": 4.3,
      "medium": 7
    },
    {
      "label": "14",
      "R": 18.628439999999998,
      "d": 3.46086,
      "sd": 4.55,
      "medium": 8
    },
    {
      "label": "15",
      "R": 43.131119999999996,
      "d": 0.7464599999999999,
      "sd": 4.6000000000000005
    },
    {
      "label": "16",
      "R": -44.29866,
      "d": 1.0005,
      "sd": 4.65,
      "medium": 9
    },
    {
      "label": "17",
      "R": 43.073699999999995,
      "d": 4.384799999999999,
      "sd": 4.800000000000001,
      "medium": 10
    },
    {
      "label": "18",
      "R": -14.016744,
      "d": 0.09917999999999999,
      "sd": 5.3500000000000005
    },
    {
      "label": "19",
      "R": -82.6848,
      "d": 2.8623,
      "sd": 5.4,
      "medium": 11
    },
    {
      "label": "20",
      "R": -20.305799999999998,
      "d": 36.04236,
      "sd": 5.550000000000001
    }
  ],
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      8
    ],
    "maxFNumber": 8
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Literal stationary infinity only. No finite or floating-focus travel modeled."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 104,
    "maxTraceFieldDeg": 5
  },
  "doublets": [
    {
      "text": "E7/E8",
      "fromSurface": "13",
      "toSurface": "15"
    },
    {
      "text": "E9/E10",
      "fromSurface": "16",
      "toSurface": "18"
    }
  ],
  "rays": {
    "offAxisFieldFrac": 0.98
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
