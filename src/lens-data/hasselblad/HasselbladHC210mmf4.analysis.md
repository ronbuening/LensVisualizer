# Hasselblad HC 4/210 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 6,445,511 B1, "Inner-Focus-Type Lens," granted September 3, 2002.
**Applicant:** Fuji Photo Optical Co., Ltd., Saitama (JP).
**Inventor:** You Kitahara.
**Filed:** January 31, 2002; priority date March 15, 2001 (JP 2001-075010).
**Embodiment analyzed:** Example 3, corresponding to Figure 3 and Table 3.

The prescription is normalized to $f = 1.0$. All radii, thicknesses, and spacings were scaled by a factor of $\times 210.07$ to match the marketed 210 mm focal length.

The identification of Example 3 as the production Hasselblad HC 4/210 rests on the following convergent evidence:

1. **Element and group count.** The patent example has 10 elements in 6 groups; the production HC 4/210 is specified as 10 elements / 6 groups.
2. **Focal length and f-number.** The patent states $f = 1.0$, $F_{NO} = 4.0$. Scaled to 210 mm, these match the production specifications of 210 mm (211.1 mm measured) at f/4.
3. **Half-field angle.** The patent gives $\omega = 9.5°$ ($2\omega = 19.0°$). The production lens has a 19° angle of view. For 645 format ($56 \times 41.5$ mm, diagonal 69.7 mm), $\omega = \arctan(34.85/210) = 9.4°$ — consistent within rounding.
4. **Image circle.** The computed image circle from the patent is $2 f \tan\omega \approx 70.3$ mm, well-matched to the 645 format diagonal of 69.7 mm.
5. **Focus mechanism.** The patent describes inner focus by axial movement of the second lens group (G2), with first and third groups fixed. The production HC 4/210 is marketed as an internal-focusing design.
6. **Minimum focus distance.** The patent tabulates close-focus spacings at an object distance of 8.5 normalized units. Scaled: $8.5 \times 210.07 = 1786$ mm $\approx 1.8$ m, matching the production MFD of 1.8 m (5.91 ft).
7. **Assignee.** Fuji Photo Optical Co., Ltd. manufactured all Hasselblad H-system lenses, marketed under both the Hasselblad and Super EBC Fujinon brands.
8. **Timing.** The priority date (March 2001) precedes the HC lens system launch (2002–2003).

## Optical Architecture

The HC 4/210 is a three-group inner-focus telephoto-style prime of positive–negative–positive power distribution. Its total track at infinity is 221.6 mm, yielding a telephoto ratio of $\text{TL}/f = 1.055$ — just barely exceeding unity. The design is therefore not a classical telephoto (which requires $\text{TL}/f < 1$) but achieves a compact form for a 210 mm medium-format lens, with the back focal distance of 96.5 mm providing ample clearance beyond the Hasselblad H-mount flange distance of approximately 61.6 mm.

The design is **entirely spherical** — there are no aspherical surfaces in any of the three embodiments disclosed in this patent. This is notable for a lens of this era (2001–2002) and reflects the telephoto prime's moderate aperture ($f/4$) and narrow field ($2\omega = 19°$), which keep higher-order aberrations manageable with spherical surfaces alone.

**Group structure (10 elements / 6 groups):**

- **G1 (front collector, positive):** Four elements in three air-spaced subgroups — a biconvex singlet L1, a cemented doublet L2+L3, and a negative meniscus singlet L4. $f_1 = +135.2$ mm ($f_1/f = 0.644$).
- **G2 (focus group, negative):** One cemented doublet L5+L6. $f_2 = -108.2$ mm ($f_2/f = -0.514$). This group translates along the optical axis for focusing.
- **G3 (relay group, positive):** An aperture stop followed by two cemented doublets — L7+L8 (overall negative) and L9+L10 (overall positive). $f_3 = +164.3$ mm ($f_3/f = 0.781$).

The negative–positive doublet pairing after the stop in G3 creates a quasi-symmetrical power arrangement around the diaphragm, which aids correction of higher-order spherical aberration and coma (noted explicitly in the patent text, col. 3 lines 30–40).

## Element-by-Element Analysis

