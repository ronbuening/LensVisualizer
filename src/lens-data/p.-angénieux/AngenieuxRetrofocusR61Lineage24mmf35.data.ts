import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FR 1,214,945 — representative R61-lineage 24 mm reconstruction, NOT a
 * literal transcription or a proven factory prescription. Ron authorized the
 * single R15 sign assumption on 2026-11-13 after reviewing both primary sections.
 * Printed R15 = -289.16 and R16 = -67.745 remain unchanged in literal-patent.json
 * and in the original PDF. ONLY this reconstruction uses R15 = +289.16.
 * No other source radius, thickness, index or Abbe number has been changed.
 *
 * The normalized reconstruction computes EFL 100.11723261971326 and BFD
 * 153.42839840703797, against source 100 and 153.3. Uniform scale s = 24/100
 * = 0.24 applies to every radius and tabulated distance: actual modeled EFL
 * 24.02813582873119 mm, BFD 36.82281561768913 mm. Last d uses computed infinity
 * BFD; source text BFD would scale to 36.792 mm. No aspheres to rescale.
 *
 * The patent supplies no numeric apertures or stop coordinate. STO splits
 * e12 between E6 and E7 equally (1.1256 + 1.1256 mm): inferred from the section,
 * not a source dimension. Its radius is derived by the engine from f/3.5.
 * All surface sd values are inferred spherical clear radii, constrained by
 * ray envelopes, the primary-section shape and native clearance checks.
 *
 * Glasses retain the exact nd/Abbe pairs. "raie D" and nd are printed without
 * a chemical/numeric wavelength; helium d is a disclosed engine convention.
 * Unmatched annotations deliberately use Abbe estimates; no supplier, modern
 * catalog identity, partial dispersion, or factory spectral curve is asserted.
 *
 * Infinity only: closeFocusM = 1e9 m is the supported infinity sentinel; no
 * variable gap exists. Period ALPA 16-inch MFD remains separate catalog metadata.
 * The Pignons drawing supports eight singlets, their order and biconvex E8;
 * it supplies no radii and does not itself print R61 or prove retail identity.
 * The unresolved erratum preserves that source uncertainty while disclosing
 * the user-authorized reconstruction exception; no evidence category is faked.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "angenieux-retrofocus-r61-lineage-24mm-f35-reconstruction",
  "maker": "P. Angénieux",
  "name": "P. ANGÉNIEUX RETROFOCUS 24mm f/3.5 (R61-lineage reconstruction)",
  "subtitle": "FR 1,214,945 sole example — representative 0.24× model; assumed positive R15; factory identity unverified",
  "catalog": {
    "lensMounts": [
      "alpa"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "24.028 mm MODELED EFL",
      "f/3.5 MODELED APERTURE",
      "83° PERIOD PRODUCT FIELD",
      "R15 SIGN ASSUMPTION",
      "INFINITY ONLY"
    ],
    "elementCount": 8,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "closeFocusM": {
      "marketing": 0.4064
    }
  },
  "source": {
    "patentNumber": "FR 1,214,945",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1960,
    "authors": [
      "Pierre Angénieux"
    ],
    "assignees": [],
    "errata": [
      {
        "status": "unresolved",
        "note": "The source table prints R15 = −289.16 and R16 = −67.745, giving normalized EFL 253.89824/BFD 400.35502 instead of 100/153.3 and a meniscus final lens. This separately labeled representative reconstruction applies R15 = +289.16 (scaled +69.3984 mm), leaving R16 unchanged; normalized EFL 100.11723/BFD 153.42840. This single-model assumption was explicitly authorized on 2026-11-13. The patent section and period ALPA drawing support the biconvex shape, but no independent numerical correction or exact factory identity is proven. The unresolved badge denotes original-source uncertainty; this is an explicit scoped exception to the normal keep-literal rule, not a verified corrected-source claim."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6203/60.20; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": -103.95403589616163,
      "apd": false,
      "role": "Front diverger."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6751,
      "vd": 32.3,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6751/32.30; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": 225.0162512801287,
      "apd": false,
      "role": "First weak positive member of the front component."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.6751,
      "vd": 32.3,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6751/32.30; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": 225.19253600931984,
      "apd": false,
      "role": "Second weak positive member of the front component."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6203/60.20; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": -36.111067891408574,
      "apd": false,
      "role": "Strong negative meniscus completing the front component."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6203/60.20; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": 45.45386528529418,
      "apd": false,
      "role": "Positive collector beginning the rear component."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6203/60.20; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": 39.0778412247726,
      "apd": false,
      "role": "Positive meniscus immediately ahead of the stop."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.6498,
      "vd": 33.7,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6498/33.70; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": -17.020643768812274,
      "apd": false,
      "role": "Negative corrector immediately behind the stop."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.6203,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "Unmatched (FR 1,214,945 coordinate 1.6203/60.20; supplier unspecified; assumed helium d reference)",
      "focalLengthMm": 21.492567711364956,
      "apd": false,
      "role": "Final converger; biconvex only under the disclosed R15 sign assumption."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 54.016799999999996,
      "d": 1.2144,
      "sd": 24.2,
      "medium": 1
    },
    {
      "label": "2",
      "R": 29.1408,
      "d": 9.3096,
      "sd": 24.2
    },
    {
      "label": "3",
      "R": 173.4672,
      "d": 2.8344,
      "sd": 18.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -1214.2463999999998,
      "d": 0.1224,
      "sd": 18.5
    },
    {
      "label": "5",
      "R": 220.7736,
      "d": 2.8344,
      "sd": 18.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": -485.7,
      "d": 0.2424,
      "sd": 18.5
    },
    {
      "label": "7",
      "R": 50.1888,
      "d": 1.2072,
      "sd": 14,
      "medium": 4
    },
    {
      "label": "8",
      "R": 15.344879999999998,
      "d": 23.22048,
      "sd": 13.8
    },
    {
      "label": "9",
      "R": 44.5224,
      "d": 3.6191999999999998,
      "sd": 7,
      "medium": 5
    },
    {
      "label": "10",
      "R": -74.49119999999999,
      "d": 0.1224,
      "sd": 7
    },
    {
      "label": "11",
      "R": 16.5936,
      "d": 3.5304,
      "sd": 6.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": 48.3192,
      "d": 1.1256000000000002,
      "sd": 6.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.1256000000000002
    },
    {
      "label": "13",
      "R": -35.1408,
      "d": 1.6199999999999999,
      "sd": 6.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": 16.4328,
      "d": 0.972,
      "sd": 5.8
    },
    {
      "label": "15",
      "R": 69.39840000000001,
      "d": 2.6712000000000002,
      "sd": 5.8,
      "medium": 8
    },
    {
      "label": "16",
      "R": -16.2588,
      "d": 36.82281561768913,
      "sd": 5.8
    }
  ],
  "focus": {
    "closeFocusM": 1000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION — infinity-only prescription; no finite-focus motion or close-focus state is modeled. Period 16-inch close focus is product metadata only."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
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
    "fullFieldDeg": 83,
    "maxTraceFieldDeg": 41.5
  },
  "groups": [
    {
      "text": "FRONT NEGATIVE COMPONENT I",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "REAR POSITIVE COMPONENT II",
      "fromSurface": "9",
      "toSurface": "16"
    }
  ],
  "doublets": [],
  "layout": {
    "yScFill": 0.52,
    "scFill": 0.56
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
