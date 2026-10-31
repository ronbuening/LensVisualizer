# Audit Log - CANON RF 100-500mm f/4.5-7.1 L IS USM

Patent: US 2021/0003832 A1, Numerical Example 2

## 2026-08-19 - Patent-figure, metadata, and glass audit

### Glass classification

- Rechecked the patent table and the retained first-party HOYA July 7, 2026 Zemax catalog.
- Added the distinct current TAFD45L formula-3 curve and labeled L33 as its coordinate-compatible modeling equivalent.
- L53 and L81 now name the already cataloged TAFD65 and FCD515 modeling equivalents. All three labels explicitly leave Canon's production supplier unspecified and retain the documented partial-dispersion caveats.
- Qualified the remaining OHARA names as catalog equivalents rather than production-supplier identities. Every one of the 20 authored coordinates resolves inside the catalog guard; no extra source-backed glass row remains to add.
- Removed catalog-derived `nC`/`nF`/`ng` fields so the compatible catalog curves supply C/d/F dispersion. Recomputed
  all 20 structured `dPgF` values from each patent `θgF` row using the runtime normal-line formula, making the
  patent-derived values authoritative for the violet-channel correction rather than preserving catalog deltas.
- Strict Sellmeier coverage rises from 17/20 to 20/20 elements with zero catalog-coordinate mismatches.

### Semi-diameter correction

