import type { LensDataInput } from "../../types/optics.js";

/**
 * Reflex-Nikkor 500 mm f/8 — full-feature catadioptric demo.
 *
 * Approximation of the Nikon Reflex-Nikkor 500 mm f/8 mirror telephoto
 * (USP 4,447,141, 1984) used to exercise every Phase A–E mirror feature
 * end-to-end. Prescription values are NOT the patent's published table —
 * they are plausible placeholder values that produce a geometrically valid
 * traceable system. A future commit should replace these with the patent's
 * surface data and a companion analysis-tab donut-pupil treatment.
 *
 * Features exercised:
 *   • Phase B — `reflect: { kind: "second" }` on the corrector rear
 *   • Phase C — explicit `traceSequence` (six hits, surface "2" and "M_pri"
 *               each visited twice with different actions)
 *   • Phase D — partial silvering: central disk on the corrector rear is the
 *               secondary mirror; annular silvering on the primary leaves a
 *               clear central hole for the converging exit beam
 *   • Phase E — `opaqueFrom: "front"` on the secondary spot — direct forward
 *               light hitting the silvered central disk is absorbed rather
 *               than reflecting back through the corrector
 *
 * Caveat: analysis-tab donut-pupil work (vignetting / bokeh / MTF for
 * annular pupils + backward-image-plane conventions) is not yet wired up,
 * so those tabs will not reflect the central obstruction. The diagram and
 * ray-trace views render correctly.
 */
const LENS_DATA = {
  key: "reflex-nikkor-500f8",
  maker: "Nikon",
  name: "REFLEX-NIKKOR 500 mm f/8",
  subtitle: "Catadioptric mirror tele (placeholder; full patent prescription pending)",
  specs: ["1 ELEMENT + 2 MIRRORS", "f ≈ 500 mm (nominal)", "F/8"],
  patentYear: 1984,

  focalLengthMarketing: 500,
  apertureMarketing: 8,
  nominalFno: 8,
  /* Inner radius of the annular entrance pupil. Set smaller than the
   * silvered spot's surface rMax because the placeholder prescription's
   * front aperture is narrower than a real 500 mm f/8 mirror tele — the
   * patent-accurate values (Item 3 follow-up) will widen the EP and
   * restore proportional obstruction sizing. */
  entrancePupilObstructionSD: 2,

  elements: [
    {
      id: 1,
      name: "L_corr",
      label: "Meniscus corrector",
      type: "Refractive meniscus",
      nd: 1.5168,
      vd: 64.17,
      glass: "BK7 (Schott)",
      role: "Refracts entering light; central silvered spot on rear surface acts as secondary mirror",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 6, nd: 1.0, elemId: 0, sd: 33 },
    { label: "1", R: -180, d: 12, nd: 1.5168, elemId: 1, sd: 35 },
    {
      label: "2",
      R: -200,
      d: 120,
      nd: 1.0,
      elemId: 0,
      sd: 35,
      reflect: {
        kind: "second",
        /* Silvered spot sized to match the entrance-pupil obstruction so
         * default-fraction rays in the annular band transmit through the
         * outer corrector rear and only the converging beam returning from
         * the primary lands inside the silvered spot. */
        region: { shape: "disk", rMax: 1.8 },
        opaqueFrom: "front",
      },
    },
    {
      label: "M_pri",
      R: -250,
      d: 150,
      nd: 1.0,
      elemId: 0,
      sd: 70,
      reflect: { kind: "first", region: { shape: "annulus", rMin: 15, rMax: 70 } },
    },
  ],

  traceSequence: ["STO", "1", "2", "M_pri", "2", "M_pri"],

  closeFocusM: 4,
  fstopSeries: [8, 11, 16, 22, 32],

  yScFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
