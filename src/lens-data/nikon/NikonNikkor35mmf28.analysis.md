## Patent Reference and Design Identification

**Patent:** US 3,874,770 A  
**Filed:** May 31, 1973  
**Granted:** April 1, 1975  
**Inventor:** Yoshiyuki Shimizu  
**Assignee:** Nippon Kogaku K.K.  
**Title:** Retrofocus Type Wide-Angle Photographic Lens  
**Embodiment analyzed:** Example I (Example 1)

The NIKON NEW NIKKOR 35mm f/2.8 model transcribes Example I, associated provisionally with the lens Nikon's own history designates the "NEW Nikkor 35mm f/2.8", introduced in 1975 for the Nikon F mount and the 135 format.
The patent's priority date is June 7, 1972.
The manufacturer-to-patent attribution remains unconfirmed: Nikon's retrospective does not name this patent.
The correlation rests on several independent architectural observations:

1. Example I and Nikon's NEW Nikkor description both have six elements in six air-separated groups.
2. Both place two thick positive elements behind the front negative element.
3. The source design is f/2.8 with a 62° full field, compatible with the selected wide-angle product.
4. Patent timing precedes Nikon's stated 1975 introduction.

Earlier Nikkor-S Auto versions have different constructions and must not be conflated with this model.
The normalized prescription is uniformly scaled by 0.35; the scale is a modeling choice anchored to the selected marketed focal length.
It is not a measurement of a production sample.
All source radii and internal thicknesses are retained at that scale.

## Optical Architecture

The arrangement is negative–positive–positive–negative–positive–positive in standalone element power.
It contains six spherical elements, with no cemented interfaces, aspheric surfaces or prescribed rear plates.
The aperture stop is placed between L3 and L4, consistent with Figure 1.
Its exact station is inferred at the midpoint of the published intervening air gap.

The implemented infinity d-line EFL is 35.000507 mm.
Back focal distance is 37.552305 mm, measured from the last refracting vertex to the paraxial image in air.
Thus BFD/EFL is 1.072907, supporting the retrofocus designation.
First-to-last-vertex track is 46.618250 mm; first vertex to paraxial image is 84.170555 mm.
The latter is an optical track, not mechanical barrel length.
The rear principal plane lies 2.551799 mm imageward of the last vertex.

The patent deliberately distributes positive power through the thick L2/L3 region.
L2 has only weak standalone positive power despite its substantial thickness.
Consequently, replacing it with a thin element of superficially similar curvatures would not preserve propagation through the group.
The calculation gives a Petzval sum of +0.004001575 mm⁻¹ from the individual surface terms φ/(nn′).
That scalar alone does not determine the astigmatic image surfaces or observed field flatness.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

nd = 1.51454, νd = 54.6. Glass: 515546 crown flint, KF3 class (KF3 SUMITA coordinate-compatible; supplier unconfirmed). f = -42.711 mm.

L1 corresponds to the patent's component F.
Its smaller positive rear radius makes the element negative.
It supplies the front divergent action of the retrofocus arrangement.
The patent states that the effective aperture diameter of R1 is at most 0.8 f, which is 28 mm at this scale.
The model sets the front semi-diameter at that 14.0 mm bound; Figure 1 draws the glass rim slightly larger, about 14.7 mm, and the steep rear surface to about 11.4 mm.
No supplier or chemical family is established by the patent coordinate.

### L2 — Positive Meniscus, concave to object

nd = 1.51680, νd = 64.2. Glass: 517642 borosilicate crown, BK7 class (J-BK7A HIKARI / N-BK7 SCHOTT coordinate-compatible; supplier unconfirmed). f = +1184.487 mm.

L2 is component E, with two negative radii and weak positive standalone power.
The patent emphasizes its thickness relative to L1 and the small gap to L3.
Its discussion links the surface orientations and thick propagation region to managing distortion and extending back focus (printed columns 2–3).
Those stated design motives are not a numerical decomposition of this element's aberrations.

### L3 — Biconvex Positive

nd = 1.71300, νd = 53.9. Glass: 713539 lanthanum crown, LaK8 class (J-LAK8 HIKARI / LAC8 HOYA coordinate-compatible; supplier unconfirmed). f = +25.095 mm.

