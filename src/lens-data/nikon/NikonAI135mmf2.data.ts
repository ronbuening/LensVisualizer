/**
 * Nikon Ai Nikkor 135mm f/2
 *
 * Patent:      US 4,062,630 · Sei Matsui · Nippon Kogaku K.K. · 1977
 * Embodiment:  Example V (Claim 8)
 * Type:        Tele-Sonnar / Ernostar variant — 6 elements in 4 groups
 * Production:  NEW Nikkor 135mm f/2 (1976) → Ai Nikkor 135mm f/2 (1977) → Ai-S Nikkor 135mm f/2 (1981)
 *
 * NOTE ON SCALING:
 *   The patent publishes Example V normalized to f = 100 mm (B.f. 29.22, ΣD 71.26, T.L. 100.48, 2W = 18°).
 *   Every R, d, sd and the focus gap below is the patent value × s = 1.35 (f = 135 mm, B.f. 39.447,
 *   T.L. 135.648). R is rounded to 0.001 mm; d is the exact product. There are no aspheres. At s = 1.35
 *   the normalized values return round numbers (r2 = 420, r3 = 51.5, r4 = 30.5, r5 = 270, r7 = −47 mm;
 *   d = 11.1 / 0.5 / 3.7 / 17.9 / 3.5 / 12.0 / 1.6 / 33.9 / 12.0 mm), which supports the factor.
 *
 * NOTE ON THE STOP:
 *   The patent neither tabulates nor describes the diaphragm. Fig. 1 draws it as two bars inside d8,
 *   behind the cemented negative member: 8.3 mm (f = 100 scale) behind the r8 vertex, measured at
 *   16.07 px/mm from the r8–r9 vertex spacing. d8 = 33.8985 mm is therefore split 11.2 mm (r8 → STO)
 *   + 22.6985 mm (STO → r9). The split is a figure measurement; the drawn half-opening (16.5 mm at
 *   production scale) agrees with the traced f/2 beam radius at that plane (15.7 mm).
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent lists no clear apertures. Fig. 1 (one drawing for all five examples; its vertex
 *   spacings follow Example V within 0.7 mm at f = 100 scale) was measured at 300 dpi, 16.09 px/mm:
 *   L1 rim 26.3, L2 23.6, L3 21.6, L4/L5 common rim 19.1, r8 curve end 13.4, L6 rim 13.0 mm, i.e.
 *   35.5 / 31.8 / 29.1 / 25.8 / 18.0 / 17.5 mm at production scale. Surfaces 6, 7, 9 and 10 follow the
 *   figure. Surfaces 1–5 and 8 keep the earlier ray-trace estimates (× 1.35), which agree with the
 *   figure within about 15 %; surface 4 sits at the renderer's rim-slope limit (sd/|R| = 0.9), short of
 *   the drawn rim. The exact f/2 marginal ray needs 33.75 / 32.83 / 30.28 / 26.34 / 24.71 / 23.13 /
 *   20.70 / 16.72 / 11.89 / 10.17 mm on surfaces 1–10 and clears every stored value.
 *
 * Focusing:    Unit focus (entire optical assembly translates); the patent publishes no finite-distance
 *              data. The close-focus back focus is calculated for the production 1.3 m film-to-subject
 *              distance (extension 18.09 mm, magnification 0.134).
 *
 * Glass IDs are inferential from nd/νd catalog matching; see analysis.
 */

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "nikon-ai-nikkor-135f2",
  name: "NIKON AI NIKKOR 135mm f/2",
  maker: "Nikon",
  subtitle: "US 4,062,630 · Example V",
  specs: [
    "6 elements / 4 groups",
    "Ai / Ai-S Nikkor 135mm f/2 (1977–2005)",
    "f = 135 mm (patent f = 100 mm × 1.35)",
    "Tele-Sonnar / Ernostar variant",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 135,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  // Patent general data: 2W = 18°. The exact chief ray reaching Y = 21.6 mm leaves at 8.97°.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 18,
    maxTraceFieldDeg: 9,
  },
  patentNumber: "US 4,062,630",
  patentAuthors: ["Sei Matsui"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1977,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 48.1,
      fl: 132.5,
      glass: "S-LAM3 (OHARA)",
      role: "Front positive meniscus — primary converging element, bears full EP diameter",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62606,
      vd: 39.1,
      fl: -128.2,
      glass: "626391 — barium flint (patent coordinate; vendor unresolved)",
      cemented: "D1",
      role: "Flint component of achromatic doublet (Group II); Δν = 22.1 vs L3",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.2,
      fl: 56.8,
      glass: "OHARA S-BAL35 / HOYA BACD5 (589/612)",
      cemented: "D1",
      role: "Crown component of achromatic doublet (Group II); strongest positive element in system",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.74,
      vd: 28.2,
      fl: 63.5,
      glass: "FD3 (HOYA catalog-equivalent; production supplier unspecified)",
      cemented: "D2",
      role: "Dense flint positive in monochromatic correction doublet (Group III); near-isochromatic with L5",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -25.7,
      glass: "HOYA E-FD1 / Schott SF1 (717/295)",
      cemented: "D2",
      role: "Dense flint negative in monochromatic correction doublet; g-line spherical aberration corrector",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: 132.5,
      glass: "HOYA E-FD1 / Schott SF1 (717/295)",
      role: "Rear positive element — field curvature and astigmatism control; same glass as L5",
    },
  ],

  surfaces: [
    // ── Group I: L1 ──
    { label: "1", R: 78.32, d: 11.097, nd: 1.717, elemId: 1, sd: 35.0 },
    { label: "2", R: 420.0, d: 0.4995, nd: 1.0, elemId: 0, sd: 33.8 },

    // ── Group II: L2 + L3 cemented doublet (D1) ──
    { label: "3", R: 51.5, d: 3.699, nd: 1.62606, elemId: 2, sd: 33.8 },
    { label: "4", R: 30.501, d: 17.901, nd: 1.58913, elemId: 3, sd: 27.4 },
    { label: "5", R: 270.0, d: 3.4965, nd: 1.0, elemId: 0, sd: 25.2 },

    // ── Group III: L4 + L5 cemented doublet (D2) ──
    { label: "6", R: 1e15, d: 12.0015, nd: 1.74, elemId: 4, sd: 25.8 },
    { label: "7", R: -47.0, d: 1.6065, nd: 1.71736, elemId: 5, sd: 25.8 },
    { label: "8", R: 30.776, d: 11.2, nd: 1.0, elemId: 0, sd: 18.5 },

    // ── Aperture stop (drawn in Fig. 1 inside d8; not tabulated — split of d8 measured from the figure) ──
    { label: "STO", R: 1e15, d: 22.6985, nd: 1.0, elemId: 0, sd: 15.7 },

    // ── Group IV: L6 ──
    { label: "9", R: 85.942, d: 12.0015, nd: 1.71736, elemId: 6, sd: 17.5 },
    { label: "10", R: 843.337, d: 39.447, nd: 1.0, elemId: 0, sd: 17.5 },
  ],

  asph: {},

  var: {
    "10": [39.447, 57.54],
  },
  varLabels: [["10", "BF"]],
  focusDescription:
    "Unit focusing — entire optical assembly translates forward; only BFD changes (1.3 m close state calculated, not published)",

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.3,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
