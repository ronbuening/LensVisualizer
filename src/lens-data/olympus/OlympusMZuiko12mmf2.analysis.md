# Olympus M.Zuiko Digital ED 12mm f/2.0 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,248,716 B2
**Application Number:** 12/925,470
**Filed:** October 21, 2010; priority JP 2010-074783, March 29, 2010
**Published:** September 29, 2011 as US 2011/0235191 A1
**Granted:** August 21, 2012
**Inventors:** Kazuteru Kawamura; Keitaro Yokoyama
**Assignee:** Olympus Imaging Corp., Tokyo
**Title:** Imaging Optical System, and Imaging Apparatus Incorporating the Same
**Embodiment analyzed:** Numerical Example 1, corresponding to FIG. 1 and FIG. 8

The patent discloses seven numerical examples for a compact wide-angle imaging optical system intended for a mirrorless interchangeable-lens camera. Numerical Example 1 is the embodiment transcribed here. It is the best match for the Olympus M.Zuiko Digital ED 12mm f/2.0, with the important caveat that the patent prescription resolves into nine air-separated optical groups while Olympus publishes the production construction as eleven elements in eight groups. The 0.189 mm air space between L6 and L7 is the probable source of that group-count discrepancy; the patent data are retained as written, while production-facing metadata use the manufacturer-published focal length, aperture, corrected angle of view, and minimum focus distance.

The identification rests on convergent evidence rather than on focal length alone. Example 1 gives f = 12.187 mm and Fno = 2.051, matching the 12 mm f/2 production specification after normal marketing rounding. It uses eleven elements, a Four Thirds-format image height of 11.15 mm, and a 20 cm close-focus state. Its rear-focus mechanism moves only the last positive element. It has four aspherical surfaces on two elements: both surfaces of the second negative meniscus and both surfaces of the positive element immediately ahead of the focus element. The sibling Example 6 is also a roughly 12 mm f/2 eleven-element design, but it has six aspherical surfaces over three elements, including the focus element, and therefore does not match the published two-aspherical-element production configuration.

Example 1 also contains the special-glass pattern expected from the production lens: a low-dispersion element at L4, very high-index S-LAH58-class glass in the optical core, and two dual-surface aspherical elements. The production lens's one ED, one Super HR, one DSA, and one additional aspherical element are therefore accounted for without requiring Example 6.

## Optical Architecture

The design is a compact negative-lead wide-angle system with a central aperture stop, a positive rear group, and a single positive rear focus element. In patent group notation it is arranged as LF + S + LR, where LR is subdivided into LR1 and LRF. LF contains seven elements, LR1 contains a cemented doublet plus a dual-surface aspherical positive element, and LRF is the final single positive element.

The patent prose describes the front group as having negative refracting power. A direct paraxial trace of the published numerical prescription gives a different result: the complete LF group has weak positive net power, f_LF = +26.87 mm. The wide-angle behavior is nevertheless clear, because the first two negative menisci together have f_11 = -15.51 mm and create the necessary negative leading action. The numerical prescription therefore supports a more precise description: a negative-lead front group of weak positive net power, a central stop, and a positive rear group.

Paraxial power distribution, recomputed from the prescription, is as follows.

| Subsystem | Recomputed focal length |
|---|---:|
| L1 + L2 leading negative pair | -15.512 mm |
| Complete front group LF | +26.874 mm |
| Complete rear group LR | +22.395 mm |
| Rear subgroup LR1 | +52.213 mm |
| Focus group LRF | +48.150 mm |

The back focus at infinity is 15.04 mm, or about 1.23 times the 12.19 mm design focal length. This is a short-back-focus mirrorless wide-angle design with controlled exit angle, not a classical long-back-focus SLR retrofocus layout.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air, except where a cemented doublet net value is explicitly stated. Surface signs follow the patent convention: positive radii have centers of curvature to the image side.

### L1 — Negative Meniscus, convex to object (Ln1)

nd = 1.78590, νd = 44.20. Glass: S-LAH51 (Ohara). f = -32.06 mm.

L1 is the fixed front negative meniscus. Its two positive radii, 33.689 mm and 14.086 mm, define a meniscus convex toward the object and concave toward the stop. The computed shape factor SF11 = 2.437 satisfies the patent condition on the first negative lens. Its principal role is to establish the wide entrance cone while keeping the front diameter under control.

### L2 — Negative Meniscus, convex to object, both surfaces aspherical (Ln2)

nd = 1.67790, νd = 55.34. Glass: S-LAL12 (Ohara). f = -34.00 mm.

