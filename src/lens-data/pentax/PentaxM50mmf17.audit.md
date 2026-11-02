# PENTAX SMC PENTAX-M 50mm f/1.7 — integration source audit

2026-11-01. Prepared against e1414bf50b190e20541b65b16ec278c120841f70; no publication or deployment.

Source research input SHA256 `c9cf6e3c7b88e3b9d7a23c72153e70e9c808e044e471ab058e17c708b12fb6aa`. This package preserved the literal optical surfaces, indices/Abbe numbers, existing figure-informed clear apertures, stop location and authored infinity image plane. The canonical closeFocusM = 1e15 state disables unsupported finite focus. Unresolved source.errata retained the EFL99.724063 versus100 and F12=61.891542 versus62.12 discrepancies; the 2026-11-02 section below isolates their main cause.

Earlier fixed-row/column OPL-reference interpretations are excluded from integration evidence. Native sheared-pupil results remain qualified estimates. Corrected 2D studies, when mentioned, remain conditional numerical research. Initial/rejected/failure archives are retained unchanged outside the catalog. Current corpus and viewer checks are recorded in the separate integration evidence package; no per-lens test is added.

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
