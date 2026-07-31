# Voigtländer Color-Skopar 35mm f/3.5 Aspherical — Stage 4 Independent Audit

## Job card

| Field | Fixed value |
|---|---|
| Patent | JP 2026-121744 A |
| Lens | Voigtlander Color-Skopar 35mm f/3.5 Aspherical |
| Embodiment | Example 3 / 第3実施形態 |
| Output stem | `VoigtlanderColorSkopar35mmf35Aspherical` |

The selected patent and embodiment were not substituted. The independent pass began from the patent pages and a fresh prescription entry. The Stage 2 audit and verifier were consulted only after the Stage 4 matrix, conjugate, Petzval, asphere, geometry, and glass results had been established.

## Fresh source extraction

The critical Example 3 sources are:

- Page 13, Table 9: f = 35.74 mm, Fno = 3.58, half field = 30.75°, TL = 40.03 mm, printed TLo = 21.83 mm, printed BF = 18.20 mm, f2a = -73.89 mm, f2bp = 31.91 mm, Sag2b = 3.44 mm.
- Page 14, Table 10: the complete surface prescription, d-line indices, Abbe numbers, and rounded ΔPgF values.
- Page 15, Table 11: D0 = infinity / 450.00 mm and D11 = 15.11 / 18.20 mm.
- Page 15, Table 12: K and A4-A12 for surfaces 10 and 11.
- Page 9, equation 1: the standard conic-constant sag form with `1 - (1 + K) C²H²`; no K/κ conversion is required.
- Page 18, Figure 5: the six-element layout and strongly curved image-side negative meniscus.

Freshly transcribed surface sequence:

| Surface | R (mm) | D (mm) | nd after | νd | ΔPgF |
|---|---:|---:|---:|---:|---:|
| 1 | 13.403 | 3.11 | 1.91082 | 35.25 | -0.003 |
| 2 | -179.549 | 0.90 | 1.80809 | 22.76 | +0.021 |
| 3 | 15.453 | 3.10 | 1.00000 | — | — |
| STO | infinity | 2.64 | 1.00000 | — | — |
| 5 | -14.459 | 0.90 | 1.61340 | 44.27 | -0.005 |
| 6 | 42.264 | 2.45 | 1.88300 | 40.81 | -0.009 |
| 7 | -42.264 | 0.25 | 1.00000 | — | — |
| 8 | 31.099 | 3.67 | 1.49700 | 81.61 | +0.037 |
| 9 | -31.099 | 5.80 | 1.00000 | — | — |
| 10A | -25.356 | 2.10 | 1.51633 | 64.06 | 0.000 |
| 11A | -100.000 | D11 | 1.00000 | — | — |

The final data file matches every re-entered R, D, nd, K, and A4-A12 value exactly. Cemented junctions 2 and 6 use the downstream element's index and `elemId`. No dummy, filter, cover-glass, or generic cement layer is present.

## Conventions and independent paraxial calculation

The calculation uses the height/reduced-angle state `(y, ν)` with `ν = n·u`. Refraction is `ν′ = ν - φy`, where `φ = (n′ - n)/R`, and translation is `y′ = y + dν/n`. A direct basis-ray trace and a separately composed ABCD matrix agree entry by entry:

```
A = 0.422716164251492
B = 19.962530428302522 mm
C = -0.027979059881562 mm^-1
D = 1.044358373521685
det = 1.000000000000000
```

| Quantity | Independent result | Comparison |
|---|---:|---:|
| Effective focal length | 35.741015038857 mm | patent 35.74 mm |
| Infinity BFD | 15.108304783681 mm | Table 11: 15.11 mm |
| Front principal plane from surface 1 | -1.585413295138 mm | objectward |
| Rear principal plane from surface 11 | -20.632710255176 mm | objectward |
| Surface 1-to-11 track | 24.920000000000 mm | direct spacing sum |
| Infinity first-surface-to-image length | 40.030000000000 mm | Table 9: 40.03 mm |
| TL/EFL | 1.120001767 | not telephoto |
| BFD/EFL | 0.422716164 | not retrofocus |
| Petzval sum | +0.005035161252 mm^-1 | surface-by-surface `φ/(n·n′)` |

The initial paraxial stop estimate was 3.902204892640 mm. The repository-runtime follow-up below supersedes it with the exact front-group marginal-ray result.

## Element and subgroup powers

Standalone element powers were calculated from each element's own two surfaces and center thickness. Subgroup powers were calculated with air on both external sides and the published internal thicknesses or air gaps. They are not described as in-situ full-system powers.

