## Patent Reference and Design Identification

**Patent:** JP 2022-182997 A  
**Application Number:** JP 2022-048824  
**Filed:** 24 March 2022  
**Published:** 8 December 2022  
**Priority:** 28 May 2021  
**Inventors:** Yasuto Suzuki; Yoshiaki Kurioka; Shunichiro Yoshinaga  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Image capturing optical system, image capturing device, and camera system  
**Embodiment analyzed:** Numerical Example 1, Tables 1A–1G and Figure 1.

The prescription is a selected research correlation for the Leica Summicron-SL 50 f/2 ASPH., not a manufacturer-confirmed production prescription. Its native dimensions and d-line material coordinates are retained. Leica’s February 2023 technical sheet identifies the marketed L-Mount, full-frame lens as a 50 mm f/2 design with nine glass lenses in eight assemblies and six aspherical surfaces. The following features support the selection:

1. The patent has nine glass lenses, one cemented L3–L4 assembly, and six aspherical surfaces on L6–L8. These match the construction and asphere locations in the manufacturer’s section.
2. The thick first positive meniscus, long space behind L2, and curved rear face of the cemented pair resemble the manufacturer’s section. The illustration is corroborating geometry, not a calibrated production drawing.
3. The source near state specifies 349 mm from object to first surface and approximately 101 mm from first surface to image, consistent with a 0.45 m object-to-image distance. Leica specifies a 0.45 m minimum focus distance.

The construction counts alone do not uniquely identify Example 1 within the patent. The source is assigned to Panasonic, and the Leica sheet does not disclose this patent or independently label the focusing element. The marketed focal length, aperture and mechanical length must remain distinct from the patent’s optical quantities. The source tabulates 48.2535 mm and f/1.86017 at infinity; the modeled stop is calibrated to that aperture rather than enlarged or reduced to the f/2 product label. [1, pp.1, 7–9, 27–29, 39; 2, pp.1–2]

## Optical Architecture

This is an asymmetric, internally focusing prime with a positive–negative–positive functional-group sequence. G1 contains L1–L6 and the fixed stop; G2 is the single negative L7; G3 contains positive L8 and negative L9. The eight air-separated assemblies should not be confused with these three functional groups. Within G1, the pre-stop subgroup G1A is negative and the post-stop subgroup G1B is positive. [1, ¶0025–0044]

The implemented infinity prescription gives an effective focal length of 48.253741 mm and a first-vertex-to-image track of 101.0000 mm. Functional-group focal lengths are G1 +34.755170 mm, G2 -67.785796 mm and G3 +318.803317 mm. These are standalone group powers, not additive in-situ system contributions. The combined L3–adhesive–L4 assembly has focal length -62.964770 mm in air.

A source-listed 0.01 mm adhesive layer between L3 and L4 is explicitly retained. It adds one material interval and one modeling entry, but not a tenth glass lens. The camera-side cover glass is separately represented by rearPlates: 2.1 mm at nd = 1.51680, νd = 64.2, preceded by 12.9 mm air and followed by the printed 1.0 mm image gap. Its physical and dispersive effects remain in the optical trace. [1, ¶0029; Table 1A]

## Element-by-Element Analysis

All element focal lengths below are independently calculated for the element alone in air, using the retained source radii, thickness and refractive index. The aspheric polynomial does not alter first-order power at the axis.

### L1 — Positive Meniscus

nd = 1.85996, νd = 30.5. Glass: Unmatched (patent nd=1.85996, νd=30.5; supplier unconfirmed). f = +72.171779 mm.

The positive front meniscus is convex toward the object. Its relatively high index and low Abbe number distinguish it from the following low-dispersion negative meniscus. The patent identifies the front element as positive and discusses its relation to astigmatic balance; no isolated aberration magnitude is inferred from its power sign. [1, ¶0034, ¶0168]

### L2 — Negative Meniscus

nd = 1.49700, νd = 81.6. Glass: FCD1 / N-PK52A class (coordinate candidate; supplier unconfirmed). f = -64.363612 mm.

