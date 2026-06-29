## Patent Reference and Design Identification

**Patent:** DE 1 228 820 B (Auslegeschrift)  
**Application Number:** E 19956 IX a/42 h  
**Filed:** 22 September 1960  
**Published:** 17 November 1966  
**Inventor:** Hans Lautenbacher, München  
**Applicant:** Enna-Werk Optische Anstalt Dr. Appelt K.G., München  
**Title:** Fotografisches Retrofocus-Objektiv  
**Embodiment analyzed:** Sole claimed prescription

DE 1 228 820 B describes a photographic retrofocus objective for single-lens reflex cameras. The patent publishes a single worked prescription in the claim itself, normalized to $f = 100$. A uniform scale factor of 0.24 maps the prescription to a 24 mm production focal length.

The identification as the Enna München Lithagon 24 mm f/4 rests on the following convergent points:

1. The patent prescription has seven air-spaced elements in seven groups, matching the published collector descriptions of the Lithagon 24 mm f/4 optical construction.
2. The patent gives $f = 100$ and an aperture ratio of 1:4.0. Scaling by 0.24 gives $f \approx 24.0$ mm at f/4.
3. The patent gives a field angle of 85°. A rectilinear 24 mm lens on the 36 x 24 mm format has a diagonal field close to this value.
4. The patent gives a back focal distance $s' = 150.73$ at $f = 100$, or 36.18 mm after scaling. This is the defining retrofocus feature needed for SLR mirror clearance.
5. The applicant is Enna-Werk of Munich and the inventor is Hans Lautenbacher. The filing date of 1960 is consistent with the period in which Enna sold the Lithagon 24 mm f/4 in Exakta and M42-type SLR mounts.

There is no alternate numerical example in the patent. The data file therefore transcribes the sole prescription, with two explicit modeling additions: a modeled aperture-stop position and estimated semi-diameters. The patent neither tabulates clear apertures nor explicitly marks an aperture stop in the drawing.

## Optical Architecture

The design is a seven-element all-spherical retrofocus wide-angle lens. The patent drawing divides the system into three functional parts: front group F, middle group M, and rear main group H.

Group F consists of L1 and L2, two separated negative menisci convex to the object. It has a computed focal length of $-105.23$ at the patent normalization. Its purpose is to create the diverging front section of the inverted-telephoto layout and move the rear focal point well behind the last glass surface.

Group M is the single positive meniscus L3. It has a computed focal length of $+312.46$ and partly recovers the divergence from the front group before the ray bundle reaches the rear main group.

Group H consists of L4 through L7 and has a computed focal length of $+148.38$. L4 and L5 form a closely spaced positive pair, L6 is a strong biconcave dense flint, and L7 is the final positive element. In power distribution this rear group resembles a modified triplet, with the front positive component split into two air-spaced lenses.

The total first-surface-to-image distance is 393.53 at the patent normalization, or 94.45 mm at 24 mm scale. The scaled back focal distance is 36.18 mm, giving $s'/f = 1.507$. The lens is therefore retrofocus in the strict sense: its back focal distance substantially exceeds its effective focal length.

The patent does not state the aperture-stop location, and the drawing does not explicitly mark the diaphragm. The data file therefore uses a modeling stop in the large $l_3$ air gap between L3 and L4, near the front of the rear main group by conventional retrofocus practice. This splits the scaled $l_3 = 10.416$ mm gap into 8.496 mm before the stop and 1.920 mm after the stop. The chosen stop semi-diameter gives an entrance pupil diameter of approximately 6.00 mm and an f/4 aperture at the computed effective focal length.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object

$nd = 1.51680$, $\nu_d = 64.2$. Glass: N-BK7 (Schott). $f = -59.29$ mm at 24 mm scale.

L1 is the first element of the front diverging section. Both radii are positive, so the element is a negative meniscus with its concave side facing the image. The relatively low-index, high-Abbe crown glass keeps dispersion modest in the large front element while contributing the first share of the retrofocus negative power.

### L2 - Negative Meniscus, convex to object

$nd = 1.62041$, $\nu_d = 60.3$. Glass: N-SK16 (Schott). $f = -49.79$ mm at 24 mm scale.

L2 is the second element of group F, separated from L1 by the large $l_1$ air space. Its very long first radius and shorter second radius make it a negative meniscus with a nearly plano front surface in optical effect. The higher index compared with L1 allows stronger negative power with less extreme curvature.

The combined front group contributes a negative Petzval term of -0.00573 at the patent normalization, which helps cancel the positive Petzval terms from the rear positive elements.

### L3 - Positive Meniscus, concave to object

