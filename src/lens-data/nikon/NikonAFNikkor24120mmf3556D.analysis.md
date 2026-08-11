## Patent Reference and Design Identification

**Patent:** US 5,734,508 A

**Application number:** US 08/857,085

**Priority:** September 26, 1994

**Filed:** May 15, 1997, as a continuation of US 08/533,957 filed September 26, 1995

**Granted:** March 31, 1998

**Inventor:** Haruo Sato

**Assignee:** Nikon Corporation

**Title:** High-Magnification Wide-Angle Zoom Lens

**Embodiment analyzed:** Working Example 1

The prescription is correlated with the production **NIKON AI AF ZOOM-NIKKOR 24-120mm f/3.5-5.6 D IF**. The patent does not identify that commercial lens by name, so the match is a production-correlation inference rather than an explicit manufacturer confirmation. Several independent criteria converge:

1. Working Example 1 has a positive-negative-positive-positive, four-moving-group arrangement. Nikon describes the production lens with the same convex-concave-convex-convex four-group structure.
2. The patent contains 15 physical optical elements in 11 air-spaced groups, matching Nikon's published production construction.
3. The patent places aspheres on physical elements 4 and 13. Nikon identifies the same two element positions and describes one composite asphere and one glass-molded asphere.
4. The patent focuses by moving the second group. Nikon likewise identifies second-group internal focusing and a focus cam coupled to zoom position.
5. The patent design covers approximately 24.7-116.5 mm, while the marketed range is 24-120 mm. The data file therefore keeps the unscaled design and stores the marketed range separately.
6. Nikon attributes design responsibility for the production lens to Haruo Sato, the patent's sole inventor. The September 1994 priority date precedes the product's October 10, 1996 release by a plausible development interval.

The final data file retains the patent dimensions at scale 1.0. Its structured source metadata, production name, element and group counts, mount, format, focus model, and asphere labels govern this analysis.

## Optical Architecture

The lens is a positive-lead, high-ratio zoom with four independently moving power groups:

| Functional group | Prescription span | Computed focal length in air | Principal function |
|---|---|---:|---|
| G1 | 12-16 | +85.2500 mm | Positive front collector and principal entrance group |
| G2 | 17A-26 | -13.1995 mm | Strong negative variator and sole internal-focus group |
| G3F | 27-31 | +36.5276 mm | Positive front section of the third patent group |
| G3R | 32-38 | +58.2911 mm | Positive rear relay and final correction group |

The production count is 15 elements in 11 air-spaced groups. The data model contains 16 refractive material entries because the deposited resin layer and glass substrate of physical element L21 are represented separately. This split preserves the real index transition at the hybrid interface without changing the production `elementCount`.

The patent's nominal third group is divided into G3F and G3R, both positive and independently movable. The aperture stop lies immediately before G3F and remains 1.00 mm in front of surface 27, so the stop travels with G3F. Exactly one `STO` is present.

At the three published infinity states, the computed focal lengths are 24.7011, 50.0044, and 116.5177 mm. Relative to the fixed image plane, every functional group moves objectward from the wide to the tele endpoint:

| Group reference | Wide-to-tele movement |
|---|---:|
| G1 | -53.0561 mm |
| G2 | -18.6929 mm |
| STO/G3F | -31.8336 mm |
| G3R | -36.7411 mm |

Only the three patent-tabulated states are treated as source-defined. Piecewise interpolation may be used by the viewer, but the patent contains contradictory prose about whether G3R follows a linear or nonlinear cam law. No continuous motion law is inferred from those three samples.

The source's wide-angle `F/2.6` entry is inconsistent with the Working Example 1 aberration sheet, the commercial lens specification, and the nearly constant physical iris implied by the prescription. The data file therefore uses nominal design values of f/3.60, f/4.68, and f/5.90. A modeled stop semi-diameter of 7.92 mm yields paraxial f-numbers of 3.6315, 4.6708, and 5.8813, respectively.

The system is not a telephoto construction under the strict compactness criterion `total track / EFL < 1`; the ratios are 5.051, 2.944, and 1.526. The wide and middle states are retrofocus by the strict criterion `BFD > EFL`, whereas the long state is not.

