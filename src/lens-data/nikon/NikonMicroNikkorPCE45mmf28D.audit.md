# Audit Log — NIKON PC-E MICRO-NIKKOR 45mm f/2.8D ED

Patent: US 7,656,591 B2, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US7656591.pdf`.
- Table 1 confirms the relevant rows:
  - surface 3 / L12: nd = 1.75692, νd = 31.59
  - surface 8 / L23: nd = 1.56732, νd = 42.72

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L12 | `Proprietary high-dispersion lanthanum flint (757/316)` | `757316 — high-dispersion lanthanum flint...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |
| L23 | `Proprietary flint (567/427)` | `S-TIL26 (OHARA, 567428)` | Existing coefficient-backed catalog entry close to the patent row. |

### Catalog-search disposition

- Search for `757316` found no defensible exact match in public coefficient-backed catalogs.
- `S-TIL26` is close enough to the rounded patent row to replace the previous generic proprietary label for L23.
- Updated the analysis table to move L23 out of the unmatched set and leave L12 unresolved.

## 2026-06-04 — Sweep 3 local patent recheck

Local patent source: `patents/US7656591.pdf` (untracked local file).

- Re-extracted the local PDF with `pdftotext -layout`.
- The patent prescription publishes `nd` and `νd` for the glass rows, including L12 and the ED L21, but no `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows were found in the extracted text.
- No data-file spectral backfill was made from this pass.
