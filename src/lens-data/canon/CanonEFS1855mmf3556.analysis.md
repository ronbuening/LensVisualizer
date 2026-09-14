## Patent Reference and Design Identification

**Patent:** JP2005092056A\
**Application Number:** JP2003328074A\
**Filed / Priority:** 2003-09-19\
**Published:** 2005-04-07\
**Inventor:** Takeshi Nishimura\
**Applicant:** Canon Inc.\
**Title:** Zoom lens system and image pickup device having zoom lens system\
**Embodiment analyzed:** Numerical Example 5 (数値実施例5)

The prescription represented here is the project-selected correlation between Numerical Example 5 of JP2005092056A and the CANON EF-S 18-55mm f/3.5-5.6. The patent itself does not name the commercial lens, so this identification is a production-correlation inference rather than a manufacturer-confirmed patent attribution. Several independent facts converge on the selection:

1. Numerical Example 5 is an 18.00-55.00 mm design, while the production lens is marketed as an 18-55 mm zoom.
2. The example contains 11 elements in 9 air-separated physical groups. Canon gives the production lens as 11 elements in 9 groups.
3. Numerical Example 5 has one aspherical surface, on patent surface R19. Canon's block diagram for the production lens identifies an aspherical lens.
4. The example uses the negative-positive-negative-positive four-group zoom architecture described by the patent for a short-back-focus digital SLR lens. Canon describes the original EF-S 18-55 mm system as a short-back-focus design for an APS-C EOS digital SLR.
5. Canon gives 0.28 m closest focus and 0.28x maximum magnification for the production lens. The constrained close-focus reconstruction of this prescription reaches a paraxial magnification magnitude of 0.28385 at the 55 mm state.
6. The patent priority date, 19 September 2003, is contemporaneous with the introduction period of the first EF-S 18-55 mm design family.

The exact design values remain distinct from the marketed specification. The finished data model computes 18.000636 mm and 54.998753 mm at the endpoint zoom states, while the commercial name remains 18-55 mm. Likewise, the patent gives endpoint F-numbers of F/3.59 and F/5.99, which are not substituted with the marketed f/3.5-5.6 values.

A material source defect occurs in the selected A publication's Example 5 table on page 13. The table prints R10 as the aperture stop and R11 as infinity, although the element beginning at R9 requires a finite rear refracting surface before the stop. The patent's stated L2a-stop-L2b architecture, Fig. 13 on page 18, the conditional quantity `Lp/TD2`, and the row structure of another numerical example all require the stop to follow L2a. The model therefore uses a constrained source correction of `R10 = -44.181130175128175 mm` and places `STO` at the original R11 axial station. This is a modeling inference, not a verbatim patent radius. Re-fitting R10 from the final data arrays returns the same value; all three computed focal lengths remain within 0.005 mm of the patent's printed values over the independently determined admissible interval of approximately -44.18644 to -44.17707 mm.

No uniform scale is applied (`s = 1`). The data therefore retains the patent's dimensional scale, and no aspherical coefficient requires a scale transform.

## Optical Architecture

The lens is a four-zoom-group negative-positive-negative-positive system. The data file contains 11 physical glass elements in 9 air-separated groups, while the patent's functional zoom decomposition is L1-L2-L3-L4. These are different counts: the nine-group figure describes physical air separation, whereas the four-group description describes the moving optical units used for zooming.

At infinity focus, the computed air-bounded group focal lengths are approximately -26.1035 mm for L1, +23.1269 mm for L2, -28.6145 mm for L3, and +39.5706 mm for L4. These are group-matrix powers, not sums of the standalone element powers. L2 contains the positive E5 sub-unit L2a, the stop, and the cemented E6/E7 sub-unit L2b. L3 is the cemented E8/E9 pair. L4 contains the very weak E10 followed by the positive E11.

