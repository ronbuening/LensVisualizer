# Canon EF-M 28mm f/3.5 Macro IS STM — Patent Example 1 Analysis

## Patent Reference and Design Identification

**Patent:** US 2016/0313535 A1
**Inventor:** Makoto Nakahara
**Applicant:** Canon Kabushiki Kaisha
**Priority:** JP 2015-089582, April 24, 2015
**Filed:** April 19, 2016
**Published:** October 27, 2016
**Title:** Optical System and Imaging Apparatus Including the Same
**Embodiment analyzed:** Numerical Example 1, first embodiment, FIGS. 1A–1D / 2A–2D

This analysis concerns Canon patent publication **US 2016/0313535 A1**, “Optical System and Imaging Apparatus Including the Same,” filed by **Canon Kabushiki Kaisha**, inventor **Makoto Nakahara**, filed 19 April 2016, published 27 October 2016, and claiming priority from Japanese application JP 2015-089582 of 24 April 2015. The prescription transcribed here is **Numerical Example 1**, corresponding to the patent's first embodiment and FIGS. 1A–1D / 2A–2D.

The first embodiment remains the closest patent match for the production **Canon EF-M 28mm f/3.5 Macro IS STM**. Canon's first-party specifications give a 28 mm f/3.5 EF-M APS-C macro lens, 11 elements in 10 groups, 51°55′ diagonal angle of view, 0.097 m normal-mode minimum focus, 0.093 m Super Macro minimum focus, 1.0× normal magnification, 1.2× Super Macro magnification, Hybrid IS, and STM autofocus. Numerical Example 1 gives a 27.74 mm infinity-state focal length, F-number 3.61, 13.66 mm image height, first-mode focusing to 1.0×, and a second focusing mode reaching 1.2×. The patent was filed in April 2016 and published in October 2016; Canon's Camera Museum lists the lens as marketed in June 2016.

The special-element evidence also matches. Canon's product literature states that the production lens uses **two aspherical elements** and **one UD element**. Numerical Example 1 contains three aspherical surfaces, but they are on two physical elements: surface 2 on element 101, and surfaces 17 and 18 on element 108. Element 107 has `nd = 1.49700, νd = 81.5`, matching an OHARA S-FPL51-class fluorophosphate ED/UD glass. The match is therefore not based only on focal length; it also reproduces the production special-element count and the two-mode macro focus architecture.

Two caveats are important. First, the patent's second focusing mode begins in the numerical table at a low-magnification finite state (`β = 0.02×`), while Canon's public user-facing Super Macro range is described differently in product literature. That difference does not invalidate the match; it indicates that the patent's optical example describes the two-mode architecture and limiting states rather than every retail mechanical stop or firmware restriction. Second, the patent table includes a 1.00 mm plane-parallel `nd = 1.51633` plate after the last powered surface. It is optically real in the patent trace, but it is outside the named L1/L2 lens units. Following project convention, the `.data.ts` file excludes that cover/window plate from the element and surface arrays and folds its air-equivalent optical path into the final back focal distance.

No source located for this review names Canon's actual melt suppliers. The glass names below are therefore **catalog-equivalent identifications from optical constants**, not procurement claims. The OHARA names are used because the constants match OHARA catalog coordinates exactly or to ordinary patent rounding.

## Optical Architecture

Numerical Example 1 is a compact APS-C macro design with a positive first lens unit and a negative rear focusing unit. In patent notation, **L1** contains elements 101–108 plus the supplementary stop FP and aperture stop SP. **L2** is the cemented focusing doublet 109a/109b at surfaces 20–22. The patent states that, in the first embodiment, the optical system consists of a first lens unit L1 of positive refractive power and a second lens unit L2 of negative refractive power, with L2 serving as the focusing unit.

| Unit | Patent start surface | Recomputed focal length | Patent focal length | Function |
|---|---:|---:|---:|---|
| L1 | 1 | +12.305 mm | +12.30 mm | Positive imaging and aberration-correction unit; contains stops and the inferred IS candidate region |
| L2 | 20 | −33.224 mm | −33.23 mm | Lightweight rear focusing cemented doublet |

The infinity-state air-equivalent back focal distance is 42.22 mm, giving **BFD/EFL = 1.522** relative to the 27.74 mm patent focal length. That is a long-back-focus macro layout. It should not be called telephoto, because the total track is not shorter than the focal length, and it should not be treated as a textbook retrofocus simply because BFD/EFL exceeds unity; the patent describes the system by its L1/L2 power distribution, focus sensitivity, and mode-changing behavior.

The stop system is part of the architecture. The patent places a supplementary stop **FP** in L1, the aperture stop **SP** in L1, and a flare-cutting stop **FC** between L1 and L2. The patent states that FC reduces unwanted ghost/flare rays and that FP reduces upper-screen coma flare. The data file retains FP and FC as flat air planes for layout and spacing fidelity, but only SP is represented by the required `STO` aperture-stop label.

The surface-by-surface Petzval sum for the powered surfaces 1–22, using $\sum \phi/(n n')$, is **+0.005553 mm⁻¹**. Under the sign convention used here this corresponds to a Petzval radius of about **−180 mm**. The modest residual curvature is consistent with the alternating high-index positive and negative elements around the stop, the low-dispersion positive element 107, and the double-sided asphere at the rear of L1.

## Element-by-Element Analysis

### Element 101 — Biconcave negative, rear surface aspherical

`nd = 1.58313, νd = 59.5. Glass: S-BAL42 (OHARA catalog-equivalent). f = −13.19 mm.`

Element 101 is a weak-front / strong-rear biconcave negative element at the object side. Its rear surface, patent surface 2, is aspherical. The weak first surface keeps the entrance face mechanically mild, while the strongly curved rear surface supplies early negative power and controls the ray bundle before it reaches the stop-centered positive section.

The previous draft treated S-BAL42 and L-BAL42 as a shared class. The corrected identification is more precise: the patent constants match **S-BAL42**. OHARA L-BAL42 is a nearby low-Tg molding analogue, but it does not reproduce the patent `nd` exactly. The patent itself does not state whether the asphere is molded, polished, or a composite surface.

### Element 102 — Biconvex positive high-dispersion flint

`nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA catalog-equivalent). f = +21.86 mm.`

Element 102 restores positive convergence immediately after the front negative element. Its high index allows compact positive power with moderate axial thickness, while its high dispersion contributes deliberately to the achromatization of the front unit.

Because `νd = 25.4`, this is not a neutral crown collector. It works against the later S-FPL51-class element and the dense negative flints to keep axial and lateral color controlled over the large focus movement of the rear group.

### Element 103 — Positive meniscus, convex to image side

`nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA catalog-equivalent). f = +77.59 mm.`

Element 103 is a weak positive meniscus between the front collector and the stop region. Its long standalone focal length shows that it is not the principal power carrier; its main role is ray-angle conditioning.

The previous wording described this glass as a crown/flint-boundary material. Since `νd = 49.6`, the corrected classification is **dense lanthanum flint**. The relatively high index lets Canon bend rays without making this element a strong chromatic driver.

### Element 104 — Biconcave negative dense lanthanum flint

`nd = 1.95375, νd = 32.3. Glass: S-LAH98 (OHARA catalog-equivalent). f = −19.13 mm.`

Element 104 is a very high-index biconcave negative lens. It is one of the strongest standalone negative elements in L1 and is placed before the stop-side positive power stack.

The high index is analytically significant. A lower-index negative lens with the same power would require stronger curvature and larger marginal-ray incidence. Here, the patent obtains strong negative correction with a center thickness of only 0.60 mm.

### Element 105 — Biconvex positive crown near the aperture stop

`nd = 1.51823, νd = 58.9. Glass: S-NSL3 (OHARA catalog-equivalent). f = +17.25 mm.`

Element 105 is a large biconvex positive lens immediately behind the aperture stop. It is one of the main positive power carriers in L1.

Its crown-like dispersion prevents the stop-adjacent positive power from becoming a severe source of secondary spectrum. Its position gives it strong leverage over spherical aberration and pupil geometry through the macro focus range.

### Element 106 — Thin negative meniscus high-index flint

`nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA catalog-equivalent). f = −15.76 mm.`

Element 106 is a thin, high-index negative meniscus after the stop-side positive element. It provides local negative correction without requiring much axial length.

Its placement is typical of a compact macro correction stack: a strong stop-adjacent positive element forms the main convergence, and a dense negative element immediately following it helps control spherical aberration, axial color, and field curvature before the ED/UD-class positive element.

### Element 107 — Biconvex positive UD / ED element

`nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA catalog-equivalent; Canon UD-class). f = +22.38 mm.`

Element 107 is the numerical example's low-dispersion element. The constants match OHARA S-FPL51 (`nd = 1.49700, νd = 81.54`) and correspond to Canon's published statement that the production lens contains one UD element.

Its function is chromatic as well as paraxial. It supplies positive power with very low dispersion after the dense negative elements around the stop. That pairing reduces axial color and lateral color while limiting chromatic variation during rear-group focusing.

### Element 108 — Biconvex positive, double-sided aspherical

`nd = 1.58313, νd = 59.5. Glass: S-BAL42 (OHARA catalog-equivalent). f = +23.63 mm.`

Element 108 is a positive biconvex element with both surfaces aspherical. Patent surfaces 17 and 18 are the two aspherical surfaces on this physical element. This explains how the patent can list three aspherical surfaces while the production feature summary says two aspherical elements.

Element 108 sits immediately in front of the moving focus group, so it has high leverage over chief-ray angle, astigmatism, field curvature, and residual distortion. Canon's block diagram labels an aspherical lens as the IS unit, and the patent states that some lenses in L1 move perpendicular to the optical axis for blur correction. The numerical table does not identify the stabilizing element, but element 108 is the strongest candidate because of its position and double-sided aspheric correction. That identification remains an inference.

### Element 109a — Front member of the focusing cemented doublet

`nd = 1.95906, νd = 17.5. Glass: S-NPH3 (OHARA catalog-equivalent). f = +63.44 mm standalone; L2 group contribution is in situ.`

Element 109a is the positive, very high-dispersion front member of the L2 focusing doublet. Standalone it is only a moderate positive lens, but in the cemented group it helps set focus sensitivity and chromatic balance.

The high dispersion is deliberate. A moving single negative focus element would change chromatic aberration strongly across the macro range. The positive high-dispersion member helps the moving doublet remain chromatically better behaved.

### Element 109b — Rear member of the focusing cemented doublet

`nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA catalog-equivalent). f = −21.46 mm standalone; L2 group f = −33.22 mm.`

Element 109b is the negative rear member of L2. Together with 109a it forms the moving focusing lens unit. The patent explicitly describes L2 as a cemented lens made of a positive lens and a negative lens in that order from object side to image side, reducing chromatic variation during focusing while keeping the focus unit lightweight.

Surface 22 is the last powered surface. The patent gives `d22 = 29.28 mm` at infinity, followed by a 1.00 mm plane-parallel plate (`nd = 1.51633`) and 12.28 mm of final air. The air-equivalent distance is therefore `29.28 + 1/1.51633 + 12.28 = 42.219 mm`, which is the final BFD used in the data file.

### Plane-parallel plate in the patent table

`nd = 1.51633, νd = 64.1. Glass: S-BSL7 / BK7-class equivalent. f = ∞.`

Patent surfaces 23 and 24 form a 1.00 mm plane-parallel plate. It contributes no optical power but changes the back-focus accounting. Read literally, it also explains how the patent prescription can be compared to Canon's 11-element / 10-group public construction.

The delivered `.data.ts` file does **not** list this plate as an element. This is a project-convention choice: image-side cover/window plates are excluded from the surface array and their air-equivalent optical path is folded into the final surface distance.

## Glass Identification and Selection

The glass identifications below are catalog-equivalent matches. They should not be read as Canon procurement disclosures.

| Patent element | Patent constants | Corrected catalog-equivalent identification | Role |
|---|---:|---|---|
| 101 | 1.58313 / 59.5 | S-BAL42 (OHARA) | Front negative asphere; early ray-height and aberration control |
| 102 | 1.80518 / 25.4 | S-TIH6 (OHARA) | Positive high-dispersion flint collector |
| 103 | 1.77250 / 49.6 | S-LAH66 (OHARA), dense lanthanum flint | Weak positive meniscus for ray-angle conditioning |
| 104 | 1.95375 / 32.3 | S-LAH98 (OHARA) | Strong negative dense flint; Petzval and spherical correction |
| 105 | 1.51823 / 58.9 | S-NSL3 (OHARA) | Stop-adjacent positive crown |
| 106 | 1.90366 / 31.3 | S-LAH95 (OHARA) | Thin negative dense flint corrector |
| 107 | 1.49700 / 81.5 | S-FPL51 (OHARA), UD/ED-class | Low-dispersion positive chromatic corrector |
| 108 | 1.58313 / 59.5 | S-BAL42 (OHARA) | Double-sided asphere near rear of L1 |
| 109a | 1.95906 / 17.5 | S-NPH3 (OHARA) | Positive high-dispersion member of moving L2 doublet |
| 109b | 1.83481 / 42.7 | S-LAH55V (OHARA) | Negative member of moving L2 doublet |
| Plate | 1.51633 / 64.1 | S-BSL7 / BK7-class | Plane-parallel cover/window plate; folded into BFD in data file |

The chromatic strategy is compact rather than exotic. The design uses one very low-dispersion positive element, multiple dense negative flints in L1, and a cemented positive/negative moving focus doublet so that focusing does not introduce excessive chromatic variation.

## Focus Mechanism

The focusing unit is **L2**, the cemented doublet formed by elements 109a and 109b at surfaces 20–22. During focusing within either mode, L2 moves toward the image side. In the first embodiment, L1 is the mode-changing unit; when the lens changes from the first focusing mode to the second focusing mode, L1 and L2 move toward the object side.

| Patent state | Magnification | d19 | Patent d22 | Air-equivalent BF after surface 22 | Interpretation |
|---|---:|---:|---:|---:|---|
| First mode, infinity | 0× | 0.94 mm | 29.28 mm | 42.219 mm | Ordinary infinity state |
| First mode, first finite | 1.0× | 8.75 mm | 21.47 mm | 34.409 mm | L2 moves imageward by 7.81 mm |
| Second mode, second finite | 0.02× | 0.94 mm | 29.87 mm | 42.809 mm | Mode-change state after objectward shift |
| Second mode, third finite | 1.2× | 10.32 mm | 20.49 mm | 33.429 mm | L2 moves imageward by 9.38 mm within second mode |

The `.data.ts` focus slider can only represent one pair of endpoint states. It therefore uses the first-mode infinity state and the third finite 1.2× state. The resulting variable gaps are `FC: 0.94 → 10.32 mm` and final folded `BF: 42.219 → 33.429 mm`. This preserves the patent's extreme optical states but should not be interpreted as a full simulation of the lens's two user-selectable focus modes.

Canon's product specifications identify the actuator as STM. The optical patent does not specify the electromechanical implementation.

## Aspherical Surfaces

Numerical Example 1 contains **three aspherical surfaces** on **two physical elements**.

| Surface | Element | Radius | Physical meaning |
|---|---|---:|---|
| 2 | 101 | +8.009 mm | Rear surface of the front negative element |
| 17 | 108 | +64.432 mm | Front surface of the rear L1 positive asphere |
| 18 | 108 | −17.234 mm | Rear surface of the same double-sided aspherical element |

The patent uses the standard even-order sag form

$$
X(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}} + B h^4 + C h^6 + D h^8 + E h^{10}.
$$

`K` is the conic constant, and `B`, `C`, `D`, and `E` correspond to `A4`, `A6`, `A8`, and `A10` in the data file. All three Example 1 aspheres have `K = 0`, so the base conic is spherical and the asphericity is entirely polynomial.

| Surface | K | A4 / B | A6 / C | A8 / D | A10 / E |
|---|---:|---:|---:|---:|---:|
| 2 | 0 | −1.76791e−4 | −2.65273e−6 | +7.81442e−9 | −6.68614e−10 |
| 17 | 0 | −7.23379e−5 | −1.23764e−8 | −2.58452e−9 | +1.02225e−10 |
| 18 | 0 | +6.10927e−5 | +1.30720e−7 | −2.33941e−9 | +1.12506e−10 |

The patent does not publish clear-aperture semi-diameters. The data file therefore uses inferred semi-diameters constrained by paraxial ray height, edge thickness, slope, and cross-gap sag. At those inferred semi-diameters, the polynomial departures relative to the spherical base are:

| Surface | Inferred semi-diameter used in data file | Polynomial departure at that height |
|---|---:|---:|
| 2A | 6.30 mm | −0.491 mm |
| 17A | 10.20 mm | +0.146 mm |
| 18A | 10.20 mm | +1.906 mm |

The earlier draft used `h = 5.0 mm` as an equal-height comparison and correctly warned that it was not a true rim departure. The corrected file quotes departures at the inferred data-file semi-diameters instead. Surface 17A is a useful example of why this matters: its departure is negative at `h = 5 mm`, but the high-order terms reverse the sign by the inferred rim height.

