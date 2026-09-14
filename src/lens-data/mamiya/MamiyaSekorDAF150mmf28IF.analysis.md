## Patent Reference and Design Identification

**Patent:** JP 2001-183581 A<br>
**Filed:** 1999-12-24<br>
**Published:** 2001-07-06<br>
**Inventor:** Hideyuki Suga<br>
**Applicant:** Mamiya-OP Co., Ltd.<br>
**Title:** 中望遠レンズ (*Medium Telephoto Lens*)<br>
**Embodiment analyzed:** Example 1

This analysis describes the prescription stored as **MAMIYA SEKOR AF 150mm f/2.8 IF D**. The selected production
correlation is JP 2001-183581 A, Example 1. Neither the patent nor the Mamiya product literature explicitly links the
patent to the later production lens, so the assignment remains a fixed correlation rather than a documented manufacturer
attribution.

The correlation rests on several independent points:

1. Example 1 contains eight elements in seven physical groups, matching the production specification.
2. The patent divides the system into a fixed front group and two independently moving internal groups; Mamiya describes
   the production lens as an inner-focus design.
3. The patent gives a full field of `2ω = 26.5°`, compared with the marketed 26° angle of view.
4. The modeled infinity f-number is 2.88, close to but distinct from the marketed f/2.8 designation.
5. Uniformly scaling the patent's normalized `f = 100` prescription by 1.5 gives an independently computed infinity EFL
   of 149.790260628 mm.
6. The patent's 1999 filing and 2001 publication precede the brochure's stated first-sale date of 2008-04-21.

Patent PDF page 5, ¶0037, supplies the Example 1 radii, axial spacings, `Nd`, `νd`, infinity `Fn = 2.88`, full field
`2ω = 26.5°`, and the published `|β| = 0.15` movement row. Figure 1 on patent page 7 establishes the G1–G3 structure,
the aperture stop within G2, and the cemented L6–L7 pair. The Example 1 plots on patent page 11 show the signed close
state as `β = -0.15` and label its f-number as 2.97 [1].

Mamiya's lens-range brochure identifies the production lens as the Mamiya Sekor AF 150mm F2.8 IF D. It lists eight
elements in seven groups, a 26° angle of view, 1.0 m minimum focusing distance, 0.19 maximum magnification, a 72 mm
filter diameter, and f/22 minimum aperture [2]. These marketed values are retained separately from the patent-derived and
computed design quantities.

## Optical Architecture

The design is an all-spherical, fixed-focal-length medium-telephoto lens with eight elements in seven physical groups.
The physical groups are organized into three functional groups for focusing:

| Functional group | Contents | Focus behavior | Isolated paraxial focal length |
|---|---|---|---:|
| G1 | L1–L3 | Fixed | +294.662236 mm |
| G2 | L4, aperture stop, L5, cemented L6–L7 | Moves objectward | +18,946.280873 mm |
| G3 | L8 | Moves objectward independently | +170.870353 mm |

These are isolated-group focal lengths, not additive contributions to the assembled system. G2 is nearly afocal in
isolation even though it contains substantial positive and negative element powers. Its motion can therefore change the
conjugate, pupil geometry, and aberration balance without acting as a conventional strong focusing component by itself.
G3 is a positive rear group whose larger objectward motion supplies the second internal degree of freedom.

G1 contains two positive menisci followed by a negative meniscus. It forms the fixed front collector and establishes the
ray convergence entering the long variable gap to G2. Within G2, L4 precedes the aperture stop; the negative L5 and the
cemented L6–L7 pair follow it. L8 is the separate rear group. Because the stop belongs to G2, it translates relative to
both G1 and the fixed image plane during focusing.

The patent and product literature use “medium telephoto” as a focal-length and field category. Under the stricter
architectural criterion used for this model, the infinity first-surface-to-image track is 182.392815 mm and the EFL is
149.790261 mm, so `TL/EFL = 1.217655`. The system is therefore not telephoto-form under the rule `TL/EFL < 1`. Its
`BFD/EFL = 0.583858`, so it is not retrofocus under the rule `BFD > EFL`.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air. They identify each element's own sign and
scale; they do not represent its exact in-situ contribution to the assembled lens.

