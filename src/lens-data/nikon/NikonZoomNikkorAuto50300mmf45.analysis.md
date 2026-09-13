# NIKON ZOOM-NIKKOR AUTO 50-300mm f/4.5 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,481,666\
**Filed:** 1968-08-20\
**Granted:** 1969-12-02\
**Priority:** Japan 1963-08-27, application 45,077\
**Inventor:** Takashi Higuchi\
**Assignee:** Nippon Kogaku K.K.\
**Title:** *Four Component Zoom Lens*\
**Embodiment analyzed:** Example 3

The prescription transcribed here is Example 3 of US 3,481,666. The patent gives a four-component zoom lens with a stated focal-length range of 51.6–300.1 mm, an aperture ratio of f/4.5, and a nominal zoom ratio of 6. Example 3 supplies 33 refracting surfaces, 32 source spacings, 20 d-line refractive-index/Abbe pairs, and three zoom-spacing states labeled W, M, and T. [1, PDF p. 8]

The production correlation is strong but remains inferential rather than manufacturer-confirmed patent attribution. Several independent points converge:

1. Nikon identifies the production **Zoom-Nikkor Auto 50-300mm f/4.5** as a 1967 35 mm-format lens designed by Takashi Higuchi. [2, §§ I–II]
2. Nikon describes the production lens as a four-group zoom in which the first, third, and fourth groups are positive and the second group is negative. [2, § III]
3. Nikon states that, when zooming toward the long end, the first and third groups move together toward the object, the second group moves toward the focal plane, and the fourth group remains fixed. This is the same movement pattern stated by the patent. [1, PDF pp. 4–6; 2, § III]
4. Example 3 is a 51.6–300.1 mm f/4.5 design, closely corresponding to the marketed 50–300 mm f/4.5 identity. [1, PDF p. 8]
5. Nippon Kogaku's 1969 *Nikon F Instructions* lens table lists the Zoom NIKKOR Auto 50–300mm f/4.5 as a 20-element/13-group lens, with 2.5 m closest focus and f/22 minimum aperture, consistent with the production identity represented here. [3, PDF p. 36]

Nikon's retrospective does not cite US 3,481,666 by number. The implemented file therefore describes the relationship as a **strong probable correlation**, not as manufacturer-confirmed patent provenance.

Two source-radius discrepancies are retained explicitly rather than silently repaired. Example 3 and the claim-3 repeat both print `r6 = +316.250 mm`, but that sign fails the patent's own component-II focal-length and system focal-length invariants. The implemented model uses `r6 = -316.250 mm`; this is a computation-supported proposed patent correction, not an OCR correction. Example 3 prints `r27 = +48.000 mm`, while the claim-3 repeat prints `r27 = -48.000 mm`; the implemented model uses the claim-3 negative sign because it also restores the printed component-IV and system invariants. [1, PDF pp. 8 and 11]

No uniform scaling is applied. The marketed focal range remains 50–300 mm, while the verified design endpoints are 51.598309 mm and 300.029963 mm. The middle numeric control point, 112.731783 mm, is computed from the published M spacing state and is not a focal length printed by the patent.

## Optical Architecture

The implemented prescription contains **20 glass elements in 13 air-separated groups**, organized into four zoom components with net powers positive–negative–positive–positive. Seven interfaces are cemented pairs. The design is entirely spherical; there are no geometric aspheres, diffractive phase surfaces, folded paths, cover plates, sensor filters, or inactive dummy planes in the modeled prescription.

The four air-embedded component focal lengths recomputed from the final data are:

| Component | Surface span | Verified focal length | Patent role |
|---|---|---:|---|
| I | 1–5 | +175.622282 mm | Positive moving component |
| II | 6–10 | −40.540950 mm | Negative counter-moving component |
| III | 11–17 | +52.145796 mm | Positive moving component, coupled to I |
| IV | 18–33 | +239.618260 mm | Positive fixed master component |

These are component powers, not sums of the standalone element powers. Cementing, internal thickness, and air separations within each component materially affect the component result.

The published W/M/T spacing states are retained exactly. Relative to W, the verified M state has `x = 13.77 mm` and `y = 24.23 mm`; at T the corresponding values are `x = 32.53 mm` and `y = 42.47 mm`, matching the patent's printed tele-end motion values. The invariant `d5 + d10 = 79.72 mm` is retained at all three source states. [1, PDF pp. 5 and 8]

