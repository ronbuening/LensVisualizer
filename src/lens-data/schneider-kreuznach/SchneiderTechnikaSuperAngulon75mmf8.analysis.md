## Patent Reference and Design Identification

**Patent:** JP S42-023896 (特公 昭42-23896)\
**Application Number:** 昭30-22649; German priority application Sch 16212\
**Filed:** August 25, 1955 (Japan); priority August 31, 1954 (Germany)\
**Published:** November 17, 1967\
**Inventor:** Günter Klemt\
**Assignee:** Jos. Schneider & Co., Optische Werke, Kreuznach\
**Title:** 大なる像角効率を有する光学系 (*Optical system with large effective image angle*)\
**US counterpart:** US 2,781,695, granted February 19, 1957\
**Embodiment analyzed:** Numerical Example 1

The patent gives two related six-element, four-group, f/8 prescriptions normalized to $f' = 100$. Numerical Example 1 is transcribed because its independently computed effective focal length and back focal distance, 100.0113 mm and 73.4023 mm, reproduce the printed values $f' = 100$ and $S = 73.4$ more closely than Numerical Example 2. Example 2 computes to 100.1488 mm and 73.5447 mm. Its tabulated spacings sum to 81.21, although the adjacent prose on patent page 2 prints 79.21; that prose value is an internal typographical error.[1]

The identification with the **Technika Super-Angulon 75 mm f/8** is strong at the patent-family level but does not prove that Example 1 is the exact factory prescription:

1. The patent and Schneider's f/8 Super-Angulon literature both describe an almost symmetric six-element, four-component wide-angle design.[1][2][3]
2. Linhof literature lists the production name “Technika Super-Angulon 75 mm 1:8.”[4]
3. Schneider's technical table gives 75 mm as the engraved focal length and 76.5 mm as the effective focal length. The data file therefore applies a uniform scale factor of 0.765 to the patent prescription.[3]
4. The scaled patent model computes to $f' = 76.5087$ mm. Its 56.1528 mm back focal distance is 0.6528 mm longer than Schneider's published 55.5 mm, a material residual that argues against presenting the numerical example as a demonstrated factory prescription.[3]

Coverage requires a further distinction. Patent Figure 2 plots the Example 1 aberrations at f/8 through 50° half-field, corresponding to an approximately 100° design field.[1] Schneider's production brochure specifies 92° and a 156.4 mm image circle at full aperture, increasing to 100° and 180.0 mm at f/22.[3] With $f = 76.5$ mm, the ideal rectilinear diameters are 158.44 mm at 92° and 182.34 mm at 100°; the close but non-identical brochure values are practical coverage specifications, not exact paraxial conversions.

## Optical Architecture

The design is a quasi-symmetric wide-angle objective with four air-separated components and a negative-positive-positive-negative group-power sequence. Negative meniscus singlets flank two positive cemented doublets. The patent cites M. M. Roossinov's earlier wide-angle patent, so “Roossinov-related” is an appropriate historical description; it is not the patent's formal type name.[2]

The prescription contains six glass elements, four groups, ten refracting surfaces, and no aspheres. The aperture stop lies in the air space $d_5$ between $r_5$ and $r_6$. The numerical table identifies $d_5$ as the diaphragm space, while Figure 1 on patent page 4 draws the iris between the two inner doublets.[1] Because the table does not divide the 2.57-unit gap, the data file places `STO` at its midpoint as an explicit geometric inference.

The four groups are:

- **Group I - L1:** a negative outer meniscus that redirects the broad object-side field bundle toward the first cemented group.
- **Group II - L2 + L3:** a net-positive cemented doublet. L2 is a nearly concentric, high-dispersion negative member; L3 is a positive member whose stop-facing surface is nearly plane.
- **Group III - L4 + L5:** a net-positive cemented doublet on the image side of the stop. L4 is plano-convex; L5 is a nearly concentric, high-dispersion negative member.
- **Group IV - L6:** a negative outer meniscus completing the broad quasi-symmetric field structure.

The symmetry is evident in the identical outer-glass data, identical SF1 negative members, equal normalized air spaces $d_2 = d_8 = 15.22$, and nearly equal cemented radii $r_4 = +14.02$ and $r_7 = -14.08$. It is not exact: the two positive members use different optical positions, the cemented groups have unequal thicknesses, and the weak outer radii differ. That residual asymmetry adapts the stop-centered cancellation of odd-order aberrations to an object at infinity and a finite image conjugate.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex toward the object

nd = 1.4645, νd = 65.7. Glass: FK3 (Schott), inquiry/legacy fluor crown. f = -43.62 mm at production scale.

L1 has a weak front radius and a much steeper rear radius. Its negative power forms part of the complete wide-angle power distribution, while its steep inner face redirects the wide off-axis bundle into Group II. The refractive index satisfies the patent's $n_d < 1.5$ requirement for the two outer menisci.[1][2]

“Fluor crown” is a Schott glass-family designation; it does not imply crystalline fluorite.

### L2 - Nearly Concentric Negative Meniscus, front member of Group II

nd = 1.7174, νd = 29.5. Glass: SF1 (Schott), dense flint. f = -55.43 mm at production scale.

L2 is thick, high-index, and strongly dispersive. At its cemented rear surface $r_4$, the index changes from 1.7174 to 1.5601, giving an index step of 0.1573. The normalized concentricity residual is $r_3-(r_4+d_3)=0.41$ mm, consistent with the patent's description of an approximately concentric negative component.[1][2]

Its standalone in-air focal length is not its in-situ contribution inside the cemented doublet. The complete L2+L3 group has a positive production-scale focal length of +41.3256 mm.

### L3 - Nearly Plano-Convex Positive, rear member of Group II

nd = 1.5601, νd = 47.0. Glass annotation: unmatched Schott legacy light-flint position 560/470; LLF3-class soft match. f = +19.34 mm at production scale.

L3's strongly curved cemented surface $r_4$ carries nearly all of its positive power because the stop-facing rear surface $r_5=+1045.94$ is almost plane. This matches the patent's description of the positive inner components as substantially plano-convex with their nearly plane sides adjoining the diaphragm space.[1][2]

The patent gives only $n_d$ and $\nu_d$, not a glass name. A historical LLF3-class association is plausible from the optical position, but it is not treated as a secure primary-catalog identification in the data file.

### L4 - Plano-Convex Positive, front member of Group III

nd = 1.5827, νd = 46.5. Glass annotation: unmatched Schott legacy barium-flint position 583/465; modern N-BAF3 is the nearest Schott catalog position. f = +18.48 mm at production scale.

L4 begins at the plane surface $r_6$ and ends at the strongly curved cemented interface $r_7$. The stop is in the preceding air space rather than on $r_6$. Since the plane front surface has zero paraxial power, L4's positive standalone power is concentrated at the cemented rear surface.

The optical position closely matches modern Schott N-BAF3 $(n_d=1.58272,\ \nu_d=46.64)$, but a modern reformulated name is not substituted for an unverified patent-era Schott glass designation.[6]

### L5 - Nearly Concentric Negative Meniscus, rear member of Group III

nd = 1.7174, νd = 29.5. Glass: SF1 (Schott), dense flint. f = -48.71 mm at production scale.

L5 is the image-side counterpart to L2. At $r_7$, the index changes from 1.5827 to 1.7174, giving an index step of 0.1347. The normalized concentricity residual $|r_8|-(|r_7|+d_7)$ is 1.98 mm. Both the index step and the meniscus geometry satisfy the patent's stated structure.[1][2]

The complete L4+L5 group has a positive production-scale focal length of +40.8812 mm even though L5's standalone focal length is negative.

### L6 - Negative Meniscus, concave toward the object

nd = 1.4645, νd = 65.7. Glass: FK3 (Schott), inquiry/legacy fluor crown. f = -41.74 mm at production scale.

L6 completes the outer negative pair. Its steep front radius nearly mirrors L1's steep rear radius, while its weak rear radius departs more substantially from L1's weak front radius. The element satisfies the same $n_d<1.5$ patent condition as L1 and limits the chromatic burden associated with the outer negative power.[1][2]

## Glass Identification and Selection

The patent states that its calculations use Schott catalog glass types, but its numerical examples print only $n_d$ and $\nu_d$.[1] The data-file annotations therefore distinguish secure catalog matches from optical-position comparisons.

| Optical position | Elements | Classification | Catalog assessment |
|---|---|---|---|
| 1.4645 / 65.7 | L1, L6 | Fluor crown | Secure FK3 match; FK3 remains listed by Schott as an inquiry glass.[5] |
| 1.7174 / 29.5 | L2, L5 | Dense flint | Secure SF1 match; Schott's legacy SF1 entry is 1.71736 / 29.51.[6] |
| 1.5601 / 47.0 | L3 | Light flint | LLF3-class soft match at approximately 560/470; stored as `Unmatched` because a patent-era primary Schott catalog page was not recovered. |
| 1.5827 / 46.5 | L4 | Barium flint | Secure BAF3-class position: Hikari J-BAF3 is 1.58267 / 46.48 and modern Schott N-BAF3 is 1.58272 / 46.64; the patent-era supplier remains unverified.[6] |

The chromatic strategy is classical achromatization rather than apochromatic correction. Each inner net-positive group combines a highly dispersive SF1 negative member with a less dispersive positive member. The outer FK3 menisci have the largest Abbe number and therefore impose a smaller chromatic penalty for their negative power. No anomalous-partial-dispersion or secondary-spectrum claim is made because the patent publishes no line indices or partial-dispersion data.

## Focus Mechanism

The production lens is focused by translating the complete lens relative to the film plane with the view camera's front standard and bellows. The patent contains no internal, rear, or floating focus movement.

The patent gives only the infinity configuration. A view-camera lens therefore has no lens-intrinsic minimum focus distance; the practical limit depends on bellows extension and camera geometry. The data file uses 0.75 m as a declared visualization endpoint, measured from object plane to image plane rather than as a manufacturer specification. Solving the paraxial conjugate condition gives an object-to-first-vertex distance of 621.8573 mm and a back focal distance of 66.5755 mm. Relative to the 56.1528 mm infinity BFD, the required extension is 10.4227 mm.

## Air Lenses

The patent treats the air spaces $d_2$ and $d_8$ as positive-meniscus-shaped air lenses. Their curved boundaries are formed by the steep inner surfaces of the outer negative menisci and the outer surfaces of the cemented groups. Their combined normalized center thickness is 30.44, or 30.44% of the focal length, inside the claimed 20-40% interval.[1][2]

These air lenses are not merely mechanical clearances. They participate in the power distribution and help balance the broad field while maintaining the patent's short 80.48-unit physical construction length.

## Conditional Expressions

The patent conditions were recalculated from Numerical Example 1.

**1. Physical length no greater than 85% of focal length**

$$
\frac{\sum d}{f'}=\frac{80.48}{100}=0.8048 \le 0.85.
$$

Equivalently, the construction is 19.52% shorter than the focal length.

**2. Each inner cemented group at least 25% of physical length**

$$
\frac{d_3+d_4}{\sum d}=\frac{22.11}{80.48}=0.27473,
\qquad
\frac{d_6+d_7}{\sum d}=\frac{21.02}{80.48}=0.26118.
$$

**3. Positive-meniscus air spaces between 20% and 40% of focal length**

$$
\frac{d_2+d_8}{f'}=\frac{15.22+15.22}{100}=0.3044.
$$

**4. Outer-meniscus refractive index below 1.5**

Both outer elements have $n_d=1.4645$.

**5. Negative cemented-member refractive index above 1.7**

Both negative doublet members have $n_d=1.7174$.

**6. Cemented-interface index step greater than 0.12**

$$
|1.7174-1.5601|=0.1573,
\qquad
|1.7174-1.5827|=0.1347.
$$

**7. Prescribed inner-group geometry**

L2 and L5 are negative, approximately concentric menisci with their concave sides facing the diaphragm space. L3 and L4 are positive, approximately plano-convex elements whose plane or nearly plane sides face that space. The printed radii and thicknesses conform to those qualitative claim limitations.[1][2]

## Verification Summary

The prescription was independently re-entered and traced with reduced-angle ABCD matrices. Radii, center thicknesses, air spaces, and refractive indices were taken directly from the patent table.

| Quantity | Patent Example 1 | Computed, normalized | Computed after ×0.765 scaling |
|---|---:|---:|---:|
| Effective focal length | 100 | 100.0113 mm | 76.5087 mm |
| Back focal distance | 73.4 | 73.4023 mm | 56.1528 mm |
| Physical construction length, $\sum d_1^9$ | 80.48 | 80.4800 mm | 61.5672 mm |
| First vertex to image plane | - | 153.8823 mm | 117.7200 mm |

The 61.5672 mm scaled construction length runs from the first to the last refracting vertex. The 117.7200 mm first-vertex-to-image distance additionally includes the 56.1528 mm BFD.

Numerical Example 2 was independently cross-checked as a transcription control:

| Quantity | Printed | Computed |
|---|---:|---:|
| Effective focal length | 100 | 100.1488 mm |
| Back focal distance | 73.4 | 73.5447 mm |
| Sum of tabulated spacings | 81.21 | 81.2100 mm |
| Physical length in adjacent prose | 79.21 | inconsistent with the table |

Standalone and cemented-group focal lengths are:

| Component | Normalized focal length | Production-scale focal length |
|---|---:|---:|
| L1 / Group I | -57.0161 mm | -43.6173 mm |
| Group II, L2 + L3 cemented | +54.0204 mm | +41.3256 mm |
| Group III, L4 + L5 cemented | +53.4394 mm | +40.8812 mm |
| L6 / Group IV | -54.5634 mm | -41.7410 mm |
| Front half | +225.3998 mm | +172.4309 mm |
| Rear half | +224.4431 mm | +171.6989 mm |

The near equality of the front- and rear-half focal lengths quantifies the quasi-symmetry.

The Petzval sum was recomputed surface by surface:

$$
P=\sum_i\frac{\phi_i}{n_i n'_i}
 =\sum_i\frac{n'_i-n_i}{R_i n_i n'_i}.
$$

The normalized value is $-7.58371\times10^{-4}\ \mathrm{mm}^{-1}$; after scaling it is $-9.91335\times10^{-4}\ \mathrm{mm}^{-1}$. The corresponding signed Petzval radii are -1318.62 mm and -1008.74 mm. These are Petzval-curvature quantities only and do not replace the patent's sagittal and tangential astigmatic-field curves.

The midpoint stop radius required for f/8 is 5.288623 mm. The traced entrance-pupil radius is 4.781791 mm, giving $76.508658/(2\times4.781791)=8.000000$.

## Clear-Aperture Reconstruction

The patent gives no clear apertures or semi-diameters. The data-file values are therefore inferred, not transcribed. Their relative steps follow the rim heights in Figure 1: the outer menisci are largest, the cemented groups narrow inward, and the stop-facing faces are distinctly smaller. Exact spherical tracing and separate geometry tests then constrain that drawing-led reconstruction.

The production operating points used for the reconstruction are:

- f/8 at 46° half-field, matching Schneider's 92° full-aperture rating;
- f/22 at 50° half-field, matching Schneider's 100° stopped-down rating.[3]

Patent Figure 2 itself reaches 50° at f/8.[1] The difference is intentional: the patent describes the aberration design field, while the brochure states practical production coverage. The reconstructed apertures pass the complete sampled pupil at the viewer's 30° field. At 46° and 50°, the chief ray and a substantial pupil interval remain traceable while the extreme samples vignette, as expected from a drawing-shaped clear-aperture estimate rather than a factory mechanical prescription.

The selected apertures satisfy the project geometry limits:

| Check | Verified result |
|---|---:|
| Maximum $sd/|R|$ | 0.895646 |
| Maximum same-element SD ratio | 1.660870 |
| Minimum computed edge thickness | 6.124532 mm |
| Maximum signed cross-gap sag intrusion | 5.0500% of the gap |

These semi-diameters are a physically constrained reconstruction, not a claim about Schneider's factory edge diameters.

## Sources

1. JP S42-023896 (特公 昭42-23896), Günter Klemt / Jos. Schneider & Co., published November 17, 1967. Attached seven-page patent scan; examples on pages 1-2, claims on page 3, section drawing on page 4, and aberration plots on pages 5-7.
2. Günter Klemt, US 2,781,695, *Optical System with Large Effective Image Angle*, granted February 19, 1957. https://patents.google.com/patent/US2781695A/en
3. Jos. Schneider & Co., *Super-Angulon* technical brochure, 1976; f/8 construction and coverage table on pages 1-2, 75 mm f/8 technical-data row on page 4. https://www.pacificrimcamera.com/rl/02156/02156.pdf
4. Linhof, *Super Technika IV/V* literature, listing the Technika Super-Angulon 75 mm f/8. https://linhof.com/wp-content/uploads/2021/05/1964_Linhof_Super_Technika_IV-V_ga.pdf
5. SCHOTT, *Optical Glass Datasheet Collection of Inquiry Glasses*, FK3 entry. https://media.schott.com/api/public/content/1d833344084d4c21852de588600f6bb1?download=true
6. SCHOTT, *Optical Glass* catalog, 2003; legacy SF1 and N-BAF3 optical positions. https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/catalog_optical_glass_complete_2003.pdf
