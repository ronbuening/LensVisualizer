## Patent Reference and Design Identification

**Patent:** GB 2 066 504 A  
**Application Number:** 8041138  
**Priority:** DD 218196, 28 December 1979  
**Filed:** 23 December 1980  
**Published:** 8 July 1981  
**Inventors:** Eberhard Dietzsch; Heinz-Dietrich Siegert; Erich Greiner  
**Applicant:** VEB Carl Zeiss Jena  
**Title:** Double Gauss type photo objective lens system  
**Embodiment analyzed:** Example 4 / Table 4 / Claim 5

This prescription is taken from Example 4 of GB 2 066 504 A. Table 4 gives a normalized focal length `f = 1`, relative aperture 1:1.4, image-side back-focal distance `s′ = 0.732`, and full field `2σ = 46°`; Claim 5 explicitly selects the Table 4 construction. The patent states that its refractive-index data are `ne` values at the green mercury e line, nominally 546 nm, with corresponding `νe` Abbe numbers. [GB 2 066 504 A, PDF pp. 4, 8–9; printed pp. 2, 6–7.]

The implemented model applies a uniform scale of 50.0 mm per source unit. The resulting Gaussian e-line focal length is **49.994722 mm**, rather than being forced to exactly 50 mm, so the patent table's rounding residual is preserved. The production identity used by the data file is **CARL ZEISS JENA PRAKTICAR 50mm f/1.4**. A Carl Zeiss Jena/JENOPTIK technical brochure lists a PRAKTICAR 1.4/50 for the PRAKTICA-B 24×36 mm system with a marketed 45° field and 0.36 m minimum focusing distance. The patent example instead has a 46° design field. Those values are kept separate rather than reconciled as if they were identical. [JENOPTIK JENA GmbH · DDR, *Essential technical data of the PRAKTICAR lenses from JENA*, Publication 54-362a-2, pp. 1–4.]

The production correlation is strong but inferential. The evidence converges on several points:

1. Example 4 is an f/1.4 normal-lens prescription normalized to `f = 1`; the manufacturer product is a 50 mm f/1.4 lens.
2. The numerical prescription is 7 elements in 6 air-separated groups, matching the reported early PRAKTICAR 1.4/50 construction.
3. The patent's 46° full field closely brackets the manufacturer's 45° marketed field for the 24×36 mm PRAKTICA-B system.
4. The patent dates are compatible with the secondary historical chronology, and that secondary source attributes the early PRAKTICAR 1.4/50 form to Dietzsch and Siegert, both named inventors on the patent.

No primary manufacturer source located for this dossier explicitly identifies **Example 4** as the exact production prescription. The fixed job-card word “Planar” is therefore not treated as a manufacturer-verified product designation; the manufacturer brochure uses **PRAKTICAR**.

## Optical Architecture

The patent itself describes the objective as a **Double Gauss type** high-speed SLR lens. The numerical table contains **seven physical glass elements in six air-separated groups**. The front half comprises two positive menisci followed by a negative meniscus; the rear half begins with a cemented negative/positive pair and ends with two positive elements. The central aperture space separates the front and rear halves. [GB 2 066 504 A, PDF pp. 1–4, Fig. 1 and specification text.]

The prescription is entirely spherical: the selected example publishes no aspherical sag terms or diffractive phase data, and the implemented `asph` object is empty.

The patent's figure and prose label only `L1` through `L6`, whereas Table 4 contains seven positive glass thicknesses `d1` through `d7`. The implemented model follows the unambiguous numerical media transitions instead of deleting or merging a thickness: the interface corresponding to source `r8` is a cemented E4→E5 junction. This gives the data model seven elements and six groups while preserving the source-label inconsistency as an explicit limitation.

The complete implemented optical track from the first to the thirteenth refracting surface is **46.675 mm**. Its best paraxial back focal distance from surface 13 is **36.619597 mm**, while the authored rear image spacing remains the scaled source value **36.600 mm**. The difference, +0.019597 mm, is retained as source rounding rather than absorbed into the prescription.

