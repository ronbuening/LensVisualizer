# Canon EF 200mm f/1.8 L USM — JP H01-102413 A, Numerical Example 1

## Patent Reference and Design Identification

- **Patent:** JP H01-102413 A (JP 1989-102413 A)
- **Application number:** JP 62-260854
- **Filed:** 15 October 1987
- **Published:** 20 April 1989
- **Inventors:** Hideki Ogawa (小川秀樹); Sadatoshi Takahashi (高橋貞利)
- **Applicant:** Canon Inc.
- **Title:** 大口径比望遠レンズ (*Large-Aperture-Ratio Telephoto Lens*)
- **Embodiment analyzed:** Numerical Example 1 (数値実施例1)

Numerical Example 1 is the strongest match to the powered optical core of the Canon EF 200mm f/1.8 L USM. The identification rests on several independent correspondences:

1. **Focal length and aperture.** The patent gives $f=200.00000$ mm and $F\mathrm{NO}=1:1.86$. Canon marketed the production lens as 200 mm f/1.8. The manufacturer value governs the product specification; 1.86 is retained as the patent design aperture.
2. **Format coverage.** The patent gives a full field $2\omega=12.3^\circ$. At 200 mm, this corresponds to a rectilinear image-circle diameter of $2f\tan(6.15^\circ)=43.100754$ mm, consistent with the 36 × 24 mm frame diagonal.
3. **Close focus.** The patent tabulates variable spacings at infinity and 2.5 m. A finite-conjugate paraxial trace with the infinity image plane held fixed places the close object 2499.576311 mm from that plane and gives $|m|=0.090896\times$, reproducing Canon's 2.5 m minimum focus and 0.09× maximum magnification.
4. **Special-element signature.** L1, L2, and L4 all use $n_d=1.49700$, $\nu_d=81.6$. Canon specifies three UD elements, and its official block diagram marks these same three front-group positions.
5. **Construction.** The patent prescription contains ten powered elements in eight air-spaced groups. Canon specifies 12 elements in 10 groups. Its block diagram shows two additional plane-parallel groups, apparently a front protective plate and the rear drop-in-filter group. Their materials and dimensions are not prescribed by the patent. The data file therefore models only the ten powered elements and, in accordance with the project specification, excludes the filter.
6. **Focus architecture.** Only the compact cemented second group moves, by 14.49 mm toward the image between infinity and 2.5 m. This is a single-group rear-focus design. USM is a production specification; the patent does not identify the motor technology.
7. **Timing.** The October 1987 filing closely precedes Canon's November 1988 market introduction.

Examples 2 and 3 are weaker matches. Example 2 is a 295 mm design with an 8.4° field and a 3.5 m close-focus state. Example 3 is 195 mm, but its front group uses two $n_d=1.43387$, $\nu_d=95.1$ fluorite-like elements rather than the three 497816-class positions that correlate with Canon's three-UD production diagram.

## Optical Architecture

The powered core is a three-principal-group positive–negative–positive rear-focus design:

- **G1, R1–R10:** five air-spaced elements, three positive and two negative; verified $f_1=+160.662985$ mm.
- **G2, R11–R13:** a cemented positive/negative doublet with net negative power; verified $f_2=-107.284922$ mm. This is the sole focusing group.
- **G3, R14–R18:** a cemented negative/positive pair followed by a positive singlet; verified $f_3=+109.492850$ mm.

All 18 powered surfaces are spherical. The patent gives no aspheric equation, conic constants, polynomial coefficients, or aspheric surface designators.

The patent title uses “telephoto” in the broad photographic-category sense. Under the strict optical compactness criterion, however, the powered prescription is not a telephoto-ratio design. Its first-surface-to-image track is 234.499219 mm, so $\mathrm{TL}/\mathrm{EFL}=1.172399>1$. It is therefore more precisely classified as a long-focus lens with a positive–negative–positive rear-focus architecture.

