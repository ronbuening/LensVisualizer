# SCHACHT TRAVENAR 90mm f/2.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2,721,501  
**Filed:** March 8, 1954  
**Granted:** October 25, 1955  
**Inventor:** Ludwig Bertele  
**Assignee:** None named on the US grant  
**Title:** *Three-Component Objective*  
**Embodiment analyzed:** Sole numerical table headed “Example” (job-card Example 1)

The implemented prescription is based on the sole worked numerical example in US 2,721,501. The patent describes a
three-member photographic objective: a single positive front lens, a cemented two-lens middle member, and a single
positive rear lens. Its numerical example is normalized to a focal length of 100 units and states an aperture ratio of
1:2.8. The patent further describes useful image angles up to about ±15°. [US 2,721,501, pp. 1–2; numerical “Example”
table and claim on p. 2.]

The association with the production Schacht Travenar 90mm f/2.8 is strong but remains a research correlation rather than
a manufacturer-confirmed patent attribution. The convergent evidence is:

1. The patent example and Schacht literature both specify four lenses in three groups/members.
2. Both identify an f/2.8 maximum aperture.
3. Uniformly scaling the corrected 100-unit patent prescription by 0.9 gives a verified EFL of 90.0123 mm, consistent
   with the marketed 90 mm focal length.
4. The patent’s approximately ±15° image-angle capability is consistent with Schacht’s published 28° angle for the
   24 × 36 mm format.
5. The 1954 filing and 1955 grant precede the retained 1966 Schacht leaflet; this establishes chronology but not the product’s first-release year.

Period Schacht literature additionally specifies 1 m to infinity focusing and documents an Exakta/Exa version. No
primary Schacht source retained in the dossier explicitly names US 2,721,501 or identifies Ludwig Bertele as the designer
of the production Travenar 90mm f/2.8. The data file therefore records the match as a strong inference, not as a
manufacturer statement.

## Optical Architecture

The design is a four-element, three-group, all-spherical objective with a positive–negative–positive member-power
sequence. L1 is the positive front member; L2 and L3 form the cemented middle member; L4 is the positive rear member.
Seven refracting surfaces are present. The stop lies in the long air space between the cemented middle member and L4,
matching the patent drawing, although its exact axial position is not dimensioned by the source.

The final scaled model has a verified Gaussian EFL of 90.0123 mm. Its vertex track from surface 1 to surface 7 is
43.965 mm, and its computed infinity BFD from the surface-7 vertex is 42.9294 mm, giving a surface-1-to-image total track
of 86.8944 mm. The resulting `TL/EFL` ratio is 0.96536, so the model satisfies the project’s strict telephoto criterion
(`TL/EFL < 1`). Its `BFD/EFL` ratio is 0.47693, so it is not retrofocus.

The standalone cemented L2+L3 member is net negative, with a focal length of −136.938 mm. In the complete objective it
reduces the convergence established by L1, after which L4 adds convergence again. This statement refers to the verified
in-situ reduced-angle trace, not merely to the signs of the standalone element powers.

The patent’s description emphasizes the three separated members and the cemented middle meniscus rather than an
aspherical or moving-group correction strategy. The implemented model likewise contains no aspheres, diffractive
surfaces, stabilization group, or reconstructed internal focus motion.

## Element-by-Element Analysis

### L1 — Front Positive Meniscus

`nd = 1.66994, νd = 47.2. Glass: BAF10 / S-BAH10 class (supplier unconfirmed). f = +97.565 mm.`

L1 is the single-lens front member and is a positive meniscus in the implemented sign convention. Its standalone power is
positive, and the full-system trace shows that it supplies the initial convergence of a collimated axial bundle. The
class-level glass annotation is derived from modern catalog-coordinate agreement; it is not evidence that Schacht or the
patent used a particular BAF10-family supplier or melt.

The patent table prints the rear radius of this element with a minus sign. That printed sign is retained in the evidence
record but is not used in the implemented prescription; the correction is discussed under “Patent Conditions, Source
Correction, and Scaling.”

### L2 — Cemented Positive Lens

`nd = 1.56536, νd = 55.8. Glass: Unmatched (nd=1.56536, νd=55.8; nearest BAK4/BAL14 family lies outside the project Δn window). f = +38.305 mm.`

