# Nikon AI Nikkor 35mm f/2 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,507,558  
**Application Number:** Ser. No. 588,212  
**Filed:** October 20, 1966  
**Priority:** Japan, October 22, 1965 (40/64,423)  
**Granted:** April 21, 1970  
**Inventor:** Yoshiyuki Shimizu  
**Assignee:** Nippon Kogaku K.K. (Tokyo, Japan)  
**Title:** Camera Lens of a Large Aperture Ratio Having Long Back Focus  
**Classification:** Int. Cl. G02B 9/08, 9/62, 11/32; U.S. Cl. 350-210  
**Claims:** 2  
**Embodiment analyzed:** the single worked numerical example, stated as $f = 1.0$, $2\omega = 62^\circ$, F:2, and $B.f = 1.1337f$.

US 3,507,558 is the patent prescription that matches the manual-focus Nikon/Nikkor 35 mm f/2 retrofocus formula. The data file scales the patent's normalized $f = 1.0$ prescription uniformly to a 35 mm production focal length. The resulting computed effective focal length is 34.9994 mm; the small difference from exactly 35 mm is the normal consequence of the patent's rounded table values.

The identification rests on convergent evidence.

1. **Element and group count.** The patent prescription is an eight-element, six-group, all-spherical retrofocus lens: L1, L2, cemented L3+L4, stop, cemented L5+L6, L7, and L8. Nikon's historical account of the AI-S 35 mm f/2S states that the basic shape of this eight-elements-in-six-groups lens was unchanged from the earlier Nikkor Auto 35 mm f/2 through the AI-S generation.
2. **Timing and authorship.** The patent priority date is 1965, the same year Nikon released the Nikkor Auto 35 mm f/2. Nikon attributes the production lens to Yoshiyuki Shimizu, the same inventor named on the patent.
3. **Aperture and field.** The patent states F:2 and $2\omega = 62^\circ$, matching the production 35 mm f/2 diagonal angle of view on the 24 × 36 mm frame.
4. **Retrofocus purpose.** The patent is explicitly directed to a large-aperture wide-angle lens with long back focus for a single-lens reflex camera. This is the optical problem faced by the Nikon F-mount 35 mm f/2.
5. **Mechanical scale.** The patent notes that the foremost lens diameter can be kept near $1.3f$ and the attachment/filter diameter near $1.5f$. When scaled to 35 mm, these become about 45.5 mm and 52.5 mm, consistent with the 52 mm filter standard used by the manual-focus Nikon 35 mm f/2 family.

The autofocus AF Nikkor 35 mm f/2 and AF Nikkor 35 mm f/2D are not treated as transcriptions of this patent. They use a later six-element, five-group optical formula. The present files describe the manual-focus 35 mm f/2 optical formula represented by the AI naming requested for this entry.

## Optical Architecture

The design is a back-telescopic, or inverted-telephoto, wide-angle objective. It is divided into a negative front group B1 and a positive rear group B2. The front group increases the back focal distance and widens the field; the rear group supplies most of the positive power and corrects the aberrations made more difficult by the negative front group.

The patent's functional division is borne out by the paraxial trace. B1, consisting of L1 and L2, has a computed group focal length of −77.52 mm after scaling. B2, consisting of L3 through L8, has a computed group focal length of +34.63 mm. The system remains net negative through surface r10, with a computed focal length of −207.48 mm for L1 through L6; this is the mechanism that keeps the back focus longer than the focal length. The final pair, L7 and L8, converts the virtual intermediate image into a real image at the film plane.

The aperture stop lies in the air space between L4 and L5. The patent gives the full spacing between r7 and r8 but does not tabulate the iris split. The data file therefore places the stop at the midpoint of that space for rendering and pupil modeling. This does not change the patent prescription's refracting surfaces, but it should be read as an inferred stop placement rather than a published axial stop coordinate.

All fourteen refracting surfaces are spherical. The patent contains no aspherical coefficients, no conic constants, and no variable-separation focus table.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens-in-air values after scaling the patent prescription to 35 mm. They are not in-situ group powers.

