## Patent Reference and Design Identification

**Patent:** US 4,452,513
**Application number:** 387,677
**Priority:** June 19, 1981 (Japan 56-93728)
**Filed:** June 11, 1982
**Granted:** June 5, 1984
**Inventor:** Yoshinari Hamanishi
**Assignee:** Nippon Kogaku K.K.
**Title:** Zoom Lens Capable of Close Range Photography and Method of Focusing the Same to a Short Distance
**Embodiment analyzed:** First embodiment, Fig. 3 and Tables 1–2

The modeled lens is the first embodiment of US 4,452,513, correlated here with the NIKON AI ZOOM-NIKKOR
80-200mm f/4. The selected correlation rests on several convergent facts:

1. The patent example is a constant-f/4 zoom with exact paraxial focal lengths of 80.0 and 195.2 mm.
2. The patent prescription and Nikon's instruction manual both specify 13 elements in nine air-separated groups.
3. Nikon's manual identifies the production lens as an 80-200mm f/4 Nikon-bayonet lens with a 1.2 m minimum
   focusing distance and a single ring for focusing and zooming.
4. Nikon's official historical account names Yoshinori Hamanishi as a designer of the Ai 80-200mm f/4. The US
   patent uses the romanization Yoshinari Hamanishi and names Nippon Kogaku K.K. as assignee.

Nikon's published materials do not explicitly identify US 4,452,513 as the production-lens patent. The correlation
is therefore treated as the fixed project identification rather than as manufacturer-confirmed patent attribution.

The marketed focal-length range is 80-200mm, while the unscaled patent prescription computes as
80.0-195.2 mm. The modeled maximum aperture is f/4 at both endpoints. These marketing and design values are kept
separate throughout.

## Optical Architecture

The prescription is a four-functional-group afocal zoom with positive-negative-positive-positive power distribution:

- **G1:** convergent front focusing group;
- **G2:** divergent variator;
- **G3:** convergent compensator;
- **G4:** convergent fixed relay.

The four functional groups contain 13 elements in nine air-separated components and 22 refracting surfaces. Every
surface is spherical. G1 contains a cemented doublet followed by a positive singlet. G2 contains a cemented
negative-positive-negative triplet followed by a negative singlet. G3 is a cemented positive-negative doublet. G4
contains four air-spaced singlets.

At infinity focus, the 80.0 mm state uses `D5 = 3.034 mm`, `D11 = 30.972 mm`, and `D14 = 16.708 mm`. At the
195.2 mm state these become `43.150 mm`, `1.366 mm`, and `6.198 mm`. Relative to the wide state, G2 therefore
moves about 40.116 mm toward the image and G3 about 10.510 mm toward the image, while G4 remains fixed. The
first-surface-to-image track is `196.180 mm` at both published endpoints; the three printed variable gaps conserve the
total track exactly at their stated precision.

The system covers telephoto focal lengths, but it is not classified as a telephoto-form design under the project's
strict geometric definition. The first-surface-to-image track divided by EFL is 2.4522 at 80 mm and 1.0050 at
195.2 mm, so neither endpoint satisfies `TL/EFL < 1`. It is also not retrofocus because its back focal distance is
shorter than its EFL at both endpoints.

The principal architectural distinction is the G2 variator triplet. The patent assigns its two cemented interfaces
separate chromatic and monochromatic correction functions, distributing zoom-dependent correction across the two
cemented interfaces.

## Element-by-Element Analysis

The focal lengths stated for individual elements are standalone thick-lens focal lengths in air, matching the values
stored in the prescription. Cemented-component and functional-group powers are separate computed quantities and are
identified as such.

### L11 — Cemented front component of G1

- **L11a:** `nd = 1.80518`, `νd = 25.4`. Glass: 805254 — dense flint class (catalog unresolved).
  `f = -185.794 mm` standalone in air.
