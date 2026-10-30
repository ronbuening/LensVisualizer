# CANON EF 15mm f/2.8 Fisheye — Patent Analysis

## Patent Reference and Design Identification

**Patent:** JP S63-17421 A (JPS6317421A; 特開昭63-17421)  
**Application Number:** JP S61-161673  
**Filed:** 9 July 1986  
**Published:** 25 January 1988  
**Inventor:** Takashi Matsushita (松下 敬)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** *Fisheye Lens* (魚眼レンズ)  
**Classification:** G02B 13/06  
**Example details:** shown in Fig. 2[^patent]

Numerical Example 3 is the selected patent embodiment associated with the Canon EF 15mm f/2.8 Fisheye; the correlation does not identify a confirmed factory prescription. The identification rests on convergent evidence rather than focal length alone:

1. The patent example and Canon production lens both use eight elements in seven groups, with one cemented pair.[^canon-museum]
2. Example 3 states $F=15.3\ \mathrm{mm}$, $F\mathrm{No}=1{:}2.8$, and $2\omega=180^\circ$. Canon specifies a marketed 15 mm focal length, f/2.8 maximum aperture, and 180° diagonal coverage on the 135 format.[^canon-product]
3. The production block diagram matches patent Fig. 2 in the ordering and shapes of the eight elements. The most discriminating numerical feature is the symmetric final biconvex element, $R_{15}=+43.88$ mm and $R_{16}=-43.88$ mm. Examples 1 and 2 end with asymmetric final elements.
4. Example 3 satisfies every claimed inequality. Example 1 falls below the lower bound of condition (1), and Example 2 prints $\nu_2=58.2$, outside condition (5).
5. The patent was filed in July 1986 and the EF lens was marketed in April 1987, a plausible production-development sequence.[^canon-museum]
6. Canon specifies overall linear extension focusing, a 0.20 m minimum focusing distance, and 0.14× maximum magnification.[^canon-product] Applying unit focus to Example 3 requires 2.13274 mm extension and gives a paraxial magnification magnitude of 0.13952×.

The prescription is transcribed **without scaling**. Every patent radius, center thickness, and air gap is retained exactly. The derived back focus and inferred semi-diameters use the same native-millimetre coordinate scale. The patent's $F=15.3$ mm and the marketed 15 mm focal length are treated as ordinary product-name rounding; no $15/15.3$ factor is applied. The earlier FD and New FD 15 mm fisheyes are excluded because Canon lists them as ten-element, nine-group designs rather than the eight-element, seven-group formula analyzed here.[^canon-fd][^canon-new-fd]

The Example 3 table on patent p. 171 prints the label `R5` twice. The second occurrence follows $D_5$ and precedes $D_6$; sequential surface order and Fig. 2 establish that it is $R_6=+22.35$ mm. The data file corrects that source-label typo without changing the printed numerical value.

The patent does not state a projection equation. The data file uses an **equisolid-angle reference** as an explicit modeling inference, not as a quoted Canon claim. A 135-frame diagonal has radius 21.6333 mm; for a 90° half-field, the equisolid relation $r=2f\sin(\theta/2)$ gives $f=15.2971$ mm, essentially the patent's 15.3 mm. An equidistant reference would require 13.7722 mm and is materially less consistent.

## Optical Architecture

The design is an all-spherical retrofocus diagonal fisheye with eight elements in seven groups: six air-spaced singlets and one cemented doublet. It consists of a strong negative front converter followed by a positive relay and rear correction section:

- **L1-L3:** three air-spaced negative menisci, all convex toward the object. Their combined in-air EFL is −10.2935 mm.
- **L4:** a strong positive biconvex element immediately before the aperture stop.
- **Stop:** fixed in the 7.37 mm interval between L4 and L5, 3.84 mm behind L4 and 3.53 mm ahead of L5.
- **L5:** a weak positive meniscus with a much stronger image-side surface.
- **L6/L7:** a cemented negative-positive pair with nearly zero net power and a large index step at the cemented interface.
- **L8:** a symmetric positive biconvex final element.

The L1-L4 pre-stop block remains net negative at −30.7557 mm. The L5-L8 post-stop block is positive at +28.0808 mm. The complete system has:

