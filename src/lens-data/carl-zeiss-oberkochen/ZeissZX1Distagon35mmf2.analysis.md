# ZEISS ZX1 Distagon T* 35mm f/2 — Fixed-Lens Camera

## Patent Reference and Design Identification

**Patent:** US 2018/0180842 A1  
**Filed:** December 18, 2017  
**Published:** June 28, 2018  
**Priority:** December 22, 2016 (DE 102016125402.9)  
**Inventor:** Marco Pretorius, Oberkochen (DE)  
**Applicant:** Carl Zeiss AG, Oberkochen (DE)  
**Title:** Compact Camera Lens of Highest Imaging Quality for a Camera with Full-Framed Sensor  
**Embodiment analyzed:** First embodiment, Tables 1-6 and Figs. 1-6

The first embodiment of US 2018/0180842 A1 is the appropriate patent prescription to associate with the ZEISS ZX1 fixed 35 mm lens. The match rests on several mutually reinforcing facts: the embodiment is an 8-element 35 mm f/2 design for a 43.2 mm full-frame image circle; it has two bi-aspheric elements, four aspherical surfaces, a 57 mm structural length, a fixed front compound lens, a fixed rear bi-aspheric lens element, and two movable focus subgroups behind a fixed stop. The patent's near setting limit is 30 cm measured from object to sensor, matching the published close-focus specification for the ZX1. The German priority date of December 2016 also precedes the ZX1 announcement by a plausible product-development interval.

The second embodiment in the patent, Tables 7-12 and Figs. 7-12, is a 9-element alternative with a different first-compound-lens distribution. It is not the prescription transcribed here.

## Optical Architecture

The lens is a compact full-frame wide-angle design organized into three patent-level compound lenses: a fixed converging first compound lens before the aperture stop, a movable second compound lens divided into two independently movable partial compound lenses, and a fixed rear compound lens consisting of one bi-aspheric negative element. Although ZEISS uses the Distagon name, this first embodiment is not a classical long-back-focus retrofocus lens. The physical distance from the last lens surface AF16 to the image plane is only 5.000 mm when the sensor/filter plates are included, and its folded air-equivalent distance is 4.3186 mm. Both are far shorter than the 35 mm focal length.

The corrected paraxial trace, using catalog-matched OHARA glass values, gives an effective focal length of 35.00036 mm, an entrance-pupil-derived working aperture of f/1.976, and a full diagonal field of about 63.5 degrees. The physical structural length from AF2, the first glass surface, to the image plane is 57.000 mm, exactly matching the patent's compactness statement in ¶0048. The patent's first reference plane AF1 lies 10.000 mm in front of AF2 and is a distance-reference plane rather than a glass surface.

The power distribution is deliberately asymmetric. The first compound lens has a paraxial focal length of +24.730 mm, so its power is 1.415 times the total system power, matching ¶0052. The lens elements after the aperture stop, treated as the second and third compound lenses together, have a paraxial focal length of -33.173 mm, giving -1.055 times the total system power, matching ¶0058. This positive-front / net-negative-rear distribution shortens the assembly while keeping the entrance pupil near the front element for compatibility with front-mounted optical attachments.

| Group | Elements | Patent unit | Power / role | Motion |
|---|---:|---|---|---|
| 1 | L1 + L2 | Partial compound lens 11 | Weak negative cemented front doublet; entrance-pupil placement | Fixed |
| 2 | L3 | Partial compound lens 12 | Strong positive singlet; main front convergence | Fixed |
| 3 | L4 + L5 | Partial compound lens 21 | Negative cemented focus subgroup | Movable |
| 4 | L6 + L7 | Partial compound lens 22 | Positive focus subgroup with rear bi-asphere | Movable |
| 5 | L8 | Compound lens 30 | Fixed negative bi-aspheric rear corrector | Fixed |

The `.data.ts` transcription excludes AF17-AF20 because the patent identifies the two flat plates between lens and sensor as filters that are not part of camera lens 1. Their optical path is folded into the final surface-to-image distance.

## Element-by-Element Analysis

### L1 — Biconcave Negative

$n_d = 1.80518$, $\nu_d = 25.42$. Glass: S-TIH6 (OHARA). $f = -15.46$ mm.

L1 is the object-side element of the cemented doublet in partial compound lens 11. Its biconcave form provides strong negative power at the front of the lens. That negative-leading arrangement is part of the patent's strategy for placing the entrance pupil near the first lens element, as described in ¶0024 and ¶0053.

The high-index, high-dispersion S-TIH6 glass is paired with the lower-dispersion L2 glass at the cemented AF3 interface. The doublet is not strongly positive; as a cemented pair it has a weak negative focal length of -131.36 mm. Its role is therefore less to collect light than to set the beam geometry for the positive L3 singlet that follows.

