# Sigma DP1x 16.6 mm f/4

## Patent Reference and Design Identification

**Patent:** JP 2008-040033 A (特開2008-40033)
**Application Number:** JP 2006-212680 (特願2006-212680)
**Filed:** 4 August 2006 (平成18年8月4日)
**Published:** 21 February 2008 (平成20年2月21日)
**Inventor:** Yoshino Shizuka (吉野 静香)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Wide-Angle Lens (広角レンズ)
**Embodiment analyzed:** Example 1 (実施例1)

This prescription transcribes Example 1 of JP 2008-040033 A, a compact wide-angle lens for a large digital image sensor. The patent presents two numerical examples. Example 1 is the one that matches the Sigma DP1-series fixed-lens camera specification, including the DP1x.

The identification rests on the following convergent points.

1. **Focal length and aperture.** Example 1 gives f = 16.67 mm, Fno = 4.02, and 2ω = 73.7°. Sigma's DP1x specification gives a 16.6 mm F4 lens with a 28 mm equivalent angle of view. Example 2 gives f = 15.6414 mm and Fno = 3.78, which is a poorer match.
2. **Construction.** Example 1 resolves to six glass elements in five air-spaced groups. Sigma publishes the DP1x construction as five groups and six elements.
3. **Minimum focus.** Example 1's finite-distance focus state gives Obj = 243.7497 mm measured from the first surface. The independently verified first-surface-to-image track is 56.2503 mm, giving 300.0 mm subject-to-sensor distance. Sigma lists 30 cm to infinity in Full mode.
4. **Format and field.** Example 1's field angle gives a maximum image height of approximately 12.50 mm, or about a 25.0 mm image diagonal. Sigma lists the DP1x Foveon X3 sensor as 20.7 x 13.8 mm, or approximately 24.9 mm diagonal.
5. **Design intent.** The patent frames the design around suppressing the incidence angle on CCD/CMOS image sensors to reduce shading, which fits a fixed-lens digital compact rather than a film or mirror-box design.

The analysis therefore treats Example 1 as the DP1x design. The DP1 and DP1s share the same published lens construction, focal length, aperture, sensor size, and Full-mode close-focus distance, so the same optical interpretation applies to the DP1-family lens specification unless a production service source proves a later optical change.

The manufacturer-published values are used for marketed specifications: 16.6 mm and f/4. The patent values are retained for optical computation: f = 16.67 mm and Fno = 4.02.

## Optical Architecture

The lens is a six-element, five-group rectilinear wide-angle objective with a negative-negative-positive-negative-positive group-power sequence. From object to image side it consists of two negative front singlets, a strongly positive collector immediately in front of the stop, a cemented negative doublet behind the stop, and a weak positive rear focusing group.

The two leading negative singlets form an inverted-telephoto-style front section, but the lens is not retrofocus in the SLR mirror-clearance sense. Its infinity back focal distance is 13.7403 mm against a computed EFL of 16.6722 mm, so BFD/EFL = 0.824. The front negative groups serve the wide field and distortion balance; they do not create a long back focus.

The aperture stop is surface 7 in the patent table, placed between G3 and the G4 cemented doublet. G3 supplies the principal positive power ahead of the diaphragm. Behind the diaphragm, G4 handles much of the chromatic and field correction, while G5 is a weak positive rear group that participates in chief-ray bending and is also the sole focusing group.

The only aspherical surface is surface 10, the image-side face of the positive element in the cemented G4 doublet. The total first-surface-to-image track remains 56.2503 mm at both infinity and close focus; focusing is achieved by reallocating the air space before and after G5.

## Element-by-Element Analysis

### G1 - Negative Meniscus, convex to object (surfaces 1-2)

nd = 1.58144, νd = 40.9. Glass: Hoya E-FL5 / Hikari J-LF5 class light flint. f = -44.6 mm.

G1 is the first negative meniscus. Both radii are positive, so the element is convex toward the object and more strongly curved on the image-side face. Its standalone focal length is -44.6 mm.

Together with G2, it opens the field before the main positive power. The patent explicitly controls the bending of this group through condition (1), r1f/r1b, because the curvature ratio affects astigmatism, back-focus reserve, negative distortion correction, and front-element sag.