The LensVisualizer zoom schema linearly interpolates between authored control points. A three-control-point W/M/T implementation was therefore insufficient for this patent: between M and T it produced as much as 2.879095 mm of Gaussian image-plane error and 26.358422 mm of error between the interpolated focal-length coordinate and the actual paraxial EFL. The audited data retains W/M/T unchanged and adds 47 code-solved intermediate zoom controls. At each non-source control point, the reconstruction preserves `d5 + d10 = 79.72 mm`, keeps components I and III coupled and component IV fixed, and solves the component-III-to-IV motion against the fixed modeled image plane. These added rows are a mechanism-constrained numerical representation of the patent's fixed-image zoom law, not measured production-cam positions.

The published-state Gaussian effective focal lengths remain 51.598309 mm at W, 112.731783 mm at M, and 300.029963 mm at T. The patent gives 51.6 mm and 300.1 mm for the endpoints, so the calculated endpoint residuals remain within the source precision of the rounded prescription. Across dense samples of the final 50-control-point interpolation, the maximum absolute image-plane residual is 0.019636 mm, the maximum focal-coordinate residual is 0.046116 mm, and the maximum modeled f-number departure from f/4.5 is 0.000267.

The patent requires a fixed image position but does not print a post-`r33` distance. The model therefore uses a fixed rear air gap of 52.493752 mm. The recomputed Gaussian BFLs from the `r33` vertex are 52.487082 mm, 52.500422 mm, and 52.498347 mm at W/M/T, giving a maximum residual of 0.006670 mm from the one fixed modeled image plane. This rear spacing is an explicit modeling inference from the patent's fixed-image requirement and the rounded prescription, not a source-published `d33`.

The aperture stop is likewise inferred. Figure 2 places a diaphragm-like stop between components III and IV, but Example 3 gives no numerical stop coordinate or diameter. The data inserts one flat `STO` in that gap, fixed 2.53 mm ahead of `r18`; at W this bisects the published 5.06 mm III–IV air spacing. Its semi-diameter, 11.757300 mm, is calibrated so that the W-state modeled f-number is exactly 4.5. The same fixed stop gives 4.500199 at M and 4.500168 at T. Agreement at W is therefore a calibration target, not independent evidence for an unpublished physical diaphragm diameter. [1, PDF pp. 2 and 8]

The patent calls the long-focal-length state the “telephoto” position. That source terminology is retained historically, but the project uses a stricter first-order definition: telephoto requires `TL/EFL < 1`. The verified T-state modeled track/EFL ratio is 1.186894, so the final model is not classified as telephoto under that rule. At W, the BFL/EFL ratio is 1.017225, so only the wide state meets the project's strict `BFD > EFL` retrofocus criterion.

The surface-by-surface first-order Petzval sum, computed as `Σ φ/(n·n′)`, is **+0.000667477396 mm⁻¹**. This is a paraxial curvature diagnostic only; it is not a finite-field best-focus or measured field-curvature result.

## Element-by-Element Analysis

The focal lengths in this section are **standalone, air-embedded element focal lengths** recomputed from the final data. They are not the powers of the elements in situ inside the assembled zoom. Where a cemented-pair focal length is given, it is the independently recomputed net power of that bonded pair.

### Component I — Positive Front Component

The patent describes component I as a cemented positive doublet made from a divergent and a convergent lens, followed by a single convergent lens. It assigns this arrangement group-level roles in controlling long-end spherical over-correction, improving chromatic correction, and balancing image-surface curvature across the zoom range. Those statements belong to the component as a designed assembly, not to any one element in isolation. [1, PDF p. 6]

### L1 — Negative Meniscus, front member of D1

**nd = 1.74000, νd = 28.2. Glass: 740282 — dense flint coordinate class (supplier unresolved). f = −212.810 mm.**

L1 is the divergent member of the cemented front doublet. Its negative standalone power does not make component I negative because it is cemented to the substantially stronger positive L2 and followed by positive L3. The patent does not identify a vendor or historical melt for this coordinate.

### L2 — Biconvex Positive, rear member of D1

**nd = 1.63854, νd = 55.5. Glass: 639555 — SK18 coordinate class (supplier unresolved). f = +121.548 mm.**

L2 is the convergent member of D1. The verified net focal length of the cemented L1+L2 pair is **+279.723 mm**. That positive net doublet, combined with L3 and the internal spacings, yields the much stronger component-I focal length of +175.622 mm.

### L3 — Positive Meniscus

