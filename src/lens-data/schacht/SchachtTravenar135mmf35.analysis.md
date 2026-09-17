## Patent Reference and Design Identification

**Patent:** DE 843 305  
**Priority:** 24 November 1948 (Switzerland)  
**Filed:** 15 November 1949 (Germany)  
**Grant announced:** 15 May 1952  
**Issued:** 15 September 1952  
**Inventor:** Ludwig Bertele  
**Applicant / patent holder:** Ludwig Bertele  
**Title:** *Objektiv, bestehend aus vier luftraumgetrennten Gliedern*  
**Embodiment analyzed:** Example 2, Fig. 2

The second standalone Ludwig Bertele line on the 1952 title page occupies the patent-holder/applicant position used by
contemporary Deutsches Patentamt Patentschrift title pages; official DPMA examples show the same position occupied by a
corporate patent holder. Ludwig Bertele is therefore recorded here as the individual applicant/patent holder. [10]
The catalog reserves `patentAssignees` for organizations, so that array is empty and Bertele remains credited in
`patentAuthors`. Schacht is the correlated production maker; the patent does not name Schacht as an assignee or
document a licensing arrangement.

DE 843 305 describes a four-element objective in which all four lenses are separated by air. The first two lenses are
converging, the third is diverging, and the fourth is converging. Example 2 is published at a nominal focal length of
100 mm and an aperture ratio of 1:3.5. The present model preserves that example and applies a uniform 1.35× dimensional
scale to correlate it with the 135 mm production lens; refractive indices and Abbe numbers are unchanged. [1]

The production identification is a strong circumstantial correlation rather than a manufacturer-confirmed patent match.
The evidence converges in several ways:

1. The patent embodiment and the period Schacht product are both four-element f/3.5 objectives. [1][2]
2. Scaling the patent's 100 mm normalization by 1.35 gives the marketed 135 mm focal-length class without changing the
   optical form. The final scaled prescription computes to an EFL of 135.3482 mm, while the product designation remains
   135 mm.
3. A January 1958 Ihagee price list identifies the Schacht Ulm Travenar 1:3.5/135 as a four-element lens with an 18°
   image angle. [2] The modeled 36×24 mm full diagonal paraxial field is 18.162°.
4. A Deutsches Kameramuseum record documents an A. Schacht Ulm Travenar 1:3.5/135 on a 24×36 mm Exakta Varex IIa and
   identifies the Exakta bayonet, supporting the modeled `135-full-frame` format and `exakta` mount metadata. [4]

The patent itself does not name Schacht or Travenar, and no accessed Schacht primary document explicitly states that
DE 843 305 Example 2 became the production Travenar 135 mm f/3.5. The patent describes the design class as covering
approximately ±10° on page 1 and later summarizes the examples as having an image field of about 20–25°, supporting a
full-field interpretation for that latter range. The 18° period product listing is therefore close but not an exact
patent field match. These limits prevent the correlation from being treated as manufacturer confirmation. [1][2][3]

## Optical Architecture

The final model is a four-element, four-group, all-spherical telephoto objective with a positive-positive-negative-positive
power sequence. Each physical element is a meniscus, and all four elements are air separated. The design contains no
cemented interfaces, aspheres, diffractive surfaces, rear cover plates, filters, or inactive dummy planes. [1]

At the implemented infinity state, the Gaussian EFL is 135.3482 mm. The first-to-image-plane total track is 129.0835 mm,
so `TL/EFL = 0.953714`; under the project definition this is a telephoto configuration. The BFD from the last refracting
vertex is 69.4540 mm, giving `BFD/EFL = 0.513151`, so the system is not retrofocus. These quantities are computed from the
final scaled data revision, not inferred from the marketing designation.

The strongest standalone negative power belongs to L3, while L1, L2, and L4 are positive. This does not by itself assign
specific aberration corrections to those elements; it describes the verified first-order power distribution. The large
air space after L3 separates the front three elements from the final positive meniscus. Because the patent does not
identify an iris, the model uses this long internal gap for its explicitly inferred stop plane. [1]

The patent does not publish a stop position or diameter. The LensVisualizer model therefore places one flat `STO` at the
midpoint of the scaled L3–L4 air space, 41.0805 mm behind the first vertex. Its 11.38994 mm semi-diameter is calibrated
through the front-group paraxial pupil mapping to reproduce f/3.5. The resulting f-number agreement is a calibration
constraint, not independent evidence for the manufactured diaphragm geometry.