### L1 — Positive Convexo-Plano

nd = 1.71300, νd = 53.9. Glass: 713/539 lanthanum crown, S-LAL8 / N-LAK8 class. f = +157.7 mm.

L1 is a weak positive element ahead of the main negative meniscus. The patent assigns it the distortion-correction role. In a retrofocus wide-angle, the negative front group tends to produce barrel distortion; placing a positive element before the stronger diverging element offsets part of that tendency while keeping the front diameter within the 52 mm attachment standard.

### L2 — Negative Meniscus, convex to object

nd = 1.51680, νd = 64.2. Glass: 517/642 borosilicate crown, N-BK7 class. f = −50.5 mm.

L2 is the principal diverging element of B1. Both radii are positive, with the rear radius much shorter than the front, forming a negative meniscus whose convex face is toward the object. It supplies the front group's negative power and is the main contributor to the long back focus.

The use of an ordinary high-Abbe crown here is conventional and analytically sensible. This element has high chromatic leverage, and BK7-class glass gives stable dispersion without introducing an anomalous partial-dispersion correction strategy that the patent does not claim.

### L3 — Biconvex Positive, front member of first cemented doublet

nd = 1.66755, νd = 41.9. Glass: 668/419 dense barium flint, Hikari J-BASF6 / BaSF6 class. f = +30.7 mm.

L3 is the high-power positive member of the cemented doublet immediately ahead of the stop. The patent requires the front doublet to have positive meniscus form and requires L3 to have the higher refractive index relative to L4. The prescription satisfies that condition: 1.66755 > 1.51454.

The positive element is a flint rather than the crown member of a conventional achromat. This shows that the cemented interface is being used primarily for coma control and field-shape management rather than simple axial color correction.

### L4 — Biconcave Negative, rear member of first cemented doublet

nd = 1.51454, νd = 54.62. Glass: legacy 515/546 crown/light-flint class; exact Nikon/Hikari melt not identified. f = −38.2 mm.

L4 completes the positive meniscus doublet in front of the stop. The cemented surface r6 is negative and has $|r_6| = 1.5278f$, satisfying the patent condition $\infty > |r_6| \ge 0.5f$.

This cemented interface is one of the design's principal correction levers. The patent states that it corrects coma from rays outside the main ray bundle. It also warns that if r6 becomes positive, the coma correction ceases; and if $-r_6 < 0.5f$, the meridional image curves negatively and becomes difficult to correct.

### Aperture Stop

The stop is in the air space between r7 and r8. The rendered data model splits the patent's d7 spacing equally around the stop. This is an axial modeling convenience because the patent gives the gap but not a numerical iris coordinate.

### L5 — Biconcave Negative, front member of second cemented doublet

nd = 1.78470, νd = 26.1. Glass: 785/261 dense flint, Schott SF56A class. f = −17.1 mm.

L5 is the strongest individual negative element in the lens and the highest-dispersion glass in the formula. It begins the cemented negative meniscus behind the stop. The patent requires the L5 index to exceed the L6 index, and the prescription satisfies this: 1.78470 > 1.74443.

The glass is better described as SF56A-class than as SF11-class. The patent value nd = 1.78470, νd = 26.1 agrees closely with SF56A (nd = 1.78470, νd = 26.08). SF11 is nearby in index but lower in Abbe number and is not the closer catalog match.

### L6 — Biconvex Positive, rear member of second cemented doublet

nd = 1.74443, νd = 49.4. Glass: legacy 744/494 lanthanum-flint class; exact modern catalog designation not forced. f = +21.2 mm.

L6 is the positive member of the cemented doublet behind the stop. The cemented surface r9 is positive and has $r_9 = 1.0775f$, satisfying the patent condition $3f > r_9 > 0.25f$.

The patent assigns this doublet two linked functions: preventing inner rays from becoming coma flare and correcting astigmatism by turning the sagittal image curvature back from the overcorrected positive direction. The doublet remains weakly negative as a unit, with a computed standalone doublet focal length of −263.82 mm, which helps preserve the negative composite power through r10.

