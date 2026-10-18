## Patent Reference and Design Identification

**Patent:** US 2004/0136095 A1\
**Application Number:** US 10/743,824\
**Filed:** December 29, 2003, as officially corrected\
**Published:** July 15, 2004\
**Priority:** January 14, 2003, JP2003-005380\
**Inventor:** Takashi Suzuki\
**Assignee attribution:** Fuji Photo Optical Co., Ltd., from a secondary same-application assignment index; original instrument not retrieved\
**Title:** Retrofocus, wide-angle lens\
**Embodiment analyzed:** Example 1

**Restricted literal model:** The retained prescription has source nominal f/3.6, with Fig. 4 labeled f/3.59, but the current modeled clear apertures transmit only approximately f/3.8266 entrance-equivalent, or f/3.823 by the image-space sine definition. Exact source-target iris calibration fails and the runtime uses a paraxial fallback. Full-pupil transmission across the field remains unverified. A source-ray-supported refinement of one inferred aperture restores the source-field chief and 645-format corner, as quantified below. The source target fields are not a claim of verified physical f/3.6 transmission. These limitations concern the reconstruction of rounded source data and inferred apertures; they do not establish that the production Hasselblad lens is defective.

The selected source is the original US application publication, Example 1, Table 1 and Fig. 1. The optical prescription is unscaled. Supporting family documents clarify metadata and source precision; none replaces the selected publication or supplies altered optical values. [1]

Both the original A1 and later B2 covers print December 24, 2003. The USPTO Certificate of Correction appended to US6894847B2, signed August 19, 2008, changes title-page filing item (22) to December 29, 2003. The corrected date above and the original printed date are kept distinct. This certificate does not change the prescription. [2, PDF p13]

The grant cover names Fujinon Corporation as assignee. The Japanese family cover names 富士写真光機株式会社, rendered as Fuji Photo Optical Co., Ltd., as applicant. These are primary evidence for those respective roles. They do not substitute for the unretrieved original US assignment instrument 014849/0528, prove its timing or establish the exact corporate succession. [2, cover field 73; 3, cover field 71]

The correlation with the Hasselblad HC 3.5/35 is supported by several convergent observations:

1. The source and marketed lens both have eleven elements in ten air-separated groups.
2. The source computes to approximately 35.78 mm; Hasselblad specifies an actual focal length of 35.8 mm behind the 35 mm product label.
3. The source prints full field 88.7° and nominal f/3.6, close to the official product description of 89° and f/3.5.
4. Both use a retrofocus architecture and rear focusing. The source's G2B motion is consistent with that broad mechanism.
5. The patent's emphasis on chromatic correction is compatible with the manufacturer's low-dispersion description, although the source does not identify exact glass suppliers or a production bill of materials. [1, 4–5]

This is a probable patent-to-product association, not manufacturer confirmation of the exact production prescription. The datasheet's 0.50 m minimum focus distance and 1:9.6 maximum reproduction ratio are retail specifications, not published finite-focus numerical states of Example 1. The datasheet also gives an 82° view for a 37 × 49 mm crop, distinct from the official product page's 89° statement. [4–5]

## Optical Architecture

The lens is a two-group retrofocus wide angle: a net-negative front group G1, an aperture stop, and a net-positive rear group G2. G2 is divided into a stationary front part G2A and a rear focusing part G2B. All 21 refracting surfaces are spherical. The stop adds one optically neutral model surface; it is not a twelfth glass element. No source rear plate, dummy plane or asphere is omitted. [1, ¶0013–0020, ¶0040, ¶0047–0049]

| Group | Elements | Source faces | Calculated d-line focal length (mm) |
|---|---|---|---:|
| G1 | L1–L6 | 1–12 | -83.513211 |
| G2 | L7–L11 | 13–21 | +55.615041 |
| G2A | L7 | 13–14 | +99.555435 |
| G2B | L8–L11 | 15–21 | +100.960853 |

