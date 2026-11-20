# LEICA SUPER-ANGULON 21mm f/4 — private patent-derived tuning draft

## Patent reference and identification

**Patent:** [DE 1,107,416 B](https://patents.google.com/patent/DE1107416B/)
**Published:** 1961 (year retained from structured publication source)
**Inventors:** Günter Klemt; Karl Heinrich Macher
**Applicant:** Jos. Schneider & Co., Optische Werke

The structured example is Sole example. This is a patent-derived representative for in-app tuning, not an exact factory prescription or a validated retail reconstruction. Optical branch/source discrepancies and variants remain separate in the retained evidence. No new supplier, measured aperture or production identity is inferred.

## Optical architecture and modeled field

Patent-derived infinity tuning model. Estimated rims and iris. Limited to 70 degrees modeled full field; not the retail 92-degree coverage.

Native computed EFL: 20.996501 mm. Modeled full field: 70°; maximum traced half-field: 35°. Source/image-plane choice retained at native z=52.258500000000005 mm. Native default geometry validation passes with zero rendering trim. Chief rays at0,half of the stated maximum,and the maximum reach the final surface without clipping. This does not prove measured retail coverage or full-pupil transmission.

## Elements and source glass data

| Element | Label | Printed n | Abbe number | Surface span |
| --- | --- | ---: | ---: | --- |
| 1 | L1 | 1.6583 | 57.49 | automatic source-surface assignment |
| 2 | L2 | 1.4645 | 65.79 | automatic source-surface assignment |
| 3 | L3 | 1.58904 | 53.16 | automatic source-surface assignment |
| 4 | L4 | 1.60729 | 49.25 | automatic source-surface assignment |
| 5 | L5 | 1.52944 | 51.8 | automatic source-surface assignment |
| 6 | L6 | 1.61772 | 49.78 | automatic source-surface assignment |
| 7 | L7 | 1.7847 | 26.1 | automatic source-surface assignment |
| 8 | L8 | 1.53375 | 55.37 | automatic source-surface assignment |
| 9 | L9 | 1.65844 | 50.84 | automatic source-surface assignment |

Published powers and spacings are preserved. The glass-index/Abbe palette controls paraxial power and the modeled dispersion; exact commercial glass identification and unlisted spectral departures are not established. Per-element powers are not separately measured here. Do not infer a supplier from the source index pair alone.

## Estimated apertures, rims and tuning limits

Literal German f/4 example with source BFD7.728mm retained. Clear apertures and midpoint iris are inferred. Full field is deliberately limited to70deg (35deg half-field) because current S12 cap6.8mm clips chiefs near36.3177deg. The retail92deg and predecessorf8~100deg are not claimed. No fictitious radius widening or optimized refocus. Next tuning step: inspect S12/S13 clear-versus-outer geometry before expanding field. The prior90deg exploratory branch remains a separate sensitivity.

Published radii, spacings, source glass data and image-plane choices remain in the retained baselines. Ordinary clipping and every sampled miss are retained in diagnostics; sample counts are not radiometric throughput.


## Focus mechanism and conjugates

Infinity-only static prescription. The closeFocusM field is a schema placeholder; focus movement and finite conjugates are not reconstructed. The viewer's focus control remains disabled. Keep the source plane or explicitly documented German computed plane; do not silently optimize refocus or substitute another patent branch.

## Validation and sensitivity scope

These four models are tuning drafts, not newly qualified lenses. Native build/render/fidelity and0/mid/edge chief checks are recorded in tuning-pass-20261118/evidence/native-check.json. Prior aperture/iris/branch sensitivities remain in the cumulative checkpoint; they are not new measurements. Current modeled vignetting and analysis outputs describe these explicit estimated boundaries. Unweighted ray counts are not throughput. Desktop/mobile viewer, formatting, types and targeted regression evidence are supplied in the delivery.

## Sources and next steps

Use the linked primary numerical source and the preserved baselines before changing any optical value. Tune estimated clear-versus-outer endpoints and iris assumptions within positive edge thickness, non-crossing gaps and declared field limits. Expand field only after tracing the new range. Retain failed/clipped rays in diagnostics. Additional factory measurements may improve realism but are not a prerequisite for using this disclosed tuning draft.
