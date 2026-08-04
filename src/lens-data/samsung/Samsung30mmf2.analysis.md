## Patent Reference and Design Identification

**Patent:** US 2010/0149663 A1\
**Application Number:** 12/624,512\
**Priority:** KR 10-2008-0128650, filed December 17, 2008\
**Filed:** November 24, 2009\
**Published:** June 17, 2010\
**Inventor:** Min Heu\
**Assignee:** Samsung Digital Imaging Co., Ltd.\
**Title:** *Large Caliber Standard Lens*\
**Embodiment analyzed:** First Embodiment, Figure 1 and ¶0045 (job-card Example 1)

The prescription is correlated with the **SAMSUNG 30mm f/2** for the Samsung NX APS-C system. This is a fixed production correlation for the present model, not a documented statement by Samsung that the commercial lens uses this exact patent embodiment. The identification rests on convergent evidence:

1. The patent embodiment contains five elements in five air-spaced groups, matching the production specification.
2. It contains one aspherical surface, matching the manufacturer's count of one aspherical element.
3. Its exact design values are 30.76 mm, f/2.07, and 50.66° full field, close to the marketed 30 mm, f/2, and 50.2° angle of view.
4. The assignee is Samsung Digital Imaging, and the Korean priority predates the introduction of the Samsung NX system.
5. Figure 1 shows the same compact five-element distribution represented by the final data file: two elements before the stop and three after it.

The manufacturer manual supplies the Samsung NX mount and the production specifications used in the data file: 30 mm marketed focal length, f/2 maximum aperture, seven diaphragm blades, 0.25 m minimum focus distance, 0.16× maximum magnification, and no optical image stabilization. APS-C format identification follows the NX system context and the manual's 46.2 mm 135-format equivalent specification. Those marketed values remain separate from the patent-derived design EFL of 30.7560033 mm and modeled f-number of 2.07.

The patent text describes possible use in a small SLR camera, whereas the correlated product is an NX mirrorless lens. The prescription is not altered to reconcile that terminology. Its computed rear focal distance is 21.3486907 mm, which is consistent with a short-back-focus camera system but does not by itself prove a specific production mount.

## Optical Architecture

The design is a compact modified Gaussian or modified double-Gauss standard lens. Its power sequence is:

**positive meniscus — negative meniscus — stop — negative meniscus — positive meniscus — positive element**

All five elements are air-spaced. The first four are menisci with their concave faces directed toward the aperture stop, as specified by the patent and shown in Figure 1 (¶0031). The final element is biconvex. The arrangement reduces the conventional six-element double-Gauss pattern to five elements while retaining opposed positive and negative powers around a central stop.

The isolated front pair, L1+L2 at the published spacing, remains net positive with an equivalent focal length of +51.45282 mm. The isolated rear assembly, L3+L4+L5, is also net positive at +31.37023 mm. These are air-space assembly calculations, not cemented-group powers and not direct measures of each assembly's in-situ contribution to the complete lens. The system EFL results from the interaction of both assemblies and their separation across the stop.

The complete optical track from surface 1 to the image plane is 44.59 mm. Its track-to-EFL ratio is 1.4498, so it is not telephoto under the `TL/EFL < 1` criterion. Its back focal distance is less than its EFL (`BFD/EFL = 0.6941`), so it is not retrofocus under the `BFD > EFL` criterion.

The patent publishes the stop position but not its clear diameter. The authored physical stop semi-diameter, 5.279068 mm, is inferred by exact Snell tracing of the entrance-pupil ray required by f/2.07. A first-order front-to-stop matrix gives 5.290722 mm; the 0.011654 mm difference is the higher-order exact-ray correction through the front half. The patent also omits surface apertures. All authored semi-diameters are therefore modeling inferences constrained by the verified pupil, field, edge-thickness, rim-slope, conic-domain, cross-gap, and ray-containment checks.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.69680, νd = 55.5. Glass: J-LAK14 catalog equivalent; production supplier unspecified. Standalone f = +27.37199 mm.**

L1 is the front positive collector. Its strongly curved first surface provides most of the element's isolated positive power, while the weaker rear surface forms the stop-facing concavity required by the patent's modified-Gaussian arrangement.

The element supplies a relatively crown-like combination of index and Abbe number compared with the negative elements. Its function must be understood in the full assembly: the +27.37 mm standalone focal length describes L1 isolated in air with its patent center thickness, not its effective contribution after L2 and the stop are included.

### L2 — Negative Meniscus with Rear Asphere

**nd = 1.68384, νd = 31.6. Glass: Unmatched (684316 dense-flint class; vendor unresolved). Standalone f = −43.77890 mm.**

