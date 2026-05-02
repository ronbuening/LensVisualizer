# Audit Log — Nikon NIKKOR Z 24-200mm f/4-6.3 VR

Patent: JPWO2020/157904 A1, Example 1 (Table 1)
Catalog version: local working tree, 2026-05-02

## 2026-05-02 — Patent audit and glass relabel cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S7 | `glass` | `S-LAH79 (195375/3233)` | `954323 — ultra-high-index lanthanum (S-LAH98 / TAFD45 family)` | Patent Table 1 lists nd=1.953750, vd=32.33. The old label resolved to catalog S-LAH79 (nd=2.00330), so the code-based family label prevents a false Sellmeier match. |
| L31 / S16 | `glass` | `TAFD30 equiv. (190265/3572)` | `903357 — high-index lanthanum flint (patent nd=1.90265, νd=35.72)` | Patent Table 1 lists nd=1.902650, vd=35.72. The old label resolved to catalog TAFD30 (nd=1.88300), not the stored patent glass. |
| L32 / S18 | `glass` | `S-NPH53 (200100/2912)` | `001291 — ultra-high-index dense flint (patent nd=2.00100, νd=29.12)` | Patent Table 1 lists nd=2.001000, vd=29.12. The old label resolved to catalog S-NPH53 (nd=1.84666), not the patent value. |
| L34 / S21 | `glass` | `S-LAH79 (195375/3233)` | `954323 — ultra-high-index lanthanum (S-LAH98 / TAFD45 family)` | Same patent constants as L21 (nd=1.953750, vd=32.33); relabeled to avoid the false S-LAH79 catalog match. |
| L43 / S26 | `glass` | `S-LAH79 (195375/3233)` | `954323 — ultra-high-index lanthanum (S-LAH98 / TAFD45 family)` | Same patent constants as L21 (nd=1.953750, vd=32.33); relabeled to avoid the false S-LAH79 catalog match. |
| L44 / S27 | `glass` | `S-FPL51 (149710/8149)` | `S-FPL51 (OHARA)` | Patent Table 1 lists nd=1.497100, vd=81.49, which round-trips acceptably against catalog S-FPL51. The canonical name preserves Sellmeier resolution. |
| L51 / S29 | `glass` | `TAFD37 equiv. (184666/2380)` | `S-TIH53 (OHARA)` | Patent Table 1 lists nd=1.846660, vd=23.80. Catalog S-TIH53 matches within tolerance; the old TAFD37 label resolved to nd=1.90043. |
| L52 / S30 | `glass` | `TAFD33 equiv. (185135/4013)` | `851401 — dense lanthanum flint (near S-LAH89; patent nd=1.85135, νd=40.13)` | Patent Table 1 lists nd=1.851350, vd=40.13. The old label resolved to catalog TAFD33 (nd=1.88100), so the code-based label keeps Abbe fallback honest. |
| L62 / S34 | `glass` | `S-TIM22 equiv. (168376/3757)` | `684376 — titanium flint (patent nd=1.68376, νd=37.57)` | Patent Table 1 lists nd=1.683760, vd=37.57. The old label resolved to catalog S-TIM22 (nd=1.64769), not the patent glass. |

### Phase 2 — Retained-information audit

- Patent Table 1 lens prescription rows 1-35 match the stored `R`, `d`, `nd`, and `vd` values at infinity wide position, including stop surface S15 and image-side BF row S35.
- Patent Table 1 variable-spacing data matches all stored `var` entries for W, M1, M2, and T at infinity and close focus: D1, D2, D3, D4, D5, and BF.
- Patent Table 1 aspherical data for S28, S31, and S33 matches the stored coefficients. The patent uses κ=1.0000, so the data file's `K: 0` convention is correct.
- Patent paragraphs 0088-0091 confirm G4/G5/G6 construction, G5 image-side focus motion, and the L32+L33 VR sub-group.
- Semi-diameters remain estimated because the patent does not publish clear apertures.

### Phase 3 — Spectral / metadata enrichment

- Kept existing `dPgF: 0.028` on L44. The patent table provides only nd/vd; this APD value is a catalog-family enrichment from S-FPL51 rather than a patent-listed value.
- No new patent spectral line data was available in JPWO2020/157904 A1 Table 1.
- Existing metadata already included patent year, design focal lengths, design apertures, element/group counts, maker, and focus description.

### Phase 4 — Analysis sync

- Updated the element narrative for L21, L31, L32, L34, L43, L44, L51, L52, and L62 to match the corrected labels.
- Replaced summary references to S-LAH79, S-NPH53, TAFD33, TAFD37, and S-TIM22 where those names were no longer supported by the audited data file.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` — passed; this lens no longer appears in either generated report.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed (116 files, 1507 tests; expected error-boundary console errors emitted by tests).
