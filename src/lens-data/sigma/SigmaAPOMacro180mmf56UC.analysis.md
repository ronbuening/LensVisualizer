# SIGMA APO MACRO 180mm f/5.6 UC

## Patent Reference and Design Identification

**Patent:** JP H04-110811 A
**Filed:** 31 August 1990
**Published:** 13 April 1992
**Inventor:** Takehisa Koyama
**Applicant:** Sigma Corporation
**Title:** Inner-focus macro lens (translated)
**Embodiment analyzed:** Example 3

The prescription is Example 3 of JPH04110811A, transcribed from the original six-page Japanese publication.
The numerical table and the two focus states are on PDF p4 (printed p88); Figure 5 is the corresponding section
on PDF p6 (printed p90). The patent works in millimetres, and the model keeps the prescription unscaled rather
than rescaling it to the commercial focal-length designation. Of the patent's three examples only Example 3 has
nine elements in six groups; Examples 1 and 2 have eleven in eight and ten in seven. [1]

The correlation to the Sigma APO MACRO 180mm F5.6 UC is strong but not manufacturer-confirmed:

1. Both the numerical example and Sigma's catalogue have nine elements in six air-separated groups.
2. The two front positive elements have nd 1.49700 / νd 81.6, an extra-low-dispersion coordinate; the catalogue
   description names two SLD elements at the front.
3. The source design focal length is 174.86 mm and infinity F-number is 5.71, close to the marketed 180 mm f/5.6.
4. Both have floating internal focusing and a published maximum reproduction ratio of 1:2.
5. The printed 0.5× state puts the object 0.54637 m from the image plane (403.0 mm object distance, 103.29 mm
   vertex track and 40.08 mm back focus), close to the catalogue's rounded 0.55 m minimum focusing distance.

The catalogue lists Sigma, Minolta AF, Nikon AF and Canon AF versions, recorded here as the Sigma SA,
Sony/Minolta A, Nikon F and Canon EF mounts for 35 mm full-frame use. The source aberration plots identify
image semi-height 21.6 mm; the model records a 43.2 mm image-circle diameter. [1,2]

The catalogue's cross-section (p13 of source 2) is cited from the original transcription notes, which record a
thin leading component that the patent prescription does not contain; nothing is modelled for it. The archived
file could not be reopened for an independent comparison of that drawing, and no other published section of the
lens was found. The published specifications (nine elements in six groups, 1:2 at 0.55 m, internal focusing
with two moving groups, introduction in 1990) agree with the patent's Figure 5 (第5図). [2,9]

## Optical Architecture

This is an all-spherical, four-functional-group telephoto macro design. Functional groups are distinct from the
six air-separated components: G1 contains a singlet and a cemented pair, G2 and G3 are cemented pairs, and G4
contains two air-separated singlets. The three cemented assemblies are D1 (E2–E3), D2 (E4–E5) and D3 (E6–E7).

The patent's claims and summary write the four lens groups as L1 to L4 (第1レンズ群 L1 … 第4レンズ群 L4), and
Figure 5 brackets them as 第1群 to 第4群; they are G1 to G4 here. The patent numbers no individual element, so
E1 to E9 are this model's sequential element names, not patent designations, and the letter L is left to the
patent's groups. D1 to D3 are likewise model labels for the cemented pairs. [1, PDF pp1–2, p6]

| Functional group | Elements | Isolated group focal length | Motion toward macro |
|---|---|---:|---|
| G1 | E1–E3 | +68.024 mm | Fixed |
| G2 | E4–E5 | -54.365 mm | Imageward |
| G3 | E6–E7 | +91.634 mm | Objectward |
| G4 | E8–E9 | -79.023 mm | Fixed |

The calculated infinity EFL is 174.864 mm. Back focal distance is 40.0805 mm from the last
glass vertex in air, agreeing with printed 40.08 mm at source precision. First-to-last vertex track is
103.29 mm; first vertex to the image plane is 143.37 mm. The ratio of that length to the EFL
is 0.8199, establishing the telephoto description at infinity rather than relying on the
commercial name. Source radius signs use imageward-positive centers of curvature. [1]

The stop is explicitly source row 9 between the counter-moving groups. Its location is published, while its
clear diameter is inferred. The source's zero-radius notation denotes this plane; the model represents
it as a flat surface. There is no published asphere or camera-side rear plate.

## Element-by-Element Analysis

