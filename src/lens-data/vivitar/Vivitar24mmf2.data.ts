import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,258,980 A (Jacob Moskovich; Vivitar Corporation; granted 31 March 1981), Table 1, which claim 5 reprints
 * value for value. Eight air-spaced spherical elements in eight groups: a negative front group L1-L3 and a positive
 * rear group L4-L8 with the iris between L4 and L5.
 *
 * SCALE: the patent normalizes the focal length to 1.0. Every radius, thickness, air space and the back focal
 * length is multiplied by exactly 24, giving a paraxial EFL of 24.008 mm. Indices and Abbe numbers are as printed
 * (d line).
 *
 * GLASS: the patent names no glass. The printed pairs agree with catalog rows at the printed precision: 1.697 / 55.5
 * HOYA LAC14, 1.603 / 60.7 HOYA BACD14, 1.717 / 29.5 SF1, 1.805 / 25.5 SF6 and 1.640 / 60.2 HOYA LACL60. The labels
 * are catalog equivalents; the production supplier is not known.
 *
 * IMAGE PLANE: the last gap is the printed BFL, 1.59 x 24 = 38.16 mm. The paraxial back focus of the printed
 * prescription is 38.326 mm (1.5969 normalized). The printed plane lies 0.166 mm inside it, at the zonal best focus
 * of the undercorrected spherical aberration (-0.18 to -0.21 mm between the 0.5 and 0.85 zones), so it is kept.
 *
 * STOP (inferred): Figure 1 draws the iris between L4 and L5 without a station; the 3.72 mm air space S4 is split
 * into two 1.86 mm halves. The stop radius is derived from the stated f/2.
 *
 * SEMI-DIAMETERS (inferred): the patent prints no clear apertures. Rims are read from Figure 1, which is drawn to
 * scale within about 10 % (20 px/mm at 300 dpi), and agree with it within 5 % on every element. L2's rear curve ends
 * at 11.4 mm and a flat land continues to the 14 mm front rim (rimExtensionSd), as the figure draws it. L6 and L7 are
 * drawn square at about 10.4 and 10.6 mm and meeting at the rim. Their facing surfaces 12 and 13 touch at a height of
 * 9.74 mm, so their curved caps end at 9.6 mm and flat lands continue to the element rims; checks.gapSagFrac = 0.98
 * admits that pair (the faces do not cross). The full f/2 marginal ray would need 9.76 mm there, so the edge contact
 * of L6 and L7 is a limit of the printed prescription.
 *
 * FOCUS: infinity only. The patent's 1:10 state (Table 7, S4 = .135) is not modeled; closeFocusM = 1e15 marks focus
 * as not modeled. The Vivitar 24mm f/2 focuses to 0.3 m (catalog.closeFocusM.marketing).
 *
 * PRODUCT LINK: by construction (eight elements in eight groups, f/2, 84 degree field, 1:10 close focus) and by the
 * Vivitar assignment; no maker diagram confirms it.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "vivitar-24mm-f2",
  "maker": "Vivitar",
  "name": "VIVITAR 24mm f/2",
  "subtitle": "US 4,258,980 A, Table 1 — construction-based association with the Vivitar 24mm f/2",
  "catalog": {
    "lensMounts": [
      "nikon-f",
      "canon-fd",
      "minolta-sr",
      "konica-ar",
      "olympus-om",
      "pentax-k",
      "m42",
      "contax-yashica"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "DESIGN f = 24.01 mm",
      "DESIGN F/2",
      "ALL SPHERICAL",
      "MINIMUM FOCUS 0.3 m"
    ],
    "elementCount": 8,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "closeFocusM": {
      "marketing": 0.3
    }
  },
  "source": {
    "patentNumber": "US 4,258,980 A",
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "patentYear": 1981,
    "authors": [
      "Jacob Moskovich"
    ],
    "assignees": [
      "Vivitar Corporation"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "role": "Weak positive front meniscus of the negative front group; offsets part of the distortion of the two negative menisci behind it.",
      "type": "Positive Meniscus",
      "nd": 1.697,
      "vd": 55.5,
      "focalLengthMm": 127.332994,
      "glass": "LAC14 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "role": "First negative meniscus of the front group; its steep rear surface supplies most of the retrofocus divergence.",
      "type": "Negative Meniscus",
      "nd": 1.697,
      "vd": 55.5,
      "focalLengthMm": -30.248592,
      "glass": "LAC14 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "role": "Second negative meniscus; completes the negative front group (group focal length about -19 mm).",
      "type": "Negative Meniscus",
      "nd": 1.603,
      "vd": 60.7,
      "focalLengthMm": -41.968903,
      "glass": "BACD14 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "role": "Thick positive dense-flint element ahead of the iris; opens the positive rear group and balances the lateral colour of the front crowns.",
      "type": "Biconvex Positive",
      "nd": 1.717,
      "vd": 29.5,
      "focalLengthMm": 31.591273,
      "glass": "SF1 (SCHOTT catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "role": "Plano-convex crown directly behind the iris; first member of the rear focusing section.",
      "type": "Plano-Convex Positive",
      "nd": 1.603,
      "vd": 60.7,
      "focalLengthMm": 31.800995,
      "glass": "BACD14 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "role": "Biconcave dense-flint element, the only negative element of the rear group; corrects spherical aberration and axial colour.",
      "type": "Biconcave Negative",
      "nd": 1.805,
      "vd": 25.5,
      "focalLengthMm": -17.331699,
      "glass": "SF6 (SCHOTT catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "role": "Positive meniscus, concave to the object; shares the rear group's converging power with L8.",
      "type": "Positive Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": 38.469982,
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "role": "Biconvex final element; completes the rear group and sets the long back focus.",
      "type": "Biconvex Positive",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": 39.888336,
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 66.048,
      "d": 4.008,
      "sd": 18.4,
      "medium": 1
    },
    {
      "label": "2",
      "R": 251.76,
      "d": 0.192,
      "sd": 18.4
    },
    {
      "label": "3",
      "R": 34.104,
      "d": 1.968,
      "sd": 14,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.72,
      "d": 9.288,
      "sd": 11.4,
      "rimExtensionSd": 14
    },
    {
      "label": "5",
      "R": 32.16,
      "d": 1.464,
      "sd": 7.8,
      "medium": 3
    },
    {
      "label": "6",
      "R": 13.92,
      "d": 4.224,
      "sd": 7.8
    },
    {
      "label": "7",
      "R": 24.768,
      "d": 5.88,
      "sd": 10,
      "medium": 4
    },
    {
      "label": "8",
      "R": -238.728,
      "d": 1.86,
      "sd": 10
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.86
    },
    {
      "label": "9",
      "R": "flat",
      "d": 5.304,
      "sd": 10.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -19.176,
      "d": 2.424,
      "sd": 10.5
    },
    {
      "label": "11",
      "R": -18.72,
      "d": 1.776,
      "sd": 10.4,
      "medium": 6
    },
    {
      "label": "12",
      "R": 57.096,
      "d": 1.656,
      "sd": 9.6,
      "rimExtensionSd": 10.4
    },
    {
      "label": "13",
      "R": -58.344,
      "d": 4.056,
      "sd": 9.6,
      "rimExtensionSd": 10.6,
      "medium": 7
    },
    {
      "label": "14",
      "R": -17.784,
      "d": 0.192,
      "sd": 10.6
    },
    {
      "label": "15",
      "R": 105.048,
      "d": 3.864,
      "sd": 12.5,
      "medium": 8
    },
    {
      "label": "16",
      "R": -33.24,
      "d": 38.16,
      "sd": 12.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; the patent's 1:10 close-focus state (Table 7), in which all elements move forward and the four rear elements L5-L8 move faster, closing the air space between L4 and L5, is not modeled. The production lens focuses to 0.3 m."
  },
  "gaps": {},
  "aperture": {
    "nominalFNumber": 2,
    "blades": 6,
    "fStops": [
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2",
      "fromSurface": "7",
      "toSurface": "16"
    }
  ],
  "doublets": [],
  "checks": {
    "gapSagFrac": 0.98
  },
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
