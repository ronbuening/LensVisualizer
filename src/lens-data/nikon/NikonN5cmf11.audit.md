# Audit Log — NIKON NIKKOR-N 5cm f/1.1

Patent: US 2,828,671, single prescription

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US2828671.pdf`.
- The OCR text is messy but confirms the published glass rows used by the data file: 1.6073/59.5, 1.7700/47.9, 1.5927/35.4, 1.6483/33.8, 1.7170/47.9, 1.6259/35.6, and 1.6385/55.5.

### Glass corrections

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L1, L2 | `607/595` dense crown | `K-SK7 (Sumita, 607595)` | Existing coefficient-backed catalog entry. |
| L3 | `LaK/LaF... 770/479` | `770479 — lanthanum crown/flint patent glass...` | No exact public coefficient-backed match found; kept unresolved. |
| L4 | `593/354` light flint | `S-FTM16 (OHARA, 593353)` | Existing coefficient-backed catalog entry; within patent rounding. |
| L5 | `648/338` flint | `S-TIM22 (OHARA, 648338)` | Existing coefficient-backed catalog entry. |
| L6, L7 | `717/479` lanthanum crown | `S-LAM3 (OHARA, 717479)` | Existing coefficient-backed catalog entry. |
| L8 | `626/356` light flint | `E-F1 (HOYA, 626357)` | Existing coefficient-backed catalog entry; within patent rounding. |
| L9 | `639/555` dense crown | `K-SK18 (Sumita, 639555)` | Existing coefficient-backed catalog entry. |

### Catalog-search disposition

- Public catalog search found coefficient-backed matches for every six-digit row except `770479`.
- Updated the analysis notes and glass census to use catalog names where defensible and keep `770479` explicit for future upgrade.

