# Patent Analysis: JP2021-43376A — Voigtländer APO-LANTHAR 50mm f/2.0 Aspherical

*Corrected revision — see companion errata document for detailed change log.*

## 1. Patent Overview

| Field | Detail |
|---|---|
| Patent Number | JP2021-43376A |
| Application Number | 特願2019-166556 (P2019-166556) |
| Filing Date | September 12, 2019 (令和1年9月12日) |
| Publication Date | March 18, 2021 (令和3年3月18日) |
| Inventor | Yasuyuki Sugano (菅野 靖之) |
| Applicant | Cosina Co., Ltd. (株式会社コシナ), Nakano-shi, Nagano |
| Title | Imaging Optical System (撮像光学系) |
| Classification | G02B 13/00, G02B 13/18 |
| Total Claims | 18 |
| Total Worked Examples | 14 |

This patent was filed by Cosina in September 2019 — the same year the Voigtländer APO-LANTHAR 50mm f/2.0 Aspherical launched for Sony E-mount. It discloses a family of quasi-symmetric imaging optical systems for interchangeable-lens digital cameras, covering 14 worked examples that span focal lengths from 25.8 mm to 134 mm, all at f/2.2 or faster. The inventor, Yasuyuki Sugano, is distinct from the designers named in previously analyzed Cosina patents (Kazuhiro Ogino for the Nokton 50mm f/1.0; Shoju Hatta and Yoshitoshi Aida for the Nokton 35mm f/1.2).


## 2. Identification of Example 5 as the Production Lens

### 2.1 Production Lens Specifications

The Voigtländer APO-LANTHAR 50mm f/2.0 Aspherical exists in three mount versions with differing optical specifications. The E-mount version (launched 2019) is the primary reference for this analysis, as the patent was filed concurrent with its release.

| Specification | E-mount | VM (M-mount) | Z-mount / Z-mount II |
|---|---|---|---|
| Focal length | 50 mm | 50 mm | 50 mm |
| Maximum aperture | f/2.0 | f/2.0 | f/2.0 |
| Elements / Groups | 10 / 8 | 10 / 8 | 10 / 8 |
| Aspherical elements | 2 (4 aspheric surfaces) | 2 (4 aspheric surfaces) | 2 (4 aspheric surfaces) |
| APD elements | **5** (Voigtländer official) | **2** (Voigtländer official) | **5*(Voigtländer official page) |
| Floating focus | Yes | Yes | Yes |
| Image circle | Full-frame (43.2 mm diagonal) | Full-frame | Full-frame |

The discrepancy in APD element count between the E-mount (5) and VM (2) versions indicates that the VM design uses a modified glass selection — likely substituting conventional glasses in three positions to accommodate the shorter flange distance and smaller barrel diameter. The Z-mount versions share the E-mount's optical formula (CameraQuest states this explicitly for the Z-mount II).

### 2.2 Structural Match

Example 5 matches the E-mount production lens on every verifiable structural criterion:

| Criterion | Example 5 | Production lens (Z/E-mount) | Match |
|---|---|---|---|
| Focal length | 49.28 mm | 50 mm | ✓ |
| F-number | 1.93 | 2.0 | ✓ |
| Half-angle of view | 23.7° | ~23.4° (calc.) | ✓ |
| Total elements | 10 (5 front + 5 rear) | 10 | ✓ |
| Total groups | 8 (5 front + 3 rear) | 8 | ✓ |
| Aspherical elements | 2 (4 surfaces) | 2 (4 surfaces) | ✓ |
| Aspheric placement | Element 2 (front) + Element 10 (rear) | "towards front and rear" | ✓ |
| Patent-listed dPgF elements | 2 (Elements 3, 4) | 5 (E-mount) | see below |
| Floating focus | Multiple schemes (F31–F36) | Yes | ✓ |
| Image height | 21.60 mm (from aberration plots) | 21.6 mm (FF diagonal/2) | ✓ |

Example 6 also matches the structural criteria of 10 elements / 8 groups at ~50 mm and ~f/2 (f = 48.73 mm, f/1.92). The distinguishing criterion is the glass selection: Example 5 uses two patent-flagged dPgF glasses — S-FPL51 (Element 3, dPgF = +0.0376) and K-GFK68 (Element 4, dPgF = +0.0195) — while Example 6 uses only S-FPL51. The inclusion of the Sumita specialty glass K-GFK68 in Example 5 is consistent with the E-mount lens's claim of five anomalous partial dispersion elements, making Example 5 the stronger production candidate.

The patent prescription explicitly lists dPgF for only two of the ten elements. The manufacturer's E-mount specification of five APD elements implies that three additional elements (inferred to be Elements 1, 5, and 6 based on their glass-map positions and unmatched catalog status) use glasses with anomalous partial dispersion properties that the designer chose not to flag in the patent table. This is consistent with common patent practice: dPgF is typically listed only for glasses with the most extreme or design-critical anomalous partial dispersion values.

