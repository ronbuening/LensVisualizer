# VOIGTLÄNDER TELOMAR 180mm f/5.5 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** FR 1,045,076\
**Priority:** 6 December 1950 (Swiss application)\
**Filed in France:** 13 November 1951\
**Granted/issued:** 24 June 1953\
**Published:** 24 November 1953\
**Applicant:** Voigtländer Aktiengesellschaft\
**Inventor:** No individual inventor is named on the French publication\
**Title:** *Téléobjectif photographique*\
**Embodiment analyzed:** Example 1 (`EXEMPLE CHIFFRÉ`), corresponding to the Fig. 3 form

The modeled prescription is the user-selected correlation between FR 1,045,076 Example 1 and the production VOIGTLÄNDER TELOMAR 180mm f/5.5. The French publication itself does not state that this example became the 180 mm Telomar, so the correlation should be understood as a source-supported project identification rather than a manufacturer confirmation.

The identification rests on several converging facts. First, the patent's selected numerical example is a five-element telephoto with a relative aperture of 1:5.4 and a positive front member separated by a large air space from a negative rear member. Second, a period Voigtländer professional-lens catalog describes the Telomar f/5.5 series as five-element lenses of true telephoto construction and lists the 180 mm f/5.5 in a Synchro-Compur shutter. Third, a period Linhof 2¼×3¼-inch system list identifies a Technika Telomar 180 mm f/5.5 for the 6×9 class. The data file therefore uses the canonical `large-format-lens-board` and `6x9` taxonomy entries.

The patent's numerical table is normalized to $f=1$. The data file applies a uniform scale factor of 180 to all radii and axial distances, preserving the printed refractive indices and Abbe numbers. No aspheres are present, so no aspheric-coefficient scale transformation is applicable.

The corresponding U.S. patent 2,662,446 A names Albrecht Wilhelm Tronnier, but that U.S.-source attribution is not substituted into the French source's structured inventor field. The data file correctly retains `patentAuthors: []` because FR 1,045,076 names only the applicant.

## Optical Architecture

The prescription is a five-element, four-group telephoto organized as a positive front member followed, across the diaphragm chamber, by a net-negative rear member. This is the architecture described by the patent itself: front elements I and II have positive combined power, while rear elements III and IV have negative combined power. The large separation between those functional members is the defining telephoto feature.

The physical sequence is L1, a very small air gap, L2, the large diaphragm chamber, L3, an air gap, and the cemented L4+L5 pair. L1 and L2 form the front functional member; L3 together with cemented member IV forms the rear functional member. The final pair is physically cemented, but it must not be interpreted as two independent thin lenses simply added together: the refracting power of their shared surface contributes materially to the pair's net behavior.

From the final TypeScript arrays, the first-to-last glass-vertex span is 80.3304 mm and the modeled image plane lies 71.4283 mm behind the last surface, giving a 151.7587 mm total track. The independently traced effective focal length is 182.2663 mm, so $TL/EFL=0.8326<1$. Under the project's reference-plane definition this is therefore a telephoto lens. It is not retrofocus: the modeled back focal distance is substantially shorter than the effective focal length.

The patent also defines its own historical telephoto-effect metric using the printed image-side intersectional width $p_0'$. With $f=1$ and $p_0'=0.38247$, that ratio is approximately 2.615, exactly the value printed beside the numerical example. This patent metric and the project's $TL/EFL$ test use different reference quantities and should not be conflated.

All surfaces in the selected embodiment are spherical. The only non-glass optical plane in the data is the single aperture stop inside the published R4-to-R5 diaphragm chamber.

## Element-by-Element Analysis

### L1 (I) — Biconvex Positive

**nd = 1.58360, νd = 46.2. Glass: Barium-flint BAF3/BAM3 class. Standalone f = +50.153 mm.**

L1 is the principal positive collector in the front member. Its two convex faces give it the strongest positive standalone power of the front pair. The class label is a modern coordinate match to the patent's d-line refractive data; it is not an assertion that the original production element used a specific OHARA, Schott, or other catalog melt.

The rear surface of L1 has the same printed radius magnitude and sign as the front surface of L2. The two surfaces are nevertheless separated by a small but finite 0.2106 mm air space after scaling, so L1 and L2 are not a cemented doublet in this embodiment.

### L2 (II) — Biconcave Negative

**nd = 1.72755, νd = 28.4. Glass: SF10 class. Standalone f = −77.156 mm.**

L2 supplies the negative component of the front member. Its lower Abbe number than L1 establishes a strong dispersion contrast within the front Fraunhofer-type pair, but the patent provides only nd and νd; no claim of anomalous partial dispersion or apochromatic correction is justified from these data.

Although L2 is negative in isolation, the L1+air+L2 front member remains net positive. That distinction is important: the standalone focal length describes L2 in air, whereas its actual contribution in the assembled lens depends on the preceding L1, the very small intervening air gap, and the following long diaphragm space.

### L3 (III) — Biconvex Positive

**nd = 1.62355, νd = 47.0. Glass: BAF8 class. Standalone f = +154.583 mm.**

