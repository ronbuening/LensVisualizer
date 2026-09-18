## Patent Reference and Design Identification

**Patent:** US 2017/0307860 A1
**Application Number:** US 15/620,643 (continuation of PCT/EP2015/076613, filed November 13, 2015)
**Filed:** June 12, 2017
**Published:** October 26, 2017
**Priority:** DE 10 2014 118 383.5, December 11, 2014
**Inventors:** Marco Pretorius; Vladan Blahnik
**Applicant:** Carl Zeiss AG
**Title:** Objective Lens for a Photography or Film Camera and Method for Selective Damping of Specific Spatial Frequency Ranges of the Modulation Transfer Function of Such an Objective Lens
**Embodiment analyzed:** First specific embodiment (¶¶0076–0088, Figs. 6–8, construction table on p. 8), cataloged here as Example 1, with its removable wavefront-manipulator module omitted

US 2017/0307860 A1 is not a lens-design patent in the usual sense. Its subject is a removable Alvarez-type wavefront manipulator: two plates carrying facing free-form surfaces that are displaced laterally in opposite directions to introduce an adjustable, sign-reversible spherical aberration for soft-focus effects, without the field-dependent coma and astigmatism that the patent attributes to prior-art variable-air-gap soft-focus lenses (¶¶0005, 0009–0010). To demonstrate the manipulator, the patent inserts it into two host objectives. The first specific embodiment is a cine lens with a stated focal length of 135 mm and a relative aperture of f/1.8, whose "main lens only includes spherical lenses" (¶0078). The construction table on p. 8 lists 20 surfaces: 16 belong to that main lens, and surfaces 8–11 are the two N-LASF44 manipulator plates.

The prescription in the data file transcribes the main lens only. The production correlation with the ARRI/ZEISS Ultra Prime 135 mm T1.9 is a research inference assembled from the following convergent evidence; no manufacturer source reviewed identifies this patent as the production formula.

1. **Construction.** With the manipulator plates removed, the main lens has 8 elements in 7 air-separated groups. ARRI's English Ultra Prime brochure lists the 135 mm lens as 8 lenses in 7 groups [5].
2. **Applicant and focal length.** The embodiment is a 135 mm cine objective from Carl Zeiss AG. ZEISS states that the Ultra Primes were developed in cooperation between ARRI and ZEISS [4].
3. **Image field.** The patent plots the oblique pencil for a maximum image height of y′ = 15 mm (¶0086), i.e. a 30 mm image diameter. ARRI lists 30.00 mm as the image diameter for DIN Super 35 and states that the Ultra Primes are designed for the 31.14 mm ANSI Super 35 image diameter [3]. Real chief-ray traces of the modeled prescription give horizontal angles of view of 10.55° (ANSI Super 35), 10.17° (DIN Super 35) and 9.33° (Normal 35), against ARRI's 10.5°, 10.2° and 9.3° [2, 3].
4. **Length.** The modeled first-vertex-to-image distance is 168.61 mm. ARRI's 119 mm mount-to-front length [2, 3] plus the 52 mm PL flange focal distance [13] gives 171 mm from the image plane to the front of the housing, and the brochure's own length column gives 170 mm for the 135 mm lens [5]. Both are consistent with a front vertex recessed a few millimeters inside the barrel.
5. **Virtual entrance pupil behind the sensor.** ARRI lists the entrance pupil of the LDS Ultra Prime 135 at −56.9 mm, i.e. 56.9 mm behind the sensor plane [3]. The modeled paraxial entrance pupil also lies behind the image plane, by 23.51 mm. The unusual sign agrees; the magnitude differs by about 33 mm, which the patent data do not explain.

Several facts limit the strength of the correlation. The Ultra Prime series was introduced in the late 1990s [7], whereas the patent claims a 2014 priority; the patent therefore reuses a donor cine formula rather than disclosing the original product design. The brochure also states that the Ultra Primes were developed "employing lead-free and arsenic-free optical glasses" [5], while the patent example names the lead-containing flints SF1 and SF2. Either the patent lists legacy catalog designations for glasses whose production melts were lead-free, or this example is not the production glass selection; the available sources do not decide between the two. ARRI's archival documents disagree about the 135 mm lens's type designation: the April 2000 depth-of-field tables label it Sonnar T\* 1.7/135 [6], the English brochure labels it Planar 1.7/135 [5], and the current technical data identify it as Sonnar T\* [2]. The patent's f/1.8 is a geometric relative aperture, whereas the marketed T1.9 is a transmission stop; the two are not interchangeable. Finally, with catalog glass indices the modeled effective focal length is 134.29 mm, not the patent's integer 135 mm, and the entrance-pupil magnitude disagrees as noted above.

