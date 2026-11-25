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

Open: the stated 49 mm versus calculated 49.903117 mm focal length; the unspecified omitted FIT filter; unknown exact production coefficients, glass identities and clear apertures; no published close-focus prescription; S13/S14 source-geometry clipping and the uncertain allocation of off-axis loss between design and inferred rims; the previously unresolved lower full-field marginal-ray solve; the patent's negative-power prose for G1/G3 despite their positive isolated powers; full application regression. Rendered browser review is closed by the second review below. The figure-based rim and land review is completed below; those source and tracing limitations remain open.

## 2026-11-14 — Semi-diameter pass against the patent figure

Source: local CN224176794U.pdf, PDF pages 12/13, U Fig. 1/2, not the earlier A publication's layout. The native scan is 2480 × 3508 pixels at 300 dpi. Fig. 1 supplies clean optical curve endpoints and flat lands. Fig. 2 shows the tabulated infinity layout, with G2 close to G3; Fig. 1 places G2 farther objectward and is used for element outlines rather than focus spacings. No effective-diameter column is printed in Table 1. All optical sd values, including the binding S3/S4 19.05/19.08 mm and S13/S14 19.78 mm, are retained; gapSagFrac remains 0.98. Only four rimExtensionSd fields are added.

Scale: the local Fig. 1 axis is column 1240. Native vertex rows S1 ≈2567 and S10 ≈1960 span 607 px for 38.992 mm, or 15.5673 px/mm. Independently, S17 ≈1268 and S26 ≈719 span 549 px for 35.433 mm, or 15.4940 px/mm, a 0.47% difference. The full S1–S26 span gives 1848/119.064 = 15.5211 px/mm; S1–stop gives 719/46.345 = 15.5141 px/mm. A transverse arc check on S22, R = 42.029 mm, from its vertex near (1240, 992) to (1520, 929) gives a pixel circle radius of about 653.7 px, or 15.55 px/mm. This confirms approximately equal axial and transverse scale. Fig. 1's stop-to-S12 span is about 107 px = 6.89 mm, rather than the infinity 15.594 mm: G2 is about 8.7 mm objectward in that drawing. No focus table is inferred from this.

Every optical rim was screened at 15.5211 px/mm. Figure readings below are approximate to 0.2 mm, excluding leaders, brackets, ray ink, the image plane and FIT. Ratios are figure/stored sd; differences remain inside approximately 5%, and several retained caps sit above the drawing to clear the axial beam. Cemented interfaces remain free of lands.

| Surface | Retained sd (mm) | Fig. 1 optical endpoint (mm) | Figure/stored |
|---|---:|---:|---:|
| S1 | 20.07 | 20.1 | 1.00 |
| S2 | 20.00 | 20.1 | 1.01 |
| S3 | 19.05 | 18.8 | 0.99 |
| S4 | 19.08 | 18.9 | 0.99 |
| S5 | 22.00 | 22.0 | 1.00 |
| S6 | 22.59 | 22.0 | 0.97 |
| S7 | 24.65 | 23.8 | 0.97 |
| S8 | 24.74 | 23.8 | 0.96 |
| S9 | 23.05 | 22.0 | 0.95 |
| S10 | 22.10 | 22.0 | 1.00 |
| S12 | 20.86 | 20.3 | 0.97 |
| S13 | 19.78 | 19.6 | 0.99 |
| S14 | 19.78 | 19.8 | 1.00 |
| S15 | 20.18 | 19.8 | 0.98 |
| S16 | 20.16 | 19.8 | 0.98 |
| S17 | 20.50 | 20.8 | 1.01 |
| S18 | 20.50 | 20.8 | 1.01 |
| S19 | 20.50 | 20.8 | 1.01 |
| S20 | 22.30 | 22.3 | 1.00 |
| S21 | 22.30 | 22.3 | 1.00 |
| S22 | 20.50 | 20.6 | 1.00 |
| S23 | 20.50 | 20.6 | 1.00 |
| S24 | 17.09 | 17.3 | 1.01 |
| S25 | 17.09 | 17.5 | 1.02 |
| S26 | 17.30 | 17.5 | 1.01 |

