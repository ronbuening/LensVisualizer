## Patent Reference and Design Identification

**Patent:** US 4,223,981
**Priority:** April 22, 1977
**Filed:** April 21, 1978
**Granted:** September 23, 1980
**Certificate of Correction:** April 21, 1981
**Inventors:** Norio Mizutani; Yoshinari Hamanishi
**Assignee:** Nippon Kogaku K.K.
**Title:** *Telephoto Zoom Lens*
**Embodiment analyzed:** Embodiment 1

The prescription is the fixed project correlation for the **NIKON AI ZOOM-NIKKOR 80-200mm f/4.5**. Embodiment 1 is explicitly described as an 80-200 mm, f/4.5 telephoto zoom for a 35 mm still camera. Its numerical example contains 12 glass elements in 9 air-separated components, organized into five functional groups, and uses front-group focusing. Those characteristics agree with the correlated AI-era 12-element/9-group formula recorded in the final data file. The correlation is therefore treated as fixed by the job card and prescription match; it is not presented as a separate manufacturer confirmation. [1][2]

The patent table gives focal-length states of 80.0, 126.5, and 200.0 mm, a nominal f-number of 4.5, and a published back focus of 42.495 mm at all three states. The final model keeps the marketed 80-200 mm and f/4.5 specifications separate from the independently computed design endpoints of 80.102454 and 199.911568 mm. No uniform scale factor was applied. [1][2][3]

## Optical Architecture

The lens is an all-spherical telephoto zoom built from a substantially afocal three-group variable-power system followed by a fixed relay. The power sequence is:

1. **G1 positive focusing group** — a positive singlet and a cemented positive component.
2. **G2 negative variator** — a cemented negative component followed by an air-spaced negative singlet.
3. **G3 positive compensator** — a cemented positive component whose motion maintains the image plane during zooming.
4. **G4 positive relay-front group** — a positive meniscus followed by a weak negative meniscus.
5. **G5 near-afocal relay-rear group** — a negative meniscus and a positive singlet separated by a small air gap.

The physical count is 12 elements in 9 air-separated components, including three cemented doublets. The model contains 21 refracting surfaces and exactly one neutral aperture-stop plane. All refracting surfaces are spherical; there are no aspheres, folded paths, filters, cover plates, dummy planes, or mechanical surfaces in the optical sequence. [1][2]

The computed air-to-air focal lengths of the five functional groups are +121.698131 mm, -37.398276 mm, +94.066454 mm, +105.377057 mm, and -5537.448408 mm, respectively. The combined relay is +112.519954 mm. These are isolated group powers. They must not be confused with standalone physical-element powers or with each group’s contribution to a ray already carrying vergence from the preceding groups. [3]

The variable-power section is paraxially close to afocal at every published zoom state. For a unit-height collimated input ray, the reduced angle after G3 remains within approximately 9.1×10^-6 to 1.4×10^-5 of zero across the three states. The fixed relay then forms the final image. [3]

### Zoom kinematics

| Nominal state | G2 front position from r1 (mm) | G3 front position from r1 (mm) | Relay-front position from r1 (mm) |
|---:|---:|---:|---:|
| 80.0 mm | 17.129 | 58.824 | 82.880 |
| 126.5 mm | 42.113 | 71.860 | 82.880 |
| 200.0 mm | 57.914 | 68.769 | 82.879 |

G2 moves monotonically imageward by 40.785 mm from 80 to 200 mm. G3 first moves 13.036 mm imageward at the middle state, then reverses 3.091 mm objectward, ending 9.945 mm imageward of its wide-angle position. The reversal is a real compensator motion and is preserved by the three-point piecewise interpolation in the data file. The relay remains fixed to the patent table’s 0.001 mm spacing precision. [2][3]

At 200 mm, the patent’s first-surface-to-image-plane track is 197.374 mm, giving a source telephoto ratio of 0.98687. The independently computed paraxial image plane gives a ratio of 0.98570. Both satisfy the stated strict criterion for a telephoto construction, `TL/EFL < 1`. The design is not retrofocus: computed `BFD/EFL` decreases from 0.5295 at 80 mm to 0.2110 at 200 mm. [1][3]

## Element-by-Element Analysis

The focal length stated for each element below is its standalone thick-lens focal length in air. Cemented-component and functional-group powers are stated separately because they are not obtained by simply adding the standalone powers.

