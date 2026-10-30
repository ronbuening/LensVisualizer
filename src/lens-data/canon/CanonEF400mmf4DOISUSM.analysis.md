## Patent Reference and Design Identification

**Patent:** US 2002/0015231 A1\
**Application Number:** 09/799,058\
**Priority:** March 8, 2000 (JP 2000-063398)\
**Filed:** March 6, 2001\
**Published:** February 7, 2002\
**Inventor:** Hideki Ogawa\
**Assignee:** Not stated on the selected A1 publication\
**Title:** _Optical System Having a Diffractive Optical Element, and Optical Apparatus_

This analysis describes the `CANON EF 400mm f/4 DO IS USM` prescription represented by the final data file. US 2002/0015231 A1, Numerical Example 1, is treated here as the fixed production correlation. Canon does not identify this patent or numerical example in the cited product material, so the correlation is not presented as manufacturer confirmation.

Several independent facts make the selected example a close production correlate. Numerical Example 1 is a telephoto photographic system with a published focal length of 392.00 mm, F-number of 4.12, and full field of 6.32°. The paraxial f·tan(3.16°) value is about 21.643 mm, essentially the half-diagonal of the 36 × 24 mm format; the fresh exact chief-ray result is separately qualified below. Canon marketed the production lens as a 400 mm f/4 EF lens with a 6°10′ diagonal angle of view, and Canon's product block diagram identifies both a DO lens and a fluorite lens. The patent priority and filing dates also precede the lens's December 2001 market introduction by a short interval. These are convergent identification criteria rather than a literal claim that the production prescription is identical in every construction detail. [1][4][5]

The marketed production construction is 17 elements in 13 groups. The LensVisualizer model contains 15 refractive elements in 11 active air-separated groups because the patent's terminal plane-parallel plate is not a lens element (it is drawn as a plane-parallel plate element, outside that count) and the patent's thin DOE microstructure is represented as surface phase data rather than ordinary macro lens elements. No one-for-one identity between the marketed 17/13 count and the patent macro table is asserted. [4][5]

The original A1 table genuinely prints **r17 = +87.040 mm, r19 = +59.203 mm and r22 = +131.344 mm**.
The existing model instead retains **−87.040/−59.203/+131.844 mm**. Earlier notes attributed two substitutions to
US 6,473,232 B2 and US 2003/0053212 A1, but those local originals are absent and are not freshly checked in this
review. The r19 sign difference was not disclosed in those older notes. Structured unresolved source errata now
identify all three pairs. No new fit or radius change is made; this is a qualified nonliteral reconstruction, not a
freshly source-proven corrected prescription. The family links below are historical leads only. [1][2][3]

No prescription scaling is applied. The production marketing focal length remains 400 mm, while the printed catalog design target is 392.00 mm and the independently computed model EFL is 392.025203770699 mm. Likewise, the production aperture designation is f/4, while the modeled design F-number and `nominalFno` are 4.12.

The patent ends Numerical Example 1 with a 2.20 mm plane-parallel `nd = 1.51633` plate. Canon specifies a 52 mm drop-in filter for the production lens, but the patent does not identify its terminal plate as that filter. The model therefore treats the plate as an image-side plate rather than asserting a product-part identity. It is drawn in the data file as a plane-parallel plate element (2.20 mm, `nd = 1.51633`, `νd = 64.1`), so every analysis traces it; its semi-diameter is a ray-trace estimate because the patent lists none. Surface 27 keeps the printed `d27 = 0.72 mm` to the plate. The table ends at `r29 = ∞` without a d29 or back focus, so the 63.3369041 mm plate-to-image air is the only derived rear distance; it places the image at the paraxial focus, reproducing the 65.507775640 mm air-equivalent spacing from surface 27 to the image plane.

## Optical Architecture

