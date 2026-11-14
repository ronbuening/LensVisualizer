import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * RU 2726264 C1, sole example (Table 1, printed pp. 7–8; Fig. 1). Inventors Vladimir Aleksandrovich Bogdankov and
 * Ilya Anatolevich Levin; patent holder PAO Krasnogorsk Plant named after S.A. Zverev (KMZ). Application 2019143982,
 * filed 26 December 2019, published 10 July 2020. The patent states f′ = 52 mm, relative aperture 1:0.95, image
 * field 2y′ = 43 mm and an object at infinity. Nine elements in eight groups, all spherical; L4 and L5 form the one
 * cemented doublet. The patent divides the lens into three positive components: I (L1–L3) ahead of the stop,
 * II (L4–L6) and III (L7–L9) behind it.
 *
 * SCALE: none. R, d, n and ν are as printed at the native 52 mm; the paraxial EFL is 52.0315 mm.
 *
 * GLASS: Table 1 heads its columns n and ν without naming a spectral line; they are traced as nd and νd. All six
 * distinct printed pairs are the d-line values of Russian GOST optical glasses as GOST 13659-78 tabulates them
 * (inferred from that agreement; the patent names no glass): 1.5750 / 41.29 LF5, 1.7441 / 50.42 STK19,
 * 1.6595 / 57.35 STK3, 1.7552 / 27.52 TF5, 1.6131 / 60.61 TK14 and 1.6895 / 31.13 TF8, every nd to the printed four
 * decimals and every νd within 0.03. At the e line these glasses read 0.0024–0.0065 higher, and no pair matches any
 * catalog glass there. STK3 and TK14 trace on the LZOS catalogue rows. QF3 and H-ZF6 equal LF5 and TF5 at the d
 * line; PBM28 (nd 0.0006 and νd 0.05 below TF8) lends its dispersion curve, and the trace keeps the printed nd.
 * STK19 stays Unmatched.
 *
 * STOP: Table 1 places the aperture diaphragm (АД) 14.9 mm behind R6 and 11.3 mm ahead of R7. The stop takes its own
 * row, so model labels 8–18 carry the patent's R7–R17. The printed iris diameter, 46.2 mm, works out to paraxial
 * F/0.952. As for any ordinary prime, the stop radius is derived from the design F/0.95 instead: 23.147 mm, a
 * 46.29 mm diameter.
 *
 * SEMI-DIAMETERS: the printed clear diameters D divided by two. They are real-ray apertures: a real axial ray that
 * just fills the stop meets surfaces 1–9 within 0.05 mm of D/2. The aperture audit finds no rim limit at F/0.95, so
 * no rim is changed. Fig. 1 (13.74 px/mm along the axis, about 13.6 px/mm across it at 301 dpi) draws L4, L7, L8 and
 * L9 as square blocks wider than those apertures: L4's front face ends in a flat land out to 26.5 mm, L7's plane
 * rear face runs out to its front rim, L8's rear face meets the edge, and L9's rear face ends in a land out to
 * 18.25 mm. rimExtensionSd draws these edges (8: 26.5, 14: 25.55, 16: 19.6, 18: 18.25); they clip no rays. A
 * cemented interface carries one semi-diameter, so L5's front face stops at the 26.5 mm junction instead of
 * reaching the 29.5 mm edge the figure draws.
 *
 * IMAGE PLANE: the final spacing is the printed d18 = 23.7 mm against a paraxial back focus of 23.722 mm. The patent
 * says the image forms in the plane of best setting; real rays at pupil zones 0.5–0.85 cross the axis
 * 23.685–23.699 mm behind the last surface.
 *
 * FOCUS: infinity only. The patent prints no close-focus spacing or moving group; closeFocusM is a far placeholder,
 * not a minimum focus distance. The maker's 0.7 m is catalog.closeFocusM.marketing.
 *
 * SOURCE NOTE: the application was filed on 26 December 2019, nine months after the lens went on sale on
 * 20 March 2019, so the example may record a revision of the production design.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "kmz-zenitar-50mm-f095",
  "maker": "KMZ",
  "name": "KMZ ZENITAR 50mm f/0.95",
  "subtitle": "RU 2726264 C1, sole example — probable Zenitar 50mm f/0.95 production correlation",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "sony-fe"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 52 mm",
      "DESIGN F/0.95",
      "ALL SPHERICAL"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 50,
      "design": 52
    },
    "fNumber": {
      "marketing": 0.95,
      "design": 0.95
    },
    "closeFocusM": {
      "marketing": 0.7
    }
  },
  "source": {
    "patentNumber": "RU 2726264 C1",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2020,
    "authors": [
      "Vladimir Aleksandrovich Bogdankov",
      "Ilya Anatolevich Levin"
    ],
    "assignees": [
      "PJSC Krasnogorsky Zavod named after S. A. Zverev"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Plano-Concave",
      "nd": 1.575,
      "vd": 41.29,
      "indexReference": "d",
      "focalLengthMm": -137.83,
      "glass": "QF3 (CDGM; d-line equivalent of GOST LF5; supplier unconfirmed)",
      "role": "Negative front element, plane side to the object; set ahead of the positive pair to correct wide-beam aberrations"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.7441,
      "vd": 50.42,
      "indexReference": "d",
      "focalLengthMm": 113.45,
      "glass": "Unmatched (patent nd=1.7441, νd=50.42; GOST STK19 at the d line, not in the glass catalog)",
      "role": "Biconvex positive collector of component I"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6595,
      "vd": 57.35,
      "indexReference": "d",
      "focalLengthMm": 148.12,
      "glass": "STK3 (LZOS)",
      "role": "Positive meniscus, convex to the object, closing component I ahead of the stop"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.7552,
      "vd": 27.52,
      "indexReference": "d",
      "focalLengthMm": -47.13,
      "glass": "H-ZF6 (CDGM; d-line equivalent of GOST TF5; supplier unconfirmed)",
      "role": "Negative meniscus behind the stop, concave to the object; front member of the cemented doublet",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.6131,
      "vd": 60.61,
      "indexReference": "d",
      "focalLengthMm": 81.88,
      "glass": "TK14 (LZOS)",
      "role": "Thick positive meniscus, concave to the object; rear member of the cemented doublet that corrects axial colour",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Plano-Convex",
      "nd": 1.7441,
      "vd": 50.42,
      "indexReference": "d",
      "focalLengthMm": 102.42,
      "glass": "Unmatched (patent nd=1.7441, νd=50.42; GOST STK19 at the d line, not in the glass catalog)",
      "role": "Plano-convex positive element, plane side to the object, closing component II"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Plano-Convex",
      "nd": 1.7441,
      "vd": 50.42,
      "indexReference": "d",
      "focalLengthMm": 95.14,
      "glass": "Unmatched (patent nd=1.7441, νd=50.42; GOST STK19 at the d line, not in the glass catalog)",
      "role": "Plano-convex positive element, convex to the object, opening component III"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.6595,
      "vd": 57.35,
      "indexReference": "d",
      "focalLengthMm": 72.43,
      "glass": "STK3 (LZOS)",
      "role": "Positive meniscus, convex to the object; the strongest positive element"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Plano-Concave",
      "nd": 1.6895,
      "vd": 31.13,
      "indexReference": "d",
      "focalLengthMm": -36.85,
      "glass": "PBM28 (OHARA; spectral proxy for GOST TF8, nearest dispersion; supplier unconfirmed)",
      "role": "Negative rear element, plane side to the object; its concave rear face flattens the field"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": "flat",
      "d": 4,
      "sd": 26.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 79.25,
      "d": 3.6,
      "sd": 26.6
    },
    {
      "label": "3",
      "R": 118.03,
      "d": 7.5,
      "sd": 27.1,
      "medium": 2
    },
    {
      "label": "4",
      "R": -288.4,
      "d": 0.3,
      "sd": 27.15
    },
    {
      "label": "5",
      "R": 66.07,
      "d": 7.1,
      "sd": 26.85,
      "medium": 3
    },
    {
      "label": "6",
      "R": 195.43,
      "d": 14.9,
      "sd": 26.25
    },
    // Table 1 row АД: printed diameter 46.2 mm (paraxial F/0.952). Radius derived from the design f-number.
    {
      "label": "STO",
      "R": "flat",
      "d": 11.3
    },
    {
      "label": "8",
      "R": -32.21,
      "d": 5,
      "sd": 22.65,
      "rimExtensionSd": 26.5,
      "medium": 4
    },
    {
      "label": "9",
      "R": -361.4,
      "d": 19.5,
      "sd": 26.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -44.98,
      "d": 0.3,
      "sd": 29.5
    },
    {
      "label": "11",
      "R": "flat",
      "d": 9.5,
      "sd": 29.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": -76.21,
      "d": 0.3,
      "sd": 29.5
    },
    {
      "label": "13",
      "R": 70.79,
      "d": 8,
      "sd": 25.55,
      "medium": 7
    },
    {
      "label": "14",
      "R": "flat",
      "d": 0.3,
      "sd": 24.5,
      "rimExtensionSd": 25.55
    },
    {
      "label": "15",
      "R": 33.81,
      "d": 7.2,
      "sd": 19.6,
      "medium": 8
    },
    {
      "label": "16",
      "R": 105.93,
      "d": 2.6,
      "sd": 18.75,
      "rimExtensionSd": 19.6
    },
    {
      "label": "17",
      "R": "flat",
      "d": 2.9,
      "sd": 18.25,
      "medium": 9
    },
    {
      "label": "18",
      "R": 25.41,
      "d": 23.7,
      "sd": 16.2,
      "rimExtensionSd": 18.25
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Only the patent's infinity prescription is modeled. The production lens focuses to 0.7 m, but the patent prints no close-focus spacing or moving group."
  },
  "aperture": {
    "nominalFNumber": 0.95,
    "fStops": [
      0.95,
      1.4,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16,
    "blades": 14
  },
  "groups": [
    { "text": "I", "fromSurface": "1", "toSurface": "6" },
    { "text": "II", "fromSurface": "8", "toSurface": "12" },
    { "text": "III", "fromSurface": "13", "toSurface": "18" }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
