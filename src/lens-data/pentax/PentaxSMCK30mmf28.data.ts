import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,975,091 A, Example 2, Table 2 and Figures 3–4 (Yasuo Takahashi; Asahi Kogaku Kogyo):
 * seven spherical singlets, F = 100, f/2.8 and a 36° half-field. All radii and spacings are
 * multiplied by 0.3 for the marketed 30 mm focal length; nd and νd remain as printed.
 * The rear meniscus favours association with the SMC Pentax 30mm f/2.8, without establishing
 * an exact factory prescription. Table 2's r12 = −53.97 is retained despite claim 2's −58.97.
 *
 * The printed back-focus ratio 1.24F gives the stored 37.2 mm image gap; the paraxial BFD is
 * 37.25501 mm. No image-plane adjustment removes that difference. The patent calls its index
 * reference the sodium d-line, but catalog comparisons support helium d, used here.
 *
 * Clear apertures and the iris coordinate are not printed. The iris is inferred at the midpoint
 * of the L3–L4 gap, 3.1335 mm from either end; its radius follows from f/2.8. Rims are estimated
 * from Figure 3 with about ±0.35 mm reading uncertainty plus drawing distortion. The R4 optical
 * face is 10.8 mm rather than the 15 mm shoulder at R3. Rear semi-diameters at R11/R12 and
 * R13/R14 are 8.6 and 10.4 mm to pass the 36° corner chief ray. A matched-scale Figure 3
 * comparison retains all 14 rims: apparent differences remain below about 10%, with axial
 * and arc-based scales disagreeing because the drawing is schematic. Real-ray checks find
 * no axial or corner-chief clipping; geometric pupil transmission at 36° is about 39.6%.
 *
 * Infinity focus only: no finite-focus spacings are printed. focus.closeFocusM = 1e15 is a
 * placeholder; catalog.closeFocusM.marketing records the production lens's 0.30 m minimum.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-30mm-f28",
  "maker": "Pentax",
  "name": "PENTAX SMC PENTAX 30mm f/2.8",
  "visible": true,
  "subtitle": "US 3,975,091 A, Example 2 — probable match to the 1975 production lens",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "pentax-k"
    ],
    "closeFocusM": {
      "marketing": 0.3
    },
    "elementCount": 7,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 30,
      "design": 30
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "7 ELEMENTS / 7 GROUPS",
      "DESIGN f = 30 mm",
      "f/2.8–22",
      "ALL SPHERICAL",
      "CLOSE FOCUS 0.30 m"
    ]
  },
  "source": {
    "patentNumber": "US 3,975,091 A",
    "patentYear": 1976,
    "example": {
      "label": "Example 2",
      "id": "2"
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
      "type": "Positive Meniscus",
      "focalLengthMm": 93.55,
      "nd": 1.54869,
      "vd": 45.6,
      "indexReference": "d",
      "glass": "PBL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive front meniscus of the retrofocus assembly"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "focalLengthMm": -37.84,
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "K-BK7 (Sumita catalog equivalent; production supplier unspecified)",
      "role": "First negative meniscus of the front assembly"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "focalLengthMm": -67.66,
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Second negative meniscus, immediately ahead of the central air gap"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "focalLengthMm": 20.46,
      "nd": 1.8061,
      "vd": 40.8,
      "indexReference": "d",
      "glass": "NBFD13 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Positive middle element behind the stop"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "focalLengthMm": -17.88,
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "SF6 (Schott catalog equivalent; production supplier unspecified)",
      "role": "Negative element between the positive middle and rear elements"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "focalLengthMm": 31.49,
      "nd": 1.6516,
      "vd": 58.6,
      "indexReference": "d",
      "glass": "LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "First positive rear meniscus, convex toward the image"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "focalLengthMm": 52.3,
      "nd": 1.6516,
      "vd": 58.6,
      "indexReference": "d",
      "glass": "LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Final positive meniscus, convex toward the image"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 30.918,
      "d": 5.4959999999999996,
      "sd": 17.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": 72.85499999999999,
      "d": 0.201,
      "sd": 17.7
    },
    {
      "label": "3",
      "R": 40.32599999999999,
      "d": 1.998,
      "sd": 15.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.939,
      "d": 6.087,
      "sd": 10.8
    },
    {
      "label": "5",
      "R": 21.791999999999998,
      "d": 2.997,
      "sd": 9.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 12.531,
      "d": 3.1335,
      "sd": 9.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.1335
    },
    {
      "label": "7",
      "R": 28.215,
      "d": 7.286999999999999,
      "sd": 6.7,
      "medium": 4
    },
    {
      "label": "8",
      "R": -35.136,
      "d": 2.16,
      "sd": 6.7
    },
    {
      "label": "9",
      "R": -22.326,
      "d": 2.6279999999999997,
      "sd": 6.4,
      "medium": 5
    },
    {
      "label": "10",
      "R": 42.663000000000004,
      "d": 1.2179999999999997,
      "sd": 6.4
    },
    {
      "label": "11",
      "R": -66.96,
      "d": 5.238,
      "sd": 8.6,
      "medium": 6
    },
    {
      "label": "12",
      "R": -16.191,
      "d": 0.099,
      "sd": 8.6
    },
    {
      "label": "13",
      "R": -101.94,
      "d": 3.6869999999999994,
      "sd": 10.4,
      "medium": 7
    },
    {
      "label": "14",
      "R": -25.904999999999998,
      "d": 37.2,
      "sd": 10.4
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent prints no finite-focus spacings. The production lens focuses manually to 0.30 m."
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
    "fullFieldDeg": 72,
    "maxTraceFieldDeg": 36
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