The LF5-class light-flint glass is not named in the patent; it is a catalogue-level identification from the published nd/νd pair. Hoya E-FL5 and Hikari J-LF5 match the patent values to transcription precision, with Schott LF5-class equivalents in the same region of the glass map.

### G2 - Negative Meniscus, convex to object (surfaces 3-4)

nd = 1.48749, νd = 70.4. Glass: Hoya FC5 / Ohara S-FSL5 / Hikari J-FK5 class fluor crown. f = -47.7 mm.

G2 is the second negative meniscus and completes the diverging front pair. Like G1, both radii are positive, making it convex toward the object and concave toward the image. Its focal length is -47.7 mm.

The high Abbe number makes this the lowest-dispersion element in the design. Placing a low-dispersion fluor-crown-class glass in the negative front section helps limit lateral color where the off-axis bundle is widest. The G2 bending ratio is governed by patent condition (2), r2f/r2b.

The rear radius of G2 is 11.65 mm, the same as the rear radius of G1. This shared radius is mechanically convenient because it can simplify tooling and test-plate use, although the patent does not state that as a design objective.

### G3 - Biconvex Positive (surfaces 5-6)

nd = 1.74100, νd = 52.6. Glass: Hoya TAC2 / Ohara S-LAL61Q class lanthanum crown. f = +14.9 mm.

G3 is the main positive collector. It is biconvex, with r5 = +13.52 mm and r6 = -54.14 mm, and is the strongest positive singlet in the lens.

The high refractive index allows this group to provide substantial convergence without excessive surface curvature. It also moderates the Petzval contribution of the strong positive power. The element sits directly before the aperture stop, so its aberration contribution is central to the balance between the negative front and the rear corrective section.

### G4 - Cemented Doublet: Biconcave Negative L1 + Biconvex Positive L2 (surfaces 8-10)

The fourth group is a cemented doublet behind the stop. The patent describes G4 as a negative group made from a biconcave lens L1 cemented to a biconvex lens L2, and it states that aspherizing the convex lens side is preferable.

**L1 - Biconcave Negative (surfaces 8-9).** nd = 1.76182, νd = 26.6. Glass: Hoya FD140 / Ohara S-TIH14 / Hikari J-SF14 class dense flint. f = -9.3 mm.

L1 is the high-dispersion negative member of the doublet. Its low Abbe number makes it the principal dispersing element in the rear achromatizing group.

**L2 - Biconvex Positive (surfaces 9-10).** nd = 1.77227, νd = 47.1. Glass: Hoya M-TAF401-class lanthanum flint, soft match to Example 1. f = +11.9 mm.

L2 is the lower-dispersion positive partner and carries the aspherical rear surface. Example 1's nd is about 0.00150 lower than catalogue Hoya M-TAF401, while its Abbe number is very close. The identification is strengthened by Example 2 of the same patent: the corresponding L2 element there is nd = 1.77377 and νd = 47.2, matching M-TAF401 to catalogue precision.

The cemented doublet has weak net negative power, about -106 mm in standalone air. Its role is not simple power generation; it is primarily a rear corrective group. Patent condition (4) regulates the combined center thickness of this group because insufficient thickness would reduce the individual lens powers and weaken lateral chromatic correction.

### G5 - Weak Positive Rear Focusing Group (surfaces 11-12)

nd = 1.58913, νd = 61.2. Glass: Hoya M-BACD5N / Ohara S-BAL35 / Schott N-SK5 class crown. f = +103.1 mm.

G5 is a weak positive biconvex element with an almost flat image-side surface, r12 = -1000.0 mm. Its standalone focal length is +103.1 mm.

This group performs two linked tasks. First, it helps control the exit chief-ray geometry that the patent treats as important for digital-sensor shading. Second, it is the focusing group. Only the air space before G5 and the back focal distance behind G5 change between the infinity and close-focus states.

## Glass Identification and Selection

The patent gives refractive index and Abbe number but does not name the glass types. The glass names below are catalogue identifications or class-level equivalents from the reviewed Ohara, Hoya, Hikari, and Schott data. They should not be read as patent-stated vendor names.