L2 is the second leading negative meniscus. Both surfaces, r3 and r4, are aspherical. This is one of the two dual-surface aspherical elements in Example 1. Its shape factor SF21 = 3.447 lies within the patent's Condition (10) range and supports the patent's stated goal of preserving coma and astigmatic difference at a wide incident half-angle.

The combined L1 + L2 focal length of -15.512 mm is the principal negative-power signature of the design. That figure is more meaningful than the net power of the entire front group, which is weakly positive once the following positive elements are included.

### L3 — Biconvex Positive

nd = 1.88300, νd = 40.80. Glass: S-LAH58 (Ohara; catalog code 883/408, with catalog νd normally listed as 40.76). f = +32.16 mm.

L3 is the first collecting element after the two negative menisci. Its high index gives useful positive power without requiring steep radii; the element bends the diverging beam back toward the axis while limiting Petzval and spherical-aberration penalty.

The patent rounds the Abbe number to 40.80. Catalog matching identifies the glass as S-LAH58-class by its 1.88300 index and 883/408 six-digit code.

### L4 + L5 — Cemented Doublet, biconcave negative plus positive meniscus

L4: nd = 1.48749, νd = 70.23. Glass: S-FSL5 (Ohara). f = -18.61 mm.
L5: nd = 1.72151, νd = 29.23. Glass: S-TIH18 (Ohara). f = +22.19 mm.

The L4/L5 cemented pair is an inverted achromat: the low-dispersion crown is the negative member and the high-dispersion flint is the positive member. As a cemented assembly it has weak negative net power, f ≈ -111.49 mm. The pairing contributes chromatic correction while preventing the middle of the front group from becoming too strongly positive.

L4 is the patent embodiment's ED-class element. It is not a fluorite-like anomalous partial-dispersion element; it is a conventional low-dispersion crown used in an achromatic pairing.

### L6 — Negative Meniscus, convex to object

nd = 1.76182, νd = 26.52. Glass: S-TIH14 (Ohara). f = -33.75 mm.

L6 is a dense-flint negative meniscus immediately ahead of L7. Its rear surface lies only 0.189 mm from L7's front surface. This thin air gap is real in the patent prescription and is retained in the data file. It is also the likely reason the patent resolves into nine air-separated groups while the production datasheet is commonly stated as eight groups.

### L7 — Biconvex Positive

nd = 1.69700, νd = 48.52. Glass: S-LAM59 (Ohara, 697/485 code). f = +13.87 mm.

L7 is the strongest positive element in the front group. It gathers the beam immediately before the aperture stop and largely neutralizes the negative power of the preceding leading section. Because νd = 48.52 falls on the flint side of the usual νd ≈ 50 crown/flint boundary, it should not be described as a crown merely from the LAM family name.

The earlier glass identification was too weak: the element is not merely a Hikari J-LAF09-class equivalent. Ohara S-LAM59 is an exact nd/νd match to the patent's 1.69700 / 48.52 entry, although it is a non-recommended or discontinued catalog line in current Ohara listings. Hikari J-LAF09 remains a close cross-vendor equivalent, not the primary identification.

### Aperture Stop

The stop is located in the long air space between L7 and the rear group. The patent table gives 1.134 mm from L7's rear surface to the stop and 4.730 mm from the stop to L8, for a total stop-spanning air space of 5.864 mm. A paraxial entrance-pupil calculation from the design F-number gives a physical stop semi-diameter of about 4.565 mm in the companion data file.

### L8 + L9 — Cemented Rear Doublet in LR1

L8: nd = 1.80518, νd = 25.42. Glass: S-TIH6 (Ohara). f = -8.37 mm.
L9: nd = 1.88300, νd = 40.80. Glass: S-LAH58 (Ohara; catalog code 883/408). f = +19.23 mm.

This cemented doublet begins the rear group just after the stop. The negative member is a dense flint; the positive member is a high-index lanthanum glass. The doublet has net negative power, f ≈ -16.06 mm, and functions as a compact rear achromat working in the steep cone emerging from the stop.

The element pair also prepares the bundle for L10, whose rear surface is the last surface of LR1 and the surface used in the patent's Condition (11).

### L10 — Biconvex Positive, both surfaces aspherical

nd = 1.74320, νd = 49.34. Glass: S-LAM60 (Ohara). f = +15.95 mm.

L10 is the second dual-surface aspherical element and the main positive field-correcting element in LR1. Its front surface carries the strongest conic in the design, K = -38.9070. Together, surfaces r18 and r19 shape field curvature, residual spherical aberration, and the large barrel distortion that the electronic correction model is expected to finish.

L10 is the more likely physical DSA element in the production lens, because it combines high aspheric severity with rear-group correction leverage. Olympus does not publish the element position of the DSA component, so this assignment remains an inference rather than a stated manufacturer fact.

