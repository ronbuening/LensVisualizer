# NIKON SERIES E ZOOM 36-72mm f/3.5

## Patent Reference and Design Identification

**Patent:** JP S55-163511 A
**Application Number:** JP Sho 54-71112
**Filed:** June 8, 1979
**Published:** December 19, 1980
**Inventor:** Satoshi Mogami
**Applicant:** Nippon Kogaku K.K.
**Title:** Two-group zoom lens (`2群構成ズームレンズ`; translated)
**Embodiment analyzed:** Example 1 (`第1実施例`)

The modeled prescription is Example 1 of JP S55-163511 A. The patent describes a two-group zoom formed, in object-to-image
order, by a diverging front group and a converging rear group. Example 1 is an eight-element, all-spherical system with eight air-spaced lens groups, organized into two moving zoom groups: three elements in the front group and five in the rear group. Its numerical table publishes `F/No = 3.5`,
`f = 37-69 mm`, full field `2ω = 62°-34°`, and the variable inter-group spacing `l = 41.4-0.1 mm`. [1, pp. 3-5]

The production correlation is the user-selected correlation for this lens and embodiment. Nikon's historical account
provides strong independent support without explicitly naming this publication or Example 1: Nikon identifies Satoshi
Mogami as the optical designer of the Series E Zoom 36-72mm f/3.5, dates an initial design proposal to August 27, 1979,
describes a later October 2, 1980 improvement proposal, and states that the lens was released in October 1981. Nikon also
describes the production optical system as a negative-positive two-group zoom with a three-element negative front group
and a five-element positive rear group. [2]

The production and patent focal-length labels are not numerically identical. The production lens is marketed as
36-72mm, while Example 1 prints 37-69 mm. The data file therefore keeps `focalLengthMarketing: [36, 72]` separate from
the computed design focal lengths. The patent's printed 37 and 69 mm values remain the zoom-position labels because they
are the source's endpoint labels; they are not substituted for the independently traced Gaussian EFLs.

## Optical Architecture

The design is a two-group negative-positive zoom. G1 comprises L1-L3 and has a computed isolated-group focal length of
-83.313931 mm. G2 comprises L4-L8 and has a computed isolated-group focal length of +44.845801 mm. These are net powers
of the complete air-spaced groups evaluated in isolation; they are distinct from the standalone focal lengths of the
individual elements and from each element's in-situ contribution inside the assembled zoom. [4]

G1 follows the patent's negative-negative-positive sequence. L1 and L2 are negative menisci and L3 is a positive
meniscus, leaving the complete front group with substantial negative power. G2 begins with positive L4 and L5, includes
the strong negative L6, and ends with positive menisci L7 and L8. The rear group remains net positive. The architecture
therefore uses a diverging front section as the zoom converter and a positive rear master group, consistent with Nikon's
own description of the production lens. [1, p. 3] [2]

Nikon describes this negative-positive type as derived from a retrofocus group configuration because it supports a wide
field while preserving the back focus required by an SLR. The present model should not, however, be called globally
"retrofocus" merely from that lineage. Under the project's strict geometric criterion, the wide endpoint has
BFD/EFL = 1.08696 and therefore satisfies `BFD > EFL`, whereas the tele endpoint has BFD/EFL = 0.84828 and does not.
Neither endpoint satisfies the project's telephoto criterion `TL/EFL < 1`. [4]

Zooming is governed numerically by the air gap following surface 6. The patent publishes 41.4 mm at the wide endpoint
and 0.1 mm at the tele endpoint, a 41.3 mm contraction of the G1-G2 separation. Nikon's mechanical account states that
the first group is the lead movement and the second group is cam-driven; the first group's solution curve is nonlinear
but nearly linear over the range. [1, p. 4] [2] The data file is an optical prescription rather than a barrel-coordinate
model, so its front-anchored surface stations should not be read as literal mechanical carriage coordinates.

The aperture stop is not numerically located in the patent prescription. The production cross-section published by
Nikon places the iris between L4 and L5. The data model therefore inserts one neutral `STO` plane in the original 2.65 mm
air gap between patent surfaces 8 and 9, dividing that gap into 0.70 mm before the stop and 1.95 mm after it. This axial
split is an author inference from the production cross-section, not a patent dimension. The authored wide-state stop
semi-diameter, 9.268004 mm, is likewise a modeled value chosen so the final prescription represents f/3.5 at the wide
endpoint; the viewer's zoom-state aperture calculation enforces the same nominal f-number at the tele endpoint. This is
a modeling device and is not evidence for a zoom-dependent physical iris diameter in the production barrel. [2] [4]

