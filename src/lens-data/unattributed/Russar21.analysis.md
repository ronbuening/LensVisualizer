## Patent Reference and Design Identification

**Patent:** US 2,516,724 A\
**Filed:** August 23, 1946\
**Granted:** July 25, 1950\
**Inventor:** Michael Michaelovitch Roossinov\
**Assignee:** No organizational assignee is named on the supplied U.S. grant\
**Title:** *Wide Angle Orthoscopic Anastigmatic Photographic Objective*\
**Embodiment analyzed:** Example I

The implemented prescription transcribes Example I of US 2,516,724 A. The patent presents a six-element objective made
from two nearly symmetrical halves and gives Example I as a 59.4 mm, f/18 design with a 133° total field. The same patent
identifies curve 8 in Fig. 2 as the Russar-21, but it does not explicitly label the Example I table itself as a Russar-21
production drawing. The identification is therefore a correlation rather than a manufacturer confirmation.

Three pieces of evidence support that correlation. First, the patent names the Russar-21 as an objective embodying the
invention. Second, Example I's published 59.4 mm focal length, f/18 aperture ratio, and 133° field closely match the
historical Russar-21 description. Third, ITMO University's historical account states that Roossinov demonstrated the first
experimental Russar-21 in 1940 with a 133° angular field; a secondary historical compilation independently lists the
Russar-21 as 18/60. No primary factory source was found that establishes a standardized production mount, image format, or
that Example I was the exact production prescription for every Russar-21 unit.

The data file therefore keeps the public name `RUSSAR-21 60mm f/18` while separating the rounded historical identity from
the design quantities calculated from the patent prescription. The computed Gaussian EFL is 59.425803 mm, while the
modeled f-number is 17.928943 from the patent's physical 4.5 mm central diaphragm.

## Optical Architecture

Example I is a six-element, four-air-separated-group, all-spherical ultrawide objective. Its architecture is close to
bilaterally symmetric about the central diaphragm: an exterior negative meniscus is followed by a thick cemented positive
medial member on each side. The front medial member is L2+L3 and the rear medial member is L4+L5. The two cemented members
are separated by only 0.441 mm of air, with the 4.5 mm diaphragm modeled at the midpoint of that gap as the patent
describes.

The patent assigns unusual importance to the strongly curved exterior negative menisci. Their inner surfaces approach or
slightly exceed a hemisphere, and the patent connects this geometry with aberrational vignetting that keeps the oblique
entrance-beam area from collapsing as rapidly as in conventional wide-angle objectives. The medial cemented members are
comparatively thick; the patent states that such thickness contributes to correction of distortion and zonal aberration.
Those statements are source descriptions of the design strategy, not independent decomposition of each surface's
aberration contribution.

The first-to-last refracting-vertex track is 88.921 mm. The front and rear functional halves are both net positive in the
standalone subsystem calculation, with EFLs of 162.030847 mm and 160.310752 mm respectively. This near symmetry is not
exact: the exterior glasses and terminal radii differ, and the patent explicitly notes that the two halves are not fully
symmetrical because of differences in radii, sagittas, spacings, thicknesses, and glass types.

The prescription is not scaled from the patent. All implemented radii and source spacings use the selected bracketed-
millimeter branch, except that the central air gap is represented by the source-supported 0.441 mm metric value rather
than the contradictory inch literal discussed below.

## Element-by-Element Analysis

### L1 — Front Exterior Negative Meniscus

`nd` = 1.6395, `νd` = 43.3. Glass: Unmatched historical Lenzos L-67; the patent does not state the index reference
wavelength. Standalone EFL = −72.574148 mm.

L1 is the front exterior negative meniscus. Its inner surface is one of the two near/over-hemispherical surfaces central to
the patent's wide-field geometry. The standalone negative power should not be confused with the behavior of the complete
front half: L1 is followed by a long 31.44 mm air space and the net-positive L2+L3 cemented member, and the combined front
half is positive in the verified subsystem calculation.

The source gives a very large physical blank and a major-segment sag for the inner surface. The implemented clear aperture
is therefore a modeled active aperture, not a direct transcription of the source blank diameter. This distinction matters
for the geometry at surface 2 and is discussed in the verification section.

### L2 — Positive Component of the Front Cemented Member

`nd` = 1.6126, `νd` = 58.6. Glass: Lenzos L-24 / SK4 class; BACD4 spectral proxy, historical melt unresolved.
Standalone EFL = +24.638633 mm.

L2 supplies the positive standalone component of the front cemented medial member. It is biconvex in the implemented
geometry and is cemented directly to L3 at surface 4. The cemented interface therefore changes medium directly from L-24
to L-28; no synthetic cement layer is modeled.

### L3 — Negative Component of the Front Cemented Member

`nd` = 1.5480, `νd` = 45.9. Glass: Lenzos L-28; LLF1 spectral proxy, historical melt unresolved.
Standalone EFL = −34.800840 mm.

L3 is negative when calculated as an isolated element in air, but that standalone sign does not describe the cemented
member. The verified L2+L3 cemented combination has a net positive EFL of 70.380982 mm. The patent treats this assembly as
one of the two positive medial members and places its rear surface immediately adjacent to the central diaphragm gap.

