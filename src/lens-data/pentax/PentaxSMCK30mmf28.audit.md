# Pentax 30mm Example 2 bounded pilot audit

Status: Historical hold closed by Deployment validation (2026-11-12) below; construction passes and the widened rear rims transmit the corner chief. Iris placement remains inferred.

## Historical v1 construction failure (superseded only by the additive v2 result below)

Fresh strict TypeScript program passed with zero diagnostics. Root-level ../types/lensDataV2.js import and transpilation passed; diagnostic input equals transcribed data.

Native buildLens rejected surface 4: authored schematic semi-diameter15mm exceeds its absolute scaled spherical radius12.939mm, producing a reported rim slope1159285.88 (90°), above the default2.06 (64.2°) guard. No override was used. No ray trace or EFL from the native engine was therefore produced. FIELD_DIAGNOSIS.json has zero fields and the construction error; this is NOT an all-rays-pass result.

The initial caps were inferred from whole mechanical-looking rims in patent Fig3 using first-to-last axis scale. This failing surface shows that an outline extent cannot be treated as that spherical optical cap's usable clear aperture. Literal radii/gaps and all glass values remain untouched. Do not simply increase a geometry allowance or fit an aperture to a desired ray result.

Next step (closed by the additive R4 review below): independent surface-specific figure/cap review, distinguishing steep negative-meniscus edge/rim geometry from its usable spherical optical zone. A source-supported smaller optical cap may be considered with explicit evidence, or the draft stays held. No cap change had been made at this historical result.

The manuscript source-plane discrepancy remains independent: BFL 37.2 mm derived from the printed 1.24F versus paraxial 37.2550125436 mm. No refocus. Raw E2 scalar EFL29.9968299658mm is inherited from the admission replay, not fresh successful native construction. The source's sodium d-line wording was initially interpreted as sodium D; this interpretation is superseded by the catalog evidence and helium-d reference recorded below.

Primary full-source provenance, source/production qualification, and fresh current-main/open-PR/room screening are in the adjacent source-screen checkpoint. Those checks do not imply complete global archive content dedup. Full integration, compiled viewer, mesh/render comparisons, and detailed field/MTF validation have not run. No factory-identity or final-readiness claim.

## Additive R4 face-boundary review

The original v1 assigned the whole L2 mechanical shoulder radius15mm to both faces and failed the native R4 spherical-domain guard. Figure3 independently shows the R4 curved face ending at the bevel near pixels(466,344) and(465,535), axis437. The smaller93pixel extent at0.11691495mm/pixel gives10.8731mm, conservatively rounded down to10.8mm. Only R4 optical semi-diameter changes in v2; R3 retains15mm. This is a schematic optical-face inference with about±0.35mm plus drawing distortion, not a printed factory dimension or ray-fitted cap. All R/d/nV, sourceimageplane and stop remain unchanged, with no override. The failed v1 remains preserved. Fresh bounded results are recorded separately; no further aperture tuning is permitted in this pass.

Fresh v2 strict TypeScript and native construction pass without overrides. Bounded25-pupil-plus-chief samples: axis26pass;18°19pass/7clip;27°15pass/11clip;36°9pass/17clip. At36° the chief itself clips at runtime surface index12 and the bundle adapter returns unavailable. This historical corner-chief failure was closed by the rear-rim changes in Deployment validation below; the sample counts describe the earlier rims. R4_ONLY_CHANGE_RECEIPT.json records exact invariants and native aperture. Full corpus, compiled viewer and MTF had not run at this historical stage.

## Deployment validation (2026-11-12)

- Source: US 3,975,091 A (Google Patents PDF, `patents/US3975091A.pdf`), Example 2. 14 R, 13 d and 7 nd/νd match the
  page 5 images; every length is the patent value × 0.3. EFL 29.997, F/2.8; back focus 37.255 paraxial vs 37.2 from the
  printed 1.24F. Claim 2's R12 = −58.97 conflicts with the table (it gives EFL 34.1); the table's −53.97 is kept.
- Product: the Asahi brochure and PentaxForums confirm 7 elements / 7 groups, 72°, 0.30 m, K mount, 1975; the
  published section's rear meniscus favours Example 2 over Example 1.
