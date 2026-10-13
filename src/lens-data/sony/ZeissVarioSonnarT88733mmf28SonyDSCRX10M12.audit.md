# Lens Patent — Stage 2 Data Construction Audit

## Job and package identity

- **PATENT:** US20140354857
- **LENS:** Zeiss Vario-Sonnar T 8.8-73.3mm F2.8 (Sony DSC-RX10M1-2)
- **EMBODIMENT:** Example 7
- **OUTPUT STEM:** `ZeissVarioSonnarT88733mmf28SonyDSCRX10M12`

This package supersedes the Stage 1 package `stage1-r1` and carries `packageRevision: stage2-r2`. Revision `r2` corrects the maker attribution from the product branding to the patent assignee and hardens the loader's negative tests; see Identity and taxonomy below. The original patent PDF and the original four-field job card are included unchanged, at their Stage 1 byte counts and hashes. Legacy underscore artifact names from the incoming upload were normalized to the contract's dotted form; no content was invented to fill a normalized name.

## Entry gate

All seven incoming Stage 1 artifacts were present and hash-verified against the hashes recorded in the Stage 1 manifest:

| Artifact | Bytes | SHA-256 (incoming) | Matches Stage 1 manifest |
|---|---:|---|---|
| `US20140354857A1.pdf` | 3,701,533 | `5b6c8eca1add4f879b785875b25a6a45e7d1cffd879d3b03c3c2bff1c64054c0` | yes |
| job card `.txt` | 184 | `37b856b5ae6434cfd57f6a7520ae03253ea311ea11d1d522769006fdb70241e8` | yes |
| `.evidence.json` | 47,763 | `57c79abb4af71b6a7c2cd5300dc3c24c66b5ef97f9bf7cb71f87d08539209faf` | yes |
| `.verify.py` (Stage 1) | 40,889 | `90bfe7263015352dbec178f3c36dc56f4c12a8655030797d2f2e7a0516643539` | yes |
| `.results.json` (Stage 1) | 104,142 | `4dbfd27c42f2c1f0b53283417caf8e867f7d828a6ae5aac31b59f7cfa2691775` | yes |
| `.audit.md` (Stage 1) | 16,097 | `8fa8237d25d222bf1fe839b0bbd395e80bab1487313b4395aecdcf7b04d8e800` | yes |
| `.manifest.json` (Stage 1) | 32,240 | `81ff9659d3eac12f32bcbf00e2dee3e4997ffb3b5a617befa9e6b461da9b926b` | yes |

The Stage 1 gate was `READY_FOR_DATA` with an empty blockers list. The four job-card fields agree literally with the manifest job block.

Tables 19, 20, 21 and 25 for Example 7 were re-read against `evidence.json` before construction began. Every radius, thickness, index, Abbe number, conic constant and aspherical coefficient agrees, including the raw `Nd = 1.168` on surface 21 and the `13 lenses` statement at ¶0302 that conflicts with the L1–L14 enumeration. No unresolved construction issue required reopening.

## Constructed model

The prescription retains patent Table 19 surface numbering, with an `A` suffix marking each aspherical surface. Patent surface 13 becomes `STO`. Patent surfaces 27–30, the two plane-parallel 1.517/64.166 rear plates, are omitted per the current data specification, and surface 26 carries their d-line reduced propagation.

- 26 model surfaces, 14 elements, 11 air-separated groups, 13 aspherical surfaces on 7 elements
- Air-separated grouping derived from the parsed surface list: `[1,2] [3] [4] [5,6] [7] [8] [9,10] [11] [12] [13] [14]`
- Zoom-variable gaps `D5`, `D12`, `D20`, `D22`, carried at the three published infinity states
- Rear air-equivalent on surface 26: **6.107356625 mm**, reproduced from Σ(d/n) over surfaces 26–30 to 8.2 × 10⁻¹¹ mm

Scale is unchanged at s = 1. The marketed 8.8–73.3 mm range implies wide and tele scale factors of 0.9573 and 1.1333, so no single uniform scale reaches it; marketed and design values are kept in separate fields.

