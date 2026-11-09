import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** US 4,134,645 A Example 2, original PDF physical page 6, Figures 3/4.
 * All printed R/d/BFD values scaled by 1.35; glass coordinates retained. Original BFD 40.31 -> 54.41850000000001 mm.
 * The separate paraxial evaluation plane is 54.406877379 mm; it does NOT replace the printed BFD.
 * Iris location is an engineering inference 4 normalized mm after surface 6, not depicted in the patent.
 * Clear semi-diameters are engineering estimates guided by the source section, not published manufacturing apertures.
 * No source-backed focus travel; static infinity geometry only. Chromatic calculations use approximate Abbe dispersion.
 * Product correlation: PhotonsToPhotos OpticalBenchHub Example 02P; no factory certification.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-135mm-f35",
  "maker": "Pentax",
  "name": "PENTAX SMC M 135mm f/3.5",
  "subtitle": "US 4,134,645 A, Example 2; qualified product association, inferred apertures",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 135,
      "design": 134.97260230572772
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
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
      "label": "Example 2",
      "id": "2"
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
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 103.03434316636923,
      "glass": "Unmatched (patent n=1.51633, V=64.1)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.7847,
      "vd": 26.2,
      "focalLengthMm": -107.84149163572543,
      "glass": "Unmatched (patent n=1.78470, V=26.2)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51821,
      "vd": 65,
      "focalLengthMm": 89.67160248053281,
      "glass": "Unmatched (patent n=1.51821, V=65.0)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.72825,
      "vd": 28.5,
      "focalLengthMm": 109.0232141875333,
      "glass": "Unmatched (patent n=1.72825, V=28.5)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": -46.78065367072402,
      "glass": "Unmatched (patent n=1.64000, V=60.2)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 47.3985,
      "d": 5.6565,
      "sd": 21.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 417.0015,
      "d": 2.4435,
      "sd": 21.6
    },
    {
      "label": "3",
      "R": -176.7015,
      "d": 1.7955,
      "sd": 21.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 163.1205,
      "d": 0.108,
      "sd": 21.6
    },
    {
      "label": "5",
      "R": 28.2825,
      "d": 6.2235,
      "sd": 21.33,
      "medium": 3
    },
    {
      "label": "6",
      "R": 66.8385,
      "d": 5.4,
      "sd": 21.33
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 26.244
    },
    {
      "label": "7",
      "R": 36.0855,
      "d": 2.6055,
      "sd": 9.45,
      "medium": 4
    },
    {
      "label": "8",
      "R": 64.1385,
      "d": 3.348,
      "sd": 9.45
    },
    {
      "label": "9",
      "R": -20.871,
      "d": 1.215,
      "sd": 9.45,
      "medium": 5
    },
    {
      "label": "10",
      "R": -70.47,
      "d": 54.4185,
      "sd": 9.45
    }
  ],
  "focus": {
    "closeFocusM": 10,
    "description": "Static infinity-only prescription. No source-backed near-focus travel is available; closeFocusM is an inactive schema placeholder, not a product specification."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
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
    "fullFieldDeg": 18,
    "maxTraceFieldDeg": 9
  },
  "layout": {
    "yScFill": 0.36
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
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
