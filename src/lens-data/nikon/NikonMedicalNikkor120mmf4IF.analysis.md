## Patent Reference and Design Identification

- **Patent:** US 4,437,734 A
- **Application Number:** US06/294,524
- **Priority:** August 27, 1980
- **Filed:** August 20, 1981
- **Granted:** March 20, 1984
- **Inventor:** Yutaka Iizuka
- **Assignee:** Nippon Kogaku K.K.
- **Title:** *Lenses capable of close-up photography*
**Embodiment analyzed:** Example 1

The prescription is the unscaled Example 1 design from US 4,437,734 A. The data file retains the patent's 121.168 mm design focal length separately from the marketed 120 mm designation and uses the patent's stated f/4 design aperture. The production correlation is fixed to the Nikon Medical-Nikkor 120mm f/4 IF, but it should be understood as a source-supported correlation rather than a Nikon statement that “Example 1” is the production prescription. [1, Example 1; claim 7]

Several independent features converge on that identification:

1. Example 1 is a 121.168 mm f/4 design, closely matching the production 120 mm f/4 class without scaling. [1, Example 1; claim 7]
2. The prescription contains nine glass elements in six air-separated components. Nikon's instruction manual specifies nine elements in six groups for the prime lens. [1, Fig. 3; Example 1; 3, specifications]
3. The patent uses a converging-diverging-converging three-functional-group architecture and focuses by translating only the diverging second group. Nikon's historical account describes the production lens as a convex-concave-convex three-group system in which the concave group performs focusing. [1, abstract; Fig. 1; 2, § IV]
4. The patent's close state is approximately 1:1. After normalizing the patent's object-to-first-surface distance to the film plane, the computed object-to-image distance is 345.444 mm, consistent with Nikon's rounded 0.35 m production distance at 1:1. [1, Example 1; claim 7; 3, reproduction-ratio table]
5. The patent priority and filing dates immediately precede Nikon's late-1981 production release, and Nikon identifies Yutaka Iizuka as the optical designer. [1, front page; 2, § II]

The detachable subject-side close-up attachment used for the production system's 0.8×–2× range, including magnifications above 1:1, is not part of Example 1. Nikon describes it as a removable achromatic doublet, while the base lens itself covers approximately 1:11 to 1:1 in production use. The attachment is therefore excluded from this prescription. [2, §§ III–V; 3, reproduction-ratio table]

## Optical Architecture

The optical system contains nine elements in six air-separated physical components, organized as three functional groups with positive-negative-positive power distribution. The first and third functional groups remain fixed; the second group translates for internal focusing. [1, abstract; Fig. 3; Example 1]

**G1** spans L1-L3 and has a computed focal length of +60.484000 mm, reproducing the patent's +60.484 mm value. It contains a cemented front component D1 followed by a positive singlet. The patent specifically requires the first group to contain two positive components, including a cemented component, so that aberration variation remains controlled as photographic magnification changes. [1, conditions (5)–(6); Example 1]

**G2** is the cemented L4-L5 doublet. Its computed focal length is -52.500126 mm, reproducing the patent's -52.5 mm value. This is the only moving optical group. The patent's defining condition is that rays leaving G2 and entering G3 remain substantially parallel to the optical axis throughout focus travel. [1, abstract; condition (7); Example 1]

**G3** spans L6-L9 and has a computed focal length of +105.173437 mm, reproducing the patent's +105.173 mm value. It consists of a cemented meniscus component, a negative meniscus, and a final positive element. The aperture stop lies immediately in front of this group, at the patent-published position 1.8 mm before surface r9. [1, preferred-embodiment description; Example 1]

The patent explicitly develops the concept from an inner-focusing telephoto system, and Nikon describes the production design as derived from telephoto-zoom thinking. [1, Background and Summary; 2, § IV] That historical lineage is distinct from the LensVisualizer quantitative architecture label: the complete Example 1 model has a first-surface-to-image track of 169.731 mm and `TL/EFL = 1.40080`, so it does not satisfy the project rule `TL/EFL < 1` for a telephoto classification. Its back focal distance is also less than its effective focal length, so it is not retrofocus by the project rule.

All fifteen refracting surfaces are spherical. No aspherical equation, conic constant, or polynomial coefficient is present in Example 1, so no asphere section is applicable. [1, Example 1; claim 7]

