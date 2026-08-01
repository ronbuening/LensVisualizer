# Voigtländer NOKTON Vintage Line 75mm F1.5 Aspherical VM — Stage 4 Independent Audit

## Job card

- **Patent:** JP 2020-122918 A
- **Lens:** Voigtländer NOKTON Vintage Line 75mm F1.5 Aspherical VM
- **Embodiment:** Example 3
- **Output stem:** `VoigtlanderNokton75mmf15AsphericalVM`
- **Audit date:** 2026-08-01

The patent and embodiment were held fixed. The first pass was performed from the rendered patent, official Cosina product material, and a newly written verification script before the earlier audit record was consulted.

## Handoff-package scope

The final handoff contains eight files, including the mandatory unmodified patent and job card. Duplicate drafts, prior audit material, rasterized patent pages, downloaded reference artwork, temporary plots, package-manager logs, and intermediate files are excluded.

## Independent source re-extraction

The rendered patent was treated as authoritative for the prescription and equation:

- Page 1 confirms publication JP 2020-122918 A, application JP 2019-015796, filing date 2019-01-31, publication date 2020-08-13, applicant Cosina Co., Ltd., and inventors 島田 博和 and 菅野 靖之.
- Page 10 gives the standard conic-plus-even-polynomial sag equation with `sqrt(1 - (1 + K)c²h²)`. The tabulated `K` is therefore already the standard conic constant.
- Page 12, Table 5 gives Example 3 at `FL = 74.5`, `FNO = 1.54`, and `W = 16.0°`; Table 6 gives the two aspheric surfaces and coefficients.
- Page 15, Figure 5 confirms the seven-element/six-group layout, rear cemented pair, and final double-sided asphere. Figure 7 gives `TT = 90.872 mm`, `f = 74.500 mm`, and rounded `TT/f = 1.22`.

Freshly transcribed active sequence:

| Surface | R (mm) | d (mm) | Medium after surface | νd | APD field |
|---|---:|---:|---:|---:|---:|
| 1 | +72.787 | 4.68 | 1.72916 | 54.67 | — |
| 2 | +196.707 | 0.30 | air | — | — |
| 3 | +41.103 | 6.79 | 1.49700 | 81.61 | 0.0375 unsigned magnitude |
| 4 | +77.924 | 0.30 | air | — | — |
| 5 | +28.177 | 8.82 | 1.49700 | 81.61 | 0.0375 unsigned magnitude |
| 6 | +55.879 | 1.87 | air | — | — |
| 7 | +64.799 | 4.50 | 1.69895 | 30.05 | blank |
| 8 | +18.603 | 8.24 | air | — | — |
| STO | infinity | 5.30 | air | — | — |
| 10 | −31.569 | 1.97 | 1.60342 | 38.01 | — |
| 11 | +30.427 | 8.01 | 1.88300 | 40.81 | — |
| 12 | −54.286 | 0.48 | air | — | — |
| 13A | +356.220 | 3.42 | 1.51633 | 64.14 | — |
| 14A | −83.563 | 36.19 | air | — | — |

Fresh asphere transcription:

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 13A | 0 | +1.22362×10⁻⁶ | −4.66525×10⁻⁸ | +3.78350×10⁻¹⁰ | −7.05913×10⁻¹³ |
| 14A | 0 | +5.36088×10⁻⁶ | −4.41481×10⁻⁸ | +4.15234×10⁻¹⁰ | −8.17896×10⁻¹³ |

The TypeScript surface and asphere arrays match this transcription exactly. Surface 11 correctly carries the downstream L5r `elemId` and `nd = 1.88300`. There is exactly one `STO`; no cover plate, filter, dummy plane, flare cutter, generic cement layer, mirror, or mechanical plane is present.

## Production correlation and manufacturer facts

Cosina’s official product material specifies 75 mm, f/1.5, 7 elements in 6 groups, 32.6°, 12 aperture blades, 0.7 m minimum focus, VM mount compatible with Leica M, and 35 mm full-frame coverage. The official lens diagram has the same element sequence as patent Figure 5, marks L2–L4 as abnormal-partial-dispersion elements, and marks the final element as aspherical. Cosina’s English lens index lists the product from 2019-08-08, after the 2019-01-31 patent filing.

