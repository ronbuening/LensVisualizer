import type { LensDataInput } from "../../types/optics.js";

/**
 * JP 2026-57675 A, Numerical Example 1. Native dimensions; scale = 1.
 * 15 spherical lens elements / 12 air-separated components / 5 motion groups.
 * Source planes 29–30 are retained physically as camera-side rearPlates.
 * Group labels follow FIG. 1: G1, G2 (F1), G3 (P), G4 (F2), G5; the G3 front cemented pair D2 is the
 * patent's subgroup PN. The stop is the first member of G3 (paragraph 0066), so the G3 label spans STO–19;
 * the patent's group-focal-length table lists the powered surfaces 13–19.
 * FOCUS: both negative focus groups move toward the image from infinity to MOD (paragraph 0063 and the
 * FIG. 1 arrows): G2 (F1) by 13.4002 mm and G4 (F2) by 15.0002 mm from surface 1; G1, STO + G3 and G5 fixed.
 * PUBLISHED focus spacings; calculated close distance 224.235550734 mm from image plane,
 * about 0.99406×. Patent 227.4085 mm and 1:1 claims do not reproduce together.
 * Fixed physical iris inferred from exact infinity F/2.9093 calibration: radius 12.981452 mm.
 * Printed MOD Fno 5.8166 is not reproduced; no inferred shrinking-iris schedule.
 * NOTE ON SEMI-DIAMETERS: estimated from JP 2026-57675 A FIG. 1 (INF panel, PDF p19; native 203 dpi raster,
 * 0.1694 mm/px from the 685 px s1–s28 span) plus traced clearance; not patent-published clear apertures.
 * Outer rims match the drawing within about 0.1 mm except where a constraint governs: D1 15.8 (drawn 16.2,
 * which is the L3 knife edge: the surfaces cross at 16.02 mm, the validator rejects 16.1, and 15.8 keeps
 * 0.22 mm of edge), D2 13.7 (drawn 14.15, where s15 touches s16; s15→s16 gap policy) and L10 15.0 (drawn 14.8;
 * the close-focus axial marginal ray needs 14.946). L9 is the drawn 14.5. The drawing ends the concave faces
 * s4/s11/s22/s25/s26 in flat annuli (curves stop near 13.7/13.7/11.3/14.0/14.4 mm); those faces are carried
 * to the element rim because the renderer joins front and rear rims with a straight edge, so the rear corners
 * of L2/L6/L12 run 2.3/0.5/0.75 mm and the front/rear corners of L14 1.0/0.3 mm past the drawn annuli.
 * See audit for sampled coverage.
 * Lens-specific gapSagFrac 0.95: s15→s16 retains 0.11950043 mm actual air at SD 13.7.
 * Common rims; no widened cement seam. Significant corner vignetting remains.
 * Source Table 1 numerical summaries 2/3/6/8b disagree; actual inequality bounds pass.
 * Glass names are coordinate-compatible catalog proxies, not supplier proof. The patent prints only
 * Nd and Abbe numbers, so no nC/nF/ng/dPgF is authored; dispersion comes from the named catalog curves.
 * APD tags: the patent names no anomalous- or low-dispersion material, so nothing is tagged "patent".
 * L3, L5 (FCD515 class), L7 (FCD1 class) and L13 (FCD100 class) are tagged "inferred" from their glass
 * coordinates; their count equals the four LD elements Tamron lists for the F072, whose positions it does not
 * give in text.
 */

