# Minolta AF 28–75mm f/2.8 (D)

## Patent Reference and Design Identification

**Patent:** JP 2004-101739 A
**Application Number:** 特願2002-261781 (P2002-261781)
**Filed:** 2002-09-06
**Published:** 2004-04-02
**Inventor:** Yamada Yasuharu (山田 康晴)
**Applicant:** 株式会社タムロン (Tamron Co., Ltd.)
**Title:** 大口径ズームレンズ — *Large-Aperture Zoom Lens*
**Embodiment analyzed:** Sole numerical embodiment, surfaces 1–35, with three zoom positions.

JP 2004-101739 A discloses a compact large-aperture standard zoom for single-lens reflex cameras. The embodiment is a positive-lead four-group zoom whose design data are given at $f = 28.87$, $49.98$, and $72.65$ mm with a constant design F-number of 2.91 (§0026). The production lens identified here is the Minolta / Konica Minolta AF 28–75mm F2.8 (D), an A-mount version of Tamron model A09, the SP AF 28–75mm F/2.8 XR Di LD Aspherical (IF) Macro.

The identification is supported by the following convergent points. The patent applicant is Tamron, and Tamron marketed model A09 in several SLR mounts, including the Minolta / Sony A system. The patent claims a positive–negative–positive–positive four-group layout with second-group internal focusing (§0009, claim 1), matching the A09 design class. The patent objective is a 75° wide-angle zoom, constant approximately f/2.8 aperture, approximately 2.5× zoom ratio, approximately 95 mm lens length, and a φ67 mm object-side filter target (§0008), all consistent with the production lens class. The numerical embodiment resolves to 16 photographic elements in 14 groups if each hybrid resin-on-glass asphere is counted as one photographic element, and it contains four aspherical surfaces, surfaces 7, 20, 32, and 35. The production lens is likewise published as a 16-element / 14-group, four-aspherical-surface, 67 mm-filter, 0.33 m minimum-focus-distance lens.

The Minolta “(D)” suffix is an A-mount distance-encoder designation. It indicates distance reporting for flash metering and body communication, not a different optical formula. The optical prescription is therefore treated as the Tamron A09 formula adapted to the Minolta / Konica Minolta A mount.

## Optical Architecture

The lens is a positive-lead four-group zoom of type positive–negative–positive–positive. G1 is the positive front collector. G2 is a strong negative variator and also the internal focusing group. G3 is a positive relay group beginning immediately behind the aperture stop. G4 is a positive rear group that supplies the final convergence and back-focus clearance for an SLR mirror box.

At infinity focus, the three patent zoom positions change the principal inter-group air spaces as follows:

| Air space | Wide | Mid | Tele | Zoom behavior |
|---|---:|---:|---:|---|
| d6, G1–G2 | 2.694 mm | 16.985 mm | 27.814 mm | widens |
| d16, G2–G3 | 9.782 mm | 3.828 mm | 0.985 mm | narrows |
| d25, G3–G4 | 6.786 mm | 2.409 mm | 0.997 mm | narrows |

All four groups move objectward during zooming from wide to telephoto, while the inter-group separations are re-proportioned (§0009). An independent paraxial trace gives the isolated group focal lengths as $f_1 = +96.58$ mm, $f_2 = -14.92$ mm, $f_3 = +42.20$ mm, and $f_4 = +54.47$ mm. G2 is therefore a very strong negative group: $|f_2|$ is only about 0.52× the wide-end system focal length and 0.205× the telephoto focal length. This is the principal compacting mechanism of the design.

The positive-lead architecture is a deliberate departure from the negative-lead retrofocus-type standard zooms that the patent identifies as common in this field (§0002). The patent’s design problem is not merely to produce a fast standard zoom, but to make one smaller than the earlier Tamron 176A 28–105mm f/2.8 class discussed in §0005. The short 2.5× range, strong G2 variator, G2 internal focus, and high-index glass palette all serve that objective.

## Element-by-Element Analysis

Elements are listed in physical front-to-rear order. The four hybrid aspheres are treated here as photographic elements with a glass body plus a 0.2 mm resin replica layer; the data file models the resin layers explicitly because they are separate refractive media.

### Group 1 — Positive Front Collector

**L11 — Negative meniscus, convex to object**
nd = 1.84666, νd = 23.8. Glass: Ohara S-TIH53 dense flint class. f = −119.9 mm.

