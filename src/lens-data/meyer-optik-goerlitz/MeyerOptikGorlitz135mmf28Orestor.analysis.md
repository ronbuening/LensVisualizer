## Patent Reference and Design Identification

**Patent:** DE 1 282 311
**Application Number:** P 12 82 311.9-51 (V 22052)
**Filed:** 19 February 1962
**Published:** 7 November 1968 (Auslegeschrift)
**Inventor:** Hubert Ulbrich
**Applicant:** VEB Pentacon Dresden Kamera- und Kinowerke
**Title:** *Fünflinsiges, viergliedriges Tele-Objektiv*
**Embodiment analyzed:** Example 1, the worked numerical prescription on printed page 3

DE 1 282 311 describes a five-element, four-group photographic telephoto objective with an opening ratio of at least
1:2.8. Example 1 is normalized to `f = 100` and gives the complete nine-surface spherical prescription, including the
published end back focal distance `s′0 = 38.5 mm` and the lens-block spacing sum `Σ(d+l) = 59.2 mm` (DE 1 282 311,
printed p. 3; PDF p. 2). The drawing sheet confirms the physical sequence of five lenses in four air-separated groups
(DE 1 282 311, drawing sheet 1; PDF p. 3).

The production correlation to the Meyer-Optik Görlitz Orestor 2.8/135 is convergent but not manufacturer-confirmed.
Manufacturer-origin Orestor material identifies a 135 mm f/2.8 lens for the 24×36 mm format, a utilized image angle of
18°, a closest focusing distance of 1.50 m, and a five-lens telephoto type. Its optical schematic shows the same broad
sequence as the patent: a front positive singlet, a thick cemented pair, a large central air space, a rear negative
singlet, and a final positive singlet. The implemented prescription therefore applies a uniform `1.35×` scale to the
patent's `f = 100` example. This is a modeling correlation, not evidence that Meyer-Optik published DE 1 282 311 Example 1
as the production Orestor prescription.

## Optical Architecture

The prescription is a five-element, four-group telephoto construction. In the patent's own description, the longer-
conjugate-side positive system consists of a plano-convex front lens followed by a negative meniscus formed as a cemented
biconvex positive component and biconcave negative component. The shorter-conjugate-side positive system consists of two
air-spaced singlets: first a biconcave negative lens and then a biconvex positive lens. The patent further specifies that
the more strongly curved surface of each rear singlet faces the image plane (DE 1 282 311, printed pp. 1-4).

All refracting surfaces are spherical or plane. The implemented model scales every patent radius, glass thickness, air
spacing, and image-plane distance by `1.35`; refractive indices and Abbe numbers remain unchanged. The resulting computed
design EFL is `135.132 mm`, while the marketed focal length remains 135 mm.

The model meets the project's strict geometrical use of the term *telephoto*. Its authored first-vertex-to-image distance
is `131.895 mm`, giving `TL/EFL = 0.9760` against the computed `135.132 mm` EFL. The final image-plane spacing preserves
the uniformly scaled published `s′0`, namely `51.975 mm`; the same rounded prescription independently recomputes a
paraxial BFD of `52.011 mm`. The `0.036 mm` difference is retained rather than moving the image plane to force numerical
identity.

The diaphragm is not a published dimension. The patent states, "Die Blendenanordnung ist unbestimmt"—the diaphragm
arrangement is indeterminate (DE 1 282 311, printed p. 2; PDF p. 1). The implemented model therefore places one inferred
stop at the midpoint of the scaled `29.835 mm` central air gap. Its semi-diameter is calibrated to the modeled f/2.8;
agreement with f/2.8 is consequently a calibration result, not independent evidence for the manufactured stop diameter.
The surface semi-diameters are likewise modeled rather than patent-published values.

## Element-by-Element Analysis

### L1 — Plano-Convex Positive Front Singlet

`nd = 1.61375`, `νd = 56.3`. Glass: `BACD6 spectral proxy (patent 614563 coordinate; supplier unconfirmed)`. Standalone thick-lens `f = +143.413 mm`.

L1 is the patent's front plano-convex positive lens, with its curved face toward the object. Its positive standalone power
is calculated from the final scaled radii, thickness, and stored d-line index. The patent treats this singlet and the
following cemented meniscus as the front system; the calculation keeps L1's standalone power distinct from the power of
that complete in-situ subsystem.

### L2 — Biconvex Positive Component of the Cemented Meniscus

`nd = 1.60729`, `νd = 49.2`. Glass: `BAF5 spectral proxy (patent 607492 coordinate; supplier unconfirmed)`. Standalone thick-lens `f = +52.432 mm`.

