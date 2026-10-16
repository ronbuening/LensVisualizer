## Patent Reference and Design Identification

**Patent:** JP 2021-189311 A (JP2021189311A)  
**Application Number:** JP 2020-094697  
**Filed:** 29 May 2020  
**Published:** 13 December 2021  
**Inventors:** Katsuhiro Takamoto (高本 勝裕); Yasushi Yamamoto (山本 康); Hiroshi Yabumoto (籔本 洋)  
**Applicants:** Konica Minolta, Inc.; Nikon Corporation  
**Title:** Rear converter lens, imaging optical apparatus, and digital equipment (リアコンバーターレンズ、撮像光学装置およびデジタル機器)  
**Embodiment analyzed:** Example 1 (第1の実施形態; EX1), Tables 3–5 and Figure 3

This model represents the Example 1 rear converter, correlated with the Nikon Z TELECONVERTER TC-1.4x. The converter prescription comes from the original publication, rather than from a commercial specification sheet, and is transcribed unchanged. The patent's reference master contains one index misprint, discussed below, which affects only the converter's placement distance. The model does not establish the production prescription. [1]

The production correlation rests on the following convergent evidence:

1. **Construction:** Nikon specifies six glass elements in four groups, including one aspherical element. Example 1 has six named glass elements, L11–L16, arranged as two singlets and two cemented doublets. Its only aspherical surface is on L15. [1, ¶¶0046–0049, Tables 4–5; 2]
2. **Magnification:** Nikon's nominal multiplier is 1.4×. The patent identifies Examples 1–5 as the 1.4× family, while Example 1's Table 3 prints the more specific value 1.41. These are retained as distinct nominal and prescription quantities. [1, ¶0042, Table 3; 2]
3. **Image-side application:** Nikon identifies the product as a Z-mount converter for FX-format mirrorless cameras. The patent addresses a rear converter with a short image-side clearance and prints a maximum image height of 21.70 mm. That common application supports the correlation, without independently proving the factory design. [1, ¶¶0015–0018, Table 3; 2]
4. **Timing and ownership:** The application was filed on 29 May 2020 and names Nikon alongside Konica Minolta. Nikon announced the commercial converter on 21 July 2020. The timing is compatible with the proposed association. [1, cover and p. 33; 2]

The reference master (f = 293.80 mm, F/2.88) is published separately in Tables 1–2 on pp. 10–11. Table 2 prints **nd = 1.58600** at master surface 19. Read literally, that index gives a 268.18 mm master whose combination with the converter focuses 5.49 mm ahead of the last converter vertex, incompatible with the stated values. Master surface 15 prints **nd = 1.51860** for the same **νd = 69.89**, and the corresponding surface in the older JP 2015-102733 A master prints 1.518601. With **nd = 1.51860** at surface 19 the master reproduces its stated focal length and back focus, so the printed index is read as a misprint; every other master value is used as printed. [1, Table 2; 3, p. 9, corresponding master surface 21]

No official erratum exists: the later grant JP 7386128 B2 still prints 1.58600 at that surface. The older master's surfaces 3–22 correspond to the present surfaces 1–20, but some Abbe numbers differ and it adds a front plate and rear filter, so it is not used as a substitute prescription. [3; 4]

## Optical Architecture

Example 1 is a fixed, net-negative rear converter with a **positive–negative–negative–positive** group-power sequence. In object-to-image order, the source groups are L11, CL2, CL1, and L16. CL2 comprises L12 and L13; CL1 comprises L14 and L15. The source numbers its cemented groups from the image side, so CL2 precedes CL1 along the incident-light path. [1, ¶¶0046–0048, Figure 3]

The calculated d-line focal lengths, with each complete group isolated in air, are:

| Object-to-image group | Glass members | Signed group focal length |
|---|---|---:|
| Front singlet | L11 | +48.241805 mm |
| CL2 | L12, cement layer C2, L13 | −33.463443 mm |
| CL1 | L14, cement layer C1, L15 | −41.923925 mm |
| Rear singlet | L16 | +52.293149 mm |
| Complete converter | All four groups | −149.406195 mm |

The central cemented groups provide the converter's negative power, bounded by positive singlets. The two negative groups are separated by the published 3.70 mm air gap. The final positive singlet is an explicit architectural feature of the patent: its power is constrained relative to the complete converter in order to balance pupil placement and field curvature. These are the patent's stated design considerations, rather than aberration contributions inferred solely from the signs of the element powers. [1, ¶¶0016–0020, 0026–0029]