### L1 — Biconvex Positive

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA) — fluor-silicate crown. $f = +155.9$ mm.

L1 is a biconvex element with strongly asymmetric radii ($R_1 = +79.5$ mm, $R_2 = -1663$ mm), the shorter radius on the object side. This asymmetry orients the element's bending for minimum spherical aberration at its conjugate — the nearly flat rear surface allows the marginal ray to exit the element at a small angle, reducing zone-dependent refraction errors. The low-dispersion fluor-silicate crown ($\nu_d = 70.2$) contributes to chromatic control in the front positive group, though it is not in the ED class ($\nu_d > 80$). L1 carries the largest clear aperture in the system and provides the first stage of positive convergence, sharing the collection burden with L2 to moderate individual-surface aberrations.

### L2+L3 — Cemented Achromatic Doublet (Positive)

**L2:** $n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — **ED fluorophosphate crown**. $f_{L2} = +96.0$ mm.

**L3:** $n_d = 1.65412$, $\nu_d = 39.7$. Glass: S-NBH5 (OHARA) — niobium borate flint. $f_{L3} = -134.4$ mm.

Cemented focal length: $f_{L2+L3} = +265.7$ mm.

This cemented doublet is the chromatic heart of the front group. L2 is the only ED glass element in the design — its very high Abbe number ($\nu_d = 81.6$) paired with the moderate-dispersion niobium flint of L3 ($\nu_d = 39.7$) produces a well-corrected achromatic pair with a large $\Delta\nu_d = 41.9$. The biconvex crown (L2) carries most of the converging power ($f = +96.0$ mm), while the biconcave flint (L3) introduces the compensating chromatic counterforce. The $\Delta n$ at the cemented junction ($\Delta n = 1.65412 - 1.49700 = 0.157$) is substantial, generating meaningful interface power that refines the balance between longitudinal chromatic aberration and spherochromatism. The junction surface $R = -4.3965$ normalized ($R \approx -924$ mm scaled) is weakly curved, so the interface power acts gently — a deliberate design choice to avoid introducing excessive higher-order chromatic residuals while maintaining broadband color correction.

### L4 — Negative Meniscus

$n_d = 1.58144$, $\nu_d = 40.7$. Glass: E-FL5 (HOYA) — borate/phosphate flint. $f = -191.6$ mm.

L4 is a negative meniscus with its convex side toward the object ($R_1 = +41.5$ mm, $R_2 = +28.3$ mm, both positive). It terminates the front positive group and serves two roles. First, its concave image-facing surface provides a correction site for the spherical aberration generated by L1 and L2 — the patent explicitly notes this mechanism (col. 3, lines 19–24). Second, as a negative element at the rear of the positive group, it bends the marginal ray more steeply, increasing the convergence angle entering the G1–G2 air gap. This allows the inner-focus group G2 to operate at a comfortable conjugate ratio, keeping its axial travel short (13.6 mm for the full infinity-to-1.8 m range). The moderate-index flint glass ($n_d = 1.58$) keeps the Petzval contribution mild relative to what a dense lanthanum type would introduce.

### L5+L6 — Cemented Focus Doublet (Negative, G2)

**L5:** $n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA) — titanium dense flint. $f_{L5} = +131.0$ mm.

**L6:** $n_d = 1.81600$, $\nu_d = 46.6$. Glass: S-LAH59 (OHARA) — lanthanum dense flint. $f_{L6} = -58.2$ mm.

Cemented focal length: $f_{L5+L6} = -108.2$ mm.

The entire second lens group is this single cemented doublet, which translates axially for focusing. The patent chose a cemented construction to suppress chromatic focus shift — as G2 moves, a singlet would introduce wavelength-dependent focal-plane errors, whereas the cemented pair constrains axial color and lateral color fluctuation during focus travel (col. 3, lines 25–30).

