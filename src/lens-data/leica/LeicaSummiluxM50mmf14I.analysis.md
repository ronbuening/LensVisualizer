## Patent Reference and Design Identification

**Patent:** DE 1 045 120 B
**Application Number:** L 28435 IX/42h
**Filed:** 24 August 1957
**Published:** 27 November 1958
**Inventors:** Otto Zimmermann; Gustav Kleineberg; Eugen Hermanni
**Applicant:** Ernst Leitz GmbH
**Title:** *Fotografisches Objektiv*
**Embodiment analyzed:** Example 1 — the DE publication calls the worked prescription an *Ausführungsbeispiel* without a visible numerical label; the corresponding US family publication identifies the first prescription as “Example 1.”

DE 1 045 120 B describes a Gauss-type photographic objective normalized to `f = 100`, with a 45° full image angle and a relative aperture of f/1.4. The prescription has seven glass elements in five air-separated members. The supplied drawing sheet shows the same topology as the numerical table: a positive front singlet, two cemented central members, and two positive rear singlets. [DE 1 045 120 B, PDF pp. 1–3; drawing sheet on PDF p. 3.]

The production-lens identification is a convergent correlation rather than a manufacturer-confirmed patent attribution. Four points support it:

1. The patent was filed by Ernst Leitz in 1957 and published in 1958 for an f/1.4, 45° seven-element/five-member objective, immediately before the first Summilux-M 50 mm f/1.4 appeared in 1959. [DE 1 045 120 B, PDF p. 1; Leica Camera AG, “Leica Summilux-M 50 f/1.4,” 20 February 2025.]
2. A Leitz dealer catalogue dated October 1961 lists catalogue no. 11 114 F as `SUMMILUX f/1.4 50 mm`, bayonet mount, 45° angle of view, seven elements, and five components. [Ernst Leitz GmbH, *General Catalogue for Leica Dealers*, October 1961, p. 89.]
3. The US family publication carries the same inventors and corresponding prescription and supplies the “Example 1” label used for this model. [US 3,012,476 A.]
4. Leica’s 2025 historical release states that its modern reinterpretation follows the *second* Summilux-M 50 f/1.4 optical calculation used from 1962–2004. That distinction prevents the later formula and its modern mechanics from being substituted for the 1957 prescription analyzed here. [Leica Camera AG, 20 February 2025.]

The LensVisualizer model uniformly scales the patent normalization by `s = 0.5` to the marketed 50 mm class. This is a nominal 50/100 scale, not a correction chosen to force the rounded patent table to exactly 50 mm. Recalculation from the final data gives an e-line effective focal length of 49.8113 mm, while `focalLengthMarketing` remains 50 mm.

## Optical Architecture

The objective is a five-member Gauss-type design with member power signs `+ / − / − / + / +`. The front and two rear members are positive singlets. The two central members are cemented pairs whose net standalone powers are negative. The model therefore distinguishes the individual element powers from the net powers of the cemented members rather than treating each cemented constituent as an independent air-spaced lens.

In the scaled model, the first member has a standalone focal length of +74.3641 mm. The first cemented central member, L2+L3, has a net standalone focal length of −153.143 mm; the second, L4+L5, is weaker at −385.323 mm. The two rear singlets have standalone focal lengths of +85.9539 mm and +108.8195 mm. These values are paraxial standalone-air quantities computed from the final model; they do not by themselves assign aberration-correction roles to the members.

The patent places the diaphragm topologically between the two negative central members but gives neither a numerical axial coordinate nor a physical diameter. The model therefore inserts one `STO` plane at the midpoint of the scaled 10.125 mm central air gap. Its semi-diameter is calibrated after that position is fixed so that the modeled entrance pupil produces f/1.4. The resulting aperture agreement is a model calibration, not independent evidence for the manufactured iris geometry.

All twelve refracting surfaces are spherical. No aspheric or diffractive surface is present in the patent prescription or the implemented model. No cover glass, filter, dummy plane, or other inactive optical plane is removed from the source sequence because none is tabulated in the selected example.

## Element-by-Element Analysis

### L1 / Element I — Positive Meniscus

**ne = 1.79128, νe = 47.4. Glass: Unmatched (Leitz rare-earth borate glass; composition published in DE1045120). Standalone f = +74.364 mm.**

L1 is the object-side positive singlet and the strongest positive air-separated member in the paraxial model. Its index and Abbe coordinate are retained in the patent’s native e-line convention rather than converted to d-line values. The patent separately publishes a glass composition for this material, which is also used by L6 and L7. No modern supplier identity is assigned to that proprietary historical composition. [DE 1 045 120 B, PDF p. 1.]

### D1 / L2 + L3 — First Cemented Negative Member

**L2: ne = 1.64515, νe = 57.8. Glass: LAK6 class (coordinate-compatible spectral proxy; native e 1.64515/57.8; supplier/melt unproven). Standalone-air f = +43.361 mm.**
**L3: ne = 1.69416, νe = 30.9. Glass: SF8/ZF10 class (supplier unconfirmed). Standalone-air f = −27.535 mm.**

