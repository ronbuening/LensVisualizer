## Patent Reference and Design Identification

**Patent:** US 2006/0007561 A1\
**Application Number:** US 11/142,272\
**Filed:** 2005-06-02\
**Published:** 2006-01-12\
**Priority:** 2004-06-09, JP 2004-171404\
**Inventor:** Takashi Suzuki\
**Assignee:** Fujinon Corporation\
**Title:** Compact large aperture wide-angle lens and camera including compact large aperture wide-angle lens\
**Embodiment analyzed:** Example 1, Tables 1–3 and Fig. 1

The model retains the published Example 1 prescription without rescaling. Its correlation with the fixed Super EBC Fujinon lens of the NATURA S rests on converging primary evidence:

1. Fujifilm’s 2005 research report describes a 24 mm f/1.9 lens with seven elements in six air-separated components. Its Fig. 8 marks the fourth and sixth elements as aspheric, matching the patent’s four aspheric surfaces on L4 and L6.
2. The manufacturer’s distinctive biconcave first element and cemented L2/L3 front doublet agree with Example 1. The manufacturer figure is a small embedded bitmap; it supports topology and broad form, not precision curvature or dimensional measurements.
3. The patent states 24.06 mm and f/1.96, close to the marketed 24 mm and f/1.9 but deliberately retained as different quantities. The official camera specifications give 24 × 36 mm film and active autofocus from 0.4 m to infinity.
4. Fujifilm’s report dates Japanese product availability to October 2004. The 2004 Japanese priority and later patent publication are consistent with that chronology.

This is a source-grounded design correlation, not a manufacturer statement that Example 1 is the exact production prescription. Glass identities, mechanical apertures and finite-focus motion remain unconfirmed. The model represents NATURA S; it does not add a second production variant merely because the archived specifications also mention NATURA BLACK F1.9.

## Optical Architecture

The seven elements form six air-separated components and four patent functional groups with the power sequence negative–positive–positive–negative. Group I is L1; group II is the cemented L2/L3 doublet; group III contains L4 and L5; group IV contains L6 and L7. Component count and functional-group count describe different partitions.

The computed d-line EFL is 24.055723 mm. Gaussian BFD is 7.983953 mm from the final refracting vertex. The first-to-last vertex span is 23.75 mm; adding the published Bf = 7.98 mm gives a 31.73 mm source image-plane track. The Gaussian image lies 0.003953 mm beyond that stated plane, consistent with the rounded published data. The entrance principal plane is −2.938359 mm from the first vertex and the exit principal plane is −16.071770 mm from the last vertex. These signed offsets use positive distance toward the image.

The functional-group EFLs are −28.352905, +13.577789, +26.978250 and −21.262081 mm. The patent’s general statement in ¶0041 that group III has greater positive power than group II is not supported by these Example 1 values; the numerical prescription is retained unchanged. The source-plane track/EFL is 1.319021 and BFD/EFL is 0.331894. Neither a telephoto nor a retrofocus classification follows from those reference-plane tests.

The stop is specified 0.90 mm before L4. It is inserted into the 2.06 mm source gap after surface 5, leaving 1.16 mm before and 0.90 mm after the stop. The stop radius is derived as 5.608870 mm from an exact marginal ray at f/1.96. The nominal entrance-beam radius from EFL/(2 × f-number) is 6.136664 mm. The paraxial pupil estimate used to place the display fan is 6.511541 mm; exact marginal-ray calibration and that first-order estimate are distinct. This uses the published f-number as a calibration target; it is not independent evidence of a measured physical diaphragm. All original refracting planes remain; no cover plate is listed or invented.

## Element-by-Element Analysis

### L1 — Biconcave Negative

nd = 1.64769, νd = 33.8. Glass: E-FD2 (HOYA spectral proxy; production glass unconfirmed). f = -28.352905 mm.

L1 supplies the negative first functional group. Its object-side radius has greater curvature magnitude than its rear radius, as described in ¶0053. The relatively high dispersion satisfies the patent condition ν1d < 45. Its standalone power is also the group-I power.

### L2 — Biconvex Positive

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA spectral proxy; production glass unconfirmed). f = +9.588638 mm.

L2 is the positive component of the cemented front doublet. Its strong isolated positive power must not be confused with the net cemented-group power: the neighboring negative L3 and their shared refracting interface materially change the assembled behavior.

