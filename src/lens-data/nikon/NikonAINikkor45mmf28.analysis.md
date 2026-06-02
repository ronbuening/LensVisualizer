# Nikon AI Nikkor 45mm f/2.8P — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2003-005030 A (特開2003-5030)  
**Application Number:** JP 2001-188463 (特願2001-188463)  
**Filed:** 21 June 2001  
**Published:** 8 January 2003  
**Inventor:** Kōichi Ōshita (大下 孝一)  
**Applicant:** Nikon Corporation (株式会社ニコン)  
**Title:** Tessar-type Lens (テッサー型レンズ)  
**Embodiment analyzed:** Example 6 (第6実施例, Table 6, ¶0023)

The transcribed prescription is Example 6 of JP 2003-005030 A. The production lens is the AI Nikkor 45mm f/2.8P, the compact Nikon F-mount pancake lens introduced with the FM3A in July 2001. The match is strong at the patent-family level and strongest within the negative-positive rear-doublet examples, but Nikon does not publish the exact numerical example used for production. The document therefore treats Example 6 as a patent embodiment corresponding to the production design family rather than as a manufacturer-certified production prescription.

1. **Assignee, inventor, and timing.** The patent is assigned to Nikon and lists Kōichi Ōshita as inventor. Nikon's own *NIKKOR — The Thousand and One Nights* article for the AI Nikkor 45mm f/2.8P is by Kōichi Ōshita and states that he was responsible for the optical design. Nikon's FM3A chronicle states that the lens went on sale with the FM3A in July 2001; the patent was filed in June 2001.
2. **Architecture.** The patent describes a three-group, four-element Tessar-type lens with the aperture stop between the first and second groups (claim 1, ¶0005; ¶0016). Nikon's production specification gives four elements in three groups, and Ōshita describes the final lens as a Tessar with a positive front element, a central negative element, and a rear negative-positive cemented doublet.
3. **Rear-group ordering.** The patent explicitly separates the examples into two rear-doublet orderings: Examples 1–3 use a positive-negative cemented pair, while Examples 4–6 use a negative-positive rear doublet (¶0016). Ōshita describes the production lens as using a concave-convex, negative-positive doublet at the rear, placing the production design in the Example 4–6 sub-family.
4. **Stop placement.** The unusual feature of both the patent and the production retrospective is the aperture stop immediately behind the first convex element. In the patent, the stop is the row-3 plane between surface 2 and the second lens group; in Nikon's retrospective, Ōshita calls this one of the lens's distinctive features.
5. **High-index positive element.** Claim 2 requires the positive element of the rear doublet to satisfy $n_p > 1.86$ (condition 7). Example 6 uses $n_d = 1.88300$ for that element. Ōshita states that a newly developed high-refractive-index glass was used for the second convex element to support the doublet radius, field flattening, and spherical-aberration/coma correction.
6. **Production specification agreement.** Nikon lists 45 mm focal length, f/2.8 maximum aperture, four elements in three groups, 50° angle of view on 35 mm format, 0.45 m minimum focus, seven circular diaphragm blades, 52 mm attachment size, 63 × 17 mm external dimensions, and approximately 120 g weight. Example 6 is normalized to $f = 100.000$ and has $F_{NO} = 2.88$, $2\omega = 50.3°$, and $Y = 47.0$, which scale directly to the 45 mm class and to 135-format coverage.

The prior draft stated Nikon's production angle of view as 51.3°. That value is the geometric full-frame diagonal angle for a rectilinear 45 mm thin-lens approximation, not Nikon's published specification. The corrected analysis uses Nikon's stated 50° production angle and treats the patent's $2\omega = 50.3°$ as concordant with it.

All radii, thicknesses, and indices in the patent are normalized to $f = 100.000$ (¶0017). The accompanying data file scales the prescription uniformly by $\times 0.45$ to the 45 mm production focal-length class. The patent explicitly permits proportional enlargement or reduction of the tabulated values while retaining equivalent optical performance (¶0017).

## Optical Architecture

The design is a compact, all-spherical Tessar: positive singlet, stop, negative singlet, and negative-positive cemented rear doublet. The group power sequence is positive — negative — positive. The aperture stop is not in the more common near-central Tessar position; it is immediately behind the first element, making the system deliberately asymmetric.

