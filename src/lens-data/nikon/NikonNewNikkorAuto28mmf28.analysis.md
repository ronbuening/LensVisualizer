## Patent Reference and Design Identification

**Patent:** US 3,635,546\
**Application Number:** 6,821\
**Priority:** February 8, 1969 (Japan 44/9006)\
**Filed:** January 20, 1970\
**Granted:** January 18, 1972\
**Inventor:** Ikuo Mori\
**Assignee:** Nippon Kogaku K.K.\
**Title:** Retrofocus-Type Lens System\
**Embodiment analyzed:** Example 2 (Fig. 3; prescription on PDF p. 6)

The prescription modeled here is the second embodiment of US 3,635,546, an all-spherical seven-element retrofocus design published at nominal focal length $f=100$, f/2.8, and 76° full field. The model uses the body table on PDF page 6 rather than the conflicting repeated claim. The patent's correction certificate changes the final glass index and restores the `d7+8` notation in claim 2, but does not resolve the claim's remaining radius discrepancies; those claim values are therefore not blended into the selected body prescription. [P, PDF pp. 6–8]

The production identification is a correlation rather than a manufacturer-confirmed patent match. The evidence converges in four respects:

1. Nikon identifies its first 28mm f/2.8 Nikkor as a 1974 release and states that the 1977 AI version retained the predecessor's optical design. [N1]
2. Nikon manufacturer literature for the 28mm f/2.8 gives seven elements in seven groups, matching the selected patent embodiment. [N3]
3. The patent embodiment is f/2.8 and, after the explicit 0.28 uniform scale, the verified design EFL is 27.997895 mm rather than being refitted to exactly 28.000 mm.
4. The patent is assigned to Nippon Kogaku, while Nikon's corporate history establishes Nippon Kogaku K.K. as the historical company name; the patent front page itself prints “Nippon Kogaki K.K.”, which is treated as a bibliographic spelling error rather than an optical correction. [P, PDF p. 1; N2]

The patent's 76° full field is not silently equated with the 74° picture angle in Nikon product literature. Likewise, the patent does not name the Nikon F mount or the production 28mm lens. The structured production metadata therefore describes the correlated product while the prescription remains identified explicitly as US 3,635,546 Example 2.

## Optical Architecture

The implemented model is a seven-element, seven-group retrofocus prime with no cemented interfaces and no aspherical surfaces. Its standalone element-power sequence is positive, negative, negative, positive, negative, positive, positive. The first three elements form the patent's deliberately strong diverging front section; the remaining four elements form the rear power sequence that completes image formation. [P, PDF p. 5]

The patent explains the front architecture directly. Reducing the first-lens-to-stop distance makes the system more compact, but would normally compromise back focal distance. Mori therefore specifies a strongly negative compound focal length for L1–L3, then uses a positive front meniscus to counter the negative distortion associated with that strong divergence. The patent also requires two negative menisci rather than one because concentrating the required divergence into a single negative meniscus would force stronger curvature and aggravate spherical aberration and coma. [P, PDF p. 5]

The final parsed prescription has EFL 27.997895 mm and Gaussian back focal distance 38.859817 mm from the last refracting vertex. Their ratio is 1.387955, so the verified model satisfies the quantitative retrofocus criterion $\mathrm{BFD}/\mathrm{EFL}>1$. The model's printed/source image-plane spacing is kept separately at 38.8696 mm; it is not replaced by the calculated Gaussian plane.

All dimensional patent values are uniformly scaled by $s=0.28$, from the patent's nominal $f=100$ normalization to a nominal 28mm representation. Radii, axial spacings, the modeled stop coordinate, semi-diameters, and image-plane distance receive the same scale. Refractive indices and Abbe numbers are unchanged. Because the embodiment is entirely spherical, no conic or aspheric-coefficient scaling is applicable.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

**nd = 1.64831, νd = 33.8. Glass: 648338 — flint coordinate class (supplier unresolved). f = +159.971080 mm.**

L1 is the outer positive meniscus specified by the patent. Its positive standalone power is weak compared with the following two negative menisci, so L1 does not overturn the net divergence of the front section. The patent assigns the front positive meniscus a specific architectural purpose: it moderates the negative distortion that accompanies the strongly refracting diverging group. [P, PDF p. 5]

The glass identity is intentionally unresolved. The stored coordinate is the patent value; no modern catalog name is promoted to historical supplier identity.

### L2 — Negative Meniscus, convex to object

**nd = 1.62041, νd = 60.3. Glass: 620603 — barium-crown class (S-BSM16 coordinate equivalent; supplier unresolved). f = −34.380519 mm.**