The prescription uses the standard left-to-right radius convention: $R>0$ places the center of curvature toward the image. The refractive indices are d-line values. The patent's one-decimal Abbe numbers and the catalog matches are consistent with $n_d$ and $\nu_d$, not $n_e$.

## Element-by-Element Analysis

### L1 — Biconvex Positive

**$n_d=1.49700$, $\nu_d=81.6$. Glass: S-FPL51 / 497816 class (OHARA; supplier inferred). Standalone in-air $f=+194.863158$ mm.**

L1 is the first large positive collector in G1. Its low dispersion permits substantial positive front-group power while limiting longitudinal chromatic error. It is one of the three positions that correlate with Canon's three UD elements.

### L2 — Positive Meniscus, convex to object

**$n_d=1.49700$, $\nu_d=81.6$. Glass: S-FPL51 / 497816 class (OHARA; supplier inferred). Standalone in-air $f=+272.181368$ mm.**

L2 continues the low-dispersion positive collector. Its meniscus form distributes positive power across several surfaces rather than concentrating it in one steep element.

### L3 — Biconcave Negative

**$n_d=1.65412$, $\nu_d=39.7$. Glass: BPH5 (historical OHARA; supplier inferred). Standalone in-air $f=-145.573569$ mm.**

L3 supplies negative power and substantially higher dispersion than L1 and L2, forming the principal chromatic opposition in the front group. OHARA's current all-products catalog retains the discontinued BPH5 record. Its 654397 coordinate and computed C/d/F/g indices match the patent values essentially digit-for-digit. Modern S-NBH5 shares the rounded coordinate but has a slightly different dispersion fit, so the historical BPH5 record is the more precise classification.

### L4 — Positive Meniscus, convex to object

**$n_d=1.49700$, $\nu_d=81.6$. Glass: S-FPL51 / 497816 class (OHARA; supplier inferred). Standalone in-air $f=+154.436378$ mm.**

L4 is the strongest of the three standalone 497816-class positive elements. It restores convergence after L3 and occupies the third position highlighted as UD in Canon's production diagram.

### L5 — Negative Meniscus, convex to object

**$n_d=1.69680$, $\nu_d=55.5$. Glass: S-LAL14 / LAL14 class (OHARA; supplier inferred). Standalone in-air $f=-281.405845$ mm.**

L5 is the weak negative rear member required by the patent's first-group description. It sits immediately before variable gap D10 and shapes the bundle delivered to the moving focus doublet.

### L6 — Positive Meniscus, concave to object

**$n_d=1.84666$, $\nu_d=23.9$. Glass: PBH53 (historical OHARA; supplier inferred). Standalone in-air $f=+139.100259$ mm.**

L6 is the positive component of the cemented focus doublet. Its very high index permits strong interface power in a compact element. The quoted focal length is the standalone air-bounded value; it does not describe L6's in-situ contribution within the cemented pair. OHARA's discontinued PBH53 polynomial reproduces the patent's C/d/F/g indices directly. Modern S-NPH53 shares the rounded 847239 coordinate but uses a distinct dispersion fit.

### L7 — Biconcave Negative

**$n_d=1.61340$, $\nu_d=43.8$. Glass: BPM4 (historical OHARA; supplier inferred). Standalone in-air $f=-60.288767$ mm.**

L7 is cemented to L6 and dominates the pair's negative power. OHARA's discontinued BPM4 polynomial reproduces the patent's C/d/F/g indices to the published precision. The complete L6+L7 assembly has $f=-107.284922$ mm and moves as a rigid unit during focusing.

### L8 — Negative Meniscus, concave to object

**$n_d=1.65412$, $\nu_d=39.7$. Glass: BPH5 (historical OHARA; supplier inferred). Standalone in-air $f=-58.224609$ mm.**

L8 begins G3 with the strongly object-concave negative surface required by the claims. It is cemented to L9. The patent constrains this pair through the difference in the glasses' partial-dispersion ratios and Abbe numbers.

### L9 — Positive Meniscus, convex to image

