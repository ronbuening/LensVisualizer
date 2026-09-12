# HASSELBLAD XCD 30mm f/3.5 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2018/052113 A1\
**Application Number:** PCT/JP2017/033452\
**Priority:** 2016-09-16 (JP 2016-181654)\
**Filed:** 2017-09-15\
**Published:** 2018-03-22\
**Inventor:** Akira Sawamoto\
**Applicant:** Nittoh Inc.\
**Title:** Optical System for Image Capturing and Image Capturing Device\
**Embodiment analyzed:** Example 1

The prescription modeled here is Example 1 of WO 2018/052113 A1. The production correlation is the Hasselblad XCD 30mm f/3.5 (marketed as XCD 3,5/30). The patent does not name Hasselblad, so the correlation is an inference rather than a manufacturer-confirmed identification.

Several independent characteristics converge on that identification:

1. Example 1 gives a d-line focal length of 30.98 mm and F-number 3.5 (¶0034). Hasselblad identifies the production lens as XCD 3,5/30 and lists an optical focal length of 31.0 mm with an aperture range beginning at f/3.5.
2. The patent example has 11 elements in 10 air-separated groups (¶0027–¶0028). Hasselblad publishes the same 11-element/10-group construction.
3. Both aspherical surfaces in Example 1 are on one physical element, L7 (¶0028, Fig. 3). Hasselblad specifies one aspherical element.
4. The patent gives a 56 mm image circle and 42.73° maximum half-field (¶0034). The production lens belongs to the X system, whose 43.8 × 32.9 mm sensor format lies within that published image circle, and Hasselblad lists an 83° diagonal field for the XCD 30.
5. The patent permits G1 and G2 to move independently for focusing with the stop moving with G1, and Example 1 states that both groups move toward the object during focusing (¶0026–¶0029). Hasselblad describes the production lens as full focusing with a floating mechanism. The descriptions are compatible, but Hasselblad does not publish the internal group travel needed to establish an exact mechanical identity.
6. The patent places the stop near the center of the system and explicitly notes that a lens shutter can be placed there (¶0036). The XCD system uses in-lens shutters.
7. Hasselblad documentation listed the XCD 3,5/30 by early 2017, after the patent family's September 2016 priority date and before the WO publication. The timing is consistent with the correlation but is not proof by itself.

Two secondary manufacturer quantities do not coincide with the final patent model and are therefore not used as confirming evidence. Hasselblad lists an 83° diagonal field versus the patent's 85.46° full field, and an entrance-pupil position 75 mm in front of the image plane versus 70.934 mm from the final infinity model. The inferred production correlation is not adjusted to force either product value.

Marketing and design quantities are kept separate in the data model. The catalog designation is 30 mm, Hasselblad's detailed datasheet gives 31.0 mm optical focal length, the patent states 30.98 mm, and the final prescription traces to 30.981116 mm. No uniform scaling is applied.

## Optical Architecture

Example 1 is a fixed-focal-length wide-angle system divided by the aperture stop into two principal groups: a positive G1 on the object side and a weak negative G2 on the image side (¶0009–¶0012, ¶0027–¶0028). G1 contains five elements, L1–L5; G2 contains six, L6–L11. The only cemented junction is the L8+L9 doublet in G2. The stop lies between L5 and L6.

The patent describes the overall positive/negative power distribution as “telephoto type” and the negative/positive subdivision within G1 as “retrofocus type.” Those terms are source terminology describing the power architecture. Under the LensVisualizer quantitative classification rules, the complete lens is neither telephoto nor retrofocus: the verified total-track/EFL ratio is 3.04711, not below 1, and BFD/EFL is 0.601668, not above 1.

The front group itself divides into G11 = L1–L3 and G12 = L4–L5. From the final rounded prescription, their paraxial focal lengths are approximately −21.005 mm and +24.432 mm respectively, giving G1 a net focal length of +32.528 mm. This agrees closely with the patent's printed G11 and G1 values of −20.98 mm and +32.3 mm.

Behind the stop, G21 = L6–L9 alternates negative-positive-positive-negative power and computes to approximately −101.210 mm. G22 = L10–L11 computes to approximately +123.884 mm. Together they produce the weak negative rear group G2 at approximately −284.398 mm from the rounded prescription.

The patent prints G2 = −271.32 mm, which does not reproduce from its own five-decimal surface table. The discrepancy is too large to be explained by printed rounding, while the same table reproduces the full-system EFL and BFD closely. The data file therefore preserves the published prescription unchanged and uses the computed G2 value for prescription-derived statements; the printed −271.32 mm remains a source fact rather than a value forced into the model.

