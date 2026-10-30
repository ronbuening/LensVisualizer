# CANON EF 28mm f/2.8 IS USM

## Patent Reference and Design Identification

**Patent:** JP 2013-054269 A

**Application Number:** JP 2011-193667

**Filed:** 2011-09-06

**Published:** 2013-03-21

**Inventor:** Makoto Nakahara

**Applicant:** Canon Inc.

**Title:** Optical system and image pickup apparatus having the same (descriptive translation)

**Example details:** Numerical Example 1, ¶0054, PDF page 9 (prescription and asphere), PDF page 10 (BF/track summary); Figure 1–3, PDF page 13; explicit d-line definition in ¶0052, PDF page 9

Numerical Example 1 is treated as the fixed production correlation for the CANON EF 28mm f/2.8 IS USM. The patent
does not name the commercial lens, and Canon does not publish a statement identifying the product with this
application. The correlation is therefore an author inference supported by convergent optical and chronological
evidence rather than a manufacturer-confirmed identity.

1. Canon specifies the production lens as a 9-element, 7-group EF-mount design; the example has the same count.
2. The patent gives a 28.60 mm focal length, f/2.86 design aperture, 37.11° half-field, and 21.64 mm image height.
   These values correspond to the marketed 28 mm f/2.8 full-frame lens and its 75°-class diagonal field.
3. The example places one aspherical surface on the final positive meniscus. Canon identifies one glass-molded
   aspherical element in the production lens.
4. A single positive image-stabilization element lies immediately behind the aperture stop, matching the production
   lens's optical image stabilization.
5. The patent moves the seven-element second group, including the stop and stabilization element, toward the object
   for near focus (¶0043). The constrained reconstruction reaches 0.23 m at approximately 0.204×, consistent with
   Canon's rounded 0.23 m and 0.20× product specifications.
6. The application was filed in September 2011, before Canon marketed the lens in June 2012.

The production name retains the marketed 28 mm and f/2.8 values. The prescription itself computes to 28.5975287 mm
and uses the published design aperture of f/2.86. Marketing and design values are therefore kept separate. Canon's
current official pages disagree on whether the autofocus actuator is micro USM or Ring USM. The analysis uses the
generic term **USM** and does not resolve the subtype.

## Optical Architecture

The design is a 9-element, 7-group retrofocus wide-angle prime. Its back focal distance is 38.2716985 mm, longer
than its 28.5975287 mm effective focal length, giving `BFD/EFL = 1.3382869`. It therefore meets the project's
retrofocus criterion. The physical first-surface-to-image distance is 94.0816985 mm, so `TL/EFL = 3.2898542`; it is
not a telephoto design.

The patent's focus grouping divides the system into a fixed first group and a rigidly translating second group:

- The fixed first group contains elements L1 and L2. Its computed in-air power is `-0.004340756 mm⁻¹`, equivalent to
  `f = -230.3746 mm`.
- The moving second group contains L3 through L9, the aperture stop, and the Gis stabilization element. Its computed
  in-air power is `+0.031442873 mm⁻¹`, equivalent to `f = +31.8037 mm`.
- The complete centered system has power `+0.034968057 mm⁻¹`, equivalent to `f = 28.5975 mm`.

Within the moving group, L3 precedes a strongly powered cemented doublet, followed by the aperture stop. The single
biconvex Gis element is immediately behind the stop. A second cemented doublet and the aspherical final meniscus
complete the rear section. This arrangement places the small stabilization element near the pupil, where the patent
intends to limit its diameter and reduce off-axis aberration changes during lateral correction (¶0024–¶0027).

The patent labels all optics before the stop as the negative group `LF` (¶0019 and Fig. 1). Direct paraxial
evaluation of the rounded Numerical Example 1 prescription over surfaces 2–10 instead gives weak positive power,
`+0.003372808 mm⁻¹` (`f = +296.4888 mm`). This is a source contradiction, not a corrected prescription value. The
fixed front pair remains negative and supplies the design's principal retrofocus expansion, so the overall
architectural interpretation does not require changing any patent number.

