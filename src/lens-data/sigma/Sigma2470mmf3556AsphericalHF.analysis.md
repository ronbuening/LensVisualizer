## Patent Reference and Design Identification

**Patent:** JP 2002-236254 A  
**Application Number:** JP 2001-033481  
**Filed:** 9 February 2001  
**Published:** 23 August 2002  
**Inventors:** Norikazu Yokoi; Tetsusuke Kusakawa; Shizuka Takemoto  
**Applicant:** Sigma Corporation  
**Title:** Zoom lens  
**Example details:** Numerical Example 2, paragraphs 0018–0022 and Figure 5

The selected production comparison is the original **Sigma 24–70mm F3.5–5.6 ASPHERICAL HF**. Sigma’s September 2004 catalogue identifies this precise name, rather than a constant-F2.8 EX or later DG model. The catalogue lists Sigma SA, Canon AF, Nikon AF, Pentax AF and Minolta AF versions; the last uses the current sony-a taxonomy identifier without implying a Sony-branded 2004 product. Its section and specifications support the association in several independent ways:

1. Nine glass bodies form seven air-separated components. The negative front unit contains three bodies, with the second identified as aspherical; the rear unit is a cemented pair.
2. The selected patent diagram has the same overall arrangement, including the distinguishing rear doublet, and a thin refractive layer at the second front body. Its single aspheric outer surface is consistent with the catalogue’s marked site.
3. Native focal lengths 25.0/49.4/67.6 mm and native F-numbers 3.62/5.05/5.79 are close to, but deliberately not rescaled to, the advertised 24–70mm F3.5–5.6 range.
4. The catalogue describes HF as linear front-group focusing without rotation of the lens front. It specifies a 0.4 m minimum focusing distance, 1:4.5 maximum magnification, eight iris blades and 62 mm filter thread.

This is a strong architectural research correlation, not a manufacturer-confirmed exact factory prescription. The modeled layer is interpreted as a hybrid resin layer from its thickness, optical constants and product asphere evidence; the table does not identify its chemical composition. The missing image distance and unpublished clear apertures limit the reconstruction independently of product identification.

## Optical Architecture

The patent uses negative–positive–weakly-negative zoom units G1, G2 and G3. Their standalone paraxial focal lengths are respectively −40.2074, +37.3090 and −1594.7035 mm. The weak net power of G3 does not make its elements individually weak. The rear doublet and SP1 move together: SP1-to-G3-front separation is 34.4000 mm at all three tabulated stations. SP2 is a separate fixed flare diaphragm, not the image surface (¶0007 and Fig. 5).

The source has nineteen rows, including SP1 and SP2. The refractive model has eighteen active rows, with exactly one STO at SP1. SP2 has no published diameter and is omitted as an active blocker; its location remains in the source record. The final interval combines printed d18 with an explicitly derived, adopted **35.73 mm SP2-to-image distance**, constant across the three stations. This omission cannot reproduce the physical flare-cutting behavior which is a central subject of the patent.

| Native station | Calculated EFL (mm) | Final refracting vertex to adopted image (mm) | First vertex to adopted image (mm) | Adopted image minus Gaussian image (mm) |
| -------------- | ------------------: | --------------------------------------------: | ---------------------------------: | --------------------------------------: |
| 25.0 mm        |           25.009803 |                                       39.1100 |                           130.1500 |                               -0.027037 |
| 49.4 mm        |           49.447193 |                                       55.7559 |                           122.6124 |                               -0.036125 |
| 67.6 mm        |           67.589572 |                                       69.1742 |                           131.2215 |                               +0.045590 |

The independently calculated SP2-to-Gaussian-image intervals are 35.757037, 35.766125 and 35.684410 mm. Their small differences remain visible rather than being replaced by per-station refocusing. At the wide station the final-vertex back focal distance exceeds EFL, satisfying the stated reference-plane retrofocus test. No station satisfies a first-vertex-to-image/EFL ratio below one; a telephoto ratio claim is therefore inappropriate.

The front group reverses direction between the printed stations when positions are referenced to the fixed image; G2 and G3 move objectward from wide to tele. The numerical model retains those native gaps. Linear control interpolation is only an illustration of motion, not a solved continuous zoom cam or a guarantee of focus between the printed stations.

## Element-by-Element Analysis

Focal lengths below are standalone two-boundary, in-air paraxial values, including actual center thickness. They are not in-situ powers or isolated contributions to aberration correction. The explicit material entries include nine glass bodies and one inferred resin film.

### L1 — Negative Meniscus

nd = 1.80420, νd = 46.5. Glass: TAF3 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -37.7827 mm.

L1 is the leading negative meniscus of G1. It precedes the relatively large air gap to the hybrid second body. Its negative power contributes to the negative front unit; the patent does not separately quantify its aberration budget.

