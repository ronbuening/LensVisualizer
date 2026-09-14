# VILTROX AF 14mm f/4 AIR

## Patent Reference and Design Identification

**Patent:** CN 121091494 A\
**Application Number:** 202410689642.0\
**Filed:** 2024-05-30\
**Published:** 2025-12-09\
**Inventors:** Liu Ruijun; Chen Baofeng\
**Applicant:** Shenzhen Viltrox Technology Co., Ltd.\
**Title:** 一种紧凑型内合焦式超广角摄影镜头及摄影装置\
**Classification:** G02B 15/14 (2006.01)\
**Embodiment analyzed:** Example 1

CN 121091494 A describes a compact internally focusing ultra-wide photographic lens in three functional groups, with the middle group translating for focus while the groups ahead of and behind it remain fixed relative to the image plane (¶0062, ¶0068, ¶0123). Example 1 is the prescription represented by this LensVisualizer record.

For this catalog entry, Example 1 is the selected production correlation for the VILTROX AF 14mm f/4 AIR. The final record covers the full-frame Sony E and Nikon Z production variants published by Viltrox. The correlation is editorial rather than a manufacturer statement that the released lens is identical to the patent example. Several independent features converge:

1. Example 1 contains 12 elements in 9 air-separated groups, matching Viltrox's published 12-element/9-group construction.
2. The patent places double-aspherical elements at L2 and L11. Viltrox's optical-construction graphic identifies its two aspherical elements in the same positions. The manufacturer's four ED callouts occupy L3, L7, L9, and L12, corresponding to the high-Abbe positions in Example 1; its two HRI callouts occupy L1 and L8, corresponding to the patent's high-index positions.
3. Table 3 gives 14.3 mm at infinity, while the final prescription computes to 14.192130 mm; Viltrox markets the production lens as 14 mm.
4. The patent's Figure 3 reaches approximately 56.2° half-field, consistent with Viltrox's 112.6° published full field. Paragraph ¶0135 instead prints 14.02°; that text is internally inconsistent with the figure and is not used as the modeled field.
5. Example 1 uses internal focusing by translation of G2 alone. Viltrox likewise specifies internal focus for the production lens and identifies an STM plus lead-screw drive.
6. The patent was filed on 2024-05-30, before Viltrox's 2025-09-19 product launch.

One source discrepancy is substantial. Paragraph ¶0135 labels the Example 1 aberration plots as f/1.47, whereas the production lens is f/4. Independent exact meridional tracing of the published Example 1 geometry shows that the entrance-pupil height implied by f/1.47 cannot traverse the mathematical surfaces; even before authored clear apertures are imposed, the surface geometry limits an on-axis parallel bundle to approximately f/2.295. The data file therefore uses the physically consistent f/4 production-correlated stop geometry and deliberately leaves `apertureDesign` unset rather than presenting f/4 as a patent-derived design aperture. The source f/1.47 value is retained as an unresolved patent inconsistency, not silently substituted.

## Optical Architecture

The prescription is a 12-element, 9-group ultra-wide prime with three functional optical groups. In the final model, G1 comprises L1-L6, the aperture stop follows G1, G2 comprises L7-L9 and translates for focus, and G3 comprises L10-L12. The physical 9-group count includes three cemented pairs: L3+L4, L5+L6, and L7+L8. These cemented assemblies are physical air-separated groups; G1, G2, and G3 are functional focus-group annotations.

The computed group powers are negative-positive-negative: G1 has an effective focal length of -373.767800 mm, G2 +16.546572 mm, and G3 -41.474157 mm. This resolves another internal patent contradiction. The abstract, claim 1, and ¶0062 describe G1 as positive, but condition (1), `F1/F ≤ -3`, requires negative G1 power for a positive complete system. The Example 1 prescription itself computes negative, so the numerical condition and prescription are mutually consistent while the prose sign is not.

The front group is only weakly negative as a whole despite containing several individually strong positive and negative components. That internal cancellation allows the front section to accept the very wide field while delivering a relatively moderate vergence to the stop. The compact positive G2 then carries most of the focusing sensitivity. The fixed negative G3 reshapes the converging bundle behind the focus group and completes the wide-angle back-focus geometry.

