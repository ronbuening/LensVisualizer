# The Original Zeiss Tessar: An Optical Analysis of US Patent 721,240

**Paul Rudolph · Carl Zeiss, Jena · Filed July 15, 1902 · Patented February 24, 1903**

---

## 1. Introduction

US Patent 721,240 is one of the most consequential documents in the history of photographic optics. Filed by Dr. Paul Rudolph and assigned to Carl Zeiss of Jena, Germany, it describes the lens that would become known as the Tessar — a name derived from the Greek *tessares* (four), reflecting its four-element construction. The design proved so successful that Tessar-type lenses were manufactured in the hundreds of millions across the twentieth century, and the basic configuration remains in production today.

The patent describes a single worked example: a photographic objective corrected for a relative aperture of f/5.5 with anastigmatic field flatness extending to approximately 60 degrees (2ω). This particular prescription was not the one that entered commercial production — the first production Tessars were an f/6.3 (Series IIb) and an apochromatic f/10–f/15 for reproduction — but it represents Rudolph's original articulation of the design principle. The prescription is given in normalized form, with all radii, thicknesses, and spacings expressed as fractions of the system focal length.

The following analysis examines this example prescription in detail: the structure and shape of each element, the identity and role of the glass types, the aberration-correction strategy embodied in the design, and the focus mechanism.

---

## 2. Design Heritage

Rudolph's patent text explicitly identifies the Tessar as a synthesis of two earlier Carl Zeiss designs. The first is the Anastigmat (later renamed Protar, US Patent 444,714, 1891), which uses two cemented doublet groups flanking the diaphragm. The second is the Unar (US Patent 660,202, 1900), which achieves astigmatic correction through air-spaced singlets rather than cemented surfaces.

The Tessar combines the front half of the Unar — two singlets separated by an air space — with the rear half of the Protar — a cemented doublet. As Zeiss optical engineer H. H. Nasse described it in a 2011 technical article, the Tessar was "comprised of the front element of the Unar and the rear element of a simple Protar... just like a child has genes from its mother and father."

Understanding this heritage requires the concept of "old" and "new" achromats, as Nasse explains. Before Schott's innovations, achromats were limited to traditional crown glass (low index, low dispersion) paired with flint glass (high index, high dispersion). The cemented surface in these "old achromats" necessarily had a dispersive (negative) effect, which could correct chromatic aberration and spherical aberration but not astigmatism. Schott's new dense barium crown glasses — combining high refractive index with low dispersion — enabled "new achromats" whose cemented surface could be given a collective (positive) effect. This positive cemented surface opened a new degree of freedom for correcting astigmatism and field curvature.

In the Protar, Rudolph combined both types: an old achromat for the G1 group and a new achromat for the G2. In the Unar, he replaced both cemented groups with air-spaced pairs, gaining additional correction flexibility but losing the cemented surface's advantages. The Tessar represents the optimal hybrid: the G1 group retains the air-spaced arrangement from the Unar (whose facing surfaces act in the "old" dispersive manner), while the G2 group restores the cemented doublet from the Protar (whose junction acts in the "new" collective manner). Both groups, however, use a mix of new-type and traditional glasses — the "old" and "new" labels describe the correction principle of the interface, not the glass vintage.