### L1 — Biconvex Positive Singlet

**nd = 1.56384, νd = 60.8. Glass: 564608 — dense barium crown class (catalog vendor unspecified). Standalone f = +179.346677 mm.** [2][3]

L1 is the front positive singlet of G1. Its moderate positive power begins the collection of the incoming bundle while its relatively high Abbe number limits the chromatic burden placed on the following cemented component. L1 and the L2a/L2b doublet together form the +121.698131 mm focusing group. [2][3]

### L2a — Biconvex Positive Member of D1

**nd = 1.60311, νd = 60.7. Glass: 603607 — dense crown class (catalog vendor unspecified). Standalone f = +121.366955 mm.** [2][3]

L2a supplies the principal positive power of the rear component in G1. It is cemented directly to L2b. The cemented D1 component has a net focal length of +376.749861 mm, substantially weaker than L2a alone because of the shared negative member and the powered cemented interface. [2][3]

### L2b — Negative Meniscus Member of D1

**nd = 1.80518, νd = 25.5. Glass: 805255 — dense flint class (catalog vendor unspecified). Standalone f = -176.267613 mm.** [2][3]

L2b is the high-index, low-Abbe negative member of the first-group doublet. Its power and dispersion oppose L2a while preserving a net-positive cemented component. The index and dispersion contrast is consistent with first-order chromatic balancing inside the focusing group; no apochromatic or anomalous-dispersion claim is made because the source provides only d-line index and Abbe number. [1][2]

### L3a — Positive Meniscus Member of D2

**nd = 1.75520, νd = 27.5. Glass: 755275 — dense flint class (catalog vendor unspecified). Standalone f = +59.636942 mm.** [2][3]

L3a is a strong positive, low-Abbe member inside the net-negative variator doublet. In a negative achromatizing pair, this assignment reverses the familiar crown-positive/flint-negative ordering: the positive member carries higher dispersion, while the negative crown member carries lower dispersion. The cemented component remains negative because L3b dominates the pair in combination with the shared interface. [2][3]

### L3b — Biconcave Negative Member of D2

**nd = 1.51680, νd = 64.2. Glass: 517642 — borosilicate crown class (catalog vendor unspecified). Standalone f = -43.042315 mm.** [2][3]

L3b supplies the dominant negative power of D2. The cemented L3a/L3b component computes to -154.138607 mm in air. Its lower dispersion relative to L3a provides the sign of dispersion contrast appropriate to a net-negative component. [2][3]

### L4 — Biconcave Negative Singlet

**nd = 1.58913, νd = 61.2. Glass: 589612 — dense barium crown class (catalog vendor unspecified). Standalone f = -50.902132 mm.** [2][3]

L4 is air-spaced behind D2 and completes G2. The D2 cemented component and L4 together form the -37.398276 mm variator group. The 4.1 mm air space between them gives the designer an additional degree of freedom for balancing power and aberration change as G2 traverses the zoom cam. [1][2][3]

### L5a — Biconvex Positive Member of D3

**nd = 1.62041, νd = 60.3. Glass: 620603 — dense crown class (catalog vendor unspecified). Standalone f = +45.096825 mm.** [2][3]

L5a provides the strong positive power of the compensator. Its motion is coupled to the negative variator so that the variable-power section remains nearly afocal and the final image plane remains fixed. [1][3]

### L5b — Negative Meniscus Member of D3

**nd = 1.75520, νd = 27.5. Glass: 755275 — dense flint class (catalog vendor unspecified). Standalone f = -86.776824 mm.** [2][3]

L5b moderates the power of L5a and supplies the low-Abbe partner in the positive compensator doublet. The complete cemented D3 component computes to +94.066454 mm, which is also the air-to-air focal length of G3 because the group contains no additional element. [2][3]

### L6 — Positive Meniscus, Relay Front

**nd = 1.51680, νd = 64.2. Glass: 517642 — borosilicate crown class (catalog vendor unspecified). Standalone f = +77.120025 mm.** [2][3]

L6 is the positive component at the front of the fixed relay. The aperture stop is modeled immediately before its front surface. L6 supplies most of the isolated power of G4, while the following L7 weakens the group and changes its Petzval contribution. [2][3]

### L7 — Negative Meniscus, Relay Front

