import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 7,057,830 B2, Exemplary Embodiment 1, screen left and film right. Surface 42 uses the printed Table 1 radius R42 = -52.802 mm directly. Both grants print C42 = +0.018939 mm^-1 in Table 2, conflicting with that radius; all polynomial terms are retained. Source free diameters are unchanged; the iris radius is inferred from the nominal f/1.7 aperture. The source defines dispersion as (nd-1)/(n480-n643.8), with nd labelled at rounded 588 nm; conventional Vd and line indices are calculated from a two-term Cauchy curve anchored at 587.5618 nm.
 * Flat 22 x 16 mm cinema film is assumed; the source's 0.1-0.15 mm film bow is not modeled. The printed 31.898 mm back focus is retained, about 7.2 micrometres ahead of the paraxial infinity image plane, without a best-focus refit. Only the patent's infinity conjugate is modeled; no finite projection focusing movement is included. Association with the production lens is probable; the factory prescription is unconfirmed.
 * At nominal f/1.7 the source 42 aperture limits traced speed to approximately f/1.7694. Infinity full-field MTF is available at f/1.7, 2.8 and 4 with reference, five-line photopic and C/d/F spectra. Numerical sampling converges through at least 50 lp/mm; convergence through 100 lp/mm is not uniform across fields, spectra and apertures.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "schneider-cinelux-premiere-35mm-f17",
  "maker": "Schneider-Kreuznach",
  "name": "SCHNEIDER-KREUZNACH CINELUX PREMI\u00c8RE 35mm f/1.7",
  "subtitle": "US 7,057,830 B2, Exemplary Embodiment 1 — Jos. Schneider Optische Werke GmbH",
  "catalog": {
    "lensMounts": [
      "projection-lens"
    ],
    "imageFormat": "35mm-cinema",
    "elementCount": 7,
    "groupCount": 7,
    "specs": [
      "7 ELEMENTS / 7 GROUPS",
      "DESIGN f = 35 mm",
      "DESIGN F/1.7",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "PROJECTION LENS"
    ],
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 1.7,
      "design": 1.7
    }
  },
  "source": {
    "patentNumber": "US 7,057,830 B2",
    "example": { "label": "Exemplary Embodiment 1", "id": "1" },
    "patentYear": 2006,
    "authors": [
      "Hildegard Ebbesmeier"
    ],
    "assignees": [
      "Jos. Schneider Optische Werke GmbH"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Meniscus Negative",
      "nd": 1.5168,
      "vd": 64.74398919136205,
      "glass": "Unmatched (source nd=1.5168, dispersion=64.14)",
      "apd": false,
      "nC": 1.5143973725882776,
      "nF": 1.5223795807662832,
      "ng": 1.5266976749251056,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": -61.923506902832024,
      "role": "Negative screen-side meniscus preceding the aspheric second element."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Meniscus Positive (Aspheric)",
      "nd": 1.72916,
      "vd": 55.16462440455176,
      "glass": "Unmatched (source nd=1.72916, dispersion=54.65)",
      "apd": false,
      "nC": 1.7251814433320927,
      "nF": 1.7383993344692221,
      "ng": 1.7455497491462606,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": 115.35060197958333,
      "role": "Positive meniscus with an aspheric rear surface ahead of the aperture stop."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.6405,
      "vd": 60.71641643062832,
      "glass": "Unmatched (source nd=1.6405, dispersion=60.15)",
      "apd": false,
      "nC": 1.6373247612888147,
      "nF": 1.6478738028438578,
      "ng": 1.6535804636705598,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": 31.554924073942516,
      "role": "Positive biconvex element immediately after the aperture stop."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.5927,
      "vd": 35.63241064008573,
      "glass": "Unmatched (source nd=1.5927, dispersion=35.3)",
      "apd": false,
      "nC": 1.5876932823531196,
      "nF": 1.6043270152202758,
      "ng": 1.6133252802531257,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": -23.545308230137575,
      "role": "First of two central negative biconcave elements, following the third element."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.80809,
      "vd": 22.96423065331302,
      "glass": "Unmatched (source nd=1.80809, dispersion=22.75)",
      "apd": false,
      "nC": 1.7974981649257653,
      "nF": 1.8326872384113784,
      "ng": 1.8517232907522931,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": -55.59239510487815,
      "role": "Second central negative biconcave element, ahead of the final positive pair."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.6405,
      "vd": 60.71641643062832,
      "glass": "Unmatched (source nd=1.6405, dispersion=60.15)",
      "apd": false,
      "nC": 1.6373247612888147,
      "nF": 1.6478738028438578,
      "ng": 1.6535804636705598,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": 49.60765522818404,
      "role": "Positive biconvex element preceding the final film-side element."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.755,
      "vd": 52.792495084319874,
      "glass": "Unmatched (source nd=1.755, dispersion=52.3)",
      "apd": false,
      "nC": 1.7506953470743685,
      "nF": 1.7649966222611941,
      "ng": 1.7727331096429817,
      "indexReferenceNote": "Source labels nd at rounded 588 nm, mixed (nd-1)/(nFprime480-nCprime643.8). Cauchy reconstruction preserves that denominator; authored conventional vd and line indices are calculated, not published.",
      "focalLengthMm": 40.57869152214628,
      "role": "Final positive biconvex element on the film side."
    }
  ],
  "surfaces": [
    {
      "label": "36",
      "R": 76.068,
      "d": 10.521,
      "sd": 18.05,
      "medium": 1
    },
    {
      "label": "38",
      "R": 21.464,
      "d": 13.354,
      "sd": 13.4
    },
    {
      "label": "40",
      "R": -126.324,
      "d": 13.711,
      "sd": 12.25,
      "medium": 2
    },
    {
      "label": "42",
      "R": -52.802,
      "d": 5,
      "sd": 13.3,
      "asphere": {
        "K": 0,
        "A4": -5.31052e-07,
        "A6": 5.2398e-10,
        "A8": -1.31713e-11,
        "A10": 3.19473e-14
      }
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.089
    },
    {
      "label": "44",
      "R": 29.103,
      "d": 16.346,
      "sd": 14.5,
      "medium": 3
    },
    {
      "label": "46",
      "R": -51.643,
      "d": 4.476,
      "sd": 13.6
    },
    {
      "label": "48",
      "R": -29.981,
      "d": 1.8,
      "sd": 12.4,
      "medium": 4
    },
    {
      "label": "50",
      "R": 26.691,
      "d": 4,
      "sd": 12.4
    },
    {
      "label": "52",
      "R": -153.321,
      "d": 1.8,
      "sd": 12.4,
      "medium": 5
    },
    {
      "label": "54",
      "R": 63.875,
      "d": 1.65,
      "sd": 13.2
    },
    {
      "label": "56",
      "R": 169.672,
      "d": 4.8,
      "sd": 13.75,
      "medium": 6
    },
    {
      "label": "58",
      "R": -38.663,
      "d": 0.1,
      "sd": 14.25
    },
    {
      "label": "60",
      "R": 53.566,
      "d": 7,
      "sd": 16.4,
      "medium": 7
    },
    {
      "label": "62",
      "R": -67.549,
      "d": 31.898,
      "sd": 16.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000.0,
    "description": "Projection lens modeled at the patent's infinity conjugate only, with no focusing movement modeled. Schneider publishes no minimum projection distance; the projectionist sets the throw with the lens's FOCUS screw."
  },
  "aperture": {
    "nominalFNumber": 1.7,
    "fStops": [
      1.7,
      1.8,
      2,
      2.8,
      4
    ],
    "maxFNumber": 4
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