Half-angle verification: arctan(21.60 / 49.28) = 23.7°, confirming the patent's stated value.
Entrance pupil diameter: 49.28 / 1.93 = 25.5 mm.

### 2.3 Optical Track

At infinity focus (F3s configuration), the total optical track from surface 1 to the image plane is 76.01 mm. The front group (surface 1 through the stop) spans 25.45 mm; the rear group (stop through the image) spans 50.56 mm. The back focal distance is 15.00 mm.

### 2.4 Optical Conditions

The patent establishes conditions governing the system's quasi-symmetric balance. For Example 5:

**Condition 1 (DF3/DR3):** The ratio of the distance from the stop to the object-side face of the 3rd element counting outward on each side. DF3 = 19.77 mm (stop to surface 5, the object-side face of Lfb), DR3 = 18.87 mm (stop to surface 16, the image-side face of Lrb). This yields DF3/DR3 = 1.05, confirming the patent's stated value and satisfying the constraint 0.55 < DF3/DR3 < 1.35. The ratio slightly exceeds 1.0, indicating that the front group extends modestly farther from the stop than the rear group — consistent with the need to handle the long object conjugate.

Note: The Lfb designation refers to the 3rd element from the object, which is also the 3rd counting outward from the stop on the object side — the two numbering conventions coincide for the front group of Example 5.

**Condition 2 (DF4/DR4):** This ratio measures the symmetry of the partial-symmetry lens group boundaries relative to the stop. For Example 5, the patent states DF4/DR4 = 1.24, satisfying the constraint 0.45 < DF4/DR4 < 1.55. The definition of DF4 and DR4 for this condition depends on the partial-symmetry group configuration (¶55–56 of the patent); it is computed from the symmetry-center of the Gc groups, not the full system extent.


## 3. Lens Architecture

### 3.1 Group Structure

The 10 elements are organized into 8 groups:

```
 Front Group 101                      Rear Group 102
 (5 elements, 5 groups)               (5 elements, 3 groups)
 OBJ → [LF] [Lfa] [Lfb] [Lfc] [Lfd] |STO| [Lrd|Lrc] [Lrb|Lra] [LE] → IMG
       (−)  (+)   (+)   (+)   (−)          (−)(+)    (+)(−)    (−)
       Elem1 Elem2 Elem3 Elem4 Elem5      Doublet Jb Doublet Ja Elem10
       APD*  ASPH  APD   APD   APD*         APD*              ASPH
                                            
 APD  = patent-listed anomalous partial dispersion (Elements 3, 4)
 APD* = inferred anomalous partial dispersion (Elements 1, 5, 6; E-mount only)
```

Power sequence from object: (−)(+)(+)(+)(−) [stop] (−)(+)(+)(−)(−)

The front group consists entirely of single (air-spaced) elements. The rear group uses two cemented doublets (Jb and Ja) followed by an isolated aspheric field corrector (LE), separated by a 12.49 mm air gap.

### 3.2 Partial-Symmetry Groups (Gc)

The patent's central innovation is the "partial-symmetry lens group" — a sub-assembly of two or more positive lenses flanked by negative lenses, whose local symmetry provides aberration cancellation. In Example 5, the front group forms one Gc with the power sequence (−)(+)(+)(+)(−), and the rear group forms another with (−)(+)(+)(−) in the cemented doublets. These Gc groups enable the quasi-symmetric cancellation of coma, distortion, and lateral chromatic aberration between the front and rear halves of the system.

### 3.3 Focus Mechanisms

Example 5 specifies six distinct focus schemes (F31–F36), each moving different combinations of element groups to maintain aberration correction as the object distance decreases. The production lens implements a floating focus system consistent with schemes like F33 or F36, where two or three sub-groups move with different displacements to vary the inter-group air spaces while preserving the quasi-symmetric balance.


## 4. Element-by-Element Analysis

### Element 1 — LF: Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | 1, 2 |
| nd / νd | 1.54373 / 47.65 |
| Anomalous partial dispersion | Inferred (E-mount manufacturer spec; not patent-listed) |
| Element focal length | −45.46 mm (patent: −45.4625 mm) |
| Glass identification | Unmatched — no standard catalog entry in OHARA, Schott, HOYA, HIKARI, Sumita (public), or CDGM |
| dPgF | Unknown sign and magnitude; patent does not list |

**Optical function.** The first lens the light encounters and the opening bracket of the front partial-symmetry group. As a diverging element, it widens the incoming beam before it reaches the positive elements downstream. This serves two purposes: it reduces the angle of incidence on the positive surfaces behind it (suppressing higher-order aberrations and manufacturing error sensitivity), and it introduces the negative power that bookends the (−)(+)(+)(+)(−) Gc structure.

At this position — the very front of the system — this element sees the full field angle. Its chief ray height is at its maximum, which means any anomalous partial dispersion would contribute strongly to lateral chromatic aberration correction. As a negative-power element, it would provide a chromatic correction term that complements the positive contributions from Elements 3 and 4.