L2 is the stronger of the two negative front menisci by standalone focal length magnitude. Together with L3 it supplies most of the front section's divergence. The patent treats the two-negative-meniscus construction as a distributed solution: using at least two negative menisci avoids forcing the required negative power into one excessively curved member. [P, PDF p. 5]

Its coordinate is close to modern OHARA S-BSM16 at the d line, but the data file records only a class/equivalent annotation because the patent does not identify a supplier. [O2]

### L3 — Negative Meniscus, convex to object

**nd = 1.6583, νd = 57.3. Glass: 658573 — lanthanum-crown class (K-LaK11 coordinate equivalent; supplier unresolved). f = −48.387547 mm.**

L3 completes the three-element diverging front section. The calculated standalone power is negative but weaker than L2, so the two negative menisci share the front-group burden rather than duplicating equal powers. The patent's first condition applies to the compound L1–L3 group, not to any one element in isolation. [P, PDF p. 5]

The printed coordinate coincides with SUMITA K-LaK11 at the retained precision, but this is a modern catalog-coordinate equivalence only. No historical supplier or melt is inferred. [S1]

### L4 — Biconvex Positive

**nd = 1.6695, νd = 51.5. Glass: 670515 — high-index crown (H-LaK67 coordinate-compatible dispersion proxy; supplier unresolved). f = +21.423273 mm.**

L4 is a thick single biconvex element, not a cemented pair. This point matters because the patent explicitly removes the otherwise expected R8 interface and publishes the combined `d7+8` thickness for the singlet. In the implemented model L4 is the strongest positive standalone element, beginning the rear converging sequence after the long front-to-rear air separation. [P, Fig. 3 and PDF p. 6]

H-LaK67 is used as a coordinate-compatible spectral proxy (Δnd = +0.00050, Δνd = +0.20). It does not establish supplier or historical melt identity.

### L5 — Biconcave Negative

**nd = 1.74, νd = 28.2. Glass: 740282 — dense-flint class (exact catalog coordinate; supplier unresolved). f = −19.138236 mm.**

L5 is the only negative element in the four-element rear sequence and has the largest standalone power magnitude of any individual element in the model. It therefore creates a strong positive-negative power alternation with L4 before the final two positive elements. That statement is a power-distribution observation from the verified prescription; the patent does not assign L5 a unique named aberration function.

The supplier remains unresolved, but the coordinate itself is not unmatched: SCHOTT SF3 is published at nd = 1.74000 and νd = 28.20, exactly matching the patent pair at its retained precision. This supports the supplier-neutral 740282 dense-flint class annotation, not a claim that the historical lens used SCHOTT glass. [SCH1]

### L6 — Positive Meniscus, concave to object

**nd = 1.62041, νd = 60.3. Glass: 620603 — barium-crown class (S-BSM16 coordinate equivalent; supplier unresolved). f = +37.445320 mm.**

L6 is the positive meniscus whose concave face is directed toward the object, matching the patent's descriptive sequence. It reuses the same patent glass coordinate as L2 while carrying positive standalone power in the rear section. The repeated coordinate is preserved directly rather than being assigned different catalog identities by position. [P, PDF pp. 5–6; O2]

### L7 — Biconvex Positive, nearly planar front

**nd = 1.6968, νd = 55.6. Glass: 697556 — lanthanum-crown class (K-LaK14 coordinate equivalent; supplier unresolved). f = +37.194982 mm.**

L7 is the final positive element. Its first surface is extremely weakly curved in the patent table, while its rear surface supplies most of the element's positive power. The correction certificate confirms the final glass index as 1.6968. [P, PDF pp. 6 and 8]

The printed coordinate matches SUMITA K-LaK14 at the retained nd/νd precision. As with L3, the match is used only as a catalog-coordinate equivalent; it is not evidence that the production lens used SUMITA glass. [S1]

## Glass Identification and Selection

The patent supplies six distinct nd/νd coordinates for the seven elements, with the L2 coordinate reused by L6. The implemented file preserves those coordinates and uses deliberately conservative glass annotations.

| Elements | nd / νd | Authored identification | Evidence status |
|---|---:|---|---|
| L1 | 1.64831 / 33.8 | 648338 flint-class coordinate proxy | Supplier unresolved |
| L2, L6 | 1.62041 / 60.3 | 620603 barium-crown class; S-BSM16 coordinate equivalent | Modern catalog comparison only [O2] |
| L3 | 1.6583 / 57.3 | 658573 lanthanum-crown class; K-LaK11 coordinate equivalent | Printed-pair equivalence only [S1] |
| L4 | 1.6695 / 51.5 | 670515 crown coordinate; H-LaK67 spectral proxy | Supplier unresolved |
| L5 | 1.74 / 28.2 | 740282 dense-flint class; exact SF3 coordinate comparator | Supplier unresolved; exact coordinate match [SCH1] |
| L7 | 1.6968 / 55.6 | 697556 lanthanum-crown class; K-LaK14 coordinate equivalent | Printed-pair equivalence only [S1] |

