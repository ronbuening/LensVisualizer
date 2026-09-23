## Patent Reference and Design Identification

**Patent:** US 2,397,565  
**Filed:** July 11, 1944  
**Granted:** April 2, 1946  
**Inventor:** Willy Schade  
**Assignee:** Eastman Kodak Company  
**Title:** Large Aperture Objective  
**Embodiment analyzed:** Example 1

The implemented prescription is Schade's Example 1, the seven-element, four-component f/1.5 objective tabulated with a nominal focal length of 100 mm in Figs. 1–2 of the patent. The data model retains that numerical example and applies a uniform linear scale of 0.52 for the selected 52 mm lens correlation. The resulting computed paraxial effective focal length is 52.020687 mm; the difference from the selected 52 mm correlation value is kept explicit rather than folded into the prescription. (US 2,397,565, Fig. 2 and printed p. 1 / PDF p. 2.)

The association with a Kodak Ektar 52 mm f/1.5 is plausible rather than manufacturer-confirmed. The patent is assigned to Eastman Kodak Company, and independent secondary specimen/design sources associate a Kodak 52 mm f/1.5 with this Schade patent and a seven-element/four-component construction. The retained primary Kodak 1941 catalog, however, does not list a 52 mm f/1.5 among the Ektra-system Ektars, and no Kodak primary document in the dossier explicitly states that the production 52 mm f/1.5 is Example 1. The data therefore leaves original mount and image format unset and does not treat later adapted mounts as production evidence. Because no manufacturer primary source in the dossier establishes production marketing specifications for this exact correlation, the optional `focalLengthMarketing` and `apertureMarketing` fields are intentionally omitted; the design and modeled aperture fields remain tied to the selected patent model.

The patent's optical constants are historical Fraunhofer/sodium D-line values. LensVisualizer currently exposes `d` and `e` index-reference labels, so the final data preserves the patent's rounded N/V coordinates numerically in the `nd`/`vd` fields with `indexReference: "d"` as a schema approximation. No numerical D-to-d conversion is claimed.

## Optical Architecture

The objective is an unsymmetrical four-component large-aperture design. From object side to image side it consists of a positive single element I; a cemented positive second component II+III formed from a negative meniscus followed by a higher-index positive meniscus; a separate biconcave negative element IV; the diaphragm; and a cemented positive triplet V+VI+VII with a lower-index biconcave element between two positive higher-index elements. This is the architecture described in the patent and reproduced by the final data file. (US 2,397,565, printed p. 1 / PDF p. 2.)

The patent gives particular emphasis to the second and fourth components and to the strongly curved air space between them. It describes the air region between the rear of component II+III and the front of IV as a biconvex "air lens" and attributes correction of spherical aberration and rim rays to that feature. It also states that the present design modifies the second component to improve zonal astigmatism relative to Schade's earlier large-aperture objectives. Those are source statements about the design rationale, not conclusions inferred solely from the present paraxial model.

At the implemented 0.52 scale, the isolated-in-air component focal lengths are +79.385 mm for I, +72.083 mm for II+III, −25.302 mm for IV, and +42.294 mm for V+VI+VII. These figures describe each complete component in isolation; they are not a decomposition of the components' in-situ contributions in the assembled objective.

The patent does not dimension the diaphragm within the R7→R8 air space. The modeled stop is therefore an explicit construction inference. Measurement of Fig. 1 places it at about 78% of the source gap measured from R7, giving an 8.5/2.4 mm split at the patent's 100 mm scale and 4.420/1.248 mm after scaling. Its modeled semi-diameter, 10.96 mm, is the real-ray stop radius that reproduces f/1.5: a marginal ray entering at the paraxial entrance-pupil radius of 17.340 mm reaches the stop at 10.955 mm, which is how the LensVisualizer engine sizes the iris. The inner edge of the diaphragm bar drawn in Fig. 1 scales to about 10.7–10.9 mm, in reasonable agreement. Agreement with f/1.5 is nevertheless a calibration result, not independent evidence for the manufactured diaphragm diameter. Secondary specimen reports describe the surviving 52 mm lenses as having no internal iris at all, so the adjustable aperture in the viewer is a modeling convenience.

Likewise, the patent publishes no numerical clear apertures. All surface semi-diameters in the model follow the Fig. 1 silhouette, measured at 300 dpi and scaled from the R1→R11 vertex span, subject to the wide-open f/1.5 axial marginal ray and the current geometry limits. The drawing shows the front components somewhat smaller than an f/1.5 axial bundle requires, so surfaces 1–3 sit just above that ray floor (17.6, 17.0 and 15.9 mm against marginal heights of 17.34, 16.70 and 15.61 mm); the rear triplet's front element V is drawn with a cylindrical rim of about 11.2 mm and is modeled at 11.4 mm on both faces. They should be read as model geometry, not production barrel or field-stop dimensions.

