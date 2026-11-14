import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Source: US 2,279,384, Fred E. Altman / Eastman Kodak Company, Example 10.
 * Scale factor 1: source radii and intervals are already millimetres; no units conversion.
 * The prescription computes to 101.245322971 mm EFL versus nominal f = 100 mm.
 * The unprinted stop is inferred at the midpoint of the 6.54 mm air gap (3.27 + 3.27 mm).
 * Body semi-diameters 16 / 13.5 / 15.5 mm are inferred, consistent with the relative
 * rim heights and square cuts of schematic Fig. 4 (Example 10), not measured apertures.
 * Real-ray checks clear the axial f/3.5 beam and 6x9 corner chief ray; off-axis vignetting remains.
 * The unprinted 84.173575804 mm back focus is calculated at infinity. Only infinity focus is modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "kodak-medalist-ektar-100mm-f35",
  "maker": "Kodak",
  "name": "KODAK EKTAR 100mm f/3.5 (Kodak Medalist)",
  "subtitle": "US 2,279,384, Example 10 — Ektar 100mm f/3.5 of the Kodak Medalist",
  "visible": true,
  "catalog": {
    "specs": [
      "5 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "F/3.5–32",
      "MINIMUM FOCUS 3.5 FT / 1.07 m"
    ],
    "lensMounts": ["fixed-lens-camera"],
    "imageFormat": "6x9",
    "closeFocusM": { "marketing": 1.0668 },
    "elementCount": 5,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 100,
      "design": 101.24532297117585
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    }
  },
  "source": {
    "patentNumber": "US 2,279,384",
    "example": { "label": "Example 10", "id": "10" },
    "patentYear": 1942,
    "authors": [
      "Fred E. Altman"
    ],
    "assignees": [
      "Eastman Kodak Company"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.611,
      "vd": 57.2,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.611 / V 57.2)",
      "role": "Positive front element of the front cemented doublet",
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.573,
      "vd": 57.5,
      "indexReference": "d",
      "glass": "BAK1 (SUMITA spectral proxy for the patent's nD 1.573 / V 57.5; Kodak melt unconfirmed)",
      "role": "Negative rear element of the front cemented doublet",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.605,
      "vd": 38.2,
      "indexReference": "d",
      "glass": "F5 (SCHOTT spectral proxy for the patent's nD 1.605 / V 38.2; Kodak melt unconfirmed)",
      "role": "Central negative singlet ahead of the iris"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.605,
      "vd": 38.2,
      "indexReference": "d",
      "glass": "F5 (SCHOTT spectral proxy for the patent's nD 1.605 / V 38.2; Kodak melt unconfirmed)",
      "role": "Negative front element of the rear cemented doublet",
      "cemented": "C2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.744,
      "vd": 45.7,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.744 / V 45.7)",
      "role": "Positive rear element of the rear cemented doublet",
      "cemented": "C2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 30.7,
      "d": 8.49,
      "sd": 16.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -44.6,
      "d": 1.55,
      "sd": 16.0,
      "medium": 2
    },
    {
      "label": "3",
      "R": 727.1,
      "d": 2.86,
      "sd": 16.0
    },
    {
      "label": "4",
      "R": -71.3,
      "d": 1.8,
      "sd": 13.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 29.9,
      "d": 3.27,
      "sd": 13.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.27
    },
    {
      "label": "6",
      "R": -751.7,
      "d": 1.59,
      "sd": 15.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": 40.5,
      "d": 6.0,
      "sd": 15.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": -56.7,
      "d": 84.173575804,
      "sd": 15.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; the Medalist focuses by moving the whole lens (unit focusing)."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 52,
    "maxTraceFieldDeg": 26
  },
  "groups": [
    { "text": "G1", "fromSurface": "1", "toSurface": "3" },
    { "text": "G2", "fromSurface": "4", "toSurface": "5" },
    { "text": "G3", "fromSurface": "6", "toSurface": "8" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "1", "toSurface": "3" },
    { "text": "C2", "fromSurface": "6", "toSurface": "8" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