The glass pairing is unconventional: a biconvex dense titanium flint (L5, $\nu_d = 25.4$) cemented to a biconcave lanthanum dense flint (L6, $\nu_d = 46.6$). The Abbe difference ($\Delta\nu_d = 21.2$) is relatively small, and the *higher-Abbe element is the diverging element* — the inverse of a classical achromat. This reversed-dispersion doublet trades longitudinal chromatic correction efficiency for better control of the g-line (short-wavelength) spherical aberration that plagues dense flint glasses. The junction surface $R = -0.8199$ normalized ($R \approx -172$ mm) carries the full $\Delta n$ of $1.81600 - 1.80518 = 0.011$, which is near-zero — meaning the cemented interface contributes negligible optical power. The doublet's focal length is effectively set by the outer surfaces alone, with the junction acting primarily as a chromatic corrector through its dispersion difference rather than through surface curvature.

### L7+L8 — First Rear Cemented Doublet (Negative, G3)

**L7:** $n_d = 1.71736$, $\nu_d = 29.5$. Glass: SF1 (Schott) — dense flint. $f_{L7} = -55.7$ mm.

**L8:** $n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65 (OHARA) — lanthanum dense flint. $f_{L8} = +67.3$ mm.

Cemented focal length: $f_{L7+L8} = -435.5$ mm.

Positioned immediately after the aperture stop, this weakly negative cemented doublet ($f = -435$ mm) introduces divergence into the post-stop beam. L7 is a biconcave titanium flint of moderate index ($n_d = 1.717$), and L8 is a biconvex lanthanum dense flint ($n_d = 1.804$). The $\Delta\nu_d$ at the junction is $46.6 - 29.5 = 17.1$, with $\Delta n = 1.804 - 1.717 = 0.087$, so the interface does carry meaningful power. The junction surface has an unusual symmetry: $R_{13} = +0.3859$ normalized ($R \approx +81$ mm), which is exactly the same magnitude as L7's front radius ($R_{12} = -0.3859$). L7 is therefore a symmetric biconcave element with $|R_\text{front}| = |R_\text{rear}|$ — a shape that minimizes coma contribution for a diverging element placed near the stop, where the chief ray height is small and the marginal ray dominates aberration generation.

This doublet controls the sagittal and tangential field curvatures immediately behind the stop, contributing a negative Petzval term that counteracts the strongly positive contributions from the front group. Its chromatic correction complements the rear positive doublet L9+L10, forming a quasi-symmetric pair around the stop for coma and lateral-color suppression.

### L9+L10 — Second Rear Cemented Doublet (Positive, G3)

**L9:** $n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA) — titanium dense flint. $f_{L9} = -139.4$ mm.

**L10:** $n_d = 1.74000$, $\nu_d = 28.3$. Glass: S-TIH3 (OHARA) — titanium flint. $f_{L10} = +67.1$ mm.

Cemented focal length: $f_{L9+L10} = +129.7$ mm.

The final cemented doublet delivers the system's rear positive power and sets the exit pupil position. L9 is a negative meniscus ($R_1 = +190$ mm, $R_2 = +69.6$ mm) with its concave surface on the image side, as specified in the patent claims. L10 is a biconvex element that carries the relay's convergent power.

This pair uses an unusual two-flint construction: both L9 ($\nu_d = 25.4$) and L10 ($\nu_d = 28.3$) are from the flint glass family. The Abbe difference is only $\Delta\nu_d = 2.9$, making this doublet nearly achromatically neutral — it provides convergence with minimal chromatic contribution, relying on upstream elements (the G1 ED doublet and the G2 cemented pair) for the system's overall color correction. The small $\Delta n$ at the junction ($1.740 - 1.805 = -0.065$) produces a mild negative-power interface that assists field curvature correction. L9 and L5 share the same glass (S-TIH6, $n_d = 1.80518$, $\nu_d = 25.4$), reducing the number of distinct glass types in the bill of materials to nine.

## Glass Identification and Selection

The design uses nine distinct optical glasses across ten elements (L5 and L9 share the same titanium dense flint). All identifications below are based on exact $n_d$/$\nu_d$ matches against the OHARA catalog (pocket edition, May 2023). HOYA cross-reference names are listed where a confident equivalent exists, since Fuji Photo Optical historically sourced glass from both vendors.

