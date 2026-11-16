import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,468,100 A (Itoh and Arai, Asahi Kogaku Kogyo), Example 1, associated with the SMC Pentax-A 28mm f/2.8 (1984).
 * The lens section in Pentax's A-lens booklet (seven single elements, iris between L3 and L4) matches Example 1's
 * axial spacings within about 0.5 mm, while Example 2 misses by up to 1.7 mm. This is a patent design, not a
 * confirmed factory prescription.
 * Scale: none. The prescription is the patent's own at its printed f = 28.78 mm (computed EFL 28.776 mm); no value
 * is normalized, fitted or taken from Example 2. All surfaces are spherical.
 * Printed: R, d, d-line N, Abbe number, F/2.8, half-field 37.6 degrees, back focus fB = 36.79 mm and the values of the
 * eight conditional expressions, which the model reproduces within 0.3 %.
 * Image plane: the final gap keeps the printed back focus, 80.51 mm behind S1; the paraxial back focus is 36.795 mm,
 * 0.005 mm longer. The printed back focus is the infinity value, so the lens is modeled at infinity.
 * Stop: the patent neither prints nor draws one. The stop sits at the midpoint of d6 (2.31 + 2.31 mm), 23.14 mm behind
 * S1, with its radius set by the paraxial entrance pupil, F/N; at f/2.8 the stop, not a rim, limits the axial beam.
 * The maker section draws the iris about 4.3 mm behind S6, close to L4; the model keeps the midpoint.
 * Semi-diameters are inferred, none is printed. They are estimated from Fig. 1 at its axial scale (S1 to S14 vertex
 * span) and floor-checked by real-ray trace; rims that agree with the figure within about 8 % follow the maker
 * section's relative element sizes. Fig. 1 ends the rear faces of L1 and L2 at chamfers, so S2 is
 * 13.0 mm and S4 10.4 mm (fronts 14.9 and 12.0 mm). It draws L5 square-cut, its rear rim meeting L6's front face;
 * by the prescription the two faces meet at 6.84 mm, so S9 and S10 are 6.8 mm, which also clears the real-ray f/2.8
 * axial beam (6.58 mm at S10), and S11 is 7.2 mm, which keeps the engine's traced field to 38.8 degrees.
 * checks.gapSagFrac 0.99 admits the near contact of S10 and S11 (0.012 mm apart at 6.8 mm). The maker section draws
 * L5 at about 7.9 mm.
 * Glasses: the patent gives d-line indices and Abbe numbers only. Each pair equals an OHARA catalog glass, named as the
 * equivalent; the production supplier is not known.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies.
 * The 0.3 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-a-28mm-f28",
  "maker": "Pentax",
  "name": "PENTAX SMC A 28mm f/2.8",
  "subtitle": "US 4,468,100 A, Example 1 — strong match to the 1984 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28.78
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "7 ELEMENTS / 7 GROUPS",
      "DESIGN f = 28.78 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL"
    ],
    "closeFocusM": {
      "marketing": 0.3
    }
  },
  "source": {
    "patentNumber": "US 4,468,100 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1984,
    "authors": [
      "Takayuki Itoh",
      "Yasunori Arai"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.58913,
      "vd": 61,
      "indexReference": "d",
      "focalLengthMm": -51.355499325419395,
      "glass": "S-BAL35 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative front meniscus, convex to the object; with L2 it forms the negative front component that gives the long back focus."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": -52.27164053291961,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Second negative meniscus, convex to the object; shares the front component's negative power with L1."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.7,
      "vd": 48.1,
      "indexReference": "d",
      "focalLengthMm": 31.68885818332139,
      "glass": "S-LAM51 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex positive ahead of the stop, its stronger curve facing the object; opens the positive intermediate component."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.65844,
      "vd": 50.9,
      "indexReference": "d",
      "focalLengthMm": 33.427441803070295,
      "glass": "S-BSM25 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex positive behind the stop, its stronger curve facing the image; completes the positive intermediate component."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "indexReference": "d",
      "focalLengthMm": -16.796166117917668,
      "glass": "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative of the rear component; its short air gap to L6 balances sagittal astigmatism across the field."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.6935,
      "vd": 53.2,
      "indexReference": "d",
      "focalLengthMm": 42.54909133483346,
      "glass": "S-LAL13 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus, convex to the image; first of the two positive elements that bring the beam to focus."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.6935,
      "vd": 53.2,
      "indexReference": "d",
      "focalLengthMm": 45.14533510266766,
      "glass": "S-LAL13 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Nearly plano-convex positive closing the lens, convex to the image; same glass as L6."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 38,
      "d": 1.4,
      "sd": 14.9,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.614,
      "d": 6.46,
      "sd": 13
    },
    {
      "label": "3",
      "R": 34,
      "d": 1.3,
      "sd": 12,
      "medium": 2
    },
    {
      "label": "4",
      "R": 14.85,
      "d": 7.17,
      "sd": 10.4
    },
    {
      "label": "5",
      "R": 25.674,
      "d": 4.5,
      "sd": 9.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": -151.327,
      "d": 2.31,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.31
    },
    {
      "label": "7",
      "R": 94.86,
      "d": 4.75,
      "sd": 8.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": -28.09,
      "d": 4,
      "sd": 8.5
    },
    {
      "label": "9",
      "R": -17.929,
      "d": 3.33,
      "sd": 6.8,
      "medium": 5
    },
    {
      "label": "10",
      "R": 48.28,
      "d": 1.19,
      "sd": 6.8
    },
    {
      "label": "11",
      "R": -33.552,
      "d": 2.4,
      "sd": 7.2,
      "medium": 6
    },
    {
      "label": "12",
      "R": -16.16,
      "d": 0.1,
      "sd": 8.5
    },
    {
      "label": "13",
      "R": -1141.732,
      "d": 2.5,
      "sd": 9.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": -30.5,
      "d": 36.79,
      "sd": 9.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 36.79 mm, so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 0.3 m is not modeled."
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
    "fullFieldDeg": 75.2,
    "maxTraceFieldDeg": 37.6
  },
  "checks": {
    "gapSagFrac": 0.99
  },
  "layout": {
    "yScFill": 0.36
  },
  "groups": [
    {
      "text": "Front",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "Intermediate",
      "fromSurface": "5",
      "toSurface": "8"
    },
    {
      "text": "Rear",
      "fromSurface": "9",
      "toSurface": "14"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
