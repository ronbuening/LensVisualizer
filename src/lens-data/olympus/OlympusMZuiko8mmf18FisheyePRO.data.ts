import type { LensDataInput } from "../../types/optics.js";
/**
 * JP2016184136A Numerical Example 7, Sigma Corporation / Yukihiro Yamamoto.
 * Construction correlation only; exact production prescription unconfirmed.
 * Native mm and d-line values; no scaling or material substitutions.
 * Source Figure 25 (paragraph 0102 wrongly cites Figure 31), 17 lenses/15 groups.
 * Published G2 focus endpoints retained; 120 mm is object-to-image shooting distance.
 * Source filter F (surfaces 34-35: 4.0000 mm, nd 1.51633, vd 64.12, then 1.0000 mm of air to
 * the image) is traced through rearPlates with the source's physical gaps. Surface 33 d is the
 * 12.7099 mm of air ahead of the plate; no t/n fold is authored. The image plane sits at the
 * source's physical 96.5398 mm track, and the 98.54 degree chief ray lands at 11.6003 mm
 * (11.7096 mm at the near endpoint) against the printed 11.60 / 11.71 mm.
 * JP2016184136A, PDFp24/printed23, paragraph0103: "このフィルターＦの光軸上の位置は
 * 第３レンズ群Ｇ３と像面の間ではどこであっても収差に影響を与えない。"
 * Translation: F can sit anywhere between G3 and image without affecting aberrations. That
 * frees the plate's axial position, not its presence: marginal on-axis LSA at F/1.82 is about
 * -14 um with the plate and -73 um with the air-equivalent gap 12.7099+4/1.51633+1 mm.
 * Plate glass S-BSL7 is the OHARA coordinate equivalent (1.51633/64.14 against the printed
 * 64.12; this example prints 23.77 for 23.78 and 29.12 for 29.13). Filter material unconfirmed.
 * Near object-to-first-vertex 23.4602 mm = 120 mm shooting distance - 96.5398 mm track.
 * NOTE ON SEMI-DIAMETERS: estimated from Figure 25 (0.0937 mm/px at 400 dpi; element outer rims
 * agree with the drawing within 2 %) and floor-checked by exact real-ray trace at both focus
 * states. Surface 2 sd 15.4 mm requires the approved per-lens 73 degree rim limit; actual rim
 * 72.474684 degrees; the figure's 15.5-15.6 mm is refused by the validator. The G2 doublet is
 * drawn square-cut at 11.0 mm, so 9A/10/11 share 11 mm (surface 10 was 11.5 mm; the transmitted
 * bundle is unchanged). Flat lands on the concave faces 7, 15, 17, 23 and 27 are not modelled.
 * Wide-open exterior vignetting remains; no all-rays/full-continuum claim.
 * NOTE ON LABELS: groups carry the patent's G1 / G2 / G3 (surfaces 1-8, 9-11, 12-33; G3 spans stop S).
 * Figure 25 also brackets G1N1 (1-4), G1P1 (5-6), G1N2 (7-8), G3a (12-17) and G3b (19-33); the
 * diagram has one row of group labels, so those sub-groups are named in each element's role. The
 * patent designates three elements only, L1N1, L2N1 and L3N2 (its count runs over the negative
 * lenses of G1, so L3N2 is the fourth element). They are named in the roles of elements 1, 2 and
 * 4 and not on the diagram, where "L3N2" beside a plain "3" reads as the third lens; the diagram
 * numbers all seventeen elements in sequence.
 * STO size is a modeled calibration to published infinity F/1.82, not a patent diameter.
 * Equisolid is an application reference law, not a claim that the patent is exactly
 * equisolid. Source197.08° and image radius11.60mm retained; marketing180° is separate.
 * Catalog equivalents do not identify supplier/melt. No unpublished spectral values.
 */
