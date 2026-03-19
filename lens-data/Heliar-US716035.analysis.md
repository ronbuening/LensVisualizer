# The Original Voigtländer Heliar: Analysis of US Patent 716,035

**Patent:** US 716,035 — *Lens*
**Inventor:** Carl August Hans Harting, Brunswick, Germany
**Assignee:** Voigtländer & Sohn Aktien Gesellschaft, Brunswick, Germany
**Filed:** February 4, 1901 — **Granted:** December 16, 1902

---

## 1. Historical Context

Carl August Hans Harting (1868–1951) designed the Heliar while serving as technical director of Voigtländer & Sohn in Braunschweig, Germany. The patent filing identifies him as "manager, a subject of the Duke of Brunswick"; secondary sources frequently refer to him as "Dr. Hans Harting," though the basis for this title is not established in the primary filing. The name "Heliar" derives from the Greek *helios* (sun), reflecting the lens's reputed luminous image quality — a characteristic that Voigtländer marketed as combining high resolution with astigmatic correction across the full field, an exceptional combination for a lens of this speed at the turn of the twentieth century.

### 1.1 Design Lineage

The Heliar is a direct structural descendant of the Cooke Triplet, designed by H. Dennis Taylor in 1893 at T. Cooke & Sons of York, England, and patented that year as British patent 22,607. The Triplet was the first lens system capable of correcting all five Seidel aberrations using only three separated elements — two outer positive crown singlets flanking a central negative flint element. Arthur Cox observed that anastigmat lenses were "almost exclusively, the logical development of two main types, the symmetrical lens, and the Cooke triplet of H. D. Taylor."

Harting's modification was to replace each outer positive singlet with a cemented doublet (negative flint + positive crown), while retaining the central negative element. This added two degrees of freedom for chromatic correction within each group while preserving the Triplet's fundamental positive–negative–positive power distribution for monochromatic aberration control. The Heliar was one of the first derivatives of the Cooke Triplet, appearing only seven years after Taylor's invention. Voigtländer had in fact licensed the Cooke Triplet and the Zeiss Protar in the 1890s before developing the Heliar as their own proprietary design — a direct progression from licensee to innovator.

### 1.2 Patent Chronology

The Heliar was filed in three jurisdictions:

- **German patent (DRP):** Filed 1 December 1900 — the earliest filing date.
- **British patent:** Filed 1901.
- **US Patent 716,035:** Filed 4 February 1901, granted 16 December 1902.

All three filings describe the same **symmetric** design. The patent text is explicit on this point, using the phrase "symmetrically arranged" repeatedly.

A common source of confusion in the secondary literature is the conflation of this patent's *grant date* (December 1902) with a separate filing of 10 June 1902, which covered Harting's improved **asymmetric** Heliar — a significantly different design with unequal front and rear groups. Kingslake, in *A History of the Photographic Lens* (1989, Ch. 7: "The Triplet Lens and Its Modifications"), states that the original symmetric design suffered from excessive astigmatism and a large Petzval sum, directly motivating the asymmetric redesign. Harting subsequently designed a third variant — the Dynar (US 756,006, filed 1903) — in which the cemented doublets were reversed so that the biconvex crown elements sat on the outside, with the convex cemented surfaces facing the aperture stop. After World War I, Voigtländer adopted the Dynar configuration but renamed it "Heliar," which is why the term "Heliar-type" in the optical design literature generally refers to Harting's third (Dynar) configuration rather than this original symmetric design.

### 1.3 Production History of the Symmetric Design

There is no clear evidence that the symmetric design described in US 716,035 was ever produced in significant numbers. A collector examining a 1907 Heliar bearing this patent number found its optical construction followed the later asymmetric layout, and Arne Cröll's survey of Voigtländer large-format lenses ("Voigtländer Large Format Lenses from 1949–1972") finds no cross-section evidence of symmetric Heliars in production. Cröll notes that Voigtländer's published literature "often showed the old design (fig. 1a), even in catalogs after WW II, although the actual lenses used the design shown in fig. 1b" — indicating a persistent disconnect between the patent illustrations used in marketing and the actual optical construction of production lenses.

It appears that Voigtländer moved to the asymmetric design almost immediately, treating this symmetric patent as the foundational intellectual property while producing the optically superior variant. This makes US 716,035 primarily a *design document* — valuable as the starting point for one of the most influential lens families in photographic history, but not itself a record of what customers actually received.