The patent likewise publishes no clear apertures. Surface semi-diameters in the data file are modeled from exact 2D
meridional spherical-ray containment at 0.6× the 135-format diagonal half-field, followed by a defined clearance margin.
The rear-element rims were subsequently enlarged from 11.03/11.02 mm to 15.5/15.5 mm to follow the optical outline
on patent p. 4, Fig. 2. They are visualization and tracing geometry, not claimed production mechanical dimensions.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.5516, νd = 62.6. Glass: N-PSK3 spectral proxy (supplier unconfirmed). f = +122.3404 mm.**

L1 is the front collecting element. Both radii are positive in the patent convention, and the front curvature is much
stronger than the rear curvature, producing the verified positive standalone power. The patent requires the combined
d-line indices of L1 and L2 to exceed 3.100; Example 2 gives 3.172. [1]

SCHOTT N-PSK3 supplies a coordinate-compatible spectral proxy: its published nd = 1.55232 and νd = 63.46
are within the catalog compatibility limits of the patent pair. Its sourced Sellmeier curve does not identify the
historical supplier or melt, and the patent's nd/νd remain unchanged. [6]

### L2 — Positive Meniscus

**nd = 1.6204, νd = 60.3. Glass: 620603 — dense crown class (supplier unresolved). f = +110.6030 mm.**

L2 is the second collecting meniscus and is more strongly curved than L1. The patent specifically describes the second
lens as bent toward the object side. In the selected numerical example, its two positive radii preserve that geometry
under the source sign convention. [1]

The `620603` label is a coordinate-class identification, not a historical supplier assignment. Modern catalog glasses
exist very close to the patent's nd/νd pair, including SCHOTT N-SK16, but the patent gives no manufacturer or melt name.
The model therefore keeps the six-digit class and the source nd/νd values while allowing a compatible catalog curve to approximate spectral behavior. [7]

### L3 — Negative Meniscus

**nd = 1.7215, νd = 29.3. Glass: S-TIH18 spectral proxy (supplier unconfirmed). f = −47.4241 mm.**

L3 is the sole standalone negative element and has the largest absolute standalone power of the four elements. Its rear
surface is much more strongly curved than its front surface, which gives the element negative power despite both patent
radii carrying positive signs. This sign pattern agrees with the patent's explicit description of the third lens as
diverging. [1]

The catalog audit found a very close modern coordinate match to OHARA S-TIH18, but the patent predates the current
S-prefix nomenclature and names no glass supplier. The data file therefore names S-TIH18 as a spectral proxy without asserting that it was the historical melt. [8]

### L4 — Positive Meniscus

**nd = 1.7470, νd = 34.9. Glass: LAFN7 spectral proxy (supplier unconfirmed). f = +149.7418 mm.**

L4 is the rear positive meniscus, separated from L3 by the largest air space in the prescription. The patent independently
constrains the fourth lens to νd < 45.0; Example 2 gives 34.9 and therefore satisfies that condition. [1]

SCHOTT LAFN7 provides a qualified spectral proxy at nd = 1.74950 and νd = 34.95. The index residual of
+0.00250 is inside, but near the edge of, the existing ±0.003 compatibility limit. This is an approximate spectral
model, not an exact melt identification; no catalog line indices are copied into the prescription. [11]

## Glass Identification / Selection

The prescription is natively specified only by d-line refractive index and νd. The patent does not identify a glass
manufacturer, and it publishes no nC, nF, ng, or anomalous-partial-dispersion quantity. The glass strings in the data file
therefore express coordinate classes or explicit unresolved status, not supplier attribution.

| Element | Patent nd | Patent νd | Authored glass label | Status |
|---|---:|---:|---|---|
| L1 | 1.5516 | 62.6 | N-PSK3 spectral proxy (supplier unconfirmed) | Compatible modern spectral proxy; historical identity unresolved |
| L2 | 1.6204 | 60.3 | 620603 — dense crown class (supplier unresolved) | Strong coordinate-class match |
| L3 | 1.7215 | 29.3 | S-TIH18 spectral proxy (supplier unconfirmed) | Strong coordinate-class match; supplier unresolved |
| L4 | 1.7470 | 34.9 | LAFN7 spectral proxy (supplier unconfirmed) | Approximate compatible proxy; historical family unresolved |

The patent's explicit glass-related conditions are limited and should not be expanded into unsupported claims about
apochromatic correction or anomalous dispersion. In particular, the design requires `n1 + n2 > 3.100` and `ν4 < 45.0`;
Example 2 satisfies both. [1] Because the model has only nd/νd data and unresolved historical glass identities, no APO or
partial-dispersion performance claim is warranted.

## Focus Mechanism

The implemented focus status is `NO_INTERNAL_RECONSTRUCTION`. DE 843 305 Example 2 supplies no finite-focus prescription,
no variable spacing table, and no internal movement law. The final data therefore has an empty `var` object and represents
the verified infinity optical state only. [1]

