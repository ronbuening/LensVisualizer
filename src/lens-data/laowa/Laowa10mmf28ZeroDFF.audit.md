# LAOWA 10mm f/2.8 Zero-D FF — Audit Log

## Source

[CN 221303696 U, _Compact Ultra-Wide-Angle Lens_ (小型化超级广角镜头)][patent], names Dayong Li (李大勇) and Anhui Changgeng Optics Technology Co., Ltd. The filing and priority date is 2023-12-13. The utility model was granted and published on 2024-07-09. Example 1's prescription and focus table appear in ¶0064 (PDF p. 7), the construction in Fig. 1 (p. 12), and the infinity and near aberration plots in Fig. 2 (p. 13).

Laowa publishes the [product specifications][laowa-en], [aperture range and focus specifications][laowa-cn], and [colour-coded construction drawing][diagram].

## Transcription Check

The radii and spacings of all 25 surfaces, all 15 helium d-line index and Abbe-number pairs, the stop at surface 11, and all 20 aspheric polynomial coefficients agree with the patent page images. The prescription retains the printed scale. The last gap is 13.143 mm at both focus settings. The variable gaps after surfaces 4A and 10 sum to 10.091 mm in both rows.

The sag equation in ¶0027 uses $1+K$, given as $\varepsilon$ in the tables. Examples 2 and 3 print $\varepsilon=1$ for aspheres with a spherical base. Subtracting one gives $K$ of 0.556, −0.5949, −19.2397 and −10.0303 at surfaces 3A, 4A, 24A and 25A. At f/2.87 these conics reproduce the curves in Fig. 2. The d-line longitudinal spherical aberration is −0.009, −0.038, −0.038 and −0.024 mm at pupil fractions 1, 0.85, 0.7 and 0.5, and distortion is +0.53% at 40° and −0.15% at 64.6°. Using $\varepsilon$ directly for $K$ produces +0.565 mm at the full pupil and about −20% distortion at 40°. It also ends the profile of surface 4A at about 6.0 mm, short of the 9.75 mm clear radius in Fig. 1.

## First-Order Check

| Quantity at infinity         | Patent                       | Model                              |
| ---------------------------- | ---------------------------: | ---------------------------------: |
| Effective focal length       |                   10.2855 mm |                         10.2849 mm |
| Full-aperture f-number       |                         2.87 |                               2.87 |
| Half field                   |                        64.6° |                     64.6° maximum |
| Image height                 |            21.60 mm (Fig. 2) | 21.60 mm at 64.57°, 21.63 mm at 64.6° |
| First surface to image       |   89.550 mm (sum of spacings) |                          89.550 mm |
| Final air gap                |                    13.143 mm |                          13.143 mm |
| Paraxial back focal distance |                            — |                          13.182 mm |

The image plane is 0.039 mm ahead of the paraxial infinity focus, near the focus of the 0.7 pupil zone. The surfaces retain positive edge thickness and separation, and the iris admits the full axial f/2.87 beam. At infinity the chief ray reaches the 43.20 mm circle from Fig. 2 with all rims clear. At the near setting it reaches 21.40 mm at 64.6°, or 99.1% of the patent image height. A near-setting chief ray at about 64.9° reaches the 21.65 mm full-frame corner with all rims clear. At the 64.6° edge about 60% of the geometric pupil clears the rims at infinity and about 63% at near focus.

## Values Not Printed in the Patent

The iris radius of 5.23 mm follows from the entrance pupil at f/2.87 and the paraxial ray height at the printed stop. The clear radii come from the optical profile endpoints on both sides of the axis in Fig. 1. The figure is a 150 dpi image drawn at 8.19 px/mm, measured over the 76.407 mm between the first and last lens vertices. The image plane falls at the same scale. The arc of surface 1 confirms the scale radially: its sag reads 2.90 mm at a height of 12.45 mm and 6.73 mm at 18.31 mm, against 2.90 mm and 6.77 mm from the prescription. One pixel spans 0.12 mm. Flat lands and barrel outlines establish the outer contour where they extend beyond the optical profiles.

| Surface | Clear radius and figure comparison                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 2       | 12.45 mm, where the curve meets the rear land of L1 (about 12.5 mm in the drawing). The land runs out to the 18.6 mm rim.                  |
| 4A      | 9.75 mm, at the rear land of L2, which runs out to the 13.6 mm rim                                                                         |
| 8       | 7.95 mm, at the front land of L5 (about 8.07 mm in the drawing), which runs out to the 8.9 mm rim. Surfaces 7 and 8 meet at about 8.08 mm. |
| 16–17   | 7.10 mm, inside the roughly 7.2 mm visible at surface 16. The two profiles of L10 would meet at 7.27 mm.                                   |
| 21      | 7.94 mm, at the front land of L13, which runs out to its 10.25 mm rim                                                                      |
| 24A     | 12.50 mm, where the polynomial begins to depart from the drawn curve. A flat land runs out to the 14.05 mm rim.                            |

