## Patent Reference and Design Identification

**Patent:** JP 2023-090337 A  
**Application Number:** JP 2021-205261  
**Filed:** 2021-12-17  
**Published:** 2023-06-29  
**Inventors:** Tatsuya Moriyama, Keisuke Nagasawa, Yuki Shibata  
**Applicant:** Cosina Co., Ltd.  
**Title:** 光学レンズ系 (Optical lens system)  
**Example details:** 第1実施形態 (first embodiment), Tables 1–3, section in Fig. 1, aberrations at infinity in Fig. 2; transcribed at patent scale (scale factor 1).

The Voigtländer NOKTON 23mm F1.2 Aspherical for Fujifilm X was announced in February 2022 and released on 13 July 2022. Cosina lists 10 elements in 6 groups with one double-sided aspherical element and two anomalous partial dispersion glass elements, a 63.2° angle of view, a 0.18 m minimum focus (1:4.9), a 12-blade diaphragm closing to f/16, and focusing by extension of the whole optical unit on a metal helicoid.

Embodiment 1 is a patent design associated with that lens, not a confirmed factory prescription. The association rests on five points:

1. Construction: a biconcave front singlet, four cemented doublets and a rear singlet make 10 elements in 6 groups, the published construction. Of the patent's four embodiments it is the only 10/6 one: Embodiment 2 is a 10/7 APS-C design (f = 23.7 mm, F/1.26), and Embodiments 3 and 4 are full-frame designs of about 34 mm (9/7 and 9/6, image height 21.6 mm).
2. Aspheres: the patent's only asphere is the rear element, aspheric on both faces (¶0020), as in Cosina's single double-sided aspherical element drawn at the rear.
3. Section: Cosina's construction diagram agrees with Fig. 1 element by element, with the same cemented pairs, the same meniscus and biconcave shapes, the stop between the second and third doublets, and the two anomalous-dispersion elements drawn at the L1 and L2f positions.
4. Specification: f = 23.6 mm, F/1.22 and a 31.5° half field (63.0° full) on a 14.2 mm image height, for an APS-C sensor (¶0015), against the retail 23 mm, f/1.2 and 63.2°. ¶0014 states the aim of an aperture faster than f/1.4.
5. Applicant and timing: Cosina filed in December 2021, two months before the announcement.

The model keeps the patent's 23.6 mm and F/1.22 rather than rescaling to the rounded retail figures. The production lens's radii, glasses and clear apertures are not published, so any differences between Embodiment 1 and the lens as built are unknown.

## Optical Architecture

The patent places the design among double-Gauss lenses (¶0002): a positive front group G1 (L1–L3, f = +38.1 mm), the stop, and a positive rear group G2 (L4–L6, f = +40.6 mm). Element names follow the patent: L1 and L6 are singlets, and L2 to L5 are cemented lenses whose front and rear elements carry the suffixes f and r. G1 holds the biconcave L1 (f = −18.9 mm), the cemented lens L2 (L2f + L2r, f = +31.6 mm) and the cemented lens L3 (L3f + L3r, f = +28.2 mm). G2 holds the cemented lens L4 (L4f + L4r, f = −72.3 mm), the cemented lens L5 (L5f + L5r, f = +58.5 mm) and the aspheric singlet L6 (f = +48.6 mm).

Counting outward from the stop, the four cemented elements on each side run negative, positive, positive, negative (claim 2): L3r, L3f, L2r, L2f in front and L4f, L4r, L5f, L5r behind, with matching signs of power across the stop (claim 3). The patent says this near-symmetric arrangement gives similar ray paths in the two groups, so that their aberrations cancel, which favors the correction of lateral color and distortion (¶0006, ¶0020). Two elements stand outside the symmetric core: the negative L1 at the front, which claim 3 requires, and the aspheric L6 at the rear, the defining feature of claim 1.

Claim 6 bounds the rear group's power: 0.4 ≤ f/fR ≤ 1.2 (¶0011, ¶0021). Embodiment 1 gives 0.58 (¶0023; 0.582 computed). Below the lower limit, the patent says the front group's diameter grows, enlarging the lens, and coma appears; above the upper limit, coma and axial color degrade resolution.

