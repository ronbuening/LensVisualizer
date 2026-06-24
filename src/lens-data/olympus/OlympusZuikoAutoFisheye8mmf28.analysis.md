# Olympus Zuiko Auto-Fisheye 8mm f/2.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** DE 2157160 A1  
**Application number:** P 21 57 160.8-51  
**Filed:** 17 November 1971  
**Published:** 14 June 1973  
**Inventor:** Jihei Nakagawa  
**Applicant:** Olympus Optical Co., Ltd., Tokyo  
**Title:** Ultra-Weitwinkel-Objektiv  
**Classification:** G 02b 13/06  
**Embodiment analyzed:** Example 1 / Tabelle 1, corresponding to Fig. 1 and Fig. 2

DE 2157160 A1 discloses a compact photographic fisheye lens with a 180° field and a long rear focal distance for single-lens-reflex use without mirror lock-up. The patent gives two numerical examples. Example 1, transcribed here, is the ten-element version shown in Fig. 1 and tabulated in Tabelle 1. Example 2 changes the third group to two close air-spaced elements and adds one surface; it is not the prescription used for this file.

The patent-to-product identification is strong but not exact. The applicant is Olympus Optical, the filing date is contemporaneous with the early OM system, the design is an f/2.8 circular fisheye with 180° coverage, and the patent emphasizes a long back focal distance compatible with reflex viewing. Published OM-system material and reference entries for the production Zuiko Auto-Fisheye 8mm f/2.8 give an 8 mm focal length, f/2.8 aperture, 180° circular field, 23 mm image circle, 0.20 m minimum focus, automatic diaphragm, built-in filters, and an OM SLR mount. Those specifications match the patent concept, but the production construction is documented as 11 elements in 7 groups, while Example 1 is 10 elements in 6 groups. The prescription should therefore be read as the patent embodiment underlying the production lens family, not as a literal production teardown.

The production lens is treated here as an equisolid-angle circular fisheye because the cited eSIF OM-system reference states that projection and because the 23 mm circular image is numerically consistent with an 8 mm equisolid projection: at a 90° half-field, $r = 2f\sin(45°) = 11.31$ mm, close to the published 11.5 mm image radius. The patent itself does not state a projection equation; its Fig. 2 distortion plot reaches approximately −100% at 90° half-field, which is consistent with a circular fisheye rather than a rectilinear ultra-wide-angle lens.

## Optical Architecture

Example 1 is a negative-lead retrofocus fisheye with six air-separated groups and ten spherical glass elements. The patent power sequence is:

negative – negative – negative – weak positive – positive – positive.

Group I is a single negative meniscus. Groups II and III are cemented negative doublets. Group IV is a cemented doublet with almost cancelled net power. Group V is a single low-dispersion positive meniscus. Group VI is a strong rear cemented positive doublet.

The independent paraxial trace gives these group focal lengths after scaling the patent's normalized prescription by ×8 to the 8 mm production focal-length basis:

| Group | Elements | Focal length | Function |
|---|---:|---:|---|
| I | L1 | −43.82 mm | Large field-acceptance meniscus and first negative retrofocus element |
| II | L2–L3 | −44.56 mm | Cemented negative meniscus, lateral color correction |
| III | L4–L5 | −107.83 mm | Hyperchromatic weak negative doublet |
| IV | L6–L7 | +408.67 mm | Nearly afocal axial-aberration compensator |
| V | L8 | +80.20 mm | First rear positive convergence element |
| VI | L9–L10 | +36.74 mm | Dominant image-forming rear achromat |

The combined first three groups are strongly negative. The patent states $f_{123} = -1.545f$; the independent y–ν matrix trace of the tabulated numbers gives $f_{123} = -1.5613f$, or −12.49 mm on the 8 mm scale. That small difference is retained as a verified discrepancy rather than forced to match the patent statement.

The system back focal distance is the key retrofocus result. Table 1 gives $f_B = 4.5855f$, which scales to 36.684 mm at 8 mm. The independent trace gives 4.58555f, matching the patent value to the stated precision. This is enough rear distance for an OM SLR mirror box when combined with the lens mechanical register.

Fig. 1 shows the aperture stop in the $d_{11}$ air gap between Groups IV and V, closer to Group V. The patent table gives the total $d_{11}$ gap but not the stop's numerical split. In the data file this gap is split 1.0647f before the stop and 0.4563f after the stop, preserving the patent total of 1.5210f. The stop semi-diameter is then set by paraxial entrance-pupil calculation to 0.765f, or 6.12 mm after ×8 scaling, to reproduce f/2.8.

## Element-by-Element Analysis

The focal lengths below are standalone in-air element focal lengths scaled to the 8 mm prescription basis. Group focal lengths quoted above are in-situ group calculations and should not be conflated with these individual values.

