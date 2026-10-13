import type { LensDataInput } from "../../types/optics.js";

/**
 * CN116520542A Example1: source-native mm and d-line Nd/Vd; no optical retuning.
 * Construction-based production association, not an identical manufactured prescription.
 * Physical iris calibrated by exact axial EFL/(2*2.9) ray; all physical rims inferred.
 * NOTE ON SEMI-DIAMETERS: the source has no aperture column. Rims are estimated from patent Figure 1, which is
 * drawn to scale at infinity (24.57 px/mm at 600 dpi), and floor-checked by real-ray trace at f/2.9 in all three
 * focus states. L2 at 14.0, L3 at 13.0 and the L6/L7 doublet at 10.5 follow the figure (13.7, 12.9 and 10.5; maker
 * diagram about 14.2, 13.2 and 10.8/9.9). A second reading of the same figure set the L4/L5 doublet to one height,
 * 11.5 (figure 11.35 for both the L4 block and the L5 tip), and L8 to 9.5 (figure 9.39; axial ray 9.38), so the
 * G2 taper steps as drawn; a 3-D trace shows these two rims pass every ray the other rims pass. The remaining rims
 * agree with the figure within about 4 % and keep their first-authored values. Flat lands the figure draws on
 * concave faces (L4, L6, L10, L12) are not modeled.
 * No aspheres or source cover plate. Published 1.0x/2.0x labels are retained literally.
 * Derived paraxial magnifications, finite conjugates and BFD residuals are separate.
 * D24 is nonmonotonic; source total-track changes are retained, not corrected.
 * No source numerical object distance or continuous cam law is supplied.
 * closeFocusM and intermediate labels are derived display estimates, not production MOD.
 * Unmatched glass spectra remain unknown. APO in the product name is not verified performance.
 */

