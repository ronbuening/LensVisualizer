## Patent Reference and Design Identification

**Patent:** US 2,724,994  
**Priority:** Germany, March 17, 1953  
**Filed:** March 10, 1954  
**Granted:** November 29, 1955  
**Inventor:** Günther Lange  
**Assignee:** Carl-Zeiss-Stiftung  
**Title:** *Photographic Objective Comprising Four Meniscus Shaped Air Spaced Components*  
**Embodiment analyzed:** Example II (Fig. 2)

The prescription represented as **CARL ZEISS PLANAR 80mm f/2.8** is taken from Example II of US 2,724,994. The patent gives five glass elements in four air-spaced components, a relative aperture of 1:2.8, and a numerical normalization of $f=100$ units. Example II is the Fig. 2 construction, with elements I and II cemented, element III immediately before the diaphragm, element IV immediately behind it, and element V as the rear positive component. The final LensVisualizer model uniformly scales every patent length by 0.8, producing a computed effective focal length of 80.000111 mm while leaving the refractive indices and Abbe numbers unchanged.[1]

The production identification is a strong historical and design correlation rather than a manufacturer-confirmed patent attribution. The principal converging evidence is:

1. Carl Zeiss historical material identifies an Oberkochen five-element Gauss-model Planar 2.8/80 for the 6×6 format.[2]
2. The patent embodiment is also a five-element design and is explicitly calculated for f/2.8.[1]
3. The patent is normalized to $f=100$; the uniform 0.8 scale maps its verified 100.000139-unit EFL to 80.000111 mm.
4. ZEISS places five-element Planar/Biotar taking lenses on twin-lens Rolleiflex cameras in the early 1950s, consistent with the patent's 1953 German priority date.[2]
5. The Rolleiflex 2.8D manufacturer's instructions identify a Zeiss Planar f/2.8 as a taking-lens option and document the camera's rigid common-front-panel focusing arrangement.[3]

No consulted ZEISS or Franke & Heidecke source states that US 2,724,994 Example II is the production Planar 2.8/80 prescription. Accordingly, the 6×6 fixed-lens-camera metadata is a research correlation, not a direct patent statement or manufacturer confirmation.

## Optical Architecture

The design is a five-element, four-component Gauss-model Planar in the historical ZEISS sense. In front-to-rear order its physical structure is

`[I + II cemented] — III — STO — IV — V`.

The patent describes all air-facing concave surfaces as turned toward the diaphragm. Its front component is deliberately cemented from elements of opposite sign: the first element is negative and the second positive, while the cemented pair as a whole is positive. In the final scaled model the isolated air-to-air EFL of the cemented I+II component is +98.498 mm. This net component result is distinct from the isolated focal lengths of I and II and from their behavior inside the complete objective.

Elements III and IV are the two dispersive menisci surrounding the stop. Element IV is the single uncemented post-stop element specified by the patent, and element V is the positive rear meniscus. The architecture is markedly asymmetric about the diaphragm; the patent itself discusses that asymmetry while explaining its chromatic-correction strategy.[1]

The modeled first-to-last refracting-vertex track is 41.6496 mm and the infinity BFD from surface 9 is 55.6900 mm. The rear image-plane distance is not printed in the patent; it is the first-order infinity BFD derived from the verified scaled prescription. The physical diaphragm plane is published, but its diameter is not. The modeled stop size is therefore calibrated to the patent's f/2.8 value rather than treated as a source dimension.

## Element-by-Element Analysis

The focal lengths below are isolated air-to-air thick-element values recomputed from the final scaled data. They are not in-situ group powers or ray-bending contributions.

### L1 / Element I — Negative Meniscus, cemented front member

**nd = 1.69895, νd = 30.1. Glass: 699301 — dense-flint class (supplier unresolved). Isolated f = −105.524 mm.**

L1 is the negative member of the cemented front component. The patent assigns the front cemented pair opposite refractive powers and requires the positive member to have the lower dispersion. L1 therefore supplies the higher-dispersion side of that pair. The patent explicitly moves a substantial part of the chromatic correction into this front component, rather than relying primarily on a cemented negative component near the stop as in the prior constructions it discusses.[1]

The historical glass supplier is not identified by the patent. The 1.69895 / 30.1 coordinate is reproduced or closely reproduced by several modern catalog families, so the data retains a supplier-unresolved six-digit class label rather than asserting a specific melt.