### L1 — Positive Meniscus

`nd = 1.496999`, `νd = 81.61`. Glass: **S-FPL51 (OHARA catalog model; supplier not established)**.
Standalone `f = +148.791678 mm`.

L1 is the strongly curved front collector of G1. Its high Abbe number places a low-dispersion positive component at the
largest ray heights in the lens. The current OHARA model gives `nC = 1.495136`, `nF = 1.501231`, `ng = 1.504507`, and
`dPgF = +0.0280` [3]. Those spectral values are catalog-derived modeling data; the patent does not name S-FPL51 or a
glass supplier. The diagram consequently marks L1 as `APD (INFERRED)`, not patent-confirmed APD glass.

The modeled clear semi-diameter is 34.5 mm, giving a 69.0 mm front clear diameter. This is a derived optical aperture,
not a published mechanical diameter, and it remains below the production lens's 72 mm filter diameter.

### L2 — Positive Meniscus

`nd = 1.618000`, `νd = 63.33`. Glass: **S-PHM52 (OHARA catalog model; supplier not established)**.
Standalone `f = +159.155971 mm`.

L2 adds positive power behind L1 with higher index and lower Abbe number. The narrow air gap between L1 and L2 lets the
two positive menisci divide the front-group convergence without forming a cemented unit. The catalog model supplies
`nC = 1.615036`, `nF = 1.624794`, `ng = 1.630103`, and `dPgF = +0.0051` [3].

### L3 — Negative Meniscus

`nd = 1.613397`, `νd = 44.27`. Glass: **S-NBM51 (OHARA catalog model; supplier not established)**.
Standalone `f = -78.597895 mm`.

L3 is the negative rear component of G1. It opposes the two positive menisci and leaves the complete fixed group with the
much weaker net focal length of +294.662236 mm. It also establishes the convergence entering the variable G1–G2 gap.
The catalog model gives `nC = 1.609248`, `nF = 1.623105`, `ng = 1.630911`, and `dPgF = -0.0065` [3].

### L4 — Positive Meniscus

`nd = 1.618000`, `νd = 63.33`. Glass: **S-PHM52 (OHARA catalog model; supplier not established)**.
Standalone `f = +256.309491 mm`.

L4 is the front component of moving group G2 and uses the same modeled glass as L2. It is weaker than either front
positive meniscus when considered alone. Its position directly before the aperture stop makes its translation relevant
to both conjugate control and entrance-pupil geometry.

### L5 — Biconcave Negative

`nd = 1.720467`, `νd = 34.73`. Glass: **S-NBH8 (OHARA catalog model; supplier not established)**.
Standalone `f = -50.978525 mm`.

L5 is the first refractive component behind the stop and provides substantial negative power within G2. Its high index
allows that power over a short center thickness. Together with L4 and the positive cemented pair behind it, L5 helps
produce the near-afocal isolated behavior of the complete G2 group. The catalog model gives `nC = 1.714365`,
`nF = 1.735123`, `ng = 1.747234`, and `dPgF = -0.0019` [3].

### L6–L7 — Cemented Negative–Positive Pair D1

**L6:** `nd = 1.603420`, `νd = 38.03`. Glass: **S-TIM5 (OHARA catalog model; supplier not established)**.
Standalone `f = -72.565378 mm`.

**L7:** `nd = 1.806098`, `νd = 40.34`. Glass: **Unmatched (no exact current catalog identity)**.
Standalone `f = +37.892500 mm`.

L6 is biconcave and L7 is biconvex. Their shared interface is assigned to the downstream L7 medium. Evaluated together
with the real cemented interface, the pair has a net focal length of **+73.477355 mm**. This cemented net power is
distinct from either standalone element power and from the near-afocal behavior of the complete G2 group.

