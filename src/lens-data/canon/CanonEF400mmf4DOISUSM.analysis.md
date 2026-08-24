## Patent Reference and Design Identification

**Patent:** US 2002/0015231 A1  
**Application Number:** 09/799,058  
**Priority:** March 8, 2000 (JP 2000-063398)  
**Filed:** March 6, 2001  
**Published:** February 7, 2002  
**Inventor:** Hideki Ogawa  
**Assignee:** Not stated on the selected A1 publication  
**Title:** *Optical System Having a Diffractive Optical Element, and Optical Apparatus*  
**Embodiment analyzed:** Numerical Example 1

This analysis describes the `CANON EF 400mm f/4 DO IS USM` prescription represented by the final data file. US 2002/0015231 A1, Numerical Example 1, is treated here as the fixed production correlation. Canon does not identify this patent or numerical example in the cited product material, so the correlation is not presented as manufacturer confirmation.

Several independent facts make the selected example a close production correlate. Numerical Example 1 is a telephoto photographic system with a published focal length of 392.00 mm, F-number of 4.12, and full field of 6.32°. The verified model gives an image height of 21.643 mm at the 3.16° half-field, essentially the half-diagonal of the 36 × 24 mm format. Canon marketed the production lens as a 400 mm f/4 EF lens with a 6°10′ diagonal angle of view, and Canon's product block diagram identifies both a DO lens and a fluorite lens. The patent priority and filing dates also precede the lens's December 2001 market introduction by a short interval. These are convergent identification criteria rather than a literal claim that the production prescription is identical in every construction detail. [1][4][5]

The marketed production construction is 17 elements in 13 groups. The LensVisualizer model contains 15 refractive elements in 11 active air-separated groups because the patent's terminal plane-parallel plate is omitted from the active prescription and the patent's thin DOE microstructure is represented as surface phase data rather than ordinary macro lens elements. No one-for-one identity between the marketed 17/13 count and the patent macro table is asserted. [4][5]

Two source corrections are explicitly carried into the data. The selected A1 publication prints `r17 = +87.040 mm`; the same-application grant US 6,473,232 B2 and the direct divisional US 2003/0053212 A1 both print `r17 = -87.040 mm`, which is the value used by the model. The A1 and B2 print `r22 = +131.344 mm`, while the direct divisional prints `r22 = +131.844 mm`. Independent focal-length reconstruction supports the divisional value, and the model therefore uses `+131.844 mm`. The raw A1 values remain source facts; the substitutions are modeling corrections, not silent transcription changes. [1][2][3]

No prescription scaling is applied. The production marketing focal length remains 400 mm, while the verified design EFL stored in the data is 392.025203770699 mm. Likewise, the production aperture designation is f/4, while the modeled design F-number and `nominalFno` are 4.12.

The patent ends Numerical Example 1 with a 2.20 mm plane-parallel `nd = 1.51633` plate. Canon specifies a 52 mm drop-in filter for the production lens, but the patent does not identify its terminal plate as that filter. The model therefore treats the plate as an image-side filter/cover-plate normalization case rather than asserting a product-part identity. It is omitted from the active sequential prescription under the data specification, while its paraxial translation is preserved by a 65.507775640 mm air-equivalent spacing from surface 27 to the image plane.

## Optical Architecture

The patent explicitly describes the first embodiment as a telephoto-type photographic system (¶0033). The final model likewise satisfies the project's telephoto criterion: the normalized active track is 255.587775640 mm and the verified EFL is 392.025203771 mm, giving `TL/EFL = 0.651967713`. Because the back focal distance is much shorter than the EFL, the design is not retrofocus.

The active macro prescription contains 15 modeled refractive elements in 11 air-separated groups. Three conventional groups are cemented pairs: `D2` (L8–L9), `D3` (L10–L11), and `D4` (L13–L14). L1–L2 form the front `DO1` macro pair, but they are not labeled as a conventional cemented doublet because the patent describes the first-embodiment DOE as an adjacently laminated grating with a thin air layer between grating strata (¶¶0068–0084). Those microstructure layers are intentionally collapsed into the surface-2 diffractive interaction. The aperture stop lies between L7 and D2 at the patent's r14 position.

