# Fujinon XF 23mm F1.4 R — Optical Analysis

## Patent Source and Example Attribution

**Patent:** US 2014/0368926 A1, "Imaging Lens and Imaging Apparatus"
**Applicant:** FUJIFILM Corporation, Tokyo, Japan
**Inventor:** Takashi Suzuki
**Filed:** June 17, 2014 (priority: JP 2013-126420, June 17, 2013)
**Published:** December 18, 2014

**Example Used:** Example 4 (FIG. 4 / Table 7 / Table 8)

### Rationale for Selecting Example 4

The Fujinon XF 23mm F1.4 R (announced September 2013) is specified by Fujifilm as having **11 elements in 8 groups** with **1 aspherical element**. Among the five numerical examples in the patent, Examples 3 and 4 both match this 11/8/1 configuration:

- **11 elements.** Examples 3 and 4 both have two negative lenses in G11, four elements in G12, and five elements in G2, giving 2 + 4 + 5 = 11. Examples 1 and 2 also have 11 elements, but their G2 rear section uses a cemented doublet (L25+L26) instead of a single element, yielding only 7 air-separated groups. Example 5 has 12 elements (five in G12) with 8 groups.
- **8 groups.** Counting air-separated sub-units front-to-rear: L111 | L112 | L121 | L122–L123 cemented | L124 | L21 | L22–L23–L24 cemented | L25 = 8 groups. This count matches for both Examples 3 and 4.
- **1 aspherical element.** In both Examples 3 and 4, only L21 (surfaces 13 and 14) carries aspherical surfaces. Examples 1 and 2 have two aspherical elements (L124 in G12 plus L21 in G2).
- **Inner focus mechanism.** Example 4 is preferred over Example 3 because it uses inner focusing — the L21 + cemented triplet move as a unit while G1 and L25 remain fixed (¶0051). Example 3 instead moves the entire G2 group (unit focus), which would require more moving mass and change the back focal distance during focusing. The production XF23mm f/1.4 R uses internal focusing with no barrel extension, matching Example 4's scheme.
- **Focal length and f-number.** The patent lists f = 23.74 mm and Fno = 1.45 for Example 4, consistent with the marketed 23 mm f/1.4 specification.

The patent's Japanese priority date (June 17, 2013) precedes the lens announcement by approximately three months, indicating the optical design was finalized before the product launch. The patent design is a close representation — though not necessarily an exact replica — of the production optical formula.

---

## System-Level Specifications

| Parameter | Patent (Example 4) | Manufacturer Spec |
|---|---|---|
| Focal length | 23.74 mm (computed) | 23 mm (marketed) |
| Maximum aperture | F/1.45 | F/1.4 |
| Full angle of view | 61.7° | 63.4° |
| Elements / Groups | 11 / 8 | 11 / 8 |
| Aspherical elements | 1 (L21, 2 aspherical surfaces) | 1 |
| Back focus (air equiv.) | 12.60 mm | — |
| Total optical track | ~74.3 mm (including cover glass) | — |
| Filter thread | — | ø62 mm |
| Aperture blades | — | 7 (rounded) |
| Close focus distance | — | 0.28 m |
| 35mm equivalent FL | ~35.6 mm (at 23.74 mm) | 35 mm |

The slight discrepancy in field angle arises because the manufacturer's figure corresponds to the marketed 23 mm focal length (2ω = 2 × arctan(14.1 / 23) ≈ 63.1°), while the patent's 61.7° corresponds to the as-designed 23.74 mm value.

### Independent Verification (ABCD Matrix)

All key parameters were verified via independent paraxial ray trace using the ABCD transfer matrix method:

| Parameter | Patent | Computed | Match |
|---|---|---|---|
| EFL | 23.74 mm | 23.738 mm | ✓ |
| BFL (from S20) | 12.60 mm | 12.604 mm | ✓ |
| Fno | 1.45 | — (stop SD = 8.19 mm) | ✓ |

---

## Optical Architecture

The lens follows a symmetry-like design with the aperture stop positioned between two positive groups:

> G1 (positive) — Aperture Stop — G2 (positive)

G1 is subdivided into G11 (negative) and G12 (positive), separated by the largest air gap in the system (11.93 mm). This configuration is neither strictly retro-focus nor telephoto — G1 as a whole is positive (f ≈ +43.1 mm), which combined with the positive G2 produces the short system focal length.