| Group | Element(s) | Standalone focal length at $f=100$ | Scaled focal length | Role |
|---|---:|---:|---:|---|
| G1 | E1 positive singlet | +62.32 | +28.04 mm | high-index front collector |
| — | aperture stop | — | — | placed between G1 and G2 |
| G2 | E2 negative singlet | -40.16 | -18.07 mm | central diverging waist / field control |
| G3 | E3 + E4 cemented doublet | +62.10 | +27.95 mm | rear converging and Petzval-correction group |

A paraxial trace of the unscaled Example 6 prescription gives $f = 99.99985$ and back focus $B_f = 84.28259$, matching the patent's $f = 100.000$ and $B_f = 84.283$ to rounding precision. At the production scale these become $f = 44.99993$ mm and $B_f = 37.92717$ mm. The first-to-last-vertex optical stack is 38.8936 normalized units, or 17.5021 mm at the $\times 0.45$ scale. That internal vertex span is not identical to Nikon's external 17 mm barrel length, but the agreement is consistent with the pancake packaging.

The design is all-spherical. No aspherical coefficient table is present in the patent, and the production lens was not marketed with an aspherical or ED designation.

## Element-by-Element Analysis

### E1 — Positive Meniscus, nearly plano-convex, convex to object

$n_d = 1.81600,\ \nu_d = 46.63$. Glass: S-LAH59 / 816466 class, catalog-equivalent. $f = +62.32$ normalized, or $+28.04$ mm scaled.

The first element supplies the initial converging power while leaving the aperture immediately behind it. The front radius $r_1 = +49.1880$ gives $r_1/f = 0.49188$, safely inside condition (1), $0.48 < r_1/f < 0.56$. The rear surface is very weakly curved ($r = +1384.5494$), so the element behaves almost as a plano-convex collector.

The patent explains condition (1) as a spherical-aberration and field-flatness compromise (¶0007). The relatively high index required by condition (5), $1.8 < n_1$, lets the element carry this positive power with a weaker front curvature than a lower-index glass would require. The center thickness, $d_1/f = 0.086913$, also satisfies condition (3), which the patent links to distortion balance when the stop lies between the first and second groups (¶0010).

### E2 — Biconcave Negative Singlet

$n_d = 1.68893,\ \nu_d = 31.07$. Glass: S-TIM28 / 689311 class, catalog-equivalent. $f = -40.16$ normalized, or $-18.07$ mm scaled.

The central element is a dense-flint biconcave singlet. Its rear surface $r = +46.0211$ is the patent's $r_4$ surface for condition (2), giving $r_4/f = 0.46021$ against the required $0.45 < r_4/f < 0.57$. The patent ties this surface directly to the off-axis astigmatism problem in Tessar-type systems (¶0009).

The element's index satisfies condition (6), $1.67 < n_2 < 1.74$. Example 6 uses the same flint glass here and in E3, which simplifies the glass palette and keeps the central and rear negative components chromatically related.

### E3 + E4 — Cemented Negative-Positive Rear Doublet

The rear group is a cemented doublet with the negative element first and the positive element last. Its standalone group focal length is $+62.10$ in the patent normalization, or $+27.95$ mm after scaling.

**E3 — biconcave negative front member.** $n_d = 1.68893,\ \nu_d = 31.07$. Glass: S-TIM28 / 689311 class, catalog-equivalent. $f = -75.73$ normalized, or $-34.08$ mm scaled. Its object-side radius is weakly concave ($r = -234.8791$), while the cemented surface has $r = +67.3987$. Condition (8) evaluates this element's thin-lens power term:

$$
(n_n - 1)\left({1 \over r_a} - {1 \over r_b}\right)f = -1.31548,
$$

inside the required range $-1.4 < \cdots < -1$. The patent states that too weak a value degrades field flattening, while too strong a value harms spherical-aberration correction (¶0015).

**E4 — biconvex high-index positive rear member.** $n_d = 1.88300,\ \nu_d = 40.77$. Glass: S-LAH58 / 883408 class, catalog-equivalent. $f = +35.60$ normalized, or $+16.02$ mm scaled. This is the high-index element governed by condition (7), $1.86 < n_p$.

