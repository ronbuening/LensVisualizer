# Audit Log - Sony FE 20-70 mm F4 G

Patent: WO 2023/153076 A1, Example 8

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD25 from HOYA's first-party optical-glass PDF (`NBFD25`, code 855-252, nd=1.85451, vd=25.15, PgF=0.6103, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L44 from `Dense flint class (855/252)` to `NBFD25 (HOYA, 855252)`.
- Resolver support for slash-form codes also lets the existing catalog-backed `593/670` and `720/347` rows resolve from their current annotations.
- `npm test -- dispersion` and `npm run generate:glass-reports` passed.

## 2026-05-20 - Glass relabel pass

- Opened the local untracked patent PDF at `patents/WO2023153076A1.pdf`; it is present but image-only in local text extraction.
- Rechecked the data rows against the current data file and public catalog candidates for the four relabel rows.
- Updated L11 and L51 from `S-NPH53 (OHARA)` to `FDS18 (HOYA)` for nd=1.94595, vd=18.00.
- Updated L23 from `S-LAH98 (OHARA)` to `S-NBH56 (OHARA)` for nd=1.85478, vd=24.80.
- Updated L41 from `S-LAH79 (OHARA)` to `S-LAH98 (OHARA)` for nd=1.95375, vd=32.30.
- Remaining incomplete Sellmeier coverage was unrelated to this May relabel queue pass. The 2026-06-04 source pass resolved 855/252 as HOYA NBFD25 and enabled slash-code resolution for existing 593/670 and 720/347 catalog rows. The Sweep 2 catalog pass later lets 694/532 resolve through the existing S-LAL13 / M-LAC130 code path.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/WO2023153076A1.pdf`; the PDF is image-only for text extraction, so this pass relied on rendered-table checks already reflected in the data and analysis sidecar.
- Existing R/d/nd/vd, zoom/focus spacings, high-index/code-backed labels, APD metadata, and SD profile remain consistent with the patent-backed prescription and prior relabel passes.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
