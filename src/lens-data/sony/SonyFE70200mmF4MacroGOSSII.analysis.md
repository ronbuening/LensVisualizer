## Patent Reference and Design Identification

**Patent:** WO 2024/247472 A1  
**Application Number:** PCT/JP2024/013544  
**Priority:** JP2023-087079, 26 May 2023  
**Filed:** 2 April 2024  
**Published:** 5 December 2024  
**Inventors:** Naoki Itoku; Takumu Yamada  
**Applicant:** Sony Group Corporation  
**Title:** Zoom Lens and Image Capture Device  
**Embodiment analyzed:** Example 2

The prescription implemented here is Example 2 of WO 2024/247472 A1, specifically the numerical data in Tables 6–10 and the optical layout in Fig. 14. The patent describes Example 2 as a seven-lens-group zoom system, G1 through G7, with the aperture stop associated with the central portion of the system and with G6 identified as the movable focus group in the selected numerical example (WO 2024/247472 A1, ¶¶0090–0100, Tables 6–10, Fig. 14).

The identification with the production Sony FE 70–200mm F4 Macro G OSS II is a research correlation rather than a manufacturer-confirmed patent attribution. Several independent facts converge:

1. The normalized Example-2 prescription contains 19 physical glass elements in 13 air-separated physical components. Sony specifies the production SEL70200G2 as 19 elements in 13 groups. The patent itself organizes those elements into seven functional zoom groups G1–G7; the two counting systems describe different levels of grouping.
2. The verified Gaussian focal lengths from the final data are 72.105394 mm, 119.678958 mm, and 192.992121 mm at the three published infinity states, closely bracketing the marketed 70–200 mm range. The corresponding patent table values are 72.15 mm, 119.70 mm, and 192.89 mm (Table 7).
3. Table 7 gives f-numbers 4.12, 4.36, and 4.14. These place the numerical example in the same f/4 class as the marketed lens, although the patent example is not exactly constant at f/4.
4. The patent gives an image height of 21.63 mm and an image-plane effective diameter of 43.29 mm, consistent with a 35 mm full-frame image circle. Sony identifies the production lens as a full-frame E-mount lens.
5. Sony Group Corporation is the applicant, and the 26 May 2023 priority date closely precedes Sony's 12 July 2023 announcement of the SEL70200G2.
6. Fig. 14 shows the same 19-element, seven-functional-group architecture represented by the selected numerical tables. The final data preserves that grouping and the published G6 focus motion.

The correlation has important limits. The selected patent rows publish finite-focus states at 2.289 m, 3.709 m, and 5.814 m rather than the production lens's marketed 0.26–0.42 m minimum-focus range, and Sony does not identify WO 2024/247472 A1 or Example 2 as the production prescription. The modeled file therefore does not extrapolate the patent to the production 0.5× macro endpoint.

A source normalization is also required before the patent table becomes a physical sequential model. Table 6 contains a zero-thickness duplicate plane S2 at the same radius as S3. The patent prose describes L11 and L12 as cemented, so the final model omits inactive S2 and uses S3 as the direct L11→L12 cemented interface at R = 67.753 mm. The raw source record remains preserved in the dossier. No uniform dimensional scaling is applied.

## Optical Architecture

Example 2 is a seven-functional-group zoom lens with group powers, from object to image, of positive G1, negative G2, positive G3, weak negative G4, positive G5, negative G6, and weak negative G7. Recomputed focal lengths from the final parsed prescription are approximately +184.26, −37.97, +47.46, −270.34, +44.16, −53.27, and −381.91 mm respectively. These are group focal lengths, not sums of the standalone element focal lengths.

The physical prescription contains 19 elements but 13 air-separated components because six pairs are cemented. G1 contains a cemented pair plus one singlet; G2 contains two cemented pairs and one singlet; G3 is a cemented pair; G4 has two air-spaced singlets; G5 contains a cemented pair plus a two-asphere singlet; G6 is a cemented pair; and G7 has two air-spaced singlets, the rear one carrying two aspherical surfaces (Table 6; Fig. 14).

The zoom motion is not a simple monotonic translation of every group. With positions measured from the image plane, G2 remains at approximately −155.35 mm and G7 at approximately −54.99 mm throughout the three published infinity states. G1, G3, G4, G5, and G6 change axial position. Several variable gaps reverse trend over the range: D18 increases from Wide to Mid and then decreases toward Tele, and D27 likewise reverses. The data retains the three published zoom keyframes so those reversals are represented explicitly rather than forced into a two-point approximation.

