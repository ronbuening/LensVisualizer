## Patent Reference and Design Identification

**Patent:** US 2019/0041605 A1
**Application Number:** 16/051,787
**Priority:** August 7, 2017 (JP 2017-152258)
**Filed:** August 1, 2018
**Published:** February 7, 2019
**Inventors:** Shinichiro Saito; Makoto Nakahara
**Applicant:** Canon Kabushiki Kaisha
**Title:** _Optical System and Image Pickup Apparatus_
**Example details:** Numerical Data 2

This prescription is the selected production correlation for the **CANON EF 400mm f/2.8 L IS III USM**. The patent does
not state that Example 2 became that production lens, so the identification remains a production-to-patent correlation
rather than a manufacturer-confirmed genealogy. The correspondence is nevertheless specific enough to support the fixed
job-card assignment.

1. Numerical Data 2 is a 392.00 mm, F/2.90 telephoto design with a 21.64 mm image height and 3.16° paraxial half-field.
   Those design quantities closely bracket the marketed 400 mm f/2.8 specification while remaining separate from it.
2. The patent architecture is a positive L1 front unit, a negative L2 inner-focus unit, and a rear L3 unit subdivided into
   positive L3A, negative transverse image-stabilization L3B, and positive L3C. Figure 2A shows the same basic supertelephoto
   arrangement used by the selected production correlation, including the stop immediately before the small focus unit and
   an image-stabilization sub-unit in the rear system (¶0022–¶0026).
3. Canon marketed the EF 400mm f/2.8L IS III USM in December 2018, between the patent's 2017 Japanese priority date and
   its 2019 US publication. Canon lists 17 elements in 13 groups, 2.5 m closest focus, 0.17× maximum magnification, nine
   diaphragm blades, and optical image stabilization for the production lens.[2]
4. The patent's unfiltered Numerical Data 2 reaches 17 optical media entries in 13 air-separated groups only when the
   explicit image-side glass block G is counted. The LensVisualizer model draws that filter as a plane-parallel plate
   element behind the 16 powered elements in 12 groups, and keeps it out of `elementCount`. The stored 16/12 count
   therefore should not be compared directly with Canon's marketed 17/13 specification.

Canon also describes two fluorite elements and one Super UD element in the production lens.[2] Those marketed material
identities are not assigned one-for-one to patent elements here. Numerical Data 2 gives refractive-index, Abbe-number, and
relative-partial-dispersion coordinates, not Canon production material names.

## Optical Architecture

The modeled prescription is a compact **telephoto** system. Independent paraxial tracing of the final data arrays gives an
EFL of **391.938134 mm** and an air-equivalent first-vertex-to-image track of **371.260872 mm**, so
`TL/EFL = 0.947244 < 1`. With the 2.20 mm glass block G physically in place the track is **372.010000 mm**
(`TL/EFL = 0.949155`). The air-equivalent Gaussian back focal distance is only **69.862549 mm**, far below the EFL, so the design is not retrofocus.

The patent divides the optical system into three principal units. The final data model further retains the L3 subdivisions
shown in Figure 2A:

| Unit | Modeled focal length | Function in the patent/model                      |
| ---- | -------------------: | ------------------------------------------------- |
| L1   |          +187.624 mm | Fixed positive front system and primary collector |
| L2   |           -87.757 mm | Single negative inner-focus element               |
| L3   |          +246.951 mm | Fixed rear system during focusing                 |
| L3A  |          +116.302 mm | Fixed positive front sub-unit of L3               |
| L3B  |           -43.946 mm | Negative transverse image-stabilization sub-unit  |
| L3C  |           +63.939 mm | Fixed positive rear relay/sub-unit                |

These are **in-situ unit powers**, not the standalone focal lengths stored for individual elements. The distinction matters
especially for the four cemented pairs, whose net powers can differ substantially from the powers of either member in air.

L1 is unusually extended axially: the large front positive meniscus is followed by a long air interval before the denser
cluster that completes the first unit. This arrangement gives the design a relatively short overall track for its focal
length while leaving the front element large enough to support F/2.90. The stop is patent surface 14, positioned between
L1 and L2 as described in ¶0025 and visible in Figure 2A. The patent publishes the stop position but not its clear diameter.