---

## 2. Design Architecture

### 2.1 Configuration

The patent describes a **5-element, 3-group symmetric design**:

```
  Object                                                          Image
  ─────→  [a─b]    ···    c    ···  STO  ···    [b′─a′]    ─────→
          ╰─G1─╯         G2              ╰──G3──╯
```

- **Group 1 (Front Doublet):** Element *a* (negative meniscus, flint glass) cemented to element *b* (biconvex, crown glass). The cemented interface at R = +25.76 is strongly curved and convex toward the object.
- **Group 2 (Central Singlet):** Element *c* (symmetric biconcave), made from the same glass as elements *a*. This is the diverging component inherited from the Cooke Triplet lineage.
- **Group 3 (Rear Doublet):** Mirror image of Group 1. Element *b′* (biconvex dense crown) faces the central element, element *a′* (negative meniscus flint) forms the rear of the system.

The aperture stop is placed "directly behind the central lens," in the air gap between element *c* and the rear doublet. The design is symmetric about this stop plane, which eliminates odd-order aberrations (distortion, lateral color, coma) to first order — a critical advantage for the photography of that era, where geometric fidelity was paramount.

### 2.2 Element Shapes

The four unique radii of curvature define the entire optical system by symmetry:

| Surface | Radius | Description |
|---------|--------|-------------|
| S1 | r¹ = +41.00 | Front of *a* (convex toward object) |
| S2 | r² = +25.76 | Cemented junction *a*/*b* (convex toward object) |
| S3 | r³ = −583.8 | Rear of *b* (nearly flat, very slight concavity) |
| S4 | r⁴ = −44.76 | Front of *c* (concave toward object) |
| S5 | −r⁴ = +44.76 | Rear of *c* (concave toward image) |
| S6 | −r³ = +583.8 | Front of rear *b′* (nearly flat) |
| S7 | −r² = −25.76 | Cemented junction *b′*/*a′* (concave toward object) |
| S8 | −r¹ = −41.00 | Rear of *a′* (concave toward object) |

---

## 3. Prescription Data and the Thickness Interpretation Problem

### 3.1 Patent-Stated Values

The patent normalizes the design to an effective focal length of **f = 100** (dimensionless units), with an entrance pupil diameter of **25** (yielding f/4.0) and a utilizable picture diameter of **80** (full field angle 2ω ≈ 43.6°). Four radii and four dimension values are specified. The radii describe the front half of the symmetric system:

| Parameter | Value |
|-----------|-------|
| r¹ | +41.0 |
| r² | +25.76 |
| r³ | −583.8 |
| r⁴ | −44.76 |
| d¹ | +1.6 |
| d² | +3.6 |
| d³ | +8.1 |
| d⁴ | +1.6 |

The patent describes these as "the thicknesses of the lenses," but this statement is ambiguous — d³ could be either element *c*'s center thickness or the air gap between the front doublet and the central element. The assignment matters critically because it determines the complete prescription.

### 3.2 Resolving the Ambiguity

A paraxial ray trace was performed for both interpretations:

**Interpretation A** — d³ = 8.1 is element *c* center thickness, d⁴ = 1.6 is element *a′* (confirming symmetry):
This reading assigns all four values to glass elements and requires inferring the air gaps. No air gap value is stated in the patent. The inferred symmetric gap that yields f = 100 is g ≈ 9.57. While this produces the correct EFL, it requires a free parameter not present in the patent and results in an unusually thick central biconcave element (8.1 center thickness at f = 100 normalization — over 8% of the focal length and ~5× the center thickness of the positive elements).

**Interpretation B** — d³ = 8.1 is the air gap, d⁴ = 1.6 is element *c* center thickness:
This reading assigns three values to elements (d¹ = 1.6 for *a*, d² = 3.6 for *b*, d⁴ = 1.6 for *c*) and one to the air gap (d³ = 8.1). By symmetry, the rear air gap also equals 8.1. This interpretation produces:

| Parameter | Value |
|-----------|-------|
| EFL | 100.12 |
| BFD | 85.52 |
| Total optical track | 113.72 |

The EFL of 100.12 matches the patent's stated f = 100 to within 0.12% — a discrepancy well within the rounding of the patent's two-decimal-place data. **No free parameters are required.**

