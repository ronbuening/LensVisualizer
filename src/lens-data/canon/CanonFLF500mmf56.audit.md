# Source and numerical audit

- Whole JP S47-8109 B Example 1; Grade B probable family, not factory-exact.
- Literal R/d/N/Abbe and fixed source planes retained; no optical tuning or front protector invention.
- Inferred caps and unprinted stops frozen before MTF; rejected geometry and raw pupil failures retained.
- Normal scalar native sampled convergence is not independent phase/factory certification.
- Infinity-only; no numerical finite table supports a retail focus law.
- Native input SHA256 `3e2f0be195fdb7d87c984b9392fd51c504f1a6b672d4187f52fac6c07114f201`; bibliographic transformation is recorded separately.
- Self-contained original sources, plan, scripts, final report-generation provenance, tests and custody verification accompany the private package.

## 2026-11-04 — Wording, glass and metadata pass

Source re-read: the Example 1 table (p. 4) against the data file. All nine radii, eight thicknesses and five n/ν pairs match the printed values ×5; the axial track 203.235 mm plus the 125.600 mm last gap gives the printed L = 65.767 ×5 = 328.835 mm. The p. 8 text assigns Figs. 8–12 to Examples 1–5, so Fig. 8 (p. 11) is this example's aberration plot.

Fields changed in the data file: header comment rewritten (states the ×5 scale, the d-line reading, the glass choices, the omitted front protective glass, the printed-L image plane and its 0.156 mm offset behind paraxial focus, and the sd and stop basis); subtitle; specs (5 ELEMENTS / 4 GROUPS (PATENT; CANON LISTS 6/5), DESIGN f = 100.0 (SCALED ×5), DESIGN F/5.6, ALL SPHERICAL, FRONT PROTECTIVE GLASS NOT MODELLED); `catalog.closeFocusM` marketing 10 m added (Canon Camera Museum fl119); roles of all five elements; `focus.description`; L1 `apd: "inferred"` with an apdNote; L3 indexReferenceNote reworded; indexReferenceNote removed from L1, L2, L4 and L5. `elementCount` / `groupCount` stay at the modelled 5 / 4, following CanonFL300mmf28SSCFluorite (Canon 6/5, model 5/4, specs line naming Canon's count) and CanonEF300mmf28LISUSM (Canon's 17/13 includes a protection glass the model omits; elementCount 16/12).

Glass relabels (Δ = catalog − stored; the patent prints no θgF, so no PgF comparison is possible):

- L1 1.43387 / 95.1 → CaF2 (fluorite crystal): Δnd −0.00002, Δνd 0.0, catalog PgF 0.5387.
- L2 1.79952 / 42.3 → S-LAH52 (Ohara): Δnd −0.000004, Δνd −0.075, PgF 0.5672. S-LAH52Q (Δνd −0.06) matches equally in νd; S-LAH52 puts C 11 µm and g 6 µm closer to the plot. J-LASF02 (Δνd −0.21) moved the F and g lines away in a full-set comparison.
- L4 1.713 / 53.9 → S-LAL8 (Ohara): Δnd −0.000005, Δνd −0.03, PgF 0.5458.
- L5 1.5927 / 35.4 → S-FTM16 (Ohara): Δnd +0.000001, Δνd −0.09, PgF 0.5933. Hoya FF5 (Δνd +0.05, PgF 0.5927) is marginally closer in νd and would put C 8 µm and F 14 µm closer but g 31 µm farther; S-FTM16 was kept because the patent's glass names follow the Ohara-style catalog of the period.
- L3 1.48749 / 70.0 stays Unmatched (fluor crown). S-FSL5 (Δνd +0.236) is inside the tolerance but was reverted after the per-line check below; J-FK5 (+0.31), N-FK5 (+0.41) and the other FK5-class rows are outside it.

Per-line paraxial focus, BFD shift from the d line in µm (C / F / g). Fig. 8 read at the axis and scaled ×5: +179 / −53 / +124, reading accuracy about ±5 µm (0.1 mm at patent scale = 354 px at 600 dpi). Before (all Unmatched): +479 / +150 / +1492. After: +226 / −85 / +277. Each relabel applied alone to the original file shifts the lines by: CaF2 −187 / −201 / −968, S-LAH52 −45 / −3 / −108, S-LAL8 −20 / −15 / −64, S-FTM16 −2 / −17 / −78 (all toward the plot); S-FSL5 +2 / +40 / +16 (all away). Adding S-FSL5 to the final set would give +228 / −45 / +292: F 24 µm closer, but g 15 µm and C 2 µm farther. Shifts add to within 2 µm.

Engine numbers unchanged by this pass: EFL 499.5723 mm, F/5.6, half-field 2.5°, stop radius 24.4816 mm, BFD 125.4443 mm, last gap 125.6000 mm, both focus keyframes at infinity as before. Surface audit OK; image circle 0 undersized; field coverage 100 % (2.5° → 21.65 mm); aperture within 3 % of F/5.6; clear-aperture check at Y = 21.633 mm shows no axial clipping or chief-ray blocking.

Analysis: inventor kanji corrected to 諏訪通美 (gazette spelling); the sentence calling Example 2 a same-family alternative removed (Example 2 is an 8.2° 300 mm-class design); the Verification Summary process text replaced by a short Model Scope and Limitations section; the private-packet source item removed; run-together text fixed; element lines and the glass section rewritten for the relabels, with the Fig. 8 comparison.

Open: the model's g-line focus stays about 150 µm behind the Fig. 8 value with every catalog combination tried; the cause (1960s melt partial dispersions or the fluorite data) is not identified.

Open: LENS_DATA_SPEC calls `elementCount` the published count; Canon's 6 / 5 could replace the modelled 5 / 4 if the corpus precedent is revisited.
