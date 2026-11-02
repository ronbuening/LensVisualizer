# PENTAX SMC M 50mm f/1.7 — source audit

2026-11-01. First authored from US 3,817,603's sole example with printed radii, gaps, indices and Abbe numbers, figure-informed semi-diameters, an inferred stop and a computed infinity image plane. That version carried `closeFocusM` = 1e15 (closed: now the retail 0.45 m) and recorded EFL 99.724063 against 100 and F12 61.891542 against 62.12 as unresolved; the 2026-11-02 section below isolates their main cause. No per-lens test is added.

## 2026-11-02 — r4 source correction

A deployment review read every cell of Table 1 and the claim on page images: no transcription mismatch against the US print. A single-slip search of 1,242 variants, scored on the printed f, F12, the 54 cells of Table 2 and Figs. 2A/2C, isolated r4.

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| 4 | `R` | 47.465 (printed 94.93) | 47.195 (94.39) | Digit transposition; `source-summary` and `aberration-figure` agree. |
| 11 | `d` | 35.77908302653397 | 35.96558439057599 | Recomputed paraxial back focus for the corrected r4. |
| L2 | `focalLengthMm` | 48.68815876668884 | 48.90360893535522 | Thick-lens value for the corrected r4. |

| Check at F = 100 unless noted | Printed r4 | Corrected r4 | Patent |
|---|---|---|---|
| Normalized EFL | 99.724 | 99.971 | 100 (nominal) |
| F12 | 61.892 | 62.056 | 62.12 |
| Table 2 Seidel rms | 0.00647 | 0.00036 | n/a |
| Fig. 2A SA minimum | −.246 | −.227 | about −.229 |
| Fig. 2A SA at full aperture | −.024 | +.036 | about +.03 to +.04 |
| Fig. 2C distortion, 22.7° | −.38% | −.44% | about −.44% |
| EFL at 0.5 scale (mm) | 49.862 | 49.986 | 50 nominal |
| Image plane at 0.5 scale (mm) | 67.579 | 67.766 | not printed |

Family evidence: Google's text of DE 2224723 A1 prints r4 = 94,39, and its other ten radii equal the US table. The scan was not viewed because Espacenet showed a bot check, so `family-publication` is not cited in `source.errata`. Add it once a page image of the table has been read.

The US Table 2 also prints surface-5 S1 as −0.0162 where the German text gives −1,162. That is a second US misprint, confined to the Seidel table, and it does not touch the model.

Open: F12 remains 0.10% below the printed 62.12, which the German text repeats; no single change gives 100 and 62.12 together. Table 2's Petzval column implies a normalizing F of 99.964–99.974, so "100" is nominal. Stored under `unresolved` and in Section G of `agent_docs/sd-audit-queue.md`. The MTF, convergence and two-dimensional studies in the package predate this correction and were not rerun.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read: 33 cells of Table 1 and the claim (11 R, 10 t/d, 6 n, 6 ν) plus F and F1,2. The only fault is the r4 misprint above. Every R and d is exactly 0.5 times the printed value. The table states the d-line, and the bibliographic data agree with the front page.

First-order values beyond the table above: f/1.7 and half-field 22.7° match Figures 2A–2D. The patent prints no back focus or total length; the model gives BFD 35.966 mm and track 31.800 mm. Stop semi-diameter 10.35 mm at f/1.7. `audit:surface` prints OK; `audit:aperture` is within 3% of f/1.7 with no rim-limited station; field coverage is 20.82 of 21.65 mm, limited by the declared 22.7°, with the 23.5° corner clear. Corner illumination at 22.7° is 45.5%.

Stop: Figure 1 marks none. On the front-page figure, surface 6 sits at x = 1067 px and surface 7 at 1303 px, midpoint 1185 px; the file's z = 17.28 mm falls at 1187 px. Figure 2D's ΔS curve fits a stop about 9.5–10 units behind surface 6 at F = 100, and its ΔM curve about 16. Table 2's chief ray crosses the axis behind r11, so it locates no iris.

Rims against the two public drawings, in mm, each at its own axial scale:

| Surfaces | Patent Fig. 1 | Pentax catalog p. 5 | File |
| --- | --- | --- | --- |
| 1, 2 | 15.0 | 16.35 | 16.2, 16.2 |
| 3, 4 | 14.15 | 14.5 | 14.9, 14.4 |
| 5 | 12.65 | 13.8 | 13.5 |
| 6 | 10.6 | 10.9 | 11.5 |
| 7 | 10.0 | 10.7 | 11.1 |
| 8, 9 | 12.0 | 12.7 | 12.9, 12.9 |
| 10, 11 | 11.9 | 12.7 | 12.7, 12.5 |

