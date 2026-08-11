# Nikon AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II Patent Audit

## 2026-06-24 Source Availability Recheck

The data file cites `JPWO2015/141574A1`, Example 2. I checked the local untracked `patents/` folder for `2015141574`, `141574`, `JPWO2015141574`, and `WO2015141574` filename forms, and no matching PDF is present.

### Outcome

- No data changes were made in this pass.
- The generated coverage report shows several Hikari J-series Abbe-only rows, so this lens should be revisited once the cited patent PDF is available and the glass table can be checked directly.
- Current semi-diameters remain documented estimates because the data header already notes that the patent table omits clear apertures.

### Verification

- Pending batch verification after the current Nikon audit pass.

## 2026-08-11 — Phase 94 Hikari catalog completion

- Added the first-party Hikari J-SK14 (`603607`) and J-LASF02 (`800421`) nine-term power-series rows from the
  retained Nikon/Hikari optical-glass workbook.
- Their coefficients reproduce the workbook's d/e indices (`1.603110 / 1.605480` and `1.799520 / 1.804034`) and
  resolve the already authored L31 and L35 names without changing the patent prescription.
- The lens moves from 11/13 to 13/13 strict Sellmeier coverage. No geometry, movement, or source indices changed.