| Quantity | Equivalent focal length |
|---|---:|
| L9f standalone | +13.799160943 mm |
| L9r standalone | -17.571226865 mm |
| L9 cemented group | +42.126741316 mm |
| L10f standalone | -17.457978511 mm |
| L10r standalone | +24.261810673 mm |
| L10 cemented group | -73.905035544 mm |
| L11 standalone | +31.911858952 mm |
| L12 standalone | -66.426138320 mm |
| G2b subsystem, L11 through L12 | +51.589299960 mm |
| Complete G2 subsystem | +159.462057301 mm |

## Focus and reference-plane audit

The patent states all-lens translation. Only D11 varies in the sequential model.

| State | Object-to-surface-1 distance | D11 | Evidence |
|---|---:|---:|---|
| Infinity | infinity | 15.110000 mm | Table 11 |
| Patent close row | 450.000000 mm | 18.203778407 mm | Table 11 prints 18.20 mm |
| Production 0.7 m reconstruction | 657.913288508 mm | 17.166711491888 mm | mechanism-constrained solve |

The actual stored spacing travel is 2.056711491888 mm, from 15.11 to 17.166711491888 mm. The shift relative to the calculated infinity BFD is 2.058406708207 mm. These are different reference quantities and are now distinguished in the analysis.

Table 9's printed `TLo = 21.83 mm` is incompatible with the 24.92 mm surface-spacing sum. It equals `40.03 - 18.20`, combining the infinity TL with the close-row BF. Consistent ratios are BF/track = 0.606272263 at infinity and 0.730488700 at D0 = 450 mm; neither satisfies BF/TLo > 0.8.

## Asphere and geometry audit

The table below records the initial Stage 4 effective-aperture interpretation. The later repository follow-up
supersedes surface 10A's physical SD while retaining 8.229002 mm as the patent's Sag2b evaluation radius.

| Surface | Modeled semi-height | Total sag | Spherical-base sag | Polynomial departure | Rim angle |
|---|---:|---:|---:|---:|---:|
| 10A | 8.229002133065 mm | -3.440000000000 mm | -1.372458562297 mm | -2.067541437702 mm | 48.153260° |
| 11A | 10.150000000000 mm | -2.761540459362 mm | -0.516446082782 mm | -2.245094376580 mm | 29.519085° |

Surface 10A's stored semi-height reproduces the patent's `Sag2b = 3.44 mm`. All element common-band edge thicknesses are positive; the minimum is 0.512249284445 mm. All actual rim angles are below the current approximately 64.2° limit. Both conic constants are zero. All three shared-band cross-gap checks pass.

Fresh exact meridional sampling accepted 235 of 247 infinity rays and 111 of 119 reconstructed 0.7 m rays. Every rejected sample first clipped at surface 10A, the patent-derived effective aperture. Every accepted ray remained within all stored semi-diameters. The local SVG diagnostic requires 0.0 mm hidden trim.

## Independent glass audit

This table records the initial Stage 4 classification snapshot. The final catalog and labeling disposition is
superseded by the July 31 follow-up below.

The fresh optical pairs lead to the same defensible labels as the supplied data, without assuming those labels at the start:

| Element | Patent nd/νd/ΔPgF | Independent catalog result | Final treatment |
|---|---|---|---|
| L9f | 1.91082 / 35.25 / -0.003 | HOYA TAFD35; exact nd/νd, catalog ΔPgF -0.0027 | exact label; line indices retained |
| L9r | 1.80809 / 22.76 / +0.021 | HOYA FD225; exact nd/νd, catalog ΔPgF +0.0213 | exact label; line indices retained |
| L10f | 1.61340 / 44.27 / -0.005 | OHARA S-NBM51 is exact in current nd/νd but ΔPgF -0.0065 | `Unmatched` class label retained |
| L10r | 1.88300 / 40.81 / -0.009 | HOYA TAFD30; exact nd/νd, catalog ΔPgF -0.0093 | exact label; line indices retained |
| L11 | 1.49700 / 81.61 / +0.037 | HOYA FCD1; exact nd/νd, catalog ΔPgF +0.0374 | exact label; line indices retained |
| L12 | 1.51633 / 64.06 / 0.000 | 516641 BK7-family position; vendor not unique | generic class label retained |

The stored rounded line indices reproduce νd within 0.006 and the patent's rounded ΔPgF within 0.001 for all four line-indexed elements. No APO classification is asserted.

## Corrections made

