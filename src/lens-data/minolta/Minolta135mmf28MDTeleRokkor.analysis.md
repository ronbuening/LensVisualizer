## Patent Reference and Design Identification

## Catalog spectral model

The catalog preserves the source index and Abbe coordinates. The following names select compatible dispersion curves for simulation; they do not identify the historical supplier, melt, or annealing state. Catalog compatibility includes tolerances and is not an exact material identification.

| Element record | Current spectral annotation |
|---|---|
| 1 | K-LaK11 spectral proxy (Sumita; lanthanum crown; patent vd 58.5 retained versus catalog 57.3; supplier unconfirmed) |
| 2 | K-LaK11 spectral proxy (Sumita; lanthanum crown; patent vd 58.5 retained versus catalog 57.3; supplier unconfirmed) |
| 3 | SF1 spectral proxy (Schott; dense flint; production supplier unconfirmed) |
| 4 | Unmatched (patent nd=1.73300, νd=28.2) |

Three of four records now use qualified spectral proxies: K-LaK11 for L1/L2 and SF1 for L3. The L1/L2 patent Abbe value 58.5 is retained despite the proxy value near 57.3. L4 at 1.73300/28.2 remains unresolved; SF3 at 1.74000 is incompatible.


**Patent:** JP S51-62037 A
**Application Number:** Japanese application Sho 49-137217
**Filed:** 1974-11-28
**Published:** 1976-05-29
**Inventor:** Tamikazu Yamaguchi (山口民和)
**Applicant:** Minolta Camera Kabushiki Kaisha
**Title:** Telephoto lens of four groups and four elements (4群4枚構成の望遠レンズ)
**Embodiment analyzed:** Example 1, PDF page 3, printed page 249

