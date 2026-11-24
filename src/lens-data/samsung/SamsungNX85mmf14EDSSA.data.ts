import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "private-samsung-nx85-us8498063-e1-source-states-f56",
  "name": "PRIVATE Samsung NX85 family — exact three patent focus states f5.6",
  "maker": "Samsung",
  "visible": false,
  "subtitle": "US8498063B2 First Embodiment; source geometry, estimated caps; scoped D-line f5.6 ±3deg, not factory or wide-open qualification",
  "source": {
    "patentNumber": "US 8498063 B2",
    "patentYear": 2013,
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "authors": [
      "Shuji Yoneyama"
    ],
    "assignees": [
      "Samsung Electronics Co., Ltd."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Patent lens 1",
      "type": "Patent glass",
      "nd": 1.618,
      "vd": 63.4,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Patent lens 2",
      "type": "Patent glass",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Patent lens 3",
      "type": "Patent glass",
      "nd": 1.69895,
      "vd": 30.1,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Patent lens 4",
      "type": "Patent glass",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Patent lens 5",
      "type": "Patent glass",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Patent lens 6",
      "type": "Patent glass",
      "nd": 1.744,
      "vd": 44.9,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Patent lens 7",
      "type": "Patent glass",
      "nd": 1.69895,
      "vd": 30.1,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Patent lens 8",
      "type": "Patent glass",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Patent lens 9",
      "type": "Patent glass",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Patent lens 10",
      "type": "Patent glass",
      "nd": 1.72825,
      "vd": 28.3,
      "indexReference": "d",
      "glass": "Published nd/Vd; supplier and melt unspecified"
    }
  ],
  "surfaces": [
    {
      "label": "S1",
      "R": 60.561,
      "d": 10.986,
      "sd": 14,
      "medium": 1
    },
    {
      "label": "S2",
      "R": -592.244,
      "d": 0.1,
      "sd": 13
    },
    {
      "label": "S3",
      "R": 47.31,
      "d": 7.463,
      "sd": 12.5,
      "medium": 2
    },
    {
      "label": "S4",
      "R": 122.837,
      "d": 2.314,
      "sd": 11
    },
    {
      "label": "S5",
      "R": 991.103,
      "d": 4.142,
      "sd": 10.5,
      "medium": 3
    },
    {
      "label": "S6",
      "R": 30.284,
      "d": 0.988,
      "sd": 9.5
    },
    {
      "label": "S7",
      "R": 32.912,
      "d": 8.768,
      "sd": 9,
      "medium": 4
    },
    {
      "label": "S8",
      "R": 238.182,
      "sd": 7.5
    },
    {
      "label": "S9",
      "R": -402.507,
      "d": 4.086,
      "sd": 6.5,
      "medium": 5
    },
    {
      "label": "S10",
      "R": -58.134,
      "d": 1.5,
      "sd": 6,
      "medium": 6
    },
    {
      "label": "S11",
      "R": 32.003,
      "sd": 6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8.783
    },
    {
      "label": "S13",
      "R": 93.377,
      "d": 1.5,
      "sd": 5,
      "medium": 7
    },
    {
      "label": "S14",
      "R": 45.475,
      "d": 6.079,
      "sd": 5,
      "medium": 8
    },
    {
      "label": "S15",
      "R": -64.139,
      "d": 6.131,
      "sd": 5
    },
    {
      "label": "S16",
      "R": 32.411,
      "d": 3.061,
      "sd": 5,
      "medium": 9
    },
    {
      "label": "S17",
      "R": 49.321,
      "d": 1.911,
      "sd": 5
    },
    {
      "label": "S18",
      "R": -2041.322,
      "d": 1.3,
      "sd": 4.5,
      "medium": 10
    },
    {
      "label": "S19",
      "R": 48.072,
      "d": 19.447,
      "sd": 4.5
    }
  ],
  "rearPlates": [
    {
      "label": "Source filter",
      "thicknessMm": 2.8,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "gapAfterMm": 0.522,
      "sd": 5,
      "source": "US8498063B2 First Embodiment S20/S21, exact physical plate and trailing air; not a verified retail camera stack"
    }
  ],
  "focus": {
    "closeFocusM": 0.8100244609672149,
    "keyframes": [
      0,
      0.18365769347577218,
      1
    ],
    "published": [
      1,
      2
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 4300.641,
        "distanceReference": "first-surface",
        "source": "US8498063B2 First Embodiment Table1Pos2; printedOBJ.DIST.4300.641andD1/D2=5.005/12.985. First-surface reference inferred from source-table near-state audit, not OEMMFD or substituted solved distance."
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 700,
        "distanceReference": "first-surface",
        "source": "US8498063B2 First Embodiment Table1Pos3; printedOBJ.DIST.700andD1/D2=11.202/6.788. First-surface datum to be tested by conjugate audit versus image-plane; retains original distance, not700.15346solved."
      }
    ],
    "description": "Only three original patent states certified; exact complementary gaps and fixed sensor. Intermediate native focus interpolation is not a source schedule or qualified optical claim; MTF only at declared states."
  },
  "aperture": {
    "nominalFNumber": 5.6,
    "fStops": [
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
    "fullFieldDeg": 6,
    "maxTraceFieldDeg": 3
  },
  "layout": {
    "yScFill": 0.7
  },
  "catalog": {
    "focalLengthMm": {
      "design": 85.01,
      "marketing": 85
    },
    "fNumber": {
      "design": 1.44,
      "marketing": 1.4
    },
    "elementCount": 10,
    "groupCount": 8,
    "specs": [
      "Strong Samsung NX85 family correlation from10/8andonehighAbbeelement; no verified OEM optical section or exact factory identity. SSA is motor only; no retail asphere claim.",
      "This is a stopped-down f5.6,±3degreeD-line diagnostic. Source nominalf1.44is metadata, not tested wide-open performance. No field or prescription fit.",
      "All signed radii/spacings/indices retained. Estimated clear caps: independent scoped pupil envelope+.25mm rounded outward.5mm; not source mechanical rims/baffles.",
      "Source2.8mmplate and.522mmlastair retained; no refocus. Source focus D1/D2 rows assessed separately, not assumed factory interpolation."
    ]
  },
  "gaps": {
    "S8": {
      "label": "D1",
      "values": [
        [
          3.925,
          5.005,
          11.202
        ]
      ]
    },
    "S11": {
      "label": "D2",
      "values": [
        [
          14.065,
          12.985,
          6.788
        ]
      ]
    }
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
