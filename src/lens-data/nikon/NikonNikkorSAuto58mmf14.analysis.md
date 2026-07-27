## Patent Reference and Design Identification

**Patent:** JP 1966-017177
**Application Number:** 特願昭38-64650
**Filed:** 1963-12-03
**Published:** 1966-09-29
**Inventor:** Saburo Murakami
**Applicant:** Nippon Kogaku K.K.
**Title:** 大口径比写真レンズ (*Large-aperture photographic lens*)
**Embodiment analyzed:** Embodiment 1

This prescription transcribes the selected embodiment of JP 1966-017177. The patent publishes a normalized focal length
of $f=1$, an aperture ratio of 1:1.4, a full field of $41°$, seven elements, and five functional groups. The data model
applies a uniform scale of 58 to correlate the normalized design with the NIKKOR-S Auto 5.8cm f/1.4. The resulting
Gaussian focal length is 58.005890865 mm; 58 mm remains the marketed focal length.

The production correlation rests on several convergent facts. Nikon attributes the NIKKOR-S Auto 5.8cm f/1.4 to Saburo
Murakami, the inventor named by the patent. Nikon also describes the production lens as a six-group, seven-element
Gauss-derived design with an added front convex element and a minute air space between the third and fourth elements.
Those details agree with the selected embodiment. Nikon further states that 58 mm was chosen to retain the back focus
needed by the Nikon F reflex mirror. The patent's application date follows the lens's 1960–1962 production period, and
Nikon does not identify the published numerical table as the factory prescription. The model is therefore the fixed
production-correlated embodiment for this analysis, not an independently confirmed production prescription.

## Optical Architecture

The design is an extended or modified Gauss-type standard lens. It contains seven elements in six physical air-spaced
groups, although the patent labels five functional groups I–V. The count differs because L3 and L4 are separated by the
published $0.002f$ air gap but are treated together as patent group III.

The power sequence is positive, positive, negative, weak negative, positive when expressed in the patent's five
functional groups:

- Group I is the added front positive meniscus L1.
- Group II is the second positive meniscus L2.
- Group III is the minute-air-spaced L3/L4 pair. Its isolated air-embedded focal length is −154.442 mm.
- Group IV is the cemented L5/L6 pair. Its isolated net focal length is −813.476 mm, despite the much stronger standalone
  powers of its negative and positive members.
- Group V is the strong rear positive element L7, with an isolated focal length of +55.426 mm.

The first-surface-to-last-surface track is 54.404 mm, giving $TL/EFL=0.9379$. This satisfies the project's numerical
telephoto-ratio test, but the lens is more accurately classified by its Gauss-derived architecture than as a conventional
telephoto-group design. The 37.005824101 mm back focal distance gives $BFD/EFL=0.6380$, so it is not retrofocus under the
required $BFD>EFL$ criterion.

All thirteen refracting surfaces are spherical. The aperture stop lies in the broad central air space between r8 and r9.
The prescription contains no cover plate, filter, inactive dummy plane, flare cutter, mirror, or folded optical path.

## Element-by-Element Analysis

The focal lengths in this section are isolated air-embedded thick-lens values computed from each element's two boundary
surfaces. They describe standalone power, not the element's in-situ contribution inside the complete system.

### L1 — Positive Meniscus, Convex to Object

**nd = 1.5750, νd = 41.3. Glass: 575415 — LF7 / S-TIL27 / H-QF3 class. Isolated f = +199.175 mm.**

L1 is the added front positive collector that distinguishes the design from a regular six-element Gauss arrangement.
Its weak positive power shares the converging work before the central Gauss-derived core. Nikon's historical account
specifically associates this added convex element with improved spherical-aberration balance while retaining the long
back-focus requirement of the Nikon F system.

### L2 — Positive Meniscus, Convex to Object

**nd = 1.6073, νd = 59.5. Glass: 607595 — SK7 / BACD7 class. Isolated f = +179.358 mm.**

L2 is another weak positive collector, but its higher Abbe number gives it a different chromatic role from L1. Together,
L1 and L2 form an isolated positive front block with a focal length of +94.659 mm. That block should not be confused with
the complete lens's front principal power, because the strongly curved central and rear surfaces materially alter its
in-situ action.

### L3 — Positive Meniscus

**nd = 1.7200, νd = 50.3. Glass: 720503 — LAK10 / LAC10 / H-LaK8 class. Isolated f = +46.153 mm.**

L3 is a strong positive meniscus at the front of patent group III. The element is separated from L4 by only 0.116 mm in
the scaled model. The gap is optically real and is therefore retained rather than treated as a cemented interface.

### L4 — Negative Meniscus

**nd = 1.6727, νd = 32.2. Glass: 673322 — SF5 / FD5 / H-ZF2 class. Isolated f = −28.935 mm.**

L4 supplies the strong negative member of the central separated pair. Its lower Abbe number complements the positive
L3 glass in first-order chromatic balancing. Although L3 alone is strongly positive and L4 alone strongly negative, their
finite thicknesses, surface curvatures, and minute separation yield a net-negative isolated pair rather than a simple
algebraic sum of standalone powers.

### L5/L6 — Cemented Negative–Positive Pair

**L5: nd = 1.6727, νd = 32.2. Glass: 673322 — SF5 / FD5 / H-ZF2 class. Isolated f = −30.274 mm.**
**L6: nd = 1.7440, νd = 44.9. Glass: 744449 — LAF2 / H-LaF3B class. Isolated f = +39.561 mm.**

L5 is biconcave and L6 is biconvex. Their shared r10 boundary is a direct glass-to-glass interface owned by downstream
L6 in the data model; no synthetic cement layer is inserted. The cemented pair has an isolated net focal length of
−813.476 mm, making it only weakly negative as a unit. That net power is distinct from the individual element powers and
from the pair's in-situ influence near the stop and final positive element.

### L7 — Biconvex Positive

**nd = 1.7200, νd = 50.3. Glass: 720503 — LAK10 / LAC10 / H-LaK8 class. Isolated f = +55.426 mm.**

L7 is the strong rear positive element. It restores positive power after the two net-negative central and rear functional
groups and completes the image-side convergence. Its rear vertex is the reference plane for the modeled infinity back
focal distance of 37.005824101 mm.

## Glass Identification and Selection

The patent supplies only rounded d-line indices and Abbe numbers. It names no glass manufacturer and provides no C-, F-,
or g-line indices, Sellmeier coefficients, partial-dispersion ratio, or $dP_{gF}$. The glass strings in the data file are
therefore supplier-neutral six-digit or catalog-class identifications rather than claims about the original melts.

| Elements | Authored class | nd | νd | Optical use |
|---|---|---:|---:|---|
| L1 | 575415 — LF7 / S-TIL27 / H-QF3 class | 1.5750 | 41.3 | Weak front positive collector |
| L2 | 607595 — SK7 / BACD7 class | 1.6073 | 59.5 | Higher-Abbe front positive meniscus |
| L3, L7 | 720503 — LAK10 / LAC10 / H-LaK8 class | 1.7200 | 50.3 | Strong positive elements |
| L4, L5 | 673322 — SF5 / FD5 / H-ZF2 class | 1.6727 | 32.2 | High-dispersion negative elements |
| L6 | 744449 — LAF2 / H-LaF3B class | 1.7440 | 44.9 | Dense positive cemented partner |

The alternating moderate- and high-Abbe positive glasses with the 32.2-Abbe negative glass provide ordinary first-order
chromatic balancing. No claim of apochromatic correction, anomalous partial dispersion, or specific Sellmeier behavior is
supported by the published data.

## Focus Mechanism

Nikon's history of the early F system states that its lens barrels used linear-helicoid focusing. Together with the
patent's rigid internal spacings, this supports an inferred unit-focus model rather than an internal- or floating-focus
movement.

JP 1966-017177 publishes only the infinity prescription. It gives no object distance, minimum-focus prescription,
variable-spacing table, moving-group designation, or close-range magnification. The sequential model therefore leaves
all internal gaps fixed and varies only the final BF gap. A finite-conjugate paraxial solve increases BF from
37.005824 mm at infinity to 43.853987 mm at the 0.6 m production-catalog endpoint, an inferred extension of
6.848163 mm. This is an explicitly inferred first-order focus state, not a patent-published close-focus prescription or
verification of close-range aberrations.

## Model Normalization, Stop, and Clear Apertures

The patent prescription is normalized to $f=1$. Every radius, center thickness, air space, back focal distance, and
inferred semi-diameter was multiplied by exactly 58. Since the design is all-spherical, no aspherical coefficient required
rescaling.

The patent figure establishes only that the diaphragm lies inside spacing d8. It does not publish its axial station or
diameter. The modeled stop is placed 52% of the way from r8 to r9, splitting the 13.978 mm air space into 7.26856 mm and
6.70944 mm. Its semi-diameter, 13.129979372 mm, was solved paraxially to produce the modeled f-number of 1.4. Both the
station and diameter are modeling inferences rather than patent dimensions.