**Glass identification.** The nd/νd combination of 1.544/47.65 (glass code 544477) falls in a sparsely populated region of the glass map. It is too dispersive for standard crown glasses, too low in refractive index for barium or lanthanum flints at this Abbe number, and does not match any published KZFS series entry. The nearest cataloged glass across all surveyed manufacturers is N-KZFS2 (Schott, nd = 1.558, νd = 54.0), which differs by Δnd = 0.015 and Δνd = 6.4 — far outside patent rounding tolerances. Given the confirmed Sumita connection through Element 4 (see below), this is likely a Sumita proprietary type not included in publicly available catalog data.

**APD status.** This element's identification as APD is inferential, not patent-stated. The inference rests on: (a) the E-mount manufacturer's claim of 5 APD elements; (b) the glass's failure to match any standard catalog type, consistent with a specialty APD formulation; and (c) the VM version's reduced APD count of 2, suggesting this element may use a conventional glass substitute in that version.


### Element 2 — Lfa: Positive Meniscus, Double-Sided Aspheric

| Property | Value |
|---|---|
| Surfaces | 3A, 4A (both aspheric) |
| nd / νd | 1.85249 / 42.08 |
| Anomalous partial dispersion | No |
| Element focal length | +74.53 mm (patent: +74.5266 mm) |
| Glass identification | Probable: S-LAH79 (OHARA), nd = 1.85478, νd = 42.06 (Δnd = 0.0023, Δνd = 0.02) |

**Optical function.** The primary monochromatic correction element and the most technically demanding component in the front group. At nd = 1.852, this dense lanthanum glass provides substantial refractive power without excessive curvature. The meniscus form — both surfaces curving toward the object — equalizes incidence angles on both faces, which the patent explicitly identifies as a strategy for reducing error sensitivity (¶42). The element sits immediately after the negative LF, receiving the diverging beam and beginning the convergence toward the stop.

**Aspherical surfaces.** Both surfaces are aspheric but with very different character:

*Front surface (ASP 3):* Coefficients K = 0, A4 = −1.6435×10⁻⁶, A6 = +7.0442×10⁻¹⁰, A8 = +2.7291×10⁻¹¹, A10 = −2.2674×10⁻¹⁵ on a base radius of R = 50.421 mm.
At 13 mm semi-diameter (estimated from the lens geometry; the patent does not specify clear apertures), the total aspherical departure from the base sphere is −21.6 µm, dominated by the A4 term (−46.9 µm) partially offset by the A8 term (+22.3 µm). This is a moderately aspheric surface where the fourth-order and eighth-order terms partially cancel, producing a smooth, controlled departure profile.

*Rear surface (ASP 4):* Coefficients K = 0, A4 = +6.4457×10⁻⁶, A6 = +1.9943×10⁻⁹, A8 = +2.8907×10⁻¹¹, A10 = −4.7319×10⁻¹⁵ on a base radius of R = 236.595 mm.
At 13 mm semi-diameter, the departure reaches +216.7 µm — an order of magnitude stronger than the front surface. The A4 coefficient is 3.9× larger in absolute value than the front surface's, and all significant terms are positive, meaning the departures accumulate rather than partially canceling. The very gentle base radius (236.6 mm) means this surface is nearly flat spherically, with the aspheric terms building up a steep departure from that gentle baseline.

**Manufacturing implications.** The front surface is comfortably within precision glass molding (PGM) or conventional CNC polishing tolerances. The rear surface's 217 µm departure is substantial and more demanding. However, the critical challenge for this element is the glass itself: S-LAH79-class lanthanum glass has a high glass transition temperature (~700°C+), making PGM require specialized high-temperature mold materials and tight thermal control. The alternative — CNC grinding plus magnetorheological finishing (MRF) — achieves the required surface accuracy but at higher per-unit cost. Given Cosina's production volumes, high-temperature PGM with a dedicated mold is the likely manufacturing path.


### Element 3 — Lfb: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | 5, 6 |
| nd / νd | 1.49700 / 81.61 |
| dPgF | +0.0376 (patent-listed) |
| Anomalous partial dispersion | Confirmed (patent-listed) |
| Element focal length | +60.00 mm (patent: +59.9999 mm) |
| Glass identification | Certain: S-FPL51 (OHARA) = N-PK52A (Schott) = FCD1 (HOYA) = J-FK01A (HIKARI) = K-PFK80 (Sumita) = H-FK61 (CDGM). Exact match (Δnd = 0.00000, Δνd = 0.00). |

**Optical function.** The primary chromatic correction powerhouse. S-FPL51 is a fluorophosphate crown — the same glass family used in the best astronomical and photographic apochromatic objectives. Its extremely high Abbe number (81.61) contributes positive optical power with minimal chromatic dispersion, while its large positive anomalous partial dispersion (+0.0376) directly attacks secondary spectrum by shifting the blue (F-line) focus closer to the red (C-line) focus than normal glasses would achieve.

