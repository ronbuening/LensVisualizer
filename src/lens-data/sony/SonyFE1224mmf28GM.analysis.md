# Sony FE 12-24mm f/2.8 GM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** WO 2021/200206 A1  
**Application Number:** PCT/JP2021/011052  
**Priority:** JP 2020-059846, filed 2020-03-30  
**Filed:** 2021-03-18  
**Published:** 2021-10-07  
**Inventor:** KATO, Takuya (加藤 卓也)  
**Applicant:** Sony Group Corporation  
**Title:** Zoom Lens and Imaging Device (ズームレンズおよび撮像装置)  
**Embodiment analyzed:** Example 2 (実施例2), Figure 6 and Tables 6-10

The prescription transcribed here is Example 2 of WO 2021/200206 A1. The patent describes a mirrorless-camera zoom lens having a negative first group, a positive second group, an intermediate group, and a negative final group, with Example 2 set out in Tables 6-10 and summarized by the correspondence data in Table 21. This review follows the numerical tables and Figure 6 where the prose and numerical prescription disagree.

Convergent evidence links Example 2 to the production Sony FE 12-24mm f/2.8 GM (SEL1224GM):

1. **Element and group count.** Example 2 uses 17 glass elements in 14 air-separated components/groups, matching Sony's published 14-group/17-element construction.
2. **Focal-length range.** The patent gives 12.37, 16.94, and 23.29 mm focal lengths at wide, mid, and telephoto positions; the production lens is marketed as 12-24 mm.
3. **Aperture.** The patent design value is F/2.91 at all three focal-length positions; the production lens is marketed as a constant f/2.8 lens.
4. **Image circle.** The patent image height is 21.60 mm, corresponding to a 43.2 mm image circle and therefore to 35 mm full-frame coverage.
5. **Field angle.** The patent gives a wide-end full angle of 120.40°; Sony publishes 122°-84° for the production lens.
6. **Close-focus distance.** Table 9 gives the close-focus state at d0 = 280 mm. A direct paraxial conjugate check of the rounded close-focus spacings gives image-plane-to-object distances of about 275-283 mm across the zoom range, matching Sony's 0.28 m minimum focus distance.
7. **Special-element count.** Example 2 contains four elements with both surfaces aspherical (L11, L12, L32, L55), two very-high-Abbe Super-ED-class elements (L14, L53), and three ED-class elements (L13, L42, L56). This matches Sony's description of three XA elements, one aspherical element, two Super ED elements, and three ED elements.
8. **Floating focus.** The patent uses GP2 and GP4 as independently movable focus groups; Sony describes the production lens as having two focus groups driven by four XD linear motors.
9. **Timing.** The patent priority date of 2020-03-30 is consistent with a 2020 product introduction.

Example 2 is a better match for the production lens than Example 1 because Example 2 omits the additional second flare cutter in the rear group. Example 1 and Example 2 share the same broad five-group negative-positive-positive-positive-negative power distribution, but Example 2 is the cleaner 17-element production-like prescription.

## Optical Architecture

The design is a five-group rectilinear ultra-wide zoom with power distribution negative-positive-positive-positive-negative. From object to image, the group focal lengths in Table 7 are GP1 = -20.31 mm, GP2 = +58.02 mm, GP3 = +362.10 mm, GP4 = +46.40 mm, and GP5 = -78.16 mm. GP1 is the front negative group, GP2 is the first positive focus group, GP3 and GP4 form the intermediate group GPm, and GP5 is the final negative group GPr.

GP1 supplies the strong negative front power needed for a 120°-class rectilinear field. GP5 also has negative power, which is the main compactness device described in the patent: the design does not rely on a large strong positive rear group to set the back-focus clearance. The lens is still retrofocus by the ordinary BFD/EFL test at every tabulated zoom position because BFD/EFL is greater than 1.0, but the negative final group shortens the total track compared with a more conventional ultra-wide layout that would push strong positive power toward the rear.

