# Leica Macro-Elmarit-R 60mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 3,552,833
**Filed:** December 2, 1968
**Granted:** January 5, 1971
**Priority:** December 30, 1967 (German application 1,269,385)
**Inventor:** Heinz Marquardt
**Assignee:** Ernst Leitz GmbH, Wetzlar, Germany
**Title:** Photographic Gauss Type Objective
**Embodiment analyzed:** Sole numerical prescription / claim table

US 3,552,833 describes a photographic Gauss-type objective with five meniscus lens members: one singlet positive meniscus and one cemented negative meniscus in front of the diaphragm, followed by one singlet negative meniscus and two singlet positive menisci behind it. The patent states a relative aperture of at least f/2.8, a field angle of approximately ±18°, and use over image scales from infinity to 1:1.

The production identification is strong but not treated as a literal production drawing. The Leica technical data sheet for the Macro-Elmarit-R 60mm f/2.8 gives 6 elements in 5 groups, 61.4 mm actual focal length, f/2.8 aperture, 40°/33°/23° angle of view, Leica R bayonet, 0.27 m native close focus, 1:2 native maximum reproduction, and 1:1 use with the Macro-Adapter-R. Those production specifications match the patent's element count, group count, aperture class, field coverage, and macro operating claim.

The patent prescription is normalized to a nominal focal length of 1. Independent paraxial tracing of the corrected prescription gives EFL = 0.999134763 in patent units and BFD = 0.683811950, matching the patent's stated $s' = 0.6838$ within the precision expected from four-decimal prescription data. The data file scales the prescription by 61.45317155, so the computed EFL equals Leica's published 61.4 mm focal length rather than the rounded 60 mm marketing designation.

A transcription correction is necessary. The upper table on the patent page prints $d_3 = 0.0339$, but the claim table prints $d_3 = 0.0331$. The claim-table value is the consistent value: with $d_3 = 0.0331$, the axial sum is exactly $\Sigma(d+a)=0.5871$ and the paraxial BFD is 0.683812; with $d_3 = 0.0339$, the axial sum becomes 0.5879 and the BFD shifts to 0.679949. The corrected analysis and data file therefore use $d_3 = 0.0331$.

The patent labels its glass columns as $n_e$ and $\nu_e$. That label is credible. Several patent glass pairs match modern HOYA/OHARA catalog e-line values closely or exactly. The TypeScript schema still stores the patent indices in fields named `nd` and `vd`, because that is the viewer's required field naming, but the underlying prescription values are treated as the patent's e-line reference data.

## Optical Architecture

The design is a modified double-Gauss macro objective. In front-to-rear order it has:

1. L1, a positive meniscus collector.
2. L2-L3, a cemented negative meniscus doublet.
3. The aperture stop, located in the large air space between L3 and L4.
4. L4, a negative meniscus immediately behind the stop.
5. L5 and L6, two separated positive menisci forming the rear converging half.

The group power distribution is positive - negative - negative - positive - positive. Paraxially, the front part through L3 is only weakly positive, with an independently traced focal length of about +166 mm at production scaling. The rear three singlets form a stronger converging section with focal length about +54.2 mm. The total focal length of 61.4 mm therefore comes from a strongly corrected rear half working against a relatively mild front Gauss half.

The distinguishing architectural choice is the split rear half. A more conventional double-Gauss would often use a cemented rear meniscus group. Marquardt instead uses three air-spaced rear singlets: one negative followed by two positives. The two very small rear air spaces are not manufacturing accidents; they preserve additional refracting surfaces and spacing variables. That is useful in a macro lens because the same fixed optical cell must keep aberrations under control across a large conjugate range.

The design is not telephoto in the strict optical sense. The infinity-focus total track from first vertex to image plane is approximately 78.10 mm at production scaling, giving TL/EFL ≈ 1.27. Its back focal distance is approximately 42.02 mm, or 0.684 times the focal length, so it is a normal modified Gauss layout adapted for an SLR mirror box rather than a telephoto construction.