The final model is entirely spherical or plane. No aspherical coefficients are present in Numerical Data 2, no aspheric
surface labels appear in the data file, and no coefficient conversion or scaling transform is applicable.

## Element-by-Element Analysis

The focal lengths below are the **standalone paraxial focal lengths of each physical element in air**, exactly as stored in
the validated data file. Cemented and functional-unit powers are identified separately where relevant.

### L1-1 — Element 1 (G1P), Positive Meniscus

**nd = 1.59522, νd = 67.74. Glass: OHARA S-FPM2 spectral proxy. Standalone f = +332.698 mm.**

G1P is the positive lens closest to the object side and is explicitly singled out by the patent. Conditions (2)–(6) govern
its index, Abbe number, relative partial dispersion, focal length, and meniscus shape because this front lens carries high
ray heights and therefore has disproportionate influence on system size, spherical aberration, and chromatic behavior
(¶0029–¶0053). In the model it functions as the front positive collector of L1.

The S-FPM2 name is deliberately qualified as an optical proxy. Its current OHARA `nd/νd` coordinates match the patent
coordinate, but the patent's Table 1 Knoop-hardness value does not exactly match the current catalog value; the data file
therefore does not assert an unqualified vendor identity.

### L1-2 — Element 2, Biconvex Positive

**nd = 1.43700, νd = 95.10. Glass: HOYA FCD100 spectral proxy. Standalone f = +167.402 mm.**

This high-Abbe positive element adds substantial positive power after the widely separated front element. Its very low
ordinary dispersion complements the stronger-dispersion negative and positive elements that follow within L1. The model
retains FCD100 as a qualified compatible catalog curve. It does not create per-lens C/F/g indices from that curve
or identify the source medium as fluorite or a particular manufacturer's glass.

### L1-3 — Element 3 (G1N), Biconcave Negative

**nd = 1.80610, νd = 33.27. Glass: HOYA NBFD15 spectral proxy. Standalone f = -73.279 mm.**

This is G1N, the first negative lens in L1 as defined by the patent's radii `R1G1N = -287.520 mm` and
`R2G1N = +74.517 mm`. Conditions (8)–(12) specifically concern its dispersion, shape, spacing from G1P, and power
relationship to G1P (¶0041–¶0061). It supplies strong negative standalone power within an otherwise positive front unit and
is therefore an important counterweight to L1's positive collectors.

The 806333 coordinate is not assigned to one manufacturer without qualification. NBFD15 is retained only as the spectral
proxy used by the model.

### L1-4 — Element 4, Plano-Convex Positive

**nd = 1.43700, νd = 95.10. Glass: HOYA FCD100 spectral proxy. Standalone f = +170.478 mm.**

The second 437951 element restores positive power after G1N while retaining the same high-Abbe material coordinate as
Element 2. Its image-side surface is plane, so the element's positive power is concentrated at the object-side convex
surface. Within the modeled L1 power distribution, it helps return the front unit to a strongly positive net power without
requiring another high-dispersion positive element at this location.

### L1-5 — Element 5, Positive Meniscus

**nd = 1.89286, νd = 20.36. Glass: S-NPH4 spectral proxy (source supplier and chemistry unresolved). Standalone f = +153.334 mm.**

This is a high-index, high-dispersion positive meniscus close to the rear half of L1. Its material coordinate is an exact
OHARA S-NPH4 match at patent precision. In the model it contributes positive power while providing a markedly different
dispersion lever from the 437951 elements. That contrast is part of the front system's multi-glass chromatic balancing;
the patent broadly emphasizes distributing chromatic correction through a shortened telephoto system rather than relying
only on the first element (¶0028–¶0040).

### L1-6 — Element 6, Negative Meniscus, D1 Front Member

**nd = 1.83400, νd = 37.16. Glass: S-LAH60 spectral proxy (source supplier and chemistry unresolved). Standalone f = -116.381 mm.**