| Element | $n_d$ | $\nu_d$ | OHARA | HOYA (equiv.) | Glass Family | Role |
|---------|-------|---------|-------|-------|--------------|------|
| L1 | 1.48749 | 70.2 | S-FSL5 | FC5 | Fluor-silicate crown | Low-dispersion front collector |
| L2 | 1.49700 | 81.6 | S-FPL51 | FCD1 | **ED fluorophosphate crown** | Primary chromatic corrector |
| L3 | 1.65412 | 39.7 | S-NBH5 | NBFD3 | Niobium borate flint | Achromatic partner to L2 |
| L4 | 1.58144 | 40.7 | E-FL5 | — | Phosphate flint | SA correction surface |
| L5 | 1.80518 | 25.4 | S-TIH6 | SF6 | Titanium dense flint | Focus group positive element |
| L6 | 1.81600 | 46.6 | S-LAH59 | TAFD25 | Lanthanum dense flint | Focus group diverger |
| L7 | 1.71736 | 29.5 | SF1 | — | Dense flint | Post-stop field corrector |
| L8 | 1.80400 | 46.6 | S-LAH65 | TAFD21 | Lanthanum dense flint | Post-stop positive partner |
| L9 | 1.80518 | 25.4 | S-TIH6 | SF6 | Titanium dense flint | Rear relay meniscus |
| L10 | 1.74000 | 28.3 | S-TIH3 | — | Titanium flint | Rear relay biconvex |

The glass palette reveals a clear strategy. The front group uses two low-dispersion glasses (L1 at $\nu_d = 70.2$, L2 at $\nu_d = 81.6$) to minimize chromatic introduction where the beam diameter is largest. The focus group and rear group shift to high-index, high-dispersion glasses ($n_d > 1.71$ throughout), which allows strongly curved surfaces at smaller diameters to achieve the required power without excessive thickness. The lanthanum dense glasses in L6 ($n_d = 1.816$, S-LAH59) and L8 ($n_d = 1.804$, S-LAH65) supply the high refractive index needed for compact negative and positive elements while maintaining moderate Abbe numbers ($\nu_d \approx 46.6$). Despite the "LAH" (lanthanum heavy) OHARA prefix, these are properly classified as lanthanum flints by the $\nu_d = 50$ boundary convention.

The S-FPL51 identification for L2 is strongly supported: the OHARA catalog lists $n_d = 1.49700$, $\nu_d = 81.54$; the cross-reference HOYA FCD1 lists $\nu_d = 81.61$, matching the patent's $\nu_d = 81.6$ to within 0.01. This ED fluorophosphate glass is the design's primary chromatic corrector and the only element with $\nu_d > 80$.

## Focus Mechanism

The HC 4/210 uses a two-gap inner-focus system. The second lens group (G2, the cemented doublet L5+L6) translates axially between the fixed first group (G1) and fixed third group (G3). At infinity focus, G2 sits closer to G1; as the lens focuses to closer distances, G2 moves toward the image, increasing the G1–G2 gap (D7) while decreasing the G2–G3 gap (D10) by the same amount.

| Gap | Surface | Infinity | Close Focus (1.8 m) | Change |
|-----|---------|----------|---------------------|--------|
| G1–G2 | D7 | 10.95 mm | 24.53 mm | +13.59 mm |
| G2–G3 | D10 | 22.89 mm | 9.30 mm | −13.59 mm |
| **Sum** | | **33.84 mm** | **33.84 mm** | **0.00 mm** |

The gap-sum conservation ($D7 + D10 = 33.84$ mm at all focus positions) confirms pure inner focus with no overall length change. The total G2 travel of 13.59 mm covers the full infinity-to-1.8 m range — a modest stroke that enables rapid autofocus response. The patent emphasizes this compact travel as a primary design goal, particularly for medium-format cameras where larger optics traditionally require longer focus throws.

The focus group's negative power ($f_2 = -108.2$ mm) means that as G2 moves rearward (toward the image), the system's effective focal length shortens slightly and the back focus adjusts to maintain sharp focus on closer objects. Because G2 is a cemented doublet rather than a singlet, chromatic focus shift is suppressed during focus travel — the patent explicitly cites this as the motivation for the cemented construction (col. 3, lines 25–30).

## Aspherical Surfaces

