# CARL ZEISS JENA FLEKTOGON 50mm f/4

## Patent Reference and Design Identification

**Patent:** DE 1 157 000  
**Filed:** 19 March 1960  
**Published:** 7 November 1963  
**Inventors:** Wolf Dannberg; Eberhard Dietzsch  
**Applicant:** Jenoptik Jena G.m.b.H.  
**Title:** *Weitwinkelobjektiv für photographische Zwecke*  
**Embodiment analyzed:** Claim 8 / Example 1 / Fig. 1

The implemented prescription is derived from the first numerical construction in DE 1 157 000. The patent's numerical table gives an opening ratio of 1:4 at a normalized focal length of 100, eleven refracting radii, the corresponding axial spacings and d-line glass coordinates, and the focal lengths of the four source-defined members I, IIa, IIb, and IIc. Fig. 1 identifies the physical sequence as a cemented front doublet followed, after a long air space, by a positive singlet, a positive meniscus, and a cemented rear triplet. [1, p. 2, Claim 8; p. 4, Fig. 1]

The production correlation is strong but remains an inference rather than a manufacturer-confirmed patent attribution. A Pentacon/Carl Zeiss Jena catalog identifies a **ZEISS FLEKTOGON 4/50** for PENTACON six TL and PRAKTISIX, describes it as a seven-element lens, and gives a 78° used image angle and 0.50 m shortest focusing distance. Those product facts converge with the patent's seven-element f/4 wide-angle construction, while a uniform scale of 0.5 converts the patent's normalized 100 mm design to approximately 50 mm without changing its dimensionless architecture or f-number. No primary source located for this dossier explicitly states that the production Flektogon 4/50 uses DE 1 157 000 Example 1. [1, pp. 1-2] [2, product panel on PDF p. 6]

The LensVisualizer model therefore keeps marketing and design quantities separate. The production identity is 50 mm f/4; the final scaled prescription computes an effective focal length of 49.999544 mm. The data file uses the canonical `6x6` image-format identifier because the manufacturer catalog names the Pentacon Six TL / Praktisix systems, but it deliberately omits a mount identifier because the supplied taxonomy reference contains no Pentacon Six / Praktisix mount ID.

## Optical Architecture

The design is a seven-element, four-group, all-spherical retrofocus wide-angle lens. The front part **I** is a cemented positive/negative doublet whose net focal length is -69.4208 mm in the scaled model. It is separated by a 38.11 mm air space from the rear collecting system. The rear system consists of three positive source-defined members: **IIa**, a positive singlet at +61.5238 mm; **IIb**, a weak positive meniscus at +344.3652 mm; and **IIc**, a cemented negative/positive/positive triplet with a net focal length of +179.4846 mm. When IIa, IIb, and IIc are treated together in isolation with their internal air gaps retained, the rear collecting assembly has a computed focal length of +46.3591 mm.

This front-negative / rear-positive separation is the architectural feature emphasized by the patent. Claim 1 requires the air space between the diverging front part and the collecting part to exceed half the objective focal length, while the complete construction must combine a back focal distance greater than 1.2 times focal length with a construction length below 1.8 times focal length. [1, p. 2, Claim 1]

The final scaled model reproduces that retrofocus relation. Its paraxial EFL is 49.999544 mm, its rear-vertex BFD is 61.662962 mm, and the first-to-last refracting-vertex construction length is 80.860 mm. Thus BFD/EFL = 1.23327, satisfying the project's retrofocus criterion `BFD > EFL`, while TL/EFL = 1.61721, so the design is not telephoto under the project's `TL/EFL < 1` definition.

The prescription has no aspherical surfaces, diffractive phase surfaces, rear cover plate, filter plate, or dummy optical plane. The only non-source optical plane in the implemented sequence is the modeled aperture stop described below.

## Element-by-Element Analysis

