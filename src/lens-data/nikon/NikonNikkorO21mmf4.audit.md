# Audit Log — NIKON NIKKOR-O 2.1cm f/4

Patent: JP 1968-030782, Example 2 / Figure 2.

## 2026-07-26 — Figure-matched SDs, glass coverage, identity, and inferred focus

### Patent and identity evidence

- Reviewed the local publication `patents/JPY 1968030782-000000.pdf`.
- Measured the Example 2 section in Figure 2 on PDF page 4 after scaling the `f = 100` prescription by 0.21.
- Nikon's official historical title uses **NIKKOR-O 2.1cm F4**. The display name now preserves that period focal-length style.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were rounded to 0.1 mm and then checked with the surface
validator. `STO` was not changed.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–2 | 13.0, 10.2 | unchanged | Already matched the outer front singlet in Figure 2. |
| 3–6 | 7.5, 6.4, 4.75, 4.0 | 7.7, 7.7, 4.3, 4.3 | Matched the front cemented triplet silhouette. |
| 7–10 | 3.85, 4.55, 6.1, 7.5 | 3.8, 4.2, 6.7, 6.7 | Matched the rear cemented triplet silhouette. |
| 11–12 | 9.5, 12.6 | 8.8, 12.0 | Matched the rear negative singlet envelope. |

### Glass audit

| Element | Before | After | Disposition |
|---|---|---|---|
| L4 | `582420 — QF5 class` | `LF3 (Sumita coefficient-backed equivalent), 582420` | Added the exact-code LF3 polynomial from Sumita's official all-glass catalog. |
| L8 | `643581 — LaK6 class` | `LAK6 (Sumita coefficient-backed equivalent), 643581` | Added the exact-code LAK6 polynomial from the same catalog. |

These are wavelength-tracing equivalents, not claims about Nikon's historical melt supplier.

### Focus audit

- The patent publishes only an infinity prescription and keeps every internal spacing rigid.
- Nikon documents manual distance-scale focusing for the production lens. Conventional unit focus is therefore a
  defensible inference, but is not claimed as patent-published movement.
- A finite-conjugate paraxial solve changes only final BF: 7.346549773 mm at infinity to 7.875785504 mm at the 0.9 m
  catalog endpoint, an inferred extension of 0.529235731 mm.
- The data and analysis explicitly label this state **inferred unit focus**.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonNikkorO21mmf4.data.ts` — passed.
- `npm test -- elementRenderDiagnostics.test.ts` — passed, including hidden-trim and cross-gap checks.
- `npm run generate:glass-reports` — passed; coverage is 8/8 trusted and 8/8 Sellmeier.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint reports three unrelated existing
  warnings and no errors.
- `npm run test` — passed, 207 files / 2440 tests.
- `npm run build` — passed, including prerender and sitemap generation for 947 routes.