## Element-by-Element Analysis

### C1 — L11 and L12, Cemented Front Pair

**L11:** `nd = 1.86074`, `νd = 23.0`. Glass: `J-SFH2 (Hikari; patent code 861230)`. `f = -123.129151 mm`.

**L12:** `nd = 1.71300`, `νd = 53.9`. Glass: `LAC8 (coordinate equivalent; patent code 713539)`. `f = +98.256075 mm`.

L11 is the negative front member of G1, cemented to the positive L12. Their standalone powers are appreciable and opposite, while their computed cemented net focal length is a weak positive `+504.620608 mm`. The pair therefore contributes modest positive power while using a substantial Abbe-number contrast to control the front group's chromatic balance.

The numerical radii make L12 a positive meniscus. The patent's descriptive prose calls it biconvex, which conflicts with the prescription table and the stated radius-sign convention. The data follows the numerical table.

### L13 — Positive Meniscus

`nd = 1.77279`, `νd = 49.5`. Glass: `773495 — lanthanum crown / TAF class (vendor unresolved)`. `f = +101.136205 mm`.

L13 is the second air-spaced positive member of G1. Together with the weak-positive C1 pair, it establishes the positive front-group power needed for the fivefold zoom while keeping the first group shorter than an equivalent design that attempted to obtain the same wide field with front-group focusing.

### L21 — Hybrid Aspheric Negative Meniscus

**L21r — resin layer:** `nd = 1.49521`, `νd = 56.3`. Glass: `Unmatched (hybrid aspheric resin, nd=1.49521, vd=56.3)`. Standalone `f = -382.757914 mm`.

**L21g — glass substrate:** `nd = 1.84042`, `νd = 43.4`. Glass: `Unmatched (840434 high-index glass)`. Standalone `f = -18.834706 mm`.

The 0.03 mm resin layer and the substrate form one physical production element but two modeled refractive media. Their computed hybrid net focal length is `-17.902457 mm`, showing that the substrate carries nearly all of the element's negative power while the thin resin layer supplies the aspheric profile.

This is the first element of G2 and the fourth physical optical element. The patent assigns the G2 asphere a principal role in suppressing wide-angle distortion. Its location at the front of the strongly negative variator also allows a relatively small departure to influence high-angle bundles before the remaining G2 correction sequence.

### C2 — L22 and L23, Negative Cemented Pair

**L22:** `nd = 1.84042`, `νd = 43.4`. Glass: `Unmatched (840434 high-index glass)`. `f = -16.254156 mm`.

**L23:** `nd = 1.68893`, `νd = 31.1`. Glass: `689311 — high-dispersion flint class (vendor unresolved)`. `f = +59.634730 mm`.

L22 is strongly negative and L23 is positive, but the cemented pair remains negative with a computed net focal length of `-22.139484 mm`. This pair reinforces the variator power while moderating the aberrations that a single very strong negative lens would introduce. Its internal index and dispersion step is retained explicitly at the cemented interface.

### L24 — Biconvex Positive Lens

`nd = 1.75520`, `νd = 27.6`. Glass: `755276 — SF4 class (vendor unresolved)`. `f = +18.572686 mm`.

L24 is the strongest standalone positive lens in G2. Its computed shape factor is `q = -0.182246`, the value tabulated by the patent for condition (8). The patent links this biconvex positive lens and the following meniscus-shaped air space to spherical-aberration and coma correction, particularly toward the telephoto end.

The patent's condition table labels the lens as L23, but the stated value does not match the radii of prose-designated L23. It matches surfaces 23-24, which the descriptive text identifies as L24. The data preserves the radii and corrects only the attribution in explanatory prose.

### L25 — Rear Negative Meniscus of G2

`nd = 1.77279`, `νd = 49.5`. Glass: `773495 — lanthanum crown / TAF class (vendor unresolved)`. `f = -33.392855 mm`.

L25 closes the negative variator and forms the imagewise boundary of the air lens following L24. Its negative power helps return the complete G2 group to the required `-13.1995 mm` focal length after the strong positive contribution of L24.

