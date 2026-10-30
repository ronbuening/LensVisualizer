# Audit Log — Canon EF-S 17-55 mm f/2.8 IS USM

Patent: JP 2007-108398 A, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2007108398A.pdf`.
- Example 1 row confirmed L19 / surface 34 nd = 1.74950, vd = 35.3.

### Glass corrections

| Element / surface | Before          | After             | Disposition                                           |
| ----------------- | --------------- | ----------------- | ----------------------------------------------------- |
| L19 / S34         | `NBFD13 (HOYA)` | `S-NBH51 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L19 element discussion and glass table.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 prints 2ω = 75.9°–28.7° (p. 10) and 図2 (p. 19) plots the wide end to ω = 37.97°; f·tan ω = 13.66 mm, 96% of
the 14.175 mm APS-C corner. The traced wide-end chief ray reaches 13.33 mm at 37.97°, 13.66 mm at 38.6° and the corner at
39.6°. The estimated rear rims clipped the real chief ray (solved through the stop centre) at surface 34 from 36.5° at
the wide end (12.63 mm, 89% of the corner) and from 25.0° at 28.7 mm (13.75 mm, 97%); the tele station already reached
its corner. At the wide-end corner the chief ray crosses surface 9 at 8.01, 34 at 12.22 and 35 at 12.71 mm (28.7 mm:
34 at 11.31, 35 at 11.77 mm). The rims were sized to the corner rather than to 13.66 mm because 図1 (p. 19), scaled on
the 152.0 mm wide-end track, draws the rear L18–L19 doublet at about 15 mm. Values are the corner heights plus ~0.5 mm;
the L18–L19 doublet was scaled as one unit from surface 34 (factor 1.164, which also lifts surface 33), and L5 was scaled
from surface 9.

| Surface | Before | After | Justification                                                 |
| ------- | ------ | ----- | ------------------------------------------------------------- |
| 9       | 8.0    | 8.6   | corner chief ray 8.01 mm + clearance                          |
| 10      | 8.3    | 8.9   | L5 scaled with surface 9 (chief ray 7.62 mm)                  |
| 33      | 12.5   | 14.5  | doublet scaled with surface 34 (chief ray 11.85 mm; 図1 ≈ 15) |
| 34      | 11.0   | 12.8  | corner chief ray 12.22 mm + clearance                         |
| 35      | 11.5   | 13.4  | corner chief ray 12.71 mm + clearance, doublet scale          |

The validator accepts the new values, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed and the analysis note quotes none of
these semi-diameters, so it is unchanged.

## 2026-10-30 — Original shape, hybrid and complete spectral review

### Exact source and native scale

Selected `patents/JP2007108398A.pdf`, JP2007-108398A, Numerical Example 1. Front page confirms filed 2005-10-13, published 2007-04-26, Hiroshi Endo / Canon Inc. Explicit d-line definition¶0077 and spectral publication¶0078 p10; all 35 numbered stations and three asphere sets pp10–11. Actual unnumbered Example 1 material d/g/C/F list is p15; condition Table 1 p17; Figure 1 wide section p19; corresponding aberrations Figures2/3 pp19/20. No tele section is supplied.

Native Figure 1 is1070 × 732 px at≈200 dpi, JPEG grayscale; Table 1 is1070 × 508 px at≈200 dpi. Body/numerical and material-list vector text rendered200 dpi. Higher raster magnification is upsampling. Inferred-scale rim uncertainty≈±0.5–1 mm plus schematic error. Excluded group brackets, SSP/SP, P2A/P2B leaders, rays/arrows and image plane.

### Every body and supported rim changes

Inspected all 21 modeled media, every concave end, both thin layers and all shared optical interfaces. Restore S3 clear28→33, S5 24→28 mm; source first compounds show full optical arcs, not a separate opaque shoulder. First hybrid S6A/S7 caps are coextensive14 mm (S7 13.5→14), preventing a free resin edge. S8 resolved outer shoulder14 mm preserves its11 mm clear aperture. Native contour supports the shoulder; a full 14 mm optical sphere fails the unchanged 90°/64.2° slope guard and exceeds source radius 12.277 mm.