The patent does not publish semi-diameters for Example 1. All surface semi-diameters in the data file are therefore
inferred from the modeled ray envelope, 135-format field requirements, geometric edge-thickness and rim-slope limits,
shared-gap clearance, and the production cross-section. No filter, sensor cover glass, dummy plane, or mechanical part is
included. The patent's discussion of front-filter clearance is treated as mechanical context rather than an active
prescription plane. No dimensional scale factor is applied, and no aspherical coefficient transformation is applicable
because the design is entirely spherical.

## Element-by-Element Analysis

The focal length quoted for each element below is its standalone thick-element focal length in air, recomputed from the
final data file. It is not the element's effective power after interaction with the rest of the system. [4]

### L1 - Negative Meniscus

`nd = 1.80454, νd = 39.5.` Glass: `NBFD3 catalog equivalent (patent 805395; production supplier unspecified)`. Standalone
`f = -52.895 mm`.

L1 is the first and stronger of the two negative menisci at the front of G1. Its high refractive index permits meaningful
negative bending without requiring an exceptionally thick front element. In the assembled group, L1 establishes much of
the front section's diverging character while its meniscus form distributes the refraction over two same-sign radii.

NBFD3 is a near-exact coordinate-compatible curve for 805395. It supplies Sellmeier modeling without establishing the
historical production glass or supplier.

### L2 - Negative Meniscus

`nd = 1.74400, νd = 44.9.` Glass: `744449 — lanthanum-flint class (vendor unresolved)`. Standalone
`f = -118.431 mm`.

L2 is a substantially weaker negative meniscus than L1. Its role at first order is to add negative power while spreading
the front group's refraction across a second air-spaced element rather than concentrating the required divergence in L1.
Together, L1 and L2 establish the negative side of the front-group balance before the positive L3.

The data file deliberately retains only a class-level identification for 744449. Historical coordinate matches do not
justify promoting one vendor's grade to a source fact.

### L3 - Positive Meniscus

`nd = 1.79504, νd = 28.4.` Glass: `J-LAFH3 catalog equivalent (patent 795284; production supplier unspecified)`. Standalone
`f = +69.989 mm`.

L3 is the sole positive element in G1 and completes the patent's negative-negative-positive front-group sequence. Its
positive power reduces the magnitude of the two preceding negative elements while leaving the complete front group net
negative at -83.313931 mm. This distributed power balance is central to the patent's compactness conditions, which are
written specifically around the spacing immediately before this sole positive front-group lens. [1, p. 3]

L3 has the lowest Abbe number in G1. That difference provides a chromatic degree of freedom relative to L1 and L2, but
the prescription supplies only `nd` and `νd`; no claim of anomalous partial dispersion or apochromatic correction follows
from those two numbers alone.

### L4 - Biconvex Positive

`nd = 1.62041, νd = 60.3.` Glass: `620603 — crown class (vendor unresolved)`. Standalone `f = +44.592 mm`.

L4 is the leading element of the positive rear group and the strongest standalone positive element in G2. Its biconvex
form supplies a large part of the rear group's converging action immediately after the long variable zoom gap at the wide
endpoint. The inferred aperture stop lies behind L4, so L4 also sits on the object side of the modeled diaphragm.

The relatively high Abbe number of the 620603 crown-class coordinate distinguishes L4 from the lower-Abbe L6 that follows
farther back in G2. No unique vendor identity is asserted.

### L5 - Positive Meniscus

`nd = 1.62041, νd = 60.3.` Glass: `620603 — crown class (vendor unresolved)`. Standalone `f = +52.950 mm`.

L5 is the positive meniscus immediately behind the modeled aperture stop. It uses the same refractive-index and Abbe
coordinate as L4 but a different curvature distribution. At first order it extends the converging section of G2 while
placing positive power on both sides of the stop when L4 and L5 are considered together.

Because L4 and L5 are air-spaced, they are not a cemented pair; their individual standalone powers must not be replaced
by a fictitious cemented-doublet power.

### L6 - Biconcave Negative

`nd = 1.79504, νd = 28.4.` Glass: `J-LAFH3 catalog equivalent (patent 795284; production supplier unspecified)`. Standalone
`f = -20.563 mm`.

