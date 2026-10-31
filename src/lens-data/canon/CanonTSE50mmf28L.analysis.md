# Canon TS-E 50mm f/2.8L Macro — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 10,571,651 B2
**Application Number:** 15/854,328
**Filed:** December 26, 2017
**Granted:** February 25, 2020
**Priority:** JP 2016-252695 (December 27, 2016); JP 2017-197464 (October 11, 2017)
**Inventor:** Hideki Sakai
**Assignee:** Canon Inc. (printed Canon Kabushiki Kaisha)
**Title:** Image Pickup Optical System, Image Pickup Apparatus Having the Image Pickup Optical System, Lens Apparatus Having the Image Pickup Optical System, and Image Pickup System Having the Image Pickup Optical System
**Example details:** Numerical Data 1, PDFp17 (printed columns11–12); Figure1 PDFp3 and Figures2A/2B p4; Table1 PDFp18 (printed column14).

Numerical Data 1 is the selected research model associated with the production Canon TS-E 50mm f/2.8L Macro. This association does not establish an exact production prescription. The patent lists f = 51.40 mm, Fno = 2.88, half field 33.20°, image height 33.63 mm, 12 glass elements, and a close-focus state at β = -0.5. Canon's published product specifications give a 50 mm f/2.8 lens with 12 elements in 9 groups, manual focus, 0.5× maximum magnification, 0.273 m closest focusing distance, ±12 mm shift, and ±8.5° tilt.

The 33.63 mm patent image height gives a 67.26 mm image circle. That is larger than the centered 36 × 24 mm full-frame diagonal and is consistent with the worst-case diagonal shift envelope for a ±12 mm perspective-control movement. The two nd = 1.49700, νd = 81.5 elements admit an approximate S-FPL51 spectral proxy; an association with production UD elements is inferred, not source proof of chemistry or supplier. Canon's public product copy also describes aspherical lens elements, but Numerical Data 1 gives no aspherical surface labels, equation, or coefficient table. The data file therefore remains a patent transcription rather than a complete manufacturer production prescription.

Examples 2 and 3 in the same patent use the same broad three-unit retrofocus layout but close to β = -0.7. Example 4 changes to a two-unit positive-positive layout and closes to β = -1.1. Those examples do not match the production 0.5× macro specification as directly as Numerical Data 1. The aspherical-element mismatch is therefore treated as a disclosed limitation of the product association, not as a reason to substitute a different embodiment.

## Optical Architecture

The design is a three-unit retrofocus optical system with negative-positive-positive power distribution. From object to image it consists of L1 with negative refractive power, L2 with positive refractive power, and L3 with positive refractive power. L3 contains the aperture stop and is subdivided into L3a in front of the stop and L3b behind the stop.

The 12 elements are arranged as 9 air-spaced groups. L1 contains three air-spaced elements: two negative front elements followed by a strong biconvex positive element. L2 contains two air-spaced menisci and acts as the floating correction unit. L3 contains seven elements in four air-spaced groups: a positive ED/flint doublet, a weak negative crown/flint doublet, the stop, a high-index negative/ED positive doublet, and a final high-index positive meniscus.

Paraxial tracing of the rounded printed prescription gives an effective focal length of 51.397 mm and a back focal distance of 55.956 mm at infinity, so Sk/f = 1.089. The back focal distance is longer than the focal length, which is the defining retrofocus behavior needed for an EF-mount tilt-shift lens with a large rear clearance and a moving optical axis.

The aperture stop is placed deep in the assembly. From the printed prescription, the first surface to stop distance is 79.53 mm, while the stop to last glass surface distance is 17.93 mm. This asymmetric placement is the central layout constraint in the patent: it leaves room for the focus feeding mechanism in front while keeping the rear effective diameters small enough for a lens that must shift and tilt behind the optical cell.

The patent's effective-diameter column is treated as a full-diameter column, not a semi-diameter column. In the data file it has been divided by two for lens surface `sd` values. The stop row is treated separately: its effective-diameter entry is not used as the physical wide-open aperture. The stop semi-diameter in the data file, 9.724 mm, was solved from the patent F-number 2.88 and the computed front-group pupil magnification.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

