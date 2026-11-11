import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden representative E1, not factory exact. All literal R/d/nd/V/aspheres and two plates retained. Source .53 imagegap; figure-only caps, engine-derived iris. Source61.6deg distinct retail49.5; no repair or override. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-01-standard-prime-85mm-f19-representative",
  "maker": "Pentax",
  "name": "PENTAX 01 Standard Prime 8.5mm f/1.9",
  "visible": false,
  "subtitle": "US20120268834A1 Numerical Embodiment1 qualified representative with original camera plates",
  "catalog": {
    "imageFormat": "1-2.3-inch-type",
    "elementCount": 8,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 8.5,
      "design": 8.5
    },
    "fNumber": {
      "marketing": 1.9,
      "design": 1.9
    },
    "specs": [
      "Two additional physical camera plates retained",
      "Original Q retail49.5deg; patent61.6deg distinct",
      "Infinity-only; inferred figure rims"
    ]
  },
  "source": {
    "patentNumber": "US 2012/0268834 A1",
    "patentYear": 2012,
    "example": {
      "label": "Numerical Embodiment 1",
      "id": "1"
    },
    "authors": [
      "Yoichi Nomura"
    ],
    "assignees": [
      "Pentax Ricoh Imaging Company, Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "label": "Element 1",
      "name": "L1",
      "type": "Patent optical element",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 2,
      "label": "Element 2",
      "name": "L2",
      "type": "Patent optical element",
      "nd": 1.59551,
      "vd": 39.2,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 3,
      "label": "Element 3",
      "name": "L3",
      "type": "Patent optical element",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 4,
      "label": "Element 4",
      "name": "L4",
      "type": "Patent optical element",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 5,
      "label": "Element 5",
      "name": "L5",
      "type": "Patent optical element",
      "nd": 1.58144,
      "vd": 40.9,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 6,
      "label": "Element 6",
      "name": "L6",
      "type": "Patent optical element",
      "nd": 1.76182,
      "vd": 26.6,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 7,
      "label": "Element 7",
      "name": "L7",
      "type": "Patent optical element",
      "nd": 1.75501,
      "vd": 51.2,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 8,
      "label": "Element 8",
      "name": "L8",
      "type": "Patent optical element",
      "nd": 1.8061,
      "vd": 40.7,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 9,
      "label": "Camera plate 1",
      "name": "Plate1",
      "type": "Camera plate",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    },
    {
      "id": 10,
      "label": "Camera plate 2",
      "name": "Plate2",
      "type": "Camera plate",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "Literal patent nd/vd; no identified melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 1072.616,
      "d": 0.8,
      "sd": 5.01,
      "medium": 1
    },
    {
      "label": "2",
      "R": 5.896,
      "d": 2.461,
      "sd": 4.03
    },
    {
      "label": "3",
      "R": -19.039,
      "d": 0.8,
      "sd": 4.03,
      "medium": 2
    },
    {
      "label": "4",
      "R": 7.534,
      "d": 3.646,
      "sd": 4.03,
      "medium": 3
    },
    {
      "label": "5",
      "R": -20.795,
      "d": 0.1,
      "sd": 4.03
    },
    {
      "label": "6",
      "R": 9.939,
      "d": 2.278,
      "sd": 3.41,
      "medium": 4
    },
    {
      "label": "7",
      "R": -19.654,
      "d": 0.8,
      "sd": 3.41,
      "medium": 5
    },
    {
      "label": "8",
      "R": 16.145,
      "d": 2.572,
      "sd": 3.41
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.205
    },
    {
      "label": "10",
      "R": -6.986,
      "d": 1.0,
      "sd": 3.32,
      "medium": 6
    },
    {
      "label": "11",
      "R": 7.766,
      "d": 2.792,
      "sd": 3.32,
      "medium": 7
    },
    {
      "label": "12",
      "R": -11.214,
      "d": 1.232,
      "sd": 3.32,
      "asphere": {
        "K": 0,
        "A4": 5.422e-05,
        "A6": 9.393e-06,
        "A8": 1.579e-08
      }
    },
    {
      "label": "13",
      "R": 14.507,
      "d": 2.818,
      "sd": 4.93,
      "medium": 8,
      "asphere": {
        "K": 0,
        "A4": -0.0002804,
        "A6": 1.077e-06,
        "A8": 5.386e-08
      }
    },
    {
      "label": "14",
      "R": -21.008,
      "d": 4.194,
      "sd": 4.93,
      "asphere": {
        "K": 0,
        "A4": -0.0001145,
        "A6": -3.647e-06,
        "A8": 1.262e-07
      }
    },
    {
      "label": "15",
      "R": "flat",
      "d": 0.55,
      "sd": 4.87,
      "medium": 9
    },
    {
      "label": "16",
      "R": "flat",
      "d": 2.02,
      "sd": 4.87
    },
    {
      "label": "17",
      "R": "flat",
      "d": 0.5,
      "sd": 4.84,
      "medium": 10
    },
    {
      "label": "18",
      "R": "flat",
      "d": 0.53,
      "sd": 4.84
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity-only static sentinel; no finite-focus law"
  },
  "aperture": {
    "nominalFNumber": 1.9,
    "fStops": [
      1.9,
      2.8,
      4,
      5.6,
      8
    ],
    "maxFNumber": 8
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 49.5,
    "maxTraceFieldDeg": 24.75
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
