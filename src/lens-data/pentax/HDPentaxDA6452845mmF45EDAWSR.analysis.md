## Patent Reference and Design Identification

**Patent:** JP 2015-87681 A
**Application Number:** JP 2013-227785
**Filed:** 2013-11-01
**Published:** 2015-05-07
**Inventor:** Tatsuyuki Onozaki
**Applicant:** Ricoh Imaging Company, Ltd.
**Title:** Zoom lens system
**Embodiment analyzed:** Numerical Example 1, Tables 1–4 and Figures 1–7

The prescription corresponds to Numerical Example 1 of JP 2015-87681 A. The patent describes a four-group negative-positive-negative-positive wide-angle zoom for single-lens-reflex cameras, with the aperture stop between the second and third functional groups and with the second group divided into a moving focus subgroup G2a and a fixed-within-G2 subgroup G2b (¶¶0021, 0049–0055). The LensVisualizer data file preserves the patent's native d-line prescription and uses the patent's three infinity-focus zoom states at 28.70, 35.00, and 43.87 mm.

The LensVisualizer record is **PENTAX HD PENTAX-DA645 28-45mm f/4.5 ED AW SR**; the manufacturer product styling is **HD PENTAX-DA645 28-45mmF4.5ED AW SR**. This is the production correlation selected for this project. This is a correlation, not a manufacturer statement that the production lens was built directly from Example 1. Several independent features converge:

1. Ricoh Imaging specifies the production lens as 17 elements in 12 groups. Example 1 has 17 physical lenses in 12 air-separated groups when the two thin hybrid-resin layers are treated as bonded layers on physical lenses rather than as additional marketed lenses. The sequential data model therefore contains 19 material entries while retaining `elementCount: 17`.
2. Ricoh identifies two hybrid aspherical elements at physical positions L1 rear and L16 front. Example 1 places a synthetic-resin hybrid asphere on the image-side face of patent lens 11 and another on the object-side face of patent lens 44. In physical front-to-rear counting these are the first and sixteenth lenses, respectively (¶¶0024, 0029, 0051, 0054).
3. Ricoh identifies ED elements at physical positions L8 and L15. In Example 1 those positions correspond to patent lenses 24 and 43, both with `nd = 1.49700` and `νd = 81.6`, the coordinate pair modeled here with the current OHARA S-FPL51 catalog entry.
4. The patent design spans 28.70–43.87 mm at FNO 4.6; the marketed lens is 28–45 mm f/4.5. The data file keeps the exact design values separate from the rounded product specification rather than scaling the prescription.
5. Ricoh specifies a 0.4 m minimum focus distance and 0.21× maximum reproduction ratio. A mechanism-constrained paraxial solve using the patent's G2a focus motion gives `|m| = 0.206291` at the 43.87 mm state, consistent with the rounded production figure.
6. Ricoh gives working distances of 0.17 m at 28 mm and 0.18 m at 45 mm. Combining the 0.4 m focus specification with the Example-1 optical track gives approximately the same front-of-lens working-distance range, providing a separate geometric check on the correlation.

The correlation is therefore stronger than focal-length similarity alone: physical count, special-element positions, focus architecture, close-focus behavior, and timing all agree. The patent application was filed in November 2013, and Ricoh announced the production lens on 2014-08-05, before the Japanese application was published.

## Optical Architecture

Example 1 is a negative-leading wide-angle zoom with four functional power groups:

- **G1:** negative, computed isolated group EFL `-30.120049 mm`.
- **G2:** positive, computed isolated group EFL `+53.780930 mm`.
- **G3:** negative, computed isolated group EFL `-84.246413 mm`.
- **G4:** positive, computed isolated group EFL `+72.805128 mm`.

These values reproduce Patent Table 4 to the source precision. They are isolated functional-group focal lengths, not the focal lengths of individual elements and not direct measures of each group's in-situ contribution once the four groups are coupled.

The first group is a strong negative lead consisting of three negative lenses followed by a positive lens. This is the wide-angle, long-back-focus part of the design. The patent explicitly explains that the negative-front architecture is used to secure a back focus long relative to focal length and to support wide angular coverage (¶¶0002–0004). The final data reproduce back focal lengths of 65.9128, 73.4976, and 82.8756 mm at the three zoom states, all greater than the corresponding EFLs of 28.6994, 34.9986, and 43.8741 mm. Under the project definition, the prescription is therefore retrofocus throughout the zoom range.

