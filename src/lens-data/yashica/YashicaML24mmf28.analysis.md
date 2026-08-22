## Patent Reference and Design Identification

**Patent:** JP1975-110330 (`特開昭50-110330`)
**Application Number:** `特願昭49-14934`
**Filed:** 1974-02-07
**Published:** 1975-08-30
**Inventor:** Yoshisato Fujioka
**Applicant:** Yashica Co., Ltd.
**Title:** Retrofocus-type super-wide-angle objective lens (`レトロフォーカス型超広角対物レンズ`)
**Embodiment analyzed:** Example 1

The data file transcribes Example 1 of JP1975-110330 and applies a uniform linear scale of 0.24 to correlate the patent's normalized `f = 100` prescription with the Yashica ML 24mm f/2.8. The patent itself does not name the production lens, so the production correlation is a modeling identification rather than a manufacturer statement.

Several source facts converge on that identification. First, Example 1 is a 9-element design with one cemented pair, yielding eight air-separated physical groups. Second, the patent gives an aperture ratio of 1:2.8 and an 84° full field. Third, scaling the independently computed 99.9986-unit effective focal length by 0.24 gives a design EFL of 23.999661 mm. Fourth, Yashica's 1980 lens-data table lists the production ML 24mm f/2.8 as 9 elements in 8 groups with an 84° angle of view. Fifth, the same manufacturer table gives a 0.3 m minimum focus and f/2.8–16 aperture range, matching the production metadata retained in the data file. [1][2]

The scale is dimensional only: all radii, axial spacings, back focus, inferred stop position, and inferred semi-diameters are multiplied by 0.24, while refractive indices and Abbe numbers remain unchanged. Example 1 is entirely spherical, so no aspheric coefficient transformation is applicable.

The production identity and the patent prescription remain distinct in the model. `focalLengthMarketing` is 24 mm, while `focalLengthDesign` is 23.999661 mm. The production mount is represented by the canonical `contax-yashica` taxonomy id and the image format by `135-full-frame`, consistent with Yashica FR-system literature for the Contax/Yashica bayonet and 35 mm SLR system. [3]

## Optical Architecture

JP1975-110330 describes the objective as a retrofocus-type super-wide-angle lens. The scaled prescription satisfies the project's quantitative retrofocus criterion as well: the independently computed back focal distance is 37.263139 mm, larger than the 23.999661 mm EFL (`BFD/EFL = 1.55265`). The first surface to published image-plane track is 91.1232 mm, so the design is not a telephoto form under the separate `TL/EFL < 1` criterion.

The prescription contains 9 elements in 8 air-separated physical groups, but the patent organizes those elements into four functional sections, labeled I through IV in Figure 3. Those patent sections should not be confused with the physical group count used by LensVisualizer:

1. **Functional Group I — L1 to L3:** a net negative front section with independently computed EFL −34.426464 mm. It establishes the long retrofocus back clearance while accepting the wide field.
2. **Functional Group II — cemented L4+L5:** a strongly opposed negative/positive pair whose standalone powers nearly cancel. Its net cemented EFL is +433.087058 mm, so it contributes little first-order power relative to either component while retaining substantial refracting action at its surfaces.
3. **Functional Group III — L6:** a positive biconvex element with standalone EFL +31.539431 mm immediately ahead of the diaphragm.
4. **Functional Group IV — L7 to L9:** a negative element followed by two positive elements, with independently computed net EFL +62.948832 mm.

These functional-group EFLs are isolated-block first-order powers evaluated with air on both sides. They describe each section's net power but are not additive in-situ contributions to the complete system power.

The aperture stop lies in the air space between L6 and L7. The patent specifies that location qualitatively but does not tabulate the axial split within the published `d11` gap or the physical stop diameter. The data model therefore places `STO` 2.620 mm behind surface 11 and 1.304 mm ahead of surface 12, preserving the scaled 3.924 mm source gap. This is an inference from the iris position in patent Figure 3, not a tabulated patent dimension. The stop semi-diameter of 6.151135 mm is likewise a model value, solved so the entrance pupil reproduces f/2.8 for the 23.999661 mm design EFL.

The patent also does not publish clear semi-diameters. The values in the data file are inferred model apertures derived from exact meridional ray envelopes, the taper shown in Figure 3, and the current geometry constraints. They should not be read as manufacturing dimensions. No cover glass, filter, dummy plane, or mechanical component is present in the selected numerical prescription, and none is added to the model.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.66672, νd = 48.4. Glass: 667484 — nd/νd coordinate code (vendor unresolved). Standalone f = −71.398624 mm.**

