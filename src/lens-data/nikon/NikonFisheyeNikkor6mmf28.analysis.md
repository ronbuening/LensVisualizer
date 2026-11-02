# Nikon Fisheye-Nikkor 6mm f/2.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,737,214  
**Title:** Wide Angle Fisheye Lens  
**Application Number:** US 184,782  
**Filed:** September 29, 1971  
**Granted:** June 5, 1973  
**Priority:** September 30, 1970, Japan 45/85420  
**Inventor:** Yoshiyuki Shimizu  
**Assignee:** Nippon Kogaku K.K.  
**Example details:** corresponding to Claim 1

Example I is the selected patent correlation for the production Fisheye-Nikkor 6mm f/2.8. Its nominal 6.3 mm, F/2.8, 220° field and twelve powered elements in nine groups agree with that design family. The patent does not identify a production prescription or glass supplier. This model includes its additional internal filter and a disclosed sign correction supported by the patent's own section, first-order specifications and aberration plot.

## Source Sign Erratum and Numerical Verification

The Example I table on PDF page 7 prints R18=−45.0 mm. Figure 1 on page 2 instead draws the object-side face of the middle rear doublet convex toward the object, requiring positive R under the source's sign convention. Independently entered reduced-angle matrices give:

| R18 interpretation | Gaussian EFL | Back focal length from R23 |
|---|---:|---:|
| Printed −45 mm | 37.413237932 mm | 273.214284467 mm |
| Applied +45 mm | 6.299885500 mm | 37.657615390 mm |
| Source specification | 6.3 mm | 37.657 mm |

The source's Figure 2A plots spherical-aberration focus within ±0.5 mm at F/2.8. An exact spherical Snell sweep at launch heights 0.001–1.125 mm gives longitudinal focus departure −0.151 to +0.247 mm with the positive sign, but +235.6 to +395.0 mm with the negative sign, relative to the same published image plane. Figures 2B and 2C also identify the 6.3-mm example and its 110° half-field. The claims repeat the front R1–R9 prescription and do not independently repeat R18. The correction is therefore recorded in `source.errata` using the source summary and aberration figure as independent evidence; it is not a numerical fit to marketing data.

Every other printed powered radius, sign, thickness and refractive-index/Abbe pair was rechecked and retained. No length scale is applied. The corrected Gaussian EFL now agrees with the patent's focal length; the earlier suggestion that the 37.4-mm mismatch was explained by a different fisheye projection convention is superseded.

## Optical Architecture

The all-spherical system has twelve powered elements in nine groups plus one drawn internal filter, for thirteen modeled glass entries. Three negative crown menisci form the large front dome sequence, followed by an air-spaced negative/positive pair. Their isolated group EFL is −9.511066 mm. The positive rear relay comprises a weak positive singlet and three cemented doublets; its isolated EFL is +32.879622 mm. These are subassembly powers in air and are not additive contributions to the full 6.299886-mm system.

Correcting R18 makes L9 biconvex positive (R18=+45, R19=−14.4), with standalone EFL +22.065037 mm. Its negative partner L10 shares R19; the complete middle rear doublet is positive, EFL +66.186468 mm. It is no longer described as a negative middle doublet. All other source element shapes and glass coordinates remain unchanged. The corrected surface-by-surface Petzval sum is −0.005742535 mm⁻¹ (signed reciprocal radius approximately −174.139 mm), a computed first-order diagnostic rather than a patent-tabulated field-curvature measurement.

## Aperture Stop and Internal Filter

Figure 1's stop marker lies behind R17, inside the printed 13.0-mm R17–R18 interval. A native-raster ratio measurement places it about 0.45 of the interval from R17; this model adopts a 6.0/7.0-mm split with roughly ±0.3-mm positional uncertainty. Its absolute infinity station is z=148.0 mm from R1. The source does not publish its coordinate or diameter. The existing f-number rule derives a physical semi-diameter of 7.523328 mm at F/2.8; the entrance-pupil semi-diameter is 1.125 mm.

Required filter R11/R12 retains 25.0 mm of air before it, 1.8 mm of glass at source nd=1.51823, and 2.8 mm of air after it. The filter's Abbe number is not published. A separate powered element's Abbe value cannot be copied merely because nd agrees, so this plate has a constant-index spectral model and no claimed catalog identity. Its 9.5-mm inferred radius follows the adjacent source aperture envelope. It is included in the runtime optical geometry; catalog construction remains twelve powered elements/nine groups, with the plate counted separately.

The physical infinity track to the last vertex is 168.2 mm, and the image plane is 205.857 mm from R1. The source final gap is 37.657 mm, within 0.000616 mm of the corrected paraxial best focus.

## Glass Review

The table defines indices at the yellow helium d line and gives Abbe numbers for all twelve powered elements. It supplies no C/F/g line indices, Sellmeier coefficients or partial-dispersion ratios. The current resolver uses qualified catalog curves while preserving the source reference index; these curves do not establish production supplier, melt, cement or annealing identity.

| Element | Source nd / νd | Current spectral model |
|---|---|---|
| L1–L3, L12 | 1.51680 / 64.2 | J-BK7A proxy |
| L4 | 1.62041 / 60.3 | J-SK16 proxy |
| L5 | 1.72825 / 28.3 | J-SF10 proxy |
| Filter | 1.51823 / not published | Constant index; dispersion unresolved |
| L6 | 1.64831 / 33.8 | J-SF2 near proxy, catalog Δnd=−0.000620, Δνd=−0.07 |
| L7 | 1.53375 / 55.4 | Unresolved historical coordinate; Abbe fallback |
| L8 | 1.77250 / 49.5 | J-LASF016 proxy |
| L9 | 1.51823 / 59.0 | J-K3 proxy |
| L10 | 1.79631 / 40.8 | NBFD2 near proxy, catalog Δnd=+0.000889, Δνd=+0.343795 |
| L11 | 1.71736 / 29.5 | J-SF1 proxy |

Eleven powered elements have available catalog curves; L7 and the filter remain unresolved. No partial-dispersion data or APD performance is invented.

## Drawn Rims and Validation

The first three menisci have source-published effective diameters. L1 retains its 106.5-mm front radius and conservative 46.7-mm rear cap. A rear flat land reaching that full body would require cap radius at least 51.071832 mm, beyond the existing spherical 0.9R limit of 47.25 mm. With the retained cap it gives −11.825-mm edge thickness, so the full land is rejected. L2/L3 do support rear lands from their retained 28.0/15.2-mm clear caps to their existing 50.0/28.0-mm body rims. The measured source rear effective radii 30.5/16.5 mm remain constrained by the existing spherical limit; no tolerance is relaxed.

The R18 sign and stop corrections clear the nominal axial beam with the original rear inferred rims, so the temporary 8.1/8.4-mm raises used during the literal-sign investigation are removed. All 25 sampled axial stop-pupil rays pass at infinity and the estimated focus endpoint. Current aperture validation is iris-limited at approximately f/2.841874, within the existing 3% check. Canonical surface and image-circle checks pass; nine actual SVG states have finite paths and zero automatic render trim.

Projection-aware vector samples improve through 75° compared with the literal-sign model. The generic chief-ray bracket still fails at 85°–110° under the retained guard-constrained front caps, so complete 220° throughput is not established by those checks. A bracket failure is not a quantitative vignetting measurement, and discrete pupil counts are not flux percentages.

## Focus Mechanism

Only the infinity prescription is published. The existing unit-focus estimate retains the final gap change 37.657→37.819 mm (0.162-mm travel) and production-level 0.25-m metadata. With the corrected source system the estimated endpoint's paraxial object distance is 194.855400 mm ahead of R1, or approximately 0.400874 m object-to-image. It is not a source-published finite prescription or an independently reconstructed production minimum-focus state. No travel law is adjusted to force the rounded product distance.

## Sources

- Yoshiyuki Shimizu, US Patent 3,737,214, *Wide Angle Fisheye Lens*, Nippon Kogaku K.K. Local `US3737214.pdf`: PDF page 2 Figure 1; page 3 Figures 2A–2C; page 7 Example I and d-line convention; page 8 claim definitions.
- Current project catalog entries for the named spectral proxies, checked for resolver compatibility and coefficient availability. Their catalog provenance does not identify Nikon's historical production materials.
