# Sigma 85mm F1.4 DG HSM | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP2018-5099A, "大口径レンズ" (Large-Aperture Lens)
**Applicant:** Sigma Corporation (株式会社シグマ), Kawasaki, Kanagawa
**Inventor:** Ueda Yūki (植田 裕輝)
**Filed:** 7 July 2016 (Priority: P2016-134770)
**Published:** 11 January 2018

**Embodiment analyzed:** Numerical Example 4 (数値実施例４), described in ¶0110–0116 and the accompanying prescription tables.

The identification of Example 4 as the production Sigma 85mm F1.4 DG HSM | Art (product code A016) rests on the following convergent evidence:

1. **Element and group count** — 14 elements in 12 groups, matching the official specification exactly.
2. **Aspherical element count** — one element with two aspherical surfaces (the rearmost biconvex element), consistent with Sigma's published lens construction diagram showing a single aspherical element at the rear.
3. **SLD element count** — two elements of nd = 1.55032, νd = 75.50 (L2 and L7), matching Sigma's statement of "two elements made of SLD (Special Low Dispersion Glass)."
4. **High-index anomalous-dispersion element** — one element of nd = 1.92286, νd = 20.88 (L6), matching Sigma's claim of "one element with a high rate of anomalous partial dispersion and a high index of refraction."
5. **Focal length and aperture** — design EFL = 83.44 mm at f/1.46, consistent with marketing values of 85 mm and f/1.4.
6. **Close-focus distance** — 848 mm, consistent with the production MFD of 850 mm (0.85 m).
7. **Image height** — Y = 21.63 mm (diagonal 43.26 mm), covering 135 full-frame format.
8. **Focus mechanism** — Example 4 employs a floating rear focus with G2A and G2B moving at different speeds (¶0113: "別々の移動速度"), a feature shared only with Example 6 (which has f = 104.76 mm and does not match the 85 mm production lens).
9. **Patent timing** — filed July 2016, six months before the lens's commercial announcement in late 2016.

No other example in the patent simultaneously satisfies the 14/12 element/group count, two SLD elements, one high-index APD element, one double-aspherical element, and floating rear focus at 85 mm focal length.

## Optical Architecture

The design is a modified double-Gauss with a front positive collector group and a rear positive focusing group. The overall power distribution is positive–positive (G1–G2), but the front group G1 functions as a weakly positive field-correcting section (f = +277.8 mm) while the rear group G2 carries the bulk of the converging power (f = +94.6 mm). The system EFL of 83.4 mm is shorter than G2 alone because the converging beam from G1 enters G2 at height, shortening the combined focal length.

G1 contains seven elements in seven groups: a positive collector pair (L1–L2), a negative meniscus diverger (L3), two biconcave negative spacers (L4–L5), a high-index positive biconvex corrector (L6), and a strong positive biconvex collector (L7). The three negative elements in G1 provide the Petzval-sum flattening and chromatic correction that are essential to sustaining image quality at f/1.4 across the full 43.3 mm image circle.

G2 is subdivided by the aperture stop into G2A (f = +181.6 mm) and G2B (f = +113.8 mm). G2A contains a positive meniscus singlet (L8) and a cemented doublet (L9/L10). G2B contains a cemented doublet (L11/L12), a negative biconcave field-flattener (L13), and a biconvex double-aspherical element (L14). The stop sits between G2A and G2B, producing a quasi-symmetric arrangement about the diaphragm that is the hallmark of the double-Gauss type and provides inherent cancellation of lateral color and distortion.

Total track length is 166.36 mm at infinity. The back focal distance is 37.08 mm (excluding the 1.45 mm low-pass filter modeled in the patent), adequate for SLR mirror clearance on Canon EF, Nikon F, and Sigma SA mounts.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA) — lanthanum crown. f = +364.5 mm.