L3 is the patent's component A immediately ahead of the diaphragm.
Its positive standalone power is much stronger than L2's.
The patent explains why its objectward surface can be useful in correcting higher-order spherical aberration.
The precise in-situ aberration balance requires complete ray analysis and cannot be inferred from the power sign alone.

### L4 — Biconcave Negative

nd = 1.71736, νd = 29.5. Glass: 717295 dense flint, SF1 class (J-SF1 HIKARI / SF1 SCHOTT coordinate-compatible; supplier unconfirmed). f = -18.936 mm.

L4 is component B, the first element behind the diaphragm.
It is the strongest negative standalone element in the model.
Its lower Abbe number distinguishes it from the surrounding positive glasses.
The patent does not provide enough spectral information to assign a measured secondary-spectrum contribution to this particular element.

### L5 — Positive Meniscus, concave to object

nd = 1.74443, νd = 49.4. Glass: 744494 lanthanum flint (nearest NBF1 HOYA / S-LAM60 OHARA, Δnd −0.0011; supplier unconfirmed). f = +36.801 mm.

L5 is component C, with its concave side facing the stop.
It restores positive power after L4.
The narrow air separation from the following element is preserved exactly; it is not a cemented doublet.
The facing surfaces of L4 and L5 curve toward each other, so their 1.31 mm axial air gap closes at a height of 7.40 mm.
Figure 1 draws the two rims touching, which is what that geometry produces, but draws them about 8.3 mm tall, which the prescription cannot reach.
The model therefore sets those two surfaces to a 7.3 mm semi-diameter, 0.03 mm short of contact.

### L6 — Biconvex Positive

nd = 1.62041, νd = 60.3. Glass: 620603 dense barium crown, SK16 class (J-SK16 HIKARI / S-BSM16 OHARA coordinate-compatible; supplier unconfirmed). f = +63.748 mm.

L6 is component D at the imageward end of the system.
It provides additional positive power after the positive meniscus.
Its standalone focal length is not an in-situ group focal length and does not by itself prove a field-flattening role.
The image plane is assigned from the complete system's paraxial back focus.

## Glass Identification and Selection

The native values are explicitly d-line coordinates in the patent.
They are retained without substituting modern catalog indices.
Six vendor-specific repository catalog excerpts were screened: OHARA, HOYA, Schott, Hikari, CDGM and Sumita.
The evidence also records a directly checked first-party HOYA cross-reference across those vendors.
Independent review additionally checked the HOYA July 2026 all-glass catalog, HIKARI June 2025 catalog,
OHARA published coordinate table and SCHOTT N-LAK8 sheet. L1 agrees with obsolete HOYA CF3 coordinates;
the implemented KF3 equivalent uses the Sumita KF3 catalog coefficients.
That cross-reference warns that similar codes do not establish chemical identity.

The L1 coordinate is the KF3 crown-flint class (Sumita KF3, nd 1.51454, νd 54.63).
L2 is the BK7 borosilicate-crown class (Hikari J-BK7A, Schott N-BK7); L3 the LaK8 lanthanum-crown class (Hikari J-LAK8, Hoya LAC8);
L4 the SF1 dense-flint class (Hikari J-SF1, Schott SF1); and L6 the SK16 dense-barium-crown class (Hikari J-SK16, Ohara S-BSM16).
Each named catalog glass reproduces the patent nd to within 0.00001 and νd to within 0.1.
These are coordinate classes rather than production supplier identifications.
Modern OHARA S-BSL7 and L-BSL7 must not be interchanged merely because their names are related.
Candidate coordinate residuals are retained in the numerical record.
L1, L2, L3, L4 and L6 use explicitly qualified catalog-equivalent class labels after coefficient round-trip checks.
L5 (nd 1.74443, νd 49.4) has no exact catalog counterpart in the repository catalog or in the HOYA, Sumita and Hikari vendor files.
Its label names the nearest catalog glasses, Hoya NBF1 (1.74330 / 49.22) and Ohara S-LAM60 (1.74320 / 49.34), about 0.0011 lower in nd.
The model keeps the patent nd and νd and borrows only the shape of the NBF1 dispersion curve; this is a nearest-neighbour proxy, weaker than the five coordinate matches.
These labels may enable approximate catalog dispersion in the application; those curves are proxies, not historical melt evidence.
No catalog line indices are assigned to the elements as if the patent had published them.

