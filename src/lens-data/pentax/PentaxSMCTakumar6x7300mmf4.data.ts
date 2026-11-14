import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,467,462 A (Kazamaki and Matsumoto, Asahi Kogaku Kogyo), the first embodiment (Fig. 1, table on p. 5 col. 3,
 * repeated in claim 2), recorded here as Example 1. It is associated with the Super-Takumar/6x7 300mm f/4 (1969), sold
 * later as the Super-Multi-Coated Takumar/6x7, SMC Takumar 6x7 and SMC Pentax 67 300mm f/4, by construction (five
 * single elements in five groups), f/4, field and barrel length. This is a patent design, not a confirmed factory
 * prescription; scaled by 1.5 instead, the same example would also suit the 35 mm Super-Takumar 150mm f/4 of 1965.
 * Scale: the patent is normalized to f = 100 mm. Every printed R and d and the back focus are multiplied by exactly 3
 * for f = 300 mm (computed EFL 300.051 mm); indices and Abbe numbers are as printed. All surfaces are spherical.
 * Printed: R, d, d-line n, Abbe number, f = 100, back focus 40.16, 1:4, and a half-field of 8 degrees in Fig. 3.
 * Signs: the table prints r9 = +18.00 and claim 2 prints r3 = +1.1700F. The patent's Seidel table resolves both: its
 * Petzval terms for surfaces 3 and 9 (-0.357 and -1.879) need r3 = -117.00 and r9 = -18.00, and all ten terms then
 * reproduce. The file uses r3 = -351.0 and r9 = -54.0.
 * Image plane: the final gap is the printed back focus (120.48 mm); the paraxial back focus is 120.531 mm.
 * Stop: the patent neither prints nor draws one. It sits 3 mm behind S8 in the 33 mm air space before L5, as in the
 * PhotonsToPhotos reconstruction, with its radius set by the paraxial entrance pupil at F/4.
 * Semi-diameters are inferred, none is printed. They start from the PhotonsToPhotos clear diameters, checked against
 * Fig. 1 read at its axial scale (the figure keeps the axial spacings to scale). L4 and L5 agree with it within its
 * precision. L1 and L2 sit just above the f/4 axial beam, which the figure draws 3 to 5 % lower. L3 takes L2's
 * 35.43 mm because Fig. 1 draws the two at one height. L1's rim equals the f/4 entrance pupil, so the oblique beam is
 * cut at the front and about 44 % of it passes at 8 degrees.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies. The
 * 5.0 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-takumar-6x7-300mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC TAKUMAR 6x7 300mm f/4",
  "subtitle": "US 3,467,462 A, Example 1 — probable match to the 1969 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-67"
    ],
    "imageFormat": "6x7",
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 300 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 3"
    ],
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "closeFocusM": {
      "marketing": 5
    }
  },
  "source": {
    "patentNumber": "US 3,467,462 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1969,
    "authors": [
      "Tomokazu Kazamaki",
      "Tohru Matsumoto"
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
      "type": "Biconvex Positive",
      "nd": 1.5163,
      "vd": 64.0,
      "focalLengthMm": 200.01146150119362,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Crown biconvex front collector; the strongest positive element of the front group."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.7174,
      "vd": 29.5,
      "focalLengthMm": -207.70248975602266,
      "glass": "PBH1 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative; over-corrects the color of L1, as the patent assigns it."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.5163,
      "vd": 64.0,
      "focalLengthMm": 339.59205118328293,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Crown meniscus, convex to the object; closes the front group and pulls its color back toward under-correction."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6034,
      "vd": 38.0,
      "focalLengthMm": 242.26211796647434,
      "glass": "S-TIM5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Isolated positive element; its weak front face keeps its astigmatism small, so L5's front face can stay gentle."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.5111,
      "vd": 60.5,
      "focalLengthMm": -154.2481512198764,
      "glass": "NSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Rear negative meniscus, concave to the object; the telephoto's negative group, correcting astigmatism and the remaining color."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 107.7,
      "d": 15,
      "sd": 37.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -2389.29,
      "d": 9,
      "sd": 37.5
    },
    {
      "label": "3",
      "R": -351.0,
      "d": 4.5,
      "sd": 35.43,
      "medium": 2
    },
    {
      "label": "4",
      "R": 260.31,
      "d": 0.6,
      "sd": 35.43
    },
    {
      "label": "5",
      "R": 79.8,
      "d": 12,
      "sd": 35.43,
      "medium": 3
    },
    {
      "label": "6",
      "R": 138.96,
      "d": 60,
      "sd": 35.43
    },
    {
      "label": "7",
      "R": 156.0,
      "d": 12,
      "sd": 25.47,
      "medium": 4
    },
    {
      "label": "8",
      "R": -2255.22,
      "d": 3,
      "sd": 25.47
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 30
    },
    {
      "label": "9",
      "R": -54.0,
      "d": 3,
      "sd": 17.25,
      "medium": 5
    },
    {
      "label": "10",
      "R": -174.63,
      "d": 120.48,
      "sd": 17.25
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 40.16 at f = 100 (120.48 mm here), so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 5.0 m is not modeled."
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
      32,
      45
    ],
    "maxFNumber": 45
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 17,
    "maxTraceFieldDeg": 8.5
  },
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