L1 is the front collector, receiving the full-aperture beam at its widest diameter. Its positive meniscus shape keeps the angle of incidence low on both surfaces, minimizing spherical aberration contribution despite the large clear aperture. The moderate refractive index of TAC8 (nd = 1.729) provides adequate refracting power while its patent-listed PgF = 0.5452 gives a small negative ΔPgF (−0.0047) for spectral tracing. It is not treated as a special APD element.

### L2 — Positive Meniscus, Convex to Object (SLD)

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) — SLD fluorophosphate crown. f = +180.9 mm. ΔPgF = +0.0275.

L2 is the first of two SLD (Special Low Dispersion) elements. Its high Abbe number (νd = 75.50) makes it the primary positive-power contributor to primary chromatic correction in G1. The positive anomalous partial dispersion (ΔPgF = +0.028) is characteristic of low-dispersion phosphate crowns and is deliberately exploited: when paired with the negative-ΔPgF flint elements L3–L5, the secondary spectrum is reduced below what a conventional crown–flint achromat can achieve.

L2 is identified as Lp1 in the patent's conditional-expression framework — the positive element in G1 with the highest Abbe number. PgFLp1/νdLp1 = 0.5399/75.50 = 0.00715, well within the required bound of < 0.0085 (condition 1, ¶0028–0030).

### L3 — Negative Meniscus, Convex to Object (Lm1)

nd = 1.61340, νd = 44.27. Glass: E-ADF10 (HOYA) — ADF-series flint. f = −164.3 mm. ΔPgF = −0.0053.

L3 is the first negative element in G1 and bears the strongest negative ΔPgF of the three front negative elements (−0.0053). It acts as a secondary-spectrum corrector: paired with L2, it balances the g-line to F-line partial dispersion ratio against primary (F–C) achromatism, enabling correction of both first-order and second-order chromatic aberration simultaneously. The deviation is useful to the patent condition, but it remains inside the patent's ordinary-material PgF/νd range and is not highlighted as APD in the viewer.

The patent designates L3 as Lm1 and verifies condition (4): ΔPgFLm1 = −0.0053 < 0.0000. Condition (5) is also satisfied: νdLp1/νdLm1 = 75.50/44.27 = 1.71, within the 1.40–3.20 range.

### L4 — Biconcave Negative (Lm2)

nd = 1.73800, νd = 32.26. Glass: J-KZFH9 (Hikari) — KZFS-class short flint. f = −118.4 mm. ΔPgF = −0.0005.

L4 is the strongest negative element in G1. Its biconcave shape and high refractive index place it in the role of a classic Petzval-sum corrector: it contributes significant negative power that flattens the field curvature generated by the positive elements L1, L2, L6, and L7. J-KZFH9 is a high-index short flint with a very small negative ΔPgF, satisfying condition (4). The Abbe number ratio νdLp1/νdLm2 = 2.34 provides the necessary dispersion leverage for achromatism (condition 5).

### L5 — Symmetric Biconcave Negative (Lm3)

nd = 1.73800, νd = 32.26. Glass: J-KZFH9 (Hikari) — same glass as L4. f = −141.1 mm. ΔPgF = −0.0005.

L5 is a symmetric biconcave element (R1 = −208.59, R2 = +208.59 mm) using the same J-KZFH9 glass as L4. The symmetry is deliberate: a symmetric element introduces zero coma and zero distortion for an axial beam, allowing the designer to add Petzval correction and negative power without destabilizing the off-axis aberration balance. The pair L4–L5 together contribute strong negative Petzval sum, countering the four positive elements in G1 and yielding a well-flattened field across the 43.3 mm image circle.

### L6 — Symmetric Biconvex Positive (Lp2, High-Index APD)

nd = 1.92286, νd = 20.88. Glass: E-FDS1-W (HOYA) — extra-dense flint, ultra-high index. f = +165.5 mm. ΔPgF = +0.0281. PgF = 0.6388.

