# Audit Log — Nikon NIKKOR Z 28mm f/2.8

Patent: WO 2022/071249 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2022071249A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L3 / row 5 | 2.00100 / 29.12 | `S-NPH1 (OHARA)` | `S-LAH99 (OHARA, patent nd/vd match)` | OHARA S-LAH99 clears the prior S-NPH1 mismatch. |
| L4 / row 7 | 1.80518 / 25.45 | `S-TIH14 (OHARA)` | `S-TIH6 (OHARA, patent nd/vd match)` | OHARA S-TIH6 round-trips the stored patent pair. |

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2022/071249 A1`.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2022/071249 A1 / `071249`; no matching PDF was present.
- Nearby local files `US20220236544A1.pdf` and `US20220236544A1-2.pdf` were not used as substitutes because they are Fujifilm/Nagami zoom patents, not the cited Nikon Z 28mm family.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-08-21 — Resolver normalization and candidate audit

- Normalized L41 from `S-TIM 22` to official OHARA `S-TIM22`; the stored `1.64769 / 33.73` coordinate remains
  compatible with the existing catalog curve at `1.64769 / 33.79`.
- Rejected the old L11 `S-TIL 2` and L23 `S-TIH 18` spellings as material mismatches, not mere spacing errors.
  J-LLF6 reproduces L11 at `1.53172 / 48.78`, while J-SFH1 reproduces L23 at `1.80809 / 22.74`; both now supply
  qualified spectral proxies without assigning Nikon's production supplier.
- Synchronized the analysis. No prescription, APD, or geometry changed.

## 2026-09-08 — Source and live-view review

Local original WO2022071249A1 Example2: equation(A) p.20, Table2 pp.26–28 and Figure3 p.47 (600dpi). All19 modeled source rows,10 medium coordinates,3 conics and16 nonzero asphere coefficients verified. Sourcekappa1→standardK0 retained. S14 A8−6.64821e−10 is correct in the scan; English OCR−6.68421e−10 rejected.

- Separate filter20–21 omitted; correct final equivalent-air gap11.223→13.137852320675106mm, consistent with sourceBfa13.138. Removed stale claims that the camera model supplied the missing plate/gap. L24 compound resin remains.
- SourceFNO2.909, f28.824, fullfield76.058 surfaced; D17 relabeled from BF. Source0.19m physical object-image label retained; equivalent-air model gives0.189450650m and beta−.203245665. Sourcegap arrays conserve13mm and give G2/G3 objectward1.681/4.792mm, outer groups/stop fixed.
- Optical rims refined from40.927mm vertex-span calibration, excluding mechanical shoulders and callouts. No runtime trimming at0/.5/1. Surface/image-circle audits pass. All isolated medium focal lengths recalculated.
- L31 source1.53113/55.73 incompatible with oldS-BAL41. Keptunmatched531557; catalog/exact-coordinate web search did not establish a compatible commercial name. BSC6 index is similar but dispersion incompatible. Resin supplier/curing method and production/process claims removed or qualified.
- Three source regressions pass. Production baseline and local infinity/near/half/f16 inspected: near19cm D5/D13/D17=3.17/1.34/8.49 EFL24.89; half38cm gaps4.01/2.89/6.10 EFL26.76; f16 stop1.87mm.

UnresolvedL31 material remains follow-up. Batch21–30 fullgates/commit pending.