| Quantity | Independently verified value |
|---|---:|
| Effective focal length | 15.286506817 mm |
| System power | 0.0654171690 mm⁻¹ |
| Back focal distance | 39.673478819 mm |
| BFD/EFL | 2.595326669 |
| First-to-last surface stack | 62.630000000 mm |
| First surface to image plane | 102.303478819 mm |

Because BFD exceeds EFL, the design is retrofocus in the strict optical sense. The patent states an objective of back focus at least 2.3 times the focal length; Example 3 independently calculates 2.5953.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex toward object

**$N=1.60311$, $\nu=60.7$. Glass: Unmatched; conditional class comparison: S-BSM14 conditional catalog class comparison (OHARA); actual patent vendor unspecified. Standalone $f=-33.6155$ mm.**

L1 is the large front meniscus. Its modestly curved object-side surface and much stronger image-side surface give negative power while providing the frontal acceptance needed by the fisheye geometry. The patent treats L1-L3 collectively as a progressive angle-reduction section rather than assigning the complete retrofocus conversion to one surface.

### L2 — Negative Meniscus, convex toward object

**$N=1.61700$, $\nu=62.8$. Glass: Unmatched; conditional class comparison: S-PHM51 conditional catalog class comparison (OHARA); actual patent vendor unspecified. Standalone $f=-59.7658$ mm.**

L2 is the weakest of the three standalone front negative elements. Its printed 1.61700/62.8 pair is preserved. The S-PHM51 comparison is conditional on an assumed d-line reference; it selects no runtime catalog curve.[^ohara-historical]

### L3 — Negative Meniscus, convex toward object

**$N=1.60311$, $\nu=60.7$. Glass: Unmatched; conditional class comparison: S-BSM14 conditional catalog class comparison (OHARA); actual patent vendor unspecified. Standalone $f=-45.7778$ mm.**

L3 completes the negative front converter. Its rear surface $R_6=+22.35$ mm and L4's front surface $R_7=+32.04$ mm are the radii constrained by condition (1), which the patent associates principally with spherical-aberration balance.

### L4 — Biconvex Positive

**$N=1.84666$, $\nu=23.9$. Glass: Unmatched; conditional class comparison: S-NPH53 conditional catalog class comparison (OHARA); actual patent vendor unspecified. Standalone $f=+32.8422$ mm.**

L4 begins the positive relay and supplies the first strong positive power after the negative front converter. The low source Abbe number places this coordinate in a high-dispersion class; it does not identify the historical chemistry. The stop follows after 3.84 mm of air.

### L5 — Positive Meniscus, concave toward object

**$N=1.51112$, $\nu=60.5$. Glass: Unmatched; conditional class comparison: NSL7 conditional catalog class comparison (OHARA); actual patent vendor unspecified. Standalone $f=+63.0670$ mm.**

Both radii are negative, but the image-side surface is much stronger: $R_{10}=-289.77$ mm and $R_{11}=-29.10$ mm. This directly matches the claim's requirement that L5 have stronger refracting action on the image side than on the object side.

### L6/L7 — Cemented Negative-Positive Doublet

**L6:** Unmatched; $N=1.84666$, $\nu=23.9$; S-NPH53 conditional catalog class comparison (OHARA), patent vendor unspecified; standalone $f=-26.4804$ mm.
**L7:** Unmatched; $N=1.48749$, $\nu=70.2$; S-FSL5 conditional catalog class comparison (OHARA), patent vendor unspecified; standalone $f=+29.0298$ mm.
**Cemented assembly:** $f=-4619.1881$ mm; $\Phi_{6,7}=-2.1648826\times10^{-4}\ \mathrm{mm^{-1}}$.

The separate L6 and L7 focal lengths are standalone in-air thick-lens values. They do not describe the components' in-situ behavior once cemented. The matrix of the complete cemented assembly is the relevant system quantity.

The interface index step is $N_6-N_7=0.35917$, while the net cemented power is almost zero. This is the architecture controlled by claim conditions (2)-(4): the interface radius governs lateral-color balance, the index step contributes to Petzval and field-curvature control, and the low net power prevents the doublet from materially altering the system focal length while it corrects residual aberrations.