The visible disagreements are missing flat lands, rather than optical radii. The following values are total drawn semi-diameters, not additional aperture. No existing sd, innerSd, rim cut or check changes.

| Surface | sd before → after (mm) | Drawn face edge before → after (mm) | Evidence |
|---|---|---|---|
| S3 | 19.05 → 19.05 | 19.05 → 20.00 | Native rows 2371–2372 draw a short horizontal land from columns about 1531–1532 to 1550–1552; the first doublet's outer edge is about 20.1 mm. Keep the approved cap and match its 20.00 mm cemented/outer body. |
| S4 | 19.08 → 19.08 | 19.08 → 22.00 | Rows 2362–2363 draw a land from column 1534 to 1583–1584: approximately 18.9 → 22.1 mm. Match the existing S5 body rather than enlarge the optical cap. |
| S13 | 19.78 → 19.78 | 19.78 → 20.86 | Rows 1637–1640 show the L7 rear curve ending inside its outer edge. Keep the binding cap and match the S12 edge. S12's axial marginal ray is 20.74 mm, above its approximately 20.3 mm figure reading, so its 20.86 mm body is retained. |
| S24 | 17.09 → 17.09 | 17.09 → 20.50 | Row 774 has a clear horizontal land around columns 1509–1559, approximately 17.3 → 20.6 mm. Match S22/S23's 20.50 mm body; the optical curve remains at 17.09 mm. |

These four extensions exceed 0.1 mm, occur only at glass/air boundaries, and retain all optical caps. Trial geometry passed before edits. The complete final set passes the surface check; image-circle check reports one lens, zero undersized and zero skipped; field coverage reaches 22.00/22.00 mm (100%) at about 23.8°, with zero unsolved/skipped stations. Default aperture audit reports no limits within its 3% tolerance. This is one infinity station only: no printed finite station exists. The clear-aperture trace is numerically unchanged: S13/S14 marginal heights 20.26/20.30 mm still exceed 19.78 mm; no chief ray is blocked. Its lower full-field marginal solve still reports no-ray-found. The previous LSA check is 0.168/0.124/0.056/0.007 mm at pupil fractions 1/0.85/0.7/0.5; no rim was raised for this pass. No aspheric sd changed, so no quoted clear-aperture sag or departure changes.

Built values before → after: EFL 49.90311745758611 → 49.90311745758611 mm; FOPEN 1.25 → 1.25; authored half-field 23.790486344830388 → 23.790486344830388°; tracing half-field 24.744000265746717 → 24.744000265746717°; iris radius 21.985254253541743 → 21.985254253541743 mm. Stop position, prescription, focus, glass and metadata are untouched.

The final rimcost comparison against base1125sd, with element-by-element restoration enabled, gives identical geometric transmission at all nine sampled fields: 95.2, 89.9, 82.7, 75.6, 67.8, 59.5, 51.0, 42.0 and 32.8%, from axis through 23.8°. Corner illumination is 32.8% → 32.8%; worst loss is 0.0 percentage points. Restoring each of S3, S4, S13 and S24 separately also changes transmission by 0.0 points. Thus every land meets the light rule. Remaining axial transmission is 95.2% (area-equivalent aperture about f/1.28), with substantial off-axis vignetting retained.

Rendered review: the prescribed sketch was also copied into scratch with explicit rimExtensionSd support, since its stock straight joins omit lands. The final PNG and matched-scale comparison were viewed. The lands restore the source's square steps, while other rim heights remain within the drawing's uncertainty. The comparison is saved at `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-4b6LS6/fcefa615-105e-4bd7-925a-ed68ad81cb71/scratchpad/sd/songraw50/overlay.png`; its source/model panels share 15.5211 px/mm and align at S1, with the different G2 drawing position explicitly labeled. The model uses infinity spacings; the figure's unspecified FIT plate and printed image gap are not reproduced. No browser was used under this addendum; the coordinator retains the live-page check.

