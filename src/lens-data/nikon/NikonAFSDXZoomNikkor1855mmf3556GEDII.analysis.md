# NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6G ED II — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2006/0007559 A1

**Application Number:** US 11/200,158

**Filed:** August 10, 2005

**Priority:** January 24, 2003 (JP 2003-016603); August 13, 2004 (JP 2004-236077)

**Published:** January 12, 2006

**Inventor:** Haruo Sato

**Assignee:** Nikon Corporation

**Title:** *Zoom Lens System*

**Embodiment analyzed:** Example 4, Fig. 13 and Table 4; aberration plots in Figs. 14–16

The prescription represented here is Example 4 of the patent's second embodiment. The selected production correlation is the NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6G ED II. The patent itself does not identify that retail product by name, so the correlation is a source-based identification rather than a manufacturer statement that the marketed lens is literally Example 4.

Several independent features support that selected correlation, but only at the 18–55 mm ED-family level:

1. Nikon specifies the ED II as an 18–55 mm DX-format Nikon F zoom with seven elements in five groups, whereas Example 4 is a seven-physical-element/five-group design with calculated design focal positions of 18.5, 35.0, and 53.5 mm.
2. Nikon identifies one ED element and one aspherical element in the ED II. Example 4 contains one very-low-dispersion element at `nd = 1.497000`, `νd = 81.61`, and one hybrid glass/resin element whose resin rear surface is aspherical.
3. Nikon's ED II sell sheet explicitly describes a hybrid aspherical element, matching the patent's compound front negative element in which a resin layer is bonded to a glass substrate (US 2006/0007559 A1, ¶0129).
4. The match is not unique to the ED II. Nikon's original 2005 AF-S DX Zoom-Nikkor 18–55mm f/3.5–5.6G ED was also a seven-element/five-group design with one ED element and one hybrid aspherical element, the same marketed focal/aperture range, and a 0.28 m minimum focus distance. The patent therefore supports the selected ED II identification as a production-family correlation, not as a unique optical fingerprint.
5. The prescription is not artificially forced to either production lens: Nikon publishes a 0.28 m minimum focus distance for the ED II and a current 0.31× maximum reproduction ratio, while the patent's published closest-focus rows independently solve to approximately 0.250 m from the focal plane and reach `|β| = 0.38023` at the telephoto state.

Marketing and design quantities therefore remain separate. The selected ED II is an 18–55 mm f/3.5–5.6 zoom; the modeled patent states are 18.5/35.0/53.5 mm with published wide-open F-numbers 3.56/4.65/5.90. The latter values govern `nominalFno` in the data model.

## Optical Architecture

Example 4 is a negative-positive two-group zoom. The first zoom group `G1` has negative power, and the second zoom group `G2` has positive power (¶0128). The patent describes the second group as a Gauss-derived arrangement split into front and rear positive subgroups, `G2-1` and `G2-2`, with a comparatively large internal air space between them (¶¶0122–0123).

The physical lens contains seven elements in five air-separated construction groups. The data model contains eight optical-medium entries because the bonded resin of the front hybrid element is represented separately from its glass substrate. That split is a modeling requirement for the glass-to-resin interface and the resin asphere; it does not change the production-style element count.

`G1` contains the hybrid negative front element `L1` (`L1g + L1r`) followed by the positive meniscus `L1p`. Independent paraxial computation from the final data gives `G1` a net focal length of approximately −31.5000 mm. The hybrid `L1g + L1r` alone has a net focal length of approximately −19.3730 mm; the following `L1p` reduces the magnitude of the group's negative power while supplying the high-index/high-dispersion positive constituent required by the patent's conditions.

`G2` begins with the low-dispersion positive `L2a`, then the aperture stop, then the front cemented pair `L2ap + L2an`. After an 11.2 mm pneumatic space comes the rear cemented pair `Lbn + Lbp`. The final TypeScript-array computation gives `G2-1` a focal length of approximately +47.0566 mm, `G2-2` approximately +101.5105 mm, and the complete `G2` approximately +38.5000 mm.

The aperture stop position is source-published: it lies 1.8 mm behind surface 7 and 2.0 mm ahead of surface 9. Its physical semi-diameter is not published. The modeled 7.799 mm semi-diameter is a first-order inference constrained by the wide-state F/3.56 condition and by independent ray/geometry checks.

