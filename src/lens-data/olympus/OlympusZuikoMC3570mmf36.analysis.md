## Patent Reference and Design Identification

**Patent:** US 4,153,338 A  
**Application Number:** 806,825  
**Filed:** 15 June 1977; Japanese priority application 51/71339, 17 June 1976  
**Published:** 8 May 1979  
**Inventor:** Toru Fujii  
**Assignee:** Olympus Optical Co., Ltd., Tokyo, Japan  
**Title:** Wide-angle zoom lens system  
**Example details:** Description, Figure 3, numerical table in column 6; three linked infinity zoom stations.

The probable product association is the pictured OLYMPUS ZUIKO MC AUTO-ZOOM 35-70mm f/3.6 in the two-page manufacturer instructions. The imprint reads “0578. PRINTED IN JAPAN”; its date-code convention is not established. The manufacturer-authored scan comes from a third-party archive.

The correlation has three independent architectural supports:

1. Both sections contain ten physical elements in eight air-separated components, divided into a four-element/three-component negative front cell and a six-element/five-component positive rear cell.
2. The front and rear cemented pairs occupy the same structural positions. Within this patent, only E3 combines that 10/8 topology with constant F3.6. E1/E2 are 9/8; E4 is 10/9, and E2 also has a variable maximum aperture.
3. Olympus ownership and the manual's aperture/product context are consistent with the selected design.

This supports a probable product-family pairing; exact production radii, glass melts and zoom cam remain unknown. The S ZUIKO F4, compact and AF variants are outside this identification.

The original description prints final r17 = −0.8274, while claim 4 repeats +0.8274. The model uses the negative description sign, supported by Figure 3's final biconvex element, positive final-component prose and its positive printed focal length. The positive claim sign instead gives negative normalized system focal lengths −1.285820, −1.218162 and −1.173243. No issued legal correction is known. The other description examples, the E2 claim n4 variant and the E3 claim sign variant are separate prescriptions.

## Optical Architecture

The all-spherical system has two mechanically compensated zoom cells: negative front power followed by positive rear power. The first cell contains two negative components followed by a positive singlet. The rear cell contains three positive components, a negative singlet and a final positive singlet. Cemented interfaces are physical shared surfaces r3′ and r12, not artificial air gaps. The original primed label is preserved: final r17 is physical interface 18.

The diagram brackets use the patent's descriptive names, “Front negative” (r1–r6) and “Rear positive” (r7–r17); the patent does not give G-number designations. L1–L10 are sequential physical-element identifiers used here, distinct from the patent's eight numbered components and primed glass indices. D1 brackets L2–L3 (r3–r4), and D2 brackets L7–L8 (r11–r13). These cemented-pair labels are editorial. The variable gap is displayed as “ℓ (intercell)”.

At the conditional uniform ×35 scale, the front cell has EFL −71.08637 mm and back focal distance −95.55127 mm. The rear cell has EFL +44.65567 mm and front focal distance −48.04040 mm from its first vertex. The source's corresponding normalized values are approximately −2.031, −2.730, +1.276 and −1.373.

Uniform scaling anchors the source's nominal wide setting at 35 mm. Its 1:1.889 ratio gives a nominal 35–66.115 mm range. All four patent examples span approximately 1:1.89–1.93 rather than the marketed 1:2 range. The calculated EFLs are 35.003530, 48.110148 and 66.125582 mm. No positive uniform scale matches both marketed endpoints.

### Continuous infinity zoom compensation

The scaled printed intercell gaps are 43.17740, 18.47125 and 0.49490 mm. The scaled printed BFDs are 41.74100, 49.97125 and 61.28290 mm. All six values are retained. Their Gaussian BFDs are 41.748227, 49.981660 and 61.298758 mm, leaving differences of +0.007227, +0.010410 and +0.015858 mm. Rounding has not been established as the cause of these discrepancies.