### L11 — Biconvex Positive Focus Element (LRF)

nd = 1.51742, νd = 52.43. Glass: S-NSL36 (Ohara). f = +48.15 mm.

L11 is the only moving optical element. Its front radius is 25.519 mm and its rear radius is nearly flat at -1000.000 mm. The rendered patent page confirms the -1000.000 mm value; the OCR text can make it look like a much larger magnitude. Using -1000000 mm would shift the computed EFL to about 12.283 mm and the back focus to about 15.161 mm, so it is not consistent with Numerical Example 1.

The element's low power relative to LR as a whole gives fl_fo/flr = 2.150, satisfying the patent's Condition (8). The low moving mass is consistent with the production lens's internal-focus MSC drive concept, though the patent itself specifies the optical movement rather than the actuator construction.

## Glass Identification and Selection

The glass table was rechecked against vendor catalogs by nd/νd code. The significant correction from the prior draft is L7: it should be identified as Ohara S-LAM59, not merely as an unidentified 697/485 Hikari-equivalent glass. S-LAH58 also needs a catalog-rounding note: the patent uses νd = 40.80, while catalog data commonly list the 883/408 type at νd = 40.76.

| Element | Patent nd / νd | Corrected glass identification | Role |
|---|---:|---|---|
| L1 | 1.78590 / 44.20 | S-LAH51 (Ohara) | Leading negative meniscus |
| L2 | 1.67790 / 55.34 | S-LAL12 (Ohara) | Dual-surface negative asphere |
| L3 | 1.88300 / 40.80 | S-LAH58 (Ohara; 883/408 code) | High-index front collector |
| L4 | 1.48749 / 70.23 | S-FSL5 (Ohara) | ED-class low-dispersion negative member |
| L5 | 1.72151 / 29.23 | S-TIH18 (Ohara) | High-dispersion positive doublet partner |
| L6 | 1.76182 / 26.52 | S-TIH14 (Ohara) | Dense-flint negative meniscus |
| L7 | 1.69700 / 48.52 | S-LAM59 (Ohara; 697/485 code) | Strong front-group positive collector |
| L8 | 1.80518 / 25.42 | S-TIH6 (Ohara) | Dense-flint rear doublet member |
| L9 | 1.88300 / 40.80 | S-LAH58 (Ohara; 883/408 code) | High-index rear doublet member |
| L10 | 1.74320 / 49.34 | S-LAM60 (Ohara) | Dual-surface rear positive asphere |
| L11 | 1.51742 / 52.43 | S-NSL36 (Ohara) | Lightweight rear focus element |

The chromatic strategy is conventional achromatization rather than apochromatization. The strongest low-dispersion element is S-FSL5 in L4, paired with a high-dispersion positive partner in L5. A second dense-flint/high-index doublet appears in the rear group at L8/L9. No element in the prescription requires a strongly anomalous partial-dispersion designation to explain the patent's chromatic behavior.

## Focus Mechanism

The lens uses rear internal focusing. Only L11 moves; every element from L1 through L10 remains fixed. At the close-focus state tabulated as IO = 20 cm, the air gap ahead of L11 contracts and the back-focus gap behind L11 increases.

| Variable spacing | Infinity | IO = 20 cm | Change |
|---|---:|---:|---:|
| Gap after r19 / LRF front clearance | 3.0348 mm | 1.4977 mm | -1.5371 mm |
| Gap after r21 / back focus | 15.0407 mm | 16.6790 mm | +1.6383 mm |

A paraxial trace of the close-focus spacing gives transverse magnification about -0.085×, consistent with the production maximum magnification of about 0.08× at a 0.20 m minimum focus distance. The gap change shows that the focus element moves toward the object as focus is brought closer. The printed focus table is not forced into constant-track conservation: L1 + L2 is 18.0755 mm at infinity and 18.1767 mm at IO = 20 cm, a +0.1012 mm difference. The data file transcribes the patent table as printed rather than imposing an inferred conservation correction.

## Aspherical Surfaces

Example 1 has four aspherical surfaces: r3 and r4 on L2, and r18 and r19 on L10. The patent uses the standard even-order conic sag form with K as the ordinary conic constant, where K = 0 is a sphere. The A2 term is defined in the general equation but is zero in this example.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| r3 / 3A | -0.5882 | -3.2612e-5 | 1.3916e-7 | -1.3823e-9 | 6.9311e-12 | 0 |
| r4 / 4A | -0.2345 | -1.0137e-4 | -1.7688e-7 | -1.1612e-8 | 1.2299e-10 | -8.6949e-13 |
| r18 / 18A | -38.9070 | 7.1773e-5 | 1.7227e-6 | -1.3823e-9 | 6.9311e-12 | 0 |
| r19 / 19A | -2.6656 | 6.5273e-7 | 1.7649e-6 | 2.5620e-9 | 1.6732e-10 | 6.6546e-13 |