The LensVisualizer model omits patent surface 1, which the source explicitly identifies as a design dummy, and
surface 19, a co-located flare-cut stop whose aperture is larger than the final refracting surface. The physical
lens track from surface 2 to surface 18 is 55.81 mm. The patent's 95.79 mm reported total length includes the 1.70
mm dummy offset; the normalized physical first-surface-to-image distance is 94.09 mm using the published back focus.

No scale factor was applied. All refracting-surface clear semi-diameters remain one-half of the patent's published effective diameters. The 2026-10-30 original review adds three resolved air-facing outer shoulders
while preserving every printed optical cap; see the figure review below. The aperture-stop semi-diameter is the sole exception: 6.4366219 mm is the inferred clear iris needed to
reproduce f/2.86. Treating the source's 13.11 mm effective-diameter entry as the exact clear stop would yield
approximately f/2.808. The modeled stop therefore distinguishes the clear iris from the published aperture envelope.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.60311, νd = 60.6. Glass: J-SK14 / Hikari (compatible spectral proxy; historical glass unresolved). Standalone f = -79.0677
mm.**

L1 is the first and stronger negative component of the fixed front group. Its object-side convex meniscus form
expands the field before the strongly converging rear system and is the principal source of the long-back-focus
behavior. The source publishes only its d-line index/Abbe pair. J-SK14 is the already selected compatible spectral proxy, not evidence of an historical supplier or melt.

### L2 — Biconvex Positive

**nd = 1.77250, νd = 49.6. Glass: J-LASF016 / Hikari (compatible spectral proxy; historical glass unresolved). Standalone f = +131.0771
mm.**

L2 is a weak biconvex positive element behind L1. It moderates the first element's negative power while retaining a
net-negative fixed front pair. The pair's long negative focal length, rather than either isolated element alone, is
the relevant architectural quantity: `f = -230.3746 mm` for the complete fixed group.

### L3 — Negative Meniscus

**nd = 1.48749, νd = 70.2. Glass: S-FSL5 / Ohara (compatible spectral proxy; historical glass unresolved). Standalone f = -55.2488
mm.**

L3 begins the rigid moving focus group. Its negative meniscus precedes the high-power pre-stop doublet and
contributes a negative correction before the aperture. The relatively low refractive index and high Abbe number
provide a low-dispersion crown-class component, but the absence of line-index or partial-dispersion data prevents
any anomalous-dispersion claim.

### D1 — L4/L5 Pre-Stop Cemented Doublet

**L4: nd = 1.91082, νd = 35.3. Glass: H-ZLaF4LA / CDGM (compatible spectral proxy; historical glass unresolved). Standalone f =
+16.5519 mm.**

**L5: nd = 1.73800, νd = 32.3. Glass: J-KZFH9 / Hikari (compatible spectral proxy; historical glass unresolved). Standalone f = -23.4056
mm.**

L4 is a strongly positive biconvex element. L5 is a biconcave negative element cemented directly to it at source
surface 9. The pair remains positive in combination, with computed net power `+0.021406922 mm⁻¹` and
focal length `+46.7139 mm`. The high-index positive component supplies compact convergence; the negative
component reduces the pair's net
power and provides internal aberration balancing. Because both elements have moderate-to-low Abbe numbers, the pair
should not be described as an ED or apochromatic doublet.

### Gis — Biconvex Positive Stabilization Element

**nd = 1.72916, νd = 54.7. Glass: TAC8 / Hoya (compatible spectral proxy; historical glass unresolved). Standalone f = +72.8224
mm.**

Gis is a single biconvex positive element immediately behind the aperture stop. Its computed focal length reproduces
the patent's 72.82 mm value. The element is part of the rigid axial focus group, but image stabilization is obtained
by moving Gis laterally rather than by changing its axial spacing (¶0020, ¶0027, ¶0043).

### D2 — L7/L8 Rear Cemented Doublet