### L7 — Positive Meniscus, convex to image

nd = 1.76684, νd = 46.2. Glass: legacy 767/462 dense lanthanum-flint class; exact modern catalog designation not forced. f = +73.7 mm.

L7 is a positive meniscus immediately ahead of the final biconvex element. Its two radii are both negative, so the stronger rear surface makes the element convex toward the image side. The claim language and numerical prescription support this orientation. A prose sentence in the patent body is ambiguous in OCR and appears inconsistent with the radii; the radii and claim geometry are controlling.

Together with L8, L7 converts the virtual image formed by L1 through L6 into a real image at the film plane. The patent also assigns the trailing pair a spherical-aberration correction role.

### L8 — Biconvex Positive

nd = 1.74400, νd = 44.9. Glass: 744/449 LAF2-class lanthanum flint, near Schott N-LAF2 / legacy LAF2. f = +64.6 mm.

L8 is the rear positive element. It shares the final image-forming and spherical-aberration correction function with L7. Its moderate positive power, high index, and flint dispersion help complete the rear group's positive power without requiring extreme curvatures at the last surface.

## Glass Identification and Selection

The patent gives only nd and νd values, not manufacturer glass names. Nikon's glass supply in the period included in-house Hikari melts, so modern catalog names should be treated as class matches or near equivalents unless an exact catalog designation is independently verified.

| Element | nd / νd | Identification used | Status |
|---|---:|---|---|
| L1 | 1.71300 / 53.9 | S-LAL8 / N-LAK8-class lanthanum crown | confident class match |
| L2 | 1.51680 / 64.2 | N-BK7-class borosilicate crown | confident class match |
| L3 | 1.66755 / 41.9 | Hikari J-BASF6 / BaSF6-class dense barium flint | close catalog match |
| L4 | 1.51454 / 54.62 | legacy 515/546 crown or light-flint class | exact melt uncertain |
| L5 | 1.78470 / 26.1 | Schott SF56A-class dense flint | close catalog match |
| L6 | 1.74443 / 49.4 | legacy 744/494 lanthanum flint | exact melt uncertain |
| L7 | 1.76684 / 46.2 | legacy 767/462 dense lanthanum flint | exact melt uncertain |
| L8 | 1.74400 / 44.9 | LAF2-class lanthanum flint | close class match |

The palette is not apochromatic. The patent publishes no partial-dispersion data, no C/F/g-line index set, and no ED, fluorite, fluorophosphate, or KZFS-type material. The chromatic design should therefore be described as a well-corrected conventional achromat for a fast retrofocus wide-angle, not as an APO design.

The more important selection pattern is high index. L1, L5, L6, L7, and L8 all use high-index glasses, with several lanthanum or dense-flint members. This reduces surface curvature for the required power and helps control Petzval field curvature in an all-spherical design. The verified surface-by-surface Petzval sum is +0.214846 in normalized 1/f units, corresponding to a Petzval radius magnitude of about 4.6545f, or 162.9 mm after scaling.

## Focus Mechanism

The manual-focus 35 mm f/2 formula uses unit focusing. Nikon's historical account states that this lens lacks a close-range correction mechanism and explains the behavior in terms of moving all elements in a lens group. There is no floating, internal, or rear-focus group in the patent prescription.

The patent itself gives only the infinity prescription. The data file therefore keeps all internal air spaces fixed and models close focus by increasing only the final back-focus variable. Solving the paraxial imaging condition for a 0.30 m object distance gives a back-focus value of 45.5978 mm, an extension of 5.9195 mm from the infinity value of 39.6783 mm. The corresponding paraxial magnification is approximately 0.169×, close to the catalog-class production value usually given as about 1:5.7.

## Aspherical Surfaces

The design has no aspherical surfaces. All fourteen refracting surfaces are spherical. The data file therefore uses an empty `asph` object.

## Conditional Expressions