G2 supplies the principal positive variator action. It is divided into G2a and G2b. G2a contains L21 and the cemented L22-L23 pair and translates for focus; G2b is the single positive L24. Independent paraxial calculation gives `f(G2a) = +97.904551 mm` and `f(G2b) = +100.629155 mm`. The aperture stop follows G2 and moves with it, as specified in ¶0021 and ¶0050.

G3 is the negative compensating group. Example 1 belongs to the patent subset in which G3 is fixed relative to the image plane during zooming (¶0023). The final prescription places the first G3 surface at `-129.322`, `-129.328`, and `-129.330 mm` relative to the image plane at wide, middle, and tele states; the residual 0.008 mm spread is explained by the patent's rounded track and back-focus tables rather than a deliberate G3 motion.

G4 is the positive rear group and is itself divided into positive G4a and negative G4b. G4a is a cemented three-lens stack, while G4b is a cemented negative-positive pair whose front negative lens carries the second hybrid resin layer. Independent calculation gives `f(G4a) = +55.104627 mm` and `f(G4b) = -201.642490 mm`. The rear group changes the final convergence and back focus while also providing substantial chromatic-correction freedom through the G4a triplet described in ¶¶0040–0042.

The zoom kinematics follow the patent's negative-lead scheme. From wide to tele, G1 moves slightly toward the image, G2 and G4 move monotonically toward the object, and G3 remains effectively fixed. Relative to the image plane, the first surfaces of G2 and G4 move by 12.232 mm and 16.970 mm, respectively, giving `ΔX4/ΔX2 = 1.387345`; this reproduces the Example-1 value 1.388 in Table 37 and satisfies condition (1).

The patent's Figure 1 visually reinforces this architecture: the large-diameter negative G1 sits well ahead of the compact positive G2, the stop lies immediately behind G2, G3 is a compact negative compensator, and the physically larger rear G4 contains the cemented triplet and hybrid rear doublet. The data file's element and group annotations follow that same physical order.

## Element-by-Element Analysis

The focal lengths quoted below are the standalone paraxial values stored or independently reproduced for the corresponding data entries. They should not be confused with the net focal length of a cemented stack or with the in-situ contribution of an element inside the complete zoom. Where a cemented or hybrid stack is important, its independently calculated net power is stated separately.

### L11 — Hybrid negative meniscus: L11g substrate + L11r resin layer

**L11g:** `nd = 1.77250`, `νd = 49.6`. Glass: S-LAH66N (OHARA catalog model; supplier not established). `f = -60.434 mm`.

**L11r:** `nd = 1.52972`, `νd = 42.7`. Material: Unmatched synthetic-resin hybrid-asphere layer. `f = -293.835 mm`.

L11 is the first physical lens and a negative meniscus convex toward the object. The patent explicitly identifies it as a hybrid lens whose image-side face carries a bonded synthetic-resin aspherical layer (¶¶0024, 0051). Treating the substrate and resin as separate optical media gives a combined standalone hybrid focal length of `-50.122554 mm`; the two entries nevertheless represent one physical lens for the 17-element product count.

The first negative meniscus carries the largest clear aperture in the model. Together with L12, it implements the patent's stated use of object-convex negative lenses to suppress the distortion burden of the negative-leading wide-angle front group (¶0046). The aspherical outer resin surface 3A adds a large departure from the same-radius spherical base while avoiding a monolithic molded-glass asphere of the same diameter.

### L12 — Negative meniscus

`nd = 1.78800`, `νd = 47.4`. Glass: S-LAH64 (OHARA catalog model; supplier not established). `f = -89.291 mm`.

L12 is the second object-convex negative meniscus of G1. Its role is primarily architectural: it reinforces the negative front-group power while distributing that power across two menisci rather than forcing the first lens alone to provide the full wide-angle divergence. The patent groups L11 and L12 together when discussing distortion control by object-convex negative forms (¶0046).

The catalog-model glass is a high-index lanthanum-family material. In the model, that relatively high index permits useful negative surface power at moderate curvatures, while the actual production melt remains unspecified by the patent.

### L13 — Biconcave negative

