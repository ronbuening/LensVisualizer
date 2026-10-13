# SCHNEIDER-KREUZNACH RETINA-XENON C 50mm f/2 (Kodak Retina IIIc)

## Patent Reference and Design Identification

**Patent:** CH 352844\
**Filed:** 9 June 1956\
**Priority:** Germany, 13 July 1955\
**Published:** 28 April 1961\
**Inventor:** Günter Klemt\
**Applicant:** Jos. Schneider & Co., Optische Werke\
**Title:** *Optisches System mit Auswechselgliedern zur Änderung seines Abbildungsmaßstabes*\
**Embodiment analyzed:** Zahlenbeispiel A (Example 1)

CH 352844 is a Swiss additional patent to CH 323375. Zahlenbeispiel A is the base objective used here. The patent gives
relative aperture 1:2, `f′ = 100`, and `s′ = 72.4`, with six glass elements arranged as four air-separated groups. It
identifies the front member I as L1–L3 and the fixed rear member II as L4–L6. The same numerical table is printed on patent
page 2 and repeated under claim 3 on page 4; Fig. 1 on the drawing sheet shows the same L1–L6 layout and labels the large
central spacing as `d5` (CH 352844, pp. 2, 4 and Fig. 1).

The LensVisualizer model applies a uniform factor of 0.5 to every dimensional patent quantity. The resulting Gaussian EFL
from the final parsed prescription is 50.003113 mm. Refractive indices and Abbe numbers remain unchanged. No aspheric
coefficient conversion is needed because Zahlenbeispiel A is entirely spherical.

The production identification is a strong correlation rather than a manufacturer statement that CH 352844 Example A is
the exact Retina-Xenon C prescription. The evidence converges in several independent ways:

1. Eastman Kodak literature specifies a 50 mm f/2 Retina-Xenon C standard lens, while the uniformly scaled patent example
   computes to 50.003113 mm at the modeled f/2 aperture.
2. Kodak describes the Retina-Xenon C as a six-element lens; the patent example also contains six elements.
3. The patent is organized around an exchangeable front member, and Kodak literature describes the standard lens as having
   a removable/changeable front component retained by a bayonet-type snap lock.
4. Kodak specifies 135 film with a 24×36 mm image area, supporting the model's `135-full-frame` format assignment.
5. The patent priority and filing dates overlap the mid-1950s Retina IIIc product period documented by Kodak literature and
   the Science Museum Group collection record.

The data file therefore uses the historical product identity for catalog presentation while retaining the qualification in
its subtitle: the production correlation is inferential, not manufacturer-confirmed patent attribution.

## Optical Architecture

The patent describes the underlying objective as being built in the manner of a Gauss double objective
(*Gauß-Doppelobjektiv*). Zahlenbeispiel A is correspondingly a double-Gauss-derived six-element, four-group system, but its
most important patent-level feature is not a novel fixed prime layout in isolation. The optical system is divided into a
front exchangeable member I and a fixed rear member II so that the front member can be removed and replaced by a different
assembly to change image scale (CH 352844, p. 1 and Fig. 1).

In the selected base objective the physical group sequence is:

- G1: L1, a positive meniscus.
- G2: L2+L3, a cemented positive/negative pair with negative net power.
- G3: L4+L5, a cemented negative/positive pair with negative net power.
- G4: L6, a rear positive element whose front surface is almost plane at the modeled scale.

The resulting group-level power pattern is positive–negative–negative–positive. The standalone and cemented values below
come from the final parsed data revision; they are not additive thin-lens powers for the complete system:

| Item | Computed equivalent focal length | Meaning |
|---|---:|---|
| L1 | +61.406 mm | isolated element in air |
| L2+L3 | -99.322 mm | real cemented-pair net power |
| L4+L5 | -223.403 mm | real cemented-pair net power |
| L6 | +50.261 mm | isolated element in air |

The final modeled lens track from the first to the last refracting vertex is 31.075 mm. The image coordinate stored after
surface 10 is 36.2 mm because it preserves the scaled patent value `s′ = 72.4 × 0.5`. Independent paraxial tracing of the
final data gives a BFD of 36.218075 mm from the last vertex; the 0.018075 mm difference is retained as the consequence of
the patent's rounded published image distance rather than silently replacing that source value. Using the paraxial image
plane for total length, `TL/EFL = 1.345778` and `BFD/EFL = 0.724316`; the modeled prescription therefore meets neither the
project's telephoto (`TL/EFL < 1`) nor retrofocus (`BFD > EFL`) criterion.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.67003, νd = 47.2. Glass: 670472 — BAF10-class (supplier unresolved). f = +61.406 mm.`

