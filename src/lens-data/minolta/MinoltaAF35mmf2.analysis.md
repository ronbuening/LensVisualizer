## Patent Reference and Design Identification

**Patent:** JP1988-201614 A\
**Application Number:** 特願昭62-35188\
**Filed:** 1987-02-17\
**Published:** 1988-08-19\
**Inventor:** 得丸 祥\
**Applicant:** Minolta Camera Co., Ltd.\
**Title:** 小型のレトロフォーカス型広角レンズ (Compact retrofocus-type wide-angle lens)\
**Embodiment analyzed:** Example 4

The modeled prescription is Example 4 of JP1988-201614 A, correlated in this corpus to the MINOLTA AF 35mm f/2. The correlation is fixed for this entry but is not presented as a manufacturer-confirmed patent-to-product identification. It rests on several convergent features:

1. Example 4 resolves to seven physical elements in six air-separated groups, matching the Minolta service manual's 7-element/6-group construction.
2. The patent example is normalized to $f=100$; a uniform scale factor of $s=0.35$ gives a computed EFL of 35.000165853 mm, corresponding to the production lens's marketed 35 mm focal length.
3. The patent specifies FNO = 2.0, while the service manual identifies the production lens as an f/2 lens.
4. The patent gives a 64° full field ($2\omega$); the service manual gives a rounded 63° angle of view.
5. Both sources describe a retrofocus wide-angle architecture.

All dimensional prescription values in the data model are the Example 4 values scaled by 0.35. Refractive indices and Abbe numbers are unchanged. The design is entirely spherical, so there are no aspheric coefficients or conic constants to transform under scaling. The patent does not publish lens semi-diameters, a numerical stop split within the stop-bearing air gap, or a physical stop diameter; those quantities are modeling inferences described below.

## Optical Architecture

The lens is a seven-element, six-group retrofocus prime divided in the data model into a front lens set and a rear lens set. From object to image, the sequence is a negative meniscus (L1), a strong positive biconvex element (L2), a cemented negative-positive pair (L3a/L3b), the aperture stop, a strong negative biconcave element (L4), a positive meniscus (L5), and a final positive biconvex element (L6).

This power distribution establishes the long rear clearance characteristic of a retrofocus SLR wide-angle design. From the final TypeScript arrays, the computed EFL is 35.000165853 mm and the last-vertex BFD is 36.398842615 mm, giving BFD/EFL = 1.039962004. The design therefore satisfies the project's retrofocus criterion, $\mathrm{BFD}>\mathrm{EFL}$. The first-to-last optical-vertex span is 49.019600 mm and the first-vertex-to-Gaussian-image track is 85.418443 mm, so TL/EFL = 2.440515367; the design is not telephoto by the project's TL/EFL < 1 criterion.

The patent locates stop S only within the air space between the rear surface of the cemented L3 component and L4. Fresh digitization of patent Fig. 4 places the diaphragm at approximately 45.6% of the r7→r8 gap measured from r7; the service-manual focusing sketch independently supports a near-midgap placement but is not treated as a dimensional drawing. The model therefore uses 46.0%, splitting the scaled published 8.737750 mm air space into 4.019365 mm before the stop and 4.718385 mm after it. The physical stop semi-diameter, 9.596950110 mm, is solved so that the entrance pupil reproduces the modeled f-number rather than being equated directly with $f/(2N)$.

The patent publishes no semi-diameters. The authored clear apertures are therefore inferred from the patent and service-manual sections and constrained by traced marginal/chief rays and the current geometry rules. They are not source dimensions. No sensor cover plate, filter, inactive dummy plane, or flare-cutter plane is part of the selected Example 4 prescription, and no omitted plate requires an air-equivalent rear-spacing correction.

The isolated focal lengths quoted in the element discussion below are standalone element quantities computed from each element's two exterior surfaces and center thickness. They are not additive decompositions of the complete lens. The cemented L3 value is separately computed for the bonded pair, while the 35.000165853 mm system EFL includes all spacings and in-situ interactions.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.53172, νd = 48.84. Glass: 532488 — extra-light-flint / TIL-class coordinate (supplier unresolved). Isolated f = −44.860855 mm.**

L1 is the front negative retrofocus element. Its negative standalone power establishes the inverted-telephoto front end; in the complete system the resulting architecture has a last-vertex BFD slightly greater than the EFL while retaining the 64° patent field. The patent's first conditional expression explicitly constrains the magnitude of this first component's focal length relative to the complete system.

The glass annotation is deliberately generic. The patent supplies the optical coordinates but no maker identity, so the data file does not convert a coordinate match into supplier provenance.

### L2 — Biconvex Positive

**nd = 1.83400, νd = 37.05. Glass: S-LAH60 coefficient proxy (supplier unspecified; patent 834371). Isolated f = +29.326107 mm.**