## Element-by-Element Analysis

The focal lengths below are standalone in-air element focal lengths unless a cemented group is explicitly named. They are not the same as each element's in-situ contribution inside the full thick system.

### L1 — Positive Meniscus, Convex to Object

$n_e = 1.74795$, $\nu_e = 44.5$. Glass: LAF2 / S-LAM2 class, e-line catalog match; patent vendor not named. $f \approx +98.9$ mm.

L1 is the front collector. Its first surface is the first substantial positive refracting surface in the system, while its weaker second surface bends the element into a positive meniscus rather than a biconvex lens. That bending reduces the third-order burden on the front element and helps keep coma and spherical aberration manageable before the beam reaches the cemented doublet.

The high index is important. A lower-index crown would require stronger curvature for the same power and would increase both spherical aberration and positive Petzval contribution. L1's surface-by-surface Petzval contribution is +0.342 in normalized units.

### L2-L3 — Cemented Negative Meniscus Doublet

L2: $n_e = 1.69282$, $\nu_e = 49.5$. Glass: unmatched 693/495 e-line glass; patent vendor not named. Standalone $f \approx +32.7$ mm.

L3: $n_e = 1.67764$, $\nu_e = 32.0$. Glass: E-FD5 / S-TIM25 class, e-line catalog match; patent vendor not named. Standalone $f \approx -21.3$ mm.

Together L2 and L3 form the negative meniscus member in front of the diaphragm. The independently traced cemented-group focal length is about -134.7 mm at production scaling. L2 is positive by itself, but L3 has the stronger negative power and dominates the group. The cemented interface at $r_4$ is weak in power because the two indices differ by only 0.01518, but it is still useful chromatically because the Abbe-number separation is large: 49.5 versus 32.0.

The doublet's rear surface, $r_5$, is the tightest positive-radius surface in the front half. It produces the large negative power that converts the L2-L3 assembly into the front negative Gauss member. Its Petzval contribution, computed across the three doublet surfaces, is -0.686, the strongest field-flattening contribution in the system.

### L4 — Negative Meniscus, Concave to Object

$n_e = 1.74070$, $\nu_e = 26.2$. Glass: unmatched dense flint, 741/262 e-line class. $f \approx -70.3$ mm.

L4 is the first element behind the stop. It is a strong negative meniscus with the highest-dispersion glass in the prescription. The front surface at $r_6$ has the largest single negative refractive power in the design, and the element contributes -0.615 to the Petzval sum.

Its role is not merely to spread the converging cone. L4 supplies rear-side chromatic overcorrection and field flattening near a high-leverage position adjacent to the aperture stop. The element also helps balance the two positive rear menisci, preventing the rear half from behaving like a simple positive relay with excessive field curvature.

The exact glass remains unresolved from the catalog data checked for this pass. It is not safely identifiable as a common SF13-class d-line glass, because the patent column is e-line and the Abbe value is too low for that simple identification. The corrected file therefore marks it as unmatched rather than assigning a speculative catalog name.

### L5 — Positive Meniscus, Concave to Object

$n_e = 1.62287$, $\nu_e = 60.1$. Glass: BACD16 / S-BSM16 class, e-line catalog match; patent vendor not named. $f \approx +69.8$ mm.

L5 is the first positive element in the rear converging pair. It has relatively low dispersion and moderate index, making it a suitable positive partner for the high-dispersion negative L4. In Petzval terms, L5 contributes +0.530, almost canceling L4 when considered as a local pair.

The very narrow L4-L5 air gap is optically significant because it avoids cementing the rear negative and positive members into a single doublet. Keeping the surfaces air-spaced preserves two additional refracting boundaries and increases the number of correction variables available to the macro prescription.

### L6 — Positive Meniscus, Concave to Object

$n_e = 1.61521$, $\nu_e = 58.4$. Glass: BACD4 class, e-line catalog match; patent vendor not named. $f \approx +66.5$ mm.

