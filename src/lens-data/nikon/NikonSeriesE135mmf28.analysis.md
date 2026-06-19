## Patent Reference and Design Identification

**Patent:** US 4,303,314
**Application Number:** US 126,350
**Filed:** March 3, 1980; priority March 20, 1979 (JP 54-31788)
**Granted:** December 1, 1981
**Inventor:** Sei Matsui
**Assignee:** Nippon Kogaku K.K.
**Title:** Compact Telephoto Lens
**Embodiment analyzed:** Embodiment 3 / Claim 4
**Total claims:** 4
**Worked examples:** 3

US 4,303,314 discloses a four-group, four-component compact telephoto lens with aperture ratio 1:2.8, angle of view 18–24°, and telephoto ratio 0.92–0.94. The patent's numerical prescriptions are normalized to $f = 100$. Embodiment 3 is the narrow-field version, with $2\omega = 18.1°$; the other two embodiments use $2\omega = 24°$ and correspond to the wider 100 mm class.

Embodiment 3 is identified with the Nikon Series E 135mm f/2.8 by convergent evidence:

1. The patent prescription is four elements in four air-spaced groups, all spherical and with no cemented surfaces. Published specifications for the Series E 135mm f/2.8 list four elements in four groups.
2. The patent aperture ratio is 1:2.8, matching the production lens.
3. The patent field $2\omega = 18.1°$ corresponds to the published 18° field for a 135 mm lens on 135 format.
4. The data file applies the patent-to-production scale factor ×1.35. The resulting paraxial EFL from the rounded prescription is 135.095 mm.
5. The production minimum focusing distance is 1.5 m. A thick-lens conjugate solve at that object-to-film distance gives magnification $m = -0.1111$, or 1:9.00, matching the published maximum magnification.
6. Nikon's own historical account identifies the Nikon Series E 135mm f/2.8 as a 1981 second-round Series E lens designed by Sei Matsui, matching the patent inventor and timing.

A Certificate of Correction, issued May 31, 1983, corrects four textual errors in the patent. It corrects “0.35” to “0.35f” in the conditional expression, corrects a malformed “f1–4” reference, and changes one occurrence of “the” to “and.” The numerical prescription tables are not corrected by the certificate.

## Optical Architecture

The design is a compact Ernostar-type telephoto: positive–positive–negative–positive, with the aperture stop between the negative third element and the positive rear element. Nikon's historical design note describes this architecture as two convex elements followed by a concave element and a final convex element; the patent expresses the same structure in conditional form rather than by the Ernostar name.

The first two positive menisci form a strong front collector. In patent-normalized units, their combined focal length is $f_{12} = 38.329$, or $0.383f$. The negative third element then expands the effective focal length of the first three elements to $f_{123} = 135.883$, or $1.358f$. This positive front group plus negative diverger is the telephoto mechanism: the rear principal plane is pushed forward relative to the physical rear surface, reducing first-surface-to-image track to 92.490 in patent-normalized units.

The rear positive element is comparatively weak. It sits after the stop and after the long L3-to-L4 air gap $d_6 = 31.111$ in the patent table. The data file must include a stop surface even though the patent table only gives the total air gap. The stop position is therefore inferred from Fig. 1 and implemented by splitting $d_6$ into 13.000 + 18.111 in patent-normalized units. This split has no paraxial power and does not alter EFL, BFL, or the conditional-expression checks.

The system is a true telephoto by the usual track/EFL criterion: $92.490 / 100.071 = 0.924$. It is not a retrofocus design; the back focal length is shorter than the effective focal length.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.62041$, $\nu_d = 58.6$. Glass: `620586` patent crown glass; no current catalog match is verified. $f = +103.96$ mm after ×1.35 scaling ($+77.01$ in patent-normalized units).

L1 carries most of its power at the object-side surface: $r_1 = 42.593$ is much stronger than the nearly flat rear radius $r_2 = 374.909$. The element begins the early convergence needed to lower the ray height at the rear surface of L3, the surface the patent identifies as critical for short-wavelength spherical aberration.