L2 is the strongest positive element in the front lens set by standalone power. It follows the widely separated negative L1 and returns the front subsystem toward positive convergence before the cemented third component. The patent also requires $\nu_1>\nu_2$, and Example 4 satisfies that relation with 48.84 > 37.05.

The data file retains the exact patent coordinates and uses S-LAH60 only as a near-exact dispersion proxy; the 0.11 Abbe residual does not establish the patent supplier.

### L3a / L3b — Plano-Concave Negative + Plano-Convex Positive Cemented Pair

**L3a: nd = 1.69895, νd = 30.05. Glass: 699301 — dense-flint class coordinate (supplier unresolved). Isolated f = −48.221833 mm.**\
**L3b: nd = 1.77250, νd = 49.77. Glass: J-LASF016 coefficient proxy (supplier unspecified; patent 773498). Isolated f = +40.396117 mm.**

These two physical elements form the patent's third optical component. L3a is plano-concave and L3b is plano-convex; their common interface is planar. The data model represents that boundary as a true cemented junction: the interface changes directly from the L3a medium to the downstream L3b medium without an artificial cement layer.

Taken as an isolated bonded component, L3a/L3b has a net focal length of +181.340987 mm. That weak positive net power is distinct from the much larger-magnitude standalone powers of its two constituent elements and from the pair's in-situ effect after propagation through the preceding front-group spacings. The patent's second conditional expression constrains this cemented component's focal length relative to the complete lens.

### L4 — Biconcave Negative

**nd = 1.80518, νd = 25.43. Glass: 805254 — SF6-class coordinate (supplier unresolved). Isolated f = −21.705122 mm.**

L4 sits immediately behind the aperture stop and has the strongest negative standalone power in the prescription (the smallest absolute focal length among the negative elements). Its position makes it a major part of the rear power alternation: the stop is followed by a strong negative element and then two positive elements.

The `805254` annotation describes a coordinate/class match only. Although this coordinate has catalog analogues, the patent does not identify the supplier, so the analysis does not assign a vendor-specific glass.

### L5 — Positive Meniscus

**nd = 1.78590, νd = 44.20. Glass: 786442 — lanthanum-flint class coordinate (supplier unresolved). Isolated f = +53.637893 mm.**

L5 reverses the negative power introduced by L4 and begins the final positive relay toward the image plane. Its two negative radii make it a positive meniscus in the adopted left-to-right sign convention; the positive standalone focal length confirms the power sign.

The glass coordinate is compatible with a lanthanum-flint class, but the patent does not state a supplier. The data therefore uses a class-level annotation rather than a branded catalog name.

### L6 — Biconvex Positive

**nd = 1.77250, νd = 49.77. Glass: J-LASF016 coefficient proxy (supplier unspecified; patent 773498). Isolated f = +40.806326 mm.**

L6 is the final positive element and uses the same published $(n_d,\nu_d)$ coordinate as L3b. It completes the rear positive relay and is followed only by the reconstructed image-side focus gap.

Its glass uses the same supplier-neutral J-LASF016 coefficient proxy as L3b. The source coordinate is preserved, and the patent does not establish a supplier-specific identity.

## Glass Identification / Selection

The patent explicitly states that the tabulated refractive indices and Abbe numbers are d-line quantities at λ = 587.6 nm. It does not identify a glass maker and publishes no element-specific C-line, F-line, g-line, or anomalous-partial-dispersion data. The data file therefore preserves the patent coordinates and uses class/code labels or supplier-neutral coefficient proxies rather than claiming supplier-specific identities.

A fresh catalog audit was performed without assuming the existing labels. The table below records representative authoritative catalog coordinates and residuals relative to the patent. Exact coordinate agreement does not establish which supplier Minolta used.

| Elements | Patent nd / νd | Representative catalog coordinate | Δnd | Δνd | Data-file treatment |
|---|---|---|---:|---:|---|
| L1 | 1.53172 / 48.84 | CDGM H-QF6A, 532488: 1.53172 / 48.84 | 0.00000 | 0.00 | Generic 532488 / TIL-class coordinate retained |
| L2 | 1.83400 / 37.05 | OHARA S-LAH60: 1.83400 / 37.16 | 0.00000 | +0.11 | S-LAH60 coefficient proxy; supplier unspecified |
| L3a | 1.69895 / 30.05 | CDGM H-ZF11, 699301: 1.69894 / 30.05 | −0.00001 | 0.00 | Generic 699301 dense-flint class retained |
| L3b, L6 | 1.77250 / 49.77 | HIKARI J-LASF016: 1.77250 / 49.62 | 0.00000 | −0.15 | J-LASF016 coefficient proxy; supplier unspecified |
| L4 | 1.80518 / 25.43 | SCHOTT SF6: 1.80518 / 25.43 | 0.00000 | 0.00 | Generic 805254 SF6-class retained |
| L5 | 1.78590 / 44.20 | OHARA S-LAH51, 786442: 1.78590 / 44.20 | 0.00000 | 0.00 | Generic 786442 lanthanum-flint class retained |

