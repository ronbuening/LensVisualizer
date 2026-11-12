import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Whole CN207216120U Instance 2, literal d-line optics; image plane at paraxial infinity focus. Secondary product association only. Source-figure apertures and opaque S3/S7 rim extensions are inferred; rear plate aperture unspecified/nonclipping. The printed plate-to-image gap (1mm) left +0.821424mm of paraxial defocus; the gap is set to 1.8214mm at integration. Infinity only; not exact factory performance. */
const LENS_DATA = {
  "schema": 2,
  "key": "yongnuo-yn-40mm-f28n",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 40mm f/2.8N",
  "visible": true,
  "subtitle": "CN207216120U Instance 2; secondary product association, image plane at paraxial focus",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "nikon-f"
    ],
    "closeFocusM": {
      "marketing": 0.3
    },
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 40,
      "design": 40
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "Whole Instance2; probable family, not factory exact",
      "Image plane at paraxial infinity focus (printed gap leaves 0.82mm defocus)",
      "Source-figure caps, modeled opaque rim lands; infinity only"
    ]
  },
  "source": {
    "patentNumber": "CN 207216120 U",
    "patentYear": 2018,
    "example": {
      "label": "Instance 2",
      "id": "2"
    },
    "authors": [
      "Yongxiao Zhuang"
    ],
    "assignees": [
      "Shenzhen Yongnuo Photographic Equipment Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Literal patent spherical glass",
      "nd": 1.80099,
      "vd": 34.97,
      "indexReference": "d",
      "glass": "Literal d-line nd/vd; exact melt and partial dispersion unknown"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Literal patent spherical glass",
      "nd": 1.603423,
      "vd": 38.01,
      "indexReference": "d",
      "glass": "Literal d-line nd/vd; exact melt and partial dispersion unknown"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Literal patent spherical glass",
      "nd": 1.883004,
      "vd": 40.81,
      "indexReference": "d",
      "glass": "Literal d-line nd/vd; exact melt and partial dispersion unknown"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Literal patent spherical glass",
      "nd": 1.755,
      "vd": 27.53,
      "indexReference": "d",
      "glass": "Literal d-line nd/vd; exact melt and partial dispersion unknown"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Literal patent spherical glass",
      "nd": 1.835,
      "vd": 42.74,
      "indexReference": "d",
      "glass": "Literal d-line nd/vd; exact melt and partial dispersion unknown"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Literal patent glass; double asphere",
      "nd": 1.829,
      "vd": 37.1,
      "indexReference": "d",
      "glass": "Literal d-line nd/vd; exact melt and partial dispersion unknown"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.32024,
      "d": 2.68,
      "sd": 9.19,
      "medium": 1
    },
    {
      "label": "2",
      "R": -66.20471,
      "d": 1.1,
      "sd": 8.83,
      "medium": 2
    },
    {
      "label": "3",
      "R": 15.628,
      "d": 0.42,
      "sd": 7.45,
      "rimExtensionSd": 8.83
    },
    {
      "label": "4",
      "R": 16.72176,
      "d": 2.02,
      "sd": 7.45,
      "medium": 3
    },
    {
      "label": "5",
      "R": 31.69635,
      "d": 4.17,
      "sd": 7.45
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.72
    },
    {
      "label": "7",
      "R": -13.20496,
      "d": 1.1,
      "sd": 6.6,
      "medium": 4,
      "rimExtensionSd": 7.87
    },
    {
      "label": "8",
      "R": 39.127,
      "d": 3.33,
      "sd": 7.87,
      "medium": 5
    },
    {
      "label": "9",
      "R": -24.847,
      "d": 0.12,
      "sd": 8.27
    },
    {
      "label": "10",
      "R": -63.22119,
      "d": 3.35,
      "sd": 8.86,
      "medium": 6,
      "asphere": {
        "K": -21.3807,
        "A4": -2.231688e-05,
        "A6": 1.1154082e-07,
        "A8": -1.6802243e-09,
        "A10": 1.1278013e-11
      }
    },
    {
      "label": "11",
      "R": -18.81276,
      "d": 35.75,
      "sd": 8.86,
      "asphere": {
        "K": 0.70151,
        "A4": 1.530636e-05,
        "A6": 1.8595495e-07,
        "A8": -1.8656923e-09,
        "A10": 1.3794272e-11
      }
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel. No retail near-focus law reconstructed."
  },
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
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 60,
    "maxTraceFieldDeg": 30
  },
  "rearPlates": [
    {
      "label": "90",
      "thicknessMm": 2,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "gapAfterMm": 1.8214,
      "source": "CN207216120U Instance2 Table1 surfaces12/13. Plate-to-image gap 1.8214mm is the paraxial infinity focus; the printed d13 = 1 leaves 0.821mm of defocus (no single-row misprint explains it). No published clear plate diameter; schema nonclipping default, not factory aperture claim."
    }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