L2 is the positive component of the cemented L2-L3 pair. The patent describes the pair as a negative meniscus assembled
from a biconvex converging lens and a biconcave diverging lens. L2 by itself is strongly positive, but its standalone
power is not the power of the cemented assembly.

### L3 — Biconcave Negative Component of the Cemented Meniscus

`nd = 1.69895`, `νd = 30.1`. Glass: `699301 class (supplier unconfirmed)`. Standalone thick-lens `f = -31.176 mm`.

L3 is the negative component at the cemented interface. In the final model the L2-L3 assembly is net negative, with a
computed cemented equivalent focal length of `-209.110 mm`. This value is a subsystem calculation through the cemented
pair; it should not be confused with L3's much stronger standalone negative focal length.

The patent requires the cemented meniscus to have an axial center thickness of at least `0.15 f`. After the uniform scale,
the modeled L2+L3 center thickness is `27.135 mm`, above the `20.25 mm` minimum corresponding to the 135 mm scaled
normalization.

### L4 — Rear Biconcave Negative Singlet

`nd = 1.63854`, `νd = 55.5`. Glass: `639555 class (supplier unconfirmed)`. Standalone thick-lens `f = -352.956 mm`.

L4 begins the air-spaced rear pair and has only modest negative standalone power. Its image-facing surface is the more
strongly curved one: the modeled absolute radii are `670.95 mm` on the front face and `340.2 mm` on the rear face. This
is the orientation required by the patent claim.

### L5 — Rear Biconvex Positive Singlet

`nd = 1.69895`, `νd = 30.1`. Glass: `699301 class (supplier unconfirmed)`. Standalone thick-lens `f = +125.464 mm`.

L5 is the final positive singlet. As with L4, its image-facing surface is the more strongly curved one: `|R| = 141.75 mm`
on the rear face versus `226.8 mm` on the front face. L4 and L5 are air-spaced and must not be treated as a cemented
pair. Their complete rear subsystem is nevertheless net positive in the paraxial matrix calculation.

## Glass Identification / Selection

The patent publishes only d-line refractive index and Abbe number, explicitly referenced to the helium d line at
587.6 nm (DE 1 282 311, printed p. 3). It does not identify glass suppliers or melts. The implemented data therefore uses
six-digit coordinate classes and explicitly qualified catalog proxies, and no vendor-specific `nC`, `nF`, `ng`, or `dPgF` values are
assigned.

| Data label | nd | νd | Used by | Catalog context, not supplier attribution |
|---|---:|---:|---|---|
| `BACD6 proxy` | 1.61375 | 56.3 | L1 | HOYA BACD6 is 1.613753/56.377856; used as a spectral proxy. |
| `BAF5 proxy` | 1.60729 | 49.2 | L2 | HOYA BAF5 is 1.607292/49.336899; used as a spectral proxy. |
| `699301 class` | 1.69895 | 30.1 | L3, L5 | OHARA S-TIM35 is 1.69895/30.13; the coordinate also belongs to a cross-vendor dense-flint family. |
| `639555 class` | 1.63854 | 55.5 | L4 | SUMITA K-SK18 is an exact coordinate match; CDGM, OHARA, and HIKARI publish closely neighboring SK18-family coordinates. |

These catalog comparisons establish only coordinate compatibility. They do not show which supplier furnished the
production glass. The patent itself also emphasizes that the design can use glasses with d-line index below 1.7; the
selected example satisfies that condition with a maximum `nd = 1.69895` (DE 1 282 311, printed p. 3). Because supplier
identity and spectral line data are unproven, the model does not support an APO, anomalous-partial-dispersion, or
historical supplier attribution.

## Focus Mechanism

The patent supplies one optical prescription and no finite-focus spacing table or group-motion law. Manufacturer-origin
Orestor material lists a closest focusing distance of `1.50 m`, but it does not describe whether focusing is pure unit
extension or includes any internal optical movement.

The implemented model therefore has `NO_INTERNAL_RECONSTRUCTION`. The `1.50 m` value is production metadata only; no
`var` spacing table is authored, and no finite-focus optical state, focus travel, breathing value, or close-focus
magnification is claimed from the patent.

## Patent Conditions and Model Verification

The patent claim and descriptive text impose several numerical or geometrical conditions. On the final scaled model,
the applicable checks are as follows:

- The computed design EFL is `135.132 mm`, while the authored front-vertex-to-image distance is `131.895 mm`; focal length
  therefore exceeds the physical first-vertex-to-image track.
- The 24×36 mm format diagonal is exceeded by more than a factor of three by both the marketed 135 mm focal length and
  the computed design EFL.
