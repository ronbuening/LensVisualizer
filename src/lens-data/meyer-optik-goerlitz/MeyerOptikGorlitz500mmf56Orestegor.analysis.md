## Patent Reference and Design Identification

**Patent:** DE 1 980 417 — the supplied German utility-model scan prints “Nr. 1 980 417” / “Gbm 1 980 417” and does not print a modern kind-code suffix
**Filed:** 2 September 1963 application letter; received by the Deutsche Patentamt 16 September 1963
**Registered:** 7 February 1968
**Published notice:** 7 March 1968
**Applicant:** VEB Feinoptisches Werk Görlitz
**Title:** *Photographisches Tele-Objektiv*
**Embodiment analyzed:** Example 1 / *Zahlenbeispiel*, uniformly scaled 5× in the LensVisualizer production-correlation model

The selected prescription source is the supplied nine-page German utility-model record. The patent’s general design statement targets a 60 × 60 mm format with a 10° image angle, while the worked numerical example is a normalized prescription at $f' = 100\,\mathrm{mm}$, f/5.6, and 10°. Those statements are not dimensionally literal at the example’s native length scale: a 60 × 60 mm diagonal cannot subtend only 10° at 100 mm focal length. The final model therefore treats the numerical table as a normalized similarity prescription and applies a uniform 5× scale for the 500 mm production correlation. The numerical prescription appears on PDF page 5 (printed page 3), is repeated in claim 3 on PDF page 8, and is illustrated by the optical section on PDF page 9. The patent defines refractive index at the helium d line, 587.6 nm. [DE 1 980 417, PDF pp. 3–9.]

The supplied DE scan does not identify an individual inventor in the pages available here. PDF page 2 says an inventor designation was attached to the filing, but that attachment is absent from the nine-page scan. Accordingly, the structured `patentAuthors` field is left empty rather than populated from a later secondary attribution. Historical research does associate the design with Otto-Wilhelm Lohberg and Wolfgang Hecking: PHOTODeal III/2013 attributes GDR Patentschrift 30118 to them, and later optical-history sources connect DD 30118 with the Orestegor 500/5.6. Those names are retained only as qualified historical context, not as inventor metadata read from the selected DE source.

The association with the production Meyer-Optik Görlitz Orestegor 5.6/500 is strong but is not treated as manufacturer-confirmed patent attribution. The correlation rests on several convergent facts:

1. The patent and period manufacturer literature both describe a four-lens telephoto.
2. Both give a maximum aperture of f/5.6.
3. The patent numerical example is normalized at 100 mm, while the marketed lens is 500 mm; a uniform 5× scale preserves all dimensionless prescription relationships.
4. At the 5× production scale, the patent’s 60 × 60 mm / 10° design target is consistent with the marketed 500 mm lens and period literature giving a 10° field on 60 × 60 mm.
5. The 1963 filing predates period production literature for the 500 mm lens.

The final data therefore keeps the marketed focal length, 500 mm, separate from the traced design EFL, 497.7868 mm. It uses the canonical 6×6 format and the currently supported Exakta, M42, and Praktina mount identifiers. Period literature also documents a Praktisix/Pentacon-Six adapter, but the supplied taxonomy has no corresponding identifier, so that production variant is not free-typed into the data.

## Optical Architecture

The design is a four-element, four-group, all-spherical telephoto. The patent divides it into a converging front main part and a diverging rear main part separated by a long air space. In source terminology, L I is biconvex and L II is a negative meniscus with its concave side toward the object; L III is plano-convex with its curved side toward the object, and L IV is biconcave. [DE 1 980 417, PDF p. 6 (printed p. 4) and optical section on PDF p. 9.]

In the implemented 5× model, the front L1+L2 main part has a positive in-air equivalent focal length of +431.728 mm, while the rear L3+L4 main part has a negative equivalent focal length of −408.509 mm. These are functional two-element group powers, not cemented-group powers; all four elements are air separated. The complete system’s EFL is 497.7868 mm.

The scaled source image track from the first lens vertex to the published image plane is 444.0 mm. Its ratio to the computed EFL is 0.89195, which satisfies the project definition of a telephoto system because $TL/EFL < 1$. The paraxial BFD from the last lens vertex is 90.9234 mm; the source-derived scaled image spacing remains 90.0 mm, preserving the rounding residual rather than altering the prescription to force agreement.

