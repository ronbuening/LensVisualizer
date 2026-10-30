# CANON RF 16 mm f/2.8 STM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2022-085382 A\
**Application Number:** JP 2020-197034\
**Filed:** 27 November 2020\
**Published:** 8 June 2022\
**Inventor:** Takumi Suzuki (鈴木 匠)\
**Applicant:** Canon Inc. (キヤノン株式会社)\
**Title:** 光学系及びそれを有する撮像装置 — Optical system and imaging apparatus having the same\
**Example details:** 数値実施例3, ¶0036 PDF pp 10–11; Figures 5/6 p 15

Numerical Example 3 retains native scale. Its nine elements/seven groups, two aspheric faces on one element, source
16.48 mm focal length and f/2.90 support the existing production correlation to Canon RF16 mm F2.8 STM. The product's
marketed 16 mm/f/2.8 and source design values remain separate. The patent does not identify the numerical example as
Canon's production prescription or identify the medium's supplier, chemistry or molding process.

The 2026-10-30 review directly inspected the exact local original, every source surface/material/asphere, native
Figures 5/6 and actual generated SVG. Earlier 2026-07-04/09-24 dates remain historical coverage. The figure rasters are
native 1323×812 at 403 ppi and 1315×816 at 400 ppi, respectively; inspection used native pixels, not an enlarged source
claim. The vector prescription tables were rendered at 200 dpi for inspection. All source R/d, material pairs, aspheres,
stop location and existing focus controls remain unchanged. Catalog design 16.4857 now uses directly printed 16.48;
computed 16.485733 mm remains a separate result.

## Optical Architecture

The negative front group consists of L1/L2 negative menisci and positive L3; the positive rear group contains two
cemented doublets, the weak positive L8 asphere and terminal positive L9. Source ¶0029 describes positive/negative
then negative/positive cemented combinations for chromatic and field-curvature control. ¶0030 describes rear aspheres
for focus-induced field-curvature variation; it does not supply a hybrid layer or material identity.

This negative-front/positive-rear mirrorless wide-angle has source BF 12.54 mm versus source f 16.48 mm. The source's
retrofocus-family terminology does not establish BFD>EFL under the project's stricter architecture criterion. The
stop lies 16.12 mm after the first vertex in the literal prescription; last optical vertex 50.65 mm and total 63.19 mm.
Source BF is defined air-equivalent (¶0018), but no dimensioned plate appears in this selected example.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.60311, νd = 60.6.` Glass: S-BSM14 (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ -25.79 mm`.

Leading negative meniscus, sharing front-group negative power with L2. Its strongly curved rear optical cap ends below a resolved outer shoulder in Figure 5. Source chemistry remains unidentified.

### L2 — Negative Meniscus