These are complete group powers in air, calculated from sequential refraction. The combined system EFL is 35.781520409 mm and its Gaussian back focal distance is 61.017982331 mm from S21. A physical last-vertex-to-image spacing of 61.0 mm is retained from the source. The resulting first-vertex-to-source-image track is 184.15 mm. The long back focus relative to focal length is characteristic of the specified retrofocus arrangement.

The front group begins with a positive meniscus and two negative menisci, followed by a thick positive meniscus L4 and a negative/positive pair. The source calls out the unusually thick front-group lens as helping distortion correction without requiring aspheric surfaces. The rear group combines a positive meniscus, a negative/positive cemented pair, a close air-spaced negative meniscus and a final weak positive meniscus. [1, ¶0017–0020, ¶0040]

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens values in air, computed from each element's two vertex radii, centre thickness and index. They are not isolated measures of in-situ aberration correction. At the cemented L8/L9 interface, the actual system uses direct glass-to-glass refraction. Production glass identities remain unconfirmed. The model uses catalog curves as qualified spectral proxies, preserving the source nd and νd values.

### L1 — Positive Meniscus

nd = 1.74330, νd = 49.2. Glass: NBF1 (HOYA spectral proxy). f = +135.0166 mm.

L1 is a positive meniscus convex toward the object. It precedes the two negative menisci of G1. The source identifies its shape and sign but also describes broader variants in which the first lens could be negative; only the positive Example 1 values are used here. No individual aberration contribution is inferred from the alternative embodiments. [1, ¶0017–0018]

### L2 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: J-SF03 (HIKARI spectral proxy). f = -45.3773 mm.

L2 is the first negative meniscus, convex toward the object. Together with L3 it supplies the pair of negative elements ahead of the thick L4 identified by the source. Its relatively high index and low Abbe number are retained as native d-line coordinates; a nearby catalog material is not sufficient to establish its supplier or short-wavelength dispersion. [1, ¶0017–0018]

### L3 — Negative Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA spectral proxy). f = -49.1368 mm.

L3 is the second negative meniscus preceding L4. It has the same source nd/νd pair as L8 but a different shape and optical position. Equal two-number coordinates do not prove the same production melt, nor do they justify assigning a catalog spectrum. The net-negative front group emerges from the complete sequence, including the positive elements. [1, ¶0017–0019]

### L4 — Positive Meniscus

nd = 1.48749, νd = 70.4. Glass: N-FK5 (SCHOTT spectral proxy). f = +259.4111 mm.

L4 is a weak positive meniscus with the largest centre thickness in G1, 20.95 mm. The source specifically associates a thick front-group element with easier distortion correction and an all-spherical construction. Its isolated weak power therefore does not imply that its geometrical thickness is unimportant to the design. [1, ¶0017, ¶0040]

The inferred boundary radius at its front face is limited by the preceding gap's sag-clearance rule. That modeled outline is distinct from the source's metrically published diameter at S17.

### L5 — Negative Meniscus

nd = 1.71300, νd = 53.9. Glass: S-LAL8 (OHARA spectral proxy). f = -68.7206 mm.

L5 is the negative meniscus after L4. Its rear face is S10, adjacent to the 0.18 mm axial gap before L6. This local pair is central to the literal native-aperture limitation: at the source f/3.6 marginal-ray height, the two spherical sag profiles leave no forward physical S11 branch. This is a specific rounded-geometry observation, not a general conclusion about the production lens. [1, ¶0019; Table 1]

### L6 — Positive Meniscus

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA spectral proxy). f = +44.3926 mm.

L6 is the positive meniscus at the rear of G1 and has the group's second-largest centre thickness, 17.17 mm. It precedes the stop. The source identifies its positive sign and object-side convex shape. The model retains its front radius and spacing exactly; a geometry-compatible optimized prescription is not substituted for the literal source. [1, ¶0017, ¶0019]

### L7 — Positive Meniscus

