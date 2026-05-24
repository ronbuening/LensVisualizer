import type { LensDataInput } from "../../types/optics.js";

/**
 * Reference Maksutov-Cassegrain — three-surface catadioptric demo.
 *
 * Exercises the Phase D feature set: partial silvering (`reflect.region`),
 * embedded-style geometry (the secondary mirror is a silvered central disk
 * on the rear of the front meniscus corrector), and explicit traceSequence
 * with a surface that the ray traverses three times in different radial
 * regimes (transmissive annulus on the entry pass, silvered center on the
 * return, transmissive central hole through the primary on the exit pass).
 *
 * Light path:
 *   STO  →  corrector front  →  corrector rear (transmit, outer annulus)
 *        →  primary (reflect, silvered annulus)
 *        →  corrector rear (reflect, silvered central disk = secondary mirror)
 *        →  primary (transmit, central transmissive disk)
 *
 * Not a published prescription — the radii are picked to keep the trace
 * geometrically self-consistent (entry rays land in the silvered annulus of
 * the primary; returning rays converge into the silvered central disk of the
 * corrector rear; exit rays pass through the central transmissive hole of
 * the primary). Verified end-to-end by the mirror regression tests.
 */
const LENS_DATA = {
  key: "reference-maksutov-cassegrain",
  maker: "Reference",
  name: "REFERENCE MAKSUTOV-CASSEGRAIN",
  subtitle: "Three-surface catadioptric (engine demo, not a real lens)",
  specs: ["1 ELEMENT + 2 MIRRORS", "Engine demo", "F/12 nominal"],

  focalLengthMarketing: 30,
  apertureMarketing: 12,
  nominalFno: 12,
  /* Inner radius of the annular entrance pupil. Sized to ~40% of the
   * computed EP so default ray fractions land in the unobstructed annulus
   * that clears the silvered central spot on the corrector rear. */
  entrancePupilObstructionSD: 1.9,

  elements: [
    {
      id: 1,
      name: "L_corr",
      label: "Meniscus corrector",
      type: "Refractive meniscus",
      nd: 1.5168,
      vd: 64.17,
      glass: "BK7 (Schott)",
      role: "Refracts on entry; central spot on rear surface acts as secondary mirror",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 5, nd: 1.0, elemId: 0, sd: 22 },
    { label: "1", R: -150, d: 10, nd: 1.5168, elemId: 1, sd: 30 },
    {
      label: "2",
      R: -170,
      d: 290,
      nd: 1.0,
      elemId: 0,
      sd: 30,
      reflect: { kind: "second", region: { shape: "disk", rMax: 5 } },
    },
    {
      label: "M_pri",
      R: -600,
      d: 200,
      nd: 1.0,
      elemId: 0,
      sd: 80,
      reflect: { kind: "first", region: { shape: "annulus", rMin: 8, rMax: 80 } },
    },
  ],

  traceSequence: ["STO", "1", "2", "M_pri", "2", "M_pri"],

  closeFocusM: 10,
  fstopSeries: [8, 11, 16, 22, 32],

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
