import type { LensDataInput } from "../../types/optics.js";

/* JP 2020-020948 A (the front page prints the serial as 2020-20948), Numerical Example 1;
 * Sigma Corporation, inventor Noriyuki Ogasawara.
 * Architectural correlation with the 60-600mm Sports lens; not a confirmed factory prescription.
 * Patent scale, unscaled. All 45 patent surfaces and all nine tabulated zoom/focus states are
 * kept: 25 elements in 19 air-separated groups, all spherical, no cover or filter plate.
 * Patent surface 25 is the aperture stop (STO) at its printed position.
 * NOTE ON SEMI-DIAMETERS: estimated from Figure 1 (wide end), floor-checked by exact real-ray
 * trace at all nine published zoom/focus states; the patent prints no effective diameters.
 * The sheet draws the section about 1.13x too tall for its axial scale (surface curvatures,
 * the L2 and L3 zero-edge heights and the stop mark agree on the factor), so rim heights are
 * read at 0.234 mm per pixel after that correction, good to about 0.25 mm.
 * Surfaces 1-3 share the 47.6 mm the figure draws for the front cemented component (two
 * readings, 47.6 and 47.5 mm), where L2 keeps 0.71 mm of edge; its edge reaches zero at
 * 49.27 mm. L3 carries its drawn 45.7 mm. Neither is a known factory blank. The patent's
 * f/6.50 beam needs 44.44 mm at surface 1.
 * Surface 8 ends where the figure ends its curve (22.3 mm); the figure then squares L5 off
 * with a flat out to 26.6 mm, which a spherical face cannot follow because it would meet L6
 * at 23.5 mm. Surface 16 stays at 14.6 mm: surfaces 16 and 17 meet at 15.0 mm and the tele
 * axial ray needs 14.47 mm. Surface 17 carries the 16.5 mm of the cemented L10-L11 block,
 * which the figure draws square-cut, so only L9 keeps an inclined rear edge there. Elements
 * the figure draws square-cut carry one height on both faces (L1, L6, L16 and L24 include a
 * short flat the figure draws on the concave face).
 * gapSagFrac is 0.95 because the 16-17 air gap uses 0.944 of its 4.1944 mm at the 14.6 mm
 * height the two faces share; every other gap stays under the default 0.90.
 * Diagram labels follow the patent: elements L1-L25, groups G1-G6 with the G3a / G3b split
 * that Figure 1 draws (G3b is the stabilizing subgroup), and variable gaps d5, d10, d19, d32,
 * d38 and BF in the patent's lower case; D1-D6 above the section mark the six cemented pairs.
 * The full on-axis beam passes at every state; off-axis vignetting is real and stays visible.
 * Iris radii are derived from the patent's infinity F-numbers (4.48 / 5.55 / 6.50), not from
 * published diameters, and are held at each zoom setting during focus. The F-numbers printed
 * on the patent's finite-distance aberration charts are not reproduced by that fixed iris and
 * are not used as an iris schedule.
 * focusPositions [0, 0.2, 1] are the patent's infinity, 13 m and 2.6 m states. The distances
 * are taken as object-to-image, which the numbers support but the patent does not state. No
 * finiteConjugates record is authored and nothing is extrapolated to the marketed 0.6 m
 * minimum focus. Interpolation between states is approximate. G3 stays fixed to the image
 * plane; G6 focuses. Gaps 32 and 38 reverse direction across the zoom range.
 * At finite focus the viewer's ray fans can start outside the pupil the iris admits; those
 * rays stop at a rim or the iris, and the fans are not retuned to hide it.
 * Glass names are HOYA and OHARA catalog equivalents matched on nd and vd, not supplier or
 * melt identity; all 25 resolve to catalog dispersion data.
 * apd "inferred" on L2 (SLD) and on L3, L17, L23 (FLD) follows the positions coloured in
 * Sigma's construction diagram. Sigma lists 9 rounded diaphragm blades and a minimum aperture
 * of F22-32 (apertureBlades 9, maxFstop 22).
 */