For L6, the current OHARA model gives `nC = 1.598748`, `nF = 1.614616`, `ng = 1.623875`, and `dPgF = +0.0036` [3].
L7 remains unmatched because its stored `nd = 1.806098`, `νd = 40.34` pair has no exact identity in the current OHARA,
HOYA, or HIKARI numerical catalogs reviewed for this entry. HOYA NBFD13 is nearly exact in index but differs by
`Δνd = +0.39`; OHARA L-LAH84 differs by `Δn = +0.002252` and `Δνd = +0.21`. Neither is adopted as an exact spectral
model, so L7 carries no inferred line indices or `dPgF`.

### L8 — Biconvex Positive

`nd = 1.772499`, `νd = 49.60`. Glass: **S-LAH66N (OHARA catalog model; supplier not established)**.
Standalone `f = +170.870353 mm`.

L8 is the independently moving positive rear group G3. It is separated from G2 by the second variable internal gap and
from the fixed image plane by the variable rear spacing. During close focusing it moves objectward farther than G2,
which increases the final surface-to-image gap while preserving the image-plane position. The catalog model gives
`nC = 1.767792`, `nF = 1.783383`, `ng = 1.791987`, and `dPgF = -0.0094` [3].

## Glass Identification and Selection

The patent publishes `Nd` and `νd` only. The data file therefore separates the patent coordinates from the current
catalog models used for dispersion. A named glass below means that a current OHARA entry reproduces the stored
coordinates exactly or within the stated source precision; it does not establish Mamiya's supplier or production melt.

| Elements | Patent `nd / νd` | Catalog model | Catalog residual `Δn / Δνd` | Catalog spectral status |
|---|---:|---|---:|---|
| L1 | 1.496999 / 81.61 | S-FPL51 | 0.000000 / -0.07 | `nC`, `nF`, `ng`, `dPgF` stored |
| L2, L4 | 1.618000 / 63.33 | S-PHM52 | 0.000000 / 0.00 | `nC`, `nF`, `ng`, `dPgF` stored |
| L3 | 1.613397 / 44.27 | S-NBM51 | 0.000000 / 0.00 | `nC`, `nF`, `ng`, `dPgF` stored |
| L5 | 1.720467 / 34.73 | S-NBH8 | 0.000000 / -0.02 | `nC`, `nF`, `ng`, `dPgF` stored |
| L6 | 1.603420 / 38.03 | S-TIM5 | 0.000000 / 0.00 | `nC`, `nF`, `ng`, `dPgF` stored |
| L7 | 1.806098 / 40.34 | Unmatched | — | Patent `nd`/`νd` only |
| L8 | 1.772499 / 49.60 | S-LAH66N | 0.000000 / -0.05 | `nC`, `nF`, `ng`, `dPgF` stored |

The resulting model has direct catalog line data for seven of the eight elements. L1 supplies the lowest dispersion and
the largest positive `dPgF` in the selected catalog set. L3 and L8 provide negative partial-dispersion deviations in
different functional groups. This supports a more specific discussion of the modeled spectral palette than an Abbe-only
model would permit, but the unmatched L7 and the absence of a manufacturer glass declaration still preclude a claim
about the actual production melts or a system-level APO designation.

Mamiya's brochure states that the production lens uses low-dispersion glass [2]. That statement is consistent with the
modeled S-FPL51 coordinate at L1, but the brochure does not identify a patent element or supplier. The connection remains
correlative.

## Focus Mechanism

The patent uses a two-group inner-focus mechanism. G1 remains fixed. G2, containing L4 through L7 and the aperture stop,
moves objectward. G3, consisting of L8, also moves objectward and travels farther. The image plane remains fixed.

The patent publishes a finite row at `|β| = 0.15`. Independent tracing of the source-precision row gives
`β = -0.150132`, a scaled object-to-image distance of 1.211700 m, a close-state EFL of 138.080009 mm, and f/2.9635,
consistent with the page-11 plot label f/2.97. It does not reach the production endpoint of 1.0 m and 0.19×.