Because G2 is also the focus group, the aberration balance established by L21 through L25 must remain usable over both zoom and object-distance changes. The patent specifically favors second-group focusing because its required travel is small and its aberration variation is lower than front-group focusing.

### L3F1 — Biconvex Positive Lens

`nd = 1.51680`, `νd = 64.1`. Glass: `517641 — BK7 class (vendor unresolved)`. `f = +37.239400 mm`.

L3F1 is the first refractive element behind the traveling stop. It supplies the principal positive convergence of G3F and begins the relay from the negative variator toward the rear correction section.

### C3 — L3F2 and L3F3, Weak-Negative Cemented Pair

**L3F2:** `nd = 1.51680`, `νd = 64.1`. Glass: `517641 — BK7 class (vendor unresolved)`. `f = +21.536693 mm`.

**L3F3:** `nd = 1.79631`, `νd = 40.9`. Glass: `NBFD2 (HOYA catalog equivalent; production supplier unspecified; patent 796409)`. `f = -17.966261 mm`.

Although L3F2 is positive and L3F3 is negative, their computed cemented net focal length is `-309.447249 mm`: a weak negative pair. This does not make G3F negative. L3F1 is sufficiently positive that the complete group remains `+36.527636 mm`. The distinction between standalone element powers, cemented net power, and complete-group power is essential to interpreting this section.

The pair combines a lower-index, higher-Abbe positive member with a higher-index, lower-Abbe negative member. That relationship is consistent with ordinary achromatizing practice, but no precise secondary-spectrum claim is made because the data contains no verified line indices or partial-dispersion values.

### L3R1 — Biconvex Positive Lens

`nd = 1.65844`, `νd = 50.8`. Glass: `J-SSK5 (Hikari; patent code 658508)`. `f = +23.473405 mm`.

L3R1 is the positive lead element of G3R. Its equal-and-opposite radii give a computed shape factor of zero, satisfying patent condition (9). It provides strong positive power before the aspheric negative meniscus and final cemented pair.

### L3R2 — Aspheric Negative Meniscus

`nd = 1.79668`, `νd = 45.4`. Glass: `795454 — LaSF class (catalog-near; vendor unresolved)`. `f = -60.366703 mm`.

L3R2 is physical element 13 and carries surface 34A. Nikon states that the 13th element's asphere corrects spherical aberration and coma generated by the fourth group. Its position after the strong positive L3R1 allows the surface to act on converging bundles before the final cemented pair.

The numerical radii define a negative meniscus with an objectwise convex first surface under the patent's sign convention. The patent prose describes surface 34 as objectwise concave, another descriptive mismatch for which the numerical prescription governs.

### C4 — L3R3 and L3R4, Final Cemented Pair

**L3R3:** `nd = 1.83400`, `νd = 37.4`. Glass: `NBFD10 (HOYA catalog equivalent; production supplier unspecified; patent 834374)`. `f = -18.604546 mm`.

**L3R4:** `nd = 1.51823`, `νd = 58.9`. Glass: `J-K3 (Hikari; patent code 518589)`. `f = +25.816330 mm`.

The final pair has a computed net focal length of `-80.920563 mm`, yet G3R remains positive because L3R1 and the rest of the group supply greater positive power. The refractive-index difference is `1.83400 - 1.51823 = 0.31577`, matching patent condition (7).

The patent places this compound lens at the imagewise end of G3R and explicitly relates its index contrast to Petzval control, coma correction, and lateral-aberration control. The complete prescription's Petzval sum is slightly positive rather than strongly negative, consistent with that stated design objective.

## Glass Identification and Selection