### L2 — Biconvex Positive

$n_d = 1.72000$, $\nu_d = 46.02$. Glass: S-LAM61 (OHARA). $f = +19.95$ mm.

L2 is the positive component of the front cemented doublet. The corrected glass identification is important: the patent names S-LAM61, and OHARA catalog data gives $n_d = 1.72000$ and $\nu_d = 46.02$. The earlier draft's $n_d = 1.72047$, $\nu_d = 34.71$ pair corresponds to OHARA S-NBH8, not S-LAM61.

With the correct S-LAM61 value, the full lens trace returns the patent's stated 35.00 mm focal length. The doublet remains net negative, but L2 reduces the extreme power of L1 and supplies chromatic compensation at the front of the system.

### L3 — Biconvex Positive

$n_d = 1.80809$, $\nu_d = 22.76$. Glass: S-NPH1 (OHARA). $f = +24.08$ mm.

L3 is the single element of partial compound lens 12 and supplies the main convergence of the fixed front compound lens. Its front surface is steeper than its rear surface, a sensible best-form orientation for a positive element working with a beam that is still close to collimated.

The English patent text in ¶0051 calls this element biconcave while also calling it a single converging lens. The numerical prescription resolves the contradiction: AF5 has positive radius and AF6 has negative radius, so L3 is biconvex and positive. The prose description is therefore treated as a translation or drafting error, while the prescription table is treated as authoritative.

### L4 — Biconcave Negative

$n_d = 1.71736$, $\nu_d = 29.52$. Glass: S-TIH1 (OHARA). $f = -13.80$ mm.

L4 is the object-side element of movable partial compound lens 21. It is the strongest standalone negative element behind the stop and begins the negative focusing subgroup described in ¶0055. Its steep rear cemented surface at AF9 is one of the most powerful surfaces in the design.

Because L4 is close behind the aperture stop, it works on a relatively large-aperture beam and is well positioned to influence longitudinal aberration during focus. Its high-dispersion flint character also makes it an effective chromatic partner for the low-dispersion L5 element.

### L5 — Positive Meniscus

$n_d = 1.59522$, $\nu_d = 67.74$. Glass: S-FPM2 (OHARA). $f = +25.24$ mm.

L5 is cemented to L4 and completes the movable negative doublet of partial compound lens 21. Although L5 is individually positive, the cemented pair has a combined focal length of -30.68 mm. This is the slower-moving of the two focus subgroups.

The S-FPM2 glass has a high Abbe number and acts as the low-dispersion partner in the L4/L5 doublet. This second cemented group is a major contributor to longitudinal color control because it sits in the internal focusing section rather than at the front rim of the lens.

### L6 — Biconvex Positive

$n_d = 1.81600$, $\nu_d = 46.62$. Glass: S-LAH59 (OHARA). $f = +52.83$ mm.

L6 is the object-side element of movable partial compound lens 22. Its front surface supplies nearly all of its positive power; its rear surface radius is extremely long and contributes little paraxial power.

S-LAH59 is a high-index lanthanum glass with $\nu_d = 46.62$, technically on the flint side of the usual $\nu_d \lt 50$ dividing line. The high index keeps the front curvature moderate while providing positive power in the rear focusing subgroup. L6 and L7 move together with constant internal spacing during focusing, as stated in ¶0056.

### L7 — Bi-Aspheric Positive Element

$n_d = 1.59522$, $\nu_d = 67.74$. Glass: S-FPM2 (OHARA). $f = +41.93$ mm from the spherical base radii. Aspheric surfaces: AF13 and AF14.

L7 is the image-side element of movable partial compound lens 22 and is the first of the two bi-aspheric elements. The spherical base form is plano-convex, but AF13 is a flat-base asphere with a strong negative fourth-order term. Across the patented clear aperture it no longer behaves as a simple plane surface.

At the patent semi-diameter of 13.80054 mm, AF13 has -2.0000 mm of aspherical departure from the flat base. At the AF14 semi-diameter of 14.53752 mm, the spherical base sag is -4.6712 mm and the polynomial adds -0.5288 mm, giving -5.2000 mm total sag. The two surfaces therefore shape the marginal and field rays strongly without introducing an inflection point in the used region.

### L8 — Bi-Aspheric Negative Meniscus

$n_d = 1.73077$, $\nu_d = 40.51$. Glass: L-LAM69 (OHARA). $f = -23.28$ mm from the spherical base radii. Aspheric surfaces: AF15 and AF16.

L8 is the single element of the third compound lens. It is fixed immediately ahead of the filter stack and is explicitly described in ¶0057 as serving to set the desired exit-pupil position at the sensor. It is not part of the focus mechanism.