**nd = 1.75692, νd = 31.7. Glass: E-LAF11 (HIKARI; historical 757316 match to patent 757317 class). Standalone f = -271.716856 mm.** [2][3]

L7 is a weak negative element paired with L6 across a 1.0 mm air gap. The large index difference between the relay-front positive and negative components is the quantity constrained by patent condition (2). In the final data it is `1.75692 - 1.51680 = 0.24012`, within the corrected patent interval. The combined G4 focal length is +105.377057 mm. [1][3]

The patent prints +107.181 mm for the relay-front subgroup, but that value is not reproducible from the listed radii, thicknesses, and indices. The final model retains the prescription rather than altering it to force the tabulated subgroup value. [1][3]

### L8 — Negative Meniscus, Relay Rear

**nd = 1.71300, νd = 53.9. Glass: J-LAK8 (HIKARI; 713540 match to patent 713539 class). Standalone f = -82.941232 mm.** [2][3]

L8 is the principal negative element of the rear relay. It is separated from G4 by the patent’s 55.8 mm air space and is followed by L9 after a 0.2 mm gap. Its form is the negative meniscus governed by patent condition (4), which constrains the curvature ratio to control field behavior. [1][2]

### L9 — Biconvex Positive Singlet, Relay Rear

**nd = 1.51823, νd = 59.0. Glass: 518590 — crown class (catalog vendor unspecified). Standalone f = +89.228087 mm.** [2][3]

L9 nearly cancels the isolated negative power of L8. The L8/L9 rear pair computes to -5537.448408 mm, so it is slightly negative and near-afocal when isolated. The patent’s printed +6666.670 mm value is not reproducible and even has the opposite sign; source-precision testing does not resolve the discrepancy. [1][3]

The rear pair’s isolated focal length does not describe its in-situ behavior by itself. In the assembled lens it is entered by a converging ray at reduced height, and it adds a small positive reduced-angle increment to the traced unit input ray at all three zoom states. The complete G4+G5 relay remains positive at +112.519954 mm. [3]

## Glass Identification and Selection

The patent names no glass manufacturer or melt. The data file therefore stores six-digit index/Abbe classes except where a coefficient-backed historical catalog equivalent reproduces the published optical constants. These matches are evidence for class equivalence only; they are not claims that Nikon used those exact catalog products. [1][2][3]

| Data annotation | nd | νd | Elements | Optical use in this prescription |
|---|---:|---:|---|---|
| 564608 — dense barium crown class | 1.56384 | 60.8 | L1 | Front positive singlet |
| 603607 — dense crown class | 1.60311 | 60.7 | L2a | Positive member of D1 |
| 805255 — dense flint class | 1.80518 | 25.5 | L2b | Negative dispersive member of D1 |
| 755275 — dense flint class | 1.75520 | 27.5 | L3a, L5b | Variator-positive and compensator-negative members |
| 517642 — borosilicate crown class | 1.51680 | 64.2 | L3b, L6 | Variator-negative and relay-positive members |
| 589612 — dense barium crown class | 1.58913 | 61.2 | L4 | Air-spaced variator negative |
| 620603 — dense crown class | 1.62041 | 60.3 | L5a | Strong compensator positive |
| E-LAF11 (HIKARI; historical 757316 match to patent 757317 class) | 1.75692 | 31.7 | L7 | Weak relay-front negative |
| J-LAK8 (HIKARI; 713540 match to patent 713539 class) | 1.71300 | 53.9 | L8 | Rear-relay negative meniscus |
| 518590 — crown class | 1.51823 | 59.0 | L9 | Final relay positive |

The refreshed catalog audit resolves every element to strict Sellmeier data. A historical Nikon Zemax catalog archived by RefractiveIndex.INFO gives E-LAF11 at `nd = 1.756920`, `νd = 31.591`, and J-LAK8 at `nd = 1.713000`, `νd = 53.96`. Those values reproduce the patent's d-line indices and one-decimal Abbe classes, so the model uses the coefficient-backed names while preserving the patent codes in the annotations. Neither match asserts the production melt. [2][3][5]

The source provides no `nC`, `nF`, `ng`, `PgF`, or `dPgF` values. The data file therefore has no line-index or anomalous-partial-dispersion fields. The design may be discussed as an achromatized zoom in the ordinary first-order sense, but the available evidence does not support an APO or anomalous-dispersion claim. [1][2]

