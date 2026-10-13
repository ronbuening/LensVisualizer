import type { LensDataInput } from "../../types/optics.js";

/**
 * JP 2015-075501 A, Numerical Example 1; Sigma Corporation / Yukihiro Yamamoto.
 * Selected correlation: Olympus M.Zuiko Digital 25mm F1.8, not maker-confirmed.
 * Nine lens elements / seven air-separated groups; three aspheric surfaces.
 * Scale 1; patent d-line 587.56 nm. Physical rear filter: 4 mm, in rearPlates.
 * PUBLISHED focus endpoints: infinity and 250 mm; G2 moves objectward 2.9383 mm.
 * Printed equation ends at A10; tabulated A12 values retained as A12*y^12.
 * Stop position published; its diameter is calibrated from rounded f/1.82.
 * Lens semi-diameters are estimates from ray geometry and Fig. 1 (PDF p.24, drawn to the
 * prescription's own scale), floor-checked by real-ray trace at infinity and 250 mm.
 * Concave-side SDs follow the drawn curve ends where the full-height rim would wrap the next
 * element or the stop: surface 2 is 12.0 mm (figure 12.0), 7 is 7.8 (figure 7.1), 9 is 6.3
 * (figure 5.95). The renderer bevels those rims (L1, L4, L5). L8 and L9 are squared at the drawn
 * outer rims instead (14/15 = 10.0, figure 9.98; 16/17 = 10.5, figure 10.66); their drawn rear
 * lands start at 8.9-9.0 and 9.6 mm and cannot be rendered.
 * Group labels use the patent's sub-group notation (G1a, G1b, G1c, G2, G3a, G3b); the patent names
 * no individual elements, so L1-L9 are sequential.
 * Glass labels name coordinate-equal HOYA catalog rows as dispersion proxies, not confirmed
 * patent melts; no catalog line index is stored on the elements.
 * Raw weak-G3/pupil discrepancies and source-rounding limits remain disclosed.
 */

