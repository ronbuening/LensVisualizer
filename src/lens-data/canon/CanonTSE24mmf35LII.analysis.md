## Patent Reference and Design Identification

**Patent:** US 2010/0208366 A1\
**Application Number:** 12/704,076\
**Priority:** February 17, 2009 (JP 2009-033986)\
**Filed:** February 11, 2010\
**Published:** August 19, 2010\
**Inventor:** Suguru Inoue\
**Assignee:** Canon Kabushiki Kaisha\
**Title:** Optical System and Image Pickup Apparatus Having the Same\
**Embodiment analyzed:** Numerical Example 1

The data model transcribes Numerical Example 1 without scale change. The patent gives a nominal focal length of
24.26 mm and F-number 3.56; independent paraxial propagation through the rounded table gives an effective focal length
of 24.247181 mm. Canon markets the production lens as a 24 mm f/3.5 Canon EF tilt/shift lens. The production correlation
is the fixed correlation for this dataset; no inspected Canon source explicitly states that US 2010/0208366 A1,
Numerical Example 1, is the production prescription.

Several independent correspondences support the selected correlation:

1. The patent's 24.26 mm focal length and F/3.56 design values closely bracket Canon's marketed 24 mm f/3.5 identity.
2. The patent image height is 33.63 mm, corresponding to a 67.26 mm design circle, while Canon specifies a 67.2 mm
   image circle for the production TS-E 24mm f/3.5L II.
3. Numerical Example 1 contains 16 physical glass elements, matching Canon's production element count.
4. The prescription uses the 1.49700 / 81.5 low-dispersion coordinate class three times, at L3, L13, and L15. Canon
   independently specifies three UD elements. This is a count and coordinate-class correspondence, not a vendor
   identification.
5. The rear surface of the first physical element is the example's only asphere. Canon describes the production front
   element as a precision glass-molded aspherical element.
6. Patent ¶0047 moves the aperture stop and complete rear unit together toward the object for closer focus. Canon
   specifies manual rear focusing with no floating system.
7. The application claims a February 2009 priority date, and Canon Camera Museum records the production lens as marketed
   in June 2009.

One discrepancy is retained rather than reconciled. The patent prescription resolves to 16 elements in **10
air-separated groups**, while Canon specifies **16 elements in 11 groups** for the production lens. No synthetic air gap
or element is inserted to force the patent model to the manufacturer group count.

The source also contains a small rounding inconsistency. The explicit d1–d26 spacings sum to 93.60 mm rather than the
printed 93.57 mm configuration length. Using the separately printed 54.96 mm back focus gives a 148.56 mm track rather
than the separately printed 148.52 mm total length. The data model uses the explicit 54.96 mm back-focus value for the
rear spacing and leaves the discrepancy visible. No patent value is silently corrected. OCR corruption in extracted text is not treated as a source correction; the model
preserves the values printed on the rendered patent pages.

No uniform scaling is applied (`s = 1`). Consequently all radii, thicknesses, semi-diameters, and image-plane quantities
remain at patent scale, and the aspheric coefficients are not rescaled.

## Optical Architecture

Numerical Example 1 is a retrofocus wide-angle design in the sense used by the patent itself. The published back focus
of 54.96 mm exceeds the 24.26 mm focal length, and the complete system is strongly asymmetric around the aperture stop.
The model consists of 16 elements in 10 air-separated groups with one aspherical surface.

The patent divides the design into a front unit L1, the aperture stop, and a positive rear unit L2 (¶0043–¶0047). The
front unit is further divided into L1a and L1b. L1a contains the first three negative lenses. Their computed air-bounded
net focal length is -10.766459 mm, so this subunit provides the strong negative front action expected of a wide-angle
retrofocus layout. L1b comprises two cemented positive components: L4+L5 and L6+L7. Their net focal lengths are
+63.700199 mm and +46.641601 mm, respectively. In combination, L1b largely cancels the divergence created by L1a; the
complete front unit is close to afocal but remains slightly negative, with a computed air-bounded net focal length of
-1728.884278 mm.