### L2 / Element II — Positive Meniscus, cemented front member

**nd = 1.69347, νd = 53.5. Glass: S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven). Isolated f = +48.906 mm.**

L2 is the positive, lower-dispersion member of the front cemented pair. Together L1 and L2 form the net positive front component with isolated EFL +98.498 mm. The cemented interface follows the patent prescription directly; in the data model the junction is assigned to the downstream L2 medium rather than represented by a synthetic cement layer.

S-LAL13 supplies a close coordinate-compatible dispersion curve; it does not establish the historical supplier or melt.

### L3 / Element III — Negative Meniscus before the diaphragm

**nd = 1.69895, νd = 30.1. Glass: 699301 — dense-flint class (supplier unresolved). Isolated f = −109.147 mm.**

L3 is the dispersive meniscus immediately before the diaphragm. Its material coordinate is the same as L1's. The patent identifies the components on either side of the diaphragm as dispersive menisci and turns their air-facing concave sides toward the stop.[1]

The model does not assign a standalone aberration-correction effect to L3 beyond what the patent states for the architecture. Its isolated negative power is a property of the element in air; its contribution inside the complete lens depends on the surrounding ray heights, spacings, and indices.

### L4 / Element IV — Thin Negative Meniscus after the diaphragm

**nd = 1.76182, νd = 26.5. Glass: 762265/762266 — dense-flint class (supplier unresolved). Isolated f = −96.710 mm.**

L4 is the single uncemented dispersive component immediately behind the diaphragm. The patent specifically makes this post-stop component thinner than the pre-stop dispersive component and states that a sufficiently thin rear dispersive meniscus is favorable to image-field flattening.[1]

The 1.76182 / 26.5 coordinate is compatible with several modern dense-flint catalog families. Because that coordinate does not establish the historical supplier, the model uses only the supplier-unresolved class/code description and does not import vendor-specific line indices.

### L5 / Element V — Positive Rear Meniscus

**nd = 1.62041, νd = 60.3. Glass: 620603 — crown class (supplier unresolved). Isolated f = +45.688 mm.**

L5 is the positive rear collecting component. It follows the thin negative L4 across a very small air space in the patent prescription and completes the four-component layout described in claim 1 and Fig. 2.[1]

Its d-line coordinate is reproduced by several modern crown-family catalog entries, but the patent gives no supplier. The element therefore retains a generic 620603 crown-class label rather than a modern vendor name.

## Glass Identification and Selection

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.69895 / 30.1 (d) | E-FD15 |
| L2 | 1.69347 / 53.5 (d) | S-LAL13 |
| L3 | 1.69895 / 30.1 (d) | E-FD15 |
| L4 | 1.76182 / 26.5 (d) | J-SF14 |
| L5 | 1.62041 / 60.3 (d) | J-SK16 |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

The patent publishes no focus-state spacing table and no moving-group law. The optical model therefore uses `NO_INTERNAL_RECONSTRUCTION`: the prescription remains fixed at the published state and contains no variable optical gaps.

For the correlated Rolleiflex 2.8D production context, the manufacturer's instructions describe both camera lenses as rigidly coupled to a common front panel and describe focusing by moving that front lens panel. The same manual gives a focusing range from infinity to 40 inches, measured from the focal/film plane.[3] The data file records the corresponding 1.016 m value as production metadata, but it does not convert that specification into a reconstructed patent spacing state.

No close-focus EFL, BFD, aberration, or field-performance claim is therefore made from this model. The verified optical calculations refer to the fixed patent prescription and its derived infinity image plane.

## Conditional Expressions

US 2,724,994 gives eight principal dimensional inequalities for this family. In the patent's normalized $f=100$ source model, Example II satisfies all eight; uniform scaling by 0.8 leaves these dimensionless relationships unchanged.[1]