The high-index crown choice is governed by condition III, which requires $n_1 > 1.6$ and $\nu_1 > 50$. The printed Abbe number is lower than the modern SK16-family catalog value at the same refractive index, but the patent and certificate do not correct it. The data file therefore preserves the patent dispersion and leaves the glass code unresolved.

### L2 — Positive Meniscus, Convex to Object

$n_d = 1.62041$, $\nu_d = 58.6$. Glass: `620586` patent crown glass; no current catalog match is verified. $f = +102.34$ mm after ×1.35 scaling ($+75.81$ in patent-normalized units).

L2 continues the strong front convergence. It is thicker and more strongly curved than L1, with $r_3 = 30.000$ and $r_4 = 72.507$ in the normalized patent prescription. Together L1 and L2 satisfy the lower-side constraint on $f_{12}$ without needing an additional front element.

The front pair also reduces the marginal-ray height before L3. This is the first of the patent's three stated mechanisms for limiting overcorrection of g-line spherical aberration in a compact f/2.8 telephoto.

### L3 — Negative Meniscus, Sharper Rear Curvature

$n_d = 1.71736$, $\nu_d = 29.52$ catalog value; the patent rounds $\nu_d$ to 29.5. Glass: S-TIH1 (OHARA). $f = -43.33$ mm after ×1.35 scaling ($-32.10$ in patent-normalized units).

L3 is the dominant negative component. Its front surface is weak ($r_5 = 149.507$), while its rear surface is much stronger ($r_6 = 19.644$). The rear surface has the largest single-surface paraxial power in the system, $\phi_6 = -0.03652$ in normalized units.

The patent explicitly identifies the image-side surface of L3 as the place where a decisive amount of short-wavelength spherical aberration is generated. Condition I constrains the strong front-group power, the front-section length $d_1 + d_2 + d_3 + d_4 + d_5$, and $r_6$ to keep that aberration from becoming uncorrectable while preserving compactness.

### L4 — Positive Meniscus, Convex to Object

$n_d = 1.78470$, $\nu_d = 26.1$ in the patent. Glass: `785261` dense flint with line-index backfill; SF56A-class, but no local Sellmeier entry is currently verified. $f = +195.18$ mm after ×1.35 scaling ($+144.58$ in patent-normalized units).

L4 is a weak positive meniscus placed after the stop. It completes the system focal length and gives leverage on Petzval curvature and distortion without adding a cemented interface. The long $d_6$ air gap between L3 and L4 is not arbitrary: the patent states that as $f_{123}$ becomes shorter, positive distortion increases, and a larger L3-to-L4 air space is needed to drive distortion back in the negative direction.

Using a dense flint for a positive rear element is a deliberate aberration-correction trade. The glass satisfies condition III, which requires $n_4 > 1.7$ and $\nu_4 < 30$, but its weak positive power means it should not be treated as the main achromatizing member. In this prescription, the main chromatic counterweight is the strong negative L3; L4 is better understood as a high-index, high-dispersion rear corrector used to complete the compact telephoto balance.

## Glass Identification and Selection

The patent does not name glass catalogs. Identifications below are based on matching $n_d$ and $\nu_d$ against current manufacturer catalogs and on Nikon's Japanese source context.

| Element | Patent $n_d$ | Patent $\nu_d$ | Identification | Catalog $\nu_d$ | Data-file treatment |
|---------|---------------|----------------|------------------------|-----------------|---------------------|
| L1 | 1.62041 | 58.6 | 620586 patent crown glass | none verified | Preserves patent $n_d/\nu_d$ with Abbe fallback |
| L2 | 1.62041 | 58.6 | 620586 patent crown glass | none verified | Preserves patent $n_d/\nu_d$ with Abbe fallback |
| L3 | 1.71736 | 29.5 | S-TIH1 (OHARA) | 29.52 | Direct match within rounding |
| L4 | 1.78470 | 26.1 | 785261 dense flint; SF56A-class | 26.08 | Code-based line-index backfill; vendor uncertain |