The supplied PetaPixel/SongRaw artwork was viewed: 15 elements, ten groups, five cemented pairs and the ordered shapes agree; aspheric elements are L1 and L15. It gives proportions only, omits an explicit iris and does not identify ED/APD positions. Its G2 separation differs from the U infinity drawing; it is not a ruler for rim values. The patent front page was re-read: inventor 昌宇文 (Yuwen Chang), applicant 深圳市松若摄影设备有限公司 (Shenzhen Songruo Photography Equipment Co., Ltd.), CN 224176794 U, published April 28, 2026; filed June 11, 2025, priority 202411609438.X dated November 12, 2024. No new name or bibliographic metadata problem was found. The existing 49 mm/computed EFL difference, unspecified FIT and corrected final image gap remain outside this pass. No iris/stop change is recommended or applied: retain the printed stop position and design f/1.25 derivation, with the source-geometry f/1.28 limitation disclosed. No sandbox refusal occurred.

Final scope check against the committed SD baseline finds exactly four new surface fields, all rimExtensionSd, with every existing surface value and every non-surface data field identical. The scoped whitespace check passes. Prettier write/check was invoked only for these three files; the repository ignores Markdown and src/lens-data, so it made no formatting edits and does not certify their formatting. No full application, build, metadata-generation or state-changing git command ran.

## 2026-11-14 — Glass labels, name and mount metadata