**nd = 1.51728, νd = 69.6. Glass: 517696 — low-dispersion crown coordinate class (supplier unresolved). f = +470.048 mm.**

L3 is the single convergent lens specified by the patent after D1. The patent's aberration statements concern the complete first component; the final data do not support assigning a unique spherical, coma, or chromatic contribution to L3 alone.

### Component II — Negative Variator

The patent describes component II as a divergent singlet followed by a cemented negative doublet consisting of a divergent and a convergent lens. It attributes to the component-level arrangement suppression of negative barrel distortion at the short-focal-length side and improved astigmatism balance. [1, PDF p. 6]

### L4 — Biconcave Negative

**nd = 1.69100, νd = 54.8. Glass: 691548 — LAK9/LAL9 coordinate class (supplier unresolved). f = −53.650 mm.**

L4 is the leading divergent singlet of component II. The implemented `r6` sign correction occurs on its front surface. With the source-printed positive sign, the component does not reproduce the patent's stated −40.54 mm focal length; with the modeled negative sign, the verified component value is −40.540950 mm.

### L5 — Biconcave Negative, front member of D2

**nd = 1.51728, νd = 69.6. Glass: 517696 — low-dispersion crown coordinate class (supplier unresolved). f = −52.069 mm.**

L5 supplies the divergent member of the cemented D2 pair. Its relatively high Abbe number should not be interpreted by itself as proof of any specific secondary-spectrum behavior; the patent provides only d-line index and Abbe number.

### L6 — Positive Meniscus, rear member of D2

**nd = 1.72825, νd = 28.3. Glass: 728283 — SF10 coordinate class (supplier unresolved). f = +69.188 mm.**

L6 is the convergent member of D2. The verified cemented-pair focal length of L5+L6 is **−207.788 mm**, so the pair remains negative despite L6's positive standalone power. Together with L4 and the internal separation, component II reaches −40.541 mm.

### Component III — Positive Coupled Moving Component

The patent allows up to two biconvex singlets followed by a cemented positive doublet consisting of a convergent and a divergent lens. It assigns this component-level arrangement the tasks of controlling negative image-surface curvature at intermediate focal length and improving coma. [1, PDF p. 6]

### L7 — Biconvex Positive

**nd = 1.51728, νd = 69.6. Glass: 517696 — low-dispersion crown coordinate class (supplier unresolved). f = +139.926 mm.**

L7 is the first of the two positive singlets in component III. It has the same stored d-line coordinate and standalone focal length as L8 because the two singlets use the same material coordinate and equal-magnitude surface radii in the final prescription.

### L8 — Biconvex Positive

**nd = 1.51728, νd = 69.6. Glass: 517696 — low-dispersion crown coordinate class (supplier unresolved). f = +139.926 mm.**

L8 is the second positive singlet. The patent describes the pair as part of the third positive component but does not assign separate aberration responsibilities to L7 and L8.

### L9 — Biconvex Positive, front member of D3

**nd = 1.62041, νd = 60.3. Glass: 620603 — SK16/BSM16 coordinate class (supplier unresolved). f = +57.342 mm.**

L9 is the convergent member of the final cemented pair in component III.

### L10 — Negative Meniscus, rear member of D3

**nd = 1.79504, νd = 28.4. Glass: 795284 — high-index flint (J-LAFH3 coordinate-compatible dispersion proxy; supplier unresolved). f = −80.137 mm.**

L10 is the divergent member of D3. The verified net focal length of L9+L10 is **+184.612 mm**. Together with L7 and L8, the complete component has +52.145796 mm focal length.

### Component IV — Fixed Positive Master Component

The patent states that the fourth component remains fixed and modifies the overall focal-length range while correcting aberrations generated by the three-component zoom unit. It may be positive or negative in the general invention; Example 3 uses the positive case. [1, PDF pp. 5 and 8]

Unlike components I–III, the patent does not give a lens-by-lens aberration rationale for the ten elements of component IV. The discussion below therefore limits itself to verified element shape, material coordinate, standalone power, and cemented-pair power.

### L11 — Biconcave Negative

**nd = 1.51728, νd = 69.6. Glass: 517696 — low-dispersion crown coordinate class (supplier unresolved). f = −145.293 mm.**

L11 is the first air-spaced negative singlet in the fixed component. Its negative standalone power is one contribution inside a component whose net focal length is nevertheless positive.

### L12 — Biconcave Negative