**L7: nd = 1.74000, νd = 28.3. Glass: S-TIH3 / Ohara (compatible spectral proxy; historical glass unresolved). Standalone f = -19.6730
mm.**

**L8: nd = 1.69680, νd = 55.5. Glass: J-LAK14 / Hikari (compatible spectral proxy; historical glass unresolved). Standalone f =
+28.3195 mm.**

L7 is a strongly negative meniscus followed by the positive meniscus L8, cemented at source surface 15. The cemented
pair has weak negative net power, `-0.008961068 mm⁻¹`, equivalent to `f = -111.5938 mm`. The large Abbe-number
separation between L7 and L8 supports ordinary chromatic balancing within the rear section, but it does not
establish anomalous partial dispersion or apochromatic correction.

### L9 — Positive Meniscus with Object-Side Asphere

**nd = 1.58313, νd = 59.4. Glass: J-SK12 / Hikari (compatible spectral proxy; historical glass unresolved). Standalone f = +47.6129
mm.**

L9 is the final positive meniscus. Its object-side surface 17A carries the prescription's only asphere. At the
largest published image-side aperture in the system, the element provides final convergence and peripheral
aberration control before the long EF-mount back-focus space. Canon's product documentation identifies one
glass-molded aspherical element; the patent's surface location and the production block diagram support correlating
that element with L9, while the glass vendor remains unresolved.

## Glass Identification and Selection

The source explicitly defines nd/νd relative to the d-line in ¶0052 / PDF page 9; ¶0021 identifies d at 587.6 nm and g at 435.8 nm for the aberration figures. All nine numerical pairs match the original. The source supplies no glass manufacturer, catalog designation, Sellmeier data, individual C/F/g indices, relative partial dispersion or APD evidence. No per-lens spectral overrides are authored or removed.

The older six-digit class labels already resolved to nine catalog curves at runtime. The original review makes those same proxies explicit, without changing the selected curves or numeric source pairs. They are compatible spectral models, not historical glass identifications.

| Element | Source nd / νd | Retained spectral proxy | Qualification                                       |
| ------- | -------------: | ----------------------- | --------------------------------------------------- |
| L1      | 1.60311 / 60.6 | J-SK14 / Hikari         | Historical identity unresolved                      |
| L2      | 1.77250 / 49.6 | J-LASF016 / Hikari      | Historical identity unresolved                      |
| L3      | 1.48749 / 70.2 | S-FSL5 / Ohara          | Historical identity unresolved                      |
| L4      | 1.91082 / 35.3 | H-ZLaF4LA / CDGM        | Historical identity unresolved                      |
| L5      | 1.73800 / 32.3 | J-KZFH9 / Hikari        | Historical identity unresolved; no source APD claim |
| Gis     | 1.72916 / 54.7 | TAC8 / Hoya             | Historical identity unresolved                      |
| L7      | 1.74000 / 28.3 | S-TIH3 / Ohara          | Historical identity unresolved                      |
| L8      | 1.69680 / 55.5 | J-LAK14 / Hikari        | Historical identity unresolved                      |
| L9      | 1.58313 / 59.4 | J-SK12 / Hikari         | Historical identity and molding route unresolved    |

The catalog codes cannot establish source chemistry, vendor, melt, resin/cement formulation or a manufacturing route. A compatible KZFH proxy does not prove source anomalous dispersion. The retained `apd: false` annotations carry no source APD designation rather than proof of an exactly normal melt. Catalog-proxy chromatic plots remain approximations, including any proxy partial-dispersion behavior. The patent does not support an APO claim. Canon's production molded-asphere statement is correlation context and does not identify the numerical example's glass or process.

## Focus Mechanism

The patent states that focus from infinity toward a near object is obtained by moving the complete second group
toward the object (¶0043). This group contains L3 through L9, Gis, and the aperture stop. The fixed front pair L1/L2
and the image plane remain stationary. All internal spacings within the moving group remain unchanged.

