# Sony FE 70-200mm F2.8 GM OSS — Patent Example 1 Analysis

## Patent Reference and Design Identification

**Patent:** US 2019/0018229 A1  
**Application Number:** 16/064,807  
**PCT Number:** PCT/JP2016/086674  
**Filed:** December 9, 2016 (PCT); June 21, 2018 (US national phase)  
**Published:** January 17, 2019  
**Priority Date:** February 1, 2016 (JP 2016-016980)  
**Inventors:** Naoki Miyagawa; Yonghua Chen  
**Applicant:** Sony Corporation  
**Title:** Zoom Lens and Optical Instrument  
**Embodiment analyzed:** Numerical Example 1, zoom lens 1, FIG. 1

Numerical Example 1 is a strong production match for the first-generation Sony FE 70-200mm F2.8 GM OSS, model SEL70200GM. The evidence is convergent rather than merely nominal.

1. The patent prescription contains 23 glass elements in 18 air-spaced optical groups, matching Sony's published construction of 23 elements in 18 groups.
2. The patent uses four aspherical surfaces distributed across three physical elements: L41 has one aspherical surface, L51 is double-sided aspherical, and L61 has one aspherical surface. Sony describes the production lens as using three aspherical elements, including one double-sided aspherical element and one XA element.
3. The glass inventory, when matched by six-digit glass code rather than by an OHARA-only assumption, accounts for Sony's published count of four ED elements and two Super ED elements. L1F2 and L1F3 are 437/951 Super ED-class glass, while L1R2, L22, L32, and L42 are ED-class glasses.
4. The patent's stated design focal-length range is 72.1013-193.9863 mm at approximately F2.88. This is consistent with a marketed 70-200 mm F2.8 lens.
5. The patent's maximum image height is 21.63 mm, giving a 43.26 mm image-circle diameter. This corresponds to the 36 x 24 mm full-frame format.
6. The patent specifies two focusing groups, G1R and G5, moving in opposite axial directions on close focus. Sony describes the production lens as using separate actuators for front and rear focus groups: RDSSM for the front group and a double linear motor for the rear group.
7. The patent identifies the L61-L62 cemented component in G6 as the vibration-proof group. This matches the production lens's Optical SteadyShot function.
8. The patent priority date, February 1, 2016, is consistent with the product's 2016 introduction window.

This analysis treats the patent as an infinity-focus optical prescription. The patent discloses the direction of close-focus movement for G1R and G5, but it does not provide a close-focus variable-spacing table. The accompanying data file therefore models the published infinity-focus zoom positions and repeats each zoom spacing as a degenerate `[infinity, close]` pair rather than inventing close-focus positions.

## Optical Architecture

Numerical Example 1 is a telephoto-range, internal-zoom, internal-focus photographic zoom for full-frame mirrorless cameras. Its six functional zoom groups have the power sequence:

`G1 positive – G2 negative – G3 positive – G4 positive – G5 negative – G6 positive`

The first group is divided into two subgroups. G1F is fixed during both zooming and focusing. G1R is fixed during zooming but moves during focusing. The zoom-moving groups are G2, G3, and G5. G4 and G6 are fixed with respect to the image plane during zooming. The aperture stop is located between G3 and G4.

The patent calls the subject matter a telephoto zoom lens, which is appropriate in the photographic focal-length sense. Under the stricter optical-design definition based on total-track ratio, however, the Example 1 prescription is not a compact telephoto form at the long end: the patent total track is 215.1482 mm, while the telephoto-end focal length is 193.9863 mm, giving TL/EFL = 1.109. The design is therefore better described as a telephoto-range internal zoom rather than as a strict TL/EFL < 1 telephoto construction.

At the wide end, independent paraxial tracing gives the following group focal lengths:

| Group | Focal length (mm) | Function |
|---|---:|---|
| G1F | +188.8 | Fixed front collector with Super ED correction |
| G1R | +195.6 | Front focusing subgroup |
| G1 combined | +99.8 | Complete positive first group |
| G2 | -26.7 | Main negative variator |
| G3 | +72.9 | Positive compensator |
| G4 | +48.7 | Fixed post-stop image-forming relay |
| G5 | -41.9 | Rear focusing group; also a zoom-moving group |
| G6 | +231.5 | Fixed rear relay with OSS component and exit-pupil control |

