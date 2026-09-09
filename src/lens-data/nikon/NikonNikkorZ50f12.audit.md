# Audit Log — Nikon NIKKOR Z 50mm f/1.2 S

Patent: WO 2021/241230 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2021241230A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L12 / row 3 | 1.94595 / 18.0 | `E-FDS1-W (HIKARI)` | `FDS18 (HOYA, patent nd/vd match; E-FDS1-W relabel)` | HOYA FDS18 round-trips the stored patent pair. |
| L13 / row 5 | 1.55298 / 55.1 | `S-TIL25 (OHARA)` | `Unmatched (patent nd=1.55298/vd=55.10; no public catalog candidate)` | No public catalog candidate clears the consistency threshold. |
| L19 / row 17 | 1.73800 / 32.3 | `S-NBH52V (OHARA)` | `S-NBH53V (OHARA, patent nd/vd match)` | OHARA S-NBH53V clears the prior S-NBH52V mismatch. |
| L32 / row 26 | 1.76450 / 49.1 | `S-NBH56 (OHARA)` | `S-LAH96 (OHARA, patent nd/vd match)` | OHARA S-LAH96 round-trips the stored patent pair. |
| L42 / row 30 | 1.90265 / 35.8 | `S-LAH79 (OHARA)` | `J-LASFH9 (Hikari, patent nd/vd match)` | Hikari J-LASFH9 clears the prior S-LAH79 mismatch. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

### Phase 1 — Glass corrections

- Deferred. The local untracked `patents/` folder does not contain a readable WO 2021/241230 A1 PDF (`find patents -maxdepth 1 -type f -iname '*241230*'` returned no matches).
- No glass labels were changed because the requested workflow requires reviewing the actual local patent file.

### Phase 2 — Retained-information audit

- Deferred until the patent PDF is added to `patents/`.

### Phase 3 — Spectral / metadata enrichment

- Deferred.

### Phase 4 — Analysis sync

- No analysis changes made.

### Verification

- `npm run generate:glass-reports` — passed; this lens remains in `catalog-mismatches.generated.md` and `glass-relabel-by-lens.generated.md` pending patent review.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-05-31 — First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO 2021/241230 A1 / `241230`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-07-29 - Remaining catalog-mismatch audit

- The local source is now present. Rechecked WO 2021/241230 A1 Example 1 surface 32A; stored `R`, `d`, `nd=1.51680`, and `νd=64.00` agree with the patent.
- Relabeled L44 from incorrect OHARA `S-NSL3` to Hikari `J-BK7`, the exact standard-crown coordinate in Nikon/Hikari context.
- Synchronized the L44 analysis and glass summary. No prescription geometry changed.

## 2026-08-07 — Remaining glass coverage audit

- Visually rechecked the image-based local WO 2021/241230 A1 Example 1 table at surface 6: L13 is
  `nd=1.55298`, `νd=55.1`.
- HIKARI J-KZFH4 (`1.552981 / 55.07`) is the exact coefficient-backed catalog equivalent. The label leaves the
  production supplier unspecified.
- Strict and trusted catalog coverage are now complete at `17/17`; no geometry changed.

## 2026-09-08 — First-hosted audit, lens 11

- Source: local WO2021241230A1.pdf, title p1, equation (a) p26, Table1 pp28–31, Fig1 p63. Source is now available; older source-blocker notes above are historical.
- All R/d/nd/vd rows visually cross-checked. Retained dummy-plane collapse −3+3.1=0.1 mm. Replaced incomplete 10.81 mm last gap with 10.81+1.6/1.5168+d36 = 12.5668523/12.5658523 mm. Source d0=467.50 mm gives modeled close distance 630.2598523 mm, replacing the unsupported 0.45 m label. Source FNO1.23 now controls the iris.
- Equation (a) prints 1−κy²/r². Corrected K to κ−1: 14.2295, −1.1159, 8.4794. Restored source A16 terms −2.27720e−22 and +1.17040e−21; at h18 these add −0.0276542 and +0.1421328 mm, respectively. All other aspheric coefficients match Table1.
- Figure1 at 600 dpi, rotated 270 degrees for reading: first/last optical vertex span about2771px for150.194mm. Front rims approximately28–31.5mm; rear about19–20mm. Revised the former small unsupported SDs accordingly. Rejected S4=28.5 because S4/S5 combined sag17.39 exceeds14.859mm allowance; S4=26.5 passes. Rejected rear S31/S32A=19.5 and18; retained S31=17.75,S32A=18 to respect7.76mm gap. Other selected values in data. No hidden trimming at infinity/midpoint/close.
- Corrected FCD505/S-FPM2 mixed labels to existing J-PSKH4 (L14–L17 and approximate L31) and J-PSKH1 (L18/L22) catalog counterparts. All17 elements resolve within existing compatibility rules. Kept original patent indices/Abbe values and explicit supplier-neutral labels. Only J-PSKH1 pair retains inferred APD; ν≈67 alone no longer marks the other five elements APD.
- Rewrote public analysis with the correct source station, conic convention, filter omission, source/catalog distinctions, and constrained rim estimates. Removed unsupported production-motor and exact-production-prescription claims.
- Production infinity/close/motion chart inspected before edits. Local infinity/close/midpoint/f16 inspected after: f1.23/16, close63cm, named gaps19.16/2/1.9→11.44/3.58/8.04, midpoint15.30/2.79/4.97, BF12.57, EFL51.29→47.51 (mid49.35). Chart shows distinct F1/F2 objectward movements7.727/6.143mm with zoom disabled. Stop40.85mm wide open and3.14mm atf16. No overlapping glass in the live diagram.
- Surface and image-circle probes pass. Five focused regressions pass: independent sag pins, preserved finite object leg, independent group motion, glass counterpart resolution, hidden-rim trimming. Full tests/build/glass reports remain for batch11–20.
