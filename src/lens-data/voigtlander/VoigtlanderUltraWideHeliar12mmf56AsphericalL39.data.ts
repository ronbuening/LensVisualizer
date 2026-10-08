import type { LensDataInput } from "../../types/optics.js";

/* JP2001124985A Example 1: every source length scaled by s=12.
 * A_p is transformed as A_p/12^(p-1); K, nd and vd remain unchanged.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only, closeFocusM=1e15, var empty.
 * Stop position is source table surface 13. Radius is calibrated from source f/5.66.
 * Lens semi-diameters are estimated from patent FIG. 1 (optical extent of each surface, drawn to the x12 scale)
 * and the Cosina section, floor-checked by exact real-ray trace at f/5.66 and the 60.5-degree field.
 * Surface 2 sits at its rim-slope limit and surface 4 at its cross-gap limit. Surface 3 is the 12.6 mm blank of
 * lens 12 that FIG. 1 and the Cosina section both draw; gapSagFrac 0.92 is the smallest two-decimal cross-gap
 * limit that admits it (combined sag 6.06 of the 6.60 mm gap; the faces stay 0.54 mm apart).
 * Surfaces 11 and 12 carry the 5.1 mm rim FIG. 1 draws for lens 23, which stands taller than the 31+32 doublet.
 * Surface 17: FIG. 1 ends the concave of lens 41 at 4.8 mm and continues the face as a flat annulus to the 8.25 mm
 * rim, a flat-fronted block. The outline joins the two rims of an element with a straight edge, so the block
 * cannot be drawn; 5.2 mm is the largest value that keeps the front rim of lens 41 behind the rear rim of lens 32
 * (sag 1.693 mm against 1.704 mm), and at 7.5 mm the face wraps the doublet as a bowl.
 * NAMES: the patent gives reference numerals, not letters. FIG. 1 and paragraphs 0010-0012 call the four lens
 * groups 10, 20, 30, 40 (bracketed here as G1-G4 with the claimed power signs), the lenses 11-13, 21-23, 31-32 and
 * 41-42, the stop 50 and the aspherical surface 42b. Elements are named L11 ... L42 after those numerals and the
 * diagram prints the bare numerals; D1 is the cemented pair 31+32 and D2 the cemented pair 41+42.
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
      "name": "L11",
      "diagramLabel": "11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -37.934897263,
      "glass": "773496 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 11: the first of the two negative menisci, convex to the object, that open the negative first lens group 10. With lens 12 it forms the pair whose combined focal length f12 (−10.45 mm) the patent bounds by 0.7 < |f12|/f < 1.5."
    },
    {
      "id": 2,
      "name": "L12",
      "diagramLabel": "12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -16.89218562,
      "glass": "773496 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 12: the second negative meniscus of the first lens group 10, convex to the object, and the stronger of the front pair that sets f12."
    },
    {
      "id": 3,
      "name": "L13",
      "diagramLabel": "13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.5,
      "indexReference": "d",
      "fl": 34.288050337,
      "glass": "805255 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 13: the biconvex positive lens that closes the first lens group 10; the group stays net negative (f = −21.53 mm)."
    },
    {
      "id": 4,
      "name": "L21",
      "diagramLabel": "21",
      "label": "Element 21",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "fl": -37.181467472,
      "glass": "847238 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 21: the negative meniscus, convex to the object, that opens the positive second lens group 20."
    },
    {
      "id": 5,
      "name": "L22",
      "diagramLabel": "22",
      "label": "Element 22",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "fl": 14.530050906,
      "glass": "517642 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 22: the first of the two biconvex positive lenses of the second lens group 20, whose focal length f2 (+12.74 mm) the patent bounds by 0.7 < f2/f < 2.5."
    },
    {
      "id": 6,
      "name": "L23",
      "diagramLabel": "23",
      "label": "Element 23",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.4,
      "indexReference": "d",
      "fl": 23.430937428,
      "glass": "487704 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 23: the second biconvex positive lens of the second lens group 20, directly ahead of the stop 50."
    },
    {
      "id": 7,
      "name": "L31",
      "diagramLabel": "31",
      "label": "Element 31",
      "type": "Positive Meniscus",
      "nd": 1.834,
      "vd": 37.3,
      "indexReference": "d",
      "fl": 17.811962871,
      "glass": "834373 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 31: positive meniscus, concave to the object, directly behind the stop 50; cemented to lens 32 to form the negative third lens group 30.",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L32",
      "diagramLabel": "32",
      "label": "Element 32",
      "type": "Negative Meniscus",
      "nd": 1.71736,
      "vd": 29.5,
      "indexReference": "d",
      "fl": -14.366252856,
      "glass": "717295 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 32: negative meniscus, concave to the object, cemented behind lens 31; the pair, the third lens group 30, is net negative (f = −58.24 mm).",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L41",
      "diagramLabel": "41",
      "label": "Element 41",
      "type": "Biconcave Negative",
      "nd": 1.62004,
      "vd": 36.3,
      "indexReference": "d",
      "fl": -14.169427405,
      "glass": "620363 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 41: biconcave lens cemented ahead of lens 42; the pair, the fourth lens group 40, is weakly positive (f = +123.34 mm). Its image-side face is almost flat (R = 1759.7 mm).",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L42",
      "diagramLabel": "42",
      "label": "Element 42",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.58913,
      "vd": 61.3,
      "indexReference": "d",
      "fl": 15.797920878,
      "glass": "589613 — coordinate class (supplier unconfirmed)",
      "role": "Patent lens 42: biconvex lens cemented behind lens 41. Its image-side surface 42b is the only aspherical surface of the design, the one the claim requires in the fourth lens group.",
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
      "sd": 5.1
    },
    {
      "label": "12",
      "R": -14.76,
      "d": 0.96,
      "nd": 1.0,
      "elemId": 0,
      "sd": 5.1
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
      "sd": 5.2
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
      "text": "G1 (−)",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2 (+)",
      "fromSurface": "7",
      "toSurface": "12"
    },
    {
      "text": "G3 (−)",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "G4 (+)",
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
  "focusDescription": "Infinity only. The patent tabulates one prescription and no finite-focus spacings, so close focus is not modeled and every air gap stays fixed. The production lens is scale-focused by hand to 0.3 m with no rangefinder coupling; how its optics move is not published.",
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
