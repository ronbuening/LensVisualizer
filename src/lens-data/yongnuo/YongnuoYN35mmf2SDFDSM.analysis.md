## Patent Reference and Design Identification

**Patent:** CN 113126266 A
**Filed:** 2020-01-16
**Published:** 2021-07-16
**Inventors:** Yuanhua Ye; Yongsheng Zhuang; Jiannan Zhuang
**Applicant:** Shenzhen Yongnuo Photographic Equipment Co., Ltd. (深圳市永诺摄影器材股份有限公司)
**Title:** A lens and an imaging device
**Example details:** Original PDF page 9, paragraphs 0104–0108, Figure 1; literal unscaled infinity prescription.

This is a source-preserving infinity model with native geometry, aperture and reference-line MTF checks completed; catalog integration gates have passed. It is not a measured factory prescription. The probable association is the YONGNUO YN 35mm f/2 S DF DSM family. The maker catalog and patent converge on 35 mm focal length, nine elements in eight groups, a low-dispersion fourth element, an eighth element with two aspherical faces, and the sixth/seventh cemented pair. The source plot filename contains 35F2E. The maker's 0.35 m minimum focus agrees with the patent's near-focus heading. None of these proves production numerical identity, and the model does not assert equivalence to every Z-mount variant.

The applicant is retained as the original photographic-equipment entity. No equivalence to an electric-appliance entity is asserted.

Only whole Example 1 supplies the prescription. Its main-table first radius is 375.10 mm; the later condition summary's 375.0100 mm is not substituted. The main focal table says 35 mm and the condition summary says 35.0200 mm. These discrepancies remain unresolved. The 2025 CN 113126266 B grant repeats the main table and discrepancy and corroborates, rather than replaces, the A source.

## Optical Architecture

The source divides the nine-element/eight-group lens into positive GR1, positive GR2 and negative GR3 (paragraph 0100). GR1 comprises L1–L5 and the stop between L4 and L5. GR2 contains the L6/L7 cemented pair and L8, not just L8. GR3 is the fixed negative rear element L9. This is a source-defined three-group mirrorless prime; no historical design-family identity is imposed.

The physical stop is source row 9 at z = 25.470 mm, with 1.700 mm from S8 to the stop and 0.484 mm from the stop to S10. Original numbering omits S15. The implementation preserves that omission and maps original S16 and S17 to 16A and 17A.

The camera-side GL plate follows the last lens vertex at z = 62.534 mm: 14.080 mm air, 2.500 mm glass, then 1.000 mm air. Paragraph 0101 identifies a sensor-protecting/filter-coated plane-parallel plate. It is represented as an undrawn rear plate, not a tenth lens or a reduced air gap. Its literal image plane is z = 80.114 mm.

## Element-by-Element Analysis

### L1 (G11) — Negative Meniscus

nd = 1.6398, νd = 34.4697. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = -33.6764 mm.

Front negative meniscus. Isolated-air focal length is not in-system group power.

### L2 (G12) — Biconvex Positive

nd = 1.9014, νd = 31.6382. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = +44.8188 mm.

Front positive collector. Isolated-air focal length is not in-system group power.

### L3 (G13) — Biconcave Negative

nd = 1.74, νd = 28.245. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = -48.5901 mm.

Negative front-group component. Isolated-air focal length is not in-system group power.

### L4 (G14) — Positive Meniscus

nd = 1.525, νd = 70.361. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = +113.6899 mm.

Low-dispersion positive element; source ED association, no supplier identity. Isolated-air focal length is not in-system group power.

### L5 (G15) — Biconvex Positive

nd = 1.910826, νd = 35.2557. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = +32.4586 mm.

Positive element immediately after the stop. Isolated-air focal length is not in-system group power.

### L6 (Gj1) — Biconvex Positive

nd = 1.6031, νd = 60.6411. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = +22.9531 mm.

Positive member of GR2 cemented pair. Isolated-air focal length is not in-system group power.

### L7 (Gj2) — Biconcave Negative

nd = 1.668, νd = 33.0468. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = -22.5051 mm.