The L2 aspheres moderate the power of the second negative meniscus toward the rim, reducing off-axis astigmatism and coma. The L10 aspheres perform the heavier rear-group correction. The repeated A8 and A10 values on r18 and r3 are present in the patent table and have not been silently corrected.

## Conditional Expressions

All fifteen patent conditions were recomputed from the prescription. The values below use paraxial calculations for focal lengths and back focus, and the patent's finite-field image heights where required.

| # | Expression | Patent Ex. 1 | Recomputed | Result |
|---|---|---:|---:|---|
| (1) | fb / IHω | 1.350 | 1.350 | satisfied |
| (2) | fn / f | -2.630 | -2.631 | satisfied |
| (3) | fn / flr | -1.430 | -1.432 | satisfied |
| (4) | Σd / IHω | 4.090 | 4.092 | satisfied |
| (5) | f11 / (f tan ω) | -1.250 | -1.246 | satisfied |
| (6) | f11 / flr | -0.690 | -0.693 | satisfied |
| (7) | DT distortion | -10.464 | -10.464 | satisfied |
| (8) | fl_fo / flr | 2.150 | 2.150 | satisfied |
| (9) | SF11 | 2.437 | 2.437 | satisfied |
| (10) | SF21 | 3.447 | 3.447 | satisfied |
| (11) | R_LR1R / (f tan ω) | -1.161 | -1.161 | satisfied |
| (12) | SF_LRF | -0.950 | -0.950 | satisfied |
| (13) | Tair_max / Σd | 0.130 | 0.129 | satisfied |
| (14) | Σd / IHω30 | 8.070 | 8.068 | satisfied |
| (15) | fb / IHω30 | 2.660 | 2.660 | satisfied |

The condition set confirms that the design's compactness is achieved by accepting substantial barrel distortion, controlling the leading negative pair, and keeping the moving focus element light and low-powered.

## Distortion and Field

The patent's geometric full angle of view is about 91.2°, with Condition (7) giving distortion of -10.464%. The production lens is published with an 84° corrected angle of view. This difference is not an inconsistency: the design deliberately maps a wider geometric field onto the Four Thirds image height and then relies on electronic correction to restore the rectilinear field.

The companion data file declares the production corrected 84° field for catalog and tracing metadata, while retaining the patent's optical prescription unchanged.

## Verification Summary

The prescription was re-entered and checked by independent paraxial y-ν and ABCD calculations. The calculations reproduce the patent's primary quantities when the final surface is read from the rendered patent page as R = -1000.000 mm.

| Quantity | Patent / source value | Recomputed value |
|---|---:|---:|
| EFL at infinity | 12.187 mm | 12.1874 mm |
| Design F-number | 2.051 | 2.051 |
| Back focus at infinity | 15.0407–15.0408 mm | 15.0433 mm |
| Axial distance first surface to image | 60.667 mm | 60.6665 mm |
| L1 focal length fn | -32.063 mm | -32.062 mm |
| L1 + L2 focal length f11 | -15.512 mm | -15.512 mm |
| Rear group focal length flr | 22.394 mm | 22.395 mm |
| Focus group focal length fl_fo | 48.151 mm | 48.150 mm |
| Petzval sum | not directly tabulated | +0.00897 mm^-1 |

The Petzval sum was computed surface by surface as Σ(n′ - n) / (R n n′). Its positive value corresponds to a Petzval radius of about 111 mm, roughly nine times the design focal length.

The patent does not publish clear semi-diameters. The companion data file therefore uses estimated semi-diameters derived from paraxial marginal and chief-ray traces, constrained by surface-sag and edge-thickness checks. These values should be treated as rendering apertures, not manufacturer-published mechanical clear apertures.

## Sources

Primary prescription source: US 8,248,716 B2, Numerical Example 1. Production specification source: OM SYSTEM product specifications for the M.Zuiko Digital ED 12mm F2.0, current product page: https://explore.omsystem.com/c/en/m-zuiko-ed-12mm-f2-0. Production construction cross-check: Micro Four Thirds / Four Thirds Consortium lens listing, https://www.four-thirds.org/en/lens/i-012mm-f020-olympus/. Glass identification sources: Ohara public glass catalog entries for S-LAH51, S-LAL12, S-LAH58, S-FSL5, S-TIH18, S-TIH14, S-LAM59, S-TIH6, S-LAM60, and S-NSL36; Hikari J-LAF09 used only as a cross-vendor 697/485 comparison.
