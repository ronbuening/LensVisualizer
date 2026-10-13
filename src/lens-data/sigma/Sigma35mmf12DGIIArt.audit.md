# Source-first audit — Sigma 35mm F1.2 DG II | Art

## Selection and controlling references

- Patent: US 2025/0334778 A1, Numerical Example 2.
- Exact stem: Sigma35mmf12DGIIArt.
- Original patent SHA-256: 5e9f60bf8e49297048365f1c7de8040cf035b4de1f5d6b1805f657acc2470897.
- Original card SHA-256: 2a0451b5fade6d35509f66bdcec8bb1762e9dae7f74193c0e248784cfc5e5100.
- Controlling main revision: 53470da5a5cbda1807d1e523fbc71963e5a1adc7. All supplied reference hashes were checked. CHAT-1.0 shared protocol, dossier contract and actual Stage 4 prompt apply.
- Received Stage 3 archive SHA-256: bb8d4b776f27145ab5a70446d8600fa74652d8f3eace5142dd0e8d75aa6c687c.
- Received data SHA-256: 02e8c8a39a3a31ee94b19b0ea76ee664e4e98735e58d601a8d9b420046644911.
- Received analysis SHA-256: 9941d87e7f121c76493c2a16c712c7cf5255dd6d2edc4ded75e49118225f3b43.

Original source bytes remain unchanged. No example substitution, uniform scaling, patent-value repair, plate omission, synthetic cement, geometry exception or integration action is applied.

## Independent Pass A and actual exposure

The baseline was frozen before opening the candidate, author dossier, author calculations or qualifications. Its fingerprint is e9fc214813116e03a46c5a587bfa334b2c4e9db8edc61a5ddd3e425a8e631333. The seven-file source-only checkpoint archive SHA-256 is af20bf74a5746f3f934c7330fe82bf8263a0e00b9af2b17c86c51bddef44a099.

Frozen evidence SHA-256 is 995a7987310f3f06bbf97c5774ffcab8e2af1c71a0213db3031505f4bf52d2fa; frozen source-only verifier SHA-256 is 3b831fead51d5c014445326805de81177077fd068d6f8ed85721587400bf6b05; frozen results SHA-256 is 77ac6601f227859351639c8826a0659d771bff8709b2f113da49fb32c0c37ab3. The original evidence object is preserved under independentPass.frozenEvidence and reserializes to its exact original hash. Fresh algorithms are retained as a distinct verifier section, mechanically renamed with a pa_ prefix to avoid collisions. Their inputs and conclusions were not rewritten to match the candidate.

The original card contained only its four selection fields. The image-only patent was inspected through rendered pages, with OCR used only as a locator/helper. Unavoidable neighboring-source exposure included the front-page abstract/Example 1 figure, contact sheets used to locate the selected table, adjacent Example 1/3 material on shared pages 41–44, and Example 6/all-example conditions sharing page 49. Only Example 2 values were entered. Shared project glass catalogs were consulted independently from coordinates, without author glass labels. This establishes candidate-blind source/method independence, not complete blindness to neighboring patent material.

Pass A exposed two literal fixed-group conservation failures and a group-EFL rounding-boundary issue. Its verifier deliberately exited 1, and the source-only clean replay exactly reproduced those failures. That historical checkpoint remains unchanged. Pass B distinguishes these raw observations from the defensibility of a faithful, explicitly limited representation.

## Extraction and source conventions

The principal source locators are:

| Material | One-based PDF location |
|---|---|
| Inventor, applicant, publication, priority | Page 1 |
| Example 2 optical section | Page 7, Figure 6 |
| Example 2 structure and focus | Page 39, printed 8, paragraphs 0151–0157 |
| Units, spectral and sag conventions | Page 41, printed 10, paragraphs 0187–0194 |
| Surfaces 1–2 | Page 42, printed 11, below Numerical Example 2 heading |
| Surfaces 3–31, aspheres, system values, variable distances | Page 43, printed 12 |
| Functional group focal lengths | Page 44, printed 13, before Numerical Example 3 |
| Example 2 condition values | Page 49, printed 18, EX2 column |
| Condition definitions | Pages 34–38 and 49–51 |

All 31 numbered rows are accounted for: 30 refracting surfaces and the published diaphragm at 12. The model contains 17 physical elements, 13 air-separated groups, five functional groups and four cemented doublets. Eight aspheric surfaces belong to L3, L7, L13 and L17. Source stars map to A-suffixed labels; surface 12 maps to the unique STO. Cemented interfaces belong to the downstream element.

The source is d-line, 587.6 nm, with millimetre lengths. Positive radius places the center of curvature imageward. The denominator contains 1+K, so K is copied directly; all eight K values are zero. Every A4–A12 term is retained, including positive A10=1.19593e-14 on 13 and negative A12=-6.05302e-16 on 31. A14=0 is schema completion only. No geometric/diffractive substitution occurs.

No physical rear plate or inactive bookkeeping plane is listed. The final 17.4972 mm gap is physical air from source surface 31 to the image plane, in both states. No invented camera stack or t/n replacement is used.

## Model transformations and numerical reconciliation

