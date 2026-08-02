# VOIGTLÄNDER NOKTON Vintage Line 75mm f/1.5 Aspherical VM

## Patent Reference and Design Identification

**Patent:** JP 2020-122918 A
**Application number:** JP 2019-015796
**Filed:** 2019-01-31
**Published:** 2020-08-13
**Inventors:** 島田 博和; 菅野 靖之
**Applicant:** Cosina Co., Ltd.
**Title:** Large-aperture lens (大口径レンズ)
**Embodiment analyzed:** Example 3 (第3実施例), Figure 5, Tables 5–6

The prescription is an unscaled transcription of Example 3. The production lens is marketed as 75 mm f/1.5, whereas the patent example gives 74.5 mm and f/1.54; the independently recomputed effective focal length is 74.502507 mm. These values are kept separate in the data file as marketing and design quantities.

The production correlation is the fixed correlation selected for this model, not a statement of manufacturer confirmation. It rests on several convergent features:

1. The patent example's 74.5 mm focal length and f/1.54 aperture agree with ordinary production rounding to 75 mm f/1.5.
2. Both systems use seven elements in six air-separated groups.
3. Figure 5 and the production optical section share the same sequence: three front positive menisci, a negative meniscus before the stop, a rear cemented negative-positive doublet, and a final positive element.
4. Example 3 places both aspherical surfaces on the final element, matching the production diagram's rear aspherical element.
5. The patent gives a 32.0° full field, while Cosina specifies 32.6° and 35 mm full-frame coverage for the production lens.
6. The patent was filed on 2019-01-31, before Cosina's listed 2019-08-08 introduction of the production lens.

The patent describes the intended class as a large-aperture medium-long lens and emphasizes short overall length with controlled aberrations (¶¶0002, 0010–0019). Under the project's architectural definition, however, the design is not a telephoto system: the computed `TT/EFL` ratio is 1.21969 rather than less than 1. It is also not retrofocus because the computed back focal distance is shorter than the effective focal length.

## Optical Architecture

The optical system contains seven physical elements in six groups. The stop divides the lens into the patent's front group 101 and rear group 102.

The front group consists of three positive menisci followed by a strong negative meniscus. All eight front-group refracting surfaces curve in the same axial sense shown in Figure 5, a compact arrangement emphasized by the patent as a means of reducing axial spacing (¶¶0024–0027). The rear group consists of a cemented biconcave-negative/biconvex-positive doublet and a separate biconvex positive element with two aspherical surfaces (¶¶0031–0035).

Independent paraxial computation from the final prescription gives a front-group net focal length of +156.264 mm and a rear-group net focal length of +64.198 mm, each evaluated as a functional group in air with its internal spacings retained. These group focal lengths describe isolated group behavior and are not sums of the physical elements' standalone focal lengths. The cemented L5 doublet has a net focal length of +131.414 mm in air even though its two physical components are individually strong negative and positive elements.

The in-situ contribution of an element also differs from its standalone power because ray height and surrounding media change throughout the system. For a unit-height collimated input ray, the computed contributions are +0.006411 mm⁻¹ for L1, +0.006073 mm⁻¹ for L2, +0.009210 mm⁻¹ for L3, −0.015295 mm⁻¹ for L4, −0.009850 mm⁻¹ for L5f, +0.013133 mm⁻¹ for L5r, and +0.003740 mm⁻¹ for L6. Their sum equals the full-system paraxial power, 1/74.502507 mm.