The patent explicitly describes the first embodiment as a telephoto-type photographic system (¶0033). The final model likewise satisfies the project's telephoto criterion: the air-equivalent track is 255.587775640 mm and the verified EFL is 392.025203771 mm, giving `TL/EFL = 0.651967713` (the physical track through the image-side plate is 256.336904128 mm, `TL/EFL = 0.653878632`). Because the back focal distance is much shorter than the EFL, the design is not retrofocus.

The active macro prescription contains 15 modeled refractive elements in 11 air-separated groups. Three conventional groups are cemented pairs: `D2` (L8–L9), `D3` (L10–L11), and `D4` (L13–L14). L1–L2 form the front `DO1` macro pair, but they are not labeled as a conventional cemented doublet because the patent describes the first-embodiment DOE as an adjacently laminated grating with a thin air layer between grating strata (¶¶0068–0084). Those microstructure layers are intentionally collapsed into the surface-2 diffractive interaction. The aperture stop lies between L7 and D2 at the patent's r14 position.

The pre-stop section begins with the large positive `DO1` front pair and alternates positive and negative refractive power through L7. This front block collects the f/4.12 beam, carries the diffractive phase at the L1/L2 junction, and brings a narrowing bundle to the stop. The post-stop section is a compact relay and correction train built from three cemented pairs, one negative singlet, and a final positive element. Independent block calculations give a positive pre-stop block and a net-negative active post-stop block, consistent with a telephoto power distribution.

The principal architectural distinction is not a geometric asphere but the diffractive phase applied at surface 2. The patent's design objective is to combine refractive and diffractive chromatic behavior while keeping incidence on the grating favorable across the field (¶¶0006, 0038–0048). The final data therefore treats the DO prescription as an optical interaction on a spherical base surface, not as aspheric sag.

The semi-diameters are not patent-published dimensions. They are modeling estimates constrained by the f/4.12 pupil and ray envelope, the patent section drawing, Canon's 128 mm maximum barrel diameter, and geometry checks. The physical stop radius of 12.918099902 mm is likewise a computed calibration rather than a source dimension.

## Element-by-Element Analysis

The focal lengths below are the standalone refractive thick-lens focal lengths stored in the final data and independently reproduced from the authored surfaces. They describe each macro element by itself in air and exclude the surface-2 diffractive phase from the individual L1/L2 values. They must not be read as in-situ contributions. For the conventional cemented pairs, the net group behavior is a property of the complete pair; the front DO macro pair likewise requires its diffractive surface power to be included before it is interpreted as a group. Every group's behavior in the finished lens also depends on surrounding separations and neighboring powers.

### DO1 — L1 + L2 Front Diffractive Pair

**L1:** `nd = 1.56384`, `νd = 60.7`. Glass: `Unmatched; qualified d-line coordinate candidate S-BAL41`. Standalone `f = +316.285 mm`.\
**L2:** `nd = 1.51633`, `νd = 64.1`. Glass: `Unmatched; qualified d-line coordinate candidate S-BSL7`. Standalone `f = +372.424 mm`.

L1 is a positive meniscus and L2 a biconvex positive element. They form the `DO1` macro pair, with surface 2 serving simultaneously as the L1/L2 macro junction and the diffractive surface. The patent's thin laminated-grating media are not expanded into ordinary sequential elements, so this macro junction must not be interpreted as a literal cement layer. The pair is the principal front collector in the modeled architecture.

The phase term adds diffractive optical power without changing the spherical outline used for edge-thickness and rim-slope geometry. The patent describes the first-embodiment DOE as an adjacently laminated grating formed between lens parts with approximately equal curvature and separated by a thin air layer (¶¶0068–0084). The LensVisualizer macro model does not expand those thin resin/air layers into additional sequential elements; it represents their first-order imaging action through the radial phase polynomial attached to surface 2.

### L3 — Positive Meniscus

**L3:** `nd = 1.51823`, `νd = 58.9`. Glass: `Unmatched; qualified d-line coordinate candidate S-NSL3`. Standalone `f = +231.924 mm`.

