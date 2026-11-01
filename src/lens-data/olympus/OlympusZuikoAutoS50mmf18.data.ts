import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** PRIVATE row1183: US4728179 unnumbered master Fig.3/PDF9, NOT converter embodiments.
 * Literal mm51.84/F1.86,6elements4groups; no retail50/1.8retuning.
 * Source masterfield unknown;135format and evaluated imageheights are explicit model assumptions.
 * No markediris: one neutral midpointd5stopz19.04mm; EPplus10%globalSDanchor and audited10face ratios.
 * BeveledS5/S6clearfaces remain smaller than body envelopes; no transparentrims/cuts/extensions invented.
 * N/Vreference line unspecified: Unmatchedliteralindices use qualified approximate d-line convention.
 * Computed paraxial infinityplane fixed, no printedBFL/conjugate, refocus or finite-state proof.
 * source.example deliberately omitted: unnumberedreference beside converterexamples per current spec;
 * local authoring disposition records later integration queue, no production queue/catalog edit.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-auto-s-50f18",
  "maker": "Olympus",
  "name": "OLYMPUS ZUIKO AUTO-S 50mm f/1.8",
  "subtitle": "US4728179 unnumbered Fig.3 master; literal51.84mm F1.86; inferred stop/apertures; converter excluded",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "olympus-om"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.84
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.86
    }
  },
  "source": {
    "patentNumber": "US 4,728,179",
    "patentYear": 1988,
    "authors": [
      "Hikaru Hayashi",
      "Hiroshi Takase"
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
      "type": "Positive Meniscus",
      "nd": 1.78472,
      "vd": 25.68,
      "indexReference": "d",
      "glass": "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 56.970527856977164
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "BACD14 (HOYA, coordinate equivalent)",
      "focalLengthMm": 37.62308190132548,
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.78472,
      "vd": 25.71,
      "indexReference": "d",
      "glass": "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -19.991652207454127,
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.46,
      "indexReference": "d",
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -21.474283398551474,
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.95,
      "indexReference": "d",
      "glass": "LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 26.15270885931558,
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.8061,
      "vd": 40.95,
      "indexReference": "d",
      "glass": "LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 50.68470182100526
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 33.79,
      "d": 4.5,
      "sd": 15.329,
      "medium": 1
    },
    {
      "label": "2",
      "R": 130.283,
      "d": 0.15,
      "sd": 15.329
    },
    {
      "label": "3",
      "R": 21.458,
      "d": 6.59,
      "sd": 12.922,
      "medium": 2
    },
    {
      "label": "4",
      "R": 349.306,
      "d": 1.3,
      "sd": 12.922,
      "medium": 3
    },
    {
      "label": "5",
      "R": 14.989,
      "d": 6.5,
      "sd": 9.887
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.5
    },
    {
      "label": "6",
      "R": -15.134,
      "d": 1.65,
      "sd": 10.332,
      "medium": 4
    },
    {
      "label": "7",
      "R": -490.538,
      "d": 5.6,
      "sd": 11.849,
      "medium": 5
    },
    {
      "label": "8",
      "R": -20.316,
      "d": 0.15,
      "sd": 12.34
    },
    {
      "label": "9",
      "R": 246.577,
      "d": 3.23,
      "sd": 12.784,
      "medium": 6
    },
    {
      "label": "10",
      "R": -48.685,
      "sd": 12.784
    }
  ],
  "focus": {
    "closeFocusM": 0.45,
    "description": "Unit focus: the entire optical assembly translates forward as a rigid unit, the back focus growing from 37.856 mm at infinity to 45.60 mm at the marketed 0.45 m minimum, object to image. The unnumbered US4728179 photographic master, separate from the converter embodiments, prints no close-focus state: the near gap is solved paraxially, and its 0.149× magnification matches the published 16 × 24 cm minimum field. Stop position and clear apertures are inferred; clipping remains. The standalone patent field is unknown: 135-format image heights and their field angles are model assumptions, not source coverage. The fixed image plane is computed at an assumed infinity conjugate; 587.5618 nm is an approximate reference convention because the source does not specify the index line. Exact factory pairing and full dispersion are unproven. Conditional scalar research is not factory or continuum validation."
  },
  "gaps": {
    "10": {
      "label": "BF",
      "values": [[37.856139940514495, 45.6]]
    }
  },
  "aperture": {
    "nominalFNumber": 1.86,
    "fStops": [1.86, 2.8, 4, 5.6, 8, 11, 16]
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