The L1/L2 discrepancy is material. OHARA lists S-BSM16 at $n_d = 1.62041$, $\nu_d = 60.29$; SCHOTT lists N-SK16 at $n_d = 1.62041$, $\nu_d = 60.32$. The patent's $\nu_d = 58.6$ instead corresponds to a different crown region, and Embodiment 1 of the same patent already pairs $n_d = 1.62041$ with $\nu_d = 60.3$. That may indicate a copied Abbe-number error in Embodiment 3, but because the certificate leaves the numerical table unchanged, the data file follows the printed value.

The chromatic correction is an ordinary crown/dense-flint achromatizing strategy, not an apochromatic one. The positive front pair supplies most of the early convergence, while the strong negative dense-flint L3 is the principal chromatic counterweight. L4 is also dense flint, but because it is weakly positive it should be described as a rear corrector rather than as a negative chromatic component. The patent publishes only $n_d$ and $\nu_d$, and no ED, fluorite, or anomalous-partial-dispersion glass is present. The data file includes line-index backfill only where a defensible source is already authored; L1/L2 intentionally remain Abbe-only until a coefficient-backed `620586` glass can be sourced.

## Focus Mechanism

The production lens uses unit focusing. The patent provides only the infinity prescription; no internal focus movement or close-focus spacing table is published. The data file therefore changes only the image-side back-focus gap at surface 8.

At the production scale, the infinity back focal length from surface 8 to the image plane is 49.110 mm. Solving the thick-lens conjugate equation for a 1.5 m object-to-film distance gives:

| Quantity | Production-scaled value |
|----------|-------------------------|
| Infinity BFL | 49.110 mm |
| Close-focus BFL at 1.5 m | 64.118 mm |
| Required unit-focus extension | 15.007 mm |
| Magnification | $-0.1111$ |
| Reproduction ratio | 1:9.00 |

For unit focusing, the optical cell moves forward away from the fixed film plane as focus is brought closer. In lens coordinates the image plane is therefore farther behind the last surface at close focus, so the BFL represented in the data file increases.

## Conditional Expressions

The patent states three condition groups. The following values are computed directly from Embodiment 3 in patent-normalized units.

### Condition I — g-Line Spherical-Aberration Control

$$0.35f < f_{12} < 0.4f$$

$$0.2f < d_1 + d_2 + d_3 + d_4 + d_5 < 0.25f$$

$$0.19f < r_6 < 0.21f$$

| Term | Lower bound | Computed value | Upper bound | Result |
|------|-------------|----------------|-------------|--------|
| $f_{12}$ | 35.000 | 38.329 | 40.000 | Satisfied |
| $d_1 + d_2 + d_3 + d_4 + d_5$ | 20.000 | 23.075 | 25.000 | Satisfied |
| $r_6$ | 19.000 | 19.644 | 21.000 | Satisfied |

The three subconditions work together. A strong front group, a limited front-section length, and a controlled L3 rear radius reduce the ray height and refractive burden at the critical negative rear surface of L3.

### Condition II — Distortion Balance

$$1.35f < f_{123} < 1.46f$$

$$0.27f < d_6 < 0.32f$$

| Term | Lower bound | Computed value | Upper bound | Result |
|------|-------------|----------------|-------------|--------|
| $f_{123}$ | 135.000 | 135.883 | 146.000 | Satisfied |
| $d_6$ | 27.000 | 31.111 | 32.000 | Satisfied |

Embodiment 3 places $f_{123}$ close to the lower bound and $d_6$ close to the upper bound. That pairing is consistent with the patent's explanation that a shorter $f_{123}$ tends to increase positive distortion, requiring a larger L3-to-L4 air gap for compensation.

### Condition III — Glass Selection

$$n_1, n_2 > 1.6; \quad n_3, n_4 > 1.7$$

$$\nu_1, \nu_2 > 50; \quad \nu_3, \nu_4 < 30$$

All four elements satisfy the index and dispersion inequalities under the printed patent values used in the data file.

## Semi-Diameter and Data-File Implementation

The patent omits clear-aperture semi-diameters. The data-file semi-diameters are inferred rather than patent-transcribed. The governing constraints were the on-axis f/2.8 marginal-ray bundle, the 52 mm front filter thread of the production lens, element front/rear semi-diameter ratio not exceeding 1.25, positive edge thickness at all rims, and signed cross-gap sag intrusion not exceeding 90% of the air gap.

