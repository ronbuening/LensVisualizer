# FUJIFILM FUJINON XF 8mm f/3.5 R WR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2023-001878 A\
**Application Number:** JP 2022-085577\
**Priority:** JP 2021-102745, 2021-06-21\
**Filed:** 2022-05-25\
**Published:** 2023-01-06\
**Inventors:** Ryosuke Nagami; Hiroki Saito\
**Applicant:** FUJIFILM Corporation\
**Title:** 撮像レンズ及び撮像装置 (Imaging Lens and Imaging Apparatus)\
**Embodiment analyzed:** Example 7

The prescription is transcribed from Example 7 of JP 2023-001878 A. The example is defined by ¶0100–¶0106, Tables 19–22, and Figure 20. It contains 12 glass elements in 9 air-separated groups, with seven elements before the aperture stop and five behind it. Six surfaces on three elements are aspherical. The infinity design values published in Table 20 are `f = 8.211 mm`, `FNo. = 3.60`, `Bf = 11.604 mm`, and full field `2ωm = 124.4°`.

The association with the production FUJINON XF8mmF3.5 R WR is a convergent inference rather than a Fujifilm-confirmed patent attribution. The evidence is unusually close but should not be upgraded beyond that:

1. Example 7 and the production lens both use 12 elements in 9 groups.
2. Example 7 places aspheres on three elements; Fujifilm specifies three aspherical elements for the production lens.
3. Example 7 contains two particularly low-dispersion positive rear elements, L22 (`νd = 90.27`) and L25 (`νd = 81.54`); Fujifilm specifies two ED elements.
4. The design values `8.211 mm`, f/3.60, and 124.4° are close to the marketed 8 mm, f/3.5, and 121° values without being identical.
5. Example 7 uses a single internal focusing element, L15; Fujifilm describes the production lens as using an Inner Focus system.
6. The patent priority and publication precede Fujifilm's 2023-05-24 announcement and 2023-06-29 launch.

The LensVisualizer record therefore keeps the marketed values and design values separate. It uses the production metadata `8 mm`, f/3.5, Fujifilm X mount, APS-C format, and 0.18 m minimum focus distance, while the modeled optical prescription remains the unscaled Example-7 design with computed EFL `8.211393 mm` and modeled f-number 3.60.

## Optical Architecture

Example 7 is a retrofocus ultrawide architecture in the project's strictly numerical sense: at infinity the computed cardinal back focal length from the last powered vertex is `11.604449 mm`, greater than the computed EFL `8.211393 mm`, giving `BFD/EFL = 1.41321`. The system is not telephoto; its verified `TL/EFL = 8.27435` is far above unity.

The optical train is divided by the aperture stop into front group Gf (L11–L17) and rear group Gr (L21–L25). Computed as isolated subassemblies in air, Gf has focal length `+10.5866 mm` and Gr `+39.4313 mm`. Those group values describe the isolated matrices and should not be confused with the in-situ contribution of each group inside the complete lens.

The front section begins with three negative elements: two negative menisci followed by a plano-concave negative lens. This arrangement is consistent with the patent's general ultrawide discussion in ¶0043–¶0046, which associates the first negative elements with moving the entrance pupil toward the object side, preserving peripheral illumination, and managing astigmatism and distortion. Example 7 then reverses into positive power through L14, the movable positive L15, and the cemented L16–L17 pair before the stop.

Behind the stop, the rear group alternates strong local powers rather than behaving as a simple uniformly positive relay. L21–L22 is a net-negative cemented pair, L23 is a positive double-asphere, and L24–L25 is a weak net-negative cemented pair. Together they form a net-positive rear group. This alternating construction provides several independent refracting interfaces and two low-dispersion positive members without requiring a separate moving rear group.

The final model contains exactly one `STO` at the patent's published axial position. The patent does not publish the physical diaphragm diameter. Its modeled semi-diameter, `3.180884 mm`, is therefore calibrated to Table 20's f/3.60 through the implemented paraxial entrance-pupil magnification; agreement with f/3.60 is not independent evidence for an unpublished stop diameter.

No uniform scale is applied. The source dimensions remain at scale 1.0, and the six aspherical surfaces use the patent coefficients after only the documented conic-constant conversion.

## Element-by-Element Analysis