L2 is the front-half negative meniscus. It reduces the power of L1 and completes a net-positive front assembly. Its lower Abbe number gives the negative component greater normal dispersion than L1, consistent with ordinary primary chromatic balancing, but the available data do not support an apochromatic or anomalous-partial-dispersion claim.

The stop-facing rear surface, 4A, is the design's only asphere. Its location places the non-spherical correction on a surface carrying substantial marginal-ray height before the aperture stop. The specific aberration contribution is an optical interpretation of its position; the patent does not provide a surface-by-surface aberration budget.

### L3 — Strong Negative Meniscus

**nd = 1.78472, νd = 25.7. Glass: H-ZF13 catalog equivalent; production supplier unspecified. Standalone f = −12.59488 mm.**

L3 is the strongest isolated element in the system by absolute focal power. It lies immediately behind the stop and presents its concave front surface toward it. This placement makes L3 the principal negative component of the rear assembly.

The patent uses the ratio between the stop-facing radii of L2 and L3 as its first design condition (¶¶0033–0035). For this embodiment, `|R6/R4| = 0.927789`, within the required range. The condition is described as preserving the useful symmetry of the Gaussian form while avoiding impractically strong curvature or inadequate spherical-aberration correction.

### L4 — Positive Meniscus

**nd = 1.80420, νd = 46.5. Glass: N-LASF44 catalog equivalent; production supplier unspecified. Standalone f = +20.06079 mm.**

L4 follows L3 across a 0.22 mm axial air gap. The two boundary surfaces curve in the same general direction, producing an air space whose axial and peripheral thicknesses differ. The patent identifies the L3-to-L4 gap and the ratio `R7/R8` as a means of controlling Petzval sum and astigmatism (¶¶0039–0040).

Its high index allows substantial positive power without requiring an even more extreme surface pair. L4's isolated +20.06 mm focal length should not be treated as a cemented-doublet result: L3 and L4 are separate elements, and their interaction includes the narrow air lens between surfaces 7 and 8.

### L5 — Biconvex Positive

**nd = 1.88300, νd = 40.8. Glass: S-LAH58 catalog equivalent; production supplier unspecified. Standalone f = +26.80181 mm.**

L5 is the final converging element. Its front surface is very weakly convex and its rear surface is substantially stronger, giving the element positive power while placing most of its curvature near the image side.

Together with L4, it restores positive power after L3 and completes the rear assembly. Its index of 1.88300 also raises the mean refractive index of the three elements behind the stop to 1.823973, satisfying the patent's high-index rear-group condition (¶¶0036–0038). The patent connects that condition with reduction of Petzval sum; it does not assign a unique Petzval contribution to L5 alone.

## Glass Identification and Selection

The patent supplies only d-line refractive index and Abbe number. It does not identify manufacturers or catalog names,
and it provides no per-element `nC`, `nF`, `ng`, Sellmeier coefficients, or `dPgF`. Compatible catalog curves are used
as optical equivalents for chromatic tracing without asserting Samsung's production supplier or melt.

| Element | nd | νd | Data-file identification | Optical use |
|---|---:|---:|---|---|
| L1 | 1.69680 | 55.5 | J-LAK14 catalog equivalent; supplier unspecified | Positive front collector |
| L2 | 1.68384 | 31.6 | Unmatched 684316 dense-flint class | Negative front correction and aspheric carrier |
| L3 | 1.78472 | 25.7 | H-ZF13 catalog equivalent; supplier unspecified | Strong rear negative component |
| L4 | 1.80420 | 46.5 | N-LASF44 catalog equivalent; supplier unspecified | Positive meniscus after the narrow air gap |
| L5 | 1.88300 | 40.8 | S-LAH58 catalog equivalent; supplier unspecified | Final positive collector |

Catalog comparison selects J-LAK14 for L1, H-ZF13 for L3, N-LASF44 for L4, and S-LAH58 for L5. Each is compatible
with the patent's rounded coordinate and supplies a coefficient-backed curve, but none is a claim about the Samsung
production melt. L2 remains unmatched within the required catalog set.

The ordinary chromatic pattern is visible at the level of `nd` and `νd`: the negative elements have lower Abbe numbers than the front crown-like positive element, while the rear positive elements combine high index with moderate dispersion. That supports discussion of primary achromatizing balance only. No APO, anomalous-dispersion, or secondary-spectrum claim is made.

## Focus Mechanism

The patent publishes one infinity-focus prescription and no focus-spacing table, object-distance row, magnification row, or moving-group diagram. The manufacturer manual gives a 0.25 m minimum focus distance and 0.16× maximum magnification, but it does not identify the internal optical group motion or the reference plane used for the distance specification.

The model therefore uses the focus status **`NO_INTERNAL_RECONSTRUCTION`**. The data file contains no variable gaps and does not label the lens as unit focus, inner focus, rear focus, or floating focus. The 0.25 m value is retained solely as production metadata required by the catalog schema. No close-focus prescription, extension distance, or magnification state is inferred from it.

