# NIKON NIKKOR-H Auto 2.8cm f/3.5

## Patent Reference and Design Identification

**Patent:** JP Showa 38-26133 / JPB 1963026133 (昭38-26133)  
**Application Number:** 昭33-37424  
**Filed:** December 26, 1958  
**Published:** December 10, 1963  
**Inventor:** Wakimoto Zenji (脇本善司)  
**Applicant:** Nippon Kogaku Kogyo K.K. (日本光学工業株式会社)  
**Title:** 広角写真レンズ (Wide-Angle Photographic Lens)  
**Embodiment analyzed:** Sole worked example

The patent describes a retrofocus wide-angle photographic lens for still-camera and cine-camera use. The sole numerical example is normalized to $f = 100$, F/3.5, a 75° full field angle, and a back focal distance of 132.5. The data file scales this prescription by 0.28, giving a production-scale computed effective focal length of 28.001 mm and a computed back focal distance of 37.10 mm.

The identification with the production Nikkor-H Auto 2.8cm f/3.5 rests on the following convergent evidence.

1. The patent prescription has six air-separated singlet elements, matching the Nikkor-H designation and the Nikon-published discussion of the lens as a six-element, six-group retrofocus design.
2. The normalized focal length of 100 scales directly to 28 mm at the production scale.
3. The patent maximum aperture is F/3.5, matching the production lens.
4. The patent field angle is 75°; the 135-format production lens is generally specified at about 74°.
5. The back focal distance is greater than the focal length, giving the mirror clearance required by the Nikon F SLR system.
6. Nikon's own historical article identifies the NIKKOR-H Auto 2.8cm f/3.5 as a reversed-telephoto/retrofocus wide-angle lens introduced in March 1960 and attributes the design to Wakimoto Zenji.

The patent text cites the Angénieux inverted-telephoto prior art, but the worked example rearranges the rear group. Instead of the older positive-positive-negative-positive rear group, Wakimoto uses positive-negative-positive-positive behind the front diverging pair, with the negative element placed immediately after the stop.

## Optical Architecture

The lens is a six-element, six-group all-spherical retrofocus wide-angle design. It has no cemented groups and no aspherical surfaces. The power sequence is positive-negative / positive-negative-positive-positive.

The front group, L1-L2, is the retrofocus diverging section. L1 is a weak positive meniscus and L2 is the strong negative meniscus. As a two-element group their verified focal length is -186.22 at the patent scale, or -52.14 mm after scaling. This group displaces the rear principal plane and makes the back focal distance longer than the focal length.

The rear group, L3-L6, is the image-forming positive group. Its verified focal length is +104.40 at the patent scale, or +29.23 mm after scaling. L3 sits in front of the stop as the first strong positive collector. L4, directly behind the stop, is the strongest negative element in the design and supplies much of the chromatic and Petzval correction. L5 and L6 are positive relay elements that complete the rear-group convergence.

The aperture stop lies in the air gap between L3 and L4. The patent gives the total L3-L4 air spacing but does not give a separate stop coordinate, so the data file splits that spacing evenly for rendering and ray-trace aperture placement. This placement follows the patent figure but should be treated as an inferred mechanical position rather than a separately tabulated patent number.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

$n_d$ = 1.6726, $\nu_d$ = 32.2. Glass: SF5 class / Schott SF5 equivalent. $f$ = +572.39 patent units, +160.27 mm scaled.

L1 is a weak positive meniscus with a gently curved front surface and an almost flat rear surface. Its standalone power is small, so its function is not primary convergence. It conditions the wide incoming beam before the strong negative L2 and helps moderate front-group distortion and color without forcing an aggressive first-surface curvature.

The repeated use of the same dense flint glass in L1 and L4 is a deliberate chromatic feature of the prescription, but L1 is much weaker than L4 and should not be treated as an equal achromatizing partner.

### L2 — Negative Meniscus, convex to object

$n_d$ = 1.6212, $\nu_d$ = 60.1. Glass: SK16 class, close to Hikari J-SK16 / Schott N-SK16. $f$ = -136.30 patent units, -38.16 mm scaled.

L2 is the front group's dominant negative element. Its steep rear surface is the shortest-radius refracting surface in the front group and supplies the retrofocus divergence that extends the back focal distance.

The high Abbe number is significant because this element carries strong negative power. A high-dispersion negative front element would make the front group more difficult to balance against the rear group.

