import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "private-olympus-30macro-us9791677-e6-f56",
  "name": "PRIVATE Olympus 30mm Macro family — patent E6 source positions f5.6",
  "maker": "Olympus",
  "visible": false,
  "subtitle": "US9791677B2 Example6; source1xnearstate, not retail1.25x. Literal glass/plate/detector, estimated caps, Dline±3degrees at3sourcepositions.",
  "source": {
    "patentNumber": "US 9791677 B2",
    "patentYear": 2017,
    "example": {
      "label": "Example 6",
      "id": "6"
    },
    "authors": [
      "Masaru Morooka"
    ],
    "assignees": [
      "Olympus Corporation"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Patent element 1",
      "type": "Patent medium",
      "nd": 1.58913,
      "vd": 61.15,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Patent element 2",
      "type": "Patent medium",
      "nd": 1.72342,
      "vd": 37.95,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Patent element 3",
      "type": "Patent medium",
      "nd": 1.76182,
      "vd": 26.52,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Patent element 4",
      "type": "Patent medium",
      "nd": 1.79952,
      "vd": 42.22,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Patent element 5",
      "type": "Patent medium",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Patent element 6",
      "type": "Patent medium",
      "nd": 1.51633,
      "vd": 64.06,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Patent element 7",
      "type": "Patent medium",
      "nd": 1.83481,
      "vd": 42.73,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; production supplier, melt and identity unspecified"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -110.619,
      "d": 1.2,
      "sd": 3.3,
      "asphere": {
        "K": 0,
        "A4": -3.32176e-05,
        "A6": 5.4867e-07,
        "A8": -1.4485e-08,
        "A10": 1.39256e-10
      },
      "medium": 1
    },
    {
      "label": "2",
      "R": 9.864,
      "d": 1.57,
      "sd": 3.3,
      "asphere": {
        "K": -1.967,
        "A4": 0.000128821,
        "A6": -6.24774e-08,
        "A8": -1.87604e-08,
        "A10": 2.57096e-10
      }
    },
    {
      "label": "3",
      "R": 14.784,
      "d": 2.81,
      "sd": 3.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -43.126,
      "d": 3.61,
      "sd": 3.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 7
    },
    {
      "label": "6",
      "R": -8.479,
      "d": 0.8,
      "sd": 3.8,
      "medium": 3
    },
    {
      "label": "7",
      "R": -211.11,
      "d": 3.32,
      "sd": 4.2,
      "medium": 4
    },
    {
      "label": "8",
      "R": -12.93,
      "d": 0.1,
      "sd": 4.8
    },
    {
      "label": "9",
      "R": 30.372,
      "d": 4.35,
      "sd": 5,
      "asphere": {
        "K": 0,
        "A4": -2.85655e-05,
        "A6": -1.62203e-07,
        "A8": 3.86801e-09,
        "A10": -7.91556e-11
      },
      "medium": 5
    },
    {
      "label": "10",
      "R": -13.132,
      "sd": 5.1,
      "asphere": {
        "K": 0,
        "A4": 7.16927e-05,
        "A6": 1.84655e-07,
        "A8": -1.83473e-09,
        "A10": -2.03651e-11
      }
    },
    {
      "label": "11",
      "R": -115.656,
      "d": 1,
      "sd": 3.9,
      "asphere": {
        "K": 0,
        "A4": -9.84785e-06,
        "A6": 1.29117e-06,
        "A8": -3.74635e-08,
        "A10": 3.33054e-10
      },
      "medium": 6
    },
    {
      "label": "12",
      "R": 16.396,
      "sd": 3.8,
      "asphere": {
        "K": 0,
        "A4": -1.28247e-05,
        "A6": 1.02065e-06,
        "A8": -3.21827e-08,
        "A10": 2.85706e-10
      }
    },
    {
      "label": "13",
      "R": 634.004,
      "d": 3.34,
      "sd": 3.6,
      "medium": 7
    },
    {
      "label": "14",
      "R": -40.668,
      "d": 16.04,
      "sd": 3.6
    }
  ],
  "rearPlates": [
    {
      "label": "Source equivalent filter plate",
      "thicknessMm": 6.08,
      "nd": 1.51633,
      "vd": 64.14,
      "indexReference": "d",
      "gapAfterMm": 0.75,
      "sd": 2.2,
      "source": "US9791677B2Example6 S15–16, literal6.08mmn1.51633/V64.14and.75mmfinalair retained. No claim of an actual retail filter stack."
    }
  ],
  "focus": {
    "closeFocusM": 0.09760976432711088,
    "keyframes": [
      0,
      0.7596762528302199,
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
        "objectDistanceMm": 54.8,
        "distanceReference": "first-surface",
        "sourceMagnification": "0.5",
        "source": "US9791677B2Example6 printed magnification −0.5; distance solved from literal source geometry at unchanged detector, rounded to native0.01mmconvention. Not a source-printed object distance or OEM1.25x/MFD. d10/d12 retained."
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 23.92,
        "distanceReference": "first-surface",
        "sourceMagnification": "1.0",
        "source": "US9791677B2Example6 printed magnification −1.0; distance solved from literal source geometry at unchanged detector, rounded to native0.01mmconvention. Not a source-printed object distance or OEM1.25x/MFD. d10/d12 retained."
      }
    ],
    "description": "Only three exactsourcegap rows and derived finiteconjugates qualified. G3E6 moves imageward6.16/13.76mm; other units, sourceplate and detector fixed. Source近1x is not retail1.25x. No continuouscam/interpolatedfocusperformance certified."
  },
  "gaps": {
    "10": {
      "label": "d10",
      "values": [
        [
          1.8,
          7.96,
          15.56
        ]
      ]
    },
    "12": {
      "label": "d12",
      "values": [
        [
          19.92,
          13.76,
          6.16
        ]
      ]
    }
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
  "groups": [
    {
      "text": "G1 (+) FIXED",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2 (+) FIXED",
      "fromSurface": "6",
      "toSurface": "10"
    },
    {
      "text": "G3 (−) FOCUS",
      "fromSurface": "11",
      "toSurface": "12"
    },
    {
      "text": "G4 (+) FIXED",
      "fromSurface": "13",
      "toSurface": "14"
    }
  ],
  "layout": {
    "yScFill": 0.6
  },
  "catalog": {
    "focalLengthMm": {
      "design": 30.43,
      "marketing": 30
    },
    "fNumber": {
      "design": 3.56,
      "marketing": 3.5
    },
    "elementCount": 7,
    "groupCount": 6,
    "closeFocusM": {
      "marketing": 0.095
    },
    "specs": [
      "Olympus patent-family representative, not exact factory optics. Example6 selected after comparing Examples1/5/6; source sketches and OEM topology correlate, no glass/shape identity claim.",
      "Retail1.25xat95mm is not modeled. This source supplies infinity/0.5x/1x rows only; derived source sensor distances~128.49/97.61mm are separate from OEM rounded13cm/10cm.",
      "Operatingnativeinfinitycontrolf5.6withfixedestimatedphysicaliris, Dline±3degrees atonly3sourcepositions. Sourcef3.56 and retailf3.5 are metadata, not full-aperture qualification.",
      "All signed radii/conic/polynomials/indices/gaps,6.08mmplate/.75mmdetectorair and literal73.69mmimageplane retained. No scaling, registration or shim to match rounded summaries.",
      "Estimated scoped clearcaps and iris are not factory dimensions. No full MicroFourThirds coverage, wideband, continuousfinitefocus or1.25x claim."
    ]
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