L6 is the most optically distinctive element in the design. With nd = 1.923 it is among the highest-index optical glasses in commercial use, and its Abbe number of 20.88 places it firmly in the ultra-high-dispersion category. This element is the one Sigma describes as having "a high rate of anomalous partial dispersion and a high index of refraction."

L6 is identified as Lp2 — the positive element in G1 with the *smallest* Abbe number. Its role is counterintuitive: a high-dispersion positive element ordinarily worsens chromatic aberration. However, its large positive anomalous partial dispersion (ΔPgF = +0.028) means that for a given F–C correction, it contributes disproportionately to g-line correction — in the opposite direction from a conventional crown. This allows L6 to share positive power with L2 and L7 while simultaneously enabling the secondary-spectrum correction that none of those elements could achieve alone.

The symmetric biconvex shape (R = ±304.29 mm) with gentle curvatures minimizes the spherical aberration that would otherwise accompany a high-index positive element. The patent's condition (3) governs L6's focal length relative to G1: (fLp2/νdLp2)/f1 = (165.5/20.88)/277.8 = 0.029, comfortably within the 0.010–0.070 range.

The use of E-FDS1-W is a critical design decision: its high refractive index allows shorter radii for a given power, enabling compact positive elements that do not balloon the total track. This directly supports the patent's stated goal of miniaturization without sacrificing chromatic performance (¶0038).

### L7 — Biconvex Positive (SLD)

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) — SLD fluorophosphate crown, same as L2. f = +114.2 mm. ΔPgF = +0.0275.

L7 is the second SLD element and the strongest single positive element in G1 (f = +114.2 mm). Positioned at the rear of G1, it acts as the final convergence stage before the beam crosses the G1–G2 air gap. Its biconvex shape (unlike the meniscus shape of L2) is appropriate here because the beam is narrower at this position, allowing steeper curvatures without excessive spherical aberration.

Together, L2 and L7 provide the bulk of G1's chromatic correction via their low dispersion and positive ΔPgF. Their shared glass type (FCD705) is significant: it means a single melt lot can supply both elements, reducing manufacturing variability and ensuring that the dispersion pairing between the SLD elements and the negative correctors (L3–L5) is consistent across production runs.

### L8 — Positive Meniscus, Convex to Object (G2A singlet)

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA) — dense lanthanum flint. f = +150.2 mm. ΔPgF = −0.0095.

L8 is the leading element of the focusing group G2 and the first element in subgroup G2A. Its high refractive index (nd = 1.883) allows it to provide moderate positive power in a meniscus form without excessive surface curvature, keeping spherical aberration under control at the wide f/1.4 aperture. The meniscus shape with the concave surface facing the image side directs the converging beam smoothly into the cemented doublet L9/L10 that follows.

### L9/L10 — Cemented Doublet (G2A, positive meniscus + negative meniscus)

**L9:** nd = 1.80420, νd = 46.50. Glass: TAF105 (HOYA) — lanthanum flint (νd < 50); also equivalent to S-LAH63 (OHARA). f = +83.8 mm (standalone).
**L10:** nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA) — dense flint. f = −60.3 mm (standalone).
**Cemented doublet focal length:** f = −414.6 mm.

This cemented doublet is the last element of G2A, positioned immediately before the aperture stop. L9 is a strongly positive meniscus; L10 is a negative meniscus cemented to L9's rear surface. The combined system is weakly negative (f = −414.6 mm), functioning primarily as a chromatic corrector for G2A rather than as a power element.

The rear surface of L10 (R = +23.79 mm, convex to object) has the steepest curvature of any surface in the focusing group. This tight radius controls the off-axis beam angles entering the aperture stop, directly affecting the coma balance between G2A and G2B. The steep curvature also allows the weakly negative doublet to exert significant chromatic correction despite its modest combined power.

### Aperture Stop

The aperture stop sits in the air gap between G2A and G2B, at a distance of 11.11 mm from the rear surface of L10 at infinity focus. The 9-blade rounded diaphragm produces near-circular bokeh highlights across the full f-stop range.

