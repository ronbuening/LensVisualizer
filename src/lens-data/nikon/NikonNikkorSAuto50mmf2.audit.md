# Audit Log — NIKON NIKKOR-S AUTO 5cm f/2

Patent: JP 1964-025754, Embodiment 1 / Figure 1.

## 2026-07-26 — Figure-matched SDs, identity, glass review, and inferred focus

### Patent and identity evidence

- Reviewed the local publication `patents/JPB 1964025754-000000.pdf`.
- Measured Figure 1 on PDF page 4 after applying the prescription's 0.5 scale.
- Nikon's official historical title uses **NIKKOR-S Auto 5cm f/2**. The display name now preserves that period
  focal-length style.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were rounded to 0.1 mm and checked with the surface
validator. `STO` was not changed.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–4 | 15.2, 15.0, 14.7, 13.3 | 12.4, 12.2, 12.4, 11.2 | Reduced the oversized front envelopes to the Figure 1 silhouette. |
| 5–7 | 13.0, 11.8, 10.0 | 11.5, 11.5, 11.5 | Matched the front cemented pair near the stop. |
| 8–10 | 9.0, 11.3, 11.1 | 9.5, 10.1, 10.1 | Matched the rear cemented pair; surface 8 stays below its 10.1 mm direct figure estimate to avoid hidden SVG trim across the strongly curved stop gap. |
| 11–12 | 11.5, 11.7 | 10.5, 10.5 | Matched the rear singlet envelope. |

### Glass audit

All seven elements already resolve to coefficient-backed catalog entries. No catalog or element-label changes were
needed for this lens.

### Focus audit

- The patent publishes only the infinity prescription.
- Nikon's history places the early Nikkor Auto barrel on a linear helicoid, supporting rigid-unit focus rather than an
  invented internal or floating group.
- A finite-conjugate paraxial solve changes only final BF: 37.562468604 mm at infinity to 42.591705543 mm at 0.6 m, an
  inferred extension of 5.029236939 mm.
- The data and analysis explicitly label this state **inferred unit focus**.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonNikkorSAuto50mmf2.data.ts` — passed.
- `npm test -- elementRenderDiagnostics.test.ts` — passed, including hidden-trim and cross-gap checks.
- `npm run generate:glass-reports` — passed; coverage is 7/7 trusted and 7/7 Sellmeier.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint reports three unrelated existing
  warnings and no errors.
- `npm run test` — passed, 207 files / 2440 tests.
- `npm run build` — passed, including prerender and sitemap generation for 947 routes.