L1 is the first and only air-separated element at the front of patent member I. Its isolated power is positive. It is
followed by a short air gap and then by the cemented L2+L3 pair. The patent identifies L1 as part of the removable front
member, but it does not separately assign an aberration-correction function to this element in Zahlenbeispiel A.

The stored glass label is deliberately class-level. An exact `nd/νd` coordinate match exists to a legacy BAF10 row in the
current SUMITA all-glasses catalog, but this is evidence for a glass class/equivalent only and does not establish the
historical Schneider supplier or melt.

### L2 + L3 — Cemented Front Pair D1

`L2: nd = 1.69347, νd = 53.5. Glass: LAC13 — compatible spectral proxy (historical supplier/melt unresolved). f = +36.388 mm.`\
`L3: nd = 1.66446, νd = 35.9. Glass: 664359 — BASF2-class (supplier unresolved). f = -23.253 mm.`

L2 and L3 share the cemented interface at modeled surface 4. L2 is positive as an isolated element, whereas L3 is
negative. When the actual cemented interface and thicknesses are retained, the pair has a net equivalent focal length of
-99.322 mm. This net value is distinct from either standalone element focal length and from the in-situ contribution of the
pair once the neighboring air gaps and other groups are included.

The pair also places a higher-Abbe positive element beside a lower-Abbe negative element. That contrast is consistent with
the ordinary chromatic degree of freedom provided by a cemented crown/flint-type pairing, but the source supplies only
d-line `nd` and `νd`. No claim of anomalous partial dispersion, apochromatic correction, or a supplier-specific dispersion
curve is justified from these data alone.

L3 closes patent member I at surface 5. The large following `d5` interval is the patent's diaphragm space rather than a
published, dimensioned aperture plane.

### L4 + L5 — Cemented Rear Pair D2

`L4: nd = 1.63980, νd = 34.6. Glass: 640346 — SF7-class (supplier unresolved). f = -17.500 mm.`\
`L5: nd = 1.65844, νd = 50.8. Glass: 658508 — SSK5-class (supplier unresolved). f = +22.518 mm.`

L4 and L5 form the first group of the fixed rear member II. L4 is a biconcave negative element and L5 a biconvex positive
element. Their real cemented combination remains slightly negative overall, with a computed equivalent focal length of
-223.403 mm.

As in D1, the Abbe-number contrast gives the cemented pair a chromatic balancing degree of freedom, but the available
source does not provide the line-index or partial-dispersion data required for a more specific spectral-performance claim.
The exact coordinate matches found for the SF7-class and SSK5-class labels remain catalog-equivalence evidence, not proof
of historical supplier identity.

### L6 — Near-Plano-Convex Positive Rear Element

`nd = 1.74472, νd = 44.7. Glass: N-LAF2 — compatible spectral proxy (historical supplier/melt unresolved). f = +50.261 mm.`

L6 is the final air-separated positive element of fixed member II. Its first radius is very large (`R = +1179.685 mm` in
the scaled model), so the front face is optically close to plane compared with the much stronger rear surface. The element
is positive in isolation and completes the four-group positive–negative–negative–positive sequence.

No supplier-specific catalog identity was established for the patent coordinate `nd = 1.74472, νd = 44.7`. The data file
therefore uses N-LAF2 only as a qualified spectral proxy, without identifying a historical supplier.

## Glass Identification / Selection