The focal lengths in this section are **standalone element focal lengths in air**, computed from the final scaled data. They are not in-situ powers and should not be confused with the focal lengths of the cemented source members.

### L1 - Biconvex Positive

**nd = 1.69806, νd = 53.6. Glass: 698536 class (supplier unresolved). f = +102.957 mm.**

L1 is the positive front component of the cemented diverging member I. Its positive standalone power is more than offset by L2, so the complete front member remains negative. Claim 5 specifically requires the refractive index of the positive front lens to exceed that of the negative lens by at least 0.1; the final prescription satisfies that scale-invariant condition. [1, p. 2, Claim 5]

The patent does not name a glass supplier or trade glass for this coordinate. The class label therefore preserves the published d-line coordinate rather than assigning a modern catalog identity.

### L2 - Biconcave Negative

**nd = 1.54212, νd = 59.6. Glass: 542596 class (supplier unresolved). f = -39.646 mm.**

L2 provides the dominant negative standalone power in member I. L1 and L2 are cemented at source surface r2; Claim 6 requires that cemented interface to have converging power, a condition satisfied by the retained radius and index step. [1, p. 2, Claim 6]

The published value `nd = 1.54212` is retained as d-line data because the patent table explicitly labels the index column `n_d`. Although the same number happens to coincide with the modern SCHOTT N-BAK2 e-line index, that coincidence is not evidence for an e-line reinterpretation or for N-BAK2 identity. [1, p. 2, numerical table] [3]

### L3 - Biconvex Positive

**nd = 1.68169, νd = 41.9. Glass: 682419 class (supplier unresolved). f = +61.524 mm.**

L3 forms member IIa, the first collecting member behind the long front-to-rear air space. Claim 7 specifies that this first collecting member is a single lens, which matches Fig. 1 and the final seven-element model. [1, p. 2, Claim 7; p. 4, Fig. 1]

Its standalone focal length is also the computed focal length of IIa because the source member consists of L3 alone. No specific aberration contribution is assigned beyond the role established by the patent's collecting-member architecture.

### L4 - Positive Meniscus

**nd = 1.68169, νd = 41.9. Glass: 682419 class (supplier unresolved). f = +344.365 mm.**

L4 is member IIb, the weak positive meniscus between IIa and the rear cemented triplet. The two bounding radii are equal in magnitude and sign in the selected example after scaling, while the finite thickness leaves the member with weak positive net power. Claim 3 constrains this meniscus through the difference and sum of its radii and through its center thickness; the selected numerical example satisfies those conditions. [1, p. 2, Claim 3]

The patent uses the same d-line glass coordinate for L3 and L4. The data therefore retains the same unresolved 682419 class label for both rather than inventing distinct glass identities.

### L5 - Biconcave Negative

**nd = 1.67254, νd = 32.2. Glass: 673322 / SF5-class (supplier unresolved). f = -18.859 mm.**

L5 is the strongly negative front component of the cemented rear triplet IIc. Its coordinate lies very close to the historical 673322 / SF5 class: modern SCHOTT SF5, HIKARI J-SF5, CDGM H-ZF2, and SUMITA SF5 catalog coordinates all lie near the patent pair. That convergence supports the class description, but it does not establish which supplier or melt was used in the patent or production lens. [4] [5] [6] [7]

Within IIc, L5's strong negative standalone power is balanced by the two following positive elements. The resulting cemented triplet remains positive overall at +179.4846 mm rather than inheriting the sign or magnitude of any one component.

### L6 - Positive Meniscus

**nd = 1.50040, νd = 65.2. Glass: BK4 coordinate-compatible catalog proxy (historical supplier unproven). f = +46.129 mm.**

L6 is the lower-index middle lens of the cemented triplet. Claim 4 requires each outer lens of the triplet to have an index at least 0.12 greater than that of the middle lens; the final d-line coordinates satisfy that relationship. [1, p. 2, Claim 4]

