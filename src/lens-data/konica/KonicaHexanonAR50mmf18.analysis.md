## Patent Reference and Design Identification

**Patent:** JP 1982-108817 A\
**Application Number:** JP18377480A\
**Filed:** 26 December 1980\
**Published:** 7 July 1982\
**Inventors:** Ryoko Watabe; Toshiko Shimokura\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** *Gauss-type lens* (ガウス型レンズ)\
**Embodiment analyzed:** Example 1 (第1実施例)

The selected prescription is Example 1 of the Japanese publication. The patent describes a five-group, six-element Gauss-type photographic objective and gives Example 1 as `f = 100`, `F = 1.8`, and `2W = 46°` (printed p. 85). The production lens represented by the data file is the KONICA HEXANON AR 50mm f/1.8, for which Konica's manufacturer-authored lens table gives a 50 mm focal length, f/1.8 maximum aperture, 46° angle of view, six elements in five groups, and 0.55 m minimum focusing distance from the film plane.[1]

The project treats this patent/example as the fixed production correlation; no manufacturer source located for this work explicitly identifies the patent as the production prescription. The correlation rests on several convergent characteristics:

1. Both the patent example and the production lens use six elements in five air-separated groups.
2. Both specify an f/1.8 maximum aperture and a 46° full field/angle of view.
3. Uniformly scaling the patent's normalized `f = 100` prescription by 0.5 gives the 50 mm nominal production scale.
4. The patent's Figure 2 optical section (printed p. 87) has the same Gauss-type sequence represented in the data file: two front positive menisci, a pre-stop negative meniscus, a cemented negative/positive rear pair, and a final positive element.

The 0.5 scale is a modeling normalization, not a change to the dimensionless design. Every radius, axial spacing, semi-diameter, and image-plane coordinate is halved; refractive indices and Abbe numbers remain unchanged. The selected embodiment is entirely spherical, so no aspheric coefficient transformation is applicable.

## Optical Architecture

The lens is a five-group, six-element Gauss-type standard objective. From object to image, the air-separated groups are positive, positive, negative, weakly negative as a cemented pair, and positive. The patent itself defines the first two groups as positive menisci, the third as a negative meniscus, the fourth as a cemented biconcave/biconvex pair, and the fifth as a positive lens (printed pp. 83–85; see also the English abstract cross-check).[3]

At the scaled production correlation, tracing of the final TypeScript arrays gives a Gaussian EFL of **50.246308 mm**. This is the computed model quantity from the printed prescription; **50 mm** remains the marketed focal length. The modeled wide-open f-number is **f/1.8**, matching the stored `nominalFno` and the marketed aperture.

The central air space between the third and fourth groups contains the aperture stop. The patent drawing establishes the stop's location qualitatively but does not publish a numerical coordinate or diameter. The data model therefore splits the scaled 9.25 mm S6→S7 air space into **5.19 mm from S6 to STO** and **4.06 mm from STO to S7**, based on the rendered Figure 2 position. This is an author/modeling inference. The stored stop semi-diameter, **9.525424 mm**, is likewise a computed f/1.8 model anchor rather than a patent value.

The patent does not publish clear-aperture semi-diameters. Every non-stop `sd` in the data file is consequently a modeling quantity constrained by exact d-line ray envelopes, the published 23° half-field and scaled 21.3 mm edge-image-height anchor, the Figure 2 silhouette, and the current edge-thickness/rim-slope/cross-gap geometry rules. These dimensions are not presented as measured production clear apertures.