The correlation remains a strong inference rather than manufacturer confirmation. Example 3 is the best fit and was not changed.

## Independent optical recomputation

A new script independently loads the final TypeScript object and performs reduced-angle `[y, ν = nθ]` tracing plus an ordinary-angle ABCD cross-check.

| Quantity | Independent result | Source/model target | Result |
|---|---:|---:|---|
| EFL | 74.502507314 mm | Patent 74.5 mm | Pass |
| BFD from last vertex | 36.190317764 mm | Table rear gap 36.19 mm | Pass |
| Surface 1 to image track | 90.870000 mm | Rounded Table 5 sum | Pass |
| Figure 7 track difference | −0.002000 mm | Figure 7 gives 90.872 mm | Retained source precision |
| Front principal plane from surface 1 | +24.558413682 mm | Computed | Pass |
| Rear principal plane from last vertex | −38.312189550 mm | Computed | Pass |
| Matrix determinant | 1.000000000000 | Unity | Pass |
| Reduced/ordinary matrix maximum difference | 7.105427×10⁻¹⁵ | Numerical agreement | Pass |

Full reduced-angle matrix, immediately before surface 1 to immediately after surface 14A:

```text
[ 0.485759729012839   50.2416779256471 ]
[-0.0134223670591935   0.670367957166699]
```

### Standalone, cemented, and functional-group powers

| Component | Power (mm⁻¹) | Focal length (mm) |
|---|---:|---:|
| L1 standalone | +0.006411394 | +155.972326 |
| L2 standalone | +0.006063362 | +164.924992 |
| L3 standalone | +0.009668588 | +103.427713 |
| L4 standalone | −0.025712037 | −38.892290 |
| L5f standalone | −0.039411784 | −25.373122 |
| L5r standalone | +0.043278015 | +23.106420 |
| L6 standalone | +0.007608200 | +131.437131 |
| Cemented L5 net | +0.007609560 | +131.413642 |
| Front group 101 net | +0.006399427 | +156.263992 |
| Rear group 102 net | +0.015576851 | +64.197830 |

For a unit-height collimated input ray, the in-situ contributions are +0.006411394, +0.006072778, +0.009209805, −0.015294550, −0.009849659, +0.013132961, and +0.003739638 mm⁻¹ for L1 through L6. Their sum is +0.013422367059 mm⁻¹, equal to the full-system power.

### Pupils and exact f-number

| Quantity | Result |
|---|---:|
| Derived physical stop semi-diameter | 13.285140157 mm |
| Entrance-pupil semi-diameter | 24.189125751 mm |
| Entrance-pupil location from surface 1 | +53.229385706 mm |
| Exit-pupil location from last vertex | −17.608620022 mm |
| Exit-pupil semi-diameter | 17.467187593 mm |
| Exit/entrance pupil magnification | 0.722109 |
| Modeled f-number | 1.540000000000 |

The stop position is patent-published. The stop diameter is derived by reversing the published f/1.54 through the front group and is not represented as a source measurement.

### Petzval

Petzval was recomputed at every refracting surface as `φ/(n·n′)`.

| Owner | Contribution (mm⁻¹) |
|---|---:|
| L1 | +0.003649685 |
| L2 | +0.003816677 |
| L3 | +0.005841203 |
| L4 | −0.015765894 |
| L5f | −0.011920970 |
| L5r | +0.011681518 |
| L6 | +0.005030831 |
| **Total** | **+0.002333052** |

Under the stated `R_P = −1/ΣP` convention, the Petzval radius is −428.623159 mm.

## Focus-state audit

The patent supplies infinity data only. The production lens has a 0.7 m minimum focus and an all-metal helicoid, but no internal movement table is published. The modeled state remains `CONSTRAINED_RECONSTRUCTION`:

| Quantity | Infinity | Modeled 0.7 m |
|---|---:|---:|
| Rear gap after 14A | 36.190000 mm | 46.299333278 mm |
| Unit extension | 0 | 10.109333278 mm |
| Internal spacings | Published values | Unchanged |
| Object to first surface | infinity | 599.020666722 mm |
| Lateral magnification | 0 | −0.135686917 |

The finite-conjugate matrix `B` residual is `1.02×10⁻¹² mm`. The reconstruction is internally consistent and correctly disclosed in the data header, `focusDescription`, and analysis.