L3 continues the positive convergence established by the front DO pair after the first substantial air gap. Its placement and moderate positive power make it part of the front collecting system rather than a rear relay element. The patent does not assign L3 a separate named aberration function, so more specific attribution would be interpretive rather than source fact.

### L4 — Biconcave Negative

**L4:** `nd = 1.74950`, `νd = 35.3`. Glass: `Unmatched; qualified d-line coordinate candidate S-LAM7`. Standalone `f = -141.841 mm`.

L4 introduces strong negative power after the first three positive elements. In the modeled architecture it counterbalances the front positive block and contributes to the telephoto compression. Its lower Abbe number also gives it substantially different dispersion from the neighboring crown-like positive elements, but the available data do not support assigning a specific partial-dispersion mechanism.

### L5 — Positive Meniscus

**L5:** `nd = 1.48749`, `νd = 70.2`. Glass: `Unmatched; qualified d-line coordinate candidate S-FSL5`. Standalone `f = +202.336 mm`.

L5 is a low-index, relatively high-Abbe positive meniscus following L4. It restores positive convergence while maintaining a materially different dispersion from the preceding negative element. In system terms it belongs to the alternating positive/negative pre-stop correction train.

### L6 — Negative Meniscus

**L6:** `nd = 1.67270`, `νd = 32.1`. Glass: `Unmatched; qualified d-line coordinate candidate S-TIM25`. Standalone `f = -328.990 mm`.

L6 is a comparatively weak negative meniscus in standalone power. Its lower `νd` contrasts with L5 and L7. The element contributes to the pre-stop balance of longitudinal power and chromatic correction, but the patent does not isolate a specific aberration term controlled by L6.

### L7 — Unresolved High-Abbe Negative Meniscus

**L7:** `nd = 1.43387`, `νd = 95.1`. Glass: `Unmatched; qualified d-line coordinate candidate CaF2 curve`. Standalone `f = -136.260 mm`.

L7 is a negative meniscus shortly before the stop. Its printed N/ν pair is numerically compatible with an optical
CaF2 coordinate under a d-line assumption; the bulk table does not explicitly identify that reference, supplier or
chemistry. It therefore remains Unmatched. Canon's separately reported production fluorite element does not identify
this patent member. No source APD designation, partial ratio or secondary-spectrum claim is added. [4]

### D2 — L8 + L9 Cemented Pair

**L8:** `nd = 1.80518`, `νd = 25.4`. Glass: `Unmatched; 805254 coordinate class only`. Standalone `f = -70.506 mm`.\
**L9:** `nd = 1.48749`, `νd = 70.2`. Glass: `Unmatched; qualified d-line coordinate candidate S-FSL5`. Standalone `f = +51.468 mm`.

L8 is a negative meniscus and L9 a biconvex positive element, cemented at surface 16. The large dispersion contrast is a conventional achromatizing resource, but the cemented pair must be interpreted as one optical group rather than by adding the standalone focal powers. Positioned immediately behind the stop, D2 begins the compact rear correction and relay section.

### D3 — L10 + L11 Cemented Pair

**L10:** `nd = 1.76182`, `νd = 26.5`. Glass: `Unmatched; 762265 coordinate class only`. Standalone `f = +42.350 mm`.\
**L11:** `nd = 1.80400`, `νd = 46.6`. Glass: `Unmatched; 804465/804466 coordinate class only`. Standalone `f = -25.859 mm`.

L10 is biconvex positive and L11 biconcave negative, cemented at surface 19. Their strong opposing standalone powers make D3 a locally powerful correction group. The group lies close to D2 and L12, so its in-situ effect cannot be reduced to either element's isolated power.

### L12 — Biconcave Negative

**L12:** `nd = 1.80400`, `νd = 46.6`. Glass: `Unmatched; 804465/804466 coordinate class only`. Standalone `f = -58.856 mm`.