The patent does not publish a focus-spacing table, focus travel, near-object distance, or magnification. The close
state in the data file is therefore classified as **CONSTRAINED_RECONSTRUCTION**, not as a published prescription
state. It is solved from Canon's rounded 0.23 m minimum focusing distance while enforcing the patent's single rigid
moving unit.

| Spacing                         |     Infinity | Modeled 0.23 m state |       Change |
| ------------------------------- | -----------: | -------------------: | -----------: |
| D5, fixed group to moving group |  7.050000 mm |          0.982340 mm | -6.067660 mm |
| BF, final surface to image      | 38.280000 mm |         44.347660 mm | +6.067660 mm |
| D5 + BF                         | 45.330000 mm |         45.330000 mm |            0 |

The reconstructed object distance from the first physical lens surface is 135.91 mm after accounting for the
first-surface-to-image distance. Exact paraxial imaging gives magnification `-0.204163×`, consistent with Canon's
rounded 0.20× specification. Solving instead for exactly 0.20× gives 5.940689 mm of travel and an implied 232.805 mm
minimum focusing distance, which confirms that the two marketed values are mutually consistent at their published
precision.

Canon identifies the production lens as using USM and full-time manual focusing. Its official Camera Museum and
European specification pages disagree on the motor subtype, so the optical analysis does not classify it as either
micro or ring USM.

## Aspherical Surfaces

Surface 17A, the object-side surface of L9, is the only asphere. Patent paragraph 0053 uses the standard
even-asphere form:

