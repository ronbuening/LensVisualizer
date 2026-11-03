# SIGMA 10–20mm f/3.5 EX DC HSM

## Patent Reference and Design Identification

**Patent:** JP 2010-243737 A  
**Application Number:** JP 2009-091645  
**Filed:** April 6, 2009  
**Published:** October 28, 2010  
**Inventors:** Noriyuki Ogasawara; Yutaka Kamimura  
**Assignee:** Sigma Corporation  
**Title:** 変倍結像光学系 / Variable Imaging Optical System  
**Example details:** 数値実施例4, paragraph 0044, Figure 22; three infinity stations and 26 numbered rows, with the stop at row 10.

Sigma's discontinued product page identifies the **10–20mm F3.5 EX DC HSM**, not the separate f/4–5.6 design. Its construction drawing shows 13 elements in 10 groups, with aspherical elements at positions 1, 2, 3 and 13, an SLD element at position 7 and ELD elements at positions 10 and 12. The patent adds two thin aspherical layers, 0.200 mm at surface 5A and 0.150 mm at surface 24A, so the model holds 15 optical media while the element count stays at Sigma's 13. Of the patent's six examples, Example 4 fits this construction best: Examples 1 and 5 have 14 elements, Examples 2 and 3 carry aspheres on only three elements, and Example 6 prints one set of coefficients for all four aspherical surfaces. Construction and date support a probable production-design association, not an authenticated factory prescription.

The product page lists APS-C/DC coverage, seven diaphragm blades, minimum f/22, 24 cm minimum focus distance, 1:6.6 maximum magnification, an 82 mm filter, 87.3 × 88.2 mm dimensions and 520 g, with specifications stated for Sigma SA. The length runs from the filter surface to the mount, not along the vertex track. Mount variants are Sigma SA, Canon EF, Nikon F, Pentax and Sony A. Sigma's 109.7–70.7° field range depends on mount and sensor, since it warns that DC crop factors run 1.5, 1.6 and 1.7, and it does not exactly match the patent's 109.838–72.167°. The product specifications give no focus movement or clear apertures.

## Prescription and Architecture

Four groups have signs negative–positive–negative–positive. G1 contains four lenses, the third with the first thin aspherical layer bonded to its front. G2 contains a cemented doublet and a positive singlet; G3 a cemented doublet; G4 a positive singlet, a cemented negative/positive doublet and a final positive meniscus with the second thin layer. The stop is row 10, immediately before G2 and 1.400 mm ahead of r11, and moves with G2. All four groups move with zoom, and the patent figure shows G1 reversing. There are 25 refracting interfaces plus the stop, four of them aspherical, and no rear filter or sensor plate.

The patent defines nd and νd in paragraph 0037, and the claims specify the d-line at 587.6 nm. Radii, thicknesses, Abbe numbers and aspheric coefficients are as printed. An ELD or SLD marking on Sigma's drawing does not name a glass.

Example 4 prints f = 10.355/14.992/19.299 mm and Bf = 38.240/43.030/48.881 mm at its three stations, but prints nd only to three decimals. As printed, the table traces to f = 10.342/14.969/19.265 mm and a paraxial back focus of 38.159/42.929/48.753 mm, 0.081–0.128 mm short of the printed image planes. Example 1 of the same patent prints its indices to more digits, and five of Example 4's glasses recur there at Abbe numbers that round to Example 4's: 1.5184, 1.84666, 1.4586, 2.00069 and 1.48749, against the printed 1.518, 1.847, 1.459, 2.001 and 1.487. Example 1's own table traces to its stated f and Bf within about 0.001 mm. The model uses those five values on the seven media that carry them, and now traces to f = 10.354/14.990/19.296 mm and a back focus of 38.229/43.013/48.857 mm.

A back-focus offset remains. The image plane stays at the printed Bf, 0.011/0.017/0.024 mm behind paraxial focus at the three stations. The indices printed as 1.804, 1.699, 1.904 and 1.673 look rounded in the same way: their Abbe numbers match HOYA TAF3, E-FD15, TAFD25 and E-FD5, whose catalog indices 1.8042, 1.69895, 1.90366 and 1.6727 would bring f within 0.001 mm and back focus within 0.0003 mm of the printed values. Example 1 does not print those glasses, so that is a catalog inference, and the model keeps them as printed.

