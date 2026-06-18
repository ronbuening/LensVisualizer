## Patent Reference and Design Identification

**Patent:** US 4,266,860  
**Application Number:** 71,055  
**Filed:** August 30, 1979  
**Priority:** September 8, 1978 (JP 53-109772)  
**Granted:** May 12, 1981  
**Inventor:** Kiyoshi Hayashi  
**Assignee:** Nippon Kogaku K.K. (Tokyo, Japan)  
**Title:** Wide Angle Zoom Lens System Having Shortened Closeup Focal Length  
**Embodiment analyzed:** Second Embodiment / Claim 8

US 4,266,860 discloses a negative-positive two-group wide-angle zoom in which the first, divergent group is also the focusing group. The invention is not merely a two-group zoom; its distinguishing feature is the subdivision of the first group into a divergent forward portion L11 and a convergent rearward portion L12, with the air space between them increased during close focusing to improve spherical-aberration correction.

The Second Embodiment is the closest patent match to the production Nikon AI-S Zoom-Nikkor 35–70mm f/3.5. The patent example gives 10 glass elements in 9 air-spaced groups, a focal-length range of 36.0–68.8 mm, and a constant F-number of 3.5. Nikon's user literature for the AI-S production lens gives 35–70 mm, f/3.5, 10 elements in 9 groups, Nikon bayonet mount, 62 mm filters, 0.7 m normal minimum focus, and macro focusing at 70 mm down to 0.35 m with 1/4× reproduction. The optical formula, focal-length range, aperture, and close-focus mechanism therefore converge on the Second Embodiment rather than the First or Third Embodiment.

The analysis treats the patent numerical prescription as authoritative for optical values. Production specifications are used only for identification and marketing metadata. The aperture stop is not specified by the patent, so the stop in the companion data file is explicitly modeled rather than patent-stated.

## Optical Architecture

The design is a two-group negative-positive zoom. L1 is a divergent front group and L2 is a convergent rear group. This negative-leading arrangement is retrofocus-derived at the wide end because the patent back focal distance, 43.7 mm, exceeds the 36.0 mm design focal length. At the tele end, the back focal distance is slightly shorter than the focal length, and the physical vertex-to-image track is about 124.75 mm against a computed focal length of 68.79 mm. The long-end configuration therefore should not be described as a telephoto construction in the strict total-length/EFL sense.

L1 contains four air-spaced elements. Its forward portion L11 consists of L1, L2, and L3; its rearward portion L12 is the single positive meniscus L4. Independent paraxial tracing gives f(L11) = -34.602 mm, f(L12) = +95.312 mm, and f(L1) = -59.942 mm at infinity. L11 supplies the front divergence required for wide-angle SLR clearance, while L12 both moderates L1's net negative power and participates directly in close-distance spherical-aberration correction.

L2 contains six elements in five air-spaced groups, including one cemented doublet at its front. Independent paraxial tracing gives f(L2) = +41.379 mm. The group acts as the positive relay and final image-forming group, while its dense flint elements and strong rear biconcave element provide field-curvature and chromatic balance.

Zooming is accomplished by changing the air separation d8 between L1 and L2. In the patent's Second Embodiment, d8 changes from 33.45 mm at the wide end to 0.65 mm at the long end. The patent back focal distance changes from 43.7 mm to 66.3 mm. The prescription contains no aspherical surfaces.

The patent does not identify the aperture stop in the numerical table, and Figure 3 does not draw an unambiguous iris. The companion data file therefore inserts a synthetic flat stop in the d15 air space between L8 and L9, splitting the 3.9 mm air gap into 1.95 mm + 1.95 mm. This stop placement is a rendering and tracing assumption only; it is not a patent-stated iris location.

## Element-by-Element Analysis

### L1 — Biconvex Positive, front element of L11

nd = 1.60323, νd = 42.5. Glass: 603/425 barium flint; Sumita K-BaSF5-equivalent. f = +97.03 mm.

L1 is a weak biconvex positive lens with a strongly curved front surface and a very weak rear surface. It functions as the front collector in the otherwise divergent L11 portion. Its positive power helps prevent the following negative menisci from carrying the entire front-group burden, reducing the curvature stress that would otherwise occur in a compact 35 mm-end zoom.

The glass identification is retained as a barium-flint class match rather than treated as a fully verified modern catalog match. The stored nd/νd pair is the controlling prescription data.

### L2 — Negative Meniscus, second element of L11

nd = 1.67790, νd = 55.5. Glass: S-LAL12 (OHARA), lanthanum crown. f = -36.14 mm.

L2 is a negative meniscus with both centers of curvature to the image side. Its sharply curved rear surface makes it the strongest single negative element in L11. The high-index lanthanum crown glass permits strong negative power without a still steeper rear radius.

The use of a crown-range Abbe number in a negative element is part of the chromatic power distribution: it limits how much negative chromatic power is introduced in the front group and leaves part of the longitudinal chromatic correction to the L2 cemented doublet and rear dense flint components.

### L3 — Negative Meniscus, rear element of L11