## Optical Architecture

The modeled lens comprises 8 elements in 7 groups, all spherical, arranged around a long air interstice that houses the aperture stop and, in the patent, the wavefront manipulator. The patent's reference numerals divide the system into three parts (Fig. 7, ¶0077):

- **First lens-element arrangement 1 (surfaces 1–7):** biconvex L1, positive meniscus L2, and the cemented doublet D1, formed by a plano-convex L3 and a biconcave L4. D1's strongly concave rear face (R7 = +38.861 mm) faces the stop. The group's focal length is +403.21 mm.
- **Interstice 9:** in the patent, 18.1758 mm of air, the two 3.00 mm manipulator plates separated by 0.10 mm, a further 10.80 mm of air, and the stop at surface 12. In the model, the plate chain is replaced by a single 35.0758 mm air space, so that the stop and rear group keep their published axial stations. The stop lies 1.00 mm ahead of L5.
- **Second lens-element arrangement 3 (surfaces 13–20):** biconvex L5, biconcave L6 air-spaced 0.20 mm from the thick meniscus L7, and the positive meniscus L8. The group's focal length is +102.88 mm.

**Power distribution.** The system is weakly positive ahead of the stop and strongly positive behind it. For an axial ray from infinity, the fraction of the final convergence contributed by each surface is h·φ/(h₁·Φ), where h is the paraxial marginal height, φ the surface power, h₁ the entrance height and Φ the system power. These fractions sum exactly to one. The front arrangement supplies 33.3% of the convergence and the rear arrangement 66.7%.

**First-order properties.** At the d line, with catalog indices, the model has an effective focal length of 134.29 mm and a paraxial back focal length of 33.22 mm. The front principal plane lies 27.34 mm behind surface 1, and the rear principal plane lies 101.07 mm ahead of surface 20. The ratio of the 168.61 mm first-vertex-to-image track to the focal length is 1.256. The lens is therefore neither a telephoto (track/EFL < 1) nor a retrofocus (BFL > EFL). It is a long-track objective whose back focus is roughly a quarter of its focal length.

**Pupils.** The front arrangement forms a virtual image of the stop. Its rear principal plane lies 111.82 mm ahead of surface 1, which places the stop 206.24 mm behind that plane, well inside the group's 403.21 mm focal length. The resulting image is virtual, magnified 2.047×, and located 192.13 mm behind surface 1, which is 23.51 mm beyond the image plane. This is the geometric origin of the entrance pupil behind the sensor. The exit pupil lies 27.08 mm ahead of surface 20 at a magnification of 0.919. With the patent's plates in place, the calculated entrance pupil lies 11.72 mm behind the published image plane. The 6 mm of N-LASF44 glass shifts the apparent stop position, which is one reason why removing the module changes the pupil geometry.

**Architectural type.** The front arrangement resembles the front half of a Gauss objective: two positive members followed by a thick negative component that is concave toward the stop. The rear arrangement does not mirror it. It lacks a stop-facing negative meniscus, begins with a biconvex element immediately behind the stop, and ends with a thick meniscus whose concave face points toward the image. This description is the author's reading of the prescription. It does not resolve the Planar/Sonnar naming conflict in ARRI's documents.

No focus or zoom kinematics are modeled; see Focus Mechanism.

## Element-by-Element Analysis

The table below gives in-situ quantities for each air-separated component. They are computed at the d line from the final data file, with the calibrated f/1.8 entrance-pupil radius of 37.30 mm.

- **Convergence share** is Σh·φ/(h₁·Φ) over the component's surfaces.
- **Petzval** is the surface sum of φ/(n·n′).
- **Axial color** is the paraxial Seidel longitudinal contribution to the F−C focus difference, using catalog C- and F-line indices. Negative values move the F-line focus toward the lens relative to C.