The front element is a weak negative dense-flint meniscus. It moderates the ray bundle before the stronger positive elements of G1 and begins the axial-color balancing of the collector. Its high dispersion is useful at this large front-group ray height.

**L12 — Biconvex positive**
nd = 1.69680, νd = 55.5. Glass: Ohara S-LAL14 lanthanum crown. f = +99.1 mm.

L12 supplies much of the front group’s positive power. The lanthanum crown index permits relatively gentle curvatures for the required convergence, reducing the spherical aberration and coma burden that a lower-index crown would impose.

**L13 — Positive meniscus, convex to object**
nd = 1.77250, νd = 49.6. Glass: Ohara S-LAH66 high-index lanthanum glass. f = +118.2 mm.

L13 closes G1 as a positive meniscus. Its νd is below the usual crown/flint boundary, so it is better described as a high-index lanthanum flint-side glass rather than a crown, despite the lanthanum family name. In this position it continues the collector’s positive power while shaping the principal-ray geometry entering G2.

### Group 2 — Negative Variator and Focusing Group

**L21 — Negative meniscus with object-side hybrid asphere**
Body nd = 1.80400, νd = 46.6. Resin nd = 1.53610, νd = 41.2. Body glass: Ohara S-LAH65V high-index lanthanum glass. Composite f = −23.9 mm.

L21 is a strong negative meniscus at the front of the variator. Surface 7 is aspherical and is formed in a 0.2 mm resin layer over the high-index glass body. The repeated 1.53610 / 41.2 material used on all four aspherical surfaces is not a normal catalog optical glass match; it is best interpreted as a hybrid asphere replica resin. The patent does not state the manufacturing method, so the hybrid construction is inferred from the prescription pattern rather than from patent prose.

This is the most economical location for a strong off-axis aspheric correction: it sits at the entry to the moving negative group whose aberrations vary most strongly over zoom and focus.

**L22 — Biconcave negative**
nd = 1.80400, νd = 46.6. Glass: Ohara S-LAH65V high-index lanthanum glass. f = −32.9 mm.

L22 supplies additional negative variator power. As with L21, the glass is flint-side by Abbe number. The high index reduces surface curvature for the required negative power and helps contain Petzval contribution compared with a lower-index negative element of the same power.

**L23 — Biconvex positive**
nd = 1.80518, νd = 25.4. Glass: Ohara S-TIH6 / SF6-class dense flint. f = +29.4 mm.

This positive dense-flint element is the principal achromatizing partner inside G2. Its high dispersion lets moderate positive power offset chromatic error generated by the surrounding negative high-index elements.

**L24 / L25 — Cemented negative doublet**
Net f = −46.0 mm. L24: nd = 1.48749, νd = 70.2, Ohara S-FSL5, standalone f = −30.3 mm. L25: nd = 1.80518, νd = 25.4, Ohara S-TIH6, standalone f = +90.6 mm.

The rear part of G2 is a cemented crown/flint doublet. The large Abbe split across the cemented interface gives the group a compact color-correction joint while the doublet remains net negative. The cemented construction also reduces the number of exposed air-glass interfaces in the moving group.

### Group 3 — Positive Relay Behind the Stop

The aperture stop is surface 17, in the air space immediately before G3. G3 therefore lies just behind the stop and is placed well for spherical aberration and pupil-geometry control.

**L31 — Positive meniscus**
nd = 1.49700, νd = 81.6. Glass: Ohara S-FPL51 / Hoya FCD1-class low-dispersion fluorophosphate. f = +77.4 mm.

L31 is the first of three very-low-dispersion 1.49700 / 81.6 elements. It begins the post-stop color correction and helps reduce secondary spectrum in a group that still carries appreciable axial ray height.

**L32 — Positive meniscus with object-side hybrid asphere**
Body nd = 1.48749, νd = 70.2. Resin nd = 1.53610, νd = 41.2. Body glass: Ohara S-FSL5. Composite f = +89.9 mm.

Surface 20 is a second hybrid resin asphere, placed just behind the stop. Its location makes it effective against zonal spherical aberration and high-order aperture-dependent errors.

**L33 / L34 — Cemented near-afocal color-correcting doublet**
Net f ≈ +2189 mm. L33: nd = 1.49700, νd = 81.6, S-FPL51 / FCD1 class, standalone f = +75.2 mm. L34: nd = 1.84666, νd = 23.8, S-TIH53 class dense flint, standalone f = −78.4 mm.

