# Minolta AF 100–400 APO model audit

Date: 2026-11-10. Engine baseline: retained main 420b475. Scope: one V2 zoom, no source retuning, no external publication.

## Admission and duplicate scope

Probable named-family product correlation is supported by maker provenance, named 14/11 product baseline, 3+2+6+3 mechanical topology, two front high-Abbe elements, focal/aperture program and broad maker section. The source is not proven factory-exact. The original hold and all uncertainty remain disclosed. (Hold closed 2026-11-10: shown after deployment validation.) No Minolta 100–400 .data.ts was found among surviving local recovery builds or retained current main. Prior radius fingerprint screening covered 1095 baseline files, 1051 literal-radius-parsable files, with no 25-radius hit within 0.5%; expression-valued radii were not evaluated. This is bounded duplicate screening, not exhaustive private completion inventory.

## Source integrity

JPH0886961A Example 2, original PDF pages 3–4, supplies 25 radii, 14 d-line glass pairs and three zoom configurations. The complete original's SHA-256 is e467fc7f8745f9374d2d7a3942134a0ff502c3637ef6b84a3ed862e777f9eecd. It is numerically identical to JPH0886962A Example 3 / US5633759A Example 2/Table 2. Cemented interfaces are source surfaces 2, 17 and 24. Source image height is 21.6 mm. No source scaling, substitutions, aspheres, rear plates or unprinted optical elements.

Source discrepancies remain unresolved: printed wide BF 37.697 versus scalar/native 37.749942357 mm, and printed summed tracks differ by 0.001–0.002 mm from summed displayed intervals. The terminal image interval is unprinted; model BF is derived. Both are recorded in source.errata, header and analysis.

## Assumptions

- Stop: 2.000 mm before source surface 10, attached to Gr3. Split d9 exactly; no borrowed iris from a neighboring patent. Radius from source nominal f-number, never an invented published diameter.
- Rims: fixed, inferred component semi-diameters 34 / 34 / 22 / 22 / 18 / 17 / 16 / 15 / 15 / 16 / 13.5 mm. Shared cemented boundaries retained. No per-lens geometry override, rim cut or extension.
- Cam: 33 controls, only source indices 0/16/32 published. Interpolate image-anchored Gr1/Gr2/Gr4 positions separately across W–M and M–T; solve Gr3 for paraxial focus. This removes artificial Gr2 reversals found in the rejected raw-gap/BF-refocus interpolation. No claim of recovered factory cam.
- Focus: Gr1-only objectward motion to 2 m, independently paraxially solved at each control. Nine focus controls per zoom row resolve infinity and eight inferred finite distances. No finite source rows, publishedFocus or conjugates are invented. Retail 0.25× remains context, not model certification.
- Glass: unmatched d-line index/Abbe pairs. No anomalous partial-dispersion, fluorite or exact material claims. (Superseded 2026-11-10: ten exact catalog rows assigned; L2/L3 tagged inferred AD without dPgF.)

## Bounded native results

- Ingest/canonical geometry: zero errors.
- Aperture: 33/33 controls within 3% of stated f-number, no rim/trace/iris failures.
- Grid: 129 zoom samples × 17 focus coordinates; zero hidden render trim and minimum sampled iris air clearance 1.38089 mm.
- Maximum sampled infinity interpolation defocus: 0.049645 mm. Finite interpolation defocus: 0.120120 mm. Maximum finite distance-label discrepancy: 1.4721%. Maximum 2 m endpoint-distance residual: 0.00099952 m.
- Direct source contract: 125 numerical assertions pass. Source rows are only zoom controls 0/16/32; all finite controls are unpublished. Exact finite-object traces at 16 reconstructed states pass 25/25 axial pupil samples, without certification.
- Twelve exact optical samples include the source rows and halfway-between-control states at zoomT 0.015625, 0.515625 and 0.984375. All produce finite spherical-aberration results and converged chief rays at 21.6 mm image height.
- Twenty-five pupil samples at on-axis/half-field pass throughout the 12 states. Full-field survival is 18–25/25; ordinary edge clipping retained at long focal lengths.
- Native rendered silhouettes inspected. Mechanical units and movement directions agree with the modeled source interpretation; Gr3F/Gr3R do not receive independent brackets.
- The target .data.ts passes a standalone strict TypeScript check, file-scoped ESLint and explicit Prettier validation.
- Focus labels do not certify finite MTF. Full-suite integration, catalog metadata generation and user delivery are outside this per-model check.

