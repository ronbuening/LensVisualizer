## Patent Reference and Design Identification

**Patent:** US 4,018,512
**Application number:** US 625,778
**Title:** Retrofocus Type Lens
**Filed:** October 24, 1975
**Granted:** April 19, 1977
**Priority:** November 9, 1973 (Japan 48-126655)
**Inventor:** Yutaka Sakai
**Assignee:** Fuji Photo Optical Co., Ltd., Omiya, Japan
**Embodiment analyzed:** Example 1, Table I, FIG. 1

US 4,018,512 describes a compact large-aperture retrofocus wide-angle lens. The patent gives three numerical embodiments; this analysis and the paired data file transcribe Example 1, the FIG. 1 prescription listed in Table I.

The link to the production EBC Fujinon-W 35mm f/1.9 is based on convergent, not exclusive, evidence. The patent states an F-number of 1.9, an angle of view of 63°, and a back focal length of 1.0719f for Example 1. The Fuji Photo Film lens table for the EBC Fujinon-W 35mm f/1.9 lists an 8-element / 6-group construction, 62°44′ angle of view, 0.4 m minimum focus, f/1.9-16 aperture range, 49 mm filter thread, 60 × 48 mm dimensions, and 230 g weight. The production angle is therefore 62°44′, while the patent rounds the worked design field to 63°. The patent's 8-element / 6-group retrofocus layout and f/1.9 aperture match the published production lens specification at the level normally available from period manufacturer literature, and the display name preserves the EBC coating/series designation.

## Optical Architecture

The design is a retrofocus wide-angle lens with 8 elements in 6 air-spaced groups. The front section consists of a negative meniscus L1 and a strongly positive biconvex L2 separated by a long air gap. The rear section consists of four components: a cemented negative doublet L3+L4, a cemented positive meniscus doublet L5+L6, a positive meniscus L7, and a rear positive meniscus L8.

The power distribution is the standard inverted-telephoto pattern: strong negative front power followed by positive relay power behind the stop. L1 expands the beam and shifts the rear principal plane forward, while L2 and the rear components recover convergence and correct the aberration burden imposed by the front negative group. The patent explicitly treats the front L1-L2 spacing, the shape of L2, and the L3/L4 cemented junction as the main design controls.

The aperture stop is shown in FIG. 1 in the air space between L2 and L3. The patent does not provide a numerical stop station. The data file therefore splits the Table I air space d4 = 0.180f as 0.060f before the stop and 0.120f after the stop for rendering and aperture sizing. This inferred stop split does not alter the patented refractive surface sequence, EFL, or BFD.

All surfaces are spherical. No aspherical coefficients are present in the patent.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

nd = 1.51633, νd = 64.0. Glass: S-BSL7 (Ohara catalog-equivalent). f = -68.1 mm.

L1 is the front diverging element that establishes the retrofocus character. Both radii are positive in the patent sign convention, with the rear surface much more strongly curved than the front surface. That geometry gives L1 negative power while keeping the object-side face convex.

The glass is a low-index, high-Abbe borosilicate-crown type. Its role is not to supply exotic dispersion correction, but to keep the front negative element relatively mild for the amount of beam expansion required. The patent identifies the aberrations from this front negative element, especially spherical aberration and coma, as the difficulty that the later conditions address.

### L2 — Biconvex Positive Collector

nd = 1.77252, νd = 49.6. Glass: S-LAH66 (Ohara catalog-equivalent). f = +28.9 mm.

L2 is the strongest single positive element in the lens. Its front surface is appreciably stronger than its rear surface, and the patent constrains this shape through the ratio r3 / |r4|. In Example 1 the ratio is 0.5234, inside the required 0.33-0.6 interval.

The high refractive index permits substantial positive power without making the element excessively thick. Although νd = 49.6 is close to the crown/flint boundary, it is properly treated as a lanthanum-flint or high-index flint-type material rather than a crown in the usual optical-design sense.

### L3+L4 — Cemented Negative Component

L3: nd = 1.72000, νd = 43.7. Glass: S-LAM52 / J-LAF02 class (catalog-equivalent; patent nd rounded). f = +39.6 mm.

L4: nd = 1.62606, νd = 39.1. Glass: H-BaF8 / BaF class (CDGM catalog-equivalent). f = -15.6 mm.

The L3+L4 cemented doublet is the first component behind the stop and has net negative power. L3 is individually a positive meniscus, while L4 is a strong biconcave negative element. The cemented combination computes to approximately -23.4 mm after scaling to a 35 mm design EFL.