The rear G3 doublet is nearly afocal in isolation: the positive low-dispersion crown and negative dense flint almost cancel in power. Its purpose is therefore less to change system focal length than to correct longitudinal color and secondary spectrum within the relay.

### Group 4 — Positive Rear Group and Back-Focus Setter

**L41 — Positive meniscus**
nd = 1.48749, νd = 70.2. Glass: Ohara S-FSL5. f = +127.2 mm.

L41 is a weak positive meniscus opening the rear group. Its gentle power continues convergence without adding much chromatic load.

**L42 — Biconvex positive**
nd = 1.49700, νd = 81.6. Glass: Ohara S-FPL51 / Hoya FCD1-class low-dispersion fluorophosphate. f = +43.0 mm.

L42 is the strongest low-dispersion positive element in the rear group. Its placement in the final converging section makes its low dispersion important for axial color and edge-of-field color balance.

**L43 — Biconcave negative with image-side hybrid asphere**
Body nd = 1.83400, νd = 37.2. Resin nd = 1.53610, νd = 41.2. Body glass: Ohara S-LAH60V high-index lanthanum glass. Composite f = −23.3 mm.

L43 is a high-index negative field-flattening element near the exit. Surface 32 is a hybrid resin asphere on the image side. The combination of a strong negative body and an aspheric exit surface is suited to residual field curvature, astigmatism, distortion, and high-order off-axis correction.

**L44 — Biconvex positive with final image-side hybrid asphere**
Body nd = 1.58144, νd = 40.8. Resin nd = 1.53610, νd = 41.2. Body glass: Ohara S-TIL25 light flint. Composite f = +38.1 mm.

The last element is a positive body plus a final resin asphere on surface 35. It supplies final convergence, trims residual field curvature and distortion, and sets the back-focus distance in combination with the rest of G4.

## Glass Identification and Selection

The glass palette was rechecked against manufacturer-published catalog values rather than by circular lookup from expected names. The following identifications are treated as strong catalog matches unless otherwise noted.

| nd / νd | Identification | Use | Notes |
|---|---|---|---|
| 1.84666 / 23.8 | Ohara S-TIH53 class | L11, L34 | Dense flint |
| 1.69680 / 55.5 | Ohara S-LAL14 | L12 | Lanthanum crown |
| 1.77250 / 49.6 | Ohara S-LAH66 | L13 | High-index lanthanum, flint-side by νd |
| 1.80400 / 46.6 | Ohara S-LAH65V | L21 body, L22 | High-index lanthanum, flint-side by νd |
| 1.80518 / 25.4 | Ohara S-TIH6 / SF6 class | L23, L25 | Dense flint |
| 1.48749 / 70.2 | Ohara S-FSL5 | L24, L32 body, L41 | Fluor-crown / low-dispersion crown |
| 1.49700 / 81.6 | Ohara S-FPL51 / Hoya FCD1 class | L31, L33, L42 | Low-dispersion fluorophosphate |
| 1.83400 / 37.2 | Ohara S-LAH60V | L43 body | High-index lanthanum flint-side glass |
| 1.58144 / 40.8 | Ohara S-TIL25 | L44 body | Light flint |
| 1.53610 / 41.2 | Unmatched resin | Hybrid asphere layers | Interpreted as UV-cured replica resin |

A notable correction is classification rather than transcription. The 1.77250 / 49.6, 1.80400 / 46.6, and 1.83400 / 37.2 glasses are not crowns in the usual Abbe-number sense. They belong to high-index lanthanum families, but their νd values place them on the flint side of the crown/flint division. This matters in the chromatic reading of the design: the lens is not merely “lanthanum-crown heavy”; it uses high-index lanthanum flint-side elements to compact the strong variator and rear field-flattening sections.

The three 1.49700 / 81.6 elements are the low-dispersion backbone of the design. Their distribution across G3 and G4 is more important than any single ED-like element: G3 uses both a standalone LD positive and a near-afocal LD/flint cemented corrector, while G4 uses the strongest LD positive element in the final converging group.

## Focus Mechanism

The patent states that focusing is by movement of the second lens group alone (§0009, §0013). The rationale given in §0013 is the usual advantage of inner focusing: the large front group need not move, autofocus load is reduced, and the front effective diameter can remain smaller at close distance. The patent also acknowledges the disadvantage: focal length changes with focus.