## Conditions and classifications

| Test | Value | Result |
|---|---:|---|
| `R1 > R3 > R5` | 72.787 > 41.103 > 28.177 mm | Pass |
| `|ΔθgF| > 0.02` | 0.0375 for L2/L3 | Pass |
| two front positives `νd > 75` | 81.61 | Pass |
| those positives `nd < 1.57` | 1.49700 | Pass |
| rear positive `nd > 1.85` | 1.88300 | Pass |
| patent `TT/f < 1.3` | 1.219758 | Pass |
| project telephoto test | `TT/EFL = 1.219690` | Not telephoto |
| project retrofocus test | `BFD/EFL = 0.48576` | Not retrofocus |

## Asphere and geometry audit

At the stored, independently checked semi-diameters:

| Surface | Height | Departure from spherical base |
|---|---:|---:|
| 13A | 13.8 mm | +0.042988209 mm |
| 14A | 13.2 mm | +0.180587707 mm |

Geometry results:

| Check | Worst case | Result |
|---|---:|---|
| Element edge thickness | 1.894374273 mm at L1 | Pass |
| Actual rim-slope angle | 54.792805955° at surface 8 | Pass against 64.2° |
| Positive-K conic domain | No positive-K surfaces | Pass |
| Shared-gap rim clearance | 1.471721403 mm at 6→7 | Pass |
| On-axis marginal clearance | stop edge within floating-point residual | Pass |
| Default 0.6-field off-axis bundle | front clipping at surfaces 1–5 only | Pass under documented vignetting model |
| Stop, cemented interface, rear group | contained | Pass |
| Local render-trim proxy | 0 mm hidden trim | Pass |

A fresh section plot was visually compared with patent Figure 5 and Cosina’s official diagram. The authored semi-diameter progression and silhouettes are consistent with both references. The plot and rasterized source pages are temporary inspection artifacts and are not in the handoff package.

## Independent glass audit

The audit began from the patent `nd`/`νd` pairs rather than the existing names. The official HOYA cross-reference table explicitly warns that equal or near-equal six-digit codes do not establish identical composition. Therefore vendor names are not assigned without a source naming the melt.

| Element | Patent `nd` / `νd` | Defensible class | Representative official candidates | Decision |
|---|---|---|---|---|
| L1 | 1.72916 / 54.67 | 729547 lanthanum crown | TAC8, S-LAL18, J-LAK18, K-LaK18, H-LaK52 | Keep class |
| L2/L3 | 1.49700 / 81.61 | 497816 ED crown | FCD1, N-PK52A, S-FPL51, J-FK01A, K-PFK80, H-FK61 | Keep class and unsigned patent APD note |
| L4 | 1.69895 / 30.05 | 699301 dense flint | E-FD15, N-SF15, S-TIM35, J-SF15, H-ZF11 | Keep class; production APD marking remains inferred |
| L5f | 1.60342 / 38.01 | 603380 flint | E-F5, S-TIM5, J-F5, H-F1 | Keep class |
| L5r | 1.88300 / 40.81 | 883408 high-index lanthanum glass | TAFD30, N-LASF31A, S-LAH58, J-LASF08A, K-LaSFn17, H-ZLaF68B | Keep class |
| L6 | 1.51633 / 64.14 | 516641 borosilicate crown | S-BSL7 is exact; K-BK7 shares code; other BK7-family glasses are close | Correct to vendor-neutral class |

No `nC`, `nF`, `ng`, or signed `dPgF` is authored. The patent’s unsigned `|ΔθgF|` magnitude is not converted to the project’s signed field. No APO claim is made.

## Corrections applied

### 1. L6 glass identity

- **Old:** `S-BSL7 (OHARA)` and wording asserting a specific current OHARA match as the stored glass.
- **Corrected:** `516641 — borosilicate crown (vendor unresolved)`; S-BSL7 is described only as an exact catalog candidate.
- **Source location:** Patent p. 12, Table 5 gives only `nd = 1.51633`, `νd = 64.14`; it does not name a vendor. HOYA’s official cross-reference warns that matching codes do not establish identical composition; OHARA lists S-BSL7 as one exact candidate.
- **Independent evidence:** Fresh vendor-blind code derivation gives 516641. Multiple official catalog families occupy the same or neighboring class.
- **Downstream consequence:** The model no longer claims OHARA production provenance or resolves L6 through an unsupported vendor Sellmeier identity. Optical prescription, EFL, powers, Petzval, geometry, and focus values are unchanged.

