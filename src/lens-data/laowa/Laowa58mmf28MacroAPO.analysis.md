# Optical Design Analysis: Laowa 58 mm f/2.8 2× Ultra-Macro APO

## Patent Reference and Design Identification

**Patent:** CN 116520542 A, "一种高倍率微距镜头" (*A High-Magnification Macro Lens*)
**Applicant:** 安徽长庚光学科技有限公司 (Anhui ChangGeng Optical Technology Co., Ltd. — Laowa)
**Inventor:** 李大勇 (Li Dayong)
**Filed:** 2023-02-16
**Published:** 2023-08-01
**Embodiment analyzed:** Example 2 (实施例2, ¶0051–0064)

The patent discloses two numerical examples. Example 1 is a longer-focal-length variant ($f = 87.1$ mm) that does not correspond to any known production lens. Example 2 is identified as the production Laowa 58 mm f/2.8 2× Ultra-Macro APO by the following convergent evidence:

1. **Element and group count.** Example 2 contains 14 elements in 11 air-separated groups. The production lens is marketed as "14 elements in 11 groups" (Laowa product page; B&H product listing).
2. **Focal length.** The patent states $f = 59.2122$ mm (¶0054). Independent paraxial ray trace confirms $f = 59.21$ mm. The production lens is marketed at 58 mm — a standard rounding.
3. **Maximum aperture.** The patent states $F_{\mathrm{no}} = 2.9$ (¶0055). The production lens is marketed at f/2.8 — a standard rounding toward the nearest full stop.
4. **Half-field angle.** The patent gives $\omega = 19.95°$ (¶0056), yielding a full angle of view of $2\omega = 39.9°$. The production lens specifies 40.9°. The difference is consistent with the patent computing $\omega$ at a slightly smaller image height ($Y_{\max} = 21.5$ mm) than the full 135-format diagonal ($21.64$ mm).
5. **Maximum magnification.** The patent publishes variable spacing data for infinity, 1× (equal magnification), and 2× positions (¶0059–0060). The production lens is marketed as "2:1 magnification" — a direct match.
6. **Focus mechanism.** The patent describes G1 fixed, G2 and G3 moving toward the object during close focus (¶0052), consistent with the production lens's "internal focusing" claim and the absence of front-element rotation or barrel extension noted in all published reviews.
7. **ED and high-index element count.** The prescription contains four elements of H-FK61 (CDGM) ED fluorophosphate glass and four elements with $n_d > 1.85$ (ultra-high refractive index). The production lens is marketed as having "3 ED glasses and 3 glasses with Ultra-High Refractive Index." The small count discrepancy (4 vs. 3 in each category) is discussed in the Glass Identification section below.
8. **Applicant identity.** Anhui ChangGeng Optical is the corporate entity behind the Laowa brand. The lens was announced September 2022; the patent was filed five months later, a routine lag for Chinese patent filings by domestic optics firms.
9. **All-spherical construction.** The patent publishes no aspheric coefficient table for Example 2, and no surfaces are marked as aspherical. This is consistent with all available teardown and review evidence, none of which mentions aspheric elements.

No production lens from Laowa other than the Laowa 58 mm f/2.8 2× Ultra-Macro APO matches this combination of parameters.


## Optical Architecture

The Laowa 58 mm f/2.8 2× is an all-spherical, internally focusing macro design arranged in three functional groups from object to image: a weakly negative fixed front group (G1), a strongly positive main focusing group (G2), and a moderately negative auxiliary focusing group (G3). The power distribution is negative–positive–negative, with the aperture stop located at the rear of G2.

| Group | Elements | Surfaces | Computed $f$ (mm) | Role |
|-------|----------|----------|-------------------:|------|
| G1 | L1–L2 | S1–S4 | $-1\,815$ | Fixed front corrector; near-afocal |
| G2 | L3–L9 + STO | S5–S17 | $+37.0$ | Main positive focusing group |
| G3 | L10–L14 | S18–S26 | $-65.1$ | Negative auxiliary focus / field corrector |

G1 is nearly afocal (extremely weak negative power, $f \approx -1{,}815$ mm). Its primary function is not refractive convergence but rather chromatic pre-correction and collection of the entrance beam at a moderate diameter before delivering it across the large air gap to G2. L1 is a weakly negative meniscus of lanthanum flint, and L2 is a weakly positive meniscus of dense flint; together they form a thin, diverging corrector pair that sets up the chromatic balance for the groups that follow.

