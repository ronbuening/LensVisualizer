# Audit Log - CANON RF 20mm f/1.4 L VCM

Patent: US 2025/0389929 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US-20250389929-A1.pdf`. The Numerical Example 2 table publishes only surface number, radius, thickness, refractive index, and Abbe number; it does not include clear apertures or effective diameters.
- Fig. 3 shows the corresponding fast wide-angle section: a large three-negative front portion within L1, a stop near the middle of L1, a moving positive L2 focus group, and a smaller negative rear L3 group.
- Stored SDs follow that envelope: L1 stays broad at roughly 13.4-15.5 mm before the stop, the stop is 13 mm, L2 re-expands through 15-18 mm, and the final L3 doublet remains in the 16.8-18.4 mm range.
- No SD values changed. Current values remain renderer-conservative inferred apertures constrained by sd/|R|, aspherical slope, element SD ratio, edge thickness, and signed cross-gap sag intrusion.

## 2026-07-30 - Unsafe named-token cleanup

- Rechecked Numerical Example 2 G4 at nd=1.75500 and νd=52.3. The patent does not name a supplier.
- Replaced the unresolved `H-LaK53A (CDGM)` attribution with Schott `N-LAK33B`, the coefficient-backed catalog equivalent that exactly reproduces the 755523 coordinate.
- Synchronized the analysis and source list; no prescription geometry or semi-diameter changed.

## 2026-07-30 - H-ZBaF4 compatibility rejection

- Added CDGM H-ZBaF4 to the project catalog from CDGM's June 2022 official datasheet: code `664355`, `nd = 1.664260`, `νd = 35.48`, `PgF = 0.5895`, and `ΔPgF = +0.0042`.
- Rechecked G10's patent Table 2 row at `nd = 1.66565`, `νd = 35.6`, `θgF = 0.5824`, and `ΔθgF ≈ -0.0026`. Although H-ZBaF4 is close in the d-line coordinate, its partial dispersion has the opposite sign and is not a safe spectral substitute.
- Marked G10 and the repeated-coordinate G16 row explicitly unmatched so the resolver preserves the patent Abbe/partial-dispersion fallback instead of applying H-ZBaF4's incompatible Sellmeier curve.
- No prescription geometry or semi-diameter changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 2's data (PDF p. 29) print f = 20.60 mm, ω = 42.54° and Y = 18.90 mm (87% of the 21.65 mm full-frame corner);
the angle is the paraxial atan(Y/f), and FIG. 4A (PDF p. 5) plots to ω = 46.4°, where the traced chief ray reaches
18.90 mm. The estimated front rims clipped the real chief ray (solved through the stop centre) at surface 1 from 40.9°,
leaving the field at 16.15 mm (75% of the corner). Passing Y needs surface 1 ≥ 17.76 and surface 2 ≥ 14.42 mm; the corner
(51.6°) needs surface 1 ≥ 19.91, surface 2 ≥ 15.59 and surface 3 ≥ 14.74 mm, and every other rim already clears it
(surface 27 at 16.45 of 16.8 is the closest). The rims were sized to the corner because FIG. 3 (PDF p. 4), scaled on the
117.5 mm surface 1-to-image track, clearly draws them larger: surface 1 ≈ 21.7, surface 2 ≈ 16.9, surface 3 ≈ 16.9 and
surface 4A ≈ 14.9 mm. That measurement supersedes the 2026-07-04 review's reading of a 13.4–15.5 mm L1 envelope. G1 and
G2 are strong menisci, so partners were not scaled; surface 2 was set 0.4 mm above its 16.1 mm floor-plus-clearance
value, still under the figure, to keep G1's front/rear ratio within the 1.25 the analysis note cites.

| Surface | Before | After | Justification                                                                                    |
| ------- | ------ | ----- | ------------------------------------------------------------------------------------------------ |
| 1       | 15.5   | 20.5  | corner chief ray 19.91 mm + clearance (FIG. 3 ≈ 21.7)                                            |
| 2       | 13.4   | 16.5  | corner chief ray 15.59 mm + clearance, G1 ratio kept ≤ 1.25 (FIG. 3 ≈ 16.9)                      |
| 3       | 13.8   | 15.3  | corner chief ray 14.74 mm + clearance (FIG. 3 ≈ 16.9); surface 4A (chief ray 12.84 mm) unchanged |

The validator accepts the new values, the traced field now reaches the corner with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed, and the analysis note quotes none of
these semi-diameters, so it is unchanged.

## 2026-10-30 — Original shape, bonded-media and spectral-convention follow-up

Preserved the actual July 4 / July 30 / September 24 prior dates above. Directly rechecked `patents/US-20250389929-A1.pdf`, Numerical Example 2: source rows PDF pp. 28–29 (printed 11–12), aspheres/finite table p. 29, single-lens partials pp. 29–30, Fig. 3 p. 4 / sheet 3, Fig. 4A/B p. 5 / sheet 4, Tables 1–2 pp. 38–39. Reopened reproducible native-outline and partial-convention defects; earlier notes are historical evidence, not a fresh source inspection.

All 28 R rows, 26 fixed d rows, three source aspheres, stop rule and complementary D18/D25 focus gaps remain unchanged. The fresh Fig. 3 inspection supersedes the older short conservative-envelope description. Native source is 2560 × 3300 at approximately 300 ppi; the rotated 117.50 mm track spans about 1,925 pixels (16.38 px/mm), with practical ±0.7 mm rim uncertainty. Upsampling adds no evidence. Excluded leaders, brackets, stop and image-plane ink.

| Clear cap | Before mm | Adopted mm |
| --------- | --------: | ---------: |
| 1         |      20.5 |      22.65 |
| 3         |      15.3 |      17.65 |
| 4A        |      13.8 |       15.6 |
| 5         |      14.6 |      14.05 |
| 6         |      14.3 |      14.05 |
| 7         |      15.2 |      15.55 |
| 8         |      14.6 |      15.55 |
| 9         |      15.2 |      15.55 |
| 10        |        15 |      16.35 |
| 11        |        15 |      16.35 |
| 12        |      14.1 |      15.55 |
| 13        |      14.1 |      15.55 |
| 15        |      13.2 |       14.3 |
| 16        |      12.8 |       14.3 |
| 17        |      12.8 |       14.3 |
| 18        |      13.2 |       14.3 |
| 19        |        15 |      12.75 |
| 20        |        14 |      12.75 |
| 21        |      14.2 |      12.75 |
| 22        |        15 |      15.25 |
| 23        |        15 |      15.25 |
| 24A       |        18 |      16.55 |
| 25A       |        18 |      16.55 |
| 26        |      18.4 |      16.55 |
| 27        |      16.8 |      16.55 |
| 28        |      18.4 |      16.55 |

S2 retains clear 16.5 and gains outer 22.65; S4A clear 15.6 gains outer 17.65. These are free-end shoulders, not bonded interface lands. The source-like S2 clear 17.65 trial gives combined sag about 5.070 mm in physical air 5.030 mm, exceeding unchanged guard 4.527 mm and physically overlapping S3. Rejected it; retain the cap-anchored wall and disclose its axial-piston mismatch. All concave ends, four cemented assemblies and the 0.70 mm source high-partial layer were inspected. No source R/d fit, opaque bond, disconnected resin wing, inferred cut or unsupported equal-height block was introduced. Layer minimum sampled edge thickness is 0.097327 mm, connected throughout. No source filter/plate is tabulated; general material options do not identify this medium's chemistry.

All 16 nd values and source Abbe coordinates were verified at the explicit d reference of ¶0174, p. 26 (d 587.6/F486.1/C656.3/g 435.8 nm). Table 2 Example 2 supplies six finer νd values consistent with primary one-decimal rounding: G3/S5 94.66→94.7; G9/S16 20.08→20.1; G10/S17 35.64→35.6; G11/S19 and G13/S22 81.65→81.7; G12/S20 29.74→29.7. G16 retains printed 35.6, without borrowing G10's precision/partial. Thirteen existing curves remain qualified proxies; G9/G10/G16 remain unresolved. G9's BR/organic label is now a production correlation with chemistry/cure unspecified.

| Medium | Genuine θgF | Previous dPgF | Corrected engine dPgF |
| ------ | ----------: | ------------: | --------------------: |
| G5     |      0.6122 |             0 |           +0.01011360 |
| G9     |      0.7782 |      +0.14427 |           +0.16817456 |
| G10    |      0.5824 |      −0.00255 |           −0.00145352 |
| G12    |      0.5951 |      −0.00468 |           +0.00132268 |

The four absolute ratios are genuinely printed (single-lens data and Table 2), and the active runtime normal reconstructs each exactly. The paper's own conditional residuals remain in prose, not directly stored as the engine's differently defined deviation. ¶0079/¶0115 pp. 22–23 and Table 2 support retained patent APD tags. No invented individual line indices or unprinted per-position partials were added. All source index/Abbe/reference/partial values and qualified proxy labels are synchronized. Printed f 20.60 replaces computed 20.598 in catalog design metadata only.

The printed finite row says first-object 300.024 mm at β−0.1, but literal gaps give first-object 182.490667 mm, object-to-image 299.990667 mm, β−0.100014. Taking first-object 300.024 literally instead needs image gap 17.701874 mm and β−0.062793. This unresolved reference-plane conflict is in source.errata; preserve all gaps and the 117.50 mm track. The ¶0136 stationary L1/L2 wording versus abstract/¶0032/Claim 1 L1/L3 is also qualified. No source correction is asserted from numerical plausibility.

Narrow surface/image-circle/aperture checks pass. Iris remains 12.993901 mm, paraxial F1.46 versus real collimated EFL/input-diameter 1.525873; nominal input ray height 13.645794 is not its physical radius. Actual source-height root 18.90 at 46.402290° clears, matching Fig. 4A 46.4; tabulated 42.54 is a paraxial-field convention. Generic 21.65 at 51.624349° clips S28 (16.855223>16.55), leaving 98.209% coverage. The source finite plot 46.7° is retained separately from the current Gaussian inverse 47.244501°.

Actual finite-object grid: 101 focus controls × three fields × 97 pupils = 29,391 rays, 100 positive finite controls/no virtual, all axial clear, one infinity generic-corner chief restriction, 7,214 ordinary clips, 204 bounded first-surface and 274 bounded S2 cap misses, zero unexplained/unaimed. Separate image-plane 300.024/focus supplement: 7,280 ordinary clips/498 bounded misses; literal first-vertex 300.024/focus: 7,312/596. Each retains the same infinity chief restriction. Ordinary finite grids use paraxial object-height scaling, not actual inverse sensor-edge targeting.

Inverse finite edge check: 200 unclipped roots all converge, source 18.90 chiefs all clear, 87 generic 21.65 chiefs at focus 0.01–0.87 clip S28 and 13 at 0.88–1 clear. Maximum residual 0.000000952 mm. Of 19,400 pupil rays, 12,873 clip ordinarily and 1,868 are independently bounded S1/S2 cap misses. Source-height subset: 5,288 clips/510 bounded misses. Endpoint source-height grid: 582 rays, clear axial/chief rays, 132 clips/seven bounded misses. Clear chiefs are not full-pupil clearance.

Bounding-sphere vector angular check: 873 source-range rays, clear axial/chief rays, 211 ordinary clips/15 bounded misses; nine separate 80°/89°/90° chief seeds unbracketed. Angular launch at nonzero focus stays collimated, distinct from explicit finite-object probes. All 101 contour states contain 16 connected/closed/finite paths and zero hidden renderer trim; actual final SVGs at infinity/middle/close were compared with native Fig. 3. No inferred cuts. Retained source-cap/piston, finite-reference, generic-corner, marginal and production-correlation limitations are explicit in the [analysis](CanonRF20mmf 14LVCM.analysis.md).

## 2026-10-31 — Bounded positive-catalog search; partial-dispersion rejection retained

This catalog follow-up reuses the unchanged Numerical Example2 source-pair/partial verification dated October30 above; it does not claim another figure or whole-patent inspection. The existing catalog and complete primary OHARA May2026, SUMITA August2026, Hikari June2025 and CDGM September2026 records, plus retained official HOYA July2026 bytes, were screened for source-compatible G10 nd1.66565/νd35.64. The source θgF.5824 remains authoritative.

The closest partial among coordinate-compatible published candidates is legacy OHARA BAH22 (θgF.58480057, residual+.00240057); SUMITA BASF2 gives.58588979 (+.00348979), Hikari J-BASF2 .58901592 (+.00661592), and CDGM H-ZBaF4 .58949003 (+.00709003). These misses exceed the printed four-decimal θ interval, and their normal-line sign/size does not establish the source glass. No new row is added merely to pass the broad nd/νd window or replace an authoritative published partial with a catalog value.

G9's high-partial source layer remains unresolved in composition with genuine source dPgF retained. G16 repeats the coarse G10 coordinate but has no separately published partial; no G10 θ or finer Abbe precision is borrowed for it. Retain both unresolved material dispositions and all source data, curves, geometry and controls. Source-number fidelity, catalog availability and production identity remain separate conclusions.