AF15 has a concave spherical base with +1.3566 mm of aspherical departure at the patent semi-diameter of 14.96886 mm, flattening the rim relative to the spherical base. AF16 has a flat base and -3.9540 mm of aspherical departure at 18.47620 mm, the largest aspheric departure in the prescription. The patent identifies AF16, together with AF13, as a surface whose refractive power increases strongly toward the margin for chief-ray-angle control, not merely for conventional Seidel-aberration balancing.

### Sensor Filter Plates

AF17-AF20 are two flat BK7 plates between L8 and the sensor. The patent states in ¶0064 that these filters are not part of camera lens 1, although their thickness and refractive index are considered in the design. They are therefore excluded from the lens surface array and folded into the final air-equivalent back focal distance.

## Glass Identification and Selection

The patent Table 1 gives glass trade names but does not print the numeric $n_d$ and $\nu_d$ values. The following table uses catalog values for the named OHARA glasses and treats the Schott BK7 filter stack only as part of the folded optical path.

| Element | Glass | $n_d$ | $\nu_d$ | Optical role |
|---|---|---:|---:|---|
| L1 | S-TIH6 (OHARA) | 1.80518 | 25.42 | Dense flint front negative element |
| L2 | S-LAM61 (OHARA) | 1.72000 | 46.02 | Positive partner in front doublet |
| L3 | S-NPH1 (OHARA) | 1.80809 | 22.76 | High-index, high-dispersion front positive singlet |
| L4 | S-TIH1 (OHARA) | 1.71736 | 29.52 | Negative flint element in focus doublet |
| L5 | S-FPM2 (OHARA) | 1.59522 | 67.74 | Low-dispersion partner in focus doublet |
| L6 | S-LAH59 (OHARA) | 1.81600 | 46.62 | High-index positive element in subgroup 22 |
| L7 | S-FPM2 (OHARA) | 1.59522 | 67.74 | Low-dispersion bi-aspheric element |
| L8 | L-LAM69 (OHARA) | 1.73077 | 40.51 | Moldable rear bi-aspheric corrector |

