## Patent Reference and Design Identification

**Patent:** US 4,189,213 A
**Priority:** May 31, 1976 (Japan)
**Filed:** May 27, 1977
**Granted:** February 19, 1980
**Inventor:** Yutaka Iizuka
**Assignee:** Nippon Kogaku K.K.
**Title:** *Zoom Lens System*
**Embodiment analyzed:** Example 3

The prescription is Example 3 of U.S. Patent 4,189,213 A. The data file retains the patent's 15 physical elements, five
patent groups, three published zoom positions, spherical surfaces, and f/4.5 aperture without uniform scaling. The marketed
50–300mm focal range is therefore kept separate from the computed design endpoints of 50.000485 and 295.206225 mm.

The production correlation is based on convergent source evidence rather than a manufacturer statement that explicitly names
this patent. Nikon's historical account of the Ai Zoom Nikkor ED 50-300mm F4.5 identifies Yutaka Iizuka as the production
lens designer, states that mass production led to release in May 1977, describes a zoom architecture with a fixed first group,
and identifies the second element of that first group as ED glass. Those points agree with the patent inventor, timing,
kinematics, and Example 3 glass position. Nikon also gives a 2.5 m minimum focus distance, which independently constrains the
focus reconstruction used in the data model.

Nikon describes the production lens as a four-group zoom, whereas the patent divides the fixed rear master/relay assembly into
a negative fourth group and a positive fifth group. The data file follows the patent's five-group decomposition. Independent
paraxial computation gives the combined fixed G4+G5 assembly an EFL of -202.683 mm, consistent with Nikon's description of
the fourth/master assembly as weakly negative. This is a nomenclature difference rather than a prescription conflict.

No numerical patent correction or optical scaling is applied. Example 3 contains no aspherical surfaces, cover glass, filter,
dummy refracting plane, folded path, or mechanical optical component. The only synthetic sequential plane is the neutral-air
`STO`, inserted at the patent-published diaphragm station 2.0 mm ahead of surface 19. Because no scaling and no aspheres are
present, no aspheric coefficient transformation is applicable.

## Optical Architecture

The patent form is a five-group positive-negative-positive-negative-positive zoom with a fixed front group, two moving zoom
groups, and a fixed rear relay. The independently recomputed group focal lengths reproduce the values printed for Example 3:

| Patent group | Surfaces | Computed EFL (mm) | Primary function in the patent |
| --- | --- | ---: | --- |
| G1 | 1–5 | +164.324980 | Fixed during zoom; front focusing group |
| G2 | 6–11 | -45.962952 | Magnification-changing group; moves imageward with zoom |
| G3 | 12–18 | +59.461125 | Compensating and magnification-changing group; moves objectward with zoom |
| G4 | 19–20 | -75.003620 | Fixed negative relay component |
| G5 | 21–26 | +110.646105 | Fixed rear relay component |

The first group is stationary during zooming. From the 50.000 mm to 295.200 mm published states, G2 moves 64.820 mm toward
the image plane while G3 moves 36.864 mm toward the object. G4 and G5 remain fixed within the roughly 0.002 mm source-rounding
variation in the published spacing table. The three moving inter-group gaps preserve the overall optical track to source
precision.

This kinematic division is central to the design. The patent explicitly assigns magnification change to both G2 and G3 rather
than relying almost entirely on a single variator. Nikon's later technical history describes the same design idea: the second
and third groups exchange variator/compensator emphasis across the zoom range, allowing a continuous cam path through the
high-magnification region.

The physical diaphragm is in the air space immediately ahead of G4. The patent places it 2.0 mm ahead of surface 19. In the
sequential data model the published `d18` is split into the distance from surface 18 to `STO` and a constant 2.0 mm from `STO`
to surface 19. A common modeled stop semi-diameter of 12.72462 mm reproduces f/4.5 at all three published zoom states; the
independently required values are 12.72440, 12.72462, and 12.72475 mm, the small spread being consistent with source rounding.

By the project's structural terminology, the lens is telephoto only at the long design endpoint: total track/EFL is 0.95370
there, but 5.63067 at the wide endpoint. It is not retrofocus at the wide endpoint because the computed BFD of 39.7320 mm is
shorter than the 50.0005 mm EFL.

## Element-by-Element Analysis

The focal length on each element line below is the standalone paraxial EFL of that element evaluated in air from its own
surfaces. It is not the element's in-situ contribution inside the complete zoom. Cemented-unit and whole-group powers are
identified separately where useful.

### G1 — D1 Cemented Pair: L1 and L2