The standalone powers must not be confused with in-system group behavior. In particular, E5 is positive when considered by itself in air (`f ≈ +37.009 mm`), but the cemented E4+E5 member is net negative in the actual sequence, with an in-situ focal length of approximately **−79.685 mm**. The front E1–E3 block is net positive (`f ≈ +151.567 mm`), while the complete E4–E7 rear block is more strongly positive (`f ≈ +39.374 mm`). These are first-order power descriptions, not claims that any one member alone controls a particular aberration.

The aperture stop is not dimensioned by the patent. Figure 1 places it within the large source `l3` air space between source surfaces `r6` and `r7`. The model therefore preserves the scaled total gap of **15.975 mm** but places the stop by inference at a 60/40 split: **9.585 mm** after surface 6 and **6.390 mm** before surface 7. Its **11.903202 mm** semi-diameter was calibrated so that the modeled entrance pupil reproduces the patent's f/1.4 target; it is not a published diaphragm measurement.

No semi-diameters are published. The data file's clear radii are modeled values derived from ray-envelope work and checked against the current geometry policy. They should be read as a verified visualization/tracing model, not as factory clear-aperture dimensions.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**`ne = 1.6810`, `νe = 54.7`. Glass: K-LaK12 / 678555 coordinate class; historical supplier or melt not established. Standalone `f = +73.434 mm`.**

L1 is the first positive member. The patent specifically emphasizes the first lens's comparatively strong spherical form as part of the claimed architecture, using the condition that its first radius be less than 85% of the overall objective length. In the final model the corresponding ratio is **0.764649**, satisfying that condition. [GB 2 066 504 A, PDF pp. 3 and 9; Claim 1.]

K-LaK12 is a coordinate-compatible dispersion proxy. The source itself supplies only the native e-line coordinate, not a manufacturer glass name or melt designation.

### L2 — Positive Meniscus

**`ne = 1.7007`, `νe = 46.7`. Glass: LAFN2 coordinate-compatible dispersion proxy; historical supplier unconfirmed. Standalone `f = +277.380 mm`.**

L2 is a very weak positive element relative to L1: its standalone absolute power is about 26.5% of L1's. The patent's second-lens condition also requires its two radii to differ by less than 10%; the implemented geometry gives **4.6826%** under the conservative smaller-radius normalization. [GB 2 066 504 A, PDF pp. 3 and 9; Claim 1.]

The shared catalog’s discontinued SUMITA LAFN2 curve passes the native e-line coordinate guard and is used as an approximate spectral proxy. Its evaluated e-line Abbe number differs by +1.475; this does not identify the production glass.

### L3 — Negative Meniscus

**`ne = 1.7462`, `νe = 27.9`. Glass: S-TIH3 coordinate class (OHARA); historical supplier or melt not established. Standalone `f = −62.169 mm`.**

L3 is the negative member that completes the object-side three-element block. Its current-catalog coordinate comparison is close to OHARA S-TIH3 (`ne = 1.74617`, `νe = 28.07`), but that agreement is evidence of a compatible optical-glass class rather than proof that the historical lens used OHARA glass.

The element follows the thin meniscus-shaped air space between L2 and L3 that the patent calls out separately; that air-space geometry is discussed below.

### L4a — Negative Meniscus, Front Component of Cemented Pair D1

**`ne = 1.7617`, `νe = 27.3`. Glass: 755275 coordinate class, compatible with OHARA S-TIH4 / SUMITA K-SFLD4; supplier or melt not established. Standalone `f = −21.821 mm`.**

L4a is the strongly negative first component of the rear cemented pair. The shared cemented interface is source `r8` / data surface 8. The numerical table changes glass across that surface without an intervening air space, so the interface is assigned to the downstream E5 medium in the data model.

Its standalone power is much stronger than that of L4b, but the relevant physical object is the cemented pair. The verified E4+E5 in-situ combination is net negative (`f ≈ −79.685 mm`), which is distinct from the focal length of either component considered separately in air.

### L4b — Positive Meniscus, Rear Component of Cemented Pair D1

**`ne = 1.7762`, `νe = 49.4`. Glass: 773496 coordinate class, compatible with SCHOTT N-LAF34 / SUMITA K-LaSFn7; supplier or melt not established. Standalone `f = +37.009 mm`.**

