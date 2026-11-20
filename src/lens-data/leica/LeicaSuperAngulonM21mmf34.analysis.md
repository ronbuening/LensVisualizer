# LEICA SUPER-ANGULON-M 21mm f/3.4 — private patent-derived tuning draft

## Patent reference and identification

**Patent:** [DE 1,273,853 B](https://patents.google.com/patent/DE1273853B/)
**Published:** 1968 (year retained from structured publication source)
**Inventors:** Karl Heinrich Macher
**Applicant:** Jos. Schneider & Co., Optische Werke

The structured example is Sole example. This is a patent-derived representative for in-app tuning, not an exact factory prescription or a validated retail reconstruction. Optical branch/source discrepancies and variants remain separate in the retained evidence. No new supplier, measured aperture or production identity is inferred.

## Optical architecture and modeled field

Patent-derived infinity tuning model. Estimated clear apertures and stepped outer geometry; sampled clipping is modeled vignetting, not retail performance.

Native computed EFL: 21.020574 mm. Modeled full field: 90°; maximum traced half-field: 45°. Source/image-plane choice retained at native z=53.0838 mm. Native default geometry validation passes with zero rendering trim. Chief rays at0,half of the stated maximum,and the maximum reach the final surface without clipping. This does not prove measured retail coverage or full-pupil transmission.

## Elements and source glass data

| Element | Label | Printed n | Abbe number | Surface span |
| --- | --- | ---: | ---: | --- |
| 1 | L1 | 1.52249 | 59.64 | automatic source-surface assignment |
| 2 | L2 | 1.72372 | 38.09 | automatic source-surface assignment |
| 3 | L3 | 1.60729 | 49.25 | automatic source-surface assignment |
| 4 | L4 | 1.56013 | 47.03 | automatic source-surface assignment |
| 5 | L5 | 1.56732 | 42.82 | automatic source-surface assignment |
| 6 | L6 | 1.62299 | 58.12 | automatic source-surface assignment |
| 7 | L7 | 1.717 | 47.9 | automatic source-surface assignment |
| 8 | L8 | 1.54072 | 47.22 | automatic source-surface assignment |

Published powers and spacings are preserved. The glass-index/Abbe palette controls paraxial power and the modeled dispersion; exact commercial glass identification and unlisted spectral departures are not established. Per-element powers are not separately measured here. Do not infer a supplier from the source index pair alone.

## Estimated apertures, rims and tuning limits

Exact German d-line table at.21 scale, US scan cross-check retained. Estimated midpoint iris z24.02715mm. Rear triplet clear endpoints are inferred; real outer bodies are stepped. Published R/d/n and source BFD8.190mm are retained, computed8.193009mm is separate. At45deg current model transmits175/577 unweighted sampled rays;7S8 whole-sphere misses are retained as entry to unavailable sphere regions, not repaired by radius enlargement. Next tuning step: inspect stepped-body and rear aperture assumptions;90deg modeled field is not the retail92deg measurement.

Published radii, spacings, source glass data and image-plane choices remain in the retained baselines. Ordinary clipping and every sampled miss are retained in diagnostics; sample counts are not radiometric throughput.


## Focus mechanism and conjugates

Infinity-only static prescription. The closeFocusM field is a schema placeholder; focus movement and finite conjugates are not reconstructed. The viewer's focus control remains disabled. Keep the source plane or explicitly documented German computed plane; do not silently optimize refocus or substitute another patent branch.

## Validation and sensitivity scope

These four models are tuning drafts, not newly qualified lenses. Native build/render/fidelity and0/mid/edge chief checks are recorded in tuning-pass-20261118/evidence/native-check.json. Prior aperture/iris/branch sensitivities remain in the cumulative checkpoint; they are not new measurements. Current modeled vignetting and analysis outputs describe these explicit estimated boundaries. Unweighted ray counts are not throughput. Desktop/mobile viewer, formatting, types and targeted regression evidence are supplied in the delivery.

## Sources and next steps

Use the linked primary numerical source and the preserved baselines before changing any optical value. Tune estimated clear-versus-outer endpoints and iris assumptions within positive edge thickness, non-crossing gaps and declared field limits. Expand field only after tracing the new range. Retain failed/clipped rays in diagnostics. Additional factory measurements may improve realism but are not a prerequisite for using this disclosed tuning draft.
