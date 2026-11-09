import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** US 4,134,645 A Example 3, original PDF physical page 6, Figures 5/6.
 * All printed R/d/BFD values scaled by 1.5; glass coordinates retained. Original BFD 40.4 -> 60.599999999999994 mm.
 * The separate paraxial evaluation plane is 60.568760171 mm; it does NOT replace the printed BFD.
 * Iris location is an engineering inference 4 normalized mm after surface 6, not depicted in the patent.
 * Clear semi-diameters are engineering estimates guided by the source section, not published manufacturing apertures.
 * No source-backed focus travel; static infinity geometry only. Chromatic calculations use approximate Abbe dispersion.
 * Product correlation: PhotonsToPhotos OpticalBenchHub Example 03P; no factory certification.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-150mm-f35",
  "maker": "Pentax",
  "name": "PENTAX SMC M 150mm f/3.5",
  "subtitle": "US 4,134,645 A, Example 3; qualified product association, inferred apertures",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 150,
      "design": 149.99770505847272
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
      "label": "Example 3",
      "id": "3"
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
      "nd": 1.51112,
      "vd": 60.5,
      "focalLengthMm": 107.39611314469732,
      "glass": "Unmatched (patent n=1.51112, V=60.5)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "focalLengthMm": -121.60935595282871,
      "glass": "Unmatched (patent n=1.80518, V=25.4)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 104.1136434465904,
      "glass": "Unmatched (patent n=1.51633, V=64.1)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.72825,
      "vd": 28.5,
      "focalLengthMm": 110.084189961681,
      "glass": "Unmatched (patent n=1.72825, V=28.5)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.6516,
      "vd": 58.6,
      "focalLengthMm": -48.14471377791689,
      "glass": "Unmatched (patent n=1.65160, V=58.6)",
      "indexReferenceNote": "Source gives n/v and d/g aberration plots. Treated approximately as d-line coordinates; no supplier, melt or partial dispersion identified."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 50.715,
      "d": 5.31,
      "sd": 22.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 642.825,
      "d": 2.115,
      "sd": 22.5
    },
    {
      "label": "3",
      "R": -218.79,
      "d": 1.995,
      "sd": 22.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 177.96,
      "d": 0.105,
      "sd": 22.5
    },
    {
      "label": "5",
      "R": 30.855,
      "d": 5.805,
      "sd": 21.9,
      "medium": 3
    },
    {
      "label": "6",
      "R": 67.785,
      "d": 6.0,
      "sd": 21.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 29.985
    },
    {
      "label": "7",
      "R": 41.115,
      "d": 1.815,
      "sd": 11.25,
      "medium": 4
    },
    {
      "label": "8",
      "R": 82.83,
      "d": 4.08,
      "sd": 11.25
    },
    {
      "label": "9",
      "R": -23.805,
      "d": 1.2,
      "sd": 11.25,
      "medium": 5
    },
    {
      "label": "10",
      "R": -100.665,
      "d": 60.6,
      "sd": 11.25
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
    "fullFieldDeg": 16.4,
    "maxTraceFieldDeg": 8.2
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