L12 is a high-index biconcave negative singlet between D3 and D4. It adds negative power to the rear train and changes the vergence presented to the following cemented pair. The prescription does not identify it as a dedicated field flattener or focusing group, so those labels are not applied.

### D4 — L13 + L14 Cemented Pair

**L13:** `nd = 1.63980`, `νd = 34.5`. Glass: `Unmatched; qualified d-line coordinate candidate S-TIM27`. Standalone `f = +35.445 mm`.\
**L14:** `nd = 1.80400`, `νd = 46.6`. Glass: `Unmatched; 804465/804466 coordinate class only`. Standalone `f = -48.016 mm`.

L13 is biconvex positive and L14 a negative meniscus, cemented at surface 24. As with D2 and D3, its system role comes from the paired interface and neighboring air spaces, not from a scalar sum of isolated powers. It forms the last cemented correction group before the final positive element.

### L15 — Final Biconvex Positive

**L15:** `nd = 1.51633`, `νd = 64.1`. Glass: `Unmatched; qualified d-line coordinate candidate S-BSL7`. Standalone `f = +91.120 mm`.

L15 is the final active refractive element. Its positive power converts the rear-group ray bundle toward the image plane after the alternating powers of D2, D3, L12, and D4. It is followed by the printed 0.72 mm air gap to the image-side plane plate, which the data file draws as a plane-parallel plate element; the image plane lies 65.507775640 mm of air-equivalent distance behind surface 27.

### F — Image-side Source Plate

**N = 1.51633, ν = 64.1. Material: Unmatched; qualified d-line coordinate candidate S-BSL7.**

The source gives a 2.20 mm plane-parallel plate at r28–r29, preceded by 0.72 mm. It provides no d29/back-focus
value and no filter label. The existing 63.3369041 mm following gap is a derived model plane, not a printed row.
The drawn plate and its 18.5 mm radius are retained. Associating it with a production drop-in filter remains an
interpretation; neither source holder ownership nor historical supplier/chemistry is established.

## Glass Identification and Selection

The original bulk table and definition ¶0099 (PDF pages 16–17/printed 6–7) use bare ni/νi, without a d/e reference.
The sixteen source N/ν pairs below are confirmed, but **all sixteen media remain Unmatched** with an explicit
index-reference note and approximate default d-line tracing. No compatible coefficient curve is claimed under that
unknown reference. Numerical candidates are qualified hypotheses, not proof of historical supplier, melt or chemistry.
No per-lens C/F/g or dPgF value was present, and the source publishes none. No source APD material is identified.

| Medium | Printed N / ν  | Qualified d-line coordinate candidate |
| ------ | -------------- | ------------------------------------- |
| L1     | 1.56384 / 60.7 | S-BAL41                               |
| L2     | 1.51633 / 64.1 | S-BSL7                                |
| L3     | 1.51823 / 58.9 | S-NSL3                                |
| L4     | 1.74950 / 35.3 | S-LAM7                                |
| L5     | 1.48749 / 70.2 | S-FSL5                                |
| L6     | 1.67270 / 32.1 | S-TIM25                               |
| L7     | 1.43387 / 95.1 | CaF2 curve                            |
| L8     | 1.80518 / 25.4 | 805254 class                          |
| L9     | 1.48749 / 70.2 | S-FSL5                                |
| L10    | 1.76182 / 26.5 | 762265 class                          |
| L11    | 1.80400 / 46.6 | 804465/804466 class                   |
| L12    | 1.80400 / 46.6 | 804465/804466 class                   |
| L13    | 1.63980 / 34.5 | S-TIM27                               |
| L14    | 1.80400 / 46.6 | 804465/804466 class                   |
| L15    | 1.51633 / 64.1 | S-BSL7                                |
| F      | 1.51633 / 64.1 | S-BSL7                                |

