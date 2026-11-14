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

## 2026-11-10 — Second review: diagram, labels and movement

Compared the live page (infinity, the eight element inspectors, the group-movement overlay) with Fig. 3 (PDF page 8)
re-rendered at its native 347 dpi and with the XG-7 brochure section. Heights are stroke centres measured from the
local dash-dot axis, fitted through six points (it drops 26 px over 1560 px), at the 20.33 px/mm scale proved
above; each reading is top / bottom, then the mean. Front doublet edge 20.14 / 19.95 (20.0); surface 3 cap end
14.58 / 14.49 (14.5); I_B flat 15.18 / 15.13 (15.2); II_B flat tip 14.13 / 13.87 (14.0); III_B flange 14.18 / 13.77
(14.0); IV_B 11.83 / 11.44 (11.6); V_B 11.83 / 11.39 (11.6).

| Surface | Before (mm) | Fig. 3 (mm) | After (mm) | Evidence |
|---|---|---|---|---|
| 6, 7 (L4, II_B) | 15.0 | 14.0, flat tip | 14.2 | Fig. 3 draws II_B's tip level with III_B's flange; the live page showed L4 0.9 mm above L5's flange. The brochure section, scaled to the front doublet, also puts II_B near 13.7 mm, well below I_B. The f/1.8 marginal ray reaches 14.10 mm on surface 6, so 14.2 is the least move that keeps it. |

Readings that change nothing: the surface 3 cap end reads 14.5 mm here, against the 15.2 mm recorded above; 15.2 is
5 % above it, and lowering it would cost light, so it stays. L3 at 15.9 mm would sit
exactly on the 3-point budget (3.0 points at 17.5°); 0.1 mm is inside the reading error, so 16.0 stays. The front
doublet, the L5 flange land, the S8 / S9 caps (set by the marginal ray, above the drawn 11.7 mm) and IV_B / V_B
(12 against 11.6, 3 %) agree.

Lands and cuts, by `rimcost.mjs` (full-pupil lattice, wide open, infinity) against the rims before the semi-diameter
pass:

| Item | Baseline (mm) | Final (mm) | Fig. 3 | Points of light | Verdict |
|---|---|---|---|---|---|
| Surface 3 cap, land to 20.1 | 18 | 15.2 + 20.1 | cap 14.5, chamfered flange to 20.0 | a 16 mm cap would win 1.6 at 26.3°, where the lens is 7.2 above baseline; land 0.0 | keep: slight; land drawn |
| Surfaces 4, 5 (I_B) | 17 | 16.0 | 15.2 | 2.4 at 17.5° | keep: slight |
| Surfaces 6, 7 (II_B) | 15 | 14.2 | 14.0 | 0.0 at every field | keep: slight |
| Surfaces 8, 9 lands to 14.1 | none | 12.6 / 11.4 + 14.1 | flange 14.0 | 0.0 | keep: drawn |

The worst loss is still 2.4 points at 17.5°; transmission at 0 / 14.6 / 17.5 / 20.4 / 23.4 / 26.3 / 29.2 / 32.1° is
100 / 97.5 / 92.9 / 87.1 / 80.4 / 70.3 / 58.4 / 44.1 %, unchanged by this review. EFL 35.0002 mm, F/1.8, stop
semi-diameter 11.962 mm and engine half-field 35.499° (surface 3 limits it) are unchanged. `audit:surface` is OK;
`audit:aperture` finds the axial beam within 3 % of F/1.8 with no rim limit; image circle 0 undersized; field
coverage at least 99 %; the real-ray trace at 21.63 mm shows no axial clip or blocked chief ray.

Labels and tags: the element types agree with the signs of R. The patent names components (A, I_B to V_B), not
elements, so the names stay L1 to L8 and the roles carry the component names. C1 (surfaces 1 to 3) is component A
and C2 (12 to 14) is V_B, the two cemented components of Example 3. No `apd` tags: the patent names no special glass
and the brochure marks none. No aspheres. The stop sits between L4 and L5 at the Seidel-derived plane. No `groups`:
the lens is static, the corpus's other static lenses author none, and the movement overlay then counts the six
air-spaced groups. Every inspector showed "FL = —"; `focalLengthMm` now carries the thick-lens values the analysis
quotes (+66.16, −25.31, +38.45, +88.08, −28.45, +60.28, −59.91, +33.78 mm).

Movement: none is modeled, and none is printed. The patent tabulates only the infinity state; `focus.description`
says so, the slider reads "Not modeled" and the overlay reports no focus or zoom movement.

Glass: L1 "LAC10 (HOYA, legacy)" → "LAC10 (HOYA catalog equivalent; production supplier unspecified)", the same row
(Δnd −0.0000017, Δνd +0.04); L5 "SF2 (Schott)" → "SF2 (SCHOTT catalog equivalent; production supplier
unspecified)", the same row (Δnd −0.000011, Δνd −0.05). Both now use the corpus label form, since the patent names
no supplier. Other rows inside the window (K-LaK10, J-LAK10, S-LAL10; E-FD2, PBM22, S-TIM22) are no more plausible
for a 1967 Minolta design, so both keep their rows. The table (p. 4) prints
only N and V: no line indices, glass names or partial dispersions. 1.6775 / 55.4 recurs in Example 1 (NA1 and NB2,
pp. 2–3), 1.7080 / 53.3 and 1.7557 / 27.2 in Example 4 (NB5 / NB6 and NB4, p. 5); 1.6176 / 52.7 appears only in
Example 3. Neither the repo catalog nor the Hoya (with obsolete), Ohara and Sumita AGF files has a row inside the
window: the nearest are BACED1 1.61720 / 53.95, S-LAL12 / LAL12 1.67790 / 55.34, LAL8 1.71300 / 53.85 and K-SFLD4 /
SF4 1.75520 / 27.50. No catalog-row proposal. No medium is constant or nd-only.

Colour: Fig. 7 (p. 10) prints d and g spherical-aberration curves. At zero aperture the g curve sits 34 px left of
d at 694 dpi (251 px per 0.01), −0.00135f or −0.047 mm at ×35. The model's paraxial g focus is −0.083 mm (C +0.071,
F −0.087 mm). Giving the six unmatched elements the partial dispersions of their nearest catalog glasses (S-LAL12,
S-LAL8, SF4, BACED1) gives −0.058 mm, so most of the excess comes from the normal-line partial dispersion the
Abbe-number model assigns.

Assignee: "Minolta Camera Co., Ltd." matches the front page (ミノルタカメラ株式会社) and the corpus spelling.

Open: the model's paraxial g-line focus lies 0.036 mm short of Fig. 7's, from the Abbe-number dispersion of the four
uncatalogued coordinates.
