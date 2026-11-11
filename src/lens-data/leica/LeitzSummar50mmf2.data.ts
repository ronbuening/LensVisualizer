import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** HIDDEN UNVALIDATED. GB423468A amended1936 reprint, AT141288B counterpart.
 * Native100mm/F2 scaled0.5;10R/9physicalgaps/nD-v literal. Native sodium D.
 * Fixed source image68.3*.5=34.15, NOT computed/refocused. Historical residual retained.
 * Iris midpoint inferred from maker symmetric section; caps source-figure estimates.
 * Glass rims not measured clear apertures. No ray fitting or overrides.
 * Static infinity-only sentinel, not factoryexact. */
const LENS_DATA = {
  "schema": 2,
  "key": "leitz-summar-50mm-f2",
  "maker": "Leitz",
  "name": "Leitz Summar 50mm f/2",
  "visible": false,
  "subtitle": "GB423468A amended specification; qualified scaled representative, native sodium D",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "specs": [
      "Representative source100mm scaled0.5, not factory exact",
      "Source52deg vs maker48deg field",
      "Infinity only; source image plane retained"
    ]
  },
  "source": {
    "patentNumber": "GB 423,468 A",
    "patentYear": 1935,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [],
    "assignees": [
      "Ernst Leitz GmbH"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Patent spherical element",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "glass": "Unmatched source sodium D nD=1.6202, vD=60.4",
      "role": "Literal source glass; native sodium D, not helium d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Patent spherical element",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "glass": "Unmatched source sodium D nD=1.6202, vD=60.4",
      "role": "Literal source glass; native sodium D, not helium d"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Patent spherical element",
      "nd": 1.5814,
      "vd": 40.8,
      "indexReference": "D",
      "glass": "Unmatched source sodium D nD=1.5814, vD=40.8",
      "role": "Literal source glass; native sodium D, not helium d"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Patent spherical element",
      "nd": 1.5673,
      "vd": 42.8,
      "indexReference": "D",
      "glass": "Unmatched source sodium D nD=1.5673, vD=42.8",
      "role": "Literal source glass; native sodium D, not helium d"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Patent spherical element",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "glass": "Unmatched source sodium D nD=1.6202, vD=60.4",
      "role": "Literal source glass; native sodium D, not helium d"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Patent spherical element",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "glass": "Unmatched source sodium D nD=1.6202, vD=60.4",
      "role": "Literal source glass; native sodium D, not helium d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 39.32,
      "d": 3.52,
      "sd": 13.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 219.1,
      "d": 0.165,
      "sd": 13.0
    },
    {
      "label": "3",
      "R": 16.76,
      "d": 5.38,
      "sd": 11.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 75.3,
      "d": 1.655,
      "sd": 11.6,
      "medium": 3
    },
    {
      "label": "5",
      "R": 11.88,
      "d": 3.93,
      "sd": 8.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.93
    },
    {
      "label": "6",
      "R": -16.555,
      "d": 1.655,
      "sd": 8.6,
      "medium": 4
    },
    {
      "label": "7",
      "R": 36.005,
      "d": 5.38,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": -23.59,
      "d": 0.165,
      "sd": 11.5
    },
    {
      "label": "9",
      "R": "flat",
      "d": 4.345,
      "sd": 12.4,
      "medium": 6
    },
    {
      "label": "10",
      "R": -36.525,
      "d": 34.15,
      "sd": 12.4
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel; not source MFD."
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
    "fullFieldDeg": 48,
    "maxTraceFieldDeg": 24
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