**L1 — Negative Meniscus.** `nd = 1.74950, νd = 35.0.` Glass: `H-LaF4 catalog equivalent (patent 750350; production supplier unspecified)`. Standalone
`f = -235.722 mm`.

L1 is the negative member of the front cemented pair. Its relatively high index and moderate dispersion are paired with the
very low-dispersion positive L2. The patent's first-group conditions constrain both the refractive-index contrast and the
Abbe-number separation of this pair; Example 3 satisfies them without requiring a catalog-specific identity for L1.

**L2 — Biconvex Positive (ED).** `nd = 1.50032, νd = 81.9.` Glass:
`J-FKH1 catalog equivalent (patent 500819; production supplier unspecified)`. Standalone `f = +176.454 mm`.

Nikon independently identifies the second element of the production first group as ED glass and states that its purpose is to
reduce axial chromatic aberration. The public data file retains the patent coordinates and uses J-FKH1 only as a compatible
coefficient-backed spectral proxy; `apd: "inferred"` records the source-backed ED position without treating catalog partial
dispersion as patent data or identifying the historical production melt or supplier.

The D1 pair has a computed cemented-unit EFL of +688.135 mm. Thus L1 and L2 should not be read as independent negative and
positive powers simply added in air; the shared cemented interface changes the pair's net behavior substantially.

### G1 — L3 Positive Meniscus

`nd = 1.52000, νd = 70.1.` Glass: `J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)`.
Standalone `f = +214.897 mm`.

L3 is the air-spaced positive meniscus that completes G1. Together with D1 it brings the whole first group to
`f = +164.325 mm`. The group remains fixed for zooming but is the only optical group translated for focusing in the patent.

### G2 — L4 Negative Meniscus

`nd = 1.71300, νd = 53.9.` Glass: `LAC8 catalog equivalent (patent 713539; production supplier unspecified)`. Standalone `f = -68.991 mm`.

L4 is the strong negative single element at the front of the second group. The patent describes G2 as a negative group whose
linear imageward motion contributes directly to increasing focal length. Its position ahead of the cemented triplet gives the
group a strongly negative net EFL of -45.963 mm.

### G2 — T1 Cemented Triplet: L5, L6, and L7

**L5 — Positive Meniscus.** `nd = 1.66998, νd = 39.2.` Glass:
`S-BAH32 catalog equivalent (patent 670392; production supplier unspecified)`. Standalone `f = +293.977 mm`.

**L6 — Biconcave Negative.** `nd = 1.56384, νd = 60.8.` Glass: `N-SK11 catalog equivalent (patent 564608; production supplier unspecified)`. Standalone
`f = -48.195 mm`.

**L7 — Positive Meniscus.** `nd = 1.80518, νd = 25.5.` Glass: `J-SF6 catalog equivalent (patent 805255; production supplier unspecified)`. Standalone
`f = +90.587 mm`.

The three standalone powers are not representative of the cemented assembly's net sign. With the published common interfaces,
T1 computes to `f = -154.835 mm`. It therefore reinforces the negative character of G2 while using strong dispersion and
index contrasts to satisfy the patent's chromatic, field-curvature, distortion, and spherical-aberration conditions for the
moving second group.

### G3 — L8 Biconvex Positive

`nd = 1.52000, νd = 70.1.` Glass: `J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)`.
Standalone `f = +118.826 mm`.

L8 is the first of two air-spaced positive singlets in G3. The third group is positive overall and moves opposite G2. The
patent assigns it both focal-position compensation and a share of the magnification change, rather than treating it as a
purely passive compensator.

### G3 — L9 Biconvex Positive

`nd = 1.52000, νd = 70.1.` Glass: `J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)`.
Standalone `f = +138.411 mm`.

L9 continues the positive power of G3 with the same low-dispersion crown coordinate as L8. Example 3 differs from other
embodiments in splitting this portion of the third group into two positive singlets; the patent adds the Example-3-specific
shape-factor conditions (29) and (30) for these surfaces.

### G3 — D2 Cemented Pair: L10 and L11

**L10 — Biconvex Positive.** `nd = 1.52000, νd = 70.1.` Glass:
`J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)`. Standalone `f = +94.741 mm`.

**L11 — Negative Meniscus.** `nd = 1.80518, νd = 25.5.` Glass: `J-SF6 catalog equivalent (patent 805255; production supplier unspecified)`. Standalone
`f = -107.155 mm`.

D2 computes to a weak positive cemented-unit EFL of +754.085 mm even though its two isolated elements have comparatively
strong opposite powers. The patent uses the third-group Abbe-number and shape-factor conditions to keep chromatic and
spherical-aberration variation controlled while the group follows its nonlinear zoom trajectory. The complete G3 is much
stronger than the cemented pair alone, at +59.461 mm EFL.