The isolated group focal lengths are −15.436, +30.324, −43.011 and +35.467 mm, and the Petzval sum is +0.007405 mm⁻¹. At the wide end the traced back focus over focal length is 3.692, against 3.693 from the printed values; both satisfy the retrofocus claim bound. A complete Seidel decomposition is not reproduced. The patent gives longitudinal and lateral aberration plots, and the functional interpretations below are qualitative.

## Element-by-Element Analysis

Sigma's 13 elements are named L1–L13, and the diagram uses the same numbering. The patent names no elements; its own L1–L4 are the four groups, written G1–G4 here so the two sets of labels do not clash. H1 and H2 are the thin aspherical layers, which Sigma does not count as elements. Each isolated focal length is the element's thick-lens value in air; an asphere's higher-order terms do not alter paraxial vertex power.

### L1 — Aspheric Negative Meniscus

nd = 1.691, νd = 53.052. Glass: M-LAC130 (HOYA moulding glass) as a dispersion proxy; no catalog glass has these coordinates. Isolated f = −29.11 mm.

The large negative front asphere establishes the retrofocus entrance, and the patent credits this surface with controlling distortion and coma. Its front face runs to a 26.4 mm rim and its rear curve ends at 17 mm, with a flat land from there to the rim, as Figure 22 draws it. These heights are read from the figure, not published mechanical dimensions.

### L2 — Aspheric Negative Meniscus

nd = 1.769, νd = 49.428. Glass: MC-TAF101-100 (HOYA moulding glass, coordinate equivalent). Isolated f = −89.70 mm.

The second negative meniscus continues the negative lead. Its own aspheric polynomial runs through A12 and differs from the first surface's. The element is air-spaced.

### H1 — Thin Aspherical Layer

nd = 1.5184 (printed 1.518), νd = 52.095. Glass: unmatched, taken as resin because the patent states no material; its g-line partial comes from a later Sigma patent. Isolated f = −931.35 mm.

This 0.200 mm layer carries surface 5A and is bonded to L3 at r6. At the inferred 12.4 mm rim its thickness falls to 0.109 mm, a limit of the inferred clear aperture, not a patent tolerance.

### L3 — Negative Meniscus

nd = 1.804, νd = 46.502. Glass: TAF3 (HOYA catalog equivalent, catalog nd 1.8042). Isolated f = −38.16 mm.

The underlying negative meniscus shares r6 with H1. Keeping both indices and the cemented interface preserves the printed optical path; combining the two would change power and aspheric placement.

### L4 — Positive Meniscus

nd = 1.699, νd = 30.050. Glass: E-FD15 (HOYA catalog equivalent, catalog nd 1.69895). Isolated f = +50.69 mm.

This positive meniscus completes negative G1, supplying opposite power and a higher-dispersion contribution.

### L5 — Negative Meniscus

nd = 1.904, νd = 31.315. Glass: TAFD25 (HOYA catalog equivalent, catalog nd 1.90366). Isolated f = −21.90 mm.

The thin negative meniscus starts G2 behind the stop and is cemented to L6.

### L6 — Biconvex Positive

nd = 1.673, νd = 32.170. Glass: E-FD5 (HOYA catalog equivalent, catalog nd 1.6727). Isolated f = +20.93 mm.

The positive partner supplies the greater positive power of the G2 doublet. The real r12 interface uses both indices, not the air contrast behind the isolated focal length.

### L7 — Biconvex Positive

nd = 1.497, νd = 81.607. Glass: FCD1 (HOYA catalog equivalent). Isolated f = +34.24 mm.

This low-dispersion positive singlet completes G2 at the position Sigma marks SLD. A catalog-compatible fluor-crown coordinate is not proof of the manufactured melt.

### L8 — Biconcave Negative

nd = 1.713, νd = 53.938. Glass: LAC8 (HOYA catalog equivalent). Isolated f = −17.51 mm.

The negative member starts net-negative G3 and is cemented to the higher-index positive L9. Their spacing stays fixed while the group translates in zoom.

### L9 — Positive Meniscus

nd = 1.84666 (printed 1.847), νd = 23.784. Glass: FDS90 (HOYA catalog equivalent). Isolated f = +29.36 mm.

The positive meniscus balances L8, leaving G3 net negative. The patent publishes no focus movement for this group, and none is inferred from its zoom motion.

### L10 — Biconvex Positive

nd = 1.4586 (printed 1.459), νd = 90.279. Glass: FCD10A (HOYA catalog equivalent, catalog νd 90.19). Isolated f = +39.51 mm.

The positive biconvex singlet begins G4 at the first position Sigma marks ELD.

