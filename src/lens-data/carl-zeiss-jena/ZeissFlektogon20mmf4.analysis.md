## Patent Reference and Design Identification

**Patent:** GB 978,797 — *Improvements in or relating to Wide-Angle Lenses*  
**Application Number:** 23229/63  
**Filed:** 11 June 1963  
**Published:** 23 December 1964  
**Inventors:** Wolf Dannberg; Eberhard Dietzsch  
**Applicant:** VEB Carl Zeiss Jena  
**Embodiment analyzed:** Example 1

GB 978,797 describes a six-component wide-angle objective whose angular field exceeds 90°. Example 1 is normalized to
`f = 1.0`, specifies a relative aperture of 1:4, and gives an available image field of approximately 93° (GB 978,797,
pp. 2–3, Example 1). The implemented LensVisualizer model applies a uniform scale of 20 to every dimensional prescription
quantity. Recalculation from the final data gives an effective focal length of 20.0023 mm, while the production lens is
marketed as 20 mm. The scale is therefore a production-correlation modeling step rather than a patent-published scale
factor.

The production identification is strong but not explicit. A PENTACON / Carl Zeiss Jena SLR-lens catalog lists the
**ZEISS FLEKTOGON 4/20** as a ten-element lens for PRAKTICA, EXAKTA, and EXA, with a utilized image angle of 93° and a
minimum focusing distance of 0.16 m. Those facts converge with Example 1's ten elements, f/4 aperture, approximately 93°
field, and scaled 20.0023 mm EFL. No located manufacturer document states that GB 978,797 Example 1 is the production
Flektogon 4/20 prescription, so the linkage remains a correlation rather than a manufacturer-confirmed attribution.

The model preserves that distinction in its metadata. It uses the canonical `m42` and `exakta` mount identifiers and
`135-full-frame` format for the documented production variants, but the optical prescription itself continues to be
identified by the patent and Example 1 rather than by an asserted factory prescription record.

## Optical Architecture

The design is a retrofocus, or reversed-telephoto, wide-angle objective. The final model gives a Gaussian back focal
distance of 36.1302 mm from the last lens surface and an EFL of 20.0023 mm, so `BFD/EFL = 1.8063`. Because BFD exceeds EFL, the design meets the explicit retrofocus criterion used for this dataset. The first-to-last-vertex
construction length is 50.632 mm, which gives `TL/EFL = 2.5313`; it therefore does not meet the separate telephoto
criterion `TL/EFL < 1`.

The source architecture is unusually explicit. Three front air-spaced menisci form the divergent section: L1 is weakly
positive, while L2 and L3 are negative. The rear section contains three cemented components: G4 is a two-element pair,
G5 is a two-element pair, and G6 is a three-element cemented group (GB 978,797, pp. 1–2 and drawing sheet). This gives ten
glass elements in six air-separated components.

The patent also specifies how power is distributed within those components. The front three components together must be
net divergent. In the rear section, the medial cemented component is intended to carry most of the positive converging
power, while the other two rear components have focal lengths numerically much longer than the complete objective
(GB 978,797, p. 1; claim 1 on pp. 4–5). Independent calculation from the final scaled prescription reproduces that pattern:
G1–G3 together have an isolated focal length of −17.1548 mm; G4 is very weakly positive at +1188.10 mm; G5 is strongly
positive at +16.1553 mm; and G6 is weakly negative at −681.78 mm.

Those isolated component focal lengths are not in-situ group powers. In the assembled lens each component sees the ray
height and reduced angle delivered by all preceding components, so an isolated focal length cannot by itself establish a
component's actual aberration contribution or its local influence on a particular field ray. The verification therefore
records, separately, the change in reduced angle of one common collimated reference ray through each assembled component.
Those in-situ ray changes are diagnostics of the assembled sequence, not substitutes for intrinsic component focal length.
The isolated values above are used only to describe the verified power distribution that the patent itself emphasizes.