The patent prose states that G3 and the G6/Unmax group move integrally during zooming, but the selected Table-8 spacings do not preserve their separation. Recomputed G3-to-G6 separations are 49.34 mm, 51.94 mm, and 44.90 mm at Wide, Mid, and Tele. The numerical table is executable and internally reproduces the published focal lengths, so the implemented model follows Table 8 while retaining the prose/table contradiction as a source discrepancy rather than silently reconciling it.

The verified total track divided by EFL is 2.3578, 1.6359, and 1.2615 at Wide, Mid, and Tele. Under this project's restricted use of the term, a design is called telephoto only when TL/EFL < 1; none of the three states meets that criterion. Likewise, BFD/EFL is 0.4344, 0.2617, and 0.1623, so no state meets the project's retrofocus criterion BFD > EFL. These are classification conventions for the modeled first-order system, not statements about Sony's product naming.

The final model uses half the Table 6 effective diameters at rear surfaces S31–S34, with inferred clearance margins elsewhere. The other authored semi-diameters were derived from exact meridional ray envelopes over all six published zoom/focus endpoints and dense samples of the defined piecewise-linear zoom/focus interpolation, then given at least 0.20 mm radial clearance and rounded upward to a 0.05 mm grid. They are therefore modeling quantities, not patent-published mechanical apertures.

The aperture stop is similarly modeled. The source φ15 = 25.23 mm is an effective diameter and does not reproduce the Table-7 f-numbers when treated as the physical iris diameter. The model instead calibrates a stop opening at each zoom state from the published/model f-number target. Those calibrated diameters are 22.2881 mm, 23.3627 mm, and 25.1819 mm at Wide, Mid, and Tele. Agreement with the f-number targets is a consequence of that calibration and is not independent evidence for an unpublished physical diaphragm diameter.

## Element-by-Element Analysis

The patent does not assign a complete element-by-element aberration budget, and the available source does not establish vendor glass identities for the Example-2 coordinates. The discussion below therefore limits element-level interpretation to verified shape, standalone power, cemented relationships, group placement, and published motion. A standalone element focal length is the power of that element in air; it must not be confused with the net power of a cemented component or with the behavior of the element in situ inside the full zoom system.

### L11 — Negative Meniscus, convex to object

nd = 1.75453, νd = 35.3. Glass: NBFD6 (coordinate-compatible spectral proxy; supplier unconfirmed). f = −314.824 mm.

L11 is the front member of the cemented D1 pair in positive group G1. Its standalone power is weakly negative. At the shared R = 67.753 mm cemented interface it passes directly into L12 in the normalized model; the zero-thickness source duplicate S2 is not modeled as an intervening air surface. The D1 pair as a whole is weakly positive, with a verified cemented focal length of about +446.71 mm.

### L12 — Positive Meniscus, convex to object

nd = 1.49845, νd = 81.6. Glass: FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed). f = +182.295 mm.

L12 is the positive partner of D1 and provides substantially more standalone positive power than L11's negative power. It shares its source coordinate with L13 but remains a distinct physical element. The unusually high νd is retained exactly as a patent coordinate; a coordinate-compatible catalog curve does not justify claiming a specific ED grade or anomalous partial-dispersion behavior.

### L13 — Positive Meniscus, convex to object

nd = 1.49845, νd = 81.6. Glass: FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed). f = +305.707 mm.

L13 is an air-spaced positive singlet behind D1. Together with the weakly positive D1 pair it yields the net positive G1 power of approximately +184.26 mm focal length. G1 moves substantially toward object space relative to the fixed image plane as the lens is zoomed from Wide to Tele.

### L21 — Positive Meniscus, concave to object

nd = 1.51978, νd = 52.1. Glass: S-NSL36 (coordinate-compatible spectral proxy; supplier unconfirmed). f = +65.591 mm.

L21 is the positive first member of cemented pair D2 within the strongly negative G2 group. Its positive standalone power is partly opposed by L22. The cemented D2 pair remains net positive, with a verified focal length of about +140.22 mm, so the negative sign of G2 arises from the complete five-element group rather than from D2 alone.

### L22 — Negative Meniscus, concave to object

nd = 1.96073, νd = 32.3. Glass: Unmatched (patent coordinate 961323; supplier unresolved). f = −126.051 mm.

L22 completes D2. It is a high-index, lower-Abbe coordinate in the patent table, but no vendor identity is assigned. In the full G2 sequence, D2 is followed by negative L23 and then cemented D3, producing the verified net G2 focal length of approximately −37.97 mm.

