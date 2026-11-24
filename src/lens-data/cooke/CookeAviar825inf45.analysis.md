# Cooke Aviar 8¼ in f/4.5: GB 113,590 A, Example I

## Patent Reference and Lens Identification

**Patent:** GB 113,590 A  
**Inventor:** Arthur Warmisham  
**Applicant:** Taylor, Taylor & Hobson Limited, with Arthur Warmisham  
**Filed:** 27 November 1917  
**Accepted:** 28 February 1918  
**Title:** Improvements in Lenses  
**Example details:** Example I, normalized focal length 1.00; all dimensional values are multiplied by 209.55 to give millimetres for the documented 8¼ in (209.55 mm nominal) f/4.5 Aviar.

The [Cooke Compendium](https://cookeoptics.com/compendium/) dates the Series II f/4.5 Aviar to 1921–c.1963 and associates it with British patent 113590 and Arthur Warmisham. It describes “four separate glasses” without cement, with convex outer elements and double-concave inner elements. Its account of military use in 1916 predates the 1917 patent application.

The model follows Example I of the complete GB publication. The Compendium records a 1962 Burke & James advertisement for an 8¼ in f/4.5 Aviar covering 5×7 plates. This supports the focal length and format; it does not establish the exact factory prescription. Example II is a distinct design with heavier flint glasses and is not modeled here.

The comparable US 1,361,207 publication misprints r2 = −0.9152; GB Example I prints −0.8152, which is used here. The formal legal family relationship is not independently established.

## Optical Architecture

Four spherical, air-separated elements form an approximately symmetrical double objective. Positive outer elements enclose two negative inner elements. The elements carry the patent's designations I, II, III and IV, corresponding to element ids 1–4 from object to image. The source discusses arranging shallow faces toward the diaphragm and using lower-index negative glasses to improve field correction.

The glass indices, radii and spacings retain the patent's slight asymmetry. Its descriptions of aberration correction are design claims, rather than measured production performance. The central air interval is 0.0362 normalized units, or 7.58571 mm.

## Element-by-Element Analysis

### I: front positive element

I is biconvex positive: nD = 1.6116, V = 56.4, dense baryta crown source class with an SK1 spectral proxy; stored isolated-element focal length 75.878055 mm. The Sumita catalog row supplies wavelength dependence only; the historical supplier and melt remain unspecified. Its second radius is the GB value discussed above.

### II: front negative element

II is biconcave negative: nD = 1.5682, V = 43.4, Unmatched light flint class; stored isolated-element focal length −80.29956 mm. It is air-separated from I. Its diaphragm-facing surface is the shallower of its two curvatures.

### III: rear negative element

III is biconcave negative: nD = 1.5502, V = 45.8, light flint source class with an S-TIL1 spectral proxy; stored isolated-element focal length −88.38819 mm. The Ohara catalog row supplies wavelength dependence only; the historical supplier and melt remain unspecified. Its glass differs from II. The diaphragm-facing radius magnitude 0.5041 is larger than the rear-facing 0.4330 in the normalized table.

### IV: rear positive element

IV is biconvex positive: nD = 1.6116, V = 56.4, dense baryta crown source class with an SK1 spectral proxy; stored isolated-element focal length 75.878055 mm. The outer positive elements share the printed glass pair and the Sumita catalog proxy, but no exact historical glass, supplier or melt identity is established.

The stored element focal lengths derive from earlier rounded calculations, rather than patent-published values. Fresh paraxial calculation gives 75.87, −80.30, −88.38 and 75.87 mm to two decimal places.

## Glass Identification and Selection

The GB text explicitly defines nD for sodium D light and V as (nD − 1)/(nF − nC). The model retains the printed values with its existing helium-d reference setting; the sodium-D/helium-d distinction remains a spectral limitation. Full partial dispersion and measured chromatic performance are unknown.

The source calls the outer glasses dense baryta crown and the negative glasses light flint. These are source classes, not exact vendor catalog identifications. No index or Abbe number is adjusted to reduce the focal-length residual.

I and IV use the Sumita SK1 catalog row as a spectral proxy; III uses the Ohara S-TIL1 row. The engine keeps the printed index at each element's reference line and borrows only the catalog row's wavelength dependence. The printed nD/V pairs remain unchanged. The site's proxy tolerance selects rows whose Abbe number lies within about 0.25 of the printed value, with index within about 0.002. These are not exact matches and do not identify the historical glass, supplier or melt.

| Element | Printed nD / V | Spectral proxy (catalog vendor) | Catalog nd / νd | Δnd / Δν (catalog − printed) |
| --- | --- | --- | --- | --- |
| I | 1.6116 / 56.4 | SK1 (Sumita) | 1.61025 / 56.5 | −0.00135 / +0.10 |
| III | 1.5502 / 45.8 | S-TIL1 (Ohara) | 1.548141 / 45.784277 | −0.002059 / −0.015723 |
| IV | 1.6116 / 56.4 | SK1 (Sumita) | 1.61025 / 56.5 | −0.00135 / +0.10 |

II remains `Unmatched (nD 1.5682 / V 43.4)` because no catalog row lies within the Abbe window; its wavelength dependence uses the engine's Abbe fallback. The catalog proxies do not resolve the sodium-D/helium-d reference distinction or establish measured chromatic performance.

## Focus Mechanism

The model is infinity-only. Its terminal image interval, 193.370081 mm, is calculated from the GB prescription rather than printed as a back focal length. The sources cited here do not establish a finite-focus movement or retail minimum focus distance.

The calculated EFL is 210.884749523 mm, +0.637% relative to the nominal 209.55 mm. The catalog records marketing focal length 209.55 mm and design focal length 210.88 mm, the traced EFL rounded to two decimals. The residual arises from the patent's approximate unit-focal-length normalization and is retained without fitting. Using the US table's erroneous second radius instead gives EFL 226.512293 mm at the same scale.

## Aperture and Iris Assumptions

The patent specifies f/4.5 but gives neither clear apertures nor a numerical stop position. The inferred surface semi-diameters are 25.146 mm for I/IV, 23.6 mm for II and 23.2 mm for III. Figure 1 in GB PDF page 4 and US PDF page 1 supports the relative heights: the outer elements are tallest, followed by II and then III. The inner-element thicknesses are schematic, so the drawing does not establish absolute clear diameters. The inner elements have equal front and rear rim heights; uncertain drawn bevel details are not reconstructed. No rim or gap-clearance exception is applied.

The inferred iris lies at the midpoint of the 7.58571 mm central gap, leaving 3.792855 mm on either side. The calculated axial clearances from the full II/III optical rims to the iris plane are approximately 0.766890 mm and 1.213708 mm. The f/4.5 entrance pupil gives a physical iris radius of 20.320947254 mm. These are derived dimensions. The available f-stops through f/22 are display settings; a retail minimum aperture has not been established.

## Model Scope and Limitations

The model covers the 5×7 format's 109.25 mm image semi-height (218.5 mm diagonal), approximately 27.286873° half-field, with a clear corner chief ray. The patent gives no numerical field. Calculated coverage does not establish full pupil throughput, MTF, manufacturing quality or measured production performance.

At f/4.5 and infinity, calculated geometric pupil transmission is approximately 74.6% at that corner. This excludes the cosine-fourth illumination factor and losses from glass absorption or coatings. Real off-axis rim vignetting remains, principally at the rear outer element.

## Sources

- [Original GB113590](https://www.photo-china.net/pat/GB113590.pdf), complete four-page scan; Example I and explicit spectral definition on PDF page 2. Primary content on a secondary host.
- [Original US1361207](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/1361207), separately preserved, not substituted for the GB prescription.
- [Cooke Optics Compendium](https://cookeoptics.com/compendium/), manufacturer retrospective linking Aviar, Arthur Warmisham and British patent 113590; not exact retail example identity.