### L2 — Negative Meniscus

nd = 1.77250, νd = 49.7. Glass: TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -48.6987 mm.

L2 is the glass substrate of the hybrid second front body. Its rear interface is bonded to the thin layer, so its listed standalone power is a diagnostic rather than the power of the assembled hybrid.

### R1 — Hybrid resin negative meniscus

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = -294.7345 mm.

R1 is the separately retained 0.1000 mm center-thickness layer. The outer boundary is s5, the sole asphere. It must not be replaced by a zero-thickness surface or assigned an inorganic-glass spectrum merely because a nearby catalogue coordinate exists.

### L3 — Biconvex Positive

nd = 1.67270, νd = 32.1. Glass: S-TIM25 (OHARA coordinate-equivalent class; supplier unconfirmed). f = +46.2282 mm.

L3 is the positive terminal body of G1. The large variable gap behind it separates the negative front unit from SP1 and the following positive unit.

### L4 — Biconvex Positive

nd = 1.69680, νd = 55.6. Glass: K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed). f = +39.5647 mm.

L4 is the first positive body of G2, immediately after the moving aperture interval. It is separated from the following cemented pair by the native 0.1500 mm air gap.

### L5 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA coordinate-equivalent class; supplier unconfirmed). f = +29.6380 mm.

L5 is the positive, lower-index member of the middle cemented pair. Its contact with L6 is the source interface s12, not an invented cement medium.

### L6 — Biconcave Negative

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -13.8882 mm.

L6 is the negative, higher-index partner of L5. The combination participates in the positive G2 unit; the powers of the members must not be added without accounting for the shared interface and thickness.

### L7 — Biconvex Positive

nd = 1.51680, νd = 64.4. Glass: BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +40.4048 mm.

L7 is the last positive body of G2. Its front boundary shares the relatively tight d13 air band with L6, which constrains the inferred clear radii. The following d15 gap increases toward tele.

### L8 — Positive Meniscus

nd = 1.65844, νd = 50.8. Glass: BACED5 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +31.7316 mm.

L8 is the positive member of the weakly-negative rear doublet G3. Its front radius is shallow, but the rear curvature gives it appreciable standalone power.

### L9 — Negative Meniscus

nd = 1.77250, νd = 49.7. Glass: TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -31.2614 mm.

L9 is the negative member of G3. Its shared s17 interface and the preceding member produce a much weaker negative net group than either standalone power. The native d18 gap ends at SP2, with the adopted image extension beyond.

## Glass and Spectral Evidence

Paragraph 0010 explicitly defines the indices as d-line values. The native nd/νd pairs are preserved. A six-vendor comparison used authoritative HOYA, OHARA, Schott, HIKARI, Sumita and CDGM catalogue data; numerical proximity establishes a compatible class, not the actual supplier, melt or measured production spectrum.

| Material locations | Source nd / νd | Selected catalogue proxy |       Δnd |       Δνd |
| ------------------ | -------------- | ------------------------ | --------: | --------: |
| L1                 | 1.80420 / 46.5 | HOYA TAF3                | +0.000000 | +0.000000 |
| L2, L9             | 1.77250 / 49.7 | HOYA TAF1                | +0.000000 | -0.070000 |
| L3                 | 1.67270 / 32.1 | OHARA S-TIM25            | +0.000000 | -0.000794 |
| L4                 | 1.69680 / 55.6 | SUMITA K-LaK14           | +0.000000 | +0.000000 |
| L5                 | 1.48749 / 70.2 | OHARA S-FSL5             | +0.000000 | +0.036252 |
| L6                 | 1.83400 / 37.3 | HOYA NBFD10              | +0.000000 | +0.040000 |
| L7                 | 1.51680 / 64.4 | HOYA BSC7                | +0.000000 | -0.200000 |
| L8                 | 1.65844 / 50.8 | HOYA BACED5              | +0.000000 | +0.060000 |
| R1                 | 1.51840 / 52.1 | Unmatched inferred resin |         — |         — |

Residuals are catalogue minus source at the listed coordinate precision. They describe class compatibility, not inferred corrections to the patent.

Each inorganic material carries C/F/g indices derived from the selected vendor’s published coefficients. These are explicit **catalogue spectral proxies**. The model retains the source nd and νd, including their residuals relative to those classes: this is not an undisclosed replacement prescription. The current runtime uses the supplied line-index branch for those entries. TAF1 resolves through the project’s S-LAH66 compatibility alias, while the authored HOYA proxy lines remain the active spectral inputs. The unmatched thin layer uses the source’s index and Abbe number without invented line data. Consequently, precise chromatic-performance, anomalous-dispersion and APO claims are not justified.