### L23 — Negative Meniscus, convex to object

nd = 1.76760, νd = 48.5. Glass: Unmatched (patent coordinate 768485; supplier unresolved). f = −74.827 mm.

L23 is an air-spaced negative singlet between D2 and D3. Its substantial negative standalone power contributes directly to G2's strong negative net power. Table 8 keeps G2 fixed relative to the image plane across the three published infinity zoom states.

### L24 — Biconcave Negative

nd = 1.73234, νd = 54.7. Glass: MP-TAC80-60 (coordinate-compatible spectral proxy; supplier unconfirmed). f = −23.397 mm.

L24 is the strongly negative first member of cemented pair D3. Its standalone focal length is the shortest-magnitude element focal length in G2. It is cemented to positive L25 at surface 13.

### L25 — Biconvex Positive

nd = 1.93024, νd = 24.0. Glass: Unmatched (patent coordinate 930240; supplier unresolved). f = +43.588 mm.

L25 opposes L24 within D3, but the pair remains net negative: the verified cemented D3 focal length is approximately −51.55 mm. D3 therefore reinforces, rather than cancels, the negative net power of G2.

### L31 — Biconvex Positive

nd = 1.76760, νd = 48.5. Glass: Unmatched (patent coordinate 768485; supplier unresolved). f = +30.484 mm.

L31 is the positive member of cemented pair D4 in G3. The aperture stop lies immediately before this pair in the normalized sequential model. L31 supplies the dominant positive standalone power of D4.

### L32 — Negative Meniscus, concave to object

nd = 1.91695, νd = 35.2. Glass: Unmatched (patent coordinate 917352; supplier unresolved). f = −85.665 mm.

L32 completes D4. Despite its negative standalone power, the cemented D4 pair is net positive, with a verified focal length of approximately +47.46 mm; this equals the computed G3 focal length because D4 constitutes the refracting content of G3.

### L41 — Negative Meniscus, concave to object

nd = 1.82017, νd = 46.6. Glass: Unmatched (patent coordinate 820466; supplier unresolved). f = −48.516 mm.

L41 is the negative front singlet of G4. It is separated by a 0.20 mm air gap from positive L42 in the Wide base state. The complete air-spaced pair has only weak net negative power compared with the neighboring G3 and G5 groups.

### L42 — Biconvex Positive

nd = 1.55206, νd = 75.5. Glass: FCD705 (coordinate-compatible spectral proxy; supplier unconfirmed). f = +60.485 mm.

L42 provides positive power against L41's negative power. The combination leaves G4 at approximately −270.34 mm focal length in the final-data calculation. Its high νd coordinate is preserved without converting it into a named low-dispersion catalog glass.

### L51 — Negative Meniscus, concave to object

nd = 2.00996, νd = 25.5. Glass: Unmatched (patent coordinate 010255; supplier unresolved). f = −34.644 mm.

L51 begins cemented pair D5 in G5 and has strong negative standalone power. Its refractive index is the highest literal coordinate in Example 2. The data treats that value as a patent coordinate only; no supplier or melt identity is inferred.

### L52 — Positive Meniscus, concave to object

nd = 1.59561, νd = 67.0. Glass: Unmatched (patent coordinate 596670; supplier unresolved). f = +67.020 mm.

L52 is the positive second member of D5. The pair remains net negative, with a verified cemented focal length of approximately −79.97 mm. G5 becomes strongly positive only after the addition of L53.

### L53 — Biconvex Positive, two aspherical surfaces

nd = 1.76821, νd = 49.1. Glass: M-TAF101 (coordinate-compatible spectral proxy; supplier unconfirmed). f = +32.412 mm.

L53 is a strong positive singlet whose front and rear surfaces, 26A and 27A, are both aspherical. Its standalone positive power more than offsets the negative D5 component so that the full G5 group has a verified focal length of approximately +44.16 mm. D27, the air gap immediately behind L53, participates in both zoom and the published focus translation of G6.

### L61 — Biconvex Positive

nd = 1.81643, νd = 22.8. Glass: Unmatched (patent coordinate 816228; supplier unresolved). f = +75.627 mm.

L61 is the positive member of cemented focus pair D6. The patent identifies the G6/Unmax group as the movable focus group in Example 2. L61's positive standalone power is more than offset by L62 in the cemented combination.

### L62 — Biconcave Negative

nd = 1.83945, νd = 42.7. Glass: Unmatched (patent coordinate 839427; supplier unresolved). f = −30.889 mm.