### Group Focal Lengths (Thick-Lens ABCD)

| Group | Elements | Computed EFL |
|---|---|---|
| G11 (eleventh) | L111, L112 | −37.2 mm |
| G12 (twelfth) | L121, L122/L123, L124 | +24.4 mm |
| G1 (combined) | G11 + G12 | +43.1 mm |
| G2 focus unit | L21, L22/L23/L24 | +21.3 mm |
| G2 fixed unit | L25 | −82.4 mm |
| G2 (combined) | All rear elements | +28.7 mm |
| **Entire system** | **All** | **+23.74 mm** |

The negative G11 ahead of the positive G12 widens the field angle and flattens the field, while G12's strong positive power provides the convergence needed for the fast aperture.

---

## Element-by-Element Description

### Group G11 — Negative Wide-Angle Corrector

**L111 (Element 1) — Negative Meniscus**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| S1 (front) | +96.198 | 1.42 | 1.48749 | 70.2 |
| S2 (rear) | +39.135 | 4.00 → air | — | — |

- **Glass:** S-FSL5 (OHARA) — low-index crown with low dispersion.
- **Shape:** Positive meniscus form (both surfaces convex toward the object), but the lens is weakly negative (f ≈ −136 mm) because the rear surface is more steeply curved.
- **Role:** Field-widening element. Its weak negative power and high Abbe number introduce minimal chromatic aberration while gently diverging the incoming wide-angle beam.

**L112 (Element 2) — Negative Meniscus**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| S3 (front) | +181.440 | 1.30 | 1.61293 | 37.0 |
| S4 (rear) | +27.399 | 11.93 → air | — | — |

- **Glass:** S-TIM28 (OHARA) — titanium flint with moderate refractive index.
- **Shape:** Positive meniscus form, more strongly negative (f ≈ −52.8 mm) due to the steep rear surface.
- **Role:** The principal diverger of G11. Together, L111 and L112 disperse the negative power into two elements, reducing surface contributions to spherical aberration and field curvature versus a single stronger negative element.

The 11.93 mm air gap after L112 is the largest in the system and defines the G11/G12 boundary.

---

### Group G12 — Positive Convergence Group

**L121 (Element 3) — Plano-Convex Positive (Ultra-High Index, APD)**

| Surface | R (mm) | d (mm) | nd | νd | θgF |
|---|---|---|---|---|---|
| S5 (front) | +36.435 | 4.08 | 2.00069 | 25.5 | 0.6133 |
| S6 (rear) | −1126.300 | 1.94 → air | — | — | — |

- **Glass:** TAFD40 (HOYA) — the highest refractive index element in the design (nd = 2.001). Despite its low Abbe number, TAFD40 exhibits positive anomalous partial dispersion (ΔθgF = +0.013), enabling correction of secondary chromatic spectrum.
- **Shape:** Effectively plano-convex (rear R = −1126 mm is nearly flat). Strongly positive (f ≈ +35.3 mm).
- **Role:** Provides powerful convergence with relatively gentle surface curvatures — the ultra-high refractive index allows the same optical power with shallower curves, directly reducing spherical aberration contribution.

**L122 + L123 (Elements 4–5) — Cemented Doublet**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| S7 (L122 front) | +22.894 | 5.15 | 1.88300 | 40.8 |
| S8 (junction) | −76.171 | 3.50 | 1.80810 | 22.8 |
| S9 (L123 rear) | +13.753 | 0.25 → air | — | — |

- **L122 glass:** S-LAH58 (OHARA) — dense lanthanum flint, biconvex positive (f ≈ +20.4 mm).
- **L123 glass:** S-TIH6 (OHARA) — dense flint, negative meniscus (f ≈ −14.2 mm).
- **Doublet combined EFL:** −116 mm (weakly negative). The doublet's primary function is chromatic correction rather than convergence.
- **Role:** Corrects primary chromatic aberration from the high-power positive elements. The Abbe number difference (Δνd = 18.0) provides adequate color separation. The negative combined power also counteracts Petzval field curvature from L121.

**L124 (Element 6) — Positive Meniscus**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| S10 (front) | +14.851 | 2.06 | 1.71300 | 53.9 |
| S11 (rear) | +23.690 | 2.65 → air | — | — |