The published row is stored as an exact focus keyframe. The close-focus endpoint remains a **constrained
reconstruction**. It preserves the fixed image plane, the
manufacturer's 1000 mm minimum focus distance measured from the image plane, and the terminal patent movement ratio
`X2/X3 = 0.7967231325`.

| Variable spacing | Infinity | Patent `|β| = 0.15` row | Stored 1.0 m state |
|---|---:|---:|---:|
| `d6`, G1 to G2 | 29.334000 mm | 7.816500 mm | 2.415407 mm |
| `d14`, G2 to G3 | 7.587000 mm | 2.097000 mm | 0.718959 mm |
| `d16`, L8 to image plane | 87.456315 mm | 114.463815 mm | 121.242948 mm |

At the stored endpoint, G2 moves objectward by 26.918593 mm and G3 by 33.786634 mm. The solved object-to-image distance
is 999.999999991 mm and the signed magnification is -0.192615980. The effective focal length decreases to
135.421855 mm, while the fixed physical stop gives f/2.982452.

The reconstruction defines a mechanism-constrained endpoint, not the undocumented production cam law at every
intermediate distance. Piecewise-linear interpolation between the infinity, published, and reconstructed states
preserves the gap sum and produces positive spacings throughout the modeled range; only the keyframes are claimed exact.

## Scaling, Aperture, and Geometry Modeling

The patent prescription is normalized to `f = 100`. All radii, axial spacings, semi-diameters, and image-plane distances
were multiplied by the uniform scale factor `s = 1.5`. Refractive indices, Abbe numbers, and catalog spectral quantities
were not scaled. The design is entirely spherical, so there are no conic constants or polynomial coefficients to
transform.

The patent locates the aperture stop but does not publish its clear radius. The modeled stop semi-diameter of
15.777551 mm was solved so that the infinity prescription reproduces `Fn = 2.88`. The resulting entrance-pupil
semi-diameter is 26.005254 mm. Paraxially, the entrance pupil is virtual at 101.081928 mm behind the first surface,
6.145428 mm behind surface 16. The exit pupil is virtual at 63.562885 mm behind the first surface, or 31.373615 mm
objectward of surface 16, with a semi-diameter of 20.630196 mm.

The patent also omits clear semi-diameters. The authored values were derived from exact spherical tracing over the
infinity-to-1.0 m focus range, including on-axis stop-rim rays, the default off-axis field fan, full-field chief rays,
and reachable full-field half-pupil probes. All required rays remain contained.

The close-focus G1–G2 boundary is tightly nested. At the shared 16.7 mm radial band, the surface-6/surface-7 sag intrusion
is 2.363621 mm across a 2.415407 mm vertex gap, leaving 0.051787 mm of physical clearance. The declared
`gapSagFrac = 0.98` records this verified nesting rather than concealing it with layout controls.

All elements retain positive modeled edge thickness. The minimum extrapolated edge thickness is 0.226193 mm at L1, and
the maximum spherical rim angle is 36.1553° at surface 3. No conic-height limit applies. No sensor cover glass, filter,
inactive dummy plane, flare-cutter plane, or mechanical component is included, and no omitted plate requires an
air-equivalent rear-spacing correction.

## Chromatic Correction Strategy and Evidentiary Limits

The catalog model places S-FPL51 at the high-ray-height front positive element, S-NBM51 at the negative rear of G1, and
S-LAH66N in the independently moving rear group. L5 and L6 add high-index negative power around the positive cemented
component L7. The first-order layout therefore distributes chromatic balancing opportunities across the fixed and moving
groups rather than concentrating them in a single conventional achromat.

The L6–L7 cemented pair is not a conventional low-index crown/high-dispersion flint description: the two elements have
similar Abbe numbers but a large index difference. Its strong positive cemented power is subsequently balanced by L5 and
the rest of G2. The unmatched L7 prevents a complete catalog-Sellmeier model for the cemented pair.

