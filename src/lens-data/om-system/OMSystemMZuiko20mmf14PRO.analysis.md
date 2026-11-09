## Patent Reference and Design Identification

**Patent:** [JP 2023-32222 A](https://patents.google.com/patent/JP2023032222A/ja)  
**Filed:** 26 August 2021  
**Published:** 9 March 2023  
**Inventors:** Jumpei Nakamoto; Takehisa Koyama  
**Applicant:** Sigma Corporation  
**Title:** Inner-focus optical system  
**Example details:** 数値実施例1, printed pages 13–14; Figure 1 on printed page 25. Unscaled millimetres.

This is a source-backed reconstruction of a patent example, with an **inferred**, not confirmed, association to the OM System M.Zuiko Digital ED 20mm f/1.4 PRO. It is not a factory prescription. [Asobinet's patent discussion](https://asobinet.com/info-patent-sigma-20mm-f1-4/) makes the same qualified association. Sigma, not OM Digital Solutions, is the named applicant.

1. The example has 11 powered elements in 10 air-separated groups, with three aspherical surfaces on two elements.
2. Its 20.27 mm focal length, F1.43 aperture, 59.01° full field and 11.15 mm image height fit the proposed fast 20 mm Micro Four Thirds application.
3. The patent describes a small negative inner-focus element and four power groups. The filing timing and specifications support the association but do not establish manufacturing identity.

[Photography Blog's product tests](https://www.photographyblog.com/reviews/olympus_om_system_m_zuiko_digital_ed_20mm_f1_4_pro_review/sharpness_1) report excellent central sharpness from f/1.4 to f/11. [LensTip's balanced assessment](https://www.lenstip.com/623.11-Lens_review-OM_System_M.Zuiko_Digital_20_mm_f_1.4_PRO_Summary.html) cautions against extending strong central performance to the whole optical result. Those observations concern a production lens, not this patent-model MTF.

## Optical Architecture

The four power groups run negative, positive, negative and positive. G1 is S1–8, followed by the explicit S9 iris; G2 is S10–16; G3 is the S17–18 focusing singlet; G4 is S19–22. The source reports group focal lengths −77.32, +18.43, −34.61 and +52.51 mm respectively. The front negative group provides a retrofocus-like separation while the positive central group supplies much of the convergence.

The 4.14 mm plane-parallel optical filter FL, S23–24, is represented as a traced rear plate rather than a twelfth powered element. The physical 15 mm pre-filter gap and 1.3929 mm filter-to-image gap are retained exactly. The full physical track is 80.2629 mm, consistent with the printed 80.26 mm after rounding.

## Element-by-Element Analysis

All focal powers below are interpreted from the source curvatures. Glass catalogue names and partial dispersions are not given.

### L1 — Positive meniscus, S1–2

nd = 2.00069, νd = 25.46; unmatched patent glass. The strongly refracting front singlet is positive, although the complete front group is negative.

### L2 — Negative meniscus, S3–4

nd = 1.49700, νd = 81.61; unmatched low-dispersion patent glass. The tighter rear curvature supplies negative power within subgroup G1b.

### L3 — Biconcave negative, S5–6

nd = 1.43700, νd = 95.10; unmatched very-low-dispersion patent glass. Its strong negative role and high Abbe number contribute to the front group's chromatic balance; no proprietary ED designation is asserted.

### L4 — Biconvex positive, S7–8

nd = 2.05090, νd = 26.94; unmatched high-index patent glass. This positive singlet immediately precedes the iris.

### L5–L6 — Cemented negative-positive pair, S10–12

L5: nd = 1.77047, νd = 29.74, biconcave negative. L6: nd = 1.76450, νd = 49.10, biconvex positive. Both glasses remain unmatched. They share S11 without an air gap; S12 is aspherical. The dispersion contrast supplies a central chromatic-correction degree of freedom.

### L7 — Biconvex positive, S13–14

nd = 1.59282, νd = 68.62; unmatched patent glass. A thick positive singlet in G2, with a weak front and strongly curved rear face.

### L8 — Biconvex positive, S15–16

nd = 1.59282, νd = 68.62; the same tabulated optical coordinates as L7, without a claim of identical production melt. It completes the fixed positive central group.

### L9 — Negative focusing meniscus, S17–18

nd = 1.73037, νd = 32.23; unmatched patent glass. This 0.8 mm thick element is the only moving powered component in the tabulated focus sequence.

### L10 — Double-aspherical biconvex positive, S19–20

nd = 1.80610, νd = 40.73; unmatched patent glass. Its two aspherical faces supply higher-order correction in the rear positive group.

### L11 — Negative meniscus, S21–22

nd = 1.48749, νd = 70.44; unmatched patent glass. The final weakly dispersive negative element balances the preceding positive element and rear-field behavior.

## Glass Identification and Dispersion

All eleven powered elements retain the exact source nd and νd pairs, as does FL (1.51633, 64.14). No supplier catalogue, melt identity, anomalous partial-dispersion data or measured spectral indices have been established. The model labels every glass unmatched. Any multiwavelength output uses the engine's synthetic dispersion inferred from nd/νd and must not be read as a measured colour correction or exact patent chromatic reproduction. The reported baseline MTF uses the reference d line only.

## Focus Mechanism

Only S17–18 translate imageward, by 0.3647 mm. The preceding gap d16 changes from 1.4000 to 1.7647 mm and the following d18 changes from 6.0800 to 5.7153 mm. Every other element and the image plane remain fixed. The close source row gives object distance 794.6816 mm from the first surface, magnification 0.025 and BF 1.3929 mm. Its object-to-image distance is 0.8749445 m. This is a published sample state, **not the product's minimum focus distance**. Interpolated slider states are an engineering interpolation between these two source states.

## Aspherical Surfaces

S12, S19 and S20 all have K = 0 in the conventional conic-base plus even-power sag equation. The exact coefficients are retained, including printed zeros, without scale conversion:

| Surface | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---|---|---|---|---|---|---|
| 12 | 3.33950e-5 | 2.82730e-8 | −7.13200e-11 | 1.47300e-14 | −6.10360e-16 | 0 | 0 |
| 19 | 1.88440e-5 | −1.27440e-8 | 5.31540e-10 | 9.63830e-13 | −1.51470e-14 | 1.88150e-17 | 0 |
| 20 | 1.63120e-5 | −1.20380e-7 | 1.84370e-9 | −9.72690e-12 | 3.52060e-14 | −1.80610e-16 | 4.73790e-19 |

The positive fourth-order terms are accompanied by alternating higher-order corrections; their net effect depends on height and cannot be characterized from A4 alone. No particular manufacturing process is inferred.

## Apertures, Image Plane and Validation Limits

The patent does not tabulate clear semi-diameters or a physical iris diameter. Surface radii of clearance are engineering estimates, checked against the proportions of Figure 1 and constrained by the default rim, edge and gap geometry rules. They are not factory apertures. The iris at printed S9 is explicit, but its approximately 17.3971 mm physical diameter is derived from F1.43 and the paraxial entrance-pupil mapping. It is not a source-listed dimension. No gap-sag override or rim cut is used.

Independent paraxial calculation gives EFL 20.27365898 mm and filter-back focal distance 1.39329966 mm. The literal 1.3929 mm source plane is preserved, rather than silently corrected by 0.00039966 mm. Diffraction MTF validation explicitly uses the design plane; its separately calculated best-axial shift is diagnostic only.

A 64-cell-across, 3,228-point full stop-disc trace at infinity gives geometric transmission 100% on axis, 91.82% at half the modeled field angle and 55.14% at its edge. No failed or unaimed samples were omitted. At the published close state these become 100%, 92.81% and 57.00%. These are aperture-dependent ray fractions, not measured T-stops or relative illumination. Chief-ray coverage alone would conceal this wide-open peripheral clipping.

Reference-line diffraction MTF at F1.43 and the literal image plane converges at center and half image height through 80 lp/mm; the edge passes the engine's convergence status but only through 40 lp/mm at the 64-grid cap. Edge 80 lp/mm values remain exploratory. At 40 lp/mm, sagittal/tangential values are approximately 0.433/0.433 on axis, 0.118/0.278 at half image height and 0.460/0.254 at the edge. Midfield sampling here is by image height, unlike the transmission figures above, which use half field angle. These values illustrate the reconstruction, not a product quality certification.

Local validation checks source round-trip, published focus motion, default geometry, iris throughput, field coverage and zero hidden render trimming. The accompanying reproducibility archive records exact diagnostics and integration checks, including checks not run. Coatings, tolerances, measured glass dispersion and production aperture dimensions are not modeled.
