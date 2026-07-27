# Audit Log — NIKON NIKKOR-S AUTO 5.8cm f/1.4

Patent: JP 1966-017177, Embodiment 1 / Figure 1.

## 2026-07-26 — Figure-matched SDs, identity, glass review, and inferred focus

### Patent and identity evidence

- Reviewed the local publication `patents/JPB 1966017177-000000.pdf`.
- Measured Figure 1 on PDF page 3 after applying the normalized prescription's scale of 58.
- Nikon's official historical title uses **Nikkor-S Auto 5.8cm f/1.4**. The display name now preserves that period
  focal-length style.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were rounded to 0.1 mm and checked with the surface
validator. `STO` was not changed.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–4 | 23.5, 23.5, 21.0, 21.0 | 20.5, 20.5, 19.9, 19.9 | Matched the two front meniscus envelopes. |
| 5–8 | 19.3, 19.3, 18.0, 13.5 | 18.4, 18.4, 18.4, 12.5 | Matched the front central pair and stop-side taper. |
| 9–11 | 16.5, 16.5, 16.5 | 15.5, 15.5, 15.5 | Matched the rear cemented pair. |
| 12–13 | 18.3, 18.3 | 15.2, 15.2 | Matched the rear singlet envelope. |

### Glass audit

All seven elements already resolve to coefficient-backed catalog entries. No catalog or element-label changes were
needed for this lens.

### Focus audit

- The patent publishes only the infinity prescription and keeps all internal spacings rigid.
- Nikon documents linear-helicoid focusing for the early F-system barrel, supporting an inferred rigid-unit model.
- A finite-conjugate paraxial solve changes only final BF: 37.005824101 mm at infinity to 43.853986686 mm at 0.6 m, an
  inferred extension of 6.848162585 mm.
- The data and analysis explicitly label this state **inferred unit focus**.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonNikkorSAuto58mmf14.data.ts` — passed.
- `npm test -- elementRenderDiagnostics.test.ts` — passed, including hidden-trim and cross-gap checks.
- `npm run generate:glass-reports` — passed; coverage is 7/7 trusted and 7/7 Sellmeier.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint reports three unrelated existing
  warnings and no errors.
- `npm run test` — passed, 207 files / 2440 tests.
- `npm run build` — passed, including prerender and sitemap generation for 947 routes.