Element 6 is the negative member of cemented pair D1. It is joined directly to Element 7 at surface 12. Although its
standalone power is appreciably negative, D1 as a cemented pair is only weakly negative, with a verified cemented focal
length of **-1008.698 mm**. The pair therefore provides substantial internal refractive action while contributing little
net power to L1.

### L1-7 — Element 7, Positive Meniscus, D1 Rear Member

**nd = 1.43700, νd = 95.10. Glass: HOYA FCD100 spectral proxy. Standalone f = +126.566 mm.**

Element 7 is the positive, high-Abbe partner of D1. Its positive standalone power largely cancels Element 6's negative
power when the two are cemented. This near-canceling pair sits near the aperture stop, where the smaller ray diameter gives
the design a compact way to adjust refractive and chromatic behavior without adding another air-spaced group.

### L2-1 — Element 8 (Focus), Biconcave Negative

**nd = 1.61800, νd = 63.40. Glass: HOYA PCD4 spectral proxy. Standalone f = -87.757 mm.**

Element 8 is the complete L2 unit, so its standalone focal length is also the modeled L2 focal length. The patent explicitly
assigns L2 negative refractive power and axial motion during focusing while L3 remains fixed (¶0020, ¶0024, claim 15). Its
small diameter relative to L1 is the optical basis for the inner-focus architecture: focusing can be performed by moving a
much lighter internal element rather than translating the full front system.

The patent does not publish finite-focus separations. The close-focus position in the data file is therefore a constrained
reconstruction, discussed separately in the Focus Mechanism section.

### L3A-1 — Element 9, Negative Meniscus, D2 Front Member

**nd = 1.89286, νd = 20.36. Glass: S-NPH4 spectral proxy (source supplier and chemistry unresolved). Standalone f = -218.072 mm.**

Element 9 begins L3A and is cemented to Element 10. Its negative standalone power is overcome by the positive rear member,
so D2 has a verified cemented focal length of **+116.302 mm**. The pair therefore implements the patent's positive L3A
sub-unit rather than behaving like its first element considered in isolation.

### L3A-2 — Element 10, Biconvex Positive, D2 Rear Member

**nd = 1.51742, νd = 52.43. Glass: S-NSL36 spectral proxy (source supplier and chemistry unresolved). Standalone f = +76.078 mm.**

Element 10 supplies the dominant positive standalone power in D2. The S-NSL36 identification matches the catalog coordinate at
patent precision. Cementing it to the high-index S-NPH4-like front member produces the positive L3A group while combining
materials with substantially different dispersion.

### L3B-1 — Element 11, Biconvex Positive, D3 Front Member

**nd = 1.80610, νd = 33.27. Glass: HOYA NBFD15 spectral proxy. Standalone f = +66.161 mm.**

Element 11 begins the image-stabilization sub-unit L3B. It is cemented to Element 12, and the pair has a verified net focal
length of **-289.390 mm** despite Element 11's positive standalone power. This distinction between element power and
cemented in-situ behavior is essential to understanding the negative L3B group specified by the patent.

### L3B-2 — Element 12, Biconcave Negative, D3 Rear Member

**nd = 1.53775, νd = 74.70. Glass: S-FPM3 spectral proxy (source supplier and chemistry unresolved). Standalone f = -52.072 mm.**

Element 12 is the negative, high-Abbe partner that drives D3 to a weak net negative power. S-FPM3 is an exact catalog
coordinate match at the precision used in Numerical Data 2. The cemented construction combines a relatively high-index,
moderate-dispersion positive element with a lower-index, high-Abbe negative element inside the stabilization sub-unit.

### L3B-3 — Element 13, Biconcave Negative

**nd = 1.72916, νd = 54.68. Glass: legacy S-LAL18 spectral proxy (source supplier and chemistry unresolved). Standalone f = -51.177 mm.**

Element 13 follows D3 and completes the negative L3B sub-unit. Together, D3 and Element 13 produce the verified L3B focal
length of **-43.946 mm**. The compatible legacy catalog coordinate is OHARA S-LAL18; the current replacement family is not silently
substituted because its dispersion differs slightly. This match does not identify a historical source supplier or melt.

