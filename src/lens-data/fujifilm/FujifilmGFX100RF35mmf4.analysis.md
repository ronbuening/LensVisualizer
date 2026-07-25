# Fujifilm GFX100RF 35mm f/4 — Patent Review and Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2025/0362482 A1
**Application number:** US 19/212,617
**Filed:** May 19, 2025
**Published:** November 27, 2025
**Priority:** JP 2024-085849, filed May 27, 2024
**Inventor:** Daiki Komatsu
**Applicant / Assignee:** Fujifilm Corporation, Tokyo
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 5; Tables 13, 14, and 15; FIG. 13 and FIG. 14

Example 5 is the strongest match to the fixed 35 mm f/4 lens in the Fujifilm GFX100RF. The patent table gives $f = 34.8463$ mm, $FNo = 4.12$, $Bf = 5.3962$ mm, and $2ω = 83.0°$. The production camera is specified by Fujifilm as a 35 mm f/4 fixed-focal-length lens, equivalent to 28 mm on 135 format, built as 10 elements in 8 groups including 2 aspherical elements, with a 0.20 m minimum focus distance measured from the front of the lens. Fujifilm also states that the lens was designed as a single fixed-lens unit, uses two glass-molded aspherical lenses, and shortens back focus by using a leaf shutter instead of a focal-plane shutter.

The patent's Example 5 has the same 10-element / 8-group count and the same two-aspherical-lens allocation: L17 has aspherical surfaces *12 and *13, while L21 has aspherical surfaces *14 and *15. Its 34.8463 mm effective focal length is the closest patent-scale match to the marketed 35 mm focal length, and its positive-front / negative-rear architecture explains why its back focal distance can be far shorter than the Fujifilm G-mount flange distance. Example 2 is another possible 35 mm-class worked example, but Example 5 gives the closer match to the marketed field coverage and to the camera-specific fixed-lens packaging described in Fujifilm's launch and development material.

## Optical Architecture

The design is a compact positive-negative wide-angle system for the 44 x 33 mm digital medium-format image. The first lens group G1 has positive refractive power and the second lens group G2 has negative refractive power. This is not a retrofocus layout: a retrofocus wide angle would use a negative front group to create a long back focus. Here the design uses the opposite power sequence and accepts a very short $Bf/f$ of 0.155 because there is no interchangeable-lens mount throat, mirror box, or focal-plane shutter to clear.

G1 is subdivided into a positive front partial group G1f, the aperture stop, and a positive rear partial group G1r. G1f is the weak front cemented collector L11-L12. G1r is the main positive power section L13-L17 and includes the first molded aspherical lens L17. G2 is a negative-negative-positive rear triplet L21-L22-L23; L21 is the second molded aspherical lens, and L23 is an ultra-high-index positive rear element placed close to the image plane.

Independent paraxial tracing gives the following group focal lengths:

| Group | Elements | Focal length |
|---|---:|---:|
| G1f | L11-L12 | +89.221 mm |
| G1r | L13-L17 | +25.090 mm |
| G1 | L11-L17 | +22.233 mm |
| G2 | L21-L23 | -43.631 mm |

The first group is substantially stronger than the final system focal length. The negative G2 then lengthens the effective focal length, shapes the exit cone for the sensor, and helps flatten the field. The system total track is 49.1149 mm from the first surface to the image plane, giving $TL/f = 1.4095$.

## Element-by-Element Analysis

### L11 — Biconcave Negative, front member of G1f

$nd = 1.54814$, $νd = 45.78$. Glass: S-TIL1 (OHARA equivalent). $f = -20.7$ mm.

L11 is the negative front lens identified by the patent as the lens of G1 closest to the object side. Its object-side surface is concave, matching the preferred shape described in ¶0059-¶0060 for spherical-aberration correction. It is not S-TIL26; the patent index pair matches S-TIL1, while S-TIL26 corresponds to L16.

