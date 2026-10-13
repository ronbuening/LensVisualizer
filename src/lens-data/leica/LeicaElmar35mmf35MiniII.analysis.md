## Patent Reference and Design Identification

**Patent:** US 5,321,555 A  
**Application Number:** 07/960,108  
**Priority:** 12 October 1991, DE 41 33 844  
**Filed:** 13 October 1992  
**Granted:** 14 June 1994  
**Inventors:** Lothar Koelsch; Klaus-Dieter Schaefer  
**Assignee:** Leica Camera GmbH  
**Title:** Compact photographic objective of the triplet type having improved chromatic and monochromatic characteristics  
**Embodiment analyzed:** The sole unnumbered prescription, Figure 1 and claim 2; the patent does not label it “Example 1.”

The model is a qualified correlation to the LEICA ELMAR 35mm f/3.5 in the Leica Mini II. The following evidence converges:

1. The patent describes a compact-camera 35 mm f/3.5 objective; the manufacturer brochure specifies the same nominal lens specifications and a 24 × 36 mm camera.
2. The prescription has four elements in three groups. The front pair is cemented, the middle lens is biconcave, and the rear lens is biconvex.
3. The brochure's section drawing (p. 3) shows the layout of Figure 1 and of the model: a thick cemented front pair whose junction is weakly curved and convex to the object, a thin biconcave middle lens about two-thirds the diameter of the front pair, and a biconvex rear lens. The drawing does not mark the diaphragm; the rear-stop position comes from the patent.
4. Leica Camera GmbH is the patent assignee. The priority and filing dates fit the product period, although the brochure edition alone does not establish the release year.

Neither the patent nor the brochure states that this prescription is the production Mini II design, so the association remains a correlation.

### Source Erratum: Third Radius

The table as printed does not reproduce the patent's own paraxial data. With the printed third radius, 19.1519 mm, it traces to a focal length of 34.5026 mm against the stated 33.6323 mm. A third radius of **19.635 mm** reproduces three stated values at once: the focal length (33.6326 mm), the printed stop-to-image distance (paraxial focus 24.5161 mm behind the stop, against 24.5165 mm) and the pupil magnification (0.7289 against 0.7290). No other single radius, thickness or index does so.

The patent's plots agree. Figure 2A shows +2.03 % distortion at an image height of 18 mm; the corrected table gives +2.00 % and the printed one +1.77 %. The sagittal curve of Figure 2D reads −0.32 mm at 12 mm, against −0.33 mm corrected and −0.28 mm printed. The printed decimals repeat those of the row above (39.1519), which points to a copying slip.

The model therefore uses R3 = 19.635 mm. This is an inferred correction, not a published value: its fourth decimal follows from the stated focal length (within 0.0005 mm), and the US and European prints both carry 19.1519. Every other radius, thickness and index is as printed, and no scale factor is applied.

The source summary also gives a back focus of 26.7165 mm from the last lens surface, while the table's last two spacings sum to 25.7165 mm. The difference is exactly 1.0000 mm and the corrected table focuses at the tabulated distance, so the summary figure is read as a digit slip. The model keeps the tabulated spacings.

## Optical Architecture

The design is a rear-stop, modified triplet with positive–negative–positive group power. The front positive group uses a cemented positive and negative meniscus pair; two air-separated singlets complete the lens. All seven powered surfaces are spherical.

The effective focal length is 33.6326 mm. The first-to-last-glass length is 10.8000 mm, and the image plane is 36.5165 mm behind the first vertex. The total-track/EFL ratio is 1.0857 and BFD/EFL is 0.7646, so the lens is neither telephoto nor retrofocus.

At the e line, the three groups have calculated standalone focal lengths of +25.0327 mm, −12.6757 mm and +16.0468 mm.

