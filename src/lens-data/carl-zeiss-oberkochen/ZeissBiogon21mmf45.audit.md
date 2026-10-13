# Audit Log - Zeiss Biogon 21mm f/4.5

Patent: US 2,721,499, Example 2
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and code-only source recheck

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `BK crown (504/667)` | retained | Patent Example 2 lists nd=1.50380, vd=66.7. Checked public catalog sources did not provide a coefficient-backed exact match for code 504667. |
| L4 / 6 | `glass` | `SK7 dense crown (607/595)` | `K-SK7 (Sumita)` | Patent Example 2 lists nd=1.60739, vd=59.5. Sumita K-SK7 publishes code 607595 with public coefficients and matches within patent rounding. |
| L5 / 8 | `glass` | `BaK/SK crown (561/575)` | retained | Patent Example 2 lists nd=1.56093, vd=57.5. No coefficient-backed exact public match was found for code 561575. |
| L6 / 9 | `glass` | `SK-type dense crown (625/533)` | retained | Patent Example 2 lists nd=1.62500, vd=53.3. Public catalog candidates are only family-near, not exact enough to relabel. |
| L8 / 12 | `glass` | `LaK/SK crown (642/581)` | retained | Patent Example 2 lists nd=1.64200, vd=58.1. No coefficient-backed exact public match was found for code 642581. |

### Phase 2 - Retained-information audit

- Rechecked the Example 2 patent table against the data file after the documented 0.21x production scaling. Stored radii, thicknesses, and glass constants match the patent table.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.

### Phase 3 - Spectral / metadata enrichment

- Added Sumita K-SK7 to the catalog from refractiveindex.info's Sumita Zemax data, unlocking Sellmeier/polynomial dispersion for the 607595 row.

### Phase 4 - Analysis sync

- Updated the L4 table/prose to use K-SK7 while leaving the remaining unmatched legacy glass codes unresolved.

### Report status

- The SK7/607595 row is cleared, while L1 / 504667, L5 / 561575, L6 / 625533, and L8 / 642581 remain in the six-digit missing-Sellmeier report as unresolved legacy codes.

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | 2026-05-19 audited labels and patent constants | Retained | US 2,721,499 Example 2 was rechecked against the current data file. The previous K-SK7 correction remains valid; the remaining legacy-code rows still lack coefficient-backed exact matches. |

### Phase 2 - Retained-information audit

- Rechecked Example 2 prescription values against the x0.21 stored scale. No radii, spacing, or glass-constant edits were needed.
- Confirmed again that the patent provides no clear apertures or semi-diameters. Stored SDs remain figure- and ray-trace-derived values, as documented in the analysis.
- The known Example 2 paraxial EFL discrepancy remains a patent/table property already documented in the analysis and data comments.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent provides no line-index or partial-dispersion information.
- High-index crown status in the rear meniscus and cemented interface remains documented in the glass labels and analysis prose.

## 2026-08-11 — Phase 92 HOYA PC1 recovery

- Visually rechecked US 2,721,499 Example 1 on rendered PDF page 3: L1 is `1.50380 / 66.7`.
- Added the official legacy HOYA PC1 row (`1.503779 / 66.887120`) and relabeled L1 as its optical equivalent.
- Synchronized the glass table while leaving the historical Zeiss production supplier unspecified. No prescription
  geometry, aperture, or semi-diameter values changed.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked US 2,721,499 and assigned J-LAK10 as a supplier-neutral proxy for L3's `721503` LaK10 class.
- L8's `642581` LaK/SK crown remains unresolved because several supplier families fit the patent coordinate.

## 2026-09-23 — First-added diagram audit, lens 97

Source: local `patents/US2721499.pdf` (4 pages, 300 dpi scans). Page 1: Figs. 1–3 (Fig. 2 = Example 2); page 2:
text, including the per-example checks and the "image angle of about 90°" statement; page 3: the Example 1–3
tables (Example 2 read at 300 and 600 dpi); page 4: claims and references.

### Re-verified and retained

- Example 2 (f/4.5) is the right example for the Contax rangefinder Biogon 21mm f/4.5. The patent names no product
  and prints no assignee, so `patentAssignees: []` and the sole inventor Ludwig Bertele (US 2,721,499, granted
  1955) are correct. `lensMounts: ["contax-rf"]` and `imageFormat: "135-full-frame"` are canonical ids.
- Every other R, d, nD and V row matches the table after the documented uniform ×0.21 scale. Element types match
  the R signs. Unit focus, `nominalFno` 4.5, 8 elements / 5 groups, all-spherical are retained.
- The patent's own checks agree: C–D outer-surface separation 0.92f, cemented radii 0.254f + 0.255f = 0.509f,
  l₃ = 0.047f, V(A) + V(B) = 137.0, and a focal-length quotient A/B of 1.05, inside claim 1's 0.35–3.0 range.
- Glass labels for L1 (PC1 equivalent), L3 (J-LAK10 proxy), L4 (K-SK7), L7 (SF1, Δnd 0.0023, reported as
  compatible) and L8 (642581, several suppliers fit, still unresolved) are retained.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| r₂ (S2 R) | 13.1523 (patent +62.63) | 11.0523 (patent +52.63) | The 600 dpi render reads "52.63". In this typeface 5 and 6 look alike, but only 52.63 closes the design on f = 100 (see EFL row). |