| Element | nd | νd | Catalogue identification used in this analysis | Match status | Optical role |
|---|---:|---:|---|---|---|
| G1 | 1.58144 | 40.9 | Hoya E-FL5 / Hikari J-LF5 class light flint | Exact catalogue matches | Negative front member; color balance |
| G2 | 1.48749 | 70.4 | Hoya FC5 / Ohara S-FSL5 / Hikari J-FK5 fluor crown | Exact catalogue matches | Low-dispersion negative front member |
| G3 | 1.74100 | 52.6 | Hoya TAC2 / Ohara S-LAL61Q / Hikari J-LAK011 lanthanum crown | Exact or near-exact catalogue matches | Strong positive collector |
| G4-L1 | 1.76182 | 26.6 | Hoya FD140 / Ohara S-TIH14 / Hikari J-SF14 dense flint | Exact catalogue matches | High-dispersion doublet member |
| G4-L2 | 1.77227 | 47.1 | Hoya M-TAF401 class lanthanum flint | Soft match to Example 1; Example 2 exact | Positive aspheric doublet member |
| G5 | 1.58913 | 61.2 | Hoya M-BACD5N / Ohara S-BAL35 / Schott N-SK5 crown | Exact catalogue matches | Weak positive rear focusing group |

The palette is conventional rather than apochromatic. G2 is a useful low-dispersion crown in the negative front section, but the patent does not publish anomalous partial-dispersion data and the reviewed catalogue matches do not justify an apochromatic claim. The design is best described as a compact, well-corrected achromat using a low-dispersion front crown and a rear cemented chromatic corrector.

## Focus Mechanism

The lens uses rear-group internal focusing. G5 moves toward the object at close focus; the front groups and aperture stop remain fixed.

| State | Object distance from surface 1 | d10 | Bf | d10 + Bf |
|---|---:|---:|---:|---:|
| Infinity | ∞ | 5.0000 mm | 13.7403 mm | 18.7403 mm |
| Close | 243.7497 mm | 1.4104 mm | 17.3299 mm | 18.7403 mm |

The air gap before G5 decreases by 3.5896 mm and the back focal distance increases by the same amount. The total mechanical track from surface 1 to the image plane is therefore conserved at 56.2503 mm.

The close-focus conjugate is 243.7497 mm from the object to the first surface plus 56.2503 mm from the first surface to the image plane, giving 300.0 mm from subject to sensor. This reproduces Sigma's 30 cm Full-mode specification.

The independently computed imaging magnification of G5 at infinity is β5 = 0.8531, matching the patent's condition value of 0.853.

## Aspherical Surfaces

The design has one aspherical surface: surface 10, the image-side face of the positive L2 member of the cemented G4 doublet. In the data file this surface is labeled `10A`.

The patent's sag equation is:

$$
X = \frac{h^2/r}{1 + \sqrt{1 - A(h/r)^2}} + A_2 h^2 + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}
$$

The patent coefficient A occupies the standard $(1 + K)$ position under the radical. Therefore the renderer's standard conic constant is K = A - 1. For Example 1, A = 2.5919, so K = +1.5919.

| Surface | R | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|---:|
| 10A | -18.9700 mm | +1.5919 | 1.6110e-4 | 1.0935e-6 | 1.7690e-8 | 1.0340e-10 |

A2 is zero, and no A12 or higher terms are published. The asphere is a rear corrective freedom on the positive member of the G4 doublet. It is placed where it can act strongly on off-axis bundles after the stop without adding another element.

## Chromatic Correction Strategy

Chromatic correction is distributed. The front section pairs a moderate-dispersion light flint at G1 with a high-Abbe fluor-crown-class negative G2. This limits the color spread introduced by the strongly refracting front of the wide-angle system.

The cemented fourth group is the explicit achromatizing pair. L1 is a high-dispersion dense flint and L2 is a lower-dispersion lanthanum flint. Patent condition (4) ties the G4 center thickness to the ability of the two cemented members to retain sufficient power for lateral chromatic correction.