### L3 — Biconvex Positive

$n_d$ = 1.6387, $\nu_d$ = 55.3. Glass: Sumita K-SK18 / SK18 class. $f$ = +96.13 patent units, +26.92 mm scaled.

L3 is the first strong positive element of the rear group. It collects the diverging beam from L1-L2 and sends it toward the stop. Its rear surface is very weak compared with its front surface, so most of its power is delivered at the entrance face.

The patent's rear-group rearrangement depends on this pre-stop positive element: the strong post-stop negative L4 is not asked to act as the first collector, but instead works after the stop where its coma and field-curvature contributions can be balanced against the surrounding positives.

### L4 — Biconcave Negative

$n_d$ = 1.6726, $\nu_d$ = 32.2. Glass: SF5 class / Schott SF5 equivalent. $f$ = -56.64 patent units, -15.86 mm scaled.

L4 is the strongest individual element by absolute optical power. It sits immediately behind the aperture stop and is the principal negative member of the rear group. Its dense flint glass and biconcave shape make it the principal rear-group chromatic corrector against L3, L5, and L6.

The patent's central design point is the post-stop placement of this negative lens followed by two positive lenses. That sequence reduces the coma burden that earlier retrofocus rear groups placed on the remaining elements.

### L5 — Positive Meniscus, convex to image

$n_d$ = 1.6582, $\nu_d$ = 50.8. Glass: Schott N-SSK5 / SSK5 class. $f$ = +91.40 patent units, +25.59 mm scaled.

L5 is a positive meniscus with both radii negative in the patent sign convention; it presents its convex side toward the image. It supplies strong positive power mainly through its rear surface and helps the rear group recover convergence after L4.

The element has the thinnest scaled edge margin in the rendered data, so its semi-diameters were kept conservative during the data-file pass. Its semi-diameter values should be read as rendering-safe inferred clear apertures, not patent-published mechanical diameters.

### L6 — Biconvex Positive

$n_d$ = 1.5163, $\nu_d$ = 64.0. Glass: BK7 class, close to Schott BK7 / Ohara BSL7 / CDGM K9 equivalents. $f$ = +201.08 patent units, +56.30 mm scaled.

L6 is a weak positive biconvex relay element adjacent to image space. Its low-dispersion crown glass lets it add final convergence without introducing large residual longitudinal color.

Its location makes it important for residual field behavior. It does not by itself eliminate field curvature, but it reduces the amount of correction that L5 would otherwise have to provide at the rear of the system.

## Glass Identification and Selection

The prescription uses five distinct glass types across six elements. L1 and L4 share the same SF5-class dense flint. The patent itself gives only $n_d$ and $\nu_d$ values; the catalog names below are best-fit modern equivalents, not names printed in the patent.

| Element | $n_d$ | $\nu_d$ | Code | Closest catalog class | Role |
|---|---:|---:|---:|---|---|
| L1 | 1.6726 | 32.2 | 673/322 | SF5 / N-SF5 family | Weak front flint meniscus |
| L2 | 1.6212 | 60.1 | 621/601 | SK16 family | Strong low-dispersion negative front diverger |
| L3 | 1.6387 | 55.3 | 639/553 | K-SK18 / SK18 family | Pre-stop positive collector |
| L4 | 1.6726 | 32.2 | 673/322 | SF5 / N-SF5 family | Strong post-stop flint corrector |
| L5 | 1.6582 | 50.8 | 658/508 | N-SSK5 / SSK5 family | Positive post-stop meniscus |
| L6 | 1.5163 | 64.0 | 516/640 | BK7 / K9 family | Low-dispersion rear positive |

The closest catalog matches checked during re-review were Schott SF5 for L1/L4, Schott N-SK16 or Hikari J-SK16 for L2, Hikari J-SK18 for L3, Schott N-SSK5 or Hikari J-SSK5 for L5, and BK7/K9-family crown for L6. The residuals are small enough for class identification, but the file avoids implying that the patent itself named a vendor glass.

## Focus Mechanism

The production lens uses unit focusing. The patent publishes only the infinity prescription and no close-focus prescription table.

The data file models close focus by increasing only the final back-focus spacing, leaving all internal optical spacings fixed. Using the scaled patent prescription, the 0.6 m close-focus position requires about 1.50 mm of additional image-side extension from the infinity setting. The resulting paraxial magnification is approximately 0.054, or about 1:18.6, consistent with the lens' conservative close-focus specification.