The stored line indices and `dPgF` values support element-level statements about the selected catalog models. They do not
prove the production glass supplier, the production melt, or apochromatic correction of the assembled lens. The Mamiya
brochure makes a low-dispersion claim but does not call this lens APO [2]; the analysis therefore does not assign an APO
classification.

## Conditional Expressions

The patent defines five principal conditions for this three-group construction. The values below are recomputed from the
scaled prescription. Uniform scaling leaves the ratios unchanged, and the patent's normalized `f = 100` is used in the
conditions that explicitly contain `f`.

| Condition | Claimed interval | Recomputed value | Patent Example 1 value | Result |
|---|---:|---:|---:|---|
| `f1/f` | `1.6 < f1/f < 2.2` | 1.964415 | 1.96 | Satisfies |
| `f/f2` | `-0.63 < f/f2 < 0.53` | 0.007917 | 0.001 | Satisfies; printed example value is inconsistent |
| `f3/f` | `0.64 < f3/f < 1.9` | 1.139136 | 1.139 | Satisfies |
| `X2/X3` | `0.5 < X2/X3 < 1.0` | 0.796723 | 0.80 | Satisfies |
| `D1/D2` | `1.35 < D1/D2 < 5.9` | 3.866350 | 3.87 | Satisfies |

Condition (2) is the material source discrepancy. The printed prescription computes to `f/f2 = 0.007917121`, not the
example table's 0.001. Source-precision perturbation cannot reconcile the values. The prescription is preserved, the
printed value is reported as a source inconsistency, and both remain inside the claimed interval.

## Verification Summary

Independent sequential height/reduced-angle tracing and ABCD multiplication agree for the final infinity prescription.
The system determinant is 1.000000000000. Principal-plane positions use surface 1 and surface 16 as their respective
reference planes.

| Quantity | Result |
|---|---:|
| Infinity EFL | 149.790260628 mm |
| Front principal plane H1 | +62.055094562 mm from surface 1 |
| Rear principal plane H2 | -62.333945700 mm from surface 16 |
| Infinity BFD | 87.456314928 mm |
| First surface to last surface | 94.936500000 mm |
| First surface to image plane | 182.392814928 mm |
| Entrance-pupil semi-diameter | 26.005253581 mm |
| Infinity f-number | 2.880000000 |
| Close-state EFL | 135.421855384 mm |
| Close-state f-number | 2.982452197 |
| Petzval sum, `Σ φ/(n·n′)` | +0.000836587073 mm⁻¹ |
| Petzval radius, `-1/ΣP` convention | -1195.332837794 mm |

The Petzval value is the surface-by-surface paraxial sum, not an element-level approximation and not a substitute for a
full astigmatic field-curvature analysis. The finite-conjugate reduction in EFL is a computed property of internal
focusing and does not alter the marketed 150 mm designation.

## Sources and References

1. Japan Patent Office, **JP 2001-183581 A**, *中望遠レンズ* (*Medium Telephoto Lens*), published 2001-07-06;
   especially patent PDF pages 2–5, 7, and 11.
2. Mamiya, **Mamiya AF Lens Range**, last updated 2008-03-19, brochure page 7, “Mamiya Sekor AF 150mm F2.8 IF D Lens”:
   <https://allphotolenses.com/public/files/pdfs/921a29c96be9a5d809921e415e1871a9.pdf>.
3. OHARA, **Optical Glass Catalog**, current six-decimal S-glass numerical data:
   <https://oharacorp.com/glass-catalog/>.
4. HOYA Optics, **Optical Glass Numerical Data and Cross Reference Index**:
   <https://www.hoya-opticalworld.com/english/>.
5. HIKARI Glass, **Optical Glass Catalog Downloads**:
   <https://www.hikari-g.co.jp/optical_glass/catalog/>.
