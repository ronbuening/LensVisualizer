# Audit Log — NIKON NIKKOR Z MC 105mm f/2.8 VR S

Patent: WO 2022/097401 A1, expected source for the current prescription

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- The referenced patent was not present in `patents/`; searches for `097401` found no local file.
- A nearby file, `patents/US20220026670A1-2.pdf`, was checked and is unrelated to this Nikon macro prescription.
- Because the source patent was unavailable locally, no table rows were promoted from the current data alone.

### Glass disposition

| Element | Before | After | Disposition |
|---|---|---|---|
| L12 | `High-index APD flint (glass code 855252)` | `855252 — high-index APD flint...` | Kept unresolved; label now preserves the unbroken code and notes the source-patent blocker. |
| L32 | `High-index APD flint (glass code 855252)` | `855252 — high-index APD flint...` | Same glass as L12; kept unresolved. |

### Catalog-search disposition

- Public catalog search did not produce a coefficient-backed exact `855252` match.
- Updated the analysis glass table to flag the local patent-source blocker rather than implying the row was reverified from the absent patent.

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- The referenced patent `WO 2022/097401 A1` is still not present in `patents/`.
- Local searches for `097401` / `97401` found no patent file.
- Because the source patent was unavailable locally, the current queue rows were not promoted from data-file values alone.

### Glass disposition

| Element / surface | Current label | Disposition |
|---|---|---|
| L2 / S4 | `S-FPM3 (OHARA)` | No change; source-patent blocker. |
| L3 / S6 | `S-FPM3 (OHARA)` | No change; source-patent blocker. |
| L8 / S17 | `S-FPM3 (OHARA)` | No change; source-patent blocker. |
| L9 / S19 | `S-LAH79 (OHARA)` | No change; source-patent blocker. |

### Catalog-search disposition

- Public lookup was not used to override labels without the local patent table.
- This lens remains unresolved until `WO2022097401A1` or an equivalent local patent source is available.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO 2022/097401 A1 / `097401`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.