The Seidel contributions sum to −0.131 mm. This agrees to within 3.3% with the exact two-wavelength paraxial back-focus difference of −0.136 mm; the residual is the expected error of a first-order expansion in Δn.

| Component | Standalone f (mm) | Convergence share | Petzval (mm⁻¹) | Axial color (mm) |
| --- | ---: | ---: | ---: | ---: |
| L1 | +204.5 | +0.657 | +0.00329 | −1.234 |
| L2 | +160.6 | +0.829 | +0.00388 | −1.253 |
| D1 (L3+L4) | −67.0 (net) | −1.153 | −0.00955 | +2.518 |
| L5 | +69.2 | +0.935 | +0.00907 | −0.913 |
| L6 | −97.5 | −0.592 | −0.00596 | +1.180 |
| L7 | −781.9 | +0.073 | −0.00290 | −0.117 |
| L8 | +141.4 | +0.251 | +0.00391 | −0.312 |

### L1 — Biconvex Positive

nd = 1.48749, νd = 70.41. Glass: N-FK5 (SCHOTT) — fluor crown. f = +204.5 mm.

L1 is the front collector and carries the largest marginal-ray height in the system (37.30 mm paraxially at f/1.8). Its rear surface is nearly flat (R2 = −2511.9 mm), so almost all of its refraction occurs at the front surface: surface 1 supplies a convergence share of 0.632 and surface 2 only 0.025. Its axial-color contribution (−1.234 mm) is typical of a low-dispersion positive element placed at full aperture height.

The rear radius of L1 has exactly the same magnitude as the rear radius of L8 (R20 = +2511.9 mm). The patent does not comment on this. A shared test-plate radius is a plausible explanation, but it is an inference.

### L2 — Positive Meniscus, convex to object

nd = 1.496999, νd = 81.54. Glass: S-FPL51 (OHARA) — fluorophosphate crown, catalog ΔPg,F = +0.0308 on the SCHOTT normal line (OHARA prints Δθg,F = +0.0280 on its own normal line). f = +160.6 mm.

L2 is the strongest converging component ahead of the stop (convergence share +0.829). Its steep front surface (R3 = +51.212 mm) alone supplies a share of 1.249, partly offset by the concave rear surface. Relative to its in-situ power, L2 contributes less axial color than L1: −1.511 mm per unit of convergence share, against −1.879 mm for L1, a ratio of 0.804. This ordering is consistent with S-FPL51's higher Abbe number (the νd ratio is 0.864), although the element's height and angle distribution also enter the Seidel term.

The patent names the glass but publishes no partial-dispersion data. The anomalous partial dispersion quoted above is a catalog property. The data do not support any statement about its secondary-spectrum effect.

### D1 — Cemented Doublet (L3 + L4)

**L3 — Plano-Convex, flat to object.** nd = 1.80518, νd = 25.36. Glass: N-SF6 (SCHOTT) — dense flint. f = +117.2 mm.

**L4 — Biconcave Negative.** nd = 1.64769, νd = 33.85. Glass: SF2 (SCHOTT) — dense flint, lead-containing type, still listed in SCHOTT's current preferred catalog. f = −42.0 mm.

D1 is a thick negative component (17.90 + 3.95 mm on axis), with a net focal length of −66.97 mm. Its glass pairing is unusual in two respects. Both members are flints, and the positive member uses the more dispersive, higher-index glass.

The doublet's chromatic role is clear from the decomposition. D1 is the largest axial-color overcorrector in the lens (+2.518 mm), and it offsets the combined undercorrection of L1 and L2. Within the doublet, the contributions come from three surfaces:

- The flat entrance face (surface 5), where the converging beam enters N-SF6, contributes +2.506 mm.
- The junction (surface 6), where the index steps down by 0.157 across R6 = −94.406 mm, contributes −1.474 mm.
- The rear surface (surface 7) contributes +1.486 mm.

The doublet is also the main source of negative Petzval curvature ahead of the stop. Surface 7 (R7 = +38.861 mm, concave toward the stop) has the second-largest negative surface Petzval contribution in the system (−0.01012 mm⁻¹), and it removes 1.288 units of convergence share.

