## Patent Reference and Design Identification

**Patent:** JP 2012-242690 A\
**Application Number:** 2011-114189\
**Filed:** 20 May 2011\
**Published:** 10 December 2012\
**Inventors:** Toshihide Hayashi (林 俊秀); Naoki Miyagawa (宮川 直己)\
**Applicants:** Sony Corporation; Tamron Co., Ltd.\
**Title:** インナーフォーカス式レンズ (*Inner-focus lens*)\
**Embodiment analyzed:** Example 2 / 実施例2

The prescription represents the job-card-selected correlation for the **SONY E 50mm f/1.8 OSS**. It transcribes Example 2 without dimensional scaling. The patent gives a design focal length of 51.30 mm, design f-number of 1.85, half field of 15.43°, and a nine-element optical train arranged as eight air-separated groups when the L215-L216 cemented pair is counted as one group (¶0057-¶0059). The data file keeps those design values separate from the marketed 50 mm and f/1.8 product specifications.

The production correlation rests on several convergent features rather than on a manufacturer statement that names this patent:

1. The patent example and the production lens both use nine elements in eight groups.
2. The 51.30 mm patent focal length and f/1.85 design aperture lie directly in the marketed 50 mm f/1.8 class.
3. Example 2 publishes a 14.20 mm image height and a 30.86° full field; Sony markets the production lens for APS-C with a 32° angle of view.
4. Example 2 uses a single laterally translating negative lens, L214, for image stabilization and a separate one-element negative inner-focus group, L221 (¶0053-¶0054). Sony describes the production SEL50F18 as having Optical SteadyShot and internal focusing.
5. The closest published patent state is not identical to the production mechanical endpoint. The model uses the patent's 0.142× row and approximately 0.457 m normalized conjugate, while Sony markets 0.39 m minimum focus and 0.16× maximum magnification. Those product values are therefore identification evidence only; they are not used to extend the patent focus motion.

No patent numerical correction is applied. The optional sensor cover shown after G23 in Figure 8 and tabulated at surfaces 19-20 is omitted from the active prescription, as required by the data model; its first-order optical effect is retained through an air-equivalent rear spacing. The patent publishes the stop position but not its physical diameter, and it does not publish lens semi-diameters.

## Optical Architecture

Example 2 is a positive-negative-positive inner-focus system. The patent explicitly describes the first group as Sonnar-type and places the image-stabilization lens and aperture stop within that front group (¶0020-¶0021, ¶0053). Figure 8 shows the same axial organization used by the data file: G21 occupies the front and central portion of the system, the single negative focus lens L221 forms G22, and the two-element rear group forms G23.

The independently computed d-line group powers from the final prescription are:

| Functional group | Composition | Computed EFL | Function |
|---|---|---:|---|
| G21 | L211, L212, L213, L214, STO, L215-L216 | +40.789 mm | Positive main group containing the OSS lens and stop |
| G22 | L221 | -28.713 mm | Single negative inner-focus group |
| G23 | L231, L232 | +35.022 mm | Positive rear relay/correction group |

G21 is not simply a stack of positive elements. It begins with two positive elements, follows them with two negative elements including the laterally movable L214, and finishes after the stop with the cemented L215-L216 pair. That distribution allows the front group to remain net positive while placing a relatively weak negative stabilization element where the patent obtains a favorable image-stabilization coefficient (¶0021, ¶0029-¶0032).

G22 is deliberately minimal: the patent states that a one-element negative second group is preferable for low focusing mass and moves it imageward along the axis from infinity toward close focus (¶0023, ¶0054). G23 remains fixed in the published focus states and is net positive despite ending in the weak negative L232.

The complete centered prescription has an independently recomputed infinity-focus EFL of 51.29998 mm. The powered vertex track from surface 1 through surface 18 is 59.6516 mm; the cover-normalized model track to IMG is 75.12017 mm. These are design-model quantities, not marketed mechanical dimensions.

## Element-by-Element Analysis

### L211 — Biconvex Positive

**nd = 1.83481, νd = 42.72. Glass: 835427 optical-position code (vendor unresolved). Standalone f = +46.539 mm.**

L211 is the front positive collector of G21. Its biconvex form and positive standalone power begin the converging action of the Sonnar-type first group. The patent does not assign a specific named aberration to L211 individually, so its role is best stated at the group level: it contributes positive front-group power before the stronger bending and negative correction that follow.

