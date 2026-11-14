# Scoped preintegration audit

Original CN224176794U only; original PDF, rendered tables, independent transcription and publication comparison retained. All26 rows and three aspheres pass parity apart from explicitly interpreted S26→IMG. Printed14.935mm is not silently erased; no-filter applied17.914666932mm is user-authorized possible-typo interpretation, not proven erratum. Coarse glass precision and different priorityA values remain disclosed.

Closed by the 2026-11-13 deployment fix below: the image gap is now recorded as an applied correction supported by the U/A layout comparison. The original interpretation above is retained as history.

Native geometry errors[] at97%gap-sag. Authored/runtime clear radii agree; only iris is generated. Caps are provisional face-specific values, not measured factory apertures.812-sample stop lattice valid/blocked756/56,542/270,268/544 at0/11.895243/23.790486deg; canonical failedzero, independent whole-line noBracket review separately preserved. Full integration QA remains deferred. No repository modifications or release.

Superseded by the rim values and current transmission results below: the 97% ceiling and 812-sample results describe the former rims. Full application and browser checks remain deferred; this pass edits only the three lens files.

## 2026-11-13 — Deployment fix

Source re-read: CN 224176794 U front page, Table 1 (printed page 7), Table 2 and equation f1 (page 8), ¶0047–0053 and Fig. 1/2 (pages 12/13); CN 119148346 A Table 1 and Table 2 (pages 10/11) and ¶0025, ¶0031–0032, ¶0046. All 26 U radius/spacing rows, 15 nd/νd pairs, three K values and 15 even-asphere coefficients agree with the file except the explicitly corrected S26 image gap. The infinity gaps remain stop-to-S12 15.594 mm and S16-to-S17 1.000 mm. Scale factor is 1: no radii, thicknesses, aspheric coefficients or other source lengths were rescaled or fitted.

The U was filed June 11, 2025 and published April 28, 2026; applicant Shenzhen Songruo Photography Equipment Co., Ltd., inventor Yuwen Chang. Priority CN 202411609438.X was filed November 12, 2024 and published as CN 119148346 A on December 17, 2024.

Image-plane decision: retain S26 d = 17.91466693210846 mm, the calculated infinity focus without a filter, and record printed 14.935 mm as a corrected erratum. The U Table 1 and ¶0047 and A Table 1, ¶0025 and ¶0046 all give about 14.9 mm. The A table has coarser radii, S10-to-stop 6.0 mm, stop-to-S17 31.1 mm, and G2 at the object-side travel boundary at infinity (S10-to-S12 7.35 mm). That layout gives approximately 48.85 mm EFL and 15.6 mm back focus, or 14.8 mm back focus with the U's L3 index 1.77. The U instead places G2 nearest the image at infinity and increases stop-to-G2 to 15.594 mm; its table gives 49.903117 mm EFL and 17.914667 mm back focus. The printed 14.9 mm fits the earlier layout, rather than the U table. Moving G2 toward the image lengthens back focus for every object distance, so closer focus requires objectward motion, as the U arrangement implies; the A's prose reverses this direction.

Other A/U differences remain separate: A L3 nd 1.78 versus U 1.77; A shares S1/S25 asphere terms while U supplies distinct S1 terms; A S25 A10 is −1.51120e−12 versus U −1.51204e−12; A S26 A4 is −1.66290e−06 versus U −1.66490e−06. No A value is applied to this model. The earlier independent single-value misprint scan tested 2,342 candidates without finding a one-number repair meeting both focal-length and back-focus tolerances. Its index-rounding trials moved back focus by several millimetres but did not establish joint agreement with 49 mm and 14.935 mm; this was not an impossibility proof. These historical searches were not repeated in this pass.

The corrected erratum carries surface 26, field d, printed/applied values and source-summary/claims evidence tags: the numerical infinity layout supplies the calculation and claim 1 fixes G1, the stop and G3 while only G2 moves. These tags do not mean a publication prints the applied value; neither does. The 49 mm versus computed 49.903117 mm difference remains a separate unresolved entry. The illustrated FIT filter has no thickness or material and remains omitted.

Rim changes, in mm:

| Surface | Old → new sd | Reason |
|---|---|---|
| S3 | 18.99 → 19.05 | Minimum two-decimal raise proposed for the iris-admitted axial beam. |
| S4 | 18.99 → 19.08 | Minimum raise clearing the beam across the front doublet gap. |
| S13 | 19.68 → 19.78 | Largest equal two-decimal rim preserving the source air gap. |
| S14 | 19.68 → 19.78 | Same physical gap limit as S13. |

