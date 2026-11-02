# Lens Patent — Hasselblad XCD 35–100 mm f/2.8–4 E — 4 Audit

## Final disposition and exact revision

Fixed job: US20260036794A1, Example 1, stem HasselbladXcd35100mmF284E. The complete final per-lens verification earns READY_FOR_BATCH, with INTEGRATION_PENDING (closed 2026-10-13: the files are in the repository; see the last section). The separate Stage4CleanReplayReceipt.json binds clean extraction, all archive/member/CRC/SHA checks and full stable-result byte equality. Numerical work stops for a separate coordinator replay and preservation. No repository edits, metadata generation, full-corpus tests, build, publication, upload or queue/index write occurred in this audit.

Final data SHA256: e524f97fc01c9d866fe1a2c71b5f15944f2c082fba8a806defac6e78480885b6.
Final analysis SHA256: c2ce69e7635a08a87413c91576b6c0234ab7b4a11bcb2518096828f89cc7b364.
(Both hashes are of the packaged revision; the data and analysis files were edited on 2026-10-13, see the last section.)
The original Stage3 candidate archive SHA256 is e0e6fd6deb96a212ca9d25819944a5e8675cbb28eeaeabb247c2281d513e7b32. Its data/analysis hashes are 346ff3a09f993ea0c98e7f97f073c5795704d9600abb67db2507376fcf46a1a4 / a8764e7e483a51e9151d6454ced06364466d8ff688b31e90b5256762bac9110d. Original candidate bytes and prior Stage1–3 archives/support remain immutable history.

## Source-first independence and preserved baseline

Pass A independently rendered/read the original controlling patent equations, tables and conditions, re-entered numerical inputs and established d-line convention, K sign, native mm scale, physical plate/image planes, focus mechanism, group datums and source-only optical calculations. It did not open candidate data, author scripts/results/evidence/audit, old extracted arrays or historical source notes. It used original manufacturer/catalog files and generic project controls. Adjacent unselected example text was visible on shared patent pages and was not used. The exposure statement is retained verbatim in source_inputs.json and in the immutable baseline archive.

The source-only archive HasselbladXcd35100mmF284E.PassA.20261012T232147Z.zip has SHA256 1558c612c0326d75286097d51f10c67271bfc69c86f76d9a8e5e801f1df65595; frozen fingerprint 93c3fb71e877c982c021a2912836eb39a65c6245f5ae6316229c52e05b52033d. It was separately coordinator-replayed and privately preserved before candidate disclosure. The present canonical source_inputs.json and independent_source.py retain exactly the frozen input/code bytes. Every full replay reconstructs the source-only baseline and freshly reparses 11 original catalogs; its full result must match c71918bae4c0ec20f53b38e81be35de396a701a19bc5c43f94fd2ac5f19775a1. Fingerprints prove artifact integrity, not cognitive independence.

Pass B then read the candidate as another author's work. It uses the frozen source equations/code on actual parsed final values, plus a separate new geometric, bounded-witness, ray-accounting and catalog-proxy verification path. Author-derived code and real runtime replay remain separately identified. Pass B source-rim interpretation occurs after the author selections are visible; it is a direct original-pixel reinspection, not falsely called blind measurement. No numerical helper agent or third production lane was created.

## Material correction and downstream replay

The independent comparison found a real source transcription mismatch that all 239 original authored checks had missed:

| Item | Original candidate | Original patent / frozen Pass A / final |
|---|---:|---:|
| Surface 21 A6, mm^-5 | -9.60558E-08 | -9.60538E-08 |

Controlling source: PDF page 26, printed 13, Table 1B, 21st-surface A6. A fresh crop of original embedded bitmap xref 87, native 2560×3300, rectangle [350,1280,1190,1480], clearly reads -9.60538E-08. The coordinator separately visually confirmed it. This restores a printed value; it is not an optical patent erratum, source reshaping, fitting or tolerance relaxation. The frozen source-only baseline was already correct and remains unchanged.

The full parsed original/final object diff must contain exactly this single A6 change. Source radii, spacings, indices, SDs, stop, glass proxies, image plane, all focus/zoom vectors and other coefficients are unchanged. Derived comments and affected analysis blocks were regenerated. The corrected native/source text and exact current pair are hash-bound; prior author approvals are preserved as history and are not called approvals of these new bytes.

Independent and actual-runtime replays cover every dependency affected by this coefficient: aspheric sag/slope/turnover, shared-band clearance, finite intersections, all 21,560 requested field/pupil/wavelength samples, all 5,893 axial and 55 default displayed samples, all 83 geometry/render states, field diagnostics, combined precision diagnostics and 41 analysis fact blocks. All unmodified first-order and spectral controls were rerun as well. Runtime raw report equality is complete-object equality, not cherry-picked scalar agreement. The final stable dossier result is compared byte-for-byte on clean replay.

| Dependent quantity | Original candidate | Corrected final |
|---|---:|---:|
| S21 first positive slope zero, mm | 11.646764807039148 | 11.646876635598131 |
| S21 departure at 11.6 mm, µm | -287.096 | -287.091 |
| S21 total rim slope | 0.001071 | 0.001073 |
| Wide physical-plane chief height, mm | 27.48120334529304 | 27.481169773754836 |
| Middle physical-plane chief height, mm | 27.492004017770125 | 27.49199454502861 |
| Long physical-plane chief height, mm | 27.508029979366217 | 27.50802657453753 |
| Combined field/first-order linear objective, half-digits | 14.155805669931851 | 14.102331430196834 |
| Combined nonlinear first-order maximum, half-digits | 15.405885107355742 | 15.352445042537964 |

The combined diagnostic remains unsuccessful. Old and corrected Jacobians, offsets and nonlinear reports are separately preserved. No diagnostic perturbation enters the model. The original frozen baseline's exact chief heights now agree with corrected runtime to numerical precision; the prior approximately 0.000034 mm wide discrepancy was caused by the A6 transcription, not a spectral or plane convention.

Earlier author-stage corrections, distinct from this new finding, remain documented in original Stage1–3 audit/support: negative surface 23 A8, lens4 Table 1D glyph, surface 21 nd 1.69350, withdrawn erroneous source-erratum claims, L3 rear flange reading, rejected excessive rims/shared-gap intrusion/cemented first clips, exact-copy test upgrade and MTF/bokeh scheduling. Their original observations and failures were not rewritten.

## Governing contracts, runtime and exact-copy controls

The shared protocol, dossier contract, Stage4 workflow and current generic schema/analysis/integration/source-audit references were read. Optical runtime is authenticated at 14a13fe4283220c77d40e72f8d53ebb404026eb3. Read-only GitHub comparison to current main e1bd097c2d95de9468a184d061d7a0b433656653 identifies only the strict duplicatedValues test, an unrelated reference Maksutov data item and a 49-line workflow stub. No controlling schema/runtime/catalog/source-audit change requires silently replacing the pinned runtime.

The current exact test bodies execute on this single parsed lens with a minimal assertion adapter. This is actual predicate execution with real TypeScript, not Vitest or a corpus run. Each of the 16 nonzero numeric elemId/nd pairs matches exactly, including shared downstream ownership, and all 6 first-infinity variable values equal base d exactly. All 14 air/stop planes have elemId 0. Small/large index-copy errors, air-exit ownership and small variable-gap mutations fail. The old predicate's broader acceptance is retained historically.

Real strict TypeScript 5.9.3, Prettier 3.6.2, buildLens, validateLensData, explicit spectral resolution, exact tracing, field inversion and actual production element-shape/trim checks execute. All 195 runtime/reference files are rehashed and the actual bundle is rebuilt with esbuild 0.25.11. Source/domain checks separately catch validator omissions for nd=0 and negative fixed d. Those misses remain documented rather than being called runtime repairs.