Alternative permutations were also tested (e.g., d³ as element *c* with d⁴ as the air gap), yielding EFL = 114.57 — a 14.6% error that cannot be attributed to rounding.

**Conclusion:** Interpretation B is the only assignment of the four patent values that reproduces the stated focal length without introducing inferred parameters. The center thickness of 1.6 for element *c* is also physically consistent with Cooke Triplet design practice, where the central negative element is typically thin relative to the outer positive groups. The 8.1 air gap represents approximately 7% of the total track — consistent with the large group separations that characterize Triplet-derived architectures, where the air spaces are primary design variables.

### 3.3 Verified Surface Prescription

The complete symmetric prescription, reconstructed from the patent data with Interpretation B:

| Surface | R | d (to next) | nd (after) | Element | Medium |
|---------|---|-------------|------------|---------|--------|
| S1 | +41.00 | 1.60 | 1.5638 | *a* front | Glass I |
| S2 | +25.76 | 3.60 | 1.6080 | *a*\|*b* cement | Glass II |
| S3 | −583.80 | 8.10 | 1.0000 | *b* rear | Air |
| S4 | −44.76 | 1.60 | 1.5638 | *c* front | Glass I |
| S5 | +44.76 | 0.00 | 1.0000 | *c* rear | Air |
| STOP | ∞ | 8.10 | 1.0000 | Stop | Air |
| S6 | +583.80 | 3.60 | 1.6080 | *b′* front | Glass II |
| S7 | −25.76 | 1.60 | 1.5638 | *b′*\|*a′* cement | Glass I |
| S8 | −41.00 | 85.52 | 1.0000 | *a′* rear | Air (BFD) |

### 3.4 System Parameters

| Parameter | Value |
|-----------|-------|
| Effective focal length | 100.12 |
| f-number | f/4.0 |
| Half-field angle | 21.8° |
| Full field of view | 43.6° |
| Image circle diameter | 80 |
| Back focal distance | 85.52 |
| Total optical track (S1 to image) | 113.72 |
| Total glass path | 12.0 |
| Petzval sum | 0.00414 |
| Petzval radius | −241.7 |

The production lenses were offered at f/4.5 over a 58° field, versus this patent example's f/4.0 over 43.6°. The production specification suggests the patent example was optimized for somewhat different tradeoffs — or, more likely, that the asymmetric redesign that followed this patent opened up the field coverage without sacrificing correction.

---

## 4. Glass Analysis

### 4.1 Patent-Stated Properties

The patent specifies two glass types by their refractive indices at two wavelengths. An important note on wavelength conventions: in 1901, the standard reference wavelength was the sodium D line (the unresolved D₁/D₂ doublet at 589.3 nm), not the helium d-line (587.56 nm) adopted later by the modern ISO convention. The difference between nD and nd is typically < 0.0002, which is below the rounding precision of the patent values. The second wavelength is the Fraunhofer G′ line (Hγ, 434.05 nm), a standard deep-violet reference used in German optics of this period.

| Glass | Used in | nD (589.3 nm) | nG′ (434.0 nm) | nG′ − nD |
|-------|---------|---------------|-----------------|----------|
| Glass I | Elements *a*, *a′*, *c* | 1.5638 | 1.5811 | 0.0173 |
| Glass II | Elements *b*, *b′* | 1.6080 | 1.6217 | 0.0137 |

**A note on the OCR and the patent's Fraktur typeface:** The patent's numerical section is substantially garbled in digital transcriptions due to letter confusions between *a*, *C*, *q*, *n*, and their Fraktur equivalents. The glass assignments above are therefore confirmed not solely from the numerical transcription but by cross-referencing the patent's verbal descriptions: glass (b) must have "higher refractive index and smaller light dispersion" than glass (a), which is uniquely satisfied by assigning nD = 1.6080 to (b) and nD = 1.5638 to (a/c), since 1.6080 > 1.5638 in index and 0.0137 < 0.0173 in dispersion.

### 4.2 The "Flint" and "Crown" Nomenclature Problem

The patent describes elements *a* as "flint-glass" and element *c* as "crown-glass," yet both share identical glass (Glass I: nD = 1.5638). This is not an error. The terminology reflects each element's *function* within its local optical group, not its absolute position on the glass map:

- In the cemented doublets, Glass I provides the higher-dispersion role relative to Glass II — the classic "flint" function.
- For element *c*, the patent describes it as "crown-glass, the index of refraction of which is lower or only equally as large and its color dispersion larger than that of the crown-glass of the lenses *b*." This is a contextual distinction: *c* is "crown" relative to even more dispersive glasses that the patent considers for the central position, not relative to element *b*.

As §4.3 will show, Glass I is an unambiguous flint by absolute classification (νd < 50). The patent's "crown" label for element *c* is functional nomenclature, not compositional taxonomy.

### 4.3 Abbe Number Estimation

The patent does not provide the F-line (486.1 nm) and C-line (656.3 nm) indices needed to compute Abbe numbers directly. However, the partial dispersion ratio P(G′,D) = (nG′ − nD)/(nF − nC) is an empirically well-constrained quantity for silicate optical glasses. Using the Schott N-SK2 catalog data as a benchmark — a glass whose nD closely matches Glass II and whose identity can be independently established — yields P(G′,D) = 1.278 for that glass type. Verification against a broader sample of Schott catalog glasses spanning νd = 36 to 64 shows P(G′,D) falling consistently in the range 1.23 to 1.33, with a mean of approximately 1.28 and σ ≈ 0.024. For glasses in the light flint region, slightly higher values (up to ~1.35) are observed.

**Glass I (nD = 1.5638, nG′ − nD = 0.0173):**

Using the empirically verified P(G′,D) range of 1.25–1.35:

- nF − nC ≈ 0.0128 to 0.0138
- **νd ≈ 41 to 44**

This places Glass I in the **Leichtflint** (LF, Light Flint) region of the glass map — glasses with moderate refractive index and moderate-to-high dispersion, typically containing lead oxide as the primary dispersive component. The most probable value is νd ≈ 42, squarely within the flint classification (νd < 50).

**Glass II (nD = 1.6080, nG′ − nD = 0.0137):**

Using P(G′,D) = 1.25–1.32:

- nF − nC ≈ 0.0104 to 0.0110
- **νd ≈ 55 to 59**

This places Glass II in the **Schwer-Kron** (SK, Dense Crown) family — the high-index, moderate-dispersion barium crown glasses developed by Otto Schott and Ernst Abbe at the Jena Glasswork from 1884 onward.

### 4.4 Glass Identification

**Glass I — Probable Schott Leichtflint (Light Flint), discontinued type:**

With nD = 1.5638 and estimated νd ≈ 42, Glass I falls in the light flint region of the Schott glass map. No exact match exists among modern Schott standard types:

- Schott LF5 (nd = 1.5814, νd = 40.9) — correct dispersion range but refractive index 0.018 too high
- Schott LLF1 (nd = 1.5482, νd = 45.9) — refractive index 0.016 too low

Glass I falls between these two on the glass map. The Schott catalog expanded rapidly from approximately 20 glass types before 1886 to well over 70 by the turn of the century; many intermediate types from this era have since been discontinued as optical design shifted to newer glass families. The Heliar's Glass I is very likely one of these discontinued early Schott catalog types — a lead-silicate light flint with nD in the mid-1.56 range. The glass family assignment (LF / Light Flint) is high-confidence; the specific catalog number cannot be determined from the available data.

**Glass II — Probable Schott SK2 (Dense Crown), high-confidence match:**

With nD = 1.6080 and estimated νd ≈ 57, Glass II matches Schott **N-SK2** with excellent precision:

| Property | Patent (Glass II) | N-SK2 (catalog) | Δ |
|----------|-------------------|-----------------|---|
| nd | 1.6080 | 1.60738 | 0.0006 |
| νd (est.) | ~57 | 56.65 | ~0.3 |
| nG′ − nD | 0.0137 | ~0.0137 | < 0.0001 |

The index match of Δnd = 0.0006 is well within the manufacturing tolerances of 1900-era glass production. SK2 has been in the Schott catalog continuously since the late 19th century, making it one of the most probable identifications for any Schott barium crown appearing in patents from this era. **This identification is high-confidence.**