The source also discloses two UV-curable grating materials locally labeled nd/vd in ¶0084: first layer
1.6685/19.7 at 5 µm, third layer 1.5240/50.8 at 7.5 µm, separated by a thin air layer. Figure 10 on PDF page 8
shows those two coatings attached to their respective substrates, with no disconnected resin wings. These are
microstructure evidence, distinct from the bare bulk-table reference. No C/F/g or partial dispersion is given for
either coating. The macro model represents their combined diffraction through the existing surface phase, without
fabricating extra smooth resin elements, UV chemical identity, a layer air spacing or diffraction-efficiency model.

## Focus Mechanism

Canon specifies an inner-focusing system driven by USM and a closest focusing distance of 3.5 m for the production lens. These are product facts. [5]

Numerical Example 1, however, contains only the infinity prescription. It does not publish a finite-focus spacing table, a moving-group identity, a focus cam law, or a close-focus magnification state. The final data therefore has no variable gaps and records the focus status as `NO_INTERNAL_RECONSTRUCTION`. No internal group motion or focus travel is inferred from the production MFD.

The 3.5 m value is retained as `closeFocusM` for product metadata and user-interface context. It does not imply that the displayed prescription has been solved to 3.5 m.

## Chromatic Correction Strategy

The patent's central premise is that refractive and diffractive surfaces have chromatic behavior of opposite sign, allowing the diffractive element to participate in achromatization (¶¶0004–0007, 0090–0093). Example 1 combines that mechanism with a broad refractive glass palette and one unresolved high-Abbe bulk coordinate.

In the model, the front DO pair places the phase correction where the axial beam is still large. The remaining pre-stop sequence alternates positive and negative members with substantial differences in `νd`, while the rear section uses three cemented pairs with strong index/dispersion contrasts. This arrangement is consistent with distributed chromatic balancing, but the available data are insufficient to decompose the final longitudinal and secondary spectrum by material without line-index or validated Sellmeier data for every element.

The qualitative diffractive achromatization principle remains distinct from quantitative material fidelity or an APO claim. Bulk reference identity, detailed spectral curves and microscopic diffraction efficiency are unresolved.

## Diffractive Optical Element

Surface 2 carries a `radial-polynomial` diffractive interaction. The authored optical-path polynomial is

`W(h) = -4.22716×10^-5 h^2 + 4.71244×10^-10 h^4`

with `h` and `W` in millimeters. These are the patent's Numerical Example 1 coefficients, corresponding to its `C1` and `C2` terms. The first-order paraxial diffractive power at the design order is positive.

The patent does not numerically state the reference wavelength `λ0` for Numerical Example 1. The data uses `referenceWavelengthNm: 587.6` as an explicitly disclosed d-line modeling inference, consistent with the pre-existing grating-pitch interpretation. The bulk table itself uses bare ni/νi, so it does not establish d-line reference identity. The wavelength is therefore not presented as a printed patent value.

Patent ¶0084 gives an illustrative first-embodiment laminated DOE structure consisting of two UV-curable-plastic grating layers separated by a thin air layer. It states `nd = 1.6685`, `νd = 19.7`, and 5 µm height for the first layer; `nd = 1.5240`, `νd = 50.8`, and 7.5 µm height for the third layer; and a minimum 156 µm pitch at the 155th zone. Those microstructure values are physical DOE-construction data, not additional macro refractive elements in the LensVisualizer prescription.

Example 1 has no geometric aspherical surface. The patent's generic asphere equation is therefore not instantiated in the final data: no surface contains an asphere record or an `A` suffix. The diffractive polynomial must not be interpreted as an aspheric sag polynomial.

## Conditional Expressions

The patent lists optional preferred conditions for the diffractive surface (¶¶0049–0067).

For condition (1), `0 < |D/R| < 5`, with a preferred upper limit of 3, the patent's Table 1 gives **0.026** for Numerical Example 1. Independent recomputation from the selected prescription gives **0.0256135**, so the example satisfies both the stated and preferred upper bounds.