The 835427 annotation is retained exactly as the data-file glass identity. Catalog comparisons show more than one vendor near this optical position, so no manufacturer-specific glass name is asserted.

### L212 — Positive Meniscus

**nd = 1.91082, νd = 35.25. Glass: 911353 optical-position code (vendor unresolved). Standalone f = +42.000 mm.**

L212 is a high-index positive meniscus following L211. Its refractive index is the highest among the active elements in the example. In the modeled power distribution it reinforces the positive front block before L213 and L214 introduce negative power.

The patent does not identify a glass manufacturer. The 911353 code therefore remains preferable to selecting one of several catalog families that occupy or approach the same nd-νd region.

### L213 — Negative Meniscus

**nd = 1.72825, νd = 28.32. Glass: 728283 optical-position code (vendor unresolved). Standalone f = -22.712 mm.**

L213 supplies the strongest standalone negative power in the fixed portion of the first group ahead of the OSS element. It reverses part of the convergence established by L211 and L212 before the beam reaches L214. Its relatively low νd compared with the two preceding positive elements also gives the group a materially different dispersion contribution, although the patent supplies no line-index or partial-dispersion data from which a more specific secondary-spectrum claim could be made.

### L214 — OSS Biconcave Negative

**nd = 1.80610, νd = 33.27. Glass: 806333 optical-position code (vendor unresolved). Standalone f = -56.691 mm.**

L214 is the patent's image-stabilization lens. It is a single biconcave negative element positioned ahead of the aperture stop. The patent states that moving this lens approximately perpendicular to the optical axis compensates image motion and that using one negative element reduces the mass of the moving stabilizer (¶0021, ¶0053).

Its independently recovered standalone focal length is -56.69091 mm, reproducing the patent's published `fvr = -56.69 mm` (¶0059). The element is substantially weaker than L213 in standalone power, consistent with the patent's stated intent to keep stabilization-lens refractive power modest (¶0023, ¶0029-¶0032).

The active axial model represents L214 in its centered position. Its inferred semi-diameters include clearance for the patent's ±0.43 mm transverse stabilization travel; the patent does not publish those semi-diameters.

### L215-L216 — Cemented Corrective Doublet

**L215: nd = 1.84666, νd = 23.78. Glass: 847238 optical-position code. Standalone f = -53.492 mm.**\
**L216: nd = 1.83481, νd = 42.72. Glass: 835427 optical-position code. Standalone f = +18.030 mm.**\
**Cemented-pair net EFL = +27.255 mm.**

The patent explicitly states that L215 and L216 are cemented (¶0053). The data therefore assigns the shared interface to downstream element L216 rather than inserting a synthetic cement layer.

The distinction between individual and cemented power is important. L215 is negative in isolation and L216 is strongly positive in isolation, but the assembled pair is net positive. The pair closes G21 after the stop and contributes a substantial portion of the first group's positive power without being equivalent to either standalone element.

The two glasses also occupy notably different νd positions, and their opposite powers are consistent with ordinary chromatic balancing within the cemented pair. There are no authored nC, nF, ng, or dPgF values and no source-proven vendor Sellmeier assignment, so no apochromatic or anomalous-partial-dispersion claim is made.

### L221 — Biconcave Negative Focus Element

**nd = 1.62041, νd = 60.34. Glass: 620603 optical-position code (vendor unresolved). Standalone f = -28.713 mm.**

L221 alone forms G22. The patent directs this negative second group to translate along the optical axis for focusing (¶0023, ¶0054). Because G22 contains only one element, its functional-group EFL and standalone element EFL are the same to the reported precision.

The element's relatively high νd distinguishes it from the stronger-dispersion negative elements in G21. The patent's design rationale is primarily mechanical and paraxial: a single negative focusing element keeps the moving mass low and limits the required axial travel. It does not assign L221 a specific proprietary glass or anomalous-dispersion role.

### L231 — Biconvex Positive

**nd = 1.72916, νd = 54.67. Glass: 729547 optical-position code (vendor unresolved). Standalone f = +27.856 mm.**

L231 provides the dominant positive standalone power of G23. It receives the beam after the moving negative focus group and forms, together with L232, the fixed positive rear group described in ¶0055.

The complete G23 EFL is +35.02197 mm rather than +27.856 mm because the negative L232 and the spacing between the two elements alter the in-situ group power. This is the value relevant to the patent's third conditional expression.

### L232 — Negative Meniscus

**nd = 1.80518, νd = 25.46. Glass: 805255 optical-position code (vendor unresolved). Standalone f = -102.039 mm.**

L232 is a comparatively weak negative meniscus at the rear of G23. Its standalone magnitude is much longer than that of L231, so the rear pair remains net positive. The patent does not separately describe L232's aberration allocation; its interpreted role is as the negative finishing component of the rear correction group.

The modeled clear apertures at L232 are inferred rather than published. They were selected to contain the verified full-field chief ray throughout the published focus motion while retaining positive element edge thickness.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not name glass vendors or catalog types. The data file therefore stores six-digit optical-position codes rather than selecting a vendor by proximity alone. The catalog audit found plausible equivalents across several authoritative Japanese, German, and Chinese catalogs for most positions, often with multiple vendors occupying essentially the same coordinate region. That evidence supports the code classification but not a unique manufacturer assignment.

| Data glass code | nd | νd | Elements | Interpretation in this model |
|---|---:|---:|---|---|
| 835427 | 1.83481 | 42.72 | L211, L216 | High-index, moderate-dispersion positive glass position |
| 911353 | 1.91082 | 35.25 | L212 | Very-high-index positive glass position |
| 728283 | 1.72825 | 28.32 | L213 | Higher-dispersion negative glass position |
| 806333 | 1.80610 | 33.27 | L214 | High-index OSS negative glass position |
| 847238 | 1.84666 | 23.78 | L215 | High-index, high-dispersion negative doublet member |
| 620603 | 1.62041 | 60.34 | L221 | Lower-index, low-dispersion focus glass position |
| 729547 | 1.72916 | 54.67 | L231 | Moderate-dispersion positive rear-group glass position |
| 805255 | 1.80518 | 25.46 | L232 | High-index, high-dispersion rear negative position |

No element carries nC, nF, ng, or dPgF in the final data. The patent provides only nd and νd for these elements. Consequently, the analysis does not attribute anomalous partial dispersion, ED behavior, or apochromatic correction to any element. Any higher-fidelity spectral behavior would require a source-proven line-index set or a defensible catalog Sellmeier identity that is not established by this embodiment alone.

## Focus Mechanism

Focus status is **PUBLISHED**. No internal focus reconstruction is used.

L221 translates imageward as object distance decreases. The patent supplies three focus rows (¶0058), and the adjacent D12 and D14 gaps remain essentially complementary, demonstrating a rigid one-element translation. The final data file uses the infinity row as its base state and the patent's 0.142× row as its close endpoint.

| Published state | D12 | D14 | D12 + D14 | L221 shift from infinity |
|---|---:|---:|---:|---:|
| Infinity | 1.796 mm | 11.829 mm | 13.625 mm | 0 mm |
| 0.025× | 2.630 mm | 10.994 mm | 13.624 mm | +0.834 mm imageward |
| 0.142× row | 6.599 mm | 7.027 mm | 13.626 mm | +4.803 mm imageward |

The small 0.002 mm spread in the summed adjacent gaps is consistent with the source table's three-decimal spacing precision. The intermediate 0.025× state lies on the same rigid-translation path to within 0.00059 mm when the two authored endpoint gaps are linearly interpolated.

Tracing the rounded prescription to the cover-normalized image plane gives approximately 0.1393× at the patent's row labeled 0.142× and an object-to-image conjugate of 456.98 mm. The data therefore stores `closeFocusM = 0.457` m as the model endpoint. The difference between traced and printed magnification is treated as source-precision rounding, not as a reason to alter the published spacings.

Sony's marketed 0.39 m minimum focusing distance and 0.16× maximum magnification describe the production lens, not an additional patent state. The data does not invent the extra motion needed to force Example 2 to those product endpoints.

## Image Stabilization

The stabilization mechanism is one of the defining features of the patent. L214 is a single negative lens inside G21 and ahead of the aperture stop. The patent argues that this placement increases the stabilization lens's imaging leverage while keeping the moving assembly light (¶0021, ¶0025-¶0032).

For Example 2, the patent's transverse-aberration figures use a +0.43 mm and -0.43 mm displacement of L214 to shift the image by approximately ±0.3° (¶0064). Independent conjugate tracing of the final prescription gives 0.43044 mm for a 0.3° shift, reproducing the source value at its stated precision.

The final data stores the centered axial prescription; it does not introduce a separate dynamic decenter control. The inferred L214 semi-diameters reserve the published ±0.43 mm motion in addition to the verified centered ray envelope.