The index ordering favors field flattening. In a thin-lens proxy at the elements' actual standalone powers, the pair's Petzval sum is −0.00972 mm⁻¹. Exchanging the two indices while holding the powers fixed would weaken it to −0.00801 mm⁻¹. This comparison is illustrative, not a statement of the designer's intent.

### L5 — Biconvex Positive

nd = 1.62014, νd = 63.48. Glass: N-PSK53 (SCHOTT inquiry glass) — dense phosphate crown. f = +69.2 mm.

L5 sits 1.00 mm behind the stop and is the strongest positive element in the lens (L4 has the greatest standalone power overall). It carries the largest positive Petzval contribution of any component (+0.00907 mm⁻¹) and a convergence share of 0.935. Together with L6, it forms the main converging–diverging pair of the rear arrangement.

The glass is named in the patent as NPSK53. It is kept as N-PSK53, which SCHOTT lists as an inquiry glass. It is not replaced by the similarly named N-PSK53A, whose index differs.

### L6 — Biconcave Negative

nd = 1.71736, νd = 29.51. Glass: SF1 (SCHOTT) — dense flint, lead-containing type, still listed in SCHOTT's current preferred catalog. f = −97.5 mm.

L6 follows L5 after a 2.00 mm air space and returns part of the rear group's Petzval sum (−0.00596 mm⁻¹). Its axial-color contribution (+1.180 mm) is the rear arrangement's counterpart to D1: it offsets the undercorrection of L5, L7 and L8. It is separated from L7 by only 0.20 mm of air.

### L7 — Negative Meniscus, convex to object

nd = 1.48749, νd = 70.41. Glass: N-FK5 (SCHOTT) — fluor crown. f = −781.9 mm.

L7 is the most distinctive element of the rear arrangement. It is 17.30 mm thick on axis, and both radii are short and of the same sign (R17 = +34.475 mm, R18 = +26.416 mm). Standing alone, it is almost afocal and weakly negative.

In situ, its convergence share is slightly positive (+0.073). The paraxial marginal height falls from 15.67 mm at the front surface to 10.91 mm at the rear surface, so the steeper rear surface acts on a much smaller beam. This is a clear case where standalone and in-situ power have opposite signs.

The element's Petzval contribution is nevertheless net negative (−0.00290 mm⁻¹). Its rear surface carries the largest negative surface Petzval term in the whole system (−0.01241 mm⁻¹). A thick meniscus with little power but a strongly curved concave face is a classic field-flattening construction; the computed contributions are consistent with that role here. The low-dispersion glass keeps its chromatic contribution small (−0.117 mm).

### L8 — Positive Meniscus, convex to object

nd = 1.80518, νd = 25.36. Glass: N-SF6 (SCHOTT) — dense flint. f = +141.4 mm.

L8 is the last element. It is a moderate positive meniscus (convergence share +0.251) with an almost flat rear face (R20 = +2511.9 mm). It uses the same high-index flint as L3, and it contributes modest axial undercorrection (−0.312 mm). The patent text assigns no specific role to it.

## Glass Identification and Selection

The patent's construction table names a glass for every element but prints no refractive indices or Abbe numbers. The authored nd, νd and ΔPg,F values are nominal catalog coordinates for the named glasses, not melt data or patent-published values. C/F/g indices are evaluated from the catalog dispersion curves at runtime rather than copied onto each element. The patent's typography is normalized to current vendor designations without changing the glass families:

- NFK5 → N-FK5, NSF6 → N-SF6, NPSK53 → N-PSK53, NLASF44 → N-LASF44, SFPL51 (Ohara) → S-FPL51.
- The lead-containing SF1 and SF2 are not silently converted to their lead-free N-SF1 and N-SF2 counterparts. Both remain in SCHOTT's current preferred-glass catalog.

The catalog curves pass coefficient/index consistency checks. N-SF6 uses its own lead-free dispersion curve, distinct from SF6; N-PSK53 likewise retains the named inquiry-glass curve.