$nd = 1.62536$, $\nu_d = 35.6$. Glass: H-F6/F6 (CDGM equivalent), 625/356 vintage flint; historical Schott name unconfirmed. $f = +74.99$ mm at 24 mm scale.

L3 is the only element of group M. Both radii are negative, forming a positive meniscus concave to the object. It is weak compared with the rear group, but its location after the two negative menisci gives it an important beam-conditioning role.

The six-digit code 625/356 should not be converted into an asserted historical Schott glass name without a primary catalog match. Current CDGM catalogs list F6 and H-F6 entries at the same index and Abbe number, so the data file uses CDGM H-F6 as a current-equivalent dispersion source while leaving the actual 1960 German glass name unconfirmed.

### L4 - Biconvex Positive

$nd = 1.51895$, $\nu_d = 57.3$. Glass: 519/573 vintage crown class; exact catalog name unconfirmed. $f = +48.88$ mm at 24 mm scale.

L4 is the first positive element of group H. Its biconvex form distributes positive power across both surfaces and begins the convergence of the main rear system. It is closely followed by L5, separated by only 0.264 mm after scaling.

No exact current catalog match was located for the 519/573 pair in the authoritative modern glass catalogs checked for this review. The data file therefore labels L4 by its six-digit code and vintage crown class rather than assigning a specific historical Schott name.

### L5 - Positive Meniscus, convex to object

$nd = 1.62374$, $\nu_d = 47.0$. Glass: J-BAF8 (Hikari equivalent), 624/470 barium-flint class. $f = +47.02$ mm at 24 mm scale.

L5 is the second member of the split front positive component of the rear main group. The steep positive first radius gives it the strongest positive surface in the system. Its barium-flint glass has higher dispersion than L4 but also higher refractive index, allowing compact positive power in the short air-spaced pair.

### L6 - Biconcave Negative

$nd = 1.78470$, $\nu_d = 26.1$. Glass: SF56A (Schott). $f = -16.02$ mm at 24 mm scale.

L6 is the strongest individual element in the prescription. It is a thick biconcave dense flint, with a scaled center thickness of 8.16 mm. Its high index and low Abbe number make it the main dispersive negative element of the rear group.

Its Petzval contribution is also large and negative: -0.00795 at the patent normalization. This is the largest single negative Petzval term in the design and is essential to the system's field-curvature balance.

### L7 - Biconvex Positive

$nd = 1.60801$, $\nu_d = 46.2$. Glass: H-BaF6 (CDGM equivalent), 608/462 barium-flint class. $f = +23.87$ mm at 24 mm scale.

L7 is the final positive element. Its first surface is weak and its rear surface is steep, making the rear surface the dominant contributor to the final convergence and the exit-pupil geometry.

The numerical pair $nd = 1.60801$, $\nu_d = 46.2$ is an exact current-catalog match to CDGM H-BaF6. The element is therefore identified as an H-BaF6 / 608/462-equivalent barium flint, with no asserted exact modern Schott match.

## Glass Identification and Selection

| Element | $nd$ | $\nu_d$ | Glass identification | Status |
|---|---:|---:|---|---|
| L1 | 1.51680 | 64.2 | N-BK7 (Schott) | Exact current Schott match |
| L2 | 1.62041 | 60.3 | N-SK16 (Schott) | Exact current Schott match |
| L3 | 1.62536 | 35.6 | H-F6/F6 (CDGM equivalent), 625/356 vintage flint | Exact current CDGM equivalent; historical name unconfirmed |
| L4 | 1.51895 | 57.3 | 519/573 vintage crown class | No current exact catalog match located; historical name unconfirmed |
| L5 | 1.62374 | 47.0 | J-BAF8 (Hikari equivalent), 624/470 barium-flint class | Exact current Hikari-equivalent code match |
| L6 | 1.78470 | 26.1 | SF56A (Schott) | Exact current Schott match |
| L7 | 1.60801 | 46.2 | H-BaF6 (CDGM equivalent), 608/462 barium-flint class | Exact current CDGM-equivalent match; not an exact current Schott match |

The glass palette is consistent with a German optical design from the beginning of the 1960s. It uses classical crown, dense crown, barium-flint, and dense-flint glasses. There are no ED, fluorite, anomalous partial-dispersion, or aspherical components.

The chromatic strategy is conventional but carefully distributed. The two front negative elements use low-dispersion crown glasses. L3 introduces a positive flint contribution before the rear main group. In group H, L4 and L5 provide positive power, L6 supplies the dominant negative dense-flint correction, and L7 completes the final convergence. A thin-lens chromatic-power sum computed from the prescription gives approximately -0.000215 at the patent normalization, indicating a slight residual imbalance rather than apochromatic correction.