### L11/L12 — Cemented Doublet (G2B, biconcave negative + biconvex positive)

**L11:** nd = 1.73800, νd = 32.26. Glass: J-KZFH9 (Hikari) — KZFS-class short flint, same as L4/L5. f = −26.8 mm (standalone).
**L12:** nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA) — dense lanthanum flint, same as L8. f = +31.5 mm (standalone).
**Cemented doublet focal length:** f = −207.8 mm.

This cemented doublet is the first element group after the stop in G2B. The front surface of L11 (R = −57.46 mm) is concave to the object and is identified in the patent as the refracting surface Sm1 (¶0115). This surface is a key contributor to coma correction: the patent's design philosophy (¶0063–0065) places two concave-to-object surfaces after the stop (Sm1 and Sm2) to distribute the coma-correcting burden and prevent the excessive flare that a single strongly curved surface would introduce.

The doublet is weakly negative overall (f = −207.8 mm), allowing it to function as a partial Petzval corrector in the rear group while the individual elements provide strong chromatic correction via the high-dispersion–low-dispersion pairing of J-KZFH9 (νd = 32.26) and TAFD30 (νd = 40.80).

### L13 — Biconcave Negative (Field Flattener, Sm2)

nd = 1.67270, νd = 32.17. Glass: S-NBH52 (OHARA) — niobium-phosphate flint. f = −66.7 mm. ΔPgF = +0.0058.

L13 is an air-spaced negative biconcave element serving as the field flattener described in ¶0065. Its front surface (R = −73.54 mm) is the refracting surface Sm2 in the patent's conditional-expression framework. The patent's condition (7) governs the curvature balance between Sm1 and Sm2:

$$\frac{1/R_{Sm2}}{\phi_{Sm1} + \phi_{Sm2}} = \frac{1/(-73.54)}{(-0.01284) + (-0.00915)} = 0.618$$

This value falls within the prescribed range of 0.50–0.90, confirming that the negative power is appropriately distributed between the two concave-to-object surfaces to balance coma correction against field flattening (¶0065–0067).

S-NBH52 is the only OHARA glass in the design; all other elements use HOYA glasses. This may reflect specific thermal or transmission properties of S-NBH52 that the designer required for the field-flattener position, or it may indicate supply-chain considerations during prototype development.

### L14 — Biconvex Positive, Double Aspherical (PGM)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA) — precision-glass-moldable (PGM) lanthanum flint. f = +38.4 mm. ΔPgF = −0.0067.

L14 is the rearmost optical element and the only aspherical element in the design. Both its front (R = +74.32 mm) and rear (R = −55.47 mm) surfaces carry aspherical departures. It is the strongest single positive element in the entire system (f = +38.4 mm) and plays a dominant role in converging the beam to the image plane.

The glass designation M-TAFD305 carries the HOYA "M-" prefix, indicating that it is formulated for precision glass molding — a manufacturing process in which heated glass is pressed directly into aspherical form without subsequent polishing. This is consistent with the production lens's cost structure: a single PGM element at the rear replaces what would otherwise require two or three polished spherical elements to achieve equivalent aberration correction.

The aspherical profiles are discussed in detail in the Aspherical Surfaces section below.

## Glass Identification and Selection

The design uses 10 distinct glass types across 14 elements. The glass palette is overwhelmingly HOYA, with a single OHARA glass (S-NBH52 for L13). This is consistent with Sigma's historical glass sourcing for its Art-line lenses.