Two internal numerical mismatches in the published example are retained rather than silently tuned. First, the ten printed Example 1 axial spacings sum to **61.070** at patent scale, while the example header separately prints `Σd = 61.060`. Second, paraxial calculation from the printed prescription gives `f = 100.492616` and BFD `= 70.687584`, whereas the example header separately states `f = 100` and `fB = 69.999`. After scaling, the data file therefore keeps the source-derived S11→image distance of **34.9995 mm**, while the printed rows compute a paraxial BFD of **35.343792 mm**.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical surface occurs in the selected Example 1 prescription. None is inserted into the model, and no omitted plate requires an air-equivalent rear-spacing correction.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.67003`, `νd = 47.3`. Glass: **670473 — supplier-neutral code (patent nd=1.67003, vd=47.3)**. Standalone air-bounded `f = +44.739749 mm`.

L1 is the front positive meniscus and the first air-separated positive group. Its standalone power is stronger than L2's, so it provides a substantial fraction of the front-side convergence while retaining the meniscus form specified by the patent.

The stored focal length is a computed standalone element quantity from the scaled prescription. Because L1 is air-bounded in the actual system, this standalone value is also physically meaningful as the isolated element power, although its contribution in the complete lens is modified by separation from the following groups.

### L2 — Positive Meniscus

`nd = 1.70154`, `νd = 41.2`. Glass: **702412 — supplier-neutral code (patent nd=1.70154, vd=41.2)**. Standalone air-bounded `f = +64.158953 mm`.

L2 is the second positive meniscus and the second air-separated positive group. Together, L1 and L2 establish the positive front half of the Gauss form before the strongly negative L3. The patent's conditions separately constrain the glass exponents of these first two positive lenses, making their index/dispersion coordinates part of the claimed design balance rather than incidental material choices.

### L3 — Negative Meniscus

`nd = 1.72825`, `νd = 28.5`. Glass: **728285 — supplier-neutral code (patent nd=1.72825, vd=28.5)**. Standalone air-bounded `f = −24.192419 mm`.

L3 is the negative meniscus immediately ahead of the aperture-stop space. It is the strongest standalone negative element in the prescription and opposes the convergence generated by the two positive front groups, forming the narrow central region characteristic of the Gauss architecture.

Its relatively low `νd = 28.5` distinguishes it from the four positive lenses constrained by condition (12). No anomalous-partial-dispersion inference is made from that Abbe number alone.

### L4 — Biconcave Negative, Cemented Pair D1

`nd = 1.67270`, `νd = 32.1`. Glass: **673321 — supplier-neutral code (patent nd=1.67270, vd=32.1)**. Hypothetical standalone air-bounded `f = −17.624187 mm`.

L4 is the negative member of the rear cemented pair D1. The quoted focal length is only the air-bounded shape value that would result if L4 were isolated; it is not an independently assignable in-situ power because its rear surface is the physical cemented interface with L5.

The cemented interface is surface 8. In the data model it correctly carries L5's downstream refractive index and element identity, with no synthetic cement layer.

### L5 — Biconvex Positive, Cemented Pair D1

`nd = 1.72000`, `νd = 43.7`. Glass: **720437 — supplier-neutral code (patent nd=1.72000, vd=43.7)**. Hypothetical standalone air-bounded `f = +20.683805 mm`.

L5 is the positive member of D1. As with L4, the listed standalone focal length is a shape comparison rather than an in-situ allocation of the shared cemented surface.

When the actual three-surface L4/L5 cemented pair is traced as a physical air-bounded group, its net EFL is **−1135.133799 mm** at the scaled model size. The group is therefore very weakly negative overall even though its two hypothetical air-bounded members have large and opposite powers. The physically defensible group statement is this cemented net; assigning the shared interface wholly to either L4 or L5 would be arbitrary.

### L6 — Biconvex Positive

`nd = 1.70154`, `νd = 41.2`. Glass: **702412 — supplier-neutral code (patent nd=1.70154, vd=41.2)**. Standalone air-bounded `f = +52.107826 mm`.

L6 is the final positive element and the fifth air-separated group. It restores positive convergence behind the nearly power-neutral cemented pair and completes the rear half of the Gauss objective. Its glass coordinate is identical to L2's in the patent example, so the data file uses the same supplier-neutral 702412 annotation for both elements.

## Glass Identification and Selection

All physical elements resolve at runtime to coordinate-compatible catalog dispersion curves. These
curves provide spectral approximations and do not establish historical supplier or melt identity.

The patent publishes d-line `nd` and `νd` coordinates but does not identify a glass manufacturer. The data file therefore stores six-digit, supplier-neutral coordinate codes rather than asserting a production supplier. Current OHARA catalog entries reproduce all five unique code/coordinate pairs at the patent's published precision or rounding: S-BAH10, S-BAH27, S-TIH10, S-TIM25, and S-LAM52.[5][6][7][8] This is strong catalog-coordinate corroboration, but it is not evidence that Konishiroku used OHARA glass in the production lens; equivalent coordinates also occur across historical vendor families.

| Code | Patent `nd` | Patent `νd` | Elements | Current OHARA coordinate match | `Δnd` | `Δνd` |
|---|---:|---:|---|---|---:|---:|
| 670473 | 1.67003 | 47.3 | L1 | S-BAH10 | 0.00000 | −0.07 |
| 702412 | 1.70154 | 41.2 | L2, L6 | S-BAH27 | 0.00000 | +0.04 |
| 728285 | 1.72825 | 28.5 | L3 | S-TIH10 | 0.00000 | −0.04 |
| 673321 | 1.67270 | 32.1 | L4 | S-TIM25 | 0.00000 | 0.00 |
| 720437 | 1.72000 | 43.7 | L5 | S-LAM52 | 0.00000 | −0.01 |

The patent's glass-selection constraints explicitly use the glass exponent `Gi = ni^8 νi / 100` for the four positive lenses. Example 1 gives computed values of **G1 = 28.6191**, **G2 = 28.9491**, **G5 = 33.4741**, and **G6 = 28.9491**, all within their stated ranges. The data also preserves the patent's primary-dispersion separation between the negative and positive members through the `νd` values.

No element in the selected example carries patent-published `nC`, `nF`, `ng`, or `dPgF`. The data file therefore contains none of those fields. The design should not be described as apochromatic or as using anomalous partial dispersion on the basis of `nd`/`νd` alone.

## Focus Mechanism

The selected patent example publishes only one optical state. It provides no finite-focus surface-spacing table, object-distance prescription, magnification row, or internal-group movement law. The data file consequently uses **NO_INTERNAL_RECONSTRUCTION**: `var` is empty and no internal focus trajectory is invented.

Konica's production lens table gives a minimum focusing distance of **0.55 m from the film plane**.[1] That value is retained as product metadata only. It does not define an object distance from S1 or a principal plane, and it is not used to manufacture a close-focus optical state that the patent does not supply.

## Conditional Expressions

Example 1 satisfies every conditional expression verified from the rendered Japanese publication. The values below are evaluated at the patent's original `f = 100` scale, so uniform 0.5 dimensional scaling does not alter the dimensionless results.

| Patent condition | Example 1 value | Result |
|---|---:|---|
| (1) `0.59 < Σd/f < 0.63` | 0.6106 printed; 0.6107 row sum | Pass both ways |
| (2) `0.17 < d6/f < 0.22` | 0.1850 | Pass |
| (3) `26 < G1 < 31` | 28.6191 | Pass |
| (4) `26 < G2 < 31` | 28.9491 | Pass |
| (5) `26 < G5 < 35` | 33.4741 | Pass |
| (6) `26 < G6 < 35` | 28.9491 | Pass |
| (7-1) `0.27 < (R6 + |R7|)/(2f) < 0.32` | 0.31423 | Pass |
| (7-2) `1.1 < |R7|/R6 < 1.3` | 1.22945 | Pass |
| (8-1) `0.45 < R1/f < 0.55` | 0.52260 | Pass |
| (8-2) `0.37 < R3/f < 0.42` | 0.39582 | Pass |
| (9) `0.37 < R4/R5 < 0.47` | 0.44791 | Pass |
| (10) `13 < (ν1 + ν2)/2 − ν3 < 20` | 15.75 | Pass |
| (11) `8 < (ν5 + ν6)/2 − ν4 < 18` | 10.35 | Pass |
| (12) `36 < ν1, ν2, ν5, ν6 < 60` | 47.3, 41.2, 43.7, 41.2 | Pass |

These conditions are source facts in form and computed results in their Example 1 evaluation. Condition (1) passes using either the separately printed `Σd = 61.060` or the **61.070** sum of the ten printed spacing rows; the 0.010 mm difference is retained explicitly.

## Verification Summary

Independent sequential height/reduced-angle tracing of the final data arrays gives **EFL = 50.246308 mm** and **BFD = 35.343792 mm**. An ordinary-angle ABCD construction agrees with the reduced-angle system matrix to `3.55 × 10⁻15` in the largest matrix element difference, and a direct unit-height parallel ray reproduces the same BFD.

The modeled source-retained axial track is **65.5345 mm** from S1 to the image plane. Its track/EFL ratio is **1.30426**, so the design is not telephoto under the strict `TL/EFL < 1` definition. Its BFD/EFL ratio is **0.70341**, so it is not retrofocus under the strict `BFD > EFL` definition.

Surface-by-surface Petzval evaluation using `φ/(n·n′)` sums to **+0.004321420810 mm⁻¹** in the scaled model. Representative exact d-line rays at the patent's full 23° half-field remain inside the inferred apertures; the 23° chief ray intersects the source-retained image plane at **20.8621 mm**, close to the patent-derived scaled edge-height anchor of 21.3 mm without adjusting the prescription to force agreement.

The geometry checks used for the inferred clear apertures retain positive element edge thickness and positive physical air-gap rim clearance. The most restrictive air lens is the S4→S5 gap, where the modeled shared rim still retains approximately **0.0636 mm** of physical clearance. These checks validate the data-model geometry; they do not convert the inferred semi-diameters into patent-published or production-measured apertures.

## Sources and References

1. **Konica TC-X instruction manual**, manufacturer-authored lens table; archival scan: <https://cameramanuals.org/konica/konica_tc-x-lang.pdf>. Used for the production 50 mm f/1.8 identity, 6-element/5-group construction, 46° angle of view, and 0.55 m minimum focus from the film plane.
2. **JP 1982-108817 A / 特開昭57-108817**, *ガウス型レンズ* (Gauss-type lens), Example 1. Supplied six-page Japanese publication scan; Example 1 prescription on printed p. 85, optical section Figure 2 on printed p. 87.
3. **Google Patents, JPS57108817A**, English metadata/abstract cross-check: <https://patents.google.com/patent/JPS57108817A/en>. Used only as a translation and metadata aid; the supplied Japanese publication controls the prescription and historical applicant.
4. **Konica Minolta corporate history**, <https://www.konicaminolta.com/global-en/corporate/history-timeline03.html>. Confirms that Konishiroku Photo Industry Co., Ltd. was renamed Konica Corporation in 1987; the data file therefore preserves the historical applicant named by the 1982 source rather than substituting the later corporate name.
5. **OHARA, S-BAH glass types**, <https://oharacorp.com/glass-type/s-bah/>. Current catalog coordinates for S-BAH10 (670473) and S-BAH27 (702412).
6. **OHARA, S-TIH/S-NPH glass types**, <https://oharacorp.com/glass-type/s-tih-s-nph/>. Current catalog coordinates for S-TIH10 (728285).
7. **OHARA, S-TIM25 datasheet**, <https://oharacorp.com/wp-content/uploads/datasheets/estim25.pdf>. Current catalog coordinates for code 673321.
8. **OHARA, S-LAM glass types**, <https://oharacorp.com/glass-type/s-lam/>. Current catalog coordinates for S-LAM52 (720437).