The zoom kinematics published in Table 3 are:

| Gap | Wide (mm) | Intermediate (mm) | Tele (mm) | Interpretation |
|---|---:|---:|---:|---|
| d10 | 2.6917 | 23.0471 | 33.5863 | G2 moves away from G1 |
| d17 | 26.3670 | 18.3886 | 2.0000 | G2-G3 interval closes |
| d22 | 15.2719 | 2.8950 | 8.7441 | G3-side spacing reverses after the intermediate setting |
| d30 | 3.8848 | 2.8892 | 2.9631 | Small relay/focus-group coordination change |
| d32 | 7.7507 | 8.7463 | 8.6725 | Small G5-G6 coordination change |

The non-monotonic d22 spacing is important. A two-position wide/tele transcription would miss the reversal of the compensator locus, so the data file keeps all three patent zoom positions.

## Element-by-Element Analysis

### G1F — Fixed front-side first group

#### L1F1: Negative meniscus, convex toward object

nd = 1.80420, νd = 46.5. Glass: 804/465 high-index lanthanum-flint class, catalog-matched as HOYA TAF3D / OHARA S-LAH65VS class. f = -295.2 mm.

L1F1 is a weak negative entrance corrector. Its high refractive index allows a large-diameter negative meniscus to be used without extreme curvature. It contributes negative field curvature and partially moderates the strong positive front group that follows.

#### L1F2: Biconvex Super ED positive

nd = 1.43700, νd = 95.1. Glass: HOYA FCD100-class Super ED fluorocrown. f = +254.1 mm.

This is the first of two very-low-dispersion positive elements in G1F. The 437/951 code corresponds to an FCD100-class fluorocrown. This classification accounts for the two Super ED elements in the production lens: both are located in the fixed front group.

#### L1F3: Positive Super ED meniscus, convex toward object

nd = 1.43700, νd = 95.1. Glass: HOYA FCD100-class Super ED fluorocrown. f = +214.9 mm.

L1F3 carries somewhat stronger positive power than L1F2. Because G1F is fixed during both zooming and focusing, the two Super ED elements provide a stable chromatic baseline, especially at the telephoto end where axial color is most demanding. The patent explicitly identifies the two positive lenses in G1F as having Abbe number 95.1 and as correcting chromatic aberration at the telephoto end (¶0110).

### G1R — Rear-side first group / focus group 1

#### L1R1: Negative meniscus, convex toward object

nd = 1.71740, νd = 29.5. Glass: 717/295 dense flint class, catalog-matched as HOYA E-FD1L / OHARA S-TIH1 class. f = -240.1 mm.

L1R1 is the negative member of the front focusing subgroup. Its low Abbe number makes it the chromatic counterweight to the positive low-dispersion elements around it. The moving group is not simply a positive focusing singlet; it is a corrected two-element subgroup.

#### L1R2: Positive ED meniscus, convex toward object

nd = 1.59280, νd = 68.6. Glass: HOYA FCD515-class ED fluorocrown. f = +105.6 mm.

L1R2 supplies most of the positive power of G1R. The 593/686 code matches HOYA FCD515-class ED glass. With L1R1, it forms a light, corrected focusing unit whose motion suppresses chromatic variation during close focusing (¶0111).

### G2 — Negative variator group

#### L21: Biconcave negative

nd = 1.80420, νd = 46.5. Glass: 804/465 high-index lanthanum-flint class, catalog-matched as HOYA TAF3D / OHARA S-LAH65VS class. f = -40.1 mm.

L21 is the principal negative element at the entrance of the variator group. It starts the beam expansion required for zoom magnification change and uses the same high-index class as L1F1 and L24.

#### L22-L23: Cemented variator corrector

L22: nd = 1.59280, νd = 68.6. Glass: HOYA FCD515-class ED fluorocrown. f = -48.0 mm.  
L23: nd = 1.80810, νd = 22.8. Glass: 808/228 dense flint class, catalog-matched as HOYA FD225 / OHARA S-NPH1-class. f = +48.3 mm.

