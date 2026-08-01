## Patent Reference and Design Identification

**Patent:** JP 2026-8235 A\
**Application Number:** JP 2024-108774\
**Filed:** 2024-07-05\
**Published:** 2026-01-19\
**Inventor:** Yuki Shibata\
**Applicant:** Cosina Co., Ltd.\
**Title:** Imaging Lens
**Embodiment analyzed:** Example 1

The prescription is the unscaled Example 1 design from Table 1 of JP 2026-8235 A. This embodiment is the fixed production correlation for the **VOIGTLÄNDER APO-ULTRON 90mm f/2 VM**. Neither the patent nor Cosina's product page explicitly names the other, so the identification rests on convergent evidence rather than documented manufacturer confirmation.

1. The patent and production lens both use eight elements in seven groups.
2. Example 1 is specified at 87.28 mm and F/2.05 with a 13.71° half field, corresponding closely to the marketed 90 mm, f/2, and 27.4° full angle of view.
3. Cosina states that six of the eight production elements use abnormal-partial-dispersion glass. Its lens diagram marks the first three elements, both members of J1, and the rear L31-position element; mapped to Example 1, these are L11, L12, L13, L15, L16, and L31. L15 alone carries a patent-published numerical anomalous-dispersion value.
4. Cosina's lens diagram reproduces Example 1's distinctive topology: three front positive menisci, a separate negative meniscus, a cemented positive-negative pair near the stop, one post-stop positive element, and one rear negative meniscus.
5. The patent design is entirely spherical and publishes whole-system extension for close focusing. Cosina documents an eight-element/seven-group production section and a manual helicoid, but does not explicitly identify the internal optical motion.
6. The application was filed on 2024-07-05, before Cosina's 2024-12-13 product announcement and 2025-01-23 release.

Marketing and design quantities remain separate. The production lens is identified as 90 mm f/2, while the data file stores a recomputed design focal length of 87.26494 mm and the patent's modeled F-number of 2.05. Cosina's 63.3 mm mechanical length is measured from the mount plane and is not interchangeable with the prescription's 60.39 mm first-to-last optical-surface track.

## Optical Architecture

The design is an all-spherical, three-group positive-positive-negative system with the aperture stop between G1 and G2. It is best described by its published power distribution rather than assigned to a classical named form.

G1 contains six elements: three positive menisci, one negative meniscus, and the cemented L15/L16 doublet J1. The complete G1 subsystem is positive, with an in-situ focal length of +214.990565 mm. Within it, J1 is a negative cemented unit with a net focal length of -36.602764 mm and is placed immediately before the stop. This local negative power near the stop is the patent's central architectural feature.

G2 is the single biconvex L21 element. Its standalone and group focal length is +44.257819 mm. G3 is the single rear negative meniscus L31 with a focal length of -77.161259 mm. The combined G2+G3 subsystem remains positive at +78.885192 mm, satisfying the patent's requirement that its focal length remain near that of the complete lens.

The complete prescription has a recomputed EFL of 87.264936 mm. Its first-surface-to-image length at the published infinity plane is 87.78997 mm, giving `TL/EFL = 1.0060`; it therefore does not meet the stated structural criterion `TL/EFL < 1` for a telephoto lens. Its infinity BFD is 27.382603 mm, also far below the EFL, so it is not retrofocus. “Medium telephoto” is appropriate only as a focal-length class.

The patent contains no aspherical surfaces, folded paths, filters, cover plates, or inactive optical planes. The model consequently contains exactly one stop and only the active refractive surfaces of Example 1.

## Element-by-Element Analysis

### L11 — Positive Meniscus, Convex to Object

**nd = 1.60311, νd = 60.69. Glass: BACD14 / J-SK14 / K-SK14 class (603607; vendor unresolved). Standalone f = +173.870249 mm.**

L11 is the front positive collector and the first contributor to the entrance-pupil geometry. Its moderate positive power begins the broad converging action of G1 without concentrating the full refractive burden at the first surface. The patent requires the object-side surfaces of the positive lenses in G1 to be convex, a condition followed by L11, L12, and L13 (¶0050–0051). Cosina's production diagram marks the corresponding first element as abnormal-partial-dispersion glass; the data mapping is therefore source-based, although no per-element line indices are available.

### L12 — Positive Meniscus, Convex to Object

**nd = 1.49700, νd = 81.61. Glass: FCD1 / N-PK52A / H-FK61 class (497816; vendor unresolved). Standalone f = +99.997912 mm.**

