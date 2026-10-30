# Audit Log — Canon EF 100–300mm f/5.6

Patent: JP S61-77818 A, sole numerical example. Original: `patents/JPA 1986077818-000000.pdf`.

## 2026-10-30 — Original-patent shape, concave-end and glass review

### Source and measurement boundary

The original's page 1 confirms 昭61-77818, publication 21 April 1986 and Canon as applicant; the fifth inventor continues on page 5. The complete spherical prescription, all 15 index/Abbe pairs and four-column 69/100/198/290 mm spacing table are on supplied page 3 (printed 113). Figure 1 is on page 4 (printed 114). Its group positions match the **100 mm** state, not the first authored 69 mm state: treating it as the latter would give a false axial scale.

The PDF embeds 2866 × 3895 one-bit raster pages at about 347 ppi. The original figure was inspected at that native scale; a 694 ppi detail was used only for magnification, not as additional source resolution. The approximately 815 ± 2 native-pixel front-to-rear vertex span corresponds to 124.10 mm at 100 mm, or 6.57 ± 0.02 px/mm. Rim picks carry approximately ±1–2 native pixels and about ±0.3 mm practical semi-height uncertainty. Motion arrows, functional-group brackets, the optical axis and stop strokes were excluded from glass measurements.

### Shape and retained geometry

| Element(s) / faces | Disposition | Original-figure evidence and retained constraint |
|---|---|---|
| L1–L2 / S1–S3 | Retained | Connected cemented front pair. The roughly 24.5 mm figure height is smaller than the aperture needed across all zoom states; no bonded-interface land is added. |
| L3 / S4–S5 | Retained | Air-spaced thin biconvex element; rounded figure endpoint does not justify a separate shoulder or cut. |
| L4 / S6–S7 | Retained | Both concave ends remain optical caps; ordinary axial rim connectors are not opaque vertical lands. |
| L5–L6 / S8–S10 | Retained | Cemented negative pair; no resolved outer shoulder beyond either cap and no opaque interface. |
| L7–L8 / S11–S13 | Retained | Cemented positive pair before the stop; no source-supported concave truncation at the retained clear apertures. |
| L9–L10 / S15–S17 | Retained | First rear compound and its shared interface remain connected; small endpoint differences do not establish a separate land. |
| L11–L12 / S18–S20 | Adjusted | Source draws a resolved outer shoulder at concave air exit S20. Preserve its existing 11.4 mm clear cap and extend the drawn radius to 12.5 mm. Increase the curved bonded S19 radius from 12.0 to 12.5 mm to meet that outline; no opaque interface land. |
| L13 / S21–S22 | Retained | Singlet cap ends and connecting rim are resolved; height differences are within figure-estimation uncertainty. |
| L14–L15 / S23–S25 | Retained | Rear cemented pair; both concave ends and cemented connection remain unchanged. No independent shoulder/cut is resolved. |

| Surface | Field | Before | After | Basis |
|---|---|---:|---:|---|
| S19 | `sd` | 12.0 mm | 12.5 mm | Curved bonded interface reaches the source-supported outer C5 height; no opaque land. |
| S20 | `sd` | 11.4 mm | 11.4 mm | Retained existing clear cap rather than shrinking it to the drawing. |
| S20 | `rimExtensionSd` | absent | 12.5 mm | Resolved shoulder outside that cap; approximately 82 native-pixel outer radius. |

At S20 the native figure cap endpoint is about 70–72 pixels from the axis versus about 82 at the outer rim: q ≈ 0.85–0.88, with one-pixel endpoint uncertainty about ±0.023 in q. The adopted cap remains larger than that drawing estimate; the 12.5 mm extension preserves its existing optical aperture. No inferred `rimCutDepthMm` or `rimCutDepthSource` is authored.

A rejected trial reduced the first-group radii to approximately 24.5 mm to match the 100 mm figure. It clipped the 290 mm axial f/5.6 beam at S1, producing approximately f/5.83 (+4%). The existing larger first-group apertures are retained as an all-state constraint. R/d, all spherical prescriptions, stop authority, zoom stations/gaps and the infinity-only focus behavior are unchanged. The historical L3 correction from printed N3 = 1.43749 to modeled 1.48749 remains explicitly separate from this shape review; it was not newly inferred from the drawing. The 290/300 mm heading inconsistency and computed rear focal distances also remain qualified in the analysis.

The actual SVG outlines were compared with Figure 1, including the 100 mm layout and all four authored zoom stations with focus at 0/0.5/1. All 15 element paths remain connected and finite, with no hidden renderer trimming. Surface geometry, stated axial aperture and corner coverage remain separate from source resemblance. All four source stations reach the full modeled format corner; no source cut is claimed to be dimensioned. The focus slider does not reconstruct finite-object internal motion.

### Glass and source-reference qualification

All 15 original N/ν pairs were checked on source page 3, including cemented media; no hybrid layer, source filter, rear plate, separate cement medium or additional refracting plate appears in the selected prescription. The source defines N and ν but does **not** name their spectral reference. No C/F/g line indices, partial-dispersion ratio, APD coefficient, vendor or melt designation is published.

