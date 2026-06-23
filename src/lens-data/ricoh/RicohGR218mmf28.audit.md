# Audit Log - Ricoh GR 18.3mm f/2.8 (GR / GR II)

Patent: US 2013/0321936 A1

## 2026-06-23 - Local patent glass/APD and SD review

- Local patent source: `patents/US20130321936A1.pdf` (untracked local file), Example 3.
- Verified the Example 3 prescription table against the data file: f = 18.30 mm, F = 2.81, half-field = 38.2 deg. Surface radii, spacings, refractive indices, Abbe numbers, and the two aspherical surfaces S2/S13 match the file.
- Verified the cover-glass treatment: patent plate F is omitted from `surfaces`, and its air-equivalent optical path is folded into the last air gap.

| Element | Patent glass / Pg,F | Data-file disposition |
|---|---|---|
| L1 | HOYA M-FCD1 / 0.5388 | Labeled `FCD1 / M-FCD1`; `apd: "patent"`, `dPgF: +0.03218`. Confirmed strong positive APD and PGM status. |
| L2 | HOYA E-FD8 / 0.5989 | Retained E-FD8; `apd: "patent"`, `dPgF: +0.00751`. |
| L3 | HOYA FDS90 / 0.6191 | Labeled as the local S-TIH53/FDS90 class; `apd: "patent"`, `dPgF: +0.01530`. |
| L4, L5 | HOYA TAFD30 / 0.5654 | Retained TAFD30; backfilled `dPgF: -0.00977`, not APD. |
| L6 | HOYA E-FD8 / 0.5989 | Retained E-FD8; `apd: "patent"`, `dPgF: +0.00751`. |
| L7 | HOYA M-TAFD51 / 0.5642 | Labeled `821427 - HOYA M-TAFD51` as a future-upgrade code; backfilled `dPgF: -0.00776`, not APD; confirmed PGM status. |

- The patent does not publish semi-diameters. Existing SDs remain estimates. They were rechecked qualitatively against the patent drawing and prescription: the large front group, reduced stop, matched cemented doublet apertures, and slightly larger rear aspheric field-corrector apertures are consistent with the drawing and avoid irrational cross-gap proportions.
- Companion analysis was updated to describe the exact patent Pg,F values, dPgF derivation, APD status, and catalog-equivalent labels.