At infinity, the complete powered prescription computes to an effective focal length of 14.192130 mm and a Gaussian back focal distance of 14.292563 mm measured from the S22 vertex. By the project's strict criterion `BFD > EFL`, the printed prescription is narrowly retrofocus, with `BFD/EFL = 1.00708`. This is a first-order property of the rounded patent indices, not a mechanical flange-distance claim.

The stop location itself is published in the prescription between S10 and S12. Its semi-diameter is not published. The model's `STO.sd = 3.451627 mm` is an inferred f/4 aperture derived from the final optical model rather than a patent clear-aperture value.

The patent also inserts a plane-parallel filter after L12 (¶0121 and Table 1, S23-S24). Filters are excluded from the ordinary LensVisualizer prescription. The physical rear path of 12.49 mm air, 2.85 mm of n=1.52 plate, and 1.00 mm air is therefore replaced by a paraxially equivalent 15.365 mm air spacing after S22. No focal-length scaling is applied anywhere in the prescription.

## Element-by-Element Analysis

The focal lengths given below are standalone element focal lengths calculated in air from the final radii, thicknesses, and stored d-line indices. They are comparison quantities, not the in-situ power of a component when it is cemented to a neighbor. Where a cemented pair is discussed, its net in-situ assembly focal length is stated separately.

### L1 — Negative Meniscus

**nd = 1.92, νd = 20.9. Glass: 923209 class. Standalone f = -28.428867 mm.**

L1 is the high-index front negative meniscus specified in Example 1 (¶0123). The patent explicitly requires the first element to have `Nd ≥ 1.8`; the worked example uses 1.92. Its large standalone negative power starts the angular expansion characteristic of an ultra-wide front section. The patent associates the high index with compactness and aberration control (¶0076, ¶0084), while the final model treats the specific glass only as a coordinate class because no manufacturer is named in the prescription.

### L2 — Negative Meniscus, Two Aspherical Surfaces

**nd = 1.50, νd = 81.6. Glass: J-FKH1 equivalent (qualified spectral proxy). Standalone f = -31.104312 mm.**

L2 carries the front pair of aspheres, surfaces 3A and 4A. It is another negative meniscus, so the front two elements provide substantial local negative power before later positive compensation. The patent identifies the second element as aspherical and discusses the use of an early asphere to support a broad field with a compact front diameter (¶0075, ¶0082-¶0084). In this model, the aspheric terms provide higher-order shaping while the paraxial element remains strongly negative.

### L3 — Negative Meniscus, Front Component of J1

**nd = 1.59, νd = 68.3. Glass: 592683 class. Standalone f = -21.188886 mm.**

L3 is cemented directly to L4 at surface 6 and is the high-Abbe member of the first achromatizing pair. Example 1 gives `νd = 68.3` and condition (4) requires a difference of at least 30 between L3 and L4. The stored pair gives `|68.3 - 33.8| = 34.5`.

Taken alone in air, L3 is strongly negative. That figure must not be confused with the behavior of J1: once L3 is cemented to L4 through the real glass-to-glass interface, the complete J1 doublet has a net focal length of +28.314493 mm.

### L4 — Biconvex Positive, Rear Component of J1

**nd = 1.65, νd = 33.8. Glass: 648338 class. Standalone f = +12.588903 mm.**

L4 is the positive, lower-Abbe partner of L3. The biconvex element supplies the positive side of the strongly contrasting cemented pair described in ¶0082 and governed by condition (4). Its standalone focal length is much shorter than the net focal length of J1, illustrating the degree of power cancellation and interface coupling within the cemented assembly.

The L3/L4 combination therefore serves two separable first-order roles: it returns positive power to the otherwise negative front section, and its large Abbe-number contrast gives the patent a direct mechanism for primary axial color balancing without requiring an anomalous-dispersion claim.

### L5 — Biconcave Negative, Front Component of J2

**nd = 1.68, νd = 55.5. Glass: 678555 class. Standalone f = -8.776417 mm.**

L5 is the strongest negative standalone element in G1. It is cemented to L6 at surface 9. The element's large local negative power is almost canceled by the positive L6 when the pair is evaluated through its true cemented interface.

This pair is not one of the patent's specified large-Abbe-difference conditions. Its first-order significance is instead the strong cancellation immediately ahead of the stop, allowing substantial local bending while leaving the net J2 assembly only weakly positive.

