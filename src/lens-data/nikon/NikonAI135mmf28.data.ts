/**
 * Nikon Ai Nikkor 135mm f/2.8
 *
 * Patent:      US 4,057,330 · Sei Matsui (printed on the patent as "Sei Matui") · Nippon Kogaku K.K. · 1977
 * Embodiment:  Example 2 (= the table of Claim 3); f = 100, 1:2.8, angle of view 18.1°
 * Type:        Modified Ernostar — 5 elements in 4 groups, all spherical, unit focus
 *
 * NOTE ON SCALING:
 *   The patent publishes all three examples normalized to f = 100 mm. Every R and d below is the Example 2
 *   value × s = 1.35 (f = 135 mm), rounded to 0.001 mm; the patent lists no clear apertures, so the sd
 *   column is not a scaled patent quantity. At s = 1.35 the normalized values return round numbers
 *   (d = 7.3 / 0.6 / 13.0 / 2.8 / 4.7 / 1.5 / 34.7 / 2.2 mm, r2 = 405.4, r3 = 38.85, r8 = 84.0 mm), which
 *   supports the factor. Paraxial check: EFL 135.002 mm, back focus 59.512 mm (patent-scale 100.006 / 44.087).
 *
 * NOTE ON THE STOP:
 *   The patent neither tabulates, describes nor draws a diaphragm (Fig. 1 shows the five elements only), so
 *   the stop position is inferred. It is placed in the large air space d7, 13.5 mm (10 units at f = 100)
 *   behind the r7 vertex: d7 = 34.7 mm is split 13.5 mm (r7 → STO) + 21.2 mm (STO → r8). Basis: the patent's
 *   own astigmatism plots (Figs. 2(b), 3(b), 4(b)) are reproduced by real-ray sagittal/meridional foci only
 *   with the stop 8–12 units behind r7 (RMS misfit 0.010–0.018 mm for Examples 1–3), whereas a stop in the
 *   2.8 mm d4 gap misses them by 0.075–0.078 mm RMS in all three examples; distortion is insensitive to it.
 *   The position carries roughly ±3 mm of uncertainty. STO sd 13.5 mm is the traced f/2.8 marginal-ray
 *   height at that plane (13.52 mm), not a published iris diameter.
 *
 * NOTE ON SEMI-DIAMETERS:
 *   All sd values are estimates. Fig. 1 (one schematic drawing for all three examples; its vertex spacings
 *   follow Example 2 within 0.5 mm at f = 100 scale) was measured at 300 dpi, 12.61 px per patent mm
 *   (0.1071 mm/px at production scale): L1 rim 25.6, L2 rim 24.3 with r4 ending at 19.7, L3/L4 rim 19.8
 *   with r7 ending at 14.5, L5 rim 14.5 mm. The drawn sags of r1 and r3 at those rims correspond to only
 *   23.8 and 22.0 mm, so the figure is good to about ±7 %. The exact f/2.8 marginal ray needs
 *   24.11 / 23.65 / 21.95 / 18.57 / 17.81 / 17.15 / 14.58 / 10.98 / 10.77 mm on surfaces 1–9.
 *   Surfaces 1, 2 = 24.8 (middle of the figure bracket, clears the axial beam, inside the 52 mm filter
 *   thread); 4, 5, 6 = 19.2 (figure rim × 0.97); 8, 9 = 14.5 (figure). Surfaces 3 (22.0) and 7 (16.5) keep
 *   the earlier estimates, which agree with the figure within 15 % and clear the axial beam.
 *
 * Focusing:    Unit focus (entire optical assembly translates); the patent publishes no finite-distance
 *              data. The close-focus back focus is calculated for the production 1.3 m film-to-subject
 *              distance (extension 18.03 mm, magnification 0.134).
 *
 * Glass IDs are catalog equivalents chosen from the patent nd/νd pairs; the patent names no glass.
 */

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "nikon-ai-nikkor-135f28",
  name: "NIKON AI NIKKOR 135mm f/2.8",
  maker: "Nikon",
  subtitle: "US 4,057,330 Ex. 2 (Matui 1977) · ×1.35 scale",
  focalLengthMarketing: 135,
  focalLengthDesign: 135.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  // Patent general data: angle of view 18.1°. The exact chief ray reaching Y = 21.6 mm leaves at 9.03°.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 18.1,
    maxTraceFieldDeg: 9.05,
  },
  patentNumber: "US 4,057,330",
  patentAuthors: ["Sei Matsui"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1977,
  elementCount: 5,
  groupCount: 4,

  specs: ["5 elements / 4 groups", "f/2.8–f/32 · 7 blades", "MFD 1.3 m · 52 mm filter", "Unit focus · All spherical"],

  focusDescription: "Unit focus — entire optical assembly moves on helicoid; only BFD changes",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 104.3,
      glass: "S-BSM16 (OHARA)",
      apd: false,
      role: "Front positive meniscus — primary converging power, low-dispersion crown minimises chromatic contribution",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 105.7,
      glass: "S-BSM16 (OHARA)",
      apd: false,
      role: "Added by Matsui to the classical Ernostar — splits front-group power to reduce SA and coma at f/2.8",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7847,
      vd: 26.1,
      fl: 74.1,
      glass: "SF56A (Schott catalog-equivalent, 785261; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Positive element of cemented doublet — directs g-line SA toward undercorrection per patent Condition II",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.2,
      fl: -26.7,
      glass: "FD3 (HOYA catalog-equivalent, 740282; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Strongest element — primary negative power, field-flattening Petzval contribution, spherochromatism partner to L3",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      fl: 172.0,
      glass: "E-FD10 (HOYA catalog-equivalent, 728283; SF10 type, production supplier unspecified)",
      apd: false,
      role: "Rear corrector — isolated by large air gap for distortion and coma correction per patent Condition I",
    },
  ],

  surfaces: [
    // ── L1: Positive meniscus (front crown) ──
    { label: "1", R: 56.201, d: 7.299, nd: 1.62041, elemId: 1, sd: 24.8 },
    { label: "2", R: 405.4, d: 0.599, nd: 1.0, elemId: 0, sd: 24.8 },

    // ── L2: Positive meniscus (second crown) ──
    { label: "3", R: 38.85, d: 13.001, nd: 1.62041, elemId: 2, sd: 22.0 },
    { label: "4", R: 83.151, d: 2.8, nd: 1.0, elemId: 0, sd: 19.2 },

    // ── L3+L4: Cemented doublet (negative meniscus member) ──
    { label: "5", R: 213.133, d: 4.699, nd: 1.7847, elemId: 3, sd: 19.2 },
    { label: "6", R: -79.16, d: 1.5, nd: 1.74, elemId: 4, sd: 19.2 },
    { label: "7", R: 26.482, d: 13.5, nd: 1.0, elemId: 0, sd: 16.5 },

    // ── Aperture stop (not in the patent; inferred inside d7 — see NOTE ON THE STOP) ──
    { label: "STO", R: 1e15, d: 21.2, nd: 1.0, elemId: 0, sd: 13.5 },

    // ── L5: Positive meniscus (rear corrector) ──
    { label: "8", R: 84.0, d: 2.201, nd: 1.72825, elemId: 5, sd: 14.5 },
    { label: "9", R: 252.063, d: 59.51, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  asph: {},

  // Unit focus: only BFD (surface "9") changes. Close value calculated for 1.3 m film-to-subject distance.
  var: {
    "9": [59.51, 77.54],
  },
  varLabels: [["9", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 1.3,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
