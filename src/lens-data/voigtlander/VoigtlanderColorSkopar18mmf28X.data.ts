import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP 2025-044411 A (Cosina Co., Ltd.; Tatsuya Moriyama), Embodiment 3 (Tables 9–12, Fig. 5): f = 18.54 mm,
 * Fno 2.82, ω = 37.95°, 7 elements / 5 groups, both faces of the last element aspherical. No scale factor is
 * applied. R, d, nd, νd, K and A4–A14 follow the printed tables without alteration; the asphere equation (¶0044,
 * reused by ¶0084) is the standard 1 + K form, and both K are 0. A14 is printed as zero; no higher terms are printed.
 * Probable production correlation with the COLOR-SKOPAR 18mm F2.8 Aspherical X-mount (2024; Cosina: 7/5, one
 * anomalous-partial-dispersion element, a double-sided asphere, 0.17 m, 1:6.6); not a factory prescription.
 * Embodiment 1 (the patent's representative figure) has the same layout but prints its L1 nd 1.78749 beside νd 70.32,
 * a one-digit misprint of 1.48749; Embodiment 3 needs no correction and is used instead. Elements carry Embodiment
 * 3's own designations L16–L22 (Fig. 5, ¶0071–¶0075); cemented brackets are C1 and C2, as D labels name spacings.
 * Image plane: the printed back focus D13 = 18.81 mm is kept, 0.004 mm short of the paraxial 18.814 mm. The
 * resulting 41.02 mm track and 13.03 mm G2 length differ from the printed 41.03 and 13.04 mm by rounding. The
 * printed G1 focal length 1107.30 mm computes as 1113.9 mm (a very weak group, sensitive to last-digit rounding);
 * f, f2 = 19.57 and f23 = 33.01 mm reproduce.
 * Focus: unit focus (¶0026, claim 7). Table 11 prints D0 = 125.20 mm and D13 = 21.62 mm at the shortest distance.
 * The stop sits where Table 10 prints it (2.30 mm behind surface 4, 1.68 mm ahead of surface 6); its radius follows
 * from F/2.82. Semi-diameters are not printed. They are estimated from Fig. 5, which is drawn to scale (59.84 px/mm
 * at 600 dpi from the S1–S13 vertex span, confirmed on the S4, stop, S8 and S11 vertices and on the S1, S2 and S9
 * arcs). L16 (7.2 mm) and L17 (5.9 mm) follow the drawn square edges. Fig. 5 ends the concave caps of S2 and S9 at a
 * flat land: S2 at 0.83 of L16's edge, S9 at 0.81 of L20's edge. The cuts sit just outside the wide-open beams (S2
 * depth 2.46 mm, cut radius 6.03 mm; S9 depth 1.35 mm, cut radius 4.66 mm, with S9's edge equal to S10's). G2A (4.0
 * mm), G2B (S10 5.3, S11 6.1 mm) and L22 (7.2 mm) stay 7–14 % above the drawing (3.7, 4.7, 5.4 and 6.7 mm): the drawn
 * rims would cost 7–17 points of corner illumination.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-color-skopar-18mm-f28-x",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 18mm f/2.8 Aspherical X-Mount",
  subtitle: "JP 2025-044411 A, Embodiment 3 — probable production correlation",
  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    elementCount: 7,
    groupCount: 5,
    closeFocusM: {
      marketing: 0.17,
    },
    focalLengthMm: {
      marketing: 18,
      design: 18.54,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.82,
    },
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "DESIGN f = 18.54 mm",
      "DESIGN F/2.82",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "UNIT FOCUS; 1:6.6 MAX",
    ],
  },
  source: {
    patentNumber: "JP 2025-044411 A",
    example: {
      label: "Embodiment 3",
      id: "3",
    },
    patentYear: 2025,
    authors: ["Tatsuya Moriyama"],
    assignees: ["Cosina Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L16",
      label: "Element 1",
      diagramLabel: "L16",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      glass: "J-FK5 (HIKARI catalog equivalent; production supplier unspecified)",
      focalLengthMm: -33.455852427497796,
      role: "Front negative meniscus, convex to the object; with L17 it forms the weakly positive first group G1.",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks the front element as anomalous partial dispersion glass; the patent's nd 1.48749 / νd 70.32 is an FK5-type fluor crown consistent with that marking (catalog PgF 0.5291, about +0.004 above the normal line).",
    },
    {
      id: 2,
      name: "L17",
      label: "Element 2",
      diagramLabel: "L17",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 34.10029049690241,
      role: "High-index positive element ahead of the stop; meets the patent's nd > 1.9 condition for G1 (¶0085).",
    },
    {
      id: 3,
      name: "L18",
      label: "Element 3",
      diagramLabel: "L18",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      glass: "E-FD1L (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -7.353575209130201,
      role: "Negative front member of the cemented doublet G2A just behind the stop; corrects color and field curvature with L19 (¶0073).",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L19",
      label: "Element 4",
      diagramLabel: "L19",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      indexReference: "d",
      glass: "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 6.134531710703466,
      role: "Strong positive member of G2A; its index above L18's limits astigmatism without raising the Petzval sum (¶0086).",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L20",
      label: "Element 5",
      diagramLabel: "L20",
      type: "Positive Meniscus",
      nd: 1.90043,
      vd: 37.37,
      indexReference: "d",
      glass: "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 20.790806786372045,
      role: "Positive meniscus, concave to the object, front member of the cemented doublet G2B (nd > 1.9, ¶0087).",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      diagramLabel: "L21",
      type: "Negative Meniscus",
      nd: 1.80517,
      vd: 25.45,
      indexReference: "d",
      glass: "J-SF6 (HIKARI catalog equivalent; production supplier unspecified)",
      focalLengthMm: -18.691603451609723,
      role: "Dense-flint negative meniscus cemented behind L20; makes G2B a weakly negative, concave-forward corrector.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7",
      diagramLabel: "L22",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58312,
      vd: 59.38,
      indexReference: "d",
      glass: "L-BAL42 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 33.01262890114499,
      role: "Rear positive singlet G2C with both faces aspherical; controls off-axis aberrations while keeping the back focus short (¶0006, ¶0075).",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 18.918,
      d: 0.9,
      medium: 1,
      sd: 7.2,
    },
    {
      label: "2",
      R: 8.622,
      d: 2.09,
      sd: 7.2,
      rimCutDepthMm: 2.46,
    },
    {
      label: "3",
      R: 37.431,
      d: 2.21,
      medium: 2,
      sd: 5.9,
    },
    {
      label: "4",
      R: -376.128,
      d: 2.3,
      sd: 5.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.68,
    },
    {
      label: "6",
      R: -21.638,
      d: 0.9,
      medium: 3,
      sd: 4.0,
    },
    {
      label: "7",
      R: 7.097,
      d: 3.2,
      medium: 4,
      sd: 4.0,
    },
    {
      label: "8",
      R: -19.594,
      d: 2.71,
      sd: 4.0,
    },
    {
      label: "9",
      R: -8.713,
      d: 2.67,
      medium: 5,
      sd: 5.3,
      rimCutDepthMm: 1.35,
    },
    {
      label: "10",
      R: -6.809,
      d: 0.9,
      medium: 6,
      sd: 5.3,
    },
    {
      label: "11",
      R: -13.168,
      d: 0.3,
      sd: 6.1,
    },
    {
      label: "12",
      R: 2000.0,
      d: 2.35,
      medium: 7,
      sd: 7.2,
      asphere: {
        K: 0.0,
        A4: 0.00016859,
        A6: 3.1747e-7,
        A8: 3.0728e-8,
        A10: -1.6178e-9,
        A12: 1.0931e-11,
        A14: 0.0,
      },
    },
    {
      label: "13",
      R: -19.429,
      sd: 7.2,
      asphere: {
        K: 0.0,
        A4: 0.000278,
        A6: -1.168e-6,
        A8: 1.4406e-7,
        A10: -3.3323e-9,
        A12: 1.9861e-11,
        A14: 0.0,
      },
    },
  ],
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "G2",
      fromSurface: "6",
      toSurface: "13",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "C2",
      fromSurface: "9",
      toSurface: "11",
    },
  ],
  focus: {
    closeFocusM: 0.16903,
    description:
      "PUBLISHED unit focus: the complete optical assembly moves 2.81 mm toward the object (¶0026). D13 changes from 18.81 mm at infinity to 21.62 mm at the printed shortest distance, where the object lies 125.20 mm in front of surface 1 (0.169 m object to image, 1:6.6). All internal spacings stay fixed. Cosina specifies 0.17 m and 1:6.6.",
    published: [1],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 125.2,
        distanceReference: "first-surface",
        source:
          "JP 2025-044411 A, Embodiment 3, Table 11: D0 = 125.20 mm (object to surface 1) and D13 = 21.62 mm at the shortest photographing distance.",
      },
    ],
  },
  gaps: {
    "13": { label: "D13", values: [[18.81, 21.62]] },
  },
  aperture: {
    nominalFNumber: 2.82,
    fStops: [2.82, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 10,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 75.9,
    maxTraceFieldDeg: 37.95,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