The surface-21 index carried in the model is the documented source correction `Nd = 1.768`. The raw 1.168 row is preserved verbatim in `evidence.json`, and the verifier still runs `surface21_raw_source_index` as a literal comparison that **fails by design**, so the source discrepancy remains visible rather than deleted.

## Loader and negative testing

The Stage 2 verifier loads the actual authored `.data.ts` rather than a separate copy of the intended values. The loader is a strict literal parser: it strips comments without touching string literals, requires the `import type { LensDataInput }` line, the `satisfies LensDataInput;` close and the default export, and accepts only objects, arrays, double-quoted strings, numbers, `true`/`false`/`null`, bare or quoted keys and trailing commas. Every recomputed quantity below is derived from that parse.

Five contract-violating mutations of the real file were each applied and then rejected: a duplicate `elementCount` key, an arithmetic expression in `closeFocusM`, a bare identifier as a value for `maker`, a stray trailing `const`, and a removed default export. A sixth, numerical, negative test flips the sign of surface 16's radius and confirms the wide EFL moves outside tolerance, demonstrating that the first-order check is capable of failing.

Three defects in earlier drafts of this verifier were found and corrected before the gate was claimed, and are recorded here rather than silently repaired:

1. The rear-plate reduction loop divided each segment by the index of the *preceding* medium instead of the medium that surface introduces, so it did not reproduce the 6.107356625 mm value. Corrected to Σ(dᵢ/nᵢ).
2. The exact-ray containment check compared ray height at the stop plane against the authored static `sd` of 4.75 mm. Under `zoomApertureModel` the iris radius is derived per zoom station, so at telephoto the correct limit is 7.5888 mm. The stop plane is now checked against the per-station calibrated radius, and the authored static value is separately required to equal the baseline-station radius.
3. The `identifier_value` mutation was anchored on the literal text `maker: "Zeiss"`. When the maker was corrected to Sony the anchor went stale, the mutation became a no-op, and the resulting clean parse was being counted as a successful rejection. Each mutation must now demonstrably alter the file text before its rejection counts; a stale anchor is reported as `applied: false` and fails the check.

## First-order recomputation from the parsed file

All values below were recomputed from the parsed `.data.ts` using `[y, ν = n·u]` reduced-angle tracing, cross-checked against an independently coded ABCD multiplication (worst elementwise residual 1.1 × 10⁻¹⁵) with all system determinants unity to 1.2 × 10⁻¹⁵.

| State | Published f (mm) | Model f (mm) | Residual (mm) | BFD from S26 (mm) | Air-equiv. track (mm) | TL/EFL | BFD/EFL |
|---|---:|---:|---:|---:|---:|---:|---:|
| Wide | 9.193 | 9.211417 | +0.018417 | 6.121451 | 101.603357 | 11.030 | 0.665 |
| Intermediate | 24.376 | 24.394671 | +0.018671 | 6.164696 | 116.092357 | 4.759 | 0.253 |
| Telephoto | 64.678 | 64.571720 | −0.106280 | 6.137622 | 143.848357 | 2.228 | 0.095 |

Tolerance is max(0.15 mm, 0.25 % of published f), set by the source's three-decimal index rounding. The project terminology tests do not support calling this layout telephoto or retrofocus at any published state.

Petzval sum is 0.008135532 mm⁻¹ at every zoom station (paraxial Petzval radius −122.918 mm), computed surface-by-surface as φ/(n·n′); it is zoom-invariant because no glass changes across zoom.

**Group focal lengths:** G1 77.0221, G2 −11.8928, G3 19.0754, G4 −26.0298, G5 26.2640 mm.
**Cemented-net focal lengths:** D1 (L1+L2) 195.1788, D2 (L5+L6) 48.0217, D3 (L9+L10) −24.9813 mm.
**Standalone element focal lengths** (thick lens in air, recomputed from the parsed radii, index and centre thickness, and checked against every declared `fl`):

| Element | f (mm) | Element | f (mm) |
|---|---:|---|---:|
| L1 | −216.2284 | L2 | 101.4340 |
| L3 | 123.5557 | L4 | −13.4531 |
| L5 | −20.6651 | L6 | 15.5522 |
| L7 | −36.6351 | L8 | 20.9473 |
| L9 | 34.7461 | L10 | −13.6913 |
| L11 | 17.9848 | L12 | −26.0298 |
| L13 | 17.6292 | L14 | −43.5662 |

