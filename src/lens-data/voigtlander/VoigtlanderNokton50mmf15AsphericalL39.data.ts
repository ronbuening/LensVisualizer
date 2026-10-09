import type { LensDataInput } from "../../types/optics.js";

/* JP2000330014A Example 2: unchanged source radii, spacings, indices and coefficients.
 * No dimensional scaling. Faithful-table qualified model, not a repaired patent.
 * Computed f5 differs from printed 41.28 mm; f5/f is below literal 0.8, though it rounds 0.80.
 * Production correlation is not manufacturer-confirmed.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only, closeFocusM=1e15, var empty.
 * Source stop is plane 7. Authored radius uses exact source-f/1.53 calibration, matching
 * the current runtime's real on-axis ray calibration; it is not a published aperture.
 * Lens semi-diameters are estimated from patent FIG. 3 (the Example 2 section, 0.066 mm/px at
 * 400 dpi) and floor-checked by real-ray trace; none is a published aperture. Surfaces 4, 6 and 8
 * carry the optical extent the figure draws inside flat annuli. Surface 5 stops at 14.0 mm, the
 * largest value the 4→5 cross-gap check admits (the faces touch at 14.67 mm; the figure draws
 * them meeting). The rear group (9, 10, 11A, 12A) keeps its authored rims, 3-6 % above the
 * figure, so the default off-axis fan stays unclipped. Surface 12A turns over at 12.95 mm, below
 * the f/1.53 axial ray height of 12.97 mm there, so its rim lies past the turnover; FIG. 3 draws
 * that reversal.
 * Glass labels are coordinate classes, not supplier/melt identifications.
 * No rear plate is listed in the source; none is introduced.
 */
const LENS_DATA = {
  "key": "voigtlander-nokton-50mm-f15-aspherical-l39",
  "maker": "Voigtländer",
  "name": "VOIGTLÄNDER NOKTON 50mm f/1.5 Aspherical L39",
  "subtitle": "JP 2000-330014 A, Example 2 — supported but unconfirmed L39 production correlation",
  "specs": [
    "6 ELEMENTS / 5 GROUPS",
    "DESIGN f = 51.60 mm",
    "DESIGN F/1.53",
    "2 ASPHERICAL SURFACES / 1 ELEMENT",
    "INFINITY PRESCRIPTION ONLY"
  ],
  "focalLengthMarketing": 50,
  "focalLengthDesign": 51.600113235,
  "apertureMarketing": 1.5,
  "apertureDesign": 1.53,
  "lensMounts": [
    "leica-ltm"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2000-330014 A",
  "patentAuthors": [
    "Koji Shiokawa"
  ],
  "patentAssignees": [
    "Cosina Co., Ltd."
  ],
  "patentYear": 2000,
  "elementCount": 6,
  "groupCount": 5,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "fl": 76.364077404,
      "glass": "804465 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "fl": 100.434927322,
      "glass": "804465 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.3,
      "indexReference": "d",
      "fl": -39.184773051,
      "glass": "728283 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.62004,
      "vd": 36.3,
      "indexReference": "d",
      "fl": -16.068683687,
      "glass": "620363 — coordinate class (supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "fl": 19.310696802,
      "glass": "804465 — coordinate class (supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.6935,
      "vd": 53.3,
      "indexReference": "d",
      "fl": 41.258079567,
      "glass": "694533 — coordinate class (supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 47.8289,
      "d": 5.1295,
      "nd": 1.8042,
      "elemId": 1,
      "sd": 23
    },
    {
      "label": "2",
      "R": 205.9071,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 23
    },
    {
      "label": "3",
      "R": 23.7302,
      "d": 4.971,
      "nd": 1.8042,
      "elemId": 2,
      "sd": 18
    },
    {
      "label": "4",
      "R": 30.4651,
      "d": 1.2378,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.3
    },
    {
      "label": "5",
      "R": 43.8618,
      "d": 3.2,
      "nd": 1.72825,
      "elemId": 3,
      "sd": 14
    },
    {
      "label": "6",
      "R": 16.757,
      "d": 6.2699,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 5.3407,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.501654285
    },
    {
      "label": "8",
      "R": -20.6522,
      "d": 1.5,
      "nd": 1.62004,
      "elemId": 4,
      "sd": 11.8
    },
    {
      "label": "9",
      "R": 19.7851,
      "d": 9.8071,
      "nd": 1.8042,
      "elemId": 5,
      "sd": 15.5
    },
    {
      "label": "10",
      "R": -56.2503,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "11A",
      "R": 88.6043,
      "d": 5.4237,
      "nd": 1.6935,
      "elemId": 6,
      "sd": 16
    },
    {
      "label": "12A",
      "R": -41.1996,
      "d": 36.4275,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    }
  ],
  "asph": {
    "11A": {
      "K": 0.0,
      "A4": 7.584e-06,
      "A6": -1.473e-09,
      "A8": 2.323e-10,
      "A10": 6.597e-14,
      "A12": 0,
      "A14": 0
    },
    "12A": {
      "K": 0.0,
      "A4": 1.656e-05,
      "A6": 2.224e-08,
      "A8": 8.509e-11,
      "A10": 9.492e-13,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {},
  "varLabels": [],
  "groups": [],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "closeFocusM": 1000000000000000.0,
  "focusDescription": "NO_INTERNAL_RECONSTRUCTION. Infinity-only published prescription; close focus is not modeled. Production manual rangefinder focus reaches 0.9 m, but no optical motion law is published.",
  "apertureBlades": 10,
  "nominalFno": 1.53,
  "fstopSeries": [
    1.53,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "yScFill": 0.3
} satisfies LensDataInput;
export default LENS_DATA;