The selected front semi-diameter is 25.785 mm after production scaling, intentionally close to the physical aperture implied by a 52 mm filter thread. The inferred stop semi-diameter is 12.285 mm after scaling. This produces the correct f/2.8 entrance pupil in the paraxial trace for the adopted stop position. Wide-open full-diagonal off-axis rays vignette at the front group; this is an expected consequence of the compact 135mm f/2.8 geometry rather than a transcription error.

## Verification Summary

Independent y–$n u$ paraxial tracing and ABCD matrix tracing agree to better than $10^{-6}$ in the quantities below. Unless otherwise stated, values are in patent-normalized $f = 100$ units.

| Quantity | Patent / production reference | Computed value | Note |
|----------|-------------------------------|----------------|------|
| System EFL | $f = 100$ | 100.071 | Rounded patent data |
| Production EFL after ×1.35 scaling | 135 mm nominal | 135.095 mm | Matches within 0.071% |
| Half field | $\omega = 9.05°$ | 9.05° | From patent $2\omega = 18.1°$ |
| Back focal length | Not tabulated | 36.378 | 49.110 mm after scaling |
| First-surface-to-image track | Telephoto ratio 0.92–0.94 | 92.490 | Ratio 0.924 |
| $f_{12}$ | Condition I | 38.329 | Satisfied |
| $f_{123}$ | Condition II | 135.883 | Satisfied |
| Petzval sum | Not tabulated | +0.000827 | Surface-by-surface $\phi/(n n')$ formula |
| Petzval radius | Not tabulated | 1208.9 | 12.1× EFL |
| Magnification at 1.5 m | Published 1:9 | 1:9.00 | Unit-focus solve |

The standalone production-scaled element focal lengths used in the data file are L1 = +103.96 mm, L2 = +102.34 mm, L3 = −43.33 mm, and L4 = +195.18 mm. These are standalone in-air element focal lengths; they should not be read as the in-situ contribution of each component inside the full telephoto system.

## Design Heritage and Context

The Nikon Series E 135mm f/2.8 was part of the second round of Series E lenses released in 1981, primarily for the American market. Nikon's historical account states that the Series E line was developed with reduced size, weight, and price as explicit constraints, using simplified mechanics and plastic where practical. The 135mm f/2.8 is a partial exception mechanically because it includes a built-in hood and more metal exterior construction than several other Series E lenses.

The design should be compared against the contemporary AI Nikkor 135mm f/2.8, not treated as the same optical formula. Published sources list the Series E lens as 4 elements / 4 groups with a 1.5 m minimum focusing distance, while the AI-S Nikkor 135mm f/2.8 used 5 elements / 4 groups and focused closer. This distinction is important because US 4,303,314 is a four-component compact telephoto patent, not the five-element Nikkor AI-S prescription.

## Sources

1. US 4,303,314, “Compact Telephoto Lens,” Sei Matsui, Nippon Kogaku K.K., granted December 1, 1981; Certificate of Correction issued May 31, 1983.
2. Nikon Imaging, Kouichi Ohshita, “The Thousand and One Nights No.76: Nikon Series E 135mm f/2.8,” https://imaging.nikon.com/imaging/information/story/0076/.
3. JAPB, “Data sheet: Nikon series E 135 mm f/2.8,” https://japb.net/gear/gear-review-index/ds_nikone135f28/.
4. MIR, “Nikon Series E lenses — 100–135mm focal length,” https://www.mir.com.my/rb/photography/hardwares/classics/emfgfg20/eserieslenses/htmls/100135mm.htm.
5. OHARA Inc., optical glass product table, S-BSM16 and S-TIH1 entries, https://www.ohara-inc.co.jp/product/01000/.
6. SCHOTT, optical glass datasheet SF56A, https://media.schott.com/api/public/content/7428154cd0e04bd5a0cff3defb79443c?v=d460f7da.
7. SCHOTT, Technical Information TIE-19, N-SK16 reference data, https://media.schott.com/api/public/content/63b62a0d73a640efa8c6fde92f2ad5c2?v=97a6a05a.