### L8 — Symmetric Biconvex Positive

**$N=1.48749$, $\nu=70.2$. Glass: Unmatched; conditional class comparison: S-FSL5 conditional catalog class comparison (OHARA); actual patent vendor unspecified. Standalone $f=+45.8345$ mm.**

L8 is the final positive element. Its equal and opposite radii, $+43.88/-43.88$ mm, are the clearest numerical discriminator between Example 3 and the other examples and are visible in both patent Fig. 2 and Canon's production block diagram.

## Glass Identification and Selection

The original defines refractive index N and Abbe number ν without naming their spectral reference. The d/g aberration plots provide context for the retained approximate d-line convention, but do not define the prescription coordinates or supply individual line indices. All eight numeric pairs are preserved, and every element now has an explicit source-reference note and `Unmatched` status. No compatible catalog curve is selected while that reference remains unverified.

| Elements | Source N / ν | Conditional class comparison | Runtime disposition |
|---|---|---|---|
| L1, L3 | 1.60311 / 60.7 | S-BSM14 / 603607 | Unmatched; source reference unspecified |
| L2 | 1.61700 / 62.8 | S-PHM51 / 617628 | Unmatched; source reference unspecified |
| L4, L6 | 1.84666 / 23.9 | S-NPH53 / 847239 | Unmatched; source reference unspecified |
| L5 | 1.51112 / 60.5 | NSL7 / 511605 | Unmatched; source reference unspecified |
| L7, L8 | 1.48749 / 70.2 | S-FSL5 / 487702 | Unmatched; source reference unspecified |

These comparisons remain conditional on the d-line approximation, and do not establish historical supplier, melt or chemistry. The previous eight coordinate-compatible catalog curves are disabled (8/8 to 0/8). No element has published C/F/g indices, partial dispersion or APD coefficients, and no per-lens spectral override is added. Chromatic tracing uses the retained index/Abbe approximation. No fluorite, UD, asphere or apochromatic designation is inferred from those pairs.

## Focus Mechanism

Canon specifies an **overall linear extension system with AFD**.[^canon-product] The patent gives one fixed internal prescription and no variable internal gap table. The modeled focus mechanism is therefore unit focus: all seven groups remain fixed relative to one another while the complete optical unit moves toward the object.

Canon's focusing distance is measured from the focal plane to the subject.[^canon-focus] Solving the finite conjugate with the 200 mm focal-plane-to-subject distance gives the physically relevant root below:

| Quantity | Infinity | 0.20 m focus |
|---|---:|---:|
| Last surface to image plane | 39.673478819 mm | 41.806216499 mm |
| Unit extension | 0 | 2.132737681 mm |
| Object plane to first surface | — | 95.563783501 mm |
| Paraxial transverse magnification | 0 | −0.139517661 |
| Magnification magnitude | 0 | 0.139517661× |

The calculated 0.13952× is consistent with Canon's published 0.14×. This verifies the unit-focus model but does not reconstruct the mechanical cam or AFD gearing.

## Semi-Diameter and Aperture Reconstruction

The patent does not publish clear apertures or semi-diameters. The data file's values are inferred rather than transcribed. The reconstruction uses the patent and Canon section drawings, the paraxial entrance pupil, displayed-ray clearance, and the project geometry constraints.

The matrix from the first surface to the stop gives an entrance-pupil magnification of 0.425512101. For a fisheye, the project data model uses `projection.focalLengthMm` for aperture sizing. The unscaled patent value $F=15.3$ mm at f/2.8 therefore requires an entrance-pupil semi-diameter of 2.732142857 mm and a physical stop semi-diameter of 6.420834679 mm:

$$
N=\frac{15.3}{2(2.732142857)}=2.800000.
$$

Using the independently traced Gaussian EFL instead gives f/2.79753, a difference below the patent's stated precision. The data file uses the patent's 15.3 mm fisheye projection constant for the final stop size.

