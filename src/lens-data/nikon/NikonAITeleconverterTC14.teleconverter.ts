import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";
const DATA = {
  "schema": 2,
  "key": "nikon-ai-tc14-14x",
  "maker": "Nikon",
  "name": "NIKON Ai TELECONVERTER TC-14 1.4x",
  "visible": false,
  "subtitle": "Original 1978 Ai TC-14; Nikon factory cross-section and US4206971 Embodiment I",
  "catalog": {
    "lensMounts": [
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "specs": [
      "Original 1978 Ai TC-14 only; not TC-14A/B/C/E; five spherical singlets",
      "Production contours follow Nikon factory optical section; signed 30.883 mm converter track",
      "Literal 71.001 mm R1-to-image station, 48.968 mm virtual image conjugate",
      "Semi-diameters are computational caps, not measured factory apertures",
      "Private hidden model. Main catalog Nikon F hosts excluded pending individual optical and physical qualification."
    ]
  },
  "source": {
    "patentNumber": "US 4206971 A",
    "example": {
      "label": "Embodiment I",
      "id": "1"
    },
    "authors": [
      "Yoshinari Hamanishi",
      "Soichi Nakamura"
    ],
    "assignees": [
      "Nippon Kogaku K.K."
    ],
    "sdSource": "heuristic",
    "patentYear": 1980
  },
  "magnification": 1.4,
  "masterImageDistanceMm": 48.968,
  "universal": false,
  "minHostFNumber": 2,
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
      "nd": 1.79668,
      "vd": 45.4,
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
      "nd": 1.79668,
      "vd": 45.4,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element5",
      "type": "Lens",
      "nd": 1.51009,
      "vd": 63.4,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 121.015,
      "d": 4,
      "sd": 12.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": -100.184,
      "d": 2.008,
      "sd": 12.7
    },
    {
      "label": "3",
      "R": -118.42,
      "d": 1.8,
      "sd": 12.7,
      "medium": 2
    },
    {
      "label": "4",
      "R": 35.5,
      "d": 1.8,
      "sd": 12.7
    },
    {
      "label": "5",
      "R": 36.8,
      "d": 6,
      "sd": 12.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": -5196.816,
      "d": 4.575,
      "sd": 12.7
    },
    {
      "label": "7",
      "R": -99.964,
      "d": 1.5,
      "sd": 14,
      "medium": 4
    },
    {
      "label": "8",
      "R": 70.033,
      "d": 0.2,
      "sd": 14
    },
    {
      "label": "9",
      "R": 53.938,
      "d": 9,
      "sd": 14,
      "medium": 5
    },
    {
      "label": "10",
      "R": -180.939,
      "d": 40.118,
      "sd": 14
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