The cemented interface r6 is central to the patent. The patent requires both an index step, 0.05 < N3 - N4 < 0.13, and a cemented radius, -0.45f < r6 < -0.33f. Example 1 gives N3 - N4 = 0.09394 and r6 = -0.37736f. This junction is specified to increase high-order spherical aberration in the undercorrected direction, preventing excessive marginal-ray overcorrection by the full system.

The L3 glass is not identified by name in the patent. The stored value is only nd = 1.72, so the S-LAM52 / J-LAF02-class identification is a catalog-equivalent match, not a proof of the production melt. L4 likewise matches code 626391, with CDGM H-BaF8 now used as the coefficient-backed modern catalog equivalent.

### L5+L6 — Cemented Positive Meniscus Component

L5: nd = 1.69895, νd = 30.1. Glass: S-TIM35 (Ohara catalog-equivalent). f = -41.8 mm.

L6: nd = 1.69680, νd = 55.6. Glass: S-LAL14 (Ohara catalog-equivalent). f = +26.0 mm.

The second cemented doublet is a positive meniscus component with its convex face toward the image. L5 is a dense-flint negative element and L6 is the stronger positive element. The cemented pair computes to approximately +61.8 mm, so its system role is positive despite the negative front half.

The L5/L6 pairing supplies primary chromatic correction inside the rear relay. The two elements have nearly equal d-line refractive indices but very different Abbe numbers, which is a useful arrangement for controlling axial color while keeping surface bending moderate.

### L7 — Positive Meniscus, Convex to Image

nd = 1.69680, νd = 55.6. Glass: S-LAL14 (Ohara catalog-equivalent). f = +71.1 mm.

L7 is a positive meniscus relay element. Both radii are negative, and the more strongly curved surface faces the image side. It adds moderate positive power after the cemented positive doublet without forcing the preceding doublet to carry the entire relay function.

The reuse of the same lanthanum-crown catalog class as L6 reduces the number of distinct rear-group glass types while preserving high index and relatively low dispersion.

### L8 — Rear Positive Meniscus, Convex to Image

nd = 1.69680, νd = 55.6. Glass: S-LAL14 (Ohara catalog-equivalent). f = +123.8 mm.

L8 is the last glass element and is close to plano-convex in effect because r13 is very weak relative to r14. It supplies the final weak positive power and participates in field correction near the image plane.

The rear element also keeps the system's back focal length at about 1.072f rather than allowing the relay group to collapse into a shorter-back-focus wide-angle layout. This is consistent with the SLR mirror-clearance requirement implied by the production M42 system.

## Glass Identification and Selection

The patent lists refractive indices and Abbe numbers only; it does not name glass manufacturers or glass types. The following identifications are therefore catalog-equivalent matches to the numerical prescription. They should not be read as Fuji production melt records.

| Element | Patent nd | Patent νd | Catalog-equivalent identification | Confidence | Role |
|---|---:|---:|---|---|---|
| L1 | 1.51633 | 64.0 | S-BSL7 (Ohara) | High | Low-index front negative crown |
| L2 | 1.77252 | 49.6 | S-LAH66 (Ohara) | High | High-index positive collector |
| L3 | 1.72000 | 43.7 | S-LAM52 / J-LAF02 class | Moderate | Front element of cemented negative component |
| L4 | 1.62606 | 39.1 | H-BaF8 / BaF class (CDGM) | Moderate | Rear element of cemented negative component |
| L5 | 1.69895 | 30.1 | S-TIM35 (Ohara) | High | Dense-flint half of positive doublet |
| L6 | 1.69680 | 55.6 | S-LAL14 (Ohara) | High | Lanthanum-crown positive half of positive doublet |
| L7 | 1.69680 | 55.6 | S-LAL14 (Ohara) | High | Positive relay meniscus |
| L8 | 1.69680 | 55.6 | S-LAL14 (Ohara) | High | Rear positive meniscus / field correction |

The design uses a compact glass palette. Three rear elements use the same high-index, relatively low-dispersion lanthanum-crown class, while the two cemented doublets use flint/crown or flint/flint pairings to manage chromatic and spherical correction. L2's νd = 49.6 places it marginally on the flint side of the usual νd ≈ 50 boundary despite its lanthanum/high-index character.

## Focus Mechanism

