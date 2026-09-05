## Patent Reference and Design Identification

**Patent:** JPS57-19708A (JP1982-019708)\
**Application Number:** JP9326380A\
**Filed / Priority:** 1980-07-10\
**Published:** 1982-02-02\
**Inventors:** Tadashi Kojima; Takashi Matsumaru\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** Zoom lens (ズームレンズ)\
**Embodiment analyzed:** Example 1 (実施例1)

Example 1 is the prescription represented by the data file for the **KONICA ZOOM-HEXANON AR 35–70mm f/4**. The
identification is a production correlation rather than a manufacturer statement that the released lens used this exact
patent example. The correlation rests on several convergent facts:

1. The patent's Example 1 covers a 36.003–68.092 mm design range, closely bracketing the production lens's marketed
   35–70 mm range. The patent's aberration figures use the rounded labels 35, 50, and 70 mm.
2. The patent example contains eight physical elements in seven air-separated groups, matching Konica's published
   8-element / 7-group construction for the 35–70 mm f/4 lens.
3. The patent names the historical Konica entity as applicant, was filed in 1980, and describes a two-group negative-
   positive zoom architecture with both groups moving axially.
4. Konica's production specification gives a 0.8 m minimum focus distance measured from the film plane. The patent states
   that ordinary focusing is performed by extending the front group, providing the mechanism constraint used for the
   data file's disclosed close-focus reconstruction.

One source discrepancy is retained rather than reconciled away. Konica markets the production lens as f/4, whereas the
Example-1 aberration plots explicitly identify F3.5 as the full-open design condition. Accordingly, the data file keeps
`apertureMarketing: 4` separate from `apertureDesign: 3.5` and uses 3.5 as the modeled `nominalFno`.

The prescription is retained at native patent scale. No uniform rescaling is applied. Example 1 is entirely spherical,
so there are no aspheric coefficients and no coefficient-scaling transformation to perform.

## Optical Architecture

The patent is a two-group zoom with a **negative front functional group** and a **positive rear functional group**. The
patent states that both groups move axially to change focal length. In the authored states, the intergroup spacing D7
contracts from 34.080 mm at the wide position to 14.397 mm at the middle position and 1.000 mm at the tele position.
The independently recomputed functional-group focal lengths are −63.906957 mm for the front group and +39.502458 mm for
the rear group, reproducing the patent's respective −63.98 mm and +39.50 mm values within the source precision.

The front group contains four physical elements but three patent-level lens components. E1 is a weak positive singlet;
E2 and E3 form a cemented positive/negative pair whose **net cemented component** is negative; and E4 is a positive
meniscus. This distinction matters because the patent's prose describes the cemented E2/E3 assembly functionally as its
negative second front-group lens, while the data file records the two physical glasses separately. The cemented component
has a computed paraxial focal length of −30.474693 mm even though E2 by itself is positive and E3 by itself is strongly
negative.

The rear group consists of four air-spaced elements: positive E5, positive-meniscus E6, negative E7, and positive E8.
The patent places the aperture stop between the first two positive rear-group components. Its stated purpose is to reduce
the sensitivity to decentering of the following rear-group components while retaining compactness. The patent specifies
only that the stop lies inside the 3.00 mm air interval between patent surfaces 9 and 10; it does not publish the stop's
exact axial coordinate or diameter.

For visualization, the stop is therefore a modeling inference at the midpoint of that interval: 1.50 mm after surface 9
and 1.50 mm before surface 10. The stored stop semi-diameter, 11.130963 mm, is a **clear envelope**, not a claim about the
physical production iris. The independently modeled f/3.5 stop openings required at the wide, middle, and tele states are
8.307744, 9.541456, and 11.130963 mm in semi-diameter, respectively.

The image-space distance is also not tabulated in the patent. The authored D15 values are paraxially solved infinity-image
distances for the three zoom states. Under the project's geometric terminology, the system is not telephoto at any of the
three states because total track never falls below EFL. Only the wide state meets the project's retrofocus criterion,
because its back focal distance exceeds its EFL.

## Element-by-Element Analysis

The focal lengths in this section are independently recomputed **standalone paraxial element powers**. They should not be
confused with the net power of a cemented component or with an element's in-situ contribution inside the complete zoom.

### E1 — Biconvex Positive

**nd = 1.65844, νd = 50.9. Glass: 658509 class (vendor unresolved). Standalone f = +181.827 mm.**