The patent assigns this complete L3B sub-unit transverse motion for correction of image blur (¶0024, ¶0067). The axial
LensVisualizer prescription remains centered and does not invent an unpublished stabilization decenter range.

### L3C-1 — Element 14, Biconvex Positive

**nd = 1.65412, νd = 39.68. Glass: S-NBH5 spectral proxy (source supplier and chemistry unresolved). Standalone f = +187.331 mm.**

Element 14 begins the fixed rear L3C sub-unit and restores positive power after the negative stabilization group. Its
S-NBH5 label differs from the catalog coordinate only at the source-rounding level in `nd`. In the modeled rear system it acts as
a positive relay element before the final cemented pair.

### L3C-2 — Element 15, Biconvex Positive, D4 Front Member

**nd = 1.72047, νd = 34.71. Glass: S-NBH8 spectral proxy (source supplier and chemistry unresolved). Standalone f = +46.092 mm.**

Element 15 is the strong positive member of D4. The S-NBH8 coordinate matches the patent closely, with only rounding-level
index residual. Its power is moderated by the negative rear member, giving D4 a cemented focal length of **+92.225 mm**.

### L3C-3 — Element 16, Negative Meniscus, D4 Rear Member

**nd = 1.80810, νd = 22.76. Glass: S-NPH1 spectral proxy (source supplier and chemistry unresolved). Standalone f = -86.937 mm.**

Element 16 closes the active refractive prescription. It is a high-index, high-dispersion negative partner to Element 15.
The D4 pair remains net positive, and with Element 14 forms the verified **+63.939 mm** L3C sub-unit. The active model ends
at its rear surface; the patent's following glass block G is drawn as a plane-parallel plate element at its
physical position (7.77 mm behind surface 29) and traced by every analysis.

### G — Source Glass Block / Filter

**nd = 1.51633, νd = 64.14, θgF = 0.5353. Glass: OHARA S-BSL7 spectral proxy; source supplier and chemistry unresolved.**

The original ¶0025 calls G a glass block, for example an optical filter, and ¶0070 assigns the last two surfaces to
that block. Numerical Data 2 gives 2.20 mm thickness, a 7.77 mm physical preceding gap and 60.70 mm following gap.
The model retains its existing drawn working-system filter representation. The original does not name a drop-in
holder or establish lens-versus-camera ownership; that production-holder identity remains a correlation interpretation.
No source camera-cover definition justifies changing the representation in this review. Its 21.5 mm radius is inferred,
consistent with the native filter height and sampled runtime envelope, not a printed clear-aperture dimension.

## Glass Identification and Selection

Numerical Data 2 publishes `nd`, `νd`, and absolute relative partial dispersion `θgF` for **all 17 media**, including G.
Paragraph 0032 (PDF page 10/printed 3) explicitly defines the d/F/C/g Fraunhofer indices, `νd = (nd−1)/(nF−nC)` and
`θgF = (ng−nF)/(nF−nC)`. All source coordinates and ratios remain literal. Each medium now declares d-line reference.
The engine's stored deviation is `dPgF = θgF − (0.6438 − 0.001682 νd)`; all 17 pre-existing deviations correctly
recover the printed ratios and are retained.

The 48 per-lens C/F/g numbers were catalog-anchored reconstructions, not printed or measured source indices. They
are removed. All 17 compatible catalog curves remain qualified spectral proxies, with the genuinely published partial
ratio retained for g-line reconstruction. C/F splitting still comes from the chosen compatible curve, not the original.
This does not establish historical supplier, melt or chemistry, nor a production fluorite/Super UD assignment. A
published partial ratio by itself does not identify a source APD material, so no `apd: "patent"` flag is invented.