The source-supported shape review uses the original four-page scan, not a substituted family publication. Numerical Example 3 is on supplied page 3 (printed 171); Figure 2 and the matching aberration Figure 5 are on page 4 (printed 172). The PDF embeds 2866 × 3895 one-bit images at about 347 ppi. Native Figure 2 details span approximately 579 pixels over the 62.63 mm optical stack, or 9.245 px/mm. Optical edge picks carry approximately ±1–2 native pixels and about ±0.3 mm practical semi-height uncertainty; leaders, labels, axis and non-optical annotations were excluded.

The curved first face reaches approximately 30.0 mm from the axis, a substantial correction from the former 17.8 mm. Its inner rear optical cap remains 14.25 mm, with a resolved outer shoulder drawn to 30.0 mm using `rimExtensionSd`. The second meniscus similarly gains an outer rear shoulder to 13.6 mm while preserving its 11.4 mm clear cap. The third meniscus also has a resolved rear shoulder at S6: its existing 10.0 mm clear cap is retained and the drawn radius extends to 11.5 mm. The separate R6 leader descends inside the glass and meets the curved cap below the outer vertical stroke; it is not the shoulder itself. The small pre-stop positive element L4 is reduced from 9.5/8.5 mm to 6.8/6.8 mm, following the source's much smaller, nearly equal-height caps. R/d, stop authority, the unit-focus control and all other clear apertures remain unchanged.

The source first rear cap approaches a nearly vertical spherical endpoint. The model retains its smaller 14.25 mm cap: a 14.9 mm trial exceeds the existing 64.2° rim-slope guard, and no guard is relaxed. Consequently the reconstructed outer wall does not reproduce the drawing's full axial cap depth. This is a retained source/model difference, not a dimension supplied by the patent. The largest clear semi-diameter and outer drawn radius are now 30.0 mm; the first element's unequal optical caps are deliberately distinguished from its equal outer rim heights. No opaque land is placed at the bonded L6/L7 interface, and no inferred concave cut is authored.

Actual SVG outlines remain connected and finite with no hidden renderer cap trimming in the sampled focus states. The axial f/2.8 check passes. The bounding-sphere vector chief at 60° now converges and traces, where the former first-face aperture prevented a valid solve. The source-declared 180° field remains **unvalidated at the extremes**: a one-degree bounding-sphere sweep at the sampled focus layouts gives converged, traced chiefs through 66°; the solver returns fallback status from 67° onward. At 75–90° the chiefs fail to center or trace under the retained cap limits, and a dense independent vector-offset stop search does not supply a centered root there. The fallback rays' later rim intersections are not treated as proof that those rear apertures should be enlarged.

The full 180° declaration and equisolid reference are source/model metadata, not a runtime coverage certificate. The vector probes describe collimated fields at the sampled modeled focus layouts; they do not certify finite-object edge coverage or the full three-dimensional/skew-ray beam. The first inner-cap guard, approximate semi-diameters, unresolved spectral reference and reconstructed ordinary focus remain explicit limitations.

## Conditional Expressions

The claim gives five conditions. The normalized radius checks below use the patent's printed $\Phi=0.0654\ \mathrm{mm^{-1}}$; the cemented-power ratio is also shown using the independently calculated system power.

| Condition | Evaluation | Result |
|---|---:|---|
| (1) $1.4/\Phi<R_6<R_7<2.2/\Phi$ | $R_6\Phi=1.461690$; $R_7\Phi=2.095416$ | Satisfied |
| (2) $1.7/\Phi\le R_{13}\le2.2/\Phi$ | $R_{13}\Phi=1.922106$ | Satisfied |
| (3) $N_6-N_7>0.3$ | $1.84666-1.48749=0.35917$ | Satisfied |
| (4) $|\Phi_{6,7}|<0.04\Phi$ | $|\Phi_{6,7}|/\Phi=0.00330935$ calculated; 0.00336391 from the patent's rounded powers | Satisfied |
| (5) $\nu_1,\nu_2,\nu_3>60$ | 60.7, 62.8, 60.7 | Satisfied |

The patent prints $\Phi_{6,7}=-0.000220\ \mathrm{mm^{-1}}$ for Example 3. The prescription independently gives $-0.000216488\ \mathrm{mm^{-1}}$, which agrees at the printed precision.

## Independent Paraxial Verification

The calculation uses the reduced-angle vector $[y,n u]^T$ with

