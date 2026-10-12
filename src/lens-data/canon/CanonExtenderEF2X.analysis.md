## Patent Reference and Design Identification

**Patent:** JP S63-106715 A (JPS63106715A)  
**Application Number:** JP61-253452  
**Filed:** 1986-10-24  
**Published:** 1988-05-11  
**Inventor:** Hideki Ogawa (小川 秀樹)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** リアーコンバーターレンズ (_Rear converter lens_)  
**Embodiment analyzed:** Example 2

The prescription represents the detachable rear converter in Example 2, separated from the patent's reference taking lens. The production identification is the original **CANON EXTENDER EF2X**, introduced in October 1987, rather than a later EF2X version or a taking lens with an integral converter. The original Japanese publication supplies the numerical design; Canon's Camera Museum supplies the product identity and construction drawing.[1, 2]

The association rests on convergent evidence:

1. Example 2 and the original product both have seven elements in five air-separated construction groups.
2. Both show a central cemented positive–negative–positive triplet, a substantial gap behind it, and a closely spaced positive–negative rear pair.
3. The nominal multiplier is 2×, and the applicant and product manufacturer are Canon.
4. The filing, product introduction and publication dates are chronologically consistent.

This is strong production-to-patent correlation, not manufacturer confirmation that Example 2 is the exact production prescription. The native reference master is not identified as a particular marketed taking lens. No compatible-host list follows from the correlation; the compatible catalog hosts are declared in the host lens files.

The voluntary amendment dated 1987-02-18 at the bottom of PDF 7 deletes a phrase about maintaining a small Petzval sum and image curvature from the invention-object paragraph. It is a prose amendment and does not replace any numerical prescription row. Optical claims here rely on the retained source conditions and executed calculations rather than restoring the deleted wording.

## Optical Architecture

The converter is an all-spherical, net-negative rear relay operating in an already converging beam. Its seven elements form five physical construction units but three patent power groups. The distinction matters: the central cemented triplet is one construction unit and also the entire second functional group; the first and third functional groups each contain two air-separated singlets.[1, PDF 5–6]

| Functional group | Elements          | Calculated standalone group EFL |
| ---------------- | ----------------- | ------------------------------: |
| I, positive      | L11 and L12       |                   +72.796632 mm |
| II, negative     | L21–L23, cemented |                   −30.643674 mm |
| III, positive    | L31 and L32       |                  +206.251052 mm |

These group focal lengths are calculated with each complete group isolated in air, retaining its internal separations. They do not assign a separable aberration contribution to any one element. The converter's standalone EFL is −84.812726 mm and its first-to-last vertex span is 47.02 mm. With collimated input its paraxial rear focal point lies −115.576743 mm from the last vertex; this virtual standalone focus is distinct from the real image obtained with the converging reference-master beam.

The working virtual-object distance is the separation between the converter's first vertex and the master lens's native image plane. It is modeled as 49.128966 mm. The converter then forms the combined system's Gaussian image 54.250154 mm behind its last vertex. Neither distance is printed as an image-space dimension in the patent. They are derived from the literal master prescription, the published separation, and the converter's first-order transfer matrix.

The patent prints a master focal length of 293.3 mm, F/2.8 and a full angular field of 8.44°. For the attached Example 2 system, Figure 7 labels F/5.6 and half-field 2.11°.[1, PDF 4–5, 7] The literal numerical system gives 293.299101 mm master EFL, 587.294834 mm combined EFL and a 2.002375159× multiplier. Preserving the original entrance pupil gives F/5.606650. The optical model uses the native scale, with no dimensional rescaling to a different commercial host.

## Element-by-Element Analysis

The focal lengths below are calculated for each element isolated in air, using the final prescription's radii, thickness and source index. They are not the in-situ power of a cemented interface. The notation nd and νd follows the disclosed d-line interpretation of the patent's N and ν columns; production glass suppliers remain unconfirmed.

### L11 — Negative Meniscus

