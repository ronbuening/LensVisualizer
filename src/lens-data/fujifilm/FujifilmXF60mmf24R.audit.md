# Audit Log - Fujifilm XF 60mmF2.4 R Macro

Patent: US 2014/0247506 A1, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / S6 | `glass` | `Dense flint (unidentified; nd/vd = 667/311)` | `667311 - dense flint (patent nd=1.66680, vd=31.1; no exact public catalog match)` | Patent Example 1 / Table 1 gives nd=1.66680 and vd=31.1. No exact coefficient-backed public match was found, so the unbroken code is retained. |
| L17 / S12A | `glass` | `Lanthanum heavy flint (PGM, unidentified; nd/vd = 803/404)` | `803404 - PGM lanthanum heavy flint (patent nd=1.80348, vd=40.4; no exact public catalog match)` | Patent Example 1 / Table 1 gives nd=1.80348 and vd=40.4. Nearby LAH glasses are not exact coefficient-backed matches for 803404. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20140247506A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Table 1 row 6 for L14 (nd=1.66680, vd=31.1) and row 12A for L17 (nd=1.80348, vd=40.4).
- No radius, spacing, asphere, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Checked the current runtime catalog and public exact-code searches for 667311 and 803404.
- No catalog entry or alias was added because no public coefficient-backed row matched either patent code.

### Phase 4 - Analysis sync

- Updated the L14/L17 glass-identification rows to use unbroken six-digit tokens and unresolved status.

## 2026-05-31 - Catalog-mismatch second-batch recheck

Reviewed the local untracked file `patents/US20140247506A1.pdf`, Example 1.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L15 / S9 | `glass` | `S-TIL27 (OHARA) - probable...` | `Unmatched (patent nd=1.51742, listed vd=48.8; Table 17 implies vd~52.4; no resolver-safe catalog match)` | Table 1 row 9 lists nd=1.51742 and vd=48.8. Table 17's Example 1 conditional value implies the listed vd is likely a typo near 52.4, but the stored patent row should not resolve to the current S-TIL27 catalog entry. The label is intentionally unmatched until a coefficient-backed exact row is available. |

Figure / SD check:

- Rendered Figure 1 from the local PDF, page 1. Figure 1 is the matching Example 1 cross-section at infinity and close-focus positions.
- The patent does not publish semi-diameters. The stored SD profile visually matches the figure: moderate front group diameters, a stop neck before L15/L16, and a smaller rear group with the cover glass excluded as documented. No SD edits were made.

## 2026-09-23 — First-added diagram audit, lens 85

Source: local `patents/US20140247506A1.pdf` (US 2014/0247506 A1, Tetsuya Ori, FUJIFILM Corporation). Pages used: 2
(Fig. 1A–C, Example 1 at ∞ / −0.2× / −0.5×), 8–9 (Figs. 7–9 aberration diagrams), 23 (Tables 1–2, formula (A)),
24 (Table 3), 26 (Table 17).

### Re-verified and retained

- Stored embodiment is Example 1 (f = 61.06, FNO 2.48, 2ω = 25.4°), which matches the production XF60mmF2.4 R Macro:
  10/8 construction, one double-aspheric element (L17), one ED-class glass (L16), 0.5× maximum magnification.
  Patent number, inventor, assignee and year are correct.
- All 19 lens rows of Table 1 (R, d, nd, νd, stop at surface 8) match the file. Table 3's A3–A10 coefficients
  for surfaces 12 and 13, including all four odd-order terms, match exactly. Formula (A) is
  `C·Y²/{1+(1−K·C²·Y²)^½}`, so the stored K = Kpat − 1 (−31.54014 and +59.10862) is right.
- Cover plate S20/S21 (2.85 mm, nd 1.51680) is excluded, and 18.46 + 2.85/1.51680 = 20.34 mm is folded into the last
  gap. Paraxial EFL is 61.059 mm and BFD 20.338 mm (defocus +0.002 mm).
- Table 2 D13 = 1.80 / 10.57 / 23.73 mm is stored as three keyframes. The stored gaps focus at m = −0.1999 and
  −0.4999, with object-to-image distances of 436.6 and 266.5 mm (air-equivalent). `closeFocusM` 0.267 matches both
  the −0.5× conjugate and the production MFD, and the stored intermediate coordinate 0.61156 matches 0.267 / 0.4366
  to within rounding. Focus direction (G1 plus stop forward, G2 fixed) matches Fig. 1 and paragraphs [0051]–[0052].
- Element `fl` values all match thick-lens values to 0.1 mm, and element types agree with the R signs.
- L14 667311 stays unmatched: S-TIM39 has the same nd at νd 33.05, and Table 17 (νd3 − νd4 = 23.6) confirms that
  31.1 is the value the patent intends. L15 stays unmatched at the listed νd 48.8. Table 17's 29.1 implies 52.4,
  which is exactly S-NSL36; this is now documented. L17 803404 stays unmatched.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| `nominalFno` / `fstopSeries[0]` | 2.4 / 2.4 | 2.48 / 2.48 | Table 1 FNO 2.48; repo convention stores the patent FNO (marketed f/2.4 stays in `apertureMarketing`). |