const LENS_DATA = {
  "key": "laowa-90mm-f28-ultra-macro-apo",
  "name": "LAOWA 90mm f/2.8 2× Ultra Macro APO",
  "maker": "Laowa",
  "subtitle": "CN 116520542 A, Example 1 — construction-based product association; unscaled patent prescription",
  "patentNumber": "CN 116520542 A",
  "patentAuthors": [
    "Dayong Li"
  ],
  "patentAssignees": [
    "Anhui Changgeng Optics Technology Co., Ltd."
  ],
  "patentYear": 2023,
  "elementCount": 13,
  "groupCount": 10,
  "lensMounts": [
    "sony-fe",
    "nikon-z",
    "canon-rf",
    "l-mount",
    "micro-four-thirds"
  ],
  "imageFormat": "135-full-frame",
  "focalLengthMarketing": 90,
  "focalLengthDesign": 87.0575802146175,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.9,
  "nominalFno": 2.9,
  "closeFocusM": 0.2021499316147095,
  "focusPositions": [
    0,
    0.8680068583530708,
    1
  ],
  "publishedStations": {
    "focus": [
      1,
      2
    ]
  },
  "focusDescription": "Floating focus through the patent's three tabulated states: infinity, 1.0× and 2.0×. G1 (L1) is fixed. G2 (L2–L8 with the stop) moves 25.2 mm toward the object by 1.0× and 42.5 mm by 2.0×. G3 (L9–L13) moves 5.9 mm toward the object by 1.0×, then partly returns, ending 1.2 mm objectward of its infinity position at 2.0×, so the back focus D24 rises and then falls. The 1.0× and 2.0× names are the patent's; the paraxial magnifications of those states are −0.997× and −1.960×. The printed gaps lengthen the track by 0.04 and 0.13 mm and are kept as printed. Positions between the three states are linear interpolations, not a cam law, and the 20 cm end of the slider is the calculated object-to-image distance at 2.0×, not Laowa's stated minimum focus.",
  "specs": [
    "13 ELEMENTS / 10 GROUPS",
    "DESIGN f = 87.06 mm",
    "DESIGN F/2.9",
    "2× MACRO",
    "NO ASPHERES"
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.88403,
      "vd": 43.0,
      "indexReference": "d",
      "fl": 624.7431559062597,
      "glass": "Unmatched (native nd=1.88403, vd=43.00; no tight six-vendor coordinate match)"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 87.90458350464681,
      "glass": "H-FK61 (CDGM coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FK61-class coordinate at a position Laowa's construction diagram marks extra-low dispersion; inferred from the glass family, not a patent designation."
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 79.20469800589161,
      "glass": "H-FK61 (CDGM coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FK61-class coordinate at a position Laowa's construction diagram marks extra-low dispersion; inferred from the glass family, not a patent designation."
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.71736,
      "vd": 29.5,
      "indexReference": "d",
      "fl": -16.4035756079121,
      "glass": "717295 — coordinate-equivalent class; supplier unconfirmed",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 53.81348315014821,
      "glass": "923209 — coordinate-equivalent class; supplier unconfirmed",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 43.0,
      "indexReference": "d",
      "fl": -121.76614461512627,
      "glass": "Unmatched (native nd=1.88300, vd=43.00; no tight six-vendor coordinate match)",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 28.845176757508934,
      "glass": "H-FK61 (CDGM coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FK61-class coordinate at a position Laowa's construction diagram marks extra-low dispersion; inferred from the glass family, not a patent designation.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.90366,
      "vd": 31.31,
      "indexReference": "d",
      "fl": 43.33287378920635,
      "glass": "904313 — coordinate-equivalent class; supplier unconfirmed"
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.88177,
      "vd": 40.87,
      "indexReference": "d",
      "fl": -35.40755055104533,
      "glass": "Unmatched (native nd=1.88177, vd=40.87; no tight six-vendor coordinate match)"
    },
    {
      "id": 10,
      "name": "L10",
      "diagramLabel": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.62004,
      "vd": 36.3,
      "indexReference": "d",
      "fl": -22.99075767741715,
      "glass": "620363 — coordinate-equivalent class; supplier unconfirmed",
      "cemented": "D3"
    },
    {
      "id": 11,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.89786,
      "vd": 29.88,
      "indexReference": "d",
      "fl": 17.94975335432676,
      "glass": "Unmatched (native nd=1.89786, vd=29.88; no tight six-vendor coordinate match)",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.83967,
      "vd": 43.3,
      "indexReference": "d",
      "fl": -35.058173653408744,
      "glass": "Unmatched (native nd=1.83967, vd=43.30; no tight six-vendor coordinate match)"
    },
    {
      "id": 13,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "fl": 58.846710519227315,
      "glass": "H-K9L (CDGM coordinate equivalent; supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 133.0577,
      "d": 3.0,
      "nd": 1.88403,
      "elemId": 1,
      "sd": 26
    },
    {
      "label": "2",
      "R": 173.4335,
      "d": 43.8237,
      "nd": 1.0,
      "elemId": 0,
      "sd": 26
    },
    {
      "label": "3",
      "R": 78.3409,
      "d": 3.7642,
      "nd": 1.497,
      "elemId": 2,
      "sd": 14
    },
    {
      "label": "4",
      "R": -97.1942,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "5",
      "R": 27.6141,
      "d": 3.878,
      "nd": 1.497,
      "elemId": 3,
      "sd": 13
    },
    {
      "label": "6",
      "R": 88.1944,
      "d": 5.5038,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13
    },
    {
      "label": "7",
      "R": -53.6707,
      "d": 1.2,
      "nd": 1.71736,
      "elemId": 4,
      "sd": 11.5
    },
    {
      "label": "8",
      "R": 15.2125,
      "d": 3.2,
      "nd": 1.92286,
      "elemId": 5,
      "sd": 11.5
    },
    {
      "label": "9",
      "R": 19.7161,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "10",
      "R": 18.935,
      "d": 2.4,
      "nd": 1.883,
      "elemId": 6,
      "sd": 10.5
    },
    {
      "label": "11",
      "R": 15.1428,
      "d": 5.0,
      "nd": 1.497,
      "elemId": 7,
      "sd": 10.5
    },
    {
      "label": "12",
      "R": -239.5922,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.5
    },
    {
      "label": "13",
      "R": 171.9629,
      "d": 2.6984,
      "nd": 1.90366,
      "elemId": 8,
      "sd": 9.5
    },
    {
      "label": "14",
      "R": -50.3265,
      "d": 1.4,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.456025914341897
    },
    {
      "label": "16",
      "R": 95.3144,
      "d": 0.8,
      "nd": 1.88177,
      "elemId": 9,
      "sd": 8.1
    },
    {
      "label": "17",
      "R": 23.4253,
      "d": 2.6819,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.1
    },
    {
      "label": "18",
      "R": -34.5223,
      "d": 2.0,
      "nd": 1.62004,
      "elemId": 10,
      "sd": 12
    },
    {
      "label": "19",
      "R": 24.8202,
      "d": 5.0,
      "nd": 1.89786,
      "elemId": 11,
      "sd": 12
    },
    {
      "label": "20",
      "R": -41.5781,
      "d": 13.2713,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "21",
      "R": -21.6591,
      "d": 1.2,
      "nd": 1.83967,
      "elemId": 12,
      "sd": 14
    },
    {
      "label": "22",
      "R": -84.0437,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "23",
      "R": 59.6957,
      "d": 6.5,
      "nd": 1.5168,
      "elemId": 13,
      "sd": 17
    },
    {
      "label": "24",
      "R": -59.6957,
      "d": 19.682,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17
    }
  ],
  "asph": {},
  "var": {
    "2": [
      43.8237,
      18.623,
      1.2958
    ],
    "STO": [
      1.2,
      20.494,
      42.518
    ],
    "24": [
      19.682,
      25.6255,
      21.0222
    ]
  },
  "varLabels": [
    [
      "2",
      "D2 (G1–G2)"
    ],
    [
      "STO",
      "D15 (STO–G3)"
    ],
    [
      "24",
      "D24 (BF)"
    ]
  ],
  "groups": [
    {
      "text": "G1 (FIXED)",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2 (FOCUS)",
      "fromSurface": "3",
      "toSurface": "STO"
    },
    {
      "text": "G3 (AUX)",
      "fromSurface": "16",
      "toSurface": "24"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "D2",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "D3",
      "fromSurface": "18",
      "toSurface": "20"
    }
  ],
  "fstopSeries": [
    2.9,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 13,
  "scFill": 0.72,
  "yScFill": 0.62
} satisfies LensDataInput;

export default LENS_DATA;