G2 is a dense cluster of seven elements spanning five air-separated sub-groups. It contains both cemented doublets (L5+L6 and L7+L8), the strongest positive refracting elements (L3, L4, L6), and the aperture stop. G2's focal length is $+37.0$ mm — considerably shorter than the system EFL of $59.2$ mm — meaning it carries the bulk of the system's refracting power. During focusing from infinity to 2× magnification, G2 advances 47.0 mm toward the object, traversing nearly all of the large air gap D(4).

G3 contains five elements in four air-separated sub-groups: one negative meniscus (L10), one cemented doublet (L11+L12), one concave-to-object negative meniscus (L13), and one equi-biconvex field flattener (L14). Its composite focal length is $-65.1$ mm. G3 moves 8.1 mm toward the object during the same infinity-to-2× travel, compensating for the substantial changes in conjugate ratio, field curvature, and spherochromatism introduced by G2's large displacement.

The total optical track length from the front vertex (S1) to the image plane is 124.88 mm and is conserved at all focus positions — confirming internal focusing with a constant barrel length. The back focal distance varies from 14.93 mm at infinity to 23.02 mm at 2× magnification.


## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

$n_d = 1.86665$, $\nu_d = 45.00$. Glass: H-LAF3B (CDGM) — lanthanum flint. $f = -263.9$ mm.

L1 is a thin, weakly negative meniscus ($R_1 = +491.12$, $R_2 = +155.85$, $d = 1.35$ mm) positioned as the front element of G1. Its high refractive index ($n_d = 1.87$) combined with weak curvature introduces very little optical power but contributes to chromatic correction. As the frontmost element, L1 sets the entrance pupil diameter and determines the lens's susceptibility to front-surface flare. The lanthanum flint glass provides moderate anomalous dispersion, assisting the primary achromatization that is completed by L2 in conjunction with the ED elements downstream. The patent figure shows this element as a nearly flat plate with slight meniscus curvature — consistent with the very large radii.

### L2 — Biconvex Positive

$n_d = 1.78472$, $\nu_d = 25.72$. Glass: H-ZF88 (CDGM) — dense flint. $f = +310.6$ mm.

L2 is a weakly positive biconvex element ($R_1 = +335.03$, $R_2 = -890.60$, $d = 3.30$ mm) that completes G1. Both radii are large, giving only modest curvature despite the biconvex form. Its dense flint composition ($\nu_d = 25.7$) pairs chromatically with L1's higher-$\nu_d$ lanthanum flint. Together, L1 and L2 form a widely spaced achromatic corrector of near-zero net power. The combination introduces a controlled amount of longitudinal chromatic aberration (LCA) with the opposite sign to that produced by G2's powerful positive elements, contributing to the lens's APO performance. L2's relatively thick center ($3.3$ mm) also provides structural rigidity for the G1 cell, which must remain positionally stable as G2 and G3 move behind it.

### L3 — Biconvex Positive (ED)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate, equivalent to S-FPL51 (OHARA) or FCD1 (HOYA). $f = +73.5$ mm.

L3 is the first element of G2 and the first of four H-FK61 ED elements in the design. Its strong biconvex form ($R_1 = +81.62$, $R_2 = -65.28$) provides substantial positive power while its very low dispersion ($\nu_d = 81.6$) minimizes the chromatic aberration that such power would otherwise introduce. Positioned immediately after the large D(4) air gap, L3 receives the near-collimated beam from G1 and begins converging it toward the stop. Its ED glass ensures that primary chromatic aberration is corrected at this critical power-delivery point. L3 is the first element of the main positive group that travels forward during macro focusing.

### L4 — Positive Meniscus, Convex to Object

$n_d = 1.72916$, $\nu_d = 54.67$. Glass: H-LAK53A (CDGM) — lanthanum crown. $f = +73.7$ mm.

L4 is a positive meniscus ($R_1 = +24.62$, $R_2 = +43.39$) with strong curvature on both surfaces. Its lanthanum crown glass provides a good balance of moderate dispersion and high refractive index, allowing significant power contribution without excessive chromatism. L4 shares the convergence burden with L3, and its meniscus form (both surfaces convex to object) helps control coma and oblique spherical aberration. The combination of L3 (low-index, low-dispersion) and L4 (moderate-index, moderate-dispersion) distributes the primary positive power of G2's front sub-group across two elements with complementary dispersion characteristics.

### L5+L6 — Cemented Doublet (Negative–Positive)