const LENS_DATA = {
  "key": "olympus-mzuiko-25mm-f18",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL 25mm f/1.8",
  "subtitle": "JP 2015-075501 A, Numerical Example 1 (Sigma); selected Olympus correlation, not manufacturer-confirmed",
  "specs": [
    "9 ELEMENTS / 7 GROUPS",
    "DESIGN f = 24.53 mm",
    "DESIGN F/1.82",
    "2ω = 48.10°",
    "3 ASPHERICAL SURFACES / 2 ELEMENTS"
  ],
  "focalLengthMarketing": 25,
  "focalLengthDesign": 24.530103702140927,
  "apertureMarketing": 1.8,
  "apertureDesign": 1.82,
  "lensMounts": [
    "micro-four-thirds"
  ],
  "imageFormat": "four-thirds",
  "imageCircleMm": 21.6,
  "patentNumber": "JP 2015-075501 A",
  "patentAuthors": [
    "Yukihiro Yamamoto"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2015,
  "elementCount": 9,
  "groupCount": 7,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.62588,
      "vd": 35.74,
      "fl": -32.844605,
      "glass": "E-F1 (HOYA equivalent)",
      "indexReference": "d",
      "role": "G1a (negative sub-group of the fixed, positive G1): negative meniscus, convex to the object."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.881,
      "vd": 40.14,
      "fl": 23.196267,
      "glass": "TAFD33 (HOYA equivalent)",
      "indexReference": "d",
      "role": "G1b (positive sub-group of G1): biconvex positive lens; its image-side surface is very weak (R = -1000 mm)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive (1x Asph)",
      "nd": 1.8061,
      "vd": 40.73,
      "fl": 25.958471,
      "glass": "NBFD13 (HOYA equivalent)",
      "indexReference": "d",
      "cemented": "D1",
      "role": "G1c (negative cemented sub-group of G1): biconvex positive front member of doublet D1, with L4; object-side surface aspheric."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.60342,
      "vd": 38.01,
      "fl": -20.197695,
      "glass": "E-F5 (HOYA equivalent)",
      "indexReference": "d",
      "cemented": "D1",
      "role": "G1c: biconcave negative rear member of doublet D1, with L3; its concave rear surface faces the stop."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.69895,
      "vd": 30.05,
      "fl": -10.866943,
      "glass": "E-FD15 (HOYA equivalent)",
      "indexReference": "d",
      "cemented": "D2",
      "role": "G2 (focus, positive): biconcave negative front member of cemented doublet D2, with L6. Moves objectward with L6 and L7 for close focus."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.881,
      "vd": 40.14,
      "fl": 13.56298,
      "glass": "TAFD33 (HOYA equivalent)",
      "indexReference": "d",
      "cemented": "D2",
      "role": "G2 (focus): biconvex positive rear member of cemented doublet D2, with L5."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive (2x Asph)",
      "nd": 1.6935,
      "vd": 53.2,
      "fl": 23.141445,
      "glass": "M-LAC130 (HOYA equivalent)",
      "indexReference": "d",
      "role": "G2 (focus): biconvex positive lens with both surfaces aspheric; last lens of the moving group."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.74077,
      "vd": 27.76,
      "fl": -39.036595,
      "glass": "E-FD13 (HOYA equivalent)",
      "indexReference": "d",
      "role": "G3a (negative sub-group of the fixed, weakly negative G3): negative meniscus, convex to the object."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.83481,
      "vd": 42.72,
      "fl": 42.597165,
      "glass": "TAFD5F (HOYA equivalent)",
      "indexReference": "d",
      "role": "G3b (positive sub-group of G3): positive meniscus, convex to the object; last lens ahead of the rear filter."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 118.2461,
      "d": 1.0,
      "nd": 1.62588,
      "elemId": 1,
      "sd": 14.5
    },
    {
      "label": "2",
      "R": 17.4553,
      "d": 3.736,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "3",
      "R": 20.8049,
      "d": 5.8693,
      "nd": 1.881,
      "elemId": 2,
      "sd": 13.5
    },
    {
      "label": "4",
      "R": -1000.0,
      "d": 0.3844,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.5
    },
    {
      "label": "5A",
      "R": 34.7639,
      "d": 4.3008,
      "nd": 1.8061,
      "elemId": 3,
      "sd": 11
    },
    {
      "label": "6",
      "R": -49.6628,
      "d": 0.8,
      "nd": 1.60342,
      "elemId": 4,
      "sd": 11
    },
    {
      "label": "7",
      "R": 16.2493,
      "d": 3.2123,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.8
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 8.0395,
      "nd": 1.0,
      "elemId": 0,
      "sd": 6.0410729478195
    },
    {
      "label": "9",
      "R": -10.7721,
      "d": 0.8,
      "nd": 1.69895,
      "elemId": 5,
      "sd": 6.3
    },
    {
      "label": "10",
      "R": 26.5433,
      "d": 4.0014,
      "nd": 1.881,
      "elemId": 6,
      "sd": 8.75
    },
    {
      "label": "11",
      "R": -20.1977,
      "d": 0.4762,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.75
    },
    {
      "label": "12A",
      "R": 60.1666,
      "d": 4.0601,
      "nd": 1.6935,
      "elemId": 7,
      "sd": 9.75
    },
    {
      "label": "13A",
      "R": -21.2817,
      "d": 1.6,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.75
    },
    {
      "label": "14",
      "R": 43.3775,
      "d": 0.8,
      "nd": 1.74077,
      "elemId": 8,
      "sd": 10
    },
    {
      "label": "15",
      "R": 17.2144,
      "d": 1.4476,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10
    },
    {
      "label": "16",
      "R": 20.1587,
      "d": 2.9593,
      "nd": 1.83481,
      "elemId": 9,
      "sd": 10.5
    },
    {
      "label": "17",
      "R": 43.4347,
      "d": 12.263,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.5
    }
  ],
  "rearPlates": [
    {
      "label": "F",
      "thicknessMm": 4,
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "BSC7 (HOYA equivalent)",
      "gapAfterMm": 1,
      "source": "JP2015075501A Numerical Example1, PDF16-17, source surfaces18-19"
    }
  ],
  "asph": {
    "5A": {
      "K": 0.0,
      "A4": -7.37304e-06,
      "A6": 2.98804e-08,
      "A8": -9.7982e-10,
      "A10": 1.28606e-11,
      "A12": -5.25852e-14,
      "A14": 0
    },
    "12A": {
      "K": 0.0,
      "A4": -9.7575e-06,
      "A6": 4.13773e-08,
      "A8": 9.86608e-10,
      "A10": -5.04731e-11,
      "A12": 2.9381e-13,
      "A14": 0
    },
    "13A": {
      "K": 0.0,
      "A4": 2.85098e-05,
      "A6": 2.22304e-08,
      "A8": 1.48907e-09,
      "A10": -3.83056e-11,
      "A12": 1.38708e-13,
      "A14": 0
    }
  },
  "var": {
    "STO": [
      8.0395,
      5.1012
    ],
    "13A": [
      1.6,
      4.5383
    ]
  },
  "varLabels": [
    [
      "STO",
      "D8"
    ],
    [
      "13A",
      "D13"
    ]
  ],
  "groups": [
    {
      "text": "G1a",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G1b",
      "fromSurface": "3",
      "toSurface": "4"
    },
    {
      "text": "G1c",
      "fromSurface": "5A",
      "toSurface": "7"
    },
    {
      "text": "G2 FOCUS",
      "fromSurface": "9",
      "toSurface": "13A"
    },
    {
      "text": "G3a",
      "fromSurface": "14",
      "toSurface": "15"
    },
    {
      "text": "G3b",
      "fromSurface": "16",
      "toSurface": "17"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5A",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "focusDescription": "PUBLISHED inner focus: G2 (L5-L7, surfaces 9-13) moves 2.9383 mm toward the object from infinity to the patent's 250 mm shooting distance. G1 (G1a-G1c), the stop, G3 (G3a, G3b) and the image plane stay fixed. Intermediate gaps are interpolated linearly between the two published states.",
  "closeFocusM": 0.25,
  "nominalFno": 1.82,
  "fstopSeries": [
    1.82,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 7,
  "yScFill": 0.55
} satisfies LensDataInput;
export default LENS_DATA;
