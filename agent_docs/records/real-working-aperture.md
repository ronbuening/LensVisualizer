# Real-ray working aperture follow-up

User-approved follow-up to the optical accuracy review, prompted by the Plena displaying selected f/1.9 and
working f/1.8 at infinity. Preserve physical stop calibration and source uncertainty; do not clamp calculated
working f-number to the selected value.

## 1. Engine and physical references

- Added exact marginal-ray aiming at the current physical stop and image-space `1 / (2 n sin(theta))` measurement.
  Uses prescription reference indices and checks actual clear apertures without drawing clearance. Clipped,
  failed, annular, folded, phase, tilted and other unsupported configurations return explicit unavailable states.
- At infinity, use a collimated source. At finite focus, infer the axial source conjugate from the current
  prescription and sensor plane, independently of the catalog focus-distance label. This source inference is
  paraxial; the marginal ray, refraction and outgoing numerical aperture are exact. An explicit source distance
  from the first vertex can override it for reference tests or other analysis callers.
- Independent tests use straight-ray cone geometry and conservation of `n sin(theta)` at a planar dielectric
  interface. Plena regression tests preserve the existing stop diameter and distinguish real/paraxial results.
- Shared the existing infinity threshold through the constants module to avoid a layout dependency in tracing.

- Stage 1 gates passed: typecheck, formatting, lint, 303 test files / 2824 tests, and full coverage.
  Coverage: statements 92.18%, branches 83.67%, functions 93.91%, lines 94.89%; thresholds unchanged.

## Plena source check

- Inspected local `patents/WO2024147268A1.pdf`, PDF pages 20–21 (printed pages 18–19), Table 1: f=132.30 mm,
  FNO=1.85, stop at surface 10. The table publishes no stop diameter. The surrounding definition calls FNO the
  system F-number without prescribing a real-ray versus paraxial calibration convention.
- Cross-check: <https://patents.google.com/patent/WO2024147268A1/en>, Table 1 and paragraphs 0111–0118.
  Working f-number definition: <https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v26102/en/OpticStudio_User_Guide/OpticStudio_Help/topics/Working_F.html>.
- Retained the inferred real-ray-calibrated stop diameter, 42.91659142 mm. At infinity the new real-ray value is
  1.83256287, while the existing paraxial working value is 1.77471553. Selected design aperture remains 1.85.
  At the current close-focus geometry, the inferred source is 663.8394 mm from the first vertex and real-ray working
  f-number is 2.03597145. These are model outputs, not measured production-lens specifications.

## 2. Shared reporting and controls

- Viewer, comparison and Summary now use the same real-ray working result. Retained explicitly labeled paraxial
  working/geometric f-numbers and pupil diameters, and exposed the inferred source distance in Summary.
- Preserved design-aperture hundredths, including the slider endpoint and quick selection. Removed the misleading
  f/1.8 quick choice on a prescription whose actual minimum is f/1.85. Enabled working readouts show small
  differences and unavailable states, with no numerical clamp or silent paraxial fallback.
- Bounded shared report retention to 16 iris settings per prepared state. Active movement suppresses the centered
  working value. Scalar PSF keeps its previous paraxial spacing heuristic and its independent convergence checks.
- Retained analytic paraxial regressions. Exact-ray tests now check nonlinear stop-down behavior and explicit
  clipping/failure states; broad assumptions that every rim trace succeeds or scales linearly are no longer valid.
- Live localhost checks passed for the Plena at infinity, closest focus and f/8, and for Plena/Leica comparison.
  Verified slider/Summary agreement, the separate paraxial label, the precise f/1.85 compact header and the shared
  aperture controls; inspected the comparison layout visually.
- Stage 2 gates passed: typecheck, formatting, lint, full normal tests and final full coverage (303 files / 2828 tests).
  Final coverage: statements 92.21%, branches 83.79%, functions 93.94%, lines 94.90%; thresholds unchanged.
  Production build prerendered all 1243 routes. Generated folder documentation is current; import cycles remain at
  the original three. Both implementation stages are complete.

## Catalog follow-up: continuous source (step 1)

- Replaced the aperture-only absolute Gaussian conjugate with the same infinity-referenced real-ray sensitivity
  used by diagram focus tracking. The signed inverse distance is defined at the first vertex. Removed the
  small-focus cutoff and cached estimates by prepared state; no catalog distance is treated as optical evidence.
- Failed estimates remain invalid and virtual sources stay signed. Explicit source distances still bypass
  inference. Existing Plena infinity and physical-stop calibration remain unchanged; the earlier close-focus
  numbers above describe the superseded absolute-conjugate implementation.
- Added tight boundary regressions for Plena and both Sonnar 50mm designs, and source agreement with diagram rays.
- Step 1 verification: typecheck, formatting, lint, 303 test files / 2832 tests, and coverage passed.
  Coverage: statements 92.22%, branches 83.79%, functions 93.94%, lines 94.90%; floors unchanged.
  Screening all 660 non-folded catalog models at zoom 0 found zero >0.5% boundary jumps and zero
  valid-to-unavailable boundary transitions (previously 18 and 97). Same-setting defocus references are tested.

## Catalog follow-up: finite-source launch (step 2)

- The first encountered surface now determines the axial launch enclosure. Finite rays begin at the source
  when it is nearer than that enclosure; otherwise they advance along the same source ray to the enclosure.
  Heights are parameterized at the first vertex, avoiding cancellation for very distant finite sources.
- All 14 reproduced close-focus cases now trace at selected f/8. Added near-source analytic cone and
  far-source infinity-limit checks. No lens rims, stop dimensions, or global wavefront bounds changed.
- Step 2 verification: typecheck, formatting, lint, 303 files / 2848 tests, and coverage passed.
  Coverage: statements 92.22%, branches 83.80%, functions 93.94%, lines 94.90%; floors unchanged.

## Catalog follow-up: conventional cone and clipping (step 3)

- A fully traceable stop-edge ray now reports conventional real working f-number even if another modeled clear
  aperture clips it. The same exact trace records a frozen list of clipping surface indices. No extrapolated
  surfaces, ghost refractions, or paraxial replacement rays are used. Failed intersections/refractions remain unavailable.
- Summary and shared metrics carry clipping independently of numeric availability. Tests cover unchanged analytic
  cones through a smaller clear aperture, a catalog rim, a cleared stopped-down ray, and an untraceable Sonnar rim.
- Step 3 verification: typecheck, formatting, lint, 303 files / 2849 tests, and coverage passed.
  Coverage: statements 92.22%, branches 83.80%, functions 93.94%, lines 94.90%; floors unchanged.