L62 completes D6. The cemented pair has a verified net focal length of approximately −53.27 mm, the same as G6. During each published finite-focus move, D27 increases while D30 decreases by the same amount, translating the intact cemented group without changing the sum of the adjacent gaps.

### L71 — Biconvex Positive

nd = 1.67717, νd = 38.3. Glass: ADF405 (coordinate-compatible spectral proxy; supplier unconfirmed). f = +76.819 mm.

L71 is the positive front singlet of the final functional group G7. Table 8 places G7 at a fixed axial station relative to the image plane throughout the three published infinity zoom states.

### L72 — Biconcave Negative, two aspherical surfaces

nd = 1.77373, νd = 49.4. Glass: M-TAF105 (coordinate-compatible spectral proxy; supplier unconfirmed). f = −48.399 mm.

L72 is the negative rear singlet and carries the two rear aspherical surfaces 33A and 34A. In combination with L71 it leaves G7 only weakly negative, approximately −381.91 mm focal length. Surface 34A is the final modeled refracting surface; the base rear spacing from that vertex to the image plane is 31.32 mm.

## Glass Identification and Selection

The Example-2 patent table supplies refractive index and Abbe-number coordinates but does not name glass suppliers or publish element-specific nC, nF, ng, or dPgF values. The patent states that the tabulated n values are d-line quantities (WO 2024/247472 A1, ¶0064). Several coordinates resemble public catalog e-line values more closely than d-line values, so the final data deliberately preserves the source coordinates without relabeling them to a vendor glass.

| Patent coordinate | nd | νd | Elements | Data-file disposition |
|---|---:|---:|---|---|
| 755353 | 1.75453 | 35.3 | L11 | NBFD6 spectral proxy; supplier unconfirmed |
| 498816 | 1.49845 | 81.6 | L12, L13 | Unmatched; supplier unresolved |
| 520521 | 1.51978 | 52.1 | L21 | S-NSL36 spectral proxy; supplier unconfirmed |
| 961323 | 1.96073 | 32.3 | L22 | Unmatched; supplier unresolved |
| 768485 | 1.76760 | 48.5 | L23, L31 | Unmatched; supplier unresolved |
| 732547 | 1.73234 | 54.7 | L24 | MP-TAC80-60 spectral proxy; supplier unconfirmed |
| 930240 | 1.93024 | 24.0 | L25 | Unmatched; supplier unresolved |
| 917352 | 1.91695 | 35.2 | L32 | Unmatched; supplier unresolved |
| 820466 | 1.82017 | 46.6 | L41 | Unmatched; supplier unresolved |
| 552755 | 1.55206 | 75.5 | L42 | FCD705 spectral proxy; supplier unconfirmed |
| 010255 | 2.00996 | 25.5 | L51 | Unmatched; supplier unresolved |
| 596670 | 1.59561 | 67.0 | L52 | S-FPM2 spectral proxy; supplier unconfirmed |
| 768491 | 1.76821 | 49.1 | L53 | M-TAF101 spectral proxy; supplier unconfirmed |
| 816228 | 1.81643 | 22.8 | L61 | Unmatched; supplier unresolved |
| 839427 | 1.83945 | 42.7 | L62 | Unmatched; supplier unresolved |
| 677383 | 1.67717 | 38.3 | L71 | ADF405 spectral proxy; supplier unconfirmed |
| 774494 | 1.77373 | 49.4 | L72 | M-TAF105 spectral proxy; supplier unconfirmed |

The wide spread in nd and νd is sufficient to show that the design uses materially different dispersion classes, but Abbe data alone does not establish anomalous partial dispersion or apochromatic behavior. No APO, Super ED, ED, fluorite-equivalent, or anomalous-partial-dispersion claim is therefore attached to an individual patent element. Sony's production literature separately states that the marketed lens contains ED and Super ED elements; the present evidence does not identify which Example-2 patent coordinates, if any, correspond to those production materials.

## Focus Mechanism

The focus status is PUBLISHED, not reconstructed. Table 8 gives one finite-focus state at each of the three zoom positions, and only D27 and D30 change between infinity and the corresponding finite row. Their sum is conserved at each zoom position, so the motion is a rigid axial translation of G6 rather than a change in the internal spacing of the L61/L62 cemented pair.