nd = 1.69100, νd = 54.8. Glass: 691548 lanthanum-crown class, equivalent; supplier unconfirmed. f = −57.267684 mm.

L11 begins the converter with a negative meniscus whose two centres of curvature lie imageward. Its negative isolated power is followed by the positive L12; the complete first group has positive net power. The patent constrains the curvature ratio spanning L11's rear face and L12's rear face, as well as the intervening gap and L12's front curvature. Its design description therefore treats the pair as a coupled front group, rather than assigning L11 an independently demonstrated aberration correction.[1, claims and conditions, PDF 1–5]

### L12 — Biconvex Positive

nd = 1.59270, νd = 35.3. Glass: 593353 FTM16-class flint, equivalent; supplier unconfirmed. f = +34.341957 mm.

L12 provides the positive isolated power in group I. Its source Abbe number is lower than L11's, so the two opposite-sign components have different primary dispersion. That is a material basis for coupled chromatic balancing, but the source coordinates alone do not establish their secondary-spectrum performance. The verified group power includes the air separation and must not be replaced by a simple sum of the two listed inverse focal lengths.

### L21 — Positive Meniscus, Convex toward the Image

nd = 1.60342, νd = 38.0. Glass: 603380 flint class, equivalent; supplier unconfirmed. f = +48.357916 mm.

L21 is the front positive component of the central cemented triplet. Its rear surface is simultaneously the entrance boundary of L22: the medium after that boundary is L22's glass, not air. Although the isolated L21 lens is positive, the actual shared-interface power depends on the difference between the adjoining indices. The positive–negative–positive arrangement and the triplet's negative net power are established by the source topology and the group calculation.[1, PDF 5–6]

### L22 — Biconcave Negative

nd = 1.80610, νd = 40.9. Glass: 806409 lanthanum-flint class, equivalent; supplier unconfirmed. f = −11.853494 mm.

L22 is the negative core of group II and has the strongest negative isolated power among the converter elements. Both its surfaces are cemented interfaces. Its comparatively high refractive index is consistent with the patent's condition on the mean index of the negative elements, but neither that mean nor the element's shape proves an individual spherical-aberration, coma or colour-correction contribution. The complete triplet, rather than L22 alone, is the appropriate subsystem for the quoted group focal length.

### L23 — Biconvex Positive

nd = 1.58144, νd = 40.7. Glass: 581407 light-flint class, equivalent; supplier unconfirmed. f = +32.118212 mm.

L23 closes the triplet with a positive isolated lens. Its weak rear curvature forms the exit to air before the long separation to group III. The shared L22–L23 boundary is represented once, with L23's downstream medium, preserving the source's physical cementing. The triplet remains net negative despite its positive front and rear components.

### L31 — Biconvex Positive

nd = 1.51112, νd = 60.5. Glass: 511605 crown class, equivalent; supplier unconfirmed. f = +46.012568 mm.

L31 begins the final positive functional group. Its front curvature is weak relative to its rear curvature, matching the characteristic rear positive element in the patent and Canon construction drawings. L31 supplies positive isolated power before the final negative L32. The patent links L31's rear curvature to L12's front curvature in one of its normalized conditions, coupling the two positive groups geometrically.[1, PDF 3–6]

### L32 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum-flint class, equivalent; supplier unconfirmed. f = −58.008647 mm.

L32 is the final negative singlet. Together with L31 and their short air gap it forms the weak positive group III, not a second net-negative rear group. Its inferred optical rim follows the source figure's nearly equal-size rear pair. A particular field-flattening or distortion-correction role cannot be established from its power sign alone; the first-order Petzval accounting below describes only the system sum.

## Glass Identification and Selection

The source supplies refractive index and Abbe number, without glass trade names or melt data. Its d/g aberration labels and systematic catalog correspondence support a d-line interpretation, but the N/ν table definition does not explicitly print a reference-line subscript. All literal source coordinates are retained.