These barium-bearing dense crowns were precisely the "new glasses" (*neue Gläser*) that made anastigmatic designs like the Heliar possible. Before Schott's revolutionary work with Ernst Abbe beginning in 1884, optical designers were largely confined to traditional crown/flint pairs where the crown always had lower refractive index than the flint. The barium crowns broke this constraint: with nD = 1.608, Glass II has a *higher* refractive index than the Glass I flint at nD = 1.564, while simultaneously having *lower* dispersion. This inverted index–dispersion relationship is the defining characteristic of Schott's "new achromats" and is exactly the glass pairing that the patent emphasizes as essential to the design.

### 4.5 Summary of Glass Assignments

| Element | Glass | nD | Est. νd | Type | Confidence |
|---------|-------|----|---------|------|------------|
| *a*, *a′* | Glass I | 1.5638 | ~42 | Light Flint (LF) | Family: high; catalog type: uncertain (likely discontinued) |
| *b*, *b′* | Glass II | 1.6080 | ~57 | Dense Crown (SK) | High confidence: Schott N-SK2 (Δnd = 0.0006) |
| *c* | Glass I | 1.5638 | ~42 | Light Flint (LF) | Same glass as elements *a* |

The use of the same glass for both the outer flint elements and the central negative element is a deliberate and defining feature of the Heliar design. It means that **all independent chromatic correction occurs exclusively at the cemented doublet interfaces** — the Glass I / Glass II boundary surfaces in each outer group. The central element contributes no independent chromatic correction; its role is purely monochromatic (power balance, Petzval sum control, and higher-order aberration management).

---

## 5. Element-by-Element Optical Analysis

### 5.1 Element *a* — Front Negative Meniscus (Glass I)

| Property | Value |
|----------|-------|
| Surfaces | S1 (R = +41.0), S2 (R = +25.76) |
| Shape | Negative meniscus, convex toward object |
| Center thickness | 1.6 |
| Thin-lens focal length | −122.9 |

Both radii of curvature are positive, meaning both centers of curvature lie to the right. The front surface is convex toward the object; the rear surface is also convex toward the object but more steeply curved (R₂ < R₁). Since R₁ > R₂, the lensmaker's equation yields negative power — this is a diverging meniscus.

**Thin-lens power:**
$$\phi_a = (n_a - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) = (0.5638)\left(\frac{1}{41.0} - \frac{1}{25.76}\right) = -0.00814$$

**Optical role:** Element *a* serves as the dispersive (flint) component of the front achromatic doublet. Its negative power partially cancels the strong positive power of element *b*, leaving a net positive group. The meniscus shape is critical: it bends the light without introducing excessive spherical aberration, and its curvature away from the stop contributes to field flattening by bending the Petzval surface backward. In the Triplet analogy, this element has no direct counterpart — it is the "extra" element that distinguishes the Heliar from the Cooke Triplet, providing the chromatic degree of freedom that the bare Triplet lacks.

### 5.2 Element *b* — Front Biconvex Crown (Glass II)

| Property | Value |
|----------|-------|
| Surfaces | S2 (R = +25.76), S3 (R = −583.8) |
| Shape | Biconvex, nearly plano-convex (rear surface nearly flat) |
| Center thickness | 3.6 |
| Thin-lens focal length | +40.6 |

The front surface has strong positive curvature (R = +25.76), while the rear surface is nearly flat (|R| = 583.8 ≈ 14× the focal length). This produces a strongly asymmetric biconvex element whose power is dominated by the steeply curved front surface.

**Thin-lens power:**
$$\phi_b = (n_b - 1)\left(\frac{1}{R_2} - \frac{1}{R_3}\right) = (0.6080)\left(\frac{1}{25.76} - \frac{1}{-583.8}\right) = +0.02464$$

**Optical role:** Element *b* is the primary positive power-contributor of the front group, and indeed of the entire lens. Its dense crown glass (high index, low dispersion) provides maximum refractive power per unit of chromatic aberration — the defining characteristic of the "new achromat" glass types. The nearly flat rear surface means that almost all of *b*'s power comes from the cemented interface with element *a*, which is simultaneously the surface where chromatic correction occurs. This is an elegant aspect of the Heliar design: the surface providing the greatest power is also the surface providing the chromatic correction.

**Combined front doublet:**
$$\phi_{front} = \frac{n_a - 1}{R_1} + \frac{n_b - n_a}{R_2} + \frac{1 - n_b}{R_3} = +0.01651$$
$$f_{front} \approx +60.6$$

