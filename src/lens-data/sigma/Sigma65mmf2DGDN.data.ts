import type { LensDataInput } from "../../types/optics.js";

/**
 * JP2021128263A, Numerical Example1. Native scale1: no marketing rescale or source repair.
 * 12 physical elements /9 air-separated components; S3,S17,S18 are geometric aspheres.
 * Glass labels are catalog coordinate classes, not confirmed supplier/melt identities.
 * Source deltaPgF values are retained in the dossier and converted to the pinned runtime normal line.
 * PUBLISHED focus endpoints; interpolation between them is modeled and not patent-published.
 * Native BF19.3302mm is preserved despite about1micrometre Gaussian residual defocus.
 * No source-listed rear plates or dummy planes; all refracting lens surfaces retained.
 * Stop position S11 is published. Stop radius is inferred by exact Snell tracing of Gaussian EFL/(2*2.07) input height.
 * NOTE ON SEMI-DIAMETERS: none are published. Values are estimated from Fig. 1 (Example 1, infinity) and
 * floor-checked by exact real-ray trace at both published focus endpoints; they are not factory apertures.
 * The figure raster is about 2% taller than isotropic (3.9% on the rendered page), so heights are read at a
 * vertical scale fitted to the drawn arcs of S4, S9, S13, S14 and S15 (0.1238 mm/px against 0.1264 mm/px
 * along the axis). Every outer rim is the drawn one at that scale. S10 (13.8) and S13 (11.0) stop where the
 * drawn curves end at flat lands; S13 sits just above the F/2.07 axial marginal height (10.85 mm) and is not
 * raised to the 12.4 mm rim, which at closest focus would reach past the S14 vertex plane. S20/S21 stay at
 * 14.1 mm: the figure draws edge contact near 14.9 mm, which the air-gap intrusion policy does not allow.
 * E1's faces carry short lands from about 17 mm; its 18.1 mm rim is the drawn outer rim, above D1 (17.4).
 * NOTE ON DESIGNATIONS: the patent uses L1/L2/L3 for its three lens groups (Fig. 1 brackets, group table) and
 * names no individual element; it marks only the anomalous-dispersion positive lenses P1 (two leaders, here
 * E2 and E6) and P2 (E4). Elements are therefore E1-E12 in this file so that they cannot be read as groups.
 * Standalone element fl values are thick-lens powers in air, not in-situ component powers.
 */

