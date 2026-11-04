# Source and numerical audit

- Whole JP S47-8749 B Example 2; Grade B probable family, not factory-exact.
- Literal R/d/N/Abbe and fixed source planes retained; no optical tuning or front protector invention.
- Inferred caps and unprinted stops frozen before MTF; rejected geometry and raw pupil failures retained.
- Normal scalar native sampled convergence is not independent phase/factory certification.
- Infinity-only; no numerical finite table supports a retail focus law.
- Native input SHA256 `215da6afa6e9bc8ac31e66a930379f3a45c46701402c54af3b723143afa77466`; bibliographic transformation is recorded separately.
- Self-contained original sources, plan, scripts, final report-generation provenance, tests and custody verification accompany the private package.

## 2026-11-04 — Wording, glass and metadata pass

Source re-read: the Example 2 table (PDF page 4) agrees with every R, d, N and V in the file after the uniform ×3 scale; the patent prints 諏訪道美 as inventor. The scaled prescription gives EFL 300.041 mm (printed f = 100), paraxial back focus 83.2185 mm against the L-derived last gap 83.193 mm, f1 167.068 / f2 −142.216 / e 104.040 mm (printed ×3: 167.058 / −142.221 / 104.043), and Petzval sum × f = −0.1687 (printed total −0.16852). Canon's section drawing shows a thin front protective meniscus that the patent does not list, then the two fluorite elements (patent L1, L2), the cemented pair and the two rear singlets.

Data file: header comment rewritten to state the ×3 scale, the d-line reading of N/V, the Canon 7/6 versus patent 6/5 count, the image-plane, stop and semi-diameter basis and the glass equivalents. Subtitle "JP S47-8749 B Example 2 — probable family; inferred apertures" became "JP S47-8749 B, Example 2 — probable production correlation, front protective glass omitted". Specs became 6 ELEMENTS / 5 GROUPS (PATENT; CANON LISTS 7/6), DESIGN f = 100 (SCALED ×3), DESIGN F/5.6, ALL SPHERICAL, 2 FLUORITE ELEMENTS. elementCount / groupCount stay 6 / 5, following the house precedent for a maker count that includes an unprescribed element (CanonFL300mmf28SSCFluorite counts the patent's 5/4 against Canon's 6/5; CanonEF300mmf28LISUSM counts 16/12 against Canon's 17/13 with protection glass). Added catalog.closeFocusM.marketing 3.5 and aperture.blades 8 (Canon Camera Museum). Focus description and all six element roles reworded from patent text; indexReferenceNote removed from all six elements; L1 and L2 tagged apd "inferred" with an apdNote (Canon names two fluorite elements; the patent labels them CaF2 but does not call the material anomalous, so "patent" was not used).

Glass relabels (Δ = catalog − printed): L1, L2 CaF2 (fluorite crystal), Δnd −0.00002, Δνd 0.00, catalog PgF 0.5387; L3 SF56A (Schott), Δnd +0.000001, Δνd −0.02, PgF 0.6098; L4 J-LASF013 (Hikari), Δnd 0, Δνd +0.01, PgF 0.5720 (closer than S-LAH63 at Δνd −0.014); L5 S-LAM60 (Ohara), Δnd −0.000002, Δνd +0.04, PgF 0.5531; L6 FF5 (Hoya), Δnd 0, Δνd +0.05, PgF 0.5927 (closer than S-FTM16 at Δνd −0.09). The patent prints no partial-dispersion data, so no PgF comparison is possible.

Per-line paraxial focus relative to d at ×3: the Fig. 9 spherical-aberration curves (PDF page 12) read at the axis give C about +0.039 mm and F and g about −0.054 mm, with a reading accuracy of about ±0.01 mm. The previous Abbe-based dispersion gave C +0.259, F +0.130, g +0.940 mm; the relabelled model gives C +0.048, F −0.100, g −0.149 mm. Every line moves toward the plot, so all relabels are kept. The S-LAH63 / S-FTM16 alternative gives C +0.056, F −0.094, g −0.129 mm, the same conclusion.

Engine values unchanged by this pass: EFL 300.041 mm, f/5.6, half-field 4.1°, stop radius 11.461 mm, paraxial back focus 83.2185 mm, focus keyframes unchanged. Real image-space working f-number at the stop rim is 5.6616. Analysis: process material and the verification transcript removed, run-together words fixed, the glass section and element sections rewritten to the new labels, and a Model Scope and Limitations section added.

Stop reading: on a 400 dpi render of Fig. 4 (PDF page 9) the diaphragm sits 0.697 of the way from the r7 to the r8 vertex, so the earlier "about 0.68" figure reading was replaced by "about 0.70" in the header and analysis; the model's 0.70 is unchanged.

Open: the patent's third-order coefficient table fits a stop at 0.717 of d7 (61.278 / 24.186 mm) against the model's Fig. 4-based 0.70 (59.825 / 25.639 mm); not changed in this pass. Open: with the catalog curves the F and g foci remain about 0.05 and 0.10 mm shorter than Fig. 9.
