import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden qualified E1 hypothesis; source optics and inherited engineered caps unchanged. Not factory exact. */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-40mm-f2-e1-hypothesis",
  "maker": "Olympus",
  "name": "OLYMPUS ZUIKO 40mm f/2 (E1 hypothesis)",
  "subtitle": "US 4,396,255 A EMBODIMENT 1 \u2014 REPRESENTATIVE SOURCE DESIGN",
  "visible": false,
  "layout": {
    "yScFill": 0.35
  },
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 6 GROUPS",
      "STATIC INFINITY REPRESENTATIVE",
      "Assumed helium-d spectral reference; not sodium D",
      "Inherited engineered apertures, not measured factory rims",
      "Source and maker full field56deg; bounded clipping retained"
    ],
    "elementCount": 6,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 40,
      "design": 40.00067387129505
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "closeFocusM": {
      "marketing": 0.3
    },
    "lensMounts": [
      "olympus-om"
    ]
  },
  "source": {
    "patentNumber": "US 4,396,255 A",
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "patentYear": 1983,
    "authors": [
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
      "type": "Positive Meniscus",
      "nd": 1.72,
      "vd": 50.25,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "Unmatched (literal source n/v; no named catalog glass)",
      "focalLengthMm": 74.9443503139604
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.60729,
      "vd": 49.29,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "Unmatched (literal source n/v; no named catalog glass)",
      "focalLengthMm": -53.31075145322826
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6825,
      "vd": 44.65,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "Unmatched (literal source n/v; no named catalog glass)",
      "focalLengthMm": 83.25382431728805
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.76182,
      "vd": 26.55,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "Unmatched (literal source n/v; no named catalog glass)",
      "focalLengthMm": -19.817297049460652
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.726,
      "vd": 53.56,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "Unmatched (literal source n/v; no named catalog glass)",
      "focalLengthMm": 27.83198457974555
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.757,
      "vd": 47.87,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "Unmatched (literal source n/v; no named catalog glass)",
      "focalLengthMm": 37.703909506822335
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 42.88,
      "d": 2.8000000000000003,
      "sd": 12,
      "medium": 1
    },
    {
      "label": "2",
      "R": 203.12,
      "d": 0.08,
      "sd": 12
    },
    {
      "label": "3",
      "R": 18.560000000000002,
      "d": 1.32,
      "sd": 10,
      "medium": 2
    },
    {
      "label": "4",
      "R": 11.479999999999999,
      "d": 1.7199999999999998,
      "sd": 10
    },
    {
      "label": "5",
      "R": 12.24,
      "d": 3.5599999999999996,
      "sd": 9.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 13.759999999999998,
      "d": 4.699999999999999,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.699999999999999
    },
    {
      "label": "7",
      "R": -13.08,
      "d": 0.96,
      "sd": 8.1,
      "medium": 4
    },
    {
      "label": "8",
      "R": -101,
      "d": 0.32,
      "sd": 8.1
    },
    {
      "label": "9",
      "R": -57.839999999999996,
      "d": 4.640000000000001,
      "sd": 9.4,
      "medium": 5
    },
    {
      "label": "10",
      "R": -15.48,
      "d": 0.08,
      "sd": 9.4
    },
    {
      "label": "11",
      "R": 199.04,
      "d": 3.88,
      "sd": 12,
      "medium": 6
    },
    {
      "label": "12",
      "R": -33.04,
      "d": 36.72,
      "sd": 12
    }
  ],
  "focus": {
    "closeFocusM": 1000000000,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only source. Required 1e9 m schema sentinel is NOT a validated close endpoint. Generic slider/fallback labels can appear but do not represent recovered optical conjugates. No finite movement law."
  },
  "gaps": {},
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
    "fullFieldDeg": 56,
    "maxTraceFieldDeg": 28
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
