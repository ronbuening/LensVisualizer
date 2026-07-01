## Patent Reference and Design Identification

**Patent:** JP S57-64716A / JPS57-64716A  
**Application Number:** 昭55-141189  
**Filed:** October 9, 1980  
**Published:** April 20, 1982  
**Inventor:** Ikemori Keiji (池森敬二)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** レトロフォーカス型超広角レンズ / Retrofocus-type ultra-wide-angle lens  
**Classification:** G02B 13/04  
**Embodiment analyzed:** Sole numerical example

The patent contains one worked prescription. The numerical table is normalized to approximately $f = 1$ and the patent states a full field angle of $2ω = 114°$ and an aperture of F/2.8. The production match to the Canon New FD 14mm f/2.8L rests on convergent evidence: the prescription has 14 elements in 10 groups, one aspherical surface on the front surface of the second element, a 114° diagonal field, and an F/2.8 aperture. Canon's product page for the New FD14mm f/2.8L gives the same 10-group / 14-element construction, 0.25 m close-focus distance, July 1982 marketing date, and a ground-and-polished aspherical surface on the front side of the second element.

The table value for D23 is 0.206 in the patent images on pages 1 and 3. This value is consistent with the paraxial trace and the scaled axial track. Reading it as 2.026 would make the system track and effective focal length inconsistent with the stated $f = 1$ design.

## Optical Architecture

The lens is a retrofocus ultra-wide-angle construction with a negative front group and a positive rear group. The first group consists of four negative meniscus lenses, each convex toward the object. It has a computed focal length of −15.24 mm after scaling. This group creates the inverted-telephoto layout needed to provide a back focal distance far longer than the 14 mm effective focal length.

The second group contains ten elements in six air-spaced subgroups. Its computed focal length is +26.04 mm after scaling. In object-to-image order it consists of a positive cemented doublet G5 (L5+L6), a stronger positive cemented doublet G6 (L7+L8), a negative singlet L9 before the stop, a weak negative cemented doublet G8 (L10+L11) after the stop, a positive achromatizing rear doublet G9 (L12+L13), and a final high-index positive singlet L14.

The aperture stop lies in the D16 air space between R16 and R17. The patent table gives D16 as a single air gap, while the figure places the diaphragm inside the gap. The data file therefore splits D16 evenly to insert the `STO` surface. This does not change the paraxial power of the prescription.

After scaling the rounded patent prescription by 14.005381029, the effective focal length is 14.000 mm, the rear-vertex back focal distance is 36.99 mm, and the first-vertex to rear-vertex optical track is 84.21 mm. The back-focus ratio is therefore BFD/EFL = 2.64, which is the defining retrofocus property of this design.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

nd = 1.69680, νd = 55.5. Glass: LAC14 (Hoya). f = -102.01 mm.

L1 is the first divergent element and is responsible for the initial expansion and redirection of the oblique bundles entering the lens. The high index keeps the front curvature moderate for a large-diameter ultra-wide element. Its LAC14 glass is a lanthanum crown by six-digit code, not a low-dispersion special glass.

### L2 — Negative Meniscus with aspherical front surface

nd = 1.60311, νd = 60.7. Glass: BACD14 (Hoya). f = -1166.65 mm.

L2 is a weak negative meniscus. Its front surface R3 is the sole aspherical surface in the patent and in the production lens. Because this surface lies in the divergent front group, it operates where off-axis ray heights are large; the asphere can therefore act strongly on distortion and astigmatic field behavior while having comparatively less leverage over purely axial aberrations.

### L3 — Negative Meniscus, convex to object

nd = 1.69680, νd = 55.5. Glass: LAC14 (Hoya). f = -47.90 mm.

L3 supplies much of the negative power in the first group. It repeats the LAC14 glass used in L1, giving Canon a high-index crown material with a known dispersion contribution in the large front assembly.

### L4 — Negative Meniscus, convex to object

nd = 1.77250, νd = 49.6. Glass: TAF1 (Hoya). f = -42.75 mm.

L4 is the final element of the divergent group. Its higher index and lower Abbe number move it into dense lanthanum-flint territory, even though the index family is often described by lanthanum content rather than by crown/flint boundary. It completes the negative power distribution before the wide air gap leading into the positive rear group.

### L5+L6 — Cemented Doublet G5

L5: nd = 1.69680, νd = 55.5. Glass: LAC14 (Hoya). f = -19.81 mm.  
L6: nd = 1.59551, νd = 39.2. Glass: E-F8 (Hoya). f = +18.44 mm.

G5 has a computed focal length of +138.25 mm, so it is only weakly positive as a unit. Its role is not to carry most of the system power, but to begin the rear group's collection of the expanded beam while starting local chromatic and field balancing.

### L7+L8 — Cemented Doublet G6

