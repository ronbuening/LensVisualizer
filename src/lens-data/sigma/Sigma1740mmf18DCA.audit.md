# Audit Log - SIGMA 17-40mm f/1.8 DC | Art

Patent: CN 121454749 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/CN_121454749_A.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 40.
- The patent does not publish clear-aperture semi-diameters. The stored SDs remain inferred from paraxial marginal/chief-ray envelopes and constrained by edge thickness, rim slope, element ratio, and cross-gap sag clearance.
- FIG. 1 shows a broad negative-lead G1, a similarly tall mid-front relay around G2/G3, a smaller stop-adjacent G4, and compact G5-G7 rear groups. The current SD set follows that drawn hierarchy: the largest fixed front/mid groups are around 18-20 mm, the stop is 10.94 mm, and the rear groups taper to roughly 12.5-13.9 mm.
- No SD values changed.

## 2026-10-08 - dPgF moved to the engine's normal line

- Read local `patents/CN_121454749_A.pdf`. The patent defines its deviation as dPgF = θgF − (0.648285 − 0.00180123·νd): claims 5 and 6 on PDF page 3, ¶0050 on PDF page 10 and ¶0053 on PDF page 11. ¶0079 (PDF page 12) defines the θgF column as the g/F partial-dispersion ratio.
- Numerical Example 1 [面数据] prints an absolute θgF for every glass: surfaces 1–5 on PDF page 14 (description page 10/35) and surfaces 6–29 on PDF page 15 (11/35). The pages are images, so both were rendered at 300 dpi and read from the image; the patent prints no per-element deviation.
- All seventeen stored `dPgF` values were the patent's own deviation (θgF minus the patent's line), copied straight into the field. The engine rebuilds ng from `dPgF` against 0.6438 − 0.001682·νd, so each value is now θgF − (0.6438 − 0.001682·νd) at the element's stored νd. The two lines differ by 0.004485 − 0.00011923·νd, which is the size of every change below.

| Element | νd | Patent θgF | Stored before (patent's deviation) | Stored after (engine line) |
|---|---:|---:|---:|---:|
| L1 | 66.97 | 0.5367 | +0.009043 | +0.005544 |
| L2 | 71.72 | 0.5398 | +0.020699 | +0.016633 |
| L3 | 70.44 | 0.5306 | +0.009194 | +0.005280 |
| L4 | 42.70 | 0.5646 | −0.006772 | −0.007379 |
| L5 | 75.50 | 0.5401 | +0.027808 | +0.023291 |
| L6 | 29.74 | 0.5951 | +0.000384 | +0.001323 |
| L7 | 25.05 | 0.6192 | +0.016036 | +0.017534 |
| L8 | 52.32 | 0.5473 | −0.006745 | −0.008498 |
| L9 | 43.94 | 0.5612 | −0.007939 | −0.008693 |
| L10 | 16.48 | 0.6656 | +0.046999 | +0.049519 |
| L11 | 32.23 | 0.5899 | −0.000331 | +0.000311 |
| L12 | 68.62 | 0.5440 | +0.019315 | +0.015619 |
| L13 | 68.62 | 0.5440 | +0.019315 | +0.015619 |
| L14 | 66.97 | 0.5367 | +0.009043 | +0.005544 |
| L15 | 49.22 | 0.5495 | −0.010128 | −0.011512 |
| L16 | 40.73 | 0.5694 | −0.005521 | −0.005892 |
| L17 | 25.15 | 0.6103 | +0.007316 | +0.008802 |

- Left unchanged: nothing. Every element carries a printed θgF, no element is e-line referenced, none authors nC/nF/ng, and no stored value was already within 0.0003 of its engine-line value (the smallest change is L16, 0.000371).
- nd, νd, glass labels and surfaces are untouched; no `apdNote` was added because no element had one. A header note in the data file names both lines.
- `Sigma1740mmf18DCA.analysis.md` is unchanged: its ΔPgF figures and the condition (8) / (9) values are the patent's deviation, labelled as the patent's definition, and remain correct as such.
