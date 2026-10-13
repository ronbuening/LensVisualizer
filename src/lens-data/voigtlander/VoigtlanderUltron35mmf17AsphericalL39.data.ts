import type { LensDataInput } from "../../types/optics.js";

/* Patent Example 1, unchanged radii/spacings/indices. No dimensional scaling.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only, closeFocusM=1e15, var empty.
 * Stop position is source table surface 8. Its diameter is calibrated from source f/1.64.
 * NOTE ON SEMI-DIAMETERS: no clear apertures are published. Values are estimated from the drawn outer rims of
 * patent FIG. 1 (scale from the 45 mm vertex track), floor-checked by real-ray trace at f/1.64 and Y = 21.63 mm.
 * L3 is capped at 15.0 mm, just inside its 15.14 mm knife edge (FIG. 1 draws about 15.5 mm). FIG. 1 ends
 * surfaces 1, 9 and 14A at flat annuli (about 11.0, 11.1 and 10.2 mm); the model runs those faces to the drawn
 * outer rim so each element stays square-cut. Rims are not widened to contain off-axis fans.
 * LABELS: the patent names six lens groups 11–16 (claim 1: negative, positive, positive, negative, positive,
 * negative) with stop 17 between the third and fourth; `groups` G1–G6 follow that order. `diagramLabel` carries
 * the FIG. 1 numerals: 11, 12, 15 and 16 are single-lens groups, 13a/13b and 14a/14b the components of the two
 * cemented groups (D1 = group 13, D2 = group 14). Numeral 16a in FIG. 1 is the aspherical surface 14A, not a lens.
 * Glass labels are coordinate classes, not supplier or melt identifications.
 * No rear plate is listed in the patent; none is introduced.
 */
const LENS_DATA = {
  "key": "voigtlander-ultron-35mm-f17-aspherical-l39",
  "maker": "Voigtländer",
  "name": "VOIGTLÄNDER ULTRON 35mm f/1.7 Aspherical L39",
  "subtitle": "JP 2000-321490 A, Example 1 — supported but unconfirmed L39 production correlation",
  "specs": [
    "8 ELEMENTS / 6 GROUPS",
    "DESIGN f = 36.05 mm",
    "DESIGN F/1.64",
    "1 ASPHERICAL SURFACE / 1 ELEMENT",
    "INFINITY PRESCRIPTION ONLY"
  ],
  "focalLengthMarketing": 35,
  "focalLengthDesign": 36.050651859,
  "apertureMarketing": 1.7,
  "apertureDesign": 1.64,
  "lensMounts": [
    "leica-ltm"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2000-321490 A",
  "patentAuthors": [
    "Koji Shiokawa"
  ],
  "patentAssignees": [
    "Cosina Co., Ltd."
  ],
  "patentYear": 2000,
  "elementCount": 8,
  "groupCount": 6,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "11",
      "label": "Element 1",
      "type": "Biconcave Negative",
      "nd": 1.54814,
      "vd": 45.8,
      "indexReference": "d",
      "fl": -31.235028743,
      "glass": "548458 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "12",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": 84.321981862,
      "glass": "773496 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "13a",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "fl": 18.549962574,
      "glass": "804465 — coordinate class (supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "13b",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.64769,
      "vd": 33.8,
      "indexReference": "d",
      "fl": -59.823177388,
      "glass": "648338 — coordinate class (supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "14a",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.69895,
      "vd": 30.1,
      "indexReference": "d",
      "fl": -14.357706721,
      "glass": "699301 — coordinate class (supplier unconfirmed)",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "14b",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "fl": 22.060754463,
      "glass": "804465 — coordinate class (supplier unconfirmed)",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "15",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.8061,
      "vd": 40.7,
      "indexReference": "d",
      "fl": 28.443299734,
      "glass": "806407 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "16",
      "label": "Element 8",
      "type": "Negative Meniscus (1× Asph)",
      "nd": 1.6935,
      "vd": 53.3,
      "indexReference": "d",
      "fl": -55.496612603,
      "glass": "694533 — coordinate class (supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -30.9518,
      "d": 1.5,
      "nd": 1.54814,
      "elemId": 1,
      "sd": 13.1
    },
    {
      "label": "2",
      "R": 38.9732,
      "d": 1.9555,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.1
    },
    {
      "label": "3",
      "R": 113.1426,
      "d": 3.8184,
      "nd": 1.7725,
      "elemId": 2,
      "sd": 14.2
    },
    {
      "label": "4",
      "R": -151.2704,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.2
    },
    {
      "label": "5",
      "R": 27.0894,
      "d": 9.0245,
      "nd": 1.8042,
      "elemId": 3,
      "sd": 15
    },
    {
      "label": "6",
      "R": -28.2716,
      "d": 1.5,
      "nd": 1.64769,
      "elemId": 4,
      "sd": 15
    },
    {
      "label": "7",
      "R": -106.7545,
      "d": 1.6279,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 4.4672,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.97397088
    },
    {
      "label": "9",
      "R": -21.1355,
      "d": 2.0,
      "nd": 1.69895,
      "elemId": 5,
      "sd": 12.6
    },
    {
      "label": "10",
      "R": 19.8518,
      "d": 5.9115,
      "nd": 1.8042,
      "elemId": 6,
      "sd": 12.6
    },
    {
      "label": "11",
      "R": -144.725,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.6
    },
    {
      "label": "12",
      "R": 41.2955,
      "d": 4.2017,
      "nd": 1.8061,
      "elemId": 7,
      "sd": 12.5
    },
    {
      "label": "13",
      "R": -49.2086,
      "d": 6.6933,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.5
    },
    {
      "label": "14A",
      "R": -37.7448,
      "d": 2.0,
      "nd": 1.6935,
      "elemId": 8,
      "sd": 12.4
    },
    {
      "label": "15",
      "R": -2000.0,
      "d": 19.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.4
    }
  ],
  "asph": {
    "14A": {
      "K": 0.0,
      "A4": -5.18095e-05,
      "A6": 2.69712e-08,
      "A8": -1.0663e-09,
      "A10": 4.28036e-12,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {},
  "varLabels": [],
  "groups": [
    {
      "text": "G1 −",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2 +",
      "fromSurface": "3",
      "toSurface": "4"
    },
    {
      "text": "G3 +",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "G4 −",
      "fromSurface": "9",
      "toSurface": "11"
    },
    {
      "text": "G5 +",
      "fromSurface": "12",
      "toSurface": "13"
    },
    {
      "text": "G6 −",
      "fromSurface": "14A",
      "toSurface": "15"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "closeFocusM": 1000000000000000.0,
  "apertureBlades": 10,
  "focusDescription": "Infinity-only published prescription; close focus is not modeled. The production lens focuses manually with rangefinder coupling down to 0.9 m, but the patent publishes no focusing movement.",
  "nominalFno": 1.64,
  "fstopSeries": [
    1.64,
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