The patent publishes only infinity-focus spacings. For the data file, close-focus spacings were solved independently by moving G2 objectward while holding G1, G3, and G4 fixed at each zoom position. The target was the manufacturer hard specification of 0.33 m minimum focus distance, measured from the image plane, with the telephoto end reproducing approximately 1:3.9 magnification.

The `BF` entries in the data file place the rendered `IMG` plane at the traced best-focus plane for parallel on-axis light. They remain fixed through focus at each zoom position, so the viewer's focus-tracked rays solve against the same sensor plane. These are derived rendering/focus-plane values, not patent-published back-focus rows.

| Zoom position | d6 infinity | d6 close | d16 infinity | d16 close | d25 | BF / IMG | Approx. close magnification |
|---|---:|---:|---:|---:|---:|---:|---:|
| Wide | 2.694 | 0.871 | 9.782 | 11.605 | 6.786 | 39.034 | 1:8.28 |
| Mid | 16.985 | 14.292 | 3.828 | 6.521 | 2.409 | 52.942 | 1:5.15 |
| Tele | 27.814 | 24.047 | 0.985 | 4.752 | 0.997 | 61.190 | 1:3.92 |

These close-focus spacings are derived values, not patent-published values. They are included in the data file so the focus slider has a physically meaningful internal-focus state.

## Aspherical Surfaces

The aspherical surfaces are 7, 20, 32, and 35. In the data file they are labeled 7A, 20A, 32A, and 35A. The patent marks these surfaces with an asterisk in the prescription table and gives the asphere equation in §0024–§0025:

$$X(H) = \frac{H^2/R}{1 + \sqrt{1 - (1+\varepsilon)(H/R)^2}} + A_4H^4 + A_6H^6 + A_8H^8 + A_{10}H^{10}.$$

The patent’s $\varepsilon$ is used directly as the standard conic constant $K$; no $K = \varepsilon - 1$ conversion is applied.

| Surface | Location | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 7A | L21 object-side resin surface | +1.7698 | +1.51609e−5 | −2.40934e−9 | −3.81500e−11 | +3.90581e−13 |
| 20A | L32 object-side resin surface | −0.3805 | −1.01321e−5 | +2.64212e−10 | −9.59136e−12 | −5.60310e−14 |
| 32A | L43 image-side resin surface | −6.2476 | +2.39974e−5 | −2.88771e−8 | −1.11697e−10 | +1.02647e−12 |
| 35A | L44 image-side resin surface | +12.8865 | +2.35429e−5 | +4.67954e−8 | +1.19880e−10 | −1.40158e−13 |

Surface 7A controls off-axis errors at the front of the strong moving variator. Surface 20A is near the stop and is placed for aperture-dependent spherical and zonal correction. Surface 32A works with the rear negative element on field and off-axis residuals. Surface 35A is the final correction surface before the image plane and also imposes a practical positive-conic height limit on the estimated semi-diameter.

## Chromatic Correction Strategy

The chromatic correction is distributed rather than concentrated. G1 begins the balance with a dense-flint negative element against lanthanum positive elements. G2 uses high-index lanthanum negative elements and a cemented S-FSL5 / S-TIH6 crown-flint pair. G3 adds two low-dispersion 1.49700 / 81.6 elements, one standalone and one cemented to a dense flint in a nearly afocal color-correcting doublet. G4 places the strongest 1.49700 / 81.6 positive element in the final converging group.

The correct description is therefore a well-corrected LD achromat with secondary-spectrum reduction from fluorophosphate crowns. The patent publishes nd and νd only; it does not publish partial-dispersion data or claim apochromatic correction. An APO claim is not warranted from the patent data alone.

## Conditional Expressions

The patent gives nine conditional values in §0032. The independently reconstructed paraxial model reproduces the directly paraxial quantities as follows:

| # | Expression | Patent value | Independent value | Status |
|---|---|---:|---:|---|
| 1 | $|f_2|/f_T$ | 0.205 | 0.2054 | reproduced |
| 2 | $f_1/f_T$ | 1.329 | 1.3293 | reproduced |
| 3 | $f_4/f_T$ | 0.750 | 0.7497 | reproduced |
| 4 | $Z_2/Z$ | 0.621 | 0.6212 | reproduced |
| 5 | $(TL_W - 0.5FLT/\tan\alpha_W)/f_W$ | 3.124 | 3.1246 | reproduced |
| 6 | $DWENP$ | 30.11 | 30.113 | reproduced |
| 7 | $|\beta_{2W}|$ | 0.214 | 0.2140 | reproduced |
| 8 | $e_0$ | 4.139 | 4.138 | reproduced |
| 9 | $h_1 + e_0\tan\alpha_W + f_W/(2F_W)$ | 27.69 | patent field / stop convention | patent value used |