The rear unit L2 contains nine elements and supplies the dominant final convergence. Its computed air-bounded net focal
length is +68.793493 mm. A normalized in-situ paraxial trace confirms the architectural distinction: a collimated ray
leaves the complete front unit with only a small residual angular change, after which the rear unit provides the main
converging action. This in-situ behavior is distinct from both the standalone focal length of any individual element and
the air-bounded power of a cemented component.

The aperture stop lies between the front and rear units. The patent's `ea` column is treated as an effective-aperture
envelope rather than an iris diameter. The physical stop radius in the data model is therefore derived from the traced
EFL, the entrance-pupil magnification, and the exact design F-number F/3.56. Using `ea13/2 = 10.045 mm` as the physical stop radius would instead produce about F/3.464 with the traced pupil
magnification, so the stop row cannot simultaneously be interpreted as a physical iris diameter and reproduce the
printed F/3.56. The resulting authored stop semi-diameter is 9.773318 mm and independently reproduces F/3.56.

The model ends at surface 27 followed by air to the image plane. Sensor cover glass, filters, dummy or flare-cutter
planes, and the mechanical camera components shown in patent Fig. 9 are not part of the prescription.

The lens is also a perspective-control system. Canon specifies ±12 mm shift and ±8.5° tilt. These movement limits are
stored as production metadata, while the intrinsic optical prescription remains the centered patent example. The
patent's 54.19° design half-field and 33.63 mm image height describe the enlarged optical field required for movement;
Canon's 84° diagonal specification refers to the centered 36×24 mm frame without tilt or shift.

## Element-by-Element Analysis

### L1 — Negative Meniscus, rear asphere

**nd = 1.58313, νd = 59.4. Glass: 583594 — vendor-unresolved coordinate class. f = -33.965733 mm.**

L1 is the first negative meniscus of the L1a subunit and carries the only aspherical surface in the design. Patent
¶0048–¶0054 gives the first lens a comparatively strong negative power and places the asphere on its image-side surface.
The patent explains this placement in terms of correcting off-axis aberration while avoiding the entrance-pupil behavior
that would result from putting the corresponding asphere on the object-side surface.

The quoted focal length is the standalone thick-lens value in air. It should not be read as the net power of the complete
front unit, whose later positive cemented components almost cancel the first three negative lenses.

### L2 — Negative Meniscus

**nd = 1.88300, νd = 40.8. Glass: 883408 — vendor-unresolved coordinate class. f = -54.535078 mm.**

L2 is the second negative lens in L1a. Patent condition (2) specifically constrains the relationship between its two
surface radii, using the shape factor `(G2R1-G2R2)/(G2R1+G2R2)`. The Example-1 value is 0.235, inside both the patent's
broad and preferred ranges. Its role is therefore not simply to add negative power; its meniscus shape is one of the
patent's explicit degrees of freedom for balancing front diameter and distortion.

### L3 — Biconcave Negative, low-dispersion coordinate class

**nd = 1.49700, νd = 81.5. Glass: 497815 — high-Abbe low-dispersion coordinate class (vendor unresolved). f = -41.900094 mm.**

L3 completes the three-negative-lens L1a subunit. It is the only element for which the authored data carries a
patent-supported anomalous-partial-dispersion deviation: `dPgF = +0.032`, taken from Table 1 for G3. The patent does not
publish Example-1 values of nC, nF, or ng, so those line indices are not invented in the data model.

The three-lens L1a combination has a computed air-bounded net focal length of -10.766459 mm. That composite value is
not the sum of the three standalone focal powers; spacing and thick-lens effects are included in the sequential result.

### C1 — Cemented L4 + L5

**L4: nd = 1.61601, νd = 58.7. Glass: 616587 — K-PSK200 compatible spectral proxy. f = +25.474222 mm.**\
**L5: nd = 1.88397, νd = 40.8. Glass: 884408 — S-LAH58 compatible spectral proxy. f = -40.116359 mm.**

L4 is biconvex and positive; L5 is a negative meniscus cemented directly to it at surface 8. The junction is modeled with
L5 as the downstream medium, without a synthetic cement layer. Although the individual elements have opposite signs,
the cemented component is net positive, with an independently computed air-bounded focal length of +63.700199 mm.