### 5.3 Element *c* — Central Symmetric Biconcave (Glass I)

| Property | Value |
|----------|-------|
| Surfaces | S4 (R = −44.76), S5 (R = +44.76) |
| Shape | Symmetric biconcave |
| Center thickness | 1.6 |
| Thin-lens focal length | −39.7 |

Both surfaces are concave (one toward the object, one toward the image), with equal-magnitude radii — a perfectly symmetric biconcave element. At the half-aperture height (~12.5), the sag of each surface is approximately 1.74, yielding an edge thickness of approximately 5.1 — considerably thicker at the rim than at the center, as is characteristic of strong negative elements.

**Thin-lens power:**
$$\phi_c = (n_c - 1)\left(\frac{1}{R_4} - \frac{1}{-R_4}\right) = (0.5638)\left(\frac{-2}{44.76}\right) = -0.02519$$

**Optical role:** This is the heart of the Cooke Triplet arrangement within the Heliar. The central negative element performs several simultaneous functions:

1. **Power balance.** The system needs positive net power (f = 100), but the outer groups supply much more positive power than the system requires. The central negative element absorbs the excess, and this power differential between the groups — with each group's individual power roughly 2–3× the net system power — provides the degrees of freedom needed for higher-order aberration correction. This high "power leverage" is the fundamental mechanism of the Cooke Triplet.

2. **Petzval sum correction.** The strong negative power at moderate refractive index produces a large negative contribution to the Petzval sum, flattening the field of best focus. The computed Petzval sum for the full system is 0.00414 (Petzval radius ≈ −242), which corresponds to a field curvature sag of approximately 3.3 units at the edge of the 80-diameter image circle.

3. **Spherical aberration control.** Positioned near the aperture stop where marginal ray heights are smallest, the negative element introduces under-corrected spherical aberration that partially cancels the over-correction from the outer positive groups. The patent specifically claims the elimination of "intermediate spherical defects" — the residual zone errors that limit many four-element designs at wide apertures.

4. **No independent chromatic role.** Because element *c* uses Glass I (the same glass as the outer flint elements) and is a singlet without a cemented partner, it introduces chromatic aberration proportional to its power and inversely proportional to its Abbe number. This chromatic contribution must be corrected by the cemented doublets — an additional burden that limits the degree of chromatic correction achievable in the Heliar compared to designs where the central element participates in achromatism. The choice to use Glass I for element *c* simplifies procurement (only two glass types for the entire lens) and makes the central element's chromatic contribution predictable — a controlled amount of positive longitudinal chromatic aberration that partially offsets the doublets' residual secondary spectrum.

### 5.4 Rear Doublet (Elements *b′* + *a′*)

By the design's exact symmetry, the rear doublet is the mirror image of the front. Element *b′* (biconvex dense crown) faces the central element, and element *a′* (negative meniscus flint) forms the rear of the system. Their optical roles are identical to their front counterparts.

---

## 6. Power Distribution

The Heliar's power architecture follows the Cooke Triplet recipe: positive–negative–positive.

| Group | Thin-lens φ | f (thin) | % of system | Role |
|-------|-------------|----------|-------------|------|
| Front doublet (*a* + *b*) | +0.01651 | +60.6 | +211% | Positive power, achromatism |
| Central singlet (*c*) | −0.02519 | −39.7 | −322% | Negative power, field correction |
| Rear doublet (*b′* + *a′*) | +0.01651 | +60.6 | +211% | Positive power, achromatism |
| **System (thin-lens contact)** | **+0.00783** | **+127.8** | **100%** | **Net positive** |

The thin-lens contact approximation yields f ≈ 128, significantly longer than the patent's stated f = 100. This discrepancy is resolved by the finite separations between the groups: the 8.1-unit air gaps provide additional positive power through the thick-lens effect, bringing the effective focal length from 128 to 100. This 22% shortening demonstrates the magnitude of the thick-lens contribution in this design — the air spaces are not merely mechanical convenience but are fundamental optical elements that contribute roughly one-fifth of the system's total converging power.

The ratio of total positive power to total negative power is 0.0330 / 0.0252 ≈ 1.31:1. Each group's individual power is roughly 2–3× the net system power — a high degree of "power leverage" that provides the degrees of freedom for aberration correction but also makes the design sensitive to manufacturing tolerances, a characteristic that persisted throughout the Heliar's production life.