nd = 1.59270, νd = 35.3. Glass: catalog-equivalent S-FTM16 (OHARA). f = -81.9 mm.

L1 is a front negative meniscus with both radii positive. Its rear surface is more strongly curved than its front surface, so the element is concave toward the image side and has negative power. It starts the retrofocus divergence and helps enlarge the working ray bundle before the positive rear units.

S-FTM16 supplies an existing compatible spectral curve for L1/L2; the source does not identify vendor, historical melt or chemistry.

### L2 — Biconcave Negative

nd = 1.59270, νd = 35.3. Glass: catalog-equivalent S-FTM16 (OHARA). f = -58.6 mm.

L2 is the stronger of the two negative elements in the first unit. It is separated from L1 by a 13.45 mm air gap, which distributes the negative power and avoids concentrating the entire retrofocus expansion into a single front element.

The large spacing also helps the first unit maintain the required image circle without forcing the first glass diameter beyond the 77 mm filter-class mechanical envelope of the production lens.

### L3 — Biconvex Positive

nd = 1.74950, νd = 35.3. Glass: catalog-equivalent S-LAM7 (OHARA). f = +48.5 mm.

L3 is a strong biconvex positive element. It partly recovers the divergence generated by L1 and L2 while leaving the first unit as a weak negative group overall. The high index reduces the curvatures needed for this positive power.

The air gap after L3 is the first focus-variable spacing, d6. It changes from 1.01 mm at infinity to 6.84 mm at β = -0.5.

### L4 — Negative Meniscus, Convex to Object

nd = 1.65412, νd = 39.7. Glass: catalog-equivalent S-NBH5 (OHARA). f = -76.0 mm.

L4 begins the second lens unit. It is a negative meniscus, again with both radii positive, and it works with L5 to form a weak positive relay group. Its position changes during focusing, so it participates directly in suppressing close-range field curvature and spherical aberration changes.

S-NBH5 is the existing compatible spectral proxy, not a source glass identification. The same glass also appears in L9, where it serves as the negative component of the weak field-correcting doublet before the stop.

### L5 — Positive Meniscus, Convex to Object

nd = 1.85478, νd = 24.8. Glass: catalog-equivalent S-NBH56 (OHARA). f = +62.8 mm.

L5 completes the weak positive second unit. It is a high-index, high-dispersion positive meniscus. Its strong index allows positive power in a compact meniscus shape while keeping the group spacing manageable.

The air gap after L5 is the second focus-variable spacing, d10. It changes from 7.61 mm at infinity to 1.78 mm at β = -0.5. The opposite movement of d6 and d10 is the visible signature of the L2 floating motion.

### L6 + L7 — Cemented Doublet, Positive Net Power

L6: nd = 1.49700, νd = 81.5. Glass: catalog-equivalent S-FPL51 (OHARA). Standalone f = +39.5 mm.

L7: nd = 1.80000, νd = 29.8. Glass: catalog-equivalent S-NBH55 (OHARA). Standalone f = -102.3 mm.

Cemented doublet net focal length: +65.4 mm.

This is the first S-FPL51-based doublet and the first group of L3a. L6 supplies low-dispersion positive power, while L7 supplies high-index negative flint compensation at the cemented interface. The Abbe-number separation, about 52 units, makes this the strongest primary axial-color correcting pair in the front half of L3.

The doublet is also thick enough to carry meaningful positive power without an extreme rear radius. Its position before the stop gives it leverage over both axial color and the off-axis aberrations entering the aperture region.

### L8 + L9 — Cemented Doublet, Weak Negative Net Power

L8: nd = 1.61800, νd = 63.4. Glass: catalog-equivalent S-PHM52 (OHARA). Standalone f = +33.5 mm.

L9: nd = 1.65412, νd = 39.7. Glass: catalog-equivalent S-NBH5 (OHARA). Standalone f = -26.3 mm.

Cemented doublet net focal length: -195.4 mm.