This distinction matters in the front-unit power balance: the component belongs to the positive L1b subunit even though
one of its physical elements is negative.

### C2 — Cemented L6 + L7

**L6: nd = 1.79600, νd = 38.1. Glass: 796381 — S-LAM73 compatible spectral proxy. f = +19.323522 mm.**\
**L7: nd = 1.77236, νd = 36.1. Glass: Unmatched 772361. f = -32.958173 mm.**

L6 is biconvex and positive; L7 is a negative meniscus cemented at surface 11. The pair is the second positive cemented
component of L1b and has a computed air-bounded focal length of +46.641601 mm. Together C1 and C2 form the patent's
positive rear subunit of L1, substantially cancelling the divergence generated by L1a.

### C3 — Cemented L8 + L9

**L8: nd = 1.78571, νd = 48.6. Glass: 786486 — N-LAF21 compatible spectral proxy. f = -69.308816 mm.**\
**L9: nd = 1.67769, νd = 31.4. Glass: Unmatched 678314. f = +27.070108 mm.**

C3 begins the nine-element rear unit immediately behind the stop. L8 is a negative meniscus and L9 a positive meniscus;
the cemented pair is nevertheless net positive, with a computed air-bounded focal length of +46.858828 mm. The sign of
the cemented component therefore differs from L8's standalone sign.

### C4 — Cemented L10 + L11 + L12 triplet

**L10: nd = 1.88300, νd = 40.8. Glass: 883408 — vendor-unresolved coordinate class. f = -20.705976 mm.**\
**L11: nd = 1.55400, νd = 52.2. Glass: Unmatched 554522. f = +15.767917 mm.**\
**L12: nd = 1.84175, νd = 37.2. Glass: Unmatched 842372. f = -15.039490 mm.**

The rear unit's central cemented triplet is negative as a component, with an independently computed air-bounded focal
length of -21.272346 mm. This is an example of why the individual focal lengths must not be conflated with the power of
the cemented assembly. Within the complete positive rear unit, the negative triplet provides a local counter-power
between positive components and gives the design additional freedom to balance the strongly asymmetric retrofocus
layout.

### L13 — Biconvex Positive

**nd = 1.49700, νd = 81.5. Glass: 497815 — high-Abbe low-dispersion coordinate class (vendor unresolved). f = +27.428492 mm.**

L13 is an air-spaced positive element after the C4 triplet. It repeats the same 1.49700 / 81.5 coordinate class used by
L3 but does not inherit L3's `dPgF` annotation: the patent's Table-1 condition-(5) value is specifically attached to G3,
and Example 1 supplies no line-index data for L13.

### C5 — Cemented L14 + L15

**L14: nd = 1.88300, νd = 40.8. Glass: 883408 — vendor-unresolved coordinate class. f = -21.251101 mm.**\
**L15: nd = 1.49700, νd = 81.5. Glass: 497815 — high-Abbe low-dispersion coordinate class (vendor unresolved). f = +26.611665 mm.**

L14 is a negative meniscus with a nearly plane first surface; L15 is biconvex and positive. The cemented pair is weakly
negative as a complete component, with a computed air-bounded focal length of -148.461878 mm. It therefore acts as a
small counter-power even though L15 itself is substantially positive.

As with L13, the low-dispersion coordinate class on L15 is source-supported through nd and νd only. No element-specific
nC, nF, ng, or `dPgF` values are authored for it.

### L16 — Positive Meniscus

**nd = 1.69895, νd = 30.1. Glass: 699301 — vendor-unresolved coordinate class. f = +134.476355 mm.**

L16 is the final weak positive meniscus before the variable rear air space. Its standalone power is modest compared with
the stronger elements earlier in L2. The full rear unit, however, is net positive at +68.793493 mm air-bounded EFL and
provides the dominant final convergence in the complete system.

## Glass Identification and Selection

The patent gives refractive indices and d-line Abbe numbers but does not name glass manufacturers. The data file
therefore preserves six-digit coordinate codes and qualifies compatible catalog curves as spectral proxies, without inferring a production vendor from nd and
νd alone. This is particularly important for coordinates that exist in several manufacturers' families.

