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
