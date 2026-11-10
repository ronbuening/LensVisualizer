## Patent Reference and Design Identification

**Patent:** GB 1,066,527 A
**Filed:** 29 May 1964
**Published:** 26 April 1967
**Inventor:** Erhard Glatzel, identified by the linked German priority counterpart DE 1,447,288; the GB bibliographic inventor field is empty.
**Applicant:** Carl-Zeiss-Stiftung, trading as Carl Zeiss
**Example details:** Whole main Table I, PDF page 2, using exactly 35× length scaling.

This qualified research model preserves a recovered primary prescription. It is a probable historical Contarex Distagon 35mm f/2 association, not a factory prescription or exact production-version identification. The original maker booklet's named Contarex section shows the corresponding nine-element/eight-group architecture: two negative front menisci, a thick positive element, a thin meniscus, and the rear cemented pair. Other patent examples differ. The brochure is undated; no production year is inferred from it.

The source is natively f/1.8 with ±31° field. The retail lens is f/2 with 63° full field. Exactly 35× scaling gives a computed paraxial focal length of 35.001065 mm, not exactly 35 mm. No radii, material indices, total gaps, or source image plane were retuned to retail specifications. R5 = +1.0845f is directly legible. Main Table I prints R2 = +0.6827f, whereas the repeated claim table prints +0.06827f. This model consistently transcribes the complete main table; it does not combine selected rows from conflicting copies.

## Optical Architecture

Nine elements in eight air-separated groups form an all-spherical retrofocus design. The separated front negative menisci provide wide-angle ray expansion and increased rear clearance. Positive power is distributed through the thick third element and rear assembly. L6 and L7 share the only cemented interface. The normalized paraxial back focal distance is 1.056978935f, close to the printed 1.0569f.

## Element-by-Element Analysis

### L1: Negative Meniscus

nd = 1.60311, νd = 60.68. Glass: unmatched patent material; manufacturer and catalog identity unverified. The first meniscus supplies negative power in front of the main converging system.

### L2: Negative Meniscus

nd = 1.62041, νd = 60.29. Glass: unmatched patent material. A second negative meniscus spreads the front negative power over separated surfaces.

### L3: Biconvex Positive

nd = 1.69100, νd = 54.80. Glass: unmatched patent material. This thick positive element supplies substantial convergence after the two negative front elements. Its printed thickness is retained.

### L4: Positive Meniscus

nd = 1.62041, νd = 60.29. Glass: unmatched patent material. The positive meniscus precedes the source-constrained stop gap. No precise iris station is tabulated.

### L5: Biconcave Negative

nd = 1.58144, νd = 40.80. Glass: unmatched patent material. This thin negative element lies after the iris region and before the rear cemented group. Its inferred caps are constrained by clearance across the following air gap, not by a sourced mechanical diameter.

### L6–L7: Cemented Negative–Positive Pair

L6: nd = 1.75520, νd = 27.53. L7: nd = 1.62041, νd = 60.29. Both glasses are unmatched patent materials. The higher-dispersion negative element and lower-dispersion positive element share surface 12. Their opposing power and dispersion support chromatic balancing, but do not establish apochromatic correction or actual melt identities.

### L8: Biconvex Positive

nd = 1.62041, νd = 60.29. Glass: unmatched patent material. The weakly curved front and stronger rear surface provide a separated positive contribution in the rear assembly.

### L9: Biconvex Positive

nd = 1.62041, νd = 60.29. Glass: unmatched patent material. The final positive element precedes the long source back focal distance. There is no source-listed sensor cover or rear filter plate.

## Glass Identification and Selection

All nine nd/νd pairs are explicitly d-line quantities. No catalog matches or extra spectral lines have been invented. An nd/νd dispersion approximation may support qualified later polychromatic diagnostics, but it cannot establish factory spectral performance or secondary spectrum. Bounded monochromatic reference-line MTF is described below; no measured-glass, coating, polychromatic or transmission claim is made.

## Focus Mechanism

Only the source infinity prescription is modeled. There are no variable gaps, finite-conjugate rows, or inferred movement law. The schema's required close-focus value is a 1000 m software control placeholder, not a retail minimum focus distance or tested finite-focus condition.

## Modeling Assumptions and Validation Status

