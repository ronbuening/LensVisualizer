import type { LensDataInput } from "../../types/optics.js";

/* JP2001124985A Example 1: every source length scaled by s=12.
 * A_p is transformed as A_p/12^(p-1); K, nd and vd remain unchanged.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only, closeFocusM=1e15, var empty.
 * Stop position is source table surface 13. Radius is calibrated from source f/5.66.
 * Lens semi-diameters are estimated from patent FIG. 1 (optical extent of each surface, drawn to the x12 scale)
 * and the Cosina section, floor-checked by exact real-ray trace at f/5.66 and the 60.5-degree field.
 * Surface 2 sits at its rim-slope limit and surface 4 at its cross-gap limit. Surface 3 is the 12.6 mm L2 blank
 * that FIG. 1 and the Cosina section both draw; gapSagFrac 0.92 is the smallest two-decimal cross-gap limit that
 * admits it (combined sag 6.06 of the 6.60 mm gap; the faces stay 0.54 mm apart).
 * Surface 17 stops where FIG. 1 ends the concave and starts L9's flat front annulus.
 * Glass labels are coordinate classes, not supplier/melt identifications.
 * 121-degree rectilinear coverage is manufacturer/source context, not a no-vignetting claim.
 * No rear plate is listed in the patent; none is introduced.
 */
const LENS_DATA = {
  "key": "voigtlander-ultra-wide-heliar-12mm-f56-aspherical-l39",
  "maker": "Voigtländer",
  "name": "VOIGTLÄNDER ULTRA WIDE-HELIAR 12mm f/5.6 Aspherical L39",
  "subtitle": "JP 2001-124985 A, Example 1 (scaled ×12) — supported but unconfirmed L39 production correlation",
  "specs": [
    "10 ELEMENTS / 8 GROUPS",
    "DESIGN f = 11.98 mm",
    "DESIGN F/5.66",
    "2ω = 121°",
    "1 ASPHERICAL SURFACE / 1 ELEMENT",
    "INFINITY PRESCRIPTION ONLY"
  ],
  "focalLengthMarketing": 12,
  "focalLengthDesign": 11.977256745,
  "apertureMarketing": 5.6,
  "apertureDesign": 5.66,
  "lensMounts": [
    "leica-ltm"
  ],
  "imageFormat": "135-full-frame",
  "gapSagFrac": 0.92,
  "patentNumber": "JP 2001-124985 A",
  "patentAuthors": [
    "Yoshihisa Yomogida"
  ],
  "patentAssignees": [
    "Cosina Co., Ltd."
  ],
  "patentYear": 2001,
  "elementCount": 10,
  "groupCount": 8,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -37.934897263,
      "glass": "773496 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -16.89218562,
      "glass": "773496 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.5,
      "indexReference": "d",
      "fl": 34.288050337,
      "glass": "805255 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "fl": -37.181467472,
      "glass": "847238 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "fl": 14.530050906,
      "glass": "517642 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.4,
      "indexReference": "d",
      "fl": 23.430937428,
      "glass": "487704 — coordinate class (supplier unconfirmed)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.834,
      "vd": 37.3,
      "indexReference": "d",
      "fl": 17.811962871,
      "glass": "834373 — coordinate class (supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.71736,
      "vd": 29.5,
      "indexReference": "d",
      "fl": -14.366252856,
      "glass": "717295 — coordinate class (supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.62004,
      "vd": 36.3,
      "indexReference": "d",
      "fl": -14.169427405,
      "glass": "620363 — coordinate class (supplier unconfirmed)",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.58913,
      "vd": 61.3,
      "indexReference": "d",
      "fl": 15.797920878,
      "glass": "589613 — coordinate class (supplier unconfirmed)",
      "cemented": "D2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 23.496,
      "d": 1.92,
      "nd": 1.7725,
      "elemId": 1,
      "sd": 17
    },
    {
      "label": "2",
      "R": 12.576,
      "d": 6.6000000000000005,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.3
    },
    {
      "label": "3",
      "R": 64.32000000000001,
      "d": 1.7999999999999998,
      "nd": 1.7725,
      "elemId": 2,
      "sd": 12.6
    },
    {
      "label": "4",
      "R": 10.716000000000001,
      "d": 4.32,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.5
    },
    {
      "label": "5",
      "R": 86.712,
      "d": 3.3600000000000003,
      "nd": 1.80518,
      "elemId": 3,
      "sd": 10
    },
    {
      "label": "6",
      "R": -39.804,
      "d": 2.16,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10
    },
    {
      "label": "7",
      "R": 12.611999999999998,
      "d": 1.92,
      "nd": 1.84666,
      "elemId": 4,
      "sd": 8
    },
    {
      "label": "8",
      "R": 8.376,
      "d": 2.04,
      "nd": 1.0,
      "elemId": 0,
      "sd": 6.5
    },
    {
      "label": "9",
      "R": 10.992,
      "d": 5.5200000000000005,
      "nd": 1.5168,
      "elemId": 5,
      "sd": 6.9
    },
    {
      "label": "10",
      "R": -19.644,
      "d": 0.6000000000000001,
      "nd": 1.0,
      "elemId": 0,
      "sd": 6.9
    },
    {
      "label": "11",
      "R": 47.147999999999996,
      "d": 3.0,
      "nd": 1.48749,
      "elemId": 6,
      "sd": 4.8
    },
    {
      "label": "12",
      "R": -14.76,
      "d": 0.96,
      "nd": 1.0,
      "elemId": 0,
      "sd": 4.8
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 2.04,
      "nd": 1.0,
      "elemId": 0,
      "sd": 1.801254309
    },
    {
      "label": "14",
      "R": -21.012,
      "d": 2.2800000000000002,
      "nd": 1.834,
      "elemId": 7,
      "sd": 4.2
    },
    {
      "label": "15",
      "R": -9.132,
      "d": 0.96,
      "nd": 1.71736,
      "elemId": 8,
      "sd": 4.2
    },
    {
      "label": "16",
      "R": -83.69999999999999,
      "d": 1.56,
      "nd": 1.0,
      "elemId": 0,
      "sd": 4.9
    },
    {
      "label": "17",
      "R": -8.832,
      "d": 1.2000000000000002,
      "nd": 1.62004,
      "elemId": 9,
      "sd": 4.7
    },
    {
      "label": "18",
      "R": 1759.704,
      "d": 4.32,
      "nd": 1.58913,
      "elemId": 10,
      "sd": 8.2
    },
    {
      "label": "19A",
      "R": -9.348,
      "d": 13.559999999999999,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.2
    }
  ],
  "asph": {
    "19A": {
      "K": 0.0,
      "A4": 0.00017737268518518517,
      "A6": 5.28469007201646e-06,
      "A8": -3.069898119570188e-08,
      "A10": 3.174553737282807e-10,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {},
  "varLabels": [],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2",
      "fromSurface": "7",
      "toSurface": "12"
    },
    {
      "text": "G3",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "G4",
      "fromSurface": "17",
      "toSurface": "19A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "D2",
      "fromSurface": "17",
      "toSurface": "19A"
    }
  ],
  "closeFocusM": 1000000000000000.0,
  "apertureBlades": 9,
  "focusDescription": "NO_INTERNAL_RECONSTRUCTION. Infinity-only published prescription; close focus is not modeled. Production manual scale focus reaches 0.3 m without rangefinder coupling; no optical motion law is published.",
  "nominalFno": 5.66,
  "fstopSeries": [
    5.66,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 121,
    "maxTraceFieldDeg": 60.5
  },
  "yScFill": 0.3
} satisfies LensDataInput;
export default LENS_DATA;
