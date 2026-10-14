# Nikon AF-S TELECONVERTER TC800-1.25E ED

## Patent Reference

**Patent:** JP 2013-250290 A  
**Filed:** 30 May 2012  
**Published:** 12 December 2013  
**Inventor:** Akiko Furuta (古田 明子)  
**Applicant:** Nikon Corporation  
**Title:** Rear converter lens, optical device, and method for manufacturing rear converter lens  
**Embodiment analyzed:** Example 1, Table 1, Figure 1

JP 2013-250290 A, “Rear converter lens, optical device, and method for manufacturing rear converter lens,” was filed on 30 May 2012 and published on 12 December 2013. Page 1 names Akiko Furuta (古田 明子) as inventor and Nikon Corporation (株式会社ニコン) as applicant. The model is Example 1, described in ¶0049–0057, Table 1 (pages 9–10) and Figure 1 (page 22).

The TC800-1.25E ED is correlated with this example through converging evidence:

1. Five elements in three groups, as Nikon specifies for the converter.
2. The positive–negative–positive group sequence with a central cemented triplet.
3. The 1.25× enlargement, the patent's β = 1.25.
4. Nikon's construction diagram marks the second element as ED; in Example 1 that position is L21, the converter's only high-Abbe glass (νd = 67.96). Example 4 of the same patent is also a 5/3 design, but its low-dispersion glass is the rear element.
5. The master lens of Table 1 matches the AF-S NIKKOR 800mm f/5.6E FL ED VR: 20 elements in 13 groups plus a protective glass, with two fluorite-coordinate (1.4338/95.13) and two ED-coordinate (1.4978/82.53) elements.
6. Timing: filed in May 2012; Nikon announced the converter together with the 800mm lens on 29 January 2013 and describes it as its first teleconverter with an ED element.

This is a patent-design correlation; it does not establish that every factory radius, aperture or glass equals the patent example.

The patent's 780.00037 mm master and 975.01926 mm combination are not scaled to the marketed 800 mm and 1000 mm. All d-line indices, Abbe numbers, radii, centre thicknesses and gaps are the patent's values.

## Optical Architecture

The converter is patent surfaces 39–46, relabelled 1–8. It has five spherical elements in three air-separated groups: G1 is a positive meniscus, G2 a negative cemented triplet (T1) and G3 a biconvex positive singlet. There is no asphere and no converter aperture stop; the master lens's stop (patent surface 22) remains the system stop.

The converter's own focal length is −181.645 mm (printed fc = −181.64441 mm). Group focal lengths in air are G1 +98.550 mm, G2 −36.577 mm and G3 +100.544 mm, matching the printed f1, f2 and f3; these are finite-thickness group values, not sums of element focal lengths. In use the master delivers a converging beam, so the converter works on a virtual object behind its first vertex rather than on an object at infinity.

The master's paraxial back focus in air, 52.854 mm from surface 38, minus the printed 4.0708 mm master-to-converter gap places that virtual object 48.783 mm behind the converter's first vertex. The final gap is the printed BF, 42.27895 mm. Master plus converter then computes to f = 975.013 mm, back focus 42.278 mm and a focal ratio of 1.25002. The converter is 22.3 mm long from first to last vertex (printed TL = 22.3), and the combined system reaches the image plane 515.114 mm from the master's front vertex.

The positive outer groups flank stronger negative power in G2. ¶0033 and ¶0037 relate these power ratios to back-focus clearance, Petzval balance, spherical aberration and peripheral coma. The converter's Petzval sum is −7.46 × 10⁻⁵ mm⁻¹, close to zero, so the converter adds little field curvature to the master.

## Element-by-Element Analysis

### L11 — Positive Meniscus, Concave to Object

nd = 1.581439, νd = 40.96. Glass: J-LF5 class (Hikari; supplier unconfirmed). f = +98.550 mm.

Patent surfaces 39–40 form G1 on their own. Both radii are negative, but the much stronger rear curvature gives positive power; the front face is weakly concave toward the master, the meniscus that ¶0050 describes. Placed ahead of the negative group, it raises the convergence of the master's beam within the short converter body.

