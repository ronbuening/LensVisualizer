# SCHNEIDER-KREUZNACH CINEGON 6.5mm f/1.9 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** DE 927 540  
**Patent effective from:** 21 June 1950  
**Granted:** 14 April 1955  
**Issued:** 12 May 1955  
**Inventor:** Wolfram W. Albrecht  
**Applicant:** Jos. Schneider & Co., Optische Werke  
**Title:** *Objektiv großer Lichtstärke aus mindestens fünf in Luft stehenden Gliedern*  
**Embodiment analyzed:** Example 1, the single normalized numerical example

DE 927 540 describes a high-speed objective of at least five air-separated members and gives one worked prescription
normalized to `f = 1`, with an aperture ratio of 1:1.9 and a full image angle of 50°. The numerical table appears on
patent pages 2–3; Fig. 1 on page 4 gives the longitudinal section and confirms the sequence of fourteen refracting
surfaces, eight glass elements, six air-separated groups, and two cemented doublets. [DE 927 540, pp. 2–4]

The association with the production Schneider-Kreuznach Cinegon 1:1.9/6.5 is a research correlation rather than a
manufacturer-confirmed patent attribution. The evidence is convergent but not conclusive:

1. The patent applicant is Jos. Schneider & Co., and the worked example is explicitly a fast wide-angle objective for
   narrow-film apparatus, including 8 mm and 16 mm applications. [DE 927 540, pp. 1–2; US 2,612,077]
2. Secondary historical material identifies a Cinegon 6.5 mm f/1.9 for 8 mm film and dates its appearance to 1951.
   [Lens Vade Mecum Schneider section, secondary source]
3. Surviving product evidence documents a Schneider-Kreuznach Cinegon marked `1:1.9/6.5`; one observed specimen is in
   Bolex D-mount. This establishes a production lens with the matching focal length and aperture, but not that every
   production variant used the same mount. [Foto Sandor, secondary product observation]
4. A tertiary patent/lens index also associates DE 927 540 Example 1 with the Cinegon 1.9/6.5. Its page explicitly
   points readers to the Photonstophotos OpticalBench resource, so it is corroborating tertiary evidence rather than an
   independent primary identification. [Dujingtou optical patent/lens index]

Schneider-Kreuznach’s current patent archive lists DE 927 540, its title, the 21 June 1950 date, and Wolfram W. Albrecht,
but no accessible Schneider historical product catalog or other manufacturer primary source was found that explicitly
identifies DE 927 540 Example 1 as the production Cinegon 6.5 mm f/1.9. The data therefore keeps the correlation qualified. The
output stem's `1965` token is likewise not treated as a design, patent, or release year; the structured patent year is
1955.

The patent prescription is normalized to `f = 1`. The implemented model applies a uniform scale of 6.5 mm to every
radius, thickness, air spacing, and image-plane distance while leaving refractive indices and Abbe numbers unchanged.
Because the rounded source table computes an EFL of 0.99963145 in normalized units, the scaled design EFL is
6.49760444 mm rather than exactly 6.5 mm. The public-facing 6.5 mm value remains the marketed focal length, separate from
the computed design value.

## Optical Architecture

The objective is an eight-element, six-group all-spherical wide-angle design. In front-to-rear order it consists of two
cemented doublets followed by four air-separated singlets. The first cemented member is net negative, followed by a net
positive second doublet; the four singlets then have positive, positive, negative, and positive first-order powers.
This distribution is taken from the verified paraxial decomposition and should not be read as a complete assignment of
aberration-correction roles.

The most conspicuous structural feature is the very large first air space between the front negative doublet and the
second cemented member. In the scaled model that gap is 25.22 mm. The patent makes this separation a construction
condition, requiring the first air space to be at least three focal lengths. [DE 927 540, pp. 1–2]

The complete r1-to-r14 vertex track is 44.6355 mm, while the computed Gaussian EFL is 6.49760444 mm. The design is not
telephoto under the project's definition because `TL/EFL = 6.86953`, well above unity. It does satisfy the project's
retrofocus criterion because the Gaussian BFD from the last refracting surface is 8.55409526 mm, which exceeds the EFL;
`BFD/EFL = 1.31650`. These are first-order classifications of the modeled prescription, not historical product labels.