The negative meniscus is also convex toward the object. It supplies negative power within the overall negative pre-stop subgroup. Its low-dispersion coordinates admit several catalog-class candidates, while the production supplier remains unknown. The modeled front/rear apertures differ to represent the source silhouette’s peripheral chamfer; they are inferred clear radii. [1, ¶0027, ¶0034; Table 1A]

### L3 — Biconcave Negative

nd = 1.65794, νd = 31.1. Glass: Unmatched (patent nd=1.65794, νd=31.1; supplier unconfirmed). f = -19.938207 mm.

The biconcave negative member is bonded to L4 through the explicitly tabulated adhesive interval. This relatively dispersive negative component and the less-dispersive positive L4 offer a chromatic balancing combination, but the pair’s residual color is not established by Abbe numbers alone. The full cemented assembly is traced with the actual bond-medium index rather than a collapsed direct interface. [1, ¶0029, ¶0034]

### L4 — Biconvex Positive

nd = 1.59269, νd = 65.3. Glass: Unmatched (patent nd=1.59269, νd=65.3; supplier unconfirmed). f = +32.037905 mm.

The positive biconvex member closes the cemented assembly immediately ahead of the stop. Its rear surface has weaker absolute curvature than its front surface (|R| = 56.6176 versus 27.1566 mm); the curved rear face is a useful feature of the selected source geometry. Its standalone positive power must be distinguished from the cemented assembly’s net negative power. L3, adhesive and L4 share the same inferred clear radius. [1, ¶0029, ¶0034]

### L5 — Biconvex Positive

nd = 1.59282, νd = 68.6. Glass: FCD515 / FCD505 class (coordinate candidate; supplier unconfirmed). f = +41.473622 mm.

This fixed positive biconvex element lies immediately after the stop. Together with L6 it forms positive G1B. The source gives low-dispersion coordinates compatible with the FCD515/FCD505 class, but does not name a glass supplier. The patent associates the multi-element post-stop subgroup with spherical-aberration correction without assigning a separately measured contribution to this element. [1, ¶0036, ¶0201–0204]

### L6 — Biconvex Positive (2× Asph)

nd = 1.51570, νd = 55.8. Glass: Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed). f = +68.132750 mm.

Both faces are aspherical. This fixed positive biconvex element closes G1 and precedes the variable d13 gap. The source’s condition (8) constrains the index contrast between L6 and the following focusing element; the small contrast is a source-design relationship, not evidence that the two use one catalog material. [1, ¶0036–0038, ¶0205–0211]

### L7 — Neg. Meniscus (2× Asph)

nd = 1.51607, νd = 56.3. Glass: Unmatched (patent nd=1.51607, νd=56.3; supplier unconfirmed). f = -67.785796 mm.

The negative meniscus has two aspherical faces and is the sole moving optical element. It travels imageward for near focus. A nonzero negative conic constant on its rear face changes the base profile, so spherical radius-to-aperture heuristics alone are inappropriate; the actual conic-plus-polynomial slope and domain are checked. [1, ¶0038, ¶0041–0044; Table 1B]

### L8 — Biconvex Positive (2× Asph)

nd = 1.51570, νd = 55.8. Glass: Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed). f = +60.621063 mm.

This fixed biconvex positive element has two aspherical faces. It and L9 constitute weak positive G3. The patent discusses the thickness balance and spacing within this group as contributors to image-surface behavior. The unusually weak front vertex curvature does not describe the full rim profile because the polynomial terms are substantial at the modeled aperture. [1, ¶0039–0040, ¶0183–0190]

### L9 — Negative Meniscus

nd = 1.54157, νd = 51.7. Glass: Unmatched (patent nd=1.54157, νd=51.7; supplier unconfirmed). f = -59.424811 mm.

The final negative meniscus is concave toward the object and convex toward the image. The patent’s conditions (4) and (5) explicitly relate its power and shape to image-surface correction. This source rationale is distinguished from a calculated aberration decomposition; Petzval power alone does not determine the astigmatic best-focus surfaces. [1, ¶0040, ¶0169–0182]

### L3–L4 adhesive interval