L1 is the large front negative meniscus and the first component of functional Group I. Its negative standalone power begins the strong front-end divergence required by the retrofocus layout. The element also carries the largest modeled clear aperture in the prescription, consistent with its position at the entrance of an 84° full-field system.

### L2 — Biconvex Positive

**nd = 1.60311, νd = 60.7. Glass: 603607 — nd/νd coordinate code (vendor unresolved). Standalone f = +50.241242 mm.**

L2 supplies positive power inside the otherwise negative first functional group. Its rear surface is extremely weakly curved rather than mathematically plane; the finite source radius is retained in the model. In combination with L1 and L3, L2 moderates the front section's net negative power without changing its overall sign.

### L3 — Negative Meniscus

**nd = 1.65830, νd = 57.3. Glass: 658573 — nd/νd coordinate code (vendor unresolved). Standalone f = −28.118878 mm.**

L3 is the strongest negative standalone element in functional Group I. Its strongly curved rear surface closes the front negative section before the long air space leading to the cemented pair. The three-element section remains net negative at −34.426464 mm EFL even though L2 is positive.

### L4 — Biconcave Negative, cemented to L5

**nd = 1.51823, νd = 59.0. Glass: 518590 — nd/νd coordinate code (vendor unresolved). Standalone f = −35.448999 mm.**

L4 is the negative member of cemented pair D1. The patent's third conditional expression specifically constrains the refractive power at the L4→L5 cemented interface: the index increase from L4 to L5 across the positive-radius interface must give positive but bounded surface power. The final scaled prescription satisfies that inequality.

### L5 — Biconvex Positive, cemented to L4

**nd = 1.75690, νd = 31.7. Glass: 757317 — E-LAF11 catalog equivalent (production supplier unspecified). Standalone f = +35.414226 mm.**

L5 nearly cancels L4's standalone first-order power. The complete cemented L4+L5 group has a much longer +433.087058 mm EFL than either component alone. The large Abbe-number contrast between L4 (59.0) and L5 (31.7) is consistent with conventional chromatic balancing in a cemented pair, but the available source data do not provide line indices or partial-dispersion values from which to make an anomalous-dispersion or apochromatic claim.

### L6 — Biconvex Positive

**nd = 1.67790, νd = 55.5. Glass: 678555 — nd/νd coordinate code (vendor unresolved). Standalone f = +31.539431 mm.**

L6 is functional Group III by itself and is the last powered element before the aperture stop. Its positive power shifts the beam from the weak-power cemented section toward the rear group while leaving the diaphragm in a substantial air space rather than at a glass surface.

### L7 — Biconcave Negative

**nd = 1.75520, νd = 27.5. Glass: 755275 — nd/νd coordinate code (vendor unresolved). Standalone f = −19.388474 mm.**

L7 begins functional Group IV immediately behind the stop and is the strongest negative standalone element in the rear section. Its low Abbe number relative to L6, L8, and L9 gives the rear group a second strong dispersion contrast. The data support describing that contrast, but not assigning a specific anomalous-dispersion glass family.

### L8 — Positive Meniscus

**nd = 1.64000, νd = 60.2. Glass: 640602 — nd/νd coordinate code (vendor unresolved). Standalone f = +30.198724 mm.**

L8 restores positive power after L7 while retaining a meniscus form. Together with L9 it makes the rear functional section net positive despite L7's strong negative power. Its relatively high Abbe number also contrasts with L7's 27.5 value, providing ordinary dispersion balance within the rear section.

### L9 — Biconvex Positive

**nd = 1.69680, νd = 55.6. Glass: 697556 — nd/νd coordinate code (vendor unresolved). Standalone f = +43.782864 mm.**

L9 is the final positive element. Its front radius is very weak, while the rear surface provides most of the element's curvature. In combination with L7 and L8, it completes a +62.948832 mm rear functional group and delivers the final convergence toward the image plane.

## Glass Identification and Selection

The patent supplies only `nd` and `νd` coordinates and does not name the historical glass supplier. The final data file therefore uses vendor-neutral six-digit coordinate codes rather than assigning modern catalog names that the source does not establish.

| Element | Coordinate code | nd | νd | Use in the design |
|---|---:|---:|---:|---|
| L1 | 667484 | 1.66672 | 48.4 | Front negative meniscus |
| L2 | 603607 | 1.60311 | 60.7 | Positive member of Group I |
| L3 | 658573 | 1.65830 | 57.3 | Rear negative member of Group I |
| L4 | 518590 | 1.51823 | 59.0 | Negative member of cemented D1 |
| L5 | 757317 — E-LAF11 catalog equivalent | 1.75690 | 31.7 | Positive high-index member of D1 |
| L6 | 678555 | 1.67790 | 55.5 | Positive pre-stop element |
| L7 | 755275 | 1.75520 | 27.5 | Negative post-stop element |
| L8 | 640602 | 1.64000 | 60.2 | Positive rear meniscus |
| L9 | 697556 | 1.69680 | 55.6 | Final positive element |

