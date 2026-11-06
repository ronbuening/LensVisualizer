import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal sole example; source-native numerical scale is an explicit hypothesis.
 * Retail identity is a probable family association only. Plane, stop and caps are
 * declared assumptions; no finite source state, optical retuning or applied refocus.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-el-nikkor-50mm-f28-wakimoto-native-f100",
  "maker": "Nikon",
  "name": "NIKON EL-NIKKOR 50mm f/2.8 (Wakimoto)",
  "subtitle": "US 2,906,174 sole example — source-native hypothetical reconstruction; retail family association descriptive",
  "catalog": {
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 100.0
    },
    "fNumber": {
      "design": 2.5
    },
    "specs": [
      "SOURCE NATIVE f=100/F2.5; retail50mm/F2.8 is descriptive only",
      "Grade B probable historical family; exact factory prescription unproved",
      "Assumed one source unit per runtime mm; frequencies belong to this hypothetical scale",
      "Computed infinity plane; inferred stop and clear apertures; clipping retained",
      "No numerical finite endpoint or focus law; infinity only",
      "No source field or format; displayed cap-limited coverage is diagnostic only"
    ]
  },
  "source": {
    "patentNumber": "US 2,906,174",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1959,
    "authors": [
      "Zenji Wakimoto"
    ],
    "assignees": [
      "Nippon Kogaku K.K."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.6172,
      "vd": 54.0,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 133.07197854358733,
      "role": "The positive front meniscus is component I. The source describes its role jointly with the front Gauss-type pair rather than assigning an independently measured aberration contribution."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6228,
      "vd": 56.9,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 53.88015905383547,
      "role": "The positive front cemented member starts component II. Its shallow shared rear face remains−889.55; the source drawing and both printed tables control over the withdrawn low-resolution suspicion.",
      "cemented": "CD1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.62045,
      "vd": 38.0,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -35.85162903363418,
      "role": "The negative cemented partner completes component II at surface4. Source prose mislabels the third component single lens as L3 in one passage; the table and drawing consistently place this element in the front doublet.",
      "cemented": "CD1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 86.97119892460752,
      "role": "The positive meniscus is the single-element component III after the diaphragm. The source attributes separate sagittal/meridional field-curvature and astigmatism balancing to its surfaces."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.54869,
      "vd": 45.4,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -34.32390433090559,
      "role": "The negative rear cemented member starts component IV. Its common surface9 is not an air gap; no modern EL-Nikkor-N redesign is substituted.",
      "cemented": "CD2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.63854,
      "vd": 55.5,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 41.58999357425166,
      "role": "The final positive cemented member completes component IV. The rear doublet and preceding positive meniscus give the asymmetric rear arrangement described by Wakimoto.",
      "cemented": "CD2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 59.35,
      "d": 7.46,
      "sd": 22.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 203.7,
      "d": 0.58,
      "sd": 22.0
    },
    {
      "label": "3",
      "R": 34.69,
      "d": 12.1,
      "sd": 17.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": -889.55,
      "d": 3.6,
      "sd": 17.6,
      "medium": 3
    },
    {
      "label": "5",
      "R": 22.85,
      "d": 6.445,
      "sd": 12.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.445
    },
    {
      "label": "6",
      "R": -70.74,
      "d": 11.53,
      "sd": 12.3,
      "medium": 4
    },
    {
      "label": "7",
      "R": -32.52,
      "d": 2.33,
      "sd": 12.3
    },
    {
      "label": "8",
      "R": -22.91,
      "d": 2.71,
      "sd": 14.5,
      "medium": 5
    },
    {
      "label": "9",
      "R": 110.27,
      "d": 14.25,
      "sd": 17.8,
      "medium": 6
    },
    {
      "label": "10",
      "R": -33.22,
      "d": 64.32543062444235,
      "sd": 16.3
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Hypothetical collimated input only. No numerical finite conjugate or motion law is supplied. The computed Gaussian plane is fixed before tracing, with no applied refocus. Whole f100/F2.5 source coordinates remain unchanged. Source units are unnamed; one numerical source unit is represented by1 runtime millimetre as an explicit implementation hypothesis, not proof of physical dimensions. Retail50mm/F2.8 is descriptive family evidence, with no dimensional or lp/mm mapping."
  },
  "aperture": {
    "nominalFNumber": 2.5,
    "fStops": [
      2.5,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "layout": {
    "yScFill": 0.78
  },
  "groups": [
    {
      "text": "Front I–II",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "Rear III–IV",
      "fromSurface": "6",
      "toSurface": "10"
    }
  ],
  "doublets": [
    {
      "text": "CD1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "CD2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