The zoom motion is non-unit. During zooming from wide to telephoto, GP1 moves imageward, while FC1 and GP2 through GP5 move objectward. The patent states that GP3 and GP5 move together without changing their mutual spacing, while GP2 and GP4 approach GP3. This is reproduced by Table 9: at infinity, d19 + GP4 thickness + d22 remains 17.04 mm at wide, mid, and telephoto positions.

The back focal distance changes with zoom but not with focus. Table 9 gives d33 = 15.50, 21.73, and 31.21 mm from wide to telephoto. The corresponding computed total tracks from the first vertex to the image plane are 151.15, 142.03, and 139.28 mm. Table 8 prints its L row as 12.37, 16.94, and 23.29 mm, identical to the focal-length row; that row is treated as a patent table error rather than as an optical length.

The aperture stop is represented as surface 15 in the numerical table and is grouped with GP3 in Table 7. Paragraph 0092 likewise describes GP3 as consisting, from object to image, of the aperture stop, L31, and L32. A later sentence in paragraph 0098 says that the stop is between GP3 and GP4, but that placement conflicts with Figure 6, Table 6, Table 7, and paragraph 0092. The data file therefore places `STO` immediately before L31, matching the numerical prescription and the GP3 start line in Table 7.

## Element-by-Element Analysis

### GP1 — Front Negative Group, L11-L15

GP1 contains five singlets: two large negative aspherical menisci, two negative ED/Super-ED-class biconcave lenses, and one dense-flint positive lens. Its net focal length computes as -20.30 mm from the rounded prescription, agreeing with the patent's -20.31 mm.

#### L11 — Negative Meniscus (2x Asph), convex to object

nd = 1.58547, νd = 59.5. Glass: D-ZK2 / SK crown class, PGM-compatible crown, 586/595 code. f = -37.3 mm.

L11 is the largest front element and the first of the patent's four double-aspherical elements. Its front effective diameter is 77.96 mm in Table 6. Sony's production description identifies the first XA element as the largest XA element used in an Alpha lens, which is consistent with this role. The element supplies strong divergence while its rear asphere controls the otherwise severe front-group distortion.

#### L12 — Negative Meniscus (2x Asph), convex to object

nd = 1.77173, νd = 49.2. Glass: M-TAF1-class PGM lanthanum flint, 772/492 code. f = -58.8 mm.

L12 continues the front divergence with higher index glass than L11. Its Abbe number is below the usual crown/flint boundary, so it is better described as a lanthanum flint or flint-like molded asphere substrate rather than as a crown. Both surfaces carry aspherical coefficients, and the A4 terms are much larger than those on L11 because the element works at a smaller but still high ray height.

#### L13 — Biconcave ED Negative

nd = 1.55206, νd = 75.5. Glass: FCD705-class ED phosphate crown, 552/755 code. f = -88.7 mm.

L13 is the first ED-class element. It is a biconcave negative singlet with a very weak front surface and a stronger rear surface. In this location, the high Abbe number is useful for lateral color correction because off-axis ray heights are still large in the negative front group.

#### L14 — Biconcave Super-ED-Class Negative

nd = 1.43810, νd = 95.1. Glass: S-FPL53 / FCD100 class Super ED fluorophosphate, 438/951 code. f = -114.2 mm.

L14 is the first of two very-high-Abbe elements in the design. The patent does not name a vendor glass, and the stored nd/νd pair does not exactly equal the public S-FPL53 or FCD100 catalog values, so the correct statement is class-level rather than a definitive catalog identification. Its placement behind L13 forms an ED plus Super-ED sequence at the rear of GP1.

#### L15 — Biconvex Dense-Flint Positive

nd = 1.85649, νd = 32.3. Glass: unmatched dense lanthanum flint, 856/323 code. f = +53.0 mm.

L15 is the positive closing element of GP1. It partly collects the diverging beam and provides a short-flint chromatic partner to the preceding high-Abbe negative elements. No public catalog entry was confirmed close enough to treat the element as a named manufacturer glass, so the data file records it as unmatched.