| `maxFstop` | default 16 | 22 | Production minimum aperture f/22; `fstopSeries` already ended at 22. |
| STO `sd` | 7.65 | 7.8 | Iris radius the engine derives at f/2.48 is 7.76 mm; the real-ray axial marginal at the stop is 7.76 mm. |
| S5 `sd` (L13 front) | 10.5 | 11.0 | f/2.48 axial ray is 10.71 mm here (was CLIPS-AXIAL); Fig. 1A rim ≈ 11.0 mm. |
| S14/S15 `sd` (L21) | 8.2 / 8.2 | 9.9 / 9.9 | Fig. 1A rim ≈ 9.9 mm (+21 %); the −0.5× chief ray is 7.34 mm at S15. |
| S16/S17 `sd` (L22) | 9.0 / 9.0 | 11.5 / 11.5 | At −0.5×, full-field chief is 9.63 / 9.97 mm (was BLOCKS-CHIEF); Fig. 1A ≈ 11.6 mm. |
| S18/S19 `sd` (L23) | 9.5 / 9.5 | 12.0 / 12.0 | At −0.5×, full-field chief is 10.48 / 10.79 mm (at −0.2× it is 9.74 at S19; both were BLOCKS-CHIEF); Fig. 1A ≈ 12.2 mm. |
| L16 `apd` | `"patent"` | `"inferred"` | The patent never calls L16 ED or anomalous; the status is inferred from the exact S-FPL51 nd/νd match and Fujifilm's one-ED spec. Label reworded as a catalog equivalent. |
| L23 `glass` | `S-LAH65V (OHARA) — very close match` | `S-LAH65V (OHARA)` | 1.80400 / 46.58 is an exact catalog match. |
| `varLabels` | `[["13A", "BF"]]` | `[["13A", "D13"]]` | The variable gap is the patent's D13 (G1–G2 spacing), not back focus. |
| Header / analysis | Semi-diameters described as marginal + 60 % chief estimates; §7 described 25.4° as inside the sensor corner; S-FPL51 "confirmed by Fujifilm literature" | Semi-diameter note and §8 rewritten from trace and figure evidence; §7 corrected; ED wording hedged; working FNO 3.10 / 4.03 added to §6 | Exact trace: ω = 12.70° reaches Y = 14.2 mm (Fig. 7C shows about +3 % pincushion); Figs. 8–9. |

Rims kept: L11 15.5/15.0 and L12 14.8/13.5 are about 14–15 % above Fig. 1A (13.4 / 12.6 mm). They were kept because
the full-field f/2.48 bundle needs 16.5 mm at S1. L14 and L15–L17 are within about 11 % of the figure.

### Checks on the result

- Surface validator is clean, and the image-circle floor check reports 0 undersized.
- Exact trace at Y = 14.2 mm, f/2.48: no clipped axial rays and no blocked chief rays at ∞, −0.2× or −0.5×.
  ω is 12.70° / 10.10° / 7.73°, matching the patent's 12.7° / 10.1° / 7.7°.
- The engine builds with FOPEN 2.48, a 7.76 mm iris and a 22 f-stop ceiling. Its derived half-field rose from 13.7° to
  16.0° because the rear rims are larger; this is a derived vignetting estimate, not a declared field.
- Glass check: six catalog labels are OK-compatible. L14, L15 and L17 are unmatched by design.
- Live headless render: the local ∞ and 27 cm states show G2 drawn about as tall as L12, as in Fig. 1. The focus
  movement overlay shows G1 moving 21.93 mm toward the object and G2 fixed. Off-axis rays were not clicked.

### Open limitations

- L15 νd: Table 1 lists 48.8, but Table 17 implies 52.4 (S-NSL36). The listed value is kept, so the chromatic
  model of L15 uses the listed Abbe number.
- L14 (667311) and L17 (803404) have no catalog match and use Abbe-number fallback dispersion.
- Rims are figure- and trace-derived; the patent gives no effective diameters.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 23 from the rendered page: surface 19 d = 18.46; surfaces 20–21 are one plate
  (the optical member GC of paragraph [0050]), 2.85 mm, nd 1.51680, νd 64.2. The table prints no distance after
  surface 21, so the trailing gap is derived, not printed: 20.34 − 18.46 − 2.85/1.51680 = 0.001 mm (image on the GC
  rear face, as the earlier paraxial check found).
- Surface 19 now stores 18.46 mm, with `rearPlates` GC labelled N-BK7 (1.51680 / 64.17 resolves as compatible;
  S-BSL7 is 1.51633). Paraxial check against the previous data: EFL identical at all three focus keyframes; defocus
  changes by 0.00004 mm (rounding of the derived trailing gap). Physical track grows by 0.971 mm.
- `closeFocusM` 0.267 is the production MFD and was left alone. The stored keyframe coordinate still uses the legacy
  air-equivalent object-to-image distance (the physical −0.5× distance is 267.5 mm).