The biconvex form is the most efficient shape for positive power. However, S-FPL51's low refractive index (1.497) limits how much curvature can be applied before edge thickness becomes impractical. This is precisely why the patent uses consecutive positive elements (Lfb + Lfc) to share the power burden. The patent discusses this explicitly (¶41, ¶45): anomalous partial dispersion glasses with low refractive indices "cannot obtain the required refractive power if the curvature is small, so consecutive use of positive lenses is effective."

This is a universal glass type with exact equivalents across all major manufacturers, so its sourcing cannot be determined from the nd/νd data alone.


### Element 4 — Lfc: Biconvex Positive

| Property | Value |
|---|---|
| Surfaces | 7, 8 |
| nd / νd | 1.59282 / 68.62 |
| dPgF | +0.0195 (patent-listed) |
| Anomalous partial dispersion | Confirmed (patent-listed) |
| Element focal length | +55.00 mm (patent: +55.0002 mm) |
| Glass identification | Certain: K-GFK68 (Sumita). Exact triple match on nd, νd, and dPgF. Nearest alternative: S-FPM2 (OHARA, nd = 1.59522, νd = 67.73) differs by Δnd = 0.0024, Δνd = 0.89. |

**Optical function.** The secondary chromatic correction element and power-sharing partner to Lfb. K-GFK68 is a Sumita fluorophosphate crown ("ガラス蛍りん酸クラウン") with a higher refractive index than S-FPL51 (1.593 vs 1.497), allowing it to achieve more optical power per unit curvature. Its anomalous partial dispersion (+0.0195) is smaller than S-FPL51's (+0.0376) but still substantial. Together, Lfb and Lfc form a graded chromatic correction pair: Lfb handles the bulk of the secondary spectrum correction while Lfc supplements it with additional converging power on gentler curves.

**Supplier identification.** The exact triple match to Sumita K-GFK68 — an unusual glass with no close equivalent in the OHARA, Schott, HOYA, HIKARI, or CDGM catalogs — is the single strongest evidence for Cosina's glass supply chain in this lens. The nearest OHARA alternative (S-FPM2) misses by Δnd = 0.0024 and Δνd = 0.89, which is outside the typical patent prescription rounding margin. This identification has cascading implications for the three unmatched glasses that may also be APD (Elements 1, 5, and 6), all of which resist identification across all surveyed standard catalogs and may also be Sumita proprietary types.


### Element 5 — Lfd: Negative Meniscus

| Property | Value |
|---|---|
| Surfaces | 9, 10 |
| nd / νd | 1.51322 / 57.22 |
| Anomalous partial dispersion | Inferred (E-mount manufacturer spec; not patent-listed) |
| Element focal length | −67.61 mm (patent: −67.6136 mm) |
| Glass identification | Unmatched — no standard catalog entry. Nearest: J-BK7A (HIKARI, nd = 1.517, νd = 64.1), Δnd = 0.004, Δνd = 6.9 |

**Optical function.** The closing bracket of the front partial-symmetry group and the last element before the stop. Its position is critical: the large air gap following it (ZD10 = 5.49 mm at infinity, the widest in the front group) serves as the primary focus adjustment space in several of the patent's focus schemes. This element is the boundary between the front group and the stop, meaning it controls the exit angle of the converging beam entering the stop region.

If confirmed as APD (as the E-mount specification implies), this element at a position where both the marginal and chief ray heights are moderate would contribute to both axial and lateral chromatic correction. Its meniscus form — curving toward the object — provides negative power while keeping the beam's incidence angles manageable.

**Glass identification.** The nd/νd combination of 1.513/57.22 (glass code 513572) falls between BK7 (nd = 1.517, νd = 64.1) and light barium crowns. The νd is too low for BK7, while the nd is too low for standard barium types at this Abbe number. The position on the glass map is consistent with a phosphate-modified borosilicate or a specialty FK/PK-adjacent composition — exactly the kind of niche glass Sumita develops for demanding chromatic correction applications.

**APD status.** Inferential, not patent-stated. Same reasoning as Element 1.


### Aperture Stop (STO)

Located between surfaces 10 and 12, with a variable air gap (ZD10 on the object side, ZD11 on the image side). At infinity focus, ZD10 = 5.49 mm and ZD11 = 3.36 mm. These air gaps change during focusing to maintain the quasi-symmetric aberration balance.


### Element 6 — Lrd: Biconcave Negative (cemented with Lrc to form doublet Jb)

| Property | Value |
|---|---|
| Surfaces | 12 (object-side), cemented at surface 13 interface |
| nd / νd | 1.70269 / 34.87 |
| Anomalous partial dispersion | Inferred (E-mount manufacturer spec; not patent-listed) |
| Element focal length | −23.81 mm (patent: −23.8070 mm) |
| Glass identification | Unmatched — falls between N-KZFS12 (Schott, nd = 1.696, νd = 36.0, dPgF = −0.009) and N-KZFS8 (Schott, nd = 1.720, νd = 34.7, dPgF = −0.011). |

