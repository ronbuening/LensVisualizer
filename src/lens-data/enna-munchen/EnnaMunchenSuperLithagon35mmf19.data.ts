import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — ENNA MÜNCHEN SUPER-LITHAGON 35mm f/1.9           ║
 * ╠════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,036,499 A, sole example (Table 1), Johann           ║
 * ║  Lautenbacher / Enna-Werk.                                             ║
 * ║  Retrofocus wide-angle: two negative front menisci, then a positive    ║
 * ║  main group L3–L9 with a cemented L7/L8 meniscus.                      ║
 * ║  9 elements / 8 groups, all spherical.                                 ║
 * ║  Focus: infinity only; the patent gives no close-focus data.           ║
 * ║                                                                        ║
 * ║  NOTE ON SCALING:                                                      ║
 * ║    The patent prescription is stated at f = 100 mm, f/2.0. All radii,  ║
 * ║    thicknesses, the inferred stop station and the semi-diameters are   ║
 * ║    uniformly scaled by 0.35 to the 35 mm production focal length.      ║
 * ║    Refractive indices and Abbe numbers are the printed d-line values.  ║
 * ║    The model keeps the patent's f/2.0; f/1.9 is the marketed aperture. ║
 * ║                                                                        ║
 * ║  NOTE ON SOURCE SIGNS:                                                 ║
 * ║    OCR text of the scan drops the "+" signs. Radii follow the page     ║
 * ║    image and the claim table (R1 = +250.0, R3 = +270.0), which trace   ║
 * ║    to f = 100.003.                                                     ║
 * ║                                                                        ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                      ║
 * ║    The patent does not tabulate the stop. Its drawing places it 11.1   ║
 * ║    units into the 18.0-unit gap l5 after the R10 vertex, so the gap is ║
 * ║    split 3.885 / 2.415 mm. The stop radius follows from f/2.0. Element ║
 * ║    semi-diameters follow the patent drawing face by face (scale from   ║
 * ║    the 191-unit vertex span, confirmed by arc fits) and agree with it  ║
 * ║    within about 5 %. The convex fronts of L1 and L2 reach the drawn    ║
 * ║    outer edge (19.5, 14.6 mm) and their concave rears end at the bevel ║
 * ║    (17.4, 13.5 mm); L7's front ends at its bevel (11.1 mm) while the   ║
 * ║    cemented face and L8's rear reach the edge (12.4 mm). These are     ║
 * ║    drawing readings, not maker clear apertures. The f/2.0 axial beam   ║
 * ║    and the 32° corner chief ray clear every rim.                       ║
 * ║                                                                        ║
 * ║  NOTE ON BACK FOCUS:                                                   ║
 * ║    The patent prints no back focal distance. The image gap is the      ║
 * ║    paraxial value, 36.583 mm (104.52 at patent scale).                 ║
 * ║                                                                        ║
 * ║  IMPORTANT: This file describes ONLY the optical design:               ║
 * ║    ✓ Glass elements and surfaces from front element to image plane     ║
 * ║    ✓ Aperture stop at the figure-read station                          ║
 * ║    ✗ No focus travel: closeFocusM 1e15 is an infinity placeholder      ║
 * ║    ✗ No filters, mount, barrel, or mechanics                           ║
 * ╚════════════════════════════════════════════════════════════════════════╝
 */
