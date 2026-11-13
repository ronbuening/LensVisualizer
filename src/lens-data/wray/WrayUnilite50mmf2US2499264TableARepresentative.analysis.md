# Wray Unilite 50 mm f/2: qualified Table A reconstruction

## Patent Reference and Design Identification

**Patent:** US 2499264 A  
**Inventor:** Charles Gorrie Wynne  
**Assignee:** Wray Optical Works Limited  
**Filed:** 7 February 1945  
**Granted:** 28 February 1950  
**Priority:** United Kingdom, 25 February 1944  
**Example details:** Table A; normalized lengths multiplied by 50.

The patent prints the assignee as Wray (Optical Works) Limited; structured metadata normalizes the punctuation.

This model represents a numerical example, not an identified factory prescription. Table B remains a distinct alternative; neither schematic resemblance nor commercial specifications uniquely selects Table A. The 50 mm scale is a modeling choice for the normalized f = 1 example, not a manufacturing measurement.

The patent supplies a five-element, four-component f/2 design assigned to Wray. A contemporary Focal Press Wrayflex Guide describes a 2-inch/5-cm f/2 Unilite and gives a 46° diagonal field, f/22 minimum aperture and 3-foot close focus. That guide is a secondary publication, not a manufacturer-authored manual. A collector-hosted historical section associates the still-camera Unilite family with this patent; its original publication provenance is not independently established. These provide a plausible family bridge, not exact production radii, glass, or example identity.

## Optical Architecture

Five spherical elements form four components: a front positive singlet, a cemented positive/negative doublet, a rear negative meniscus and a positive rear singlet. The cemented interface is S4. The distinct boundaries S2/S3 and S7/S8 have zero axial air spacing, as printed. Their different curvatures create positive off-axis air separation; they must not be collapsed into cemented interfaces or separated by invented spacers.

The iris lies in the central air gap, but its precise location is not dimensioned. The authored location is the midpoint of the geometrically clear interval for the inferred surface apertures, not an optimized or source-proven position.

## Element-by-Element Analysis

### L1: front positive meniscus

Assumed nd = 1.613, νd = 59.9; unmatched source mean-index glass. The positive meniscus contributes front collecting power. The mean index is not explicitly tied to the d line in the patent, so the nd notation is a disclosed engine convention rather than a source statement. An isolated-element focal length is not independently certified here.

### L2 and L3: cemented doublet

L2: assumed nd = 1.613, νd = 59.9; unmatched source mean-index glass. L3: assumed nd = 1.700, νd = 30.3; unmatched higher-index, lower-Abbe glass. They share S4. Their positive/negative power pairing and differing dispersion provide a plausible chromatic-balancing mechanism, not proof of production color correction or glass catalog identity.

### L4: rear negative meniscus

Assumed nd = 1.613, νd = 59.9; unmatched source mean-index glass. Its strongly curved surfaces contribute negative power behind the stop. No separately certified isolated-element focal length or quantitative aberration allocation is claimed.

### L5: rear positive element

Assumed nd = 1.613, νd = 59.9; unmatched source mean-index glass. The final positive element completes the converging assembly. Its front boundary is distinct from L4 despite zero axial separation at the vertex.

## Glass Identification and Selection

Only the printed mean indices and Abbe numbers are used. No modern catalog glass, melt, partial dispersion or measured spectral correction is established. The engine treats the supplied mean indices as d-line indices; this is an assumption and limits chromatic claims. Four elements share the 1.613/59.9 pair; the cemented negative element uses 1.700/30.3. All surfaces are spherical.

## Focus Mechanism

The reconstruction is infinity-only. No finite-focus law, motion or travel has been authored. The commercial 3-foot claim is not validated by this model. The terminal image interval is calculated from the literal paraxial prescription (28.547653359 mm), not transcribed from a published BFL. No source radius, spacing or index was adjusted to set that plane.

## Inferred Apertures and Stop

Surface semi-diameters are 17 mm at S1/S2, 11.5 mm at S3/S4, 9.5 mm at S5/S6/S7, and 11.5 mm at S8/S9. They are engineering hypotheses informed by unequal schematic outlines, not calibrated factory apertures. No ray-success tuning, positive replacement spacer, rim exception or allowance override is used.

An initial central-gap midpoint iris was rejected because its plane intersected the S5 rim by 0.099310 mm. The revised location is 6.065723229 mm behind S5 within the inferred clear interval [5.619310390, 6.512136067] mm. It leaves 0.446412838 mm clearance on each side while retaining the original total air gap of 11.04 mm. Native f/2 pupil construction gives a physical iris semi-diameter of 7.751939 mm. Neither this radius nor its axial location is a source dimension. The UI stop range to f/22 follows secondary product context, not validation at every setting.

## Verification Summary

Scoped native construction gives EFL 50.007365467 mm at f/2, consistent with the normalized source EFL after scaling. Explicit sphere-sag proof checks both zero-vertex gaps because the native validator skips zero air intervals. Independent review confirms literal transcription, separate zero gaps and revised stop clearance. Strict isolated TypeScript passes.

A sparse 25-pupil-point plus chief-ray diagnostic at nominal 36 × 24 mm frame angles gives 26 successful traces on axis and at half field, 23 successful/3 clipped at 0.7 field, 18 successful/8 clipped at 0.85 field, and 14 successful/9 clipped/3 blocked at the corner. These counts are not throughput percentages, full pupil integration or MTF. The nominal-frame corner angle is approximately 23.4°, not exactly the secondary 23° half-field. No full-frame coverage or full-aperture corner quality is certified.

The file remains hidden for qualified pre-integration review. Current-corpus compatibility, whole-app tests, lint/format integration, browser rendering, full pupil/MTF and deployment checks are deferred, not passed.

## Sources

- [US 2499264 A](https://patents.google.com/patent/US2499264A/en), original USPTO four-page scan inspected; Table A and Figure 1.
- [Focal Press Wrayflex Guide](https://www.cameramanuals.org/pdf_files/wrayflex.pdf), cover and Unilite description. Contemporary secondary source, not Wray-authored documentation.
- [Collector-hosted Wrayflex history](https://www.klassik-cameras.de/Wrayflex.html), qualified family context; exact factory prescription not established.