## Focus Mechanism

The patent states that G1 focuses by axial displacement and that the remaining zoom and relay groups maintain the focal plane. It does not publish finite-object spacings for Embodiment 1. The data therefore labels its finite-focus state **CONSTRAINED_RECONSTRUCTION**, not `PUBLISHED`. [1][2]

The reconstruction uses the production instruction manual’s 1.8 m distance-scale limit as the final data file’s close-focus constraint, measured from the focal plane. Only G1 translates objectward; the relay and image plane remain fixed. In the relative surface table this is represented by increasing D5 by the same amount as the G1 translation. It is a paraxially solved mechanism-constrained model, not a factory cam law. [2][3][6]

| Zoom state | G1 objectward shift (mm) | D5 at infinity (mm) | D5 at 1.8 m (mm) | Calculated magnification |
|---:|---:|---:|---:|---:|
| 80.0 mm | 9.868762 | 3.229 | 13.097762 | -0.054328 |
| 126.5 mm | 9.917810 | 28.213 | 38.130810 | -0.085926 |
| 200.0 mm | 9.942508 | 44.014 | 53.956508 | -0.135888 |

The required shift changes by only 0.073745 mm across the zoom range. That small variation is compatible with a mechanically coupled front focusing cell, but it is still a modeling inference rather than proof of the production cam profile. [3]

## Conditional Expressions

The patent defines six open-interval conditions. Condition (2) is used in the corrected order `n_b - n_a`; the Certificate of Correction reverses the misprinted original inequality. Values below are recomputed from the final TypeScript arrays rather than copied from the patent’s disputed subgroup focal-length entries. [1][3]

| Condition | Recomputed value | Required open interval | Result |
|---|---:|---:|---|
| (1) `fR / f4` | 1.067784 | 0.8 to 1.1 | Pass |
| (2) `n_b - n_a` | 0.240120 | 0.05 to 0.45 | Pass |
| (3) `f1 / fR` | 1.081569 | 0.7 to 1.8 | Pass |
| (4) `(r_a + r_b) / (r_a - r_b)` | -3.804025 | -5.0 to -2.0 | Pass |
| (5) `f1 / f2` | -3.254111 | -3.6 to -2.5 | Pass |
| (6) `(r_c + r_d) / (r_c - r_d)` | 0.685823 | 0.5 to 2.5 | Pass |

Conditions (1) and (2) govern the relay’s power distribution and index contrast; condition (3) relates the front focusing group to the relay; condition (4) constrains the rear negative meniscus form; and conditions (5) and (6) constrain variator/compensator motion and the object-side negative component in G2. All six conditions remain satisfied by the actual prescription. [1][3]

## Verification Summary and Modeling Disclosures

### Cardinal quantities

| Nominal state | Computed EFL (mm) | Published EFL (mm) | Computed paraxial BFD (mm) | Published BFD (mm) | Modeled f-number |
|---:|---:|---:|---:|---:|---:|
| 80.0 mm | 80.102454 | 80.0 | 42.411727 | 42.495 | 4.504035 |
| 126.5 mm | 126.598870 | 126.5 | 42.339518 | 42.495 | 4.501224 |
| 200.0 mm | 199.911568 | 200.0 | 42.172969 | 42.495 | 4.494741 |

The EFL residuals are within 0.129% of the printed nominal values. The calculated BFD is shorter than the published 42.495 mm by 0.083 to 0.322 mm. These differences are treated as source-precision or unrounded-master residuals; the surface prescription is not altered to force exact agreement. [1][3]

The patent’s half-field angles of 15.11°, 9.66°, and 6.17° correspond to approximately 21.6 mm image height at the three focal lengths, consistent with the half-diagonal of the 135 format specified in the data file. [1][3]

### Petzval result

Surface-by-surface Petzval power was computed as `φ/(n·n′)`. G2 contributes the dominant negative term, -0.018102064 mm^-1. G1, G3, and G4 contribute +0.005618752, +0.007151874, and +0.006429503 mm^-1, while G5 contributes -0.000045110 mm^-1. The total is +0.001052955274 mm^-1, corresponding to a Petzval radius of -949.708 mm under the audit’s image-sag sign convention. [3]

