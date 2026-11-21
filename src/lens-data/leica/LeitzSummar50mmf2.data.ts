import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 423,468 A (Ernst Leitz G.m.b.H.; German priority 9 March 1933), sole numerical example, read from the
 * amended specification reprinted in 1936; the Austrian counterpart is AT 141 288 B. Associated with the
 * 1933 Leitz Summar 5 cm f/2.
 * The patent prints the example at f = 100 mm, f/2. Every length (10 radii, 9 thicknesses and air spaces, and the
 * back gap) is scaled uniformly by 0.5.
 * Indices and Abbe numbers are the patent's sodium-line nD / νD (indexReference "D"); no conversion to the helium
 * d line is applied.
 * The back gap is the patent's printed near-axis image distance, 68.3 × 0.5 = 34.15 mm. It is kept as printed rather
 * than set to the computed paraxial back focus (34.099 mm); the 0.051 mm difference is the patent's own.
 * The stop is not printed. It sits at the midpoint of the central air space A2 (3.93 + 3.93 mm), an inference from
 * the symmetric Leitz sectional drawing. Semi-diameters are not printed; they are read from the patent drawing
 * (about 11.94 px/mm native at 300 dpi, set by the first-to-last vertex span and confirmed on the R5 arc and the R5/R6 rim corners) and
 * are not measured clear apertures. The cemented members share one rim height, as drawn (11.7 mm). R5 and the front
 * cemented member are raised to the real-ray f/2 axial beam the engine iris admits, rounded up to 0.1 mm (R5 8.9 mm
 * against a drawn 8.9 mm); R6 follows the drawing at 9.0 mm, just above R5 as drawn. R5's rim reaches 0.08 mm past
 * the midpoint stop plane.
 * Infinity focus only; focus.closeFocusM = 1e15 is a placeholder, not the lens's minimum focus distance.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "leica-summar-50mm-f2",
  "maker": "Leica",
  "name": "LEITZ SUMMAR 50mm f/2",
  "subtitle": "GB 423,468 A, sole example — scaled ×0.5; production correlation not manufacturer-confirmed",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "leica-ltm"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 50 mm",
      "DESIGN F/2",
      "ALL SPHERICAL",
      "F/2–12.5, COLLAPSIBLE LTM MOUNT"
    ],
    "closeFocusM": {
      "marketing": 1
    }
  },
  "source": {
    "patentNumber": "GB 423,468 A",
    "patentYear": 1935,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [],
    "assignees": [
      "Ernst Leitz GmbH"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "focalLengthMm": 76.69,
      "glass": "Unmatched (nD 1.6202 / νD 60.4; SK16-type dense crown)",
      "role": "Weak front collective singlet, convex to the object"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "focalLengthMm": 33.58,
      "glass": "Unmatched (nD 1.6202 / νD 60.4; SK16-type dense crown)",
      "role": "Thick positive front member of the front cemented meniscus",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.5814,
      "vd": 40.8,
      "indexReference": "D",
      "focalLengthMm": -24.5,
      "glass": "LF5 (Schott)",
      "role": "Thin light-flint rear member of the front cemented meniscus; its deep concave face meets the central air space",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.5673,
      "vd": 42.8,
      "indexReference": "D",
      "focalLengthMm": -19.77,
      "glass": "S-TIL26 (Ohara; LF6-type equivalent)",
      "role": "Thin light-flint front member of the rear cemented meniscus; its concave front face meets the central air space",
      "cemented": "C2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "focalLengthMm": 23.8,
      "glass": "Unmatched (nD 1.6202 / νD 60.4; SK16-type dense crown)",
      "role": "Thick positive rear member of the rear cemented meniscus",
      "cemented": "C2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Plano-Convex Positive",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "D",
      "focalLengthMm": 58.89,
      "glass": "Unmatched (nD 1.6202 / νD 60.4; SK16-type dense crown)",
      "role": "Rear collective singlet, plane face toward the object"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 39.32,
      "d": 3.52,
      "sd": 13.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 219.1,
      "d": 0.165,
      "sd": 13.0
    },
    {
      "label": "3",
      "R": 16.76,
      "d": 5.38,
      "sd": 11.7,
      "medium": 2
    },
    {
      "label": "4",
      "R": 75.3,
      "d": 1.655,
      "sd": 11.7,
      "medium": 3
    },
    {
      "label": "5",
      "R": 11.88,
      "d": 3.93,
      "sd": 8.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.93
    },
    {
      "label": "6",
      "R": -16.555,
      "d": 1.655,
      "sd": 9.0,
      "medium": 4
    },
    {
      "label": "7",
      "R": 36.005,
      "d": 5.38,
      "sd": 11.7,
      "medium": 5
    },
    {
      "label": "8",
      "R": -23.59,
      "d": 0.165,
      "sd": 11.7
    },
    {
      "label": "9",
      "R": "flat",
      "d": 4.345,
      "sd": 12.4,
      "medium": 6
    },
    {
      "label": "10",
      "R": -36.525,
      "d": 34.15,
      "sd": 12.4
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent prints no close-focus spacing. The production Summar focuses to 1 m on a helicoid; that movement is not modeled."
  },
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.2,
      3.2,
      4.5,
      6.3,
      9,
      12.5
    ],
    "maxFNumber": 12.5
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 48,
    "maxTraceFieldDeg": 24
  },
  "layout": {
    "yScFill": 0.7
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C2",
      "fromSurface": "6",
      "toSurface": "8"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