| Element | nd | νd | PgF | ΔPgF | Glass | Vendor | Family |
|---------|--------|-------|--------|---------|------|--------|--------|
| L1 | 1.72916 | 54.67 | 0.5452 | −0.0047 | TAC8 | HOYA | Lanthanum crown |
| L2, L7 | 1.55032 | 75.50 | 0.5399 | +0.0275 | FCD705 | HOYA | SLD fluoro­phosphate crown |
| L3 | 1.61340 | 44.27 | 0.5633 | −0.0053 | E-ADF10 | HOYA | ADF-series flint |
| L4, L5, L11 | 1.73800 | 32.26 | 0.5898 | −0.0005 | J-KZFH9 | Hikari | KZFS-class short flint |
| L6 | 1.92286 | 20.88 | 0.6388 | +0.0281 | E-FDS1-W | HOYA | Extra-dense flint |
| L8, L12 | 1.88300 | 40.80 | 0.5654 | −0.0095 | TAFD30 | HOYA | Dense lanthanum flint |
| L9 | 1.80420 | 46.50 | 0.5571 | −0.0075 | TAF105 | HOYA | Lanthanum flint |
| L10 | 1.69895 | 30.05 | 0.6028 | +0.0086 | E-FD15 | HOYA | Dense flint |
| L13 | 1.67270 | 32.17 | 0.5962 | +0.0058 | S-NBH52 | OHARA | Niobium-phosphate flint |
| L14 | 1.85135 | 40.10 | 0.5694 | −0.0067 | M-TAFD305 | HOYA | Dense La-flint (PGM) |

The chromatic correction strategy relies on patent-listed PgF values for every glass, but only three elements are highlighted as APD in the viewer:

The first tier is the two SLD elements (L2, L7) with strong positive ΔPgF (+0.028), providing the primary low-dispersion positive power and the positive partial-dispersion contribution needed for secondary-spectrum correction. These correspond to what Sigma markets as "SLD glass."

The second highlighted case is the high-index anomalous element L6 (E-FDS1-W, ΔPgF = +0.028), which carries positive power at extremely high dispersion — an unusual choice that works only because the large positive ΔPgF at low Abbe number creates a partial-dispersion ratio (PgF/νd = 0.0306) above the ordinary-material range stated in patent ¶0027, enabling the designer to balance g-line secondary spectrum against the SLD elements.

The remaining glasses keep their patent PgF-derived `dPgF` values for chromatic tracing, but they are ordinary balancing glasses for UI purposes. The three front negative elements (L3, L4, L5) provide small negative ΔPgF contributions, with L3 the strongest at −0.0053, but their PgF/νd ratios remain inside the patent's ordinary-material band and should not be displayed as APD glass.

The average anomalous partial dispersion normalized by Abbe number across all positive elements in G1 is ΔPgFG1av/νdG1av = 0.00035, which the patent's condition (6) requires to fall between 0.00010 and 0.00070. This value represents the designer's compromise between secondary-spectrum correction (favoring higher values) and primary-spectrum correction (favoring lower values).

## Focus Mechanism

The lens employs a floating rear-focus design with the front group G1 fixed and the rear group G2 moving toward the object during close focusing. Among the patent's six examples, Examples 4 and 6 implement differential motion between subgroups G2A and G2B (¶0113: "第２Ａレンズ群Ｇ２Ａと第２Ｂレンズ群Ｇ２Ｂは別々の移動速度で像面側から物体側へ移動する"); the remaining four examples move G2A and G2B as a unit.

This creates three variable air gaps:

| Gap | Location | Infinity | Close (848 mm) | Change |
|-----|----------|----------|----------------|--------|
| d14 | G1 → G2A | 16.676 mm | 6.066 mm | −10.610 mm |
| d19 | G2A → Stop/G2B | 11.115 mm | 11.381 mm | +0.266 mm |
| d27 | L14 rear → LPF (BFD) | 37.080 mm | 47.464 mm | +10.384 mm |

The dominant motion is the 10.6 mm forward travel of G2 as a whole (d14 decreasing), which is typical of a rear-focus design. The differential motion between G2A and G2B is small — only 0.27 mm of additional separation at close focus — but this floating element arrangement is critical for maintaining coma correction at close distances. Without it, the strongly curved concave-to-object surfaces near the stop (Sm1 and Sm2) would generate excessive coma flare as the off-axis marginal ray heights shift during focusing (¶0063).