### Six elements and two cement layers

Table 4 has twelve refracting surfaces. At surfaces 4 and 8 it specifies **0.01 mm of a medium with nd = 1.51400 and νd = 42.83** between equal radii: the cement layers of the two doublets, modeled as C2 and C1. The patent gives their optical constants, not their chemical identity. They are not counted as lens elements, so the converter remains **six elements in four groups**, while the model's element list has **eight entries**. [1, Table 4; 2]

Collapsing either cement layer into a single glass-to-glass interface would change the published optical sequence. The retained model includes both boundaries, the nonzero thickness, and the native index and Abbe number. No chemical identity or spectral curve is assigned to the cement from those two coordinates alone.

### Placement behind the reference master

The patent places the converter's first vertex 78.83 mm behind the master's last vertex. With the corrected master index, the master's back focal distance is 106.961365 mm (printed 106.97 mm), giving a virtual-object distance of **28.131365 mm behind the converter's first vertex**. No plate correction is needed because the prescription contains no cover or filter plate. [1, Tables 1–4]

The combination has EFL **+414.296586 mm** (printed 414.47 mm), a paraxial back focal distance of **+11.384721 mm**, and a focal-length ratio of **1.410136×** (printed 1.41). The model's final gap keeps the printed **11.42 mm** rather than the calculated paraxial focus.

A detached converter is not an independent camera lens in this model. It has no aperture stop or focus mechanism of its own and is evaluated only after composition with a host. The host retains the aperture stop. The Nikon Z mount declaration identifies the product family; neither that declaration nor successful composition with the reference master establishes mechanical compatibility with every Z-mount lens.

## Element-by-Element Analysis

All element focal lengths below are calculated at the d line for the individual thick glass body **isolated in air**, using its published vertex radii, axial thickness, and native index. They are not in-situ powers at cement interfaces. Complete cemented-group powers are reported separately above. For L15, the quoted focal length is paraxial: its higher-order aspheric terms do not change the vertex curvature.

### L11 — Biconvex Positive Front Singlet

nd = 1.71736, νd = 29.50. Glass: E-FD1L class (HOYA coordinate candidate; supplier unconfirmed). f = +48.241805 mm.

L11 is the first positive singlet encountered by the converging beam from the master. Its biconvex shape has a relatively weak object-side curvature and a more strongly curved rear face. Its positive power precedes the two negative cemented groups, making it part of the converter's distributed power balance rather than the source of net magnification by itself. The patent explicitly constrains this front-singlet power through condition (6-1), associating excessive strength with difficulty correcting spherical aberration and insufficient strength with difficulty correcting astigmatism. [1, ¶¶0032–0033, 0046, Table 4]

The relatively low Abbe number identifies a dispersive flint-like coordinate, but does not identify the manufacturer. Catalogs list exact coordinate matches under several names, including HOYA E-FD1 and E-FD1L; the model uses the E-FD1L dispersion curve, which is not a supplier or melt identification. [6]

### L12 — Biconcave Negative Member of CL2

nd = 1.88300, νd = 40.80. Glass: TAFD30 class (HOYA coordinate candidate; supplier unconfirmed). f = −15.596120 mm.

L12 is the front, negative member of CL2. Its strongly negative isolated-air power is partly opposed by the positive L13, with the source's C2 medium between them. The resulting complete group has focal length −33.463443 mm. The group power must be obtained by tracing the actual glass–cement–glass sequence; adding the reciprocal isolated-element focal lengths would not reproduce its finite-thickness construction. [1, ¶0047, Table 4]

L12 is one of the two negative members governed by **nd > 1.85** in condition (3). The patent relates this high-index condition to correction of spherical aberration and astigmatism at the group level. That source statement does not establish a unique aberration budget for L12 alone. The current HOYA catalog lists TAFD30 at the same nd and νd = 40.81; the model's TAFD30 curve evaluates to νd = 40.818. Sumita K-LaSFn17 matches the printed coordinates exactly, so the pair does not identify a supplier. The printed νd = 40.80 is retained. [1, ¶¶0023–0025; 6–7]

### L13 — Biconvex Positive Member of CL2

nd = 1.68893, νd = 31.16. Glass: E-FD8 class (HOYA coordinate candidate; supplier unconfirmed). f = +31.361929 mm.

L13 follows the C2 cement layer and provides the positive member of the first encountered doublet. It reduces the magnitude of CL2's net negative power while retaining a different dispersion coordinate from L12. The separated positive and negative powers, their finite thicknesses, and the refracting cement boundaries provide coupled design variables; the two Abbe numbers alone do not demonstrate that CL2 is independently achromatic. [1, ¶0047, Table 4]

