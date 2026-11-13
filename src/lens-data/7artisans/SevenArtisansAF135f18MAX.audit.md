# Qualified integration handoff audit, 2026-11-12

- Recovered original November 9 qualified checkpoint; all 118 manifest hashes passed.
- Data TS unchanged; source 32 rows and 96 numeric comparisons independently preserved/rechecked.
- Added connected Phillip Reeve section and exact URL as evidence, retained 400×265 resolution limit.
- Owner assumption: “If the shapes match the patent well enough, we'll assume that there's a misprint in the diagrams and go ahead and ready it for integration. Make sure to include that diagram as evidence when you do so.” This authorizes qualified association/handoff, not proof that a diagram is erroneous. Verified contradiction remains prose L9/L11 vs table L10/L12. All values unchanged.
- Source facts, inferred 97% clear caps, approximate dispersion,132.1055 mm EFL, infinity-only and clipping disclosures retained.
- Fresh native construction and canonical geometry: passed. Fresh field trace/MTF: completed, all outcomes logged, clipping not filtered. See checks/.
- Historical 6,110 tests not rerun. Full app regression/current-main integration/browser QA deferred to integration per owner. No publication. Visible false at this checkpoint (closed: coordinator later set visibility true).

- Prominent limitation: 590/812 rays (72.66%) blocked at 9.328° in the aimed-stop geometric diagnostic; model sampling, not measured retail illumination. The 0.568% additional axial iris-normalized clipping metric has a different denominator/method. No claim of perfect transmission.

## 2026-11-13 — Deployment validation

The independent validator's `v-a135/report.md` records a re-read of the patent page images: all 32 Table 1 rows (60 radius/spacing values and 32 index/Abbe values), the stop, three cemented pairs, Figures 1–7, and the bibliographic information. No transcription mismatch was found. Codex checked the assigned integration edits, the CN author-name convention, the catalog field types and the audit results below; the validator's source measurements were retained without re-fitting.

Verdict: valid with notes. The validator finds a strong product association from the maker's own sole-example patent, the matching 16/13 construction, six ED/five high-index positions and matching ordered shapes in the [published maker optical diagram](https://phillipreeve.net/blog/wp-content/uploads/2026/05/7Artisans-AF135mm-F1.8-FF-Lens-construction.jpg); this does not establish exact manufactured prescription identity.

Changes:

- S26, S27, S28, S29 and S30 `sd`: 17 → 17.4 mm, the assigned minimum common value that clears the corner chief ray. The validator estimates Figure 1 at about 19.1 mm, but the S28/S29 crossing caps these rims near 18.0 mm; 17.4 mm passes without approaching that cap.
- `focus.closeFocusM`: 0.68 → 1e15, marking the infinity-only model. `catalog.closeFocusM`: absent → `{ "marketing": 0.68 }`, retaining the marketed minimum distance separately. The shape matches `CatalogV2Input` and the existing KMZ Zenitar 35 mm f/1 entry.
- `source.authors`: Changjia Liu / Xiangshi Luo / Xijing Yang → Liu Changjia / Luo Xiangshi / Yang Xijing. Existing CN Viltrox entries use family-name-first Chinese names. The matching Inventors line in the analysis now uses the same order.
- Header source wording: “user-provided original” → “CN 122469500 A, Table 1”. Added the required explicit scale factor 1, millimetre units/no conversion, tabulated stop position and back focus, inferred stop radius and figure-based rims, and the 17.4 mm corner-clearance choice.
- `source.example` was already present as `{ "label": "Sole example", "id": null }` and is retained under the assignment's “if missing” condition. The three mount ids, `135-full-frame` format, `visible: false`, `const LENS_DATA` and its type import were retained at this checkpoint (closed: coordinator later set visibility true). No other prescription number changed.