### FC1 — First Flare Cutter

FC1 is a flat flare cutter between GP1 and GP2. Its Table 6 effective diameter is 22.30 mm. During zooming from wide to telephoto it approaches GP2, and the patent says that placing it away from GP2 at the wide end allows peripheral flare components to be cut effectively.

### GP2 — Positive Focus Group 1, L21-L22

GP2 is a negative-positive cemented doublet and the first floating focus group. The computed focal length from the rounded prescription is +57.76 mm; Table 7 gives +58.02 mm.

#### L21 — Negative Meniscus, cemented to L22

nd = 1.93024, νd = 24.0. Glass: unmatched ultra-dense short flint, 930/240 code. f = -48.3 mm.

L21 is the most object-side lens of GP2 and is the lens used for the patent's high-index focus-group condition. The front radius of GP2 is R2GF = +30.971 mm, giving R2GF/fw = 2.506 with the computed wide-end focal length. This lies inside the patent's specified range and gives the focus group a convex object-side front surface.

#### L22 — Biconvex Positive, cemented to L21

nd = 1.67764, νd = 32.2. Glass: 678322 dense flint, adjacent to the N-SF5/SF5 region but not an exact public catalog row. f = +25.9 mm.

L22 provides the net positive power of the GP2 doublet. The cemented interface at R = +17.990 mm carries substantial refractive power because of the high index difference between L21 and L22. The pair is not a conventional crown-flint achromat; it is a high-index flint/flint cemented component optimized for compact moving-focus behavior.

### GP3 — Weak Positive Stop-Region Group, STO + L31-L32

GP3 contains the aperture stop, one negative singlet, and one positive double-aspherical singlet. The rounded prescription computes a weak positive focal length of +368.78 mm. Table 7 gives +362.10 mm; the discrepancy is 1.8%, expected for a near-afocal group whose net power is the small difference between stronger opposed powers.

#### L31 — Negative Meniscus

nd = 1.96073, νd = 32.3. Glass: unmatched ultra-dense lanthanum flint, 961/323 code. f = -62.2 mm.

L31 is immediately behind the stop. It uses the same 1.96073/32.3 glass later repeated in L41 and L52. Its thin center thickness and high index let it contribute negative power near the stop without excessive curvature.

#### L32 — Positive Meniscus (2x Asph)

nd = 1.59412, νd = 67.0. Glass: PCD51-class low-dispersion crown, 594/670 code. f = +51.4 mm.

L32 is the mid-system double-aspherical corrector. Its positive power offsets L31 and leaves GP3 weakly positive overall. The two aspherical surfaces are polynomial-only aspheres with K = 0, used primarily for field, coma, and astigmatism control near the aperture stop.

### GP4 — Positive Focus Group 2, L41-L42

GP4 is the second floating focus group, again a negative-positive cemented doublet. The computed focal length is +46.49 mm, matching Table 7's +46.40 mm.

#### L41 — Negative Meniscus, cemented to L42

nd = 1.96073, νd = 32.3. Glass: unmatched ultra-dense lanthanum flint, 961/323 code. f = -36.8 mm.

L41 uses the same high-index glass as L31. It supplies the negative member of GP4 and helps control the aberration change introduced by the stronger GP2 focus movement.

#### L42 — Biconvex ED Positive, cemented to L41

nd = 1.55206, νd = 75.5. Glass: FCD705-class ED phosphate crown, 552/755 code. f = +20.6 mm.

L42 is the positive ED element of GP4 and the third ED-class element when L56 is included. The steep cemented interface at R = +13.361 mm provides the main doublet power and chromatic correction.

### GP5 — Final Negative Group, L51-L56

GP5 is the final negative group GPr. It contains a cemented L51-L52 component followed by L53, L54, L55, and L56. The computed focal length is -77.66 mm versus the patent's -78.16 mm. In the patent's La/Lb/Lc framework, L54 is La, L55 is Lb, and L56 is Lc.

