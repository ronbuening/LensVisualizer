import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,139,264 A (Takahashi, Asahi Kogaku Kogyo), Example 2 (PDF p. 5, repeated in claim 2; section in Fig. 3,
 * aberration plots in Fig. 4), a probable match to the smc Pentax-M 200mm f/4 (1977). The patent is Asahi's own, but
 * it names no product. The match rests on construction (six elements in five groups with a cemented rear pair, all
 * spherical), f/4, a ±6.2° field and timing. Example 1 is also six elements in five groups at f/4 (slightly different
 * radii, d6, d8 and d9, and different glass in L4 and L6); the choice of Example 2 follows the PhotonsToPhotos Optical Bench Hub, which
 * lists it as this lens. This is a patent design, not a confirmed factory prescription.
 * Scale: the patent is normalized to F = 100. Every printed R and d is multiplied by exactly 2 for f = 200 mm
 * (computed EFL 200.030 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, d-line n, Abbe number, F/4, half-field 6.2°, F1.2.3 = 69.0, F1.2.3.4 = 55.1 and a Petzval sum of
 * -0.06, which the model reproduces (69.05, 55.12 and -0.062 at F = 100). The body table's Petzval line is misprinted
 * "31 0.06"; claim 2 prints -0.06. The PDF's text layer is corrupt, so the table was read from the page images.
 * Image plane: the patent prints no back focus. The final gap is the paraxial back focus, 31.3246 at F = 100
 * (62.6492 mm here), which puts the image plane 159.209 mm behind S1 (0.796 F; the patent's condition 8 asks < 0.85 F).
 * Stop: the patent neither prints nor draws one. It sits in d8, 3.12 mm behind S8 (d8 split 3.12 + 25.56 mm), the
 * position at which the traced field curves match Fig. 4: at 6.2° and F = 100, ΔM −0.103, ΔS −0.032 and distortion
 * +1.11 % against the plotted −0.104, −0.026 and +1.16 %. A stop at the midpoint of d6 gives ΔM −0.170, ΔS −0.037 and
 * +1.08 %. Its radius, 13.69 mm, is set by the paraxial entrance pupil, F/N.
 * Semi-diameters are inferred, none is printed. They are estimated from Fig. 3, which is drawn to scale (S1 to S11 is
 * 1365 px at 600 dpi for 96.56 mm, 14.14 px/mm, and the deep L5 front face fits its printed radius at that scale):
 * 25.2 mm on L1, 23.6 mm on L2, 23.0 mm on L3, 15.6 mm on L4 and 12.5 mm on the rear pair, all within 3 % of the
 * drawing. Fig. 3 ends L5's concave front face short of the element's edge, at about 10.8 mm, with a bevel out to the
 * 12.5 mm rim; S9 keeps its clear cap to 11.1 mm, which costs at most 1.4 points of light at any field against a
 * full-height face, and a land (rimExtensionSd) carries the drawn edge to 12.5 mm. Rims are floor-checked by real-ray
 * trace: the f/4 axial beam passes every surface.
 * Glass: every n/ν pair equals a catalog row at the printed precision.
 * Length: at this scale the front vertex lies 113.75 mm ahead of the K-mount flange, about 2.7 mm beyond the 111 mm
 * retail length, so the production focal length may be slightly shorter than 200 mm.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies.
 * The 2 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-200mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC M 200mm f/4",
  "subtitle": "US 4,139,264 A, Example 2 — probable match to the 1977 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 200,
      "design": 200
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "closeFocusM": {
      "marketing": 2
    },
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "DESIGN f = 200 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 2"
    ]
  },
  "source": {
    "patentNumber": "US 4,139,264 A",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 1979,
    "authors": [
      "Yasuo Takahashi"
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
      "focalLengthMm": 133.6277711641613,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "role": "Positive crown meniscus, convex to the object; the first and largest of the three closely spaced front elements."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "focalLengthMm": -162.35491198135534,
      "glass": "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "role": "Dense-flint biconcave negative between the two front positives; corrects the front group's color (patent condition ν2 < 30)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 170.63370099339184,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "role": "Positive crown meniscus, convex to the object; completes the positive front group ahead of the long air space."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 353.7291817849575,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "role": "Weak positive crown meniscus between the two long air spaces; low index and high Abbe number hold up the Petzval sum and the color correction."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.762,
      "vd": 40.2,
      "focalLengthMm": -33.96778905642974,
      "glass": "NBFD5 (HOYA catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "role": "Strong biconcave negative at the front of the cemented rear pair; the telephoto negative, in high-index glass to hold up the Petzval sum.",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.76182,
      "vd": 26.6,
      "focalLengthMm": 60.78151494666458,
      "glass": "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "role": "Dense-flint biconvex positive cemented behind L5 at nearly the same index; balances the rear pair's color.",
      "cemented": "C1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 59.82,
      "d": 7.06,
      "sd": 25.2,
      "medium": 1
    },
    {
      "label": "2",
      "R": 431.72,
      "d": 8.4,
      "sd": 25.2
    },
    {
      "label": "3",
      "R": -392.52,
      "d": 2.06,
      "sd": 23.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 181.0,
      "d": 0.1,
      "sd": 23.6
    },
    {
      "label": "5",
      "R": 56.72,
      "d": 6.54,
      "sd": 23,
      "medium": 3
    },
    {
      "label": "6",
      "R": 152.98,
      "d": 33.22,
      "sd": 23
    },
    {
      "label": "7",
      "R": 53.38,
      "d": 3.5,
      "sd": 15.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": 73.74,
      "d": 3.12,
      "sd": 15.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 25.56
    },
    {
      "label": "9",
      "R": -28.36,
      "d": 2.88,
      "sd": 11.1,
      "rimExtensionSd": 12.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": 309.42,
      "d": 4.12,
      "sd": 12.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": -54.14,
      "d": 62.64915733549794,
      "sd": 12.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only. It gives no back focus, so the final gap is the paraxial back focus, 31.32 at F = 100 (62.65 mm here). The lens is modeled at infinity with no focus movement; Pentax's retail minimum focus of 2 m is not modeled."
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
    "maxFNumber": 32,
    "blades": 8
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12.4,
    "maxTraceFieldDeg": 6.2
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