$$
Z(h) = \frac{h^2/R}{1 + \sqrt{1-(1+K)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10}
+ A_{12}h^{12}.
$$

The patent's `k` maps directly to the standard conic constant `K`; it is not a shifted convention. No nonzero conic
is published, so `K = 0`.

| Coefficient |               Surface 17A value |
| ----------- | ------------------------------: |
| K           |                               0 |
| A4          |                -2.52195e-5 mm⁻³ |
| A6          |                +4.30341e-8 mm⁻⁵ |
| A8          |               -6.12181e-10 mm⁻⁷ |
| A10         |               +1.94445e-12 mm⁻⁹ |
| A12         |                         0 mm⁻¹¹ |
| A14         | 0 mm⁻¹³, schema completion only |

No scaling was applied, so no coefficient transformation was required. At the patent-published semi-diameter of
9.735 mm, the polynomial departure from the spherical base is `-0.2243942 mm`; the total sag is `-0.9577244 mm`. The
computed rim-slope angle is 13.8918°. The negative fourth-order term supplies additional object-side departure
relative to the spherical base, while the higher orders moderate the peripheral profile.

## Image Stabilization

The image-stabilization group is the single positive Gis element directly behind the aperture stop. The patent
specifies motion in a direction containing a component perpendicular to the optical axis, producing a compensating
image shift (¶0015, ¶0020, ¶0026–¶0027). Figure 3 compares the centered state with a 0.5° stabilization-correction
state.

Gis has computed standalone focal length 72.8224 mm. Using the patent's 28.60 mm design focal length gives
`f/fis = 0.392749`, within condition (1). An independent rigid-decenter matrix calculation gives an
image-shift sensitivity
of 0.499627, compared with the patent table's 0.505. The 1.064% difference is consistent with the rounded radii,
thicknesses, and indices in the public numerical example.

The data file represents the centered sequential prescription. It identifies Gis and its optical role but does not
add a lateral-decenter control or invent an unpublished stabilization travel.

## Conditional Expressions

The patent defines six design conditions in paragraphs 0029 and 0038. All are satisfied by Numerical Example 1 at
source precision.

| Condition    | Patent table | Source-consistent recomputation | Result and reference treatment                   |
| ------------ | -----------: | ------------------------------: | ------------------------------------------------ | -------- | ------------------------------------ |
| (1) `f/fis`  |        0.393 |                        0.392749 | Pass                                             |
| (2) `Dis/DL` |        0.071 |                        0.071118 | Pass; reproduces table with dummy-inclusive `DL` |
| (3) `DFS/f`  |        0.668 |                        0.667832 | Pass                                             |
| (4) `        |    (1-βis)βr |                               ` | 0.505                                            | 0.499627 | Pass; 1.064% rounded-source residual |
| (5) `Lis/DL` |        0.028 |                        0.027647 | Pass; reproduces table with dummy-inclusive `DL` |
| (6) `TL/f`   |        3.349 |                        3.349301 | Pass; reproduces table with dummy-inclusive `TL` |

The third column follows the rounded first-order values used by the patent table. Substituting the independently
computed EFL gives 0.392703, 0.667890, and 3.349590 for conditions (1), (3), and dummy-inclusive (6), respectively;
all remain inside the stated bounds. Paragraphs 0028 and 0037 define `DL` and `TL` from the first physical lens
surface, but the patent's tabulated conditions (2), (5), and (6) reproduce only when the 1.70 mm design dummy is
included. With physical first-lens normalization, conditions (2), (5), and (6) become 0.073284, 0.028490, and
3.289860 respectively; each still satisfies its stated bound. The analysis preserves both references rather than
silently redefining the prescription.

## Original Figure Review — 2026-10-30

Original Figure 1 on PDF page 13 embeds a 1068 × 646 JPEG at approximately 199 × 198 ppi. It was inspected at native resolution; enlarged viewing adds no source detail. The small front-page abstract image is not substituted for that figure. The approximately 493-pixel first-to-last physical vertex span over 55.81 mm gives about 8.83 px/mm; practical outer-outline uncertainty is around ±0.8 mm after schematic and ink differences. The clear-aperture authority is the numerical effective-diameter table, not this drawing scale. FS dummy/flare-cutter strokes, stop symbols, brackets and leaders are excluded.

| Air-facing surface | Retained published clear sd | Added outer `rimExtensionSd` | Source disposition                                                                          |
| ------------------ | --------------------------: | ---------------------------: | ------------------------------------------------------------------------------------------- |
| S3                 |                   18.075 mm |                    21.000 mm | Resolved rear shoulder of front negative meniscus, anchored to published S2 cap             |
| S7                 |                   10.270 mm |                    11.720 mm | Resolved rear shoulder of moving negative meniscus, anchored to published S6 cap            |
| S14                |                    6.410 mm |                     7.590 mm | Resolved front shoulder of rear doublet; conservative anchor is the existing bonded S15 cap |

Every element, concave end, both cemented interfaces (S9/S15) and the S17A asphere was inspected. No hybrid/resin layer, separate cement medium, source filter or rear plate is tabulated. Three shoulders and zero inferred cuts are authored. Every source clear cap, R/d and asphere coefficient remains unchanged.

The full schematic rear-doublet blank is about 9.4 mm in inferred semi-height. A 9.4 mm S14 outer trial is numerically valid, but is rejected as a full-blank reconstruction: the source's 7.59 mm bonded cap cannot certify material beyond that interface, and filling a rectangular band would require an unsupported bonded land or expanding the published optical boundary. The conservative S14 outer height stops at that bonded-cap anchor. The continuous S10/S16/S17A outlines do not resolve additional distinct lands strongly enough to author them. The source's full outer blank is therefore not claimed to be a verified mechanical reconstruction.

Existing `gapSagFrac: 0.95` is retained, with no tolerance relaxation. It preserves the printed S3/S4 caps and approximately 0.418374 mm physical rim clearance. The source LF-sign discrepancy and dummy-inclusive track definitions above remain qualified source constraints rather than reasons to change optical numbers.

## Verification Summary

Independent reduced-angle tracing and an ABCD matrix check were rerun from the compiled TypeScript arrays. The two
methods agree to below `1e-14` in the system matrix.

| Quantity                  |      Verified result | Source comparison                         |
| ------------------------- | -------------------: | ----------------------------------------- |
| Effective focal length    |        28.5975287 mm | Patent: 28.60 mm                          |
| Back focal distance       |        38.2716985 mm | Patent: 38.28 mm                          |
| Modeled maximum f-number  |            2.8600000 | Patent: 2.86                              |
| Petzval sum               | +0.004246560834 mm⁻¹ | Computed surface by surface as `φ/(n·n′)` |
| Petzval radius, `-1/ΣP`   |       -235.484676 mm | Computed                                  |
| Close-focus travel        |         6.0676601 mm | Constrained reconstruction                |
| Close-focus magnification |           -0.204163× | Canon marketing: 0.20×                    |

Geometry checks on both focus endpoints found a minimum element edge thickness of 1.159166 mm, a maximum actual
rim-slope angle of 42.514496°, and a minimum physical air clearance of 0.418374 mm. No surface crossing or
conic-limit failure was found. Representative on-axis rays fill the modeled stop without clipping at infinity or
close focus. At 60% field, the most extreme pupil sample can vignette first at surface 14, the air-to-glass entrance
of the rear cemented group; no representative ray first clips at a cemented interface.

### Runtime clearance and retained limits

Surface, image-circle, infinity aperture-census and corner-field checks pass. The aperture census tests beam clearance under the existing paraxial iris rule, not equality with a real marginal-ray working f-number. The derived iris remains 6.436622 mm; the generic source 13.11 mm effective-diameter row is envelope evidence rather than an independently proved physical iris radius. Real aimed working f-number is 2.907917 at infinity, 3.045075 at focus 0.5 and 3.184428 at the reconstructed 0.23 m endpoint. The finite-conjugate working values are separate from the source's infinity f/2.86 target.

Across 21 focus positions and six apertures, all 126 real working-ray calls trace; baseline/candidate results are identical. A 193-point circular-pupil probe at axial, half-field and corner fields over all 21 focus states gives identical baseline/candidate passing counts at all 63 fields. Every axial sample passes and all chiefs are aimed and valid; corner counts remain 103/193 at infinity and 113/193 at modeled close focus. This is retained off-axis vignetting, not full-pupil illumination. Actual SVGs at infinity, mid and close focus were compared with original Figure 1; 21 focus states produce 189 finite, singly connected, closed paths with zero hidden trimming and corner aiming near 21.65 mm.

The source publishes infinity spacings only. The product-MFD constrained focus reconstruction and its continuous interpolation are not a measured source cam law. Source Figure 3(A/B), also on PDF page 13, was inspected at its native 974 × 275 pixels and approximately 200 ppi. It compares centered and 0.5° stabilized states but publishes no millimetre lateral travel. Runtime remains centered with no IS-decenter control; those stabilized aberrations are not certified by centered clearance. Source fidelity, sampled runtime behavior and production correlation remain separate. Older product links below are correlation context, not fresh external-source checks.

## Sources

- **Patent prescription and design statements:** JP 2013-054269 A, Numerical Example 1, especially ¶0019–¶0029,
  ¶0037–¶0043, and ¶0052–¶0054; source `patents/JP2013054269A.pdf`, SHA-256 `2d1b064b6dd2665d520a6d3dc1cb2710b48d366634e929ce7c1f153ce818e1b3`, inspected 2026-10-30. Numerical Example 1 is PDF page 9 with summary continuing page 10; Figures 1–3 are PDF page 13.
- **Production identity, release timing, construction, MFD, magnification, glass-molded asphere, and micro-USM
  wording:** [Canon Camera Museum — EF28mm f/2.8 IS USM][canon-museum].
- **Production optical specifications and conflicting Ring-USM wording:** [Canon Europe — EF 28mm f/2.8 IS USM
  specifications][canon-europe].
- **Computed quantities and modeling provenance:** companion `CanonEF28mmf28ISUSM.data.ts` and independent
  verification artifacts.

[canon-museum]: https://global.canon/en/c-museum/product/ef421.html
[canon-europe]: https://www.canon-europe.com/lenses/ef-28mm-f-2-8-is-usm-lens/specification.html