The published coordinate agrees with several catalog labels, including HOYA E-FD8 and other HOYA variants. The model uses the E-FD8 dispersion curve, without establishing the glass supplier, manufacturing route, or melt used in the commercial converter. [6]

### L14 — Biconcave Negative Member of CL1

nd = 2.00100, νd = 29.13. Glass: TAFD55 class (HOYA coordinate candidate; supplier unconfirmed). f = −34.291448 mm.

L14 begins the image-side cemented group CL1. It is the highest-index glass in the converter and, with L12, satisfies the patent's high-index requirement for the negative doublet members. CL1 has a calculated focal length of −41.923925 mm with its cement layer and L15 included. Its power is directly constrained by condition (2-1); the relative powers of CL1 and CL2 are constrained by condition (7-1). [1, ¶¶0019–0020, 0023–0025, 0035–0036, 0048]

The change from L14's high-index, relatively dispersive coordinate to L15's lower-index, higher-Abbe coordinate permits chromatic balancing within the assembly. The particular balance is a property of the complete prescription, not a consequence of the name TAFD55. That name is an exact HOYA coordinate match and supplies the model's dispersion curve; equivalent or near-equivalent catalog coordinates prevent a supplier claim. [6, 8–11]

### L15 — Biconvex Positive Member of CL1, Aspherical Rear Surface

nd = 1.58313, νd = 59.50. Glass: M-BACD12 class (HOYA coordinate candidate; supplier unconfirmed). f = +193.767621 mm.

L15 is the weak positive member of CL1. Its front face follows the C1 cement layer; its rear face is the patent's **surface 10\***, labeled **10A** in the model. This is the sole aspherical surface in Example 1. The higher-order terms alter the surface away from its vertex while preserving the native radius used in the paraxial calculation. [1, ¶¶0048–0049, Tables 4–5]

The source's νd = 59.50 is retained. HOYA M-BACD12 has the same tabulated nd but νd = 59.46, a catalog-minus-source difference of −0.04. The label is therefore a close candidate, not an exact identification. The model uses its dispersion curve, but no inference of glass molding or of the production supplier follows from the M-prefix alone. [6]

### L16 — Biconvex Positive Rear Singlet

nd = 1.51680, νd = 64.20. Glass: BSC7 class (HOYA coordinate candidate; supplier unconfirmed). f = +52.293149 mm.

L16 is the final positive singlet, separated from the aspherical face of L15 by the published 0.30 mm air gap. Its considerably stronger rear curvature and positive net power form the image-side end of the converter. Its calculated focal length reproduces the +52.29 mm summary value in Table 33 to that table's displayed precision. [1, Tables 4 and 33]

The patent's principal condition, (1), constrains this singlet relative to the complete negative converter. The accompanying discussion concerns maintaining a suitable pupil position and controlling field curvature in a short-back-focus configuration. This role is stated by the patent; it does not imply that L16 alone determines sensor illumination or chief-ray angles. BSC7 matches the printed nd and νd, while other catalog glasses share or nearly share these coordinates. [1, ¶¶0016–0018; 6]

### C2 and C1 — Cement Layers

Both layers have nd = 1.51400 and νd = 42.83 and have no catalog match. C2 occupies surfaces 4–5 within CL2; C1 occupies surfaces 8–9 within CL1. Each is 0.01 mm thick between equal radii. [1, Table 4]

Neither layer is counted as a lens element. Their chemical composition, supplier, wavelength-dependent indices, and partial dispersion are unpublished. No catalog glass is substituted simply to supply a convenient dispersion curve, and neither segment is treated as evidence for a hybrid-resin asphere: the actual asphere is the rear surface of L15, beyond C1 and the L15 glass body.

## Glass Identification and Selection

The prescription is explicitly d-line based. The printed nd and νd values define the model and are unchanged by catalog matching. The following table lists the catalog comparison and the dispersion curve the model uses. [1, ¶0045, Table 4]