| Medium | Source nd / νd  | Source θgF | Retained dPgF | Qualified compatible curve |
| ------ | --------------- | ---------: | ------------: | -------------------------- |
| L1-1   | 1.59522 / 67.74 |     0.5442 |   +0.01433868 | S-FPM2                     |
| L1-2   | 1.43700 / 95.10 |     0.5326 |   +0.04875820 | FCD100                     |
| L1-3   | 1.80610 / 33.27 |     0.5881 |   +0.00026014 | NBFD15                     |
| L1-4   | 1.43700 / 95.10 |     0.5326 |   +0.04875820 | FCD100                     |
| L1-5   | 1.89286 / 20.36 |     0.6393 |   +0.02974552 | S-NPH4                     |
| L1-6   | 1.83400 / 37.16 |     0.5776 |   -0.00369688 | S-LAH60                    |
| L1-7   | 1.43700 / 95.10 |     0.5326 |   +0.04875820 | FCD100                     |
| L2-1   | 1.61800 / 63.40 |     0.5395 |   +0.00233880 | PCD4                       |
| L3A-1  | 1.89286 / 20.36 |     0.6393 |   +0.02974552 | S-NPH4                     |
| L3A-2  | 1.51742 / 52.43 |     0.5564 |   +0.00078726 | S-NSL36                    |
| L3B-1  | 1.80610 / 33.27 |     0.5881 |   +0.00026014 | NBFD15                     |
| L3B-2  | 1.53775 / 74.70 |     0.5392 |   +0.02104540 | S-FPM3                     |
| L3B-3  | 1.72916 / 54.68 |     0.5444 |   -0.00742824 | S-LAL18                    |
| L3C-1  | 1.65412 / 39.68 |     0.5737 |   -0.00335824 | S-NBH5                     |
| L3C-2  | 1.72047 / 34.71 |     0.5834 |   -0.00201778 | S-NBH8                     |
| L3C-3  | 1.80810 / 22.76 |     0.6307 |   +0.02518232 | S-NPH1                     |
| G      | 1.51633 / 64.14 |     0.5353 |   -0.00062000 | S-BSL7                     |

The glass palette alternates very high-Abbe positive materials with higher-index and more dispersive partners across both
the front and rear systems. That strategy is consistent with the patent's stated concern: shortening a fast telephoto
system makes axial and lateral chromatic correction progressively more difficult, so correction cannot be confined to a
single front element (¶0028–¶0040). The data support discussion of relative partial-dispersion structure, but not a claim
that the modeled lens is apochromatic in the formal sense.

## Focus Mechanism

The patent specifies an **inner-focus** system. L1 remains fixed, L2 has negative refractive power and moves axially during
focusing, and L3 remains fixed (¶0020, ¶0024, claim 15). Numerical Data 2 is published only at infinity; no finite-focus
spacing table is given.

The data file therefore uses a **CONSTRAINED_RECONSTRUCTION** rather than presenting a close-focus state as patent data.
Only L2 is translated, and the two adjacent air spaces remain complementary so that their sum is fixed at 41.49 mm:

| State                           |     STO → L2 |      L2 → L3 |               L2 travel |
| ------------------------------- | -----------: | -----------: | ----------------------: |
| Infinity                        |  5.000000 mm | 36.490000 mm |                       0 |
| 2.5 m reconstructed close state | 24.078268 mm | 17.411732 mm | +19.078268 mm imageward |

The 2.5 m endpoint uses Canon's marketed closest-focus distance as the single external constraint.[2] Recomputed from the
final TypeScript arrays, that state gives `|m| = 0.176031`. Canon publishes 0.17× maximum magnification; forcing exactly
0.17× in the same one-degree-of-freedom paraxial model instead gives a physical focus distance of **2.579488 m**. The two
rounded production specifications therefore do not define precisely the same endpoint in the 392 mm patent prescription.
No second axial focusing degree of freedom is introduced to force both values simultaneously.

Canon documents an electronic focus ring for the production lens, and the product designation identifies an USM drive.[2]
Those are production mechanical/electronic characteristics; they do not alter the one-element optical focus model derived
from the patent.

## Chromatic Correction Strategy

The patent's chromatic strategy begins with the unusual material requirements on G1P and G1N. G1P combines a moderately
high index (`nd = 1.59522`) with `νd = 67.74` and `θgF = 0.5442`, while G1N is a much more dispersive negative lens at
`nd = 1.80610`, `νd = 33.27`, and `θgF = 0.5881`. The patent explicitly links those variables to suppression of axial and
lateral chromatic aberration in a shortened telephoto system (¶0035–¶0039, ¶0049–¶0059).

