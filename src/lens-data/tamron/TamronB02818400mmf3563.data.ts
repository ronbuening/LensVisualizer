import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — TAMRON 18-400mm f/3.5-6.3 Di II VC HLD (B028)                                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: JP 2017-116646 A, Example 1 (Tamron Co., Ltd.; inventor Dayong Li).                    ║
 * ║  Production correlation: Tamron Model B028; official product data gives 18-400mm, APS-C, 16 elements      ║
 * ║  in 11 groups, Canon EF + Nikon F, MOD 0.45 m, VC, and 7 diaphragm blades. The patent-to-product match   ║
 * ║  is an author/modeling inference rather than an Example 1 product-name statement.                          ║
 * ║                                                                                                            ║
 * ║  Prescription model: 16 physical lenses / 11 air-separated optical units / 5 moving zoom groups.          ║
 * ║  The 0.1600 mm nd=1.51460 layer ahead of the first G2 substrate is retained as a separate modeled medium, ║
 * ║  so `elements` has 17 modeled entries while `elementCount` remains the patent physical count of 16.        ║
 * ║  Four aspherical surfaces: source NS6, NS23, NS26, and NS27.                                               ║
 * ║                                                                                                            ║
 * ║  Source normalizations:                                                                                   ║
 * ║    - Source NS10/NS11 are coincident R=+18.8700 surfaces with D10=0; they are collapsed to one direct      ║
 * ║      cemented transition labeled "10", preserving axial position and first-order behavior.                ║
 * ║    - Source NS31 is an inactive flat air/air rear reference. The printed fixed D30=37.4800 conflicts with  ║
 * ║      paraxial focus; source D(31) alone reproduces BFL. The model therefore omits NS31 and maps D(31) to   ║
 * ║      the final active surface label "30" as the image-space rear spacing.                                  ║
 * ║                                                                                                            ║
 * ║  Zoom states: source Table 3 values at 18.5105 / 85.0242 / 389.00 mm.                                     ║
 * ║  Zoom variable gaps: D(5), D(14), D(22), D(25), and source D(31)->model surface 30.                        ║
 * ║  D(22) is non-monotonic as an inter-group gap; no group-front reversal occurs across the three states.    ║
 * ║                                                                                                            ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G2 alone focuses but publishes no       ║
 * ║  close-focus spacing table. Close rows are code-solved at the production 0.45 m sensor-to-subject MOD,    ║
 * ║  moving only G2 and conserving D(5)+D(14) at each zoom state.                                              ║
 * ║                                                                                                            ║
 * ║  Stop: the patent publishes position but not radius. The stop radius is derived from the design f-number   ║
 * ║  and held at every zoom station. The prior common inferred stop gave modeled f-numbers 3.405871000387 /    ║
 * ║  5.605121129351 / 6.482831860675. These modeled f-numbers, not the marketed f/3.5-6.3 values, are used for ║
 * ║  `nominalFno`.                                                                                             ║
 * ║                                                                                                            ║
 * ║  Semi-diameters: not patent-published. They are inferred from the common stop, on-axis marginal-ray       ║
 * ║  envelopes at all infinity/close states, representative 0.6-field off-axis bundles, Fig. 1 proportions,   ║
 * ║  and the production 72 mm filter / 79 mm barrel envelope. The G2 profile is enlarged to follow Fig. 1,     ║
 * ║  with the thin front composite capped at 14.0 mm by its validated edge geometry. Values were then          ║
 * ║  constrained by edge thickness,                                                                            ║
 * ║  actual aspheric/spherical rim slope, conic limits, shared-band cross-gap intrusion, and off-axis clipping.║
 * ║  The only representative off-axis clipping found is the extreme tele bundle at the first optical surface.║
 * ║                                                                                                            ║
 * ║  Glass labels are neutral six-digit nd/vd coordinate classes because the patent does not identify vendors.║
 * ║  The thin aspheric layer remains explicitly Unmatched. No nC/nF/ng/dPgF values are authored because the   ║
 * ║  source does not publish per-element line indices or partial-dispersion data. No uniform scaling applied.  ║
 * ║                                                                                                            ║
 * ║  Manufacturer sources:                                                                                   ║
 * ║    https://www.tamron.com/global/consumer/lenses/b028/                                                    ║
 * ║    https://www.tamron.com/global/consumer/lenses/b028/spec.html                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "tamron-b028-18-400-f35-63",
  maker: "Tamron",
  name: "TAMRON 18-400mm f/3.5-6.3 Di II VC HLD",
  subtitle: "JP 2017-116646 A Example 1 — inferred production correlation to Model B028",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f"],
    imageFormat: "aps-c",
    specs: [
      "16 ELEMENTS / 11 GROUPS",
      "18-400mm MARKETING / 18.5105-389.00mm PATENT",
      "MODELED F/3.4059-6.4828",
      "4 ASPHERICAL SURFACES",
      "G2 INNER FOCUS / G4 VC",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [18, 400], design: [18.510468623219342, 388.66240937787467] },
    fNumber: { marketing: 3.5, design: 3.4058710003870507 },
  },

  source: {
    patentNumber: "JP 2017-116646 A",
    patentYear: 2017,
    authors: ["Dayong Li"],
    assignees: ["Tamron Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: -176.38135818299034,
      glass: "911353 coordinate class",
      apd: false,
      role: "G1 negative meniscus; cemented to L2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 137.914760721417,
      glass: "497816 coordinate class",
      apd: false,
      role: "G1 positive crown; cemented to L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.49,
      focalLengthMm: 160.34322018478858,
      glass: "550755 coordinate class",
      apd: false,
      role: "G1 positive rear element.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4 thin layer",
      type: "Thin Aspheric Layer (1x Asph)",
      nd: 1.5146,
      vd: 49.96,
      focalLengthMm: -947.9589993567984,
      glass: "Unmatched (thin aspheric layer; patent nd=1.51460, vd=49.96)",
      apd: false,
      role: "Modeled object-side layer of physical G2 lens L4; material not identified by the patent.",
      diagramLabel: "4a",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 4 substrate",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: -23.12316707769099,
      glass: "911353 coordinate class",
      apd: false,
      role: "High-index substrate of the composite G2 first negative lens; composite net f=-22.568686 mm.",
      diagramLabel: "4",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.39,
      focalLengthMm: -22.16668448081056,
      glass: "618634 coordinate class",
      apd: false,
      role: "G2 negative element; cemented to L6 after collapsing the zero-thickness source split.",
      diagramLabel: "5",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 18.851266256664587,
      glass: "847238 coordinate class",
      apd: false,
      role: "G2 positive element; cemented to L5.",
      diagramLabel: "6",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.881,
      vd: 40.14,
      focalLengthMm: -38.69461575063272,
      glass: "881401 coordinate class",
      apd: false,
      role: "Rear negative meniscus of the G2 focusing group.",
      diagramLabel: "7",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 61.24266514830641,
      glass: "517642 coordinate class",
      apd: false,
      role: "Front positive element of G3 immediately behind the moving stop.",
      diagramLabel: "8",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 55.872949690835,
      glass: "497816 coordinate class",
      apd: false,
      role: "Second positive element of G3.",
      diagramLabel: "9",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 35.43059446957348,
      glass: "487704 coordinate class",
      apd: false,
      role: "Positive component of the rear G3 cemented pair.",
      diagramLabel: "10",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -51.620673306737395,
      glass: "847238 coordinate class",
      apd: false,
      role: "Negative component of the rear G3 cemented pair.",
      diagramLabel: "11",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative (1x Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -17.314281449763268,
      glass: "851401 coordinate class",
      apd: false,
      role: "Negative front component of the G4 transverse VC group.",
      diagramLabel: "12",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 35.4362585566573,
      glass: "808228 coordinate class",
      apd: false,
      role: "Positive rear component of the G4 transverse VC group.",
      diagramLabel: "13",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.59201,
      vd: 67.02,
      focalLengthMm: 37.480223179454306,
      glass: "592670 coordinate class",
      apd: false,
      role: "Front positive element of G5; both surfaces are aspherical.",
      diagramLabel: "14",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: -17.670212833938535,
      glass: "911353 coordinate class",
      apd: false,
      role: "Negative component of the rear G5 cemented pair.",
      diagramLabel: "15",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: 23.035978496830207,
      glass: "603380 coordinate class",
      apd: false,
      role: "Positive rear component of the rear G5 cemented pair.",
      diagramLabel: "16",
      cemented: "D5",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 162.9, d: 1.2, sd: 32.5, medium: 1 },
    { label: "2", R: 80.6, d: 8.6, sd: 32.5, medium: 2 },
    { label: "3", R: -442, d: 0.15, sd: 32.5 },
    { label: "4", R: 75.86, d: 6.6, sd: 31, medium: 3 },
    { label: "5", R: 524, sd: 31 },

    {
      label: "6A",
      R: 127.281,
      d: 0.16,
      sd: 14,
      medium: 4,
      asphere: { K: -95, A4: 1.23678e-5, A6: -1.16542e-8, A8: -1.13405e-10, A10: 7.30168e-13, A12: -1.27023e-15, A14: 0 },
    },
    { label: "7", R: 100.9, d: 0.9, sd: 14, medium: 5 },
    { label: "8", R: 17.35, d: 6.2191, sd: 14 },
    { label: "9", R: -50.8, d: 0.8, sd: 11.3, medium: 6 },
    { label: "10", R: 18.87, d: 5.53, sd: 11.3, medium: 7 },
    { label: "12", R: -89.61, d: 1.7168, sd: 11.3 },
    { label: "13", R: -25.5, d: 0.7, sd: 9.6, medium: 8 },
    { label: "14", R: -102.5, sd: 9.6 },

    { label: "STO", R: "flat", d: 1.2 },

    { label: "16", R: 140, d: 2.97, sd: 10.6, medium: 9 },
    { label: "17", R: -40.6, d: 0.15, sd: 10.6 },
    { label: "18", R: 44.65, d: 3.2, sd: 10.8, medium: 10 },
    { label: "19", R: -71.7, d: 0.15, sd: 10.8 },
    { label: "20", R: 30.55, d: 4.55, sd: 10.5, medium: 11 },
    { label: "21", R: -37.8, d: 0.7, sd: 10.5, medium: 12 },
    { label: "22", R: -282.14, sd: 10.5 },

    {
      label: "23A",
      R: -52.0988,
      d: 0.9,
      sd: 8.6,
      medium: 13,
      asphere: { K: 0.6893, A4: 8.42359e-6, A6: 4.45558e-9, A8: 2.18109e-10, A10: -4.42521e-12, A12: 2.61402e-14, A14: 0 },
    },
    { label: "24", R: 20.72, d: 2.88, sd: 8.6, medium: 14 },
    { label: "25", R: 70.3, sd: 8.6 },

    {
      label: "26A",
      R: 48.7858,
      d: 3.83,
      sd: 10.2,
      medium: 15,
      asphere: { K: 2.5416, A4: 2.18061e-6, A6: -1.04542e-7, A8: 1.57166e-10, A10: 1.35803e-11, A12: -1.33982e-13, A14: 0 },
    },
    {
      label: "27A",
      R: -39.5114,
      d: 0.15,
      sd: 10.2,
      asphere: { K: -16.8612, A4: -2.12029e-5, A6: 5.01726e-8, A8: -7.40334e-10, A10: 1.65997e-11, A12: -1.34975e-13, A14: 0 },
    },
    { label: "28", R: -165, d: 0.7, sd: 10.2, medium: 16 },
    { label: "29", R: 17.87, d: 5.9, sd: 10.2, medium: 17 },
    { label: "30", R: -54.8, sd: 10.2 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom + focus variable spacings ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 18.5105, nominalFNumber: 3.4058710003870507, label: "Wide" },
      { focalLengthMm: 85.0242, nominalFNumber: 5.605121129350794 },
      { focalLengthMm: 389, nominalFNumber: 6.482831860675359, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "CONSTRAINED_RECONSTRUCTION: JP 2017-116646 A states that G2 alone focuses. Close-focus rows are code-solved at the Tamron production MOD of 0.45 m measured subject-to-image plane, translating only G2 objectward and conserving D(5)+D(14) at each published zoom state.",
  },

  gaps: {
    "5": {
      label: "D(5)",
      values: [
        [1.8561, 0.8352267970992939],
        [44.0188, 41.559745360642445],
        [88.6992, 76.24981799226808],
      ],
    },
    "14": {
      label: "D(14)",
      values: [
        [38.5961, 39.61697320290071],
        [12.5485, 15.007554639357554],
        [1.3, 13.749382007731931],
      ],
    },
    "22": {
      label: "D(22)",
      values: [
        [1.7808, 1.7808],
        [7.3487, 7.3487],
        [6.9699, 6.9699],
      ],
    },
    "25": {
      label: "D(25)",
      values: [
        [20.9363, 20.9363],
        [4.2715, 4.2715],
        [1.1, 1.1],
      ],
    },
    "30": {
      label: "D(31) / BF",
      values: [
        [39.7621, 39.7621],
        [83.4278, 83.4278],
        [99.8643, 99.8643],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 6.3, 8, 11, 16, 22, 32, 40], maxFNumber: 40, blades: 7 },

  /* ── Group and cemented-unit annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "14" },
    { text: "G3", fromSurface: "16", toSurface: "22" },
    { text: "G4", fromSurface: "23A", toSurface: "25" },
    { text: "G5", fromSurface: "26A", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "9", toSurface: "12" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "23A", toSurface: "25" },
    { text: "D5", fromSurface: "28", toSurface: "30" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