Every patent R, d, nd, vd, PgF, nonzero/zero asphere coefficient and published focus endpoint matches the frozen independent extraction. Source-derived quantities remain at unit scale. Corrections affect glass-equivalent labels, interpretation and verification coverage; the source numerical payload does not change.

The fresh sequential height/reduced-angle path and separately composed ABCD path reproduce:

| Quantity | Infinity | Published finite configuration |
|---|---:|---:|
| EFL, mm | 34.6005730731 | 34.1359164135 |
| Collimated-input BFD at that configuration, mm | 17.4977113434 | 16.6444596389 |
| Physical last gap, mm | 17.4972 | 17.4972 |
| First vertex to image, mm | 128.7355 | 128.7355 |
| Petzval sum, mm⁻¹ | 0.0019936333803 | 0.0019936333803 |

The finite source object lies 1348.7267 mm before the first vertex. Exact object-to-image distance is 1477.4622 mm, consistent with the integer 1477 mm table heading. Its paraxial best-focus image distance is 17.4978551663 mm, leaving +0.0006551663 mm residual behind the unchanged image plane. The infinity residual is +0.0005113434 mm. These source-rounded residuals remain visible; image gaps are not refitted.

At best focus, finite transverse magnification is -0.0249999302. At the authored image plane, ABCD A is -0.0249807373 and B is nonzero. A alone is therefore not a unique conjugate-plane magnification. The final analysis now identifies both reference planes.

Standalone element powers, cemented-assembly net powers, functional-group EFLs, principal planes, pupils, per-surface Petzval terms and all 13 conditions are retained in executed results. The two group focus sensitivities are also checked by small independent translations. Track/EFL exceeds one and BFD/EFL is below one; neither telephoto nor retrofocus is claimed under the controlling definitions.

The source does not publish iris diameter. The Pass A comparison iris of 16.846328243 mm radius was paraxially inferred. The candidate uses the current application's exact axial-ray calibration, 18.000304135 mm, from an entrance launch height EFL/(2×1.24). These are different declared inference conventions; neither is a measured source diameter. Agreement with F1.24 is calibration. Baseline nominal EP radius is 13.951843981 mm; current downstream UI pupil radius at infinity is 14.907547288 mm. Verification treats those launch conventions separately.

## Literal focus inconsistency and its treatment

Raw fixed-group conservation comparisons remain FAIL:

| Gap pair | Infinity sum (mm) | Finite sum (mm) | Difference (mm) |
|---|---:|---:|---:|
| d2+d6 | 11.0731 | 11.0727 | -0.0004 |
| d20+d24 | 9.2439 | 9.2443 | +0.0004 |

Four independently rounded four-decimal gaps permit only 0.0002 mm aggregate difference. The cause of the 0.0004 mm discrepancy is not established and is no longer asserted to be ordinary last-place rounding. The literal source shifts G2 by -0.5258 mm, nominally fixed G3 by -0.0004 mm, and G4 by -0.6211 mm while preserving total track and G1/G5 positions.

The resolution is source fidelity with accurate qualification: exact published endpoint rows govern the numerical model; G3 is described as nominally fixed; no exact fixed-G3 constraint or reconstructed cam is imposed. This does not make the failed conservation assertion pass, and it does not authorize a source repair or a policy waiver. The tiny inconsistency is bounded and disclosed rather than silently normalized.

Calculated G5 EFL is -68.0549707434 mm against printed -68.06 mm. Its literal ±0.005 comparison also remains FAIL by 0.000029257 mm. A separately executed input-quantization sensitivity envelope, using ±0.00005 mm radii/spacings and ±0.000005 indices, supports the precision-consistency check. Neither the failed observation nor its original tolerance is erased.

## Glass and spectral review

All 17 source glasses publish absolute θgF. No complete measured nC/nF/ng set is supplied by the patent. Stored dPgF equals θgF−(0.6438−0.001682νd), while patent condition deviations use 0.6483−0.0018νd. Both baselines are retained separately. No APO performance or factory melt identity is inferred from these values.

The supplied primary HOYA 20260707 including-obsolete catalog was rehashed and independently searched by coordinates. The frozen pass additionally searched archived OHARA, HIKARI, SCHOTT, CDGM and SUMITA vendor excerpts. Those archived excerpts alone were not represented as fresh manufacturer authentication.

During Pass B, direct OHARA primary datasheet checks established:

| Elements | Final equivalent class | Native nd / vd / θgF | Primary source |
|---|---|---|---|
| L8, L16 | S-NBH58, supplier unconfirmed | 1.78880 / 28.43 / 0.6009 | OHARA 25-04 S-NBH58, page 1 |
| L13 | L-LAH91, supplier unconfirmed | 1.76450 / 49.09 / 0.5528 | OHARA 25-04 L-LAH91, page 1 |

The L-LAH91 manufacturer d-line code is 765491, not the candidate's inferred 764491. S-/L- prefixes remain distinct. The original Unmatched strings are recorded in the correction ledger, and the final labels identify coordinate-equivalent classes rather than manufacturer/melt provenance. Source nd/vd/PgF values are unchanged. Primary coefficients are retained and independently evaluated at C/d/F/g.