checks.gapSagFrac rises from 0.97 to 0.98. For S13/S14, solving sag(76.029, h) + sag(72.262, h) = 0.98 × 5.492 gives h = 19.787591747326466 mm. At the chosen 19.78 mm the combined intrusion is 5.377953015720308 mm, below 5.38216 mm allowed; 19.79 mm gives 5.383494902011094 mm and exceeds it. Visible air clearance is 0.1140469843 mm. The f/1.25 axial beam requires about 20.26/20.30 mm here, beyond where the source surfaces meet, so the remaining loss belongs to the printed geometry. No touching-rim setting or prescription alteration was used. S3/S4 also pass at 0.98; the shared-band intrusion is about 10.147 mm of the 10.392 mm gap. S2, the remaining L3/L4 faces, every other rim, and all stop data stay unchanged; only beam-required changes were made to the existing face-specific estimates.

The locally supplied SongRaw construction artwork and U Fig. 1/2 agree in the 15-element/ten-group sequence, five cemented pairs and aspheric end elements L1/L15. The changes are at most 0.10 mm (about 0.5% of the original rims), preserving the broad proportions. Mechanical flanges, brackets, rays and leaders are not optical rims. These drawings support construction identity but do not prove exact production coefficients or clear apertures.

First-order results before → after from built.mjs/probe.mjs: EFL 49.90311745758611 → 49.90311745758611 mm; BFD 17.91466693210846 → 17.91466693210846 mm; FOPEN 1.25 → 1.25; stop radius 21.985254253541743 → 21.985254253541743 mm; half-field 23.790486344830388° unchanged. Track excluding the final gap remains 119.064 mm and total track 136.97866693210847 mm. The U states 49 mm, uses f/1.25 for its MTF condition and prints 14.935 mm to the image. Both probe focus-key outputs remain the same infinity configuration; no finite station or focus travel is added.

Current checks: audit:surface reports OK before and after. Default audit:aperture reports one station within its 3% tolerance and zero rim/trace/iris/failed limits before and after. At zero tolerance after the fix it reports S13 limiting f/1.25 to approximately f/1.28 (+2.5%); the default pass does not imply zero axial clipping. clearap.mjs changes from CLIPS-AXIAL at S4/S13/S14 to S13/S14 only, with no blocked chief ray. Its lower full-field marginal solve still reports no-ray-found, so that tool does not certify a complete full-field bundle.

Engine sampled geometric transmission before → after is 93.7% → 95.2% on-axis, 67.7% → 67.8% at half-field and 32.8% → 32.8% at the edge. Remaining axial loss is about 4.8%; area-equivalent f-number 1.25/sqrt(0.952) is about 1.28. Real off-axis vignetting is retained. audit:field-coverage --all reports one lens/one station at ≥99% coverage, zero unsolved and zero skipped both times. audit:image-circle reports one lens checked, zero undersized and zero skipped both times, for the authored 44 mm circle.

Text changes: plain header and errata; infinity-only focus description naming G2 (L7–L9), with focus.closeFocusM retained at 1e15; catalog.closeFocusM.marketing added as 0.52 m from the maker/PetaPixel specification. Design EFL remains the built 49.90311745758611 mm, design aperture f/1.25 and marketing aperture f/1.2. Analysis now has the required metadata and section order, U/A comparison, source-geometry clipping and current transmission; former sampling/RMS numbers and process wording were removed. Key, name, subtitle, specs and element type/label/glass fields were left for the next pass.

The five per-file structural predicates from analysisFiles.test.ts were checked directly and all pass; the prohibited full test command was not run. A before/after data-object comparison confirms only the four sd values, gapSagFrac, focus wording, catalog MFD and errata changed. The scoped git diff whitespace check passes.

Open (wording items closed by the 2026-11-14 cleanup below): clean up key/name conventions, the subtitle's “qualified no-filter computed-focus interpretation”, the specs' process wording and missing design/aspheric-element detail, generic element type/label fields and unmatched glass wording in the later cleanup pass. The source's stated 49 mm versus computed 49.903117 mm EFL, unspecified filter, exact production coefficients/apertures and absence of a published close station remain limitations. Historical independent calculations also find G1/G3 positive in isolation despite the patent's negative-power prose; those source statements do not justify changing the table. The former hidden status is closed: the coordinator set visible to true before cleanup. Full application regression and browser review belong to integration; no server exists for this branch, so screenshots and ignored Prettier checks were skipped as directed. No sandbox refusal occurred in this pass.

## 2026-11-14 — Cleanup and wording pass

Public fields: the subtitle changes from “CN 224176794 U — qualified no-filter computed-focus interpretation” to “CN 224176794 U, Example 1 — SongRaw AF 50mm f/1.2 Moonlit construction”. Specs retain “15 ELEMENTS / 10 GROUPS”; “3 ASPHERICAL SURFACES”, “INFINITY ONLY” and “QUALIFIED COMPUTED-FOCUS INTERPRETATION” become “2 ASPHERICAL ELEMENTS”, “F/1.2” and “MINIMUM FOCUS 0.52 m”. The three aspheric surfaces remain documented in the analysis. The header now identifies Example 1 and describes the 98% gap-sag limit in words. Key, name, maker, visibility and coordinator-supplied catalog fields are unchanged.