The zooming motion follows the patent's described kinematics. From 18 mm to 55 mm, D8 contracts from 32.31 to 2.05 mm, D14 expands from 1.62 to 7.91 mm, and D17 contracts from 7.72 to 1.44 mm. The fixed-image-plane coordinates show L1 moving imageward from the wide state to the middle state and then reversing objectward toward telephoto. L2 and L4 move objectward almost integrally: their total motions differ by only 0.010 mm, equal to one least-significant digit of the published spacing table. The sum `D14 + D17` is 9.34, 9.35, and 9.35 mm across the three states, which is the same source-precision result.

Under the project's strict first-order terminology, the lens satisfies `BFD > EFL` at all three modeled zoom states and therefore meets the project definition of retrofocus at each tabulated state. Only the 55 mm state also satisfies the project's telephoto criterion `TL/EFL < 1`, with `TL/EFL = 0.92348`. These classifications are computed descriptors, not terminology copied from Canon marketing material.

The model excludes sensor cover glass, filters, inactive dummy planes, and mechanical parts. Numerical Example 5 does not publish a rear plate requiring an air-equivalent substitution, so the modeled R21-to-image spacing is the independently computed paraxial BFD rather than a plate-corrected distance.

## Element-by-Element Analysis

The focal length stated for each individual element below is its independently computed standalone air-bounded thick-element focal length. For cemented elements, that number is deliberately kept separate from the power of the cemented assembly and from the behavior of the element inside the complete zoom group.

### E1 — Biconvex Positive

**nd = 1.516330, νd = 64.1. Glass: 516641 class (vendor unresolved). f = +181.904259 mm.**

E1 is a weak positive front element within the net-negative L1 zoom group. The patent places a positive lens at the object side of L1 as part of the wide-angle aberration-control strategy; its weak standalone power moderates the entering bundle before the stronger negative elements that follow. Its very weak rear curvature, R2 = -184142.483 mm, is retained as printed rather than rounded to a plane.

### E2 — Negative Meniscus

**nd = 1.622992, νd = 58.2. Glass: 623582 class (vendor unresolved). f = -28.908043 mm.**

E2 supplies strong negative standalone power in L1. Together with E3 it establishes most of the front group's divergence required by the negative-lead architecture. The group behavior must not be inferred by adding isolated focal powers: the complete L1 group, including E1 and E4 and the internal separations, has a computed focal length of -26.1035 mm.

### E3 — Biconcave Negative

**nd = 1.622992, νd = 58.2. Glass: 623582 class (vendor unresolved). f = -37.892180 mm.**

E3 is the second negative element of L1 and uses the same d-line coordinate class as E2. Its biconcave shape and negative standalone power reinforce the divergent action of the front group. The air gap between E2 and E3 is large enough that the pair is not a cemented achromat; their role is part of the distributed four-element L1 correction rather than a single bonded component.

### E4 — Positive Meniscus

**nd = 1.846660, νd = 23.9. Glass: 847239 class (vendor unresolved). f = +50.253395 mm.**

E4 closes the front zoom group with positive standalone power in a high-index, low-Abbe coordinate class. It counterbalances part of E2/E3's negative power while leaving L1 negative overall. Because only `nd` and `νd` are source-published, the element can be described as a high-index, relatively dispersive glass coordinate; no anomalous-partial-dispersion or APO behavior is assigned to it.

### E5 — Biconvex Positive

**nd = 1.572501, νd = 57.8. Glass: 573578 class (vendor unresolved). f = +57.992959 mm.**

E5 is the positive L2a element immediately ahead of the aperture stop. Its rear surface is the corrected R10 value rather than a directly printed patent number. The stop follows after the 2.90 mm Lp spacing, a placement that restores the patent's intended L2a-stop-L2b arrangement and reproduces the Example 5 conditional values.

E5 alone is substantially weaker than the full L2 group. The complete L2 group has a computed focal length of +23.1269 mm because the following cemented L2b pair contributes additional positive net power.

### E6 — Negative Meniscus, cemented L2b member

**nd = 1.846660, νd = 23.9. Glass: 847239 class (vendor unresolved). f = -50.344005 mm.**