The patent connects this distribution with two design goals: maintaining the long back clearance required by the reflex
camera geometry while avoiding excessive enlargement of the front divergent section, and providing correction of image
errors including distortion (GB 978,797, p. 1). The final paraxial model is consistent with the first of those aims through
its 1.8063 BFD/EFL ratio; no independent quantitative distortion result is claimed here.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.6935`, `νd = 53.6`. Glass: **S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven)**. Standalone
`f = +162.878 mm`.

L1 is the first of the three object-side menisci. Although the front three components are net divergent, L1 itself is
weakly positive. The patent requires the first three elements to have refractive indices above 1.65 and Abbe numbers above
50, with the first element's Abbe number not smaller than those of L2 and L3 (GB 978,797, p. 2). In Example 1 all three use
the same `1.6935 / 53.6` coordinate.

Its weak positive standalone power partially offsets the two following negative menisci. The computed front-section focal
length of −17.1548 mm therefore belongs to the three-component combination, not to L1 by itself.

### L2 — Negative Meniscus

`nd = 1.6935`, `νd = 53.6`. Glass: **S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven)**. Standalone
`f = −49.590 mm`.

L2 is the second front meniscus and is negative, matching the patent's explicit description of the three-component
divergent section (GB 978,797, p. 1). It uses the same optical coordinate as L1, so its different standalone power arises
from curvature and thickness rather than a material change.

The element is air spaced from both neighbors. No cemented-interface dispersion claim is therefore attached to L2; its
role here is described only in terms of the verified negative power and its place within the net-divergent front block.

### L3 — Negative Meniscus

`nd = 1.6935`, `νd = 53.6`. Glass: **S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven)**. Standalone
`f = −22.502 mm`.

L3 is the strongest negative member of the three-element front section by isolated focal length. Together L1–L3 reproduce
the patent's divergent-part focal length: the executed center-value calculation gives −0.857739 f in normalized source
units, versus the patent's printed −0.8577 f (GB 978,797, p. 4).

This group is responsible for the negative front power that distinguishes the design from a near-symmetric wide-angle
form. The later positive section then restores the net system to a 20.0023 mm positive EFL while retaining long rear
clearance.

### L4 — Negative Meniscus, front member of G4

`nd = 1.6200`, `νd = 60.3`. Glass: **620603 — dense-crown class (supplier/melt unestablished)**. Standalone
`f = −32.056 mm`.

L4 begins the first rear cemented pair and is negative. Its rear surface is cemented directly to L5. The patent places
specific index and dispersion constraints across this pair: `n4 − n5 > 0.05`, and `ν4` must exceed `ν5` by at least 12
(GB 978,797, p. 2). Example 1 gives differences of 0.070 and 14.9 respectively.

The patent describes the relevant cemented surfaces as dispersive interfaces and associates their construction with
correction of aperture error and isoplanasy (GB 978,797, p. 2). That statement is a source claim; the present analysis does
not assign a separately calculated aberration coefficient to L4.

### L5 — Plano-Convex Positive, rear member of G4

`nd = 1.5500`, `νd = 45.4`. Glass: **550454 — light-flint class (supplier/melt unestablished)**. Standalone
`f = +30.945 mm`.

L5 opposes L4 in refractive sign. Despite the appreciable standalone powers of the two elements, their cemented pair is
nearly neutral when isolated in air: G4 calculates to +1188.10 mm, corresponding to +59.4049 f in the normalized source
model. The patent prints +59.40 f (GB 978,797, p. 4).

This strong internal cancellation is exactly why the pair's individual element powers should not be confused with its net
component power. The pair satisfies the patent's requirement that one of the outer rear components have a focal length at
least ten times the system focal length in magnitude.

### L6 — Negative Meniscus, front member of G5

`nd = 1.7280`, `νd = 38.0`. Glass: **Unmatched (728380; nearest current dense-barium-flint family outside Δn=0.003)**.
Standalone `f = −33.365 mm`.

L6 begins the medial rear cemented pair. The patent requires `n6 − n7 > 0.10` while keeping the two Abbe numbers within five
units of one another (GB 978,797, p. 2). Example 1 gives an index difference of 0.118 and identical `νd = 38.0` values.

That combination is a source-defined material constraint, not evidence of a particular named historical melt. No current
catalog match within the data audit's Δn=0.003 coordinate-compatibility gate was established for the `1.7280 / 38.0` source coordinate, so the data
keeps L6 explicitly unmatched.

### L7 — Biconvex Positive, rear member of G5

`nd = 1.6100`, `νd = 38.0`. Glass: **610380 — flint class (supplier/melt unestablished)**. Standalone
`f = +10.479 mm`.

L7 is the strongest positive standalone element in the design. Cemented to L6, it forms the rear section's principal
positive component. G5 calculates to +16.1553 mm, or +0.807764 f in the normalized prescription, compared with the
patent's printed +0.8078 f (GB 978,797, p. 4).

The component therefore satisfies the patent condition that the medial rear component's focal length be numerically
smaller than the complete objective focal length. Its strong positive net power is the central converging action that
balances the negative front section in the patent's stated power distribution.

### L8 — Biconcave Negative, front member of G6

`nd = 1.6780`, `νd = 32.2`. Glass: **Unmatched (678322; nearest SF5/ZF2 coordinate family outside Δn=0.003)**.
Standalone `f = −7.915 mm`.

L8 is the strongest negative standalone element in the prescription. It begins the rear cemented triplet and is followed
without air gaps by positive L9 and L10. The patent requires `n8 − n9 > 0.15`; Example 1 gives 0.162 (GB 978,797, p. 2).

The very short isolated focal length of L8 should not be read as the net power of the triplet. L9 and L10 strongly oppose
it, and the complete G6 component is only weakly negative when isolated.

### L9 — Positive Meniscus, middle member of G6

`nd = 1.5160`, `νd = 56.8`. Glass: **516568 — crown class (supplier/melt unestablished)**. Standalone
`f = +22.178 mm`.

L9 is the positive middle element of the rear triplet. Its much lower index and higher Abbe number than L8 produce the
large index/dispersion contrast specified at their cemented interface. The data retains the six-digit coordinate class
rather than converting the close modern H-K8 coordinate match into a historical supplier claim.

The smallest modeled element edge thickness occurs in L9: 0.494 mm at the shared 5.6 mm rendering semi-diameter. That is
a geometry result for the inferred clear apertures, not a patent-published mechanical thickness.

### L10 — Biconvex Positive, rear member of G6

`nd = 1.6780`, `νd = 50.8`. Glass: **Unmatched (678508; no coordinate-compatible current catalog glass located)**.
Standalone `f = +14.969 mm`.

L10 closes the cemented triplet and the optical train. The combined G6 focal length from the rounded Example 1 table is
−681.78 mm after the ×20 scale, equivalent to −34.0891 f before scaling. The patent prints −34.08 f. That center-value
difference is retained rather than corrected; the printed value lies inside the exact last-digit rounding envelope of the
source inputs established by the verifier.

The triplet therefore illustrates the same distinction seen in G4: large opposed element powers can yield a component
whose isolated net focal length is very long compared with the complete lens.

## Glass Identification and Selection

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.6935 / 53.6 (d) | S-LAL13 |
| L2 | 1.6935 / 53.6 (d) | S-LAL13 |
| L3 | 1.6935 / 53.6 (d) | S-LAL13 |
| L4 | 1.62 / 60.3 (d) | N-SK16 |
| L5 | 1.55 / 45.4 (d) | Unresolved; patent-coordinate fallback |
| L6 | 1.728 / 38 (d) | Unresolved; patent-coordinate fallback |
| L7 | 1.61 / 38 (d) | Unresolved; patent-coordinate fallback |
| L8 | 1.678 / 32.2 (d) | Unresolved; patent-coordinate fallback |
| L9 | 1.516 / 56.8 (d) | C2 |
| L10 | 1.678 / 50.8 (d) | Unresolved; patent-coordinate fallback |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

GB 978,797 Example 1 publishes one fixed prescription and no focus-spacing table, movement law, or finite-object state.
The production catalog gives a minimum focusing distance of 0.16 m for the Flektogon 4/20, but that single external
observable does not determine which optical group moves or how far.

The data therefore uses **NO_INTERNAL_RECONSTRUCTION**. `closeFocusM: 0.16` is retained as product metadata, while `var`
is empty and no unit-focus, inner-focus, or floating-group motion is invented. All computed optical quantities in this
analysis refer to the published fixed prescription state.

## Conditional Expressions

The patent defines the design by a set of numerical relationships in addition to the prescription table. The executed
verification reproduces all of them from the source values or the independently calculated component focal lengths.

| Patent condition | Example 1 / verified value | Result |
|---|---|---|
| `f > r8 > r11 > r14 > 0.4f` | `1 > 0.8510 > 0.4260 > 0.4232 > 0.4` | Pass |
| `n4 − n5 > 0.05` | `0.070` | Pass |
| `n6 − n7 > 0.10` | `0.118` | Pass |
| `n8 − n9 > 0.15` | `0.162` | Pass |
| First three indices `> 1.65` | `1.6935, 1.6935, 1.6935` | Pass |
| First three `νd > 50`, with `ν1` not smaller than `ν2, ν3` | `53.6, 53.6, 53.6` | Pass |
| `ν4 − ν5 ≥ 12` | `14.9` | Pass |
| `|ν6 − ν7| ≤ 5` | `0.0` | Pass |
| Back-element-to-image distance `≥ 1.8f` | published `1.8065f` | Pass |
| Construction length `≤ 2.8f` | `2.5316f` | Pass |
| First rear cemented component thickness `≥ 0.6f` | `0.7517f` | Pass |
| Exterior radius of first rear component `≥ 5f` | `r7 = 6.302f` | Pass |
| Angular field `> 90°` | approximately `93°` | Pass as published source condition |
| Divergent part `|f| < 1`; medial rear component `|f| < 1`; outer rear components `|f| ≥ 10` | `0.857739`, `0.807764`, `59.4049`, `34.0891` | Pass |

The last row uses isolated component calculations from the rounded prescription values. It does not redefine those values
as in-situ power. The small difference between the computed G6 center value (−34.0891 f) and the patent's printed −34.08 f
is a retained source-rounding discrepancy, not a corrected patent value.

The optical rims were reviewed against the local patent drawing on PDF page 6. The front envelope and central doublet were widened toward the drawing; surfaces 4 and 6 retain smaller curvature- and gap-limited rims. The drawing is schematic and does not justify extending a spherical surface beyond its valid domain.

## Verification Summary

The final authored model was recomputed from its parsed prescription rather than from a duplicate hard-coded numerical copy. Sequential height/reduced-angle tracing, a reduced-angle ABCD matrix, and a separately coded
height/ordinary-angle ABCD matrix agree to floating-point precision. From the final model:

- EFL is 20.0023 mm.
- Gaussian BFD from surface 16 to focus is 36.1302 mm; the source-scaled authored image spacing is 36.1300 mm.
- First-to-last-vertex construction length is 50.632 mm.
- Surface-by-surface Petzval summation using `φ/(n·n′)` gives `+0.00297343 mm⁻¹`.
- `BFD/EFL = 1.8063`, confirming retrofocus architecture; `TL/EFL = 2.5313`, so the system is not telephoto.

The aperture stop requires additional disclosure because the patent drawing shows `fp` inside the `l4` air gap but does
not dimension its location or physical diameter (GB 978,797, drawing sheet, PDF p. 6). The model places the stop at the
midpoint of the scaled 0.472 mm gap, giving 0.236 mm on each side. Its physical semi-diameter, 4.6290 mm, is then calibrated
to the patent's published f/4 condition. The resulting paraxial entrance-pupil semi-diameter is 2.5003 mm and the modeled
f-number is 4.0000. Agreement with f/4 is therefore a calibration result, not independent evidence for the manufactured
iris diameter.

The patent likewise gives no clear semi-diameters. The authored apertures are modeled from exact spherical ray envelopes,
then enlarged by an 8% allowance and rounded upward to 0.1 mm. The verified finite sample includes the on-axis f/4
marginal rays, five pupil samples at the viewer's default 27.9° off-axis field, and the 46.5° edge chief ray corresponding
to the source's approximate 93° full field. The edge chief ray reaches the authored image plane at 21.2395 mm image
height. This does not establish a completely unvignetted f/4 pupil at the extreme 46.5° field; peripheral pupil samples
there can clip the modeled clear apertures.

For the inferred geometry, all ten elements retain positive edge thickness. The minimum is 0.494 mm at L9. The largest
spherical rim angle is 58.77° at surface 4, below the current 64.16° authoring threshold, and all source air gaps satisfy
the current shared-gap intrusion rule. These results validate the authored optical clear-aperture model; they do not
establish production barrel clearances, factory mechanical apertures, or measured manufacturing tolerances.

## Sources and References

1. **GB Patent Specification 978,797 A**, Wolf Dannberg and Eberhard Dietzsch, *Improvements in or relating to Wide-Angle
   Lenses*, VEB Carl Zeiss Jena, filed 11 June 1963, published 23 December 1964. Example 1 prescription: PDF p. 3;
   component focal values and claims: pp. 4–5; optical drawing and diaphragm location: drawing sheet, PDF p. 6.
   Google Patents record: <https://patents.google.com/patent/GB978797A/en>.
2. **PENTACON / Carl Zeiss Jena**, *Objektive für Spiegelreflexkameras*, product catalog, entry “ZEISS FLEKTOGON 4/20,”
   PDF p. 6. The entry identifies PRAKTICA, EXAKTA and EXA variants, ten elements, 93° utilized image angle, and 0.16 m
   minimum focusing distance. Primary-origin catalog scan hosted at:
   <https://allphotolenses.com/public/files/pdfs/61ff8e81ae6c194e951ef186ba3c4e95.pdf>.
3. Glass-coordinate comparisons used current official catalog resources from OHARA
   (<https://oharacorp.com/glass-catalog/>), HOYA
   (<https://www.hoya-opticalworld.com/english/datadownload/index.html>), SCHOTT
   (<https://www.us.schott.com/shop/medias/schott-optical-glass-collection-datasheets-english-us-march2018.pdf>),
   HIKARI (<https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lak/>), CDGM
   (<https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=9&url=database>), and SUMITA
   (<https://www.sumita-opt.co.jp/en/download/>). These comparisons establish only coordinate classes or explicit
   unmatched status; they do not establish historical supplier or melt identity.