**Optical function.** The first element after the stop and the opening negative of the rear partial-symmetry group. Together with Element 5, it straddles the aperture stop — the most significant position in the optical system for simultaneous control of axial and lateral chromatic aberration. At the stop, the chief ray passes through the center (zero height) while the marginal ray is near its maximum height; APD glasses on both sides of this boundary allow the design to independently tune the chromatic correction contributions to axial versus lateral color.

Within cemented doublet Jb, Element 6 pairs with Element 7 (Lrc, νd = 47.18) across an Abbe number split of Δνd ≈ 12.3. This split drives primary chromatic correction in the rear group. If Element 6 does have anomalous partial dispersion (as inferred for the E-mount), it adds a secondary spectrum correction component that the doublet would not have with normal glass. The cement interface with Element 7 eliminates one air-glass reflection and removes a tight air-spacing tolerance.

**Glass identification.** The νd ≈ 34.9 places this glass firmly in the territory of KZFS-family short flints, which characteristically have negative anomalous partial dispersion. The nd of 1.703 falls between N-KZFS12 (nd = 1.696) and N-KZFS8 (nd = 1.720), not matching either. The dPgF sign is almost certainly negative, estimated at approximately −0.009 to −0.011 based on the glass map position, though the exact value cannot be confirmed. This glass is likely a Sumita K-PSFn family member or a similar specialty short-flint type.

**APD status.** Inferential, but with the strongest supporting evidence of the three inferred elements. The glass-map position in the KZFS short-flint region makes anomalous partial dispersion (negative dPgF) very likely on optical-physics grounds, independent of the manufacturer's claim.


### Element 7 — Lrc: Biconvex Positive (cemented with Lrd = doublet Jb)

| Property | Value |
|---|---|
| Surfaces | 13 (cemented interface), 14 (image-side) |
| nd / νd | 1.79334 / 47.18 |
| Anomalous partial dispersion | No |
| Element focal length | +23.37 mm (patent: +23.3706 mm) |
| Glass identification | Possible: S-LAH64 (OHARA, nd = 1.78800, νd = 47.49), Δnd = 0.0053, Δνd = 0.31. The Δnd of 0.0053 is substantial, and this element may represent another unmatched catalog type rather than a variant of S-LAH64. |

**Optical function.** The positive partner in doublet Jb. A high-index lanthanum glass near the normal line. The refractive index step at the cemented interface (Δnd ≈ 0.09) provides spherical aberration correction, while the Abbe number difference with Element 6 (Δνd ≈ 12.3) handles primary chromatic correction. The positive convex face at surface 14 faces the positive convex face of Element 8 across a 0.56 mm air gap (ZD14), which the patent identifies as a tuning parameter for balancing aberration contributions between the two doublets during focus (¶44).


### Element 8 — Lrb: Biconvex Positive (cemented with Lra = doublet Ja)

| Property | Value |
|---|---|
| Surfaces | 15 (object-side), cemented at surface 16 interface |
| nd / νd | 1.80258 / 46.60 |
| Anomalous partial dispersion | No |
| Element focal length | +26.31 mm (patent: +26.3092 mm) |
| Glass identification | Probable: S-LAH65V (OHARA, nd = 1.80400, νd = 46.58), Δnd = 0.0014, Δνd = 0.02 |

**Optical function.** The positive partner in doublet Ja. The patent discusses the general principle that Abbe number differences enable chromatic correction while refractive index differences strengthen spherical aberration correction (¶19, ¶44). The numerical data for Example 5 reveals a concrete implementation of this principle: doublet Jb has a substantial Abbe number split (Δνd ≈ 12.3) suited to chromatic correction, while doublet Ja has negligible Abbe number difference (Δνd ≈ 1.2, comparing 46.60 vs 45.38) but a large refractive index step (Δnd ≈ 0.249) suited to monochromatic correction — primarily spherical aberration and coma. In effect, Jb handles chromatic duties while Ja handles monochromatic duties — a clean division of labor.


### Element 9 — Lra: Biconcave Negative (cemented with Lrb = doublet Ja)

| Property | Value |
|---|---|
| Surfaces | 16 (cemented interface), 17 (image-side) |
| nd / νd | 1.55362 / 45.38 |
| Anomalous partial dispersion | No |
| Element focal length | −31.45 mm (patent: −31.4468 mm) |
| Glass identification | Unmatched — no close catalog entry. The nd/νd falls in a sparsely populated region of the glass map. |

**Optical function.** The closing negative of the rear partial-symmetry group. Its low refractive index creates the large index step with Element 8 (Δnd ≈ 0.249) that drives spherical aberration correction in doublet Ja. The fact that this element is not APD is itself informative: it tells us the rear group's chromatic work is concentrated entirely in doublet Jb (which contains Element 6, inferred APD for the E-mount), while doublet Ja is reserved for monochromatic correction using conventional glasses.

