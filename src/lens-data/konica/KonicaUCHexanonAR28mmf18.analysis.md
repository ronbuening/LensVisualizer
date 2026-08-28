## Patent Reference and Design Identification

**Patent:** JP1976-026535 (特開昭51-26535)\
**Application Number:** 昭49-99518\
**Filed:** 1974-08-30\
**Published:** 1976-03-04\
**Inventor:** Toshiko Shimokura\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** 近距離撮影時の収差補正手段をもったレトロフォーカス型レンズ系 — retrofocus-type lens system with aberration-correction means for close-distance photography\
**Embodiment analyzed:** Example 1

The prescription is the selected production correlation for the **KONICA UC HEXANON AR 28mm f/1.8**. The patent is the numerical authority for the optical design, while surviving Konica product literature supplies the marketed identity and specifications. The available manufacturer literature does not state that Example 1 is the released production prescription, so the correlation is treated as the fixed project identification rather than as manufacturer-confirmed identity.

Several features converge on that identification:

1. Example 1 contains eight air-separated elements, matching the production lens's published **8-element / 8-group** construction.
2. The patent is normalized to `f = 1`; the data model applies a uniform scale of **s = 28.0**, corresponding to the production **28 mm** focal-length designation. The resulting paraxial EFL from the rounded patent table is **28.158466 mm**, so the marketed 28 mm value remains separate from the design result.
3. Example 1 gives **F2** and **2ω = 76°**. Konica literature markets the production lens as **f/1.8** with a **75°** angle of view. These values are close in field coverage but the aperture mismatch is real and is not reconciled by changing the patent model.
4. The patent explicitly varies the spacing on both sides of the L2–L4 middle section for close-distance aberration correction. Konica product literature separately describes a floating element/system and gives a minimum focus of **0.18 m (7.1 in) from the film plane**.
5. The Konica AR system is a 35 mm SLR system; the Autoreflex T4 manufacturer manual specifies a **24 × 36 mm** frame. The data therefore uses the canonical `konica-ar` mount and `135-full-frame` image format.

The patent's Example 1 table is retained exactly apart from a uniform dimensional scale. All radii and axial spacings are multiplied by 28.0; refractive indices and Abbe numbers are unchanged. The design is entirely spherical, so there are no aspheric coefficients to transform under the scale operation.

## Optical Architecture

Example 1 is a retrofocus wide-angle design with **8 elements in 8 air-spaced groups** and **16 refracting surfaces**. The patent describes three functional sections rather than eight functional power groups: a single negative front meniscus L1, a positive-negative-positive middle section L2–L4, and a multi-element rear section L5–L8 containing the aperture stop region. Figure 1 of the patent places the iris between L5 and L6, inside the source spacing `d10`.

Independent first-order tracing of the final data arrays gives an EFL of **28.158466 mm** and a back focal length of **38.352725 mm**. The ratio `BFL/EFL = 1.362032` exceeds unity, satisfying the project's retrofocus criterion. The first-surface-to-paraxial-image track is much longer than the EFL (`TL/EFL = 3.599469`), so the design does not satisfy the project's telephoto criterion.

The isolated functional-section powers clarify the architecture without assigning in-situ power contributions:

| Functional section | Elements | Isolated EFL | Interpretation |
|---|---|---:|---|
| Front | L1 | −63.3599 mm | Negative front section that establishes the retrofocus power distribution |
| Middle floating section | L2–L4 | +89.5519 mm | Net-positive positive/negative/positive block translated for close-distance correction |
| Rear | L5–L8 | +38.7645 mm | Net-positive rear imaging section containing the iris between L5 and L6 |

These EFLs are calculated for each section isolated with its internal spacings. They are not equivalent to the sections' marginal contributions when embedded in the complete lens.

The defining mechanical-optical feature is the rigid translation of L2–L4 relative to L1 and L5. At the patent's published `M = 1/6` state, the air gap ahead of L2 increases by the same amount that the gap behind L4 decreases. The internal spacings of L2–L4 do not change, so the section translates as a block while preserving the total L1-to-L5 axial distance at the printed precision.

