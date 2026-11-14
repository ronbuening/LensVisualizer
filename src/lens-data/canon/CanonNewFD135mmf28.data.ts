import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** US 4,206,976 A, Table 1, uniformly scaled ×1.35 from f = 100 to 135 mm. Helium d-line coordinates agree with catalog glasses despite the patent's sodium wording. The printed total length fixes the image plane at 119.1645 mm. Rims are estimated from Figure 1, including R7's optical endpoint before the bevel, and floor-checked by real-ray trace; the iris is inferred from the MIR section at 32% of the long air gap. The prescription and image plane are unadjusted, with no geometry overrides. The production association and glass equivalents do not establish a factory prescription. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-new-fd-135mm-f28",
  "maker": "Canon",
  "name": "CANON NEW FD 135mm f/2.8",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "BACD14 (Hoya catalog equivalent; production supplier unspecified)",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "focalLengthMm": 71.21,
      "role": "Main positive front element"
    },
    {
      "id": 2,
      "name": "L2",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "BACD14 (Hoya catalog equivalent; production supplier unspecified)",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "focalLengthMm": 145.37,
      "role": "Air-spaced second positive element"
    },
    {
      "id": 3,
      "name": "L3",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "PBH6 (Ohara catalog equivalent; production supplier unspecified)",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "cemented": "C1",
      "focalLengthMm": 102.60,
      "role": "Positive front member of the negative cemented doublet"
    },
    {
      "id": 4,
      "name": "L4",
      "nd": 1.74,
      "vd": 28.3,
      "indexReference": "d",
      "glass": "FD3 (Hoya catalog equivalent; production supplier unspecified)",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "cemented": "C1",
      "focalLengthMm": -34.56,
      "role": "Negative rear member of the cemented doublet"
    },
    {
      "id": 5,
      "name": "L5",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "BACD14 (Hoya catalog equivalent; production supplier unspecified)",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "focalLengthMm": -66.98,
      "role": "Negative front member of the air-spaced rear pair"
    },
    {
      "id": 6,
      "name": "L6",
      "nd": 1.72342,
      "vd": 38.0,
      "indexReference": "d",
      "glass": "BAFD8 (Hoya catalog equivalent; production supplier unspecified)",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "focalLengthMm": 69.02,
      "role": "Positive rear element completing the rear pair"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 44.6094,
      "d": 9.99945,
      "sd": 24.57,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1055.09115,
      "d": 0.1998,
      "sd": 24.57
    },
    {
      "label": "3",
      "R": 48.23955,
      "d": 4.9005,
      "sd": 21.87,
      "medium": 2
    },
    {
      "label": "4",
      "R": 103.1508,
      "d": 4.8303,
      "sd": 21.87
    },
    {
      "label": "5",
      "R": -317.9439,
      "d": 5.0085,
      "sd": 19.305,
      "medium": 3
    },
    {
      "label": "6",
      "R": -66.0339,
      "d": 1.69965,
      "sd": 19.305,
      "medium": 4
    },
    {
      "label": "7",
      "R": 42.2064,
      "d": 14.745456,
      "sd": 16.74
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 31.334094
    },
    {
      "label": "8",
      "R": -23.59125,
      "d": 1.69965,
      "sd": 13.635,
      "medium": 5
    },
    {
      "label": "9",
      "R": -58.2471,
      "d": 0.1998,
      "sd": 13.635
    },
    {
      "label": "10",
      "R": 696.43665,
      "d": 4.00005,
      "sd": 14.715,
      "medium": 6
    },
    {
      "label": "11",
      "R": -53.6571,
      "d": 40.54725,
      "sd": 14.715
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the production lens uses helicoid focusing to 1.3 m. The patent provides no finite-focus travel."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8, 4, 5.6, 8, 11, 16, 22, 32
    ],
    "maxFNumber": 32,
    "blades": 8
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18.2,
    "maxTraceFieldDeg": 9.1
  },
  "layout": {
    "yScFill": 0.7
  },
  "doublets": [
    { "text": "C1", "fromSurface": "5", "toSurface": "7" }
  ],
  "groups": [
    { "text": "Front group", "fromSurface": "1", "toSurface": "7" },
    { "text": "Rear group", "fromSurface": "8", "toSurface": "11" }
  ],
  "subtitle": "US 4,206,976 A, Table 1 — probable match to the New FD 135mm f/2.8",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "canon-fd"
    ],
    "closeFocusM": {
      "marketing": 1.3
    },
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 135,
      "design": 135
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "ALL SPHERICAL",
      "f/2.8–32",
      "8 BLADES",
      "CLOSE FOCUS 1.3 m"
    ]
  },
  "source": {
    "patentNumber": "US 4,206,976 A",
    "patentYear": 1980,
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "authors": [
      "Nozomu Kitagishi"
    ],
    "assignees": [
      "Canon Inc."
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