### L3 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: J-SF03 (HIKARI spectral proxy; production glass unconfirmed). f = -26.612133 mm.

L3 is cemented to L2 at surface 4. The interface changes from n = 1.88300 to 1.84666 rather than passing through an invented air or cement layer. The assembled L2/L3 group is positive with EFL +13.577789 mm; the quoted element focal length is the isolated-in-air thick-element value.

### L4 — Negative Meniscus, Two Aspheric Surfaces

nd = 1.68893, νd = 31.1. Glass: S-TIM28 (OHARA spectral proxy; production glass unconfirmed). f = -109.848199 mm.

L4 is weakly negative paraxially, with both faces aspheric. It is immediately behind the stop and belongs to the net-positive third group. The patent describes radial redistribution of power on this element in ¶0051; the full high-order profiles are retained rather than inferring peripheral behavior from one coefficient.

### L5 — Positive Meniscus

nd = 1.72916, νd = 54.7. Glass: TAC8 (HOYA spectral proxy; production glass unconfirmed). f = +22.529780 mm.

L5 supplies positive power in group III. Its image-side surface is more strongly curved, and its Nd and νd satisfy the patent’s lower bounds for the positive third-group element. Group III’s combined power is computed separately from the isolated L5 power.

### L6 — Negative Meniscus, Two Aspheric Surfaces

nd = 1.49023, νd = 57.5. Glass: Unmatched rear aspheric material. f = -196.711076 mm.

L6 has weak negative paraxial power and two high-order aspheric faces. It precedes the strongly negative L7 within group IV. The patent recommends plastic for a rear-group aspheric component in ¶0029, but does not identify the material used in this numerical example; no specific polymer or commercial glass is assigned.

### L7 — Biconcave Negative

nd = 1.57135, νd = 53.0. Glass: S-BAL3 (OHARA spectral proxy; production glass unconfirmed). f = -24.355041 mm.

L7 forms the rear negative component. Its strongly concave object-side surface contrasts with its much flatter rear face. The patent’s group-IV focal-ratio condition concerns the combined L6/L7 group, not L7 alone. No aberration contribution is assigned solely from this sign or shape.

## Glass Identification and Selection

The patent publishes Nd and νd, not named commercial melts. Authoritative OHARA, HOYA, HIKARI, Schott, CDGM and SUMITA catalog coordinates were checked. Several modern candidates share each of the six glass-like coordinate pairs, so supplier identity cannot be inferred from a close match. In particular, OHARA S- and L-prefix materials are not interchangeable merely because their suffixes resemble one another.

| Element | Published Nd / νd | Modeled label | Current runtime dispersion source |
|---|---|---|---|
| L1 | 1.64769 / 33.8 | E-FD2 (HOYA spectral proxy; production glass unconfirmed) | E-FD2 (Hoya), coordinate-compatible proxy |
| L2 | 1.88300 / 40.8 | S-LAH58 (OHARA spectral proxy; production glass unconfirmed) | S-LAH58 (Ohara), coordinate-compatible proxy |
| L3 | 1.84666 / 23.8 | J-SF03 (HIKARI spectral proxy; production glass unconfirmed) | J-SF03 (Hikari), coordinate-compatible proxy |
| L4 | 1.68893 / 31.1 | S-TIM28 (OHARA spectral proxy; production glass unconfirmed) | S-TIM28 (Ohara), coordinate-compatible proxy |
| L5 | 1.72916 / 54.7 | TAC8 (HOYA spectral proxy; production glass unconfirmed) | TAC8 (Hoya), coordinate-compatible proxy |
| L6 | 1.49023 / 57.5 | Unmatched rear aspheric material | Abbe fallback; no material established among checked catalogs |
| L7 | 1.57135 / 53.0 | S-BAL3 (OHARA spectral proxy; production glass unconfirmed) | S-BAL3 (Ohara), coordinate-compatible proxy |

Catalog resolution is computational support, not evidence of production material, manufacturing date or supplier. L6 has no tight catalog match and uses the source Nd/νd through an approximate Abbe model. No unsupported C/F/g line values or anomalous-dispersion markers are authored. The unidentified rear material remains on Abbe fallback: a generic PMMA curve would identify neither its resin grade nor its secondary spectrum. Consequently, chromatic simulation mixes catalog proxies with an Abbe approximation and does not establish production chromatic performance or an apochromatic designation.