Condition (2) is `C1·P < 0`, where `P` is the refractive power of the base surface carrying the grating. The patent's own Table 1 prints **+6.29847×10^-9** for Numerical Example 1. Independent recomputation gives **+6.28308×10^-9**. The sign is therefore positive, so Example 1 does not satisfy this optional preferred condition even though the patent's general discussion advocates it. This is an internal feature of the published worked example, not a reason to substitute another embodiment.

## Image Stabilization

The production EF 400mm f/4 DO IS USM includes optical Image Stabilizer hardware, as reflected in the product name and Canon documentation. [4][5]

The selected patent is directed to the diffractive optical system and does not publish a decentering IS group, stabilization travel, or an alternate prescription state for stabilization. The final data therefore contains no reconstructed IS motion. No element in the model is assigned an IS displacement on the basis of the product name alone.

## Verification Summary

Independent computation of the final TypeScript prescription gives the numerical checks below. They are model results, not manufacturer specifications.

| Quantity                                             |                        Verified model result |
| ---------------------------------------------------- | -------------------------------------------: |
| Effective focal length                               |                             392.025203771 mm |
| Design F-number                                      |                                  4.120000000 |
| Entrance pupil diameter                              |                              95.151748488 mm |
| Air-equivalent track                                 | 255.587775640 mm (physical 256.336904128 mm) |
| `TL/EFL`                                             |                                  0.651967713 |
| Image height at 3.16°                                |                              21.643081563 mm |
| Petzval sum, including DOE as separate surface power |                      2.529755554×10^-5 mm^-1 |

### Native original shape and state review — 2026-10-30

The fresh review uses Figure 1 (PDF page 2/sheet 1 of 9), Numerical Example 1 ¶0104 (page 17/printed 7),
Figure 10/11 (page 8), and the layer/definition paragraphs on pages 16–17. Native page images are 2320 × 3408
at 300 dpi. The section was rotated without resampling and read in native crops. Earlier 600 dpi views and the
current 3× radius-label aid are upsampling, not new source detail. Local drawing scales vary around 7–8 native
px/mm; small two-pixel readings contribute roughly ±0.25 mm, while schematic distortion dominates absolute blank
heights at approximately ±5–10%. Rays, leaders, axis and stop mechanics are excluded.

The L6 rear concave face visibly ends below its outer shoulder. Its native cap/outer half-height ratio is about
0.90 ±0.02 before schematic uncertainty. S11 becomes a 28.1 mm clear cap with `rimExtensionSd = 31 mm`, retaining
the original outer size; the ratio is 0.906. The exact wide-open axial ray requires only 26.224735 mm there, and
sampled off-axis survivor counts are unchanged by this source-resolved shoulder. No land is added at bonded S2,
S16, S19 or S24, no detached resin geometry is invented, and no inferred flat cut is authored.

S6/S7 become 36.75 mm from 36.6 mm to clear the exact 36.742904 mm axial boundary. A 36.8 mm trial fails the
unchanged S5–S6 gap guard: about 2.80 mm intrusion against 2.799 mm allowed over 3.110 mm. The smaller adopted
raise passes without tolerance relaxation. All remaining inferred clear radii, source coefficients, DOE phase,
stop coordinate and adopted optical radii/gaps are retained. The first DO pair remains pupil-critical and schematic;
no new equal-height block or source-dimension claim is made.

Actual SVG comparison confirms the S11 shoulder and source outline class. Sixteen element paths are finite, closed
and connected with zero hidden renderer trim. All 21 sampled focus-slider positions have identical geometry and image
plane: there is one unique infinity optical state, with no solved finite or IS state. At full iris, all 147 launches
are aimed; axial/0.6-format/corner survivors are **49/38/26** of 49, with all three chiefs clear. Narrow surface,
image-circle, strict aperture and runtime-format-corner checks pass. There is no inferred cut to exempt. The source
3.16° chief reaches 21.825210 mm, 100.9% of the 135-format radius; the separately solved runtime corner clears.
The largest sampled passing ray at the source plate reaches 16.916810 mm against its retained 18.5 mm cap.