The focal lengths below are standalone element focal lengths recomputed from the final parsed prescription with each element considered in air. They are useful for comparing individual powers but do not represent the element's full in-situ behavior within the assembled system.

### L11 — Negative Meniscus

`nd = 1.72916`, `νd = 54.68`. Glass: **729547 lanthanum-crown class (supplier unconfirmed)**. `f = -25.9833 mm`.

L11 is the large front negative meniscus. Its size and relatively strong standalone negative power are consistent with the entrance section's wide-angle function. The patent's general discussion specifically favors a negative meniscus at the first position for entrance-pupil placement and off-axis control (¶0043–¶0044), but the exact share of any individual aberration correction cannot be assigned from paraxial power alone.

The surface-1 thickness is `1.110 mm`. That value was checked against the rendered Table 19; `1.000 mm` is a transcription failure mode and does not reproduce the printed first-order system values.

### L12 — Negative Meniscus, Two Aspherical Surfaces

`nd = 1.58313`, `νd = 59.46`. Glass: **583595 BACD12/ZK2 class (supplier unconfirmed)**. `f = -22.3380 mm`.

L12 is the second negative entrance meniscus and carries aspheres on both surfaces, 3A and 4A. Its placement immediately behind L11 gives the design high-order shape freedom while the ray bundle is still large. The patent's general first/second-lens discussion again identifies the second negative meniscus as part of the wide-angle entrance structure (¶0043–¶0044).

The large verified departures at the modeled clear apertures—especially surface 3A—show that these are materially non-spherical shapes rather than nominal conic refinements. Those departure values depend on modeled semi-diameters, not source-published clear apertures.

### L13 — Plano-Concave Negative

`nd = 1.60300`, `νd = 65.44`. Glass: **603655 phosphate-crown class (supplier unconfirmed)**. `f = -18.6063 mm`.

L13 completes the initial three-negative sequence. Its object-side surface is plano and its rear surface supplies the negative refracting power. The patent's general third-lens discussion allows a plano-concave negative third element and associates this position with wide-angle pupil and off-axis management (¶0045–¶0046).

The runtime resolves a compatible S-PHM53 catalog curve while retaining the patent-derived `dPgF`. Catalog line indices are not stored as patent measurements; the supplier remains unconfirmed.

### L14 — Biconvex Positive

`nd = 1.61266`, `νd = 44.46`. Glass: **613445 KZFH class (supplier unconfirmed)**. `f = +35.2132 mm`.

L14 is the first positive standalone element after the three negative entrance elements. It begins the transition from the strongly divergent front sequence into the positive portion of Gf. The runtime uses the compatible J-KZFH1 catalog curve with the patent-derived partial dispersion; no catalog line indices are authored as measurements.

The KZFH-class annotation is a coordinate/spectral classification, not a statement that a particular HIKARI melt was used in production. The selected J-KZFH1 catalog row reproduces the patent coordinates, but supplier identity remains unconfirmed.

### L15 — Biconvex Positive, Two Aspherical Surfaces; Focus Element

`nd = 1.58313`, `νd = 59.46`. Glass: **583595 BACD12/ZK2 class (supplier unconfirmed)**. `f = +52.9663 mm`.

L15 is the only element that the Example-7 text explicitly moves during focusing. Paragraph ¶0100 states that L15 moves toward the image side when focusing from infinity toward close distance while all other lenses remain fixed relative to the image plane. Both L15 surfaces, 9A and 10A, are aspherical.

The element's standalone power is positive but modest relative to several other elements. That does not by itself establish why Fujifilm chose this element as the focus group. The defensible source fact is the isolated single-element motion; the current model does not reconstruct its unpublished travel.

### L16 — Negative Meniscus, Cemented Pair D1

`nd = 1.91082`, `νd = 35.25`. Glass: **911353 TAFD35/H-ZLaF4LA class (supplier unconfirmed)**. `f = -23.2311 mm`.

L16 is the negative member of the cemented L16–L17 pair immediately before the stop. Its high refractive index and negative standalone power are offset by the much stronger positive L17 at their cemented interface.

The two elements together have computed net focal length `+19.5488 mm` when the cemented pair is treated as an isolated assembly in air. This cemented net power is distinct from either standalone element power and from the pair's in-situ effect inside Gf.

### L17 — Biconvex Positive, Cemented Pair D1