| Material | Patent nd | Patent νd | Catalog comparison | Dispersion curve used |
|---|---:|---:|---|---|
| L11 | 1.71736 | 29.50 | HOYA E-FD1L class | E-FD1L |
| L12 | 1.88300 | 40.80 | HOYA TAFD30 class; current catalog νd = 40.81 | TAFD30 |
| C2 | 1.51400 | 42.83 | Cement layer, no catalog match | None |
| L13 | 1.68893 | 31.16 | HOYA E-FD8 class | E-FD8 |
| L14 | 2.00100 | 29.13 | HOYA TAFD55 class | TAFD55 |
| C1 | 1.51400 | 42.83 | Cement layer, no catalog match | None |
| L15 | 1.58313 | 59.50 | HOYA M-BACD12 class | M-BACD12, catalog νd = 59.46 |
| L16 | 1.51680 | 64.20 | HOYA BSC7 class | BSC7 |

Evaluating those dispersion curves gives the following d-line indices and C–F Abbe numbers, which differ slightly from both the printed prescription and the catalogs' rounded values.

| Glass element | Catalog curve | Evaluated nd | Evaluated νd |
|---|---|---:|---:|
| L11 | E-FD1L | 1.717361099 | 29.500812 |
| L12 | TAFD30 | 1.883003892 | 40.817976 |
| L13 | E-FD8 | 1.688929787 | 31.160527 |
| L14 | TAFD55 | 2.001002989 | 29.134715 |
| L15 | M-BACD12 | 1.583130016 | 59.460905 |
| L16 | BSC7 | 1.516798216 | 64.198258 |

The comparison covered OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita catalog data, including obsolete entries. A match in nd and νd is evidence of coordinate compatibility, not proof of a factory glass name, supplier, melt, or complete spectral equivalence. [6–11]

The patent supplies no element-level nC, nF, ng, θgF, or ΔPgF for this converter. Catalog-derived partial dispersion belongs to the catalog glass and cannot be attributed to the production material. All six glass elements use catalog dispersion curves; the two cement layers have none and use a simpler dispersion model from their printed nd and νd. Neither apochromatic performance nor anomalous-dispersion behavior is established by the material identification.

The baseline geometric d-line trace preserves native source indices. The chromatic calculation's selected catalog path can instead evaluate that catalog's index at the d wavelength, with its small native-to-catalog residual. Accordingly, a chromatic d-line trace using catalog proxies is not automatically the same numerical model as the native-index baseline. Comparisons must state which index path is used; catalog labels do not justify silently replacing the printed prescription coordinates.

## Focus Mechanism

The converter is modeled as a fixed assembly. Example 1 provides a single prescription and infinity-focus aberration plots, with no internal converter movement, finite-distance spacing schedule, or travel law. The model therefore has no internal focus movement: its optical state is the published infinity configuration. Any focusing of a composed camera system belongs to its host lens. [1, ¶¶0049–0051, Figure 4]

The reference master's stop is the source's surface 14, between its M8 and M9 elements. Its location is published, but its diameter is not. The model retains the source master f-number **2.88** and infers the physical stop by exact axial-ray calibration, obtaining a radius of **19.320691894 mm**, or diameter **38.641383788 mm**. This is a modeled aperture consistent with the chosen f-number, not independent evidence of a published iris diameter. The resulting combined open f-number is **4.061193**, compared with Table 3's 4.06. [1, ¶0044, Tables 1–3]

Nikon's description of autofocus and stabilization compatibility concerns operation with a compatible commercial lens and camera. It does not identify a moving group inside this converter or supply a focus law for the patent master. No internal focusing or stabilization mechanism has been reconstructed from those product statements. [5]

## Aspherical Surfaces

The sole asphere is the image-side face of L15: patent surface **10\***, labeled **10A** in the model and **TC10A** when mounted on a host. Its vertex radius is **−618.383 mm**. The original equation explicitly contains **1 + K**, so the conventional conic constant is used directly: **K = 30**, with no alternative κ-to-K conversion. [1, ¶0049, p. 12, equation (AS) and Table 5]

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+\sum_j A_jh^j,\qquad c=1/R.
$$

Here h and z are in millimeters. A coefficient A_j consequently has units mm^(1−j). The retained source coefficients are:

| Coefficient | Value |
|---|---:|
| K | 30 |
| A4 | −4.72819 × 10⁻⁶ mm⁻³ |
| A6 | +4.56226 × 10⁻⁹ mm⁻⁵ |
| A8 | −1.48932 × 10⁻¹¹ mm⁻⁷ |
| A10 | +1.09243 × 10⁻¹⁴ mm⁻⁹ |
| A12 | 0 |
| A14 | 0 |

The publication explicitly makes unlisted coefficients zero. No uniform dimensional scaling has been applied, so both the native coefficients and K are unchanged. The negative quartic term adds negative sag relative to the conic base near the axis; positive and negative higher-order terms modify that departure at greater height. This describes the mathematical profile, not a unique attribution of spherical aberration, coma, or field correction to one coefficient.

