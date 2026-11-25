import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private production-correlated reconstruction; literal sodium-D source, estimated iris/caps. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-new-fd-28mm-f28",
  "maker": "Canon",
  "visible": false,
  "name": "CANON New FD 28mm f/2.8",
  "subtitle": "June1979; US4176914 Table1 / Japanese repeated Example1; production-correlated reconstruction",
  "source": {
    "patentNumber": "US 4176914 A",
    "patentYear": 1979,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Kazuo Fujibayashi"
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
    "elementCount": 7,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28.01447752650096
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "closeFocusM": {
      "marketing": 0.3
    },
    "specs": [
      "June1979 7/7 New FD28/2.8; not earlier Kawamura S.C.",
      "MIR cutaway one isotropic fit; unknown original print attribution.",
      "Literal signed Table1 at0.28mm/unit; sodiumD indices, no source retune.",
      "R4+54.902 in signed Table1 and claim facsimile; reject OCR34.902.",
      "Estimated iris z20.72mm and inner optical caps; no finite focus schedule.",
      "Printed BFD35.644mm retained; browserQA deferred."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element1",
      "type": "Lens",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element2",
      "type": "Lens",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "D"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element3",
      "type": "Lens",
      "nd": 1.69895,
      "vd": 30.1,
      "indexReference": "D"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element4",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "D"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element5",
      "type": "Lens",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "D"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element6",
      "type": "Lens",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "D"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element7",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 22.162280000000003,
      "d": 1.6212000000000002,
      "sd": 12.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 12.486040000000003,
      "d": 3.9788000000000006,
      "sd": 10.5
    },
    {
      "label": "3",
      "R": 23.82548,
      "d": 1.2768,
      "sd": 11.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 15.372560000000002,
      "d": 7.711200000000001,
      "sd": 11.5
    },
    {
      "label": "5",
      "R": 51.528400000000005,
      "d": 1.9852,
      "sd": 7.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": -2187.8360000000002,
      "d": 4.146800000000003,
      "sd": 7.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.4139999999999993
    },
    {
      "label": "7",
      "R": 33.821200000000005,
      "d": 3.458,
      "sd": 7.4,
      "medium": 4
    },
    {
      "label": "8",
      "R": -30.086000000000002,
      "d": 3.1724,
      "sd": 7.4
    },
    {
      "label": "9",
      "R": -24.1066,
      "d": 4.4212,
      "sd": 7.7,
      "medium": 5
    },
    {
      "label": "10",
      "R": 31.883600000000005,
      "d": 1.4252,
      "sd": 7.4
    },
    {
      "label": "11",
      "R": -36.733200000000004,
      "d": 2.0916,
      "sd": 6.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": -18.42792,
      "d": 0.196,
      "sd": 7.0
    },
    {
      "label": "13",
      "R": -134.2432,
      "d": 2.2792000000000003,
      "sd": 8,
      "medium": 7
    },
    {
      "label": "14",
      "R": -26.97828,
      "d": 35.644000000000005,
      "sd": 7.8
    }
  ],
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 5
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static source infinity only. No0.3m finite prescription or focus law inferred; distant native sentinel is not a finite performance claim."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 76,
    "maxTraceFieldDeg": 38
  },
  "rays": {
    "offAxisFieldFrac": 0.07894736842105263
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