const LENS_DATA = {
  "key": "tamron-f072-90mm-f28-di-iii-macro-vxd",
  "maker": "Tamron",
  "name": "TAMRON 90mm f/2.8 Di III MACRO VXD",
  "subtitle": "JP 2026-57675 A — Example 1",
  "specs": [
    "15 ELEMENTS / 12 GROUPS",
    "DESIGN f ≈ 87.306 mm",
    "INFINITY F/2.9093",
    "ALL SPHERICAL"
  ],
  "focalLengthMarketing": 90,
  "focalLengthDesign": 87.30620391888918,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.9093,
  "lensMounts": [
    "sony-fe",
    "nikon-z"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.266,
  "patentNumber": "JP 2026-57675 A",
  "patentAuthors": [
    "Tomohiro Kobayashi"
  ],
  "patentAssignees": [
    "Tamron Co., Ltd."
  ],
  "patentYear": 2026,
  "elementCount": 15,
  "groupCount": 12,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.92119,
      "vd": 23.96,
      "indexReference": "d",
      "fl": 54.51584438,
      "glass": "FDS24-W class (HOYA; coordinate-compatible)",
      "role": "Front positive collector within G1."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.58913,
      "vd": 61.25,
      "indexReference": "d",
      "fl": -33.51244995,
      "glass": "BACD5 class (HOYA; coordinate-compatible)",
      "role": "Negative partner within the fixed positive front group."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "fl": 32.63639606,
      "glass": "FCD515 class (HOYA; coordinate-compatible)",
      "apd": "inferred",
      "apdNote": "ED-class inference from the coordinate-compatible FCD515 curve (catalogue ΔPgF ≈ +0.016); the patent prints only Nd and Abbe numbers and names no special glass.",
      "role": "Positive member of G1 cemented doublet D1.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "indexReference": "d",
      "fl": -42.46741726,
      "glass": "NBFD25 class (HOYA; coordinate-compatible)",
      "role": "Negative member of D1; the cemented pair remains net positive.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "fl": 43.76577031,
      "glass": "FCD515 class (HOYA; coordinate-compatible)",
      "apd": "inferred",
      "apdNote": "ED-class inference from the coordinate-compatible FCD515 curve (catalogue ΔPgF ≈ +0.016); the patent prints only Nd and Abbe numbers and names no special glass.",
      "role": "Positive rear component of G1."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.59349,
      "vd": 67.0,
      "indexReference": "d",
      "fl": -52.67716123,
      "glass": "PCD51 class (HOYA; coordinate-compatible)",
      "role": "Single negative element forming G2, the first focus group F1; moves toward the image for close focus."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 85.66625456,
      "glass": "FCD1 class (HOYA; coordinate-compatible)",
      "apd": "inferred",
      "apdNote": "ED-class inference from the coordinate-compatible FCD1 curve (catalogue ΔPgF ≈ +0.03); the patent prints only Nd and Abbe numbers and names no special glass.",
      "role": "Positive meniscus member of the negative PN cemented pair.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.80809,
      "vd": 22.76,
      "indexReference": "d",
      "fl": -28.31977416,
      "glass": "FD225 class (HOYA; coordinate-compatible)",
      "role": "Negative member of PN doublet D2.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.89286,
      "vd": 20.36,
      "indexReference": "d",
      "fl": 65.30472893,
      "glass": "S-NPH4 class (OHARA; coordinate-compatible)",
      "role": "Positive meniscus in stationary G3."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.755,
      "vd": 52.32,
      "indexReference": "d",
      "fl": 33.6169349,
      "glass": "TAC6L class (HOYA; coordinate-compatible)",
      "role": "Positive rear component of G3."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.86966,
      "vd": 20.02,
      "indexReference": "d",
      "fl": 78.2524039,
      "glass": "FDS20-W class (HOYA; coordinate-compatible)",
      "role": "Positive meniscus member of the negative doublet G4, the second focus group F2.",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.6968,
      "vd": 55.53,
      "indexReference": "d",
      "fl": -27.61110381,
      "glass": "S-LAL14 class (OHARA; coordinate-compatible)",
      "role": "Negative member of doublet D3 (G4 / F2), which moves toward the image for close focus.",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "indexReference": "d",
      "fl": 50.02737429,
      "glass": "FCD100 class (HOYA; coordinate-compatible)",
      "apd": "inferred",
      "apdNote": "ED-class inference from the coordinate-compatible FCD100 curve (catalogue ΔPgF ≈ +0.05); the patent prints only Nd and Abbe numbers and names no special glass.",
      "role": "Low-dispersion positive component in fixed rear group G5."
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconcave Negative",
      "nd": 1.713,
      "vd": 53.94,
      "indexReference": "d",
      "fl": -27.74961359,
      "glass": "LAC8 class (HOYA; coordinate-compatible)",
      "role": "Negative component in fixed G5."
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.44,
      "indexReference": "d",
      "fl": 83.63165904,
      "glass": "FC5 class (HOYA; coordinate-compatible)",
      "role": "Positive rear meniscus in fixed G5."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 100.135,
      "d": 4.3798,
      "nd": 1.92119,
      "elemId": 1,
      "sd": 18.5
    },
    {
      "label": "2",
      "R": -98.6318,
      "d": 1.7173,
      "nd": 1,
      "elemId": 0,
      "sd": 18.5
    },
    {
      "label": "3",
      "R": -75.3119,
      "d": 1.1,
      "nd": 1.58913,
      "elemId": 2,
      "sd": 17.3
    },
    {
      "label": "4",
      "R": 26.9027,
      "d": 5.3372,
      "nd": 1,
      "elemId": 0,
      "sd": 17.3
    },
    {
      "label": "5",
      "R": 60.8824,
      "d": 7.3949,
      "nd": 1.59282,
      "elemId": 3,
      "sd": 15.8
    },
    {
      "label": "6",
      "R": -27.0778,
      "d": 1.0,
      "nd": 1.85451,
      "elemId": 4,
      "sd": 15.8
    },
    {
      "label": "7",
      "R": -108.4941,
      "d": 0.2,
      "nd": 1,
      "elemId": 0,
      "sd": 15.8
    },
    {
      "label": "8",
      "R": 48.092,
      "d": 6.0449,
      "nd": 1.59282,
      "elemId": 5,
      "sd": 16.5
    },
    {
      "label": "9",
      "R": -53.7047,
      "d": 2.1,
      "nd": 1,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "10",
      "R": -124.3739,
      "d": 0.9,
      "nd": 1.59349,
      "elemId": 6,
      "sd": 15.2
    },
    {
      "label": "11",
      "R": 41.8731,
      "d": 18.5258,
      "nd": 1,
      "elemId": 0,
      "sd": 15.2
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 2.0,
      "nd": 1,
      "elemId": 0,
      "sd": 12.981452
    },
    {
      "label": "13",
      "R": -4147.1302,
      "d": 3.3,
      "nd": 1.497,
      "elemId": 7,
      "sd": 13.7
    },
    {
      "label": "14",
      "R": -42.1546,
      "d": 0.8,
      "nd": 1.80809,
      "elemId": 8,
      "sd": 13.7
    },
    {
      "label": "15",
      "R": 50.488,
      "d": 2.0585,
      "nd": 1,
      "elemId": 0,
      "sd": 13.7
    },
    {
      "label": "16",
      "R": -2099.2589,
      "d": 2.9563,
      "nd": 1.89286,
      "elemId": 9,
      "sd": 14.5
    },
    {
      "label": "17",
      "R": -56.7699,
      "d": 0.2,
      "nd": 1,
      "elemId": 0,
      "sd": 14.5
    },
    {
      "label": "18",
      "R": 49.6082,
      "d": 5.2402,
      "nd": 1.755,
      "elemId": 10,
      "sd": 15.0
    },
    {
      "label": "19",
      "R": -49.6082,
      "d": 2.1,
      "nd": 1,
      "elemId": 0,
      "sd": 15.0
    },
    {
      "label": "20",
      "R": -105.2889,
      "d": 2.3,
      "nd": 1.86966,
      "elemId": 11,
      "sd": 13.5
    },
    {
      "label": "21",
      "R": -41.7558,
      "d": 0.8,
      "nd": 1.6968,
      "elemId": 12,
      "sd": 13.5
    },
    {
      "label": "22",
      "R": 35.9595,
      "d": 17.6506,
      "nd": 1,
      "elemId": 0,
      "sd": 13.5
    },
    {
      "label": "23",
      "R": 42.787,
      "d": 6.0298,
      "nd": 1.437,
      "elemId": 13,
      "sd": 15
    },
    {
      "label": "24",
      "R": -42.787,
      "d": 15.1674,
      "nd": 1,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "25",
      "R": -30.1667,
      "d": 1.0,
      "nd": 1.713,
      "elemId": 14,
      "sd": 15.7
    },
    {
      "label": "26",
      "R": 58.2877,
      "d": 0.8918,
      "nd": 1,
      "elemId": 0,
      "sd": 15.7
    },
    {
      "label": "27",
      "R": 35.8576,
      "d": 4.8483,
      "nd": 1.48749,
      "elemId": 15,
      "sd": 17.7
    },
    {
      "label": "28",
      "R": 284.4302,
      "d": 19.4558,
      "nd": 1,
      "elemId": 0,
      "sd": 17.7
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2.5,
      "nd": 1.51633,
      "vd": 64.14,
      "glass": "S-BSL7 class (OHARA; coordinate-compatible)",
      "indexReference": "d",
      "gapAfterMm": 1,
      "source": "JP 2026-57675 A, Example 1, PDF p12 paragraph 0076, surfaces 29–30. Physical plate and trailing gap retained."
    }
  ],
  "asph": {},
  "var": {
    "9": [
      2.1,
      15.5002
    ],
    "11": [
      18.5258,
      5.1255
    ],
    "19": [
      2.1,
      17.1003
    ],
    "22": [
      17.6506,
      2.65
    ]
  },
  "varLabels": [
    [
      "9",
      "D(9)"
    ],
    [
      "11",
      "D(11)"
    ],
    [
      "19",
      "D(19)"
    ],
    [
      "22",
      "D(22)"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "9"
    },
    {
      "text": "G2 (F1)",
      "fromSurface": "10",
      "toSurface": "11"
    },
    {
      "text": "G3 (P)",
      "fromSurface": "STO",
      "toSurface": "19"
    },
    {
      "text": "G4 (F2)",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "G5",
      "fromSurface": "23",
      "toSurface": "28"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2 (PN)",
      "fromSurface": "13",
      "toSurface": "15"
    },
    {
      "text": "D3",
      "fromSurface": "20",
      "toSurface": "22"
    }
  ],
  "closeFocusM": 0.224235550734,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 224.235550734,
      "distanceReference": "image-plane",
      "source": "Calculated d-line paraxial conjugate of unchanged JP2026057675A Example 1 MOD spacings, PDF pp12–13, retaining the physical cover plate and authored sensor; matrix B=0 independently checked. Patent prints 227.4085 mm, which does not reproduce this conjugate."
    }
  ],
  "focusDescription": "Internal two-group focus: G2 (F1, element 6) and G4 (F2, cemented elements 11–12) both move toward the image from infinity to close focus, by 13.40 mm and 15.00 mm; G1, the stop with G3 (P) and G5 stay fixed. Published Example 1 spacing endpoints; close distance is the calculated d-line paraxial object-to-image conjugate, 0.224235550734 m (0.99406×). The patent prints 0.2274085 m, which does not focus on the unchanged image plane. Intermediate gap interpolation and distance labels are approximate. The infinity-calibrated physical iris remains fixed; printed close Fno 5.8166 is not reproduced.",
  "nominalFno": 2.9093,
  "fstopSeries": [
    2.9093,
    4,
    5.6,
    8,
    11,
    16
  ],
  "apertureBlades": 12,
  "apertureBladeRoundedness": 1,
  "yScFill": 0.3,
  "gapSagFrac": 0.95
} satisfies LensDataInput;

export default LENS_DATA;