Negative member of GR2 cemented pair. Isolated-air focal length is not in-system group power.

### L8 (G22) — Positive Meniscus

nd = 1.79, νd = 45. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = +42.3828 mm.

Two-asphere positive member of GR2. Isolated-air focal length is not in-system group power.

### L9 (G31) — Negative Meniscus

nd = 1.7552, νd = 27.5462. Glass: Unmatched (literal patent pair, manufacturer and melt unknown). f = -34.4243 mm.

Fixed negative rear element. Isolated-air focal length is not in-system group power.

## Glass Identification and Selection

Paragraph 0074 explicitly defines nd at 587.56 nm, nF at 486.13 nm, nC at 656.27 nm and νd = (nd − 1)/(nF − nC). These are published d-line coordinates, not a wavelength assumption. All nine elements and the plate retain the printed nd/νd without catalog substitutions or invented individual line indices.

The fourth element's νd = 70.361 is the source's low-dispersion choice. The L6/L7 doublet combines νd = 60.6411 and 33.0468. No glass chemistry, supplier, melt, anomalous partial dispersion or apochromatic performance is inferred. The authored values support a reference d-line calculation and approximate Abbe-based C/d/F dispersion, but native support blocks C/d/F and photopic MTF because the low-dispersion fourth element lacks partial-dispersion data. Reference d-line MTF is available and tested. Approximate dispersion is not independently verified production dispersion or a measured chromatic curve.

## Focus Mechanism

Paragraph 0100 and Figure 1 move all of GR2 (L6, L7 and L8) while GR1 and GR3 remain fixed relative to the image. The source near table lists f = 31.563 mm, object distance 269.495 mm, d11 = 0.780 mm and d17 = 4.110 mm, under the MOD (0.35 m) heading. Infinity has d11 = 3.170 mm and d17 = 1.710 mm.

The two gap sums differ by 0.010 mm: 4.880 mm at infinity and 4.890 mm near. Neither gap is altered to enforce a constant track, and the object-distance reference has not been certified. This candidate contains only the infinity state. The original finite table is preserved in evidence, without a finite conjugate, movement interpolation or validated close-focus result. The required focus.closeFocusM field carries the published MOD heading 0.35 m with an explicit warning: fixed geometry does not validate that endpoint, and fallback focus labels may still display a finite distance. Native focus-control endpoints have identical geometry. The separate catalog value is marketing metadata.

## Aspherical Surfaces

L8 carries original S16 and S17. Their K and C4 through C12 coefficients are copied verbatim. Cn is mapped to the engine's An with no scale factor. The candidate uses the standard even-asphere interpretation, with the conic denominator containing 1 + K; the publication's coefficient table alone is not an explicit printed equation, so this convention remains an implementation qualification rather than a separately recovered formula.

| Surface | K       | A4          | A6          | A8           | A10          | A12          |
| ------- | ------- | ----------- | ----------- | ------------ | ------------ | ------------ |
| 16A     | +6.7832 | −4.15649e−5 | −8.81464e−8 | −1.67464e−9  | +9.87821e−12 | −5.43236e−14 |
| 17A     | +3.0519 | −2.59112e−6 | −7.40221e−8 | −3.90992e−10 | +2.15026e−12 | −1.5344e−14  |

The negative low-order terms and alternating higher terms modify the rear group's radial profile; no isolated coefficient is claimed to quantify a specific system aberration. Manufacturing method is not assigned. Native geometry and bounded rays pass for the qualified H1 inferred caps; this does not independently establish the unprinted asphere equation or production numerical identity.

## Aperture and Mechanical Qualifications

Neither the numerical E1 table nor the recovered pages publish mechanical clear semi-diameters or physical iris radius. The plotted PUPIL RADIUS is 8.7555 mm. Conditional on this being entrance-pupil radius, the literal first-order EFL gives f/2.006885088680859. That conditional value, rather than a forced f/2, is the candidate's design aperture; f/2 remains retail metadata.