After these edits, `built.mjs` reports EFL 132.10552845338597 mm, FOPEN 1.7940979019491947, built stop radius 20.299857229885482 mm and total track 147.806791 mm. The infinity-only close-focus sentinel is 1000000000000000.

Checks, run from the main checkout against the absolute worktree file:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within the standard 3% tolerance; rim 0, trace 0, iris 0, failed 0. The detailed result is f/1.7940979019491945 → f/1.7992747979338315 (+0.2886%), diagnosis `ok`. Its physical next-ray limiter remains S7, consistent with the validator's existing S7/S8 limitation; zero diagnosed rim-limit stations does not mean zero marginal clipping.
- `clearap.mjs --Y 21.7`: chief image height 21.700 mm, field about 9.25°, no `BLOCKS-CHIEF`. Required chief heights at S26–S30 are 17.16, 16.95, 16.57, 16.57 and 17.27 mm, all below 17.4 mm. The probe still flags the existing axial marginal clipping elsewhere and cannot find its upper full-bundle ray; no complete bundle-transmission claim is made.
- `audit:image-circle --all`: one checked, zero undersized, zero skipped.
- `audit:field-coverage --below=1.01 --all`: 100%, modeled 9.2° → 21.65 mm of 21.65 mm, corner clear; one station `ok`, zero unsolved/skipped. The image-format corner is distinct from the 21.70 mm patent-height check above.
- Prettier check: all three assigned files passed, including this appended validation section.

Open at that checkpoint (cleanup wording and labels closed by the section below): names/keys, generic element type labels, glass labels, subtitle/specs wording and analysis process notes/voice. The figure's approximately 19.1 mm rear rims remain larger than the geometrically permitted model rims; this is disclosed rather than repaired. The historical analysis sampling counts describe the earlier 17 mm caps and have not been recomputed (closed: stale sampling passages removed from the public analysis). The standard aperture audit accepts the small existing S7/S8 restriction, while the separate clear-aperture probe retains its axial/full-bundle limitations. Full application tests and viewer checks were outside this integration assignment.

## 2026-11-13 — Cleanup and wording pass

The validator and integration reports, the retained patent-table transcription and the maker diagram were reviewed. The official product page confirms 16 elements in 13 groups, six ED and five high-index elements, f/1.8–16, twelve blades, 0.68 m minimum focus and E/Z/L mounts. Existing catalog mounts, format, focus distances, names/key, visibility and all optical dimensions were preserved.

The subtitle now reads “CN 122469500 A, Table 1 — the maker's own application”. Specs replace the erroneous “PATENT EFL” with the maker's ED/high-index count, all-spherical construction, aperture range and minimum focus. The header and focus description use plain wording; the focus sentinel remains 1e15 and catalog marketing distance remains 0.68 m. All sixteen element types now follow their surface signs, with specific roles. C1 joins L2/L3, C2 joins L5/L6 and C3 joins L14/L15: both members carry `cemented`, and each pair has a `doublets` bracket spanning its outer surfaces. No mechanical group or focusing motion was added. Inferred ED tags appear only on L2/L5/L10/L12/L15/L16, following the maker diagram and consistent nd/νd values.

All former generic Unmatched element labels were reviewed. Catalog row minus printed patent values (Δnd / Δνd):

- L1/L6/L9/L14 → CDGM H-ZF52: 0 / 0.
- L2/L10/L12 → CDGM H-FK61: 0 / 0.
- L3 → Hoya E-FD13: 0 / −0.000063.
- L4 → CDGM H-ZF6: 0 / 0.
- L5 → Unmatched (nd 1.4378 / V 94.523389): no exact catalog row.
- L7 → Schott N-LAK8: 0 / −0.002974.
- L8 → Hoya C12: +0.000003 / +0.000411.
- L11 → CDGM H-ZF4A: 0 / 0.
- L13 → Ohara S-LAH79: 0 / −0.043005.
- L15 → Schott N-PSK53A: 0 / −0.002702.
- L16 → CDGM H-ZPK5: 0 / −0.002024.
- Camera-side plate, previously unlabeled → CDGM H-K9L: 0 / +0.001268.