The rest of the prescription repeats that pattern rather than concentrating chromatic correction in one pair. Three
437951 high-Abbe elements appear in L1, while high-index S-NPH4-like material appears in both L1 and L3A. The rear L3B and
L3C systems likewise use cemented combinations with large differences in index and dispersion. This distributed material
palette is consistent with the patent's explanation that a compact telephoto design benefits from chromatic correction on
both sides of the stop.

Compatible catalog curves permit wavelength-dependent calculations beyond a plain Abbe approximation, while
source-derived `dPgF` preserves each printed `θgF` at g. No per-lens C/F/g overrides remain. The detailed C–d–F
shape is still a proxy, not measured patent evidence. The source's high-Abbe media are not identified as Canon's
marketed fluorite or Super UD elements, and no APO designation is asserted.

## Conditional Expressions

The patent supplies fifteen principal design conditions in ¶0031 and ¶0048. Numerical Data 2 exposes several internal
source inconsistencies, so the conditions are evaluated from the printed definitions rather than copied uncritically from
Table 1.

| Condition             | Patent base range                        |                                           Example 2 / model value | Result                                               |
| --------------------- | ---------------------------------------- | ----------------------------------------------------------------: | ---------------------------------------------------- | -------- | ---------------------------------------------------- |
| (1) `LD/f`            | `< 1.0`                                  | 0.947079 from source Table values; 0.947244 from normalized model | Satisfies                                            |
| (2) `ndG1P`           | 1.58–1.80                                |                                                           1.59522 | Satisfies                                            |
| (3) `νdG1P`           | 50–75 in ¶0031; 63–75 in summary/claim 1 |                                                             67.74 | Satisfies both source forms                          |
| (4) `θgF,G1P`         | 0.534–0.560                              |                                                            0.5442 | Satisfies                                            |
| (5) `fG1P/f1`         | 0.40–1.50                                |                                                          1.773218 | Source inconsistency; defined ratio does not satisfy |
| (6) G1P shape factor  | 0.70–5.50                                |                                                          1.588432 | Satisfies                                            |
| (7) `f1/f2`           | -2.80 to -1.20                           |                                                         -2.137999 | Satisfies                                            |
| (8) `νdG1N`           | 24–45                                    |                                                             33.27 | Satisfies                                            |
| (9) `θgF,G1N`         | 0.580–0.595                              |                                                            0.5881 | Satisfies                                            |
| (10) G1N shape factor | -1.00 to -0.10                           |                                                         -0.588346 | Satisfies                                            |
| (11) `dPN/f`          | 0.17–0.45                                |                                                          0.344413 | Satisfies                                            |
| (12) `                | fG1P/fG1N                                |                                                                 ` | 1.50–3.00                                            | 4.540161 | Source inconsistency; defined ratio does not satisfy |
| (13) `f1/f`           | 0.30–0.70                                |                                                          0.478633 | Satisfies                                            |
| (14) `HKG1P`          | 350–500                                  |                                     390 (Table 1 source property) | Satisfies source range                               |
| (15) `dF2/LD`         | 0.20–0.50                                |                                               0.417068 normalized | Satisfies                                            |

Conditions (5) and (12) are not repaired in the prescription. Table 1's condition (5) value of 0.849 is reproduced by
`fG1P/f(system)` rather than the printed `fG1P/f1` definition. Table 1 also prints `fG1N = -167.402 mm`, which is the
sign-reversed standalone focal length of the preceding positive Element 2, not G1N at surfaces 5–6. Using the correctly
identified G1N gives condition (12) = 4.540161 rather than the table's 1.987. These are treated as patent-table errors, not
as reasons to alter Numerical Data 2.

Condition (15) contains a separate reference-plane inconsistency. Table 1's `dF2` follows the physical path through the
rear glass block while `LD` is defined using air-equivalent back focus. Using air-equivalent lengths for both terms, the
model gives `dF2/LD = 0.417068` from `154.840872/371.260872`; the source table's mixed convention gives approximately
`0.419100` from `155.593/371.255`. The model's physical `dF2` through the plate is 155.590 mm, matching the table's
155.593 to rounding. Both ratios remain inside the broad condition.