## Aspherical Surfaces

Surface **4A**, the rear surface of L2, is the sole asphere. The patent equation (¶¶0041–0043) is the standard conic form used by the data model:

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}.
$$

The source's `K` is therefore entered directly; no conversion from an alternative κ convention is required.

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 4A | +0.02 | +1.107210×10⁻⁵ | +1.837000×10⁻⁷ | 0 | 0 | 0 | 0 |

At the verified authored semi-diameter of 7.85 mm, the complete asphere departs from the corresponding `K = 0` spherical surface by **+0.136995 mm** in axial sag. The positive conic and polynomial terms add positive sag toward the rim. The modeled semi-diameter remains below the conservative conic-domain limit and below the validated actual-rim-slope threshold.

No dimensional scaling was applied to the patent prescription. The radii, spacings, semi-diameter model, and image-plane coordinates remain in the patent's millimeter scale, and the aspheric coefficients are not transformed.

## Aberration Correction Strategy

The patent frames the design as a response to the competing requirements of a bright Gaussian lens (¶¶0006, 0032): strong stop-facing curvatures help spherical-aberration correction but can increase sagittal comatic flare, Petzval sum, and manufacturing difficulty. The five-element arrangement addresses those tradeoffs through three linked choices.

First, the stop-facing radii of L2 and L3 are kept in a restricted ratio. Second, the three rear elements use a high mean refractive index. Third, the narrow curved air gap between L3 and L4 is shaped by the `R7/R8` condition. The patent associates these measures with spherical-aberration control, Petzval reduction, and astigmatism control.

The independently computed Petzval sum is +0.00544631 mm⁻¹ using the required surface-by-surface expression `φ/(n·n′)`, corresponding to a signed reciprocal radius of approximately +183.61 mm under that convention. This is a computed result; the patent does not publish a numerical Petzval target for the embodiment.

## Conditional Expressions

The First Embodiment satisfies all three patent conditions.

| Patent condition | Required range | Computed value | Patent Table 1 |
|---|---:|---:|---:|
| `|R6/R4|` | 0.6 to 1.0 | 0.927789 | 0.928 |
| `(n3+n4+n5)/3` | greater than 1.80 | 1.823973 | 1.824 |
| `R7/R8` | 1.1 to 3.5 | 1.430211 | 1.430 |

The first condition regulates the paired stop-facing curvatures of the front and rear negative menisci. The second formalizes the high-index rear-side glass strategy. The third constrains the curved air gap between L3 and L4. The computed values reproduce the patent's rounded table without correction.

## Verification Summary

The final TypeScript surface arrays reproduce the patent's load-bearing paraxial values:

| Quantity | Patent | Computed from final data |
|---|---:|---:|
| Effective focal length | 30.76 mm | 30.7560033 mm |
| Back focal distance from surface 11 | 21.35 mm | 21.3486907 mm |
| Design f-number | 2.07 | 2.07000000 from the exact-trace pupil calibration |
| Full field | 50.66° | 50.66° source field used for verification |
| Total track, surface 1 to image | not tabulated | 44.5900 mm |

The final semi-diameters are inferred rather than patent-published manufacturing dimensions. They pass the independent geometry checks: the minimum modeled edge thickness is 0.528098 mm, the maximum actual rim angle is 62.8313° at 4A, and the tightest shared-gap clearance is 0.036599 mm between surfaces 7 and 8. The apertures contain the default 0.60-field, ±0.75-pupil display bundle. Extreme full-field, wide-open pupil rays are intentionally vignetted so that 4A remains inside its validated conic and slope limits; this is a ray-aperture modeling choice, not a claim about measured production relative illumination.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical component is included. The patent table does not contain such an active plane in the selected example. Patent `ST` is normalized to the schema-required `STO`, and `4*` is normalized to `4A`; no numerical patent value is corrected. The model is unscaled and contains no reconstructed focus state.

## Sources

1. Min Heu, *Large Caliber Standard Lens*, US 2010/0149663 A1, especially Figure 1, ¶¶0031–0045, and Table 1.
2. Samsung, *User Manual: SAMSUNG 16mm F2.4 / 20mm F2.8 / 30mm F2*, AD68-08107A (1.3), production specifications for the Samsung 30mm F2.
3. [Samsung support listing for model EX-S30NB/KR](https://www.samsung.com/sec/support/model/EX-S30NB/KR/), used for product identity and system context.
4. OHARA, Schott, HOYA, HIKARI, CDGM, and Sumita optical-glass catalogs, used only for class and equivalent-glass comparison.
5. `Samsung30mmf2.data.ts` and independent audit calculations, used for powers, paraxial quantities, Petzval, pupils, asphere departure, and geometry validation.