#### L51 — Positive Meniscus, cemented to L52

nd = 1.90314, νd = 20.4. Glass: unmatched ultra-dense short flint, 903/204 code. f = +24.5 mm.

L51 is a very low-Abbe positive element at the front of GP5. Its chromatic behavior is more important than its isolated focal length because it is nearly cancelled by L52 in the cemented component.

#### L52 — Negative Meniscus, cemented to L51

nd = 1.96073, νd = 32.3. Glass: unmatched ultra-dense lanthanum flint, 961/323 code. f = -24.7 mm.

L52 nearly cancels L51's positive power, leaving the L51-L52 component with weak negative net power in situ. The cemented interface at R = -16.371 mm and the 12-unit Abbe difference provide chromatic correction within GP5 without requiring a large net power from the component.

#### L53 — Biconvex Super-ED-Class Positive

nd = 1.43810, νd = 95.1. Glass: S-FPL53 / FCD100 class Super ED fluorophosphate, 438/951 code. f = +35.1 mm.

L53 is the second Super-ED-class element. It has strong positive power and is placed in the image-side half of the design, balancing the Super-ED-class negative L14 in GP1.

#### L54 — Negative Meniscus, concave to object

nd = 2.00912, νd = 29.1. Glass: unmatched ultra-high-index lanthanum flint, 009/291 code. f = -31.6 mm.

L54 is the highest-index element in the prescription and is the patent's La component, third from the image side. Its negative meniscus form strengthens the final group's negative power while keeping thickness low.

#### L55 — Negative Meniscus (2x Asph), concave to object

nd = 1.85639, νd = 40.1. Glass: D-ZLaF85-class lanthanum flint, 856/401 code. f = -64.2 mm.

L55 is the patent's Lb component and carries aspherical surfaces on both sides. The object-side asphere is specifically discussed in the patent: it is shaped so that the sag amount in the object-side direction increases toward the periphery relative to the paraxial spherical surface. This is the rear-group distortion-correction element and corresponds to the third XA-class element in the production-lens match.

#### L56 — Biconvex ED Positive

nd = 1.49845, νd = 81.6. Glass: S-FPL51 / FCD1 / N-PK52A class ED fluorophosphate, 498/816 code. f = +155.1 mm.

L56 is the patent's Lc component, the positive element closest to the image plane. Table 21 gives θgF = 0.5389 and ΔθgF = +0.0376 for this element. The high Abbe number and positive anomalous partial dispersion allow the rear element to reduce chief-ray incidence angle without adding excessive lateral color.

## Glass Identification and Selection

The patent gives refractive index and Abbe number but does not name the glass manufacturer. Named catalog identifications in the data file are therefore limited to class-level matches unless the public catalog nd/νd pair is close enough to justify a more specific statement. Several high-index flints in this patent appear proprietary or non-catalog in the public OHARA, HOYA, Schott, Hikari, CDGM, and Sumita tables checked for this review.

| Element(s) | nd | νd | Identification used | Role |
|---|---:|---:|---|---|
| L11 | 1.58547 | 59.5 | D-ZK2 / SK crown class, 586/595 | molded front asphere substrate |
| L12 | 1.77173 | 49.2 | M-TAF1-class PGM lanthanum flint, 772/492 | high-index molded asphere substrate |
| L13, L42 | 1.55206 | 75.5 | FCD705-class ED phosphate crown, 552/755 | ED correction in GP1 and GP4 |
| L14, L53 | 1.43810 | 95.1 | S-FPL53 / FCD100 class Super ED fluorophosphate, 438/951 | Super-ED-class correction in GP1 and GP5 |
| L15 | 1.85649 | 32.3 | Unmatched dense lanthanum flint, 856/323 | positive flint in GP1 |
| L21 | 1.93024 | 24.0 | Unmatched ultra-dense short flint, 930/240 | GP2 moving focus doublet |
| L22 | 1.67764 | 32.2 | 678322 dense flint, N-SF5/SF5-adjacent | GP2 positive focus element |
| L31, L41, L52 | 1.96073 | 32.3 | Unmatched ultra-dense lanthanum flint, 961/323 | stop-region, GP4, and GP5 negative members |
| L32 | 1.59412 | 67.0 | PCD51-class low-dispersion crown, 594/670 | mid-system aspherical corrector |
| L51 | 1.90314 | 20.4 | Unmatched ultra-dense short flint, 903/204 | GP5 chromatic component |
| L54 | 2.00912 | 29.1 | Unmatched ultra-high-index lanthanum flint, 009/291 | La component in GP5 |
| L55 | 1.85639 | 40.1 | D-ZLaF85-class lanthanum flint, 856/401 | rear XA/asphere substrate |
| L56 | 1.49845 | 81.6 | S-FPL51 / FCD1 / N-PK52A class ED fluorophosphate, 498/816 | Lc rear positive ED element |