## Extraction, conventions and physical model

Original PDF SHA256 f5b7a99b7fa81f82c264a00748bb9a45b107b49a426d49475d96d5426f94af1c and original card SHA256 5ccc0e230921d787e7c179e3977240a7a2abba9f8805b45e9185fb390b5f606a are unchanged. Tables 1A–1F and equations/conditions directly control the inputs. The table uses nd/νd; κ maps directly to K in the same (1+K) conic equation. Native scale is 1 mm. All A4–A12 terms and signs are literal; absent A14 is0. No geometric/diffractive confusion, finite resin/adhesive layer, synthetic cement, dropped plane or air-equivalent camera substitution is introduced.

The model contains 16 physical lens elements, 13 air-separated optical groups, 6 kinematic groups, 3 aspheric elements with 5 faces, 3 cemented pairs and one STO. The camera plate retains 1.8 mm, nd 1.51680, νd 64.2 and 1.0 mm trailing air in rearPlates; it participates optically but is not counted/drawn as a seventeenth lens. Source gap 30 remains the physical lens-to-CG-front gap. All source image planes are literal.

Entrance pupil and system principal points are first-vertex referenced; exit pupil is physical-image referenced. G3's Table 1E principal points use the stop 1.95 mm before first glass 12; raw first-glass discrepancies and the datum normalization remain distinct. Physical last-lens/image BF differs from Gaussian BFD and air-equivalent spacing. Stop sizes are inferred by exact axial calibration to native nominal f-numbers, not independently measured diaphragm dimensions.

## Independent numerical reconciliation

Fresh scalar reduced-angle propagation and independently multiplied ABCD primitives agree, then the same source-only functions independently evaluate actual final literals. At wide/middle/long:

- EFL 36.046114926270114 / 59.13033370056984 / 96.99553288714024 mm.
- Physical track 150.4096 / 164.4458 / 189.9698 mm.
- Gaussian focus minus physical image +0.0697039214 /+0.0360298722 /−0.0465162485 mm.
- Entrance pupil from first vertex 37.6443250293 / 58.4848515345 / 90.0936804571 mm.
- Exit pupil from physical image −87.1148544632 / −108.4364645120 / −162.6345757938 mm.
- Exact calibrated iris radii 8.35516536293 / 10.05427283305 / 12.18334246541 mm. Calibration remains explicitly circular as a source validation, although its computation was independently verified.

Independent group EFLs are +139.266859362 / −29.962425743 / +67.939873330 / +35.853557782 / −44.367050087 / +113.728489557 mm. All 16 isolated powers, 3 cemented powers, group principal planes and in-situ conjugate magnifications are separately checked. Surface Petzval sum is +0.0008957360437482403 mm^-1; it is not a full sagittal/tangential field-surface claim. No native state meets the optical TL/f<1 telephoto or BFD>f retrofocus test.

All 9 description conditions and all preferred bounds pass. Table 1A ν 71.7 and Table 6 ν 71.72 remain different published precisions. Claim 8's literal malformed chained inequality remains false/inconsistent; ¶0170 and Table 6 establish the ratio used for condition 7. No printed source numbers are silently corrected.

All 6 groups move objectward across source station intervals with a fixed image; all 6 variable gaps remain positive over the adopted affine continuum. A separate scalar polynomial recurrence verifies all rational-defocus stationary roots/endpoints/poles: −1.075279976806 mm at zoom 0.268219007265, and −0.732935533200 mm at 0.760059765339. No poles occur. These are estimated interpolation properties under the specific continuation authority, not a recovered cam or a universal zero-defocus rule. The source expressly says its polygonal arrows are schematic. G5 moves imageward near focus in source prose, but no finite travel/law is published; NO_INTERNAL_RECONSTRUCTION and disabled finite focus remain correct.

The existing 77-quantity first-order rounding witness was independently evaluated through frozen equations without reusing its optimizer. All 88 variable half-digits were checked against independent original strings. Maximum nonlinear residual 0.990550116 half-digits and normalized offsets ≤ 1 support an existence diagnostic under inferred rounding boxes. It is not a hidden production prescription or proof of manufacturing covariance. Raw output-digit failures remain visible. The later failed combined field diagnostic does not prove nonlinear impossibility.

At corrected source half-angles, all physical image-height differences from 27.5000 fail the original 0.00005 mm half-digit. Frozen and corrected fresh traces agree. The Gaussian-plane projections are rounding-compatible with the separately recorded linearized source sensitivity estimates; this supports a convention ambiguity, not an explicit source declaration of that datum. No image plane is moved, field angle replaced, tolerance widened or performance claim inferred. Both actual angular and 55 mm-image-circle chief domains are independently checked.

## Geometry, optical rims and real renderer

The patent prints no clear semi-diameters. Fresh native-bitmap review confirms that L3's rear optical curve ends near 17.43 mm, while a straight mechanical extension reaches the larger 23 mm front blank. They are different extents. S21/S22 endpoints support approximately 12 mm with conservative schematic/pixel interpretation uncertainty; adopted 11.6 mm remains inside that range and below corrected first turnover 11.646876636 mm. All other adopted rims lie in their documented source-informed ranges; cemented interfaces retain common rims. No diameter changed during this correction.

Every conic radicand and rim slope, all asphere departures and first slope turnovers, every glass edge/shared air gap and camera-side physical boundary were checked independently. The new independent certificate uses 16,385 radial samples plus a global analytic derivative bound to cover all intervening radii. Fixed profiles and affine gap minima extend clearance through the complete estimated zoom continuum. Minimum independent certified clearance is 0.237981417706 mm. The coarser author-derived certificate remains conservatively 0.237430890970 mm; the differing positive bounds are not conflicting physical gaps. No gapSagFrac/maxRimAngle override is present, and the default 0.90 air-gap policy passes.

Actual production renderer diagnostics report 16 finite shapes and maximum trim 0 mm at 83 states. Wide/middle/long production SVGs were rendered and visually reviewed; the smaller L3 rear connector intentionally differs from the source mechanical flange without hiding an optical crossing. The rendering record is separate from the independent geometry proof. No layout adjustment repairs an invalid surface.

## Finite-ray accounting and limits

Every requested (zoom,field-domain,field fraction,wavelength,pupil radius,azimuth) tuple is independently recounted. There are 11 zoom states, 2 domains, 5 field fractions, 4 modeled wavelengths and 49 stop targets per field, yielding 21,560 requests. Results: 21,204 successfully aimed/launched; 18,999 transmitted; 2,205 proved physical clips; 356 unresolved launches; 0 raw failures among solved launches. No unresolved target is called launched, clipped or transmitted.

All 356 unresolved records are at field fractions 0.85/1 and pupil radii 0.75/1; no flux is imputed. The 440 requested chiefs, 5,893 axial samples and 55 actual default displayed fan rays are separately complete finite populations and all resolve/pass. No tested first clip occurs at cemented interfaces 2/7/17. The independent scalar Snell path additionally solves/traces 66 chiefs over 11 zooms/both domains at 0/0.6/1 field, with maximum runtime height discrepancy 1.31e-12 mm. This gives no complete-pupil/throughput/illumination/MTF/bokeh claim. Off-axis clipping is reported, not suppressed; unresolved outer coverage remains an explicit limitation.

## Glass and manufacturer review

The frozen independent parser scanned all 11 original authoritative catalog files across OHARA, HOYA, SCHOTT, HIKARI, CDGM, SUMITA before seeing author glass strings. Coordinate matches do not establish chemical, supplier, melt, suffix-family or historical production identity. M-FCD500 matches L4's nd/nearν but not the full source partial dispersion; S-NBH51 has a small index-coordinate mismatch for L9. Both remain unmatched full-source coordinates with disclosed proxies. L-LAL13 is not S-LAL13. The repeated high-Abbe coordinate and all other near alternatives remain recorded rather than collapsed into one supplier.

