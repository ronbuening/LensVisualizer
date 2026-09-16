## Patent Reference and Design Identification

**Patent:** CH 479 879  
**Application Number:** 7502/68  
**Filed:** 15 May 1968, 16:00  
**Granted:** 15 October 1969  
**Published:** 28 November 1969  
**Inventors:** Ludwig Bertele; Jürgen Bertele  
**Applicants / patent holders:** Ludwig Bertele; Jürgen Bertele  
**Title:** *Photographisches Objektiv*  
**Embodiment analyzed:** Example 1

Swiss Patent CH 479 879 describes a four-element photographic objective intended preferably for an opening ratio of
1:2.8 and explicitly identifies a 13.5 cm form for the 24×36 mm format. The worked prescription is normalized to
`F = 100 mm`; the LensVisualizer model applies a uniform dimensional scale of 1.35 to represent the stated 135 mm form.
The patent table itself remains the prescription authority for radii, spacings, refractive indices, and Abbe values.
[Swiss Patent CH 479 879, p. 1; Example table on p. 2.]

The identification with the production S-Travenar 135mm f/2.8 is a research correlation rather than a manufacturer-
confirmed patent attribution. The main converging evidence is:

1. The patent text specifies a preferred 13.5 cm focal length, 1:2.8 opening ratio, and 24×36 mm coverage.
2. Manufacturer-authored Schacht literature lists an `S-Travenar 2,8/135` in the contemporary lens program.
3. The patent specifies four air-separated individual lenses, and the small manufacturer lens-system icon is visually
   consistent with a four-element layout, although it is not suitable as dimensional proof.
4. The patent’s 1968 filing and 1969 publication are not contradicted by the manufacturer program material, but that
   scan does not establish an exact product release date.

No located manufacturer source explicitly states that CH 479 879 Example 1 is the S-Travenar 2.8/135. The production
mount metadata is similarly normalized from the camera-system compatibility listed in the Schacht literature: the M42
and Exakta identifiers are catalog inferences from the named camera families, not mount-standard labels printed in the
patent.

## Optical Architecture

The modeled prescription contains four elements in four air-spaced groups and is all-spherical. In object-to-image
order the standalone element-power sequence is positive, positive, negative, positive. At the implemented 1.35× scale,
the independently recomputed thick-element focal lengths are approximately +133.780 mm, +110.837 mm, −46.934 mm, and
+146.440 mm for L1 through L4. These are isolated air-to-air element powers; they are not additive contributions to the
full-system focal length.

The two-element front packet is positive, with an isolated packet focal length of +60.156 mm, while the L3–L4 rear
packet is negative, with an isolated packet focal length of −87.438 mm. The first three elements together remain weakly
positive at +258.186 mm. The complete in-situ system, however, has a computed effective focal length of
135.011854 mm at the modeled infinity state. This distinction is important because packet and standalone powers quantify
local architecture, not the power each component would contribute independently inside the assembled lens.

From the first refracting vertex to the modeled image plane the optical track is 129.3975 mm, giving
`TL/EFL = 0.958416`. It therefore meets the project's quantitative telephoto criterion of `TL/EFL < 1`. The paraxial
rear focal distance from the r8 vertex is 68.493000 mm, which is less than the effective focal length, so the design does
not meet the project's retrofocus criterion.

The aperture stop is shown by the patent drawing in the `l3` air space between r6 and r7, visibly nearer L3, but the
source gives neither an axial stop coordinate nor a diaphragm diameter. The model places the stop 40% of the scaled
20.52 mm `l3` gap after r6, or 8.208 mm after r6 and 12.312 mm before r7. Its semi-diameter of 13.714051 mm is calibrated
so that the modeled entrance pupil produces f/2.8. Agreement with f/2.8 is therefore a model calibration, not independent
evidence for the physical production iris. [Swiss Patent CH 479 879, drawing sheet, p. 4.]

## Element-by-Element Analysis

### L1 — Positive Element

`nd = 1.52054, νd = 69.7.` Glass: `521697` phosphate crown; J-PKH1 compatible dispersion proxy, supplier unconfirmed.
`f = +133.780 mm.`

