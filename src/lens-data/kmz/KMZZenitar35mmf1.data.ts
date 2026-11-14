import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * RU 2771147 C1, sole example (Table 1, printed p. 7). Inventors Vladimir Aleksandrovich Bogdankov and Ilya
 * Anatolevich Levin; patent holder PAO Krasnogorsk Plant named after S.A. Zverev (KMZ). Filed 25 March 2021,
 * published 27 April 2022. The patent states f′ = 36 mm, relative aperture 1:1.0, image field 2y′ = 43 mm and an
 * object at infinity. Nine elements in eight groups, all spherical; L5 and L6 form the one cemented doublet.
 *
 * SCALE: none. R, d, n and ν are as printed at the native 36 mm; the paraxial EFL is 36.014 mm.
 *
 * GLASS: Table 1 heads its columns n and ν without naming a spectral line; they are traced as nd and νd. All four
 * printed pairs are the d-line values of Russian GOST optical glasses as GOST 13659-78 tabulates them (inferred from
 * that agreement; the patent names no glass): 1.5750 / 41.30 LF5, 1.7552 / 27.52 TF5, 1.6920 / 55.05 STK12 and
 * 1.6595 / 57.35 STK3, every nd to the printed four decimals and every νd within 0.04. No pair matches any catalog
 * glass at the e line. STK3 and TF5 trace on the LZOS catalogue rows (nd 1.659502 / νd 57.35 and 1.755234 / 27.53).
 * QF3 equals LF5 at the d line; the catalog carries no STK12 row, so J-LAK9 (nd 0.0010 and νd 0.12 below the
 * printed pair) lends its dispersion curve, which follows STK12 within 2e-5 at the C, F and g lines, and the trace
 * keeps the printed nd.
 *
 * STOP: Table 1 places the aperture diaphragm (АД) 7.85 mm behind R11 and 1.3 mm ahead of R12. The stop takes its
 * own row, so model labels 13–18 carry the patent's R12–R17. The printed iris diameter, 30.8 mm, works out to
 * paraxial F/1.02, within the rounding of the stated 1:1.0. As for any ordinary prime, the stop radius is derived
 * from the design F/1.0 instead: 15.73 mm, a 31.47 mm diameter.
 *
 * SEMI-DIAMETERS: the printed clear diameters D divided by two. The aperture audit finds no rim limit at F/1.0, so
 * no rim is changed. Fig. 1 (p. 9; 15.96 px/mm along the axis, 15.58 px/mm across it at 382 dpi) agrees with the
 * printed rims within 4%, except where it draws an element square past a smaller clear diameter. rimExtensionSd
 * draws those four flat lands at the height of the element's other face: L1's rear curve ends near 23 mm and a
 * vertical stroke rises to the 29 mm front rim (face 2, 29.0); L3's front curve ends near 22.3 mm and a stroke rises
 * to its 23.2 mm flat top (face 5, 23.35); L6's rear curve ends near 15.4 mm and rises to the 20 mm cemented rim
 * (face 11, 20.1); L8's rear face runs straight on past its 13.25 mm clear radius to the 14.1 mm flat top (face 16,
 * 14.2). The lands trace nothing and cost no light.
 *
 * IMAGE PLANE: the final spacing is the printed d18 = 17.3 mm against a paraxial back focus of 17.41 mm. This is not
 * a source error. The patent says the image forms in the plane of best setting, and the spherical aberration is
 * undercorrected: real d-line rays at pupil zones 0.5–0.85 cross the axis 17.28–17.32 mm behind the last surface.
 * The printed 17.3 mm is that best-focus plane and is kept.
 *
 * FOCUS: the patent prints only the infinity state, so no focus movement is modeled; closeFocusM = 1e15 marks focus
 * as not modeled and is not a minimum focus distance. KMZ lists 0.8 m for the production lens
 * (catalog.closeFocusM.marketing).
 */