The patent supplies `nd` and `νd` but does not name glass manufacturers or publish per-element `nC`, `nF`, `ng`, Sellmeier coefficients, or `dPgF`. Five rows can nevertheless be tied to published catalog coordinates: patent code 658508 is an exact Hikari J-SSK5 match; 861230 and 518589 are one rounding digit from current J-SFH2 and J-K3 while retaining the same `nd` and rounded `νd`; 713539 is the exact published LAC8 coordinate; and 834374 rounds safely to legacy HOYA NBFD10 at `1.83400 / 37.34`. SUMITA K-LaSFn14 and OHARA S-LAH60 independently place the same glass family at `1.83400 / 37.3` and `1.83400 / 37.16`, respectively, while the patent establishes no production supplier. The remaining materials keep code-level or explicit `Unmatched (...)` descriptions.

| Elements | `nd` | `νd` | Data-file identification |
|---|---:|---:|---|
| L11 | 1.86074 | 23.0 | J-SFH2; current Hikari code 861231, patent code 861230 |
| L12 | 1.71300 | 53.9 | LAC8 coordinate equivalent; exact patent code 713539 |
| L13, L25 | 1.77279 | 49.5 | 773495 — lanthanum crown / TAF class, vendor unresolved |
| L21 resin | 1.49521 | 56.3 | Unmatched hybrid aspheric resin |
| L21 substrate, L22 | 1.84042 | 43.4 | Unmatched 840434 high-index glass |
| L23 | 1.68893 | 31.1 | 689311 — high-dispersion flint class, vendor unresolved |
| L24 | 1.75520 | 27.6 | 755276 — SF4 class, vendor unresolved |
| L3F1, L3F2 | 1.51680 | 64.1 | 517641 — BK7 class, vendor unresolved |
| L3F3 | 1.79631 | 40.9 | NBFD2 (HOYA catalog equivalent; supplier unspecified) |
| L3R1 | 1.65844 | 50.8 | J-SSK5; exact Hikari/patent code 658508 |
| L3R2 | 1.79668 | 45.4 | 795454 — LaSF class, catalog-near and vendor unresolved |
| L3R3 | 1.83400 | 37.4 | NBFD10 catalog equivalent; production supplier unspecified |
| L3R4 | 1.51823 | 58.9 | J-K3; current Hikari code 518588, patent code 518589 |

Nikon's archived product specification lists no ED elements. The prescription likewise contains no glass whose identification is asserted as ED, and the absent spectral fields prevent a defensible claim of anomalous partial dispersion or apochromatic correction. Chromatic interpretation is limited to the broad dispersion relationships supported by `nd` and `νd`.

## Focus Mechanism

The patent uses G2 as the sole focus group. At its published finite-distance reference state, the beta value is approximately `-0.0333` at all three zoom positions. The change in `d16` is opposed by the change in `d26`; the printed sums `d16 + d26` are identical at the wide and tele states and differ by only `0.0001 mm` at the middle state, consistent with source-table rounding. G1, the stop/G3F assembly, G3R, `d31`, and the back-focus spacing remain fixed during focus at any selected zoom position.

The data file assigns the overall focus status **CONSTRAINED_RECONSTRUCTION**. The patent's infinity states are transcribed directly, but its finite-distance rows do not reach the production lens's marketed 0.5 m endpoint. The close endpoint was therefore solved independently under the mechanism established by the patent and Nikon:

- object distance fixed at 0.5 m from the image plane;
- G2 as the only moving focus group;
- `d16 + d26` conserved at each zoom position;
- `d31` and back focus fixed.

| Zoom position | `d16` infinity → 0.5 m | `d26` infinity → 0.5 m | Computed close magnification |
|---:|---:|---:|---:|
| 24.7 mm | 1.967000 → 1.138633 mm | 14.091900 → 14.920267 mm | -0.059594× |
| 50.0 mm | 17.586400 → 16.150846 mm | 6.788700 → 8.224254 mm | -0.114610× |
| 116.5 mm | 36.330200 → 32.822472 mm | 0.951200 → 4.458928 mm | -0.217560× |

The telephoto reconstruction corresponds to approximately 1:4.60, whereas Nikon publishes a rounded maximum reproduction ratio of 1:4.8. The approximately 4.4% difference is retained rather than forced away. It can arise from rounded marketing values, paraxial versus finite-aperture behavior, reference-plane interpretation, and the fact that the patent-to-product match remains a correlation rather than a manufacturer-certified production prescription.