Following this element, the large 12.49 mm air space separates the main optical system from the field corrector. This gap creates a biconvex "air lens" that contributes to field curvature correction (¶66).


### Element 10 — LE: Negative Meniscus, Double-Sided Aspheric

| Property | Value |
|---|---|
| Surfaces | 18A, 19A (both aspheric) |
| nd / νd | 1.51633 / 64.06 |
| Anomalous partial dispersion | No |
| Element focal length | −96.17 mm (patent: −96.1693 mm) |
| Glass identification | Certain: S-BSL7 (OHARA) = N-BK7 (Schott). Match: Δnd = 0.00000, Δνd = 0.08. |

**Optical function.** The field corrector — a dramatically aspheric element isolated from the main optical system by the 12.49 mm air space. Both surfaces curve in the same direction (toward the image). At this position far from the stop, on-axis and off-axis ray bundles traverse completely different zones of the lens surface. This separation is what makes the strong asphericity productive: the aspheric profile can independently shape the wavefront for different field heights, correcting the residual astigmatism, field curvature, and coma that the quasi-symmetric core of the system cannot fully address.

**Aspherical surfaces.** Both surfaces carry dramatically stronger asphericity than Element 2's surfaces. The evaluation semi-diameter of 10 mm (compared to 13 mm for Element 2) reflects the smaller clear aperture of this rear element, estimated from the lens geometry. The patent does not specify clear apertures.

*Front surface (ASP 18):* Coefficients K = 0, A4 = −7.6822×10⁻⁵, A6 = +1.9445×10⁻⁷, A8 = −8.3803×10⁻¹⁰, A10 = +1.7349×10⁻¹² on a base radius of R = −34.164 mm.
At 10 mm semi-diameter, the total aspherical departure from the base sphere is −640 µm. All four aspheric terms contribute significant corrections: A4 provides −768 µm, A6 adds +194 µm back, A8 subtracts −84 µm, and A10 adds +17 µm. The terms partially cancel in an alternating-sign series, but the net departure is still extremely large.

*Rear surface (ASP 19):* Coefficients K = 0, A4 = −5.6981×10⁻⁵, A6 = −1.8942×10⁻⁷, A8 = −4.8687×10⁻¹⁰, A10 = +7.6837×10⁻¹³ on a base radius of R = −112.348 mm.
At 10 mm semi-diameter, the departure reaches −800 µm. Unlike the front surface, the first three terms here are all negative, meaning the departures accumulate rather than alternating. Only the A10 term provides a small positive correction (+7.7 µm).

**Scale comparison.** The A4 coefficient for ASP 18 is 47× larger in absolute value than ASP 3 (Element 2's front surface) and 12× larger than ASP 4 (Element 2's rear surface). The design concentrates dramatic asphericity on this final element while keeping the expensive high-index aspheric (Element 2) comparatively mild.

**Manufacturing implications.** Despite the large departures, this element is the easiest to manufacture of the two aspherics. S-BSL7 (BK7-type) has a low glass transition temperature (~557°C), excellent thermal stability, and decades of precision glass molding process characterization. It is arguably the single most well-understood glass for PGM. The design strategy is clear and deliberate: concentrate the dramatic asphericity on the cheapest, most moldable glass, and keep the expensive high-Tg lanthanum glass only mildly aspheric. The large departures are well within PGM capability for BK7-class materials — departures of several hundred micrometers are routine for modern PGM processes on low-Tg glasses.


## 5. Chromatic Correction Architecture

### 5.1 Distribution of APD Elements

The patent prescription for Example 5 explicitly lists dPgF values for only two elements (Element 3: +0.0376, Element 4: +0.0195). The identification of Elements 1, 5, and 6 as APD is an inference based on the E-mount manufacturer's specification of five anomalous partial dispersion elements, combined with the observation that these three elements use glasses that resist identification across all standard catalogs and occupy glass-map positions consistent with anomalous partial dispersion properties.

The five E-mount APD elements (two confirmed, three inferred) are distributed with a clear architectural logic:

```
 ★  Elem 1 (LF)  — Front of system. Negative. Full field angle exposure.     [inferred APD]
    Elem 2 (Lfa) — Aspheric, normal glass.
 ★  Elem 3 (Lfb) — S-FPL51, positive. Primary chromatic powerhouse.          [patent-listed dPgF]
 ★  Elem 4 (Lfc) — K-GFK68, positive. Secondary chromatic powerhouse.        [patent-listed dPgF]
 ★  Elem 5 (Lfd) — Negative meniscus. Last before stop.                      [inferred APD]
    ═══ STOP ═══
 ★  Elem 6 (Lrd) — Negative biconcave. First after stop.                     [inferred APD]
    Elem 7 (Lrc) — Normal LAH glass, positive.
    Elem 8 (Lrb) — Normal LAH glass, positive.
    Elem 9 (Lra) — Normal glass, negative.
    Elem 10 (LE) — Aspheric, BK7-type.
```