E1 is the weak positive front element of the negative front zoom group. Its low standalone power relative to the group
power means that the front group's negative behavior is not produced by the first element alone. The group balance instead
depends on the strongly negative cemented component behind it and the final positive meniscus E4.

The 658509 coordinate class reappears at E5 in the rear group. The patent supplies only the d-line index and Abbe number;
it does not identify a glass maker or publish line-index data for this material.

### E2 — Biconvex Positive, cemented component D1 front member

**nd = 1.62004, νd = 36.3. Glass: 620363 class (vendor unresolved). Standalone f = +105.362 mm.**

E2 is the positive member of the cemented second front-group component. Its rear surface is the cemented interface at
surface 4, which transitions directly into E3; no synthetic cement layer is present in the model.

Taken alone, E2 has positive power. It is therefore misleading to describe E2 itself as the patent's negative second
front-group lens. That patent-level component is the **combined E2/E3 pair**, whose computed net focal length is
−30.474693 mm.

### E3 — Biconcave Negative, cemented component D1 rear member

**nd = 1.80610, νd = 40.9. Glass: 806409 class (vendor unresolved). Standalone f = −23.348 mm.**

E3 supplies the strong negative member of D1. Its standalone negative power dominates E2's weaker positive contribution,
so the cemented pair remains negative overall. This is the principal negative component inside the front functional group.

The patent uses the dispersion properties of this cemented pair in its conditional analysis. Applying patent Eq. (12) to
the final data gives an equivalent Abbe value of 41.763535 for the pair, within the patent's recommended 35–45 range.
That result is a component-level dispersion parameter; it is not evidence of anomalous partial dispersion or apochromatic
behavior.

### E4 — Positive Meniscus

**nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved). Standalone f = +101.433 mm.**

E4 is the positive meniscus that completes the front zoom group. In combination with E1 and the net-negative D1 component,
it leaves the full front functional group negative at −63.906957 mm.

Its high index and relatively low Abbe number are source facts of the patent prescription. Because no `nC`, `nF`, `ng`,
or `dPgF` values are published, the data file does not assign a special-dispersion designation to E4.

### E5 — Biconvex Positive

**nd = 1.65844, νd = 50.9. Glass: 658509 class (vendor unresolved). Standalone f = +40.152 mm.**

E5 begins the positive rear functional group and lies immediately ahead of the stop interval. It is the first of the two
positive rear-group components between which the patent deliberately places the aperture stop.

The stop location is important to the patent's compactness and decenter-sensitivity argument, but the exact stop coordinate
used by the visualization is not source-published. E5's optical surfaces and glass data, by contrast, are transcribed from
Example 1.

### E6 — Positive Meniscus

**nd = 1.60311, νd = 60.7. Glass: 603607 class (vendor unresolved). Standalone f = +50.227 mm.**

E6 is the positive meniscus immediately behind the stop interval. The patent explicitly constrains the focal length of
this component relative to the rear-group focal length. The final prescription gives fM = +50.227101 mm while the patent
uses fR = +39.50 mm, satisfying the required relation $1.0f_R < f_M < 1.5f_R$.

Its νd = 60.7 is the highest Abbe number in the prescription, but the absence of line-index or partial-dispersion data means
that no anomalous-dispersion or APO claim is warranted.

### E7 — Biconcave Negative

**nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved). Standalone f = −18.530 mm.**

E7 is the strongest negative standalone singlet in the rear group. It is paired in sequence with the positive E6 ahead of
it and positive E8 behind it, producing a rear group that remains positive overall despite E7's strong local negative
power.

The patent's stop-placement discussion specifically seeks to reduce the effect of decentering in the components following
the stop region. E7 is therefore part of the rear-group sensitivity problem that motivates the stop arrangement, rather
than an independently adjustable correction element in the authored model.

### E8 — Biconvex Positive

**nd = 1.62004, νd = 36.3. Glass: 620363 class (vendor unresolved). Standalone f = +38.946 mm.**

E8 is the final positive element ahead of image space. It closes the positive rear functional group and shares the same
620363 coordinate class as E2, although the two elements occupy different optical roles.

The last patent surface is E8's rear surface. The patent does not tabulate a final image-space thickness, so D15 in the
data file is the solved paraxial back focal distance for each authored infinity zoom state rather than a transcribed
prescription row.

