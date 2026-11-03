# Source and numerical audit

- Whole US 4,114,992 Embodiment 1; probable family, not factory-exact.
- Original source ZIP, literal CSV, primary figure/table pixels and transport hashes are retained.
- Uniform 1.8× scaling hypothesis; fixed plane 168.8994mm.
- All caps/stop hypotheses frozen before native geometry or traces.
- Nominal 21 MTF fields converge without applied focus shift; raw pupil arrays, clipping and 22 already-aim-blocked raw engine failures retained.
- Predeclared stop and SD controls, including rejected geometry, retained separately; no selection by performance.
- Normal native scalar sheared-pupil estimates; no independent OPL/factory or continuous-frequency validation claim.
- Model SHA256 `9c84a7ea127679aa3e18d0080e14bae1b0f7baad43867f2a5e581a004c522c1f`.
- Integration and rebuild records stayed with the source package; they are not part of the repo (closed 2026-11-03).

## 2026-11-03 — Deployment validation and cleanup

The independent validation re-read the Embodiment 1 table (patent page 6, column 3) and its claim 1 repeat from the scanned US PDF: 10 radii, 9 thicknesses plus fB, 5 nd/νd pairs and Σd = 51.120. There are no aspheres and no variable gaps. Every file value is the patent value ×1.8, including the d8 split (27.424638 + 24.319962 = 51.7446 mm); no mismatch was found. All 16 conditions hold for Embodiment 1. Embodiments 2–4 each reproduce their own printed f and fB (41.534/41.535, 42.485/42.489, 42.430/42.427 at f = 100).

Patent f = 100, fB = 42.713 and Σd + fB = 93.833 scale to 180 mm, 76.883 mm and 168.899 mm; the model gives EFL 180.0034 mm, paraxial BFD 76.8828 mm, f/2.8 and a 6.9° half-field. Real-ray LSA of −0.051/−0.095/−0.100/−0.071 mm at pupil 1/0.85/0.7/0.5 matches Fig. 2A in shape and size. Fig. 2C reads about −0.1 % distortion at 6.9° against the model's +0.07 %; for Embodiment 4 both Fig. 5C and the model (+0.33 %) are clearly positive, so the Embodiment 1 difference is plot-level. The stop at 0.53 of d8 matches a measurement of Fig. 1 (265 of 500 px), and the rim ratios match the Fig. 1 outlines.

Maker comparison: MIR's reproduction of Olympus specifications gives 5 elements / 5 groups, helicoid focusing to 2.0 m, f/2.8–f/32, a 72 mm filter, 700 g and a 14° angle of view, and dates the lens probably 1981–82; Kamerastore gives 1978. No ED element is listed. The MT-1828 service-manual preview returned HTTP 403 on re-check and the MIR section image was not viewed. All four embodiments share Fig. 1 and the 5/5 layout, so none fits the product better than Embodiment 1. No other corpus file cites US 4,114,992; OlympusZuikoAutoT180mmf2 models JP H05-042643 B2 (10 elements / 8 groups), a different lens.

Fields changed in this pass. Coordinator: `name` from "OLYMPUS OM-SYSTEM ZUIKO MC AUTO-T 180mm f/2.8" to "OLYMPUS ZUIKO AUTO-T 180mm f/2.8", and the five `glass` labels to the OHARA catalog equivalents S-BAH11, S-BSM15, S-BSM14, S-TIH11 and S-TIH14. Data step: `fStops` and `maxFNumber` extended to f/32; `closeFocusM` from the 1e15 placeholder to 2.0; surface 10's `d` moved into a unit-focus `gaps` entry "10" (BF 76.8834 → 96.831 mm, a derived paraxial solve giving 2000.03 mm object to image, magnification −0.1108 and the same 0.0006 mm defocus as at infinity); `focus.description`. No `groups`, since the patent names only single-element lens components. Wording step: header comment, `subtitle`, `specs`, the five element roles and `indexReferenceNote` texts; in the analysis, the lens name, glass names, focus section, process vocabulary and run-together text, the verification section (now "Model Scope and Limitations"), the cemented-element sentences and text copied from the 200 mm and 100 mm files were rewritten or removed, and MIR and Kamerastore were added as sources.

Before and after the wording step, `built.mjs` and `probe.mjs` output is identical. The surface audit reports OK, the aperture audit is within 3 %, clearance at Y = 21.63 mm shows no axial clip or blocked chief ray at either focus state, and corner light at 6.9° is 73.4 %.

Open: the production prescription, glass and clear apertures are unpublished, and which embodiment, if any, entered production is undetermined. The −0.13 mm photopic best-focus shift was not reproduced independently. `vig.mjs` fails with a module-instance error when run from the worktree and works from the main checkout. Page rendering is assigned to the coordinator.