Individual focal lengths below are calculated for each thick element standing alone in air. They must not be
read as the element's in-situ contribution or the power of a cemented pair. Glass names are catalogue equivalents
chosen by nd/νd; the C-, F- and g-line indices stored with each element come from those catalogue glasses, not from
identified production melts.

### E1 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 equivalent (HOYA). f = +96.8 mm.

E1 is the front singlet in fixed G1. Its two convex surfaces and high Abbe number distinguish it from the adjacent
negative component of D1. The manufacturer's identification of a front SLD pair is compatible with E1 and E2,
but does not identify a supplier or melt. Its function as the first positive collector follows from its position
and calculated power; a separate aberration allocation is not established by those facts alone. [1,2]

### E2 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 equivalent (HOYA). f = +62.5 mm.

E2 is the positive member of D1 and the second high-Abbe front element. Its rear surface is the cemented
interface to E3; the source assigns the downstream glass there. Together they are a weak net-positive pair,
with calculated isolated focal length +243.902 mm. That pair power differs substantially from either component's
standalone power, illustrating why the shared interface must not be replaced by two air boundaries. [1]

### E3 — Biconcave Negative

nd = 1.83400, νd = 37.3. Glass: NBFD10 equivalent (HOYA). f = -79.3 mm.

E3 is the high-index negative component of D1. The low-Abbe partner relative to E2 supplies a contrasting
first-order dispersion coordinate. The combination is consistent with chromatic balancing in the fixed front
group, but the sign or magnitude of a particular aberration cannot be assigned to E3 from glass class alone.
The numerical table, rather than a generic dense-flint label, governs its geometry. [1]

### E4 — Positive Meniscus

nd = 1.84666, νd = 23.8. Glass: FDS90-SG equivalent (HOYA). f = +51.1 mm.

E4 is a positive meniscus whose more strongly curved surface is the cemented boundary with E5.
Its individual positive power does not make the moving assembly positive: D2 is net negative. Both components
move together as G2, and the cemented interface remains fixed within that assembly. [1]

### E5 — Biconcave Negative

nd = 1.78590, νd = 43.9. Glass: NBFD11 equivalent (HOYA). f = -26.2 mm.

E5 completes net-negative D2. The two faces form a biconcave element when considered alone in air.
The pair, rather than either standalone component, is the relevant powered unit for the patent's G2 motion
and magnification conditions. Its glass coordinate has a higher Abbe number than that of E4. [1]

### E6 — Negative Meniscus

nd = 1.75520, νd = 27.5. Glass: E-FD4 / E-FD4L equivalent (HOYA). f = -114.0 mm.

E6 is the negative meniscus at the entrance to D3, behind the iris. The rear cemented interface admits
light into E7. Its standalone negative power is outweighed within the positive D3 assembly; the group therefore
has the opposite sign from G2 while moving in the opposite axial direction. [1]

### E7 — Biconvex Positive

nd = 1.48749, νd = 70.4. Glass: FC5 equivalent (HOYA). f = +51.4 mm.

E7 is the positive, low-index and relatively high-Abbe component of D3. The complete cemented pair
has calculated focal length +91.634 mm. The position behind the stop and the group's changing conjugates are
necessary context; neither its positive power nor its crown-like coordinate alone establishes a specific
coma, spherical-aberration or field-curvature contribution. [1]

### E8 — Biconcave Negative

nd = 1.71300, νd = 53.9. Glass: LAC8 equivalent (HOYA). f = -43.0 mm.

E8 is the negative singlet in fixed G4, preceding a short air space and E9. Its standalone power is
stronger in magnitude than the positive contribution of E9, while the separated pair's net power also depends
on that intervening space. Because G4 is fixed relative to the image plane, the back focus is the same at both
focus states. [1]

### E9 — Positive Meniscus

nd = 1.84666, νd = 23.8. Glass: FDS90-SG equivalent (HOYA). f = +97.7 mm.

E9 is a positive rear meniscus, with a much weaker rear curvature. It completes the net-negative G4
assembly and is followed by the fixed terminal air gap. The prescription uses the same patent nd/νd coordinate
as E4, but equality of these two coordinates does not prove identical historical melts or coatings. [1]

## Glass Identification and Selection

The seven distinct source coordinates were compared with authoritative OHARA, HOYA, HIKARI, SCHOTT, CDGM
and SUMITA catalogues. Close matches occur across suppliers; the selected HOYA equivalents provide one
consistent, explicitly approximate spectral set rather than proof of manufacturing provenance. The patent's d-line
indices and Abbe numbers are unchanged. The nominal catalog coordinates are: [3–8]