The patent's architectural intent is to combine a wide-angle front power distribution with a weak negative rear group that supplies additional aberration correction, while the final L10/L11 pair helps manage the rear beam and image-circle requirement (¶0005–¶0006, ¶0025). This is an in-situ group function. It should not be confused with the standalone focal lengths of individual elements listed below.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element focal lengths in air, computed from each element's two radii, center thickness, and d-line index. They describe isolated element power, not the element's effective in-situ contribution after neighboring air spaces and other lenses are included.

### L1 — Positive Meniscus

**nd = 1.63854, νd = 55.38. Glass: S-BSM18 (OHARA) equivalent. f = +216.233 mm.**

L1 is the large front positive meniscus, convex toward the object, and the first element of the negative-power subgroup G11 (¶0027). Its standalone positive power is weak compared with the following negative elements, so G11 remains net negative.

The patent specifically favors a larger effective diameter for the foremost positive meniscus than for the final negative meniscus as part of obtaining a wide field (¶0025). In the modeled prescription L1 therefore functions primarily as the large-aperture front collector within the negative/positive front-group architecture; the patent does not assign a unique single-aberration correction to L1 alone.

### L2 — Negative Meniscus

**nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA) equivalent. f = −45.000 mm.**

L2 is a negative meniscus convex toward the object and remains within G11 (¶0027). Its negative standalone power is much stronger than L1's positive power. Together with L3 it establishes the negative sign of G11.

At element level, the role is best understood as part of the front negative subgroup rather than as an independently identified corrector. The patent attributes wide-angle power distribution and aberration control to G11/G12 as groups, not to L2 in isolation.

### L3 — Biconcave Negative

**nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA) equivalent. f = −36.978 mm.**

L3 is the second strong negative element of G11 and is biconcave in the final data. It shares the same d-line coordinates and catalog-equivalent glass as L2.

L1–L3 together compute to approximately −21.005 mm. That group result, rather than L3's standalone −36.978 mm, is the relevant measure of the front subgroup's net paraxial power in the assembled lens.

### L4 — Positive Meniscus

**nd = 1.90200, νd = 25.26. Glass: J-LASFH24 (HIKARI) equivalent. f = +54.786 mm.**

L4 begins G12 and is a high-index, low-Abbe positive meniscus convex toward the object (¶0027). Its positive power starts the reversal from negative G11 toward the net-positive G1.

The final model resolves the J-LASFH24 catalog curve at runtime, but the patent publishes only nd and νd. Consequently, any wavelength-dependent behavior assigned to this named glass in LensVisualizer is a catalog-based modeling result, not a patent statement about the production melt.

### L5 — Biconvex Positive

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) equivalent. f = +29.614 mm.**

L5 is the stronger of the two positive elements in G12 and sits immediately before the aperture-stop gap. L4 and L5 together compute to approximately +24.432 mm, overcoming the negative G11 contribution so that G1 is net positive.

The S-FPL51 label is a catalog-equivalent assignment from the exact nd/νd coordinate, not a vendor identity published by the patent. The runtime resolver supplies the compatible catalog dispersion curve for this equivalent, so the chromatic model has more information than the patent's Abbe pair alone; this does not establish an apochromatic designation for the lens.

### L6 — Biconcave Negative

**nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA) equivalent. f = −21.592 mm.**

L6 is the first refracting element behind the stop and the first member of G21. It supplies strong negative standalone power at the entrance to the rear group.

The patent describes G21 as a negative-positive-positive-negative sequence used to supplement aberration correction that the front architecture cannot provide alone (¶0025, ¶0028). That group-level statement is the defensible basis for L6's role; no source text isolates L6 as the sole controller of a particular aberration.

### L7 — Biconvex Positive, Two Aspherical Surfaces

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) equivalent. f = +21.419 mm.**

L7 is a strong positive biconvex element immediately behind L6 and is the only physical aspherical element in Example 1. Both surfaces 14A and 15A are aspheric (¶0028, Fig. 3).

Because the polynomial begins at fourth order and both conic constants are zero, the aspheric terms do not change the paraxial power represented by the standalone focal length above. Their effect enters at finite ray height, providing additional degrees of freedom for higher-order aberration correction without adding another element.

The manufacturing method of L7 is not specified by the patent or the final data and is therefore not assigned here.

### L8 — Biconvex Positive, Cemented to L9

**nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA) equivalent. f = +10.971 mm.**

L8 is a strong positive biconvex element and the front component of cemented pair D1. At surface 17, the medium changes directly from L8 to L9; the data correctly assigns that cemented junction to downstream element L9.