| Glass (vendor) | nd | νd | ΔPg,F (catalog) | Used in | Class / role |
| --- | ---: | ---: | ---: | --- | --- |
| N-FK5 (SCHOTT) | 1.48749 | 70.41 | +0.0036 | L1, L7 | fluor crown; front collector, thick field-flattening meniscus |
| S-FPL51 (OHARA) | 1.496999 | 81.54 | +0.0308 | L2 | fluorophosphate crown; strongest front positive |
| N-SF6 (SCHOTT) | 1.80518 | 25.36 | +0.0146 | L3, L8 | dense flint; high-index positive members |
| SF2 (SCHOTT) | 1.64769 | 33.85 | +0.0017 | L4 | dense flint; negative member of D1 |
| N-PSK53 (SCHOTT) | 1.62014 | 63.48 | +0.0053 | L5 | dense phosphate crown; principal rear positive |
| SF1 (SCHOTT) | 1.71736 | 29.51 | +0.0042 | L6 | dense flint; rear negative |
| N-LASF44 (SCHOTT) | 1.80420 | 46.50 | −0.0084 | manipulator plates (not modeled) | lanthanum dense flint |

**Chromatic strategy.** The chromatic correction is distributed rather than concentrated in a single achromatizing pair. The converging members L1, L2, L5 and L8, together with the nearly afocal L7, all undercorrect axial color, including the flint L8. The two negative flint components, D1 ahead of the stop and L6 behind it, overcorrect. The two sides balance to a residual F−C back-focus difference of −0.136 mm in the catalog-substituted model, with a corresponding F−C focal-length difference of −0.139 mm.

The first-order spectral calculations show a conventionally corrected achromat. The stored ΔPg,F values allow partial-dispersion effects to be modeled, but no apochromatic behavior is claimed. Such a claim would require melt data and a secondary-spectrum analysis that neither the patent nor this model provides.

The two lead-containing flints SF1 and SF2 cannot be used to date the donor formula. ARRI's Ultra Prime brochure states that the series was developed with lead-free and arsenic-free optical glasses [5], which the patent's glass list contradicts. The contradiction is recorded here rather than resolved: the patent may name legacy catalog designations for lead-free production melts, or this example may differ from the production glass selection.

## Focus Mechanism

**Status:** infinity focus only. No finite-object spacings are reconstructed.

The first embodiment publishes only infinity-object states. Figs. 7 and 8 show the lens at an infinite object distance with the manipulator at its zero position and at maximum deflection (¶0086). The patent does describe an axial movement, but for a different purpose. For manipulator settings and stop positions other than the one built into the free-form profile, "the lens needs to be refocused by displacing the rear lens group from the surface 12," i.e. the stop together with arrangement 3 (¶¶0084–0085). No travel is given. This movement compensates the defocus introduced by the manipulator; it is not a close-focus mechanism.

For the production lens, ARRI gives a close-focus distance of 1.50 m, measured from the sensor plane [2, 3]. ARRI and ZEISS describe the Ultra Primes as using floating elements and genuine internal focus [5, 3]. Neither source identifies which groups of this prescription move, over what travel, or under what spacing law. Any close-focus reconstruction would be underdetermined, so the data file stores the 1.5 m value as product metadata only and defines no variable air spacings.

| State | Source | Modeled |
| --- | --- | --- |
| Infinity, manipulator at zero position | Patent table p. 8, Fig. 7 | Yes (module omitted) |
| Infinity, manipulator at ±2.5 mm deflection | Patent ¶¶0085–0086, Fig. 8 | No |
| Rear-part refocus for manipulator states | Patent ¶0084 (qualitative) | No |
| Close focus 1.50 m | ARRI technical data | No (metadata only) |

## Wavefront Manipulator and Spherical-Aberration Control

The manipulator is the invention; in this catalog entry it is also the omitted part of the source. Its structure is therefore documented here, although it has no counterpart in the rendered prescription.

**Construction.** Surfaces 8–11 form two N-LASF44 plates, each 3.00 mm thick and separated by 0.10 mm. The outer faces (8 and 11) are plane. The facing inner faces (9 and 10) are identical free-form surfaces, so that in the zero position the gap has constant width and the pair acts as an optical zero element (¶¶0044–0045, 0080). The patent states that both plates move by ±2.5 mm in exactly opposite directions along y (¶0085).

In the text introducing Figs. 7 and 8 (¶0076), the zero position is attributed to "FIG. 5". Given ¶0034, this appears to be a typographical error for Fig. 7.