Every catalog label resolves with `trylabel.mjs`; `glasscheck.mjs` confirms compatibility for all fifteen labeled elements. L5 retains the index/Abbe dispersion fallback. No copied C/F/g indices were present to remove. Catalog curves supply spectral behavior without establishing supplier or melt identity; chromatic results therefore change, while the reference-index geometry is unchanged.

The analysis retains the patent/maker citations, architecture, source graph wavelengths and spatial frequencies, focus limitation and aperture uncertainties. It removes authorization, diagram-misprint assumptions, release/test/commit prose, stale sampling counts and broken spacing; one sentence preserves the prose-versus-table ED ordinal discrepancy. The model-scope section gives the unchanged paraxial values and source comparison. Historical audit sections, including Deployment validation, are retained with stale visibility/cleanup status marked closed in place.

Before → after: EFL 132.10552845338597 → 132.10552845338597 mm; FOPEN 1.7940979019491947 → 1.7940979019491947; half-field 9.328251114305486 → 9.328251114305486°; stop radius 20.299857229885482 → 20.299857229885482 mm; BFD 1.0101 → 1.0101 mm; total track 147.806791 → 147.806791 mm. Full `built.mjs` and `probe.mjs` outputs are identical, including their focus-keyframe summaries. Direct comparison also confirms unchanged surfaces, indices/Abbe numbers, aperture, projection and plate dimensions.

The surface audit reports OK with no errors. The aperture audit has one station within 3%, zero rim/trace/iris/failed diagnoses; the pre-existing small S7/S8 restriction remains. Field coverage reports one station at ≥99%, zero unsolved and zero skipped. Prettier was skipped as directed. The requested screenshot helper produced no PNG and emitted macOS thermal-notification and DNS-watch errors; rendered-page review could not be completed. No command or edit was denied, and no retry was made.

Open: L5 has no exact catalog glass; the patent's ED ordinals disagree with its table; exact manufactured prescription and glass identity remain unproven. No finite-focus configuration is tabulated despite the stated 0–17 mm L7 travel. Figure 1's rear rims are about 19.1 mm versus the retained 17.4 mm model radii and approximately 18.0 mm geometric ceiling (closed in the semi-diameter pass below: rear rims now 18.0 mm, with the remaining figure discrepancy explained by crossing surfaces). S7/S8 retain their small marginal restriction (closed below for the actual engine iris-admitted beam); the prior clear-aperture probe's source-pupil/full-bundle limitations remain. Historical 17 mm-cap transmission numbers are not current-model results (current 17.4/18.0 mm results are below). Rendered-page review remains outstanding after the screenshot helper failed; full application tests were excluded from this pass. (closed 2026-11-13 for L5 spectral coverage: S-FPL55 supplies a qualified spectral proxy; exact historical glass, supplier and melt remain unidentified.)

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local `patents/CN_122469500_A.pdf`, physical page 8, drawing sheet 1/5, Figure 1, the sole Table 1 example at infinity. Figure 2 on the same page prints pupil radius 36.8167 mm. This is a modern 2026 patent despite the batch addendum's generic old-patent description. The prescription's native millimetre scale is retained.

### Scale and optical-rim readings

The embedded Figure 1 image is native 300 dpi. A fresh 300-dpi page render gives axis row 918, S1 vertex x = 512.5, S12 x = 1042 and S30 x = 1838.5. The S1–S30 span is 1326 px / 124.773409 mm = 10.627264 px/mm. Two independent axial spans agree: S1–S12 is 529.5 px / 49.835617 mm = 10.624931 px/mm; S12–S30 is 796.5 px / 74.937792 mm = 10.628816 px/mm. S1–S2 thickness gives 103 px / 9.55 mm = 10.785 px/mm, within raster/vertex-reading uncertainty. The transverse scale is independently supported by the S1 arc: at 200, 300 and 360 px from the axis, circle fits give radii 75.00, 75.14 and 74.95 mm against the table's 75.124012 mm. Thus the same scale works in both directions; no anisotropic stretch was applied.