The real pinned runtime now resolves 16 compatible catalog entries; E-FEL2 remains an Abbe-plus-source-PgF fallback. Every runtime g/F/C ratio reproduces its source θgF. The three revised labels change the catalog dispersion path, so the complete runtime and portable replay were rerun. D-line geometry, source EFL and apertures remain unchanged.

Primary sources: [S-NBH58](https://www.ohara-inc.co.jp/assets/en/product/pdf/esnbh58.pdf) and [L-LAH91](https://www.ohara-inc.co.jp/assets/en/product/pdf/ellah91.pdf). Their text was retrieved and checked; the screenshot service returned cache misses, so no visual PDF screenshot or byte hash is claimed for these live sources. The source table blocks and computed residuals needed for offline replay are in evidence/results.

## Geometry and actual launch coverage

All optical semi-diameters remain inferred from Figure 6 and construction-stage exact-ray/geometry refinement. They are not source-published manufacturing clear radii. No SD, edge tolerance, slope limit, gapSagFrac or trim policy was relaxed during audit.

A separately authored geometry path recalculates analytic sag, actual rim slope, conic radicand, front/rear SD ratio, element thickness and shared-band gap intrusion at 4097 radial samples. Minimum thickness is 0.448106867 mm and maximum rim angle is 61.700499484°. Source focus interpolation is linear with fixed shapes/SDs, so minimum physical air gaps occur at one of the two endpoints; the gap-envelope check covers that interpolation without claiming continuous-state ray transmission. Finite radial sampling remains disclosed.

Actual pinned validateLensData and the core buildLens function in runtimeLens.ts, followed by normalizeRuntimeLens, pass. The thin public entry facade is not separately executed. The actual element-render diagnostic reports zero hidden trim at five focus samples. The retained SVG was regenerated by the actual element-shape helper, converted for visual inspection and compared with Figure 6. It is a standalone illustration, not a browser/product screenshot.

The original 200 author baseline/current-UI launch samples were independently replayed against exact module bytes. An added downstream audit follows the pinned useLensComputation/useOffAxisRays call sites, uses current analysis-field/pupil geometry, actual ray-density and chief-launch helpers, and samples both focus-tracking settings at focusT 0, 0.25, 0.5, 0.75, 1 and F1.24, 2.8, 8, 16:

| Added scope | Samples | Clear through last lens |
|---|---:|---:|
| Current-pupil normal on-axis fan | 240 | 240 |
| Current-pupil normal default off-axis fan | 200 | 200 |
| Current-pupil dense default off-axis fan | 440 | 440 |
| Current-pupil normal fan at source 31.87° half-field | 200 | 160 |

The source full-field probe has 40 first clips at surfaces 1, 18, 30A or 31A, outside cemented junctions. Ten clipped ghost continuations subsequently return an intersection failure; none is an otherwise-clear unexplained failure. Those rays are not counted as transmitted. Ordinary sequential-stack output is at the last vertex; image intercepts are the computed free-space continuation to the authored image plane. The low-level reachedImagePlane flag is retained unchanged and is not used as a surrogate for that explicit continuation calculation.

The prime aperture-slider arithmetic is reproduced from the inspected pinned aperture.ts/compat.ts formula. Pupil, field, density, exact trace, geometry and finite-selector functions execute from the actual dependency tree. The React hooks and whole compatibility facade are not mounted/executed, and neither full type checking nor browser UI acceptance is claimed.

The distinct physical-iris survey retains 65 targets over three focus states, three fields and three apertures. Axial targets transmit. At full field/F1.24, 5/3/3 rim aims at focusT 0/0.5/1 remain INCONCLUSIVE. All solved first clips are outside cemented junctions. Neither this finite survey nor the clear default fan proves whole-pupil corner transmission. No aperture enlargement or waiver hides those observations.

The actual mtfFiniteConjugate and mtfFiniteObjectPoint functions were obtained at the pinned revision, verified against their server blob identity and executed. Only focusT=1 is selected; infinity and sampled interpolated stations are not. Its object point is 1348.7267 mm before the first vertex. A nonzero-aberration negative control returns no selection. This is selector verification, not a computed finite MTF result.

## Corrections and validation independence

1. Corrected the unsupported “independent rounding causes the 0.0004 mm shift” explanation to an unestablished literal source inconsistency; header, focusDescription and analysis now agree. No gap changed.
2. Distinguished best-focus transverse magnification -0.024999930 from authored-plane ABCD A=-0.024980737.
3. Replaced L8/L16 and L13 Unmatched labels with source-supported S-NBH58 and L-LAH91 class equivalents, preserving supplier uncertainty and all patent numbers. Removed the incorrect inferred 764491 code. Runtime spectral resolution and all dependencies were recalculated.
4. Added downstream UI/default/full-field and finite-selector evidence. Default clear coverage and full-field vignetting remain separate; unresolved physical-iris aims were not recategorized.

The source baseline and its calculations are independent of the author. After exposure, correction validation is an auditor-authored reconciliation using the exact candidate and shared real project modules. The portable 3D Newton/vector-Snell implementation is retained from the author and manually reviewed; fresh Pass A paraxial methods and fresh Pass B geometry remain separately identifiable. No broader independence is implied.

## Quantitative and interpretive claim map

| Final analysis claim | Governing calculation/source |
|---|---|
| Patent metadata and production correlation | Original PDF page 1; official Sigma product and launch pages independently rechecked |
| Architecture/group/element/cemented powers | implementedModel states; independentBaseline recomputed sourceModel |
| Cardinal planes, EFL, BF and track | sourceModel/implementedModel states and fresh independent-first-order checks |
| Petzval | surface-by-surface phi/(n*nPrime) ledger, independent sum |
| Focus displacement/finite plane/magnification | literal gaps; sourceModel finiteConjugate; independent baseline finite conjugate |
| Spectral ratio and glass labels | native source coordinates; primary HOYA/OHARA evidence; primaryOHARAChecks and real runtime glass rows |
| Eight asphere coefficient/departure rows | frozen source comparison and independentGeometry.rims at actual stored SDs |
| Conditions and group sensitivities | source condition table; executed beta formulas and finite-difference checks |
| Inferred iris and both EP quantities | exact stop calibration and runtime/current-pupil records |
| Default/full-field launch claims | runtime auditorDownstreamUI; portable per-launch cross-check |
| Physical-iris unresolved targets | implementedModel.physicalIrisSurvey, retained 5/3/3 counts |
| No hidden trim | actual runtime states.renderDiagnostics |
| Finite-selector limitation | actual pinned mtfConjugates module record |

Manual review checks every interpretive paragraph: source design rationales are attributed; signs/power are not treated as unique aberration decompositions; aspheric position is not proof of fabrication process; marketed specifications are not substituted for design values; equivalence is not supplier identity; source condition satisfaction is not APO/performance certification. Final analysis remains third-person technical prose with ordinary primary-source links.

## Final gate and integration boundary

The final manifest binds the earned gate to exact final bytes and the stated scopes. Raw source-comparison failures and unresolved physical rim aims remain visible alongside the supported resolution/limited-coverage checks. No source correction or exception is granted.

Final packaging contains the original PDF/card, corrected data/analysis, consolidated evidence/verifier/results/audit/manifest, targeted runtime harness/record and one illustration. Both standard-library portable replay and actual pinned-module replay are repeated after clean extraction without overwriting packaged results. Exact membership, UTF-8/JSON validity and every member hash are checked.

Real TypeScript compilation, Prettier, mounted browser/React UI, full project build, corpus sweeps, metadata generation and integration are NOT_RUN, requiredAt integration. Node TypeScript stripping is execution support, not type checking. The actual optical-module checks above are not relabeled as those unperformed gates. Integration remains INTEGRATION_PENDING.

## Reproduction interface

Portable numerical/claim/fixture replay uses Python 3.12 with only its standard library:

```text
python Sigma35mmf12DGIIArt.verify.py --package-dir <extracted-dossier> --output <external-results.json>
```

Actual targeted module replay uses Node v24.19.0 and the separately identified 82-file source dependency, whose exact paths, URLs and SHA-256 values are retained in evidence.runtimeReferences:

```text
node Sigma35mmf12DGIIArt.runtime.mjs --package-dir <extracted-dossier> --runtime-root <verified-pinned-source-tree> --output <external-runtime.json>
```

The runtime harness verifies every dependency hash before importing. No per-lens numerical data is fetched during either replay. Compare regenerated JSON with the packaged records; do not overwrite packaged files. Missing shared source permits portable numerical replay but cannot be represented as rerunning the actual project code.

## 2026-10-06 — Semi-diameter pass against the patent figure

Scope: `sd` values only, following `agent_docs/patent-figure-sd-audit-procedure.md`. No `R`, `d`, `nd`, glass, asphere coefficient, focus gap or `STO` value was touched. Eight surfaces on five elements changed; the other 22 stored values agree with the drawing and stay.

### Source and scale

- Figure: `patents/US20250334778A1.pdf`, PDF page 7 (Sheet 6 of 30), FIG. 6, the Example 2 section at infinity. The page is a 1-bit 2560 × 3300 px scan (300 dpi, no text layer) with the optical axis vertical and the object at the bottom. It was measured at native resolution.
- Axis at x = 1416 px. First vertex at y = 2860 px and last vertex at y = 817.5 px: 2042.5 px for the tabulated 111.2383 mm, so 18.362 px/mm (0.05446 mm/px).
- Two-span check: surfaces 1→20 give 18.34 px/mm (1418.5 px for 77.3279 mm) and surfaces 20→31 give 18.40 px/mm (624.0 px for 33.9104 mm). The image plane is predicted at y = 496.2 px and drawn at 497.5 px.
- Every surface vertex of Example 2 lands within about 2 px of a drawn crossing (14/15, 22/23 and 26/27 merge into one band each). The drawing is therefore a scaled plot of this prescription, not a schematic.
- The stop marks begin 330 px from the axis on both sides, 17.97 mm, against the stored 18.0003 mm iris that was calibrated from F1.24.
- Rims were read as the centre of the edge line (median inner and outer ink) on both sides of the axis; the two sides agree within 1 px (0.06 mm) for every element. The lines are dithered and 3–6 px wide, so one reading is good to about ±0.1 mm.

### What the figure shows

Drawn rim semi-heights, front to rear, with the stored value in parentheses: L1 29.4 (29.5), L2 22.5 (22.5), L3 18.3 (18.4), L4 15.2 (14.5), L5 17.8 (18.0), L6 18.4 (18.5), L7 21.4 (21.5), L8–L9 21.1 (21.1 / 21.4 / 21.4), L10 21.5 (21.5), L11 20.7 (20.8), L12 19.5 (was 20.5), L13 19.3 (was 21.1), L14 18.35 (18.9), L15 17.7 (17.8), L16 17.55 (17.8), L17 16.3 (was 15.0).

Six concave faces are drawn with a flat annulus outside the polished bowl. The bowl end follows from the axial position of the annulus and the surface sag:

| Surface | Annulus position | Sag at bowl end (mm) | Bowl end (mm) | Traced reference (mm) |
|---|---|---:|---:|---|
| 2 (L1 rear) | y = 2738.6 px | 2.70–2.78 | 26.4–26.8 | chief 19.5 |
| 4 (L2 rear) | y = 2501.5 px | 7.134 | 17.7 | axial 13.00, chief 12.84 |
| 8 (L4 rear) | y = 2265.5 px | 3.404 | 14.0 | axial 14.09 |
| 9 (L5 front) | y = 2245.1 px | 2.982 | 14.5 | axial 14.43 |
| 22 (L12 rear) | y ≈ 1275 px | 1.135 | 17.7 | axial 17.65 |
| 29 (L16 rear) | y = 871.0 px | 3.633 | 14.7 | axial 9.97, chief 12.45 |

On surfaces 8, 9 and 22 the drawn bowl end differs from the traced F1.24 axial marginal height by 0.05 mm or less, inside the reading error of about 0.1 mm. Together with the stop marks, this suggests the drawing carries the design's clear apertures and that its flats are not arbitrary. L17's two aspheric faces follow the polynomial to at least 15.4 mm and meet the rim without a flat.

### Changes

| Surface | Element | Before | Figure | After | Evidence and reason |
|---|---|---:|---:|---:|---|
| 4 | L2 rear, R = +25.55 | 22.5 | bowl end 17.7 (rim 22.5) | 17.7 | At 22.5 mm the bowl was 13.44 mm deep, against a 7.13 mm drawn depth and a 6.80 mm air gap, so the edge of L2 wrapped past the whole of L3. Stored value 27 % above the optical extent. |
| 21, 22 | L12 | 20.5 | 19.5 | 19.5 | Drawn 5 % smaller. Moved with L13, its partner in the moving G4; left alone it would stand 1.2 mm above L13 where the figure draws 0.2 mm. |
| 23A, 24A | L13 | 21.1 | 19.3 | 19.3 | Stored value 9 % above the drawn rim and larger than L11, where the figure steps down by 1.4 mm from G3b to G4. The package had enlarged it so that no default-fan ray clipped. |
| 29 | L16 rear, R = +31.6 | 17.8 | bowl end 14.7 (rim 17.55) | 14.7 | At 17.8 mm the bowl was 5.49 mm deep, deeper than the 5.35 mm air gap, and its edge passed the front of L17. Stored value 21 % above the optical extent. |
| 30A, 31A | L17 | 15.0 | 16.3 | 16.3 | The package had reduced L17 to satisfy the shared-band gap rule against surface 29 at 17.8 mm. With surface 29 at its bowl end the drawn rim passes. No slope reversal on either face out to 17 mm. |

The renderer joins unequal front and rear rims with a straight edge. L2 (22.5 / 17.7) and L16 (17.8 / 14.7) therefore draw a chamfer where the figure has a square annulus. The alternatives are worse: with L17 at 16.3 mm the validator rejects surface 29 above about 15.2 mm (combined sag 5.81 mm against 4.811 mm allowed at 17.8), and surface 4 at the rim wraps L3.

### Values retained

- **Surface 9 (L5 front), 18.0 mm.** Bowl end 14.5 mm under a 17.8 mm rim. Run to the rim, the bowl is 1.8 mm deeper than drawn; cut to the bowl end, the whole 6.6 mm edge of L5 becomes a chamfer, about four times the silhouette-area error.
- **Surface 2 (L1 rear), 29.5 mm, and surface 22 (L12 rear), 19.5 mm.** Rim-height bowls are 0.6–0.7 mm and 0.2 mm deeper than drawn. A 17.7 mm value on surface 22 would also sit only 0.05 mm above the axial marginal ray.
- Trials with surface 2 at 26.5, surface 9 at 14.5 or surface 22 at 17.9 mm leave the clear count of every replayed fan below unchanged; only the first-clip surface of ten dense full-field rays moves. These three are drawing choices, not clearance choices.
- **L4, 14.5 / 14.5 mm.** The drawn rim is 15.2 mm and the rear bowl ends at 14.0 mm. 15.2 mm on both faces is rejected by the gap rule against surface 9 (7.34 mm against 6.751 mm allowed), and 14.5 mm already clears the 14.09 mm axial marginal ray by 0.41 mm.
- **L14, 18.9 mm** (drawn 18.35, 3 % over) and every other element: within 0.3 mm of the drawing.
- **Cemented surface 19, 20.8 mm.** L10's rear annulus begins at 19.4 mm on the junction, but L11's front continues along the same sphere to its 20.7 mm rim.

### Clearance and model consequences

- Validator: no errors with the stored set. Image-circle floor: 0 undersized. Traced field coverage: the corner chief ray reaches 100 % of the format corner at 31.9°, clear, before and after.
- Exact meridional trace at F1.24 and Y = 21.63 mm (ω = 31.87° at infinity, 31.89° at the published finite state): no axial-marginal or chief-ray clipping at either focus state. Smallest axial margin 0.41 mm at surface 8 (unchanged); smallest chief margin 2.25 mm at surface 29. On the changed surfaces the axial / largest chief heights are 13.00 / 12.84 (4, chief at the finite state), 17.83 / 11.38 (21), 17.65 / 11.68 (22), 17.53 / 12.22 (23A), 17.06 / 12.75 (24A), 9.97 / 12.45 (29), 8.01 / 12.93 (30A) and 7.64 / 13.36 (31A) mm.
- Engine half-field estimate 30.686° → 32.722°, now limited by surfaces 29 and 31A; before, surface 31A at 15.0 mm held it below the patent's 31.87°. Default 60 % field 18.412° → 19.633°. F-number 1.24 and the iris are unchanged.
- Diagram-fan replay through the project's pupil, field, ray-density and trace helpers (five focus samples, four apertures, both focus-tracking settings). With the package values it reproduces the tallies recorded above: 240 / 240 on-axis normal, 200 / 200 default off-axis normal, 440 / 440 dense. With the stored values: 240 / 240, 187 / 200 and 427 / 440. The 13 clipped rays are ±0.75-pupil rays at F1.24, ten first at surface 21 and three at surface 7. The G4 change alone gives 190 / 200 (ten at surface 21); the rear-group change alone gives 193 / 200, because the default field grows with the half-field; surface 4 alone leaves 200 / 200.
- Five-ray fan at the 31.87° source half-field: 160 / 200 clear, with first clips at surface 1 (10), 18 (10) and 29 (20); 30 at F1.24 and 10 at F2.8. The package recorded 160 / 200 with clips at 1, 18, 30A or 31A.
- Minimum sampled element thickness 0.448107 mm (L13 rim at 21.1) → 0.789964 mm (L11 rim). Maximum rim angle 61.700499° (surface 4 at 22.5) → 49.880833° (cemented surface 19). Zero hidden render trim at five focus samples.
- Aspheric rim departures recomputed for the analysis table: 23A −400.066 µm and 24A +193.688 µm at 19.3 mm; 30A −492.191 µm and 31A +877.391 µm at 16.3 mm.
- The local page was compared with FIG. 6 at infinity and at the finite state. The oversized L2 and L16 horns are gone, G4 steps down from G3b as drawn, and L17 stands clear of L16. No elements overlap at either state.

### Superseded statements and limits

- In "Geometry and actual launch coverage" above, the minimum thickness, maximum rim angle, the all-clear default-fan tallies and the first-clip surfaces of the full-field probe describe the package semi-diameters. The numbers in this section replace them. The 65-target physical-iris survey was not repeated.
- The default fan is no longer free of clipping. This is deliberate: the drawn G4 rim is the evidence, and the clipped rays are the 75 % zone at 60 % field wide open.
- L2 and L16 chamfers and the surface 9 horn are renderer limits, not measurements.
- The figure gives one infinity state. Nothing here tests the rims against a focus state the patent does not tabulate.

## 2026-10-06 — Glass catalog coverage and metadata

- L2 (`E-FEL2 class`, 1.54072 / 47.20) named a HOYA glass the project catalog did not hold, so it used an Abbe-based
  C/F split. HOYA's E-FEL2 row was added from the vendor AGF of 2026-07-07 (formula-1 polynomial;
  coefficient-evaluated 1.540720 / 47.20, ΔPgF +0.0034 against the engine normal line, equal to L2's source-derived
  `dPgF` of +0.0034). Its product code 541-472 is shared with OHARA S-TIL2 and was left off, so bare-code labels
  elsewhere stay on S-TIL2. All seventeen elements now resolve to catalog dispersion curves; no label, nd, νd or
  `dPgF` changed, and the source-derived `dPgF` values stay authoritative at the g line.