L12 is the first high-Abbe positive element. Its approximately +100 mm standalone focal length gives it materially greater positive power than L11 while keeping that power in a low-dispersion crown class. Cosina's production diagram marks the corresponding second element as abnormal-partial-dispersion glass; the assignment is mapped from the matching topology rather than from patent-published line indices.

### L13 — Positive Meniscus, Convex to Object

**nd = 1.49700, νd = 81.61. Glass: FCD1 / N-PK52A / H-FK61 class (497816; vendor unresolved). Standalone f = +90.127289 mm.**

L13 repeats the L12 glass pair with slightly stronger positive power. Together, L12 and L13 carry a substantial portion of G1's convergence in high-Abbe material before the negative correction section. Cosina's production diagram marks L13's corresponding position as abnormal-partial-dispersion glass. The present model still lacks the complete line-index data required to reproduce secondary spectrum quantitatively.

### L14 — Negative Meniscus, Convex to Object

**nd = 1.68893, νd = 31.16. Glass: M-FD80 / J-SF8 / H-ZF10 class (689312; vendor unresolved). Standalone f = -125.236731 mm.**

L14 is a comparatively weak negative meniscus between the three front positive elements and J1. Its role is to redistribute power within G1 before the much stronger negative cemented doublet. Cosina's production diagram leaves the corresponding fourth element unmarked while identifying six other positions as abnormal-partial-dispersion glass, so the data file sets L14's APD flag to false.

### L15 — Biconvex Positive Member of J1

**nd = 1.92286, νd = 20.88. Glass: N-SF66 / E-FDS1 / H-ZF62 class (923209; vendor unresolved). Standalone f = +63.344277 mm.**

L15 is a high-index, high-dispersion positive element. It is the only element for which the patent directly publishes anomalous partial dispersion: `θgF = 0.639` and `ΔθgF = +0.0313`. The data file stores the deviation numerically as `dPgF = 0.0313`, using the data schema's `dPgF` field.

Its positive standalone power should not be confused with the action of the cemented pair. L15 is bonded to the much stronger negative L16, and the complete J1 doublet is negative. The patent places this negative doublet close to the stop and makes its glass relationship the subject of Conditions 1–4 (¶0030–0032, ¶0052).

### L16 — Biconcave Negative Member of J1

**nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA). Standalone f = -22.791322 mm.**

L16 supplies the dominant negative power of J1. At the cemented surface, the index changes directly from L15 to L16; this real refracting interface is retained in both the prescription and the Petzval calculation. The combined pair has a net focal length of -36.602764 mm, distinct from either element's standalone focal length and from G1's positive in-situ behavior. Cosina's production diagram marks both J1 members as abnormal-partial-dispersion glass.

Figure 2 of the patent prints `νdn = 26.74` for Example 1, but Table 1 and ¶0059 both give `29.74`. The data file uses 29.74 and records the conflicting figure value as a source error rather than silently reconciling it.

### L21 — Biconvex Positive G2 Element

**nd = 1.51823, νd = 58.82. Glass: J-K3 (HIKARI). Standalone f = +44.257819 mm.**

L21 is the positive post-stop relay element and the entirety of G2. The patent specifically requires the object-side face of the first G2 lens to be convex. It associates this form with a shorter back focus and improved control of sagittal and meridional coma (¶0019, ¶0053). Because G2 contains only L21, its standalone and in-situ group powers are identical.

### L31 — Negative Meniscus, Convex to Image

**nd = 1.43700, νd = 95.10. Glass: FCD100 / H-FK95 class (437951; vendor unresolved). Standalone f = -77.161259 mm.**

L31 forms the negative G3 group and places an exceptionally high-Abbe crown class in the rear negative position. The patent specifies an image-side convex rear face and associates that shape with maintaining peripheral illumination and reducing sensitivity to manufacturing error (¶0020, ¶0054). Its negative power modifies the positive L21 relay while leaving the combined G2+G3 subsystem positive. Cosina's production diagram marks this rear element as abnormal-partial-dispersion glass.

## Glass Identification and Selection

The glass labels follow the final data file. Vendor names are asserted only where the catalog comparison found a defensible exact current match; otherwise the data retains a six-digit code and a cross-vendor class label.