`nd = 1.60300`, `νd = 65.5`. Glass: S-PHM53 (OHARA catalog model; supplier not established). `f = -49.847 mm`.

L13 is the strongest standalone negative lens in the middle of G1. Its biconcave form adds negative power without the object-convex meniscus geometry used by L11 and L12. The relatively high Abbe number gives the negative front group a lower-dispersion negative component, which helps keep chromatic power from being concentrated entirely in the higher-dispersion front menisci.

No separate aberration function is assigned to L13 by the patent. Its defensible interpretation is therefore as part of the distributed negative lead whose net isolated group focal length is `-30.120049 mm`.

### L14 — Biconvex positive rear member of G1

`nd = 1.56732`, `νd = 42.8`. Glass: S-TIL26 (OHARA catalog model; supplier not established). `f = +66.989 mm`.

L14 reverses the sign of the local power at the rear of G1. The patent specifically attributes to this positive lens correction of aberrations accumulated in the front portion, naming spherical aberration, axial chromatic aberration, lateral chromatic aberration, and field curvature (¶0046). It also makes the g-F partial-dispersion behavior of this lens the subject of condition (10), requiring `0.56 < θgF < 0.60` (¶0047).

The current S-TIL26 catalog model stores explicit C/F/g indices and gives `θgF = 0.573057`, consistent with the patent's rounded Example-1 value 0.573. This is a catalog-model consistency check, not evidence that the production lens necessarily used OHARA S-TIL26.

### L21 — Positive meniscus, front member of focus subgroup G2a

`nd = 1.56732`, `νd = 42.8`. Glass: S-TIL26 (OHARA catalog model; supplier not established). `f = +121.899 mm`.

L21 begins the translating focus subgroup G2a. The patent describes L21 as an object-convex positive meniscus and notes that both surfaces of L21, together with the object-side surface of L22, are arranged approximately concentrically with the aperture stop to suppress off-axis coma and astigmatism (¶0037).

Because G2a moves as a unit, L21's focus behavior is governed by the subgroup rather than by an independent floating motion. The complete G2a has a computed isolated focal length of `+97.904551 mm`.

### L22-L23 — Cemented focus doublet in G2a

**L22:** `nd = 1.80000`, `νd = 29.9`. Glass: S-NBH55 (OHARA catalog model; supplier not established). `f = -45.069 mm`.

**L23:** `nd = 1.58144`, `νd = 40.7`. Glass: S-TIL25 (OHARA catalog model; supplier not established). `f = +41.409 mm`.

L22 and L23 form the cemented negative-positive pair at the rear of G2a. Their individual standalone powers are strong and opposite in sign, but the net cemented stack is much weaker: `f = +449.616090 mm`. That distinction matters because the cemented interface changes the power balance substantially; the individual isolated values should not be read as the pair's in-situ power.

The patent states that the object-convex cemented interface of L22 and L23 helps correct spherical aberration generated at the front of G2a (¶0037). The pair also keeps the translating focus unit compact: G2a contains only L21 plus this cemented doublet, so focus can be achieved by one constrained axial translation rather than by moving the entire zoom assembly.

### L24 — Biconvex positive G2b element

`nd = 1.49700`, `νd = 81.6`. Glass: S-FPL51 (OHARA catalog model; supplier not established). `f = +100.629 mm`.

L24 is the sole element of G2b and therefore remains stationary within the G2 envelope when G2a translates for focus. It is physical lens 8 in front-to-rear counting, matching Ricoh's identification of the production lens's first ED element at L8.

The patent does not name a glass supplier, so S-FPL51 is used only as the coordinate-matched catalog model for the stored `nd/νd` pair. Its current catalog line data include `dPgF = +0.0280`, but the analysis does not infer an apochromatic designation from that model. The source-grounded statement is that the production L8 position is ED and the patent position has very low d-line dispersion.

### L31-L32 — Cemented front doublet of G3

**L31:** `nd = 1.83481`, `νd = 42.7`. Glass: S-LAH55VS (OHARA catalog model; supplier not established). `f = -27.118 mm`.

**L32:** `nd = 1.72047`, `νd = 34.7`. Glass: S-NBH 8 (OHARA catalog model; supplier not established). `f = +31.963 mm`.