The Hasselblad HC 4/210 is an **entirely spherical design**. None of the three embodiments in US 6,445,511 B1 employ aspherical surfaces, and the patent text makes no mention of aspheric coefficients, conic constants, or polynomial deformations. This is consistent with the lens's moderate aperture ($f/4$) and narrow field angle ($2\omega = 19°$), which do not demand the higher-order aberration correction that aspherical surfaces provide. The all-spherical construction also reflects the manufacturing economics of the early-2000s H-system launch, where conventional polishing of ten spherical elements was more cost-effective than incorporating precision-molded or polished aspherics in a medium-format telephoto of this specification.

## Chromatic Correction Strategy

The design relies on a single ED element (L2, S-FPL51, $\nu_d = 81.6$) cemented to a niobium borate flint (L3, $\nu_d = 39.7$) in the front group for primary longitudinal chromatic correction. The large Abbe-number difference ($\Delta\nu_d = 41.9$) at the cemented interface provides the dominant achromatizing force, positioned where the marginal ray height is greatest and chromatic sensitivity is highest.

The focus group G2 uses a "reversed" chromatic pairing — a dense titanium flint (L5, $\nu_d = 25.4$) cemented to a lanthanum dense flint diverger (L6, $\nu_d = 46.6$). This unconventional arrangement prioritizes minimizing chromatic focal-shift during focus travel over maximizing the achromatic correction efficiency of the doublet itself. The near-zero $\Delta n$ at the junction ($0.011$) means that the interface power is negligible; the chromatic correction is achieved through the dispersion mismatch of the two glasses rather than through strong surface curvature at the boundary.

The rear group G3's two cemented doublets (L7+L8 and L9+L10) contribute laterally. L7+L8 has $\Delta\nu_d = 17.1$ (titanium flint / lanthanum flint), providing modest achromatic correction behind the stop. L9+L10, however, is nearly achromatically neutral ($\Delta\nu_d = 2.9$, both flints), delivering convergence with minimal chromatic impact — it relies on the upstream elements for color balance. This architecture concentrates the chromatic correction in the front group (where the beam is widest and the leverage is greatest) and allows the rear group to focus on field curvature, coma, and distortion control without introducing secondary chromatic residuals.

The overall chromatic correction is achromatic rather than apochromatic. With only one ED element and no anomalous-partial-dispersion pairing in the rear groups, secondary spectrum is not independently controlled. This is appropriate for an $f/4$ medium-format telephoto — the longitudinal color at $f/4$ is modest, and the 645 format's relatively coarse pixel pitch (compared to 35mm-format sensors of the same era) does not demand apochromatic correction.

## Conditional Expressions

The patent specifies two sets of conditional inequalities governing the group-focal-length ratios. Example 3 satisfies all six conditions.

**Primary conditions (Claims 1–3):**

| Condition | Inequality | Example 3 Value | Status |
|-----------|-----------|-----------------|--------|
| (1) | $0.6 < f_1/f < 0.7$ | 0.644 | Satisfied |
| (2) | $-1.0 < f_2/f < -0.5$ | −0.514 | Satisfied |
| (3) | $0.7 < f_3/f < 1.6$ | 0.781 | Satisfied |

**Tightened conditions (col. 7, lines 1–12; Embodiments 1 and 3 only):**

| Condition | Inequality | Example 3 Value | Status |
|-----------|-----------|-----------------|--------|
| (4) | $0.6 < f_1/f < 0.65$ | 0.644 | Satisfied |
| (5) | $-0.6 < f_2/f < -0.5$ | −0.514 | Satisfied |
| (6) | $0.7 < f_3/f < 0.9$ | 0.781 | Satisfied |

Condition (1) governs the front group's power relative to the system. Below the lower limit, aberration fluctuation (spherical aberration, coma, field curvature) during focus becomes excessive. Above the upper limit, the focus group's travel becomes too long, increasing the lens diameter and overall length.

Condition (2) constrains the focus group's negative power. A weaker negative group (above −0.5) causes coma, axial color, and lateral color to fluctuate excessively during focus, degrading close-focus image quality. A stronger negative group (below −1.0) extends the required focus travel.

