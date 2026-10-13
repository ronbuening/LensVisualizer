# SCHNEIDER-KREUZNACH XENON 50mm f/1.9 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** CH 346706\
**Filed:** 15 November 1956\
**Registered:** 31 May 1960\
**Published:** 15 July 1960\
**Inventor:** Günter Klemt\
**Applicant:** Jos. Schneider & Co., Optische Werke\
**Title:** *Optisches System mit Auswechselgliedern zur Änderung des Abbildungsmaßstabes*\
**Embodiment analyzed:** Example 1 / Zahlentabelle A

The prescription is taken from Zahlentabelle A of CH 346706. The patent identifies it as a Gauß-Doppelobjektiv and gives an opening ratio of 1:2, focal length $f' = 100$, and image-side focal distance $s'_{10} = 72.4$. Figure 1 shows the same six-element arrangement divided into an exchangeable front subsystem I (L1–L3) and a fixed rear subsystem II (L4–L6). [CH 346706, p. 2, Zahlentabelle A; drawing sheet 1, Fig. 1 (PDF p. 5).]

The LensVisualizer model applies a uniform scale factor of 0.5 to every dimensional optical value, producing a 50 mm-class prescription while leaving refractive indices and Abbe numbers unchanged. The final computed effective focal length is 50.003113 mm. The patent's f/2 design value is retained as the modeled aperture; the production target in this job is named Xenon 1.9 / 50, so the marketed f/1.9 designation remains a separate quantity rather than being used to enlarge the modeled stop.

The production correlation is an inference, not a manufacturer-confirmed identification of Table A. Schneider-Kreuznach's official patent index lists a related German patent, DE 1064253, under the same title. That supports Schneider context but, by itself, does not establish that DE 1064253 and CH 346706 are a formal patent family. A secondary Exakta history describes a circa-1951 Xenon 1:1.9 / 50 mm as a six-lens Gauss construction with a 45° field and 0.8 m close focus. Those characteristics are consistent with the scaled Table-A architecture, but the timing is not conclusive: the Swiss filing is from 1956, and the patent presents the Gauss objective as the base lens of a larger exchange-member system. The data leaves the historical mount unset; a manufacturer catalog now supports the correlated product’s 35 mm image-format class, as documented below. [Schneider-Kreuznach patent index; Photo but More, “Schneider Objektive für Exakta — Xenon 1:1,9 / 50 mm.”]

## Optical Architecture

The implemented lens is an all-spherical six-element, four-air-group double-Gauss arrangement. In front-to-rear order, the air-separated groups are L1, cemented L2+L3, cemented L4+L5, and L6. The patent's subsystem division cuts the system at the central diaphragm space: subsystem I contains L1–L3 and subsystem II contains L4–L6. [CH 346706, p. 2, Zahlentabelle A; Fig. 1.]

The power sequence is positive L1, positive/negative cemented pair L2+L3, negative/positive cemented pair L4+L5, and positive L6. Standalone element focal lengths in the data file describe each physical element isolated in air; they are not its in-situ contribution to the assembled lens. Recomputed from the final prescription, the cemented L2+L3 pair is net negative with an isolated EFL of −99.321847 mm, and L4+L5 is also net negative at −223.403106 mm. By contrast, the complete patent subsystems are net positive: subsystem I has an isolated EFL of 100.820930 mm and subsystem II 51.645258 mm.

The scaled surface-1-to-surface-10 vertex track is 31.075 mm. With the scaled published rear image spacing, the surface-1-to-image-plane distance is 67.275 mm. The computed BFD from surface 10 is 36.218075 mm, compared with the scaled source value 36.2 mm. Under the project definitions, total-length/EFL is 1.3454 and BFD/EFL is 0.7243, so neither the telephoto criterion $TL/EFL < 1$ nor the retrofocus criterion $BFD > EFL$ is met.

The patent labels the full r5-to-r6 separation as a *Blendenraum* but does not publish a physical stop coordinate or diameter. The model therefore splits the scaled 10.605 mm space at its midpoint and inserts the single STO 5.3025 mm from either neighboring refracting surface. Its semi-diameter, 8.833460 mm, is calibrated to the patent's f/2 target; the resulting f/2 agreement is consequently a construction constraint, not an independent measurement of the historical iris.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.67003, νd = 47.2. Glass: 670472 — barium-flint/high-index crown class (supplier not identified by patent). f = +61.406280 mm.

L1 is the air-spaced front element of patent subsystem I. Its front surface is appreciably stronger than its rear surface in the scaled model, giving the element positive standalone power while preserving the meniscus form shown in Fig. 1. The glass label is deliberately supplier-neutral: the patent publishes only the d-line coordinate, not a historical melt name.