The d-line surface-by-surface Petzval sum is +0.005772596489 mm⁻¹, using φ/(n·n′) at every refracting boundary, including the cemented interface. It is a first-order curvature quantity, not a direct measurement of the complete astigmatic field surface or image quality.

## Focus Mechanism

The official NATURA S specification states active autofocus over 0.4 m to infinity, but neither that range nor the patent’s single prescription determines which elements move or by how much. All source separations remain fixed, and the focus control is disabled. The camera’s 0.4 m rating is manufacturer metadata, not a simulated finite-conjugate state. No invented focus law, focus breathing or close-focus magnification is reported.

## Aspherical Surfaces

Both faces of L4 (surfaces 6 and 7) and L6 (10 and 11) are aspheric. In patent equation(A),

Z = (h²/R) / [1 + √(1 − Kpatent h²/R²)] + Σ Ap hᵖ.

The application uses 1 + Kmodel in the radicand; therefore Kmodel = Kpatent − 1. Lengths remain in millimetres, no dimensional scaling is applied, and Ap has units mm^(1−p). Every odd and even order from A3 through A20 is retained. Odd powers of radial height remain rotationally symmetric. The printed `VA18` heading is interpreted as A18 from the continuous series and explicit surrounding text.

| Coefficient | Surface 6 | Surface 7 | Surface 10 | Surface 11 |
|---|---:|---:|---:|---:|
| Kpatent | -0.0867768 | -0.1761418 | -0.7463096 | 1.1897725 |
| A3 | -3.2687899E-4 | -5.5296581E-5 | 1.7672768E-3 | 2.8600006E-3 |
| A4 | -5.1371436E-5 | -6.8958799E-5 | -1.3697066E-3 | -1.6922662E-3 |
| A5 | -1.8183760E-4 | 2.8464969E-5 | 2.3434066E-4 | 3.1371638E-4 |
| A6 | 3.7614388E-5 | -3.0841506E-5 | -1.4696107E-5 | -3.9085035E-5 |
| A7 | -6.1217814E-6 | 6.4059405E-6 | -2.6726938E-6 | 3.1387872E-6 |
| A8 | 3.6482760E-7 | -4.5627477E-7 | 5.8166307E-7 | -2.5929509E-7 |
| A9 | 2.5339980E-8 | -7.4763163E-9 | -5.1714746E-8 | 2.8790162E-8 |
| A10 | -2.9629239E-9 | 3.7589133E-9 | 3.3108816E-9 | -2.3153645E-9 |
| A11 | 1.6193746E-10 | 4.4219682E-11 | -9.3248550E-11 | 6.4159536E-11 |
| A12 | 6.6172998E-12 | -1.3263706E-12 | -5.3821370E-12 | 1.4063930E-12 |
| A13 | 8.3773899E-14 | -7.8275905E-13 | -2.4410086E-13 | 1.2240166E-13 |
| A14 | -1.5306494E-14 | -3.0151401E-14 | 8.9853324E-15 | 2.5193301E-15 |
| A15 | -2.9919374E-15 | -1.5839330E-15 | 1.7469691E-15 | -3.4131672E-15 |
| A16 | -2.8418306E-16 | -2.8333679E-16 | 2.4056375E-16 | -1.5643113E-17 |
| A17 | -2.3804089E-17 | -2.6700946E-17 | 6.3911149E-18 | 2.6651905E-17 |
| A18 | -1.7565516E-18 | -8.1626512E-19 | 2.8280214E-18 | -1.2726150E-18 |
| A19 | -8.8029849E-20 | -1.1914021E-20 | -1.6309097E-19 | 3.4469932E-20 |
| A20 | 5.4685132E-21 | 6.3534512E-21 | -1.8068655E-20 | -1.0397494E-21 |

| Surface | Kmodel | Modeled SD (mm) | Departure from same-radius sphere at that SD (mm) | Actual rim slope |
|---|---:|---:|---:|---:|
| 6A | -1.0867768 | 5.900 | -0.715657 | -0.218462 |
| 7A | -1.1761418 | 6.200 | -0.174170 | +0.385951 |
| 10A | -1.7463096 | 10.100 | -2.451110 | -0.458915 |
| 11A | 0.1897725 | 10.100 | -3.492159 | -1.823193 |

