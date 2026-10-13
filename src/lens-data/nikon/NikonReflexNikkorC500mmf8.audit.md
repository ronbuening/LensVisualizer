# Audit Log — Nikon Reflex-Nikkor·C 500mm f/8

Patent: US 3,632,190, Example 1

## 2026-06-04 — Rear corrector and primary-center diagram audit

### Phase 2 — Retained-Information Audit

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / surfaces `8`-`9` | Explicit render span | L3 could resolve against annular primary surface `3` and appear full-diameter | L3 now spans `8` to central duplicate surface `9` | Patent Fig. 1 and Table 1 show L3 as the small positive rear-corrector member in the clear primary center, with R9 = R3. |
| M1 / surfaces `3`-`4M` | Primary annulus | Shared primary blank could be represented by the annular shell alone | Annular primary renders only the silvered shell from `3` to `4M` | The patent drawing shows only the outer part of the primary is silvered. |
| L4 / surfaces `9`-`10` | Clear primary center | Central surfaces could be trace-only | L4 now renders as a clear central plug with the same glass, axial depth, and R3/R4 curvature as the primary blank | The patent describes one physical primary blank with an uncoated central portion filling the mirror hole. |

### Phase 4 — Analysis Sync

- Updated the analysis note to clarify that L4 is the clear central zone of the primary blank, rendered as a central plug while the silvered primary remains annular.

## 2026-08-18 — Front corrector K5 coefficient assignment

- Visually rechecked `patents/US3632190.pdf`, PDF page 5, Example C. The front corrector remains patent code `525596`, `nd = 1.52559`, `νd = 59.6`.
- SUMITA K5 is within the runtime catalog-equivalent window (`Δnd = -0.002010`, `Δνd = 0.00`).
- Relabeled the corrector as a K5 optical equivalent while leaving the production supplier unspecified. No folded-path or prescription geometry changed.

## 2026-09-29 - Zoned-blank medium check

- Real rays traced EFL ≈ 459 mm against the header's traced 500.000 mm. The prescription and layout are correct: an
  independent lab-frame paraxial trace of the stored geometry gives EFL 500.00 mm with focus at z = 172.62, the
  stored image plane, when the ray leaving the silvered primary through `3` enters air.
- The viewer's tracers resolved the medium entered on a reverse crossing of `3` from the surface before it in array
  order, the clear central plug `9` (`nd = 1.54072`), so the returning beam stayed in glass and skipped the exit
  refraction. The tracers now take that medium from the last earlier surface whose clear zone overlaps the annulus,
  here air. Viewer real rays now give EFL 500.0 mm with focus at z = 172.6. No data changed.