E6 is the negative member of the cemented E6/E7 pair behind the stop. Its standalone focal length is negative, but the cemented pair is not: E6 and E7 together have a computed air-bounded focal length of +34.3049 mm. The strong contrast between E6's `νd = 23.9` and E7's `νd = 70.2` provides ordinary achromatizing leverage within the positive rear portion of L2. That statement is based on the d-line/Abbe pairing only and is not an apochromatic claim.

### E7 — Biconvex Positive, cemented L2b member

**nd = 1.487490, νd = 70.2. Glass: 487702 class (vendor unresolved). f = +20.164520 mm.**

E7 is the strong positive member of L2b. At the cemented R13 junction, the data correctly assigns the downstream medium and `elemId` to E7 rather than inserting a synthetic cement layer. Its large positive standalone power dominates the bonded pair's net positive action and helps bring the entire L2 group to +23.1269 mm.

### E8 — Biconcave Negative, cemented L3 member

**nd = 1.620041, νd = 36.3. Glass: 620363 class (vendor unresolved). f = -13.375923 mm.**

E8 is the strong negative member of the L3 compensator doublet. It is the strongest negative standalone element in the prescription, having the smallest absolute standalone focal length among the negative elements. Its function must nevertheless be distinguished from L3 as a whole: after the cemented interface and positive E9 are included, the pair has a computed net focal length of -28.6145 mm.

### E9 — Positive Meniscus, cemented L3 member

**nd = 1.755199, νd = 27.5. Glass: 755275 class (vendor unresolved). f = +23.149031 mm.**

E9 supplies positive counter-power within the net-negative L3 doublet. R16 is a cemented junction and therefore carries E9's downstream index and element identity in the data model. The positive member reduces the very strong negative action E8 would have as an isolated lens while allowing the third zoom group to remain negative.

### E10 — Weak Negative Meniscus (1x Asph)

**nd = 1.583060, νd = 30.2. Glass: Unmatched (nd=1.583060, vd=30.2; coordinate class 583302). f = -9994.646478 mm.**

E10 is effectively near-zero-power as an isolated spherical-base element. Its computed standalone focal length is nearly -10 m, so it should not be treated as the main source of L4's positive power. Its principal modeled significance is geometric and aberrational: the rear face R19A carries the prescription's only aspherical departure.

No defensible public catalog identity was retained for this coordinate among the checked authoritative catalogs. The data therefore uses the explicit `Unmatched (...)` form rather than assigning a speculative historical glass name.

### E11 — Positive Meniscus

**nd = 1.516330, νd = 64.1. Glass: 516641 class (vendor unresolved). f = +39.580844 mm.**

E11 supplies almost all of the positive standalone power in the rear L4 pair. The complete L4 group has a computed focal length of +39.5706 mm, nearly identical to E11's isolated value because E10 is optically very weak in first order. E11's strong rear curvature completes the final convergence toward the image plane.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not name glass manufacturers or catalog melts. The final data file therefore preserves eight coordinate classes rather than converting present-day catalog proximity into a historical identity. Current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs were used only to test whether the coordinates admit defensible modern equivalents; the resulting vendor names are not stored as production facts.

| Data-file glass annotation | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| 516641 class (vendor unresolved) | 1.516330 | 64.1 | E1, E11 | Coordinate class; several modern near-equivalents |
| 623582 class (vendor unresolved) | 1.622992 | 58.2 | E2, E3 | Coordinate class; several modern near-equivalents |
| 847239 class (vendor unresolved) | 1.846660 | 23.9 | E4, E6 | Coordinate class; high-index, relatively dispersive |
| 573578 class (vendor unresolved) | 1.572501 | 57.8 | E5 | Coordinate class |
| 487702 class (vendor unresolved) | 1.487490 | 70.2 | E7 | Coordinate class; relatively low dispersion |
| 620363 class (vendor unresolved) | 1.620041 | 36.3 | E8 | Coordinate class |
| 755275 class (vendor unresolved) | 1.755199 | 27.5 | E9 | Coordinate class |
| Unmatched (nd=1.583060, vd=30.2; coordinate class 583302) | 1.583060 | 30.2 | E10 | No defensible retained named match |

