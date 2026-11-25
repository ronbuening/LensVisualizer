import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";
const DATA = {
  "schema": 2,
  "key": "nikon-tc300-2x",
  "maker": "Nikon",
  "name": "NIKON TELECONVERTER TC-300 2x",
  "visible": false,
  "subtitle": "Nakamura US4154508 Example 2; Nikon factory production cutaway",
  "catalog": {
    "lensMounts": [
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "specs": [
      "1977 2× rear converter; five spherical singlets; no internal aperture stop",
      "Production link: Nikon dimensioned TC-300 engineering cross-section; TC-2 predecessor, not a second entry",
      "Signed 300mm f/4.5 reference master and literal 1.5423mm junction; derived conjugate and rear image distance",
      "Estimated rims and fixture iris; monochromatic infinity validation only, see analysis",
      "Private, hidden integration model. Main catalog Nikon F hosts excluded until checked; this does not assert physical incompatibility."
    ]
  },
  "source": {
    "patentNumber": "US 4154508 A",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "sdSource": "heuristic",
    "authors": [
      "Soichi Nakamura"
    ],
    "assignees": [
      "Nippon Kogaku K. K."
    ],
    "patentYear": 1979
  },
  "magnification": 2,
  "masterImageDistanceMm": 68.51118978527313,
  "universal": false,
  "minHostFNumber": 4.5,
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element1",
      "type": "Lens",
      "nd": 1.59507,
      "vd": 35.6,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element2",
      "type": "Lens",
      "nd": 1.74443,
      "vd": 49.4,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element3",
      "type": "Lens",
      "nd": 1.59507,
      "vd": 35.6,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element4",
      "type": "Lens",
      "nd": 1.50137,
      "vd": 56.5,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element5",
      "type": "Lens",
      "nd": 1.80454,
      "vd": 39.5,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 179.709,
      "d": 3.7,
      "sd": 13.3,
      "medium": 1
    },
    {
      "label": "2",
      "R": -90.827,
      "d": 2,
      "sd": 13.3
    },
    {
      "label": "3",
      "R": -109.097,
      "d": 2.1,
      "sd": 13.3,
      "medium": 2
    },
    {
      "label": "4",
      "R": 32.52,
      "d": 2.1,
      "sd": 13.3
    },
    {
      "label": "5",
      "R": 40.56,
      "d": 4.2,
      "sd": 13.3,
      "medium": 3
    },
    {
      "label": "6",
      "R": 99.049,
      "d": 66.24,
      "sd": 13.3
    },
    {
      "label": "7",
      "R": 317.64,
      "d": 6.2,
      "sd": 19.8,
      "medium": 4
    },
    {
      "label": "8",
      "R": -55.266,
      "d": 0.2,
      "sd": 19.8
    },
    {
      "label": "9",
      "R": -195.754,
      "d": 1.8,
      "sd": 19.8,
      "medium": 5
    },
    {
      "label": "10",
      "R": 267.716,
      "d": 63.11191949990361,
      "sd": 19.8
    }
  ],
  "incompatibleLensKeys": [
    "nikkor-afs-120-300f28e",
    "nikkor-afs-200-500f56e",
    "nikon-af-i-nikkor-300mm-f2-8d-if-ed",
    "nikon-af-i-nikkor-400mm-f28d-if-ed",
    "nikon-af-i-nikkor-600mm-f4d-if-ed",
    "nikon-af-s-70-200mm-f28g-vr-ii",
    "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr",
    "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr-tc-in",
    "nikon-af-s-nikkor-300mm-f4e-pf-ed-vr",
    "nikon-af-s-nikkor-400mm-f28e-fl-ed-vr",
    "nikon-af-s-nikkor-500mm-f4e-fl-ed-vr",
    "nikon-af-s-nikkor-500mm-f4g-ed-vr",
    "nikon-af-s-nikkor-500mm-f56e-pf-ed-vr",
    "nikon-af-s-nikkor-600mm-f4d-if-ed-ii",
    "nikon-af-s-nikkor-600mm-f4e-fl-ed-vr",
    "nikon-af-s-nikkor-70-200mm-f4g-ed-vr",
    "nikon-af-s-nikkor-800f56e-fl-ed-vr",
    "nikon-afs-105f28-vr-micro",
    "nikon-afs-70-200-f28e-fl",
    "nikon-afs-80-400-f45-56g",
    "nikon-afs-vr-200400f4g-if-ed",
    "nikon-afs-vr-zoom-nikkor-70-200-f28g-if-ed",
    "nikon-afs-zoom-nikkor-80-200mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-300mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-500mm-f4d-if-ed"
  ]
} satisfies TeleconverterDataV2Input;
export default DATA;