The data model contains no cemented interfaces, filters, sensor cover glass, inactive dummy planes, flare cutters, or folded-path surfaces. No omitted plate requires an air-equivalent rear-spacing correction.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.58913, νd = 61.1.` Glass: **S-BAL35 catalog-equivalent coefficient proxy (patent 589611; production supplier unspecified)**. `f = −63.3599 mm` standalone in air.

L1 is the patent's front negative meniscus, convex toward the object. It forms the entire front functional section and supplies the negative front power required by the retrofocus arrangement. The patent explicitly constrains the front-group focal length with `2f < |f_n| < 4f` and `f_n < 0`; the final prescription satisfies that condition.

Its standalone focal length is a property of L1 isolated in air. In the complete system its effect also depends on the large spacing to the positive middle section and cannot be interpreted as a simple additive contribution to the 28.158 mm system EFL.

### L2 — Biconvex Positive

`nd = 1.64769, νd = 33.8.` Glass: **E-FD2 catalog-equivalent coefficient proxy (patent 648338; production supplier unspecified)**. `f = +88.7137 mm` standalone in air.

L2 begins the L2–L4 floating section. Its positive power is followed by the negative meniscus L3 and positive meniscus L4, producing a net-positive three-element block. Because the patent changes only the air spaces before L2 and after L4, L2 moves rigidly with L3 and L4 in the published close-distance correction state.

The relatively low Abbe number identifies a high-dispersion coordinate class, but the patent supplies no line-index or partial-dispersion data that would justify a claim of anomalous dispersion or a specific historical catalog glass.

### L3 — Negative Meniscus

`nd = 1.58913, νd = 61.1.` Glass: **S-BAL35 catalog-equivalent coefficient proxy (patent 589611; production supplier unspecified)**. `f = −38.4795 mm` standalone in air.

L3 provides the strong negative member inside the otherwise net-positive floating block. It uses the same published `nd/νd` pair as L1 but has substantially stronger standalone negative power because of its curvature and thickness. The combination of positive L2, negative L3, and positive L4 lets the moving section remain net positive while retaining substantial internal power balance.

No cement is present: L3 is air separated from both L2 and L4.

### L4 — Positive Meniscus

`nd = 1.72000, νd = 50.3.` Glass: **LAC10 catalog-equivalent coefficient proxy (patent 720503; production supplier unspecified)**. `f = +42.8077 mm` standalone in air.

L4 completes the positive-negative-positive floating section. Its rear air gap to L5 is one of the two patent-published spacings that changes at `M = 1/6`; the corresponding front gap is the L1-to-L2 spacing. The equal and opposite changes make the L2–L4 section translate toward the rear of the lens by **0.9996 mm** after the ×28 scale is applied.

The element's high index and moderate Abbe number are retained exactly as published. The vendor-neutral glass label in the data is intentionally less specific than the modern catalog coordinate matches found during the glass audit.

### L5 — Plano-Convex Positive

`nd = 1.71300, νd = 53.9.` Glass: **LAC8 catalog-equivalent coefficient proxy (patent 713539; production supplier unspecified)**. `f = +45.1063 mm` standalone in air.

L5 begins the rear functional section. Its front face is plane and is a real refracting surface, not a dummy plane. The patent drawing places the iris immediately behind L5, inside the air gap before L6.

The patent does not give the iris station numerically. The data therefore inserts the required `STO` plane by figure-based inference within this gap; the stop placement is a model coordinate and is not attributed to the numerical prescription table.

### L6 — Biconcave Negative

`nd = 1.80518, νd = 25.4.` Glass: **S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)**. `f = −20.0467 mm` standalone in air.

L6 is the strongest negative standalone element in Example 1 and sits immediately behind the modeled stop. It supplies a large negative term inside a rear section that remains strongly positive as a whole because L5, L7, and L8 are positive.

Its combination of high refractive index and low Abbe number provides substantial dispersion contrast relative to the neighboring positive elements. That statement concerns the published d-line/Abbe coordinates only; the available data are insufficient to characterize anomalous partial dispersion or apochromatic behavior.

### L7 — Positive Meniscus

`nd = 1.69680, νd = 55.7.` Glass: **K-LaK14 catalog-equivalent coefficient proxy (patent 697557; production supplier unspecified)**. `f = +41.7060 mm` standalone in air.

L7 restores positive power after L6 and forms the penultimate positive member of the rear section. The thin air spacing between L6 and L7 makes the opposed surface geometry important to the physical clear-aperture model; nevertheless, its optical prescription itself is taken directly from the patent without alteration.

The stored glass identity remains a coordinate class rather than a vendor attribution, consistent with the absence of a historical glass name in the source.

### L8 — Biconvex Positive

`nd = 1.78590, νd = 44.2.` Glass: **S-LAH51 catalog-equivalent coefficient proxy (patent 786442; production supplier unspecified)**. `f = +44.1725 mm` standalone in air.

L8 is the final positive element and completes the net-positive rear section. Its strong biconvex form works with L7 after the negative L6 to bring the system to the long back-focus condition required by the retrofocus architecture.

The final surface is followed by the patent's published back-focus spacing, scaled to **38.36 mm** in the data. Independent tracing of the rounded table gives **38.352725 mm**, a difference of about **−0.0073 mm** from that source-scaled value.

## Glass Identification / Selection

The patent supplies seven distinct `nd/νd` coordinate pairs for eight elements; L1 and L3 share one pair. It does not identify a glass maker, historical catalog designation, `nC`, `nF`, `ng`, `PgF`, or `dPgF`. Each row is now paired with an already-cataloged, coordinate-compatible dispersion curve solely as a coefficient proxy. These labels leave the historical production supplier and melt unspecified.

| Stored glass annotation | nd | νd | Elements | Data-level interpretation |
|---|---:|---:|---|---|
| S-BAL35 coefficient proxy (patent 589611) | 1.58913 | 61.1 | L1, L3 | Shared crown-class coordinate pair |
| E-FD2 coefficient proxy (patent 648338) | 1.64769 | 33.8 | L2 | Higher-dispersion positive member of the floating section |
| LAC10 coefficient proxy (patent 720503) | 1.72000 | 50.3 | L4 | High-index crown-class positive member |
| LAC8 coefficient proxy (patent 713539) | 1.71300 | 53.9 | L5 | High-index crown-class rear positive |
| S-TIH6 coefficient proxy (patent 805254) | 1.80518 | 25.4 | L6 | Very high-index, high-dispersion rear negative |
| K-LaK14 coefficient proxy (patent 697557) | 1.69680 | 55.7 | L7 | High-index, lower-dispersion rear positive |
| S-LAH51 coefficient proxy (patent 786442) | 1.78590 | 44.2 | L8 | High-index final positive |

The selected curves stay inside the runtime compatibility window of approximately `Δn = ±0.003` and `Δν = ±2`; most are much closer and several share the patent's rounded six-digit coordinate. They improve spectral tracing without promoting a modern vendor name to a historical Konishiroku identity.

Because the modeled elements contain only `nd` and `νd`, chromatic interpretation is limited to Abbe-level dispersion contrast. No APO, anomalous-partial-dispersion, or secondary-spectrum claim is made.

## Focus Mechanism

The patent's close-distance correction is a **floating middle-section translation**. L2–L4 move together while L1 and the L5–L8 rear section retain their relative source positions in the published comparison. At `M = 1/6`, only the two air spaces that bound L2–L4 change:

| Gap | Infinity | Patent `M = 1/6` | Change after ×28 scale |
|---|---:|---:|---:|
| L1 → L2 (`d2`) | 7.0504 mm | 8.0500 mm | +0.9996 mm |
| L4 → L5 (`d8`) | 4.3288 mm | 3.3292 mm | −0.9996 mm |
| Sum | 11.3792 mm | 11.3792 mm | 0.0000 mm |

This motion translates the complete L2–L4 block rearward by **0.9996 mm** without changing its internal separations. The patent presents the state as a close-distance aberration-correction condition and labels it `M = 1/6`.

The production literature gives a minimum focus of **0.18 m from the film plane**, but the patent does not provide the complete focusing extension or cam law needed to map the production endpoint to a unique internal state. The data therefore uses **NO_INTERNAL_RECONSTRUCTION** for the 0.18 m endpoint: `closeFocusM` records the marketed minimum focus, while runtime `var` is intentionally empty. The published `M = 1/6` state remains a source-backed diagnostic state rather than a fabricated minimum-focus endpoint.

No focusing drive mechanism is specified in the cited manufacturer literature used for this analysis, so none is assigned.

## Conditional Expressions

The patent imposes the front-group requirement

$$
2f < |f_n| < 4f, \qquad f_n < 0,
$$

where `f_n` is the focal length of the negative front group. In Example 1 that group is L1. From the final scaled data, L1 has a standalone focal length of **−63.359911 mm**, and the complete system has EFL **28.158466 mm**. Thus

$$
\frac{|f_n|}{\mathrm{EFL}} = 2.250119,
$$

which satisfies the published interval and negative-sign requirement.

## Verification Summary

The final data preserves the patent's scaled source prescription and keeps marketing values separate from computed design values. Independent sequential reduced-angle tracing and an ABCD calculation agree for the final arrays and give **28.158466 mm EFL** and **38.352725 mm BFL**. The scaled source B.F. retained after the last surface is **38.36 mm**.

The patent publishes **F2** but does not tabulate the stop's exact station or physical diameter. Figure 1 places the iris within the L5–L6 air gap. The model locates `STO` at **20% of that gap measured rearward from L5's rear surface** and calibrates its **9.496842 mm** semi-diameter so the paraxial entrance pupil gives **f/2.00000005**. Both the station and physical stop size are modeling inferences; the f/2.0 target is a source fact.

Surface semi-diameters are likewise inferred because the patent does not tabulate clear apertures. A 600-dpi inspection of Figure 1 showed that L4 and L7 were materially oversized relative to the clean optical rims; the revised L2–L8 values reproduce the figure's stepped silhouette more closely. Surface 12 remains at 9.4 mm because enlarging it to the drawn flange would violate the real r12→r13 air-gap clearance. The final values pass the surface validator and image-circle floor; those checks validate the model geometry but do not turn the inferred semi-diameters into patent facts.

The first-order Petzval sum from the final data is **+0.005977576558 mm⁻¹**, corresponding under the audit sign convention to a Petzval image-surface radius of **−167.291877 mm**. This is a paraxial Petzval result, not a fit to the patent's plotted field-curvature curves.

One low-resolution extraction ambiguity was examined at `r4`. The source crop supports **r4 = −4.4202**, and that value reproduces the published B.F. closely. The alternative reading `−44.202` does not. The data therefore contains no silent patent correction; it retains the source value judged legible from the scan.

Example 1 has no aspherical surfaces. No asphere section is therefore required, and no scale transformation of `A_p` coefficients exists for this lens.

## Sources / References

1. **JP1976-026535 (特開昭51-26535)**, supplied eight-page Japanese patent scan, Example 1. The Example 1 prescription and notation are on patent page 3; Figure 1 and the infinity / `M = 1/6` layout are on patent page 5.
2. **Konica UC Hexanon Lenses brochure**, original Konica literature scan hosted by CameraManuals/Butkus: <https://cameramanuals.org/lenses/konica_uc_hexanon_lenses.pdf>. Used for product identity and marketed UC HEXANON AR 28mm F1.8 specifications.
3. **Konica 28mm f/1.8 Automatic Wide Angle Hexanon Lens technical sheet**, Konica Division / Berkey Marketing Companies, copyright 1980, hosted by Pacific Rim Camera: <https://www.pacificrimcamera.com/rl/02831/02831.pdf>. Used for 28 mm, f/1.8–16, 8 elements / 8 groups, 75°, floating-element description, and 0.18 m minimum focus from the film plane.
4. **Konica Autoreflex T4 instruction manual**, original manufacturer manual scan, hosted by ManualsLib: <https://www.manualslib.com/manual/1729457/Konica-Minolta-Autoreflex-T4.html>. Used for the 35 mm SLR / 24 × 36 mm system format context.