| Glass annotation | nd | νd | Elements | Data-level interpretation |
|---|---:|---:|---|---|
| 583594 — vendor-unresolved coordinate class | 1.58313 | 59.4 | L1 | Moderate-index crown-like coordinate |
| 883408 — vendor-unresolved coordinate class | 1.88300 | 40.8 | L2, L10, L14 | Very high-index coordinate class |
| 497815 — high-Abbe low-dispersion coordinate class (vendor unresolved) | 1.49700 | 81.5 | L3, L13, L15 | High-Abbe low-dispersion coordinate |
| 616587 — K-PSK200 compatible spectral proxy | 1.61601 | 58.7 | L4 | Vendor unresolved |
| 884408 — S-LAH58 compatible spectral proxy | 1.88397 | 40.8 | L5 | Vendor unresolved |
| 796381 — S-LAM73 compatible spectral proxy | 1.79600 | 38.1 | L6 | High-index coordinate class |
| Unmatched 772361 | 1.77236 | 36.1 | L7 | High-index coordinate class |
| 786486 — N-LAF21 compatible spectral proxy | 1.78571 | 48.6 | L8 | High-index coordinate class |
| Unmatched 678314 | 1.67769 | 31.4 | L9 | High-dispersion coordinate class |
| Unmatched 554522 | 1.55400 | 52.2 | L11 | Moderate-index coordinate class |
| Unmatched 842372 | 1.84175 | 37.2 | L12 | High-index coordinate class |
| 699301 — vendor-unresolved coordinate class | 1.69895 | 30.1 | L16 | High-dispersion coordinate class |

Canon states that the production lens uses three UD elements. The patent model contains the 497815 low-dispersion
coordinate class exactly three times, which supports the production correlation at the class/count level. It does not
identify the vendor or establish that all three elements share the same anomalous partial-dispersion behavior. Only L3
has a source-supported `dPgF` value in the data file, so no apochromatic claim is made for the system.

## Focus Mechanism

The focus model is a **CONSTRAINED_RECONSTRUCTION**, not a published close-focus prescription. Patent ¶0047 states that
focus from infinity toward the closest object is obtained by moving the aperture stop and complete rear unit L2 together
toward the object. Canon independently describes the production lens as rear focusing with no floating system.

The data model preserves this rigid motion with two coupled gaps. The gap in front of the moving stop/rear-unit assembly
shrinks by the same amount that the final image-side gap grows:

| State | d12: surface 12 to STO | d27: rear surface to image plane | Rear-unit translation |
|---|---:|---:|---:|
| Infinity | 10.990000 mm | 54.960000 mm | 0 mm |
| Reconstructed close state | 2.940675 mm | 63.009325 mm | 8.049325 mm objectward |

The sum `d12 + d27` is conserved, so the stop and all surfaces of L2 translate as one rigid optical assembly. The close
endpoint is solved against Canon's 0.21 m closest-focus specification using an object-to-image-plane distance convention.
That reference-plane interpretation is a modeling assumption because the cited Canon product specification does not
dimension the MFD reference plane. The solved paraxial magnification is |m| = 0.333842, consistent with Canon's rounded
0.34× maximum-magnification specification.

No numerical close-focus spacing row appears in the patent. Intermediate focus-slider positions are therefore linear
viewer interpolation between the validated endpoints and must not be interpreted as a published mechanical cam law.

## Aspherical Surfaces

Numerical Example 1 has one aspherical surface: `2A`, the rear surface of L1. The patent uses the standard conic form

`x = (h²/R) / [1 + sqrt(1 - (1+K)(h/R)²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰ + A12 h¹²`.

Accordingly, the patent's `k` is stored directly as the standard conic constant `K`; no κ-to-K conversion is applied.
The data file carries:

| Term | Value |
|---|---:|
| K | -6.60488000e-01 |
| A4 | +1.69030000e-06 |
| A6 | +5.21355000e-11 |
| A8 | +1.39305000e-11 |
| A10 | -6.83548000e-14 |
| A12 | -1.94007000e-17 |
| A14 | 0 (schema completion; not a patent term) |