As the first component in a cemented negative-positive pair, L11 begins the off-axis ray bending before the stop and supplies the dispersive partner for L12. The doublet is weakly positive overall, so its primary function is collection and chromatic preparation rather than main imaging power.

### L12 — Plano-convex Positive, rear member of G1f

$nd = 1.87070$, $νd = 40.73$. Glass: TAFD32 (HOYA) / H-ZLaF64 class. $f = +16.8$ mm.

L12 supplies most of the positive power in G1f. The cemented interface at R = +14.6617 mm is the high-power surface of the doublet, while the rear surface is flat. The previous identification as NBFD13 / S-LAH65V was rejected because those catalog values do not match the patent's $nd$ and $νd$; TAFD32 / H-ZLaF64 is the direct match.

The patent notes that a cemented negative-positive pair in G1f is advantageous for axial and lateral chromatic aberration correction while keeping the design compact (¶0061). The modest dispersion separation between L11 and L12 means this pair is not a strong achromat by itself; it prepares the ray bundle for the stronger correction around the stop and rear group.

### L13 — Biconvex Positive, first lens after the stop

$nd = 1.75500$, $νd = 52.32$. Glass: S-LAH97 (OHARA) / TAC6 class. $f = +34.6$ mm.

L13 is the positive single lens immediately after the aperture stop. Its nearly symmetric biconvex form distributes refraction across both surfaces. The patent specifically prefers a positive single lens adjacent to the image side of the stop and further prefers a biconvex form for spherical-aberration correction and size reduction (¶0063).

The glass identification was corrected from the earlier TAFD5F / N-LAK34 assignment. S-LAH97 / TAC6 matches the 755523 glass code region, and the patent's partial-dispersion value is also consistent with that family.

### L14 — Biconcave Negative, front member of the G1r cemented doublet

$nd = 1.62004$, $νd = 36.26$. Glass: S-TIM2 (OHARA) / N-F2 class. $f = -13.1$ mm.

L14 is the high-dispersion negative element in the L14-L15 cemented doublet. It has strong standalone negative power but is paired immediately with a low-dispersion positive element, so the cemented pair is only weakly negative in situ. Its role is mainly chromatic correction in the converging beam behind the stop.

The previous E-F5 / N-F2 description was too loose. The exact patent values correspond to the S-TIM2 region; N-F2 is a useful class comparison but not the primary catalog match.

### L15 — Biconvex Positive, rear member of the G1r cemented doublet

$nd = 1.61997$, $νd = 63.88$. Glass: PCD40 (HOYA) / H-PK65 class. $f = +16.0$ mm.

L15 is the positive, low-dispersion partner to L14. The index is nearly equal to L14, but the Abbe number is much higher, producing a useful dispersion split at the cemented interface. This lets the pair correct longitudinal color without adding much net power.

The previous draft treated this as a loose PCD4-family match. The better identification is PCD40 / H-PK65, which matches the patent's $nd = 1.61997$ and $νd = 63.88$ directly.

### L16 — Weak Negative Meniscus, field trim before L17

$nd = 1.56732$, $νd = 42.82$. Glass: S-TIL26 (OHARA). $f = -97.0$ mm.

L16 is a weak negative meniscus between the G1r cemented doublet and the first aspherical lens. Its power is small, but its position is useful: it adjusts the ray curvature and chromatic state before the beam enters L17.

The earlier analysis mislabeled L16 as S-BAM4. Its patent values are a direct match to S-TIL26. This correction also resolves the earlier swap with L11.

### L17 — Positive Meniscus with two aspherical surfaces, rear of G1

$nd = 1.76802$, $νd = 49.24$. Glass: M-TAF101 (HOYA) / D-LaF050 class. $f = +34.5$ mm.

L17 is the first aspherical lens. It sits at the image side of G1, immediately before the variable air gap dF, and carries aspherical surfaces *12 and *13. The patent identifies this position as advantageous because the on-axis and off-axis luminous fluxes are separated there, making the element effective for spherical aberration and field-curvature correction (¶0065).