### G4 — L12 Biconcave Negative

`nd = 1.71300, νd = 53.9.` Glass: `LAC8 catalog equivalent (patent 713539; production supplier unspecified)`. Standalone and group `f = -75.004 mm`.

L12 is both a single element and the entire patent G4. It is fixed during zoom and focus. The patent places emphasis on the
shape and index of this negative relay component for spherical-aberration, coma, and Petzval balance. In Nikon's broader
production nomenclature it belongs to the rear master assembly rather than appearing as a separately numbered product group.

### G5 — L13 Positive Meniscus

`nd = 1.56732, νd = 42.8.` Glass: `S-TIL26 catalog equivalent (patent 567428; production supplier unspecified)`. Standalone `f = +97.060 mm`.

L13 forms the forward sub-group of G5 and carries nearly all of that forward sub-group's power. The patent requires the
forward-subgroup focal length to remain between 0.7 and 1.0 times the focal length of G5 as a whole; Example 3 gives a ratio
of 0.87722.

### G5 — L14 Negative Meniscus

`nd = 1.76684, νd = 46.6.` Glass:
`J-LASFH2 catalog equivalent (patent 767466; production supplier unspecified)`. Standalone `f = -74.565 mm`.

L14 is the negative member of the rear portion of G5. J-LASFH2 reproduces the patent pair within the catalog-compatibility
guard and supplies a coefficient-backed curve without identifying the historical production glass. The patent constrains its
shape and index as part of the rear relay's Petzval and coma balance.

### G5 — L15 Biconvex Positive

`nd = 1.51823, νd = 59.0.` Glass: `S-NSL3 catalog equivalent (patent 518590; production supplier unspecified)`. Standalone `f = +91.227 mm`.

L15 is the final positive element. Together with L14 it forms the widely separated rear portion of G5; the 54.7 mm air space
between the forward and rear portions is an explicit part of the patent's relay concept. The complete G5 has a computed EFL
of +110.646 mm, which must be distinguished from L13's +97.060 mm standalone power and from the combined G4+G5 master
assembly's negative net power.

## Glass Identification and Selection

Example 3 publishes d-line refractive indices and Abbe numbers but no glass trade names. The data file therefore preserves
those coordinates and names a catalog glass only as a coefficient-backed equivalent when it passes the resolver guard. These
labels describe spectral proxies, not production suppliers.

| Data-file glass annotation | `nd` | `νd` | Elements | Identification status |
| --- | ---: | ---: | --- | --- |
| `H-LaF4 catalog equivalent (patent 750350; production supplier unspecified)` | 1.74950 | 35.0 | L1 | Coordinate-compatible spectral proxy; vendor not asserted |
| `J-FKH1 catalog equivalent (patent 500819; production supplier unspecified)` | 1.50032 | 81.9 | L2 | Compatible ED proxy; Nikon identifies the production position as ED |
| `J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)` | 1.52000 | 70.1 | L3, L8, L9, L10 | Compatible low-dispersion crown proxy |
| `LAC8 catalog equivalent (patent 713539; production supplier unspecified)` | 1.71300 | 53.9 | L4, L12 | Coordinate-compatible spectral proxy |
| `S-BAH32 catalog equivalent (patent 670392; production supplier unspecified)` | 1.66998 | 39.2 | L5 | Near-exact coefficient-backed proxy |
| `N-SK11 catalog equivalent (patent 564608; production supplier unspecified)` | 1.56384 | 60.8 | L6 | Exact coordinate-compatible spectral proxy |
| `J-SF6 catalog equivalent (patent 805255; production supplier unspecified)` | 1.80518 | 25.5 | L7, L11 | Coordinate-compatible spectral proxy |
| `S-TIL26 catalog equivalent (patent 567428; production supplier unspecified)` | 1.56732 | 42.8 | L13 | Coordinate-compatible spectral proxy |
| `J-LASFH2 catalog equivalent (patent 767466; production supplier unspecified)` | 1.76684 | 46.6 | L14 | Compatible coefficient-backed proxy |
| `S-NSL3 catalog equivalent (patent 518590; production supplier unspecified)` | 1.51823 | 59.0 | L15 | Coordinate match at the patent's rounded precision |

SCHOTT's current N-SK11 data give `nd = 1.56384` and `νd = 60.80`, matching L6 exactly. OHARA lists S-NSL3 at
`nd = 1.51823` and `νd = 58.90`, which rounds to the patent's 59.0 value for L15. The newly qualified J-FKH1, J-PKH1,
S-BAH32, and J-LASFH2 curves likewise stay inside the catalog guard. Together with the already resolved class/code rows,
all fifteen elements now have coefficient-backed spectral curves without assigning a production supplier.