nd = 1.51742, νd = 52.2. Glass: J-KF6 (HIKARI spectral proxy). f = +99.5554 mm.

L7 is a positive meniscus convex toward the image and constitutes G2A. In the published rear-focus arrangement it is stationary while G2B moves. This division separates the front part of the positive rear group from the four-element focusing assembly, reducing the moving optical unit relative to translating all of G2. [1, ¶0020, ¶0045, ¶0047]

### L8 — Negative Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA spectral proxy). f = -71.4282 mm.

L8 is the negative member of the cemented L8/L9 pair. Its Abbe number 37.3 is paired with L9's 81.5, giving a difference of 44.2. The patent's conditions explicitly use that contrast to support axial-colour and lateral-colour correction. Those source objectives do not determine a supplier or a measured secondary spectrum. [1, ¶0021–0026, ¶0041]

### L9 — Biconvex Positive

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA spectral proxy). f = +27.8987 mm.

L9 is the positive biconvex member of the cemented pair and uses the highest Abbe number in the source. Its rear surface S17 has the explicitly published effective diameter φ17 = 32.364 mm; the model preserves the corresponding 16.182 mm semi-diameter exactly. This is a surface effective diameter, not a published stop diameter. [1, ¶0028–0029; Table 1]

The combined cemented pair has calculated focal length +43.430509 mm in air. The patent links its material contrast and the following air-space geometry with chromatic control; the analysis does not treat the isolated L9 power as a quantitative chromatic correction result.

### L10 — Negative Meniscus

nd = 1.84666, νd = 23.9. Glass: S-NPH53 (OHARA spectral proxy). f = -59.7452 mm.

L10 is a negative meniscus with its concave side facing the object. It follows L9 across the small D17 = 0.07 mm air space. Source conditions couple its front radius R18 to L9's rear radius R17 and constrain the gap relative to focal length. The patent explicitly describes a high-order chromatic contribution from that air space and the need to balance it against coma. [1, ¶0020, ¶0030–0038, ¶0042–0044]

The source Abbe number is 23.9, distinct from L2's 23.8 despite their equal index 1.84666. The difference is preserved.

### L11 — Positive Meniscus

nd = 1.48749, νd = 70.4. Glass: N-FK5 (SCHOTT spectral proxy). f = +314.7845 mm.

L11 is the weak positive final meniscus, with its concave side facing the object. It completes G2B and moves with that rear focusing group in the described mechanism. Its nd/νd coordinates equal those of L4, but no common supplier or exact dispersion curve is inferred. The source gives no separate field-flattening or chromatic-performance number for this element. [1, ¶0020, ¶0047]

## Glass Identification and Selection

The source publishes d-line indices and Abbe numbers, but no supplier codes, measured C/F/g indices or partial-dispersion ratios. Each element now uses a coordinate-compatible curve from the existing glass catalog. These are spectral proxies for simulation; they do not identify the historical supplier, melt or production glass. Other compatible catalog rows exist.

| Element | Native nd | Native νd | Spectral proxy |
|---|---:|---:|---|
| L1 | 1.74330 | 49.2 | NBF1 (HOYA spectral proxy) |
| L2 | 1.84666 | 23.8 | J-SF03 (HIKARI spectral proxy) |
| L3 | 1.83400 | 37.3 | NBFD10 (HOYA spectral proxy) |
| L4 | 1.48749 | 70.4 | N-FK5 (SCHOTT spectral proxy) |
| L5 | 1.71300 | 53.9 | S-LAL8 (OHARA spectral proxy) |
| L6 | 1.80518 | 25.4 | S-TIH6 (OHARA spectral proxy) |
| L7 | 1.51742 | 52.2 | J-KF6 (HIKARI spectral proxy) |
| L8 | 1.83400 | 37.3 | NBFD10 (HOYA spectral proxy) |
| L9 | 1.49700 | 81.5 | S-FPL51 (OHARA spectral proxy) |
| L10 | 1.84666 | 23.9 | S-NPH53 (OHARA spectral proxy) |
| L11 | 1.48749 | 70.4 | N-FK5 (SCHOTT spectral proxy) |

