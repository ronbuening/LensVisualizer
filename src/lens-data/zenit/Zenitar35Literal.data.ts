import type { LensDataV2Input } from "../../types/lensDataV2.js";
// Private research input; no retail identity or aperture equivalence claim.
const lens = {
  "schema": 2,
  "key": "zenitar-35-f1-ru2771147-literal-research",
  "maker": "Zenit",
  "name": "Zenitar 35mm f/1 candidate \u2014 RU2771147 literal 36mm",
  "subtitle": "Factory identity unconfirmed; printed terminal 17.3mm; conditional reference-index interpretation",
  "visible": false,
  "layout": {
    "yScFill": 0.3
  },
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "design": 36
    },
    "fNumber": {
      "design": 1
    },
    "specs": [
      "Native patent36mm/F1; retail35mm identity hypothesis only",
      "All radii, intervals and nine index/Abbe pairs unchanged",
      "Source surface diameters retained; printed stop diameter30.8mm recorded separately",
      "Reference index wavelength not explicit; schema nd assignment conditional",
      "Static infinity only; no manufactured close-focus schedule"
    ]
  },
  "source": {
    "patentNumber": "RU 2771147 C1",
    "patentYear": 2022,
    "authors": [
      "Vladimir Aleksandrovich Bogdankov",
      "Ilya Anatolevich Levin"
    ],
    "assignees": [
      "Krasnogorsk Mechanical Plant"
    ],
    "example": {
      "label": "Sole example",
      "id": null
    },
    "errata": [
      {
        "status": "unresolved",
        "note": "Printed terminal17.3mm differs from untuned paraxial BFL17.4096248977; retained without adjustment. Exact factory35mm identity and index reference wavelength unconfirmed."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Source glass 1",
      "type": "Spherical source element",
      "nd": 1.575,
      "vd": 41.3,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Source glass 2",
      "type": "Spherical source element",
      "nd": 1.7552,
      "vd": 27.52,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Source glass 3",
      "type": "Spherical source element",
      "nd": 1.692,
      "vd": 55.05,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Source glass 4",
      "type": "Spherical source element",
      "nd": 1.692,
      "vd": 55.05,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Source glass 5",
      "type": "Spherical source element",
      "nd": 1.6595,
      "vd": 57.35,
      "glass": "Unmatched; source index reference wavelength unconfirmed",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Source glass 6",
      "type": "Spherical source element",
      "nd": 1.7552,
      "vd": 27.52,
      "glass": "Unmatched; source index reference wavelength unconfirmed",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Source glass 7",
      "type": "Spherical source element",
      "nd": 1.692,
      "vd": 55.05,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Source glass 8",
      "type": "Spherical source element",
      "nd": 1.692,
      "vd": 55.05,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Source glass 9",
      "type": "Spherical source element",
      "nd": 1.7552,
      "vd": 27.52,
      "glass": "Unmatched; source index reference wavelength unconfirmed"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 133.66,
      "d": 4.0,
      "sd": 29.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 26.92,
      "d": 11.45,
      "sd": 22.95
    },
    {
      "label": "3",
      "R": 74.82,
      "d": 6.6,
      "sd": 23.1,
      "medium": 2
    },
    {
      "label": "4",
      "R": -422.7,
      "d": 7.6,
      "sd": 22.85
    },
    {
      "label": "5",
      "R": -42.85,
      "d": 3.6,
      "sd": 22.45,
      "medium": 3
    },
    {
      "label": "6",
      "R": -82.6,
      "d": 1.0,
      "sd": 23.35
    },
    {
      "label": "7",
      "R": 85.11,
      "d": 12.3,
      "sd": 25.0,
      "medium": 4
    },
    {
      "label": "8",
      "R": -63.53,
      "d": 2.0,
      "sd": 25.1
    },
    {
      "label": "9",
      "R": 34.51,
      "d": 12.7,
      "sd": 21.45,
      "medium": 5
    },
    {
      "label": "10",
      "R": -91.83,
      "d": 3.5,
      "sd": 20.1,
      "medium": 6
    },
    {
      "label": "11",
      "R": 22.34,
      "d": 7.85,
      "sd": 15.45
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.3
    },
    {
      "label": "13",
      "R": 131.83,
      "d": 4.6,
      "sd": 15.35,
      "medium": 7
    },
    {
      "label": "14",
      "R": -93.97,
      "d": 1.0,
      "sd": 15.2
    },
    {
      "label": "15",
      "R": 46.88,
      "d": 6.3,
      "sd": 14.2,
      "medium": 8
    },
    {
      "label": "16",
      "R": -167.49,
      "d": 0.5,
      "sd": 13.25
    },
    {
      "label": "17",
      "R": 40.64,
      "d": 8.9,
      "sd": 11.7,
      "medium": 9
    },
    {
      "label": "18",
      "R": 22.49,
      "d": 17.3,
      "sd": 11.35
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity research sentinel, not physical minimum focus."
  },
  "gaps": {},
  "aperture": {
    "nominalFNumber": 1,
    "fStops": [
      1,
      1.4,
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
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ]
} satisfies LensDataV2Input;
export default lens;