`nd = 1.65410`, `νd = 39.54`. Glass: **H-TF5 coordinate-compatible special-flint proxy (supplier unconfirmed)**. `f = +10.4771 mm`.

L17 is the strong positive partner of L16 and the final glass element before the stop. Its `νd = 39.54` is also the Example-7 value reported for patent condition (8), which constrains a positive front-group lens to `16 < νfp < 42`.

The catalog review found an exact coordinate/partial-dispersion match to CDGM H-TF5, but that is retained only as a catalog comparison. The final data does not assert CDGM as the production supplier.

### L21 — Negative Meniscus, Cemented Pair D2

`nd = 1.95375`, `νd = 32.33`. Glass: **954323 high-index lanthanum-flint class (supplier unconfirmed)**. `f = -12.9439 mm`.

L21 begins the rear group directly behind the stop and is the strongest negative standalone element in that group. It is cemented to the low-dispersion positive L22. The pair's isolated net focal length is `-42.1149 mm`, so the cemented combination remains net negative despite L22's positive power.

The runtime resolves the near-exact J-LASFH21 coordinate match and retains the patent-derived partial dispersion. Supplier identity is not established by that match.

### L22 — Positive Meniscus, Low-Dispersion Member of D2

`nd = 1.45650`, `νd = 90.27`. Glass: **457903 fluorophosphate/ED class (supplier unconfirmed)**. `f = +17.5277 mm`.

L22 is the positive, very-low-dispersion half of D2. The final data carries the patent-derived `dPgF = +0.04303414`. The runtime resolves a compatible H-FK71 catalog curve, but the stored identity remains supplier-unconfirmed.

This element is the Example-7 positive rear element used for condition (9): the patent's own anomalous-dispersion expression evaluates to approximately `0.03957`, within the stated preferred range. The patent explicitly connects that condition to easier secondary-spectrum correction (¶0050). That source statement supports discussing L22 as part of the chromatic strategy; it does not establish an APO classification for the complete lens.

### L23 — Biconvex Positive, Two Aspherical Surfaces

`nd = 1.58313`, `νd = 59.46`. Glass: **583595 BACD12/ZK2 class (supplier unconfirmed)**. `f = +18.9825 mm`.

L23 is a positive double-asphere between the two rear cemented pairs. Surfaces 18A and 19A supply the rear group's only geometric aspheres. Their position gives the design additional nonlinear surface freedom after D2 and before the final cemented pair without adding another moving group.

No specific aberration term is assigned to L23 solely from that placement. The verified statement is that its two aspherical surfaces materially alter the local sag profile at the modeled semi-diameters.

### L24 — Plano-Concave Negative, Cemented Pair D3

`nd = 1.91082`, `νd = 35.25`. Glass: **911353 TAFD35/H-ZLaF4LA class (supplier unconfirmed)**. `f = -15.4186 mm`.

L24 is the negative first member of the final cemented pair. Its object-side face is plano, and its rear surface is the cemented interface into L25. The glass coordinate is the same as L16, so the final data uses the same supplier-unconfirmed class label and `dPgF = -0.00230950`.

L24–L25 together have isolated net focal length `-193.7781 mm`, a weak net-negative value compared with their much stronger individual standalone powers. That near cancellation should not be confused with zero in-situ influence, because the pair operates in a strongly converging rear section of the complete lens.

### L25 — Biconvex Positive, Low-Dispersion Final Element of D3

`nd = 1.49700`, `νd = 81.54`. Glass: **497816 fluorophosphate/ED class (supplier unconfirmed)**. `f = +19.2575 mm`.

L25 is the final powered element. The final data carries the patent-derived `dPgF = +0.03085028`. S-FPL51 is a compatible catalog comparison and the code-based label currently resolves to H-FK61; neither establishes the production supplier.

L25 supplies the Example-7 value for patent condition (10), approximately `0.02791` under Fujifilm's published `θgF` expression. The patent associates this second positive rear low-dispersion position with secondary-spectrum correction (¶0051). As with L22, that is evidence for the intended chromatic strategy, not an APO-performance claim.

## Glass Identification and Selection

