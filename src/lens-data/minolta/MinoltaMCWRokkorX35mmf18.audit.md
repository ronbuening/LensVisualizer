# Minolta MC W Rokkor-X 35mm f/1.8 audit

2026-11-09: H1 native-qualified representative model; full integration pending. (Closed 2026-11-10: integrated after deployment validation and the cleanup pass below.)

- Exact baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 real commits. No engine edits, commits or publication.
- Whole JPS45-39874 Example 3 and 35x scale preserved. Roundtrip verifies 14 R, 13 internal intervals, 8 N/V pairs, stop-split recombination and source plane106.183mm. No US3606524 splicing.
- Plain N/V source requires explicit assumed-d convention. Stop midpoint dB4 and all caps inferred; probable family match is not factory identity. (Stop superseded 2026-11-10: placed from the printed Seidel coefficients.)
- Initial static failed caps retained. H0 ingest failed missing required layout/yScFill; display-only .3 supplied. H0 native aperture clipped S8 (f/1.86737). H1 changes only S8 cap11 to11.50796mm, S9 remains11; figure shoulders support plausibility, not measurement. No override.
- H1 native build, 8-element zero trim, iris clearance and official census pass, iris-limited f/1.799999998. Full source field remains vignetted; 16-cell throughput32.69% at32degrees.
- Corrected source-angle reference geometric/diffraction MTF uses actual0/15.99990194/31.99999889degrees. Center/half converge through40lp/mm; full field through30 only. Full-field40 withheld. All ray-failure and unknown-flux counts zero.
- Best-axial diagnostic uses -0.12512807mm analysis shift only; edge geometric through30, diffraction through10. Prior format-fraction diagnostics remain separate and retain actual0/17.30827638/32.11122666degree labels.
- C/d/F and photopic support is available via estimated normal-line dispersion, unrun and not factory spectral evidence.
- Maker PDF18 pixels verify0.3m marketing close focus. Runtime1000m is an unvalidated schema placeholder with empty gaps, not a solved finite row; fallback labels are not finite-performance validation. (Placeholder changed to 1e15 on 2026-11-10.)
- First MTF launch failed because /usr/bin/time was absent; retained log. Shell-timed reference and corrected reference passes completed; all results/masks retained.
- Metadata/type/format/lint, unchanged one-worker focused regression (23 files/1609 tests), local build/SEO and guarded installer smoke/readback/refusal: PASS. No test timeout changes. Visible registration is local; no publication. Final gate logs are retained in the package.

## 2026-11-10 — Deployment validation

Independent check against JP S45-39874 B Example 3 (p. 4, 300-dpi renders) at ×35: 14 radii, 13 thicknesses, the
back focus, 8 N/V pairs and two cemented interfaces agree; a third-order trace reproduces all 70 printed Seidel
coefficients for Example 3 (p. 6) and the Petzval sum 0.1552. Engine EFL 35.000, back focus 36.752 (printed 1.05 ×
35 = 36.75), F/1.8. Front page: Minolta Camera Co., Ltd., inventor 小倉敏布 (Toshinobu Ogura). Attribution strong at
design-family level: 8 elements in 6 groups, the patent's only 8/6 example, matching the MC W.Rokkor-HH (1968) and
its MC-X successor.

The patent prints no stop position, but its Seidel coma, astigmatism and distortion sums fix the chief ray: it
crosses the axis 0.6295 of the way through dB4. The delivered midpoint stop gave ΣII 0.0090 against the printed
0.0021.

Deployment change: `patentNumber` to the corpus form "JP S45-39874 B"; stop moved from the dB4 midpoint (3.180 / 3.180
mm) to 4.0033 / 2.3562 mm. `audit:aperture` passes.

Open: analysis text still calls the stop position unpublished; S8/S9 rims (the figure draws the biconcave member
larger); name, subtitle, specs, header and glass wording. (Closed in the cleanup pass below except the S8/S9 rims.)

## 2026-11-10 — Cleanup and wording pass

Data file: header comment rewritten in plain terms with every fact kept (whole Example 3, uniform ×35 scale, N/V
modeled as d-line, Seidel-derived stop at 4.0033 / 2.3562 mm, inferred semi-diameters, printed back focus kept,
design-family correlation). Subtitle "JP 1970-039874 B EXAMPLE 3 — REPRESENTATIVE SOURCE DESIGN" → "JP S45-39874 B,
Example 3 — scaled ×35; production correlation". Specs → "8 ELEMENTS / 6 GROUPS", "DESIGN f = 35.00 mm", "DESIGN
F/1.8", "ALL SPHERICAL". `focus.closeFocusM` 1000 → 1e15 with a plain infinity-only description; marketing 0.3 m kept.
Short `role` added to each element. Cemented ids and doublet badges D1/D2 → C1/C2.

Glass relabels (d-line, against the printed values): L1 → "LAC10 (HOYA, legacy)", Δnd −0.0000017, Δνd +0.04; L5 →
"SF2 (Schott)", Δnd −0.000011, Δνd −0.05. L2, L3, L4, L6, L7 and L8 keep `Unmatched` labels that now state the
printed nd / νd; the nearest rows miss by 0.0004 or more in nd. No `nC` / `nF` / `ng` fields were present.