The lens is 40.88 mm from S1 to S17, the stop lies 19.36 mm behind S1, and the image plane is 55.66 mm behind S1. The Petzval sum is 0.0058 mm⁻¹ (0.137 in units of 1/f).

## Element-by-Element Analysis

Focal lengths are for each element alone in air.

### L1 — Biconcave Negative

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA) equivalent — dense flint, anomalous partial dispersion per Cosina. f = −18.88 mm.

The front element and the only singlet ahead of the stop, with a weaker concave front face (R1 = −37.656 mm) and a stronger concave rear face (R2 = 32.800 mm). A negative element of νd 20.9 at the front of a fast lens is uncommon. Cosina colors this position as anomalous partial dispersion glass, and the matching catalog glass lies about 0.030 above the normal line in θgF. The patent does not discuss the choice.

### L2 (L2f + L2r) — First Front Cemented Lens (f = +31.6 mm)

- **L2f — Negative Meniscus, convex to object.** nd = 1.76182, νd = 26.58. Glass: J-SF14 (HIKARI) equivalent — dense flint, anomalous partial dispersion per Cosina. f = −101.1 mm.
- **L2r — Biconvex Positive.** nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) equivalent — lanthanum dense flint. f = +24.18 mm.

Both glasses are high-dispersion flints, so the cemented face (R4 = 41.556 mm, an index step of 0.239) adds positive power rather than acting as a crown–flint achromatizing interface. L2f is the second element Cosina marks as anomalous partial dispersion glass; its catalog equivalent lies about 0.014 above the normal line, less than half of L1's departure.

### L3 (L3f + L3r) — Second Front Cemented Lens (f = +28.2 mm)

- **L3f — Biconvex Positive.** nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) equivalent. f = +15.99 mm.
- **L3r — Biconcave Negative.** nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (HIKARI) equivalent — short flint. f = −32.07 mm.

L3f, 6.80 mm thick, is the strongest element ahead of the stop. The pair reverses the usual achromat: the positive element is the high-dispersion glass and the negative one the low-dispersion glass, joined at R7 = −31.566 mm with an index step of 0.448. L3r's rear face (R8 = 40.875 mm) is concave toward the stop; claim 1 requires a negative element with its concave face toward the image to close G1.

### L4 (L4f + L4r) — First Rear Cemented Lens (f = −72.3 mm)

- **L4f — Biconcave Negative.** nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA) equivalent — dense flint. f = −12.75 mm.
- **L4r — Biconvex Positive.** nd = 1.90043, νd = 37.37. Glass: TAFD37 (HOYA) equivalent — lanthanum dense flint. f = +17.10 mm.

L4f faces L3r across the stop with its concave front face (R10 = −20.084 mm), the counterpart of L3r's concave rear face; claim 3 specifies this biconcave-biconvex doublet. The pair is weakly negative overall, and here the positive element has the higher Abbe number, the ordinary achromatic arrangement.

### L5 (L5f + L5r) — Second Rear Cemented Lens (f = +58.5 mm)

- **L5f — Biconvex Positive.** nd = 1.90043, νd = 37.37. Glass: TAFD37 (HOYA) equivalent. f = +13.06 mm.
- **L5r — Biconcave Negative.** nd = 1.72825, νd = 28.38. Glass: J-SF10 (HIKARI) equivalent — dense flint. f = −14.28 mm.

L5f, 6.07 mm thick, is the strongest element in the lens, and L5r cancels most of it, leaving the doublet weakly positive. The pair mirrors L2 across the stop: positive then negative, where L2 is negative then positive.

### L6 — Biconvex Positive (2× Asph)

nd = 1.80835, νd = 40.55. Glass: L-LAH84 (OHARA) equivalent — lanthanum flint made for precision molding. f = +48.60 mm.

A thin (2.03 mm), weak element 1.66 mm behind L5r and 14.78 mm ahead of the image. It is the only asphere in the lens; the patent credits the single asphere with good correction from few elements (¶0020). Both faces flatten toward the rim (see Aspherical Surfaces). Close to the image, the beams for different field points are well separated, so in the author's reading L6 works mainly on astigmatism, field curvature and distortion rather than on spherical aberration.