The patent publishes the image plane at `s′ = 1.313` normalized units behind r14. After scaling, that plane remains
8.5345 mm behind surface 14. The rounded prescription's Gaussian focus is 8.55409526 mm behind the same vertex, leaving
a 0.01959526 mm difference. The source image plane is preserved rather than silently moved to the computed Gaussian
focus. [DE 927 540, p. 2 and Fig. 1]

## Element-by-Element Analysis

### L1 — Biconvex Positive, front element of cemented group D1

`nd = 1.6727, νd = 32.2. Glass: 673322 flint class (supplier unresolved). Standalone f = +35.9945 mm.`

L1 is the positive component of the first cemented member. Its rear surface is cemented directly to L2, so the isolated
standalone focal length above is not the power of the complete front member. The patent describes the first member as a
diverging cemented pair; the verified combined focal length of G1 is −29.0608 mm. [DE 927 540, pp. 1–2]

### L2 — Biconcave Negative, rear element of cemented group D1

`nd = 1.5101, νd = 63.4. Glass: 510634 crown class (supplier unresolved). Standalone f = −15.3672 mm.`

L2 supplies the stronger negative standalone power within D1 and is bonded to L1 at surface 2. The cemented pair is the
front diverging member required by the patent architecture. The stored glass label is deliberately class-level: the
patent publishes the refractive coordinate but not a supplier or melt identity.

### L3 — Biconcave Negative, front element of cemented group D2

`nd = 1.6727, νd = 32.2. Glass: 673322 flint class (supplier unresolved). Standalone f = −60.4052 mm.`

L3 begins the second cemented member after the long first air gap. It uses the same refractive coordinate as L1 but has a
much weaker standalone negative power. Its rear surface is cemented to L4 at surface 5.

### L4 — Biconvex Positive, rear element of cemented group D2

`nd = 1.5101, νd = 63.4. Glass: 510634 crown class (supplier unresolved). Standalone f = +30.2936 mm.`

L4 is the positive component of D2. The two-element group has a verified net focal length of +57.0045 mm, so the second
cemented member is converging in the first-order model. That group result includes the actual cemented interface and is
not interchangeable with either isolated-element focal length.

### L5 — Biconvex Positive singlet

`nd = 1.6204, νd = 60.3. Glass: 620603 crown class (supplier unresolved). Standalone f = +13.9283 mm.`

L5 is the first singlet after the two cemented groups. It is a comparatively strong positive element in the rear half of
the objective. Because it is air-separated on both sides, its standalone focal length is also the net focal length of
G3 in the paraxial group decomposition.

### L6 — Positive Meniscus singlet

`nd = 1.6204, νd = 60.3. Glass: 620603 crown class (supplier unresolved). Standalone f = +29.6125 mm.`

L6 uses the same refractive coordinate as L5 but a meniscus form. It remains net positive as an isolated element and as
group G4. The prescription alone supports this power statement; a more specific attribution of coma, astigmatism, or
spherical-aberration correction would require additional source text or a dedicated aberration decomposition.

### L7 — Biconcave Negative singlet

`nd = 1.6990, νd = 30.1. Glass: 699301 dense-flint class (supplier unresolved). Standalone f = −5.2992 mm.`

L7 is the strongest negative standalone element in the objective. It lies immediately before the final positive singlet
and before the modeled aperture-stop position. Its high index and low Abbe number identify a dense-flint coordinate
class, but that glass class alone does not establish a specific chromatic-correction role.

### L8 — Biconvex Positive rear singlet

`nd = 1.6385, νd = 55.5. Glass: 639555 crown class (supplier unresolved). Standalone f = +7.4613 mm.`

L8 is the final refracting element and is strongly positive in the isolated first-order calculation. Surface 14 is its
rear face; the patent image distance `s′` is measured from this last element vertex to image plane B. [DE 927 540,
Fig. 1]

## Glass Identification and Selection

The patent prints only refractive index and Abbe number, without naming a glass supplier, melt, or spectral line
convention. Comparison against authoritative modern catalogs shows that the five distinct coordinates align closely with
established d-line glass-code families. The model therefore records `indexReference: "d"` as an evidence-based
interpretation, not as a verbatim patent statement.

