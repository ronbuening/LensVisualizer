# SCHNEIDER-KREUZNACH XENAR 50mm f/2.8 — DE 753329 Example 1

## Patent Reference and Design Identification

**Patent:** DE 753329\
**Patent effective:** 16 January 1935\
**Granted/announced:** 3 August 1944\
**Issued/printed:** 29 January 1951\
**Inventor:** No individual inventor named in the supplied patent\
**Applicant:** Jos. Schneider & Co., Optotechnische Gesellschaft in Berlin\
**Title:** Photographisches Objektiv\
**Embodiment analyzed:** Example 1 / Zahlentafel 1

The prescription is taken from Zahlentafel 1 of DE 753329. The patent describes a photographic objective of four air-separated members and Figure 2 labels five physical elements, L1 through L5, with refracting surfaces R1 through R9. The two front members are positive collecting members, the third member is a simple uncemented negative lens, and the image-side member is a cemented pair with a positive cemented interface at R8. [DE 753329, pp. 1–3, especially p. 3 Fig. 2.]

The production correlation is strong secondary correlation; not manufacturer-confirmed. Schneider-Kreuznach's current patent list identifies DE 753329 as a Schneider photographic-lens patent dated 16 January 1935, but it does not identify Example 1 as the production Xenar 2.8/50 formula. A 1937 period advertisement establishes the contemporary existence of a “Xenar 2.8 5 cm,” and a historical Exakta lens survey states that the prewar Xenar 2.8/5 cm became a five-element design in 1935. That secondary survey also describes the five elements as uncemented, which conflicts with the patent's explicit cemented R8 interface. The implemented model therefore follows the patent and retains the cemented rear member rather than altering the selected embodiment to fit the secondary description.

The marketed and patent apertures are deliberately separate. The historical product correlation is to a 50 mm f/2.8 Xenar, while Zahlentafel 1 publishes a relative opening of 1:2.9. The data file accordingly stores a 50 mm marketed focal length, an f/2.8 marketed aperture, and f/2.9 as the modeled design aperture. [DE 753329, p. 2, Zahlentafel 1.]

The source is a relative prescription. The verified implementation applies the uniform scale factor `s = 50.010318114776474` to the patent dimensions, yielding a computed EFL of `50.000000000002 mm`. No aspheric coefficients exist, so no coefficient scaling is involved.

## Optical Architecture

The design is a five-element, four-member photographic objective with the member sequence positive–positive–negative–positive. Members I, II, and III are single lenses; member IV is the cemented L4/L5 pair. The aperture space lies between the central negative member and the cemented rear member. This organization is stated in the patent and is also visible in Figures 1 and 2. [DE 753329, pp. 1 and 3.]

The verified standalone powers should not be confused with in-situ contributions. L1 and L2 are positive as isolated thick elements in air; L3 is strongly negative. L4 is negative and L5 positive as isolated components, while the actual cemented member IV has net positive power. The spaced combination of members I–III is net negative in the final model. These statements refer to the executed thick-element and grouped-matrix calculations for the final data revision, not to a claim that any single element has a uniquely assigned aberration-correction function.

The patent places particular emphasis on the positive cemented interface in member IV. Its condition states that the focal length of the cemented surface is less than four times the combined focal length of the other three lenses. Because the historical term for single-surface focal length is not numerically defined in the document, the verifier tested reduced, object-space, and image-space surface-focal conventions. The condition passes under all three when members I–III are treated as their spaced equivalent subsystem. [DE 753329, p. 1.]

Figure 1 shows an iris in the air space between L3 and member IV but provides no numerical stop station or diameter. The implemented `STO` is therefore a modeling inference, not a published surface. Its axial position is set at `0.715` of the R6–R7 aperture-space distance from R6, based on the rendered figure, while preserving the patent's complete Δ3 spacing. Its physical semi-diameter, `6.837945853623 mm`, is calibrated after that position is fixed so that the entrance pupil has semi-diameter `8.620689655172 mm` and the modeled aperture is f/2.9. Agreement with f/2.9 is a calibration constraint; it does not independently recover the historical diaphragm diameter.