const LENS_DATA = {
  "schema": 2,
  "key": "enna-munchen-super-lithagon-35mm-f19",
  "maker": "Enna München",
  "name": "ENNA MÜNCHEN SUPER-LITHAGON 35mm f/1.9",
  "subtitle": "US 3,036,499 A, sole example — Lautenbacher / Enna-Werk, matching the 9/8 production layout",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "exakta",
      "m42"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35.0011
    },
    "fNumber": {
      "marketing": 1.9,
      "design": 2
    },
    "specs": [
      "9 elements / 8 groups",
      "f ≈ 35.0 mm",
      "f/1.9 (patent f/2.0)",
      "2ω ≈ 64°",
      "all-spherical"
    ]
  },
  "source": {
    "patentNumber": "US 3,036,499 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1962,
    "authors": [
      "Johann Lautenbacher"
    ],
    "assignees": [
      "Enna-Werk Optische Anstalt Dr. Appelt K.G."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.51821,
      "vd": 65.18,
      "focalLengthMm": -88.26,
      "glass": "PC2 (Hoya)",
      "role": "Front negative meniscus of the diverging front component; starts the retrofocus layout"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.51821,
      "vd": 65.18,
      "focalLengthMm": -95.54,
      "glass": "PC2 (Hoya)",
      "role": "Second negative meniscus of the front component, shares its divergence with L1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.58921,
      "vd": 40.97,
      "focalLengthMm": 69.09,
      "glass": "LF2 (Sumita)",
      "role": "First positive element of the main group, behind the long front air gap"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6228,
      "vd": 56.88,
      "focalLengthMm": 70,
      "glass": "SK10 (Schott)",
      "role": "Second positive element ahead of the stop"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.52249,
      "vd": 59.64,
      "focalLengthMm": 142.91,
      "glass": "K5 (Sumita)",
      "role": "Weak positive meniscus just ahead of the stop"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Plano-Concave Negative",
      "nd": 1.78472,
      "vd": 25.71,
      "focalLengthMm": -31.67,
      "glass": "SF11 (Schott)",
      "role": "Strong negative element behind the stop, with a plane front face"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Plano-Concave Negative",
      "nd": 1.78472,
      "vd": 25.71,
      "focalLengthMm": -82.51,
      "glass": "SF11 (Schott)",
      "role": "Negative flint half of the cemented rear meniscus",
      "cemented": "C1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Plano-Convex Positive",
      "nd": 1.691,
      "vd": 54.8,
      "focalLengthMm": 45.08,
      "glass": "N-LAK9 (Schott)",
      "role": "Positive lanthanum-crown half of the cemented rear meniscus",
      "cemented": "C1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.691,
      "vd": 54.8,
      "focalLengthMm": 51.35,
      "glass": "N-LAK9 (Schott)",
      "role": "Rear positive element; shares the high-index glass of L8"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 87.5,
      "d": 2.4499999999999997,
      "sd": 19.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 29.749999999999996,
      "d": 10.5,
      "sd": 17.4
    },
    {
      "label": "3",
      "R": 94.5,
      "d": 2.4499999999999997,
      "sd": 14.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 32.199999999999996,
      "d": 10.5,
      "sd": 13.5
    },
    {
      "label": "5",
      "R": 122.49999999999999,
      "d": 4.199999999999999,
      "sd": 12.6,
      "medium": 3
    },
    {
      "label": "6",
      "R": -60.199999999999996,
      "d": 0.35,
      "sd": 12.6
    },
    {
      "label": "7",
      "R": 54.599999999999994,
      "d": 4.199999999999999,
      "sd": 12.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": -210.0,
      "d": 0.35,
      "sd": 12.6
    },
    {
      "label": "9",
      "R": 20.299999999999997,
      "d": 4.199999999999999,
      "sd": 11.8,
      "medium": 5
    },
    {
      "label": "10",
      "R": 25.9,
      "d": 3.885,
      "sd": 11.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.415
    },
    {
      "label": "11",
      "R": "flat",
      "d": 2.8,
      "sd": 9.7,
      "medium": 6
    },
    {
      "label": "12",
      "R": 24.849999999999998,
      "d": 7.35,
      "sd": 9.7
    },
    {
      "label": "13",
      "R": -64.75,
      "d": 2.0999999999999996,
      "sd": 11.1,
      "medium": 7
    },
    {
      "label": "14",
      "R": "flat",
      "d": 3.8499999999999996,
      "sd": 12.4,
      "medium": 8
    },
    {
      "label": "15",
      "R": -31.15,
      "d": 0.35,
      "sd": 12.4
    },
    {
      "label": "16",
      "R": 105.0,
      "d": 4.8999999999999995,
      "sd": 14.7,
      "medium": 9
    },
    {
      "label": "17",
      "R": -52.56999999999999,
      "d": 36.58329249403472,
      "sd": 14.7
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent gives no close-focus data, so no focus travel is modeled."
  },
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
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
    "fullFieldDeg": 64,
    "maxTraceFieldDeg": 32
  },
  "layout": {
    "yScFill": 0.7
  },
  "groups": [
    {
      "text": "F",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "H",
      "fromSurface": "5",
      "toSurface": "17"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