The patent provides only `nd` and `νd`, so the relatively high Abbe number cannot by itself establish anomalous partial dispersion, apochromatic correction, or a modern ED-glass identity. The model therefore carries no `nC`, `nF`, `ng`, or `dPgF` fields for L6.

### L7 - Biconvex Positive

**nd = 1.68078, νd = 47.2. Glass: 681472 class (supplier unresolved). f = +29.865 mm.**

L7 is the positive rear element of triplet IIc. It completes the patent's outer-high-index / middle-lower-index triplet arrangement. Together with L5 and L6 it forms one cemented group, so its standalone +29.865 mm focal length should not be interpreted as the effective power of the rear group in the complete lens.

The rear surface of L7 is also the last refracting surface in the model. The scaled source image-space distance authored after that surface is 61.665 mm; the independently recomputed paraxial rear-vertex BFD is 61.662962 mm, with the small difference arising from the precision of the published source values.

## Glass Identification and Selection

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.69806 / 53.6 (d) | Unresolved; patent-coordinate fallback |
| L2 | 1.54212 / 59.6 (d) | Unresolved; patent-coordinate fallback |
| L3 | 1.68169 / 41.9 (d) | Unresolved; patent-coordinate fallback |
| L4 | 1.68169 / 41.9 (d) | Unresolved; patent-coordinate fallback |
| L5 | 1.67254 / 32.2 (d) | SF5 |
| L6 | 1.5004 / 65.2 (d) | BK4 |
| L7 | 1.68078 / 47.2 (d) | Unresolved; patent-coordinate fallback |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

DE 1 157 000 Example 1 publishes one static prescription only. It gives no finite-distance spacing table, moving-group identity, or mechanical focusing description. The final model therefore has **NO_INTERNAL_RECONSTRUCTION**: `var` and `varLabels` are empty, and no internal group motion is synthesized.

The manufacturer catalog gives a shortest focusing distance of 0.50 m for the production Flektogon 4/50. That number is retained as `closeFocusM` metadata, but it is not sufficient to solve a unique internal focus law and is not used to generate a close-focus optical state. [2]

## Modeling and Verification Notes

The patent construction is normalized to `f = 100`. The implemented prescription applies a uniform scale factor **s = 0.5** to every source radius, axial spacing, and image-plane distance. Indices and Abbe numbers are unchanged. Because the design is entirely spherical, no aspheric coefficient scaling is required.

The patent publishes f/4 but no physical diaphragm position or diameter, and Fig. 1 does not draw a stop. The LensVisualizer model therefore inserts exactly one optically neutral `STO` at the midpoint of the scaled `l3` gap between source surfaces r7 and r8. The stop lies 67.97 mm behind the first refracting vertex and has a modeled semi-diameter of 7.571982 mm. Its size was calibrated so the computed entrance pupil semi-diameter is 6.249943 mm and the 49.999544 mm EFL gives modeled f/4. This agreement is a calibration result, not independent evidence for the production diaphragm diameter or exact physical stop location.

The isolated rear meniscus (surfaces 6/7) now uses 15.5 mm rims, matching the approximately 15.6 mm optical edge in Fig. 1.

The patent also publishes no clear semi-diameters. All surface semi-diameters in the data file are modeled values. Portable geometry checks on the final parsed data retain positive shared-band edge thicknesses, keep spherical rim slopes below the current 64.2° limit, and satisfy the conservative shared-gap intrusion checks. The SDs were subsequently reviewed against the exact local patent figure.

Exact spherical meridional sampling was performed at half-field angles 0°, 23.4°, 35.1°, 37°, and 39° using nine stop-pupil fractions from -0.95 to +0.95. Every sampled ray clears the modeled prescription through 37°. At 39°—the half angle corresponding to the manufacturer's 78° full-field figure—the outer sampling is not fully clear: one extreme ray is intrinsically unavailable and the opposite extreme clips at surface 10. The 78° value is therefore retained as a manufacturer-published coverage fact rather than presented as independently reproduced full-aperture clearance by this modeled semi-diameter set. [2]

