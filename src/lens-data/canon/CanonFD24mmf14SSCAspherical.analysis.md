## Patent Reference and Production Identification

**Patent:** US3992085A, Example1 / Fig.1.
**Inventor:** Kikuo Momiyama.
**Assignee:** Canon Kabushiki Kaisha.
**Priority:** Japan47-66359, July4,1972.
**Filed:** February21,1975; continuation of the1973 application.
**Granted:** November16,1976.

Private production-associated patent reconstruction of the March1975 Canon FD24mm f/1.4 S.S.C. ASPHERICAL, not a factory-exact prescription. The [Canon Museum](https://global.canon/en/c-museum/product/fd132.html) gives10elements/8groups and places the ground/polished asphere on the rear of the eighth element. The original12-page grant and exact Canon diagram are preserved locally. This run directly inspected original Fig.1, signed Example1, the formula and repeated claim table.

All three source-example overlays were independently reproduced with one uniform transform each, without per-group distortion. Example1 matches the production stack most closely, including front doublet, pre-stop singlet order and rear cemented E7/E8 pair. Ex2 reverses the pre-stop singlets; Ex3 changes the front-group placement. This visually supports the parent's separately measured16interior landmarks, RMS4.55px forEx1 versus11.92/7.36px forEx2/3 per275px production width; that numerical landmark measurement was not independently repeated here.

**Status:** incomplete private numerical checkpoint. Browser QA and final qualification HOLD; no delivery or catalog registration.

## Optical Architecture

10glass elements/8groups, with exact shared cemented boundaries S6(E3/E4) and S13(E7/E8). S14 is the rear E8 asphere. No optical filter is printed or inferred. The literal source f24.5mm scale is preserved rather than fitted to marketed24mm. Computed EFL24.49901526mm and BFD36.49826728mm leave the printed36.500mm rear air and image z106.118mm unchanged,1.732716µm behind Gaussian focus.

## Element-by-Element Source Materials

|Element|n_d|ν_d|Source role/placement|
|---|---:|---:|---|
|E1|1.58913|61.1|Front meniscus|
|E2|1.58913|61.1|Separate front glass|
|E3|1.80518|25.4|Cemented toE4|
|E4|1.58913|61.1|SharedS6|
|E5|1.71300|54.0|Positive pre-stop singlet|
|E6|1.58921|41.1|Separate pre-stop glass|
|E7|1.80518|25.4|Cemented toE8|
|E8|1.77250|49.6|SharedS13, asphericS14|
|E9|1.77250|49.6|Separate rear lens|
|E10|1.77250|49.6|Final lens|

## Glass Identification

Only literal printed indices/Abbe values are asserted. No supplier, melt, chemical identity, coating or broadband equivalence is inferred. Quantitative tests use helium-d587.5618nm only.

## Focus Mechanism and Estimated Stop

Canon's floating mechanism is documentary. This file represents only the fixed printed infinity configuration; no floating travel, finite prescription, close-focus performance or filter was invented.

Source D11=10.681mm contains the stop but does not print its split. The explicit estimate is the midpoint5.3405/5.3405mm, z47.4775mm, approximately consistent with Fig.1. It is not a measured factory datum. Derived physical iris radius is1.93903279mm at f/8 control and11.08018737mm at nominal f/1.4 control. Both are calculated estimates. Circular-pupil analysis does not model the actual production eight-blade shape.

## Aspherical Surface

The original formula uses a spherical base plus B·Y4+C·Y6+D·Y8+E·Y10. At R14=−33.487mm, native K=0; A4=+2.0647e−5, A6=+3.6845e−8, A8=−8.0225e−11, A10=+5.2622e−14. No term is dropped or fitted. The printed X column is positive, while the signed-radius equation yields negative sag; magnitudes agree to source rounding. At Y14.7mm, |sag|2.213219857mm versus printed2.21315mm differs by69.857nm, retained without correction. Native and independent sag/slope comparisons pass across all18 source surfaces.

## Clear Apertures and Verification Limits

The source prints no clear diameters. Optical caps are explicit estimates, not factory mechanical rims. Initial conservative estimates clipped the true nominal pupil atS13; that variant is retained separately. Independent maximum heights at nominal±5° were13.435/14.832/15.135mm atS13/S15/S16. Those unpublished caps were enlarged to14.0/15.3/15.5mm and native default geometry rechecked. No printed radius, gap, glass, image plane or asphere changed. Zero trim; no override.

At f/8 and nominal f/1.4 controls,1173 stop-pupil samples each at−5/−3/0/+3/+5° reach the fixed image without final-cap loss or unexplained failure. Native and independent intersections agree at approximately1e−11mm. A copied independent aimer initially used IX's surface7 reference; this Canon-only harness error was corrected to surface11. Rejected diagnostic outputs are retained as unqualified and no IX file changed.

Native geometric and scalar sheared-pupil diffraction MTF converge over5–40lp/mm at0/~2.5/5°, at both controls, with zero unknown flux and zero focus shift. Independent64/96cell geometric MTF at f/8 differs from native by at most0.000441; grid change0.000189. This is simulated monochromatic central-field evidence, not measured factory MTF. Full source42° half-field, finite, broadband, coatings and full factory-rim geometry are unqualified.

Six deterministic outputs replay byte-for-byte in fresh Node processes against pinned main d2471ce71c0aac1e3e78574224218f62d73500c6. The unchanged engine has the earlier492-test baseline; no fresh Canon-specific test run is claimed. Actual desktop/mobile Builder import, persistence, export/reload and visual gates remain unverified. The runner's Unix socket and supported cloud-browser local-server route failed duringIX QA; no blocked launch was retried or restriction changed forCanon. No Canon service was started.