The patent states four governing conditions around the two cemented doublets. The transcribed prescription satisfies all four.

| Condition | Prescription value | Result |
|---|---:|---|
| $n_6 > n_7$ | 1.66755 > 1.51454 | satisfied |
| $\infty > |r_6| \ge 0.5f$ with r6 negative | $|r_6| = 1.5278f$ | satisfied |
| $n_9 > n_{10}$ | 1.78470 > 1.74443 | satisfied |
| $3f > r_9 > 0.25f$ | $r_9 = 1.0775f$ | satisfied |

The conditions are not merely dimensional housekeeping. The patent ties r6 to off-axis coma correction and r9 to the control of inner coma flare and astigmatism. The recheck therefore treats these surfaces as functionally significant rather than incidental cemented boundaries.

## Aberration Correction Strategy

The patent's architecture is explicit. The negative front group increases field angle and back focus, but it also tends to disturb coma, curve the sagittal image in the positive direction, and produce negative distortion. The rear positive group is then organized to correct those penalties.

L1 is the front distortion corrector. The L3+L4 cemented interface r6 is the outer-coma correction lever. The L5+L6 doublet behind the stop addresses inner coma flare and astigmatism while retaining weak negative residual power. L7 and L8 supply final positive power and participate in spherical-aberration correction.

This allocation is consistent with Nikon's later historical explanation of the production lens: the compound doublets before and behind the aperture suppress high-order aberrations associated with increasing the speed of the lens while keeping the front element small enough for the 52 mm attachment standard.

## Verification Summary

The prescription was re-transcribed from the patent table and checked with an independent paraxial ray trace using the patent sign convention and a 35.000 mm scale factor.

| Quantity | Patent / source value | Computed value | Comment |
|---|---:|---:|---|
| Scale factor | f = 1.0 → 35 mm | ×35.000 | production focal-length scaling |
| Effective focal length | 35.000 mm nominal | 34.9994 mm | matches patent within table rounding |
| Back focal distance | 1.1337f = 39.6795 mm | 39.6783 mm | table-rounding agreement |
| Total optical length, r1 to r14 | — | 53.5693 mm | excludes final BFD |
| Front group B1 focal length | negative | −77.5229 mm | L1+L2 |
| Rear group B2 focal length | positive | +34.6315 mm | L3–L8 |
| Composite focal length through r10 | negative | −207.4814 mm | confirms patent mechanism |
| Petzval sum | — | +0.214846 / f | surface-by-surface formula |
| Close-focus BFD model | MFD 0.30 m | 45.5978 mm | unit-focus model |

The corrected analysis removes unsupported precision around exact glass vendor names where the patent gives only nd/νd and current catalogs do not provide a clean exact match. It also corrects the earlier wording that described “all eight surfaces” as spherical; the correct statement is that all eight elements and all fourteen refracting surfaces are spherical.

## Sources

- US Patent 3,507,558, “Camera Lens of a Large Aperture Ratio Having Long Back Focus,” Yoshiyuki Shimizu / Nippon Kogaku K.K., filed October 20, 1966, granted April 21, 1970.
- Nikon, “NIKKOR — The Thousand and One Nights, No. 84: AI Nikkor 35mm f/2S,” for production-lineage, element/group count, Shimizu attribution, 52 mm attachment rationale, and the absence of a close-range correction mechanism.
- OHARA S-LAL8 and SCHOTT N-LAK8 catalog data for the L1 713/539 lanthanum-crown class.
- SCHOTT N-BK7 catalog data for the L2 517/642 crown class.
- Hikari J-BASF6 catalog data for the L3 668/419 dense-barium-flint class.
- SCHOTT SF56A catalog data for the L5 785/261 dense-flint class.
- SCHOTT N-LAF2 / legacy LAF2 catalog data for the L8 744/449 lanthanum-flint class.
- Public Nikon/MIR-style catalog records for production metadata not contained in the patent table, including 0.3 m minimum focus and approximately 1:5.7 reproduction ratio; these are treated as production metadata rather than patent prescription data.
