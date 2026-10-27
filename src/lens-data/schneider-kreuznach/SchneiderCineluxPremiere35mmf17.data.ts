import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 7,057,830 B2, Exemplary Embodiment 1, screen left and film right. Surface 42 uses the printed Table 1 radius R42 = -52.802 mm directly. Both grants print C42 = +0.018939 mm^-1 in Table 2, conflicting with that radius; all polynomial terms are retained. Semi-diameters are the printed Table 1 free diameters halved (the US and EP grants agree); FIG. 2 confirms their proportions, drawing every element blank about 1.27 times larger with each surface within 9% of that common ratio. The printed rims at surfaces 42 and 44 sit inside the nominal f/1.7 axial beam as designed, and the iris radius is inferred from the nominal f/1.7 aperture. The patent text defines its dispersion column as (nd-1)/(n480-n643.8), with nd labelled at a rounded 588 nm. The printed values nevertheless equal the catalog Vd of the named glasses within 0.01-0.05, where that definition would give 0.4-0.5 less, so they are used as ordinary Vd. The trace uses the catalog dispersion curves of these catalog-equivalent glasses.
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
      "name": "20",
      "label": "Element 20",
      "diagramLabel": "20",
      "type": "Meniscus Negative",
      "nd": 1.5168,
      "vd": 64.14,
      "glass": "N-BK7 (Schott catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -61.923506902832024,
      "role": "Negative screen-side meniscus preceding the aspheric second element."
    },
    {
      "id": 2,
      "name": "22",
      "label": "Element 22",
      "diagramLabel": "22",
      "type": "Meniscus Positive (Aspheric)",
      "nd": 1.72916,
      "vd": 54.65,
      "glass": "S-LAL18 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 115.35060197958333,
      "role": "Positive meniscus with an aspheric rear surface ahead of the aperture stop."
    },
    {
      "id": 3,
      "name": "24",
      "label": "Element 24",
      "diagramLabel": "24",
      "type": "Biconvex Positive",
      "nd": 1.6405,
      "vd": 60.15,
      "glass": "N-LAK21 (Schott catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 31.554924073942516,
      "role": "Positive biconvex element immediately after the aperture stop."
    },
    {
      "id": 4,
      "name": "26",
      "label": "Element 26",
      "diagramLabel": "26",
      "type": "Biconcave Negative",
      "nd": 1.5927,
      "vd": 35.3,
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -23.545308230137575,
      "role": "First of two central negative biconcave elements, following the third element."
    },
    {
      "id": 5,
      "name": "28",
      "label": "Element 28",
      "diagramLabel": "28",
      "type": "Biconcave Negative",
      "nd": 1.80809,
      "vd": 22.75,
      "glass": "S-NPH1 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -55.59239510487815,
      "role": "Second central negative biconcave element, ahead of the final positive pair."
    },
    {
      "id": 6,
      "name": "30",
      "label": "Element 30",
      "diagramLabel": "30",
      "type": "Biconvex Positive",
      "nd": 1.6405,
      "vd": 60.15,
      "glass": "N-LAK21 (Schott catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 49.60765522818404,
      "role": "Positive biconvex element preceding the final film-side element."
    },
    {
      "id": 7,
      "name": "32",
      "label": "Element 32",
      "diagramLabel": "32",
      "type": "Biconvex Positive",
      "nd": 1.755,
      "vd": 52.3,
      "glass": "S-LAH97 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
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
      "label": "42A",
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
