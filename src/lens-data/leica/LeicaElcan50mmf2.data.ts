import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELCAN 50mm f/2                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,649,104 Example 3 (Edwards, Mandler, Wagner).   ║
 * ║  Ernst Leitz GmbH, Wetzlar (inventors at Midland, Ontario);        ║
 * ║  filed 1970-07-30, granted 1972-03-14. Example 3 is one of the     ║
 * ║  three f:2 / 45° embodiments (Examples 1–3); its r/a/n/ν table is  ║
 * ║  printed identically in the description and in claim 3.           ║
 * ║  Four-element, four-group all-spherical objective.                 ║
 * ║  4 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized to f = 100 (computed EFL 100.00, s′ 50.5074); ║
 * ║    all R and d scaled ×0.5 to the 50 mm production focal length.  ║
 * ║    Stored EFL 50.001 mm, BFD 25.255 mm.                            ║
 * ║                                                                    ║
 * ║  NOTE ON REFERENCE LINE:                                           ║
 * ║    The patent tabulates n_e and ν_e (e-line, 546.1 nm), as its     ║
 * ║    description states. The nd/vd slots keep those native values   ║
 * ║    and every element carries indexReference: "e"; glass labels    ║
 * ║    are catalog curves that reproduce the e-line pair at C′/e/F′.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    The patent publishes no clear apertures, and its Fig. 1 (the   ║
 * ║    Example 1 section) is not to scale transversely (all four rims  ║
 * ║    drawn at ≈10.3 mm at f = 50 — below the 12.5 mm f/2 entrance    ║
 * ║    pupil radius). Values are therefore estimates from an exact     ║
 * ║    real-ray trace: every surface clears the f/2 axial bundle       ║
 * ║    (surface 2 needs 12.09 mm, surface 5 needs 9.73 mm) and the     ║
 * ║    full-field chief ray to Y = 21.6 mm; the corner bundle is       ║
 * ║    mechanically vignetted at L4 (normal). L2/L3 are a rim-contact  ║
 * ║    pair: their air gap closes from 1.63 mm on axis to ≈0.1 mm at   ║
 * ║    h = 9.8, so gapSagFrac is raised to 0.95 to admit the f/2 rim   ║
 * ║    clearance the prescription itself implies.                      ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION (assumed):                                  ║
 * ║    Not tabulated and not drawn in either patent figure. It cannot  ║
 * ║    sit in the L2–L3 gap (a₄): that gap is only 1.63 mm on axis and ║
 * ║    the L2 rear surface sag (2.09 mm at h = 10) already passes the  ║
 * ║    L3 vertex plane, leaving no room for an iris at the 9.8 mm f/2  ║
 * ║    bundle radius. The iris is modelled in the L3–L4 gap (a₆,       ║
 * ║    10.95 mm), 6.0 mm behind r₆ — just clear of the L3 rear rim —   ║
 * ║    the classic Ernostar-type location. Any position inside a₆ is   ║
 * ║    consistent with the patent; this one is an assumption.          ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    The patent gives infinity data only. The close-focus BF         ║
 * ║    extension (3.805 mm) is calculated so that the unit-focus       ║
 * ║    object-to-image distance equals closeFocusM = 0.762 m           ║
 * ║    (production figure, not from the patent).                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-elcan-50f2",
  maker: "Leica",
  name: "LEICA ELCAN 50mm f/2",
  subtitle: "US 3,649,104 EXAMPLE 3 — ERNST LEITZ / EDWARDS, MANDLER, WAGNER",
  specs: ["4 ELEMENTS / 4 GROUPS", "f ≈ 50.0 mm", "F/2.0", "2ω = 45°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 2,
  apertureDesign: 2.0,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,649,104",
  patentAuthors: ["Garry Edwards", "Walter Mandler", "Erich Wagner"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1972,
  elementCount: 4,
  groupCount: 4,

  /* ── Elements (nd/vd slots hold the patent's native ne/νe) ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.694,
      vd: 54.5,
      indexReference: "e",
      fl: 33.1,
      glass: "N-LAK9 (Schott; legacy LaK9 — e-line match ne = 1.69401, νe = 54.48)",
      apd: false,
      role: "Primary positive power; front surface carries highest positive surface power (φ₁₁ = +1.832)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6734,
      vd: 46.8,
      indexReference: "e",
      fl: 59.0,
      glass: "N-BAF10 (Schott; legacy BaF10 — e-line match ne = 1.67341, νe = 46.83)",
      apd: false,
      role: "Secondary positive power; nearly in contact with L1, forming a closely spaced front pair",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7471,
      vd: 27.4,
      indexReference: "e",
      fl: -17.8,
      glass: "E-FD13 (Hoya; SF13-class dense flint — e-line proxy ne = 1.74707, νe = 27.54; supplier unconfirmed)",
      apd: false,
      role: "Sole diverging element; rear surface carries strongest power in the system (φ₃₂ = −3.189)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7546,
      vd: 34.7,
      indexReference: "e",
      fl: 52.0,
      glass: "LAFN7 (Schott — e-line match ne = 1.75458, νe = 34.72)",
      apd: false,
      role: "Rear field-correcting element; lanthanum flint for chromatic fine-tuning",
    },
  ],

  /* ── Surface prescription ──
   *  Patent Example 3 (f = 100) scaled ×0.5 to production f ≈ 50 mm.
   *  Stop position assumed in a₆ (see header) — not published.
   */
  surfaces: [
    { label: "1", R: 18.941, d: 5.1888, nd: 1.694, elemId: 1, sd: 13.0 },
    { label: "2", R: 95.1681, d: 0.0961, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "3", R: 16.06985, d: 2.97875, nd: 1.6734, elemId: 2, sd: 11.0 },
    { label: "4", R: 24.9725, d: 1.6335, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "5", R: 100.24065, d: 0.7687, nd: 1.7471, elemId: 3, sd: 9.8 },
    { label: "6", R: 11.7132, d: 6.0, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "STO", R: 1e15, d: 4.9541, nd: 1.0, elemId: 0, sd: 7.85 },
    { label: "7", R: 47.6244, d: 5.7653, nd: 1.7546, elemId: 4, sd: 12.5 },
    { label: "8", R: -212.1935, d: 25.255, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — only BFD changes; close value calculated) ── */
  var: {
    "8": [25.255, 29.06],
  },
  varLabels: [["8", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT PAIR", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.762,
  focusDescription: "Unit focusing — entire optical assembly translates as a rigid unit.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  gapSagFrac: 0.95,
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