Nikon's design history explains that second-group focusing reduces the required focus travel and avoids the front-element enlargement associated with front-group focusing. It also describes a focus cam coupled to the zoom cam to compensate for focal shift when changing focal length at close distances. The data represents the optical spacing endpoints, not the mechanical cam profile.

## Aspherical Surfaces

Working Example 1 uses the standard conic form

`Z(h) = (h²/R) / [1 + sqrt(1 - (1 + K)(h/R)²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰`.

The patent's coefficient `k` is therefore the same convention as the data file's `K`; no `K = k - 1` conversion is required. Both surfaces use `K = 0`, so the polynomial departure is referenced to a spherical base.

| Surface | Physical element | Construction | `K` | `A4` | `A6` | `A8` | `A10` |
|---|---|---|---:|---:|---:|---:|---:|
| 17A | L21, element 4 | Composite resin on glass substrate | 0 | +1.56850e-5 | -2.03900e-8 | +2.61860e-11 | +8.50420e-14 |
| 34A | L3R2, element 13 | Glass asphere | 0 | -3.43240e-5 | -7.40540e-8 | -3.47150e-10 | -1.08970e-12 |

Surface 17A has a patent-published clear diameter of 27.3 mm. At the verified semi-height of 13.65 mm, its departure from the reference sphere is `+0.463287528 mm`, giving `|AS1-S1|/fw = 0.0187566`. The positive net departure is consistent with the patent's use of this surface to alter the peripheral power of the negative G2 front element and suppress wide-angle distortion.

Surface 34A has a patent-published clear diameter of 15.6 mm. At the verified semi-height of 7.80 mm, its departure is `-0.149392111 mm`, giving `|AS2-S2|/fw = 0.00604826`. Nikon identifies the corresponding 13th physical element as the glass-molded asphere used for fourth-group spherical-aberration and coma correction.

No dimensional scaling was applied. All radii, thicknesses, semi-diameters, and image-plane spacings remain in patent millimeters, and the aspheric coefficients are copied without transformation. Had a scale factor `s` been used, each coefficient would require `A_p / s^(p-1)` while `K` remained unchanged; that operation is not present here.

## Source Corrections and Modeling Boundaries

The model preserves source values where possible and records the following boundaries explicitly:

1. **Wide-angle f-number:** Table 1 prints f/2.6. The Working Example 1 aberration sheet reads f/3.60, and the physical-stop reconstruction supports the sequence f/3.60, f/4.68, f/5.90. The table value is treated as an uncorrected source error.
2. **Condition (8) label:** The numerical value `-0.182` belongs to L24 at surfaces 23-24, not to prose-designated L23 at surfaces 21-22.
3. **Element-shape prose:** The prescription makes L12 a positive meniscus despite the prose description “biconvex,” and makes the objectwise surface of L3R2 convex under the stated sign convention despite the prose description “objectwise concave.” Numerical radii govern.
4. **Zoom cam law:** One patent passage describes G3R as linear; the Working Example introduction describes it as nonlinear. Only the tabulated zoom states are asserted.
5. **Spectral nomenclature:** The general definition calls D light 589.3 nm, while the Working Example defines its stored index at approximately 587.6 nm. The data treats the tabulated values as standard photographic `nd` and `νd` at the helium d line.
6. **Focus endpoint:** The 0.5 m state is a code-solved, mechanism-constrained reconstruction, not a patent-tabulated row.
7. **Semi-diameters:** Only surfaces 17A and 34A have patent-published clear diameters. Other semi-diameters were inferred from exact d-line ray envelopes, the patent section drawing, and current geometry constraints. Surface 34A is retained as a genuine wide-angle vignetting boundary rather than enlarged to pass every sampled off-axis ray.
8. **Stop geometry:** The axial stop placement is published, but the 7.92 mm physical stop semi-diameter is inferred from the verified f-number sequence and entrance-pupil calculation.
9. **Excluded planes:** Working Example 1 contains no sensor cover plate, filter plate, inactive dummy plane, flare cutter, or mechanical optical plane requiring omission or air-equivalent replacement. No plate correction is folded into the rear spacing.
10. **Product correlation:** The commercial identity is strongly supported but remains an inference because neither the patent nor Nikon explicitly states that Working Example 1 is the production prescription.