The strongest glass-selection pattern is the distribution of high-Abbe elements at both ends of the optical system. L13/L14 correct lateral color in the high-ray-height front group; L53/L56 repeat high-Abbe correction in the image-side path. The dense flints supply compact power and chromatic counterweight, but several are not public-catalog matches and are therefore intentionally labelled `Unmatched` in the data file.

## Focus Mechanism

The design uses floating inner focus. The patent identifies GP2 and GP4 as the operating focus groups and states that focusing from infinity to close distance generally moves them imageward. The spacing table confirms a large GP2 motion and a smaller GP4 compensation motion.

| Gap | Wide ∞ | Wide close | Mid ∞ | Mid close | Tele ∞ | Tele close |
|---|---:|---:|---:|---:|---:|---:|
| d10, GP1-FC1 | 19.75 | 19.75 | 11.56 | 11.56 | 1.30 | 1.30 |
| d11, FC1-GP2 | 10.16 | 13.26 | 3.28 | 6.84 | 3.00 | 6.40 |
| d14, GP2-GP3/STO | 9.31 | 6.21 | 9.03 | 5.46 | 7.34 | 3.94 |
| d19, GP3-GP4 | 3.20 | 3.17 | 2.34 | 2.69 | 2.00 | 2.52 |
| d22, GP4-GP5 | 2.97 | 3.00 | 3.83 | 3.48 | 4.17 | 3.65 |
| d33, BFD | 15.50 | 15.50 | 21.73 | 21.73 | 31.21 | 31.21 |

GP2 moves imageward by 3.10 mm at the wide end, 3.56 mm at the mid position, and 3.40 mm at the telephoto end. GP4's motion is much smaller: the table implies a negligible 0.03 mm object-side change at the wide end, then 0.35 mm and 0.52 mm imageward at mid and telephoto. The wide-end sign reversal is small enough to treat as rounding or a near-stationary compensation state rather than a separate focus principle.

The rounded close-focus prescription gives paraxial conjugate distances of approximately 282.7 mm at wide, 283.4 mm at mid, and 275.0 mm at telephoto when measured from the image plane to the object. This spread is consistent with rounding in the tabulated prescription and supports treating the 280 mm close column as the photographic object-distance state. The telephoto close-state magnification computes to approximately -0.140x, agreeing with Sony's published maximum magnification of 0.14x.

## Aspherical Surfaces

The eight aspherical surfaces are 1, 2, 3, 4, 18, 19, 30, and 31. In the data file these are labelled 1A, 2A, 3A, 4A, 18A, 19A, 30A, and 31A. The patent uses the standard conic-plus-even-polynomial form:

$$
x = \frac{y^2 c}{1 + \sqrt{1 - (1 + k)y^2c^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12} + A_{14}y^{14}
$$

where $c = 1/R$ and $k$ is the standard conic constant, with a sphere represented by $k = 0$. Table 10 lists coefficients through A12 for Example 2; A14 is not tabulated and is treated as zero.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 1A | -1.16003E-02 | -1.65355E-07 | +1.17463E-09 | -3.83525E-13 | +7.83751E-17 | +3.53834E-20 |
| 2A | -6.67543E-01 | -2.70493E-06 | -1.00491E-08 | +4.57727E-12 | -1.85805E-14 | -5.01144E-18 |
| 3A | +6.39569E-03 | -1.90031E-05 | +3.67240E-08 | -3.69202E-11 | +1.47478E-14 | +2.86478E-19 |
| 4A | +1.47359E-01 | -1.52241E-05 | +4.28831E-08 | +3.97935E-11 | -2.05537E-13 | +4.71911E-16 |
| 18A | 0 | -1.01036E-05 | -3.18092E-08 | -6.54421E-11 | +1.26110E-13 | 0 |
| 19A | 0 | -4.54563E-06 | -2.77470E-08 | -6.43216E-11 | +3.71318E-13 | 0 |
| 30A | 0 | -5.01451E-05 | +7.60009E-08 | -1.12942E-10 | -1.79084E-12 | 0 |
| 31A | 0 | -2.10249E-05 | +1.44746E-07 | -2.43205E-10 | -1.87381E-13 | 0 |

L11 and L12 carry the heaviest front-group aspherical correction. L32 is the stop-region aspherical corrector. L55 carries the strongest A4 term in the system, and its object-side surface is explicitly tied by the patent to distortion correction in the final group.

## Chromatic Correction Strategy

The design's chromatic correction is distributed rather than localized in one apochromatic block. In GP1, L13 and L14 combine ED and Super-ED-class negative power where off-axis ray heights are high. In GP5, L53 and L56 provide image-side high-Abbe correction. L56 is additionally governed by the patent's anomalous partial dispersion condition for Lc.

The dense flints do not simply cancel axial color in the usual crown/flint doublet sense. In several places, especially L21-L22 and L51-L52, the design uses high-index glasses of relatively low Abbe number to obtain compact moving or rear-group power while keeping chromatic residuals balanced by the surrounding ED elements.

No apochromatic designation is asserted for this zoom. The prescription supports strong lateral color correction across an extreme field, but the patent's conditions and figures are about a compact bright ultra-wide zoom rather than an APO lens claim.

## Conditional Expressions

The patent gives five main conditional expressions for this family. Example 2 satisfies them.

| Condition | Expression | Example 2 value | Result |
|---|---|---:|---|
| (1) | νd(Lc) > 70 | 81.6 | Pass |
| (2) | 0.015 < ΔθgF(Lc) < 0.1 | 0.0376 | Pass |
| (3) | 1.0 < BW/fw < 2.0 | 1.254 | Pass |
| (4) | 1.5 < R2GF/fw < 5.0 | 2.506 | Pass |
| (5) | Nd2G > 1.8 | 1.93024 | Pass |

For condition (2), Table 21 gives θgF = 0.5389 for L56 and ΔθgF = 0.0376. For condition (3), BW = 15.50 mm and the computed wide-end focal length is 12.361 mm, giving BW/fw = 1.254. For condition (4), R2GF = 30.971 mm and fw = 12.361 mm, giving 2.506.

One table inconsistency remains: Table 21 prints Nd2G = 1.9212 for Example 2, while Table 6 gives the GP2 front element L21 as nd = 1.93024. The prescription value is used in the data file and in the computed check. The printed 1.9212 value matches the corresponding value in Example 1 more closely and is treated as a correspondence-table carryover error.

## Verification Summary

The numerical prescription was re-entered from the patent tables and checked by an independent paraxial y-nu trace using d-line refractive indices. The following values are from that trace.

| Quantity | Computed | Patent table | Notes |
|---|---:|---:|---|
| EFL, wide | 12.361 mm | 12.37 mm | Table 8 |
| EFL, mid | 16.931 mm | 16.94 mm | Table 8 |
| EFL, tele | 23.280 mm | 23.29 mm | Table 8 |
| Full field, wide | 120.44° | 120.40° | from Y = 21.60 mm |
| Full field, mid | 103.82° | 103.79° | from Y = 21.60 mm |
| Full field, tele | 85.71° | 85.71° | from Y = 21.60 mm |
| GP1 focal length | -20.30 mm | -20.31 mm | Table 7 |
| GP2 focal length | +57.76 mm | +58.02 mm | rounded prescription sensitivity |
| GP3 focal length | +368.78 mm | +362.10 mm | near-afocal group sensitivity |
| GP4 focal length | +46.49 mm | +46.40 mm | Table 7 |
| GP5 focal length | -77.66 mm | -78.16 mm | Table 7 |
| Petzval sum | +0.002510 mm^-1 | — | surface-by-surface φ/(n n') |
| Petzval radius | +398.4 mm | — | reciprocal of Petzval sum |
| Total track, wide | 151.15 mm | 12.37 mm printed | Table 8 L row duplicates f row |
| Total track, mid | 142.03 mm | 16.94 mm printed | Table 8 L row duplicates f row |
| Total track, tele | 139.28 mm | 23.29 mm printed | Table 8 L row duplicates f row |
| Tele close magnification | -0.140x | — | close-state conjugate; Table 9 d0 = 280 mm |

The surface-by-surface Petzval sum was computed as $\sum \phi/(n n')$ over the refracting surfaces. It was not computed from isolated thin elements.

## Data-File Modeling Notes

The data file uses the patent's effective diameters from Table 6, divided by two, as semi-diameters. The first two meniscus elements have large front-to-rear effective-diameter changes because the patent gives real clear-aperture data rather than inferred blank diameters. Those values are retained instead of normalized to a generic element-ratio rule.

The sensor cover glass or any camera-side filter stack is not included. The final surface distance d33 is the patent back focal distance to IMG.

The current data schema does not support a zoom-varying stop semi-diameter. Table 9 gives φ15 = 16.23, 19.13, and 23.63 mm from wide to telephoto; the data file stores the maximum semi-diameter, 11.815 mm, and leaves the design aperture value in `apertureDesign: 2.91`.

The stop placement follows the numerical prescription. Table 6 marks surface 15 as `STO`, Table 7 starts GP3 at surface 15, and Figure 6 draws the stop at the object-side edge of GP3. The later prose statement placing the stop between GP3 and GP4 is treated as a descriptive slip, not as a prescription edit.

## Design Heritage and Context

The patent positions the invention against retrofocus ultra-wide zooms intended for longer-flange camera systems and against prior mirrorless short-back-focus designs that did not sufficiently combine compactness, wide angle, and a bright F-number. Its distinguishing feature is the negative final group with the La/Lb/Lc structure: two negative components before a positive rear component. The negative components strengthen the final group; the positive Lc element controls the image-side ray exit angle and is constrained by both high Abbe number and anomalous partial dispersion.

This design strategy is well aligned with the production Sony FE 12-24mm f/2.8 GM: a full-frame rectilinear ultra-wide zoom that combines 12 mm coverage, f/2.8 speed, a 0.28 m minimum focus distance, four double-sided aspherical elements, and a two-group floating focus system.

## Sources

- WO 2021/200206 A1, "Zoom Lens and Imaging Device," Sony Group Corporation / KATO Takuya. Tables 6-10 and 21 were used for the prescription, aspherical coefficients, variable gaps, and conditional-expression checks.
- Sony Asia Pacific, SEL1224GM specifications. Used for production focal length, aperture, full-frame format, minimum focus distance, maximum magnification, angle of view, element/group count, dimensions, and weight.
- Sony product page for SEL1224GM. Used for production special-element count and XD Linear Motor / floating-focus description.
- OHARA comparative table of recommended glasses. Used only for class-level equivalences among S-FPL53/FCD100 and S-FPL51/FCD1/N-PK52A families.
- Public manufacturer catalog families from OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita were checked for nd/νd matches; unmatched entries are labelled as such rather than forced into named catalog glasses.