### L11 — Negative Meniscus

nd = 2.00069 (printed 2.001), νd = 25.458. Glass: TAFD40 (HOYA catalog equivalent). Isolated f = −23.25 mm.

This high-index, high-dispersion negative meniscus begins the strongly dispersive G4 cemented pair.

### L12 — Biconvex Positive

nd = 1.4586 (printed 1.459), νd = 90.279. Glass: FCD10A (HOYA catalog equivalent, catalog νd 90.19). Isolated f = +29.29 mm.

The positive partner at the second position Sigma marks ELD is cemented to L11 at r22. The pair is the patent's cemented lens Lc, which carries its Abbe-ratio, index-ratio and cemented-radius conditions and corrects lateral color.

### H2 — Thin Aspherical Layer

nd = 1.5184 (printed 1.518), νd = 52.095. Glass: unmatched, taken as resin because the patent states no material; its g-line partial comes from a later Sigma patent. Isolated f = +483.04 mm.

This 0.150 mm layer is bonded to L13 at r25 and carries surface 24A. Its minimum thickness, 0.089 mm, falls at a height of 7.6 mm inside the radial band, not at its rim.

### L13 — Positive Meniscus

nd = 1.48749 (printed 1.487), νd = 70.440. Glass: FC5 (HOYA catalog equivalent). Isolated f = +103.92 mm.

The final positive meniscus completes G4. H2 and L13 are two optical media in one aspherical element on Sigma's count. The final distance is the printed Bf, not a calculated best-focus value.

## Glass Identification

The patent names no glasses. Twelve catalog labels, on thirteen elements, are assigned from the printed coordinates. On ten of them, on eleven elements, the Abbe numbers match HOYA data to about 0.01, except FCD10A at 90.19 against the printed 90.279. These labels give the chromatic trace catalog dispersion. They do not establish the supplier or the production melt. For TAF3, TAFD25, E-FD5 and E-FD15 the d-line trace keeps the printed three-decimal index while the color channels follow the catalog curves. L1 and L2 are aspherical and carry moulding-glass rows: MC-TAF101-100 sits on L2's printed index, and M-LAC130 stands in for L1 as a proxy, 0.0025 above its print with the Abbe number 0.15 higher. Both keep their printed indices. The patent prints no partial-dispersion data, so the SLD and ELD tags on L7, L10 and L12 rest on Sigma's drawing and on catalog values. H1 and H2 stay unmatched and take a g-line partial of 0.5538 from JP 2019-211703 A Example 2, a later Sigma patent that prints it for a 1.51840/52.10 aspherical resin. That is a proxy: the coordinates match, but nothing shows the same resin.

## Zoom, Aperture and Focus

The model has 33 zoom nodes, and the three the patent prints are exact. Between them, G1–G3 image-relative positions are interpolated linearly and G4 is solved to hold focus on the interpolated image plane. This cam is inferred. The printed gaps are monotone: D9 falls, D15 rises, D18 falls and Bf rises. Between the printed stations the image plane stays 0.011–0.028 mm behind paraxial focus.

G1 moves imageward from wide to middle and objectward from middle to long; G2–G4 move objectward throughout. The printed total lengths of 134.257, 130.547 and 131.577 mm require the G1 reversal. The model places it at the middle station as a corner, not a recovered smooth factory cam.

The stop is row 10, 1.400 mm before r11, and the patent prints no stop diameter. The iris is inferred from the printed f-numbers, 3.611/3.631/3.597, which agree with the patent's stated aim of about f/3.6 (paragraph 0018); the marketed f/3.5 is a rounded figure. The stop rule gives stop radii of 5.227/6.004/6.824 mm and entrance-pupil radii of 1.434/2.064/2.682 mm at the printed stations. The rule is paraxial, so with pupil aberration a real marginal ray at those radii gives a working f-number near 3.62/3.65/3.64, within 1.2% of the printed value. The axial beam clears every inferred rim, even at f/3.5.

