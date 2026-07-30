# Audit Log - PENTAX HD DA* 11-18mm f/2.8 ED DC AW

Patent: US 2018/0164556 A1, Numerical Example 1

## 2026-07-30 - Glass-code source review

### Patent verification

- Rendered and visually reviewed PDF page 32 / patent page 6 from local `patents/US20180164556A1.pdf`.
- Numerical Example 1 / Table 1 prints L14 at `nd = 1.54732`, `vd = 46.0`, confirming the stored prescription coordinate.
- The patent supplies no glassmaker, trade name, secondary line index, or partial-dispersion value.

### Catalog disposition

- Rechecked the current and discontinued-inclusive first-party vendor catalogs.
- OHARA PBL1/S-TIL1, HOYA E-FEL1, and SUMITA LLF1/LLF7 converge on the same light-flint family. The closest group is `nd = 1.54814`, `vd = 45.75–45.90`, safely inside the runtime compatibility window.
- Their coefficient curves are materially interchangeable at the trace lines: across Schott LLF1, OHARA S-TIL1, and HOYA E-FEL1, the largest evaluated index spread is about `0.000032` at the g line.
- Relabeled L14 to HOYA E-FEL1 as the catalog equivalent because its `45.82` Abbe number has the smallest residual against the patent row. The annotation explicitly leaves the production supplier unspecified.

### Verification

- `npm run generate:glass-reports` — 8 files / 10 tests passed.
- `npm test -- dispersion.test.ts lensDataTyping.test.ts validateLensData.test.ts buildLens.test.ts` — 4 files / 237 tests passed.
- `npm run typecheck`
- `npm run format:check`
- `git diff --check`
