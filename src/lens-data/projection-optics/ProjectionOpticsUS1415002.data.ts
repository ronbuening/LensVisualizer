import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,415,002 A, sole numerical example. William H. Repp, of Rochester, New York, assignor to Projection Optics
 * Company, Inc.; filed 21 September 1920, granted 2 May 1922. A Petzval-type projection lens of 100 mm equivalent
 * focal length at F/2.2: a cemented front pair (equiconvex crown I, plano-concave flint II) and an air-spaced rear
 * pair (negative flint meniscus III, plano-convex crown IV). Four elements in three groups, all spherical.
 *
 * LABELS: the elements carry the patent's lens numerals I to IV, and the FRONT and REAR brackets are the text's
 * "front combination" (I + II) and "rear combination" (III + IV).
 *
 * PRESCRIPTION: R, d, nD and V are as printed for F = 100 mm in the table on page 2 and on the drawing sheet; the
 * paraxial EFL is 99.998 mm. The table prints radius magnitudes only. Signs follow the drawing and the text
 * (equiconvex I, plano-concave II, convex-concave III, convex-plano IV); the patent's stated component focal lengths,
 * about 1.36 F for the front pair and 2.42 F for the rear pair, are reproduced (1.359 F and 2.424 F). The table
 * misprints three row labels (gamma-3 for gamma-5, d7 for d4, d7 for gamma-7); each value is placed by position. The
 * text's rounded 28.2 mm for the first air space differs from the 28.094 mm that the table and the drawing both
 * print; 28.094 mm is used.
 *
 * GLASS: the patent prints the sodium D-line index and V: crown 1.5160 / 63.8 (I and IV), flint 1.6182 / 36.4
 * (II and III).
 *
 * ORIENTATION: the patent puts the screen to the left and the film at the right-hand focal plane, so the model traces
 * from the screen side at infinity to the film plane.
 *
 * STOP: not printed and not drawn. The iris plane is placed in the middle of the 28.094 mm air space, 14.047 mm from
 * each lens, and sized for F/2.2. The F/2.2 axial beam fills the front lens almost to its rim (22.73 mm of 23 mm), so
 * in a mount without an iris the front cell itself would set the aperture.
 *
 * SEMI-DIAMETERS: 23 mm on every surface, from the drawing, which the patent calls a full-size diagram. Calibrated
 * against the printed thicknesses (16.14 px/mm at 600 dpi; the vertical scale, checked on the sag of the 57.111 mm
 * front face, agrees within 1 %), the drawn diameters measure 46.2 to 46.6 mm, and the drawn edge thicknesses agree
 * with the model's. Overlaid at that scale, every drawn rim lies within 0.3 mm of the model's.
 *
 * FORMAT: a 100 mm (about 4 in) objective for theatre moving-picture projection, which the patent describes; the
 * 35 mm cinema format's 13.6 mm half-diagonal is a 7.7 degree half-field, which every rim passes. The patent shows no
 * iris, so the aperture list holds only F/2.2.
 *
 * IMAGE PLANE: the computed paraxial back focus, 61.622 mm behind the plano rear of IV; the patent prints none.
 *
 * FOCUS: infinity only; closeFocusM = 1e15 marks focus as not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "projection-optics-100mm-f22-us1415002",
  maker: "Projection Optics",
  name: "PROJECTION OPTICS 100mm f/2.2 (US 1,415,002 Design)",
  subtitle: "US 1,415,002 A, sole example \u2014 Petzval-type projection objective",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/2.2",
      "PROJECTION OBJECTIVE"
    ],
    lensMounts: ["projection-lens"],
    imageFormat: "35mm-cinema",
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 100
    },
    fNumber: {
      design: 2.2
    }
  },
  source: {
    patentNumber: "US 1,415,002 A",
    example: {
      label: "Sole example",
      id: null
    },
    patentYear: 1922,
    authors: [
      "William H. Repp"
    ],
    assignees: [
      "Projection Optics Company, Inc."
    ],
    sdSource: "figure-measured"
  },
  elements: [
    {
      id: 1,
      name: "I",
      label: "Element I",
      diagramLabel: "I",
      type: "Biconvex Positive",
      nd: 1.516,
      vd: 63.8,
      indexReference: "D",
      focalLengthMm: 57.18,
      glass: "Unmatched (crown, nD 1.5160 / V 63.8)",
      role: "Equiconvex crown of the cemented front pair; carries the pair's positive power",
      cemented: "C1"
    },
    {
      id: 2,
      name: "II",
      label: "Element II",
      diagramLabel: "II",
      type: "Plano-Concave Negative",
      nd: 1.6182,
      vd: 36.4,
      indexReference: "D",
      focalLengthMm: -92.38,
      glass: "Unmatched (flint, nD 1.6182 / V 36.4)",
      role: "Flint cemented to lens I; corrects the front pair's colour and spherical aberration",
      cemented: "C1"
    },
    {
      id: 3,
      name: "III",
      label: "Element III",
      diagramLabel: "III",
      type: "Negative Meniscus",
      nd: 1.6182,
      vd: 36.4,
      indexReference: "D",
      focalLengthMm: -201.14,
      glass: "Unmatched (flint, nD 1.6182 / V 36.4)",
      role: "Strong flint meniscus of the rear pair; achromatizes it and, with the following air space, flattens the field"
    },
    {
      id: 4,
      name: "IV",
      label: "Element IV",
      diagramLabel: "IV",
      type: "Plano-Convex Positive",
      nd: 1.516,
      vd: 63.8,
      indexReference: "D",
      focalLengthMm: 110.68,
      glass: "Unmatched (crown, nD 1.5160 / V 63.8)",
      role: "Positive crown of the rear pair, plano face toward the film"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 57.111,
      d: 10.798,
      sd: 23,
      medium: 1
    },
    {
      label: "2",
      R: -57.111,
      d: 4.515,
      sd: 23,
      medium: 2
    },
    {
      label: "3",
      R: "flat",
      d: 14.047,
      sd: 23
    },
    {
      label: "STO",
      R: "flat",
      d: 14.047
    },
    {
      label: "4",
      R: 57.111,
      d: 3.141,
      sd: 23,
      medium: 3
    },
    {
      label: "5",
      R: 38.314,
      d: 5.595,
      sd: 23
    },
    {
      label: "6",
      R: 57.111,
      d: 6.086,
      sd: 23,
      medium: 4
    },
    {
      label: "7",
      R: "flat",
      d: 61.62195513337301,
      sd: 23
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data. Light enters from the screen side and focuses on the film plane."
  },
  aperture: {
    nominalFNumber: 2.2,
    fStops: [2.2]
  },
  projection: { kind: "rectilinear", fullFieldDeg: 16, maxTraceFieldDeg: 8 },
  groups: [
    {
      text: "FRONT",
      fromSurface: "1",
      toSurface: "3"
    },
    {
      text: "REAR",
      fromSurface: "4",
      toSurface: "7"
    }
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3"
    }
  ],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