## Evidence artifacts

The accompanying local validation folder retains control_points.json, authored_model.json, native_check.json/log, aperture_final.json/log, native_silhouettes.svg/png, the derivation script and bounded native check scripts. Source custody remains with the original recovery package. These are review artifacts, not extra catalog models.

## Deployment validation (2026-11-10)

Independent check against the JP scan (pp. 3–4) and US 5,633,759 Table 2 (p. 21): 25 R, 21 fixed d, 3 variable gaps × 3
states, 14 nd/νd pairs and three cemented pairs; no mismatches, and the two tables agree. EFL 102.55 / 200.04 / 390.08,
F 4.60 / 6.30 / 6.62 and Σd reproduce; slider defocus ≤ 0.050 mm. The wide BF difference (derived 37.750 vs printed LB
37.697) survives a single-slip search; the LB column is not a strict paraxial value in this patent (Examples 1 and 3 differ
by −1.59 and −0.019), so the derived BF stays. Example 2 is the only 14/11 example; its two νd 83.58 elements match
Minolta's two AD elements; association strong.

Applied: patent number to house form `JP H08-086961 A`; PDFs filed as `JPH08086961A.pdf` and `US5633759A.pdf`.

Open: public wording (subtitle "probable … family correlation", specs, header), private-archive links and engine-hash
text in the analysis; optional maker minimum aperture f/32. (Wording items closed 2026-11-10 in the cleanup pass below;
the f/32 item stays open.)

## 2026-11-10 — Cleanup and wording pass

Fields changed in the data file: header comment rewritten in plain terms with every fact kept (patent family, unscaled
transcription, production identification, groups, assumed stop, inferred rims, derived back focus, interpolated zoom
stations, reconstructed front-group focus); `subtitle` "JPH08-86961 A Example 2; probable AF 100–400 APO family
correlation, not factory-exact" → "JP H08-086961 A, Example 2 — strong production correlation"; `specs` → 14 ELEMENTS /
11 GROUPS, DESIGN f = 102.5–390.1 mm, DESIGN F/4.60–6.62, ALL SPHERICAL, 2 AD ELEMENTS; `focus.description` reworded
(front-group travel 12.28 / 12.49 / 12.78 mm to 2 m, 0.24× at the long end, reconstruction based on the production
lens); the `source.errata` note reworded and extended with the Example 1/3 back-focus comparison (−1.59 / −0.02 mm) and
the no-single-misprint result; a short `role` on every element; `apd: "inferred"` with a one-line `apdNote` on L2 and
L3 (Minolta lists two AD elements; the two νd 83.58 elements are the only candidates); group text "Gr1 + / front
focus" → "Gr1 + / focus"; gap label "D9 − 2: Gr2–STO" → "D9 − 2 mm: Gr2–stop". `focus.closeFocusM` stays 2 (the
reconstructed finite states are kept, as the batch decision allows). Optics, rims, gaps, stations and keyframes
unchanged.

Glass relabels (exact rows only; Δ = catalog − printed): L1 E-LAF7 (HOYA) Δnd −2e-7, Δνd 0.00; L4, L6, L14 LAC8 (HOYA)
Δnd −2e-7, Δνd +0.01; L5 S-TIH4 (OHARA) Δnd −1.2e-6, Δνd 0.00; L7 E-F3 (HOYA) Δnd −2e-7, Δνd 0.00; L8, L11 FC5 (HOYA)
Δnd −5e-7, Δνd 0.00; L9 FDS90 (HOYA) Δnd +3.2e-6, Δνd −0.04 (Hikari J-SF03 and OHARA S-TIH53 also fit; HOYA chosen to
match the other rows); L10 BSC7 (HOYA) Δnd −1.8e-6, Δνd 0.00. Lead-containing HOYA LAF7 and F3 rows are not in the
catalog; "F3 (HOYA)" would resolve to Sumita F3, so E-F3 is used. L2/L3 take the corpus label "Unmatched (493836 Minolta
AD/ED fluorophosphate; no compatible public coefficient row)"; L12 (1.75450/51.57) and L13 (1.67339/29.25) have no row
within tolerance and stay Unmatched. No element carried nC/nF/ng.