Clear apertures are inferred; the patent prints none. They start from Figure 22, the wide state of this example, whose scale is the same along and across the axis. L1 and L4 keep the drawn heights. L1, L2 and L3 are drawn with square rims at 26.4, 17.3 and 12.3 mm. Here they stand at 26.4, 17.35 and 12.4 mm, and their rear curves stop short, at 17, 14.53 and 10.8 mm, with flat lands from there to those heights. Light ends at the curve, not the rim. The figure ends the rear curves of L2 and L3 near 14.2 and 10.7 mm. G3, L10, C3 and L13 stand above the figure, at 9.54, 12.3, 12.31 and 12.65 mm against its 7.93, 11.25, 11.86 and 12.46 mm, which keeps C3 just above L10 as drawn. At the drawn heights of all these rims, corner transmission would fall to about 62/78/68%. C1 and L7 rise with G3, to 9.7 and 10.2 mm against the drawn 8.38 and 8.84 mm, so the heights keep the figure's order, L7 above C1 above G3. Every lens other than L1–L3 uses one radius on both faces, including the thin layers. The largest surface slope in the system is 59.7°, at the edge of surface 2; the aspherical front surface reaches 40.9° at its rim.

Rim vignetting is part of the design. Geometric corner transmission wide open is about 77/95/86% at the three printed stations. At the wide corner, the 17 mm curve end of surface 2 cuts one side of the bundle and the rims of L10, C3 and L13 cut the other, and L3's rear curve end takes about 2 points just inside that corner, at 52°. At the middle and long ends the rim of G3 sets the corner. The meridional fans in Figures 26–28 end tighter than these rims on the side G3 cuts, equivalent to a radius near 7.05 mm at r18, so the plotted design is more vignetted than the model.

Focus is not modeled. The patent prints infinity states only and does not say which group focuses, so the focus control leaves the optics unchanged. Sigma's 24 cm minimum focus distance is listed for reference, and no movement is invented from a single distance specification.

## Aspherical Surfaces

The patent equation uses a conic vertex radius plus even powers A4–A12, with K = 0 on all four aspherical surfaces. The model uses the same convention, so no coefficient scaling or sign conversion is needed. Surface 3A has A12 = +3.72158×10⁻¹⁵. Surface 5A prints A10 and A12 as zero, and surface 24A prints A12 as zero. Coefficients are in millimetre powers, not normalized focal-length units.

Two aspherical surfaces are the front faces of L1 and L2, and two are the front faces of the thin layers. None of them affects the paraxial values above.

## Patent Conditions

The model gives βwr = −0.671, β2w/β4w = 4.512, νp/νn = 3.546, |RLc/(ndLcn−ndLcp)| = 41.506, ndLcp/ndLcn = 0.729 and BFw/fw = 3.692, against the printed −0.671, 4.508, 3.546, 41.506, 0.729 and 3.693. All six inequalities hold. The printed three-decimal indices give −0.670, 4.530 and 41.513 for the first, second and fourth, so the fuller values reproduce the printed condition table more closely. Claim 1 says the combined G2–G4 refractive power stays positive, while surrounding prose also discusses their magnifications; these are distinct properties.

## Model Scope and Limitations

The model describes Example 4 at infinity focus on the d-line, with the five index corrections above. The zoom cam between the printed stations, the iris schedule and all clear apertures are inferred. It is a patent design associated with the product, not a confirmed factory prescription.

Back focus remains 0.011/0.017/0.024 mm short of the printed Bf at the three stations, because four rounded indices stay as printed. That is about 0.7–1.6 diffraction depths of focus (2λN²) at f/3.6, small but beyond the printed precision.

The patent prints no image height. Its half-fields of 54.919/43.521/36.084° reach 14.204/14.205/14.198 mm on the printed image planes, so they imply about 14.2 mm, just beyond the 14.175 mm APS-C corner the model uses. Distortion at those angles is −3.67/−0.23/+0.95%, and full-aperture spherical aberration is −0.099/−0.065/−0.019 mm; both agree with Figures 23–25.

Chromatic curves estimate the dispersion of the two thin layers from nd and νd, so secondary spectrum is approximate. Finite-distance MTF is unavailable because focusing is not modeled. Factory illumination and the complete patent aberration plots are not reproduced.

## Sources

1. JP 2010-243737 A, 24 PDF pages including the English PAJ cover. Example 4 table, coefficients and conditions: PDF page 11 (printed page 10). Example 1 table: PDF page 9. Figures 22 and 23: PDF page 18 (printed page 17). Later Example 4 plots, including lateral aberration Figures 26–28: PDF pages 19–20. d-line definition: paragraph 0037, PDF page 8. Asphere equation: PDF page 9.
2. Sigma's discontinued product page, https://www.sigma-global.com/en/lenses/10_20_35/, and its construction drawing, https://www.sigma-global.com/lenses/10_20_35_specification_01.jpg. Current product facts are not a dated launch specification.
