import type { LensDataInput } from "../../types/optics.js";

/**
 * US 3,740,120 A, Table III (claim 3). The patent is normalized to f = 1; every radius and axial distance
 * is the printed value scaled uniformly by 28 to millimetres.
 * Production correlation: first-version Leica Elmarit-R 28mm f/2.8 (1970). Table III is the best-supported
 * of the patent's three tables against the patent figure; which table was manufactured is not established.
 * Eight air-spaced spherical singlets. Indices and Abbe numbers are the patent's e-line values (ne, nu-e).
 * Stop: the patent places the diaphragm in d8 without a dimension. It is set 2.0930 mm behind surface 8
 * (0.70 of d8), following a PhotonsToPhotos reconstruction; the patent figure draws it at 0.72 +/- 0.07 of d8.
 * The stop semi-diameter is set by real-ray tracing of the axial f/2.8 beam.
 * Semi-diameters are not printed. They are inferred from the same PhotonsToPhotos reconstruction and checked
 * by ray tracing. Surfaces 12 and 13 use 7.8 mm instead of 8.255 mm (the L6/L7 edge-contact value) so the
 * facing rims stay inside the default air-gap allowance of 0.90. The axial f/2.8 beam and the 38-degree chief
 * ray still clear; the cost is 2 to 4 percentage points of off-axis transmission at f/2.8.
 * Back focus is the printed 1.373 f (38.444 mm); the paraxial value is 38.437 mm.
 * The projection block declares the patent's 76-degree field (38-degree chief rays traced); rays are still
 * clipped by the modeled apertures.
 * The modeled front diameter of 35.38 mm (1.26 f) is slightly above the "smaller than 1.25 f" that the patent
 * text says is possible; no aperture is printed for Table III.
 * Focus: unit focusing. The patent gives one infinity prescription; the 0.30 m state is a calculated
 * whole-lens extension of 3.5947 mm (last gap 42.0387 mm, magnification -0.128), not a printed value.
 * Source note: claim 3 reprints r5 as -2.6916; Table III prints +2.6916 and the printed surface power
 * (+0.1817) agrees with the positive sign. The stated f, back focus and field are reproduced within
 * printed precision.
 * No cover plates or cemented interfaces are modeled.
 */