The pre-stop section begins with the large positive `DO1` front pair and alternates positive and negative refractive power through L7. This front block collects the f/4.12 beam, carries the diffractive phase at the L1/L2 junction, and brings a narrowing bundle to the stop. The post-stop section is a compact relay and correction train built from three cemented pairs, one negative singlet, and a final positive element. Independent block calculations give a positive pre-stop block and a net-negative active post-stop block, consistent with a telephoto power distribution.

The principal architectural distinction is not a geometric asphere but the diffractive phase applied at surface 2. The patent's design objective is to combine refractive and diffractive chromatic behavior while keeping incidence on the grating favorable across the field (¶¶0006, 0038–0048). The final data therefore treats the DO prescription as an optical interaction on a spherical base surface, not as aspheric sag.

The semi-diameters are not patent-published dimensions. They are modeling estimates constrained by the f/4.12 pupil and ray envelope, the patent section drawing, Canon's 128 mm maximum barrel diameter, and geometry checks. The physical stop radius of 12.918024673 mm is likewise a computed calibration rather than a source dimension.

## Element-by-Element Analysis

The focal lengths below are the standalone refractive thick-lens focal lengths stored in the final data and independently reproduced from the authored surfaces. They describe each macro element by itself in air and exclude the surface-2 diffractive phase from the individual L1/L2 values. They must not be read as in-situ contributions. For the conventional cemented pairs, the net group behavior is a property of the complete pair; the front DO macro pair likewise requires its diffractive surface power to be included before it is interpreted as a group. Every group's behavior in the finished lens also depends on surrounding separations and neighboring powers.

### DO1 — L1 + L2 Front Diffractive Pair

**L1:** `nd = 1.56384`, `νd = 60.7`. Glass: `S-BAL41-equivalent class (564607; vendor unproven)`. Standalone `f = +316.285 mm`.  
**L2:** `nd = 1.51633`, `νd = 64.1`. Glass: `S-BSL7-equivalent class (516641; vendor unproven)`. Standalone `f = +372.424 mm`.

L1 is a positive meniscus and L2 a biconvex positive element. They form the `DO1` macro pair, with surface 2 serving simultaneously as the L1/L2 macro junction and the diffractive surface. The patent's thin laminated-grating media are not expanded into ordinary sequential elements, so this macro junction must not be interpreted as a literal cement layer. The pair is the principal front collector in the modeled architecture.

The phase term adds diffractive optical power without changing the spherical outline used for edge-thickness and rim-slope geometry. The patent describes the first-embodiment DOE as an adjacently laminated grating formed between lens parts with approximately equal curvature and separated by a thin air layer (¶¶0068–0084). The LensVisualizer macro model does not expand those thin resin/air layers into additional sequential elements; it represents their first-order imaging action through the radial phase polynomial attached to surface 2.

### L3 — Positive Meniscus

**L3:** `nd = 1.51823`, `νd = 58.9`. Glass: `S-NSL3-equivalent class (518590; vendor unproven)`. Standalone `f = +231.924 mm`.

L3 continues the positive convergence established by the front DO pair after the first substantial air gap. Its placement and moderate positive power make it part of the front collecting system rather than a rear relay element. The patent does not assign L3 a separate named aberration function, so more specific attribution would be interpretive rather than source fact.

### L4 — Biconcave Negative

**L4:** `nd = 1.74950`, `νd = 35.3`. Glass: `S-LAM7-equivalent class (750353; vendor unproven)`. Standalone `f = -141.841 mm`.

L4 introduces strong negative power after the first three positive elements. In the modeled architecture it counterbalances the front positive block and contributes to the telephoto compression. Its lower Abbe number also gives it substantially different dispersion from the neighboring crown-like positive elements, but the available data do not support assigning a specific partial-dispersion mechanism.

### L5 — Positive Meniscus

**L5:** `nd = 1.48749`, `νd = 70.2`. Glass: `S-FSL5-equivalent class (487702; vendor unproven)`. Standalone `f = +202.336 mm`.

L5 is a low-index, relatively high-Abbe positive meniscus following L4. It restores positive convergence while maintaining a materially different dispersion from the preceding negative element. In system terms it belongs to the alternating positive/negative pre-stop correction train.

### L6 — Negative Meniscus

**L6:** `nd = 1.67270`, `νd = 32.1`. Glass: `S-TIM25-equivalent class (673321; vendor unproven)`. Standalone `f = -328.990 mm`.

