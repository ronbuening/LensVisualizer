# Audit Log — Fujinon XC 15-45mm f/3.5-5.6 OIS PZ

Patent figure: `JP2021015312A.pdf, p. 29 Fig. 3 (Example 3, wide)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---:|---:|---|
| 1 | 9.2 | 15 | Exact figure optical rim, capped by surface/gap geometry |
| 2 | 8.0 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 3A | 7.6 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 4A | 7.6 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 5 | 7.6 | 11.5 | Exact figure optical rim, capped by surface/gap geometry |
| 6 | 7.3 | 11.5 | Exact figure optical rim, capped by surface/gap geometry |
| 7 | 5.2 | 7.2 | Exact figure optical rim, capped by surface/gap geometry |
| 10 | 4.3 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 11 | 3.9 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 12 | 3.7 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 13A | 3.7 | 4.7 | Exact figure optical rim, capped by surface/gap geometry |
| 14A | 3.6 | 4.7 | Exact figure optical rim, capped by surface/gap geometry |
| 15 | 3.7 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 16 | 3.7 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 17A | 3.8 | 6.5 | Exact figure optical rim, capped by surface/gap geometry |
| 18A | 3.8 | 6.5 | Exact figure optical rim, capped by surface/gap geometry |
| 19 | 7.5 | 14.2 | Exact figure optical rim, capped by surface/gap geometry |
| 20 | 7.8 | 14.2 | Exact figure optical rim, capped by surface/gap geometry |

Figure scale was approximately 0.0651 mm/pixel at 600 dpi. The automated L2e envelope was contaminated by ray/leader ink; its actual 6.0 mm rim was read from the enlarged figure. A literal 11.2 mm shared front-group rim fails the gap constraint, so surfaces 2–4A stop at 10.0 mm. A 7.5 mm focus rim exceeds the slope limit, so 17A/18A stop at 6.5 mm. The stop was retained.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L1a | 1.95375 / 32.32 | TAFD45 |
| L1b | 1.53409 / 55.89 | Unresolved; patent-coordinate fallback |
| L1c | 1.94595 / 17.98 | FDS18 |
| L2a | 1.62041 / 60.29 | S-BSM16 |
| L2b | 1.53775 / 74.7 | S-FPM3 |
| L2c | 1.62588 / 35.7 | F13 |
| L2d | 1.58313 / 59.38 | S-BAL42 |
| L2e | 1.497 / 81.61 | H-FK61 |
| L3a | 1.58313 / 59.38 | S-BAL42 |
| L4a | 1.804 / 46.53 | S-LAH65VS |

Removed catalog-derived authored nC/nF/ng values so the runtime resolver supplies qualified catalog dispersion rather than presenting it as measured patent evidence.

Added CDGM F13 from the vendor June 2022 Zemax catalog, mirrored at https://refractiveindex.info/database/data/specs/cdgm/optical/F13.yml (formula 3, 0.365–1.014 µm). L2c now explicitly uses F13; the existing code-only winner E-F1 is preserved. L1b (534559) has no compatible catalog candidate and remains unresolved.

### Rear plate

Tables 9/11: restored 7.33 mm air + 2.85 mm PP (nd=1.51633, vd=64.14) + 2.41 mm air through rearPlates. The plate is traced but not drawn.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

Updated all quoted aspheric rim departures in the analysis to the revised SDs.

Cemented membership now explicitly accompanies the source interface topology so the Element Inspector identifies the connected doublets/triplet, not just the diagram bracket.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

Wide, intermediate, and telephoto states retain the source ordering 15.33 / 25.78 / 43.72 mm. Relative to fixed G4, G1 starts at -63.75 / -58.56 / -60.65 mm (imageward then objectward); G2 at -26.59 / -35.71 / -47.72 mm and G3 at -7.88 / -14.05 / -19.00 mm move objectward. Infinity-to-1 m focus moves G3 imageward by +0.25 / +0.54 / +1.29 mm; other groups stay fixed at each zoom station. These signs agree with Fig. 3 and Table 11.

The L2e inspector now names its actual H-FK61 runtime proxy instead of N-PK52A. L2b and L2e receive inferred APD tags based on the selected catalog curves (project-normal-line delta PgF +0.0212 / +0.0315). No supplier attribution or patent-listed APD tag is inferred.

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.


## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: `JP2021015312A.pdf`, Example 3. PDF p. 18 Tables 9–10, p. 19 Table 11, p. 20 Table 12; sag equation and units p. 11 ¶0060–0061; section p. 29 Fig. 3; infinity aberrations p. 30 Fig. 10. Tables were read from 220 dpi page images and 400 dpi detail crops; the optical section was inspected at 600 dpi.

### Source transcription and asphere convention

Every Table 9 surface row 1–22 agrees in R, d, nd and vd, including the cemented row 11 and PP rows 21–22. Table 11 DD6/DD16/DD18/DD22 agrees at both infinity and the patent 1 m endpoint. Table 10 infinity f labels 15.33/25.78/43.72 mm and FNo targets 3.58/4.22/5.76 agree with the station records. The reconstructed EFL is 15.32595/25.77559/43.73380 mm and Bf is 11.61919/11.62305/11.63319 mm versus the printed 11.62 mm; these small differences are retained with the rounded source R/d values. No image-height or total-length row or effective-diameter column is supplied.

Every Table 12 column (3, 4, 13, 14, 17, 18), KA and A3–A20, was compared term by term for sign, mantissa and exponent. There is no transcription mismatch: A3 is zero, all nonzero odd terms remain, KA=1 maps to K=0, lengths are mm and no normalization scale applies. In particular 4A A8 is printed negative, 17A A9 is printed negative, and 14A A20 is printed −1.4616295e−13. These values are retained.

### Changed field

| Surface / item | Field | Before | After | Source and reason |
|---|---|---:|---:|---|
| 8 (L2a rear) | sd, mm | 4.8 | 5.6 | Table 10 stated W/M/T beam; exact axial radii 4.977345 / 5.534050 / 5.475582 mm, rounded up to 0.1 mm. Fig. 3 draws a stepped rear rim. |
| Data header | SD/localization note | General figure/geometry note | Names the surface-8 floor, stepped L2a, retained coefficients and unresolved RI | Distinguishes the axial correction from the unresolved outer-field failure. |
| Analysis | Aperture/localization prose | Figure estimates and calibrated iris | Adds surface-8 floor and explicit unresolved RI limits | Matches the current prescription and checked traces. |

The required raise is 16.7%, so the figure and all prescription rows were checked before editing. At 600 dpi the L2a axis is near y=1386; the source rear optical endpoint is about 80 px from it, approximately 5.2 mm using the section's roughly 0.065 mm/px axial scale. The 5.6 mm axial floor is within about 10% of this approximate endpoint and preserves the pronounced front/rear step. Surface 7 is not an axial limiter and stays at 7.2 mm. The substituted surface validator accepts 8=5.6 without a checks override. The sampled post-edit silhouette preserves this step and has no element overlap; the patent figure is schematic, not a published clear-aperture schedule.

### Rims and localization finding

| Asphere | Stored sd, mm | First slope turnover, mm | Decision |
|---|---:|---:|---|
| 3A | 10.0 | none found through 13.0 | Retain |
| 4A | 10.0 | 10.33499 | Retain; already below turnover |
| 13A | 4.7 | 5.14407 | Retain; already below turnover |
| 14A | 4.7 | 4.74498 | Retain; already below turnover |
| 17A | 6.5 | 6.64232 | Retain; already below turnover |
| 18A | 6.5 | none found through 8.45 | Retain |

The baseline triage/rayinfo tools omit `checkSemiDiameter`; their 14A hits at h≈4.9 are unchecked continuations. Enabling aperture checks and stop-on-clip blocks those rays first at 13A. At 32.29°, pupil y=−0.95 clips at 13A, while the neighboring y=−0.94 ray transmits at 13A/14A h≈4.68/4.69 and misses the chief-ray image by 3.6828 mm. At the first failing wide lattice field, 29.35°, (px,py)=(−0.046875,−0.984375) transmits at 13A/14A h=4.69654/4.69577 mm and has ey=3.6133 mm, ex=0.1149 mm, maxDev≈0.0920. The sharp outer-zone normal change persists inside the stored rim; it is not proved to be a past-turnover or clipping-engine fault.

### Source plots and single-slip assessment

At pupil fractions 1 / 0.85 / 0.7 / 0.5, the d-line LSA in mm remains W −0.008 / −0.029 / −0.025 / −0.004; M +0.118 / +0.028 / −0.037 / −0.029; T +0.197 / +0.117 / +0.056 / −0.006. Figure 10 uses ±500 µm spherical/astigmatism axes and a ±20% distortion axis. Its small LSA, negative wide distortion, near-zero mid distortion and positive tele distortion are broadly consistent with the traced prescription. Close-ray T/S shifts at the sampled endpoints are W −0.163/−0.002 mm, M +0.109/−0.130 mm, T +0.096/−0.134 mm; distortion is −10.400 / +0.239 / +4.085%. These are sampled runtime endpoints (44.03° / 28.75° / 17.30°), not an exact digitization of the source's full fields (46.2° / 28.8° / 17.3°).

Deep-copy diagnostic trials on 13A/14A covered sign, ×10, ÷10 and zero per nonzero coefficient, swapping the coefficient columns and shifting coefficient rows by one. Buildable trials all produce at least 4.676 mm maximum finite sampled absolute LSA, against 0.197 mm for the print; 14A A4×10 also loses a tele marginal trace, and other variants are rejected by the stored-geometry validator. No trial supplies a correction meeting two independent source-evidence kinds. No source.errata claim is authored: the selected source has not been shown internally contradictory by its summary/close-ray plots, and the missing published aperture/domain information does not establish a particular printed error.

### Post-edit result and follow-up

The stored surface validator accepts the revision. The exact stated axial beams are iris-limited at f/3.58, f/4.22 and f/5.76; the image-circle floor has no undersized rim. The prescribed vprobe wide sweep's axis transmission changes 0.929→1.000, while RI is still refused from 29.4° and maxDev remains about 0.092–0.113 at those fields. The prescribed kit mid/tele output is unchanged, but its stop override underfills the current UI beam: it uses 3.97887/2.91508 mm instead of the prepared mid/tele wide-open 5.26252/5.26767 mm. A scratch probe using the current zoom stop and nominal entrance pupil shows post-edit RI refusal from 14.4° at mid and 11.5° at tele. The report retains both sweeps.

Verdict: other — a proven clipped-stated-beam rim was corrected; localization remains unresolved. Do not cap 14A further or alter its printed coefficients solely to obtain RI. The coordinator should queue the unresolved outer-pupil 13A/14A behavior and the kit's zoom-stop override for follow-up; a family-publication comparison or independent exact full-aperture trace may provide new evidence. No shared queue or engine file was edited.