| Elements | HOYA equivalent | Patent nd / νd | Catalog nd / νd |
|---|---|---|---|
| E1, E2 | FCD1 | 1.49700 / 81.6 | 1.49700 / 81.61 |
| E3 | NBFD10 | 1.83400 / 37.3 | 1.83400 / 37.34 |
| E4, E9 | FDS90-SG | 1.84666 / 23.8 | 1.84666 / 23.78 |
| E5 | NBFD11 | 1.78590 / 43.9 | 1.78590 / 43.94 |
| E6 | E-FD4 / E-FD4L | 1.75520 / 27.5 | 1.75520 / 27.53 |
| E7 | FC5 | 1.48749 / 70.4 | 1.48749 / 70.44 |
| E8 | LAC8 | 1.71300 / 53.9 | 1.71300 / 53.94 |

The explicit nC, nF and ng values are evaluated from the official HOYA formula-1 coefficients at
656.2725, 486.1327 and 435.8343 nm. The d-line reference is 587.5618 nm. The catalog ratio PgF is converted to
dPgF against the model's normal line, 0.6438 − 0.001682×νd, using the patent's νd.
These derived properties are stored directly on the elements. They allow a spectral proxy model, but no
apochromatic performance is established for the manufactured lens. “APO” remains part of the product identity,
not a measured conclusion of this analysis. In particular, modern equivalents cannot settle melt variation,
coatings or the actual historical dispersion curve. [3]

The E1/E2 coordinate is an FCD1-class extra-low-dispersion glass (catalogue dPgF about +0.032), the type Sigma
calls SLD; the patent itself does not designate it. OHARA S- and L-prefixed families are kept distinct, and the
same caution applies to HOYA moulding variants and historical/current entries: a good nd/νd match is a
necessary check, not unique material identification.

## Focus Mechanism

The patent fixes G1 and G4 relative to the image plane. Toward the published macro state, G2 moves imageward
11.18 mm and G3 moves objectward 8.25 mm. The printed gaps also leave the iris at a constant axial position.
The motions follow directly from the two printed gap sets. Claim 1 states the same directions, the second group
toward the image and the third toward the object, and Figure 5 marks those two groups as the focusing groups. [1]

| Gap after source row | Infinity | Published 0.5× |
|---|---:|---:|
| 5 | 12.48 mm | 23.66 mm |
| 8 | 14.50 mm | 3.32 mm |
| 9, STO | 11.63 mm | 3.38 mm |
| 12 | 33.45 mm | 41.70 mm |

The 0.5× object distance is 403.0 mm from the first surface. The model keeps the 40.080 mm last-vertex image
gap at both states. That value is printed as the infinity back focus; the source does not repeat it for the
0.5× state, and its use there follows from G4 being fixed relative to the image plane.

At the printed 0.5× state the paraxial (Gaussian) image lies 40.368342 mm behind the last vertex, 0.288342 mm
behind the fixed image plane, with transverse magnification -0.499275. That offset is the design's spherical
aberration at 1:2, not a focus error. Real rays in the 0.65–0.93 aperture zones cross the axis 40.07–40.11 mm
behind the last vertex (the full-aperture marginal ray at 40.16 mm), and the on-axis RMS spot radius is 3.2 µm
at the 40.08 mm plane against 14.9 µm at the paraxial plane. The 0.5× spherical-aberration curve in the
patent's Figure 6 shows the same bow of about -0.3 mm, and Example 1, printed to four decimals, has the same
pattern. The printed state is therefore in best focus on the fixed image plane. Rounding cannot account for
the offset: last-digit rounding of every printed value keeps the Gaussian image between 40.139293 and
40.598453 mm.

The 0.5× state corresponds to 0.54637 m from object to image, against Sigma's marketed 0.55 m minimum focus.
Only the two end states are published; gap values in between are linearly interpolated, not a documented
cam law. With the 0.5× gaps the system's focal length for collimated light is 93.490 mm, a property of that
configuration rather than of the finite-object conjugate.

## Conditional Expressions

The patent's six inequalities are evaluated with isolated functional-group powers and in-situ group
magnifications from the final prescription. Group magnification here is the appropriate paraxial conjugate
mapping, not the product's overall reproduction ratio. [1, PDF pp1–4]