The patent’s arrangement is therefore not simply a long-focus lens placed far from the image plane. The positive front part and negative rear part, together with their wide axial separation, produce an effective focal length longer than the physical track to the source image plane. This statement concerns first-order layout only; it does not by itself assign individual aberration-correction duties to the elements.

## Element-by-Element Analysis

### L1 / L I — Biconvex Positive

**nd = 1.50977, νd = 61.9. Glass: Unmatched (510619 crown-class coordinate; supplier unresolved). f = +231.711 mm.**

L1 is the patent’s front biconvex element and the first component of the converging main part. Its standalone positive power is computed from the final scaled surfaces; it should not be confused with the net power of the complete front main part. The patent uses L1 together with the following negative meniscus rather than as an isolated singlet. [DE 1 980 417, PDF pp. 5–6 and p. 9.]

The glass coordinate is retained exactly at the patent’s d-line reference. No authoritative catalog match was strong enough to justify a historical vendor or melt assignment, so the final data deliberately uses an `Unmatched` class label.

### L2 / L II — Negative Meniscus

**nd = 1.74000, νd = 28.2. Glass: 740282 — dense-flint class (supplier unresolved). f = −472.638 mm.**

L2 is a negative meniscus with its concave side toward the object. The patent explicitly identifies L1 and L2 together as the converging front main part, despite L2’s negative standalone power. In the final model, their combined in-air group remains positive. [DE 1 980 417, PDF p. 6.]

The 1.74000 / 28.2 coordinate coincides with the 740282 dense-flint class represented by catalog glasses such as SCHOTT SF3. Because the patent names no glass supplier, the data keeps the class-level designation rather than converting coordinate equivalence into a historical supplier claim.

### L3 / L III — Plano-Convex

**nd = 1.61659, νd = 36.6. Glass: 617366 — F3/F4/PBM4 class (supplier unresolved). f = +178.401 mm.**

L3 is the positive component at the front of the patent’s rear main part. Its front face is convex toward the object and its rear face is plane. Although L3 has positive standalone power, the rear L3+L4 pair is negative as a group because the following biconcave element dominates their combined power. [DE 1 980 417, PDF pp. 5–6 and p. 9.]

The patent coordinate is consistent with the 617366 optical-glass class, including CDGM F3 and cross-referenced F4/PBM4-class equivalents. The authored label remains supplier-neutral.

### L4 / L IV — Biconcave Negative

**nd = 1.65844, νd = 50.8. Glass: 658509 dense-crown coordinate; N-SSK5 compatible spectral proxy (historical supplier/melt unresolved). f = −115.084 mm.**

L4 is the rear biconcave negative element and completes the diverging rear main part. It has the strongest negative standalone power of the four elements in the implemented scale. The distinction between this element power and the net rear-group power is important: the L3+L4 main part has an equivalent focal length of −408.509 mm after their spacing is included.

Current catalog families from several vendors occupy the same approximate 658509 coordinate region, while the patent prints νd only to one decimal place. That multiplicity is why the final data does not select a historical supplier. [DE 1 980 417, PDF p. 5; catalog review summarized below.]

## Glass Identification / Selection