- **Glass:** S-LAL13 (OHARA) — lanthanum crown.
- **Shape:** Positive meniscus, convex toward object (f ≈ +50.9 mm).
- **Role:** The last element before the aperture stop. Controls marginal ray height and angle at the stop entrance. Unlike Examples 1 and 2 (where this element is aspherical), Example 4 uses a spherical L124, concentrating all aspherical correction into L21.

---

### Aperture Stop

| Surface | R (mm) | d (mm) |
|---|---|---|
| S12 (STO) | ∞ (flat) | 7.13 → air |

The stop is located in the air space between G1 and G2. The 7.13 mm gap from the stop to L21 is the primary focus-variable gap. The stop semi-diameter at f/1.45 is EP_SD = EFL / (2 × Fno) ≈ 8.2 mm.

---

### Group G2 — Positive Focusing Group

**L21 (Element 7) — Aspherical Negative Meniscus**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| *S13 (front) | −8.922 | 1.27 | 1.80348 | 40.4 |
| *S14 (rear) | −11.386 | 0.15 → air | — | — |

- **Glass:** S-LAH63Q (OHARA) — dense lanthanum flint with "Q" (low-Tg) designation for precision glass molding (PGM).
- **Shape:** Negative meniscus (both surfaces concave toward the object). Weakly negative paraxially (f ≈ −66.6 mm).

#### Aspherical Surface Details

Both surfaces use an extended polynomial aspheric formulation with a conic base and polynomial terms through the 20th order. The patent formula uses the **κ (kappa) convention**:

Z(h) = Ch² / {1 + √(1 − κ·C²·h²)} + Σ Am·hᵐ (m = 3 through 20)

where κ = 1 + K (standard conic constant) and C = 1/R. The patent tabulates κ as "K" — so the tabulated value 0.10 corresponds to **K_standard = −0.90** (near-paraboloid). This convention is common in Japanese optical patents and is distinguished from the standard convention by the formula's use of κ directly in the discriminant rather than (1+K).

**Surface 13 (L21 front):** R = −8.922 mm, κ = 0.10 (K = −0.90)

**Surface 14 (L21 rear):** R = −11.386 mm, κ = 0.10 (K = −0.90)

The near-paraboloidal conic base (K = −0.90) provides a starting correction, with the polynomial terms producing further refinement. The surfaces show substantial aspherical departure from the base sphere — approximately 190 µm on the front and 210 µm on the rear at h = 5 mm.

**Odd-order polynomial terms.** The patent includes odd-order terms A3, A5, A7, A9, A11, A13, A15, A17, and A19, which is uncommon in consumer lens prescriptions. These terms break the even symmetry of the sag profile, enabling correction of odd-order wavefront aberrations — primarily coma. At the semi-diameter, the A3 and A5 terms contribute tens of micrometers of sag, comparable to the leading even-order terms. Because the renderer's sag equation supports only even powers, these odd-order terms are omitted from the data file, and the rendered surface shape will differ from the patent prescription at the rim. This is the most significant approximation in this data file.

**L22 + L23 + L24 (Elements 8–10) — Cemented Triplet**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| S15 (L22 front) | +155.260 | 5.81 | 1.88300 | 40.8 |
| S16 (L22/L23 junction) | −13.316 | 1.21 | 1.68893 | 31.1 |
| S17 (L23/L24 junction) | +59.524 | 5.56 | 1.88300 | 40.8 |
| S18 (L24 rear) | −25.586 | 0.90 → air | — | — |

- **L22:** S-LAH58 (OHARA), biconvex positive (f ≈ +14.1 mm). Nearly plano-convex: R_front = +155.3 mm (almost flat), R_rear = −13.3 mm (strongly curved).
- **L23:** S-TIM25 (OHARA), biconcave negative (f ≈ −15.7 mm).
- **L24:** S-LAH58 (OHARA), biconvex positive (f ≈ +20.9 mm).
- **Triplet combined EFL:** +18.4 mm.
- **Role:** The chromatic engine of the rear group. The symmetric positive–negative–positive arrangement corrects both longitudinal and lateral chromatic aberration. The Abbe number difference νd2p − νd2n = 40.8 − 31.1 = 9.7 satisfies conditional expression (5).

**L25 (Element 11) — Negative Biconcave (Fixed)**

| Surface | R (mm) | d (mm) | nd | νd |
|---|---|---|---|---|
| S19 (front) | −91.051 | 1.20 | 1.80810 | 22.8 |
| S20 (rear) | +249.640 | 12.60 → image | — | — |