This doublet is nearly symmetric at the crown element and only weakly negative as a cemented group. Its main role is not to supply system power but to correct field curvature, astigmatism, and lateral color immediately before the stop.

The L8/L9 pair is also the element group most directly responsible for moderating the positive Petzval contribution of the rear converging assembly. Surface-by-surface Petzval tracing gives a small positive system Petzval sum rather than the larger positive value expected from an uncompensated positive rear group.

### L10 + L11 — Cemented Doublet, Negative Net Power

L10: nd = 1.95375, νd = 32.3. Glass: catalog-equivalent S-LAH98 (OHARA). Standalone f = -17.9 mm.

L11: nd = 1.49700, νd = 81.5. Glass: catalog-equivalent S-FPL51 (OHARA). Standalone f = +36.8 mm.

Cemented doublet net focal length: -43.5 mm.

This doublet sits directly behind the aperture stop. L10 has a very high source index and carries strong negative power; L11 is the second low-dispersion S-FPL51 element. The pair has net negative power and acts as the rear-side counterpart to the ED/flint correction strategy used ahead of the stop.

Because the doublet lies after the stop, it strongly affects chief-ray behavior and rear-group field correction. It also contributes negative Petzval power, which helps keep the large shifted image circle usable.

### L12 — Positive Meniscus, Concave to Object

nd = 2.00100, νd = 29.1. Glass: catalog-equivalent S-LAH99 (OHARA). f = +47.9 mm.

L12 is the final high-index positive meniscus. Both radii are negative, so the element is concave toward the object side and has a strong image-side convex surface. It bends the rear ray bundles toward the image plane while preserving the long 55.96 mm infinity back focal distance.

S-LAH99 remains an approximate compatible spectral proxy. The very high index allows the final meniscus to provide the needed rear positive power without a physically large rear element.

## Glass Identification and Selection

The source defines nd and νd at the d-line (PDFp17); its plot definitions give d587.56nm and g435.8nm (p14). No individual C/F/g indices, partial-dispersion ratios or APD values are printed for these twelve media. Numerical F/C wavelengths are not specified in that definition. No source filters, rear plates or bonded resin layers occur in Numerical Data1.

All twelve existing compatible OHARA curves remain qualified spectral proxies. Their names do not prove historical vendor, supplier, melt, chemistry or manufacturing process. No per-lens spectral overrides were present or added. L8 source1.61800/63.4 is approximate to S-PHM52's catalog63.33; L6/L11 source1.49700/81.5 likewise do not establish an exact catalog identity.

| Elements | Source nd / νd | Qualified proxy |
| -------- | -------------- | --------------- |
| L1/L2    | 1.59270 /35.3  | S-FTM16         |
| L3       | 1.74950 /35.3  | S-LAM7          |
| L4/L9    | 1.65412 /39.7  | S-NBH5          |
| L5       | 1.85478 /24.8  | S-NBH56         |
| L6/L11   | 1.49700 /81.5  | S-FPL51         |
| L7       | 1.80000 /29.8  | S-NBH55         |
| L8       | 1.61800 /63.4  | S-PHM52         |
| L10      | 1.95375 /32.3  | S-LAH98         |
| L12      | 2.00100 /29.1  | S-LAH99         |

High/low Abbe separation supports the modeled color-correction roles; production UD association and all chemical-family descriptions remain unverified.

## Focus Mechanism

The first to third embodiments of the patent focus by moving all lens units toward the object side. L1 and L3 move together on the same locus, while L2 also moves objectward but by a smaller amount. Thus the optical system has two moving loci: the combined L1/L3 locus and the independent L2 locus.

In the printed prescription, d6 and d10 are the only internal variable air gaps for Numerical Data 1. Their sum remains constant at 8.62 mm. This means the distance from the rear of L1 to the front of L3 remains fixed while L2 slides within that interval. The earlier draft incorrectly described this as a constant L2-to-L3 separation; the L2-to-L3 separation is d10 and it changes substantially.