**L5:** $n_d = 1.83327$, $\nu_d = 25.02$. Glass: H-ZF72 (CDGM) — dense flint. $f = -12.4$ mm.
**L6:** $n_d = 1.92286$, $\nu_d = 20.88$. Glass: H-ZLAF92 (CDGM) — ultra-high refractive index dense flint. $f = +14.6$ mm.
**Doublet:** $f = -97.5$ mm (weakly negative).

This cemented doublet is the most optically distinctive sub-assembly in the design. L5 is a strongly negative biconcave element ($R_1 = -39.00$, $R_2 = +14.26$) of dense flint glass. L6 is a strongly positive biconvex element ($R_1 = +14.26$, $R_2 = -203.48$) of ultra-high refractive index glass — the highest $n_d$ in the entire lens at 1.92286. The junction surface ($R = 14.26$ mm) is shared, and the refractive index step across the cement is $\Delta n_d = +0.090$ (from 1.833 to 1.923), producing a strongly refracting internal surface.

Despite both elements being dense flints with similar Abbe numbers (25.0 vs. 20.9), the doublet's primary role is not achromatization in the traditional crown-flint sense. Instead, this pair functions as an aberration-balancing unit positioned just ahead of the stop in the converging beam. L5's strong negative power introduces overcorrected spherical aberration and field curvature that partially cancels the undercorrection from L3 and L4. L6's ultra-high index reclaims the lost positive power through moderate surface curvatures, exploiting the relationship $\phi \propto (n-1)/R$: at $n_d = 1.92$, a surface with $R = 14.3$ mm contributes $\phi = +0.065$ mm$^{-1}$, which would require $R \approx 8.0$ mm in BK7-class glass.

The net doublet power is weakly negative ($f = -97.5$ mm), so the pair acts primarily as a corrector rather than a power contributor. Its location just before the next doublet and the aperture stop is consistent with a role in controlling zonal spherical aberration and reducing the Petzval sum — critical for flat-field macro imaging. The deeply curved junction ($R = 14.26$ mm) is the binding semi-diameter constraint in G2: edge-thickness limits on L6 restrict the doublet's clear aperture to approximately 9.5–10 mm semi-diameter, below the full marginal-ray height at this position.

### L7+L8 — Cemented Doublet (Negative–Positive, Achromatic)

**L7:** $n_d = 1.84666$, $\nu_d = 23.78$. Glass: H-ZF13 (CDGM) — dense flint. $f = -22.4$ mm.
**L8:** $n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate. $f = +29.9$ mm.
**Doublet:** $f = -94.2$ mm (weakly negative).

This is a classic achromatic doublet pairing a high-dispersion dense flint (L7, $\nu_d = 23.8$) with a low-dispersion ED fluorophosphate (L8, $\nu_d = 81.6$). The Abbe number ratio is $81.6 / 23.8 = 3.43$, providing strong achromatizing leverage. L7 is a negative meniscus with very weak curvature on its front surface ($R_1 = +277.95$) and strong curvature at the cemented junction ($R_2 = R_{\mathrm{junction}} = +17.71$). L8 is a biconvex element sharing this junction radius.

Like the L5+L6 doublet, this pair is weakly negative overall ($f = -94.2$ mm). It corrects the secondary spectrum that accumulates from the positive elements upstream. The use of H-FK61 ED glass at this position — paired with a dense flint of very different Abbe number — directly addresses the apochromatic correction that the lens's "APO" designation implies. This is one of the key doublets responsible for suppressing longitudinal chromatic aberration across the C, d, and F lines simultaneously.

The two doublets (L5+L6 and L7+L8) together form a "double-doublet" corrector immediately ahead of the stop. Their combined power is negative ($f \approx -47$ mm effective), which partially offsets the positive power of L3 and L4 while providing strong chromatic and monochromatic correction. This architecture — distributing the positive power among simple singlets and burying the chromatic correction in cemented pairs — is characteristic of modern high-performance macro designs.

### L9 — Biconvex Positive

$n_d = 1.89782$, $\nu_d = 29.90$. Glass: H-ZLAF68N (CDGM) — high refractive index lanthanum flint. $f = +43.5$ mm.

L9 is a nearly plano-convex element ($R_1 = +684.0$, essentially flat front; $R_2 = -41.37$, strongly curved rear) of high-index glass, positioned as the last refracting element before the aperture stop. Its front surface contributes almost no power; the rear surface delivers all of the element's $+43.5$ mm focal length. This asymmetric form concentrates the bending on the image-side surface, where the beam is already strongly converging. L9's high refractive index ($n_d = 1.90$) minimizes Petzval contribution per unit of power, contributing to the flat field correction essential for macro work. Its moderate Abbe number ($\nu_d = 29.9$) means it introduces some chromatic aberration, which is balanced by the upstream ED doublets.