For final spectral metadata, a new independent scan of raw AGF coefficients reconstructs all 15 selected PdC proxies and 17 optical occurrences including CG. Explicit C/F/g values preserve original nd/νd/θgF but are modeled, not measured source lineindices. Runtime ΔPgF uses θ−(0.6438−0.001682ν), distinct from patent θ−(0.648285−0.00180123ν). Actual runtime uses the lineIndices tier. No unsupported APO, manufacturing, adhesive or single-element aberration claim is made.

Original manufacturer lens/body datasheets, product HTML and official dated release were read. The archived Chinese official dateline independently verifies announcement 2025-08-26 during Pass B, extending rather than rewriting Pass A's narrower launch-date conclusion. Manufacturer actual 36–97 mm, 16/13 construction, 3 aspheres/5 ED, internal stepping motor, 0.4/0.5 m object-image MFD and 43.8×32.9 sensor support the limited correlation. Marketed 35–100 mm/f/2.8–4, mechanical lengths and named 2.86× ratio are separate from source optics. Topological diagram counting is labeled interpretation. No factory formula or stopped-down production identity is established.

The manufacturer's pupil block gives 111/95 mm ahead of image at named endpoints but no focus/iris condition. Its separate MTF infinity caption is not transferred. Corrected source paraxial distances 112.765/99.876 mm give residuals +1.765/+4.876 mm. Different conditions/prescriptions may explain discrepancies; none is assumed identical or silently fitted.

## Analysis quantitative-claim map and prose review

All 41 marked blocks are regenerated from corrected final data, fresh author-derived/runtime computations, independent source values and manufacturer originals. Exact block comparisons preserve signs, units, precision and state labels while normalizing only formatting. Mutation fixtures include the original erroneous S21 A6 as well as wrong element index, negative A8, invented field agreement, ray denominator and wrong example. IndependentReviewRecord.json records separate explanation/citation review; text matching alone is not optical interpretation.

| Block | Independent authority / review |
|---|---|
| metadata | Original patent bibliography and original manufacturer datasheets/product/release; image-plane pupil conversion independently computed; dated Chinese official release independently reread |
| product | Original patent bibliography and original manufacturer datasheets/product/release; image-plane pupil conversion independently computed; dated Chinese official release independently reread |
| zoom_ratio | Original patent bibliography and original manufacturer datasheets/product/release; image-plane pupil conversion independently computed; dated Chinese official release independently reread |
| physical_plate | Frozen original source and independently recomputed final prescription |
| condition_precision | Frozen original source and independently recomputed final prescription |
| field_precision | Frozen original source and independently recomputed final prescription |
| groups | Frozen original source and independently recomputed final prescription |
| movement | Frozen original source and independently recomputed final prescription |
| cemented | Frozen original source and independently recomputed final prescription |
| element_1 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_2 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_3 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_4 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_5 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_6 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_7 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_8 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_9 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_10 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_11 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_12 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_13 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_14 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_15 | Frozen original Table 1A plus independent standalone thick-element computation |
| element_16 | Frozen original Table 1A plus independent standalone thick-element computation |
| glass | Frozen original source and independently recomputed final prescription |
| focus_products | Original patent bibliography and original manufacturer datasheets/product/release; image-plane pupil conversion independently computed; dated Chinese official release independently reread |
| aspheres | Frozen original source and independently recomputed final prescription |
| asphere_rims | Frozen exact source coefficient and independent sag/derivative/shared-band certificates; original native figure rim/flange inspection and actual renderer trim |
| conditions | Frozen original source and independently recomputed final prescription |
| native_metrics | Frozen original source and independently recomputed final prescription |
| pupil_comparison | Original patent bibliography and original manufacturer datasheets/product/release; image-plane pupil conversion independently computed; dated Chinese official release independently reread |
| interpolation | Frozen original source and independently recomputed final prescription |
| effective_iris | Fresh actual runtime full report; independent per-record denominator accounting, separate mandatory populations, finite-sample limits |
| field_residuals | Frozen original source and independently recomputed final prescription |
| rounding | Independent evaluation of existing bounded first-order witness; fresh corrected-source combined diagnostic rerun remains unsuccessful; no diagnostic offsets adopted |
| sd_limit | Frozen exact source coefficient and independent sag/derivative/shared-band certificates; original native figure rim/flange inspection and actual renderer trim |
| geometry | Frozen exact source coefficient and independent sag/derivative/shared-band certificates; original native figure rim/flange inspection and actual renderer trim |
| ray_counts | Fresh actual runtime full report; independent per-record denominator accounting, separate mandatory populations, finite-sample limits |
| ray_sampling | Fresh actual runtime full report; independent per-record denominator accounting, separate mandatory populations, finite-sample limits |
| petzval | Frozen original source and independently recomputed final prescription |

Unmarked numerical prose, source equations, sixteen ordered element roles/headings, bibliographic metadata, reference planes and citation locations were separately reviewed. Source-attributed chromatic/focus/coma/field-curvature rationales remain attributions, not invented contribution decompositions. Third-person technical prose and current section order are retained.

## Development observations, dependencies and final gate

Two independent-verifier development issues are explicitly preserved in Stage4 support/history: applying the frozen nonzero-angle continuation to angle 0 raised ZeroDivisionError, resolved in Pass B by the exact axial-ray branch without changing frozen code; and looking for S-NBH51 only in a selected matching report missed its raw AGF record, resolved by scanning all raw records. Neither changed optical values, source tolerances or the frozen baseline. The original candidate asphere parity FAIL was a real finding, resolved only by the printed correction. No failed observation is erased.

The canonical dossier has 14 root-level files: original PDF/card, exact final pair, evidence/results/audit/manifest, complete verify.py, three author-derived numerical helpers, frozen independent source code and frozen source inputs. Large complete runtime records, original source images, review/control/failed-diagnostic history and dependency inventories are bounded external support. No nested canonical ZIP, cache, duplicate draft or routine page rendering is in the canonical archive.

The verifier uses explicit package/dependency paths; no hidden prior-chat imports or network inputs. The supplied support guide lists the complete dependency layout. All canonical and dependency archive entries receive exact membership, CRC, byte count and SHA checks. Final clean extraction replay occurs in a different root with only declared dependencies, and its full result bytes must match the packaged results. Original source, baseline and previous candidate hashes are rechecked.

The final numerical report has 263 checks: 257 PASS, 2 source-only NOT_APPLICABLE, and 4 integration NOT_RUN. The 4 pending checks are MTF, bokeh, repository-corpus tests and production build. The source-era absent-SD NOT_APPLICABLE entries are preserved historical applicability notes; actual inferred-SD geometry/asphere departures are separately required and executed. MTF/bokeh scheduling history remains explicit; no observed failure was relabeled. INTEGRATION_PENDING remains in force. No new work should proceed until the coordinator separately replays and privately preserves this exact revision. (Closed 2026-10-13; see the last section.)

## 2026-10-13 — Deployment validation and wording pass

Source re-read. US 2026/0036794 A1 was read again from `patents/US20260036794A1.pdf`. The file has no text layer, so pages 25–26 were read as page images at native resolution and Table 1B again at twice that. For Example 1, 32 surface rows (radius, thickness, nd, νd and θgF, with the stop at surface 11 and the cover plate at surfaces 31–32), 30 asphere values on five surfaces and 18 variable gaps (six gaps at three stations) were compared with the data file: no mismatches. The patent's κ is the K of the (1 + K) sag form. Only infinity focus is tabulated. Front page: US 2026/0036794 A1, published 5 February 2026, application 19/272,642 filed 17 July 2025, priority JP 2024-125127 of 31 July 2024, applicant Panasonic Intellectual Property Management Co., Ltd., inventors Emiri Suzuki and Naoto Nishimura. The data file's patent fields agree.