An independent search parsed 3,179 source records across all six manufacturers' preserved raw catalogs before ranking candidates. These contain 3,168 usable native d-line coordinate pairs and 1,160 native e-line pairs; duplicate current/obsolete entries remain distinct. The dossier preserves 490 rows referenced by the target comparisons, with full raw-catalog provenance. The current calculation resolves the source-coordinate classes to the following equivalents:[3–8]

| Element | Current catalog equivalent | Source nd / νd |
| ------- | -------------------------- | -------------- |
| L11     | SUMITA K-LaK9              | 1.69100 / 54.8 |
| L12     | OHARA S-FTM16              | 1.59270 / 35.3 |
| L21     | HIKARI J-F5                | 1.60342 / 38.0 |
| L22     | SCHOTT P-LASF47            | 1.80610 / 40.9 |
| L23     | OHARA S-TIL25              | 1.58144 / 40.7 |
| L31     | OHARA NSL7                 | 1.51112 / 60.5 |
| L32     | HIKARI J-LASF016           | 1.77250 / 49.6 |

The table identifies current numerical equivalents, not verified 1980s production materials. Other manufacturers and obsolete glasses can occupy similar index/Abbe coordinates. The source's mean-index conditions separate the positive-element and negative-element populations; they do not uniquely identify suppliers.

The equivalent dispersion formulas were checked against preserved catalog coefficients at the C, d, F and g lines. Calculated dispersion is anchored to the patent index at d, rather than replacing it with a slightly different catalog index. These equivalent spectra can support a model calculation but cannot independently establish the original melt, apochromatic correction or production secondary spectrum. The patent's plotted d/g behavior is source evidence, not an independently measured performance result for the modeled glass equivalents.

## Focus Mechanism

The converter prescription is fixed. No internal focus, zoom or stabilization motion is specified for the selected embodiment, and no internal motion is reconstructed. The attached taking lens supplies its own focus mechanism and stop. The numerical comparisons here use the patent's reference master with an object at infinity; they establish neither a commercial host identity nor a close-focus spacing law.

The converter contains no aperture stop. The master R15 stop lies after its last glass surface, and its physical radius is inferred by calibration to the printed master F/2.8. Exact marginal-ray calibration gives a 22.308411 mm stop radius, whereas a first-order pupil calculation gives 21.940887 mm. These are different approximations to an unpublished dimension, not competing printed values. The exact calibrated master stop is preserved in the combined system, whose entrance-pupil radius is 52.374839 mm.

## Conditional Expressions

The patent defines ten numbered conditions, yielding eleven entries in its Example 2 Table 1 because condition 6 has separate positive- and negative-element index limits. Here $F$ is the converter's standalone focal length; $l_1$ and $l_2$ are the air gaps between functional groups. $E_1$ and $E_2$ are the corresponding separations measured between adjacent group principal planes, not vertex gaps. The index means refer to the elements classified by their isolated positive or negative power.[1, PDF 1–5]

| Source condition                                                     | Calculated Example 2 value | Printed Table 1 |
| -------------------------------------------------------------------- | -------------------------: | --------------: |
| $0.58<\lvert r_{12}/r_{14}\rvert<1.10$                               |                   0.673645 |           0.674 |
| $0.018<l_1/\lvert F\rvert<0.030$                                     |                   0.026883 |           0.027 |
| $0.30<r_{12}/\lvert F\rvert<0.52$                                    |                   0.332332 |           0.332 |
| $0.40<r_{13}/\lvert F\rvert<0.52$                                    |                   0.434381 |           0.434 |
| $0.01<d_{12}/\lvert F\rvert<0.03$                                    |                   0.025940 |           0.026 |
| $\overline{N}_{+}<1.60$                                              |                   1.572170 |           1.572 |
| $1.70<\overline{N}_{-}$                                              |                   1.756533 |           1.757 |
| $0.72<(\lvert r_{13}\rvert+\lvert r_{32}\rvert)/\lvert F\rvert<0.82$ |                   0.738403 |           0.738 |
| $0.10<l_2/\lvert F\rvert<0.17$                                       |                   0.143728 |           0.144 |
| $-0.015<E_1/\lvert F\rvert<0.040$                                    |                   0.020122 |           0.020 |
| $0.10<E_2/\lvert F\rvert<0.30$                                       |                   0.215371 |           0.215 |

