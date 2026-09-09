## Patent Reference and Design Identification

**Patent:** KR 10-1933088 B1\
**Application Number:** KR 10-2017-0053557\
**Filed:** 2017-04-26\
**Registered:** 2018-12-20\
**Published:** 2018-12-27\
**Inventors:** Jae Myung Yu; Hae Jin Lee; Jung Du Lee\
**Assignee:** Samyang Optics Co., Ltd.\
**Title:** Lens optical system and photographing apparatus having the same\
**Embodiment analyzed:** Numerical Example 1

The prescription represented here is the project-selected correlation for the **SAMYANG AF 14mm f/2.8 FE**. The patent itself does not identify a retail model by that exact product name, so the correlation is not presented as a manufacturer-confirmed patent mapping. It is supported by several convergent facts. Numerical Example 1 is a 14-element ultra-wide-angle autofocus design with a published focal length of 14.537406 mm, F-number 2.867, 57.031° half-field, six aspherical surfaces on three elements, and an inner-focusing positive group. The official Samyang product specification for the AF 14mm F2.8 FE gives 14 elements in 10 groups, 3 ASP elements, 2 ED elements, Sony E mount, 35 mm full-frame coverage, 0.20 m minimum focusing distance, and 113.9° marketed angle of view. Samyang's official optical-construction diagram also places the three ASP elements and two ED elements at the same element positions represented here: ASP at L3, L7, and L12, and ED at L4 and L14. Samyang's corporate history places the mirrorless AF 14mm F2.8 FE in 2016, before the patent filing in 2017. Taken together, the counts, special-element positions, optical architecture, product specifications, and timing establish the fixed correlation used for this pair without requiring dimensional scaling.

The marketed and modeled quantities are deliberately kept separate. The production name is 14mm f/2.8, whereas the final unscaled model computes an infinity EFL of 14.540814966 mm and an authored-stop F-number of f/2.867672300. The patent's own Numerical Example 1 states 14.537406 mm and f/2.867. The data file therefore uses the computed model values for design fields and retains 14 mm and f/2.8 as marketing values.

## Optical Architecture

The lens is a **retrofocus rectilinear ultra-wide-angle prime** arranged as 14 refractive elements in 10 air-separated groups. At the functional-group level, the patent divides it into a negative fixed front group G11, a positive translating focus group G21, and a positive fixed rear group G31 (patent ¶0040). The final data arrays independently give group EFLs of approximately −13.4181 mm, +30.6422 mm, and +42.3583 mm respectively. The negative-positive-positive power sequence is therefore not merely descriptive: it is reproduced by the transcribed prescription.

The retrofocus classification is also numerically satisfied. The independently computed back focal distance from the last active rear vertex is 24.772754 mm, greater than the 14.540815 mm EFL, giving BFD/EFL = 1.703670. The normalized first-vertex-to-image track is 104.511934 mm, so track/EFL = 7.187488; the model is therefore not telephoto under the project's `track/EFL < 1` criterion. The patent explicitly discusses a retrofocus construction and the use of a negative first group for wide-angle coverage (¶0047).

G11 contains four object-side-convex menisci. L1 is weakly positive, while L2, L3, and L4 are negative as standalone elements. The patent states that the positive first meniscus helps converge the bundle early and can reduce downstream lens diameters, while the sequence of menisci and mixed positive/negative powers is used to manage coma and chromatic correction in the front group (¶0050). L3 supplies the front pair of aspherical surfaces.

G21 is a compact three-element focusing unit. L5 and L6 form a cemented pair, followed by the very weak negative double-aspheric L7. L5 and L6 have standalone EFLs of +22.717412 mm and −82.419994 mm, but their cemented C1 combination has a computed net EFL of +30.377184 mm. With L7 included at its actual separation, the complete translating G21 remains positive at +30.642169 mm. This distinction between standalone element power, cemented-subassembly power, and in-situ group power is important: the individual signs do not by themselves determine the behavior of the moving group. The patent's design rationale is to keep the focusing unit to two or three lenses so that its moving mass remains small while maintaining aberration correction (¶0046, ¶0077).

G31 contains the stop and seven elements. The first three, L8-L10, form cemented triplet C2; its negative-positive-negative standalone sequence nevertheless has a computed cemented net EFL of +47.142777 mm. After the stop, L11 and the strong positive double-aspheric L12 lead into final cemented doublet C3 (L13-L14), whose computed net EFL is −22.005236 mm. The rear functional group as a whole remains positive. The patent assigns G31 the role of correcting residual aberrations left by the first two groups (¶0078).

