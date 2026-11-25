import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private production-correlated reconstruction; estimated stop/rims, derived infinity plane. */
const LENS_DATA = {
  "schema": 2,
  "checks": {
    "gapSagFrac": 0.917
  },
  "key": "canon-new-fd-28mm-f2",
  "maker": "Canon",
  "visible": false,
  "name": "CANON New FD 28mm f/2",
  "subtitle": "June1979 variant; US4188092A Example2, production-correlated patent reconstruction",
  "source": {
    "patentNumber": "US 4188092 A",
    "patentYear": 1980,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "authors": [
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
    "elementCount": 10,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 28,
      "design": 27.997150222058306
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "closeFocusM": {
      "marketing": 0.3
    },
    "specs": [
      "June1979 New FD; not earlier FD28/2 S.S.C.",
      "MIR mechanical section registered19 vertices with one uniform scale; print origin unattributed, not OEM-authenticated Rx.",
      "Signed Example2 radii/thicknesses scaled uniformly by28; no plate.",
      "Infinity plane derived from actual paraxial prescription; not a printed or measured factory image distance.",
      "Stop midpoint in source diaphragm gap and optical rims are estimates; field loss explicitly tested.",
      "No finite-focus or floating-focus schedule modeled. BrowserQA deferred to integration."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.54869,
      "vd": 45.6,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.59551,
      "vd": 39.2,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Lens",
      "nd": 1.54869,
      "vd": 45.6,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Lens",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Lens",
      "nd": 1.6968,
      "vd": 55.5,
      "indexReference": "d"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Element 10",
      "type": "Lens",
      "nd": 1.6968,
      "vd": 55.5,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 47.949999999999996,
      "d": 4.2252,
      "sd": 17,
      "medium": 1
    },
    {
      "label": "2",
      "R": 203.4452,
      "d": 0.196,
      "sd": 17
    },
    {
      "label": "3",
      "R": 41.7004,
      "d": 1.4728,
      "sd": 13,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.586,
      "d": 5.4236,
      "sd": 11.2
    },
    {
      "label": "5",
      "R": 23.114,
      "d": 2.3575999999999997,
      "sd": 13,
      "medium": 3
    },
    {
      "label": "6",
      "R": 44.9176,
      "d": 1.9067999999999998,
      "sd": 13
    },
    {
      "label": "7",
      "R": 117.66999999999999,
      "d": 0.9828,
      "sd": 9.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": 14.462,
      "d": 3.0351999999999997,
      "sd": 9.6
    },
    {
      "label": "9",
      "R": 53.6788,
      "d": 3.2424,
      "sd": 10.2,
      "medium": 5
    },
    {
      "label": "10",
      "R": -52.275999999999996,
      "d": 9.9064,
      "sd": 10.2,
      "medium": 6
    },
    {
      "label": "11",
      "R": "flat",
      "d": 1.0808,
      "sd": 10.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.0808
    },
    {
      "label": "12",
      "R": 75.5972,
      "d": 4.8132,
      "sd": 9.6,
      "medium": 7
    },
    {
      "label": "13",
      "R": -21.571199999999997,
      "d": 1.7248,
      "sd": 9.6
    },
    {
      "label": "14",
      "R": -26.1604,
      "d": 0.9828,
      "sd": 9.3,
      "medium": 8
    },
    {
      "label": "15",
      "R": 42.876400000000004,
      "d": 2.1448,
      "sd": 9
    },
    {
      "label": "16",
      "R": -44.8168,
      "d": 2.2596,
      "sd": 9,
      "medium": 9
    },
    {
      "label": "17",
      "R": -22.6856,
      "d": 0.1484,
      "sd": 9.5
    },
    {
      "label": "18",
      "R": 230.40359999999998,
      "d": 3.3404000000000003,
      "sd": 9.5,
      "medium": 10
    },
    {
      "label": "19",
      "R": -33.3704,
      "d": 36.063948796982636,
      "sd": 9.5
    }
  ],
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 8
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity only. Source qualitatively increases D6 while advancing the whole lens for near focus; no numeric finite prescription or focus cam inferred."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 75,
    "maxTraceFieldDeg": 37.5
  },
  "doublets": [
    {
      "text": "E5/E6",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "rays": {
    "offAxisFieldFrac": 0.08
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