Zooming is performed by varying the air space between `G1` and `G2` (¶0133). At infinity the `D5` gap contracts from 44.09357 mm at 18.5 mm to 13.18951 mm at 35.0 mm and 1.20774 mm at 53.5 mm. With the image plane used as the fixed reference, `G1` moves imageward from wide to mid and then reverses direction toward the object from mid to tele, while `G2` continues objectward. The three patent zoom stations are therefore retained as interpolation anchors rather than reducing the motion to a monotonic two-point model.

Under the project taxonomy, the design is retrofocus at all three infinity states because normalized back focal distance exceeds EFL. It is not telephoto under the separate `TL/EFL < 1` criterion.

The patent also includes a moving flare stopper `F` behind the last refracting surface. Its clear aperture is not published, so it cannot be modeled quantitatively as a blocker without invention. The sequential model omits that inactive plane and preserves the image-plane station by combining the source `D14` and `D15` spacings into the rear air distance after surface 14. The resulting normalized rear spacings are 41.84285, 62.00951, and 84.62063 mm at wide, mid, and tele.

## Element-by-Element Analysis

### H1 — L1g + L1r: hybrid front negative element

**L1g:** `nd = 1.772500`, `νd = 49.61`. Glass: `773496` class, vendor ambiguous. Standalone-in-air `f = −24.7341 mm`.

**L1r:** `nd = 1.553890`, `νd = 38.09`. Glass: `Unmatched (aspheric resin; trade name unpublished)`. Standalone-in-air `f = −90.7827 mm`.

The physical front element is a negative meniscus convex toward the object. The patent explicitly describes it as a compound lens made from glass and resin, with the resin on the image side and the outer resin surface aspherical (¶0129). In the data model the substrate and resin are separate entries because they are separate optical media joined at surface 2.

The standalone focal lengths above describe each constituent as if isolated in air and must not be confused with the behavior of the bonded unit. Using the actual glass/resin interface and thicknesses, the hybrid pair has a computed net power of `−0.05161813 mm⁻¹`, equivalent to approximately `−19.3730 mm`. It is the dominant negative component at the front of `G1`.

The resin asphere provides a non-spherical correction surface without requiring the full negative element to be made as one monolithic aspheric glass blank. The patent identifies the material construction but gives no resin trade name, so the model deliberately does not substitute an optical-glass catalog identity for that layer.

### L1p — positive meniscus completing G1

**L1p:** `nd = 1.860740`, `νd = 23.06`. Glass: `861231` dense-flint class; HIKARI J-SFH2 is a close modern catalog equivalent, but the historical identity is unproven. Standalone-in-air `f = +77.9678 mm`.

`L1p` is a positive meniscus convex toward the object and is the second physical element of `G1`. The patent deliberately constrains this element to very high refractive index and very high dispersion: condition (5) requires `ν1p < 23.2`, while condition (6) requires `n1p > 1.790`. Example 4 gives `νd = 23.06` and `nd = 1.860740`.

The patent attributes the high-dispersion requirement to balancing lateral and axial chromatic aberration in a compact, wide-angle first group, and the high-index requirement to controlling lower coma and spherical aberration while keeping the element compact (¶¶0071–0075). Those statements describe the patent's design rationale; they do not establish a unique catalog glass.

Together, the hybrid negative element and `L1p` produce the computed `G1` focal length of approximately −31.5000 mm.

### L2a — low-dispersion biconvex positive

**L2a:** `nd = 1.497000`, `νd = 81.61`. Glass: `497816` low-dispersion class, vendor/composition ambiguous. Standalone-in-air `f = +59.4042 mm`.

`L2a` is the first powered element of `G2-1` and lies immediately ahead of the aperture stop. Its unusually high Abbe number makes it the clearest prescription-level counterpart to the production lens's one ED element. That correspondence is part of the production correlation, not proof that a specific vendor's ED glass was used.

The data records that production correlation as `apd: "inferred"`; it does not add unreported partial-dispersion values
or turn the ED role into a vendor or melt identification.

The independent catalog audit found exact present-day coordinate matches for the `1.497000 / 81.61` pair in more than one vendor family, including SCHOTT N-PK52A, HOYA FCD1, and CDGM H-FK61. Because the patent does not name the glass and the coordinates are not vendor-unique, the final data retains a neutral `497816` low-dispersion class annotation without assigning a composition or vendor.

### D1 — L2ap + L2an: front cemented pair

