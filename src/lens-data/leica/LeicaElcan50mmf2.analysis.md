# Leica ELCAN 50mm f/2 — Optical Analysis

**Patent:** US 3,649,104 — *Four Component Objective*
**Application Number:** 59,544
**Filed:** July 30, 1970 (German priority: August 1, 1969 — P 19 39 099.9)
**Granted:** March 14, 1972
**Inventors:** Garry Edwards, Walter Mandler, Erich Wagner (all of Midland, Ontario, Canada)
**Assignee:** Ernst Leitz GmbH, Wetzlar, Germany
**Embodiment analyzed:** Example 3 (also claim 3) — relative aperture f:2, field angle 45°
**Reference line:** e-line (546.1 nm) — the patent tabulates n_e and ν_e

## 1. Context and Production History

US 3,649,104 discloses a family of four-element, four-group photographic objectives across nineteen worked examples. The patent's central thesis is that four surfaces of unusually high refractive power — previously considered uncorrectable — can be combined to yield imaging quality rivaling the more complex double-Gauss ("Gauss-type") designs. The patent expresses this through normalized refractive power conditions on four critical surfaces:

- φ₁₁ (front of L1): 1.5 ≤ φ ≤ 2.0
- φ₂₁ (front of L2): 1.4 ≤ φ ≤ 2.4
- φ₂₂ (rear of L2): −2.0 ≤ φ ≤ −1.0
- φ₃₂ (rear of L3): −3.7 ≤ φ ≤ −2.5

**Example 3** is an f/2, 45° field design — the fastest wide-angle variant in the patent — and is the embodiment most consistent with the production 50mm f/2 ELCAN lens supplied with the Leica KE-7A military camera system. The patent's 19 examples span from f/2 to f/4.3 and field angles from 6° to 45°, demonstrating the versatility of the design form across focal lengths and speed classes. Only Examples 1, 2, and 3 share the f/2, 45° field specification matching the ELCAN production lens; the remaining examples address slower, narrower-field telephoto and long-focus applications. Among the three f/2 variants, Example 3 uses the lowest-index glasses — consistent with the patent's stated goal of employing "the most inexpensive glasses" — making it the most cost-effective candidate for military mass production. Approximately 460 KE-7A kits were produced in 1972 for the U.S. military, plus roughly 55 civilian surplus units. The lens features four air-spaced (non-cemented) elements, a construction chosen specifically for thermal shock resistance and tolerance of explosive concussion in combat environments.

## 2. Prescription — Example 3

The patent prescription is normalized to f = 100 (the patent never states the focal length; the paraxial trace of the table returns exactly 100.00 and the tabulated back focus s′ = 50.5074 confirms it). All radii, thicknesses, and spacings are scaled by ×0.5 for the 50 mm production lens. The refractive indices and Abbe numbers are **e-line** quantities: the patent's description states that "n_e and ν_e designate the refractive index and the Abbe number respectively of the lens glasses", and the column heads of every example table read n_e / ν_e. The data file keeps these native values in its `nd`/`vd` slots and declares `indexReference: "e"`, so the glass labels below are catalog curves that reproduce the pair at the C′/e/F′ lines rather than d-line lookalikes. The following table gives the patent-scale values as printed in the description (claim 3 repeats the same figures).

| Surface | Radius (mm) | Spacing (mm) | n_e | ν_e | Element |
|:-------:|------------:|-------------:|------:|------:|:-------:|
| r₁ | +37.8820 | 10.3776 | 1.6940 | 54.5 | L1 |
| r₂ | +190.3362 | 0.1922 | 1.0 | — | air |
| r₃ | +32.1397 | 5.9575 | 1.6734 | 46.8 | L2 |
| r₄ | +49.9450 | 3.2670 | 1.0 | — | air |
| r₅ | +200.4813 | 1.5374 | 1.7471 | 27.4 | L3 |
| r₆ | +23.4264 | 21.9082 | 1.0 | — | air |
| r₇ | +95.2488 | 11.5306 | 1.7546 | 34.7 | L4 |
| r₈ | −424.3870 | (BFD) | 1.0 | — | air |

**Back focal distance (s′):** 50.5074 mm (patent scale)

### 2.1 Sign Convention Note

The OCR text layer of the scanned patent is unreliable on r₅ and r₆, but the rendered page is not: r₁ through r₇ are printed without a minus sign and only r₈ carries one (r₈ = −424.3870). The transcription was nevertheless cross-checked numerically — with r₅ = +200.4813 and r₆ = +23.4264 the trace returns EFL = 100.002 and BFD = 50.510 against the tabulated s′ = 50.5074, and the four tabulated surface powers φ₁₁, φ₂₁, φ₂₂, φ₃₂ are reproduced (§2.2). Example 1 has the same sign structure and its trace returns s′ = 49.484 against the printed 49.4781.