- Integration fixes:
  - Rear rims raised so the 36° corner chief ray passes (it was blocked at surfaces 12 and 14): 11/12 8.3 → 8.6,
    13/14 10.2 → 10.4 (chief heights 8.55 and 10.35 mm). Field coverage now ≥99 %, no axial clipping.
  - `indexReference` D → d on all seven glasses (S-FSL5 1.48748993 at d vs 1.48742765 at D).
  - Assignee "Asahi Kogaku Kogyo Kabushiki Kaisha" → "Asahi Kogaku Kogyo Co., Ltd." (registry form).
  - Added `lensMounts` pentax-k and `catalog.closeFocusM` 0.3 m; focus sentinel 1e15.

## 2026-11-12 — Cleanup and wording pass

The validation report and saved Table 2 / Figure 3 images were re-read. The 14 radii, 13 thicknesses/gaps and
seven nd/νd pairs agree with the model's dimensions; d6 is split around the inferred iris. No aspheres or variable
gaps are printed. Table 2 retains R12 = −53.97 despite claim 2's −58.97. The 37.2 mm image gap is derived from
1.24F, not printed in millimetres. The published rear meniscus favours Example 2 over Example 1; factory identity
remains unproven. The Asahi brochure (PDF pp. 4, 11) and PentaxForums are cited in the analysis for the production
section and specifications. The direct maker-diagram image was not independently verified in this pass.

Added a source-and-scope header; replaced the process-heavy subtitle with “US 3,975,091 A, Example 2 — probable
match to the 1975 production lens”; replaced the old specs with 7 ELEMENTS / 7 GROUPS, DESIGN f = 30 mm,
f/2.8–22, ALL SPHERICAL and CLOSE FOCUS 0.30 m. `catalog.focalLengthMm.design` remains the scaled patent focal
length, following PentaxSMCK24mmf28, rather than rounded traced EFL. The infinity-only description now states the
absence of finite-focus spacings and the production lens's manual focus to 0.30 m. `focus.closeFocusM` remains
1e15; the coordinator's mount, format, marketing close focus, assignee and helium-d references are preserved.
No additional metadata was added.

Element shapes now use the house meniscus/biconvex/biconcave names, with short positional roles. All seven
“Literal d-line n and Abbe…” glass strings were replaced. Catalog-row differences below are signed catalog minus
printed patent values; every assigned label was checked with `trylabel.mjs`:

- L1 → Unmatched (nd = 1.54869, νd = 45.6). Nearest LLF7 fails the νd tolerance; no catalog row assigned.
- L2 → K-BK7 (Sumita): Δnd = 0, Δνd = 0.
- L3 → S-FSL5 (Ohara): Δnd = 0, Δνd = +0.1363.
- L4 → NBFD13 (Hoya): Δnd = 0, Δνd = −0.07.
- L5 → SF6 (Schott): Δnd = 0, Δνd = +0.03.
- L6 and L7 → LAL7 (Ohara): each Δnd = −0.000003, Δνd = −0.080567.

These are catalog spectral equivalents, not historical supplier identifications. There were no copied nC/nF/ng
fields to remove. No APD tags were added: no maker-published special-dispersion positions are established. Seven
air-spaced singlets require neither `cemented` tags nor `doublets`; both remain absent.

The analysis removes hidden-draft, production-process and stale ray-grid passages; corrects the back-focus and
sodium-D claims; states the claim/table conflict and the earlier rear-rim widening; and retains figure-reading
uncertainty. Historical holds in this audit are marked closed in place; the Deployment validation section is kept.

Before → after: EFL 29.996829965834188 → 29.996829965834188 mm; FOPEN 2.8 → 2.8; halfField 36° → 36°;
stop radius 5.681782440028101 → 5.681782440028101 mm; BFD 37.2550 → 37.2550 mm; stored last gap
37.2000 → 37.2000 mm; track 82.5630 → 82.5630 mm. Both focus keyframes are identical, including the endpoint
last gap 37.2550 mm and track 82.6180 mm. Surface arrays, radii, gaps, indices, Abbe values, rims and aperture
settings were compared directly and are unchanged. The surface audit reports OK; the aperture audit reports one
station within 3% of the stated f-number, with zero rim, trace, iris or failed stations. Field coverage is ≥99%,
with zero unsolved or skipped stations. Prettier was skipped as required by the addendum. The screenshot helper
produced no PNG and logged thermal-notification / DNS-watch errors; rendered-page review is unverified. No command
was explicitly refused by the sandbox or approval policy.