L9 completes G2. Together, the seven elements of G2 provide $f = +37.0$ mm of net positive power — considerably shorter than the system's $59.2$ mm EFL. The difference is accounted for by G3: its negative power, placed behind the stop, extends the effective focal length from G2's $37.0$ mm to the system's $59.2$ mm. This positive-negative power split resembles the front/rear group relationship in a telephoto, but the lens is not telephoto-compact — the total track (124.9 mm) is $2.1\times$ the EFL, owing to the large G1–G2 air gap required for focusing travel.

### Aperture Stop (STO)

The aperture stop is located in the air gap between L9 (the last element of G2) and L10 (the first element of G3). The entrance pupil semi-diameter is $\mathrm{EP_{sd}} = f / (2 F_{\mathrm{no}}) = 59.21 / (2 \times 2.9) \approx 10.2$ mm; at the stop itself the paraxial marginal ray height is 12.0 mm, reflecting the positive power of G2 between the entrance pupil and the iris. The stop is part of the G2 moving group and advances with it during focusing.

### L10 — Negative Meniscus, Convex to Object

$n_d = 1.79391$, $\nu_d = 47.17$. Glass: H-LAF4 (CDGM) — lanthanum flint. $f = -41.9$ mm.

L10 is the first element of G3 and a moderately strong negative meniscus ($R_1 = +121.42$, $R_2 = +26.02$). As the first element after the stop, it receives the most tightly converging axial beam in the system. Its negative power diverges this beam, beginning the positive-to-negative power transition that defines G3. The meniscus form (convex to object, concave to image) generates Petzval contribution with the same sign as a simple negative lens but with reduced higher-order aberrations compared to a biconcave form. L10 also acts as a field curvature corrector, introducing negative Petzval curvature that offsets the strong positive Petzval contribution from G2. The strongly curved rear surface ($R_2 = +26.02$) faces the L11 front ($R = -31.18$) across a narrow 3.15 mm air gap — the tightest cross-gap in G3 and the binding semi-diameter constraint for the entire rear group.

### L11+L12 — Cemented Doublet (Negative–Positive)

**L11:** $n_d = 1.54517$, $\nu_d = 48.63$. Glass: H-QK3L (CDGM) — light crown. $f = -24.9$ mm.
**L12:** $n_d = 1.86602$, $\nu_d = 41.79$. Glass: H-ZLAF55C (CDGM) — high refractive index lanthanum flint. $f = +18.2$ mm.
**Doublet:** $f = +57.0$ mm (moderately positive).

This is the third cemented doublet in the design and the only one with net positive power ($f = +57.0$ mm). It is positioned well behind the stop in the diverging beam of G3. L11 is a relatively low-index biconcave negative element ($R_1 = -31.18$, $R_2 = +24.25$) of light crown glass. L12 is a high-index biconvex positive element ($R_1 = +24.25$, $R_2 = -40.73$) of lanthanum flint. The Abbe number separation is only $\Delta\nu_d = 6.8$ — far smaller than the $\Delta\nu_d > 20$ typical of achromatic doublets. Moreover, the sign convention is inverted relative to a traditional achromat: the negative element (L11) has the higher Abbe number (lower dispersion, $\nu_d = 48.6$) and the positive element (L12) has the lower Abbe number (higher dispersion, $\nu_d = 41.8$). In a standard achromat the positive element is the low-dispersion crown and the negative element is the high-dispersion flint; here those roles are swapped. This means the doublet does not achromatize in the normal sense — both elements push chromatic aberration in the same direction. The purpose of this configuration is to provide a specific sign and magnitude of chromatic contribution that, combined with the ED elements elsewhere in the system, yields the overall secondary spectrum correction required for APO performance. The net positive power from this doublet partially compensates for L10's negative contribution, shaping G3's overall field flattening without fully canceling its diverging effect.

The thick biconvex L12 ($d = 5.05$ mm) also plays an important structural role. The 12.8 mm air gap that follows (the largest internal air space in G3) allows the diverging beam to expand before reaching the final two elements.

### L13 — Negative Meniscus, Concave to Object

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate. $f = -34.4$ mm.

