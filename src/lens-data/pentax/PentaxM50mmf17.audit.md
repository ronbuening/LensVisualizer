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