The patent indices and Abbe numbers are retained unchanged. Catalog curves are coordinate-compatible spectral proxies, not identification of the historical supplier, composition, or melt. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` is copied into the prescription, and no anomalous-dispersion or APO claim is inferred from the match.

| Element | Patent/model nd / νd | Spectral model |
| --- | --- | --- |
| L1 | 1.67003 / 47.2 | H-ZBaF52 (qualified catalog proxy) |
| L2 | 1.69347 / 53.5 | LAC13 (qualified catalog proxy) |
| L3 | 1.66446 / 35.9 | J-BASF2 (qualified catalog proxy) |
| L4 | 1.6398 / 34.6 | J-SF7 (qualified catalog proxy) |
| L5 | 1.65844 / 50.8 | J-SSK5 (qualified catalog proxy) |
| L6 | 1.74472 / 44.7 | N-LAF2 (qualified catalog proxy) |

## Focus Mechanism

The optical model contains only the patent's infinity/source design state. The production literature gives a focus range of
2.5 ft to infinity, represented in the data as `closeFocusM = 0.762 m`, but neither CH 352844 Zahlenbeispiel A nor the
manufacturer material used for correlation supplies enough information to reconstruct a unique internal spacing law.

Accordingly, the data has no focus `var` entries and the focus status is `NO_INTERNAL_RECONSTRUCTION`. It does not assert a
unit-focus, inner-focus, or floating-group travel model; it also does not claim a total optical travel, close-focus
magnification, or finite-focus prescription. The marketed minimum distance is retained as product metadata only.

## Verification Summary

The final prescription is a literal 0.5× dimensional normalization of the selected patent example except for the modeled
aperture-stop plane and modeled semi-diameters, neither of which is published by the patent. Sequential height/reduced-angle
tracing and an independently implemented ABCD product agree on the final first-order matrix. The resulting design EFL is
50.003113 mm and the paraxial BFD is 36.218075 mm from surface 10.

The patent calls the source `d5 = 21.21 mm` interval a *Blendenraum* but gives no unique iris station or physical diameter.
The model therefore splits the scaled 10.605 mm interval at its midpoint: 5.3025 mm before `STO` and 5.3025 mm after it.
The modeled stop semi-diameter is 8.83346026 mm. Paraxial pupil imaging gives an entrance-pupil semi-diameter of
12.500778 mm and a modeled f-number of 2.0000000001. This agreement is a calibration to the published f/2 target, not an
independent measurement or recovery of the manufactured diaphragm.

The surface semi-diameters are estimated rather than source-published. Fig. 1 supplies the optical rim proportions,
with 12.0 mm front cemented rims and 10.7 mm rear cemented rims; the smaller stop-facing apertures exclude drawn
bevels. Exact spherical-ray and rendered-boundary checks validate the modeled geometry. This does not establish
full-pupil transmission at the extreme frame corner, so corner vignetting is not excluded.

The parsed final prescription gives a Petzval sum of `+0.003875252611 1/mm` using `φ/(n·n′)` surface by surface. This is a
first-order curvature quantity from the modeled prescription; it is not a measured field-curvature result for a production
sample.

## Sources and References

1. Eidgenössisches Amt für geistiges Eigentum, **CH 352844**, *Optisches System mit Auswechselgliedern zur Änderung seines
   Abbildungsmaßstabes*, applicant Jos. Schneider & Co. Optische Werke, inventor Günter Klemt, published 28 April 1961.
   Zahlenbeispiel A: pp. 2 and 4; optical layout: Fig. 1 on the drawing sheet.
2. Eastman Kodak Company, **Kodak Retina IIIc instruction book**, printing code 12-56-CH-AE. Manufacturer literature
   describing the 50 mm f/2 six-element Retina-Xenon C, 24×36 mm Kodak 135 format, 2.5 ft–∞ focus range, and changeable
   front component. Archival scan: https://www.pacificrimcamera.com/rl/02977/02977.pdf
3. Eastman Kodak Company, **Kodak Retina IIIc instruction manual**. Manufacturer literature describing the six-element
   2-inch Retina Xenon C f/2 and the removable/interchangeable portion of the standard lens. Archival scan:
   https://www.butkus.org/chinon/kodak/kodak_retina_iiic/kodak_retina_iiic.pdf
4. Science Museum Group Collection, **Kodak Retina IIIc Camera, type 021, 1954–1957**, institutional record identifying a
   Schneider-Kreuznach Retina-Xenon C 50 mm f/2 on the Retina IIIc:
   https://collection.sciencemuseumgroup.org.uk/objects/co8085430/kodak-retina-iiic-camera-type-021-1954-1957
5. SUMITA Optical Glass, Inc., **Zemax all-glasses catalog**, catalog header dated 21 August 2026, used only for recorded
   coordinate-equivalent glass-class checks: https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