## Element-by-Element Analysis

### D1 — L1 + L2, Cemented Front Component of G1

**L1:** nd = 1.80518, νd = 25.5. Glass: 805255 — dense-flint class (vendor unresolved). f = -73.852541 mm.

**L2:** nd = 1.71300, νd = 53.9. Glass: 713539 — lanthanum-crown class (vendor unresolved). f = +49.949544 mm.

The element focal lengths above are standalone thick-element powers in air. They are not the power of the cemented component. Cementing L1 to L2 produces a net positive D1 component with a computed focal length of +149.097057 mm.

This pairing follows the patent's specified first-group structure: a cemented positive component is followed by a separate positive component. The patent identifies chromatic correction as the primary purpose of the cemented component in G1. [1, first-group preferred structure and conditions (5)–(6)] The large dispersion contrast between L1 and L2 is therefore directly consistent with the stated function, although the patent does not identify a glass vendor or publish line indices sufficient to assign anomalous partial-dispersion behavior.

### L3 — Rear Positive Component of G1

**L3:** nd = 1.71300, νd = 53.9. Glass: 713539 — lanthanum-crown class (vendor unresolved). f = +99.417567 mm.

L3 is a biconvex positive singlet separated from D1 by a narrow air gap. Together, D1 and L3 form the fixed first functional group. The complete G1 power, +60.484000 mm, is an in-situ group property and should not be inferred by simply adding the standalone focal powers of its components.

The patent devotes explicit shape conditions to the two positive components of G1 because this group operates over a large conjugate range while G2 moves. [1, conditions (5)–(6)] Its role is therefore not merely to provide positive power; its forms are chosen to limit the change in spherical aberration and field curvature as magnification changes.

### D2 — L4 + L5, Moving Negative Focus Group G2

**L4:** nd = 1.78470, νd = 26.1. Glass: 785261 — dense-flint class (vendor unresolved). f = +63.123150 mm.

**L5:** nd = 1.69680, νd = 55.6. Glass: 697556 — lanthanum-crown class (vendor unresolved). f = -28.958976 mm.

L4 is individually positive and L5 strongly negative, but the cemented pair is net negative: D2 has a computed focal length of -52.500126 mm. Because D2 is the entire second functional group, its cemented-component power and G2 group power are the same.

The patent prefers a cemented negative second group and constrains its external shape because the beam intercept moves across this group as focus changes. [1, condition (7)] G2 translates toward the image as magnification increases, altering the first-to-second-group separation while preserving the relationship that makes the beam entering G3 substantially parallel.

### D3 — L6 + L7, Front Cemented Component of G3

**L6:** nd = 1.71300, νd = 53.9. Glass: 713539 — lanthanum-crown class (vendor unresolved). f = +40.290880 mm.

**L7:** nd = 1.72342, νd = 38.0. Glass: 723380 — barium dense-flint/BASF class (vendor unresolved). f = -42.149938 mm.

Although the standalone powers are of opposite sign and similar magnitude, the cemented pair is net positive, with a computed focal length of +136.825725 mm. The patent describes the preferred first component of G3 as a cemented positive/negative meniscus pair with its convex side toward the object. [1, preferred third-group structure]

D3 begins the fixed rear functional group immediately behind the aperture stop. Its cemented net power is distinct from the final in-situ G3 power because L8 and L9, together with their air spacings, remain part of the same functional group.

### L8 — Negative Meniscus in G3

**L8:** nd = 1.78470, νd = 26.1. Glass: 785261 — dense-flint class (vendor unresolved). f = -103.109652 mm.

L8 is the second meniscus component of the patent's preferred G3 structure. It is a weak negative element compared with the strongly powered surfaces around it. The patent specifies this component as a negative meniscus with its convex side toward the image, placing it between the cemented front component and the final positive element. [1, preferred third-group structure]

### L9 — Final Positive Component of G3

**L9:** nd = 1.62280, νd = 56.7. Glass: N-SK10 catalog equivalent for 1.62280/56.7 (production supplier unspecified). f = +72.850553 mm.

L9 is the final biconvex positive element and completes G3. The N-SK10 curve matches its stored coordinates inside the strict catalog guard and is used only as a supplier-neutral spectral equivalent; the historical production glass remains unidentified.