No rim moved. Setting surfaces 6 and 7 to the catalog values costs no corner light and gains nothing. The catalog section's L1 to L6, stop gap and doublet agree with the model. It draws L4 thinner on the axis (about 1.4 mm against 2.41 mm) and L5 thicker (5.2 against 4.505); on an 800 px image that may be schematic or a production change, and the drawing cannot tell which.

Product: retail sources give 6 elements in 5 groups, f/1.7 to f/22, 49 mm filter, 0.45 m, K mount, 165–185 g (sources differ) and 1976–77; no field in the file disagrees. The match is moderate: construction, aperture, field, assignee and timing fit, and one third-party survey names this patent, but no Pentax document does.

Fields changed: `focus.closeFocusM` 1e15 → 0.45; `subtitle`; `catalog.specs` added; `focus.description`; a `role` on all six elements; `doublets` C1 added for the L4/L5 pair, which had none; the header comment; the corrected erratum's note, which now says 54 Seidel cells. The analysis lost its diffraction, convergence and two-dimensional study prose, and gained a title, a Conditional Expressions section and a Source Correction section, with the glass section rewritten for TAF5, SF10 and S-TIM39.

Open: read a page image of DE 2224723's table, then add `family-publication` to the r4 entry. The F12 residual stays open as recorded above.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: `patents/US3817603.pdf`, image-only, native raster 2320 × 3408. The sole example is drawn twice, on the front page (page 1) and as Fig. 1 (page 2). They are reductions of one master: front page over Fig. 1 is 1.340 along the axis and 1.336 across it, so neither print adds its own stretch. Readings below are ink centerlines on the front-page print, with heights as half the top-to-bottom span, because the ruled axis line tilts about 0.4° against the rim midpoints, which stay level along the lens.

Scale along the axis: surface 1 to 11 is 807.0 px over 31.80 mm and surface 3 to 9 is 641.1 px over 25.35 mm, so 25.3 px/mm (0.0395 mm/px).

Scale across the axis, from circles fitted to the drawn surfaces against the printed radii, with the across-to-along ratio that each circle implies:

| Surface | R (mm) | Drawn sag (px) | Front page | Fig. 1 |
|---|---|---:|---:|---:|
| 3 | 22.445 | 127 | 1.037 | 1.036 |
| 6 | 17.415 | 92 | 0.993 | 0.990 |
| 7 | −19.185 | 81 | 1.036 | 1.031 |
| 9 | −26.415 | 69 | 1.008 | 0.996 |
| 4 | 47.195 | 54 | 1.068 | 1.067 |
| 11 | −54.555 | 38 | 1.125 | 1.113 |
| 1 | 69.64 | 31 | 0.907 | 0.917 |

The four strong arcs average 1.018 ± 0.012 and the sag-weighted mean of all seven is 1.027. Surfaces 2, 5, 8 and 10 are drawn with exaggerated curvature and constrain nothing. Surface 1 is drawn asymmetrically, 37 px of sag at the top and 25 px at the bottom. As a separate bound, the surface 7 end at 254.5 px must clear the 10.33 mm axial ray, which needs at least 0.0406 mm/px. This pass uses 24.7 px/mm (0.0405 mm/px), a ratio of 1.025. A fit that frees the ratio from arc shape alone is too degenerate to use.

Settled: the figure is stretched about 2.5 % along the axis, not 7 %. A 7 % stretch would put the drawn ends of surfaces 3, 6 and 9 another 13–15 px of sag past where they are drawn, and surface 7 another 3.5 px, against a ±2 px reading. The validator's 7 % is the 2.5 % stretch plus a real excess of about 5 %, uniform across the lens. That excess is inside the noise band and the proportions are right, so the outer rims stay.

