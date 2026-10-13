## Patent Reference and Design Identification

**Patent:** US 3,006,249, *Photographic Objective*  
**Priority:** Germany, October 1, 1957  
**Filed:** September 30, 1958  
**Granted:** October 31, 1961  
**Inventor:** Walter Mandler  
**Assignee:** Ernst Leitz Canada Limited  
**Embodiment analyzed:** Example II, Figure 2

US 3,006,249 describes a high-speed wide-angle objective with two four-element halves arranged on opposite sides of a diaphragm. Example II is the numerical prescription used here. The patent gives a normalized focal length of 100 mm, a nominal aperture of F:2, and a 62° angular field; Figure 2 shows the eight elements and diaphragm 10, while the Example II table and claim 2 provide the prescription. The patent explicitly defines `N_D` as refractive index at the sodium D line and `V` as the Abbe number. [US 3,006,249, PDF pp. 1–3, especially Fig. 2, Example II, and claim 2.](https://patents.google.com/patent/US3006249A/en)

The attribution to the first Leica/Leitz Summicron 35mm f/2 is a strong correlation rather than a manufacturer-confirmed patent assignment. The principal converging evidence is:

1. The patent Example II and the period production lens are both nominally f/2.
2. The patent uses eight elements in six air-separated components, matching the October 1961 Leitz dealer catalogue description of the 35 mm f/2 Summicron.
3. Uniformly scaling the normalized 100 mm prescription by 0.35 gives a computed design EFL of 35.2259605 mm, close to the marketed 35 mm focal length.
4. Leica Camera AG later stated that the first Summicron-M 35 mm was introduced in 1958, consistent with the patent's 1957 priority and 1958 filing dates.
5. The patent states a 62° field, whereas the October 1961 Leitz catalogue gives 64° for the production lens. The final scaled model gives a paraxial 36 × 24 mm diagonal field of 63.11064°. The three figures are therefore consistent as correlation evidence but are not treated as identical specifications.

The modeled catalog entry represents the Leica M bayonet variant. Period Leitz material also records other mount/viewfinder variants, but no located manufacturer source states that US 3,006,249 Example II is literally the production prescription.

## Optical Architecture

The patent calls the design a substantially symmetrical wide-angle objective. It consists of eight concavo-convex menisci in two four-element halves around the diaphragm: elements I–IV form the front half and V–VIII the rear half. Elements I, IV, V, and VIII are positive menisci. In each half, the two intermediate elements form a composite negative meniscus; in Example II, II+III and VI+VII are cemented pairs. [US 3,006,249, PDF p. 2, col. 1; Fig. 2.](https://patents.google.com/patent/US3006249A/en)

The final data preserves that topology with eight physical elements, six air-separated components, fourteen refracting surfaces, and one modeled aperture stop. The cemented interfaces remain single physical interfaces: surface 4 enters element III and surface 11 enters element VII, with no synthetic cement layer.

The scaled system has an air-to-air paraxial EFL of 35.2259605 mm. Its r1-to-r14 optical track is 28.7420000 mm, and the infinity back focal distance is 22.6582683 mm from the surface-14 vertex. Those are computed design quantities, not marketed dimensions. The front and rear four-element blocks are both positive when evaluated as isolated retained-spacing blocks, while the two cemented middle pairs remain weakly negative as the patent describes.

The patent uses the word “substantially” for the symmetry, and the numerical embodiment is not a mirror copy about the stop. The front and rear halves use different curvatures, thicknesses, and glass coordinates. The architecture is therefore best read as a paired, approximately symmetric wide-angle construction rather than as exact bilateral symmetry.

## Element-by-Element Analysis

The element lines below follow the final data file. The `nd`/`νd` field names are retained for LensVisualizer consistency, but the numerical refractive indices are the patent's sodium-D `N_D` values, not converted modern helium-d values. The listed focal lengths are isolated thick-element focal lengths computed from the final scaled prescription; they are not in-situ contributions to the complete lens.

### Element I — Outer Positive Meniscus

`nd = 1.74400` (patent sodium-D `N_D`), `νd = 44.90`. Glass: **744449 class (source sodium-D; vendor unresolved)**. `f = +123.692106 mm`.

Element I is the outer positive meniscus of the front half. In the patent's architecture it is one of the two positive members that bracket the composite negative pair on the object side. No source text assigns it a separate aberration-correction function, so the model limits the interpretation to its positive isolated power and structural position.

### Elements II–III — First Cemented Composite Negative Pair

**Element II:** `nd = 1.74400`, `νd = 44.90`. Glass: **744449 class (source sodium-D; vendor unresolved)**. `f = +19.070418 mm`.  
**Element III:** `nd = 1.64770`, `νd = 33.88`. Glass: **648338 class (source sodium-D; vendor unresolved)**. `f = -15.137974 mm`.

Element II is positive in isolation and element III is negative in isolation, but their cemented combination is net negative. The verified scaled cemented-pair power is -0.0022036767 mm⁻¹, corresponding to an isolated equivalent focal length of -453.7871 mm. This reproduces the patent's description of II+III as a composite negative meniscus; it does not imply that either element's isolated focal length can be substituted for its behavior inside the full eight-element system.

### Element IV — Positive Meniscus Adjacent to the Stop

`nd = 1.72000`, `νd = 50.31`. Glass: **720503 class (source sodium-D; vendor unresolved)**. `f = +121.820695 mm`.

Element IV closes the front half next to the central air space containing the diaphragm. It is positive, as stated by the patent. Its placement pairs architecturally with element V on the opposite side of the stop, although the two elements are not numerically identical.

### Element V — Positive Meniscus Adjacent to the Stop

`nd = 1.72000`, `νd = 50.31`. Glass: **720503 class (source sodium-D; vendor unresolved)**. `f = +48.191255 mm`.

Element V begins the rear half immediately after the diaphragm space and is the rear-side counterpart to element IV in the patent's substantially symmetrical arrangement. The rendered Example II table gives its center thickness as 4.8 mm in the normalized prescription. An OCR reading of 34.8 mm is rejected because the rendered Example II table and claim 2 both show 4.8 mm. [US 3,006,249, PDF pp. 2–3, Example II and claim 2.](https://patents.google.com/patent/US3006249A/en)

### Elements VI–VII — Second Cemented Composite Negative Pair

**Element VI:** `nd = 1.69890`, `νd = 30.05`. Glass: **699301 class (source sodium-D; vendor unresolved)**. `f = -16.867163 mm`.  
**Element VII:** `nd = 1.78800`, `νd = 47.44`. Glass: **N-LAF21 coordinate-compatible catalog proxy (historical supplier unproven)**. `f = +21.042373 mm`.

The VI+VII cemented pair is net negative even though element VII is positive in isolation. Its verified scaled pair power is -0.0020442183 mm⁻¹, equivalent to -489.1845 mm in isolation. As with II+III, this is a cemented-block result rather than an in-situ attribution of image-forming power.

Element VII is the only element for which the patent supplies a glass composition: approximately B₂O₃ 30%, La₂O₃ 49%, CdO 13%, ZrO₂ 4%, and Ta₂O₅ 4% by weight. The composition totals 100%, but it does not establish a modern vendor catalog identity. [US 3,006,249, PDF p. 2, bottom-right composition table; p. 3, claim 3.](https://patents.google.com/patent/US3006249A/en)

### Element VIII — Outer Positive Meniscus

`nd = 1.74400`, `νd = 44.90`. Glass: **744449 class (source sodium-D; vendor unresolved)**. `f = +76.200464 mm`.

Element VIII is the outer positive meniscus of the rear half. Together with element I it forms the positive outer boundary of the patent's two-half architecture. The numerical prescription gives it appreciably more isolated power than element I, another indication that the design is only substantially, not exactly, symmetrical.

## Glass Identification and Selection

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt. The source specifies sodium D near 589.3 nm; the schema only supports d/e, so the d marker and helium-d catalog comparison remain an approximation, not a conversion of the source values.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.744 / 44.9 (d) | H-LaF3B |
| L2 | 1.744 / 44.9 (d) | H-LaF3B |
| L3 | 1.6477 / 33.88 (d) | H-ZF1 |
| L4 | 1.72 / 50.31 (d) | LAC10 |
| L5 | 1.72 / 50.31 (d) | LAC10 |
| L6 | 1.6989 / 30.05 (d) | S-TIM35 |
| L7 | 1.788 / 47.44 (d) | N-LAF21 |
| L8 | 1.744 / 44.9 (d) | H-LaF3B |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

The source prescription contains one fixed optical state and no finite-focus variable-spacing table. The data therefore uses **NO_INTERNAL_RECONSTRUCTION**: all five patent inter-element air gaps remain fixed, and no floating or internal focusing motion is invented.

For the required viewer focus metadata, the model selects the Leica M2/M1 bayonet variant documented in period Leitz material with rangefinder coupling to 2 ft 4 in, represented as `closeFocusM = 0.7112 m`. The implemented focus variable changes only the final image-space gap on surface 14, from 22.658268 mm at infinity to 24.591778 mm at the close state.

The close state is a paraxial unit-focus equivalent solved from the final system matrix under a 711.2 mm object-to-image conjugate constraint. The equivalent rear-image extension is 1.9335098 mm. This is a model representation of the optical conjugate, not a claim that the production mount moved an internal group by that amount or used a published internal compensation law.
Intermediate slider states linearly interpolate only that rear image-space gap. They are viewer interpolation states, not source-published focus distances or a production mechanical focusing law.

The period Leitz catalogue describes a non-rotating focusing mount and variant-specific coupling limits. Those mechanical statements support the selected product metadata, but they do not determine an internal optical spacing law for Example II.

## Verification Summary

The final model applies a uniform scale factor of 0.35 to every dimensional prescription value. Recomputed directly from the final `.data.ts`, it has an EFL of 35.2259605 mm, an infinity BFD of 22.6582683 mm from surface 14, and an r1-to-r14 track of 28.7420000 mm. The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is +0.00614379915 mm⁻¹.

The patent gives the total central air gap `a3 = 10.9 mm` and draws diaphragm 10 inside it but does not dimension the split. After scaling, the 3.815 mm gap is modeled as an equal 1.9075 mm + 1.9075 mm split. The patent also gives no physical diaphragm diameter. The modeled stop semi-diameter of 6.058798 mm was calibrated so the paraxial entrance pupil semi-diameter is 8.8064900 mm and the model reproduces f/2.00000003. That agreement verifies the calibration calculation; it is not independent evidence of the manufactured stop diameter.

No source clear apertures are published. All surface semi-diameters are modeled construction values. In the portable geometry checks, the minimum element edge thickness is 0.2057419 mm, the maximum spherical rim angle is 51.9433°, and the largest shared-band cross-gap intrusion is 0.884424 of the relevant air gap. Exact spherical meridional tracing of the declared construction samples passes with a minimum non-stop aperture margin of 0.0304764 mm.

The sampled infinity construction fan covers the axis and ±18.9332°, corresponding to ±0.6 of the 135-format diagonal half-field. At the full paraxial 135-format diagonal half-field of ±31.5553°, the central pupil ray passes, but the tested ±0.5 pupil rays vignette at surface 1 or 13 depending on field sign. The model therefore does not claim an unvignetted 43.27 mm diagonal at f/2.

The scaled model's paraxial full diagonal field is 63.11064°. This lies between the patent's 62° statement and the period Leitz production catalogue's 64° angle of view, but it is used only as correlation evidence. The source values remain distinct.

All surfaces are spherical; there are no aspheric or diffractive coefficients to interpret. No rear filter, cover plate, or dummy optical plane is published for Example II, so no rear-plate omission or air-equivalent plate conversion is present in the model.

The portable construction results do not establish production-render behavior. No production render-trim result or runtime glass-catalog resolution is asserted here.

## Sources and References

1. Walter Mandler, **“Photographic Objective,” US Patent 3,006,249**, filed September 30, 1958, priority October 1, 1957, granted October 31, 1961. Example II and Fig. 2 are the prescription source; claim 2 repeats Example II; claim 3 gives the element-VII composition. https://patents.google.com/patent/US3006249A/en
2. E. Leitz, **October 1961 General Catalogue for Leica Dealers**. Period manufacturer catalogue; records the Summicron f/2 35 mm as an 8-element/6-component lens with a 64° angle of view and Leica M / screw-mount variants. Archived manufacturer scan: https://www.pacificrimcamera.com/rl/03496/03496.pdf
3. E. Leitz (Instruments) Ltd., **General Price List, May 1961**. Period manufacturer price list; records the 35 mm f/2 Summicron variants including the M2/M1 and M3 versions. Archived manufacturer scan: https://www.pacificrimcamera.com/rl/03919/03919.pdf
4. Leica Camera AG, **Product Information — LEICA SUMMICRON-M f/2/35 mm ASPH.**, publication 920 431, III/97/HX/B. Manufacturer-authored document stating that the first Summicron-M 35 mm was introduced in 1958; consulted through a third-party mirror. https://manuals.plus/m/68c651327ab94c30f2f8a18d2fc8ebce06efdfa8fb73cde74d650609ff34538f
5. Current optical-glass catalogs and cross-reference resources from SCHOTT, OHARA, HOYA, HIKARI, SUMITA, and CDGM were used only for coordinate-class comparison. No modern catalog row is asserted to be the historical Leitz melt.
