## Patent Reference and Design Identification

**Patent:** US 3,037,426\
**Filed:** August 2, 1960\
**Priority:** September 27, 1957 (France)\
**Granted:** June 5, 1962\
**Inventor:** Edgard Hugues\
**Assignee:** Les Appareils de Precision Kinoptik\
**Title:** *Photographic Objectives Having a Large Angular Field*\
**Embodiment analyzed:** Example 2, Fig. 2 / Table 2

The prescription is transcribed from Example 2 of Hugues's large-angular-field patent. Table 2 gives nine glass elements,
L7 through L15, arranged as six air-separated groups after the three zero-spacing mating interfaces are treated as
cemented junctions. The patent states a whole-objective focal length of 9.759 mm, an aperture of f/2, a total object field
of 110°, and an image-plane distance of 21.841 mm from the last optical surface. The diaphragm is specified 3.00 mm behind
the rear face of L12. [1, Table 2 and text immediately following it]

The association with the production **KINOPTIK 9.8mm f/1.8 TEGEA** is strong but remains circumstantial rather than
manufacturer-confirmed. The principal points of convergence are:

1. The patent example has a stated focal length of 9.759 mm, consistent with a nominal 9.8 mm product designation without
   scaling. [1]
2. KINOPTIK product literature identifies a 9.8mm f/1.8 TEGEA and gives 108° coverage on 16×22 mm, close to the patent's
   110° total object field. The same sheet gives 130° on 24×36 mm with slight vignetting. [2]
3. The patent is assigned to Les Appareils de Precision Kinoptik and names Edgard Hugues as inventor. [1]
4. The aperture values do **not** coincide: the patent example is f/2, whereas the marketed lens is f/1.8. The data model
   therefore retains f/2 as the design aperture and f/1.8 as the marketed aperture rather than forcing a reconciliation.

No located KINOPTIK document explicitly states that US 3,037,426 Example 2 is the production TEGEA 9.8 prescription.

## Optical Architecture

The implemented prescription is a three-system retrofocus wide-angle design. System I is the isolated negative L7
plano-parabolic element; system II is the cemented L8-L9 pair; system III comprises L10 through L15. From the final parsed
data, the system focal lengths are -21.691 mm, +86.667 mm, and +39.097 mm respectively. These values describe the isolated
systems as they are implemented from Table 2; they are not the same thing as the individual standalone element powers
within those systems.

The patent's broad architecture is explicit: the first dioptric system is negative and includes a paraboloidal surface,
while the second and third systems are positive. Hugues assigns the first system the principal distortion-correction role
for the unusually large field. [1, patent description, PDF p. 4] Example 2 changes the second system to a cemented pair
and uses a substantially more complex third system than Example 1. [1, PDF p. 5]

The final model has a Gaussian EFL of 9.784 mm and a Gaussian back focal distance of 22.377889324 mm from the final optical
surface. Because BFD/EFL = 2.287, the design satisfies the project's retrofocus criterion `BFD > EFL`. The published image
plane, however, remains at 21.841 mm behind the last surface; it is not silently moved to the Gaussian paraxial focus.

The large first negative system is separated from the L8-L9 cemented pair by 59.09 mm. A second 43.46 mm air space then
separates that pair from system III. The diaphragm lies within system III's internal air space: 3.00 mm behind L12 and
2.97 mm ahead of L13. [1, Table 2]

## Element-by-Element Analysis

### L7 — Plano-Parabolic Negative

`nd = 1.69153, νd = 54.0. Glass: N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = -21.691 mm.`

L7 is the complete first dioptric system. Its front surface is plane and its rear surface is the patent's paraboloid. The
negative power is therefore concentrated in this very large front element rather than distributed among several lenses.
The patent explicitly associates the first system with distortion correction over fields exceeding 100°, so that role is
source-supported rather than inferred merely from the element's power sign. [1, PDF p. 4]

The Example 2 prose prints -22.109 mm for system I, but the Table 2 geometry yields -21.691 mm. The same plano-parabolic
geometry and glass appear in Example 1, where the patent gives -21.69 mm; the implemented model therefore preserves Table 2
and records the Example 2 prose value as a source contradiction rather than altering the prescription. [1, Tables 1-2]

### L8-L9 — Cemented Positive System II

**L8:** `nd = 1.68129, νd = 32.0. Glass: Unmatched (nd=1.68129, vd=32.0; dense-flint region). Standalone f = +51.768 mm.`\
**L9:** `nd = 1.67400, νd = 56.0. Glass: Unmatched (nd=1.67400, vd=56.0). Standalone f = -128.325 mm.`

L8 and L9 meet at the common -42.2 mm radius with zero published air spacing, so the active model treats that boundary as
one cemented glass-to-glass interface. The pair has a computed cemented-net focal length of +86.667 mm. This is the whole
of system II in Example 2.

The patent prose gives +87.87 mm for system II, which is not reproduced exactly by the rounded Table 2 coordinates. The
implemented value is therefore reported as a calculation from the table, while +87.87 mm remains a distinct source value.
No glass supplier is inferred from the pair's `nd/νd` coordinates.

### L10-L12 — Cemented Positive-Negative-Positive Triplet

**L10:** `nd = 1.46350, νd = 65.4. Glass: FK3-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = +25.977 mm.`\
**L11:** `nd = 1.72350, νd = 37.9. Glass: S-BAH28-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = -14.809 mm.`\
**L12:** `nd = 1.46350, νd = 65.4. Glass: FK3-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = +34.779 mm.`

These three elements form a cemented triplet at the front of system III. The two cemented interfaces are represented with
the downstream element's refractive index and element identity, preserving the source geometry without synthetic cement
layers. Considered in isolation, the triplet has a computed net focal length of +235.349 mm.

The positive-negative-positive power sequence and the repeated L10/L12 glass coordinate are source facts from Table 2.
The analysis does not assign a specific spherical, coma, or chromatic correction contribution to any one member because
the patent does not isolate those element-level contributions for Example 2.

### L13 — Biconvex Positive

`nd = 1.51350, νd = 59.0. Glass: NSL7-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = +61.137 mm.`

L13 is the first air-separated element after the diaphragm. Its placement makes it part of the rear portion of system III,
but the patent does not separately state an aberration-correction function for L13. The modeled semi-diameter is therefore
used only as a ray-clearance and rendering geometry parameter, not as evidence of a production clear-aperture dimension.

### L14 — Negative Meniscus

`nd = 1.76200, νd = 27.0. Glass: PBH25-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = -88.801 mm.`

L14 is an air-separated negative meniscus between the positive L13 and L15 elements. Its low Abbe number relative to the
neighboring positive elements is a source coordinate, but no anomalous-partial-dispersion or apochromatic behavior is
claimed from `nd/νd` alone.

### L15 — Biconvex Positive

`nd = 1.51350, νd = 59.0. Glass: NSL7-class (coordinate-compatible spectral proxy; supplier unproven). Standalone f = +41.282 mm.`

L15 is the final positive element of system III. The source image plane is retained 21.841 mm behind its rear surface. The
Gaussian paraxial BFD computed from the same final prescription is 22.378 mm, so those two distances are kept explicitly
separate rather than being treated as interchangeable definitions of back focus.

The complete L10-L15 system III has a computed isolated focal length of +39.097 mm. The patent prose gives +38.64 mm; as
with system II, the difference is retained as a source-versus-rounded-table discrepancy rather than hidden by adjustment.

## Glass Identification and Selection

Patent refractive indices and Abbe numbers are preserved. Named catalog glasses below are coordinate-compatible spectral proxies, not identifications of the production supplier or historical melt. The runtime compatibility guards are unchanged; no catalog-derived line indices are copied into the prescription.

| Element | Patent nd | Patent νd | Runtime glass annotation |
|---|---:|---:|---|
| L7 | 1.69153 | 54.00 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L8 | 1.68129 | 32.00 | Unmatched (nd=1.68129, vd=32.0; dense-flint region) |
| L9 | 1.67400 | 56.00 | Unmatched (nd=1.67400, vd=56.0) |
| L10 | 1.46350 | 65.40 | FK3-class (coordinate-compatible spectral proxy; supplier unproven) |
| L11 | 1.72350 | 37.90 | S-BAH28-class (coordinate-compatible spectral proxy; supplier unproven) |
| L12 | 1.46350 | 65.40 | FK3-class (coordinate-compatible spectral proxy; supplier unproven) |
| L13 | 1.51350 | 59.00 | NSL7-class (coordinate-compatible spectral proxy; supplier unproven) |
| L14 | 1.76200 | 27.00 | PBH25-class (coordinate-compatible spectral proxy; supplier unproven) |
| L15 | 1.51350 | 59.00 | NSL7-class (coordinate-compatible spectral proxy; supplier unproven) |

No patent C/F/g line indices or partial-dispersion measurements are supplied for these elements. Unresolved rows retain the Abbe fallback; compatible rows use the catalog curve. None of these assignments establishes apochromatic performance.

## Focus Mechanism

The optical model has **NO_INTERNAL_RECONSTRUCTION**. Example 2 publishes only the remote-object design state and contains
no finite-focus spacing table, moving-group identification, or internal motion law. Accordingly, `var` is empty and all
surface spacings remain at the published design state.

The KINOPTIK product sheet gives a focusing range from infinity to 9 inches, corresponding to 0.2286 m, and that value is
stored as production close-focus metadata. [2] It is not converted into a modeled lens-group displacement. A production
minimum-focus distance by itself does not determine which group moves or how the internal separations change.

## Aspherical Surfaces

The only aspherical surface is the rear face of L7, authored as surface `2A`. The patent describes it as a paraboloid of
revolution with parameter 15 but does not provide a modern sag equation or an explicit conic constant. [1, Table 2]

