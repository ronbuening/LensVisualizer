import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** PRIVATE Zeissrow1119 S5fullvalidationv4: more of curvedopticalface SD12.771 at audited43/70endpoint, no transparentrims.
 * Literal151.2scale optics, stop,computedpara162.8352658865plane remainfixed; dline reference, infinity/factory/clearaperture qualifications retained.
 * OthersevenSDs unchanged; separate new0/7/14native/conditional2D convergence required. */
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-sonnar-150f4-us2720140-private-row1119",
  "maker": "Carl Zeiss Oberkochen",
  "name": "Zeiss Sonnar 150mm f/4 — alternative patent reconstruction, S5 clear face (inferred apertures/stop; infinity only; factory identity unproven; private)",
  "subtitle": "US2720140 ExampleIII; uniform151.2scale; five spherical elements/three groups, factory identity unproven",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "hasselblad-v"
    ],
    "imageFormat": "6x6",
    "elementCount": 5,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 150,
      "design": 151.2
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "US 2,720,140",
    "example": {
      "label": "Example III",
      "id": "3"
    },
    "patentYear": 1955,
    "authors": [
      "Günther Lange"
    ],
    "assignees": [
      "Carl-Zeiss-Stiftung"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.66672,
      "vd": 48.4,
      "indexReference": "d",
      "indexReferenceNote": "Patent explicitly defines nd at d-line. Literal nd/V retained; no modern supplier/full dispersion identification.",
      "glass": "Unmatched literal (1.66672/48.4); vendor/full dispersion unresolved",
      "focalLengthMm": 160.7683381134462
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "indexReferenceNote": "Patent explicitly defines nd at d-line. Literal nd/V retained; no modern supplier/full dispersion identification.",
      "glass": "Unmatched literal (1.62041/60.3); vendor/full dispersion unresolved",
      "focalLengthMm": 52.04265732894149,
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.72342,
      "vd": 38.0,
      "indexReference": "d",
      "indexReferenceNote": "Patent explicitly defines nd at d-line. Literal nd/V retained; no modern supplier/full dispersion identification.",
      "glass": "Unmatched literal (1.72342/38.0); vendor/full dispersion unresolved",
      "focalLengthMm": -31.802792588468563,
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.70154,
      "vd": 41.1,
      "indexReference": "d",
      "indexReferenceNote": "Patent explicitly defines nd at d-line. Literal nd/V retained; no modern supplier/full dispersion identification.",
      "glass": "Unmatched literal (1.70154/41.1); vendor/full dispersion unresolved",
      "focalLengthMm": 35.591093796342406,
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.6014,
      "vd": 38.3,
      "indexReference": "d",
      "indexReferenceNote": "Patent explicitly defines nd at d-line. Literal nd/V retained; no modern supplier/full dispersion identification.",
      "glass": "Unmatched literal (1.6014/38.3); vendor/full dispersion unresolved",
      "focalLengthMm": -46.9440448270829,
      "cemented": "D2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 74.8187496,
      "d": 10.975608,
      "sd": 20.79,
      "medium": 1
    },
    {
      "label": "2",
      "R": 233.219952,
      "d": 0.24948,
      "sd": 20.79
    },
    {
      "label": "3",
      "R": 34.3967904,
      "d": 15.963696,
      "sd": 17.4636,
      "medium": 2
    },
    {
      "label": "4",
      "R": -433.024704,
      "d": 2.24532,
      "sd": 17.4636,
      "medium": 3
    },
    {
      "label": "5",
      "R": 24.3506088,
      "d": 18.5576832,
      "sd": 12.771
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 12.3717888
    },
    {
      "label": "6",
      "R": 529.674768,
      "d": 10.975608,
      "sd": 13.9293,
      "medium": 4
    },
    {
      "label": "7",
      "R": -25.97994,
      "d": 10.476648,
      "sd": 14.553,
      "medium": 5
    },
    {
      "label": "8",
      "R": -374.986584,
      "d": 81.01943388646856,
      "sd": 17.8794
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Alternative patent-based infinity-only reconstruction with inferred apertures and stop. S5 curved clear-face semi-diameter is 12.771 mm instead of the original 11.0187 mm; this does not transmit through rim lands. All other optics and the computed 162.8352658865 mm paraxial image plane remain fixed. Factory identity is unproven, including correlation to the later C150 T* sheet. The retail 1.4 m minimum focus is descriptive; no finite prescription or focus motion is modeled. Patent fields 0°, 7°, 14° map to native image-height fractions 0, 0.469576, 0.957240. The native 39.6 mm format corner maps to 14.5945°, beyond the validated source edge; that extension is a simulation, not source-field validation. The manufacturer 29° full diagonal remains separate. Literal source d-line indices are retained at reference 587.5618 nm, without full dispersion validation. S7 edge clipping remains. Accepting more S5 rays lowered the saved conditional axial T30 from 0.33008 to 0.20705; neither aperture hypothesis is selected by contrast. Native MTF is a simulation; corrected 2D scalar research remains conditional, without factory or continuum validation."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
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
    "fullFieldDeg": 28,
    "maxTraceFieldDeg": 14
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