The two standalone focal lengths are nearly equal and opposite, but the cemented pair is not optically irrelevant. It supplies chromatic correction inside the moving variator, so the aberration change introduced by G2 travel is not left to the fixed rear relay alone. The patent identifies the L22-L23 cemented lens as part of the G2 configuration used to suppress aberration variation during zooming (¶0112).

#### L24: Negative meniscus, concave toward object

nd = 1.80420, νd = 46.5. Glass: 804/465 high-index lanthanum-flint class, catalog-matched as HOYA TAF3D / OHARA S-LAH65VS class. f = -103.2 mm.

L24 is the trailing negative member of G2. It continues the negative variator action while controlling the off-axis ray bundle before G3. In Example 1 it is part of the zooming variator only; the patent's Example 3 uses a related rear G2 subgroup as an additional focusing group to suppress breathing (¶0059-0060), but that is not the prescription transcribed here.

### G3 — Positive compensator group

#### L31: Biconvex positive

nd = 1.74330, νd = 49.2. Glass: 743/492 lanthanum glass class, catalog-matched as HOYA NBF1 / OHARA S-LAM60 class. f = +130.5 mm.

L31 is a modest positive lead element in G3. The front radius is very weak compared with the rear radius, so most of the bending occurs on the image-side surface. This makes it a relatively low-incidence entrance into the compensator group.

#### L32-L33: Cemented ED achromat

L32: nd = 1.49700, νd = 81.6. Glass: HOYA FCD1 / OHARA S-FPL51-class ED fluorocrown. f = +63.3 mm.  
L33: nd = 1.80610, νd = 33.3. Glass: HOYA NBFD15-class dense flint. f = -102.2 mm.

This cemented doublet places ED correction in the moving compensator. That is structurally important: G3 changes position over zoom, so chromatic correction must move with it rather than remaining exclusively in the fixed groups. The patent states that the G3 configuration suppresses aberration variation mainly during zooming (¶0113).

### G4 — Fixed post-stop image-forming group

#### L41: Positive meniscus with one aspherical surface

nd = 1.58310, νd = 59.5. Glass: 583/594 barium crown class, catalog-matched as OHARA S-BAL42 / HOYA M-BACD12 class. f = +216.8 mm.

L41 is immediately behind the stop and carries aspherical surface s24 on its object-side face. Because this surface is close to the aperture stop, it has strong leverage over full-aperture spherical aberration while having more limited influence on lateral field distortion.

#### L42: Positive ED meniscus

nd = 1.49700, νd = 81.6. Glass: HOYA FCD1 / OHARA S-FPL51-class ED fluorocrown. f = +100.1 mm.

L42 is the second FCD1/S-FPL51-class ED element in the design. Together with L32, it accounts for two of the four ED-class elements in the production lens; L1R2 and L22 account for the other two when the 593/686 FCD515-class pair is correctly classified.

#### L43-L44: Cemented field-correction doublet

L43: nd = 2.00100, νd = 29.1. Glass: HOYA TAFD55 / TAFD55-W class. f = -47.5 mm.  
L44: nd = 1.56730, νd = 42.8. Glass: 567/428 flint class, catalog-matched as HOYA E-FL6 / OHARA S-TIL26 class. f = +35.9 mm.

This doublet is unusual because both glasses lie on the flint side of the crown/flint boundary. Its purpose is not a simple crown/flint achromat. The high index of L43 permits a strongly powered cemented interface, while the positive L44 produces the net positive action needed by G4. The patent describes G4 as two positive lenses followed by a negative-positive cemented lens for correction of spherical aberration, coma, and field curvature in the image-forming section (¶0115).

### G5 — Single-element rear focusing group

#### L51: Biconcave negative, double-sided aspherical

nd = 1.58310, νd = 59.5. Glass: 583/594 barium crown class, catalog-matched as OHARA S-BAL42 / HOYA M-BACD12 class. f = -41.9 mm.