Open:

- Neither drawing fixes the midpoint iris; the clear apertures and the previously widened rear rims remain inferred.
- Closed by the Glass coverage pass below: L1 now resolves to PBL7. Supplier/melt identity and the exact production prescription remain unproven.
- Finite-focus spacings are absent; the 0.30 m production minimum is not modeled.
- The derived 37.2 mm image gap remains about 0.055 mm short of paraxial focus; source rounding is only a possible cause.
- The direct maker-diagram provenance remains unverified. The rendered-page review was subsequently completed from coordinator screenshots in the Second review below; the earlier screenshot helper produced no PNG.

## 2026-11-12 — Semi-diameter pass against the patent figure

**Result: no rim change needed.** All 14 refracting semi-diameters, the inferred iris and all geometry allowances
are retained. The header and analysis now describe the final rim limits and geometric corner transmission.

Source: the local `patents/US3975091A.pdf`, PDF page 3, Figure 3, Example 2 / Table 2, with every prescription
length multiplied by 0.3 from F = 100. The existing 250 dpi crop starts at page coordinates (580, 350).
The local optical axis lies near page y = 776–778. First-to-last vertices near x = 622 and 1305 span
683 pixels / 45.363 mm = 15.056 px/mm. The independent R7–R14 span, about 338 pixels / 22.317 mm,
gives 15.145 px/mm; R1–R7 gives about 14.97 px/mm. These axial spans agree to approximately 1%.

A spherical-sag cross-check of the clean R1 arc against its scaled radius 30.918 mm does not give an isotropic
scale: with 15.06 axial px/mm, upper/lower samples imply roughly 16.3–16.8 vertical px/mm. For example, at
page rows 590 and 960 the front arc crosses x ≈ 656 and 651.5, against vertex x ≈ 621.8 and arc centre y ≈ 779.5.
Thus a single precise figure-to-glass scale is unsupported. There is no unambiguous source iris tick to add an
independent stop scale; the inferred midpoint iris is not treated as figure evidence. The half-span rim readings
below use both edges to reduce axis skew, exclude leaders and hatching, and retain approximately ±0.35 mm reading
uncertainty plus the systematic drawing distortion.

| Surface labels | Before → after sd (mm) | Figure estimate at 15.06 px/mm (mm) | Figure / stored | Decision                                                                                                                |
| -------------- | ---------------------- | ----------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1, 2           | 17.7 → 17.7 each       | 18.06                               | 1.020           | 544-pixel rim span; within noise.                                                                                       |
| 3              | 15.0 → 15.0            | 15.34                               | 1.023           | 462-pixel shoulder span; retain its relation to R4.                                                                     |
| 4              | 10.8 → 10.8            | ≈10.9 optical endpoint              | ≈1.01           | Curved face ends before the L2 shoulder; do not extend the sphere to 15 mm.                                             |
| 5, 6           | 9.7 → 9.7 each         | 9.84                                | 1.015           | Approximately 296.5-pixel span; square rims retained.                                                                   |
| 7, 8           | 6.7 → 6.7 each         | 7.14                                | 1.065           | 215-pixel span; difference is within schematic scale uncertainty.                                                       |
| 9, 10          | 6.4 → 6.4 each         | 6.99                                | 1.092           | 210.5-pixel span; borderline apparent difference is below 10% and scale-dependent. L5 remains slightly smaller than L4. |
| 11, 12         | 8.6 → 8.6 each         | 8.93                                | 1.039           | 269-pixel span; retain the integration chief-ray floor.                                                                 |
| 13, 14         | 10.4 → 10.4 each       | 10.79                               | 1.037           | 325-pixel span; retain the integration chief-ray floor.                                                                 |

