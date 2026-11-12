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
- L1 has no exact catalog match; supplier/melt identity and the exact production prescription remain unproven.
- Finite-focus spacings are absent; the 0.30 m production minimum is not modeled.
- The derived 37.2 mm image gap remains about 0.055 mm short of paraxial focus; source rounding is only a possible cause.
- The direct maker-diagram image and final rendered-page review remain unverified; the screenshot helper produced no PNG.
