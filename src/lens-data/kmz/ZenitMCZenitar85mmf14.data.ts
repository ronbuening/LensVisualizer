import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** REVIEW DRAFT — NOT VALIDATED FOR DELIVERY. Root-level integration import.
 * RU2611106C1 sole numerical prescription; original R/d/nD/VD retained without scaling.
 * Qualified modern MC Zenitar85/1.4 family association, NOT exact factory identity.
 * All clear semi-diameters INFERRED: diagram-outline starting points with bounded
 * axial-F1.4 ray-envelope adjustments. R7 optical cap18.4mm is not its drawing rim.
 * Source stop position5.5mm before L5; radius derived from nominalF1.4, not published.
 * Final image gap38.2mm unchanged. Infinity-only; no invented finite focus motion.
 * Explicit sodium-D materials; normal-line Abbe spectral estimates, no catalog substitution.
 * Off-axis clipping retained and disclosed. No reproduced source MTF claim.
 * Aperture control range F1.4–22 follows maker booklet, not patent range.
 * visible:false until downstream full validation/qualification is completed.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "zenit-mc-zenitar-85mm-f14",
  "maker": "Zenit",
  "name": "ZENIT MC ZENITAR 85mm f/1.4",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Source spherical glass",
      "nd": 1.613094,
      "vd": 60.6066,
      "glass": "Unmatched (source TK14; literal sodium-D only)",
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Source spherical glass",
      "nd": 1.613094,
      "vd": 60.6066,
      "glass": "Unmatched (source TK14; literal sodium-D only)",
      "indexReference": "D"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Source spherical glass",
      "nd": 1.656908,
      "vd": 51.1549,
      "glass": "Unmatched (source TK21; literal sodium-D only)",
      "indexReference": "D"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Source spherical glass",
      "nd": 1.755234,
      "vd": 27.5228,
      "glass": "Unmatched (source TF5; literal sodium-D only)",
      "indexReference": "D"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Source spherical glass",
      "nd": 1.57502,
      "vd": 41.2951,
      "glass": "Unmatched (source LF5; literal sodium-D only)",
      "indexReference": "D"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Source spherical glass",
      "nd": 1.659499,
      "vd": 57.352,
      "glass": "Unmatched (source STK3; literal sodium-D only)",
      "indexReference": "D"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Source spherical glass",
      "nd": 1.755234,
      "vd": 27.5228,
      "glass": "Unmatched (source TF5; literal sodium-D only)",
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 79.07,
      "d": 6.5,
      "sd": 29.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 285.1,
      "d": 0.4,
      "sd": 29.6
    },
    {
      "label": "3",
      "R": 49.43,
      "d": 6.7,
      "sd": 27.907453470911104,
      "medium": 2
    },
    {
      "label": "4",
      "R": 77.62,
      "d": 0.5,
      "sd": 27.907453470911104
    },
    {
      "label": "5",
      "R": 33.42,
      "d": 15,
      "sd": 24.605686354192905,
      "medium": 3
    },
    {
      "label": "6",
      "R": 111.69,
      "d": 3,
      "sd": 20.91031686675028,
      "medium": 4
    },
    {
      "label": "7",
      "R": 20.51,
      "d": 9.1,
      "sd": 18.4
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.5
    },
    {
      "label": "8",
      "R": -34.36,
      "d": 2.8,
      "sd": 15.293159131074624,
      "medium": 5
    },
    {
      "label": "9",
      "R": 41.98,
      "d": 9.1,
      "sd": 15.885131712904142,
      "medium": 6
    },
    {
      "label": "10",
      "R": -41.98,
      "d": 0.5,
      "sd": 15.991396632955041
    },
    {
      "label": "11",
      "R": 84.53,
      "d": 3.8,
      "sd": 14.87653564676422,
      "medium": 7
    },
    {
      "label": "12",
      "R": "flat",
      "d": 38.2,
      "sd": 14.515540870172526
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION \u2014 infinity-only literal patent state; static sentinel, no finite-focus spacings or motion modeled. Production MFD0.85m is catalog-only."
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
      2,
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
    "fullFieldDeg": 28.5,
    "maxTraceFieldDeg": 14.25
  },
  "layout": {
    "yScFill": 0.5
  },
  "subtitle": "RU 2611106 C1 \u2014 qualified modern production-family correlation; literal sodium-D patent prescription",
  "visible": false,
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.23
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4
    },
    "closeFocusM": {
      "marketing": 0.85
    },
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "SOURCE f = 84.23 mm",
      "F/1.4",
      "SOURCE FULL FIELD 28.5\u00b0",
      "INFINITY-ONLY PATENT MODEL"
    ]
  },
  "source": {
    "patentNumber": "RU 2611106 C1",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2017,
    "authors": [
      "Vladimir Alexandrovich Bogdankov"
    ],
    "assignees": [
      "Public Joint-Stock Company Krasnogorsk Plant named after S. A. Zverev"
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Literal sodium-D prescription computes EFL84.26434158 mm versus printed84.23 and BFL38.25904088 versus printed38.2. Printed spacings/image gap preserved, no refocus."
      },
      {
        "status": "unresolved",
        "note": "Source explicitly labels nD/VD; current LZOS catalog helium-d values nearly coincide but do not authorize relabeling or substitution. Native indexReference D retained; other spectral indices are Abbe estimates."
      },
      {
        "status": "unresolved",
        "note": "Prose full field28.5deg, Fig2 plotted half field13.5deg and maker full field28deg are distinct; none silently reconciled."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