No secondary-spectrum or apochromatic claim is supported by the patent. The analysis therefore treats the system as an achromatically corrected wide-angle objective rather than an APO design.

## Conditional Expressions

The patent states five conditional expressions. Conditions (1), (2), (4), and (5) were independently reproduced from the prescription. Condition (3) depends on a finite-distance maximum chief-ray height at the rear surface of G5 and is reported at the patent value rather than replaced by a paraxial proxy.

| # | Expression | Patent range | Patent Example 1 | Independent value |
|---|---|---:|---:|---:|
| (1) | abs(r1f / r1b) | 1.5 to 2.0 | 1.89 | 1.8927 |
| (2) | abs(r2f / r2b) | 1.8 to 2.3 | 2.06 | 2.0601 |
| (3) | abs((Is - h5b) / Bf) | <= 0.39 | 0.38 at finite distance | patent value |
| (4) | abs(Is / d4) | 2.0 to 2.5 | 2.23 | 2.2310 |
| (5) | abs(β5) | 0.7 to 0.9 | 0.853 | 0.8531 |

A terminology note is necessary for condition (4). The patent describes Is as the image-plane diagonal, but the tabulated values are self-consistent only if Is is interpreted as maximum image height, approximately 12.49 mm, not the full approximately 24.99 mm diagonal. Using 12.4935 mm and d4 = 1.30 + 4.30 = 5.60 mm gives 2.2310, reproducing the patent value.

## Verification Summary

All computations below were rerun from the patent prescription using an independent paraxial y-nu trace and ABCD checks. The Petzval value uses the surface-by-surface expression Σφ/(n n'), not an element thin-lens approximation.

| Quantity | Patent / source value | Independent value | Result |
|---|---:|---:|---|
| EFL at infinity | 16.67 mm | 16.6722 mm | Reproduced |
| BFD at infinity | 13.7403 mm | 13.7403 mm | Reproduced |
| Close-focus BFD | 17.3299 mm | 17.3299 mm | Reproduced |
| First-surface-to-image track | not tabulated directly | 56.2503 mm | Constant through focus |
| Close-focus subject-to-sensor distance | Sigma: 30 cm | 300.0 mm | Reproduced |
| G5 imaging magnification | 0.853 | 0.8531 | Reproduced |
| G1/G2/G3/G4/G5 standalone focal lengths | power sequence -/-/+/-/+ | -44.6 / -47.7 / +14.9 / -106 / +103 mm | Reproduced |
| Petzval sum | not tabulated | +6.206e-3 mm^-1 | Petzval radius about -161 mm |
| Stop semi-diameter for Fno = 4.02 | not tabulated | 3.2186 mm | Derived from entrance-pupil trace |

The data file's semi-diameters are inferred because the patent does not publish clear-aperture radii. They were sized from the on-axis marginal ray and off-axis chief/marginal envelopes at 0.75x the patent half-field, then reduced where necessary to satisfy renderer and physical constraints. The resulting file should be treated as a faithful prescription with inferred drawing apertures, not as a factory clear-aperture specification.

## Sources and References

- JP 2008-040033 A, *Wide-Angle Lens*, Sigma Corporation. Primary source for the prescription, focus spacings, conditions, aspherical equation, and aspherical coefficients.
- Sigma Corporation, official DP1x product specification, https://www.sigma-global.com/en/cameras/dp1x/. Source for marketed focal length, aperture, construction, shooting range, and sensor size.
- Ohara Corporation, S-glass catalogue CSV, 2025-03-12 edition. Used for S-FSL5, S-LAL61, S-TIH14, and S-BAL35 class checks.
- Hoya Group Optics Division, optical glass catalogue data, 2015 edition. Used for E-FL5, FC5, TAC2, FD140, M-TAF401, BACD5, and related Hoya class checks.
- Nikon / Hikari Glass, *Hikari General Catalog Data*, 2023-09-01 edition. Used for Japanese catalogue cross-checks including J-LF5, J-FK5, J-LAK011, and J-SF14 classes.
- Schott optical glass catalogue data. Used as a cross-vendor check for LF5, N-FK5, and N-SF14 class equivalents.