### L6 — Biconvex Positive, Rear Component of J2

**nd = 1.67, νd = 47.2. Glass: 670472 class. Standalone f = +9.530690 mm.**

L6 is the positive partner to L5 and the last glass element in G1. Its standalone power is close in magnitude and opposite in sign to L5. The cemented J2 pair computes to a much weaker net focal length of +170.591742 mm, so the pair behaves very differently from either component considered in air.

Because J2 lies immediately ahead of the aperture stop, this cancellation helps explain how G1 can contain several high-power surfaces yet finish with the very weak net negative focal length of -373.767800 mm.

### L7 — Biconvex Positive, Front Component of Moving J3

**nd = 1.46, νd = 90.2. Glass: 459902 class. Standalone f = +15.752227 mm.**

L7 begins G2, the sole moving focus group. It is a high-Abbe positive element cemented to L8. Example 1 explicitly assigns L7 `νd = 90.2` and uses the L7/L8 Abbe contrast as condition (5) (¶0095-¶0100).

The positive L7 and negative L8 do not cancel completely. Their cemented J3 assembly retains a net focal length of +34.919883 mm, and the additional separated positive L9 strengthens the complete G2 to +16.546572 mm.

### L8 — Negative Meniscus, Rear Component of Moving J3

**nd = 2.00, νd = 25.4. Glass: 001254 class. Standalone f = -30.603846 mm.**

L8 is a high-index, low-Abbe negative meniscus cemented to L7. Its `nd = 2.00` and `νd = 25.4` contrast sharply with L7's low index and very high Abbe number. The resulting `|νd7 - νd8| = 64.8` comfortably satisfies the patent's condition (5).

The element is important to distinguish from the J3 assembly. L8 alone is negative, but the cemented L7/L8 unit remains positive; its chromatic pairing and first-order power are therefore properties of the coupled doublet rather than of L8 in isolation.

### L9 — Biconvex Positive

**nd = 1.46, νd = 90.2. Glass: 459902 class. Standalone f = +29.573906 mm.**

L9 is a separate high-Abbe positive element behind J3 and completes the moving focus group. The patent gives L9 the same `νd = 90.2` as L7 in Example 1 (¶0123). Its positive power, combined with the already positive J3 doublet and the intervening air spacing, yields the strongly positive net G2 power.

That strong positive group is the only optical unit translated during focus. Its compact three-element construction is consistent with the patent's stated objective of keeping the moving mass small while maintaining aberration control during focusing (¶0096).

### L10 — Biconcave Negative

**nd = 1.78, νd = 25.7. Glass: Unmatched (patent 1.78 / 25.7; no compatible catalog curve). Standalone f = -22.715762 mm.**

L10 begins the fixed rear group G3 with substantial negative power. The patent describes the first element of G3 as negative in this configuration (¶0105-¶0107). In the final prescription it is the dominant negative standalone component behind the focusing group.

Its position immediately after the variable D2 air gap makes it optically sensitive to the G2 focus motion even though L10 itself remains stationary. This is an in-situ interaction of group spacing, not a change in L10's standalone element power.

### L11 — Positive Meniscus, Two Aspherical Surfaces

**nd = 1.64, νd = 23.5. Glass: Unmatched (nd≈1.64, νd≈23.5). Standalone f = +1339.524004 mm.**

L11 is a very weak positive meniscus in paraxial terms, yet both of its surfaces, 19A and 20A, are aspherical. That combination is significant: the element contributes little standalone first-order power while retaining substantial freedom to alter higher-order ray bending in the rear group. The patent identifies the eleventh element as the aspherical member of G3 for Example 1 (¶0105, ¶0123).

No defensible current public catalog match was found for the stored rounded coordinate pair. The data therefore preserves the explicit `Unmatched` label rather than assigning a vendor glass whose catalog coordinates would not be justified.

### L12 — Near Plano-Convex Positive

**nd = 1.59, νd = 68.6. Glass: 593686 class. Standalone f = +77.116985 mm.**

L12 is the final positive element. Its rear radius of -1352.722 mm is optically very weak compared with its +47.039 mm front surface, hence the near plano-convex description used by the data file. The element partially offsets L10's negative power, but the complete fixed rear group still computes to -41.474157 mm.