The intercell gap g(t) interpolates the three printed values piecewise linearly at t = 0, 0.5 and 1. Because the two cells are rigid, the matrix coefficients A(g) and C(g) are affine in g, and the exact Gaussian BFD is the rational function −A(g)/C(g). The reconstructed compensation subtracts the piecewise-linear interpolation of the three Gaussian-minus-printed BFD residuals. It therefore passes through all three printed image-plane positions while retaining their small defocus.

The model represents that continuous law with 129 equally spaced zoom positions; only positions 0, 64 and 128 are published. Every other position is reconstructed. A pole-free second-derivative bound over every complete interval limits BFD interpolation error to 0.000355514 mm; the maximum sampled difference from the defined law is 0.000352187 mm. Maximum image-plane defocus relative to Gaussian focus remains 0.015857641 mm, inherited from the source. The continuous optical compensation does not establish the factory zoom cam.

Relative to a fixed image plane, the first vertex moves from −137.4254 through −120.9495 to −114.2848 mm. The rear cell's first vertex moves from −70.1750 through −78.40525 to −89.7169 mm. These derived positions describe opposing cell travel under the stated law. They are not mechanical measurements of the production helicoid or barrel.

## Element-by-Element Analysis

The following focal lengths describe air-separated components at the conditional ×35 scale. A cemented pair is treated as one component; each member retains its printed glass coordinates. Catalog equivalents describe optical-coordinate similarity; production melts and suppliers are not identified.

### L1: Negative front meniscus, convex toward the object

nd = 1.64250, νd = 58.37. Glass: S-BSM36 (OHARA catalog equivalent; production melt unidentified). Component f = −60.01150 mm.

The relatively low-dispersion front negative component establishes much of the retrofocus action. Its two powered clear arcs have unequal inferred radii; the larger drawn outer shoulder is not assigned to the rear spherical face. The original drawing's stepped shoulder is represented by the engine's straight rim join, not by invented mechanical bevel dimensions.

### L2–L3: Net-negative front cemented component

L2: nd = 1.71300, νd = 53.89, biconcave negative; glass: S-LAL8 (OHARA catalog equivalent). L3: nd = 1.62041, νd = 60.27, positive meniscus; glass: S-BSM16 (OHARA catalog equivalent). Both production melts remain unidentified. Combined component f = −58.74469 mm.

The shared r3′ interface is retained without an air layer. Figure 3 draws L3 smaller than the L2 blank: L3's square-cut edge sits about 18.9 mm from the axis, below L2's 20.1 mm rim, so r3′ and r4 carry 18.9 mm while r3 keeps the blank height. The opposing component powers permit the negative front cell's power and aberration distribution to be separated from the first meniscus. The modest dispersion difference is not a basis for claiming that this pair alone is an exactly achromatized factory doublet.

### L4: Biconvex front-cell rear singlet

nd = 1.58144, νd = 40.75. Glass: S-TIL25 (OHARA catalog equivalent; production melt unidentified). Component f = +57.07348 mm.

This positive, higher-dispersion member balances the preceding negative components while leaving the complete front cell negative. Its rear air interval is the sole variable intercell gap l, not a finite-focus movement in this reconstruction.

### L5: Biconvex rear-cell leading singlet

nd = 1.61800, νd = 63.38. Glass: S-PHM52 (OHARA catalog equivalent; production melt unidentified). N-PSK53A is another coordinate candidate. Component f = +87.88747 mm.

This positive crown begins the rear cell. The very small following fixed air gap is transcribed literally. Its physical clear aperture is inferred from the optical section and checked against the entire zoom's design beam.

### L6: Positive rear-cell meniscus

nd = 1.61800, νd = 63.38. Glass: S-PHM52 (OHARA catalog equivalent; production melt unidentified). The shared coordinates with L5 do not establish a common production melt. Component f = +75.44643 mm.

The positive component precedes the inferred iris in d10. Its clear radius is constrained by the telephoto axial f/3.6 beam as well as the schematic section. No glass coordinate or source curvature is adjusted to enlarge the beam.

### L7–L8: Weak net-positive rear cemented component