The focusing group G2 is substantially lighter than G1 because the beam diameter has already been reduced by G1's converging power. This enables the HSM (Hyper Sonic Motor) drive to achieve rapid autofocus despite the lens's large overall mass of 1,130 g. The patent notes that using the lighter rear group for focusing simplifies the barrel mechanism and enables high-speed AF (¶0025).

## Aspherical Surfaces

The design contains two aspherical surfaces, both on element L14 (surfaces 26 and 27 in the patent numbering). The patent uses the standard even-order aspherical sag equation (¶0083–0084):

$$z = \frac{(1/r) \cdot y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12}$$

The conic constant K = 0 for both surfaces (spherical base), and only the A4 and A6 polynomial terms are nonzero — A8 through A12 are all identically zero. This indicates mild aspherical departures suitable for precision glass molding.

### Surface 26 (L14 front, R = +74.3249 mm)

| Coefficient | Value |
|-------------|-------|
| K | 0.000000 |
| A4 | −2.314554 × 10⁻⁶ |
| A6 | −6.999263 × 10⁻¹⁰ |
| A8–A12 | 0 |

The negative A4 on a convex surface (R > 0) causes the surface to sag less than the base sphere at the rim — the surface flattens peripherally. At a semi-diameter of 16 mm the aspherical departure is −0.163 mm, growing to −0.267 mm at 18 mm. This progressive flattening weakens the positive power at the rim, directly reducing over-corrected spherical aberration from the strong converging element.

### Surface 27 (L14 rear, R = −55.4665 mm)

| Coefficient | Value |
|-------------|-------|
| K | 0.000000 |
| A4 | +1.341936 × 10⁻⁶ |
| A6 | −1.267249 × 10⁻⁹ |
| A8–A12 | 0 |

The positive A4 on the rear concave surface (R < 0) reduces the absolute sag compared to the base sphere — the concave surface becomes shallower peripherally. At 16 mm the departure is +0.067 mm, reaching +0.098 mm at 18 mm. This supplements the front surface's correction by further weakening the peripheral convergence of the element as a whole.

The patent does not publish semi-diameters. The departure values above are computed at representative heights of 16–18 mm, estimated from the converging beam geometry at L14's position. The actual clear aperture of L14 is likely in the 14–18 mm SD range, given the production lens's 86 mm filter thread and the substantial beam convergence by this point in the optical path.

Together, the two aspherical surfaces act as a spherical-aberration corrector positioned after the stop, precisely where the patent recommends placing the asphere for cost-effective manufacturing (¶0077): post-stop placement keeps the element diameter small, reducing the difficulty and cost of precision glass molding. The use of M-TAFD305 (a moldable glass) confirms that L14 is manufactured by PGM rather than conventional polishing.

The mild aspherical departures — only A4 and A6 terms, with maximum departure under 0.3 mm at the estimated clear aperture — are well within the capability of modern PGM processes and contribute to the production lens's relatively moderate price point for its specification class.

## Conditional Expression Verification

The patent defines seven conditional expressions governing the glass selection and surface configuration. All are satisfied by Example 4:

| Condition | Expression | Value | Range | Status |
|-----------|-----------|-------|-------|--------|
| (1) | PgFLp1/νdLp1 | 0.0072 | < 0.0085 | Pass |
| (2) | PgFLp2/νdLp2 | 0.0306 | > 0.0250 | Pass |
| (3) | (fLp2/νdLp2)/f1 | 0.029 | 0.010–0.070 | Pass |
| (4) | ΔPgFLm1 | −0.0053 | < 0.0000 | Pass |
| (4) | ΔPgFLm2 | −0.0005 | < 0.0000 | Pass |
| (4) | ΔPgFLm3 | −0.0005 | < 0.0000 | Pass |
| (5) | νdLp1/νdLm1 | 1.71 | 1.40–3.20 | Pass |
| (5) | νdLp1/νdLm2 | 2.34 | 1.40–3.20 | Pass |
| (5) | νdLp1/νdLm3 | 2.34 | 1.40–3.20 | Pass |
| (6) | ΔPgFG1av/νdG1av | 0.00035 | 0.00010–0.00070 | Pass |
| (7) | (1/RSm2)/(φSm1+φSm2) | 0.62 | 0.50–0.90 | Pass |

