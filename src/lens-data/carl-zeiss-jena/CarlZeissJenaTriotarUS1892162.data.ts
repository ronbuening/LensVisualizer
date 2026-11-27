import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,892,162 A, sole numerical example (drawing sheet and specification p. 2, which print the same table). Robert
 * Richter, assignor to the firm Carl Zeiss, Jena. Filed 12 May 1931 with German priority of 27 May 1930; granted
 * 27 December 1932. The patent states a maximum aperture of 1:4.5 and a focal length of 100 mm for a hand-camera
 * objective that covers a picture diagonal about equal to the focal length. Three air-spaced singlets: a plano-convex
 * front lens, a biconcave middle lens and a biconvex rear lens, named I, II and III as in the patent's figure and
 * text. Marco Cavina reproduces this patent as the Carl Zeiss Jena Triotar 1:4.5 (Robert Richter, May 1930); the link
 * is to the Triotar design family, not to one marketed focal length.
 *
 * SCALE: none. Radii, thicknesses and spacings are as printed in millimetres, with the printed signs; the paraxial EFL
 * of the printed table is 100.0004 mm.
 *
 * GLASS: the patent prints nD and ν for each lens. They are stored as printed with indexReference "D" (sodium D line).
 * The patent names no glass types. Lens I matches Schott N-SK10 and lens II the F3 type (Sumita F3 row) within the
 * printed precision at the D line, so both trace on those catalog curves. Lens III (nD 1.6423, ν 48.0) matches no
 * catalog row; its dispersion comes from the printed ν.
 *
 * STOP (inferred): neither the drawing nor the text shows a diaphragm. The iris is placed midway in the 10 mm air space
 * between the middle and rear lenses, 5 mm behind r4, where the between-lens shutter of a hand camera would sit. Its
 * radius is derived from the stated f/4.5.
 *
 * SEMI-DIAMETERS: half the printed lens diameters (D_I = 23.4, D_II = 20.8, D_III = 20.0 mm), on both faces of each
 * lens. The f/4.5 axial beam clears every rim. The drawing is to scale (15.75 px/mm at 300 dpi; front-to-rear vertex
 * and r1-to-r4 spans within 0.5 % of the table) and draws all three lenses within 3 % of these heights.
 *
 * IMAGE CIRCLE: 100 mm, from the patent's statement that the objective covers a picture whose diagonal is about equal
 * to the focal length. The chief ray to that corner (about 26.6°) clears every rim.
 *
 * IMAGE PLANE (computed): the patent prints no back focus. The last spacing is the paraxial back focus of the printed
 * table, 82.234 mm.
 *
 * FOCUS: the patent gives only the infinity state; closeFocusM = 1e15 marks focus as not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-triotar-100mm-f45-us1892162",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TRIOTAR 100mm f/4.5 (US 1,892,162 Design)",
  subtitle: "US 1,892,162 A, sole example — Zeiss Triotar f/4.5 family",
  visible: true,
  catalog: {
    specs: [
      "3 ELEMENTS / 3 GROUPS",
      "DESIGN F/4.5",
      "ALL SPHERICAL",
    ],
    elementCount: 3,
    groupCount: 3,
    imageCircleMm: 100,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 4.5,
    },
  },
  source: {
    patentNumber: "US 1,892,162 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1932,
    authors: ["Robert Richter"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "source-table",
  },
  elements: [
    {
      id: 1,
      name: "I",
      label: "Element I",
      diagramLabel: "I",
      type: "Plano-Convex Positive",
      nd: 1.6227,
      vd: 56.9,
      indexReference: "D",
      glass: "N-SK10 (Schott)",
      focalLengthMm: 37.34,
      role: "Front collector; carries most of the positive power, with a flat rear face",
    },
    {
      id: 2,
      name: "II",
      label: "Element II",
      diagramLabel: "II",
      type: "Biconcave Negative",
      nd: 1.6128,
      vd: 37.0,
      indexReference: "D",
      glass: "F3 (Sumita)",
      focalLengthMm: -28.75,
      role: "Flint negative element between the collectors; corrects colour and the Petzval sum",
    },
    {
      id: 3,
      name: "III",
      label: "Element III",
      diagramLabel: "III",
      type: "Biconvex Positive",
      nd: 1.6423,
      vd: 48.0,
      indexReference: "D",
      glass: "Unmatched (nD 1.6423 / V 48.0)",
      focalLengthMm: 72.49,
      role: "Weak high-index rear collector; nearly all its power is at the rear face",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 23.25,
      d: 4.5,
      sd: 11.7,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 3.7,
      sd: 11.7,
    },
    {
      label: "3",
      R: -78.6,
      d: 1.3,
      sd: 10.4,
      medium: 2,
    },
    {
      label: "4",
      R: 22.85,
      d: 5,
      sd: 10.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 5,
    },
    {
      label: "5",
      R: 205,
      d: 2.5,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -59.96,
      d: 82.23402737346156,
      sd: 10,
    },
  ],
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