| Surface | Figure px | Axial scale (mm) | 24.7 px/mm (mm) | From drawn sag (mm) | Before | After | Evidence |
|---|---:|---:|---:|---:|---:|---:|---|
| 1, 2 | 376.5 | 14.87 | 15.25 | n/a | 16.2, 16.2 | 16.2, 16.2 | Kept: 6 % over, square as drawn |
| 3 | 348.75 | 13.78 | 14.12 | 14.15 | 14.9 | 14.9 | Kept: 5.5 % over |
| 4 | 335 | 13.23 | 13.57 | 14.0 | 14.4 | 14.4 | Kept; the 0.5 mm step to surface 3 is as drawn |
| 5 | 316.75 | 12.51 | 12.83 | n/a | 13.5 | 13.5 | Kept: 5 % over |
| 6 | 269.5 | 10.65 | 10.91 | 10.65 | 11.5 | 10.7, land 13.5 | Drawn curve end, ray floor 10.57 |
| 7 | 254.5 | 10.05 | 10.31 | 10.55–10.62 | 11.1 | 10.6, land 12.9 | Drawn curve end, ray floor 10.33 |
| 8, 9 | 300.25 | 11.86 | 12.16 | 11.7 (9) | 12.9, 12.9 | 12.9, 12.9 | Kept: 6 % over, square as drawn |
| 10 | 297.75 | 11.76 | 12.06 | n/a | 12.7 | 12.5 | Square rim, toward the figure |
| 11 | 297.75 | 11.76 | 12.06 | 12.6 | 12.5 | 12.5 | Kept |

Drawn sag at the end of surface 6 is 3.63 mm on the front page and 3.67 mm on Fig. 1. Surface 7 reads 3.20 and 3.13 mm. The two drawn ends stand 2.53 mm apart on both prints, and the model now gives 2.62 mm.

Lands: both drawings carry L3 and L4 to flat rims through bevels about 1 × 1.9 mm, and one straight edge between face rims drew a taper along the whole rim. A land to the partner rim restores the flat and stands where the drawn curve ends, which is why surfaces 6 and 7 moved: a land at 11.5 and 11.1 mm left a 1.6 mm slot between L3 and L4 where the figure has 2.5 mm. At those heights the land leaves about 1.5 mm² of excess at each corner against about 4 mm² missing with the single edge. The bevel itself cannot be drawn. L4/L5 keeps its rim at surface 8 because the land is on surface 7, the air face.

Surface 11 limits the corner, so raising it to 12.7 mm to square L6 would gain 1.2 points at the corner and up to 1.5 at 17.0°. That vignetting is real and stays. Surface 10 falls to 12.5 mm at no cost. It leaves 0.4 mm from L5 to L6 where the figure has 0.1 mm, the step surface 11 already had.

Corner light, full-pupil lattice against the package rims, at 0, 2.8, 5.7, 8.5, 11.3, 14.2, 17.0, 19.9 and 22.7°: 100.0, 100.0, 99.9, 95.5, 88.2, 79.5, 69.3, 58.0 and 45.5 % for both the package and the final rim set, so loss 0.0 points at every field, corner 45.5 % before and after. Taking the whole set to the figure would have given 38.0 % at the corner and lost 8.5 points at 17.0°: L1 to 15.3 mm alone costs 5.7 points, past the 3-point limit, and surfaces 8–11 to the figure cost 3.0 on their own.

Clearance on the final set: wide open at f/1.7 the axial ray reaches 10.57 mm at surface 6 and 10.33 mm at surface 7, under the rims by 0.13 and 0.27 mm. No `CLIPS-AXIAL` or `BLOCKS-CHIEF`, the validator, image-circle and aperture checks pass, and traced coverage stays 20.82 of 21.65 mm with the 23.5° corner clear. Engine half-field 22.7°, f/1.7, stop 10.35 mm and EFL 49.986 mm do not change. LSA reads +0.018, −0.094, −0.113 and −0.080 mm at pupil 1, 0.85, 0.7 and 0.5. No rim was raised for a clip.

Maker's drawing, Pentax catalog section, read at its own axial scale of 0.152 mm/px: L1 16.0–16.3, L2 14.4, L3 13.55, bevel ends 10.9 and 10.6, L4/L5 12.4–12.7, L6 12.4–12.7 mm. Six elements in five groups with the same order, L6 square, and flat rims with bevels on L3 and L4. Its curve ends agree with the new surfaces 6 and 7 within 0.2 mm. It runs closer to the file's outer rims than to the patent figure, and it is a check on order and proportion only.

Live page checked at the only printed state, infinity. `focus=1` renders the same, because the model is static. L3 and L4 now read flat-topped as in both drawings, and the STO label sits against the L3 land without covering it. No patent stop tick exists to test the stop, and Figure 2 prints no lateral fans, so neither gives a second rim reading.
