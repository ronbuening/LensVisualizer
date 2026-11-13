import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,670,659 A, Example I (PDF p. 3), Albrecht Wilhelm Tronnier, assigned to Voigtländer.
 * The cell focal lengths support the Ultragon association; the exact factory prescription is unconfirmed.
 * Scale factor: 115. The patent normalizes focal length to 1; multiply all radii,
 * thicknesses and airspaces by 115 to express them in millimetres. The printed
 * helium-d refractive indices and Abbe numbers are unchanged.
 * The stop position is inferred at the midpoint of a2; its radius is derived from
 * f/5.5. Clear semi-diameters of 20/15/12.31/15.3 mm are inferred, not tabulated.
 * Figs. 1–2 support the relative rim heights, not precise Example I dimensions;
 * the doublet's common 12.31 mm rim and the 15.3 mm rear rim are the least that
 * pass the 43.2° chief ray to the 5x7 corner, the coverage Cröll lists.
 * Back focus is not inferred: the last interval is the printed p0′ = 0.82606,
 * scaled to 94.9969 mm. Only the infinity state is modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "voigtlander-ultragon-115mm-f55",
  "maker": "Voigtl\u00e4nder",
  "name": "VOIGTLÄNDER ULTRAGON 115mm f/5.5",
  "subtitle": "US 2,670,659 A, Example I — Ultragon 115mm f/5.5, scaled ×115",
  "visible": true,
  "catalog": {
    "specs": [
      "5 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "f/5.5–32",
      "CONVERTIBLE: FRONT 175 mm / REAR 225 mm"
    ],
    "lensMounts": ["large-format-lens-board"],
    "imageFormat": "5x7",
    "elementCount": 5,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 115,
      "design": 115
    },
    "fNumber": {
      "marketing": 5.5,
      "design": 5.5
    }
  },
  "source": {
    "patentNumber": "US 2,670,659 A",
    "example": { "label": "Example I", "id": "1" },
    "patentYear": 1954,
    "authors": [
      "Albrecht Wilhelm Tronnier"
    ],
    "assignees": [
      "Voigtl\u00e4nder AG"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.62095,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "N-SK16 (spectral proxy; patent nd 1.62095 / V 60.3; supplier and melt unspecified)",
      "role": "Positive front element of the two-element front cell."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.728,
      "vd": 28.4,
      "indexReference": "d",
      "glass": "SF10 (spectral proxy; patent nd 1.72800 / V 28.4; supplier and melt unspecified)",
      "role": "Negative inner element of the front cell, facing the diaphragm."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.51443,
      "vd": 54.7,
      "indexReference": "d",
      "glass": "KF3 (spectral proxy; patent nd 1.51443 / V 54.7; supplier and melt unspecified)",
      "role": "Negative front member of the cemented doublet behind the diaphragm.",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.60921,
      "vd": 58.8,
      "indexReference": "d",
      "glass": "SK3 (spectral proxy; patent nd 1.60921 / V 58.8; supplier and melt unspecified)",
      "role": "Positive rear member supplying the cemented doublet's converging power.",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.56866,
      "vd": 56.2,
      "indexReference": "d",
      "glass": "BAC4 (spectral proxy; patent nd 1.56866 / V 56.2; supplier and melt unspecified)",
      "role": "Separate negative rear element of the three-element rear cell."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 28.13015,
      "d": 5.336,
      "sd": 20.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 54.8872,
      "d": 0.0322,
      "sd": 20.0
    },
    {
      "label": "3",
      "R": 24.71005,
      "d": 1.96075,
      "sd": 15.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 19.40625,
      "d": 7.5141,
      "sd": 15.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 7.5141
    },
    {
      "label": "5",
      "R": -26.56845,
      "d": 1.3064,
      "sd": 12.31,
      "medium": 3
    },
    {
      "label": "6",
      "R": 62.02065,
      "d": 5.8811,
      "sd": 12.31,
      "medium": 4
    },
    {
      "label": "7",
      "R": -18.67715,
      "d": 1.1431,
      "sd": 12.31
    },
    {
      "label": "8",
      "R": -17.1419,
      "d": 2.39545,
      "sd": 15.3,
      "medium": 5
    },
    {
      "label": "9",
      "R": -27.8691,
      "d": 94.9969,
      "sd": 15.3
    }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "5", "toSurface": "7" }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; separate front- and rear-cell configurations are not modeled."
  },
  "aperture": {
    "nominalFNumber": 5.5,
    "fStops": [
      5.5,
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
    "fullFieldDeg": 86.5,
    "maxTraceFieldDeg": 43.25
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