| Elements | Patent coordinate `nd / νd` | Catalog comparison | Stored model label |
|---|---:|---|---|
| L1, L3 | 1.6727 / 32.2 | HOYA E-FD5 code family 673322; current SCHOTT N-SF5 is a close 673323 coordinate | `673322 flint class (supplier unresolved)` |
| L2, L4 | 1.5101 / 63.4 | CDGM H-K5 / 510634 crown family | `510634 crown class (supplier unresolved)` |
| L5, L6 | 1.6204 / 60.3 | 620603 family; examples include OHARA S-BSM16 and SCHOTT N-SK16 | `620603 crown class (supplier unresolved)` |
| L7 | 1.6990 / 30.1 | HIKARI J-SF15 code 699301; current SCHOTT N-SF15 code 699302 is a close coordinate | `699301 dense-flint class (supplier unresolved)` |
| L8 | 1.6385 / 55.5 | CDGM H-ZK11 / 639555 family; close OHARA S-BSM18 coordinate | `639555 crown class (supplier unresolved)` |

The catalog comparisons establish coordinate classes, not the historical supplier of Schneider's production glass.
Candidate catalog `nC`, `nF`, `ng`, or partial-dispersion values were therefore not copied into the lens data. The
prescription supports ordinary Abbe-based dispersion characterization only; it does not support an APO or anomalous-
partial-dispersion claim.

The alternating higher-index/lower-Abbe and lower-index/higher-Abbe coordinates in the two cemented doublets are
consistent with ordinary achromatizing pair construction, but the patent and final data do not establish a particular
supplier-specific glass pairing beyond the stored coordinate classes.

## Focus Mechanism

The verified optical model has focus status `NO_INTERNAL_RECONSTRUCTION`. DE 927 540 publishes one fixed prescription
state and no moving-group spacing table, close-focus row, minimum focus distance, or optical focusing mechanism.
Accordingly, no `var` spacings are authored and no internal group motion is inferred.

The data schema requires `closeFocusM`; the static model therefore uses `1e15 m` as an explicit infinity sentinel. That
number is not a production minimum-focus-distance specification and should not be interpreted as mechanical focus travel.
Secondary observations of production barrels are insufficient to determine which optical group, if any, moved relative
to the others in the manufactured lens.

## Patent Conditions and Numerical Verification

The worked prescription satisfies the patent's principal construction inequalities when evaluated from the final scaled
model. The thresholds below are scaled from the patent's normalized `f = 1` conditions; the numerical checks use the
parsed final data rather than a separate copy of the intended prescription.

| Patent condition | Final-model value | Scaled threshold | Status |
|---|---:|---:|---|
| First air space `a1 ≥ 3f` | 25.22 mm | 19.5 mm | Satisfied |
| Magnitude of first-member focal length `≥ 4f` | 29.0608 mm | 26.0 mm | Satisfied |
| Minimum absolute radius `> 0.7f` | 4.693 mm | 4.55 mm | Satisfied |
| Source image distance `s′ > f` | 8.5345 mm | 6.5 mm | Satisfied |
| Vertex track `≤ substantially 7f` | 44.6355 mm | 45.5 mm | Satisfied |

One printed comparison does not reproduce strictly from the rounded table. The patent states the first member's focal-
length magnitude as 4.48 times the system focal length, equivalent to 29.12 mm after the 6.5× scale. The rounded
prescription computes 4.47089242 times the normalized focal length, or 29.06080071 mm. The scaled residual is
−0.05919929 mm, just outside the strict source-precision envelope used by the verifier. No source value is altered and
the tolerance is not widened; the governing patent requirement `|f_G1| ≥ 4f` remains satisfied. [DE 927 540, p. 2]

Petzval curvature was recomputed surface by surface as `φ/(n·n′)` for all fourteen refracting surfaces. The synthetic
stop is optically neutral and contributes zero. The final sum is +0.02023081 mm⁻¹, corresponding to a reciprocal radius
of +49.4296 mm under the model's recorded sign convention. This is a first-order Petzval result, not a measurement of the
actual best-focus field surface.

## Modeling Limits and Aperture Geometry