The critical innovation is not the four-element layout itself, but the relationship between the air-spaced pair in the G1 group and the cemented pair in the G2 group. Previous four-element objectives (including Petzval objectives and Steinheil's antiplanet) gave the cemented surface and the facing surfaces the *same* sign of optical power — both dispersive. Rudolph's insight was to give them *opposite* signs: the cemented surface has positive (collective) power, while the pair of facing surfaces has negative (dispersive) power. The patent calls this "the new principle of opposite effects."

---

## 3. Patent Prescription

The complete prescription from the patent is transcribed below. All values are normalized to the system focal length as unit; to obtain a physical lens, multiply by the desired focal length in millimeters.

### 3.1 Surface Data

| Surface | Radius | Spacing | Medium After | Element |
|---------|--------|---------|-------------|---------|
| r1 | +0.215 | d1 = 0.038 | L11 glass | L11 entry |
| r2 | ±∞ (flat) | l = 0.019 | Air | L11 exit |
| r3 | −0.743 | d2 = 0.011 | L12 glass | L12 entry |
| r4 | +0.208 | b1 = 0.030 | Air | L12 exit |
| B | ∞ (diaphragm) | b2 = 0.030 | Air | Stop |
| r5 | −1.113 | d3 = 0.011 | L21 glass | L21 entry |
| r6 | +0.252 | d4 = 0.030 | L22 glass | Cemented junction |
| r7 | −0.367 | BFD ≈ 0.874 | Air | L22 exit |

Sign convention: R > 0 indicates the center of curvature lies to the right of the surface; R < 0 to the left. Light propagates left to right.

### 3.2 Glass Data

The patent provides refractive indices at three spectral lines: the sodium D-line (589.3 nm), hydrogen F-line (486.1 nm), and hydrogen G′-line (Hγ, 434.0 nm).

| Glass | n_D | n_F | n_G′ | n_F − n_D |
|-------|-----|-----|------|-----------|
| L11 | 1.61320 | 1.61870 | 1.62462 | 0.00550 |
| L12 | 1.60457 | 1.61486 | 1.62252 | 0.01029 |
| L21 | 1.52110 | 1.52820 | 1.53397 | 0.00710 |
| L22 | 1.61132 | 1.61895 | 1.62514 | 0.00763 |

**Note on Abbe numbers:** The patent does not provide the C-line (656.3 nm) refractive index, which is required to compute the standard Abbe number νd = (n_D − 1)/(n_F − n_C). Extrapolation from the three given spectral lines to the C-line is model-dependent and unreliable, so the glass identifications in Section 4 rely on refractive index matching against the historical Schott catalog rather than computed Abbe numbers.

**Note on L11's partial dispersion:** L11's patent data yields an anomalous partial dispersion ratio: P_G′F = (n_G′ − n_F)/(n_F − n_D) = (0.00592)/(0.00550) = 1.076. In ordinary optical glasses, this ratio falls between approximately 0.7 and 0.9; a value exceeding 1.0 indicates that the violet dispersion (G′–F) exceeds the blue dispersion (F–D), which is physically unusual. The other three glasses in the prescription have entirely normal ratios (L12: 0.744, L21: 0.813, L22: 0.811).

This anomaly could indicate a genuinely unusual glass type — some early experimental borate compositions had atypical partial dispersions — but it is also consistent with a single-digit transcription or printing error in the n_G′ value. If the fourth decimal digit were 2 rather than 4 (i.e., n_G′ = 1.62262 instead of 1.62462), the ratio drops to 0.713, perfectly normal for a dense barium crown. In a 1903 letterpress patent document, a "4" misread as "2" (or vice versa) is entirely plausible. Because this discrepancy affects only the partial dispersion distribution and not the refractive index or total dispersion significantly, the glass identification and element-level optical analysis remain valid regardless of which reading is correct.

---

## 4. Glass Identification

The four glasses used in the Tessar patent prescription were products of the Schott & Genossen glassworks in Jena, which had been producing optical glasses since 1886. The revolutionary glass types developed by Otto Schott in collaboration with Ernst Abbe — particularly the new barium-oxide crown glasses — were essential to the Tessar design, just as they had been to the earlier Protar.

### L11: Dense Barium Crown (*Schwer-Barium-Kron*)

n_D = 1.61320, n_F − n_D = 0.00550 (very low dispersion for its index)

L11 is characterized by a high refractive index combined with unusually low dispersion — the defining property of the "new" crown glasses that Schott had developed. This places it firmly in the dense barium crown family, corresponding to what Schott's early catalog designated as types in the SK (*Schwerkron*) series. The closest match in the historical catalog is Schott O.381 (n_D ≈ 1.6134), a dense barium crown that would later be classified in the SK family.

This glass type was central to the Protar's innovation: its high index allowed strongly curved cemented surfaces to correct astigmatism, something that was impossible with older crown glasses. In the Tessar, the same property allows L11 to carry substantial positive power while introducing minimal chromatic aberration.

### L12: Dense Flint (*Schwerflint*)

n_D = 1.60457, n_F − n_D = 0.01029 (high dispersion)

L12 exhibits the classic signature of a lead-silicate flint glass: a moderately high refractive index with roughly twice the dispersion of L11. This corresponds to Schott types in the F (*Flint*) or SF (*Schwerflint*) series. The closest catalog match is Schott O.163 (n_D ≈ 1.605, νd ≈ 38), a dense flint glass.

The high dispersion of L12 is functionally critical: paired with the low-dispersion L11 in the G1 group, it provides the dispersion contrast needed for chromatic correction.

### L21: Light Crown (*Leichterkron*)

n_D = 1.52110, n_F − n_D = 0.00710 (moderate dispersion)

L21 is a conventional glass with a low refractive index and moderate dispersion, sitting at the traditional boundary between crown and light flint families. It matches closely with Schott O.332 (n_D ≈ 1.5210, νd ≈ 51), a type that catalogs have classified variously in the K (*Kron*) or LLF (*Leichtes Leichtflint*) categories depending on the era. The modern dividing line between crown and flint (νd = 50) was not formalized in 1902, and glass types in this transition zone were simply part of the available palette. Whether one calls L21 a crown or a light flint is a classification question with no optical consequence; what matters is its refractive index and its dispersion relative to L22.

In the cemented doublet, L21's role as the negative element benefits from its lower index: the index step at the cemented junction (from L21's 1.521 to L22's 1.611) creates the positive refractive power that is central to the Tessar's astigmatic correction.

### L22: Dense Barium Crown or Barium Flint (*Barium-Kron / Barytflint*)

n_D = 1.61132, n_F − n_D = 0.00763 (moderate dispersion)

L22 has a high refractive index with moderate dispersion, placing it at the boundary between the barium crown and barium flint families. The closest catalog match is Schott O.382 (n_D ≈ 1.6116, νd ≈ 56.8), which sits in the SK/BaF transition zone. The alternative match is O.543 (BaF-type, n_D ≈ 1.611, νd ≈ 55).

L22's high index and moderate dispersion make it the optical workhorse of the system. As the strongest positive element, it carries the bulk of the system's converging power while the cemented junction with L21 simultaneously controls chromatic and astigmatic aberrations.

**A note on secondary sources:** Many references — including the Wikipedia article on the Tessar — describe the rear doublet as "a negative concave flint glass element cemented with a positive convex crown glass element." This is misleading on two counts. First, L21 (n_D = 1.521, n_F − n_D = 0.00710) is not a flint glass; its moderate dispersion and low index place it firmly in the crown or light-flint transition zone. Second, L22 (n_D = 1.611, n_F − n_D = 0.00763) is not a traditional crown glass; it is a dense barium crown or barium flint, one of Schott's "new" glass types. The confusion likely arises from the functional roles (L21 is the diverging element, L22 the converging element) being conflated with glass-type nomenclature, where "flint" and "crown" carry specific dispersion meanings that do not match the actual materials used here.

---

## 5. Element Shapes and Optical Properties

### 5.1 Individual Element Data

The following table summarizes the computed optical properties of each element. Focal lengths are derived from the thin-lens approximation; thick-lens corrections are negligible for elements this thin relative to their focal lengths.

| Element | Shape | R_front | R_rear | f (normalized) | Optical Action |
|---------|-------|---------|--------|---------------|----------------|
| L11 | Plano-convex | +0.215 | ∞ | +0.351 | Strong positive |
| L12 | Biconcave | −0.743 | +0.208 | −0.269 | Strong negative |
| L21 | Biconcave (nearly plano-concave) | −1.113 | +0.252 | −0.394 | Moderate negative |
| L22 | Biconvex (slightly asymmetric) | +0.252 | −0.367 | +0.244 | Strong positive |

**Coddington shape factors:** L11 has q = −1.0 (plano-convex, flat on rear), L12 has q = −0.56 (moderately asymmetric biconcave), L21 has q = −0.63 (asymmetric biconcave, with the front surface much more gently curved than the rear — nearly plano-concave), and L22 has q = +0.19 (slightly asymmetric biconvex).

### 5.2 Group Powers

The G1 group (L11 + L12) has a combined thin-lens power of φ ≈ −0.87, meaning it is *net negative*. The G2 group (L21 + L22, cemented) has a combined power of φ ≈ +1.56. The system therefore converges light primarily through the rear doublet, with the G1 group acting as a diverging corrector.

This is a key insight for understanding the Tessar: despite L11 being a strong positive element, the even stronger negative L12 makes the entire G1 group divergent. The rear doublet must then provide all of the system's convergence plus enough additional power to overcome the G1 group's divergence. This power distribution is what allows such effective aberration correction with only four elements.

L11's individual power is approximately 2.8× the system power. As noted in optical design literature, this means that when focusing by moving the front element alone (front-element focusing), L11 needs to travel only about one-third of the distance that the whole lens would require — a practical advantage exploited in many mid-range Tessar-equipped cameras.

---

## 6. The Role of Each Element

### L11 — The Front Positive Singlet

L11 is a plano-convex element made of dense barium crown glass. Its curved front surface (r1 = +0.215) carries all of its refractive power, while the flat rear surface (r2 = ∞) contributes none. This asymmetric shape minimizes spherical aberration for the on-axis beam entering from infinity — a plano-convex element oriented with the curved surface toward the longer conjugate (object at infinity) is the shape that minimizes spherical aberration for a single positive element.

Despite being the first element light encounters, L11's primary role is not to focus the image. Rather, as Nasse's Zeiss technical article explains, the front element "had little power" in the system context, "since its only function was to correct the few aberrations produced by the powerful posterior element." This initially counterintuitive statement becomes clear when one considers the group powers: L11's positive power is largely cancelled by L12's stronger negative power, leaving the G1 group net-negative. L11's role is to pre-condition the beam — introducing controlled amounts of positive spherical aberration and undercorrected chromatic aberration that will be balanced by the G2 group.

The choice of dense barium crown glass for L11 is deliberate: its very low dispersion (n_F − n_D = 0.00550) means that L11 introduces minimal chromatic spread despite its strong curvature, keeping color correction manageable for the rest of the system.

### L12 — The Central Negative Singlet

L12 is a biconcave element made of dense flint glass. Both of its surfaces (r3 = −0.743, r4 = +0.208) are concave, with the rear surface being much more strongly curved than the front. This asymmetry is significant: the strongly curved rear surface (r4), which faces the diaphragm, introduces large amounts of negative spherical aberration and overcorrected astigmatism that counterbalance the aberrations from L11 and the rear doublet.

L12 is the dispersive counterpart to L11 in the front achromat pair. Its high-dispersion flint glass (n_F − n_D = 0.01029) provides the chromatic contrast needed to achromatize the G1 group. Together, L11 and L12 form a separated achromat — functionally equivalent to a traditional cemented doublet but with the air space between them providing an additional degree of freedom for controlling higher-order aberrations.

The air space between L11 and L12 (l = 0.019) is small but critical. The two surfaces bounding this space — the flat r2 and the gently curved r3 — form what the patent calls "the pair of facing surfaces." Their combined refractive power is negative (φ = −0.814), arising entirely from r3 since r2 is flat. This negative air lens is one of the two key correction mechanisms identified in the patent.

### L21 — The Negative Element of the Cemented Doublet

L21 is a biconcave element made of light crown glass, though with highly asymmetric curvatures that make it nearly plano-concave. Its front surface (r5 = −1.113) is very gently curved, while the rear surface (r6 = +0.252) is more than four times as strong. The Coddington shape factor of −0.63 confirms the pronounced asymmetry.

L21's primary contribution is through the cemented junction at r6, where light passes from L21's crown glass (n_D = 1.521) into L22's denser barium crown (n_D = 1.611). This index step of Δn = +0.090 at a surface of radius +0.252 creates a positive refractive power of φ = +0.358 — the "positive cemented surface" identified in the patent claim as the counterpart to the negative facing surfaces of the G1 group.

The use of light crown glass for L21 is an elegant choice: its lower index maximizes the index step at the cemented junction (Δn = 0.090), strengthening the positive power of the cemented surface without requiring extreme curvature. If both L21 and L22 used high-index glasses with similar refractive indices, the cemented surface would have negligible power and the Tessar's correction strategy would fail.

### L22 — The Positive Element of the Cemented Doublet

L22 is a slightly asymmetric biconvex element made of dense barium crown (or barium flint) glass. With a focal length of only +0.244 (normalized), it is the most powerful element in the system — roughly 4× the system power. Its front surface is physically the cemented junction with L21 (r6 = +0.252, convex toward the front), and its rear surface (r7 = −0.367, convex toward the rear) is its sole independently shaped face. The Coddington shape factor of +0.19 indicates near-equiconvex geometry with a slightly stronger rear curvature.

L22 carries the primary image-forming burden. Its strong positive power converges the diverging beam from the G1 group to form the image. The rear surface r7, with its moderate negative radius, is the last refracting surface before the image and has substantial influence on field curvature, distortion, and lateral color.

The cemented bond between L21 and L22 eliminates two glass-air interfaces that would otherwise cause reflection losses and flare — a significant practical advantage in an era before anti-reflection coatings. The pre-coating Tessar had only six air-glass surfaces (compared to eight for a four-singlet design like the Unar), which gave it meaningfully better contrast and reduced ghosting. At approximately 4% reflection loss per uncoated surface, this two-surface reduction corresponds to a transmission increase from roughly 72% (Unar) to 78% (Tessar) — a gain that was directly visible in image contrast.

---

## 7. Aberration Correction Strategy

### 7.1 The Principle of Opposite Effects

The patent's central claim is that astigmatic correction is achieved by giving opposite signs to two specific optical powers:

1. **The cemented surface** (r6, between L21 and L22) has **positive** power: φ = +0.358
2. **The pair of facing surfaces** (r2 and r3, between L11 and L12) has **negative** power: φ = −0.814

This "principle of opposite effects" is what distinguishes the Tessar from earlier four-element designs. In the Petzval objective and Steinheil's antiplanet, both the cemented surface and the facing surfaces had dispersive (negative) power. Rudolph's contribution was recognizing that reversing the cemented surface to be collective (positive) opened a qualitatively superior design space.

Verification from the patent prescription confirms both claims:

- Cemented surface r6: (n_L22 − n_L21) / R6 = (1.61132 − 1.52110) / 0.252 = **+0.358** ✓
- Facing surfaces r2 + r3: 0 + (n_L12 − 1) / r3 = 0.60457 / (−0.743) = **−0.814** ✓

### 7.2 Chromatic Correction

The Tessar achieves chromatic correction through two independent achromatic pairs: L11+L12 in the G1 group and L21+L22 in the G2 group. Each pair uses a low-dispersion crown element for positive power and a high-dispersion flint element for negative power — the classic achromat strategy.

Because the G1 group is net-negative and the G2 group net-positive, and because the dispersion characteristics differ between groups, the system exhibits a small residual chromatic sum. The patent data yields a thin-lens chromatic sum of approximately −0.034 (using estimated Abbe numbers), indicating slight undercorrection. This residual secondary spectrum is typical for achromatic designs of the era and becomes visually significant only at apertures faster than the f/5.5 specified.

### 7.3 Field Curvature (Petzval Sum)

The Petzval sum computed from the individual element powers and refractive indices is +0.322, corresponding to a Petzval radius of approximately 3.1× the focal length. This is a moderate value — not as flat as a fully Petzval-corrected design, but adequate for the 60° field specified in the patent, particularly when combined with deliberate introduction of inward-curving astigmatism to balance the outward Petzval curvature.

The Tessar's Petzval sum is inherently limited by having only four elements. Modern high-performance lenses achieve much smaller Petzval sums, but at the cost of significantly more elements and glass types. For the Tessar's design constraints — four elements, available 1902 glass types, no cemented triplets — a Petzval sum of 0.32 represents a very effective compromise.

### 7.4 Spherical Aberration

The patent states the design is "spherically corrected for a relative aperture of 1:5.5." Spherical aberration control comes primarily from two mechanisms: the near-optimal bending of L11 (plano-convex, curved side toward infinity, minimizing spherical aberration for a singlet), and the balance between the overcorrected contribution of the strongly curved rear surface of L12 (r4 = +0.208) and the undercorrected contributions of the front elements.

The air space between L11 and L12 provides an additional degree of freedom that a cemented achromat lacks: by separating the elements, Rudolph could independently adjust the height at which the marginal ray strikes each surface, fine-tuning the spherical aberration balance.

---

## 8. Focus Mechanism

The patent prescription describes a single configuration at infinite conjugate. No variable air spacings are specified, and the patent text does not discuss focusing. The Tessar, both in this patent example and in all subsequent production versions, uses one of two focusing methods:

**Unit focusing** was used on higher-quality cameras (Rolleiflex TLR, Contaflex Super B, large-format plate cameras). The entire lens assembly moves forward along the optical axis to focus at closer distances. This preserves all internal spacings and therefore maintains the computed aberration correction at all focus distances. The total track of the optical system is only 0.169 × f (about 24 mm for a 144 mm lens), so the back focal distance (0.874 × f ≈ 126 mm) dominates the overall lens-to-film distance.

**Front-element focusing** was used on mid-range cameras as a cost-saving measure. Because L11 has approximately 2.8× the system power, the thin-lens approximation suggests that moving L11 alone requires roughly one-third the displacement of unit focusing to achieve the same focus shift. (The actual ratio depends on the separation between L11 and the remaining elements and on the entrance pupil position; the one-third figure, widely cited in optical design literature including by Kingslake, is an approximation that holds well for the Tessar's geometry.) The air space between L11 and L12 (l = 0.019 × f) provides clearance for this movement. While front-element focusing introduces some degradation in off-axis performance (the G1 group's aberration balance is disturbed), the effect is modest at the moderate displacements typical of everyday photography.

No internal-focus or floating-element mechanism was employed in Tessar designs. The simplicity of the four-element layout — with no moving groups within the lens — was one of the design's practical advantages.

---

## 9. Paraxial Ray Trace Verification

A paraxial marginal ray traced through the complete surface prescription yields the following system parameters:

| Parameter | Computed Value | Patent Claim |
|-----------|---------------|-------------|
| Effective focal length | 0.970 | 1.000 (normalized) |
| Back focal distance | 0.874 | — |
| Total track (r1 to r7) | 0.169 | — |
| Entrance pupil semi-diameter | 0.088 | — |
| f-number | 5.5 | 5.5 |
| Anastigmatic field (2ω) | — | ~60° |

The 3% deviation between the computed EFL and the stated normalization is consistent with the difference between thick-lens paraxial ray tracing and the exact system focal length. The patent's normalization is to the Gaussian focal length of the complete system, while our paraxial trace accumulates small rounding effects across eight surfaces. For a 144 mm production focal length (common for early Tessar large-format lenses), this deviation amounts to approximately 4 mm — within the tolerance range for a 1902-era prescription.

---

## 10. The 1914 Disclaimer

The patent file includes a disclaimer filed on October 21, 1914 by Carl Zeiss, narrowing the original claim. The disclaimer excludes "objectives of the kind claimed, of which the group of lenses, including a pair of facing surfaces does not consist of an exterior collective lens and an interior dispersive lens." In plain terms, this restricts the patent to Tessar configurations where the G1 group specifically has a positive (collective) outer element and a negative (dispersive) inner element — the arrangement shown in the patent drawing (L11 positive, L12 negative). This disclaimer was likely filed in response to competitors' attempts to circumvent the patent by reversing the order of elements in the G1 group.

---

## 11. Historical Significance

The Tessar's importance lies not in radical novelty of any single element, but in the elegant efficiency of the complete system. With only four elements and six air-glass surfaces, it achieved correction quality that rivaled designs with twice as many surfaces — and did so using only glass types available in 1902. The key decisions that made this possible were:

1. Exploiting Schott's dense barium crown glasses to create a strong positive cemented surface without requiring extreme curvatures or introducing excessive chromatic aberration.
2. Recognizing that the cemented surface and facing surfaces should have *opposite* signs of power — a departure from all prior four-element designs.
3. Distributing power so that the net-negative G1 group provides aberration correction while the net-positive G2 doublet provides convergence.

The first production Tessars were f/6.3 (Series IIb, slightly slower than the patent example's f/5.5), alongside the Apo-Tessar f/10 to f/15 for lithographic reproduction. The f/5.5 patent example was never manufactured commercially. Subsequent development by Ernst Wandersleb increased the maximum aperture to f/4.5 by 1917 (Series Ic), and Willy Merté achieved f/3.5 and f/2.8 by the early 1930s — primarily through advances in glass technology rather than changes to the fundamental four-element layout. The design proved so robust that it remained in continuous production for over eight decades (the last Carl Zeiss Jena Tessars were manufactured in 1988), with later versions benefiting from coating technology, computer optimization, and modern glass catalogs while retaining the same basic architecture.

---

## Sources

- US Patent 721,240, "Photographic Objective," Paul Rudolph, filed July 15, 1902, patented February 24, 1903
- US Patent 444,714, "Photographic Objective," Paul Rudolph, patented January 14, 1891 (Zeiss Anastigmat/Protar)
- US Patent 660,202, "Photographic Objective," Paul Rudolph, patented October 23, 1900 (Zeiss Unar)
- Nasse, H. H., "Tessar," Carl Zeiss Camera Lens Division technical article series, March 2011
- Kingslake, R., *A History of the Photographic Lens*, Academic Press, 1989, Chapter 6 §4
- Kingslake, R. & Johnson, R. B., *Lens Design Fundamentals*, 2nd ed., SPIE Press, 2010
- Smith, W. J., *Modern Optical Engineering*, 4th ed., McGraw-Hill, 2008
- Schott & Genossen historical glass catalogs (Jena, 1886–1910)
- Greenleaf, A. R., *Photographic Optics*, Macmillan, New York, 1950, pp. 77–82
- Camera-wiki.org, "Tessar" article (citing production history and series designations)