This model follows the selected Example 1 of [JP S51-62037 A](https://patents.google.com/patent/JPS5162037A/ja).
The original publication supplies a normalized focal length of 100, relative aperture 1:2.8, and full field 18.2°.
Its eight refracting surfaces form four separate spherical singlets; no other example contributes prescription data.

The selected relationship to the MINOLTA MD TELE ROKKOR 135mm f/2.8 is supported by convergent evidence,
but is not manufacturer-confirmed patent attribution:

1. The period Minolta XD-11 brochure, printed page 36, explicitly labels the 135mm f/2.8 MD Tele Rokkor-X
   as four elements in four groups and depicts the same broad-front, narrow-rear arrangement.
2. Both the brochure and the selected patent state f/2.8. The manufacturer's marketed full field is 18°,
   while the patent prints 18.2°; these values are retained separately.
3. The manufacturer's SLR-system guide, printed page 27, independently lists the four-element 135mm f/2.8 model.
   Its back-cover code is SLR SYSX.803E-M1. An exact first-production date is not established here.
4. The XD-11 specifications identify the Minolta SLR bayonet and a 35mm SLR system. The data uses the
   canonical Minolta SR mount and 135 full-frame format identifiers for this production correlation.

Other production formulas bearing similar 135mm f/2.8 names should not be equated with this four-element prescription.
The Rokkor-X wording in the cited manufacturer material is preserved as source branding; the job's selected lens name
remains the identifier of this pair.

## Optical Architecture

The power sequence is positive–positive–negative–positive. All four elements are air-spaced, so element and group
counts are both four. The first two are positive menisci convex toward the object; the third is a thick negative
meniscus with a strongly curved rear face, followed by a widely separated, weak positive rear meniscus.

The source normalization is scaled uniformly by 1.35, the selected marketed 135mm focal length divided by 100.
Every published radius and axial spacing is scaled by that factor; indices and Abbe numbers are unchanged.
The scaled prescription computes to EFL 134.969 mm, rather than being refitted to exactly 135mm.
The corresponding source calculation is 99.977132 normalized units.

At infinity, the first-to-last refracting-vertex distance is 74.731 mm.
The Gaussian back focal distance, measured from the last refracting vertex, is 56.296 mm.
The first vertex to Gaussian image-plane distance is 131.027 mm, giving TL/EFL = 0.970790.
This ratio below unity supports the telephoto designation. The last spacing in the data is this calculated BFD:
the selected patent table gives no numerical rear image distance that could be copied instead.
No source-listed cover glass, rear filter, or active optical plane has been removed.

The front and rear principal-plane offsets are -12.245 mm from the first vertex and
-78.673 mm from the last vertex, respectively; negative offsets point toward the object.
These are paraxial cardinal quantities at the patent's d-line index reference, not mechanical barrel measurements.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex toward the object

nd = 1.65830, νd = 58.5. Glass: K-LaK11 spectral proxy (patent νd=58.5 retained; catalog near 57.3). f = +108.10 mm.

The first meniscus is a positive collector with a substantially weaker rear curvature. Its native glass coordinate
 is the same as L2. The patent constrains its thickness relative to system focal length and its front radius
 relative to that focal length; these are source-stated design conditions, not a supplier identification.

### L2 — Positive Meniscus, convex toward the object

nd = 1.65830, νd = 58.5. Glass: K-LaK11 spectral proxy (patent νd=58.5 retained; catalog near 57.3). f = +106.89 mm.

L2 contributes positive standalone power of comparable magnitude to L1. Its stronger front curvature and
 positive rear curvature preserve the object-convex meniscus form. The patent constrains its front radius
 relative to the first element's front radius. Its individual aberration contribution is not inferred from
 power sign or crown-like dispersion alone.

### L3 — Negative Meniscus, convex toward the object

nd = 1.71736, νd = 29.4. Glass: SF1 spectral proxy (patent coordinates retained). f = -46.09 mm.

L3 supplies the sole negative standalone element power. Its rear surface has the largest-magnitude negative
 paraxial surface-power contribution in the implemented prescription. The patent specifically permits a thick
 member among the first three elements and couples geometric conditions to the glass index and dispersion.
 These facts explain its structural importance without proving a separate chromatic or off-axis correction budget.

### L4 — Positive Meniscus, convex toward the object

nd = 1.73300, νd = 28.2. Glass: Unmatched (patent nd=1.73300, νd=28.2). f = +182.56 mm.

The last element is a weak positive meniscus separated from L3 by the largest airspace. Its standalone focal
 length is longer than that of either front positive element. Its high-index, low-Abbe coordinate is retained
 exactly; a nearby commercial flint designation is not substituted. The narrow rear aperture is modeled from
 the published silhouette and geometric checks, rather than read as a numerical patent dimension.

The quoted element focal lengths are standalone thick-lens values in air. They are neither in-situ group powers
nor an additive decomposition of the complete system focal length. There are no cemented interfaces.

## Glass Identification and Selection

The patent explicitly uses d-line refractive indices. It publishes no C-, F-, or g-line indices, partial-dispersion
values, or glass supplier names. The native coordinate pairs are retained; current spectral proxy choices are listed above.
The first two elements share nd = 1.65830 and νd = 58.5; L3 uses 1.71736/29.4 and L4 uses 1.73300/28.2.

Catalog comparisons covered OHARA's 2026-07-01 catalog including discontinued rows, HOYA's 2026-07-07 catalog
including obsolete rows, Sumita's 2026-08-26 catalog including discontinued rows, Hikari's official historical AGF
archive, Schott's 2025 pocket catalog, and CDGM's November 2021 datasheets. This is finite published-catalog coverage,
not a survey of every historical Minolta melt. OHARA prefix variants are kept distinct.

For L1/L2, OHARA LAL11 and S-LAL11 have nearly the same nominal index but an Abbe number near 57.33,
which does not reproduce the patent's 58.5. For L3, classical Hikari SF1 has nd = 1.717360 and
νd = 29.486634; the Abbe residual is +0.086634, outside the one-decimal patent coordinate's rounding interval.
For L4, Schott SF3 reproduces νd = 28.20 but has nd = 1.74000, a +0.00700 index difference.
These residuals preclude exact material identification. The runtime adopts compatible K-LaK11 and SF1 proxy curves as disclosed above; L4 remains unresolved.

The unresolved L4 uses the patent's nd/νd-based Abbe approximation; the other elements use qualified catalog proxies. No unsupported nC, nF,
ng, or ΔPgF values are added, and neither anomalous dispersion nor apochromatic performance is established.
The patent discusses balancing chromatic and monochromatic aberrations, but that discussion does not provide
an independently reconstructed spectral-performance result for this limited model.

The surface-by-surface paraxial Petzval sum is 0.00105564 mm⁻¹, evaluated as Σφ/(n n′).
L3's negative rear-surface contribution offsets much of the positive contribution elsewhere.
This signed paraxial sum is not a traced sagittal/tangential field-curvature curve or proof of flat-field performance.

## Focus Mechanism

The selected example supplies one distant-object prescription and no finite-conjugate spacing table or group-travel law.
The model therefore has status NO_INTERNAL_RECONSTRUCTION, with no moving gaps and no finite-focus endpoint.
The data retains the production 1.5 m minimum focus distance as metadata. With no authored moving gaps, V2 keeps the optical model at infinity.

The manufacturer brochure separately lists a marketed minimum focusing distance of 1.5m. That product specification
is retained as context. It does not uniquely determine internal motions, a unit-focus travel, or a patent image-plane
movement, so no such mechanism is constructed from that single distance.

### Aperture and clear-aperture assumptions

There is no published physical stop coordinate or diameter in Example 1. The single model iris is inferred halfway
across the L3–L4 airspace. Its radius, 12.997805 mm, is calibrated by exact on-axis tracing at an
entrance-pupil radius of 24.101630 mm to the stated f/2.8. Matching that target is a
calibration result, not independent verification of a manufactured diaphragm.
The same physical stop gives a paraxial pupil estimate corresponding to f/2.760286; finite-ray pupil
aberration accounts for the difference from the exact marginal-ray calibration used by the model.

The element semi-diameters are also inferred. The front-three/rear size pattern follows the source and manufacturer
sections, while exact spherical intersections, rim slopes, edge thickness and shared-band air-gap geometry check
physical feasibility. Representative on-axis, meridional and skew rays were tested at 0°, 5.46° and 9.1° object field.
Vignetted edge rays are retained as aperture limitations; this finite sampling does not establish full-field illumination
or reproduce the patent's aberration plots. No aspherical surface or coefficient is present.

## Conditional Expressions

The conditions on PDF pages 1–2 are evaluated with the printed normalized f = 100 and unchanged source dimensions.
Let D = d1 + d2 + d3 + d4 + d5, the first vertex through the rear vertex of the third element.

- d1/f = 0.075050, below the stated 0.09 upper bound.
- (d1 + d3 + d5)/D = 0.861992, above 0.8.
- r1/f = 0.434000, within 0.4–0.55.
- r3/r1 = 0.743940, within 0.65–0.8.
- r5/r4 = 2.032659, within 1.5–2.8.
- n1 and n2 exceed 1.6; n3 exceeds 1.7. ν1 and ν2 exceed 50, while ν3 is below 35.

All of these selected-example conditions pass without altering source values. Uniform scaling leaves the dimensionless
conditions unchanged. The stated ranges constrain this architecture; satisfying them does not independently validate
the patent's plotted aberrations or establish production identity.

## Verification Scope and Application Controls

The aperture control spans f/2.8–f/22, matching the manufacturer's published aperture limit.
The absence of moving gaps leaves every axial surface coordinate and the Gaussian image plane unchanged
at focus-control values 0, 0.5 and 1; these are repeated application states rather than new finite conjugates.

An expanded independent exact-ray audit samples 735 meridional and skew rays across seven aperture settings
and signed fields 0°, ±2.73°, ±5.46° and ±9.1°. The actual engine reproduces the common surface intersections
within 1.0 × 10⁻⁹ mm. Of those probes, 711 transmit and 24 are physical aperture misses or clips.
Two symmetric full-field extreme-rim rays report the engine's raw `failed/noBracket` diagnostic before the first
surface; independent spherical intersections and an expanded-bound engine intersection place each at radius
34.135755 mm, outside the modeled 26.5 mm front aperture. The raw failures remain recorded separately from this
physical-miss classification. This does not establish illumination at the edge of the published field.

The actual default application fan was also checked at all seven aperture settings and the three identical focus
states: 231 rays, including 9 explicit clips, with no unexplained trace failure or nonfinite wrapper output.
Its automatically derived off-axis field is 10.423132°, which exceeds the patent's 9.1° half-field; this is additional
model/application sampling, not a newly sourced design field. All four production element-render diagnostics report
zero hidden trim. Targeted real type, schema, glass-fallback and formatting checks pass; full-project integration
checks are outside this per-lens audit.

## Sources

1. Japan Patent Office, [JP S51-62037 A](https://patents.google.com/patent/JPS5162037A/ja), published 1976-05-29.
   Supplied original: cover and claims on PDF page 1; description and conditions on page 2; Example 1 and Figures 1–2
   on page 3, printed page 249. The native original governs the transcription.
2. Minolta, [XD-11 system brochure](https://www.minolta.suaudeau.eu/ressources_iconographiques/XD_11.pdf),
   printed page 36 / PDF page 19 for the named four-element lens and section; printed page 26 / PDF page 14
   for the camera's 35mm SLR system and Minolta SLR bayonet.
3. Minolta Camera Co., Ltd., [A Guide to the Minolta SLR System of Creative Photography](https://www.pacificrimcamera.com/rl/02498/02498.pdf),
   printed page 27 / PDF page 29 for the lens specifications; back cover for publication code SLR SYSX.803E-M1.
4. OHARA, [Optical Glass Catalog](https://oharacorp.com/glass-catalog/), 2026-07-01 AGF; HOYA,
   [Optical Glass Data Downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html), 2026-07-07 AGF.
5. Hikari, [Optical Glass Catalog](https://www.hikari-g.co.jp/optical_glass/catalog/), official historical AGF;
   Sumita, [Optical Glass](https://www.sumita-opt.co.jp/en/products/optical-glass/), 2026-08-26 AGF.
6. Schott, [Optical Glass](https://www.schott.com/en-gb/products/optical-glass), 2025 pocket catalog;
   CDGM, [Optical Glass Data Sheet, November 2021](https://www.cdgmgd.com/accessory/2021-11-18/client/www.cdgmgd.com/f44bac33-96f4-4f40-a15d-54061708cbaa.pdf).