**nd = 1.51728, νd = 69.6. Glass: 517696 — low-dispersion crown coordinate class (supplier unresolved). f = −145.293 mm.**

L12 repeats the same stored optical coordinate and standalone focal length as L11, separated by an air gap. The patent does not identify the two singlets as a cemented pair; they remain distinct air-spaced elements.

### L13 — Biconcave Negative, front member of D4

**nd = 1.62374, νd = 47.0. Glass: 624470 — barium-flint / mid-dispersion coordinate class (supplier unresolved). f = −50.856 mm.**

L13 begins cemented pair D4.

### L14 — Positive Meniscus, rear member of D4

**nd = 1.74077, νd = 27.7. Glass: 741277 — dense flint (E-FD13 coordinate-compatible dispersion proxy; supplier unresolved). f = +69.791 mm.**

The verified net focal length of D4 is **−180.236 mm**. Thus the positive standalone power of L14 does not reverse the pair's negative net power.

### L15 — Biconcave Negative, front member of D5

**nd = 1.66446, νd = 35.9. Glass: 664359 — BASF2 coordinate class (supplier unresolved). f = −74.825 mm.**

L15 forms the negative front member of D5.

### L16 — Biconvex Positive, rear member of D5

**nd = 1.51680, νd = 64.2. Glass: 517642 — BK7-family crown coordinate class (supplier unresolved). f = +51.024 mm.**

The L15+L16 cemented pair has a verified net focal length of **+131.752 mm**. The class label records coordinate similarity only; the patent itself does not name Schott N-BK7 or any supplier.

### L17 — Biconvex Positive, front member of D6

**nd = 1.46450, νd = 65.8. Glass: 465658 — low-index crown coordinate class (supplier unresolved). f = +67.297 mm.**

L17 is the positive front member of D6.

### L18 — Biconcave Negative, rear member of D6

**nd = 1.63930, νd = 45.0. Glass: 639450 — BAM12 coordinate class (supplier unresolved). f = −80.045 mm.**

The verified net focal length of D6 is **+315.983 mm**. The pair therefore remains weakly positive despite L18's negative standalone power.

### L19 — Biconvex Positive, front member of D7

**nd = 1.46450, νd = 65.8. Glass: 465658 — low-index crown coordinate class (supplier unresolved). f = +94.111 mm.**

L19 begins the final cemented pair.

### L20 — Negative Meniscus, rear member of D7

**nd = 1.62041, νd = 60.3. Glass: 620603 — SK16/BSM16 coordinate class (supplier unresolved). f = −147.738 mm.**

The verified net focal length of D7 is **+252.536 mm**. The four cemented pairs D4–D7, together with the two preceding negative singlets and their air spacings, form the overall positive fixed component IV with +239.618260 mm focal length.

## Glass Identification / Selection

The patent is vendor-silent. It provides only d-line refractive indices and Abbe numbers; it does not publish `nC`, `nF`, `ng`, Sellmeier coefficients, partial-dispersion ratios, or `dPgF`. The data file therefore stores supplier-neutral six-digit coordinate classes or descriptive coordinate classes rather than asserting historical catalog identity.

| Stored class / coordinate | nd | νd | Elements |
|---|---:|---:|---|
| 740282 — dense flint coordinate class | 1.74000 | 28.2 | L1 |
| 639555 — SK18 coordinate class | 1.63854 | 55.5 | L2 |
| 517696 — low-dispersion crown coordinate class | 1.51728 | 69.6 | L3, L5, L7, L8, L11, L12 |
| 691548 — LAK9/LAL9 coordinate class | 1.69100 | 54.8 | L4 |
| 728283 — SF10 coordinate class | 1.72825 | 28.3 | L6 |
| 620603 — SK16/BSM16 coordinate class | 1.62041 | 60.3 | L9, L20 |
| 795284 — J-LAFH3 spectral proxy | 1.79504 | 28.4 | L10 |
| 624470 — barium-flint / mid-dispersion coordinate class | 1.62374 | 47.0 | L13 |
| 741277 — E-FD13 spectral proxy | 1.74077 | 27.7 | L14 |
| 664359 — BASF2 coordinate class | 1.66446 | 35.9 | L15 |
| 517642 — BK7-family crown coordinate class | 1.51680 | 64.2 | L16 |
| 465658 — low-index crown coordinate class | 1.46450 | 65.8 | L17, L19 |
| 639450 — BAM12 coordinate class | 1.63930 | 45.0 | L18 |