L6 has the shortest absolute standalone focal length among the negative elements and therefore the strongest standalone negative power. It interrupts
the positive sequence of L4 and L5 and strongly reshapes the power distribution of G2, yet the rear group remains net
positive at +44.845801 mm. The element therefore cannot be described accurately by its isolated power alone; its in-situ
behavior depends on the surrounding positive elements and air gaps.

L6 shares the same stored optical coordinate as L3. Its low Abbe number gives the rear group a strong dispersion contrast
against L4 and L5, but the absence of C-, F-, and g-line indices prevents a more specific partial-dispersion claim.

### L7 - Positive Meniscus

`nd = 1.79631, νd = 40.8.` Glass: `NBFD2 catalog equivalent (patent 796408; production supplier unspecified)`. Standalone
`f = +71.372 mm`.

L7 restores positive power after L6 and begins the final two-element positive tail of G2. Its moderate standalone power
helps bring the rear group back to its positive net value without requiring the last element to carry the full remaining
convergence.

NBFD2 falls inside the coordinate guard for 796408 and supplies the catalog curve used for L7. The label remains explicitly
an equivalent so it does not identify the production supplier.

### L8 - Positive Meniscus

`nd = 1.79631, νd = 40.8.` Glass: `NBFD2 catalog equivalent (patent 796408; production supplier unspecified)`. Standalone
`f = +145.363 mm`.

L8 is the weakest positive element by standalone power and terminates the rear master group. Its two radii are both
positive in the data convention, giving the element a meniscus form with its stronger convex face toward the object.
Nikon's production history specifically draws attention to the unusually bent, relatively thick final positive element
and suggests that this form may have been used to control aberrations associated with maintaining f/3.5 through the
telephoto endpoint. [2] That statement is Nikon's retrospective interpretation rather than a conclusion derived solely
from the patent prescription.

L8 uses the same coordinate-compatible NBFD2 curve as L7. No patent spectral fields beyond `nd` and `νd` are available for
either element.

## Glass Identification and Selection

Five distinct `nd`/`νd` coordinates occur in the eight-element prescription. The patent does not name glass vendors or
grades, so catalog names are used only as coordinate-compatible spectral proxies and every production supplier remains
unspecified.

| Stored glass annotation | nd | νd | Elements | Data-level interpretation |
| --- | ---: | ---: | --- | --- |
| `NBFD3 catalog equivalent (patent 805395)` | 1.80454 | 39.5 | L1 | Near-exact coefficient-backed proxy |
| `744449 — lanthanum-flint class (vendor unresolved)` | 1.74400 | 44.9 | L2 | Class-level historical coordinate only |
| `J-LAFH3 catalog equivalent (patent 795284)` | 1.79504 | 28.4 | L3, L6 | Exact-index, coordinate-compatible proxy |
| `620603 — crown class (vendor unresolved)` | 1.62041 | 60.3 | L4, L5 | Higher-Abbe crown-class coordinate |
| `NBFD2 catalog equivalent (patent 796408)` | 1.79631 | 40.8 | L7, L8 | Coordinate-compatible coefficient-backed proxy |

The palette alternates relatively high- and low-Abbe materials across both optical groups, giving the designer freedom
to balance longitudinal and lateral color while also distributing refractive power. That is a structural inference from
the stored `nd`/`νd` values, not evidence of anomalous dispersion. All eight elements now resolve to compatible Sellmeier
curves, but the patent contains no `nC`, `nF`, `ng`, or `dPgF` values. Accordingly, this analysis makes no APO,
anomalous-partial-dispersion, or secondary-spectrum claim.

## Focus Mechanism

The patent Example 1 table is an infinity zoom prescription and does not publish finite-focus spacing rows. The Nikon instruction manual establishes a minimum focusing distance of 1.2 m, but the manufacturer sources reviewed for this audit do not uniquely identify which optical group or internal spacing changes during finite-distance focusing. Nikon Tale 91 describes the two groups' zoom kinematics—G1 as the lead movement and G2 as cam-driven—but that passage concerns zooming, not the separate finite-focus mechanism. [2] [3]