The +10.971 mm value is L8's standalone focal length in air. It does not describe the cemented pair. When L8 and L9 are evaluated together with their actual cemented interface, the pair has a net paraxial focal length of approximately −70.426 mm in air.

### L9 — Biconcave Negative, Cemented to L8

**nd = 1.90200, νd = 25.26. Glass: J-LASFH24 (HIKARI) equivalent. f = −8.513 mm.**

L9 is the strong negative rear member of D1 and closes the negative-positive-positive-negative sequence of G21. Its isolated power is substantially stronger than the positive L8 value in magnitude, but cementing and the shared interface change the net pair power; the pair is not equivalent to a simple sum of the two standalone focal lengths.

The patent explicitly permits the positive/negative combination in this rear subgroup to be cemented and identifies L8+L9 as the cemented pair in Example 1 (¶0025, ¶0028).

### L10 — Positive Meniscus

**nd = 1.89286, νd = 20.36. Glass: S-NPH4 (OHARA) equivalent. f = +53.278 mm.**

L10 is the penultimate positive element and begins G22. It is separated from L11 by a large 10.78 mm air gap, the patent's DE spacing used in condition (5).

The patent treats the rear positive lens and final negative meniscus as an important terminal power pair. Their spacing and opposite signs add correction freedom while retaining the large-image-circle objective (¶0006, ¶0021–¶0025). L10's isolated +53.278 mm power should therefore be distinguished from the much weaker net behavior of the assembled rear subgroup.

### L11 — Negative Meniscus

**nd = 1.53172, νd = 48.84. Glass: S-TIL6 (OHARA) equivalent. f = −74.408 mm.**

L11 is the final negative meniscus, convex toward the image side in the patent description. The patent assigns the final negative meniscus the function of spreading the emergent bundle so that a large image circle is easier to form (¶0006, ¶0025).

The L10/L11 pair computes to a positive G22 focal length of approximately +123.884 mm despite L11's negative standalone power. This illustrates the distinction between isolated element power and in-situ subgroup behavior. The final TypeScript prescription has a small positive surface-by-surface Petzval sum of +0.00126448 mm⁻¹; that is a whole-system result, not a claim that L11 alone determines field curvature.

## Glass Identification and Selection

WO 2018/052113 A1 publishes d-line nd and νd values but no manufacturer glass names and no per-element C-, F-, or g-line indices. The glass strings in the final data are therefore representative current catalog-equivalent assignments selected by coordinate matching. They should not be read as proof of the actual production vendor or melt.

| Modeled equivalent | nd | νd | Catalog ΔPgF (reference only) | Elements | Provenance |
|---|---:|---:|---:|---|---|
| S-BSM18 (OHARA) | 1.63854 | 55.38 | −0.002251 | L1 | exact catalog-coordinate equivalent |
| S-FSL5 (OHARA) | 1.48749 | 70.24 | +0.004327 | L2, L3 | nd exact; catalog νd differs by 0.01 |
| J-LASFH24 (HIKARI) | 1.90200 | 25.26 | +0.015285 | L4, L9 | exact catalog-coordinate equivalent |
| S-FPL51 (OHARA) | 1.49700 | 81.54 | +0.030850 | L5, L7 | exact catalog-coordinate equivalent |
| S-TIH11 (OHARA) | 1.78472 | 25.68 | +0.015494 | L6 | exact catalog-coordinate equivalent |
| S-NPH1 (OHARA) | 1.80809 | 22.76 | +0.025182 | L8 | exact catalog-coordinate equivalent |
| S-NPH4 (OHARA) | 1.89286 | 20.36 | +0.029746 | L10 | exact catalog-coordinate equivalent |
| S-TIL6 (OHARA) | 1.53172 | 48.84 | +0.001449 | L11 | exact catalog-coordinate equivalent |

The prescription does not store nC, nF, ng, or ΔPgF because the patent supplies none. All eleven elements resolve to compatible catalog curves at runtime. The catalog ΔPgF figures above are reference values, not authored measurements or overrides; the resolver owns the spectral calculation.

The glass palette spans high-Abbe low-dispersion crowns, high-index low-Abbe positive/negative partners, and intermediate crown/flint classes. In particular, the modeled S-FPL51 equivalents at L5 and L7 carry the highest νd and a substantial positive ΔPgF in the selected catalog data, while several high-index rear elements carry much lower νd values. This provides a defensible spectral basis for discussing modeled chromatic balancing, but not for calling the production lens APO or for asserting that Hasselblad used these exact vendor glasses.