### L1 — Negative Meniscus, convex to object

$n_d = 1.5891$, $\nu_d = 61.0$. Glass: S-BAL35 class (OHARA), SK5 / 589/610 equivalent. $f = -43.82$ mm.

L1 is the largest optical element in the patent form and is the first negative lens of the retrofocus front end. Both radii are positive, with the rear surface much steeper than the front surface. That geometry makes the element a negative meniscus with the convex side facing the object. The patent omits clear apertures, but Fig. 1 draws the front face of L1 much taller than its rear face; the data file follows that relationship so high-obliquity off-axis rays meet the front surface before later vignetting.

The glass is a moderate-index, high-Abbe barium crown. Its low dispersion is appropriate at the first high-obliquity surface, where lateral color leverage is high. The element's main task is geometric: accept the 180° field and begin compressing the incoming hemisphere into a cone that the rear relay can handle.

### L2 + L3 — Cemented Negative Meniscus Doublet, Group II

**L2:** $n_d = 1.7847$, $\nu_d = 25.6$. Glass: S-TIH11 class (OHARA), SF11 / 785/256 equivalent. $f = +153.93$ mm.  
**L3:** $n_d = 1.5891$, $\nu_d = 61.0$. Glass: S-BAL35 class (OHARA), SK5 / 589/610 equivalent. $f = -33.31$ mm.

Group II is a cemented negative meniscus with the high-index dense flint on the object side and the lower-index crown on the image side. The patent explicitly requires $n_2 > n_3$ and constrains the cement radius $r_4$ to $15f < r_4 < 35f$. In Example 1, $n_2 = 1.7847$, $n_3 = 1.5891$, and $r_4 = 18.4891f$.

The group focal length is −44.56 mm on the 8 mm scale. Its role is not merely to add negative power; the cemented high-index/low-index interface provides a controlled chromatic lever for correcting chromatic aberration of magnification across the 180° field.

### L4 + L5 — Cemented Negative Doublet, Group III

**L4:** $n_d = 1.6700$, $\nu_d = 57.3$. Glass: J-LAK02 class (Hikari), 670/573. $f = -24.30$ mm.  
**L5:** $n_d = 1.6668$, $\nu_d = 33.0$. Glass: H-ZF39 class (CDGM), 667/330. $f = +30.66$ mm.

The patent describes Group III as a hyperchromatic lens. Its net focal length is only −107.83 mm after scaling, so most of the individual power of L4 and L5 cancels. The group therefore functions primarily as a chromatic and field-balance component rather than as a major power element.

The patent condition for this group is $\nu_4 > \nu_5$ with $f < r_7 < 3.5f$. Example 1 satisfies both: $\nu_4 = 57.3$, $\nu_5 = 33.0$, and $r_7 = 2.1550f$. Claim 2 prints $\nu_4 = 57.8$, but Table 1, Table 2, and Claim 4 consistently give 57.3. The analysis and data file follow the numerical tables.

### L6 + L7 — Cemented Weak Positive Doublet, Group IV

**L6:** $n_d = 1.7865$, $\nu_d = 50.1$. Glass: 787501 probable vintage high-index lanthanum flint, no exact public catalog match. $f = -14.97$ mm.  
**L7:** $n_d = 1.6032$, $\nu_d = 42.3$. Glass: 603423 BaSF5-class barium dense flint, no exact public catalog match. $f = +15.19$ mm.

Group IV is the nearly afocal doublet in the transition region between the negative front groups and the positive rear relay. The independent trace gives a very weak positive focal length of +408.67 mm on the 8 mm scale. The patent text identifies this group with axial-aberration compensation, and the paraxial calculation confirms that it is not a primary image-forming group.

L6 and L7 have individually strong but opposite powers. Their near cancellation allows the group to adjust axial aberration and chromatic balance without greatly changing the first-order layout.

The L6 glass could not be matched to a current public OHARA, HOYA, SCHOTT, Hikari, Sumita, or CDGM catalog entry within a defensible tolerance. A current HOYA TAF48 entry is not an acceptable substitute: it is a modern glass with $n_d \approx 1.79$ and $\nu_d = 48.1$, too far from the patent's $\nu_d = 50.1$ to be used as a hard identification. L7 is likewise kept as a BaSF5-class code rather than asserted as a specific current catalog melt.

### L8 — Positive Meniscus, concave to object, Group V

$n_d = 1.5173$, $\nu_d = 69.3$. Glass: J-PKH1 class (Hikari), 517/693 low-dispersion crown. $f = +80.20$ mm.

L8 is a low-dispersion positive meniscus with both radii negative. The element receives the beam after the stop and begins the final convergence toward the rear doublet. Its high Abbe number keeps the single positive element from adding unnecessary axial color immediately before the high-dispersion Group VI achromat.