The iris is provisionally at the midpoint of source d8: z = 46.6585 mm at 35× scale. The source constrains only the whole interval z = 43.386–49.931 mm. The two authored subintervals sum exactly to the printed d8. Clear semi-diameters are explicitly inferred static candidates, not measured caps. Native infinity checks support iris-limited axial operation at nominal f/1.8 and f/2, and bounded off-axis sampling is reported below with substantial vignetting; these checks do not validate measured mechanical apertures, unsampled operating conditions, or any finite-focus state.

The printed back focus places the source image plane at z = 105.700000 mm. Independent paraxial calculation gives z = 105.702763 mm; that diagnostic does not move the source plane. Any future best-focus scan must remain a separate diagnostic.

Static roundtrip checks preserve all radii, thicknesses, gaps, indices and Abbe numbers. Sampled spherical geometry checks pass positive glass thickness, nonintersecting air gaps and ordinary rim-slope limits without geometry overrides. A preliminary 13 mm L5 cap intersected the following gap and was rejected; the current 10.5 mm cap is a geometry-only hypothesis, not a proven full-aperture solution. Initial native testing found surface 9 clipped the full iris-admitted axial beam. Only its inferred cap was raised from 10.5 to 10.75 mm; surface 10 remains 10.5 mm. Native build, iris clearance and zero render trim pass. The official aperture census reports f/1.799999998, iris-limited, using the repository convention of paraxial EPD = F/N. The distinct diagnostic EFL divided by exact nonlinear admitted entrance-ray diameter is 1.918277 at nominal f/1.8, and 2.103178 at nominal f/2; these are not the repository working-f-number definition and were not fitted by enlarging the iris. The original cap failure is retained in evidence. Standalone validation scope is recorded in the accompanying gate report.

## Sources

- [Official complete GB patent](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=GB000001066527A&xxxfull=1): controlling whole main Table I, PDF page 2.
- [Contarex maker booklet](https://www.cameramanuals.org/zeiss_ikon/zeiss_ikon_contarex_booklet.pdf): named Contarex section, original PDF page 15, printed page 14.
- [Preserved accepted GB recovery addendum](https://drive.google.com/file/d/16EkgemYmApLvcYNgififq-5805GhoBvA/view): primary custody and conflicting-table audit.

## Bounded Native MTF Qualification

Reference wavelength is the source d line, 587.5618 nm. All nine glasses lack established full spectral identities, so no polychromatic factory-performance claim is made. Geometric and diffraction-corrected calculations used native 32/64-grid refinement with a maximum grid of 64, frequencies 0/10/20/30/40 lp/mm, and separate nominal f/1.8 and f/2 operating cases. All axial cases converged, but every 31° edge result remained unconverged at the bounded grid cap; several intermediate-field results also remained unconverged. No tolerance was relaxed or further convergence assumed.

MTF field fractions mean image-height fractions. Source-plane chief heights 9.651675 and 20.752023 mm, divided by the engine reference height 21.65 mm, select angles 15.499916° and 30.999999°. An earlier default-format run selected 17.297621° and 32.068282°; it is preserved separately as a format-corner diagnostic, not mislabelled source coverage. The retail 63° full field is not substituted for the patent's 62°.

Source-plane calculations apply zero focus shift. Separate best-axial diagnostics shift by −0.131119 mm at nominal f/1.8 and −0.135776 mm at nominal f/2. The authored source plane stays at 105.7 mm. Native silhouette inspection supports the nine-element architecture, but the candidate caps, including a shorter L5 than the source schematic suggests, are mechanical hypotheses rather than measured figure reproduction. The accompanying gate report records metadata, type, format, lint, regression, build, SEO and standalone-install verification; those checks do not establish factory accuracy.

### Source-plane refinement addendum

A single later source-plane-only refinement, capped at grid128 with unchanged0.01 MTF tolerance, converged at all requested0/10/20/30/40lp/mm frequency samples for both peripheral source fields and both nominal apertures, using geometric and reference-line diffraction methods. The nominal f/1.8 geometric15.5° case had already converged at64 and did not require128. The other seven method/field cases reached128. Worst sampled delta was0.008586 at40lp/mm, nominal f/2 geometric31°. This supersedes only the earlier source-plane peripheral64-cap convergence limit, not the separate best-focus results.

Vignetting remains substantial:31° transmitted5170/12892 samples(40.1024%) at nominal f/1.8 and6102/12892(47.3317%) at nominal f/2; failed and unaimed counts were zero. At15.5°, transmitted fraction was about96.46% at nominal f/1.8 and100% at nominal f/2. These are sampled stop-pupil fractions, not measured relative illumination. No source, iris, cap, image-plane or threshold bytes changed during refinement.