L6 is the final positive meniscus and acts as the rear field-correcting element. Its stronger rear curvature helps bring the beam to the image plane while retaining a meniscus form, which is consistent with the patent's all-meniscus design rule.

The glass is close to L5 in both index and dispersion but not identical. That small difference gives the designer another degree of chromatic and field-curvature control in the rear half. L6's Petzval contribution is +0.539, making L5 and L6 together the principal positive Petzval contributors behind the stop.

## Glass Identification and Selection

The patent gives optical constants but does not name glass vendors. The column labels are $n_e$ and $\nu_e$, and the best matches are e-line matches. Current HOYA and OHARA catalog data were used as the primary lookup sources. SCHOTT's current download page was consulted as a catalog-reference source, but no exact Schott legacy name is assigned without a verified numerical match.

| Element | Patent $n_e$ | Patent $\nu_e$ | Corrected identification | Status | Role |
|---|---:|---:|---|---|---|
| L1 | 1.74795 | 44.5 | LAF2 / S-LAM2 class | Strong e-line match | High-index front positive meniscus |
| L2 | 1.69282 | 49.5 | Unmatched 693/495 e-line glass | Unresolved | Positive member of cemented negative doublet |
| L3 | 1.67764 | 32.0 | E-FD5 / S-TIM25 class | Strong e-line match | Negative high-dispersion member of front doublet |
| L4 | 1.74070 | 26.2 | Unmatched dense flint, 741/262 e-line class | Unresolved | Rear negative flint, field and color correction |
| L5 | 1.62287 | 60.1 | BACD16 / S-BSM16 class | Strong e-line match | Rear positive crown meniscus |
| L6 | 1.61521 | 58.4 | BACD4 class | Strong e-line match | Final positive crown meniscus |

The e-line catalog comparison gives strong class matches for L1, L3, L5, and L6 and leaves L2 and L4 unresolved. The data file uses `Unmatched (...)` annotations for those unresolved cases, which is preferable to encoding an unsupported catalog identity.

## Focus Mechanism

The patent claims usefulness from infinity to 1:1 but does not provide a variable-spacing focus table. The production Leica data sheet describes a lens that focuses from infinity to 0.27 m natively, reaches 1:2 natively, and reaches 1:1 with the Macro-Adapter-R.

The optical cell is therefore modeled as unit focusing in the data file. The lens prescription remains internally fixed; only the final back-focus distance changes. The infinity BFD is the paraxially verified value of 42.0224 mm. For the production native close-focus position, the data file increases BFD by 0.5 × 61.4 mm, giving 72.7224 mm. This is a thin-lens-equivalent unit-focus approximation for the 1:2 position, used because the patent does not tabulate a close-focus prescription.

| Parameter | Infinity | Native close-focus model |
|---|---:|---:|
| Reproduction ratio | 0 | 1:2 |
| Final BFD in data file | 42.0224 mm | 72.7224 mm |
| Added extension | 0 mm | 30.7000 mm |
| Internal air gaps | Fixed | Fixed |

No floating element, rear-focus group, or internal-focus group is described in the patent or required by the production specification. The stop moves with the optical cell in real unit-focus operation.

## Aspherical Surfaces

The design contains no aspherical surfaces. The patent prescription lists only spherical radii and gives no conic constants or polynomial coefficients. The data file therefore has `asph: {}`.

The absence of aspheres is consistent with the design strategy. Marquardt relies on meniscus bending, glass choice, a cemented front achromatizing doublet, and a split rear Gauss half rather than molded or polished aspherical correction.

## Chromatic Correction Strategy

The chromatic correction is a conventional but carefully distributed achromatization rather than an apochromatic design. The front half uses a cemented doublet with a moderate-dispersion positive member and a high-dispersion negative member. The rear half uses a high-dispersion negative meniscus, L4, against two lower-dispersion positive menisci, L5 and L6.

