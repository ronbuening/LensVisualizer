# Schneider Super-Angulon 75mm f/5.6 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 3,376,091, "Compact Wide-Angle Camera Objective"
**Applicant:** Jos. Schneider & Co. Optische Werke, Kreuznach (Rhineland), Germany
**Inventors:** Werner Wagner (Odernheim, Glan) and Karl Heinrich Macher (Bad Kreuznach)
**Filed:** August 12, 1964 (US Ser. No. 388,997)
**Priority:** August 14, 1963 (Germany, Sch 33,712)
**Granted:** April 2, 1968

**Embodiment analyzed:** Table I (Example 1), which defines an objective system with an aperture ratio of 1:5.6, an overall focal length of 100 linear units, an effective field angle of 100°, and a back-focal length $s' = 68.46$ units. The total axial length $d_\text{total} = 100.56$ units.

The Table I embodiment is identified as the design basis for the Schneider-Kreuznach Super-Angulon 75mm f/5.6 large-format lens by convergent evidence:

1. **Element and group count.** The patent design is 8 elements in 4 groups; the production Super-Angulon f/5.6 series is documented as 8 elements in 4 groups.
2. **Aperture.** The patent specifies f/5.6, matching the production lens exactly.
3. **Field angle.** The patent claims an effective field angle of 100°. Schneider's published specifications list the Super-Angulon f/5.6 series at 105° coverage at f/22, with somewhat narrower coverage (~92°) at full aperture — consistent with the patent's 100° design target.
4. **Image circle.** At $f = 75\text{ mm}$, the patent's 100° field produces a theoretical image circle diameter of approximately 179 mm. The Schneider specification for the production 75mm f/5.6 lists an image circle of 198 mm at f/22, reflecting the additional coverage gained by stopping down.
5. **Compact total track.** The patent's total track $d_\text{total} = 100.56$ approximately equals the focal length (100 units), a key improvement claimed in the patent text. Scaling to $f = 75\text{ mm}$ gives a total track of approximately 75.4 mm.
6. **Design heritage.** The patent explicitly cites prior Schneider designs: US 2,781,695 (Klemt, 1957; the original f/8 Super-Angulon family), US 2,897,725 (Klemt & Macher, 1959; f/4 improvement), and US 3,209,649 (Macher, 1965; f/3.4 variant). This patent represents the compact f/5.6 variant of the same lineage.
7. **Patent timing.** Filed August 1963/1964 with a 1968 grant date, consistent with the mid-1960s introduction of the f/5.6 Super-Angulon series.

The production lens was manufactured in 75 mm, 90 mm, 65 mm, and 47 mm focal lengths. These are understood to be scaled from the same normalized $f = 100$ design — a standard practice for large-format lens families, where the fundamental optical characteristics (f-number, field angle, aberration correction) are preserved by uniform scaling, with minor adjustments for glass availability and mechanical constraints. The 75 mm variant corresponds to a uniform scale factor of $0.75\times$ applied to all radii, thicknesses, and semi-diameters.

---

## Optical Architecture

The design is a **quasi-symmetric wide-angle objective** consisting of four air-spaced groups arranged around a central diaphragm:

- **Group I** (front dispersive singlet): a single negative meniscus (L1)
- **Group II** (front collective triplet): a cemented triplet comprising an outer negative (L2), a central positive (L3), and an inner negative (L4)
- **Diaphragm** (between Groups II and III)
- **Group III** (rear collective triplet): a cemented triplet comprising an inner negative (L5), a central positive (L6), and an outer negative (L7)
- **Group IV** (rear dispersive singlet): a single negative meniscus (L8)

The power distribution is **negative–positive–positive–negative**, with the outer menisci acting as field-flattening dispersive elements and the cemented triplets providing the net positive refractive power. The measured group focal lengths (thick-group, standalone in air) from the patent prescription are:

| Group | Components | Focal Length |
|-------|-----------|-------------|
| I | L1 | $f = -70.9$ |
| II | L2 + L3 + L4 | $f = +58.7$ |
| III | L5 + L6 + L7 | $f = +60.3$ |
| IV | L8 | $f = -63.5$ |

