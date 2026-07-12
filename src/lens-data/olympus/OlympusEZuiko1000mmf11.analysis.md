## Patent Reference and Design Identification

**Patent:** DE 2206106 A1  
**Application Number:** P 22 06 106.9-51  
**Priority:** 10 February 1971, Japan 5377-71  
**Filed:** 9 February 1972  
**Published:** 24 August 1972  
**Inventor:** Jihei Nakagawa  
**Applicant:** Olympus Optical Co. Ltd., Tokyo  
**Title:** *Linsensystem für Superteleskope*  
**Embodiment analyzed:** The single worked example

The worked example is the strongest available patent match to the Olympus E.Zuiko Auto-T 1000mm f/11. The identification rests on convergent evidence:

1. The patent applicant is Olympus Optical Co. Ltd.
2. The example is a five-element, five-group refractive super-telephoto, matching the production construction.
3. The patent gives $F=1{:}11$, while the production lens is rated at f/11.
4. The prescription is normalized to $f=100$ and scales uniformly by $10\times$ to the marketed 1000 mm focal length.
5. Olympus literature gives a 2.5° angle of view, a 30 m minimum focus distance, and an f/11–45 diaphragm range; these agree with the production implementation represented by the data file.
6. The patent's 1971 Japanese priority is chronologically compatible with the early OM-system lens.

The identification remains highly probable rather than documentary proof that the patent example was copied unchanged into every production version. The patent does not name the commercial lens, and it provides no barrel, mount, or focusing-mechanism drawing.

The prescription table on patent page 7 requires one numerical emendation. It prints $n_3=1.7817$, but that value produces $f=105.2830$ and $f_B=35.1949$ in the patent's normalized units. Those errors are too large to attribute to ordinary last-digit rounding. Solving independently for the index that reproduces the stated focal length gives $n_3=1.7847259$; solving for the stated back focal distance gives $n_3=1.7847279$. The current OHARA S-TIH11 catalog value is $n_d=1.78472$, with $\nu_d=25.68$, and therefore supplies a catalog-class value within a few parts in $10^6$ of both independent solutions. Substituting $n_d=1.78472$ yields $f=100.0098$ and $f_B=32.5865$.

The data file consequently treats 1.7817 as a typographical error and uses $n_3=1.78472$. It retains the patent's published $\nu_3=25.6$ rather than silently replacing the Abbe number with the modern catalog value. The S-TIH11 name is a present-day catalog equivalent; the patent does not identify the historical glass manufacturer.

All radii and axial distances are then scaled by $10\times$. The resulting computed design focal length is 1000.098 mm; the marketed focal length remains 1000 mm.

## Optical Architecture

The lens is a five-singlet, five-group split-power super-telephoto. Its power sequence is positive–negative–positive / positive–negative. The first three groups form a compact positive objective; the fourth and fifth form a net negative rear unit separated from the front system by a 331.62 mm air space at production scale.

| Assembly | Focal length | Function |
|---|---:|---|
| Groups 1–3 | +516.135 mm | Positive front objective |
| Groups 4–5 | −343.694 mm | Rear telephoto multiplier |
| Complete lens | +1000.098 mm | Production-scale system |

The front-surface-to-image distance at infinity is 701.665 mm, giving a telephoto ratio of $701.665/1000.098=0.70160$. This is a genuine telephoto construction because the front-vertex-to-image track is shorter than the effective focal length.

Patent Figure 1 shows the five singlets and the large central air space but does not draw a diaphragm. The prescription table also gives no stop coordinate. For the renderer and pupil trace, the data file places an inferred stop 1.0 mm behind surface 6, near the front of the large $d_6$ space. With a 44.5 mm stop semi-diameter, the entrance-pupil semi-diameter is 45.459 mm and the computed aperture is f/10.9999. Moving the stop substantially rearward would increase the required front clear aperture; the selected station is therefore a physically plausible modeling choice, not a patent-transcribed dimension.

Patent Figures 2B and 2C are labeled $1^\circ20'$ at the top of the field plots. The patent's aberration check therefore extends to a half-field of $1^\circ20'$ (2°40′ full), slightly beyond the production lens's manufacturer-published 2.5° full angle of view. The inferred semi-diameters were verified against the larger patent field.

## Element-by-Element Analysis

### L1 — Biconvex Positive

$n_d=1.61800$, $\nu_d=63.38$. Glass: 618/634 low-dispersion crown class; current equivalents include OHARA S-PHM52 and Hoya/Hikari PCD4/PSK02-class glasses. Vendor unconfirmed. $f=+233.843$ mm.

