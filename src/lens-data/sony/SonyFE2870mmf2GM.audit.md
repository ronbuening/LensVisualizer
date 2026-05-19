# Audit Log — Sony FE 28-70mm F2 GM

Patent: WO 2025/263124 A1, Example 1

## 2026-05-19 — Patent prescription audit + glass resolver cleanup

### Phase 1 — Glass corrections

The patent prescription table [Table 1], PDF page 24, publishes refractive index and Abbe number but does not name vendor glass types. Ten prior OHARA annotations resolved to catalog entries whose catalog `nd` values disagreed with the patent. Those labels were replaced with six-digit nd/vd code labels so the resolver falls back to the patent values instead of using incorrect Sellmeier data.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / 2 | `glass` | `S-FPM3 (OHARA)` | `595686 — fluorophosphate crown (patent nd=1.59489, νd=68.6)` | Patent Table 1 row 2 gives nd=1.59489, vd=68.6; project S-FPM3 resolves to nd=1.53775. |
| L21 / 6 | `glass` | `S-LAH55 (OHARA)` | `774494 — lanthanum crown (patent nd=1.77373, νd=49.4)` | Patent Table 1 row 6 gives nd=1.77373, vd=49.4; project S-LAH55 resolves to nd=1.83481. |
| L22 / 8 | `glass` | `S-TIH14 (OHARA)` | `777297 — dense flint (patent nd=1.77660, νd=29.7)` | Patent Table 1 row 8 gives nd=1.77660, vd=29.7; project S-TIH14 resolves to nd=1.76182. |
| L23 / 9 | `glass` | `S-NPH4 (OHARA)` | `930240 — ultra-high-index dense flint (patent nd=1.93024, νd=24.0)` | Patent Table 1 row 9 gives nd=1.93024, vd=24.0; project S-NPH4 resolves to nd=1.89286. |
| L24 / 11 | `glass` | `S-BSM14 (OHARA)` | `700555 — barium crown (patent nd=1.69980, νd=55.5)` | Patent Table 1 row 11 gives nd=1.69980, vd=55.5; project S-BSM14 resolves to nd=1.60311. |
| L31 / 14 | `glass` | `S-LAH98 (OHARA)` | `856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)` | Patent Table 1 row 14 gives nd=1.85612, vd=40.1; project S-LAH98 resolves to nd=1.95375. |
| L33 / 17 | `glass` | `S-BAL35 (OHARA)` | `571560 — barium crown (patent nd=1.57125, νd=56.0)` | Patent Table 1 row 17 gives nd=1.57125, vd=56.0; project S-BAL35 resolves to nd=1.58913. |
| L44 / 23 | `glass` | `S-TIH23 (OHARA)` | `863252 — dense flint (patent nd=1.86252, νd=25.2)` | Patent Table 1 row 23 gives nd=1.86252, vd=25.2; project S-TIH23 resolves to nd=1.78470. |
| L45 / 25 | `glass` | `S-LAH98 (OHARA)` | `856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)` | Patent Table 1 row 25 repeats nd=1.85612, vd=40.1; same catalog mismatch as L31. |
| L72 / 32 | `glass` | `S-TIH23 (OHARA)` | `863252 — dense flint (patent nd=1.86252, νd=25.2)` | Patent Table 1 row 32 repeats nd=1.86252, vd=25.2; same catalog mismatch as L44. |

### Phase 2 — Retained-information audit

- Surface radii, thicknesses, `nd`, and semi-diameters match Patent Table 1, PDF page 24. Listed diameters were correctly stored as `sd = φi / 2`.
- Zoom positions and design specs match Patent Table 2, PDF page 25: f=28.86/44.39/67.87 mm, Fno=2.06, 2ω=73.71/51.96/35.36°, Y=21.63 mm, L=155.40/159.95/170.88 mm.
- Variable air gaps match Patent Table 3, PDF page 25 for infinity and 378 mm object distance. Wide infinity `d5`, `d12`, `d18`, `d26`, `d28`, and `d30` match the stored surface `d` values.
- Aspherical coefficients and K=0 convention match Patent Table 4, PDF page 26, and the sag equation in ¶0061. Patent lists terms through A12; omitted terms remain zero in the data file.
- Group start surfaces and focal lengths match Patent Table 5, PDF page 26.

### Phase 3 — Spectral / metadata enrichment

- No additional line-index or partial-dispersion table was found for Example 1 in the supplied patent copy.
- Existing metadata already includes maker, patent year, design focal lengths, aperture, element count, group count, mount, format, and focus description.

### Phase 4 — Analysis sync

- Updated element narratives and glass tables to replace the mismatching OHARA labels with patent-code labels for L12, L21, L22, L23, L24, L31, L33, L44, L45, and L72.
- Reworded remaining "exact match" claims for provisional OHARA labels whose identity is inferred from the patent's nd/vd pair.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan unresolvedGlassScan` — passed; regenerated report output shows this lens removed from `catalog-mismatches.generated.md`.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed, 129 files / 1664 tests.