The catalog match is intentionally stated as a class match. Hikari J-PKH1 is close to the patent glass but not numerically identical: the catalog lists $n_d = 1.5186$ and $\nu_d = 69.89$, while the patent gives $n_d = 1.5173$ and $\nu_d = 69.3$.

### L9 + L10 — Cemented Positive Rear Doublet, Group VI

**L9:** $n_d = 1.9229$, $\nu_d = 20.9$. Glass: N-SF66 class (SCHOTT), 923/209 very dense flint. $f = -49.74$ mm.  
**L10:** $n_d = 1.5173$, $\nu_d = 69.3$. Glass: J-PKH1 class (Hikari), 517/693 low-dispersion crown. $f = +21.10$ mm.

Group VI is the strongest positive group in the design, with an in-situ focal length of +36.74 mm on the 8 mm scale. It supplies the final image-forming power after the front section has expanded the back focal distance.

The patent's fifth condition requires $\nu_9 < 30$ and $\nu_{10} > 50$. Example 1 is much stronger than the minimum requirement: $\nu_9 = 20.9$ and $\nu_{10} = 69.3$, giving an Abbe-number separation of 48.4. The rear cemented pair is therefore the most aggressive chromatic correction unit in the system.

L9's patent glass is very close to SCHOTT N-SF66, whose current catalog value is $n_d = 1.92286$, $\nu_d = 20.88$. It is the only element in this design that can be identified against a modern catalog with essentially exact six-digit glass code agreement.

## Glass Selection

The design uses eight distinct patent glass codes across ten elements. L1/L3 share the 589/610 crown; L8/L10 share the 517/693 low-dispersion crown.

| Element | Patent $n_d$ | Patent $\nu_d$ | Code | Data-file identification | Status |
|---|---:|---:|---:|---|---|
| L1, L3 | 1.5891 | 61.0 | 589/610 | S-BAL35 class (OHARA) | Close catalog match |
| L2 | 1.7847 | 25.6 | 785/256 | S-TIH11 class (OHARA) | Close catalog match |
| L4 | 1.6700 | 57.3 | 670/573 | J-LAK02 class (Hikari) | Close catalog match |
| L5 | 1.6668 | 33.0 | 667/330 | H-ZF39 class (CDGM) | Close catalog match |
| L6 | 1.7865 | 50.1 | 787/501 | 787501 probable vintage lanthanum flint | Catalog unresolved |
| L7 | 1.6032 | 42.3 | 603/423 | 603423 BaSF5-class barium dense flint | Catalog unresolved |
| L8, L10 | 1.5173 | 69.3 | 517/693 | J-PKH1 class (Hikari) | Soft catalog match |
| L9 | 1.9229 | 20.9 | 923/209 | N-SF66 class (SCHOTT) | Close catalog match |

The chromatic strategy is distributed. Group II uses a high-index dense flint cemented to a higher-Abbe crown for lateral color control in the front section. Group III adds a hyperchromatic pair with $\nu_4 > \nu_5$. Group IV adjusts axial aberration with almost no net power. Group VI uses the largest Abbe-number separation and carries the final achromatizing burden in the converging beam.

The previous draft overstated two glass identifications. L6 is not assigned to HOYA TAF48 because the catalog Abbe number is not close enough to the patent value. L7 is also not asserted as a specific Sumita glass; it remains a BaSF5-class code until an authoritative catalog match is established.

## Focus Mechanism

The patent publishes only an infinity-focus prescription and gives no variable air-spacing table. The production Zuiko Auto-Fisheye 8mm f/2.8 focuses to 0.20 m with a straight helicoid. No patent data supports an internal-focus or floating-group model.

The data file therefore uses a unit-focus approximation. The variable gap is the final image-side back focal distance after surface 16, not patent $d_{15}$. This distinction matters: in Table 1, $d_{15}$ is the L10 center thickness between $r_{15}$ and $r_{16}$; the image-space gap is separately printed as $f_B = 4.5855f$.

At infinity, the scaled back focal distance is 36.684 mm. Solving the finite-conjugate y–ν matrix equation for a 0.20 m subject distance measured from the image plane gives a unit-focus back focal distance of 37.343 mm. This is implemented only as a visualization control; it should not be read as a measured production helicoid travel.

## Conditional Expressions

The patent states five conditions for Example 1. The tabulated prescription satisfies each condition.