The surface-by-surface Petzval sum of the scaled prescription is +0.0020096603 mm⁻¹, computed as `φ/(n·n′)` at each refracting surface. This is a first-order curvature quantity; it is not presented as a measured or fully traced field-curvature result.

## Patent Conditions and Verification

The patent's principal numerical and structural conditions were checked against the selected example and, where scale-invariant, against the final half-scale model. [1, pp. 1-2, Claims 1-7]

| Patent condition | Verified disposition |
|---|---|
| Claim 1: full image angle at least 75° | Source condition retained; not independently proven from the numerical example because source clear apertures and a complete field reference are absent. Manufacturer catalog separately states 78°. |
| Claim 1: BFD > 1.2f | Pass; final BFD/EFL = 1.23327. |
| Claim 1: construction length < 1.8f | Pass; final TL/EFL = 1.61721. |
| Claim 1: front-to-rear air gap > 0.5f | Pass. |
| Claim 1: front part negative, collecting members positive and longer in focal length than the complete objective | Pass. |
| Claim 2: IIb and IIc focal lengths at least 3f | Pass. |
| Claim 2: IIb and IIc thicknesses each at least twice their intervening air gap | Pass. |
| Claim 3: IIb meniscus radius-difference and thickness conditions | Pass. |
| Claim 4: rear cemented triplet with each outer-lens index at least 0.12 above the middle lens | Pass. |
| Claim 5: positive front lens index at least 0.1 above negative front lens | Pass. |
| Claim 6: cemented interface in the diverging front part has converging power | Pass. |
| Claim 7: first collecting member IIa is a singlet | Pass. |

The field-angle condition is deliberately treated differently from the other conditions. The patent asserts at least 75°, and the production catalog gives 78°, but neither assertion supplies the missing clear-aperture data needed to infer exact wide-open clearance for every pupil coordinate from the numerical prescription alone.

## Sources / References

1. **Deutsches Patentamt, DE 1 157 000**, *Weitwinkelobjektiv für photographische Zwecke*. Filed 19 March 1960; Auslegeschrift published 7 November 1963. Front-page identity and inventors: PDF p. 1. Claims and Example 1 / Claim 8 numerical construction: PDF p. 2 (printed pp. 3-4). Second numerical construction: PDF p. 3. Optical sections: PDF p. 4, Figs. 1-2.
2. **Pentacon / Carl Zeiss Jena photographic lens catalog**, product panel “ZEISS FLEKTOGON 4/50 für PENTACON six TL und PRAKTISIX,” PDF p. 6. Manufacturer-origin catalog scan hosted at: https://allphotolenses.com/public/files/pdfs/61ff8e81ae6c194e951ef186ba3c4e95.pdf
3. **SCHOTT Advanced Optics, N-BAK2**: https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/N-BAK2/c/glass-N-BAK2
4. **SCHOTT Advanced Optics, SF5**, optical-glass collection datasheets: https://www.schott.com/shop/medias/schott-optical-glass-collection-datasheets-english-march2018.pdf
5. **HIKARI / Nikon, J-series SF optical glass**, including J-SF5: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sf.html
6. **CDGM, H-ZF2 673322 data sheet**: https://www.cdgmgd.com/accessory/2021-09-01/client/www.cdgmgd.com/006fb98b-22a8-479f-9aab-93b958af435f.pdf
7. **SUMITA Optical Glass, Zemax AGF catalog**, including SF5 / 673322: https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
8. **OHARA, optical-glass catalog index**, used in the coordinate-class audit: https://www.ohara-inc.co.jp/en/product/catalog/
9. **HOYA, optical-glass data downloads**, used in the coordinate-class audit: https://www.hoya-opticalworld.com/english/datadownload/index.html
