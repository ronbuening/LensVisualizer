import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * RU 2549915 C1, sole example in Table 1: four spherical elements in three groups.
 * Unscaled prescription at sodium D; Table 1 (PDF p. 5) clear diameters / 2 set all seven surface semidiameters.
 * The stop lies 3 mm before L3, dividing the printed 21 mm gap into 18 + 3 mm.
 * Its radius is derived from nominal f/2.2; the printed clear diameters limit the beam to about f/2.24.
 * Infinity focus only, with closeFocusM = 1e15 as a placeholder; no close-focus travel is supplied.
 * The KMZ-made Lomography × Zenit New Petzval 85 belongs to this patent family,
 * but its published focal length, back focus and vertex track differ from the patent values.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "kmz-new-petzval-85mm-f22",
  "maker": "KMZ",
  "name": "KMZ NEW PETZVAL 85mm f/2.2",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "nd": 1.6568,
      "vd": 51.11,
      "indexReference": "D",
      "glass": "TK21 (LZOS)",
      "focalLengthMm": 41.76,
      "label": "Element 1",
      "type": "Biconvex Positive",
      "role": "Positive front member of the cemented doublet",
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "nd": 1.755,
      "vd": 27.52,
      "indexReference": "D",
      "glass": "TF5 (LZOS)",
      "focalLengthMm": -88.12,
      "label": "Element 2",
      "type": "Plano-Concave Negative",
      "role": "Negative rear member of the front cemented doublet, with a flat exit face",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "nd": 1.5749,
      "vd": 41.3,
      "indexReference": "D",
      "glass": "QF3 (CDGM catalog equivalent of GOST LF5; supplier unconfirmed)",
      "focalLengthMm": -27.81,
      "label": "Element 3",
      "type": "Biconcave Negative",
      "role": "Negative singlet immediately behind the aperture stop"
    },
    {
      "id": 4,
      "name": "L4",
      "nd": 1.6568,
      "vd": 51.11,
      "indexReference": "D",
      "glass": "TK21 (LZOS)",
      "focalLengthMm": 33.49,
      "label": "Element 4",
      "type": "Biconvex Positive",
      "role": "Symmetric positive rear singlet"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.05,
      "d": 13,
      "sd": 18.75,
      "medium": 1
    },
    {
      "label": "2",
      "R": -66.53,
      "d": 4,
      "sd": 17.6,
      "medium": 2
    },
    {
      "label": "3",
      "R": "flat",
      "d": 18,
      "sd": 16.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3
    },
    {
      "label": "4",
      "R": -45.29,
      "d": 8,
      "sd": 11.55,
      "medium": 3
    },
    {
      "label": "5",
      "R": 26.3,
      "d": 3.4,
      "sd": 10.75
    },
    {
      "label": "6",
      "R": 42.17,
      "d": 8.8,
      "sd": 11.2,
      "medium": 4
    },
    {
      "label": "7",
      "R": -42.17,
      "d": 43.22,
      "sd": 11.2
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the production lens uses rack-and-pinion focusing to 1 m, but the patent supplies no close-focus spacings."
  },
  "aperture": {
    "nominalFNumber": 2.2,
    "fStops": [
      2.2,
      16
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 32,
    "maxTraceFieldDeg": 16
  },
  "layout": {
    "yScFill": 0.7
  },
  "subtitle": "RU 2549915 C1, sole example — Lomography × Zenit New Petzval 85 family",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "canon-ef",
      "nikon-f"
    ],
    "closeFocusM": {
      "marketing": 1
    },
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.01
    },
    "fNumber": {
      "marketing": 2.2,
      "design": 2.2
    },
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "f/2.2–16 · WATERHOUSE STOPS",
      "RACK-AND-PINION FOCUS",
      "1 m CLOSE FOCUS"
    ]
  },
  "source": {
    "patentNumber": "RU 2549915 C1",
    "patentYear": 2015,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Vladimir Alexandrovich Bogdankov",
      "Artem Andreevich Timirev",
      "Sergey Ivanovich Shcheglov"
    ],
    "assignees": [
      "PJSC Krasnogorsky Zavod named after S. A. Zverev"
    ]
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "1",
      "toSurface": "3"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