### L2 — Positive Meniscus, Front Member of Cemented Pair D1

nd = 1.69347, νd = 53.5. Glass: LAC13 — compatible spectral proxy (historical supplier/melt unresolved). f = +36.387990 mm.

L2 is the positive member of the front cemented pair. The patent states that two lenses in the front exchangeable member are advantageously cemented to produce achromatization; Table A realizes that construction as L2 joined directly to L3. [CH 346706, p. 2, text immediately preceding Zahlentabelle A.]

Its relatively high Abbe number compared with L3 is a source fact from the patent table. The analysis does not infer a specific historical catalog melt or secondary-spectrum behavior from that coordinate alone.

### L3 — Negative Meniscus, Rear Member of Cemented Pair D1

nd = 1.66446, νd = 35.9. Glass: 664359 — BASF2-class barium flint (supplier not identified by patent). f = −23.252703 mm.

L3 supplies the stronger negative standalone power of D1. Together, L2 and L3 form a net-negative cemented assembly even though L2 is positive by itself. The direct glass-to-glass junction is preserved in the data model by assigning the cemented interface to the downstream element rather than inserting a synthetic cement layer.

The patent's achromatization statement supports discussing the pair as a chromatic-correction assembly, but the stored data contain only nd and νd. No nC, nF, ng, dPgF, or validated historical Sellmeier identity is available for L3, so no apochromatic or anomalous-partial-dispersion claim is made.

### L4 — Biconcave Negative, Front Member of Cemented Pair D2

nd = 1.63980, νd = 34.6. Glass: 640346 — TIM27/FD7/F51 dense-flint class (supplier not identified by patent). f = −17.500451 mm.

L4 begins the fixed rear subsystem II immediately after the diaphragm space. It has the strongest negative standalone power of the six physical elements. Its rear surface is the cemented interface into L5, so the pair must be interpreted as one coupled assembly when discussing the rear core of the design.

### L5 — Biconvex Positive, Rear Member of Cemented Pair D2

nd = 1.65844, νd = 50.8. Glass: 658508 — SSK5/BSM25/BACED-class crown (supplier not identified by patent). f = +22.517740 mm.

L5 is the positive partner of L4. Although its standalone focal length is positive, the complete L4+L5 cemented pair remains net negative in air because the negative contribution of L4 dominates the combined assembly. This distinction is important: the data-file `fl` value is an isolated element descriptor, while the pair result is calculated from the complete three-surface cemented system.

### L6 — Biconvex Positive Rear Element

nd = 1.74472, νd = 44.7. Glass: N-LAF2 — compatible spectral proxy (historical supplier/melt unresolved). f = +50.260740 mm.

L6 is the final air-spaced positive element of subsystem II. Its front surface is extremely weakly curved in the scaled prescription (R = +1179.685 mm) while its rear surface carries much stronger curvature. It therefore closes the double-Gauss sequence with positive standalone power without requiring a separate cemented partner.

As with L2, the catalog review found only a nearby modern glass-family neighborhood rather than a defensible exact historical melt. The final data uses a qualified catalog spectral proxy while preserving that historical uncertainty.

## Glass Identification / Selection

