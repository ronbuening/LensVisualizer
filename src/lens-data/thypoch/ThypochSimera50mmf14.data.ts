import type { LensDataInput } from "../../types/optics.js";

/**
 * Native mm/d-line source values; production association is construction-based only.
 * Source physical rear plate is traced, not counted among powered lenses.
 * Aperture and rims are inferred; no supplier/melt identity or spectral certification.
 * NOTE ON SEMI-DIAMETERS: no effective diameters are published. Values are estimated from CN118244463A
 * Figure 1 (to scale, 0.108 mm/px at 150 dpi) and floor-checked by real-ray trace at f/1.45 in both focus
 * states. Surfaces 5 and 9 follow the drawn optical extent (flat annuli outside it); 8A stays at 10.95 mm,
 * the largest value the default cross-gap limit admits in the 1.79 mm gap 8A-9 (the figure draws 11.0).
 * The L5/L6 doublet (surfaces 10, 11) shares 12.6 mm with L7 because the figure draws the two level.
 * Source summary residuals and rounded optics are preserved without optimization.
 * CN118244463A controls; B grant changes summaries but not surfaces. D0 is first-surface distance.
 */

const LENS_DATA = {
  "key": "thypoch-simera-50mm-f14",
  "name": "THYPOCH SIMERA 50mm f/1.4 ASPH.",
  "maker": "Thypoch",
  "subtitle": "CN 118244463 A Example 1; construction-based production association",
  "patentNumber": "CN 118244463 A",
  "patentAuthors": [
    "Kuang Jian",
    "Ouyang Xia",
    "Ye Bo",
    "Li Zenghui",
    "Liu Xiaojuan"
  ],
  "patentAssignees": [
    "Shenzhen Dongzheng Optical Technology Co., Ltd."
  ],
  "patentYear": 2024,
  "elementCount": 8,
  "groupCount": 6,
  "lensMounts": [
    "leica-m",
    "nikon-z"
  ],
  "imageFormat": "135-full-frame",
  "focalLengthMarketing": 50,
  "focalLengthDesign": 51.763364556639296,
  "apertureMarketing": 1.4,
  "apertureDesign": 1.45,
  "nominalFno": 1.45,
  "closeFocusM": 0.44811,
  "focusPositions": [
    0,
    1
  ],
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "focusDescription": "Floating focus: G1 (L1-L6 with the stop) moves 9.32 mm toward the object while G2 (L7, L8) stays fixed to the image plane, so D11 opens from 0.39 mm at infinity to 9.71 mm at the patent's near state (object 370 mm in front of the first surface, about 0.45 m from the image plane). Only these two states are published; intermediate positions are interpolated, not a measured cam law. The patent's rounded values leave a small residual defocus at the near state.",
  "specs": [
    "8 ELEMENTS / 6 GROUPS",
    "DESIGN f = 51.76 mm",
    "DESIGN F/1.45",
    "2 ASPHERICAL SURFACES / 1 ELEMENT"
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.95,
      "vd": 32.28,
      "indexReference": "d",
      "fl": 51.90807171944483,
      "glass": "Unmatched (native nd=1.95000, vd=32.28; no tight six-vendor coordinate match)"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.5,
      "vd": 81.6,
      "indexReference": "d",
      "fl": 47.32078246523686,
      "glass": "Unmatched (native nd=1.50000, vd=81.60; no tight six-vendor coordinate match)",
      "cemented": "D1",
      "apd": "patent",
      "apdNote": "CN118244463A claim 9 and paragraphs 0068-0069 name L2 (νd = 81.6) the target lens and state that it is made of ultra-low-dispersion glass; Thypoch marks the same position ED. The patent prints nd to two decimals and no partial-dispersion data, so no catalog glass is assigned."
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.85,
      "vd": 25.15,
      "indexReference": "d",
      "fl": -21.180663465067752,
      "glass": "Unmatched (native nd=1.85000, vd=25.15; no tight six-vendor coordinate match)",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus (2x Asph)",
      "nd": 1.77,
      "vd": 49.24,
      "indexReference": "d",
      "fl": 140.23685610981545,
      "glass": "Unmatched (native nd=1.77000, vd=49.24; no tight six-vendor coordinate match)"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.6,
      "vd": 38.01,
      "indexReference": "d",
      "fl": -22.782419976902794,
      "glass": "Unmatched (native nd=1.60000, vd=38.01; no tight six-vendor coordinate match)",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.88,
      "vd": 39.22,
      "indexReference": "d",
      "fl": 19.07378809665932,
      "glass": "Unmatched (native nd=1.88000, vd=39.22; no tight six-vendor coordinate match)",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.65,
      "vd": 33.89,
      "indexReference": "d",
      "fl": -50.67654278499593,
      "glass": "Unmatched (native nd=1.65000, vd=33.89; no tight six-vendor coordinate match)"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.88,
      "vd": 39.22,
      "indexReference": "d",
      "fl": 44.65940935887174,
      "glass": "Unmatched (native nd=1.88000, vd=39.22; no tight six-vendor coordinate match)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 34.66,
      "d": 5.31,
      "nd": 1.95,
      "elemId": 1,
      "sd": 18
    },
    {
      "label": "2",
      "R": 107.94,
      "d": 0.58,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18
    },
    {
      "label": "3",
      "R": 21.12,
      "d": 7.22,
      "nd": 1.5,
      "elemId": 2,
      "sd": 15.4
    },
    {
      "label": "4",
      "R": 174.29,
      "d": 2.51,
      "nd": 1.85,
      "elemId": 3,
      "sd": 15.4
    },
    {
      "label": "5",
      "R": 16.21,
      "d": 5.86,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.3
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 2.46,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.109050315805193
    },
    {
      "label": "7A",
      "R": -101.2,
      "d": 2.58,
      "nd": 1.77,
      "elemId": 4,
      "sd": 11
    },
    {
      "label": "8A",
      "R": -52.82,
      "d": 1.79,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.95
    },
    {
      "label": "9",
      "R": -23.38,
      "d": 1.19,
      "nd": 1.6,
      "elemId": 5,
      "sd": 11
    },
    {
      "label": "10",
      "R": 33.54,
      "d": 6.12,
      "nd": 1.88,
      "elemId": 6,
      "sd": 12.6
    },
    {
      "label": "11",
      "R": -30.73,
      "d": 0.39,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.6
    },
    {
      "label": "12",
      "R": -140.3,
      "d": 1.19,
      "nd": 1.65,
      "elemId": 7,
      "sd": 12.6
    },
    {
      "label": "13",
      "R": 43.19,
      "d": 1.04,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.6
    },
    {
      "label": "14",
      "R": 58.41,
      "d": 3.65,
      "nd": 1.88,
      "elemId": 8,
      "sd": 13.5
    },
    {
      "label": "15",
      "R": -116.61,
      "d": 25.55,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.5
    }
  ],
  "asph": {
    "7A": {
      "K": 0.0,
      "A4": -7.31e-06,
      "A6": -5.17e-09,
      "A8": 3.21e-10,
      "A10": 5.91e-13,
      "A12": -1.47e-14,
      "A14": 0.0,
      "A16": 0.0
    },
    "8A": {
      "K": 0.0,
      "A4": -3.42e-08,
      "A6": -7.62e-09,
      "A8": 3.35e-10,
      "A10": 4.39e-13,
      "A12": -1.24e-14,
      "A14": 0.0,
      "A16": 0.0
    }
  },
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 0.85,
      "nd": 1.52,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "Unmatched (native nd=1.52000, vd=64.20; no tight six-vendor coordinate match)",
      "gapAfterMm": 0.5,
      "source": "CN118244463A Example1 source 16/17; original physical plate retained, no published clear diameter"
    }
  ],
  "var": {
    "11": [
      0.39,
      9.71
    ]
  },
  "varLabels": [
    [
      "11",
      "D11"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "11"
    },
    {
      "text": "G2",
      "fromSurface": "12",
      "toSurface": "15"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "fstopSeries": [
    1.45,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "maxFstop": 16,
  "apertureBlades": 14,
  "scFill": 0.72,
  "yScFill": 0.62,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 370,
      "distanceReference": "first-surface",
      "source": "CN118244463A Example1 Tables1a/1b PDF7–8: D0=0.37m, D11=9.71mm; rounded-source residual defocus retained at native image plane."
    }
  ]
} satisfies LensDataInput;

export default LENS_DATA;
