import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal sole example; source-native numerical scale is an explicit hypothesis.
 * Retail identity is a probable family association only. Plane, stop and caps are
 * declared assumptions; no finite source state, optical retuning or applied refocus.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "konica-hexanon-ar-57mm-f12-native-f1",
  "maker": "Konica",
  "name": "KONICA HEXANON AR 57mm f/1.2",
  "subtitle": "JP S47-019025 Y1 sole example — source-native hypothetical reconstruction; retail family association descriptive",
  "catalog": {
    "elementCount": 7,
    "groupCount": 6,
    "focalLengthMm": {
      "design": 1
    },
    "fNumber": {
      "design": 1.2
    },
    "specs": [
      "SOURCE NATIVE f=1/F1.2; retail57mm is descriptive only",
      "Grade B probable historical family; exact factory prescription unproved",
      "Assumed one source unit per runtime mm; frequencies belong to this hypothetical scale",
      "Computed infinity plane; inferred stop and clear apertures; clipping retained",
      "No numerical finite endpoint or focus law; infinity only",
      "Source41° differs from maker42°; automatic cap-limited viewer fields are diagnostic"
    ]
  },
  "source": {
    "patentNumber": "JP S47-019025 Y1",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1972,
    "authors": [
      "Saburo Kinoshita"
    ],
    "assignees": [
      "Konishiroku Photo Industry Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.7739,
      "vd": 50.6,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 1.6129027837033316,
      "role": "The first positive meniscus begins the converging front group. Its nearly flat rear face remains the literal finite radius29.987; it has not been flattened."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.789,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 1.0850446595510366,
      "role": "The second positive meniscus supplies substantial front power. Its boundary with L3 is separated by the literal thin0.02 gap, which constrains the inferred optical caps."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.74,
      "vd": 28.2,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -0.6063130573207013,
      "role": "The negative meniscus presents a steep image-side concavity toward the diaphragm. The source discusses this inner curvature as part of coma and field-curvature balancing."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.74077,
      "vd": 27.7,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -0.3882218316323836,
      "role": "The negative cemented member faces the diaphragm. It shares surface8 with L5; its isolated-in-air focal length is not the installed power of the cemented component.",
      "cemented": "CD1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.8306,
      "vd": 36.5,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 0.45769792684492105,
      "role": "The positive cemented partner balances L4 across the literal common surface8. Its high index and lower Abbe number remain source coordinates, without a named supplier.",
      "cemented": "CD1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.8,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 2.6253075822404335,
      "role": "The rear positive meniscus is separated from the cemented pair and final singlet by the two literal0.0017 gaps. The patent discusses rear glass indices and Abbe numbers in the correction conditions."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.755,
      "vd": 52.4,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 1.5920440716962245,
      "role": "The final positive singlet completes the rear assembly. The primary prose allows a biconvex or meniscus member; the selected literal radii define the biconvex form."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 1.2,
      "d": 0.095,
      "sd": 0.45833333333333337,
      "medium": 1
    },
    {
      "label": "2",
      "R": 29.987,
      "d": 0.0017,
      "sd": 0.45833333333333337
    },
    {
      "label": "3",
      "R": 0.4948,
      "d": 0.165,
      "sd": 0.397,
      "medium": 2
    },
    {
      "label": "4",
      "R": 1,
      "d": 0.02,
      "sd": 0.315
    },
    {
      "label": "5",
      "R": 1.5009,
      "d": 0.04,
      "sd": 0.315,
      "medium": 3
    },
    {
      "label": "6",
      "R": 0.3415,
      "d": 0.1425,
      "sd": 0.28
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.1425
    },
    {
      "label": "7",
      "R": -0.416,
      "d": 0.03,
      "sd": 0.28,
      "medium": 4
    },
    {
      "label": "8",
      "R": 0.9602,
      "d": 0.18,
      "sd": 0.33,
      "medium": 5
    },
    {
      "label": "9",
      "R": -0.5758,
      "d": 0.0017,
      "sd": 0.33
    },
    {
      "label": "10",
      "R": -11.851,
      "d": 0.045,
      "sd": 0.3225,
      "medium": 6
    },
    {
      "label": "11",
      "R": -1.6507,
      "d": 0.0017,
      "sd": 0.3225
    },
    {
      "label": "12",
      "R": 1.43,
      "d": 0.05,
      "sd": 0.315,
      "medium": 7
    },
    {
      "label": "13",
      "R": -7.4252,
      "d": 0.5967818164579419,
      "sd": 0.315
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Hypothetical collimated input only. No numerical finite conjugate or motion law is supplied. The computed Gaussian plane is fixed before tracing, with no applied refocus. Whole normalized f1 remains numerically unchanged. One source length unit is represented by1 runtime millimetre ONLY as an explicit hypothetical computational convention; physical factory dimensions and retail57mm mapping are unknown. Spatial frequencies apply only to this assumed f1 model. Figures2/3 are separately stated atf100 and are not an f1 MTF validation oracle."
  },
  "aperture": {
    "nominalFNumber": 1.2,
    "fStops": [
      1.2,
      1.4,
      2,
      2.8,
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
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 41
  },
  "groups": [
    {
      "text": "Front",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "Rear",
      "fromSurface": "7",
      "toSurface": "13"
    }
  ],
  "doublets": [
    {
      "text": "CD1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