All eleven inequalities are satisfied, and every computed value rounds to the printed three-decimal entry. This verifies the selected prescription's relation to the claimed conditions; it does not independently reproduce all aberration curves or prove optimality.

## Numerical Verification and Modeling Limits

### Literal master, separation and reference planes

The master R7/N4 entry is read as **1.58313** in this model and as 1.58913 in an independent re-read of the same scan; the digit is not settled. The printed master focal length of 293.3 mm favours 1.58313 (293.299 mm, against 293.357 mm with 1.58913), whereas the printed Abbe number 61.0 favours 1.58913. The two readings change the converter's virtual-object distance by 0.0003 mm and its last gap by 0.0012 mm. With 1.58313 the literal master EFL is 293.299101027 mm, giving a raw residual of −0.000898973 mm from the printed 293.3 mm, inside its ±0.05 mm summary-rounding interval. A separate first-order sum of printed-input half-last-place sensitivities is 0.198424874 mm. This is supplementary sensitivity information, not a source-reading criterion, a rigorous interval bound or a reason to change any printed value.

The calculated master BFD is 125.798966 mm from R14, or 122.868966 mm from R15. The published separation $L=73.74$ mm is inferred to start at R15, which lies 2.93 mm after R14. Thus the last-glass-to-converter distance is 76.67 mm. Subtracting it from the master BFD gives the modeled 49.128966 mm virtual-object distance. The endpoint is not explicitly defined in the source prose; its interpretation is supported by the multiplier, F-number and field summaries. The alternative interpretation from R14 is retained separately and does not reproduce those summaries.

No cover plate, filter or dummy refracting plane is omitted, and no air-equivalent plate conversion is needed. The last converter gap is a derived Gaussian image distance, not a fitted replacement for an unprinted physical measurement.

### Apertures, field and finite ray coverage

Per-surface apertures are unprinted. Optical rim heights measured from the selected original Figure 3, calibrated against all converter vertex positions, give adopted unit semi-diameters of 13.3, 12.3, 10.4, 13.2 and 13.1 mm for L11, L12, L21–L23, L31 and L32 respectively. The nominal measured values were rounded upward to 0.1 mm, preserving square-cut unit rims. These are schematic-based estimates, not production dimensions. A fresh read of the losslessly decoded original Figure 3 independently confirms all five adopted unit rims within a conservative 0.2-mm drawing/ink uncertainty.

Exact source-F/2.8 axial rays and stop-centred chief rays through the stated 2.11° half-field clear the converter. At that field the computed chief image height is 21.722060 mm, compared with the 21.633308 mm half diagonal of a nominal 36×24 mm frame. The reference master's own apertures are compact diagnostic estimates that pass the axial beam and positive-edge/default-slope geometry; they are not published master dimensions and affect off-axis clipping. The effects paragraph also mentions approximately F/1.8 host capability, but publishes no corresponding aperture dimensions. The converter's minimum host F-number is 2: exact marginal rays of f/2.0–2.06 beams clear every adopted rim, whereas an f/1.86 beam overfills surfaces 1 and 3 by 0.16 mm. This limit is not proof of fit or clearance on every EF taking lens.

| Half-field | Clear to image | Physically clipped | Unresolved aim | Stop targets |
| ---------- | -------------: | -----------------: | -------------: | -----------: |
| 0°         |           1257 |                  0 |              0 |         1257 |
| 0.5275°    |           1226 |                 31 |              0 |         1257 |
| 1.055°     |           1186 |                 71 |              0 |         1257 |
| 1.5825°    |            936 |                302 |             19 |         1257 |
| 2.11°      |            527 |                673 |             57 |         1257 |

