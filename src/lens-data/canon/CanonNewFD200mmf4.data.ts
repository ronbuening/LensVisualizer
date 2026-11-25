import type { LensDataV2Input } from "../../types/lensDataV2.js";
const DATA = {
  "schema": 2,
  "key": "canon-new-fd-200mm-f4",
  "maker": "Canon",
  "name": "CANON New FD 200mm f/4",
  "visible": false,
  "subtitle": "June 1979 non-macro rear-focus redesign; US4240703 Example I",
  "source": {
    "patentNumber": "US 4240703 A",
    "example": {
      "label": "Example I",
      "id": "1"
    },
    "authors": [
      "Kikuo Momiyama"
    ],
    "assignees": [
      "Canon Kabushiki Kaisha"
    ],
    "sdSource": "heuristic",
    "patentYear": 1980
  },
  "catalog": {
    "lensMounts": [
      "canon-fd"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 200,
      "design": 200
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "June 1979 New FD 200mm f/4, non-macro; 7 elements in 6 groups",
      "Production cutaway compared at one scale, with a single rigid shift of the source focus doublet",
      "Signed prescriptions at infinity and nominal 1.826 m from the image plane; modeled translation between anchors is not a factory focus cam",
      "Computed EFL 200.894 mm at infinity and 169.443 mm at the finite anchor; finite heading differs by 0.663 mm",
      "Diaphragm position and clear semi-diameters estimated; no factory vignetting, full-field image quality or UI claim"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element1",
      "type": "Lens",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element2",
      "type": "Lens",
      "nd": 1.72342,
      "vd": 38,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element3",
      "type": "Lens",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element4",
      "type": "Lens",
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element5",
      "type": "Lens",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element6",
      "type": "Lens",
      "nd": 1.66755,
      "vd": 41.9,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element7",
      "type": "Lens",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 69.76,
      "sd": 25.6,
      "medium": 1,
      "d": 9.64
    },
    {
      "label": "2",
      "R": -97.89999999999999,
      "sd": 25.6,
      "d": 3.9800000000000004
    },
    {
      "label": "3",
      "R": -85.56,
      "sd": 24.5,
      "medium": 2,
      "d": 2.52
    },
    {
      "label": "4",
      "R": 357.74,
      "sd": 24.5,
      "d": 0.58
    },
    {
      "label": "5",
      "R": 58.919999999999995,
      "sd": 23.1,
      "medium": 3,
      "d": 6.6000000000000005
    },
    {
      "label": "6",
      "R": 6773,
      "sd": 23.1,
      "d": 12.34
    },
    {
      "label": "7",
      "R": 32.14,
      "sd": 18,
      "medium": 4,
      "d": 3.6999999999999997
    },
    {
      "label": "8",
      "R": 25.88,
      "sd": 18,
      "d": 20.04
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "9",
      "R": 78.72,
      "sd": 14,
      "medium": 5,
      "d": 2.02
    },
    {
      "label": "10",
      "R": -26173.239999999998,
      "sd": 14,
      "medium": 6,
      "d": 1.52
    },
    {
      "label": "11",
      "R": 39.78,
      "sd": 14
    },
    {
      "label": "12",
      "R": 42.32,
      "sd": 16,
      "medium": 7,
      "d": 2.52
    },
    {
      "label": "13",
      "R": 43.86,
      "sd": 16,
      "d": 61.15596820550728
    }
  ],
  "gaps": {
    "11": {
      "label": "D11 source rear-doublet-to-final-singlet gap",
      "values": [
        [
          31.02,
          12.34
        ]
      ]
    },
    "STO": {
      "label": "D8 remainder after stationary estimated iris",
      "values": [
        [
          6.36,
          25.04
        ]
      ]
    }
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
  "focus": {
    "closeFocusM": 1.826,
    "keyframes": [
      0,
      1
    ],
    "published": [
      1
    ],
    "description": "Two signed source stations only: infinity and9.13 nominalf object-to-image. Rear cemented doublet moves18.68mm; other geometry and estimated iris stay fixed. Intermediate translation is modeled, not a source-measured focus cam.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 1826,
        "distanceReference": "image-plane",
        "source": "US4240703 ExampleI finite d9.13f atscale200. Parent optical reconstruction and independent two-reference check identify image-plane distance; literal gaps retained with+20.631micrometre paraxial residual."
      }
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 6,
    "maxTraceFieldDeg": 3
  },
  "rays": {
    "offAxisFieldFrac": 0.3333333333333333
  },
  "layout": {
    "yScFill": 0.65
  },
  "doublets": [
    {
      "text": "E5/E6 moving rear cemented pair",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ]
} satisfies LensDataV2Input;
export default DATA;
