## Patent Reference and Design Identification

**Patent:** US 6,239,919 B1\
**Application Number:** US 09/499,439\
**Priority:** May 14, 1998 (JP 10-131521)\
**Filed:** February 7, 2000\
**Granted:** May 29, 2001\
**Inventor:** Susumu Sato\
**Assignee:** Nikon Corporation\
**Title:** *Internal Focusing Telephoto Lens Having High Speed Aperture Ratio*\
**Embodiment analyzed:** Example 4 / Embodiment 4 (Fig. 10, Table 4)

The modeled prescription is Example 4 of US 6,239,919 B1, retained at its native patent scale. The patent gives a focal length of 392.0 mm and F-number 2.88 for this embodiment. Independent paraxial tracing of the final authored prescription gives an effective focal length of 391.998755 mm, so no dimensional scaling has been applied. The production name, marketing focal length, and marketing aperture remain separate in the data file as 400 mm and f/2.8.

The production correlation to the **NIKON AI AF-S NIKKOR 400mm f/2.8 D IF-ED II** rests on several convergent features rather than focal length alone:

1. Nikon specifies 11 lens elements in 9 groups, plus one protective glass. After the patent's plane-parallel source plates are excluded from the active prescription, Example 4 contains exactly 11 active glass elements in 9 air-separated groups.
2. Nikon identifies three ED elements at production element positions 1, 2, and 5. The final data file places the same low-dispersion coordinate, `nd = 1.497820`, `νd = 82.52`, at L11, L12, and L15, which occupy those same active-element positions.
3. Nikon specifies zero aspherical elements. Example 4 and the final data file are entirely spherical.
4. Nikon identifies the lens as an internal-focusing AF-S design. Example 4 focuses by translating only the negative G2 group toward the image side while the surrounding groups remain fixed.
5. Nikon specifies minimum focus distances of 3.5 m in AF and 3.4 m in MF, with maximum reproduction ratios of 1/7.7 and 1/7.5 respectively. The mechanism-constrained model is consistent with those endpoints and reproduction ratios.
6. Nikon's product history lists the II-version 400 mm f/2.8D IF-ED in 2001, the same year as the US patent grant.

These correspondences establish the selected patent/example as the fixed production correlation used by this model. They do not constitute a statement that Nikon itself has published a patent-to-product identification.

## Optical Architecture

Example 4 is a positive-negative-positive internal-focusing telephoto system. The first group G1 is positive and is divided into a positive front group G1F and a positive rear group G1R; the second group G2 is negative and performs focusing; the third group G3 is positive and stationary. In the final active model the independently computed focal lengths are approximately +190.021 mm for G1, -56.002 mm for G2, and +115.521 mm for G3. Within G1, G1F is approximately +323.391 mm and G1R approximately +249.752 mm.

The front half of the system carries most of the optical diameter and power. G1F consists of two biconvex positives followed by a biconcave negative. G1R is a cemented negative/positive meniscus doublet whose net power is positive. The compact G2 focusing section consists of a biconcave negative followed by a cemented positive/negative meniscus doublet; although L22 is positive as a standalone element, the cemented L22+L23 component is net negative. G3 is a separated positive-negative-positive triplet behind the aperture stop.

The patent's two published effective diameters illustrate the intended reduction in focus-group size: the first active surface has `φ1 = 136.2 mm`, while the G2 front surface has `φ2 = 43.4 mm`, or about 0.319 of the former. The patent explicitly treats reduction of the moving group's effective diameter as a central design objective.

The active surface-3-to-image track is 377.086128 mm. With the verified 391.998755 mm EFL, `TL/EFL = 0.961957`, so the prescription satisfies the project's quantitative telephoto criterion. The active rear focal distance from surface 23 is 114.057258 mm, giving `BFD/EFL = 0.290963`; it is therefore not a retrofocus design under the project's `BFD > EFL` criterion.