## Image Stabilization

The production lens uses Hybrid IS. The patent states that some lenses in L1 move in a direction containing a component perpendicular to the optical axis so that the image position is shifted for blur correction. It does not assign a specific element number to the stabilizing member.

Element 108 remains the best inferred candidate because it is aspherical, close to the rear of L1, and directly before the moving focus doublet. That inference is retained in the analysis but not elevated to a patent-stated fact.

## Data File Interpretation

The delivered data file transcribes surfaces 1–22 plus the two flat stop planes FP and FC. The patent's plane-parallel plate at surfaces 23–24 is excluded from the element list and folded into the final BFD. Consequently, the data file has **10 powered glass elements in 9 powered groups**, while the production literature's **11/10** construction can be understood as including the flat plate when the patent is mapped literally.

Semi-diameters are not patent-published. The chosen values were generated from a paraxial marginal/chief-ray envelope and then reduced where necessary to keep `sd/|R| < 0.90`, element front/rear semi-diameter ratios at or below 1.25, edge thickness above 0.35 mm, and cross-gap sag intrusion within 90% of the corresponding air gap. The most restrictive gaps are the front asphere-to-element-102 gap and the element-105-to-element-106 air gap.

The stop semi-diameter in the data file is 6.05 mm. This is the aperture-stop semi-diameter required by the rounded patent prescription for the patent F-number 3.61; the metadata separately records Canon's marketed f/3.5 value.