L6 is a comparatively weak negative meniscus in standalone power. Its lower `νd` contrasts with L5 and L7. The element contributes to the pre-stop balance of longitudinal power and chromatic correction, but the patent does not isolate a specific aberration term controlled by L6.

### L7 — Fluorite-Class Negative Meniscus

**L7:** `nd = 1.43387`, `νd = 95.1`. Glass: `Fluorite (CaF2) class`. Standalone `f = -136.260 mm`.

L7 is a negative meniscus placed shortly before the stop. Its unusually low index and very high Abbe number identify a fluorite-class material in the data model; Canon's production block diagram independently shows a fluorite lens in the EF 400mm f/4 DO IS USM. The precise mapping of Canon's production fluorite element to this patent member is therefore a correlation inference, not a manufacturer statement that L7 is the production part. [4]

Because Example 1 publishes only `nd` and `νd`, the analysis does not assign L7 an anomalous-partial-dispersion value or claim apochromatic correction from the fluorite label alone.

### D2 — L8 + L9 Cemented Pair

**L8:** `nd = 1.80518`, `νd = 25.4`. Glass: `805254 class (vendor unresolved)`. Standalone `f = -70.506 mm`.  
**L9:** `nd = 1.48749`, `νd = 70.2`. Glass: `S-FSL5-equivalent class (487702; vendor unproven)`. Standalone `f = +51.468 mm`.

L8 is a negative meniscus and L9 a biconvex positive element, cemented at surface 16. The large dispersion contrast is a conventional achromatizing resource, but the cemented pair must be interpreted as one optical group rather than by adding the standalone focal powers. Positioned immediately behind the stop, D2 begins the compact rear correction and relay section.

### D3 — L10 + L11 Cemented Pair

**L10:** `nd = 1.76182`, `νd = 26.5`. Glass: `762265 class (vendor unresolved)`. Standalone `f = +42.350 mm`.  
**L11:** `nd = 1.80400`, `νd = 46.6`. Glass: `804465/804466 class (vendor unresolved)`. Standalone `f = -25.859 mm`.

L10 is biconvex positive and L11 biconcave negative, cemented at surface 19. Their strong opposing standalone powers make D3 a locally powerful correction group. The group lies close to D2 and L12, so its in-situ effect cannot be reduced to either element's isolated power.

### L12 — Biconcave Negative

**L12:** `nd = 1.80400`, `νd = 46.6`. Glass: `804465/804466 class (vendor unresolved)`. Standalone `f = -58.856 mm`.

L12 is a high-index biconcave negative singlet between D3 and D4. It adds negative power to the rear train and changes the vergence presented to the following cemented pair. The prescription does not identify it as a dedicated field flattener or focusing group, so those labels are not applied.

### D4 — L13 + L14 Cemented Pair

**L13:** `nd = 1.63980`, `νd = 34.5`. Glass: `S-TIM27 / 640345 class (vendor unproven)`. Standalone `f = +35.445 mm`.  
**L14:** `nd = 1.80400`, `νd = 46.6`. Glass: `804465/804466 class (vendor unresolved)`. Standalone `f = -48.016 mm`.

L13 is biconvex positive and L14 a negative meniscus, cemented at surface 24. As with D2 and D3, its system role comes from the paired interface and neighboring air spaces, not from a scalar sum of isolated powers. It forms the last cemented correction group before the final positive element.

### L15 — Final Biconvex Positive

**L15:** `nd = 1.51633`, `νd = 64.1`. Glass: `S-BSL7-equivalent class (516641; vendor unproven)`. Standalone `f = +91.120 mm`.

L15 is the final active refractive element. Its positive power converts the rear-group ray bundle toward the image plane after the alternating powers of D2, D3, L12, and D4. The modeled image plane lies 65.507775640 mm of air-equivalent distance behind surface 27 after normalization of the omitted plane plate.

## Glass Identification and Selection

The patent does not name glass vendors. The data therefore uses coordinate-compatible classes or six-digit codes rather than asserting that Canon purchased a particular OHARA, HOYA, Schott, HIKARI, CDGM, or Sumita melt. The optical-glass class assignments below reproduce the patent's `nd`/`νd` coordinates within the audited residuals, while the L7 coordinate is separately consistent with optical-grade CaF2. The fluorite entry is therefore treated as a crystal class rather than forced into an optical-glass catalog. [6][7][8]