The corrected Petzval sum, computed surface by surface as $\sum \phi/(n n')$, is +0.001970 mm$^{-1}$, corresponding to a Petzval radius magnitude of about 508 mm. This replaces the earlier thin-element estimate and should not be interpreted as a Petzval radius near the full-frame diagonal.

## Focus Mechanism

The lens uses dual floating inner focus. The first compound lens, aperture stop, and third compound lens remain fixed. Only partial compound lenses 21 and 22 move, and both move toward the object when focusing closer, as stated in ¶0062.

| Variable gap | Infinity | 933 setting | 433 setting | 233 setting | Change, infinity to close |
|---|---:|---:|---:|---:|---:|
| AF7, stop to L4 | 4.80480 | 4.68058 | 4.49618 | 4.12952 | -0.67528 mm |
| AF10, L5 to L6 | 4.26298 | 3.30344 | 2.27983 | 0.80000 | -3.46298 mm |
| AF14, L7 to L8 | 5.11947 | 6.20323 | 7.41125 | 9.25773 | +4.13826 mm |

The object-side focus subgroup 21 advances by 0.67528 mm from infinity to the closest setting. The image-side focus subgroup 22 advances by 4.13826 mm, or 6.13 times as far. The patent's general discussion describes differential focus travel as part of the invention; this particular example uses a substantially larger travel ratio than the broad 2-3x figure in ¶0017.

The table's closest object reference setting is 233 mm from AF1. Since AF1 is 10 mm in front of AF2 and the AF2-to-sensor structural length is 57 mm, the corresponding object-to-sensor distance is about 300 mm, matching the 30 cm near limit in ¶0062.

## Aspherical Surfaces

The first embodiment has four aspherical surfaces on two bi-aspheric elements: AF13 and AF14 on L7, and AF15 and AF16 on L8. The patent equation in ¶0079 uses a standard conic-plus-even-polynomial sag form. The tabulated conic constant is zero for all four surfaces, so the base conic is a sphere for finite-radius surfaces and a plane for infinite-radius surfaces. The patent's coefficients A, B, C, and D correspond to $A_4$, $A_6$, $A_8$, and $A_{10}$ in the data file.

| Surface | Base radius | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ |
|---|---:|---:|---:|---:|---:|---:|
| AF13 | $\infty$ | 0 | -4.8992092861e-05 | +6.1949699715e-10 | -1.2500220906e-09 | +5.6567321954e-12 |
| AF14 | -24.95694 | 0 | -1.0662530350e-05 | -9.6382651819e-09 | -6.8821065476e-10 | +3.3476497962e-12 |
| AF15 | -17.01007 | 0 | +1.0710823842e-05 | +3.2153423282e-08 | +3.3940082833e-10 | -7.0524303110e-13 |
| AF16 | $\infty$ | 0 | -3.5706165113e-05 | -9.4676861855e-09 | +1.2368357029e-10 | -2.3643105236e-13 |

Verified rim departures at the patent semi-diameters are -2.0000 mm for AF13, -0.5288 mm for AF14, +1.3566 mm for AF15, and -3.9540 mm for AF16. Verified maximum surface-slope angle among these aspheres is 53.9 degrees at AF15, below the patent's stated 60-degree manufacturing limit. The patent states that the aspheric elements have no inflection points in the used region and can be produced by blank pressing or moulding.

## Aberration Correction Strategy

The patent's MTF discussion in ¶0065-¶0070 emphasizes 80 lp/mm performance across much of the full-frame field. It states that contrast remains high to roughly the vertical and horizontal frame edges, with the main falloff in the extreme corners. This is consistent with the compact fixed-camera objective being optimized as a sensor-lens unit rather than as an interchangeable lens that must tolerate multiple sensor stacks and flange environments.

The chromatic correction strategy is conventional but dense: two cemented doublets, a low-dispersion S-FPM2 element in the focus doublet, and a second S-FPM2 element in the rear positive subgroup. The patent identifies the shorter visible wavelengths as the region where residual longitudinal color is more apparent, while distortion and chromatic difference of magnification remain very low.

The chief-ray-angle discussion should not be reduced to a paraxial estimate. AF13 and AF16 are explicitly identified as strongly progressive marginal-power surfaces for exit-pupil and sensor-incidence control. A first-order chief-ray trace is useful for sanity checking layout, but it is not sufficient to quantify the real-ray chief-ray angle after the large aspherical departures on AF13-AF16.

## Verification Summary

Independent paraxial calculations using the corrected catalog glass data confirm the numerical prescription.

| Quantity | Patent / table value | Computed value | Result |
|---|---:|---:|---|
| Effective focal length | 35.00 mm | 35.00036 mm | Matches |
| Working f-number from entrance pupil | f/2.0 | f/1.976 | Consistent with nominal f/2 |
| Full diagonal field | 63.48 degrees in Fig. 6 | 63.54 degrees | Matches within plot rounding |
| AF2-to-image structural length | 57.00 mm | 57.000 mm | Exact prescription sum |
| First-compound-lens power ratio | 1.415 | 1.41527 | Matches |
| Rear compound-lens power ratio | -1.055 | -1.05508 | Matches |
| Entrance-pupil position ratio | $x/L \leq 0.2$ | $6.831/57.000 = 0.120$ | Satisfies condition |
| Surface-by-surface Petzval sum | Not tabulated | +0.001970 mm$^{-1}$ | Verified |
| Folded final BFD excluding filters | Not separately tabulated | 4.318565 mm | Consistent with AF17-AF20 filter stack |
| Max verified asphere slope | $<60^\circ$ | 53.9 degrees | Satisfies condition |

The `.data.ts` file uses the patent's listed surface radii, thicknesses, focus gaps, aspheric coefficients, and semi-diameters, with catalog-corrected glass indices and an air-equivalent folded final BFD in place of the two flat filter plates. A separate Gaussian refocus of the catalog-valued paraxial model would place the image plane 4.311 mm behind AF16; the data file instead retains the patent-derived folded value of 4.318565 mm. The 0.007 mm difference is within the practical uncertainty introduced by rounded patent distances and nominal catalog glass constants, so no refocus offset was applied to the transcription.

## Sources

1. [US 2018/0180842 A1](https://patents.google.com/patent/US20180180842A1/en), "Compact Camera Lens of Highest Imaging Quality for a Camera with Full-Framed Sensor," Marco Pretorius / Carl Zeiss AG, published June 28, 2018.
2. [ZEISS ZX1 specifications](https://cop-community.zeiss.com/s/article/8-8-Specifications?language=en_US), ZEISS COP Community, for the published 35 mm f/2 lens and 30 cm minimum focus distance.
3. OHARA Corporation official glass data pages: [S-TIH6](https://oharacorp.com/glass/s-tih6/), [S-LAM61](https://oharacorp.com/glass/s-lam61/), [S-NPH1](https://oharacorp.com/glass/s-nph1/), [S-TIH1](https://oharacorp.com/glass/s-tih1/), [S-FPM2](https://oharacorp.com/glass/s-fpm2/), and [S-LAH59](https://oharacorp.com/glass/s-lah59/).
4. [OHARA Technical Data: Pressing & Forming for Low Tg Optical Glasses](https://oharacorp.com/wp-content/uploads/2023/07/low-tg-v-9-1-2022-english.pdf), for L-LAM69 and low-Tg molding context.
5. [SCHOTT N-BK7 datasheet](https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5?v=54856406), for the folded flat-filter optical path.
