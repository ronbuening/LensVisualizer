# KODAK EKTAR 50mm f/3.5 — US 2,165,328 Example 2

## Patent Reference and Design Identification

**Patent:** US 2,165,328, *Lens*  
**Application Number:** Serial No. 202,485  
**Filed:** April 16, 1938  
**Granted:** July 11, 1939  
**Inventors:** George H. Aklin; Fred E. Altman  
**Assignee:** Eastman Kodak Company  
**Embodiment analyzed:** Fig. 2 / Example 2  

The implemented prescription is the second numerical example of US 2,165,328. The patent describes a photographic objective with a positive front component, a negative dispersive middle component, and a compound positive rear component. Example 2 is an all-spherical four-element, three-group design published at f/3.5 and nominal focal length `F = 100 mm` (US 2,165,328, Fig. 2, PDF p. 1; specification pp. 1–2).

The identification with a Kodak Ektar 50 mm f/3.5 is a research correlation rather than a manufacturer-confirmed patent attribution. The evidence is deliberately separated into supporting facts and limits:

1. Eastman Kodak Company is the patent assignee, and the 1938 filing / 1939 grant predates Kodak's 1941 marketing of the Ektra camera.
2. Kodak manufacturer literature directly identifies a 50 mm f/3.5 Ektar for the Ektra, and Kodak's 1941 catalog associates the Ektra system with a 24×36 mm negative. The patent's Example 2 is likewise f/3.5 and is normalized to `F = 100 mm`; uniform scaling by `s = 0.5` places the prescription in the marketed 50 mm class.
3. The reviewed Kodak product literature does not publish the production prescription or establish that the marketed lens used the patent's four-element/three-group formula. That architecture is therefore treated as a patent fact, not as an independently confirmed product-match criterion.
4. *Kodak Lenses and Shutters* separately documents a same-name 50 mm f/3.5 Ektar for the Retina I. This is evidence of product-name ambiguity rather than additional proof of the patent correlation. The patent itself names neither Ektar, Ektra, nor Retina, so the correlation does not establish a unique production mount or mechanical realization.

The 0.5× scaling is applied to every dimensional prescription quantity. It is not chosen to force the ray-traced design to exactly 50 mm. The unscaled printed prescription computes to 103.203856865 mm rather than the patent's nominal 100 mm; after scaling, the implemented paraxial EFL is 51.601928433 mm while `focalLengthMarketing` remains 50 mm. The source discrepancy is preserved rather than absorbed into the scale factor.

## Optical Architecture

The design is a three-component positive–negative–positive photographic objective in which the rear positive component is a cemented doublet. In physical order it consists of a positive front meniscus (I), a biconcave negative singlet (II), and a cemented rear pair (III+IV) whose net power is positive. This is the architecture explicitly described by the patent rather than a later family-name classification.

The computed standalone focal lengths at the implemented scale are +26.130690801 mm for component I and −16.856434617 mm for component II. The cemented III+IV component has a net focal length of +29.627388227 mm. These quantities are not interchangeable with the individual rear-element powers: element III alone is +16.028416256 mm in air, while element IV alone is −33.867812347 mm in air. The patent's power-distribution statement is therefore evaluated at component level, not by treating the cemented members as independent groups.

The patent gives special importance to the rear compound component and to the two air spaces around the central negative component. It specifies that the rear air space `S2` be less than twice `S1` at f/3.5 and generally greater than `S1`; Example 2 gives `S2/S1 = 1.541573`. It also places the front crown of the rear component ahead of the cemented interface and makes that interface concave to incident light. The patent states that this cemented surface materially controls spherical aberration (US 2,165,328, specification p. 2).

The source does not publish a diaphragm station. The data model therefore inserts one neutral `STO` inside the scaled `S2` air space, splitting it as 1.72 mm before the stop and 1.71 mm after it. Its 6.009623068 mm semi-diameter is calibrated so that the modeled entrance pupil reproduces f/3.5. This is an implementation constraint, not evidence for the historical iris diameter or exact iris position.

The source likewise gives no image-plane row. The implemented rear spacing is the computed infinity paraxial BFD, 41.781446019 mm from the R7 vertex. No cover glass, filter, dummy plane, or mechanical part is present in the optical model.

## Element-by-Element Analysis

### L1 / Element I — Positive Meniscus

`nd = 1.620, νd = 60.4.` Glass: `N-SK16 (SCHOTT catalog equivalent; patent 620/604; production supplier unspecified)`. Standalone in-air `f = +26.130690801 mm`.

Element I is the front collective component. The patent explicitly states that bending this front crown controls field flatness and, in the preferred meniscus form, also affects spherical aberration. Its Example 2 geometry preserves the patent's stated regime: the front radius is 0.275 of the nominal focal length and the weaker rear radius has magnitude 1.65 times nominal focal length (US 2,165,328, specification p. 2).