The catalog matches are not substituted into the patent prescription. In particular, no vendor Sellmeier data are authored onto elements whose historical identity is unknown. The file also contains no patent-derived `nC`, `nF`, `ng`, or `dPgF` values. Consequently, the analysis makes no APO, anomalous-partial-dispersion, or secondary-spectrum-performance claim from nd/νd alone.

## Focus Mechanism

The optical model has `NO_INTERNAL_RECONSTRUCTION`. US 3,635,546 Example 2 supplies one base prescription and no finite-focus spacing table, moving-group law, or close-focus magnification. The data file therefore has no variable optical gaps and makes no claim that any internal group moves during focusing.

Nikon manufacturer literature gives 0.3 m as the production lens's minimum focusing distance. [N3] That value is retained as product metadata because `closeFocusM` is required by the application, but it does not define a modeled close-focus optical state. No 0.3 m conjugate, focus travel, or internal spacing is inferred from it. The later 1981 eight-element AI-S close-range-correction design is a different optical construction and is not imported into this seven-element model. [N1]

## Model Representation and Source Discrepancies

The aperture stop is visible in patent Fig. 3 but is not dimensioned. The model places it 1.302 mm behind model surface 8 (source R9), corresponding to 4.65 patent units, or about 22.5% of the source d9 gap. This is a drawing-based inference. The stop semi-diameter, 6.857990 mm, is then calibrated so that the paraxial entrance pupil diameter is 9.999248 mm and the modeled f-number is 2.8. Agreement with f/2.8 is therefore calibration-dependent and is not independent evidence of the physical diaphragm diameter.

The patent gives no surface semi-diameters. The initial ray-envelope apertures were replaced by the figure-inferred optical rims documented below. Earlier throughput counts from the larger apertures do not apply to this refined model; its extreme-field illumination remains a modeling limitation.

The scaled printed back-focal-length spacing is 38.8696 mm, while the calculated Gaussian BFD from the final vertex is 38.859817 mm, a residual of −0.009783 mm. The strict half-last-digit tolerance of the printed BFL scales to 0.0014 mm, so the calculation is not described as an exact reproduction. The data file keeps the printed image-plane spacing instead of silently shifting the image plane to the Gaussian result.

A similar source-summary discrepancy remains in the front diverging group. The patent's scaled value is −22.5568 mm, while the calculated L1–L3 compound focal length is −22.560782 mm, a residual of −0.003982 mm, again outside the scaled 0.0014 mm half-last-digit summary tolerance. The rounded source prescription is preserved rather than adjusted to force either summary value.

No sensor cover glass, filter, inactive dummy plane, or rear plate is removed from this example, so no air-equivalent rear-spacing conversion is used.

## Conditional Expressions

The patent makes the retrofocus architecture quantitative through four principal conditions and one preferred radius ratio. The final scaled model preserves the dimensionless results because all dimensional prescription values use one uniform scale. [P, PDF p. 5]

| Patent condition | Final-model evaluation | Result |
|---|---:|---|
| $0.6f < |f_\Delta| < 0.9f$ | $|f_\Delta|/f = 0.805742207$ | Pass |
| $0.45f < \sum d_1\ldots d_6 < 0.65f$ | $\sum d/f = 0.5689$ | Pass |
| $d_7+d_8 > d_6$ | 11.3540 mm > 7.4956 mm | Pass |
| $R_7 < |R_9|$ | 22.9852 mm < 30.5900 mm | Pass |
| Preferred $1.8 < R_2/R_3 < 2.8$ | 2.513934947 | Pass |

The patent further states that the embodiments have back focal lengths greater than 1.3 times their focal length. The final model gives $\mathrm{BFD}/\mathrm{EFL}=1.387954949$, satisfying that summary condition. This ratio uses the calculated Gaussian BFD and calculated EFL on the same scaled model, not the marketed 28mm focal length.

The patent explains conditions I and II as the balance between strong front divergence, required back focus, distortion, and compactness. Condition III addresses residual astigmatism in the miniaturized system, and condition IV constrains the sine condition to avoid excessive coma. Those explanations are patent statements; the present model does not assign a separate measured aberration contribution to an individual element from these inequalities. [P, PDF p. 5]