const LENS_DATA = {
  "key": "olympus-mzuiko-8mm-f18-fisheye-pro",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 8mm f/1.8 Fisheye PRO",
  "subtitle": "JP 2016-184136 A, Numerical Example 7 — Sigma patent; construction correlation, production prescription unconfirmed",
  "specs": [
    "17 ELEMENTS / 15 GROUPS",
    "DESIGN f = 7.90 mm",
    "DESIGN F/1.82",
    "2ω = 197.08°",
    "1 ASPHERICAL SURFACE / 1 ELEMENT"
  ],
  "focalLengthMarketing": 8,
  "focalLengthDesign": 7.896958894,
  "apertureMarketing": 1.8,
  "apertureDesign": 1.82,
  "lensMounts": [
    "micro-four-thirds"
  ],
  "imageFormat": "four-thirds",
  "imageCircleMm": 23.2,
  "patentNumber": "JP 2016-184136 A",
  "patentAuthors": [
    "Yukihiro Yamamoto"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2016,
  "elementCount": 17,
  "groupCount": 15,
  "nominalFno": 1.82,
  "closeFocusM": 0.12,
  "maxFstop": 22,
  "fstopSeries": [
    1.82,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "yScFill": 0.72,
  "apertureBlades": 7,
  "apertureBladeRoundedness": 1,
  "projection": {
    "kind": "fisheye-equisolid",
    "focalLengthMm": 7.9,
    "fullFieldDeg": 197.08,
    "imageCircleMm": 23.2,
    "maxTraceFieldDeg": 98.54
  },
  "focusDescription": "Inner focus: G2, the cemented doublet (surfaces 9A–11), moves 7.0212 mm toward the image from infinity to the closest published state; G1, G3, filter F and the image plane stay fixed. The patent publishes two states, infinity and a 120 mm object-to-image distance, which puts the object 23.4602 mm ahead of the front vertex on the 96.5398 mm track. Positions in between are interpolated.",
  "focusPositions": [
    0,
    1
  ],
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 23.4602,
      "distanceReference": "first-surface",
      "source": "JP 2016-184136 A, Numerical Example 7 near state (d8 = 10.2212 mm, d11 = 3.3146 mm): published shooting distance 120 mm object-to-image minus the 96.5398 mm first-surface-to-image track with filter F in place."
    }
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 2.001,
      "vd": 29.12,
      "indexReference": "d",
      "fl": -25.097136,
      "glass": "TAFD55 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Patent L1N1: first negative meniscus of sub-group G1N1 in the fixed negative front group G1, convex to the object. Condition (1) sets its bending."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -36.15863,
      "glass": "TAF1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Patent L2N1: second negative meniscus of sub-group G1N1 in the fixed front group G1, convex to the object. Condition (2) sets its bending."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.77,
      "indexReference": "d",
      "fl": 54.733028,
      "glass": "FDS90 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Sub-group G1P1: the one positive lens inside the fixed negative front group G1. The patent credits it with a narrower beam at the focus group G2 (condition 5)."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -30.987556,
      "glass": "TAF1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Patent L3N2, the third negative lens of G1 and the whole of sub-group G1N2: negative meniscus concave to the object, last fixed lens ahead of the focus group. Condition (3) sets its shape."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.8061,
      "vd": 40.71,
      "indexReference": "d",
      "fl": 52.341655,
      "glass": "NBFD13 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Positive member of the G2 focus doublet. Its object-side surface 9 is the only asphere, placed in G2 against focus-dependent spherical aberration.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.77,
      "indexReference": "d",
      "fl": -77.140711,
      "glass": "FDS90 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Negative member of the G2 focus doublet, cemented to L5; the pair is weakly positive (f = +159.08 mm) and moves as one unit.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.95374,
      "vd": 32.31,
      "indexReference": "d",
      "fl": 36.937561,
      "glass": "TAFD45 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "First lens of sub-group G3a, the part of the fixed positive rear group G3 between the focus group and the stop."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 2.001,
      "vd": 29.12,
      "indexReference": "d",
      "fl": 45.347366,
      "glass": "TAFD55 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Second lens of sub-group G3a (fixed, ahead of the stop): positive meniscus convex to the object."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.48749,
      "vd": 70.41,
      "indexReference": "d",
      "fl": -40.086569,
      "glass": "FC5 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Last lens of sub-group G3a, directly ahead of the stop: negative meniscus convex to the object."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.06,
      "indexReference": "d",
      "fl": 63.959744,
      "glass": "FCD100 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Fluorophosphate-class coordinate at one of the five positions Olympus's construction diagram marks ED or Super ED; inferred from the glass family, not a patent designation.",
      "role": "First lens of sub-group G3b, directly behind the stop; νd 95.06."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.06,
      "indexReference": "d",
      "fl": 32.142653,
      "glass": "FCD100 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Fluorophosphate-class coordinate at one of the five positions Olympus's construction diagram marks ED or Super ED; inferred from the glass family, not a patent designation.",
      "role": "Positive member of cemented pair D2 in sub-group G3b; νd 95.06 against L12's 23.95.",
      "cemented": "D2"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.92118,
      "vd": 23.95,
      "indexReference": "d",
      "fl": -22.211152,
      "glass": "FDS24 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Negative member of the cemented pair D2 in sub-group G3b; the pair is net negative (f = −94.53 mm) inside the positive rear group.",
      "cemented": "D2"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.6,
      "indexReference": "d",
      "fl": 50.447365,
      "glass": "FCD505 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Fluorophosphate-class coordinate at one of the five positions Olympus's construction diagram marks ED or Super ED; inferred from the glass family, not a patent designation.",
      "role": "Positive lens of sub-group G3b behind the cemented pair D2; νd 68.60."
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.77,
      "indexReference": "d",
      "fl": -27.801197,
      "glass": "FDS90 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Negative meniscus of sub-group G3b (fixed, behind the stop), convex to the object, between the positive lenses L13 and L15."
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconvex Positive",
      "nd": 1.8042,
      "vd": 46.48,
      "indexReference": "d",
      "fl": 46.781404,
      "glass": "TAF3 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Biconvex positive lens of sub-group G3b (fixed, behind the stop), between the negative meniscus L14 and the two rear positive lenses."
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Positive Meniscus",
      "nd": 1.437,
      "vd": 95.06,
      "indexReference": "d",
      "fl": 57.754941,
      "glass": "FCD100 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Fluorophosphate-class coordinate at one of the five positions Olympus's construction diagram marks ED or Super ED; inferred from the glass family, not a patent designation.",
      "role": "Positive meniscus of sub-group G3b, convex to the object; νd 95.06."
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Plano-Convex",
      "nd": 1.437,
      "vd": 95.06,
      "indexReference": "d",
      "fl": 65.208467,
      "glass": "FCD100 (HOYA coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Fluorophosphate-class coordinate at one of the five positions Olympus's construction diagram marks ED or Super ED; inferred from the glass family, not a patent designation.",
      "role": "Last lens of sub-group G3b and of the system: plano-convex, flat face toward the image."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 48.0181,
      "d": 2.0,
      "nd": 2.001,
      "elemId": 1,
      "sd": 27.7
    },
    {
      "label": "2",
      "R": 16.1496,
      "d": 11.7878,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15.4
    },
    {
      "label": "3",
      "R": 130.0628,
      "d": 1.0,
      "nd": 1.7725,
      "elemId": 2,
      "sd": 15.9
    },
    {
      "label": "4",
      "R": 22.9172,
      "d": 4.5849,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.2
    },
    {
      "label": "5",
      "R": 726.7039,
      "d": 3.0085,
      "nd": 1.84666,
      "elemId": 3,
      "sd": 13.4
    },
    {
      "label": "6",
      "R": -49.4026,
      "d": 2.5549,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.4
    },
    {
      "label": "7",
      "R": -23.4133,
      "d": 0.8,
      "nd": 1.7725,
      "elemId": 4,
      "sd": 11.8
    },
    {
      "label": "8",
      "R": -1084.3029,
      "d": 3.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.8
    },
    {
      "label": "9A",
      "R": 104.752,
      "d": 2.484,
      "nd": 1.8061,
      "elemId": 5,
      "sd": 11
    },
    {
      "label": "10",
      "R": -69.9013,
      "d": 0.8,
      "nd": 1.84666,
      "elemId": 6,
      "sd": 11
    },
    {
      "label": "11",
      "R": 1000.0,
      "d": 10.3358,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11
    },
    {
      "label": "12",
      "R": 80.3861,
      "d": 2.5949,
      "nd": 1.95374,
      "elemId": 7,
      "sd": 9.8
    },
    {
      "label": "13",
      "R": -61.7239,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.8
    },
    {
      "label": "14",
      "R": 28.8747,
      "d": 2.0551,
      "nd": 2.001,
      "elemId": 8,
      "sd": 9.5
    },
    {
      "label": "15",
      "R": 76.5246,
      "d": 1.7481,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.5
    },
    {
      "label": "16",
      "R": 166.6079,
      "d": 0.8,
      "nd": 1.48749,
      "elemId": 9,
      "sd": 8.8
    },
    {
      "label": "17",
      "R": 17.4628,
      "d": 4.1322,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.8
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 0.854,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.453758348358
    },
    {
      "label": "19",
      "R": 30.0108,
      "d": 2.7674,
      "nd": 1.437,
      "elemId": 10,
      "sd": 8.3
    },
    {
      "label": "20",
      "R": -395.6973,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.3
    },
    {
      "label": "21",
      "R": 17.5728,
      "d": 3.7649,
      "nd": 1.437,
      "elemId": 11,
      "sd": 7.9
    },
    {
      "label": "22",
      "R": -65.4343,
      "d": 0.8,
      "nd": 1.92118,
      "elemId": 12,
      "sd": 7.9
    },
    {
      "label": "23",
      "R": 29.9433,
      "d": 1.8692,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.9
    },
    {
      "label": "24",
      "R": 48.5854,
      "d": 2.1908,
      "nd": 1.59282,
      "elemId": 13,
      "sd": 7.5
    },
    {
      "label": "25",
      "R": -76.4819,
      "d": 0.6275,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.5
    },
    {
      "label": "26",
      "R": 679.7559,
      "d": 0.8,
      "nd": 1.84666,
      "elemId": 14,
      "sd": 7.8
    },
    {
      "label": "27",
      "R": 22.7381,
      "d": 1.1944,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.4
    },
    {
      "label": "28",
      "R": 149.1524,
      "d": 2.2243,
      "nd": 1.8042,
      "elemId": 15,
      "sd": 8.5
    },
    {
      "label": "29",
      "R": -49.9777,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.5
    },
    {
      "label": "30",
      "R": 21.0582,
      "d": 3.8827,
      "nd": 1.437,
      "elemId": 16,
      "sd": 10.1
    },
    {
      "label": "31",
      "R": 120.0,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.1
    },
    {
      "label": "32",
      "R": 28.4961,
      "d": 3.3685,
      "nd": 1.437,
      "elemId": 17,
      "sd": 10.6
    },
    {
      "label": "33",
      "R": 1000000000000000.0,
      "d": 12.7099,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.6
    }
  ],
  "rearPlates": [
    {
      "label": "F",
      "thicknessMm": 4.0,
      "nd": 1.51633,
      "vd": 64.12,
      "glass": "S-BSL7 (OHARA coordinate equivalent; filter material unconfirmed)",
      "gapAfterMm": 1.0,
      "source": "JP 2016-184136 A, Numerical Example 7, surfaces 34–35"
    }
  ],
  "asph": {
    "9A": {
      "K": 0.0,
      "A4": -1.1788e-06,
      "A6": -7.2708e-08,
      "A8": 6.1681e-10,
      "A10": -2.5605e-12,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "8": [
      3.2,
      10.2212
    ],
    "11": [
      10.3358,
      3.3146
    ]
  },
  "varLabels": [
    [
      "8",
      "G1–G2"
    ],
    [
      "11",
      "G2–G3"
    ]
  ],
  "groups": [
    {
      "text": "G1 −",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "G2 + FOCUS",
      "fromSurface": "9A",
      "toSurface": "11"
    },
    {
      "text": "G3 +",
      "fromSurface": "12",
      "toSurface": "33"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "9A",
      "toSurface": "11"
    },
    {
      "text": "D2",
      "fromSurface": "21",
      "toSurface": "23"
    }
  ],
  "maxRimAngleDeg": 73
} satisfies LensDataInput;
export default LENS_DATA;