Four of the five APD elements are in the front group; only one (Element 6) is in the rear. No APD elements appear in the rear group beyond the first post-stop element. This asymmetry reflects two deliberate design choices:

First, the front group is where the beam is widest and the marginal ray heights are largest. Since axial chromatic aberration depends on the product of element power and marginal ray height squared, the front group dominates the axial chromatic correction. Placing three of the five APD elements here (Elements 1, 3, and 4) maximizes their chromatic impact.

Second, Elements 5 and 6 straddle the aperture stop. At this position, the marginal ray height is near its maximum (contributing to axial color) while the chief ray passes through the stop center. APD glasses flanking the stop provide simultaneous correction of both axial and lateral chromatic aberration — the two independent chromatic quantities that must both be zeroed for true apochromatic performance.

The rear group beyond Element 6 uses only conventional glasses, confining its role to monochromatic aberration correction via the doublets and the aspheric field corrector.

### 5.2 Positive and Negative APD Contributions

For apochromatic correction of secondary spectrum, a lens system needs anomalous partial dispersion contributions from elements with both positive and negative power. In this design:

**Positive-power APD elements (Elements 3 and 4):** These carry confirmed positive dPgF values (+0.0376 and +0.0195 respectively). As positive-power elements with positive dPgF, they shift the secondary spectrum in one direction.

**Negative-power APD elements (Elements 1, 5, and 6):** These carry unknown dPgF sign, but Element 6's position on the glass map (νd ≈ 34.9, in the KZFS short-flint territory) makes a negative dPgF near-certain. Elements 1 and 5 could have either positive or negative dPgF. The system requires these negative-power APD elements to balance the secondary spectrum contributions from Elements 3 and 4, achieving the three-wavelength chromatic correction that defines apochromatic performance.


## 6. Glass Identification and Supply Chain

### 6.1 Identification Summary

| Element | nd | νd | dPgF | APD | Identification | Confidence |
|---|---|---|---|---|---|---|
| 1 (LF) | 1.54373 | 47.65 | ? | ★ (inferred) | Unmatched | — |
| 2 (Lfa) | 1.85249 | 42.08 | — | — | S-LAH79 (OHARA) | Probable |
| 3 (Lfb) | 1.49700 | 81.61 | +0.0376 | ★ (patent) | S-FPL51 / K-PFK80 (universal) | Certain |
| 4 (Lfc) | 1.59282 | 68.62 | +0.0195 | ★ (patent) | K-GFK68 (Sumita) | Certain |
| 5 (Lfd) | 1.51322 | 57.22 | ? | ★ (inferred) | Unmatched | — |
| 6 (Lrd) | 1.70269 | 34.87 | ~−0.01 (est.) | ★ (inferred) | Unmatched (KZFS-adjacent) | — |
| 7 (Lrc) | 1.79334 | 47.18 | — | — | S-LAH64 (OHARA) | Possible (weak) |
| 8 (Lrb) | 1.80258 | 46.60 | — | — | S-LAH65V (OHARA) | Probable |
| 9 (Lra) | 1.55362 | 45.38 | — | — | Unmatched | — |
| 10 (LE) | 1.51633 | 64.06 | — | — | S-BSL7 / N-BK7 (universal) | Certain |

### 6.2 Sumita Connection

The exact triple match of Element 4 to Sumita K-GFK68 (nd, νd, and dPgF) is the key finding of the glass identification analysis. K-GFK68 is an unusual fluorophosphate crown that has no close equivalent in the OHARA, Schott, HOYA, HIKARI, or CDGM catalogs. The nearest OHARA competitor (S-FPM2) misses by Δnd = 0.0024 and Δνd = 0.89 — well outside typical patent rounding margins.

This identification establishes that Cosina sources specialty glass from Sumita Optical Glass, Inc. (住田光学ガラス株式会社), headquartered in Saitama, Japan. Sumita is known for proprietary formulations in the fluorophosphate and phosphate crown families, and their published catalog is smaller and less widely indexed than OHARA's or Schott's.

The three remaining unmatched glasses that may be APD (Elements 1, 5, and 6) all resist identification across every surveyed manufacturer's public catalog. Given the confirmed Sumita connection through Element 4, these are likely also Sumita proprietary types — possibly from the K-GFK, K-CaFK, or K-PSFn series, or from specialty compositions available only to established customers.

A dual-supplier strategy emerges: OHARA (or equivalents) for standard high-index glasses (Elements 2, 7, 8) and the universal types (Elements 3, 10), and Sumita for the specialty anomalous partial dispersion glasses that define the APO-LANTHAR's chromatic correction.


## 7. Evidentiary Boundaries

### Firmly Established

