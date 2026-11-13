import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 113,590 A, Example I (PDF p. 2), scaled to represent the documented Cooke Aviar 8¼ in f/4.5.
 * Multiply every printed radius, thickness and air space in the patent's unit-focal-length prescription by
 * 209.55 to express lengths in millimetres (×209.55 = 8¼ in nominal); all delivered model lengths are rescaled
 * uniformly by ×2.0955. Refractive indices and Abbe numbers are unchanged.
 * The literal prescription gives EFL 210.88 mm at this scale. Its +0.637% residual from nominal 209.55 mm
 * is inherent in the patent and retained without fitting. The catalog design focal length is the traced EFL,
 * rounded to two decimals. US 1,361,207 prints r2 = −.9152 in error; GB r2 = −.8152 is used
 * (-170.82516 mm after scaling).
 * The 25.146 mm surface semi-diameters are scaled inferences, not printed clear apertures. The stop is inferred
 * at the midpoint of the 7.58571 mm central gap (3.792855 mm on either side), with its radius derived from f/4.5.
 * The final 193.370081 mm interval is the calculated infinity back focus, not a printed dimension.
 * No finite-focus movement or exact factory prescription is established.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-aviar-gb113590-ei-representative",
  "maker": "Cooke",
  "name": "COOKE AVIAR 8¼ in f/4.5",
  "visible": false,
  "catalog": {
    "lensMounts": [
      "large-format-lens-board"
    ],
    "imageFormat": "5x7",
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 209.55,
      "design": 210.88
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
      "focalLengthMm": 75.878055,
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
      "focalLengthMm": -80.29956,
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
      "focalLengthMm": -88.38819,
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
      "focalLengthMm": 75.878055,
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
      "R": 62.36208,
      "d": 9.534525,
      "sd": 25.146,
      "medium": 1
    },
    {
      "label": "2",
      "R": -170.82516,
      "d": 4.253865,
      "sd": 25.146
    },
    {
      "label": "3",
      "R": -89.792175,
      "d": 2.0955,
      "sd": 25.146,
      "medium": 2
    },
    {
      "label": "4",
      "R": 93.54312,
      "d": 3.792855,
      "sd": 25.146
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.792855
    },
    {
      "label": "5",
      "R": -105.634155,
      "d": 2.0955,
      "sd": 25.146,
      "medium": 3
    },
    {
      "label": "6",
      "R": 90.73515,
      "d": 4.044315,
      "sd": 25.146
    },
    {
      "label": "7",
      "R": 170.82516,
      "d": 9.534525,
      "sd": 25.146,
      "medium": 4
    },
    {
      "label": "8",
      "R": -62.36208,
      "d": 193.370081,
      "sd": 25.146
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