| Zoom state | Published finite photography distance | D27 infinity → finite | D30 infinity → finite | G6 imageward translation | Paraxial magnification |
|---|---:|---:|---:|---:|---:|
| Wide | 2.289 m | 5.29 → 5.84 mm | 13.76 → 13.21 mm | 0.55 mm | −0.03333× |
| Mid | 3.709 m | 8.33 → 9.09 mm | 25.37 → 24.61 mm | 0.76 mm | −0.03333× |
| Tele | 5.814 m | 2.80 → 3.90 mm | 33.52 → 32.42 mm | 1.10 mm | −0.03334× |

Finite-conjugate replay from the final parsed prescription requires image distances from the last modeled surface of 31.30895 mm, 31.27975 mm, and 31.29235 mm for Wide, Mid, and Tele. These remain within 0.041 mm of the published/base 31.32 mm rear spacing, consistent with the precision of the rounded patent inputs.

The file retains the published finite distances in `zoomCloseFocusM`: 2.289 m at Wide, 3.709 m at Mid, and 5.814 m at Tele. The visible focus endpoint follows the zoom station without extrapolating to production macro distances.

Sony specifies a substantially closer production minimum-focus range and 0.5× maximum magnification. Those marketed specifications are not used to extend the patent model. No continuous close-focus law and no production macro endpoint are reconstructed from Example 2.

## Aspherical Surfaces

Example 2 has four aspherical surfaces: 26A and 27A on L53, and 33A and 34A on L72. The patent writes the sag in the form