**L2ap:** `nd = 1.516800`, `νd = 64.10`. Glass: `517641` crown class, BK7-family coordinates. Standalone-in-air `f = +28.6323 mm`.

**L2an:** `nd = 1.772500`, `νd = 49.61`. Glass: `773496` class, vendor ambiguous. Standalone-in-air `f = −30.1690 mm`.

This pair follows the stop and closes the front positive subgroup `G2-1`. The two constituents are individually a strong positive biconvex element and a strong negative biconcave element when evaluated separately in air.

Their cemented combination is not negative in the numerical Example 4 prescription. Computation through surfaces 9–11 gives a weak positive net power of `+0.00382385 mm⁻¹`, equivalent to approximately `+261.5167 mm`. This must be distinguished from the standalone powers of the two constituents and from the stronger positive power of the complete `G2-1` subgroup.

That result exposes a direct source contradiction. Paragraph 0131 calls `L2ap + L2an` a “cemented negative lens,” but Table 4 produces the weak positive power above. Table 4 is internally consistent with the complete-system focal lengths and patent conditions, so the data follows the numerical table unchanged rather than changing a radius, index, or thickness to force the prose description.

### D2 — Lbn + Lbp: rear cemented pair

**Lbn:** `nd = 1.834000`, `νd = 37.17`. Glass: `834372` high-index class, vendor/composition ambiguous. Standalone-in-air `f = −26.4573 mm`.

**Lbp:** `nd = 1.516800`, `νd = 64.10`. Glass: `517641` crown class, BK7-family coordinates. Standalone-in-air `f = +21.5866 mm`.

The rear subgroup `G2-2` is a cemented negative-meniscus/positive-biconvex pair. Unlike the front cemented pair, its net sign agrees with the patent's positive-subgroup description: computation through surfaces 12–14 gives `+0.00985120 mm⁻¹`, equivalent to approximately `+101.5105 mm`.

