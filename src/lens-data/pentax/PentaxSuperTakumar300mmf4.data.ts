import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,502,394 (Koichi Kobayashi, Asahi Kogaku Kogyo), the patent's single numerical example (Table I), associated
 * with the Asahi Super-Takumar 300mm f/4 for the M42 screw mount. The association rests on construction (five single
 * elements in five groups), focal length, aperture, field and assignee; this is a patent design, not a confirmed
 * factory prescription.
 * Scale: the patent is normalized to F = 1.0. Every printed R and d, and every semi-diameter, is multiplied by exactly
 * 300 (computed EFL 300.022 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, d-line n, Abbe number, F = 1.0, relative aperture 1:4, field ±4.5 degrees and telephoto ratio 1.27
 * (1.271 here). The radii, spacings and indices are the patent's; no back focus is printed.
 * Source inconsistency: Table I prints R3 = -0.74505 and the claim table +0.74505. The negative value is used: the text
 * calls L2 biconcave, Fig. 1 draws it so, and the patent's Seidel table (Petzval term -0.560 at surface 3, sum -0.219)
 * is reproduced only with R3 < 0.
 * Image plane: the final gap is the computed paraxial back focus, 74.838 mm, not a printed value.
 * Stop: the patent neither prints nor draws one. Following the PhotonsToPhotos reconstruction it sits 82 mm behind S6,
 * splitting the printed 111 mm air space 82 + 29, with its radius set by the paraxial entrance pupil, F/N.
 * Semi-diameters are not printed. They are the PhotonsToPhotos values (diameters 75.15, 68.29, 67.55 and 22.08 mm).
 * The rear pair matches Fig. 1 within 1 %; the front three sit just outside the wide-open on-axis beam, which Fig. 1
 * draws 4 to 6 % smaller. The small rear group vignettes the oblique beam strongly at full aperture.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies.
 * The 5.5 m minimum focus is Asahi's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-super-takumar-300mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SUPER-TAKUMAR 300mm f/4",
  "subtitle": "US 3,502,394, Sole example — probable match to the M42 production lens",
  "catalog": {
    "lensMounts": [
      "m42"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 300 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "PATENT f = 1 SCALED × 300"
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
      "marketing": 5.5
    }
  },
  "source": {
    "patentNumber": "US 3,502,394",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1970,
    "authors": [
      "Koichi Kobayashi"
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
      "nd": 1.50977,
      "vd": 61.9,
      "focalLengthMm": 208.2465135101512,
      "glass": "Unmatched (patent nd 1.50977, νd 61.9; no catalog glass at this pair)",
      "role": "Low-index front collector with a weak convex rear face; the patent uses that face against higher-order spherical aberration."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.71736,
      "vd": 29.5,
      "focalLengthMm": -212.3487324375536,
      "glass": "SF1 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative; the color-correcting partner of the two crowns in the front group."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.0,
      "focalLengthMm": 188.4629126819168,
      "glass": "Unmatched (patent nd 1.48749, νd 70.0; FK5-type crowns are 0.2 higher in νd)",
      "role": "Low-index positive meniscus closing the front group; its weakly concave rear face trims higher-order spherical aberration and oblique aberrations."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.72916,
      "vd": 54.8,
      "focalLengthMm": -43.68532962600018,
      "glass": "S-LAL18 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Strong biconcave negative leading the rear group; supplies the negative power of the telephoto rear group."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.762,
      "vd": 40.3,
      "focalLengthMm": 67.4850902838996,
      "glass": "NBFD5 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index biconvex positive closing the rear group; the flint partner of L4 and the last element before the image."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 120.75,
      "d": 13.2,
      "sd": 37.575,
      "medium": 1
    },
    {
      "label": "2",
      "R": -846.03,
      "d": 16.05,
      "sd": 37.575
    },
    {
      "label": "3",
      "R": -223.515,
      "d": 3,
      "sd": 34.145,
      "medium": 2
    },
    {
      "label": "4",
      "R": 480.99,
      "d": 0.3,
      "sd": 34.145
    },
    {
      "label": "5",
      "R": 84.666,
      "d": 10.5,
      "sd": 33.775,
      "medium": 3
    },
    {
      "label": "6",
      "R": 1035.33,
      "d": 82,
      "sd": 33.775
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 29
    },
    {
      "label": "7",
      "R": -37.65,
      "d": 1.5,
      "sd": 11.04,
      "medium": 4
    },
    {
      "label": "8",
      "R": 210.378,
      "d": 2.628,
      "sd": 11.04
    },
    {
      "label": "9",
      "R": 122.4,
      "d": 3,
      "sd": 11.04,
      "medium": 5
    },
    {
      "label": "10",
      "R": -87.741,
      "d": 74.83838581587443,
      "sd": 11.04
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, so the lens is modeled at infinity with no focus movement. Asahi's retail minimum focus of 5.5 m (18 ft) is not modeled."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "fullFieldDeg": 9,
    "maxTraceFieldDeg": 4.5
  },
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2 (−)",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