## Verification Summary

The prescription was re-entered and checked with a paraxial reduced-angle ray trace using the rounded patent table. Values below are computed from the numerical prescription, not copied from the previous draft.

| Quantity | Patent value | Recomputed value | Note |
|---|---:|---:|---|
| Infinity EFL | 27.74 mm | 27.760 mm | Rounded-table agreement |
| First finite EFL | 18.14 mm | 18.140 mm | Matches |
| Third finite EFL | 16.95 mm | 16.959 mm | Rounded-table agreement |
| L1 focal length | 12.30 mm | 12.305 mm | Matches |
| L2 focal length | −33.23 mm | −33.224 mm | Matches |
| Folded infinity BF | 42.22 mm | 29.28 + 1/1.51633 + 12.28 = 42.219 mm | Matches |
| Folded third finite BF | 33.44 mm | 20.49 + 1/1.51633 + 12.28 = 33.429 mm | Rounded-table agreement |
| First-mode L2 travel | 7.81 mm | 8.75 − 0.94 = 7.81 mm | Matches |
| Second-mode L2 travel | 9.38 mm | 10.32 − 0.94 = 9.38 mm | Matches |
| BFD/EFL at infinity | 1.52 | 42.22 / 27.74 = 1.522 | Matches patent conditional table |
| Petzval sum | not tabulated | +0.005553 mm⁻¹ | Surface-by-surface formula |

The main corrections relative to the prior analysis are: the S-BAL42/L-BAL42 distinction was tightened; element 103 was classified as dense lanthanum flint rather than a crown/flint boundary material; rim asphere departures were recomputed at inferred semi-diameters rather than using only an arbitrary `h = 5 mm` comparison; and the data-file treatment of the plane-parallel plate was made explicit.

## Sources

Primary patent: US 2016/0313535 A1, “Optical System and Imaging Apparatus Including the Same,” Canon Kabushiki Kaisha, inventor Makoto Nakahara, published 27 October 2016. Source used here: uploaded `US20160313535A1.pdf`.

Canon first-party and Canon-affiliated production references:

- Canon Camera Museum, “EF-M28mm f/3.5 Macro IS STM”: https://global.canon/en/c-museum/product/ef456.html
- Canon Central and North Africa, “Canon EF-M 28mm f/3.5 Macro IS STM — Specifications”: https://en.canon-cna.com/lenses/ef-m-28mm-f-3-5-macro-is-stm-lens/specification.html
- Canon Asia Snapshot / Digital Camera Watch launch article: https://snapshot.canon-asia.com/reg/article/eng/canon-announces-first-ever-macro-lens-in-the-ef-m-lens-series-ef-m28mm-f35-macro-is-stm

Glass catalogs:

- OHARA S-BAL42: https://oharacorp.com/glass/s-bal42/
- OHARA S-TIH6: https://oharacorp.com/glass/s-tih6/
- OHARA S-LAH66: https://oharacorp.com/glass/s-lah66/
- OHARA S-LAH98: https://oharacorp.com/optical-glass/s-lah/
- OHARA S-NSL3: https://oharacorp.com/glass/s-nsl3/
- OHARA S-LAH95: https://oharacorp.com/glass/s-lah95/
- OHARA S-FPL51: https://oharacorp.com/glass/s-fpl51/
- OHARA S-NPH3: https://oharacorp.com/glass/s-nph3/
- OHARA S-LAH55V: https://oharacorp.com/glass/s-lah55v/
- OHARA S-BSL7: https://oharacorp.com/glass/s-bsl7/