## Conditional Expressions

All ten patent conditions pass when evaluated against the final data arrays and the corrected lens attribution for condition (8).

| Condition | Quantity | Computed value | Patent value or range | Result |
|---:|---|---:|---|---|
| 1 | `|f2| / fw` | 0.534394 | 0.3-0.8; table 0.534 | Pass |
| 2 | `X2T / fw` | -0.756798 | -1.5 to -0.3; table -0.757 | Pass |
| 3 | `f3F / f3R` | 0.626642 | 0.35-0.8; table 0.627 | Pass |
| 4 | `|AS1-S1| / fw` | 0.0187566 | 0-0.1; table 0.01877 | Pass |
| 5 | `|AS2-S2| / fw` | 0.00604826 | 0-0.05; table 0.00610 | Pass |
| 6 | `f21 / f2` | 1.356294 | 0.7-1.6; table 1.356 | Pass |
| 7 | `nnegative - npositive` in C4 | 0.315770 | 0.15-0.45; table 0.316 | Pass |
| 8 | `qG2` for L24, surfaces 23-24 | -0.182246 | -1 to 1; table -0.182 | Pass |
| 9 | `qG3R` for L3R1 | 0.000000 | -1 to 1; table 0.0 | Pass |
| 10 | G2 tele conjugate magnification `β2T` | -0.481161 | -0.9 to -0.2; table -0.481 | Pass |

Condition (8) is also an internal source check. Applying the printed value to prose-designated L23 yields `q = +2.208825`, outside the stated interval; applying it to the actual biconvex L24 reproduces the table.

## Verification Summary

The final TypeScript arrays were traced independently with sequential height/reduced-angle propagation and an ABCD matrix cross-check. The maximum matrix-versus-scalar basis residual is below `1e-12`.

| Zoom state | Computed EFL | Computed BFD | First-surface-to-image track | `TL/EFL` | `BFD/EFL` |
|---:|---:|---:|---:|---:|---:|
| 24.7 mm | 24.701065 mm | 39.341081 mm | 124.7536 mm | 5.0505 | 1.5927 |
| 50.0 mm | 50.004381 mm | 56.943574 mm | 147.2299 mm | 2.9443 | 1.1388 |
| 116.5 mm | 116.517708 mm | 76.092803 mm | 177.8097 mm | 1.5260 | 0.6531 |

The surface-by-surface Petzval calculation, using `φ / (n n')`, totals `+0.00152218530246 mm^-1`, corresponding to a reciprocal radius of approximately `+656.950 mm` under the adopted sign convention. This small positive sum results from substantial cancellation: G2 drives the running sum negative, while the rear positive surfaces and final high-index/low-index cemented pair restore it toward zero.

The patent-figure semi-diameter pass enlarged the front pair, L13, L22/L23, and the final cemented pair while preserving the two source-published asphere apertures. The final geometry passes the local edge-thickness, rim-slope, conic-domain, and cross-gap checks at all six endpoint states. On-axis endpoint rays remain contained. Sampled wide-angle off-axis rays first vignette at source-published surface 34A rather than at a cemented interface.

## Sources

- Haruo Sato, **“High-Magnification Wide-Angle Zoom Lens,”** US 5,734,508 A, Working Example 1, especially Fig. 2 and Tables 1-3, including the Certificate of Correction.
- Nikon Corporation, **“NIKKOR — The Thousand and One Nights No. 58: AI AF Zoom-Nikkor 24-120mm f/3.5-5.6D (IF).”** https://imaging.nikon.com/imaging/information/story/0058/
- Nikon Imaging Japan, **“AI AF Zoom Nikkor 24-120mm F3.5-5.6D(IF)”** archived product specification. https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_zoom_nikkor_24-120mm_f35-56d_if/
- Nikon/Hikari, **Optical Glass Catalog 2023**, J-SFH2, J-SSK5, and J-K3 formula-3 data. https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
