# FUJIFILM FUJINON SWS 50mm f/5.6 — private patent-derived tuning draft

## Patent reference and identification

**Patent:** [JP S50-96221 A](https://patents.google.com/patent/JPS5096221A/)
**Published:** 1975 (year retained from structured publication source)
**Inventors:** Ryoichi Doi; Yutaka Sakai
**Applicant:** Fuji Photo Optical Co., Ltd.

The structured example is Table 1 1. This is a patent-derived representative for in-app tuning, not an exact factory prescription or a validated retail reconstruction. Optical branch/source discrepancies and variants remain separate in the retained evidence. No new supplier, measured aperture or production identity is inferred.

## Optical architecture and modeled field

Application .393 branch, infinity tuning model. Estimated rims/clear apertures; drawing transverse scale uncalibrated. Grant .383 remains a separate sensitivity.

Native computed EFL: 49.998315 mm. Modeled full field: 90°; maximum traced half-field: 45°. Source/image-plane choice retained at native z=109.5155 mm. Native default geometry validation passes with zero rendering trim. Chief rays at0,half of the stated maximum,and the maximum reach the final surface without clipping. This does not prove measured retail coverage or full-pupil transmission.

## Elements and source glass data

| Element | Label | Printed n | Abbe number | Surface span |
| --- | --- | ---: | ---: | --- |
| 1 | L1 | 1.6425 | 58.1 | automatic source-surface assignment |
| 2 | L2 | 1.56883 | 56 | automatic source-surface assignment |
| 3 | L3 | 1.65844 | 50.8 | automatic source-surface assignment |
| 4 | L4 | 1.54814 | 45.9 | automatic source-surface assignment |
| 5 | L5 | 1.5231 | 50.9 | automatic source-surface assignment |
| 6 | L6 | 1.6516 | 58.5 | automatic source-surface assignment |
| 7 | L7 | 1.72825 | 28.3 | automatic source-surface assignment |
| 8 | L8 | 1.65844 | 50.8 | automatic source-surface assignment |

Published powers and spacings are preserved. The glass-index/Abbe palette controls paraxial power and the modeled dispersion; exact commercial glass identification and unlisted spectral departures are not established. Per-element powers are not separately measured here. Do not infer a supplier from the source index pair alone.

## Estimated apertures, rims and tuning limits

Application d9=.393 retained; grant .383 is a separate controlled sensitivity, never merged. Fixed source image109.5155mm; iris37.0155mm derives from72.5mm source distance. Aperture diameters are paraxial model estimates. Transverse Fig1 scale is uncalibrated: drawn front~40.4mm versus prose~44mm does not establish clear diameter. S10/S11 have a .47mm source airgap; current common10mm endpoint leaves.1123mm gap. Next tuning step: adjust clear versus outer endpoints within positive-gap geometry. Source indices are lowercase d-line; no exact supplier glass claim.

Published radii, spacings, source glass data and image-plane choices remain in the retained baselines. Ordinary clipping and every sampled miss are retained in diagnostics; sample counts are not radiometric throughput.


## Focus mechanism and conjugates

Infinity-only static prescription. The closeFocusM field is a schema placeholder; focus movement and finite conjugates are not reconstructed. The viewer's focus control remains disabled. Keep the source plane or explicitly documented German computed plane; do not silently optimize refocus or substitute another patent branch.

## Validation and sensitivity scope

These four models are tuning drafts, not newly qualified lenses. Native build/render/fidelity and0/mid/edge chief checks are recorded in tuning-pass-20261118/evidence/native-check.json. Prior aperture/iris/branch sensitivities remain in the cumulative checkpoint; they are not new measurements. Current modeled vignetting and analysis outputs describe these explicit estimated boundaries. Unweighted ray counts are not throughput. Desktop/mobile viewer, formatting, types and targeted regression evidence are supplied in the delivery.

## Sources and next steps

Use the linked primary numerical source and the preserved baselines before changing any optical value. Tune estimated clear-versus-outer endpoints and iris assumptions within positive edge thickness, non-crossing gaps and declared field limits. Expand field only after tracing the new range. Retain failed/clipped rays in diagnostics. Additional factory measurements may improve realism but are not a prerequisite for using this disclosed tuning draft.
