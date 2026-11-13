# Kodak Medalist: US2279384 Example 10

## Patent Reference and Design Identification

**Patent:** US 2,279,384
**Filed:** 1941-01-09
**Granted:** 1942-04-14
**Inventor:** Fred E. Altman
**Assignee:** Eastman Kodak Company

The complete patent contains eleven numerical examples. This model uses Example 10, nominally 100 mm f/3.5. Example 6, already represented by the finite-conjugate Kodak Enlarging Ektar 100 mm f/4.5, is a distinct prescription for a different application. Example 10 does not establish a new patent family or duplicate the Example 6 model.

The proposed Medalist association rests on the following evidence and limitations:

1. Kodak's Medalist II brochure identifies a 100 mm f/3.5 lens with five elements and 54° coverage, consistent with the broad specification of this candidate.
2. The existing source review describes a product cross-section with two cemented doublets and a central negative singlet. The independent validator confirmed that arrangement in the patent, but could not visually retrieve the primary retail construction diagram. This leaves the product-diagram comparison incompletely verified.
3. A secondary historical source associates the Medalist with Altman's design. This is not a manufacturer patent inscription and does not uniquely identify Example 10 among the patent's f/3.5 examples or establish exact factory radii.

The model is therefore a patent-design candidate associated with the Medalist, not a verified factory 100 mm prescription. The patent distinguishes Example 6's intentionally undercorrected longitudinal color for enlarging from its later Examples 7–11, supporting separate treatment of this camera candidate. Example 10's 26° half-field, or 52° full field, remains distinct from Kodak's 54° retail statement. Comparison with the existing catalog confirms the separate Example 6 entry; exhaustive historical or current numerical duplicate checking and novelty are not claimed.

## Optical Architecture

Five spherical glass elements form three air-spaced bodies: a front cemented doublet, a central negative singlet and a rear cemented doublet. The paired outer bodies and central negative element define the architecture; the prescription does not require an invented spacer or mechanical taper.

The literal radii are [+30.7, −44.6, +727.1, −71.3, +29.9, −751.7, +40.5, −56.7] mm, with successive intervals [8.49, 1.55, 2.86, 1.80, 6.54, 1.59, 6.00] mm. Source dimensions are used at scale factor 1, without conversion. The original high-resolution reading of R5 is +29.9 mm, correcting the preliminary low-resolution reading of 20.9 mm. No numerical value was fitted to improve optical results.

## Element-by-Element Analysis

### L1 + L2 — Front cemented doublet

L1: nD = 1.611, νd = 57.2. Glass: unidentified patent glass; the model approximates D with d.

L2: nD = 1.573, νd = 57.5. Glass: unidentified patent glass; the model approximates D with d.

The two elements share the −44.6 mm interface. They form the first cemented body, followed by the source air gap to the central singlet. Their similar Abbe numbers are source values, not evidence of a named glass pair or measured chromatic performance. Individual element focal lengths are not tabulated in the available audit results.

### L3 — Central negative singlet

nD = 1.605, νd = 38.2. Glass: unidentified patent glass; the model approximates D with d.

L3 lies between the two cemented bodies. Its −71.3 mm and +29.9 mm surfaces define the central negative element. The larger air gap behind it contains the inferred iris. Its position and negative form are supported by the prescription; no separate numerical aberration contribution is established.

### L4 + L5 — Rear cemented doublet

L4: nD = 1.605, νd = 38.2. Glass: unidentified patent glass; the model approximates D with d.

L5: nD = 1.744, νd = 45.7. Glass: unidentified patent glass; the model approximates D with d.

The pair shares the +40.5 mm interface and forms the last cemented body before the image space. L4 has the same published index and Abbe coordinates as L3; this does not establish an identical historical melt. Both cemented interfaces and the source air gaps remain intact, without a replacement glass or added spacer.

## Glass Identification and Selection

The patent explicitly gives sodium D-line indices. Its Nu values are interpreted as conventional Abbe numbers, written here as νd with that qualification. The model uses d as an approximation to historical D, consistent with the existing Example 6 model from the same patent. The integration audit records that the D-versus-d difference is below the patent's printed precision; the independent validator nevertheless flagged the reference-line distinction, and correcting that reference alone did not resolve the focal-length residual.

No historical supplier, melt identity, measured full spectral curve or manufacturing tolerance is established. No additional dispersion formula or source-measured line indices are invented. The drawing prints L2's Abbe number as 57.4, whereas the specification prints 57.5; the model retains the specification value. Matching L3/L4 coordinates do not remove these limits.