L2 is the positive, biconvex component of the cemented middle member. Its rear surface is the cemented interface with L3,
so the medium following that surface is the L3 glass rather than air. Although L2 is strongly positive as an isolated
thick element, it must not be interpreted independently of its negative cemented partner when describing the middle
member’s system role.

No modern catalog glass checked in the retained authoritative-catalog review reproduces the patent’s `nd/νd` pair within the project’s accepted
index window. The data therefore keeps an explicit `Unmatched (...)` annotation instead of forcing a named catalog glass.

### L3 — Cemented Negative Lens

`nd = 1.68981, νd = 31.2. Glass: SF8 / S-TIM28 class (supplier unconfirmed). f = −23.255 mm.`

L3 is the biconcave negative component cemented directly to L2. It has the strongest-magnitude standalone element power
in the four-element prescription. The computed ratio `f_L3/f` is −0.258384 for the normalized design, reproducing the
patent’s printed value of −0.258 within source precision.

The complete L2+L3 cemented member remains negative despite L2’s positive standalone power. In the collimated in-situ
trace, that member reduces the convergence created by L1. This distinction between L3 alone, the cemented member, and the
member’s behavior inside the full objective is important: the three quantities are related but are not interchangeable.

### L4 — Rear Positive Meniscus

`nd = 1.72747, νd = 28.4. Glass: SF10 / ZF4 / FD10 class (supplier unconfirmed). f = +123.119 mm.`

L4 is the single positive rear member. In the full-system trace it adds convergence after the negative middle member,
bringing the collimated bundle to the final image plane. The patent claim describes the third member as a single
collective lens made from glass of strong color dispersion; the example’s `νd = 28.4` is consistent with that source
description. [US 2,721,501, p. 2, claim and numerical Example.]

The catalog string again denotes a coordinate class rather than a proven historical supplier. No line-index or partial-
dispersion data for the actual patent melt is available in the source.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for the four glasses. It does not publish `nC`, `nF`,
`ng`, `PgF`, or `dPgF`. The retained catalog review therefore uses modern authoritative catalogs only to identify
coordinate classes or to establish that a defensible named match is unavailable.

| Element | Patent `nd` | Patent `νd` | Data-file glass annotation | Evidence status |
|---|---:|---:|---|---|
| L1 | 1.66994 | 47.2 | BAF10 / S-BAH10 class | Class-level equivalent; supplier unconfirmed |
| L2 | 1.56536 | 55.8 | Unmatched | No accepted modern named match within the project Δn window |
| L3 | 1.68981 | 31.2 | SF8 / S-TIM28 class | Class-level equivalent; supplier unconfirmed |
| L4 | 1.72747 | 28.4 | SF10 / ZF4 / FD10 class | Class-level equivalent; supplier unconfirmed |

These labels should not be read as historical melt identifications. In particular, the OHARA `S-` family designations
are kept distinct from `L-` family names. Because the patent does not provide line indices or partial dispersion for the
actual melts, the analysis does not claim apochromatic correction, anomalous partial-dispersion behavior, or a verified
historical Sellmeier model.

## Focus Mechanism

Schacht literature gives a focusing range from 1 m to infinity, but neither the patent nor the retained manufacturer
material specifies the optical motion that produces that range. The prescription therefore has focus status
`NO_INTERNAL_RECONSTRUCTION`.

The data file keeps the patent-derived infinity prescription fixed and authors no variable internal spacings. The
`closeFocusM: 1.0` field is product metadata only. It is not a reconstructed close-focus optical state and does not imply
unit focus, inner focus, or any other specific mechanical law.

## Patent Conditions, Source Correction, and Scaling

The numerical table on patent p. 2 prints `r2 = −181.91`. With that sign, independent paraxial tracing gives an EFL of
57.1412 source units instead of the stated 100-unit normalization, and the patent’s printed curvature expression evaluates
to 6.23918 rather than 5.14. The source value is therefore preserved as printed evidence but treated as an apparent source
error in the implemented optical model.

Changing only that radius to `r2 = +181.91` resolves both contradictions. The corrected normalized prescription gives an
EFL of 100.0137 source units and

`f(1/r1 + 1/r3 − 1/r2) = 5.13973`,