L13 is a concave-to-object negative meniscus ($R_1 = -17.04$, $R_2 = -4{,}370.32$; nearly plano rear) of ED glass. Its strongly curved front surface and nearly flat rear produce a moderately strong negative power of $-34.4$ mm. Despite being a negative element, L13's ED glass makes its chromatic contribution distinctive: it removes color in the diverging direction, counterbalancing the chromatic effect of L12's positive lanthanum flint. L13's position near the image plane, where the chief ray height is large, makes it particularly effective at controlling lateral chromatic aberration (lateral color). This is the third of four H-FK61 elements in the design.

### L14 — Equi-Biconvex Positive (ED, Field Flattener)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate. $f = +59.0$ mm.

L14 is the final element before the image plane: an equi-biconvex positive lens ($R_1 = +57.56$, $R_2 = -57.56$, $d = 6.55$ mm) of ED glass. Its focal length of $+59.0$ mm — nearly identical to the system EFL — is not coincidental: this element acts as a combined field flattener and telecentricity corrector. The symmetric biconvex form minimizes coma contribution, and the ED glass ensures that the positive power introduces minimal chromatic aberration.

L14 is unusually thick for a rear field flattener ($6.55$ mm center thickness), which shifts the rear principal plane forward and allows the BFD to remain sufficient for mirrorless mount clearance (14.9 mm at infinity). The equi-biconvex symmetry also makes L14 straightforward to manufacture and reduces sensitivity to centering errors.


## Glass Identification and Selection

All fourteen elements match CDGM (Chengdu Guangming) catalog glasses with residuals at or below instrument precision ($\Delta n_d \le 5 \times 10^{-5}$, $\Delta\nu_d \le 0.1$). This is expected for a lens designed and manufactured by Anhui ChangGeng Optical, a Chinese firm that would naturally source from the domestic catalog. The table below summarizes the identifications.

| Element | $n_d$ | $\nu_d$ | Glass (CDGM) | Cross-Reference | Class |
|---------|------:|--------:|--------------|-----------------|-------|
| L1 | 1.86665 | 45.00 | H-LAF3B | — | Lanthanum flint |
| L2 | 1.78472 | 25.72 | H-ZF88 | S-TIH18 (OHARA) | Dense flint |
| L3 | 1.49700 | 81.61 | H-FK61 | FCD1 (HOYA), S-FPL51 (OHARA) | ED fluorophosphate |
| L4 | 1.72916 | 54.67 | H-LAK53A | S-LAL18 (OHARA) | Lanthanum crown |
| L5 | 1.83327 | 25.02 | H-ZF72 | — | Dense flint |
| L6 | 1.92286 | 20.88 | H-ZLAF92 | S-NPH53 (OHARA) | Ultra-high index dense flint |
| L7 | 1.84666 | 23.78 | H-ZF13 | S-TIH53 (OHARA) | Dense flint |
| L8 | 1.49700 | 81.61 | H-FK61 | FCD1 (HOYA), S-FPL51 (OHARA) | ED fluorophosphate |
| L9 | 1.89782 | 29.90 | H-ZLAF68N | — | High-index lanthanum flint |
| L10 | 1.79391 | 47.17 | H-LAF4 | — | Lanthanum flint |
| L11 | 1.54517 | 48.63 | H-QK3L | — | Light crown |
| L12 | 1.86602 | 41.79 | H-ZLAF55C | TAFD40 (HOYA) | High-index lanthanum flint |
| L13 | 1.49700 | 81.61 | H-FK61 | FCD1 (HOYA), S-FPL51 (OHARA) | ED fluorophosphate |
| L14 | 1.49700 | 81.61 | H-FK61 | FCD1 (HOYA), S-FPL51 (OHARA) | ED fluorophosphate |

### ED Glass Strategy

Four elements (L3, L8, L13, L14) use H-FK61, the CDGM equivalent of the well-known S-FPL51 (OHARA) / FCD1 (HOYA) ED fluorophosphate. This glass has anomalous partial dispersion ($\Delta P_{g,F} \approx +0.038$), which is essential for secondary spectrum correction. The four ED elements are distributed strategically across G2 and G3: L3 at the front of G2, L8 in the rear achromatic doublet of G2, and L13–L14 in the rear of G3 near the image plane.

The production lens is marketed as having "3 ED glasses." The prescription contains four. The most likely explanation is that the marketing count groups L13 and L14 — which sit adjacent to each other in G3, share the same glass, and function together as a field-correcting pair — as a single "ED component." Alternatively, the count may refer to three *locations* within the optical path where ED glass is deployed (G2 front, G2 rear doublet, G3 rear), rather than four individual elements.