nd = 1.56732, νd = 42.8. Glass: Unmatched adhesive; resin chemistry and supplier unconfirmed. The source gives a 0.01000 mm axial interval between equal-radius surfaces 6 and 7. Its small but nonzero refractive and propagation effects are retained. Coincidental overlap with bulk-flint catalog coordinates does not identify the adhesive or justify replacing it with a catalog glass. [1, ¶0029; Table 1A]

## Glass Identification and Selection

The patent publishes nd/νd coordinates, not supplier names or measured C/F/g-line indices. Fresh OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalog checks support the following restrained dispositions:

| Location | Native nd / νd | Model disposition |
|---|---:|---|
| L1 | 1.85996 / 30.5 | Unmatched; high-index, relatively dispersive coordinate |
| L2 | 1.49700 / 81.6 | FCD1 / N-PK52A class; S-FPL51 also a nearby candidate |
| L3 | 1.65794 / 31.1 | Unmatched |
| Adhesive | 1.56732 / 42.8 | Unmatched adhesive; bulk-glass overlap is insufficient |
| L4 | 1.59269 / 65.3 | Unmatched |
| L5 | 1.59282 / 68.6 | FCD515 / FCD505 class |
| L6, L8 | 1.51570 / 55.8 | Unmatched |
| L7 | 1.51607 / 56.3 | Unmatched |
| L9 | 1.54157 / 51.7 | Unmatched |
| Camera plate | 1.51680 / 64.2 | N-BK7 / BSC7 class |

Catalog-class labels are compatible modeling hypotheses, not production identifications. OHARA S- and L-prefixes are not interchangeable. S-FPL51’s nominal Abbe entry and its detailed dispersion differ slightly; native patent values are therefore retained. HOYA FCD505 and FCD515 share published dispersion coefficients but have different thermal properties, so the names are not physically interchangeable. No lens-specific spectral line measurements are supplied, and no explicit nC/nF/ng/dPgF values are asserted as properties of the actual lens. Runtime catalog resolution of the class labels remains a separate integration check. The unnamed materials use only the source index/Abbe approximation. No apochromatic-performance claim follows from these inputs. [3–8]

The executed surface-by-surface d-line Petzval sum is 0.002071987870 mm⁻¹. Each refracting interface contributes φ/(n·n′), including the actual adhesive boundaries. This is a paraxial curvature sum; it is not a calculation of the complete sagittal or tangential field surfaces.

## Focus Mechanism

Focus status is PUBLISHED. G1, the stop and G3 are fixed, while negative G2/L7 moves toward the image. Both source endpoint prescriptions are retained; linear gaps at intermediate slider positions are modeling interpolation, not a published mechanical law. [1, ¶0041–0044; Table 1C]

| Quantity | Infinity | Near source state |
|---|---:|---:|
| Computed EFL (mm) | 48.253741 | 43.613210 |
| First surface to published image (mm) | 101.0000 | 100.9999 |
| Exact image-cone f-number, 1/(2 sin U) | 1.862290 | 1.912270 |
| Paraxial image after cover rear (mm) | 1.008296 | 1.042092 |
| Offset from published image gap (mm) | 0.008296 | 0.042092 |
| Published d13 (mm) | 1.8000 | 6.6163 |
| Published d15 (mm) | 12.8959 | 8.0795 |
| Published d0, object to first surface (mm) | ∞ | 349.0000 |

The d13 increase is 4.8163 mm. The d15 reduction differs by 0.0001 mm, a retained source-rounding inconsistency rather than a fabricated motion of G3. The calculated near magnification at the paraxial image is -0.130916; Leica’s published 1:7.4 value is a product specification rather than an imposed fitting target. The same exact-ray-calibrated 14.525024382 mm iris radius is retained throughout focus. At infinity, the launch radius EFL/(2 × 1.86017) = 12.970250216 mm is traced through the front group to the stop. The tabulated exact image-cone quantity is a distinct diagnostic; it differs slightly from the printed f-numbers 1.86017/1.91036. The near value uses the finite object conjugate and should not be confused with near EFL divided by the unchanged entrance-pupil diameter.

