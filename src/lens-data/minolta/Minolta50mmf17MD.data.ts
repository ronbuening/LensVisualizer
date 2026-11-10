import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Minolta MD 50mm f/1.7, from JP S60-111215 A (rear conversion lens system, Minolta Camera).
 *
 * SOURCE: the unnumbered taking-lens table (撮影レンズ例) on PDF p. 4, drawn in Figure 2 on PDF p. 6. Six elements in
 * five groups, all spherical. The numbered Examples 1–4 are rear converters for this lens and Figure 4 onward show the
 * combined systems, so none of them is modeled here. The table carries no example number, so `source.example` is left
 * out.
 *
 * SCALE: 1.0. The table is printed in millimetres; nothing is rescaled to the marketed 50 mm.
 *
 * PRINTED: eleven radii, ten axial spacings, six N/ν pairs, φM = 0.0194, FNo = 1.73, 2ω = 45.6° and dM = 7.65 mm.
 * R11 = -43.293 mm is confirmed by the sag of r11 in Figure 2 and by the converter data.
 *
 * COMPUTED: EFL 51.498291 mm and infinity back focus 36.883734 mm; the patent prints neither in millimetres. The
 * computed power 0.019418 rounds to the printed φM, and the e1, B1 and β values of Examples 1–4 imply f = 51.47–51.50 mm
 * and back focus 36.85–36.90 mm.
 *
 * FOCUS: unit focus. The patent calls this lens a whole-extension type and dM its extension to closest focus, so the
 * last gap runs from 36.883734 to 44.533734 mm. That gives 450.2 mm object to image at 1:6.73.
 *
 * STOP: no position or diameter is printed. The iris marks in Figure 2 sit at about z = 18.34 mm from S1 with a radius
 * of 9.9–11.3 mm. STO is placed at z = 18.4 mm, splitting d6 = 11.62 mm into 6.09 + 5.53 mm. The stop radius (10.36 mm)
 * follows from the design f-number; there is no override.
 *
 * SEMI-DIAMETERS: none are printed. They are estimated from Figure 2 and floor-checked by real-ray trace. The figure is
 * anamorphic: 14.3 px/mm along the axis and 13.6–14.0 px/mm across it, from arc fits and the 1.026 aspect of the printed
 * circles on the front page, so rims are read as ranges. L1 is square-cut at 16.4 mm and L2 at 14.0 mm, as drawn. S5 =
 * 12.7 mm and S7 = 10.8 mm keep the paraxial marginal height at f/1.73 × 1.10, rounded up to 0.1 mm, and S6 = 11.0 mm
 * follows the drawn rim. The rear rims clear the axial beam at closest focus, where the fixed iris sends it wider than at
 * infinity: 11.69 mm at S8, 12.18 mm at S9, 12.21 mm at S10 and 12.20 mm at S11, giving S9–S11 = 12.3 mm. S8 = 11.9 mm is
 * L4's drawn top, which clears that beam by 0.2 mm. The figure's flat tops on L3 and L4 are drawn with rimExtensionSd,
 * which leaves the clear apertures unchanged: S6 out to 12.7 mm and S7 out to 11.9 mm. The figure's chamfers are not
 * drawn, and a cemented face takes no land, so one straight
 * edge joins the S8 and S9 rims where the figure steps L5 about 0.4 mm past L4. These are modeled clear radii, not
 * production values.
 *
 * INDEX REFERENCE: the table labels N and ν without a spectral line; the d line is assumed.
 *
 * GLASS: catalog labels are coordinate equivalents and do not establish a supplier. L6 (1.7810/44.55) has no catalog
 * row and stays unmatched.
 *
 * PRODUCT: the link to the MD 50mm f/1.7 is a correlation, not a confirmed factory prescription. The patent names no
 * product and cannot separate the 1981 New MD from the 1985 AF 50mm f/1.7.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "minolta-md-50f17",
  "maker": "Minolta",
  "name": "MINOLTA MD 50mm f/1.7",
  "subtitle": "JP S60-111215 A, master lens — production correlation, exact version unresolved",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "minolta-sr"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "DESIGN f = 51.50 mm",
      "DESIGN F/1.73",
      "ALL SPHERICAL",
      "PATENT 2ω = 45.6°"
    ],
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.4982911495985
    },
    "fNumber": {
      "marketing": 1.7,
      "design": 1.73
    }
  },
  "source": {
    "patentNumber": "JP S60-111215 A",
    "patentYear": 1985,
    "authors": [
      "Sho Fukushima"
    ],
    "assignees": [
      "Minolta Camera Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Front positive meniscus of the modified Gauss system.",
      "nd": 1.72,
      "vd": 50.31,
      "indexReference": "d",
      "focalLengthMm": 62.18436393613314,
      "glass": "LAC10 (HOYA, coordinate equivalent)",
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "role": "Second positive meniscus, ahead of the negative element.",
      "nd": 1.6935,
      "vd": 53.39,
      "indexReference": "d",
      "focalLengthMm": 66.51693523397756,
      "glass": "LAC13 (HOYA, coordinate equivalent)",
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "role": "Negative meniscus ahead of the stop, concave toward the central air space.",
      "nd": 1.6727,
      "vd": 32.22,
      "indexReference": "d",
      "focalLengthMm": -30.703655437865933,
      "glass": "SF5 (SCHOTT, coordinate equivalent)",
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "Negative front member of cemented pair C1, just behind the stop.",
      "nd": 1.6259,
      "vd": 35.7,
      "indexReference": "d",
      "focalLengthMm": -21.735393910898168,
      "glass": "S-TIM1 (OHARA catalog equivalent; production supplier unspecified)",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "role": "Positive rear member of cemented pair C1.",
      "nd": 1.6935,
      "vd": 53.39,
      "indexReference": "d",
      "focalLengthMm": 26.022949012319334,
      "glass": "LAC13 (HOYA, coordinate equivalent)",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "role": "Rear positive element with a nearly flat front face.",
      "nd": 1.781,
      "vd": 44.55,
      "indexReference": "d",
      "focalLengthMm": 49.8412305367006,
      "glass": "Unmatched (781446 high-index mid-dispersion glass; no compatible public coefficient row)",
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 38.987,
      "d": 4.66,
      "sd": 16.4,
      "medium": 1
    },
    {
      "label": "2",
      "R": 286.604,
      "d": 0.16,
      "sd": 16.4
    },
    {
      "label": "3",
      "R": 21.179,
      "d": 3.81,
      "sd": 14.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 36.272,
      "d": 2.22,
      "sd": 14.0
    },
    {
      "label": "5",
      "R": 64.979,
      "d": 1.46,
      "sd": 12.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 15.531,
      "d": 6.09,
      "sd": 11.0,
      "rimExtensionSd": 12.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.53
    },
    {
      "label": "7",
      "R": -17.213,
      "d": 0.88,
      "sd": 10.8,
      "rimExtensionSd": 11.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": 66.165,
      "d": 6.41,
      "sd": 11.9,
      "medium": 5
    },
    {
      "label": "9",
      "R": -23.831,
      "d": 0.16,
      "sd": 12.3
    },
    {
      "label": "10",
      "R": 374.955,
      "d": 2.8,
      "sd": 12.3,
      "medium": 6
    },
    {
      "label": "11",
      "R": -43.293,
      "sd": 12.3
    }
  ],
  "focus": {
    "closeFocusM": 0.45,
    "description": "Unit focus: the whole lens moves forward as one piece. JP S60-111215 A describes this taking lens as a whole-extension type and prints its extension to closest focus as dM = 7.65 mm. Added to the computed infinity back focus of 36.884 mm, that gives 44.534 mm and an object-to-image distance of about 450 mm, in line with the 0.45 m minimum focus of the production lens."
  },
  "gaps": { "11": { "label": "BF", "values": [[36.883733655908784, 44.53373365590878]] } },
  "aperture": {
    "nominalFNumber": 1.73,
    "fStops": [
      1.73,
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
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 45.6,
    "maxTraceFieldDeg": 22.8
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
