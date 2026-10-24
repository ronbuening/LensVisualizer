import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,009,943, Example 2 / Table 2 / Figure 3; Mitsuaki Horimoto / Minolta.
 * Probable architecture of the MD Fisheye Rokkor-X 7.5mm f/4 pictured in March 1981.
 * Native f = 1 prescription uniformly scaled by 7.5; no surface fitting. Filter retained.
 * Printed BFL 4.82 scales to 36.15 mm; calculated Gaussian BFD 36.135499 mm is used
 * for infinity (0.014501 mm difference within printed rounding).
 * Stop midpoint of source d11 inferred from Figure 3, not an exact tabulated coordinate;
 * stop radius derived from the design f/4 aperture at the 7.5 mm projection focal scale.
 * Clear rims estimated from Figure 3 (18.6 px/mm on the 300 dpi sheet), floor-checked by
 * real-ray trace to the 90-degree field; r4, r7 and r12 end where Figure 3 draws rim bevels.
 * Designations follow the patent, whose symbol L names a component (single element or doublet):
 * cemented L3, L6, L7, L8 split into a/b elements, L5 is the built-in filter, and the brackets show
 * the first lens group (L1-L4) and second lens group (L6-L8) either side of the filter and stop.
 * Nearly hemispherical R2 rear rim 13.55 mm requires
 * an 83-degree rim-slope allowance; other geometry and the default 0.90 gap-sag limit
 * are unchanged, with no hidden trim.
 * Fixed focus: the production lens has no focusing ring and is set near 4 ft (1.2192 m).
 * The patent prints only the infinity state, which is shown here. The approximately
 * 0.05 mm back-focus difference to the production setting is not modeled.
 * No finite conjugate is source-published. The required close-focus distance of
 * 1,000,000 m is a non-operative fixed-focus placeholder.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "minolta-md-fisheye-rokkor-x-75mm-f4",
  "maker": "Minolta",
  "name": "MINOLTA MD FISHEYE ROKKOR-X 7.5mm f/4",
  "subtitle": "US 4,009,943, Example 2 — probable March 1981 production correlation",
  "catalog": {
    "lensMounts": [
      "minolta-sr"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 12,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 7.5,
      "design": 7.5
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "12 ELEMENTS / 8 GROUPS",
      "DESIGN f = 7.50 mm",
      "DESIGN F/4.00",
      "ALL SPHERICAL",
      "EQUIDISTANT PROJECTION / 180 DEG CIRCULAR"
    ]
  },
  "source": {
    "patentNumber": "US 4,009,943",
    "example": { "label": "Example 2", "id": "2" },
    "patentYear": 1977,
    "authors": [
      "Mitsuaki Horimoto"
    ],
    "assignees": [
      "Minolta Camera Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.6204,
      "vd": 60.3,
      "glass": "BACD16 (Hoya equivalent)",
      "focalLengthMm": -29.74914
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.713,
      "vd": 53.9,
      "glass": "LAC8 (Hoya equivalent)",
      "focalLengthMm": -20.942861
    },
    {
      "id": 3,
      "name": "L3a",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.5934,
      "vd": 34.8,
      "glass": "Unmatched (source nd=1.5934, vd=34.8)",
      "focalLengthMm": 17.672355,
      "cemented": "L3"
    },
    {
      "id": 4,
      "name": "L3b",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.713,
      "vd": 54,
      "glass": "LAC8 (Hoya equivalent)",
      "focalLengthMm": -8.030969,
      "cemented": "L3"
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.5934,
      "vd": 34.8,
      "glass": "Unmatched (source nd=1.5934, vd=34.8)",
      "focalLengthMm": 15.084212
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Element 6 (Built-in Filter)",
      "type": "Plane-Parallel Plate",
      "nd": 1.5186,
      "vd": 60.1,
      "glass": "Unmatched (source nd=1.5186, vd=60.1)"
    },
    {
      "id": 7,
      "name": "L6a",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.805,
      "vd": 41,
      "glass": "Unmatched (source nd=1.805, vd=41.0)",
      "focalLengthMm": -15.601977,
      "cemented": "L6"
    },
    {
      "id": 8,
      "name": "L6b",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.5317,
      "vd": 48.9,
      "glass": "PBL6Y (Ohara equivalent)",
      "focalLengthMm": 15.957396,
      "cemented": "L6"
    },
    {
      "id": 9,
      "name": "L7a",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.4645,
      "vd": 65.9,
      "glass": "FSL3 (Ohara equivalent)",
      "focalLengthMm": 23.06267,
      "cemented": "L7"
    },
    {
      "id": 10,
      "name": "L7b",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.7847,
      "vd": 25.7,
      "glass": "FD110 (Hoya equivalent)",
      "focalLengthMm": -28.490274,
      "cemented": "L7"
    },
    {
      "id": 11,
      "name": "L8a",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.717,
      "vd": 47.9,
      "glass": "LAF3 (Hoya equivalent)",
      "focalLengthMm": -34.290607,
      "cemented": "L8"
    },
    {
      "id": 12,
      "name": "L8b",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.4707,
      "vd": 67.4,
      "glass": "Unmatched (source nd=1.4707, vd=67.4)",
      "focalLengthMm": 21.279025,
      "cemented": "L8"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 56.088750000000005,
      "sd": 28,
      "d": 2.253,
      "medium": 1
    },
    {
      "label": "2",
      "R": 13.67325,
      "sd": 13.55,
      "d": 13.5
    },
    {
      "label": "3",
      "R": 51.44025,
      "sd": 12,
      "d": 1.9500000000000002,
      "medium": 2
    },
    {
      "label": "4",
      "R": 11.39025,
      "sd": 8.3,
      "d": 7.5
    },
    {
      "label": "5",
      "R": -554.6099999999999,
      "sd": 8,
      "d": 7.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": -10.344,
      "sd": 8,
      "d": 2.25,
      "medium": 4
    },
    {
      "label": "7",
      "R": 13.9875,
      "sd": 5,
      "d": 1.41375
    },
    {
      "label": "8",
      "R": 18.12,
      "sd": 5.5,
      "d": 3.56775,
      "medium": 5
    },
    {
      "label": "9",
      "R": -16.392,
      "sd": 5.5,
      "d": 1.5
    },
    {
      "label": "10",
      "R": "flat",
      "sd": 4,
      "d": 1.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": "flat",
      "sd": 4,
      "d": 2.082375
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.082375
    },
    {
      "label": "12",
      "R": -49.248749999999994,
      "sd": 5.5,
      "d": 1.2,
      "medium": 7
    },
    {
      "label": "13",
      "R": 17.04225,
      "sd": 6.5,
      "d": 6.07725,
      "medium": 8
    },
    {
      "label": "14",
      "R": -14.805,
      "sd": 6.5,
      "d": 0.15
    },
    {
      "label": "15",
      "R": -650.6624999999999,
      "sd": 7.5,
      "d": 4.5075,
      "medium": 9
    },
    {
      "label": "16",
      "R": -10.56225,
      "sd": 7.5,
      "d": 1.5,
      "medium": 10
    },
    {
      "label": "17",
      "R": -21.2715,
      "sd": 7.5,
      "d": 3.75
    },
    {
      "label": "18",
      "R": 161.54999999999998,
      "sd": 10,
      "d": 1.125,
      "medium": 11
    },
    {
      "label": "19",
      "R": 21.27675,
      "sd": 10,
      "d": 8.549999999999999,
      "medium": 12
    },
    {
      "label": "20",
      "R": -16.491,
      "sd": 10,
      "d": 36.13549900068518
    }
  ],
  "focus": {
    "closeFocusM": 1000000,
    "description": "Fixed focus. The production lens has no focusing ring and is set near 4 ft (1.2192 m). The patent prints only the infinity state, which is shown here; the approximately 0.05 mm back-focus difference to the production setting is not modeled."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "kind": "fisheye-equidistant",
    "focalLengthMm": 7.5,
    "fullFieldDeg": 180,
    "imageCircleMm": 23,
    "maxTraceFieldDeg": 90
  },
  "layout": {
    "yScFill": 0.36
  },
  "groups": [
    {
      "text": "FIRST GROUP L1-L4",
      "fromSurface": "1",
      "toSurface": "9"
    },
    {
      "text": "L5 FILTER",
      "fromSurface": "10",
      "toSurface": "11"
    },
    {
      "text": "SECOND GROUP L6-L8",
      "fromSurface": "12",
      "toSurface": "20"
    }
  ],
  "doublets": [
    {
      "text": "L3",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "L6",
      "fromSurface": "12",
      "toSurface": "14"
    },
    {
      "text": "L7",
      "fromSurface": "15",
      "toSurface": "17"
    },
    {
      "text": "L8",
      "fromSurface": "18",
      "toSurface": "20"
    }
  ],
  "checks": {
    "maxRimAngleDeg": 83
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