The L31-L32 pair begins the negative third group. Its isolated cemented focal length is `-212.064062 mm`, again much weaker than either isolated member because the cemented interface strongly redistributes the net power.

G3 as a whole has `f = -84.246413 mm` and is effectively fixed relative to the image plane in Example 1. The patent assigns G3, together with G4, a compensating role for zoom-dependent spherical aberration and field curvature (¶0030). It does not assign a more specific independent correction function to L31 or L32.

### L33 — Biconcave negative

`nd = 1.83400`, `νd = 37.2`. Glass: S-LAH60 (OHARA catalog model; supplier not established). `f = -66.632 mm`.

L33 is the second negative component in G3 and reinforces the group's net negative sign after the relatively weak cemented L31-L32 pair. Its high refractive index permits substantial negative power in a compact biconcave element.

Because G3 is stationary in the selected example, L33 participates in aberration compensation without introducing another zoom cam trajectory. This is consistent with the patent's stated objective of simplifying the moving structure in the embodiments where G3 remains fixed (¶0023).

### L34 — Positive meniscus completing G3

`nd = 1.80518`, `νd = 25.4`. Glass: S-TIH 6 (OHARA catalog model; supplier not established). `f = +123.467 mm`.

L34 is a positive meniscus convex toward the object and closes the negative G3 group. Its relatively high index and low Abbe number make it a strongly dispersive positive component compared with L33, so the local chromatic balance of G3 cannot be inferred from power signs alone.

The defensible system-level interpretation is that L34 moderates the net negative group while preserving the four-group `− + − +` architecture. The patent attributes the detailed aberration-control role to G3 as a whole rather than to L34 individually.

### L41-L42-L43 — Cemented positive triplet G4a

**L41:** `nd = 1.83400`, `νd = 37.2`. Glass: S-LAH60 (OHARA catalog model; supplier not established). `f = +42.279 mm`.

**L42:** `nd = 1.80440`, `νd = 39.6`. Glass: S-LAH63Q (OHARA catalog model; supplier not established). `f = -27.165 mm`.

**L43:** `nd = 1.49700`, `νd = 81.6`. Glass: S-FPL51 (OHARA catalog model; supplier not established). `f = +33.327 mm`.

These three elements form the cemented G4a triplet, whose net isolated focal length is `+55.104627 mm`. L43 is physical lens 15 in the full lens count, matching Ricoh's identification of the second ED element at L15.

The patent gives this triplet an explicit chromatic role. It states that G4 corrects axial and lateral chromatic aberration generated by the preceding groups and that the three-element cemented construction of G4a supplies additional freedom to balance chromatic correction with higher-order spherical aberration and coma (¶¶0040–0042). Condition (7) governs the Abbe-number separation between the positive and negative members. Example 1 gives `19.8`, comfortably inside the required 15–25 interval.

The triplet is a case where individual standalone powers are particularly misleading if read in isolation. L41 and L43 are both strongly positive and L42 strongly negative, but their cemented combination remains moderately positive. The complete rear functional group G4 becomes `+72.805128 mm` only after the negative G4b section is included with its axial separation.

### L44 — Hybrid biconcave negative: L44r resin layer + L44g substrate

**L44r:** `nd = 1.52972`, `νd = 42.7`. Material: Unmatched synthetic-resin hybrid-asphere layer. Standalone paraxial `f ≈ +2.865 × 10^8 mm`, effectively zero power by itself.

**L44g:** `nd = 1.83400`, `νd = 37.2`. Glass: S-LAH60 (OHARA catalog model; supplier not established). `f = -40.750 mm`.

L44 is the negative physical lens at the front of G4b. The patent explicitly identifies it as a hybrid element with a synthetic-resin aspherical layer bonded to its object-side face (¶¶0029, 0054). Ricoh identifies the production lens's second hybrid asphere as L16R1; physical lens 16 in Example 1 is L44, which provides the positional match.

The resin layer's nearly zero standalone paraxial power does not mean it is optically irrelevant. Its purpose is primarily aspheric figure modification: surface 29A introduces non-spherical sag before the high-index L44 glass substrate. The hybrid L44 and L45 together form the negative G4b stack with net isolated `f = -201.642490 mm`.

### L45 — Biconvex positive rear element