\[
x = \frac{c y^2}{1 + \sqrt{1-(1+k)c^2 y^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12}.
\]

Because the square-root term already contains `(1+k)`, the patent's `k` maps directly to the standard conic constant K. All four Example-2 aspheres have K = 0, so their conic base is spherical and the departure is carried by the even-order polynomial terms (WO 2024/247472 A1, ¶0066, Table 9). No scale conversion is applied to the coefficients because the prescription is used at source scale.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 26A | 0 | −7.00843e−6 | 4.45006e−9 | −4.06177e−11 | 1.32801e−13 | −1.27343e−16 |
| 27A | 0 | 3.41791e−6 | 6.73792e−10 | −3.44963e−11 | 1.14790e−13 | −1.07093e−16 |
| 33A | 0 | −1.21800e−5 | 1.13098e−7 | −4.11278e−10 | 7.11522e−13 | −3.86505e−16 |
| 34A | 0 | −9.61981e−6 | 1.04374e−7 | −3.40042e−10 | 4.95178e−13 | −1.31978e−16 |

At the final modeled clear semi-diameters, the polynomial departures from the K = 0 base sphere are −0.36215 mm at 26A (h = 15.15 mm), +0.15728 mm at 27A (h = 15.35 mm), −0.0326 mm at 33A (h = 14.465 mm), and +0.0773 mm at 34A (h = 14.60 mm). The rear 33A/34A apertures use half the Table 6 effective diameters; 26A/27A retain modeled clearance. The signs describe the net polynomial sag correction under the patent convention; no single-coefficient aberration interpretation is asserted.

## Conditional Expressions

The patent supplies six design conditions and tabulates Example-2 values in Tables 36–37. Recalculation from the rounded Table-36 source quantities reproduces the printed values within the source precision, with two rounding nuances worth preserving.

| Condition | Patent inequality | Recomputed from Table 36 | Table 37 |
|---|---|---:|---:|
| (1) | −5 ≤ f2/f3 ≤ −0.8 | −0.79744 | −0.80 |
| (2) | −22 ≤ f4/fw ≤ −1.25 | −3.79889 | −3.80 |
| (3) | 0 < f1/ft ≤ 5 | 0.95599 | 0.96 |
| (4) | −3 ≤ (1−βn²)/Fnot ≤ −0.1 | −2.02019 | −2.03 |
| (5) | 3.2 ≤ Nnp + 0.1νnp ≤ 4.5 | 4.086 | 4.08 |
| (6) | 1.6 ≤ Np3 | 1.7676 | 1.76 |

Condition (1) illustrates why the rounded source tables must not be treated as exact hidden-precision values: direct division of the printed f2 = −37.99 mm and f3 = 47.64 mm gives −0.79744, slightly above the literal −0.8 upper bound, while Table 37 prints −0.80. The dossier therefore records this as a source-rounding discrepancy rather than rewriting the inequality or widening the underlying prescription. Condition (5) similarly recomputes to 4.086 from the rounded inputs while Table 37 prints 4.08. Neither discrepancy changes the implemented prescription.

## Image Stabilization

Sony markets the production FE 70–200mm F4 Macro G OSS II with Optical SteadyShot. The selected Example-2 numerical prescription, however, supplies only axial zoom and focus spacing states; it does not provide a decenter or tilt state for an image-stabilization group in Tables 6–10. The final data therefore models no stabilization displacement and does not identify a specific Example-2 group as the production OSS actuator. The production mechanical feature and the patent's executable sequential prescription are kept separate.

## Verification Summary

The final `.data.ts` was parsed directly and recomputed with both sequential height/reduced-angle tracing and a separately multiplied ABCD formulation. The two methods agree to numerical precision at all three infinity zoom states.

| State | Patent f (mm) | Verified EFL (mm) | Residual (mm) | Verified track to image (mm) | Verified BFL from last modeled surface (mm) |
|---|---:|---:|---:|---:|---:|
| Wide | 72.15 | 72.105394 | −0.044606 | 170.01 | 31.321515 |
| Mid | 119.70 | 119.678958 | −0.021042 | 195.78 | 31.271270 |
| Tele | 192.89 | 192.992121 | +0.102121 | 243.46 | 31.316579 |

The verified Petzval sum of the normalized physical prescription is +0.0003251591 mm⁻¹, corresponding to a Petzval radius of approximately 3075.42 mm. The calculation is performed surface by surface as φ/(n·n′) and omits the inactive duplicate S2 from physical-interface bookkeeping.

The inferred semi-diameter model was checked with a 96-state broad endpoint/intermediate sweep using 1,104 exact meridional rays, supplemented by a 0.01-step axial-marginal sweep at three focus samples using 1,212 rays and a dense 0.6-field sweep using 3,636 rays across both piecewise-linear zoom segments. The minimum non-stop radial clearance over those checks is 0.2030 mm; the minimum computed element edge thickness is 0.9862 mm, the maximum authored-rim sag slope is 0.5288 (27.87°), and the minimum shared-band cross-gap margin is 1.0465 mm. All tested conic-domain checks also pass. These portable checks do not substitute for LensVisualizer's production render diagnostics, which remain an integration-stage task.

The production-lens correlation, calibrated iris, and modeled clearance margins remain qualified. Rear S31–S34 effective diameters are source-published; compatible catalog curves improve spectral modeling without establishing the production melts.

## Sources and References

1. Sony Group Corporation, **WO 2024/247472 A1, “Zoom Lens and Image Capture Device,”** PCT/JP2024/013544, published 5 December 2024. Example 2: ¶¶0090–0107, Tables 6–10, Fig. 14; asphere convention: ¶0066; design conditions: Tables 36–37.
2. Sony Japan, **FE 70-200mm F4 Macro G OSS II announcement**, 12 July 2023: https://www.sony.jp/CorporateCruise/Press/202307/23-0712B/
3. Sony Electronics, **FE 70-200mm F4 Macro G OSS II product page (SEL70200G2)**: https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel70200g2
4. Sony Support, **SEL70200G2 specifications**: https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel70200g2/specifications

## Catalog spectral proxy audit

The integration audit retains every patent index and Abbe value. The following annotations now select coordinate-compatible catalog curves at runtime, without identifying the production supplier or melt. Earlier coordinate-only descriptions above remain source descriptions; an unresolved supplier does not mean that no spectral proxy is available. No measured line indices or unsupported APD tags are added.

| Element | Patent nd / vd | Runtime spectral proxy |
|---|---|---|
| L11 | 1.75453 / 35.3 | NBFD6 |
| L12 | 1.49845 / 81.6 | FCD1 |
| L13 | 1.49845 / 81.6 | FCD1 |
| L21 | 1.51978 / 52.1 | S-NSL36 |
| L23 | 1.7676 / 48.5 | M-TAF101 |
| L24 | 1.73234 / 54.7 | MP-TAC80-60 |
| L31 | 1.7676 / 48.5 | M-TAF101 |
| L42 | 1.55206 / 75.5 | FCD705 |
| L52 | 1.59561 / 67 | S-FPM2 |
| L53 | 1.76821 / 49.1 | M-TAF101 |
| L71 | 1.67717 / 38.3 | ADF405 |
| L72 | 1.77373 / 49.4 | M-TAF105 |

### Diagram glass classifications

L2/L3/L12/L14 receive qualified inferred APD coloring from FCD1/FCD705/S-FPM2 curves. Seven remaining custom coordinates have no further compatible catalog/HOYA candidate; e-line near-matches remain rejected.

Glass-family/APD inferences are display annotations, not additional patent measurements. No catalog-derived line indices or partial-dispersion numbers are authored as patent evidence.