First-order values, patent / model, at the wide · middle · long stations. Focal length 36.0455 / 36.0461 · 59.1290 / 59.1303 · 96.9931 / 96.9955 mm. Total length 150.4098 / 150.4096 · 164.4459 / 164.4458 · 189.9700 / 189.9698 mm. Entrance pupil 37.6444 / 37.6443 · 58.4850 / 58.4849 · 90.0938 / 90.0937 mm. Exit pupil −87.1151 / −87.1149 · −108.4367 / −108.4365 · −162.6349 / −162.6346 mm. Group focal lengths 139.26679 / 139.26686, −29.96265 / −29.96243, 67.93943 / 67.93987, 35.85333 / 35.85356, −44.36713 / −44.36705 and 113.72847 / 113.72849 mm. Conditions (6) to (9) are printed as 0.7296, 0.5974, 1.2375 and 0.6013 and compute to the same four digits. The printed half-angles 38.1948°, 24.9661° and 15.7173° land at 27.4812, 27.4920 and 27.5080 mm on the printed image plane, against the printed 27.5000 mm, and at 27.5002, 27.5000 and 27.5015 mm on each station's Gaussian plane. Marginal axial spherical aberration at F4.12 is −0.119, −0.072 and −0.037 mm, with +0.076 mm at the 0.85 zone of the long end, as Fig. 1B draws it.

Repo checks on the deployed file. The surface audit reports no errors, the image-circle audit reports no undersized circle, field coverage is 100 % at all three stations (38.2°, 25.0° and 15.7° reach 27.50 mm), and the aperture audit finds all three stations within 3 % of their stated f-number.

Aperture change. The patent prints F4.11984 / 4.11992 / 4.11983 for Example 1, draws Fig. 1B at F4.12, and prints F4.12 at every station of Examples 2 to 5 as well; it prints no iris diameter. The radius that passes the printed F4.11983 axial beam at the long end is 12.1833 mm by real-ray trace. Held at every station, that radius gives f/2.840 at the wide station and f/3.414 at the middle one, which reproduces Hasselblad's f/2.8–4. At the owner's request the model now uses this fixed iris: `nominalFno` [4.11984, 4.11992, 4.11983] → [2.84, 3.414, 4.11983], `apertureDesign` 4.11984 → 2.84, and `fstopSeries` now starts at 2.8. The built stop radii were 8.35517 / 10.05427 / 12.18334 mm and are now 12.18283 / 12.18239 / 12.18334 mm (spread 0.00095 mm). The wide and middle f-numbers are derived, not printed, and the header comment, the `specs` lines and the analysis say so. No semi-diameter changed: the axial beam clears every rim, with 0.357, 0.179 and 0.056 mm to spare at surface 14 at the wide, middle and long stations. Marginal axial spherical aberration at the new wide-open is −0.201, −0.193 and −0.037 mm. At the 27.5 mm corner the inferred rims limit the meridional fan to about 7 mm of the stop diameter at the wide station and about 12 mm at the middle one with either iris, so the wider iris adds light on axis and in the mid-field only. EFL, half-field, back focus and the focus keyframes are identical before and after.

Maker comparison. Hasselblad's datasheet, product page and press release give 16 elements in 13 groups with 3 aspherical and 5 ED elements, an actual focal length of 36–97 mm, f/2.8–4 closing to f/32, minimum focus of 0.4 m at the wide end and 0.5 m at the long end, internal focusing by stepping motor, a length of 138 (178) mm, and an announcement on 26 August 2025. The model has 16 elements in 13 groups, aspherical surfaces on L4, L12 and L13, and exactly five elements with νd ≥ 71.7 (L4, L8, L10, L11, L15). Its first-vertex-to-image length grows by 39.56 mm from wide to long, against 40 mm if the two datasheet lengths are the retracted and extended barrel. Examples 2 and 4 have 12 groups; Examples 3 and 5 have 13 groups but only three or four elements with νd ≥ 71.7. The correlation is strong but circumstantial: no public statement links Panasonic's application to the Hasselblad lens. The construction drawing on datasheet page 2 was not re-read in this pass, so the positions of its aspherical and ED marks rest on the reading recorded earlier in this log.

Fields changed in this pass. No R, d, nd, νd, asphere coefficient, semi-diameter, variable gap, glass string or line index changed.

- Data file. `subtitle` "US 2026/0036794 A1 EXAMPLE 1 — SELECTED PRODUCTION CORRELATION" → "US 2026/0036794 A1, Example 1 — qualified production correlation". `specs` now reads 16 elements / 13 groups, design f = 36.05–96.99 mm, patent F/4.12 at all stations, model F/2.84–4.12 with fixed iris, 5 aspherical surfaces / 3 elements. The three aperture fields changed as above. `closeFocusM` 0 → 0.4, Hasselblad's wide-end minimum focus, carried as metadata; focus is still not modeled and every focus vector repeats its infinity value. `focusDescription`, the header comment and the sixteen `apdNote` strings were rewritten in plain terms.
- Analysis. Aperture statements updated to the fixed-iris model; the limitations heading renamed; the rounding and ray-count passages replaced by plain statements of what the model does and does not show; over-long decimals trimmed.
- This log. Run-together words separated where they obscured a number, and the two pending notes closed in place.

Open: the STO row still stores `sd` 8.355165 mm, the F4.12 wide radius. The engine replaces it with the radius traced from `nominalFno` (12.18283 mm), so it has no optical effect, but it now reads as stale. (Closed 2026-10-13: the row now stores the fixed iris radius, 12.18283 mm; see the section on glass labels and dispersion data.)

Open: glass labels were not changed. On nd, νd and θgF together the printed values equal current catalog glasses to the printed precision (θgF within 0.0001): HOYA E-FD15L (L1), LAC8 (L2), TAFD5G (L3), NBFD27 (L5), E-FD80 (L6), NBFD10 (L7), FCD1 (L8, L10, L15), FCD705 (L11), FC5 (L14), FDS24-W (L16) and BSC7 (cover plate), and SUMITA K-VC181 (L13). The file labels them with six-digit class strings instead. L13's "lanthanum crown class" is wrong for νd 41.1; it is a dense lanthanum flint. L7's stated proxy K-LaSFn14 is 0.0007 off in θgF where NBFD10 is 0.0001 off. HOYA M-FCD500 is 0.0005 off for L4. L9 and L12 were not re-checked. (Closed 2026-10-13: every element and the cover plate now carries its catalog glass label, and L9 = S-NBH51 and L12 = L-LAL13 were checked; see the section on glass labels and dispersion data.)

Open: whether the production lens holds one maximum iris diameter through the zoom range is not established; Hasselblad publishes only f/2.8–4. (Still open 2026-10-13. FIG. 1A draws the stop ticks opening at about 8.3, 10.3 and 12.3 mm in its wide, middle and long panels. Those are the F4.12 radii, 8.355, 10.054 and 12.183 mm, so the patent drawing shows an iris that opens with focal length, not a fixed one.)

## 2026-10-13 — Semi-diameter pass against the patent figure

Source. `patents/US20260036794A1.pdf`, page 2 (sheet 1 of 12), FIG. 1A: panel (a) wide, panel (d) middle and panel (e) long end, all at infinity focus and all Example 1. The page is a 2560 × 3300 pixel one-bit halftone, read at its native resolution. Panels (d) and (e) carry no leader lines; panel (a) is crossed by the element leaders, so its readings were used where they are clean and checked by eye where they are not.

Scale. Vertex crossings were located on each panel's axis and compared with the prescription at that station. Long end: surface 3 to surface 30 is 785.0 px for 144.639 mm (0.18425 mm/px), and surface 3 to the front of the cover plate is 967.3 px for 178.056 mm (0.18407 mm/px). Middle: 675.8 px for 124.542 mm (0.18429) and 828.1 px for 152.532 mm (0.18420). Wide: surface 6 to surface 30 is 584.9 px for 107.879 mm (0.18444), and surface 8 to the cover plate is 642.6 px for 118.328 mm (0.18414). One scale, 0.18425 mm/px, serves all three panels, and the 14 to 17 vertex crossings identified in each panel fall within 1.7 px of the prescription. The figure is therefore a to-scale plot of this prescription, not a schematic.

Reading precision. Each drawn line is a 4 to 5 px band of halftone dots. One rim reading is good to about 1.5 px (0.28 mm); the mean of the top and bottom rims in three panels is good to about 0.15 mm. Rim heights are half the distance between the top and bottom edge lines, so they do not depend on where the axis is placed.

What the figure draws. Every surface is drawn out to its own height and joined to its neighbour by a flat land or a bevel. Most elements are square-cut. Five faces stop short of their element's rim, the same way in all three panels: the rear face of L3 (the wide flange), the rear faces of the three cemented pairs, and the concave front face of L14.

| Surface | Face | Before | After | Figure, long / middle / wide (mm) | Basis |
|---|---|---:|---:|---|---|
| 5 | L3 rear | 17.4 | 18.0 | curve leaves the sphere at 17.9–18.1 in all six readings | Figure. The flange face is drawn where the sphere reaches 18.1 mm, 0.2 mm ahead of L4's front corner. The stored value left the rim 1.2 mm short of that corner and level with the L4–L5 pair, which the figure draws 0.5 mm lower. |
| 8 | L5 rear | 17.4 | 15.0 | curve leaves the sphere at 14.9–15.1 / 14.9–15.1 / 15.1–15.3 | Figure. The pair's rear corner is bevelled from the joint down to this height. |
| 14, 15 | L8 | 12.7 | 13.0 | 12.90 / 13.19 / 13.10 | Figure, step order. Drawn 0.4 mm below L7 and 0.9 mm above the L9–L10 pair; the model had it 0.8 mm below L7 and level with the pair. |
| 16, 17 | L9 and joint | 12.6 | 12.1 | 12.06 / 12.21 / 12.09 | Figure, step order, as above. |
| 18 | L10 rear | 12.6 | 11.3 | curve leaves the sphere at 11.1–11.4 | Figure and floor. Drawn 11.25 mm; the axial ray needs 11.15 mm at the long end, so 11.3. |
| 25 | L14 front | 14.5 | 13.2 | curve leaves the sphere at 13.1–13.2 in all three panels | Figure. A flat land runs from here to the 14.5 mm rim; the stored value carried the concave face 2.2 mm further forward than drawn, as a knife edge. |

Values retained, with the figure's reading: surfaces 1–3 30.3 (30.40 / 30.23 / 30.13); surface 4 23.0 (22.80 / 22.63 / 22.62); surfaces 6 and 7 17.4 (17.38 / 17.56 / 17.58); surfaces 9 and 10 14.6 (14.28 / 14.43, wide top rim under a leader); surfaces 12 and 13 13.5 (13.41 / 13.49, wide bottom rim under a leader); surfaces 19 and 20 12.0 (11.82 / 11.83 / 11.99); surfaces 21 and 22 11.6 (11.55 / 11.50, wide under a leader; the 21st surface turns over at 11.647 mm); surfaces 23 and 24 12.2 (11.87 / 11.96 / 12.04); surface 26 14.5 (14.50 / 14.61 / 14.44); surfaces 27 and 28 23.2 (22.94 / 22.76 / 22.74); surfaces 29 and 30 24.6 (24.29 / 24.15 / 24.15). All are within 2.5 % and keep the drawn order of heights, so they were not repainted.

Drawn features not modelled. The cemented faces of the first two pairs also stop short in the figure: surface 2 at about 29.2 mm, surface 3 at about 28.1 mm and surface 7 at about 16.1 mm. L1 and L4 are drawn square-cut, so each joint keeps the height of the element in front of it. Surface 3 was left at 30.3: the difference is 7 %, and a trial at 28.1 mm lowered the engine's meridional illumination by two to three points at the middle and long stations (80.2 → 77.1 % at 22.2° and at 13.1°, 55.2 → 53.1 % and 54.2 → 52.1 % at the corners).

Clearance, before → after. Axial margin of the fixed-iris beam at the tightest rim: wide 0.357 mm (surface 14) → 0.642 mm (surface 12); middle 0.179 mm (surface 14) → 0.373 mm (surface 18); long 0.056 mm (surface 14) → 0.152 mm (surface 18). Corner chief ray at the printed half-angles against the changed rims: 16.49 mm at surface 5, 12.88 mm at surface 8 and 11.96 mm at surface 25 at the wide station, and no more than 4.75 mm at surfaces 14 to 18. The surface audit reports no errors, the image-circle audit no undersized surface, field coverage is 100 % at all three stations (38.2°, 25.0° and 15.7° reach 27.50 mm), and the aperture audit finds all three stations within 3 % of their stated f-number. The surface audit accepts L3's rear face up to 19.0 mm, so `gapSagFrac` and the rim-angle limit were not needed.

Illumination, before → after (engine meridional curve, wide open). Wide corner, 38.2°: 40.6 → 46.9 %. Middle corner, 25.0°: 55.2 → 55.2 %. Long corner, 15.7°: 54.2 → 54.2 %. Stop diameter filled by the corner fan: 7.23 → 8.26 mm of 24.37 mm at the wide station, 12.06 and 12.83 mm unchanged at the other two. The wide-corner gain comes from L3's rear face, which was the low-side limit at 17.4 mm: on its own the change gives 49.0 % and 8.51 mm, and L5's rear face at 15.0 mm then takes 2.1 points back. L10's rear face costs one point in the inner field at each station (99.0 → 97.9 % at 8.8° wide, 97.9 → 96.9 % at 5.5° middle, 95.8 → 94.8 % at 5.2° long). L8, L9 and L14 change nothing. Engine half-field 32.09° / 27.39° / 16.85° → 32.97° / 27.39° / 16.85°; f-number 2.84 / 3.414 / 4.12 and stop radius 12.183 mm unchanged. The thinnest glass edge was 0.24 mm (L5 at 17.4 mm) and is now 0.69 mm (L2 at 30.3 mm); L5 is 1.72 mm thick at its 15.0 mm rear rim.

Other files. No aspherical surface changed height, so the departure table in the analysis stands. The analysis's L10 note and its clear-aperture paragraph were updated (axial margins, the face-by-face rule, the 0.69 mm glass edge, about 8 mm of stop filled at the wide corner), and the data file's semi-diameter header note was rewritten.

Live render. The local page was viewed at 36.05, 59.13 and 96.99 mm and at the close-focus end of the focus control, which moves nothing because focus is not modelled. L3's rear rim now meets L4's front corner, L8 stands between L7 and the cemented pair, the pair has a bevelled rear corner, and L14 ends in a short chamfer instead of a point.

Limitations. The diagram joins unequal face heights with a straight edge, so L3's flange, L14's land and the pair bevels are drawn as chamfers, not as the squared steps of the figure. The halftone limits any single reading to about 0.3 mm. The scratch ray trace used for the clearance table places the image plane at the last lens gap, so the field was set from the printed half-angles, and its launch search fails on the steep rear face of L3 at the wide station; the wide chief ray was traced with a marching intersection instead. No manufacturer drawing was viewed in this pass.

Observation outside this pass. The figure draws the aperture stop with a different opening in each panel: its tick marks begin about 8.3 mm from the axis in the wide panel, 10.3 mm in the middle panel and 12.3 mm in the long panel. The radii that give F4.12 at each station are 8.355, 10.054 and 12.183 mm. The figure therefore shows an iris that opens with focal length to hold F4.12, not the fixed iris of this model. The STO row and `nominalFno` were not touched.