| L5 nD (S8, element 5) | 1.56093 | 1.56993 | The 600 dpi render reads "1.56993", the same L5 glass as Example 3. |
| Paraxial EFL | 90.55 at patent scale / 19.01 stored | 100.06 / 21.01 | Paraxial trace of the corrected table. Examples 1 and 3 trace to 99.94 and 99.95, so the old "9.5 % discrepancy" was a transcription error. |
| `focalLengthDesign`, specs | 19.0; "f ≈ 19.0 mm", "2ω ≈ 91.7°" | 21.0; "f = 21.0 mm", "2ω ≈ 91.4°" | Stored EFL 21.01. The real chief ray reaches Y = 21.6 mm at ω = 45.7°. |
| S13 BF gap (`var` "13") | [6.6544, 7.0648] | [10.3656, 10.8913] | Paraxial BFD 10.3656 (defocus 0). The 0.9 m state is a calculated unit-focus extension of 0.526 mm, giving an object-to-image distance of 899.9 mm and m = −0.025. |
| `projection` | absent (engine half-field 35–37°) | rectilinear, fullFieldDeg 91.4, maxTraceFieldDeg 45.7 | The patent gives "about 90°". The paraxial estimate stops at the steep S2 while the real chief ray clears every rim. |
| `maxFstop` | default 16, although the series lists f/22 | 22 | This is the production minimum aperture already recorded in the analysis, which makes the listed f/22 reachable. |
| S1 / S2 sd | 10.08 / 9.66 | 11.9 / 8.5 | Fig. 2 shows L1 at 11.9 with its rear curve ending at 8.5. The corrected r₂ makes the L1/L2 gap close near 8.9, and 9.66 also exceeded that. |
| S3 sd | 7.98 | 10.5 | Fig. 2: L2 front reaches 10.6 (+32 %). S4 at 7.35 is kept (the figure bevel suggests 7–8). |
| S5 sd | 5.04 | 6.0 | Fig. 2: L3 rim 5.9–6.5 (+19 %). |
| S7 / S8 sd | 3.15 / 2.94 | 4.1 / 4.1 | Fig. 2: flat L4 rear and L5 front rims at 4.1–4.25. The old S8 was below the 2.92 f/4.5 marginal height at the new iris. |
| STO sd | 2.11 (EFL/2N, no pupil magnification) | 2.95 | This is the engine-derived f/4.5 iris. Fig. 2 draws the opening at about 3.2 mm, at mid-l₃, which is where the stop sits. |
| S11 sd | 4.83 | 6.4 | Fig. 2: L7 rim 6.4–6.5 (+32 %). |
| S12 / S13 sd | 6.72 / 7.98 | 7.5 / 11.0 | Both blocked the full-field chief ray (6.78 / 9.31). Fig. 2: L8 rim 11.0 with its front curve ending near 7.7; S12 is held at the 0.90 rim-slope limit sd/R (7.59). |
| Element `fl` | L1 −63.0, L5 −10.2 | −43.3, −10.0 | Thick-lens values after the prescription corrections. |
| L5 / L6 / L2 labels | "BaK/SK crown (561/575)", "SK-type dense crown (625/533)", "FK5 fluorite crown" | "570575 — BaK-type barium crown (no exact catalog match)", "625533 — SSK-type dense crown (no exact catalog match)", "FK5 fluor crown class …" | L5's code follows the corrected index. 625/533 sits by SSK2 rather than SK10. FK is fluor crown, not fluorite. |
| Header, subtitle | "Bertele / Carl Zeiss", old EFL note, SD method | Ludwig Bertele (no assignee printed), corrected scale note, Fig. 2 SD basis | Patent front page. |

The analysis is synced: the §3.1 table rows, EFL/BFD/Petzval (now 3,380 mm at f = 100, previously 691 mm), component
focal lengths (A −206.3, D +110.7), the glass table (L5, L6, L8, L2 wording), the production-identity and scaling
statements (softened because the patent names no product), the SD-method section and the summary.

### Checks on the result

The surface validator reports no errors. Probe gives EFL 21.012, BFD 10.366 and defocus 0.000, with a close state
at 899.9 mm object-to-image. The exact trace at f/4.5 flags nothing: axial marginal heights run up to 3.38 (S5)
against a 6.0 rim, and the full-field chief ray at ω = 45.7° reaches 9.67 / 8.01 / 7.59 / 6.78 / 9.31 at
S1 / S2 / S3 / S12 / S13. It also clears at close focus (ω = 45.1°). The engine builds with EFL 21.01, a 2.95 stop
and a 45.7° half-field. Every label except L5, L6 and L8 resolves to a compatible catalog glass. Those three are
code-form or legacy labels with no catalog match.

The image-circle audit still reports S12 short of its 8.84 mm paraxial exit-pupil proxy. Its note says the proxy is
unreliable for this wide lens. The real chief ray passes S12 at 6.78 < 7.5, and 7.5 already sits at the rim-slope
limit.

Live check (headless render): the page shows EFL 21.01, BF 10.37 → 10.89 at 0.9 m, an f/4.5–f/22 slider and a
Petzval radius of 710 mm. The section now shows large L1/L2 and L8 shells around a compact core, as in Fig. 2.
Off-axis rays were not checked in the headless view.

### Open limitations

- The L5 (570575), L6 (625533) and L8 (642581) glasses have no catalog Sellmeier match. L7's SF1 label is 0.0023
  low in nD.
- The production MFD (0.9 m, some sources 1.0 m) and the other production specs come from secondary sources, not
  the patent.
- The rims are figure measurements, and the drawn L8 is about 10 % asymmetric about the axis. The engine draws the
  stepped L1/L2/L8 rims as slanted edges, not as the flat steps in the figure.
- The 2026-08-11 entry above says "Example 1 on rendered PDF page 3". The L1 value it quotes is the same in
  Examples 1 and 2.