## Element-by-Element Analysis

### Element I — Positive Meniscus

**nd = 1.638, νd = 55.5. Glass: SK18 class (SUMITA K-SK18 catalog proxy; supplier unconfirmed). f = +79.385 mm.**

Element I is the positive front component. The listed focal length is its standalone thick-element focal length at the scaled geometry. The patent requires the first component to be positive with its front surface more strongly curved than its rear surface; the implemented radii preserve that relation. No particular supplier or melt is established by the 1.638 / 55.5 coordinate.

The published pair coincides with the SK18 dense-barium-crown family: SUMITA K-SK18 (1.63854 / 55.50) matches it to rounding, and OHARA S-BSM18 is essentially the same glass. The data uses K-SK18 as a catalog proxy so that the viewer has dispersion data for the element; this is a class-level equivalence, not evidence of which melt Kodak used in 1944.

### Element II — Negative Meniscus, Front Member of the Second Component

**nd = 1.617, νd = 38.5. Glass: Unmatched (vintage barium-flint class, N_D=1.617, V=38.5). f = −70.987 mm.**

Element II is the negative meniscus cemented to the front of III. This placement is explicit in the patent and is central to the claimed second-component condition. Its refractive index exceeds the patent's 1.58 lower bound.

No current authoritative catalog match in the retained glass review was strong enough to justify a named supplier glass. The `Unmatched` label is therefore deliberate; it preserves the source coordinate without implying a historical vendor identity.

### Element III — Positive Meniscus, Rear Member of the Second Component

**nd = 1.638, νd = 55.5. Glass: SK18 class (SUMITA K-SK18 catalog proxy; supplier unconfirmed). f = +33.200 mm.**

Element III is cemented directly behind II and has a refractive index higher by 0.021. The patent specifies that the positive element of the second component should exceed the negative element's index by 0.01–0.11; Example 1 lies inside that interval. (US 2,397,565, printed p. 1 / PDF p. 2; claim 1.)

The II+III pair has positive net power when treated as an isolated cemented component. Its computed component focal length is +72.083 mm at the implemented scale. This net power should not be confused with the separate standalone powers of II and III or with their behavior inside the complete lens.

### Element IV — Biconcave Negative Third Component

**nd = 1.673, νd = 32.2. Glass: SF5/ZF2-class dense flint; supplier unresolved. f = −25.302 mm.**

Element IV forms the complete third component and is biconcave as specified by the patent. It is the last glass element before the diaphragm gap. The strongly curved surface facing the second component also forms the rear boundary of the patent's biconvex air lens.

Modern HIKARI J-SF5 and CDGM H-ZF2 coordinates are close to the published 1.673 / 32.2 point, supporting a dense-flint class assignment. They do not establish which glass Eastman Kodak actually used.

### Element V — Biconvex Positive, Front Member of the Rear Triplet

**nd = 1.670, νd = 47.2. Glass: BAF10 class (OHARA S-BAH10 catalog proxy; supplier unconfirmed). f = +21.367 mm.**

Element V begins the cemented fourth component behind the diaphragm. The final shape label is biconvex, consistent with the signed R8 and R9 radii. The 670/472 barium-flint coordinate is shared by SCHOTT N-BAF10, OHARA S-BAH10 and CDGM H-ZBaF52; S-BAH10 (1.67003 / 47.23) is used as the catalog proxy. None of these establishes historical supply.

### Element VI — Biconcave Negative, Middle Member of the Rear Triplet

**nd = 1.541, νd = 47.5. Glass: 541472 light-flint class (OHARA S-TIL2 catalog proxy; supplier unconfirmed). f = −20.217 mm.**

Element VI is the lower-index biconcave member cemented between V and VII, matching the patent's preferred rear-component arrangement. OHARA S-TIL2 (1.54072 / 47.23) lies within 0.0003 in index and 0.3 in Abbe number of the rounded patent pair, which is close enough to use it as a spectral proxy for this light flint. The historical glass identity remains unknown.

### Element VII — Biconvex Positive, Rear Member of the Rear Triplet

**nd = 1.734, νd = 51.1. Glass: 734511/TAC4-class lanthanum crown; supplier unresolved. f = +33.226 mm.**