`nd = 1.48749`, `νd = 70.2`. Glass: S-FSL 5 (OHARA catalog model; supplier not established). `f = +52.810 mm`.

L45 is the final physical lens and is cemented to the rear of L44. Its positive power partially offsets the negative L44 substrate, leaving G4b weakly negative as a cemented assembly. The relatively high Abbe number of the catalog model supplies a lower-dispersion positive partner to the higher-index, lower-Abbe L44 glass.

Because L45 is the last refracting element, its rear surface also sets the geometry feeding the long back-focus space to the image plane. The patent's zoom table varies that final image spacing from 65.91 to 82.88 mm as the rear group moves through the zoom range.

## Glass Identification and Selection

The patent provides d-line `nd` and `νd` values but does not identify glass manufacturers. The data file therefore preserves every patent coordinate exactly and treats the following names as **current OHARA catalog models selected by coordinate match**, not as claims about the production supplier. The final data also store each model's current `nC`, `nF`, `ng`, and `dPgF`; those spectral values were independently checked against the authoritative OHARA S-family 6D catalog workbook used for the audit.

| Catalog model | Patent `nd` / `νd` | Model `dPgF` | Data entries / physical positions | Interpretation |
|---|---:|---:|---|---|
| S-LAH66N | 1.77250 / 49.6 | -0.0094 | L11g | High-index substrate for the first hybrid negative meniscus |
| S-LAH64 | 1.78800 / 47.4 | -0.0089 | L12 | High-index negative front-group meniscus |
| S-PHM53 | 1.60300 / 65.5 | +0.0045 | L13 | Lower-dispersion negative member of G1 |
| S-TIL26 | 1.56732 / 42.8 | +0.0009 | L14, L21 | G1 positive rear member and G2a front positive meniscus |
| S-NBH55 | 1.80000 / 29.9 | +0.0085 | L22 | High-index, high-dispersion negative member of focus doublet |
| S-TIL25 | 1.58144 / 40.7 | +0.0019 | L23 | Positive partner in the L22-L23 focus doublet |
| S-FPL51 | 1.49700 / 81.6 | +0.0280 | L24, L43 | Very-low-dispersion positions corresponding to maker-identified ED lenses 8 and 15 |
| S-LAH55VS | 1.83481 / 42.7 | -0.0075 | L31 | High-index negative member of G3 cemented pair |
| S-NBH 8 | 1.72047 / 34.7 | -0.0019 | L32 | Positive partner in G3 front cemented pair |
| S-LAH60 | 1.83400 / 37.2 | -0.0037 | L33, L41, L44g | Repeated high-index material in G3 and G4 |
| S-TIH 6 | 1.80518 / 25.4 | +0.0158 | L34 | High-index, high-dispersion positive G3 rear meniscus |
| S-LAH63Q | 1.80440 / 39.6 | -0.0012 | L42 | Negative middle member of G4a triplet |
| S-FSL 5 | 1.48749 / 70.2 | +0.0022 | L45 | Lower-dispersion positive rear element |
| Unmatched synthetic resin | 1.52972 / 42.7 | — | L11r, L44r | Patent-identified bonded hybrid-asphere material; no catalog identity asserted |

The two S-FPL51-coordinate positions are the clearest chromatic anchors because Ricoh independently describes the corresponding physical lenses as ED. The data's catalog-model spectral fields support wavelength-dependent modeling of those entries, but they do not prove that S-FPL51 was the production material. The same supplier caution applies to all other named glasses. Fresh current-catalog matching also shows that the patent-precision coordinate `1.83481 / 42.7` admits both S-LAH55V and S-LAH55VS, while `1.83400 / 37.2` admits S-LAH60, S-LAH60MQ, and S-LAH60V. The data retain S-LAH55VS and the unsuffixed S-LAH60 as explicit modeling proxies; their stored line indices and `dPgF` values apply to those selected catalog models only.

Two additional chromatic choices are explicit in the patent. First, G4a is designed around the Abbe-number contrast of its cemented positive-negative-positive triplet; condition (7) sets the difference between the mean positive-lens Abbe number and the negative-lens Abbe number. Second, L14 is constrained by its g-F partial-dispersion ratio through condition (10), because the patent associates that parameter with secondary-spectrum control in the front group (¶0047). These are source-supported chromatic strategies; they do not justify describing the complete lens as apochromatic.