The patent identifies L1 simply as a converging first lens. Its relatively low refractive index and high Abbe number
place it at the low-dispersion end of this four-glass palette. The patent coordinate is retained. The catalog resolves J-PKH1 (1.51860 / 69.89), within
the existing compatibility bounds, as a supplier-neutral dispersion proxy. This is not identification of the
historical PK50-coordinate material or its manufacturer; verified legacy PK50 coefficients were not recovered.

L1 is part of the positive front packet. No specific spherical, coma, or chromatic correction role is attributed to it
beyond the source-stated positive power and the verified power distribution; the patent does not separately assign such
a correction function to this element.

### L2 — Positive Meniscus

`nd = 1.62041, νd = 60.3.` Glass: `620603` SK16/BSM16-class crown, supplier unconfirmed.
`f = +110.837 mm.`

The patent specifically describes L2 as a converging meniscus curved toward L1. Its optical coordinate is not unique to
one manufacturer: current catalog families including SCHOTT N-SK16, OHARA S-BSM16, HIKARI J-SK16, and CDGM H-ZK9B lie
at the same or very close `620603` coordinate. The model therefore uses a class label rather than promoting one of those
catalog equivalents to an historical supplier claim.

Together L1 and L2 form the positive front packet. The calculated packet power is reported separately from the individual
element powers because the air space between the lenses participates in the packet's net first-order behavior.

### L3 — Negative Meniscus

`nd = 1.72151, νd = 29.2.` Glass: `722292` dense-flint class, catalog-equivalent to OHARA S-TIH18; supplier unconfirmed.
`f = −46.934 mm.`

L3 is the sole negative element and has the largest standalone power magnitude in the four-element set. The patent states
that the more strongly curved surface faces the image side, which is consistent with the numerical prescription and the
source drawing. Its low Abbe number distinguishes it sharply from the two front crowns, but that contrast alone is not
sufficient evidence for a particular secondary-spectrum or apochromatic correction claim.

An exact current OHARA S-TIH18 coordinate match is useful as a catalog-equivalence check, not as proof that the original
lens used OHARA glass. The data therefore retains the six-digit/class identification and does not import supplier-specific
line indices into the prescription.

### L4 — Biconvex Positive

`nd = 1.72825, νd = 28.4.` Glass: `728284` SF10-class dense flint, supplier unconfirmed.
`f = +146.440 mm.`

The final element is positive and biconvex in the implemented prescription. Its 1.72825 / 28.4 coordinate is represented
by several closely related dense-flint catalog families, including SCHOTT SF10, HIKARI J-SF10, OHARA S-TIH10, and CDGM
ZF4-family candidates. As with L2 and L3, coordinate agreement does not establish historical supplier identity.

L4 follows the strong negative L3 across the stop-containing air space and completes the source-stated positive-positive-
negative-positive sequence. The isolated L3–L4 packet remains negative; the positive focal length of L4 should therefore
not be read as an independent measure of its in-situ contribution to the final 135.011854 mm system focal length.

## Glass Identification and Selection

The patent publishes only d-line refractive index and `γ`, interpreted here as `νd`; it does not identify glass suppliers
or publish C-, F-, or g-line indices, partial-dispersion data, or Sellmeier coefficients for the actual lens. Consequently,
the LensVisualizer data preserves class/code labels and does not claim APO or anomalous-partial-dispersion behavior.

| Element | Stored identification | nd | νd | Catalog comparison | Disposition |
|---|---|---:|---:|---|---|
| L1 | 521697 phosphate crown | 1.52054 | 69.7 | J-PKH1 compatible proxy | Supplier and historical melt unresolved |
| L2 | 620603 SK16/BSM16 class | 1.62041 | 60.3 | Multiple current vendor equivalents | Class retained; supplier non-unique |
| L3 | 722292 dense flint | 1.72151 | 29.2 | Exact current OHARA S-TIH18 coordinate | Equivalent only; supplier unproven |
| L4 | 728284 SF10-class dense flint | 1.72825 | 28.4 | Several close current equivalents | Class retained; supplier unresolved |

The palette spans two relatively low-dispersion positive front elements and two high-index, low-Abbe rear elements, one
negative and one positive. That distribution is directly visible in the published `nd` / `γ` values and the computed
power signs. The patent does not state a supplier-specific glass-selection rationale, so the analysis does not assign a
more specific chromatic design intent than those verified facts support.

## Focus Mechanism

