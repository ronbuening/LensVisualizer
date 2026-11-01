import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** PRIVATE row1150, US3864027 Example1: explicit infinity, five air-spaced spherical singlets.
 * R6flat. Literal normalized dimensions uniformly400x, a retail-correlation hypothesis.
 * Rounded source B/f=.75 gives nominalimagez300mm/lastgap96.272mm, not refocus or printedBFL.
 * Tablefull6deg10min/half3deg5min distinct from abstractfull6deg11min and makerfull6deg.
 * One schematic stop.68throughd6, uncertainty±2percentagepoints; no alternate positions run.
 * Full audited face ratios, EP-based global anchor plus8%; not factory clear apertures.
 * n/nu reference unspecified; d/587.5618 convention explicit, historicalglass suggestions not substituted.
 * Both0173catalogs conflict5/5vs6/5, laterMC5/5; no dated redesign/serial/factory identity claim.
 * Source finite1/10x curves and product5m metadata do not define a finite prescription/motion law.
 * No applied refocus, optical tuning, catalog integration or production publication.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-400f63-us3864027-private-row1150",
  "maker": "Olympus",
  "name": "Olympus 400mm f/6.3 — patent’s five-element reconstruction (inferred apertures/stop; infinity only; production version unproven; private)",
  "subtitle": "US3864027 Example1; five air-spaced singlets; contradictory manufacturer5/5 and6/5 counts unresolved",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "olympus-om"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 400,
      "design": 400
    },
    "fNumber": {
      "marketing": 6.3,
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "US 3,864,027",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1975,
    "authors": [
      "Kenichi Harada"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "indexReferenceNote": "Source table prints n/nu without explicit d reference.587.5618nm/d assignment is a labeled model convention supported only contextually by C,d,F,g curves. Historical glass suggestions are not substituted as modern dispersion.",
      "glass": "Unmatched literal (1.48749/70.1); source historical suggestion FK5 unverified",
      "focalLengthMm": 120.1030150490764
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.7495,
      "vd": 35.2,
      "indexReference": "d",
      "indexReferenceNote": "Source table prints n/nu without explicit d reference.587.5618nm/d assignment is a labeled model convention supported only contextually by C,d,F,g curves. Historical glass suggestions are not substituted as modern dispersion.",
      "glass": "Unmatched literal (1.7495/35.2); source historical suggestion LaF7 unverified",
      "focalLengthMm": -243.2357245579875
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Plano-concave Negative",
      "nd": 1.5927,
      "vd": 35.6,
      "indexReference": "d",
      "indexReferenceNote": "Source table prints n/nu without explicit d reference.587.5618nm/d assignment is a labeled model convention supported only contextually by C,d,F,g curves. Historical glass suggestions are not substituted as modern dispersion.",
      "glass": "Unmatched literal (1.5927/35.6); source historical suggestion F16 unverified",
      "focalLengthMm": -1163.502615151004
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.651,
      "vd": 56.2,
      "indexReference": "d",
      "indexReferenceNote": "Source table prints n/nu without explicit d reference.587.5618nm/d assignment is a labeled model convention supported only contextually by C,d,F,g curves. Historical glass suggestions are not substituted as modern dispersion.",
      "glass": "Unmatched literal (1.651/56.2); source historical suggestion LAK04 unverified",
      "focalLengthMm": -77.55105582604429
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.60342,
      "vd": 38.0,
      "indexReference": "d",
      "indexReferenceNote": "Source table prints n/nu without explicit d reference.587.5618nm/d assignment is a labeled model convention supported only contextually by C,d,F,g curves. Historical glass suggestions are not substituted as modern dispersion.",
      "glass": "Unmatched literal (1.60342/38.0); source historical suggestion F5 unverified",
      "focalLengthMm": 134.82261689482894
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 88.82,
      "d": 11.984,
      "sd": 34.285714285714285,
      "medium": 1
    },
    {
      "label": "2",
      "R": -164.196,
      "d": 10.772,
      "sd": 34.285714285714285
    },
    {
      "label": "3",
      "R": -127.756,
      "d": 7.456,
      "sd": 30.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": -437.64,
      "d": 2.024,
      "sd": 30.0
    },
    {
      "label": "5",
      "R": -689.608,
      "d": 8.488,
      "sd": 30.0,
      "medium": 3
    },
    {
      "label": "6",
      "R": "flat",
      "d": 96.83472,
      "sd": 30.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 45.56928
    },
    {
      "label": "7",
      "R": -51.62,
      "d": 3.668,
      "sd": 18.205714285714286,
      "medium": 4
    },
    {
      "label": "8",
      "R": 2361.968,
      "d": 11.712,
      "sd": 18.205714285714286
    },
    {
      "label": "9",
      "R": 507.02,
      "d": 5.22,
      "sd": 18.205714285714286,
      "medium": 5
    },
    {
      "label": "10",
      "R": -96.528,
      "d": 96.272,
      "sd": 16.594285714285714
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity-only reconstruction of the patent’s five singlets, with inferred apertures and stop. The retail 5 m minimum focus is descriptive; no finite prescription or motion is modeled. The nominal 300 mm image plane derives from rounded B/f = 0.75, not a separately printed BFL or best focus. Conflicting 0173 catalog counts/weights and the later MC listing do not establish a production-version identity, chronology, or redesign. Table full field 6°10′ differs from abstract 6°11′; 587.5618 nm is an assumed reference convention. The viewer’s 21.65 mm format corner maps to about 3.0941°, beyond the patent half-field 3°05′ (about 21.5739 mm). Native MTF is a simulation; the separate corrected 2D scalar research remains conditional, without factory or continuum validation."
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 6.166666666666667,
    "maxTraceFieldDeg": 3.0833333333333335
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