## Focus Mechanism

The patent identifies G2a as the focus group and states that it moves toward the image during focusing (¶¶0021, 0036, 0052). G2a contains L21 and the cemented L22-L23 pair. G2b, the single L24, remains outside the moving focus subgroup. This is an internal-focus architecture rather than whole-lens extension.

The patent does **not** publish close-focus spacing rows. The data therefore use a `CONSTRAINED_RECONSTRUCTION`, not a source-transcribed close state. The reconstruction imposes the mechanism stated by the patent: G2a translates as one rigid subgroup inside the fixed G2 envelope. Consequently d9 increases and d14 decreases by the same amount at each zoom position, preserving `d9 + d14`.

The production minimum focus distance of 0.4 m supplies the finite-conjugate target. Solving the complete paraxial system gives:

| Zoom state | G2a imageward travel | d9 at infinity → close | d14 at infinity → close | Reconstructed `|m|` at 0.4 m |
|---|---:|---:|---:|---:|
| 28.70 mm | 4.336536 mm | 23.915 → 28.251536 mm | 6.288 → 1.951464 mm | 0.136649× |
| 35.00 mm | 4.352598 mm | 14.684 → 19.036598 mm | 6.288 → 1.935402 mm | 0.164062× |
| 43.87 mm | 4.497008 mm | 7.308 → 11.805008 mm | 6.288 → 1.790992 mm | 0.206291× |

At the long end, the calculated 0.206291× reproduction agrees with Ricoh's rounded 0.21× specification. This agreement is a validation of the constrained model, not evidence that the patent itself publishes the close-focus translation.

Ricoh specifies a built-in DC autofocus motor and Quick-Shift manual-focus capability for the production lens. Those are mechanical implementation details of the commercial product; they do not alter the axial optical focus model authored here.

## Aspherical Surfaces

Example 1 contains two aspherical optical surfaces, both implemented as thin bonded synthetic-resin layers rather than as separate marketed lenses. The patent's equation in ¶0048 is already the standard rotationally symmetric conic form used by LensVisualizer:

`z(h) = (c h²) / [1 + sqrt(1 - (1 + K)c²h²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰ + ...`

Accordingly, the patent's tabulated `K` values are used directly. No `κ → K` conversion is applied. The design is not scaled (`s = 1.0`), so the dimensional asphere coefficients are also transcribed without scale transformation.

### Surface 3A — outer resin surface of L11

- `R = +23.089 mm`
- `K = -1.000`
- `A4 = +2.782 × 10^-6 mm^-3`
- `A6 = -1.128 × 10^-10 mm^-5`
- `A8 = +2.056 × 10^-13 mm^-7`
- `A10 = -1.990 × 10^-15 mm^-9`

Surface 3A is the image-side outer surface of the first hybrid negative meniscus. Its conic base is paraboloidal (`K = -1`) before the polynomial corrections are added. At the model's verified inferred semi-diameter of 20.5 mm, its sag departure from the same-radius spherical base is `-2.901883 mm`. That departure is quoted only at the authored, geometrically validated semi-diameter; the patent itself does not publish a clear-aperture height.

### Surface 29A — front resin surface of L44

- `R = -3241.954 mm`
- `K = 0.000`
- `A4 = -3.454 × 10^-6 mm^-3`
- `A6 = +9.235 × 10^-10 mm^-5`
- `A8 = -1.297 × 10^-12 mm^-7`
- `A10 = +3.435 × 10^-14 mm^-9`

Surface 29A uses a spherical conic base (`K = 0`) with the non-spherical behavior supplied entirely by the polynomial terms. The very large base radius means the polynomial departure dominates the useful correction over the modeled aperture. At the verified inferred semi-diameter of 17.2 mm, the departure from the same-radius sphere is `-0.210481 mm`.

The positions of these two hybrid surfaces match Ricoh's production description: L1 rear and L16 front. The manufacturer correspondence concerns physical position and hybrid-asphere type; the numerical coefficients remain those of Patent Example 1.

## Chromatic Correction Strategy

The design distributes chromatic correction rather than concentrating it in a single achromatic doublet. The front negative group combines high-index negative materials with the positive L14, whose g-F partial-dispersion ratio is explicitly constrained by the patent. The middle positive group places a very-low-dispersion element at L24, while the rear positive group places the second very-low-dispersion element at L43 inside the cemented G4a triplet.