## Element-by-Element Analysis

The focal lengths in this section are verified standalone thick-element focal lengths in air from the final scaled model. They are not in-situ member contributions. The stored `nd` and `νd` labels are the data schema's d-reference fields; the patent itself states only that its refractive indices refer to the “yellow ray,” without naming a modern spectral line.

### L1 — Biconvex Positive

`nd = 1.5890, νd = 61.2. Glass: 589612-class crown (supplier/melt unresolved). f = +35.512027666 mm.`

L1 is member I, the first positive collecting element named in the patent's four-member description. Its two convex surfaces give it positive standalone power and make it the strongest positive element among the two front single-lens members. The glass label is deliberately a coordinate class rather than a historical supplier identity; the patent provides only the refractive index and Abbe number. [DE 753329, pp. 1–2.]

### L2 — Positive Meniscus

`nd = 1.6375, νd = 56.1. Glass: S-BSM18 — compatible spectral proxy (historical supplier/melt unresolved). f = +111.372660357 mm.`

L2 is member II, the second positive collecting member. In the patent drawing it is a positive meniscus separated from L1 by the narrow Δ1 air space and from L3 by Δ2. Its standalone positive power is much weaker than L1's, but no specific aberration correction is assigned to it here because the patent does not isolate such a contribution. [DE 753329, pp. 1–3.]

### L3 — Biconcave Negative

`nd = 1.6045, νd = 37.8. Glass: F5 — compatible spectral proxy (historical supplier/melt unresolved). f = -18.614550353 mm.`

L3 is member III, the central negative lens. The patent describes the negative member as a simple, uncemented, unequal-biconcave dispersing lens. It is followed by Δ3, explicitly marked `Blendenraum` in Zahlentafel 1, placing the aperture region between L3 and the rear cemented member. [DE 753329, pp. 1–3.]

### L4 — Biconcave Negative Component of Member IV

`nd = 1.5145, νd = 54.7. Glass: KF3 — compatible spectral proxy (historical supplier/melt unresolved). f = -31.730170882 mm.`

L4 is the negative component of the image-side cemented member. Its rear surface is the R8 cemented junction into L5. In the data model that junction correctly carries the downstream L5 medium and element identity rather than inserting a fictitious cement layer. L4 alone is negative in air, but the member must be interpreted together with L5 when discussing the actual cemented group. [DE 753329, pp. 1–3.]

### L5 — Biconvex Positive Component of Member IV

`nd = 1.6025, νd = 59.5. Glass: N-SK14 — compatible spectral proxy (historical supplier/melt unresolved). f = +16.870777275 mm.`

L5 is the positive rear component cemented to L4 at R8. The complete L4/L5 member has verified net positive power and a cemented-member focal length of approximately `+33.024406641 mm`. This grouped value is distinct from L4 or L5 considered separately and from the member's in-situ action at the ray heights produced by the preceding optics. The patent's special cemented-interface condition applies at R8. [DE 753329, p. 1 and p. 3 Fig. 2.]

## Glass Identification / Selection