| Element | Original N / ν | Modeled N / ν | Disposition |
|---|---|---|---|
| L1 | 1.80518 / 25.4 | same | Unmatched; source reference unspecified |
| L2 | 1.51633 / 64.1 | same | Unmatched; source reference unspecified |
| L3 | 1.43749 / 70.1 | 1.48749 / 70.1 | Existing documented source correction retained; reference unspecified |
| L4 | 1.71300 / 53.8 | same | Unmatched; source reference unspecified |
| L5 | 1.69680 / 55.5 | same | Unmatched; source reference unspecified |
| L6 | 1.80518 / 25.4 | same | Unmatched; source reference unspecified |
| L7 | 1.52301 / 50.8 | same | Unmatched; source reference unspecified |
| L8 | 1.80518 / 25.4 | same | Unmatched; source reference unspecified |
| L9 | 1.60311 / 60.7 | same | Unmatched; source reference unspecified |
| L10 | 1.77250 / 49.6 | same | Unmatched; source reference unspecified |
| L11 | 1.83400 / 37.2 | same | Unmatched; source reference unspecified |
| L12 | 1.60729 / 49.2 | same | Unmatched; source reference unspecified |
| L13 | 1.57501 / 41.5 | same | Unmatched; source reference unspecified |
| L14 | 1.80400 / 46.6 | same | Unmatched; source reference unspecified |
| L15 | 1.61293 / 37.0 | same | Unmatched; source reference unspecified |

Each element now records `indexReferenceNote` and an explicit `Unmatched` annotation. The retained d-line tracing convention is an approximation; this change qualifies an unverified reference rather than proving the conventional d-line inference wrong. Previously active compatible catalog curves (15/15) are disabled (0/15) while that uncertainty remains. Numeric source/model pairs are preserved, no synthetic per-lens spectral overrides are introduced, and no historical supplier, melt or chemistry is identified. Class names remain conditional comparisons only. The public analysis was synchronized, including removal of stale active-proxy statements and a stale authored-stop-radius description.


## 2026-10-30 — Runtime interpolation completeness follow-up

This is a runtime-only addition to the original 2026-10-30 shape/glass review, with no new source inspection or fresh lens-review count. All original source data, the prior N3 correction, source-review date, spectral qualifications, clear caps, stops and focus/zoom controls are retained.

A sixty-five-position scratch clone reproduces actual current interpolation exactly at every sampled zoom node and focus 0/0.5/1, including iris clear radius. The four source stations were checked separately at exact normalized positions 0, 1/3, 2/3 and 1: the 100/198/290 mm principal zoom and the distinct 100→69 mm second-zoom mode. The source supplies discrete spacings, not a continuous cam. Focus-slider geometry is duplicated because `NO_INTERNAL_RECONSTRUCTION` remains in force.

All four source-station aperture checks remain within 3% of f/5.6. The dense aperture census has sixty of sixty-five positions within that threshold and five S16-limited positions in the interpolated 100→198 interval. Worst sampled f-number is 5.791076 versus 5.6 (+3.41208%), near displayed 158.1875 mm at normalized zoom 0.53125. All sixty-five corner chiefs converge and clear the full-frame corner; chief coverage is distinct from pupil clearance.

The first-order sweep finds a worst sampled residual of +8.650245 mm at that same zoom: EFL 157.396993 mm versus displayed 158.1875 mm, BF 91.202315 mm versus interpolated image gap 82.552070 mm. The 69→100 mode's worst sampled residual is −2.239369 mm at zoom 0.1875, and the 198→290 interval's is +4.167663 mm at zoom 0.84375. The four exact station BF values are 56.967340/82.567791/82.541314/82.531386 mm and match the modeled station image gaps within numerical precision; those rear distances were calculated, not printed in the source. Intermediate states remain illustrative, not focus-preserving. No new trajectory, rim inflation, R/d change, stop schedule or tolerance relaxation is inferred from the sparse source stations.


## 2026-10-30 — Retained N3 correction: structured source erratum

Re-extracted the original page-3 N3 cell at native resolution; it clearly prints `1.43749 / 70.1`. The current `1.48749 / 70.1` model pair remains numerically unchanged. The old header's two tracing implementations were not two independent evidence kinds, so the retained correction is now explicitly supported by `source-summary` and `aberration-figure` in structured `source.errata` at the opening surface S4, plus header/inline/analysis notes.

The separate source-summary check reproduces 69.500/102.299/219.238/384.436 mm from the printed index against the four stated 69/100/198/290 mm states; retained 1.48749 gives 69.207/99.927/198.069/289.066 mm. Among single-character digit substitutions in the printed index, 1.48749 is uniquely best by the four-station fractional RMS residual (0.224%, next best 2.65%; printed 17.18%). This supports the particular replacement but is not counted as an additional kind by itself.

Independently inspected original Figure 5's solid spherical-aberration curve on page 4 (printed 114), separate from its dashed S.C. curve/leader. The native 347 ppi raster plot prints a ±0.50 mm horizontal scale. Its solid curve has a small positive hump around +0.1 mm and negative marginal hook around −0.15 to −0.2 mm; practical curve/endpoint reading uncertainty is about ±0.04 mm, with a 2× crop used only for magnification. At the source's 290 mm f/5.6 input-pupil radius, longitudinal aberration relative to each trial's own paraxial intercept is +0.743094/+0.763123/−1.093548 mm at 70%/85%/100% pupil for 1.43749. The retained value gives +0.047549/+0.060662/−0.179598 mm. The printed trial leaves the source frame and disagrees with its solid-curve shape; the retained trial follows the resolved small hump and marginal hook. Every diagnostic ray reaches the last surface. An independent analytic spherical-intersection/Snell calculation and the runtime exact tracer agree, so this is a comparison with source aberration evidence rather than a preference for a better-looking trace.

The source's claimed movement ratio depends on spacings and does not independently constrain N3; it is not asserted as correction evidence. No family publication or catalog match is substituted. The spectral reference remains unspecified, all fifteen media stay unmatched, the actual source-review date stays 2026-10-30 and no additional fresh review is counted. Only structured metadata and explanatory notes are added to the retained numerical correction.