The stop is behind every powered element, so the exit pupil is the physical stop. The calculated entrance pupil lies 12.3505 mm behind the first vertex, and the paraxial exit-to-entrance pupil diameter ratio is 0.7289, against the patent's 0.7290.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to the Object

nₑ = 1.808109, νₑ = 46.34. Glass: Unmatched native e-line lanthanum dense-flint class; supplier unconfirmed. Standalone-in-air f = +18.2118 mm.

The first surface supplies the largest positive surface power in the lens. Because L1 is cemented to L2, the focal length above describes the isolated element only.

The patent requires a large Abbe-number separation within this doublet. LAH65-family catalog glasses are close candidates, but the source names no manufacturer or glass type.

### L2 — Negative Meniscus in the Front Cemented Group

nₑ = 1.812640, νₑ = 25.23. Glass: Unmatched native e-line dense-flint class; supplier unconfirmed. Standalone-in-air f = −50.8310 mm. Its rear surface is the corrected third radius.

The index difference at the cemented junction is small, while the Abbe-number difference between L1 and L2 is 21.11. The junction therefore has almost no power but a strong chromatic effect. The patent links the cemented surface and the final surface to lateral-color control (its fourth condition); this is a design claim, not a measurement of the production camera.

TIH6/SF6-family catalog coordinates are close; no supplier is assigned. The complete front doublet has a calculated focal length of +25.0327 mm.

### L3 — Biconcave Negative Singlet

nₑ = 1.652230, νₑ = 33.57. Glass: Unmatched native e-line flint class; supplier unconfirmed. Standalone-in-air f = −12.6757 mm.

This strong negative middle group lies between the two positive groups. Its contribution to the Petzval sum (−0.0474 mm⁻¹) partly offsets the front (+0.0177 mm⁻¹) and rear (+0.0375 mm⁻¹) contributions. The total Petzval sum is +0.007885 mm⁻¹, a Petzval radius of 126.8 mm.

Several SF2/PBM22/FD2-family catalog entries lie near the source coordinates; none is adopted.

### L4 — Biconvex Positive Rear Singlet

nₑ = 1.716700, νₑ = 42.89. Glass: Unmatched native e-line intermediate-dispersion optical-glass class; original type and supplier unconfirmed. Standalone-in-air f = +16.0468 mm.

The final positive singlet completes the triplet and stands 1.2 mm before the rear stop. Figure 1 labels it L4; the description's single reference to "L5" is inconsistent with that figure and does not imply a fifth element.

The page image prints 1.716700; text-layer copies reading 1.76700 have dropped a digit. The nearest catalog candidate, LAFL4, differs in Abbe number and is not adopted.

## Glass Identification and Spectral Limits

The source table explicitly gives n(546), and Figure 2C labels the e, C′, f′ and g wavelengths. The related EP 0 537 469 B1 table explicitly labels both nₑ and νₑ. The data file's nd/vd fields therefore hold the e-line values, with indexReference set to e; no d-line conversion is made.

Catalog data from OHARA, HOYA, Schott, Hikari, CDGM and Sumita were compared. The front three elements have close family candidates; the fourth has no tight unique match.

All four glass labels remain qualified Unmatched classes. This avoids assigning a supplier, melt or detailed spectrum on the basis of two coordinates. No nC, nF, ng or anomalous-partial-dispersion values are supplied, so chromatic results rest on the Abbe numbers alone. On that basis the paraxial F′–C′ focus difference is about 0.16 mm, the blue focus nearer the lens, and the f/3.5 rim rays for C′, e and F′ land about 25, 28 and 31 µm from the axis in the e-line paraxial plane. Figure 2C draws its on-axis color curves between about 23 and 31 µm there. The partial dispersions needed for the g line are not published.

## Focus Mechanism

The model is fixed at **infinity focus**. The patent gives the infinity state only, with the image 24.5165 mm behind the rear stop, and it tabulates no variable gaps.