The prescription's nd/νd values support first-order d-line tracing and limited dispersion approximations.
They do not establish anomalous partial dispersion or apochromatic performance.

## Focus Mechanism

Only the patent's infinity prescription is represented.
The patent publishes no focusing data, so the model contains no focus movement and no variable spacings.
Collector references give the production lens a closest focus of about 0.3 m; Nikon's retrospective does not state it, and the patent gives no travel from which a close-focus state could be built.
No claim is made about production focusing travel, magnification or finite-distance performance.

## Patent Conditions and Modeling Limits

The computed thickness ratio d3/d1 is 4.999640 and d3/d4 is 99.920863, reproducing the patent's rounded tabulations.
The imageward surface power of E is lower than the objectward surface power of A, as required by the described construction.
The qualitative aplanatic-surface comparison is not converted into an unsupported numerical inequality.

The printed normalized BFD is 107.289; direct calculation from the rounded prescription gives 107.292301.
This small source residual is preserved rather than silently correcting the table.
The modeled image gap uses the computed value after uniform scaling.

The patent gives no iris diameter. The stored stop semi-diameter, 7.278 mm, is the height at which the real axial f/2.8 beam crosses the stop plane; the paraxial value is 7.061 mm.
The application solves the same 7.278 mm wide-open iris from the nominal f-number. The aperture scale runs to f/22, the production minimum aperture given by collector references.

Element semi-diameters are not published either. They follow the optical rims drawn in Figure 1 where the prescription allows:
14.0 mm at the front surface (the patent's 0.8 f bound), 11.4 mm at the rear of L1, 11.2 mm for L2, 9.9 mm for L3 and 9.3 mm for L6.
L4 and L5 are drawn about 8.3 mm tall, but the model uses 7.6 mm on their outer surfaces and 7.3 mm on the facing surfaces because of the closing air gap described above.
These are modeled clear apertures, not production mechanical dimensions.

With these apertures the axial f/2.8 beam passes every surface unclipped; its largest height behind the stop is 7.13 mm at the rear of L5.
The chief ray reaches the patent's 62° field edge (image height 21.0 mm at 31.1°) and the 135-format corner (21.65 mm at 31.8°) without clipping.
The full-aperture oblique beam at the corner is not passed whole: it is cut on one side by the rear group, by roughly a fifth of its height at the L4–L5 gap, a quarter at the rear of L5 and about a fifth to a quarter at L6.
That is ordinary wide-open vignetting for a compact retrofocus lens, and its exact amount depends on the estimated rims rather than on patent data.

## Sources

1. Yoshiyuki Shimizu, Nippon Kogaku K.K., [US3874770A](https://patents.google.com/patent/US3874770A/en), supplied original PDF: front-page identity; PDF p.2 Fig.1 and Fig.2; PDF p.7 printed columns3–4, Example I; PDF p.8 column6, claim4.
2. Nikon, [NIKKOR — The Thousand and One Nights No.38](https://imaging.nikon.com/imaging/information/story/0038/index.html), NEW Nikkor 35mm f/2.8 history and optical configuration, accessed October 2, 2026.
3. HOYA, [Glass cross-reference](https://www.hoya-opticalworld.com/japanese/products/crossreference.html), nominal coordinate-family comparisons, accessed October 2, 2026.
4. SCHOTT, [N-BK7 datasheet](https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5?v=54856406), modern comparison only, accessed October 2, 2026.
5. OHARA, [Optical Glass Properties](https://oharacorp.com/technical/optical-glass-properties/), catalog-coordinate and melt-tolerance conventions, accessed October 2, 2026.

6. HOYA, [July 2026 all-glass catalog](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), independent native-coordinate screening.
7. HIKARI, [June 2025 optical glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), equivalent-coordinate comparison.
8. OHARA, [Published glass properties](https://www.ohara-inc.co.jp/product/01000/), S-LAL8, S-TIH1 and S-BSM16 coordinate confirmation.