## 2026-10-13 — Glass labels and dispersion data

What changed in the data file. Every `glass` label now names a catalog glass. The authored `nC`, `nF` and `ng` were removed from all sixteen elements and the cover plate, so each one now traces on its catalog dispersion curve. `apd: "inferred"` with a note was added to L4, L8, L10, L11 and L15, and the other elements' `apdNote` strings were removed. The lens is no longer on the partial-dispersion test's exemption list. `nd`, `vd` and `dPgF` are identical on all seventeen entries, and every radius, thickness and surface index is unchanged. The STO row stores 12.18283 mm, the fixed iris radius, which closes the first open note of the deployment pass.

Catalog check. Each labelled glass was recomputed from the dispersion coefficients in the locally held HOYA (2026-07-07, with obsolete glasses), OHARA (2026-07-01) and SUMITA (2025-11-07) Zemax catalog files, and again from the repository's catalog rows. The two agree to 0.000003 in nd and to five decimals in θgF.

| Element | Label before | Label after | Printed nd / νd / θgF | Catalog nd / νd / θgF |
|---|---|---|---|---|
| L1 | 699301, dense flint class | E-FD15L (HOYA) | 1.69895 / 30.1 / 0.6028 | 1.698949 / 30.050 / 0.60279 |
| L2 | 713539, lanthanum crown class | LAC8 (HOYA) | 1.71300 / 53.9 / 0.5442 | 1.713000 / 53.939 / 0.54422 |
| L3 | 835427, dense lanthanum flint class | TAFD5G (HOYA) | 1.83481 / 42.7 / 0.5647 | 1.834807 / 42.721 / 0.56475 |
| L4 | Unmatched (fluorophosphate class) | M-FCD500 (HOYA) | 1.55332 / 71.7 / 0.5398 | 1.553319 / 71.685 / 0.54027 |
| L5 | 901271, dense flint class | NBFD27 (HOYA) | 1.90110 / 27.1 / 0.6072 | 1.901102 / 27.058 / 0.60716 |
| L6 | 690311, dense flint class | E-FD80 (HOYA) | 1.68960 / 31.1 / 0.6031 | 1.689599 / 31.138 / 0.60316 |
| L7 | 834373, dense lanthanum flint class | NBFD10 (HOYA) | 1.83400 / 37.3 / 0.5790 | 1.834001 / 37.345 / 0.57906 |
| L8, L10, L15 | 497816, fluorophosphate class | FCD1 (HOYA) | 1.49700 / 81.6 / 0.5389 | 1.497000 / 81.609 / 0.53885 |
| L9 | Unmatched (barium flint class) | S-NBH51 (OHARA) | 1.74951 / 35.3 / 0.5818 | 1.749504 / 35.332 / 0.58186 |
| L11 | 550755, fluorophosphate class | FCD705 (HOYA) | 1.55032 / 75.5 / 0.5401 | 1.550323 / 75.496 / 0.53999 |
| L12 | 694532, lanthanum crown class | L-LAL13 (OHARA) | 1.69350 / 53.2 / 0.5482 | 1.693500 / 53.186 / 0.54829 |
| L13 | 811411, dense lanthanum flint class | K-VC181 (SUMITA) | 1.81055 / 41.1 / 0.5690 | 1.810548 / 41.139 / 0.56891 |
| L14 | 487704, crown class | FC5 (HOYA) | 1.48749 / 70.4 / 0.5306 | 1.487489 / 70.441 / 0.53059 |
| L16 | 921240, dense flint class | FDS24-W (HOYA) | 1.92119 / 24.0 / 0.6202 | 1.921189 / 23.956 / 0.62022 |
| Cover plate | 517642, borosilicate crown class | BSC7 (HOYA) | 1.51680 / 64.2 / 0.5343 | 1.516798 / 64.198 / 0.53428 |

Only L7 changes glass against the earlier d–C proxy, from SUMITA K-LaSFn14 (θgF 0.57965, 0.0007 from the print) to HOYA NBFD10 (0.57906). The other fourteen labels name the glass that was already the proxy.

Partial-dispersion comparisons. E-FD80 (L6): 0.60316 against the printed 0.6031. S-NBH51 (L9): nd 1.749504 against 1.74951, θgF 0.58186 against 0.5818; OHARA S-LAM7 shares its nd and νd (35.28) but has θgF 0.58702, and HOYA LAF7 has νd 35.04. L-LAL13 (L12): 0.54829 against 0.5482; HOYA M-LAC130 has 0.54659 and OHARA S-LAL13 0.54729 at the same nd and νd, so neither is the glass. M-FCD500 (L4): 0.54027 against 0.5398. FCD705 (L11): 0.53999 against 0.5401, the largest difference among the thirteen labels counted as equal. L9 and L12 were the two labels the deployment pass had not re-checked; both hold.

Near ties, recorded so they are not rediscovered. L1: HOYA E-FD15 has the same nd and νd with θgF 0.60287, one unit of the fourth decimal from the print, where E-FD15L rounds to it. L3: OHARA S-LAH55V (νd 42.73) has θgF 0.56484 against TAFD5G's 0.56475. L16: the HOYA rows FDS24, FDS24-W and FDS24-SW carry identical data, and the label resolves to the repository's FDS24 row.

L4 in more detail. HOYA's MP-FCD500-20 and MC-FCD500-20 rows have nd 1.553517, νd 71.718 and θgF 0.53979. The patent's Table 6 prints νd 71.72 for condition 2, and Table 1A prints θgF 0.5398, so both values the M-FCD500 row misses are on those two rows, while the printed nd 1.55332 is M-FCD500's. The 0.0005 difference in θgF is therefore between HOYA rows of one glass family, not a sign of a different glass. The label was left as the coordinator set it.

Effect on the model. The dispersion tier is now the catalog curve for every element and the plate. The C, d and F indices come from the curve, and g is set from the printed θgF through the unchanged `dPgF`. The traced Abbe number is the catalog's: the largest differences from the print are 0.050 (L1), 0.045 (L7), 0.044 (L16) and 0.042 (L5). The traced θgF equals the printed value on every element. The catalog d-line index is within 0.000006 of the print (largest on L9), and the prescription keeps the printed indices, so the first-order values do not move: focal length 36.046115 / 59.130334 / 96.995533 mm and Petzval sum 0.000896 mm⁻¹ as before.