The patent publishes `nd`, `νd`, `θgF`, and its own abnormal-dispersion value for each optical material but does not name glass suppliers. The final data consequently stores class/code descriptions rather than asserting proprietary melt identities. The dossier glass review compared the coordinates against authoritative OHARA, HOYA, SCHOTT, HIKARI/Nikon, CDGM, and SUMITA catalogs; selected candidate rows are catalog comparisons only.

| Implemented class/code label | Elements | `nd` | `νd` | `dPgF` | Recorded catalog comparison | Status |
|---|---|---:|---:|---:|---|---|
| 729547 lanthanum-crown class | L11 | 1.72916 | 54.68 | -0.00702824 | CDGM H-LaK52 | exact coordinate/spectral match; supplier unconfirmed |
| 583595 BACD12/ZK2 class | L12, L15, L23 | 1.58313 | 59.46 | -0.00318828 | HOYA MP-BACD12 | exact `nd/νd`; supplier unconfirmed |
| 603655 phosphate-crown class | L13 | 1.60300 | 65.44 | +0.00647008 | OHARA S-PHM53 | near-exact spectral match; supplier unconfirmed |
| 613445 KZFH class | L14 | 1.61266 | 44.46 | -0.00501828 | HIKARI J-KZFH1 | exact coordinate/spectral match; supplier unconfirmed |
| 911353 TAFD35/H-ZLaF4LA class | L16, L24 | 1.91082 | 35.25 | -0.00230950 | HOYA TAFD35 | exact `nd/νd`; supplier unconfirmed |
| H-TF5 coordinate-compatible special-flint proxy | L17 | 1.65410 | 39.54 | -0.00479372 | CDGM H-TF5 | exact coordinate/spectral match; supplier unconfirmed |
| 954323 high-index lanthanum-flint class | L21 | 1.95375 | 32.33 | +0.00117906 | HIKARI J-LASFH21 | near-exact spectral match; supplier unconfirmed |
| 457903 fluorophosphate/ED class | L22 | 1.45650 | 90.27 | +0.04303414 | CDGM H-FK71 | near-exact spectral match; supplier unconfirmed |
| 497816 fluorophosphate/ED class | L25 | 1.49700 | 81.54 | +0.03085028 | OHARA S-FPL51 | exact spectral match; supplier unconfirmed |

The `dPgF` values above are LensVisualizer's Schott-normal-line deviation, not Fujifilm's printed `ΔθgF`. Fujifilm defines `ΔθgF = θgF + 0.001618νd - 0.6415`, whereas the current LensVisualizer field is computed as `dPgF = θgF - (0.6438 - 0.001682νd)`. The raw patent values are preserved in the dossier; the schema field uses the Schott convention so the two definitions are not conflated.

All twelve elements now resolve to coefficient-backed catalog curves, including the newly cataloged CDGM H-TF5 proxy for L17. Catalog-derived `nC/nF/ng` overrides were removed from L13, L14, L21, L22, and L25 so the runtime can use the compatible curve and retain each patent-derived `dPgF` at the g-line. These are spectral proxies, not identified production suppliers.

## Focus Mechanism

Example 7 uses single-element inner focusing. Paragraph ¶0100 and Figure 20 show L15 moving toward the image side from infinity toward close focus, while every other lens remains fixed relative to the image plane.

The patent publishes only the infinity prescription. It does not provide a close-focus L15 displacement, close-focus adjacent air gaps, object distance for the numerical close state, or an intermediate focus law. The production 0.18 m minimum focus distance is a manufacturer specification and does not uniquely solve those internal spacings.

The LensVisualizer focus status is therefore `NO_INTERNAL_RECONSTRUCTION`. The data file contains no `var` endpoints and renders the published infinity prescription for all internal geometry. `closeFocusM = 0.18` is retained only as product metadata; it is not used to invent an optical state.

| State | Source status | Internal prescription in the model |
|---|---|---|
| Infinity | Published in Table 19 | Implemented directly |
| Close focus | Motion direction only; no numerical spacing table | Not reconstructed |

This limitation is intentional. A mechanically plausible translation of L15 would require the two adjacent air gaps to change with opposite signed travel while all other vertices remain fixed, but the available source information does not make the displacement unique.

## Aspherical Surfaces

Example 7 uses six aspherical surfaces on three elements: 3A and 4A on L12, 9A and 10A on L15, and 18A and 19A on L23. Table 21 publishes coefficients through radial order 16 and includes nonzero odd orders. Because `h` is radial magnitude, those odd radial powers remain rotationally symmetric.

