import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,134,645 A (Sugiyama, Kubota and Adachi, Asahi Kogaku Kogyo), Example 2 (PDF p. 6, repeated in claim 2;
 * section in Fig. 3, aberration plots in Fig. 4), a probable match to the smc Pentax-M 135mm f/3.5 (1977). The match
 * rests on construction (five single elements in five groups, all spherical), f/3.5, a ±9.0° field that suits 135 mm
 * on 35 mm film, and timing; Examples 1 and 3 of the patent fit the Pentax-M 120mm f/2.8 and 150mm f/3.5, and the
 * PhotonsToPhotos Optical Bench Hub lists Example 2 as this lens. The patent names no product, so this is a patent
 * design, not a confirmed factory prescription.
 * Scale: the patent is normalized to F = 100. Every printed R and d and the printed back focus are multiplied by
 * exactly 1.35 for f = 135 mm (computed EFL 134.973 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, n, Abbe number, f/3.5, half-field 9.0°, back focus 40.31 (54.4185 mm here), F1.2.3 = 64.53 and
 * F1.2.3.4 = 45.75, which the model reproduces to rounding (64.52 and 45.74 at F = 100), and a Petzval sum of 0.018,
 * which the usual surface sum does not reproduce (0.0125 at F = 100); the patent does not state its convention.
 * Image plane: the final gap keeps the printed back focus; the paraxial back focus is 54.4069 mm, 0.0116 mm shorter.
 * Stop: the patent neither prints nor draws one. It sits in the long air space d6, 4 patent units (5.4 mm) behind S6,
 * which splits d6 into 5.4 + 26.244 mm; its radius is set by the paraxial entrance pupil, F/N.
 * Semi-diameters are inferred, none is printed. They are read from Fig. 3 (outer ink, both halves) at its vertex
 * scale of 13.80 px per patent unit at 300 dpi (S1 to S10): 20.6 mm on L1, and 20.3 mm on L2 and L3, which the figure
 * draws at one height. Fig. 3 draws the square-cut rear pair at about 10.9 mm, but S8 and S9 of this prescription meet
 * at 10.02 mm, so L4 and L5 stop at 9.9 mm, where their air space is 0.08 mm at the rim; checks.gapSagFrac 0.98 admits
 * that pair. Every rim passes the f/3.5 axial beam and the chief ray to the 21.6 mm corner.
 * Glass: every n/ν pair equals a catalog row at the printed precision, so the table is read as d-line.
 * L3 (1.51821 / 65.0) is OHARA BSL22 (1.518206 / 65.04), a discontinued borosilicate crown.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies. The
 * 1.5 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-135mm-f35",
  "maker": "Pentax",
  "name": "PENTAX SMC M 135mm f/3.5",
  "subtitle": "US 4,134,645 A, Example 2 — probable match to the 1977 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 135,
      "design": 135
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "closeFocusM": {
      "marketing": 1.5
    },
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 135 mm",
      "DESIGN F/3.5",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 1.35"
    ]
  },
  "source": {
    "patentNumber": "US 4,134,645 A",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 1979,
    "authors": [
      "Takahiro Sugiyama",
      "Toshifumi Kubota",
      "Rensuke Adachi"
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
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 103.03434316636923,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive crown meniscus, convex to the object; the first of the three closely spaced front elements."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.7847,
      "vd": 26.2,
      "focalLengthMm": -107.84149163572543,
      "glass": "PBH23 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative between the two front positives; corrects the front group's color (patent condition ν2 < 28)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51821,
      "vd": 65,
      "focalLengthMm": 89.67160248053281,
      "glass": "BSL22 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Strongest positive element, a crown meniscus convex to the object; completes the front group ahead of the long air space."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.72825,
      "vd": 28.5,
      "focalLengthMm": 109.0232141875333,
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive flint meniscus of the rear pair, convex to the object; its low Abbe number corrects lateral color."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": -46.78065367072402,
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Rear negative meniscus, concave to the object; the telephoto negative, with an index above 1.62 to hold up the Petzval sum."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 47.3985,
      "d": 5.6565,
      "sd": 20.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 417.0015,
      "d": 2.4435,
      "sd": 20.6
    },
    {
      "label": "3",
      "R": -176.7015,
      "d": 1.7955,
      "sd": 20.3,
      "medium": 2
    },
    {
      "label": "4",
      "R": 163.1205,
      "d": 0.108,
      "sd": 20.3
    },
    {
      "label": "5",
      "R": 28.2825,
      "d": 6.2235,
      "sd": 20.3,
      "medium": 3
    },
    {
      "label": "6",
      "R": 66.8385,
      "d": 5.4,
      "sd": 20.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 26.244
    },
    {
      "label": "7",
      "R": 36.0855,
      "d": 2.6055,
      "sd": 9.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": 64.1385,
      "d": 3.348,
      "sd": 9.9
    },
    {
      "label": "9",
      "R": -20.871,
      "d": 1.215,
      "sd": 9.9,
      "medium": 5
    },
    {
      "label": "10",
      "R": -70.47,
      "d": 54.4185,
      "sd": 9.9
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 40.31 at F = 100 (54.4185 mm here), so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 1.5 m is not modeled."
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
    "maxFNumber": 32,
    "blades": 8
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18,
    "maxTraceFieldDeg": 9
  },
  "layout": {
    "yScFill": 0.36
  },
  "checks": {
    "gapSagFrac": 0.98
  },
  "groups": [
    {
      "text": "Front",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "Rear",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