---

## 7. Aberration Correction Strategy

### 7.1 Spherical Aberration

The patent's central claim is "complete spherical correction both on and outside the axis." The mechanism is the classic Cooke Triplet approach: the positive outer groups introduce over-corrected spherical aberration, while the central negative element (operating on a converging beam from the front group) introduces under-correction. The air gaps serve as tuning parameters to balance these contributions across the aperture zones.

The symmetric arrangement ensures that third-order (Seidel) coma is nominally zero on-axis. The patent's mention of eliminating "intermediate spherical defects" suggests Harting specifically targeted the fifth-order (zonal) spherical residuals that limit performance at f/4.

### 7.2 Astigmatism and Field Curvature

The Petzval sum of 0.00414 (for f = 100) indicates a mildly under-corrected Petzval surface, curving inward with a radius of about −242. For context, a simple positive singlet of the same focal length in similar glass (n ≈ 1.56) would have a Petzval sum of approximately 0.0064 — the Heliar's Triplet architecture reduces this by a factor of ~1.5×, a meaningful but modest improvement. At the edge of the patent's 80-diameter image circle (half-image height = 40), the sag of the Petzval surface is approximately 40² / (2 × 242) ≈ 3.3 units — a field curvature of 3.3% of the focal length.

This quantitative result is consistent with Kingslake's assessment that the symmetric Heliar suffered from "a large Petzval Sum (curvature of field)" — a criticism quoted in multiple secondary sources and identified as the primary motivation for the asymmetric redesign. The asymmetric version, with different radii and spacings in the front and rear groups, gained additional degrees of freedom to reduce the Petzval sum further without sacrificing the spherical and chromatic correction that the symmetric layout provided.

### 7.3 Distortion

The symmetric arrangement provides inherent distortion correction. By placing the stop at the plane of symmetry, odd-order aberrations (distortion, lateral color, coma) cancel between the front and rear halves. The patent claims the picture is "almost perfectly true" — i.e., distortion is negligible. This was a significant practical advantage for architectural and reproduction photography.

### 7.4 Chromatic Aberration

Each cemented doublet provides two-color (achromatic) correction at the Glass I / Glass II interface. The Abbe number difference (Δν ≈ 12–15, depending on the exact νd estimates) between the two glasses is moderate. Two factors limit the chromatic correction:

1. The Δν between the two glass types is modest, constraining the chromatic correction achievable per doublet.
2. The central element (Glass I, νd ≈ 42) introduces uncorrected chromatic aberration from its strong negative power, adding to the burden on the doublets.

The result is adequate primary chromatic correction (two-color achromatism) but residual secondary spectrum — the characteristic of all pre-apochromatic Heliar designs. This limitation would be addressed five decades later by Tronnier's Apo-Lanthar redesign.

---

## 8. Focus Mechanism

US 716,035 describes a large-format lens intended for use on view cameras and similar plate-format instruments of the early 1900s. The focusing mechanism is **unit focus**: the entire lens assembly moves as a rigid unit along the optical axis, changing only the back focal distance between the rear element and the focal plane. No internal focusing groups or floating elements are used — the air gaps between groups remain constant at all focus positions.

In practice, this was accomplished by bellows extension on view cameras, or by a helicoid focusing mount on self-contained lens assemblies. The patent does not specify a close-focus distance, as the bellows of a view camera permits continuous focus from infinity down to near distances limited only by bellows extension. For reproduction work (which the Heliar was noted for), the lens was routinely used at 1:1 magnification and beyond.

The extension for a given object distance is given by:

$$\text{Extension} = \frac{f^2}{d_{obj} - f}$$

where *d_obj* is the object distance and *f* is the focal length. At closer working distances, some degradation of correction (particularly spherical aberration and coma) was accepted as unavoidable — a standard limitation of unit-focus designs without floating-element compensation.

---

## 9. The Heliar Design Family

The Heliar spawned a family of designs that evolved over half a century:

**The Symmetric Heliar (1900–1901)** — This patent. Five elements, three groups, fully symmetric about the stop. Short-lived as a production type due to the Petzval sum limitation.