Against the patent's own Table 25: f4 −26.0298 versus −25.904 mm, f5 26.2640 versus 26.167 mm, f4/f5 −0.991081 versus −0.990, condition (4) 0.033628 versus 0.034, condition (5) 2.912 versus 2.912. Conditions (3), (4) and (5) all fall inside their published ranges. Y = fw·tan ω on the patent's own published values is 7.988536 mm against Table 25's 7.989 mm.

### Exact ray tracing

The tracer is a full meridional implementation with aspherical sag, Newton surface intersection and vector Snell refraction — not a paraxial approximation relabelled. It was validated against evidence the tracer never saw: the patent's own distortion plots.

| State | Paraxial fw·tan ω (mm) | Exact full-field chief height (mm) | Implied distortion | Patent figure |
|---|---:|---:|---:|---|
| Wide | 7.9885 | 7.4171 | −7.2 % | Fig. 26, about −7 % |
| Intermediate | 7.3521 | 7.9393 | +8.0 % | Fig. 27, about +8 % |
| Telephoto | 7.3268 | 7.9268 | +8.2 % | Fig. 28, about +8 % |

These agree in sign, magnitude and zoom trend. They are a check on the tracer, not a source-published quantity.

## Stop, pupil and f-number

The axial stop position is published (patent surface 13, between G2 and G3, moving integrally with G3, ¶0311). The physical iris diameter is not.

Reverse-imaging the stop into object space gives entrance-pupil magnifications of 3.002937 / 1.502944 / 0.684469 at the three states, with the entrance pupil 25.09 / 58.69 / 173.85 mm in front of the first vertex. Holding the published Fno = 2.912 therefore requires iris radii of **4.7495 / 6.2953 / 7.5888 mm**.

This is a substantive Stage 2 finding. A single fixed iris sized at the wide station would deliver about **f/4.65** at the telephoto end, contradicting Table 21's constant 2.912. Example 7's prose does not state a zoom-dependent diaphragm the way ¶0217 and ¶0236 do for Examples 2 and 3, but the published f-numbers require one. The file therefore declares `zoomApertureModel: "from-nominal-fno"` with `nominalFno: 2.912`, and authors `STO sd: 4.75` as the wide baseline radius.

This is a calculated aperture model, not a published diameter schedule. Reproducing the calibration target is not independent verification of an unpublished diaphragm, and no claim to the contrary is made anywhere in this package.

## Semi-diameters and geometry

Example 7 publishes no semi-diameters. Every `sd` in the file is modelled.

Method: exact meridional ray tracing at nine normalized zoom stations (zoomT 0 to 1 in steps of 0.125, with the published wide, intermediate and telephoto states at 0, 0.5 and 1). At each station the iris radius was calibrated as above and rays were aimed through the stop by bracketed bisection. The stored height envelope is the maximum |y| over axial marginal bundles at full aperture, 0.60-half-field bundles at full aperture, and full-half-field chief rays. Stored `sd` is that envelope plus clearance, rounded to 0.01 mm.

The interpolated stations use a linearly blended half-angle purely as an aperture-sizing probe. The chief-ray heights at those stations are not claims about the real field; only the three published states carry field meaning.

Default clearance is 8 %. Three surfaces carry less, each for a stated geometric reason:

| Surface | Clearance | Binding constraint |
|---|---:|---|
| 2 | 1.0445 | L2 closes to zero edge thickness at about h = 24.4 mm |
| 3 | 1.0685 | held equal to surface 2 so the cemented doublet shares one clear aperture |
| 8 | 1.0599 | the 7A–8 air gap; combined sag intrusion is the binding constraint |

Validation results at the stored apertures:

