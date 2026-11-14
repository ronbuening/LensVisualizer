import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Table A, with all lengths scaled by ×1.35 from f = 100 to 135 mm.
 * The printed back focus is retained at 57.78 mm, without numerical refocusing.
 * Surface semi-diameters are estimated from Figure 1 and floor-checked by real rays;
 * R5 follows the optical endpoint, excluding the bevel and construction stroke.
 * The inferred iris split preserves the printed air gap. Production dimensions are unconfirmed.
 * Infinity focus only; closeFocusM = 1e15 is a placeholder, not a measured distance.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "isco-tele-iscaron-135mm-f28",
  "maker": "ISCO",
  "name": "ISCO TELE-ISCARON 135mm f/2.8",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "nd": 1.58913,
      "vd": 61.2,
      "indexReference": "d",
      "glass": "SK5 (Sumita catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 196.90,
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Positive front singlet before the cemented middle pair"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "nd": 1.589,
      "vd": 48.6,
      "indexReference": "d",
      "glass": "BAF6 (Hoya catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 66.87,
      "label": "Element 2",
      "type": "Biconvex Positive",
      "role": "Positive front member of the cemented middle pair",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "nd": 1.74077,
      "vd": 27.7,
      "indexReference": "d",
      "glass": "E-FD13 (Hoya catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -34.49,
      "label": "Element 3",
      "type": "Biconcave Negative",
      "role": "Negative rear member of the cemented middle pair",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "nd": 1.6727,
      "vd": 32.2,
      "indexReference": "d",
      "glass": "SF5 (Schott)",
      "focalLengthMm": 114.59,
      "label": "Element 4",
      "type": "Plano-Convex Positive",
      "role": "Positive rear singlet behind the iris"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 98.0235,
      "d": 5.3325,
      "sd": 25.785,
      "medium": 1
    },
    {
      "label": "2",
      "R": 619.7175,
      "d": 0.81,
      "sd": 25.785
    },
    {
      "label": "3",
      "R": 48.5325,
      "d": 30.3075,
      "sd": 23.625,
      "medium": 2
    },
    {
      "label": "4",
      "R": -160.5825,
      "d": 11.6775,
      "sd": 23.625,
      "medium": 3
    },
    {
      "label": "5",
      "R": 31.32,
      "d": 16.47,
      "sd": 18.63
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 9.5175
    },
    {
      "label": "6",
      "R": 77.085,
      "d": 5.805,
      "sd": 18.9,
      "medium": 4
    },
    {
      "label": "7",
      "R": "flat",
      "d": 57.78,
      "sd": 18.9
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
      "description": "Infinity focus only; the patent gives no finite-focus spacings or focusing travel."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18.2,
    "maxTraceFieldDeg": 9.1
  },
  "layout": {
    "yScFill": 0.7
  },
  "groups": [
    {
      "text": "I",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "II",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "III",
      "fromSurface": "6",
      "toSurface": "7"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    }
  ],
  "subtitle": "US 2,972,285 A, Table A — probable match to the Tele-Iscaron family",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "exakta"
    ],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 135,
      "design": 135
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "f/2.8–22",
      "EXAKTA",
      "PRESET 1957 / AUTOMATIC 1959"
    ]
  },
  "source": {
    "patentNumber": "US 2,972,285 A",
    "patentYear": 1961,
    "example": {
      "label": "Table A",
      "id": "A"
    },
    "authors": [
      "Rudolf Solisch"
    ],
    "assignees": [
      "Isco Optische Werke GmbH"
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