These departures are evaluated at inferred model apertures, not published clear diameters. At the chosen rim, surface6’s complete polynomial almost cancels its positive spherical-base sag. Its radial slope reverses smoothly before the modeled rim; finite slope and positive lens thickness distinguish this annular turn from an invalid surface intersection. Surface7 retains a positive rim sag smaller than the same-radius sphere. Surface10’s negative departure deepens its negative profile, while surface11’s stronger negative departure steepens the rear profile at its modeled edge. These statements concern the evaluated full profiles; an isolated coefficient sign does not identify a unique aberration correction.

The inferred lens semi-diameters pass the current rim-slope, conic-domain, positive-thickness and shared-band air-gap checks. They are supported by exact ray calculations and qualitative section geometry. Neither the patent drawing nor the low-resolution manufacturer bitmap supplies measured production clear apertures.

## Field Coverage and Modeling Limits

The published half-field is 41.8°. It is retained explicitly as 83.6° rectilinear coverage rather than accepting the runtime’s smaller automatic field estimate. The historical paraxial-iris model passed its documented finite stop-aimed fan and published-field chief-ray checks. The actual main runtime, using its separately recalibrated iris, passes all six default axial rays (including the ±0.83 pupil fractions), all five default off-axis rays, and the published-field chief ray. These are distinct aperture constructions and launch conventions. Substantial outer-pupil edge-field clipping and total internal reflection occur in the sampled model; the model therefore does not certify full unvignetted f/1.96 illumination over the entire film diagonal. No production illumination or MTF curve is inferred from this sampling.

At the printed 41.8° half-field, the runtime chief reaches an image-height magnitude of 21.599388 mm at the published source plane. The separately tabulated Y = 21.633 mm is reached by a clear chief at 41.846197°, within the rounding interval of the printed one-decimal field angle. These small differences are retained rather than changing the source field or image plane.

The image-circle proxy audit still flags surfaces 11A, 12 and 13 because its exit-slope bound is inadequate here; exact chief-ray coverage is the separate supporting result. Surface 6A retains the source-defined radial slope reversal near 4.162 mm within its inferred 5.9 mm clear semi-diameter. These qualifications remain explicit; this is not an ordinary all-heuristics audit pass.

The last source image plane is preserved, and the data file’s physical aperture geometry does not use relaxed rim/gap policy or rendering trim to hide defects. Clear diameters, field-edge illumination, manufacturing tolerances, exact production materials and finite autofocus motion remain modeling limitations.

## Source References

1. [US20060007561A1, original patent publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=US20060007561A1). Cover; Fig.1, PDFp2; equation(A), Table1 and ¶0043–0055, PDFp10/printedp4; Tables2–3 and stop ¶0057, PDFp11/printedp5; conditions/definitions, PDFpp8–9. The unchanged original is retained locally.
2. [Fujifilm Research & Development No.50 (2005), Development of NATURAL PHOTO SYSTEM](https://asset.fujifilm.com/www/jp/files/2019-10/6d7be2098b3b5354f88309eda64035ed/rd_report_ff_rd050_002.pdf). PDFp1/printedp4: October2004 availability; PDFp4/printedp7: lens description and Fig.8. The unchanged manufacturer PDF is included.
3. [Fujifilm NATURA S / NATURA BLACK F1.9 official specifications](https://fujifilm.jp/personal/filmandcamera/filmcamera/35mm/naturas/specs.html). Lens, film format and autofocus rows; retained official HTML is included.
4. Manufacturer catalog coordinates: [OHARA 2026-07-01](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [HOYA 2026-07-07](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), [SUMITA catalog](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). Modern equivalents are not source melt identifications.

## Optical Rim Review

The inferred semi-diameters follow the optical edges of Fig. 1 rather than its leader lines or brackets. L1 now has a common 8.3 mm rim; the L2/L3 cemented pair uses 7.6 mm on surfaces 3–5; L5 uses 8.3 mm on both surfaces; and L7 uses 12.6 mm on both surfaces. These refinements remove unsupported tapered ends while preserving all source radii, spacings and asphere coefficients. L6 now has a common 10.1 mm rim on its two aspheric faces; the aspheric departure and slope above are recomputed at this height. Surface validation, the exact format-corner chief and the default ray fans pass. The conservative image-circle proxy warning remains a documented limitation of that heuristic for this short-back-focus design.
