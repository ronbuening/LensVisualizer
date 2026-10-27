# Audit Log — ZeissSonnar35mmf2SonyDSCRX1

Patent: `patents/US20140071333A1.pdf, p. 11, Fig. 13 / Example 4`

## 2026-10-03 — Source rims, glass and display metadata

| Element / surface | Field | Before | After | Evidence |
|---|---|---|---|---|
| Maker/display | maker/name | Zeiss / ZEISS SONNAR | Sony / SONY ZEISS SONNAR | Sony fixed-camera association follows the RX1 correlation; ZEISS branding is retained. |

All eight visible glass elements resolve to compatible curves. Inspected Fig. 13 at 600 dpi at infinity, intermediate and closest focus. Automated G4/G5 readings pick up neighboring G7 ink; no supported enlargement follows. Retained the focus-bundle rims and the explicit inferred production correlation. Source rear plates remain physical, separately represented plates; they do not establish measured dispersion for the two unresolved plate materials.

All catalog names describe coordinate-compatible spectral proxies, not production supplier or melt identities. Semi-diameters remain inferred; leader lines, rays and mechanical ink were excluded from the figure interpretation.

## 2026-10-03 — Local diagram, motion and metadata follow-up

Rechecked local infinity/close diagrams against exact Fig. 13 and its optical curve endpoints, excluding the G4/G5 and G7 mounting shoulders. Retained all visible-element SDs; the surrounding rectangular blank edges do not support larger optical rims. Shapes, five aspherical surface tags, cemented G4–G5 pair and GR1–GR4 labels agree.

Travel preserves the three published stations: D2 7.33 → 6.04 → 4.08, D7 7.86 → 7.56 → 7.11, D12 14.60 → 16.19 → 18.60 mm. GR2 plus stop and GR3 move objectward; GR1 and GR4 remain fixed. No zoom. Fixed-lens camera / 135-full-frame metadata retained.

Backfilled FL2 with a BK7G18 spectral proxy (catalog 1.51975 / 63.58 vs source 1.519 / 64.2) and FL3 with N-BK7 (1.5168 / 64.17 vs source 1.5168 / 64.2). Catalog consistency and coordinate guards pass. FL2's chemical composition or radiation resistance is not identified by this match. FL1 has no coordinate-compatible catalog entry and is explicitly unresolved. All eight visible elements remain covered; including plates, catalog coverage becomes 10/11 instead of 8/11. Source dimensions, gaps, nd and νd are unchanged. Corrected the analysis's obsolete statement that catalog curves were not used.

Batch assignees are already consolidated as Carl-Zeiss-Stiftung, Voigtländer & Sohn AG, Cosina Co., Ltd. and Sony Corporation. Reviewed the catalog assignee registry: later Carl Zeiss AG, Voigtländer AG and Sony Group Corporation, and the historical Schneider legal styles remain distinct with their sourced lineage links; they are not spelling duplicates. No additional release entry was added.

## 2026-10-27 — Rimmer localization audit (asphere data)

Source: `patents/US20140071333A1.pdf`, Numerical Example 4. Rendered PDF p. 24 (printed p. 10),
Tables 13–16; p. 25 (printed p. 11), Table 16 continuation and Table 17; p. 19, ¶¶0066–0068;
p. 11, FIG. 13; p. 12, FIG. 14. Coefficient digits and exponents were inspected at 400 dpi.

| Surface / field | Before | After | Evidence / reason |
|---|---:|---:|---|
| 10A `K` | −0.25312 | −25.312 | Table 14, row 10, K column prints **−2.5312E+01**. Catalog exponent transcription error. |
| 8 `sd` | 12.8 mm | 11.7 mm | Retain G4's square rim shared with cemented surface 9; FIG. 13. |
| 9 `sd` | 12.8 mm | 11.7 mm | G5's front face shares the square rim with 10A; FIG. 13. |
| 10A `sd` | 12.8 mm | 11.7 mm | Printed prescription first slope zero at 11.7909106 mm; cap below it, rounded down to 0.1 mm. |
| 14A `sd` | 18.3 mm | 18.3 mm (kept) | Slope zero at 14.3048929 mm on a nearly flat surface; the printed Y = 21.63 mm corner chief ray needs 17.68 mm, so the SD procedure's "When to stop" rule keeps the rim (coordinator review reverted a 14.3 mm cap that clipped coverage to 82%). |
| Analysis 10A polynomial departure at rim | +0.49208 mm at 12.8 mm | +0.27535 mm at 11.7 mm | Same A4–A10; new radius. Sphere-relative departure is +0.63078 mm with printed K. |