### 2. Matrix-agreement value

- **Old:** `1.42 × 10⁻14` maximum difference in the analysis.
- **Corrected:** `7.11 × 10⁻15`.
- **Source location:** Analysis Verification Summary.
- **Independent evidence:** Fresh reduced-angle and ordinary-angle matrices differ by `7.105427357601002×10⁻15`; the supplied Stage 2 JSON also contained this value, despite the prose retaining the older figure.
- **Downstream consequence:** Documentation consistency only; no optical result changes.

### 3. Analysis process notes

- **Old:** References to “Stage 1 catalog comparison,” “Stage 2 validation,” and repository integration checks inside the reader-facing analysis.
- **Corrected:** Source/catalog/computation wording replaces workflow references; unavailable repository checks remain in this audit and manifest only.
- **Source location:** L1, L6, and Verification Summary sections.
- **Independent evidence:** Current analysis specification and project instructions prohibit process notes in clean analysis files.
- **Downstream consequence:** Prose-only cleanup; no data change.

### 4. Production-correlation evidence

- **Old:** General wording that the marketed full-frame field was merely “closely corresponding.”
- **Corrected:** Explicit Cosina values of 32.6° and 35 mm full-frame coverage, plus the 2019-08-08 introduction after the 2019-01-31 filing.
- **Source location:** Patent Reference and Design Identification.
- **Independent evidence:** Official Cosina product page, manual, and English lens index.
- **Downstream consequence:** Stronger and more auditable correlation wording; embodiment remains Example 3.

No patent prescription, asphere coefficient, spacing, semi-diameter, focus endpoint, structured patent metadata, mount, format, element count, group count, or f-number was changed.

## Targeted final gate

| Check | Status |
|---|---|
| Patent/table/asphere re-extraction | PASS |
| TypeScript syntax with neutral `LensDataInput` stub | PASS |
| Local schema/reference proxy | PASS |
| Reduced-angle and ordinary-angle tracing | PASS |
| All authored focus states | PASS |
| Pupil and f-number recomputation | PASS |
| Surface-by-surface Petzval | PASS |
| Glass mismatch and spectral-discipline audit | PASS |
| Edge, slope, conic, cross-gap, on-axis and off-axis checks | PASS |
| Analysis structure and shared-value consistency | PASS |
| Prettier execution | NOT RUN — no Prettier executable/package was available; the configured npm mirror returned 404. Files were manually checked against the supplied 120-column, double-quote, semicolon, trailing-comma configuration. |
| Real repository `LensDataInput` typecheck | NOT RUN — repository unavailable |
| `buildLens()` / `validateLensData()` | NOT RUN — repository unavailable |
| Production `computeElementRenderDiagnostics()` | NOT RUN — repository unavailable |
| Directly relevant corpus tests | NOT RUN — repository unavailable |

No `generate:metadata`, full corpus suite, full build, glass-report generation, Git operation, branch, commit, push, or pull request was performed.

## Stage gate

The pair is optically and internally verified. The remaining checks are repository-local batch-integration checks rather than unresolved source, prescription, or analysis issues.

**READY_FOR_BATCH**

## Repository integration audit — 2026-08-01

The untracked publication `patents/JPA 2020122918-000000.pdf` was rendered again at repository integration. Figure 5
on PDF page 15 was checked against the authored section. The front-to-rear diameter progression and final
double-aspherical meniscus remain within the approximately 15% manual-reading tolerance of the patent drawing.
`audit:image-circle` reports no undersized surface, and the production render diagnostics report no hidden trim.
No semi-diameter was changed because the available drawing does not support a more precise correction.

The glass review remains unchanged. Every element already has coefficient-backed coverage through a defensible
vendor-neutral coordinate match, and the patent does not name production suppliers. The display name is corrected to
`VOIGTLÄNDER NOKTON Vintage Line 75mm f/1.5 Aspherical VM`, preserving Cosina's product-token order and placing
the mount suffix last.