Analysis: patent block updated to JP H08-086961 A with the application number; product identification rewritten on
public evidence (only 14/11 example among five; two AD elements; front-group focus to 2.0 m at 0.25× against 0.24×
modeled; 149 mm barrel and 72 mm filter; 1995 release) with Imaging Resource and M. Hohner cited; Google Drive archive
links, the private candidate comparison and the unnamed book page removed; process text (engine hash, control-count
refinement, grids, sample counts, RMS/best-focus run figures) removed; "Verification Summary" replaced by "Model Scope
and Limitations"; glass section and per-element lines updated to the new labels; back-focus paragraph extended with the
Example 1/3 comparison and the Table 1 φ3 repetition (printed 0.02225 equals Example 1; Example 2 computes 0.02217).
Checked numbers: three-station linear interpolation defocus 7.33 mm; slider defocus ≤ 0.050 mm at infinity and
≤ 0.120 mm between focus keyframes; 0.244× at 2 m, 390.1 mm.

Engine numbers before and after are identical (`built.mjs` and `probe.mjs` output files compared line for line): EFL
102.546440, FOPEN 4.6, halfField 17.117343, stop radius 10.762183, BFD 37.7499 / 65.1204 / 102.7467 mm at the printed
stations. `audit:surface` OK; `audit:aperture` 33/33 stations within 3 % of the stated f-number, no rim, trace or iris
limit.

Open:
- `aperture.maxFNumber` stays 22: Imaging Resource and M. Hohner give f/32–45, but no maker document was found.
- Rims against Fig. 2 (wide end, scaled by the 149.37 mm track): the figure reads about 32 / 30 mm for Gr1, 18 / 15 mm
  for Gr2, 12–13 mm for Gr3 and 11–12 mm for Gr4, against the inferred 34 / 34, 22 / 22, 15–18 and 13.5–16 mm. The
  inferred Gr2–Gr4 rims are 20–40 % larger than the figure; Gr3's axial beam needs up to 12.4 mm. Left for a rim pass.
  (Closed 2026-11-10 by the semi-diameter pass below: L6/L7 at the figure; Gr3R, Gr4 and L5 reduced as far as the
  corner-light rule allows; Gr1 and L4 kept.)
- JP H08-086962 A Example 3 is cited as the same prescription on the package's word; that publication was not re-read.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: Fig. 2 (Example 2, wide end, infinity), US 5,633,759 A drawing sheet 2 (PDF page 3, native 300 dpi raster; the
same drawing as Fig. 2 on page 10 of JP H08-086961 A, cleaner copy). The optical axis is vertical with the object at
the bottom; rims were read on the right-hand side inside the group brackets with the figure profiler.

Scale: the curve crossings of the axis were located on both sides of the axis line. r1 at y 2965.5 px and r25 at
605.5 px span the 149.367 mm of the printed wide-end thicknesses: 15.80 px/mm. The two long air gaps agree (d9 56.870 mm
= 891.5 px, 15.68 px/mm; d20 25.573 mm = 400.5 px, 15.66 px/mm); 15.75 px/mm was used. The radial direction was checked
on drawn edge thicknesses, which depend on rim height: L4 (biconcave) is drawn about 4.4 mm thick at its rim, which the
prescription gives at h ≈ 15 mm (7.6 mm at the old 22 mm); L6 about 3.5 mm (prescription 3.58 mm at 11.7, 6.24 mm at
18); L12 about 3.4 mm (3.40 mm at 11.7, 5.02 mm at 16); the r24 arc sag at the Gr4 rim (about 3.7 mm) also fits a rim
near 12 mm. An overlay of the model sketch on the figure at 6 px/mm lines up at every vertex.

Rule applied: a face below its baseline `sd` stays only if corner illumination drops by at most 3 points at every
field of every zoom node (all 33 stations, wide open, infinity, and the 2 m state), or spacing needs it. With every
rim at the figure, the 102.5 mm corner fell from 96.7 % to 41.0 % (Gr2 alone cost 42.8 points, Gr3 11.6, Gr4 9.5;
Gr1 6.8 at 390.1 mm), so the figure could not be followed everywhere. `rimbudget.mjs` (every second node, 0.2 mm
steps) raised elements from the figure set back toward the baseline until the worst loss fell to 2.85 points; the
same set came out with L13–L14 held at its baseline 13.5 mm, which keeps the engine half-field. L8 and L9–L10 were
then raised to L11's 14.4 mm and L12 to L13–L14's 13.5 mm, so the drawn equal heights inside Gr3R and Gr4 are kept
(raises only gain light).