nd = 1.71300, νd = 53.9. Glass: S-LAL8 (OHARA), lanthanum crown. f = -78.98 mm.

L3 is the second negative meniscus in the divergent portion. Its power is weaker than L2, but the separation between L2 and L3 lets the design distribute front-group negative power across two surfaces rather than forcing it into one element. This helps control coma and spherical-aberration growth in a compact negative front group.

### L4 — Positive Meniscus, L12 close-correction element

nd = 1.59507, νd = 35.6. Glass: Unmatched 595/356 light flint class. f = +95.31 mm.

L4 is the entire convergent rearward portion L12 of the first group. It offsets part of the L11 negative power, yielding the patent's f(L1) = -59.942 mm rather than the much stronger f(L11) = -34.602 mm. Because L4 is a positive element made of relatively high-dispersion flint glass, it also contributes to the system's chromatic balance.

Its focusing role is central. During close focusing, L11 moves farther toward the object than L12, increasing d6. The increased spacing raises marginal-ray height at L12 and drives spherical aberration toward under-correction, countering the over-correction that would otherwise worsen at close range.

### L5 — Biconvex Positive, cemented doublet front

nd = 1.62041, νd = 60.3. Glass: S-BSM16 / SK16 class dense barium crown. f = +59.25 mm.

L5 is the positive crown member of the front cemented doublet in L2. Its symmetric radii provide substantial positive relay power while moderating coma at the cemented interface. It is the principal positive element in the forward part of L2.

### L6 — Negative Meniscus, cemented doublet rear

nd = 1.80518, νd = 25.5. Glass: S-TIH6 / SF6 class dense flint. f = -183.99 mm.

L6 is the dense-flint member of the L5/L6 cemented doublet. Its standalone power is weakly negative, so the doublet remains net positive, but the large dispersion difference between L5 and L6 supplies primary achromatization. The high refractive index also moderates curvature requirements and contributes useful Petzval balance through the cemented interface.

### L7 — Positive Meniscus in L2

nd = 1.51118, νd = 50.9. Glass: Unmatched 511/509 light crown class. f = +58.02 mm.

L7 is a positive relay meniscus placed immediately behind the L5/L6 doublet. Its nd/νd pair does not match a current public OHARA, Hoya, Schott, Hikari, CDGM, or Sumita catalog entry within a confident tolerance. The correct treatment is therefore an explicit unmatched light-crown class label, not a forced catalog assignment.

### L8 — Positive Meniscus in L2

nd = 1.51680, νd = 64.2. Glass: BK7-type borosilicate crown, matching Schott N-BK7 class; current OHARA S-BSL7 is not an exact nd match. f = +127.95 mm.

L8 is a modest positive meniscus behind L7. Its prescription values match the classic BK7 family closely. Schott N-BK7 is listed at nd = 1.51680 and νd = 64.17, which matches the patent's nd = 1.51680 and rounds to the patent's νd = 64.2. Current OHARA S-BSL7 is commonly listed around nd = 1.51633 and νd = 64.14, so the data file labels this as BK7-type rather than exact S-BSL7.

### L9 — Biconcave Negative in L2

nd = 1.80518, νd = 25.5. Glass: S-TIH6 / SF6 class dense flint. f = -22.07 mm.

L9 is the strongest negative element in the prescription. It is a biconcave dense-flint lens placed near the rear of L2, where it provides strong field-flattening power and chromatic leverage. Its rear surface alone contributes a large negative Petzval term, balancing the cumulative positive Petzval contribution of the preceding relay elements.

### L10 — Biconvex Positive rear element

nd = 1.64831, νd = 33.8. Glass: 648/338 dense flint; exact current catalog identity unresolved. f = +38.17 mm.

L10 is the rear positive element and completes the final convergence to the image plane. The patent value is a 648/338 dense flint. Because the exact current vendor identity was not resolved from an authoritative catalog, the data file uses a class label and preserves the patent nd/νd values as authoritative.

## Glass Identification and Selection

| Element | nd | νd | Identification | Role |
|---|---:|---:|---|---|
| L1 | 1.60323 | 42.5 | 603/425 barium flint; Sumita K-BaSF5-equivalent | Front collector in L11 |
| L2 | 1.67790 | 55.5 | S-LAL12 (OHARA) | Primary negative meniscus |
| L3 | 1.71300 | 53.9 | S-LAL8 (OHARA) | Secondary negative meniscus |
| L4 | 1.59507 | 35.6 | Unmatched 595/356 light flint | L12 close-correction element |
| L5 | 1.62041 | 60.3 | S-BSM16 / SK16 class | Cemented doublet crown |
| L6 | 1.80518 | 25.5 | S-TIH6 / SF6 class | Cemented doublet flint |
| L7 | 1.51118 | 50.9 | Unmatched 511/509 light crown | Positive relay meniscus |
| L8 | 1.51680 | 64.2 | BK7-type borosilicate crown; not exact current OHARA S-BSL7 | Positive relay meniscus |
| L9 | 1.80518 | 25.5 | S-TIH6 / SF6 class | Field flattener / chromatic corrector |
| L10 | 1.64831 | 33.8 | 648/338 dense flint, unresolved catalog identity | Rear converging element |