Chromatic quantities quoted in the analysis, was → is. Conditions 1, 3 and 5 (ΔθgF of L5, L9 and L16 on the patent's line): 0.007728, −0.002902 and 0.015145 → unchanged, because they are defined from the printed νd and θgF; Table 6 prints 0.0077, −0.0029 and 0.0151. With the catalog Abbe numbers they would be 0.007653, −0.002843 and 0.015066, still inside every interval, and the analysis now says so. Conditions 2 and 4 (71.7; 81.6, 81.6, 75.5) are printed values and unchanged. The fifteen ΔPgF values of the glass table equal `dPgF` and are unchanged. The analysis quotes no axial or lateral colour figure, so nothing in it moved at its stated precision.

Paraxial colour, was → is (focus of one line minus another, positive away from the lens). F minus C: −0.0176 → −0.0224 mm at the wide station, +0.0057 → −0.0036 mm at the middle, +0.0486 → +0.0330 mm at the long end. g minus d: +0.0216 → +0.0163, +0.0219 → +0.0113 and +0.0365 → +0.0183 mm. The earlier lines were built from Abbe numbers rounded to one decimal, and a lens this well corrected is sensitive to that rounding. Fig. 1B (page 3) allows one check: at the paraxial end of the long-end plot the F-line sits about 0.023 mm on the positive side of the d-line and the C-line about 0.006 mm on the negative side, each read to about 0.003 mm on a scale of 1.706 µm per pixel. The catalog curves give +0.0240 and −0.0090 mm; the earlier lines gave +0.0331 and −0.0155 mm. The wide and middle plots do not separate the two models.

Analysis edits. The sixteen "Glass:" lines carry the new labels. The notes under L2, L4, L6, L9 and L11 were rewritten where they described proxies, unmatched coordinates or a flint class shared by L3, L4 and L6. The glass section's table names the label and adds the catalog νd and θgF; its text now describes catalog-curve tracing, the three moulding glasses on the three aspherical elements and the five elements with νd of 71.7 or more. The asphere section's sentence on manufacturing route was rewritten to match, and a sentence on conditions 1, 3 and 5 was added.

Closed 2026-10-13: the five `apdNote` strings no longer say that Hasselblad leaves the ED positions unnamed; they state the count only, so they do not contradict the analysis's reference to the ED mark on the manufacturer's diagram at L8. The diagram was not viewed in this pass.

## 2026-10-13 — Second review: diagram, labels and movement

Scope. An independent second look at the lens as the local page shows it. The page was viewed at 36.05, 59.13 and 96.99 mm, at infinity and at the far end of the focus control, with the zoom and focus movement overlays, and with the inspectors of L4, L8, L10, L11, L12, L13 and L15 open (every aspherical and every tagged element). It was compared with `patents/US20260036794A1.pdf`: FIG. 1A (page 2: panels (a), (d), (e), the bracket row (b) and the arrow rows (c)), FIG. 1B (page 3), paragraphs 0024–0050 (pages 15–16), 0129–0162 (pages 20–22) and 0209–0211 (page 25), and Table 1C (page 26). The file has no text layer; text and tables were read from the page images. No manufacturer drawing was viewed; the earlier record in this log stands (16 elements in 13 groups, 3 aspherical and 5 ED elements, an ED mark at the position of L8, aspherical elements at the positions of L4, L12 and L13).

Changes. No semi-diameter, radius, thickness, index, coefficient, gap, glass label, tag or aperture field changed. Engine values before and after are identical: focal length 36.0461 / 59.1303 / 96.9955 mm, half-field 32.97° / 27.39° / 16.85°, f-number 2.84 / 3.414 / 4.12, stop radius 12.183 mm, meridional illumination at the wide corner 46.9 %.

| Field | Before | After | Evidence |
|---|---|---|---|
| `doublets` text | D1, D2, D3 | L1+L2, L4+L5, L9+L10 | The patent's own gap labels are d3, d10, d18, d22, d26 and d30 (FIG. 1A, Table 1C), and the page prints them with the zoom gaps. "D3" over the L9–L10 pair and "d3" for the gap behind L2 differed only in letter case. The patent gives the bonded lenses no sign of their own (paragraphs 0036–0038), so the brackets now carry the element signs. Surface ranges 1–3, 6A–8 and 16–18 are unchanged. |
| `cemented` on L1, L2, L4, L5, L9, L10 | D1, D1, D2, D2, D3, D3 | L1+L2, L1+L2, L4+L5, L4+L5, L9+L10, L9+L10 | Follows the bracket text; the inspector badge now reads, for example, "DOUBLET L4+L5". |
| `role` on all sixteen elements | none | one short line each | The inspector showed no role. Each line states only shape, group, cemented pair, aspherical side and, for L13, that the patent moves its group to focus (paragraphs 0036–0050). No aberration function is assigned. |
| Header comment | — | a LABELS paragraph | Records where the labels come from. |

Silhouette, re-measured. FIG. 1A is a 2560 × 3300 one-bit halftone; its lines are bands of dots about 3 px across, so one edge reading is good to about 1.5 px (0.28 mm). Panel (a) is crossed by the element and gap leader lines and was used only on its clean side. Scale from 25 or 26 vertex crossings per panel, least-squares against the prescription at that station: 0.18411 (wide), 0.18406 (middle) and 0.18418 mm/px (long), against 0.18425 in the first pass; single vertices fall within 1.3 px in the wide and middle panels and within 2.1 px in the long one. Two readings were taken for each element: the centre of its outer land or edge line (mean of top and bottom), and the height at which each drawn face stops following its prescription curve.

| Element or face | Stored (mm) | Figure, long / middle / wide (mm) | Reading |
|---|---:|---|---|
| L1–L2 rim | 30.3 | 30.4 / 30.17 / 30.35 | land centre; long from the front-face end |
| L3 front rim | 23.0 | 22.81 / 22.67 / under leaders | land centre |
| L3 rear face (5) | 18.0 | 18.05 / 18.04 / 18.04–18.23 | curve end at the flange face, both sides |
| L4–L5 block | 17.4 | 17.37 / 17.57 / 17.52 | land centre |
| L5 rear face (8) | 15.0 | bevel foot about 14.7; curve end reads 15.3–15.6 | the bevel leaves the curve at a shallow angle, so the curve end over-reads by up to 1 mm |
| L6 | 14.6 | 14.36 / 14.48 / 14.50 | edge centre |
| L7 | 13.5 | 13.46 / 13.54 / 13.47 | edge centre |
| L8 | 13.0 | 12.95 / 13.11 / 13.03 | edge centre |
| L9–L10 block | 12.1 | 12.11 / 12.29 / 12.25 | land centre |
| L10 rear face (18) | 11.3 | 10.87–11.05 / 11.41–11.78 / 11.23–11.41 | curve end; mean 11.3 |
| L11 | 12.0 | 11.80 / 11.82 / 12.08 | edge centre |
| L12 | 11.6 | 11.47 / 11.59 / 11.68 | edge centre |
| L13 | 12.2 | 11.92 / 11.92 / 12.13 | edge centre |
| L14 front face (25) | 13.2 | 13.08 / 13.07–13.25 / 13.07–13.26 | curve end at the land |
| L14 rim (26) | 14.5 | 14.47 / 14.64 / 14.48 | land centre |
| L15 | 23.2 | 22.89 / 22.78 / 22.79 | land centre |
| L16 | 24.6 | 24.28 / 24.10 / under leaders | edge centre |

Every rim and face in the table is within 2.5 % of the figure and the order of heights between neighbours is the drawn one, so no rim was changed. The first pass's eight values hold on this independent reading. The one larger difference is inside a block and not part of the outline: the L4–L5 joint (surface 7) leaves its curve at 15.8–16.2 mm against the stored 17.4 mm, which is L4's square-cut rim. The axial ray of the fixed-iris model, traced with a separate scratch tracer that includes the cover plate, leaves 0.642 mm at surface 12 (wide), 0.373 mm at surface 18 (middle) and 0.152 mm at surface 18 (long), the figures already recorded.

Where the page still differs from the figure. The model outline, drawn the way the diagram draws it, was laid over each panel. (1) L3: the figure draws a square block 23 mm high back to a flange face about 10.7 mm behind the front vertex; the diagram joins the front rim to the rear rim (18.0 mm) with a straight edge and so cuts that corner. The rear face cannot be raised to square it: its radius, 21.64 mm, is smaller than the 23 mm rim. (2) L14: the figure steps from the end of the concave face (13.2 mm) straight out to the 14.5 mm rim; the diagram's straight edge cuts a corner about 2.8 mm long and 1.3 mm high. (3) L1–L2: the figure bevels the rear corner (surface 3 leaves its curve at 28.4–28.7 mm, surface 2 at 29.1–29.6 mm); the diagram squares it. The difference is 6 % on a joint and a rear face behind a square-cut front element and was left, as in the first pass. (4) The bevels at the rear of L5 and L10 agree with the drawn ones to about 0.5 mm. None of these can be improved with the fields this review may edit.

Labels checked and found correct. Group brackets: the tick marks of the figure's WIDE row sit at 968.5–1018.5, 1024.0–1163.0, 1327.0–1417.0, 1450.0–1498.0, 1515.0–1592.5 and 1628.5–1675.5 px, and the vertices of surfaces 1 and 3, 4 and 10, 12 and 18, 19 and 22, 23 and 26, 27 and 30 (prescription at the fitted scale) fall at 968.0–1017.5, 1024.1–1162.9, 1325.9–1417.4, 1449.8–1496.6, 1514.6–1593.1 and 1628.8–1676.0 px, so the six `groups` ranges are the patent's brackets and the texts G1 (+) to G6 (+) are its signs. The G3 bracket starts at L7, not at the stop (1315.3 px); paragraph 0034 lists the stop A between G2 and G3. Element names L1–L16 are the patent's reference signs; no `diagramLabel` is set, so the diagram prints 1–16, the same sequence. The sixteen `type` strings agree with the signs of the radii and with paragraphs 0043–0048. The `A` suffix and an `asph` entry are on surfaces 6, 21, 22, 23 and 24 only, as Table 1B and paragraphs 0044–0047 give them. The stop is surface 11, between L6 and L7. `varLabels` are the patent's d3, d10, d18, d22, d26 and d30. All sixteen element glass labels resolve to catalog rows whose nd and νd equal the stored values (largest differences 0.000006 and 0.05); none is unmatched, and the patent text names no glass.

Special-dispersion tags. The patent text does not call any glass anomalous, extra-low-dispersion or by a trade name. It only bounds Abbe numbers and partial-dispersion deviations. Paragraph 0141: "The condition expressed by this inequality (2) defines a preferred range of an abbe number of a negative lens, which is one of two lenses that form the bonded lens in the second lens group G2" (50 < νd < 90; L4). Paragraph 0152: inequality (4) "defines a preferred range of an abbe number of at least three positive lenses located closer to the image plane than the aperture stop A is" (50 < νd < 100; Table 6 lists L8, L10 and L11). L15 is covered by no condition. Paragraphs 0134, 0146 and 0157 bound the deviation ΔθgF of L5, L9 and L16, none of which is tagged. So `"inferred"` is the right value on L4, L8, L10, L11 and L15 and `"patent"` is not supported for any element. One point the patent cannot settle: L14 (νd 70.4) is 1.3 below L4 (71.7), so which of the two is the manufacturer's fifth ED element rests on the manufacturer's drawing.

Zoom movement. Table 1C lists its columns as wide-angle, middle, telephoto, and every `var` array is in that order: d3 1.2133 / 15.2146 / 31.0268, d10 28.0712 / 14.5482 / 5.6396, d18 5.9766 / 3.4487 / 2.2896, d22 3.3108 / 2.2530 / 1.8554, d26 6.5833 / 13.0003 / 27.7508, d30 17.2633 / 27.9899 / 33.4165; `zoomPositions` ascend. These are the changes paragraph 0049 states (G1–G2 increases, the next three decrease, G5–G6 and G6–image increase). Movement toward the object, wide to middle and middle to long, model against the bracket ticks of rows (c) of the figure (read to about 0.4 mm): G1 14.04 and 25.52 mm against 13.90 and 25.41; G2 0.03 and 9.71 against −0.18 and 9.67; G3 with the stop 13.56 and 18.62 against 13.99 and 18.23; G4 16.09 and 19.78 against 15.93 and 19.98; G5 17.14 and 20.18 against 17.03 and 20.07; G6 10.73 and 5.43 against 10.59 and 5.43. All six move toward the object throughout and none reverses; G2 is stationary to within the reading between wide and middle, as the figure's vertical line shows. The page's zoom overlay shows the same six directions and a largest travel of 39.56 mm (G1).

Focus. The figure's arrow under G5 points toward the image and paragraph 0050 says the same; no finite-focus spacing is printed. On the page the focus control is marked "Not modeled", the readout stays at ∞, the diagram at its far end is pixel-identical to infinity, and the focus movement overlay is disabled. `focusDescription` says this in plain terms.

Aberrations against FIG. 1B (d-line; plot scale 117.2 px per 0.2 mm and per 5 %, one pixel 0.0017 mm or 0.043 %; paragraph 0211 gives the ordinates as F-number and image height). Model values come from a scratch real-ray trace with the cover plate, measured from the paraxial focus as the plots are; the sagittal and meridional foci were computed with Coddington's equations along the chief ray and reproduced to four decimals with close parabasal rays.

- Spherical aberration at F4.12, plot / model, at pupil fractions 1.0, 0.9, 0.7 and 0.5. Wide: −0.120 / −0.119, −0.105 / −0.106, −0.070 / −0.075, −0.036 / −0.043 mm. Middle: about −0.07 / −0.072, −0.070 / −0.065, −0.050 / −0.050, −0.028 / −0.030 mm. Long: about −0.03 / −0.037, +0.081 / +0.079, +0.041 / +0.042, +0.017 / +0.017 mm. At the model's own wide-open apertures (f/2.84 and f/3.41) the marginal values are −0.201 and −0.193 mm, outside what the patent plots.
- Distortion at image heights 0.9 and 0.5 of 27.5 mm, plot / model on the paraxial plane. Wide: −2.99 / −3.04 % and −1.44 / −1.46 %, with −2.97 / −3.03 % at the corner (−3.10 % on the printed image plane). Middle: the curve stays inside the axis ticks (under 0.3 %) / −0.20 % and −0.14 %. Long: +0.58 / +0.59 % and +0.21 / +0.18 %.
- Sagittal focus at heights 1.0, 0.8 and 0.6, plot / model. Wide: −0.032 / −0.033, −0.053 / −0.040, −0.048 / −0.042 mm. Middle: about −0.12 / −0.116, −0.103 / −0.100, −0.050 / −0.052 mm. Long: −0.123 / −0.120, −0.067 / −0.062, −0.036 / −0.018 mm.
- Meridional focus, plot / model. Wide: −0.095 / −0.092 at 0.7, −0.077 / −0.091 at 0.9, −0.066 / −0.009 at the corner. Middle: −0.095 / −0.122 at 0.7, −0.126 / −0.135 at 0.82, about +0.06 / +0.091 at the corner. Long: +0.111 / +0.104 at 0.6, +0.111 / +0.089 at 0.8, +0.204 / +0.214 at the corner.

Spherical aberration and distortion agree to the reading. The field curves have the same signs, turning points and end values, but differ by 0.01–0.03 mm in mid-field at all three stations, and at the wide corner the model's meridional focus runs from −0.078 mm at 0.96 of the field to −0.009 mm at the corner where the plot ends at −0.066 mm. The dashed curves are read from dashes about 0.04 of the field apart, and the plot may be a smoothed curve through few field points; no printed value explains the difference, and nothing was changed on account of it.

Observations outside this review's edit list. (1) The figure draws the stop opening at about 8.3, 10.2 and 12.3 mm in its wide, middle and long panels, the F4.12 radii (8.355, 10.054 and 12.183 mm), as the first pass noted; the fixed-iris model is the owner's decision and was not touched. (2) No `zoomLabels` are set; the field is optional and the page labels the slider ends 36.05 mm and 96.99 mm. (3) Front page as read: US 2026/0036794 A1, 5 February 2026, application 19/272,642 filed 17 July 2025, priority JP 2024-125127 of 31 July 2024, Panasonic Intellectual Property Management Co., Ltd., inventors Emiri Suzuki and Naoto Nishimura; the data file's patent fields agree.

Limitations. The halftone limits any single rim reading to about 0.3 mm and the bevel feet to about 0.5 mm. The engine illumination figure is a meridional curve; no rim changed, so no full-pupil comparison was needed. Close focus is not modeled, so no focus direction or travel could be checked on the page. The manufacturer's drawing was not viewed.