const lens = {
  "schema": 2,
  "key": "kmz-zenitar-35mm-f1",
  "maker": "KMZ",
  "name": "KMZ ZENITAR 35mm f/1",
  "subtitle": "RU 2771147 C1, sole example — strong production correlation",
  "visible": true,

  "catalog": {
    "lensMounts": ["leica-m"],
    "imageFormat": "135-full-frame",
    "imageCircleMm": 43,
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 36 mm",
      "DESIGN F/1.0",
      "ALL SPHERICAL",
      "2ω = 61.7°"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 35,
      "design": 36
    },
    "fNumber": {
      "marketing": 1,
      "design": 1
    },
    "closeFocusM": {
      "marketing": 0.8
    }
  },

  "source": {
    "patentNumber": "RU 2771147 C1",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2022,
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
      "type": "Negative Meniscus",
      "nd": 1.575,
      "vd": 41.3,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": -59.44,
      "glass": "QF3 (CDGM; d-line equivalent of GOST LF5; supplier unconfirmed)",
      "role": "Negative meniscus, convex to the object, that forms the whole negative first component (I)."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.7552,
      "vd": 27.52,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": 84.66,
      "glass": "TF5 (LZOS)",
      "role": "Dense-flint positive singlet with a nearly flat rear face; first element of the positive second component (II)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.692,
      "vd": 55.05,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": -133.62,
      "glass": "J-LAK9 (Hikari; spectral proxy for GOST STK12, nearest catalog row; supplier unconfirmed)",
      "role": "Weak single negative meniscus, concave to the object, between the two positive singlets of component II."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.692,
      "vd": 55.05,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": 54.41,
      "glass": "J-LAK9 (Hikari; spectral proxy for GOST STK12, nearest catalog row; supplier unconfirmed)",
      "role": "Thick second biconvex singlet of component II, directly ahead of the cemented meniscus."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6595,
      "vd": 57.35,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": 39.62,
      "glass": "STK3 (LZOS)",
      "role": "Positive crown front member of the cemented negative meniscus D1, which closes component II ahead of the stop.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.52,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": -23.48,
      "glass": "TF5 (LZOS)",
      "role": "Dense-flint rear member of D1; its strongly curved rear face is concave toward the stop.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.692,
      "vd": 55.05,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": 79.95,
      "glass": "J-LAK9 (Hikari; spectral proxy for GOST STK12, nearest catalog row; supplier unconfirmed)",
      "role": "First positive singlet of the three-element rear component (III), 1.3 mm behind the stop."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.692,
      "vd": 55.05,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": 53.57,
      "glass": "J-LAK9 (Hikari; spectral proxy for GOST STK12, nearest catalog row; supplier unconfirmed)",
      "role": "Second positive singlet of component III, the stronger of the two."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.7552,
      "vd": 27.52,
      "indexReferenceNote": "Table 1 names no spectral line for n and ν; they are traced as nd and νd, because every printed pair is the d-line value of a GOST 13659-78 glass (LF5, TF5, STK12, STK3).",
      "focalLengthMm": -84.51,
      "glass": "TF5 (LZOS)",
      "role": "Thick dense-flint negative meniscus, convex to the object, that closes component III ahead of the image."
    }
  ],

  "surfaces": [
    {
      "label": "1",
      "R": 133.66,
      "d": 4.0,
      "sd": 29.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 26.92,
      "d": 11.45,
      "sd": 22.95,
      "rimExtensionSd": 29.0
    },
    {
      "label": "3",
      "R": 74.82,
      "d": 6.6,
      "sd": 23.1,
      "medium": 2
    },
    {
      "label": "4",
      "R": -422.7,
      "d": 7.6,
      "sd": 22.85
    },
    {
      "label": "5",
      "R": -42.85,
      "d": 3.6,
      "sd": 22.45,
      "rimExtensionSd": 23.35,
      "medium": 3
    },
    {
      "label": "6",
      "R": -82.6,
      "d": 1.0,
      "sd": 23.35
    },
    {
      "label": "7",
      "R": 85.11,
      "d": 12.3,
      "sd": 25.0,
      "medium": 4
    },
    {
      "label": "8",
      "R": -63.53,
      "d": 2.0,
      "sd": 25.1
    },
    {
      "label": "9",
      "R": 34.51,
      "d": 12.7,
      "sd": 21.45,
      "medium": 5
    },
    {
      "label": "10",
      "R": -91.83,
      "d": 3.5,
      "sd": 20.1,
      "medium": 6
    },
    {
      "label": "11",
      "R": 22.34,
      "d": 7.85,
      "sd": 15.45,
      "rimExtensionSd": 20.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.3
    },
    {
      "label": "13",
      "R": 131.83,
      "d": 4.6,
      "sd": 15.35,
      "medium": 7
    },
    {
      "label": "14",
      "R": -93.97,
      "d": 1.0,
      "sd": 15.2
    },
    {
      "label": "15",
      "R": 46.88,
      "d": 6.3,
      "sd": 14.2,
      "medium": 8
    },
    {
      "label": "16",
      "R": -167.49,
      "d": 0.5,
      "sd": 13.25,
      "rimExtensionSd": 14.2
    },
    {
      "label": "17",
      "R": 40.64,
      "d": 8.9,
      "sd": 11.7,
      "medium": 9
    },
    {
      "label": "18",
      "R": 22.49,
      "d": 17.3,
      "sd": 11.35
    }
  ],

  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity prescription only. The patent publishes no focusing data, so no focus movement is modeled. The production lens focuses manually down to 0.8 m."
  },

  "aperture": {
    "nominalFNumber": 1,
    "fStops": [
      1,
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

  "groups": [
    {
      "text": "I",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "II",
      "fromSurface": "3",
      "toSurface": "11"
    },
    {
      "text": "III",
      "fromSurface": "13",
      "toSurface": "18"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],

  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default lens;