The manufacturer brochure specifies active infrared autofocus from 0.65 m to infinity, including an infinity-lock function. It does not state which elements move or give any finite-distance spacings, so no focus movement is modeled. The data file records 0.65 m as the camera's minimum focus distance.

## Aperture, Clearances and Image Plane

The source does not publish clear semi-diameters. Figure 1 suggests approximately 6.6 mm for the cemented front group, 4.0 mm for the middle singlet and 3.9 mm for the rear singlet, subject to schematic-drawing uncertainty. The model uses 6.6 mm, 4.05 mm and 4.0 mm.

The f/3.5 axial ray enters at 4.8047 mm and reaches 3.929 mm on the front of L3 and 3.811 mm on the front of L4, inside those radii. At the 4.05 mm shared radius the first air gap has 0.6237 mm of sag intrusion into its 0.7000 mm axial spacing, leaving 0.0763 mm of air at the rim.

The stop semi-diameter, 3.5447 mm, is the height at the stop of the real axial ray that enters at EFL/(2 × 3.5). It sets the model aperture and is not a published diaphragm size. The paraxial value is 3.5023 mm, a stop 7.00 mm in diameter; the difference is pupil aberration.

The corner of the 24 × 36 mm frame, at an image radius of 21.63 mm, corresponds to a half-field of 32.2°. Distortion is pincushion, +2.1 % at the corner. Off-axis bundles are clipped by the lens rims as well as by the stop, as the patent's relative-illumination plot (Figure 2B) also shows.

The f/3.5 axial marginal ray crosses the axis 25.5267 mm behind the last glass, 0.189 mm short of the paraxial focus at 25.7161 mm, and meets the image plane 0.028 mm from the axis. The image plane is the patent's tabulated one, 25.7165 mm behind the last glass. It has not been moved to a best-focus position.

## Patent Conditions and Model Agreement

With the 10.8000 mm lens length and the 25.7165 mm back focus, the model gives BL/S′ = 0.420 against the claimed limit of 0.6, and S′ = 0.765 f against the limit of 0.8 f. The glass conditions n₂ > 1.7 and ν₁ − ν₂ > 15 are met directly (1.8126 and 21.11).

The fourth condition compares the lateral-color Seidel coefficients F₂ of surfaces 2 and 7, and the patent prints it without absolute-value bars or a normalization. A primary lateral-color calculation gives contributions of nearly equal size and opposite sign (ratio −0.99). That matches the patent's description of the cemented surface compensating the last surface, and in magnitude the ratio lies inside the claimed 0.7 to 1.3 range.

With the third radius corrected, the model reproduces the patent's focal length, image distance and pupil magnification, its distortion plot (within 0.04 percentage points out to 20 mm) and its sagittal field curve (within 0.012 mm out to 12 mm). The tangential curve of Figure 2D is matched less closely, within 0.03 mm out to 15 mm. Beyond about 12 mm the plotted field curves depart from a chief-ray calculation; the bundles there are heavily vignetted, and the patent does not state the reference ray its plots use.

## Sources

- [US 5,321,555 A](https://patents.google.com/patent/US5321555A/en), PDF page 1 for metadata, page 2 Figure 1, pages 3–6 Figures 2A–2D, pages 7–8 for the prescription (printed twice), the paraxial summary and the claims.
- [EP 0 537 469 B1](https://patents.google.com/patent/EP0537469B1/en), the European family member: its table and paraxial summary are identical to the US print, including the third radius.
- [Leica Mini II manufacturer brochure](https://www.summilux.net/documents/Leica-Mini-II.pdf), PDF pages 2–3 and 6 for the product, optical section and technical specifications; French edition code 910 533, IV/95/FY/L.
- [OHARA catalog downloads](https://oharacorp.com/optical-glass/), [HOYA Optical World](https://www.hoya-opticalworld.com/), and the Schott, Hikari, CDGM and Sumita catalogs. Catalog comparisons identify possible families, not the original suppliers.