| Parameter                     |  Infinity |  β = -0.5 |    Change |
| ----------------------------- | --------: | --------: | --------: |
| d6                            |   1.01 mm |   6.84 mm |  +5.83 mm |
| d10                           |   7.61 mm |   1.78 mm |  -5.83 mm |
| d6 + d10                      |   8.62 mm |   8.62 mm |   0.00 mm |
| BF                            |  55.96 mm |  81.07 mm | +25.11 mm |
| Total lens length, patent row | 153.42 mm | 178.54 mm | +25.12 mm |

The printed close-focus individual spacings sum to 178.53 mm, while the patent's total-lens-length row lists 178.54 mm. This 0.01 mm difference is a rounding residual. Table 1 gives the first-unit movement as M = -25.117 mm, so with the image plane treated as fixed, the first surface advances objectward by about 25.12 mm at the closest state. L2 advances objectward by about 19.29 mm, which is 5.83 mm less than the L1/L3 advance. This is the floating action that changes the power spacing at close focus while maintaining the L1-to-L3 interval.

Canon specifies manual focus and a closest focusing distance of 0.273 m for the production lens. The patent close state is β = -0.5, matching Canon's 0.5× maximum magnification specification.

## Aspherical Surfaces

Numerical Data 1 contains no aspherical surface labels, no aspherical sag equation, and no coefficient table. No aspherical coefficients are authored.

Canon's public product copy describes aspherical and UD lens elements. That manufacturer statement is treated as authoritative for the production lens, but it does not supply the aspherical surface number or coefficients. No aspherical coefficients have been inferred or invented. The resulting file is a direct transcription of the printed patent numerical example, with the product-association limitation documented rather than hidden.

## Conditional Expressions

The patent defines the principal layout variables Lf, Lr, L, f, and M and claims the base ranges 2.6 < Lf/Lr < 6.0, 2.5 < L/f < 5.0, and 0.4 < |M/f| < 1.1. For the three-unit embodiments it also defines f1/f, f2/f, f3b/f, G1ea/Lf, Sk/f, Lr/L, and Mea/IMG.

The table below separates the patent's own Table 1 values from recalculation using the rounded printed Numerical Data 1 prescription. The recalculation confirms compliance, but it does not reproduce every Table 1 layout value exactly. In particular, the printed total lens length 153.42 mm divided by the printed focal length 51.40 mm gives L/f = 2.985, not the Table 1 value 3.004. This appears to be a published-table/internal-data discrepancy rather than a transcription issue; it does not affect whether the example satisfies the claimed range.

| #    | Expression                                 | Claimed range | Patent Table 1 |    Recomputed from printed data |
| ---- | ------------------------------------------ | ------------: | -------------: | ------------------------------: |
| (1)  | Lf / Lr                                    |       2.6–6.0 |          4.491 |                           4.436 |
| (2)  | L / f                                      |       2.5–5.0 |          3.004 |                           2.985 |
| (3)  | M / f (patent range is for absolute value) |       0.4–1.1 |         -0.489 |                          -0.489 |
| (4)  | f1 / f                                     |    -15.0–-2.0 |         -6.641 |                          -6.642 |
| (5)  | f2 / f                                     |       0.5–6.0 |          5.285 |                           5.285 |
| (6)  | f3b / f                                    |      1.2–12.0 |          5.065 |                           5.064 |
| (7)  | G1ea / Lf                                  |       0.1–0.8 |          0.616 |                           0.624 |
| (8)  | Sk / f                                     |       0.8–4.0 |          1.089 |                           1.089 |
| (9)  | Lr / L                                     |     0.08–0.16 |          0.116 |                           0.117 |
| (10) | Mea / IMG                                  |       0.2–2.0 |          0.403 | mechanical; not in prescription |

Expression (10) is a mechanical mount/image-sensor relation. It is not independently recoverable from the optical prescription and should remain a patent-table value rather than a recomputed optical value.

## Verification Summary

A separate Python paraxial y-nu ray trace was run from the printed patent prescription. The same script was used to compute the element focal lengths, unit focal lengths, cemented-group focal lengths, Petzval sum, and focus-spacing changes. The resulting values are below.

