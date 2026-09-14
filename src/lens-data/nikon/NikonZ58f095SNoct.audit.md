# Audit Log - Nikon NIKKOR Z 58mm f/0.95 S Noct

Patent: WO2019/229849 A1

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/WO2019229849A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L21 / row 7 | 1.84850 / 43.79 | `Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)` | `J-LASFH22 (Hikari, patent nd/vd match)` | Hikari J-LASFH22 clears the prior unresolved near-match. |
| L32 / row 24 | 1.69895 / 30.13 | `Dense flint (near S-NBH52V)` | `E-FD15 (HOYA, patent nd/vd match)` | HOYA E-FD15 round-trips the stored patent pair. |
| L34 / row 27 | 1.765538 / 46.76 | `Lanthanum crown (no confirmed catalog match; near TAFD5F)` | `Q-LASFPH2S (Hikari, patent nd/vd match)` | Nikon/Hikari Q-LASFPH2S clears the prior unmatched label. |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a WO2019/229849 A1 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO2019/229849 A1 / `229849`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked the now-present local `patents/WO2019229849A1.pdf` and its authored glass/partial-dispersion table.
- Assigned supplier-neutral proxies to six elements: J-LASFH9, J-KZFH4, J-PSKH1 ×2, J-KZFH1, and J-KZFH9.
- Patent-authored `dPgF` values are retained; the prior missing-source note above records the earlier repository state.

## 2026-09-08 — Source audit; live review pending

Original WO2019229849A1, Example1: cover p.1, equation p.20, table pp.21–23 and Figure1 p.46 (600dpi). Verified all source lens radii/thicknesses/glasses, three standard K=0 conics and fourteen nonzero asphere coefficients. Corrected analysis inventor to Hiroki Harada from the original cover.

- Removed legacy filter rows29–30; final equivalent gap14.5+1.6/1.5168+1=16.5548523206751mm agrees with rounded source BF16.55. Seventeen elements retained.
- Refined figure optical rims, excluding shoulders. Facing S3/S4 retain28.7mm due to source/clearance conflict at29.2mm; documented follow-up. No hidden renderer trimming at0/.5/1.
- Source f59.62/f0.98/full39.96 controls, isolated element powers and qualified catalog/process claims synchronized. Preserved five source PgF rows via exact runtime-normal-line deviations; near-normal L24/L29 no longer APD-badged.
- Source D22=2.68→21.29 and GF/stop objectward18.61mm, GR fixed, retained. Independent matrix beta−.1942594 gives equivalent-model near0.499367498m; source physical path would give0.499912645m.
- Three regressions and surface/image-circle checks pass. Production/local browser checks remain pending because the Mac is locked. Not marked complete; batch21–30 gates/commit pending.

## 2026-09-09 — Live verification completed

Production baseline and local infinity, near, midpoint, f16 and movement chart verified. Near50cm/D22=21.29/EFL62.75mm; midpoint100cm/D22=11.98/EFL61.14mm; f16 stop2.93mm. GF travels18.61mm objectward, GR fixed; excluded filter absent. Earlier lock blocker resolved. Full batch validation passed2877 tests, typecheck, format, lint, glass checks and build; included in batch21–30.
