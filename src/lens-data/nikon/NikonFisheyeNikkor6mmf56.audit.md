# Audit Log — Nikon Fisheye-Nikkor 6mm f/5.6

Patent: US 3,524,697, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L8 / S11 | `glass` | `Unmatched (lanthanum flint, 768/465 patent melt)` | `768465 — lanthanum flint patent melt (nd=1.76764, νd=46.5; no exact public catalog match)` | Local patent `patents/US3524697.pdf`, Example 1 row for r13 lists nd=1.76764 and νd=46.5. The stored values match. |

### Catalog-search disposition

- Searched public manufacturer/refractiveindex.info-style sources for `768465` and the exact 1.76764 / 46.5 pair.
- No defensible coefficient-backed catalog match was found; prior NBFD3-style interpretation remains rejected because it belongs to a different code family.

### Analysis sync

- Updated the L8 text and table from `768/465` to `768465`, preserving the unresolved disposition.

## 2026-08-21 — Hikari J-LASFH2 catalog-equivalent recovery

- Visually rechecked local `patents/US3524697.pdf`, PDF page 4. Example 1 prints L8 at `nd = 1.76764`, `νd = 46.5`.
- Hikari J-LASFH2, added to the project after the earlier review, evaluates to `1.766840 / 46.780` (`Δnd = -0.000800`, `Δνd = +0.280`).
- Relabeled L8 as a qualified J-LASFH2 spectral proxy while retaining patent code `768465` and leaving Nikon's production melt unspecified. The rejected NBFD3 identification remains rejected; geometry and APD metadata are unchanged.

## 2026-10-04 — Patent filter left out as optional

- Patent check (US 3,524,697, first embodiment): r8 and r9 are both flat (element L5), d8 = 1.9, nd 1.51743, νd 58.5,
  with 3.2 before and 6.4 after in patent units, just ahead of the stop. Fig. 1 draws it.
- The patent says "L5 is an optional filter". Filters the source calls optional are not modeled, so the file is
  unchanged: no plate, and the r7-to-r10 gap keeps the plate's air-equivalent thickness (t/n), which preserves the
  published first-order values. A literally empty slot would be 0.39 mm longer at the file's scale.
- The header now gives that reason in place of "built-in filter excluded per project data rules".

## 2026-10-30 — Fresh source figure, physical filter and glass review

Directly inspected `US3524697.pdf` PDF page 1 Figure 1 at 600 dpi/native 300 ppi, page 4 complete first embodiment table and explicit d-line definition, and page 3 statement that L5 is optional. Reviewed all powered faces and cemented boundaries. The existing .599723199 dimension scale is retained. The source-included optional plate is now drawn: pre-air3.2, glass1.9(nd1.51743/νd58.5), post-air6.4 patent units. Scaled values are1.9191142368,1.1394740781,3.8382284736mm; the latter splits.2111716851 before the unchanged stop and3.6270567885 after. Nine powered elements/six optical groups remain; including the filter makes10modeled elements/seven physical groups.

Calibrated Figure 1 scale is approximately22.8px/mm at 600 dpi/11.4nativepx/mm from first/last axial vertices. The first body is about38mm in semi-diameter, with rear cap q≈.47±.004(native half-height≈425px). Literal38mm fails even at max rear cap.9R=16.38468: front sag15.964 exceeds rear landz12.968. Its exact zero-edge outer bound is34.812203. Adopted S1 continuouscap34.5 and S2clear16.35+land34.5(q=.474) leave positive.196777mm edge; no limit is relaxed. L2's source body≈16.1mm and q≈.50±.008 are represented by S3continuouscap16.1/S4cap7.65+land16.1(q=.475), with the rear cap constrained below.9R7.718976. Continuous common rims, without cemented-interface lands, are restored to6.7mm on S5/6/7 andS8/9/10,7.8mm onS11/12,and10.1mm onS13/14/15; source native strokes/shape asymmetry set roughly.1–.3mm height uncertainty. The filter's inferred4.5mm radius follows its source height and clears the checked beam. No further concave cap trim is resolved.

All ten media including the optional filter match source nd/vd. Every current curve is available and qualified; no production supplier/melt is identified. The filter's J-K3 near proxy differs byΔnd+.0008/Δν+.32; N-FK5 differs from the older source crown by−.00099/+.11, andJ-LASFH2 from sourceL8 by−.0008/+.28. No source C/F/g or partial-dispersion values are supplied or invented; APDfalse means no claim, not a proved normal partial dispersion.

All powered R/d, scale, nominal5.6 and fixed axial stopz36.55439 remain. Restoring refractive material before that stop automatically changes the existing f-number-rule iris1.505272246→1.481267752mm, with no authored diameter/f-number recalibration. EFL6.000000669→6.000001583/BFL10.711298133→10.711299874mm differ only by retained powered-value rounding; physical imageZ85.94782→86.336366789. There is no finite gap law. All 25 sampled axial pupil rays pass; full-vector25-sample fields30°–75°now pass25/25 versus22/16/0/0baseline at30/45/60/75. At85°–110°generic chief bracketing still fails, so220° coverage is not validated. Surface/canonical/circle/f5.6 aperture checks pass; nine actual SVG states viewed with finite paths/zero automatictrim. Shared glass suites pass3 files / 94 tests. Exact structural/source-gap snapshots are persisted for coordinator review.