¶0039 ties the single-element G1 to compactness and to reduced coma from decentering. The patent's νd = 40.96 is kept rather than the J-LF5 catalog value of 40.98.

### L21 — Biconcave Negative, Front Member of G2

nd = 1.593190, νd = 67.96. Glass: J-PSKH1 class (Hikari; supplier unconfirmed) — ED (inferred). f = −40.202 mm.

Patent surfaces 41–42 form the front negative member of the cemented triplet. Its νd = 67.96 is the νn of condition (1). The patent makes this negative element's low dispersion central to controlling the lateral colour that the converter would otherwise magnify; ¶0029 also discusses the index, power and Petzval cost of going too far in that direction.

Nikon's construction diagram marks the second element of the converter as ED, and this is the only high-Abbe glass in Example 1. The coordinate is a phosphate-crown class; the J-PSKH1 catalog curve gives θgF ≈ 0.544, above the normal line. The ED tag is an inference from the diagram and the coordinate; the patent publishes no partial-dispersion data.

### L22 — Biconvex Positive, Central Member of G2

nd = 1.581439, νd = 40.96. Glass: J-LF5 class (Hikari; supplier unconfirmed). f = +34.168 mm.

Patent surfaces 42–43 are equal and opposite radii, +38.303 and −38.303 mm, around a 7.5 mm centre thickness. The element is symmetric, but its surroundings are not: it is cemented to two different negative glasses, so its focal length in air describes the element alone, not the power of either cemented interface.

¶0043 attributes a spherical-aberration advantage to the biconvex middle element, and ¶0040–0042 connect the negative–positive–negative cemented construction to image-surface balance and lower sensitivity to decentering. At its 12.4 mm modeled rim L22 retains about 3.375 mm edge thickness; its faces would meet at about 16.53 mm radius. The inferred clear rim stays well inside that bound.

### L23 — Biconcave Negative, Rear Member of G2

nd = 1.902650, νd = 35.73. Glass: J-LASFH9A class (Hikari; supplier unconfirmed). f = −31.154 mm.

Patent surfaces 43–44 form the rear negative member of the triplet, the highest-index and most dispersive glass in the converter. With L21 and L22 it gives G2 its net focal length of −36.577 mm. ¶0044–0045 explain the preference for biconcave negative members: they keep the Petzval sum from going too far negative and so hold the mean image surface flat.

J-LASFH9A (1.90265/35.77) is a coordinate-compatible spectral proxy. Its published Hikari nine-term power series now supplies dispersion; the patent νd = 35.73 remains unchanged. The current J-LASFH9A row is distinct from discontinued J-LASFH9 (νd about 35.73, d-code 903357); neither establishes the production supplier or melt.

### L31 — Biconvex Positive, G3 Terminal Singlet

nd = 1.517420, νd = 52.25. Glass: J-KF6 class (Hikari; Schott and Sumita list near-identical KF6 coordinates; supplier unconfirmed). f = +100.544 mm.

Patent surfaces 45–46 form G3 on their own. The ratio of its focal length to the magnitude of G2's is 2.749 (condition 3). ¶0037 relates this balance to the Petzval sum and warns that too strong a rear positive group makes spherical aberration and peripheral coma harder to correct.

Several vendors list nearly the same KF6-family coordinate, so the label names a class, not a supplier. The patent's νd = 52.25 is kept; the J-KF6 catalog curve gives about 52.20.

## Glass Identification / Selection

The patent publishes d-line nd and νd only. Each coordinate was compared with the OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs; the labels name the closest compatible catalog glass, whose curve supplies the dispersion. A catalog match does not establish the glass Nikon actually used.

| Element | Patent nd / νd | Catalog class | Catalog nd / νd | Role |
|---|---|---|---|---|
| L11, L22 | 1.581439 / 40.96 | J-LF5 (Hikari) | 1.58144 / 40.98 | Light flint positives |
| L21 | 1.593190 / 67.96 | J-PSKH1 (Hikari) | 1.59319 / 67.90 | Low-dispersion phosphate crown; ED (inferred) |
| L23 | 1.902650 / 35.73 | J-LASFH9A (Hikari) | 1.90265 / 35.77 | Dense lanthanum flint; sourced catalog power series |
| L31 | 1.517420 / 52.25 | J-KF6 (Hikari) | 1.51742 / 52.20 | Crown-flint positive |

