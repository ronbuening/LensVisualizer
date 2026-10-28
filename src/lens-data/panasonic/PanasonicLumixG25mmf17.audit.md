# Audit Log - Panasonic LUMIX G 25mm f/1.7 ASPH.

Patent: US 2017/0059832 A1, Numerical Example 4

## 2026-07-06 - Glass/APD source audit

### Patent Evidence

- Re-extracted local untracked patent PDF `patents/US20170059832A1.pdf`.
- Checked Numerical Example 4 Tables 22-28 against the current data file.
- Table 23 publishes `nC`, `nF`, `ng`, and `PgF` values for every powered element and the cover plate.
- Paragraph 0064 identifies the Example 4 condition elements as A from L1-L4, B = L7, and C = L6; Table 36 resolves the actual condition rows for Example 4 as L3 for condition (1), L7 for condition (2), and L6 for condition (3).

### Phase 1 - Glass/APD Corrections

| Element | Before | After | Justification |
|---|---|---|---|
| L1 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L1 as an APD-condition element. |
| L2 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L2 as an APD-condition element. |
| L3 | `apd: "patent"` | unchanged | Table 36 condition (1) uses L3, with `PgF + 0.0018 * vd = 0.6641`. |
| L4 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L4 as an APD-condition element. |
| L5 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L5 as an APD-condition element. |
| L6 | `apd: "patent"` | unchanged | Table 36 condition (3) uses L6, with `PgF + 0.0018 * vd = 0.6624`. |
| L7 | `apd: "patent"` | unchanged | Table 36 condition (2) uses L7, with `PgF + 0.0018 * vd = 0.6624`. |
| L8 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L8 as an APD-condition element. |

No glass-label relabels or numeric prescription changes were made in this pass. The patent does not name catalog glasses, so the existing Hoya/class labels remain interpretive nd/vd matches, while L6 and L7 remain explicit unmatched patent line-index materials.

### Phase 2 - Retained-Information Audit

- Spot-checked Table 22/23 values for the glass rows touched in this pass; current `nd`, `vd`, `nC`, `nF`, `ng`, and `dPgF` values match the extracted patent values to the precision authored in the data file.
- Prescription, aspheres, focus variables, cover-glass omission, and semi-diameter estimates were not changed.

### Phase 4 - Analysis Sync