Every remaining Table 14 K/A/B/C/D cell agrees with the file, including zero conics and the signs of all
polynomial terms. ¶¶0067–0068 define A/B/C/D as powers 4/6/8/10 with the standard `(1+K)` denominator;
there are no omitted odd terms or scale conversion. All Table 13 R/d/nd/vd rows, including the physical
rear plate stack, and all Table 16 spacing states agree. Table 15 prints infinity f=33.99 mm, F/2.05,
half-angle 32.48°; Table 17 gives Y=21.63 mm and TL=60.00 mm. Model EFL remains 34.02619 mm and track
60.010 mm. The correction is literal transcription, so no source erratum is asserted.

The initial failing-field meridional rays show smooth pupil-dependent transverse error, rather than a
turnover crossing at the first rejected field (17.4°). At that field the negative marginal stop ray has
ey=+1.5844 mm and crosses 10A at 9.67 mm. The source K correction alone changes the ghost-traced on-axis
LSA at pupil fractions 1 / 0.85 / 0.7 / 0.5 from −2.342 / −1.680 / −1.138 / −0.580 mm to
+0.055 / +0.067 / +0.063 / +0.044 mm. FIG. 14's spherical plot has a ±0.4 mm scale and a small positive
curve. Before rim capping, the corrected corner close-ray focus shifts are T +0.055 mm / S −0.112 mm,
versus −6.876 / −2.938 mm before correction; distortion is −2.839% versus −8.540%. The corrected trends
and scales are consistent with FIG. 14. These are qualitative comparisons, not fitted chart values.

The turnover triage samples are coarse: its approximately 11.81 mm estimate would round to 11.8 mm, but
the exact slope at 11.8 mm is already positive. Bisection of the runtime sag slope gives 11.7909106 mm,
so the final cap is 11.7 mm. Final 10A and 14A slopes have their original signs. With printed K, their
on-axis F/2.05 ray heights are only about 6.51 and 1.55 mm. The aperture check admits the stated beam;
additional sampled on-axis rays at both finite source focus states also remain within the caps. These
finite-state samples check clearance only, not finite-conjugate localization.

G7 is stepped in FIG. 13, so 13A has no supported turnover reduction and retains 18.3 mm. Its polynomial
departure remains +0.39104 mm. The triage's approximately 10.34 mm sphere-relative number is not a usable
departure: that height exceeds |R|=17.604 mm for the reference sphere. It does not establish a coefficient
error. Inspected a separately plotted exact-sag silhouette against FIG. 13: the G4-G5 reduction keeps
their common square rim, while the 14A cap visibly truncates the large rear G7 extent in the source.
The latter is a conservative polynomial-domain bound, not a figure-derived production rim.

Runtime surface validation accepts the stored data. The on-axis aperture audit admits F/2.05, the image-circle
floor reports no undersized surface, and exact chief-ray coverage reaches the full 21.65 mm corner with 14A at
18.3 mm. A 14A cap at 14.3 mm would have stopped coverage at 17.67 mm (27.9°), short of the printed 21.63 mm.

After the edits, Rimmer RI is supplied through the 24.9° sample (0.725, maxDev 0.0101); at 27.7° and 30.4° it
is unavailable with `cosine-map-folds` (maxDev 0.017 and 0.035), and at the 33.2° corner with
`rays-not-localized` (maxDev 0.054). The K-only replay shows the same, so the remaining outer-field failure
does not come from the rims. The source correction is settled;
full-field RI is still unresolved. Queue separate review of polynomial-domain clipping versus the source's
large rear extent, and of the cosine-map refusal. No further prescription change is supported by this pass.

The data header and analysis now describe the exponent correction, caps, recomputed departures and remaining
field limitation. Used the kit's `vprobe.mjs`, `triage.mjs`, `rayinfo.mjs`, `aberr.mjs`, the LSA helper, and
the direct surface/aperture/image-circle/field-coverage scripts. Repository-wide gates and the production UI
review remain with the coordinator under this assignment's scope.
