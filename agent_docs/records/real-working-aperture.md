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

Pending: route the viewer and Summary through the shared real-ray result, retain explicitly labeled paraxial
diagnostics, preserve f/1.85 display precision, verify comparison and unavailable states, and run final gates.