L1 is the principal positive collector. Its rear surface is more strongly curved than its front surface, concentrating positive power while beginning the axial chromatic balance against L2. The high Abbe number is consistent with a low-dispersion positive member. The patent provides optical constants only, so the data file records a catalog class rather than claiming a specific historical melt.

### L2 — Biconcave Negative

$n_d=1.75520$, $\nu_d=27.5$. Glass: SF4-class dense flint; OHARA S-TIH4 is a current catalog match. Vendor unconfirmed. $f=-109.968$ mm.

L2 is the strongest negative singlet in the front objective. Its dense-flint dispersion opposes L1's positive crown contribution, while its high index satisfies the patent condition $n_2>1.7$. The focal length quoted here is the standalone thick-lens value in air; its in-situ contribution differs because it operates between L1 and L3 with short intervening air gaps.

### L3 — Biconvex Positive

$n_d=1.78472$ (corrected), $\nu_d=25.6$ (patent; current S-TIH11 catalog: 25.68). Glass: SF11 class; OHARA S-TIH11 is the numerical catalog match. Vendor unconfirmed. $f=+152.600$ mm.

L3 is a high-index, high-dispersion positive singlet. Most of its power is carried by the steep front surface, while the long rear radius is comparatively weak. This positive dense-flint role is central to the patent's power-distribution strategy.

The current S-TIH11 index is also the value that independently restores both patent-stated system focal quantities. This makes the catalog class identification unusually strong, but it still does not establish that Olympus purchased OHARA-branded S-TIH11 for the production lens.

### L4 — Positive Meniscus

$n_d=1.6990$, $\nu_d=30.1$. Glass: SF15-class flint; OHARA S-TIM35 is a current catalog match to the rounded constants. Vendor unconfirmed. $f=+537.654$ mm.

L4 is a weak positive meniscus at the front of the rear unit. It moderates L5's stronger negative power and provides a separate degree of freedom for coma and off-axis correction. Its focal length satisfies the patent's fourth condition. Both radii are positive under the patent convention, with the object-side surface carrying the stronger curvature.

### L5 — Plano-Concave Negative

$n_d=1.56870$, $\nu_d=63.1$. Glass: 569/631 crown class; catalog equivalents include BAL22/PCD2/PSK2-family glasses. Vendor unconfirmed. $f=-207.473$ mm.

L5 supplies most of the rear unit's negative power. The object-side surface is plane and the image-side surface has $R_{10}>0$, producing a plano-concave negative element under the patent's front-to-rear radius convention. Its high Abbe number limits the chromatic cost of the strong rear negative power.

The patent supplies neither a trade name nor partial-dispersion data. The data file therefore records the 569/631 catalog class without assigning a definite glassmaker or chemical family.

## Glass Identification and Chromatic Strategy

| Element | Patent / corrected $n_d$ | Patent $\nu_d$ | Current catalog-class match | Identification status |
|---|---:|---:|---|---|
| L1 | 1.61800 | 63.38 | S-PHM52 / PCD4 / PSK02 class, 618/634 | Class match; vendor unconfirmed |
| L2 | 1.75520 | 27.5 | S-TIH4 / SF4 class, 755/275 | Exact index; Abbe value agrees within patent rounding |
| L3 | 1.78472 | 25.6 | S-TIH11 / SF11 class, 785/256 | Corrected index; catalog class strongly supported |
| L4 | 1.6990 | 30.1 | S-TIM35 / SF15 class, 699/301 | Exact to rounded patent constants |
| L5 | 1.56870 | 63.1 | BAL22 / PCD2 / PSK2 class, 569/631 | Class match; vendor unconfirmed |

L1 and L5 are crowns by dispersion; L2, L3, and L4 are flints. The patent states that the design avoids costly special materials such as fluorite. It invokes *Überachromatismus* in describing the selection of the first three glasses, but that wording is not sufficient evidence of modern apochromatic performance. The patent publishes no anomalous-partial-dispersion values and no multi-line focal positions from which secondary spectrum can be quantified. The design is therefore described as a chromatically corrected all-spherical telephoto, not as a demonstrated APO lens.

## Focus Mechanism

Olympus literature specifies rack-and-pinion focusing and a 30 m minimum focus distance. The patent gives only the infinity prescription and no moving-group or close-focus table. The data file therefore uses a unit-focus model: the optical prescription remains rigid while the complete assembly moves away from the fixed film plane.

An exact paraxial finite-conjugate solution, taking the manufacturer distance as object-to-image-plane distance, gives:

| State | Back focal distance | Added extension | Magnification |
|---|---:|---:|---:|
| Infinity | 325.865 mm | 0 | 0 |
| 30 m | 362.561 mm | 36.695 mm | −0.036692× |