## Glass Identification and Selection

All physical elements resolve at runtime to coordinate-compatible catalog dispersion curves. These
curves provide spectral approximations and do not establish historical supplier or melt identity.

The patent identifies its materials only by d-line refractive index and Abbe number. It names no glass manufacturer and
publishes no C-, F-, or g-line indices and no partial-dispersion deviation. Authoritative OHARA, HOYA, SCHOTT, HIKARI,
CDGM, and Sumita catalogs contain several glasses that reproduce or closely reproduce these rounded coordinate pairs.
A vendor-specific assignment would therefore be underdetermined. The data file consequently uses vendor-neutral six-digit
coordinate classes.

| Glass class | nd | νd | Elements | Prescription role |
|---|---:|---:|---|---|
| 658509 class | 1.65844 | 50.9 | E1, E5 | Moderate-index positive elements in both functional groups |
| 620363 class | 1.62004 | 36.3 | E2, E8 | Positive members at the front cemented component and rear end |
| 806409 class | 1.80610 | 40.9 | E3 | Strong negative cemented member |
| 805254 class | 1.80518 | 25.4 | E4, E7 | High-index, low-Abbe front meniscus and rear negative singlet |
| 603607 class | 1.60311 | 60.7 | E6 | Positive rear meniscus with the highest νd in the design |

The patent's front-component conditions show that dispersion balance is part of the design method. In the final
prescription, Eq. (12) gives the cemented E2/E3 component an equivalent ν = 41.763535, satisfying the stated 35–45 band.
This supports the patent's ordinary chromatic-balancing rationale. It does **not** establish anomalous partial dispersion,
secondary-spectrum suppression beyond an Abbe-level model, or apochromatic correction.

## Focus Mechanism

The data file classifies focus as **CONSTRAINED_RECONSTRUCTION**. Example 1 publishes the infinity zoom spacings but no
close-focus spacing table. The patent states that normal focusing is performed by extending the front group, while
Konica's manufacturer specification gives a minimum focus distance of 0.8 m measured from the film plane. Those two
constraints leave one modeled focus degree of freedom at each zoom state.

The reconstruction therefore translates only the front group toward the object. The rear group and image plane remain
fixed, so D15 does not change between infinity and close focus at a given zoom position. Because the front group moves
away from the rear group, D7 increases by exactly the solved front-group travel.

| Zoom state | D7 at infinity (mm) | Front-group travel toward object (mm) | Reconstructed close D7 (mm) | Paraxial magnification at 0.8 m |
|---|---:|---:|---:|---:|
| Wide | 34.080000 | 5.490753 | 39.570753 | −0.048398 |
| Middle | 14.397000 | 5.410155 | 19.807155 | −0.066294 |
| Tele | 1.000000 | 5.394246 | 6.394246 | −0.090003 |

The finite-conjugate solutions satisfy the 0.8 m film-plane reference with residual B terms at approximately the
10⁻¹² mm level. These close-focus spacings are modeling results, not patent-published dimensions. No additional floating
movement is introduced, and no focus-drive mechanism is claimed because the cited sources do not establish one for this
analysis.

## Conditional Expressions

Example 1 satisfies the applicable patent conditions when evaluated from the final data and the source group focal
lengths. The values below are independently recomputed rather than copied from the Stage-1 calculations.

| Condition | Evaluated value | Required bound | Result |
|---|---:|---|---|
| $0.05f_R < d_1 < 0.15f_R$ | 3.000000 mm | 1.975000 < d1 < 5.925000 mm | Pass |
| $1.0f_R < f_M < 1.5f_R$ | 50.227101 mm | 39.500000 < fM < 59.250000 mm | Pass |
| $30 < \nu_1 < 55$ | 50.9 | 30 < ν1 < 55 | Pass |
| $35 < \nu_2 < 45$ | 41.763535 | 35 < ν2 < 45 | Pass |
| $0 < r_3$ | 268.303 mm | r3 > 0 | Pass |
| $0.30|f_F| < r_4 < 0.45|f_F|$ | 24.296 mm | 19.194 < r4 < 28.791 mm | Pass |
| $0.04|f_F| < d_P+d_N < 0.16|f_F|$ | 5.800000 mm | 2.5592 < dP+dN < 10.2368 mm | Pass |
| $0.05 < n_N-n_P$ | 0.186060 | > 0.05 | Pass |