| Element(s) | Stored glass identification | nd / νd | Spectral status |
|---|---|---:|---|
| L11 | BACD14 / J-SK14 / K-SK14 class (603607; vendor unresolved) | 1.60311 / 60.69 | Production-diagram APD allocation; no line indices |
| L12, L13 | FCD1 / N-PK52A / H-FK61 class (497816; vendor unresolved) | 1.49700 / 81.61 | Production-diagram APD allocation; no authored line indices |
| L14 | M-FD80 / J-SF8 / H-ZF10 class (689312; vendor unresolved) | 1.68893 / 31.16 | Not marked APD in the production diagram |
| L15 | N-SF66 / E-FDS1 / H-ZF62 class (923209; vendor unresolved) | 1.92286 / 20.88 | Patent `dPgF = +0.0313` |
| L16 | NBFD29 (HOYA) | 1.77047 / 29.74 | Production-diagram APD allocation |
| L21 | J-K3 (HIKARI) | 1.51823 / 58.82 | Not marked APD in the production diagram |
| L31 | FCD100 / H-FK95 class (437951; vendor unresolved) | 1.43700 / 95.10 | Production-diagram APD allocation; no authored line indices |

The palette separates the main positive power into moderate- and high-Abbe crowns while introducing negative power through denser, more dispersive glasses. The unusual part is J1: the positive member has both higher index and lower Abbe number than the negative member, and it also has a directly positive anomalous-dispersion deviation. The patent presents that combination as the mechanism for reducing axial chromatic error without abandoning the spherical, compact construction.

Equal `nd`/`νd` pairs do not establish an actual supplier or melt. The class-level entries therefore remain deliberately non-exclusive. L16 and L21 are the only elements assigned single-vendor names in the data file, based on the exact catalog matches recorded in the accompanying glass audit.

## Focus Mechanism

The focus status is **PUBLISHED**. The patent states that the complete optical system moves toward the object for close focusing (¶0042, Claim 7). Example 1 supplies both conjugate states:

| State | Object to surface 1 | Surface 16 to image | Published magnification |
|---|---:|---:|---:|
| Infinity | Infinity | 27.39997 mm | 0 |
| Close | 800.00 mm | 38.36529 mm | 0.126 |

LensVisualizer uses a camera-fixed coordinate system. Unit focus is therefore represented by changing only the rear image-space gap from 27.39997 mm to 38.36529 mm. This 10.96532 mm increase is the coordinate equivalent of moving the complete optical assembly toward the object; it is not an internal rear-group movement.

The normalized object-to-image distance at the published close state is 898.75529 mm, consistent with the rounded 0.9 m production minimum-focus specification. Tracing the rounded prescription gives an exact close BFD of 38.344736 mm and `|β| = 0.125618990`; the small differences from 38.36529 mm and 0.126 are consistent with the source table's rounded radii, spacings, and indices. No internal or floating-focus reconstruction has been introduced.

## Chromatic Correction Strategy

Cosina identifies the production lens as APO-ULTRON and states that six of its eight elements use abnormal-partial-dispersion glass. The manufacturer's lens diagram identifies their positions: L11, L12, L13, L15, L16, and L31 when mapped onto the matching Example 1 topology. This supports the six APD flags in the data file but does not provide the per-element line indices needed to reproduce the complete production secondary spectrum.

The patent gives direct spectral support only for L15. Its `ΔθgF = +0.0313` is above the patent's threshold of 0.02, and its placement in the negative J1 doublet allows anomalous positive-glass behavior to be combined with the strong negative L16 member. The production diagram assigns the other APD positions to L11, L12, L13, L16, and L31; among these, L12, L13, and L31 also place high-Abbe glasses in major positive and rear-negative positions.

No `nC`, `nF`, or `ng` values are published for the elements. Accordingly, the analysis treats “APO” as the production name and Cosina's stated design objective, not as an independently reproduced three-wavelength result from this model. Quantitative chromatic claims are limited to the patent-published L15 partial-dispersion value and the stored glass data.

## Conditional Expressions

All six conditions are satisfied by the final prescription. Conditions 1–4 govern J1's glass pairing; Condition 5 governs the position of J1 within G1; Condition 6 constrains the combined G2+G3 power.

| Condition | Computed value | Requirement | Result |
|---|---:|---:|---|
| 1: `ndp` | 1.92286 | `> 1.85` | Pass |
| 2: `ΔθgF` | 0.0313177904 | `> 0.02` | Pass |
| 3: `ndp - ndn` | 0.15239 | `> 0` | Pass |
| 4: `νdn - νdp` | 8.86 | `> 0` | Pass |
| 5: `LB / Lf` | 0.798648649 | `> 0.6` | Pass |
| 6: `f23 / f` | 0.903973528 | `0.75 < value < 1.3` | Pass |