Surfaces 2 and 8 end 0.18 mm and 0.014 mm from the surfaces facing them, so the cross-gap limit is 0.97 of the gap. Surface 2 meets its land at a slope of 65.9°, so the rim-slope limit is 66°. Fig. 1 also draws short flat lands at the cemented faces of L3, L9 and L11. Those are left out, and the three elements end at their cemented radii.

The patent's 500 mm row does not identify its distance reference. At 500 mm from the first surface, the paraxial focus lies 0.045 mm behind the printed image plane, with approximately −0.020× magnification. With 500 mm measured from the image plane, that offset is 0.089 mm. Both are within a 0.242 mm paraxial defocus tolerance. The offsets relative to the infinity paraxial focus are +0.006 mm and +0.049 mm, respectively. The smaller residual supports the first-surface reading, which puts the object 589.55 mm from the printed image plane.

Intermediate gaps are interpolated between the two printed rows. At half travel, the paraxial focus is 0.035 mm behind the printed plane and 0.004 mm ahead of the infinity paraxial focus. Its departure from the trend between the endpoints is 0.007 mm. With the infinity offset accounted for, the two rows describe the travel within 0.02 mm.

## Product Identification

The [Laowa drawing][diagram] matches all 15 elements in nine air-separated groups, including four cemented doublets and the triplet. Its aspherical markings align with L2 and L15, and its ED markings with L5, L10 and L12. The drawing marks L1, L3, L8, L9, L11 and L13 as ultra-high-refraction glass and shows both doublets of the patent's moving group ahead of the stop. Example 2 has 16 elements at 12.35 mm. Example 3 has a 14.3 mm focal length and aspheres on both front elements. The correspondence identifies Example 1 as the published design of the 10 mm lens.

The full-frame lens is specified at 10 mm, f/2.8–f/22, 130.4°, 0.12 m minimum focus from the image plane, 0.24× maximum magnification and a 77 mm filter thread. The five-blade version has stepping-motor autofocus on Sony E and Nikon Z and manual focus on Canon RF and L-Mount. The 14-blade version is manual focus on all four mounts. Both versions are covered here. [Laowa product page][laowa-en], [Laowa specifications][laowa-cn].

## Corrections, 2026-11-24

- The aperture opens from f/8 to the printed f/2.87 at the original stop position. The stop radius is derived from the specified entrance pupil. The marked full stops run from the marketed f/2.8 through f/22.
- The printed 129.2° field replaces a 6° field, with the 43.20 mm image circle taken from the 21.60 mm height in Fig. 2. The original 1.3–2.2 mm clear radii clipped the wide field. Fig. 1 supplies the replacement radii, with clearances and profile allowances as listed above.
- The printed 500 mm focus row joins the infinity spacing. D4 increases from 6.484 to 6.641 mm and D10 decreases from 3.607 to 3.450 mm as G2 moves 0.157 mm toward the image. The intervening positions are interpolated. The near row gives about 0.590 m object to image, short of the production lens's range to 0.12 m.
- Example 1 is identified with the Laowa 10mm f/2.8 Zero-D FF, and the patent bibliography, full-frame format, four mounts and marketed focal length, aperture and minimum focus are recorded. No blade count is recorded because the five-blade and 14-blade versions share these optics. The element descriptions give their in-air focal lengths, optical roles and maker designations.

Three optical-glass equivalents replace unidentified labels on seven elements. The differences below are catalog minus printed values, using the d-line index and C/d/F Abbe number.

| Elements     | Glass label   |       Δnd |     Δνd |
| ------------ | ------------- | --------: | ------: |
| L3, L8, L9   | E-FDS1 (Hoya) | −4.0×10⁻⁷ | +0.0004 |
| L4           | H-ZF1 (CDGM)  | +3.2×10⁻⁶ | +0.0023 |
| L5, L10, L12 | H-FK61 (CDGM) | −1.1×10⁻⁸ | +0.0028 |

L1, L2, L6, L7, L11, L13, L14 and L15 retain unidentified glasses with their printed index and Abbe number. At infinity the finished model gives 10.285 mm EFL, f/2.87, a 5.231 mm stop radius, 13.182 mm paraxial back focus and a 64.6° half field.

2026-11-24 rim review:

- Surface 2 rises from 12.20 to 12.45 mm and gains a flat land out to 18.6 mm. In Fig. 1 its curve meets the rear land of L1 at about 12.5 mm on both sides of the axis. The land lies 9.64 mm behind the first vertex in the drawing and 9.47 mm in the model. The cross-gap limit rises from 0.90 to 0.97 and the rim-slope limit from 64.2° to 66° to admit the radius.
- Surface 8 rises from 7.70 to 7.95 mm and gains a flat land out to 8.9 mm. The figure ends its curve at about 8.07 mm on the front land of L5, where L4 and L5 nearly touch.
- Surfaces 4A, 21 and 24A keep their radii and gain flat lands out to 13.6, 10.25 and 14.05 mm. These give L2, L13 and L15 the square rims of Fig. 1, in keeping with the stepped front elements and flat-rimmed last element of [Laowa's drawing][diagram].
- Every other radius stays, each within about 0.15 mm of the figure.
- At the 64.6° field edge the clear share of the geometric pupil rises from 49.9% to 59.7% at infinity and from 52.7% to 62.8% at the near setting. No field loses light, and the lands cost none. The half field remains 64.6° and the aperture f/2.87.

2026-11-24 final check against the drawing:

- The finished page was compared with Fig. 1 and with [Laowa's drawing][diagram]. The 25 vertices of Fig. 1 fall within one pixel of the prescription at 8.19 px/mm. Read on both sides of the axis, the rims of L1, L2, L3, L4, L5–L6, L7–L8, L9, L11, L12, L13, L14 and L15 come to 18.54, 13.53, 10.48, 9.75, 8.85, 6.2, 7.1, 8.35, 9.65, 10.15, 10.75 and 13.95 mm at the centre of the drawn line. Each lies within 0.12 mm, one pixel, of the stored radius. The curves end on their lands at about 12.5, 9.75, 8.15, 7.95 and 12.0 mm at surfaces 2, 4A, 8, 21 and 24A. At surface 24A the 12.5 mm radius puts the land 0.05 mm ahead of the drawn one, less than half a pixel. No radius or land changes.
- The five lands and the two raised radii lose no light at any field against the earlier radii, so all of them stay.
- The lands that Fig. 1 draws at the cemented faces of L3, L9 and L11 stay left out, because a land cannot sit on a cemented face. L3 and L11 show a slanted rim where Fig. 1 and Laowa's drawing show a square shoulder. Fig. 1 carries surface 22 on to the 10.75 mm rim of L14, past the 10.15 mm rim of L13. The model ends that surface at 10.25 mm, and the rim of L14 slants from there to 10.8 mm.
- The description of L1 now says that it receives the wide-field bundles and supplies the first negative power of G1. It said before that L1 spreads the bundles into G1, the group it belongs to.
- Element shapes and focal lengths, the three group brackets, the five cemented-group brackets, the four aspherical surface marks and the stop position agree with the patent table and Fig. 1. The aspherical marks on L2 and L15 and the ED marks on L5, L10 and L12 agree with the colours of Laowa's drawing, as do the six ultra-high-refraction elements.
- From infinity to the near setting D4 grows and D10 shrinks by 0.157 mm, so G2 moves toward the image as ¶0008 states. The displayed distance falls steadily, through 1.47 m at half travel to 0.73 m at the near setting.
- At the edge of the f/2.87 pupil the g-line focus lies about 0.08 mm ahead of the d-line focus, against about 0.085 mm in Fig. 2.
- No catalog glass comes close to any of the eight unidentified pairs in both index and Abbe number. The nearest is S-LAH55 (OHARA) for L7, 0.00044 higher in index and 0.73 higher in Abbe number. Example 2 prints 1.93323/20.88, 1.49845/81.61, 1.91048/31.31 and 1.88622/40.15, which keep the Abbe numbers of glasses in Examples 1 and 3 with shifted indices, and its 1.88766/45.00 repeats the 45.00 of L1. The unidentified pairs therefore look like design variables, not catalog glasses. CDGM's H-ZF62 has the same 1.92286/20.88 as E-FDS1.

## Remaining Questions

- The printed condition summary gives $\mathrm{ST}_L/L$ as 0.489. The spacings and Fig. 1 give 0.428. The summary gives $|F_2/F_1|$ as 0.881, while the prescription gives 2.903. Its $|F_2/F_3|$ is 0.879, close to the printed ratio. The reason for the discrepancies is unknown.
- Whether the reported same-day invention application CN 117706739 A carries the same prescription remains unconfirmed.
- Exact production rim sizes, glass suppliers and melts are unknown. The published specifications give the two blade counts, with diaphragm shape and detachable teleconverter compatibility unspecified.
- The 500 mm datum remains inferred. The printed image plane lies 0.039 mm ahead of the infinity paraxial focus at about the 0.7 pupil-zone focus. At the near setting a paraxial readout using the printed image plane gives about 0.73 m object to image. The patent's 500 mm figure corresponds to about 0.590 m object to image under the inferred datum.

[patent]: https://patents.google.com/patent/CN221303696U/zh
[laowa-en]: https://www.venuslens.net/product/laowa-10mm-f-2-8-ff-zero-d/
[laowa-cn]: https://www.venuslens.com/camera-lens-80
[diagram]: https://www.venuslens.net/wp-content/uploads/2024/02/Laowa-10mm-F2.8-Optical-Structure.jpg