The source places a plane-parallel filter behind L12. Because that plate is excluded from the active model, L12 is followed directly by the 15.365 mm air-equivalent rear spacing described above rather than by explicit filter surfaces.

## Glass Identification and Selection

The patent provides rounded d-line `nd` and `νd` coordinates but does not name glass manufacturers or catalog types. The final data therefore uses generic six-digit coordinate-class labels where a defensible class can be maintained and an explicit unmatched label where it cannot. Ten of the twelve elements resolve through compatible catalog curves. L2 uses J-FKH1 at 1.49782 / 82.57 as a qualified spectral proxy for the rounded patent pair 1.50 / 81.6 (Δnd=-0.00218, Δνd=+0.97). L10 and L11 remain explicitly unmatched. No annotation establishes a production supplier.

| Elements | nd | νd | Authored glass annotation | Design use |
|---|---:|---:|---|---|
| L1 | 1.92 | 20.9 | 923209 class | High-index, low-Abbe front negative |
| L2 | 1.50 | 81.6 | J-FKH1 equivalent (qualified spectral proxy) | High-Abbe double-aspherical negative |
| L3 | 1.59 | 68.3 | 592683 class | High-Abbe negative member of J1 |
| L4 | 1.65 | 33.8 | 648338 class | Lower-Abbe positive member of J1 |
| L5 | 1.68 | 55.5 | 678555 class | Strong negative member of J2 |
| L6 | 1.67 | 47.2 | 670472 class | Positive member of J2 |
| L7, L9 | 1.46 | 90.2 | 459902 class | Very-high-Abbe positive elements in G2 |
| L8 | 2.00 | 25.4 | 001254 class | High-index, low-Abbe negative member of J3 |
| L10 | 1.78 | 25.7 | Unmatched (patent 1.78 / 25.7; no compatible catalog curve) | Dense low-Abbe rear negative |
| L11 | 1.64 | 23.5 | Unmatched (nd≈1.64, νd≈23.5) | Weak-power rear aspherical element |
| L12 | 1.59 | 68.6 | 593686 class | High-Abbe final positive |