**$n_d=1.65160$, $\nu_d=58.6$. Glass: S-LAL7 class (historical OHARA spectral match; supplier inferred). Standalone in-air $f=+71.057526$ mm.**

L9 is the positive component of the first cemented pair in G3. Historical OHARA S-LAL7 lists $n_d=1.651597$, $\nu_d=58.55$, which round to the patent values, and $\theta_{g,d}=1.2379$, close to the patent's $\theta_{3b}=1.238095$. HIKARI J-LAK7 matches the six-digit code formed from the rounded patent values, but its published $\theta_{g,d}\approx1.2365$ is less consistent with the patent's independent partial-dispersion fingerprint. The OHARA assignment is therefore the stronger catalog match, although the supplier remains unproven.

L9 is strongly positive as an isolated air-bounded element, but the cemented L8+L9 pair is weakly negative at $f=-951.465248$ mm. This distinction between standalone and in-situ power is analytically significant.

### L10 — Biconvex Positive

**$n_d=1.61800$, $\nu_d=63.4$. Glass: S-PHM52 / PHM52 class (OHARA; supplier inferred). Standalone in-air $f=+112.566809$ mm.**

L10 follows the weakly negative rear cemented pair and makes G3 net positive. Its moderate index and relatively high Abbe number provide the final converging power without adding another 497816-class element.

## Glass Identification and Selection

The patent publishes optical constants but no manufacturer names. The assignments below are catalog matches, not proof of Canon's supplier. Manufacturer data were used directly; modern replacement names were not treated as historical identities merely because they occupy nearby $n_d/\nu_d$ coordinates.

| Patent $n_d/\nu_d$ | Elements | Best catalog identification | Assessment |
|---:|---|---|---|
| 1.49700 / 81.6 | L1, L2, L4 | S-FPL51 (OHARA) | Exact 497816 coordinate; low-dispersion fluorophosphate class. Current catalog $\Delta\theta_{g,F}=+0.0280$. |
| 1.65412 / 39.7 | L3, L8 | BPH5 (historical OHARA) | Discontinued catalog record; exact 654397 coordinate and C/d/F/g spectral match. |
| 1.69680 / 55.5 | L5 | S-LAL14 / LAL14 (OHARA) | Exact 697555 coordinate to patent precision; dense lanthanum crown. |
| 1.84666 / 23.9 | L6 | PBH53 (historical OHARA) | Discontinued catalog record; exact 847239 coordinate and C/d/F/g spectral match. |
| 1.61340 / 43.8 | L7 | BPM4 (historical OHARA) | Discontinued catalog record; exact 613438 coordinate and C/d/F/g spectral match. |
| 1.65160 / 58.6 | L9 | S-LAL7 class (historical OHARA) | Catalog $n_d/\nu_d$ round to the patent values; $\theta_{g,d}=1.2379$ closely matches patent $\theta_{3b}=1.238095$. |
| 1.61800 / 63.4 | L10 | S-PHM52 / PHM52 (OHARA) | Exact 618634 coordinate; phosphate crown. |

The three 497816-class elements form the principal low-dispersion positive set in G1. L3 and L5 provide negative power at materially different dispersion levels. The rear cemented pairs serve different purposes: L6/L7 creates a compact net-negative moving group, while L8/L9 satisfies the patent's explicit secondary-spectrum condition.

## Focus Mechanism

The design uses single-group rear focus. G1 and G3 remain fixed; cemented negative group G2 moves 14.49 mm toward the image.

| Spacing | Infinity | 2.5 m | Change |
|---|---:|---:|---:|
| D10, R10 to R11 | 21.00 mm | 35.49 mm | +14.49 mm |
| D13 total, R13 to R14 | 32.20 mm | 17.71 mm | −14.49 mm |
| D10 + D13 | 53.20 mm | 53.20 mm | 0.00 mm |
| Estimated R13 to STO | 24.20 mm | 9.71 mm | −14.49 mm |
| Estimated STO to R14 | 8.00 mm | 8.00 mm | 0.00 mm |