- Confirmed the analysis already identifies the chromatic strategy as L3, L6, and L7 only.
- Tightened the glass-identification wording to state that Table 23 line-index availability is not itself an APD badge.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Numerical Example 4 on the rendered page 22 of `patents/US20170059832A1.pdf`: Table 22 surfaces 16–19 give d16 = 10.80000, plate M d17 = 4.20000 (nd 1.51680, νd 64.2), d18 = 1.00000, then BF; Table 23 gives M's nC 1.51432, nF 1.52237, ng 1.52667, PgF 0.53418; Table 25 gives BF = 0.00461 / 0.00488 / 0.00594 mm (∞ / 939.5 mm / 175 mm d0). The legacy fold 10.8 + 4.2/1.5168 + 1.0 + BF reproduces the stored 14.5736 / 14.5739 / 14.5749 mm exactly.
- M is now a `rearPlates` entry (label M, 4.2 mm, BSC7 (Hoya) — resolves for 1.51680 / 64.2 and matches the file's Hoya element labels — with the patent line indices and dPgF −0.00164 from θgF 0.53418) with `gapAfterMm` 1.00461 (d18 + infinity BF). Surface 16 stores the physical gap to M: 10.8 / 10.80027 / 10.80133 mm, carrying the 0.0013 mm close-focus BF growth ahead of the plate so the lens-to-image path stays as printed.
- Plate check against HEAD: EFL identical and paraxial defocus unchanged at all three focus keyframes (worst |Δ| ≈ 1e-15 mm). Physical track grows by 4.2 × (1 − 1/1.5168) = 1.4310 mm to 71.0046 mm at infinity, matching the patent's printed overall length. `closeFocusM` 0.25 is the production specification and was left unchanged.

## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: US 2017/0059832 A1, Numerical Example 4. Rendered PDF p. 22 (printed p. 10), Tables 22–25; PDF p. 18 (printed p. 6), Equation 1 and ¶0113–0122; PDF p. 8, FIG. 7; PDF p. 9, FIGS. 8A–8C. Coefficient blocks were also inspected in 350 dpi crops.

### Phase 2 — Retained-information audit and rim correction

| Surface / field | Before | After | Evidence |
|---|---:|---:|---|
| 11A `sd` | 10.2 mm | 9.1 mm | First slope reversal 9.133052 mm; round down to authored 0.1 mm precision under SD procedure Step 6. |
| 12A `sd` | 10.2 mm | 9.1 mm | Preserve the L6 square-cut rim in FIG. 7; this face's own turnover is 11.043494 mm. |
| 13A `sd` | 11.8 mm | 10.6 mm | Preserve the L7 square-cut rim in FIG. 7; this face's own turnover is 13.708523 mm. |
| 14A `sd` | 11.8 mm | 10.6 mm | First slope reversal 10.673546 mm; round down to authored 0.1 mm precision under SD procedure Step 6. |
| `source.errata` | absent | `unresolved` source-plot note | FIGS. 8A/B do not reproduce the current prescription trace; no supported coefficient replacement isolated. |

Every printed K and A4/A6/A8/A10/A12/A14/A16 sign, mantissa and exponent on surfaces 11–14 matches the data. Equation 1 is h²/r divided by 1 + sqrt(1 − (1+κ)(h/r)²), plus Σ A_n h^n; κ = 0 maps directly to engine K = 0. No KA−1 conversion, odd terms or scale change applies. Table 22 surfaces 1–19 R, d, nd and νd match, with surface 8 represented by STO and the rear plate/dummy-plane path retained as documented. Table 25 infinity/intermediate/close d10, d12 and BF match the authored focus schedule.

No effective diameters are published. FIG. 7 draws L6 and L7 with shared square rims and no designed gull-wing continuation; the source does not license tracing the high-order polynomial beyond the first slope reversal. Before editing, the stated f/1.76012 beam reached 11A/12A/13A/14A at 7.7940/7.1834/6.6263/6.0196 mm, below all proposed rims. Substituted-rim validation accepted 9.1/9.1/10.6/10.6 mm. Exact sampled-sag outlines were inspected against FIG. 7: the reversed-slope hooks disappear and equal rims remain; this is not a measurement of production blank sizes. L8 stays at 11.8 mm.

The baseline per-ray probe at 14.78° shows y-pupil −0.95 crossing 14A at 11.64 mm and yielding image error −9.867 mm, against y-pupil −0.90 at 10.40 mm and −0.8535 mm. The vignetting lattice therefore sampled the polynomial continuation beyond 14A's turnover. The generic triage fan is a ghost diagnostic and can still print those paths after a cap; only the vignetting lattice's transmitted cells establish the post-edit result.

### Source plots and unresolved prescription evidence

The exact trace retains on-axis LSA −0.011/−0.002/+0.003/+0.008 mm at pupil fractions 1/0.85/0.7/0.5. Table 25 f = 25.8784 mm, physical track 71.0046 mm and the near-image BF are reproduced. Traced edge distortion −4.505% agrees with FIG. 8C, whose ruler runs −5% to +5%. FIG. 8A's −0.10/+0.10 mm ruler puts its marginal d-line endpoint near +0.35 mm, unlike the traced −0.011 mm. FIG. 8B's −0.10/+0.10 mm ruler suggests edge meridional/sagittal shifts near +0.19/+0.05 mm; the trace gives −0.026/+0.004 mm. These are approximate figure readings, not exact extracted targets.

Read-only single-slip searches covered sign reversal, ×10, ÷10 and zero for each printed polynomial coefficient, surface-block swaps, adjacent coefficient swaps and cyclic row/column shifts. Different edits can move the SA endpoint toward the figure; none is established by two independent kinds of source evidence. The paraxial source summary does not distinguish changes to high-order polynomial terms. Printed coefficients are retained and the source-versus-model cause is recorded as unresolved rather than declaring a coefficient erratum corrected.

### Phase 4 — Analysis sync

Updated the header to identify the four rim changes, their turnover limits, the unchanged coefficient transcription and unresolved source plots. Recomputed the analysis rim table at the new heights: 11A/12A/13A/14A polynomial departures are +0.0340/+0.2333/+0.4612/+0.8352 mm, total sags +0.1975/+2.1928/+2.3071/−2.1437 mm and signed slopes +0.4/+34.9/+35.0/−2.2°. Qualified illumination claims and the optical-rim interpretation.

### Outcome and follow-ups

The post-edit `vprobe.mjs` sweep has no `rays-not-localized` reason. RI is available at 20.7° and 23.6° (0.474 and 0.308), but 11.8°, 14.8° and 17.7° remain `cosine-map-folds`; max referred deviations there are 0.0257, 0.0181 and 0.0122. No further rim reduction is justified from these failures alone.

The focused surface validator accepts the stored data; the aperture census retains f/1.76012 with the iris as limiter. The image-circle audit finds no undersized rim, and the chief-ray coverage audit reaches the format corner at 10.82 mm. Final `lsa.mjs` and `aberr.mjs` reproduce the prescription-only baseline. Per-surface scans at the new rims supply the synchronized sag/departure/slope values. Repository-wide gates, queue edits and commits belong to the coordinator under the assignment's file boundary.

Coordinator follow-up: investigate the remaining cosine-map folds separately from the removed turnover continuation, and retain an open source-plot discrepancy until family-publication or other independent source evidence can distinguish a coefficient error from a model mismatch.