Element VII is the high-index positive rear element of the cemented triplet. Example 1 satisfies the patent's preferred rear-element condition of refractive index greater than 1.66 and dispersive index greater than 50. The patent also remarks that Example 1 uses an exceptionally high-index rear element. (US 2,397,565, printed p. 2 / PDF p. 3; claim 2.)

HOYA's current 734-511/TAC4 coordinate provides class-level support for the final label. No historical supplier identity is inferred from that code correspondence.

The two cemented interfaces within V+VI+VII illustrate a point explicitly emphasized by the patent: their curvatures have opposite signs, but their dioptric powers have the same sign. In the scaled model the R9 V→VI interface contributes +0.00729638 mm⁻¹ and the R10 VI→VII interface +0.00648870 mm⁻¹. These are surface powers at the cemented boundaries, not standalone element powers.

## Glass Identification and Selection

The patent gives only rounded D-line refractive indices and dispersive indices for Example 1; it does not identify suppliers or catalog glass names. The final data therefore separates source coordinates from modern catalog-class evidence.

| Element(s) | Stored source coordinate | Final glass label | Evidence level |
|---|---:|---|---|
| I, III | 1.638 / 55.5 | K-SK18 catalog proxy (SK18 class) | Exact to rounding: SUMITA K-SK18 1.63854 / 55.50; OHARA S-BSM18 equivalent |
| II | 1.617 / 38.5 | Unmatched vintage barium-flint class | No retained exact current-catalog identity |
| IV | 1.673 / 32.2 | SF5/ZF2-class dense flint; supplier unresolved | Strong class-level match to current HIKARI/CDGM coordinates |
| V | 1.670 / 47.2 | S-BAH10 catalog proxy (BAF10 class) | Exact to rounding: OHARA S-BAH10 1.67003 / 47.23 |
| VI | 1.541 / 47.5 | S-TIL2 catalog proxy (541472 light flint) | Near match: OHARA S-TIL2 1.54072 / 47.23 (Δνd 0.27) |
| VII | 1.734 / 51.1 | 734511/TAC4-class lanthanum crown; supplier unresolved | Class-level coordinate-code match |

No element in the final data carries `nC`, `nF`, `ng`, or `dPgF`. The present model therefore supports only the patent's N/V-level glass characterization plus the stated class matches. It does not support an apochromatic or anomalous-partial-dispersion performance claim.

## Focus Mechanism

Example 1 provides a single fixed prescription and no internal focusing law. The model therefore uses `NO_INTERNAL_RECONSTRUCTION`: `var` and `varLabels` are empty, and no finite-distance group motion is authored.

The required `closeFocusM` field is set to `1e15` only as a finite schema/UI sentinel for a static optical model. It is not a product minimum focus distance. Example 3 of the patent is explicitly a separate embodiment corrected for a finite conjugate; its numerical spacings are not imported into Example 1.

No statement is made here about whether a production lens used unit focusing, internal focusing, or another mechanical focusing arrangement, because the retained primary product evidence does not establish that mechanism for the selected 52 mm lens.

## Air Lens and Patent Design Rationale

The source describes the air space between the second and third components as a biconvex air lens. In the 100 mm source prescription this is the `s2 = 4.4 mm` separation between R5 and R6; the implemented scale makes it 2.288 mm. The patent states that this air lens contributes correction of spherical aberration and rim rays. (US 2,397,565, printed p. 1 / PDF p. 2.)

The same passage identifies the second-component meniscus shape and its index relationship as the main change used to improve zonal astigmatism over Schade's earlier designs. That historical design rationale is retained as an attributed patent statement. The present analysis does not infer a quantitative aberration budget from paraxial powers or glass class alone.

## Conditional Expressions

The selected example satisfies the patent conditions that apply directly to Example 1. The source-scale checks are replayed in the verifier from the extracted patent prescription.

| Patent condition | Example 1 result | Status |
|---|---:|---|
| Negative element II: N > 1.58 | 1.617 | Satisfied |
| 0.01 ≤ N(III) − N(II) ≤ 0.11 | 0.021 | Satisfied |
| 0.40F ≤ |R3| ≤ 0.55F | |R3|/F = 0.509 | Satisfied |
| 0.65F ≤ |R5| ≤ 1.40F | |R5|/F = 0.967 | Satisfied |
| Rear element VII: N > 1.66 and V > 50 | 1.734 / 51.1 | Satisfied |
| Front surfaces of the first two components more strongly curved than their rears | |R1|/|R2| = 0.257; |R3|/|R5| = 0.526 | Satisfied |
| Rear-triplet cemented surfaces oppositely curved with like-sign power | R9 < 0, R10 > 0; both interface powers positive | Satisfied |