- **L11b:** `nd = 1.62041`, `νd = 60.3`. Glass: 620603 — crown class (catalog unresolved).
  `f = +93.228 mm` standalone in air.

L11a is a negative meniscus cemented to the biconvex positive L11b. Although the two standalone powers have opposite
signs, the complete cemented component has a net focal length of `+188.934 mm`. The high-index, low-Abbe front member
and lower-index, higher-Abbe positive member establish the principal chromatic pairing at the front of the focusing
group without making either standalone element representative of the component's in-situ power.

The cemented component forms the front portion of G1 and moves with the remainder of G1 during focusing. Its relatively
weak net positive power is supplemented by L12; the complete functional group is substantially stronger than either
component considered only by simple focal-length comparison.

### L12 — Rear positive meniscus of G1

**`nd = 1.51680`, `νd = 64.1`. Glass: 517641 — crown class (catalog unresolved). `f = +332.452 mm`.**

L12 is a weak positive meniscus separated from L11 by a 0.1 mm air gap. It completes the convergent focusing group.
The full G1 focal length is `+121.605 mm`, which is an in-situ group result rather than the arithmetic combination of
L11's cemented power and L12's standalone power.

During production-lens focusing as modeled here, L11 and L12 translate together. No internal spacing within G1 changes.

### L21 — Cemented negative-positive-negative triplet of G2

- **L2a:** `nd = 1.78797`, `νd = 47.5`. Glass: 788475 — dense lanthanum glass class
  (catalog unresolved). `f = -58.912 mm` standalone in air.
- **L2b:** `nd = 1.75520`, `νd = 27.6`. Glass: 755276 — dense flint class (catalog unresolved).
  `f = +31.536 mm` standalone in air.
- **L2c:** `nd = 1.58144`, `νd = 40.8`. Glass: 581408 — light flint class (catalog unresolved).
  `f = -40.091 mm` standalone in air.

L21 is the defining component of the variator. The complete cemented triplet has a net focal length of
`-107.875 mm`, distinct from the three standalone element powers and from the complete G2 power.

The patent describes the first cemented interface, between L2a and L2b, as combining a relatively modest standard-line
index difference with a large dispersion difference. Its stated purpose is to distribute chromatic correction without
producing excessive fluctuation of the standard-wavelength aberrations. The second cemented interface, between L2b and
L2c, carries a larger standard-line index step. The patent assigns this interface additional responsibility for coma,
astigmatism, and field-curvature control, especially as the variator moves through the zoom range.

These statements concern the complete cemented triplet in its variator environment. They do not establish an
anomalous-partial-dispersion or apochromatic classification, because the patent supplies no line-index or `dPgF` data
for these elements.

### L22 — Rear negative singlet of G2

**`nd = 1.58913`, `νd = 61.2`. Glass: 589612 — crown class (catalog unresolved). `f = -60.143 mm`.**

L22 is a biconcave negative singlet separated from L21 by 4.1 mm of air. It completes the divergent variator. The full
G2 focal length is `-37.384 mm`, whereas L21 alone is `-107.875 mm` and L22 alone is `-60.143 mm`. The difference
illustrates why the powers of separated thick components cannot be combined by simple addition: separation and
principal-plane displacement materially alter the in-situ group power.

G2 moves toward the image as focal length increases. In the patent's proposed very-close-range focusing method, G2 can
also move toward the object in coordination with G1, but that second motion is not included in the production 1.2 m
focus model.

### L3 — Cemented positive-negative compensator

- **L3a:** `nd = 1.62041`, `νd = 60.3`. Glass: 620603 — crown class (catalog unresolved).
  `f = +43.007 mm` standalone in air.
- **L3b:** `nd = 1.75520`, `νd = 27.6`. Glass: 755276 — dense flint class (catalog unresolved).
  `f = -78.971 mm` standalone in air.

The biconvex positive L3a and negative-meniscus L3b form the entire G3 compensator. Their cemented net focal length is
`+94.067 mm`, identical to the functional G3 focal length because no other component belongs to this group.