No scaling is applied, so the patent coefficients are used without transformation. At the authored semi-diameter of
16.425 mm, the conic radicand remains positive. Independent evaluation gives a polynomial departure of 0.092675 mm from
the patent K-conic and an actual rim-slope angle of 58.242695°. A spherical-base departure is not quoted at this height
because the semi-diameter exceeds |R| for the paraxial radius; the physically meaningful comparison is to the patent's
K-conic base.

Canon describes the production front element as a precision glass-molded aspherical element. That description is
consistent with an asphere on the rear face of the first physical element; it does not identify a glass vendor.

## Perspective-Control Movement

Canon specifies a shift range of ±12 mm and a tilt range of ±8.5°. These are production mechanical limits and are kept
separate from the centered patent prescription. The data model also retains the patent design field of 54.19° half-angle
and 33.63 mm image height so movement-aware tracing can use the enlarged coverage rather than the centered 36×24 mm
frame alone.

The farthest corner of a 36×24 mm frame after 12 mm vertical shift is 30.0 mm from the lens axis. This remains within the
33.63 mm patent design radius, leaving 3.63 mm radial margin. Using the traced 24.247181 mm EFL gives a paraxial
half-field of 51.05°; an exact centered chief-ray solve reaches 30.0 mm image height at 51.129°. Both remain below the
patent's 54.19° design half-field. This is a field-envelope check, not a guarantee of unvignetted illumination at every
tilt/shift combination.

The physical tilt hinge is not dimensioned in the inspected patent or Canon product sources. Because the current data
schema requires a pivot for tilt tracing, the model uses a camera-frame rear-vertex fallback 54.96 mm objectward of the
image plane. This is a deterministic visualization/tracing reference, not a claim about the manufactured hinge location.

## Chromatic Correction Strategy

The patent devotes condition (5) to relative partial dispersion in at least one of the first three negative lenses and
identifies G3 for Example 1. In the data model that evidence is represented only on L3 as `dPgF = +0.032`. The
manufacturer's statement that the production lens uses three UD elements is compatible with the repeated 497815
coordinate class on L3, L13, and L15, but the patent does not publish line-index data for all three elements.

The design therefore supports a narrower statement than an apochromatic label: it combines one source-identified
anomalous-partial-dispersion front negative lens with two additional elements in the same high-Abbe coordinate class.
Without element-specific nC, nF, and ng values for L13 and L15, or validated vendor Sellmeier identities stored in the
data file, a stronger secondary-spectrum or APO claim would exceed the evidence.

## Conditional Expressions

The patent uses the first three negative lenses to define five conditions. The first four can be recomputed directly from
the authored prescription. Condition (5) depends on spectral line indices that Numerical Example 1 does not publish, so
its +0.032 value is retained as the patent's Table-1 result for G3 rather than presented as an independently reconstructed
line-index calculation.

| Condition | Example-1 value | Preferred range / threshold | Result |
|---|---:|---:|---|
| (1) `f1/f` | -1.400812 | -1.55 to -1.27 | Pass |
| (2) `(G2R1-G2R2)/(G2R1+G2R2)` | +0.235000 | +0.14 to +0.35 | Pass |
| (3) `f1/f2` | +0.622824 | +0.43 to +0.69 | Pass |
| (4) `f13/f` | -0.444029 | -0.59 to -0.35 | Pass |
| (5) `θgF - (0.6438 - 0.001682νd)` for G3 | +0.032 (patent Table 1) | > +0.020 | Pass by source value |

Conditions (1)–(4) are computed from the final prescription rather than copied from the patent's rounded Table-1 values.
Condition (5) is explicitly source-limited.

## Verification Summary

Independent sequential y–ν tracing and an ABCD calculation from the final authored TypeScript arrays agree to floating-
point precision. The rounded prescription gives an EFL of 24.247181 mm, compared with the patent's 24.26 mm, and a
Gaussian BFD of 54.899701 mm. The model deliberately retains the patent's explicit 54.96 mm rear spacing rather than
moving the image plane to the Gaussian BFD.