The glass strategy visible from `nd` and `νd` is conventional rather than apochromatic. The most conspicuous Abbe contrast occurs in the cemented L2b pair, where E6 (`νd = 23.9`) is paired with E7 (`νd = 70.2`). This supports ordinary chromatic balancing of the bonded positive sub-unit. The source provides no `nC`, `nF`, `ng`, `PgF`, or `dPgF` values, and no historical melt identity is established strongly enough to substitute catalog Sellmeier data as source fact. Consequently the model makes no APO or anomalous-partial-dispersion claim.

## Focus Mechanism

The patent specifies front-group focusing: L1 moves toward the object as focus is brought closer, while the remaining zoom groups stay fixed for the focusing operation. It does not publish finite-distance spacing rows for Numerical Example 5. The data therefore carries a disclosed `CONSTRAINED_RECONSTRUCTION` rather than a published focus table.

Canon gives the production lens a 0.28 m closest focusing distance. The reconstructed state treats that distance as measured from the image/focal plane, keeps the image plane and L2-L4 fixed, and solves only the L1 displacement through D8. The resulting three endpoint states are:

| Zoom position | D8 at infinity (mm) | D8 at 0.28 m (mm) | L1 objectward travel (mm) | Paraxial magnification |
|---:|---:|---:|---:|---:|
| 18.00 mm | 32.310000 | 35.824178 | 3.514178 | -0.092836 |
| 31.74 mm | 12.130000 | 15.493419 | 3.363419 | -0.156688 |
| 55.00 mm | 2.050000 | 5.566683 | 3.516683 | -0.283850 |

The reconstructed travel varies by only about 0.153 mm across the three zoom states, consistent with the patent's qualitative statement that the required front-group focus movement is substantially constant through the zoom range. At 55 mm, the paraxial magnification magnitude of 0.28385 is consistent with Canon's rounded 0.28x product specification. That agreement is a correlation check, not evidence that Canon published these reconstructed internal spacings.

R14, R17, and R21 are zoom-only variables in the finished data. R21 represents the computed infinity-focus BFD to the fixed image plane and is not changed by the L1-only focus reconstruction.

## Aspherical Surfaces

The only aspherical surface is R19A, the rear surface of E10. The patent's asphere equation uses a spherical conic base,

`x = [(1/R)h^2] / [1 + sqrt(1 - (h/R)^2)] + A h^2 + B h^4 + C h^6 + D h^8 + E h^10 + F h^12`,

so the LensVisualizer standard conic constant is `K = 0`. The patent's quadratic coefficient A is zero in Numerical Example 5. The remaining patent coefficients map directly as B→A4, C→A6, D→A8, E→A10, and F→A12.

| Coefficient | R19A value |
|---|---:|
| K | 0 |
| A4 | 2.76705e-5 |
| A6 | 1.09618e-7 |
| A8 | 2.25895e-11 |
| A10 | -1.44537e-11 |
| A12 | 1.26393e-13 |
| A14 | 0 |

No scaling is applied, so the stored coefficients are not transformed. The patent series terminates at A12 in LensVisualizer notation; the data carries A14 = 0 as an unused schema coefficient. At the verified modeled semi-diameter of 9.9 mm, the computed polynomial departure from the spherical base is +0.352405495 mm. The patent does not publish an aperture height for this surface, so that departure is explicitly tied to the validated modeled semi-diameter rather than represented as a patent-specified edge value. The source also does not establish whether the production surface was molded, polished, hybrid, or otherwise manufactured by a particular asphere process; no manufacturing type is assigned.

## Conditional Expressions

JP2005092056A states a set of first-order design conditions for the four-group system. Numerical Example 5's Table 1 on page 14 gives rounded values for all eight. The final data arrays independently reproduce the load-bearing quantities below except condition (2), for which the exact maximum image height H is not numerically tabulated in the selected example.