| Quantity                            | Recomputed | Patent / printed value | Comment                     |
| ----------------------------------- | ---------: | ---------------------: | --------------------------- |
| System EFL at infinity              |  51.397 mm |               51.40 mm | Matches                     |
| Back focal distance at infinity     |  55.956 mm |               55.96 mm | Matches                     |
| Total lens length at infinity       |  153.42 mm |              153.42 mm | Matches printed sum         |
| Close-focus printed-spacing total   |  178.53 mm |              178.54 mm | 0.01 mm rounding residual   |
| EFL at β = -0.5 focus configuration |  50.291 mm |               50.30 mm | Matches close configuration |
| L1 unit focal length                | -341.42 mm |             -341.33 mm | Matches rounding tolerance  |
| L2 unit focal length                | +271.65 mm |             +271.65 mm | Matches                     |
| L3 unit focal length                |  +84.81 mm |              +84.82 mm | Matches                     |
| L3a focal length                    |  +82.47 mm |              +82.47 mm | Matches                     |
| L3b focal length                    | +260.30 mm |             +260.35 mm | Matches                     |
| D1 cemented doublet focal length    |  +65.36 mm |                      — | Computed                    |
| D2 cemented doublet focal length    | -195.36 mm |                      — | Computed                    |
| D3 cemented doublet focal length    |  -43.54 mm |                      — | Computed                    |
| Petzval sum                         |  +0.001574 |                      — | Surface-by-surface φ/(n n') |
| Petzval radius                      |    +635 mm |                      — | Reciprocal of Petzval sum   |

The Petzval calculation uses the surface-by-surface formula φ/(n n'), not a thin-lens element approximation. The small positive Petzval sum indicates mild residual positive field curvature after compensation by the negative front unit and the two negative-net cemented doublets.

Semi-diameter validation was also rerun. Using half of the patent effective-diameter entries gives acceptable element edge thicknesses and cross-gap sag clearances. The tightest clear air gap is between surfaces 2 and 3, where the combined sag intrusion is about 86.7% of the 13.45 mm gap, below the project's 90% limit. The stop aperture used in the data file is not taken from the effective-diameter column; it is solved independently from the patent F-number.

## 2026-10-30 Original Review and Runtime Limits

The local original `patents/US_10571651_B2.pdf` was inspected directly. All22 source radii, physical thicknesses,12 nd/νd pairs, clear effective-diameter/2 values, stop station and focus gaps remain literal. Infinity aperture target2.8 was corrected to printed2.88, including its menu entry; the inferred physical iris changes from10.001852958 to9.724023709mm. This corrects a source-target mismatch rather than fitting a drawing. Catalog design focal metadata is the printed51.40mm; computed EFL51.397484mm remains a separate result.

Figure1 is a native2560×3300 bilevel scan at300ppi. The first/last glass vertices span about1006pixels over97.46mm (10.32px/mm); native vertical scale is about3% larger. Rim endpoints have ±2–3pixel uncertainty (±0.19–0.29mm) plus schematic scaling. Six resolved free-air shoulders use `rimExtensionSd`: S2 20.45→24.8, S8 16.15→19.4, S10 15.5→16.0, S16 10.4→12.75, S18 8.8→10.5 and S21 12.75→13.55mm (clear→outer). Adopted outer heights use the corresponding existing blank cap, not precise figure measurements. Every clear aperture stays source-stated. Cemented interfaces S12/S15/S19 retain their clear caps, without invented opaque lands or equal-height interface blocks. The resulting bonded outline is less rectangular than the schematic; that constraint is retained. No concave-end cut is authored. Extending the full optical curves or raising clear caps just to match the square blanks was rejected.

Sixty-five focus geometries and all8 aperture presets were sampled. At the corrected wide-open iris, all12,545/12,545 collimated axial samples clear; those bundles remain collimated in focus-adjusted geometry. Actual Gaussian finite-object supplements are distinct: the near source spacings reproduce β=−0.49996424, object-to-image272.832097mm; midpoint Gaussian distance365.840815mm is illustrative. Over65 states the49-point actual-conjugate axial grid clears2,961/3,185 samples, with no aim failures. Near4/49 clip S18; ghost rays would reach S18 9.036130mm and S19 9.683628mm, beyond printed clear8.8/9.3. The larger native blank does not establish an error in those printed effective apertures, so they remain. Near field bundles are45/33/25 of49 at axial/0.6/1 paraxial object-field fractions. These finite field fractions are not inverse-solved sensor corners.

Real working F-number returns2.897343 at infinity; the full-iris finite marginal ray is vignetted at S18. Across520 focus/aperture combinations464 return traced values and56 report vignetting; none is recast as a clear result. The macro table prints F4.0 whereas Figure2B labels F2.9. The fixed iris and source spacings remain; neither annotation proves a new aperture-control law. Printed near total178.54mm versus individual-gap sum178.53mm and Table1 layout-ratio discrepancies remain unresolved source records.

The centered generic full-frame inverse-height field check reaches100% (21.65mm). A separate bounding-sphere source33.2° chief clears and reaches33.353096mm, versus source image height33.63mm; this is not full pupil clearance. Actual generated SVGs were compared with native Figure1: all780 centered paths across65 states and900 posed paths across75 movement states remain finite, closed and connected, with zero hidden trimming.

Movement sampling uses focus0/0.5/1 × shifts−12/−6/0/6/12mm × tilts−8.5/−4.25/0/4.25/8.5°, with the center and four actual sensor corners and193 pupil samples each. Of375 requested fields351 are usable and24 outside the declared projection domain; there are no unresolved chiefs or unaimed pupil samples in prepared fields. Physical rays report49,999 clear,17,344 clipped and400 failed intersections; sensor statuses separately report22,615 usable,17,344 clipped and27,784 missed-sensor. Missed-sensor rays are not physical-clearance failures. This API uses collimated scene directions through focus-adjusted moved geometry, not actual finite moved-object illumination. The authored camera-fixed rear-vertex fallback pivot is unmeasured; production hinge geometry, finite moved pupils and extreme simultaneous movement are not certified.

Surface, image-circle and infinity aperture audits pass; the full-frame field gate passes. No inferred-cut beam exemption is needed. These runtime samples do not establish production identity or full shifted/tilted finite illumination.

## Design Heritage and Context

The TS-E 50mm f/2.8L Macro sits in Canon's late EF tilt-shift macro group with the TS-E 90mm f/2.8L Macro and TS-E 135mm f/4L Macro. It replaces the older normal-range TS-E 45mm f/2.8 concept with a larger image circle, 0.5× close focus, UD-class elements, and larger published tilt/shift movements.

The transcribed patent prescription is all-spherical. Canon's product copy, however, describes aspherical and UD lens elements. The analysis and data file therefore avoid claiming that the production optical system is all-spherical. The safe statement is narrower: Numerical Data 1, as printed in US 10,571,651 B2, contains no aspherical coefficients and no aspherical surface designation. The patent model instead relies on multiple cemented color-correction groups, a high-index rear meniscus, and a floating second unit.

## Sources

- US 10,571,651 B2, Hideki Sakai / Canon Kabushiki Kaisha, granted February 25, 2020. Numerical Data 1 and Table 1.
- Canon U.S.A., TS-E 50mm f/2.8L MACRO product specifications: focal length/aperture, two UD elements, 12 elements / 9 groups, manual focus, closest focusing distance, 77 mm filter, dimensions, and weight.
- Canon Europe / Canon Ireland, TS-E 50mm f/2.8L MACRO specifications and overview: ±8.5° tilt, ±12 mm shift, 1:2 macro ratio, 12/9 construction, 0.273 m closest focusing distance, 0.50× magnification, 77 mm filter, 945 g weight, and the public aspherical/UD element statement.
- OHARA INC., Optical Glass Chart / All Glass Types catalog references: S-FTM16, S-LAM7, S-NBH5, S-NBH56, S-FPL51, S-NBH55, S-PHM52, S-LAH98, and S-LAH99 glass-code matches.
