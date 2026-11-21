import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * OLYMPUS ZUIKO AUTO-T 100mm f/2
 *
 * Source: US 4,435,049 A (Horikawa, Imai; Olympus Optical Co., Ltd.), Embodiment 5, repeated in claim 8. This is a
 * patent design associated with the production lens, not a confirmed factory prescription. All five embodiments share
 * the production 7-element / 6-group layout, and no Olympus source names an embodiment.
 *
 * Scale: the patent is normalized to f = 1.0. Every R and d is multiplied by exactly 100 with no retuning, so the
 * computed EFL is 99.995 mm. n and ν are the printed values. The patent names no spectral line; all seven pairs match
 * catalog nd/νd, so they are read at the d line.
 *
 * Derived, not printed: the back focus. The last gap is the paraxial infinity value, 44.909 mm, which puts the image
 * plane 115.999 mm from S1.
 *
 * Stop: the patent draws no iris. It is placed at the midpoint of the 20.70 mm central gap (d8 split 10.35 + 10.35 mm),
 * and its radius follows from the paraxial entrance pupil at F/2.
 *
 * Semi-diameters: none are printed. They are read from Fig. 1, a drawing common to all five embodiments, scaled so its
 * first-to-last vertex span equals the 71.09 mm track; the smaller of the upper and lower extents is rounded down to
 * 0.1 mm and shared by both faces of each element. Neither the rims nor the stop were adjusted to ray-trace results.
 * Fig. 1 ends three concave caps short of their element edges with flat lands; these are rim cuts at the drawn share
 * of `sd` (9.85 px per mm): S6 at 0.85 (depth 3.96 mm, cut radius 18.2 mm), S8 at 0.85 (5.07 mm, 14.5 mm) and S9 at
 * 0.88 (2.97 mm, 14.3 mm). Each clears the traced wide-open beams, so the vignetting is unchanged.
 *
 * Glass: the patent specifies an anomalous-dispersion glass for L2 but prints no partial-dispersion data; L2 traces on
 * the FCD1 catalog curve.
 *
 * Focus: static at infinity. The patent gives no focus motion or close state; 0.7 m is Olympus's catalog figure.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-auto-t-100mm-f2",
  "maker": "Olympus",
  "name": "OLYMPUS ZUIKO AUTO-T 100mm f/2",
  "subtitle": "US 4,435,049 A, Embodiment 5 — seven-element F/2 telephoto associated with the production lens",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "olympus-om"
    ],
    "elementCount": 7,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "specs": [
      "7 ELEMENTS / 6 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/2",
      "ALL SPHERICAL"
    ],
    "closeFocusM": {
      "marketing": 0.7
    }
  },
  "source": {
    "patentNumber": "US 4,435,049 A",
    "patentYear": 1984,
    "example": {
      "label": "Embodiment 5",
      "id": "5"
    },
    "authors": [
      "Yoshiaki Horikawa",
      "Toshihiro Imai"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.617,
      "vd": 62.8,
      "indexReference": "d",
      "focalLengthMm": 126.655,
      "glass": "S-PHM51 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Front positive meniscus of the three-element collector, in high-index crown (condition 2)."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "focalLengthMm": 188.933,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "patent",
      "apdNote": "The patent specifies anomalous-dispersion glass for this element but prints no θgF; it traces on the FCD1 catalog curve.",
      "role": "Middle positive meniscus of the collector; its low-dispersion glass carries the front group's colour correction."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6425,
      "vd": 58.4,
      "indexReference": "d",
      "focalLengthMm": 263.592,
      "glass": "S-BSM36 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Thick, weak positive meniscus (d5 = 0.117f); controls spherical aberration and astigmatic difference."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.7618,
      "vd": 26.5,
      "indexReference": "d",
      "focalLengthMm": -46.152,
      "glass": "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint negative meniscus ahead of the central gap; offsets the collector's spherical aberration."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.5814,
      "vd": 40.8,
      "indexReference": "d",
      "focalLengthMm": -37.883,
      "glass": "PBL25 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative front half of the weak rear cemented doublet; its concave face looks toward the stop.",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.72,
      "vd": 42,
      "indexReference": "d",
      "focalLengthMm": 40.387,
      "glass": "S-LAM58 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive rear half of the cemented doublet; the pair's thickness balances upper and lower coma (condition 6).",
      "cemented": "C1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.6968,
      "vd": 55.5,
      "indexReference": "d",
      "focalLengthMm": 98.812,
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Rear positive singlet in lanthanum crown; carries most of the rear group's positive power."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 64.36,
      "d": 7.4399999999999995,
      "sd": 25.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 348.72999999999996,
      "d": 0.11,
      "sd": 25.5
    },
    {
      "label": "3",
      "R": 47.08,
      "d": 6.01,
      "sd": 23.4,
      "medium": 2
    },
    {
      "label": "4",
      "R": 90.42,
      "d": 0.41000000000000003,
      "sd": 23.4
    },
    {
      "label": "5",
      "R": 38.47,
      "d": 11.709999999999999,
      "sd": 21.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 43.85,
      "d": 3.93,
      "sd": 21.4,
      "rimCutDepthMm": 3.96
    },
    {
      "label": "7",
      "R": 71.67999999999999,
      "d": 2.31,
      "sd": 17.0,
      "medium": 4
    },
    {
      "label": "8",
      "R": 23.26,
      "d": 10.35,
      "sd": 17.0,
      "rimCutDepthMm": 5.07
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 10.35
    },
    {
      "label": "9",
      "R": -35.92,
      "d": 4.55,
      "sd": 16.3,
      "rimCutDepthMm": 2.97,
      "medium": 5
    },
    {
      "label": "10",
      "R": 59.589999999999996,
      "d": 7.5,
      "sd": 16.3,
      "medium": 6
    },
    {
      "label": "11",
      "R": -53.800000000000004,
      "d": 0.6,
      "sd": 16.3
    },
    {
      "label": "12",
      "R": 180.88,
      "d": 5.82,
      "sd": 18.5,
      "medium": 7
    },
    {
      "label": "13",
      "R": -109.7,
      "d": 44.908977410780075,
      "sd": 18.5
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only. The patent tabulates the infinity state alone and gives no focusing motion. The production lens focuses to 0.7 m; a secondary source describes a floating rear group, which Olympus literature does not confirm, so no close-range state is modelled."
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
    "fullFieldDeg": 24,
    "maxTraceFieldDeg": 12
  },
  "layout": {
    "yScFill": 0.7
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
      "toSurface": "13"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