- **Edge thickness:** minimum 0.3981 mm on L2. This is the governing constraint on the front doublet's aperture, not the ray envelope — L2 is a 6.4 mm positive meniscus with R 46.489/570.000, and the element physically closes at about h = 24.4 mm. Every other element exceeds 0.6 mm.
- **Rim slope:** worst 52.48° on surface 7A, against the 64.2° limit. Surface 7A's sd/|R| is 0.824, comfortably inside the conic domain.
- **Front/rear sd ratio:** worst 1.317 on L4, against the 3.0 limit.
- **Cross-gap sag intrusion:** worst 0.8499 of the gap on 7A→8, against the 0.90 limit. That gap is 5.630 mm with 4.785 mm of combined intrusion, leaving about 0.63 mm of rim clearance. Every other gap is below 0.37, and several widen with height.
- **Exact-ray containment:** every traced ray at every sampled station lies inside its surface's stored aperture, and inside the per-station calibrated iris at the stop plane. Minimum glass clearance ratio 1.0445.

Asphere departures from the base sphere are now quoted, but only at these modelled apertures. The largest is +1.4388 mm on surface 24A (L13 rear) at sd 10.66 mm; others range from +0.0169 mm on 25A to −0.4963 mm on 14A.

## Focus disposition

**`NO_INTERNAL_RECONSTRUCTION`, unchanged from Stage 1.** The patent names G4 — the single biconcave element L12 — as the focus group (¶0304) but publishes no close-focus spacing rows for Example 7, and the manufacturer's minimum focusing distance alone does not determine a unique internal focus law. Every `var` entry repeats its infinity value at both focus positions, so the gaps vary with zoom only and the focus control produces no internal motion. The verifier checks this explicitly.

`closeFocusM: 0.132` is a product-derived label, not a patent value. Sony publishes an AF range from about 3 cm at the wide end measured from the front of the lens; adding the modelled wide-state front-vertex-to-image distance of 101.876 mm gives about 0.132 m as an object-to-image conjugate. It is a lower bound, because the offset from the barrel front to the first optical vertex is unpublished. `zoomCloseFocusM` is omitted: Example 7 publishes no intermediate-station close-focus conjugate and interpolating one would be an invention. The consequence, stated plainly, is that the focus label understates the product's telephoto figure by roughly three times.

## Zoom kinematics

`D20` is non-monotonic across zoom — 2.974 → 6.090 → 4.759 mm — and G2 reverses direction through the intermediate state. All three published states are therefore retained as zoom stations; endpoint-only interpolation would erase published kinematics. The verifier asserts the reversal explicitly.

G5 is axially fixed during zoom for this example (¶0169), so the rear spacing to the image plane is constant and the BFD varies only through the model's own rounding.

## Glass

Labels are vendor-neutral six-digit classes in the form `code - class (catalog unresolved)`, carried forward from Stage 1's label policy: the patent names no supplier and no catalog coordinate uniquely establishes a production melt. The dispersion engine will therefore fall to the nd/νd path rather than adopting a catalog identity.

| Element | nd / νd | Label |
|---|---|---|
| L1 | 1.847 / 23.784 | 847238 — dense flint class |
| L2 | 1.497 / 81.607 | 497816 — low-dispersion phosphate crown class |
| L3 | 1.593 / 67.001 | 593670 — dense phosphate crown class |
| L4 | 1.803 / 45.570 | 803456 — high-index lanthanum class |
| L5 | 1.729 / 54.673 | 729547 — lanthanum crown class |
| L6 | 2.001 / 25.458 | 001255 — very-high-index lanthanum flint class |
| L7 | 1.834 / 37.285 | 834373 — lanthanum flint class |
| L8 | 1.592 / 67.138 | 592671 — dense crown class |
| L9 | 1.487 / 70.440 | 487704 — fluor crown class |
| L10 | 1.806 / 33.269 | 806333 — lanthanum flint class |
| L11 | 1.589 / 61.177 | 589612 — dense barium crown class |
| L12 | 1.768 / 49.241 | 768492 — high-index lanthanum class (nd from documented source correction) |
| L13 | 1.592 / 67.022 | 592670 — dense crown class |
| L14 | 1.619 / 63.533 | 619635 — crown class |

The patent supplies no per-element nC/nF/ng or ΔPgF, so no APO or anomalous partial-dispersion claim is supported and none is made.

## Identity and taxonomy