The combination D3 + L8 + L9 yields the full computed G3 focal length of +105.173437 mm. As with G1, this is an in-situ functional-group quantity rather than the algebraic sum of standalone element powers.

## Glass Identification and Selection

The patent publishes d-line `nd` and `νd` only. It does not name glass manufacturers and does not publish `nC`, `nF`, `ng`, `PgF`, or `dPgF`. [1, Example 1; claim 7] The data file therefore uses neutral six-digit/class annotations rather than assigning speculative vendor identities.

Current catalogs also show why a vendor assignment would be unsafe: SUMITA K-LaK8 reproduces `nd = 1.71300`, `νd = 53.9` exactly, while OHARA S-LAL8 carries the same 713539 coordinate code at `nd = 1.71300`, `νd = 53.87`. These coordinate matches establish equivalence candidates, not the historical supplier. [4; 5]

| Data annotation | nd | νd | Elements | Interpretation |
| --- | ---: | ---: | --- | --- |
| 805255 — dense-flint class (vendor unresolved) | 1.80518 | 25.5 | L1 | High-index, low-Abbe member of D1 |
| 713539 — lanthanum-crown class (vendor unresolved) | 1.71300 | 53.9 | L2, L3, L6 | Moderate-dispersion positive glass used repeatedly in G1 and G3 |
| 785261 — dense-flint class (vendor unresolved) | 1.78470 | 26.1 | L4, L8 | High-index, low-Abbe glass used in G2 and G3 |
| 697556 — lanthanum-crown class (vendor unresolved) | 1.69680 | 55.6 | L5 | Lower-dispersion partner in the moving cemented negative group |
| 723380 — barium dense-flint/BASF class (vendor unresolved) | 1.72342 | 38.0 | L7 | Intermediate-dispersion negative member of D3 |
| N-SK10 catalog equivalent (production supplier unspecified) | 1.62280 | 56.7 | L9 | Final positive crown-family element with coefficient-backed spectral modeling |

All nine physical-glass elements now resolve to coordinate-compatible catalog curves while retaining the patent's authored indices. The glass palette clearly uses dispersion contrast within all three cemented components, but the available source data support only conventional achromatizing interpretations. No APO or anomalous-partial-dispersion claim is warranted from `nd`/`νd` alone.

## Focus Mechanism

Focus is fully published rather than reconstructed. G1, G3, the aperture-to-G3 spacing, and the 58.798 mm rear image spacing remain fixed. G2 alone translates toward the image as magnification increases. The two variable air gaps conserve their sum: `d5 + d8 = 37.333 mm` at all three patent states. [1, Example 1; claim 7]

| State | Patent M | Object to r1 d0 (mm) | d5 (mm) | Total d8 (mm) | G2 travel from infinity (mm) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Infinity | 0 | ∞ | 0.925 | 36.408 | 0.000 |
| Intermediate | -0.504 | 295.169 | 16.141 | 21.192 | 15.216 |
| Close | -1.002 | 175.712 | 31.167 | 6.166 | 30.242 |

The LensVisualizer model inserts an explicit `STO` at the patent-published diaphragm plane, 1.8 mm before r9. [1, Example 1; claim 7] Consequently, the authored variable gap after r8 is the portion from r8 to the stop; the fixed 1.8 mm from the stop to r9 completes the patent's total d8.

The patent does not publish the diaphragm diameter. To make the explicit stop reproduce the stated infinity f/4, the data file uses an inferred physical stop semi-diameter of 13.146794 mm. The corresponding computed entrance-pupil semi-diameter is 15.145952 mm and the modeled infinity f-number is 4.000000. These dimensions are model-derived, not source dimensions.

The close-state paraxial solution from the final data gives an object-to-r1 distance of 175.712949 mm and magnification -1.001643, matching the patent's rounded 175.712 mm and -1.002 values. Adding the fixed first-surface-to-image track gives 345.443949 mm from object to film plane, consistent with Nikon's rounded 0.35 m production distance at 1:1.

Nikon's production range without the removable close-up attachment begins around 1:11 at 1.6 m rather than at infinity. [2, § V; 3, reproduction-ratio table] This does not conflict with the patent's infinity state: the former is the implemented operating range of the Medical-Nikkor system, while the latter is an optical design state of Example 1.