| Data glass annotation | `nd` | `νd` | Elements | Status |
|---|---:|---:|---|---|
| `S-BAL41-equivalent class (564607; vendor unproven)` | 1.56384 | 60.7 | L1 | Catalog-equivalent class |
| `S-BSL7-equivalent class (516641; vendor unproven)` | 1.51633 | 64.1 | L2, L15 | Catalog-equivalent class |
| `S-NSL3-equivalent class (518590; vendor unproven)` | 1.51823 | 58.9 | L3 | Catalog-equivalent class |
| `S-LAM7-equivalent class (750353; vendor unproven)` | 1.74950 | 35.3 | L4 | Catalog-equivalent class |
| `S-FSL5-equivalent class (487702; vendor unproven)` | 1.48749 | 70.2 | L5, L9 | Catalog-equivalent class |
| `S-TIM25-equivalent class (673321; vendor unproven)` | 1.67270 | 32.1 | L6 | Catalog-equivalent class |
| `Fluorite (CaF2) class` | 1.43387 | 95.1 | L7 | Crystal class |
| `805254 class (vendor unresolved)` | 1.80518 | 25.4 | L8 | Six-digit class |
| `762265 class (vendor unresolved)` | 1.76182 | 26.5 | L10 | Six-digit class |
| `804465/804466 class (vendor unresolved)` | 1.80400 | 46.6 | L11, L12, L14 | Six-digit class |
| `S-TIM27 / 640345 class (vendor unproven)` | 1.63980 | 34.5 | L13 | Catalog-equivalent class |

No `nC`, `nF`, `ng`, or `dPgF` values are authored in the final data because Numerical Example 1 does not publish them. Consequently, this analysis does not claim apochromatic performance, anomalous partial dispersion, or a quantified secondary-spectrum correction. The glass discussion is limited to the published d-line index/Abbe coordinates and catalog-equivalence results. [6][7]

## Focus Mechanism

Canon specifies an inner-focusing system driven by USM and a closest focusing distance of 3.5 m for the production lens. These are product facts. [5]

Numerical Example 1, however, contains only the infinity prescription. It does not publish a finite-focus spacing table, a moving-group identity, a focus cam law, or a close-focus magnification state. The final data therefore has `var: {}` and records the focus status as `NO_INTERNAL_RECONSTRUCTION`. No internal group motion or focus travel is inferred from the production MFD.

The 3.5 m value is retained as `closeFocusM` for product metadata and user-interface context. It does not imply that the displayed prescription has been solved to 3.5 m.

## Chromatic Correction Strategy

The patent's central premise is that refractive and diffractive surfaces have chromatic behavior of opposite sign, allowing the diffractive element to participate in achromatization (¶¶0004–0007, 0090–0093). Example 1 combines that mechanism with a broad refractive glass palette and one fluorite-class element.

In the model, the front DO pair places the phase correction where the axial beam is still large. The remaining pre-stop sequence alternates positive and negative members with substantial differences in `νd`, while the rear section uses three cemented pairs with strong index/dispersion contrasts. This arrangement is consistent with distributed chromatic balancing, but the available data are insufficient to decompose the final longitudinal and secondary spectrum by material without line-index or validated Sellmeier data for every element.

The analysis therefore distinguishes the patent's qualitative achromatization principle from any stronger claim about APO behavior. The latter is not supported by the final data.

## Diffractive Optical Element

Surface 2 carries a `radial-polynomial` diffractive interaction. The authored optical-path polynomial is

`W(h) = -4.22716×10^-5 h^2 + 4.71244×10^-10 h^4`

with `h` and `W` in millimeters. These are the patent's Numerical Example 1 coefficients, corresponding to its `C1` and `C2` terms. The first-order paraxial diffractive power at the design order is positive.

The patent does not numerically state the reference wavelength `λ0` for Numerical Example 1. The data uses `referenceWavelengthNm: 587.6` as an explicitly disclosed d-line modeling inference, consistent with the patent's `nd`/`νd` notation and the independent grating-pitch check. The wavelength is therefore not presented as a printed patent value.

