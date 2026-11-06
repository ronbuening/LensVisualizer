/**
 * JP 2006-300972 A, Example 3 in full; the grant JP 4717493 B2 prints the
 * same prescription. Probably the later Schneider-Kreuznach 28mm LS f/4.5.
 * The patent is Mamiya-OP's: this is neither evidence that Schneider designed
 * the lens nor an exact factory prescription.
 * Patent scale (x1): F = 28.5, Fno = 4.6, 2W = 102.4 deg. Not rescaled to the
 * retail specification.
 * All 25 source surfaces are kept with their printed R, d, nd and vd. Source
 * D25 is blank; the last d = 63.9 is the separately printed FB, taken as the
 * air gap from the rear vertex to the image. The image plane is fixed at
 * 181.5806 mm from S1; the computed BFL of 63.9208651356 is not applied.
 * S3 asphere: source A0 = .16235900E+02 (A0 > 1 is an oblate-ellipsoid base,
 * ¶0021) maps to K = A0 - 1 = 15.2359; A2 = .00000000E+00;
 * A4 = .73817775E-05, A6 = -.41918163E-08, A8 = .30834735E-11,
 * A10 = -.24494941E-15. No value is borrowed from another example, and no
 * rear plate is added.
 * NOTE ON SEMI-DIAMETERS: the source prints no clear radii. All are
 * estimated from the Fig. 7 outlines, read at 0.0812 mm per 600 dpi pixel
 * along the axis (vertex fit) and 0.077 mm across it (arc and rim fits: the
 * figure is about 5 % narrower than its axial scale), and checked by
 * real-ray trace. S18 = 7.7 mm is where Fig. 7 ends L10's concave front with
 * a flat land and where the full-field lateral-aberration fan of Fig. 8 ends;
 * the loss it brings toward the edge of the field is kept. S2 = 31.1 mm is
 * the drawn end of L1's concave face. S6 is held at 15.45 mm by the gap to
 * S7. S23-S25 share 16.9 mm, just inside the 17.04 mm height where L13's
 * edge thins to zero, as Fig. 7 draws it. The rimExtensionSd lands on S2,
 * S4, S6 and S18 follow the flat annuli of Fig. 7; gapSagFrac 0.93 admits
 * the S6 land beside L4's rim (0.85 mm apart at 16.1 mm).
 * Ordinary prime iris sized from the source F/4.6 (radius 7.05809570223 mm at
 * infinity).
 * The source gives d-line N and V but no numerical wavelength or full
 * dispersion; the 587.5618 nm reference and Abbe-number dispersion are
 * modeling assumptions. Unmatched glasses claim no vendor or melt identity.
 * Infinity only: the source's 0.35 m aberration plots come with no focus
 * travel or distance datum.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "schneider-kreuznach-28mm-ls-f45-mamiya-patent",
  "maker": "Schneider-Kreuznach",
  "name": "SCHNEIDER-KREUZNACH 28mm LS f/4.5",
  "subtitle": "JP 2006-300972 A, Example 3 — probable production design (Mamiya-OP patent)",
  "catalog": {
    "lensMounts": [
      "mamiya-645"
    ],
    "imageFormat": "645",
    "specs": [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 28.5 mm",
      "DESIGN F/4.6",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "DESIGN 2ω = 102.4°"
    ],
    "elementCount": 14,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28.5
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.6
    }
  },
  "source": {
    "patentNumber": "JP 2006-300972 A",
    "example": {
      "label": "Example 3",
      "id": "3"
    },
    "patentYear": 2006,
    "authors": [
      "Hisataro Shimada"
    ],
    "assignees": [
      "Mamiya-OP Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.83481,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.83481 / vd 42.7; no glass identity)",
      "apd": false,
      "role": "First of the four front negative menisci that share the fixed first group's divergence."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus (Aspheric)",
      "nd": 1.43875,
      "vd": 90.9,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.43875 / vd 90.9; no glass identity)",
      "apd": "patent",
      "apdNote": "Meets condition (5), νd > 62 for a front negative meniscus (¶0052: Vn = 90.9); ¶0024 calls for high-partial-dispersion glass there to correct lateral color. The patent prints no partial-dispersion values.",
      "role": "Second front negative meniscus, in low-dispersion glass; its aspheric convex front face corrects distortion."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.83481,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.83481 / vd 42.7; no glass identity)",
      "apd": false,
      "role": "Third front negative meniscus, convex to the object."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.80809,
      "vd": 22.6,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.80809 / vd 22.6; no glass identity)",
      "apd": false,
      "role": "Fourth front negative meniscus, turned concave to the object, which also helps correct lateral color."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.76182,
      "vd": 26.5,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.76182 / vd 26.5; no glass identity)",
      "apd": false,
      "role": "Biconvex positive of the cemented doublet that ends the first group.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.80518 / vd 25.4; no glass identity)",
      "apd": false,
      "role": "Negative meniscus of the first group's doublet; the object-concave cemented face corrects lateral color.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.56732,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.56732 / vd 42.7; no glass identity)",
      "apd": false,
      "role": "Positive meniscus, front of the cemented doublet that opens the rear group ahead of the stop.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.788,
      "vd": 47.4,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.78800 / vd 47.4; no glass identity)",
      "apd": false,
      "role": "Negative meniscus, rear of the doublet just ahead of the stop.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.48749 / vd 70.1; no glass identity)",
      "apd": "patent",
      "apdNote": "Meets condition (4), νd > 62 for a positive lens behind the stop (¶0052: Vp = 70.1); ¶0024 calls for high-partial-dispersion glass there to correct lateral color. The patent prints no partial-dispersion values.",
      "role": "Biconvex crown positive directly behind the stop."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.83481,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.83481 / vd 42.7; no glass identity)",
      "apd": false,
      "role": "High-index biconcave negative, front of the doublet behind L9.",
      "cemented": "D3"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.57099,
      "vd": 50.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.57099 / vd 50.7; no glass identity)",
      "apd": false,
      "role": "Biconvex positive, rear of the doublet behind L9.",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Positive Meniscus",
      "nd": 1.43875,
      "vd": 90.9,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.43875 / vd 90.9; no glass identity)",
      "apd": "patent",
      "apdNote": "Meets condition (4), νd > 62 for a positive lens behind the stop (¶0052: Vp = 90.9); ¶0024 calls for high-partial-dispersion glass there to correct lateral color. The patent prints no partial-dispersion values.",
      "role": "Low-dispersion positive meniscus, concave to the object, in the rear group."
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Plano-Convex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.48749 / vd 70.1; no glass identity)",
      "apd": "patent",
      "apdNote": "Meets condition (4), νd > 62 for a positive lens behind the stop (¶0052: Vp = 70.1); ¶0024 calls for high-partial-dispersion glass there to correct lateral color. The patent prints no partial-dispersion values.",
      "role": "Plano-convex crown positive with a flat front, front of the last doublet.",
      "cemented": "D4"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Negative Meniscus",
      "nd": 1.83481,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.83481 / vd 42.7; no glass identity)",
      "apd": false,
      "role": "Negative meniscus that closes the last doublet and the lens.",
      "cemented": "D4"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 70.1132,
      "d": 4.5,
      "sd": 39,
      "medium": 1
    },
    {
      "label": "2",
      "R": 42.0674,
      "d": 6.2028,
      "sd": 31.1,
      "rimExtensionSd": 39
    },
    {
      "label": "3A",
      "R": 125.0,
      "d": 7.5,
      "sd": 29.5,
      "medium": 2,
      "asphere": {
        "K": 15.2359,
        "A4": 7.3817775e-06,
        "A6": -4.1918163e-09,
        "A8": 3.0834735e-12,
        "A10": -2.4494941e-16
      }
    },
    {
      "label": "4",
      "R": 24.4604,
      "d": 5.9466,
      "sd": 21,
      "rimExtensionSd": 29.5
    },
    {
      "label": "5",
      "R": 31.9807,
      "d": 2.5,
      "sd": 20,
      "medium": 3
    },
    {
      "label": "6",
      "R": 20.7169,
      "d": 11.9233,
      "sd": 15.45,
      "rimExtensionSd": 20
    },
    {
      "label": "7",
      "R": -33.2248,
      "d": 3.5837,
      "sd": 16.1,
      "medium": 4
    },
    {
      "label": "8",
      "R": -52.0263,
      "d": 0.2,
      "sd": 16.1
    },
    {
      "label": "9",
      "R": 61.2174,
      "d": 9.5,
      "sd": 14.9,
      "medium": 5
    },
    {
      "label": "10",
      "R": -22.6518,
      "d": 3.0,
      "sd": 14.9,
      "medium": 6
    },
    {
      "label": "11",
      "R": -68.9778,
      "d": 6.134,
      "sd": 14.9
    },
    {
      "label": "12",
      "R": 21.3742,
      "d": 3.1411,
      "sd": 9,
      "medium": 7
    },
    {
      "label": "13",
      "R": 138.0333,
      "d": 1.5,
      "sd": 9,
      "medium": 8
    },
    {
      "label": "14",
      "R": 16.3238,
      "d": 8.5441,
      "sd": 9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.2231
    },
    {
      "label": "16",
      "R": 26.4457,
      "d": 8.6559,
      "sd": 9.5,
      "medium": 9
    },
    {
      "label": "17",
      "R": -32.6615,
      "d": 4.8124,
      "sd": 9.5
    },
    {
      "label": "18",
      "R": -23.4942,
      "d": 3.6149,
      "sd": 7.7,
      "rimExtensionSd": 13,
      "medium": 10
    },
    {
      "label": "19",
      "R": 39.9581,
      "d": 7.7691,
      "sd": 13,
      "medium": 11
    },
    {
      "label": "20",
      "R": -20.7671,
      "d": 0.2,
      "sd": 13
    },
    {
      "label": "21",
      "R": -349.8608,
      "d": 5.0032,
      "sd": 14.5,
      "medium": 12
    },
    {
      "label": "22",
      "R": -31.5101,
      "d": 0.2,
      "sd": 14.5
    },
    {
      "label": "23",
      "R": "flat",
      "d": 9.0264,
      "sd": 16.9,
      "medium": 13
    },
    {
      "label": "24",
      "R": -20.5898,
      "d": 2.0,
      "sd": 16.9,
      "medium": 14
    },
    {
      "label": "25",
      "R": -67.0226,
      "d": 63.9,
      "sd": 16.9
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only. The patent focuses by moving the rear group, with the stop, toward the object and plots aberrations at 0.35 m, the production lens's minimum focus, but prints no close-focus spacings, so close focus is not modeled."
  },
  "aperture": {
    "nominalFNumber": 4.6,
    "fStops": [
      4.6,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "layout": {
    "yScFill": 0.8
  },
  "checks": {
    "gapSagFrac": 0.93
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
