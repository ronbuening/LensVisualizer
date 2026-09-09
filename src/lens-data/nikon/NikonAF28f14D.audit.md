# Nikon AF Nikkor 28mm f/1.4D Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US5315441.pdf`, Embodiment 1 / Table 1 and FIGS. 1-4.

### Prescription, Focus, And Asphere

- The data file remains aligned to Embodiment 1: `f = 28.6208 mm`, `FNO = 1.41`, `2ω = 75.37°`, and the production-matching 11 element / 8 group layout.
- Table 1 confirms the stored floating-focus variables: `d2 = 13.9000 → 10.3752`, `d11 = 12.5500 → 12.1975`, `d16 = 0.5000 → 0.8525`, and `Bf = 38.1031 → 41.6279` for `β = -1/10`.
- The stop is not a separate patent surface. The current inserted `STO` position remains an estimate from FIG. 1 and the entrance-pupil geometry, consistent with the existing data-file note.
- Surface 16A remains the only asphere. The stored coefficients follow the patent's standard conic convention and no additional aspherical surfaces are published for Embodiment 1.

### Glass And APD

- Relabeled L4a from a generic phosphate crown to coefficient-backed `J-PKH1 (Hikari, 519699)`. The patent row is `nd=1.51860`, `νd=69.9`, matching the Hikari catalog entry within rounding.
- L4b (`nd=1.51454`, `νd=54.6`), L6a (`nd=1.74810`, `νd=52.3`), and L8b (`nd=1.86074`, `νd=23.0`) remain unresolved/current-catalog gaps after this pass. Their existing non-exact labels remain more accurate than forcing a near catalog glass.
- No APD row is introduced. The patent gives only `nd`/`νd` values and aspherical coefficients; it has no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` table.
- High-index status remains descriptive for the lanthanum and dense-flint rows; the only material flag in this file is ordinary `apd: false`.

### Semi-Diameters

- US 5,315,441 does not publish per-surface clear apertures or effective diameters for Embodiment 1.
- Current SDs remain documented renderer estimates. They make rational sense against FIG. 1: a large front retrofocus meniscus, broad G2 positive cell, a stop constrained near `sd = 13.6 mm`, and re-expansion through the aspherical G3/G4 rear groups without exceeding sag or edge-thickness limits.

### Verification

- Pending batch verification after the current Nikon audit pass.

## 2026-07-29 Glass Coverage Follow-up

- Relabeled L8b from an unresolved very-dense-flint note to coefficient-backed Hikari J-SFH2.
- J-SFH2 retains the stored `nd=1.86074`; its published `vd=23.08` is within 0.08 of the patent's rounded `vd=23.0`.
- L4b and L6a remain unresolved. No prescription, asphere, focus, or SD values changed.

## 2026-07-30 SUMITA KF3 coefficient recovery

- SUMITA's discontinued-inclusive KF3 vendor polynomial resolves L4b at the exact `1.51454 / 54.6` coordinate.
- Relabeled L4b as a KF3 optical equivalent while leaving the production supplier unspecified.
- L6a remains unresolved; no prescription, asphere, focus, or semi-diameter values changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Hikari's official 2022-07-01 catalog supplies a discontinued E-LAKH1 row at code `748523`,
  `nd = 1.748099`, `νd = 52.304982`, exactly reproducing L6a's patent coordinate within printed precision.
- Relabeled L6a as a supplier-neutral E-LAKH1 catalog equivalent and synchronized the analysis. This supersedes
  the earlier current-catalog no-match disposition; no prescription, asphere, focus, APD, or semi-diameter values changed.

## 2026-09-08 — Source audit; local live check pending

Original US5315441.pdf, Embodiment 1: Table 1/equation p.12 and Figure 1 p.2 at 600 dpi. All nineteen source radii, thicknesses and glass coordinates retained. Corrected source conic k=1.974 to engine K=0.974; polynomial terms retained. Source FNO1.41 and full field75.37 surfaced. Independent matrix beta−0.1000181 gives near distance0.397032626m, replacing0.35m; source variable gaps preserved. G1 fixed, G2/stop and G4 objectward3.5248mm, G3 objectward3.8773mm.

Stop inferred at4.65mm after S11; full D11 remains12.55→12.1975mm, partial readout relabeled Stop–G3. Optical rims refined against82.75mm vertex span. S7 and L8a retain explicit numerical-geometry constraints instead of conflicting larger figure trials. Corrected L4b/L8a shape labels, isolated element focal lengths and unsupported glass/process claims. No cover/filter source rows.

Surface and image-circle checks passed; three source regression tests pass, including independent sag, magnification and fixed-image movement with no hidden rim trimming. Production infinity baseline inspected. Local live verification is pending because CUA reports the Mac locked; not marked complete. Batch21–30 full gates/commit pending.

## 2026-09-09 — Live verification completed

Local infinity, near, midpoint, f16 and movement chart verified. Near40cm: D2=10.38, Stop–G3=7.55, D16=.85, BF=41.63mm. Midpoint79cm/EFL29.04mm; f16 stop2.59mm. G1 fixed; maximum group travel3.88mm. Earlier lock blocker resolved. Full batch validation passed2877 tests, typecheck, format, lint, glass checks and build; included in batch21–30.