The near-symmetry about the diaphragm is deliberate: it suppresses odd-order aberrations (coma, distortion, lateral color) by mutual cancellation between the front and rear halves of the system. The design is not perfectly symmetric — the glass selections, Abbe numbers, and curvatures of the front and rear halves differ intentionally to satisfy the additional patent constraints on compactness and chromatic correction. This quasi-symmetry is a hallmark of the Schneider Super-Angulon family, distinguishing it from fully symmetric ancestors such as the Goerz Dagor.

**Verified paraxial parameters** (computed via ABCD matrix ray trace from the Table I prescription):

| Parameter | Computed | Patent | Discrepancy |
|-----------|----------|--------|-------------|
| EFL | 100.11 | 100.00 | 0.11% |
| BFD ($s'$) | 67.83 | 68.46 | 0.92% |
| Total track ($d_\text{total}$) | 100.56 | 100.56 | exact |
| Petzval sum | $+0.000105$ | — | — |

The small EFL and BFD discrepancies are consistent with rounding in the patent's prescription values (radii and refractive indices are given to five significant figures, thicknesses to two decimal places). The total track matches exactly.

The Petzval sum is effectively zero ($1/R_P \approx 9{,}493$ for $f = 100$), confirming an extremely flat field — essential for a large-format lens covering 4×5 sheet film with camera movements.

---

## Aspherical Surfaces

**The design contains no aspherical surfaces.** All twelve optical surfaces in the Table I prescription are purely spherical. The patent text makes no mention of aspherical correction at any point, and the prescription tables contain only standard radii of curvature without conic constants or polynomial deformation coefficients.

This is consistent with the era and application: the Super-Angulon f/5.6 was designed in the early 1960s when precision asphere manufacture for high-volume optical production was not yet practical. More importantly, the moderate aperture (f/5.6) and the quasi-symmetric architecture largely suppress the monochromatic aberrations — spherical aberration, coma, and astigmatism — that aspherical surfaces are typically deployed to correct. The patent instead achieves aberration control through careful glass selection, the progressive refractive-index ordering within each triplet (see below), and the use of very thin inner negative elements (L4 and L5) adjacent to the diaphragm.

---

## Element-by-Element Analysis

### L1 — Negative Meniscus (Dispersive Singlet), Concave to Image

$n_d = 1.46450$, $\nu_d = 65.8$. Glass: **FK3 (Schott)** — fluorophosphate crown. $f = -70.9$.

L1 is a thick negative meniscus ($d_1 = 7.04$) forming Group I, the front dispersive member. Both surfaces ($r_1 = +122.75$, $r_2 = +25.49$) have their centers of curvature to the right, with the rear surface approximately five times more strongly curved than the front — a ratio the patent specifically calls out as "approximately equal to 1:5." The element is markedly thicker at the center than at the rim, but the lensmaker's equation confirms a net negative power ($f = -70.9$) due to the strong rear curvature dominating the refraction.

Optically, L1 serves three roles. First, it acts as a **field lens**, bending oblique ray bundles from the periphery of the 100° field into the entrance aperture of the front triplet, thereby reducing vignetting. Second, its negative power contributes to the quasi-symmetric negative–positive balance that flattens the Petzval surface — L1's rear surface alone contributes $-0.01244$ to the Petzval sum, the single largest negative contributor in the system. Third, the low refractive index ($n_d = 1.465$) and high Abbe number ($\nu_d = 65.8$) of FK3 glass minimize the chromatic contribution of this element. A low-index glass also reduces Fresnel reflection losses at the outer air–glass interface — significant because L1 intercepts the full angular extent of the incoming light cone.

The patent text notes that the outer members turn "their more strongly curved surface toward the inner pair." For L1, surface $r_2$ (the strongly curved surface) faces the triplets; $r_1$ (the gently curved outer surface) faces the object. This geometry allows L1 to present a nearly flat entrance face to the incoming beam — reducing surface reflections and aberration contributions from the steep-angle marginal rays entering the front of the lens.

### L2 — Negative Meniscus (Outer Negative of Front Triplet), Cemented

$n_d = 1.71700$, $\nu_d = 47.9$. Glass: **LaF3 (Schott 717479) / S-LAM3 optical equivalent** — lanthanum flint. $f = -118.8$.

L2 is the outermost element of the front cemented triplet (Group II), with surfaces $r_3 = +34.89$ (front) and $r_4 = +20.90$ (cemented junction with L3). It is a meniscus-shaped negative element ($f = -118.8$) with moderate thickness ($d_3 = 13.00$). The cement junction at $r_4$ bonds L2 to the central positive lens L3.

L2 has the highest refractive index ($n_d = 1.717$) in the front triplet, satisfying the patent's requirement that the refractive indices of the lenses in each triplet increase progressively outward from the diaphragm: $n_{d,\text{L4}} = 1.561 < n_{d,\text{L3}} = 1.614 < n_{d,\text{L2}} = 1.717$. The patent states that this index gradient — with the outer negative exceeding the inner negative by at least $0.12$ (here: $1.717 - 1.561 = 0.156$) and exceeding the positive lens by at least $0.08$ (here: $1.717 - 1.614 = 0.103$) — affords "a particularly good correction for coma."

As a lanthanum flint ($\nu_d = 47.9$), L2 provides moderate dispersion paired with the high index needed for the index-gradient constraint. The cemented interface at $r_4$ with L3 allows the two elements to act as an achromatic pair: L2 (lower $\nu_d$, more dispersive) opposes the chromatic contribution of L3 (higher $\nu_d$, less dispersive) across the shared boundary.

The glass identification as Schott LaF3 is based on an exact match of $n_d = 1.71700$ and $\nu_d = 47.9$ against historical Schott code 717479. The local coefficient-backed catalog resolves the same optical position through OHARA S-LAM3, so the data file records both the historical Schott assignment and the modern optical equivalent. This designation places the glass at the boundary between lanthanum crowns (LaK, $\nu_d > 50$) and lanthanum flints (LaF, $\nu_d < 50$); the Abbe number of 47.9 places it formally in the flint range.

### L3 — Biconvex Positive (Central Positive of Front Triplet), Cemented

$n_d = 1.61405$, $\nu_d = 55.1$. Glass: **SSK-class dense barium crown (614551)** — historical Schott-family row with Hikari SK9 optical equivalent. $f = +20.2$.

L3 is the thick central positive lens ($d_4 = 16.48$) of the front cemented triplet, with surfaces at $r_4 = +20.90$ (cemented junction with L2) and $r_5 = -21.48$ (cemented junction with L4). It is the most powerful element in the front triplet ($f = +20.2$) and the second-most-powerful element overall (after L6 at $f = +18.2$), carrying much of the system's positive refractive power. Its nearly symmetric biconvex form ($r_4 \approx +20.9$, $r_5 \approx -21.5$) minimizes the spherical aberration contribution for the on-axis ray bundle.

With the intermediate refractive index in the triplet's progressive sequence ($n_{d,\text{L4}} < n_{d,\text{L3}} < n_{d,\text{L2}}$), L3's glass occupies the dense barium crown region of the Abbe diagram. The six-digit optical code is 614551. In the local catalog this round-trips through Hikari SK9, while the historical Schneider context still supports a Schott SSK-class formulation rather than a literal Hikari production glass. The data file therefore treats it as a coefficient-backed optical equivalent, not as proof of supplier.

Chromatically, L3 is paired in achromatization with both L2 and L4: the cemented triplet structure allows three-glass chromatic correction across the two junction surfaces, balancing not only primary longitudinal chromatic aberration but also contributing to secondary spectrum control.

### L4 — Thin Biconcave Negative (Inner Negative of Front Triplet)

$n_d = 1.56138$, $\nu_d = 45.3$. Glass: **BaLF-class barium light flint (561453)** — historical Schott-family code-only row. $f = -36.1$.

L4 is a very thin biconcave negative element ($d_5 = 1.48$) at the rear of the front cemented triplet, with surfaces $r_5 = -21.48$ (cemented junction with L3) and $r_6 = +360.27$ (the nearly flat rear surface facing the diaphragm space). It is the innermost element of the front half, immediately adjacent to the aperture stop. The opposite signs of $r_5$ (negative) and $r_6$ (positive) confirm the biconcave shape — both exterior surfaces are concave — though $r_6$ is so weakly curved that the element is effectively plano-concave. The patent describes these inner negative elements as "concave toward the diaphragm space," referring to the element's dominant concavity: the strongly curved $r_5$ surface has its concavity directed toward the image and diaphragm side.

The extreme thinness of L4 is one of the patent's key innovations. The text states that "the sum of the axial thickness of the inner negative lenses adjoining the diaphragm space is not greater than about 0.03 times the overall focal length of the system." For Table I: $d_5 + d_7 = 1.48 + 1.48 = 2.96$, which equals $0.0296 \times f$ — satisfying the constraint. The patent claims that this thinness, combined with the concave-toward-diaphragm orientation, "is possible to suppress coma, astigmatism and field curvature in a system with considerably foreshortened axial length."

L4 has the lowest refractive index in the front triplet ($n_d = 1.561$), completing the progressive index gradient. Its role is primarily that of a **field-correcting element**: the nearly flat rear surface ($r_6 = +360.27$, effectively a plane) allows L4 to act as a weak negative corrector at the edge of the triplet without introducing significant additional spherical aberration. Its location adjacent to the diaphragm — where marginal ray heights are smallest but chief ray heights are largest — means its power primarily affects the oblique (off-axis) aberrations rather than on-axis aberrations.

The glass identification is code-family only. The combination $n_d = 1.561$, $\nu_d = 45.3$ (code 561453) falls in the barium light flint (BaLF) region of the Abbe diagram. No exact coefficient-backed public catalog row is present in the project for this pair, so the data file deliberately keeps it as a code-only historical Schott-family row. The relatively low Abbe number ($\nu_d = 45.3$) places it on the flintier side of the crown–flint boundary, providing controlled dispersion at the junction with L3.

### L5 — Thin Biconcave Negative (Inner Negative of Rear Triplet)

$n_d = 1.56883$, $\nu_d = 56.0$. Glass: **BaK4 (Schott) / S-BAL14 optical equivalent** — barium crown. $f = -41.0$.

L5 is the symmetry partner of L4, forming the innermost element of the rear cemented triplet (Group III). Like L4, it is extremely thin ($d_7 = 1.48$) and biconcave in shape — $r_7 = -1052.61$ (negative) and $r_8 = +23.84$ (positive) have opposite signs. The nearly flat front surface ($r_7$, adjacent to the diaphragm space) and the strongly curved rear surface ($r_8$, cemented to L6) make this element effectively plano-concave, with its dominant concavity facing the diaphragm — mirroring L4's orientation.

The glass is positively identified as **Schott BaK4** ($n_d = 1.56883$, $\nu_d \approx 56.0$), matching the patent values. The local coefficient-backed catalog does not carry BaK4 by name, but OHARA S-BAL14 is a close barium-crown optical equivalent, so the data file includes that resolver target while preserving the historical Schott assignment.

Despite occupying a symmetric position to L4, L5 uses a distinctly different glass. While L4 has $\nu_d = 45.3$ (a flint), L5 has $\nu_d = 56.0$ (a crown). This asymmetry in Abbe number ($\Delta\nu_d = 10.7$) between the inner negatives is the largest departure from symmetry in the design. The patent text does not explicitly address this difference, but it is consistent with the patent's broader claim that "the $\nu$ value of the outer negative lens and of the positive lens of one triplet differ from those of the corresponding lenses of the other triplet by not more than 8 units." This constraint applies to the outer negatives (L2 vs L7: $\Delta\nu_d = 6.8$) and the positives (L3 vs L6: $\Delta\nu_d = 1.2$), but the inner negatives are free to differ — and differ they do, providing the designer with additional degrees of freedom for chromatic balancing between the front and rear halves.

### L6 — Biconvex Positive (Central Positive of Rear Triplet), Cemented

$n_d = 1.61375$, $\nu_d = 56.3$. Glass: **SSK-class dense barium crown (614563)** — historical Schott-family code-only row. $f = +18.2$.

L6 is the symmetry partner of L3 and the most powerful element in the entire system ($f = +18.2$, the shortest focal length of any element), with surfaces $r_8 = +23.84$ (cemented junction with L5) and $r_9 = -16.29$ (cemented junction with L7). It carries the greatest share of the system's positive refractive power in a nearly biconvex configuration, though somewhat asymmetric ($|r_9| < |r_8|$, meaning the image-side surface is more strongly curved).

The glass is nearly identical to L3 in refractive index ($\Delta n_d = 0.00030$) but differs slightly in Abbe number ($\nu_d = 56.3$ vs 55.1, $\Delta\nu_d = 1.2$). This small difference is within the patent's tolerance of $\leq 8$ units for corresponding positive lenses. Unlike L3's 614551 row, the 614563 pair has no exact coefficient-backed public catalog row in the project, so it remains a code-only SSK-class dense barium crown assignment, likely a companion formulation to the L3 glass from the same era of the Schott catalog.

L6 is slightly shorter in focal length than L3 ($+18.2$ vs $+20.2$), compensating for the different glass properties of L7 (which has lower $\nu_d$ than L2) to maintain chromatic balance.

### L7 — Negative Meniscus (Outer Negative of Rear Triplet), Cemented

$n_d = 1.70181$, $\nu_d = 41.1$. Glass: **BaSF-class barium dense flint (702411)** — historical Schott-family row with S-BAH27 / BAFD7 optical equivalents. $f = -61.4$.

L7 is the outermost element of the rear triplet, with surfaces $r_9 = -16.29$ (cemented junction with L6) and $r_{10} = -34.74$ (rear surface facing the air gap to L8). It is a substantial element ($d_9 = 12.89$) and the symmetry partner of L2.

L7 has the highest refractive index in the rear triplet ($n_d = 1.702$), satisfying the progressive index gradient: $n_{d,\text{L5}} = 1.569 < n_{d,\text{L6}} = 1.614 < n_{d,\text{L7}} = 1.702$. The patent's constraints are met: L7–L5 = $0.133$ ($\geq 0.12$), and L7–L6 = $0.088$ ($\geq 0.08$).

Compared to its symmetry partner L2 ($\nu_d = 47.9$), L7 has a notably lower Abbe number ($\nu_d = 41.1$, $\Delta\nu_d = 6.8$). This difference, while within the patent's $\leq 8$ unit tolerance, represents a deliberate chromatic asymmetry between the triplets. L7's higher dispersion provides stronger color correction in the rear triplet to compensate for the different glass properties of L5 (which has higher $\nu_d$ than L4).

The glass identification is historical-family plus modern optical equivalent. The combination $n_d = 1.702$, $\nu_d = 41.1$ (code 702411) falls in the barium dense flint / high-index barium region. Modern coefficient-backed catalog rows OHARA S-BAH27 and HOYA BAFD7 round-trip this optical position closely, but the physical glass in a 1960s Schneider design is still best described as a historical Schott BaSF-class formulation.

### L8 — Negative Meniscus (Dispersive Singlet), Concave to Object

$n_d = 1.52015$, $\nu_d = 63.6$. Glass: **BK7G18 optical match (Schott 520636)** — K/BK crown class. $f = -63.5$.

L8 is the rearmost element, forming Group IV — the symmetry partner of L1. It is a negative meniscus ($d_{11} = 4.27$) with both surfaces having their centers of curvature to the left: $r_{11} = -25.98$ (the strongly curved front surface facing the triplet) and $r_{12} = -128.32$ (the gently curved rear surface facing the image plane). As with L1, the radius ratio ($|r_{12}|/|r_{11}| \approx 4.9$) approximates the patent's 1:5 specification.

L8 serves the same three roles as L1 — field lens, Petzval flattener, and low-reflection exit element — but on the image side. Its rear surface contributes $+0.00267$ to the Petzval sum, while its front surface contributes $-0.01317$, giving a net negative Petzval contribution that helps balance the positive contributions of the triplet.

Unlike L1 (FK3 fluorophosphate crown), L8 uses a different crown glass: $n_d = 1.520$, $\nu_d = 63.6$ (code 520636), which has a higher refractive index than FK3. This asymmetry ($\Delta n_d = 0.056$ between L1 and L8) is the second-largest glass asymmetry in the design after the L4/L5 Abbe number difference. The local catalog's Schott BK7G18 entry is an excellent optical match to this code, so the data file now uses that resolver target while still describing the historical role as a K/BK crown-class rear field lens.

---

## Glass Identification Summary

| Element | $n_d$ | $\nu_d$ | Glass | Vendor | Confidence | Role |
|---------|-------|---------|-------|--------|------------|------|
| L1 | 1.46450 | 65.8 | FK3 | Schott | Exact | Fluorophosphate crown, low-index field lens |
| L2 | 1.71700 | 47.9 | LaF3 / S-LAM3 optical equivalent (717479) | Schott / OHARA equivalent | Exact optical match | Lanthanum flint, high-index outer negative |
| L3 | 1.61405 | 55.1 | SSK class / Hikari SK9 optical equivalent (614551) | Schott historical / Hikari equivalent | Exact optical match | Dense barium crown, central positive |
| L4 | 1.56138 | 45.3 | BaLF class (561453) | Schott historical | Code-only | Barium light flint, thin biconcave inner corrector |
| L5 | 1.56883 | 56.0 | BaK4 / S-BAL14 optical equivalent | Schott / OHARA equivalent | High | Barium crown, thin biconcave inner corrector |
| L6 | 1.61375 | 56.3 | SSK class (614563) | Schott historical | Code-only | Dense barium crown, central positive |
| L7 | 1.70181 | 41.1 | BaSF class / S-BAH27 or BAFD7 optical equivalent (702411) | Schott historical / OHARA-HOYA equivalent | High | Barium dense flint, high-index outer negative |
| L8 | 1.52015 | 63.6 | BK7G18 optical match (520636) | Schott | Exact optical match | Crown, low-index field lens |

After the June 2026 audit, five rows have coefficient-backed optical equivalents in the local catalog (L2, L3, L5, L7, L8), while L4 and L6 remain deliberate historical code-only rows. These modern equivalents are used to improve chromatic tracing where the optical constants round-trip, but they should not be read as proof that Schneider procured those exact modern catalog glasses.

All glasses are attributed to Schott because Schneider-Kreuznach, as a German optical manufacturer based in the Rhineland, was the natural customer for Schott optical glass produced in Mainz, approximately 80 km from Schneider's Bad Kreuznach facility.

---

## Chromatic Correction Strategy

The design's chromatic correction operates on two levels:

**Within each triplet**, the three-element cemented structure provides achromatization across the two junction surfaces. In the front triplet, L2 (LaF3, $\nu_d = 47.9$), L3 (SSK, $\nu_d = 55.1$), and L4 (BaLF, $\nu_d = 45.3$) span a moderate range of Abbe numbers. The positive element (L3) has the highest $\nu_d$, while both negative elements have lower $\nu_d$ — the classic crown-in-flint achromatization pattern extended to a triplet.

**Between the triplets**, the patent introduces a specific chromatic constraint: the Abbe numbers of corresponding outer negatives and positive elements should differ by no more than 8 units. This constraint is satisfied:

| Comparison | Front | Rear | $|\Delta\nu_d|$ |
|------------|-------|------|-----------|
| Outer negative (L2 vs L7) | 47.9 | 41.1 | 6.8 |
| Positive (L3 vs L6) | 55.1 | 56.3 | 1.2 |

The patent text notes that this "reverse" constraint (compared to the prior art of US 3,209,649, where the rear triplet's Abbe numbers exceeded the front's by at least 8 units) enables "optimum chromatic performance" in the compact design. The interpretation is that the foreshortened axial length requires the front and rear triplets to contribute more nearly equal chromatic corrections, rather than relying on the rear triplet to over-correct and compensate for under-correction in the front.

---

## Focus Mechanism

**The patent does not describe a focusing mechanism.** The Super-Angulon 75mm f/5.6 is a large-format lens designed for 4×5 view cameras and technical cameras (e.g., Linhof, Sinar, Arca-Swiss). On these cameras, focusing is achieved by mechanically adjusting the lens-to-film distance via the camera's bellows or focusing rail — the lens itself has no internal focus mechanism. The entire optical assembly moves as a rigid unit relative to the film plane.

This constitutes **unit focus**: the only variable air spacing is the back focal distance between the rear of L8 and the image plane. As the lens is racked forward to focus on closer objects, the BFD increases from its infinity value ($s' = 68.46$ in $f = 100$ units; approximately 51.3 mm for the production 75 mm lens).

There are no floating elements, no internal focus groups, and no variable air gaps within the optical assembly. The cemented triplet construction physically prohibits internal movement — all elements within each triplet are bonded together, and the air gaps between groups ($d_2$, $d_6$, $d_{10}$) are fixed by the mechanical barrel.

The patent defines only the infinity-focus configuration. Close-focus performance is not addressed in the patent text, which is typical for large-format lens patents of this era. In practice, the quasi-symmetric design provides inherently good close-focus performance because the symmetry-based cancellation of odd-order aberrations (coma, distortion, lateral color) is preserved regardless of the object distance — a well-known advantage of symmetric and quasi-symmetric wide-angle designs.

---

## Patent Design Constraints and Verification

The patent claims three specific numerical constraints for the compact design. All are satisfied by the Table I prescription:

### Constraint 1: Thin Inner Negatives

*"The sum of the axial thickness of the inner negative lenses adjoining the diaphragm space is not greater than about 0.03 times the overall focal length."*

$$d_5 + d_7 = 1.48 + 1.48 = 2.96 = 0.0296 \times f \quad (\leq 0.03 \times f) \checkmark$$

These thin concave-toward-diaphragm elements suppress coma, astigmatism, and field curvature in the compact design.

### Constraint 2: Compact Air Spaces

*"The air spaces separating the two outer components from the two inner components should have a combined width less than substantially 30% of the overall focal length."*

$$d_2 + d_{10} = 14.65 + 12.04 = 26.69 = 0.2669 \times f \quad (< 0.30 \times f) \checkmark$$

### Constraint 3: Total Track Equals Focal Length

*"The total axial length $d_\text{total}$ approximately equals the overall focal length."*

$$d_\text{total} = 100.56 \approx 100.00 = f \checkmark$$

This compact total track ($d_\text{total}/f \approx 1.006$) is the patent's primary improvement over the prior art of US 3,209,649, where the total track exceeded $2 \times f$.

### Refractive Index Gradient

*"The refractive indices of the lenses of each triplet increasing progressively in magnitude from the diaphragm space outward."*

| Triplet | Inner negative | Positive | Outer negative | Gradient |
|---------|---------------|----------|---------------|----------|
| Front (II) | L4: 1.561 | L3: 1.614 | L2: 1.717 | $\checkmark$ |
| Rear (III) | L5: 1.569 | L6: 1.614 | L7: 1.702 | $\checkmark$ |

*"The refractive index of the outer negative lens of each triplet advantageously exceeds that of the inner negative lens thereof by a minimum of about 0.12 unit."*

| Triplet | $n_{d,\text{outer}} - n_{d,\text{inner}}$ | Required |
|---------|------|------|
| Front | $1.717 - 1.561 = 0.156$ | $\geq 0.12$ $\checkmark$ |
| Rear | $1.702 - 1.569 = 0.133$ | $\geq 0.12$ $\checkmark$ |

*"...and that of the adjoining negative lens by a minimum of substantially 0.08 unit."*

| Triplet | $n_{d,\text{outer}} - n_{d,\text{positive}}$ | Required |
|---------|------|------|
| Front | $1.717 - 1.614 = 0.103$ | $\geq 0.08$ $\checkmark$ |
| Rear | $1.702 - 1.614 = 0.088$ | $\geq 0.08$ $\checkmark$ |

---

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum for the Table I prescription is:

$$\sum_{k=1}^{12} \frac{\phi_k}{n_k \cdot n_k'} = +0.000105$$

This is extraordinarily small — corresponding to a Petzval field curvature radius of approximately 9,500 for $f = 100$ (or approximately 7,100 mm for the production $f = 75\text{ mm}$ lens). For practical purposes, the Petzval surface is flat.

The near-zero Petzval sum is achieved through a careful balance of positive and negative surface contributions. The four surfaces with the largest individual Petzval contributions are:

| Surface | Element | Petzval contribution |
|---------|---------|---------------------|
| $r_2$ (L1 rear) | L1 | $-0.01244$ |
| $r_{10}$ (L7 rear) | L7 | $+0.01187$ |
| $r_3$ (L2 front) | L2 | $+0.01197$ |
| $r_{11}$ (L8 front) | L8 | $-0.01317$ |

The quasi-symmetric cancellation is apparent: $r_2$ (front meniscus, negative) balances $r_{10}$ (rear triplet exit, positive), while $r_3$ (front triplet entrance, positive) balances $r_{11}$ (rear meniscus, negative). The remaining surfaces contribute much smaller amounts that fine-tune the sum toward zero.

This flat-field characteristic is essential for a large-format lens that must project a sharp image across a 4×5 inch film gate (diagonal $\approx 163$ mm), often with additional camera movements (shift, tilt, swing) that extend the required coverage well beyond the nominal format diagonal.

---

## Design Heritage and Context

The Super-Angulon lineage descends from a series of Schneider-Kreuznach wide-angle designs developed from the mid-1950s onward:

1. **US 2,781,695** (G. Klemt, 1957): the original four-group concept with meniscus singlets and cemented inner pairs. Limited to f/8, 100° field. This established the Super-Angulon f/8 product line.
2. **US 2,897,725** (G. Klemt and K. H. Macher, 1959): replaced the outer meniscus singlets with doublets, achieving f/4, but at the cost of greater total length and heavier elements.
3. **US 3,209,649** (K. H. Macher, filed 1962, granted 1965): introduced the cemented-triplet inner components (positive sandwiched between two negatives), reaching f/3.4 at 90°. However, the total axial length exceeded $2 \times f$.
4. **US 3,376,091** (W. Wagner and K. H. Macher, 1968, filed 1963): the present design. Returned to singlet outer menisci while retaining the cemented-triplet inner components, but with very thin inner negatives and constrained air spaces. This achieved a compact total track ($d_\text{total} \approx f$) at f/5.6, 100°.

The key insight of this patent is that the aberration correction afforded by the triplet inner components can be maintained in a compact package by making the inner negative elements (L4 and L5) extremely thin — about 1.5% of the focal length each. This simultaneously reduces coma, astigmatism, and field curvature contributions from the transition zone between the triplets and the diaphragm, while shortening the overall design by eliminating the thick elements that dominated the prior f/3.4 design.

The Super-Angulon f/5.6 series went on to become one of the most widely used wide-angle lens families in large-format photography, produced in focal lengths from 47 mm to 120 mm, and remained in production for decades in both single-coated and multi-coated variants.

---

## Sources

1. US Patent 3,376,091, "Compact Wide-Angle Camera Objective," W. Wagner and K. H. Macher, granted April 2, 1968.
2. US Patent 2,781,695, G. Klemt, granted February 19, 1957 (referenced by the patent as prior art).
3. US Patent 2,897,725, G. Klemt and K. H. Macher, granted August 4, 1959 (referenced by the patent as prior art).
4. US Patent 3,209,649, K. H. Macher, granted 1965 (referenced by the patent as the "copending application").
5. Schneider-Kreuznach product documentation: Super-Angulon f/5.6 series specifications (75 mm: 198 mm image circle at f/22, 105° coverage, 8 elements / 4 groups, Copal #0 shutter).
6. Schott Optical Glass catalog (historical editions, 1960s) for glass identification.
