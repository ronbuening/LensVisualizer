/* JP 2019-191502 A, Example 1. 9 elements / 8 groups; six aspheres.
Research correlation with ZEISS Batis 2/40 CF; not manufacturer-confirmed.
PUBLISHED focus endpoints; no reconstructed marketing MFD.
Scale 1.0. Patent epsilon maps to K=epsilon-1. All published nonzero coefficients retained.
Physical stop inferred by exact on-axis F/2.0834 calibration, not an independently published aperture.
NOTE ON SEMI-DIAMETERS: the patent prints no clear apertures. Rims are estimated from patent FIG. 1 (infinity
panel, 11.2 px/mm at 400 dpi; scale set by 16 vertex crossings, and the drawn stop opening reads 12.1 mm against the
calibrated 12.159 mm): L2 16.0, L3 13.2, L4 14.7, L6 12.3, L7/L8 13.2, L9 rear 14.2. L1 (19.2; figure 19.6),
L5 (13.3; figure 12.6) and the L9 front (13.0; drawn curve ends 12.6 below a flat annulus) are the as-authored values,
within measurement noise of the figure. Square-cut elements carry one height on both faces. Floor-checked by real-ray
trace: the stop-filling axial beam clears every rim from infinity to the close endpoint (least margin 0.03 mm at 7A
at close focus) and the corner chief ray is clear; off-axis vignetting at the drawn rims is retained (the patent's own
FIG. 2B fans are truncated more than the model's).
Patent source image plane is retained despite Gaussian focus offsets.
No source-listed rear plates. The patent heads its index column Nd and states the d-line, but the printed values
are e-line indices paired with d-line Abbe numbers: five of the nine equal HOYA/OHARA catalog ne to five decimals
(FCD1 1.49845, FDS90 1.85505, M-PCD51 1.59412, M-FCD1 1.49856, S-NBH56 1.86290). The printed values are stored
unchanged and stay d-referenced and Unmatched: resolving five of nine elements on catalog curves while four stay
on the Abbe estimate would mix reference lines between elements and distort the colour channels.
*/
import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  "key": "zeiss-batis-40mm-f2-cf",
  "maker": "Carl Zeiss Oberkochen",
  "name": "ZEISS BATIS 40mm f/2 CF",
  "subtitle": "JP 2019-191502 A, Example 1 — Tamron patent; research correlation with ZEISS Batis 2/40 CF",
  "specs": [
    "9 ELEMENTS / 8 GROUPS",
    "DESIGN f = 41.19 mm",
    "DESIGN F/2.08",
    "2ω = 54.9°",
    "6 ASPHERICAL SURFACES / 3 ELEMENTS"
  ],
  "focalLengthMarketing": 40,
  "focalLengthDesign": 41.19475402570067,
  "apertureMarketing": 2,
  "apertureDesign": 2.0834,
  "lensMounts": [
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2019-191502 A",
  "patentAuthors": [
    "Naoyuki Sato"
  ],
  "patentAssignees": [
    "Tamron Co., Ltd."
  ],
  "patentYear": 2019,
  "elementCount": 9,
  "groupCount": 8,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconcave Negative",
      "nd": 1.49845,
      "vd": 81.61,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": -56.98843859,
      "glass": "Unmatched as printed (equals HOYA FCD1 at the e line: ne 1.49845, vd 81.61)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.94136,
      "vd": 21.13,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": 52.28456991,
      "glass": "Unmatched (printed coordinates; no vendor row at either the d or the e line)",
      "apd": "inferred",
      "apdNote": "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.85505,
      "vd": 23.78,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": -45.75756786,
      "glass": "Unmatched as printed (equals HOYA FDS90-SG at the e line: ne 1.85505, vd 23.78)",
      "apd": "inferred",
      "apdNote": "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.59412,
      "vd": 67.02,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": 26.0129493,
      "glass": "Unmatched as printed (equals HOYA M-PCD51 at the e line: ne 1.59412, vd 67.02)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.80655,
      "vd": 25.3,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": -38.61053884,
      "glass": "Unmatched (printed coordinates; no vendor row at either the d or the e line)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.49856,
      "vd": 81.56,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": 37.52379197,
      "glass": "Unmatched as printed (equals HOYA M-FCD1 at the e line: ne 1.49856, vd 81.56)",
      "apd": "inferred",
      "apdNote": "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.8629,
      "vd": 24.8,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": 43.70662239,
      "glass": "Unmatched as printed (equals OHARA S-NBH56 at the e line: ne 1.86290, vd 24.80)",
      "apd": "inferred",
      "apdNote": "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation.",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.65965,
      "vd": 33.72,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": -31.96427666,
      "glass": "Unmatched (printed coordinates; no vendor row at either the d or the e line)",
      "apd": "inferred",
      "apdNote": "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation.",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.61599,
      "vd": 38.71,
      "indexReference": "d",
      "indexReferenceNote": "Patent states the d line, but this table's indices match catalog e-line values; traced as printed.",
      "fl": -91.954741,
      "glass": "Unmatched (printed coordinates; no vendor row at either the d or the e line)"
    }
  ],
  "surfaces": [
    {
      "label": "1A",
      "R": -1212.5063,
      "d": 1.4,
      "nd": 1.49845,
      "sd": 19.2,
      "elemId": 1
    },
    {
      "label": "2A",
      "R": 29.0985,
      "d": 12.4057,
      "nd": 1.0,
      "sd": 19.2,
      "elemId": 0
    },
    {
      "label": "3",
      "R": 170.9861,
      "d": 4.9865,
      "nd": 1.94136,
      "sd": 16,
      "elemId": 2
    },
    {
      "label": "4",
      "R": -68.1355,
      "d": 6.1277,
      "nd": 1.0,
      "sd": 16,
      "elemId": 0
    },
    {
      "label": "5",
      "R": -35.978,
      "d": 1.2,
      "nd": 1.85505,
      "sd": 13.2,
      "elemId": 3
    },
    {
      "label": "6",
      "R": -454.1711,
      "d": 2.5504,
      "nd": 1.0,
      "sd": 13.2,
      "elemId": 0
    },
    {
      "label": "7A",
      "R": 25.9693,
      "d": 8.1222,
      "nd": 1.59412,
      "sd": 14.7,
      "elemId": 4
    },
    {
      "label": "8A",
      "R": -33.7218,
      "d": 2.7571,
      "nd": 1.0,
      "sd": 14.7,
      "elemId": 0
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 0.2,
      "nd": 1.0,
      "sd": 12.15912,
      "elemId": 0
    },
    {
      "label": "10",
      "R": 104.2271,
      "d": 1.0224,
      "nd": 1.80655,
      "sd": 13.3,
      "elemId": 5
    },
    {
      "label": "11",
      "R": 23.8723,
      "d": 15.5621,
      "nd": 1.0,
      "sd": 13.3,
      "elemId": 0
    },
    {
      "label": "12A",
      "R": 43.8452,
      "d": 5.6989,
      "nd": 1.49856,
      "sd": 12.3,
      "elemId": 6
    },
    {
      "label": "13A",
      "R": -31.2197,
      "d": 0.2,
      "nd": 1.0,
      "sd": 12.3,
      "elemId": 0
    },
    {
      "label": "14",
      "R": 33.3772,
      "d": 5.9035,
      "nd": 1.8629,
      "sd": 13.2,
      "elemId": 7
    },
    {
      "label": "15",
      "R": 266.453,
      "d": 1.2815,
      "nd": 1.65965,
      "sd": 13.2,
      "elemId": 8
    },
    {
      "label": "16",
      "R": 19.5017,
      "d": 12.2639,
      "nd": 1.0,
      "sd": 13.2,
      "elemId": 0
    },
    {
      "label": "17",
      "R": -20.7323,
      "d": 1.2,
      "nd": 1.61599,
      "sd": 13,
      "elemId": 9
    },
    {
      "label": "18",
      "R": -33.4231,
      "d": 17.5658,
      "nd": 1.0,
      "sd": 14.2,
      "elemId": 0
    }
  ],
  "asph": {
    "1A": {
      "K": 0.0,
      "A4": 6.40958e-06,
      "A6": -2.02463e-08,
      "A8": 3.45386e-11,
      "A10": -2.75776e-14,
      "A12": 0,
      "A14": 0
    },
    "2A": {
      "K": 0.0,
      "A4": 5.65334e-06,
      "A6": -1.4367e-08,
      "A8": 1.97422e-11,
      "A10": -2.41721e-14,
      "A12": 0,
      "A14": 0
    },
    "7A": {
      "K": 0.0,
      "A4": -1.19932e-05,
      "A6": -3.89527e-09,
      "A8": -2.76725e-11,
      "A10": 1.24792e-13,
      "A12": 0,
      "A14": 0
    },
    "8A": {
      "K": 0.0,
      "A4": 1.26852e-05,
      "A6": -1.31319e-08,
      "A8": 1.35488e-11,
      "A10": 8.33317e-14,
      "A12": 0,
      "A14": 0
    },
    "12A": {
      "K": 0.0,
      "A4": -1.84977e-06,
      "A6": -5.69701e-09,
      "A8": -3.09555e-11,
      "A10": 6.56866e-14,
      "A12": 0,
      "A14": 0
    },
    "13A": {
      "K": 0.9661200000000001,
      "A4": 6.29488e-06,
      "A6": 4.80463e-11,
      "A8": 2.02382e-11,
      "A10": -5.09673e-14,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "4": [
      6.1277,
      2.6108
    ],
    "8A": [
      2.7571,
      6.274
    ],
    "11": [
      15.5621,
      11.2121
    ],
    "13A": [
      0.2,
      4.55
    ]
  },
  "varLabels": [
    [
      "4",
      "D4"
    ],
    [
      "8A",
      "D8"
    ],
    [
      "11",
      "D11"
    ],
    [
      "13A",
      "D13"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1A",
      "toSurface": "4"
    },
    {
      "text": "G2 focus",
      "fromSurface": "5",
      "toSurface": "8A"
    },
    {
      "text": "G3",
      "fromSurface": "10",
      "toSurface": "11"
    },
    {
      "text": "G4 focus",
      "fromSurface": "12A",
      "toSurface": "13A"
    },
    {
      "text": "G5",
      "fromSurface": "14",
      "toSurface": "18"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "closeFocusM": 0.2349601,
  "apertureBlades": 9,
  "focusDescription": "PUBLISHED: G2 and G4 move objectward by 3.5169 and 4.3500 mm between patent endpoints. D0 is 134.5124 mm from object to first vertex; object-to-source-image distance is 0.2349601 m. Intermediate interpolation is not a measured production cam. Source image-plane offsets from Gaussian focus are retained.",
  "nominalFno": 2.0834,
  "fstopSeries": [
    2.0834,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