A secondary archival source gives approximately 1.5 m close focus for the production Travenar. [5] The data schema
requires `closeFocusM`, so 1.5 m is retained as product metadata, but it is not used to solve or invent any finite-focus
optical motion. Manufacturer-era material confirms manual focusing but does not determine a unique internal optical law.
[3][4]

## Conditional Expressions

DE 843 305 defines the claimed four-element form with several numerical and geometric restrictions. Recalculation from
Example 2 gives:

| Patent condition | Example 2 result | Disposition |
|---|---:|---|
| `n1 + n2 > 3.100` | 3.172 | Satisfied |
| Air space between L2 and L3 has the specified object-bent collecting-lens form | Source radii and Fig. 2 are consistent | Satisfied |
| `0.11 < (d2 + l2 + d3) / f < 0.18` | 0.1499 | Satisfied |
| `ν4 < 45.0` | 34.9 | Satisfied |

The patent also prints `d2 + l2 + d3 = 0.157 f` immediately below the Example 2 table. Direct arithmetic from that same
table gives `(6.64 + 4.64 + 3.71) / 100 = 0.1499`, a discrepancy of −0.0071 f. The selected table values are preserved
unchanged. The analogous summary lines in Examples 1, 3, and 4 agree with their own tables after rounding, so the 0.157 f
line is treated as an isolated source inconsistency rather than as a reason to alter Example 2. The governing inequality
still passes. [1]

## Verification Summary

The implemented prescription was recomputed from its authored values rather than from a separate hard-coded copy. Sequential
height/reduced-angle tracing and an independently implemented ABCD calculation agree on the first-order system matrix.
The model gives EFL 135.3482 mm, BFD 69.4540 mm, and a surface-by-surface Petzval sum of +0.00133028 mm⁻¹ at the
implemented infinity state.

The inferred stop and modeled semi-diameters were also checked for positive element edge thickness, actual spherical rim
slope, shared-gap sag intrusion, and exact meridional off-axis containment. These checks establish internal consistency of
the modeled geometry; they do not convert the inferred apertures into measured production dimensions.

## Sources / References

1. Deutsches Patentamt, **DE 843 305**, *Objektiv, bestehend aus vier luftraumgetrennten Gliedern*, Ludwig Bertele,
   issued 15 September 1952. Prescription: p. 2, “2. Beispiel (Fig. 2)”; optical section: p. 4, Fig. 2; claim conditions:
   pp. 1 and 3.
2. Ihagee, **Price List, January 1958**, listing Schacht Ulm Travenar 1:3.5/135, four elements, 18° image angle.
   https://www.ihagee.org/Prices/PLD146-Ihagee5801.pdf
3. Albert Schacht, **Lens programme / operating instructions (English, 1970)**, manufacturer-era instructions archived
   by Ihagee. https://ihagee.org/EAD/EAD196-OperatingInstructions1970v1.pdf
4. Deutsches Kameramuseum, **Ihagee Exakta Varex IIa (mit “Köhler”-Sucher)**, documenting A. Schacht Ulm Travenar
   1:3.5/135 on 24×36 mm 135 film with Exakta bayonet.
   https://kameramuseum.de/objekte/ihagee-exakta-varex-iia-mit-koehler-sucher/
5. PhotoButMore, **Schacht-Objektive aus München und Ulm in Exakta-Fassung**, archival secondary source for production
   chronology and approximately 1.5 m close focus. https://photobutmore.de/exakta/schacht/
6. SCHOTT, **N-PSK3 Optical Glass Datasheet**.
   https://media.schott.com/api/public/content/d2ffcfdb186243899d40a9454e3b88a4?v=9a79cc5b
7. SCHOTT, **N-SK16 Optical Glass Datasheet**.
   https://media.schott.com/api/public/content/5e904e6952b54f05be70518c4b669395?v=47550206
8. OHARA, **Glass Type — Current Optical Glass Table**, including S-TIH18.
   https://www.ohara-inc.co.jp/en/product/01000/
9. SCHOTT, **N-LAF7 Optical Glass Datasheet**.
   https://media.schott.com/api/public/content/dc661ae333e44a2dbff51046bafcba51?v=54772a85
10. Deutsches Patent- und Markenamt, **Patentschrift Nr. 854 157** (1952) and DPMA historical patent-title-page context,
    showing the post-inventor line used for the patent holder/applicant on contemporary Deutsches Patentamt title pages.
    https://www.dpma.de/docs/postergalerieneu/patentschriften/029knautschzone-belabarenyi.pdf

11. SCHOTT, **LAFN7 Optical Glass Datasheet**. https://media.schott.com/api/public/content/c842d31345bc40ae86b67732d6eb4eea?v=02357659