### Ultra-High Refractive Index Strategy

Setting the threshold at $n_d > 1.85$, four elements qualify: L1 ($n_d = 1.87$), L6 ($n_d = 1.92$), L9 ($n_d = 1.90$), and L12 ($n_d = 1.87$). The marketing claim of "3 glasses with Ultra-High Refractive Index" presumably uses a threshold closer to $n_d \ge 1.88$, which would include L6, L9, and exclude the borderline L1 and L12. The three highest-index elements — L6 ($n_d = 1.92$), L9 ($n_d = 1.90$), and one of L1 or L12 — are positioned where high index reduces Petzval contribution and controls higher-order aberrations: L6 in the converging beam between L4 and the stop, L9 immediately before the stop, and L12 in the diverging beam of G3. L6 at $n_d = 1.92$ is one of the highest-index production glasses available in any catalog and is instrumental in maintaining flat field at macro magnifications.

### Glass Palette Summary

The design uses eleven distinct glass types from the CDGM catalog. The palette is dominated by high-index lanthanum flints and dense flints on the negative-power side, paired with H-FK61 ED fluorophosphate on the positive-power side. This is a chromatic-correction-driven glass selection: every cemented doublet pairs a high-dispersion flint with either a low-dispersion ED glass or a complementary lanthanum type, ensuring that the aggregate chromatic contribution across each interface is tightly controlled. The absence of KZFS-class (negative anomalous dispersion) glasses is notable; the APO correction here is achieved entirely through positive-$\Delta P_{g,F}$ ED elements balanced against normal-dispersion flints, rather than through the ED + KZFS pairing found in some competitors.


## Chromatic Correction Strategy

The lens carries the "APO" (apochromatic) designation, implying correction of chromatic aberration at three wavelengths rather than the two of a conventional achromat. The patent does not publish per-element line indices ($n_C$, $n_F$, $n_g$), so the following analysis is inferred from the glass selection and the design architecture rather than directly computed from spectral data.

**Primary achromatization** is concentrated in the L7+L8 cemented doublet, which pairs H-ZF13 dense flint ($\nu_d = 23.78$) with H-FK61 ED fluorophosphate ($\nu_d = 81.61$). The Abbe number difference of $\Delta\nu_d = 57.83$ provides strong achromatizing leverage — the largest in the design. This doublet is positioned just ahead of the stop, where the marginal ray height is moderate and the chief ray height is small, making it effective at correcting axial (longitudinal) chromatic aberration with minimal impact on lateral color.

**Secondary spectrum correction** — the hallmark of APO performance — relies on the anomalous partial dispersion of H-FK61. This glass has $\Delta P_{g,F} \approx +0.038$ (deviation from the Schott normal line), meaning its blue-violet dispersion is lower than a normal glass of the same Abbe number would predict. When H-FK61 carries positive power and is paired with a normal-dispersion dense flint carrying negative power, the secondary spectrum (the residual C–F vs. d–F chromatic error that persists in a two-wavelength achromat) is reduced. The L7+L8 doublet is the primary site of this correction.

The remaining three H-FK61 elements (L3, L13, L14) reinforce the APO correction from different positions in the optical path. L3, at the front of G2, delivers strong positive power with very low chromatic contribution, reducing the total chromatism that downstream elements must correct. L13, positioned near the image plane in G3, operates where the chief ray height is large relative to the marginal ray height. Negative ED power at this location preferentially corrects lateral chromatic aberration (chromatic difference of magnification), which is the dominant chromatic defect in off-axis image formation. L14's equi-biconvex ED element, also near the image plane, provides positive power with minimal chromatic contribution, preserving the lateral color correction established by L13.

**Chromatic stability across focus.** A critical challenge for any macro lens achieving 2× magnification is maintaining chromatic correction as the conjugate ratio changes from $m = 0$ (infinity) to $m = -2$ (2× macro). The axial color balance that holds at infinity need not hold at 2×, because the ray heights and angles through each element change substantially. This design addresses the problem by distributing ED glass across both moving groups: G2 contains L3 and L8 (within the L7+L8 doublet), while G3 contains L13 and L14. When G2 advances 47 mm forward and G3 advances 8 mm, both groups carry their own chromatic correction with them, preserving the overall balance. The G1 pre-corrector (L1+L2) — a weakly diverging lanthanum flint + dense flint pair — provides a fixed chromatic baseline that does not change with focus. The aberration plots in the patent (Fig. 4) show well-corrected spherical aberration across the g, d, and C lines at infinity, 1×, and 2× magnification, confirming that the multi-group ED distribution maintains APO performance throughout the focus range.