G5 consists of a single negative element with both surfaces aspherical. The patent identifies this as a reduced-weight focusing group (¶0116). It also moves during zoom, so the element has two duties: rear focusing and focal-length coordination in the principal image-forming system.

A moderate-index barium crown is appropriate here because it avoids the mass penalty of a dense lanthanum glass while still permitting a single-element negative group. Sony's production description of a double linear motor for the rear focus group is consistent with this low-mass single-element construction.

### G6 — Fixed rear relay with OSS group

#### L61-L62: Cemented OSS component; L61 is the XA/aspherical member

L61: nd = 1.51630, νd = 64.1. Glass: BK7-class borosilicate crown, catalog-matched as OHARA S-BSL7 / HOYA BSC7 / Schott N-BK7 class. f = +48.1 mm.  
L62: nd = 1.80610, νd = 33.3. Glass: HOYA NBFD15-class dense flint. f = -108.3 mm.

The patent states that the cemented component containing L61 and L62 can shift perpendicular to the optical axis as the vibration-proof lens group (¶0118). L61 carries aspherical surface s33. Its comparatively small aspherical departure is consistent with a stabilization component: a strongly figured surface would be more sensitive to decentration during OIS movement.

Sony identifies one XA element in the production lens. The patent does not use Sony's marketing term in the prescription table, but the location and aspherical-surface count make L61 the most plausible XA member.

#### L63-L64: Cemented rear relay doublet

L63: nd = 1.67270, νd = 32.2. Glass: 673/322 dense flint class, catalog-matched as HOYA E-FD5 / OHARA S-TIM25 class. f = +35.2 mm.  
L64: nd = 1.83480, νd = 42.7. Glass: 835/427 high-index lanthanum-flint class, catalog-matched as HOYA TAFD5G / OHARA S-LAH55VS class. f = -100.8 mm.

This doublet supplies positive relay power with controlled field contribution. As with the G4 doublet, the glass pairing is not a conventional low-index crown plus high-index flint pair; both glasses lie in flint or dense-flint territory by Abbe number.

#### L65: Biconcave negative

nd = 1.72920, νd = 54.7. Glass: 729/547 lanthanum crown class, catalog-matched as HOYA TAC8 / OHARA S-LAL18 class. f = -74.4 mm.

L65 is a rear negative field-shaping element. Its position gives it useful leverage over astigmatism and exit-pupil behavior without forcing the front groups to carry all off-axis correction.

#### L66: Negative meniscus, concave toward object

nd = 1.88300, νd = 40.8. Glass: 883/408 high-index lanthanum-flint class, catalog-matched as HOYA TAFD30 / OHARA S-LAH58 class. f = -54.8 mm.

The final element is a strong high-index negative meniscus. It helps set the rear conjugate and exit-pupil position. The patent describes G6 as producing an advantageous exit-pupil position for an interchangeable-lens camera by avoiding interference between the mount diameter and rays (¶0117).

## Glass Identification and Selection

The patent gives nd and νd values, not named glass makes. Glass names in the data file should therefore be read as catalog-class matches to the six-digit code `round(1000·nd) / round(10·νd)`, not as a claim that the patent explicitly named a vendor. This distinction is essential for Example 1 because an OHARA-only assignment produces multiple false matches.