Fujifilm writes the conic term as

`Z(h) = C h² / [1 + sqrt(1 - KA C² h²)] + Σ A_m h^m`.

LensVisualizer uses the standard denominator `sqrt(1 - (1+K)(h/R)²)`, so the implemented conversion is `K = KA - 1`. No dimensional scaling is applied; the A coefficients remain at their published Example-7 values.

- **3A:** `K=-4.0000004`; `A4=4.9487091e-4`, `A5=4.9741863e-4`, `A6=-1.6540810e-4`, `A7=1.7519830e-5`, `A8=-4.0747508e-7`, `A9=-1.4731992e-8`, `A10=-4.4813603e-9`, `A11=4.2238580e-10`, `A12=-2.4901866e-11`, `A13=9.5563701e-12`, `A14=-1.3239953e-12`, `A15=7.2564061e-14`, `A16=-1.4450456e-15`.
- **4A:** `K=+0.3330054`; `A4=1.1246059e-3`, `A5=-4.6910840e-4`, `A6=3.9012925e-4`, `A7=-1.4261742e-4`, `A8=2.3303155e-5`, `A9=-1.5623393e-6`, `A10=-2.5013434e-8`, `A11=1.3655424e-8`, `A12=-2.3194237e-9`, `A13=3.4506102e-10`, `A14=-3.0305885e-11`, `A15=1.2811186e-12`, `A16=-1.9371825e-14`.
- **9A:** `K=-1.87313612`; `A4=-1.0196629e-6`, `A5=-9.3998369e-5`, `A6=2.9084823e-5`, `A7=-1.5051023e-6`, `A8=-7.6112222e-7`, `A9=2.9450842e-8`, `A10=2.3172404e-8`, `A11=-3.7382963e-9`, `A12=2.3383099e-9`, `A13=-8.5382189e-10`, `A14=1.3237416e-10`, `A15=-9.4528830e-12`, `A16=2.6075998e-13`.
- **10A:** `K=-4.0000000`; `A4=2.2546535e-4`, `A5=-3.6192300e-4`, `A6=1.6675347e-4`, `A7=-2.7532931e-5`, `A8=-3.2221691e-6`, `A9=1.5778332e-6`, `A10=-5.6592891e-8`, `A11=-3.7290165e-8`, `A12=4.8360862e-9`, `A13=-4.6760331e-11`, `A14=-1.0578917e-11`, `A15=-1.3117822e-12`, `A16=1.2124261e-13`.
- **18A:** `K=+3.9989554`; `A4=2.6245673e-4`, `A5=-2.7458410e-4`, `A6=1.0938223e-4`, `A7=-1.8437536e-5`, `A8=-1.0204552e-6`, `A9=6.2231054e-7`, `A10=1.1160608e-8`, `A11=-6.7426950e-9`, `A12=-5.3228796e-9`, `A13=1.5553671e-9`, `A14=-1.6347919e-10`, `A15=7.2844763e-12`, `A16=-1.0256516e-13`.
- **19A:** `K=+0.1376218`; `A4=4.6484978e-5`, `A5=1.4308724e-4`, `A6=-1.1163781e-4`, `A7=3.8111592e-5`, `A8=-5.8248842e-6`, `A9=-1.8944463e-8`, `A10=9.8547972e-8`, `A11=-8.8876089e-10`, `A12=-1.2437786e-9`, `A13=-2.3619694e-10`, `A14=8.3049095e-11`, `A15=-7.8530735e-12`, `A16=2.6121335e-13`.

The patent does not publish clear apertures, so asphere departures cannot be quoted at source-verified semi-diameters. At the modeled semi-diameters, the verified departure from the corresponding sphere is `+2.87724 mm` at 3A (`sd=10.1 mm`), `+1.00171 mm` at 4A (`8.3 mm`), `-0.3977 mm` at 9A (`8.0 mm`), `-0.2700 mm` at 10A (`7.9 mm`), `+0.17158 mm` at 18A (`7.5 mm`), and `+0.34839 mm` at 19A (`7.8 mm`). These are model-aperture values, not published manufacturing clear-aperture data.

No manufacturing process for the aspheres is established by the patent record used here, so the analysis does not label them molded, polished, hybrid, or otherwise.