The patent's condition (4) constrains the index difference between the negative and positive constituents of this cemented pair. Example 4 gives `1.834000 − 1.516800 = 0.317200`, placing the pair within the stated range. The high-index negative constituent and lower-index crown positive constituent also contribute to the Petzval balancing discussed in the patent's explanation of the index-difference conditions (¶¶0066–0069).

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number only. It does not publish trade names, melt numbers, `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The glass annotations therefore record coordinate classes or an explicit unmatched resin rather than asserting a vendor identity that the source does not establish.

| Data annotation | `nd` | `νd` | Used in | Identification discipline |
|---|---:|---:|---|---|
| `773496` class | 1.772500 | 49.61 | L1g, L2an | Multiple modern vendor equivalents lie essentially on the same coordinates; historical vendor is ambiguous. |
| Unmatched aspheric resin | 1.553890 | 38.09 | L1r | Patent identifies resin but gives no trade name; optical-glass catalog naming would be inappropriate. |
| `861231` dense-flint class | 1.860740 | 23.06 | L1p | HIKARI J-SFH2 is a close coordinate equivalent; identity remains inferred rather than source-published. |
| `497816` low-dispersion class | 1.497000 | 81.61 | L2a | Multiple vendor families share this coordinate code; the patent does not establish composition or supplier. |
| `517641` crown class | 1.516800 | 64.10 | L2ap, Lbp | BK7-family coordinate region; no unique vendor can be defended from the patent. |
| `834372` high-index class | 1.834000 | 37.17 | Lbn | Current HIKARI/OHARA families lie at or very near the coordinates, but the patent does not establish vendor or composition. |

The palette uses both dispersion and refractive-index contrast rather than relying on a large number of elements. The front group's `L1p` is deliberately high-index/high-dispersion, while `L2a` is strongly low-dispersion. The two cemented pairs use substantial index differences between their negative and positive constituents, consistent with the patent's Petzval and aberration-balancing conditions.

No apochromatic or anomalous-partial-dispersion claim is made. The final data intentionally omits `nC`, `nF`, `ng`, and `dPgF`, and the class-level glass labels do not provide sufficient historical certainty to import vendor Sellmeier behavior as though it were source data.

## Focus Mechanism

Example 4 uses published front-group focusing rather than a reconstructed focus model. Paragraph 0134 states that close focusing is performed by moving the entire first zoom group `G1` toward the object. The `G2`-to-image spacing is unchanged at each zoom position, so the changing `D5` row directly represents the objectward translation of the first zoom group.

The patent publishes infinity, an intermediate `β = −0.025` state, and closest-focus states at all three zoom positions:

| Zoom state | `D5` at infinity (mm) | `D5` at `β = −0.025` (mm) | `D5` closest (mm) | Published closest `β` | Computed object-to-focal-plane distance |
|---|---:|---:|---:|---:|---:|
| Wide, 18.5 mm | 44.09357 | 45.43445 | 51.15122 | −0.13159 | 250.000215 mm |
| Mid, 35.0 mm | 13.18951 | 13.89826 | 19.72380 | −0.23049 | 250.000853 mm |
| Tele, 53.5 mm | 1.20774 | 1.67141 | 8.25968 | −0.38023 | 250.000736 mm |

The data stores the published infinity and closest endpoints. The intermediate `β = −0.025` row resolves to different inverse-distance coordinates at the three zoom positions (`focusT ≈ 0.2963`, `0.1675`, and `0.1115`), so the shared focus-keyframe axis cannot represent all three rows exactly. It remains provenance rather than adding an internally inconsistent UI state. No internal spacing was solved or invented to create a close-focus model.

The common computed object-to-focal-plane distance is approximately 0.250 m, which is why `closeFocusM` is 0.25 in the data. Nikon's production documentation instead gives 0.28 m at all zoom settings and the current product page gives a 0.31× maximum reproduction ratio. Those marketed values are retained as product context but are not used to alter the selected patent embodiment.

Nikon identifies the production lens as AF-S and specifies a built-in Silent Wave Motor for autofocus. That is a mechanical/product fact. The patent analysis of focus motion concerns the optical movement of `G1` and does not infer unreported motor or cam details from the prescription.

## Aspherical Surfaces

Example 4 has one aspherical surface: the rear surface of the bonded resin layer on the physical front negative element. It is surface 3 in the patent and `3A` in the data model.

The patent uses a conic convention different from the LensVisualizer standard form. Its equation is

$$
S(y)=\frac{y^2/R}{1+\sqrt{1-\kappa(y/R)^2}}+C_3|y|^3+C_4y^4+C_6y^6+C_8y^8+C_{10}y^{10}.
$$

The project form uses `sqrt(1 − (1+K)(h/R)^2)`, so the published `κ = 0.0375` converts to

$$
K=\kappa-1=-0.9625.
$$

The patent's `C3|y|^3` term remains rotationally symmetric because it depends on radial magnitude. Since the model uses non-negative radial height `h`, it is stored directly as `A3 h^3`.

| Coefficient | Final data value |
|---|---:|
| `K` | −0.9625 |
| `A3` | +7.9879×10⁻⁶ mm⁻² |
| `A4` | +3.03680×10⁻⁶ mm⁻³ |
| `A6` | −2.15160×10⁻⁸ mm⁻⁵ |
| `A8` | +5.25940×10⁻¹¹ mm⁻⁷ |
| `A10` | −2.58910×10⁻¹³ mm⁻⁹ |

No scale factor is applied to Example 4. Radii, spacings, image-plane distances, and aspherical coefficients are therefore retained at the patent's millimeter scale; there is no coefficient rescaling to disclose.

The patent does not publish clear-aperture heights. Surface `3A` therefore uses the inferred and independently validated semi-diameter of 14.3 mm rather than a source aperture. No asphere departure is presented as a patent edge specification.

## Chromatic Correction Strategy

The prescription uses material placement economically. `L2a` has `νd = 81.61`, making it the principal low-dispersion positive element in the second zoom group. The production lens's single ED-element specification is consistent with assigning the production ED role to this position, but the patent does not name a specific ED glass.

At the opposite dispersion extreme, `L1p` has `νd = 23.06` and `nd = 1.860740`. The patent explicitly imposes a low-Abbe/high-index requirement on this positive first-group element and explains it as part of the lateral/axial chromatic, coma, and spherical-aberration balance. The design therefore uses a high-dispersion positive in `G1` and a low-dispersion positive in `G2` rather than treating “ED” as an isolated marketing feature.

The front and rear cemented pairs also use index contrasts of 0.255700 and 0.317200, respectively. The patent links these differences to Petzval control and wide-angle field correction. These are d-line/Abbe-based design observations only; secondary-spectrum behavior cannot be reconstructed reliably from the available source data.

## Conditional Expressions

Example 4 satisfies all six numerical conditions tabulated by the patent. The values below are recomputed from the final data rather than copied from the patent's rounded summary row.

| Condition | Patent requirement | Recomputed Example 4 value |
|---|---|---:|
| (1) | `0.27 ≤ Ds/D ≤ 0.8` | 0.40433213 |
| (2) | `0.5 ≤ fb/fa ≤ 15` | 2.15720113 |
| (3) | `0 < nan − nap < 0.45` | 0.255700 |
| (4) | `0 < nbn − nbp < 0.45` | 0.317200 |
| (5) | `ν1p < 23.2` | 23.06 |
| (6) | `n1p > 1.790` | 1.860740 |

Condition (1) controls the relative size of the pneumatic spacing between the front and rear parts of `G2`; condition (2) constrains the balance of front- and rear-subgroup power. Conditions (3) and (4) constrain the refractive-index differences in the two cemented pairs. Conditions (5) and (6) enforce the unusual high-dispersion/high-index material of `L1p`.

## Verification Summary

The load-bearing paraxial quantities were recomputed from the final TypeScript arrays by two independent first-order methods: ABCD matrices and sequential height/reduced-angle tracing. Their transfer matrices agree to machine precision at all three zoom positions.

| State | Patent focal length | Computed EFL | Normalized rear spacing | Computed BFL |
|---|---:|---:|---:|---:|
| Wide | 18.50000 mm | 18.49999281 mm | 41.84285 mm | 41.84286050 mm |
| Mid | 35.00000 mm | 35.00002012 mm | 62.00951 mm | 62.00958392 mm |
| Tele | 53.50000 mm | 53.50006965 mm | 84.62063 mm | 84.62078178 mm |

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is `+0.0034091601 mm⁻¹`, corresponding to a signed Petzval radius of approximately −293.327 mm under the project's `−1/ΣP` convention.

The fixed modeled stop semi-diameter of 7.799 mm reproduces F/3.5600 at the wide position. With that same physical stop, the paraxial calculation gives approximately F/4.6451 and F/5.8617 at the mid and tele positions. The patent prints 4.65 and 5.90, so the final `nominalFno` array retains the source values while the small discrepancy is treated as rounding rather than evidence for a zoom-dependent physical stop diameter.

Because the patent supplies no clear apertures, every modeled semi-diameter is an inference. The patent-figure-refined
front-group rims pass the independent surface, image-circle, and exact non-paraxial checks over every authored infinity
and closest-focus zoom endpoint. These results support the modeled apertures without presenting them as patent data.

The known paragraph-0131 sign contradiction remains unresolved by design: the numerical prescription is preserved because it reproduces the focal lengths, focus states, and conditional expressions. Likewise, the production/patent close-focus mismatch is preserved rather than normalized away.

## Sources

- US 2006/0007559 A1, *Zoom Lens System*, Haruo Sato / Nikon Corporation. Supplied original PDF; especially ¶¶0121–0139, Table 4, and Figs. 13–16.
- Nikon Imaging USA, “AF-S DX Zoom-Nikkor 18-55mm f/3.5-5.6G ED II,” official product page: https://www.nikonusa.com/p/af-s-dx-zoom-nikkor-18-55mm-f35-56g-ed-ii/2170/overview
- Nikon Corporation, “18-55mm f/3.5-5.6G ED II AF-S DX Zoom-Nikkor Lens,” official January 2007 sell sheet: https://www.nikonusa.com/fileuploads/pdfs/18-55mm_sell_sheet.pdf
- Nikon Inc., original AF-S DX Zoom-Nikkor 18-55mm f/3.5-5.6G ED specification sheet, April 2005: https://www.nikonusa.com/fileuploads/pdfs/twonewlenses_042005.pdf
- HIKARI optical-glass catalog, J-SF/J-SFH family: https://www.hikari-g.co.jp/cn/optical_glass/general_optical_glass/j-sf/
- HIKARI optical-glass catalog, J-LASF family: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lasf/
- OHARA optical-glass catalog, S-LAH family: https://oharacorp.com/glass-type/optical-glass/s-lah/
- SCHOTT, N-PK52A optical-glass datasheet: https://media.schott.com/api/public/content/a2a92fcce8144b9eaa7f5dcd2666d258
- HOYA Optical World, cross-reference index: https://www.hoya-opticalworld.com/english/products/crossreference.html
- CDGM, optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
