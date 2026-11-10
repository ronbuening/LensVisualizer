# CARL ZEISS JENA FLEKTOGON 35mm f/2.8: source and geometry audit

Whole source and scale: US 2,793,565 A, 0.35.
No optical row is retuned. Stop split is preserved as documented in the companion analysis.

Provisional surface caps (mm): [17, 17, 10, 10, 5.5, 5.5, 5.5, 7, 7, 7, 7]. No source clear diameters exist. (Superseded
draft list, closed 2026-11-10: the data file carries 7.8 / 7.5 / 5.79 mm on surfaces 5–7.)
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
(the catalogue gives Exakta as SB); public wording needs a cleanup pass. (Closed in the cleanup pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file. Header rewritten in house form, keeping every fact: US 2,793,565 A First embodiment (Fig. 1), f = 100
scaled ×0.35, printed b1/b2 stop split, inferred rims with default geometry checks, f/2.8 and 62° from the 1957
catalogue, derived back focus, the surface-7 iris clearance and f/2.807 equivalent; process wording removed. `subtitle`
"US 2,793,565 A — PROBABLE FAMILY, WHOLE SOURCE EXAMPLE" → "US 2,793,565 A, Embodiment 1 — ×0.35 patent design of the
Flektogon 2.8/35; production glasses differ". `specs` → 6 ELEMENTS / 5 GROUPS, DESIGN f = 35.00 mm (×0.35), F/2.8,
2ω = 62°, ALL SPHERICAL. `focus.closeFocusM` 1e9 → 1e15 placeholder and a plain `focus.description`.
`catalog.focalLengthMm.design` 34.965… → 35, the scaled patent f = 100 (LENS_DATA_SPEC item 7); the Carl Zeiss Jena
folder uses both forms (Biogon 35, MC Pancolar 50 and Jena Sonnar 50/2 carry a round patent focal length; Flektogon 20
and 50 the traced EFL). Element `role` added and `indexReferenceNote` reworded. Float noise removed from R1, R3, R8, R9 and the
gaps after surfaces 2–5, 7 and the stop; each rounded value equals the printed value ×0.35. The derived last gap
(34.55906720080986) is unchanged.

Glass. L4 "Unmatched (literal source index and Abbe value)" → "BaSF2-class barium flint (catalog row J-BASF2, Hikari)":
J-BASF2 1.66446 / 35.87 against the printed 1.6645 / 35.9 (Δnd −4×10⁻⁵, Δνd −0.03); the label resolves to that row. No
other element has an exact row: L1/L6 1.6224 / 60.3 (nearest N-SK16 1.62041, Δnd −0.0020), L2 1.6051 / 42.2 (nearest
BAM25 1.60323, Δnd −0.0019), L3 1.6583 / 51.0 (nearest N-SSK5 1.65844 / 50.88, Δnd +1.4×10⁻⁴, outside 1×10⁻⁴), L5
1.7588 / 26.7 (nearest FD140 1.76182, Δnd +0.0030). These keep `Unmatched (…)` labels stating the printed values. No
`apd` tags: the maker publishes no special-dispersion elements.

Engine numbers, before and after (built.mjs, probe.mjs and a full-precision paraxial trace): EFL 34.965364713964 mm,
BFD 34.559067200810 mm, FOPEN 2.8, half-field 29.709723794°, stop radius 5.803458387 mm, total track 81.620067201 mm;
differences only beyond the 13th significant digit from the rounding. `closeFocusM` changed from 1e9 to 1e15 as
intended. audit:surface OK; audit:aperture within 3 % of f/2.8, no rim limit.

Analysis. Removed the staging, census, MTF-grid and convergence paragraphs, the schema-placeholder focus text and the
"four other models" / "both models" leftovers; "Model Qualifications and Validation" is now "Model Scope and
Limitations". Corrected "ASB Exakta/Exa": the 1957 catalogue lists Exakta and Exa with the spring diaphragm (SB) and the
automatic spring diaphragm (ASB) only for the Praktina IIA and Praktisix. Added DD 10604 and DE 953 471, the
zeissikonveb.de production history (patent based on the 1952 V118 calculation; production glasses differ; production
f ≈ 36.7 mm with a back focus over 37 mm), the claim conditions with the example's values, element roles, the J-BASF2
match, the catalogue mounts and the 0.36 m close-focus source. The surface-7 figures were rechecked: a rim equal to the
stop radius (5.8035 mm) meets the iris plane 0.0134 mm inside the glass; the 5.79 mm rim leaves 0.0021 mm.

Open:

- Rims were not compared with the patent figure in this pass (sd unchanged). At the full-frame corner the chief ray
  crosses surface 1 at 16.98 mm against sd 17.
- `aperture.fStops` / `maxFNumber` end at f/22; secondary sources give f/16 as the smallest aperture of the 1950s lens.
  Left until a maker source confirms it.
- The 0.36 m close focus rests on lens-db (Type 1) and a Kadlubek catalogue figure; the 1957 catalogue gives none.
- The 0.0021 mm surface-7 iris clearance is tight; a rim pass should keep the printed stop split.