## Focus Mechanism

The patent gives only the infinity-focus prescription and does not describe a focusing mechanism. Production lenses are modeled as unit-focus lenses: the entire optical unit translates forward for closer focus, which is equivalent in the data file to increasing only the final back-focus gap.

The data file uses a documented production close-focus distance of 0.25 m as the close-focus endpoint. Solving the first-surface-to-object geometry for unit focus gives a scaled close-focus back focal distance of 39.750 mm, compared with 36.175 mm at infinity. The corresponding extension is 3.575 mm and the approximate transverse magnification is 0.149x. Because surviving Enna/Revue variants are documented with more than one close-focus specification, this value should be treated as a production-model approximation rather than a number published by the patent.

| Focus state | Back focal distance | Notes |
|---|---:|---|
| Infinity | 36.175 mm | Computed from the prescription; patent gives rounded $s' = 150.73$ |
| 0.25 m modeled close focus | 39.750 mm | Unit-focus solution, not patent-published |

## Verification Summary

The prescription was re-entered from the rendered patent page and verified by an independent paraxial ray trace using the $(y, n u)$ convention. Radii and spacings in this table are at the patent normalization unless otherwise noted.

| Quantity | Patent value | Computed value | Comment |
|---|---:|---:|---|
| Effective focal length | 100.00 | 100.00085 | Matches patent normalization |
| Scaled effective focal length | 24.00 mm | 24.00020 mm | Scale factor 0.24 |
| Back focal distance | 150.73 | 150.73060 | Matches patent $s'$ |
| Scaled back focal distance | 36.175 mm | 36.17534 mm | Data-file infinity BF |
| Aperture ratio | 1:4.0 | f/4.0 | Stop modeled; entrance pupil set by ray trace |
| Patent field angle | 85° | 84.1° geometric diagonal for 24 mm on 36 x 24 mm | Consistent within vintage rounding |
| Total first-surface-to-image distance | - | 393.53 | 94.45 mm after scaling |
| Group F focal length | - | -105.23 | L1-L2 with $l_1$ included |
| Group M focal length | - | +312.46 | L3 alone |
| Group H focal length | - | +148.38 | L4-L7 with internal air gaps |
| Petzval sum | - | +0.0008438 | Surface-by-surface $\phi/(n n')$ calculation |
| Petzval radius | - | 1185.1 | About 11.85x EFL |

The Petzval balance is not simply a large positive rear block opposed by the front group. The surface-by-surface decomposition is: L1 -0.00275, L2 -0.00299, L3 +0.00194, L4 +0.00326, L5 +0.00305, L6 -0.00795, and L7 +0.00628. Thus L6's strong negative Petzval term is inside group H and substantially cancels the positive terms from L4, L5, and L7. Group H remains net positive at +0.00463, while the total system is +0.0008438.

## Design Heritage and Context

DE 1 228 820 B is explicitly framed as an improvement over earlier retrofocus objectives whose image angle was limited to about 75° or whose back focal distance did not reach 1.4 times the focal length. The claimed design reaches an 85° field and $s'/f = 1.507$ while retaining a seven-element all-spherical construction.

The form is a period-typical inverted-telephoto wide-angle: two front negative menisci, a weak positive relay, and a triplet-like rear main system. Its interest lies less in exotic materials than in the spacing and Petzval balancing needed to make a 24 mm SLR lens possible with conventional glass types.

## Sources

- DE 1 228 820 B, "Fotografisches Retrofocus-Objektiv," Enna-Werk Optische Anstalt Dr. Appelt K.G.; filed 22 September 1960, published 17 November 1966. Primary source for prescription, field angle, aperture ratio, and back focal distance.
- SCHOTT optical glass datasheets for N-BK7, N-SK16, and SF56A. Primary catalog confirmation for L1, L2, and L6.
- HOYA Glass Cross Reference Index. Used for six-digit code interpretation and for the caveat that cross-reference codes do not prove identical glass composition.
- CDGM H-F6/F6 and H-BaF6 catalog data. Used for the L3 and L7 current-equivalent checks.
- Hikari general optical glass catalog data for J-BAF8. Used for the L5 current-equivalent check.
- Enrico Savazzi, "Enna Lithagon 24 mm, 28 mm and 35 mm." Secondary production-context source for Enna 24 mm f/4, 28 mm f/3.5, and 35 mm f/3.5 Lithagon variants and mounts.
- A7Camera, "Enna Lithagon 24/4." Secondary production-sample source for one Exakta-mount sample specification, including 0.25 m minimum focus.