The LensVisualizer model omits the patent's front plane-parallel plate, rear plane-parallel filter plate, and inactive field stop. The rear plate's optical effect is not discarded: its air-equivalent contribution is folded into the final rear spacing. Direct source normalization gives 114.057185 mm from source surface 23 to the image plane; the stored 114.057258 mm value is the independently solved spacing that closes the rounded patent prescription at infinity, differing by only 0.000073 mm.

The axial position of S1 is published by the patent and is retained as the sole `STO`. Its physical diameter is not published. The modeled stop semi-diameter, 20.065472 mm, is therefore an inference obtained by calibrating the entrance pupil to the published F-number 2.88. The corresponding verified entrance-pupil diameter is 136.110679 mm.

Semi-diameters are partly sourced and partly modeled. Surface 3 uses the patent's `φ1/2 = 68.1 mm`, and surface 12 uses `φ2/2 = 21.7 mm`. The remaining semi-diameters are inferred from Fig. 10 proportions and paraxial ray envelopes, then constrained by the current edge-thickness, rim-slope, shared-band cross-gap, off-axis containment, and render-trim rules. They should not be read as patent-published clear apertures.

No scale factor is applied, and every modeled surface is spherical. Consequently there is no asphere convention or aspheric-coefficient scaling transformation to apply.

## Element-by-Element Analysis

### L11 — Biconvex Positive

`nd = 1.497820`, `νd = 82.52`. Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +302.687 mm`.

L11 is the first element of G1F and carries the patent's `φ1 = 136.2 mm` effective-diameter reference at its front surface. Nikon identifies production element position 1 as ED. The patent treats the first group as especially important in a telephoto system because residual aberration generated there is subsequently magnified; it therefore constrains both refractive-index contrast and Abbe number in G1 (US 6,239,919 B1, cols. 3–6).

J-FKH1 supplies a compatible public dispersion curve at the same index and within 0.05 Abbe units. The label remains a catalog-equivalent model rather than a claim about Nikon's historical supplier.

### L12 — Biconvex Positive

`nd = 1.497820`, `νd = 82.52`. Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +270.140 mm`.

L12 repeats the L11 low-dispersion coordinate and forms the second positive member of G1F. Nikon likewise identifies production element position 2 as ED. In the patent architecture, the two positive front elements precede L13's negative power, allowing G1F to remain net positive while the negative component supplies the index and dispersion contrast required by the G1 conditional expressions.

No individual aberration allocation is assigned beyond what the patent supports; L12 is interpreted primarily as part of the coupled G1F correction rather than as an independently isolated corrector.

### L13 — Biconcave Negative

`nd = 1.787971`, `νd = 47.47`. Glass: **TAF4 catalog equivalent (patent 788475; production supplier unspecified)**. Standalone `f = -230.759 mm`.

L13 completes G1F as its negative member. Its substantially higher index and lower Abbe number than L11/L12 create the positive-negative material contrast measured by the patent's G1 conditions. The computed G1F power remains positive at approximately +323.391 mm despite L13's standalone negative power.

The discontinued-inclusive HOYA TAF4 row reproduces the six-digit coordinate within source rounding. It is used as the coefficient-backed optical equivalent while historical supplier provenance remains unspecified.

### L14 — Negative Meniscus, Convex to Object

`nd = 1.796681`, `νd = 45.37`. Glass: **J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)**. Standalone `f = -219.582 mm`.

L14 is the negative front member of the cemented G1R doublet D1. Its rear surface is the cemented interface to L15. The element is negative in isolation, but its optical role must be read together with L15 rather than inferred from the standalone focal length alone.

J-LASF017 provides the closest compatible public curve for the rounded patent coordinate. This remains an optical-equivalent assignment, not a production-melt identification.

### L15 — Positive Meniscus, Convex to Object