The modeled semi-diameter of this face is **17.00 mm** and is an inferred clear aperture, not a patent-listed diameter. The source does not establish whether the production surface is polished, glass-molded, or made by another process.

## Conditional Expressions and Design Rationale

The applicable Example 1 conditions are reproduced below. Group focal lengths include the source cement media. The converter's vertex-to-vertex length calculated from Table 4 is **TL = 35.19 mm**, whereas Table 33 prints 35.20 mm. The image-height parameter is the printed **Yim = 21.70 mm**; it is a source parameter, not a claim that the traced chief ray at the rounded source field reaches exactly that height. [1, pp. 6–10, Tables 33–34]

| Condition | Required interval | Calculated quantity | Table 34 |
|---|---|---:|---:|
| (1), fL / ft | −0.53 < ratio < −0.19 | −0.350007 | −0.35 |
| (2-1), fs1 / ft | 0.21 < ratio < 0.51 | +0.280604 | +0.28 |
| (3), negative-member nd | nd > 1.85 | 1.88300; 2.00100 | 1.8830; 2.0010 |
| (4), t / TL | 0.08 < ratio < 0.15 | 0.105144 | 0.11 |
| (5-1), abs(TL / Yim × Tc) | 2 < value < 2.5 | 2.286760 using computed Tc | 2.29 |
| (6-1), f1 / ft | −0.33 < ratio < −0.24 | −0.322890 | −0.323 |
| (7-1), abs(fs1 / fs2) | 1.1 < ratio < 2.8 | 1.252828 | 1.253 |
| (8), Yim / Bf | 1.7 < ratio < 2.1 | 1.900175 using source Bf | 1.9 |

All listed inequalities are satisfied by the stated calculation convention. The convention for condition (5-1) matters: **Tc = 1.4**, printed in Table 33, gives **2.270323**, whereas the **1.41** multiplier printed in Table 3 gives **2.286539**, rounding to Table 34's 2.29. The computed reference-master ratio gives 2.286760. The summary tables are therefore not numerically identical under a single displayed-precision Tc; the difference is disclosed rather than changing the source's 1.4 to 1.41. All three interpretations remain within the condition's interval.

For condition (8), the displayed 1.900175 uses the published final gap of 11.42 mm, rather than the calculated paraxial back focal distance.

The patent associates the front and rear singlet constraints with pupil placement and the balance between spherical aberration, astigmatism, and field curvature; it associates the separation and relative strengths of the cemented groups with field curvature, coma, and astigmatism. These statements explain why powers and spacing are bounded together. Satisfaction of the inequalities does not establish an independent measured performance result, a production MTF curve, or agreement with every published aberration plot. [1, ¶¶0017–0020, 0027–0029, 0033, 0036, 0040]

## Model Scope and Limitations

### Reference master and first-order values

The following d-line calculations use the patent's master and converter with the printed and the corrected master index. Positive back focal distance is toward the image side from the final refracting vertex; a negative value denotes a paraxial focus in front of that vertex.

| Quantity | Printed | Master index 1.58600 as printed | Master index 1.51860 |
|---|---:|---:|---:|
| Master EFL | +293.80 mm | +268.175072 mm | +293.798956 mm |
| Master back focal distance | +106.97 mm | +97.738277 mm | +106.961365 mm |
| Combined EFL | +414.47 mm | +347.880420 mm | +414.296586 mm |
| Combined paraxial back focal distance | +11.42 mm | −5.486598 mm | +11.384721 mm |

With the corrected index the master matches its printed focal length and back focus to within **−0.001 mm** and **−0.009 mm**; the combined focal length and back focus fall **0.17 mm** and **0.035 mm** short of the printed values. The isolated converter's calculated focal length is **−149.406195 mm**, compared with **−149.41 mm** in Table 33. These small differences are retained; the model is not refocused to remove them.

### Clear apertures and compatible hosts

The converter has modeled semi-diameters of **14.00 mm at surfaces 1–6**, **17.00 mm at surfaces 7–10A**, and **21.00 mm at surfaces 11–12**. These are inferred clear apertures, not dimensions printed in Table 4. They pass the full f/2.88 axial beam of the patent's master. The model accepts hosts of f/2.8 or slower, matching the f/2.8 lenses on Nikon's compatibility list, whose axial beams the same rims pass without clipping. [5]

### Image height and distortion