## Image Stabilization

The patent defines L3B as a negative sub-lens unit that moves in a direction containing a component perpendicular to the
optical axis during correction of image blur (¶0024, ¶0067). The verified axial prescription gives L3B a net focal length
of **-43.946 mm**, consistent with that stated negative power. L3A and L3C remain fixed during stabilization in the patent's
preferred arrangement.

No numerical stabilization decenter, tilt, or displacement range is published for Example 2. The data file therefore
retains L3B as a centered optical sub-unit and labels it `L3B (IS)` for architectural identification only; it does not add
an unsupported lateral-motion control. Canon markets the production EF 400mm f/2.8L IS III USM with image stabilization
equivalent to five shutter-speed stops under its stated test conditions.[2] That production rating is not used as a patent
motion parameter.

## Verification Summary

The final LensVisualizer data model preserves the patent's Numerical Data 2 without uniform scaling (`s = 1`). The
marketed 400 mm f/2.8 identity is stored separately from the design values: **391.938134 mm traced EFL** and **F/2.90**.
The patent's explicit image-side glass block G at surfaces 30–31 (2.20 mm, nd 1.51633, νd 64.14) is drawn as a
plane-parallel plate element: surface 29 keeps the patent's 7.77 mm gap, and 60.70 mm of air follows the plate to the
image. Every analysis traces it; its semi-diameter is a ray-trace estimate because the patent lists none. The physical
model track is **372.010000 mm**; its air-equivalent rear spacing of
**69.920872 mm** gives the **371.260872 mm** air-equivalent track.

The stop position is a patent fact, but its clear size is not. The model uses a stop semi-diameter of **23.608078 mm**,
calibrated so the independently traced entrance pupil reproduces F/2.90. Likewise, the patent does not publish lens
semi-diameters. The modeled clear apertures are inferred from marginal/chief-ray tracing, Figure 2A proportions, the
production envelope, and geometry limits rather than presented as source dimensions.

### Original shape and all-state review — 2026-10-30

Fresh inspection used the original Figure 2A (PDF page 3/sheet 2 of 6), Numerical Data 2 (PDF pages 13–14,
printed 6–7), and the d-line/partial-ratio definition on page 10/printed 3. Pages are native 2560 × 3300 rasters at
300 dpi; a 600 dpi view is upsampling. The optical section was read at native resolution; a 4× nearest-neighbor
viewing aid adds no measurement detail. The long 120.54 mm interval and full track give about 3.7–3.8 native px/mm,
so two-pixel reading uncertainty is about ±0.5 mm before schematic scale and stroke uncertainty. Adopted blank
heights carry approximately ±1–1.5 mm uncertainty. Brackets, focus/IS arrows, SP/G leaders and axis are excluded.

The first blank becomes 69.5 mm from 71 mm; S3 becomes 40 mm from 43 mm; the plano-convex S7/S8 becomes
36.5/36.5 mm from 39/38.5; the positive meniscus S9/S10 becomes 32/32 mm from 35/34.5; S11 becomes 29.5 mm
from 31.5. These heights follow the native outline without changing optical curvatures. The rear D2 group becomes
18.5 mm at S17/S18/S19 from 23.2; D3 S20/S21 becomes 16.5 mm from 22; S24 becomes 17.5 mm from 19.5;
S25/S26 becomes 17.5 mm from 23.5; the final bonded group S27/S28/S29 becomes 20 mm from 24. All other caps
remain, including S4/S5 = 38.4 and S22/S23 = 15.2 mm. No separately resolved outer shoulder or flat cut is authored.

The native drawing suggests more nearly common endpoints, but raising S4/S5 to 39 mm fails the unchanged
0.153 mm intrusion allowance across their 0.170 mm gap. Raising S22/S23 to 16.5 mm gives 5.60 mm intrusion
against 4.887 mm allowed across 5.430 mm. Those trials are rejected; no source R/d is tuned and no opaque bond
land or inferred cut hides the constraint. The retained non-square caps and residual native-outline difference are
explicit geometric limits. The source filter remains 21.5 mm: the largest sampled passing format ray reaches
19.904957 mm at its rear face, leaving the existing margin.

