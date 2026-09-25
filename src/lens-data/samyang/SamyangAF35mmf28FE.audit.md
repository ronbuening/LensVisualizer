# SamyangAF35mmf28FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR102127451B1.pdf, PDF page 24, Figure 7, Example 4`. Inspected at 600 dpi; axial screening scale approximately 25.44 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| All | Existing | Retained | Optical rims agree approximately; larger screening values include the stepped mounting outline and labels. |

All seven source pairs retain the documented e-line-like index / d-line Abbe ambiguity. No index conversion, tolerance relaxation, or opportunistic unrelated glass match is applied. Coverage remains 0/7; the source limitation is explicit in the analysis.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/KR102127451B1.pdf`, Example 4 Tables 10–12 on PDF pp. 15–16. All 13 powered radii, thicknesses/gaps, seven raw nd/νd pairs and every K/A/B/C/D coefficient on S3/S13/S14 agree (A/B/C/D→A4/A6/A8/A10). Standard K convention; no scaling. All three focus states agree, infinity D1=2 and D2=3.66560705. Mixed-coordinate glass caveat retained; do not substitute vendor indices.

Table 10 unambiguously prints d14=16.862, S15 Filter t=2.500 / nd=1.51680 / νd=64.20 and d16=0.500 to Image; the Image row has D3 but no additional downstream optical surface. Restore this physical path in rearPlates instead of the former 19.70032771 “in Air” value from Table 12. Physical rear distance is 19.862; reduced rear distance is 16.862+2.5/1.5168+0.5=19.010206751 mm. Thus this is not simply unfolding an equivalent plate: the two source rows disagree by 0.690120959 mm.

The surface sum to S14 is 27.13860705; the printed physical image track is 47.00060705 versus Table 12 OAL=46.500. Omitting d16 would approximately reproduce OAL but violate the explicit image row, so no such correction is made. Independent EFL 35.182840213 differs from Table 12 f=35.17940614; air BFL 19.510224994 differs from both rear-distance alternatives. No single supported misprint reconciles all values.

**Cause/action:** omitted filter plus contradictory source image-distance conventions. Restore Table 10 physical path, preserve all published powered values and document competing Table 12 quantities. Offset **−0.190103 → +0.500018 mm**; Section E row deleted despite remaining census inclusion. Changelog records restored filter/image path.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