which agrees with the printed 5.14 relation within the precision of the table. The optical section on patent p. 1 also
shows L1 with the meniscus orientation consistent with the corrected sign. No other patent prescription value is altered
for this correction.

The corrected normalized source model also reproduces the two other principal numerical conditions used in the patent:

- `f_L3/f = −0.258384`, versus the printed −0.258;
- `(d2 + d3)/f = 0.1655`, within the claim’s 0.13–0.20 interval.

The claim’s wording that the third-lens focal length is “smaller than −0.30 f” is sign-ambiguous in ordinary mathematical
language. The implemented analysis therefore reports the numerical example and its verified ratio rather than silently
rewriting the claim.

For correlation with the 90 mm production lens, every dimensional value in the corrected 100-unit model is uniformly
scaled by `s = 0.9`; refractive indices and Abbe numbers are unchanged. There are no aspherical coefficients to transform.
The scale is tied to the patent’s stated 100-unit normalization and the marketed 90 mm focal length; it is not fitted to
force the rounded prescription to exactly 90.000 mm.

## Modeling Disclosures and Verification

The patent drawing places diaphragm B1 somewhere inside the long `l2` air space but gives neither an exact stop position
nor a physical diaphragm diameter. The implemented stop is therefore a modeling inference: it is placed at approximately
32% of the scaled `r5`–`r6` gap measured from `r5`. Its physical semi-diameter is then calibrated so that the modeled
entrance pupil gives f/2.8. The resulting f/2.8 agreement is a calibration target, not independent verification of an
unpublished production diaphragm size.

The patent publishes no surface clear apertures. The front and cemented-element SDs retain the geometry-constrained
estimates. The rear surfaces now use 12.2/12.3 mm, measured from the optical rim on patent p. 1 at 600 dpi
(about 0.0368 mm/pixel), instead of the draft's 16.9/17.0 mm ray-envelope margins. The narrower rear silhouette
matches the drawing and passes the production geometry and render diagnostics. It can clip off-axis pupil rays;
the draft's all-rays-clear meridional claim does not apply to these revised apertures.

The patent draws `l3` from the last lens to the focal plane but does not tabulate it numerically. The implemented final
surface spacing is therefore the independently computed infinity BFD, 42.9294 mm from the surface-7 vertex, rather than a
transcribed source spacing.

For the scaled implementation, the surface-by-surface Petzval sum computed as `φ/(n·n′)` is
+0.00242318 mm⁻¹, with reciprocal magnitude 412.681 mm. This is reported as a verified first-order quantity without
assigning an unverified higher-order aberration interpretation to it.

## Sources and References

1. Ludwig Bertele, **US Patent 2,721,501, “Three-Component Objective,”** filed March 8, 1954, granted October 25, 1955.
   The supplied two-page grant is the prescription source: p. 1 contains the optical section and diaphragm B1; p. 2
   contains the numerical Example, conditions, and claim.
2. Albert Schacht / SCHACHT ULM-DONAU, **“SCHACHT-TRAVENAR 1:2,8/90 mm mit Druckblende für Exakta und Exa,”** period
   manufacturer leaflet scan hosted by AllPhotoLenses:
   https://allphotolenses.com/public/files/pdfs/99c216d635155a4f2ae8c70c49a3324a.pdf
3. Albert Schacht / SCHACHT ULM-DONAU, **“Schacht-Travenar 1:2,8/90 mm mit vollautomatischer Druckblende für Exakta real,”**
   period manufacturer leaflet scan hosted by AllPhotoLenses:
   https://allphotolenses.com/public/files/pdfs/4f935a0ac62060c57487029715e3f18f.pdf
4. OHARA INC., **Optical Glass Catalog / Glass Type Tables:** https://www.ohara-inc.co.jp/en/product/catalog/
5. HOYA Optics Division, **Optical Glass Data Download / Cross Reference:**
   https://www.hoya-opticalworld.com/english/datadownload/index.html
6. SCHOTT, **Optical Glass Downloads / Datasheet Collection:**
   https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
7. HIKARI GLASS CO., LTD., **Optical Glass Catalog:** https://www.hikari-g.co.jp/optical_glass/catalog/
8. Chengdu Guangming Optoelectronic Corp. (CDGM), **Optical Glass Database:**
   https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data / Downloads:** https://www.sumita-opt.co.jp/en/download/
