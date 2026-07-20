import type { LensDataInput } from "../../types/optics.js";

/**
 * Olympus M.Zuiko Digital ED 12mm f/2.0
 * Data source: US 8,248,716 B2, Numerical Example 1 (Olympus Imaging Corp.).
 * Patent prescription: 11 elements / 9 air-spaced patent groups, four aspherical surfaces.
 * Production reconciliation: Olympus publishes 11 elements / 8 groups; the patent has a 0.189 mm
 * air gap between L6 and L7 that likely accounts for the counting mismatch.
 * Focus: rear internal focus; only L11 / LRF moves. Variable gaps are surface 19A and BF at 21.
 *
 * R21 note: the rendered patent page reads -1000.000 mm. The OCR stream can collapse this
 * to a misleading -1000000-like value; -1000000 mm fails the patent EFL/BFD check.
 *
 * Focus table note: the printed IO = 20 cm focus spacings are transcribed exactly. Their sum
 * is 0.1012 mm longer than the infinity L1 + L2 sum, so focus interpolation is not forced
 * to conserve total track.
 *
 * Semi-diameters are not patent-published. They were estimated from the paraxial marginal ray,
 * a 0.6-field chief/marginal bundle, and the patent figure, then reduced to satisfy renderer
 * constraints: sd/|R| < 0.90, element front/rear SD ratio <= 1.25, positive edge thickness,
 * and signed cross-gap sag intrusion <= 90% of the intervening air gap.
 */