Condition (3) sets the rear group's power. Below the lower limit, the back focal distance becomes too short for mirror clearance (critical for medium-format SLR cameras). Above the upper limit, the total length and front-element diameter grow excessive.

The patent notes that Example 3 (along with Example 1) satisfies the tightened conditions (4)–(6), which yield reduced astigmatism and distortion compared to the broader ranges of conditions (1)–(3). Example 2, which has $f_3/f = 1.537$, satisfies only the primary conditions.

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed as $\Sigma\, \phi_i / (n_i \cdot n_i')$ across all 17 refracting surfaces, yields a Petzval sum of $+0.0478$ (normalized). At production scale, the corresponding Petzval radius is approximately $+4391$ mm. The positive sign indicates a mildly backward-curving image field (curving toward the lens), which is the typical direction for a system with net positive power. The very large magnitude of the Petzval radius means the field is nearly flat — appropriate for the 645 format where the image plane must remain well-corrected over the full $56 \times 41.5$ mm frame. The negative–positive cemented doublet pair in G3 (L7+L8 negative, L9+L10 positive) is the primary Petzval-flattening mechanism: the negative doublet introduces negative Petzval terms that partially cancel the strongly positive contributions from the front collector group.

## Verification Summary

The following parameters were independently computed from the patent prescription via ABCD matrix paraxial ray trace and compared to patent-stated and manufacturer-published values.

| Parameter | Computed | Patent/Manufacturer | Match |
|-----------|----------|---------------------|-------|
| EFL | 210.00 mm | 210 mm (mfr) / 211.1 mm (measured) | ✓ |
| $F_{NO}$ | 4.0 | 4.0 | ✓ |
| $2\omega$ | 19.0° | 19° (mfr) | ✓ |
| MFD | 1.79 m | 1.8 m (5.91 ft) | ✓ |
| Elements / Groups | 10 / 6 | 10 / 6 | ✓ |
| $f_1/f$ | 0.644 | 0.644 (patent) | ✓ |
| $f_2/f$ | −0.515 | −0.514 (patent) | ✓ |
| $f_3/f$ | 0.783 | 0.781 (patent) | ✓ |
| BFD | 96.5 mm | > 61.6 mm (H-mount flange) | ✓ |
| Petzval radius | +4391 mm | — | — |
| TL/f | 1.055 | — | — |
| Gap-sum conservation | 0.000 mm | — | ✓ |
| Focus travel | 13.59 mm | — | — |

## Design Heritage and Context

The HC 4/210 represents the Hasselblad H-system's telephoto offering at launch, designed entirely by Fuji Photo Optical under the Fujinon engineering program and sold under both the Hasselblad and Super EBC Fujinon brands. The three-group positive–negative–positive inner-focus architecture with a front achromatic ED doublet and rear quasi-symmetric cemented pairs is a classical approach for medium-format telephoto primes, descended from the same lineage as Mamiya and Pentax 645-format telephoto designs of the 1990s. The all-spherical construction, single ED element, and conservative $f/4$ aperture prioritize reliability and manufacturing consistency over exotic correction — a practical choice for the H-system's professional user base, where medium-format resolution at moderate apertures was the primary design target.

The patent explicitly notes that the design is "primarily used as a lens for a single-lens reflex camera that employs mid-size film" ($6 \times 8$ cm format), confirming the lens's origins in the film-era H1 camera system. The leaf shutter integration (a hallmark of H-system lenses, enabling flash sync at all speeds) is not addressed in the optical patent but constrains the mechanical packaging — the generous 96.5 mm back focal distance accommodates both the SLR mirror box and the integrated central shutter assembly.

## Sources

- US 6,445,511 B1, "Inner-Focus-Type Lens," Fuji Photo Optical Co., Ltd. (2002).
- Hasselblad official product page: HC 4/210, https://www.hasselblad.com/h-system/lenses/hc4-210mm/.
- B&H Photo product listing (specifications): https://www.bhphotovideo.com/c/product/1245046-REG/.
- Shige's Hobby, measured focal length 211.1 mm: https://shige-art.net/en/hasselblad-hc210/.
- OHARA optical glass catalog (pocket edition, May 2023).
- HOYA optical glass catalog cross-reference index.