The patent indices and Abbe numbers are retained unchanged. Catalog curves are coordinate-compatible spectral proxies, not identification of the historical supplier, composition, or melt. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` is copied into the prescription, and no anomalous-dispersion or APO claim is inferred from the match.

| Element | Patent/model nd / νd | Spectral model |
| --- | --- | --- |
| L1 | 1.67003 / 47.2 | H-ZBaF52 (qualified catalog proxy) |
| L2 | 1.69347 / 53.5 | LAC13 (qualified catalog proxy) |
| L3 | 1.66446 / 35.9 | J-BASF2 (qualified catalog proxy) |
| L4 | 1.6398 / 34.6 | J-SF7 (qualified catalog proxy) |
| L5 | 1.65844 / 50.8 | J-SSK5 (qualified catalog proxy) |
| L6 | 1.74472 / 44.7 | N-LAF2 (qualified catalog proxy) |

## Focus Mechanism

CH 346706 Table A does not publish finite-object spacing rows, focus-group travel, or a mechanical focus law for the selected base prescription. The model accordingly uses `NO_INTERNAL_RECONSTRUCTION`: `var` is empty and every internal optical spacing remains at the published infinity-state geometry after scaling.

The secondary Exakta history reports a 0.8 m near-focus specification for the cited early Xenon 1.9/50 and describes a helicoid-type special mount. That information is retained only as bounded product metadata in `closeFocusM`; it is insufficient to determine whether the exact target variant translated the complete optical unit, how far it moved, or whether any internal spacing changed. No such motion is invented in the data.

## Verification Summary

The final data file was reloaded through a TypeScript-aware literal parser and independently recomputed with sequential height/reduced-angle tracing and an ABCD matrix check. Those methods agree to numerical tolerance. From the parsed final model, EFL is 50.003113 mm and BFD from surface 10 is 36.218075 mm. The scaled source references are 50.0 mm and 36.2 mm respectively, both reproduced within source-precision-aware tolerances.

The surface-by-surface Petzval sum, computed as $\phi/(n n')$, is +0.003875252611 mm⁻¹ under the stored radius-sign convention, corresponding to a signed reciprocal of about 258.048 mm. The neutral STO contributes zero to that sum.

The calibrated physical stop has a semi-diameter of 8.833460 mm and images through the front subsystem to an entrance-pupil semi-diameter of 12.500778 mm. Using the computed EFL gives f/2.000000. Because stop size was solved from the f/2 target, this is a calibration result rather than independent evidence for an unpublished diaphragm diameter.

The patent publishes no numerical semi-diameters. The authored values are modeled from 21 exact spherical-ray samples: the full on-axis pupil, representative ±13.5° off-axis bundles, and ±22.5° chief rays based on the bounded secondary 45° field correlation. The final SDs pass the defined sampled ray containment and the portable edge-thickness, actual-rim-slope, spherical-domain, and shared-gap intrusion checks. The geometry model should not be read as a full-pupil 45° coverage claim: the 45° figure is secondary correlation only, and marginal rays outside the authored sample can vignette against the synthetic SDs. These checks do not substitute for LensVisualizer's production render diagnostics, which remain an integration-stage operation.

The prescription is entirely spherical. There are no aspheric coefficients, diffractive phase terms, sensor-cover plates, filters, or inactive dummy surfaces in the implemented optical model.

## Sources and References

1. **CH 346706**, *Optisches System mit Auswechselgliedern zur Änderung des Abbildungsmaßstabes*, Jos. Schneider & Co., Optische Werke; inventor Günter Klemt. User-supplied scan `CH_346706_A.pdf`. Primary prescription: p. 2, Zahlentabelle A; architecture drawing: drawing sheet 1, Fig. 1 (PDF p. 5).
2. Schneider-Kreuznach, **“Patente in Optik und Feinmechanik seit 1913”**, manufacturer patent index: <https://schneiderkreuznach.com/de/industrieoptik/wissens-hub/patente>.
3. Photo but More, **“Schneider Objektive für Exakta”**, section “Xenon 1:1,9 / 50 mm”: <https://photobutmore.de/exakta/schneider/>. Secondary production-history evidence only.
4. OHARA, **S-TIM27 datasheet**: <https://staging.oharacorp.com/wp-content/uploads/2023/07/S-TIM27-2020-06.pdf>.
5. HIKARI, **J-BASF optical-glass catalog**: <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-basf/>.
6. SCHOTT, **optical-glass datasheets**: N-BAF10 <https://media.schott.com/api/public/content/20ac348ec0934bc78102504bf1403ffb?v=a501c2a4>; N-SSK5 <https://media.schott.com/api/public/content/08e2d61f4bca4d54adbcb8e1b7475046?v=5a469403>; N-LAF2 <https://media.schott.com/api/public/content/fe209361fc3544ac8daa39a286c5f41e?v=1f93ee20>.
7. HOYA, **optical-glass type list and cross-reference**: <https://www.hoya-opticalworld.com/english/products/kenma.html> and <https://www.hoya-opticalworld.com/japanese/products/crossreference.html>.
8. CDGM, **optical-glass database**: <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=17&url=database>.
9. SUMITA OPTICAL GLASS, **Optical Glass Data Book / download resources**: <https://www.sumita-opt.co.jp/en/download/>.

## Image-format reference

`imageFormat: "135-full-frame"` records the correlated production Xenon 50mm f/1.9’s 35 mm still-camera format. The [Schneider manufacturer catalog](https://www.pacificrimcamera.com/rl/00832/00832.pdf), “Schneider Interchangeable Lenses For 35mm Single Lens Reflex Cameras,” lists the six-element Xenon 1.9/50. The catalog documents Exakta and M42 production versions; exact Table A identification remains unconfirmed.


## Production mount assignment

The Schneider catalog, printed page 13, lists the six-element Xenon 1.9/50 in Exakta and Praktica/Pentax screw-mount versions. No DKL version or different-aperture Xenon is inferred. [Manufacturer source](https://www.pacificrimcamera.com/rl/00832/00832.pdf).

`lensMounts` records the correlated production installation; it does not establish that the patent example is the exact factory prescription or certify every body’s mechanical, metering or rangefinder compatibility.