All values agree with the patent's published condition-table for Example 4 (¶0131).

## Aberration Correction Strategy

The design achieves its aberration correction through several interdependent mechanisms:

**Spherical aberration** is controlled primarily by the rear aspherical element L14, which progressively weakens peripheral convergence. The patent notes (¶0075–0078) that placing the asphere post-stop reduces the required clear aperture and enables the use of a PGM element, keeping manufacturing cost manageable. L14's strong positive power (f = +38.4 mm) means that even small aspherical departures at the rim produce significant SA correction.

**Coma and sagittal coma flare** are addressed by the dual concave-to-object surfaces Sm1 (L11 front) and Sm2 (L13 front) behind the stop. The patent explains (¶0063–0065) that a conventional double-Gauss with a single strongly curved concave surface generates severe coma flare during focusing. By distributing the concavity across two surfaces with condition (7) governing their relative curvatures, the design controls coma while simultaneously providing field-flattening via L13's negative power.

**Chromatic aberration** is corrected through the three-tier glass strategy described above. The combination of SLD positive elements, negative-ΔPgF flint correctors, and the high-index APD element L6 enables simultaneous first-order (F–C) and second-order (g-line) chromatic correction across the full aperture — a capability the patent's conditional expressions are specifically designed to ensure.

**Field curvature** is controlled by the high negative power contribution from elements L4, L5 (in G1) and L13 (in G2B), which together flatten the image surface. The symmetric biconcave shape of L5 contributes zero coma to the field-curvature correction, providing a clean Petzval-sum contribution without disturbing the off-axis balance. The Petzval sum computed surface-by-surface is +0.00142, corresponding to a Petzval radius of approximately −703 mm — a very well-corrected value for an f/1.4 design.

## Design Heritage and Context

The Sigma 85mm F1.4 DG HSM | Art (A016) was announced in September 2016 at Photokina and began shipping in early 2017. It was Sigma's fifth f/1.4 Art-line prime, following the 35mm, 50mm, 24mm, and 20mm. At 14 elements in 12 groups and 1,130 g, it was unusually large for an 85mm f/1.4 — roughly 40% heavier than the Nikon AF-S 85mm f/1.4G or the Canon EF 85mm f/1.4L IS — but its optical performance was widely regarded as class-leading at introduction, particularly in center-to-corner sharpness at f/1.4 and lateral chromatic aberration control.

The design's emphasis on chromatic correction — five of the patent's seven conditional expressions govern dispersion properties — reflects Sigma's stated priority of addressing axial color fringing in the bokeh of fast portrait lenses. The inventor Ueda Yūki elected a complex 7-element front group with three dedicated negative correctors (L3–L5) and two SLD elements (L2, L7) to suppress secondary spectrum, rather than relying on a simpler front group with a single ED element.

The lens was later succeeded by the Sigma 85mm F1.4 DG DN | Art (A020, 2020), an entirely new 15-element/11-group design optimized for mirrorless mounts with five SLD elements, stepping-motor AF, and nearly half the weight.

## Sources

- JP2018-5099A (J-PlatPat), Sigma Corporation, published 11 January 2018.
- Sigma Corporation product page: 85mm F1.4 DG HSM | Art (A016), https://www.sigma-global.com/en/lenses/a016_85_14/
- HOYA Corporation, Optical Glass Catalog (glass codes referenced: TAC8, FCD705, E-ADF10, E-FDS1-W, TAFD30, TAF105, E-FD15, M-TAFD305).
- Hikari Optical Glass Catalog (J-KZFH9).
- OHARA Corporation, Optical Glass Catalog (S-NBH52).
