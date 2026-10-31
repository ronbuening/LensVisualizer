# Audit Log - Sigma 23mm F1.4 DC DN | Contemporary

Patent: JP 2024-035865 A, Numerical Example 1

## 2026-06-23 - Semi-diameter raw-geometry audit

### SD corrections

| Surface | Before | After | Justification                                                                                         |
| ------- | -----: | ----: | ----------------------------------------------------------------------------------------------------- |
| S14     |   15.8 | 15.55 | Raw extended edge check showed L8 S14/S15 self-crossing by 0.129 mm at the larger authored endpoint.  |
| S22     |   15.2 |  13.6 | Raw extended edge check showed L12 S21/S22 self-crossing by 2.239 mm at the larger authored endpoint. |

### Notes

- JP 2024-035865 A Example 1 does not publish a clear-aperture / effective-radius table.
- Edits reduce only the offending larger endpoints and keep the inferred SD progression otherwise unchanged.
- Temporary Sigma SD audit after the edits reported 0/27 Sigma files with raw SD/render issues.

## 2026-10-30 — Complete original shape and glass review

- Original `patents/JP2024035865A.pdf`, SHA-256 `6a5daf5e458039855d4b5ba4fc48f79b70a8cc7e5ab6ccb429d7453db67c2045`. First page confirms JP 2024-035865 A, Sigma/Murakami and March 15, 2024. Preserve actual June 23 raw-geometry history above; this is the first completed original shape-and-glass entry, not reused whole-lens coverage.
- Numerical Example 1/数値実施例1, paragraph 0062 PDF/printed 9–10: directly checked all 24 rows, 13 nd/νd pairs, three K/A4–A12 sets, L13 PgF 0.6546 and both focus stations. Paragraph 0047 pages 7–8 explicitly d587.56/g435.84/F486.13 nm; paragraphs 0029–0030 page 6 explicitly identify L1p anomalous dispersion and the source normal. No other partial, individual line index, filter, plate or hybrid layer is printed.
- Native Figure 1 page 16 is 2677×1661 one-bit, 825 ppi; longitudinal Figures 2/3 are 1800×2325 at 545 ppi. Native axis 953±2, first vertex 346/image line 2562 gives 23.50 px/mm over 94.3219 mm. Practical semi-height uncertainty ±0.25 mm; weak S16 cap/shoulder ±0.5 mm. Leaders, source focus arrow, STO/IP and brackets excluded. All 13 elements, concave ends, three cemented interfaces and all aspheres inspected. A 600 dpi page render is not native evidence.
- Replace former envelope-derived caps with measured source outlines: 22 clear-cap changes, five outer shoulders S2/S4/S7/S16/S19=17.4/14.1/14.8/14.3/10.9 mm. Clear caps remain distinct from outer strokes. Detailed old/new rows and source reconstruction table are in `/tmp/canon-c/sigma23-protected-check.json` and analysis. S16 clear 12.5 retained with weaker inner-edge uncertainty; only its resolved outer 14.3 added. No cuts, opaque bonded-interface lands, detached wings or unsupported equal-height blocks.
- Retain shared clear interfaces S8=14.8,S15=14.3,S21=11.2. The unused outer step around L31/S21 is not modeled as an opaque bonded land, so no exact fabricated-blank claim. All source R/d, aspheres, media, STO and focus/aperture controls protected; no numeric prescription correction or guard relaxation.
- Reject optical S2 full 17.4 trial: 90° rim slope versus unchanged 64.2° guard (R16.8636); adopt clear 13.7/outer 17.4 instead. S7 clear 11.6 also validates within uncertainty; adopted 11.7 follows the resolved knee. Treating S7 whole 14.8 blank as optical cap is rejected against native straight outer ink. June 23 geometry constraints retained as history, with current measured caps superseding old envelope estimates.
- All 13 existing compatible curve identities remain unchanged and are now labeled qualified proxies. No supplier/chemistry/melt/molding/annealing claim. 13 printed source pairs unchanged; no catalog-derived per-lens spectral override removed or added. Retain one genuinely published L13 partial and explicit patent APD: source PgF 0.6546,νd17.98; source normal yields 0.038634 (printed 0.0386), engine normal yields 0.04104236, existing stored 0.041042 retained within source rounding. No APD badge for other 12 media.
- Printed metadata design 22.31 replaces computed 22.3102623; actual computed EFL remains separate. Source focus d0=155 mm and label 0.25 m remain distinct. No iris diameter/schedule is printed, so current derived fixed iris/control authority is unchanged.
- Standard surface/image-circle pass; aperture one infinity station within unchanged 3% paraxial convention; field chief coverage ≥99%. All 65 focus ×8 presets, 520/520 exact working calls trace before/after. Exact working 1.543121958/1.675954722 versus source 1.46/1.59 is +5.693285%/+5.405957%, not a 3% real-working pass. No stop retune from a convention difference.
- Collimated control grid: 65 states ×4 fields ×193 pupils, every axis 193/193. Current full-format infinity/near 107/141 of 193 pass. This domain is not actual finite-object illumination. Infinity source 33.925° bounding-vector chief clears 24 surfaces to |Y|14.200595 mm; near printed angle is not reused as an infinity launch.
- Actual Gaussian finite grid: 64 positive controls ×3 actual image-height targets, all 192 chiefs clear and all 64 axes 193/193. Final pupil totals noted below; retained marginal no-bracket outcomes are not proof no physical ray exists and are not hidden by rim inflation. Independently launch published d0=155 mm at focus 1: 3/3 chiefs clear; axis/half/full 193/179/136 of 193, 71 clips, 0 failed/unaimed.
- Gaussian near object 155.037715 mm/total 249.359715 mm, magnification −.138397169; source d0 is 155 mm and display total 250 mm. Infinity residual +0.000665084 mm, display-near −0.012215792 mm; maximum sampled interpolation −0.357315943 mm at focus .5625 (Gaussian 371.984340/display 444.444444 mm). Relative distance-label discrepancy up to 35.537688%. Source gaps/controls retained rather than cam fitting.
- Actual SVGs at infinity/mid/near compared with native Figure 1. All 65 states/845 paths finite, closed, connected; zero hidden trim. Smaller source-supported caps retain off-axis vignetting. Full pupil survival, chief clearance, drawing fidelity and production correlation remain separate. Scratch evidence is not staged; coordinator owns shared reports/full gates.

Final finite-grid census after adopted caps: 31374 passed, 5680 clipped, 2 failed no-bracket continuations, 0 unaimed. The two failures occur at focus 0.984375/full actual image-height field at the first surface; the source-near endpoint itself has no failed continuation.