const LENS_DATA = {
  "key": "sigma-60-600mm-f45-63-dg-os-hsm-sports",
  "maker": "Sigma",
  "name": "SIGMA 60-600mm f/4.5-6.3 DG OS HSM | Sports",
  "subtitle": "JP 2020-020948 A, Numerical Example 1; architectural correlation",
  "specs": [
    "25 ELEMENTS / 19 GROUPS",
    "DESIGN f = 62.03–577.73 mm",
    "DESIGN F/4.48–6.50",
    "ALL SPHERICAL"
  ],
  "focalLengthMarketing": [
    60,
    600
  ],
  "focalLengthDesign": [
    62.03,
    577.73
  ],
  "apertureMarketing": 4.5,
  "apertureDesign": 4.48,
  "lensMounts": [
    "sigma-sa",
    "canon-ef",
    "nikon-f"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2020-020948 A",
  "patentAuthors": [
    "Noriyuki Ogasawara"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2020,
  "elementCount": 25,
  "groupCount": 19,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.87071,
      "vd": 40.73,
      "fl": -325.00611,
      "glass": "TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative front meniscus of G1, cemented to L2",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 256.286457,
      "glass": "FCD1 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD1-class low-dispersion coordinate (1.49700 / 81.61; catalog ΔPgF +0.0312 from the Schott normal line) at the one position Sigma's construction diagram marks as SLD glass; inferred, not a patent designation.",
      "role": "Positive low-dispersion meniscus of the G1 front doublet",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Plano-Convex",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 287.448741,
      "glass": "FCD100 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD100-class fluorite-like coordinate (1.43700 / 95.10; catalog ΔPgF +0.0498 from the Schott normal line) at one of the three positions Sigma's construction diagram marks as FLD glass; inferred, not a patent designation.",
      "role": "Positive plano-convex element completing G1"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.46,
      "fl": 131.198805,
      "glass": "FD60-W (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive front member of the G2 variator doublet",
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.87071,
      "vd": 40.73,
      "fl": -73.947125,
      "glass": "TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative rear member of the G2 variator doublet",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.87071,
      "vd": 40.73,
      "fl": -93.069927,
      "glass": "TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative meniscus completing the G2 variator"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.60342,
      "vd": 38.01,
      "fl": 136.110237,
      "glass": "E-F5 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive front element of the image-fixed G3a subgroup"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.51742,
      "vd": 52.15,
      "fl": 165.577086,
      "glass": "E-CF6 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive meniscus completing the G3a subgroup"
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.757,
      "vd": 47.82,
      "fl": -73.776961,
      "glass": "S-LAM54 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative first element of the G3b stabilizing subgroup"
    },
    {
      "id": 10,
      "name": "L10",
      "diagramLabel": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.61997,
      "vd": 63.88,
      "fl": -50.435629,
      "glass": "PCD40 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative front member of the G3b stabilizing doublet",
      "cemented": "D3"
    },
    {
      "id": 11,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.85478,
      "vd": 24.8,
      "fl": 80.650523,
      "glass": "S-NBH56 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive rear member of the G3b stabilizing doublet",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.8061,
      "vd": 33.27,
      "fl": 119.381727,
      "glass": "NBFD15-W (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive front element of G4, ahead of the stop"
    },
    {
      "id": 13,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.59349,
      "vd": 67,
      "fl": 97.73541,
      "glass": "PCD51 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive front member of the G4 doublet ahead of the stop",
      "cemented": "D4"
    },
    {
      "id": 14,
      "name": "L14",
      "diagramLabel": "L14",
      "label": "Element 14",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.78,
      "fl": -175.915559,
      "glass": "FDS90-SG (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative rear member of the G4 doublet ahead of the stop",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "L15",
      "diagramLabel": "L15",
      "label": "Element 15",
      "type": "Positive Meniscus",
      "nd": 1.58913,
      "vd": 61.25,
      "fl": 111.40876,
      "glass": "BACD5 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive meniscus directly behind the stop in G4"
    },
    {
      "id": 16,
      "name": "L16",
      "diagramLabel": "L16",
      "label": "Element 16",
      "type": "Negative Meniscus",
      "nd": 1.95375,
      "vd": 32.32,
      "fl": -100.219263,
      "glass": "TAFD45L (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative meniscus between L15 and the rear G4 doublet"
    },
    {
      "id": 17,
      "name": "L17",
      "diagramLabel": "L17",
      "label": "Element 17",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 62.182156,
      "glass": "FCD100 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD100-class fluorite-like coordinate (1.43700 / 95.10; catalog ΔPgF +0.0498 from the Schott normal line) at one of the three positions Sigma's construction diagram marks as FLD glass; inferred, not a patent designation.",
      "role": "Positive low-dispersion front member of the rear G4 doublet",
      "cemented": "D5"
    },
    {
      "id": 18,
      "name": "L18",
      "diagramLabel": "L18",
      "label": "Element 18",
      "type": "Negative Meniscus",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": -71.049712,
      "glass": "TAFD35L (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative rear member of the rear G4 doublet",
      "cemented": "D5"
    },
    {
      "id": 19,
      "name": "L19",
      "diagramLabel": "L19",
      "label": "Element 19",
      "type": "Negative Meniscus",
      "nd": 1.87071,
      "vd": 40.73,
      "fl": -115.590379,
      "glass": "TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative front meniscus of G5"
    },
    {
      "id": 20,
      "name": "L20",
      "diagramLabel": "L20",
      "label": "Element 20",
      "type": "Biconvex Positive",
      "nd": 1.56883,
      "vd": 56.04,
      "fl": 122.016213,
      "glass": "BAC4 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "First positive element of G5"
    },
    {
      "id": 21,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "Element 21",
      "type": "Biconvex Positive",
      "nd": 1.62041,
      "vd": 60.34,
      "fl": 82.72512,
      "glass": "BACD16 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Second positive element of G5, facing the focus gap"
    },
    {
      "id": 22,
      "name": "L22",
      "diagramLabel": "L22",
      "label": "Element 22",
      "type": "Positive Meniscus",
      "nd": 1.673,
      "vd": 38.15,
      "fl": 160.074817,
      "glass": "S-NBH52 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive front meniscus of the G6 focus group"
    },
    {
      "id": 23,
      "name": "L23",
      "diagramLabel": "L23",
      "label": "Element 23",
      "type": "Biconcave Negative",
      "nd": 1.437,
      "vd": 95.1,
      "fl": -78.366108,
      "glass": "FCD100 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FCD100-class fluorite-like coordinate (1.43700 / 95.10; catalog ΔPgF +0.0498 from the Schott normal line) at one of the three positions Sigma's construction diagram marks as FLD glass; inferred, not a patent designation.",
      "role": "Negative low-dispersion element of the G6 focus group"
    },
    {
      "id": 24,
      "name": "L24",
      "diagramLabel": "L24",
      "label": "Element 24",
      "type": "Biconcave Negative",
      "nd": 1.95375,
      "vd": 32.32,
      "fl": -28.404169,
      "glass": "TAFD45L (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Negative front member of the final G6 doublet",
      "cemented": "D6"
    },
    {
      "id": 25,
      "name": "L25",
      "diagramLabel": "L25",
      "label": "Element 25",
      "type": "Biconvex Positive",
      "nd": 1.85478,
      "vd": 24.8,
      "fl": 42.222023,
      "glass": "S-NBH56 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed)",
      "role": "Positive rear member of the final G6 doublet",
      "cemented": "D6"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 191.4478,
      "d": 3,
      "nd": 1.87071,
      "elemId": 1,
      "sd": 47.6
    },
    {
      "label": "2",
      "R": 113.3602,
      "d": 10.0505,
      "nd": 1.497,
      "elemId": 2,
      "sd": 47.6
    },
    {
      "label": "3",
      "R": 1000,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 47.6
    },
    {
      "label": "4",
      "R": 125.6151,
      "d": 10.1084,
      "nd": 1.437,
      "elemId": 3,
      "sd": 45.7
    },
    {
      "label": "5",
      "R": 1000000000000000,
      "d": 4.4174,
      "nd": 1,
      "elemId": 0,
      "sd": 45.7
    },
    {
      "label": "6",
      "R": 133.4879,
      "d": 4.4571,
      "nd": 1.80518,
      "elemId": 4,
      "sd": 26.6
    },
    {
      "label": "7",
      "R": -498.8095,
      "d": 1.5,
      "nd": 1.87071,
      "elemId": 5,
      "sd": 26.6
    },
    {
      "label": "8",
      "R": 74.0328,
      "d": 3.232,
      "nd": 1,
      "elemId": 0,
      "sd": 22.3
    },
    {
      "label": "9",
      "R": 457.8311,
      "d": 1.5,
      "nd": 1.87071,
      "elemId": 6,
      "sd": 23.7
    },
    {
      "label": "10",
      "R": 68.7453,
      "d": 34.7575,
      "nd": 1,
      "elemId": 0,
      "sd": 23.7
    },
    {
      "label": "11",
      "R": 96.7106,
      "d": 3.6537,
      "nd": 1.60342,
      "elemId": 7,
      "sd": 17.9
    },
    {
      "label": "12",
      "R": -537.08,
      "d": 7.8844,
      "nd": 1,
      "elemId": 0,
      "sd": 17.9
    },
    {
      "label": "13",
      "R": 51.0188,
      "d": 3.2604,
      "nd": 1.51742,
      "elemId": 8,
      "sd": 16.6
    },
    {
      "label": "14",
      "R": 123.3817,
      "d": 4.808,
      "nd": 1,
      "elemId": 0,
      "sd": 16.6
    },
    {
      "label": "15",
      "R": -490.1727,
      "d": 0.9,
      "nd": 1.757,
      "elemId": 9,
      "sd": 15.9
    },
    {
      "label": "16",
      "R": 63.0806,
      "d": 4.1944,
      "nd": 1,
      "elemId": 0,
      "sd": 14.6
    },
    {
      "label": "17",
      "R": -48.573,
      "d": 1,
      "nd": 1.61997,
      "elemId": 10,
      "sd": 16.5
    },
    {
      "label": "18",
      "R": 88.4615,
      "d": 3.1979,
      "nd": 1.85478,
      "elemId": 11,
      "sd": 16.5
    },
    {
      "label": "19",
      "R": -307.1652,
      "d": 51.3574,
      "nd": 1,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "20",
      "R": 305.1027,
      "d": 3.5176,
      "nd": 1.8061,
      "elemId": 12,
      "sd": 18.6
    },
    {
      "label": "21",
      "R": -139.8486,
      "d": 0.5148,
      "nd": 1,
      "elemId": 0,
      "sd": 18.6
    },
    {
      "label": "22",
      "R": 84.3581,
      "d": 3.8214,
      "nd": 1.59349,
      "elemId": 13,
      "sd": 18.4
    },
    {
      "label": "23",
      "R": -182.5452,
      "d": 1,
      "nd": 1.84666,
      "elemId": 14,
      "sd": 18.4
    },
    {
      "label": "24",
      "R": 811.1016,
      "d": 7.9,
      "nd": 1,
      "elemId": 0,
      "sd": 18.4
    },
    {
      "label": "STO",
      "R": 1000000000000000,
      "d": 7.9164,
      "nd": 1,
      "elemId": 0,
      "sd": 15.493839907754841
    },
    {
      "label": "26",
      "R": 48.7235,
      "d": 3.8942,
      "nd": 1.58913,
      "elemId": 15,
      "sd": 16.6
    },
    {
      "label": "27",
      "R": 183.5032,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 16.6
    },
    {
      "label": "28",
      "R": 67.2019,
      "d": 0.9,
      "nd": 1.95375,
      "elemId": 16,
      "sd": 16.3
    },
    {
      "label": "29",
      "R": 39.2014,
      "d": 2.0725,
      "nd": 1,
      "elemId": 0,
      "sd": 16.3
    },
    {
      "label": "30",
      "R": 53.4025,
      "d": 6.105,
      "nd": 1.437,
      "elemId": 17,
      "sd": 15.8
    },
    {
      "label": "31",
      "R": -53.4025,
      "d": 1,
      "nd": 1.91082,
      "elemId": 18,
      "sd": 15.8
    },
    {
      "label": "32",
      "R": -308.2583,
      "d": 10.3019,
      "nd": 1,
      "elemId": 0,
      "sd": 15.8
    },
    {
      "label": "33",
      "R": 251.9085,
      "d": 0.9,
      "nd": 1.87071,
      "elemId": 19,
      "sd": 15.2
    },
    {
      "label": "34",
      "R": 71.7942,
      "d": 10.0309,
      "nd": 1,
      "elemId": 0,
      "sd": 15.2
    },
    {
      "label": "35",
      "R": 303.8818,
      "d": 4.2555,
      "nd": 1.56883,
      "elemId": 20,
      "sd": 16.3
    },
    {
      "label": "36",
      "R": -89.4946,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 16.3
    },
    {
      "label": "37",
      "R": 59.1502,
      "d": 4.358,
      "nd": 1.62041,
      "elemId": 21,
      "sd": 16.3
    },
    {
      "label": "38",
      "R": -376.9348,
      "d": 2.1949,
      "nd": 1,
      "elemId": 0,
      "sd": 16.3
    },
    {
      "label": "39",
      "R": -216.5223,
      "d": 2.9225,
      "nd": 1.673,
      "elemId": 22,
      "sd": 14.3
    },
    {
      "label": "40",
      "R": -72.3284,
      "d": 0.7528,
      "nd": 1,
      "elemId": 0,
      "sd": 14.3
    },
    {
      "label": "41",
      "R": -151.7296,
      "d": 1,
      "nd": 1.437,
      "elemId": 23,
      "sd": 14
    },
    {
      "label": "42",
      "R": 44.3172,
      "d": 19.9501,
      "nd": 1,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "43",
      "R": -35.2519,
      "d": 0.9,
      "nd": 1.95375,
      "elemId": 24,
      "sd": 15.1
    },
    {
      "label": "44",
      "R": 118.4711,
      "d": 4.3638,
      "nd": 1.85478,
      "elemId": 25,
      "sd": 15.1
    },
    {
      "label": "45",
      "R": -51.0206,
      "d": 53.5844,
      "nd": 1,
      "elemId": 0,
      "sd": 15.1
    }
  ],
  "asph": {},
  "var": {
    "5": [
      [
        4.4174,
        4.4174,
        4.4174
      ],
      [
        81.0011,
        81.0011,
        81.0011
      ],
      [
        134.6875,
        134.6875,
        134.6875
      ]
    ],
    "10": [
      [
        34.7575,
        34.7575,
        34.7575
      ],
      [
        14.6816,
        14.6816,
        14.6816
      ],
      [
        4.4816,
        4.4816,
        4.4816
      ]
    ],
    "19": [
      [
        51.3574,
        51.3574,
        51.3574
      ],
      [
        26.1367,
        26.1367,
        26.1367
      ],
      [
        2.013,
        2.013,
        2.013
      ]
    ],
    "32": [
      [
        10.3019,
        10.3019,
        10.3019
      ],
      [
        6.2172,
        6.2172,
        6.2172
      ],
      [
        12.3614,
        12.3614,
        12.3614
      ]
    ],
    "38": [
      [
        2.1949,
        2.2771,
        2.6364
      ],
      [
        7.8423,
        8.3089,
        10.2351
      ],
      [
        4.389,
        7.7134,
        20.2935
      ]
    ],
    "45": [
      [
        53.5844,
        53.5021,
        53.1429
      ],
      [
        77.2424,
        76.7756,
        74.8497
      ],
      [
        98.6753,
        95.3509,
        82.7706
      ]
    ]
  },
  "focusPositions": [
    0,
    0.2,
    1
  ],
  "varLabels": [
    [
      "5",
      "d5"
    ],
    [
      "10",
      "d10"
    ],
    [
      "19",
      "d19"
    ],
    [
      "32",
      "d32"
    ],
    [
      "38",
      "d38"
    ],
    [
      "45",
      "BF"
    ]
  ],
  "zoomPositions": [
    62.03,
    183.64,
    577.73
  ],
  "zoomApertureModel": "from-nominal-fno",
  "zoomLabels": [
    "Wide",
    "Tele"
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6",
      "toSurface": "10"
    },
    {
      "text": "G3a",
      "fromSurface": "11",
      "toSurface": "14"
    },
    {
      "text": "G3b",
      "fromSurface": "15",
      "toSurface": "19"
    },
    {
      "text": "G4",
      "fromSurface": "20",
      "toSurface": "32"
    },
    {
      "text": "G5",
      "fromSurface": "33",
      "toSurface": "38"
    },
    {
      "text": "G6",
      "fromSurface": "39",
      "toSurface": "45"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "D2",
      "fromSurface": "6",
      "toSurface": "8"
    },
    {
      "text": "D3",
      "fromSurface": "17",
      "toSurface": "19"
    },
    {
      "text": "D4",
      "fromSurface": "22",
      "toSurface": "24"
    },
    {
      "text": "D5",
      "fromSurface": "30",
      "toSurface": "32"
    },
    {
      "text": "D6",
      "fromSurface": "43",
      "toSurface": "45"
    }
  ],
  "closeFocusM": 2.6,
  "focusDescription": "PUBLISHED: rear focus. G6 (L22–L25) moves toward the image as the object approaches, widening gap d38 by 0.44 mm at the wide end, 2.39 mm at 183.64 mm and 15.90 mm at the tele end between infinity and 2.6 m. The patent tabulates infinity, 13 m and 2.6 m at all three zoom stations; the distances are taken as object-to-image, which the numbers support but the patent does not state. States in between are interpolated. The marketed 0.6 m minimum focus at the wide end is closer than the patent's nearest state and is not modeled.",
  "nominalFno": [
    4.48,
    5.55,
    6.5
  ],
  "fstopSeries": [
    4.48,
    5.55,
    6.5,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 9,
  "yScFill": 0.3,
  "gapSagFrac": 0.95
} satisfies LensDataInput;

export default LENS_DATA;
