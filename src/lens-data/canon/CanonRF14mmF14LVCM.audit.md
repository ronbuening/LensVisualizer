# Audit Log - CANON RF 14mm f/1.4 L VCM

Current model: US 2026/0235852 A1, Numerical Example 1 (Tatsuro Watanabe). The Saito sections below record the earlier model.

Patent: US 2025/0389929 A1, Numerical Example 1 / Figure 1

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 2, Figure 1, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 30.46 µm/px.
- The reliable optical-rim rows have a median figure/data ratio of 0.985. L1 and L4-L7, L10-L13, and L15-L18 agree closely with the modeled silhouette.
- Automated L2/L3/L9 outliers come from the front blank flange, group annotations, and the stop line. High-resolution crops show their optical rims remain close to the authored values.
- Retained all surface and stop semi-diameters. `audit:image-circle` reports zero undersized surfaces and `audit:surface` reports no geometry violations.

### Glass classification

- Relabeled L5 as CaF2 using Canon's published one-fluorite construction, the independently identified concave fluorite location, and the patent's matching `1.43387 / 95.1` coordinate. The label remains explicitly a production-correlation inference.
- Relabeled L12 as an H-ZBaF4 catalog equivalent. Its `1.66565 / 35.64` coordinate is inside the resolver window, while the patent-authored `dPgF = -0.00145352` remains authoritative at g.
- Kept L4 explicitly unmatched. It shares the `666356` coordinate but has no published partial-dispersion value, so extending H-ZBaF4's conflicting g-line behavior would be speculative.
- The Canon BR resin remains explicitly unmatched. No new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 14mm f/1.4 L VCM` against Canon's `RF14mm F1.4 L VCM` product name and repository spacing conventions.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling.

## 2026-08-20 - Screenshot, movement, and chromatic follow-up

- Rechecked Figure 1 at 600 dpi after reviewing the site screenshot. Clean rims still have a 0.985 median figure/data ratio; apparent L2/L3/L9 scan outliers are annotation, leader, or flange ink. No SD change was justified.
- Added patent `G1`-`G18` diagram labels while retaining the data's internal `L1`-`L18` names. Corrected the functional captions to patent groups `L1`, `L2`, and `L3`, with L2 explicitly marked as objectward focus.
- Verified the published close state moves L2 about 1.01 mm objectward. The lens is a prime and correctly exposes no zoom travel.
- Made each selected catalog curve explicit and qualified as a modeling equivalent with the production supplier unspecified. This removes generic six-digit labels that previously hid the resolver's selected curve.
- Superseding the conservative initial disposition above, backfilled G4 with the same H-ZBaF4 equivalent already justified for the compatible patent 666356 coordinate at G12. G4 has no patent partial-dispersion datum, so its catalog g-line remains a model value rather than a source claim.
- Sellmeier and trusted chromatic coverage increased from 16/18 to 17/18; only the proprietary BR resin remains unresolved. The full catalog audit reports zero mismatches.
- Added patent-backed anomalous-dispersion tags to G9/G11/G12/G14 and inferred tags to the production-correlated UD G2 and fluorite G5.

## 2026-10-30 — Scoped original shape-and-glass follow-up

The August 20 audit and actual date remain history. This follow-up reopens the
reproducible missing free-end shoulders and oversized C3 rear cap, while reusing
its unchanged curve selections and source partials. Exact original:
`patents/US-20250389929-A1.pdf`, Numerical Example 1, PDF pp. 27–28 / printed
pp. 10–11; Fig. 1 / PDF p. 2 / sheet 1; Figs. 2A/B / PDF p. 3; Tables 1–2 /
PDF pp. 38–39. The front page confirms Takahiro Saito, Canon Kabushiki Kaisha
(normalized Canon Inc.), filing 2025-06-19 and publication 2025-12-25.

All 32 rows, 30 fixed distances, two published focus-gap endpoints, eighteen pairs
and five K/A4–A12 aspheric blocks match the original. Authored zero A14 fillers
remain zero. Table 2 supplies the precise Abbe values where the surface table
rounds: G2/G15 81.65, G13 94.66, G9/G14 29.74, G12 35.64 and G11 20.08.
No source R/d, asphere, stop or numeric focus control changes. Catalog design
focal length changes from computed 14.4176265 to literal source 14.42 mm, leaving
traced EFL unchanged and distinguishing source metadata from the runtime result.

### Native contour, every element and interface

The original embeds 2560×3300 pixels at approximately 300–301 ppi. Prior 600-dpi
renders were upsampling. Rotation/crops preserve native pixels. The active span
is about 1718 px / 104.5 mm, or 16.44 px/mm. Rim uncertainty is ±0.6 mm, increasing
to ±0.9 mm at the front blank transitions. Leaders, brackets, the stop/image-plane
lines and ambiguous front second-element flange ink are excluded from optical-rim
measurements; they do not justify enlarging that optical cap.

Native C3 blank half-height is about 12.3 mm, supporting S25's inferred cap correction
14→12.6 mm. Every other optical cap retains the earlier review. Six free-end
shoulders preserve their existing clear caps:

| Surface | Clear sd | Outer extension sd |
| ------- | -------: | -----------------: |
| 2A      |     19.2 |               27.8 |
| 4       |     16.8 |               17.3 |
| 6A      |     14.2 |               14.6 |
| 10      |     13.9 |               14.4 |
| 16      |     13.3 |               13.6 |
| 22      |     13.7 |               13.9 |

Values are millimeters. Native free-end shoulders replace diagonal SVG closures.
S2A's outer land preserves its optical cap rather than extrapolating the asphere
out to the larger blank height. Full S8 outer 14.4 is rejected: land intrusion
4.111 mm exceeds both the 3.609 mm guard and printed 4.01 mm air gap, giving about
0.101 mm physical overlap. Retain S8 clear 12.5 and its explicit outline constraint;
no R/d or clearance tolerance is changed to force a flat block.

All eighteen elements, concave ends, four bonded assemblies and the high-partial
G11 layer were inspected. Both C2 interfaces stay curved and connected. Its source
1 mm central layer has minimum modeled thickness 0.073943 mm; chemistry and cure
are unresolved. No opaque bonded land, disconnected resin wing or inferred cut is
introduced. Paragraph 0172 permits organic/glass/bonded aspheres generally but does
not identify a separate hybrid in this numerical configuration. Paragraph 0175 /
PDF p. 26 explicitly excludes optical-filter/faceplate members from numerical optical
length; the selected table contains no plate to omit. Production filter-holder
hardware is not inserted as an invented optical medium.

### Glass, reference and genuine published partials

Paragraph 0174 / PDF p. 26 defines d587.6/F486.1/C656.3/g435.8 nm and the exact
Abbe/partial equations. All 18 pairs remain at d. No complete numeric nC/nF/ng
triplet is printed. All 17 prior compatible catalog/fluorite curves resolve
identically; their labels now qualify historical supplier, melt and chemistry.
G11 remains unmatched: BR resin is a production correlation, not source-proved
chemistry or cure. CaF2 is a qualified spectral proxy and production correlation,
not proof of the historical source medium. Zero unsupported numeric overrides
were present or removed.

The original gives θgF for G9/G11/G12/G14 in the single-lens table / PDF p. 28 and
Table 2 / PDF p. 39. Retain their SCHOTT-normal dPgF values +0.00132268/+0.16817456/
−0.00145352/+0.00132268. Paragraph 0079 / PDF p. 22 explicitly defines the negative
condition as anomalous partial dispersion; paragraph 0115 / PDF p. 23 does so for
the positive medium. The four patent APD tags therefore have direct evidence,
independent of catalog coordinates. Their source-normal residuals use a different
normal line and are not substituted for these SCHOTT-normal fields. G2/G5 APD
remains inferred. The unchanged August 20 selections/partials retain that date;
this source check qualifies their scope rather than identifying a supplier.

### Focus, source contradictions and runtime scopes

The source close gaps remain D22 5.08→4.08 and D29 2.20→3.21 mm, preserving their
0.01 mm rounded track difference and the published −0.1 magnification label.
Literal first-surface object distance 240.532 mm conflicts with the rounded
prescription conjugate. The current close gaps give first-object distance 120.641763,
object-to-image distance 239.151763 mm and magnification −0.100982. Literal 240.532
from the first surface instead requires image gap 13.344840 mm and magnification
−0.054115. The earlier image-plane interpretation is retained as an unresolved
reference-plane qualification, not a proven source correction. Paragraph 0136's
stationary L1/L2 wording likewise conflicts with abstract/paragraph 0032/Claim 1
L1/L3. Both are formally recorded as unresolved; no optical fitting follows.

Surface/image-circle, infinity aperture and ≥99% format-chief checks pass. All 101
focus contours have eighteen finite, closed, connected paths with zero hidden
renderer trimming. Derived infinity iris radius remains 11.503957 mm, paraxial
F/# 1.46; a real collimated admitted-pupil measurement gives 1.561063. Physical
source iris dimensions are unpublished, and the two conventions remain separate.

The explicit actual-Gaussian pupil sweep samples 29,391 rays over 101 focus controls,
axis/half/full nominal 21.635 mm format field and 97 stop-aimed pupil points. All 100
finite controls have positive object distances. All axial pupils and chiefs clear;
there are 6212 ordinary marginal clips and ten bounded first-asphere cap misses,
with no failed seed, unaimed ray or unexplained intersection failure. The prior-cap
baseline has 5604 clips and the same ten misses; the source-supported S25 correction
adds 608 sampled marginal clips without changing axial/chief clearance.

Finite object heights in that sweep are scaled by paraxial magnification; actual
distorted image height is not forced to the nominal field. The close source-height-
scaled 18.68 mm probe returns 16.208003 mm. Independent positive-object supplements
use 240.532/focus mm from the image plane or literally from the first surface:
each samples 29,391 rays with all axial pupils/chiefs clear, 6264/6318 ordinary clips
and ten bounded first-cap misses. These do not resolve the source reference plane.

A separate unclipped inverse-chief solve targets actual 18.68/21.635 mm image heights
at every 100 non-infinity controls, then applies actual apertures. All 200 roots and
chiefs pass, maximum image residual 0.000000939 mm. Its 19,400 pupil rays include
12,262 ordinary clips and 962 actual-profile intersections beyond the retained
first cap. The 18.68 boundary has 5120 clips and zero intersection failures; the
21.635 boundary has 7142 clips and 962 bounded misses. These source-relevant/runtime
edges are separate from literal published finite-field coverage or a production cam.

The source infinity 18.68 mm edge is reached at actual angle 56.316670°, consistent
with Fig. 2A's 56.3° versus table 52.34° paraxial angle. The Fig. 2B close 55.9° label
is preserved without fitting the current reference-plane interpretation to its
angle convention. A separate bounding-sphere angular diagnostic at focus 0/.5/1
samples 873 source-range pupil rays: all axial pupils/chiefs clear, 161 ordinary
clips and three actual-profile cap misses. Nine 80/89/90° extreme seeds are
unbracketed; those limits are not coverage. Angular probes at a focus control are
not described as actual finite-object launches.

Source fidelity, sampled clearance and production correlation remain separate.
Inferred apertures, rounded close gaps, intermediate focus interpolation, exact
historic G11 chemistry and the production concave-asphere mismatch remain qualified.
The coordinator owns full repository gates, commit and shared coverage updates.

## 2026-11-23 — Watanabe Numerical Example 1

### Selection and production evidence

US 2026/0235852 A1, Numerical Example 1, by Tatsuro Watanabe replaces Takahiro Saito's US 2025/0389929 A1, Numerical Example 1. The Watanabe example matches the production section's 18 lens elements in 13 groups, two front GMo elements, UD and fluorite locations, and bonded BR-position resin behind the iris. Its five-element focusing unit has the same order of shapes and ends in a double-concave asphere. The Saito model ended its four-element focusing unit in a biconvex asphere. Canon directly names Tatsuro Watanabe as the RF14mm F1.4 L VCM optical designer. [Watanabe publication](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20260235852) · [Saito publication](https://patents.google.com/patent/US20250389929A1/en) · [Canon developer interview](https://hk.canon/en/pro-imaging/rf14mm-f14-l-vcm/article)

Canon lists 14 mm f/1.4, full-frame RF mount, 18 elements in 13 groups, one UD, one fluorite, BR optics, three aspheres, 11 blades and f/16. It specifies a 0.24 m minimum focusing distance and 0.11× maximum magnification, no front filter thread and a rear cut-to-size gel/polyester holder. Canon U.S.A. announced the lens on February 4, 2026. The catalog retains separate market and design values. The 0.70 mm resin is a separate modeled medium between the two glass lenses, as in the RF 85mm f/1.2 L model, giving 19 modeled entries in the same 13 groups. The catalog count follows Canon’s 18-element specification. [Canon U.S.A. technical specifications](https://www.usa.canon.com/support/p/rf14mm-f1-4-l-vcm) · [Canon U.S.A. announcement](https://www.usa.canon.com/newsroom/2026/20260204-lenses)

The saved side-by-side from the source comparison is `compare-watanabe.png`. The fresh jsdom render produced 19 closed medium outlines and an iris. In `final-overlay.png` the infinity model is registered against the 880 × 720 production section using the first and last optical vertices (x ≈ 131.15 and 716.9 px), with the axis at y ≈ 358.85 px and the same scale in both axes. The new iris is at x ≈ 426.9 px, roughly 0.6 px objectward of the drawing's x ≈ 427.5 px. In this same registration the Saito iris was about 15 px imageward. The focusing asphere has the matching double-concave profile, but its vertices are about 5.6 and 6.7 px objectward of Canon's. Several rim steps differ as well. The old and final overlays are in the audit scratch folder. [Canon's original section](https://personal.canon.jp/-/media/Project/Canon/CanonJP/Personal/articles/interview/developer-rf14-f14l-vcm/image/developer-rf14-f14l-vcm-08.png) · [Canon's marked construction](https://personal.canon.jp/product/camera/rf/rf14-f14lv/spec)

### Prescription and aberration checks

Read the patent cover, Fig. 1, Figs. 2A/2B, Table 1 and the Example 1 surface, asphere, various-data, finite-focus, unit and single-lens tables from Poppler page images. PDF pp. 18–19 (printed pp. 6–7) establish all 33 radii/planes, vertex intervals, 19 index–Abbe pairs, two finite-focus gaps and all five coefficient blocks at the printed precision. Kept the native millimeter scale, as in the neighboring RF VCM models. The d-line is 587.6 nm (¶0085), consistent with the default helium d reference. The flat stop SP is S17, at z = 57.60 mm, with 4.59 mm air ahead and 1.99 mm behind. The design f/1.45 gives the fixed paraxial stop radius of 13.10176 mm under the standard aperture rule. The file has no zoom stations.

| Quantity                        |                                 Patent |                                                                                           Computed from the printed prescription |
| ------------------------------- | -------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------: |
| Infinity effective focal length |                               14.42 mm |                                                                                                                      14.41658 mm |
| Infinity back focus             |                               13.43 mm |                                                                                                                      13.42094 mm |
| Overall track                   |                              127.50 mm |                                                                                            127.52 mm to the authored image plane |
| Infinity design f-number        |                                 f/1.45 |                                                                                                  f/1.45000 with the derived iris |
| D21, infinity → close           |                         5.67 → 3.89 mm |                                                                                                                   5.67 → 3.89 mm |
| D30, infinity → close           |                         6.98 → 8.76 mm |                                                                                                                   6.98 → 8.76 mm |
| Close conjugate                 | 254.067 mm from object to image, −0.1× |                                                −0.099996× at that distance. The literal 13.43 mm rear gap focuses at 253.018 mm. |
| Near effective focal length     |                      No separate value |                                                                                                                      14.40778 mm |
| Near image distance behind S33  |              Rear gap remains 13.43 mm |       13.41943 mm at the published conjugate. For collimated input at this focus setting the Gaussian back focus is 11.97871 mm. |
| Near design f-number            |                  Fig. 2B labels f/1.45 | f/1.44912 paraxial image-space. At the finite conjugate, working f/1.47237 paraxial and f/1.54302 from the traced marginal cone. |

The equal and opposite gap changes translate L2 1.78 mm objectward and preserve both the fixed rear doublet and image-plane positions. The reported 254.067 mm explicitly spans object to image, unlike the earlier source's ambiguous wording. At that distance the computed paraxial image is 0.01057 mm ahead of the authored plane. The diagnostic classifies the conjugate as consistent. The same number interpreted from the first vertex would put it 0.687 mm ahead. Small residuals in track, back focus and unit powers are retained with the printed decimals. The model's close row is the published configuration. Canon's shorter production minimum goes in `catalog.closeFocusM.marketing`.

The infinity d-line longitudinal spherical aberration from `lsa.mjs` at 100%, 85%, 70% and 50% of the nominal paraxial pupil is +0.002, −0.022, −0.025 and −0.014 mm. This diagnostic ignores the iris: the paraxially sized stop admits an entrance radius of 4.750 mm (f/1.517 by focal length over entrance diameter), so the 100% ray is blocked in the model. The admitted bundle gives −0.024 mm at 70% and −0.005 mm at 100% of that radius. Fig. 2A shows the same negative mid/outer-pupil excursion and return toward zero at the marginal ray. A true finite-object launch at 254.067 mm gives −0.010, −0.032, −0.032 and −0.019 mm at the same fractions of the real stop-limited bundle, consistent with Fig. 2B's wider negative excursion. At 57° the infinity chief lands at 18.704 mm and gives −15.75% rectilinear distortion, consistent with Fig. 2A and the stated 18.73 mm image height. All 17 conditional expressions pass. There is no supported sign or digit correction. The prior Saito errata apply only to the historical prescription.

### Semi-diameters and stop clearance

Fig. 1 is a 2560 × 3300 native raster on PDF p. 2. In the native 72 dpi Poppler render the optical axis is at y ≈ 1550. First and last vertices span approximately x = 565 to 1916 over 114.09 mm, or 11.84 px/mm. The independent first-vertex-to-iris span (about 680 px over 57.60 mm) gives 11.81 px/mm. The automated ENV/RIM screen picked up axis or annotation ink at the crop edge and mixed adjacent rims in the thin front doublet. The table below uses the clean half-silhouette, local edge profiles and visual checks of both drawings. Brackets, leader lines, coatings, the shell and the stop mark are excluded from glass readings. Values are semi-diameters in mm.

| Watanabe surface(s) |           Inherited Watanabe model |      Fig. 1 estimate |                  Final | Decision                                                                                                                                                                                                   |
| ------------------- | ---------------------------------: | -------------------: | ---------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1A, 2A              |             27.8, 19.2 (27.8 land) | 29.3 outer, 19.7 cap | 29.5, 20.1 (29.5 land) | Both drawings show the wide first blank and the rear annulus.                                                                                                                                              |
| 3A, 4A              |             17.3, 13.4 (17.3 land) | 17.7 outer, 14.2 cap | 17.9, 13.4 (17.9 land) | Both drawings show the shoulder. At a 14.2 mm optical cap the combined intrusion into the 5.96 mm gap was about 5.97 mm. Retain 13.4 mm at the curved face and preserve the drawn flat at the wider blank. |
| 5–7                 |                   14.6, 14.2, 12.5 |                 14.2 |        14.2 throughout | Fig. 1 draws a square bonded pair. Canon shows slightly different tips there.                                                                                                                              |
| 8, 9                |             14.4, 13.9 (14.4 land) |                 12.8 |              13.4 both | The fluorite-position singlet is smaller than both neighbors. Canon's corresponding body is about 13.6 mm under the registration. Both drawings show an even rim with no distinct rear land.               |
| 10–12               |                    14.6 throughout |                 15.0 |        14.6 throughout | Retain the common rim within figure-reading variation.                                                                                                                                                     |
| 13, 14              |                          14.2 both |                 15.7 |              15.7 both | Both drawings show a taller square rim on the positive singlet.                                                                                                                                            |
| 15, 16              |             13.3 (13.6 land), 13.6 |                 15.2 |              15.5 both | The two faces share the height, with no optical land drawn. The inherited S15 clipped the axial bundle before it reached the stop edge.                                                                    |
| 18–21               | 13.9, 13.9, 13.9, 13.7 (13.9 land) |                 14.7 |        14.9 throughout | Match the common outline across the bonded stack. No independent annulus is resolved at S21.                                                                                                               |
| 22–24               |                    12.6 throughout |                 13.0 |        13.2 throughout | Follow the square rim of the moving doublet.                                                                                                                                                               |
| 25, 26              |                          14.8 both |                 13.2 |              13.3 both | Both drawings support the smaller first positive focusing singlet. Its sides have finite thickness at the new rim.                                                                                         |
| 27, 28              |                          16.1 both |                 14.2 |              14.4 both | Match the taller second positive singlet without the oversized inherited caps.                                                                                                                             |
| 29A, 30             |                          16.1 both |                 13.9 |              14.1 both | Follow the profile of the final moving double-concave singlet.                                                                                                                                             |
| 31–33               |                    16.4 throughout |                 16.7 |        16.8 throughout | Match the outer height of the rear doublet in both figures. The thin internal contour close to the rim gives no separate clear-aperture dimension.                                                         |

Surface validation passes at the default geometric limits. The image-circle aperture-floor check finds zero undersized surfaces. The exact transmitted chief covers the patent's image height. The format-edge check reaches 20.93 of 21.65 mm (about 97%), limited by S33. The drawing and the patent's smaller stated image height do not support further widening for the full-frame optical corner.

With the inherited rims the aperture census found S15 at 13.3 mm clipping the beam (needed 13.5 mm rounded up), with nominal f/1.45 rising to f/1.46172 on its stop-based measure. With the final rims, no surface before or after the stop limits the axial bundle at either focus station. An exact trace of 49 signed pupil heights at each of 251 focus positions passed 12,299 axial rays. The closest glass edge to the marginal ray across that sweep is S12, with 1.412 mm of clearance. The real axial beam admits a first-vertex ray height of 4.75034 mm at infinity and 4.10043 mm at 254.067 mm. Infinity EFL divided by the real entrance diameter is f/1.51742. This differs from f/1.45 because the physical iris is derived paraxially and exact entrance-to-stop mapping is nonlinear in this design. At the nominal paraxial 4.97123 mm entrance height, the exact ray clears every glass cap but reaches the stop at 13.780 mm. The inferred iris remains sized by the house stop rule.

The before/after `vig.mjs` curves use the same infinity prescription and iris with the inherited and final rims. The geometric transmitted stop area was sampled again at common infinity field angles below. This is geometric vignetting, without absorption or projected-area weighting.

| Half-field | Inherited rims | Final rims |
| ---------: | -------------: | ---------: |
|         0° |         98.14% |    100.00% |
|        15° |         96.22% |     99.94% |
|        30° |         84.57% |     87.92% |
|        45° |         63.88% |     65.55% |
|      52.4° |         47.15% |     47.03% |
|        57° |         29.24% |     30.05% |
|        60° |          4.21% |     15.38% |

### Glass and spectral evidence

All d-line indexes and Abbe numbers remain as printed. Catalog residuals and available Ohara, Hoya and Sumita AGF data were checked. Fifteen media use equivalents that round to the source's five places in index and one place in Abbe number. Each curve is a spectral proxy, without a supplier or melt attribution.

| Modeled media                   | Disposition                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| G1, G2/G17                      | Ohara S-BAL42, L-LAH85V respectively.                                                                                                                                                                                                                                                                             |
| G4/G8/G19, G6, G9/G14, G10, G15 | Ohara S-LAH99, S-LAH97, S-NBH56, S-LAM60 and S-FPM3 respectively.                                                                                                                                                                                                                                                 |
| G7, G13/G18, G16                | Hoya TAFD25, FCD515 and E-FDS1 respectively.                                                                                                                                                                                                                                                                      |
| G3                              | Unmatched. FCD1 gives 1.49700 / 81.61, which rounds to 81.6 rather than 81.7. Hikari J-FK01A (1.497000 / 81.65, first catalogued 2017) is a nominal candidate at source precision, but its dispersion fit gives νd ≈ 81.64; G3 stays unassigned, and the production supplier is unknown. Canon marks G3 as UD, tagged inferred.                                                                                                                                                                                              |
| G5                              | Unmatched. The catalog CaF2 spectral reference is 1.43385 / 95.10 against the printed 1.43387 / 95.1. Canon marks the concave-front GFn location as fluorite, tagged inferred.                                                                                                                                    |
| G11                             | Unmatched resin. The patent explicitly identifies Gp as an anomalous partial-dispersion resin (¶¶0043, 0070, 0080). Canon's BR location corresponds, with exact formulation unverified. θgF = 0.7782 gives ΔPgF = +0.1682082 relative to the Schott normal and +0.17928203 relative to the patent's cubic normal. |
| G12                             | Unmatched. H-ZBaF4's 1.66426 / 35.48, formerly within the engine's broader compatibility window, does not match the source coordinates 1.66565 / 35.6.                                                                                                                                                            |

Compared to d, the modeled low-pupil g-line axial shifts are −0.0366 mm at infinity and −0.0435 mm at the published near conjugate. These are close to the leftward near-axis offsets in the dashed patent curves (roughly −0.03 mm and −0.04 mm). The model and patent show residual shifts of a few hundredths through the pupil. The inherited tentative glasses yielded −0.0122 and −0.0190 mm near axis and a larger positive g-line excursion at the near edge. The model's predicted low-pupil C shifts are +0.0245 and +0.0277 mm. Figs. 2A/2B plot d and g only. No line indices were invented to fit either figure.

Open: Canon has published the production construction and designer, but has not identified Numerical Example 1 as its factory prescription. The registered asphere offset, rim differences and unmarked focus setting of the production drawing leave exact spacing and clear apertures unverified. The full dispersion of the four unmatched media, the closer production focus geometry and the corrected production image field are also unverified.
