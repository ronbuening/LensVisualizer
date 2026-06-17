# Canon FD 28mm f/2.8 S.C. — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,046,459
**Application Number:** 607,915
**Filed:** August 26, 1975
**Granted:** September 6, 1977
**Priority:** September 4, 1974 (Japan, 49-101709)
**Inventor:** Naoto Kawamura
**Assignee:** Canon Kabushiki Kaisha, Tokyo, Japan
**Title:** Retrofocus Wide Angle Objective Lens System
**Worked examples:** 3 (Figs. 1, 5, and 9; claims 6, 7, and 8)
**Embodiment analyzed:** Example 2 — Fig. 5 / Table 3 / claim 7

US 4,046,459 describes a compact retrofocus wide-angle objective for single-lens-reflex cameras. Example 2 is normalized to a focal length of unity, relative aperture F/2.8, and half-field ω = 38°. The prescription has seven air-spaced singlet elements in seven groups: two front negative menisci, a positive third lens, a biconvex fourth lens, a biconcave fifth lens, and two rear positive lenses.

The production match is strongest to the Canon FD 28mm f/2.8 S.C. family rather than to a later generic 28mm lens designation:

1. Canon is both the patent assignee and the manufacturer of the FD lens family.
2. Canon's official FD28mm f/2.8 S.C. data lists a 7-element / 7-group construction, matching the patent's seven air-spaced singlets.
3. Canon lists F/2.8, 0.3 m closest focus, 0.134× maximum magnification, five diaphragm blades, minimum aperture f/22, and a 55 mm filter thread for the FD28mm f/2.8 S.C.
4. The patent summary states a back focal length as high as 1.28× the focal length and a field angle of at least 75°, while Example 2 tabulates ω = 38° (2ω = 76°). A 28 mm rectilinear lens on the 135 frame has a diagonal angle of view of about 75.4°, consistent with Canon's published 75° diagonal angle.
5. The patent provides no internal focus, floating focus, image-stabilization, or autofocus mechanism, consistent with a manually focused FD prime using unit extension.

The identification should not be overstated beyond that level. The patent contains three closely related worked examples. The delivered prescription transcribes Example 2 because that is the embodiment assigned here, not because Canon publicly documents which numbered example corresponds to a particular production barrel variant.

## Optical Architecture

The lens is a retrofocus, or inverted-telephoto, wide-angle design. The first two elements form a divergent front assembly; the last five elements form the convergent rear assembly. The computed back focal length is 1.28065 f, so the BFD/EFL ratio is about 1.281. Scaled to a 28 mm production focal length, the back focal distance is 35.86 mm, long enough for a 35 mm SLR mirror box.

A paraxial y-nu trace of the normalized Example-2 prescription gives:

| Quantity | Patent value | Recomputed value | Scaled to 28 mm |
|---|---:|---:|---:|
| Effective focal length | 1.0000 | 0.99991 | 27.9976 mm |
| Back focal length | 1.2807 | 1.28065 | 35.8581 mm |
| Vertex length, surface 1 to surface 14 | 1.8271 | 1.8271 | 51.1588 mm |
| Full field | 2ω = 76° | 2ω = 76° | Canon publishes 75° diagonal AoV |
| Petzval surface sum | 0.145805 | 0.145770 | same normalized value |

The front pair L1+L2 has a combined focal length of -0.8107 f (-22.70 mm at the 28 mm scale). The rear assembly L3-L7 has a combined focal length of +0.9341 f (+26.15 mm). This is the expected retrofocus power split: the negative front group opens the field and moves the rear principal plane forward; the positive rear group supplies the imaging power and corrects the aberrations introduced by the front divergence.

The design is all-spherical. The patent gives no aspherical coefficients and no aspherical surface labels. The data file therefore sets `asph: {}`.

The patent does not tabulate an aperture-stop position. For the visualization data file, the stop is inferred in the large L4-L5 air gap (`d8`) and the gap is split evenly. The inferred stop semi-diameter is 6.6045 mm at the 28 mm scale, chosen so that the paraxial entrance pupil is 10.0 mm in diameter at f/2.8. This is a data-file modeling choice, not a patent datum.

## Element-by-Element Analysis

### L1 — Negative meniscus, convex to object

nd = 1.61117, νd = 55.9. Glass: dense barium crown class, legacy 611/559; no specific catalog melt asserted. f = -54.45 mm.

L1 is the large first diverging element. Both radii are positive, giving the forward-convex meniscus form specified in the patent. Its rear surface is strongly curved and begins the negative front-group action that permits the long back focal distance.

The exact period melt is not named in the patent. The code is a legacy 611/559 crown-family glass. It is therefore identified by glass class rather than by a single asserted modern manufacturer catalog name.

### L2 — Negative meniscus, convex to object

nd = 1.60729, νd = 49.3. Glass: barium crown/flint class, legacy 607/493; no specific catalog melt asserted. f = -45.36 mm.

