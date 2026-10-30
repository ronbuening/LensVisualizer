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


## 2026-10-29 — F-mount surface and glass reinspection

Fresh direct Figure 1 review: `patents/US5315441.pdf`, PDF page 2, rendered at 600 dpi and rotated. The embedded page raster is 300 dpi. The approximately 2840 px S1–S19 span at 600 dpi over 82.75 mm gives about 34.3 px/mm, or 17.16 native px/mm. Every convex/concave face and all three cemented boundaries were inspected.

Added opaque rim extensions at S2 (22.3 mm optical cap →27.5 mm drawn rim) and S6 (15.5→18.0 mm), restoring the resolved rear seats of L1 and L3. S12 has a separate concave air-face seat on L6a: in the 600 dpi detail its radial cap/edge spans are approximately 493/521 px, q≈0.946±0.008 at native resolution (edge≈261 native px; one-pixel bound ±(1+q)/edge). On stored outer sd 14.8 mm this gives an approximately 14.0 mm cap. Adopted depth 4.69 mm gives cap 14.011880 mm and land 0.788120 mm. Furthest traced wide-open beam 13.117092 mm at focus 0.15/field 11.7604° clears it by much more than the required 0.05 mm.

S7’s geometry-constrained 14.3 mm cap and L8a’s 17.0 mm front/cemented limit remain unchanged: their larger drawn curves have no separately resolved air-face seat that would justify hiding the constraint with a flat extension. Cemented steps at S8/S13/S18 cannot use the air-boundary feature. Other faces retain their existing caps; no unsupported shallow near-plane cuts are added. The S16A optical cap, conic and polynomial, and every source radius/gap remain unchanged.

Fresh source glass review: `patents/US5315441.pdf`, Embodiment 1 Table 1 and equation on PDF page 12 (columns 5–6). All 11 lens-media nd/νd pairs match the source and retain its d-line convention (587.6 nm). No source θgF/partial-dispersion, extra spectral-line indices or glass-dispersion coefficient table is published; no APD flag or spectral datum is inferred from the source. Refreshed the S-LAH66/S-TIH4 numerical annotation rounding to the current resolved curve; no selected curve changed.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.516800 / 64.1 | BSC7 |
| L2 | 1.772790 / 49.4 | S-LAH66 |
| L3 | 1.487490 / 70.4 | S-FSL5 |
| L4a | 1.518600 / 69.9 | J-PKH1 |
| L4b | 1.514540 / 54.6 | KF3 |
| L5 | 1.804110 / 46.5 | S-LAH65V |
| L6a | 1.748100 / 52.3 | E-LAKH1 |
| L6b | 1.755200 / 27.6 | S-TIH4 |
| L7 | 1.772790 / 49.4 | S-LAH66 |
| L8a | 1.804110 / 46.5 | S-LAH65V |
| L8b | 1.860740 / 23 | J-SFH2 |

Coverage: 11/11 modeled media, representing 11 physical lens elements. All available curves remain qualified spectral proxies; source coordinates are authoritative, and supplier/melt identity is unconfirmed. No tolerance is relaxed.

Verification: focused surface/inferred-beam and image-circle audits, aperture census, and actual native SVG shapes/render diagnostics at nine focus/zoom states (prime-lens zoom states coincide). No hidden rim trim was observed. Current-label glass resolver, `assertCatalogConsistent()` and the shared dispersion/partial-dispersion suites pass (2 files, 93 tests). Full repository gates are recorded by the coordinator at commit time.