| Patent nd / νd | Six-digit code | Corrected catalog-class match | Elements | Role |
|---:|---:|---|---|---|
| 1.4370 / 95.1 | 437/951 | HOYA FCD100 class | L1F2, L1F3 | Super ED front-group correction |
| 1.4970 / 81.6 | 497/816 | HOYA FCD1 / OHARA S-FPL51 class | L32, L42 | ED correction in G3 and G4 |
| 1.5928 / 68.6 | 593/686 | HOYA FCD515 class | L1R2, L22 | ED correction in focus/variator groups |
| 1.5163 / 64.1 | 516-517/641-642 | S-BSL7 / BSC7 / N-BK7 class | L61 | OIS/XA substrate |
| 1.5831 / 59.5 | 583/594 | OHARA S-BAL42 / HOYA M-BACD12 class | L41, L51 | Aspherical barium-crown elements |
| 1.7292 / 54.7 | 729/547 | HOYA TAC8 / OHARA S-LAL18 class | L65 | Rear negative field element |
| 1.7433 / 49.2 | 743/492 | HOYA NBF1 / OHARA S-LAM60 class | L31 | Compensator positive element |
| 1.8042 / 46.5 | 804/465 | HOYA TAF3D / OHARA S-LAH65VS class | L1F1, L21, L24 | High-index negative elements |
| 1.5673 / 42.8 | 567/428 | HOYA E-FL6 / OHARA S-TIL26 class | L44 | G4 cemented positive partner |
| 1.8348 / 42.7 | 835/427 | HOYA TAFD5G / OHARA S-LAH55VS class | L64 | G6 cemented negative partner |
| 1.8830 / 40.8 | 883/408 | HOYA TAFD30 / OHARA S-LAH58 class | L66 | Final high-index negative meniscus |
| 1.8061 / 33.3 | 806/333 | HOYA NBFD15 class | L33, L62 | ED-achromat and OIS cemented partners |
| 1.6727 / 32.2 | 673/322 | HOYA E-FD5 / OHARA S-TIM25 class | L63 | Strong rear-relay positive element |
| 1.7174 / 29.5 | 717/295 | HOYA E-FD1L / OHARA S-TIH1 class | L1R1 | Negative front focusing element |
| 2.0010 / 29.1 | 001/291 | HOYA TAFD55 / TAFD55-W class | L43 | Very high-index G4 corrector |
| 1.8081 / 22.8 | 808/228 | HOYA FD225 / OHARA S-NPH1 class | L23 | High-dispersion variator doublet partner |

The glass map accounts for Sony's published ED-element count. The two 437/951 elements are Super ED-class. The four ED-class elements are L1R2 and L22 in 593/686 FCD515-class glass plus L32 and L42 in 497/816 FCD1/S-FPL51-class glass.

## Focus Mechanism

The design uses dual floating internal focus. In Example 1, the focusing groups are G1R and G5. The patent states that G1R moves toward the object side and G5 moves toward the image plane side when focusing from infinity to a short-distance object (¶0109). Sony's production description of the SEL70200GM is consistent with this: the front focus group is driven by an RDSSM actuator, while the rear focus group is driven by a double linear motor.

The patent also describes the value of using a reduced-size, reduced-weight focusing group for high-speed and video-oriented wobbling operation (¶0074). G5's single-element construction is the mechanical and optical implementation of that requirement.

No numerical close-focus spacing table is published for Example 1. The data file therefore does not attempt to simulate focus breathing or close-focus magnification. It records the official close-focus distance, 0.96 m, as production metadata, while the prescription itself remains the patent's infinity-focus zoom model.

## Aspherical Surfaces

The patent's aspherical equation uses the standard conic-base form with K as the conic constant. All four Example 1 aspherical surfaces have K = 0, so the base conic is spherical and the polynomial terms provide the departure. The data file labels the patent's s24, s31, s32, and s33 as 24A, 31A, 32A, and 33A.

| Surface | Element | A4 | A6 | A8 | A10 | Polynomial departure at data-file SD |
|---|---|---:|---:|---:|---:|---:|
| 24A | L41 front | -2.11750E-06 | -2.28633E-10 | +1.66377E-12 | -1.62257E-15 | -217.5 µm at h = 18.0 mm |
| 31A | L51 front | +1.06533E-06 | -4.12307E-09 | +2.76793E-11 | +7.79734E-14 | +81.3 µm at h = 14.2 mm |
| 32A | L51 rear | -6.11153E-06 | -7.64389E-09 | -6.19757E-11 | +9.35929E-14 | -356.7 µm at h = 14.0 mm |
| 33A | L61 front | -6.31905E-07 | +2.79472E-09 | -6.29142E-12 | 0 | -21.5 µm at h = 16.0 mm |

Surface 24A is the first post-stop refracting surface and primarily addresses full-aperture spherical aberration. Surfaces 31A and 32A are on the single-element rear focus group, giving G5 correction leverage as it moves during focusing and zooming. Surface 33A is on the L61-L62 OIS component; its relatively modest departure is consistent with a decentering stabilization group where strong figure can increase decenter sensitivity.