The model’s surface-by-surface d-line Petzval sum is +0.002971193 mm⁻¹, independent of the air spacings. This paraxial sum is not the complete finite-field best-focus curvature or an MTF result.

## Focus and Zoom Behavior

**NO_INTERNAL_RECONSTRUCTION.** Only the three native zoom prescriptions are represented at the adopted infinity conjugate. The source does not print an object-distance row, so infinity is part of the explicitly adopted image-distance reconstruction, not a falsely quoted table heading. Focus pairs are identical. The marketed 0.4 m distance describes the product and does not certify a modeled close-focus state.

The source’s condition is 1 < β3T < 1.5. Independent first-order propagation gives β3T = 1.048550, satisfying the inequality but not reproducing the printed 1.04 under ordinary two-decimal rounding. That discrepancy is retained without changing a radius, index, thickness or gap. No focus law is inferred from it.

## Aspherical Surface and Clear Apertures

Source paragraph 0012 writes the base conic using A under the radical, so the standard conic constant is K = A − 1. For s5, A = 2.168 and therefore K = 1.168. The source H² coefficient is zero; the nonzero polynomial terms are A4 = −1.7530×10⁻⁵, A6 = −3.7060×10⁻⁸, A8 = +3.2240×10⁻¹¹ and A10 = −3.9640×10⁻¹³, in mm^(1−order). The polynomial ends at H10; model A12 and A14 are zero.

At the **inferred model radius 15 mm**, the complete asphere sag is 3.212541 mm, and its departure from the sphere of the same vertex radius is −0.941348 mm. The actual rim slope is 15.3230°. These are modeled-aperture quantities, not published manufacturing departures. The bonded layer remains physically positive, with minimum sampled/extremum-resolved thickness 0.046660 mm.

All clear radii are inferred. Their selection retains full native axial bundles and clear chief rays to the physical full-frame corner while maintaining positive material thickness, valid conic domains and the default 90% cross-gap rule. No gap-policy override is used. The real project render diagnostics report zero hidden trim across the tested zoom/focus grid. The silhouette represents optical clear apertures, including unequal face radii, rather than a measured mechanical edge profile. The renderer joins unequal optical-face radii with straight edges; Figure 5 shows outer lands or steps, so those chamfered joins are a rendering simplification, not a factory edge-shape claim.

The physical iris is also unpublished. Exact axial calibration to the native F-numbers gives stop semi-diameters 8.047427, 8.499225 and 9.505185 mm. Reproducing those targets is calibration, not independent evidence for a physical diaphragm diameter. Sampled off-axis bundles retain aperture clipping; the model is not certified as unvignetted, and omitting the unquantified SP2 especially precludes a physical throughput or flare-suppression claim. Exact d-line tracing clears the physical 21.633308 mm full-frame corner at each native station, but that chief-ray result does not certify all pupil rays or all intermediate states.

## Sources

- Japan Patent Office, [JP2002236254A complete original](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2002236254A): JPO wrapper PDF1; definitions/architecture ¶¶0005–0012 on PDF3–4; selected numerical prescription ¶¶0018–0022 on PDF4/printed3; Fig.5 on PDF7/printed6. This original, not a foreign-family transcription, governs the numbers.
- Sigma, [September 2004 lens catalogue](https://w5.fuji.com.tw/pdf/SIGMA-lens-English.pdf), manufacturer-authored PDF, reseller-hosted: PDF6 exact HF identity, section and focus description; PDF12 specifications. The complete preserved copy is hash-identified in the evidence.
- [HOYA optical-glass catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), including obsolete entries; [OHARA July 2026 catalogue](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); [Sumita catalogue](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). Relevant source coefficients, residuals and six-vendor comparison are preserved in the evidence; catalogue-derived spectra are proxies.


## Continuous infinity-path reconstruction, 2026-10-23
This addendum supersedes the earlier unsupported linear-intermediate zoom limitation. Source d7 and d8 are piecewise-linear driver coordinates through the three exact native configurations. The complementary d15 preserves the fixed iris-to-G3 separation. The final image gap follows first-order focus while retaining the interpolated native Gaussian residuals (+.0270365932,+.0361247465,−.0455901295 mm), not zeroing or optimizing the native prescription. G1 still reverses direction; G2 and G3 travel objectward. All198 intermediate nodes are unpublished. This is an inferred visualization trajectory, not a recovered or uniquely determined production cam.

All source optical surfaces, glass values and proxy qualifications, native gaps and focal/aperture labels are unchanged. No source row, allowance or clear aperture is altered. SP2 remains omitted because its diameter is unknown, so physical flare cutting/throughput cannot be certified. The adopted35.73mm SP2-to-image interval and its uncertainty remain as originally documented. Finite focus is still not modeled. Numerical MTF convergence does not establish production accuracy; per-field converged bandwidth limits remain controlling. Independent integration is pending.