An earlier version of this analysis reported a₃ = 5.9375 in the claims versus 5.9575 in the description. That was an OCR artifact: the rendered claim 3 prints a₃ = 5.9575, identical to the description.

### 2.2 Paraxial Verification

Computed via ABCD matrix transfer:

| Parameter | Patent Scale | Production (×0.5) |
|:----------|------------:|------------------:|
| EFL | 100.002 mm | 50.00 mm |
| BFD | 50.510 mm | 25.25 mm |
| FFL | 96.23 mm | 48.12 mm |
| Total track | 105.28 mm | 52.64 mm |
| Track / EFL | 1.053 | 1.053 |

The total track ratio of 1.053 is remarkably compact — barely longer than its own focal length — consistent with the patent's claim that these designs are "shorter by about 15 percent" compared to equivalent triplet objectives.

Normalized surface powers, verified computationally against patent-stated values:

| Surface | Patent φ | Computed φ | Δ |
|:-------:|:--------:|:----------:|:---:|
| φ₁₁ | +1.832 | +1.832 | 0.000 |
| φ₂₁ | +2.095 | +2.095 | 0.000 |
| φ₂₂ | −1.348 | −1.348 | 0.000 |
| φ₃₂ | −3.189 | −3.189 | 0.000 |

All four match to within rounding of the fourth decimal place. Because the indices are e-line values, the EFL and BFD above are e-line quantities; re-tracing with the catalog d-line indices gives 50.05 mm, about 0.1 % longer.

### 2.3 Semi-Diameters and Field

The patent publishes no clear apertures, and its only cross-section (Fig. 1) is the Example 1 section, drawn with all four rims at the same height (≈10.3 mm at the 50 mm scale — smaller than the 12.5 mm f/2 entrance-pupil radius), so it is schematic rather than dimensioned. The data-file semi-diameters are therefore estimates from an exact real-ray trace: each surface clears the f/2 axial bundle (the binding surfaces are r₂ at 12.09 mm and r₅ at 9.73 mm) and passes the full-field chief ray to the 21.6 mm 135-format corner; the corner bundle is mechanically vignetted at L4 in the usual way. Note that the patent's 45° field angle gives a 41.4 mm image circle at f = 50, so the 43.3 mm 135 diagonal requires a half-field of 23.4° — slightly beyond the design field, as was normal for a 50 mm lens of this era.

The L2–L3 spacing deserves comment. On axis a₄ = 1.63 mm (production scale), but the L2 rear surface (R = 24.97) has 2.09 mm of sag at h = 10, so the air gap closes to about 0.1 mm at the f/2 bundle radius and the two elements effectively touch at their rims. The model raises the renderer's gap-intrusion allowance (`gapSagFrac: 0.95`) to reproduce that clearance instead of trimming the rims short of the axial bundle.

## 3. Element-by-Element Analysis

### 3.1 Element L1 — Front Positive Meniscus

**Shape:** Positive meniscus, convex toward object
**Radii:** R₁ = +37.882, R₂ = +190.336 (production: +18.94, +95.17)
**Thickness:** 10.378 mm (production: 5.19 mm)
**Glass:** n_e = 1.6940, ν_e = 54.5
**Focal length:** +66.3 mm (production: +33.1 mm)

L1 is the strongest positive element, with the shortest positive focal length in the system. Its strongly convex front surface carries the highest positive surface power (φ₁₁ = +1.832). At production scale, L1 is 5.19 mm thick — a substantial piece of glass relative to its 18.94 mm front radius. The large glass path inside L1 introduces higher-order aberration contributions that participate in the balancing of the residual zone corrections that the patent identifies as its key innovation.

**Glass identification:** Read as e-line coordinates, 1.6940/54.5 is Schott **LaK9** exactly: the N-LAK9 catalog curve gives n_e = 1.69401 and ν_e = 54.48 (n_d = 1.6910, ν_d = 54.71). The earlier reading of this pair as a d-line value, which made LaK9 look 0.003 low in index, was the source of the "no catalog match" status; at the correct reference line the match is to the printed precision. LaK9 is a lanthanum crown, and the production lens is reported to have used it for the first element.

### 3.2 Element L2 — Second Positive Meniscus