The fixed printed 1.000 mm gap after the cover plate is retained at both states. The small residual paraxial defocus is disclosed; the model does not move the image plane or change the optical prescription to obtain a preferred simulated result.

## Aspherical Surfaces

The source equation is z = (h²/R)/(1 + √(1 − (1 + K)(h/R)²)) + Σ Aₙhⁿ. Native κ is the model’s K, so K = 0 is a spherical base. Lengths remain in millimetres and Aₙ has units mm^(1−n); no scaling or conic conversion is applied. Only even A4–A10 are published. Model A12/A14 are zero, and no odd or diffractive term is invented. [1, p.27, equation 1; p.28, Table 1B]

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 12A | 0.00000e+00 | -4.36516e-06 | 4.27940e-09 | -1.31680e-11 | -1.14476e-15 |
| 13A | 0.00000e+00 | 8.55335e-06 | -3.38027e-09 | 0.00000e+00 | 0.00000e+00 |
| 14A | 0.00000e+00 | -3.20814e-05 | 3.04040e-08 | -9.83934e-12 | 0.00000e+00 |
| 15A | -1.42129e+00 | -2.12498e-08 | 8.60734e-09 | 2.95476e-11 | 0.00000e+00 |
| 16A | 0.00000e+00 | 3.35290e-05 | -1.49631e-08 | -2.39445e-12 | 0.00000e+00 |
| 17A | 0.00000e+00 | 1.74131e-05 | -1.58208e-08 | 3.47625e-11 | -1.23868e-13 |

L6’s front polynomial reduces positive sag at its modeled rim, while the rear polynomial reduces the magnitude of negative sag. L7’s front polynomial reduces positive sag; its rear surface combines a negative conic constant with higher-order polynomial terms. L8’s front polynomial adds strongly to the shallow positive base curvature, while its rear polynomial reduces the magnitude of negative sag. These are geometric descriptions, not isolated aberration corrections. No manufacturing process is inferred solely from the coefficients or refractive indices.

| Surface | Inferred model SD (mm) | Polynomial departure from conic (mm) |
|---|---:|---:|
| 12A | 16.5 | -0.311245 |
| 13A | 16.5 | +0.565764 |
| 14A | 15.0 | -1.303017 |
| 15A | 15.0 | +0.172694 |
| 16A | 16.0 | +1.936033 |
| 17A | 16.0 | +0.888865 |

The quoted departures apply only at the stated inferred model rims. They are not departures at published manufacturing apertures. On 15A the polynomial departure from its native conic differs substantially from departure from a same-radius sphere; the table deliberately uses the conic reference.

## Conditional Expressions

The following values are reconstructed from the actual candidate using the patent prose definitions. The image height Y is the published infinity value, and BF is the physical final-powered-surface-to-image distance including the cover plate. Table 6 is preserved even where it disagrees with those definitions. [1, ¶0146–0247; Table 6, p.38]

| No. | Prose-defined expression | Computed | Table 6 | Broad bound |
|---|---|---:|---:|---|
| 1 | L_STO/LL | 0.376601 | 0.38 | 0.1 < value < 0.6 |
| 2 | LL/Y | 3.978861 | 3.98 | 2 < value < 10 |
| 3 | TG3A/TL3E | 10.417667 | 10.42 | 0.1 < value < 20 |
| 4 | abs(FL_L3E/FL) | 1.231507 | 1.23 | value < 7 |
| 5 | (RrL3E+RfL3E)/(RrL3E-RfL3E) | 2.159516 | 2.16 | -1 < value < 4.5 |
| 6 | TG3P/TG3M | 5.221500 | 10.42 | 0.25 < value < 20 |
| 7 | TSTO/Y | 0.168891 | 0.17 | 0.05 < value < 0.5 |
| 8 | abs(NdL1BE-NdL2F) | 0.000370 | 0.00037 | value < 0.2 |
| 9 | BF/Y | 0.748962 | 0.75 | 0.3 < value < 3 |
| 10 | TFOC_L3E/FL | 0.722491 | 0.72 | 0.3 < value < 3 |
| 11 | TSTO_L3E/FL | 1.098130 | 2.92 | 0.5 < value < 6 |
| 12 | FL_G1B/FL_G1 | 0.774791 | 0.77 | 0.2 < value < 5 |
| 13 | TG3/FL | 0.413792 | 0.41 | 0.1 < value < 2 |

