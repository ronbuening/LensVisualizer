# Fujifilm Patent Audit 2026-06-25

## Summary

- Audited `src/lens-data/fujifilm/` against the local `patents/` PDFs, with extra attention to stale glass-code labels, patent-listed partial dispersion, APD display status, and semi-diameter anchors.
- Image-only local PDFs were handled by page rendering where needed. `US_2025234079_A1.pdf` was also cross-checked against the searchable Google Patents mirror because local text extraction is empty.

## Changes

- Relabeled newly catalog-backed Fujifilm glass rows:
  - GF110 L13 `567428` -> OHARA `S-TIL26`.
  - XF16-80 L11/L24/L32 -> OHARA `S-TIH53`, L22/L33 -> `S-PHM52`, L42 -> `S-LAH63`.
  - XF80 Macro L1c -> HOYA `E-F1`, L4aa -> HOYA `E-FDS2`, L4ab -> OHARA `S-LAM59`.
- Added patent-derived `dPgF` for all GF30mmF5.6 T/S Example 4 material rows and corrected APD display status so ordinary θgF rows no longer show as APD special-glass elements.
- Added patent-derived `dPgF` for all GFX100RF Example 5 material rows and marked only L23 as patent APD.
- Added APD display metadata for the XF16-55mmF2.8 R LM WR II rows whose existing patent-derived `dPgF` justified a badge.
- Added audit sidecars for GFX100RF and XF16-55 II; appended audit entries for GF30, GF110, XF16-80, and XF80 Macro.

## Diameter Notes

- No new semi-diameter edits were made.
- Confirmed explicit patent-diameter anchors already in the data:
  - GF30 T/S uses Table 10 ED/2, with documented renderer-clearance trims at surfaces 7 and 25A.
  - XF16-55 II uses Table 1 DA/2 at S1, S11, and S25.
  - XF23 f/2.8 R WR and GF20-35/GF35-70 already retain their patent ED/2 anchors from prior audits.
- Remaining Fujifilm examples reviewed in this pass either do not publish clear-aperture/ED/DA columns or already document inferred renderer apertures.

## Verification

- `npm run generate:glass-reports` — passed.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — failed only in `__tests__/src/generated/buildRouteSync.test.ts` due generated route metadata listing Rodenstock routes/maker slugs not present in the current visible catalog. This appears unrelated to the Fujifilm audit changes and was not corrected in this pass.

## Follow-ups

- Fujifilm unresolved glass rows remain where no coefficient-backed public catalog source was found, including GF30 `585587`, XF23 f/2.8 `730322`, XF23 f/2 `803405` / `849401`, GF55 `772493`, XF60 `667311` / `803404`, and other rows already documented in per-lens audit logs or generated reports.
- OCR tooling is still absent locally (`tesseract` / `ocrmypdf` not installed), so image-only local patent PDFs require rendered-page inspection or a searchable patent-family mirror.