### L4 — Negative Component of the Rear Cemented Member

`nd` = 1.5480, `νd` = 45.9. Glass: Lenzos L-28; LLF1 spectral proxy, historical melt unresolved.
Standalone EFL = −34.800840 mm.

L4 begins the rear cemented medial member and is the near-mirror counterpart of L3. Its front surface lies immediately
behind the central diaphragm gap. Like L3, its negative standalone power is only one component of a net-positive cemented
assembly.

### L5 — Positive Component of the Rear Cemented Member

`nd` = 1.6126, `νd` = 58.6. Glass: Lenzos L-24 / SK4 class; BACD4 spectral proxy, historical melt unresolved.
Standalone EFL = +24.638633 mm.

L5 is cemented to L4 at surface 7 and completes the rear positive medial member. The verified L4+L5 cemented combination
has a net positive EFL of 70.380982 mm, essentially matching the front cemented member at the precision of the normalized
prescription.

### L6 — Rear Exterior Negative Meniscus

`nd` = 1.6259, `νd` = 39.1. Glass: Lenzos L-15 / BaSF1 class; H-BaF8 spectral proxy, historical melt unresolved.
Standalone EFL = −73.135888 mm.

L6 is the rear exterior negative meniscus. Its Abbe coordinate is lower than L1's 43.3, satisfying the patent's stated
condition that the rear exterior negative member have the lower Abbe number. Its inner surface is the rear counterpart of
surface 2 and shares the same over-hemispherical source-geometry issue.

## Glass Identification and Selection