The previous S-LAM51 identification was rejected. The patent values match HOYA M-TAF101 / CDGM D-LaF050 class glass. This also better matches the general Fujifilm tendency toward HOYA glass in modern camera lenses, though the patent itself gives only optical constants rather than a vendor name.

### L21 — Negative Meniscus with two aspherical surfaces, front of G2

$nd = 1.68863$, $νd = 31.19$. Glass: M-FD80 (HOYA) / D-ZF10 class, probable. $f = -56.5$ mm.

L21 is the second aspherical lens and the first element of G2. It carries aspherical surfaces *14 and *15. In the rear diverging group, chief-ray heights are large, so this element is especially influential for field curvature, distortion, and lateral color.

The glass identification is necessarily softer than for most other elements. The patent's constants lie extremely close to the M-FD80 / D-ZF10 titanium-flint region, but the exact stored values do not cleanly resolve to a public catalog name. The data file therefore records the class as probable rather than exact.

### L22 — Negative Meniscus, second element of G2

$nd = 1.51633$, $νd = 64.14$. Glass: S-BSL7 (OHARA) / BSC7 class. $f = -46.6$ mm.

L22 is a low-dispersion negative meniscus. Its negative power helps the rear group flatten the field and reduce the chief-ray incidence angle at the sensor, but its BK7-class dispersion avoids adding excessive lateral color.

The patent description of G2 as a negative-negative-positive sequence (¶0071) maps directly onto L21-L22-L23.

### L23 — Plano-convex Positive rear element

$nd = 1.92119$, $νd = 23.96$, $θgF = 0.62025$, $ΔPgF \approx +0.01675$. Glass: FDS24 (HOYA). $f = +75.9$ mm.

L23 is the ultra-high-index positive rear lens. Its front face is flat and its rear surface is curved, with only 5.3962 mm of air-equivalent back focus to the image plane. The high index lets the rear surface supply positive power without requiring a very steep curvature.

This is a geometric compactness choice first, not an ED-style apochromatic one. FDS24 is a super-dense flint with very high dispersion and a patent-listed positive partial-dispersion deviation. It is useful here because it bends light strongly in a compact thickness, helping manage the exit cone and sensor incidence angle in the short-back-focus fixed-lens camera.

## Glass Identification and Selection

The corrected glass table is:

| Element | nd | νd | θgF | ΔPgF | Corrected identification | Status |
|---|---:|---:|---:|---:|---|---|
| L11 | 1.54814 | 45.78 | 0.56859 | +0.00179 | S-TIL1 (OHARA) | exact / equivalent |
| L12 | 1.87070 | 40.73 | 0.56825 | −0.00704 | TAFD32 (HOYA) / H-ZLaF64 class | exact |
| L13 | 1.75500 | 52.32 | 0.54757 | −0.00823 | S-LAH97 (OHARA) / TAC6 class | exact / equivalent |
| L14 | 1.62004 | 36.26 | 0.58800 | +0.00519 | S-TIM2 (OHARA) / N-F2 class | exact / equivalent |
| L15 | 1.61997 | 63.88 | 0.54252 | +0.00617 | PCD40 (HOYA) / H-PK65 class | exact |
| L16 | 1.56732 | 42.82 | 0.57309 | +0.00131 | S-TIL26 (OHARA) | exact |
| L17 | 1.76802 | 49.24 | 0.55164 | −0.00934 | M-TAF101 (HOYA) / D-LaF050 class | exact |
| L21 | 1.68863 | 31.19 | 0.60069 | +0.00935 | M-FD80 (HOYA) / D-ZF10 class | probable |
| L22 | 1.51633 | 64.14 | 0.53531 | −0.00061 | S-BSL7 (OHARA) / BSC7 class | exact / equivalent |
| L23 | 1.92119 | 23.96 | 0.62025 | +0.01675 | FDS24 (HOYA) | exact |

The re-review found that the earlier draft had multiple glass-name errors. The most consequential were the L11/L16 swap, the L12 high-index glass assignment, the L13 lanthanum-crown assignment, and the L17 aspherical-lens glass. The revised analysis treats the patent constants, not vendor-name similarity, as controlling.

The 2026-06-25 patent pass also transcribed Table 13 θgF into structured ΔPgF values. Most rows stay close to the normal line and are not displayed as APD special-glass elements. L23 is the exception: its +0.01675 deviation is high enough to keep a patent APD badge while still describing it as an ultra-high-index short flint rather than an ED or Super ED element.

The system uses dispersion pairing in both cemented groups. G1f uses a negative flint-like front member and a high-index positive rear member, while G1r uses a high-dispersion negative lens against a low-dispersion positive lens. G2 uses a more extreme strategy: L21 is high-dispersion and negative, L22 is low-dispersion and negative, and L23 is an ultra-high-index positive flint constrained by the patent's positive-lens conditions.

## Focus Mechanism

The patent states that, during focusing from infinity to a short-range object, the first lens group G1 moves toward the object side and the second lens group G2 is fixed with respect to the image plane (¶0056, ¶0137). This is first-group unit focusing: L11 through L17, including the stop plane, translate together. The variable spacing is the air gap dF between surface *13 and surface *14.

The patent tabulates only the infinity-focus prescription. Fujifilm specifies a production minimum focus distance of 0.20 m from the front of the lens, but the patent does not give a close-focus dF value. For the data file, dF is therefore modeled by a paraxial first-surface 0.20 m solve. That is a rendering approximation, not a patent-published mechanical travel value.

| Parameter | Infinity | Close-focus model |
|---|---:|---:|
| dF, surface *13 to *14 | 6.0000 mm | 8.5936 mm |
| Bf, surface 19 to image | 5.3962 mm | 5.3962 mm |
| Focus reference | infinity | 0.20 m from first surface, paraxial assumption |
| Paraxial magnification | 0 | -0.1828 |

The production camera uses a DC motor. Fujifilm's development notes emphasize that the focus-moving components were placed toward the front and that the DC motor was selected to move relatively large lens components with sufficient torque.

## Aspherical Surfaces

The patent uses the aspherical sag equation:

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - KA C^2 h^2}} + \sum A_m h^m
$$

where $C = 1/R$. In the renderer's standard convention, the equivalent conic constant is $K = KA - 1$, because the renderer writes the conic term as $1 - (1+K)(h/R)^2$ under the square root.

Four surfaces are aspherical. Surfaces *12 and *13 are on L17; surfaces *14 and *15 are on L21. Fujifilm's production development story identifies the two production aspherical lenses as glass-molded aspheres.

### Surface *12 / data surface 12A — L17 front

| Term | Value |
|---|---:|
| KA | 3.1024553941E+00 |
| K, standard | +2.1024553941E+00 |
| A4 | -7.0023045429E-06 |
| A6 | -9.4753226086E-08 |
| A8 | +3.1001699495E-09 |
| A10 | -3.4374049665E-12 |
| A12 | -2.7796877419E-13 |
| A14 | +2.7035420141E-15 |
| A16 | -1.1894030479E-17 |
| A18 | +2.5901002226E-20 |
| A20 | -2.2489114855E-23 |

The negative A4 term flattens the peripheral sag relative to the base conic and contributes to zonal spherical-aberration correction before the large G1-G2 separation.

### Surface *13 / data surface 13A — L17 rear

| Term | Value |
|---|---:|
| KA | 1.8414798937E+00 |
| K, standard | +8.4147989370E-01 |
| A4 | +2.6535069872E-05 |
| A6 | -1.7876968415E-07 |
| A8 | +4.3566170495E-09 |
| A10 | -2.7653832283E-11 |
| A12 | +1.9196600442E-13 |
| A14 | -1.1912570741E-15 |
| A16 | +3.8662215401E-18 |
| A18 | -5.8797851965E-21 |
| A20 | +3.3809801750E-24 |