Ricoh's production documentation independently identifies physical lenses 8 and 15 as ED. In the selected patent embodiment, those positions map exactly to L24 and L43, both `nd = 1.49700`, `νd = 81.6`. The current catalog model is S-FPL51 with explicit C/F/g indices and `dPgF = +0.0280`. This supports chromatic ray tracing for the data model, but the material name remains a catalog equivalence rather than a manufacturer-confirmed production-glass identity.

G4a provides the most explicit achromatizing structure. Its L41-L42-L43 triplet places two positive lenses around a negative lens and satisfies condition (7) with a value of 19.8. The patent states that this configuration corrects axial and lateral chromatic aberration while retaining additional freedom over spherical aberration and coma (¶¶0040–0042).

L14 provides a second, spatially separated chromatic control point. Condition (10) requires `0.56 < θgF < 0.60`; Example 1 prints 0.573. The current S-TIL26 catalog model gives 0.573057 from its explicit C/F/g indices. Because both the patent condition and catalog-model line data are available, it is reasonable to discuss partial-dispersion control at this element. It is not reasonable to elevate that fact into an APO claim for the complete zoom.

## Conditional Expressions

JP 2015-87681 A uses ten conditional expressions to constrain zoom kinematics, functional-group power, focus sensitivity, glass dispersion, and group magnification. Independent calculation from the final data reproduces every Example-1 value within the precision of Table 37.

| Condition | Patent bound | Final-data value | Result |
|---|---:|---:|---|
| (1) `ΔX4 / ΔX2` | `1.35 < ... < 2.80` | 1.387345 | Pass |
| (2) `f2 / f1` | `-1.95 < ... < -1.55` | -1.785553 | Pass |
| (3) `f3 / f1` | `2.25 < ... < 3.50` | 2.797021 | Pass |
| (4) `f4 / f1` | `-3.00 < ... < -2.05` | -2.417165 | Pass |
| (5) `(1 - m2aS²)mRS²` | `-1.20 < ... < -0.80` | -0.901722 | Pass |
| (6) `(1 - m2aL²)mRL²` | `-2.70 < ... < -1.70` | -1.987005 | Pass |
| (7) `νdp - νdn` | `15 < ... < 25` | 19.800000 | Pass |
| (8) `m2S / m4S` | `5 < ... < 35` | 7.476511 | Pass |
| (9) `m2L / m4L` | `3.5 < ... < 7.5` | 4.917949 | Pass |
| (10) `θgF` for L14 | `0.56 < ... < 0.60` | 0.573057 | Pass |

Conditions (1)–(4) describe the core `− + − +` zoom architecture. Condition (1) sets the relative travel of G4 and G2; conditions (2)–(4) constrain the group-power ratios to G1. The computed functional powers reproduce the source group focal lengths closely enough that these ratios also reproduce Table 37.

Conditions (5) and (6) govern focus sensitivity through the transverse magnification of G2a and the downstream system at the wide and tele ends. They explain why G2a can serve as a compact internal-focus unit without requiring excessive travel. The reconstruction's approximately 4.34–4.50 mm focus motion is consistent with that design intent, although the patent does not publish the production 0.4 m travel directly.

Condition (7) formalizes the dispersion split inside G4a, while conditions (8) and (9) constrain the relative transverse magnifications of G2 and G4 at the two zoom extremes. Condition (10) addresses the g-F partial-dispersion ratio of L14. The first nine values are obtained from the prescription and Gaussian conjugates; condition (10) is independently reproduced from the explicit line indices of the current S-TIL26 catalog model while retaining the supplier caveat.

## Image Stabilization

The production HD PENTAX-DA645 28-45mm f/4.5 ED AW SR includes an in-lens Shake Reduction mechanism according to Ricoh Imaging. The selected patent, however, describes only centered axial zoom and focus behavior and gives no stabilization-group decenter prescription, no lateral travel, and no tilted or shifted optical states.

The LensVisualizer prescription therefore does not invent an SR motion. All surfaces remain centered, and the data file contains no stabilization decenter model. The presence of SR is a production identity and mechanical-feature fact, not a numerical property of the selected Example-1 sequential prescription.