The doublet resolves the main Tessar compromise. A shorter cemented-surface radius can flatten the field but worsens spherical aberration and coma, especially with the stop placed so far forward. The very high index of E4 allows useful Petzval correction and rear-group convergence without making the cemented radius as severe as it would be with an ordinary crown. The cemented interface changes from $n=1.68893$ to $n=1.88300$, so it has positive optical power.

## Glass Identification and Selection

The patent gives $n_d$ and $\nu_d$ only; it does not name glass types. The catalog names below are therefore public-catalog equivalents, not asserted Nikon melt names. OHARA matches are used because the six-digit $n_d/\nu_d$ codes match the patent values closely and are available in current manufacturer data sheets. Nikon/Hikari equivalents may have been used in production, but the patent itself does not establish that.

| Patent code | Patent $n_d$ | Patent $\nu_d$ | Used in | Catalog-equivalent match | Catalog $n_d,\nu_d$ | $\Delta\theta_{g,F}$ | Role |
|---|---:|---:|---|---|---|---:|---|
| 816/466 | 1.81600 | 46.63 | E1 | OHARA S-LAH59 | 1.81600, 46.62 | -0.0092 | high-index front positive glass |
| 689/311 | 1.68893 | 31.07 | E2, E3 | OHARA S-TIM28 | 1.68893, 31.07 | +0.0092 | dense flint negative glass |
| 883/408 | 1.88300 | 40.77 | E4 | OHARA S-LAH58 | 1.88300, 40.76 | -0.0088 | very high-index rear positive glass |

This is a conventional achromatizing palette, not an apochromatic one. The two positive glasses are high-index lanthanum flints by Abbe number, even though the OHARA family prefix is LAH. The negative partner is a dense flint. The catalog partial-dispersion deviations are small, and neither the patent nor Nikon's production literature makes an ED, fluorite, super-ED, or apochromatic claim.

## Focus Mechanism

The patent publishes only infinity-focus prescriptions. It contains no variable-spacing table, so the focus mechanism is taken from the production lens and modeled as unit focus in the data file. Nikon describes the lens as a manual-focus F-mount CPU-integrated P-type lens with rotating range-ring focus and a 0.45 m minimum object distance.

For a unit-focusing model, the whole optical cell translates forward and only the rear image-space gap changes. A finite-conjugate paraxial solve using Nikon's 0.45 m minimum focus distance gives an additional extension of 5.733 mm beyond the infinity position. The rear gap therefore changes from 37.927 mm at infinity to 43.660 mm at close focus. The computed close-focus transverse magnification is $|m| = 0.1274$, or about 1:7.85. These close-focus extension and magnification values are computed model values, not patent-tabulated values.

| Focus state | Rear gap from last vertex to image plane | Computed note |
|---|---:|---|
| Infinity | 37.927 mm | scaled patent back focus |
| 0.45 m | 43.660 mm | unit-focus extension +5.733 mm |

## Conditional Expressions

The patent states eight conditions across claims 1–4 and explains them in ¶0007–¶0015. Example 6 satisfies all eight. The computed values below were recalculated directly from Table 6.

| # | Patent condition | Example 6 computed value | Patent Table 7 value | Status |
|---|---|---:|---:|---|
| (1) | $0.48 < r_1/f < 0.56$ | 0.49188 | 0.492 | satisfied |
| (2) | $0.45 < r_4/f < 0.57$ | 0.46021 | 0.460 | satisfied |
| (3) | $0.072 < d_1/f < 0.09$ | 0.08691 | 0.087 | satisfied |
| (4) | $0.045 < d_4/f < 0.078$ | 0.07605 | 0.076 | satisfied |
| (5) | $1.8 < n_1$ | 1.81600 | 1.816 | satisfied |
| (6) | $1.67 < n_2 < 1.74$ | 1.68893 | 1.689 | satisfied |
| (7) | $1.86 < n_p$ | 1.88300 | 1.883 | satisfied |
| (8) | $-1.4 < (n_n-1)[(1/r_a)-(1/r_b)]f < -1$ | -1.31548 | -1.315 | satisfied |

The definitions follow the patent's claims. $r_1$ is the front radius of the first positive element. $r_4$ is the image-side radius of the second, negative element; in the patent prescription table it appears as row 5 because row 3 is the aperture stop. $d_1$ is the first element's center thickness. $d_4$ is the air gap between the second singlet and the rear doublet. $n_p$ and $n_n$ are the positive and negative elements of the rear cemented doublet.