At the rounded half-field **2.995°** (full field 5.99°) on the patent's master, the traced chief-ray image height at the printed image plane is **21.544319 mm**, compared with the printed **21.70 mm**. The difference from that nominal height is **−0.155681 mm**. The computed rectilinear reference height, EFL × tan(2.995°), is **21.676111 mm**, giving approximately **−0.61% distortion** for the traced chief ray. Figure 4 on p. 28 also shows negative distortion near the edge. The lower exact image height is therefore consistent with the distinction between a nominal format height and its distorted chief-ray intercept; it is not, by itself, evidence of another patent error. [1, ¶0051, Figure 4]

The chief ray that reaches **Y = 21.70 mm** has a half-field of **3.016848°**; this is a format-coverage angle, not a correction to the published 2.995°. Off-axis rays at the field edge are partly vignetted by the modeled rims, so the model does not demonstrate an unvignetted format corner.

The model describes the published infinity state. It does not establish production mechanical clearances, factory glass identity, or production chromatic performance.

## Sources and References

1. **Konica Minolta, Inc.; Nikon Corporation.** [JP 2021-189311 A, original publication](https://patents.google.com/patent/JP2021189311A/ja), published 13 December 2021. The original Japanese PDF governs the transcription. Bibliography: pp. 1 and 33. Master: Table 1, p. 10, and Table 2, p. 11. Example 1: ¶¶0046–0051 and Tables 3–5, pp. 11–13. Summary quantities and conditions: Table 33, p. 25, and Table 34, p. 26. Layout: Figure 3, p. 27; Example 1 aberration plots: Figure 4, p. 28. Page references are one-based original PDF pages and agree with printed page numbers.
2. **Nikon Imaging Japan.** [Announcement of the Z TELECONVERTER TC-1.4x and TC-2.0x](https://www.jp.nikon.com/company/news/2020/0721_teleconverter_03/), 21 July 2020. Primary source for announcement timing, Nikon Z/FX application, nominal multiplier, and the TC-1.4x's six-element/four-group construction with one aspherical element.
3. **JP 2015-102733 A.** [Original publication PDF](https://patentimages.storage.googleapis.com/d8/51/8d/8cd7c2a4f3d16e/JP2015102733A.pdf), especially p. 9, master prescription and surface 21. Used only to investigate the selected source's master-index discrepancy; its full prescription and extra plates are not substituted into the present model.
4. **Konica Minolta, Inc.; Nikon Corporation.** [JP 7386128 B2, original grant PDF](https://patentimages.storage.googleapis.com/0f/ed/4d/49cb36bab13b40/JP7386128B2.pdf), master Table 2, p. 11. The grant retains nd = 1.58600 at the affected master surface and therefore does not supply an official correction to that value.
5. **Nikon Imaging Japan.** [Z TELECONVERTER TC-1.4x product features](https://nij.nikon.com/products/lineup/nikkor/zmount/z_teleconverter_tc-14x/features01.html). Primary source for the commercial converter's construction and host/camera AF and VR compatibility statements; these statements are not a movement prescription for the patent model. Nikon's [global product page](https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_tc_14x/) lists the compatible lenses and shows the lens-construction drawing.
6. **HOYA.** [Optical glass Zemax catalog, including obsolete glasses, 7 July 2026](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), with the [1 June 2026 property workbook](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx). Primary catalog comparisons for E-FD1/E-FD1L, TAFD30, E-FD8, TAFD55, M-BACD12, and BSC7. The model's TAFD30, E-FD8, and TAFD55 curves come from older HOYA coefficient records.
7. **Sumita.** [Optical glass data downloads](https://www.sumita-opt.co.jp/en/download/), recovered Zemax catalog and glass-data workbook version 14.02.00. Primary coordinate comparison for the K-LaSFn17 alternative; the model does not use it.
8. **OHARA.** [Optical glass catalog, 1 July 2026](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), with separate [recommended-glass](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20260402-5.xlsx) and [low-Tg glass](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20250312-L5.xlsx) workbooks. Prefix distinctions are retained in catalog comparisons.
9. **HIKARI.** [Optical glass catalog workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), recovered manufacturer source used for coordinate and spectral comparisons.
10. **Schott.** [Optical glass catalog downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267#downloads), recovered June 2025-B Zemax catalog and property workbook, used to assess cross-vendor coordinate alternatives.
11. **CDGM.** [September 2026 Zemax catalog](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX) and [September 2026 property workbook](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb), used to assess cross-vendor coordinate alternatives.
