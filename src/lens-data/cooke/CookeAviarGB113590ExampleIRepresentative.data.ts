import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 113,590 A, Example I (PDF p. 2), a representative of the Cooke Aviar design rather than an exact factory model.
 * The patent's unit-focal-length prescription is normalized at ×100: multiply every printed radius, thickness
 * and air space by 100 to express lengths in millimetres; refractive indices and Abbe numbers are unchanged.
 * The literal prescription gives EFL 100.64 mm at this scale. Its +0.637% residual from nominal 100 mm is inherent
 * in the patent and retained without fitting. US 1,361,207 prints r2 = −.9152 in error; GB r2 = −.8152 is used
 * (−81.52 mm after scaling).
 * The 12 mm surface semi-diameters are inferred, not printed clear apertures. The stop is inferred at the midpoint
 * of the 3.62 mm central gap (1.81 mm on either side), with its radius derived from f/4.5. The final 92.278731268 mm
 * interval is the calculated infinity back focus, not a printed dimension. No finite-focus movement is modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-aviar-gb113590-ei-representative",
  "maker": "Cooke",
  "name": "COOKE AVIAR f/4.5 (GB 113,590 Example I Design)",
  "visible": false,
  "catalog": {
    "lensMounts": ["large-format-lens-board"],
    "imageFormat": "6x9",
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    }
  },
  "source": {
    "example": {
      "label": "Example I",
      "id": "1"
    },
    "patentNumber": "GB 113,590 A",
    "patentYear": 1918,
    "authors": [
      "Arthur Warmisham"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "focalLengthMm": 36.21,
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.6116,
      "vd": 56.4,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    },
    {
      "id": 2,
      "name": "L2",
      "focalLengthMm": -38.32,
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.5682,
      "vd": 43.4,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    },
    {
      "id": 3,
      "name": "L3",
      "focalLengthMm": -42.18,
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.5502,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    },
    {
      "id": 4,
      "name": "L4",
      "focalLengthMm": 36.21,
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6116,
      "vd": 56.4,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 29.76,
      "d": 4.55,
      "sd": 12.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -81.52,
      "d": 2.03,
      "sd": 12.0
    },
    {
      "label": "3",
      "R": -42.85,
      "d": 1.0,
      "sd": 12.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 44.64,
      "d": 1.81,
      "sd": 12.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.81
    },
    {
      "label": "5",
      "R": -50.41,
      "d": 1.0,
      "sd": 12.0,
      "medium": 3
    },
    {
      "label": "6",
      "R": 43.3,
      "d": 1.93,
      "sd": 12.0
    },
    {
      "label": "7",
      "R": 81.52,
      "d": 4.55,
      "sd": 12.0,
      "medium": 4
    },
    {
      "label": "8",
      "R": -29.76,
      "d": 92.278731268,
      "sd": 12.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Only the infinity-focus prescription is modeled; no finite-focus movement is reconstructed."
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear"
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
