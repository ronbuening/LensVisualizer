# Nikon AF-I NIKKOR 400mm f/2.8 D IF-ED Patent Audit

Patent: US 5,438,455 A, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US_5438455_A.pdf`; Figure 1 on PDF page 2 is the controlling optical section.
- The original rear two-thirds of the model were visibly too narrow relative to the fixed front collector. SDs were refined against the figure while preserving all source prescription values.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 7 / 8 / 9 | 39.8 / 38.6 / 34.4 | 49.0 / 47.5 / 43.0 |
| 10 / 11 | 32.0 / 31.0 | 37.0 / 36.0 |
| 12 / 13 / 14 | 28.6 / 28.6 / 27.8 | 35.0 / 35.0 / 34.0 |
| 15 / 16 / 17 | 27.8 / 27.3 / 27.2 | 30.5 / 30.0 / 30.0 |

- The rear cemented group cannot be enlarged to the schematic's full apparent outline without violating the physical shared-gap geometry; its final values are the validator-safe compromise.
- Added Hikari `J-LLF6` to the catalog from the retained first-party Nikon/Hikari workbook. Its vendor coefficients resolve L22b here and the same named glass in the existing Nikon AF-P DX 10–20mm record.
- Normalized the display name to `NIKON AF-I NIKKOR 400mm f/2.8 D IF-ED`.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFINikkorED400mmf28DIF.data.ts`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFINikkorED400mmf28DIF.data.ts`
- Full repository checks are recorded in the integrating commit.