The patent indices and Abbe numbers are retained unchanged. Catalog curves are coordinate-compatible spectral proxies, not identification of the historical supplier, composition, or melt. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` is copied into the prescription, and no anomalous-dispersion or APO claim is inferred from the match.

| Element | Patent/model nd / νd | Spectral model |
| --- | --- | --- |
| L1 | 1.589 / 61.2 | S-BAL35 (qualified catalog proxy) |
| L2 | 1.6375 / 56.1 | S-BSM18 (qualified catalog proxy) |
| L3 | 1.6045 / 37.8 | F5 (qualified catalog proxy) |
| L4 | 1.5145 / 54.7 | KF3 (qualified catalog proxy) |
| L5 | 1.6025 / 59.5 | N-SK14 (qualified catalog proxy) |

The source says only “yellow ray”; `indexReference: "d"` remains a schema approximation. These proxies do not establish a precise He-d reference for the historical table.

## Focus Mechanism

DE 753329 publishes one static prescription. It gives no focus-state spacing table, no object-distance series, no moving-group description, no close-focus optical prescription, and no finite-conjugate magnification state. The data therefore uses `NO_INTERNAL_RECONSTRUCTION`: `var` is empty and no internal motion is inferred.

The required `closeFocusM = 0.75 m` field comes from the secondary prewar Exakta-variant correlation. It is catalog/UI metadata only. It does not define a modeled close-focus state, and it should not be generalized to every historical Xenar 2.8/50 installation because the fixed job card does not select one mechanical variant. For the same reason, the data leaves `lensMounts` and `imageFormat` unset.

## Verification Summary

The final model is a uniform 50 mm scaling of the selected patent example, with the one inserted stop and modeled semi-diameters disclosed above. Sequential reduced-angle tracing and an independently composed ABCD matrix agree for the final prescription. The implemented EFL is `50.000000000002 mm`.

The patent prints `p′o = 0.8186` relative units for the distance from the rear vertex to the Gaussian image plane. After uniform scaling, the authored source-derived value is `40.938446408756 mm`. The computed paraxial BFD from surface 9 is `40.929081982071 mm`, giving a residual of `-0.009364426685 mm`. The mismatch is retained rather than silently reconciled and lies within the scaled source-precision tolerance of `0.065469896115 mm`.

The semi-diameters are modeled because the patent publishes none. Their construction was checked for positive edge thickness, actual spherical rim slope, and shared-band cross-gap intrusion. An exact two-dimensional meridional spherical/Snell trace with `17` pupil samples at a representative `13.5°` field also remains within all authored apertures. That trace is a disclosed geometry stress test, not proof of the complete production image field or a substitute for a production renderer.

The source transcription used for the implementation reads `Δ1 = 0.00407` in Zahlentafel 1. This is a direct rendered-page reading of the supplied scan and is treated as a transcription resolution, not as a correction to the patent. [DE 753329, p. 2.]

The design is entirely spherical. No aspherical-surface section is required, and no conic or polynomial coefficients are present in the data.

## Sources and References

1. Reichspatentamt, **Patentschrift Nr. 753329, “Photographisches Objektiv”**, applicant Jos. Schneider & Co., Optotechnische Gesellschaft in Berlin. Patent effective 16 January 1935; grant announcement 3 August 1944; issued/printed 29 January 1951. Supplied scan, pp. 1–3. Zahlentafel 1 is on p. 2; Figures 1 and 2 are on p. 3.
2. Jos. Schneider Optische Werke GmbH, **Schneider-Kreuznach Optics Patents & Heritage Lens Brands**, https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/patents — manufacturer confirmation of DE 753329 as a Schneider photographic-lens patent, not confirmation of the Xenar 2.8/50 production attribution.
3. **Fotó, 2. évf. 5-6. sz. (1937. május-június)**, https://epa.oszk.hu/02200/02277/00015/pdf/EPA02277_Foto_1937_05_6.pdf — period advertisement listing “Xenar 2.8 5 cm.”
4. **Photo but More, Schneider Kreuznach-Objektive für die Exakta — Xenar f:2,8 F=5 cm S2,8**, https://photobutmore.de/exakta/schneider/ — secondary historical correlation for the prewar five-element Xenar; its statement that the five elements were uncemented conflicts with DE 753329 Example 1 at R8.
5. OHARA INC., **Glass Type / Comparative Table**, https://www.ohara-inc.co.jp/en/product/01000/; HOYA Corporation, **Optics Division**, https://www.hoya-opticalworld.com/english/; SCHOTT Advanced Optics, **Optical Glass Search**, https://www.us.schott.com/shop/advanced-optics/en/search/; HIKARI GLASS, **J-F optical glass catalog**, https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-f/; CDGM, **Optical Glass Database**, https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database; SUMITA OPTICAL GLASS, **Optical glass tables**, https://www.sumita-opt.co.jp/ja/products/preform.html — modern coordinate-comparison sources only; no historical supplier/melt assignment is made from them.