Surface *13 is the stronger of the two L17 surfaces. Its positive A4 term increases peripheral sag relative to the base conic, while the alternating higher orders control zonal spherical and coma residuals.

### Surface *14 / data surface 14A — L21 front

| Term | Value |
|---|---:|
| KA | 1.5386343333E+00 |
| K, standard | +5.3863433330E-01 |
| A4 | -1.2557231818E-04 |
| A6 | +1.2241585705E-06 |
| A8 | -3.9408797975E-08 |
| A10 | +1.0117637781E-09 |
| A12 | -1.4844491690E-11 |
| A14 | +1.2872743002E-13 |
| A16 | -6.5119887653E-16 |
| A18 | +1.7741841901E-18 |
| A20 | -2.0096774496E-21 |

The large negative A4 term gives this surface a strong peripheral correction. Because L21 is the first element of the diverging rear group, this surface is important for field curvature and distortion management.

### Surface *15 / data surface 15A — L21 rear, odd-order patent surface

| Term | Patent value |
|---|---:|
| KA | 7.0896629652E+00 |
| K, standard | +6.0896629652E+00 |
| A3 | 0.0000000000E+00 |
| A4 | -1.0499566787E-04 |
| A5 | -1.7524859132E-05 |
| A6 | +4.5030349598E-06 |
| A7 | +2.1858635689E-07 |
| A8 | -1.8332704424E-07 |
| A9 | +1.0104186656E-08 |
| A10 | +3.2832007849E-09 |
| A11 | -3.5373721277E-10 |
| A12 | -2.6860875467E-11 |
| A13 | +4.6941325681E-12 |
| A14 | +6.2135840221E-14 |
| A15 | -3.1574129484E-14 |
| A16 | +4.8063364846E-16 |
| A17 | +1.0713713899E-16 |
| A18 | -3.3492681519E-18 |
| A19 | -1.4581851029E-19 |
| A20 | +6.0349230674E-21 |

The A7 coefficient was corrected during re-review. The earlier draft had $2.1859 \times 10^-6$; Table 15 shows $2.1858635689 \times 10^-7$.

The odd-order terms are rotationally symmetric because $h$ is radial and non-negative; they do not imply a decentered or anamorphic surface. Their purpose is to give the radial sag curve more freedom, especially in the outer zone. This matches the patent's Conditional Expression (16), which requires the second derivative magnitude near the effective rim to exceed twice the value at half-height for the image-side surface of the second aspherical lens.

The data renderer now supports odd-order aspheres, and surface 15A in `FujifilmGFX100RF35mmf4.data.ts` stores the full patent odd/even polynomial exactly. Earlier revisions used an even-order least-squares refit over h = 0..13.0 mm with a maximum sag residual of 0.04 µm and RMS residual of 0.01 µm against the patent polynomial. The patent-original coefficients above remain the analytical reference.

## Conditional Expressions

The following values were independently recomputed from the transcribed prescription. The patent's Table 22 values for Example 5 are reproduced for comparison.

