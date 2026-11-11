import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PENTAX SMC A 35mm f/2.8, from JP S50-138824 A (Yasuo Takahashi, Asahi Kogaku Kogyo), sole example (実施例) on
 * printed p. 116, with Fig. 1 on p. 117. US 3,963,325 A is the US family member. Six air-spaced spherical singlets
 * in a retrofocus arrangement.
 *
 * Scale: the patent is normalized to F = 100. Every R and d is multiplied by exactly 0.35, which gives a paraxial
 * EFL of 35.084 mm (100.24 at F = 100). R4 keeps its printed 14544.54 (5090.59 mm here) and is not replaced by a plane.
 *
 * Printed: R, d, n and ν; F = 100; F1 = −100.46 = F/−0.922; F1·2·3 = 64.31 = F/1.555; F/2.8 and a 32° half-field in
 * the Fig. 2 plots. The model gives F1·2·3 = 64.32 and F1 = −108.43 = F/−0.922 at F = 100, so the printed −100.46 is
 * a misprint for −108.46.
 *
 * Index line: the JP text gives n at the d-line, and the printed values equal the helium-d (587.6 nm) catalog values
 * of the labelled glasses, so indexReference is "d". The "sodium d-line" of the US text is a translation slip.
 *
 * Signs: the JP table, Fig. 1 and the text (L4 biconcave, L5 a positive meniscus convex to the image) agree on
 * R7 = −81.74 and R9 = −97.45, as does the claim table of US 3,963,325 A. Its description Table 1 prints both radii
 * positive, which gives an EFL of 27.0 at F = 100; that table is a misprint and is not used.
 *
 * Derived: the patent prints no back focus. The last gap is the computed paraxial back focus, 37.471 mm, which puts
 * the image plane 79.373 mm behind surface 1.
 *
 * Stop: neither printed nor drawn in the patent. The maker's SMC PENTAX-A lens manual draws the diaphragm between L3
 * and L4, so STO sits at the midpoint of d6 (4.37 + 4.37 at F = 100, 1.5295 + 1.5295 mm here). Its radius follows
 * from the paraxial entrance pupil at f/2.8.
 *
 * sd: the patent prints none. They are estimated from Fig. 1 at its own scale (10.07 px per patent unit at 600 dpi,
 * from the vertex spacing) and floor-checked by real-ray trace; they are inferred, not factory apertures. Fig. 1 draws
 * half-heights of about 13.6, 9.6, 8.5, 7.2, 7.5 and 9.1 mm for L1–L6, and L1's rear face ends at its bevel near
 * 11.0 mm. L1–L3 and L6 sit 1–5 % under those readings. L4 (7.1 mm) and L5 (7.3 mm) clear the real-ray f/2.8
 * marginal ray, which reaches 7.00 mm at surface 7 and 7.23 mm at surface 10, and stay inside the drawing.
 *
 * Focus: the patent prints the infinity state only, so no element moves. closeFocusM is a placeholder; the maker's
 * 0.3 m minimum focus is in catalog.closeFocusM.
 *
 * The patent names no product. The association rests on construction (6 elements / 6 groups), aperture, field and
 * the maker's A-series section, which matches Fig. 1 element for element. Secondary sources report the same optics
 * in the 1977 SMC Pentax-M 35mm f/2.8.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-a-35mm-f28",
  "maker": "Pentax",
  "name": "PENTAX SMC A 35mm f/2.8",
  "subtitle": "JP S50-138824 A, sole example — probable match; optics shared with the 1977 SMC Pentax-M 35mm f/2.8",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "pentax-k"
    ],
    "elementCount": 6,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "6 ELEMENTS / 6 GROUPS",
      "DESIGN f = 35 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 0.35"
    ],
    "closeFocusM": {
      "marketing": 0.3
    }
  },
  "source": {
    "patentNumber": "JP S50-138824 A",
    "patentYear": 1975,
    "example": {
      "label": "Sole example",
      "id": null
    },
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
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": -37.95,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative front meniscus, convex to the object; the diverging element that gives the retrofocus its long back focus."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.8,
      "indexReference": "d",
      "focalLengthMm": 56.146,
      "glass": "NBFD13 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index positive element with a nearly flat rear face; first of the two positives ahead of the stop."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.757,
      "vd": 47.9,
      "indexReference": "d",
      "focalLengthMm": 26.523,
      "glass": "S-LAM54 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Strongest positive element, just ahead of the stop; completes the front group."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": -18.071,
      "glass": "FD60 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative just behind the stop; the system's only dense flint and its main color corrector."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.757,
      "vd": 47.9,
      "indexReference": "d",
      "focalLengthMm": 40.993,
      "glass": "S-LAM54 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus, concave to the object; its front face and L4's rear face bound a biconvex air lens."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.7432,
      "vd": 49.4,
      "indexReference": "d",
      "focalLengthMm": 78.92,
      "glass": "S-LAM60 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Weak rear positive with a nearly flat front face, 0.2 mm behind L5."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 79.723,
      "d": 2.4989999999999997,
      "sd": 13.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 15.561,
      "d": 10.122,
      "sd": 10.8
    },
    {
      "label": "3",
      "R": 44.876999999999995,
      "d": 4.140499999999999,
      "sd": 9.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": 5090.589,
      "d": 3.29,
      "sd": 9.2
    },
    {
      "label": "5",
      "R": 32.3855,
      "d": 6.471499999999999,
      "sd": 8.3,
      "medium": 3
    },
    {
      "label": "6",
      "R": -48.28249999999999,
      "d": 1.5294999999999999,
      "sd": 8.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.5294999999999999
    },
    {
      "label": "7",
      "R": -28.608999999999995,
      "d": 2.8805,
      "sd": 7.1,
      "medium": 4
    },
    {
      "label": "8",
      "R": 30.94,
      "d": 2.079,
      "sd": 7.1
    },
    {
      "label": "9",
      "R": -34.1075,
      "d": 3.1814999999999998,
      "sd": 7.3,
      "medium": 5
    },
    {
      "label": "10",
      "R": -16.9015,
      "d": 0.19949999999999998,
      "sd": 7.3
    },
    {
      "label": "11",
      "R": 352.905,
      "d": 3.9794999999999994,
      "sd": 8.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": -70.007,
      "d": 37.470603853258716,
      "sd": 8.8
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only. The patent prints the infinity state and no focusing data, so no element moves. The image plane sits at the computed paraxial back focus, 37.47 mm. The maker's 0.3 m minimum focus is not modeled."
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
    "fullFieldDeg": 63,
    "maxTraceFieldDeg": 31.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