Two source-text corrections require explicit treatment. Paragraph 0019 of the A publication prints `2.6 < ft/fw < 4.0`, while paragraph 0025 prints `2.5 < ft/fw < 4.0`; the later corrected/granted Japanese text uses 2.5. The A publication also prints the denominator of condition (7) as `f1a` even though the surrounding definition is for the L2a focal length; the later corrected/granted text uses `f2a`. The table below uses the corrected variable name for the computed comparison while preserving the A-publication history in this note.

| Condition | Patent form | Computed from final data | Table 1, Example 5 | Result |
|---|---|---:|---:|---|
| (1) | `2.5 < ft/fw < 4.0` in ¶0025 | 3.055556 | 3.06 | within |
| (2) | `2.2 < bfw/H < 3.0` | not independently recoverable from prescription alone | 2.51 | source value only |
| (3) | `4.1 < TDw/fw < 5.0` | 4.502222 | 4.50 | within |
| (4) | `-0.3 < R1/R2 < 0.3` | -0.000510 | 0.00 | within |
| (5) | `0.1 < (f1/ft)^2 < 0.5` | 0.225254 | 0.23 | within |
| (6) | `0.01 < Lp/TD2 < 0.5` | 0.229249 | 0.23 | within |
| (7) | `0.2 < f2/f2a < 0.6` after correction | 0.398788 | 0.40 | within |
| (8) | `-0.75 < f1/f4 < -0.3` | -0.659668 | -0.66 | within |

Condition (6) is particularly relevant to the R10/R11 correction. With the stop at the restored R11 station, `Lp = 2.90 mm` and the computed ratio is 0.229249, reproducing the patent table's 0.23. The same repaired structure gives `f2/f2a = 0.398788`, reproducing 0.40. These independent checks support the corrected row interpretation without converting the inferred R10 radius into a claimed source value.

## Aperture and Semi-Diameter Modeling

Numerical Example 5 publishes endpoint F-numbers but no physical stop diameter. Back-solving the source endpoints from the prescription does not produce one common fixed stop radius at source precision. The final model therefore uses the exact endpoint design F-numbers and a disclosed middle-state aperture reconstruction rather than forcing the marketed f/3.5-5.6 values into the design geometry.

The modeled `nominalFno` values are 3.59, 4.42103340096855, and 5.99 at 18.00, 31.74, and 55.00 mm. The middle value is not patent-published. It is obtained by linearly interpolating the exact physical stop semi-diameter between the two endpoint states and then inverting the same pre-stop trace. The corresponding modeled stop semi-diameters are 6.264240, 6.362073, and 6.459907 mm.

The patent also gives no surface semi-diameters for Numerical Example 5. Every `sd` in the data file is therefore a modeling value derived from on-axis and off-axis ray envelopes and then constrained by the current geometry rules. The revised front rims pass the surface and image-circle audits at all published zoom stations, and renderer diagnostics show no significant hidden trimming across sampled focus and zoom states. The enlarged clear apertures preserve every previously surviving ray; the remaining SDs and the stop model are unchanged. These values validate the authored geometry; they are not patent clear-aperture specifications.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD composition agree to machine precision for the three infinity-focus zoom states. The final data arrays give:

| Patent zoom state | Computed EFL (mm) | Residual from printed f (mm) | Computed BFD (mm) |
|---:|---:|---:|---:|
| 18.00 mm | 18.000636211 | +0.000636211 | 34.211774808 |
| 31.74 mm | 31.743252801 | +0.003252801 | 45.841448661 |
| 55.00 mm | 54.998753440 | -0.001246560 | 64.597416005 |

All EFL residuals are below 0.005 mm, matching the source's 0.01 mm focal-length precision. The finite-conjugate close-focus solves give imaging-matrix B terms of 0, `1.14e-13`, and `-8.53e-14` mm, effectively zero at the precision relevant here.