The largest catalog-reference residual is about 0.0000052 in index and 0.046 in Abbe number. All eleven elements resolve to trusted catalog dispersion curves under the unchanged compatibility guard. No measured spectral indices or patent partial-dispersion values are invented. The source indices remain the reference values for the monochromatic prescription.

L9's low-dispersion classification is inferred from the S-FPL51 proxy. The patent discusses anomalous-dispersion glass in this position, but supplies no measured secondary spectrum. The inferred badge therefore does not establish historical anomalous dispersion or APO performance. [1, ¶0041–0044]

## Focus Mechanism

The design uses rear focusing by translating G2B, comprising L8–L11, while G2A/L7 remains stationary. The source says that this split reduces focusing torque relative to moving the whole second group and is intended to improve close-focus performance. Figure 1 and ¶0015 identify the moving group; ¶0045 and ¶0047 explain the arrangement. [1]

Only the infinity prescription is numerically disclosed. No close-focus spacing, travel magnitude or finite-conjugate state is supplied. The model therefore remains at infinity, with no simulated internal focus travel. The marketed 0.50 m MFD and 1:9.6 reproduction ratio do not determine a unique internal focus law. [5]

## Chromatic Strategy and Conditional Expressions

The distinctive source strategy combines the L8/L9 dispersion contrast with the effective diameter of S17, the near equality of R18 and R17, and a small air gap D17. Conditions (1)–(2) primarily address axial colour and lateral colour through middle fields. Conditions (3)–(4) control the high-field g-line contribution of the rear air space; the patent warns that excessive contribution makes coma correction difficult. Conditions (5)–(8) are tighter preferred bounds, and (9)–(10) constrain the small gap. [1, ¶0021–0044]

All ten stated strict inequalities pass for the source prescription. The table uses computed final-model EFL in D17/f, while retaining the separately printed source comparison.

| Condition | Quantity | Computed | Strict bounds |
|---:|---|---:|---|
| 1 | νB − νA | 44.200000000 | > 25 |
| 2 | νB | 81.500000000 | > 65 |
| 3 | abs(φ17/R17) | 1.523011765 | 1.38 < value < 1.65 |
| 4 | R18/R17 | 1.019200000 | 1 < value < 1.08 |
| 5 | νB − νA | 44.200000000 | > 35 |
| 6 | νB | 81.500000000 | > 80 |
| 7 | abs(φ17/R17) | 1.523011765 | 1.47 < value < 1.58 |
| 8 | R18/R17 | 1.019200000 | 1.01 < value < 1.03 |
| 9 | D17/f | 0.001956317 | 0 < value < 0.01 |
| 10 | D17/f | 0.001956317 | 0 < value < 0.003 |

The effective diameter φ17 remains a diameter in the condition ratio. Treating 32.364 mm as a radius would double that ratio and violate both the source interpretation and the modeled aperture. The 0.07 mm gap after S17 is distinct from the 0.18 mm gap after S10 responsible for the literal native-aperture conflict.

## Restricted Aperture and Literal Geometry

The source does not metrically specify the stop's position within the 8.15 mm gap D12 or its diameter. Figure 1 supports the ordering. The model splits D12 into 3.15 mm before STO and 5.00 mm after it, explicitly as an inference. The runtime's resulting iris radius is 9.574055511 mm, but the exact real-trace calibration at source f/3.6 is nonfinite; this radius is obtained through the runtime's paraxial fallback. Target agreement in the runtime FOPEN value does not verify native full-aperture transmission.

Only S17's effective diameter is metrically source-backed. Other modeled semi-diameters are inferred from the source outline and geometry. Current S10/S11 share an 8.8 mm radius. At that aperture the literal model transmits an on-axis entrance radius of 4.675353346 mm. Its EFL/entrance-diameter equivalent is f/3.826611355; its image-space sine f-number is f/3.822960921. Both are materially narrower than the source target. The retained data labels “Design f/3.6” and nominal f-number 3.6 identify the source target and calibration parameter, not a verified physical aperture.