const LENS_DATA = {
  "key": "elmarit-r-28f28",
  "maker": "Leica",
  "name": "LEICA ELMARIT-R 28mm f/2.8",
  "subtitle": "US 3,740,120 A, Table III — qualified production correlation",
  "specs": [
    "8 ELEMENTS / 8 GROUPS",
    "DESIGN f = 28.00 mm",
    "DESIGN F/2.8",
    "ALL SPHERICAL",
    "UNIT FOCUS"
  ],
  "focalLengthMarketing": 28,
  "focalLengthDesign": 27.99883069375396,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.8,
  "lensMounts": [
    "leica-r"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "US 3,740,120 A",
  "patentAuthors": [
    "Rudolf Rühl"
  ],
  "patentAssignees": [
    "Ernst Leitz GmbH"
  ],
  "patentYear": 1973,
  "elementCount": 8,
  "groupCount": 8,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "LI",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.48914,
      "vd": 70.22,
      "indexReference": "e",
      "fl": -95.38291343579559,
      "glass": "Unmatched (FK5-class low-index crown; supplier and melt unproven)",
      "apd": false,
      "role": "Object-facing negative meniscus of the net-negative front group."
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "LII",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.67133,
      "vd": 41.64,
      "indexReference": "e",
      "fl": 70.96767856606199,
      "glass": "Unmatched (BASF6-class barium flint; supplier and melt unproven)",
      "apd": false,
      "role": "Biconvex positive element between the two front negative menisci."
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "LIII",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.48914,
      "vd": 70.22,
      "indexReference": "e",
      "fl": -30.28555772571423,
      "glass": "Unmatched (FK5-class low-index crown; supplier and melt unproven)",
      "apd": false,
      "role": "Second object-facing negative meniscus, followed by the main air separation."
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "LIV",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.67341,
      "vd": 46.82,
      "indexReference": "e",
      "fl": 72.54205969182219,
      "glass": "Unmatched (BAF10/BAFN10-class barium flint; supplier and melt unproven)",
      "apd": false,
      "role": "Positive meniscus before the diaphragm, concave toward the stop."
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "LV",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.69401,
      "vd": 54.48,
      "indexReference": "e",
      "fl": 37.71400985024495,
      "glass": "Unmatched (LAK9-class lanthanum crown; supplier and melt unproven)",
      "apd": false,
      "role": "Biconvex positive element immediately after the diaphragm."
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "LVI",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.7918,
      "vd": 25.87,
      "indexReference": "e",
      "fl": -23.473293899087828,
      "glass": "Unmatched (SF56-class dense flint; supplier and melt unproven)",
      "apd": false,
      "role": "Biconcave negative element between the two positive rear subgroups."
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "LVII",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.69401,
      "vd": 54.48,
      "indexReference": "e",
      "fl": 55.84698001437243,
      "glass": "Unmatched (LAK9-class lanthanum crown; supplier and melt unproven)",
      "apd": false,
      "role": "Image-side positive meniscus, concave toward the diaphragm."
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "LVIII",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.69401,
      "vd": 54.48,
      "indexReference": "e",
      "fl": 32.36958575857208,
      "glass": "Unmatched (LAK9-class lanthanum crown; supplier and melt unproven)",
      "apd": false,
      "role": "Rear biconvex positive element completing the second positive subgroup."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 31.2704,
      "d": 2.6264,
      "nd": 1.48914,
      "elemId": 1,
      "sd": 17.69
    },
    {
      "label": "2",
      "R": 18.2056,
      "d": 6.496,
      "nd": 1,
      "elemId": 0,
      "sd": 13.85
    },
    {
      "label": "3",
      "R": 70.3752,
      "d": 2.9764,
      "nd": 1.67133,
      "elemId": 2,
      "sd": 13.77
    },
    {
      "label": "4",
      "R": -144.9868,
      "d": 0.1008,
      "nd": 1,
      "elemId": 0,
      "sd": 13.77
    },
    {
      "label": "5",
      "R": 75.3648,
      "d": 1.8452,
      "nd": 1.48914,
      "elemId": 3,
      "sd": 11.8
    },
    {
      "label": "6",
      "R": 12.2808,
      "d": 9.324,
      "nd": 1,
      "elemId": 0,
      "sd": 8.3
    },
    {
      "label": "7",
      "R": 22.582,
      "d": 6.9972,
      "nd": 1.67341,
      "elemId": 4,
      "sd": 7.79
    },
    {
      "label": "8",
      "R": 36.7584,
      "d": 2.093,
      "nd": 1,
      "elemId": 0,
      "sd": 7.79
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 0.9142,
      "nd": 1,
      "elemId": 0,
      "sd": 6.750736173297881
    },
    {
      "label": "9",
      "R": 60.0908,
      "d": 3.7604,
      "nd": 1.69401,
      "elemId": 5,
      "sd": 7.79
    },
    {
      "label": "10",
      "R": -45.1836,
      "d": 2.9484,
      "nd": 1,
      "elemId": 0,
      "sd": 7.79
    },
    {
      "label": "11",
      "R": -32.0208,
      "d": 1.1032,
      "nd": 1.7918,
      "elemId": 6,
      "sd": 8.47
    },
    {
      "label": "12",
      "R": 44.9736,
      "d": 1.6044,
      "nd": 1,
      "elemId": 0,
      "sd": 7.8
    },
    {
      "label": "13",
      "R": -41.1516,
      "d": 2.2064,
      "nd": 1.69401,
      "elemId": 7,
      "sd": 7.8
    },
    {
      "label": "14",
      "R": -20.398,
      "d": 0.1008,
      "nd": 1,
      "elemId": 0,
      "sd": 8.82
    },
    {
      "label": "15",
      "R": 117.3928,
      "d": 2.9988,
      "nd": 1.69401,
      "elemId": 8,
      "sd": 10.61
    },
    {
      "label": "16",
      "R": -27.4904,
      "d": 38.444,
      "nd": 1,
      "elemId": 0,
      "sd": 10.61
    }
  ],
  "asph": {},
  "var": {
    "16": [38.444, 42.0387]
  },
  "varLabels": [["16", "BF"]],
  "groups": [
    {
      "text": "NEGATIVE FRONT GROUP",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "POSITIVE REAR GROUP",
      "fromSurface": "7",
      "toSurface": "16"
    }
  ],
  "doublets": [],
  "closeFocusM": 0.3,
  "focusDescription": "Unit focusing — the whole optical assembly moves forward; the 0.30 m extension (3.59 mm) is calculated, not printed.",
  "nominalFno": 2.8,
  "fstopSeries": [
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.3,
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 76,
    "maxTraceFieldDeg": 38
  }
} satisfies LensDataInput;

export default LENS_DATA;
