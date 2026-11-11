import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** HIDDEN UNVALIDATED representative. Source100mm/F2 scaled uniformly .35.
 * Marketing35mm/f1.9 is not a factory prescription claim. Literal17R/d/nV unchanged.
 * Stop inferred from Fig1 vertices at61.5% of18-unit gap:11.1+6.9native.
 * This corrects withdrawn v1 quarter-gap interpretation; not a published station.
 * sd independently inferred from conservative inner drawing rims/191-unit axial span.
 * Not measured optical clear apertures; mounts/vignetting unknown. No ray fitting.
 * Computed paraxial image gap; static infinity-only sentinel. No overrides.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "enna-munchen-super-lithagon-35mm-f19",
  "maker": "Enna M\u00fcnchen",
  "name": "ENNA M\u00dcNCHEN SUPER-LITHAGON 35mm f/1.9",
  "visible": false,
  "subtitle": "US3036499A sole example \u2014 qualified scaled representative; source f/2",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 1.9,
      "design": 2
    },
    "specs": [
      "9 elements / 8 groups",
      "Source 100mm f/2 uniformly scaled by 0.35",
      "Infinity-only; figure-inferred stop and apertures; unvalidated"
    ]
  },
  "source": {
    "patentNumber": "US 3,036,499 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1962,
    "authors": [
      "Johann Lautenbacher"
    ],
    "assignees": [
      "Enna-Werk Optische Anstalt Dr. Appelt K.G."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.51821,
      "vd": 65.18,
      "glass": "Unmatched (source d-line nd=1.51821, vd=65.18)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.51821,
      "vd": 65.18,
      "glass": "Unmatched (source d-line nd=1.51821, vd=65.18)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.58921,
      "vd": 40.97,
      "glass": "Unmatched (source d-line nd=1.58921, vd=40.97)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6228,
      "vd": 56.88,
      "glass": "Unmatched (source d-line nd=1.6228, vd=56.88)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.52249,
      "vd": 59.64,
      "glass": "Unmatched (source d-line nd=1.52249, vd=59.64)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Plano-concave Negative",
      "nd": 1.78472,
      "vd": 25.71,
      "glass": "Unmatched (source d-line nd=1.78472, vd=25.71)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Plano-concave Negative",
      "nd": 1.78472,
      "vd": 25.71,
      "glass": "Unmatched (source d-line nd=1.78472, vd=25.71)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Plano-convex Positive",
      "nd": 1.691,
      "vd": 54.8,
      "glass": "Unmatched (source d-line nd=1.691, vd=54.8)",
      "role": "Literal patent glass; no melt identity claim"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.691,
      "vd": 54.8,
      "glass": "Unmatched (source d-line nd=1.691, vd=54.8)",
      "role": "Literal patent glass; no melt identity claim"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 87.5,
      "d": 2.4499999999999997,
      "sd": 17.4,
      "medium": 1
    },
    {
      "label": "2",
      "R": 29.749999999999996,
      "d": 10.5,
      "sd": 17.4
    },
    {
      "label": "3",
      "R": 94.5,
      "d": 2.4499999999999997,
      "sd": 13.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 32.199999999999996,
      "d": 10.5,
      "sd": 13.5
    },
    {
      "label": "5",
      "R": 122.49999999999999,
      "d": 4.199999999999999,
      "sd": 12.6,
      "medium": 3
    },
    {
      "label": "6",
      "R": -60.199999999999996,
      "d": 0.35,
      "sd": 12.6
    },
    {
      "label": "7",
      "R": 54.599999999999994,
      "d": 4.199999999999999,
      "sd": 12.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": -210.0,
      "d": 0.35,
      "sd": 12.6
    },
    {
      "label": "9",
      "R": 20.299999999999997,
      "d": 4.199999999999999,
      "sd": 11.8,
      "medium": 5
    },
    {
      "label": "10",
      "R": 25.9,
      "d": 3.885,
      "sd": 11.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.415
    },
    {
      "label": "11",
      "R": "flat",
      "d": 2.8,
      "sd": 9.7,
      "medium": 6
    },
    {
      "label": "12",
      "R": 24.849999999999998,
      "d": 7.35,
      "sd": 9.7
    },
    {
      "label": "13",
      "R": -64.75,
      "d": 2.0999999999999996,
      "sd": 11.1,
      "medium": 7
    },
    {
      "label": "14",
      "R": "flat",
      "d": 3.8499999999999996,
      "sd": 11.1,
      "medium": 8
    },
    {
      "label": "15",
      "R": -31.15,
      "d": 0.35,
      "sd": 11.1
    },
    {
      "label": "16",
      "R": 105.0,
      "d": 4.8999999999999995,
      "sd": 14.7,
      "medium": 9
    },
    {
      "label": "17",
      "R": -52.56999999999999,
      "d": 36.58329249403472,
      "sd": 14.7
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only geometry; 1e15 is a numerical sentinel, not a published MFD or finite focus mechanism."
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
    "fullFieldDeg": 64,
    "maxTraceFieldDeg": 32
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
