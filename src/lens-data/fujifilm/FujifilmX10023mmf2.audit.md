# Audit Log - Fujifilm X100 23mm f/2

Patent: US 2012/0069456 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20120069456A1.pdf`; local text confirms the high-index flint row and table context for the queued labels.
- Updated surface 10A to `S-BAL14 (OHARA)` for nd=1.56865, vd=58.60.
- Updated surface 12 to `J-SFH1 (Hikari)` for nd=1.80809, vd=22.80.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-07-24 - Odd-order asphere backfill

- Re-transcribed Example 1 Table 2 from the local patent PDF.
- Replaced the even-order least-squares approximations on surfaces 10A and 11A with the exact A3-A20 rows.
- Converted patent K = 0 to the standard renderer convention K = -1, preserving the patent's paraboloid bases.
- Added edge-departure regression coverage at both data-file semi-diameters.