The patent publishes one optical prescription and no finite-object focus state, variable-spacing table, minimum focus
distance, or mechanism-constrained internal motion. The model therefore uses `NO_INTERNAL_RECONSTRUCTION`: `var` is empty
and no internal group motion is synthesized.

The cited Schacht product-program literature identifies the S-Travenar 2.8/135 and its preset diaphragm but does not give
an authoritative exact-product minimum focus distance in the material used for this dossier. The required `closeFocusM` field therefore uses the static-model infinity sentinel `1e15`,
which is not a production minimum-focus-distance claim and supplies no focus motion. The analysis consequently makes no claim that production focusing was unit, inner, rear, or
floating focus.

## Verification Summary

Uniform scaling by 1.35 leaves refractive indices and Abbe values unchanged while multiplying every patent radius,
center thickness, air gap, and rear image-plane spacing by 1.35. There are no aspherical coefficients to transform. The
scaled prescription computes to an effective focal length of 135.011854 mm and a rear focal distance of 68.493000 mm from
the r8 vertex. The scaled form retains the source's telephoto ratio because uniform dimensional scaling leaves `TL/EFL`
unchanged.

The modeled stop produces an entrance-pupil semi-diameter of 24.109260 mm and a calibrated modeled f-number of
2.800000. Again, this confirms internal consistency of the chosen stop size with the patent's published 1:2.8 target; it
does not independently recover the undocumented physical diaphragm diameter.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.0014161261 mm⁻¹ for the implemented scale, corresponding
to a signed reciprocal radius of +706.151805 mm under the verifier's convention. The stop plane is optically neutral and
contributes zero to this sum.

The patent does not publish clear apertures. All surface semi-diameters in the model are therefore inferred geometry.
Portable checks on those modeled apertures give a minimum positive element edge thickness of 0.398539 mm, a maximum
spherical rim-slope angle of 47.655° at surface 6, and a tightest positive shared-gap sag-intrusion ratio of 0.875695 at
the r4–r5 air gap, below the modeled 0.90 gap limit. A denser independent meridional launch sweep using 8,001
incident-height samples shows that all 4,747 on-axis stop-passing samples clear the authored apertures. At 60% of the
24×36 diagonal half-field, 4,651 of 4,744 stop-passing samples clear; at the full 9.103274° diagonal half-field, 4,339
of 4,436 clear; and at the patent’s approximate 10° half-field, 4,259 of 4,357 clear. All authored-aperture clips in
these off-axis sweeps occur at L1, defining a narrow modeled mechanical-vignetting band. These finite one-dimensional
meridional samples are portable model validation, not a continuum proof or a production-render diagnostic.

## Sources and References

1. Swiss Confederation, **Swiss Patent CH 479 879**, *Photographisches Objektiv*, application 7502/68, filed
   15 May 1968, granted 15 October 1969, published 28 November 1969. Relevant locations: p. 1, description and
   `F = 100 mm` normalization; p. 2, Example prescription and `Abstand r8 – Bild = 50,7`; p. 4, optical drawing and
   undimensioned aperture-stop placement.
2. CONSTANTIN RAUCH KG, Geschäftsbereich: ALBERT SCHACHT, **SCHACHT-TRAVEMAT Gebrauchsanleitung /
   Objektiv-Programmübersicht**, program page listing `S-Travenar 2,8/135` and compatible camera systems:
   https://www.dan-hummel.de/images/technik/edixa/anleitung_travemat.pdf
3. SCHOTT Optical Glass catalog / N-SK16 search: https://www.us.schott.com/shop/advanced-optics/en/search/
4. SCHOTT Optical Glass catalog, SF10 data: https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d
5. OHARA S-BSM glass family: https://oharacorp.com/glass-type/s-bsm/
6. OHARA S-TIH18: https://oharacorp.com/glass/s-tih18/
7. OHARA comparative glass table: https://www.ohara-inc.co.jp/en/product/01002/
8. HIKARI / Nikon Business optical-glass catalog: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
9. HOYA Glass Cross Reference Index: https://www.hoya-opticalworld.com/english/products/crossreference.html
10. CDGM optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=19&url=database
11. SUMITA optical-glass data downloads: https://www.sumita-opt.co.jp/en/download/
12. Historical independent reference associating Schott PK50 with the 521697 coordinate:
    https://opg.optica.org/ao/abstract.cfm?uri=ao-8-3-685