The construction table gives no medium for the 0.10 mm gap, so the achromatization conditions (8a)–(8c), which concern an immersion medium between the plates (¶¶0064–0070), are not applicable to this example.

**Surface description.** The free forms follow z = Σ C_m,n x^m y^n. Only even powers of x and odd powers of y are non-zero, and y is the direction of motion (¶¶0015, 0052). With lengths in millimeters, C_m,n carries units of mm^(1−m−n). The six coefficients published for surfaces 9 and 10 are:

| Term | Coefficient |
| --- | ---: |
| y | −6.6000E−03 |
| x²y | −2.8406E−05 |
| y³ | −9.4687E−06 |
| x⁴y | +1.6446E−07 |
| x²y³ | +1.0964E−07 |
| y⁵ | +3.2892E−08 |

¶0081 describes the profile as a superposition of a third-order spherical-aberration term (equation 5), a defocus term (equation 2) and a tilt term. The coefficients confirm this exactly:

- **Defocus.** The Alvarez term K(x²y + y³/3), with K = −2.8406E−05, predicts a y³ coefficient of −9.46867E−06. The published value is −9.4687E−06, a match at printed precision.
- **Spherical aberration.** Equation (5), K(x⁴y + ⅔x²y³ + y⁵/5), with K = +1.6446E−07, predicts x²y³ = 1.0964E−07 and y⁵ = 3.2892E−08, both exactly as published.
- **Tilt.** The linear y term is the tilt term. ¶0016 notes that it has almost no optical effect and serves to keep the mean profile depth small.

**Published effect.** At full travel, the patent gives an adjustable third-order spherical wavefront aberration of ±32 λ at f/1.8, ±5.4 λ at f/2.8 and 1.3 λ at f/4.0 (¶0085). Scaling the f/1.8 value by the fourth power of the pupil radius predicts 5.47 λ and 1.31 λ, consistent with the rounded published values. No reference wavelength is printed for this embodiment. The 546.074 nm reference stated for the second embodiment (¶0092) is not carried over.

The profile was chosen so that, at f/2.8 with undercorrected spherical aberration, the refocus required by the manipulator is produced automatically by its own defocus term (¶0084). A modified manipulator for the same lens (Fig. 9) combines fifth- and third-order spherical aberration in a fixed ratio of −0.5, with ±16 λ and ±32 λ respectively at full aperture (¶0088). The patent reports that this ratio lowers the MTF only slightly at low spatial frequencies (below 5 lp/mm) but strongly at higher frequencies (30 lp/mm).

**Beam geometry in the interstice.** The patent places the manipulator "as close as possible to the stop and, where possible, in a collimated beam path", in order to limit asymmetric aberrations induced by the lateral offset between the two free-form surfaces (¶0017). ¶0043 describes the interstice of the schematic Fig. 2 lens as collimated.

In the first embodiment, the axial beam in the interstice is converging, not collimated. Because the front arrangement has a focal length of +403.21 mm, the paraxial marginal ray leaves surface 7 with a reduced slope of 0.0925 at f/1.8, one third of its image-space value. Over the modeled 35.08 mm interstice, the marginal height falls from 21.46 mm to 18.22 mm.

Chief rays, conversely, cross the interstice at 2.047 times their object-space slope, a factor equal to the stop-to-entrance-pupil magnification. At the 6.56° design half-field this corresponds to a paraxial slope angle of about 13.3°. The patent acknowledges that exact collimation is unattainable (¶0017). These values quantify how far the host lens departs from that ideal.

**Why the module is omitted.** The project data schema has no representation for Cartesian non-rotational free-form surfaces, and representing surfaces 9–10 as rotational aspheres would misstate the optics. The patent itself supports using the main lens without the module, which "may also be used without the wavefront manipulator, with the lens having an ideal imaging sharpness" (¶0024; also ¶0074).

The plates are not optically neutral in first order, however, because they add 6.00 mm of high-index glass. Removing them raises the calculated focal length from 133.14 mm to 134.29 mm and moves the entrance pupil. A d-line air-equivalent replacement of the plate chain (32.4014 mm instead of 35.0758 mm) would reproduce the full system's paraxial matrix exactly, but it would move the stop and rear group forward by 2.6744 mm. The data file instead keeps the physical 35.0758 mm spacing, preserving the published stations. The patent does not publish a refocused, plate-free prescription, so the image-plane placement described below is a modeling decision.

