import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF-S 18–135mm f/3.5–5.6 IS STM                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2013/0088622 A1, Numerical Example 4 (Shigenobu Sugita / Canon).   ║
 * ║ Native patent scale retained: no production-focal-length scaling is applied.       ║
 * ║ Active model excludes patent surface 1, explicitly identified as a design dummy.   ║
 * ║ Published total lengths are consistent to source rounding with that 1.50 mm dummy  ║
 * ║ interval included; source totals are audit metadata, not the modeled active track.  ║
 * ║                                                                                      ║
 * ║ 16 physical elements / 11 air-separated construction groups / 6 moving zoom units. ║
 * ║ Power sequence by moving unit: P–N–P–N–P–P. One aspherical surface (patent s27).   ║
 * ║ Production metadata reports 16 elements / 12 groups; that mismatch is not altered. ║
 * ║                                                                                      ║
 * ║ Zoom positions and infinity gaps are patent-published. L2 reverses direction over  ║
 * ║ wide→middle→tele; L3 and L5 have identical zoom travel.                            ║
 * ║                                                                                      ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes no close-focus gap  ║
 * ║ table for Example 4. Close-focus states at 0.39 m are code-solved with L4 as the    ║
 * ║ only axial focusing unit, moving objectward while d15+d17 remains constant at each  ║
 * ║ zoom position. This is a modeled reconstruction, not a patent-published state.      ║
 * ║                                                                                      ║
 * ║ Refracting-surface semi-diameters are one-half of the patent effective diameters.    ║
 * ║ The Numerical Example 4 patent surface table prints 14.52 mm at s20; its 7.26 mm     ║
 * ║ half-diameter, traced with a real marginal ray, gives F/3.591, 4.879 and 5.973 at    ║
 * ║ the three stations, which round to the published F/3.59, 4.88 and 5.97. The viewer   ║
 * ║ holds one iris, sized from the wide-state F/3.59 (7.2618 mm), at every station. One  ║
 * ║ exception to the halved diameters:                                                   ║
 * ║   • patent s9 is trimmed from 11.3000 to 11.2826 mm to satisfy the current 0.90      ║
 * ║     shared-gap sag criterion. This is a model trim, not a source correction.         ║
 * ║                                                                                      ║
 * ║ Glasses remain six-digit coordinate/class labels. The patent does not identify      ║
 * ║ suppliers or publish per-element nC, nF, ng, or dPgF, so those stronger spectral    ║
 * ║ fields are intentionally not invented from catalog candidates.                      ║
 * ║                                                                                      ║
 * ║ Patent ¶0093 prints a spherical-base sag equation; its table separately gives K=0. ║
 * ║ Project K=0 is numerically identical, so no conic conversion changes the surface.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-s-18-135mm-f35-56-is-stm",
  maker: "Canon",
  name: "CANON EF-S 18-135mm f/3.5-5.6 IS STM",
  subtitle: "US 2013/0088622 A1 — Numerical Example 4; production correlation to EF-S 18–135mm IS STM",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "MARKETED 18–135mm f/3.5–5.6",
      "PATENT 18.60–130.48mm f/3.59–5.97",
      "16 ELEMENTS / 11 PATENT CONSTRUCTION GROUPS",
      "6 MOVING ZOOM UNITS",
      "1 ASPHERICAL SURFACE",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [18, 135], design: [18.59925540224872, 130.54639319596174] },
    fNumber: { marketing: 3.5, design: 3.59 },
  },

  source: {
    patentNumber: "US 2013/0088622 A1",
    patentYear: 2013,
    authors: ["Shigenobu Sugita"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "L1 element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -165.36222507149722,
      glass: "847238 — dense flint class",
      role: "Front-unit negative member of the cemented pair.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "E2",
      label: "L1 element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 116.09107434609513,
      glass: "497816 — ED fluorophosphate class",
      apd: "inferred",
      apdNote:
        "UD-class assignment inferred from the patent 1.49700/81.5 coordinate and Canon production UD count; neither the production element number nor supplier is confirmed.",
      role: "Low-dispersion positive partner in the front cemented pair.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "E3",
      label: "L1 element 3",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 111.9749239777085,
      glass: "603607 — crown class",
      role: "Air-separated positive member completing L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "L2 element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -20.29178678267285,
      glass: "835427 — lanthanum crown class",
      role: "Strong negative front member of L2.",
    },
    {
      id: 5,
      name: "E5",
      label: "L2 element 2",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -33.612211590798715,
      glass: "773496 — lanthanum crown class",
      role: "Negative middle member of L2.",
    },
    {
      id: 6,
      name: "E6",
      label: "L2 element 3",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 24.157296602077544,
      glass: "847238 — dense flint class",
      role: "Positive member of the rear cemented pair in L2.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "E7",
      label: "L2 element 4",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -46.64704669338085,
      glass: "773496 — lanthanum crown class",
      role: "Negative rear member of L2.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "E8",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 40.31286156907993,
      glass: "805254 — dense flint class",
      role: "Positive third zoom unit.",
    },
    {
      id: 9,
      name: "E9",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      focalLengthMm: -31.85127331446981,
      glass: "904313 — high-index lanthanum class",
      role: "Negative fourth zoom unit and reconstructed inner-focus unit.",
    },
    {
      id: 10,
      name: "E10",
      label: "L5A element 1",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 29.604929155052215,
      glass: "603607 — crown class",
      role: "Front positive member of L5A.",
    },
    {
      id: 11,
      name: "E11",
      label: "L5A element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 19.86605111811857,
      glass: "603607 — crown class",
      role: "Positive member of the L5A cemented pair.",
      cemented: "C3",
    },
    {
      id: 12,
      name: "E12",
      label: "L5A element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -19.92556462783012,
      glass: "847238 — dense flint class",
      role: "Negative partner completing positive L5A.",
      cemented: "C3",
    },
    {
      id: 13,
      name: "E13",
      label: "L5B element 1",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: -15.126045517881947,
      glass: "750353 — lanthanum flint/crown transition class",
      role: "Negative member of the image-stabilizing L5B subunit.",
      cemented: "C4",
    },
    {
      id: 14,
      name: "E14",
      label: "L5B element 2",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 23.17115071278587,
      glass: "847238 — dense flint class",
      role: "Positive partner in the transversely shiftable L5B subunit.",
      cemented: "C4",
    },
    {
      id: 15,
      name: "E15",
      label: "L6 element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      focalLengthMm: -141.3741299576284,
      glass: "722292 — dense flint class",
      role: "Aspheric negative member of the final positive unit.",
      cemented: "C5",
    },
    {
      id: 16,
      name: "E16",
      label: "L6 element 2",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      indexReference: "d",
      focalLengthMm: 29.924022576120098,
      glass: "596392 — flint class",
      role: "Positive rear member of L6.",
      cemented: "C5",
    },
  ],

  /* ── Surface prescription ──
   * Patent surface 1 is an inactive design dummy and is intentionally omitted.
   * Base d values are the first (wide/infinity) state. Patent surface 20 is relabeled STO.
   */
  surfaces: [
    { label: "2", R: 107.732, d: 1.9, sd: 26.125, medium: 1 },
    { label: "3", R: 60.391, d: 7.57, sd: 25.385, medium: 2 },
    { label: "4", R: -1239.687, d: 0.15, sd: 25.225 },
    { label: "5", R: 53.128, d: 6.09, sd: 24.19, medium: 3 },
    { label: "6", R: 238.329, sd: 23.78 },
    { label: "7", R: 164.319, d: 1.45, sd: 15.095, medium: 4 },
    { label: "8", R: 15.295, d: 6.85, sd: 11.445 },
    { label: "9", R: -53.79, d: 1.2, sd: 11.2826, medium: 5 },
    { label: "10", R: 50.684, d: 0.88, sd: 11.07 },
    { label: "11", R: 29.817, d: 5.57, sd: 11.185, medium: 6 },
    { label: "12", R: -59.549, d: 1.1, sd: 10.825, medium: 7 },
    { label: "13", R: 91.992, sd: 10.385 },
    { label: "14", R: 57.606, d: 1.95, sd: 7.07, medium: 8 },
    { label: "15", R: -73.234, sd: 7.09 },
    { label: "16", R: -35.671, d: 0.7, sd: 6.835, medium: 9 },
    { label: "17", R: 150.44, sd: 6.96 },
    { label: "18", R: 30.381, d: 3.4, sd: 7.51, medium: 10 },
    { label: "19", R: -41.483, d: 0.83, sd: 7.475 },
    // Patent s20 (Stop). Numerical Example 4 patent surface table prints a 14.52 mm effective diameter.
    { label: "STO", R: "flat", d: 3.3 },
    { label: "21", R: 25.373, d: 4.95, sd: 7.13, medium: 11 },
    { label: "22", R: -21.035, d: 0.75, sd: 6.74, medium: 12 },
    { label: "23", R: 86.598, d: 3.56, sd: 6.59 },
    { label: "24", R: -136.978, d: 0.7, sd: 6.405, medium: 13 },
    { label: "25", R: 12.387, d: 2.58, sd: 6.435, medium: 14 },
    { label: "26", R: 30.397, sd: 6.42 },
    {
      label: "27A",
      R: 47.113,
      d: 1.0,
      sd: 7.715,
      medium: 15,
      asphere: { K: 0, A4: -2.10453e-5, A6: -4.04601e-8, A8: 9.66019e-10, A10: -2.17624e-11, A12: 1.50968e-13, A14: 0 },
    },
    { label: "28", R: 31.941, d: 3.58, sd: 7.92, medium: 16 },
    { label: "29", R: -38.622, sd: 8.215 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.6, nominalFNumber: 3.59, label: "Wide" },
      { focalLengthMm: 50.99, nominalFNumber: 4.88 },
      { focalLengthMm: 130.48, nominalFNumber: 5.97, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.39,
    description:
      "CONSTRAINED_RECONSTRUCTION: L4 alone moves objectward from infinity to 0.39 m; d15+d17 is conserved at each zoom position. The patent gives the focus direction but no close-focus spacing rows, so these finite-focus states are code-solved modeling states, not published patent data.",
  },

  /* (moved from var) ── Zoom and focus spacing ──
   * Zoom-only: 6, 13, 26. Zoom + reconstructed L4 focus: 15, 17.
   */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.9, 0.9],
        [22.59, 22.59],
        [42.1, 42.1],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [25.44, 25.44],
        [7.28, 7.28],
        [1.5, 1.5],
      ],
    },
    "15": {
      label: "D15 / FOCUS",
      values: [
        [2.65, 1.4790697552181582],
        [4.09, 1.6764213953340121],
        [7.85, 1.609328298720266],
      ],
    },
    "17": {
      label: "D17 / FOCUS",
      values: [
        [6.67, 7.840930244781841],
        [5.23, 7.643578604665988],
        [1.47, 7.7106717012797334],
      ],
    },
    "26": {
      label: "D26",
      values: [
        [5.22, 5.22],
        [2.39, 2.39],
        [1.3, 1.3],
      ],
    },
    "29": {
      label: "BF",
      values: [
        [35.6, 35.6],
        [55.89, 55.89],
        [71.7, 71.7],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16], blades: 7 },

  groups: [
    { text: "L1 (+)", fromSurface: "2", toSurface: "6" },
    { text: "L2 (−)", fromSurface: "7", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "14", toSurface: "15" },
    { text: "L4 (− / FOCUS)", fromSurface: "16", toSurface: "17" },
    { text: "L5 (+)", fromSurface: "18", toSurface: "26" },
    { text: "L6 (+)", fromSurface: "27A", toSurface: "29" },
  ],
  doublets: [{ text: "L5B / IS", fromSurface: "24", toSurface: "26" }],

  layout: { yScFill: 0.54 },
} satisfies LensDataV2Input;

export default LENS_DATA;