The patent supplies no per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF` values. Those fields are therefore absent from the
authored elements. Catalog data supplies compatible curves downstream, but the prescription does not support an apochromatic
or anomalous-partial-dispersion claim from the patent table alone.

## Focus Mechanism

The patent states that the first lens group performs focusing by moving toward the object while the remaining rear groups stay
fixed for focus. It does not publish finite-conjugate spacing rows. Nikon independently specifies a production minimum focus
distance of 2.5 m from the focal plane.

The data file therefore uses `CONSTRAINED_RECONSTRUCTION`, not a published close-focus state. A finite-conjugate solve with
only G1 translated gives the following objectward shifts:

| Design zoom state (mm) | G1 objectward shift (mm) | Computed paraxial |m| at 2.5 m |
| ---: | ---: | ---: |
| 50.000 | 13.184948 | 0.024396 |
| 122.458 | 13.175210 | 0.059745 |
| 295.200 | 13.174286 | 0.144020 |

Because LensVisualizer anchors the first surface at the front of the sequential model, the same physical motion is represented
by increasing only the `d5` gap by the solved displacement. This is a coordinate-equivalent representation: G2–G5 and the
image plane remain fixed relative to one another, while G1 is effectively displaced toward the object. The `d11` and normalized
`d18` gaps therefore remain zoom-only and do not participate in focusing.

The wide and long reconstructed magnifications provide an independent check on the model. Nikon reports approximately 1/40×
at the marketed 50 mm position and 0.14× at the marketed 300 mm position; the design-state computations give about 1/41.0×
and 0.144× respectively. Nikon's approximately 1/15× figure is quoted at 135 mm and is not directly equated with the patent's
122.458 mm intermediate state.

## Chromatic Correction Strategy

The most direct production-level chromatic evidence is Nikon's identification of L2 as ED glass and its statement that the ED
member significantly reduces axial chromatic aberration. Example 3 also shows deliberate Abbe-number separation in several
patent conditions. The first group has `ν1p - ν1n = 46.9`; the second-group chromatic condition evaluates to 35.3; and the
third-group positive/negative separation is 44.6. All exceed the patent's respective lower limits.

These are Abbe-number constraints, not measurements of secondary spectrum. Accordingly, the analysis treats the design as
using a strong low-dispersion strategy without applying an APO label or claiming anomalous partial dispersion for any
unresolved glass.

## Conditional Expressions

The patent defines the shape factor as `SF = (rF + rR) / (rF - rR)`. Conditions (1)–(25) are the general preferred-system
conditions. Conditions (26)–(28) belong to other embodiments and are not applied to Example 3. Example 3 adds conditions (29)
and (30). The fifth-group spacing relation `0.4 f5 < D5` is stated separately in the patent text. Independent computation from
the final data arrays gives:

| Condition | Patent requirement | Example 3 value | Result |
| --- | --- | ---: | --- |
| (1) | `2.9 < f1/fW < 3.7` | 3.28650 | Pass |
| (2) | `0.8 < |f2|/fW < 1.1` | 0.919259 | Pass |
| (3) | `1.0 < f3/fW < 1.4` | 1.18922 | Pass |
| (4) | `1.4 < |f4|/fW < 1.7` | 1.50007 | Pass |
| (5) | `2.0 < f5/fW < 2.4` | 2.21292 | Pass |
| (6) | `ν1p - ν1n > 34` | 46.9 | Pass |
| (7) | `N1p < 1.55` | 1.50032 | Pass |
| (8) | `N1n > 1.70` | 1.74950 | Pass |
| (9) | `-0.3 < SF11 < 0` | -0.131182 | Pass |
| (10) | `-2.0 < SF12 < -1.0` | -1.07532 | Pass |
| (11) | `0.5 < SF21 < 2.0` | 1.02800 | Pass |
| (12) | `-1.6 < SF22 < -0.5` | -0.756230 | Pass |
| (13) | `ν2n - ν2p > 23` | 35.3 | Pass |
| (14) | `N21 > 1.7` | 1.71300 | Pass |
| (15) | `-0.6 < SF32 < 0` | -0.426345 | Pass |
| (16) | `ν3p - ν3n > 43` | 44.6 | Pass |
| (17) | `N3p < 1.55` | 1.52000 | Pass |
| (18) | `N3n > 1.75` | 1.80518 | Pass |
| (19) | `-0.2 < SF4 < 0.2` | 0.076807 | Pass |
| (20) | `N4 > 1.7` | 1.71300 | Pass |
| Fifth-group spacing | `0.4 f5 < D5` | `D5/f5 = 0.494369` | Pass |
| (21) | `0.7 < f5'/f5 < 1.0` | 0.877215 | Pass |
| (22) | `-4.0 < SF51 < -1.0` | -2.38836 | Pass |
| (23) | `-6.0 < SF52 < -2.0` | -4.17090 | Pass |
| (24) | `N5p < 1.57` | 1.56732 | Pass |
| (25) | `N5n > 1.73` | 1.76684 | Pass |
| (29) | `0.0 < SF311 < 0.2` | 0.121087 | Pass |
| (30) | `-0.5 < SF312 < -0.1` | -0.314220 | Pass |