1. **This patent covers the design space of the APO-LANTHAR 50mm f/2.0 Aspherical.** Filing date, applicant, design parameters, and structural match all converge.
2. **Example 5 is the closest match to the E-mount production lens.** Every verifiable structural parameter aligns: 10/8 construction, 2 double-sided aspherics, ~50 mm/f2.0, full-frame image circle, floating focus. The inclusion of K-GFK68 (Element 4) distinguishes it from Example 6, which shares the structural parameters but uses only one patent-flagged dPgF glass.
3. **Element 4 is Sumita K-GFK68.** Exact triple match (nd, νd, dPgF) with no close alternative in any other manufacturer's catalog.
4. **Element 3 is S-FPL51 or its universal equivalent.** Exact match across all manufacturers.
5. **Element 10 is S-BSL7 (BK7-type).** Exact match across all manufacturers.
6. **The patent explicitly flags two elements as APD** (Elements 3 and 4, via dPgF values in the prescription table).
7. **The rear group performs a clean division of labor:** doublet Jb provides chromatic correction (large Δνd), doublet Ja provides monochromatic correction (large Δnd, negligible Δνd). This is inferred from the numerical data, supported by the patent's general discussion of these principles (¶19, ¶44).

### Inferential

8. **Example 5 likely represents the production prescription or a close precursor.** Patent examples routinely differ from production designs in minor details (glass substitutions, thickness tweaks, air space tuning).
9. **The E-mount version uses five APD elements** (Elements 1, 3, 4, 5, and 6), with Elements 1, 5, and 6 inferred from the manufacturer's E-mount specification plus their unmatched catalog status and glass-map positions. **The VM version uses only two** (likely Elements 3 and 4 only), based on Voigtländer's own VM product page.
10. **Elements 1, 5, and 6 are likely Sumita proprietary glasses** in the E-mount version, based on the confirmed Sumita connection and the failure to identify these glasses across all other surveyed catalogs.
11. **Element 6 likely has negative dPgF (~−0.009 to −0.011)**, based on its position in the KZFS region of the glass map.
12. **Cosina likely uses a dual-supplier strategy:** OHARA-family glasses for standard types, Sumita for specialty APD types.

### Cannot Determine

13. The exact dPgF values for Elements 1, 5, and 6.
14. Whether the patent prescription matches the production lens exactly or is a development-stage precursor.
15. Which specific Sumita catalog types (if any published types at all) correspond to Elements 1, 5, and 6.
16. Whether the E-mount and VM/Z-mount versions share identical optical prescriptions. The element/group count is the same across all versions (10/8), but the VM's reduced APD count (2 vs 5) strongly suggests different glass selections in at least three positions. The extent of any prescription changes (radii, thicknesses, air spaces) beyond glass substitution cannot be determined from published specifications alone.


## Sources

- JP2021-43376A, Japanese Patent Office (JPO), published 2021.03.18. Full patent text and tables transcribed from uploaded PDF.
- Voigtländer official product pages (voigtlaender.de):
  - E-mount: "Two aspherical lens elements, five with abnormal partial dispersion" (accessed 2025)
  - VM: "two double-sided aspherical elements, two with abnormal partial dispersion" (accessed 2025)
  - Z-mount II: "two double-sided aspherical elements, two with abnormal partial dispersion" (accessed 2025)
- B&H Photo product listings:
  - E-mount (SKU 1526146): "Five Partial Dispersion Elements"
  - VM (SKU BA362A): "anomalous partial dispersion and aspherical elements" (count not specified)
  - Z-mount II (SKU 1863096): "Five Partial Dispersion Elements"
- CameraQuest product listings:
  - VM: "two abnormal partial dispersion elements"
  - Z-mount II: "five abnormal partial dispersion elements" and "uses the same optical formula as the popular Sony E-mount lens"
- Amazon product listing for E-mount: "five abnormal partial dispersion elements"
- 5050 Travelog review (Morten Byskov, Dec 2023): "The M-mount version has 2 anomalous partial dispersion glasses, whereas the Z-mount version has 5"
- Photography Life review (Spencer Cox, May 2025): "the previous generation... has identical optics and is functionally the same lens" (referring to Z-mount vs Z-mount II)
- Sumita Optical Glass catalog: K-GFK68 glass data (nd = 1.59282, νd = 68.62, dPgF = +0.0195).
- OHARA optical glass catalog (2023 edition): S-FPL51, S-LAH79, S-LAH64, S-LAH65V, S-BSL7 glass data.
- Schott optical glass catalog: N-KZFS8, N-KZFS12, N-PK52A, N-BK7 glass data and dPgF values.
- HIKARI optical glass catalog: J-FK01A, J-KZFH2, J-BK7A glass data (via refractiveindex.info).
- HOYA cross-reference table: FCD1, PCD4 glass data.
- CDGM optical glass catalog: H-FK61, H-FK95N glass data.
- All thin-lens focal length calculations verified computationally against patent-stated values (maximum deviation 3.6%, consistent with thick-lens effects).
- Aspherical surface departures computed using the standard aspheric sag equation (Equation 1 in the patent) with verified coefficients from Table 5.
- DF3/DR3 = 1.05 independently verified from surface spacing data.
- Optical track, doublet Δnd/Δνd values, and all other numerical claims independently verified by Python script.