The palette pairs a low-dispersion negative front member with a flint positive centre and a dense-flint negative rear member in the triplet, a distributed chromatic and power balance consistent with the patent's condition on νn and its group-power conditions. The patent supplies no partial-dispersion or secondary-spectrum data, so no quantitative full-spectrum claim is made.

## Focus Mechanism

The converter has no moving parts; all of its groups are fixed and focusing is done by the master lens. Example 1 is tabulated only at infinity (D0 = ∞).

The catalog AF-S NIKKOR 800mm f/5.6E FL ED VR is modeled from JP 2013-250293 A, a companion Nikon application. Its master prescription has the same radii and spacings as Table 1 here, with refractive indices rounded to five decimals, and it adds the published close-focus states of the inner-focus group. On that host the converter computes to f = 974.79 mm at F/7.07, against the patent's 975.02 mm and F/7.07229.

## Conditional Expressions

All three conditions, recomputed from Table 1, agree with the printed values:

| Condition | Range | Printed | Recomputed | Meaning |
|---|---:|---:|---:|---|
| (1) νn | 54.0 < νn < 75.0 | 67.96 | 67.96 | Abbe number of at least one negative element; L21 here |
| (2) f2/fc | 0.05 < f2/fc < 0.35 | 0.201 | 0.2014 | Negative group relative to the whole converter |
| (3) f3/(−f2) | 2.00 < f3/(−f2) < 4.00 | 2.749 | 2.7488 | Rear positive group relative to the central negative group |

The values also fall within the narrower preferred ranges in ¶0030, ¶0034 and ¶0038.

## Model Scope and Limitations

Figure 1 supports smaller converter rims than the original uniform 16 mm estimate. The model now carries 11.0 mm rims on L11, 12.4 mm on the shared L21–L23 triplet and 13.3 mm on L31. Absolute figure readings around 8–10 mm would clip the chief ray to the stated 21.633 mm image height; each selected group rim instead retains at least 0.5 mm above that ray. The minimum glass edge thickness is about 2.378 mm on L31, and both air gaps keep positive clearance. These are inferred optical apertures, not published clear diameters or barrel measurements.

The patent gives the master's stop position (surface 22) but not its diameter. With the stop sized for the printed master F/5.65772, the combination traces to F/7.07, matching the printed F/7.07229; `minHostFno` is set to that master F-number. On the patent master the axial beam and the chief ray to the printed 21.633 mm image height (half-field ±1.26°) clear every converter rim; outer off-axis pupil rays are clipped, so the model keeps some corner vignetting.

Computed from Table 1, the master's focal length is 779.998 mm (printed 780.00037 mm), the combination's 975.013 mm (printed 975.01926 mm) and its back focus 42.2783 mm (printed 42.27895 mm). These differences are within the rounding of the printed table; nothing was adjusted to remove them.

Nikon makes the converter only for the AF-S NIKKOR 800mm f/5.6E FL ED VR, and the model is offered on that lens alone. A shared F mount does not imply that it fits other lenses.

## Sources

1. Japan Patent Office, [JP 2013-250290 A](https://patents.google.com/patent/JP2013250290A/en): page 1; ¶0026–0045 and ¶0049–0057; Table 1, pages 9–10; Figure 1, page 22.
2. Nikon, [800mm lens and TC800-1.25E ED announcement](https://www.nikon.com/company/news/2013/0129_lens_06/), 29 January 2013: dedicated fit, 1.25× enlargement and the first Nikon teleconverter with an ED element.
3. Nikon, [AF-S NIKKOR 800mm f/5.6E FL ED VR specifications](https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_800mmf_56g_fl_ed_vr/): converter construction (5 elements in 3 groups, 1 ED element) and its [construction diagram](https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_800mmf_56g_fl_ed_vr/img/pic_004.jpg).
4. OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA optical glass catalogs, for the coordinate matches in the glass table.
5. JP 2013-250293 A, the companion Nikon application from which the catalog AF-S NIKKOR 800mm f/5.6E FL ED VR is modeled.