The patent likewise gives no clear-aperture diameters. The authored semi-diameters were measured from the Figure 1
section, rounded to 0.1 mm, and checked against the f/1.4 marginal ray, the published 41° field, the 135-format image
diagonal, and the current geometry rules. No plate, filter, or dummy surface was omitted, and no air-equivalent
rear-spacing correction was required.

## Conditional Expressions

The patent's glass and geometry conditions are satisfied by Embodiment 1. In normalized units, the verified conditions
are:

- $n_3>n_4$, $n_3>1.70$, and $58>ν_3>48$.
- $n_6>n_5$, $n_6>1.70$, and $56>ν_6>43$.
- $3f>r_6>r_7>1.5f$.
- $0.55f>r_5>0.40f$ and $0.35f>r_8>0.25f$.
- $0.45f>|r_9|>0.30f$ and $0.60f>|r_{11}|>0.50f$.
- $r_{12}>|r_{13}|$.
- $0.004f>d_6>0.001f$.
- $0.24f>d_5+d_6+d_7>0.18f$.
- $0.30f>d_8>0.20f$.
- $\sum d_1\ldots d_{12}<f$.
- The independently computed back focal distance is greater than $0.6f$.

The narrowest source-precision margin is the tiny d6 spacing, which lies 0.001f above the lower bound and 0.002f below
the upper bound. The computed back-focus margin is 0.03803145f.

## Verification Summary

Independent reduced-angle tracing of the final data arrays gives:

| Quantity | Verified result |
|---|---:|
| Effective focal length | 58.005890865 mm |
| Back focal distance from r13 | 37.005824101 mm |
| r1-to-r13 vertex track | 54.404000000 mm |
| r1-to-image distance | 91.409824101 mm |
| Paraxial half-image height at 20.5° | 21.687513914 mm |
| Entrance-pupil semi-diameter | 20.716389594 mm |
| Modeled f-number | 1.400000000 |
| Petzval sum, $\sum \phi/(n n')$ | +0.003410360351 mm⁻¹ |
| Petzval-radius magnitude | 293.224145605 mm |

The final figure-matched geometry retains positive edge thickness for all seven elements. Independent exact spherical
tracing passed the full on-axis marginal rays, the default on-axis and off-axis render bundles, and chief rays at the
published ±20.5° half-field.

The patent's printed Seidel table is not a numerical validation target. Its visible rounded surface rows do not reproduce
the printed total in four of five columns, including a 0.5004 discrepancy in the $(III+IV)/2$ column. The prescription,
cardinal quantities, and geometry were therefore verified independently rather than by forcing agreement with that sum.

## Design Heritage and Context

Nikon identifies the NIKKOR-S Auto 5.8cm f/1.4 as the first f/1.4 lens for the Nikon F series and attributes its design
to Saburo Murakami. Nikon's account explains the 58 mm focal length as a compromise adopted to preserve SLR back focus
while remaining within the standard-lens range. The production lens was released in March 1960 and replaced by the
NIKKOR-S Auto 50mm f/1.4 in March 1962.

The selected patent embodiment preserves the same defining architecture: a regular Gauss-derived core, an added front
positive meniscus, a genuine minute air separation between L3 and L4, and a long back focus exceeding $0.6f$. The later
patent filing date remains a reason to distinguish a strong production correlation from documentary proof that the
published numbers are the exact production prescription.

## Sources

- Japanese Patent Publication JP 1966-017177, *大口径比写真レンズ*, Embodiment 1, pp. 1–3.
- Nikon Corporation, “NIKKOR — The Thousand and One Nights No.40: Nikkor-S Auto 5.8cm F1.4,”
  https://imaging.nikon.com/imaging/information/story/0040/
- Nikon Corporation, “Debut of Nikon F — Camera Chronicle,”
  https://imaging.nikon.com/imaging/information/chronicle/history-f/
- OHARA, official optical-glass catalog and downloads, https://www.ohara-gmbh.com/en/dialog/downloads.html
- Schott, official optical-glass catalog resources,
  https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads
- CDGM, official colorless optical-glass database, https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
- Sumita Optical Glass, *Optical Glass Data Book*, version 14.01.00,
  https://www.sumita-opt.co.jp/download_files/ja/data/glassdatabook_ver14.01.00.pdf