L7: nd = 1.61800, νd = 63.38, biconvex positive crown; glass: S-PHM52 (OHARA catalog equivalent). L8: nd = 1.64769, νd = 33.8, biconcave negative flint; glass: PBM22 (OHARA catalog equivalent), with ZF1 another coordinate candidate. Both production melts remain unidentified. Combined component f = +395.36678 mm.

The strong opposing member powers nearly cancel in net component power. Their larger dispersion contrast supplies chromatic balancing degrees of freedom. The patent discusses the rear assembly and cemented-interface placement in its aberration-control strategy; that does not establish unprinted aspheric or anomalous-dispersion properties. Components 4–6 together have EFL +33.65567 mm, matching the source's normalized approximately 0.962 value.

### L9: Biconcave rear negative singlet

nd = 1.74950, νd = 35.19. Glass: S-LAM7 (OHARA catalog equivalent; production melt unidentified). J-LAF7 is another coordinate candidate. Component f = −24.26130 mm.

This strong negative singlet follows the positive rear subassembly and precedes the final positive component. Its placement and power contribute to the rear cell's distortion and field-aberration balance. At much wider diagnostic fields, some rays undergo total internal reflection at r15 and do not reach the image plane.

### L10: Final biconvex positive singlet

nd = 1.61659, νd = 36.63. Glass: F4 (SUMITA catalog equivalent; production melt unidentified). H-F3 is another coordinate analogue. Component f = +34.99347 mm.

The positive final component agrees with the source's normalized f8 ≈ 0.9998 and is incompatible with treating the positive claim-repeat R17 as the same working system. The final printed BFD schedule sets the model's image plane rather than Gaussian or best-MTF focus.

## Glass Identification

The table prints n and ν without an explicit nd subscript or wavelength statement. The model interprets these as d-line values, supported by the patent's d/g aberration-plot labels and d-line catalog coordinates.

All ten printed n/ν pairs are unchanged. The S-BSM36 catalog model differs from L1 by −0.00000482845 in nd and −0.000601 in νd. The OHARA catalogue, p136, gives S-BSM36 nd = 1.64250 and rounded νd = 58.4; OHARA identifies its discontinuation effective 1 May 2019. These coordinates do not identify a 1970s production melt.

The catalog equivalents are OHARA S-BSM36 (L1), S-LAL8 (L2), S-BSM16 (L3), S-TIL25 (L4), S-PHM52 (L5–L7), PBM22 (L8), S-LAM7 (L9), and SUMITA F4 (L10). Production melts and suppliers remain unidentified. The printed indices and Abbe numbers are retained; catalog dispersion is a spectral approximation. No special-dispersion elements are identified by the manufacturer. The prescription's Petzval sum is approximately +0.0011903501 mm⁻¹ at the conditional scale; it is not a measured production field curvature.

Reference MTF uses the printed d-line indices. Photopic diagnostics estimated from nd/νd and normal-line partial dispersions remain approximate calculations, rather than recovered factory spectral data or measured MTF.

## Focus Mechanism

The manufacturer manual states rotating-helicoid focusing, 0.8 m minimum focus and retained focus through zoom, but supplies no optical group movements, travel or finite-distance prescription. The minimum focus distance and mechanical drive description do not establish unit focus or an internal focusing trajectory.

Only infinity zoom compensation is modeled. Both focus positions at every zoom setting use identical geometry; no finite-distance optical state is supplied. The 0.8 m value describes the production lens, and does not establish simulated close-focus performance.

## Stop, Pupils and Clear Apertures

Figure 3 shows the middle zoom position and places the iris between L6 and L7 in the rear assembly's d10 interval, with six elements ahead and four behind. No numerical stop coordinate is printed. The inferred midpoint divides the scaled 2.9155 mm gap into 1.45775 + 1.45775 mm. The iris radius is derived from the real axial f/3.6 marginal ray at each zoom station; the 55 mm filter thread does not determine its opening.

At wide/middle/tele, the real-ray f/3.6 stop radii are 9.050999, 10.413294 and 12.422753 mm. The same stops have paraxial pupil-based f-numbers 3.53355, 3.49904 and 3.42591. The zoom iris schedule interpolates the calibrated radii; its largest sampled difference from exact calibration is 0.000089085 mm. Stopped-down MTF calculations recalibrate the real marginal ray for each requested f-number. The viewer instead scales the wide-open iris by the ratio of the maximum-aperture f-number to the selected f-number. These conventions differ and do not establish factory aperture calibration or photometric transmission.