$$
S=\begin{bmatrix}1&0\\-(n'-n)/R&1\end{bmatrix},\qquad
T=\begin{bmatrix}1&d/n\\0&1\end{bmatrix}.
$$

The first-surface-to-last-surface matrix is

$$
M=\begin{bmatrix}
2.59532667 & 51.62896709\\
-0.06541717 & -0.91603916
\end{bmatrix}.
$$

### Group and block focal lengths

| Group or block | EFL (mm) |
|---|---:|
| L1 | −33.615501 |
| L2 | −59.765845 |
| L3 | −45.777815 |
| L4 | +32.842152 |
| L5 | +63.067030 |
| Cemented L6/L7 | −4619.188135 |
| L8 | +45.834475 |
| L1-L3 front converter | −10.293527 |
| L1-L4 pre-stop block | −30.755654 |
| L5-L8 post-stop block | +28.080826 |
| L4-L8 positive core | +22.152749 |

### Surface-by-surface Petzval sum

The Petzval sum is calculated by the surface expression

$$
P=\sum_i\frac{\phi_i}{n_i n_i'},\qquad \phi_i=\frac{n_i'-n_i}{R_i},
$$

not by thin-lens element approximations. Example 3 gives

$$
P=+0.00152146056\ \mathrm{mm^{-1}},
$$

corresponding to a reciprocal curvature magnitude of 657.263 mm under this sign convention. This is a paraxial Petzval result, not a finite-field measurement of the actual fisheye image surface.

## Aberration-Correction Strategy

The patent's explanation is system-level and supports the following conservative reading:

- The three front negative menisci progressively reduce the angle of the approximately 180° field bundles before they enter the positive relay.
- Condition (1) controls the L3/L4 transition, principally for spherical aberration.
- Condition (2) constrains the cemented interface for lateral chromatic correction.
- Condition (3) requires a large index difference across the cemented interface to control Petzval sum and field curvature.
- Condition (4) keeps the cemented pair nearly afocal so chromatic, spherical, and astigmatic correction can be adjusted without adding appreciable system power.
- Condition (5) requires $\nu>60$ in the three front negative elements, where extreme-field ray heights make lateral color especially consequential.

Patent Fig. 5 presents the Example 3 spherical-aberration, astigmatism, distortion, and lateral-color plots. The graph supplies qualitative confirmation but no numerical ordinate table, so no higher-precision finite-field values are reconstructed from it.

## Sources

[^patent]: Canon Inc., JP S63-17421 A, *魚眼レンズ*, filed 9 July 1986, published 25 January 1988, pp. 169-172. Numerical Example 3 is on p. 171; Fig. 2 and the Example 3 aberration plots are on p. 172.
[^canon-museum]: [Canon Camera Museum, “EF15mm f/2.8 Fisheye”](https://global.canon/en/c-museum/product/ef263.html).
[^canon-product]: [Canon Latin America, “EF 15mm f/2.8 Fisheye”](https://www.cla.canon.com/en/p/ef-15mm-f-2-8-fisheye).
[^canon-fd]: [Canon Camera Museum, “Fisheye FD15mm f/2.8 S.S.C.”](https://global.canon/en/c-museum/product/fd128.html).
[^canon-new-fd]: [Canon Camera Museum, “New Fisheye FD15mm f/2.8”](https://global.canon/en/c-museum/product/nfd196.html).
[^canon-focus]: [Canon Europe, “Close-up Lenses”](https://www.canon-europe.com/pro/infobank/close-up-lenses/).
[^ohara-current]: [OHARA, “Glass Type” — current polished-lens catalog table](https://www.ohara-inc.co.jp/en/product/01000/).
[^ohara-historical]: OHARA, *Optical Glass* historical catalog, including S-PHM51, NSL7, and S-BSM14 data; [archival PDF hosted by the University of Arizona](https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf).
[^ohara-pocket-2018]: OHARA, *Optical Glass Pocket Catalog*, October 2018, including S-NPH53 code 847239 and its $n_d/\nu_d$ data; [OHARA GmbH archival PDF](https://www.ohara-gmbh.com/fileadmin/user_upload/OHARA_Pocketcatalog__Version_Oct_2018_.pdf).