| File/location | Old value or wording | Corrected value or wording | Source and independent evidence | Downstream consequence |
|---|---|---|---|---|
| Data, L10r role; analysis architecture/G2a/G2b | “in situ” used for isolated subgroup EFLs | Cemented-group or subsystem EFL “in air,” distinct from full-system behavior | Table 10 plus isolated subgroup matrices: L10 = -73.905036 mm, G2b = +51.589300 mm | Terminology only; no prescription or power value changed |
| Analysis identification criterion 5 | Production “manual helicoid construction” treated as established | Cosina publishes manual focusing and 0.7 m rangefinder coupling; no internal-focus mechanism is asserted | Patent claim 8/¶0019; Cosina product page and manual | Correlation evidence is stated more conservatively; patent unit-focus model unchanged |
| Analysis, L9f glass paragraph | Single “within 0.0003” statement did not distinguish catalog dPgF from rounded line-index reconstruction | Catalog dPgF residual = 0.0003; stored-line reconstruction = -0.002450, residual +0.000550 | Hoya catalog record and independent calculation from nC/nF/ng | No glass label or spectral field changed; precision basis clarified |
| Analysis, focus paragraph | “unit-focus extension = 2.058407 mm” | Stored spacing travel = 2.056711 mm; paraxial shift from calculated infinity BFD = 2.058407 mm | Table 11, `var["11A"]`, and independent conjugate solve | Corrects the modeled motion statement; no focus spacing changed |
| Analysis, surface 11A paragraph | Polynomial departure = -2.273169 mm | Total sag = -2.761540 mm; spherical base = -0.516446 mm; departure = -2.245094 mm | Table 12 coefficients evaluated at stored h = 10.15 mm | Corrects one quantitative analysis claim; asphere coefficients and SD unchanged |
| Analysis verification/source prose | Referred to the prior Stage 2 audit and project audit record | Neutral final-model verification wording and direct catalog-source descriptions | Current analysis specification prohibits process notes in clean prose | Editorial only; audit history remains in this file and chat |

No radius, spacing, index, Abbe number, partial-dispersion value, asphere coefficient, focus endpoint, or element/group count required prescription correction. The subsequent patent-silhouette and repository-runtime follow-up below tightened inferred semi-diameters, restored the stable route key, and synchronized the stored stop with the exact runtime result without changing patent-authored prescription data.

## Targeted final gate

| Check | Result |
|---|---|
| Fresh Table 10/12 transcription versus final data | pass |
| Sequential y-ν basis trace versus independent ABCD composition | pass |
| EFL, principal planes, BFD, track, f-number, focus states | pass |
| Standalone, cemented-group, subsystem powers | pass |
| Surface-by-surface Petzval | pass |
| Asphere sag/departure and Sag2b inversion | pass |
| Edge thickness, actual rim angle, conic, cross-gap | pass |
| Exact infinity and 0.7 m containment | pass |
| Glass labels and line-index round trip | pass |
| Structural metadata, one STO, A suffixes, var/base-d, junction elemId | pass |
| Analysis section order and data consistency | pass |
| Complete Stage 4 verifier | 126 / 126 pass |
| Previous Stage 2 verifier rerun after independent pass | 116 / 116 pass |
| Python verifier bytecode compilation | pass |
| Local TypeScript syntax/structural typecheck with `tsc` 5.8.3 | pass |
| Prettier CLI | unavailable; registry returned 404 for Prettier 3.6.2 |
| Manual `.prettierrc` checks | pass: two-space indentation, double quotes, semicolons, trailing commas, no tabs, final newline |
| Repository `buildLens()` / `validateLensData()` | not run; repository not mounted |
| Repository production render diagnostics | not run; repository not mounted |
| Repository glass mismatch and directly relevant corpus tests | not run; repository not mounted |
| `generate:metadata`, full corpus tests, full build, Git operations | intentionally not run |

The remaining repository checks are batch-integration gates, not unresolved prescription errors.

## July 31, 2026 patent-silhouette, runtime, naming, and glass follow-up

The replacement was reviewed again inside the repository against page 18, Figure 5, the exact tracer, the catalog
resolver, and Cosina's current product page and manual.

### Display name and replacement identity

Cosina's official title is `COLOR-SKOPAR 35mm F3.5 Aspherical`; `VM` identifies the mount rather than appearing in
the product title. The visible project name is therefore normalized to
`VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical`,
with `leica-m` continuing to carry the mount identity. The replacement's route key is restored to
`voigtlander-color-skopar-vm-35mm-f35-aspherical`, preserving the old lens URL instead of creating a second identity.

