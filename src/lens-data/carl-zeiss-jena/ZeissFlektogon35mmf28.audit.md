# CARL ZEISS JENA FLEKTOGON 35mm f/2.8: unfinished source and geometry audit

Whole source and scale: US 2,793,565 A, 0.35.
No optical row is retuned. Stop split is preserved as documented in the companion analysis.

Provisional surface caps (mm): [17, 17, 10, 10, 5.5, 5.5, 5.5, 7, 7, 7, 7]. No source clear diameters exist.
Dense static samples include axis and rim; all adjacent optical faces are positively separated. The selected allowance and all native margins are reported below; the earlier 80% criterion applied only to the initial clipped draft.

The physically clear rear rim of surface 7 is 5.79 mm. Keeping the exact source stop and the initially required 5.803010 mm beam rim would put the iris plane 0.01344 mm inside the glass surface at the edge. The chosen rim leaves 0.0021003 mm axial clearance but produces a small, explicitly retained axial rim loss: the traced iris-relative equivalent is f/2.807153 rather than exactly f/2.8 (0.255478% penalty). The model is therefore not claimed to be perfectly iris-limited. This is a geometric reconstruction, not manufacturing-clearance certification. No gap-sag or rim-angle override is authored.

Reference-wavelength geometric and diffraction MTF were evaluated at maker-angle hypotheses 0°, 15.5° and 31°, plus the independently solved actual full-frame corner 32.208391206°. Neither patent gives a numerical field. Exact maker angles use chief-height mapping; the temporary 100 mm image-circle normalization exists only in the diagnostic request, not the authored model. Grid-128 nonconvergence is preserved. The supported adaptive cap of 256 converges through sampled 40 lp/mm at all maker angles. A requested 512 grid was rejected by the support guard and is not used. The derived-plane and best-axial results are separate: best-axial shift +0.027699359223 mm is diagnostic only and never authored.

At the actual full-frame corner both methods and both focus modes converge through sampled 40 lp/mm. Broadband accuracy, finite focus, manufactured rim sizes and exact factory performance are not established.

The final JSON interval zero is a computational endpoint, not a source BFL. The last authored gap is the independently calculated collimated BFL. The image plane is not optimized.

Original source handoff: flektogon35_recovery/RECOVERED_SOURCE_HANDOFF.txt. All source identity and archival limitations are retained.

## Deployment validation (2026-11-10)

Independent check against the US 2,793,565 page images: 11 R, 11 thicknesses/spacings (including the printed stop split
b1 7.55 / b2 8.09), 6 nd and 6 ν equal the First embodiment ×0.35; no mismatches. r11 reads −36.14 (DE 953471 prints the
same; −30.14 would give f = 74.6). EFL 34.965 (99.90 at patent scale), construction length exact. The 1957 Zeiss Jena
catalogue shows the 6/5 Flektogon 2.8/35 with this architecture; zeissikonveb.de notes the production glasses differ from the
patent's, so the model is the patent design of the lens, not the factory prescription.

Applied: `catalog.lensMounts` m42 / exakta / praktina (1957 catalogue).

Open: the header does not state the ×0.35 scale; `focalLengthMm.design` holds the traced 34.965; R/d values carry float
noise; the audit cap list above (5.5/5.5/5.5) is stale against the data (7.8/7.5/5.79); the analysis's "ASB Exakta" wording
(the catalogue gives Exakta as SB); public wording needs a cleanup pass.