- The cemented L2+L3 center thickness is `27.135 mm`, exceeding the scaled `0.15 f = 20.25 mm` minimum.
- Both rear singlets have their more strongly curved surface toward the image plane.
- The modeled entrance-pupil diameter is `48.262 mm`, so two-thirds is `32.174 mm`. The modeled maximum physical
  diameters are `23.0 mm` for L4 and `32.0 mm` for L5, both below that limit. Because the stop and lens diameters are
  modeled, this verifies consistency of the implemented geometry with the patent condition; it is not a measurement of
  production hardware.
- The scaled published BFD ratio remains `0.385`, within the patent's descriptive `0.35-0.40` range.

One source-level discrepancy is preserved. Example 1 prints `Σ(d+l) = 59.2` for `f = 100`, giving `0.592 f`, while the
preceding description gives an `Objektivscheitelmaß` range of `0.60-0.65 f` (DE 1 282 311, printed p. 1 versus printed
p. 3). The prescription is not altered to force the numerical example into the descriptive range.

The patent does not publish semi-diameters. The implemented values were sized from exact two-dimensional meridional
spherical tracing with outward clearance. The full 24×36 mm diagonal-edge chief ray clears the modeled apertures at both
field signs. The original ray-envelope aperture estimates were enlarged after a 600 dpi figure review: S3/S4 use a shared 26.8 mm cemented rim, S5 uses 15.5 mm inside the beveled blank, and L5 uses 16.0 mm. The rear diameter remains below the patent’s two-thirds entrance-pupil bound. These estimates do not establish unvignetted two-dimensional pupil transmission.

Portable geometry checks also retain positive element edge thickness, stay below the current rim-slope limit, and pass
shared-band cross-gap intrusion tests. These checks establish consistency of the authored meridional geometry; they do
not substitute for the LensVisualizer production render-diagnostic and trim checks.

## Sources / References

1. Deutsches Patentamt. **DE 1 282 311**, *Fünflinsiges, viergliedriges Tele-Objektiv*. Applicant: VEB Pentacon Dresden
   Kamera- und Kinowerke; inventor: Hubert Ulbrich. Filed 19 February 1962; Auslegetag 7 November 1968. Numerical Example 1
   on printed p. 3 / PDF p. 2; claim on printed p. 4 / PDF p. 2; optical drawing on drawing sheet 1 / PDF p. 3.
2. Meyer-Optik Görlitz. **ORESTOR 2,8/135 user guide / specification sheet**, manufacturer-origin scan hosted by
   AllPhotoLenses. Page 1 lists exchange-adapter systems; page 2 gives 1:2.8/135, 24×36 mm format, 18° utilized image
   angle, and 1.50 m closest focusing distance. <https://allphotolenses.com/public/files/pdfs/bdb41cbf9e88ef4539c8590e17d7813c.pdf>
3. Meyer-Optik Görlitz. **ORESTOR 2,8/135 brochure**, manufacturer-origin scan hosted by AllPhotoLenses. The one-page
   brochure describes a five-lens telephoto type and shows the optical schematic used for the production-correlation and
   stop-location inference. <https://allphotolenses.com/public/files/pdfs/fa1f8e722863b20946b8facde59052e2.pdf>
4. AllPhotoLenses. **Meyer-Optik Görlitz Lens Data archive index**. Archive metadata labels the Orestor 135 brochure as
   1967; that date is archive metadata, not a date printed on the manufacturer scan.
   <https://allphotolenses.com/pdf/c_85/d_38/p_2.html>
5. OHARA INC. **S-TIM35 detailed optical-glass data** and legacy OHARA catalog content used for coordinate comparison.
   <https://staging.oharacorp.com/wp-content/uploads/2023/07/S-TIM35-2020-06.pdf> and
   <https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf>
6. SUMITA OPTICAL GLASS, INC. **Optical-glass Zemax catalog**, including K-SK18.
   <https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf>
7. CDGM. **H-ZK11 optical-glass data sheet**.
   <https://www.cdgmgd.com/accessory/2021-11-18/client/www.cdgmgd.com/f44bac33-96f4-4f40-a15d-54061708cbaa.pdf>
8. HIKARI GLASS CO., LTD. **Optical Glass Catalog**, including J-SK18.
   <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>
9. HOYA GROUP Optics Division. **Optical Glass Data Download and Cross Reference**.
   <https://www.hoya-opticalworld.com/english/datadownload/index.html>
10. SCHOTT. **Optical Glass catalog and product data**.
    <https://www.schott.com/en-us/products/optical-glass-p1000267>