The equal and opposite gap changes conserve the R1–R18 vertex length at 162.410000 mm. With the image plane fixed at the infinity-state back focal distance of 72.089219 mm, the close-focus prescription images an object 2265.077093 mm in front of R1. Adding the invariant first-surface-to-image track gives 2499.576311 mm from object to image plane. The transverse magnification is $-0.090896$, matching the magnitude of Canon's 0.09× specification.

The close-spacing layout has an EFL of 199.119051 mm and a collimated back focal distance of 53.990127 mm. These are diagnostics for collimated input at the close-focus spacing state; the finite-conjugate image plane remains 72.089219 mm behind R18.

## Chromatic Correction Strategy

Chromatic correction is distributed across all three principal groups. G1 combines three positive 497816-class low-dispersion elements with two negative elements of different dispersion. The patent describes the L6/L7 focus doublet as balancing chromatic variation during focusing and g-line spherical-aberration flare. G3 begins with the BPH5/S-LAL7-class cemented pair governed by condition (4).

The evidence supports the narrower statement that the design deliberately controls secondary spectrum. It does not justify assigning an unqualified whole-lens apochromatic classification solely from $n_d/\nu_d$ data.

## Conditional Expressions

The patent states four conditions:

$$
0.7 < \frac{f_1}{f} < 0.85
$$

$$
0.45 < \frac{|f_2|}{f} < 0.6
$$

$$
2.5 < |\phi_{3a}|f < 4.5
$$

$$
\left|\frac{\theta_{3a}-\theta_{3b}}{\nu_{3a}-\nu_{3b}}\right| < 0.002
$$

Here $f_1$ and $f_2$ are the first- and second-group focal lengths; $\phi_{3a}$ is the power of the object-side surface of G3; and the fourth condition uses the partial-dispersion ratios and Abbe numbers of the negative and positive components of G3's first cemented pair.

| Condition | Patent Example 1 | Independently recomputed | Limit | Result |
|---|---:|---:|---:|---|
| $f_1/f$ | 0.8033003 | 0.803314927 | 0.7–0.85 | Satisfies |
| $|f_2|/f$ | 0.5364219 | 0.536424610 | 0.45–0.60 | Satisfies |
| $|\phi_{3a}|f$ | 3.7234400 | 3.723466629 | 2.5–4.5 | Satisfies |
| $|(\theta_{3a}-\theta_{3b})/(\nu_{3a}-\nu_{3b})|$ | 0.0017857 | 0.001785714 | <0.002 | Satisfies |

The first three recomputations use the patent's nominal $f=200.0$ mm, matching the convention in its correspondence table. The fourth uses the patent-published $\theta_{3a}=1.271845$ and $\theta_{3b}=1.238095$ because rounded $n_d/\nu_d$ values alone cannot reproduce those ratios exactly.

## Verification Summary

All load-bearing first-order quantities were recomputed from a fresh transcription of Numerical Example 1. The paraxial trace used $[y,\nu]$ coordinates, where $\nu=nu$, with surface power $\phi=(n'-n)/R$ and translation $d/n$. Petzval curvature was recomputed independently with the required surface term $\phi/(nn')$.

| Quantity | Patent or manufacturer value | Independently computed | Assessment |
|---|---:|---:|---|
| System EFL, infinity | 200.000000 mm | 200.016526 mm | +0.00826%; consistent with rounded prescription data |
| System EFL, close-spacing layout | not tabulated | 199.119051 mm | Collimated-input diagnostic |
| G1 focal length | 160.660060 mm | 160.662985 mm | +0.002925 mm |
| G2 focal length | −107.284380 mm | −107.284922 mm | −0.000542 mm |
| G3 focal length | not tabulated | +109.492850 mm | Verified |
| L6+L7 cemented net | not separately tabulated | −107.284922 mm | Equals G2 |
| L8+L9 cemented net | not tabulated | −951.465248 mm | Weakly negative in situ |
| R1–R18 vertex length | not tabulated | 162.410000 mm | Invariant with focus |
| Infinity BFD from R18 | not tabulated | 72.089219 mm | Fixed image-plane gap used in close-focus trace |
| R1-to-image total track | not tabulated | 234.499219 mm | $\mathrm{TL}/\mathrm{EFL}=1.172399$ |
| Close object-to-image distance | 2.5 m state | 2499.576311 mm | −0.423689 mm from nominal |
| Close magnification magnitude | 0.09× | 0.090896× | Agreement |
| Petzval sum | not tabulated | +0.000627214 mm⁻¹ | Surface-by-surface |
| Petzval radius | not tabulated | −1594.351510 mm | Image-space sign convention |
| Image circle from $2\omega=12.3^\circ$ | 35 mm coverage | 43.100754 mm | Consistent with 36 × 24 mm diagonal |