The supporting catalog audit checked current sources from OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA. Several coordinates have modern catalog-compatible candidates, but coordinate agreement does not prove which manufacturer supplied the historical glass or whether the production melt exactly matched a present catalog formulation. [4–9]

The patent states that chromatic aberration is addressed by making the components achromatic, and its descriptions of components I–III explicitly pair convergent and divergent glasses in cemented groups. [1, PDF pp. 5–6] That source statement does not justify an apochromatic or anomalous-partial-dispersion claim. The implemented model has no direct line-index or `dPgF` evidence. Nikon's retrospective also characterizes chromatic correction as a weakness of the original lens and notes that the later ED version was introduced to improve it. [2, § III]

Accordingly, the present file supports d-line first-order power and Abbe-level dispersion modeling only. No vendor-specific Sellmeier behavior or secondary-spectrum performance should be inferred from the class labels alone.

## Focus Mechanism

The patent publishes zoom movement but does not publish a finite-object focusing prescription for Example 3. No close-focus spacing table, object-distance series, moving-focus group law, or finite-focus magnification state is given. The final data therefore uses the status **`NO_INTERNAL_RECONSTRUCTION`**.

All focus-pair entries in the zoom `var` object are deliberately duplicated: each W/M/T zoom gap has the same “infinity” and “close” value. This preserves the published zoom mechanism without inventing an underdetermined internal-focus model.

The data field `closeFocusM = 2.5` m is production metadata only. Nippon Kogaku's 1969 *Nikon F Instructions* lens table gives the Zoom NIKKOR Auto 50–300mm f/4.5 a closest focus of 2.5 m / 8.5 ft and a minimum aperture of f/22. [3, PDF p. 36] The 2.5 m value is not used as an optical conjugate constraint and does not authorize reconstructed close-focus spacings.

The published zoom mechanism remains distinct from focusing: components I and III move together during zoom, component II moves in the opposite direction, and component IV stays fixed. Nothing in the final model asserts which internal group, if any, shifts during real finite-distance focusing.

## Conditional Expressions

US 3,481,666 states five inequalities governing the power distribution, principal-plane separation, and movement of the first three zoom components. [1, PDF pp. 5–6] The final parsed model was re-evaluated against all five, and each passes.

| Condition | Patent expression | Example 3 printed evaluation | Final-model status |
|---|---|---|---|
| (11) | `3.1|f2| < f1 < 5.4|f2|` | `125.674 < 175.62 < 218.916` | PASS |
| (12) | `0.9|f2| < f3 < 1.6|f2|` | `36.486 < 52.15 < 64.864` | PASS |
| (13) | `0.9f3 < d̄1+d̄2 < 2.9f3` | `46.935 < 110.0484 < 151.235` | PASS |
| (14) | `0.3(d̄1+d̄2) < x+y < 0.8(d̄1+d̄2)` | `33.0145 < 75.0 < 88.0387` | PASS |
| (15) | `x > 0.2y` | `32.53 > 8.494` | PASS |

The final-model principal-plane sum corresponding to condition (13) is 110.051909 mm rather than the patent's printed 110.0484 mm. The difference is 0.003509 mm and is consistent with recomputation from rounded prescription coordinates. The source's printed evaluation is preserved rather than overwritten.

## Verification Summary

The final `.data.ts` was loaded through the TypeScript Compiler API and independently cross-checked by the dossier's strict literal parser. The latter rejects unsupported runtime expressions, duplicate keys, and trailing unparsed content. All numerical quantities below were recomputed from the parsed final data rather than from a separate hard-coded copy.

| Quantity | Verified result | Interpretation |
|---|---:|---|
| EFL, W | 51.598309 mm | Matches printed 51.6 mm to source precision |
| EFL, M | 112.731783 mm | Computed control point; not patent-printed |
| EFL, T | 300.029963 mm | Matches printed 300.1 mm to source precision |
| BFL from `r33`, W/M/T | 52.487082 / 52.500422 / 52.498347 mm | Supports the fixed-image construction |
| Fixed modeled rear gap | 52.493752 mm | Inferred because the patent omits `d33` |
| Modeled f-number, W/M/T | 4.500000 / 4.500199 / 4.500168 | W is calibration-dependent |
| Petzval sum | +0.000667477396 mm⁻¹ | Surface-by-surface `φ/(n·n′)` |
| Minimum modeled element edge thickness | 0.169412 mm | L2, under current chat geometry checks |
| Maximum modeled rim angle | 28.596837° | Actual spherical rim slope |
| Maximum shared-band gap ratio | 0.651629 | Below authored `gapSagFrac = 0.90` |
| Dense zoom interpolation, max `|BFL − d33|` | 0.019636 mm | 50-control-point Stage 4 representation |
| Dense zoom interpolation, max `|EFL − focal coordinate|` | 0.046116 mm | Continuous-control fidelity check |
| Dense zoom interpolation, max `|f/# − 4.5|` | 0.000267 | Same physical stop |
| Exact spherical-ray sample count | 2,079 rays | 50 authored zoom controls plus 49 segment midpoints |
| Smallest sampled non-stop clearance | 0.151671 mm | Finite sample result, not a continuum proof |