The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`. At both zoom endpoints, every close-focus spacing pair is identical to its infinity value. `closeFocusM: 1.2` is retained as a production specification for the viewer, but no internal 1.2 m optical state, close-focus magnification, or focus travel is claimed. This avoids converting a plausible but underdetermined first-group-focus model into source-backed data.

## Conditional Expressions

The patent defines two compactness/correction conditions for a front diverging group containing a single positive lens.
For Example 1, `D` is the 2.6 mm air gap immediately before L3, `f1` is the front-group focal length, and `R` is the
image-side radius of the rear converging group, surface 16. [1, pp. 1, 3]

With the final data prescription, `f1 = -83.313931 mm` and `R = +136.434 mm`. The conditions evaluate as follows: [4]

1. $D/|f_1| < 0.1$: `2.6 / 83.313931 = 0.0312073`, so the condition passes.
2. $0 < 1/R < 2.5/|f_1|$: `0 < 0.00732955 < 0.03000699 mm^-1`, so the condition passes.

The patent also frames the architecture around a front-group focal-length magnitude exceeding 1.12 times the total
wide-end focal length. Using the patent's own 37 mm wide label gives `|f1|/37 = 2.25173`, comfortably above 1.12. [1] [4]

These inequalities are patent design conditions, not performance scores. The patent presents them as constraints on the
power and bending of the front group intended to retain compactness while preserving correction freedom in a two-group
zoom.

## Verification Summary

The final TypeScript arrays were independently re-evaluated against a fresh transcription of the patent Example 1 table rather than assuming that prior-stage calculations were correct. The principal infinity-state results are: [4]

| Quantity | Wide endpoint | Tele endpoint |
| --- | ---: | ---: |
| Patent zoom label | 37 mm | 69 mm |
| Published G1-G2 gap | 41.4 mm | 0.1 mm |
| Computed Gaussian EFL | 39.353836 mm | 69.653851 mm |
| Authored infinity BFD | 42.775968 mm | 59.085707 mm |
| Surface-1-to-image track | 130.325968 mm | 105.335707 mm |
| Modeled nominal f-number | 3.5 | 3.5 |

The tele endpoint is strongly self-consistent with the source: its computed surface-1-to-image track of 105.335707 mm
differs from the patent's 105.3 mm prose value by only 0.035707 mm. The wide endpoint contains a source-level numerical
contradiction. With every Example 1 radius, thickness, and index retained as printed and `l = 41.4 mm`, the Gaussian EFL
is 39.353836 mm rather than the printed 37 mm. An exact 37.000 mm EFL would require an inter-group gap of approximately
47.439859 mm, not 41.4 mm. The data file therefore does not "correct" the patent: it keeps the raw 41.4 mm spacing and
37 mm source label while storing 39.353836 mm as the independently traced design EFL. [1, p. 4] [4]

The surface-by-surface Petzval sum, computed as $\phi/(n n')$ at each refracting surface, is
`+0.002232471675 mm^-1`. Geometry checks on the authored semi-diameters found positive element edge thickness at every
element, a maximum spherical rim angle of 37.94°, acceptable shared-gap sag intrusion at both zoom endpoints, and
containment of the default off-axis ray bundles used in the local verification. Figure 1's visibly stepped-down rear profile
also supports reducing L7 to a 10.0 mm common rim and L8 to 9.0 mm. These are model-validation results, not patent performance
specifications. [4]

No patent value has been silently repaired, no dimensional scaling has been applied, and no aspherical or spectral data have been invented. The only added sequential plane is the inferred neutral aperture stop. Semi-diameters remain explicit modeling quantities rather than published Example 1 data, and no internal close-focus reconstruction is authored.

## Sources

1. Japan Patent Office, **JP S55-163511 A**, "2-group constitution zoom lens" / `2群構成ズームレンズ`, filed June 8,
   1979, published December 19, 1980. Example 1 prescription and figures in the uploaded six-page publication.
2. Nikon Imaging, Haruo Sato, **NIKKOR The Thousand and One Nights No. 91: Nikon Series E Zoom 36-72mm f/3.5**,
   <https://imaging.nikon.com/imaging/information/story/0091/>.
3. Nikon, **Nikon Series E Zoom 36-72mm f/3.5 Instruction Manual**, archival manufacturer-manual scan hosted by
   ManualsLib, <https://www.manualslib.de/manual/1360779/Nikon-E36-72Mm-F-3-5-Serie.html>.
4. `NikonSeriesEZoom3672mmf35.data.ts`, `NikonSeriesEZoom3672mmf35.stage2_verify.py`, and
   `NikonSeriesEZoom3672mmf35.stage2_results.json`, independent computation from the final authored prescription.