The diagram marks L5, L7, L8, and L10 as inferred APD because the compatible catalog curves have ΔPgF approximately +0.031, +0.031, +0.025, and +0.030, respectively. The colors describe catalog equivalents, including high-dispersion flints, without asserting production glass identities. L1–L11 diagram labels follow the patent element numbering.

## Focus Mechanism

The patent states that the optical system may focus by moving G1 and G2 independently and that the stop should move with G1 (¶0026). For Example 1 it is more specific: G1 moves integrally with the stop, G2 moves independently, and both principal groups move toward the object side during focusing (¶0029).

Hasselblad describes the production XCD 3,5/30 as full focusing with a floating mechanism and publishes a minimum object-to-image-plane distance of 0.40 m and maximum image scale of 1:9.6. Those production quantities are rounded and do not provide the internal group positions.

The final data therefore has focus status **NO_INTERNAL_RECONSTRUCTION**. Its `var` object is empty and the only modeled optical state is the published infinity prescription. `closeFocusM: 0.4` is retained as product metadata for the interface; it does not imply that the displayed surfaces move to a reconstructed 0.40 m state.

This omission is deliberate. A two-group diagnostic using the rounded 0.40 m and 1:9.6 values as exact constraints is unstable with respect to the last displayed digit of magnification and can drive the stop-to-G2 spacing negative. The available sources do not uniquely constrain a physically defensible internal close-focus model.

## Aspherical Surfaces

Both aspherical surfaces are on L7: 14A is the object-side surface and 15A is the image-side surface. The patent equation is

$$
X = \frac{Y^2/R}{1 + \sqrt{1 - (1+K)(Y/R)^2}}
+ A_4Y^4 + A_6Y^6 + A_8Y^8 + A_{10}Y^{10} + A_{12}Y^{12}.
$$

The patent's K is already the standard conic constant used by LensVisualizer; no κ-to-K conversion is required. Both surfaces have K = 0, so the conic base is spherical. No scaling is applied to Example 1, so the coefficients are transcribed without dimensional transformation.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 14A | 0 | −1.0953e−5 | +1.5378e−7 | −1.4224e−9 | +3.8014e−11 | −2.4409e−13 |
| 15A | 0 | +3.3567e−5 | +1.2702e−7 | −1.5210e−9 | +4.3185e−11 | −3.3170e−13 |

At the modeled semi-diameters, the independently evaluated polynomial departure from the spherical base is −5.290 µm at h = 7.90 mm on 14A and +187.988 µm at h = 8.20 mm on 15A. The much larger departure on the rear surface shows that the two surfaces are not simply symmetric aspheric companions; they provide different finite-height corrections while leaving first-order power unchanged.

The source does not identify the fabrication method. No molded-glass, polished-asphere, or hybrid-composite manufacturing claim is made.

## Chromatic Correction Strategy

The patent's G21 sequence is negative-positive-positive-negative and is described as contributing to correction of multiple aberrations, including lateral chromatic aberration (¶0025). The selected embodiment also alternates high-index/low-Abbe and lower-index/high-Abbe materials across the system, with the very high-Abbe 1.49700/81.54 material appearing in both L5 and L7.

For the patent itself, only nd and νd are source facts. The named glasses are catalog equivalents whose curves supply dispersion at runtime; no catalog line indices or ΔPgF values are copied into the prescription. Accordingly, the analysis can state that the modeled glass set provides an explicit spectral basis for chromatic tracing, but it cannot assert that the production lens uses those exact melts or that the design is apochromatic.

The cemented L8/L9 pair is particularly important to keep conceptually separate from the glass labels. L8 and L9 have different high-index, low-Abbe catalog equivalents and opposite standalone power; their cemented net power is approximately −70.426 mm. The pair therefore combines power and dispersion in a single bonded group, but its exact secondary-spectrum behavior in the production lens remains dependent on the actual production glasses.

## Conditional Expressions

The patent defines six principal conditions for this architecture. Values below are recomputed from the final prescription where the required quantity is derivable; all remain within the claimed ranges.

| Condition | Patent range | Final prescription value | Patent printed value | Result |
|---|---:|---:|---:|---|
| (1) LB/LA | 0.6 < x < 1.5 | 1.168995 | 1.17 | pass |
| (2) LA/f | 1.0 < x < 1.7 | 1.127461 | 1.13 | pass |
| (3) |fn|/f1 | 0.4 < x < 0.7 | 0.645739 | 0.65 | pass |
| (4) f1/f2 | −0.23 < x < −0.04 | −0.114375 | −0.12 | pass |
| (5) DE/BF | 0.4 < x < 1.4 | 0.578315 | 0.58 | pass |
| (6) LC/LA | 0.1 < x < 1.0 | 0.613258 | 0.61 | pass |