The comparison sketch was rendered and viewed at 15.06 px/mm, with the first vertex and optical axis aligned
beside the patent crop. Relative element heights, the smaller R4 optical face, square middle elements and paired
rear menisci agree within schematic uncertainty. The straight model joins do not reproduce the patent's drawn
bevels. No cut, peripheral extension or gap allowance was introduced. Baseline and final outlines coincide.
The saved matched-scale comparison is
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/smc30/overlay.png`.

Surface audit: OK, no validation errors. Image-circle audit: zero undersized surfaces. Aperture audit: one station
within 3% of f/2.8, zero rim, trace, iris or failed stations. Field coverage: one station at ≥99%, zero unsolved
or skipped stations. Both meridional clearance solvers at 36° find no axial or chief-ray clipping. The largest
axial height is 6.97 mm at R12, versus sd 8.6 mm; tight middle axial clearances include R7/R8 heights 6.34 mm
versus sd 6.7 mm and R10 height 6.23 mm versus sd 6.4 mm. Chief heights at R12/R14 are approximately
8.51/10.29 mm versus 8.6/10.4 mm, respectively. One lower full-field marginal launch remains unsolved in both
diagnostics; the surviving off-axis bundle is vignetted, not asserted fully clear. Longitudinal spherical
aberration at pupil fractions 1/0.85/0.7/0.5 is +0.156/−0.139/−0.199/−0.143 mm, consistent with the previous
prescription result; no rim was raised from this diagnostic.

Engine before → after: EFL 29.996829966 → 29.996829966 mm; FOPEN 2.8 → 2.8; halfField 36° → 36°;
tracingHalfField estimate 29.991808° → 29.991808°; stop radius 5.681782440 → 5.681782440 mm.
The engine's reduced tracing-field estimate is distinct from the successful 36° chief-ray coverage check.
The final `rimcost.mjs --loo` comparison against the committed cleanup baseline finds zero changes and zero
illumination loss at every sampled field. Wide-open geometric transmission before → after is 100.0 → 100.0%
on axis, 71.9 → 71.9% at 18°, 51.0 → 51.0% at 30°, and **39.6 → 39.6% at 36°**. These are pupil-transmission
fractions, not photometric illumination including cosine-fourth falloff or coatings. There are no finite-focus
prescriptions or zoom stations to add.

The previously saved production construction raster `v-smc30/diagrams/pentax30-optics.jpg` was viewed locally.
It shows seven separate singlets / seven groups and the same rear-meniscus topology. Its middle elements are
similar in height and its L2 shoulder is more rectangular than the patent/model diagonal join. It provides no
special-glass or asphere markings at any front-to-rear element position; no new material identification follows.
Its direct manufacturer provenance remains unverified. The earlier brochure comparison in Deployment validation
remains the basis of the production association. No browser or live page check ran; the coordinator retains that
step. The matched-scale model sketch is complete.

PDF page 1 was viewed: inventor Takahashi, Yasuo; assignee Asahi Kogaku Kogyo Kabushiki Kaisha; publication
US 3,975,091 A, August 17, 1976; filed April 21, 1975. The model uses the established canonical English assignee.
The existing Table 2 / claim 2 R12 discrepancy and derived-image-gap caveat remain open source limitations.
Name review for the coordinator: the display name contains both an initial “PENTAX” and “SMC PENTAX”; no name
or metadata field was edited. No command was refused by the sandbox or approval policy.

Final checks reproduced the surface, aperture, image-circle, field-coverage, engine and illumination results above.
The complete parsed data object equals the committed cleanup baseline; the data-file edit is confined to its rim
header comment. Targeted Prettier write/check commands completed, but the repository ignore rules exclude both
`src/lens-data/` and Markdown, so those commands did not reformat these files. The scoped whitespace diff check passed.

## 2026-11-12 — Glass coverage pass

L1 `Unmatched (nd = 1.54869, νd = 45.6)` → `PBL7 (OHARA catalog equivalent; …)` (Δnd = −0.000001, Δνd = −0.04), using the discontinued Ohara PBL7 row added to the catalogue from the 2026-07-01 Ohara Zemax file. Every element now traces on a catalogue curve.

## 2026-11-12 — Second review: diagram, labels and movement

Compared the coordinator's current `shots/smc30/page.png` and all seven inspector screenshots with local US3975091A.pdf, Figure 3 / Example 2 on PDF page 3 and Table 2 on PDF page 5. Re-read the complete prior audit and analysis. No new maker diagram was downloaded or viewed: the preceding semi-diameter pass records seven separate singlets/seven groups, the same rear-meniscus topology, no marked special-glass or asphere positions, and unverified direct manufacturer provenance.

**Rims retained.** Independently sampled the saved 250 dpi patent raster, using ink threshold 100. Near-axis vertex bands locate R1 at x = 621–623, R7 at 966–968, and R14 at 1303–1308. The first-to-last span is approximately 683.5 px / 45.363 mm = 15.067 px/mm; the first-to-R7 and R7-to-last spans independently give approximately 14.97 and 15.17 px/mm. These confirm the previous 15.06 axial scale within about 1%. The previous spherical-arc cross-check's unequal axial/transverse scales and ±0.35 mm schematic uncertainty still prevent a more precise rim claim.

| Faces | Retained sd (mm) | Independent figure estimate (mm at 15.06 px/mm)      | Verdict                                                                                       |
| ----- | ---------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1/2   | 17.7/17.7        | 18.07                                                | Tallest element; square rim retained.                                                         |
| 3/4   | 15.0/10.8        | 15.34 shoulder / approximately 10.9 optical endpoint | R4 ends before the mechanical shoulder; extending it to 15 would exceed its 12.939 mm radius. |
| 5/6   | 9.7/9.7          | 9.83                                                 | Square optical rims; retain.                                                                  |
| 7/8   | 6.7/6.7          | 7.11                                                 | Within schematic uncertainty.                                                                 |
| 9/10  | 6.4/6.4          | 6.96                                                 | About 9% above stored, within distorted-drawing uncertainty; correctly below L4.              |
| 11/12 | 8.6/8.6          | 8.92                                                 | Preserve corner-chief floor and paired rims.                                                  |
| 13/14 | 10.4/10.4        | 10.79                                                | Preserve corner-chief floor and paired rims.                                                  |

The supplied live-page silhouette has the correct relative heights, square middle rims, paired rear menisci and R4 taper, without visible element overlap. The model's straight joins simplify the patent's drawn bevels; no stronger optical-rim evidence supports changing them. Re-checked the matched-scale side-by-side `scratchpad/sd/smc30/overlay.png`. The post-edit model sketch `scratchpad/sd/smc30/rv-final.png` confirms that the outline and baseline coincide.

**Change made:** populated every missing inspector focal length. Each is the isolated thick-singlet EFL in air, calculated from Table 2's nd and scaled R1/R2/thickness, using power = (n−1)[1/R1−1/R2+(n−1)t/(n R1 R2)]. This also independently confirms every element's power sign.

| Element | Before focalLengthMm | After (mm) |
| ------- | -------------------- | ---------- |
| L1      | absent / FL = —      | +93.55     |
| L2      | absent / FL = —      | −37.84     |
| L3      | absent / FL = —      | −67.66     |
| L4      | absent / FL = —      | +20.46     |
| L5      | absent / FL = —      | −17.88     |
| L6      | absent / FL = —      | +31.49     |
| L7      | absent / FL = —      | +52.30     |

L1–L3 have +/+ radii and the named positive/negative meniscus powers; L4 is +/− biconvex; L5 is −/+ biconcave; L6/L7 are −/− positive menisci convex toward the image. Names L1–L7 match the patent. Seven separate singlets need no cemented bracket; the source names elements, not additional compound groups, so no group brackets were added. All surfaces are spherical, with no A suffixes, asphere entries, APD tags or false cementing. The iris is between L3 and L4, but its exact midpoint coordinate is inferred, not source-established. The inspector cards display the correct seven type/glass/role combinations; all showed FL = — before this edit. A refreshed browser screenshot remains the coordinator's step; no browser was launched.

**Lands and cuts:** against `.lens-work/base1122sd/PentaxSMCK30mmf28.data.ts`, no rim reductions, peripheral extensions or cuts exist. Full-pupil `rimcost.mjs --loo` reports worst loss **0.0 points**, with identical transmission at every 3° field sample: 100.0% on axis, 71.9% at 18°, 51.0% at 30°, 39.6% at 36°. These are geometric pupil-transmission fractions, without coatings or cosine-fourth falloff. No clearance allowance was added.

**Movement:** this is one infinity-only prime, with no zoom stations, variable gaps or authored focus keyframes. L1–L7 each move **0.000 mm** between focus controls 0 and 1; every vertex and every gap is identical, including the 37.2 mm image gap. The midpoint split remains 3.1335 + 3.1335 mm. The supplied page shows infinity and “Not modeled”; its text correctly states manual production focusing to 0.30 m and absent finite-focus spacings. No production element-travel mechanism or near prescription was invented. No station-order correction is applicable.

**Glass and colour:** branch-aware glasscheck and trylabel resolve all seven labels inside |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. Signed catalog-row differences: L1 PBL7 −0.000001/−0.044254; L2 K-BK7 0/0; L3 S-FSL5 0/+0.1363; L4 NBFD13 0/−0.07; L5 SF6 0/+0.03; L6/L7 LAL7 −0.000003/−0.080567. The curve-derived diagnostic can show slightly different Abbe values than the catalog row; these do not change the printed nd/νd. No label needs replacement, no unmatched or constant-index element remains, and no new catalog row is proposed. Table 2 and the patent's material description give no glass names, additional line indices or partial dispersion to backfill. Catalog labels remain supplier-neutral spectral proxies.

Compared the Figure 4 plots on PDF page 3 using each local axis and tick spacing, with axial distances scaled by 0.3. Ghost-traced on-axis focus shifts relative to paraxial d at pupil fractions near-zero / 0.5 / 0.7 / 0.85 / 1 are:

| Line | Model shifts (mm)                          |
| ---- | ------------------------------------------ |
| C    | +0.068 / −0.081 / −0.144 / −0.095 / +0.183 |
| d    | 0 / −0.143 / −0.199 / −0.139 / +0.156      |
| F    | −0.078 / −0.202 / −0.233 / −0.141 / +0.207 |
| g    | −0.060 / −0.164 / −0.168 / −0.044 / +0.359 |

Figure 4b prints d and g, not C/F curves. The d curve reads approximately −0.15 at half pupil, −0.17 near 0.7, −0.10 near 0.85 and +0.21 to +0.23 at full pupil (approximately ±0.02 mm reading error). The d marginal and upper-pupil differences exceed that error. The g paraxial/full-pupil readings are approximately −0.04/+0.38 mm, close to the model at this precision. No single element is implicated by these data: all printed radii/indices match, and the d-line mismatch cannot be assigned to a borrowed partial-dispersion curve. Unprinted dispersion prevents a unique g-line prescription reconstruction.

At 36°, model distortion −1.54% agrees with Figure 4c's approximately −1.5% (about ±0.1 percentage-point reading error). The parabasal sagittal/meridional focus shifts relative to axial focus are −0.283/−0.277 mm at 27° and +0.654/+1.617 mm at 36°. Figure 4d instead reads approximately −0.25/−0.15 mm at 27° and +0.2/−0.5 mm at 36° (roughly ±0.05 mm). Edge astigmatism therefore disagrees substantially. The inferred iris coordinate is a material limitation for off-axis comparisons, but a unique cause is unproven; no geometry was fitted to those plots. The 36° full-fan focus diagnostic is unavailable because the surviving fan is one-sided; the quoted model values are parabasal, not full-aperture best focus.

Surface audit reports OK, no validation errors; aperture audit has one passing station with zero rim/trace/iris/failure stations; image-circle audit has zero undersized/skipped; field coverage has one station ≥99% and zero unsolved/skipped. Both clearance solvers at 36° find no axial/chief clip; R12/R14 chief heights are 8.51/10.29 mm against rims 8.6/10.4. The lower full-field marginal launch remains unsolved. Engine before → after: half-field **36 → 36°**, FOPEN **2.8 → 2.8**, EFL **29.996829966 → 29.996829966 mm**, tracing-half-field estimate **29.991808 → 29.991808°**, stop radius **5.681782440 → 5.681782440 mm**. The reduced estimate is distinct from successful 36° chief coverage.

PDF page 1 confirms Yasuo Takahashi; Asahi Kogaku Kogyo Kabushiki Kaisha; US 3,975,091 A; August 17, 1976; filed April 21, 1975. The model's “Asahi Kogaku Kogyo Co., Ltd.” agrees with existing Pentax corpus canonical spellings; no consolidation is needed for this row. No assignee field or changelog was changed. No command was refused by the sandbox or approval policy.

Open: clear apertures and iris position remain inferred; finite-focus spacings, production supplier/melt and exact factory identity remain unproven. The derived source image gap remains 0.055 mm short of paraxial focus (Table 2, PDF page 5); claim 2's R12 −58.97 conflicts with Table 2 −53.97 (PDF pages 6/5). Marginal d-line and edge astigmatism plot differences above remain unresolved. The duplicated PENTAX display-name prefix is report-only. Direct manufacturer-diagram provenance and the coordinator's post-edit inspector re-shoot remain pending.