L2 and L3 share the patent surface `r4`, implemented as surface `4`, with the downstream medium and element identity assigned to L3. The pair’s net standalone member focal length is −153.143 mm even though L2 is positive when evaluated by itself in air. This is why the individual `fl` values should not be read as the in-situ power of the cemented member.

The L2 coordinate has close later-Leitz class evidence but no demonstrated 1957 supplier or melt identity, so LAK6 is used only as a coordinate-compatible spectral proxy. L3 lies closely in the historical SF8/ZF10 coordinate class, but the model likewise stops at class-level identification rather than asserting a supplier. [DE 1 259 027 B.]

### D2 / L4 + L5 — Second Cemented Negative Member

**L4: ne = 1.67158, νe = 32.9. Glass: H-ZF39 / S-TIM39 class (supplier unconfirmed). Standalone-air f = −19.311 mm.**
**L5: ne = 1.74793, νe = 44.7. Glass: LAF2 / S-LAM2 class (supplier unconfirmed). Standalone-air f = +23.983 mm.**

L4 is a biconcave negative element and L5 a biconvex positive element. They share the patent surface `r7`, implemented as surface `7`, and together form a weak negative cemented member with a standalone focal length of −385.323 mm. As with D1, the member result is the relevant quantity when describing the cemented pair’s net power; the separate air focal lengths characterize the constituents only.

The L4 and L5 glass labels are coordinate classes. CDGM H-ZF39 is a close modern coordinate comparison for L4 and is cross-referenced to the OHARA S-TIM39 family; HIKARI J-LAF2 is a close comparison for L5 and lists similar LAF2-family types. Those cross-references support class descriptions, not a claim about the historical Leitz supplier. [CDGM optical-glass database; HIKARI J-LAF2 datasheet.]

### L6 / Element VI — Biconvex Positive

**ne = 1.79128, νe = 47.4. Glass: Unmatched (Leitz rare-earth borate glass; composition published in DE1045120). Standalone f = +85.954 mm.**

L6 is the first of the two image-side positive singlets and uses the same proprietary high-index glass coordinate and published composition as L1. Its standalone power is 0.5795 of the complete objective’s paraxial power when both are evaluated according to the patent condition used by the verifier. This value lies inside the patent’s 0.40–0.70 interval for each of the two rear positive members. [DE 1 045 120 B, PDF pp. 1–2.]

### L7 / Element VII — Biconvex Positive

**ne = 1.79128, νe = 47.4. Glass: Unmatched (Leitz rare-earth borate glass; composition published in DE1045120). Standalone f = +108.819 mm.**

L7 is the final positive singlet. Its standalone power is 0.4577 of the complete objective power under the same calculation, also within the patent’s 0.40–0.70 interval. L6 and L7 are separated by only 0.25 mm in the scaled model, but they remain distinct air-separated members rather than a cemented pair.

## Glass Identification and Selection

The patent prescription uses native `ne`/`νe` coordinates. The data therefore sets `indexReference: "e"` for every element and retains the published values in the schema’s historical `nd`/`vd` slots. No d-line conversion is applied.

| Elements | Native `ne / νe` | Implemented glass treatment | Evidence level |
|---|---:|---|---|
| L1, L6, L7 | 1.79128 / 47.4 | Unmatched Leitz rare-earth borate glass | Patent composition published; no public historical supplier identity established |
| L2 | 1.64515 / 57.8 | LAK6 spectral proxy | Native-e coordinate match; exact 1957 melt unresolved |
| L3 | 1.69416 / 30.9 | SF8/ZF10 class | Strong coordinate-class match; supplier unconfirmed |
| L4 | 1.67158 / 32.9 | H-ZF39 / S-TIM39 class | Strong coordinate-class match; supplier unconfirmed |
| L5 | 1.74793 / 44.7 | LAF2 / S-LAM2 class | Strong coordinate-class match; supplier unconfirmed |

The selected patent publishes no `nC`, `nF`, `ng`, `dPgF`, or Sellmeier coefficients for these elements. The final data consequently carries none of those fields. Runtime chromatic interpretation uses compatible catalog curves for L2–L5 and Abbe fallback for the three composition-specific Leitz glasses; the model does not support an apochromatic or anomalous-partial-dispersion performance claim.

## Focus Mechanism

The optical prescription is represented only at the published infinity state. DE 1 045 120 B gives no finite-focus spacing table, focus-group displacement, or other information sufficient to reconstruct an internal focusing law. The data therefore uses `NO_INTERNAL_RECONSTRUCTION`, with an empty `var` object and no modeled internal movement.

The `closeFocusM` value of 1.0 m is product metadata, not an optical state derived from the patent. The October 1961 Leitz dealer catalogue specifies rangefinder coupling from infinity to 3 ft 4 in and describes a non-rotating focusing mount for catalogue no. 11 114 F. Because that catalogue date lies at the transition between the first and second Summilux optical calculations, the value is used only as historical product context. It is not used to invent a close-focus prescription for DE1045120. [Ernst Leitz GmbH, *General Catalogue for Leica Dealers*, October 1961, p. 89; Leica Camera AG, 20 February 2025.]

## Verification Summary