The 0.016526 mm EFL residual is small relative to the patent's three-decimal radii and two-decimal thicknesses. It supports the transcription rather than indicating a radius-sign or refractive-index error.

## Aperture-Stop and Semi-Diameter Reconstruction

The patent gives neither an aperture-stop coordinate nor clear semi-diameters. Canon's production block diagram places the diaphragm in D13, between the moving focus doublet and G3. The data file uses a working estimate 8.00 mm before R14. This axial coordinate is inferred from the diagram and is not a patent value.

At infinity, the inferred pre-stop magnification gives an entrance-pupil semi-diameter of 53.767883 mm for the patent's f/1.86 aperture and a physical stop semi-diameter of 19.438574 mm. Semi-diameters were then evaluated with both marginal and chief rays at infinity and at the 2.5 m state. The on-axis marginal trace sets the minimum clear-aperture baseline; the chief-ray trace quantifies field-dependent clipping rather than forcing an implausible zero-vignetting envelope.

In this stop reconstruction, an unvignetted f/1.86 bundle at the full 6.15° half-field would require R1 to have a 93.535501 mm semi-diameter. Canon's complete lens has a maximum barrel radius of only 65 mm, so full-field mechanical vignetting is unavoidable and a zero-vignetting semi-diameter reconstruction would be physically indefensible. The selected R1 semi-diameter is 57.0 mm, with the remaining surface apertures tapered from the marginal/chief-ray envelopes and the patent and production outlines.

The final semi-diameter set independently passes the binding geometry checks at both focus states:

- maximum $sd/|R|=0.895796$ at R10, below the 0.90 spherical-rendering limit;
- maximum front/rear semi-diameter ratio within an element = 1.166134;
- minimum computed edge thickness = 1.632029 mm at L10;
- maximum signed cross-gap sag-intrusion fraction = 0.897105 at R4–R5, below the 0.90 limit.

The infinity on-axis f/1.86 marginal bundle is contained. At 2.5 m, the same physical-stop edge ray exceeds the inferred R5 semi-diameter by 0.230897 mm and R10 by 2.143867 mm, with R10 controlling. This implies additional close-focus aperture clipping in the rendering reconstruction. Because the patent publishes no clear apertures, these values are validated modeling dimensions, not production manufacturing dimensions.

## Sources

1. Canon Inc., **JP H01-102413 A**, *大口径比望遠レンズ*, especially claims on printed pp. 71–72, design discussion on pp. 73–74, Numerical Example 1 on p. 75, and correspondence table and figures on p. 77.
2. Canon Camera Museum, **EF200mm f/1.8L USM**, official construction, focusing, aperture, dimensions, UD count, and optical block diagram: <https://global.canon/en/c-museum/product/ef279.html>.
3. OHARA Inc., **Optical Glass Catalog**, 1 July 2026 all-products Zemax dataset, including discontinued BPH5, PBH53, BPM4, and S-LAL7 records: <https://www.ohara-inc.co.jp/en/product/catalog/>.
4. HIKARI GLASS CO., LTD., **J-LAK7 optical-data sheet**, used as a cross-vendor comparison for the L9 identification: <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/LAK/J_LAK7.pdf>.
