import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Whole US 4,293,197 A Example 1, uniformly scaled 3x as a retail-scale hypothesis.
 * Raw r10=r11 and d10=0 collapse to shared surface 10/11, with no invented air.
 * BFL 39.81295531541666 mm and image z=181.11295531541666 mm are derived,
 * not patent-printed or factory focus. Keep fixed during full-ray diagnostics.
 * Stop z=84 mm is a declared mechanical hypothesis near the intermediate group.
 * Caps by element: 39,37,34,31,12,12,16,16 mm; schematic/geometry estimates.
 * No named glass, measured dispersion, finite-focus law, rim cuts or overrides.
 * Source full field 9 degrees; maker field 8.3 degrees is separate evidence.
 * Native geometry and assumed-d monochromatic diagnostics qualified; see analysis.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-star-300mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC M* 300mm f/4",
  "subtitle": "US 4,293,197 A; representative patent reconstruction, 3× scale and inferred apertures",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 8,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "8 ELEMENTS / 7 GROUPS",
      "ALL SPHERICAL",
      "QUALIFIED PATENT RECONSTRUCTION"
    ]
  },
  "source": {
    "patentNumber": "US 4,293,197 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1981,
    "authors": [
      "Koichi Kobayashi",
      "Sadao Okudaira"
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
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.3,
      "focalLengthMm": 160.0851391151891,
      "glass": "Unmatched (patent n=1.49700, V=81.3)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.3,
      "focalLengthMm": 196.60245436729716,
      "glass": "Unmatched (patent n=1.49700, V=81.3)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": -92.90055257987268,
      "glass": "Unmatched (patent n=1.80610, V=40.9)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.3,
      "focalLengthMm": 116.8214298453459,
      "glass": "Unmatched (patent n=1.49700, V=81.3)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.79952,
      "vd": 42.2,
      "focalLengthMm": -17.292314045269563,
      "glass": "Unmatched (patent n=1.79952, V=42.2)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.3,
      "focalLengthMm": 29.58629798681934,
      "glass": "Unmatched (patent n=1.59270, V=35.3)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "focalLengthMm": -57.468858584925,
      "glass": "Unmatched (patent n=1.88300, V=40.8)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.69895,
      "vd": 30.1,
      "focalLengthMm": 57.03047809701486,
      "glass": "Unmatched (patent n=1.69895, V=30.1)",
      "indexReferenceNote": "Patent N/nu has no explicit spectral reference. The engine d-line reference is an assumption; Abbe-only dispersion is a proxy, not recovered line indices or a named melt."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 85.35,
      "d": 11.37,
      "sd": 39,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1121.4,
      "d": 0.09,
      "sd": 39
    },
    {
      "label": "3",
      "R": 81.93,
      "d": 9.24,
      "sd": 37,
      "medium": 2
    },
    {
      "label": "4",
      "R": 488.28,
      "d": 5.64,
      "sd": 37
    },
    {
      "label": "5",
      "R": -1005.51,
      "d": 4.92,
      "sd": 34,
      "medium": 3
    },
    {
      "label": "6",
      "R": 81.09,
      "d": 0.09,
      "sd": 34
    },
    {
      "label": "7",
      "R": 42.21,
      "d": 11.37,
      "sd": 31,
      "medium": 4
    },
    {
      "label": "8",
      "R": 140.79,
      "d": 41.28,
      "sd": 31
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.6
    },
    {
      "label": "9",
      "R": -41.91,
      "d": 3.33,
      "sd": 12,
      "medium": 5
    },
    {
      "label": "10/11",
      "R": 21.36,
      "d": 5.43,
      "sd": 12,
      "medium": 6
    },
    {
      "label": "12",
      "R": -88.68,
      "d": 35.13,
      "sd": 12
    },
    {
      "label": "13",
      "R": -46.26,
      "d": 2.28,
      "sd": 16,
      "medium": 7
    },
    {
      "label": "14",
      "R": -535.5,
      "d": 1.92,
      "sd": 16
    },
    {
      "label": "15",
      "R": 179.52,
      "d": 5.61,
      "sd": 16,
      "medium": 8
    },
    {
      "label": "16",
      "R": -50.58,
      "d": 39.81295531541666,
      "sd": 16
    }
  ],
  "focus": {
    "closeFocusM": 4,
    "description": "Infinity-only static interpretation. Manufacturer minimum focus is 4 m; no source-backed finite-focus travel is modeled."
  },
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
    "fullFieldDeg": 9,
    "maxTraceFieldDeg": 4.5
  },
  "layout": {
    "yScFill": 0.36
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "INTERMEDIATE",
      "fromSurface": "9",
      "toSurface": "12"
    },
    {
      "text": "REAR",
      "fromSurface": "13",
      "toSurface": "16"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