No element in the patent is supplied with `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The data therefore contains none of those fields. The high Abbe numbers and the cemented-pair contrasts support discussion of ordinary chromatic balancing, but they do not support a claim of apochromatic correction or anomalous partial dispersion.

## Focus Mechanism

The patent uses internal focus. G1 and G3 remain fixed relative to the image plane, while G2, comprising L7-L9, moves along the optical axis (¶0062, ¶0068, ¶0123). Viltrox independently specifies internal focusing for the production lens and lists an STM plus lead-screw drive; the motor and screw are production mechanical facts and are not part of the optical prescription.

The final data uses a constrained reconstruction because the printed close-focus spacing row conflicts with the stated one-group mechanism. At infinity, Table 3 gives `D1 = 4.85 mm` and `D2 = 3.46 mm`, so the two air gaps surrounding G2 sum to 8.31 mm. At the patent's nominal 0.12 m endpoint, Table 3 prints `D1 = 3.75 mm` and `D2 = 4.65 mm`, which would increase the sum to 8.40 mm even though the adjacent groups remain fixed.

The modeled close state preserves the published D1 motion and the required fixed total track: `D1 = 3.75 mm`, `D2 = 4.56 mm`. G2 therefore translates 1.10 mm toward the object, and `D1 + D2` remains 8.31 mm in both modeled states.

| Quantity | Infinity | Constrained close state |
|---|---:|---:|
| D1 after STO | 4.85 mm | 3.75 mm |
| D2 after S16 | 3.46 mm | 4.56 mm |
| D1 + D2 | 8.31 mm | 8.31 mm |
| Computed EFL | 14.192130 mm | 13.615918 mm |

The computed focal-length change is -4.060% from infinity to the constrained close state. The UI field `closeFocusM = 0.13 m` follows Viltrox's marketed minimum focus distance. It is not used to redefine the patent's nominal 0.12 m spacing endpoint because neither source establishes an explicitly common distance reference plane.

## Aspherical Surfaces

Example 1 uses four aspherical surfaces: 3A and 4A on L2, and 19A and 20A on L11. Paragraphs ¶0079-¶0081 define the sag with `c = 1/R` and the standard conic term containing `1 - (1+K)c²h²`; the patent's K is therefore already the LensVisualizer conic constant and requires no conversion.

The published coefficients are:

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | -3.082850 | 4.043735e-04 | -6.207184e-06 | 5.701304e-08 | -3.274096e-10 | 8.690731e-13 |
| 4A | -3.407936 | 1.418814e-03 | -2.502304e-05 | 3.437591e-07 | -3.198244e-09 | 1.338523e-11 |
| 19A | -2.977833 | -2.736220e-05 | 5.530555e-06 | -6.569822e-08 | 3.343615e-10 | -7.618766e-13 |
| 20A | +0.190226 | 2.196878e-04 | 4.087407e-06 | -3.032095e-08 | 3.865600e-11 | 3.112743e-13 |

The front pair begins with positive A4 on both surfaces, followed by negative A6 and alternating higher orders; it therefore adds strong non-spherical shaping to an already negative front element. Surface 19A begins with a negative A4 term and positive A6, while 20A begins with positive A4 and A6, followed by a negative A8 term and smaller higher-order corrections. These sign patterns describe the polynomial departure from each surface's conic base; they are not standalone statements about aberration sign.

Surface 20A is the only positive-K asphere. Its authored semi-diameter of 7.700 mm lies below the verified 0.98 conic-domain ceiling of 11.886031 mm. The other three aspheres have negative K and no finite real-conic height limit of this type.

No prescription scale factor is applied. Consequently, the patent radii and spacings are retained at source scale, K is unchanged, and A4-A12 are transcribed without coefficient rescaling. The data file includes `A14 = 0` only to satisfy the current schema; A14 is not a published Example 1 coefficient.

## Chromatic Correction Strategy

The patent's chromatic strategy is visible primarily in the deliberately large Abbe-number separations at the cemented interfaces. J1 pairs L3 (`νd = 68.3`) with L4 (`νd = 33.8`), a difference of 34.5. J3 pairs L7 (`νd = 90.2`) with L8 (`νd = 25.4`), a difference of 64.8. Both exceed the patent's respective 30-unit minima in conditions (4) and (5).

The moving focus group also places a second `νd = 90.2` positive element, L9, behind J3. Thus G2 combines two very-high-Abbe positive elements with a dense low-Abbe negative partner, an arrangement consistent with suppressing primary longitudinal color changes as the group moves. This is an interpretation of the `nd/νd` distribution and patent inequalities, not a claim about secondary spectrum.

Viltrox markets the production lens as containing four ED elements. The manufacturer's optical-construction graphic places those callouts at the same element positions as L3, L7, L9, and L12 in the selected correlation. That positional agreement supports the production match, but the data does not translate the marketing term "ED" into exact glass identities because the patent provides no line-index or partial-dispersion data.

## Conditional Expressions

The patent gives eight design conditions, of which conditions (1)-(5), (7), and (8) apply to Example 1. Condition (6) belongs to a different G3 cemented configuration and is not applicable here. The group-power conditions below use the independently computed group focal lengths and the patent's printed `F = 14.3 mm` for Example 1.

| Condition | Example 1 evaluation | Result |
|---|---:|---|
| (1) `F1/F ≤ -3` | -26.13761 | Pass |
| (2) `1 ≤ F2/F ≤ 2` | 1.15710 | Pass |
| (3) `-3 ≤ F3/F ≤ -1` | -2.90029 | Pass |
| (4) `|νd3 - νd4| ≥ 30` | 34.5 | Pass |
| (5) `|νd7 - νd8| ≥ 30` | 64.8 | Pass |
| (7) `1.5 ≤ TTL/D ≤ 2` | 1.64261 | Pass |
| (8) `4 ≤ TTL/F ≤ 6` | 4.96993 | Pass |

For condition (7), the evaluation uses the source physical S1-to-image track of 71.07 mm and the 43.2666 mm diagonal of the production full-frame format. The patent does not independently print a numerical target-size `D` in Example 1, so the format substitution is a production-correlation inference. For condition (8), the same 71.07 mm source physical track is divided by the patent's printed 14.3 mm focal length. The active LensVisualizer model is shorter, 70.095 mm, only because the rear filter plate is replaced by its air-equivalent translation.

## Verification Summary

The final data file's load-bearing first-order values were recomputed directly from its TypeScript surface and focus arrays using sequential height/reduced-angle tracing and an independent ABCD construction. The two methods agree to machine precision. At infinity, the model gives EFL 14.192130 mm, Gaussian BFD 14.292563 mm, and a Petzval sum of +0.009564851 mm⁻¹ when each refracting surface is accumulated as `φ/(n·n′)`.

The authored semi-diameters are inferred optical rims measured from Figure 1 at 600 dpi, with the unchanged f/4 stop. The 54.73 mm glass span yields 14.75 µm/px. Mechanical steps at the rear of L1 and L2 are excluded. L11 retains the original 7.2/7.7 mm radii because surface 20A turns over near 7.8 mm, before the drawn rim. Other apertures are enlarged from the original ray-envelope estimates. Surface validation, aspheric slope scans, image-circle checks, and production render diagnostics pass.

These results describe the final LensVisualizer model, not metrology of a production sample. The 14 mm focal length, f/4 maximum aperture, 112.6° full field, 0.13 m minimum focus, 12/9 construction, internal focus, STM drive, and seven-blade diaphragm are manufacturer specifications; the exact prescription values and first-order computations come from the selected patent example and its normalized model.

## Sources and References

1. **CN 121091494 A**, 一种紧凑型内合焦式超广角摄影镜头及摄影装置, especially claims 1-17; ¶0062-¶0123; Example 1 at ¶0123-¶0136; Tables 1-3; Figures 1-5.
2. **Viltrox, AF 14mm F4.0 Air Full-Frame Lens for Sony E-mount.** https://viltrox.com/products/af-14mm-f4-0-fe
3. **Viltrox, AF 14mm F4.0 Air Full-Frame Lens for Nikon Z-mount.** https://viltrox.com/products/af-14mm-f4-0-z
4. **Viltrox, “Air Series New Release AF 9mm F2.8 and AF 14mm F4.0 E/Z-mount.”** Launch date 2025-09-19. https://viltrox.com/blogs/new-in/air-series-new-release-af-9mm-f2-8-and-af-14mm-f4-0-e-z-mount
5. **Glass-coordinate audit resources:** HOYA cross-reference tables, SCHOTT Advanced Optics glass catalog, OHARA optical-glass tables, HIKARI optical-glass catalog, CDGM product database, and SUMITA optical-glass tables. These were used only to test coordinate plausibility; no vendor glass identity is asserted in the final data file.

### Patent-rim and glass audit (2026-09-11 UTC)

Figure 1 is on PDF p.20. Manual optical-rim measurements supersede the automatic envelope where leaders or neighboring rims contaminate the result. SD changes, in mm:

| Surfaces | Previous SDs | Audited SDs |
|---|---|---|
| 1 / 2 | 9.3 / 8.0 | 12.7 / 9.8 |
| 3A / 4A | 7.5 / 6.3 | 9.7 / 7.6 |
| 5 / 6 / 7 | 5.9 / 5.7 / 5.3 | 7.3 / 6.3 / 6.3 |
| 8 / 9 / 10 | 5.2 / 4.8 / 4.6 | 6.1 / 5.0 / 5.0 |
| 12 / 13 / 14 | 5.4 / 6.1 / 6.8 | 6.6 / 6.6 / 7.5 |
| 15 / 16 | 7.2 / 7.3 | 8.8 / 8.8 |
| 17 / 18 | 6.8 / 7.0 | 9.3 / 9.3 |
| 21 / 22 | 8.2 / 8.6 | 13.3 / 13.3 |

At the new SDs, the polynomial departures from the conic bases are +1066.44 µm on 3A and +2178.61 µm on 4A. Both slope scans remain monotonic through their audited rims. The unchanged rear asphere pair remains below the 20A turnover. These are modeled surface departures, not measured production errors.

The original L2 and L10 six-digit labels resolved to S-FPL51 and S-TIH11 outside the optical-coordinate guard. L2 now uses the qualified J-FKH1 proxy and L10 remains unmatched. [Hikari optical glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), PDF p.33, confirms the J-FKH1 coordinates. Guard tolerances are unchanged.