The viewer launches its ray fan at the paraxial entrance pupil. At telephoto this radius is 9.651 mm, compared with 9.184 mm for the real f/3.6 marginal ray, so the outermost drawn ray clips at r9. The real f/3.6 beam reaches 12.80 mm there and clears the 12.85 mm rim. This remaining viewer launch-convention issue does not indicate an incorrect rim or iris radius; a fully transmitted drawn pupil is not established.

The paraxial entrance-pupil positions from r1 are +32.80719, +25.58381 and +18.12261 mm. The exit pupil stays −17.36729 mm from r17 because its rear optical assembly is rigid; its radius changes with the iris.

The optical clear radii are inferred from the schematic section and required design beam, rather than production dimensions. Two rear radii include small margins above the axial-beam limits; the rear face of the front meniscus is distinguished from its larger surrounding shoulder; the cemented L3 rim follows the step Figure 3 draws below the L2 blank. L6 has equal 12.85 mm face radii, and the rear cemented pair has a common 11.65 mm rim on r11–r13, preserving the drawing's square-cut edges. Straight rim joins still approximate L1's stepped shoulder and L2's bevels. Figure 3 also draws L1 thicker and the r4–r5 gap wider than the numerical prescription. No hidden trimming is used. The minimum sampled/analytic shared edge thickness is 0.352568 mm, maximum rim angle 48.00259°, and maximum gap-sag fraction 0.8860385 under the 0.9 limit.

## Conditional Expressions

The prescription satisfies all nine dimensionless patent conditions. In the source's order, the evaluated values are −1.591878, 1.344157, −1.075796, 0.844205, 1.847921, 0.753671, 0.553502, 0.783629 and ν1 = 58.37. These conditions characterize the published design family.

## Model Scope and Limitations

The model is rotationally symmetric and describes infinity focus only. Its compensation interpolation error is analytically bounded throughout every interval; off-axis transmission and MTF are sampled calculations. Surviving rays remain inside the modeled glass boundaries. Total internal reflection at wider diagnostic fields and ordinary vignetting limit transmission.

The patent gives half-fields 31°, 23° and 18°, or full fields 62°, 46° and 36°. The manufacturer specifies 64° and 34° endpoints. These fields, the 135-format corner and the viewer's wider heuristic fields are distinct references. Interpolated source/manufacturer fields are estimates rather than additional published values. Wide-open off-axis clipping decreases on stopping down, but sampled transmission does not establish radiometric throughput, coating losses or measured image quality.

MTF calculations cover nine zoom positions and six apertures, with separate model-plane and best-axial results. Photopic results based on Abbe dispersion are approximate. Source and manufacturer endpoint angles are evaluated using traced image heights; angle inversion remains a numerical approximation.

At wide/middle/tele f/3.6, best-axial diagnostic shifts are −0.152986, −0.124944 and −0.083857 mm. The model retains the printed image-plane positions rather than applying those shifts. Calculated MTF does not establish exact factory identity, measured image quality or finite-focus performance.

## Sources

1. [US4153338A complete original](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4153338), cover, Figure 3, Figure 7, description columns 6–8 and claim 4.
2. Olympus, ZUIKO MC AUTO-ZOOM 1:3.6 f35–70 instructions, imprint 0578, two-page manufacturer-authored scan from the third-party [Olympus OM archive](https://zuikography.com/olympus-om-archive/).
3. [OHARA Optical Glass Catalogue](https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf), original vendor catalogue mirrored by the University of Arizona, p136, S-BSM36 row. [OHARA discontinuation notice](https://www.ohara-inc.co.jp/en/news/2019/0424/6419/) provides its modern catalogue status, not historical lens-melt identity.
4. Vendor catalog coordinates support the stated equivalents; the patent's printed indices and Abbe numbers remain the prescription values.