The implemented prescription applies a uniform scale of 0.5 to every source radius and axial spacing. Because the source is entirely spherical, there are no aspheric coefficients to rescale. The terminal image distance is not a published patent spacing: surface 12 carries the scaled paraxial e-line back focal distance, 27.2111 mm, so the model has a total first-surface-to-image track of 70.9611 mm.

Independent ABCD and sequential height/reduced-angle calculations from the parsed final data agree to floating-point tolerance. They give EFL = 49.8113 mm and a surface-by-surface Petzval sum of +0.00495334 mm⁻¹ using `φ/(n·n′)` at each refracting surface.

The aperture stop is an explicit modeling inference. It divides the scaled central gap into 5.0625 mm before and after `STO`; the 10.8902 mm stop semi-diameter is then calibrated to a modeled f-number of 1.400000. That equality verifies the calibration procedure, not the physical diameter of the production diaphragm.

The patent also omits clear semi-diameters. The authored `sd` values are modeled apertures selected to contain the project’s documented default visible ray fans while satisfying portable edge-thickness, spherical rim-slope, and shared-gap checks. Exact spherical tracing of those default fans leaves a minimum radial margin of 0.5244 mm. A full-field chief ray at ±22.5° clears the modeled surfaces, but sampled full-field pupil rays show clipping; the modeled semi-diameters therefore do not establish production vignetting or production clear apertures. Production render-trim diagnostics remain an integration-scope check.

## Conditional Expressions and Source Discrepancies

The patent states numerical conditions for the two cemented interfaces and for the rear positive members. Recalculation from the selected table preserves two small prose/table discrepancies instead of changing the prescription to force agreement.

- At `r4`, the table gives a normalized cemented-interface value of +0.0326529, while the patent prose prints approximately +0.031. The calculated value still lies inside the stated +0.02 to +0.06 interval.
- At `r7`, the table gives +0.0935306, while the prose prints approximately +0.095. The calculated value still lies inside the stated +0.05 to +0.12 interval.
- The first inter-member air gap gives `a1/f = 0.025`, satisfying the patent condition that it exceed 0.02.
- L6 and L7 both retain `ne = 1.79128` and `νe = 47.4`, inside the patent’s respective 1.70–1.80 and 40–50 ranges.
- Their standalone-power fractions are 0.5795 and 0.4577 of the complete objective power, respectively, each inside the stated 0.40–0.70 band.

The table-derived values govern the implemented prescription. The differing prose approximations remain source discrepancies rather than being treated as corrected patent data. [DE 1 045 120 B, PDF pp. 1–2.]

## Sources and References

1. **DE 1 045 120 B, “Fotografisches Objektiv.”** Deutsches Patentamt; filed 24 August 1957; published 27 November 1958. Supplied three-page scan. Prescription and conditions: PDF pp. 1–2; optical drawing: PDF p. 3.
2. **US 3,012,476 A, “Photographic objective.”** Corresponding family publication used only for family terminology, the Hg-e convention, and the “Example 1” label: https://patents.google.com/patent/US3012476A/en
3. **Leica Camera AG, “Leica Summilux-M 50 f/1.4.”** 20 February 2025. Historical/product context and explicit statement that the modern reinterpretation follows the second 1962–2004 optical calculation: https://leica-camera.com/en-US/press/leica-summilux-m-50-f14
4. **Ernst Leitz GmbH, *General Catalogue for Leica Dealers*.** October 1961, p. 89. Manufacturer-origin historical catalogue; scan: https://www.pacificrimcamera.com/rl/03496/03496.pdf
5. **LFI, “Summilux 50 mm f/1.4 (I).”** 11 March 2014. Historical context on the first Summilux and Leitz-developed glass: https://lfi-online.de/en/stories/summilux-50-mm-f-1-4-i-19096.html
6. **CDGM ZF10 datasheet.** Coordinate comparison for the L3 class: https://www.cdgmgd.com/webapp/pdf/ZF10.pdf
7. **CDGM H-ZF39 datasheet.** Coordinate comparison for the L4 class: https://www.cdgmgd.com/webapp/pdf/H-ZF39.pdf
8. **HIKARI J-LAF2 datasheet.** Coordinate comparison for the L5 class: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/LAF/J_LAF2.pdf
9. **HIKARI J-LASF014 datasheet.** Modern coordinate comparison for the proprietary L1/L6/L7 material; not used as a historical identity: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/LASF/J_LASF014.pdf
10. **DE 1 259 027 B, “Glas, insbesondere als Werkstoff für optische Bauelemente.”** Later Ernst Leitz glass patent used only as class-level evidence for a crown near `ne = 1.6451`, `νe = 57.8`; it does not identify the 1957 melt: https://patents.google.com/patent/DE1259027B/en
11. **CDGM optical-glass database.** Cross-reference row for H-ZF39 and OHARA S-TIM39; supplier-equivalence evidence only: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=21&url=database
12. **OHARA S-LAM2 datasheet.** Independent family-coordinate comparison for the L5 class; not a historical supplier attribution: https://oharacorp.com/wp-content/uploads/2023/07/S-LAM2-2020-06.pdf