const LENS_DATA = {
  "key": "sigma-65mm-f2-dg-dn",
  "maker": "Sigma",
  "name": "SIGMA 65mm f/2 DG DN | Contemporary",
  "subtitle": "JP 2021-128263 A Numerical Example 1; production construction correlation, exact factory prescription unconfirmed",
  "specs": [
    "12 ELEMENTS / 9 GROUPS",
    "DESIGN f = 63.10 mm",
    "DESIGN F/2.07",
    "3 ASPHERICAL SURFACES / 2 ELEMENTS",
    "PUBLISHED INNER-FOCUS ENDPOINTS"
  ],
  "focalLengthMarketing": 65,
  "focalLengthDesign": 63.1,
  "apertureMarketing": 2,
  "apertureDesign": 2.07,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.26,
  "patentNumber": "JP 2021-128263 A",
  "patentAuthors": [
    "Hitoshi Murakami",
    "Ryosuke Sato"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2021,
  "elementCount": 12,
  "groupCount": 9,
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Biconcave Negative",
      "nd": 1.54072,
      "vd": 47.2,
      "fl": -91.935182,
      "glass": "E-FEL2 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Front negative singlet of the fixed positive first group L1."
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Biconvex Positive (1x Asph)",
      "nd": 1.59201,
      "vd": 67.02,
      "fl": 33.416825,
      "glass": "M-PCD51 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Positive front member of cemented doublet D1 in group L1; object-side asphere on S3. Marked as a positive lens P1 in Fig. 1.",
      "cemented": "D1",
      "apd": "patent",
      "dPgF": 0.00472164,
      "apdNote": "Patent positive lens P1 (Fig. 1 leader). Source deltaPgF=0.0081 uses patent normal line; converted application dPgF=0.00472164. Supplier unconfirmed."
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.62004,
      "vd": 36.3,
      "fl": -76.763266,
      "glass": "E-F2 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Negative rear member of cemented doublet D1 in group L1; concave to the object.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.94595,
      "vd": 17.98,
      "fl": 71.396251,
      "glass": "FDS18-W class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "High-index positive meniscus in group L1, convex to the object; the patent's positive lens P2.",
      "apd": "patent",
      "dPgF": 0.04090836,
      "apdNote": "Patent positive lens P2 (Fig. 1 leader; conditions 6-7). Source deltaPgF=0.0385 uses patent normal line; converted application dPgF=0.04090836. Supplier unconfirmed."
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.76182,
      "vd": 26.61,
      "fl": -38.689107,
      "glass": "FD140 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Negative front member of cemented doublet D2 in group L1; convex to the object.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.55032,
      "vd": 75.5,
      "fl": 46.797651,
      "glass": "FCD705 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Low-dispersion positive rear member of cemented doublet D2 in group L1, convex to the object; the patent's positive lens P1 for conditions (3) and (4).",
      "cemented": "D2",
      "apd": "patent",
      "dPgF": 0.023021,
      "apdNote": "Patent positive lens P1 (Fig. 1 leader; conditions 3-4). Source deltaPgF=0.0274 uses patent normal line; converted application dPgF=0.02302100. Supplier unconfirmed."
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.48749,
      "vd": 70.44,
      "fl": -64.786371,
      "glass": "FC5 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Single negative meniscus, convex to the object, that forms the whole inner-focus group L2; moves toward the image for close focus."
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.90043,
      "vd": 37.37,
      "fl": 20.412416,
      "glass": "TAFD37A class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Positive front member of cemented doublet D3 in the fixed rear group L3.",
      "cemented": "D3"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.73037,
      "vd": 32.23,
      "fl": -24.642358,
      "glass": "NBFD32 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Negative rear member of cemented doublet D3 in group L3.",
      "cemented": "D3"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Element 10",
      "type": "Biconvex Positive (2x Asph)",
      "nd": 1.8061,
      "vd": 40.73,
      "fl": 38.155964,
      "glass": "M-NBFD130 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Positive singlet in group L3 with aspheres on both faces (S17, S18)."
    },
    {
      "id": 11,
      "name": "E11",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.69895,
      "vd": 30.05,
      "fl": -62.386279,
      "glass": "E-FD15L class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Penultimate negative singlet in group L3."
    },
    {
      "id": 12,
      "name": "E12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.62004,
      "vd": 36.3,
      "fl": -79.272471,
      "glass": "E-F2 class (HOYA; coordinate match, supplier unconfirmed)",
      "role": "Final negative singlet in group L3."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -73.9758,
      "d": 0.9,
      "nd": 1.54072,
      "elemId": 1,
      "sd": 18.1
    },
    {
      "label": "2",
      "R": 152.2022,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 18.1
    },
    {
      "label": "3A",
      "R": 43.1763,
      "d": 10.058,
      "nd": 1.59201,
      "elemId": 2,
      "sd": 17.4
    },
    {
      "label": "4",
      "R": -33.3502,
      "d": 2.6611,
      "nd": 1.62004,
      "elemId": 3,
      "sd": 17.4
    },
    {
      "label": "5",
      "R": -114.826,
      "d": 0.9,
      "nd": 1,
      "elemId": 0,
      "sd": 17.4
    },
    {
      "label": "6",
      "R": 47.7725,
      "d": 3.373,
      "nd": 1.94595,
      "elemId": 4,
      "sd": 16.5
    },
    {
      "label": "7",
      "R": 157.6383,
      "d": 0.5994,
      "nd": 1,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "8",
      "R": 58.6358,
      "d": 0.9,
      "nd": 1.76182,
      "elemId": 5,
      "sd": 15.5
    },
    {
      "label": "9",
      "R": 19.4844,
      "d": 6.1174,
      "nd": 1.55032,
      "elemId": 6,
      "sd": 15.5
    },
    {
      "label": "10",
      "R": 71.1199,
      "d": 3.113,
      "nd": 1,
      "elemId": 0,
      "sd": 13.8
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 2.0,
      "nd": 1,
      "elemId": 0,
      "sd": 11.995819908763362
    },
    {
      "label": "12",
      "R": 225.0789,
      "d": 0.9,
      "nd": 1.48749,
      "elemId": 7,
      "sd": 12.4
    },
    {
      "label": "13",
      "R": 27.6601,
      "d": 12.4912,
      "nd": 1,
      "elemId": 0,
      "sd": 11.0
    },
    {
      "label": "14",
      "R": 49.7304,
      "d": 8.6574,
      "nd": 1.90043,
      "elemId": 8,
      "sd": 15.3
    },
    {
      "label": "15",
      "R": -26.7508,
      "d": 0.9,
      "nd": 1.73037,
      "elemId": 9,
      "sd": 15.3
    },
    {
      "label": "16",
      "R": 55.788,
      "d": 4.1773,
      "nd": 1,
      "elemId": 0,
      "sd": 15.3
    },
    {
      "label": "17A",
      "R": 56.9624,
      "d": 5.3448,
      "nd": 1.8061,
      "elemId": 10,
      "sd": 16.3
    },
    {
      "label": "18A",
      "R": -64.0587,
      "d": 0.55,
      "nd": 1,
      "elemId": 0,
      "sd": 16.3
    },
    {
      "label": "19",
      "R": -223.2111,
      "d": 0.9,
      "nd": 1.69895,
      "elemId": 11,
      "sd": 16.2
    },
    {
      "label": "20",
      "R": 54.2812,
      "d": 4.0773,
      "nd": 1,
      "elemId": 0,
      "sd": 14.1
    },
    {
      "label": "21",
      "R": -57.5123,
      "d": 0.9,
      "nd": 1.62004,
      "elemId": 12,
      "sd": 14.1
    },
    {
      "label": "22",
      "R": 340.1572,
      "d": 19.3302,
      "nd": 1,
      "elemId": 0,
      "sd": 16.5
    }
  ],
  "asph": {
    "3A": {
      "K": 0.0,
      "A4": -3.08013e-06,
      "A6": -6.06027e-10,
      "A8": 3.90717e-13,
      "A10": 0.0,
      "A12": 0,
      "A14": 0
    },
    "17A": {
      "K": 0.0,
      "A4": -1.63981e-06,
      "A6": 2.03135e-09,
      "A8": -4.94594e-12,
      "A10": 0.0,
      "A12": 0,
      "A14": 0
    },
    "18A": {
      "K": 0.0,
      "A4": 6.10558e-06,
      "A6": -3.86746e-09,
      "A8": 2.12418e-11,
      "A10": -3.8467e-14,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "STO": [
      2,
      11.7694
    ],
    "13": [
      12.4912,
      2.7218
    ]
  },
  "varLabels": [
    [
      "STO",
      "d11"
    ],
    [
      "13",
      "d13"
    ]
  ],
  "groups": [
    {
      "text": "L1 + (fixed)",
      "fromSurface": "1",
      "toSurface": "10"
    },
    {
      "text": "L2 - (focus)",
      "fromSurface": "12",
      "toSurface": "13"
    },
    {
      "text": "L3 + (fixed)",
      "fromSurface": "14",
      "toSurface": "22"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3A",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "D3",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "closeFocusM": 0.549996,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 460.9959,
      "distanceReference": "first-surface",
      "source": "JP2021128263A Numerical Example1, PDF15/printed14: d0=460.9959mm; d11=11.7694,d13=2.7218,BF=19.3302mm"
    }
  ],
  "focusDescription": "PUBLISHED endpoints: only group L2 (element E7, surfaces 12-13) moves, 9.7694 mm toward the image from infinity to the closest state; groups L1 and L3, the stop and the image plane remain fixed. Native near d0 = 460.9959 mm; rounded-table object-to-image total = 549.9960 mm. Intermediate linear gap interpolation is modeled, not a published focus law.",
  "nominalFno": 2.07,
  "fstopSeries": [
    2.07,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "apertureBlades": 9,
  "maxFstop": 22,
  "yScFill": 0.36
} satisfies LensDataInput;

export default LENS_DATA;