An analytic spherical-ray calculation using the actual final radii, indices and gaps explains the deeper source-target failure even when semi-diameter clipping is disabled. At the source f/3.6 entrance radius, S10 is reached at y = 9.379608469 mm. The physical sag branch of S11 lies behind that hit along the outgoing ray, so forward traversal fails. The same-height sag intrusion is 0.184683310 mm against the printed 0.18 mm gap: a physical excess of 0.004683310 mm. The unchanged 0.90 gap policy allows 0.162 mm intrusion, which is a separate, more conservative model clearance bound.

The largest diagnostic shared S10/S11 radius satisfying the 0.90 policy is approximately 8.826210442 mm. It yields an entrance-equivalent f-number of about 3.815679472, still narrower than f/3.6; it is not adopted in the data. Enlarging to 9 mm fails that geometry check. No published diameter was changed, and no inferred diameter was adjusted to manufacture native-aperture success.

Table 1 prints FNO 3.6; the corresponding Fig. 4 prints 3.59. This is consistent with their displayed rounding, not evidence of an alternate iris convention that resolves the transmission discrepancy. A separate joint within-rounding diagnostic with D10 = 0.18499 mm demonstrates a possible source-compatible f/3.6 axial path with aperture checks disabled. It does not establish the unknown unrounded production design, does not make the current aperture envelopes pass, and is not adopted. The reported search for the tighter figure target was inconclusive, not a proof of impossibility.

The inspected US grant and official Japanese family publication retain the same Example 1 values and displayed precision, including D10 = 0.18 mm and nominal 3.6. They supply no corrected optical value that resolves this limitation. The German counterpart remains unexamined. A small conflict in the rounded literal reconstruction is not a finding that the patent's underlying design or production lens is physically defective. [2–3]

## Field Coverage and Runtime Behaviour

The patent Table 1 full field is 88.7°, or a 44.35° half-field. Figure 4 uses a 44.3° half-angle label. A bounded analytic sphere/Snell solve aims a ray through the explicitly modeled STO at the unchanged inferred stop position. At source 44.35°, its first-vertex-plane launch height is 35.525851299 mm, stop residual is approximately 1.4 × 10⁻¹⁴ mm, and image radius is 34.522028376 mm. The source-backed S17 radius is respected. Only the earlier inferred S3 radius of 19 mm clipped that ray, whose S3 hit height is 21.260273043 mm.

A separate inverse-height solve reaches the declared 645-format corner radius 34.85 mm at 44.591673419°, requiring S3 height 21.413371790 mm. This corner angle is a calculated format diagnostic, slightly beyond the source table's specified field; it is not a replacement for the published angle. Every other current modeled aperture, including the immutable 16.182 mm S17 radius, contains that chief.

The corrected inferred S3 semi-diameter is therefore 21.5 mm. It has 0.404552% radial headroom beyond the format chief. This is distinct from the axial aperture-sizing guidance: the nominal-axis S3 footprint is 4.680937385 mm, giving 359.309712% radial clearance at S3. That nominal ray later fails at S11; its local S3 footprint is not evidence of full native-aperture transmission. The actually transmitted marginal ray gives still more axial clearance. No claim of an 8% margin around every off-axis chief is made.

Figure 1's schematic outline supports a substantially taller L2 envelope than S17, but it is not used as metric proof of 21.5 mm. The explicit required rays govern this inferred boundary. S3's actual rim slope is 25.125821°, the element's minimum sampled thickness remains 2.44 mm, and its front/rear semi-diameter ratio is 1.131579. The preceding gap intrusion is zero; the following shared-band intrusion is 5.987496 mm against the unchanged 6.039 mm policy allowance. Actual build and render checks pass with zero hidden trim. No radius, gap, index, source φ17, stop, iris, nominal f-number or 0.90 policy was changed.