## Verification Summary

All quantities are paraxial d-line values computed from the final data file with catalog indices, unless stated otherwise. Sequential y–nu tracing and an independent ABCD matrix implementation agree to floating-point precision.

| Quantity | Model | Source / reference | Treatment |
| --- | ---: | --- | --- |
| Effective focal length | 134.29 mm | 135 mm (¶0078); full patent system with plates 133.14 mm | Retained discrepancy; no scaling applied |
| Back focal length | 33.2175 mm | Table spacing after surface 20: 33.9542 mm | Last spacing set to model paraxial BFL (see below) |
| f-number | 1.8003 | f/1.8 (¶0078) | Stop semi-diameter 18.22 mm calibrated to f/1.8 |
| Petzval sum | +1.7517E−03 mm⁻¹ (radius −570.9 mm) | — | Computed |
| Real f/1.8 marginal-ray focus − paraxial focus | −0.145 mm | — | Undercorrected spherical aberration |
| Distortion at 15.57 mm image height | +0.77% (pincushion) | — | Real chief-ray trace |
| Meridional pupil width at 15.0 / 15.57 mm image height | 79.0% / 78.1% | Fig. 7 oblique pencil ≈ 81% of axial | Measured perpendicular to the chief ray, relative to the axial paraxial pupil diameter; consistent with figure-derived semi-diameters |
| Horizontal AOV, ANSI / DIN Super 35 / Normal 35 | 10.55° / 10.17° / 9.33° | ARRI 10.5° / 10.2° / 9.3° | Consistent |
| Entrance pupil relative to image plane | 23.51 mm behind | ARRI −56.9 mm (behind) | Sign agrees; magnitude does not |

**Image plane.** The table's final spacing of 33.9542 mm cannot be reproduced from the published data. With catalog indices, the full patent system in its zero position focuses paraxially 33.5117 mm behind surface 20, 0.4425 mm short of the published image plane. The f/1.8 real marginal ray (33.4617 mm), the tangential focus at 15 mm image height (33.4659 mm) and the C-, e-, F- and g-line paraxial foci (33.4534–33.5897 mm) do not close the gap either. Reversing the sign of either nearly flat surface increases the discrepancy: the paraxial focus moves to 40.13 mm for R2 and to 32.81 mm for R20, against the published 33.9542 mm.

The patent states that in Fig. 7 the central and oblique pencils "are focused exactly onto the image sensor" (¶0086), so the design intent is an in-focus image plane. Retaining 33.9542 mm in the plate-free model would place the image plane 0.7367 mm beyond focus. The data file therefore sets the final spacing to the model's own paraxial back focal length, 33.2175 mm, and records the published value as a source discrepancy.

**Stop and semi-diameters.** The patent publishes no clear apertures and no stop diameter. The stop semi-diameter of 18.22 mm is calibrated so that the model's paraxial f-number equals the published f/1.8. This makes the f/1.8 agreement a calibration, not an independent verification; the stop mark in Fig. 7 reads closer to 19.4 mm, within the figure's reading uncertainty. All other semi-diameters were read from the to-scale Fig. 7 layout (about 10.15 px/mm at 600 dpi, uncertainty about ±0.5 mm). They were then checked against real f/1.8 marginal rays, off-axis bundles at the design image height, edge thickness, rim slope and cross-gap clearance.

Because the patent gives no field stop or image format, the data file declares a rectilinear projection with a 6.56° half-field. That half-field corresponds to ARRI's 31.14 mm design image diameter, reached by a real chief ray; without it, the semi-diameter-limited chief ray would imply an image height of roughly 35 mm.

## Design Heritage and Context

ARRI places the introduction of the Ultra Prime series in the late 1990s [7], and both ARRI and ZEISS describe the lenses as a joint ARRI–ZEISS development [4, 5]. The 135 mm focal length is marketed at T1.9 to T22 with a 1.50 m close focus [2]. The patent's stated f/1.8 is geometrically compatible with a T1.9 rating, since transmission losses make the T-number numerically larger than the f-number, but the relationship is not quantified by any source used here.

