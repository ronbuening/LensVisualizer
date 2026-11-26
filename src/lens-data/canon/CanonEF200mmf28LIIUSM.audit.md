# CANON EF 200mm f/2.8 L II USM — Audit Log

## Source

[JP H05-027163 A, *Telephoto lens* (望遠レンズ)](https://patents.google.com/patent/JPH0527163A/ja), Tsunefumi Tanaka, Canon Inc. Application JP H03-202396 was filed 17 July 1991 and published 5 February 1993; the patent was later granted as JP 3084810 B2. Numerical Example 2 on p. 4 gives the infinity prescription. Figure 2 is its section, Table 1 gives the condition values of the three examples, and Figures 5A and 5B show the aberrations at infinity and at −0.15×. Paragraph 0001 describes a telephoto of about 200 mm and f/2.8 for 35 mm film, suited for example to autofocus cameras.

Canon's camera museum gives the release dates and specifications of the original EF 200mm f/2.8L USM (December 1991) and the EF 200mm f/2.8L II USM (March 1996), and shows the Mark II's optical section with its two UD elements filled blue. Canon's instructions for the original lens and its 2023 EF lens catalogue give the hoods, the focusing motor and the Mark II's extender combinations. [Canon, original lens](https://global.canon/ja/c-museum/product/ef304.html) · [Canon, Mark II](https://global.canon/en/c-museum/product/ef333.html) · [Canon optical section](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef333-lens-construction.gif) · [Canon, original lens instructions](https://gdlp01.c-wss.com/gds/1/0900001601/01/WIDE_STANDARD_01_EN.pdf) · [Canon EF Lens Catalogue 2023](https://asia.canon/media/document/2023/12/21/3ab66650d8174a24a51e4eaeab8d5cc9_Canon+EF+Lens+Catalogue+2023.pdf)

## Transcription Check

All seventeen rows of Numerical Example 2 were reread against the p. 4 page image; the typeset text layer agrees with it. The sixteen signed radii, sixteen axial intervals and nine index/Abbe-number pairs agree with the model at the printed scale in millimetres. No value disagrees.

Surface 11 is the diaphragm, a flat surface 23.40 mm behind surface 10. C1 spans surfaces 12–14 and C2 spans 15–17. Surface 5 has a finite radius of −1971.05 mm, not a plane. The table contains no aspheres, camera-side plate, back focus or finite-focus spacings. The aberration legend names the d and g lines, which supports reading the indices at the d line.

## First-Order Check

| Quantity at infinity | Numerical Example 2 | From the prescription |
| --- | ---: | ---: |
| Effective focal length | 195.2 mm | 195.166 mm |
| Nominal f-number | 2.8 | 2.80 |
| Full field | 12.6° | 12.6° |
| Last vertex to image | Not printed | 69.852 mm |
| First vertex to image | Not printed | 178.912 mm |
| G1 focal length / system focal length | 0.65 | 0.646 |
| Absolute G2 focal length / system focal length | 0.40 | 0.399 |
| G3 focal length / system focal length | 0.67 | 0.668 |
| Front radii of elements 4 and 5, R7/R9 | 1.26 | 1.256 |
| Radii of element 5, R9/R10 | 1.32 | 1.318 |

The film plane coincides with paraxial infinity focus to 0.0001 mm. The iris sets the full f/2.80 aperture. The field is held at the printed 12.6°; the clear radii alone would pass chief rays to a 9.75° half-field. The surfaces have positive edge thickness and stay clear of each other.

## Values Not Printed in the Patent

Figure 2 spans 464 pixels between the first and last vertices, a distance of 109.06 mm in the table. The resulting scale of 4.255 pixels/mm gives the clear semi-diameters below. At six surfaces the f/2.8 axial marginal ray falls outside the drawn glass. Those radii are the ray heights rounded upward to 0.01 mm.

| Surface | Figure 2 radius (mm) | Model radius (mm), in surface order |
| --- | ---: | --- |
| 1–2 | 34.0 | 34.86, 34.55 |
| 3–4 | 31.4 | 31.63, 31.4 |
| 5–6 | 29.3 | 30.10, 29.3 |
| 7–8 | 26.5 | 26.94, 26.5 |
| 9–10 | 23.5 | 23.62, 23.5 |
| 12–14 | 16.8 | 16.8 throughout |
| 15–17 | 15.9 | 15.9 throughout |

The stop position is printed. Its radius of 16.92 mm follows from the paraxial pupil magnification at f/2.8. The real axial ray that just reaches this iris enters at a height of 34.00 mm, giving f/2.87 from its entrance beam diameter. A ray entering at the nominal pupil radius of 34.851 mm reaches the stop at 17.36 mm; Figure 2 draws the stop opening at about 17.4 mm. The glass rims clear this ray as well.

The image-side gap is the calculated paraxial back focus. The only lens position is infinity: `focus.closeFocusM` is 10¹⁵ m, which stands for infinity. The 6.26° chief ray reaches the 21.633 mm corner of the 36 × 24 mm frame, and at the 6.3° half-field 53.3% of the pupil area transmits in the geometric calculation.

The patent prints no close-focus spacings. A paraxial calculation that moves only C1, with the sum of the two gaps fixed at 32.00 mm, gives these positions; they are not in the model.

| Condition | Gap after stop (mm) | Gap after surface 14 (mm) | Object to image (m) | Magnification |
| --- | ---: | ---: | ---: | ---: |
| Infinity, printed | 3.000 | 29.000 | ∞ | 0 |
| Figure 5B | 17.100 | 14.900 | 1.559 | −0.150 |
| Canon's 1.5 m, from the image | 17.815 | 14.185 | 1.500 | −0.157 |
| Canon's 1.5 m, from the front vertex | 15.848 | 16.152 | 1.679 | −0.137 |

The patent gives no trade names or wavelength-specific indices. Eight distinct catalog equivalents cover the nine printed glass pairs. The largest departures are 0.000004 in index (L9) and 0.07 in Abbe number (L3). The UD identification at L2 and L4 follows Canon's marked section and their printed Abbe number of 81.6.

## Product Identification

Canon shows five singlets, a diaphragm and two cemented doublets, with the UD menisci at elements 2 and 4. Only Example 2 combines those positions with the cemented negative focusing pair and fixed positive rear pair. Examples 1 and 3 use the same low-dispersion glass at elements 1 and 2. Figure 3 and its 2.00 mm gap show that Example 3 separates its focusing pair, giving nine elements in eight air-separated groups. The layout strongly identifies Example 2 with the Mark II. [Canon optical section](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef333-lens-construction.gif) · [Patent, Figures 1–3](https://patents.google.com/patent/JPH0527163A/ja)

Canon's original lens of December 1991 and the Mark II of March 1996 share the 200 mm f/2.8 specification, nine elements in seven groups, two UD elements, eight blades, f/32 minimum aperture and 1.5 m closest focus at 0.16×. Canon gives a 12° diagonal angle of view for both; the patent prints 12.6° for its 195.2 mm example. The original has a built-in pull-out hood and weighs 790 g; the Mark II comes with a detachable ET-83B II hood and weighs 765 g. Both use a ring-type ultrasonic motor with full-time manual focusing, and Canon describes the Mark II as rear focusing. The patent was filed before either version went on sale. [Canon, original lens](https://global.canon/ja/c-museum/product/ef304.html) · [Canon, original lens instructions](https://gdlp01.c-wss.com/gds/1/0900001601/01/WIDE_STANDARD_01_EN.pdf) · [Canon, Mark II](https://global.canon/en/c-museum/product/ef333.html) · [Canon EF Lens Catalogue 2023](https://asia.canon/media/document/2023/12/21/3ab66650d8174a24a51e4eaeab8d5cc9_Canon+EF+Lens+Catalogue+2023.pdf)

The patent's design focal length of 195.2 mm accounts for the difference from the 200 mm product marking. Canon's 1.5 m and 0.16× fit a distance measured from the film plane: the calculation above gives 0.157× at 1.5 m from the image and 0.137× at 1.5 m from the front vertex. Canon's 0.16× maximum magnification is a different condition from the patent's −0.15× aberration plot. With the Extender EF 1.4× III the Mark II becomes 280 mm f/4 at 0.22×, and with the EF 2× III 400 mm f/5.6 at 0.32×, with autofocus in both cases. [Canon EF Lens Catalogue 2023](https://asia.canon/media/document/2023/12/21/3ab66650d8174a24a51e4eaeab8d5cc9_Canon+EF+Lens+Catalogue+2023.pdf)

## Corrections, 2026-11-25

- The printed f/2.8 aperture and 12.6° field were already in the first model and stay. A reduced off-axis ray fan, at about a third of the half-field, was removed, so the diagram draws its off-axis rays at the default fraction of the 6.3° half-field.
- The first clear radii were estimates wider than the drawing. The front element was 38 mm in radius, a 76 mm element larger than the 72 mm filter thread and about 12% above Figure 2. Most of the others stood 6–13% above the figure; only the first two surfaces of the rear doublet agreed with it. Figure 2 measurements replaced them. At surfaces 1, 2, 3, 5, 7 and 9 the radius was raised to the height of the f/2.8 axial marginal ray, by at most 0.86 mm, so that the iris rather than a rim sets the aperture.
- The image distance stays at the calculated paraxial back focus, given as 69.8518 mm.
- Focus stays at infinity, the only position the patent prints. The −0.15× state of Figure 5B and Canon's 1.5 m are described by the calculated doublet positions above, not added to the model.
- The key and display name were set to the maker-and-product form, the page was made visible, and the bibliography gained the inventor, the assignee, the 1993 publication year and the example's printed name, Numerical Example 2.
- The elements were named L1–L9 with their shape types, thick-lens focal lengths in air and roles. The two cemented pairs are marked C1 and C2, and groups G1 (surfaces 1–10), G2 (12–14) and G3 (15–17) follow the patent's three units.
- Catalog equivalents were added for dispersion, keeping the printed nd and νd. The differences are catalog minus patent.

| Elements | Label | Δnd | Δνd |
| --- | --- | ---: | ---: |
| L1 | S-FSL5 (Ohara) | −0.0000001 | +0.04 |
| L2, L4 | FCD1 (Hoya) | −0.0000002 | +0.01 |
| L3 | S-LAH53 (Ohara) | −0.0000022 | −0.07 |
| L5 | S-BAM3 (Ohara) | +0.0000032 | +0.02 |
| L6 | S-TIH6 (Ohara) | +0.0000007 | +0.03 |
| L7 | S-BAM12 (Ohara) | −0.0000001 | −0.03 |
| L8 | S-TIM28 (Ohara) | +0.0000008 | −0.02 |
| L9 | S-LAH51 (Ohara) | −0.0000042 | 0.00 |

- L2 and L4 carry an inferred UD designation, from the blue fills of Canon's section and their printed νd of 81.6.
- The lens was identified as the Canon EF 200mm f/2.8L II USM for the Canon EF mount and 35 mm full frame. The catalog records 200 mm, f/2.8, 1.5 m, nine elements in seven groups, the full-stop scale f/2.8, 4, 5.6, 8, 11, 16, 22 and 32, and eight blades from Canon's museum page. Extender compatibility follows Canon's 2023 catalogue, which lists the lens with the Extender EF 1.4× III and 2× III.
- The subtitle and specification chips give the patent, example, assignee and inventor, the construction, the 195.2 mm design focal length, the all-spherical design, the two UD elements and rear focusing.

At infinity the finished model gives 195.166 mm EFL, f/2.80, 69.852 mm of back focus from surface 17, a 16.92 mm iris radius, 178.912 mm from the first vertex to the image and a 6.3° half-field.

## Remaining Questions

- Canon's optical section does not dimension the clear apertures or the iris. The production radii, spacings and glass suppliers remain undocumented.
- The production focus travel to 1.5 m is undocumented. The patent prints no close-focus spacings, and the calculated 14.82 mm of doublet travel assumes paraxial focus with only C1 moving.
- Canon's documents give the original lens and the Mark II the same construction and optical specifications, but none of them states whether the optical design changed between the versions.
- The corner transmission of the production lens, against the calculated 53.3%, is unknown.
