## Patent Reference and Design Identification

**Patent:** [US 2,012,822 A](https://patents.google.com/patent/US2012822)
**Inventor:** Horace William Lee
**Assignee:** Kapella Limited
**Filed:** July 20, 1934; British priority July 22, 1933
**Granted:** August 27, 1935
**Title:** Lens for photographic and like purposes
**Example details:** Figure 1 and Example 1, original PDF pages 1 and 3 (printed specification page 2).

This is a hidden **patent-only reference reconstruction**, not an identified commercial Kapella lens. The original prescription is normalized to unit equivalent focal length. All radii, thicknesses and separations are multiplied by 100 to produce a convenient approximately 100 mm model; this is a modeling scale, not evidence of a manufactured focal length. The literal rounded prescription calculates to 100.148709 mm, within 0.149% of the scaled nominal 100 mm. No source radius, thickness, index or dispersion is optimized or repaired. The Photons to Photos/Cox lead helped locate the patent, but a definitive Cox record-to-example correspondence has not been established and is not claimed here.

## Optical Architecture

Five elements form four air-separated groups: two positive menisci, a cemented positive/negative pair acting as the intermediate dispersive member, and a rear positive biconvex element. The ninth and last radius is **negative**. The table states f/1 for Example 1; Examples 2 and 3 are different prescriptions and are not mixed into this file.

## Glass and Dispersion

The source explicitly gives historical sodium **nD**, Abbe V and Chance Brothers catalogue numbers. L1, L2 and L5 retain nD=1.6135, V=59.4, source number 8065. L3 retains 1.6062/59.8, source number 4317. L4 retains 1.6945/30.7; its type number is marked unpublished in the source. Glass names are documentary labels, not verified modern Sellmeier matches. No invented modern replacement is applied. The viewer uses its supported native-D convention and normal-line dispersion estimate from nD/V; secondary spectrum is approximate, not measured.

## Focus and Aperture

Only infinity is modeled. The 1e15 m close-focus value is a supported UI sentinel, not a commercial minimum distance. The image plane is at calculated paraxial BFD **32.176789 mm**, because the patent provides no BFD. It is not shifted to suppress residual spherical aberration.

The patent does not locate or dimension an iris. A circular stop is therefore **inferred 18 mm after surface R7**, inside the 22.94 mm separation S3. This location leaves physical clearance behind the curved rear face of the compound member; it is not a patent measurement. The engine derives a 21.098446 mm paraxial stop radius for nominal f/1. Pupil aberration means rays at exactly ±100% of the paraxial entrance pupil are clipped by this modeled stop, while the tested central ±90% pass. Thus neither the inferred iris nor effective wide-open throughput is a verified factory property.

## Clear Apertures and Field Limits

Clear semi-diameters are engineering ray-envelope estimates, not source dimensions. Native geometry validation and render diagnostics report no errors or concealed trimming, without relaxed limits. No original field angle, image circle, camera mount or format is supplied. The viewer's default half-field is not historical coverage evidence. Diagnostic chief-centered ray fans at 5°, 10° and the viewer default show progressively stronger clipping. Do not infer guaranteed field coverage or image quality from the default display.

## Validation and Model Qualifications

Pinned LensVisualizer commit 3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2: the authored V2 file passes focused strict TypeScript checking, native schema/geometry validation, material-render trim screening and sampled iris-in-air clearance. Native paraxial focus offset is approximately 1.4e-14 mm. Exact meridional ray checks include axial and off-axis samples; clipping outcomes are preserved in the audit evidence rather than hidden. Reference and three-line MTF support checks are available, but this pass does **not** claim computed/converged MTF curves or retail measurements.

Full-application regression, current integration compatibility and compiled-viewer/browser QA remain integration checks. This hidden, assumption-qualified reference must not be represented as a verified production lens.

## Sources

- [Original US patent PDF](https://patentimages.storage.googleapis.com/ee/56/60/ecf6fa160dc6b7/US2012822.pdf): original diagram page and Example 1 table visually checked at high resolution.
- [Patent bibliographic record and text](https://patents.google.com/patent/US2012822).