## Design Heritage and Context

Ōshita's retrospective places the lens in a deliberate Nikon pancake-lens lineage. Work began in early January 2000, the 45 mm focal length was chosen partly in homage to the GN Auto Nikkor 45mm f/2.8, and the four-element, three-group Tessar structure was selected as the compact baseline. The FM3A context matters: Nikon was building a manual-focus, mechanically disciplined 35 mm SLR at a time when autofocus film cameras and digital SLRs were already dominant.

The optical design choice was conservative in layout but specific in execution. Ōshita describes two trial structures: one favoring field flatness at some cost to wide-open contrast and another favoring wide-open sharpness by reducing spherical aberration and coma. The chosen design was the latter. The patent's conditions reflect that choice: the front-element curvature, first-element thickness, second-element rear radius, rear air gap, and high-index rear positive element all regulate the same field-flatness versus spherical-aberration/coma compromise.

## Verification Summary

The Example 6 prescription was transcribed from Table 6 (¶0023) and traced independently with a paraxial $y$–$n u$ ray trace. The sign convention is standard: positive radius centers lie to the image side. No radius sign reversal or index-line substitution was needed.

| Quantity | Computed from Table 6 | Patent value | Residual |
|---|---:|---:|---:|
| Effective focal length | 99.99985 | 100.000 | -0.00015 |
| Back focal distance | 84.28259 | 84.283 | -0.00041 |
| First-to-last vertex span | 38.89360 | — | — |
| Production-scale EFL | 44.99993 mm | 45 mm class | -0.00007 mm |
| Production-scale BFD | 37.92717 mm | — | — |
| Patent field | $2\omega = 50.3°$ | $2\omega = 50.3°$ | 0 |

The Petzval sum was recomputed surface by surface as

$$
\sum_i {\phi_i \over n_i n'_i},\quad \phi_i={n'_i-n_i \over r_i}.
$$

For Example 6 it is $+1.91030\times10^{-3}$ in the $f=100$ normalization, corresponding to a Petzval radius of $523.48$ normalized units, or about $5.235f$. This supports the classification as a well-flattened Tessar rather than a flat-field double-Gauss substitute.

The accompanying data file uses the patent's optical prescription scaled to 45 mm, Nikon's marketed f/2.8 as `nominalFno`, and the patent's $F_{NO}=2.88$ as `apertureDesign`. The stop semi-diameter in the data file, 6.7564 mm at production scale, is the paraxial physical stop radius that reproduces the patent's $F_{NO}=2.88$ through the front element. Semi-diameters are not patent-published; they were estimated from ray envelopes and constrained so the rear doublet retains at least about 0.5 mm of edge thickness.

## Sources and References

- JP 2003-005030 A (特開2003-5030), "Tessar-type Lens," Nikon Corporation; inventor Kōichi Ōshita; filed 21 June 2001; published 8 January 2003. Primary source for the claims, Table 6 prescription, Table 7 condition values, and Example 6 aberration figures.
- Nikon, *NIKKOR — The Thousand and One Nights* No. 78, "A Standard Pancake Lens for the Nikon FM3A: AI Nikkor 45mm f/2.8P," by Kōichi Ōshita. Source for production design narrative, Tessar architecture, stop placement, high-index rear positive glass rationale, 17 mm depth, 45 cm close focus, CPU contacts, and GN Auto Nikkor 45mm lineage. https://imaging.nikon.com/imaging/information/story/0078/
- Nikon, "Nikon FM3A | Camera Chronicle." Source for the production specifications: July 2001 release with FM3A, Nikon F-mount CPU-integrated P-type manual-focus construction, 45 mm focal length, f/2.8 maximum aperture, four elements in three groups, 50° 35 mm angle of view, rotating range-ring focus, 0.45 m shortest object distance, seven circular diaphragm blades, 52 mm attachment size, 63 × 17 mm dimensions, and approximately 120 g weight. https://imaging.nikon.com/imaging/information/chronicle/history-fm3a/
- OHARA S-LAH59, S-TIM28, and S-LAH58 manufacturer data sheets. Sources for the catalog-equivalent glass identifications, six-digit codes, line indices, and relative partial-dispersion deviations. https://www.ohara-gmbh.com/
