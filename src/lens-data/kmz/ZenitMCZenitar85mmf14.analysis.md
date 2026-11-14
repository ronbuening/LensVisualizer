## Patent Reference and Design Identification

**Patent:** [RU 2611106 C1](https://patents.google.com/patent/RU2611106C1/en)
**Filed:** October 27, 2015
**Published:** February 21, 2017
**Inventor:** Vladimir Aleksandrovich Bogdankov
**Assignee:** PJSC Krasnogorsky Zavod named after S. A. Zverev
**Title:** High-aperture lens (Светосильный объектив)
**Example details:** Table 1 (p. 7), Table 2 spectral weights (p. 8), Fig. 1 optical scheme and Fig. 2 MTF (p. 9); no scaling.

The publication contains one numerical example. It states f' = 84.23 mm, relative aperture 1:1.4, a 28.5° field in object space, a 43.26 mm image diagonal (2Y') and a 38.2 mm back focal distance. Google Patents' PDF holds only the claims page; the full FIPS publication carries the description, tables and figures.

The [manufacturer's MC Zenitar 1.4/85 page](https://www.zenit.photo/catalog/lens-zenitar-1-4-85/) and its booklet support the identification:
1. Seven elements in five groups, matching the patent architecture.
2. Marketed 85 mm and f/1.4 against the patent's 84.23 mm and 1:1.4.
3. Manufacturer field angle 28° against the patent's 28.5°, both on the 36 × 24 mm format.
4. The applicant is the maker, KMZ, which sells the lens in Canon EF and Nikon F mounts. The older Pentax K-mount [MC Zenitar-1K 85mm f/1.4](https://www.lenstip.com/752-CCCP_MC_Zenitar-1K_85_mm_f_1.4-lens_specifications.html) has seven elements in six groups, a different design.

This does not establish that the production lens uses this exact prescription. Fig. 2 plots the MTF only to 13.5° off axis; the model traces the stated 28.5° field (14.25° half-field).

## Optical Architecture

Seven spherical elements form five groups in two components (I and II in Fig. 1), with cemented pairs L3/L4 and L5/L6. The first component holds three positive menisci and one negative meniscus, all convex to the object; the second holds a cemented meniscus convex to the image (biconcave L5 plus biconvex L6 with equal-magnitude radii) and a plano-convex L7. Four elements precede the diaphragm and three follow it, a Gauss-type arrangement with an added front meniscus (an interpretation; the patent names no type). The stop lies 5.5 mm in front of L5 (p. 6), splitting the printed 14.6 mm air gap into 9.1 and 5.5 mm. The model has no filter or cover plate. The f/1.4–22 aperture scale follows the manufacturer's booklet; the patent states only 1:1.4.

## Element-by-Element Analysis

- **L1 (Positive Meniscus):** nd = 1.613094, νd = 60.61. Glass: TK14 (LZOS). f = +176.4 mm. Front collector.
- **L2 (Positive Meniscus):** nd = 1.613094, νd = 60.61. Glass: TK14 (LZOS). f = +203.6 mm. Shares the front convergence with L1.
- **L3 (Positive Meniscus):** nd = 1.656908, νd = 51.15. Glass: TK21 (LZOS). f = +67.5 mm. The thickest element (15.0 mm), cemented to L4.
- **L4 (Negative Meniscus):** nd = 1.755234, νd = 27.52. Glass: SF4 (Schott) equivalent of TF5. f = −33.7 mm; the L3/L4 doublet is −116.2 mm. Its steep rear surface R7 (20.51 mm) is concave toward the stop. Fig. 1 draws L4 square-edged, with the R7 cap ending on a flat land just ahead of the diaphragm; the model cuts the cap 7.7 mm behind the vertex (radius 16.0 mm, just outside the f/1.4 axial beam), 1.4 mm ahead of the stop plane, so the glass stays clear of the iris.
- **L5 (Biconcave Negative):** nd = 1.575020, νd = 41.30. Glass: QF3 (CDGM) equivalent of LF5. f = −32.4 mm. Follows the stop, cemented to L6.
- **L6 (Biconvex Positive):** nd = 1.659499, νd = 57.35. Glass: STK3 (LZOS). f = +33.3 mm; the L5/L6 meniscus is +360.0 mm.
- **L7 (Plano-Convex Positive):** nd = 1.755234, νd = 27.52. Glass: SF4 (Schott) equivalent of TF5. f = +111.9 mm. Flat rear face; the printed 38.2 mm back focal distance follows it.

Radii and thicknesses are as printed. Clear apertures are not published: the semi-diameters are estimates from Fig. 1, set just outside the f/1.4 axial beam, which runs 2–5 % above the drawn heights. Fig. 1 draws every element square-edged, and each keeps one rim height except L3, whose drawn step down to L4 falls on the cemented junction and shows as a sloped edge. They are not factory dimensions.

## Glass Identification and Selection

Table 1 names five Soviet glass grades (TK14, TK21, TF5, LF5, STK3) and heads its index columns nD and νD. The values are nevertheless helium d-line (587.6 nm) indices: TK14 (1.613094) and LF5 (1.575020) equal the Lytkarino catalog nd, and TK21, TF5 and STK3 sit 1.0–2.3 × 10⁻⁴ above the sodium-D column of [GOST 13659-78](https://dnaop.com/html/70852/doc-%D0%93%D0%9E%D0%A1%D0%A2_13659-78), the d−D offset for their dispersions. The [LZOS catalog](https://ww.lzos.ru/upload/iblock/818/818322c0e82195aba7b3c9b1441649b9.pdf) lists the same grades. The model therefore stores the printed values as d-line indices.

TK14, TK21 and STK3 trace on LZOS catalogue curves: polynomial fits to the LZOS index tables over 365–1014 nm, whose d-line indices match the printed values within 6 × 10⁻⁶ and whose Abbe numbers match within 0.03. TF5 and LF5 trace on catalog equivalents: SF4 (Schott), a lead dense flint like TF5, and QF3 (CDGM), whose nd/νd match within 4 × 10⁻⁵ and 0.06. Crowns of νd 51–61 form L1–L3 and L6; the TF5 dense flint forms L4 and the positive L7, and the LF5 light flint forms L5. Table 2 weights seven wavelengths from 435 to 656 nm, peaking at 550 nm.

## Focus Mechanism

The patent focuses on finite distances by moving the whole optical system (unit focusing, p. 7) but prints only the infinity state. The manufacturer gives a 0.85 m minimum focus distance. The model is infinity-only with static spacings; the 0.85 m figure is shown as the maker's specification, not traced.

A paraxial d-line trace gives EFL 84.264 mm and back focus 38.259 mm against the printed 84.23 and 38.2 mm. With GOST e-line (546.1 nm) indices the same prescription gives 84.236 and 38.221 mm, so the printed first-order values correspond to the e line, the main reference line of the GOST glass standard. The printed 38.2 mm image distance is kept.

## Aspherical Surfaces

None are published or modeled. Every refracting surface is spherical except the plane final surface.

## Model Scope and Limitations

The full f/1.4 axial beam passes every surface. Off axis, the estimated front and rear rims vignette the beam strongly toward the corner; the production lens's real vignetting is not published, and the rims were not widened to remove it. The stop radius comes from f/1.4, not from a printed diaphragm diameter. TF5 and LF5 trace on non-Russian catalog equivalents, and the patent prints no chromatic aberration curves to check the colour analyses against; the model is not expected to reproduce the patent's Fig. 2 MTF exactly.
