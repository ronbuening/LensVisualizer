import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden representative E5; exact100x R/d, literaln/V. Conventionald inferred, anomalousdispersion unknown. Stop centralgap midpoint hypothesis, figurecaps, computedimagegap; no repair/override/rayfit. Infinityonly. */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-auto-t-100mm-f2-representative",
  "maker": "Olympus",
  "name": "Olympus Zuiko Auto-T 100mm f/2",
  "visible": false,
  "subtitle": "US4435049 Embodiment5 qualified representative; inferred stop, caps and spectral reference",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "specs": [
      "Literal100x normalized scale; computedEFL99.9945705",
      "Infinity-only; no copied floating-focus law",
      "Estimated dispersion; anomalous partial dispersion unavailable"
    ]
  },
  "source": {
    "patentNumber": "US 4,435,049 A",
    "patentYear": 1984,
    "example": {
      "label": "Embodiment 5",
      "id": "5"
    },
    "authors": [
      "Yoshiaki Horikawa",
      "Toshihiro Imai"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Patent spherical element",
      "nd": 1.617,
      "vd": 62.8,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Patent spherical element",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Patent spherical element",
      "nd": 1.6425,
      "vd": 58.4,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Patent spherical element",
      "nd": 1.7618,
      "vd": 26.5,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Patent spherical element",
      "nd": 1.5814,
      "vd": 40.8,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Patent spherical element",
      "nd": 1.72,
      "vd": 42,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Patent spherical element",
      "nd": 1.6968,
      "vd": 55.5,
      "indexReference": "d",
      "glass": "Source n/nu; conventional d-reference inferred, melt/partial dispersion unverified"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 64.36,
      "d": 7.4399999999999995,
      "sd": 25.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 348.72999999999996,
      "d": 0.11,
      "sd": 25.5
    },
    {
      "label": "3",
      "R": 47.08,
      "d": 6.01,
      "sd": 23.4,
      "medium": 2
    },
    {
      "label": "4",
      "R": 90.42,
      "d": 0.41000000000000003,
      "sd": 23.4
    },
    {
      "label": "5",
      "R": 38.47,
      "d": 11.709999999999999,
      "sd": 21.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 43.85,
      "d": 3.93,
      "sd": 21.4
    },
    {
      "label": "7",
      "R": 71.67999999999999,
      "d": 2.31,
      "sd": 17.0,
      "medium": 4
    },
    {
      "label": "8",
      "R": 23.26,
      "d": 10.35,
      "sd": 17.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 10.35
    },
    {
      "label": "9",
      "R": -35.92,
      "d": 4.55,
      "sd": 16.3,
      "medium": 5
    },
    {
      "label": "10",
      "R": 59.589999999999996,
      "d": 7.5,
      "sd": 16.3,
      "medium": 6
    },
    {
      "label": "11",
      "R": -53.800000000000004,
      "d": 0.6,
      "sd": 16.3
    },
    {
      "label": "12",
      "R": 180.88,
      "d": 5.82,
      "sd": 18.5,
      "medium": 7
    },
    {
      "label": "13",
      "R": -109.7,
      "d": 44.908977410780075,
      "sd": 18.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel. Retail.7m not a motion law."
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
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 24,
    "maxTraceFieldDeg": 12
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
