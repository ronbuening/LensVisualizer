import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** CN 220171327 U, sole example (Shenzhen Yongnuo Electric Appliance Co., Ltd.; Ying Zhuang et al.): header
 * f = 56 mm, Fno = 1.4, 2ω = 25.52°; Table 2 gives f = 58.066 mm at infinity. All spherical, 10 elements / 9 groups.
 * No scale factor is applied. Strong production correlation with the YN 56mm F1.4 DA DSM (Yongnuo: 10/9, 0.6 m,
 * 0.11×; high-index G3/G7/G10, low-dispersion G4, extra-low-dispersion G6); not a factory prescription.
 * Elements carry the patent's names G1–G10 and groups GR1–GR3 (claim 1, ¶0031–¶0033); the diagram numbers 1–10
 * are Fig. 1's reference numerals.
 * R, d, nd and νd follow Table 1 as printed (nd to three decimals). The table has no row 11: row 10 is the stop SP,
 * and the 2 mm plate at rows 22–23 (nd 1.517, νd 64.2), with its 11.5 mm and 1 mm gaps, is kept as a rear plate.
 * The rounded table traces to 58.096 mm. The stop is sized from the entrance-pupil radius 19.4398 mm printed on
 * Fig. 2 (F/1.494), not from the header's F/1.4. The printed 1 mm image gap is kept; the paraxial focus lies
 * 0.033 mm behind it at infinity.
 * Semi-diameters are not printed. They are estimated from Fig. 1, which is drawn to scale: 16.44 px/mm along the
 * axis at 300 dpi (S1 to image, 94.998 mm), arc fits of S1, S5, S9, S12, S13, S18 and S19 give 16.2–16.9 px/mm
 * across it, and the stop tick ends at 11.47 mm against the 11.50 mm stop. G1/G2 20, G3 19, G4 16, G6 12.5,
 * G7/G8 13, G9 12.5 and G10 14 mm agree with the figure within 6% (it reads 19.6, 19.3, 19.0, 15.9, 12.2, 12.4,
 * 12.6, 12.2 and 13.2 mm). G5 is drawn shorter than G4 (14.9 mm) with its concave rear cap ending in a flat land at
 * about 0.78 of that height: S9 has sd 14.9 and an inferred rim cut 4.47 mm behind its vertex. The cut radius,
 * 11.92 mm, is moved out from the figure's 11.7 mm to clear the wide-open beams (11.86 mm at S9) by 0.05 mm, and
 * keeps the glass 2.5 mm ahead of the stop plane. All rims are floor-checked by real-ray trace at the three printed
 * focus states. G5's cemented face shares G4's 16 mm rim, so its top edge falls to the 14.9 mm land. Yongnuo's
 * construction drawing shows the same proportions and the same land on G5.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "yongnuo-yn-56mm-f14s-da-dsm-wl-pro",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 56mm f/1.4 S DA DSM WL PRO",
  "subtitle": "CN 220171327 U, Sole example \u2014 strong production correlation",
  "catalog": {
    "lensMounts": [
      "sony-fe"
    ],
    "imageFormat": "aps-c",
    "specs": [
      "10 ELEMENTS / 9 GROUPS",
      "DESIGN f = 58.066 mm",
      "DESIGN F/1.49",
      "ALL SPHERICAL",
      "INNER FOCUS; 0.11\u00d7 MAX"
    ],
    "elementCount": 10,
    "groupCount": 9,
    "closeFocusM": {
      "marketing": 0.6
    },
    "focalLengthMm": {
      "marketing": 56,
      "design": 58.066
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4942477178652722
    }
  },
  "source": {
    "patentNumber": "CN 220171327 U",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2023,
    "errata": [{"status": "unresolved", "note": "The header prints f = 56 mm, Fno = 1.4; Table 2 prints 58.066 mm at infinity and Fig. 2 an entrance-pupil radius of 19.4398 mm. The rounded table traces to 58.096 mm, so the stop is sized from the Fig. 2 pupil (F/1.494). The printed 1 mm image gap is kept, with the paraxial focus 0.033 mm behind it."}],
    "authors": [
      "Ying Zhuang",
      "Yuanhua Ye",
      "Yongsheng Zhuang",
      "Yongxiao Zhuang"
    ],
    "assignees": [
      "Shenzhen Yongnuo Electric Appliance Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "G1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "focalLengthMm": 85.8,
      "nd": 1.847,
      "vd": 23.79,
      "glass": "S-TIH53 (OHARA catalog equivalent; nearest row to the printed nd 1.847, νd 23.79)",
      "role": "Dense-flint positive meniscus, convex to the object, at the front of the fixed first group; begins converging the wide f/1.49 axial beam."
    },
    {
      "id": 2,
      "name": "G2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "focalLengthMm": -64,
      "nd": 1.603,
      "vd": 38,
      "glass": "E-F5 (HOYA catalog equivalent; nearest row to the printed nd 1.603, νd 38.00)",
      "role": "Negative element of the first group, nearly flat in front and strongly concave behind; offsets part of G1's and G3's positive power."
    },
    {
      "id": 3,
      "name": "G3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "focalLengthMm": 40.5,
      "nd": 1.883,
      "vd": 39.23,
      "glass": "H-ZLaF68N (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index, nearly plano-convex positive element of the first group, ahead of the cemented doublet."
    },
    {
      "id": 4,
      "name": "G4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "focalLengthMm": 38.5,
      "nd": 1.569,
      "vd": 71.31,
      "glass": "K-GFK70 (SUMITA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Yongnuo's construction drawing marks this element as low-dispersion glass; the patent nd/νd (1.569/71.31) match K-GFK70, a crown whose catalog ΔPgF is about +0.021.",
      "role": "Low-dispersion biconvex front element of the cemented doublet at the rear of the first group."
    },
    {
      "id": 5,
      "name": "G5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "focalLengthMm": -18.2,
      "nd": 1.847,
      "vd": 23.79,
      "glass": "S-TIH53 (OHARA catalog equivalent; nearest row to the printed nd 1.847, νd 23.79)",
      "role": "Dense-flint biconcave rear element of the doublet; corrects the first group's axial colour, and its strongly concave rear surface faces the stop."
    },
    {
      "id": 6,
      "name": "G6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "focalLengthMm": -202.2,
      "nd": 1.438,
      "vd": 94.58,
      "glass": "S-FPL55 (OHARA catalog equivalent; nearest row to the printed nd 1.438, νd 94.58)",
      "apd": "inferred",
      "apdNote": "Yongnuo's construction drawing marks this element as extra-low-dispersion glass; the patent nd/νd (1.438/94.58) lie in the S-FPL55 / S-FPL53 / FCD100 fluorophosphate class. No catalog row rounds to the printed nd; the label takes the nearest, S-FPL55 (1.43875/94.66).",
      "role": "Weak negative meniscus, concave to the stop, at the front of the two-element focus group, which moves toward the object for close focus."
    },
    {
      "id": 7,
      "name": "G7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "focalLengthMm": 37.8,
      "nd": 1.883,
      "vd": 40.79,
      "glass": "H-ZLaF68C (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index, equiconvex positive element of the focus group; supplies its positive power (about +38 mm against the group's +42 mm)."
    },
    {
      "id": 8,
      "name": "G8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "focalLengthMm": 54.7,
      "nd": 1.835,
      "vd": 42.73,
      "glass": "S-LAH55V (OHARA catalog equivalent; nearest row to the printed nd 1.835, νd 42.73)",
      "role": "Positive front element of the fixed rear group, nearly flat in front."
    },
    {
      "id": 9,
      "name": "G9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "focalLengthMm": -23.1,
      "nd": 1.62,
      "vd": 36.33,
      "glass": "E-F2 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave flint between the rear group's two positive elements; nearly cancels their power, leaving the group weakly positive (about +860 mm)."
    },
    {
      "id": 10,
      "name": "G10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "focalLengthMm": 43.5,
      "nd": 1.883,
      "vd": 39.23,
      "glass": "H-ZLaF68N (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index biconvex last element; leaves 14.5 mm to the image plane, inside the patent's 12–19 mm back-focus condition."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 58.916,
      "d": 4.5,
      "sd": 20,
      "medium": 1
    },
    {
      "label": "2",
      "R": 300.632,
      "d": 1.15,
      "sd": 20
    },
    {
      "label": "3",
      "R": -584.681,
      "d": 2,
      "sd": 20,
      "medium": 2
    },
    {
      "label": "4",
      "R": 41.371,
      "d": 7.05,
      "sd": 20
    },
    {
      "label": "5",
      "R": 34.59,
      "d": 7.06,
      "sd": 19,
      "medium": 3
    },
    {
      "label": "6",
      "R": 951.839,
      "d": 0.2,
      "sd": 19
    },
    {
      "label": "7",
      "R": 26.744,
      "d": 8,
      "sd": 16,
      "medium": 4
    },
    {
      "label": "8",
      "R": -108,
      "d": 1.51,
      "sd": 16,
      "medium": 5
    },
    {
      "label": "9",
      "R": 18.127,
      "d": 7,
      "sd": 14.9,
      "rimCutDepthMm": 4.47
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "12",
      "R": -18.9,
      "d": 4,
      "sd": 12.5,
      "medium": 6
    },
    {
      "label": "13",
      "R": -25.576,
      "d": 3.6,
      "sd": 12.5
    },
    {
      "label": "14",
      "R": 65.85,
      "d": 4,
      "sd": 13,
      "medium": 7
    },
    {
      "label": "15",
      "R": -65.85,
      "sd": 13
    },
    {
      "label": "16",
      "R": 1162.805,
      "d": 3.4,
      "sd": 13,
      "medium": 8
    },
    {
      "label": "17",
      "R": -47.445,
      "d": 2.39,
      "sd": 13
    },
    {
      "label": "18",
      "R": -34.532,
      "d": 1.26,
      "sd": 12.5,
      "medium": 9
    },
    {
      "label": "19",
      "R": 24.876,
      "d": 3.24,
      "sd": 12.5
    },
    {
      "label": "20",
      "R": 44.54,
      "d": 4.95,
      "sd": 14,
      "medium": 10
    },
    {
      "label": "21",
      "R": -266.251,
      "d": 11.5,
      "sd": 14
    }
  ],
  "focus": {
    "closeFocusM": 0.6,
    "keyframes": [
      0,
      0.475755343,
      1
    ],
    "published": [
      1,
      2
    ],
    "description": "PUBLISHED inner focus: CN 220171327 U, Table 2 prints D10 and D15 at infinity, at X20 (object at 1127.602 mm, about 1:20) and at the minimum distance MOD (505 mm): D10 12.688 \u2192 9.460 \u2192 5.903 and D15 2.500 \u2192 5.728 \u2192 9.285 mm. The first group, the iris and the rear group stay fixed; the two-element second group (G6\u2013G7) moves 6.785 mm toward the object. The object distances are read from the first surface: 505 mm plus the 95 mm track gives 600 mm object to image at about 0.11\u00d7, matching Yongnuo's 0.6 m minimum focus and 0.11\u00d7. The image plane stays at the printed 1 mm behind the cover plate. Intermediate positions interpolate the gaps linearly. The iris keeps its infinity f/1.49 diameter.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 1127.602,
        "distanceReference": "first-surface",
        "source": "CN 220171327 U, Table 2, X20 object distance, read from the first surface"
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 505,
        "distanceReference": "first-surface",
        "source": "CN 220171327 U, Table 2, MOD object distance, read from the first surface"
      }
    ]
  },
  "gaps": {
    "STO": {
      "label": "D10",
      "values": [
        [
          12.688,
          9.46,
          5.903
        ]
      ]
    },
    "15": {
      "label": "D15",
      "values": [
        [
          2.5,
          5.728,
          9.285
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4942477178652722,
    "fStops": [
      1.4942477178652722,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16,
    "blades": 9
  },
  "projection": {"kind": "rectilinear", "fullFieldDeg": 26.4},
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2,
      "nd": 1.517,
      "vd": 64.2,
      "gapAfterMm": 1,
      "glass": "H-K9L (CDGM catalog equivalent; nearest row to the printed nd 1.517, νd 64.2)",
      "source": "CN 220171327 U Table 1, S22\u2013S23: plate thickness, index and the gap to the image as printed"
    }
  ],
  "groups": [
    {
      "text": "GR1",
      "fromSurface": "1",
      "toSurface": "9"
    },
    {
      "text": "GR2 FOCUS",
      "fromSurface": "12",
      "toSurface": "15"
    },
    {
      "text": "GR3",
      "fromSurface": "16",
      "toSurface": "21"
    }
  ],
  "doublets": [
    {
      "text": "G4/G5",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "layout": {
    "yScFill": 0.32
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
