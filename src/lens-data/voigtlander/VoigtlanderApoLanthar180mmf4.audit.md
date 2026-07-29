# Audit Log - Voigtlander APO-LANTHAR 180mm f/4 SL Close Focus

Patent: JP 2003-270529 A

## 2026-06-23 - Full Voigtländer local-patent sweep

- Local patent source: `patents/JP_2003270529_A.pdf` (untracked local file).
- Re-rendered the image-only PDF and visually rechecked Example 1, Table 1. The stored R, d, nd, and vd values match the patent table.
- The patent table does not publish semidiameters or dPgF/line-index rows. Existing SDs therefore remain program-derived display apertures rather than patent-published clear apertures.
- No data prescription changes were needed. Synced the stale data comment and analysis text from the prior `S-LAH51` / `S-TIH4` labels to the already-audited `S-LAH53` / `S-TIH10` glass labels.

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP_2003270529_A.pdf`; local text confirms the queued nd/vd rows.
- Updated surfaces 10 and 15 from `S-LAH51 (OHARA)` to `S-LAH53 (OHARA)` for nd=1.80610, vd=40.70.
- Updated surface 11 to `S-TIH10 (OHARA)` for nd=1.72825, vd=28.30.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked Example 1 / Table 1 in local `patents/JP_2003270529_A.pdf`; S7 remains 1.83400 / 37.30 and its
  R/d values are unchanged.
- S7 `S-LAH55 (OHARA)` -> `S-LAH60 (OHARA)`, the exact same-vendor coordinate family. Synchronized the L21
  element text, cemented-pair discussion, glass table, Petzval discussion, and source list.
