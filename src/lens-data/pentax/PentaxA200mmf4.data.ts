import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PENTAX SMC A 200mm f/4, from US 4,550,987 (Satoru Tachihara, Asahi Optical), Example 1: printed column 4, repeated
 * in claim 3. Six air-spaced spherical singlets.
 *
 * Scale: the patent states f = 100, FNO 1:4.0 and fB = 32.50. Every R and d is multiplied by 2, which gives a paraxial
 * EFL of 200.03 mm.
 *
 * Printed: R, d, n, nu, f, FNO and fB, with 6.3 degrees as the field edge of the Fig. 2 plots. The table names no
 * spectral line for n. A trace of these indices reproduces the Fig. 2 d-line curves at infinity, so they are stored
 * as d-line values and the prescription is treated as the infinity state.
 *
 * Derived: the surface 12 gap is the printed back focus times 2 (65.00 mm), which puts the image plane 160.46 mm behind
 * surface 1. The computed paraxial back focus is 65.03 mm; the printed value is kept.
 *
 * Stop: neither tabulated nor drawn in the patent (the mark in d6 on Fig. 1 is a dimension leader). The section in the
 * maker's SMC PENTAX-A lens manual draws the diaphragm just behind L4, so STO sits 2.128 mm behind surface 8, 10 % of
 * the way into the scaled d8 of 21.28 mm (2.128 + 19.152). The exact distance is inferred. The meridional field curve
 * in Fig. 2 places the stop about 56 to 70 mm behind surface 1, and the model's 67.81 mm is inside that range.
 *
 * sd: the patent prints none. Estimated from Fig. 1 at 10.42 px/mm and floor-checked by real-ray trace, with one height
 * per element as drawn. Fig. 1 reads L1 25.9, L2 25.8, L3 25.5, L4 15.4, L5 11.65 and L6 12.9 mm. L3 and L4 sit at those
 * readings. L1, L2, L5 and L6 sit 0.1 to 0.6 mm above them, because taking them to the figure would lower corner
 * illumination from 75 % to 71 %. They are inferred, not factory apertures.
 *
 * Focus: the patent prints no focus mechanism or close-focus data. Geometry is static at infinity; closeFocusM is the
 * maker's 1.9 m minimum focus.
 *
 * The patent names no product. The association with this lens rests on construction, speed, field, date and the
 * maker's section. S1 sits 115.0 mm from the K flange against a listed 111 mm barrel, so production may be a variant
 * of Example 1.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-a-200mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC A 200mm f/4",
  "subtitle": "US 4,550,987, Example 1 — patent design associated with the SMC PENTAX-A 200mm f/4",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 6 GROUPS",
      "DESIGN f = 200 mm",
      "DESIGN F/4.0",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 2"
    ],
    "elementCount": 6,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 200,
      "design": 200
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "US 4,550,987",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1985,
    "authors": [
      "Satoru Tachihara"
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
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 145.92203627488792,
      "role": "Front positive element with a nearly flat rear face; the patent keeps its power relatively small to limit aberrations at the start of the system."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "indexReference": "d",
      "glass": "FD140 (HOYA, coordinate equivalent)",
      "focalLengthMm": -190.37649653114062,
      "role": "Dense flint negative set close behind L1, placed to correct L1's aberrations immediately."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 169.1358878956531,
      "role": "Positive meniscus, convex to the object, closing the front three-element block before the long air space."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 241.74669877532375,
      "role": "Weak positive meniscus just ahead of the diaphragm, completing the positive front group."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.744,
      "vd": 44.7,
      "indexReference": "d",
      "glass": "S-LAM2 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -29.786987881614447,
      "role": "Strong high-index negative of the rear group; its higher index than L6 holds up the Petzval sum."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.64769,
      "vd": 33.8,
      "indexReference": "d",
      "glass": "S-TIM22 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 54.62088903995451,
      "role": "Equi-convex positive of the rear group, left uncemented from L5 in a lower-index glass."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 71.812,
      "d": 6.32,
      "sd": 26.49,
      "medium": 1
    },
    {
      "label": "2",
      "R": 1486.004,
      "d": 2.02,
      "sd": 26.49
    },
    {
      "label": "3",
      "R": -391.918,
      "d": 2.26,
      "sd": 25.94,
      "medium": 2
    },
    {
      "label": "4",
      "R": 230.806,
      "d": 0.1,
      "sd": 25.94
    },
    {
      "label": "5",
      "R": 56.59,
      "d": 5.82,
      "sd": 25.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 155.138,
      "d": 46.24,
      "sd": 25.5
    },
    {
      "label": "7",
      "R": 66.83,
      "d": 2.92,
      "sd": 15.4,
      "medium": 4
    },
    {
      "label": "8",
      "R": 141.706,
      "d": 2.128,
      "sd": 15.4
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 19.152
    },
    {
      "label": "9",
      "R": -35.892,
      "d": 1.84,
      "sd": 11.9,
      "medium": 5
    },
    {
      "label": "10",
      "R": 59.198,
      "d": 3.02,
      "sd": 11.9
    },
    {
      "label": "11",
      "R": 70.032,
      "d": 3.64,
      "sd": 13.3,
      "medium": 6
    },
    {
      "label": "12",
      "R": -70.032,
      "d": 65.0,
      "sd": 13.3
    }
  ],
  "focus": {
    "closeFocusM": 1.9,
    "description": "The patent prints no focus mechanism or close-focus data, so the model stays at its infinity state and no element moves. The 1.9 m minimum focus is the maker's figure. The image plane is set by the printed back focus, 65.00 mm at this scale."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "fullFieldDeg": 12.6,
    "maxTraceFieldDeg": 6.3
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "REAR",
      "fromSurface": "9",
      "toSurface": "12"
    }
  ],
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