The archival designations "1.7/135" in ARRI's 2000 depth-of-field tables and its English brochure [5, 6] do not match the patent's f/1.8. In addition, the 2003 brochure's "Planar" conflicts with the "Sonnar T\*" of the 2000 tables and of current ARRI data [2]. The prescription does not settle either point.

US 2017/0307860 A1 places the donor lens in a different technical context from its original introduction. By 2014, high-resolution digital cinema sensors had made optical softening a practical concern (¶0003). The patent proposes retrofitting an existing, fully corrected objective with an insertable soft-focus module, rather than designing variable air spaces into a new lens (¶0011). A long air interstice ending at the stop, behind a weak front group, is the feature of this 135 mm design that makes such a retrofit possible. The patent's second embodiment demonstrates the same principle in a 25 mm f/1.75 lens (¶¶0089–0096).

The patent cites the Alvarez variable-power lens (US 3,305,294) and Lohmann's equivalent formulation as the basis of the free-form construction (¶¶0055, 0062).

## Sources

1. M. Pretorius and V. Blahnik, *Objective Lens for a Photography or Film Camera and Method for Selective Damping of Specific Spatial Frequency Ranges of the Modulation Transfer Function of Such an Objective Lens*, US Patent Application Publication US 2017/0307860 A1, Carl Zeiss AG, published October 26, 2017 (Appl. No. 15/620,643). First specific embodiment: ¶¶0076–0088, Figs. 6–8, construction and free-form tables on p. 8.
2. ARRI, "Technical Data of ARRI Ultra Prime," https://www.arri.com/en/cine-lenses/arri-zeiss-fujinon-lenses/legacy/ultra-prime-lenses/arri-ultra-prime-lenses-technical-data (accessed September 2026).
3. ARRI, "Technical Data of ARRI Ultra Prime LDS," https://www.arri.com/en/cine-lenses/arri-zeiss-fujinon-lenses/legacy/ultra-prime-lds/arri-ultra-prime-lds-technical-data (accessed September 2026); and "Ultra Prime LDS," https://www.arri.com/en/cine-lenses/arri-zeiss-fujinon-lenses/legacy/ultra-prime-lds.
4. ZEISS, "ARRI | ZEISS Ultra Prime Lenses," https://www.zeiss.com/photonics-and-optics/us/cinematography/lenses/ultra-prime-lenses.html (accessed September 2026).
5. ARRI, *Carl Zeiss/Arriflex Ultra Primes* brochure, English edition (ARRI archive title 03-2003; print code 09.95002.0), https://www.arri.com/resource/blob/178230/5cee2460c55e40b198b4ddc7eaec6aff/ultra-prime-lenses-brochure-english--data.pdf.
6. ARRI, *Depth of Field — Arri35 Ultra Prime Lenses (meter)*, April 11, 2000, https://www.arri.com/resource/blob/31064/e7e5a2e15b37f387f69e337e7242594f/ultra-primes-depth-of-field-tables-meter-data.pdf.
7. ARRI, "History of ARRI — Interactive Timeline," https://100.arri.com/timeline (accessed September 2026).
8. SCHOTT AG, *Optical Glass — Datasheet Collection* (May 2019): N-FK5, N-SF6, SF1, SF2, N-LASF44.
9. SCHOTT AG, *Optical Glass Datasheet Collection of Inquiry Glasses*: N-PSK53 (row dated February 1, 2014).
10. OHARA Inc., *S-FPL51* datasheet (revision 25-04), https://oharacorp.com/wp-content/uploads/2025/04/esfpl51.pdf.
11. L. W. Alvarez, *Two-Element Variable-Power Spherical Lens*, US Patent 3,305,294, granted February 21, 1967; cited in ¶0055.
12. A. W. Lohmann, "A New Class of Varifocal Lenses," *Applied Optics* 9(7), 1669–1671 (1970); cited in ¶0062.
13. ARRI, "Lens Mounts," https://www.arri.com/en/learn-help/arri-camera-technology/lens-mounts-and-lds-2 (accessed September 2026), for the 52 mm PL flange focal distance.