- `imageCircleMm: 43.26` added from the source image height of 21.63 mm, as on the other full-frame Sigma models.
- `specs` restated in the catalog's usual form: design f = 34.60 mm, design F/1.24, eight aspherical surfaces on
  four elements.
- Display name (`SIGMA 35mm f/1.2 DG II | Art`, without the first version's "DN"), mounts (L-Mount, Sony E) and
  format were reviewed and left as authored.

## 2026-10-06 — Second review: diagram, labels and movement

An independent second look at the lens as the local site draws it. Compared: the page at infinity and at the
finite state, the focus-movement overlay at both ends, and the element inspector for L3, L4, L6, L7, L11, L13, L15
and L17, against FIG. 6 (PDF p7), the Example 2 description (PDF p39, ¶0151–0157), the tables on PDF pp42–44, the
condition values on PDF p49 and the condition text on PDF pp34–37. One semi-diameter, the group labels, the element
roles, three dispersion tags and the focus description changed. No `R`, `d`, `nd`, `vd`, asphere coefficient, gap
value, glass string or `STO` value was touched.

### Silhouette, re-measured

The figure was profiled again from the 300 dpi page raster without reusing the first pass's readings. The axis is at
x = 1416 px. All 28 crossing bands from surface 1 (y = 2860) to the image plane (y = 497.5) fall within 2 px of the
Example 2 infinity spacings at 18.362 px/mm; three bands hold two surfaces each. Rims were read as the outermost ink on both sides of the axis; the
dithered edge lines make each reading a 3–4 px band.

| Element | Outermost ink (px from axis) | Rim (mm) | Stored (mm) |
|---|---:|---:|---|
| L1 | 539–542 | 29.4–29.5 | 29.5 |
| L2 | 412–415 | 22.4–22.6 | 22.5 front, 17.7 rear bowl |
| L3 | 336–340 | 18.3–18.5 | 18.4 |
| L4 | 279–282 | 15.2–15.4 | was 14.5 both faces |
| L5 | 326–330 | 17.8–18.0 | 18.0 |
| L6 | 338–341 | 18.4–18.6 | 18.5 |
| L7 | 394–397 | 21.5–21.6 | 21.5 |
| L8–L9 | 387–390 | 21.1–21.2 | 21.1 / 21.4 / 21.4 |
| L10 | 394–397 | 21.5–21.6 | 21.5 |
| L11 | 380–384 | 20.7–20.9 | 20.8 |
| L12 | 358–361 | 19.5–19.7 | 19.5 |
| L13 | 354–357 | 19.3–19.4 | 19.3 |
| L14 | 338–341 | 18.4–18.6 | 18.9 |
| L15 | 326–329 | 17.8–17.9 | 17.8 |
| L16 | 322–325 | 17.5–17.7 | 17.8 front, 14.7 rear bowl |
| L17 | 299–301 | 16.3–16.4 | 16.3 |

The flat annuli were located as horizontal ink runs. Their inner ends put the bowl ends at 17.4–17.7 mm on surface 4,
13.8–14.1 mm on surface 8, 14.1–14.5 mm on surface 9 and 14.4–14.7 mm on surface 29. These agree with the first
pass's 17.7, 14.0, 14.5 and 14.7 mm. Every element except L4 was already within 3 % of the drawing.

Where the site still differs from the figure, and why it stays:

- **L2 and L16 chamfers.** The figure draws both as squared blocks with a flat rear annulus. The renderer joins
  the front and rear rim points with a straight line, so 22.5 / 17.7 and 17.8 / 14.7 draw a chamfer. Surface 4 at
  the rim height wraps L3, as the first pass found. A compromise of 19.3 mm on surface 4 was rendered and rejected:
  the validator accepts it, but the horn of L2 then reaches the front rim of L3, where the figure leaves about
  2 mm of air between L2's annulus (19.5 mm behind the first vertex) and L3's rim (21.7 mm). On surface 29 the
  validator rejects 15.2 mm (combined sag 4.88 mm against 4.811 mm allowed), so there is no room above 14.7 mm.
- **Surface 9 horn.** Kept at 18.0 mm for the first pass's reason; cutting it to the bowl end turns the whole
  edge of L5 into a chamfer.
- **L14.** Stored 18.9 mm is 2–3 % above the drawn rim. Left alone; the drawn height order L13 > L14 > L15 holds.

### Change to a semi-diameter

| Surface | Element | Before | Figure | After | Evidence |
|---|---|---:|---:|---:|---|
| 7 | L4 front, R = −148.27 | 14.5 | rim 15.2–15.4 | 15.2 | The figure draws L4 as a block whose front face runs to the rim; the stored value was 5 % short. The +0.75-pupil ray of the default off-axis fan needs 14.66 mm here and clipped. |

Surface 8 stays at 14.5 mm. The validator accepts 14.6 mm and rejects 14.7 mm against surface 9 (6.84 mm against
6.751 mm allowed), the drawn bowl ends at 14.0 mm, and the F1.24 axial marginal ray needs 14.09 mm. L4 therefore
draws a 0.7 mm taper over its 5.6 mm edge where the figure has a square corner.

Results with the edited file, before → after:

- Validator: no errors → no errors. Image-circle floor: 0 undersized. Corner chief ray: 100 % at 31.9°, clear.
- Engine half-field 32.7218° → 32.7218°, still limited by surfaces 29 and 31A. F-number 1.24 and the iris
  (18.0003 mm) unchanged. Default off-axis field 19.633° unchanged.
- Exact meridional trace at F1.24 and Y = 21.63 mm (ω = 31.87° at infinity, 31.89° at the finite state): no axial
  or chief-ray clipping. Surface 7 carries 14.04 mm axial and 6.52–6.55 mm chief height.
- Diagram-fan replay (five focus samples, four apertures, both focus-tracking settings): on-axis 240 / 240;
  default off-axis normal 187 / 200 → 190 / 200; dense 427 / 440 → 430 / 440. The three surface 7 clips are gone.
- Fan at the 31.87° source half-field: 160 / 200, first clips at surfaces 1 (10), 18 (10) and 29 (20), unchanged.
- Minimum sampled thickness 0.789964 mm and maximum rim angle 49.880833° unchanged. Zero hidden render trim at
  five focus samples.

The ten remaining clips are the −0.75-pupil ray at F1.24, stopping first at surface 21. Traced with the rims opened,
that ray needs 20.59 mm on surface 21, 20.73 mm on 22, 21.36 mm on 23A, 21.35 mm on 24A and 19.14 mm on 25. The
drawn rims are 19.5–19.7 mm (L12), 19.3–19.4 mm (L13) and 18.4–18.6 mm (L14). Clearing it would put L13 about 10 %
above the drawing and taller than L11, reversing the drawn step down from G3b to G4. At a 17.5° field the ray still
needs 20.5 mm on 23A. No rim choice consistent with the figure removes these clips; they are wide-open vignetting
at the drawn G4 aperture.

### Labels and tags

| Item | Before | After | Evidence |
|---|---|---|---|
| Group labels | G1, G2, G3 (7–20), G4, G5 | G1 (+), G2 (+) focus, G3a (−) on 7–11, G3b (+) on 13A–20, G4 (+) focus, G5 (−) | FIG. 6 brackets G3a, S and G3b inside G3. ¶0152 and ¶0155 give the signs. The group table on PDF p44 lists G3a from surface 7 (−35.31 mm) and G3b from surface 13 (+39.46 mm). The arrows under G2 and G4 mark the focus groups. |
| Element `role` | "Source functional group Gn; standalone … power" | Group, fixed or focusing, and G3a / G3b membership | Same paragraphs; claim 1 on PDF p49 for which groups stay fixed. |
| L6 `apd` | none | `patent` | ¶0103 and ¶0109–0111: high-index, high-dispersion glass with high anomalous dispersion for the lowest-Abbe positive lens of G3. Condition (9) printed 0.0387 against a 0.0200 floor. |
| L11 `apd` | none | `patent` | ¶0101–0108: low-index, low-dispersion glass with high anomalous dispersion for the highest-Abbe positive lens of G3. Condition (8) printed 0.0192 against a 0.0120 floor. |
| L15 `apd` | none | `patent` | ¶0061–0070: the same specification for the lowest-Abbe positive lens of G5. Condition (2) printed 0.0470 against a 0.0250 floor; condition (3) 16.48 against a 24.00 ceiling. |
| `focusDescription` | Directions only, distance to seven decimals | Adds the two travel amounts and names the fixed groups | Variable-distance table, PDF p43. |

Sigma's specification page, read on 2026-10-06, lists 17 elements in 13 groups with one SLD and four aspherical
elements, and mentions SLD glass and high-index glass with high anomalous dispersion without locating them. L11
(FCD515 class) is the likely SLD element; that is an inference and is recorded only in its `apdNote`. No `inferred`
tag was added.

Checked and left as they are:

- **Cemented brackets.** `L5–L6` (9–11), `L8–L9` (15–17), `L10–L11` (18–20) and `L15–L16` (27–29) match the four
  cemented lenses of ¶0155 and ¶0157, and the elements' `cemented` fields.
- **Element names.** The patent describes the lenses by shape only and gives them no designations, so sequential
  L1–L17 stand. All seventeen `type` strings agree with the signs of the radii and with ¶0153–0157.
- **Aspheric markers.** The table stars surfaces 5, 6, 13, 14, 23, 24, 30 and 31. The file carries the `A` suffix
  and an `asph` entry on exactly those eight.
- **Stop.** Surface 12 in the table, between L6 and L7, as drawn.
- **`varLabels`.** D2, D6, D20, D24 match the patent's d2, d6, d20, d24. The focus slider ends at 1.48 m.
- **Transcription.** The R, d, nd and νd of the 31 surface rows, the variable distances and the front-page
  inventor, assignee and date were read against the file while the pages were open. Nothing differs.

### Focus movement

- Order: index 0 of each `var` pair is the INF column and index 1 the 1477 mm column of the table on PDF p43.
- G2: d2 7.5696 → 7.0438 and d6 3.5035 → 4.0289. The group moves 0.5258 mm toward the object, as its arrow shows.
- G4: d20 6.9518 → 6.3311 and d24 2.2921 → 2.9132. The group moves 0.6211 mm toward the object, as its arrow shows.
- G1, G3 and G5 stay fixed, as ¶0152 and claim 1 state; BF is 17.4972 mm in both columns. The −0.0004 mm G3
  residual recorded earlier in this log is unchanged.
- The movement overlay shows six groups. G2 and G4 end on the object side of their starting marks, and the
  largest travel reads 0.62 mm. The other four markers do not move.

### Limits

- L2 and L16 chamfers, the surface 9 horn and the L4 taper are renderer limits, not measurements.
- The fan tallies come from replaying the project's pupil, field, ray-density and trace helpers. The off-axis fan
  was not switched on in a browser.
- The 65-target physical-iris survey was not repeated.

Cemented-group labels. After that review the four cemented brackets and the matching element `cemented` fields were
renamed from `L5–L6`, `L8–L9`, `L10–L11` and `L15–L16` to `D1`–`D4`, the short form used on the other six lenses of
this batch; the long labels of the second and third pairs nearly touched on the diagram. Surface ranges are
unchanged, and the analysis still names the pairs by their elements.