The prior discrepancy in condition 5 disappears when $TL_W$ is taken as the front-vertex-to-image optical track at the wide end, including the computed wide-end back focal distance. Condition 9 depends on the patent’s stop-radius and wide-field convention; the patent’s tabulated value is therefore retained as authoritative.

## Verification Summary

The full prescription was rebuilt as a paraxial $y$–$\nu$ trace from the patent’s radii, thicknesses, indices, and variable spacings. No group focal lengths were taken from the patent. The reconstruction verifies the transcription.

| Quantity | Patent | Independent value |
|---|---:|---:|
| EFL, wide | 28.87 mm | 28.8717 mm |
| EFL, mid | 49.98 mm | 49.9820 mm |
| EFL, tele | 72.65 mm | 72.6521 mm |
| Design F-number | 2.91 | 2.91 |
| G1 focal length | — | +96.58 mm |
| G2 focal length | — | −14.92 mm |
| G3 focal length | — | +42.20 mm |
| G4 focal length | — | +54.47 mm |
| Paraxial BFD, wide | — | 39.095 mm |
| Paraxial BFD, mid | — | 52.943 mm |
| Paraxial BFD, tele | — | 61.215 mm |
| Authored IMG BF, wide | — | 39.034 mm |
| Authored IMG BF, mid | — | 52.942 mm |
| Authored IMG BF, tele | — | 61.190 mm |
| Petzval sum | — | +1.919×10⁻³ mm⁻¹ |
| Petzval radius | — | −521.1 mm |

The Petzval sum was calculated surface by surface with $\phi/(nn')$, not by element thin-lens approximation. The small positive Petzval sum is consistent with a relatively flat-field standard zoom whose negative high-index elements in G2 and G4 offset the field curvature contributed by the numerous positive elements.

The data-file semi-diameters are not patent values. They are constrained estimates. The tightest checks are the thin G2 air gaps 9→10 and 13→14, the final positive-conic surface 35A, and the edge thicknesses of the thin resin replica layers. The selected values keep the resin edge thicknesses positive, keep the element front/rear semi-diameter ratios below 1.25, and keep cross-gap sag intrusion within 90% of the limiting air gaps at all zoom and focus endpoints.

## Design Heritage and Context

The patent explicitly positions the design against Tamron model 176A, a 28–105mm f/2.8 positive-lead four-group zoom cited as prior art (§0002, §0005). The 176A is described as 15 elements, four aspherical surfaces, 112.0 mm at its shortest length, and φ82 mm filter diameter (§0005). JP 2004-101739 A narrows the range to roughly 28–75 mm and uses a stronger compacting strategy to target approximately 95 mm overall lens length and φ67 mm filter diameter (§0008).

The resulting A09 formula became a compact fast standard zoom sold under Tamron’s own name and supplied in A-mount form as the Minolta / Konica Minolta AF 28–75mm F2.8 (D). The optical design should not be conflated with later Tamron 28–75mm mirrorless lenses; those are separate optical systems.

## Sources and References

- JP 2004-101739 A, *大口径ズームレンズ* (Large-Aperture Zoom Lens), Tamron Co., Ltd.; filed 2002-09-06, published 2004-04-02. Primary source for the prescription, aspherical coefficients, claims, conditional expressions, and stated design objectives.
- Tamron model A09 product information for the SP AF 28–75mm F/2.8 XR Di LD Aspherical (IF) Macro, including model identity and production-mount context.
- Konica Minolta / Tamron product specifications for the AF 28–75mm F2.8 (D) / A09 class: 28–75mm f/2.8, 16 elements / 14 groups, 67 mm filter, 0.33 m minimum focus distance, and approximately 1:3.9 maximum magnification.
- Ohara optical-glass catalog pages for S-TIH53, S-LAL14, S-LAH66, S-LAH65V, S-TIH6, S-FSL5, S-FPL51, S-LAH60V, and S-TIL25; Hoya catalog cross-reference for FCD1 / S-FPL51-class low-dispersion glass.
