import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** CN 220137479 U, sole example (Shenzhen Yongnuo Electric Appliance Co., Ltd.; Ying Zhuang et al.): header
 * f = 33 mm, Fno = 1.4, 2ω = 48.74° (¶0051); Table 2 gives f = 32.620 mm at infinity. All spherical, 11 elements /
 * 9 groups. No scale factor is applied. Element and group names are the patent's (G1–G11 and GR1–GR3, claim 1);
 * Fig. 1 numbers the elements 1–11. Strong production correlation with the YN 33mm F1.4 DA DSM WL Pro (Yongnuo:
 * 11/9, 0.4 m, 0.1×, low-dispersion and high-index glass, no aspherical element listed); not a factory prescription.
 * R, d, nd and νd follow Table 1 as printed (nd to three decimals). The table has no row 11: the cemented G6/G7 pair
 * runs from row 10 to row 12, and no surface is missing. Row 14 is the stop. The 2 mm plate at rows 23–24 (nd 1.517,
 * νd 64.2), with its 12.5 mm and 1 mm gaps, is kept as a rear plate. The rounded table traces to 32.637 mm.
 * The printed indices are rounded catalog values: with the five-decimal indices of the labelled glasses, a Coddington
 * trace reproduces Fig. 3's tangential and sagittal field within about 1 µm at every field (corner −90 / −73 µm);
 * with the printed ones the corner tangential field is −46 µm, chiefly because G3's 1.772 stands for 1.7725.
 * The stop is sized from the entrance-pupil radius 11.1999 mm printed on Fig. 2 (F/1.457; iris radius 9.604 mm, not
 * printed), not from the header's F/1.4. The printed 1 mm image gap is kept; the paraxial focus lies 0.062 mm behind
 * it at infinity, 0.096 mm at X20 and 0.141 mm at MOD.
 * Semi-diameters are not printed. They are estimated from Fig. 1, which is drawn to scale: 21.50 px/mm at 400 dpi
 * from S1 to the image (95.0 mm), with S1–S13 and S1–S22 within 0.2%, and the S2 and S13 cap ends read alike from
 * their axial and radial positions within 1%. G1 17.5, G5 16, G6 13.5, G8 10.5, G9 13.5, G10 14 and G11 13.5 mm agree
 * with the figure within 2% (it reads 17.65, 15.95, 13.44, 10.51, 13.35, 14.07 and 13.37 mm); G7, drawn at 12.8 mm,
 * keeps 13.5 mm with G6. The stop opening (9.66 mm) agrees with the derived iris. G2 and G3 share 14.926 mm against
 * the drawn 15.47 and 15.28 mm, the cross-gap limit (gapSagFrac 0.9) between S4 and S5 for equal rims. G4 is drawn
 * larger than G3, its front stepping out past the cemented face: S7 takes the drawn 16.4 mm and S6 stays at G3's rim.
 * Two lands follow the figure, both inferred and clear of every traced wide-open beam: S2 (G1's concave rear) is cut
 * 5.34 mm behind its vertex (cut radius 15.57 mm; the drawn cap ends at 0.89 of the 17.65 mm edge, ±0.013 for one
 * native pixel), and S13 (G7's concave rear) 4.22 mm behind its vertex (cut radius 10.61 mm; cap end 0.79 of the
 * 12.8 mm edge, ±0.017), which keeps G7 ahead of the stop plane as drawn. Fig. 1 also draws a short land on G8's
 * concave front at about 0.9 of its edge; it is not modeled, because the off-axis beam fills S15 to its rim.
 */
const LENS_DATA = {
  "layout": {
    "yScFill": 0.4
  },
  "schema": 2,
  "key": "yongnuo-yn-33mm-f14-da-dsm-wl-pro",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 33mm f/1.4 DA DSM WL PRO",
  "subtitle": "CN 220137479 U, Sole example \u2014 strong production correlation",
  "catalog": {
    "specs": [
      "11 ELEMENTS / 9 GROUPS",
      "DESIGN f = 32.62 mm",
      "DESIGN F/1.46",
      "ALL SPHERICAL",
      "INNER FOCUS; 0.1\u00d7 MAX"
    ],
    "elementCount": 11,
    "groupCount": 9,
    "closeFocusM": {
      "marketing": 0.4
    },
    "focalLengthMm": {
      "marketing": 33,
      "design": 32.62
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4570119336552654
    },
    "lensMounts": ["sony-fe", "nikon-z", "fujifilm-x", "canon-rf"],
    "imageFormat": "aps-c"
  },
  "source": {
    "patentNumber": "CN 220137479 U",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2023,
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
      "type": "Negative Meniscus",
      "focalLengthMm": -50.9,
      "nd": 1.593,
      "vd": 68.53,
      "glass": "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Fluor-crown-class (νd 68.5) negative meniscus, convex to the object, at the front of the fixed first group; its deep concave rear surface spreads the incoming beam."
    },
    {
      "id": 2,
      "name": "G2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "focalLengthMm": 97.6,
      "nd": 1.946,
      "vd": 17.99,
      "glass": "H-ZF88 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "Very high-index dense-flint positive meniscus, convex to the object; the first converging element of the first group."
    },
    {
      "id": 3,
      "name": "G3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "focalLengthMm": 56.3,
      "nd": 1.772,
      "vd": 49.6,
      "glass": "H-LaF50B (CDGM catalog equivalent; production supplier unspecified)",
      "role": "Thick positive meniscus, concave to the object, at the front of the cemented G3/G4 pair."
    },
    {
      "id": 4,
      "name": "G4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "focalLengthMm": -59.1,
      "nd": 1.883,
      "vd": 40.79,
      "glass": "H-ZLaF68C (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index negative meniscus cemented behind G3; the pair is a nearly afocal meniscus shell (about −794 mm) concave to the object."
    },
    {
      "id": 5,
      "name": "G5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "focalLengthMm": 36.2,
      "nd": 1.804,
      "vd": 46.59,
      "glass": "H-ZLaF50E (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index biconvex positive element; with G6 it carries most of the first group's positive power."
    },
    {
      "id": 6,
      "name": "G6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "focalLengthMm": 28.2,
      "nd": 1.593,
      "vd": 68.62,
      "glass": "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Fluor-crown-class (νd 68.6) biconvex element at the front of the cemented G6/G7 pair ahead of the stop."
    },
    {
      "id": 7,
      "name": "G7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "focalLengthMm": -16.1,
      "nd": 1.762,
      "vd": 26.62,
      "glass": "H-ZF12 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "Biconcave flint cemented to G6; the pair is negative (about −57 mm) and is the first group's crown–flint achromat, with its strongly curved rear face toward the stop."
    },
    {
      "id": 8,
      "name": "G8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "focalLengthMm": -95.9,
      "nd": 1.808,
      "vd": 22.76,
      "glass": "FD225 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint negative meniscus, concave to the stop, at the front of the two-element focus group, which moves toward the object for close focus."
    },
    {
      "id": 9,
      "name": "G9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "focalLengthMm": 38.1,
      "nd": 1.883,
      "vd": 40.79,
      "glass": "H-ZLaF68C (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index, nearly plano-convex positive element of the focus group; supplies its positive power (about +38 mm against the group's +50 mm)."
    },
    {
      "id": 10,
      "name": "G10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "focalLengthMm": 43,
      "nd": 1.883,
      "vd": 40.79,
      "glass": "H-ZLaF68C (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-index biconvex positive element at the front of the fixed rear group."
    },
    {
      "id": 11,
      "name": "G11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "focalLengthMm": -54.5,
      "nd": 1.855,
      "vd": 25.15,
      "glass": "NBFD25 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Nearly plano-concave flint, concave to the object, as the last element; against G10 it leaves the fixed rear group weakly positive (about +149 mm)."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 163.511,
      "d": 1.78,
      "medium": 1,
      "sd": 17.5
    },
    {
      "label": "2",
      "R": 25.366,
      "d": 6.35,
      "sd": 17.5,
      "rimCutDepthMm": 5.34
    },
    {
      "label": "3",
      "R": 44.009,
      "d": 2.9,
      "medium": 2,
      "sd": 14.926
    },
    {
      "label": "4",
      "R": 81.413,
      "d": 6.6,
      "sd": 14.926
    },
    {
      "label": "5",
      "R": -26.712,
      "d": 5.8,
      "medium": 3,
      "sd": 14.926
    },
    {
      "label": "6",
      "R": -18.108,
      "d": 1.75,
      "medium": 4,
      "sd": 14.926
    },
    {
      "label": "7",
      "R": -28.987,
      "d": 0.3,
      "sd": 16.4
    },
    {
      "label": "8",
      "R": 38.163,
      "d": 6,
      "medium": 5,
      "sd": 16
    },
    {
      "label": "9",
      "R": -114.536,
      "d": 0.3,
      "sd": 16
    },
    {
      "label": "10",
      "R": 21.857,
      "d": 7.35,
      "medium": 6,
      "sd": 13.5
    },
    {
      "label": "12",
      "R": -61.942,
      "d": 1.26,
      "medium": 7,
      "sd": 13.5
    },
    {
      "label": "13",
      "R": 15.451,
      "d": 6.48,
      "sd": 13.5,
      "rimCutDepthMm": 4.22
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": -16.66,
      "d": 4.5,
      "medium": 8,
      "sd": 10.5
    },
    {
      "label": "16",
      "R": -23.786,
      "d": 1.82,
      "sd": 10.5
    },
    {
      "label": "17",
      "R": 199.784,
      "d": 4.18,
      "medium": 9,
      "sd": 13.5
    },
    {
      "label": "18",
      "R": -40.07,
      "sd": 13.5
    },
    {
      "label": "19",
      "R": 80.5,
      "d": 4.24,
      "medium": 10,
      "sd": 14
    },
    {
      "label": "20",
      "R": -69.926,
      "d": 3.1,
      "sd": 14
    },
    {
      "label": "21",
      "R": -44.516,
      "d": 1.38,
      "medium": 11,
      "sd": 13.5
    },
    {
      "label": "22",
      "R": -1000,
      "d": 12.5,
      "sd": 13.5
    }
  ],
  "focus": {
    "closeFocusM": 0.4,
    "published": [
      1,
      2
    ],
    "keyframes": [
      0,
      0.5325856320096998,
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 623.757,
        "distanceReference": "first-surface",
        "source": "CN 220137479 U, Table 2, X20 object distance, read from the first surface"
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 305,
        "distanceReference": "first-surface",
        "source": "CN 220137479 U, Table 2, MOD object distance, read from the first surface"
      }
    ],
    "description": "PUBLISHED inner focus: CN 220137479 U, Table 2 prints d14 and d18 at infinity, at X20 (object at 623.757 mm, 1:20) and at the minimum distance MOD (305 mm): d14 11.910 → 8.396 → 5.312 and d18 1.500 → 5.014 → 8.098 mm. The first group, the iris and the rear group stay fixed; the two-element second group (G8–G9) moves 6.598 mm toward the object. The object distances are read from the first surface: 305 mm plus the 95 mm track gives 400 mm object to image at about 0.1×, matching Yongnuo's 0.4 m minimum focus and 0.1×. The image plane stays at the printed 1 mm behind the cover plate. Intermediate positions interpolate the gaps linearly. The iris keeps its infinity f/1.46 diameter."
  },
  "gaps": {
    "STO": {
      "label": "d14",
      "values": [
        [
          11.91,
          8.396,
          5.312
        ]
      ]
    },
    "18": {
      "label": "d18",
      "values": [
        [
          1.5,
          5.014,
          8.098
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4570119336552654,
    "fStops": [
      1.4570119336552654,
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
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2,
      "nd": 1.517,
      "vd": 64.2,
      "glass": "H-K9L (CDGM catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 1,
      "source": "CN 220137479 U literal rear plate"
    }
  ],
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 48.74
  },
  "groups": [
    { "text": "GR1", "fromSurface": "1", "toSurface": "13" },
    { "text": "GR2 FOCUS", "fromSurface": "15", "toSurface": "18" },
    { "text": "GR3", "fromSurface": "19", "toSurface": "22" }
  ],
  "doublets": [
    { "text": "G3/G4", "fromSurface": "5", "toSurface": "7" },
    { "text": "G6/G7", "fromSurface": "10", "toSurface": "13" }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
