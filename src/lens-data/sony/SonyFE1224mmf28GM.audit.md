# Audit Log - SONY FE 12-24mm f/2.8 GM

Patent: WO 2021/200206 A1, Example 2 / FIG. 6

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/WO2021200206A1.pdf`. The source is image-only in this workspace; Example 2's lens section is FIG. 6 on PDF page 77.
- The data file stores patent effective diameters as semi-diameters, except S7 is reduced by 0.055 mm to preserve rendered clearance in the tight S6-S7 air gap. The stop stores the largest tabulated stop semi-diameter because the schema does not carry a zoom-varying physical stop diameter.
- FIG. 6 shows a very large GP1 front group, a much smaller GP2/stop region, and rear groups that grow only modestly toward the image side. Current SDs match that silhouette: 38.98 mm at the first surface, mid-lens values around 11-17 mm, an 11.815 mm stop, and rear surfaces ending around 13.965 mm.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-30 - `961323` family review

- Rechecked Example 2 / Table 6 and visually confirmed the corresponding FIG. 6 layout. All three affected rows
  remain `nd = 1.96073`, `vd = 32.3`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. S-LAH98 and
  TAFD45 are close in Abbe number but their `nd = 1.95375` index is too far from the patent row.
- Retained the explicit unmatched `961323` annotation without a supplier claim. No prescription, zoom, focus,
  aperture, or semi-diameter values changed.

## 2026-07-30 - `678322` family review

- Rendered and visually reviewed PDF page 27 / patent page 25 from local `patents/WO2021200206A1.pdf`.
- Example 2 / Table 6 prints L22 at `nd = 1.67764`, `vd = 32.2`, confirming the stored coordinate. The table supplies no glassmaker, trade name, secondary line index, or partial-dispersion value.
- Rechecked the current and discontinued-inclusive first-party vendor catalogs. No coefficient row reproduces both coordinates inside the runtime compatibility window.
- Schott SF5/N-SF5 and their cross-vendor equivalents are centered near `nd = 1.6727`, about `0.0049` below the patent index and outside the guard.
- Removed the unsupported Schott-family attribution and retained an explicit unmatched dense-flint annotation on the patent Abbe fallback.

### Verification

- `npm run generate:glass-reports` — 8 files / 10 tests passed.
- `npm test -- dispersion.test.ts lensDataTyping.test.ts validateLensData.test.ts buildLens.test.ts` — 4 files / 237 tests passed.
- `npm run typecheck`
- `npm run format:check`
- `git diff --check`