Claim 3's additional high-index/dispersion expression is not applied as an Example 1 requirement here. The patent discusses that expression in connection with a different preferred high-index second-component variant, while Example 1 uses the 1.638 / 55.5 positive element III.

## Verification Summary

The final model was recomputed from the parsed `KodakEktar52mmf15.data.ts` rather than from a separate copy of the intended prescription. Sequential height/reduced-angle tracing and an independent ABCD matrix composition agree to floating-point precision.

At the fixed infinity state, the computed effective focal length is 52.020687 mm. The back focal distance from the surface-11 vertex to the paraxial infinity image plane is 26.386284 mm. The complete R1-vertex to image-plane distance divided by EFL is 1.293914, so the design is not described as telephoto under the project criterion `TL/EFL < 1`. BFD/EFL is 0.507227, so it is not described as retrofocus under the criterion `BFD > EFL`.

The surface-by-surface Petzval sum, using `φ/(n·n′)` at each refracting surface, is +0.006112589368 mm⁻¹. This is reported as the algebraic sum; no unqualified field-curvature sign or image-surface interpretation is inferred from its reciprocal alone.

The f/1.5 entrance-pupil semi-diameter is 17.340 mm; traced exactly, that marginal ray reaches the stop at 10.955 mm, which the 10.96 mm stop radius records. Because the stop radius was calibrated to that target, this match verifies internal consistency of the implemented aperture model, not an unpublished physical iris measurement.

The modeled semi-diameters pass the repository's surface-geometry checks at the fixed state. Minimum element edge thickness is 0.45 mm (element VII), the largest spherical rim angle is 63.9° (surface 4), and the combined R5/R6 sag uses 2.035 mm of the 2.059 mm allowed in that 2.288 mm air lens. The exact wide-open axial marginal ray clears every surface, and for a 24×36 test field (half-diagonal 21.6 mm, ω = 22.7°) the chief ray clears every surface; the oblique bundle is vignetted by the front and rear rims, as expected for an f/1.5 design of this era. These checks establish the internal geometry used by the model; they do not establish production off-axis coverage because Example 1 supplies no numerical field and the product image format is unresolved.

No LensVisualizer repository validator, production render-trim diagnostic, runtime glass resolver, corpus test, or build result is implied by these portable checks. Those remain integration tasks outside this analysis-authoring stage.

## Sources and References

1. Willy Schade, **Large Aperture Objective**, US Patent 2,397,565, filed July 11, 1944, granted April 2, 1946. Example 1 and Figs. 1–2 are the prescription source; printed pp. 1–2 correspond to PDF pp. 2–3 in the supplied copy. Patent text and drawings are the authority for radii, spacings, N/V values, architecture, conditions, and the qualitative diaphragm location: https://patents.google.com/patent/US2397565A/en
2. Eastman Kodak Company, **Kodaks and Brownies 1941**. Historical primary catalog used as a limiting product-correlation check: https://www.libraryweb.org/~digitized/tradecats/kodak/Kodaks_and_Brownies_1941.pdf
3. **Cathode Press**, Summer 1952. Historical trade reference to a Kodak X-Ray Ektar f/1.5 for 70 mm Fluoro-Record cameras; contextual rather than an exact Example 1 product identification: https://www.worldradiohistory.com/Archive-Company-Publications/Machlett-Cathode-Press/Cathode-Press-1952-Summer.pdf
4. Oldlens, Kodak Ektar 52 mm f/1.5 specimen/design material, secondary correlation source: https://www.oldlens.com/ektar%2052mm.html
5. Dujingtou lens-design index, secondary mapping of US 2,397,565 Example 1 to a Kodak 52 mm f/1.5: https://www.dujingtou.com/article_31994.shtml
6. OHARA, current optical-glass catalog, including S-BSM18: https://www.ohara-inc.co.jp/wp-content/uploads/2022/02/jall_20250418.pdf
7. HIKARI, J-SK18 family and J-SF5 data: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sk/ and https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/SF/J_SF5.pdf
8. SCHOTT, N-BAF10 optical-glass catalog/search: https://www.us.schott.com/shop/advanced-optics/en/search/
9. HOYA, optical-glass data and cross-reference pages: https://www.hoya-opticalworld.com/english/datadownload/index.html
10. CDGM, H-QF8 / 541472 data sheet: https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf
