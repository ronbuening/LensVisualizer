import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,134,645 A (Sugiyama, Kubota and Adachi, Asahi Kogaku Kogyo), Example 3, associated with the SMC Pentax-M
 * 150mm f/3.5 (1977). The table spans columns 3-4 of the patent (page 6 of the PDF) and is repeated in claim 3;
 * Fig. 5 is its section. The association rests on construction (five single elements in five groups), aperture, field and
 * timing, and the PhotonsToPhotos Optical Bench also lists the lens; this is a patent design, not a confirmed
 * factory prescription.
 * Scale: the patent is normalized to F = 100. Every printed R and d and the back focus is multiplied by exactly 1.5
 * for f = 150 mm (computed EFL 149.998 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, n, Abbe number, F/3.5, half-field 8.2 degrees, back focus 40.40 (60.6 mm here) and the partial focal
 * lengths F1,2,3 = 62.60 and F1,2,3,4 = 43.89, which the model reproduces to rounding. Each n and Abbe pair matches a
 * d-line catalog glass, traced here on its OHARA equivalent. Examples 1 and 2 of the patent are not used.
 * Image plane: the final gap keeps the printed back focus; the paraxial back focus is 60.569 mm, 0.031 mm shorter.
 * Stop: the patent neither prints nor draws one. It sits in the long air space d6, 6.0 mm (4.0 at F = 100) behind
 * S6, splitting d6 into 6.0 + 29.985 mm, with its radius set by the paraxial entrance pupil, F/N.
 * Semi-diameters are inferred, none is printed. Fig. 5, read at its own axial scale (S1 to S10 = 58.41 mm here),
 * draws L1 at about 20.9 mm, L2 and L3 level with each other at about 20.8 mm, and L4 and L5 at about 10.7 mm. L1
 * (21.5 mm) and L2 (21.2 mm) stand just above the drawing, at the f/3.5 marginal ray, which reaches 21.43, 21.29 and
 * 21.13 mm at S1-S3; L3 is level with L2 at 21.2 mm, as drawn. The rear pair is 11.25 mm. Both faces of each element
 * share one rim, and the 43 mm front clear diameter fits inside the retail 49 mm filter thread.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies.
 * The 1.8 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-150mm-f35",
  "maker": "Pentax",
  "name": "PENTAX SMC M 150mm f/3.5",
  "subtitle": "US 4,134,645 A, Example 3 — probable match to the 1977 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 150,
      "design": 150
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "closeFocusM": {
      "marketing": 1.8
    },
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 150 mm",
      "DESIGN F/3.5",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 1.5"
    ]
  },
  "source": {
    "patentNumber": "US 4,134,645 A",
    "example": {
      "label": "Example 3",
      "id": "3"
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
      "nd": 1.51112,
      "vd": 60.5,
      "focalLengthMm": 107.39611314469732,
      "glass": "NSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Nearly plano-convex front crown; the first share of the front group's positive power and the largest element."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "focalLengthMm": -121.60935595282871,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative between the two front crowns; achromatizes the front group (condition (4), ν2 < 28)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 104.1136434465904,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus convex to the object; completes the front group, whose combined focal length is 93.9 mm."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.72825,
      "vd": 28.5,
      "focalLengthMm": 110.084189961681,
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Flint positive meniscus behind the long air space; the patent gives it a low Abbe number to correct lateral color."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.6516,
      "vd": 58.6,
      "focalLengthMm": -48.14471377791689,
      "glass": "S-LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative meniscus concave to the object; the telephoto rear negative, whose index above 1.62 keeps the Petzval sum from falling."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 50.715,
      "d": 5.31,
      "sd": 21.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 642.825,
      "d": 2.115,
      "sd": 21.5
    },
    {
      "label": "3",
      "R": -218.79,
      "d": 1.995,
      "sd": 21.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": 177.96,
      "d": 0.105,
      "sd": 21.2
    },
    {
      "label": "5",
      "R": 30.855,
      "d": 5.805,
      "sd": 21.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": 67.785,
      "d": 6.0,
      "sd": 21.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 29.985
    },
    {
      "label": "7",
      "R": 41.115,
      "d": 1.815,
      "sd": 11.25,
      "medium": 4
    },
    {
      "label": "8",
      "R": 82.83,
      "d": 4.08,
      "sd": 11.25
    },
    {
      "label": "9",
      "R": -23.805,
      "d": 1.2,
      "sd": 11.25,
      "medium": 5
    },
    {
      "label": "10",
      "R": -100.665,
      "d": 60.6,
      "sd": 11.25
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 40.40 at F = 100 (60.6 mm here), so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 1.8 m is not modeled."
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
    "blades": 6
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 16.4,
    "maxTraceFieldDeg": 8.2
  },
  "layout": {
    "yScFill": 0.36
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
