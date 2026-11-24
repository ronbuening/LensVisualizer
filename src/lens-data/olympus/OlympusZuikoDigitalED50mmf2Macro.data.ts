import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "maker": null,
  "visible": false,
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Static infinity only; no finite or moving-focus state is modeled."
  },
  "groups": [],
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 16,
    "maxTraceFieldDeg": 8
  },
  "rays": {
    "offAxisFieldFrac": 0.98
  },
  "layout": {
    "yScFill": 0.5
  },
  "key": "olympus-takato-us20030103269-example1-stopped-f4-infinity-reference",
  "name": "OLYMPUS TAKATO US20030103269 EX1 STOPPED f/4",
  "subtitle": "Strong production-correlated Zuiko Digital ED50f2 lineage patent representative; not factory exact",
  "source": {
    "patentNumber": "US 20030103269 A1",
    "patentYear": 2003,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Hideyasu Takato"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "elementCount": 11,
    "groupCount": 10,
    "focalLengthMm": {
      "design": 51
    },
    "fNumber": {
      "design": 1.83
    },
    "specs": [
      "Only nativef4 +/-8deg d-line static infinity. Strong production-correlated ZuikoDigitalED50f2 lineage patent representative, not exactretail or uniqueExample1 familymatch; not filmOM50f2.",
      "Exactsource S11 iris z25.12,split3.13/3.08 and35.18mm finalimageair. Irisbore andrims estimated; no trim,override orfit.",
      "OEM50f2 closest240mm/0.52x differs from literalpatent51f1.83 closeendpoint; finite modes,wideopen,fullfield and broadband unqualified."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "Source element 1",
      "label": "L1",
      "type": "Lens",
      "nd": 1.64769,
      "vd": 33.79,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "Source element 2",
      "label": "L2",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "Source element 3",
      "label": "L3",
      "type": "Lens",
      "nd": 1.72916,
      "vd": 54.68,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "Source element 4",
      "label": "L4",
      "type": "Lens",
      "nd": 1.52249,
      "vd": 59.84,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "Source element 5",
      "label": "L5",
      "type": "Lens",
      "nd": 1.59551,
      "vd": 39.24,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "Source element 6",
      "label": "L6",
      "type": "Lens",
      "nd": 1.58144,
      "vd": 40.75,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "Source element 7",
      "label": "L7",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.54,
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "Source element 8",
      "label": "L8",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "Source element 9",
      "label": "L9",
      "type": "Lens",
      "nd": 1.51742,
      "vd": 52.43,
      "indexReference": "d"
    },
    {
      "id": 10,
      "name": "Source element 10",
      "label": "L10",
      "type": "Lens",
      "nd": 1.76182,
      "vd": 26.52,
      "indexReference": "d",
      "cemented": "C1"
    },
    {
      "id": 11,
      "name": "Source element 11",
      "label": "L11",
      "type": "Lens",
      "nd": 1.741,
      "vd": 52.64,
      "indexReference": "d",
      "cemented": "C1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -35.629,
      "d": 2,
      "sd": 10.3,
      "medium": 1
    },
    {
      "label": "2",
      "R": -74.905,
      "d": 0.94,
      "sd": 10.4
    },
    {
      "label": "3",
      "R": -702.42,
      "d": 4.03,
      "sd": 10.35,
      "medium": 2
    },
    {
      "label": "4",
      "R": -49.343,
      "d": 0.1,
      "sd": 10.3
    },
    {
      "label": "5",
      "R": 45.81,
      "d": 5.06,
      "sd": 9.9,
      "medium": 3
    },
    {
      "label": "6",
      "R": -809755.657,
      "d": 0.1,
      "sd": 9.05
    },
    {
      "label": "7",
      "R": 26.15,
      "d": 2.8,
      "sd": 8.55,
      "medium": 4
    },
    {
      "label": "8",
      "R": 32.77,
      "d": 5.55,
      "sd": 7.7
    },
    {
      "label": "9",
      "R": -311.668,
      "d": 1.41,
      "sd": 5.75,
      "medium": 5
    },
    {
      "label": "10",
      "R": 21.286,
      "d": 3.13,
      "sd": 5.25
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.08
    },
    {
      "label": "12",
      "R": -21.101,
      "d": 1.35,
      "sd": 5.05,
      "medium": 6
    },
    {
      "label": "13",
      "R": 93.106,
      "d": 1.3,
      "sd": 5.45
    },
    {
      "label": "14",
      "R": -323.07,
      "d": 4.5,
      "sd": 5.8,
      "medium": 7
    },
    {
      "label": "15",
      "R": -30.291,
      "d": 0.3,
      "sd": 6.7
    },
    {
      "label": "16",
      "R": 56.785,
      "d": 4.54,
      "sd": 7.05,
      "medium": 8
    },
    {
      "label": "17",
      "R": -56.785,
      "d": 0.5,
      "sd": 7.35
    },
    {
      "label": "18",
      "R": 5517.326,
      "d": 1.52,
      "sd": 7.35,
      "medium": 9
    },
    {
      "label": "19",
      "R": 38.046,
      "d": 1.93,
      "sd": 7.4
    },
    {
      "label": "20",
      "R": 91.845,
      "d": 1.55,
      "sd": 7.65,
      "medium": 10
    },
    {
      "label": "21",
      "R": 40.26,
      "d": 4.87,
      "sd": 7.7,
      "medium": 11
    },
    {
      "label": "22",
      "R": -60.775,
      "d": 35.18,
      "sd": 7.9
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
