# Audit Log - Sigma 24mm F1.4 DG DN | Art

Patent: JP 2023-074094 A, Example 1 (`patents/JP2023074094A.pdf`)

## 2026-06-06 - APD flag correction

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1, L3-L10, L12-L13, L15-L17 | `apd` / `apdNote` | `apd: "patent"` and a patent deviation note on every element | APD fields removed; patent `dPgF` values retained | Example 1 publishes signed g-F partial-dispersion deviations for every glass, but that does not make every substrate an APD special element. APD highlighting is limited to the special-dispersion glasses supported by Sigma's production census and the patent's chromatic strategy. |
| L2, L14 | `apdNote` | Generic patent `ΔθgF` note | FLD-class fluorophosphate note with patent `ΔθgF` | These are the two FLD-class fluorophosphate elements matching Sigma's published special-element count. |
| L11 | `apdNote` | Generic patent `ΔθgF` note | SLD-class ED crown note with patent `ΔθgF` | This is the single SLD-class ED crown element matching Sigma's published special-element count. |

### Phase 2 - Retained-information audit

- Rechecked Example 1 surface table, focus-spacing table, and asphere table in the local patent PDF.
- No radius, spacing, index, Abbe number, focus variable, aspheric coefficient, or semi-diameter changes were made in this pass.

### Phase 3 - Spectral / metadata enrichment

- Retained the patent-published signed partial-dispersion-deviation values as per-element `dPgF` fields for chromatic tracing.
- No `nC`, `nF`, or `ng` line-index data were found in the patent text.

### Phase 4 - Analysis sync

- Updated the analysis to clarify that the patent deviation column is retained for all glasses, but APD designation/highlighting applies only to L2, L11, and L14.
- Removed repeated ordinary-glass `ΔθgF` callouts from the element-by-element first lines so the special FLD/SLD elements stand out.

## 2026-09-25 - MTF image-plane census: source contradiction

Reopened local `patents/JP2023074094A.pdf`, Example 1, PDF pages 14-16,
paragraphs 0085-0101 and the surface/asphere/variable-spacing tables.
No scaling; INF column d10 = 3.7171, d12 = 8.1632, BF = 23.0355 mm.

- Checked every S1-S32 radius, thickness, index and all 17 vd/dispersion
  entries. They match the source.
- Checked K and every A4-A16 coefficient on S1, S2, S9, S10, S15, S16,
  S31 and S32, including zeros. They match; no omitted nonzero odd terms.
- S32 is followed directly by the source image row. No plate radii,
  thickness, index, or trailing gap is supplied; the queue's suggested
  omitted plate is not supported by this patent.
- Independent ABCD propagation gives EFL 24.003700 mm versus stated
  23.86 mm, and BFL 21.987349 mm versus BF 23.0355 mm. Axial spacings
  total 116.762 mm versus the stated 113.95 mm lens length. No single
  supported transcription correction explains the contradictions.

Retain every published prescription value and BF. Offset before/after:
-1.048151 -> -1.048151 mm. Added explicit source limitations to the header
and analysis. Section E row deleted; remaining in the numerical census is
expected. Existing source dispersion and qualified glass labels are unchanged.
No user-visible data correction, so no changelog entry.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: `ΔθgF = θgF − (0.648285 − 0.00180123 × VD)`, printed in claim 1 (PDF page 2), ¶0009 (PDF page 4)
  and ¶0026 (PDF page 8). The patent's line is `0.648285 − 0.00180123 × νd`, not the engine's
  `0.6438 − 0.001682 × νd`; the two differ by `0.004485 − 0.00011923 × νd`.
- Numerical Example 1 (PDF pages 14-15, read on the page image and against the text layer) prints one value per glass
  in a column headed `θgF`. ¶0085 (PDF page 13) describes that column as the g-F partial dispersion ratio, but the
  printed numbers (−0.007316 to +0.056526) are the patent's deviation `ΔθgF`, not an absolute ratio. The condition
  table (PDF page 32) confirms it: the Example 1 means of the printed column reproduce (1) 0.042 (L11, L14),
  (3) 0.004 (L15), (11) 0.017 (L1, L2, L4), (12) −0.002 (L8, L9), (13) 0.004 (L12, L13) and (14) −0.005 (L16, L17).
  The patent prints no absolute `θgF` and no `nC`/`nF`/`ng`.
- All 17 stored `dPgF` values were the printed patent deviations copied directly. Each is now the recovered
  `θgF = ΔθgF + 0.648285 − 0.00180123 × νd` minus the engine line `0.6438 − 0.001682 × νd`, at the element's stored
  `νd`, to six decimals.