Only optical edges were measured. Group brackets 101/103/104, stop strokes and lower leader lines were excluded. The clean top-side rim readings are estimates, generally uncertain by a few pixels plus drafting error. Values already within approximately 5–8% are retained. L4's visibly pointed modeled rim and the incorrect relative height of the rear group warrant the changes below even though the magnitude is near the batch's 10% screening threshold.

| Surface(s) | Starting sd, mm | Figure sd, mm | Figure / starting | Final sd, mm | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| 1 / 2 | 36.8 | 35.95 | 0.977 | 36.8 | Retained within drawing uncertainty. |
| 3 | 31.2 | 30.82 | 0.988 | 31.2 | Retained. |
| 4 / 5 | 30.8 | 29.97 | 0.973 | 30.8 | Retained cemented-group outline. |
| 6 | 27.0 | 24.42 | 0.904 | 24.5 | L4's outer edge is flat in the figure, not pointed; beam and light-cost checks permit the reduction. |
| 7 | 22.396398402970696 | 22.54 optical cap; 24.42 outer edge | 1.006 for cap | 22.5 | Minimum tenth-mm cap that clears the iris-admitted axial beam; add `rimExtensionSd: 24.5`. |
| 8 | 22.396398402970696 | 22.49 | 1.004 | 22.5 | Minimum tenth-mm raise for the iris-admitted axial beam; matches the C2 rim. |
| 9 / 10 | 22.5 | 21.78 | 0.968 | 22.5 | Retained. |
| 12 / 13 | 19.4 | 19.05 | 0.982 | 19.4 | Retained square-cut L7. |
| 14 / 15 | 17.1 | 16.61 | 0.971 | 17.1 | Retained square-cut L8. |
| 16 / 17 | 16.2 | 15.76 | 0.973 | 16.2 | Retained square-cut L9. |
| 18 / 19 | 15.0 | 14.91 | 0.994 | 15.0 | Retained square-cut L10. |
| 20 / 21 | 15.0 | 14.68 | 0.979 | 15.0 | Retained square-cut L11. |
| 22 / 23 | 18.7 | 18.30 | 0.979 | 18.7 | Retained square-cut L12. |
| 24 / 25 | 19.4 | 19.05 | 0.982 | 19.4 | Retained square-cut L13. |
| 26 | 17.4 | 19.01 | 1.092 | 18.0 | Rear cemented pair raised coherently toward the figure, within the geometric cap. |
| 27 | 17.4 | 19.01 | 1.092 | 18.0 | Same common rim; no land at the cemented junction. |
| 28 | 17.4 | 19.01 | 1.092 | 18.0 | Same common rim; limited by the facing S29. |
| 29 | 17.4 | 19.01 | 1.092 | 18.0 | Square-cut L16; limited by the facing S28. |
| 30 | 17.4 | 19.01 | 1.092 | 18.0 | Square-cut L16; corner chief ray clears. |

The L4 cap/edge ratio is q = 239.5 / 259.5 = 0.923. One native pixel at each endpoint gives approximately ±(1 + q)/259.5 = ±0.0074, excluding q = 1. The inferred land is about 1.9 mm in the drawing, represented as 2.0 mm between the 22.5 mm cap and 24.5 mm rim. This is a rim extension preserving the optical cap, not an inferred cut depth. No sub-0.1 mm land or cemented-interface land was added.

### Clearance and retained limitations