**The role of the non-ED doublets.** The L5+L6 doublet (H-ZF72 + H-ZLAF92, both dense flints with $\Delta\nu_d = 4.86$) and the L11+L12 doublet (H-QK3L + H-ZLAF55C, $\Delta\nu_d = 6.84$) are not traditional achromats — their Abbe number separations are too small. Instead, these pairs contribute to monochromatic aberration control (spherical aberration, coma, field curvature) while making deliberate, small chromatic contributions whose signs are set by the designer to fine-tune the overall secondary spectrum balance. The inverted sign convention in L11+L12 — where the negative element has lower dispersion than the positive element — places a specific chromatic residual into G3 that, together with L13's ED correction, yields the desired three-wavelength color balance at the image plane.


## Focus Mechanism

The lens uses a dual-group internal focusing system. During focusing from infinity to 2× magnification:

- **G1 (L1–L2) is fixed.** It does not translate axially. This keeps the front element stationary — consistent with the production lens's internal focusing claim and the absence of barrel extension.
- **G2 (L3–L9 + STO) translates forward** (toward the object) by 47.0 mm, consuming nearly the entire D(4) air gap. At 2× magnification, D(4) shrinks from 47.77 mm to only 0.80 mm.
- **G3 (L10–L14) translates forward** by 8.1 mm, providing auxiliary focus compensation. The back focal distance (D26) increases from 14.93 mm at infinity to 23.02 mm at 2× magnification.

The variable gap data from the patent (¶0059–0060) is:

| Gap | Infinity | 1× Magnification | 2× Magnification |
|-----|--------:|-----------------:|-----------------:|
| D(4) — G1 to G2 | 47.7715 | 22.9173 | 0.8000 |
| D(17) — STO to G3 | 1.4000 | 20.8924 | 40.2782 |
| D(26) — BFD | 14.9285 | 20.2903 | 23.0218 |
| **Sum** | **64.1000** | **64.1000** | **64.1000** |

The total variable gap sum is exactly conserved at 64.10 mm across all focus positions, confirming that the overall optical track length (124.88 mm from front vertex to image plane) remains constant. This is the hallmark of internal focusing: G2 and G3 redistribute the air space within the barrel without changing the barrel's external dimensions.

The G2 travel from infinity to 1× is 24.85 mm; from infinity to 2× it is 46.97 mm. The ratio $|S_2/S_1| = 46.97/24.85 = 1.890$, matching the patent's conditional expression (2) value of 1.891 (¶0066). This ratio governs the extension efficiency: a value near 2.0 means the 2× travel is roughly double the 1× travel, indicating a near-linear relationship between magnification and group displacement. The patent specifies the acceptable range as $1.4 \le |S_2/S_1| \le 2.1$.

G3's auxiliary motion is considerably smaller (8.1 mm vs. 47.0 mm for G2) but is critical for maintaining image quality across the magnification range. As G2 advances and the conjugate ratio changes dramatically (from $m = 0$ at infinity to $m = -2$ at 2×), the spherical aberration balance, field curvature, and chromatic state all shift. G3's compensating motion — coupled with the changing BFD — rebalances these aberrations without requiring aspheric surfaces or exotic glass not already present.

The production lens specifies a minimum focusing distance of 18.5 cm (measured from the sensor plane). At 2× magnification, the object-to-image distance is approximately $\text{MFD} + \text{flange distance} \approx 185$ mm, placing the object roughly 60–70 mm from the front vertex — very close, consistent with the macro working distances reported in reviews.


## Aspherical Surfaces

**The design contains no aspherical surfaces.** The patent publishes no aspheric coefficient table for Example 2. All 26 optical surfaces are spherical, and the aperture stop (S17) is flat ($R = \infty$).

This is architecturally significant: the lens achieves its APO chromatic correction and flat-field macro performance entirely through glass selection and element count rather than aspherical surface shaping. The fourteen-element, all-spherical approach is unusual among modern high-performance macro lenses, many of which employ one or more glass-molded (GMo) or precision-molded aspheres to reduce element count. The Laowa design instead accepts a higher element count (14 vs. typically 10–12 for competing macro lenses) to achieve its correction targets with spherical surfaces alone. This choice likely reflects a manufacturing-cost optimization: spherical surfaces are less expensive to produce in volume than precision aspheres, and the additional elements are offset by the use of CDGM glass, which is generally priced below equivalent OHARA or Schott grades.