| Source condition | Calculated | Printed summary |
|---|---:|---:|
| 0.27 < f1/f < 0.61 | 0.389012 | 0.39 |
| 1.8 < beta2,infinity < 6.9 | 4.875859 | 4.8 |
| 0.22 < abs(f2/f) < 0.64 | 0.310899 | 0.31 |
| 1.10 < abs(beta3,infinity/beta3,MOD) < 2.30 | 1.372545 | 1.37 |
| 0.15 < abs(f4/f) < 0.64 | 0.451912 | 0.45 |
| 1.2 < beta4 < 3.9 | 1.567227 | 1.5 |

All six inequalities hold. Two printed summary values do not follow from the prescription by ordinary rounding:
β2,∞ is 4.875859 against printed 4.8, and β4 is 1.567227 against printed 1.5. Example 1's summary values round
normally, so these two look truncated or misprinted; the prescription is not altered to match them, and the
inequalities hold with wide margins either way.

The surface-by-surface Petzval sum is +0.00057159 mm⁻¹ using Σφ/(n n′), with each refracting
interface counted and the stop contributing zero. This scalar alone does not demonstrate a flat best-focus
surface or determine tangential/sagittal field curvature.

## Aperture, Geometry and Model Limits

The stop's axial location is published, but its physical radius is not. The modeled radius
9.194388 mm is set by tracing an exact on-axis ray entering at height EFL/(2×5.71). It is not a
published physical diameter, and agreement with the infinity F-number is not independent aperture
evidence. A paraxial-only calibration would give 9.048929 mm.

The model holds that iris fixed while focusing. At 0.5× its exact sine-NA working F-number
is 6.1666, versus the source's effective 5.98. The corresponding tangent-cone value is
6.1463; the paraxial working value using that same physical iris is
6.0558. None of these conventions restores the printed value. Because the source gives no iris
diameter or iris movement, the printed 5.98 is left unreproduced rather than matched with a
focus-dependent iris.

Clear radii are inferred from the element rims drawn in Figure 5 and checked against traced beams. They are
not measured production apertures. At both published states and in between, every element keeps positive
edge thickness and neighbouring elements stay separated; the minimum edge thickness is 0.597492 mm and the
steepest rim slope is 22.905553°.

On-axis beams and corner chief rays clear every surface at both published states and in between, for the
21.6 mm image height and for the 7° infinity half-field the patent publishes. Corner bundles are vignetted
at element rims, mainly in the fixed front group. G3 uses equal inferred 11.31 mm clear radii on its three
surfaces, sufficient for the 7° marginal ray to traverse the cemented interface. These are properties of the
inferred rims, not a measured illumination curve or manufactured-lens MTF.

## Sources

1. JPH04110811A, original Japanese publication: front-page attribution and dates, PDF p1; mechanisms and conditions,
   PDF pp1–3; definitions, PDF p3; Example 3 table and states, PDF p4; Figures 5–6, PDF p6.
   [Bibliographic record](https://patents.google.com/patent/JPH04110811A/en).
2. Sigma, manufacturer catalogue preserved as LensCatalogue1995.pdf, PDF p13 (product description and section),
   PDF p16 (specifications). [Archived manufacturer original](https://web.archive.org/web/20121030010747id_/http://www.sigmauser.co.uk/images/stories/museum/LensCatalogue1995.pdf).
   The filename alone does not establish the catalogue's imprint date.
3. HOYA, [full AGF catalogue including obsolete entries, 2026-07-07](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   named NM/CD records; formula-1 coefficient evaluation supplies only the stated equivalent-glass proxy.
4. OHARA, [Pocket Catalogue, May 2023](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf), coordinate and family comparison.
5. HIKARI, [Optical Glass Catalogue](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), 2025-06-01 edition, coordinate comparison.
6. SCHOTT, [Optical Glass Collection datasheets, May 2019](https://www.schott.com/en-gb/products/optical-glass/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-glass-collection-datasheets-english-may2019.pdf?rev=5358bb64e13a44f2b37f5065490509af), coordinate comparison.
7. CDGM, [Optical Glass catalogue](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf), coordinate comparison.
8. SUMITA, Glass Data Book version 14.02.00, obtained through the [official download page](https://www.sumita-opt.co.jp/en/download/), coordinate comparison.
9. Phillip Reeve, [Review: Sigma 180mm 5.6 Apo Macro (MF)](https://phillipreeve.net/blog/review-sigma-180mm-5-6-apo-macro-mf/):
   published specifications, internal focusing with two moving groups, 1990 introduction.