The actual engine iris radius remains 20.299857229885482 mm. The aperture audit's marginal heights require S7 = 22.450099 and S8 = 22.445813 mm. Both fit 22.5 mm; the smallest two-decimal gap-sag allowance is 0.99 because the combined sag is 1.226880 / 1.247481 = 0.983486. The positive physical S7/S8 gap is 0.020601 mm. At 0.98 the chosen tenth-mm rims exceed the budget, even though the faces do not cross. No R, d, glass, stop, metadata or focus mechanics changed.

At S28/S29 the final 18.0 mm rim gives combined sag 8.076934 mm against 8.328738 mm separation, leaving 0.251804 mm. A 19.1 mm trial fails the surface audit: combined sag 9.180698 mm, physically crossing by 0.851960 mm. A larger gap allowance cannot cure that crossing. The 18.0 mm choice is the least tenth-mm raise that brings the relative rear height inside the drawing's approximate 5–8% uncertainty; no further raise is justified merely by improved light throughput.

The ghost meridional `clearap` probe at the nominal paraxial entrance pupil is a different diagnostic: it derives a 21.175 mm iris rather than the engine's 20.300 mm iris, reports source-pupil axial flags (including S6 after its figure-driven reduction), and still cannot solve its upper full-field ray. These are retained limitations, not claimed resolved by the aperture audit. At the unchanged source pupil the longitudinal spherical aberration is −0.046 / −0.009 / −0.014 / −0.018 mm at pupil fractions 1.0 / 0.85 / 0.7 / 0.5, consistent with Figure 2's scale. The source-height chief ray has no blocked surface: required S26–S30 heights remain 17.16 / 16.95 / 16.57 / 16.57 / 17.27 mm, with minimum rear clearance about 0.73 mm at S30.

The surface audit passes. The actual-iris aperture audit changes from f/1.7992748 to f/1.7940979; its next-ray limiter is now STO, and the raise audit finds zero undersized surfaces. The image-circle audit has one checked, zero undersized, zero skipped. Format-corner field coverage remains 100%, one solved station, zero skipped. Engine EFL remains 132.105528453386 mm, nominal FOPEN remains 1.794097901949, declared half-field remains 9.328251114305°, and stop radius is unchanged. The diagnostic tracing-half-field estimate increases from 9.292661859438° to 9.576464537469°.

### Light and rendered comparison

The final whole-set `rimcost --loo` comparison against `.lens-work/base1124sd/SevenArtisansAF135f18MAX.data.ts` uses the same field angles for both curves:

| Field, degrees (rounded) | Starting geometric transmission, % | Final geometric transmission, % |
| --- | ---: | ---: |
| 0.0 | 99.0 | 100.0 |
| 1.5 | 98.1 | 98.8 |
| 3.1 | 90.6 | 90.9 |
| 4.6 | 80.1 | 80.2 |
| 6.2 | 68.9 | 69.0 |
| 7.7 | 54.6 | 56.7 |
| 9.2 | 32.2 | 36.2 |

No sampled field loses light; the corner gains approximately 4.1 percentage points using unrounded values. Restoring L4 alone in the leave-one-element-out check recovers zero points: the figure-driven reduction/land meets the lands-and-cuts rule. This infinity-only prime has no further printed focus or zoom states. These are geometric lattice transmission figures, not retail relative illumination or an exact reproduction of Figure 7.

Scratch evidence is in `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/a135/`. The prescribed sketch tool produced `before.svg` and `after-straight.svg`; it omits lands. The separately constructed `overlay.svg` / `overlay.png` includes the authored S7 extension and compares the native patent crop with current black and starting blue model outlines at the same 10.627264 px/mm in both axes. The rendered PNG was inspected: the L4 point is replaced by the depicted flat land, rear rims move toward the figure, and the expected small residual rear-height discrepancy remains. No browser was used under this assignment; the coordinator's live-page review remains outstanding.