Tight S12/S13 caps8.5 mm retained: full 9.8 mm trial gives.58 mm combined sag>.477 mm allowed across literal.53 mm gap at all source stations. Local schematic variator proportion mismatch remains; no unsupported full-height block or R/d fit. Relay S21/S22 caps11/12→12.5/12.5 mm; source rear triplet S31/S32 caps12.5/12→13.5/13.5 mm; final compound S34/S35 caps12.8/13.4→14.5/14.5 mm, matching retained S33 front14.5. These are supported optical-arc endpoint restorations, with no interface land. Remaining rims/guards unchanged.

Both resin layers remain attached across their full authored edge. E17/Resin2 type corrected to Positive Meniscus from source R129.162/R154.426 and.08 mm thickness, agreeing with its prior positive standalone focal length; no numerical prescription edit. No inferred cut, disconnected wing or opaque bonded land. R/d, all media values, three aspheres, source image gaps, stops and cams preserved.

### All 21 media and all 63 genuine spectral fields

Every prescription nd/νd pair matches pp10–11. The original explicitly publishes all 21 d/g/C/F rows on p15, including both resin rows. All 63 existing C/F/g values were compared directly with that actual rendered list and match exactly; **retained 63, removed 0**. All 21 index references now explicitly d. Eight more precise material d values are preserved in notes while rounded prescription nd stays literal. The full source table is in the analysis.

Nineteen compatible curves are qualified proxies, with no supplier, melt, chemistry or vacuum-variant proof. Both source resin media Unmatched chemically but retain complete source spectral points. Removed unsupported UV-curing chemistry and glass-molding/supplier assertions from current labels/prose. No measured source value discarded. Table 1 genuinely prints P2A θgF.578/νd37.2 and both rear positives θgF.537/νd81.5; preserve ratios and both patent APD tags. Exact ΔPg,F is not printed or fabricated. UD branding/fluorophosphate chemistry remains a production correlation.

### All-state runtime, controls and limitations

Actual-state iris and canonical APS-C14.175 mm radius sampled over65zoom ×21 focus:1,365 evaluations,200,655 aimed pupils,66,885 clear axial rays,4,095 clear chiefs. Source infinity counts49/49/14,49/49/30,49/47/26; wide/middle close49/49/16,49/49/33; tele focus positions repeat infinity. All 21 paths finite, closed, connected and untrimmed. No cut exemptions.

Wide/middle inferred close conjugates349.351338/350.676343 mm, half-focus588.743618/617.705186 mm; tele has no reconstructed finite cam. Source 35.29/39.38/47.67 mm kinF gaps retained as image spacing. Centered IS only. Unknown r16 flare-stop aperture remains omitted and can affect peripheral vignetting; zero distance is not proof of zero clipping effect. No source plate/filter is prescribed.

Separate65-position infinity aperture/first-order census stays within 3%; maximumGaussian defocus−.875720 mm at z=.765625. Source 37.95°/37.97° chiefs clear at 13.320821/13.330845 mm (93.97%/94.04% canonical APS-C radius); tele 14.35° at 14.044453 mm (99.08%). Runtime corner solves clear separately. Sparse zoom interpolation, inferred partial focus cam, source-wide-field versus generic-format difference, centered IS, physical resin/process and production correlation remain qualified.

### Historical records

Prior2026-05-20 glass relabel and 2026-09-24 field/rim entries retain actual dates. The current full original review preserves genuine source spectra and supersedes unqualified supplier/chemistry/process claims; it does not redate earlier coverage or claim an independently proven production formula.

A 2,001-radius sampling of each unchanged layer profile confirms positive signed thickness throughout its supported cap: Resin1 minimum 0.033589 mm at 14 mm and Resin2 minimum 0.061511 mm near 7.8975 mm. The internal profiles are rigid through every zoom/focus state; these sampled geometric minima are separate from the printed center thicknesses and are not production tolerances.
The Figure 2 plot prints fno 2.89, consistent with the numerical heading rounded to 2.9; the authored 2.9 target is preserved.