The chromatic strategy is distributed rather than concentrated in a single doublet. L5/L6 provides the primary crown/flint achromatic pair, but the dense-flint L9 and the positive flint-class L10 also participate materially. L4 is another positive element with flint-range dispersion, which helps distribute longitudinal chromatic correction across the lens rather than forcing it into the L2 cemented doublet alone.

The Petzval sum was recomputed surface by surface using φ/(n·n′). The result is +0.00303 mm^-1, corresponding to a Petzval radius of about 330 mm. The calculation is explicitly surface-based rather than element-thin-lens based.

## Focus Mechanism

The patent's close-distance correction is the main design feature. In normal close focusing, L11 and L12 both move toward the object side, but L11 moves farther. The patent describes this as an increase in the air space between the divergent forward portion and the convergent rearward portion of L1. For the Second Embodiment, d6 changes from 5.7 mm at infinity to 6.2 mm at β = -0.25.

| Quantity | Infinity | Close state |
|---|---:|---:|
| d6, L11–L12 spacing | 5.7 mm | 6.2 mm at β = -0.25 |
| d8, L1–L2 spacing at wide end | 33.45 mm | 57.064 mm, derived proxy |
| d8, L1–L2 spacing at tele end | 0.65 mm | 12.325 mm, derived proxy |
| Back focal distance, wide | 43.7 mm | held fixed in data model |
| Back focal distance, tele | 66.3 mm | held fixed in data model |

Only d6, the infinity zoom d8 values, and the infinity back focal distances are patent-tabulated. The close-focus d8 values in the companion data file are paraxial derived values. They are obtained by holding L2 and the image plane fixed, increasing d6 to 6.2 mm, and solving d8 so the transverse magnification is β = -0.25. At the tele end this gives an object-to-image distance of about 343.6 mm in the paraxial model, consistent with the production lens's 0.35 m macro specification.

## Conditional Expressions

The patent gives two design conditions for the first-group subdivision:

1. 1.2|f1| < f12 < 2.8|f1|
2. 0.07 < d/|f1| < 0.2

For the Second Embodiment, independent paraxial tracing gives |f1| = 59.942 mm and f12 = 95.312 mm. The ratio f12/|f1| is 1.590, inside the allowed 1.2–2.8 range. The patent table gives d = 5.69 mm for the principal-plane spacing between L11 and L12 at infinity, so d/|f1| = 0.0949, also inside the allowed 0.07–0.2 range.

## Verification Summary

The prescription was re-entered directly from the Second Embodiment table and checked with an independent paraxial y-nu trace.

| Check | Patent value | Computed value | Difference |
|---|---:|---:|---:|
| Wide EFL | 36.0 mm | 36.02194 mm | +0.02194 mm |
| Wide BFD | 43.7 mm | 43.69004 mm | -0.00996 mm |
| Tele EFL | 68.8 mm | 68.79028 mm | -0.00972 mm |
| Tele BFD | 66.3 mm | 66.31052 mm | +0.01052 mm |
| f(L1) | -59.942 mm | -59.94226 mm | -0.00026 mm |
| f(L12) | +95.312 mm | +95.31206 mm | +0.00006 mm |

The agreement is within transcription and rounding tolerance, supporting the sign convention, refractive-index entries, and variable d8 values. The data file's inferred semi-diameters were also checked for edge thickness and cross-gap sag intrusion. The tightest cross-gap constraint is the d4 gap between L2 and L3; this is why the L3 semi-diameter is intentionally conservative.

## Design Heritage and Context

The design belongs to the late-1970s class of two-group wide-angle zooms: a divergent front group creates the long back focus needed by a 35 mm SLR, and a convergent rear group forms the image while the front-to-rear separation controls focal length. Hayashi's specific contribution in this patent is not the basic negative-positive zoom layout, but the close-distance correction by differential motion inside L1.

The design is entirely spherical. The aberration plots for the Second Embodiment show the patent author's intended result: close-distance spherical aberration is improved at β = -0.25, and the comparison figures for the long end show the correction-engaged case against the uncorrected case at a 1 m object distance.

## Sources

- US Patent 4,266,860, "Wide Angle Zoom Lens System Having Shortened Closeup Focal Length," Kiyoshi Hayashi, Nippon Kogaku K.K., granted May 12, 1981.
- Nikon AI-S Zoom-Nikkor 35–70mm f/3.5 user manual/specification page, used only for production-lens identification metadata.
- SUMITA optical-glass data for K-BaSF5 / BASF5-class 603/425 glass consulted for L1.
- OHARA manufacturer catalog/datasheet entries consulted for S-LAL12, S-LAL8, S-BSM16, and S-TIH6 class matches.
- SCHOTT N-BK7 manufacturer datasheet consulted for L8.
- L4, L7, and L10 are left as unmatched or unresolved class labels because no exact authoritative modern catalog identity was established in this review.