Using standalone thick-element powers in normalized units gives a first-order chromatic-power sum of approximately -0.041 for $\Sigma(\phi/\nu)$. That small negative residual indicates slight overcorrection in this simplified calculation. It should not be read as an apochromatic claim; the patent gives only Abbe numbers and no partial-dispersion data.

| Element | Standalone power, normalized | $\nu_e$ | $\phi/\nu$ |
|---|---:|---:|---:|
| L1 | +0.621 | 44.5 | +0.0140 |
| L2 | +1.879 | 49.5 | +0.0380 |
| L3 | -2.886 | 32.0 | -0.0902 |
| L4 | -0.874 | 26.2 | -0.0334 |
| L5 | +0.880 | 60.1 | +0.0146 |
| L6 | +0.924 | 58.4 | +0.0158 |
| **Total** |  |  | **-0.0412** |

The design logic is clear even without named glasses: two strong negative dispersive members, L3 and L4, counterbalance three positive crown-like members and one moderate-dispersion positive member.

## Petzval Field Curvature Correction

The Petzval sum was recomputed surface-by-surface using $P_i = \phi_i / (n_i n_i')$ for each refracting surface. The corrected total is +0.109648 in normalized patent units. At the Leica 61.4 mm scaling, that corresponds to a Petzval radius of approximately 560 mm, or about 9.12 focal lengths.

| Member | Petzval contribution, normalized | Effect |
|---|---:|---|
| L1 | +0.342 | Positive curvature |
| L2-L3 | -0.686 | Strong field-flattening contribution |
| L4 | -0.615 | Strong field-flattening contribution |
| L5 | +0.530 | Positive curvature |
| L6 | +0.539 | Positive curvature |
| **Total** | **+0.1096** | Small residual positive Petzval sum |

The field-flattening burden is concentrated in the two negative members: the front cemented doublet and L4. This is appropriate for a macro lens, where flat-field rendering is part of the design problem rather than a secondary correction.

## Verification Summary

The following values were independently recomputed from the corrected patent prescription:

| Quantity | Computed result | Patent / production reference |
|---|---:|---|
| Corrected normalized EFL | 0.999134763 | Patent normalization $f=1$ |
| Corrected normalized BFD | 0.683811950 | Patent $s'=0.6838$ |
| $\Sigma(d+a)$ using $d_3=0.0331$ | 0.5871 | Patent $\Sigma(d+a)=0.5871$ |
| Production-scaled EFL | 61.4000 mm | Leica published focal length 61.4 mm |
| Production-scaled BFD | 42.0224 mm | Derived from patent trace |
| Production-scaled total track | 78.1016 mm | Derived from patent trace |
| Petzval sum | +0.109648 normalized | Derived from surface-by-surface trace |
| Petzval radius | 560 mm | Derived from corrected Petzval sum |

The surface powers printed in the patent were also checked. The final surface power is +1.900556 from $(1.0 - 1.61521)/(-0.3237)$; where OCR reads +1.000556, that is a recognition artifact, not a prescription error.

## Sources

- US 3,552,833, Heinz Marquardt, Ernst Leitz GmbH, “Photographic Gauss Type Objective,” granted January 5, 1971. Primary source for the optical prescription, aperture class, field-angle claim, and infinity-to-1:1 macro-use claim.
- Leica Camera AG, “LEICA MACRO-ELMARIT-R 60 mm f/2.8,” technical data sheet. Source for production focal length 61.4 mm, 6/5 construction, 40°/33°/23° angle of view, 0.27 m native close focus, 1:2 native reproduction, 1:1 Macro-Adapter-R use, E55 filter thread, and Leica R bayonet.
- HOYA Corporation optical glass catalog data, current and historical downloads. Used for e-line glass matching.
- OHARA Corporation optical glass catalog data. Used for e-line glass matching.
- SCHOTT optical glass download page and overview tables. Used as a catalog-reference source; no unsupported Schott legacy names are assigned in the corrected file.