- **Glass:** S-TIH6 (OHARA) — same glass as L123.
- **Shape:** Biconcave, weakly negative (f ≈ −82.4 mm).
- **Role:** Fixed field-flattening element during focus adjustment (¶0051, ¶0057). Its negative power counteracts Petzval curvature from the strongly positive focus group. Suppresses variations in spherical aberration and field curvature during focus travel.

---

## Focus Mechanism

The lens uses **inner focusing** with the front group (G1) and L25 held stationary, and L21 plus the cemented triplet (L22/L23/L24) translating toward the object as focus distance decreases. The focus group shift was computed via paraxial conjugate matching to produce a focused image at the Fujifilm-specified close focus distance of 0.28 m.

| Variable Gap | Surface Label | At Infinity | At 0.28 m | Change |
|---|---|---|---|---|
| Stop to L21 | STO | 7.13 mm | 4.93 mm | −2.20 mm |
| Triplet rear to L25 | 18 | 0.90 mm | 3.10 mm | +2.20 mm |

The focus group translates approximately 2.20 mm toward the object at closest focus. The back focal distance (from S20 to the image plane) remains constant at 12.60 mm.

### Benefits of This Focus Scheme

1. **Aberration stability.** The fixed negative L25 suppresses variations in spherical aberration and field curvature during focus travel (¶0057).
2. **Reduced moving mass.** Only four elements move (L21 + triplet); G1 (six elements) and L25 are fixed, enabling fast autofocus response.
3. **Constant overall length.** The focus motion is purely internal — no barrel extension.
4. **Reduced focus breathing.** Inner focusing with a fixed field-flattening element produces less focal-length variation with focus distance.

---

## Glass Selection Strategy

The design uses **eight distinct glass types** from the OHARA and HOYA catalogs. Glass identifications are based on exact nd/νd matching to published catalog data.

| Six-Digit Code | Glass | nd | νd | Category | Elements |
|---|---|---|---|---|---|
| 148.749 | S-FSL5 (OHARA) | 1.48749 | 70.2 | Low-index crown | L111 |
| 161.293 | S-TIM28 (OHARA) | 1.61293 | 37.0 | Titanium flint | L112 |
| 200.069 | TAFD40 (HOYA) | 2.00069 | 25.5 | Ultra-high-index dense flint (APD) | L121 |
| 188.300 | S-LAH58 (OHARA) | 1.88300 | 40.8 | Dense lanthanum flint | L122, L22, L24 |
| 180.810 | S-TIH6 (OHARA) | 1.80810 | 22.8 | Dense flint | L123, L25 |
| 171.300 | S-LAL13 (OHARA) | 1.71300 | 53.9 | Lanthanum crown | L124 |
| 180.348 | S-LAH63Q (OHARA) | 1.80348 | 40.4 | Dense LaF (PGM) | L21 |
| 168.893 | S-TIM25 (OHARA) | 1.68893 | 31.1 | Dense flint | L23 |

Key observations:

- **S-LAH58** (nd = 1.883, νd = 40.8) appears three times — in L122, L22, and L24 — all as the high-index positive element in cemented groups. Its combination of high nd and moderate dispersion makes it the workhorse positive glass.
- **S-TIH6** (nd = 1.808, νd = 22.8) is used in both L123 and L25, the two high-dispersion negative elements.
- **TAFD40** (nd = 2.001) is one of the highest-index optical glasses commercially available, produced by HOYA in their tantalum-based dense flint series. Its anomalous partial dispersion enables secondary spectrum correction critical at f/1.4.
- **S-LAH63Q** is selected specifically for PGM (precision glass molding) — the "Q" suffix indicates low-Tg suitability for cost-effective aspherical surface manufacturing.

### Anomalous Partial Dispersion

For TAFD40 (L121), the partial dispersion ratio θgF = 0.6133 falls above the normal glass line (θgF_normal = 0.6415 − 0.001618 × νd). The departure ΔθgF = 0.6133 − (0.6415 − 0.001618 × 25.5) = +0.013 satisfies conditional expression (3) and its stricter variant (3-1), enabling correction of secondary longitudinal chromatic aberration.

---

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum Σ(n′−n)/(n·n′·R) = +0.00561, corresponding to a Petzval radius of approximately +178 mm. For an APS-C sensor with a 14.1 mm half-diagonal, this produces an uncorrected Petzval sag of about 0.56 mm at the field corner.

