/**
 * JP 2006-300972 A, whole Example 3; JP 4717493 B2 corroboration.
 * Probable later named Schneider Kreuznach 28mm LS family; Mamiya-origin
 * patent, not Schneider design authorship or an exact factory prescription.
 * Native scale x1: F=28.5, Fno=4.6, full2W=102.4deg. No retail rescale.
 * All25source surfaces and literal R/d/nd/vd retained. Source D25 is blank;
 * last d=63.9 adopts separately printed FB as rear-vertex air-image gap.
 * Fixed image181.5806; computedBFL63.9208651356 remains unapplied.
 * S3 sourceA0=.16235900E+02 maps K=15.2359; A2=.00000000E+00;
 * A4=.73817775E-05, A6=-.41918163E-08, A8=.30834735E-11,
 * A10=-.24494941E-15. No other-example borrowing or extra rear plate.
 * NOTE ON SEMI-DIAMETERS: every clear radius is inferred from Fig7
 * envelopes/cap ends and geometry/axial-pupil bounds, not source dimensions.
 * Initial S6cap18.5 crossedS7; before optical construction it was restricted
 * to15.45 by the default90% gap-sag bound. No override or ray/MTF fitting.
 * Final caps were frozen before pupil/MTF runs. Preserve strong source-edge
 * clipping and unavailable lower-cap sensitivity; no loss-free field claim.
 * Ordinary-prime iris derives from sourceF4.6 (7.05809570223mm at infinity).
 * Source names d-lineN/V but no numerical wavelength or full dispersion;
 * conventional native587.5618nm reference and Abbe dispersion are modeling
 * assumptions. Unmatched glasses do not assert vendor/melt identity.
 * Infinity only: source0.35m plots lack numeric travel/distance datum.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "schneider-kreuznach-28mm-ls-f45-mamiya-patent",
  "maker": "Schneider-Kreuznach",
  "name": "SCHNEIDER-KREUZNACH 28mm LS f/4.5",
  "subtitle": "Mamiya-origin patent E3 reconstruction; probable later 28LS family; inferred apertures; infinity only; factory identity unproven",
  "catalog": {
    "lensMounts": [
      "mamiya-645"
    ],
    "imageFormat": "645",
    "specs": [
      "PATENT E3 RECONSTRUCTION",
      "PROBABLE 28LS FAMILY / MAMIYA ORIGIN",
      "FACTORY IDENTITY UNPROVEN",
      "INFINITY ONLY",
      "INFERRED IRIS / CLEAR APERTURES",
      "NATIVE 28.5mm F/4.6"
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
      "apd": false
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
      "apd": false
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
      "apd": false
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
      "apd": false
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
      "apd": false
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
      "apd": false
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
      "apd": false,
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
      "sd": 28.7
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
      "sd": 21
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
      "sd": 15.45
    },
    {
      "label": "7",
      "R": -33.2248,
      "d": 3.5837,
      "sd": 17,
      "medium": 4
    },
    {
      "label": "8",
      "R": -52.0263,
      "d": 0.2,
      "sd": 17
    },
    {
      "label": "9",
      "R": 61.2174,
      "d": 9.5,
      "sd": 16,
      "medium": 5
    },
    {
      "label": "10",
      "R": -22.6518,
      "d": 3.0,
      "sd": 16,
      "medium": 6
    },
    {
      "label": "11",
      "R": -68.9778,
      "d": 6.134,
      "sd": 16
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
      "sd": 8.5
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
      "sd": 13,
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
      "sd": 18,
      "medium": 13
    },
    {
      "label": "24",
      "R": -20.5898,
      "d": 2.0,
      "sd": 16,
      "medium": 14
    },
    {
      "label": "25",
      "R": -67.0226,
      "d": 63.9,
      "sd": 18
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent E3 reconstruction. No numeric near travel, finite conjugate or cam law is supplied; retail0.35m is not a modeled endpoint."
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
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