The authored stop reproduces F/3.56. The computed entrance-pupil position is 19.251910 mm, compared with the patent's
19.25 mm, and the exit-pupil position is -29.812706 mm, compared with -29.79 mm. The surface-by-surface Petzval sum,
using `φ/(n·n′)`, is +0.004386330270 1/mm under the verification script's sign convention.

The first-to-last optical-vertex length is 93.60 mm, so `TL/EFL = 3.86024`; the design is not telephoto under the project
definition `TL/EFL < 1`. The explicit 54.96 mm back focus gives `BFD/EFL = 2.26666 > 1`, satisfying the project
retrofocus test independently of the patent's own retrofocus terminology.

Geometry checks at both authored focus endpoints give a maximum actual rim slope of 58.242695° at surface 2A, a minimum
common-band element edge thickness of 1.128253 mm at L16, and a worst shared-band cross-gap intrusion fraction of
0.852736 at the surface-4 to surface-5 air gap. Exact meridional tracing at the patent's 54.19° half-field places the
chief ray at 33.569447 mm image height, close to the patent's rounded 33.63 mm value; other pupil samples show ordinary
vignetting rather than being allowed to propagate outside the authored clear apertures.


## Sources / References

- US 2010/0208366 A1, Suguru Inoue, *Optical System and Image Pickup Apparatus Having the Same*, published August 19,
  2010. Numerical Example 1; especially ¶0043–¶0047, ¶0050–¶0077, and printed pp. 5–6.
  https://patents.google.com/patent/US20100208366A1/en
- Canon Camera Museum, *TS-E24mm f/3.5L II*. Production identity, June 2009 marketing date, 16 elements / 11 groups,
  eight diaphragm blades, 0.21 m closest focus, 0.34× maximum magnification, front glass-molded asphere, and three UD
  elements. https://global.canon/en/c-museum/product/ef402.html
- Canon U.S.A., *TS-E 24mm f/3.5L II*. 24 mm f/3.5 marketing specification, 67.2 mm image circle, 84° centered diagonal
  field, rear focusing with no floating system, 0.21 m closest focus, 0.34× maximum magnification, and eight-blade
  aperture. https://www.usa.canon.com/support/p/ts-e-24mm-f-3-5l-ii
- Canon UK Store, *TS-E 24mm f/3.5L II*. ±12 mm shift and ±8.5° tilt limits.
  https://www.canon.co.uk/store/canon-ts-e-24mm-f-3-5l-ii-lens/3552B005/
## Integration audit — 2026-09-11 UTC

US 2010/0208366 A1, Fig. 1, PDF p2 (600 dpi; 90-degree rotation; crop 0.15,0.34,0.58,0.66). Retained all SDs from the published effective diameters. The drawing is consistent in relative shape; schematic rims do not supersede the numerical ea column. L4/L5/L6/L8 now use qualified K-PSK200/S-LAH58/S-LAM73/N-LAF21 curves. L7/L9/L11/L12 remain explicitly unmatched after a vendor-catalog coefficient search.

Surface validation and image-circle audits passed. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.

Direct local-SVG comparison retains the authoritative published effective-aperture values (SD = ea/2), excluding the drawing’s mechanical flanges. The stop and rear unit L2 move objectward toward near focus, with L1 fixed. L3/L13/L15 now resolve through the newly added Sumita K-PFK80 curve, a compatible curve with supplier unspecified (nominal nd/vd 1.497/81.5; coefficient-evaluated vd 81.3504). L3 retains the patent’s dPgF = +0.032 and patent APD tag; L13/L15 receive inferred APD tags from the catalog curve (deviation approximately +0.02999). Searches of Sumita’s discontinued-inclusive August 2026 catalog and OHARA_260701.AGF (433 entries, including special-order and discontinued glass) do not resolve L7/L9/L11/L12 within the existing compatibility tolerances; those four stay explicitly unmatched.

Diagram labels follow the patent’s front-unit subdivision: L1a covers the three negative lenses G1–G3 (S1–S6), L1b covers the two positive cemented components (S7–S12), and L2 is the moving rear unit. Both L1 subunits stay fixed during focus.