| Surfaces | Element | Figure px → mm | Before | After | Evidence and reason |
| --- | --- | --- | --- | --- | --- |
| 1–3 | L1–L2 | 495.5 / 487.5 → 31.5 / 31.0 | 34 | 34 | figure smaller; a trim to 33 / 32.5 meets the infinity rule but costs 6.1 points on axis at 346 mm at 2 m |
| 4–5 | L3 | 475 → 30.2 | 34 | 34 | as L1–L2 (paraxial 2 m marginal at s5 is 31.0 mm at 390.1 mm) |
| 6–7 | L4 | 240 → 15.2 | 22 | 22 | figure much smaller (edge thickness agrees), but Gr2 needs ≥ ~21 mm for the 102.5 mm corner |
| 8–9 | L5 | 230 → 14.6 | 22 | 21.2 | greedy minimum; keeps the drawn L4 > L5 step |
| 10–11 | L6 | 183.5 → 11.65 | 18 | 11.7 | figure (radial reading and edge thickness); costs no light |
| 12–13 | L7 | 195 → 12.4 | 17 | 12.4 | figure; restoring it wins back 0.4 point |
| 14–15 | L8 | 201.5 → 12.8 | 16 | 14.4 | greedy 13.4, raised to L11's height |
| 16–18 | L9–L10 | 203 → 12.9 | 15 | 14.4 | greedy 14.1, raised to L11's height |
| 19–20 | L11 | 201.5 → 12.8 | 15 | 14.4 | greedy minimum |
| 21–22 | L12 | 184 → 11.7 | 16 | 13.5 | figure 11.7 costs 0.3 point; raised to L13–L14 as the figure draws them equal |
| 23–25 | L13–L14 | 184 → 11.7 | 13.5 | 13.5 | kept: below 13.5 the surface-25 limit shrinks the engine half-field (17.12° → 15.92° at 12.5) |

Clearance: no rim clips the axial beam at any zoom or focus state (`clearap` at infinity, middle and 2 m focus: no
CLIPS-AXIAL or BLOCKS-CHIEF; Gr3F axial heights 10.92–11.72 mm against 11.7 / 12.4 mm rims). `audit:surface` OK;
`audit:aperture` 33/33 stations within 3 % of the stated f-number with no rim limit; `audit:field-coverage` 33/33
stations reach the 21.6 mm corner; `audit:image-circle` no undersized surface. EFL 102.546440, FOPEN 4.6, half-field
17.117° and stop radius 10.762183 are unchanged, and `probe.mjs` output is identical. `gapSagFrac` untouched.

Corner illumination (geometric transmission, full-pupil lattice, wide open, infinity, baseline → final, corner field
of each station): 102.5 mm 96.7 → 94.1 %; 107.2 mm 97.9 → 95.5 %; 112.0 mm 98.5 → 96.2 %; 117.0 mm 99.0 → 96.7 %;
122.2 mm 99.4 → 97.5 %; 127.5 mm 99.8 → 98.1 %; 133.1 mm 100 → 98.6 %; 138.8 mm 100 → 99.2 %; 144.7 mm 100 → 99.5 %;
150.9 mm 100 → 99.9 %; 157.2–390.1 mm unchanged (100 % to 218.7 mm, then 99.5, 98.5, 97.1, 95.4, 93.6, 91.9, 89.9, 88.0,
86.1, 83.9, 82.1, 79.9, 77.9 and 75.6 % at 390.1 mm). Worst loss at any field of any node: 2.6 points (102.5 mm, 12°).
At 2 m (approximate check: the vignetting analysis at focus 1 with the infinity pupil and focal length), the worst
loss is also 2.6 points at 102.5 mm (96.5 → 93.9 % at the corner) and none from 144.7 mm on.

Open: L4 / L5 stay about 45 % larger than Fig. 2 and Gr3R / Gr4 about 12–15 % larger, because the drawn rims cost
corner light under the rule; Gr1 is 8–13 % larger than the figure for the same reason at 2 m.