`maker` is **`Sony`**, taken from the patent itself. US 2014/0354857 A1 names Sony Corporation as both applicant (box 71) and assignee (box 73), and lists all three inventors — Takuya Kato, Atsushi Oohata and Hiroki Hagiwara — at Tokyo (JP). Zeiss appears nowhere in the document: not as assignee, not as applicant, not as inventor, not in the citations. The design is Sony's.

ZEISS Vario-Sonnar T* is a branding mark carried on the product under licence. Following the display-name convention, which places lens branding and optical-line names after the manufacturer, the display title is `SONY ZEISS VARIO-SONNAR T* 8.8-73.3mm f/2.8 (Sony Cyber-shot DSC-RX10 / DSC-RX10 II)` and the catalog key is `sony-vario-sonnar-88-733f28-rx10`. The verifier now asserts that `maker` prefix-matches both the display name and a declared patent assignee, and that the key carries the same maker slug — the catalog derives `maker` from `name` by prefix matching when `maker` is omitted, so a divergence between the two would be a latent inconsistency.

An earlier draft of this stage used `maker: "Zeiss"` on the strength of the product branding. That is superseded and recorded as such in `evidence.json` under MD013.

`lensMounts: ["fixed-lens-camera"]` and `imageFormat: "1-inch-type"` are checked against the supplied canonical id lists. The paraxial wide image height of 7.9885 mm on the published basis is within 0.06 mm of half the 13.2 × 8.8 mm sensor diagonal, supporting the format id. Validation against the repository's `lensTaxonomy.ts` remains an integration check because that source is not mounted.

## Product correlation

Unchanged from Stage 1 and still **convergent, not manufacturer-confirmed**. Sony publishes 14 elements in 11 groups with 7 aspheric elements for both the RX10 and RX10 II, which matches the resolved Example 7 structure exactly, and the patent's 2013-05-31 priority precedes the 2013-10-16 announcement. Against that, the patent's 9.193–64.678 mm, ~7.0×, F2.912 design values differ materially from the marketed 8.8–73.3 mm, 8.3×, F2.8 lens, and no primary Sony source names this patent. Treat the attribution as research inference.

## Formatting and toolchain

The file was formatted with Prettier 3.9.7 using the project `prettierrc.json` (printWidth 120, tabWidth 2, double quotes, trailing commas `all`). `--check` passes and the formatting is idempotent; the result is recorded as a real toolchain check, separate from the repository-scope checks below.

Repository-scope checks remain `NOT_RUN` because the LensVisualizer project, `types/optics.js` and `lensTaxonomy.ts` were not mounted: `lensvisualizer_typecheck`, `lensvisualizer_buildLens`, `lensvisualizer_render_diagnostics`, `lensvisualizer_glass_resolution`, `lensvisualizer_corpus_tests`. No approximation has been given any of those names.

## Limitations carried into Stage 3

1. Semi-diameters and the stop radius are modelled, not published; every geometric result in this package is conditional on them.
2. The per-station iris schedule is calculated from the published constant f-number and must be described as inferred.
3. `closeFocusM` is a converted product figure and a lower bound; no internal focus travel exists in the model.
4. No close-focus spacing states exist for Example 7; focus remains `NO_INTERNAL_RECONSTRUCTION`.
5. Glass identities remain vendor-neutral classes; no APO or anomalous-dispersion claim is supported.
6. Real `buildLens` / `validateLensData`, TypeScript compilation, runtime glass resolution and production render-trim diagnostics were not available.
7. Production correlation with the RX10 / RX10 II is convergent research inference.

## Quantitative-claim map for Stage 3

No `.analysis.md` exists yet. Stage 3 prose should draw quantitative claims only from these anchors.