L3 is the positive element immediately behind the diaphragm chamber. In isolation it is relatively weak compared with L1 and L4, but in the assembled prescription it precedes the strongly negative cemented rear member and participates in the net-negative power of the complete rear functional member.

The patent's discussion places particular emphasis on the spacing from this positive element to the strongly concave surface of member IV. One of the numerical conditions on page 3 constrains the R5-to-R7 axial distance relative to the magnitude of R7; the selected example satisfies that condition.

### L4 (IVa) — Biconcave Negative

**nd = 1.58264, νd = 42.1. Glass: LF3 / PBL23 / QF5 class. Standalone f = −38.019 mm.**

L4 is the strongest negative standalone element in the prescription and forms the front component of cemented member IV. Its strongly curved front surface R7 is the characteristic negative surface singled out repeatedly in the patent's geometrical conditions.

L4 should not be assigned the complete power of member IV. Its rear face is a cemented interface into the higher-index L5 glass, so the pair must be evaluated as a coupled cemented unit rather than as two isolated lenses.

### L5 (IVb) — Biconvex Positive, Cemented to L4

**nd = 1.75512, νd = 27.0. Glass: SF4-family flint class. Standalone f = +82.482 mm.**

L5 is positive as a standalone element, but it is cemented directly to L4 at surface 8. The interface has positive paraxial power because the refractive index rises from L4 to L5 across a positive-radius surface. This is consistent with the patent's specific use of a strongly converging cemented surface inside an overall negative rear member.

The complete cemented L4+L5 member has an independently computed air-equivalent focal length of approximately −73.684 mm. Thus the pair remains net negative even though L5 alone is positive. In situ, L3 lies ahead of this cemented pair with a 7.9434 mm air gap; the combined III–IV rear functional member remains net negative and provides the negative rear power required by the telephoto architecture. Standalone element power, cemented-member power, and assembled-group behavior are therefore distinct quantities in this design.

## Glass Identification and Selection

The French patent supplies only d-line refractive indices and Abbe numbers; it does not identify manufacturers or historical glass trade names. The data file therefore uses glass-family class labels rather than asserting exact vendor melts or patent-supplied six-digit glass codes.

| Element | nd | νd | Data-file annotation | Catalog interpretation |
|---|---:|---:|---|---|
| L1 | 1.58360 | 46.2 | Barium-flint BAF3/BAM3 class | Close to modern BAF3/BAM3-family coordinates |
| L2 | 1.72755 | 28.4 | SF10 class | Close to the SF10 family across several vendors |
| L3 | 1.62355 | 47.0 | BAF8 class | Close to BAF8-family coordinates |
| L4 | 1.58264 | 42.1 | LF3 / PBL23 / QF5 class | Close to LF3/PBL23/QF5-family coordinates |
| L5 | 1.75512 | 27.0 | SF4-family flint class | Index very close to SF4-family glasses; Abbe value remains source-specific |

The class assignments were checked against authoritative OHARA, Schott, HIKARI, CDGM, HOYA, and SUMITA cross-reference material. They are coordinate neighborhoods, not historical-melt identifications. No element in the data file carries nC, nF, ng, or dPgF because FR 1,045,076 does not publish those values and no exact historical glass identity has been established. A modern class label may resolve to a catalog dispersion model in downstream tooling, but that remains a coordinate-compatible approximation rather than an identification of the 1950 melt.

Consequently, the lens should not be described as apochromatic, as using anomalous partial dispersion, or as having a historically validated Sellmeier model. Its chromatic strategy can be discussed only at the level directly supported by nd and νd: the design combines moderate-dispersion positive glasses with higher-dispersion negative/positive partners across the two Fraunhofer-type members.

## Focus Mechanism

FR 1,045,076 publishes a static prescription and gives no internal focusing table, variable spacing, finite-object state, magnification state, or minimum focusing distance for this embodiment. The data file therefore has no focus `var` entries and is explicitly classified `NO_INTERNAL_RECONSTRUCTION`.

The required `closeFocusM` value of 1.0 m is only a finite schema/UI placeholder. It does not represent a published or reconstructed minimum focus distance and does not create a second optical state. For the documented board/shutter-mounted 6×9 application, camera-side standard or bellows displacement is outside the internal optical prescription represented here.

No focusing motor, helical travel, or internal moving group is asserted because none is documented by the selected patent or the cited production sources.

## Aberration-Correction Strategy

The patent describes the front I–II pair and the rear III–IV pair in Fraunhofer terms and concentrates its correction concept on the rear negative member. In particular, member IV contains a cemented surface whose local refracting action is positive even though the complete member is negative. The numerical prescription reproduces that arrangement: the L4→L5 interface at surface 8 has positive paraxial power, while the complete L4+L5 cemented member has negative equivalent power.

The design also uses strongly unequal axial separations. L1 and L2 are nearly adjacent, the diaphragm lies in a long central chamber, and L3 is then separated from the cemented rear member by a moderate air gap. The patent's page-3 conditions constrain both the curvature of R7 and its axial relationship to the preceding positive element. These relationships are part of the published design logic rather than later interpretive tuning.

