# Audit Log — Nikon NIKKOR Z 14-24mm f/2.8 S

Patent: WO 2021/117563 A1, Example 4 (Table 4)
Catalog version: ab3a508

---

## 2026-05-11 — Patent audit and glass-label cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S3 | `glass` | `S-LAM51 (OHARA)` | `S-LAM60 (OHARA)` | Patent Table 4 row 3 gives nd=1.743104, νd=49.4. S-LAM60 catalog nd=1.743198, νd=49.34; S-LAM51 resolves to nd≈1.700. |
| L14 / S7 | `glass` | `S-TIH14 (OHARA)` | `738323 — dense flint (patent nd=1.73800, νd=32.3)` | Patent Table 4 row 7 gives nd=1.737999, νd=32.3. S-TIH14 resolves to nd≈1.76182, outside tolerance; no current catalog entry round-trips the patent pair. |
| L21 / S9 | `glass` | `S-NPH2 (OHARA) — ultra-high-index dense flint` | `TAFD40 (HOYA) — ultra-high-index dense flint` | Patent Table 4 row 9 gives nd=2.000600, νd=25.4. TAFD40 catalog nd=2.00069, νd=25.46; S-NPH2 resolves to nd≈1.92286. |
| L22 / S10 | `glass` | `S-TIM27 (OHARA)` | `S-TIM22 (OHARA)` | Patent Table 4 row 10 gives nd=1.647690, νd=33.7. S-TIM22 catalog nd=1.64769, νd=33.79; S-TIM27 resolves to nd≈1.63980. |
| L31 / S12 | `glass` | `Dense flint (nd = 1.850, uncertain catalog match)` | `850270 — dense flint (patent nd=1.85000, νd=27.0)` | Patent Table 4 row 12 gives nd=1.850000, νd=27.0. Existing label was intentionally uncertain but had no future-upgrade code; no confident catalog match was retained. |
| L32 / S13 | `glass` | `Near S-FPM3 (OHARA) — fluorophosphate crown` | `S-FPM2 (OHARA) — fluorophosphate crown` | Patent Table 4 row 13 gives nd=1.593490, νd=67.0. Current S-FPM3 resolves to nd≈1.53775; S-FPM2 is the closest OHARA fluorophosphate candidate in tolerance. |
| L33 / S16 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent Table 4 row 16 gives nd=1.953750, νd=32.3. S-LAH98 catalog nd=1.95375, νd=32.32; S-LAH79 resolves to nd≈2.00330. |
| L40 / S27A | `glass` | `Probable S-LAH97 (OHARA)` | `S-LAH89 (OHARA)` | Patent Table 4 row 27 gives nd=1.851080, νd=40.1. S-LAH89 is the nearest current LAH catalog match; S-LAH97 resolves to nd≈1.755. |

Confirmed without data-file changes:

| Element / surface | Glass annotation | Patent value | Status |
|---|---|---|---|
| L11 / S1 | `S-BAL35 / L-BAL35 (OHARA)` | nd=1.588870, νd=61.1 | Retained; close catalog match and no mismatch report entry. |
| L13 / S5, L35 / S19, L37 / S22, L38 / S24 | `S-FPL51 (OHARA) — ED fluorophosphate` | nd=1.497820, νd=82.6 | Retained; data file was already corrected to S-FPL51-class. Analysis prose still said S-FPL52 and was fixed in Phase 4. |
| L34 / S17 | `S-TIH53 (OHARA)` | nd=1.846660, νd=23.7 | Retained; catalog nd round-trips. |
| L36 / S21, L39 / S25 | `S-LAH55 (OHARA)` | nd=1.834810, νd=42.7 | Retained; catalog nd round-trips. |

### Phase 2 — Retained-information audit

- Patent Table 4 lens rows 1-28 (WO publication pages 39-40 in the supplied PDF) confirm all retained surface `R`, wide-end/infinity `d`, `nd`, and `vd` values in the data file. Surface 15 is the aperture stop, and surface 28 carries Bf.
- Variable spacings D8, D11, and Bf match the patent's infinity and close-focus tables on pages 40-41. The data file stores the infinity/close pairs and uses the wide/infinity values for surface `d`.
- Aspherical coefficients for surfaces 1, 2, 4, and 27 match the patent asphere table on page 40. The existing κ-to-K conversion remains correct: κ=1 -> K=0, κ=0 -> K=-1.
- Group focal lengths from the patent group table are G1=-21.401, G2=105.275, G3=39.261. Existing rounded group labels remain correct.
- The patent does not publish semi-diameters. Existing `sd` values remain documented rendering estimates from the file header and analysis methodology.

### Phase 3 — Spectral / metadata enrichment

- Example 4 publishes only nd and νd for the prescription; it does not provide nC, nF, ng, PgF, or dPgF line-index data. No patent-sourced spectral fields were added.
- Existing top-level metadata was already present and confirmed: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `lensMounts`, `imageFormat`, and `focusDescription`.
- No lens-mount, format, zoom-position, or focus metadata changes were needed.

### Phase 4 — Analysis sync

- Updated `NikonZ1424f28S.analysis.md` element narratives and glass budget for L12, L14, L21, L22, L31, L32, L33, and L40.
- Replaced stale S-FPL52 wording with S-FPL51-class wording for L13, L35, L37, and L38.
- Softened the L13 anomalous-dispersion claim: the patent table supports ED-class glass there by nd/νd and the production four-ED-element spec, while the patent's rear-group "specific lens" condition is what explicitly covers the rear ED elements.

### Verification

- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed in `/tmp/lv-audit-run.5rqKAY` against a temporary copy of the workspace, so report-generating tests did not rewrite generated docs in the real checkout.
- Temporary generated `catalog-mismatches.generated.md` and `glass-relabel-candidates.generated.md` no longer list `NikonZ1424f28S`.
- Temporary `unresolved-glass.generated.md` lists the intended patent-code fallbacks `738323` and `850270`.

### Outstanding follow-ups

- Consider adding catalog entries only if public Sellmeier sources are found for patent codes 738323 and 850270. Until then those labels intentionally fall back to Abbe approximation using the patent's stored nd/νd.
