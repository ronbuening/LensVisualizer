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

## 2026-10-08 — Elements e-referenced with five catalog glasses

KR 10-2127451 B1 Table 10 heads its index column nd but prints e-line indices with d-line Abbe numbers. Five of the seven equal a HOYA catalog glass at the e line to all five printed decimals, each with that glass's exact νd: L1 E-FD10 (1.73432 / 28.32), L3 E-F2 (1.62408 / 36.30), L4 E-FDS1 (1.93323 / 20.88), L5 TAFD5F (1.83945 / 42.72) and L6 E-FD2 (1.65222 / 33.84). The two moulded aspheres are close but not equal: L2 is 0.00020 above the 773496 class (1.77621) and L7 is 0.00030 below the 689312 class (1.69415).

The file had kept the printed values d-referenced and every element Unmatched, because naming only some e-line glasses mixed reference lines between elements. The dispersion tiers now trace e-referenced elements at C′/e/F′/g whether or not they resolve, so the same switch made on the ZEISS Batis 40mm f/2 CF applies here.

- All seven elements set to `indexReference: "e"` with the printed index and Abbe number unchanged, and an `indexReferenceNote` on each stating that the Abbe slot holds the printed d-line value.
- L1, L3, L4, L5 and L6 labelled with their HOYA names; they trace on catalog curves anchored to the printed index. L2 and L7 stay Unmatched on the Abbe estimate.
- The filter plate prints the d-line 1.51680 / 64.20, stays d-referenced and is labelled BSC7 (HOYA) as a coordinate equivalent.
- Focal length, f-number and the reference trace are unchanged (EFL 35.1828 mm). Paraxial focus against green moved from R +25, B −12, V +22 µm (all on the Abbe estimate) to R +32, B +9, V +60 µm.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.35 → 0.387 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 10.4 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed TL = 0.3 m row is internally inconsistent; focus description gives the 0.35 m MFD.
- `catalog.closeFocusM.marketing` 0.35 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: analysis: the close endpoint is labelled 0.387 m; the 0.35 m production figure is marketed metadata.

## 2026-11-03 — Image-plane consistency (erratum)

KR 10-2127451 B1 Example 4 Table 10 (PDF p. 15) prints d14 = 16.862, Filter t = 2.500 (1.51680 / 64.20) and
d16 = 0.500 mm to the image. With that path the plane sat 0.500018 mm before paraxial focus (50.6 depths at F/2.9).
Two independent kinds of source-internal evidence isolate d16 as printed 0.500 mm short:

- **source-summary:** with d16 = 1.000 mm, the printed D1/D2 rows of Table 12 (PDF pp. 15–16) focus at Table 12's own
  D0. Infinity, the MAG = −1/40 row and the TL = 0.3 m row land at ∞, 1426.24 and 302.02 mm. Their Gaussian
  magnifications are −0.024956 and −0.123151, against the printed 0.025 and 0.123. With 0.500 mm the rows focused at
  3314.83 and 339.54 mm. OAL = 46.500 mm equals first vertex to the filter's rear face (27.13861 + 16.862 + 2.500),
  which supports d14 as printed and points at d16.
- **aberration-figure:** FIG. 8 (PDF p. 25), the Example 4 ray fan at HFOV 32.37°, shows a flat axial fan on its
  ±0.05 mm scale. A 0.5 mm defocus at F/2.9 would tilt it by about ±0.086 mm. The Table 12 "in Air" 19.70033 mm
  distance would tilt it by about ±0.033 mm, so the fan rejects that path too.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| `rearPlates[0].gapAfterMm` (d16) | 0.5 | 1.0 | Corrected erratum (source-summary, aberration-figure) |
| `focus.closeFocusM` | 0.387 | 0.3495 | TL = 0.3 m row object to image 349.523 mm |
| `focus.keyframes[1]` | 0.237653048385 | 0.237152 | 0.3495 / 1.473736 (MAG = −1/40 row object to image) |

- Residual: +0.500018 → +0.000018 mm. EFL unchanged (35.182840 mm); track 47.000607 → 47.500607 mm. D1/D2 travel is
  unchanged (printed rows kept).
- Close focus 0.387 → 0.3495 m; `catalog.closeFocusM.marketing` stays 0.35 m (Samyang's image-sensor-to-object MFD).
- `source.errata` cannot record this correction. The validator accepts only a lens surface's R, d or nd, and a
  rear-plate gap belongs to the synthetic surface `RP1b`, which `surface` cannot name. A test entry naming `RP1b` was
  rejected ("surface must match a surface label"). The correction is therefore recorded in the other three places: the
  inline comment on `gapAfterMm`, the data-file header and this entry.
- No focus gap moved. Aperture, image-circle, field-coverage (90–99 % bucket) and surface-probe audits are unchanged.

Follow-ups: the Table 12 "in Air" 19.70032771 mm value remains unexplained. Allowing `source.errata` to name a
rear-plate gap would let this correction be disclosed in the MTF tab.