## Image Stabilization

The vibration-proof group is the cemented component L61-L62 at the front of G6. The patent states that this component can shift in a direction perpendicular to the optical axis to correct image shake (¶0118). This is also the component carrying aspherical surface 33A, and it is the natural location for the production XA element based on the aspherical surface count and the Sony feature description.

The data file does not include a decentering OIS state. LensVisualizer's prescription model remains centered; the OIS group is documented as an annotation and analysis feature rather than as an active movement slider.

## Conditional Expressions

The patent supplies six conditional-expression values for Example 1 in Table 10:

| Expression | Patent range | Example 1 value | Comment |
|---|---:|---:|---|
| (1) F1R/F1 | 0.40-0.56 | 0.510 | The table value equals f(G1)/f(G1R), 99.8/195.6, so the textual label appears inverted. |
| (2) OL4/F456T | 0.50-1.00 | 0.706 | Controls rear image-forming section length. |
| (3) (1 - βt5²) · βt6² | -5.5 to -2.0 | -4.499 | Controls G5 focus sensitivity. |
| (4) Hft/Ft | -1.2 to -0.5 | -0.855 | Controls front principal-point placement at telephoto. |
| (5) νd1F | 80-110 | 95.100 | Requires very-low-dispersion positive glass in G1F. |
| (6) nd5 | 1.45-1.65 | 1.583 | Limits G5 refractive index for reduced focusing-group mass. |

The apparent notation issue in expression (1) is not an optical failure. Independent paraxial tracing gives f(G1) = +99.8 mm and f(G1R) = +195.6 mm; their ratio is 0.510, exactly matching the table value.

## Verification Summary

The prescription was re-entered from the patent tables and independently checked with a paraxial ray trace using the `y, n·u` formulation. Variable spacings use the patent's three infinity-focus zoom positions. The last air distance was reconstructed from the patent's constant total length: BF = 30.6083 mm.

| Position | Patent EFL (mm) | Computed EFL (mm) | Difference (mm) |
|---|---:|---:|---:|
| Wide | 72.1013 | 72.1123 | +0.0110 |
| Intermediate | 117.9861 | 118.0030 | +0.0169 |
| Telephoto | 193.9863 | 194.0319 | +0.0456 |

The residual differences are within the precision expected from the rounded patent table. The computed back focal distances are 30.6282 mm, 30.5677 mm, and 30.5896 mm at the three positions, consistent with the fixed 30.6083 mm distance recovered from the constant total track.

The aperture stop semi-diameter required to reproduce the patent F-number is approximately 17.3-17.5 mm across the three zoom positions. The data file uses 17.5 mm for the stop semi-diameter.

The Petzval sum was recomputed surface by surface using Σ φ/(n·n′), not by thin-element approximations. The resulting value is +0.0008187 mm⁻¹, corresponding to a Petzval radius of approximately 1221 mm. This small positive value is consistent with a flattened telephoto-range zoom, but it should not be over-interpreted as a direct prediction of real astigmatic field curvature.

Semi-diameters are not patent-published values. The data file values are rendering estimates constrained by the 77 mm production filter thread, paraxial stop geometry, element edge-thickness checks, front/rear element SD ratio checks, and cross-gap sag clearance checks at all three zoom positions.

## Sources

1. US 2019/0018229 A1, "Zoom Lens and Optical Instrument," Naoki Miyagawa and Yonghua Chen, Sony Corporation, published January 17, 2019.
2. Sony Corporation, "FE 70-200mm F2.8 GM OSS / SEL70200GM — Specifications and Features." Official product page.
3. HOYA Group Optics Division, "Glass Cross Reference Index," six-digit code table for HOYA, Schott, OHARA, HIKARI, Sumita, and CDGM glass families.
4. HOYA Group Optics Division, TAFD55-W technical data sheet and product notice.
5. OHARA Corporation, individual catalog pages and pocket catalog entries for S-LAH65V/S-LAH65VS, S-LAL18, S-BAL42, S-BSL7, S-LAH58, S-TIH1, S-TIL26, S-TIM25, and related cross-reference classes.