L2 is the second negative meniscus and completes the divergent front assembly. Its rear radius γ4 = 0.7757 f is one of the controlled surfaces in the patent's conditional expressions. The surface is strong enough to preserve the retrofocus action but not so strong that its residual aberrations dominate the rear correction.

With νd just under 50, this is not a conventional high-Abbe crown. Its position in the front negative assembly makes it part of both the field-angle generation and the lateral-color balance.

### L3 — Positive lens, convex to object

nd = 1.72342, νd = 38.0. Glass: S-BAH28 (OHARA) / BAFD8 (HOYA) equivalent dense barium flint. f = +57.45 mm.

L3 sits immediately behind the negative front pair and is the patent's main early corrector for residual spherical aberration and field curvature. The front surface is strongly convex to the object, while the rear radius is very long and negative (γ6 = -9.1853 f), leaving only weak rear curvature.

The patent explicitly constrains the third-element glass to N3 > 1.72 and ν3 < 40. Example 2 satisfies this with little margin: nd = 1.72342 and νd = 38.0. The high index lets the element supply positive refraction without excessively steep surfaces, while the relatively high dispersion contributes to lateral-color control.

### L4 — Biconvex positive

nd = 1.60311, νd = 60.7. Glass: S-BSM14 (OHARA) / BACD14 (HOYA) / N-SK14 (Schott) equivalent barium crown. f = +29.42 mm.

L4 is the principal positive power element. Its two strong convex surfaces (γ7 = +1.0840 f, γ8 = -1.3336 f) make it the most powerful positive singlet in the lens. The low dispersion relative to the surrounding flints keeps the rear group's chromatic contribution under control.

The rear surface γ8 is another patent-controlled surface. Example 2 places |γ8| = 1.3336 f within the required 0.95 f to 1.5 f interval, with the required negative sign. The patent ties this surface to the correction of spherical aberration, coma, and distortion.

### L5 — Biconcave negative

nd = 1.74077, νd = 27.8. Glass: S-TIH13 (OHARA) / E-FD13 (HOYA) equivalent dense flint. f = -17.89 mm.

L5 is the dense-flint negative member in the rear correction group. Its high dispersion counters the lower-dispersion positive crowns around it and supplies the main axial-color balancing power.

The element is deliberately thin: d9 = 0.0351 f, while the following air gap is d10 = 0.0491 f. This satisfies the dependent-claim relation that the fifth lens be thinner than the air separation between the fifth and sixth lenses.

### L6 — Positive meniscus, convex to rear

nd = 1.69350, νd = 53.3. Glass: S-LAL13 (OHARA) / LAC13-class lanthanum crown equivalent. f = +31.77 mm.

L6 re-converges the beam after the biconcave flint. Both radii are negative, forming a positive meniscus convex to the rear. The high index allows useful rear-group positive power with moderate curvature and a comparatively controlled Petzval contribution.

The catalog-equivalent glass is a 694/533 lanthanum crown. Modern OHARA S-LAL13 matches nd = 1.69350 with νd = 53.21, close to the patent value νd = 53.3; the patent itself gives only nd and νd.

### L7 — Positive meniscus, convex to rear

nd = 1.69350, νd = 53.3. Glass: S-LAL13 (OHARA) / LAC13-class lanthanum crown equivalent. f = +49.48 mm.

L7 is the rearmost positive meniscus and uses the same glass as L6. The front radius is very weak (γ13 = -26.827 f), and the rear surface supplies the final positive bending. This element helps set the exit vergence and maintain the long back focal distance without adding a cemented component.

Claim 3 specifically permits the seventh lens to be a positive meniscus of rearward convexity. Example 2 follows that form.

## Glass Identification and Selection

The patent lists only d-line refractive index and Abbe number. The table below therefore separates close catalog equivalents from legacy class identifications. Modern catalog names are used where the nd/νd code is a close, independently checkable match; uncertain period melts are labeled by class.

| Element(s) | Patent nd / νd | Code | Catalog or class identification | Status |
|---|---:|---:|---|---|
| L1 | 1.61117 / 55.9 | 611/559 | Dense barium crown class; no specific catalog melt asserted | class |
| L2 | 1.60729 / 49.3 | 607/493 | Barium crown/flint class; no specific catalog melt asserted | class |
| L3 | 1.72342 / 38.0 | 723/380 | S-BAH28 (OHARA) / BAFD8 (HOYA) | equivalent |
| L4 | 1.60311 / 60.7 | 603/607 | S-BSM14 (OHARA) / BACD14 (HOYA) / N-SK14 (Schott) | equivalent |
| L5 | 1.74077 / 27.8 | 741/278 | S-TIH13 (OHARA) / E-FD13 (HOYA) | equivalent |
| L6, L7 | 1.69350 / 53.3 | 694/533 | S-LAL13 (OHARA) / LAC13-class lanthanum crown | equivalent |