Surface-by-surface Petzval is evaluated as `phi/(n*n')`, not from a grouped shortcut. The total for the repaired prescription is +0.00260585615078 mm^-1. This is a first-order curvature diagnostic and is not labeled as a measured or ray-traced best-focus field surface.

The geometry checks use the actual aspherical slope at each rim, positive edge thickness, conic-domain limits, shared-band cross-gap intrusion, and exact-ray containment. No obsolete universal `sd/|R|` test is used as the acceptance criterion.

## Sources

- JP2005092056A, supplied publication, especially pp. 5-9, 13-14, and Fig. 13 on p. 18.
- JP2005092056A5, correction publication, 12 March 2009: https://patents.google.com/patent/JP2005092056A5/
- JP4289958B2, granted Japanese family member, 1 July 2009: https://patents.google.com/patent/JP4289958B2/ja
- Canon Camera Museum, "EF-S18-55mm f/3.5-5.6": https://global.canon/en/c-museum/product/ef380.html
- Canon Camera Museum, 2001-2004 history, EF-S short-back-focus development: https://global.canon/en/c-museum/history/story10.html
- OHARA optical-glass catalog and technical references: https://www.ohara-inc.co.jp/en/product/catalog/
- HOYA optical-glass catalog: https://www.hoya-opticalworld.com/english/products/kenma.html
- SCHOTT Advanced Optics glass catalog/search: https://www.us.schott.com/shop/advanced-optics/en/search/
- HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/
- CDGM optical-glass catalog/database: https://www.cdgmgd.com/en/
- SUMITA optical-glass catalog: https://www.sumita-opt.co.jp/en/products/optical/

## September 2026 geometry and catalog audit

Figure 13 on page 18 was inspected at 600 dpi. The front group was undersized: R1/R2 now use 20.5/20.5 mm, R3/R4 17.0/11.8 mm, R5/R6 12.5/12.5 mm, and R7/R8 12.0/12.0 mm. The large drawn rim behind R3 includes a mechanical flange. A 12.5 mm R4 trial failed cross-gap clearance; 11.8 mm retains the optical portion without overlap. Rear asphere SD and quoted departure remain unchanged.

The newly cataloged OHARA S-BAL11 curve resolves E5 through its published 573578 code. The manufacturer’s OHARA 02-06 datasheet publishes the six Sellmeier constants and C/d/F/g indices used for independent regression checks: <https://oharacorp.com/wp-content/uploads/2023/06/esbal11.pdf>. Ten of eleven elements now have compatible coefficient-backed dispersion. E10 remains explicitly unmatched: neither its 583302 coordinates nor a historical supplier identity justify assigning the incompatible catalog E-F3 curve. Catalog equivalents do not establish production melts or patent-published partial dispersion.

## Live-diagram follow-up

The second live-site comparison aligned the L2b cemented pair at 7.8 mm (R12–R14), set R10 to 7.6 mm, and refined the L3 pair to 7.7/7.7/7.6 mm (R15–R17). A common 7.7 mm R17 rim failed the telephoto gap limit, so its rear rim stays at 7.6 mm. Explicit E1–E11 diagram labels now match the inspector element names. The front-group zoom reversal and objectward L1-only focus travel are preserved at all three source stations.

A further polymer survey did not justify filling the final spectral gap. The published one-term polycarbonate fit associated with Sultanova et al. (2009) evaluates to nd = 1.584763 and νd = 27.8583, outside the project’s Δν = ±2 compatibility guard for the patent’s 1.583060 / 30.2 coordinate. The underlying paper’s rounded measurements are not a patent melt identification or a substitute coefficient set. E10 remains explicitly unmatched, with no unsupported resin identity, APD tag, or manufacturing-process label. See [the experimental study](https://przyrbwn.icm.edu.pl/APP/PDF/116/a116z442.pdf) and [the published fit](https://refractiveindex.info/?shelf=organic&book=polycarbonate&page=Sultanova).
