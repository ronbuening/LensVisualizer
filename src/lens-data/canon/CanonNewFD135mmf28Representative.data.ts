import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Whole Table1 x1.35, helium d-line (catalog line test), fixed sourceplane119.1645. Figure-inferred caps/iris frozen before traces; no factoryclaim or overrides. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-new-fd-135mm-f28-representative",
  "maker": "Canon",
  "name": "Canon New FD 135mm f/2.8 (patent-family representative)",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "Literal d-line index and Abbe pair; no melt identity",
      "label": "Element 1",
      "type": "Patent spherical glass"
    },
    {
      "id": 2,
      "name": "L2",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "Literal d-line index and Abbe pair; no melt identity",
      "label": "Element 2",
      "type": "Patent spherical glass"
    },
    {
      "id": 3,
      "name": "L3",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "Literal d-line index and Abbe pair; no melt identity",
      "label": "Element 3",
      "type": "Patent spherical glass"
    },
    {
      "id": 4,
      "name": "L4",
      "nd": 1.74,
      "vd": 28.3,
      "indexReference": "d",
      "glass": "Literal d-line index and Abbe pair; no melt identity",
      "label": "Element 4",
      "type": "Patent spherical glass"
    },
    {
      "id": 5,
      "name": "L5",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "Literal d-line index and Abbe pair; no melt identity",
      "label": "Element 5",
      "type": "Patent spherical glass"
    },
    {
      "id": 6,
      "name": "L6",
      "nd": 1.72342,
      "vd": 38.0,
      "indexReference": "d",
      "glass": "Literal d-line index and Abbe pair; no melt identity",
      "label": "Element 6",
      "type": "Patent spherical glass"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 44.6094,
      "d": 9.99945,
      "sd": 24.57,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1055.09115,
      "d": 0.1998,
      "sd": 24.57
    },
    {
      "label": "3",
      "R": 48.23955,
      "d": 4.9005,
      "sd": 21.87,
      "medium": 2
    },
    {
      "label": "4",
      "R": 103.1508,
      "d": 4.8303,
      "sd": 21.87
    },
    {
      "label": "5",
      "R": -317.9439,
      "d": 5.0085,
      "sd": 19.305,
      "medium": 3
    },
    {
      "label": "6",
      "R": -66.0339,
      "d": 1.69965,
      "sd": 19.305,
      "medium": 4
    },
    {
      "label": "7",
      "R": 42.2064,
      "d": 14.745456,
      "sd": 16.74
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 31.334094
    },
    {
      "label": "8",
      "R": -23.59125,
      "d": 1.69965,
      "sd": 13.635,
      "medium": 5
    },
    {
      "label": "9",
      "R": -58.2471,
      "d": 0.1998,
      "sd": 13.635
    },
    {
      "label": "10",
      "R": 696.43665,
      "d": 4.00005,
      "sd": 14.715,
      "medium": 6
    },
    {
      "label": "11",
      "R": -53.6571,
      "d": 40.54725,
      "sd": 14.715
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity-only sentinel; no published finite travel law."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18.2,
    "maxTraceFieldDeg": 9.1
  },
  "layout": {
    "yScFill": 0.7
  },
  "subtitle": "US4206976 Table1 x1.35; d-line, fixed printed plane; probable family not factory exact",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "canon-fd"
    ],
    "closeFocusM": {
      "marketing": 1.3
    },
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 135,
      "design": 135.00806953544293
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "First primary embodiment representative; not factory prescription",
      "Helium d-line; fixed printed source plane119.1645mm",
      "Inferred figure rims and secondary-section iris; infinity only"
    ]
  },
  "source": {
    "patentNumber": "US 4,206,976 A",
    "patentYear": 1980,
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "authors": [
      "Nozomu Kitagishi"
    ],
    "assignees": [
      "Canon Inc."
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