The samples are a uniform Cartesian lattice of physical-stop targets inside the disk. Direct aiming is supplemented by bounded continuation when necessary. Unresolved targets remain in the denominator and are never counted as transmitted; these are geometric sample counts, not photometric transmission fractions. All axial targets and the separately tested exact chiefs resolve and clear, so the mandatory axial/chief conclusions do not depend on the unresolved outer-field samples.

The actual project tracer, the retained runtime harness's analytic check and a newly written independent Python sphere/Snell calculation agree on every resolved target's clear/clipped classification. The fresh check independently propagates the recorded grid launches, verifies their stop residuals and image intersections, and separately solves every mandatory chief by bracketing and bisection; it does not claim a new solution for all unresolved grid targets. A ray counts as clear only after a complete unclipped surface sequence and a forward intersection with the image plane. The project's chief-ray API uses a paraxial shortcut below 1°; exact stop-centred aiming was therefore checked separately rather than equating its convergence label with zero residual.

All inferred rims satisfy positive glass thickness, spherical domain, actual rim-slope and full shared-band air-gap checks at the default geometry limits. The actual renderer retains the declared rims without hidden trim. The selected prescription and fixed reference state were tested; no continuum-wide or all-host clearance assertion follows. In particular, finite ray heights at Gaussian focus are not required to vanish, and natural aberrations have not been removed by changing the prescription.

### First-order curvature accounting

The surface-by-surface Petzval sums are +0.000371808 mm⁻¹ for the reference master, −0.000532326 mm⁻¹ for the converter and −0.000160518 mm⁻¹ for the combination. Their algebraic cancellation is a first-order property of the literal indices and surface powers. It is not a complete sagittal/tangential field-curvature result and does not, by itself, establish a flat image surface or a specific element's aberration-correction role.

## Sources and References

1. Japan Patent Office, **JP S63-106715 A**, _リアーコンバーターレンズ_, published 1988-05-11. Original seven-page INPIT/J-PlatPat scan, printed pages 87–93: front-page metadata at PDF 1; master at PDF 4; selected Example 2 and Table 1 at PDF 5, including the right-column continuation; Figure 3 at PDF 6; attached-system Figure 7 at PDF 7. [Original Japanese scan](https://www.j-platpat.inpit.go.jp/gazette_work2/domestic/A/363106000/363106700/363106710/363106715/B65FD2B0865533647ACC8E19CB569C708E757E66F349AB29E715E10E8A6FF335/JPA%201988106715-000000.pdf).
2. Canon Camera Museum, original **Extender EF2X**, [English product record](https://global.canon/en/c-museum/product/ef267.html), [Japanese product record](https://global.canon/ja/c-museum/product/ef267.html), and [original construction drawing](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef267-lens-construction.gif). Originals preserved, retrieved 2026-10-11. These identify the product; they do not explicitly identify this patent embodiment.
3. OHARA, [complete 2026-07-01 catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), raw `OHARA_260701.AGF`, including retained obsolete entries. Relevant equivalent rows: S-FTM16, S-TIL25 and NSL7.
4. SUMITA, manufacturer Zemax catalog and optical-glass data workbook, preserved from its [official download endpoint](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php), retrieved 2026-10-11. Relevant equivalent: K-LaK9. The preserved download is the source authority if the endpoint requires a new form request.
5. HIKARI, [complete optical-glass catalog workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), Data sheet and nine-term index-polynomial coefficients. Relevant equivalents: J-F5 and J-LASF016.
6. SCHOTT, [preferred and special-glass catalog archive](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true), raw June-2025-B AGF. Relevant equivalent: P-LASF47.
7. HOYA, [2026-07-07 catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), included in the supplier-neutral coordinate search.
8. CDGM, [2026-09 Zemax catalog](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX), included in the supplier-neutral coordinate search. The six raw catalogs were preserved with exact file/member hashes; their reuse does not imply a new acquisition or a historic supplier attribution.