The model maps that surface to the standard rotational-conic form with `R = +15 mm` and `K = -1`, with all polynomial
coefficients A4 through A14 equal to zero. This mapping is an explicit modeling inference, cross-checked against the
identical Example 1 plano-parabolic element: the resulting standalone focal length is -21.691 mm, matching Example 1's
published -21.69 mm.

No polynomial aspheric departure is introduced. At the modeled semi-diameter of 25.2 mm, the conic sag is 21.168 mm and
the absolute meridional slope is 1.68. A departure from a same-radius spherical reference is not quoted at that rim because
a sphere of radius 15 mm has no real sag at a radial height of 25.2 mm. The 25.2 mm semi-diameter itself is modeled rather than patent-published.

## Conditional Expressions

Claims 1 and 2 describe the permitted relationships among the three system focal lengths, the two principal inter-system
spacings, and the diaphragm location. The packaged verifier evaluates the Example 2 source values against all seven tested
conditions and all pass. [1, claims 1-2]

That result uses the patent's own published Example 2 values for `f`, `f1`, `f2`, and `f3`, as a claim-compliance test. It
does not erase the separate fact that the rounded Table 2 coordinates calculate to -21.691, +86.667, and +39.097 mm for
the three systems rather than the prose values -22.109, +87.87, and +38.64 mm.

## Verification Summary

The final implemented data file is unscaled (`s = 1`). Sequential height/reduced-angle tracing and an independent ABCD
calculation agree to floating-point precision. The Gaussian EFL is 9.784066724 mm, which differs from the patent's stated
9.759 mm by +0.025066724 mm and remains within the source-precision envelope derived from the rounded Table 2 values.

The physical stop diameter is not published. The modeled stop semi-diameter of 8.486179352 mm was calibrated so that the
front-group pupil transformation gives an entrance-pupil semi-diameter of 2.446016681 mm and a modeled f-number of 2.000.
The f/2 agreement is therefore a calibration result, not independent evidence of a physical diaphragm diameter.

Surface semi-diameters remain modeled. Figure 2 review enlarged the system-II pair to 26 mm, L13/L14 to 12 mm, and L15 to 10.3 mm. The triplet remains at 10.2 mm because a literal drawing-sized rim would cross the prescribed surfaces. Repository surface validation passes with these geometry-limited apertures.

The surface-by-surface Petzval sum is 0.007961856 mm⁻¹, corresponding to a signed Petzval radius of +125.599 mm under the
project's `φ/(n·n′)` convention. This is a computed paraxial quantity from the implemented prescription, not a patent-published
field-curvature specification.

## Sources

1. Edgard Hugues, **“Photographic Objectives Having a Large Angular Field,” US Patent 3,037,426**, granted June 5, 1962,
   priority France September 27, 1957. Example 2 prescription: Fig. 2 and Table 2, PDF p. 5; general description of the
   three-system architecture and first-system distortion role: PDF p. 4; claims 1-2: PDF pp. 5-6. Public bibliographic
   copy: https://patents.google.com/patent/US3037426A/en
2. **KINOPTIK 9.8mm f/1.8 TEGEA** specification sheet, archival KINOPTIK/Karl Heitz literature, Pacific Rim Camera scan,
   PDF p. 6: 108° on 16×22 mm, 130° on 24×36 mm with slight vignetting, f/1.8-f/16, T/2.2-T/16, infinity-to-9-inch focus,
   and Arriflex / barrel / Alpa mount drawings. https://www.pacificrimcamera.com/rl/01254/01254.pdf
3. Current optical-glass catalog resources consulted for coordinate-class review: OHARA (https://oharacorp.com/), SCHOTT
   Advanced Optics (https://www.us.schott.com/shop/advanced-optics/en/search/), HOYA Optics
   (https://www.hoya-opticalworld.com/english/datadownload/index.html), HIKARI
   (https://www.hikari-g.co.jp/optical_glass/catalog/), CDGM (https://www.cdgmgd.com/), and SUMITA
   (https://www.sumita-opt.co.jp/en/download/). These catalogs support only the class/Unmatched dispositions described
   above; none is treated as proof of the historical KINOPTIK melt supplier.

## Image coverage

The [manufacturer brochure, page 2](https://www.pacificrimcamera.com/rl/00030/00030.pdf) specifies 108° on 16 × 22 mm and 130° on 24 × 36 mm with slight vignetting. The authored cinema format requires a 27.20 mm diagonal. The 43.27 mm full-frame diagonal is qualified, vignetted coverage, not the default analysis format or a measured clear image-circle boundary.

## Image-plane source audit (2026-09-25)

MTF source audit: Table 2 matches all prescription entries, including
the R=15, K=-1 paraboloid and the split 5.97 mm stop gap. The source
prints EFL 9.759 and image distance 21.841 mm; independent values are
9.784067 and 22.377889 mm. Retain this source contradiction (+0.536889
mm defocus); no supported single misprint resolves it. See audit.