The patent publishes only the infinity prescription. It does not provide finite-conjugate variable spacings or a floating-focus table.

The production EBC Fujinon-W 35mm f/1.9 table gives a 0.4 m minimum focus distance. The data file models this as unit focus by increasing only the back-focus spacing. The close-focus state uses a thin-lens unit-extension approximation of 3.356 mm at 0.40 m, giving a modeled BFD change from 37.498 mm to 40.854 mm. This is an implementation approximation for visualization, not a patent-published close-focus prescription.

The approximate magnification at 0.40 m is β ≈ 35 / (400 - 35) = 0.096, or about 1:10.4, before accounting for principal-plane offsets and mechanical measurement conventions.

## Conditional Expressions

The patent establishes four conditional expressions, all satisfied by Example 1.

Condition 1 constrains the L1-L2 air separation:

$$0.45f < d_2 < 0.75f$$

Example 1 gives d2 = 0.502f. This keeps the front negative group separated enough to obtain long back focus without making the whole lens excessively long.

Condition 2 constrains the L2 shape:

$$0.33 < \frac{r_3}{|r_4|} < 0.6$$

Example 1 gives r3 / |r4| = 0.94324 / 1.80218 = 0.5234. The patent states that this range balances spherical-aberration correction from the positive L2 against coma compensation for lower-stop rays.

Conditions 3 and 4 constrain the L3/L4 cemented interface:

$$0.05 < N_3 - N_4 < 0.13$$

$$-0.45f < r_6 < -0.33f$$

Example 1 gives N3 - N4 = 0.09394 and r6 = -0.37736f. These values meet the patent's stated requirement for controlled high-order spherical-aberration contribution at the cemented face.

## Verification Summary

The Table I prescription was re-keyed directly from the patent and traced independently using a paraxial y-u ray trace. With the patent's rounded normalized values, the computed EFL is 1.000443 and the BFD is 1.071853. The patent states f = 1.0 and Bf = 1.0719, so the difference is consistent with table rounding.

The data file scales the rounded prescription by 34.9844896 so that the computed EFL is 35.000 mm. This gives a scaled BFD of 37.498 mm and a first-surface-to-image total track of 88.051 mm.

The Petzval sum was recomputed surface-by-surface using $\phi/(n n')$. The computed total is 0.20211, matching the Table II sum of 0.20212. OCR-sensitive entries were checked against the scanned table image: Table I gives r13 = -18.13010, and Table II gives the eighth-surface Petzval contribution as -0.16993.

The semi-diameters are inferred, not patent-published. The current values were tightened against Fig. 1 so the rear relay no longer looks excessively pinched: the L3/L4 and L5/L6 doublets remain smaller than the outer L1/L8 menisci, while L7 sits between the compact cemented relay and the taller final field-correction meniscus.

Standalone in-air element focal lengths at the 35 mm scale are: L1 -68.1 mm, L2 +28.9 mm, L3 +39.6 mm, L4 -15.6 mm, L5 -41.8 mm, L6 +26.0 mm, L7 +71.1 mm, and L8 +123.8 mm. The cemented L3+L4 component computes to -23.4 mm, and the cemented L5+L6 component computes to +61.8 mm.

## Design Heritage and Context

This design is a 1970s SLR retrofocus wide-angle: a separated front negative meniscus and positive collector in front of the stop, followed by a compact positive relay group behind the stop. The patent's emphasis is not novelty through aspheres or exotic partial dispersion, but the control of spherical aberration and coma in a fast 35 mm-class retrofocus lens using all-spherical elements.

The production EBC Fujinon-W 35mm f/1.9 was one of the faster wide-angle lenses in Fuji's M42 lens table. The optical formula's 8-element / 6-group construction and long back focal length are consistent with the requirements of the Fujica SLR system.

## Sources

- US 4,018,512, Yutaka Sakai, "Retrofocus Type Lens," Fuji Photo Optical Co., Ltd., filed October 24, 1975, granted April 19, 1977.
- Fuji Photo Film Co., Ltd., "Fujinon Quality Lenses" product table, Ref. No. OP1-136E, for production specifications of the EBC Fujinon-W 35mm f/1.9.
- Ohara Corporation glass data pages for S-BSL7, S-LAH66, S-LAM52, S-TIM35, and S-LAL14.
- Hikari / Nikon optical glass catalog page for the J-LAF02 class cross-check.
- CDGM optical glass datasheet for H-BaF8.
