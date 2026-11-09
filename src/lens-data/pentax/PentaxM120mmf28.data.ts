import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Whole US 4,134,645 A Example 1 at uniform 1.2x retail-scale hypothesis.
 * Literal source plane z=106.776 mm and final gap 42.624 mm are not refocused.
 * Stop is inferred 5 mm after surface 6; its radius follows the shared F/N rule.
 * Clear radii 22/11.5 mm are figure-guided estimates, not manufacturing apertures.
 * Probable product association, not factory confirmation. Infinity-only geometry.
 * Native geometry and bounded rays/MTF evaluated; full integration gates pending.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-120mm-f28",
  "maker": "Pentax",
  "name": "PENTAX SMC PENTAX-M 120mm f/2.8",
  "subtitle": "US 4,134,645 A; probable product association, uniformly scaled prescription and inferred apertures",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 120,
      "design": 119.08145357952586
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "ALL SPHERICAL",
      "QUALIFIED PATENT RECONSTRUCTION"
    ]
  },
  "source": {
    "patentNumber": "US 4,134,645 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1979,
    "authors": [
      "Takahiro Sugiyama",
      "Toshifumi Kubota",
      "Rensuke Adachi"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.51821,
      "vd": 65,
      "focalLengthMm": 121.41112278125732,
      "glass": "Unmatched (patent n=1.51821, V=65.0)",
      "indexReferenceNote": "Source n/v and d/g aberration plots support an inferred d-line reference. Supplier, melt and partial dispersion are not specified."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "focalLengthMm": -109.01326128236924,
      "glass": "Unmatched (patent n=1.80518, V=25.4)",
      "indexReferenceNote": "Source n/v and d/g aberration plots support an inferred d-line reference. Supplier, melt and partial dispersion are not specified."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.55963,
      "vd": 61.2,
      "focalLengthMm": 84.52659386822948,
      "glass": "Unmatched (patent n=1.55963, V=61.2)",
      "indexReferenceNote": "Source n/v and d/g aberration plots support an inferred d-line reference. Supplier, melt and partial dispersion are not specified."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "focalLengthMm": 99.99213993087761,
      "glass": "Unmatched (patent n=1.80518, V=25.4)",
      "indexReferenceNote": "Source n/v and d/g aberration plots support an inferred d-line reference. Supplier, melt and partial dispersion are not specified."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": -49.05058562397137,
      "glass": "Unmatched (patent n=1.80610, V=40.9)",
      "indexReferenceNote": "Source n/v and d/g aberration plots support an inferred d-line reference. Supplier, melt and partial dispersion are not specified."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 46.776,
      "d": 5.832,
      "sd": 22,
      "medium": 1
    },
    {
      "label": "2",
      "R": 174.576,
      "d": 3.828,
      "sd": 22
    },
    {
      "label": "3",
      "R": -135.264,
      "d": 2.016,
      "sd": 22,
      "medium": 2
    },
    {
      "label": "4",
      "R": 251.676,
      "d": 0.096,
      "sd": 22
    },
    {
      "label": "5",
      "R": 37.128,
      "d": 6.972,
      "sd": 22,
      "medium": 3
    },
    {
      "label": "6",
      "R": 160.968,
      "d": 5,
      "sd": 22
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 29.608
    },
    {
      "label": "7",
      "R": 36.732,
      "d": 3.456,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": 64.716,
      "d": 5.832,
      "sd": 11.5
    },
    {
      "label": "9",
      "R": -24.648,
      "d": 1.512,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -67.236,
      "d": 42.624,
      "sd": 11.5
    }
  ],
  "focus": {
    "closeFocusM": 1.2,
    "description": "Infinity-only static model. Manufacturer minimum focus is 1.2 m; no source-backed focus travel is modeled."
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
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 20.4,
    "maxTraceFieldDeg": 10.2
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "REAR",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