L7: nd = 1.54814, νd = 45.8. Glass: E-FEL1 (Hoya; S-TIL1 equivalent). f = +17.12 mm.  
L8: nd = 1.77250, νd = 49.6. Glass: TAF1 (Hoya). f = -72.29 mm.

G6 is the principal positive-power subgroup of the rear assembly, with a computed focal length of +23.40 mm. L7 is strongly positive and L8 is a concavity-forward negative meniscus cemented behind it. The glass pairing is not a conventional crown/flint achromat; both Abbe numbers are in flint territory or near the boundary. Its primary function is power concentration and aberration balancing around the middle of the lens.

### L9 — Negative Meniscus, concave to object

nd = 1.77250, νd = 49.6. Glass: TAF1 (Hoya). f = -39.15 mm.

L9 is the pre-stop negative meniscus. The patent's prose emphasizes the use of concavity-forward negative meniscus forms in the rear group to suppress distortion and control astigmatism. Its placement before the stop gives it strong influence over field-dependent aberrations.

### L10+L11 — Cemented Doublet G8

L10: nd = 1.66680, νd = 33.0. Glass: dense flint 667/330, with modern CDGM H-ZF39 as a numerical equivalent. f = +33.78 mm.  
L11: nd = 1.62004, νd = 36.3. Glass: E-F2 (Hoya). f = -28.20 mm.

G8 has a computed focal length of -200.54 mm, making it a weak negative doublet despite the positive L10. Both members are flint glasses. The subgroup therefore functions chiefly as a post-stop field and zonal-aberration corrector rather than as a conventional achromat.

The L10 glass is best recorded as a 667/330 dense flint. Current CDGM H-ZF39 is an excellent numerical equivalent at nd = 1.66680 and νd ≈ 33.05, but that does not prove CDGM was the original supplier for a 1980 Canon design.

### L12+L13 — Cemented Doublet G9

L12: nd = 1.92286, νd = 21.3. Glass: E-FDS1 class (Hoya; patent νd retained). f = -28.67 mm.  
L13: nd = 1.48749, νd = 70.1. Glass: S-FSL5 (Ohara). f = +24.44 mm.

G9 has a computed focal length of +105.94 mm. Its Abbe-number separation is the largest in the lens, and it is the main chromatic-correction doublet in the rear group. L12's very high index and high dispersion are paired with the low-index fluorite crown L13.

### L14 — Biconvex Positive

nd = 1.80400, νd = 46.6. Glass: S-LAH65V (Ohara). f = +42.90 mm.

L14 is the final positive element. Its front radius is extremely weak and its rear radius carries most of the surface power. At this rear position, it contributes to field flattening and final image-space convergence while preserving the long back focus.

## Glass Identification and Selection

Glass names are catalog identifications by nd/νd match or six-digit code. They should not be read as proof of a named melt in the original Canon production unless Canon explicitly named the supplier. The Hoya cross-reference table is especially useful here because it records that six-digit codes are based on nd and νd and that nominally equivalent glasses across makers need not share identical composition.

| Element(s) | Patent nd | Patent νd | Identification used | Status |
|---|---:|---:|---|---|
| L1, L3, L5 | 1.69680 | 55.5 | LAC14 (Hoya) | Exact six-digit match, 697/555 |
| L2 | 1.60311 | 60.7 | BACD14 (Hoya) | Exact six-digit match, 603/607 |
| L4, L8, L9 | 1.77250 | 49.6 | TAF1 (Hoya) | Exact six-digit match, 773/496 |
| L6 | 1.59551 | 39.2 | E-F8 (Hoya) | Exact six-digit match, 596/392 |
| L7 | 1.54814 | 45.8 | E-FEL1 (Hoya; S-TIL1 equivalent) | Corrected to Hoya primary naming |
| L10 | 1.66680 | 33.0 | Dense flint 667/330; modern CDGM H-ZF39 equivalent | Historical supplier unconfirmed |
| L11 | 1.62004 | 36.3 | E-F2 (Hoya) | Exact six-digit match, 620/363 |
| L12 | 1.92286 | 21.3 | E-FDS1 class (Hoya) | nd exact; patent νd retained |
| L13 | 1.48749 | 70.1 | S-FSL5 (Ohara) | Best nd/νd match |
| L14 | 1.80400 | 46.6 | S-LAH65V (Ohara) | Exact nd, νd rounds to patent value |

The palette is dominated by high-index crowns and flints. The front group uses high index to control curvatures and package the large negative power. The rear group assigns chromatic correction mainly to G9, while G5, G6, and G8 are more concerned with power distribution, astigmatism, distortion, and zonal spherical-aberration balance.

## Focus Mechanism