The design aperture remains f/3.58 while the marketed aperture and first quick-select value remain f/3.5. `buildLens()`
derives a 3.961125955704 mm physical stop by tracing the f/3.58 entrance-pupil marginal ray through the exact front
group. The stored stop is synchronized to that value instead of retaining the smaller paraxial estimate.

### Semi-diameter follow-up

Figure 5 establishes the relative silhouette but is not drawn to a reliable axial scale, so it was used together with
Cosina's production cross-section and the exact accepted-ray envelope rather than as a standalone measurement source.
The ordinary clear apertures were rounded against the ray envelope, then enlarged where necessary to preserve the
production drawing's physical rim continuity. All faces of L9 and L10, surfaces 8/9 on L11, and surfaces 10A/11A on
L12 now share their respective edge heights. The stored stop is synchronized separately to the exact f/3.58 runtime
derivation.

| Surface | Original replacement SD | First follow-up SD | Final rim SD |
|---|---:|---:|---:|
| 1 | 8.0 | 7.9 | 7.9 |
| 2 | 7.7 | 7.6 | 7.9 |
| 3 | 6.1 | 6.0 | 7.9 |
| STO | 3.902205 | 3.961126 | 3.961126 |
| 5 | 5.2 | 5.2 | 6.2 |
| 6 | 6.4 | 5.8 | 6.2 |
| 7 | 7.0 | 6.2 | 6.2 |
| 8 | 8.4 | 7.8 | 8.3 |
| 9 | 8.8 | 8.3 | 8.3 |
| 10A | 8.229002 | 8.229002 | 10.15 |
| 11A | 10.15 | 10.15 | 10.15 |

The patent describes Sag2b as the sag to surface 10A's effective diameter. Solving Sag2b = 3.44 mm still gives the
8.229002 mm evaluation radius, but that ray-defined radius is no longer conflated with the physical edge. At the final
10.15 mm rim, surface 10A has −5.382466 mm total sag, −3.262306 mm polynomial departure, and a 36.0608° rim angle.
The common L12 edge thickness is 4.720926 mm. Every visual follow-up relative to the first pass enlarges a surface, so
no previously accepted ray can be newly rejected; the final boundary scan leaves 0.029139 mm of clearance at 11A for
its largest accepted sample. The aperture stop and rear physical rim remain the controlling vignetting boundaries.

### Final glass classification

The patent publishes nd, νd, and rounded ΔPgF, not supplier identities. Exact coordinate-compatible names are now
explicitly labeled as catalog equivalents with the production supplier unspecified. Redundant catalog-derived
`nC`/`nF`/`ng` fields were removed so the dispersion cascade uses each resolved glass's complete coefficient curve.

| Element | Final treatment | Dispersion path |
|---|---|---|
| L9f | TAFD35 HOYA catalog equivalent; supplier unspecified | catalog polynomial |
| L9r | FD225 HOYA catalog equivalent; supplier unspecified | newly added official catalog polynomial |
| L10f | Explicit unmatched 613443 negative anomalous-dispersion class | patent nd/νd/dPgF fallback |
| L10r | TAFD30 HOYA catalog equivalent; supplier unspecified | catalog coefficients |
| L11 | FCD1 HOYA catalog equivalent; supplier unspecified | catalog coefficients |
| L12 | S-BSL7 / K-BK7 catalog-equivalent borosilicate class; supplier unspecified | deterministic compatible catalog curve |

FD225 was added from HOYA's official 2026-07-07 Zemax row (`808228`). Its formula-3 coefficients reproduce
`nC = 1.79799008`, `nd = 1.80808857`, `nF = 1.83348808`, `ng = 1.85580398`, and νd = 22.76. This raises the
replacement from four to five coefficient-backed elements out of six without overclaiming the remaining L10f glass.
Registering FD225 also exposed a stale Sony FE 70-200mm f/2.8 GM OSS II assignment at 2.00912/29.10. That
incompatible label was changed to an explicit unmatched 009/291 class; no compatible catalog candidate was found.

### Final repository verification

| Check | Result |
|---|---|
| Stored prescription surface validator | pass |
| Image-circle SD audit | pass: 1 checked, 0 undersized, 0 skipped |
| Dense exact baseline/final SD comparison | pass: 814/882 image-reaching rays preserved |
| FD225 catalog and dispersion test | pass: 95/95 dispersion tests |
| Generated glass-report suite | pass: 13/13 tests across 8 files |
| `npm run typecheck` | pass |
| `npm run format:check` | pass |
| `npm run lint` | pass with 0 errors and 3 pre-existing unrelated warnings |
| `npm run test` | pass: 2528/2528 tests across 213 files |
| `npm run build` | pass: 984 routes prerendered and sitemap generated |