The computed values are used only to verify that the selected Example 3 prescription lies inside the patent's stated design
region. They do not imply that every condition independently controls a single aberration in isolation.

## Verification Summary

Sequential reduced-angle tracing and an independent ABCD calculation from the final TypeScript arrays reproduce the three
published zoom states within the precision of the patent tables:

| Published focal state (mm) | Computed EFL (mm) | Computed BFD (mm) | Track to paraxial image (mm) |
| ---: | ---: | ---: | ---: |
| 50.000 | 50.000485 | 39.732037 | 281.536037 |
| 122.458 | 122.459937 | 39.733847 | 281.535847 |
| 295.200 | 295.206225 | 39.734958 | 281.536958 |

The patent prints a full length of 281.535 mm and a back focal distance of 39.732 mm for Example 3. The few-micrometre spread
in the recomputed track and the approximately 0.003 mm long-end BFD difference are consistent with the rounded variable-gap
and prescription values rather than evidence of a missing optical plane.

Surface-by-surface Petzval computation using `φ/(n·n′)` gives a total of `+5.23813096e-4 mm^-1`; with the analysis convention
that the corresponding image-surface radius takes the opposite sign, this is approximately -1909.08 mm. Spacing does not
enter this sum, so it is common to all zoom states.

The patent does not publish clear semi-diameters. The `sd` values in the data file are therefore modeling inferences derived
from the verified physical stop, published field angles, representative marginal/chief-ray envelopes, the optical section,
and geometry limits. They are not asserted as manufacturing apertures. A 600-dpi audit of Example 3's FIG. 3 found the
original 45/45/44/44/42 mm G1 profile materially oversized relative to the median G2/G3 height and the 11.5-12.5 mm G5
profile undersized relative to G4. The reviewed 35/35/34/34/33 mm G1 and 14/14/15.5/15.5/15.5/15.5 mm G5 profiles follow
the patent's group-height progression more closely while retaining the existing G2-G4 rims. Across the three infinity and
three reconstructed close-focus endpoint states, the model retains positive representative off-axis clearance, positive
element edge thickness, rim slopes below the project limit, and shared-band cross-gap intrusion below the configured 0.90
fraction.

No plate, filter, dummy optical surface, or patent lens surface has been removed. The neutral `STO` plane only splits the
published G3-to-G4 air gap at the stated diaphragm station. No source number was silently corrected, no uniform scale factor was
used, and the all-spherical prescription requires no conic or polynomial asphere data.

## Sources / References

1. Yutaka Iizuka, **U.S. Patent 4,189,213 A**, *Zoom Lens System*, Nippon Kogaku K.K., filed May 27, 1977; granted
   February 19, 1980. Example 3 supplies the transcribed prescription, zoom spacings, group focal lengths, full length,
   back focal distance, diaphragm location, and applicable conditions.
2. Nikon Corporation, [**NIKKOR — The Thousand and One Nights No. 92: Ai Zoom Nikkor ED 50-300mm F4.5**](https://imaging.nikon.com/imaging/information/story/0092/).
   Used for production identity, designer attribution, release timing, four-group production nomenclature, zoom movement,
   ED-element position, 2.5 m MFD, and approximate close-focus reproduction ratios.
3. SCHOTT, [**N-SK11 optical-glass data**](https://media.schott.com/api/public/content/323bc895f4364775b53683bf486b7168?v=eb0ec2c8). Used to verify the
   exact `nd = 1.56384`, `νd = 60.80` catalog match retained for L6.
4. OHARA, [**Glass Type — S-NSL**](https://www.ohara-inc.co.jp/en/product/01000/). Used to verify S-NSL3 at
   `nd = 1.51823`, `νd = 58.90`, corresponding to the patent-rounded L15 coordinate.