The cemented form of the thickness condition is the relevant form for Example 1 because its second front-group component
is a cemented positive/negative pair.

## Verification Summary

Independent reduced-angle y–ν tracing and an ABCD matrix product were run from the final TypeScript arrays. The two
methods agree at all three infinity zoom states. The computed EFLs reproduce the patent control points within the expected
precision of the printed radii, thicknesses, and indices.

| State | Patent/source f (mm) | Computed EFL (mm) | Solved BFD (mm) | S1→image track (mm) | TL/EFL | BFD/EFL |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 36.003 | 35.998755 | 40.729478 | 119.009478 | 3.305933 | 1.131413 |
| Middle | 50.000 | 50.045314 | 49.412000 | 108.009000 | 2.158224 | 0.987345 |
| Tele | 68.092 | 68.142825 | 60.598516 | 105.798516 | 1.552599 | 0.889287 |

The surface-by-surface Petzval calculation uses $\phi/(n n')$ and gives a sum of +0.00355216338 mm⁻¹, with reciprocal
281.518583 mm. This is a computed first-order field-curvature quantity, not a patent-published specification.

The patent does not publish surface semi-diameters. The data file's semi-diameters are therefore inferred from the
Y = 21.6 mm field, the modeled f/3.5 marginal and chief-ray envelopes, the Figure-1 optical-section proportions, and the
current geometry constraints. The final model has a minimum computed edge thickness of 0.116342 mm, a maximum actual rim
slope of 57.539353°, and a worst shared-band cross-gap intrusion fraction of 0.812554, below the configured 0.90 limit.
The modeled 0.60-field bundles and reconstructed close-focus on-axis fans remain inside the authored clear apertures.
These values validate the authored geometry; they are not source-published mechanical clear apertures.

One apparent source-reading issue is explicitly resolved. Patent Table 1, PDF page 5, gives surface 10 as
**R = +18.365 mm**. A low-resolution OCR reading of +183.65 mm is incompatible with the rendered page and changes the
rear functional group from the patent's approximately +39.50 mm power to an implausible value. The data file therefore
uses +18.365 mm as a corrected OCR reading, not as a correction to the patent itself.

No sensor cover glass, filter, inactive dummy or flare-cutter plane, folded path, or mechanical component is part of the
selected numerical example. No omitted plate requires an air-equivalent rear-spacing correction. The prescription is
unscaled and all-spherical. No asphere is omitted, and no asphere coefficient transformation applies.

## Sources / References

1. **JPS57-19708A / JP1982-019708**, “Zoom lens,” Konishiroku Photo Industry Co., Ltd., filed 1980-07-10,
   published 1982-02-02. Example 1 prescription: PDF p. 5; optical sections: pp. 6–7; aberration plots: pp. 7–8.
   The patent front page is the authority for the historical applicant; the numerical table and figures are the authority
   for the modeled prescription.
2. **Konica TC-X instruction manual**, manufacturer-authored lens list and “Specifications of lenses available” table.
   The 35–70 mm row gives f/4.0–f/22, 8 elements / 7 groups, 63–35° angle of view, 0.8 m minimum focus measured from the
   film plane, 55 mm filter, and the production dimensions/weight. Historical scan hosted by Butkus:
   <https://www.butkus.org/chinon/konica/konica_tc-x/konica_tc-x.pdf>.
3. **Google Patents, JPS5719708A**, used only as a Latin-script metadata cross-check for inventor names and filing/
   publication dates; the historical applicant is taken from the patent front page rather than the modernized assignee
   field: <https://patents.google.com/patent/JPS5719708A/en>.
4. **Authoritative glass-coordinate audit sources:** OHARA optical-glass catalog
   (<https://www.ohara-inc.co.jp/en/product/01000/>); HOYA Optical World technical/cross-reference data
   (<https://www.hoya-opticalworld.com/english/technical/002.html>); SCHOTT optical-glass catalog
   (<https://www.schott.com/en-in/products/optical-glass/>); HIKARI optical-glass catalog
   (<https://www.hikari-g.co.jp/optical_glass/>); CDGM optical-glass data (<https://www.cdgmgd.com/>); and Sumita
   optical-glass data book (<https://www.sumita-opt.co.jp/>). These catalogs establish coordinate-class equivalence but
   do not identify the actual Konica glass vendor for Example 1.