The adopted model's paraxial entrance-pupil marginal launch gives about −0.554° incidence at S2, consistent with
Figure 11's rounded −0.55°. This checks front-system/pupil correlation, not the rear-radius replacements. DOE λ0
remains an explicit 587.6 nm inference; no diffraction-efficiency or microscopic scattering accuracy is asserted.

### Unresolved nonliteral prescription and retained plane

| Radius | Original A1 (mm) | Retained model (mm) |
| ------ | ---------------: | ------------------: |
| r17    |          +87.040 |             −87.040 |
| r19    |          +59.203 |             −59.203 |
| r22    |         +131.344 |            +131.844 |

The fully literal block gives EFL 1088.527323 mm rather than the printed 392.00 mm, including the unchanged DOE
first-order power. Substituting literal r19 alone gives 362.836584 mm; substituting literal r22 alone gives
392.515701 mm; retaining all adopted values gives 392.025204 mm. These trials show a source/model contradiction,
not unique proof of each exact replacement. The fully literal block shifts Gaussian focus by −200.685974 mm from
the retained plane, while literal-r19-only gives +8.002706 mm. The source prints no final plane gap, so these are
model optical consequences, not discrepancies against a dimensioned original plane. Family originals are missing;
the correction-provenance follow-up remains unresolved. No new fit is made and no original value is silently replaced.

The old derived 63.3369041 mm plate-to-image gap retains the adopted Gaussian plane to rounding. The physical track
is 256.3369041 mm; the air-equivalent track is 255.5877756 mm. Source fidelity, sampled runtime results and the
production correlation are separate conclusions. The requested fresh original shape/glass inspection is complete,
with exact radius-replacement provenance, bulk reference identity, finite focus, IS and microscopic efficiency remaining
explicit limitations rather than unsupported claims of full physical fidelity.

## Sources and References

1. Hideki Ogawa, **US 2002/0015231 A1**, _Optical System Having a Diffractive Optical Element, and Optical Apparatus_, published February 7, 2002. https://patents.google.com/patent/US20020015231A1/en
2. Hideki Ogawa, **US 6,473,232 B2**, same application grant, published October 29, 2002. Historical correction lead; original not available for this fresh review. https://patents.google.com/patent/US6473232B2/en
3. Hideki Ogawa, **US 2003/0053212 A1**, direct divisional publication cited by prior work for r22; original not available for this fresh review, so exact replacement provenance remains unresolved. https://patents.google.com/patent/US20030053212A1/en
4. Canon Camera Museum, **EF400mm f/4 DO IS USM** product record and block diagram. https://global.canon/en/c-museum/product/ef366.html
5. Canon U.S.A., **EF 400mm f/4 DO IS USM** support and technical specifications. https://www.usa.canon.com/support/p/ef-400mm-f-4-do-is-usm
6. HOYA, **Optical Glass Cross Reference**, used for six-vendor coordinate comparison. https://www.hoya-opticalworld.com/english/products/crossreference.html
7. OHARA, **Optical Glass Pocket Catalog**, used for coordinate-compatible class checks. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
8. Hellma Materials, **Calcium Fluoride (CaF2)** optical-material data, used to check the fluorite-class coordinate. https://www.hellma-materials.com/en/optical-materials/crystals-for-optics/calcium-fluoride/

## 2026-10-30 — Source-Stated Catalog Design Metadata

This metadata-only follow-up preserves the original review date and source inspection. The catalog design focal value is 392.0 mm, taken directly from Numerical Example1, paragraph0104, PDF p17 / printed7: source focal length392.00mm. The prior computed model EFL value 392.0252037706986 mm remains a calculated result, separately qualified in this analysis; it is not a printed source target.

All R/d, media, spectral values, stops, apertures, gaps, focus/zoom controls, source-errata dispositions and retained limitations are unchanged. This correction adds no fresh shape/glass review and makes no claim to resolve an authored reconstruction or production correlation.