The most conspicuous dispersion pairings are L4/L5 (`νd = 59.0/31.7`) and the L7-to-L8 transition (`νd = 27.5/60.2`). Those contrasts are consistent with ordinary achromatic correction in a fast wide-angle design. They do not establish APO behavior. The selected patent example supplies no `nC`, `nF`, `ng`, `dPgF`, or equivalent partial-dispersion data, and the data file accordingly carries none of those fields.

Modern and legacy optical-glass catalogs contain multiple plausible equivalents for several patent coordinates. E-LAF11 supplies a coordinate-compatible runtime curve for L5, but this does not identify Yashica's historical melt or supplier; the name is therefore explicitly qualified as a catalog equivalent.

## Focus Mechanism

The production Yashica table specifies a minimum focus distance of 0.3 m. [2] Example 1, however, publishes only the infinity prescription: it gives no finite-conjugate spacing table, moving-group description, focus travel, or magnification series from which an internal focus model could be recovered.

The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`. `var` and `varLabels` are empty, and `closeFocusM: 0.3` is retained strictly as production metadata. The available sources do not establish whether the production lens reaches close focus by unit translation or by internal relative motion, so no mechanism is asserted in the optical model.

## Conditional Expressions

The patent states four design conditions for the retrofocus objective. Evaluated from the final scaled data array, all four are satisfied:

1. `f < −fI < 2.5f`: with `f = 23.999661 mm` and functional Group-I `fI = −34.426464 mm`, the condition passes.
2. `1/r7 < 0`: the scaled surface-7 radius gives `1/r7 = −0.0276997 mm⁻¹`, so the condition passes.
3. `0 < (n5 − n4)/r8 < 0.5/f`: the scaled interface term is `0.00620807 mm⁻¹`, below the `0.0208336 mm⁻¹` upper bound.
4. `0.3f < d6 + d7/n4 + d8/n5 + d9 < 1.2f`: the middle term is `16.390654 mm`, between the scaled bounds `7.199898 mm` and `28.799593 mm`.

The first condition constrains the magnitude of the negative front section. The second fixes the sign of the first surface in the cemented section. The third bounds the positive refractive action at the L4→L5 cemented interface. The fourth constrains the axial extent of the central portion of the design relative to focal length. These conditions are source-defined design limits; the numerical evaluations above are independent calculations from the final scaled prescription.

## Verification Summary

Independent first-order tracing of the final data array gives an EFL of **23.99966096 mm**. The computed paraxial back focal distance from the final lens vertex is **37.26313926 mm**, compared with the patent's scaled stored back-focus value of **37.272 mm**. The small residual follows from the limited precision of the published radii, spacings, and refractive indices.

With the inferred stop position and the modeled `STO` semi-diameter, the independently solved entrance-pupil diameter is **8.57130748 mm**, giving **f/2.800000002**. The stop geometry therefore reproduces the patent's f/2.8 aperture, but its axial location and physical diameter remain modeling inferences rather than source dimensions.

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is **+0.004240309718 mm⁻¹**. Multiplying by the computed EFL gives **0.101765996**, closely reproducing the patent Example-1 Seidel `SUM P = 0.1018`. This provides an independent check on the prescription signs, indices, and curvatures after scaling and stop insertion.

The inferred semi-diameters also satisfy the modeled geometric limits: the maximum spherical rim angle is **62.9720°**, the minimum element edge thickness is **1.09708 mm**, and the smallest cross-gap clearance against the configured intrusion limit is **0.02283 mm**. The modeled apertures contain the default 25.2° off-axis stop-edge bundles and the full 42° chief ray. These clear apertures are validation/modeling quantities and are not claimed as patent dimensions.

## Sources and References

1. Yashica Co., Ltd., JP1975-110330 (`特開昭50-110330`), *Retrofocus-type super-wide-angle objective lens*, Example 1. Filed 1974-02-07; published 1975-08-30. The numerical prescription is on patent page 3; Figure 3 and its optical section are on page 4.
2. Yashica, *Price List No. 10, Effective January 1, 1980*, p. 4, “Interchangeable Yashica ML, DSB, Questar Lens Data.” Archival manufacturer scan: https://www.pacificrimcamera.com/rl/02068/02068.pdf
3. Yashica FR-system literature describing the Contax/Yashica bayonet and 35 mm SLR system. Archival manufacturer scan: https://www.pacificrimcamera.com/rl/03896/03896.pdf