`nd = 1.48749, νd = 70.2.` Glass: S-FSL5 (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ -33.82 mm`.

Second negative meniscus. The S4/S5 air-lens curvature relation is discussed in source condition 4; its rear optical cap and flat outer shoulder remain distinct.

### L3 — Biconvex Positive

`nd = 1.83400, νd = 37.2.` Glass: S-LAH60 (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ +43.79 mm`.

Positive rear member of the front group, balancing the two preceding negative lenses. Its long rear radius gives most positive bending to the front face; no source chemistry is inferred from its current proxy.

### L4 — Biconvex Positive

`nd = 1.83481, νd = 42.7.` Glass: S-LAH55VS (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ +8.57 mm`.

Positive front member of cemented D1, providing strong convergence behind the stop. Its S9 rear face is the shared L4→L5 medium boundary, without an opaque land.

### L5 — Negative Meniscus

`nd = 1.90366, νd = 31.3.` Glass: S-LAH95 (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ -19.27 mm`.

Negative rear member of D1. The two source pairs have different dispersion, but the compatible catalog curves do not prove the historical material classes or supplier.

### L6 — Biconcave Negative

`nd = 1.68893, νd = 31.1.` Glass: S-TIM28 (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ -12.94 mm`.

Negative front member of cemented D2. The biconcave geometry and large Abbe contrast with L7 support the source chromatic-balancing architecture; no numerical APD evidence is published.

### L7 — Biconvex Positive

`nd = 1.59282, νd = 68.6.` Glass: FCD515 (HOYA compatible spectral proxy; historical supplier unknown); isolated `f ≈ +20.01 mm`.

Positive rear member of D2. FCD515 is a coordinate-compatible current spectral proxy, not proof of a historical HOYA glass or a source anomalous-dispersion designation.

### L8 — Pos. Meniscus (2× Asph)

`nd = 1.53110, νd = 55.9.` Glass: Unmatched (source 1.53110/55.9 medium; chemistry and process unidentified); isolated `f ≈ +169.46 mm`.

Weak positive aspheric singlet carrying both source even-polynomial faces. The original does not identify resin, plastic molding, glass molding or cement; the medium remains unresolved.

### L9 — Positive Meniscus

`nd = 1.62299, νd = 58.2.` Glass: S-BSM15 (OHARA compatible spectral proxy; historical supplier unknown); isolated `f ≈ +70.05 mm`.

Terminal positive meniscus. Figure 5 leaves it outside the focus bracket, whereas the existing unit-BF approximation moves the full prescription; that modeling limitation remains explicit.

## Glass Identification and Selection

All nine source nd/νd pairs were checked directly in ¶0036 pp 10–11. ¶0012 p 5 defines d 587.56 nm and g 435.835 nm;
¶0018 p 6 defines νd=(Nd−1)/(NF−NC). No numerical C/F/g indices, θ ratio, ΔPgF or APD designation is published.
Each medium now records explicit d provenance. High Abbe number alone does not establish anomalous dispersion.

Removed 21 per-lens C/F/g overrides across seven elements that are absent from the original. Twenty reproduce rounded
current-catalog values exactly; L6's F value differs in the last reported digit. These are unsupported spectral
supplements, not published measurements. The eight previous compatible curve choices remain, now explicitly qualified
as proxies. Source nd/νd remains authoritative; exact supplier, melt, annealing and chemistry remain unidentified.

| Element | Source nd/νd | Qualified current curve |
| ------- | ------------ | ----------------------- |
| L1      | 1.60311/60.6 | S-BSM14                 |
| L2      | 1.48749/70.2 | S-FSL5                  |
| L3      | 1.83400/37.2 | S-LAH60                 |
| L4      | 1.83481/42.7 | S-LAH55VS               |
| L5      | 1.90366/31.3 | S-LAH95                 |
| L6      | 1.68893/31.1 | S-TIM28                 |
| L7      | 1.59282/68.6 | FCD515                  |
| L8      | 1.53110/55.9 | Unmatched               |
| L9      | 1.62299/58.2 | S-BSM15                 |

L8 remains Unmatched. Its 1.53110/55.9 pair and two aspheres do not establish the previous PMo-resin assertion.
No catalog-derived per-lens override or invented bonded layer is needed to retain a qualified spectral model.

## Focus Mechanism

¶0027 p 8 describes moving the front group, stop and all or part of the rear group together toward the object. The native
Figure 5 bracket spans L1–L8 and ends before L9; the original contains no finite-focus spacing table. The existing
visualization changes only BF12.54→16.83 mm, approximating whole-unit extension from product-correlated 0.26× magnification.
It therefore also moves L9 relative to the fixed image plane and is not the exact Figure 5 movement prescription.

The actual paraxial finite conjugate at the near endpoint is 125.331055 mm object-to-image, rather than the nominal 130 mm
retail metadata; computed magnification is approximately −0.259814. No finite cam, source dimension or internal spacing
was fitted in this review. All 21 sampled focus states were checked separately from the source infinity state.

## Aspherical Surfaces

L8 carries S14*/15*, labeled 14A/15A. ¶0031 pp 8–9 gives the ordinary even radial-power sag equation; K=0 is retained.
The source supplies A4–A12; stored A14=0 adds no invented power. Source manufacturing process remains unidentified.

| Face |       R |   K |         A4 |          A6 |         A8 |          A10 |         A12 |
| ---- | ------: | --: | ---------: | ----------: | ---------: | -----------: | ----------: |
| 14A  | −50.009 |   0 | 5.22756e−5 | −1.92650e−6 | 3.51677e−8 | −3.71946e−10 | 1.36387e−12 |
| 15A  | −32.615 |   0 | 1.10438e−4 | −1.14287e−6 | 2.01498e−8 | −1.88642e−10 | 6.28660e−13 |

At the new 10.7 mm source-figure rims, polynomial departures from the sphere are−.408509 mm and+.899577 mm, slopes
−.459535/−.059615, respectively. Both complete polynomials remain unchanged, with finite connected paths and no hidden
renderer trimming. No disconnected resin wings or unsupported equal-height hybrid block is introduced.

## Native Figure Rims and Retained Constraints

The patent prints no effective-diameter column. Figure 5's first-to-last optical-vertex span is approximately 836 native
pixels over 50.65 mm,16.51 pixels/mm. The source 63.19 mm first-vertex-to-IP span independently gives about 16.5 pixels/mm.
R1's native rim sag also agrees with R27.125 at approximately 11.3 mm height. Two/three-pixel endpoint uncertainty is
about±.12–.18 mm, rounded to±.2 mm for contour decisions. Brackets, focus arrows, axis, leaders and IP are excluded.

| Element / faces | Previous clear SD (mm) | Adopted (mm) | Source disposition                                                  |
| --------------- | ---------------------- | ------------ | ------------------------------------------------------------------- |
| L1 S1/S2        | 9.5/8.2                | 11.3/8.2     | S2 resolved outer shoulder 11.3; clear cap 8.2 preserved            |
| L2 S3/S4        | 7.5/8.0                | 8.1/7.0      | S4 resolved outer shoulder 8.1; S3 guard constraint below drawn≈8.3 |
| L3 S5/S6        | 6.8/6.8                | 6.5/6.5      | Native continuous small positive element                            |
| D1 S8/S9/S10    | 6.3/6.9/7.0            | 6.4/6.4/6.4  | Native coextensive doublet, shared S9 boundary                      |
| D2 S11/S12/S13  | 7.2/7.4/8.4            | 9.4/9.4/9.4  | Native coextensive doublet; former S11 about 31% short              |
| L8 S14A/S15A    | 9.0/9.5                | 10.7/10.7    | Native complete aspheric faces                                      |
| L9 S16/S17      | 13.2/13.9              | 15.7/15.7    | Native terminal positive meniscus                                   |

The complete native contour trial used S3=8.3 mm. Across S2/S3, the common-band sag at 8.2 mm is 3.364839 mm versus the
existing .90×3.67=3.303 mm allowance; physical air remains+.305161 mm. Adopted S3=8.1 limits intrusion to 3.239480 mm,
leaving+.430520 mm physical air. This is a retained conservative geometry constraint, not proof of a source error or
physical crossing. The existing guard, all source R/d and stop are preserved. There are no inferred cuts or source exemptions.

Both cemented groups use the shared source curves; the new equal heights follow resolved continuous outer rims,
without opaque bonded-interface lands. Actual SVG now matches the native front shoulders and rear-group size more
closely; the small S3 cap difference remains explicit. Source-figure estimates do not prove production clear apertures.

## Field and Numerical Verification

The source table prints half-field 47.84° and image height 18.20 mm, whereas native Figure 6 labelsω=52.9°. The table value
agrees with atan(Y/f), suggesting a paraxial field convention; that interpretation is not an explicit source statement.
The existing declared trace limit 52.9° remains anchored to the source plot. Runtime d-line chiefs reach 15.787362 mm at
47.84° and 18.182875 mm at 52.9°, the latter 83.9856% of canonical full-frame radius 21.65 mm. Its approximately−16.585%
distortion agrees with the native curve's approximate−16.5±.3% reading. No production correction/crop is modeled or proved.
The generic corner would require about 59.1°, outside the retained declared limit even though the enlarged rims clear its chief.

The literal prescription gives EFL16.485733 mm, BFL12.546779 mm versus source 12.54 mm, residual+.006779 mm and total 63.19 mm.
The source stop has no diameter; canonical f/2.90 derives radius 4.674456 mm. Narrow surface/image-circle/aperture checks
pass with no inferred raises. Source-data fidelity is separate from sampled beam clearance.

The actual-iris 21-focus sweep contains 3087 aimed samples over axial/.6/edge fields, all 1029 axial and 63 chiefs clear,
zero unaimed. Finite states use their Gaussian object conjugates; source infinity uses projection-aware launch geometry.
All nine SVG paths are finite, closed and connected, with zero hidden trim. Off-axis pupil vignetting remains and is
reported in the audit; clearance does not prove production MFD, wide corrected coverage or historical glass identity.

## Source Conditions and Retained Uncertainty

Claim 9 p 2 prints 1.1<fGn 1/fGn 2<3.0, while detailed condition 8 ¶0018 p 6 prints 0.1 and native Table 1 p 13 gives Example 3=.76.
Preferred condition 9 a/9 b p 8 repeats G2R1−G2R1 in its denominator, while base condition 9 p 6 and Table 1 use G2R1−G2R2.
These remain structured unresolved source wording contradictions; no optical prescription correction is required.

Native Table 1 prints PD16.13 mm versus literal intervals 16.12 mm, νdn 65.44 versus rounded source-pair average 65.40,
and νdp 37.16 versus printed L3ν37.2. Independent rounding is a possible explanation, not proved. Literal source pairs
and spacings remain; no fit is made to those aggregate values. Table 1 conditions contain no numerical partial dispersion.
No camera-side plate/filter is dimensioned in Example 3; no plate or material is invented from generic apparatus language.

## Sources

- Exact local `patents/JP2022085382A.pdf`: ¶0036 pp 10–11, Figures 5/6 p 15, definitions¶0012 p 5/¶0018 p 6,
  focus¶0027 p 8, source sag¶0031 pp 8–9, native Table 1 p 13. Fresh original review 2026-10-30.
- Existing production correlation uses Canon Camera Museum and Canon specification references already associated with
  this entry. Their 9/7 count, one aspheric element and retail focus figures are product context, not a source melt identification.