G3 moves through a shorter imageward stroke than G2 during zooming. Its changing separation from G2 and G4 compensates
for the image-plane displacement that the variator would otherwise introduce. The group is held at a fixed relationship
to the image plane during the patent's close-focus sequence.

### L41 — Front positive singlet of G4

**`nd = 1.67025`, `νd = 57.6`. Glass: S-LAL52 (OHARA catalog equivalent for patent 670576; production supplier unspecified).
`f = +75.948 mm`.**

L41 is a strongly curved positive meniscus and supplies the principal positive power at the entrance to the fixed relay.
The modeled aperture stop is placed immediately before this element, but the patent does not publish an iris surface;
that placement is an inference discussed in the verification section.

### L42 — Front negative singlet of G4

**`nd = 1.79504`, `νd = 28.6`. Glass: J-LAFH3 (HIKARI; 795287 match to patent 795286 class).
`f = -262.882 mm`.**

L42 is a weak biconcave negative singlet following L41 across a 2.0 mm air gap. Its standalone power is much weaker than
L41's. The pair therefore remains net positive in situ and forms the powered front portion of the relay.

A 53.4 mm air space follows L42. This long internal relay spacing separates the front powered pair from the rear
negative-positive pair and materially affects the principal-plane locations and complete G4 power.

### L43 — Rear negative meniscus of G4

**`nd = 1.79668`, `νd = 45.5`. Glass: 797455 — dense lanthanum glass class (catalog unresolved).
`f = -89.677 mm`.**

L43 is a strongly curved negative meniscus near the rear of the relay. It begins the final air-spaced negative-positive
pair and combines a high index of 1.79668 with a moderate Abbe number of 45.5 in a 2.4 mm center thickness.

The data support a power-balancing interpretation of the rear pair, but the patent does not assign a separate named
aberration function to L43 alone. Its contribution is therefore interpreted through the complete G4 relay rather
than as an isolated corrector.

### L44 — Final positive singlet of G4

**`nd = 1.58267`, `νd = 46.5`. Glass: 583465 — barium flint class (catalog unresolved).
`f = +102.154 mm`.**

L44 is the final biconvex positive element, separated from L43 by only 0.2 mm of air. Its positive standalone power is
similar in magnitude to L43's negative power, so the rear pair is comparatively weak as a combined contribution.
The complete G4 relay nevertheless has a net focal length of `+112.523 mm`, dominated by its front positive section
and modified by the long internal spacing.

The final surface is followed by the patent's `41.366 mm` back-focus spacing. No sensor cover plate, filter, or dummy
plane is present in the selected patent prescription, and no air-equivalent plate correction is required.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It gives no manufacturer glass names, melt records,
Sellmeier coefficients, C-, F-, or g-line indices, `PgF`, or `dPgF`. The model therefore uses conservative six-digit
`nd`-`νd` class labels except where a coefficient-backed historical catalog equivalent reproduces the published
optical constants.

| Data annotation | `nd` | `νd` | Elements |
|---|---:|---:|---|
| 805254 — dense flint class | 1.80518 | 25.4 | L11a |
| 620603 — crown class | 1.62041 | 60.3 | L11b, L3a |
| 517641 — crown class | 1.51680 | 64.1 | L12 |
| 788475 — dense lanthanum glass class | 1.78797 | 47.5 | L2a |
| 755276 — dense flint class | 1.75520 | 27.6 | L2b, L3b |
| 581408 — light flint class | 1.58144 | 40.8 | L2c |
| 589612 — crown class | 1.58913 | 61.2 | L22 |
| S-LAL52 (OHARA catalog equivalent for patent 670576) | 1.67025 | 57.6 | L41 |
| J-LAFH3 (HIKARI; 795287 match to patent 795286 class) | 1.79504 | 28.6 | L42 |
| 797455 — dense lanthanum glass class | 1.79668 | 45.5 | L43 |
| 583465 — barium flint class | 1.58267 | 46.5 | L44 |