The direct table geometry gives `LB = 23.64 mm` and `Lf = 29.60 mm`; the patent's summary rounds these to 23.6 mm and 29.6 mm. The computed `f23 = 78.885192 mm` agrees with the patent's rounded 78.89 mm.

## Modeling Inferences and Source Corrections

The patent does not publish a physical stop diameter or clear semi-diameters. The model's stop semi-diameter of 11.423277 mm is inferred from the actual prescription's entrance-pupil geometry and the published F/2.05. The element semi-diameters are likewise modeling values constrained by the patent optical section, marginal and chief rays, the published 21.63 mm image height, and the production barrel envelope. Their front-to-rear 23.0 / 21.0 / 18.5 / 16.5 / 16.0 / 12.3 / 12.0 mm rim sequence follows the relative element heights in Figure 1. They are not presented as patent table values.

The inferred apertures retain positive edge thickness, remain within the applicable spherical rim-slope limits, and avoid shared-band intrusion across the air gaps. These geometry checks support the rendered model but do not establish production clear-aperture dimensions.

No uniform scaling was applied. No sensor cover glass, filter, dummy surface, flare-cutter plane, or mechanical part was published in the selected example, so none was omitted from an otherwise active sequential path. The source's `OBJ` and `IMG` entries are conjugate references rather than physical lens surfaces.

The only corrected patent value is L16's Abbe number: 29.74 is used because it appears in both Table 1 and ¶0059, while Figure 2's isolated 26.74 entry is retained as the rejected contradiction.

## Verification Summary

The load-bearing results were recomputed from the final TypeScript arrays using sequential height/reduced-angle tracing and an independent ABCD multiplication. The matrices agree to `7.105 × 10^-15`, with determinant 1.000000000000.

| Quantity | Computed from final data | Patent or marketed reference |
|---|---:|---:|
| Effective focal length | 87.264935508 mm | 87.28 mm patent; 90 mm marketed |
| Infinity back focal distance | 27.382602782 mm | 27.39997 mm patent |
| First-to-last surface track | 60.390000000 mm | 60.38 mm patent summary |
| Modeled F-number | 2.050000073 | F/2.05 patent; f/2 marketed |
| Normalized close-focus distance | 0.898755290 m | 0.9 m marketed |
| Exact close magnification magnitude | 0.125618990 | 0.126 patent |
| G2+G3 focal length | 78.885191608 mm | 78.89 mm patent |
| Petzval sum | +0.002358551156 mm^-1 | Computed surface by surface as `φ/(n·n′)` |

The source-level discrepancies are all within the precision expected from three-decimal radii and spacings, five-decimal indices, and separately rounded patent summary values.

## Sources

1. **JP 2026-8235 A**, “Imaging Lens,” Example 1, especially Table 1, Figure 2, and ¶0047–0062. Primary source PDF.
2. [Cosina, “APO-ULTRON 90mm F2” product page](https://www.cosina.co.jp/voigtlander/en/vm-mount/apo-ultron-90mm-f2/).
3. [Cosina, “APO-ULTRON 90mm F2 VM Release Date Notice,” 2025-01-09](https://www.cosina.co.jp/news/%E3%83%95%E3%82%A9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BCapo-ultron-90mm-f2-vm-%E7%99%BA%E5%A3%B2%E6%97%A5%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/).
4. [Cosina, APO-ULTRON 90mm F2 VM instruction manual, Version 1.0](https://www.cosina.co.jp/wp-content/uploads/2025/01/VM-90_20-JPN-V1_0.pdf).
5. Official glass sources: [HOYA Glass Cross Reference Index](https://www.hoyaoptics.eu/glass-cross-reference-index); [OHARA Glass Catalog](https://oharacorp.com/glass-catalog/); [HIKARI Optical Glass Catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx); [SUMITA Optical Glass Data Book](https://www.sumita-opt.co.jp/download_files/ja/data/glassdatabook_ver14.01.00.pdf); SCHOTT datasheets for [N-PK52A](https://media.schott.com/api/public/content/a2a92fcce8144b9eaa7f5dcd2666d258?v=09326c27) and [N-SF66](https://media.schott.com/api/public/content/c2e0c3a77dcb4c94b349424ee621ee32?v=3320661c); and the [CDGM H-ZF62 data sheet](https://www.cdgmgd.com/webapp/pdf/H-ZF62.pdf).