| Element | νd | Source figure (patent `ΔθgF`, Example 1 `θgF` column) | Recovered `θgF` | Stored before | Stored after |
|---|---:|---|---:|---:|---:|
| L1 | 59.38 | +0.000922 (surface 1, PDF page 14) | 0.542250 | 0.000922 | -0.001673 |
| L2 | 95.10 | +0.056526 (surface 3, PDF page 14) | 0.533514 | 0.056526 | 0.049672 |
| L3 | 25.46 | +0.011062 (surface 5, PDF page 14) | 0.613488 | 0.011062 | 0.012511 |
| L4 | 44.27 | −0.005289 (surface 7, PDF page 14) | 0.563256 | -0.005289 | -0.006082 |
| L5 | 40.50 | −0.003978 (surface 9, PDF page 14) | 0.571357 | -0.003978 | -0.004322 |
| L6 | 67.00 | +0.008940 (surface 11, PDF page 14) | 0.536543 | 0.00894 | 0.005437 |
| L7 | 29.74 | +0.000271 (surface 13, PDF page 15) | 0.594987 | 0.000271 | 0.00121 |
| L8 | 49.50 | −0.007316 (surface 15, PDF page 15) | 0.551808 | -0.007316 | -0.008733 |
| L9 | 29.13 | +0.003566 (surface 17, PDF page 15) | 0.599381 | 0.003566 | 0.004578 |
| L10 | 44.27 | −0.005289 (surface 18, PDF page 15) | 0.563256 | -0.005289 | -0.006082 |
| L11 | 75.50 | +0.027580 (surface 21, PDF page 15) | 0.539872 | 0.02758 | 0.023063 |
| L12 | 25.15 | +0.007183 (surface 22, PDF page 15) | 0.610167 | 0.007183 | 0.008669 |
| L13 | 29.74 | +0.000271 (surface 24, PDF page 15) | 0.594987 | 0.000271 | 0.00121 |
| L14 | 95.10 | +0.056526 (surface 25, PDF page 15) | 0.533514 | 0.056526 | 0.049672 |
| L15 | 29.13 | +0.003566 (surface 27, PDF page 15) | 0.599381 | 0.003566 | 0.004578 |
| L16 | 44.27 | −0.005289 (surface 29, PDF page 15) | 0.563256 | -0.005289 | -0.006082 |
| L17 | 40.73 | −0.005657 (surface 31, PDF page 15) | 0.569264 | -0.005657 | -0.006028 |

- L7 and L13 are stored as `0.00121` (= +0.001210; the formatter drops the trailing zero).
- The recovered `θgF` values agree with the catalog curves of the labelled glass classes to about 0.0001 (FCD100
  0.5336, FCD705 0.5400, TAFD40 0.6136, S-NBM51 0.5634, M-LAF81 0.5715, PCD51 0.5366, NBFD29 0.5951, M-TAF105 0.5519,
  NBFD25 0.6103, M-NBFD130 0.5694), the L9/L15 label to 0.0003 (S-LAH99 0.5997) and the L1 label to 0.0012 (S-BAL42
  0.5434). The catalog is a cross-check only; every stored value comes from the patent's printed deviation.
- L2, L11 and L14 `apdNote` now quote the patent `ΔθgF`, the patent's line, the recovered `θgF` and the runtime value.
  The header note in the data file names both lines. The analysis keeps the patent's `ΔθgF` in the glass table, the
  three special-element lines and the conditional expressions, labelled as the patent's, and now states separately
  what the file stores.
- Left: nothing. Every element carries `dPgF` and all 17 moved (smallest shift 0.000344 at L5, above the 0.0003
  keep-as-is threshold). No element authors `nC`/`nF`/`ng` and none uses `indexReference: "e"`. No `nd`, `νd`, glass
  label, `apd` tag or surface changed, and no `apdNote` was added to an element that had none.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.25 → 0.182 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to -27.2 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: 0.25 m is the old (production) value. The printed close state does state its distance:
  d0 = 136.5 mm from the first surface in the column headed 249 mm ([可変間隔データ]). (Corrected 2026-11-03 by the
  image-plane entry below; this line first said the state printed no distance.)
- `catalog.closeFocusM.marketing` 0.25 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: local `patents/JP2023074094A.pdf` (text layer), Example 1 surface table, [各種データ] and [可変間隔データ]
(INF and 249mm columns: d0 ∞ / 136.5000, d10 3.7171 / 9.2968, d12 8.1632 / 2.5835, BF 23.0355 / 23.0355). Every cell
still matches the file. LENS_DATA_SPEC § Image-Plane Consistency: an inconsistency no single value isolates, so the air
gaps are re-solved, back focus first.

| Field | Before | After | Justification |
|---|---|---|---|
| S32A `d` (BF) | 23.0355 | 21.987349 | Paraxial focus at infinity; the plane sat 1.048151 mm behind it (418 depths at F1.46) |
| `gaps["10A"]` near row | 9.2968 | 7.682694 | G2 alone re-solved to focus the printed d0 = 136.5 mm (first surface) after the BF change |
| `gaps["12"]` near row | 2.5835 | 4.197606 | Same move, opposite sign; d10 + d12 stays 11.8803 |
| `focus.closeFocusM` | 0.182 | 0.2522 | Object-to-image distance of the re-solved near row |
| `source.errata` | none | one `unresolved` entry | f, track and G2-travel contradiction, which the re-solve does not explain |

- Residual: infinity −1.048151 → 0 mm; near row now focuses 136.50 mm from the first vertex (was 65.32 mm with the
  printed values, and 86.6 mm with only the BF re-solved).
- Travel: G2 5.5797 → 3.965594 mm. EFL unchanged at 24.0037 mm (printed 23.86). Track 116.762 → 115.714 mm (printed
  lens length 113.95).
- Close focus: 0.182 → 0.2522 m; `catalog.closeFocusM.marketing` 0.25 m stays (within 1 %, so the readout no longer
  names it).
- Evidence for the class: no one- or two-thickness change reproduces f, BF and lens length together (scan of every d);
  Example 2 of the same patent also misses its own summary (traced f 27.28 vs 27.50 mm, BFD 22.85 vs BF 21.7787 mm,
  track 110.69 vs 113.50 mm). The real-ray axial best focus (−1.035 mm) sat at paraxial focus, so the printed BF was not a
  best-focus plane.
- The 2026-11-03 relabel line that said the close state printed no distance is corrected above.

Follow-ups:

- The unresolved f / track / travel contradiction is for Section G of `agent_docs/sd-audit-queue.md` (coordinator).