L4b is the positive component cemented directly to L4a. Because the patent's `L1`–`L6` labels do not map one-to-one to all seven glass thicknesses, the `L4a` / `L4b` notation is an implementation label used to preserve the actual Table 4 media sequence; it is not a correction to the patent's wording.

The 773496-class assignment is based on the native e-line coordinate match. It does not establish the historical supplier, and no catalog spectral line data from a modern equivalent are copied into the element as though they were patent-published melt data.

### L5 — Positive Meniscus

**`ne = 1.7762`, `νe = 49.4`. Glass: 773496 coordinate class, compatible with SCHOTT N-LAF34 / SUMITA K-LaSFn7; supplier or melt not established. Standalone `f = +57.195 mm`.**

L5 is an air-separated positive rear element using the same published e-line coordinate pair as L4b and L6. In first-order terms it contributes to the positive rear block, but the patent does not assign a unique aberration-correction role to this element alone, so the analysis does not infer one from power sign or glass class.

### L6 — Biconvex Positive

**`ne = 1.7762`, `νe = 49.4`. Glass: 773496 coordinate class, compatible with SCHOTT N-LAF34 / SUMITA K-LaSFn7; supplier or melt not established. Standalone `f = +82.265 mm`.**

L6 is the final positive element before the image space. The scaled source rear spacing after its second surface is **36.600 mm**; the independently recomputed best paraxial BFD is **36.619597 mm**. Keeping those values separate preserves the finite precision of the patent table.

## Glass Identification and Selection

Native e-line coordinates are preserved; catalog curves are evaluated at C′/e/F′. Six-digit d-line codes alone do not resolve these elements.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.681 / 54.7 (e) | K-LaK12 |
| L2 | 1.7007 / 46.7 (e) | LAFN2 |
| L3 | 1.7462 / 27.9 (e) | S-TIH3 |
| L4a | 1.7617 / 27.3 (e) | S-TIH4 |
| L4b | 1.7762 / 49.4 (e) | N-LAF34 |
| L5 | 1.7762 / 49.4 (e) | N-LAF34 |
| L6 | 1.7762 / 49.4 (e) | N-LAF34 |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. All seven elements now have catalog dispersion proxies; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

