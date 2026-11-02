import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,502,393 (Asahi Kogaku Kogyo; Kazamaki and Matsumoto), sole example, Table 1: f = 100 mm, 1:4.0, half field 4.1°,
 * printed whole length L = 74.2. All surfaces are spherical, and no R, d, nd or νd has been adjusted.
 *
 * The patent names no product and prints no 600 mm version. All radii and spacings are the printed values × 6; that scale
 * is inferred from the marketed focal length and is not stated in the patent. nd and νd are as printed. The design is
 * associated with the SMC Takumar 6x7 600mm f/4 by its architecture (Pentax's table lists 5 groups, 6 elements), by its
 * designers and by the barrel length. It is not a confirmed factory prescription.
 *
 * The image plane is the printed L × 6 = 445.2 mm from the first vertex, which gives the 174.0 mm last gap; the patent
 * prints no back focus. Table 1 computes to L = 74.166, so the 0.20 mm between this plane and the paraxial focus at
 * 173.80 mm is rounding of the printed L.
 *
 * The patent prints no iris position, and its Table 2 Seidel coefficients reproduce with the pupil at r1, so they do not
 * fix one. The stop is inferred at the midpoint of the 20.0 gap between L3 and L4, and its radius follows from F/4. All
 * `sd` values are estimates from Fig. 1, a small sketch that keeps its axial spacings to scale but not its curvatures.
 * At the axial scale its L1 to L4 rims fall 8 to 10% inside the F/4 ray, so L1 to L3 are read at 12% more height, the
 * least that clears that ray. L4 is within reading error of that scale. The rear pair stays about 10% above it, because
 * a rear rim at the drawn height would cost about 9 points of corner light.
 *
 * Focus is static at infinity. The patent's 7f near plots come with no spacings; closeFocusM is the 12 m in Pentax's
 * table. The abstract reverses the condition n5 < n6; the detailed text, Table 1 and the claim's table govern.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-takumar-6x7-600mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC TAKUMAR 6x7 600mm f/4",
  "subtitle": "US 3,502,393, sole example — f = 100 mm design scaled 6× to 600 mm; production association",
  "catalog": {
    "imageFormat": "6x7",
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "DESIGN f = 100 (NORMALIZED; SCALED 6× TO 600 mm)",
      "DESIGN F/4",
      "ALL SPHERICAL"
    ],
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 600,
      "design": 600
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "lensMounts": [
      "pentax-67"
    ]
  },
  "source": {
    "patentNumber": "US 3,502,393",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1970,
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
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 399.996,
      "role": "Front crown collector; shares the front section's positive power with L3"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.5,
      "indexReference": "d",
      "glass": "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -452.893,
      "role": "Dense-flint negative between the two front crowns; offsets their spherical aberration and colour"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51276,
      "vd": 59.76,
      "indexReference": "d",
      "glass": "Unmatched (512598 crown; no public catalog row)",
      "focalLengthMm": 388.856,
      "role": "Forward-convex crown meniscus closing the L1 to L3 front section"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.53256,
      "vd": 46.0,
      "indexReference": "d",
      "glass": "LLF8 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 649.502,
      "role": "Isolated positive singlet; adds front-section power, and its rear face supplies higher-order spherical aberration"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.5927,
      "vd": 35.8,
      "indexReference": "d",
      "glass": "FF5 (HOYA; coordinate proxy; production supplier unspecified)",
      "focalLengthMm": 236.665,
      "role": "Positive half of the rear cemented meniscus; its lower index reduces Petzval over-correction",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.67,
      "vd": 57.3,
      "indexReference": "d",
      "glass": "S-LAL52 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -94.791,
      "role": "Negative half of the rear cemented meniscus; supplies the telephoto's negative power",
      "cemented": "D1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 225.28199999999998,
      "d": 21.0,
      "sd": 76.9,
      "medium": 1
    },
    {
      "label": "2",
      "R": -2402.4539999999997,
      "d": 9.0,
      "sd": 76.9
    },
    {
      "label": "3",
      "R": -468.168,
      "d": 6.0,
      "sd": 74.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 1318.968,
      "d": 9.0,
      "sd": 74.5
    },
    {
      "label": "5",
      "R": 168.546,
      "d": 19.200000000000003,
      "sd": 72.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 1047.498,
      "d": 59.999999999999986,
      "sd": 72.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 60.0
    },
    {
      "label": "7",
      "R": 1219.7640000000001,
      "d": 12.0,
      "sd": 45.97,
      "medium": 4
    },
    {
      "label": "8",
      "R": -481.164,
      "d": 63.0,
      "sd": 45.97
    },
    {
      "label": "9",
      "R": -97.5,
      "d": 7.199999999999999,
      "sd": 29.7,
      "medium": 5
    },
    {
      "label": "10",
      "R": -59.099999999999994,
      "d": 4.800000000000001,
      "sd": 29.7,
      "medium": 6
    },
    {
      "label": "11",
      "R": -878.814,
      "d": 174.0,
      "sd": 29.7
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "focus": {
    "closeFocusM": 12,
    "description": "The model stays at infinity focus because the patent prints no close-focus spacings; the production lens focuses to 12 m."
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
  "layout": {
    "yScFill": 0.34
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