`nd = 1.497820`, `νd = 82.52`. Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +113.313 mm`.

L15 is cemented to L14 and is the positive member of D1. Nikon identifies production element position 5 as ED, matching this element's location and the same `1.497820 / 82.52` coordinate used for L11 and L12.

The distinction between element and component power is important here: L14 alone is negative and L15 alone is strongly positive, while the cemented L14+L15 component has an independently verified net focal length of approximately **+249.752 mm**. That cemented positive component is also the complete G1R group in Example 4.

### L21 — Biconcave Negative

`nd = 1.803840`, `νd = 33.89`. Glass: **E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)**. Standalone `f = -74.015 mm`.

L21 is the front negative element of the translating G2 focusing group and is the strongest negative standalone element in that group. Its front surface carries the patent's `φ2 = 43.4 mm` effective-diameter reference. The small diameter of G2 relative to the front group is a deliberate feature of the patent rather than a drawing artifact.

Hikari E-LAFH2 reproduces the patent coordinate directly and supplies the coefficient-backed catalog-equivalent curve; the stored d-line coordinate remains unchanged.

### L22 — Positive Meniscus, Concave to Object

`nd = 1.805182`, `νd = 25.41`. Glass: **SF6 catalog equivalent (patent 805254; production supplier unspecified)**. Standalone `f = +68.807 mm`.

L22 is the positive front member of cemented doublet D2. Its sign can be misleading if viewed alone: it is positive as a standalone thick lens, but the complete D2 component becomes negative after cementing to L23. The dense-flint/SF6-family label records a well-supported coordinate family while intentionally withholding a specific vendor attribution.

### L23 — Negative Meniscus, Concave to Object

`nd = 1.640000`, `νd = 60.03`. Glass: **S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)**. Standalone `f = -54.428 mm`.

L23 is the negative rear member of D2. Together, L22 and L23 form a cemented component with an independently verified net focal length of approximately **-250.229 mm**. Combined with L21 and the internal air spacing, the complete moving G2 group is considerably stronger at approximately **-56.002 mm**.

This difference between standalone, cemented, and in-situ group power is central to interpreting the focusing unit: the positive power of L22 does not make either D2 or G2 positive.

### L31 — Biconvex Positive

`nd = 1.696800`, `νd = 55.60`. Glass: **K-LaK14 catalog equivalent (patent 697556; production supplier unspecified)**. Standalone `f = +124.734 mm`.

L31 is the first positive element of the stationary G3 triplet, immediately behind the aperture stop. Example 4 belongs to the patent's reduced-weight branch in which G1F contains three elements and G3 is a positive-negative-positive triplet. The patent explains that this triplet arrangement is used to carry correction work that would otherwise demand additional front-group glass, including spherical aberration, field behavior, and secondary chromatic correction (US 6,239,919 B1, cols. 5–7).

Sumita K-LaK14 reproduces the patent coordinate and supplies the catalog-equivalent curve without implying Nikon's historical supplier.

### L32 — Negative Meniscus, Concave to Object

`nd = 1.803840`, `νd = 33.89`. Glass: **E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)**. Standalone `f = -110.963 mm`.

L32 is the negative middle element of G3 and uses the same unresolved patent coordinate as L21. It provides the negative member required by the patent's positive-negative-positive G3 architecture. Because G3 remains fixed during focusing, the patent treats its correction as separable from the changing conjugates of G2.

### L33 — Biconvex Positive

`nd = 1.640000`, `νd = 60.03`. Glass: **S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)**. Standalone `f = +104.043 mm`.

L33 closes G3 as its rear positive element. Its front radius is the very weak but finite `+46,400.0000 mm` value printed in Table 4; it is not a plane surface. Together with L31 and L32, L33 produces a verified G3 focal length of approximately **+115.521 mm**.

## Glass Identification and Selection

The patent publishes d-line `nd` and `νd` coordinates but no glass manufacturers or catalog names. The final data retains those coordinates and assigns compatible coefficient-backed catalog equivalents. These are chromatic models, not claims about production suppliers or melts.

| Glass annotation in final data | `nd` | `νd` | Elements | Interpretation |
|---|---:|---:|---|---|
| J-FKH1 equivalent (498825) | 1.497820 | 82.52 | L11, L12, L15 | Low-dispersion curve; Nikon independently identifies production positions 1, 2, and 5 as ED |
| TAF4 equivalent (788475) | 1.787971 | 47.47 | L13 | Compatible discontinued-inclusive HOYA curve |
| J-LASF017 equivalent (797454) | 1.796681 | 45.37 | L14 | Compatible Hikari curve |
| E-LAFH2 equivalent (804339) | 1.803840 | 33.89 | L21, L32 | Exact Hikari coordinate |
| SF6 equivalent (805254) | 1.805182 | 25.41 | L22 | Exact dense-flint coordinate |
| S-BSM81 equivalent (640600) | 1.640000 | 60.03 | L23, L33 | Compatible moderate-index crown curve |
| K-LaK14 equivalent (697556) | 1.696800 | 55.60 | L31 | Exact Sumita coordinate |

No `nC`, `nF`, `ng`, or `dPgF` values are authored as patent data. Runtime chromatic tracing uses the named catalog-equivalent curves, but this analysis does not characterize the prescription as apochromatic or claim a historical production melt.

## Focus Mechanism

Focusing is performed by translating G2 toward the image side while G1 and G3 remain stationary. Two adjacent air spaces vary in equal and opposite directions: D11 grows while D16 shrinks, and their sum remains fixed at 52.03887 mm. This is a one-degree-of-freedom internal-focus mechanism rather than a multi-group floating system.

The patent contains a source-table error that must be kept visible. Table 4 marks `d11` and `d16` as variable, but the following variable-spacing table labels the same numerical rows `d13` and `d18`. Applying the values to the actual variable gaps reproduces the published finite-conjugate behavior and the stated approximately 10.86 mm focus travel; applying them literally to `d13`/`d18` is incompatible with the surface table and the single moving-group mechanism.

The patent's published close checkpoint corresponds to an object-to-image distance of 3.8 m. In the complete source train, G2 moves 10.85845 mm imageward, taking `d11` from 24.59533 to 35.45378 mm and `d16` from 27.44354 to 16.58509 mm. The patent prints a close-state magnification of `β = -0.11789`.

The final LensVisualizer close-focus state is a **CONSTRAINED_RECONSTRUCTION**, not a patent-published 3.4 m row. Nikon specifies a 3.4 m manual-focus limit. After the source plates and field stop are removed and the rear reference plane is normalized, the actual active TypeScript model is re-solved with the published one-group mechanism and the D11+D16 constraint intact. The resulting 3.4 m state is:

| Quantity | Infinity | Modeled 3.4 m MF endpoint |
|---|---:|---:|
| D11 | 24.59533 mm | 36.928470 mm |
| D16 | 27.44354 mm | 15.110400 mm |
| G2 imageward travel | 0 | 12.333140 mm |
| D11 + D16 | 52.03887 mm | 52.03887 mm |

The normalized active model closes the 3.4 m paraxial conjugate to an imaging-matrix `B` residual of approximately `5.1e-13 mm` and gives `β = -0.133899`, close to Nikon's marketed MF maximum reproduction of `-1/7.5 = -0.133333`. A secondary 3.5 m AF solve gives `β = -0.129477`, close to Nikon's `-1/7.7` specification. These comparisons are consistency checks on the reconstruction, not manufacturer-published prescription states.

Nikon describes the production lens as using Silent Wave Motor (SWM) drive for autofocus. The patent itself specifies the optical G2 motion, not the production actuator implementation.

## Chromatic Correction Strategy

The patent treats the first group as especially consequential because a telephoto system magnifies residual aberration formed there. Its G1 conditions therefore combine high-Abbe positive glasses with higher-index, lower-Abbe negative glasses. In Example 4, L11, L12, and L15 all use the `1.497820 / 82.52` coordinate, while the negative G1 elements use `1.787971 / 47.47` and `1.796681 / 45.37`.

The same patent branch reduces the number of front-group elements and uses the stationary G3 triplet to carry additional correction. Its positive members L31 and L33 use `1.696800 / 55.60` and `1.640000 / 60.03`, both inside the applicable Example 4 material windows. This is a source-grounded description of the index/Abbe strategy; without direct line indices, `dPgF`, or a proven historical Sellmeier identity, no stronger claim about secondary-spectrum class or APO behavior is warranted.

## Conditional Expressions

Example 4 satisfies the patent's principal focal-length and G1 material conditions. The values below are independently recomputed from the final prescription rather than copied from the patent's rounded result rows.

| Condition | Detailed-description range | Recomputed Example 4 value | Result |
|---|---|---:|---|
| (1) `|f1·f3 / (f2·F)|` | `0.7 < ... < 1.3` | 0.999938 | Satisfied |
| (2) `|f2·F / (f1·φ1)|` | `0.4 < ... < 1.0` | 0.848226 | Satisfied |
| (3) `|f1F / f1R|` | `0.7 < ... < 1.4` | 1.294846 | Satisfied |
| (4) `Nn1 - Np1` | `0.2 < ... < 0.4` | 0.294506 | Satisfied |
| (5) `νp1` | `65 < ... < 100` | 82.52 | Satisfied |
| (6) `νn1` | `35 < ... < 65` | 47.47, 45.37 | Satisfied |
| (9) `Np3` | `1.55 < ... < 1.75` | 1.69680, 1.64000 | Satisfied |
| (10) `νp3` | `45 < ... < 70` | 55.60, 60.03 | Satisfied |

The detailed description states condition (6) as `35 < νn1 < 65`, while claim 2 narrows the upper bound to `νn1 < 60`. Example 4 uses 47.47 and 45.37, so it satisfies both forms.

Table 4 prints the two G3 rows as conditions (7) and (8), but that numbering conflicts with the embodiment architecture. Example 4 uses the reduced-weight three-element G1F and positive-negative-positive G3 branch defined by conditions (9) and (10); its first G3 positive index, 1.69680, would not satisfy the alternative (7) range. The final analysis therefore preserves the source error as an explicit correction rather than silently applying the printed labels.

## Verification Summary

Independent sequential y–ν tracing of the final active arrays, with a conventional y–θ ABCD cross-check, gives an EFL of 391.998755 mm, an infinity BFD of 114.057258 mm from surface 23, and a computed wide-open F-number of exactly 2.88. The two matrix formulations agree to approximately `1.1e-13` in their transformed system matrices, and a unit parallel ray closes at the stored infinity image plane to approximately `1.2e-17 mm` in height.

The patent aberration figures use image height `Y = 21.60 mm`; with the verified EFL, the corresponding paraxial rectilinear half field is 3.153935°, or 6.307870° full field. Nikon's marketed angle of view is 6°10′. Those two values are retained as separate design and product specifications rather than forced into equality.

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is `+0.0002426857 mm⁻¹`, corresponding to a signed Petzval radius of approximately `-4120.56 mm` under the sign convention used by the verification script.

The inferred semi-diameter set passes the independently computed geometry checks at both infinity and the defined 3.4 m state. The minimum computed element edge thickness is approximately 1.310 mm, the largest spherical rim angle is approximately 47.83°, and the largest positive shared-band cross-gap intrusion fraction is approximately 0.8879 against the current 0.90 limit.

## Sources

- **US 6,239,919 B1**, Susumu Sato, *Internal Focusing Telephoto Lens Having High Speed Aperture Ratio*, Nikon Corporation, granted May 29, 2001. Primary prescription source: Embodiment 4, Fig. 10, Table 4, and Figs. 11–12 in the supplied patent PDF.
- **Nikon Imaging Japan**, [AI AF-S Nikkor ED 400mm F2.8D II (IF)](https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af-s_nikkor_ed_400mm_f28d_2_if/). Production identity, 11-element/9-group construction plus protective glass, three ED elements, zero aspheres, angle of view, focus limits, reproduction ratios, SWM drive, diaphragm-blade count, and minimum aperture.
- **Nikon Product History — 2000s**, [2001 product listing](https://imaging.nikon.com/imaging/information/products_history/2000/). Production timing for the AI AF-S Nikkor ED 400mm F2.8D II (IF).