The selected numerical example places the aperture stop after surface 17 and before surface 19, as shown by Table 1 and Figure 1. Generic prose elsewhere in the patent allows other stop placements; the numerical example governs this transcription. The physical stop semi-diameter is not published and is therefore a modeling inference, discussed below.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.69680, νd = 55.46. Glass: 697555 - LAK14-class lanthanum crown. Standalone f = +359.563099 mm.**

L1 is the weak positive front collector inside the otherwise negative G11 group. The patent specifically attributes early bundle convergence to this first positive meniscus, allowing smaller downstream diameters (¶0050). Its weak standalone power should not be confused with the net negative power of G11.

The glass annotation is a class/code-level identification from the stored nd/νd coordinates, not a claim that Samyang used a particular vendor melt.

### L2 — Negative Meniscus

**nd = 1.80610, νd = 33.27. Glass: 806333 - NBFD15/J-LASFH6-class dense flint. Standalone f = −40.559023 mm.**

L2 supplies substantial negative power in the front retrofocus group. Together with L3 and L4 it counteracts L1's weak positive power and establishes the strongly negative G11. Its relatively high index and low Abbe number are consistent with a dense-flint class, but the patent gives no proprietary glass name.

### L3 — Negative Meniscus, two aspherical surfaces

**nd = 1.80500, νd = 40.9. Glass: P-LASF47 catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = −46.178036 mm.**

L3 is the third element from the object side and carries aspheres 5A and 6A. The patent explicitly identifies the third front-group lens as a useful aspheric location for astigmatism and distortion correction (¶0072). In the selected example both faces are aspherical, making this element the principal large-diameter aspheric corrector in G11.

### L4 — Negative Meniscus

**nd = 1.49700, νd = 81.61. Glass: 497816 - low-dispersion ED crown class. Standalone f = −44.719374 mm.**

L4 closes the negative front group. Its unusually high νd places it in a low-dispersion crown class. Samyang's official optical-construction diagram identifies the corresponding fourth element as ED; the other ED-marked position corresponds to L14. Both use the patent coordinate 1.49700/81.61. This supports the element-level ED role without establishing a specific vendor glass or anomalous partial-dispersion curve.

### C1 — L5 + L6 cemented focusing pair

**L5: nd = 1.84666, νd = 23.78. Glass: 847238 - dense flint class. Standalone f = +22.717412 mm.**\
**L6: nd = 1.92286, νd = 20.88. Glass: 923209 - very-high-index dense flint class. Standalone f = −82.419994 mm.**

L5 is a biconvex positive element and L6 a biconcave negative cemented partner. Their computed cemented net EFL is +30.377184 mm, so the pair acts positively despite the negative standalone power of L6. The patent describes the object-side surface of the first focusing-group lens as convex toward the object and allows L5 and L6 to be cemented (¶0051, ¶0032).

Because this pair translates with G21, its positive net power is directly involved in the focus motion. The compact cemented construction also avoids introducing an air gap inside the moving pair.

### L7 — Very weak Negative Meniscus, two aspherical surfaces

**nd = 1.87795, νd = 37.3. Glass: Unmatched (nd=1.877950, vd=37.3). Standalone f = −1959.314489 mm.**

L7 follows C1 and moves with the complete G21 focus group. Its standalone paraxial power is extremely weak, but both surfaces are aspherical. Thus its importance in the model is not represented by its first-order power alone; it supplies shaped surfaces within the translating unit while leaving G21's net power strongly positive.

The stored nd/νd pair does not support a defensible public-catalog identity within the project's matching gate, so the element remains explicitly `Unmatched` rather than being assigned a speculative proprietary melt.

### C2 — L8 + L9 + L10 cemented triplet

**L8: nd = 1.71736, νd = 29.50. Glass: 717295 - SF1/FD1-class dense flint. Standalone f = −15.565955 mm.**\
**L9: nd = 1.60342, νd = 38.01. Glass: 603380 - F5/F1-class flint. Standalone f = +9.974692 mm.**\
**L10: nd = 1.84666, νd = 23.78. Glass: 847238 - dense flint class. Standalone f = −33.911722 mm.**

