# Odd-Order Aspheric Coefficients (A3–A19)

## Summary

- Add native odd-order aspheric coefficient support (A3–A19 as optional fields) so new lenses can
  transcribe patent odd/even polynomials exactly, and backfill the three lenses whose analysis
  files preserve complete patent tables. Branch: `ronbuening/AddLens260724a`.

## Changes

- `AsphericCoefficients` gained optional `A3`–`A19` odd fields (`src/types/optics.ts`).
- `conicPolySag`/`sagSlopeRaw` evaluate odd terms as separate additive sums, keeping even-only
  surfaces bit-identical (`src/optics/internal/surfaceMath.ts`). All tracing/rendering/analysis
  consumers inherit support automatically.
- Validation accepts finite odd coefficients and now rejects unknown coefficient keys
  (`src/optics/validateLensData.ts`).
- Spec/template/docs updated: `LENS_DATA_SPEC.md` (odd-order rules + KA → K conversion note),
  `TEMPLATE.data.ts.template`, two content articles' "even-order" wording.
- Exact patent backfills replacing even-order refits: Zeiss Touit 50mm f/2.8 (4A/7A, A3–A15),
  Fujifilm GF35-70mm (11A/12A, odd A5/A7/A9), Fujifilm GFX100RF 35mm (15A, A4–A20 incl. odd
  A5–A19). Data headers and analysis refit statements updated; patent tables kept as canonical.
- New regression test `__tests__/src/lens-data/oddAsphereBackfill.test.ts` asserts
  analysis-quoted departures (±0.01 µm) and the GFX100RF exact-vs-retired-refit residual
  (≤0.05 µm over h = 0..13 mm).
- New follow-up queue `agent_docs/odd-asphere-backfill.md` (20 remaining lenses, prioritized;
  indexed in CLAUDE.md). Changelog `improvement` entry added for 2026-07-24.

## Verification

- `npx vitest run` on engine + backfill test files — passed (see below for full gate).
- `npm run typecheck && npm run format:check && npm run lint && npm run test` — run at branch end.

## Follow-ups

- Work the queue in `agent_docs/odd-asphere-backfill.md`; X70 18mm (7–9 µm refit residuals) and
  XF50mm f/1.0 (odd terms dropped entirely) first.
- GF20-35 and GF100-200 analyses only summarize patent coefficients — those backfills need patent
  re-transcription.
- Optional: ElementInspector still displays only K/A4/A6; consider showing odd terms when present.