## Conditional Expressions

The patent gives three principal design conditions. Recalculation from the final prescription reproduces all three Example-2 values.

| Condition | Patent range | Recomputed Example-2 value | Result |
|---|---:|---:|---|
| `|f / ((1 - βvr) βr)|` | 65.76 < value < 114.59 | 82.20635 | Satisfies |
| `|fvr| / f` | 0.88 < value < 1.55 | 1.10509 | Satisfies |
| `|f3| / f` | 0.48 < value < 0.86 | 0.68269 | Satisfies |

Condition (1) governs the stabilization leverage through the image magnification of L214 and the downstream system (¶0025-¶0028). The final prescription gives unrounded `βvr = -10.46567` and `βr = -0.0544267`. The patent prints these intermediates only as -10.46 and -0.05; direct substitution of those rounded figures does not reproduce the patent's printed 82.21, whereas the prescription-derived unrounded values give 82.20635. This is a precision issue in the printed intermediate values, not a correction to the prescription.

Condition (2) compares the standalone focal length of the stabilization lens with the full-system focal length (¶0029-¶0032). The computed -56.69091 mm L214 focal length and 51.29998 mm system EFL give 1.10509, matching the patent's rounded 1.11.

Condition (3) compares the complete in-situ G23 group focal length, not the standalone focal length of L231, with the system EFL (¶0033-¶0036). The computed G23 EFL of +35.02197 mm gives 0.68269, matching the patent's 0.68.

## Verification Summary

The final data file preserves the Example-2 radii, thicknesses, nd values, and published focus spacings without scale transformation. All surfaces are spherical, so there is no conic convention or aspheric coefficient transform to apply.

At infinity focus, independent sequential y-ν tracing and ABCD composition give an EFL of 51.29998 mm, against the patent's 51.30 mm. The modeled stop semi-diameter is 9.631 mm; it is inferred from the published f/1.85 rather than copied from the patent. With that stop, the final prescription returns f/1.84997.

The patent's optional 2.0 mm, nd = 1.5168 sensor cover is excluded from the active lens model. Its optical path is preserved by replacing the plate with its 1.318565 mm air-equivalent thickness inside the final rear spacing. Surface 18 therefore carries 15.468565 mm to IMG rather than the raw cover-containing 16.15 mm physical distance. No powered surface is altered by this normalization.

The authored semi-diameters are modeling inferences. They are not patent clear-aperture values. They were constrained by the centered marginal and chief rays, all three published focus states, the full-field chief ray, the published L214 stabilization travel, measured Figure 8 proportions, and the production filter-diameter context. Figure 8 showed that the initial L211 and L212 envelopes were materially oversized, so surfaces 1–4 were tightened as element-consistent pairs to 10.7/10.1 mm and 9.8/8.4 mm. The final geometry passes the project's surface-domain, edge-thickness, rim-slope, image-circle, and ray-containment checks at all three published focus states.

The surface-by-surface Petzval sum, evaluated as `Σ φ/(n·n′)`, is +0.00302765 mm⁻¹. This is a computed design quantity; the patent does not publish a Petzval radius for Example 2.

No patent numerical correction, focus reconstruction, dimensional scaling, asphere transformation, sensor-filter element, inactive dummy plane, or synthetic cement layer is present in the final prescription.

## Sources

### Patent

- JP 2012-242690 A, *インナーフォーカス式レンズ*, Example 2 / 実施例2, especially ¶0052-¶0064 and Figure 8.

### Manufacturer product identity

- Sony, SEL50F18 specifications: <https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel50f18/specifications>
- Sony, SEL50F18 product/features page: <https://www.sony.com/ug/electronics/camera-lenses/sel50f18>

### Glass-catalog verification basis

The data intentionally retains vendor-neutral six-digit optical-position codes. Candidate-coordinate checks were made against authoritative catalog material from:

- OHARA optical glass catalogs: <https://www.ohara-inc.co.jp/en/product/01000/>
- HOYA optical glass cross-reference and data: <https://www.hoyaoptics.eu/glass-cross-reference-index>
- HIKARI optical glass catalog: <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx>
- SCHOTT optical glass catalog: <https://www.schott.com/en-in/products/optical-glass/>
- SUMITA optical glass downloads: <https://www.sumita-opt.co.jp/en/download/>
- CDGM colourless optical glass catalog: <https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods>