The cemented groups use deliberate index-and-dispersion contrasts rather than a single repeated glass recipe. L11 and
L3 pair lower-dispersion positive members with higher-dispersion negative members, while L21 uses the more complex
negative-positive-negative distribution described by the patent. This is sufficient to describe an achromatizing
strategy at the d-line/Abbe level, but not to claim anomalous partial dispersion, ED behavior, or apochromatic
correction. The J-LAFH3 assignment upgrades L42 to strict Sellmeier dispersion; L41 and L43 remain conservatively
unresolved, so those elements continue to use Abbe-based dispersion.

## Focus Mechanism

The patent distinguishes two focus regimes. In the first regime, G1 alone moves toward the object while G2, G3, and G4
retain their zoom-state positions. For objects closer than a prescribed transition distance, the patent proposes a
second regime in which G1 and G2 both move toward the object while G3 remains fixed relative to the image plane. For
Embodiment 1, the patent compares first-group-only focusing with coordinated states having
`ΔD1/ΔD2 = 1` and `0`. It identifies the ratio-1 state as the preferred aberration balance at its
0.680 m test distance.

Nikon's instruction manual specifies a production minimum focusing distance of 1.2 m, measured on the camera distance
scale, and a single focusing/zooming control ring. The German instructions further state that once focus is set it
remains correct through the zoom range. The production endpoint lies outside the patent's sub-1 m second-focus test
region, so the modeled production focus remains a G1-only translation.

The 1.2 m state is a **CONSTRAINED_RECONSTRUCTION**, not a published prescription row. A finite-conjugate solve moves G1
while keeping G2-G4 and the image plane fixed:

| Zoom state | Infinity `D5` | Reconstructed 1.2 m `D5` | G1 objectward travel |
|---|---:|---:|---:|
| 80.0 mm | 3.034000 mm | 20.081774 mm | 17.047774 mm |
| 195.2 mm | 43.150000 mm | 60.198840 mm | 17.048840 mm |

The 0.001067 mm difference between the two solved travels compensates for the independently rounded patent endpoint
spacings. It does not represent an additional moving group. The patent's published 0.998 m and 0.680 m states remain
design evidence but are not exposed as production focus endpoints in the model.

## Conditional Expressions

US 4,452,513 states six conditions governing the focus motion, front-group power, variator geometry, and the two
cemented interfaces in L21. The final prescription satisfies them as follows.

| Condition | Patent range | Evaluated result |
|---|---|---:|
| `(1)` close-focus motion | `-1.0 < ΔD1/ΔD2 < 2.0` | States `1` and `0` satisfy the range |
| `(2)` front-group power | `0.5 < fw/f1 < 0.8` | `0.657866` |
| `(3)` pupil-position term | `0.5 < D2·γ/fw < 1.5` | `0.944646` using the raw wide `d11` gap |
| `(4)` variator front-surface term | `0 < f2/r6 < 0.4` | `0.124612` |
| `(5)` first L21 cemented interface | `-0.1 < … < -0.03` | `-0.085390` |
| `(6)` second L21 cemented interface | `-0.07 < … < -0.03` | `-0.057989` |

Condition (3) contains a source-notation inconsistency. The patent defines `D2` as the G2-G3 principal-point spacing,
but its printed value of approximately 0.945 is reproduced by the raw wide surface gap `d11 = 30.972 mm`. Using the
Table 2 principal-point value `36.1233 mm` gives `1.101761`, which still lies inside the stated range but does not match
the patent's numerical evaluation.

Conditions (5) and (6) depend on the standalone air focal lengths and Abbe numbers of L2a, L2b, and L2c together with
the cemented L21 focal length. They describe the division of chromatic correction between the two cemented interfaces;
they do not convert the component into an APO designation.

## Verification Summary

Independent sequential height/reduced-angle tracing and a separate ABCD propagation were run from the final authored
surface arrays. The two implementations agree within `1e-13` across the four defined zoom/focus endpoint states.

| Infinity state | Computed EFL | Patent target | Computed BFL | Patent target | Modeled f-number |
|---|---:|---:|---:|---:|---:|
| Wide | 79.999999 mm | 80.0 mm | 41.365661 mm | 41.366 mm | 3.99999995 |
| Tele | 195.200691 mm | 195.2 mm | 41.366674 mm | 41.366 mm | 4.00003713 |

The functional-group focal lengths are `+121.605 mm` for G1, `-37.384 mm` for G2, `+94.067 mm` for G3, and
`+112.523 mm` for G4. The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is
`+8.734302225e-4 mm^-1`, corresponding to a signed paraxial Petzval radius of `-1144.911 mm` under the adopted
convention. This is a paraxial curvature quantity, not a direct measurement of the fully aberrated focal surface.

### Modeling inferences

The patent gives no aperture-stop surface. The model inserts exactly one neutral `STO` at the entrance to G4,
immediately before surface 15. Its inferred semi-diameter is `14.065342 mm`; this reproduces f/4 at both zoom endpoints
and places the wide-end first-surface chief-ray height within approximately 0.12 mm of the patent's `h∞` datum.

The patent also omits clear-aperture data. Surface semi-diameters were inferred from the f/4 axial bundle, the 21.6 mm
image-height field, the patent's Fig. 3 section, and the production lens's 62 mm attachment and 73 mm barrel envelope.
A normalized FIG. 3 measurement confirmed that the original G1 profile was oversized relative to G2-G4. Surfaces 1-3
were reduced to about 23.5 mm for L11, while surfaces 4-5 were reduced to 18.5 mm for the visibly smaller L12. The
revised prescription passes the surface-clearance and image-circle validators; off-axis mechanical vignetting is
retained rather than hidden by layout controls.

### Source corrections and exclusions

The patent body text describes the first embodiment as 80-195.5 mm, but Table 1, the claim-form prescription, and the
independent trace support 80-195.2 mm. The model therefore uses 195.2 mm. Rendered patent pages and the paraxial checks
also establish `r3 = -716.000 mm`, `d14 = 16.708 mm` at the wide endpoint, and `r15 = +41.667 mm`,
correcting OCR readings of `-76.000`, `16.703`, and `+4.667`.

No dimensional scale factor is applied. All radii, spacings, and image-plane coordinates remain at patent scale. The
prescription is all-spherical, so no conic convention or aspheric coefficient transformation applies. The selected
patent table contains no sensor cover glass, filter, active plate, inactive dummy plane, or flare-cutter plane; none is
added, and no rear-spacing correction for an omitted plate is needed.

## Sources

- Yoshinari Hamanishi, **US 4,452,513**, *Zoom Lens Capable of Close Range Photography and Method of Focusing the
  Same to a Short Distance*, granted June 5, 1984. Principal references: Fig. 3, Tables 1–2, columns 3–8, and claims
  1–10.
- Nikon, [*Zoom-Nikkor 80-200mm f/4 Instruction Manual*][nikon-manual], English pp. 8–10 and German p. 12.
- Nikon, [*The Thousand and One Nights No. 26*][nikon-history], official historical account identifying Hamanishi
  with the Ai 80-200mm f/4 design line.
- RefractiveIndex.INFO, [*HIKARI J-LAFH3*][j-lafh3], preserving the formula-3 power-series record attributed to the
  November 2017 Nikon Zemax catalog.

[nikon-manual]: https://cdn-10.nikon-cdn.com/pdf/manuals/archive/Zoom-Nikkor%2080-200mm%20f-4.pdf
[nikon-history]: https://imaging.nikon.com/imaging/information/story/0026/
[j-lafh3]: https://refractiveindex.info/?book=HIKARI-optical&page=J-LAFH3&shelf=specs