The supplied `v-a135/diagrams/reeve_crop3x.jpg` was inspected. Its sixteen elements / thirteen groups, ordered shapes and three cemented pairs agree with the patent; the short L4 land and relative rear heights are compatible with the final outline, within the low-resolution image's limits. ED positions are L2/L5/L10/L12/L15/L16; high-index positions are L1/L6/L9/L13/L14. No aspherical element is marked or tabulated. The maker diagram omits the iris and separate camera-side plate and cannot settle tiny clearances.

Front-page render and text agree: applicant 深圳市七工匠光电科技有限公司 (Shenzhen 7Artisans Photoelectric Technology Co., Ltd.); inventors 刘昌家 / 罗香石 / 杨希靖 (Liu Changjia / Luo Xiangshi / Yang Xijing); publication CN 122469500 A, 2026-07-28; application 202610921409.X, filed 2026-06-25. No new name or metadata mismatch was found. The already recorded L9/L11 prose-versus-table ED ordinal contradiction remains.

Iris recommendation: retain the tabulated position and current inferred engine radius; no stop edit was applied. The coordinator should retain the source-pupil/real-iris discrepancy as a limitation rather than enlarge the iris and force further rim raises through crossing surfaces. Formatting and whitespace checks cover only these three assigned files. Full application tests/build and live viewer checks remain outside this pass. No sandbox tool call or edit was refused; missing-helper/module and patch-context errors were ordinary tool errors.

## 2026-11-13 — Glass proxies and catalog metadata

- L5: `Unmatched (nd 1.4378 / V 94.523389)` → `S-FPL55 (spectral proxy; patent nd 1.4378 / V 94.523389; supplier and melt unspecified)`. The Ohara ED fluorophosphate catalog row has nd = 1.43875 and νd = 94.661059; catalog minus patent Δnd = +0.00095 and Δνd = +0.137670 (about +0.14). It meets the approximate 0.002 index / 0.25 Abbe spectral-proxy rule. The engine retains the printed d-line index and borrows only the row's wavelength dependence; the authored nd/νd remain unchanged. This is not an exact identification of historical glass, supplier or melt.
- `chan.mjs`, run from the worktree against `.lens-work/base1124glass/SevenArtisansAF135f18MAX.data.ts` and the current data file, gives the C/d/F/g results below. R/G/B/V map to C/d/F/g, and offsets are relative to d (G).

| Line | BFD before → after, mm | Focus offset before → after, µm |
| --- | --- | --- |
| C (R) | 1.0383 → 1.0251 | +28.2 → +15.0 |
| d (G) | 1.0101 → 1.0101 | 0.0 → 0.0 |
| F (B) | 1.0155 → 1.0018 | +5.4 → −8.3 |
| g (V) | 1.0753 → 1.0061 | +65.2 → −4.0 |

- The violet residual relative to d falls from +65.2 to −4.0 µm. The maximum absolute offset from d falls from 65.2 µm to just under 15 µm. A scratch copy of `chan.mjs` changing only offset display precision gives C = +14.995457, F = −8.308407 and g = −4.018018 µm after relabeling. The full C/d/F/g range is therefore 23.3 µm, not under 15 µm; that distinction corrects the assignment's spread wording. The 23.3 µm range agrees better with the roughly 20 µm paraxial spread of patent Figure 2 over 0.436–0.656 µm, without proving exact glass identity or full-curve reproduction.
- Catalog spec: `0.68 m MIN FOCUS` → `0.68 m MFD`. The analysis defines MFD as minimum focus distance and retains the 0.68 m marketing distance and infinity-only model limitation.
- Added the missing first-line analysis title: `# 7Artisans AF 135mm f/1.8 MAX`. Updated the glass summary, L5 table row and ED paragraph to describe all sixteen elements' catalog spectral coverage and the qualified L5 proxy in present tense.
- Remaining inconsistency: the read-only data-file header still says L5 has no matching catalog row and uses approximate dispersion, although its authored glass label resolves to S-FPL55. The header requires correction by its owner. The data file is unchanged by this text-only assignment.