The independent `[y, n·u]` and `[y, u]` first-order matrix implementations agree to a maximum element-wise difference of approximately `1.7×10⁻13` across W/M/T. All 33 refracting surfaces are included in the Petzval sum; the inserted flat stop has zero optical power.

The modeled semi-diameters are not patent dimensions. Stage 4 rechecked positive edge thickness, actual rim slope, shared-band gap intrusion, and exact sampled off-axis containment at all 50 authored zoom controls and all 49 segment midpoints. The exact spherical tracer exercised 2,079 rays over those 99 states; the smallest sampled non-stop clearance remains 0.151671 mm. This is finite sampling, not a continuum proof. Nikon's published cross-section was used only as a qualitative silhouette reference. The genuine LensVisualizer production renderer and its render-trim diagnostics were not available in this authoring environment and are not claimed to have passed.

The integration review below adds project type checking, validation, runtime glass resolution, and production render diagnostics to the portable source checks.

## Sources / References

1. Takashi Higuchi, **“Four Component Zoom Lens,” US Patent 3,481,666**, assigned to Nippon Kogaku K.K., granted 1969-12-02. Primary source in this dossier as `US3481666.pdf`. Example 3 appears on PDF p. 8; its claim-3 repeat appears on PDF p. 11; the lens diagram is Figure 2 on PDF p. 2. Google Patents: https://patents.google.com/patent/US3481666A/en
2. Nikon Imaging, **“NIKKOR — The Thousand and One Nights No.62: Zoom-Nikkor Auto 50-300mm f/4.5.”** https://imaging.nikon.com/imaging/information/story/0062/
3. Nippon Kogaku K.K., **Nikon F Instructions** (English, 1969), p. 36 lens specification table. The Zoom NIKKOR Auto 50–300mm f/4.5 row lists 13 groups / 20 elements, 2.5 m / 8.5 ft closest focus, f/22 minimum aperture, 2270 g weight, 95 mm screw-in filter, and a revolving tripod socket. Manufacturer document preserved as an archival scan: https://www.marcocavina.com/brochure_foto/nikon_f-instructions_03_1969_en.pdf
4. OHARA INC., **Optical Glass / Glass Type data.** https://www.ohara-inc.co.jp/en/product/01000/
5. HOYA GROUP Optics Division, **Optical Glass Data Download.** https://www.hoya-opticalworld.com/english/datadownload/index.html
6. SCHOTT Advanced Optics, **Optical Glass.** https://www.schott.com/en-us/products/optical-glass-p1000267
7. Hikari Glass Co., Ltd., **Optical Glass Catalog.** https://www.hikari-g.co.jp/optical_glass/catalog/
8. CDGM, **Optical Glass.** https://cdgmglass.com/
9. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data Book, Version 14.02.** https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf


## Integration Review — 2026-09-13 UTC

US3481666.pdf pp. 1–3 were reviewed, including Fig. 2 at 600 dpi. Fig. 2 illustrates the 14-element f/1.4 example, not the selected 20-element f/4.5 Example 3. Its rims must not be transferred to this prescription. The validated ray-envelope SDs are retained; the patent does not provide an exact Example 3 silhouette for numerical refinement. J-LAFH3 and E-FD13 provide compatible spectral proxies for 795284 and 741277 (Δnd ≈ 0; Δνd ≈ +0.292 and +0.060). Coverage rises from 18/20 to 20/20. The Zoom-Nikkor Auto display name is retained.

The optical prescriptions, stop calibration, and source focus/zoom states are preserved. Surface validation, image-circle screening, and the shared render-diagnostics corpus were run during integration. Catalog proxies preserve patent nd/νd and do not identify the historical supplier, melt, or anomalous partial dispersion.