Condition (4) is the one most visibly affected by the patent's group-focal discrepancy. The final value uses G1 and G2 computed from the published surface table, while the patent's rounded −0.12 uses its separately printed group powers. Both values satisfy the claimed interval, so the inconsistency does not change the condition result.

## Verification Summary

The final prescription has been independently checked from the actual TypeScript arrays rather than from the extraction notes. Reduced-angle y–ν tracing and an independent ABCD construction agree to a maximum matrix difference of 3.55e−15.

The computed d-line EFL is 30.981116 mm versus the patent's 30.98 mm, and the computed S22-to-image back focal distance is 18.640351 mm versus the patent's 18.64 mm. The full S1-to-image track is 94.40301 mm. The modeled stop produces f/3.500000 exactly at the computed EFL.

The axial stop placement follows the patent's S11 position exactly. The patent's S11 row lists an effective diameter De = 14.60 mm; treating that number as the physical iris diameter would produce approximately f/3.381, so the data models the physical stop at 14.103576 mm diameter (sd = 7.051788 mm) to reproduce the patent's f/3.5. The diameter is a modeling inference, not a correction to the source table.

Patent effective diameters are used as rendering semi-diameters where they satisfy the current geometry policy. Three refracting surfaces are reduced for valid geometry: S4 and S5 use 13.15 mm instead of their published De/2 values, and S21 uses 10.20 mm. The reductions avoid excessive rim slope and S4→S5 shared-band sag intrusion. They are modeled clear apertures, not alterations to the patent's recorded De values.

At the declared 42.73° maximum half-field, an independent exact meridional trace places the chief ray at image height 27.995243 mm, within 0.004757 mm of the patent's 28.0 mm image-circle radius. The traced chief ray remains inside every authored surface, with a minimum surface clearance of 0.263785 mm. This verifies the declared field endpoint for the model; it does not assert that the full entrance pupil is unvignetted at the extreme field.

The surface-by-surface Petzval sum, evaluated as φ/(n·n′) at every refracting surface, is +0.00126448339 mm⁻¹. Under the audit convention −1/sum this corresponds to a signed radius of approximately −790.837 mm.

No source typo is silently corrected. The literal d15 = 0.15001 mm is preserved, the G2 group-focal inconsistency is documented rather than forced to the printed value, and the patent's radius signs reproduce the system EFL and BFD directly.

No sensor cover glass, filter, inactive dummy/flare-cutter plane, blocker, mirror, or mechanical part is included. Example 1 provides no such active prescription surfaces. No dimensional scaling or asphere-coefficient scaling is applied.

## Sources and References

- **Primary patent:** WO 2018/052113 A1, *Optical System for Image Capturing and Image Capturing Device*, Example 1. WIPO publication attached to the project; convenience mirror: <https://patents.google.com/patent/WO2018052113A1/en>.
- **Hasselblad XCD 3,5/30 datasheet:** <https://cdn.hasselblad.com/datasheets/xcd-lenses/XCD30-Datasheet-en.pdf>.
- **Hasselblad X/H System Lenses brochure, 2017-02-28:** <https://cdn.hasselblad.com/04e9d0f7-abdf-434d-8b5b-364c69af21ec_x-h-system-lenses_v2_28feb2017_a.pdf>.
- **Hasselblad X1D-50c datasheet:** <https://cdn.hasselblad.com/datasheets/x1d/X1D-50c-Datasheet_EN_v3.pdf>.
- **OHARA optical-glass catalog resources:** <https://www.ohara-inc.co.jp/en/product/01000/> and <https://www.ohara-inc.co.jp/en/product/catalog/>.
- **HIKARI optical-glass catalog resources:** <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lasf/> and <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>.
- **SCHOTT optical-glass reference for the normal-line ΔPgF convention:** <https://www.schott.com/en-in/products/optical-glass/-/media/project/onex/products/o/optical-glass/downloads/schott-optical-glass-pocket-catalog-2020_row.pdf>.

### Patent-rim review — 2026-09-12 UTC

WO2018052113A1.pdf, pages 17–18, Figs. 1–3 was visually inspected at 600 dpi. The published De/2 apertures and documented slope/clearance reductions were retained. The ray bundles and stepped blanks overstate several automated readings, especially L3 and the rear group. No further reduction of the constrained S4/S5/S21 rims is supported. Surface validation and image-circle audits pass.