| Claim area | Anchor | Governing evidence |
|---|---|---|
| Patent / example identity | `FACT_PATENT`, `FACT_EXAMPLE` | original patent and job card |
| 14 elements / 11 groups | `FACT_ELEMENT_COUNT`, `FACT_GROUP_COUNT` | structure derived from the parsed `.data.ts` |
| Aspheric counts | `FACT_ASPHERIC` | Table 20 mapped onto parsed element spans |
| EFL, BFD, track, pupils, Petzval | `FACT_STATES`, `implementedModel.stateDetails` | recomputation from the parsed file |
| Element / group / cemented powers | `FACT_ELEMENT_FOCAL`, `FACT_GROUP_FOCAL`, `FACT_CEMENTED_FOCAL` | recomputation from the parsed file |
| Patent conditions | `comparisons.condition3/4/5`, `patent_condition_ranges` | Tables 21/25 + recomputation |
| Surface-21 correction | `FACT_CORRECTION_S21`, `surface21_raw_source_index` | Tables 19/21/25; the raw comparison is retained as a failure |
| Rear-plate omission | `FACT_REAR_EQ` | Table 19 reduced by Σ(d/n) |
| Semi-diameters and geometry | `FACT_SD_BASIS`, `implementedModel.geometry` | modelled; not source-published |
| Stop and f-number | `FACT_STOP_BASIS` | calibration from the published Fno |
| Distortion cross-check | `FACT_EXACT_DISTORTION` | exact tracing; compare with Figs. 26–28 |
| Focus | `FACT_FOCUS` | ¶0304 + absence of close-focus rows |
| Product correlation | `FACT_PRODUCT_CORRELATION` | Sony primary specs + patent; inference only |

## Gate disposition

Stage 2 verifier result: **26 PASS, 0 FAIL, 5 NOT_RUN** among gate checks, and **14 PASS, 1 FAIL** among comparisons. The single comparison failure is `surface21_raw_source_index`, which compares the implemented 1.768 against the raw printed 1.168 and is retained deliberately so the source discrepancy stays visible; it is excluded from the gate by name, not by deletion.

`integrationStatus` remains `INTEGRATION_PENDING`.

**Gate: READY_FOR_ANALYSIS**

## 2026-09-18 — Repository integration and glass audit

Assigned M-PCD51 to L8 and M-PCD4 to L14 as coordinate-compatible supplier-neutral spectral proxies. L4 (1.803 / 45.570) remains unresolved: existing near candidates differ by about 0.001 in index and about 1 in Abbe number, without supporting source identity. Thirteen of fourteen elements now resolve.

### Semi-diameter figure audit

Reviewed local US 2014/0354857 A1, PDF page 26, Fig. 25, rotated to follow the optical axis. Optical rims broadly agree within approximately 15%. The apparent larger L12 outline is a mechanical flange, and surface 21A approaches an aspheric turnover near its existing cap. Retained the 7.28/7.02 mm L12 apertures and all other SDs; excluded leader lines and flange shoulders. Table 19 on PDF page 51 was also checked against the authored glass coordinates. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.

## 2026-09-18 — Local-site diagram follow-up

Compared live wide/tele diagrams with local US 2014/0354857 A1, PDF page 26, Fig. 25 and page 51, Table 19. Retained all SDs, including L12's asphere-domain caps; its apparent larger source outline includes a mechanical flange.

Zoom states are correctly ordered. G1, G3 and G4 move objectward, G2 reverses after moving imageward, and G5 remains fixed. No focus motion is invented from the camera's advertised minimum-focus distance.

Resolved-glass labels now name the selected spectral proxies and explicitly disclaim production identity. L2 uses the compatible FCD1 curve and an inferred ED/APD tag, restoring its diagram color while preserving uncertainty about source partial dispersion. L4 remains unresolved: HOYA M-TAF31 (1.80139/45.45) and the additional MP/MC-TAF31-15 rows (1.80154/45.46) still do not establish a source-faithful match to 1.803/45.570. No extra curve was added solely to increase coverage.

The full generated assignee set contains 64 canonical names and passes the existing validity guard. No further alias consolidation is justified. Carl Zeiss AG, Carl-Zeiss-Stiftung, VEB Carl Zeiss Jena and Jenoptik are distinct entities, as are the historically bounded Sony Corporation and Sony Group Corporation entries; preserving them avoids changing patent attribution.

Follow-up validation: typecheck, formatting, lint and all 2,717 tests in 276 files passed; the production build prerendered 1,397 pages. Glass reports retain 63/67 resolved batch elements and zero catalog mismatches. All six surface audits pass, the five applicable image-circle audits report no undersized surfaces, and renderer diagnostics report zero SD trim at five zoom positions and both focus-control endpoints. No additional changelog entry was added.