| State | Back focus in data file | Notes |
|---|---:|---|
| Infinity | 37.100 mm | Patent BF = 132.5 × 0.28 |
| 0.6 m close focus | 38.602 mm | Unit-focus extension computed from the scaled prescription |

## Conditional Expressions

The patent claim gives three conditional ranges using $f$ as the focal length. The sole worked example satisfies all three.

| Condition | Patent value | Ratio | Result |
|---|---:|---:|---|
| $0.5f < d(II,III) < 1.2f$ | $d_4 = 92.0$ | 0.920 | Pass |
| $0.15f < d(III,IV) < 0.25f$ | $d_6 = 18.2$ | 0.182 | Pass |
| $f < BF < 1.5f$ | $BF = 132.5$ | 1.325 | Pass |

The second condition is the air space that contains the aperture stop. In the data file this total spacing is preserved; only the stop coordinate inside it is inferred.

## Aberration Correction Strategy

The patent includes a Berck/Seidel coefficient table and aberration curves. The table's summed coma coefficient is near zero, which supports the patent's claim that the rear-group rearrangement materially improves coma correction compared with earlier retrofocus layouts.

The verified Petzval sum is +0.002180 at the patent scale, giving a Petzval radius of approximately 458.6 patent units or 128.4 mm at production scale. This is not a flat-field value; the design still carries meaningful field curvature and astigmatic separation at wide field angles. The patent's Figure 2 likewise shows field behavior increasing toward the edge of the 37.5° semi-field.

The patent text states that distortion is held to roughly one percent. The plotted distortion curve on page 3 remains small for a 1950s retrofocus 28 mm lens, but the graph should be treated as the more reliable guide than a single prose number when describing edge-field behavior.

## Verification Summary

The prescription was re-entered directly from the patent image pages and checked by an independent paraxial $y$-$n u$ trace and ABCD matrix trace.

| Quantity | Patent value | Verified value at patent scale | Scaled value |
|---|---:|---:|---:|
| Effective focal length | 100.0 | 100.005 | 28.001 mm |
| Back focal distance | 132.5 | 132.494 | 37.098 mm |
| Front group focal length, L1-L2 | — | -186.223 | -52.142 mm |
| Rear group focal length, L3-L6 | — | +104.398 | +29.232 mm |
| L5-L6 subgroup focal length | — | +63.277 | +17.718 mm |
| Petzval sum | — | +0.002180 | +0.007787 mm⁻¹ |
| Petzval radius | — | 458.6 | 128.4 mm |

Individual standalone element focal lengths at the patent scale are L1 +572.39, L2 -136.30, L3 +96.13, L4 -56.64, L5 +91.40, and L6 +201.08. After multiplying by 0.28, these are +160.27, -38.16, +26.92, -15.86, +25.59, and +56.30 mm.

## Design Heritage and Context

The Nikkor-H Auto 2.8cm f/3.5 belongs to the first generation of Nikon F wide-angle lenses. Nikon's historical account states that the lens reached the market in March 1960, one year after the Nikon F, and describes it as a reversed-telephoto type designed by Wakimoto Zenji.

Its lasting design interest is the rear-group order: positive, stop, negative, positive, positive. Nikon's own account emphasizes that this change from the older positive-positive-negative-positive retrofocus rear group was the key move that reduced coma flare and made the 28 mm SLR wide-angle design practical.

The patent analyzed here corresponds to the original six-element Nikkor-H / Nikkor-H.C family, not to later 28 mm Nikkor formulas with altered mechanical or optical construction.

## Sources

1. JP Showa 38-26133 / JPB 1963026133, "広角写真レンズ," Wakimoto Zenji, Nippon Kogaku Kogyo K.K., filed December 26, 1958, published December 10, 1963.
2. Nikon Imaging, "NIKKOR - The Thousand and One Nights No.12: NIKKOR-H Auto 2.8cm F3.5," Kouichi Ohshita.
3. Nikon Imaging, "Camera Chronicle: Debut of Nikon F," listing the 1960 NIKKOR-H 2.8cm f/3.5 as a retrofocus wide-angle lens.
4. Schott SF5 and N-SF5 optical-glass datasheets; Schott N-SK16 and N-SSK5 optical-glass datasheets; Hikari J-SK16, J-SK18, and J-SSK5 optical-glass datasheets.