The final model reaches the source field and the 645-format corner with a physically transmitted chief ray. The source angle remains 44.35°; the format corner is reached near 44.59°. All six default axial rays and five default off-axis rays transmit at infinity. Full-pupil edge-field diagnostics retain failures; a continued ghost ray is not transmission.

The inferred front-element rims were reduced from 31 to 30 mm, and L4's rear rim from 15 to 13.9 mm, following the square optical edges in Fig. 1. The earlier S3 refinement to 21.5 mm remains necessary for corner-chief clearance. S17's published 16.182 mm radius stays unchanged. The final section passes surface validation and render checks with zero hidden material trim. These refinements preserve the narrower axial aperture qualification above.

## Verification Summary

The final spherical prescription is loaded directly from the data file. Independent matrix multiplication and sequential reduced-angle basis rays agree at first order. Calculated EFL 35.781520409 mm differs from printed 35.76 mm by +0.021520409 mm; the original 0.015 mm engineering comparison remains a raw FAIL. A separate within-last-digit source witness shows that table rounding can account for the EFL discrepancy, without changing the retained prescription. This is distinct from the native-aperture conflict and its separate diagnostic witness.

The calculated Gaussian BFD is 61.017982331 mm, compared with the retained 61.0 mm physical source image distance. The surface-by-surface Petzval sum is +0.002149148 mm⁻¹. The latter is a first-order curvature quantity, not a prediction of the complete sagittal/tangential field performance shown in the source plots. No measured spectral line data are available to reproduce those chromatic plots faithfully.

The source-backed S17 semi-diameter remains 16.182 mm, all source radii/media/spacings are preserved, and all eleven elements and the single cemented pair are retained. The outer data comment clarifies the failed exact iris calibration and narrower actual model aperture. The changes to inferred rims and catalog spectral proxies preserve every source radius, spacing, index, Abbe number and the published S17 effective diameter.

The model remains infinity-only. Finite-focus performance, physical iris law, full-pupil native-aperture fidelity and production conformance are not established. Passing the source and format chiefs does not establish full-pupil illumination over the complete 645 frame. Validation is recorded in the companion audit; the native-aperture limitation above remains unresolved.

## Sources and References

1. **US 2004/0136095 A1**, Takashi Suzuki, published July 15, 2004, Example 1. Retained original file `US20040136095A1.pdf`; PDF p1 cover, p2 Fig. 1, p5 Fig. 4, pp6–8 definitions/conditions and Table 1. [Public record](https://patents.google.com/patent/US20040136095A1/en).
2. **US 6,894,847 B2**, same application US10/743,824, granted May 17, 2005. Complete included file `US6894847B2.pdf`; p1 grant-assignee and application linkage, p8 Table 1, p13 Certificate of Correction signed August 19, 2008. [Official-issued facsimile on the Google patent-image mirror](https://patentimages.storage.googleapis.com/88/fb/c3/e293d5b166df30/US6894847.pdf); no claim of a fresh USPTO-hosted download.
3. **JP2004-219610A**, application JP2003-005380, published August 5, 2004. Complete official J-PlatPat file `JP2004219610A_official.pdf`; p1 applicant, p9 Fig. 4 Example 1 prescription, p10 Fig. 8 aberrations. [Official fixed-address record](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2003-005380/10/en).
4. [Hasselblad official HC 3.5/35 product page](https://www.hasselblad.com/h-system/lenses/hc3535mm/), consulted October 3, 2026: product field, retrofocus and rear-focus description.
5. [Hasselblad HC 3.5/35 datasheet, HC35 V3 UK](https://www.direct-digital.com/sites/default/files/docs-en/LENBLAH135F35%20-%2001.pdf), manufacturer-authored document hosted by Direct Digital, p1; consulted October 3, 2026. Native focal length, construction, MFD, reproduction ratio and stated crop-angle context. The official product-page PDF endpoint was unavailable in the recorded retrieval.
