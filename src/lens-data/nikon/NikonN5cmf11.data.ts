/**
 * NIKKOR-N 5cm f/1.1 — Nikon S-mount rangefinder (also supplied in Leica screw mount)
 *
 * Patent:   US 2,828,671 — Saburo Murakami (Nippon Kogaku K.K.)
 * Filed:    1957-01-03 (JP priority 1956-04-10), granted 1958-04-01
 * Design:   Modified double-Gauss, 9 elements in 6 components
 *           Sole example: f = 100, F = 1.1, field angle 46°
 *
 * SCALE: the patent table is normalized to f = 100. Every R and d is multiplied
 * by s = 0.5 for the 5 cm production lens (semi-diameters are authored at that
 * scale). The rounded table computes to EFL 99.85 (49.93 mm scaled); all six
 * published component focal lengths reproduce within 0.1 %.
 *
 * Patent transcription correction (2026-08-18):
 *   High-resolution checks of both the worked table and Claim 3 show
 *   n₃ = 1.7170 and r₆ = +872.1. The earlier 1.7700 transcription made
 *   the printed r₆ appear inconsistent and led to an unnecessary radius
 *   substitution. With the correct index, the printed radius reproduces the
 *   patent's component power and system focal length.
 *
 * BACK FOCUS: the patent publishes no back focal distance. The last gap is the
 * calculated paraxial BFD of the scaled table (23.05 mm). The close-focus value
 * is a calculated unit-focus extension (+3.09 mm) for a 0.9 m object-to-image
 * distance; the patent gives no focus data.
 *
 * APERTURE STOP (inferred — not tabulated): the sole figure draws the iris in
 * the 25.2 (12.6 mm scaled) air space d₇ at about 48 % of the vertex-to-vertex
 * distance, but it also draws the two concave surfaces r₇/r₈ with clear
 * semi-diameters (≈ 11 mm scaled) that cannot pass the tabulated F/1.1 beam.
 * With the F/1.1 marginal ray leaving r₇ at h = 13.73 (z = 7.23 mm behind the
 * r₇ vertex) and entering r₈ at h = 13.62 (z = 7.68 mm), a full-aperture iris
 * can only sit between those rims, so the stop plane is placed at 7.5 mm /
 * 5.1 mm. This is a calculated placement, not a patent value.
 *
 * NOTE ON SEMI-DIAMETERS (2026-09-21 audit): the patent lists none.
 *   - Surfaces 9–15 follow the rims measured on the patent figure (300 dpi,
 *     12.35 px/mm at production scale): component IV 18.0, V 17.8, VI 18.1 mm.
 *     These clear the full-field chief ray (≤ 16.0 mm) with heavy but real
 *     corner vignetting.
 *   - Surfaces 5–8 are set by an exact F/1.1 axial ray trace (needs 19.85 /
 *     19.13 / 13.73 / 13.62 mm) with the small margin the geometry allows:
 *     L3 keeps a 0.95 mm edge at 20.2 mm and the r₇/r₈ rims keep 0.28 mm of
 *     air for the iris. The figure draws these smaller than the F/1.1 beam.
 *     That rim air is 2.2 % of the 12.6 mm gap, so gapSagFrac is raised to
 *     0.98 (validator and renderer share it); the default 0.90 would trim
 *     the drawn r₇/r₈ rims by 0.48 / 0.38 mm and hide the F/1.1 clearance.
 *   - Surfaces 1–4 remain the axial marginal height plus 8–10 % (the figure
 *     rims are 22.6 and 20.3 mm; the latter is below the 21.95 mm F/1.1 beam).
 */

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "nikon-5cm-f11",
  maker: "Nikon",
  name: "NIKON NIKKOR-N 5cm f/1.1",
  subtitle: "US 2,828,671 — Murakami 1958",
  focalLengthMarketing: 50,
  focalLengthDesign: 49.93,
  apertureMarketing: 1.1,
  apertureDesign: 1.1,
  lensMounts: ["nikon-s", "leica-ltm"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,828,671",
  patentAuthors: ["Saburo Murakami"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1958,
  elementCount: 9,
  groupCount: 6,
  specs: ["9 elements / 6 groups", "Modified double-Gauss", "All-spherical", "Scaled 0.5× from f = 100 patent"],
  focusDescription: "Unit focus — entire lens translates; only back focal distance changes (extension calculated)",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      fl: 223.9,
      glass: "K-SK7 (Sumita) catalog equivalent (patent 607595; production supplier unspecified)",
      role: "Low-power front positive meniscus distributing convergence gently across the front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      fl: 169.45,
      glass: "K-SK7 (Sumita) catalog equivalent (patent 607595; production supplier unspecified)",
      role: "Second front meniscus; works with L1 to gradually converge the marginal ray bundle before Component III.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 47.9,
      fl: 39.36,
      glass: "S-LAM3 catalog equivalent (patent 717479; production supplier unspecified)",
      cemented: "D1",
      role: "Positive element of the front cemented doublet; uses the same patent 717479 lanthanum coordinate as L6 and L7.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.4,
      fl: -29.26,
      glass: "S-FTM16 (OHARA) catalog equivalent (patent 593354; production supplier unspecified)",
      cemented: "D1",
      role: "Chromatic correction partner to L3 in cemented doublet D1; low Abbe number balances L3's positive power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6483,
      vd: 33.8,
      fl: -24.7,
      glass: "S-TIM22 (OHARA) nearest catalog neighbour (patent 648338 at nd 1.6483; catalog nd 1.64769)",
      cemented: "D2",
      role: "Strongest negative element in the system; provides chromatic correction for the rear group immediately behind the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      fl: 29.7,
      glass: "S-LAM3 catalog equivalent (patent 717479; production supplier unspecified)",
      cemented: "D2",
      role: "Strongest single positive element in the rear group; extraordinarily thick (20.5 mm). Lanthanum glass #2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex",
      nd: 1.717,
      vd: 47.9,
      fl: 81.1,
      glass: "S-LAM3 catalog equivalent (patent 717479; production supplier unspecified)",
      role: "Principal power element of the rear group; plano-convex with flat rear contributing zero Seidel aberrations. Lanthanum glass #3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6259,
      vd: 35.6,
      fl: -248.75,
      glass: "E-F1 (HOYA) catalog equivalent (patent 626356; production supplier unspecified)",
      cemented: "D3",
      role: "Very weak negative meniscus providing final chromatic fine-tuning with minimal Petzval contribution.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      fl: 92.65,
      glass: "K-SK18 (Sumita) catalog equivalent (patent 639555; production supplier unspecified)",
      cemented: "D3",
      role: "Rearmost element; achromatic corrector paired with L8 in cemented doublet D3.",
    },
  ],

  surfaces: [
    // ── Component I: L1 ──
    { label: "1", R: 83.8, d: 4.35, nd: 1.6073, elemId: 1, sd: 24.5 },
    { label: "2", R: 214.15, d: 0.3, nd: 1.0, elemId: 0, sd: 24.0 },
    // ── Component II: L2 ──
    { label: "3", R: 46.5, d: 4.25, nd: 1.6073, elemId: 2, sd: 24.0 },
    { label: "4", R: 81.9, d: 0.7, nd: 1.0, elemId: 0, sd: 22.75 },
    // ── Component III: L3 + L4 cemented (D1) ──
    { label: "5", R: 26.75, d: 9.7, nd: 1.717, elemId: 3, sd: 20.2 },
    { label: "6", R: 436.05, d: 2.05, nd: 1.5927, elemId: 4, sd: 20.2 },
    { label: "7", R: 16.65, d: 7.5, nd: 1.0, elemId: 0, sd: 13.8 },
    // ── Aperture stop (not tabulated; calculated placement inside d₇ = 12.6 mm, see header) ──
    { label: "STO", R: 1e15, d: 5.1, nd: 1.0, elemId: 0, sd: 13.7 },
    // ── Component IV: L5 + L6 cemented (D2) ──
    { label: "8", R: -21.3, d: 2.7, nd: 1.6483, elemId: 5, sd: 13.7 },
    { label: "9", R: 67.85, d: 10.25, nd: 1.717, elemId: 6, sd: 18.0 },
    { label: "10", R: -29.05, d: 0.3, nd: 1.0, elemId: 0, sd: 18.0 },
    // ── Component V: L7 ──
    { label: "11", R: 58.15, d: 5.5, nd: 1.717, elemId: 7, sd: 17.8 },
    { label: "12", R: 1e15, d: 0.3, nd: 1.0, elemId: 0, sd: 17.8 },
    // ── Component VI: L8 + L9 cemented (D3) ──
    { label: "13", R: 71.15, d: 1.45, nd: 1.6259, elemId: 8, sd: 18.1 },
    { label: "14", R: 48.45, d: 3.9, nd: 1.6385, elemId: 9, sd: 18.1 },
    { label: "15", R: 259.0, d: 23.05, nd: 1.0, elemId: 0, sd: 18.1 },
  ],

  asph: {},

  var: {
    "15": [23.05, 26.14],
  },
  varLabels: [["15", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "7" },
    { text: "IV", fromSurface: "8", toSurface: "10" },
    { text: "V", fromSurface: "11", toSurface: "12" },
    { text: "VI", fromSurface: "13", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.9,
  nominalFno: 1.1,
  fstopSeries: [1.1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  scFill: 0.5,
  yScFill: 0.38,
  gapSagFrac: 0.98,
} satisfies LensDataInput;

export default LENS_DATA;