At 30 m, a 36 × 24 mm frame corresponds paraxially to an object field of 981.1 × 654.1 mm. This reproduces Olympus's published 98 × 65 cm field after rounding and supports the unit-focus interpretation. It remains a reconstruction of production behavior, not a focus state published in DE 2206106 A1.

## Conditional Expressions

The patent imposes four conditions. Each is satisfied after correcting $n_3$.

1. $0.45f<f_{123}<0.6f$. The independently computed ratio is $f_{123}/f=0.51608$.
2. $n_2>1.7$ and $n_3>1.7$. The values are 1.75520 and 1.78472.
3. $r_7>0$ and $r_{10}>0$. The scaled radii are +239.28 mm and +117.99 mm.
4. $0.4f<f_4<0.7f$. The independently computed ratio is $f_4/f=0.53760$.

The patent explains that condition (1) balances telephoto compression against aberration correction, condition (2) prevents the second and third groups from requiring excessively steep curvatures, condition (3) chiefly improves sagittal-aberration symmetry over the small field, and condition (4) balances the rear groups' spherical-aberration and coma contributions. The sign condition itself is the precise geometric requirement; generalized descriptions of both rear elements as simply having their convex surfaces toward the object are less reliable than the tabulated radius signs.

## Verification Summary

The prescription was re-entered directly from patent page 7 and evaluated with two independent first-order methods: an ABCD trace in $(y,\theta)$ coordinates and a reduced-angle trace in $(y,n\theta)$ coordinates. The methods agree to numerical precision.

| Quantity | Printed $n_3=1.7817$ | Corrected $n_3=1.78472$ | Patent / production reference |
|---|---:|---:|---:|
| Normalized EFL | 105.2830 | 100.0098 | 100 |
| Normalized BFL | 35.1949 | 32.5865 | 32.58 |
| Production EFL | 1052.830 mm | 1000.098 mm | 1000 mm marketed |
| Production BFL | 351.949 mm | 325.865 mm | 325.8 mm scaled patent value |
| Front objective focal length | — | 516.135 mm | Condition range 450–600 mm |
| Rear unit focal length | — | −343.694 mm | Net negative |
| L4 focal length | — | 537.654 mm | Condition range 400–700 mm |
| Front-to-image track | — | 701.665 mm | Patent objective approximately 0.7$f$ |
| Telephoto ratio | — | 0.70160 | Approximately 0.7 |
| Petzval sum | — | −0.00075962 mm⁻¹ | Surface-by-surface calculation |
| Petzval radius | — | +1316.45 mm | $R_P=-1/P$ under the adopted sign convention |

The Petzval calculation uses

$$
P=\sum_i\frac{\phi_i}{n_i n'_i},\qquad \phi_i=\frac{n'_i-n_i}{r_i},
$$

at every refracting surface. It does not use thin-element focal powers. Under the adopted sign convention, the negative Petzval sum gives $R_P=-1/P=+1316.45$ mm.

The patent gives no clear-aperture table. Semi-diameters are therefore inferred. At infinity and the patent's $1^\circ20'$ half-field, the maximum combined marginal-plus-chief-ray envelope is 46.022 mm at surface 1 and 23.241 mm at surface 7. At the reconstructed 30 m state, using the same patent-equivalent image height, the corresponding maxima are 45.945 mm and 23.221 mm. The selected semi-diameters cover both states.

The geometric checks also pass:

- minimum computed element edge thickness: 2.273 mm at L4;
- maximum spherical rim angle: approximately 20.7°, below the renderer limit;
- maximum front/rear semi-diameter ratio within one element: 1.017;
- tightest signed cross-gap sag check: 0.4109 mm intrusion across the 0.50 mm gap between surfaces 8 and 9, below the 0.45 mm project limit.

## Sources

- DE 2206106 A1, Olympus Optical Co. Ltd., *Linsensystem für Superteleskope*. Page 7 supplies the numerical prescription; pages 3–5 explain the four conditions; page 10 contains the layout and the $1^\circ20'$ aberration-field labels.
- Olympus M-1 system brochure, manufacturer lens table: E Zuiko Auto-T 1000mm F11, 2.5° angle of view, 5 elements / 5 groups, f/11–45, 30 m minimum focus, 98 × 65 cm minimum field, 662 mm length, and 100 mm filter.
- Olympus Sales Information File / OM-system lens tables for the rack-and-pinion focusing designation.
- OHARA official optical-glass catalog entries for S-PHM52, S-TIH4, S-TIH11, and S-TIM35.
- Hoya and Hikari official glass catalogs for PCD4/PSK02-, SF4-, SF11-, SF15-, and PSK2-class cross-checks.