All broad prose bounds are satisfied. Condition (6) prints 10.42, duplicating the air-gap ratio in (3), whereas its defined positive-to-negative glass-thickness ratio is 5.2215. Condition (11) prints 2.92, which does not reproduce from its defined stop-to-last-lens distance. Its cause remains unidentified. The condition (12) table heading reverses the ratio used in the prose and reproduced by its numerical value. These contradictions do not authorize changing the prescription; no corrected source value is substituted.

## Aperture and Model Limitations

The stop location is published, but its physical diameter and lens clear apertures are not. The model iris radius is calibrated by an exact axial ray at the printed infinity f-number; all other clear radii are inferred from optical clearance with figure-based shape checks. This calibration is not independent confirmation of a manufacturing diaphragm diameter.

Independent exact vector tracing checks 2,025 rays across the two published endpoints and seven intermediate focus samples, including the printed on-axis beam and the default 0.6-half-field bundles. Source-field-edge chief rays and half/quarter-aperture edge bundles are also checked. A separate nine-chief diagnostic reaches the 36 × 24 mm format corner at all sampled states. The source infinity image semi-height is 21.3629 mm, below the 21.633308 mm format corner; that additional chief-only check does not establish full-aperture corner throughput. Off-axis clipping at physical element edges remains possible and is not removed by enlarging the lens rims. First clipping inside the cemented assembly is excluded in these samples. A 15.5 mm inferred L2 rear rim retains the required beam while meeting the default 90% shared-gap intrusion limit; no gap-sag override is used.

The independent solver uses analytic sphere intersections and safeguarded asphere intersections. All sampled pupil targets are resolved, and every mandatory ray reaches the image or is first vignetted at an allowed external glass rim. No on-axis or field-edge chief ray is clipped, and no sampled ray first clips inside the cemented assembly. Across the nine focus samples, 38 optional full-field/wide-open continuations fail only after an already-established external rim clip; those exterior continuations are retained as diagnostics, not accepted transmitted rays. The finite sample does not establish continuous full-field throughput, production-render trim, repository-validator acceptance, complete vignetting, MTF, or real-lens performance. Those broader properties remain unverified.

## Sources

1. Japan Patent Office, [JP2022182997A](https://patents.google.com/patent/JP2022182997A/en), published 8 December 2022. Original Japanese PDF pp.1, 7–9, 16–24, 27–29, 38–39; Numerical Example 1, Tables 1A–1G and 6, Figure 1.
2. Leica Camera AG, [Summicron-SL 50 f/2 ASPH. Technical Data](https://leica-camera.com/sites/default/files/pm-90762-EN_Datenblatt%20Summicron-SL%2050%20ASPH.pdf), February 2023, pp.1–2.
3. OHARA, [authoritative catalog file](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), retrieved 10 October 2026. Exact edition, archived original and candidate residuals are recorded in the accompanying evidence.
4. HOYA, [authoritative catalog file](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx), retrieved 10 October 2026. Exact edition, archived original and candidate residuals are recorded in the accompanying evidence.
5. SCHOTT, [authoritative catalog file](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true), retrieved 10 October 2026. Exact edition, archived original and candidate residuals are recorded in the accompanying evidence.
6. HIKARI, [authoritative catalog file](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), retrieved 10 October 2026. Exact edition, archived original and candidate residuals are recorded in the accompanying evidence.
7. CDGM, [authoritative catalog file](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb), retrieved 10 October 2026. Exact edition, archived original and candidate residuals are recorded in the accompanying evidence.
8. SUMITA, [authoritative catalog file](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php), retrieved 10 October 2026. Exact edition, archived original and candidate residuals are recorded in the accompanying evidence.