## Chromatic Correction Strategy

The strongest source-grounded chromatic feature is the rear group's use of two positive low-dispersion elements with positive abnormal-partial-dispersion values: L22 and L25. Fujifilm's patent explicitly defines conditions (9) and (10) around such rear positive elements and states that the ranges make correction of secondary chromatic spectrum easier (¶0050–¶0051).

For Example 7, the patent-condition values are approximately `0.03957` for L22 and `0.02791` for L25. The final LensVisualizer schema additionally stores Schott-normal-line `dPgF` values of `+0.04303414` and `+0.03085028`, respectively. Those two conventions must not be substituted for one another.

L22 is cemented to the high-index negative L21, and L25 is cemented to the high-index negative L24. This pairing gives each low-dispersion positive element a local negative partner, but the analysis does not infer a complete achromatization balance from `nd`, `νd`, and power signs alone. The full lens does not have complete explicit line indices for every element, and no apochromatic performance claim is made.

## Conditional Expressions

JP 2023-001878 A lists sixteen conditional expressions and Table 22 gives corresponding values for Examples 1–7. The final verifier recomputes the applicable Example-7 quantities from the parsed final prescription and preserves the patent's discrepancies rather than silently correcting them.

| Cond. | Printed expression | Example-7 Table 22 | Verification / interpretation |
|---:|---|---:|---|
| 1 | `1 < H/(f tan ωm) < 1.8` | 1.145 | A fresh exact source-geometry trace solves the 62.2° stop-center chief ray at `H = 17.8280 mm`, giving `1.144762`; this reproduces the printed value at its precision. |
| 2 | `3.1 < TL/(f tan ωm) < 5.2` | 4.363 | Recomputed `4.362780`; PASS at printed precision. |
| 3 | `52 < ωm < 74` | 62.2 | Recomputed/published `62.2°`; PASS. |
| 4 | `0.2 < ff/fr < 2` | 0.268 | Recomputed `0.268481`; PASS. |
| 5 | `1.3 < (R1f+R1r)/(R1f-R1r) < 4.2` | 1.82686 | Recomputed `1.826856`; PASS. |
| 6 | `-1 < (R2r-R3f)/(R2r+R3f) < 0.3` | -1.00000 | Reproduces the printed value exactly, but that value is the strict lower endpoint and therefore does not satisfy the printed strict inequality. This condition is optional/preferred rather than part of the principal (1)–(3) requirement. |
| 7 | `1 < f/fr < 7` | 4.802 | Printed formula gives `0.208236` and fails. The reciprocal `fr/f = 4.802253` matches Table 22, indicating a formula/table reciprocal inconsistency. |
| 8 | `16 < νfp < 42` | 39.54 | Recomputed `39.54`; PASS. |
| 9 | `0.01 < θgFrp1 + 0.001618νrp1 - 0.6415 < 0.1` | 0.03957 | Recomputed `0.03955686`; PASS with source-input precision allowance. |
| 10 | `0.01 < θgFrp2 + 0.001618νrp2 - 0.6415 < 0.1` | 0.02791 | Recomputed `0.02793172`; PASS with source-input precision allowance. |
| 11 | `1.75 < Nrn1 < 2.2` | 1.95375 | Recomputed `1.95375`; PASS. |
| 12 | `1.8 < Nrn2 < 2.2` | 1.91082 | Recomputed `1.91082`; PASS. |
| 13 | `1.2 < Ds/(f tan ωm) < 2.8` | 2.135 | Recomputed `2.134966`; PASS. |
| 14 | `1 < f/|fa| < 20` | 6.450 | Printed formula gives `0.155023` and fails. The reciprocal `|fa|/f = 6.450649` matches Table 22, again indicating a reciprocal inconsistency. |
| 15 | `0.3 < Ds/TL < 0.6` | 0.489 | Recomputed `0.489359`; PASS. |
| 16 | `0.70 < Bf/(f tan ωm) < 1.4` | 0.745 | Recomputed `0.745171`; PASS using the documented source/reference-plane treatment. |

Conditions (7) and (14) are therefore retained as source discrepancies: the table values are not rewritten into the patent's formulas, and the raw formula comparisons remain failures in the audit record. Condition (1) is independently reproduced by the source-geometry stop-center chief ray. Condition (6) is reproduced but sits exactly on the excluded lower bound as printed.