## Conditional Expressions

The patent specifies seven design conditions governing functional-group power ratios, image-circle scaling, the close-state first-group magnification, and component shapes. Recomputed from the final data file, Example 1 satisfies all seven. [1, conditions (1)–(7)]

| Condition | Patent interval | Computed value | Result |
| --- | --- | ---: | --- |
| (1) `f1 / |f2|` | `1.0 < ... < 1.4` | 1.15207343 | Pass |
| (2) `f3 / |f2|` | `1.6 < ... ≤ 2.2` | 2.00329876 | Pass |
| (3) `f3 / R` | `1.6 ≤ ... ≤ 4.2` | 2.43007018 | Pass |
| (4) `|βmin|` | `1.6 ≤ ... ≤ 4` | 2.00001639 | Pass |
| (5) `(rb + ra) / (rb - ra)` | `-0.25 < ... < +0.15` | 0.05863910 | Pass |
| (6) `(rd + rc) / (rd - rc)` | `+0.5 < ... < +1.5` | 0.91693806 | Pass |
| (7) `(r8 + r6) / (r8 - r6)` | `-0.5 < ... < 0` | -0.37091075 | Pass |

For condition (4), `βmin` is the first-group lateral magnification in the patent's reversed Fig. 2 construction, not a ratio derived from the ordinary front-to-rear G1+G2 focal length. At the close spacing, the latter is 105.001112 mm. Enforcing the Fig. 2 afocal relation places G1's intermediate image at G2's virtual front focal point; G1 then has a forward magnification of -0.4999959, corresponding to a reversed signed `βmin` of -2.000016. The absolute value is used in the patent inequality. [1, Fig. 2; condition (4)]

## Verification Summary

The exact US 4,437,734 patent PDF was not present in the local `patents/` evidence set during the 2026-09-02 audit. The
authored semi-diameters were therefore retained after clean surface-domain and image-circle audits rather than adjusted
against a substituted web copy.

Independent reduced-angle tracing of the final TypeScript arrays gives an infinity EFL of 121.167614 mm and BFD of 58.798853 mm, matching the patent's 121.168 mm and 58.798 mm values within source rounding. An independently assembled ABCD matrix and two sequential basis-ray traces agree to stored precision.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.000759599521 mm⁻¹, corresponding to a reciprocal radius of approximately 1316.48 mm. This is a computed paraxial quantity, not a patent-published specification.

The patent does not publish clear semi-diameters. Every surface `sd` in the data file is therefore a modeling inference constrained by the optical section, the 43.28 mm image circle, ray containment, and current LensVisualizer geometry rules. The final geometry has positive edge thickness throughout; the minimum computed edge thickness is 1.050531 mm. The largest actual rim-slope angle is 60.31935°, and the tightest shared-band air-gap intrusion ratio is 0.897125 against the current 0.90 limit. Full-image-circle chief rays remain within the authored apertures at all three published focus states.

No uniform scaling has been applied. No sensor cover, filter, inactive dummy plane, flare-cutter plane, or mechanical part has been inserted. The removable 2× close-up attachment is intentionally excluded because it is not part of the Example 1 base prescription. No aspheric coefficients or unpublished spectral fields have been added.

## Sources / References

1. Yutaka Iizuka, **US 4,437,734 A, “Lenses capable of close-up photography,”** Nippon Kogaku K.K., granted March 20, 1984. Example 1, Fig. 3, Figs. 4-6, and claim 7. https://patents.google.com/patent/US4437734A/en
2. Haruo Sato, **“NIKKOR — The Thousand and One Nights No.69: Medical-Nikkor 120mm f/4 IF,”** Nikon Imaging. https://imaging.nikon.com/imaging/information/story/0069/
3. Nikon, **Medical-Nikkor 120mm f/4 IF Instruction Manual**, archived product manual. https://cdn-10.nikon-cdn.com/pdf/manuals/archive/Medical-Nikkor%20120mm%20f-4%20IF.pdf
4. SUMITA Optical Glass, **Optical Glass Data / Zemax catalog**, including discontinued glasses, version 14.02.00. https://www.sumita-opt.co.jp/en/download/
5. OHARA, **S-LAL optical-glass catalog data**, including S-LAL8 / code 713539. https://oharacorp.com/glass-type/s-lal/