## Focus Mechanism

The modeled prescription represents infinity focus only. The calculated infinity back focal length is 84.173575804 mm; this image interval is not printed in the patent. The model does not reconstruct the Medalist camera's focusing mechanism, close-focus motion or mount/register, and does not reuse Example 6's finite-conjugate enlarger state.

The Medalist II documentation supports unit focusing and a 3.5 ft (1.0668 m) minimum distance. The latter is recorded as marketing metadata only. No near-focus prescription or travel is inferred, and the authored infinity-only focus state is unchanged.

## Inferred Stop and Clear Apertures

The source supplies neither a numerical iris coordinate nor clear-aperture dimensions. The model assumes an iris at the midpoint of the 6.54 mm air gap, leaving 3.27 mm on each side. This is an engineering inference made before tracing, not a position measured from the retail lens section.

The three bodies have common semi-diameters of 16, 13.5 and 15.5 mm, selected on a half-millimetre grid with a 0.9 rim/gap limit and full stop-plane clearance before ray results were considered. Both cemented bodies retain common rims. Independent review checked the edge, rim and iris geometry. The front body's full-aperture clearance at the iris is only 0.04883 mm: a mathematical geometry pass that does not validate manufacturing tolerance, shutter fit or blade thickness. No geometry override or ray-fitted aperture is used, and the inferred rims remain unmeasured against retail hardware.

At f/3.5 the calculated iris radius is 11.766110125 mm, not a factory measurement. Settings through f/22 are modeling conveniences; the validator cites a retail f/32 setting that the authored range does not include.

## Verification Summary and Field Limits

The literal prescription computes to an EFL of 101.245322971 mm, versus the patent's nominal 100 mm: a +1.2453% residual, retained without retuning and recorded as the catalog design focal length. Both printed prescription tables agree on the radii and intervals. The independent validator's 475-case single-value scan found no source-supported misprint correction. Example 6 computes to 100.355 mm (+0.36%) on the same normalization. The Example 10 residual is retained as a source inconsistency rather than repaired by changing a radius, thickness, gap or glass coordinate.

The earlier review records successful native construction and isolated strict TypeScript checks. The integration audit records passing surface and aperture checks, with no proposed aperture raises, and a passing 6x9 image-circle rim-floor check. These checks do not certify factory performance or full-field illumination.

The original sparse diagnostic used 25 pupil samples plus the chief ray at the source's 26° half-field. At field fractions 0, 0.5, 0.7, 0.85 and 1, successful optical-surface exits were 26, 26, 26, 23 and 21 respectively; remaining rays clipped. These counts are not throughput percentages, full-pupil integration, verified image-plane arrivals or MTF. The independent validator did not reproduce the original 5-of-26 edge clipping count. Its separate lattice check recorded 812/812 axial arrivals and 628/812 edge arrivals, with 22.66% vignetted and no unaimed or unexplained failures. Those results depend on inferred rims and cannot certify retail vignetting.

The field-coverage check skips the actual file because it is hidden. A temporary visible copy reached 49.378512726 mm at 26°, or 97.779233% of the canonical 6x9 semi-diagonal of 50.5 mm. The declared projection field, rather than a chief-ray rim clip, limits that result; the corner chief ray clears at 26.515684°. Neither the 52° source field nor the 54° retail claim is established as fully illuminated coverage, and the declared source field does not reach the full canonical 6x9 corner.

Full current-catalog and application tests, lint, formatting, build, browser and MTF validation remain unperformed or unpassed in the recorded review. The model remains hidden and infinity-only, without completed application integration or deployment. Source and geometry reviews do not establish exact factory-example identification or manufacturing performance.

## Sources

- [Complete official US 2,279,384 original](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2279384), especially the drawing sheet, front page and Example 10 specification.
- [Primary Kodak brochure, printed page 6](https://www.pacificrimcamera.com/rl/01312/01312.pdf), cited in the original product-association review; the retail construction diagram was not independently retrieved by the validator.
- [Kodak Medalist II brochure](https://www.cameramanuals.org/kodak_pdf/kodak_medalist_ii-02.pdf), cited by the independent validator for retail specifications.
- [Kodak Medalist II manual](https://www.cameramanuals.org/kodak_pdf/kodak_medalist-ii.pdf), cited by the independent validator for focusing and minimum distance.
- [Secondary historical association](https://www.antiquecameras.net/heliarlenses.html).
- [Source-review archive](https://drive.google.com/file/d/1iyzceCd2vvhsCnP-2BiVHC2InP5fcUFK/view).