**Shape:** Positive meniscus, convex toward object
**Radii:** R₃ = +32.140, R₄ = +49.945 (production: +16.07, +24.97)
**Thickness:** 5.958 mm (production: 2.98 mm)
**Glass:** n_e = 1.6734, ν_e = 46.8
**Focal length:** +118.0 mm (production: +59.0 mm)

L2 sits only 0.19 mm (patent scale) behind L1 — essentially in contact — forming a closely spaced front doublet. L2's front surface carries the system's second-highest power (φ₂₁ = +2.095), while its rear surface provides a significant negative counter-power (φ₂₂ = −1.348). The air space between L1 and L2 (a₂ = 0.192 mm, production: 0.10 mm) is extraordinarily thin — essentially a polished gap.

**Glass identification:** At the e-line, 1.6734/46.8 is Schott **BaF10**: the N-BAF10 curve gives n_e = 1.67341, ν_e = 46.83 (n_d = 1.67003, ν_d = 47.11). The element has been described as "Leitz glass" in production accounts; whether that was a Leitz melt of the BaF10 composition or a Schott supply cannot be settled from the patent, but the e-line coordinates are those of BaF10 to the printed precision, so the data file uses the catalog curve.

### 3.3 Element L3 — Diverging Negative Meniscus

**Shape:** Negative meniscus, both surfaces convex toward object
**Radii:** R₅ = +200.481, R₆ = +23.426 (production: +100.24, +11.71)
**Thickness:** 1.537 mm (production: 0.77 mm)
**Glass:** n_e = 1.7471, ν_e = 27.4
**Focal length:** −35.6 mm (production: −17.8 mm)

L3 is the sole diverging element and the thinnest element in the system. The front surface is nearly flat (R₅ = +200.5), while the rear surface is steeply curved (R₆ = +23.4), producing the most extreme power in the entire design: φ₃₂ = −3.189. The patent's central innovation claim rests heavily on this surface. The strongly powered rear surface of L3 generates large negative contributions to spherical aberration, astigmatism, and coma that cancel the correspondingly large positive contributions from the front surfaces of L1 and L2.