The missing K-LaK12 curve is supplied by the [official SUMITA datasheet](https://www.sumita-opt.co.jp/abbe/pdf/k-lak12.pdf), using its published A0–A5 polynomial. Its e-line coordinates are 1.68082 / 55.2, compatible with L1 at 1.6810 / 54.7.

## Focus Mechanism

The selected patent embodiment publishes only one optical prescription state and no focus-spacing table. The implemented focus status is therefore **NO_INTERNAL_RECONSTRUCTION**. No `var` gaps are authored, and no internal motion law is inferred from the product's minimum focusing distance.

The manufacturer brochure's **0.36 m** minimum focusing distance is retained as production metadata only. It does not establish whether the manufactured lens focuses by pure unit extension or by any internal relative motion, nor does it determine a close-focus prescription. The model should therefore be read as the patent's nominal optical state, not as a reconstructed focus trajectory.

## Air Lenses

The patent explicitly describes the air space between the second and third lenses as a **thin diverging meniscus** and presents that geometry as part of the design concept. In the scaled model this is the **1.010 mm** air gap between surfaces 4 and 5. The source says the shape permits close placement of the adjacent lenses and discusses it together with mounting and correction considerations. [GB 2 066 504 A, PDF p. 3, specification text.]

This statement is kept at the level supported by the patent. The analysis does not assign a separate computed aberration budget to that air lens because the available verification is first-order plus exact geometric ray containment, not a decomposition of third-order or full-field aberration contributions element by element.

## Conditional Expressions

Claim 1 defines several quantitative restrictions for the design family. Recomputed from the final implemented prescription, the applicable conditions are:

| Patent condition | Final-model result | Disposition |
|---|---:|---|
| `BFD / EFL ≥ 0.72` | 0.732469 | Satisfied |
| Mean `ne` of first two lenses `< 1.7` | 1.690850 | Satisfied |
| Mean `ne` of collective lenses `< 1.75` | 1.733525 or 1.742060 under the two recorded source-label interpretations | Satisfied under both |
| First radius / optical track `< 0.85` | 0.764649 | Satisfied |
| Difference between the second lens's two radii `< 10%` | 4.6826% | Satisfied |

The two collective-lens averages are both reported because the patent's image-side `L4`/`L5`/`L6` nomenclature is inconsistent with the seven tabulated glass thicknesses. The condition passes either plausible assignment, so the result does not depend on silently resolving that source-label problem. [GB 2 066 504 A, PDF p. 9, Claim 1.]

## Verification Summary

The final parsed data file produces an e-line Gaussian EFL of **49.994722 mm**, an optical track of **46.675 mm**, and a best paraxial BFD of **36.619597 mm**. The authored image spacing remains the scaled patent value **36.600 mm**. Direct height/reduced-angle tracing and a separately assembled ABCD matrix agree within the Stage 2 numerical tolerance.

The surface-by-surface Petzval sum, calculated as `φ/(n·n′)` at each of the thirteen refracting interfaces, is **0.003188598 mm⁻¹**, corresponding to a Petzval radius of approximately **313.617 mm**. The neutral stop plane contributes no refracting power.

The inferred stop gives an entrance-pupil semi-diameter of **17.855258 mm** and a modeled f-number of **1.400000005**. This agreement is intentionally labeled a calibration: the stop diameter was chosen to reproduce the patent's f/1.4 target, so it is not independent evidence for a production diaphragm diameter.

The revised model passes the repository surface and image-circle audits. Exact on-axis rays sampled through the full modeled entrance pupil pass the authored apertures. The earlier dossier’s 19-ray off-axis sample is not treated as validation of the revised rear rim; full-field pupil illumination remains unproven.


## Sources and References

1. **GB 2 066 504 A**, *Double Gauss type photo objective lens system* / specification heading *High power lens system for single lens reflex cameras*, VEB Carl Zeiss Jena; filed 23 December 1980; published 8 July 1981. Relevant locations: front page; Fig. 1 on PDF p. 2; specification on PDF pp. 3–4; Table 4 on PDF p. 8; claims on PDF p. 9.
2. **JENOPTIK JENA GmbH · DDR**, *Essential technical data of the PRAKTICAR lenses from JENA*, Publication No. 54-362a-2, especially pp. 1, 2, and 4. Archival copy: https://prakticar-user.de/wp-content/uploads/2024/11/88140.pdf
3. **OHARA Corporation**, *Optical Glass Pocket Catalog 2023-05*. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
4. **SCHOTT**, *Optical Glass Collection Datasheets* (N-LAF34 data used for coordinate comparison). https://www.us.schott.com/shop/medias/schott-optical-glass-collection-datasheets-english-us-march2018.pdf
5. **SUMITA Optical Glass, Inc.**, *Optical Glass Data Book*, Glass Data Version 14.02, revision 21 August 2026 (K-LaK12, K-SFLD4, K-LaSFn7 coordinate comparisons). https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf
6. **Digicamclub**, “Die Carl Zeiss Jena Prakticar Objektive zur Praktica B,” secondary historical correlation source for early PRAKTICAR 1.4/50 designers/timing. https://www.digicamclub.de/showthread.php?mode=threaded&p=239419&t=21342

## Catalog dispersion follow-up

The following curves are approximate spectral proxies within the catalog coordinate guard, not identified production glasses. Source indices, Abbe numbers, and reference lines are unchanged. Differences below are catalog minus patent; no catalog line indices or APD claims are copied into the prescription. The curve coefficients and vendor provenance are retained in the shared glass catalog.

| Element | Patent index / Abbe | Runtime curve | Δn | Δν |
|---|---|---|---|---|
| L2 | 1.7007 / 46.7 (e) | LAFN2 | -0.000279 | 1.475 |

The final L6 element now uses a 15.3 mm inferred semi-diameter on both faces, measured from Fig. 1 (previously 19 mm). Source-label annotations consistently use L1, L2, L3, L4a, L4b, L5, and L6. The revised rim passes the surface and image-circle audits and the sampled full on-axis pupil; this does not establish full-pupil edge-field illumination.
