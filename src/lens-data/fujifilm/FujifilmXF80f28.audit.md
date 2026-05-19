# Audit Log — Fujifilm XF 80mm f/2.8 R LM OIS WR Macro

Patent: US 2018/0246292 A1 — Example 1

## 2026-05-11 — Patent glass relabel + prescription verification

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1c / surface 5 | `glass` | `S-TIM35 (OHARA dense flint)` | `626357 — dense flint (patent nd=1.62588, νd=35.70; no exact catalog match)` | Patent Table 1 gives nd=1.62588, νd=35.70; current S-TIM35 catalog entry resolves to nd=1.69895, so the named label was a false resolver hit. |
| L1d / surface 7A | `glass` | `S-BAL41 (OHARA barium crown)` | `583595 — S-BAL41 (OHARA barium crown)` | Patent Table 1 gives nd=1.58313, νd=59.46. S-BAL41 is not currently in the Sellmeier catalog, so the six-digit code preserves a future upgrade path. |
| L2a / surface 9 | `glass` | `S-BSM2 (OHARA barium crown)` | `S-BAL35 (OHARA barium crown)` | Patent Table 1 gives nd=1.58913, νd=61.13; current catalog S-BAL35 round-trips this pair. |
| L2b / surface 11 | `glass` | `Barium flint (nearest: HOYA NBFD3; no exact OHARA match)` | `673382 — barium flint (patent nd=1.67300, νd=38.15; no exact catalog match)` | Patent Table 1 gives nd=1.67300, νd=38.15. No exact catalog entry is present; removed the unsupported NBFD3 nearest-match claim. |
| L2c / surface 12 | `glass` | `S-NPH5 (OHARA ultra-high-index dense flint, nd > 2.0)` | `TAFD40 (Hoya ultra-high-index dense flint)` | Patent Table 1 gives nd=2.00069, νd=25.46; current catalog TAFD40 round-trips this pair, while S-NPH5 resolves to nd=1.85896. |
| L3c / surface 18 | `glass` | `S-NPH4 (OHARA high-index dense flint)` | `S-TIH53 (OHARA dense flint)` | Patent Table 1 gives nd=1.84666, νd=23.78; current catalog S-TIH53 round-trips this pair, while S-NPH4 resolves to nd=1.89286. |
| L4aa / surface 20 | `glass` | `S-NPH7 (OHARA ultra-high-index dense flint, nd > 2.0)` | `003193 — ultra-high-index dense flint (patent nd=2.00272, νd=19.32; no exact catalog match)` | Patent Table 1 gives nd=2.00272, νd=19.32. S-NPH7 is intentionally not catalog-resolved for this nd region, so the code label avoids a future false match. |
| L4ab / surface 21 | `glass` | `S-LAM66 (OHARA lanthanum crown)` | `697485 — lanthanum crown (patent nd=1.69700, νd=48.52; no exact catalog match)` | Patent Table 1 gives nd=1.69700, νd=48.52; current S-LAM66 catalog entry resolves to nd=1.80100. |
| L4ac / surface 23 | `glass` | `S-FPM2 (OHARA fluorophosphate)` | `S-FPM3 (OHARA fluorophosphate)` | Patent Table 1 gives nd=1.53775, νd=74.70; current catalog S-FPM3 round-trips this pair, while S-FPM2 resolves to nd=1.59522. |
| L4ba / surface 25 | `glass` | `S-LAH79 (OHARA ultra-high-index lanthanum)` | `S-LAH98 (OHARA ultra-high-index lanthanum)` | Patent Table 1 gives nd=1.95375, νd=32.32; current catalog S-LAH98 round-trips this pair, while S-LAH79 resolves to nd=2.00330. |
| L4bc / surface 28 | `glass` | `S-NPH53 (OHARA ultra-high-index dense flint, lowest νd in design)` | `S-NPH3 (OHARA ultra-high-index dense flint, lowest νd in design)` | Patent Table 1 gives nd=1.95906, νd=17.47; current catalog S-NPH3 round-trips this pair, while S-NPH53 resolves to nd=1.84666. |

### Phase 2 — Retained-information audit

- Patent ¶0076-¶0078 confirm Example 1's four-group P-N-P-N layout, G4a/G4b OIS split, 16 elements, and floating G2/G3 focus motion.
- Patent Table 1 rechecked against all stored `R`, infinity `d`, `nd`, and element ordering. No radius, spacing, index, cemented-junction, or stop edits were needed.
- Patent Table 3 rechecked against `var`: DD[8]=2.34/17.69, DD[13]=20.39/5.04, DD[14]=19.53/3.58, DD[19]=6.50/22.45.
- Patent Table 4 rechecked against `asph["7A"]` and `asph["8A"]`; KA=1 is represented as `K: 0` in the data file, and coefficients A4-A20 match the patent.
- Patent Table 1 includes a rear parallel plate after the image-side air distance. It remains excluded per `LENS_DATA_SPEC.md` sensor-glass/filter guidance.
- Patent does not list semi-diameters; existing estimated `sd` values were retained.

### Phase 3 — Spectral / metadata enrichment

- No patent-published line indices or partial-dispersion deviations were available to add.
- Relabels to S-BAL35, TAFD40, S-TIH53, S-FPM3, S-LAH98, and S-NPH3 upgrade those elements to catalog Sellmeier dispersion.
- Code-only labels 626357, 583595, 673382, 003193, and 697485 intentionally fall through to Abbe until matching catalog entries are added.
- Existing metadata already covered subtitle, patent year, design focal length/aperture, element/group counts, mount/format, and focus description.

### Phase 4 — Analysis sync

- Updated `FujifilmXF80f28.analysis.md` element narratives, glass-selection table, chromatic-pair bullets, and summary to match the audited labels.
- Removed the unsupported HOYA NBFD3 nearest-match claim for L2b.
- Updated the inferred third ED element from S-FPM2 to S-FPM3.

### Verification

- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed, 120 test files / 1566 tests.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` — passed; regenerated output removed `FujifilmXF80f28` from both generated reports.
- Generated report files were restored afterward to keep the working tree scoped to this lens.

### Outstanding follow-ups

- `agent_docs/glass-relabel-followup.md` still contains the global S-FPM2/XF80 queue row. It was not edited because this audit was requested to avoid non-lens files.

## 2026-05-19 - Missing-Sellmeier queue follow-up

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2b / surface 11 | `glass` | `673382 - barium flint (patent nd=1.67300, vd=38.15; no exact catalog match)` | `S-NBH52 (OHARA)` | Patent Table 1 gives nd=1.67300 and vd=38.15. OHARA S-NBH52 is an existing coefficient-backed catalog entry; this pass added its 673382 code alias and upgraded the label. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20180246292A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Reconfirmed Example 1 / Table 1 surface 11 for L2b: nd=1.67300, vd=38.15.
- No radius, spacing, focus, OIS group, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Added `code6: "673382"` to existing OHARA S-NBH52.
- This supersedes the earlier same-day unresolved disposition for L2b.

### Phase 4 - Analysis sync

- Updated the L2b narrative and glass table to identify OHARA S-NBH52.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.