The patent does not publish a diaphragm plane or diaphragm diameter. The model therefore inserts exactly one synthetic
`STO` in the middle of the published `a5` air space, immediately before L8. The stop semi-diameter is 2.26023145 mm and
was solved so that the modeled entrance pupil reproduces the published f/1.9 aperture ratio. The resulting entrance-pupil
diameter is 3.41979181 mm. Agreement with f/1.9 is therefore a calibration result, not independent evidence that the
manufactured diaphragm had that position or diameter.

The patent likewise publishes no semi-diameters. All surface clear-aperture semi-diameters in the model are inferred from
ray-envelope and geometry constraints. The final values pass the portable edge-thickness, actual spherical rim-slope,
and shared-band cross-gap checks. The minimum modeled element edge thickness is 0.206990 mm at L5, and the maximum
spherical rim-slope angle is 52.2141° at surface 3.

A finite exact meridional containment test traced 187 Snell-law rays covering eleven field angles from −25° to +25° and
seventeen stop fractions from −1 to +1. All sampled rays reached the preserved source image plane without clipping; the
smallest sampled non-stop radial clearance is 0.059195 mm at surface 11. This is evidence for the sampled grid only, not
a proof over the continuous pupil/field domain and not a substitute for LensVisualizer's production render diagnostics.

No cover glass, filter, inactive dummy plane, or air-equivalent rear plate conversion is part of this example. The
fourteen patent refracting surfaces are retained; the only added plane is the disclosed synthetic stop.

## Sources and References

1. Deutsches Patentamt, **DE 927 540**, *Objektiv großer Lichtstärke aus mindestens fünf in Luft stehenden Gliedern*,
   Wolfram W. Albrecht; applicant Jos. Schneider & Co., Optische Werke. Numerical prescription: pp. 2–3; optical section:
   Fig. 1, p. 4; correction plots: p. 5. Supplied primary patent scan.
2. United States Patent Office, **US 2,612,077**, *Wide-angle high-speed photographic objective*, Wolfram Wilhelm
   Albrecht. Family corroboration: https://patents.google.com/patent/US2612077A/en
3. Jos. Schneider Optische Werke GmbH, **Patents**. Current manufacturer patent archive listing DE 927 540, title,
   date, and inventor; it does not identify the Cinegon 6.5 mm f/1.9 product pairing:
   https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/patents
4. Jos. Schneider Optische Werke GmbH, **Manufacturing dates of Schneider-Kreuznach lenses**. Manufacturer context only;
   it does not identify the 6.5 mm f/1.9 patent pairing:
   https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/manufacturing-dates-of-lenses
5. Jos. Schneider Optische Werke GmbH, **How to Read Schneider-Kreuznach Lens Names & Models**. Manufacturer naming
   context only; it does not identify this historical prescription:
   https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/read-new-lens-names
6. *Lens Vade Mecum*, Schneider section, third-party web mirror. Secondary historical evidence for the Cinegon 6.5 mm
   f/1.9 and 8 mm use: https://manuals.plus/m/0d50eb7f29338ca518424624aecf01c257415240e1fc50add88829e3bb1d7910
7. Foto Sandor, **Schneider-Kreuznach Cinegon 1:1.9/6.5 for Bolex D-Mount**. Secondary product observation:
   https://www.foto-sandor.de/objektive/objektive-manueller-fokus-fuer/sonstige-kameras/schneider-kreuznach-cinegon-1-1-9-6-5-1-9-6-5-fuer-bolex-d-mount_91073_105977
8. Dujingtou optical patent/lens index, DE 927 540 Example 1 correlation. Tertiary evidence; the page references
   Photonstophotos OpticalBench and is not treated as independent primary confirmation:
   https://www.dujingtou.cn/article_31994.shtml
9. SCHOTT, **Optical Glass Datasheet Collection**; HOYA optical-glass cross-reference; HIKARI optical-glass data; CDGM
   optical glass database; OHARA,
   **All Detailed Data 2025-04-18**. These catalogs support the coordinate-class comparisons only and do not establish
   Schneider's historical glass supplier. Catalog sources used in the audit include:
   https://www.schott-pharma.com/en/products/optical-glass-p1000267/downloads ;
   https://www.hoya-opticalworld.com/english/products/crossreference.html ;
   https://www.hikari-g.co.jp/products/optical_glass/ ;
   https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=2&url=database ;
   https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf
