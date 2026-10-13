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

Open: the STO row still stores `sd` 8.355165 mm, the F4.12 wide radius. The engine replaces it with the radius traced from `nominalFno` (12.18283 mm), so it has no optical effect, but it now reads as stale.

Open: glass labels were not changed. On nd, νd and θgF together the printed values equal current catalog glasses to the printed precision (θgF within 0.0001): HOYA E-FD15L (L1), LAC8 (L2), TAFD5G (L3), NBFD27 (L5), E-FD80 (L6), NBFD10 (L7), FCD1 (L8, L10, L15), FCD705 (L11), FC5 (L14), FDS24-W (L16) and BSC7 (cover plate), and SUMITA K-VC181 (L13). The file labels them with six-digit class strings instead. L13's "lanthanum crown class" is wrong for νd 41.1; it is a dense lanthanum flint. L7's stated proxy K-LaSFn14 is 0.0007 off in θgF where NBFD10 is 0.0001 off. HOYA M-FCD500 is 0.0005 off for L4. L9 and L12 were not re-checked.

Open: whether the production lens holds one maximum iris diameter through the zoom range is not established; Hasselblad publishes only f/2.8–4.