- Inspected PDF page 5, Figure 3, Numerical Example 2 at the wide-angle end, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonRF100500mmf4571LISUSM.data.ts patents/US20210003832A1.pdf 5 0.09,0.27,0.80,0.66 --rot90 --dpi=600`.
- A manual reading of the terminal cemented L82/L83 optical rim measured about 17.5 mm; the automated row was
  contaminated by the L8 bracket and labels. Its draft 12.8-13.3 mm envelope was 31-37% too small; other reliable
  groups remained within roughly 5-24% of the figure.

| Surface |  Before |   After | Reason                              |
| ------- | ------: | ------: | ----------------------------------- |
| 33      | 12.8 mm | 17.2 mm | Proportional L82 front rim          |
| 34      | 13.0 mm | 17.5 mm | Figure-measured shared cemented rim |
| 35      | 13.3 mm | 17.9 mm | Proportional L83 rear rim           |

The supplied site screenshot was then compared directly with the same Figure 3 wide panel. Manual optical-rim
readings (excluding unit brackets, leader lines, element numbers, and the rear `G` block) give the following
whole-element check. `Data max` is the larger authored surface SD for that element; the drawing is not a published
clear-aperture table, so only deviations beyond the audit procedure's approximately 25% correction threshold justify
another edit.

| Element(s)            |         Figure rim |     Data max | Result                                                    |
| --------------------- | -----------------: | -----------: | --------------------------------------------------------- |
| L11                   |      about 35.3 mm |      44.1 mm | figure/data about 0.80; retain                            |
| L12 / L13             |      about 34.0 mm |      35.6 mm | figure/data about 0.96; retain                            |
| L21 / L22 / L23       | about 16.0-16.4 mm | 16.4-17.2 mm | figure/data about 0.93-1.00; retain                       |
| L31 / L32 / L33       | about 16.1-16.9 mm | 15.5-17.0 mm | figure/data about 0.99-1.04; retain                       |
| L41                   |      about 12.4 mm |      14.4 mm | figure/data about 0.86; retain                            |
| L51 / L52 / L53 / L54 | about 13.2-13.6 mm | 15.6-17.0 mm | figure/data about 0.79-0.85; retain                       |
| L61 / L62             |      about 12.4 mm | 14.1-14.5 mm | figure/data about 0.86-0.88; retain                       |
| L71                   |      about 15.6 mm |      15.2 mm | figure/data about 1.03; retain                            |
| L81                   |      about 15.1 mm |      12.8 mm | figure/data about 1.18; retain                            |
| L82 / L83             |      about 17.0 mm | 17.5-17.9 mm | figure/data about 0.95-0.97; corrected envelope confirmed |

No further SD adjustment is supported: all surfaces clear the image-circle floor, and every manually isolated optical
rim remains below the strong-evidence threshold. In particular, the recent L82/L83 enlargement now matches the
patent silhouette; the automated 26.9 mm result for those elements is the L8 bracket/label ink, not an optical rim.

### Diagram labels and movement directions

- Added bare-numeric `diagramLabel` values `11` through `83`, matching the individual element identifiers printed in
  Figure 3 and keeping them distinct from the patent's L1-L8 unit brackets instead of exposing unrelated runtime IDs
  `1` through `20`. The existing L1-L8 unit brackets, `12+13` through `82+83`
  cemented-pair labels, power signs, stop position, and element shape classifications agree with the source.
- Rechecked the patent-backed APD tags on L11, L13, L22, L31, L41, L54, L81, and L82 against paragraphs 0051-0058.
  Canon's production count of one Super UD and six UD elements does not map those product categories to individual
  patent rows, so no speculative UD/Super-UD tags were added.
- Confirmed the authored zoom controls are ordered wide, middle, tele (`103`, `225`, `490` mm). Relative to the fixed
  image plane, wide-to-tele moves L1 and L3-L8 object-side while L2 stays fixed; L4 correctly moves about 2.06 mm
  image-side at the middle control before reversing to a net 12.46 mm object-side shift at tele.
- Confirmed the Figure 3 dotted focus arrows and paragraph 0032: toward closer focus L4 moves object-side and L6
  image-side. The patent gives no finite-focus spacing row, so the model correctly leaves focus unavailable rather
  than inventing travel and now states both directions in the visible specification line.

### Identity and metadata

- Verified that `CANON RF 100-500mm f/4.5-7.1 L IS USM` matches Canon's product identity after repository spacing and `f/` normalization.
- Normalized the patent assignee to the catalog's canonical `Canon Inc.` spelling, preventing the same latent metadata failure exposed by the new 400mm file.
- Synchronized the analysis citation to the same canonical `Canon Inc.` display name.

## 2026-10-30 — Original-PDF shape, camera plate and glass review

- Fresh selected original `patents/US20210003832A1.pdf`: Numerical Example2 ¶0065 PDFp19/printed6, single-lens continuation p20; Figure3 PDFp5/Sheet4, Figures4A–C pp6–7. Definitions ¶0062–63 PDFp18/printed5. Native front page confirms Masato Katayose, Junya Ichimura, Canon applicant, priority2019-07-02, filing2020-06-09, publication2021-01-07. Previous audit dates retained.
- All pages native2560×3300 bilevel300ppi; figure rotated/cropped without upsampling. Previous600dpi views are2× enlargements. S1→S35 wide vertex span200.38mm / about2183native pixels gives.0918mm/pixel; R1 sag independently checks the isotropic scale (about59px→5.42mm at35.6mm vsprintedR119.358 sag5.43mm). Two-pixel contour uncertainty≈.18mm, bonded short-endpoint≈.3mm. Leaders/rays/brackets and barrel OD excluded.
- Shape changes: replaced prior largely0.6-field ray-envelope/barrel-bound rims with the native optical contour measurements. Analysis table records all20 elements/34 faces, including six bonds and every concave end. Source-supported reductions dominate front/middle units; terminal small elements raised to the figure where physical. No R/d, asphere, stop or cam fitting; source is all-spherical with no hybrid layer.
- Retained constraints/rejected trials: S7 full16.1 gives sag4.52>3.879mm allowed across4.310mm gap; adopted14.9. S32 full15.4 gives4.49>4.131 across4.590; even14.8 gives4.14>4.131, adopted14.7. The front L12/L13 bond's short endpoint is kept as≈33.0 optical cap below34.2 outer box, without an opaque bonded land. These deliberate outline differences remain in actual SVG. No extensions, cuts or source exemptions.
- Separate source restoration: original camera-side G, S36–37, has t1.00mm, nd1.51633/vd64.14/theta_gF.5353, trailing air1.00mm. Restored via rearPlates with literal physical D35=19.48/30.43/61.91, replacing21.139487/32.089487/63.569487 reduced folds. No plate diameter is printed, so generated plate rim does not clip. ¶0062 identifies filter/faceplate type, not a lens-holder drop-in filter.
- ¶0063 defines source BF/overall using air-equivalent BF. Restored physical image plane moves back.340512949mm; EFL unchanged at all source stations and paraxial defocus differs only≈5.1e−8mm from former rounded fold. Physical tracks221.86/284.51/311.86; air-equivalent221.519487/284.169487/311.519487. Source middle overall284.18 vsliteral284.169487 (rounds284.17) formally unresolved in source.errata; rounding hypothesis unproved, no numerical spacing replacement.
- Glass: all20 source lens rows and G checked directly, explicit d reference from¶0062 (d587.6/g435.8/F486.1/C656.3nm). All20 published theta-derived dPgF retained (max arithmetic residual1.3e−16); plate source-derived dPgF−.00061652 added. Zero numerical C/F/g overrides existed/removed/added. Twenty-one compatible curves qualified, including G S-BSL7; supplier/melt/chemistry unidentified. Product UD categories remain distinct from the source's numerical/APD conditions.
- Catalog source-design metadata corrected from computed102.988151/489.985751 to printed103/490; source apertures4.60/5.16/7.20 unchanged. Source EFL computation102.988151/225.038656/489.985751 and residuals−.010945/+.012809/−.003351mm qualified separately. All active sourceR/d/media values and all source zoom/focus controls retained.
- Controls:65 zooms include3 source states/62 intervals; all1365 zoom×focus configurations checked geometry-identical acrossfocus (infinity-only). Actual ray census65 unique states/9555 aimed samples:3121/3185 axial,195/195 chiefs,0 unaimed. Source bundles49/42/27,49/47/31,49/42/34;16 intervals clip4 marginal samples atS17/S18. Effective-aperture deficit max1.9043% atz.296875,0 over3%; requestedf5.6 leaves8 clipped samples, f8 clearsall3185axial. No new finite-focus model.
- Maximum illustrative-interval defocus+9.827377830mm atz.8125. Published three stations retained; source does not validate the linear interval cam. Actual20 SVG paths finite/closed/connected acrossall65 geometries,0 hidden trim. Source canonical surface/aperture/image-circle/runtime-corner checks pass; no cuts. Published11.86/5.49/2.53° chiefs21.628196/22.006767/22.039963mm,99.90/101.65/101.80% generic full-frame (radius 21.65 mm). Source fidelity, sampled clearance and production correlation remain separate; IS centered, focusgeometryduplicated, source chemistry unknown.


## 2026-10-31 — Source-vector catalog follow-up

Exact local original US 2021/0003832 A1, Numerical Example 2, paragraph 0065 PDFp19/printed6. Paragraph 0062 PDFp18/printed5 explicitly defines every numerical nd/νd at d587.6nm and θgF using g435.8/F486.1/C656.3nm. All twenty element indexReferenceNote strings positively cite that definition and their printed θ row; none describes uncertainty in the spectral reference. The separate rearPlate G note is retained unchanged. Move exactly these20 positive citations to the data header and the source table below, preserving the explicit d references and every θ-derived dPgF field. This restores inspector nd/νd semantics and inventory eligibility without changing any traced channel. No genuine reference-uncertainty note is removed.

Retain FCD515 for L81/E18, source row31, nd1.59282/νd68.63/θgF0.5446. H-ZPK5's raw catalog θ0.544704470 is closer than FCD515's0.544115342, but its Abbe residual worsens from0 to−0.29 and source-implied F−C span error grows from+0.008915% to+0.417982%. The patent's two-decimal ν row does not support that trade. Both curves already trace θ0.5446 because the unchanged source-derived partial controls g, so the swap would not improve the authoritative partial. No candidate-based source or production material identification is made.

The claimed material bounds in paragraph 0033/PDFp16 (−0.00047ν+0.5666<θ<−0.00047ν+0.5966 and−0.00274ν+0.7144<θ) remain distinct from the model's0.6438−0.001682ν conversion line. Every source ratio below remains literal; the eight-decimal derived values express arithmetic, not melt precision. Source four-decimal θ/two-decimal ν precision implies roughly±0.00006 in the converted deviation. All20 lens partials and G's separate genuine partial are preserved, along with all21 index/Abbe pairs and21 existing compatible curves.

Figure 3 PDFp5/sheet4 is a native 2560×3300 bilevel page at 300 ppi. The complete air-spaced L81, following L82/L83 bond and camera-side G remain as previously reviewed; no dimensions are remeasured or fit here. The completed 2026-10-30 whole-lens shape coverage and older August19 date remain reused. No source R/d, caps, tight-end constraints, camera plate thickness/gaps, source errata, infinity-only focus controls, interpolated-state limitations or production-correlation qualifications change.

This is a scoped source/catalog assignment follow-up, not a new whole-lens shape review. Source reference/table pages were rendered at180dpi, separately from native figure pixels. No upsampled figure detail is treated as new evidence. The preserved production-correlation and sampled-runtime limits remain separate from source fidelity. No shared catalog row, tolerance, test or engine change is introduced.

| Element | Source row | Literal source θgF |
| --- | ---: | ---: |
| L11 | 1 | 0.5375 |
| L12 | 3 | 0.5633 |
| L13 | 4 | 0.5340 |
| L21 | 6 | 0.5434 |
| L22 | 8 | 0.5375 |
| L23 | 9 | 0.6136 |
| L31 | 11 | 0.5375 |
| L32 | 13 | 0.5933 |
| L33 | 14 | 0.5898 |
| L41 | 17 | 0.5375 |
| L51 | 19 | 0.6004 |
| L52 | 21 | 0.5457 |
| L53 | 22 | 0.6054 |
| L54 | 24 | 0.5375 |
| L61 | 26 | 0.5938 |
| L62 | 27 | 0.5520 |
| L71 | 29 | 0.5300 |
| L81 | 31 | 0.5446 |
| L82 | 33 | 0.5375 |
| L83 | 34 | 0.5834 |
| Rear block G |36–37|0.5353|