This negative-positive-negative triplet is the first powered unit of fixed G31. Its computed cemented EFL is +47.142777 mm, demonstrating again that the net behavior of a cemented assembly cannot be inferred from the signs of its isolated elements. The aperture stop follows the triplet in Numerical Example 1.

### L11 — Biconcave Negative

**nd = 1.56384, νd = 60.83. Glass: 564608 - SK11/BACD11-class crown. Standalone f = −35.589619 mm.**

L11 is the first separate element after the stop. Its negative power is embedded inside a rear group that remains positive overall. The data file describes it as a relay/correction element; the patent more generally assigns G31 the task of correcting residual aberrations from the preceding groups rather than attributing a single aberration to L11.

### L12 — Biconvex Positive, two aspherical surfaces

**nd = 1.58853, νd = 60.37. Glass: S-BAL35 catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = +13.625278 mm.**

L12 is a strong positive rear-group element carrying aspheres 21A and 22A. Its short positive standalone focal length makes it a major contributor to convergence in the rear half of G31. S-BAL35 supplies a compatible catalog dispersion curve; this does not identify the production glass.

### C3 — L13 + L14 final cemented doublet

**L13: nd = 1.78200, νd = 37.1. Glass: H-LaF7 catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = −10.306269 mm.**\
**L14: nd = 1.49700, νd = 81.61. Glass: 497816 - low-dispersion ED crown class. Standalone f = +22.430314 mm.**

The final doublet combines a strong negative L13 with a low-dispersion positive L14. Its computed cemented net EFL is −22.005236 mm, even though it sits within the positive G31 functional group. Samyang's official optical-construction diagram marks this final element as the second ED element, matching the 1.49700/81.61 low-dispersion coordinate also used by L4.

No apochromatic or anomalous-partial-dispersion claim follows from these nd/νd values alone.

## Glass Identification and Selection

The patent publishes d-line nd and νd values but does not identify glass manufacturers or melt names. The data file therefore uses six-digit/class descriptions or an explicit unmatched designation rather than converting coordinate similarities into unsupported vendor claims.

| Elements | nd | νd | Data-file glass annotation | Interpretation |
|---|---:|---:|---|---|
| L1 | 1.69680 | 55.46 | 697555 - LAK14-class lanthanum crown | class/code-level high-index crown |
| L2 | 1.80610 | 33.27 | 806333 - NBFD15/J-LASFH6-class dense flint | dense-flint class |
| L3 | 1.80500 | 40.9 | P-LASF47 catalog-equivalent (patent coordinates retained; production supplier unspecified) | compatible P-LASF47 dispersion curve; supplier unspecified |
| L4, L14 | 1.49700 | 81.61 | 497816 - low-dispersion ED crown class | low-dispersion crown; manufacturer diagram marks both positions ED |
| L5, L10 | 1.84666 | 23.78 | 847238 - dense flint class | high-index dense flint |
| L6 | 1.92286 | 20.88 | 923209 - very-high-index dense flint class | very-high-index dense flint |
| L7 | 1.87795 | 37.3 | Unmatched (nd=1.877950, vd=37.3) | no defensible public-catalog identity |
| L8 | 1.71736 | 29.50 | 717295 - SF1/FD1-class dense flint | dense-flint class |
| L9 | 1.60342 | 38.01 | 603380 - F5/F1-class flint | flint class |
| L11 | 1.56384 | 60.83 | 564608 - SK11/BACD11-class crown | crown class |
| L12 | 1.58853 | 60.37 | S-BAL35 catalog-equivalent (patent coordinates retained; production supplier unspecified) | compatible S-BAL35 dispersion curve; supplier unspecified |
| L13 | 1.78200 | 37.1 | H-LaF7 catalog-equivalent (patent coordinates retained; production supplier unspecified) | lanthanum-flint class |

The chromatic model therefore has no authored nC, nF, ng, or dPgF fields. L4 and L14 can be described as ED-class elements because Samyang's optical-construction diagram independently marks those same positions as ED, but neither the patent nor the product diagram supplies a proprietary melt identity or line-index/partial-dispersion data. The available data therefore do not establish anomalous partial dispersion or apochromatic correction.

## Focus Mechanism

The focus status is **PUBLISHED**, not reconstructed. Numerical Example 1 states that G11 and G31 remain fixed while the positive G21 group translates during focusing (¶0039-0040). The data file preserves all three published D1/D2 states:

| Published state | D1, G11→G21 (mm) | D2, G21→G31 (mm) | D1 + D2 (mm) |
|---|---:|---:|---:|
| Infinity | 18.418548 | 3.480179 | 21.898727 |
| MAG = −1/30 | 18.786854 | 3.111872 | 21.898726 |
| TL = 0.2 m | 19.865161 | 2.033566 | 21.898727 |

From infinity to the published −1/30 state, G21 moves 0.368306 mm toward the image. At the 0.2 m state the total translation from infinity is 1.446613 mm. The nearly invariant D1+D2 sum is the expected signature of a single rigid group translating between two fixed neighboring groups.

The middle data-file coordinate `focusT = 0.3868962339` is not a patent-published actuator coordinate and is not a reconstructed optical state. Table 3 gives D0 = 411.570745 mm for the MAG = −1/30 row; adding the source first-vertex-to-fixed-reference track, including D5, gives 516.934471 mm. Under the current focus-coordinate rule, the already-published middle row therefore lies at `0.2 / 0.516934471 = 0.3868962339`. The product specification independently gives a 0.20 m minimum focusing distance, consistent with the selected close state.

The patent also includes a plane-parallel rear optical element at surfaces 26-27, described generically as a filter or cover glass. The project data specification excludes such sensor/filter plates. The 2.500 mm plate at n = 1.51680 is therefore omitted, and its paraxial optical thickness is folded into the fixed rear air datum. Because the source maintains D4 + D5 = 0.500000 mm while D5 becomes negative at finite focus, D5 is treated as a reference/bookkeeping coordinate rather than a physical folded propagation path. The final model uses a fixed last-surface spacing of 24.808206751 mm. This is a reference-plane normalization; it does not add or reconstruct a focus motion.

## Aspherical Surfaces

Numerical Example 1 uses six aspherical surfaces on three elements: 5A/6A on L3, 12A/13A on L7, and 21A/22A on L12. Patent ¶0080 defines the sag with the standard conic constant convention used by the project,

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+\cdots,
$$

where $c=1/R$. No conversion of K is required. The data file is unscaled, so the patent coefficients are transcribed without dimensional rescaling.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 5A | 0.391538 | 1.294741E-04 | −4.620516E-07 | 1.022139E-09 | −2.140571E-12 | 3.117095E-15 | −5.194795E-19 | −3.006030E-21 |
| 6A | −0.952731 | 1.455188E-04 | −1.616711E-08 | −4.025521E-09 | 1.498157E-11 | −1.802555E-14 | 5.813824E-22 | −2.109536E-33 |
| 12A | −58.835394 | 3.854496E-05 | −4.672307E-08 | 1.578082E-09 | −3.278302E-12 | −1.408525E-14 | −3.446867E-27 | — |
| 13A | −63.853601 | 5.292057E-05 | −1.175961E-07 | 3.507457E-09 | −1.557372E-11 | 2.022021E-15 | 7.638678E-28 | — |
| 21A | −0.478183 | −8.843514E-06 | 1.583978E-07 | −4.698134E-10 | −1.156605E-11 | 1.836682E-13 | 3.932483E-17 | −1.920661E-33 |
| 22A | −0.741465 | 4.603878E-05 | −1.152029E-07 | 2.865089E-09 | −4.187808E-11 | 3.133810E-13 | 4.174785E-26 | −1.923668E-33 |

The patent publishes semi-aperture values only for the front aspheric element: 18.04 mm at 5A and 15.21 mm at 6A. At those verified heights, the computed departure from a sphere of the same vertex radius is +4.584846 mm at 5A and +2.529416 mm at 6A. No departure is quoted for 12A, 13A, 21A, or 22A because the patent does not publish their semi-apertures.

The patent explicitly connects the front-group asphere to astigmatism and distortion correction (¶0072). The remaining aspheres are present in the numerical prescription and give the focus and rear groups additional shape degrees of freedom, but the patent does not provide a manufacturing-process designation for them; they are not labeled here as molded, hybrid, or polished aspheres.

## Conditional Expressions

The patent gives four design conditions for the wide-angle inner-focus architecture. Evaluated from the final data arrays and independently computed paraxial quantities, Numerical Example 1 satisfies all four:

| Condition | Patent bound | Final-data evaluation | Result |
|---|---:|---:|---|
| $R_{front}/f$ | 1.5 to 3.5 | 1.637872 | PASS |
| $f_{1st}/f$ | 20 to 40 | 24.727850 | PASS |
| $f_{AF}/f_{G3}$ | 0.3 to 1.0 | 0.723405 | PASS |
| $D/y$ | 0.7 to 0.9 | 0.831336 | PASS |

Here $R_{front}=23.816$ mm is the object-side radius of L5; $f$ is the computed 14.540815 mm system EFL; $f_{1st}$ is L1's independently computed standalone EFL; $f_{AF}$ and $f_{G3}$ are the computed G21 and G31 EFLs; and the final $D/y$ evaluation uses the Table 1 published H-Ape of 18.04 mm with the patent's 21.7 mm sensor half-diagonal.

Two patent tables do not fully reconcile. Table 10 lists auxiliary values for $f_{1st}$, $f_{AF}$, and $f_{G3}$ that do not round-trip from the rounded Table 1 prescription, and it uses D = 18.05 mm while Table 1 gives 18.04 mm for the corresponding H-Ape. The data file does not alter the prescription to force those auxiliary numbers; the evaluations above use the final transcribed arrays and the Table 1 aperture value.

## Verification Summary

The final data arrays compute an infinity EFL of **14.540814966 mm**, compared with the patent's stated 14.537406 mm. The first principal plane is **31.006477362 mm** imageward of the first active vertex and the second principal plane is **10.231938957 mm** imageward of the last active vertex under the model's signed convention. The paraxial BFD from the last active vertex is **24.772753923 mm**. The normalized first-vertex-to-image track is **104.511933751 mm**.

The modeled stop produces **f/2.867672300**. The stop axial position is source-published, but its physical semi-diameter is not; the authored value **6.423931849 mm** is an inference chosen to reproduce the patent's infinity F-number. The resulting entrance pupil has semi-diameter **2.535299268 mm** at **21.649861859 mm** imageward of the first vertex. The exit pupil has semi-diameter **7.111091655 mm** and lies **16.011807208 mm** objectward of the last active vertex.

The computed Petzval sum is **+0.005289519 mm⁻¹**. Surface-by-surface accumulation uses $\phi/(nn')$, consistent with the project convention. Independent reduced-angle `[y,nθ]` and conventional `[y,θ]` ABCD formulations agree to machine precision for the transcribed infinity model. BFD/EFL = **1.703670**, satisfying the project's retrofocus test, while track/EFL = **7.187488**, so the design is not telephoto.

Only the 5A and 6A semi-diameters are directly published by the patent. All other surface semi-diameters are modeling inferences derived from ray footprints, the selected example's optical section, and physical geometry constraints. The inferred apertures were kept within the current edge-thickness, actual rim-slope, conic-domain, and shared-gap limits at all three published focus states. Off-axis tracing retains the required transmitted chief/edge coverage while allowing ordinary peripheral pupil vignetting rather than enlarging surfaces to force every pupil ray through. These aperture choices should therefore be read as a validated visualization/tracing model, not as manufacturing clear-aperture dimensions supplied by Samyang.

## Sources

1. **KR 10-1933088 B1**, *Lens optical system and photographing apparatus having the same*, Samyang Optics Co., Ltd., Numerical Example 1; especially ¶0040, ¶0046-0054, ¶0072, ¶0077-0084, Tables 1-3 and 10, and Figure 1. Google Patents: <https://patents.google.com/patent/KR101933088B1/en>
2. **LK SAMYANG, AF 14mm F2.8 FE — Technical Information.** Official product page: <https://www.lksamyang.com/en/product/product-view.php?seq=163>
3. **LK SAMYANG, History — 2016.** Official corporate history: <https://www.lksamyang.com/en/about/history.php>
4. **HOYA Optics Division, Designation of Glass Types.** Six-digit nd/νd glass-code convention and class nomenclature: <https://www.hoya-opticalworld.com/english/technical/001.html>
5. **OHARA Corporation, S-TIH / S-NPH Glass Types.** Current public catalog coordinates for dense-flint-class candidates: <https://oharacorp.com/glass-type/s-tih-s-nph/>
6. **SCHOTT Advanced Optics, Optical Glass.** Current public catalog coordinates for N-SF66 and related glass types: <https://www.us.schott.com/shop/advanced-optics/en/search/>