| Expression | Formula | Recomputed | Patent Table 22 | Note |
|---|---|---:|---:|---|
| (1) | $TL/(f 	an ω)$ | 1.593 | 1.569 | mismatch if Table 14 $2ω=83.0°$ is used |
| (2) | $Bf/f$ | 0.155 | 0.155 | matches |
| (3) | $FNo \times TL/f$ | 5.807 | 5.808 | matches |
| (4) | $dG1/(f 	an ω)$ | 0.629 | 0.628 | matches within rounding |
| (5) | $dF/(f 	an ω)$ | 0.195 | 0.194 | matches within rounding |
| (6) | $fG1f/fG1$ | 4.013 | 4.013 | matches |
| (7) | $fG1f/f$ | 2.560 | 2.560 | matches |
| (8) | $fG2/f$ | -1.252 | -1.252 | matches |
| (9) | $fG1/f$ | 0.638 | 0.638 | matches |
| (10) | $(1 - βG1^2) βG2^2$ | 2.457 | 2.457 | matches |
| (11) | $NG1rpa$ | 1.71433 | 1.71433 | matches |
| (12) | $θG1rpa + 0.0025νG1rpa$ | 0.6851 | 0.6851 | matches |
| (13) | $fG2p/fG2$ | -1.740 | -1.740 | matches |
| (14) | $NG2p$ | 1.92119 | 1.92119 | matches |
| (15) | $θG2p + 0.0025νG2p$ | 0.6801 | 0.6802 | matches |
| (17) | $TL/f$ | 1.409 | 1.409 | matches |

The only unresolved numerical inconsistency is expression (1). Using Table 14's $2ω = 83.0°$ gives 1.593, not 1.569. Back-solving expression (1) from the patent value gives $ω = 41.935°$, or $2ω = 83.869°$. This appears to be a minor inconsistency between Table 14 and Table 22, not a prescription transcription error.

## Verification Summary

The prescription was rebuilt as a 19-surface paraxial model using reduced-angle ABCD matrices. The trace used the patent's surface radii, spacings, refractive indices, and infinity-focus back focus exactly.

| Quantity | Computed | Patent | Difference |
|---|---:|---:|---:|
| Effective focal length | 34.845753 mm | 34.8463 mm | -0.000547 mm |
| Back focal distance | 5.395900 mm | 5.3962 mm | -0.000300 mm |
| Total track | 49.1149 mm | derived | -- |
| TL/f | 1.409495 | 1.409 | rounding only |
| Petzval sum | 0.00190979 mm^-1 | not listed | -- |
| Petzval radius | 523.6 mm | not listed | -- |

The effective focal length agrees to about half a micron, which is tighter than the precision of the printed table. This confirms that the radius signs, refractive indices, cemented interfaces, stop placement, and back focal distance were transcribed consistently.

## Design Heritage and Context

The GFX100RF lens is a fixed-lens medium-format wide angle rather than an interchangeable GF-mount lens. That distinction is central to the optical design. A GF-mount interchangeable lens must clear the 26.7 mm flange-back distance, but this fixed-lens system can place the rear optics much closer to the sensor. Fujifilm explicitly connects the compact body depth to the single-unit lens design, the use of a leaf shutter, and the absence of a focal-plane shutter.

The leaf shutter is not merely a feature added after the optical design. It changes the available packaging volume. By locating the shutter at or near the stop and eliminating a focal-plane shutter behind the lens, Fujifilm gives the rear group enough freedom to use the short-back-focus positive-negative layout shown in Example 5.

## Sources

1. US 2025/0362482 A1, "Imaging Lens and Imaging Apparatus," Daiki Komatsu / Fujifilm Corporation, published November 27, 2025.
2. Fujifilm official specifications page for GFX100RF: https://www.fujifilm-x.com/en-us/products/cameras/gfx100rf/specifications/
3. Fujifilm launch release, "Introducing FUJIFILM GFX100RF," March 20, 2025: https://www.fujifilm.com/us/en/news/digital-cameras/introducing-fujifilm-gfx100rf
4. Fujifilm development story, "Newly Developed 35mm F4 Lens," March 24, 2025: https://www.fujifilm-x.com/en-us/stories/development-story-vol-03-newly-developed-35mm-f4-lens/
5. OHARA optical glass catalog and glass-type pages for S-TIL1, S-TIL26, S-LAH97, S-TIM2, and S-BSL7.
6. HOYA optical glass catalog materials for TAFD32, PCD40, M-TAF101, M-FD80-class, and FDS24.
7. CDGM / NHG cross-reference tables for H-ZLaF64, H-PK65, D-LaF050, and D-ZF10-class equivalents.