### Stop placement and semi-diameters

The patent figure shows an aperture stop in D13 but gives neither its exact split nor its clear radius. The model places a neutral `STO` immediately before r14, coincident with the r14 vertex, and uses a common stop semi-diameter of 12.482215 mm. That single stop gives modeled f-numbers of 4.5040, 4.5012, and 4.4947 across the zoom range. Stop position and radius are therefore explicit modeling inferences. [1][2][3]

The patent also omits clear apertures. Surface semi-diameters were inferred from the paraxial marginal/chief-ray envelopes, the published field, the patent section, and mechanical-envelope evidence recorded in the audit. A normalized FIG. 1 comparison showed that the relay-front L6/L7 pair was small relative to the variator and rear relay, so surfaces 14-17 were increased to a common 15.0 mm semi-diameter. The remaining group-height ratios were within the drawing's measurement tolerance and were retained. The revised prescription passes the surface-clearance and image-circle validators. At the full patent field and at reconstructed close focus, one-sided pupil clipping remains, consistent with the disclosed decision not to enlarge inferred glass solely to eliminate falloff. [2][3][6]

### Source corrections and unresolved table values

The descriptive Embodiment 1 table gives the middle D5 value as 28.213 mm; Claim 9 gives 28.313 mm. The model retains 28.213 mm because it preserves the nearly fixed relay position and produces the better whole-system cardinal match. The 0.100 mm conflict remains documented rather than silently normalized. [1][2][3]

The patent’s relay-front focal length of +107.181 mm and relay-rear focal length of +6666.670 mm are not reproduced by the listed prescription. Independent calculations give +105.377057 mm and -5537.448408 mm. The combined relay, however, computes to +112.519954 mm, within 0.003046 mm of the patent’s +112.523 mm. The prescription is retained without artificial changes to force the two subgroup entries. [1][3]

No dimensional scaling was applied, and there are no aspheric coefficients to transform. No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical part was omitted from an otherwise active optical path; the patent prescription contains none of these active surfaces. [1][2]

## Design Heritage and Context

Nikon’s historical *NIKKOR — The Thousand and One Nights* account identifies the 1970 ZOOM-NIKKOR Auto 80-200mm f/4.5 as establishing a distinctive afocal-zoom type. The selected 1977-priority patent retains that broad concept: a nearly afocal positive-negative-positive variable section feeding a relay. The official historical account supports the design lineage, but it does not independently identify Embodiment 1 as the exact production AI prescription. The exact correlation remains the fixed project selection supported by the matching focal range, aperture, format, element/group count, focus architecture, and period. [4]

## Sources and References

1. Norio Mizutani and Yoshinari Hamanishi, **US 4,223,981, “Telephoto Zoom Lens,”** Nippon Kogaku K.K., granted September 23, 1980; Embodiment 1 numerical table, Claim 9, and Certificate of Correction dated April 21, 1981.
2. `NikonAINikkor80200mmf45.data.ts`, final audited LensVisualizer data file.
3. `NikonAINikkor80200mmf45.audit.md` and associated Stage 4 calculation artifacts: cardinal matrices, group powers, focus reconstruction, Petzval sums, pupil model, geometry validation, and glass audit.
4. Nikon, [“NIKKOR — The Thousand and One Nights No. 15”](https://imaging.nikon.com/imaging/information/story/0015/), historical discussion of Nikon zoom development and the afocal-type ZOOM-NIKKOR Auto 80-200mm f/4.5 lineage.
5. Nikon/HIKARI, [Optical Glass Catalog](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/), used for the current-catalog class audit; and RefractiveIndex.INFO's [HIKARI E-LAF11](https://refractiveindex.info/?book=HIKARI-optical&page=E-LAF11&shelf=specs) and [HIKARI J-LAK8](https://refractiveindex.info/?book=HIKARI-optical&page=J-LAK8&shelf=specs) records, preserving data attributed to a November 2017 Nikon Zemax catalog. None establishes the production melt used in the patent lens.
6. Nikon, *Zoom-Nikkor 80-200mm f/4.5 Ai Instruction Manual* (1977), specifications and optical drawing preserved in the [Photography in Malaysia archive](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/zoomsMF/80200mm1.htm); production distance-scale and mechanical-envelope values are used only as reconstruction constraints, not as prescription data.
