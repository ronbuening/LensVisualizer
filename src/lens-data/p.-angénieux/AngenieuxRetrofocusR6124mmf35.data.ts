import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FR 1,214,945 (Pierre Angénieux, published 1960), sole numerical example,
 * transcribed from the table on page 2 and scaled to a 24 mm lens. The patent
 * gives a normalized design with F = 100 and does not name a product; the
 * link to the Retrofocus Type R61 24 mm f/3.5 rests on the period ALPA
 * leaflet (eight air-spaced elements, 83 degrees, matching section).
 *
 * Signs: the scan prints plus signs faintly, as a short bar whose vertical
 * stroke often drops out, and minus signs as a long dash. R15 carries the short
 * plus bar (+289.16), like R14, R7 and R8, so the last element is biconvex as
 * the patent text and figure show. Every radius, thickness, index and Abbe
 * number is as printed.
 *
 * Scale: 24/100 = 0.24 on every radius and distance. The normalized
 * prescription computes EFL 100.117 and back focus 153.428 against the printed
 * 100 and 153.3; at scale the EFL is 24.028 mm. No aspheres.
 *
 * Inferred, not printed: the stop position (e12 split equally, 1.1256 + 1.1256
 * mm, from the figure), the stop radius (derived from f/3.5), every surface
 * semi-diameter, and the last gap, which is the computed paraxial back focus
 * 36.8228 mm (the printed 153.3 would scale to 36.792 mm).
 *
 * Glass: the patent gives only index and Abbe number, with the index headed
 * nd "pour la raie D". The helium d reference is kept because d and D differ
 * by about one unit in the last printed digit. No catalog row matches the
 * printed pairs exactly, so every glass is labelled Unmatched.
 *
 * Infinity focus only: the patent prints one prescription and no focusing
 * movement. The ALPA leaflet's 16 inch close focus is catalog metadata.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "angenieux-retrofocus-r61-24mm-f35",
  "maker": "P. Angénieux",
  "name": "P. ANGÉNIEUX RETROFOCUS TYPE R61 24mm f/3.5",
  "subtitle": "FR 1,214,945 sole example — correlated to the Type R61",
  "catalog": {
    "lensMounts": [
      "alpa",
      "exakta"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "f/3.5",
      "83° PUBLISHED FIELD",
      "ALL SPHERICAL"
    ],
    "elementCount": 8,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "closeFocusM": {
      "marketing": 0.4064
    }
  },
  "source": {
    "patentNumber": "FR 1,214,945",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1960,
    "authors": [
      "Pierre Angénieux"
    ],
    "assignees": []
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6203, νd=60.2; supplier unconfirmed)",
      "focalLengthMm": -103.95403589616163,
      "apd": false,
      "role": "Front negative meniscus of the diverging front component."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6751,
      "vd": 32.3,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6751, νd=32.3; supplier unconfirmed)",
      "focalLengthMm": 225.0162512801287,
      "apd": false,
      "role": "First of two weak positive lenses between the front negative menisci."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.6751,
      "vd": 32.3,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6751, νd=32.3; supplier unconfirmed)",
      "focalLengthMm": 225.19253600931984,
      "apd": false,
      "role": "Second weak positive lens between the front negative menisci."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6203, νd=60.2; supplier unconfirmed)",
      "focalLengthMm": -36.111067891408574,
      "apd": false,
      "role": "Strong negative meniscus completing the front component."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6203, νd=60.2; supplier unconfirmed)",
      "focalLengthMm": 45.45386528529418,
      "apd": false,
      "role": "First positive lens of the converging rear component."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6203, νd=60.2; supplier unconfirmed)",
      "focalLengthMm": 39.0778412247726,
      "apd": false,
      "role": "Positive meniscus immediately ahead of the stop."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.6498,
      "vd": 33.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6498, νd=33.7; supplier unconfirmed)",
      "focalLengthMm": -17.020643768812274,
      "apd": false,
      "role": "Negative corrector immediately behind the stop."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (patent nd=1.6203, νd=60.2; supplier unconfirmed)",
      "focalLengthMm": 21.492567711364956,
      "apd": false,
      "role": "Final positive lens of the rear component."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 54.0168,
      "d": 1.2144,
      "sd": 24.2,
      "medium": 1
    },
    {
      "label": "2",
      "R": 29.1408,
      "d": 9.3096,
      "sd": 24.2
    },
    {
      "label": "3",
      "R": 173.4672,
      "d": 2.8344,
      "sd": 18.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -1214.2464,
      "d": 0.1224,
      "sd": 18.5
    },
    {
      "label": "5",
      "R": 220.7736,
      "d": 2.8344,
      "sd": 18.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": -485.7,
      "d": 0.2424,
      "sd": 18.5
    },
    {
      "label": "7",
      "R": 50.1888,
      "d": 1.2072,
      "sd": 14,
      "medium": 4
    },
    {
      "label": "8",
      "R": 15.34488,
      "d": 23.22048,
      "sd": 13.8
    },
    {
      "label": "9",
      "R": 44.5224,
      "d": 3.6192,
      "sd": 7,
      "medium": 5
    },
    {
      "label": "10",
      "R": -74.4912,
      "d": 0.1224,
      "sd": 7
    },
    {
      "label": "11",
      "R": 16.5936,
      "d": 3.5304,
      "sd": 6.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": 48.3192,
      "d": 1.1256,
      "sd": 6.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.1256
    },
    {
      "label": "13",
      "R": -35.1408,
      "d": 1.62,
      "sd": 6.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": 16.4328,
      "d": 0.972,
      "sd": 5.8
    },
    {
      "label": "15",
      "R": 69.3984,
      "d": 2.6712,
      "sd": 5.8,
      "medium": 8
    },
    {
      "label": "16",
      "R": -16.2588,
      "d": 36.82281561768913,
      "sd": 5.8
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent prints one prescription and no focusing movement. The 0.41 m (16 inch) minimum focus is the figure from the period ALPA leaflet."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
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
    "fullFieldDeg": 83,
    "maxTraceFieldDeg": 41.5
  },
  "groups": [
    {
      "text": "COMPONENT I (NEGATIVE)",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "COMPONENT II (POSITIVE)",
      "fromSurface": "9",
      "toSurface": "16"
    }
  ],
  "doublets": [],
  "layout": {
    "yScFill": 0.52,
    "scFill": 0.56
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