## Glass Identification

The patent gives d-line nd and νd only (¶0026, 587.56 nm) and no partial dispersions. Each pair below equals a catalog glass at the printed precision, and the model traces each element on that glass's dispersion curve. Several pairs are also listed by other makers (L1 as SCHOTT N-SF66 and OHARA PBH21, L2r and L3f as OHARA S-LAH99, L4f as OHARA S-TIH53), so the supplier of the production glass is not established. ΔPgF is the catalog θgF minus the normal line 0.6438 − 0.001682·νd.

| Element | Patent nd / νd | Catalog equivalent | θgF | ΔPgF | Type |
|---|---|---|---:|---:|---|
| L1 | 1.92286 / 20.88 | E-FDS1 (HOYA) | 0.639 | +0.030 | Dense flint; anomalous partial dispersion per Cosina |
| L2f | 1.76182 / 26.58 | J-SF14 (HIKARI) | 0.613 | +0.014 | Dense flint; anomalous partial dispersion per Cosina |
| L2r, L3f | 2.00100 / 29.13 | TAFD55 (HOYA) | 0.600 | +0.005 | Lanthanum dense flint |
| L3r | 1.55298 / 55.07 | J-KZFH4 (HIKARI) | 0.545 | −0.007 | Short flint |
| L4f | 1.84666 / 23.78 | FDS90 (HOYA) | 0.619 | +0.015 | Dense flint |
| L4r, L5f | 1.90043 / 37.37 | TAFD37 (HOYA) | 0.577 | −0.004 | Lanthanum dense flint |
| L5r | 1.72825 / 28.38 | J-SF10 (HIKARI) | 0.607 | +0.011 | Dense flint |
| L6 | 1.80835 / 40.55 | L-LAH84 (OHARA) | 0.569 | −0.006 | Lanthanum flint, molding glass |

The palette contains no crown. Eight of the ten elements have nd above 1.75 and five reach 1.90 or more; the lowest-dispersion glass is L3r's short flint at νd 55.1. In the author's reading, the high indices let the strong positive elements carry their power with moderate curvatures and keep the Petzval sum low, while color correction comes from the balance of high- and low-dispersion powers on each side of the stop rather than from an ED element.

Cosina marks L1 and L2f as anomalous partial dispersion glass. On the catalog equivalents, L1 lies well above the normal line; L2f's departure is similar to that of the unmarked dense flints L4f and L5r, so the marking may reflect production glasses that differ from these equivalents.

## Focus Mechanism

The patent names no focusing group and prints the infinity state only: the object distance in Table 2 is infinite, and Fig. 2 shows the aberrations at infinity. The model is therefore static at infinity. Cosina focuses the production lens by extending the whole optical unit on its helicoid, down to 0.18 m at 1:4.9; that range is not modeled.

The final gap is Table 2's 14.78 mm. Table 1 rounds the back focus to 14.8 mm and the length in air to 55.7 mm. The model's image plane is 55.66 mm behind S1, and the paraxial back focus of 14.783 mm lies 0.003 mm beyond it, within the rounding of the table.

## Aspherical Surfaces

Both faces of L6, surfaces 16A and 17A, are aspheric. The patent's equation (数1, ¶0029–0030) is Z = C·H² / (1 + √(1 − (1 + K)·C²·H²)) + A4·H⁴ + A6·H⁶ + … + A18·H¹⁸, with C = 1/R. This is the standard form, so K is entered as printed. The paragraph that names the coefficients omits A6, but the equation and Table 3 include it, and the printed A6 values are used.

| Term | 16A | 17A |
|---|---:|---:|
| R | 67.568 | −92.583 |
| K | −20 | −4 |
| A4 | −1.7869E−05 | 5.1477E−05 |
| A6 | 1.0035E−06 | −3.1256E−07 |
| A8 | −3.4415E−08 | 1.3570E−08 |
| A10 | 6.8230E−10 | −3.5161E−10 |
| A12 | −1.1254E−11 | 5.5559E−12 |
| A14 | 1.3261E−13 | −6.6826E−14 |
| A16 | −9.8260E−16 | 5.1324E−16 |
| A18 | 3.3798E−18 | −1.6849E−18 |

