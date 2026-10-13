// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON LW-NIKKOR 28mm f/2.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,203,653 Example 1 (First Embodiment, reprinted    ║
 * ║    as claim 4), Nippon Kogaku K.K. / Ikuo Mori.                      ║
 * ║  Five air-spaced singlets in a retrofocus (inverted-telephoto) form: ║
 * ║    negative meniscus L1, then a positive group L2–L5 with the iris   ║
 * ║    between L2 and L3. 5 elements / 5 groups, all spherical.          ║
 * ║  Product link: the Nikonos LW-Nikkor 28mm f/2.8 (1983, on-land only) ║
 * ║    matches the example's 5/5 construction, f/2.8 and 74° field; the  ║
 * ║    patent-to-product link is a correlation, not manufacturer-        ║
 * ║    confirmed.                                                        ║
 * ║  Focus: unit focus (whole optical unit moves; only the last gap      ║
 * ║    changes). CONSTRAINED RECONSTRUCTION — the patent publishes only  ║
 * ║    the infinity state; the close state is solved paraxially for the  ║
 * ║    manufacturer's 0.5 m film-plane-referenced minimum distance.      ║
 * ║                                                                      ║
 * ║  NOTE ON r5: the description table prints r5 = 0.563; claim 4        ║
 * ║    prints r5 = −0.563. The negative sign is adopted (claim 4, the    ║
 * ║    text's "negative lens" L3, Fig. 1, Example 2's r5 = −0.588, and   ║
 * ║    reproduction of f = 1.0 and B.f. = 1.295).                        ║
 * ║  NOTE ON SCALING: s = 28.0 applied to every R and d (patent f = 1);  ║
 * ║    computed EFL 28.031 mm. All spherical: no asphere transform.      ║
 * ║  NOTE ON IMAGE PLANE: last d = computed paraxial BFD 36.253 mm       ║
 * ║    (printed B.f. 1.295 × 28 = 36.26 mm; within source rounding).     ║
 * ║  NOTE ON STOP POSITION: not tabulated. STO splits d4 at 0.50 × d4,   ║
 * ║    inferred from the Fig. 1 iris ticks and the 37° principal-ray     ║
 * ║    axis crossing (measured 0.49–0.52 of d4). STO sd is calibrated to ║
 * ║    f/2.8 at infinity, not a published diaphragm diameter.            ║
 * ║  NOTE ON SEMI-DIAMETERS: none published. Rims follow the Fig. 1      ║
 * ║    optical rims (300 dpi, 0.0492 mm/px from the r1–r10 vertex span,  ║
 * ║    cross-checked by the drawn f/2.8 ray height), flanges excluded:   ║
 * ║    L1 14.4 / 11.8, L2 7.9, L3 front and L4 rear 7.3, L5 8.5 mm.      ║
 * ║    L1 rear is held at 11.8 mm (figure ≈10.4 mm) so the 135-corner    ║
 * ║    bundle and the engine's field estimate (38.5°, corner 38.3°) are  ║
 * ║    not cut below their earlier extent. L3 rear / L4 front are        ║
 * ║    6.6 mm with gapSagFrac 0.99: Fig. 1 draws them in rim contact at  ║
 * ║    ≈7.3 mm, but with the tabulated radii the 0.728 mm d6 gap closes  ║
 * ║    at 6.67 mm, so the figure is not to scale there. At 6.6 mm the    ║
 * ║    rims keep 0.013 mm of air (98.2% of the gap) and clear the exact- ║
 * ║    ray f/2.8 marginal ray (6.44–6.45 mm at r6/r7; engine stop radius ║
 * ║    6.46 mm). L2's edge thickness is 0.58 mm.                         ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gap. No rear    ║
 * ║  plates, filters, mechanics or parent designs.                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-lw-nikkor-28-f28",
  maker: "Nikon",
  name: "NIKON LW-NIKKOR 28mm f/2.8",
  subtitle: "US 4,203,653 EXAMPLE 1 — NIPPON KOGAKU K.K. / IKUO MORI",
  specs: ["5 ELEMENTS / 5 GROUPS", "f ≈ 28.0 mm", "F/2.8", "2ω ≈ 74°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28.03,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikonos"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,203,653",
  patentAuthors: ["Ikuo Mori"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1980,
  elementCount: 5,
  groupCount: 5,

  /* ── Elements ── fl = standalone thick-lens focal length in air (mm) */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.67025,
      vd: 57.5,
      fl: -38.95,
      glass:
        "670575 — lanthanum crown (J-LAK02 HIKARI / S-LAL52 OHARA coordinate-compatible, Δnd −0.0003; supplier unconfirmed)",
      apd: false,
      role: "Divergent front member, convex to the object; sets the long back focus of the retrofocus form",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.60323,
      vd: 42.5,
      fl: 26.13,
      glass: "603425 — barium flint (K-BaSF5 SUMITA class; supplier unconfirmed)",
      apd: false,
      role: "Thin positive lens ahead of the iris; the patent's distortion-correcting member",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -15.83,
      glass: "785261 — dense flint (SF56A SCHOTT / ZF51 CDGM class; supplier unconfirmed)",
      apd: false,
      role: "Strong negative flint behind the iris; Petzval and chromatic balance of the rear group",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80411,
      vd: 46.6,
      fl: 31.86,
      glass: "804466 — lanthanum dense flint (J-LASF015 HIKARI / S-LAH65V OHARA class; supplier unconfirmed)",
      apd: false,
      role: "First of two rear positive menisci, convex to the image",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.732,
      vd: 51,
      fl: 33.64,
      glass:
        "732510 — lanthanum crown (nearest LAKN12 SUMITA, Δnd +0.0015; TAC4 HOYA alternate, Δnd +0.0020; supplier unconfirmed)",
      apd: false,
      role: "Last positive meniscus, convex to the image; shares the rear group's positive power with L4",
    },
  ],

  /* ── Surface prescription ── (patent values × 28; r5 sign per claim 4) */
  surfaces: [
    { label: "1", R: 35.448, d: 1.96, nd: 1.67025, elemId: 1, sd: 14.4 },
    { label: "2", R: 14.7, d: 16.128, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "3", R: 23.1, d: 2.632, nd: 1.60323, elemId: 2, sd: 7.9 },
    { label: "4", R: -47.488, d: 4.214, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "STO", R: 1e15, d: 4.214, nd: 1.0, elemId: 0, sd: 6.286 }, // STO position inferred from Fig. 1 (0.50 × d4); sd calibrated to f/2.8
    { label: "5", R: -15.764, d: 3.136, nd: 1.7847, elemId: 3, sd: 7.3 }, // r5 = −0.563 (claim 4); description table prints +0.563
    { label: "6", R: 63.644, d: 0.728, nd: 1.0, elemId: 0, sd: 6.6 },
    { label: "7", R: -58.744, d: 2.044, nd: 1.80411, elemId: 4, sd: 6.6 },
    { label: "8", R: -18.116, d: 0.112, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "9", R: -489.496, d: 2.436, nd: 1.732, elemId: 5, sd: 8.5 },
    { label: "10", R: -23.492, d: 36.253, nd: 1.0, elemId: 0, sd: 8.5 },
  ],

  asph: {},

  /* ── Variable air spacing (unit focus; reconstructed close state) ── */
  var: {
    "10": [36.253, 38.1],
  },

  varLabels: [["10", "BF"]],

  groups: [
    { text: "DIVERGENT (L1)", fromSurface: "1", toSurface: "2" },
    { text: "CONVERGENT (L2–L5)", fromSurface: "3", toSurface: "10" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Unit focus (assumed): the whole five-element unit moves forward and only the back focus changes, from 36.25 mm at infinity to 38.10 mm at 0.5 m. The patent publishes the infinity state only; the close state is a paraxial reconstruction for the manufacturer's 0.5 m minimum distance, measured from the film plane as on all Nikonos lenses.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.45,
  gapSagFrac: 0.99, // L3 rear / L4 front rims nearly meet (0.013 mm of air at 6.6 mm); Fig. 1 draws rim contact
} satisfies LensDataInput;

export default LENS_DATA;