The patent indices and Abbe numbers are retained unchanged. Catalog curves are coordinate-compatible spectral proxies, not identification of the historical supplier, composition, or melt. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` is copied into the prescription, and no anomalous-dispersion or APO claim is inferred from the match.

| Element | Patent/model nd / νd | Spectral model |
| --- | --- | --- |
| L1 | 1.50977 / 61.9 | Abbe fallback; identity unresolved |
| L2 | 1.74 / 28.2 | FD3 (qualified catalog proxy) |
| L3 | 1.61659 / 36.6 | F4 (qualified catalog proxy) |
| L4 | 1.65844 / 50.8 | N-SSK5 (qualified catalog proxy) |

L1 remains unresolved: BK1 and NSL7 bracket its Abbe number but neither identifies the 1.50977 / 61.9 historical coordinate. An exact-coordinate/catalog-source search found no defensible additional curve.

## Focus Mechanism

The patent supplies one fixed numerical prescription and no table of finite-conjugate focus spacings. Period manufacturer literature gives a closest-focus distance of 6.0 m, but it does not establish which optical group moves or provide enough constraints to reconstruct internal spacing changes.

The final model therefore uses `NO_INTERNAL_RECONSTRUCTION`. The 6.0 m value is retained only as production metadata (`closeFocusM`); `var` is empty, and no close-focus optical state, focus travel, breathing value, or internal movement law is claimed. This avoids converting a marketed minimum-focus distance into an underdetermined optical mechanism.

## Modeling Disclosures and Verification

The patent example is uniformly scaled by exactly 5×. All radii, element thicknesses, air gaps, and the source image-space distance are multiplied by five, while refractive indices and Abbe values are unchanged. There are no aspheres, so no conic or polynomial coefficient transform is applicable.

The patent publishes f/5.6 but does not publish an aperture-stop plane or diaphragm diameter. A historical Orestegor cutaway places the iris in the long central air space between the front and rear main parts. The final model therefore places its single `STO` at the exact midpoint of that scaled gap, 182.75 mm behind the first vertex. The modeled stop semi-diameter is 25.9232 mm and is calibrated so the computed entrance pupil gives f/5.6. The resulting f-number agreement is a calibration result, not independent evidence for the physical production diaphragm diameter.

Semi-diameters are unpublished modeling apertures. The exact local patent p. 9 shows rear optical rims near 29 mm at the model scale; L3/L4 now use 29 mm instead of 38 mm. Front apertures and the calibrated stop are retained. Leader lines are excluded from the measurement. These apertures do not certify unvignetted full-field production performance.

The surface-by-surface Petzval sum of the final model is −5.68585 × 10⁻⁵ mm⁻¹, corresponding to a paraxial Petzval radius of approximately −17.59 m. This is a first-order field-curvature quantity computed from $\phi/(n n')$ at each refracting surface; it is not a measured sharpness or image-quality result.

## Conditional Expressions

The patent states eight inequality checks, grouped in the source under its numbered conditions, governing back focal distance, the long intergroup gap, selected surface curvatures, the rear-glass index level, and total track. The final 5× prescription preserves all scale-invariant relationships and satisfies every condition when evaluated from the parsed final data.

| Patent condition | Final-model result |
| --- | --- |
| $s' < 0.19f'$ | PASS |
| $l_2 \le 0.61f'$ | PASS |
| $|r_4| > 2f'$ | PASS |
| $|r_4| < 5|r_3|$ | PASS |
| $|r_8| < |r_7|$ | PASS |
| $|r_5| < 0.3f'$ | PASS |
| $(n_3+n_4)/2 > 1.635$ | PASS |
| $\sum(d+l)+s' < 0.9f'$ | PASS |

The final row makes the system’s compactness explicit in the patent’s own formulation. In the implemented model the equivalent track/EFL check is 0.89195, consistent with the telephoto classification discussed above. [DE 1 980 417, PDF p. 4 (printed p. 2) and claim 2 on PDF p. 7.]

## Sources and References

- **Primary prescription source:** *Photographisches Tele-Objektiv*, German utility-model record Nr. 1 980 417, VEB Feinoptisches Werk Görlitz. Supplied dossier file `DE_1980417_U.pdf`. Numerical example: PDF p. 5; duplicate claim table: PDF p. 8; architecture: PDF p. 6; optical section: PDF p. 9; conditions: PDF pp. 4 and 7.
- **Period manufacturer brochure:** Meyer-Optik Görlitz / VEB Feinoptisches Werk Görlitz, *ORESTEGOR 5,6 / 500* (1966), https://www.ihagee.org/Lenzen/HMG44-1966-29-500.pdf
- **Product record:** Deutsches Kameramuseum, *Meyer-Optik Görlitz Orestegor 1:5,6/500 mm*, https://kameramuseum.de/objekte/meyer-optik-goerlitz-orestegor-156-500-mm/
- **Inventor bibliography:** PHOTODeal III/2013, *Meyer Optik Görlitz: Telemegore und Orestegore*, https://www.pentaconsix.com/meyer_objektive_2.pdf
- **Related-patent identification:** Arkadii Shapoval, *Modification of Tair-3 1:4.5 F=30 cm — optical design comparison*, https://radojuva.com/en/2024/02/tair-3-4-5-f30-sm-kmz-optical-design/
- **Historical stop-location evidence:** *Orestegor 5,6/500 Schnitt*, https://photobutmore.de/exakta/meyer/orestegor500-schnitt.jpg
- **Glass catalogs and cross-references:** SCHOTT SF3 and N-SSK5 catalog data; OHARA S-BSM25; CDGM F3 / cross-reference database; HOYA optical-glass data downloads; HIKARI optical-glass catalog; SUMITA optical-glass downloads. The exact source URLs and retrieval qualifications are preserved in the dossier `evidence.json`.
