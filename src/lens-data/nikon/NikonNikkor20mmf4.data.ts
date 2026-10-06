import type { LensDataInput } from "../../types/optics.js";

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
 * ║  NOTE ON STOP POSITION: the patent draws the diaphragm in the gap            ║
 * ║  between R12 and R13 (Fig. 2(A)) without a dimension. It is placed at        ║
 * ║  the midpoint of the scaled 2.974 mm gap (1.487 + 1.487 mm). The stop        ║
 * ║  semi-diameter is calibrated so the exact axial marginal ray launched        ║
 * ║  at EFL/8 grazes it (f/4.000); it is not a published iris size.              ║
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
  key: "nikon-nikkor-20mm-f4",
  maker: "Nikon",
  name: "NIKON NEW NIKKOR 20mm f/4",
  subtitle: "US 3,549,241 Example 2 — 0.2× scaled patent design; production lens differs (10 elements / 8 groups)",
  specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 20.0 mm", "F/4", "2ω = 90° (PATENT)", "ALL-SPHERICAL"],

  /* ── Explicit metadata fields ──
   * lensMounts / imageFormat are those of the production New Nikkor 20mm f/4; see NOTE ON PRODUCT CORRELATION
   * for the difference between the patent example's published 90° field and the 135-format corner.
   */
  focalLengthMarketing: 20,
  focalLengthDesign: 20.0022,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,549,241 A",
  patentAuthors: ["Ikuo Mori"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1970,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 89.598,
      glass:
        "620603 — dense barium crown, SK16 class (J-SK16 HIKARI / S-BSM16 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Positive-first front component; patent associates its curvature relation with compactness and distortion control.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      fl: -37.517,
      glass:
        "697556 — lanthanum crown, LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Second front-group negative meniscus; part of net dispersive front system.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      fl: -21.745,
      glass:
        "697556 — lanthanum crown, LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Third front-group negative meniscus; part of net dispersive front system.",
    },
    {
      id: 4,
      name: "L4a",
      diagramLabel: "L4a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      fl: -19.302,
      glass:
        "678555 — lanthanum crown, LaK12 class (LAC12 HOYA / K-LaK12 SUMITA coordinate-compatible; supplier unconfirmed)",
      role: "Negative standalone member of cemented positive L4 component.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      diagramLabel: "L4b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.60562,
      vd: 43.9,
      indexReference: "d",
      fl: 17.381,
      glass:
        "606439 — barium flint, BaF4 class (S-BAM4 OHARA / N-BAF4 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Positive member of cemented L4 component.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5a",
      diagramLabel: "L5a",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.60342,
      vd: 38.0,
      indexReference: "d",
      fl: 36.79,
      glass: "603380 — flint, F5 class (J-F5 HIKARI / F5 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Front half of split positive central L5 component.",
    },
    {
      id: 7,
      name: "L5b",
      diagramLabel: "L5b",
      label: "Element 7",
      type: "Plano-Convex",
      nd: 1.60342,
      vd: 38.0,
      indexReference: "d",
      fl: 31.646,
      glass: "603380 — flint, F5 class (J-F5 HIKARI / F5 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Rear half of split L5; published air separation decreases near focus.",
    },
    {
      id: 8,
      name: "L6a",
      diagramLabel: "L6a",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      fl: -10.054,
      glass:
        "762265 — dense flint, SF14 class (J-SF14 HIKARI / S-TIH14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Negative member of cemented L6 component.",
      cemented: "L6",
    },
    {
      id: 9,
      name: "L6b",
      diagramLabel: "L6b",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.2,
      indexReference: "d",
      fl: 43.089,
      glass:
        "767462 — lanthanum dense flint (nearest J-LASFH2 HIKARI, nd identical, catalog νd 46.78, Δνd +0.58; supplier unconfirmed)",
      role: "Positive member of cemented L6; net component remains negative.",
      cemented: "L6",
    },
    {
      id: 10,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 32.529,
      glass:
        "517642 — borosilicate crown, BK7 class (J-BK7A HIKARI / N-BK7 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Rear positive meniscus.",
    },
    {
      id: 11,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.6393,
      vd: 45.0,
      indexReference: "d",
      fl: 25.841,
      glass:
        "639450 — barium flint, BaF12 class (BAF12 SUMITA / S-BAM12 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Final positive meniscus.",
    },
  ],

  /* ── Surface prescription ──
   * Patent R/d × 0.2. Source gap d12 = 14.87 (2.974 mm scaled) is split 1.487 mm before STO + 1.487 mm after STO.
   * Labels 11p / 12p are the patent's plane faces R11′ / R12′; there is no R8.
   */
  surfaces: [
    { label: "1", R: 31.9, d: 3.018, nd: 1.62041, elemId: 1, sd: 16.0 },
    { label: "2", R: 72.148, d: 0.04, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "3", R: 27.156, d: 0.862, nd: 1.6968, elemId: 2, sd: 12.8 },
    { label: "4", R: 13.146, d: 4.31, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "5", R: 24.138, d: 1.078, nd: 1.6968, elemId: 3, sd: 9.0 },
    { label: "6", R: 9.138, d: 4.742, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "7", R: 164.658, d: 1.724, nd: 1.6779, elemId: 4, sd: 6.6 },
    { label: "9", R: 12.07, d: 7.112, nd: 1.60562, elemId: 5, sd: 6.3 },
    { label: "10", R: -64.01, d: 0.04, nd: 1.0, elemId: 0, sd: 6.1 },
    { label: "11", R: 22.2, d: 2.586, nd: 1.60342, elemId: 6, sd: 6.0 },
    { label: "11p", R: 1e15, d: 0.432, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "12p", R: 1e15, d: 3.148, nd: 1.60342, elemId: 7, sd: 6.0 },
    { label: "12", R: -19.096, d: 1.487, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "STO", R: 1e15, d: 1.487, nd: 1.0, elemId: 0, sd: 4.013664640575499 },
    { label: "13", R: -14.096, d: 0.906, nd: 1.76182, elemId: 8, sd: 5.1 },
    { label: "14", R: 17.24, d: 1.724, nd: 1.76684, elemId: 9, sd: 5.1 },
    { label: "15", R: 34.484, d: 1.034, nd: 1.0, elemId: 0, sd: 5.1 },
    { label: "16", R: -57.76, d: 1.078, nd: 1.5168, elemId: 10, sd: 5.4 },
    { label: "17", R: -13.104, d: 0.04, nd: 1.0, elemId: 0, sd: 5.4 },
    { label: "18", R: -185.348, d: 1.682, nd: 1.6393, elemId: 11, sd: 6.2 },
    { label: "19", R: -15.222, d: 34.1, nd: 1.0, elemId: 0, sd: 6.2 },
  ],

  asph: {},

  /* ── Variable gaps: [infinity, published 1/25× state] ──
   * 11p is the patent's d11′ (2.16 → 1.57 native). The near image gap is a calculated paraxial conjugate.
   */
  var: {
    "11p": [0.432, 0.314],
    "19": [34.1, 34.908576],
  },
  varLabels: [
    ["11p", "SPLIT L5"],
    ["19", "BF"],
  ],

  groups: [
    { text: "FRONT DISPERSIVE", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "19" },
  ],
  doublets: [
    { text: "L4", fromSurface: "7", toSurface: "10" },
    { text: "L6", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Focus configuration ──
   * closeFocusM is the calculated object-to-image distance (566.9 mm) of the published 1/25× state, not the
   * production minimum focus distance (0.30 m).
   */
  closeFocusM: 0.567,
  // The close-focus row is source-tabulated.
  publishedStations: { focus: [1] },
  focusDescription:
    "Patent close-range correction: the air gap inside the split L5 component closes from 0.432 to 0.314 mm at 1/25× magnification while the image distance grows. The near image distance is calculated from that published state, and intermediate positions are a linear interpolation. The production lens focuses to 0.30 m, which the patent does not tabulate.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