**Glass identification:** At the e-line, 1.7471/27.4 corresponds to the SF13 dense-flint type (Schott's legacy SF13: n_d = 1.74077, ν_d = 27.76). The repository catalog has no Schott SF13 curve; the Hoya equivalent **E-FD13** reproduces n_e = 1.74707, ν_e = 27.54 (Ohara S-TIH13 is equally close), so the data file uses E-FD13 as a coordinate-compatible dispersion proxy. The 0.14 difference in ν_e is at the limit of the patent's one-decimal printing; the historical supplier is unconfirmed. The former label `747274` was a d-line six-digit code built from e-line numbers and did not correspond to any real glass.

### 3.4 Element L4 — Rear Biconvex Positive

**Shape:** Biconvex positive
**Radii:** R₇ = +95.249, R₈ = −424.387 (production: +47.62, −212.19)
**Thickness:** 11.531 mm (production: 5.77 mm)
**Glass:** n_e = 1.7546, ν_e = 34.7
**Focal length:** +104.1 mm (production: +52.0 mm)

L4 is the field-correcting rear element. Both surfaces contribute positive power: the front surface (φ = +0.792) provides the bulk of L4's converging power, while the nearly flat rear surface (φ = +0.178) adds fine-tuning. L4's primary roles are: completing the converging power to achieve f/2, contributing to lateral color correction, and using its substantial thickness to fine-tune field curvature and astigmatism balance.

**Glass identification:** At the e-line, 1.7546/34.7 is Schott **LaFN7** exactly: the LAFN7 datasheet curve gives n_e = 1.75458, ν_e = 34.72 (n_d = 1.7495, ν_d = 34.95). The earlier "0.0051 outside compatibility" verdict compared the patent's e-line index with LaFN7's d-line index; at the same reference line the residual is 2 × 10⁻⁵. This agrees with the production description of L4 as a lanthanum flint. The same glass (1.7546/34.7) appears in Examples 1 and 2 of the patent.

## 4. Aspherical Surfaces

The patent specifies **no aspherical surfaces.** All eight refractive surfaces are spherical. This is consistent with the patent's design philosophy: correction is achieved entirely through power distribution across four high-power spherical surfaces, combined with judicious glass selection and spacing. The all-spherical construction was also advantageous for the military application, as spherical surfaces are easier to manufacture, more robust to re-polishing in the field, and simpler to test interferometrically.

## 5. Petzval Sum and Field Curvature

| Element | Petzval contribution (×f) |
|:-------:|:-------------------------:|
| L1 | +0.866 |
| L2 | +0.446 |
| L3 | −1.612 |
| L4 | +0.553 |
| **Total** | **+0.253** |

The system Petzval sum is positive and small (Petzval radius ≈ +197 mm at production scale), indicating a slightly undercorrected Petzval field. The dominant negative contribution comes from L3 (−1.612), whose high-index, strongly powered rear surface provides the bulk of the Petzval flattening. The characteristic corner softness at wide apertures — consistently reported by users — is more attributable to residual higher-order astigmatism and coma than to Petzval curvature. Stopping down to f/4 substantially improves corner performance.

## 6. Chromatic Correction Strategy

The four glasses span a wide Abbe number range: ν_e = 54.5, 46.8, 27.4, 34.7. The **front pair** (L1 + L2) introduces positive longitudinal chromatic aberration. The **negative element** L3, with its very low Abbe number (ν_e = 27.4, SF13-type dense flint), provides a strong overcorrecting chromatic contribution. The air-spaced construction means there are no cemented achromatic doublets — achromatization is achieved entirely through power-dispersion balance across separated elements. All four elements now resolve to catalog dispersion curves at the e-line (N-LAK9, N-BAF10, E-FD13, LAFN7), so the chromatic trace uses full Sellmeier/polynomial data rather than an Abbe-number approximation; the patent publishes no partial-dispersion data and none of the glasses is an anomalous-dispersion type.

## 7. Focusing Mechanism

- **Type:** Unit focusing (entire optical assembly translates as a rigid unit)
- **Close focus:** 0.762 m (30 inches / 2.5 feet), a production figure; the patent gives infinity data only
- **Only BFD changes** during focus — no internal floating groups

The data file's close-focus back focus (29.06 mm, a 3.80 mm extension over the infinity 25.255 mm) is calculated, not published: it is the unit-focus extension at which the object-to-image distance equals 0.762 m (magnification −0.076). Unit focusing is the simplest and most mechanically robust focus implementation, aligning with the lens's military design requirements. The production BFD of 25.25 mm is approximately 2.55 mm shorter than the Leica M flange-to-film distance of 27.80 mm, meaning the rear element (L4) protrudes roughly 2.5 mm into the camera body cavity.

## 8. Aperture Stop

The patent neither tabulates the stop nor draws an iris in either figure, so its position is an author's modelling choice. It cannot lie in the L2–L3 gap: a₄ is only 1.63 mm on axis (production scale) and, as §2.3 shows, the L2 rear surface sag already reaches the L3 vertex plane at h ≈ 8.9 mm, leaving no room for a diaphragm at the 9.8 mm radius of the f/2 bundle. The data file therefore places the stop in the L3–L4 air space (a₆ = 21.908 mm at patent scale, 10.954 mm at production), 6.0 mm behind r₆ — just clear of the L3 rear rim and the classic location for an Ernostar-type objective. Any position inside a₆ is equally consistent with the patent; this one is an assumption. The modelled iris radius at f/2 is 7.85 mm. The production lens has a **10-blade aperture diaphragm** with stops from f/2 to f/16.

## 9. Design Lineage and Significance

The ELCAN 50mm f/2 belongs to the "four-component objective" or "Ernostar derivative" family — characterized by four separated positive-positive-negative-positive singlets. Walter Mandler is reported to have considered the 50mm focal length "overstretched" for this four-element form, which was originally more comfortable in the 90mm range. Nevertheless, the combination of f/2 speed, extremely compact size (total track barely exceeding the focal length), and four-element simplicity was precisely what the military specification required: a lens cheaper to produce than the Summicron, robust enough for combat, and optically adequate for military documentation photography.

## 10. Summary of Glass Types

| Element | Patent n_e / ν_e | Data-file glass (catalog curve) | Family | Role |
|:-------:|:----------------:|:-------------------------------:|:------:|:----:|
| L1 | 1.6940 / 54.5 | N-LAK9 (Schott) — LaK9, e-line match | Lanthanum crown | Primary positive power |
| L2 | 1.6734 / 46.8 | N-BAF10 (Schott) — BaF10, e-line match | Barium flint | Secondary positive |
| L3 | 1.7471 / 27.4 | E-FD13 (Hoya) — SF13-class proxy | Dense flint | Sole diverging element |
| L4 | 1.7546 / 34.7 | LAFN7 (Schott) — e-line match | Lanthanum flint | Rear positive |

All four glasses are conventional types with no anomalous partial dispersion (APD); the patent publishes no partial-dispersion data. The patent explicitly notes that the "most inexpensive glasses" were used, keeping manufacturing costs comparable to those of triplet objectives despite the superior four-element performance.