Glasscheck on the current data file resolves 14 of 15 elements to compatible catalog rows; L14 is unresolved by design. The following records the coordinator's existing label changes from the preceding cleanup, not additional data edits. For each proxy below, the complete new label is `ROW (VENDOR spectral proxy; matches the patent's nd N / νd V at its printed precision; supplier unconfirmed)`, with ROW/VENDOR from the new-label column and N/V from the old label. Each listed row is also the row returned by glasscheck. Δnd/Δνd are catalog minus printed values, using glasscheck's five-decimal index and two-decimal Abbe output; the stored patent values are unchanged.

| Element | Old label → new label (row / vendor) | Δnd | Δνd |
|---|---|---:|---:|
| L1 | Unmatched (nd 1.81 / νd 40.7) → L-LAH84 / OHARA spectral proxy | −0.00165 | −0.15 |
| L2 | Unmatched (nd 1.49 / νd 70.4) → H-QK3L / CDGM spectral proxy | −0.00251 | +0.04 |
| L3 | Unmatched (nd 1.77 / νd 29.7) → NBFD29 / HOYA spectral proxy | +0.00047 | +0.04 |
| L4 | Unmatched (nd 1.59 / νd 68.3) → H-ZPK5 / CDGM spectral proxy | +0.00280 | +0.04 |
| L5 | Unmatched (nd 2.00 / νd 29.1) → TAFD55 / HOYA spectral proxy | +0.00100 | +0.03 |
| L6 | Unmatched (nd 1.65 / νd 33.8) → H-ZF1 / CDGM spectral proxy | −0.00231 | +0.04 |
| L7 | Unmatched (nd 1.88 / νd 40.8) → S-LAH58 / OHARA spectral proxy | +0.00300 | −0.03 |
| L8 | Unmatched (nd 1.61 / νd 37.0) → S-TIM3 / OHARA spectral proxy | +0.00293 | +0.01 |
| L9 | Unmatched (nd 1.59 / νd 68.3) → H-ZPK5 / CDGM spectral proxy | +0.00280 | +0.04 |
| L10 | Unmatched (nd 1.77 / νd 29.7) → NBFD29 / HOYA spectral proxy | +0.00047 | +0.04 |
| L11 | Unmatched (nd 1.59 / νd 68.3) → H-ZPK5 / CDGM spectral proxy | +0.00280 | +0.04 |
| L12 | Unmatched (nd 1.92 / νd 20.9) → E-FDS1 / HOYA spectral proxy | +0.00286 | −0.02 |
| L13 | Unmatched (nd 1.88 / νd 40.8) → S-LAH58 / OHARA spectral proxy | +0.00300 | −0.03 |
| L14 | Unmatched (nd 1.85 / νd 23.8) → unchanged | — | — |
| L15 | Unmatched (nd 1.81 / νd 40.7) → L-LAH84 / OHARA spectral proxy | −0.00165 | −0.15 |

All proxies satisfy the site's proxy tolerance: |Δnd| ≤ 0.003 with the row matching the printed index digits, and |Δνd| ≤ 0.25. They supply catalog dispersion anchored at the printed index, not evidence of a supplier or production melt. Exact production glasses remain unconfirmed. L14 has no row inside the window: the S-TIH53 / FDS90 class has nd 1.84666 (Δnd −0.00334), outside the index limit despite its close Abbe number. Catalog metadata gives S-TIH53 νd 23.7779 (Δνd −0.0221) and FDS90 νd 23.78 (Δνd −0.02); trylabel rejects both at 1.85 / 23.8. L14 therefore retains the Abbe fallback.

Sources: CN 224176794 U Table 1 supplies the printed pairs; the site's `src/optics/glassCatalog.ts` catalog, read through `glasscheck.mjs`, supplies the compatible rows and differences. `src/optics/chromatic/glassCatalogEntries/ohara.ts` records S-TIH53 from the OHARA 2017-11-30 AGF; `hoya.ts` records FDS90 from HOYA20260707_include_obsolete.agf. The TEXT_ADDENDUM_1125.md songraw50 assignment supplies the scope. No name or mount change is assigned; the existing name and Sony FE / Nikon Z metadata remain unchanged. No APD inference is added.

Analysis changes replace the blanket unknown/Unmatched claims with the proxy table, explain the L14 exception and qualify spectral conclusions. The earlier semi-diameter section and all historical audit decisions remain intact. The data file is untouched; its SHA-256 remains 3106fd6bf7ba54f452f35f61154cd500d45123e3282a889f541da756912033af.

Before/after built and probe outputs are identical: EFL 49.90311745758611 mm, FOPEN 1.25, authored half-field 23.790486344830388°, tracing half-field 24.744000265746717°, stop radius 21.985254253541743 mm and infinity image gap 17.91466693210846 mm; both focus-key outputs retain BFD 17.9147 mm at the probe's displayed precision. The scoped surface audit reports “OK — no validation errors”; the scoped whitespace check passes. The screenshot helper was attempted once, emitted thermal/power and DNS diagnostics, and produced no PNG, leaving rendered review open. No full application, typecheck, lint, build or generation command ran. No sandbox refusal occurred.

## 2026-11-14 — Second review: diagram, labels and movement

Compared the supplied current page and inspector images with local CN224176794U.pdf, front page, Tables 1–2 (PDF pages 7–8), ¶0046–0074 (pages 8–10), and Figures 1–2 (pages 12–13). The supplied PetaPixel/SongRaw artwork was viewed directly: 15 elements, ten optical groups, five cemented pairs and aspheric L1/L15 agree; no ED/APD positions are identified. Figure 4 on page 15 is the separately identified Sony comparison construction, not the modeled lens, and its ED/XA marks are not transferred.

Independent native-image inspection confirms the axis at x = 1240, S1 near row 2567, stop near 1848, S17 near 1268 and S26 near 719. S1–stop gives 719/46.345 = 15.5141 px/mm; S17–S26 gives 549/35.433 = 15.4940 px/mm. The earlier full fixed-group scale 15.5211 px/mm is consistent with these spans. The transverse S22 arc check, from vertex (1240, 992) through (1520, 929), gives 15.5541 px/mm. Thus no material anisotropy invalidates the earlier readings. Fig. 1 places G2 approximately 8.7 mm objectward of its infinity-table position; Fig. 2 supplies the infinity layout. This difference is labeled on the matched-scale comparison, not treated as a new focus state.

All optical rims remain unchanged, including binding S3/S4 = 19.05/19.08 mm and S13/S14 = 19.78 mm at gapSagFrac 0.98. The small remaining height and bevel differences lie within the previous reading uncertainty or the documented axial-ray floors; no new rim change is supported. Every sd equals the base1125sd file, so there are no cuts against that baseline. The four existing lands remain:

| Face | Baseline sd / land (mm) | Final sd / land (mm) | Independent figure evidence | Light cost / verdict |
|---|---|---|---|---|
| S3 | 19.05 / none | 19.05 / 20.00 | Rows 2371–2372, x1531–1552: cap about 18.8 mm and outer edge about 20.1 mm; square first pair. | 0.0 points; keep, no light loss. |
| S4 | 19.08 / none | 19.08 / 22.00 | Rows 2362–2363, x1534–1584: cap about 18.9 mm and outer edge about 22.1 mm. | 0.0 points; keep, no light loss. |
| S13 | 19.78 / none | 19.78 / 20.86 | Rows 1639–1640 show the rear land; body matches S12, whose 20.74 mm axial ray exceeds the approximately 20.3 mm drawing. | 0.0 points; keep, no light loss. |
| S24 | 17.09 / none | 17.09 / 20.50 | Row 774, x1509–1559: cap about 17.3 mm and outer edge about 20.6 mm; square fifth pair. | 0.0 points; keep, no light loss. |

The final full-pupil rimcost comparison with base1125sd, including each element's restoration, reports worst loss 0.0 percentage points. Each individual land removal wins back 0.0 points. Baseline → final transmission is 95.2 → 95.2% on-axis, 67.8 → 67.8% at half-field and 32.8 → 32.8% at the 23.790486° corner; all nine sampled fields are identical. No near prescription exists, so no finite-object corner result is claimed.

Changes made:

| Field | Before → after | Evidence |
|---|---|---|
| Functional brackets | Absent → G1 S1–S10, G2 S12–S16, G3 S17–S26 | Table 1 and Fig. 1; no power suffix added because G1/G3 prose contradicts the table. |
| Element focalLengthMm, L1–L5 | Missing → +63.15, −56.79, −35.97, +53.49, +56.56 mm | Isolated thick-element-in-air probe results, rounded to two decimals. |
| Element focalLengthMm, L6–L10 | Missing → −134.56, +128.80, −45.09, +44.05, −41.87 mm | Same calculation; these values already agree with the analysis table. |
| Element focalLengthMm, L11–L15 | Missing → +52.66, +53.83, +60.67, −36.53, −168.91 mm | Same calculation; replaces the inspector's FL dash. |
| Focus description | Production assertion → U-patent mechanism, explicitly fixed G1/stop/G3 and objectward G2 near-focus direction | ¶0047 and ¶0053; no numerical focus change. |

Names L1–L15 agree with the patent; all radius-sign shape strings and roles were rechecked. C1–C5 correctly span S1–S3, S4–S6, S14–S16, S17–S19 and S22–S24. The live asphere markers and inspector badges identify only S1 and S25/S26, consistent with Table 2. No APD tags are justified or added. The stop stays at printed S11, 7.353 mm behind S10; no iris relocation is proposed.

Movement verdict: no zoom, no variable gaps and no focus keyframes. G1, stop and G3 are fixed. For G2, infinity has stop-to-S12 15.594 mm and S16-to-S17 1.000 mm; ¶0053 places it at its image-side boundary. Nearer focusing therefore decreases the first gap and increases the second, toward the object. Neither near spacings nor total travel are printed. Probe endpoints remain identical infinity configurations; the marketing 0.52 m distance does not supply a close station.

Glasscheck resolves all 14 existing proxies within the site's proxy tolerance, with maximum |Δnd| 0.003 and maximum |Δνd| 0.15. No label changes or catalog-row additions are proposed. L14 alone remains Unmatched (1.85/23.8). Table 1 page 7 and ¶0068 page 10 give only that pair, without a glass name, line indices or partial dispersion. The U contains one numerical example; page 11 supplies ranges, not a second prescription. Glassnear and vendor-AGF searches give no qualifying replacement. J-SF03, FDS90 and S-TIH53 at nd 1.84666 miss the index window by 0.00034; trylabel rejects them. OHARA PBH55, absent from the site's catalog, has nd 1.849860 / νd 24.054274 in tmp/pdfs/ohara-260701/OHARA_260701.AGF line 6747: Δνd = +0.254274, beyond 0.25 despite the helper's rounded 24.05 display. It is not a qualifying backfill proposal. All 15 elements retain nd and νd; there is no nd-only medium. L14 uses an Abbe estimate. Pages 14–15 contain MTF plots and the comparison construction; no C/d/F/g focus, astigmatism or distortion curves support a direct line-by-line colour comparison.

Assignee review: front-page 深圳市松若摄影设备有限公司 supports Shenzhen Songruo Photography Equipment Co., Ltd.; this exactly matches both SongRaw files. No spelling variant needs consolidation. Source metadata is unchanged.

Built before → after: EFL 49.90311745758611 → 49.90311745758611 mm; FOPEN 1.25 → 1.25; authored half-field 23.790486344830388 → 23.790486344830388°; tracing half-field 24.744000265746717 → 24.744000265746717°; stop radius 21.985254253541743 → 21.985254253541743 mm. The binding final gap remains 17.91466693210846 mm. Surface audit reports OK, aperture audit has zero rim/trace/iris/failed limits within its default 3% tolerance, image-circle audit has zero undersized/skipped, and field coverage is 22.00/22.00 mm with zero unsolved/skipped. The already recorded S13/S14 axial clipping and lower full-field no-ray-found remain; the aperture tolerance does not erase them.

Post-edit shots were read at the infinity page, focus=1, both movement overlays, and inspectors L1/L14/L15. G1–G3 labels render beneath their correct elements, C1–C5 stay distinct, squared lands remain visible, and the inspected focal lengths are populated with correct signs. Both movement overlays state no modeled focus or zoom movement. The focus control remains labeled infinity / Not modeled, including at focus=1. The matched-scale red-final/blue-baseline comparison is /private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-4b6LS6/fcefa615-105e-4bd7-925a-ed68ad81cb71/scratchpad/sd/songraw50/rv-side-by-side.png. A post-edit live shot is /private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-4b6LS6/fcefa615-105e-4bd7-925a-ed68ad81cb71/scratchpad/sd/songraw50/rv-page.png; inspector shots are rv-el1.png, rv-el14-final.png and rv-el15.png in that directory. Rendered browser review is closed. A screenshot-queue filename collision affected one request; a later sequential L14 request produced the correct image. No sandbox refusal occurred.

Final scope comparison with the saved pre-review data confirms only the 15 focal-length additions, functional groups and focus wording changed in the data object; the header line wrapping is also corrected. Every surface and all existing optical, source and catalog values are identical. Scoped diff whitespace checks pass. Prettier check exits successfully, but file-info marks all three files ignored, so it does not certify formatting; the quoted-key data style and existing formatting are preserved. No prohibited full test, typecheck, lint, build, generation, server or state-changing git command ran. Only the assigned three lens files were edited outside scratch.

Open: source-stated 49 mm versus computed 49.903117 mm (page 6); omitted unspecified FIT (page 6 / Fig. 1); unknown production coefficients, glass identities and clear apertures; no finite prescription; residual S13/S14 axial loss, lower full-field marginal solve and uncertain off-axis-loss allocation; negative-power G1/G3 prose despite positive table-derived isolated powers (page 8); full application regression outside this scoped review. No prescription, iris, catalog, assignee or changelog edit was made.