| Patent condition | Verified Example II quantity | Status |
|---|---:|---|
| $0.25f < D_s < 0.65f$ | $D_s=34.529$ | Pass |
| $1.25\bar r_s < D_s < 1.50\bar r_s$ | $\bar r_s=26.587$ | Pass |
| $0.20f < \bar r_s < 0.50f$ | $\bar r_s=26.587$ | Pass |
| $0.15f < D_z < 0.40f$ | $D_z=20.495$ | Pass |
| $0.90\bar r_z < D_z < 1.40\bar r_z$ | $\bar r_z=18.4385$ | Pass |
| $0.15f < \bar r_z < 0.25f$ | $\bar r_z=18.4385$ | Pass |
| $0.60f < r_1+|r_9| < 1.00f$ | $r_1+|r_9|=71.918$ | Pass |
| $0.45f < L < 0.60f$ | $L=52.062$ | Pass |

The patent also prints a Petzval value of $0.1244\,1/f$ for Example II. A surface-by-surface recomputation using $\phi/(n n')$ gives a scaled-model Petzval sum of 0.001555451 mm⁻¹, corresponding to a normalized coefficient of 0.1244363. The difference is within the rounding implied by the patent's four-decimal printed coefficient.

## Modeling and Verification Notes

The final model is a uniform 0.8 scaling of the patent's $f=100$ numerical example. The verified fixed-state first-order values are:

| Quantity | Final modeled value | Reference |
|---|---:|---|
| Effective focal length | 80.000111 mm | Computed from final data |
| Back focal distance | 55.690019 mm | Surface 9 vertex to derived infinity image plane |
| Refracting-vertex track | 41.649600 mm | Surface 1 to surface 9 |
| Maximum aperture | f/2.8 | Patent value; physical stop size calibrated in model |
| Petzval sum | 0.001555451 mm⁻¹ | Surface-by-surface computation |

The image-plane distance after surface 9 is a first-order modeling result because the patent table ends at the last refracting surface. Likewise, the diaphragm's axial plane is published but its physical diameter is not. The authored stop semi-diameter of 9.805299 mm is the value required for the scaled model to reproduce f/2.8; agreement with f/2.8 is therefore a calibration, not an independent measurement of the manufactured diaphragm.

The patent also provides no surface semi-diameters. The model's clear apertures were inferred from exact spherical ray envelopes for the fixed state and given conservative mechanical clearance. The resulting geometry retains positive edge thickness for all five elements; the minimum modeled edge thickness is 0.517 mm, and the largest modeled spherical rim-slope angle is 56.164°. Exact meridional containment checks include the full on-axis pupil, the configured off-axis bundles at 60% of the 6×6 corner field, and the full-field chief rays to the 39.598 mm corner image height.

These semi-diameters are visualization/modeling quantities, not dimensions published in US 2,724,994. They should not be read as recovered production clear-aperture measurements.

The prescription is entirely spherical. There are no conic constants or aspheric polynomial coefficients in the selected embodiment, so no asphere conversion or scaling is involved.

## Sources

1. Günther Lange, **US Patent 2,724,994**, *Photographic Objective Comprising Four Meniscus Shaped Air Spaced Components*, Carl Zeiss, granted November 29, 1955. See the invention description and conditions on supplied PDF p. 2; Example II (Fig. 2) on supplied PDF p. 3; normalized claim-3 example on supplied PDF p. 4.
2. H. H. Nasse, *From the Series of Articles on Lens Names: Planar*, Carl Zeiss AG, Camera Lens Division, July 2011. https://lenspire.zeiss.com/photo/app/uploads/2022/02/technical-article-lens-names-planar.pdf
3. Franke & Heidecke, *Rolleiflex 2.8D Instructions*. Manufacturer instruction-book scan: https://www.cameramanuals.org/rolleiflex/rolleiflex_28d.pdf. See PDF p. 3 for the Zeiss Planar f/2.8 taking-lens option and pp. 7–8 for common-front-panel focusing and the infinity-to-40-inch range.
4. OHARA Corporation, current optical-glass catalog/type data. https://oharacorp.com/wp-content/uploads/2025/04/estim35.pdf
5. HOYA GROUP Optics Division, *Optical Glass Data / Cross Reference*. https://www.hoya-opticalworld.com/english/datadownload/index.html
6. SCHOTT Advanced Optics, optical-glass catalog and datasheets. https://www.us.schott.com/shop/advanced-optics/en/search/
7. HIKARI GLASS CO., LTD., general optical-glass catalog. https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/
8. Chengdu Guangming Optoelectronic Corp. (CDGM), optical-glass database. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. SUMITA OPTICAL GLASS, Inc., Zemax all-glasses catalog. https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