## Verification Summary

Independent reduced-angle tracing and an ABCD matrix calculation applied to the final TypeScript arrays give the following infinity-focus results:

| State | Patent `f` | Calculated EFL | Patent `fB` | Calculated BFL | Calculated track |
|---|---:|---:|---:|---:|---:|
| Wide | 28.700 mm | 28.699369 mm | 65.910 mm | 65.912800 mm | 222.365 mm |
| Middle | 35.000 mm | 34.998556 mm | 73.500 mm | 73.497638 mm | 218.136 mm |
| Tele | 43.870 mm | 43.874090 mm | 82.880 mm | 82.875631 mm | 217.990 mm |

The sequential and ABCD matrices agree to numerical precision. Surface-by-surface Petzval summation using `φ/(n·n′)` gives `+0.001844333 mm^-1`. The four functional-group focal lengths reproduce Table 4, and all ten conditional expressions satisfy their patent bounds.

The aperture stop requires a modeling inference because the patent publishes FNO 4.6 but no stop diameter. Under the LensVisualizer convention, `STO.sd` is the physical stop semi-diameter and `nominalFno` defines the paraxial entrance pupil. Mapping the entrance-pupil radius `EFL / (2 × 4.6)` through the front system to the stop gives wide-, middle-, and tele-state stop radii of 9.166818, 10.263916, and 11.950362 mm. The authored base `STO.sd` is the wide-state value, 9.1668180344 mm; `nominalFno` remains the design value 4.6 rather than the marketed f/4.5 label.

The patent likewise publishes no lens clear apertures. Every surface semi-diameter in the data file is therefore a modeling inference. The final set was validated with exact meridional axial and off-axis rays across all three zoom states at infinity and reconstructed close focus. The validation set contains all 168 selected rays, with a minimum ray-to-aperture margin of 0.782276 mm. These semi-diameters should not be cited as patent dimensions.

No sensor cover plate, filter, inactive dummy surface, or flare-cutter plane is present in Example 1, so no such surface is omitted from the sequential prescription. No air-equivalent rear-spacing correction is required.

No patent numeric correction was applied. Source radii, thicknesses, d-line indices, Abbe numbers, zoom spacings, and asphere coefficients are retained as printed. The only label normalizations are `3* → 3A`, `29* → 29A`, and source stop surface 17 → `STO` to satisfy the LensVisualizer schema.

No dimensional scaling is applied: `s = 1.0`. Consequently all radii, spacings, inferred semi-diameters, and image-plane coordinates remain in the patent's native millimeter scale, the conic constants remain unchanged, and no `A_p / s^(p-1)` asphere-coefficient transformation is needed.

## Sources and References

1. **JP 2015-87681 A**, Ricoh Imaging Company, Ltd., Tatsuyuki Onozaki, published 2015-05-07. Numerical Example 1: ¶¶0049–0055, Tables 1–4, Figures 1–7. Architecture and design rationale: ¶¶0021–0047. Asphere equation: ¶0048. Conditional values: Table 37.
2. **Ricoh Imaging Company, Ltd.**, “HD PENTAX-DA645 28-45mmF4.5ED AW SR: An ultra-wide-angle zoom lens designed to optimize the optical performance of the PENTAX 645Z,” launch announcement, 2014-08-05. Production specifications used here include 17 elements/12 groups, two aspherical elements, two ED elements, 0.4 m MFD, 0.21× maximum magnification, working distances, hybrid-asphere positions, ED positions, 645AF2 mount, and in-lens SR. https://news.ricoh-imaging.co.jp/rim_info2/2014/20140805_018974.html
3. **Ricoh Imaging Company, Ltd.**, “HD PENTAX-DA645 28-45mmF4.5ED AW SR,” official product page. Used for current product identity, marketed focal length/aperture, 645Z-optimized digital image circle, construction count, focus specification, and diaphragm information. https://www.ricoh-imaging.co.jp/english/products/lens/645/wide/hdpentax-da645-28-45/
4. **OHARA**, S-family Optical Glass 6D catalog workbook, dated 2026-04-02. Used only to establish current catalog-model equivalences and model `nC`, `nF`, `ng`, and `dPgF` properties. The patent does not establish OHARA as the production glass supplier.