| Condition | Patent requirement | Example 1 value | Result |
|---|---|---:|---|
| (1) | $f < |f_{123}| < 2.5f$ | Patent: 1.545f; computed: 1.5613f | Satisfied |
| (2) | $n_2 > n_3$ and $15f < r_4 < 35f$ | $1.7847 > 1.5891$; $r_4 = 18.4891f$ | Satisfied |
| (3) | $\nu_4 > \nu_5$ and $f < r_7 < 3.5f$ | $57.3 > 33.0$; $r_7 = 2.1550f$ | Satisfied |
| (4) | $f < r_{15} < 3.5f$ | $r_{15} = 2.0547f$ | Satisfied |
| (5) | $\nu_9 < 30$ and $\nu_{10} > 50$ | $20.9 < 30$; $69.3 > 50$ | Satisfied |

Condition (1) is the first-order retrofocus constraint. If the first three groups are too weak, the back focal distance becomes insufficient; if they are too strong, Petzval curvature and off-axis aberrations become difficult to compensate. Conditions (2), (3), and (5) govern the chromatic correction pairs. Condition (4) constrains the rear cement radius where spherical aberration, coma, and astigmatism are sensitive.

## Verification Summary

The numerical checks below were run from the Table 1 prescription using a y–ν paraxial matrix trace. The trace used the surface-by-surface power convention $\phi = (n' - n)/R$ and the Petzval contribution $\phi/(n n')$.

| Quantity | Patent value | Computed value | Scaled to 8 mm | Status |
|---|---:|---:|---:|---|
| System EFL | 1.0000f | 0.999983f | 7.9999 mm | Match |
| Back focal distance | 4.5855f | 4.58555f | 36.684 mm | Match |
| $f_{123}$ | −1.545f | −1.5613f | −12.49 mm | Small discrepancy |
| Petzval sum | — | −0.007651 | — | Near-zero field curvature |
| Petzval-radius magnitude | — | 130.7f | 1045.6 mm | Near-flat Petzval balance |

The Petzval sum is close to zero for a ten-element all-spherical fisheye. That result depends on the correct surface-by-surface formula. A thin-element or group-level approximation would obscure the cancellation between the strong negative front surfaces and the positive rear relay.

All rendered semi-diameters are inferred because Table 1 gives no clear apertures. The data-file apertures were checked for spherical rim limit, element edge thickness, front/rear element diameter ratio, signed air-gap sag intrusion, and off-axis ray containment. The L1 front surface is intentionally larger than the L1 rear surface, matching Fig. 1's schematic field-acceptance meniscus and preventing the standard 54° display bundle from missing the front element entirely. The tightest inferred surfaces remain the steep rear surface of L1, the Group IV cement surface, and the rear cemented doublet; none requires a nonphysical edge thickness in the delivered data file.

## Design Heritage and Context

DE 2157160 belongs to the early-1970s period when major Japanese manufacturers were adapting circular fisheyes for normal SLR viewing rather than mirror-lock-up operation. The Olympus solution follows the established negative-front fisheye strategy but uses a compact all-spherical six-group patent form and a very high-index rear flint to keep the final relay short and chromatically effective.

The element-count discrepancy is the main production caution. The patent form is a credible ancestor of the OM Zuiko Auto-Fisheye 8mm f/2.8, but the final catalog lens's 11-element / 7-group construction indicates a later production refinement not present in Example 1. For LensVisualizer purposes, the delivered `.data.ts` file is explicitly a transcription of DE 2157160 A1 Example 1 scaled to the 8 mm product focal-length basis.

## Sources

- DE 2157160 A1, "Ultra-Weitwinkel-Objektiv," Olympus Optical Co., Ltd., published 14 June 1973. Primary source for the prescription, conditional expressions, and Fig. 1/Fig. 2 layout.
- Olympus / OM-system lens material as reproduced in MIR, "Zuiko Circular Fisheye lens 8mm f/2.8," for 8 mm f/2.8, 180° field, 23 mm image circle, 11 elements / 7 groups, built-in filters, and 0.20 m close focus: https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/fish8mm.htm
- eSIF, "8mm/F2.8 Fisheye," for the 23 mm circular image and equisolid-angle statement: https://esif.world-traveller.org/om-sif/lensgroup/8mmf28.htm
- OHARA Corporation, S-BAL35 optical-glass data sheet: https://oharacorp.com/glass/s-bal35/
- OHARA Corporation, S-TIH11 optical-glass data sheet: https://oharacorp.com/glass/s-tih11/
- Hikari Glass / Nikon, J-LAK02 optical-glass data sheet: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/pdf/J-LAK02.pdf
- CDGM, H-ZF39 optical-glass data sheet: https://www.cdgmgd.com/webapp/pdf/H-ZF39.pdf
- Hikari Glass, J-PKH1 optical-glass data sheet: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/PK/J_PKH1.pdf
- SCHOTT, N-SF66 optical-glass data sheet: https://media.schott.com/api/public/content/c2e0c3a77dcb4c94b349424ee621ee32?v=3320661c