Actual generated SVGs at infinity, half and close focus were compared with native Figure 2A, including the dense rear
cluster. All 21 sampled focus states contain 17 finite, closed, connected element paths and zero hidden renderer trim.
All 3087 full-open pupil launches are aimed; every axial sample (1029 total) and all 63 chiefs clear. Axial/0.6-field/
corner survivors of 49 are **49/37/25** at infinity, **49/45/32** at half focus and **49/48/40** at inferred close focus.
Peripheral transmission remains limited; no full-pupil corner clearance is asserted. The narrow surface, image-circle,
strict aperture and runtime format-corner checks pass with the original tolerances.

The source's 3.16° half-angle reaches 21.817696 mm (100.9% of the 21.64 mm format radius); the independently solved
runtime corner is about 3.1° and clear. The printed image plane stays 0.058323 mm imageward of the Gaussian plane.
The finite cam is unchanged: close gives 2500 mm/|m| = 0.176031; half focus gives 4550.240362 mm/|m| = 0.091785.
Finite spacings are inferred, and IS remains centered because the original supplies no numeric decenter range. These
source, sampled-runtime and production-correlation conclusions are separate; there is no lateral-IS clearance claim.

The active-surface Petzval sum, using `φ/(n·n′)` surface by surface, is **+0.000328666431 mm⁻¹**. The independent ABCD and
sequential reduced-angle traces agree to better than `1e-13` in their system-matrix coefficients. These computations
confirm the numerical transcription used by the analysis.

No aspheres are present. Consequently, there is no patent conic convention to convert and no aspheric coefficient
transformation under scaling. The only reconstructed optical state is close focus; stabilization remains centered because
Example 2 does not provide a lateral displacement table.

## Sources / References

1. **US 2019/0041605 A1**, Shinichiro Saito and Makoto Nakahara, _Optical System and Image Pickup Apparatus_, Canon
   Kabushiki Kaisha, published February 7, 2019. Relevant material: Figure 2A; ¶0020–¶0027; ¶0028–¶0067;
   ¶0069–¶0070; Numerical Data 2; Table 1; claims 1–16.
2. **Canon Camera Museum**, “EF400mm f/2.8L IS III USM.” Official product history and specifications, including December
   2018 marketing date, 17 elements/13 groups, 2.5 m closest focus, 0.17× maximum magnification, nine diaphragm blades,
   two fluorite elements, one Super UD element, electronic focus-ring information, and five-stop IS rating.
   <https://global.canon/en/c-museum/product/ef474.html>
3. **OHARA Corporation**, current optical-glass catalog and individual catalog records used for S-FPM2, S-NPH4,
   S-LAH60, S-NSL36, S-FPM3, S-NBH5, S-NBH8, and S-NPH1 coordinate checks. <https://oharacorp.com/>
4. **HOYA Corporation**, optical-glass data and six-vendor cross-reference used to qualify the 437951, 806333, and
   618634 proxy families. <https://www.hoya-opticalworld.com/english/products/crossreference.html>
5. **SCHOTT**, TIE-29, _Refractive Index and Dispersion_, used for the normal-line definition applied to `dPgF`.
   <https://media.schott.com/api/public/content/aaa572afd854434fb7b3faa4bc46103f>

## 2026-10-30 — Source-Stated Catalog Design Metadata

This metadata-only follow-up preserves the original review date and source inspection. The catalog design focal value is 392.0 mm, taken directly from Numerical Data2, PDF p13 / printed6, bottom-right scalar Focal length392.00mm; continueddata p14/printed7. The prior computed model EFL value 391.9381342837631 mm remains a calculated result, separately qualified in this analysis; it is not a printed source target.

All R/d, media, spectral values, stops, apertures, gaps, focus/zoom controls, source-errata dispositions and retained limitations are unchanged. This correction adds no fresh shape/glass review and makes no claim to resolve an authored reconstruction or production correlation.