Patent ¶0084 gives an illustrative first-embodiment laminated DOE structure consisting of two UV-curable-plastic grating layers separated by a thin air layer. It states `nd = 1.6685`, `νd = 19.7`, and 5 µm height for the first layer; `nd = 1.5240`, `νd = 50.8`, and 7.5 µm height for the third layer; and a minimum 156 µm pitch at the 155th zone. Those microstructure values are physical DOE-construction data, not additional macro refractive elements in the LensVisualizer prescription.

Example 1 has no geometric aspherical surface. The patent's generic asphere equation is therefore not instantiated in the final data: `asph` is empty and no surface carries an `A` suffix. The diffractive polynomial must not be interpreted as an aspheric sag polynomial.

## Conditional Expressions

The patent lists optional preferred conditions for the diffractive surface (¶¶0049–0067).

For condition (1), `0 < |D/R| < 5`, with a preferred upper limit of 3, the patent's Table 1 gives **0.026** for Numerical Example 1. Independent recomputation from the selected prescription gives **0.0256135**, so the example satisfies both the stated and preferred upper bounds.

Condition (2) is `C1·P < 0`, where `P` is the refractive power of the base surface carrying the grating. The patent's own Table 1 prints **+6.29847×10^-9** for Numerical Example 1. Independent recomputation gives **+6.28308×10^-9**. The sign is therefore positive, so Example 1 does not satisfy this optional preferred condition even though the patent's general discussion advocates it. This is an internal feature of the published worked example, not a reason to substitute another embodiment.

## Image Stabilization

The production EF 400mm f/4 DO IS USM includes optical Image Stabilizer hardware, as reflected in the product name and Canon documentation. [4][5]

The selected patent is directed to the diffractive optical system and does not publish a decentering IS group, stabilization travel, or an alternate prescription state for stabilization. The final data therefore contains no reconstructed IS motion. No element in the model is assigned an IS displacement on the basis of the product name alone.

## Verification Summary

Independent computation of the final TypeScript prescription gives the numerical checks below. They are model results, not manufacturer specifications.

| Quantity | Verified model result |
|---|---:|
| Effective focal length | 392.025203771 mm |
| Design F-number | 4.120000000 |
| Entrance pupil diameter | 95.151748488 mm |
| Normalized active track | 255.587775640 mm |
| `TL/EFL` | 0.651967713 |
| Image height at 3.16° | 21.643081563 mm |
| Petzval sum, including DOE as separate surface power | 2.529755554×10^-5 mm^-1 |

The inferred semi-diameter model is also geometrically valid: minimum modeled edge thickness is 0.426687 mm, the maximum spherical rim angle is 62.1946°, and the tightest 90%-gap cross-gap clearance is 0.025078 mm. These values validate the authored geometry; they are not asserted as production mechanical dimensions.

The surface-2 pupil/incidence solution and the patent's Figure 11 are mutually consistent: tracing the paraxial entrance-pupil marginal ray through the exact spherical first two surfaces gives approximately -0.554° incidence at surface 2, compared with the patent's rounded -0.55° for the on-axis upper marginal ray. This supports the stop/pupil calibration without converting the computed stop diameter into a source claim.

## Sources and References

1. Hideki Ogawa, **US 2002/0015231 A1**, *Optical System Having a Diffractive Optical Element, and Optical Apparatus*, published February 7, 2002. https://patents.google.com/patent/US20020015231A1/en
2. Hideki Ogawa, **US 6,473,232 B2**, same application grant, published October 29, 2002. https://patents.google.com/patent/US6473232B2/en
3. Hideki Ogawa, **US 2003/0053212 A1**, direct divisional publication used to resolve the r22 family contradiction. https://patents.google.com/patent/US20030053212A1/en
4. Canon Camera Museum, **EF400mm f/4 DO IS USM** product record and block diagram. https://global.canon/en/c-museum/product/ef366.html
5. Canon U.S.A., **EF 400mm f/4 DO IS USM** support and technical specifications. https://www.usa.canon.com/support/p/ef-400mm-f-4-do-is-usm
6. HOYA, **Optical Glass Cross Reference**, used for six-vendor coordinate comparison. https://www.hoya-opticalworld.com/english/products/crossreference.html
7. OHARA, **Optical Glass Pocket Catalog**, used for coordinate-compatible class checks. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
8. Hellma Materials, **Calcium Fluoride (CaF2)** optical-material data, used to check the fluorite-class coordinate. https://www.hellma-materials.com/en/optical-materials/crystals-for-optics/calcium-fluoride/