The catalog label is a modern coordinate equivalent only (N-SK16 1.62041/60.32, Δnd +0.0004, Δνd −0.08); SK16-family coordinates also exist as OHARA S-BSM16 and HIKARI J-SK16. The historical Kodak melt and supplier are not established, and the stored `nd`/`νd` remain the patent's `ND`/`ν` pair.

### L2 / Element II — Biconcave Negative

`nd = 1.605, νd = 38.2.` Glass: `F15 (HOYA catalog proxy; patent 605/382; production supplier unspecified)`. Standalone in-air `f = −16.856434617 mm`.

Element II is the single dispersive component between the two positive components. Its front surface is comparatively weak and its rear surface is much stronger; in Example 2, `|R3|/F = 1.17` and `R4/F = 0.249` using the patent's own nominal normalization. This reproduces the geometry discussed in the specification, where the front radius is slightly greater than `F` in the preferred embodiment and the rear radius is held near one quarter of `F`.

Its lower Abbe number makes it the most dispersive of the four source glasses, but the patent does not supply line-index or partial-dispersion data. The data file therefore uses only the published d/D-line coordinate pair and does not infer an anomalous-dispersion or apochromatic role.

### L3 / Element III — Biconvex Positive Crown of the Rear Doublet

`nd = 1.639, νd = 55.5.` Glass: `K-SK18 (SUMITA catalog equivalent; patent 639/555; production supplier unspecified)`. Standalone in-air `f = +16.028416256 mm`.

Element III is the front member of the cemented rear collective component. The patent calls for the crown element to face forward and gives the front rear-group surface `R5` a relatively strong curvature. Example 2 has `R5/F = 0.735`, within the patent's stated 0.7–1.0 range for the illustrated ordinary-glass construction.

The element's center thickness is also part of the patent's aperture condition. Example 2 gives `t3/F = 0.0796`; the patent requires the front member of the rear compound component to exceed 4.5% of focal length for an f/3.5 objective and notes that the examples are about 8% (US 2,165,328, specification p. 2 and claim 3).

### L4 / Element IV — Negative Meniscus in the Rear Cemented Component

`nd = 1.523, νd = 58.4.` Glass: `C12 (HOYA catalog proxy; patent 523/584; production supplier unspecified)`. Standalone in-air `f = −33.867812347 mm`.

Element IV is cemented directly to L3 at R6; no air layer is inserted at that interface. In the data model, the shared R6 surface therefore carries the downstream L4 index and element identity, matching the physical III→IV transition.

The patent makes the cemented R6 surface concave to incident light and constrains its magnitude to roughly 15–35% of nominal focal length; Example 2 gives `|R6|/F = 0.272`. The weak rear surface has `|R7|/F = 1.201`. L4 by itself is negative in air, but the L3+L4 cemented pair is net positive with `f = +29.627388227 mm`; discussion of the rear component's power therefore refers to the cemented assembly, not to L4 independently.

## Glass Identification and Selection

The patent publishes only D-line refractive index and Abbe number for each element. Catalog review found coordinate-compatible modern families in OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA references, but none establishes the actual 1938 Kodak supplier or melt. The data file therefore names modern catalog equivalents or proxies where one lies within about 0.0007 in `nd` and 0.3 in `νd`, so that dispersion is modeled from that glass's catalog dispersion data. Element IV uses the obsolete HOYA C12 (1.523073/58.64) as a proxy; its `νd` is 0.24 higher than the patent value. None of these labels asserts the historical glass.

| Element | Source `nd / νd` | Data-file glass description | Confidence |
|---|---:|---|---|
| I | 1.620 / 60.4 | N-SK16 (SCHOTT) 1.62041 / 60.32 | Catalog equivalent; supplier unresolved |
| II | 1.605 / 38.2 | F15 (HOYA) 1.60565 / 37.90 | Catalog proxy (Δνd −0.30); F5/S-TIM5 at 1.60342 is farther in `nd` |
| III | 1.639 / 55.5 | K-SK18 (SUMITA) 1.63854 / 55.50 | Catalog equivalent; supplier unresolved |
| IV | 1.523 / 58.4 | C12 (HOYA, obsolete) 1.52307 / 58.64 | Catalog proxy (Δνd +0.24); supplier unresolved |

No `nC`, `nF`, `ng`, or `dPgF` values are authored because the patent does not publish them and the catalog equivalents are not proven historical melts. The model therefore does not support an APO or anomalous-partial-dispersion claim. The patent instead emphasizes component power balance and states that lateral color and distortion become unacceptable if too much power is shifted from the rear component toward the front (US 2,165,328, specification p. 2).

## Focus Mechanism

The optical model is `NO_INTERNAL_RECONSTRUCTION`. US 2,165,328 supplies no focus-state table, object distances, magnifications, or internal movement law for Example 2, so the implemented prescription represents only the static infinity state and `var` is empty.

