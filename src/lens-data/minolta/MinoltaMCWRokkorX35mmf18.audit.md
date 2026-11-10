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
intrusion. The patent tabulates no near-focus state; the 0.3 m marketed minimum focus is not modeled.