The stop location is published as part of the Example 3 spacing table: 8.24 mm behind surface 8 and 5.30 mm before surface 10. Its physical semi-diameter is not published. The modeled value, 13.285140 mm, was reverse-solved from the design f-number and the front-group pupil magnification.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.72916, νd = 54.67. Glass: 729547 lanthanum-crown class, vendor unresolved. Standalone f = +155.972 mm.`

L1 is the front collector and the first of three positive menisci. Its moderate positive standalone power is essentially preserved in the computed in-situ contribution because it receives the collimated beam at unit height. The element begins the patent's sequence of progressively stronger object-side curvatures, expressed by the condition `R1 > R3 > R5` (¶0027).

The glass label is retained as a six-digit material class rather than a vendor attribution. Official cross-reference tables list several near-equivalent candidates for this code, but they do not establish the production melt or its manufacturer.

### L2 — Positive Meniscus

`nd = 1.49700, νd = 81.61. Glass: 497816 ED-crown class, vendor unresolved. Standalone f = +164.925 mm.`

L2 is a weak positive meniscus made from the low-index, high-Abbe material class required by the patent. Together with L3, it satisfies `νd > 75` and `nd < 1.57` (¶¶0028–0030). Its computed in-situ contribution is +0.006073 mm⁻¹.

Example 3 publishes only the unsigned magnitude `|ΔθgF| = 0.0375` for this material. The model therefore retains an APD source note but does not assign a signed `dPgF` or spectral line indices. The element's role in the patent's chromatic strategy is source-supported; a modeled anomalous-dispersion or apochromatic claim is not.

### L3 — Positive Meniscus

`nd = 1.49700, νd = 81.61. Glass: 497816 ED-crown class, vendor unresolved. Standalone f = +103.428 mm.`

L3 uses the same published optical constants as L2 but supplies substantially greater positive standalone power. Its computed in-situ contribution is +0.009210 mm⁻¹, making it the strongest positive contributor in the front group for the traced collimated ray.

The paired use of L2 and L3 is central to the patent's material conditions: both are low-index, high-Abbe positive elements, and both carry the same unsigned `|ΔθgF|` value in Table 5. The design data preserves those facts without converting them into unsupported line-by-line dispersion behavior.

### L4 — Negative Meniscus

`nd = 1.69895, νd = 30.05. Glass: 699301 dense-flint class, vendor unresolved. Standalone f = −38.892 mm.`

L4 is the strong negative meniscus immediately before the stop. Its standalone power is −0.025712 mm⁻¹, while its computed in-situ contribution is −0.015295 mm⁻¹ because the ray height has already been reduced by the preceding positive sequence. It counteracts part of the front positive power and helps establish the strong curvature transition into the stop space.

The production optical diagram marks this position as an abnormal-partial-dispersion element, but Example 3 does not publish a numerical partial-dispersion value for L4. The model consequently treats the APD association as inferred and leaves `dPgF`, `nC`, `nF`, and `ng` unset.

### L5f and L5r — Cemented Negative-Positive Doublet

`L5f: nd = 1.60342, νd = 38.01. Glass: 603380 flint class, vendor unresolved. Standalone f = −25.373 mm.`
`L5r: nd = 1.88300, νd = 40.81. Glass: 883408 high-index lanthanum-glass class, vendor unresolved. Standalone f = +23.106 mm.`

The rear doublet combines a biconcave negative front component with a biconvex positive rear component, as specified in ¶¶0031–0033. The shared surface 11 is the cemented junction and is assigned to the downstream L5r medium in the data model.

The two standalone powers nearly oppose one another, but the finite thicknesses, cemented interface, and high index of L5r produce a positive cemented net power of +0.007610 mm⁻¹, corresponding to +131.414 mm. In the complete lens, the two components contribute −0.009850 mm⁻¹ and +0.013133 mm⁻¹ respectively for the unit-height collimated trace. These values should not be substituted for the cemented net power; they describe different optical contexts.

L5r's `nd = 1.88300` satisfies the patent's rear-positive condition `nd > 1.85` (¶0034). The high index permits strong positive curvature at the cemented pair without requiring the rear group to grow axially as much as a lower-index alternative, which is the function claimed by the patent.

### L6 — Biconvex Positive, Double-Sided Asphere

`nd = 1.51633, νd = 64.14. Glass: 516641 borosilicate-crown class, vendor unresolved. Standalone f = +131.437 mm.`

L6 is the final positive element and carries aspherical surfaces 13A and 14A. Its paraxial contribution in the complete system is comparatively small, +0.003740 mm⁻¹, but paraxial power does not describe its principal distinguishing function. The patent places the asphere in the rear group to correct residual off-axis aberrations not fully controlled by the preceding spherical elements (¶0033).

OHARA S-BSL7 reproduces the published `nd = 1.51633` and `νd = 64.14`, but the patent does not identify an OHARA melt and the official cross-reference table lists other glasses in the same code family. The model therefore retains the vendor-neutral `516641` class rather than asserting a production-glass identity.

## Glass Identification and Selection

| Element | Stored identification | Basis | Design significance |
|---|---|---|---|
| L1 | `729547 — lanthanum crown` | Cross-vendor class; vendor unresolved | Moderate-dispersion positive front collector |
| L2, L3 | `497816 — ED crown` | Cross-vendor class; unsigned patent `|ΔθgF| = 0.0375` | Low-index, high-Abbe positive pair required by patent conditions |
| L4 | `699301 — dense flint` | Cross-vendor class; production APD marking is unquantified in Example 3 | Strong negative front-group element |
| L5f | `603380 — flint` | Cross-vendor class | Negative member of rear cemented doublet |
| L5r | `883408 — high-index lanthanum glass` | Cross-vendor class | High-index positive member; satisfies `nd > 1.85` |
| L6 | `516641 — borosilicate crown` | Six-digit class; S-BSL7 is an exact catalog candidate, but vendor unresolved | Rear positive aspherical element |

The prescription publishes d-line indices and Abbe numbers but not per-element C-, F-, or g-line indices. It also does not give a signed partial-dispersion deviation. For that reason, the model does not populate `nC`, `nF`, `ng`, or `dPgF` for any element. The L2/L3 APD notation and the production-diagram marking at L4 remain provenance notes rather than inputs to the spectral model.

This limitation matters when interpreting chromatic performance. The patent states that the low-index, high-Abbe front positives and abnormal-partial-dispersion material improve axial chromatic correction (¶¶0016, 0028–0030), but the available source and catalog evidence does not support an APO designation or a quantitative secondary-spectrum claim.

## Focus Mechanism

The patent publishes only the infinity prescription. Cosina publishes a 0.7 m minimum focus and identifies a helicoid focusing mechanism, but it does not publish an internal movement diagram or finite-conjugate spacing table. The model therefore uses a `CONSTRAINED_RECONSTRUCTION`, not a published close-focus state.

The reconstruction treats the complete optical unit as rigid and preserves every internal spacing. Only the image-side gap after surface 14A changes. This is the one-variable motion expected from unit focusing on a conventional helicoid, but it remains a modeling inference.

| Quantity | Infinity state | Modeled 0.7 m state |
|---|---:|---:|
| Rear gap after 14A | 36.190000 mm | 46.299333 mm |
| Optical-unit extension | 0 | 10.109333 mm toward the object |
| Internal element and group gaps | Published values | Unchanged |
| Object distance from first surface | Infinity | 599.020667 mm |
| Lateral magnification | 0 | −0.135687 |
| Absolute magnification | 0 | 0.135687, approximately 1:7.37 |

The 0.7 m distance is measured from the image plane in the reconstruction. The computed conjugate residual is approximately `1.0 × 10⁻12 mm`, so the modeled close state is internally consistent with the stated distance and rigid-unit constraint.

## Aspherical Surfaces

Surfaces 13A and 14A form the two sides of L6. The patent uses the standard rotationally symmetric conic-plus-even-polynomial equation:

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},
\qquad c=1/R.
$$

The patent's `K` is the standard conic constant; `K = 0` is a spherical base conic. No conversion was required.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 13A | 0 | +1.22362×10⁻⁶ | −4.66525×10⁻⁸ | +3.78350×10⁻¹⁰ | −7.05913×10⁻¹³ |
| 14A | 0 | +5.36088×10⁻⁶ | −4.41481×10⁻⁸ | +4.15234×10⁻¹⁰ | −8.17896×10⁻¹³ |

The patent publishes terms through A10. The data schema carries A12 and A14 as zero. No focal-length scaling was applied, so the coefficients are copied without transformation; `K` likewise remains unchanged.

At the validated modeled semi-diameters, surface 13A has a +0.042988 mm departure from its spherical base at 13.8 mm height, while surface 14A has a +0.180588 mm departure at 13.2 mm height. The front asphere therefore increases imageward sag relative to its weak positive spherical base, whereas the rear asphere makes the negative-radius surface substantially shallower at the adopted rim. These departures are quoted only at the semi-diameters validated for the final data file.

The patent assigns the rear aspherical element the task of residual off-axis correction (¶0033). A more specific allocation among coma, astigmatism, field curvature, and distortion would require aberration decomposition not published for the individual surfaces.

## Chromatic Correction Strategy

The patent's chromatic strategy is concentrated in the front group. L2 and L3 combine high Abbe number with low refractive index, while L4 supplies strong negative power in a dense-flint class. The rear cemented pair then combines a moderate-index negative component with a very high-index positive component. This distribution allows the positive and negative powers to be placed in materially different dispersion classes without increasing the element count beyond seven.

The source explicitly states that low-index, low-dispersion front positive elements are intended to improve axial color while the three-positive-meniscus geometry controls spherical and astigmatic aberrations (¶¶0016, 0028–0030). The prescription satisfies those index and Abbe conditions. The analysis does not extend that source statement into an APO claim because the signed partial-dispersion and line-index data needed for such a claim are absent.

## Conditional Expressions

| Patent condition | Example 3 value | Result |
|---|---:|---|
| `R1 > R3 > R5` | 72.787 > 41.103 > 28.177 mm | Satisfied |
| `|ΔθgF| > 0.02` for selected front positives | 0.0375 for L2 and L3 | Satisfied |
| `νd > 75` for at least two front positives | 81.61 for L2 and L3 | Satisfied |
| `nd1 < 1.57` for those front positives | 1.49700 for L2 and L3 | Satisfied |
| rear positive `nd2 > 1.85` | 1.88300 for L5r | Satisfied |
| `TT/f < 1.3` | 90.872 / 74.500 = 1.219758 | Satisfied |

Figure 7 reports `TT = 90.872 mm`, while the rounded two-decimal spacings in Table 5 sum to 90.870 mm. The 0.002 mm difference is retained as a source-precision difference rather than corrected. Figure 7 omits a separate numerical row for the `nd2 > 1.85` condition, but Table 5 gives the qualifying L5r index directly.

## Modeling Boundaries

The patent does not publish clear apertures or physical semi-diameters. The modeled semi-diameters were inferred from the reverse-solved f/1.54 pupil, on-axis marginal rays, the default off-axis ray bundle, Figure 5, and the official mechanical envelope. They are therefore modeling values rather than source facts. The adopted front semi-diameter is 25.5 mm, and the adopted stop semi-diameter is 13.285140 mm.

The stop's axial placement is source-published; only its diameter is derived. The resulting entrance-pupil semi-diameter is 24.189126 mm. In the validated model, the front elements clip part of the wide-open off-axis bundle; this is treated as mechanical vignetting consistent with the production barrel envelope. The stop and rear group contain the validated default bundle.

Patent ¶0046 permits optional protective, color-selection, infrared, or low-pass plates behind the last element. None appears in Example 3's table or Figure 5, and the patent states that such plates do not alter the disclosed lens construction. They are omitted from the sequential model. No dummy, flare-cutter, folded-path, or mechanical planes are included.

No geometric scaling was applied. Radii, thicknesses, rear spacing, image-plane coordinates, and aspherical coefficients remain at the original Example 3 scale. No patent number or coefficient was silently corrected.

## Verification Summary

The final prescription was independently traced in reduced-angle and ordinary-angle formulations. The maximum matrix difference is `7.11 × 10⁻15`, and the determinant is unity to machine precision.

| Quantity | Computed result | Source or model target |
|---|---:|---:|
| Effective focal length | 74.502507 mm | Patent 74.5 mm |
| Back focal distance | 36.190318 mm | Table 5 rear gap 36.19 mm |
| Infinity track from surface 1 to image | 90.870 mm | Rounded Table 5 sum |
| Front-group net focal length | +156.264 mm | Computed functional-group value |
| Rear-group net focal length | +64.198 mm | Computed functional-group value |
| Cemented L5 net focal length | +131.414 mm | Computed cemented-pair value |
| Petzval sum | +0.002333052 mm⁻¹ | Surface-by-surface `φ/(n·n′)` |
| Petzval radius under `−1/ΣP` convention | −428.623 mm | Computed |
| Minimum element edge thickness | 1.894374 mm | Geometry validation |
| Maximum actual rim-slope angle | 54.792806° | Below 64.2° policy |
| Minimum shared-gap rim clearance | 1.471721 mm | Positive clearance |

The modeled f-number is exactly 1.54 because the stop diameter was solved from the published design f-number and the computed entrance pupil. This is a derived aperture model, not an independent patent stop-diameter measurement.

Because the reconstructed focus state changes only the image-side gap, the physical lens geometry is identical at both endpoints. The asphere conic limits, edge thicknesses, actual rim slopes, cross-gap intrusion, on-axis clearance, and adopted off-axis containment pass the independent geometry checks.

## Sources and References

1. Cosina Co., Ltd., JP 2020-122918 A, especially ¶¶0010–0019, 0023–0037, 0043–0046, 0055–0062; Tables 5–6; Figures 5–7.
2. Cosina, “NOKTON Vintage Line 75mm F1.5 Aspherical VM,” official product page: `https://www.cosina.co.jp/voigtlander/en/vm-mount/nokton-vintage-line-75mm-f1-5-aspherical/`
3. Cosina, VM 75 mm f/1.5 instruction manual: `https://www.cosina.co.jp/wp-content/uploads/2021/10/VM-75_15-ENG-V1_0.pdf`
4. Cosina, Voigtländer 2023 product catalog: `https://www.cosina.co.jp/wp/wp-content/uploads/2023/02/V-2023CATA.pdf`
5. Cosina, Voigtländer English lens index, production introduction date: `https://www.cosina.co.jp/voigtlander/en/`
6. HOYA, optical-glass cross-reference index: `https://www.hoyaoptics.eu/glass-cross-reference-index`
7. OHARA, optical-glass product table: `https://www.ohara-inc.co.jp/en/product/01000/`