## Verification Summary

Independent first-order calculations from the final parsed data give EFL 27.997895 mm, Gaussian BFD 38.859817 mm, and a first-to-last refracting-vertex track of 39.2728 mm. A scalar height/slope trace and a separately assembled reduced-angle ABCD matrix agree to numerical precision in the portable verifier. The surface-by-surface Petzval sum, evaluated as $\phi/(n n')$ at all fourteen refracting surfaces, is +0.005235219 mm⁻¹.

The seven standalone element focal lengths reported above are recomputed from the final surface data and independently agree with the thick-lensmaker expression. They are standalone powers in air; they are not claims about each element's in-situ contribution to a particular aberration.

The model is therefore internally consistent at the verified paraxial and portable meridional-geometry levels, while several boundaries remain explicit: stop size is calibrated, semi-diameters are modeled, extreme-field throughput is only finitely sampled, historical glass supplier identities are unresolved, and the exact Example 2-to-production relationship is provisional. The integration review below adds LensVisualizer runtime validation and catalog-resolution checks.

## Sources and References

- **[P]** Ikuo Mori, “Retrofocus-Type Lens System,” US Patent 3,635,546, granted January 18, 1972. Example 2: Fig. 3 on PDF p. 2; aberration plots Fig. 4(A–D) on PDF p. 4; design conditions on PDF p. 5; prescription on PDF p. 6; claim 2 on PDF p. 7; certificate of correction on PDF p. 8. The unmodified source is packaged as `US3635546.pdf`.
- **[N1]** Nikon Corporation, *NIKKOR — The Thousand and One Nights, No.57*, “Nikkor 28mm f/2.8.” https://imaging.nikon.com/imaging/information/story/0057/
- **[N2]** Nikon Corporation, *Corporate History*. https://www.nikon.com/company/corporate/history/
- **[N3]** Nikon / Nippon Kogaku K.K., *Nikkor Lenses — Nikkor 28mm f/2.8* manufacturer literature, archival scan hosted by Pacific Rim Camera. https://www.pacificrimcamera.com/rl/00594/00594.pdf
- **[O2]** OHARA, *S-BSM optical-glass family*. https://oharacorp.com/glass-type/s-bsm/
- **[S1]** SUMITA Optical Glass, *Glass Data Book ver. 14.02.00*, including K-LaK11 and K-LaK14 data. https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf
- **[SCH1]** SCHOTT, *Optical Glass Datasheet SF3*, code 740282.464, nd = 1.74000, νd = 28.20. https://media.schott.com/api/public/content/a6c78b366e6a4c2580b6a4becfc3e4b7?v=ad9a2614


## Integration Review — 2026-09-13 UTC

US3635546.pdf p. 2, Fig. 3 was inspected at 600 dpi (crop 0.33,0.60,0.63,0.765; page-axis 0.687). The axial span gives 29.91 μm/pixel. Manual optical-rim readings override label-contaminated automated rear-element measurements.

| Surfaces | Previous SDs (mm) | Refined SDs (mm) |
|---|---|---|
| 1 / 2 | 17.8 / 17.3 | 14.6 / 14.6 |
| 3 / 4 | 15.5 / 11.9 | 12.7 / 9.9 |
| 5 / 6 | 11.7 / 10.4 | 10.1 / 8.5 |
| 7 / 8 | 10.3 / 8.7 | 7.5 / 7.5 |
| 9 / 10 | 7.5 / 8.3 | 7.2 / 6.5 |
| 11 / 12 | 8.5 / 8.5 | 7.4 / 7.4 |
| 13 / 14 | 9.5 / 9.5 | 8.2 / 8.2 |

“Supplier unknown” accidentally activated the runtime explicit-unmatched marker on five compatible elements. “Supplier unresolved” preserves uncertainty while permitting catalog proxies. The 648338 coordinate also has existing compatible coefficients; H-LaK67 adds the remaining crown proxy. Coverage rises from 0/7 to 7/7. The display name uses Nikkor Auto; Nikon's “new” describes its 1974 introduction rather than an additional optical model.

The optical prescriptions, stop calibration, and source focus/zoom states are preserved. Surface validation, image-circle screening, and the shared render-diagnostics corpus were run during integration. Catalog proxies preserve patent nd/νd and do not identify the historical supplier, melt, or anomalous partial dispersion.

New coefficient source: [CDGM Optical Glass Data Sheet, June 2022](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf), H-LaK67 printed p. 140, QF3 p. 145, H-BaF2 p. 171. Polynomial rows are retained in their published form; they are not converted to fabricated Sellmeier coefficients.