Analysis: removed the H0/H1 history, aperture census, MTF runs, test counts and package references; the stop
paragraph now states the Seidel derivation; added the conditional-expression values, the 1968 MC W.Rokkor-HH → MC-II
→ MC-X lineage with sources, and the catalog glass identifications; "Aperture Hypotheses and Validation Limits"
became "Model Scope and Limitations".

Engine numbers before and after are identical: EFL 35.0002 mm, F/1.8, half-field 34.909°, stop semi-diameter
11.962 mm, paraxial back focus 36.7524 mm (printed 36.75). `audit:surface` OK; `audit:aperture` reports the axial
beam within 3 % of F/1.8 with no rim limit.

Open: S8 / S9 rims (11.508 / 11 mm) against Fig. 3, which draws the biconcave III_B larger than IV_B and V_B; a
real-ray f/1.8 axial beam reaches 12.59 / 11.38 mm there, so about 12.6 / 11.4 mm would clear it without gap
intrusion. (Rims closed in the semi-diameter pass below.) The patent tabulates no near-focus state; the 0.3 m
marketed minimum focus is not modeled.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: JP S45-39874 B, Fig. 3 (PDF page 8), the section of Example 3, rendered at its native 347 dpi. The dash-dot
axis tilts 0.94° across the sheet, so heights were read from the local axis. Scale from vertex crossings: surface 1
to 14 spans 1413.5 px for 69.433 mm (20.36 px/mm), surface 4 to 14 gives 20.29 px/mm; 20.33 px/mm was used.
Vertical arc fits agree: the surface-3 cap end (296 px below the axis) and I_B's rear face at 245 / 290 px fall on
the printed spheres within 2 px. Each height below is the mean of the top and bottom readings.

| Surface | Before (mm) | Fig. 3 (mm) | After (mm) | Evidence |
|---|---|---|---|---|
| 1, 2 | 18 | 20.1 (flat edge 411 / 405 px) | 20.1 | Both faces run to the drawn edge; the 27° fan end agrees (below). |
| 3 | 18 | cap 15.2 (324 / 296 px), flange 20.1 | 15.2, land to 20.1 | Concave cap ends at a chamfered flange; `rimExtensionSd` draws it. |
| 4, 5 | 17 | 15.2 (square rim, 309 px) | 16.0 | Lowest value that keeps every field within 3 points of the old rims. |
| 6, 7 | 15 | 14.1 | 15 (kept) | 6 % difference; within reading noise. |
| 8 | 11.508 | cap 11.7, flange 14.1 | 12.6, land to 14.1 | Real f/1.8 marginal ray reaches 12.59 mm. |
| 9 | 11 | cap 11.3, flange 14.1 | 11.4, land to 14.1 | Real f/1.8 marginal ray reaches 11.38 mm. |
| 10–14 | 12 | 11.7 | 12 (kept) | 2–3 % difference. |

Before raising surfaces 8 and 9, a ghost-trace spherical-aberration check (+0.098 / −0.095 / −0.152 / −0.116 mm at
pupil 1 / 0.85 / 0.7 / 0.5) matched the shape of the Fig. 7 curve. That rules out a misprint, so the plotted F/1.8
marginal ray is real and must pass both faces. With the old rims, both faces trimmed the engine's axial beam
(99.5 % on axis); now it is 100 %.

Fan ends: Fig. 9 (Example 3) shows the 27° fan ending at 0.81 and 0.80 of the 19° fan's extent on its two sides. A
meridional trace of the old rims gave 0.56 (front-doublet limited) and 0.88. The new set gives 0.81 and 0.88, and
the 19° fan becomes nearly symmetric (−0.90 / +0.88 of the paraxial pupil), as Fig. 9 draws it.

Illumination (engine geometric transmission, wide open, old → new rims): 99.5 → 100 % on axis, 97.2 → 97.5 % at
14.6°, 95.4 → 92.9 % at 17.5°, 89.1 → 87.1 % at 20.4°, 77.1 → 80.4 % at 23.4°, 63.1 → 70.3 % at 26.3°,
48.3 → 58.4 % at 29.2° and 32.7 → 44.1 % at the 32.1° corner. The worst loss is 2.4 points at 17.5°; restoring
I_B to 17 mm would win back up to 4.4 points against the new set, but the 3-point rule against the old rims is met.
EFL 35.0002 mm and F/1.8 are unchanged, and the engine half-field rose from 34.909° to 35.499°. `audit:surface` is
OK; `audit:aperture` finds the axial beam within 3 % of F/1.8 with no rim limit; image-circle reports 0 undersized;
field coverage is 100 % (32.1° → 21.65 mm). The real-ray clearance trace at 21.63 mm shows no axial clip or blocked
chief ray.

Maker diagram: the deployment validation above records the XG-7 brochure section, which shows 8 elements in 6
groups (cemented front doublet, thick biconvex, positive meniscus, biconcave, meniscus, cemented rear doublet), the
same order as Example 3. It shows no special-glass or aspherical elements. No maker image was viewed in this pass.

Open: the land drawing is square, while Fig. 3 chamfers the L2 and L5 flanges. I_B is drawn 0.8 mm taller than
Fig. 3 because of the light rule.