const LENS_DATA = {
  key: "olympus-mzuiko-12mm-f2",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 12mm f/2.0",
  subtitle: "US 8,248,716 B2 Example 1 — Olympus Imaging Corp.",
  specs: [
    "11 elements / 8 production groups (9 patent groups)",
    "f = 12.187 mm design",
    "F/2.051 design / f/2.0 nominal",
    "84° corrected field",
    "4 aspherical surfaces",
  ],

  focalLengthMarketing: 12,
  focalLengthDesign: 12.1874115,
  apertureMarketing: 2.0,
  apertureDesign: 2.051,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "US 8,248,716 B2",
  patentAuthors: ["Kazuteru Kawamura", "Keitaro Yokoyama"],
  patentAssignees: ["Olympus Imaging Corporation"],
  patentYear: 2012,
  elementCount: 11,
  groupCount: 9,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 84,
    maxTraceFieldDeg: 42,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Ln1",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.2,
      fl: -32.062,
      glass: "S-LAH51 (OHARA)",
      role: "Fixed front negative meniscus; first member of the leading negative pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Ln2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.6779,
      vd: 55.34,
      fl: -34.001,
      glass: "S-LAL12 (OHARA)",
      role: "Second negative meniscus; both surfaces are aspherical for astigmatism, coma, and distortion control.",
    },
    {
      id: 3,
      name: "L3",
      label: "Front collector",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 32.163,
      glass: "S-LAH58 (OHARA)",
      role: "High-index positive collector after the leading negative pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Front doublet negative",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.23,
      fl: -18.61,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion negative member of the front cemented doublet; ED-class chromatic correction element.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Front doublet positive",
      type: "Positive Meniscus",
      nd: 1.72151,
      vd: 29.23,
      fl: 22.191,
      glass: "S-TIH18 (OHARA)",
      role: "High-dispersion positive partner in the inverted front achromat.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Front flint meniscus",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.52,
      fl: -33.749,
      glass: "S-TIH14 (OHARA)",
      role: "Dense-flint negative meniscus preceding the strongest front-group positive element.",
    },
    {
      id: 7,
      name: "L7",
      label: "Front positive collector",
      type: "Biconvex Positive",
      nd: 1.697,
      vd: 48.52,
      fl: 13.871,
      glass: "S-LAM59 (OHARA)",
      role: "Strong front-group positive collector; exact 697/485 Ohara match, although the catalog line is non-recommended.",
    },
    {
      id: 8,
      name: "L8",
      label: "Rear doublet negative",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.42,
      fl: -8.374,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint negative member of the rear achromat just behind the stop.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Rear doublet positive",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 19.232,
      glass: "S-LAH58 (OHARA)",
      role: "High-index positive member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Rear aspherical positive",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7432,
      vd: 49.34,
      fl: 15.95,
      glass: "S-LAM60 (OHARA)",
      role: "Dual-surface rear asphere in LR1; principal field-curvature and residual-distortion corrector.",
    },
    {
      id: 11,
      name: "L11",
      label: "LRF focus element",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      fl: 48.15,
      glass: "S-NSL36 (OHARA)",
      role: "Single positive rear focus element; the only moving optical group during focusing.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 33.689, d: 1.75, nd: 1.7859, elemId: 1, sd: 10.4 },
    { label: "2", R: 14.086, d: 2.476, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "3A", R: 17.166, d: 1.7, nd: 1.6779, elemId: 2, sd: 8.3 },
    { label: "4A", R: 9.445, d: 4.947, nd: 1.0, elemId: 0, sd: 8.1 },
    { label: "5", R: 92.675, d: 2.74, nd: 1.883, elemId: 3, sd: 7.7 },
    { label: "6", R: -40.381, d: 0.635, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "7", R: -27.836, d: 1.2, nd: 1.48749, elemId: 4, sd: 7.4 },
    { label: "8", R: 13.649, d: 3.437, nd: 1.72151, elemId: 5, sd: 7.3 },
    { label: "9", R: 82.751, d: 1.645, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "10", R: 52.005, d: 0.9, nd: 1.76182, elemId: 6, sd: 6.5 },
    { label: "11", R: 17.076, d: 0.189, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "12", R: 12.054, d: 3.382, nd: 1.697, elemId: 7, sd: 6.5 },
    { label: "13", R: -43.211, d: 1.134, nd: 1.0, elemId: 0, sd: 5.8 },
    { label: "STO", R: 1e15, d: 4.73, nd: 1.0, elemId: 0, sd: 4.564608 },
    { label: "15", R: -8.981, d: 0.8, nd: 1.80518, elemId: 8, sd: 6.1 },
    { label: "16", R: 28.124, d: 2.284, nd: 1.883, elemId: 9, sd: 6.4 },
    { label: "17", R: -41.231, d: 0.15, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "18A", R: 56.295, d: 4.921, nd: 1.7432, elemId: 10, sd: 8.4 },
    { label: "19A", R: -14.456, d: 3.0348, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "20", R: 25.519, d: 3.571, nd: 1.51742, elemId: 11, sd: 8.7 },
    { label: "21", R: -1000.0, d: 15.0407, nd: 1.0, elemId: 0, sd: 8.5 },
  ],

  nominalFno: 2.0,
  closeFocusM: 0.2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,
  yScFill: 0.58,
  scFill: 0.62,

  focusDescription:
    "Rear internal focus: only L11 / LRF moves toward the object at close focus. The gap after 19A contracts while the back-focus gap after 21 increases.",

  asph: {
    "3A": {
      K: -0.5882,
      A4: -3.2612e-5,
      A6: 1.3916e-7,
      A8: -1.3823e-9,
      A10: 6.9311e-12,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: -0.2345,
      A4: -1.0137e-4,
      A6: -1.7688e-7,
      A8: -1.1612e-8,
      A10: 1.2299e-10,
      A12: -8.6949e-13,
      A14: 0,
    },
    "18A": {
      K: -38.907,
      A4: 7.1773e-5,
      A6: 1.7227e-6,
      A8: -1.3823e-9,
      A10: 6.9311e-12,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: -2.6656,
      A4: 6.5273e-7,
      A6: 1.7649e-6,
      A8: 2.562e-9,
      A10: 1.6732e-10,
      A12: 6.6546e-13,
      A14: 0,
    },
  },

  var: {
    "19A": [3.0348, 1.4977],
    "21": [15.0407, 16.679],
  },
  varLabels: [
    ["19A", "LRF gap"],
    ["21", "BF"],
  ],

  groups: [
    { text: "LF", fromSurface: "1", toSurface: "13" },
    { text: "LR1", fromSurface: "15", toSurface: "19A" },
    { text: "LRF", fromSurface: "20", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