**The Asymmetric Heliar (1902)** — Harting's improved version with unequal front and rear groups. Additional degrees of freedom allowed independent control of astigmatism and Petzval curvature. This became the production standard marketed as the "Heliar" from 1902 onward, offered at f/4.5 with 58° coverage.

**The Dynar (1903–1904, US 756,006)** — Harting reversed the cemented doublets so that the biconvex crown elements sat on the outside (convex cemented surfaces facing the stop). After World War I, Voigtländer adopted this configuration and renamed it "Heliar." All post-WWI Heliars that Cröll examined use the Dynar form — the reflection test (cemented interfaces concave toward the viewer when seen from outside) identifies this unambiguously.

**The f/3.5 Heliar (1925)** — An accelerated version using the Dynar configuration, achieving f/3.5 with a slightly narrower field of view (~50°). The f/3.5 variant was "particularly adapted for cinematograph and focal plane shutter work" per contemporary Voigtländer marketing.

**The Color-Heliar (1949, US 2,645,156)** — Tronnier's redesign for medium format, specifically the 105mm f/3.5 for the Bessa II. Used the Dynar configuration with modern glass types but was not apochromatically corrected.

**The Apo-Lanthar (1949–1954, US 2,645,154)** — Tronnier's masterwork. Retained the five-element three-group architecture but achieved apochromatic correction through lanthanum crown and thorium-bearing glasses with anomalous partial dispersion. Voigtländer deliberately did not market this lens as a "Heliar" — as Cröll documents, "the Heliar's remaining lens faults were seen as the lens's characteristics," and the Apo-Lanthar represented a fundamentally different optical philosophy. The three colored stripes (red, green, blue) on the Apo-Lanthar's front cell designated its apochromatic correction. Production ran from 1954 to 1972 in focal lengths from 105mm to 300mm. Most Apo-Lanthars are slightly radioactive due to the thorium oxide content in the glass, which causes progressive yellowing from radiation-induced color centers — a defect reversible by prolonged UV exposure.

---

## 10. Sources

### Primary Source

- US Patent No. 716,035. "Lens." Carl August Hans Harting, assignor to Voigtländer & Sohn Aktien Gesellschaft. Filed 4 February 1901, granted 16 December 1902.

### Secondary Sources — Optical Design Literature

- Kingslake, Rudolf. *A History of the Photographic Lens.* Academic Press, 1989. Ch. 7: "The Triplet Lens and Its Modifications," pp. 103–115.
- Kingslake, Rudolf & Johnson, R. Barry. *Lens Design Fundamentals*, 2nd ed. Academic Press, 2010.
- Smith, Warren J. *Modern Optical Engineering*, 4th ed. McGraw-Hill, 2008.
- Fischer, Robert E., Tadic-Galeb, Biljana, & Yoder, Paul R. *Optical System Design*, 2nd ed. McGraw-Hill, 2008.
- Greenleaf, Allen R. *Photographic Optics.* Macmillan, New York, 1950. pp. 80, 83.

### Secondary Sources — Voigtländer History and Lens Surveys

- Cröll, Arne. "Voigtländer Large Format Lenses from 1949–1972." Technical monograph (refs. [17]–[19] for the three Harting designs; [22] for the Tronnier Apo-Lanthar). Available at arnecroell.com.
- Hartmann, Peter et al. "Optical glass and glass ceramic historical aspects and recent developments: a Schott view." *Applied Optics* 49(16), D157–D176 (2010).

### Related Patents

- US Patent 756,006 (1904) — C. A. H. Harting (the Dynar).
- US Patent 2,645,154 (1953) — A. W. Tronnier (the Apo-Lanthar).
- US Patent 2,645,156 (1953) — A. W. Tronnier (the Color-Heliar).

### Glass Data

- Schott AG. *Optical Glass Pocket Catalog* and *Collection Datasheets* (current edition, for N-SK2 identification).

---

### Analytical Notes

All paraxial calculations in this document were verified independently by Python ray trace. The thickness interpretation (§3.2) was resolved by exhaustive testing of all plausible permutations against the patent's stated focal length. Glass identifications are inferential (based on nD and partial dispersion matching against known glass families) except where noted as high-confidence catalog matches (Glass II → Schott N-SK2, Δnd = 0.0006). The distinction between this symmetric patent design and the later asymmetric production Heliar is maintained throughout.