OHARA's cross-reference table also places its S-TIL6 alongside HOYA E-FEL6 and HIKARI J-LLF6 in the same coordinate family, while CDGM's database gives an exact 532488 H-QF6A coordinate. These cross-vendor relationships support a class-level annotation but not supplier provenance. The palette spans moderate- to high-index materials and a broad range of Abbe numbers, but those coordinates alone do not justify an apochromatic or anomalous-dispersion claim. No `nC`, `nF`, `ng`, or `dPgF` values are authored; catalog line indices are not imported into the prescription, and no element is marked as anomalous partial dispersion.

## Focus Mechanism

The production service manual describes a double-helicoid focusing system in which all optical lenses move together as the focusing ring is rotated. It also gives a minimum focusing distance of 0.3 m. The patent itself supplies no finite-focus prescription or variable-spacing table.

Accordingly, the data file marks focus as **CONSTRAINED_RECONSTRUCTION**. All internal lens spacings remain fixed. The only variable quantity is the final image-side gap, which changes from 36.398842615 mm at infinity to 42.338034718 mm at the modeled 0.300 m minimum focus distance. In a fixed-image-plane interpretation this corresponds to a rigid forward translation of the optical assembly by 5.939192103 mm toward the object.

The 0.300 m value is modeled as object-to-image-plane distance. Under that reference-plane assumption, the finite-conjugate solution places the object 208.642365282 mm in front of the first optical surface and gives a paraxial lateral magnification of −0.169690399, or 0.169690399× in magnitude. These close-focus quantities are computed reconstruction results, not values printed in the patent or service manual.

## Conditional Expressions

The patent gives four principal conditions and two additional preferred conditions. Because all quantities are ratios, the uniform 0.35 scale leaves their values unchanged. Recalculation from the final data file gives:

| Condition | Published expression | Example 4 value | Result |
|---|---|---:|---|
| (1) | $1.2<|f_1|/f<1.5$ | 1.281732637 | Pass |
| (2) | $4.0<f_3/f<16.0$ | 5.181146506 | Pass |
| (3) | $0.04<d_4/f<0.05$ | 0.042079801 | Pass |
| (4) | $\nu_1>\nu_2$ | 48.84 > 37.05 | Pass |
| (5), as printed | $-0.72<r_A/f<-1.0$ | −0.891595775 | Impossible interval as printed |
| (5), inferred corrected order | $-1.0<r_A/f<-0.72$ | −0.891595775 | Pass |
| (6) | $0.2<d_X/f<0.3$ | 0.249648817 | Pass |

Condition (5) is a source error visible in the patent, not an OCR correction. The printed lower and upper bounds define an empty interval. The worked examples, including Example 4, lie between −1.0 and −0.72, so the defensible interpretation is to reverse the bound order while preserving the raw printed form in the audit. No prescription number is altered to make this condition pass.

## Verification Summary

Independent reduced-angle sequential tracing and ABCD multiplication of the final TypeScript surface array agree to represented floating-point precision. The reconstructed system gives EFL = 35.000165853 mm, last-vertex BFD = 36.398842615 mm, and modeled wide-open f-number = 2.000000000052. The entrance-pupil diameter associated with the inferred stop is 17.500082926 mm.

The surface-by-surface Petzval sum, using $\phi/(n\,n')$, is +0.005005868136 mm⁻¹. This is a computed paraxial property of the modeled prescription, not a patent-published figure.

The inferred semi-diameters also satisfy the local geometry and containment checks used during data construction. The minimum computed glass edge thickness is 1.436380 mm, the largest spherical rim-slope angle is 58.414697°, the tightest positive shared-gap sag utilization is 85.8338% of the permitted 90% limit, and the smallest clearance among the required nonlinear ray bundles is 0.340232 mm. These checks apply at both defined focus endpoints because unit focus changes only the final image gap.

## Sources / References

- Minolta Camera Co., Ltd., **JP1988-201614 A**, *小型のレトロフォーカス型広角レンズ*, Example 4; prescription and figures on the published patent pages 3–5.
- Minolta Camera Co., Ltd., **AF 35mm F2 / MAXXUM AF 35mm F2 Service Manual**, codes 2597-100 / 2597-600; product specification page, optical construction section, and focusing description.
- OHARA INC., **Glass Type** and **Comparative Table of Recommended Glasses**; current d-line catalog coordinates and cross-vendor equivalents used only for the supplier-neutral glass audit.
- SCHOTT, **Optical Glass — Refractive Index and Dispersion / Optical Glass Collection**, SF6 entry; current/legacy d-line coordinate check for 805254.
- CDGM, **Optical Glass Database**, H-QF6A (532488) and H-ZF11 (699301) datasheets; d-line coordinate checks.