The description's 实施例一 at ¶0030–0032 supports source.example = { label: "Example 1", id: "1" }. The five cemented pairs shown in Fig. 1 and the SongRaw artwork are marked on both members as C1 (L1/L2), C2 (L3/L4), C3 (L8/L9), C4 (L10/L11) and C5 (L13/L14), with five matching doublets spanning S1–S3, S4–S6, S14–S16, S17–S19 and S22–S24. Generic “Lens” types become the house shape names from their front/rear radius signs; roles identify each element's position and cemented partner. All “Element N” labels remain unchanged. No APD tags are added: the published construction artwork identifies aspheres, not ED positions.

Glass labels: every old label was “Unmatched original Nd/Vd; approximate dispersion”. Each becomes “Unmatched (nd … / νd …)” using the printed pair below. These are wording changes, not catalog assignments; two-decimal indices cannot identify an exact catalog row. No nC/nF/ng or partial-dispersion data were present or removed.

| Elements | New label | Δnd | Δνd |
|---|---|---:|---:|
| L1, L15 | Unmatched (nd 1.81 / νd 40.7) | 0 | 0 |
| L2 | Unmatched (nd 1.49 / νd 70.4) | 0 | 0 |
| L3, L10 | Unmatched (nd 1.77 / νd 29.7) | 0 | 0 |
| L4, L9, L11 | Unmatched (nd 1.59 / νd 68.3) | 0 | 0 |
| L5 | Unmatched (nd 2.00 / νd 29.1) | 0 | 0 |
| L6 | Unmatched (nd 1.65 / νd 33.8) | 0 | 0 |
| L7, L13 | Unmatched (nd 1.88 / νd 40.8) | 0 | 0 |
| L8 | Unmatched (nd 1.61 / νd 37.0) | 0 | 0 |
| L12 | Unmatched (nd 1.92 / νd 20.9) | 0 | 0 |
| L14 | Unmatched (nd 1.85 / νd 23.8) | 0 | 0 |

Focus fields remain unchanged: focus.closeFocusM = 1e15; the description begins “Infinity focus only; production focuses by moving the middle group G2 (L7–L9)” and retains the U's focus direction and absence of numerical close-focus spacings. Marketing MFD remains 0.52 m. The fStops array gains the f/16 endpoint, documented by the stopped-down measurements in the [Phillip Reeve review](https://phillipreeve.net/blog/review-songraw-50mm-1-2-moonlit/); its existing f/1.25 design start is retained. The [SongRaw artwork reproduced by PetaPixel](https://petapixel.com/2025/04/07/new-company-songraw-unveils-first-lens-full-frame-af-50mm-f-1-2-moonlit/) supports 15/10 construction and two aspheric elements. No mount, format or other catalog metadata is added.

Analysis: added the requested H1, clarified the source example term, C1–C5 identities and printed-precision glass labels, stated the G1/G3 power contradiction, cited f/16 use, and removed the remaining sampling/process wording. The required section order, citations, U/A image-gap comparison, corrected image-plane decision, source errata, aspheric coefficients and all true optical numbers are retained. Historical audit text remains, with its obsolete cleanup/hidden status marked closed in place.

Engine numbers before → after: EFL 49.90311745758611 → 49.90311745758611 mm; FOPEN 1.25 → 1.25; half-field 23.790486344830388 → 23.790486344830388°; stop radius 21.985254253541743 → 21.985254253541743 mm; BFD 17.91466693210846 → 17.91466693210846 mm. Probe focus keys remain the same infinity configuration, with 119.064 mm track before the final gap and 136.97866693210847 mm total track. Direct data comparison confirms every radius, spacing, nd/νd, asphere, stop/focus field, rim, projection, geometry check and erratum is unchanged.

Scoped checks: audit:surface reports “OK — no validation errors”; audit:aperture reports one station within its default 3% tolerance and zero rim, trace, iris or failed limits; audit:field-coverage --all reports one station at ≥99%, zero unsolved and zero skipped. The default aperture tolerance still permits the documented S13/S14 source-geometry loss: 95.2% axial transmission, about f/1.28, with off-axis vignetting retained. Prettier and full application checks were skipped under the addendum. The prescribed screenshot helper produced thermal/power and DNS diagnostics but no PNG; browser review could not be completed and was not retried. No sandbox refusal occurred.

Open: the stated 49 mm versus calculated 49.903117 mm focal length; the unspecified omitted FIT filter; unknown exact production coefficients, glass identities and clear apertures; no published close-focus prescription; S13/S14 source-geometry clipping and the uncertain allocation of off-axis loss between design and inferred rims; the previously unresolved lower full-field marginal-ray solve; the patent's negative-power prose for G1/G3 despite their positive isolated powers; full application regression and rendered browser review. Rims and optics require a separate pass if these limitations are revisited.