Kodak manufacturer literature documents focusing behavior for cameras carrying a 50 mm f/3.5 Ektar, but it does not establish an internal optical-group law that can be transferred into this patent model. The Ektra manual gives rangefinder-coupled normal focusing from 3.5 ft to infinity and separate close-up settings from 1.5 to 3 ft using a spring plunger. *Kodak Lenses and Shutters* separately lists the Retina I version as focusing from infinity to 3.5 ft. Because the same lens name appears on mechanically different camera implementations, the data file uses 1.0668 m (3.5 ft) only as a conservative common normal-focus catalog/UI marker required by the current schema. It is not a traced close-focus state and should not be read as the absolute mechanical minimum of every 50 mm f/3.5 Ektar variant; the Ektra manual explicitly documents its separate 1.5 ft close-up setting.

## Patent Conditions and Model Verification

The patent's principal Example 2 conditions remain satisfied after uniform 0.5× scaling because they are dimensionless ratios. They are evaluated against the patent's nominal scaled normalization `F = 50 mm`, not against the computed 51.601928433 mm EFL.

| Patent relation | Example 2 ratio | Result |
|---|---:|---|
| `R1/F` between 0.23 and 0.35 | 0.275 | Satisfied |
| `|R2|/F > 1` in the preferred meniscus form | 1.650 | Satisfied |
| `|R3|/F > 1` in the preferred embodiment | 1.170 | Satisfied |
| `R4 ≈ F/4` | 0.249 | Satisfied |
| `S2 < 2 S1` and generally `S2 > S1` | 1.541573 | Satisfied |
| `R5/F` between 0.7 and 1.0 | 0.735 | Satisfied |
| `|R6|/F` between 0.15 and 0.35 | 0.272 | Satisfied |
| `t3/F` between 0.045 and 0.12 in claim 3 | 0.0796 | Satisfied |

Independent sequential y–ν tracing and a separate ABCD implementation agree at double precision for the implemented data. The computed EFL is 51.601928433 mm and the BFD from the R7 vertex is 41.781446019 mm. Surface-by-surface Petzval terms, evaluated as `φ/(n·n′)`, sum to 0.006218810790 mm⁻¹.

The stop calibration produces a paraxial f-number of 3.500000000000. Because the stop size was solved to that published target, this result verifies internal consistency of the model rather than independently recovering an unpublished Kodak diaphragm.

The semi-diameters are not published. They follow the to-scale Fig. 2 section. Measured at the axial scale set by the first-to-last vertex span, the drawn rims are about 7.7 mm for element I, 6.5 mm for element II and 6.2 mm for the III+IV doublet. Each value is rounded up just enough to pass the full f/3.5 axial beam, giving S1/S2 7.8 mm, S3/S4 6.7 mm and S5–S7 6.4 mm. Exact meridional tracing puts the axial marginal ray at 7.37, 6.51 and 6.24 mm on S1, S3 and S5, so the tightest axial margin is 0.16 mm, on S5. The 24×36 mm corner bundle is partly clipped by the front and rear rims: about 24% of the bundle's width at S1 and 42% at S7. A deliberately vignetting mount like this is normal for a 1930s f/3.5 anastigmat, and the chief ray is never blocked. The edge thicknesses are 1.26 mm (I, close to the ≈1.3 mm drawn), 3.58 mm (II), 1.82 mm (III) and 2.26 mm (IV).

## Sources

1. George H. Aklin and Fred E. Altman, **US Patent 2,165,328, “Lens,”** Eastman Kodak Company, filed April 16, 1938, granted July 11, 1939. Fig. 2 and prescription table: PDF p. 1; design discussion and conditions: specification pp. 1–3; claim 3: PDF p. 4. https://patents.google.com/patent/US2165328A/en
2. Eastman Kodak Company, **How to Use the Kodak Ektra**, printed pp. 16–21. Historical manufacturer manual scan: https://www.cameramanuals.org/kodak_pdf/kodak_ektra.pdf
3. Eastman Kodak Company, **Kodak Lenses and Shutters**, entry “Kodak Ektar f/3.5, 50 mm (as used on the Kodak Retina I),” p. 36 in the hosted scan. https://www.cameramanuals.org/booklets/kodak_lenses-shutters.pdf
4. Eastman Kodak Company, **Kodaks and Brownies 1941**, Ektra listing with 50-mm Kodak Ektar f/3.5 and 24×36 mm negative. Rochester Public Library digitization: https://www.libraryweb.org/~digitized/tradecats/kodak/Kodaks_and_Brownies_1941.pdf
5. Kodak, **Milestones**, 1941–1945 chronology, noting 1941 marketing of the Kodak Ektra camera. https://www.kodak.com/en/company/page/milestones/
6. Current optical-glass catalog references consulted for coordinate-class matching: OHARA, HOYA, SCHOTT, HIKARI/Nikon, CDGM, and SUMITA. These catalog comparisons identify modern coordinate classes only; they do not establish the historical Kodak glass supplier.