Both faces flatten toward the rim. Relative to its base sphere, 16A departs by −0.041 mm at h = 7 mm and −0.259 mm at h = 9.5 mm, and 17A by +0.113 mm and +0.323 mm. The rear face is almost flat beyond h = 8 mm, where its sag changes by only 0.004 mm out to the rim. L6's positive power therefore falls away toward its edge, which is 1.45 mm thick against 2.03 mm at the center. Its catalog equivalent is a molding glass, consistent with a precision-molded asphere; Cosina does not state the process.

## Aperture Stop and Clear Apertures

The stop position is printed: 3.75 mm behind S8 and 3.79 mm ahead of S10, 19.36 mm behind S1. The patent gives no iris diameter, so the engine sizes the stop radius at 9.51 mm, which gives a 9.67 mm paraxial entrance-pupil radius, F/1.22. The f-stop scale runs to f/16 with 12 blades, following Cosina's specification.

No clear apertures are printed, so all semi-diameters are estimated from Fig. 1, which is drawn to scale: its surface arcs fit the printed radii within about 0.07 mm. The drawn element edges are 10.1 mm for L1, 11.3 mm for L2, 12.2 mm for L3, 9.85 mm for L4, and 9.5 mm for L5 and L6. The model uses 10.2, 11.3, 12.0, 9.75, 9.6 and 9.5 mm. L1 and L5 sit 0.1 mm outside the drawing, which keeps light at the field edge. Fig. 1's stop strokes begin 8.46 mm from the axis, inside the 9.51 mm radius that F/1.22 needs, so the drawn stop opening is schematic.

Fig. 1 ends three concave faces short of their element edges with flat lands. The model draws the lands on S8 (cap to 10.94 mm of 12.0 mm) and S10 (9.39 of 9.75 mm), both outside the wide-open beams. On S15 the drawn cap ends near 8.3 mm, but the beams reach 9.26 mm there, so the cap keeps 9.0 mm with a land out to the 9.6 mm edge.

At F/1.22 the rims pass 77 % of the beam at 14.3° and 33 % at the 31.5° edge, where relative illumination falls to 0.19, about 2.4 stops. The chief ray at 31.5° lands at 14.20 mm, just beyond the 14.18 mm APS-C corner.

## Model Scope and Limitations

| Quantity | Patent | Model |
|---|---|---|
| Focal length | 23.6 mm | 23.606 mm |
| F-number | 1.22 | 1.22 |
| Back focus | 14.8 mm (Table 1), 14.78 mm (Table 2) | 14.783 mm paraxial; image plane at 14.78 mm |
| S1 to image | 55.7 mm | 55.66 mm |
| Front group fF | 38.1 mm | 38.08 mm |
| Rear group fR | 40.6 mm | 40.56 mm |
| f/fR | 0.58 | 0.582 |
| Half field, image height | 31.5°, 14.2 mm | 31.5°, 14.20 mm |

- The prescription is the patent's Embodiment 1, not a confirmed factory one.
- The iris radius and all semi-diameters are inferred.
- The model is static at infinity and says nothing about performance at 0.18 m.
- The patent gives d-line indices and Abbe numbers only, so behavior away from the d-line rests on the catalog equivalents.

## Sources

- [JP 2023-090337 A](https://patents.google.com/patent/JP2023090337A/en): claims, ¶0002–0032, Tables 1–3 and Figs. 1–2; Embodiments 2–4 from ¶0033 and Figs. 3–8.
- [Cosina, NOKTON 23mm F1.2 Aspherical (X-mount)](https://www.cosina.co.jp/voigtlander/x-mount/nokton-23mm-f1-2-aspherical/): specifications, focusing method and [lens construction diagram](https://www.cosina.co.jp/wp/wp-content/uploads/2022/03/23_12_X_LD.svg).
- [Lenstip, Voigtländer Nokton 23 mm f/1.2 specifications](https://www.lenstip.com/1923-Voigtlander_Nokton_23_mm_f_1.2-lens_specifications.html): construction and announcement date.