The patent retains Lenzos 1936 catalog coordinates without naming the spectral line. Kachalov and Voano's
[*Fundamentals of Optical Glass Production* (1936)](https://ru.djvu.online/file/129FlTkciu6QA), p. 13,
identifies the historical yellow D/d convention; Table 6, p. 74, cross-references L-24 to SK4,
L-28 to LLF1 and L-15 to BaSF1 at the patent's coordinates. This supports class-compatible spectral
proxies, not a claim that a modern vendor supplied these lenses or reproduced their original melts.

| Source glass | Retained index / Abbe | Runtime spectral model |
|---|---|---|
| L-67 | 1.6395 / 43.3 | Unmatched; Abbe fallback |
| L-24 (L2, L5) | 1.6126 / 58.6 | BACD4 polynomial proxy (1.61272 / 58.58) |
| L-28 (L3, L4) | 1.5480 / 45.9 | LLF1 Sellmeier proxy (1.54814 / 45.75) |
| L-15 (L6) | 1.6259 / 39.1 | H-BaF8 Sellmeier proxy (1.62604 / 39.07) |

The patent index and Abbe values remain unchanged. The monochromatic prescription retains those
coordinates; chromatic tracing uses the compatible catalog curve directly. Its small index/Abbe offsets,
the exact historical D/d distinction and partial dispersion remain modeling uncertainties. Evaluating BACD4, LLF1 and H-BaF8 at the historical sodium D wavelength (589.3 nm) gives
1.612624, 1.548034 and 1.625899 respectively, close to the retained source coordinates. This is
additional compatibility evidence, not a determination of the original melt. No independent
`nC`, `nF`, `ng`, `dPgF`, ED, APD or apochromatic claim is added. These catalog entries already exist,
so duplicating them under historical names would falsely imply new measured coefficient sets.

## Focus Mechanism

The selected patent example publishes one fixed optical prescription and no internal-focus or zoom movement. The model is
therefore `NO_INTERNAL_RECONSTRUCTION`: `var` is empty, there are no reconstructed moving groups, and no production
minimum focusing distance or whole-lens focus travel is asserted.

The current data schema requires a numeric `closeFocusM`. The value `1000000` m in the data file is deliberately
non-operative because no variable spacing uses it. It is a schema placeholder, not a physical minimum focusing distance
and not historical product metadata.

## Aberrational Vignetting and Field Coverage

The patent's distinctive design argument is that aberrational vignetting can be used constructively in a very wide-angle
objective. Its prose states that the entrance-beam area toward the field edge can remain much larger than in conventional
wide-angle designs, permitting fields of 120° or more. Example I publishes a 133° total field, corresponding to a 66.5°
half-field in the implemented rectilinear projection metadata.

Exact spherical tracing of the authored model sampled nine coordinates across the physical stop at seven field angles. All
9 of 9 sampled rays pass on axis. At 66.5°, the chief ray passes and 4 of 9 sampled stop coordinates reach the image plane;
the remaining samples are vignetted, clipped, or have no admissible front solution. This verifies the existence of a
traceable edge-field bundle and the chief-ray path for the sampled model, but it does not establish full-pupil transmission
at the edge or prove continuous-pupil coverage between samples.

The modeled image height of those exact edge-field rays is not used as a published image-format claim. No standardized
image format or image-circle diameter was established for the correlated Russar-21 prototype, so the data intentionally
omits both `imageFormat` and `imageCircleMm`.

## Semi-Diameter Audit

The local patent's Fig. 13 is a shared schematic for both examples. The Example I diameter and sag table takes
precedence over its drawing proportions. Surfaces 3/4 now use the 10 mm source full radius and surface 5 the 5 mm
source free radius, replacing 8.37/4.62/2.75 mm ray-envelope estimates. Surface 8 likewise uses 10 mm instead of 8.19 mm.
Surface 7 now uses the published 10 mm full radius. Its 4.41:1 ratio to the 2.2671 mm central face
is admitted by a source-documented element-level sanity limit of 4.5; the independent crossing and
rim-slope checks remain active. The outer faces at surfaces 1 and 10 now use the published 32.5 mm
full radius. The inner near-equatorial faces still omit the unsupported post-equator lips.
L3/L4 are biconcave, and the numeric element labels match Fig. 13.

The manufacturer is explicitly unconfirmed. The Unattributed catalog page replaces the former Russar
maker grouping, and Roossinov's author page carries the design-family history.

## Verification Summary and Source Discrepancies

The normalized prescription gives an EFL of 59.425803 mm, within 0.025803 mm of the patent's rounded 59.4 mm value. The
published 4.5 mm central diaphragm images to a 3.314518 mm entrance-pupil diameter and produces a modeled f-number of
17.928943, consistent with the patent's `1:18` statement. Because the physical diaphragm diameter is published, this is a
verification of the modeled pupil rather than an f-number-based calibration of an unknown stop.

The paraxial image lies 31.911332 mm behind the last refracting vertex. The patent separately prints `p¹ = 1.23590 in
(31.9 mm)`, but those two values are not unit-equivalent and the translated text does not define the reference plane of
`p¹`. The model therefore uses the independently computed r10-to-image BFD and preserves `p¹` only as an unresolved source
quantity.

The central inter-doublet gap contains the most consequential source discrepancy. Example I prints `l2 = 0.07362 in
(0.441 mm)`, although 0.07362 in converts to 1.869948 mm. The normalized model uses the bracketed 0.441 mm value. That gap
is 0.7424% of the published 59.4 mm focal length and satisfies claim 2's 0–3% condition; the mechanically converted inch
literal would be 3.1481% and would slightly exceed the claim ceiling. The raw inch value remains recorded rather than
being silently discarded.

The source sagittas for surfaces 2 and 9 are 20.60 mm while `|R| = 19.60 mm`, which makes the physical surfaces major
spherical segments extending slightly beyond a hemisphere. A front-to-rear single-valued surface model cannot represent
the post-equator lip as the patent drawing does. The implemented model therefore stores only the forward-ray pre-equator
branch to `sd = 19.598 mm`; its exact spherical rim slope is 89.181482°. The omitted post-equator lip is a disclosed
render/model limitation, not a claim that the patent surface was physically truncated there.

The source also permits a light filter between the two halves if its optical effect is included in the calculation, but
Example I supplies no filter thickness or index. No filter plane is added to the active prescription. There are likewise
no rear plates or aspherical surfaces in the selected example.

Surface-by-surface Petzval accumulation gives −0.001667682 mm⁻¹, corresponding to a paraxial Petzval radius of
−599.634702 mm. This quantity is a first-order calculation from the implemented prescription; it is not a patent-published
field-curvature measurement.

## Sources / References

1. Michael Michaelovitch Roossinov, *Wide Angle Orthoscopic Anastigmatic Photographic Objective*, US 2,516,724 A,
   filed August 23, 1946, granted July 25, 1950. Fig. 13 and Example I are on the patent's drawing sheet 2 and printed
   pp. 5–6; the Lenzos glass table and claims are on printed pp. 7–10. Access copy:
   https://patents.google.com/patent/US2516724A/en
2. ITMO University, “Искусство оптика,” historical account of M. M. Roossinov and the first experimental Russar-21,
   including the reported 1940 demonstration and 133° field. Retrieved September 29, 2026:
   https://newspaper.ifmo.ru/articles/1872/
3. ITMO University, “М.М. Русинов. Сверхширокоугольные объективы для аэросъемки. 1941 г.,” institutional history of
   Roossinov's super-wide-angle aerial-photographic objectives. Retrieved September 29, 2026:
   https://science.itmo.ru/наука-в-итмо/достижения-университета-итмо/михаил-михайлович-русинов/
4. PHOTOHISTORY, “Этапы развития отечественного фотоаппаратостроения,” secondary historical compilation listing
   Russar-21 as 18/60; used only as corroboration of the product correlation, not as prescription authority:
   https://photohistory.ru/index.php?pid=1207248189803682
5. Authoritative current optical-glass catalog entry points consulted for coordinate comparison: OHARA,
   https://oharacorp.com/glass-catalog/ ; HOYA,
   https://www.hoya-opticalworld.com/english/datadownload/index.html ; SCHOTT,
   https://www.us.schott.com/shop/advanced-optics/en/search/ ; HIKARI,
   https://www.hikari-g.co.jp/optical_glass/catalog/ ; CDGM,
   https://www.cdgmgd.com/database/toWebDatabase.htm ; and SUMITA,
   https://www.sumita-opt.co.jp/en/download/ . These catalogs are used only for modern coordinate comparison, not to
   assign a historical supplier or melt identity.
