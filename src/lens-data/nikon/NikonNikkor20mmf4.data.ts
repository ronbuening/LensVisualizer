import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NEW NIKKOR 20mm f/4                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,549,241 A, Example 2 (Embodiment II), Ikuo Mori /         ║
 * ║  Nippon Kogaku K.K. Positive-first retrofocus ultra-wide, published          ║
 * ║  full field 90°. 11 elements / 9 groups, all spherical.                      ║
 * ║  Focus: the patent publishes one close state (1/25×) in which the air        ║
 * ║  gap inside the split L5 component closes; see the focus block below.        ║
 * ║                                                                              ║
 * ║  NOTE ON SCALING: the patent table is normalized to f = 100. Every R         ║
 * ║  and d is multiplied by s = 0.2 for a model at the 20 mm production          ║
 * ║  focal length. Indices and Abbe numbers are unchanged. The computed          ║
 * ║  EFL of the scaled table is 20.0022 mm. The last gap is the printed          ║
 * ║  back focus (170.5 × 0.2 = 34.1 mm); the Gaussian BFD is 34.1074 mm.         ║
 * ║                                                                              ║
 * ║  NOTE ON SURFACE LABELS: labels follow the patent's R numbers. The           ║
 * ║  patent has no R8 (L4 is a cemented pair R7/R9/R10). The two plane           ║
 * ║  faces inside the split L5 component, R11′ and R12′ in the patent, are       ║
 * ║  labelled 11p and 12p; both are real refracting surfaces.                    ║
 * ║                                                                              ║
 * ║  NOTE ON STOP POSITION: the patent draws the diaphragm in the gap between    ║
 * ║  R12 and R13 (Fig. 2(A)) without a dimension. It is placed at the midpoint   ║
 * ║  of the scaled 2.974 mm gap (1.487 + 1.487 mm). The stop radius is derived   ║
 * ║  from the design f-number, f/4.000: the exact axial marginal ray launched at ║
 * ║  EFL/8 grazes it; it is not a published iris size.                           ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent lists none. Fig. 2(A) (sheet 2,          ║
 * ║  0.0445 mm per pixel at 300 dpi after scaling) is drawn to scale in its      ║
 * ║  curvatures and vertex spacings, but its rim heights are not clear           ║
 * ║  apertures: the drawn L4b-L7 rims sit only 2-14% above the f/4 axial         ║
 * ║  beam and would pass 63% of the pupil at 35°, while the patent's own         ║
 * ║  coma plot, Fig. 2(B), is drawn out to about 0.87 of the full aperture       ║
 * ║  at 35° and 45°. L1-L4a follow the figure (L1 and the rear of L2 kept        ║
 * ║  larger so the chief ray is not blocked). From the L4 cement to L8 the       ║
 * ║  rims are ray-supported: the full f/4 bundle passes to 30° and about         ║
 * ║  0.9 of it at 35°, keeping the drawn order of heights (L4 tapering           ║
 * ║  toward the stop, L5 and L6 smallest, L7 < L8). L7 is limited to 5.4 mm      ║
 * ║  by its edge thickness. They are not production mechanical dimensions.       ║
 * ║                                                                              ║
 * ║  NOTE ON PRODUCT CORRELATION: Nikon credits Ikuo Mori with the 1974          ║
 * ║  New Nikkor 20mm f/4 (Nikon F mount, 135 format), which this patent          ║
 * ║  family is correlated with. Example 2 has 11 elements in 9 groups; the       ║
 * ║  production lens has 10 elements in 8 groups with an unsplit central         ║
 * ║  positive component, so this is a related patent design, not the             ║
 * ║  production prescription. lensMounts and imageFormat are those of the        ║
 * ║  production lens. The patent example publishes a 90° field (image            ║
 * ║  height 20.0 mm at this scale); the 21.63 mm corner of the 135 format        ║
 * ║  needs about 94.5° (traced chief ray 47.6°, unblocked, with about 30%        ║
 * ║  of the meridional pupil), beyond the patent's aberration data.              ║
 * ║  maxFstop 22 is the production minimum aperture.                             ║
 * ║                                                                              ║
 * ║  NOTE ON GLASS: the patent gives d-line nd/νd only. Labels name              ║
 * ║  catalog glasses whose coordinates reproduce the patent pair; they do        ║
 * ║  not assert the historical supplier or melt. L6b (1.76684 / 46.2) uses       ║
 * ║  the nearest catalog curve, J-LASFH2 (same nd, νd 46.78, Δνd +0.58).         ║
 * ║                                                                              ║
 * ║  Optical design only: glass surfaces, stop and variable gaps.                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-nikkor-20mm-f4",
  maker: "Nikon",
  name: "NIKON NEW NIKKOR 20mm f/4",
  subtitle: "US 3,549,241 Example 2 — 0.2× scaled patent design; production lens differs (10 elements / 8 groups)",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 20.0 mm", "F/4", "2ω = 90° (PATENT)", "ALL-SPHERICAL"],
    elementCount: 11,
    groupCount: 9,
    /* ── Explicit metadata fields ──
     * lensMounts / imageFormat are those of the production New Nikkor 20mm f/4; see NOTE ON PRODUCT CORRELATION
     * for the difference between the patent example's published 90° field and the 135-format corner.
     */
    focalLengthMm: { marketing: 20, design: 20.0022 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 3,549,241 A",
    patentYear: 1970,
    authors: ["Ikuo Mori"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 89.598,
      glass:
        "620603 — dense barium crown, SK16 class (J-SK16 HIKARI / S-BSM16 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Positive-first front component; patent associates its curvature relation with compactness and distortion control.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: -37.517,
      glass:
        "697556 — lanthanum crown, LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Second front-group negative meniscus; part of net dispersive front system.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: -21.745,
      glass:
        "697556 — lanthanum crown, LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Third front-group negative meniscus; part of net dispersive front system.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -19.302,
      glass:
        "678555 — lanthanum crown, LaK12 class (LAC12 HOYA / K-LaK12 SUMITA coordinate-compatible; supplier unconfirmed)",
      role: "Negative standalone member of cemented positive L4 component.",
      diagramLabel: "L4a",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.60562,
      vd: 43.9,
      indexReference: "d",
      focalLengthMm: 17.381,
      glass:
        "606439 — barium flint, BaF4 class (S-BAM4 OHARA / N-BAF4 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Positive member of cemented L4 component.",
      diagramLabel: "L4b",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5a",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.60342,
      vd: 38.0,
      indexReference: "d",
      focalLengthMm: 36.79,
      glass: "603380 — flint, F5 class (J-F5 HIKARI / F5 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Front half of split positive central L5 component.",
      diagramLabel: "L5a",
    },
    {
      id: 7,
      name: "L5b",
      label: "Element 7",
      type: "Plano-Convex",
      nd: 1.60342,
      vd: 38.0,
      indexReference: "d",
      focalLengthMm: 31.646,
      glass: "603380 — flint, F5 class (J-F5 HIKARI / F5 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Rear half of split L5; published air separation decreases near focus.",
      diagramLabel: "L5b",
    },
    {
      id: 8,
      name: "L6a",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      focalLengthMm: -10.054,
      glass:
        "762265 — dense flint, SF14 class (J-SF14 HIKARI / S-TIH14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Negative member of cemented L6 component.",
      diagramLabel: "L6a",
      cemented: "L6",
    },
    {
      id: 9,
      name: "L6b",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.2,
      indexReference: "d",
      focalLengthMm: 43.089,
      glass:
        "767462 — lanthanum dense flint (nearest J-LASFH2 HIKARI, nd identical, catalog νd 46.78, Δνd +0.58; supplier unconfirmed)",
      role: "Positive member of cemented L6; net component remains negative.",
      diagramLabel: "L6b",
      cemented: "L6",
    },
    {
      id: 10,
      name: "L7",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 32.529,
      glass:
        "517642 — borosilicate crown, BK7 class (J-BK7A HIKARI / N-BK7 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Rear positive meniscus.",
      diagramLabel: "L7",
    },
    {
      id: 11,
      name: "L8",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.6393,
      vd: 45.0,
      indexReference: "d",
      focalLengthMm: 25.841,
      glass:
        "639450 — barium flint, BaF12 class (BAF12 SUMITA / S-BAM12 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Final positive meniscus.",
      diagramLabel: "L8",
    },
  ],

  /* ── Surface prescription ──
   * Patent R/d × 0.2. Source gap d12 = 14.87 (2.974 mm scaled) is split 1.487 mm before STO + 1.487 mm after STO.
   * Labels 11p / 12p are the patent's plane faces R11′ / R12′; there is no R8.
   */
  surfaces: [
    { label: "1", R: 31.9, d: 3.018, sd: 16.0, medium: 1 },
    { label: "2", R: 72.148, d: 0.04, sd: 16.0 },
    { label: "3", R: 27.156, d: 0.862, sd: 12.8, medium: 2 },
    { label: "4", R: 13.146, d: 4.31, sd: 11.0 },
    { label: "5", R: 24.138, d: 1.078, sd: 9.0, medium: 3 },
    { label: "6", R: 9.138, d: 4.742, sd: 7.3 },
    { label: "7", R: 164.658, d: 1.724, sd: 6.6, medium: 4 },
    { label: "9", R: 12.07, d: 7.112, sd: 6.3, medium: 5 },
    { label: "10", R: -64.01, d: 0.04, sd: 6.1 },
    { label: "11", R: 22.2, d: 2.586, sd: 6.0, medium: 6 },
    { label: "11p", R: "flat", sd: 6.0 },
    { label: "12p", R: "flat", d: 3.148, sd: 6.0, medium: 7 },
    { label: "12", R: -19.096, d: 1.487, sd: 6.0 },
    { label: "STO", R: "flat", d: 1.487 },
    { label: "13", R: -14.096, d: 0.906, sd: 5.1, medium: 8 },
    { label: "14", R: 17.24, d: 1.724, sd: 5.1, medium: 9 },
    { label: "15", R: 34.484, d: 1.034, sd: 5.1 },
    { label: "16", R: -57.76, d: 1.078, sd: 5.4, medium: 10 },
    { label: "17", R: -13.104, d: 0.04, sd: 5.4 },
    { label: "18", R: -185.348, d: 1.682, sd: 6.2, medium: 11 },
    { label: "19", R: -15.222, sd: 6.2 },
  ],

  /* ── Focus configuration ──
   * closeFocusM is the calculated object-to-image distance (566.9 mm) of the published 1/25× state, not the
   * production minimum focus distance (0.30 m).
   */
  focus: {
    closeFocusM: 0.567,
    description:
      "Patent close-range correction: the air gap inside the split L5 component closes from 0.432 to 0.314 mm at 1/25× magnification while the image distance grows. The near image distance is calculated from that published state, and intermediate positions are a linear interpolation. The production lens focuses to 0.30 m, which the patent does not tabulate.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable gaps: [infinity, published 1/25× state] ──
   * 11p is the patent's d11′ (2.16 → 1.57 native). The near image gap is a calculated paraxial conjugate.
   */
  gaps: { "11p": { label: "SPLIT L5", values: [[0.432, 0.314]] }, "19": { label: "BF", values: [[34.1, 34.908576]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT DISPERSIVE", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "19" },
  ],
  doublets: [
    { text: "L4", fromSurface: "7", toSurface: "10" },
    { text: "L6", fromSurface: "13", toSurface: "15" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