The chromatic correction is conventional. L4, L6, and L7 are lower-dispersion positive crowns; L5 is the dense-flint negative counterweight; L3 is the high-index, moderately high-dispersion positive element specified by the patent for lateral-color control. The patent gives no fluorite, ED, anomalous-partial-dispersion, θgF, ΔPgF, nC, nF, or ng data. The lens should therefore be described as a conventionally corrected achromat, not as an apochromatic design.

## Focus Mechanism

The patent tabulates only the infinity-focus prescription. It gives no variable-spacing table and no close-focus optical state.

Canon's official production data gives a 0.3 m closest focusing distance and 0.134× maximum magnification, but the patent does not publish the mechanical focusing method. For the data file, the internal prescription is kept fixed and a unit-extension surrogate is used: only the final back-focus gap varies. Solving the finite-conjugate condition for a 0.3 m object distance measured from the film plane gives:

| Focus state | BFD | Front vertex to image plane | Modeled magnification |
|---|---:|---:|---:|
| Infinity | 35.8581 mm | 87.0169 mm | 0 |
| 0.3 m object distance | 39.5148 mm | 90.6736 mm | 0.1306× |

Canon publishes 0.134× maximum magnification. The small difference is consistent with using a rounded patent prescription and a simplified unit-extension surrogate rather than a measured production focusing curve.

## Conditional Expressions

The patent states five governing inequalities. Example 2 satisfies each condition:

| Condition | Published form | Example-2 value | Result |
|---|---|---:|---|
| (a) | 0.6 < d6 / d4 < 1.0 | 0.7143 | satisfied |
| (b) | 0.68 f < γ4 < 0.9 f | 0.7757 f | satisfied |
| (c) | 7.0 f < |γ6| | 9.1853 f | satisfied |
| (d) | N3 > 1.72; ν3 < 40 | 1.72342; 38.0 | satisfied |
| (e) | 0.95 f < |γ8| < 1.5 f; γ8 < 0 | 1.3336 f; negative | satisfied |

Two dependent relations also hold: d5 = 0.1053 f is smaller than d6 = 0.1500 f, and d9 = 0.0351 f is smaller than d10 = 0.0491 f.

There is one textual inconsistency in the patent. The prose explanation of condition (b) refers to an upper limit of 0.94 f, but the summary inequality and claim 5 give 0.9 f. Example 2 satisfies both readings, so the discrepancy does not affect the prescription.

## Design Verification

The prescription was re-entered from Table 3 / claim 7 and checked with a separate paraxial y-nu matrix trace. The computed EFL, BFD, total vertex length, d6/d4 ratio, and Petzval surface sum all match the patent to the precision expected from the rounded table values.

The Petzval calculation used the surface-by-surface expression φ/(n · n′), not a thin-element approximation. The recomputed PT contributions reproduce the patent's Table 4 Petzval column and the total PT = 0.145805 to within about 3.5 × 10^-5. This confirms the radius-sign convention and the surface order.

Semi-diameters in the data file are inferred because the patent does not list clear apertures. The estimate used real meridional marginal and chief rays through the inferred stop, then constrained the result by spherical rim slope, minimum edge thickness, front/rear element diameter ratio, and cross-gap sag intrusion. The most restrictive reductions are at the L1-L2 air gap, the L3 edge thickness, and the L5-L6 air gap; those reductions are renderer/geometry safeguards, not patent prescription changes.

## Design Heritage and Context

This design belongs to the 1970s SLR retrofocus wide-angle tradition: strong negative menisci in front, a positive correction element close behind them, and a compact positive rear group. The patent's contribution is not an exotic material or aspherical surface; it is the placement and spacing of the third and fourth elements and the controlled radii γ4, γ6, and γ8. Those choices let a seven-singlet 28 mm f/2.8 lens reach SLR back focus while preserving a field of roughly 75°.

For catalog use, the delivered data file represents the Canon FD 28mm f/2.8 S.C. optical family using the patent's Example-2 prescription scaled by 28.0. It should not be read as a teardown of a particular serial-numbered copy.

## Sources and References

- US 4,046,459, *Retrofocus Wide Angle Objective Lens System*, Naoto Kawamura / Canon Kabushiki Kaisha. Primary source for Example 2 prescription, conditional expressions, Seidel/Petzval table, and design rationale.
- Canon Camera Museum, FD28mm f/2.8 S.C. Official source for production specifications: 7 elements / 7 groups, f/2.8, f/22 minimum aperture, 0.3 m closest focus, 0.134× maximum magnification, 55 mm filter diameter, and five diaphragm blades.
- HOYA Group Optics Division, *Glass Cross Reference Index*. Used for cross-vendor six-digit glass-code mapping.
- OHARA current catalog pages and data sheets for S-BAH28, S-BSM14, S-TIH13, and S-LAL13. Used as modern catalog-equivalent checks for the patent nd/νd pairs.
- Schott/Springer legacy glass-code references for BaF5 and BaCD8/SK8-class historical glasses where current Japanese catalog continuity is not exact.