## Verification Summary and Model Limitations

The final parsed data reproduces the published infinity first-order design within source precision. Independent matrix and scalar height/reduced-angle calculations give EFL `8.211393 mm` versus Table 20's `8.211 mm`, and cardinal BFL `11.604449 mm` versus `11.604 mm`. The surface-by-surface Petzval sum, accumulated as `φ/(n·n′)`, is `0.01463110 mm⁻¹`.

The source's generic rear parallel plate PP is omitted because it represents optional filters and/or cover glass (¶0035), which are outside the active LensVisualizer prescription. Its path is replaced by the verified air-equivalent distance

`8.622 + 2.850/1.51680 + 1.104 = 11.604955696 mm`.

That substitution is paraxially exact for the plane plate, but not exactly equivalent at finite ray angle. Representative exact meridional tests found a maximum sampled image-intercept difference of about `0.02907 mm` between the raw plate chain and the air-equivalent model at the extreme field sample. The model therefore does not claim exact off-axis equivalence after PP removal.

The patent publishes no clear apertures. Every surface semi-diameter in the data file is consequently a modeling value derived from exact d-line meridional ray envelopes and the qualitative taper of Figure 20, then checked for element edge thickness, actual rim slope, conic domain, shared-band gap intrusion, and sampled off-axis containment. The 2026-09-14 figure review enlarged L13–L15 toward Figure 20: surfaces 5/6 are 10.5/9.2 mm, 7/8 are 7.6/7.1 mm, and 9A/10A are 8.0/7.9 mm. The L13 rear rim and L14 apertures stop short of the drawn blank because larger values violate rim slope or shared-gap clearance. The independent source-geometry trace also requires the modeled front apertures to contain the independently reconstructed maximum-field stop-center chief ray. They are not source-published clear apertures or production mechanical drawings.

The physical stop size is likewise inferred. The stop position is source-published, but its `sd` is calibrated to f/3.60. Pupil sizes and the exact modeled f-number therefore inherit that calibration and are not independent aperture measurements.

The maximum-field chief ray can be reconstructed without assuming the unpublished physical stop diameter: the stop-center ray is defined by the published stop plane. A fresh exact trace of the 62.2° field solves `H = 17.8280 mm` at the surface-1 vertex plane and gives condition (1) = `1.144762`, consistent with Table 22's `1.145`. The unknown clear apertures still prevent treating the modeled semi-diameters as production dimensions, and the calibrated stop size remains an independent limitation.

## Sources and References

1. **Japan Patent Office.** JP 2023-001878 A, *撮像レンズ及び撮像装置*, published 2023-01-06. Example 7: ¶0100–¶0106; Tables 19–22; Figure 20 on patent p. 38. General conventions and design discussion: ¶0029–¶0030, ¶0035–¶0068. Source file in dossier: `JP2023001878A.pdf`.
2. **FUJIFILM.** “XF8mmF3.5 R WR Specifications.” https://www.fujifilm-x.com/en-us/products/lenses/xf8mmf35-r-wr/specifications/
3. **FUJIFILM Corporation.** “Fujifilm Launches FUJINON Lens XF8mmF3.5 R WR,” 2023-05-24. https://www.fujifilm.com/be/en/news/Fujifilm_Launches_FUJINON_LensXF8mmF3.5_R_WR
4. **OHARA.** *Optical Glass Pocket Catalog*, 2023-05, used for the recorded S-PHM53 and S-FPL51 coordinate/spectral comparisons. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
5. **HIKARI GLASS / Nikon.** *HIKARI Optical Glass Catalog*, used for the recorded J-KZFH1 and J-LASFH21 comparisons. https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
6. **Chengdu Guang Ming (CDGM).** Optical Glass Database and H-FK71 data sheet, used for the recorded H-LaK52, H-TF5, and H-FK71 comparisons. https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
7. **HOYA.** Optical glass catalog data, used for the recorded MP-BACD12 and TAFD35 coordinate comparisons. https://www.hoya-opticalworld.com/english/news/past01.html
8. **SCHOTT.** *Optical Glass — Collection of Formulas and Wavelength Table*, used for the LensVisualizer Schott-normal-line `dPgF` convention. https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d
