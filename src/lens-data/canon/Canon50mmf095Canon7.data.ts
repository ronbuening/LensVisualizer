import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Patent-derived model: JP S39-10178 B, sole example / Figure 1, Jiro Mukai (向井二郎).
 * All printed radii and internal distances are scaled x50 from f = 1; d-line glass
 * coordinates are unchanged. The resulting EFL is 50.037203396 mm.
 * Clear semi-diameters and iris position are inferred, not measured factory dimensions.
 * Checked against Figure 1 (2026-10-22): element-height proportions agree within ~6 %,
 * L2/L3 sit just above their f/0.95 marginal-ray floors, and L1 cannot fall below the
 * 28.2 mm height of the Y = 21.63 mm chief ray, so no rim was changed.
 * Group outside diameters bound the modeled caps; r7 and r8 are limited to the exact
 * f/0.95 axial marginal heights, 12.844194828245 and 12.793310563366 mm. Their tapered
 * edges follow Figure 1; the square-cut r9/r10 pair remains at 14 mm and clips r10's
 * 14.064801959101 mm marginal height. No fully transmitted f/0.95 pupil is claimed.
 * The iris splits source S3 into 7.25 + 4.05 mm without changing its total; its radius
 * is derived from f/0.95. Gap-sag allowance 0.97 avoids hidden trimming (0.968570562
 * actual intrusion); the opposed surfaces retain 0.355153 mm clearance.
 * The axisymmetric model omits Canon's rear-element edge cutout.
 * Whole-lens helicoid focus is reconstructed; the patent prints only infinity.
 * With last-surface matrix [A B; C D] = [0.3945641345661052, 46.34263823992748;
 * -0.019985129706097695, 0.187133997704791], solve
 * -(B + D*g)/(A + C*g) + 53 + g = 1000 mm (object to film).
 * Back focus g = 22.47872248042836 mm at 1 m, versus 19.74288585406172 mm at infinity.
 * Source errata retained: P7 prints -0.4247 versus calculated -1.424716415; the table
 * gives 45 degrees full field, while prose and plot give 46 degrees. The final Seidel
 * column sums to 2.0255 versus its printed 0.0255 total. No prescription cell is repaired.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-50mm-f095",
  "maker": "Canon",
  "name": "CANON 50mm f/0.95",
  "subtitle": "JP S39-10178 B, Sole Example — probable Canon 7 production correlation",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "canon-7-bayonet"
    ],
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "DESIGN f = 50.00 mm",
      "DESIGN F/0.95",
      "ALL SPHERICAL"
    ],
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 0.95,
      "design": 0.95
    },
    "imageFormat": "135-full-frame"
  },
  "source": {
    "patentNumber": "JP S39-10178 B",
    "patentYear": 1964,
    "authors": [
      "Jiro Mukai"
    ],
    "assignees": [
      "Canon Camera Co., Inc."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Source printed Petzval row P7 is −0.4247, inconsistent with the literal prescription calculation −1.424716415. Printed rows sum to 1.2944; the full-precision calculation sums to 0.294264866 and rounds to the printed total 0.2943. No prescription cell or printed source value is repaired."
      },
      {
        "status": "unresolved",
        "note": "The table specifies 45° full field; the introduction states 46° and plots extend to 23° half field. These remain distinct field targets."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.79952,
      "vd": 42.3,
      "focalLengthMm": 120.5730,
      "indexReference": "d",
      "glass": "S-LAH52 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Positive front meniscus"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.67003,
      "vd": 47.2,
      "focalLengthMm": 148.9588,
      "indexReference": "d",
      "glass": "BAF10 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Second positive meniscus"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.6935,
      "vd": 53.4,
      "focalLengthMm": 34.1734,
      "indexReference": "d",
      "glass": "LAC13 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Positive front component of the first cemented pair"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.5,
      "focalLengthMm": -18.0433,
      "indexReference": "d",
      "glass": "E-FD4 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Negative rear component of the first cemented pair"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.5927,
      "vd": 35.4,
      "focalLengthMm": -28.2051,
      "indexReference": "d",
      "glass": "FF5 (HOYA coordinate equivalent; supplier unconfirmed)",
      "role": "Negative front component of the rear cemented pair"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.7859,
      "vd": 44.3,
      "focalLengthMm": 30.2370,
      "indexReference": "d",
      "glass": "S-LAH51 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Positive rear component of the rear cemented pair"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.7859,
      "vd": 44.3,
      "focalLengthMm": 40.7943,
      "indexReference": "d",
      "glass": "S-LAH51 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Positive rear singlet"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 73.05,
      "d": 5.8500000000000005,
      "sd": 30,
      "medium": 1
    },
    {
      "label": "2",
      "R": 290.85,
      "d": 0.1,
      "sd": 30
    },
    {
      "label": "3",
      "R": 46.150000000000006,
      "d": 5.1499999999999995,
      "sd": 25,
      "medium": 2
    },
    {
      "label": "4",
      "R": 82.0,
      "d": 0.1,
      "sd": 25
    },
    {
      "label": "5",
      "R": 27.150000000000002,
      "d": 12.2,
      "sd": 21.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": -152.15,
      "d": 3.15,
      "sd": 21.2,
      "medium": 4
    },
    {
      "label": "7",
      "R": 15.1,
      "d": 7.25,
      "sd": 12.844194828244891
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.05
    },
    {
      "label": "8",
      "R": -23.1,
      "d": 2.0,
      "sd": 12.793310563365969,
      "medium": 5
    },
    {
      "label": "9",
      "R": 62.45,
      "d": 7.249999999999999,
      "sd": 14,
      "medium": 6
    },
    {
      "label": "10",
      "R": -36.4,
      "d": 0.1,
      "sd": 14
    },
    {
      "label": "11",
      "R": 60.650000000000006,
      "d": 5.800000000000001,
      "sd": 17,
      "medium": 7
    },
    {
      "label": "12",
      "R": -65.14999999999999,
      "sd": 17
    }
  ],
  "focus": {
    "closeFocusM": 1,
    "description": "Whole-lens helicoid focusing to 1 m. Only the back-focus distance changes; the close-focus position is calculated from the infinity prescription."
  },
  "gaps": {
    "12": { "label": "BF", "values": [[19.74288585406172, 22.47872248042836]] }
  },
  "aperture": {
    "nominalFNumber": 0.95,
    "fStops": [
      0.95,
      1.4,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16,
    "blades": 10
  },
  "groups": [
    { "text": "G1", "fromSurface": "1", "toSurface": "2" },
    { "text": "G2", "fromSurface": "3", "toSurface": "4" },
    { "text": "G3", "fromSurface": "5", "toSurface": "7" },
    { "text": "G4", "fromSurface": "8", "toSurface": "10" },
    { "text": "G5", "fromSurface": "11", "toSurface": "12" }
  ],
  "doublets": [
    {
      "text": "L3 + L4",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "L5 + L6",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "checks": {
    "gapSagFrac": 0.97
  },
  "layout": {
    "scFill": 0.5,
    "yScFill": 0.35
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