Field curvature is managed through three mechanisms: the negative G11 subgroup generates a negative Petzval contribution; L25, the fixed negative rear element, provides additional flattening; and the residual astigmatism is balanced against the Petzval curvature to produce an approximately flat tangential field at the expense of mild sagittal curvature.

---

## Conditional Expression Summary

Example 4 satisfies all five patent conditional expressions, including the stricter variants (1-1) through (4-1):

| Expression | Condition | Example 4 Value | Status |
|---|---|---|---|
| (1) | Nd2 > 1.8 | 1.883 | ✓ |
| (1-1) | Nd2 > 1.85 | 1.883 | ✓ |
| (2) | Nd12a > 1.8 | 2.001 | ✓ |
| (2-1) | Nd12a > 1.85 | 2.001 | ✓ |
| (3) | ΔθgF > 0 | +0.013 | ✓ |
| (3-1) | ΔθgF > 0.012 | +0.013 | ✓ |
| (4) | νd12b < 35 | 25.5 | ✓ |
| (4-1) | νd12b < 27 | 25.5 | ✓ |
| (5) | νd2p − νd2n > 5 | 9.7 | ✓ |

---

## Data File Notes

### Semi-Diameter Estimation

Semi-diameters were estimated by combined marginal + chief ray paraxial trace at f/1.45 and ω = 30.85°, with ~8% mechanical clearance, then constrained by edge thickness limits, cross-gap sag intrusion (gapSagFrac = 0.90), and slope-based rim limits. The binding constraints were the thin air gaps at S9→S10 (0.25 mm) and S2→S3 (4.00 mm), which limited the SDs of L123/L124 and L111/L112 respectively.

### Aspherical Surface Limitations

The patent prescribes aspherics using both even and odd-order polynomial terms (A3 through A20) in the extended sag formula. The data file includes only even-order terms (A4, A6, A8, A10, A12, A14, A16, A18, A20) because the renderer sag equation supports only even powers. The omitted odd-order terms contribute asymmetric sag corrections — primarily coma. The rendered surface shape will therefore differ from the patent prescription at the rim.

### Conic Constant Convention

The patent's aspheric formula uses the κ (kappa) convention, where the discriminant is (1 − κ·C²·h²) with κ = 1 + K (standard conic). The tabulated "K" values are κ values, not standard K. Converting: κ = 0.10 → K_standard = −0.90 (near-paraboloid). The data file uses the standard K convention.

### Back Focal Distance

The patent lists D20 = 10.00 mm (to the cover glass) plus a 2.80 mm parallel plate (nd = 1.5168). Since sensor glass is excluded per project spec, the last surface d is set to the paraxial air-equivalent BFD = 12.60 mm.

### Close-Focus Gaps

The patent provides only infinity-focus data. Close-focus gaps were estimated via full-system paraxial conjugate matching, finding the focus group shift δ that produces a focused image at 0.28 m (Fujifilm-specified minimum focus distance measured from the sensor plane). The computed shift is δ ≈ 2.20 mm.

---

## Summary

The Fujinon XF 23mm F1.4 R, as represented by Example 4 of US 2014/0368926 A1, is a compact 11-element, 8-group design optimized for fast-aperture wide-angle imaging on the APS-C format. Its optical architecture is organized around three key principles:

1. **A split front group** with a negative diverging subgroup (G11) ahead of a strong positive subgroup (G12), enabling wide-angle coverage and field flattening without the excessive length of a traditional retro-focus layout.
2. **A single glass-molded aspherical element** (L21, S-LAH63Q) positioned immediately behind the aperture stop, carrying the bulk of the spherical aberration correction. The extended polynomial aspherics with odd-order terms enable simultaneous correction of spherical aberration and coma, though only even-order terms are representable in the current data format.
3. **Inner focusing** using the rear positive subgroup (L21 + triplet) with a fixed negative field-flattener (L25), providing constant length, reduced breathing, and stable aberration performance across the focus range.

The glass selection is heavily weighted toward high-index materials, with the HOYA TAFD40 ultra-high-index element (nd = 2.001) providing anomalous partial dispersion for secondary spectrum correction, and the OHARA S-LAH63Q moldable glass enabling cost-effective aspherical surface manufacturing.