## Petzval Sum and Field Correction

The surface-by-surface Petzval sum is $\sum \phi_i / (n_i \cdot n_i') = 0.00277$ mm$^{-1}$, yielding a Petzval radius of $R_P = 361$ mm. This is well-corrected for a 59 mm lens — flat-field performance is essential for macro photography, where the subject plane is typically perpendicular to the optical axis and must be reproduced without field curvature across the sensor.

The flat Petzval is achieved primarily through the high-index elements (L6, L9, L12), which deliver positive power with minimal $n \cdot n'$ denominator penalty, and through the negative groups (the doublets L5+L6, L7+L8, and the G3 architecture), which introduce negative Petzval contributions that offset the positive elements. L14's equi-biconvex form near the image plane also contributes: its focal length ($+59.0$ mm) nearly matches the system EFL, and its position close to the image plane amplifies its field-flattening effect.


## Conditional Expressions

The patent defines four conditional inequalities (¶0007–0025). All are satisfied by Example 2:

| Condition | Expression | Computed | Patent Value | Range | Status |
|-----------|-----------|--------:|------------:|---------:|--------|
| (1) | $\|L / DL_2\|$ | 2.614 | 2.613 | 2.0–3.5 | Satisfied |
| (2) | $\|S_2 / S_1\|$ | 1.890 | 1.891 | 1.4–2.1 | Satisfied |
| (3) | $Y_{\max} / F_2$ | 0.581 | 0.580 | 0.3–0.8 | Satisfied |
| (4) | $\|F_2 / F_3\|$ | 0.568 | 0.568 | 0.2–1.5 | Satisfied |

Condition (1) constrains the ratio of total optical length to the G1–G2 separation, governing the compactness vs. focusing travel trade-off. Condition (2) limits the magnification-to-travel ratio, ensuring that 2× macro is achievable without excessive barrel length. Condition (3) bounds the G2 power relative to the image circle, preventing aberration overcorrection from excessive G2 power. Condition (4) balances G2 and G3 power to ensure the auxiliary focusing group contributes meaningfully to aberration compensation without being so strong that it introduces uncorrectable field curvature.


## Design Heritage and Context

The patent's background section (¶0002–0003) cites JP 2006-153942, JP 2012-53260, and JP 2012-63403 as prior art — all Japanese macro lens patents with positive-negative-positive-negative group architectures and two-group internal focusing. The inventor characterizes these prior designs as having too many elements, insufficient magnification range (limited to 1×), and mutual interference between the two moving groups.

The Laowa design simplifies the architecture to three functional groups instead of four or six, with only two moving groups (G2 and G3) that do not share the same travel space. G2 consumes the large fixed air gap D(4) during its forward travel, while G3's much smaller compensating motion occurs in a different region of the optical path. This non-interfering kinematic arrangement is the key structural innovation claimed by the patent: it allows the 47 mm G2 travel needed for 2× magnification without mechanical collision, and without the volume penalty of a four-group design.

The Laowa 58 mm f/2.8 2× Ultra-Macro APO was announced in September 2022 as part of Laowa's "2× Macro APO" family, which also includes the Laowa 90 mm f/2.8 2× and Laowa 100 mm f/2.8 2×. The 58 mm is the shortest focal length in this series and provides the widest angle of view (40.9° on full frame), making it the most versatile for non-macro general photography. All three lenses share the fully manual, metal-body construction with no electronic coupling, 13-blade aperture diaphragm, and internal focusing. The 58 mm is available in Canon RF, Nikon Z, Sony E, and L-mount.


## Sources

1. CN 116520542 A — primary patent source. Published 2023-08-01. Full text and figures consulted in Chinese.
2. Laowa product page: "Laowa 58mm f/2.8 2X Ultra-Macro APO." Specifications consulted for element/group count, MFD, angle of view, filter thread, and mount availability.
3. B&H Photo product listing (Laowa VE5828FE / VE5828RF). Confirmed 14 elements / 11 groups, 3 ED + 3 UHR marketing claims, 7.3″ MFD.
4. OpticalLimits review (3 Jun 2024): "Laowa 58mm f/2.8 2x Ultra-macro APO Review." Confirmed distortion-free performance, internal focusing behavior, resolution characteristics.
5. CDGM (Chengdu Guangming) glass catalog — glass identification cross-references for all eleven glass types. Catalog $n_d$ and $\nu_d$ values matched to patent values with residuals $\le 5 \times 10^{-5}$ (nd) and $\le 0.1$ (νd) for all fourteen elements.