The data file introduces no synthetic cement layer, filter, sensor cover, flare-cutter plane, or dummy refracting surface. Every modeled refracting surface corresponds to the selected patent prescription, with the sole added plane being the explicitly inferred aperture-stop location inside the already published diaphragm chamber.

## Conditional Expressions

FR 1,045,076 page 3 works three geometric conditions numerically for the selected example. Recalculation from the final scaled data gives the same dimensionless results:

1. $|R_7|$ must lie between 20% and 60% of $|R_3|$. The permitted normalized range is 0.093144–0.279432 and the example uses 0.17794.
2. $|R_7|$ must lie between 25% and 75% of the axial R4-to-R7 distance. The permitted normalized range is 0.0864025–0.2592075 and the example again uses 0.17794.
3. The R5-to-R7 axial distance must lie between 20% and 60% of $|R_7|$. The permitted normalized range is 0.035588–0.106764 and the example uses 0.07319.

All three conditions are satisfied without altering any patent radius, refractive index, or spacing.

## Verification Summary

The final data file preserves the patent table literally under a uniform ×180 dimensional scale. Independent reduced-angle tracing and an ABCD calculation agree on an effective focal length of 182.2663 mm and a back focal distance of 71.4283 mm. These are design-model quantities from the rounded table, not the marketed values.

The patent itself prints $f=1$, relative aperture 1:5.4, useful aperture 0.185, and $p_0'=0.38247$. After ×180 scaling, those source headers correspond to 180 mm focal length, 33.3 mm effective-aperture diameter, and 68.8446 mm $p_0'$. The rounded prescription does not reproduce the source headers exactly: the traced EFL is about 1.259% longer and the traced BFD about 3.753% longer than those respective source values. No prescription value has been silently changed to force agreement.

The stop position is not dimensioned by the patent. The model places `STO` at 60% of the published R4-to-R5 diaphragm chamber measured from R4, following the relative placement shown in Fig. 3. Its physical radius is calibrated so that the modeled entrance-pupil diameter remains the source-scaled 33.3 mm. Combining that entrance pupil with the traced EFL gives the model's wide-open f-number of 5.47346; this value controls `nominalFno` and `apertureDesign`, while the production marketing field remains f/5.5.

The patent also publishes no clear-aperture semi-diameters. Those values in the data file are modeling inferences constrained by the axial marginal envelope, the Fig. 3 proportions, the documented 6×9 application, and ray containment. The current geometry passes the project's local edge-thickness, actual rim-slope, shared-gap-intrusion, and default-field containment checks. The front group is the modeled off-axis limiting region; the cemented rear member remains clear in the sampled default field.

The surface-by-surface Petzval sum, computed as $\phi/(n\,n')$, is −0.0001231495 mm⁻¹ for the scaled prescription. This is a paraxial design result from the final arrays, not a production measurement.

There are no aspherical surfaces, no zoom states, no internal focus states, and no omitted optical plate whose effect needs to be folded into the rear spacing. The image-space distance on surface 9 is the recomputed BFD of the final rounded-table model rather than the patent's printed $p_0'$.

## Sources / References

1. **FR 1,045,076**, *Téléobjectif photographique*, Voigtländer Aktiengesellschaft, filed 13 November 1951, published 24 November 1953. Example 1 and Figs. 1–3 are the prescription and layout sources used here.
2. **US 2,662,446 A**, *Photographic teleobjective having a composite positive front part axially spaced from a composite negative rear part*. Corresponding U.S. publication used only for wording and inventor-attribution context, not as a substitute prescription source.
3. **Voigtländer, Professional Lenses** (period catalog; scan dated May 15, 1965), listing Telomar f/5.5 telephoto lenses and the 180 mm f/5.5 Synchro-Compur version: https://www.pacificrimcamera.com/rl/01002/01002.pdf
4. **Linhof Super Technika 2¼×3¼ lens list**, including Technika Telomar 180 mm f/5.5 for the 6×9-class system: https://www.cameramanuals.org/prof_pdf/technika_super_2_1-4_3_1-4.pdf
5. **HOYA optical-glass cross-reference**: https://www.hoya-opticalworld.com/english/products/crossreference.html
6. **OHARA optical-glass families**, including S-BAM/S-NBM and S-TIH/S-NPH: https://oharacorp.com/glass-type/optical-glass/s-bam-s-nbm/ and https://oharacorp.com/glass-type/s-tih-s-nph/
7. **SCHOTT Advanced Optics glass catalog/search**: https://www.us.schott.com/shop/advanced-optics/en/search/
8. **HIKARI optical-glass catalog**: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
9. **CDGM optical-glass database**: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=12&url=database
## Integration audit — 2026-09-11 UTC

FR 1,045,076, Fig. 3, PDF p4 (600 dpi; crop 0.35,0.645,0.56,0.724). Retained SDs: the thin front lens is under-read by the automatic rim probe, and the rear elements differ by roughly 16–22%, below the strong-evidence threshold. L3 now resolves through E-BAF8 as a qualified barium-flint spectral proxy.

Surface validation and image-circle audits passed. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.