The patent publishes only one spacing table, so it is an infinity-focus optical prescription. Canon's production description for the New FD14mm f/2.8L states that the lens uses a floating mechanism and gives a closest focusing distance of 0.25 m. Because no close-focus variable-gap table is present in JP S57-64716A, the data file does not invent floating-group travel. It records the verified infinity state and carries the production close-focus distance only as catalog metadata.

The earlier interpretation of this patent prescription as a unit-focus model is therefore too strong. The patent table can be treated as the infinity configuration of a production lens that used floating correction at close distances.

## Aspherical Surface

The only aspherical surface is R3, the front surface of L2. The patent gives the sag form:

$$
X = R[1 - (1 - H^2/R^2)^(1/2)] + AH^2 + BH^4 + CH^6 + DH^8 + EH^10
$$

The patent coefficient A is the $H^2$ term and is zero. There is no conic term, so the LensVisualizer data uses the standard spherical-base convention with K = 0 and stores the remaining terms as A4 through A10. At the production scale factor 14.005381029, the coefficients are:

| Data coefficient | Value |
|---|---:|
| K | 0 |
| A4 | 1.015592341423e-05 |
| A6 | 3.210491021308e-09 |
| A8 | -1.220464662922e-11 |
| A10 | 2.532240469025e-14 |

Canon's production description identifies the surface as a ground-and-polished aspherical glass surface on the front side of the second element. That is consistent with the patent placement and with the manufacturing period.

## Aberration Correction Strategy

The patent's correction strategy is built around three features: a strongly divergent front group, an asphere in that front group, and a rear group with multiple cemented subgroups. The front asphere is placed where off-axis bundles occupy large ray heights, making it efficient for distortion and field-aberration correction. The negative meniscus elements around the stop help control astigmatism and maintain the long back focus.

Chromatic correction is conventional rather than ED-based. G9 has the dominant Abbe separation: L12 at νd = 21.3 and L13 at νd = 70.1. G5 provides a smaller crown/flint pairing. G6 and G8 are not ordinary achromats; their glass pairings indicate field and spherical-aberration balancing roles.

The surface-by-surface Petzval sum is 0.105978 in normalized patent units. This corresponds to a Petzval radius of 132.15 mm after scaling. The design does not rely on a flat Petzval sum alone; the astigmatic field is shaped by the meniscus sequence and the rear cemented groups.

## Verification Summary

Independent paraxial ray tracing was rerun from the patent table before producing the data file.

| Quantity | Computed normalized | Scaled value |
|---|---:|---:|
| Effective focal length | 0.999615788 | 14.000 mm |
| Scale factor applied | — | 14.005381029× |
| R1-to-R24 vertex track | 6.013000 | 84.214 mm |
| Back focal distance from R24 | 2.640857090 | 36.986 mm |
| R1-to-image distance | 8.653857090 | 121.201 mm |
| Group I focal length | — | -15.244 mm |
| Group II focal length | — | +26.035 mm |
| Petzval sum | 0.105978 | 0.0075669 mm⁻¹ |
| Petzval radius | 9.436 normalized | 132.15 mm |

The data file uses inferred semi-diameters because the patent omits clear apertures. These were checked against the project constraints for rim slope, signed cross-gap sag, minimum edge thickness, and same-element semi-diameter ratios. They should be treated as rendering apertures, not as measured Canon mechanical apertures.

## Design Heritage and Context

The Canon New FD14mm f/2.8L belongs to the late manual-focus SLR generation of extreme rectilinear wide-angle lenses. Its design problem is not simply high field angle, but high field angle at F/2.8 while maintaining a back focus compatible with a 35 mm SLR mirror box. The large negative first group, the single polished glass asphere, and the high element count are all direct consequences of that problem.

The production lens was marketed in July 1982, close to the publication of JP S57-64716A. Canon's description explicitly emphasizes the second-element polished asphere and the floating mechanism, both of which are material to matching the patent to the production lens and to avoiding an over-literal unit-focus interpretation of the single patent prescription.

## Sources

- JP S57-64716A / JPS57-64716A, Canon Inc., published April 20, 1982. Primary source for the optical prescription, aspherical coefficients, and optical layout.
- Canon Camera Museum, "New FD14mm f/2.8L." Production source for 10-group / 14-element construction, July 1982 marketing date, closest focusing distance, 114° field description, polished aspherical glass surface, and floating-mechanism note. https://global.canon/en/c-museum/product/nfd195.html
- HOYA Optics Europe, "Glass Cross Reference Index." Source for six-digit glass-code conventions and Hoya/OHARA/SCHOTT/CDGM equivalence caveats. https://www.hoyaoptics.eu/glass-cross-reference-index
- OHARA Corporation, S-FSL5 and S-LAH65V catalog pages. Sources for nd/νd confirmation of L13 and L14.
- CDGM optical glass data sheet, H-ZF39. Numerical equivalent for the L10 dense flint code 667/330.