The repository's ordinary-prime stop convention derives paraxial entrance-pupil diameter as EFL/N, then maps it to the physical stop. The independent first-order iris hypothesis is 11.323344944 mm at source S9. It is not a source-measured radius. Native iris-in-air checks pass with minimum front/rear clearances of 1.327137 and 0.484000 mm. The official aperture census gives f/2.006885086963, with STO limiting the admitted beam. An exact nonlinear entrance-ray diameter, when later measured, is a separate diagnostic and must not redefine the prescribed f-number.

All clear caps are inferred, not source dimensions. Initial H0 failed the S2/S3 air-gap check. Reducing the square L2 caps from 12.50 mm in 0.05 mm steps preserved failures at 12.45 and 12.40 mm; 12.35 mm passed the unchanged default 90% gap-sag allowance. Native admitted-beam tracing then identified S8 clipping and required 11.091694 mm there. H1 raises only S8 from 11.00 to 11.10 mm. No other cap changes, rim cuts, hidden trim, source-gap changes or gap-sag override were used. H1 has zero rendered trim. All failures remain in evidence.

The nonlinear iris-admitted entrance radius is 8.186333835 mm and the clear radius agrees within numerical tolerance. Dividing EFL by this exact nonlinear diameter gives 2.14641654, a separate diagnostic, not a failed f-number hold or reason to resize the standard paraxial iris.

## Verification Scope and Reference-Line MTF

Deterministic reverse reconstruction exactly reproduces all 20 source rows, including the absent S15 numbering and blank plate-exit label, and both complete asphere coefficient sets. Independent first-order calculation gives EFL 35.142564788 mm and paraxial image z = 80.124563843 mm, 0.010563843 mm behind the unchanged literal image plane. The independent calculation is a source-table diagnostic; native H1 independently reproduces its EFL and literal image plane. No source focus fitting has been applied.

Native geometry, iris, standard aperture, bounded rays, zero render trim and reference-line MTF have run. Metadata, typecheck, formatting, lint, focused tests, build, SEO and guarded standalone installation checks have passed. The candidate is registered visibly in the local build; this is validation, not publication or factory certification.

Geometric and diffraction MTF were evaluated at the native d reference, 587.5618 nm, at 0/10/20/30/40 lp/mm. Fields represent axial, half and full catalog-derived full-frame angle, not a source-published coverage measurement: actual source-plane angles 0°, 15.550957° and 31.101847°, with image heights 0, 9.789266 and 21.649937 mm. The solver uses image-height fractions 0, 0.452160084 and approximately 1 to obtain those angles; the middle field is half-angle, not half-image-height.

All three source-plane fields converged through 40 lp/mm for both methods, using grids 64/64/128. Diffraction maximum deltas were 0.007270, 0.009249 and 0.004097 MTF. Valid/blocked pupil counts were 3228/0, 3160/68 and 4908/7984, with no failed, unaimed or unresolved in-beam rays. Strong edge vignetting is retained. Source-plane axial diffraction MTF at 20 lp/mm is approximately 0.04136.

A separately labeled best-axial diagnostic shifts its evaluation plane by +0.133962038 mm and raises axial diffraction MTF at 20 lp/mm to approximately 0.90961. All its fields also converge through 40 lp/mm. This diagnostic plane is not authored into the prescription; the literal image plane remains 80.114 mm. The +0.010563843 mm Gaussian residual is a different diagnostic from the best-axial shift. Neither result is a factory chart, broadband performance claim or permission to refit the source. A bounded alias and numerical fingerprint scan of the baseline found no match; separate source research checked bounded private delivery/archive listings. This is not exhaustive hidden-custody clearance.

## Sources

- [CN 113126266 A](https://patents.google.com/patent/CN113126266A/en), original publication and Example 1.
- [Original A PDF](https://patentimages.storage.googleapis.com/a8/3f/4c/a28ebe404eb97f/CN113126266A.pdf), pages 7, 9 and 13.
- [CN 113126266 B](https://patents.google.com/patent/CN113126266B/zh), 2025-06-10 grant corroboration.
- [Yongnuo official lens catalog, 202203](https://www.szyongnuo.com/upload/image/202402/YONGNUO-Lens-202203.pdf), production-family association only.
